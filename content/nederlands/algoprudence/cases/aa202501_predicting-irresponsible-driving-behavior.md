---
layout: case
title: Voorspellen van onverantwoord rijgedrag
subtitle: |
  Probleemstelling (ALGO:AA:2025:01:P) en adviesdocument (ALGO:AA:2025:01:A)
image: /images/algoprudence/AA202501/Cover_NL.png
dynamic_form_engine:
  - title: Reageer op dit normatieve oordeel
    content: >-
      Uw reactie wordt verstuurd naar het auditing team. Het team leest de reactie en, indien het verenigbaar is met Algorithm Audit’s richtlijnen voor publicatie, wordt de reactie geplaatst in bovenstaande Discussie & debat sectie.
    id: case-reaction
    icon: fas fa-align-justify
    section:
      - questions:
          - title: |
              Name
            identifier: name
            required: true
            type: text
          - title: |
              Organisatie
            identifier: affiliated-organization
            type: text
          - title: |
              Reactie
            identifier: reaction
            required: true
            type: textarea
          - title: |
              Contactgegevens
            identifier: contact-details
            required: true
            type: text
            placeholder: Mail address
    complete_form_options:
      type: submit
      button_text: Verzenden
      backend_link: "https://formspree.io/f/xyyrjyzr"
---

{{< tab_header width="4" tab1_id="description" tab1_title="Beschrijving algoprudentie" tab2_id="actions" tab2_title="Acties volgend op algoprudentie" tab3_id="discussion" tab3_title="Discussie & debat" default_tab="description" >}}

{{< tab_content_open icon="fa-car" title="Voorspellen van onverantwoord rijgedrag" id="description" >}}

#### Algoprudentienummer

ALGO:AA:2025:01

#### Hoofdpunten normatieve adviescommissie

- <span style="color:#005aa7; font-weight:600;">Modelvaliditeit is essentieel</span>\
  Het algoritme moet worden aangepast om specifiek rijgedrag te voorspellen dat tot schade leidt en niet algemeen misbruik van het platform. Zoals bij elk risicovoorspellingsmodel is het van cruciaal belang dat de trainingsdata aansluiten bij het beoogde doel.
- <span style="color:#005aa7; font-weight:600;">Balans tussen monitoring en gebruikersautonomie</span>\
  Het monitoren van onverantwoord rijgedrag om schade te beperken is een legitiem bedrijfsbelang, maar mag niet ontaarden in buitensporig toezicht of betuttelend advies over rijstijl.
- <span style="color:#005aa7; font-weight:600;">Betekenisvolle transparantie vereist</span>\
  Gebruikers hebben behoefte aan specifieke uitleg over welk rijgedrag tot een waarschuwing heeft geleid en aan duidelijke handvatten voor verbetering van rijgedrag, niet aan algemene waarschuwingen of verwarrende technische termen die voor de doorsnee platformgebruiker geen betekenis hebben.
- <span style="color:#005aa7; font-weight:600;">Zorgvuldige variabeleselectie</span>\
   Een te hoge snelheid heeft duidelijke veiligheidsimplicaties, maar variabelen zoals acceleratie zijn lastiger te beoordelen. Dergelijke kenmerken zijn contextafhankelijk en kunnen persoonlijke rijvoorkeuren weerspiegelen. Voor opname van deze variabelen in het model moet overtuigend bewijs zijn dat ze daadwerkelijk bijdragen aan het inschatten van schade­ risico en niet slechts verschillende rijstijlen of rij- omgevingen representeren.
- <span style="color:#005aa7; font-weight:600;">Menselijke controle blijft essentieel</span>\
Menselijke beslismedewerkers wijken momenteel voor 50–60% af van de aanbevelingen van het
risicotaxatie-algoritme, wat wijst op betekenisvolle menselijke tussenkomst in plaats van conformisme.
Deze betekenisvolle menselijke toetsing moet behouden bestaan.

#### Samenvatting advies

