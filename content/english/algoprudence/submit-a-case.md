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
  button_text: Send
  backend_link: 'https://formspree.io/f/xzbnrlan'
  id: submit-a-case
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
  title: Team Algoprudence
  icon: fas fa-user-friends
  button_text: Other teams
  button_link: /about/teams/
  team_members:
    - image: /images/people/VDjwalapersad.png
      name: Vardâyani Djwalapersad
      bio: |
        Project manager Algoprudence
    - image: /images/people/JParie.jpg
      name: Jurriaan Parie
      bio: |
        Director and board member
    - image: /images/people/AVoogt.jpeg
      name: Ariën Voogt
      bio: |
        Board member
    - image: /images/people/SMohammad.jpeg
      name: Samaa Mohammad-Ulenberg
      bio: |
        Board member
reports_preview:
  title: Recent audits
  icon: fas fa-file
  button_text: Case repository
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
      image: /images/algoprudence/AA202401/Cover.png
      link: /nl/algoprudence/cases/vooringenomenheid-voorkomen/
      content: >
        Qualitative and quantitative audit of algorithmic-driven college
        allowances control process. Assessment of risk distributions through
        Z-tests and bias test in the control process
text_field1:
  title: What are the next steps after case submission?
  icon: fas fa-forward
  content: ''
---

{{< form >}}

{{< container_open icon="fas fa-forward" title="What are the next steps after case submission?" id="next-steps" >}}

Your submission is reviewed by Team Algoprudence. The team assesses whether de case aligns with the mission of Algorithm Audit and the availability of resources for further investigation. Notification regarding any follow-up steps can be expected within two weeks.

{{< container_close >}}

{{< team >}}

{{< reports_preview >}}
