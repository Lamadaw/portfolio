/* ============================================================================
   EXAMENONDERDELEN  —  kerntaken, werkprocessen en niveaus (één centrale lijst)
   ============================================================================
   Deze lijst wordt op meerdere plekken gebruikt:
     - de fotografie-pagina's (rechtsboven het kadertje "Hoort bij")
     - de videopagina's (idem)
     - de Producties-pagina (met niveaumeters)

   Je hoeft dit alleen aan te passen als de opleiding iets wijzigt.
   WELKE onderdelen bij een foto-categorie of video horen, stel je NIET hier in
   maar per item:
     - foto-categorie : in  data/photos.js   (regel  onderdelen: [...] )
     - video          : in  data/videos.js   (regel  onderdelen: [...] )
   ============================================================================ */

window.ONDERDELEN_DATA = {

  /* De drie niveaus, in volgorde van de meter (links -> rechts). */
  niveaus: ["Beginner", "Gevorderd", "Bekwaam"],

  /* Alle kerntaken met hun werkprocessen en volledige naam. */
  kerntaken: {
    "B1-K1": {
      naam: "Realiseert de AV-productie",
      werkprocessen: {
        "B1-K1-W1": "Bereidt de opnames voor de AV-productie voor",
        "B1-K1-W2": "Maakt opnames voor de AV-productie",
        "B1-K1-W3": "Bewerkt de AV-bestanden",
        "B1-K1-W4": "Levert de AV-(deel)productie op",
        "B1-K1-W5": "Werkt samen ten behoeve van de AV-productie"
      }
    },
    "B1-K2": {
      naam: "Positioneert en profileert zich in de markt",
      werkprocessen: {
        "B1-K2-W1": "Maakt een persoonlijk AV-portfolio",
        "B1-K2-W2": "Participeert in het relevante AV-netwerk"
      }
    },
    "P4-K1": {
      naam: "Ontwikkelt (een deel van) het AV-concept of levert er een bijdrage aan",
      werkprocessen: {
        "P4-K1-W1": "Bepaalt doelgroep, doel en strategie van de AV-productie",
        "P4-K1-W2": "Maakt het AV-(deel)concept of levert input"
      }
    }
  }

};
