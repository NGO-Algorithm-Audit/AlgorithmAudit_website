---
title: Registratie
subtitle: >
  Meld je aan voor events van Algorithm Audit
image: /images/svg-illustrations/about.svg
dynamic_form_engine:
  - title: Aanmelden
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
              - id: online
                value: Online
                title: Online
                content: ''
            required: true
            type: radio
          - identifier: terms-and-conditions
            id: terms-and-conditions
            title: Door dit vakje aan te vinken ga je akkoord met
            content: >
              - Ingezonden gegevens worden alleen verwerkt in het kader van het event. 

              - Je inschrijving is volledig zodra de deelnamekosten (€300 voor fysieke deelname of €200 voor online deelname) zijn betaald. Betalingsinstructies worden je per e-mail toegestuurd.    
              
              - Informeer Algorithm Audit zo snel mogelijk als je niet bij het event aanwezig kunt zijn door een mail te sturen naar info@algorithmaudit.eu.
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
# promo_bar:
#   - content: |
#       Er zijn nog een paar plekken over voor het event. Aanmelden betekent geen automatische bevestiging voor deelname aan het event. U wordt uiterlijk dinsdag 24 februari geïnformeerd of u bij het event aanwezig kunt zijn.
quick_navigation:
  title: Inhoudsopgave
  links:
    - title: Masterclass GPAI
      url: "#event"
---

{{< accordions_area_open id="event" >}}

{{< accordion_item_open title="Masterclass 'Testen van General Purpose AI (GPAI) toepassingen'" id="event" background_color="#ffffff" tag1="25-06-2026" tag2="masterclass" tag3="hybride" image="/images/events/20260625_GPAI_event.png" >}}

{{< promo_bar index="0" >}}

<br>

#### Beschrijving
De capaciteiten van GPAI-modellen en -systemen blijven zich ontwikkelen. GPAI-systemen evenaren of overtreffen inmiddels expertniveau op vaardigheden als “redeneren”, “probleemoplossen” en “academische vaardigheden”. Toch is vaak onduidelijk wat deze begrippen daadwerkelijk omvatten. In deze masterclass krijgen deelnemers state-of-the-art inzichten in de nieuwste ontwikkelingen op het snel evoluerende gebied van GPAI-benchmarking.

#### Datum
Donderdag 25 juni, 10:00-17:00 uur

#### Adres
Hybride of The Hague Conference Centre (New Babylon), Anna van Buerenplein 29, 2595 DA Den Haag

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
- €200 hybride deelname

#### Doelgroep
Professionals uit de private en publieke sector die regelmatig werken met GPAI-toepassingen, zoals het implementeren van generatieve AI-oplossingen in werkprocessen, het testen van GPAI-capaciteiten en/of het werken aan AI-beleid.

{{< embed_pdf url="/pdf-files/events/activities/20260625_Masterclass_Benchmarking.pdf" width_mobile_pdf="12" width_desktop_pdf="6" >}}

{{< dynamic_form_engine index="0" >}}

{{< accordion_item_close >}}