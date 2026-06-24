/* ============================================================================
   VIDEO'S  —  bewerk hier de YouTube-video's
   ============================================================================
   Per video:
     id       = het stukje achter youtu.be/  (bv https://youtu.be/ABC123 -> "ABC123")
     titel    = laat LEEG ("") om automatisch de echte YouTube-titel op te halen,
                of typ hier zelf een titel om die te forceren.
     fallback = titel die getoond wordt als de YouTube-titel niet opgehaald kan worden.
     onderdelen = examenonderdelen die bij deze video horen (codes uit
                  data/onderdelen.js). Worden rechtsboven op de videopagina
                  getoond in het kadertje "Hoort bij".
   ============================================================================ */

window.VIDEO_DATA = {
  smiling:     { id: "YsNdEVphd7U", titel: "", fallback: "ONNR Docu",         onderdelen: ["P4-K1-W2", "B1-K1-W1", "B1-K1-W2", "B1-K1-W3", "B1-K1-W4", "B1-K1-W5"] },
  interview:   { id: "IwiSgLlj0bE", titel: "", fallback: "Vega Interview",    onderdelen: ["P4-K1-W2", "B1-K1-W1", "B1-K1-W2", "B1-K1-W3", "B1-K1-W4", "B1-K1-W5"] },
  space:       { id: "PFd1b19-PMQ", titel: "", fallback: "dracula videoclip", onderdelen: ["P4-K1-W2", "B1-K1-W1", "B1-K1-W2", "B1-K1-W3", "B1-K1-W4", "B1-K1-W5"] },
  bakeperfect: { id: "lOTfbvQWaPQ", titel: "", fallback: "BakePerfect",       onderdelen: ["P4-K1-W2", "B1-K1-W1", "B1-K1-W2", "B1-K1-W3", "B1-K1-W4", "B1-K1-W5"] }
};
