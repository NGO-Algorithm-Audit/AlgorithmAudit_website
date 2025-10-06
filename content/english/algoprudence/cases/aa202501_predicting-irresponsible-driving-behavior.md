---
layout: case
title: Predicting irresponsible driving
subtitle: |
  Problem statement (ALGO:AA:2025:01:P) and advice document (ALGO:AA:2025:01:A)
image: /images/algoprudence/AA202501/Cover_EN.png
dynamic_form_engine:
  - title: React to this normative judgement
    content: >-
      Your reaction will be sent to the team maintaining algoprudence. A team will
      review your response and, if it complies with the guidelines, it will be
      placed in the Discussion & debate section above.
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
            type: text
            placeholder: Mail address
    complete_form_options:
      type: submit
      button_text: Submit
      backend_link: "https://formspree.io/f/xyyrjyzr"
---

{{< tab_header width="4" tab1_id="description" tab1_title="Description of algoprudence" tab2_id="actions" tab2_title="Actions following algoprudence" tab3_id="discussion" tab3_title="Discussion & debate" default_tab="description" >}}

{{< tab_content_open icon="fa-car" title="Predicting irresponsible driving" id="description" >}}

#### Algoprudence identification code

ALGO:AA:2025:01

#### Key takeaways normative advice commission

- <span style="color:#005aa7; font-weight:600;">Model validity is fundamental</span>\
  The algorithm must be altered to specifically predict driving behavior that causes damage, not general platform misuse. As for any risk prediction model, getting alignment between training data and intended purpose is a critical prerequisite.
- <span style="color:#005aa7; font-weight:600;">Balance monitoring with user autonomy</span>\
  Monitoring irresponsible driving to reduce damage costs is a legitimate business interest but must not become excessive surveillance or veer into paternalistic advice about general driving habits.
- <span style="color:#005aa7; font-weight:600;">Meaningful transparency required</span>\
  Users need specific explanations about what driving behavior triggered the warning and clear guidance for improvement, not generic warnings or confusing technical jargon that means nothing to the average driver.
- <span style="color:#005aa7; font-weight:600;">Careful variable selection</span>\
  Speeding has obvious safety implications, but acceleration and similar variables are trickier. They depend on context and may just reflect personal driving preferences. Before including them, there must be solid evidence linking them to actual damage risk, not just different driving styles or environments.
- <span style="color:#005aa7; font-weight:600;">Human oversight essential</span>\
Human analysts currently override 50-60% of the model’s recommendations, demonstrating real discretion rather than rubber-stamping. This meaningful human oversight must continue.

#### Summary advice

The commission judges that algorithmic risk prediction for identifying irresponsible driving behavior should
take place under strict conditions and should be weighed against alternative methods of reducing damage.
The validity of the prediction model is a critical prerequisite, and hence the current mismatch between the
stated objective (predicting irresponsible driving) and the target variable in training (user bans for a wide variety
of misuse) must first be resolved. The commission emphasizes that while monitoring to reduce damage cost
may be a legitimate business interest, it should not become excessive surveillance or be used for paternalistic
feedback on users’ general driving style. Users should receive specific, meaningful explanations about which
driving behaviors triggered warnings, not generic notifications or lists of technical variables that users cannot
comprehend. Variable selection must be carefully justified, with speeding as the most legitimate variable,
while contextual behaviors like fast acceleration or hard braking require attention to driving context and solid
evidence in what sense they are related to damage risk. The commission recommends maintaining substantial
human review of algorithmic recommendations, to mitigate the risk that warnings are unduly sent and to
facilitate appeal and redress by users.

#### Source of case

The case originates from an (anonymized) car sharing platform, which has cooperated with Algorithm Audit to provide details about the case. Both the commission and Algorithm Audit have conducted this study independently from the car sharing platform. Neither the investigation nor the advice have been commissioned or funded by the platform.

#### Presentation

This case study was published during UNESCO's Expert roundtable II: Capacity building for AI supervisory authorities in Paris on September 30, 2025. 

{{< image id="presentation-unesco" image1="/images/algoprudence/AA202501/Photo1.jpg" alt1="Presentation advice report during UNESCO Expert roundtable II: capacity building for AI supervisory authorities" caption1="Presentation advice report during UNESCO Expert roundtable II: capacity building for AI supervisory authorities" width_desktop="6" width_mobile="12" image2="/images/algoprudence/AA202501/Photo2.jpeg" alt2="Presentation advice report during UNESCO Expert roundtable II: capacity building for AI supervisory authorities" caption2="Presentation advice report during UNESCO Expert roundtable II: capacity building for AI supervisory authorities" >}}

#### Problem statement and advice document

{{< embed_pdf url="/pdf-files/algoprudence/ALGO_AA202501/EN/Problem statement Predicting irresponsible driving.pdf" url2="/pdf-files/algoprudence/ALGO_AA202501/EN/Advice Predicting irresponsible driving.pdf" >}}

#### Normative advice commission

- Cynthia Liem, Associate Professor at the Multimedia Computing Group, TU Delft
- Hilde Weerts, Assistant Professor Fair and Explainable Machine Learning, TU Eindhoven
- Joris Krijger, AI & Ethics Officer, De Volksbank
- Maaike Harbers, Professor of Applied Sciences (lector) Artificial Intelligence & Society, Rotterdam University of Applied Sciences
- Monique Steijns, Founder The People’s AI agency
- Anne Rijlaarsdam, user car sharing platform

#### Focus group

Algorithm Audit has brought together a focus group to gather user perspectives on data processing, algorithmic predictions and communication by shared mobility platforms. The insights from this focus group are shared in the document below. On the basis of the problem statement (ALGO:AA:2025:01:P) and the focus group results, the normative advice commission issued advice on the identified issues in the advice document (ALGO:AA:2025:01:A).

{{< embed_pdf url="/pdf-files/algoprudence/ALGO_AA202501/EN/Focus group Predicting irresponsible driving behavior.pdf" >}}


{{< tab_content_close >}}

{{< tab_content_open icon="" title="" id="actions" >}}

{{< accordions_area_open id="actions" >}}

{{< accordions_area_close >}}

{{< tab_content_close >}}

{{< tab_content_open id="discussion" >}}

{{< accordions_area_open id="discussion" >}}

{{< accordions_area_close >}}

{{< tab_content_close >}}

{{< dynamic_form_engine index="0" >}}
