---
icon: fa-poll-h
layout: case
title: Risk Profiling for Social Welfare Reexamination
subtitle: |
  Problem statement (ALGO:AA:2023:02:P) en advice document (ALGO:AA:2023:02:A)
image: /images/algoprudence/AA202302/AA202302A_cover_EN.png
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

{{< tab_header width="4" tab1_id="description" tab1_title="Description of algoprudence" tab2_id="actions" tab2_title="Actions following algoprudence" tab3_id="discussion" tab3_title="Discussion & debate" default_tab="description" >}}

{{< tab_content_open icon="fa-poll-h" title="Risk Profiling for Social Welfare Reexamination" id="description" >}}

#### Algoprudence identification code

ALGO:AA:2023:02

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

The advice report (ALGO:AA:2023:02:A) has been presented to the Dutch Minister of Digitalization on November 29, 2023. A press release can be found [here](/events/press_room/#rotterdam-algoritme).

{{< image id="presentation-minister" image1="/images/algoprudence/AA202302/Algorithm audit presentatie BZK FB-18.jpg" alt1="Presentation advice report to Dutch Minister of Digitalization" caption1="Presentation advice report to Dutch Minister of Digitalization" width_desktop="5" width_mobile="12" >}}

#### Problem statement and advice document

{{< embed_pdf url="/pdf-files/algoprudence/ALGO_AA202302/ALGO_AA202302P_EN.pdf" url2="/pdf-files/algoprudence/ALGO_AA202302/ALGO_AA202302A_EN.pdf" >}}

#### Normative advice commission

* Abderrahman El Aazani, Researcher at the Ombudsman Rotterdam-Rijnmond
* Francien Dechesne, Associate Professor Law and Digital Technologies, Leiden University
* Maarten van Asten, Alderman Finance, Digitalization, Sports and Events Municipality of Tilburg
* Munish Ramlal, Ombudsman Metropole region Amsterdam
* Oskar Gstrein, Assistant Professor Governance and Innovation, University of Groningen

{{< tab_content_close >}}

{{< tab_content_open icon="" title="" id="actions" >}}

{{< accordions_area_open id="actions" >}}

{{< accordion_item_open title="Questions raised in the city council of Amsterdam as a result of advice report" image="/images/algoprudence/AA202302/Actions/images.png" id="amsterdam" date="04-12-2023" tag1="political action" >}}

##### Description

 Council members submitted <a href="https://amsterdam.raadsinformatie.nl/document/13573898/1/236+sv+Aslami%2C+IJmker+en+Garmy+inzake+toegepaste+profileringscriteria+gemeentelijke+algoritmes" target="_blank">questions</a> whether the machine learning (ML)-driven risk profiling algorithm currently tested by the City of Amsterdam satisfies the requirements as set out in ALGO:AA:2023:02:A, including:

* (in)eligible selection criteria fed to the ML model
* explainability requirements for the used explainable boosting algorithm
* implications of the AIAct for this particular form of risk profiling.

{{< embed_pdf url="/pdf-files/algoprudence/ALGO_AA202302/Actions/20231204_236 sv Aslami, IJmker en Garmy inzake toegepaste profileringscriteria gemeentelijke algoritmes.pdf" width_mobile_pdf="12" width_desktop_pdf="6" >}}

{{< accordion_item_close >}}

{{< accordion_item_open title="Binnenlands Bestuur" image="/images/algoprudence/AA202302/Actions/logo-bb.svg" id="binnenlands-bestuur" date="01-12-2023" tag1="news" >}}

##### Description

News website for Dutch public sector administration reported on ALGO:AA:2023:02:A. See [link](https://www.binnenlandsbestuur.nl/digitaal/algoritmische-profilering-onder-strikte-voorwaarden-mogelijk).

{{< accordion_item_close >}}

{{< accordions_area_close >}}

{{< tab_content_close >}}

{{< tab_content_open id="discussion" >}}

{{< accordions_area_open id="discussion" >}}

{{< accordion_item_open title="Reaction Netherlands Human Rights Institute on age discrimination" id="cvrm" background_color="#eef2f6" date="12-04-2024" tag1="reaction" image="/images/algoprudence/AA202302/Discussion&debate/CvRM.svg" >}}

#### Age Discrimination

Policies, such as those implemented by public sector agencies investigating (un)duly granted social welfare or employers seeking new employees, can intentionally or unintentionally lead to differentiation between certain groups of people. If an organization makes this distinction based on grounds that are legally protected, such as gender, origin, sexual orientation, or a disability or chronic illness, and there is no valid justifying reason for doing so, then the organization is engaging in prohibited discrimination. We refer to this as discrimination.

But what about age? Both the Rotterdam-algorithm and DUO-algorithm, as studied by Algorithm Audit, differentiated based on age. However, in these cases, age discrimination does not occur.

EU non-discrimination law also prohibits discrimination on the basis of age. For instance, arbitrarily rejecting a job applicant because someone is too old is not unlawful. However, legislation regarding age differentiation allows more room for a justifying argument than for the aforementioned personal characteristics. This is especially true when the algorithm is not applied in the context of labor.

Therefore, in the case of detecting unduly granted social welfare or misuse of college loan, it is not necessarily prohibited for an algorithm to consider someone's age. However, there must be a clear connection between age and the aim pursued. Until it is shown that someone's age increases the likelihood of misuse or fraud, age is ineligible as a selection criteria in algorithmic-driven selection procedures. For example, pertaining to disability allowances for youngsters (Wajong) a clear connection exists and an algorithm can lawfully differentiate upon age.

{{< accordion_item_close >}}

{{< accordions_area_close >}}

{{< tab_content_close >}}

{{< form1 >}}
