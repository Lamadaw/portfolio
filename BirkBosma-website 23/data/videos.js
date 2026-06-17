/* ============================================================================
   VIDEO'S  —  bewerk hier de YouTube-video's
   ============================================================================
   Per video:
     id       = het stukje achter youtu.be/  (bv https://youtu.be/ABC123 -> "ABC123")
     titel    = laat LEEG ("") om automatisch de echte YouTube-titel op te halen,
                of typ hier zelf een titel om die te forceren.
     fallback = titel die getoond wordt als de YouTube-titel niet opgehaald kan worden.
   ============================================================================ */

window.VIDEO_DATA = {
  smiling:     { id: "YsNdEVphd7U", titel: "", fallback: "ONNR Docu" },
  interview:   { id: "IwiSgLlj0bE", titel: "", fallback: "Vega Interview" },
  space:       { id: "PFd1b19-PMQ", titel: "", fallback: "dracula videoclip" },
  bakeperfect: { id: "lOTfbvQWaPQ", titel: "", fallback: "BakePerfect" }
};
