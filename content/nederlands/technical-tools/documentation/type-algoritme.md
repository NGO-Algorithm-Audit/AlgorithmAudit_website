---
type: regular
title: Documentatie voor AI-systemen
subtitle: >
  Open-source templates voor risicoclassificatie van AI-systemen helpen bij de
  publieke kennisopbouw over AI governance. Je feedback is welkom op
  [info@algorithmaudit.eu](mailto:info@algorithmaudit.eu)
image: /images/svg-illustrations/case_repository.svg
dynamic_form_engine:
  - title: Toepassing
    id: "application"
    icon: "far fa-folder"
    content: |
      Vaststellen van toepassing van het product.
    section:
      - questions:
          - identifier: application1
            title: Verboden toepassing
            content: >
              Wordt het product voor een van de volgende toepassingen ingezet?


              * Biometrische identificatie op afstand in real-time in openbare
              ruimte in het kader van rechtshandhaving {{< tooltip
              tooltip_content="Test tooltip" >}}

              * Sociale evaluatie of sociale classificatie {{< tooltip
              tooltip_content="Test2" >}}

              * Toepassing van kwetsbaarheden van burgers (zoals economische
              status of handicap)

              * Vaststellen of een burger potentieel een misdrijf gaat plegen

              * Het product maakt gebruik van een databank met
              gezichtsherkenning of draagt hier aan bij

              * Het product maakt gebruik van emotieherkenning op de werkplek of
              in het onderwijs

              * Opzettelijke manipulatie of misleiding
            options:
              - value: low
                title: Nee
                content: ""
              - value: high
                title: Ja
                content: ""
          - identifier: forbidden
            title: Verboden
            content: >
              Toepassing is in strijd met de wet en/of intern beleid. Neem
              contact op met Al compliance Officer mocht je verder in gesprek
              willen.
            visible_when_or:
              - visible_when_and:
                  - identifier: application1
                    value: high
          - identifier: application2
            title: Benodigde maatregelen
            content: >
              Wordt er in het product gebruik gemaakt van:


              * Beoordeling of burgers in aanmerking komen voor
              overheidsuitkeringen en- diensten

              * Opstellen van een (risico)profiel van een persoon, groep
              personen of een gebied

              * Toepassingen van biometrie voor categorisering op basis van
              gevoelige of beschermde eigenschappen of identificatie op afstand

              * Emotieherkenning

              * Werkgelegenheid, personeelsbeheer en toegang tot zelfstandige
              arbeid

              * Toelating tot onderwijs

              * Veiligheidscomponenten van kritieke infrastructuur

              * Rechtshandhaving
            tooltip: >-
              Toelichting: De maatregelen zijn gebaseerd op wetgeving. Zo worden
              in de wet een aantal risicotoepassingen geclassificeerd als 'hoog
              risico' wanneer je daaronder valt gelden strengere maatregelen.
              Ook zijn er maatregelen voor General Purpose Al waar veel van de
              Generative Al toepassingen onder vallen
            options:
              - value: low
                title: Nee
                content: ""
              - value: high
                title: Ja
                content: ""
            visible_when_or:
              - visible_when_and:
                  - identifier: application1
                    value: low
          - identifier: aim
            title: Vaststellen van doel
            content: >
              De volgende stap is om het doel vast te stellen. Is de toepassing
              bedoeld om:


              * een beperkt aantal procedurele taak uit te voeren;

              * een resultaat van een eerder voltooide taak van een mens te
              verbeteren

              * besluitvormingspatronen of afwijkingen van eerdere
              besluitvormingspatronen op te sporen en is niet bedoeld om de
              eerder voltooide menselijke beoordeling te vervangen of te
              beïnvloeden

              * een voorbereidende taak uit te voeren in dit specifieke proces?
            options:
              - value: low
                title: Nee
                content: ""
              - value: high
                title: Ja
                content: ""
            visible_when_or:
              - visible_when_and:
                  - identifier: application2
                    value: high
          - identifier: data-algorithm
            title: Type data en algoritme
            content: >
              Wordt een van de volgende methoden gebruikt?


              * Al voor algemene doeleinden (Generative Al toepassingen die
              gebaseerd zijn op een taalmodel zoals bijvoorbeeld ChatGPT)

              * Directe interactie(gesprek) met burgers zoals chatbots

              * Synthetische data, zoals audio, videobeeld of tekstinhoud kan
              genereren

              * Het nemen van besluiten voor burgers
            options:
              - value: low
                title: Nee
                content: ""
              - value: high
                title: Ja
                content: ""
            visible_when_or:
              - visible_when_and:
                  - identifier: application2
                    value: low
          - identifier: no-measures
            title: Geen maatregelen
            content: |
              Geen maatregelen van toepassing, want lage risicocategorie
            visible_when_or:
              - visible_when_and:
                  - identifier: data-algorithm
                    value: low
              - visible_when_and:
                  - identifier: aim-pursued
                    value: low
          - identifier: high-risk
            title: Hoog-risico maatregelen
            content: >
              Dit zijn de maatregelen die van toepassing zijn:


              * Hyperlink naar instrumenten en contactpersonen

              * Automatische email naar relevante stakeholders


              Toelichting: Deze maatregelen zijn van toepassing omdat het een
              hoog risico toepassing betreft.
            visible_when_or:
              - visible_when_and:
                  - identifier: aim
                    value: high
          - identifier: transparency-measures
            title: Transparantie verplichting
            content: >
              Dit zijn de maatregelen die van toepassing zijn:


              * Hyperlink naar instrumenten en contactpersonen

              * Automatische email naar relevante stakeholders


              Toelichting: Deze maatregelen zijn van toepassing omdat er extra
              transparantieverplichtingen zijn en/of er gewerkt wordt met
              (bijzondere) persoonsgegevens
            visible_when_or:
              - visible_when_and:
                  - identifier: data-algorithm
                    value: high
overview_block:
  title: Overzicht
  content: ""
  icon: null
  id: overzicht
  items:
    - title: Terug naar overzicht
      icon: fa fa-file
      link: /nl/technical-tools/documentation/
---

{{< overview_block >}}

{{< dynamic_form_engine form_entry="0" >}}
