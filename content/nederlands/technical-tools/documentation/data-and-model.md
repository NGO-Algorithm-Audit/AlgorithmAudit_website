---
type: regular
title: Documentatie voor AI-systemen
subtitle: >
  Open-source templates voor modeldocumentatie van AI-systemen. Afgestemd op de
  eisen uit de AI Verordening en Nederlandse soft law kaders (zoals
  [Onderzoekskader
  Algoritmes](https://www.rijksoverheid.nl/documenten/rapporten/2023/07/11/onderzoekskader-algoritmes-adr-2023#:~:text=De%20Auditdienst%20Rijk%20heeft%20een,risico's%20beheerst%20\(kunnen\)%20worden.)
  van de Audit Dienst Rijk en het
  [Algoritmekader](https://minbzk.github.io/Algoritmekader/) van het Ministerie
  van Binnenlandse Zaken). Help mee ontwikkelen, deel feedback middels
  [Github](https://github.com/NGO-Algorithm-Audit/AlgorithmAudit_website) of via
  [info@algorithmaudit.eu](mailto:info@algorithmaudit.eu).
image: /images/svg-illustrations/case_repository.svg
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
  title: Data en model
  content: ''
  button_text: Weg
  backend_link: 'https://formspree.io/f/xeojyqry'
  id: roles-and-responsibilities
  questions:
    - label: Beoogde doel
      id: aim-pursued
      type: textarea
card_AI_system_classification:
  title: Data en model
  content: >
    Beoordelen of product een algoritme of AI toepassing is en identificeren van
    bijbehorende maatregelen.
  section:
    - questions:
        - identifier: application1
          title: Verboden toepassing
          content: |
            Gevaarlijk
overview_block1:
  title: Overzicht
  content: ''
  icon: null
  id: overzicht
  items:
    - title: Terug naar overzicht
      icon: fa fa-file
      link: /nl/technical-tools/documentation/#organisation-wide
---

{{< overview_block1 >}}

{{< card_AI_system_classification >}}
