---
title: Risk Profiling for Social Welfare Reexamination
subtitle: |
  Problem statement (AA:2023:02:P) en advice document (AA:2023:02:A)
image: /images/algoprudence/AA202302/AA202302A_cover_EN.png
layout: case
icon: fa-poll-h
key_takeaways:
  - title: Algorithmic profiling is possible under strict conditions
    content: >
      The use of algorithmic profiling to re-examine whether social welfare
      benefits have been duly granted, is acceptable if applied responsibly.
  - title: Profiling must not equate suspicion
    content: |
      Re-examination needs to be based more on service and less on distrust.
  - title: Diversity in selection methods
    content: >
      To avoid tunnel vision and negative feedback loops, algorithmic profiling
      ought to be combined with expert-driven profiling and random sampling.
  - title: Well-considered use of profiling criteria
    content: >
      Caring to avoid (proxy) discrimination and other undesirable forms of
      differentiation, the normative advice commission assessed variables
      individually on their eligibility for profiling (see Infographic).
  - title: Explainability requirements for machine learning
    content: >
      It is necessary that the sampling of residents can be explained throughout
      the entire decision-making process. Complex training methods for variable
      selection, such as the xgboost algorithm discussed in this case study, are
      considered too complex to meet explainability requirements.
summary: >
  The commission judges that algorithmic risk profiling can be used under strict
  conditions for sampling residents receiving social welfare for re-examination.
  The aim of re-examination is a leading factor in judging profiling criteria.
  If re-examination were based less on distrust and adopts a more
  service-oriented approach, then the advice commission judges a broader use of
  profiling variables permissible to enable more precise targeting of
  individuals in need of assistance. For various variables used by the
  Municipality of Rotterdam during the period 2017-2021, the commission gives an
  argued judgement why these variables are or are not eligible as a profiling
  selection criterion (see Infographic). A combined use of several sampling
  methods (including expert-driven profiling and random sampling) is recommended
  to avoid tunnel vision and negative feedback loops. The commission advises
  stricter conditions for the selection of variables for use by algorithms than
  for selection by domain experts. The commission states that algorithms used to
  sample citizens for re-examination must be explainable. Complex training
  methods, such as the xgboost model used by the Municipality of Rotterdam, do
  not meet this explainability criterion. This advice is directed towards all
  Dutch and European municipalities that use or consider using profiling methods
  in the context of social services.
