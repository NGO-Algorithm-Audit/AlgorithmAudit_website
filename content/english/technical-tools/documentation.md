---
type: regular
title: Documentation for AI systems
subtitle: >
  Open-source templates for risk classification of AI systems are beneficial for
  public knowledge building for AI governance. Please send your feedback to
  [info@algorithmaudit.eu](mailto:info@algorithmaudit.eu)
image: /images/svg-illustrations/case_repository.svg
score_card:
  title: AI-system risk classification
  content: >
    Organization-wide algorithm management policy requires pragmatic frameworks.
    A risk-oriented approach often plays a leading role in this. It is in line
    with national and international legislation for algorithms, such as the AI
    Act. Below you will find an example of an algorithm scorecard for public
    sector organizations. Based on this scorecard, algorithms can be classified
    as high, medium or low risk.


    The results of the scorecard are available to be downloaded as a pdf.
  section:
    - title: Impact
      questions:
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
                Some personal data are used, but the data cannot be traced back
                to an individual person.
            - value: high
              title: High impact
              content: >
                Various personal data are used with which (directly or
                indirectly) the person in question can be identified.
        - identifier: data3
          title: 3. Consequences for citizens I
          content: >
            Is the algorithm part of a decision-making process that has legal
            consequences for citizens?
          tooltip: >-
            Legal consequences refer to the possible impact on, for example, the
            amount and/or duration of a certain benefit
          options:
            - value: low
              title: Low impact
              content: >
                No, the algorithm is not part of a decision-making process that
                has legal consequences for citizens.
            - value: high
              title: High impact
              content: >
                Yes, the algorithm is part of a decision-making process that has
                legal consequences for citizens.
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
              title: Hoge impact
              content: |
                ≥100.000 individuen
        - identifier: data6
          title: 6. Derde partijen
          content: >
            Worden de uitkomsten van het algoritme gedeeld met derde partijen
            (bijvoorbeeld burgers, andere afdelingen of toezichthoudende
            partijen)?
          options:
            - value: low
              title: Lage impact
              content: >
                Nee, de uitkomsten van het algoritme worden niet gedeeld met
                derde partijen
            - value: high
              title: Hoge impact
              content: >
                Ja, de uitkomsten van het algoritme worden gedeeld met derde
                partijen
        - identifier: data7
          title: 7. Financiële/reputationele schade
          content: >
            Wat is de (geschatte) financiële- of reputatieschade als het
            algoritme fouten bevat die tot incorrecte uitkomsten leiden?
          options:
            - value: low
              title: Lage impact
              content: >
                Inzet van het algoritme heeft minimale financiële of
                reputationele impact
            - value: medium
              title: Medium impact
              content: >
                Incorrecte uitkomsten leiden tot een gemiddelde financiële en/of
                reputationale impactschade
            - value: high
              title: Hoge impact
              content: >
                Incorrecte uitkomsten leiden tot een veel financiële en/of
                reputationale impactschade. Fouten hebben een grote impact op de
                dienstverlening van de organisatie
        - identifier: data8
          title: 8. Autonomie
          content: >
            Worden er beslissingen gemaakt op basis van de uitkomsten van het
            AI-systeem? Zo ja, op welke manier?
          tooltip: >-
            Beschrijvend of diagnostisch: Het algoritme wordt enkel gebruikt om
            te monitoren of om een gebeurtenis/beslissing uit het verleden te
            analyseren. Er is geen directe beslissing verbonden aan de
            algoritmeuitkomst. -Beschrijvend algoritme: het algoritme geeft een
            weergave van wat er wordt waargenomen. -Diagnostisch algoritme: het
            algoritme geeft een waarschijnlijkheid of analyse van waarom iets
            optreedt, veroorzaakt door positieve, negatieve of predictieve
            waarden, of berekent een bepaalde waarschijnlijkheid die wordt
            gebruikt in werkprocessen en/of besluitvorming.  Voorspellend
            algoritme: Het algoritme geeft een verwachting af. Voorspelling van
            wat kan gebeuren of een kans/waarschijnlijkheid van een toekomstige
            handeling of gebeurtenis. Beslissingen worden gemaakt met menselijke
            tussenkomst op basis van algoritmeuitkomsten.  Voorschrijvend
            algoritme: Het algoritme bepaalt en/of dicteert de beslissing/actie
            of uitvoering. -Voorschrijvend: beslissingen worden gemaakt op basis
            van een algoritmeuitkomst, met minimale menselijke tussenkomst.
            -Automatisch: beslissingen worden gemaakt zonder menselijke
            tussenkomst.
          options:
            - value: low
              title: Lage impact
              content: >
                Output van het AI-systeem is beschrijvende of diagnostische
                statistiek, wat als input fungeert voor de besluitvorming
            - value: medium
              title: Medium impact
              content: >
                Output van het AI-systeem is voorspellende statistiek, wat als
                input fungeert voor de besluitvorming
            - value: high
              title: Hoge impact
              content: >
                Output van het AI-systeem is voorscrhijvende statistiek, of
                besluitvorming is volledig geautomatiseerd
        - identifier: data9
          title: 9. Validatie
          content: |
            Zijn de algoritmeuitkomsten gevalideerd?
          options:
            - value: low
              title: Lage impact
              content: |
                Ja, het AI-systeem is gevalideerd
            - value: high
              title: Hoge impact
              content: |
                Nee, het AI-systeem is niet gevalideerd
---

{{< score_card >}}
