/* ============================================================================
   Onderdelen — gedeelde helper om examenonderdelen netjes te tonen.
   Leest data uit window.ONDERDELEN_DATA (data/onderdelen.js).
   Niet bedoeld om aan te passen; pas de inhoud aan in data/onderdelen.js.
   ============================================================================ */
window.Onderdelen = (function () {
  var DATA = window.ONDERDELEN_DATA || { niveaus: [], kerntaken: {} };
  var NIVEAUS = DATA.niveaus || [];
  var KT = DATA.kerntaken || {};

  function esc(s) {
    return String(s == null ? '' : s)
      .replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;')
      .replace(/"/g, '&quot;');
  }

  // "B1-K1-W1" -> "B1-K1" ; "B1-K1" -> "B1-K1"
  function ktCode(code) {
    var p = String(code).split('-');
    return p.length >= 2 ? (p[0] + '-' + p[1]) : code;
  }
  function isWerkproces(code) { return /-W\d+$/i.test(String(code)); }

  // Volledige naam bij een code (kerntaak- of werkprocesnaam)
  function naamVoor(code) {
    var kt = KT[ktCode(code)];
    if (!kt) return '';
    if (isWerkproces(code)) return (kt.werkprocessen && kt.werkprocessen[code]) || '';
    return kt.naam || '';
  }

  // 3-staps niveaumeter (of leeg als geen geldig niveau)
  function meter(niveau) {
    if (!niveau) return '';
    var idx = NIVEAUS.indexOf(niveau);
    var filled = idx >= 0 ? idx + 1 : 0;
    var segs = '';
    for (var i = 0; i < NIVEAUS.length; i++) {
      segs += '<span class="seg' + (i < filled ? ' on' : '') + '"></span>';
    }
    return '<span class="meter" role="img" aria-label="Niveau: ' + esc(niveau) + '">' +
             '<span class="meter-bar">' + segs + '</span>' +
             '<span class="meter-label">' + esc(niveau) + '</span>' +
           '</span>';
  }

  // Compact "Hoort bij" kadertje. items = array van strings ("B1-K1-W2")
  // of objecten ({ code, niveau }). opts.kop overschrijft de titel.
  function renderBadge(items, opts) {
    items = items || [];
    if (!items.length) return '';
    opts = opts || {};
    var kop = opts.kop || 'Hoort bij';
    var rows = items.map(function (it) {
      var code = typeof it === 'string' ? it : it.code;
      var niveau = typeof it === 'string' ? '' : it.niveau;
      return '<li>' +
               '<span class="ob-code">' + esc(code) + '</span>' +
               '<span class="ob-naam">' + esc(naamVoor(code)) + '</span>' +
               (niveau ? meter(niveau) : '') +
             '</li>';
    }).join('');
    return '<aside class="onderdelen-badge">' +
             '<span class="ob-kop">' + esc(kop) + '</span>' +
             '<ul>' + rows + '</ul>' +
           '</aside>';
  }

  // Verticaal "Behaalde leerdoelen" paneel (geschikt voor een smalle zijbalk).
  // items = array van { code, niveau } (of strings zonder niveau).
  function renderLeerdoelen(items, opts) {
    items = items || [];
    if (!items.length) return '';
    opts = opts || {};
    var kop = opts.kop || 'Behaalde leerdoelen';
    var rows = items.map(function (it) {
      var code = typeof it === 'string' ? it : it.code;
      var niveau = typeof it === 'string' ? '' : it.niveau;
      return '<li>' +
               '<div class="lp-top">' +
                 '<span class="ob-code">' + esc(code) + '</span>' +
                 '<span class="lp-naam">' + esc(naamVoor(code)) + '</span>' +
               '</div>' +
               (niveau ? meter(niveau) : '') +
             '</li>';
    }).join('');
    return '<div class="leerdoelen-panel">' +
             '<span class="lp-kop">' + esc(kop) + '</span>' +
             '<ul>' + rows + '</ul>' +
           '</div>';
  }

  return {
    data: DATA, niveaus: NIVEAUS, kerntaken: KT,
    esc: esc, ktCode: ktCode, isWerkproces: isWerkproces,
    naamVoor: naamVoor, meter: meter, renderBadge: renderBadge,
    renderLeerdoelen: renderLeerdoelen
  };
})();
