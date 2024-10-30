---
type: regular
title: Documentatie voor AI-systemen
subtitle: >
  Open-source templates voor modeldocumentatie van AI-systemen. Afgestemd op de
  eisen uit de AI Verordening en Nederlandse soft law kaders, zoals de
  [Handreiking
  Algoritmeregister](https://www.digitaleoverheid.nl/document/handreiking-algoritmeregister/)
  van het Ministerie van Binnenlandse Zaken. 


  Help mee ontwikkelen, deel feedback middels
  [Github](https://github.com/NGO-Algorithm-Audit/AlgorithmAudit_website) of via
  [info@algorithmaudit.eu](mailto:info@algorithmaudit.eu).
image: /images/svg-illustrations/case_repository.svg
dynamic_form_engine:
  - title: Identification AI systems and impactful algorithms
    id: form
    icon: fa fa-star
    content: >
      Determine whether your system is an AI system or impactful algorithm by answering a maximum of 8 questions.
    section:
      - questions:
          - identifier: q1
            title: Automation of rules devised by humans
            content: >
              Does the system directly automate rules established in legislation, regulations, or other guidelines created by people?


              <ins>*If rules within your application are not explicilty predefined and documented, select here “no”. Software requirements with certain degrees of freedom are not considered to be rules devised by humans.*</ins>
            tooltip: ''
            use_card_style: false
            options:
              - id: yes1
                value: yes1
                title: 'Yes, legislation or regulation'
                content: >
                  One-on-one automation of rules established in legislation or regulations
              - id: yes2
                value: yes2
                title: 'Yes, devised by people'
                content: >
                  One-on-one automation of human-generated rules (other than laws or regulations)
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
          - identifier: q2
            title: >-
              Does the system contain a model or decision rules derived from data?
            content: ''
            tooltip: >-
              For instance, calculating threshold values for rules or weighting factors for decisions formed based on data, statistical modeling or machine learning, including deep learning or large or exalanguage models.
            use_card_style: false
            options:
              - id: yes1
                value: yes1
                title: 'Yes, manually created'
                content: >
                  Model or algorithm is manually created, but with the help of data analysis to determine, for example, selection of variables, weighting factors or threshold values
              - id: yes2
                value: yes2
                title: 'Yes, by statistical methods'
                content: >
                  Model or algorithm is created through optimization, machine learning, simulation or something similar
              - id: 'no'
                value: 'no'
                title: No
                content: ''
            required: false
            type: radio
            visible_when_or:
              - visible_when_and:
                  - identifier: q1
                    value: 'no'
          - identifier: q3
            title: >-
              Which of the following categories does the system’s outcome fall into?
            content: ''
            tooltip: >-
              Select the output category that applies best. Data includes all forms of electronic information. Text, images, and audio are also considered data.
            use_card_style: false
            options:
              - id: option1
                value: option1
                title: 'An estimated score, ranking or chance'
                content: ''
              - id: option2
                value: option2
                title: An estimated label or classification
                content: |
                  Yes/no, high/low or a division into groups
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
          - identifier: q4
            title: >-
              Which of the following categories does the system’s outcome fall into?
            content: ''
            tooltip: >-
              Select the output category that applies best. Data includes all forms of electronic information. Text, images, and audio are also considered data.
            use_card_style: false
            options:
              - id: option1
                value: option1
                title: 'An estimated score, ranking or chance'
                content: ''
              - id: option2
                value: option2
                title: An estimated label or classification
                content: |
                  Yes/no, high/low or a division into groups
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
                  - identifier: q1
                    value: yes2
              - visible_when_and:
                  - identifier: q2
                    value: yes1
          - identifier: q4-option6
            title: Provide a description of the output
            content: ''
            required: true
            type: textarea
            visible_when_or:
              - visible_when_and:
                  - identifier: q4
                    value: option6
          - identifier: text1
            title: >-
              The following questions relate to the process in which the application is used. For the answers, it does not matter how automated this process is or what role the application has in the process. We will ask about the role of the application afterward.
            content: ''
            use_card_style: false
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
          - identifier: q5
            title: Role in decision making
            content: >
              Are decisions made for individual citizens in the process?

              <ins>*Note: a decision is much broader than a formal resolution.*<ins>
            tooltip: >-
              Consider examples like approving or denying a citizen's request, requesting additional information from a citizen, or selecting for inspection or review. Note: a decision is much broader than a formal resolution.
            use_card_style: false
            options:
              - id: 'yes'
                value: 'yes'
                title: Yes
                content: ''
              - id: 'no'
                value: 'no'
                title: No
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
            title: Type of decision
            content: >
              What kind of decisions are made in the process? Choose the option that best matches the type of decision.
            use_card_style: false
            options:
              - id: option1
                value: option1
                title: Decision that has direct financial consequences for citizens
                content: >
                  For instances, decisions about benefits, allowances, grants, fines, repayments or the possibility of a payment arrangement
              - id: option2
                value: option2
                title: >-
                  Decision on applications and requests without any direct financial consequences
                content: ''
              - id: option3
                value: option3
                title: Decision about formal complaints and objections
                content: ''
              - id: option4
                value: option4
                title: >-
                  Decision about prioritization or routing of applications, requests, complaints, and objections
                content: ''
              - id: option5
                value: option5
                title: >-
                  Decision about inspection, research/investigation or request for additional information by the citizen
                content: ''
              - id: option6
                value: option6
                title: Other
                content: ''
            type: radio
            visible_when_or:
              - visible_when_and:
                  - identifier: q5
                    value: 'yes'
          - identifier: q6-option6
            title: Describe the type of decision
            content: ''
            required: true
            type: textarea
            visible_when_or:
              - visible_when_and:
                  - identifier: q6
                    value: option6
          - identifier: q7
            title: Type of interaction with citizen
            content: >
              Does the process contribute to how the government categorises or approaches (groups of) residents?


              Select "Yes" if you are uncertain, and briefly describe why.
            use_card_style: false
            options:
              - id: 'yes'
                value: 'yes'
                title: Yes
                content: ''
              - id: 'no'
                value: 'no'
                title: No
                content: ''
            type: radio
            visible_when_or:
              - visible_when_and:
                  - identifier: q5
                    value: 'no'
          - identifier: q8
            title: Effect of the application
            content: |
              What is the effect of the system on the outcome of the process?

              Choose the option that best fits.
            use_card_style: false
            options:
              - id: option1
                value: option1
                title: >-
                  The outcome of the process is directly determined by the system
                content: >
                   For instance, straight through processing. Human supervision can be applied afterwards by viewing or analyzing the results.
              - id: option2
                value: option2
                title: >-
                  The outcome of the process is largely influenced by the system
                content: >
                  For instance, because work instructions connect a consequence to a specific output of the system. An employee can make different choices, but in practice the output is a decisive factor for the outcome of the process.
              - id: option3
                value: option3
                title: >-
                  The outcome of the process is influenced to some extent by the output of the system
                content: >
                  The output of the application is an important factor for the process outcome, but an employee makes the choice about the outcome itself. This employee has the right information, experience/skills, mandate and available time to make this choice.
              - id: option4
                value: option4
                title: >-
                  The outcome of the process is completely determined by a human and is influenced by multiple factors in which the output is only one of these factors
                content: >
                  The output of the system is not decisive in the choice.
              - id: option5
                value: option5
                title: Another effect
                content: ''
            type: radio
            visible_when_or:
              - {}
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
            title: Describe the effect of the system on the process
            content: ''
            required: true
            type: textarea
            visible_when_or:
              - visible_when_and:
                  - identifier: q8
                    value: option5
          - identifier: output3
            title: >-
              Based on your answers, your application is likely to be an impactful algorithm.
            content: ''
            use_card_style: false
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
            title: Your system is not an AI system or an impactful algorithm
            content: ''
            use_card_style: false
            type: radio
            visible_when_or:
              - visible_when_and:
                  - identifier: q6
                    value: option6
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
          - identifier: output2
            title: >-
              Based on your answers, your application is likely to be an impactful algorithm.
            content: |
              A risk assessment for the AI Act must be filled in. 
            use_card_style: false
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
    complete_form_options:
      type: submit
      button_text: Save as pdf
overview_block:
  - title: Overview
    content: ''
    icon: null
    id: overview
    items:
      - title: Back to overview
        icon: fa fa-file
        link: /nl/technical-tools/documentation/#quick-scan
---

{{< overview_block index="0" >}}

{{< dynamic_form_engine index="0" >}}
