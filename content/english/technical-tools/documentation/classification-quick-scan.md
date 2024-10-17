---
type: regular
title: Documentation for AI systems
subtitle: >
  Open-source templates for model documentation of AI systems. In line with the
  requirements of the AI Act and Dutch soft law frameworks (such as the
  [Research Framework
  Algorithms](https://www.rijksoverheid.nl/documenten/rapporten/2023/07/11/onderzoekskader-algoritmes-adr-2023#:~:text=De%20Auditdienst%20Rijk%20heeft%20een,risico's%20beheerst%20\(kunnen\)%20worden.)
  of the The Central Government Audit Service, the [Algorithm
  Framework](https://minbzk.github.io/Algoritmekader/) of the Ministry of the
  Interior, and impact assessments for data privacy and fundamental rights).
  Help develop model documentation by sharing your feedback via
  [Github](https://github.com/NGO-Algorithm-Audit/AlgorithmAudit_website) or via
  [info@algorithmaudit.eu](mailto:info@algorithmaudit.eu).
image: /images/svg-illustrations/case_repository.svg
dynamic_form_engine:
  - title: Identification AI system and impactful algorithms
    id: form
    icon: fa fa-star
    content: >
      Determine whether your system is an AI system or impactful algorithm by
      answering a maximum of 8 questions.
    section:
      - questions:
          - identifier: intro1
            title: Name of the system
            content: ''
            tooltip: >-
              If the system does not have a formal name, provide a name that
              colleagues among themselves use to refer to this application.
            required: true
            type: text
          - identifier: intro2
            title: Provide a brief description of the system and how it is used
            content: ''
            required: true
            type: textarea
          - identifier: intro3
            title: >-
              Name of primary point of contact within the organization for the
              system, e.g. product owner
            content: ''
            tooltip: >-
              If there is no designated point of contact or owner, please fill
              in your own name here for now. The algorithm team can then contact
              you.
            required: true
            type: textyes1
          - identifier: intro4
            title: >-
              Email address of primary point of contact within the organization
              for the system, e.g. email address of a product owner
            content: ''
            required: true
            type: text
          - identifier: intro5
            title: >-
              Which team within the organization is primarily responsible for
              the system?
            content: ''
            required: true
            type: text
          - identifier: intro6
            title: Which line of management does this team fall under?
            content: ''
            required: true
            type: text
      - questions:
          - identifier: q1
            title: Automation of legislation or regulations
            content: >
              Is the system a one-on-one automation of rules established in
              legislation, regulations or otherwise by people?
            tooltip: >-
              If the rules within your system have not been explicitly
              established and documented in advance, please select "no".
            options:
              - id: yes1
                value: yes1
                title: 'Yes, legislation or regulations'
                content: >
                  One-on-one automation of rules established in legislation or
                  regulations
              - id: yes2
                value: yes2
                title: 'Yes, made by people'
                content: >
                  One-on-one automation of human-generated rules (other than
                  laws or regulations)
              - id: 'no'
                value: 'no'
                title: 'No'
                content: ''
            type: radio
          - identifier: q1-yes1
            title: Which law or regulation?
            content: ''
            required: true
            type: text
            visible_when_or:
              - visible_when_and:
                  - identifier: q1
                    value: yes1
          - identifier: output2
            title: Follow-up question
            content: >
              Possibly an AI system or algorithm. We will ask you a follow-up
              question.
            type: radio
            visible_when_or:
              - visible_when_and:
                  - identifier: q1
                    value: yes2
          - identifier: q2
            title: >-
              Does the system contain a model or decision rules derived from
              data?
            content: ''
            tooltip: >-
              For instance, calculating threshold values ​​for rules or
              weighting factors for decisions formed based on data, statistical
              modeling or machine learning, including deep learning or large
              language models.
            options:
              - id: yes1
                value: yes1
                title: 'Yes, manually created'
                content: >
                  Model or algorithm is manually created, but with the help of
                  data analysis to determine, for example, selection of
                  variables, weighting factors or threshold values
              - id: yes2
                value: yes2
                title: 'Yes, by statistical methods'
                content: >
                  Model or algorithm is created through optimization, machine
                  learning, simulation or something similar
              - id: 'no'
                value: 'no'
                title: 'No'
                content: ''
            required: false
            type: radio
            visible_when_or:
              - visible_when_and:
                  - identifier: q1
                    value: 'no'
          - identifier: output3
            title: Follow-up question
            content: >
              Possibly an AI system or algorithm. We will ask you a follow-up
              question.
            type: radio
            visible_when_or:
              - visible_when_and:
                  - identifier: q2
                    value: yes1
          - identifier: q3
            title: >-
              Which of the following categories does the outcome of the system
              fall under?
            content: ''
            tooltip: >-
              Choose the output category that is the most applicable. Data
              includes all forms of electronic data. Text, images, audio are
              also data.
            options:
              - id: option1
                value: option1
                title: 'An estimated score, ranking or chance'
                content: ''
              - id: option2
                value: option2
                title: An estimated label or classification
                content: |
                  Ja/nee, hoog/laag of een indeling in groepen
              - id: option3
                value: option3
                title: A recommendation
                content: ''
              - id: option4
                value: option4
                title: A decision
                content: ''
              - id: option5
                value: option5
                title: 'Content (written text, video, audio or images)'
                content: |
                  A graph or dashboard is not considered content
              - id: option6
                value: option6
                title: Another kind of output
                content: ''
            type: radio
            visible_when_or:
              - visible_when_and:
                  - identifier: q2
                    value: yes2
          - identifier: q3-option6
            title: Provide a description of the output
            content: ''
            type: textarea
            visible_when_or:
              - visible_when_and:
                  - identifier: q3
                    value: option6
          - identifier: output3
            title: 'System is an AI-systeem '
            content: |
              An AI Act risk assessment must be filled out.
            type: radio
            visible_when_or:
              - visible_when_and:
                  - identifier: q3
                    value: option5
              - visible_when_and:
                  - identifier: q3
                    value: option4
              - visible_when_and:
                  - identifier: q3
                    value: option3
              - visible_when_and:
                  - identifier: q3
                    value: option2
              - visible_when_and:
                  - identifier: q3
                    value: option1
          - identifier: q4
            title: >-
              Which of the following categories does the outcome of the system
              fall under?
            content: ''
            options:
              - id: option1
                value: option1
                title: 'An estimated score, ranking or chance'
                content: ''
              - id: option2
                value: option2
                title: >-
                  Een ingeschat label of classificatie (ja/nee, hoog/laag of een
                  indeling in groepen)
                content: ''
              - id: option3
                value: option3
                title: Een aanbeveling
                content: ''
              - id: option4
                value: option4
                title: Een beslissing
                content: ''
              - id: option5
                value: option5
                title: 'Content (geschreven tekst, video, audio of  afbeeldingen)'
                content: |
                  Een grafiek of dashboard is geen content
              - id: option6
                value: option6
                title: Een ander soort output
                content: ''
            type: radio
            visible_when_or:
              - visible_when_and:
                  - identifier: q1
                    value: yes2
              - visible_when_and:
                  - identifier: q2
                    value: yes1
          - identifier: q4-option6
            title: Geef een beschrijving van de output
            content: ''
            required: true
            type: textarea
            visible_when_or:
              - visible_when_and:
                  - identifier: q4
                    value: option6
          - identifier: q5
            title: Rol in besluitvorming
            content: >
              Worden in het proces beslissingen genomen voor individuele
              inwoners?
            tooltip: >-
              Denk aan wel/geen opvolging vraag of verzoek van een burger,
              wel/geen verzoek aan burger om aanvullende informatie aan te
              leveren, wel/geen selectie voor controle of inspectie. Let op: een
              beslissing is veel breder dan een formeel besluit.
            options:
              - id: 'yes'
                value: 'yes'
                title: Ja
                content: ''
              - id: 'no'
                value: 'no'
                title: Nee
                content: ''
            required: false
            type: radio
            visible_when_or:
              - visible_when_and:
                  - identifier: q3
                    value: option5
              - visible_when_and:
                  - identifier: q3
                    value: option4
              - visible_when_and:
                  - identifier: q3
                    value: option3
              - visible_when_and:
                  - identifier: q3
                    value: option2
              - visible_when_and:
                  - identifier: q3
                    value: option1
              - visible_when_and:
                  - identifier: q4
                    value: option5
              - visible_when_and:
                  - identifier: q4
                    value: option4
              - visible_when_and:
                  - identifier: q4
                    value: option3
              - visible_when_and:
                  - identifier: q4
                    value: option2
              - visible_when_and:
                  - identifier: q4
                    value: option1
          - identifier: q6
            title: Soort beslissing
            content: |
              Wat voor soort beslissingen worden genomen in dit proces?
            options:
              - id: option1
                value: option1
                title: Beslissing met directe financiële gevolgen voor burger
                content: >
                  Bijvoorbeeld beslissingen over uitkering, toeslag, subsidie,
                  boete, terugbetaling of mogelijkheid tot betalingsregeling
              - id: option2
                value: option2
                title: >-
                  Beslissing over aanvragen en verzoeken zonder directe
                  financiële gevolgen
                content: ''
              - id: option3
                value: option3
                title: Beslissing over formele klachten en bezwaren
                content: ''
              - id: option4
                value: option4
                title: >-
                  Beslissing over prioritering of routering van aanvragen,
                  verzoeken, klachten en bezwaren
                content: ''
              - id: option5
                value: option5
                title: >-
                  Beslissing over controle, onderzoek of verzoek tot aanvullende
                  informatie verschaffing door de burger
                content: ''
              - id: option6
                value: option6
                title: Anders
                content: ''
            type: radio
            visible_when_or:
              - visible_when_and:
                  - identifier: q5
                    value: 'yes'
          - identifier: q6-option6
            title: Beschrijf het soort beslissing
            content: ''
            required: true
            type: textarea
            visible_when_or:
              - visible_when_and:
                  - identifier: q6
                    value: option6
          - identifier: q7
            title: Interactie met burger
            content: >
              Het proces draagt bij aan hoe de overheid (groepen) inwoners
              categoriseert of benadert?
            options:
              - id: 'yes'
                value: 'yes'
                title: Ja
                content: ''
              - id: 'no'
                value: 'no'
                title: Nee
                content: ''
            type: radio
            visible_when_or:
              - visible_when_and:
                  - identifier: q5
                    value: 'no'
          - identifier: q8
            title: Effect van toepassing
            content: |
              Wat is effect van de toepassing op de uitkomst van het proces?
            options:
              - id: option1
                value: option1
                title: >-
                  De uitkomst van het proces wordt direct bepaald door de
                  toepassing
                content: >
                  Bijvoorbeeld straight through processing. Menselijk toezicht 
                  kan achteraf door de uitkomsten te bekijken of analyseren.
              - id: option2
                value: option2
                title: >-
                  De uitkomst van het proces wordt in grote mate beïnvloed door
                  de toepassing
                content: >
                  Bijvoorbeeld doordat werkinstructies een consequentie
                  verbinden aan een specifieke output van de toepassing. Een
                  medewerker kan afwijkende keuzes maken, maar in de praktijk is
                  de output een doorslaggevende factor voor de procesuitkomst.
              - id: option3
                value: option3
                title: >-
                  De uitkomst van het proces wordt in zekere mate beïnvloed door
                  de output van de toepassing
                content: >
                  De output  van de toepassing een belangrijke factor voor de
                  procesuitkomst, maar een medewerker maakt zelf de keuze over
                  de uitkomst. Deze medeweker heeft de juiste informatie,
                  ervaring/kunde, mandaat en beschikbare tijd om deze keuze te
                  maken.
              - id: option4
                value: option4
                title: >-
                  De uitkomst van het proces wordt volledig door een mens
                  bepaald en wordt beïnvloed door meerdere factoren waarin de
                  output slechts een van deze factoren is
                content: >
                  De output van de toepassing is niet doorslaggevend in de
                  keuze.
              - id: option5
                value: option5
                title: Een ander soort effect
                content: ''
            type: radio
            visible_when_or:
              - visible_when_and:
                  - identifier: q6
                    value: option6
              - visible_when_and:
                  - identifier: q6
                    value: option5
              - visible_when_and:
                  - identifier: q6
                    value: option4
              - visible_when_and:
                  - identifier: q6
                    value: option3
              - visible_when_and:
                  - identifier: q6
                    value: option2
              - visible_when_and:
                  - identifier: q6
                    value: option1
              - visible_when_and:
                  - identifier: q7
                    value: 'yes'
          - identifier: q8-option5
            title: Beschrijf het effect van de toepassing op het proces
            content: ''
            required: true
            type: textarea
            visible_when_or:
              - visible_when_and:
                  - identifier: q8
                    value: option5
          - identifier: output4
            title: Impactvol algoritme
            content: ''
            type: radio
            visible_when_or:
              - visible_when_and:
                  - identifier: q8
                    value: option5
              - visible_when_and:
                  - identifier: q8
                    value: option3
              - visible_when_and:
                  - identifier: q8
                    value: option2
              - visible_when_and:
                  - identifier: q8
                    value: option1
          - identifier: output1
            title: Uw toepassing is geen AI-systeem of impactvol algoritme
            content: ''
            type: radio
            visible_when_or:
              - visible_when_and:
                  - identifier: q8
                    value: option4
              - visible_when_and:
                  - identifier: q1
                    value: yes1
              - visible_when_and:
                  - identifier: q2
                    value: 'no'
              - visible_when_and:
                  - identifier: q4
                    value: option6
              - visible_when_and:
                  - identifier: q3
                    value: option6
              - visible_when_and:
                  - identifier: q7
                    value: 'no'
    complete_form_options:
      type: submit
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
    id: overview
    items:
      - title: Terug naar overzicht
        icon: fa fa-file
        link: /nl/technical-tools/documentation/#quick-scan
---

{{< overview_block index="0" >}}

{{< dynamic_form_engine index="0" >}}
