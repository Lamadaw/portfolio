/* =========================================================
   SCHOOL — Pre-productie & Post-productie per video
   ---------------------------------------------------------
   Per video kun je een stukje tekst invullen en foto's
   toevoegen voor de PRE-productie (voorbereiding) en de
   POST-productie (montage/bewerking).

   - thumb : hoofdafbeelding van de video (staat in images/)
   - pre   : voorbereiding  -> tekst + lijst foto's
   - post  : nabewerking     -> tekst + lijst foto's
             (zet pre of post op  null  om die video uit dat tabblad
              te halen, bijv:  pre: null )

   Foto's toevoegen: zet het bestand in images/school/ en
   schrijf de bestandsnaam in de "fotos" lijst, bijv:
       fotos: ["onnr-storyboard.jpg", "onnr-planning.jpg"]
   (laat de lijst leeg [] als je nog geen foto's hebt)

   - link      : (optioneel) maak de kaart klikbaar en open een
                 aparte pagina, bijv:  link: "onnr-concept.html"
   - linkLabel : (optioneel) de tekst op de knop onderaan die kaart.
   - leerdoelen: (optioneel) behaalde leerdoelen die rechts op de
                 pre-productie pagina komen, bijv:
                 leerdoelen: [ "B1-K1-W1", "P4-K1-W2" ]
                 (codes & namen staan in data/onderdelen.js)
   ========================================================= */
window.SCHOOL_DATA = {
  videos: [
    {
      naam: "ONNR Docu",
      thumb: "smiling.jpg",
      pre:  { tekst: "Onderzoek naar het onderwerp gedaan, interviewvragen opgesteld en de locaties en planning geregeld. Klik om het volledige concept-document te bekijken.", fotos: ["onnr-concept-cover.jpg"], link: "onnr-concept.html", linkLabel: "Bekijk concept-document",
              leerdoelen: [ "P4-K1-W2", "B1-K1-W1" ] },
      post: { tekst: "De beelden en interviews gemonteerd tot een verhaal, met kleurcorrectie en een nette audiomix.", fotos: [] }
    },
    {
      naam: "Vega Interview",
      thumb: "interview.jpg",
      pre:  { tekst: "Een teamproductie: het gesprek voorbereid, vragen bedacht en de rollen verdeeld. Ik deed de camera. Klik om de rollen en interviewvragen te bekijken.", fotos: [], link: "vega-interview.html", linkLabel: "Bekijk rollen & vragen",
              leerdoelen: [ "P4-K1-W2", "B1-K1-W1", "B1-K1-W2", "B1-K1-W5" ] },
      post: { tekst: "Het interview gemonteerd tot een vloeiend geheel, met ondertiteling en bijgewerkt geluid.", fotos: [] }
    },
    {
      naam: "Dracula videoclip",
      thumb: "space.jpg",
      pre:  { tekst: "Concept en sfeer bedacht, een shotlist gemaakt en de locatie en belichting voorbereid. Klik om het volledige concept & draaiboek te bekijken.", fotos: ["videoclip-keyframe.jpg"], link: "videoclip-concept.html", linkLabel: "Bekijk concept & draaiboek",
              leerdoelen: [ "P4-K1-W2", "B1-K1-W1" ] },
      post: { tekst: "De beelden op de muziek gemonteerd en een donkere kleur-grading toegepast voor de juiste sfeer.", fotos: [] }
    },
    {
      naam: "BakePerfect",
      thumb: "bakeperfect.jpg",
      pre:  { tekst: "De shots en het product gepland en de opstelling met belichting klaargezet. Klik om de volledige pitch & het draaiboek te bekijken.", fotos: [], link: "bakeperfect-pitch.html", linkLabel: "Bekijk de pitch",
              leerdoelen: [ "P4-K1-W1", "P4-K1-W2", "B1-K1-W1" ] },
      post: { tekst: "De commercial gemonteerd, kleur en tempo afgewerkt en geëxporteerd.", fotos: [] }
    }
  ]
};