sources: >
  Unsolicited research, build upon [freedom of information
  requests](https://www.vpro.nl/argos/media/luister/argos-radio/onderwerpen/2021/In-het-vizier-van-het-algoritme-.html)
  submitted by investigative journalists.
additional_content:
  - title: Presentation
    content: "The advice report (AA:2023:02:A) has been presented to the Dutch Minister of Digitalization on November 29, 2023. A press release can be found\_[here](https://algorithmaudit.eu/pressroom).\n"
    image: /images/algoprudence/AA202302/Algorithm audit presentatie BZK FB-18.jpg
    width: 8
algoprudence:
  title: Algoprudence
  intro: "Download the full advice report (AA:2023:02:A)\_[here](https://drive.google.com/file/d/1zRRUYRfaIzdKFA2hQtW9yeM4jrD-Abef/view?usp=sharing)\_and problem statement (AA:2023:02:P)\_[here](https://drive.google.com/file/d/11sQMVJQd3ZJlW0R6HjU01b4N4CmuFw2q/view?usp=sharing).\n"
  reports:
    - url: >-
        https://drive.google.com/file/d/1zRRUYRfaIzdKFA2hQtW9yeM4jrD-Abef/preview
    - url: >-
        https://drive.google.com/file/d/11sQMVJQd3ZJlW0R6HjU01b4N4CmuFw2q/preview
normative_advice_members:
  - name: |
      Abderrahman El Aazani, Researcher at the Ombudsman Rotterdam-Rijnmond
  - name: >
      Francien Dechesne, Associate Professor Law and Digital Technologies,
      Leiden University
  - name: >
      Maarten van Asten, Alderman Finance, Digitalization, Sports and Events
      Municipality of Tilburg
  - name: |
      Munish Ramlal, Ombudsman Metropole region Amsterdam
  - name: >
      Oskar Gstrein, Assistant Professor Governance and Innovation, University
      of Groningen
funded_by:
  - url: 'https://www.sidnfonds.nl/projecten/ethical-risk-assessment-tool'
    image: /images/supported_by/sidn.png
  - url: 'https://europeanaifund.org/'
    image: /images/supported_by/EUAISFund.png
  - url: >-
      https://www.rijksoverheid.nl/ministeries/ministerie-van-binnenlandse-zaken-en-koninkrijksrelaties
    image: /images/supported_by/BZK.jpg
actions:
  - title: >-
      Questions raised in the city council of Amsterdam as a result of advice
      report
    description: >
      Council members submitted
      [questions](https://amsterdam.raadsinformatie.nl/document/13573898/1/236+sv+Aslami%2C+IJmker+en+Garmy+inzake+toegepaste+profileringscriteria+gemeentelijke+algoritmes)
      whether the machine learning (ML)-driven risk profiling algorithm
      currently tested by the City of Amsterdam satisfies the requirements as
      set out in AA-2023:02:A, including:


      * (in)eligible selection criteria fed to the ML model

      * explainability requirements for the used explainable boosting algorithm

      * implications of the AIAct for this particular form of risk profiling.
    image: /images/algoprudence/AA202302/Actions/images.png
    date: 04-12-2023
    facets:
      - value: political action
        label: political action
  - title: Binnenlands Bestuur
    description: "News website for Dutch public sector administration reported on AA:2023:02:A. See\_[link](https://www.binnenlandsbestuur.nl/digitaal/algoritmische-profilering-onder-strikte-voorwaarden-mogelijk).\n"
    image: /images/algoprudence/AA202302/logo-bb.svg
    date: 01-12-2023
    facets:
      - value: type
        label: News
  - title: Presentation advice report to Dutch Minister of Digitalization
    description: "Advice report AA:2023:02:A has been presented to the Dutch Minister of Digitalization on November 29, 2023. A press release can be found\_[here](/events/press_room).\n"
    image: /images/algoprudence/AA202302/Actions/presentatie_BZK.jpg
    date: 29-11-2023
    facets:
      - value: presentation
        label: Presentation
      - value: publication
        label: Publication
form1:
  title: React to this normative judgement
  content: >-
    Your reaction will be sent to the team maintaining algoprudence. A team will
    review your response and, if it complies with the guidelines, it will be
    placed in the Discussion & debate section above.
  button_text: Submit
  backend_link: 'https://formspree.io/f/xyyrjyzr'
  id: case-reaction
  questions:
    - label: |
        Name
      id: name
      required: true
      type: text
    - label: |
        Affiliated organization
      id: affiliated-organization
      type: text
    - label: |
        Reaction
      id: reaction
      required: true
      type: textarea
    - label: |
        Contact details
      id: contact-details
      required: true
      type: text
      placeholder: Mail address
---

{{< tab_header width="6" tab1_id="description" tab1_title="Description of algoprudence" tab2_id="actions" tab2_title="Actions following algoprudence" tab3_id="" tab3_title="" default_tab="description" >}}

{{< tab_content_open icon="fa-poll-h" title="Risk Profiling for Social Welfare Reexamination" id="description" >}}

#### Algoprudence number

AA:2023:02

#### Key takeaways normative advice commission

* <span style="color:#005aa7; font-weight:600;">Algorithmic profiling is possible under strict conditions</span>\
  The use of algorithmic profiling to re-examine whether social welfare benefits have been duly granted, is acceptable if applied responsibly.
* <span style="color:#005aa7; font-weight:600;">Profiling must not equate suspicion</span>\
  Re-examination needs to be based more on service and less on distrust.
* <span style="color:#005aa7; font-weight:600;">Diversity in selection methods</span>\
  To avoid tunnel vision and negative feedback loops, algorithmic profiling ought to be combined with expert-driven profiling and random sampling.
* <span style="color:#005aa7; font-weight:600;">Well-considered use of profiling criteria</span>\
  Caring to avoid (proxy) discrimination and other undesirable forms of differentiation, the normative advice commission assessed variables individually on their eligibility for profiling (see Infographic).
* <span style="color:#005aa7; font-weight:600;">Explainability requirements for machine learning</span>\
  It is necessary that the sampling of residents can be explained throughout the entire decision-making process. Complex training methods for variable selection, such as the xgboost algorithm discussed in this case study, are considered too complex to meet explainability requirements.

#### Infographic

{{< image id="infographic" width_desktop="10" width_mobile="12" image1="/images/algoprudence/AA202302/Infographic_EN.png" alt1="Infographic" caption1="Infographic" >}}

#### Summary advice

The commission judges that algorithmic risk profiling can be used under strict conditions for sampling residents receiving social welfare for re-examination. The aim of re-examination is a leading factor in judging profiling criteria. If re-examination were based less on distrust and adopts a more service-oriented approach, then the advice commission judges a broader use of profiling variables permissible to enable more precise targeting of individuals in need of assistance. For various variables used by the Municipality of Rotterdam during the period 2017-2021, the commission gives an argued judgement why these variables are or are not eligible as a profiling selection criterion (see Infographic). A combined use of several sampling methods (including expert-driven profiling and random sampling) is recommended to avoid tunnel vision and negative feedback loops. The commission advises stricter conditions for the selection of variables for use by algorithms than for selection by domain experts. The commission states that algorithms used to sample citizens for re-examination must be explainable. Complex training methods, such as the xgboost model used by the Municipality of Rotterdam, do not meet this explainability criterion. This advice is directed towards all Dutch and European municipalities that use or consider using profiling methods in the context of social services.

#### Source of case

Unsolicited research, build upon [freedom of information requests](https://www.vpro.nl/argos/media/luister/argos-radio/onderwerpen/2021/In-het-vizier-van-het-algoritme-.html) submitted by investigative journalists.

#### Presentation

The advice report (AA:2023:02:A) has been presented to the Dutch Minister of Digitalization on November 29, 2023. A press release can be found [here](/events/press_room/#rotterdam-algoritme).

{{< image id="presentation-minister" image1="/images/algoprudence/AA202302/Algorithm audit presentatie BZK FB-18.jpg" alt1="Presentation advice report to Dutch Minister of Digitalization" caption1="Presentation advice report to Dutch Minister of Digitalization" width_desktop="5" width_mobile="12" >}}

#### Report

Dowload the full report and problem statement [here](https://drive.google.com/file/d/1GHPwDaal3oBJZluFYVR59e1_LHhP8kni/view?usp=sharing).

{{< pdf_frame articleUrl1="https://drive.google.com/file/d/1zRRUYRfaIzdKFA2hQtW9yeM4jrD-Abef/preview" articleUrl2="https://drive.google.com/file/d/11sQMVJQd3ZJlW0R6HjU01b4N4CmuFw2q/preview" >}}

#### Normative advice commission

* Abderrahman El Aazani, Researcher at the Ombudsman Rotterdam-Rijnmond
* Francien Dechesne, Associate Professor Law and Digital Technologies, Leiden University
* Maarten van Asten, Alderman Finance, Digitalization, Sports and Events Municipality of Tilburg
* Munish Ramlal, Ombudsman Metropole region Amsterdam
* Oskar Gstrein, Assistant Professor Governance and Innovation, University of Groningen

#### Funded by

<br>

{{< image image1="/images/supported_by/sidn.png" alt1="SIDN" caption1="SIDN" image2="/images/supported_by/EUAISFund.png" alt2="European AI & Society Fund" caption2="European AI & Society Fund" id="funded-by" image3="/images/supported_by/BZK.jpg" alt3="Dutch Ministry of the Interior" caption3="Dutch Ministry of the Interior" link1="https://www.sidnfonds.nl/projecten/ethical-risk-assessment-tool" width_desktop="4" width_mobile="6" link2="https://europeanaifund.org/" link3="https://www.government.nl/ministries/ministry-of-the-interior-and-kingdom-relations" >}}

{{< tab_content_close >}}

{{< tab_content_open icon="" title="" id="actions" >}}

{{< accordions_area_open id="actions" >}}

{{< accordion_item_open title="Questions raised in the city council of Amsterdam as a result of advice report" image="/images/algoprudence/AA202302/Actions/images.png" id="amsterdam" date="04-12-2023" tag1="political action" >}}

##### Description

 Council members submitted <a href="https://amsterdam.raadsinformatie.nl/document/13573898/1/236+sv+Aslami%2C+IJmker+en+Garmy+inzake+toegepaste+profileringscriteria+gemeentelijke+algoritmes" target="_blank">questions</a> whether the machine learning (ML)-driven risk profiling algorithm currently tested by the City of Amsterdam satisfies the requirements as set out in AA-2023:02:A, including:

* (in)eligible selection criteria fed to the ML model
* explainability requirements for the used explainable boosting algorithm
* implications of the AIAct for this particular form of risk profiling.

{{< pdf_frame articleUrl1="https://drive.google.com/file/d/1oPiO_s9KuV7446BqC9a4P2qjW7MGUyxu/preview" >}}

{{< accordion_item_close >}}

{{< accordion_item_open title="Binnenlands Bestuur" image="/images/algoprudence/AA202302/Actions/logo-bb.svg" id="binnenlands-bestuur" date="01-12-2023" tag1="news" >}}

##### Description

News website for Dutch public sector administration reported on AA:2023:02:A. See [link](https://www.binnenlandsbestuur.nl/digitaal/algoritmische-profilering-onder-strikte-voorwaarden-mogelijk).

{{< accordion_item_close >}}

{{< accordions_area_close >}}

{{< tab_content_close >}}

{{< form1 >}}
