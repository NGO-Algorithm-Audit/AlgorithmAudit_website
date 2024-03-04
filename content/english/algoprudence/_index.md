---
layout: repository
title: Algoprudence repository
subtitle: "Stakeholders learn from our\_techno-ethical jurisprudence, can help to improve it and can use it as to resolve ethical issues in a harmonized manner.\n\nWe are open to new cases. Please <span style=\"color:#005aa7\">[submit</span>](/algoprudence/submit-a-case/) a case for review.\n"
image: /images/svg-illustrations/case_repository.svg
team:
  title: Algoprudence team
  team_members:
    - image: /images/people/JFP.svg
      name: Jurriaan
      bio: |
        test
facet_groups:
  - value: year
    title: Year
    facets:
      - value: '2023'
        label: '2023'
      - value: '2022'
        label: '2022'
  - value: audit
    title: Type of audit
    facets:
      - value: technical
        label: Technical audit
      - value: normative
        label: Normative audit
  - value: type_of_algorithm
    title: Type of algorithm
    facets:
      - value: profiling
        label: Profiling
      - value: ml
        label: Machine Learning (ML)
      - value: bias_detection_tool
        label: Bias Detection Tool
  - value: ethical_issue
    title: Ethical issue
    facets:
      - value: proxy
        label: Proxy discrimination
      - value: fp_fn_balancing
        label: FP-FN balancing
  - value: owner
    title: Algorithm owned by
    facets:
      - value: public
        label: Public organisation
      - value: private
        label: Private organisation
      - value: self
        label: Algorithm Audit
title_content: Case repository
algoprudences:
  - title: Risk Profiling for Social Welfare Reexamination
    intro: >-
      The commission judges that algorithmic risk profiling can be used under
      strict conditions for sampling residents receiving social welfare for
      re-examination. The aim of re-examination is a leading factor in judging
      profiling criteria.
    image: /images/algoprudence/AA202302/AA202302A_cover_EN.png
    link: >-
      /algoprudence/cases/risk-profiling-for-social-welfare-reexamination-aa202302/
    facets:
      - value: aa202302
        label: 'AA:2023:02'
      - value: year_2023
        label: '2023'
      - value: owner_public
        label: public organisation
      - value: audit_normative
        label: normative audit
      - value: type_of_algorithm_profiling
        label: profiling
      - value: type_of_algorithm_ml
        label: ML
      - value: ethical_issue_proxy
        label: proxy discrimination
  - title: BERT-based disinformation classifier
    intro: >-
      The audit commission believes there is a low risk of (higher-dimensional)
      proxy discrimination by the BERT-based disinformation classifier and that
      the particular difference in treatment identified by the quantitative bias
      scan can be justified, if certain conditions apply.
    image: /images/algoprudence/AA202301/Cover.png
    link: /algoprudence/cases/bert-based-disinformation-classifier-aa202301
    facets:
      - value: aa_2023_01
        label: 'AA:2023:01'
      - value: year_2023
        label: '2023'
      - value: owner_self
        label: Algorithm Audit
      - value: type_of_algorithm_bias_detection_tool
        label: bias detection tool
      - value: audit_normative
        label: normative audit
      - value: type_of_algorithm_ml
        label: ML
      - value: ethical_issue_fp_fn_balancing
        label: FP-FN balancing
  - title: Type of SIM card as a predictor variable to detect payment fraud
    intro: >-
      The audit commission advises against using type of SIM card as an input
      variable in algorithmic models that predict payment defaults and block
      afterpay services for specific customers. As it is likely that type of SIM
      card acts as a proxy-variable for sensitive demographic categories, the
      model would run an intolerable risk of disproportionally excluding
      vulnerable demographic groups from the payment service.
    image: /images/algoprudence/AA202201/Cover.png
    link: >-
      /algoprudence/cases/type-of-sim-card-as-a-predictor-variable-to-detect-payment-fraud-aa202201
    facets:
      - value: AA-2022-01
        label: 'AA:2022:01'
      - value: year_2022
        label: '2022'
      - value: owner_private
        label: private organisation
      - value: type_of_algorithm_profiling
        label: profiling
      - value: audit_normative
        label: normative audit
      - value: ethical_issue_proxy
        label: proxy discrimination
      - value: e-commerce
        label: e-commerce
---

