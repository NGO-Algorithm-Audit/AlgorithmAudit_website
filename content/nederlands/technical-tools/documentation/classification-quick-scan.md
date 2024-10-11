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
      Bepaal aan de hand van maximaal 8 vragen of uw toepassing een AI-systeem
      of impactvol algoritme is.
    section:
      - questions:
          - identifier: intro1
            title: Naam van de toepassing
            content: ""
            tooltip: >-
              Als de toepassing geen formele naam heeft, geef dan een naam op
              die collega's onderling gebruiken om naar deze toepassing te
              verwijzen.
            required: true
            type: text
          - identifier: intro2
            title: >-
              Geef een korte beschrijving van de toepassing en hoe deze gebruikt
              wordt
            content: ""
            required: true
            type: textarea
          - identifier: intro3
            title: >-
              Naam primair aanspreekpunt binnen de organisatie voor de
              toepassing, bijv. producteigenaar
            content: ""
            tooltip: >-
              Wanneer er geen afgestemd aanspreekpunt of eigenaar is, vul hier
              dan voorlopig je eigen naam in. Het algoritme team kan dan contact
              met je opnemen.
            required: true
            type: textyes1
          - identifier: intro4
            title: >-
              Mailadres primair aanspreekpunt binnen de organisatie voor de
              toepassing, bijv. producteigenaar
            content: ""
            required: true
            type: text
          - identifier: intro5
            title: >-
              Welk team binnen de organisatie is primair verantwoordelijk voor
              de toepassing?
            content: ""
            required: true
            type: text
          - identifier: intro6
            title: Binnen welke lijndirectie valt dit team?
            content: ""
            required: true
            type: text
      - questions:
          - identifier: q1
            title: Automatisering van door mensen opgestelde regels
            content: >
              Is de toepassing een één-op-één automatisering van in wet- of
              regelgeving of van anderszins door mensen opgestelde regels?


              <ins>*Wanneer de regels binnen uw toepassing vooraf niet expliciet
              zijn opgesteld en gedocumenteerd, kies hier dan "nee". Software
              vereisten (requirements) waar nog vrijheidsgraden in zitten, zijn
              geen expliciete door mensen opgestelde regels.*</ins>
            tooltip: ""
            options:
              - id: yes1
                value: yes1
                title: "Ja, wet- of regelgeving "
                content: >
                  Eén-op-één automatisering van in wet- of regelgeving
                  vastgestelde regels
              - id: yes2
                value: yes2
                title: "Ja, door mensen opgesteld"
                content: >
                  Eén-op-één automatisering van door mensen opgestelde regels
                  (anders dan wet-of regelgeving)
              - id: "no"
                value: "no"
                title: Nee
                content: ""
            type: radio
            use_card_style: true
          - identifier: q1-yes1
            title: Welke wet of regelgeving?
            content: ""
            required: true
            type: text
            visible_when_or:
              - visible_when_and:
                  - identifier: q1
                    value: yes1
          - identifier: q2
            title: >-
              Bevat de toepassing een model of beslisregels die uit data zijn
              afgeleid?
            content: ""
            tooltip: >-
              Bijvoorbeeld het berekenen van drempelwaardes voor (uitval)regels
              of weegfactoren voor beslissingen uit data, statistische
              modellering of machine learning, inclusief deep learning of large
              language modellen.
            options:
              - id: yes1
                value: yes1
                title: "Ja, handmatig opgesteld"
                content: >
                  Model of algoritme is handmatig opgesteld, maar ingegeven door
                  data-analyse om bijvoorbeeld selectie van variabelen,
                  weegfactoren of drempelwaardes te bepalen
              - id: yes2
                value: yes2
                title: "Ja, door statistische methode"
                content: >
                  Model of algoritme is tot stand gekomen doormiddel van
                  optimalisatie, machine learning, simulatie of soortgelijk
              - id: "no"
                value: "no"
                title: Nee
                content: ""
            required: false
            type: radio
            use_card_style: true
            visible_when_or:
              - visible_when_and:
                  - identifier: q1
                    value: "no"
          - identifier: q3
            title: >-
              Tot welke van de volgende categorieën behoort de uitkomst van de
              toepassing?
            content: ""
            tooltip: >-
              Kies de output categorie die het meest van toepassing is.  Data
              omvat alle vormen van elektronische gegevens. Tekst, afbeeldingen,
              audio zijn ook data.
            options:
              - id: option1
                value: option1
                title: "Een ingeschatte score, rangschikking of kans"
                content: ""
              - id: option2
                value: option2
                title: Een ingeschat label of classificatie
                content: |
                  Ja/nee, hoog/laag of een indeling in groepen
              - id: option3
                value: option3
                title: Een aanbeveling
                content: ""
              - id: option4
                value: option4
                title: Een beslissing
                content: ""
              - id: option5
                value: option5
                title: "Content (geschreven tekst, video, audio of  afbeeldingen)"
                content: |
                  Een grafiek of dashboard is geen content
              - id: option6
                value: option6
                title: Een ander soort output
                content: ""
            type: radio
            use_card_style: true
            visible_when_or:
              - visible_when_and:
                  - identifier: q2
                    value: yes2
          - identifier: q3-option6
            title: Geef een beschrijving van de output
            content: ""
            type: textarea
            visible_when_or:
              - visible_when_and:
                  - identifier: q3
                    value: option6
          - identifier: q4
            title: >-
              Tot welke van de volgende categorieën behoort de uitkomst van de
              toepassing?
            content: ""
            options:
              - id: option1
                value: option1
                title: "Een ingeschatte score, rangschikking of kans"
                content: ""
              - id: option2
                value: option2
                title: >-
                  Een ingeschat label of classificatie (ja/nee, hoog/laag of een
                  indeling in groepen)
                content: ""
              - id: option3
                value: option3
                title: Een aanbeveling
                content: ""
              - id: option4
                value: option4
                title: Een beslissing
                content: ""
              - id: option5
                value: option5
                title: "Content (geschreven tekst, video, audio of  afbeeldingen)"
                content: |
                  Een grafiek of dashboard is geen content
              - id: option6
                value: option6
                title: Een ander soort output
                content: ""
            type: radio
            use_card_style: true
            visible_when_or:
              - visible_when_and:
                  - identifier: q1
                    value: yes2
              - visible_when_and:
                  - identifier: q2
                    value: yes1
          - identifier: q4-option6
            title: Geef een beschrijving van de output
            content: ""
            required: true
            type: textarea
            visible_when_or:
              - visible_when_and:
                  - identifier: q4
                    value: option6
          - identifier: text1
            title: >-
              De volgende vragen gaan over het proces waarin de toepassing
              gebruikt wordt. Het maakt hier voor de antwoorden niet uit in
              hoeverre dit proces geautomatiseerd is en welke rol de toepassing
              heeft in het proces. We vragen hierna uit welke rol de toepassing
              speelt.
            content: ""
            type: radio
            use_card_style: true
            visible_when_or:
              - visible_when_and:
                  - identifier: q3
                    value: option5
              - visible_when_and:
                  - identifier: q3
                    value: option4
              - visible_when_and:
                  - identifier: q3
                    value: option3
              - visible_when_and:
                  - identifier: q3
                    value: option2
              - visible_when_and:
                  - identifier: q3
                    value: option1
              - visible_when_and:
                  - identifier: q4
                    value: option5
              - visible_when_and:
                  - identifier: q4
                    value: option4
              - visible_when_and:
                  - identifier: q4
                    value: option3
              - visible_when_and:
                  - identifier: q4
                    value: option2
              - visible_when_and:
                  - identifier: q4
                    value: option1
          - identifier: q5
            title: Rol in beslissingproces
            content: >
              Worden in het proces beslissingen genomen voor individuele
              inwoners?


              <ins>*Let op: een beslissing is veel breder dan een formeel
              besluit*<ins>
            tooltip: >-
              Denk aan wel/geen opvolging vraag of verzoek van een burger,
              wel/geen verzoek aan burger om aanvullende informatie aan te
              leveren, wel/geen selectie voor controle of inspectie. Let op: een
              beslissing is veel breder dan een formeel besluit.
            options:
              - id: "yes"
                value: "yes"
                title: Ja
                content: ""
              - id: "no"
                value: "no"
                title: Nee
                content: ""
            required: false
            type: radio
            use_card_style: true
            visible_when_or:
              - visible_when_and:
                  - identifier: q3
                    value: option5
              - visible_when_and:
                  - identifier: q3
                    value: option4
              - visible_when_and:
                  - identifier: q3
                    value: option3
              - visible_when_and:
                  - identifier: q3
                    value: option2
              - visible_when_and:
                  - identifier: q3
                    value: option1
              - visible_when_and:
                  - identifier: q4
                    value: option5
              - visible_when_and:
                  - identifier: q4
                    value: option4
              - visible_when_and:
                  - identifier: q4
                    value: option3
              - visible_when_and:
                  - identifier: q4
                    value: option2
              - visible_when_and:
                  - identifier: q4
                    value: option1
          - identifier: q6
            title: Soort beslissing
            content: >
              Wat voor soort beslissingen worden genomen in dit proces? Kies de
              optie die de grootste overeenkomst heeft met de soort beslissing.
            options:
              - id: option1
                value: option1
                title: Beslissing met directe financiële gevolgen voor burger
                content: >
                  Bijvoorbeeld beslissingen over uitkering, toeslag, subsidie,
                  boete, terugbetaling of mogelijkheid tot betalingsregeling
              - id: option2
                value: option2
                title: >-
                  Beslissing over aanvragen en verzoeken zonder directe
                  financiële gevolgen
                content: ""
              - id: option3
                value: option3
                title: Beslissing over formele klachten en bezwaren
                content: ""
              - id: option4
                value: option4
                title: >-
                  Beslissing over prioritering of routering van aanvragen,
                  verzoeken, klachten en bezwaren
                content: ""
              - id: option5
                value: option5
                title: >-
                  Beslissing over controle, onderzoek of verzoek tot aanvullende
                  informatie verschaffing door de burger
                content: ""
              - id: option6
                value: option6
                title: Anders
                content: ""
            type: radio
            use_card_style: true
            visible_when_or:
              - visible_when_and:
                  - identifier: q5
                    value: "yes"
          - identifier: q6-option6
            title: Beschrijf het soort beslissing
            content: ""
            required: true
            type: textarea
            visible_when_or:
              - visible_when_and:
                  - identifier: q6
                    value: option6
          - identifier: q7
            title: Interactie met burger
            content: >
              Het proces draagt bij aan hoe de overheid (groepen) inwoners
              categoriseert of benadert? 


              Kies "Ja" wanneer je onzeker bent, en beschrijf kort de manier
              waarop.
            options:
              - id: "yes"
                value: "yes"
                title: Ja
                content: ""
              - id: "no"
                value: "no"
                title: Nee
                content: ""
            type: radio
            use_card_style: true
            visible_when_or:
              - visible_when_and:
                  - identifier: q5
                    value: "no"
          - identifier: q8
            title: Effect van toepassing
            content: |
              Wat is effect van de toepassing op de uitkomst van het proces?

              Kies de mogelijkheid die het beste past.
            options:
              - id: option1
                value: option1
                title: >-
                  De uitkomst van het proces wordt direct bepaald door de
                  toepassing
                content: >
                  Bijvoorbeeld straight through processing. Menselijk toezicht 
                  kan achteraf door de uitkomsten te bekijken of analyseren.
              - id: option2
                value: option2
                title: >-
                  De uitkomst van het proces wordt in grote mate beïnvloed door
                  de toepassing
                content: >
                  Bijvoorbeeld doordat werkinstructies een consequentie
                  verbinden aan een specifieke output van de toepassing. Een
                  medewerker kan afwijkende keuzes maken, maar in de praktijk is
                  de output een doorslaggevende factor voor de procesuitkomst.
              - id: option3
                value: option3
                title: >-
                  De uitkomst van het proces wordt in zekere mate beïnvloed door
                  de output van de toepassing
                content: >
                  De output  van de toepassing een belangrijke factor voor de
                  procesuitkomst, maar een medewerker maakt zelf de keuze over
                  de uitkomst. Deze medeweker heeft de juiste informatie,
                  ervaring/kunde, mandaat en beschikbare tijd om deze keuze te
                  maken.
              - id: option4
                value: option4
                title: >-
                  De uitkomst van het proces wordt volledig door een mens
                  bepaald en wordt beïnvloed door meerdere factoren waarin de
                  output slechts een van deze factoren is
                content: >
                  De output van de toepassing is niet doorslaggevend in de
                  keuze.
              - id: option5
                value: option5
                title: Een ander soort effect
                content: ""
            type: radio
            use_card_style: true
            visible_when_or:
              - {}
              - visible_when_and:
                  - identifier: q6
                    value: option5
              - visible_when_and:
                  - identifier: q6
                    value: option4
              - visible_when_and:
                  - identifier: q6
                    value: option3
              - visible_when_and:
                  - identifier: q6
                    value: option2
              - visible_when_and:
                  - identifier: q6
                    value: option1
              - visible_when_and:
                  - identifier: q7
                    value: "yes"
          - identifier: q8-option5
            title: Beschrijf het effect van de toepassing op het proces
            content: ""
            required: true
            type: textarea
            visible_when_or:
              - visible_when_and:
                  - identifier: q8
                    value: option5
          - identifier: output3
            title: >-
              Uw toepassing is op basis van uw antwoorden waarschijnlijk
              impactvol algoritme.
            content: ""
            type: radio
            use_card_style: true
            visible_when_or:
              - visible_when_and:
                  - identifier: q8
                    value: option5
              - visible_when_and:
                  - identifier: q8
                    value: option3
              - visible_when_and:
                  - identifier: q8
                    value: option2
              - visible_when_and:
                  - identifier: q8
                    value: option1
          - identifier: output1
            title: Uw toepassing is geen AI-systeem of impactvol algoritme
            content: ""
            type: radio
            use_card_style: true
            visible_when_or:
              - visible_when_and:
                  - identifier: q6
                    value: option6
              - visible_when_and:
                  - identifier: q8
                    value: option4
              - visible_when_and:
                  - identifier: q1
                    value: yes1
              - visible_when_and:
                  - identifier: q2
                    value: "no"
              - visible_when_and:
                  - identifier: q4
                    value: option6
              - visible_when_and:
                  - identifier: q3
                    value: option6
              - visible_when_and:
                  - identifier: q7
                    value: "no"
          - identifier: output2
            title: >-
              Uw toepassing is op basis van uw antwoorden waarschijnlijk een
              AI-systeem.
            content: |
              Een AI Act risk assessment moet worden ingevuld.
            type: radio
            use_card_style: true
            visible_when_or:
              - visible_when_and:
                  - identifier: q3
                    value: option5
              - visible_when_and:
                  - identifier: q3
                    value: option4
              - visible_when_and:
                  - identifier: q3
                    value: option3
              - visible_when_and:
                  - identifier: q3
                    value: option2
              - visible_when_and:
                  - identifier: q3
                    value: option1
    complete_form_options:
      type: submit
      button_text: Save as pdf
form1:
  title: Intake
  button_text: Meld aan
  backend_link: aa
  id: "#form"
  questions:
    - label: |
        Naam van product
      id: name
      required: true
      type: text
      placeholder: Naam
form2:
  title: Intakeformulier
  content: ""
  button_text: Meld product aan
  backend_link: "https://formspree.io/f/xeojyqry"
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
    content: ""
    icon: null
    id: overview
    items:
      - title: Terug naar overzicht
        icon: fa fa-file
        link: /nl/technical-tools/documentation/#quick-scan
---

{{< overview_block index="0" >}}

{{< dynamic_form_engine index="0" >}}
