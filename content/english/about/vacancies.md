---
title: Vacancies
subtitle: |
  Find here an overview of current job openings at Algorithm Audit
image: /images/svg-illustrations/about.svg
form1:
  title: Application form
  button_text: Submit
  backend_link: 'https://formspree.io/f/mdoqdpnn'
  id: form
  questions:
    - label: |
        Name
      id: name
      required: true
      type: text
    - label: |
        Contact details
      id: contact-details
      required: true
      type: email
      placeholder: Mail address
    - label: |
        Working group preference
      id: wg-preference
      values:
        - label: WG2
          value: WG2
          id: wg2
        - label: WG3
          value: WG3
          id: wg3
        - label: WG4
          value: WG4
          id: wg4
      required: false
      type: checkbox
    - label: |
        Motivation letter (max. 500 words)
      id: motivation-letter
      file_upload_text: Choose file
      required: true
      file_type: '.docx, .pdf'
      type: file
    - label: |
        CV
      id: cv
      file_upload_text: Choose file
      required: true
      file_type: '.docx, .pdf'
      type: file
    - label: >
        Terms and conditions <br> <span style="font-size:12px;
        color=#777;">Submitted data will only be processed for the purpose
        described above, kept for the minimum necessary duration, and is
        securely stored in a protected environment</span>
      id: terms-conditions
      values:
        - label: Agree
          value: agree
          id: agree
      required: true
      type: checkbox
---

