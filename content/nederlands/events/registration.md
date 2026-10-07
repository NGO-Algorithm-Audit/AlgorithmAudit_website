---
title: Registratie
subtitle: >
  Meld je aan voor events van Algorithm Audit
image: /images/svg-illustrations/about.svg
dynamic_form_engine:
  - title: Registratie
    id: form1
    icon: fas fa-user-tag
    section:
      - questions:
          - identifier: name
            id: name
            title: Naam
            content: ''
            required: true
            type: text
          - identifier: function
            id: function
            title: Functie en organisatie
            content: ''
            required: true
            type: text
          - identifier: mail
            id: contact-details
            title: Mailadres
            content: ''
            required: true
            type: email
          - identifier: participation-type
            id: participation-type
            title: Type deelname
            content: ''
            use_card_style: false
            options:
               - id: in-person
                 value: Fysiek
                 title: Fysiek
                 content: ''
            required: true
            type: radio
          - identifier: terms-and-conditions
            id: terms-and-conditions
            title: Door dit vakje aan te vinken ga je akkoord met de volgende
            content: >
               - Je geeeft toestemming dat de ingezonden gegevens worden uitsluitend in het kader van het event verwerkt.
               
               - Je bevestigt je deelname en gaat ermee akkoord dat Algorithm Audit namens jou verzorgds voor faciliteiten en catering, die onder het deelnamekosten vallen. De inschrijving is definitief en hoeft niet nogmaals te worden bevestigd.
              
               - Je verplicht bent om de de deelnamekosten van € 300 te betalen. Je ontvangt de betalingsinstructies per e-mail.

               - Je zal Algorithm Audit zo snel mogelijk op de hoogte stellen als je het evenement niet kunt bijwonen, door een e-mail te sturen naar info@algorithmaudit.eu. Afhankelijk van de omstandigheden van de annulering is het mogelijk dat er geen vrijstelling van de betalingsverplichting of restitutie wordt verleend.
            use_card_style: false
            options:
               - id: agree
                 value: agree
                 title: Akkoord
                 content: ''
            required: true
            type: checkbox
    complete_form_options:
      type: submit
      button_text: Aanmelden
      backend_link: 'https://formspree.io/f/xeogpapg'
