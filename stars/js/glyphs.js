/* Cielo — hand-drawn line glyphs (24×24, stroked with currentColor) so symbols look the same on every
   device instead of turning into colour emoji on iPhone. Injected once as an SVG sprite. */
(function () {
  var C = function (cx, cy, r, fill) { return '<circle cx="' + cx + '" cy="' + cy + '" r="' + r + '"' + (fill ? ' fill="currentColor" stroke="none"' : "") + "/>"; };
  var P = function (d) { return '<path d="' + d + '"/>'; };
  var G = {
    aries: P("M12 21V8.5M12 8.5C12 4.8 9.6 3.2 7.6 3.2C5.2 3.2 3.6 5 3.6 7.1C3.6 8.7 4.6 9.8 6 10.2M12 8.5C12 4.8 14.4 3.2 16.4 3.2C18.8 3.2 20.4 5 20.4 7.1C20.4 8.7 19.4 9.8 18 10.2"),
    taurus: C(12, 15, 5.4) + P("M4 3.8C5.2 7.6 8.2 9.6 12 9.6C15.8 9.6 18.8 7.6 20 3.8"),
    gemini: P("M4.5 4C9.3 6.1 14.7 6.1 19.5 4M4.5 20C9.3 17.9 14.7 17.9 19.5 20M8.6 5.3V18.7M15.4 5.3V18.7"),
    cancer: C(7, 9.2, 2.7) + C(17, 14.8, 2.7) + P("M7 6.5C10.6 4.2 16.2 4.1 20.6 7.8M17 17.5C13.4 19.8 7.8 19.9 3.4 16.2"),
    leo: C(7, 15.6, 3.1) + P("M10.1 15.6C10.1 12.1 7.6 10.2 7.6 7.2C7.6 4.4 9.8 2.9 12.3 2.9C15 2.9 17 4.7 17 7.3C17 10.6 14 13.1 14 16.6C14 19.1 15.6 20.9 17.6 20.9C19.2 20.9 20.3 19.9 20.8 18.6"),
    virgo: P("M3.4 6.6C4.4 5.4 6 5.6 6 7.6V18.4M6 8.6C6 5.8 10 5.3 10 8.6V18.4M10 8.6C10 5.8 14 5.3 14 8.6V16.2C14 18.9 15.6 20.8 18.2 20.6M14 12.4C15.4 10.1 19.8 10 19.8 13.3C19.8 16.4 16.8 18.6 12.6 19.8"),
    libra: P("M3.5 19.6H20.5M3.5 15.6H8.3C6.9 14.4 6 12.6 6 10.8C6 7.5 8.7 4.8 12 4.8C15.3 4.8 18 7.5 18 10.8C18 12.6 17.1 14.4 15.7 15.6H20.5"),
    scorpio: P("M3.4 6.6C4.4 5.4 6 5.6 6 7.6V18.4M6 8.6C6 5.8 10 5.3 10 8.6V18.4M10 8.6C10 5.8 14 5.3 14 8.6V16.6C14 18.9 15.3 19.9 17 19.9H20.6M18.2 17.5L20.6 19.9L18.2 22.3"),
    sagittarius: P("M4.5 19.5L19.5 4.5M11.8 4.5H19.5V12.2M7.6 10.6L13.4 16.4"),
    capricorn: P("M3.4 6.4C4.9 5.3 6.1 5.9 6.6 7.5L9.9 18.2L13.1 7.6C13.7 5.6 15.6 5.6 15.6 7.6V15.2M15.6 15.2C15.6 12.6 20.6 12.5 20.6 15.6C20.6 18.6 17.2 20.2 15.4 18.6C14.4 17.7 13.2 19.9 11 21"),
    aquarius: P("M3 10.6L6.5 7.2L10 10.6L13.5 7.2L17 10.6L20.5 7.2M3 17.4L6.5 14L10 17.4L13.5 14L17 17.4L20.5 14"),
    pisces: P("M6 3.4C10.2 7.4 10.2 16.6 6 20.6M18 3.4C13.8 7.4 13.8 16.6 18 20.6M4.4 12H19.6"),
    sun: C(12, 12, 8.2) + C(12, 12, 1.7, 1),
    moon: P("M8 3.4A8.6 8.6 0 0 1 8 20.6A11.2 11.2 0 0 0 8 3.4Z"),
    mercury: C(12, 11.2, 4.2) + P("M8 2.8C8.6 5.6 10.2 7 12 7C13.8 7 15.4 5.6 16 2.8M12 15.4V21.8M9 18.6H15"),
    venus: C(12, 8.8, 5.3) + P("M12 14.1V21.9M8.6 18.3H15.4"),
    mars: C(9.8, 14.2, 5.6) + P("M13.8 10.2L20 4M14.4 4H20V9.6"),
    jupiter: P("M4.6 7C4.6 4.6 6.3 3.2 8.3 3.2C10.7 3.2 11.9 5.4 10.7 8C9.6 10.5 6.9 13.5 4.6 16.1H19.6M15.6 4V21.4"),
    saturn: P("M7.6 3V17M4.6 6.2H10.6M7.6 10.6C8.9 8.7 10.9 7.9 12.7 7.9C15.1 7.9 16.7 9.7 16.7 12.1C16.7 14.9 13.5 16.5 13.5 19.1C13.5 20.7 14.7 21.5 16.1 21.5C17.1 21.5 17.9 21.1 18.5 20.3"),
    uranus: C(12, 18.4, 2.7) + P("M6.4 3.6V14.4M17.6 3.6V14.4M6.4 9H17.6M12 4.2V15.7"),
    neptune: P("M5 4.4V7.6C5 11.6 8.1 14.1 12 14.1C15.9 14.1 19 11.6 19 7.6V4.4M12 3V21.6M8.6 18H15.4"),
    pluto: C(12, 6.4, 2.6) + P("M6 4.4C6 9.6 8.7 12.6 12 12.6C15.3 12.6 18 9.6 18 4.4M12 12.6V21.6M8.8 17.6H15.2"),
    asc: '<text x="12" y="16.3" text-anchor="middle" font-size="10.5" font-weight="700" fill="currentColor" stroke="none" font-family="-apple-system, BlinkMacSystemFont, Helvetica, Arial, sans-serif">AC</text>',
    mc: '<text x="12" y="16.3" text-anchor="middle" font-size="10.5" font-weight="700" fill="currentColor" stroke="none" font-family="-apple-system, BlinkMacSystemFont, Helvetica, Arial, sans-serif">MC</text>',
    node: C(6.3, 18.6, 2.1) + C(17.7, 18.6, 2.1) + P("M7.4 16.8C4.4 14.9 3.5 12.3 3.5 10C3.5 5.9 7.3 3 12 3C16.7 3 20.5 5.9 20.5 10C20.5 12.3 19.6 14.9 16.6 16.8"),
    conj: C(8.6, 15.4, 4.2) + P("M11.6 12.4L19.2 4.8"),
    sextile: P("M12 3.6V20.4M4.7 7.8L19.3 16.2M4.7 16.2L19.3 7.8"),
    square: P("M5.4 5.4H18.6V18.6H5.4Z"),
    trine: P("M12 4.4L20.2 18.6H3.8Z"),
    quincunx: P("M12 3.8V12.2M5.8 20.2L12 12.2L18.2 20.2"),
    opp: C(6.4, 17.6, 2.9) + C(17.6, 6.4, 2.9) + P("M8.5 15.5L15.5 8.5"),
    retro: P("M6.4 21V4H11.6C14.4 4 16.1 5.8 16.1 8.1C16.1 10.4 14.4 12.2 11.6 12.2H6.4M11.2 12.2L19 21M13.6 17.8L18.6 14.6"),
    star: P("M12 2.8L13.9 10.1L21.2 12L13.9 13.9L12 21.2L10.1 13.9L2.8 12L10.1 10.1Z"),
    gear: C(12, 12, 3.2) + P("M12 2.8V5.4M12 18.6V21.2M2.8 12H5.4M18.6 12H21.2M5.5 5.5L7.3 7.3M16.7 16.7L18.5 18.5M5.5 18.5L7.3 16.7M16.7 7.3L18.5 5.5"),
    back: P("M14.6 5L7.6 12L14.6 19"),
    fwd: P("M9.4 5L16.4 12L9.4 19"),
    close: P("M6 6L18 18M18 6L6 18"),
    plus: P("M12 5V19M5 12H19"),
    spark: P("M12 3.2L13.6 9.4L19.8 11L13.6 12.6L12 18.8L10.4 12.6L4.2 11L10.4 9.4Z") + C(18.6, 18.6, 1.2, 1) + C(5.4, 18.9, 0.9, 1),
    today: C(12, 12, 4.4) + P("M12 2.6V4.8M12 19.2V21.4M2.6 12H4.8M19.2 12H21.4M5.4 5.4L6.9 6.9M17.1 17.1L18.6 18.6M5.4 18.6L6.9 17.1M17.1 6.9L18.6 5.4"),
    wheel: C(12, 12, 9) + C(12, 12, 5.2) + P("M12 3V6.8M12 17.2V21M3 12H6.8M17.2 12H21M5.6 5.6L8.3 8.3M15.7 15.7L18.4 18.4M5.6 18.4L8.3 15.7M15.7 8.3L18.4 5.6"),
    people: C(8.6, 8.4, 3.2) + C(16.4, 9.2, 2.6) + P("M2.8 19.6C3.4 15.9 5.7 13.9 8.6 13.9C11.5 13.9 13.8 15.9 14.4 19.6M14.6 14.3C17.6 14.1 20.4 15.6 21.2 19.2"),
    calendar: P("M4.4 6.4H19.6V20H4.4ZM4.4 10.4H19.6M8.4 3.6V8M15.6 3.6V8") + C(12, 15.2, 1.3, 1),
    journal: P("M6 3.6H17.6C18.5 3.6 19 4.1 19 5V20.4H7.4C6.2 20.4 5.4 19.6 5.4 18.4V4.2M5.4 17.6C5.4 16.6 6.2 16 7.4 16H19M9.2 8H15.2M9.2 11.2H13.6"),
    info: C(12, 12, 9) + P("M12 10.8V16.6") + C(12, 7.6, 1.1, 1)
  };
  var sprite = '<svg xmlns="http://www.w3.org/2000/svg" style="position:absolute;width:0;height:0;overflow:hidden" aria-hidden="true">';
  Object.keys(G).forEach(function (k) {
    sprite += '<symbol id="g-' + k + '" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round">' + G[k] + "</symbol>";
  });
  sprite += "</svg>";
  window.GLYPHS = G;
  window.glyph = function (k, cls, label) {
    return '<svg class="gl' + (cls ? " " + cls : "") + '"' + (label ? ' role="img" aria-label="' + label + '"' : ' aria-hidden="true"') + '><use href="#g-' + k + '"/></svg>';
  };
  function inject() { if (!document.getElementById("glyph-sprite")) { var d = document.createElement("div"); d.id = "glyph-sprite"; d.innerHTML = sprite; document.body.insertBefore(d, document.body.firstChild); } }
  if (document.body) inject(); else document.addEventListener("DOMContentLoaded", inject);
})();
