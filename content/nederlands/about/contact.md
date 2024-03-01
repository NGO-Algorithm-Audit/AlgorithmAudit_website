---
title: Contactformulier
subtitle: |
  Stuur een bericht om met ons in contact te komen
image: /images/svg-illustrations/about.svg
form:
  title: Contactformulier
  button_text: Verstuur
  backend_link: 'https://formspree.io/f/mrgrwnyo'
  id: contact-form
  questions:
    - label: Naam
      id: name
      type: text
    - label: Contactgegevens
      id: contact-details
      type: email
      placeholder: Emailadres
    - label: Bericht
      id: message
      type: textarea
---

{{< form >}}
