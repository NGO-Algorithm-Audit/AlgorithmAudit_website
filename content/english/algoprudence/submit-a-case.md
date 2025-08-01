---
title: Submit a case
subtitle: >
  Algorithm Audit conducts solicited and unsolicited audits. Fill in the below
  form to provide us with preliminary information required to review your
  algorithm. Or submit a carefully documented normative judgement for inlcusion
  in our case repository.
image: /images/svg-illustrations/case_repository.svg
dynamic_form_engine:
  - title: Case information
    id: submit-a-case
    icon: fas fa-align-justify
    section:
      - questions:
          - title: Name algorithm
            identifier: name
            required: true
            type: text
          - title: Short description – Define the specific task of the algorithm and its the context in which it operates (max. 200 words)
            identifier: description
            required: true
            type: textarea
          - title: Technical dimension – Description of data collection, used statistical methodologies and used evaluation criteria
            identifier: technical-dimension
            type: textarea
          - title: Legal framework – Applicable laws and open legal norms, e.g., GDPR, EU non-discrimination law
            identifier: legal-framework
            required: false
            type: textarea
          - title: Ethical issues – Description of the identified ethical issue given it’s technical and legal framework
            identifier: ethical-issue
            required: true
            type: textarea
          - title: Contact details
            identifier: contact-details
            required: false
            type: email
            placeholder: Mail address
          - title: Terms and conditions <br> <span style="font-size:12px; color=#777;">Submitted data will only be processed for the purpose described above, kept for the minimum necessary duration, and is securely stored in a protected environment</span>
            identifier: terms-conditions
            options:
              - title: Agree
                value: agree
                id: agree
            required: true
            type: checkbox
    complete_form_options:
      type: submit
      button_text: Submit
      backend_link: "https://formspree.io/f/xzbnrlan"
  - title: Case information
    content: ""
    id: case-for-repository
    icon: fas fa-align-justify
    section:
      - questions:
          - title: Name organisation
            identifier: name
            required: true
            type: text
          - title: >-
              Normative decision taken – Define the specific task of the algorithm,
              its socio-technical context, statistical methodology, the relevant legal
              framework and what decision is taken to deal with the identified ethical
              issue
            identifier: description
            required: true
            type: textarea
          - title: Contact details
            identifier: contact-details
            required: true
            type: email
            placeholder: Mail address
          - title: Relevant documents
            identifier: file-upload
            file_upload_text: Choose file
            file_type: .pdf
            type: file
            placeholder: ""
          - title: >
              Terms and conditions <br> <span style="font-size:12px;
              color=#777;">Submitted data will only be processed for the purpose
              described above, kept for the minimum necessary duration, and is
              securely stored in a protected environment</span>
            identifier: terms-conditions
            options:
              - title: Agree
                value: agree
                id: agree
            required: true
            type: checkbox
    complete_form_options:
      type: submit
      button_text: "Submit "
      backend_link: "https://formspree.io/f/xleqlakw"
reports_preview:
  title: Recent audits
  icon: fas fa-file
  button_text: Case repository
  button_link: /algoprudence
  feature_item:
    - name: "Risk Profiling Social Welfare Re-examination "
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
quick_navigation:
  title: Content overview
  links:
    - title: Submit a case
      url: "#case-for-review_tab_btn"
    - title: Next steps
      url: "#next-steps"
    - title: Recent cases
      url: "#case-repository"
---

{{< tab_header width="6" tab1_id="case-for-review" default_tab="case-for-review" tab1_title="Submit a case for normative review" tab2_id="case-repository" tab2_title="Add a case to algoprudence repository" >}}

{{< tab_content_open icon="fa-question" title="Submit a case for review by a normative advice commission" id="case-for-review" >}}

Cases can be submitted anonymously. Read more about [how we work](/algoprudence/how-we-work/). You can find more information [below](#next-steps) about next steps after case submission.

{{< dynamic_form_engine index="0" >}}

{{< tab_content_close >}}

{{< tab_content_open icon="fa-layer-group" title="Add a case to algoprudence repository" id="case-repository" >}}

Would you like to contribute to our algoprudence repository? Please complete the below form. Please familiarize yourself with the cases already present in the repository. You can find more information [below](#next-steps) about next steps after case submission.

{{< dynamic_form_engine index="1" >}}

{{< tab_content_close >}}

{{< container_open icon="fas fa-forward" title="What are the next steps after case submission?" id="next-steps" >}}

Your submission is reviewed by Team Algoprudence. The team assesses whether de case aligns with the mission of Algorithm Audit and the availability of resources for further investigation. Notification regarding any follow-up steps can be expected within two weeks.

{{< button button_text="Our audit methodology" button_link="/algoprudence/how-we-work/" >}}

{{< container_close >}}

{{< reports_preview id="case-repository">}}
