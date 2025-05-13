---
title: Registratie
subtitle: >
  Meld je aan voor events van Algorithm Audit.
image: /images/svg-illustrations/about.svg
quick_navigation:
  title: Overizcht
  links:
    - title: Lunch webinar
      url: '#webinar'
form1:
  title: Registratieformulier
  button_text: Verzenden
  backend_link: 'https://formspree.io/f/mvgpgzyr'
  id: form
  questions:
    - label: |
        Naam
      id: name
      required: true
      type: text
    - label: |
        Organisatie
      id: organisation
      required: true
      type: text
    - label: |
        Contactgegevens
      id: contact-details
      required: true
      type: email
    - label: >
        Opmerking over verwerking van je persoonsgegevens <br> <span style="font-size:12px;
        color=#777;">Ingezonden gegevens zullen alleen verwerkt worden voor het hierboven beschreven doel, voor minimale tijd worden opgeslagen en zullen in een veilige omgeving worden opgeslagen.</span>
      id: terms-conditions
      values:
        - label: Akkoord
          value: agree
          id: agree
      required: true
      type: checkbox
---

{{< accordions_area_open id="webinar" >}}

{{< accordion_item_open title="Lunch webinar 'Open source tools voor AI validatie" id="webinar" background_color="#ffffff" date="10-06-2025" tag1="webinar" tag2="technische tools" image="/images/logo/logo.svg" >}}

{{< button button_text="Meld je aan" button_link="#form" >}}

#### Beschrijving
In deze webinar leer je meer over het valideren van AI-systemen. Welke tools kun je gebruiken om bias in een algoritme of AI-systeem te detecteren als beschermde kenmerken niet beschikbaar zijn? En wat is het nut en de noodzaak van synthetische data generatie? Ook wordt stilgestaan bij het ontwikkelen van software zonder daarbij afhankelijk te worden van cloudproviders of commerciële partijen. Tijdens de webinar worden twee open-source tools geïntroduceerd (unsupervised bias detectie tool en synthetische data generatie tool) die in het kader van het Innovatiebudget 2024-25 door het Ministerie van Binnenlandse Zaken en Koninkrijksrelaties, de Dienst Uitvoering Onderwijs en stichting Algorithm Audit zijn ontwikkeld. Tijdens de laatste 20 minuten is er ruimte voor vragen.

#### Datum
Dinsdag 10 juni 12:00-13:00 uur

#### Programma
- 12:00-12:05 Online inloop en introductie (AA)
- 12:05:-12:20 Introductie en lancering ‘Unsupervised bias detectie tool’ + use case DUO (AA)
- 12:20-12:40 Introductie en lancering ‘Synthetische data generatie tool’ + use case DUO (AA + DUO)
- 12:40-13:00 Q&A publiek

#### Doelgroep 
Primair data scientists die tools kunnen gaan gebruiken, maar secundair ook minder technisch publiek (beleidsmedewerkers, uitvoeringsdeskundigen etc)

{{< form1 >}}

{{< accordion_item_close >}}
