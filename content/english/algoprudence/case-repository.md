---
layout: repository
title: Algoprudence repository
subtitle: "Stakeholders learn from our case law for algorithms (_algoprudence_), can help to improve it and can use it to resolve ethical issues in a harmonized manner when deploying algorithmic systems"
image: /images/svg-illustrations/case_repository.svg
facet_groups:
  - value: year
    title: Year
    facets:
      - value: "2025"
        label: "2025"
      - value: "2024"
        label: "2024"
      - value: "2023"
        label: "2023"
      - value: "2022"
        label: "2022"
  - value: type_of_audit
    title: Type of audit
    facets:
      - value: technical
        label: Technical audit
      - value: normative
        label: Normative review
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
  - title: Predicting irresponsible driving
    intro: >-
      Case study how irresponsible driving can be identified and predicted in the database of a car sharing platform. An independent commission issues advice on among others model validity, balancing false positives and false negatives and meaningful transparency.
    image: /images/algoprudence/AA202501/AA202501P_EN.png
    link: /algoprudence/cases/aa202501_predicting-irresponsible-driving-behavior/
    facets:
      - value: AA202501
        label: "TA:AA:2025:01"
      - value: year_2025
        label: "2025"
        hide: true
      - value: type_of_audit_normative
        label: normative review
      - value: type_of_algorithm_ml
        label: machine learning
      - value: type_of_algorithm_profiling
        label: profiling
      - value: ethical_issue_fp_fn_balancing
        label: FP-FN balancing
      - value: owner_private
        label: car sharing platform
      - value: standard_risk_management
        label: risk management
        hide: true
      - value: standard_governance_data_quality
        label: governance & data quality
        hide: true
      - value: standard_transparency_provisions
        label: transparancy provisions
        hide: true
      - value: standard_human_oversight
        label: human oversight
        hide: true
      - value: standard_quality_management_system
        label: quality management
        hide: true
      - value: standard_accuracy_specifications
        label: Accuracy specifications
        hide: true
      - value: standard_robustness_specifications
        label: Robustness specifications
        hide: true
      - value: standard_quality_management_system
        label: Quality management system
        hide: true
  - title: Addendum Preventing prejudice
    intro: >-
      Further research into CUB process of Education Executive Agency of The
      Netherlands (DUO)  by analysing aggregation statistics on the country of
      birth and country of origin of 300.000+  students in the period 2014-2022
      provided by the Dutch national office of statistics
    image: /images/algoprudence/AA202402/AA202402_cover.png
    link: /algoprudence/cases/aa202402_preventing-prejudice_addendum/
    facets:
      - value: AA202402
        label: "TA:AA:2024:02"
      - value: year_2024
        label: "2024"
        hide: true
      - value: type_of_audit_technical
        label: technical audit
      - value: type_of_algorithm_rule_based
        label: rule-based
      - value: type_of_algorithm_profiling
        label: profiling
      - value: ethical_issue_proxy
        label: proxy discrimination
      - value: owner_public
        label: DUO
      - value: standard_risk_management
        label: risk management
        hide: true
      - value: standard_governance_data_quality
        label: governance & data quality
        hide: true
      - value: standard_transparency_provisions
        label: transparancy provisions
        hide: true
      - value: standard_human_oversight
        label: human oversight
        hide: true
      - value: standard_quality_management_system
        label: quality management
        hide: true
  - title: Preventing prejudice
    intro: >-
      Disparities have been identified in the control process of a Dutch public
      sector organisation regarding misuse of college allowances. In the period
      2012-2022, students who lived close to their parent(s) were significantly
      more often selected for a control procedure than others. The algorithm
      used to support the selection performed as expected.
    image: /images/algoprudence/AA202401/Cover_EN.png
    link: /algoprudence/cases/aa202401_preventing-prejudice/
    facets:
      - value: algoprudence
        label: "TA:AA:2024:01"
      - value: year_2024
        label: "2024"
        hide: true
      - value: type_of_audit_technical
        label: technical audit
      - value: type_of_algorithm_rule_based
        label: rule-based
      - value: type_of_algorithm_profiling
        label: profiling
      - value: ethical_issue_proxy
        label: proxy discrimination
      - value: owner_public
        label: DUO
      - value: standard_risk_management
        label: risk management
        hide: true
      - value: standard_governance_data_quality
        label: governance & data quality
        hide: true
      - value: standard_transparency_provisions
        label: transparency provisions
        hide: true
      - value: standard_human_oversight
        label: human oversight
        hide: true
      - value: standard_quality_management_system
        label: quality management system
        hide: true
  - title: Risk Profiling for Social Welfare Reexamination
    intro: >-
      Case study to ML-driven risk predictions on unduly granted social welfare. An independent commission judges that algorithmic risk profiling can be used under
      strict conditions for sampling residents for
      re-examination. The aim of re-examination is a leading factor in judging
      profiling criteria.
    image: /images/algoprudence/AA202302/AA202302A_cover_EN.png
    link: >-
      /algoprudence/cases/aa202302_risk-profiling-for-social-welfare-reexamination/
    facets:
      - value: aa202302
        label: "ALGO:AA:2023:02"
      - value: year_2023
        label: "2023"
        hide: true
      - value: type_of_audit_normative
        label: normative review
      - value: type_of_algorithm_profiling
        label: profiling
      - value: type_of_algorithm_ml
        label: ML
      - value: type_of_algorithm_high_risk_AI
        label: high-risk AI system
      - value: ethical_issue_proxy
        label: proxy discrimination
      - value: owner_public
        label: Municipality of Rotterdam
      - value: standard_risk_management
        label: risk management
        hide: true
      - value: standard_record_keeping
        label: record keeping
        hide: true
      - value: standard_transparency_provisions
        label: transparency provisions
        hide: true
      - value: standard_human_oversight
        label: human oversight
        hide: true
      - value: standard_accuracy_specification
        label: accuracy specification
        hide: true
      - value: standard_robustness_specifications
        label: robustness specifications
        hide: true
      - value: standard_quality_management_system
        label: quality management system
        hide: true
  - title: BERT-based disinformation classifier
    intro: >-
      Case study to algorithmic detection on fake news on Twitter. An independent advice commission believes there is a low risk of proxy discrimination by the BERT-based disinformation classifier and that the particular difference in treatment identified by the quantitative bias scan can be justified, if certain conditions apply.
    image: /images/algoprudence/AA202301/Cover.png
    link: /algoprudence/cases/aa202301_bert-based-disinformation-classifier
    facets:
      - value: aa_2023_01
        label: "ALGO:AA:2023:01"
      - value: year_2023
        label: "2023"
        hide: true
      - value: type_of_audit_normative
        label: normative review
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
        hide: true
      - value: disinformation
        label: disinformation
      - value: standard_risk_management
        label: risk management
        hide: true
      - value: standard_accuracy_specifications
        label: accuracy specifications
        hide: true
      - value: standard_quality_management_system
        label: quality management system
        hide: true
  - title: Type of SIM card as a predictor variable to detect payment fraud
    intro: >-
      Case study to ML-driven risk profiling to detect after-pay fraud at an e-commerce platform. An independent commission advises against using type of SIM card as an input variable in the algorithmic risk model. As it is likely that type of SIM
      card acts as a proxy-variable for sensitive demographic categories, the model would run an intolerable risk of disproportionally excluding vulnerable demographic groups from the payment service.
    image: /images/algoprudence/AA202201/Cover.png
    link: /algoprudence/cases/aa202201_type-of-sim
    facets:
      - value: AA-2022-01
        label: "ALGO:AA:2022:01"
      - value: year_2022
        label: "2022"
        hide: true
      - value: type_of_audit_normative
        label: normative review
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
        hide: true
      - value: standard_governance_data_quality
        label: governance & data quality
        hide: true
      - value: standard_transparency_provisions
        label: transparency provisions
        hide: true
---
