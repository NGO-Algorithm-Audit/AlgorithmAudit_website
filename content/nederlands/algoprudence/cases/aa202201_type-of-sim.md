---
layout: case
title: Type simkaart als voorspeller voor betalingsfraude
subtitle: |
  Probleemstelling (ALGO:AA:2022:01:P) en adviesdocument (ALGO:AA:2022:01:A)
image: /images/algoprudence/AA202201/Cover.png
dynamic_form_engine:
  - title: Reageer op dit normatieve oordeel
    content: >-
      Uw reactie wordt verstuurd naar het auditing team. Het team leest de reactie
      en, indien het verenigbaar is met Algorithm Audit's richtlijnen voor
      publicatie, wordt de reactie geplaatst in bovenstaande Discussie & debat
      sectie.
    id: case-reaction
    icon: fas fa-align-justify
    section:
      - questions:
          - title: |
              Naam
            identifier: name
            required: true
            type: text
          - title: |
              Affiliated organization
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
            type: email
            placeholder: Emailadres
    complete_form_options:
      type: submit
      button_text: Verstuur
      backend_link: "https://formspree.io/f/xyyrjyzr"
---

{{< tab_header width="6" tab1_id="description" tab1_title="Beschrijving algoprudentie" tab2_id="" tab2_title="" tab3_id="" tab3_title="" default_tab="description" >}}

{{< tab_content_open icon="fa-sim-card" title="Type simkaart als voorspeller voor betalingsfraude" id="description" >}}

#### Algoprudentienummer

ALGO:AA:2022:01

#### Samenvatting advies

De normatieve adviescommissie adviseert tegen het gebruik van type simkaart als inputvariabele voor een risicopredictie-algoritme dat betalingsachterstanden voorspelt voor klanten van een e-commerce platform. De commissie acht het waarschijnlijk dat type simkaart fungeert als een proxy-variabele voor gevoelige demografische categorieën. Door gebruik van de variabele zou het model een onaanvaardbaar risico lopen om kwetsbare demografische groepen uit te sluiten van de mogelijkheden om producten achteraf te betalen. Bij gebrek aan betrouwbare gegevens die het tegendeel aantonen, weegt het ethische risico van het opnemen van de simkaart-variabele in het ML-algortime zwaarder dan de mogelijke voordelen. De commissie adviseert om verschillende alternatieven te overwegen bij het omgaan met betalingsachterstanden.

#### Bron van casus

Geanonimiseerde multinational met e-commerce platform.

#### Probleemstelling en adviesdocument

{{< embed_pdf url="/pdf-files/algoprudence/ALGO_AA202201/ALGO_AA202201_Report_Type_SIM.pdf" >}}

#### Normatieve adviescommissie

- Fleur Jongepier, Assistant Professor Digital Ethics, Radboud University
- Jan Overgoor, PhD Management Science and Engineering, Stanford University
- Merel Noorman, Assistant Professor Law, Technology and Society, Tilburg University
- Roel Dobbe, Assistant Professor Engineering Systems and Services, TU Delft

{{< tab_content_close >}}

{{< dynamic_form_engine index="0" >}}
