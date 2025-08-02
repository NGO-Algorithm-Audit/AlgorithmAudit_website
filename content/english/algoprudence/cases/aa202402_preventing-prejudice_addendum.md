---
icon: fas fa-balance-scale-left
layout: case
title: Addendum Preventing prejudice
subtitle: >
  Addendum for previous [audit report](/algoprudence/cases/aa202401_bias-prevented/) –
  Supervised bias analysis of aggregtation statistics on the country of birth
  and country of origin of 300.000+ students as provided by Statistics Netherlands
image: /images/algoprudence/AA202402/AA202402_cover_EN.png
dynamic_form_engine:
  - title: React to this technical audit
    content: >-
      Your reaction will be sent to the auditing team. The team will review your
      response and, if it complies with Algorithm Audit's guidelines, the reaction
      will be placed in the Discussion & debate section above.
    id: case-reaction
    icon: fas fa-align-justify
    section:
      - questions:
          - title: |
              Name
            identifier: name
            required: true
            type: text
          - title: |
              Affiliated organization
            identifier: affiliated-organization
            type: text
          - title: |
              Reaction
            identifier: reaction
            required: true
            type: textarea
          - title: |
              Contact details
            identifier: contact-details
            required: true
            type: email
            placeholder: Mail address
    complete_form_options:
      type: submit
      button_text: Submit
      backend_link: "https://formspree.io/f/xyyrjyzr"
---

{{< tab_header width="4" tab1_id="description" tab1_title="Description of technical audit" tab2_id="actions" tab2_title="Actions following technical audit" tab3_id="discussion" tab3_title="Discussion & debate" default_tab="description" >}}

{{< tab_content_open icon="fas fa-balance-scale-left" title="Addendum Preventing prejudice" id="description" >}}

#### Technical audit identification code

TA:AA:2024:02

#### Summary

In its inspection of the legitimate use of student finance for students living away from home, the Education Executive Agency of The Netherlands (DUO) selected students for control with a non-European migration background significantly more often. This demonstrates an unconscious bias in DUO’s control process. Students with a non-European migration background were assigned a higher risk score by a risk profile and were more often manually selected for a home visit. This is evident from follow-up research that NGO Algorithm Audit carried out on behalf of DUO, which was sent by the minister to the House of Representatives on May 22. The results of the research strengthen the outcomes of previous research, on the basis of which the minister apologized on behalf of the cabinet on March 1, 2024 for indirect discrimination in the control process.

Press release can be found [here](/events/press_room/).

#### Source of case

Education Executive Agency of The Netherlands (DUO)

#### Github repository

[https://github.com/NGO-Algorithm-Audit/DUO-CUB](https://github.com/NGO-Algorithm-Audit/DUO-CUB)

#### Audit report

{{< embed_pdf url="/pdf-files/algoprudence/TA_AA202402/TA_AA202402_Addendum_Preventing_prejudice.pdf" >}}

{{< tab_content_close >}}

{{< tab_content_open icon="" title="" id="actions" >}}

{{< accordions_area_open id="actions" >}}

{{< accordion_item_open title="Additional research Statistics Netherlands and Algorithm Audit to College Grant Control process" background_color="#eef2f6" date="22-05-2024" tag1="migration backgroud" tag2="supervised bias test" tag3="Statistics Netherlands" image="/images/algoprudence/AA202401/Actions/TK.svg" >}}

#### Reaction Dutch Minister Education, Culture and Science

Official <a href='https://www.tweedekamer.nl/kamerstukken/brieven_regering/detail?id=2024Z08699&did=2024D20430' target="_blank">reactie</a>

{{< accordion_item_close >}}

{{< accordions_area_close >}}

{{< tab_content_close >}}

{{< tab_content_open id="discussion" >}}

{{< accordions_area_open id="discussion" >}}

{{< accordion_item_open title="Reaction Netherlands Human Rights Institute on age discrimination" id="cvrm" background_color="#eef2f6" date="12-04-2024" tag1="reactie" image="/images/algoprudence/AA202302/Discussion&debate/CvRM.svg" >}}

#### Age discrimination

Policies, such as those implemented by public sector agencies investigating (un)duly granted social welfare or employers seeking new employees, can intentionally or unintentionally lead to differentiation between certain groups of people. If an organization makes this distinction based on grounds that are legally protected, such as gender, origin, sexual orientation, or a disability or chronic illness, and there is no valid justifying reason for doing so, then the organization is engaging in prohibited discrimination. We refer to this as discrimination.

But what about age? Both the Rotterdam-algorithm and DUO-algorithm, as studied by Algorithm Audit, differentiated based on age. However, in these cases, age discrimination does not occur.

EU non-discrimination law also prohibits discrimination on the basis of age. For instance, arbitrarily rejecting a job applicant because someone is too old is not unlawful. However, legislation regarding age differentiation allows more room for a justifying argument than for the aforementioned personal characteristics. This is especially true when the algorithm is not applied in the context of labor.

Therefore, in the case of detecting unduly granted social welfare or misuse of college loan, it is not necessarily prohibited for an algorithm to consider someone’s age. However, there must be a clear connection between age and the aim pursued. Until it is shown that someone’s age increases the likelihood of misuse or fraud, age is ineligible as a selection criteria in algorithmic-driven selection procedures. For example, pertaining to disability allowances for youngsters (Wajong) a clear connection exists and an algorithm can lawfully differentiate upon age.

{{< accordion_item_close >}}

{{< accordions_area_close >}}

{{< tab_content_close >}}

{{< dynamic_form_engine index="0" >}}
