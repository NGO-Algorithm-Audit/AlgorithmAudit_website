---
type: regular
title: Documentation for AI systems
subtitle: >
  Open-source templates for risk classification of AI systems are beneficial for
  public knowledge building for AI governance. Please send your feedback to
  [info@algorithmaudit.eu](mailto:info@algorithmaudit.eu)
image: /images/svg-illustrations/case_repository.svg
dynamic_form_engine:
  - title: AI-system risk classification
    id: risk-classification
    icon: far fa-flag
    content: >
      Organization-wide algorithm management policy requires pragmatic
      frameworks. A risk-oriented approach often plays a leading role in this.
      It is in line with national and international legislation for algorithms,
      such as the AI Act. Below you will find an example of an algorithm
      scorecard for public sector organizations. Based on this scorecard,
      algorithms can be classified as high, medium or low risk.

      The results of the scorecard are available to be downloaded as a pdf.
    section:
      - questions:
          - identifier: data1
            title: 1. Data
            content: |
              Are there any agreements regarding data delivery?
            tooltip: >-
              Is it clear who is responsible for maintaining the data? And is it
              clear who is in charge?
            options:
              - value: low
                title: Low impact
                content: >
                  The agreements on data delivery are sufficiently clear. These
                  agreements are well documented.
              - value: medium
                title: Medium impact
                content: >
                  There are a few agreements on data delivery. These agreements
                  are somewhat documented.
              - value: high
                title: High impact
                content: >
                  There are no agreements or documentation regarding data
                  delivery.
            required: false
            type: radio
          - identifier: checkbox
            title: checkbox
            content: ''
            options:
              - id: checkbox1
                value: Checkbox1
                title: Checkbox 1
                content: |
                  TEST
              - id: checkbox2
                value: Checkbox2
                title: Checkbox2
                content: |
                  SDFAdsf
            required: false
            type: checkbox
          - identifier: text
            title: Text
            content: ''
            required: true
            type: text
            visible_when_or:
              - visible_when_and:
                  - identifier: checkbox1
                    value: Checkbox1
          - identifier: TextARea
            title: Text ARea
            content: |
              AsfpoASdokas
            tooltip: Test
            required: true
            type: textarea
            visible_when_or:
              - visible_when_and:
                  - identifier: data1
                    value: low
          - identifier: fileupload
            title: File upload
            content: ''
            file_upload_text: Upload
            file_type: .docx
            type: file
          - identifier: email
            title: email
            content: |
              email
            tooltip: email
            type: email
            placeholder: email
          - identifier: data2
            title: 2. Personal data
            content: |
              To what extent are personal data used in the algorithm?
            options:
              - value: low
                title: Low impact
                content: |
                  No personal data are used and/or processed.
              - value: medium
                title: Medium impact
                content: >
                  Some personal data are used, but the data cannot be traced
                  back to an individual person.
              - value: high
                title: High impact
                content: >
                  Various personal data are used with which (directly or
                  indirectly) the person in question can be identified.
            type: radio
          - identifier: data3
            title: 3. Consequences for citizens I
            content: >
              Is the algorithm part of a decision-making process that has legal
              consequences for citizens?
            tooltip: >-
              Legal consequences refer to the possible impact on, for example,
              the amount and/or duration of a certain benefit
            options:
              - value: low
                title: Low impact
                content: >
                  No, the algorithm is not part of a decision-making process
                  that has legal consequences for citizens.
              - value: high
                title: High impact
                content: >
                  Yes, the algorithm is part of a decision-making process that
                  has legal consequences for citizens.
            type: radio
          - identifier: data4
            title: 4. Consequences for citizens II
            content: >
              Does the algorithm affect (or threaten to affect) a fundamental
              right? If so, how severely is this fundamental right affected?
            tooltip: >-
              Examples of fundamental rights that may be violated (which is a
              non-exhaustive list): 1. Right to equal treatment 2. Protection of
              personal data 3. Procedural rights. See also p. 71 of the IAMA and
              explanation of the severity determination on p. 72 of the IAMA.
            options:
              - value: low
                title: Low impact
                content: >
                  Small to no violation of a fundamental right, so no special
                  degree of dilligence required.
              - value: medium
                title: Medium impact
                content: >
                  Moderate violation of a fundamental right, so dilligence is
                  required.
              - value: high
                title: High impact
                content: >
                  Serious violation of a fundamental right, dilligence in
                  particular is required.
            type: radio
            visible_when_or:
              - visible_when_and:
                  - identifier: data1
                    value: low
              - visible_when_and:
                  - identifier: data2
                    value: medium
                  - identifier: data1
                    value: medium
          - identifier: data5
            title: 5. Population size
            content: >
              What is the size of the population to which the algorithm is
              applied?
            options:
              - value: low
                title: Low impact
                content: |
                  \<2.000 individuals
              - value: medium
                title: Medium impact
                content: |
                  2.000 - 100.000 individuals
              - value: high
                title: High impact
                content: |
                  ≥100.000 individuals
            type: radio
          - identifier: data6
            title: 6. Third parties
            content: >
              Are the outcomes of the algorithm shared with third parties (e.g.
              citizens, other departments or supervisory parties)?
            options:
              - value: low
                title: Low impact
                content: >
                  No, the results of the algorithm are not shared with third
                  parties.
              - value: high
                title: High impact
                content: >
                  Yes, the results of the algorithm are shared with third
                  parties.
            type: radio
          - identifier: data7
            title: 7. Financial/reputational damage
            content: >
              What is the (estimated) financial or reputational damage if the
              algorithm contains errors that lead to incorrect outcomes?
            options:
              - value: low
                title: Low impact
                content: >
                  Using the algorithm has minimal financial or reputational
                  impact.
              - value: medium
                title: Medium impact
                content: >
                  Incorrect outcomes of the algorithm lead to average financial
                  and/or reputational impact damage.
              - value: high
                title: High impact
                content: >
                  Incorrect outcomes of the algorithm lead to great financial
                  and/or reputational impact damage. Errors have a big impact on
                  the service of the organization.
            type: radio
          - identifier: data8
            title: 8. Autonomy
            content: >
              Are the decisions made based on the outcomes of the AI ​​system?
              If so, how?
            tooltip: >-
              Descriptive or diagnostic: The algorithm is only used to monitor
              or analyze a past event/decision. There is no direct decision
              linked to the algorithm output. -Descriptive algorithm: The
              algorithm provides a representation of what is observed.
              -Diagnostic algorithm: The algorithm provides a probability or
              analysis of why something occurs, caused by positive, negative or
              predictive values, or calculates a certain probability that is
              used in work processes and/or decision making. Predictive
              algorithm: The algorithm provides an expectation. Prediction of
              what can happen or a chance/probability of a future action or
              event. Decisions are made with human intervention based on
              algorithm outputs. Prescriptive algorithm: The algorithm
              determines and/or dictates the decision/action or execution.
              -Prescriptive: Decisions are made based on an algorithm output,
              with minimal human intervention. -Automatic: Decisions are made
              without human intervention.
            options:
              - value: low
                title: Low impact
                content: >
                  Output of the AI ​​system is descriptive or diagnostic
                  statistics, which serves as input for decision making.
              - value: medium
                title: Medium impact
                content: >
                  Output of the AI ​​system is predictive statistics, which
                  serves as input for decision making.
              - value: high
                title: High impact
                content: >
                  Output of the AI ​​system is prescriptive statistics, or
                  decision-making is fully automated.
            type: radio
          - identifier: data9
            title: 9. Validation
            content: |
              Are the results of the algorithm validated?
            options:
              - value: low
                title: Low impact
                content: |
                  Yes, the AI ​​system has been validated.
              - value: high
                title: High impact
                content: |
                  No, the AI ​​system has not been validated.
            type: radio
    complete_form_options:
      type: redirect
      button_text: Submit
      backend_link: 'https://localhost:5173/test'
overview_block:
  - title: Overview
    content: ''
    icon: null
    id: overview
    items:
      - title: Back to overview
        icon: fa fa-file
        link: /technical-tools/documentation/
---

{{< overview_block index="0" >}}

{{< dynamic_form_engine index="0" >}}
