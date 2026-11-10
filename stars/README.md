# Cielo

> Tu carta natal, calculada con precisión astronómica. · Your birth chart, calculated with astronomical precision.

A personal, installable astrology web app (Spanish first, English available). It has its own design, its own texts and its own glyphs, and it is not affiliated with any other astrology app.

| | |
|---|---|
| **Hoy · Today** | The daily reading: transits to your chart, the Moon’s phase, sign and house, the void-of-course Moon, retrogrades, *Haz / Evita* (do / avoid), the day’s weather by area, and the tone of the day. You can step back and forward through the days. |
| **Carta · Chart** | The wheel (tap a planet), the Big Three, every planet with its sign, degree, house and aspects, the balance of elements and modes, the houses (Placidus or whole sign), and hand-written interpretations. |
| **Personas · People** | Charts of the people you add, with synastry between your charts: flow, spark and fusion. |
| **Calendario · Calendar** | Twelve months of new and full Moons, eclipses, retrograde stations and sign ingresses, tagged with the house each one falls in and any natal planet it touches. |
| **Diario · Journal** | A daily rating plus an on-device **experiment**: a fixed, pre-registered score, a blind mode, Spearman’s correlation and a permutation test. It checks whether the astrological tone actually matches your days. |
| **Pregúntale a Claude** | Opens claude.ai with your exact chart, today’s transits and your question. |

## Accuracy

- **Ephemeris:** [astronomy-engine](https://github.com/cosinekitty/astronomy) (MIT), vendored in `js/vendor/`. It gives apparent geocentric longitudes, true equinox of date, corrected for light time, aberration, precession and nutation.
- **Lunar node:** the true node, computed as the osculating node.
- **Angles:** the Ascendant and MC come from apparent sidereal time and the true obliquity.
- **Houses:** Placidus by iteration, whole sign as an option, and Porphyry as the fallback above about 66° latitude.
- **Local time to UTC:** the device’s IANA time-zone database, including historical DST. The offset used is always shown.
- **Tests:** `node stars/tests/run.js` compares the engine with the Swiss Ephemeris (`tests/reference.json`, built by `tests/make_reference.py`) on 80 random charts from 1925 to 2035.
  - Planets are within 0.3′, and the Ascendant, MC and Placidus cusps within 0.01′.
  - The tests also check historical time zones, plus equinoxes, eclipses, lunations and Mercury stations against published times.

## Privacy

Everything stays in `localStorage` on the device. There are only two network calls, and both happen only when you choose them:

- the optional place search, which sends Open-Meteo only the typed place name;
- *Ask Claude*.

## Run it

```bash
python3 -m http.server 8000   # then open http://localhost:8000/stars/
node stars/tests/run.js       # accuracy tests
```

City list: [city-timezones](https://github.com/kevinroberts/city-timezones) (MIT). Online geocoding: [Open-Meteo](https://open-meteo.com/) (GeoNames data, CC BY 4.0).
