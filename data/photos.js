/* ============================================================================
   FOTO'S  &  TEKST  TOEVOEGEN   —   bewerk ALLEEN dit bestand
   ============================================================================

   Zo voeg je een foto toe:
   1) Zet je foto (.jpg of .png) in de map:  images/fotografie/
   2) Kopieer hieronder een regel die begint met  { src: ...
   3) Plak hem in de juiste categorie en pas de tekst aan.

   Elke foto heeft 3 dingen:
     src    = de exacte bestandsnaam (let op hoofdletters!), bv "MijnFoto.jpg"
     titel  = de naam die groot bij de foto staat
     tekst  = de uitleg / beschrijving onder de foto

   VOOR/NA (raw links, bewerkt rechts):
     raw    = bestandsnaam van de foto die LINKS getoond wordt (de originele/RAW
              versie, of bij een kleur/zwart-wit paar: de kleurenversie).
              "src" is dan de foto die RECHTS staat (de bewerkte / zwart-wit versie).
     labels = optioneel: ["RAW", "Bewerkt"] is standaard. Voor een kleur/zwart-wit
              paar gebruik je ["Kleur", "Zwart-wit"].
     Laat "raw" weg als er (nog) geen tweede foto is.

   Voorbeeld van een nieuwe foto:
     { src: "zonsondergang.jpg", titel: "Zonsondergang", tekst: "Genomen in Leeuwarden, maart 2026.", exif: { camera: "Canon EOS-1D Mark II", lens: "Zoomlens", diafragma: "f/1.8", sluitertijd: "1/704 s", iso: "80" } },

   Tips:
   - Een komma aan het einde van elke regel niet vergeten.
   - "cover" bovenaan een categorie = de foto die op de overzichtspagina als knop getoond wordt.
   - Je kunt een foto naar een andere categorie verplaatsen door de regel te knippen en plakken.
   ============================================================================ */

