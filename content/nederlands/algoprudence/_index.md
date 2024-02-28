---
layout: repository
title: Algoprudentie overzicht
subtitle: >
  Algoprudentie is beschikbaar voor verschillende soorten algoritmes, onder
  andere machine learning-, profilering-, publieke- en private algoritmes.


  We staan open voor nieuwe cases. Dien <span style="color:#005aa7">
  [hier](/algoprudence/submit-a-case/)</span> een case in voor review.
image: /images/svg-illustrations/case_repository.svg
facet_groups:
  - value: year
    title: Jaar
    facets:
      - value: '2023'
        label: '2023'
      - value: '2022'
        label: '2022'
  - value: owner
    title: Algoritme-eigenaar
    facets:
      - value: public
        label: Publieke organisatie
      - value: private
        label: Private organisatie
      - value: self
        label: Algorithm Audit
  - value: type_of_algorithm
    title: Type algoritme
    facets:
      - value: profiling
        label: Profilering
      - value: ml
        label: Machine learning (ML)
      - value: bias_detection_tool
        label: Bias Detection Tool
  - value: ethical_issue
    title: Ethische kwestie
    facets:
      - value: proxy
        label: Proxydiscriminatie
      - value: fp_fn_balancing
        label: Balanceren FP-FNs
algoprudences:
  - title: Risicoprofilering heronderzoek bijstandsuitkering
    intro: >-
      De commissie oordeelt dat algoritmische risicoprofilering onder strikte
      voorwaarden kan worden ingezet voor het selecteren van burgers met een
      bijstandsuitkering voor heronderzoek. Het oogmerk van heronderzoek is een
      leidende factor bij de beoordeling van profile- ringscriteria.
    image: /images/algoprudence/AA202302/AA202302A_front_icon_NL.png
    link: >-
      /nl/algoprudence/cases/risk-profiling-for-social-welfare-reexamination-aa202302/
    facets:
      - value: aa202302
        label: 'AA:2023:02'
      - value: year_2023
        label: '2023'
      - value: owner_public
        label: Publieke organisatie
      - value: type_of_algorithm_profiling
        label: Profilering
      - value: type_of_algorithm_ml
        label: Machine learning
      - value: ethical_issue_proxy
        label: Proxy discriminatie
  - title: BERT-gebaseerd disinformatie detectie
    intro: >-
      De adviescommissie oordeelt dat er een laag risico is van
      (hoger-dimensionale) proxy discriminatie bij de BERT-gebaseerde
      disinformatie detector en dat het waargenomen verschil in algoritmische
      behandeling tussen verschillende soorten Twitter gebruikers
      gerechtvaardigd kan worden, indien bepaalde voorwaarden van toepassing
      zijn.
    image: /images/algoprudence/AA202301/Cover.png
    link: /nl/algoprudence/cases/bert-based-disinformation-classifier-aa202301
    facets:
      - value: aa_2023_01
        label: 'AA:2023:01'
      - value: year_2023
        label: '2023'
      - value: owner_self
        label: Algorithm Audit
      - value: type_of_algorithm_bias_detection_tool
        label: Bias DetectionTool
      - value: type_of_algorithm_ml
        label: Machine learning
      - value: ethical_issue_fp_fn_balancing
        label: Balanceren FP-FNs
  - title: Type sim-kaart als voorspeller voor betalingsfraude
    intro: >-
      De adviescommissie adviseert tegen gebruik van type sim-kaart als input
      variabele voor een risicopredictie-algoritme dat wordt gebruikt om fraude
      met achterafmetalen te voorspellen en gebruikers aan de hand van
      voorspelde risicoscores van de dienst uit te sluiten. Type sim-kaart wordt
      geacht dusdanig een proxy-attribuut te zijn voor bijzondere
      persoonsgegevens dat het predictie-algoritme onaanvaardbaar risico loopt
      om specifieke demografische groepen van de dienst uit te sluiten.
    image: /images/algoprudence/AA202201/Cover.png
    link: >-
      /nl/algoprudence/cases/type-of-sim-card-as-a-predictor-variable-to-detect-payment-fraud-aa202201
    facets:
      - value: AA-2022-01
        label: 'AA:2022:01'
      - value: year_2022
        label: '2022'
      - value: owner_private
        label: Private organisatie
      - value: type_of_algorithm_profiling
        label: Profilering
      - value: ethical_issue_proxy
        label: Proxy discriminatie
title_content: Case overzicht
---

