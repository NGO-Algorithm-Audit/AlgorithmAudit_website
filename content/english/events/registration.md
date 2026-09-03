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

{{< accordion_item_open title="Masterclass 'Testing General Purpose AI (GPAI) applications'" id="event" background_color="#ffffff" tag1="3 November 2026" tag2="masterclass" tag3="in-person" image="/images/events/20261103_GPAI_event.png" >}}

{{< promo_bar index="0" >}}

<br>

#### Description
As GPAI models continue to improve, systems are increasingly touted as matching or exceeding expert performance in “problem solving”, “scientific reasoning” or  “real-world software engineering.” These claims are based on common tests for different capabilities, known as “benchmarks”.

Yet, there is often misconception of what benchmarks actually measure, what conclusions about a system we can actually make and how to evaluate what actually matters for a use case. Just as other technology-driven industries, like healthcare and aviation, AI benchmarking needs reliable standards. With best practices in their infancy, it can be daunting for professionals to navigate GPAI evaluation. 

In this masterclass, we distill and make accessible the most valuable insights from the field of GPAI benchmarking. The course covers:
-	GPAI under the AI Act and benchmarking for systems with systemic risk
-	Prominent industry benchmarks and adaptations to GPT-NL
-	Insights from Algorithm Audit’s own benchmarking work
-	Current issues in the field from a scientific perspective
-	The design aspects that determine the quality of a benchmark

After attending, participants will be able to:
-	Understand relevant obligations for GPAI systems under the AI Act
-	Grasp how benchmarks tend to work “under the hood”
-	Navigate common evaluation repositories and documentation
-	Assess the suitability of existing benchmarks for their own work
-	Reason when a custom approach is needed and how it may look

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

{{< embed_pdf url="/pdf-files/events/activities/20261103_Masterclass_Benchmarking.pdf" width_mobile_pdf="12" width_desktop_pdf="6" >}}

{{< dynamic_form_engine index="0" >}}

{{< accordion_item_close >}}