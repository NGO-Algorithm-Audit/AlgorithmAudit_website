---
title: Contactformulier
subtitle: |
  Kom in contact met Algorithm Audit door onderstaand formulier in te vullen.
image: /images/svg-illustrations/about.svg
dynamic_form_engine:
  - title: Contactformulier
    id: contact-form
    icon: fas fa-align-justify
    section:
      - questions:
          - title: Naam
            identifier: name
            type: text
            required: true
          - title: Contactgegevens
            identifier: contact-details
            type: email
            placeholder: Emailadres
            required: true
          - title: Bericht
            identifier: message
            type: textarea
            required: true
    complete_form_options:
      type: submit
      button_text: Verstuur
      backend_link: "https://formspree.io/f/mrgrwnyo"
---

{{< dynamic_form_engine index="0" >}}
