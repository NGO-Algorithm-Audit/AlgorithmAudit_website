---
type: regular
title: Documentatie voor AI-systemen
subtitle: >
  Open-source templates voor modeldocumentatie van AI-systemen. Afgestemd op de
  eisen uit de AI Verordening en Nederlandse soft law kaders (zoals
  [Onderzoekskader
  Algoritmes](https://www.rijksoverheid.nl/documenten/rapporten/2023/07/11/onderzoekskader-algoritmes-adr-2023#:~:text=De%20Auditdienst%20Rijk%20heeft%20een,risico's%20beheerst%20\(kunnen\)%20worden.)
  van de Audit Dienst Rijk, het
  [Algoritmekader](https://minbzk.github.io/Algoritmekader/) van het Ministerie
  van Binnenlandse Zaken en impact assessments voor data privacy en fundamentele
  rechten). Help mee ontwikkelen, deel feedback middels
  [Github](https://github.com/NGO-Algorithm-Audit/AlgorithmAudit_website) of via
  [info@algorithmaudit.eu](mailto:info@algorithmaudit.eu).
image: /images/svg-illustrations/case_repository.svg
dynamic_form_engine:
  - title: Identificatie AI-systeem en impactvolle algoritmes
    id: form
    icon: fa fa-star
    content: >
      Bepaal binnen 8 vragen of uw toepassing een AI-systeem of impactvol
      algoritme is.
    section:
      - questions:
          - identifier: intro1
            title: Naam van de toepassing
            content: ''
            required: true
            type: text
          - identifier: intro2
            title: >-
              Geef een korte beschrijving van de toepassing en hoe deze gebruikt
              wordt
            content: ''
            required: true
            type: textarea
          - identifier: intro3
            title: >-
              Naam primair aanspreekpunt binnen de organisatie voor de
              toepassing, bijv. producteigenaar 
            content: ''
            required: true
            type: textyes1
          - identifier: intro4
            title: >-
              Mailadres primair aanspreekpunt binnen de organisatie voor de
              toepassing, bijv. producteigenaar
            content: ''
            required: true
            type: text
          - identifier: intro5
            title: >-
              Welk team binnen de organisatie is primair verantwoordelijk voor
              de toepassing?
            content: ''
            required: true
            type: text
          - identifier: intro6
            title: Binnen welke lijndirectie valt dit team?
            content: ''
            required: true
            type: text
      - questions:
          - identifier: q1
            title: Automatisering van wet- of regelgeving
            content: >
              Is de toepassing een één-op-één automatisering van in wet- of
              regelgeving of van anderszins door mensen opgestelde regels?
            tooltip: >-
              Wanneer de regels binnen uw toepassing vooraf niet expliciet zijn
              opgesteld en gedocumenteerd, kies hier dan "nee".
            options:
              - id: yes1
                value: yes1
                title: 'Ja, wet- of regelgeving '
                content: >
                  Eén-op-één automatisering van in wet- of regelgeving
                  vastgestelde regels
              - id: yes2
                value: yes2
                title: 'Ja, door mensen opgesteld'
                content: >
                  Eén-op-één automatisering van door mensen opgestelde regels
                  (anders dan wet-of regelgeving)
              - id: 'no'
                value: 'no'
                title: Nee
                content: ''
            type: radio
          - identifier: q1-yes1
            title: Welke wet of regelgeving?
            content: ''
            type: text
            visible_when_or:
              - visible_when_and:
                  - identifier: q1
                    value: yes1
          - identifier: output2
            title: Vervolgvraag
            content: >
              Mogelijk sprake van een AI-systeem of algoritme. We stellen u nog
              een vervolgvraag.
            type: radio
            visible_when_or:
              - visible_when_and:
                  - identifier: q1
                    value: yes2
          - identifier: q2
            title: >-
              Bevat de toepassing een model of beslisregels die uit data zijn
              afgeleid?
            content: ''
            tooltip: >-
              Bijvoorbeeld het berekenen van drempelwaardes voor (uitval)regels
              of weegfactoren voor beslissingen uit data, statistische
              modellering of machine learning, inclusief deep learning of large
              language modellen.
            options:
              - id: yes1
                value: yes1
                title: 'Ja, handmatig opgesteld'
                content: >
                  Model of algoritme is handmatig opgesteld, maar ingegeven door
                  data-analyse om bijvoorbeeld selectie van variabelen,
                  weegfactoren of drempelwaardes te bepalen
              - id: yes2
                value: yes2
                title: 'Ja, door statistische methode'
                content: >
                  Model of algoritme is tot stand gekomen doormiddel van
                  optimalisatie, machine learning, simulatie of soortgelijk
              - id: 'no'
                value: 'no'
                title: Nee
                content: ''
            required: true
            type: radio
            visible_when_or:
              - visible_when_and:
                  - identifier: q1
                    value: 'no'
          - identifier: output3
            title: Vervolgvraag
            content: >
              Mogelijk sprake van een AI-systeem of algoritme. We stellen u nog
              een vervolgvraag.
            type: radio
            visible_when_or:
              - visible_when_and:
                  - identifier: q2
                    value: yes1
          - identifier: q3
            title: >-
              Tot welke van de volgende categorieën behoort de uitkomst van de
              toepassing?
            content: ''
            tooltip: >-
              Kies de output categorie die het meest van toepassing is.  Data
              omvat alle vormen van elektronische gegevens. Tekst, afbeeldingen,
              audio zijn ook data.
            options:
              - id: option1
                value: option1
                title: 'Een ingeschatte score, rangschikking of kans'
                content: ''
              - id: option2
                value: option2
                title: Een ingeschat label of classificatie
                content: |
                  Ja/nee, hoog/laag of een indeling in groepen
              - id: option3
                value: option3
                title: Een aanbeveling
                content: ''
              - id: option4
                value: option4
                title: Een beslissing
                content: ''
              - id: option5
                value: option5
                title: 'Content (geschreven tekst, video, audio of  afbeeldingen)'
                content: |
                  Een grafiek of dashboard is geen content
              - id: option6
                value: option6
                title: Een ander soort output
                content: ''
            type: radio
            visible_when_or:
              - visible_when_and:
                  - identifier: q2
                    value: yes2
          - identifier: q4
            title: >-
              Tot welke van de volgende categorieën behoort de uitkomst van de
              toepassing?
            options:
              - id: option1
                value: option1
                title: 'Een ingeschatte score, rangschikking of kans'
              - id: option2
                value: option2
                title: >-
                  Een ingeschat label of classificatie (ja/nee, hoog/laag of een
                  indeling in groepen)
              - id: option3
                value: option3
                title: Een aanbeveling
              - id: option4
                value: option4
                title: Een beslissing
              - id: option5
                value: option5
                title: 'Content (geschreven tekst, video, audio of  afbeeldingen)'
                content: |
                  Een grafiek of dashboard is geen content
              - id: option6
                value: option6
                title: Een ander soort output
            type: radio
            visible_when_or:
              - visible_when_and:
                  - identifier: q1
                    value: yes2
              - visible_when_and:
                  - identifier: q2
                    value: yes1
          - identifier: q2-1
            title: Geef een beschrijving van de output
            content: ''
            type: textarea
            visible_when_or:
              - visible_when_and:
                  - identifier: q2
                    value: option6
          - identifier: output1
            title: Uw toepassing is geen AI-systeem of impactvol algoritme
            content: ''
            type: radio
            visible_when_or:
              - visible_when_and:
                  - identifier: q1
                    value: yes1
              - visible_when_and:
                  - identifier: q2
                    value: 'no'
              - visible_when_and:
                  - identifier: q4
                    value: option6
              - visible_when_and:
                  - identifier: q3
                    value: option6
    complete_form_options:
      type: print
      button_text: Save as pdf
form1:
  title: Intake
  button_text: Meld aan
  backend_link: aa
  id: '#form'
  questions:
    - label: |
        Naam van product
      id: name
      required: true
      type: text
      placeholder: Naam
form2:
  title: Intakeformulier
  content: ''
  button_text: Meld product aan
  backend_link: 'https://formspree.io/f/xeojyqry'
  id: intake
  questions:
    - label: Naam van product
      id: name
      type: text
    - label: Registratienummer (indien niet bekend veld graag leeg laten)
      id: registration-number
      type: text
    - label: Domein waarbinnen product wordt toegepast
      id: domain
      type: text
    - label: Producteigenaar (naam)
      id: product-owner-name
      type: text
    - label: Producteigenaar (mailadres)
      id: product-owner-mail
      type: text
overview_block:
  - title: Overzicht
    content: ''
    icon: null
    id: overview
    items:
      - title: Terug naar overzicht
        icon: fa fa-file
        link: /nl/technical-tools/documentation/#quick-scan
---

{{< overview_block index="0" >}}

{{< dynamic_form_engine index="0" >}}
