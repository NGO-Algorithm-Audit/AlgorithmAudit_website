---
title: Registration
subtitle: >
  Register for events of Algorithm Audit
image: /images/svg-illustrations/about.svg
dynamic_form_engine:
  - title: Registration
    id: form1
    icon: fas fa-user-tag
    section:
      - questions:
          - identifier: name
            id: name
            title: Name
            content: ''
            required: true
            type: text
          - identifier: function
            id: function
            title: Role and organisation
            content: ''
            required: true
            type: text
          - identifier: mail
            id: contact-details
            title: Email address
            content: ''
            required: true
            type: email
          - identifier: participation-type
            id: participation-type
            title: Participation type
            content: ''
            use_card_style: false
            options:
               - id: in-person
                 value: In-person
                 title: In-person
                 content: ''
            required: true
            type: radio
          - identifier: terms-and-conditions
            id: terms-and-conditions
            title: By checking this box, you agree that
            content: >
               - You consent for submitted data to be processed only in the context of the event. 
               
               - You confirm attendance and accept that Algorithm Audit will make arrangements for facilities and catering on your behalf, covered under the participation fee. The registration is definitive and not contingent on further confirmation.

               - You are required to pay the €300 participation fee. Payment instructions will be sent to you by email.
              
               - You will inform Algorithm Audit as soon as possible if you are unable to attend the event by sending an email to info@algorithmaudit.eu. Lifting of payment obligation or refund may not be granted depending on the circumstances of cancellation.
            use_card_style: false
            options:
               - id: agree
                 value: agree
                 title: Agree
                 content: ''
            required: true
            type: checkbox
    complete_form_options:
      type: submit
      button_text: Register
      backend_link: 'https://formspree.io/f/xeogpapg'
promo_bar:
  - content: |
      [Sign up](/events/registration/#form1) for the next edition of this Masterclass on November 3rd 2026.
quick_navigation:
  title: Overview
  links:
    - title: Masterclass GPAI
      url: "#event"
---

{{< accordions_area_open id="event" >}}

{{< accordion_item_open title="Masterclass AI Evaluation: from General Purpose to Specific Use Cases" id="event" background_color="#ffffff" tag1="3 November 2026" tag2="masterclass" tag3="in-person" image="/images/events/20261103_GPAI_event.png" >}}

> <span style="color:#005aa7;">How can you tell if an AI model is suitable for a use case? When do you know it works as intended? Leading systems are evaluated on general capabilities, not how they fit real-world problem areas, organizational values and stakeholder concerns.</span>

{{< promo_bar index="0" >}}

<br>

#### Description
Private and public sector organizations alike are eager to leverage the capabilities of AI. This requires **adapting general-purpose AI (GPAI) systems to work processes they are not necessarily designed or tested for**. For example, a Dutch judiciary authority's chatbot may refuse a resident's question about who maintains the 'privé gedeelte' of an apartment building, because a content filter designed in English [flags the words 'private parts' as sexual content](https://algorithmaudit.eu/knowledge-platform/knowledge-base/20260924_vangrails_blogpost/). Alternatively, a municipal chatbot may send Mehmet - a lifelong Rotterdamer asking where to renew his passport - to the immigration service, while Daan gets the right answer immediately, since the provider didn't test for harms specific to the Dutch context. 

To deploy AI responsibly, **practitioners need understanding of how existing evaluations translate to a context and where gaps arise**. GPAI is evaluated on common tests known as 'benchmarks'. But popular benchmarks are usually limited in their linguistic or cultural scope, cover limited types of user interaction, and vary wildly in their scientific quality and robustness. Appropriate evaluation often requires building tailored benchmarks from new datasets but also asks for practical validation using custom test cases to ensure systems function as intended once deployed.  

Between developing risk-monitoring benchmarks for the European AI Office, a validation framework for the Dutch Judiciary's Rechtspraak chatbot and safeguards for Dutch generative AI, Algorithm Audit has built expert knowledge in helping organizations navigate evaluation within their specific use case. **In this masterclass, we distill the most valuable insights from our work in the field of GPAI evaluation. The course covers:**

- GPAI under the AI Act and benchmarking for systems with systemic risk 
- Prominent industry benchmarks and adaptations to GPT-NL 
- Development of custom evaluation methods and validation approaches for your AI application 
- Current issues in the field from a scientific perspective 
- The design aspects that determine the quality of a benchmark 

**After attending, participants will be able to:** 
- Understand relevant obligations for GPAI systems under the AI Act 
- Think critically about the validity and reliability of benchmarks 
- Navigate popular evaluation repositories and documentation 
- Assess the suitability of existing benchmarks for their own work 
- Determine when custom evaluation or validation is needed and how it may look

#### Date
3 November 2026

#### Address
The Hague Conference Centre (New Babylon), Anna van Buerenplein 29, 2595 DA Den Haag

#### Programme
- 09:30-10:00 Doors open
- 10:00-11:15 Introduction General Purpose AI (GPAI) and testing GPAI applications
- 11:15-11:30 Break – coffee, tea and refreshments
- 11:30-12:30 State-of-the-art concepts and developments in GPAI benchmarking
- 12:30-13:30 Lunch – catered
- 13:30-14:45 Case study from Dutch public sector
- 14:45-15:15 Break – coffee, tea and refreshments
- 15:15-16:30 Hands-on exercises to build practical experience
- 16:30-17:30 Drinks – catered

#### Fee
- €300 in-person participation (including, lunch, drinks, refreshments)

#### Audience
Professionals from private and public sector who regularly work with GPAI applications, such as implementation of generative AI solutions in work processes, testing GPAI capabilities and/or working on AI policy.

{{< embed_pdf url="/pdf-files/events/activities/20261103_Masterclass_AI_Evaluation.pdf" width_mobile_pdf="12" width_desktop_pdf="6" >}}

{{< dynamic_form_engine index="0" >}}

{{< accordion_item_close >}}