---
author: Parie
type: regular
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
title: Synthetic data generation
subtitle: >
  Synthetic data generation (SDG) provides a privacy-preserving alternative for
  training and debiasing algorithmic systems. At Algorithm Audit, we build
  public knowledge how SDG can be used best for AI bias testing.
image: /images/svg-illustrations/knowledge_base.svg
team:
  title: Synthetic data generation team
  icon: fas fa-user-friends
  button_text: Other teams
  button_link: /about/teams/
  team_members:
    - image: /images/people/EMenvouta.jpeg
      name: Emmanuel Menvouta PhD
      bio: |
        Freelance machine learning engineer, specialized in SDG methodology
    - image: /images/people/JParie.jpg
      name: Jurriaan Parie
      bio: |
        Director and board member at Algorithm Audit
    - image: /images/people/MLisdonk.png
      name: Maikel van de Lisdonk
      bio: |
        Freelance software developer
    - image: /images/people/RLangius.jpg
      name: Ruben Langius
      bio: |
        Freelance software developer
quick_navigation:
  title: Content overview
  links:
    - title: Introduction
      url: '#info'
    - title: Tool
      url: '#web-app'
    - title: Bias testing applications
      url: '#bias-testing'
    - title: Past usage
      url: '#past-usage'
    - title: Team
      url: '#team'
---

{{< container_open title="Synthetic data generation – What is it?" icon="fas fa-database" id="info" >}}

Garbage in, garbage out: When auditing semi-automated decision-making processes, one of the most immediate questions is the representativeness of the source data. However, privacy poses a hurdle to sharing data with external parties to assess the representativeness of the data. Absent access to source data means that stakeholders – such as people whose data is stored and independent experts – cannot scrutinize it for potential biases. Consequently, the evaluation of data used for semi-automated decision-making processes, and training of AI-systems, relies on a small group. If this evaluation process is not performed carefully, this can have severe downstream consequences for the decision-making processes that are using these data. This harms public trust in technology and in the organisations that deploy these digital methods.

Synthetic data generation (SDG) – the creation of artificial datasets mimicking the original dataset's statistical characteristics – emerges as a potential solution. SDG has the potential to extend the audience involved in assessing the representativeness of data. It is considered a safe approach for the wider release of privately held data, as it contains no identifiable trace of the personal data it was generated from.

{{< container_close >}}

{{< iframe src="https://local-first-bias-detection.s3.eu-central-1.amazonaws.com/synthetic-data.html?lang=en" title="Synthetic data generation tool" icon="fas fa-search" id="web-app" height="800px" >}}

{{< container_open title="How can SDG be used for AI bias testing?" icon="fas fa-project-diagram" id="bias-testing" >}}

SDG holds potential for third parties to audit datasets in a privacy-preserving way. There is currently not yet sufficient knowledge how and when SDG serves as a suitable method for external bias testing. First, the complex process of SDG may not always be necessary for bias testing when simple approaches such as univariate or bivariate aggregate statistics of the source data suffice. Second, SDG can be performed using a plethora of methods, e.g., parametric, non-parametric and copula-based estimation and inference methods. The best SDG method for a given use case depends on the underlying structure of the data and is therefore context-specific. At Algorithm Audit, we are investigating these open-ended questions, and build public knowledge on what form of data-sharing practice (SDG or alternatives) is best suited for privacy-preserving AI bias testing in specific use cases. Through our technical and qualitative work in this project, we contribute to this collective learning process.

Learn more about our quantitative and qualitative [Joint Fairness Assessment Method](https://github.com/NGO-Algorithm-Audit/Bias_scan).

{{< container_close >}}

{{< container_open title="Has SDG been used in the past?" icon="fas fa-history" id="past-usage" >}}

Although numerous commercial APIs for generating synthetic data exist, widespread adoption has historically been limited due to the risk data-sharing poses for privacy. Particularly in the public sector, where stringent privacy preservation is imperative, adoption has faced SDG hurdles. Yet, the couple of last years has seen landmark use cases of data sharing enabled through SDG.

#### Use cases

Notably, [Lighthouse Reports](https://www.lighthousereports.com/suspicion-machines-methodology/) shared inadvertently acquired data to the public through SDG, shedding light on biases in a massive data set that the Municipality of Rotterdam used for ML-driven risk profiling in the context of social welfare re-examination.

#### AI Act

Furthermore, the AI Act (Article 10) contains a specific provision regarding the utilization of synthetic data for bias detection and mitigation, mandating AI system providers to rectify biases using synthetic or anonymized data rather than relying solely on "appropriate safeguards."

{{< container_close >}}

{{< team id="team" >}}