De commissie oordeelt dat algoritmische risicovoorspelling voor het identificeren van onverantwoord rijgedrag
alleen onder strikte voorwaarden mag plaatsvinden en zorgvuldig moet worden afgewogen tegenover
alternatieve methoden om schade te beperken. De validiteit van het voorspellingsmodel is cruciaal; de huidige
mismatch tussen het beoogde doel (het voorspellen van onverantwoord rijgedrag) en de gebruikte doelvariabele
gedurende training (geblokkeerde gebruikers op het platform vanwege uiteenlopende vormen van misbruik)
moet daarom eerst worden opgelost. De commissie benadrukt dat monitoring om schade te beperken een
legitiem bedrijfsbelang kan zijn, maar dat dit niet mag ontaarden in buitensporige surveillance of gebruikt
moet worden voor betuttelende feedback over persoonlijke rijstijl. Gebruikers dienen concrete en begrijpelijke
uitleg te krijgen over welk rijgedrag tot een waarschuwing heeft geleid. Algemene meldingen of lijsten van
technische variabelen die voor de meeste gebruikers onduidelijk zijn volstaan niet aan uitlegbaarheidsvereisten.
Daarnaast moeten gebruikte variabelen in het model beter onderbouwd worden, waarbij snelheid de
meest legitieme variabele is; kenmerken zoals ‘snel optrekken’ of ‘hard remmen’ moet zorgvulidg worden
gewogen binnen de (stedelijke) omgeving waarbinnen gereden wordt en er moet overtuigend bewijs worden
verzameld dat deze kenmerken daadwerkelijk bijdragen aan schaderisico. Verder adviseert de commissie om
betekenisvolle menselijke beoordeling van algoritmische aanbevelingen te behouden, zodat het risico op
onterechte waarschuwingen wordt verkleind en gebruikers in bezwaar kunnen gaan tegen een beslissing.

#### Bron van de casus

De casus is afkomstig van een (geanonimiseerd) autodeelplatform, dat met Algorithm Audit heeft samengewerkt om details over de casus te verstrekken. Zowel de commissie als Algorithm Audit hebben dit onderzoek onafhankelijk van het autodeelplatform uitgevoerd. Het onderzoek en het advies zijn niet in opdracht of met financiering van het platform uitgevoerd.

#### Presentatie

Deze case study is gepubliceerd tijdens UNESCO's Expert roundtable II: Capacity building for AI supervisory authorities in Parijs op 30 september 2025. 

<!-- {{< image id="presentation-minister" image1="/images/algoprudence/AA202302/Algorithm audit presentatie BZK FB-18.jpg" alt1="Presentation advice report to Dutch Minister of Digitalization" caption1="Presentation advice report to Dutch Minister of Digitalization" width_desktop="5" width_mobile="12" >}} -->

#### Problemstelling en adviesdocument

{{< embed_pdf url="/pdf-files/algoprudence/ALGO_AA202501/NL/Probleemstelling Voorspellen van onverantwoord rijgedrag.pdf" url2="/pdf-files/algoprudence/ALGO_AA202501/NL/Advies Voorspellen van ontverantwoord rijgedrag.pdf" >}}

#### Normatieve adviescommissie

- Cynthia Liem, Associate Professor at the Multimedia Computing Group, TU Delft
- Hilde Weerts, Assistant Professor Fair and Explainable Machine Learning, TU Eindhoven
- Joris Krijger, AI & Ethics Officer, De Volksbank
- Maaike Harbers, Professor of Applied Sciences (lector) Artificial Intelligence & Society, Rotterdam University of Applied Sciences
- Monique Steijns, Oprichten van The People’s AI agency
- Anne Rijlaarsdam, gebruiker van autodeelplatform.

{{< tab_content_close >}}

{{< tab_content_open icon="" title="" id="actions" >}}

{{< accordions_area_open id="actions" >}}

{{< accordions_area_close >}}

{{< tab_content_close >}}

{{< tab_content_open id="discussion" >}}

{{< accordions_area_open id="discussion" >}}

{{< accordions_area_close >}}

{{< tab_content_close >}}

{{< dynamic_form_engine index="0" >}}
