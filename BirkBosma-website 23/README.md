# BirkBosma — portfolio website

Een statische portfolio-website (HTML/CSS/JS) voor video's en fotografie.
Je kunt alles bewerken via een paar simpele bestanden in de map `data/` — je hoeft geen code aan te raken.

---

## Snel starten

- **Bekijken:** open `index.html` in een browser (met internet voor de video's).
- **Online zetten (aanrader, hier werken de video's ook):** ga naar
  https://app.netlify.com/drop en sleep de **map** `BirkBosma-website` op de pagina.
  Je krijgt direct een live link.

---

## Mappen en bestanden

```
BirkBosma-website/
  index.html          Voorpagina (video's)
  fotografie.html     Overzicht van de 4 fotocategorieën
  categorie.html      Galerij + grote weergave (voor/na)
  about.html          Over mij
  school.html         School (placeholder)
  beheer.html         Teksten bewerken (met download-knop)
  smiling/interview/space/bakeperfect.html   De losse videopagina's
  css/style.css       Vormgeving
  data/photos.js      >> ALLE foto's, titels, teksten en voor/na <<
  data/about.js       >> About-tekst en about-foto's <<
  data/videos.js      Video's (ter referentie)
  images/             Alle afbeeldingen
    fotografie/       Foto's van de galerijen (+ de -raw versies)
    about/            Foto's van de about-pagina
```

---

## Foto's en teksten aanpassen

### Manier 1 — de tekst-editor (makkelijkst)
1. Open `beheer.html` in je browser.
2. Pas titels, teksten en camera-instellingen (diafragma, sluitertijd, ISO) aan in de invulvelden.
3. Klik op **Download photos.js** en zet dat bestand terug in de map `data/`
   (overschrijf het oude `photos.js`).

### Manier 2 — rechtstreeks in `data/photos.js`
- Een foto toevoegen: zet het bestand in `images/fotografie/` en kopieer een regel:
  `{ src: "mijnfoto.jpg", titel: "Titel", tekst: "Beschrijving." },`
- **Voor/na (raw links, bewerkt rechts):** voeg `raw:` toe:
  `{ src: "bewerkt.jpg", raw: "origineel.jpg", titel: "...", tekst: "..." },`
- **Kleur / zwart-wit paar:** gebruik labels:
  `{ src: "zwartwit.jpg", raw: "kleur.jpg", labels: ["Kleur", "Zwart-wit"], titel: "...", tekst: "..." },`
- **Coverfoto van een categorie:** pas de `cover:` regel bovenaan die categorie aan.

## About-pagina aanpassen
Open `data/about.js`:
- `tekst`  — elke regel tussen "" is één alinea.
- `groot`  — grote foto rechtsboven (bestand in `images/about/`).
- `portret`— zwart-wit foto die eroverheen valt.
- `collage`— rij foto's onderaan (zoveel als je wilt).

## Video's aanpassen
Elke videopagina (`smiling.html`, `interview.html`, `space.html`, `bakeperfect.html`)
heeft de YouTube-link er rechtstreeks in staan. Een video vervangen?
Verander de twee plekken met de video-ID (achter `embed/` en achter `youtu.be/`).

> Video's spelen alleen af in een echte browser mét internet, en het best wanneer
> de site online staat. Unlisted is prima; alleen **Privé** video's spelen niet af.

---

## Projectsamenvatting

**Doel:** een persoonlijke portfoliosite voor video en fotografie, in de stijl van de
Wix-referentie, makkelijk zelf te onderhouden.

**Wat er is gebouwd:**
- Voorpagina met 4 videotegels (ONNR Docu, Vega Interview, dracula videoclip, BakePerfect).
- Fotografie met 4 categorieën (Landschap & Straat, Portret, Creatieve, Product),
  elk met een galerij en een schermvullende weergave.
- Voor/na-weergave: raw links, bewerkt rechts; de fiets- en wandelfoto's zijn
  samengevoegd tot kleur-vs-zwart-wit.
- About-pagina met tekst, een grote foto, een overlappend portret en een collage.
- Tekst-editor (`beheer.html`) om titels/teksten te bewerken en te downloaden.

**Belangrijke keuzes:** statische site (gratis te hosten), alle inhoud via `data/`-bestanden,
afbeeldingen automatisch verkleind/gecomprimeerd, nieuwe uploads krijgen nieuwe namen om
oude foto's niet te overschrijven.

## Volgende stappen
1. Site online zetten (Netlify Drop) en de video's daar testen.
2. De **boot-foto** voor Creatieve nog uploaden (kwam nog niet binnen).
3. Overige **raw-foto's** toevoegen voor meer voor/na-paren.
4. Optioneel: School-pagina invullen, badge/onderschrift op de BakePerfect-tegel,
   eventueel een schuifbalk tussen de voor/na-foto's.
