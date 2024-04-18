---
layout: repository
title: Algoprudentie
subtitle: >
  Algoprudentie is beschikbaar voor verschillende soorten algoritmes, onder
  andere machine learning-, profilering-, publieke- en private algoritmes.


  We staan open voor nieuwe cases. Dien <span
  style="color:#005aa7">[hier</span>](/nl/algoprudence/submit-a-case/) een case
  in voor review.
image: /images/svg-illustrations/case_repository.svg
facet_groups:
  - value: year
    title: Jaar
    facets:
      - value: '2024'
        label: '2024'
      - value: '2023'
        label: '2023'
      - value: '2022'
        label: '2022'
  - value: type_of_audit
    title: Type audit
    facets:
      - value: technical
        label: Technische audit
      - value: normative
        label: Normatief oordeel
  - value: type_of_algorithm
    title: Type algoritme
    facets:
      - value: profiling
        label: Profilering
      - value: rule_based
        label: Regel gebaseerd
      - value: ml
        label: Machine learning
      - value: bias_detection_tool
        label: Bias detectie tool
      - value: high_risk_AI
        label: Hoog-risico AI-systeem
  - value: ethical_issue
    title: Ethische kwestie
    facets:
      - value: proxy
        label: Proxydiscriminatie
      - value: fp_fn_balancing
        label: Balanceren FP-FNs
  - value: standard
    title: Geharmonizeerde normen
    facets:
      - value: risk_management
        label: Risicomanagement
      - value: governance_data_quality
        label: Governance & datakwaliteit
      - value: record_keeping
        label: Administratievereisten
      - value: transparency_provisions
        label: Transparantiebepalingen
      - value: human_oversight
        label: Menselijke tussenkomst
      - value: accuracy_specifications
        label: Nauwkeurigheid specificaties
      - value: robustness_specifications
        label: Robuustheid specificaties
      - value: quality_management_system
        label: Kwaliteitmanagement
  - value: owner
    title: Algoritme-eigenaar
    facets:
      - value: public
        label: Publieke organisatie
      - value: private
        label: Private organisatie
      - value: self
        label: Algorithm Audit