promo_bar:
  - content: |
      [Meld je aan](/nl/events/registration/#form1) voor de volgende editie van deze masterclass op 3 november 2026.
quick_navigation:
  title: Inhoudsopgave
  links:
    - title: Masterclass GPAI
      url: "#event"
---

{{< accordions_area_open id="event" >}}

{{< accordion_item_open title="Masterclass AI-evaluatie: van General Purpose naar Specifieke Toepassingen" id="event" background_color="#ffffff" tag1="3 november 2026" tag2="masterclass" tag3="op locatie" image="/images/events/20261103_GPAI_event.png" >}}

> <span style="color:#005aa7;">Hoe weet je of een AI-model geschikt is voor een bepaalde toepassing? Wanneer weet je of het werkt naar behoren? Toonaangevende systemen worden beoordeeld op algemene mogelijkheden, niet op hoe goed ze aansluiten bij echte probleemgebieden, organisatorische waarden en de zorgen van belanghebbenden.</span>

{{< promo_bar index="0" >}}

<br>

#### Beschrijving
Zowel organisaties in de particuliere als de publieke sector willen graag gebruikmaken van de mogelijkheden van AI. Dit vereist dat **AI-systemen voor algemeen gebruik (general purpose AI - GPAI) worden aangepast aan werkprocessen waarvoor ze niet per se zijn ontworpen of getest**. Zo kan de chatbot van de Rechtspraak de vraag van een inwoner over wie het ‘privé gedeelte’ van een appartementencomplex onderhoudt, afwijzen, omdat een in het Engels ontworpen content filter de woorden [‘private parts’ als seksuele inhoud markeert](https://algorithmaudit.eu/knowledge-platform/knowledge-base/20260924_vangrails_blogpost/). Of een gemeentelijke chatbot kan Mehmet – een geboren en getogen Rotterdamer die vraagt waar hij zijn paspoort kan verlengen – doorverwijzen naar de immigratiedienst, terwijl Daan meteen het juiste antwoord krijgt, omdat de aanbieder niet heeft getest op risico’s die specifiek zijn voor de Nederlandse context.

Om AI op een verantwoorde manier in te zetten, **moeten professionals begrijpen hoe bestaande evaluaties zich vertalen naar een bepaalde context en waar er hiaten ontstaan**. GPAI wordt beoordeeld aan de hand van gangbare tests, ook wel ‘benchmarks’ genoemd. Maar populaire benchmarks zijn meestal beperkt qua taalkundige of culturele reikwijdte, bestrijken slechts een beperkt aantal soorten gebruikersinteracties en lopen enorm uiteen in wetenschappelijke kwaliteit en robuustheid. Voor een goede evaluatie is het vaak nodig om op maat gemaakte benchmarks te ontwikkelen op basis van nieuwe datasets, maar er is ook praktische validatie nodig met aangepaste testcases om ervoor te zorgen dat systemen na implementatie werken zoals de bedoeling is.

Door het ontwikkelen van benchmarks voor risicomonitoring voor het European AI Office, een validatiekader voor de Rechtspraak-chatbot van de Nederlandse rechterlijke macht en waarborgen voor Nederlandse generatieve AI, heeft Algorithm Audit deskundige kennis opgebouwd om organisaties te helpen bij het navigeren door evaluaties binnen hun specifieke gebruikssituatie. **In deze masterclass distilleren we de meest waardevolle inzichten uit ons werk op het gebied van GPAI-evaluatie. De cursus behandelt:**

- GPAI onder de AI-verordening en benchmarking voor systemen met systemische risico’s
- Toonaangevende benchmarks uit de sector en aanpassingen aan GPT-NL
- Ontwikkeling van op maat gemaakte evaluatiemethoden en validatiebenaderingen voor jouw AI-toepassing
- Actuele kwesties in het vakgebied vanuit wetenschappelijk perspectief
- De ontwerpaspecten die de kwaliteit van een benchmark bepalen

**Na afloop kun je:**
- De relevante verplichtingen voor GPAI-systemen onder de AI-verordening begrijpen
- Kritisch nadenken over de validiteit en betrouwbaarheid van benchmarks
- Je weg vinden in populaire evaluatiedatabases en documentatie
- Beoordelen of bestaande benchmarks geschikt zijn voor je eigen werk
- Bepalen wanneer een aangepaste evaluatie of validatie nodig is en hoe die eruit zou kunnen zien


#### Datum
3 november 2026

#### Adres
The Hague Conference Centre (New Babylon), Anna van Buerenplein 29, 2595 DA Den Haag

#### Programma
- 09:30-10:00 Inloop
- 10:00-11:15 Introductie General Purpose AI (GPAI) en het testen van GPAI-toepassingen
- 11:15-11:30 Pauze – koffie, thee en versnaperingen
- 11:30-12:30 State-of-the-art concepten en ontwikkelingen in GPAI-benchmarking
- 12:30-13:30 Lunch – verzorgd
- 13:30-14:45 Casus uit de Nederlandse publieke sector
- 14:45-15:15 Pauze – koffie, thee en versnaperingen
- 15:15-16:30 Praktijkoefeningen om hands-on ervaring op te doen
- 16:30-17:30 Borrel – verzorgd

#### Kosten
- €300 fysieke deelname (incl. lunch en catering, koffie, thee etc.)

#### Doelgroep
Professionals uit de private en publieke sector die regelmatig werken met GPAI-toepassingen, zoals het implementeren van generatieve AI-oplossingen in werkprocessen, het testen van GPAI-capaciteiten en/of het werken aan AI-beleid.

{{< embed_pdf url="/pdf-files/events/activities/20261103_Masterclass_AI_Evaluation.pdf" width_mobile_pdf="12" width_desktop_pdf="6" >}}

{{< dynamic_form_engine index="0" >}}

{{< accordion_item_close >}}