window.FOTO_DATA = {

  landschap: {
    naam: "Landschap & Straatfotografie",
    cover: "B68I7153.jpg",
    onderdelen: ["B1-K1-W1", "B1-K1-W2", "B1-K1-W3"],
    beschrijving: {
      kop: "Toelichting proces",
      secties: [
        { kop: "Concept & genre", tekst: "Landschaps- en straatfotografie. Ik leg de sfeer van Leeuwarden vast: historische panden, architectuur en het straatbeeld." },
        { kop: "Voorbereiding", tekst: "Vooraf bedacht welke plekken in het centrum ik wilde fotograferen en op welk moment het licht het mooist zou vallen." },
        { kop: "Materiaal", tekst: "Canon EOS-1D Mark II met een zoomlens. Uit de hand gefotografeerd." },
        { kop: "Camera-instellingen", tekst: "De instellingen per foto (diafragma, sluitertijd en ISO) zie je in de vergroting." },
        { kop: "Belichting", tekst: "Vooral met natuurlijk daglicht gewerkt en de belichting aangepast aan de schaduw en de lucht." },
        { kop: "Compositie", tekst: "Gebruikgemaakt van leidende lijnen en de regel van derden om gebouwen krachtig in beeld te brengen." },
        { kop: "Nabewerking", tekst: "De foto\u2019s zijn nabewerkt in Adobe Lightroom en Photoshop, waar ik de belichting, het contrast en de kleuren heb aangepast." },
        { kop: "Before & after", tekst: "Klik op een foto: waar een onbewerkte versie beschikbaar is, zie je links de RAW en rechts de bewerkte foto." },
        { kop: "Reflectie", tekst: "Wat goed ging: de strakke lijnen en het contrast tussen oud en nieuw komen sterk over. Een volgende keer wil ik vaker op het gouden uur fotograferen en meer met standpunt vari\u00ebren." }
      ]
    },
    fotos: [
      { src: "B68I7145.jpg", titel: "Grachtenpand Leeuwarden", tekst: "Historisch pand aan de gracht in het centrum van Leeuwarden.", exif: { camera: "Canon EOS-1D Mark II", lens: "Zoomlens", diafragma: "", sluitertijd: "", iso: "" } },
      { src: "B68I7153.jpg", titel: "Fries Museum", tekst: "De architectuur van het Fries Museum van onderaf gefotografeerd.", exif: { camera: "Canon EOS-1D Mark II", lens: "Zoomlens", diafragma: "", sluitertijd: "", iso: "" } },
      { src: "B68I7171.jpg", titel: "Achmeatoren", tekst: "Het hoogste gebouw van Leeuwarden tegen een blauwe lucht.", exif: { camera: "Canon EOS-1D Mark II", lens: "Zoomlens", diafragma: "", sluitertijd: "", iso: "" } },
      { src: "B68I7214.jpg", raw: "B68I7214-raw.jpg", titel: "Oude muur", tekst: "Contrast tussen oude baksteen en moderne stad.", exif: { camera: "Canon EOS-1D Mark II", lens: "Zoomlens", diafragma: "f/20", sluitertijd: "1/125 s", iso: "1250" } },
      { src: "zwartwit-3.jpg", raw: "B68I7230.jpg", labels: ["Kleur", "Zwart-wit"], titel: "Schaduwen", tekst: "Wandelaars met lange schaduwen — kleur versus zwart-wit.", exif: { camera: "Canon EOS-1D Mark II", lens: "Zoomlens", diafragma: "f/22", sluitertijd: "1/125 s", iso: "1250" } },
      { src: "B68I7248.jpg", raw: "B68I7248-raw.jpg", titel: "Barbershop", tekst: "Een klassieke barberspaal in het straatbeeld.", exif: { camera: "Canon EOS-1D Mark II", lens: "Zoomlens", diafragma: "f/22", sluitertijd: "1/125 s", iso: "1250" } }
    ]
  },

  portret: {
    naam: "Portret Fotografie",
    cover: "portret-blauw2.jpg",
    onderdelen: ["B1-K1-W1", "B1-K1-W2", "B1-K1-W3"],
    beschrijving: {
      kop: "Toelichting proces",
      secties: [
        { kop: "Concept & genre", tekst: "Portretfotografie in de studio en op locatie, met de blik en de uitdrukking als belangrijkste onderwerp." },
        { kop: "Voorbereiding", tekst: "Locatie en lichtopstelling vooraf bepaald en met het model afgesproken welke sfeer ik wilde." },
        { kop: "Materiaal", tekst: "Canon EOS-1D Mark II met een zoomlens. Deels studiolicht, deels natuurlijk raamlicht." },
        { kop: "Camera-instellingen", tekst: "De instellingen per foto (diafragma, sluitertijd en ISO) zie je in de vergroting." },
        { kop: "Belichting", tekst: "Gewerkt met gekleurd licht en zacht raamlicht om diepte en sfeer te cre\u00ebren." },
        { kop: "Compositie", tekst: "Strak gekadreerd met scherpe focus op de ogen en een rustige achtergrond." },
        { kop: "Nabewerking", tekst: "De foto\u2019s zijn nabewerkt in Adobe Lightroom en Photoshop, waar ik de belichting, het contrast en de kleuren heb aangepast." },
        { kop: "Before & after", tekst: "Klik op een foto: waar een onbewerkte versie beschikbaar is, zie je links de RAW en rechts de bewerkte foto." },
        { kop: "Reflectie", tekst: "Wat goed ging: het kleurcontrast en de scherpte op de ogen geven sterke portretten. Verbeterpunt: nog bewuster letten op de houding en de handen van het model." }
      ]
    },
    fotos: [
      { src: "portret-blauw2.jpg", raw: "portret-blauw2-raw.jpg", titel: "Studioportret (lach)", tekst: "Portret met warm licht tegen een blauw gordijn.", exif: { camera: "Canon EOS-1D Mark II", lens: "Zoomlens", diafragma: "f/5", sluitertijd: "1/100 s", iso: "3200" } },
      { src: "portret-blauw1.jpg", raw: "portret-blauw1-raw.jpg", titel: "Studioportret", tekst: "Portret met warm licht tegen een blauw gordijn.", exif: { camera: "Canon EOS-1D Mark II", lens: "Zoomlens", diafragma: "f/5", sluitertijd: "1/100 s", iso: "3200" } },
      { src: "DSC00986.jpg", raw: "DSC00986-raw.jpg", titel: "Groen licht", tekst: "Portret met sfeervolle groene belichting.", exif: { camera: "Canon EOS-1D Mark II", lens: "Zoomlens", diafragma: "f/2.8", sluitertijd: "1/40 s", iso: "800" } },
      { src: "DSC00989.jpg", titel: "Op de trap", tekst: "Rustig portret in een gang, geschoten door planten heen.", exif: { camera: "Canon EOS-1D Mark II", lens: "Zoomlens", diafragma: "f/2.8", sluitertijd: "1/40 s", iso: "800" } },
      { src: "DSC00992.jpg", raw: "DSC00992-raw.jpg", titel: "Filmmaker", tekst: "Portret bij de ingang van de filmopleiding.", exif: { camera: "Canon EOS-1D Mark II", lens: "Zoomlens", diafragma: "f/2.8", sluitertijd: "1/40 s", iso: "800" } },
      { src: "final.jpg", raw: "final-raw.jpg", titel: "Wit polo", tekst: "Strak portret bij het raam tegen een bakstenen muur.", exif: { camera: "Canon EOS-1D Mark II", lens: "Zoomlens", diafragma: "f/4", sluitertijd: "1/3200 s", iso: "5000" } },
      { src: "final-3.jpg", raw: "final-3-raw.jpg", titel: "Door de planten", tekst: "Portret half verscholen achter groene bladeren.", exif: { camera: "Canon EOS-1D Mark II", lens: "Zoomlens", diafragma: "f/4", sluitertijd: "1/800 s", iso: "5000" } },
      { src: "final-4.jpg", raw: "final-4-raw.jpg", titel: "Flippo's", tekst: "Speels portret tegen een kleurrijke flippo-muur.", exif: { camera: "Canon EOS-1D Mark II", lens: "Zoomlens", diafragma: "f/4", sluitertijd: "1/200 s", iso: "5000" } }
    ]
  },

  creatieve: {
    naam: "Creatieve Fotografie",
    cover: "B68I7215.jpg",
    onderdelen: ["B1-K1-W1", "B1-K1-W2", "B1-K1-W3"],
    beschrijving: {
      kop: "Toelichting proces",
      secties: [
        { kop: "Concept & genre", tekst: "Creatieve en conceptuele fotografie waarin ik speel met techniek, kleur en perspectief." },
        { kop: "Voorbereiding", tekst: "Per beeld een idee uitgewerkt, bijvoorbeeld een miniatuursc\u00e8ne of een kleur-versus-zwart-witvergelijking." },
        { kop: "Materiaal", tekst: "Canon EOS-1D Mark II met een zoomlens. Met enkele eenvoudige props." },
        { kop: "Camera-instellingen", tekst: "De instellingen per foto (diafragma, sluitertijd en ISO) zie je in de vergroting." },
        { kop: "Belichting", tekst: "Bewust met kleurlicht en contrast gewerkt om een eigen sfeer te maken." },
        { kop: "Compositie", tekst: "Gespeeld met diepte, vlakverdeling en focus om de aandacht te sturen." },
        { kop: "Nabewerking", tekst: "De foto\u2019s zijn nabewerkt in Adobe Lightroom en Photoshop, waar ik de belichting, het contrast en de kleuren heb aangepast." },
        { kop: "Before & after", tekst: "Klik op een foto: waar een onbewerkte versie beschikbaar is, zie je links de RAW en rechts de bewerkte foto." },
        { kop: "Reflectie", tekst: "Wat goed ging: de beelden hebben een eigen, herkenbare stijl. Verbeterpunt: nog meer durven experimenteren met ongewone standpunten." }
      ]
    },
    fotos: [
      { src: "B68I7215.jpg", raw: "B68I7215-raw.jpg", titel: "Blauwe tegels", tekst: "Abstracte compositie met kleur en vorm.", exif: { camera: "Canon EOS-1D Mark II", lens: "Zoomlens", diafragma: "f/20", sluitertijd: "1/125 s", iso: "1250" } },
      { src: "zwartwit.jpg", raw: "B68I7245.jpg", labels: ["Kleur", "Zwart-wit"], titel: "Beweging", tekst: "Fietser met bewegingsonscherpte — kleur versus zwart-wit.", exif: { camera: "Canon EOS-1D Mark II", lens: "Zoomlens", diafragma: "f/22", sluitertijd: "1/10 s", iso: "100" } },
      { src: "roeier.jpg", titel: "Roeibootje", tekst: "Miniatuur-effect: een klein figuur dat over diep blauw water roeit.", exif: { camera: "Canon EOS-1D Mark II", lens: "Zoomlens", diafragma: "f/5", sluitertijd: "1/125 s", iso: "5000" } },
      { src: "final-2.jpg", titel: "Electric Hollers", tekst: "Conceptueel portret met een platenhoes voor het gezicht.", exif: { camera: "Canon EOS-1D Mark II", lens: "Zoomlens", diafragma: "", sluitertijd: "", iso: "" } },
      { src: "blond_cover2.jpg", titel: "Blond", tekst: "Albumhoes-stijl compositie.", exif: { camera: "Canon EOS-1D Mark II", lens: "Zoomlens", diafragma: "", sluitertijd: "", iso: "" } }
    ]
  },

  product: {
    naam: "Product Fotografie",
    cover: "glazen-goud.jpg",
    onderdelen: ["B1-K1-W1", "B1-K1-W2", "B1-K1-W3"],
    beschrijving: {
      kop: "Toelichting proces",
      secties: [
        { kop: "Concept & genre", tekst: "Productfotografie waarin de vorm, het materiaal en de sfeer van een product centraal staan." },
        { kop: "Voorbereiding", tekst: "Per product een opstelling bedacht met achtergrond, props en lichtrichting." },
        { kop: "Materiaal", tekst: "Canon EOS-1D Mark II met een zoomlens. Met gericht (studio)licht en reflectie." },
        { kop: "Camera-instellingen", tekst: "De instellingen per foto (diafragma, sluitertijd en ISO) zie je in de vergroting." },
        { kop: "Belichting", tekst: "Met gericht licht en reflecties de vorm en het materiaal benadrukt tegen een donkere achtergrond." },
        { kop: "Compositie", tekst: "Strakke, rustige composities zodat het product alle aandacht krijgt." },
        { kop: "Nabewerking", tekst: "De foto\u2019s zijn nabewerkt in Adobe Lightroom en Photoshop, waar ik de belichting, het contrast en de kleuren heb aangepast." },
        { kop: "Before & after", tekst: "Klik op een foto: waar een onbewerkte versie beschikbaar is, zie je links de RAW en rechts de bewerkte foto." },
        { kop: "Reflectie", tekst: "Wat goed ging: het licht laat het materiaal en de reflecties mooi uitkomen. Verbeterpunt: meer variatie in achtergrond en camerahoek uitproberen." }
      ]
    },
    fotos: [
      { src: "iphone-fruit.jpg", titel: "Telefoon tussen het fruit", tekst: "Productfoto van een smartphone te midden van vers verpakt fruit.", exif: { camera: "Canon EOS-1D Mark II", lens: "Zoomlens", diafragma: "f/4", sluitertijd: "1/400 s", iso: "10000" } },
      { src: "B68I7125.jpg", titel: "Parfum", tekst: "Productfoto van een parfumflesje met blauw lichteffect.", exif: { camera: "Canon EOS-1D Mark II", lens: "Zoomlens", diafragma: "f/16", sluitertijd: "5 s", iso: "400" } },
      { src: "glazen-goud.jpg", titel: "Gouden glazen", tekst: "Glazen en fles in warm, gouden licht.", exif: { camera: "Canon EOS-1D Mark II", lens: "Zoomlens", diafragma: "", sluitertijd: "", iso: "" } },
      { src: "fles-kurk.jpg", titel: "Fles met kurk", tekst: "Stilleven met een kurkfles en glazen in donker licht.", exif: { camera: "Canon EOS-1D Mark II", lens: "Zoomlens", diafragma: "", sluitertijd: "", iso: "" } },
      { src: "fles-blauw.jpg", titel: "Blauw stilleven", tekst: "Fles en glas met een koel blauw lichteffect.", exif: { camera: "Canon EOS-1D Mark II", lens: "Zoomlens", diafragma: "", sluitertijd: "", iso: "" } }
    ]
  },

  examen: {
    naam: "Examen",
    cover: "examen-jong.jpg",
    onderdelen: ["P4-K1-W1", "P4-K1-W2", "B1-K1-W2", "B1-K1-W3", "B1-K1-W4"],
    layout: "rij",
    beschrijving: {
      kop: "Examenopdracht",
      secties: [
        { kop: "Voorbereiding", tekst: "Voor deze examenopdracht heb ik online onderzoek gedaan naar het thema verhalen. Ik heb gekeken naar voorbeelden van fotografie waarin een verhaal wordt verteld door middel van beelden. Ook heb ik opgezocht hoe je met gezichtsuitdrukkingen, compositie en licht een boodschap kunt overbrengen. Uiteindelijk besloot ik om verschillende generaties binnen mijn familie te fotograferen." },
        { kop: "Plan", tekst: "Mijn plan was om portretfoto\u2019s te maken van verschillende familieleden, waaronder mijn neefje, broer en vader. Door meerdere generaties vast te leggen wilde ik laten zien hoe leeftijdsverschillen zichtbaar zijn binnen \u00e9\u00e9n familie. De foto\u2019s zijn gemaakt bij mij thuis en bij mijn zus thuis met natuurlijk licht." },
        { kop: "Nabewerking", tekst: "De foto\u2019s heb ik bewerkt in Adobe Lightroom en Photoshop. In Lightroom paste ik de belichting, het contrast en de kleuren aan en in Photoshop deed ik de fijnere retouche. De onbewerkte RAW en het eindresultaat staan naast elkaar bij elke foto." },
        { kop: "Reflectie", tekst: "Ik ben tevreden met het eindresultaat van deze fotoserie. De beelden laten duidelijk het verschil tussen generaties zien, van mijn jonge neefje tot mijn vader. Hierdoor wordt het verhaal van de familie goed zichtbaar. Tijdens het maken van de foto\u2019s heb ik beter leren kijken naar hoe je met portretten een verhaal kunt versterken." }
      ]
    },
    fotos: [
      { src: "examen-jong.jpg", raw: "examen-jong-raw.jpg", titel: "Neefje", tekst: "De jongste generatie.", exif: { camera: "Canon EOS-1D Mark II", lens: "Zoomlens", diafragma: "f/8", sluitertijd: "1/640 s", iso: "5000" } },
      { src: "examen-midden.jpg", raw: "examen-midden-raw.jpg", titel: "Broer", tekst: "De middelste generatie.", exif: { camera: "Canon EOS-1D Mark II", lens: "Zoomlens", diafragma: "f/9", sluitertijd: "1/400 s", iso: "5000" } },
      { src: "examen-oud.jpg", raw: "examen-oud-raw.jpg", titel: "Vader", tekst: "De oudste generatie.", exif: { camera: "Canon EOS-1D Mark II", lens: "Zoomlens", diafragma: "f/9", sluitertijd: "1/200 s", iso: "5000" } }
    ],
      overige: [
        { src: "examen-overig-01.jpg", exif: { camera: "Canon EOS-1D Mark II", lens: "Zoomlens", diafragma: "f/9", sluitertijd: "1/320 s", iso: "5000" } },
        { src: "examen-overig-02.jpg", exif: { camera: "Canon EOS-1D Mark II", lens: "Zoomlens", diafragma: "f/8", sluitertijd: "1/250 s", iso: "5000" } },
        { src: "examen-overig-03.jpg", exif: { camera: "Canon EOS-1D Mark II", lens: "Zoomlens", diafragma: "f/9", sluitertijd: "1/200 s", iso: "5000" } },
        { src: "examen-overig-04.jpg", exif: { camera: "Canon EOS-1D Mark II", lens: "Zoomlens", diafragma: "f/14", sluitertijd: "1/640 s", iso: "5000" } },
        { src: "examen-overig-05.jpg", exif: { camera: "Canon EOS-1D Mark II", lens: "Zoomlens", diafragma: "f/8", sluitertijd: "1/640 s", iso: "5000" } },
        { src: "examen-overig-06.jpg", exif: { camera: "Canon EOS-1D Mark II", lens: "Zoomlens", diafragma: "f/8", sluitertijd: "1/640 s", iso: "5000" } },
        { src: "examen-overig-07.jpg", exif: { camera: "Canon EOS-1D Mark II", lens: "Zoomlens", diafragma: "f/8", sluitertijd: "1/640 s", iso: "5000" } },
        { src: "examen-overig-08.jpg", exif: { camera: "Canon EOS-1D Mark II", lens: "Zoomlens", diafragma: "f/8", sluitertijd: "1/640 s", iso: "5000" } },
        { src: "examen-overig-09.jpg", exif: { camera: "Canon EOS-1D Mark II", lens: "Zoomlens", diafragma: "f/8", sluitertijd: "1/640 s", iso: "5000" } },
        { src: "examen-overig-10.jpg", exif: { camera: "Canon EOS-1D Mark II", lens: "Zoomlens", diafragma: "f/8", sluitertijd: "1/640 s", iso: "5000" } },
        { src: "examen-overig-11.jpg", exif: { camera: "Canon EOS-1D Mark II", lens: "Zoomlens", diafragma: "f/8", sluitertijd: "1/640 s", iso: "5000" } },
        { src: "examen-overig-12.jpg", exif: { camera: "Canon EOS-1D Mark II", lens: "Zoomlens", diafragma: "f/8", sluitertijd: "1/640 s", iso: "5000" } },
        { src: "examen-overig-13.jpg", exif: { camera: "Canon EOS-1D Mark II", lens: "Zoomlens", diafragma: "f/8", sluitertijd: "1/640 s", iso: "5000" } },
        { src: "examen-overig-14.jpg", exif: { camera: "Canon EOS-1D Mark II", lens: "Zoomlens", diafragma: "f/8", sluitertijd: "1/640 s", iso: "5000" } }
      ]
  }

  /* Nieuwe categorie nodig? Kopieer een blok hierboven (van "naam:" t/m "]"),
     plak het hier met een komma ervoor, en geef het een nieuwe naam links. */

};