algoprudences:
  - title: Vooringenomenheid voorkomen
    intro: >-
      Afwijkingen zijn geconstateerd in het controleproces van DUO naar misbruik
      met de uitwonendenbeurs. Studenten die dicht bij hun ouder(s) woonden zijn
      aanzienlijk vaker geselecteerde voor controle naar misbruik met de
      uitwonendenbeurs in de periode 2012-2022. Het algoritme dat ter
      ondersteuning van de selectie werd gebruikt functioneerde naar
      verwachting, maar was niet goed onderbouwd.
    image: /images/algoprudence/AA202401/Cover.png
    link: /nl/algoprudence/cases/aa202401_bias-prevented/
    facets:
      - value: AA202401
        label: 'AA:2024:01'
      - value: year_2024
        label: '2024'
        hide: true
      - value: type_of_audit_technical
        label: technische audit
      - value: type_of_algorithm_rule_based
        label: regel gebaseerd
      - value: type_of_algorithm_profiling
        label: profilering
      - value: ethical_issue_proxy
        label: proxydiscriminatie
      - value: owner_public
        label: publieke organisatie
      - value: standard_risk_management
        label: risicomanagement
        hide: true
      - value: standard_governance_data_quality
        label: governance & datakwaliteit
        hide: true
      - value: standard_transparency_provisions
        label: transparantiebepalingen
        hide: true
      - value: standard_human_oversight
        label: menselijke tussenkomst
        hide: true
      - value: standard_quality_management_system
        label: kwaliteitmanagement
        hide: true
  - title: Risicoprofilering heronderzoek bijstandsuitkering
    intro: >-
      De commissie oordeelt dat algoritmische risicoprofilering onder strikte
      voorwaarden kan worden ingezet voor het selecteren van burgers met een
      bijstandsuitkering voor heronderzoek. Het oogmerk van heronderzoek is een
      leidende factor bij de beoordeling van profile- ringscriteria.
    image: /images/algoprudence/AA202302/AA202302A_front_icon_NL.png
    link: >-
      /nl/algoprudence/cases/aa202302_risk-profiling-for-social-welfare-reexamination
    facets:
      - value: aa202302
        label: 'AA:2023:02'
      - value: year_2023
        label: '2023'
        hide: true
      - value: owner_public
        label: publieke organisatie
      - value: type_of_algorithm_profiling
        label: profilering
      - value: type_of_audit_normative
        label: normatief oordeel
      - value: type_of_algorithm_ml
        label: machine learning
      - value: type_of_algorithm_high_risk_AI
        label: hoog-risico AI-systeem
      - value: ethical_issue_proxy
        label: proxydiscriminatie
      - value: standard_risk_management
        label: risicomanagement
        hide: true
      - value: standard_record_keeping
        label: administratievereisten
        hide: true
      - value: standard_transparency_provisions
        label: transparantiebepalingen
        hide: true
      - value: standard_human_oversight
        label: menselijke tussenkomst
        hide: true
      - value: standard_accuracy_specification
        label: nauwkeurigheid specificaties
        hide: true
      - value: standard_robustness_specifications
        label: robuustheid specificaties
        hide: true
      - value: standard_quality_management_system
        label: kwaliteitmanagement
        hide: true
  - title: BERT-gebaseerd disinformatie detectie-algoritme
    intro: >-
      De adviescommissie oordeelt dat er een laag risico is van
      (hoger-dimensionale) proxy discriminatie bij de BERT-gebaseerde
      disinformatie detector en dat het waargenomen verschil in algoritmische
      behandeling tussen verschillende soorten Twitter gebruikers
      gerechtvaardigd kan worden, indien bepaalde voorwaarden van toepassing
      zijn.
    image: /images/algoprudence/AA202301/Cover.png
    link: /nl/algoprudence/cases/aa202301_bert-based-disinformation-classifier
    facets:
      - value: aa_2023_01
        label: 'AA:2023:01'
      - value: year_2023
        label: '2023'
        hide: true
      - value: type_of_audit_normative
        label: normatief oordeel
      - value: type_of_algorithm_bias_detection_tool
        label: bias detectie tool
      - value: type_of_algorithm_ml
        label: machine learning
      - value: type_of_algorithm_high_risk_AI
        label: hoog-risico AI-systeem
      - value: ethical_issue_fp_fn_balancing
        label: balanceren FP-FNs
      - value: owner_self
        label: Algorithm Audit
      - value: disinformation
        label: desinformatie
      - value: standard_risk_management
        label: risicomanagement
        hide: true
      - value: standard_accuracy_specifications
        label: nauwkeurigheid specificaties
        hide: true
      - value: standard_quality_management_system
        label: kwaliteitmanagement
        hide: true
  - title: Type simkaart als voorspeller voor betalingsfraude
    intro: >-
      De adviescommissie adviseert tegen gebruik van type simkaart als input
      variabele voor een risicopredictie-algoritme om misbruik met het achteraf
      betalen van online bestelde producten te voorspellen. Type sim-kaart wordt
      geacht dusdanig een proxy-attribuut te zijn voor bijzondere
      persoonsgegevens dat het predictie-algoritme een onaanvaardbaar risico
      loopt om specifieke demografische groepen van de dienst uit te sluiten.
    image: /images/algoprudence/AA202201/Cover.png
    link: /nl/algoprudence/cases/aa202201_type-of-sim
    facets:
      - value: AA-2022-01
        label: 'AA:2022:01'
      - value: year_2022
        label: '2022'
        hide: true
      - value: type_of_audit_normative
        label: normatief oordeel
      - value: type_of_algorithm_profiling
        label: profilering
      - value: ethical_issue_proxy
        label: proxydiscriminatie
      - value: owner_private
        label: private organisatie
      - value: e_commerce
        label: e-commerce
      - value: standard_risk_management
        label: risicomanagement
        hide: true
      - value: standard_governance_data_quality
        label: governance & datakwaliteit
        hide: true
      - value: standard_transparency_provisions
        label: transparantiebepalingen
        hide: true
title_content: Algoprudentie overzicht
---

