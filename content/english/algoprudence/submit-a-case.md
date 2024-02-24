---
content: |
  Helloi Test
  {{< team >}}
title: Submit a case
subtitle: >
  Algorithm Audit conducts solicited and unsolicited audits. Fill in the below
  form to provide us with preliminary information required to review your
  algorithm.
image: /images/svg-illustrations/case_repository.svg
form:
  title: Submit a case
  icon: fa fa-list
  button_text: Send
  backend_link: 'https://formspree.io/f/xzbnrlan'
  questions:
    - label: Name of the algorithm
      id: name
      type: text
    - label: Short description of the algorithm (max. 100 words)
      id: description
      type: textarea
    - label: >-
        Technical dimension – Description of data collection, used statistical
        methodologies and used evaluation criteria 
      id: dimensions
      type: textarea
    - label: >-
        Legal framework – Applicable laws and open legal norms, e.g., GDPR, EU
        non-discrimination law 
      id: legal-framework
      type: textarea
    - label: >-
        Ethical issues – Description of the identified ethical issue given it's
        technical and legal framework
      id: ethical-issues
      type: textarea
    - label: Contact details
      id: contact-details
      type: email
      placeholder: Email address
team:
  title: Algoprudence team
  button_text: Learn more about our different teams
  button_link: /about
  team_members:
    - image: /images/people/VD.png
      name: Vardâyani Djwalapersad
      bio: |
        Project manager Algoprudence
    - image: /images/people/JFP2.jpg
      name: Jurriaan Parie
      bio: |
        Director and board member
    - image: /images/people/AV.jpeg
      name: Ariën Voogt
      bio: |
        Board member
    - image: /images/people/SM.jpeg
      name: Samaa Mohammad-Ulenberg
      bio: |
        Board member
Recent_audits:
  title: Recent audits
  button_text: Check our repository
  button_link: /algoprudence
  feature_item:
    - name: 'Risk Profiling Social Welfare Re-examination '
      image: /images/algoprudence/AA202302/AA202302A_cover_EN.png
      link: >-
        /algoprudence/cases/risk-profiling-for-social-welfare-reexamination-aa202302/
      content: >
        Normative advice commission provides rationales why these variables are
        eligible or not as a profiling selection criterion for a xgboost
        algorithm
    - name: Bias Prevented
      image: /images/reports/front_AA202401TR.png
      link: /algoprudence
      content: >
        Assessment of risk distributions through Z-tests and bias test
        for        various steps in algorithmic-driven decision-making process
text_field:
  title: What are the next steps after case submission?
  content: >
    Your submission is reviewed by the Algoprudence Team. The team assesses
    whether de case aligns with the mission of Algorithm Audit and the
    availability of resources for further investigation. Notification regarding
    any follow-up steps can be expected within two weeks.
---

{{< form >}}

{{< text_field >}}

{{< team >}}

{{< recent_audits >}}
