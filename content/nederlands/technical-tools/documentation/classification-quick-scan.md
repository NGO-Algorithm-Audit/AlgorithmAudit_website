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
  - title: Classificatie quick scan
    id: form
    icon: fa fa-star
    content: >
      Bepaal binnen 8 vragen of uw algoritme of AI-systeem een hoog risico
      toepassing betreft.
    section:
      - questions:
          - identifier: application1
            title: Verboden toepassing
            content: |
              Naam van product
            type: text
    complete_form_options:
      type: print
      button_text: Save as pdf
form1:
  title: Intake
  button_text: Meld aan
  backend_link: aa
  id: '#form'
  questions:
    - label: |
        Naam van product
      id: name
      required: true
      type: text
      placeholder: Naam
form2:
  title: Intakeformulier
  content: ''
  button_text: Meld product aan
  backend_link: 'https://formspree.io/f/xeojyqry'
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
    content: ''
    icon: null
    id: overzicht
    items:
      - title: Terug naar overzicht
        icon: fa fa-file
        link: /nl/technical-tools/documentation/#organisation-wide
---

{{< overview_block index="0" >}}

{{< dynamic_form_engine index="0" >}}
