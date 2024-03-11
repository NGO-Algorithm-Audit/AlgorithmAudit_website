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
      - value: '2024'
        label: '2024'
      - value: '2023'
        label: '2023'
      - value: '2022'
        label: '2022'
  - value: type_of_audit
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
      - value: rule_based
        label: Rule-based
      - value: ml
        label: Machine learning (ML)
      - value: bias_detection_tool
        label: Bias detection tool
      - value: high_risk_AI
        label: High-risk AI system
  - value: ethical_issue
    title: Ethical issue
    facets:
      - value: proxy
        label: Proxy discrimination
      - value: fp_fn_balancing
        label: FP-FN balancing
  - value: standard
    title: Harmonized standard
    facets:
      - value: risk_management
        label: Risk management
      - value: governance_data_quality
        label: Governance & data quality
      - value: record_keeping
        label: Record keeping
      - value: transparency_provisions
        label: Transparency provisions
      - value: human_oversight
        label: Human oversight
      - value: accuracy_specifications
        label: Accuracy specifications
      - value: robustness_specifications
        label: Robustness specifications
      - value: quality_management_system
        label: Quality management system
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
  - title: Bias prevented
    intro: >-
      Disparities have been identified in the control process of a Dutch public
      sector organisation regarding misuse of college allowances. In the period
      2012-2022, students who lived close to their parent(s) were significantly
      more often selected for a control procedure than others. The algorithm
      used to support the selection performed as expected.
    image: /images/algoprudence/AA202401/Cover.png
    link: /algoprudence/cases/aa202401_bias-prevented/
    facets:
      - value: algoprudence
        label: 'AA:2024:01'
      - value: year_2024
        label: '2024'
      - value: type_of_audit_technical
        label: technical audit
      - value: type_of_algorithm_rule_based
        label: rule-based
      - value: type_of_algorithm_profiling
        label: profiling
      - value: ethical_issue_proxy
        label: proxy discrimination
      - value: owner_public
        label: public organisation
      - value: standard_risk_management
        label: risk management
      - value: standard_governance_data_quality
        label: governance & data quality
      - value: standard_transparency_provisions
        label: transparency provisions
      - value: standard_human_oversight
        label: human oversight
      - value: standard_quality_management_system
        label: quality management system
  - title: Risk Profiling for Social Welfare Reexamination
    intro: >-
      The commission judges that algorithmic risk profiling can be used under
      strict conditions for sampling residents receiving social welfare for
      re-examination. The aim of re-examination is a leading factor in judging
      profiling criteria.
    image: /images/algoprudence/AA202302/AA202302A_cover_EN.png
    link: >-
      /algoprudence/cases/aa202302_risk-profiling-for-social-welfare-reexamination/
    facets:
      - value: aa202302
        label: 'AA:2023:02'
      - value: year_2023
        label: '2023'
      - value: type_of_audit_normative
        label: normative audit
      - value: type_of_algorithm_profiling
        label: profiling
      - value: type_of_algorithm_ml
        label: ML
      - value: type_of_algorithm_high_risk_AI
        label: high-risk AI
      - value: ethical_issue_proxy
        label: proxy discrimination
      - value: owner_public
        label: public organisation
      - value: standard_risk_management
        label: risk management
      - value: standard_record_keeping
        label: record keeping
      - value: standard_transparency_provisions
        label: transparency provisions
      - value: standard_human_oversight
        label: human oversight
      - value: standard_accuracy_specification
        label: accuracy specification
      - value: standard_robustness_specifications
        label: robustness specifications
      - value: standard_quality_management_system
        label: quality management system
  - title: BERT-based disinformation classifier
    intro: >-
      The audit commission believes there is a low risk of (higher-dimensional)
      proxy discrimination by the BERT-based disinformation classifier and that
      the particular difference in treatment identified by the quantitative bias
      scan can be justified, if certain conditions apply.
    image: /images/algoprudence/AA202301/Cover.png
    link: /algoprudence/cases/aa202301_bert-based-disinformation-classifier
    facets:
      - value: aa_2023_01
        label: 'AA:2023:01'
      - value: year_2023
        label: '2023'
      - value: type_of_audit_normative
        label: normative audit
      - value: type_of_algorithm_bias_detection_tool
        label: bias detection tool
      - value: type_of_algorithm_ml
        label: ML
      - value: type_of_algorithm_high_risk_AI
        label: high-risk AI
      - value: ethical_issue_fp_fn_balancing
        label: FP-FN balancing
      - value: owner_self
        label: Algorithm Audit
      - value: desinformation
        label: desinformation
      - value: standard_risk_management
        label: risk management
      - value: standard_accuracy_specifications
        label: accuracy specifications
      - value: standard_quality_management_system
        label: quality management system
  - title: Type of SIM card as a predictor variable to detect payment fraud
    intro: >-
      The audit commission advises against using type of SIM card as an input
      variable in algorithmic models that predict payment defaults and block
      afterpay services for specific customers. As it is likely that type of SIM
      card acts as a proxy-variable for sensitive demographic categories, the
      model would run an intolerable risk of disproportionally excluding
      vulnerable demographic groups from the payment service.
    image: /images/algoprudence/AA202201/Cover.png
    link: /algoprudence/cases/aa202201_type-of-sim
    facets:
      - value: AA-2022-01
        label: 'AA:2022:01'
      - value: year_2022
        label: '2022'
      - value: type_of_audit_normative
        label: normative audit
      - value: type_of_algorithm_profiling
        label: profiling
      - value: ethical_issue_proxy
        label: proxy discrimination
      - value: owner_private
        label: private organisation
      - value: e-commerce
        label: e-commerce
      - value: standard_risk_management
        label: risk management
      - value: standard_governance_data_quality
        label: governance & data quality
      - value: standard_transparency_provisions
        label: transparency provisions
---

