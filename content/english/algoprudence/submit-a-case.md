---
content: |
  Helloi Test
  {{< team >}}
title: Submit a case
subtitle: >
  Algorithm Audit conducts solicited and unsolicited audits. Fill in the below
  form to provide us with preliminary information required to review your
  algorithm. Or submit a carefully documented normative judgement for inlcusion
  in our case repository.
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
    - label: >-
        Short description – Define the specific task of the algorithm and its
        the context in which it operates (max. 200 words)
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
        Director-board member
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
        /algoprudence/cases/aa202302_risk-profiling-for-social-welfare-reexamination/
      content: >
        Normative advice commission provides rationales why these variables are
        eligible or not as a profiling selection criterion for a xgboost
        algorithm
    - name: Technical audit indirect discrimination
      image: /images/algoprudence/AA202401/Cover.png
      link: /algoprudence/cases/aa202401_bias-prevented/
      content: >
        Qualitative and quantitative audit of algorithmic-driven college
        allowances control process. Assessment of risk distributions through
        Z-tests and bias test in the control process
text_field1:
  title: What are the next steps after case submission?
  icon: fas fa-forward
  content: ''
form1:
  title: Case information
  content: ''
  button_text: Submit
  backend_link: 'https://formspree.io/f/xzbnrlan'
  id: submit-a-case
  questions:
    - label: Name algorithm
      id: name
      required: true
      type: text
    - label: >-
        Short description – Define the specific task of the algorithm and its
        the context in which it operates (max. 200 words)
      id: description
      required: true
      type: textarea
    - label: >-
        Technical dimension – Description of data collection, used statistical
        methodologies and used evaluation criteria
      id: technical-dimension
      type: textarea
    - label: >-
        Legal framework – Applicable laws and open legal norms, e.g., GDPR, EU
        non-discrimination law
      id: legal-framework
      required: false
      type: textarea
    - label: >-
        Ethical issues – Description of the identified ethical issue given it’s
        technical and legal framework
      id: ethical-issue
      required: true
      type: textarea
    - label: Contact details
      id: contact-details
      required: false
      type: email
      placeholder: Mail address
form2:
  title: Case information
  content: ''
  button_text: 'Submit '
  backend_link: 'https://formspree.io/f/xleqlakw'
  id: case-for-repository
  questions:
    - label: Name organisation
      id: name
      required: true
      type: text
    - label: >-
        Normative decision taken – Define the specific task of the algorithm,
        its socio-technical context, statistical methodology, the relevant legal
        framework and what decision is taken to deal with the identified ethical
        issue
      id: description
      required: true
      type: textarea
    - label: Contact details
      id: contact-details
      required: true
      type: email
      placeholder: Mail address
    - label: Relevant documents
      id: file-upload
      file_upload_text: Choose file
      file_type: .pdf
      type: file
      placeholder: ''
---

{{< tab_header width="6" tab1_id="case-for-review" default_tab="case-for-review" tab1_title="Submit a case for normative review" tab2_id="case-repository" tab2_title="Add a case to algoprudence repository" >}}

{{< tab_content_open icon="fa-question" title="Submit a case for review by a normative advice commission" id="case-for-review" >}}

Cases can be submitted anonymously. Read more about [how we work](/algoprudence/how-we-work/). You can find more information [below](#next-steps) about next steps after case submission.

{{< form1 >}}

{{< tab_content_close >}}

{{< tab_content_open icon="fa-layer-group" title="Add a case to algoprudence repository" id="case-repository" >}}

Would you like to contribute to our algoprudence repository? Please complete the below form. Please familiarize yourself with the cases already present in the repository. You can find more information [below](#next-steps) about next steps after case submission.

{{< form2 >}}

{{< tab_content_close >}}

{{< container_open icon="fas fa-forward" title="What are the next steps after case submission?" id="next-steps" >}}

Your submission is reviewed by Team Algoprudence. The team assesses whether de case aligns with the mission of Algorithm Audit and the availability of resources for further investigation. Notification regarding any follow-up steps can be expected within two weeks.

{{< button button_text="Our audit methodology" button_link="/algoprudence/how-we-work/" >}}

{{< container_close >}}

{{< team >}}

{{< reports_preview >}}
