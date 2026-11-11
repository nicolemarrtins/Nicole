"""Builds js/chiron-data.js (heliocentric ICRF vectors of 2060 Chiron, 60-day steps, 1900–2100) and
tests/chiron-reference.json (apparent geocentric ecliptic longitudes) from NASA/JPL Horizons text output.

    curl "https://ssd.jpl.nasa.gov/api/horizons.api?format=text&COMMAND='2060;'&EPHEM_TYPE='VECTORS'&CENTER='500@10'
          &START_TIME='1899-12-01'&STOP_TIME='2101-02-01'&STEP_SIZE='60 d'&REF_PLANE='FRAME'&OUT_UNITS='AU-D'
          &VEC_TABLE='1'&CSV_FORMAT='YES'" > chiron-vectors.txt
    curl "...EPHEM_TYPE='OBSERVER'&CENTER='500@399'&TLIST='<JDs>'&QUANTITIES='31'&CSV_FORMAT='YES'..." > chiron-obs.txt
    python3 make_chiron.py chiron-vectors.txt chiron-obs.txt "<the same JDs, space separated>"
"""
import json, os, sys

here = os.path.dirname(os.path.abspath(__file__))
vec, obs, jds = sys.argv[1], sys.argv[2], [float(x) for x in sys.argv[3].split()]

def block(path):
    lines, on = [], False
    for line in open(path):
        if line.startswith("$$SOE"): on = True; continue
        if line.startswith("$$EOE"): break
        if on and line.strip(): lines.append([c.strip() for c in line.split(",")])
    return lines

rows = block(vec)
jd0 = float(rows[0][0]); step = round(float(rows[1][0]) - jd0, 6)
xs, ys, zs = [], [], []
for r in rows:
    xs.append(round(float(r[2]), 7)); ys.append(round(float(r[3]), 7)); zs.append(round(float(r[4]), 7))
data = {"source": "NASA/JPL Horizons, 2060 Chiron, heliocentric ICRF (AU), TDB", "jd0": jd0, "step": step, "x": xs, "y": ys, "z": zs}
js = ("/* Chiron (2060): heliocentric equatorial J2000/ICRF positions every %g days from JD %s (TDB), from NASA/JPL Horizons.\n"
      "   Interpolated in astro.js and turned into apparent geocentric positions. */\n"
      "(function (root) { var D = %s;\n  if (typeof module === \"object\" && module.exports) module.exports = D; else root.CHIRON_DATA = D;\n"
      "})(typeof self !== \"undefined\" ? self : this);\n") % (step, jd0, json.dumps(data, separators=(",", ":")))
open(os.path.join(here, "..", "js", "chiron-data.js"), "w").write(js)

ref = []
for jd, r in zip(jds, block(obs)):
    ref.append({"jdUT": jd, "lon": float(r[3]), "lat": float(r[4])})
json.dump({"source": "NASA/JPL Horizons observer table, quantity 31 (apparent ecliptic of date, geocentre)", "cases": ref},
          open(os.path.join(here, "chiron-reference.json"), "w"), indent=0)
print(len(xs), "vectors, step", step, "| reference cases", len(ref))
