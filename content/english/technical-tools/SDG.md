---
title: Synethetic data generation
subtitle: >
  Synthetic data generation (SDG) provides a privacy-preserving alternative for
  training and debiasing algorithmic systems. At Algorithm Audit, we build
  public knowledge how SDG can be used best for AI bias testing.
image: /images/svg-illustrations/knowledge_base.svg
author: Parie
type: regular
team:
  title: Synthetic data generation cohort
  icon: fas fa-user-friends
  button_text: Andere teams
  id: team
  button_link: /about/teams/
  team_members:
    - image: /images/people/EBogaards.jpeg
      name: Ellen Bogaards
      bio: |
        MSc Artifical Intelligence, Utrecht University
    - image: /images/people/EMenvouta.jpeg
      name: Emmanuel Menvouta PhD
      bio: |
        Machine Learning Engineer, Dataroots
    - image: /images/people/GAcheampong.jpeg
      name: Godwin Acheampong
      bio: |
        Data Scientist, Budget Thuis
    - image: /images/people/JPersson.jpeg
      name: Joel Persson PhD
      bio: |
        Research Scientist, Spotify
    - image: /images/people/SBabac.jpeg
      name: Sonja Babac
      bio: |
        PhD-candidate, Technical University Eindhoven – Philips MedTech
text_field1:
  title: Synthetic Data Generation – What is it?
  icon: fas fa-database
  id: info
  content: >
    Garbage in, garbage out: When auditing sADM semi-automated decision-making
    processes, one of the most immediate questions is the representativeness of
    the source data. However, privacy poses a hurdle to sharing data with
    external parties for bias testing. Absent access to source data, external
    auditors cannot assess bias, limiting trust in the data sets used. Synthetic
    data generation (SDG) – artificial datasets mimicking the statistical
    characteristics of the original dataset – is a potential solution for this
    issue. It is considered a safe approach for the wider release of privately
    held data, as it contains no identifiable trace of the personal data it was
    generated from.
text_field2:
  title: How can SDG be used for AI bias testing?
  icon: fas fa-cog
  id: methods
  content: >
    SDG holds potential for third parties to audit datasets in a
    privacy-preserving way. There is currently not yet sufficient knowledge how
    and when SDG serves as a suitable method for external bias testing. First of
    all, the complex process of SDG may not always be necessary for bias testing
    when, for instance, univariate or bivariate aggregation statistics suffice.
    Second, there are various technical ways to conduct SDG (e.g., parametric,
    non-parametric, copula-based), the most suitable of which is not evident. At
    Algorithm Audit, we are investigating these open questions, and build public
    knowledge on what form of data-sharing practice (SDG or alternatives) is
    best suited for privacy-preserving AI bias testing.
---

{{< container_open title="Synthetic data generation – What is it?" icon="fas fa-database" id="info" >}}

Garbage in, garbage out: When auditing semi-automated decision-making processes, one of the most immediate questions is the representativeness of the source data. However, privacy poses a hurdle to sharing data with external parties to assess the representativeness of the data. Absent access to source data, stakeholders – such as people of which the data is stored and independent experts – cannot scrutinize it for potential biases. Consequently, the evaluation of data used for semi-automated decision-making processes, and training of AI-systems, relies on a small group. If this evaluation process is not performed carefully, this can have severe downstream consequences for the decision-making processes that are using these data. This harms public trust in technology and in the organisations that deploy these digital methods.

Synthetic data generation (SDG) – the creation of artificial datasets mimicking the original dataset's statistical characteristics – emerges as a potential solution. SDG has the potential to extend the audience involved in assessing the representativeness of data. It is considered a safe approach for the wider release of privately held data, as it contains no identifiable trace of the personal data it was generated from.

{{< container_close >}}

{{< container_open title="How can SDG be used for AI bias testing?" icon="fas fa-project-diagram" id="bias-testing" >}}

SDG holds potential for third parties to audit datasets in a privacy-preserving way. There is currently not yet sufficient knowledge how and when SDG serves as a suitable method for external bias testing. First, the complex process of SDG may not always be necessary for bias testing when simple approaches such as univariate or bivariate aggregate statistics of the source data suffice. Second, SDG can be performed using a plethora of methods, e.g., parametric, non-parametric and copula-based estimation and inference methods. The best SDG method for a given use case depends on the underlying structure of the data and is therefore context-specific. At Algorithm Audit, we are investigating these open-ended questions, and build public knowledge on what form of data-sharing practice (SDG or alternatives) is best suited for privacy-preserving AI bias testing in specific use cases. Through our technical and qualitative work in this project, we contribute to this collective learning process.

Learn more about our quantitative and qualitative [Joint Fairness Assessment Method](https://github.com/NGO-Algorithm-Audit/Bias_scan).

{{< container_close >}}

{{< container_open title="Has SDG been used in the past?" icon="fas fa-history" id="past-usage" >}}

Although numerous commercial APIs for generating synthetic data exist, widespread adoption has historically been limited due to the risk data-sharing poses for privacy. Particularly in the public sector, where stringent privacy preservation is imperative, adoption has faced  SDG hurdles. Yet, the couple of last years has seen landmark use cases of data sharing enabled through SDG.

#### Use cases

Notably, [Lighthouse Reports](https://www.lighthousereports.com/suspicion-machines-methodology/) shared inadvertently acquired data to the public through SDG, shedding light on biases in a massive data set that the Municipality of Rotterdam used to for ML-driven risk profiling in the context of social welfare re-examination.

#### AI Act

Furthermore, the AI Act (Article 10) contains a specific provision regarding the utilization of synthetic data for bias detection and mitigation, mandating AI system providers to rectify biases using synthetic or anonymized data rather than relying solely on "appropriate safeguards."

{{< container_close >}}

{{< team >}}
