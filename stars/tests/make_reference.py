"""Builds reference.json from the Swiss Ephemeris (pyswisseph, Moshier mode) so Cielo's engine can be
checked against an independent, widely used astrology ephemeris.

    pip install pyswisseph
    python3 make_reference.py [path/to/site-packages]   # writes reference.json next to this file
"""
import json, os, random, sys
from datetime import datetime, timedelta, timezone

if len(sys.argv) > 1:
    sys.path.insert(0, sys.argv[1])
import swisseph as swe

random.seed(20261110)
FLAGS = swe.FLG_MOSEPH | swe.FLG_SPEED
BODIES = [("sun", swe.SUN), ("moon", swe.MOON), ("mercury", swe.MERCURY), ("venus", swe.VENUS), ("mars", swe.MARS),
          ("jupiter", swe.JUPITER), ("saturn", swe.SATURN), ("uranus", swe.URANUS), ("neptune", swe.NEPTUNE),
          ("pluto", swe.PLUTO), ("node", swe.TRUE_NODE), ("meanNode", swe.MEAN_NODE), ("lilith", swe.MEAN_APOG)]

cases = []
for i in range(80):
    base = datetime(1925, 1, 1, tzinfo=timezone.utc)
    when = base + timedelta(seconds=random.randint(0, int((datetime(2035, 12, 31, tzinfo=timezone.utc) - base).total_seconds())))
    lat = round(random.uniform(-56, 62), 4)
    lng = round(random.uniform(-179, 179), 4)
    jd = swe.julday(when.year, when.month, when.day, when.hour + when.minute / 60 + when.second / 3600)
    planets = {}
    for name, pid in BODIES:
        xx, _ = swe.calc_ut(jd, pid, FLAGS)
        planets[name] = [round(xx[0], 6), round(xx[3], 6)]
    cusps, ascmc = swe.houses(jd, lat, lng, b"P")
    extra = {key: [round(c, 6) for c in swe.houses(jd, lat, lng, code)[0][:12]] for key, code in (("koch", b"K"), ("regio", b"R"), ("equal", b"E"))}
    cases.append(dict({
        "utc": when.strftime("%Y-%m-%dT%H:%M:%SZ"), "lat": lat, "lng": lng, "planets": planets,
        "placidus": [round(c, 6) for c in cusps[:12]], "asc": round(ascmc[0], 6), "mc": round(ascmc[1], 6),
    }, **extra))

out = os.path.join(os.path.dirname(os.path.abspath(__file__)), "reference.json")
with open(out, "w") as f:
    json.dump({"source": "Swiss Ephemeris %s (Moshier)" % swe.version, "cases": cases}, f, indent=0)
print("wrote", len(cases), "cases to", out)
