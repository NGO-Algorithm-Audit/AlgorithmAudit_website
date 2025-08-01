---
title: Get in touch
subtitle: |
  Reach out to Algorithm Audit by filling in the below contact form.
image: /images/svg-illustrations/faq.svg
dynamic_form_engine:
  - title: Contact form
    id: contact-form
    icon: fas fa-align-justify
    section:
      - questions:
          - identifier: name
            title: Name
            required: true
            type: text
          - identifier: contact-details
            title: Contact details
            required: true
            type: email
            placeholder: Mail address
          - identifier: message
            title: Message
            required: true
            type: textarea
    complete_form_options:
      type: submit
      button_text: Send
      backend_link: "https://formspree.io/f/mrgrwnyo"
---

{{< dynamic_form_engine index="0" >}}
