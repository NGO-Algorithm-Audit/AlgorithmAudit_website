---
layout: overview
title: Registratie
subtitle: |
  Schrijf je in voor fysieke bijeenkomsten en online webinars
image: /images/svg-illustrations/events.svg
form1:
  title: Registratie voor Masterclass AI validatie & AI Act standarden
  content: >-
    Door onderstaand formulier in te vullen registreer je je voor de Masterclass
    op 6 november in Amsterdam
  button_text: Aanmelden
  backend_link: 'https://formspree.io/f/mvgpgzyr'
  id: form
  questions:
    - label: |
        Naam
      id: Name
      required: true
      type: text
      placeholder: ''
    - label: |
        Organisatie
      id: organisation
      required: true
      type: text
    - label: |
        Functie
      id: function
      required: true
      type: text
    - label: |
        Mailadres
      id: Mail
      required: true
      type: email
    - label: |
        Aanwezigheid
      id: attendance
      values:
        - label: In-person
          value: in-person
          id: in-person
        - label: Online
          value: Online
          id: online
      required: true
      type: checkbox
    - label: |
        Vragen of opmerkingen voor de organisatie
      id: questions
      type: textarea
    - label: >
        <span style="color: #005aa7;">Voorwaarden\*</span>


        Door deze box aan te vinken ga je ermee akkoord dat:


        * Je registratie compleet is wanneer is voldaan aan de deelnamekosten.
        Volgend op het indienen van dit formulier ontvang je binnen 3 werkdagen
        een bevestigingsmail met meer details.

        * De organisatie van het event wordt zo spoedig mogelijk geinformeerd
        wanneer je niet in de gelegenheid bent het event bij te wonen.
        Afmeldingen tot 2 weken voor het event kunnen volledig worden vergoed.
      id: terms
      values:
        - label: Akkoord
          value: Agree
          id: agree
      required: false
      type: checkbox
type: registration
---

{{< tab_content_open icon="fas fa-user-graduate" title="Master class AI validation & AI Act standards" id="master-class" >}}

* <span style="color: #005aa7;">Wanneer:</span> 6 november 09:00-17:00 uur
* <span style="color: #005aa7;">Waar:</span> Auditorium De Nederlandse Bank (DNB), Spaklerweg 4, 1096 BA Amsterdam
* <span style="color: #005aa7;">Wie:</span> Europese toezichthouders en publieke sector professionals
* <span style="color: #005aa7;">Programma:</span> zie flyer hieronder
* <span style="color: #005aa7;">Deelnamekosten</span>
  * Op locatie: €200
  * Online: €100

{{< button button_link="#form" button_text="Schrijf je in" >}}

{{< pdf_frame width_desktop_pdf="6" width_mobile_pdf="12" articleUrl1="https://drive.google.com/file/d/1-GbQXgpPcNYAwRU8GN9QlLPOG4EEXJcp/preview" >}}

{{< tab_content_close >}}

{{< form1 >}}
