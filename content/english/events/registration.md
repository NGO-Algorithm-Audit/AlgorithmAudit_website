---
title: Registration
subtitle: >
  Register for events of Algorithm Audit
image: /images/svg-illustrations/about.svg
dynamic_form_engine:
  - title: Register
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
            title: Position and organisation
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
              - id: online
                value: Online
                title: Online
                content: ''
            required: true
            type: radio
          - identifier: terms-and-conditions
            id: terms-and-conditions
            title: By checking this box you agree with
            content: >
              - Submitted data will only be processed in the context of the event. 

              - Your registration is complete once the participation fee (€300 for in-person participation or €200 for online participation) has been paid. Payment instructions will be send to you by email. 
              
              - Inform Algorithm Audit as soon as possible if you are unable to attend the event by sending an email to info@algorithmaudit.eu.
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
# promo_bar:
#   - content: |
#       A few spots are still available for the event. Registering does not automatically confirm participation. You will be informed by Tuesday February 24 at the latest whether you can attend the event.
quick_navigation:
  title: Overview
  links:
    - title: Masterclass GPAI
      url: "#event"
---

{{< accordions_area_open id="event" >}}

{{< accordion_item_open title="Masterclass 'Testing General Purpose AI (GPAI) applications'" id="event" background_color="#ffffff" tag1="25-06-2026" tag2="masterclass" tag3="hybrid" image="/images/events/20260625_GPAI_event.png" >}}

{{< promo_bar index="0" >}}

<br>

#### Description
The capabilities of GPAI models and systems continue to improve. GPAI systems now match or exceed expert-level performance on capabilities such as “reasoning”, “problem solving” and “graduate-level skills”. Yet it is often unclear what these concepts actually capture. In this masterclass, attendees gain state-of-the-art insights about the latest developments in the rapidly advancing field of GPAI benchmarking.

#### Date
Thursday June 25th, 10:00-17:00 CET

#### Address
Hybrid or The Hague Conference Centre (New Babylon), Anna van Buerenplein 29, 2595 DA Den Haag

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


#### Audience
Professionals from private and public sector who regularly work with GPAI application, such as implementation of generative AI solutions in work processes, testing GPAI capabilities and/or working on AI policy.

{{< dynamic_form_engine index="0" >}}

{{< accordion_item_close >}}