---
title: Vacatures
subtitle: |
  Overzicht van openstaande vacatures bij Algorithm Audit
image: /images/svg-illustrations/about.svg
form1:
  title: Sollicitatieformulier
  button_text: Verstuur
  backend_link: 'https://formspree.io/f/mdoqdpnn'
  id: form
  questions:
    - label: |
        Naam
      id: name
      required: true
      type: text
    - label: |
        Contactgegevens
      id: contact-details
      required: true
      type: email
      placeholder: Emailadres
    - label: |
        Motivatiebrief (max. 500 woorden)
      id: motivation-letter
      file_upload_text: Choose file
      required: true
      file_type: '.docx, .pdf'
      type: file
    - label: |
        CV
      id: cv
      file_upload_text: Choose file
      required: true
      file_type: '.docx, .pdf'
      type: file
    - label: >
        Voorwaarden <br> <span style="font-size:12px; color=#777;">Ingediende
        gegevens worden uitsluitend verwerkt voor het hierboven beschreven doel,
        gedurende de minimale noodzakelijke duur bewaard en veilig opgeslagen in
        een beveiligde omgeving.</span>
      id: terms-conditions
      values:
        - label: Akkoord
          value: agree
          id: agree
      required: true
      type: checkbox
---

