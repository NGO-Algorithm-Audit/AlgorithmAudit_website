---
type: regular
title: Documentatie voor AI-systemen
subtitle: >
  Open-source templates voor risicoclassificatie van AI-systemen helpen bij de
  publieke kennisopbouw over AI governance. Je feedback is welkom op
  [info@algorithmaudit.eu](mailto:info@algorithmaudit.eu)
image: /images/svg-illustrations/case_repository.svg
card_AI_system_classification:
  title: Toepassing
  content: |
    Vaststellen van toepassing van het product.
  section:
    - questions:
        - identifier: application1
          title: Verboden toepassing
          content: >
            Wordt het product voor een van de volgende toepassingen ingezet?


            * Biometrische identificatie op afstand in real-time in openbare
            ruimte in het kader van rechtshandhaving \[meer info]

            * Sociale evaluatie of sociale classificatie \[meer info]

            * Toepassing van kwetsbaarheden van burgers (zoals economische
            status of handicap)

            * Vaststellen of een burger potentieel een misdrijf gaat plegen

            * Het product maakt gebruik van een databank met gezichtsherkenning
            of draagt hier aan bij

            * Het product maakt gebruik van emotieherkenning op de werkplek of
            in het onderwijs

            * Opzettelijke manipulatie of misleiding
          options:
            - value: low
              title: Nee
              content: ''
            - value: high
              title: Ja
              content: ''
        - identifier: forbidden
          title: Verboden
          content: >
            Toepassing is in strijd met de wet en/of intern beleid. Neem contact
            op met Al compliance Officer mocht je verder in gesprek willen.
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

            * Opstellen van een (risico)profiel van een persoon, groep personen
            of een gebied

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
            risico' wanneer je daaronder valt gelden strengere maatregelen. Ook
            zijn er maatregelen voor General Purpose Al waar veel van de
            Generative Al toepassingen onder vallen
          options:
            - value: low
              title: Nee
              content: ''
            - value: high
              title: Ja
              content: ''
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
            besluitvormingspatronen op te sporen en is niet bedoeld om de eerder
            voltooide menselijke beoordeling te vervangen of te beïnvloeden

            * een voorbereidende taak uit te voeren in dit specifieke proces?
          options:
            - value: low
              title: Nee
              content: ''
            - value: high
              title: Ja
              content: ''
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
              content: ''
            - value: high
              title: Ja
              content: ''
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
        - identifier: high-risk
          title: Hoog-risico maatregelen
          content: >
            Dit zijn de maatregelen die van toepassing zijn:


            * Hyperlink naar instrumenten en contactpersonen

            * Automatische email naar relevante stakeholders


            Toelichting: Deze maatregelen zijn van toepassing omdat het een hoog
            risico toepassing betreft.
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
card_risk_classification:
  title: Risicoclassificatie
  content: >
    Organisatiebreed algoritmemanagementbeleid vraagt om pragmatische kaders.
    Hierbij is een risico-georienteerde aanpak vaak leidend. Dit is in lijn met
    nationale en internationale wetgeving voor algoritmes, zoals de AI
    Verordening. Hieronder vindt u een voorbeeld van een algoritmescorekaart
    voor publieke sector organisaties. Aan de hand van deze scorekaart kunnen
    algoritmes worden geclassificeerd als hoog, medium of laag risico.


    De uitkomst van de scorekaart kan worden gedownload als pdf.
  section:
    - title: Impact
      questions:
        - identifier: data1
          title: 1. Data
          content: |
            Zijn er afspraken random datalevering?
          tooltip: >-
            Is het duidelijk wie verantwoordelijk is voor het onderhouden van de
            data? Is het duidelijk wie in de leiding is
          options:
            - value: low
              title: Lage impact
              content: >
                Er zijn duidelijke afspraken over datalevering. Deze afspraken
                zijn goed gedocumenteerd.
            - value: medium
              title: Medium impact
              content: >
                Er zijn enkele afspraken over datalevering. Deze afspraken zijn
                enigszins gedocumenteerd.
            - value: high
              title: Hoog risico
              content: |
                Er zijn geen afspraken of documentatie over datalevering.
        - identifier: data2
          title: 2. Persoonsgegevens
          content: |
            In hoeverre worden er persoonsgegevens gebruikt in het algoritme?
          options:
            - value: low
              title: Lage impact
              content: |
                Er worden geen persoonsgegevens gebruikt en/of verwerkt
            - value: medium
              title: Medium impact
              content: >
                Er worden enkele persoonsgegevens gebruikt, maar de gegevens
                zijn niet herleidbaar tot een individueel persoon
            - value: high
              title: High impact
              content: >
                Er worden verschillende persoonsgegevens gebruikt waarmee (al
                dan niet direct) de persoon in kwestie geïdentificeerd kan
                worden
        - identifier: data3
          title: 3. Gevolgen voor burger I
          content: >
            Is het algoritme onderdeel van een besluitvormingsproces dat
            rechtsgevolgen heeft voor de burger?
          tooltip: >-
            Met rechtsgevolgen wordt gerefereerd naar de mogelijke impact op
            bijvoorbeeld de hoogte en/of duur van een uitkering
          options:
            - value: low
              title: Lage impact
              content: >
                Nee, het algoritme is niet onderdeel van een
                besluitvormingsproces dat rechtsgevolgen heeft voor de burger
            - value: high
              title: High impact
              content: >
                Ja, het algoritme is onderdeel van een besluitvormingsproces dat
                rechtsgevolgen heeft voor de burger
        - identifier: data4
          title: 4. Gevolgen voor burger II
          content: >
            Raakt het algoritme (of dreigt het te raken) aan een grondrecht? Zo
            ja, hoe zwaar wordt dit grondrecht geraakt?
          tooltip: >-
            Voorbeelden van grondrechten die geschaad kunnen worden
            (niet-uitputtende lijst): 1. Recht op gelijke behandeling 2.
            Persoonsgegevensbescherming 3. Procedurele rechten Zie ook blz. 71
            van het IAMA en toelichting van de zwaartebepaling op blz. 72 van
            het IAMA
          options:
            - value: low
              title: Lage impact
              content: >
                Weinig tot geen inbreuk op een grondrecht, dus geen bijzonder
                grote zorgvuldigheid vereist
            - value: medium
              title: Medium impact
              content: >
                Middelzware inbreuk op een grondrecht, dus zorgvuldigheid
                vereist
            - value: high
              title: High impact
              content: >
                Zware inbreuk op een grondrecht, bijzondere zorgvuldigheid
                vereist
        - identifier: data5
          title: 5. Populatiegrootte
          content: >
            Wat is de grootte van de populatie waarop het algoritme wordt
            toegepast?
          options:
            - value: low
              title: Lage impact
              content: |
                \<2.000 individuen
            - value: medium
              title: Medium impact
              content: |
                2.000 - 100.000 individuen
            - value: high
              title: Hoge impact
              content: |
                ≥100.000 individuen
        - identifier: data6
          title: 6. Derde partijen
          content: >
            Worden de uitkomsten van het algoritme gedeeld met derde partijen
            (bijvoorbeeld burgers, andere afdelingen of toezichthoudende
            partijen)?
          options:
            - value: low
              title: Lage impact
              content: >
                Nee, de uitkomsten van het algoritme worden niet gedeeld met
                derde partijen
            - value: high
              title: Hoge impact
              content: >
                Ja, de uitkomsten van het algoritme worden gedeeld met derde
                partijen
        - identifier: data7
          title: 7. Financiële/reputationele schade
          content: >
            Wat is de (geschatte) financiële- of reputatieschade als het
            algoritme fouten bevat die tot incorrecte uitkomsten leiden?
          options:
            - value: low
              title: Lage impact
              content: >
                Inzet van het algoritme heeft minimale financiële of
                reputationele impact
            - value: medium
              title: Medium impact
              content: >
                Incorrecte uitkomsten leiden tot een gemiddelde financiële en/of
                reputationale impactschade
            - value: high
              title: Hoge impact
              content: >
                Incorrecte uitkomsten leiden tot een veel financiële en/of
                reputationale impactschade. Fouten hebben een grote impact op de
                dienstverlening van de organisatie
        - identifier: data8
          title: 8. Autonomie
          content: >
            Worden er beslissingen gemaakt op basis van de uitkomsten van het
            AI-systeem? Zo ja, op welke manier?
          tooltip: >-
            Beschrijvend of diagnostisch: Het algoritme wordt enkel gebruikt om
            te monitoren of om een gebeurtenis/beslissing uit het verleden te
            analyseren. Er is geen directe beslissing verbonden aan de
            algoritmeuitkomst. -Beschrijvend algoritme: het algoritme geeft een
            weergave van wat er wordt waargenomen. -Diagnostisch algoritme: het
            algoritme geeft een waarschijnlijkheid of analyse van waarom iets
            optreedt, veroorzaakt door positieve, negatieve of predictieve
            waarden, of berekent een bepaalde waarschijnlijkheid die wordt
            gebruikt in werkprocessen en/of besluitvorming.  Voorspellend
            algoritme: Het algoritme geeft een verwachting af. Voorspelling van
            wat kan gebeuren of een kans/waarschijnlijkheid van een toekomstige
            handeling of gebeurtenis. Beslissingen worden gemaakt met menselijke
            tussenkomst op basis van algoritmeuitkomsten.  Voorschrijvend
            algoritme: Het algoritme bepaalt en/of dicteert de beslissing/actie
            of uitvoering. -Voorschrijvend: beslissingen worden gemaakt op basis
            van een algoritmeuitkomst, met minimale menselijke tussenkomst.
            -Automatisch: beslissingen worden gemaakt zonder menselijke
            tussenkomst.
          options:
            - value: low
              title: Lage impact
              content: >
                Output van het AI-systeem is beschrijvende of diagnostische
                statistiek, wat als input fungeert voor de besluitvorming
            - value: medium
              title: Medium impact
              content: >
                Output van het AI-systeem is voorspellende statistiek, wat als
                input fungeert voor de besluitvorming
            - value: high
              title: Hoge impact
              content: >
                Output van het AI-systeem is voorscrhijvende statistiek, of
                besluitvorming is volledig geautomatiseerd
        - identifier: data9
          title: 9. Validatie
          content: |
            Zijn de algoritmeuitkomsten gevalideerd?
          options:
            - value: low
              title: Lage impact
              content: |
                Ja, het AI-systeem is gevalideerd
            - value: high
              title: Hoge impact
              content: |
                Nee, het AI-systeem is niet gevalideerd
overview_block:
  title: Modeldocumentatie
  content: >
    Organization-wide algorithm management policy requires pragmatic frameworks.
    A risk-oriented approach is often leading here. This is in line with
    national and international legislation for algorithms, such as the AI
    ​​Regulation. Below you will find an example of an algorithm scorecard for
    public sector organizations. Based on this scorecard, algorithms can be
    classified as high, medium or low risk.
  icon: far fa-file
  id: modeldocumentation
  items:
    - title: Toepassing
      icon: fas fa-share-alt
      link: '#application'
    - title: Risicoclassificatie
      icon: fas fa-code-branch
      link: '#risk-classification'
---

{{< overview_block >}}

{{< card_AI_system_classification >}}

{{< card_risk_classification >}}
