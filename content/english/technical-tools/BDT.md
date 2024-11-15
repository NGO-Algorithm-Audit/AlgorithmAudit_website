---
title: Bias detection tool
subtitle: >
  Algorithm Audit's bias detection tool uses statistical analysis to identify
  groups that may be subject to unfair treatment by AI systems. The tool informs
  the qualitative doctrine of law and ethics which disparities need to be
  scrutinised manually by human experts. Algorithm Audit combines quantitative
  and qualitative methods to make normative decisions about fair AI, also known
  as our <a href="https://github.com/NGO-Algorithm-Audit/Bias_scan"
  target="_blank">joint fairness assessment method (JFAM)</a>.
image: /images/svg-illustrations/illustration_cases.svg
reports_preview:
  title: Example output bias detection tool
  icon: fas fa-file
  button_text: Case repository
  button_link: /algoprudence
  id: example-reports
  feature_item:
    - name: Higher-dimensional proxy bias
      image: /images/algoprudence/AA202402/AA202402_cover_EN.png
      link: /algoprudence/cases/aa202402_preventing-prejudice_addendum/
      content: >
        Application of the tool in a real-world audit. Comparing supervised and
        unsupervised bias testing methods for establishing indirect
        discrimination.
    - name: Review of disinformation classifier by human experts
      image: /images/algoprudence/AA202301/Cover.png
      link: /algoprudence/cases/aa202301_bert-based-disinformation-classifier/
      content: >
        An advice commission believes there is a low risk of
        (higher-dimensional) proxy discrimination by the BERT-based
        disinformation classifier
team:
  title: Bias detection tool team
  icon: fas fa-user-friends
  button_text: Other teams
  id: team
  button_link: /about/teams/
  team_members:
    - image: /images/people/FHolstege.jpeg
      name: Floris Holstege
      bio: |
        PhD-candidate Machine Learning, University of Amsterdam
    - image: /images/people/JPersson.jpeg
      name: Joel Persson PhD
      bio: |
        Research Scientist, Spotify
    - image: /images/people/KPadh.jpeg
      name: Kirtan Padh
      bio: |
        PhD-candidate Causal Inference and Machine Learning, TU München
    - image: /images/people/KProrokovic.jpeg
      name: Krsto Proroković
      bio: |
        PhD-candidate, Swiss AI Lab IDSIA
    - image: /images/people/MJorgensen.jpeg
      name: Mackenzie Jorgensen
      bio: |
        PhD-candidate Computer Science, King’s College London
type: bias-detection-tool
---

{{< container_open title="Bias detection tool" icon="fas fa-search" id="info" >}}

<br>

##### What is the tool about?

The tool identifies potentially unfairly treated groups of similar users by an AI system. The tool returns clusters of users for which the system is underperforming compared to the rest of the data set. The tool makes use of <a href="https://en.wikipedia.org/wiki/Cluster_analysis" target="_blank">clustering</a> – an unsupervised statistal learning method. This means that no data is required on protected attributes of users, e.g., gender, nationality or ethnicity, to detect higher-dimensional forms of apparently neutral differentiation, also referred to as higher-dimensional proxy or intersectional discrimination. The metric by which bias is defined can be manually chosen in advance and is referred to as the `performance metric`.

##### How is my data processed?

The tool is privacy preserving. It uses computing power of your own computer to analyze a dataset. In this architectural setup, data is processed entirely on your device and it not uploaded to any third party, such as cloud providers. This local-only feature allows organisations to securely use the tool with proprietary data. The used software is also available as <a href="https://pypi.org/project/unsupervised-bias-detection/" target="_blank">pip package</a> `unsupervised-bias-detection`. [![!pypi](https://img.shields.io/pypi/v/unsupervised-bias-detection?logo=pypi&color=blue)](https://pypi.org/project/unsupervised-bias-detection/)

##### What does the tool return?

The tool returns a report which presents the cluster with the highest bias and describes this cluster by the features that characterizes it. This is quantitatively expressed by the (statistically significant) differences in feature means between the identified cluster and the rest of the data. These results serve as a starting point for a deliberative assessment by human experts to evaluate potential discrimination and unfairness in the AI system under review. The tool also visualizes the outcomes.

Try the tool below ⬇️

{{< container_close >}}

{{< iframe title="Bias detection tool" icon="fas fa-cloud" id="web-app" src="https://local-first-bias-detection.s3.eu-central-1.amazonaws.com/bias-detection.html" height="770px" >}}

{{< promo_bar content="Do you appreciate the work of Algorithm Audit? ⭐️ us on" id="promo" >}}

{{< reports_preview >}}

{{< container_open title="Finalist Stanford’s AI Audit Challenge 2023" icon="fas fa-medal" id="finalist" >}}

Under the name Joint Fairness Assessment Method (JFAM) our bias scan tool has been selected as a finalist in <a href="https://hai.stanford.edu/ai-audit-challenge-2023-finalists" target="_blank">Stanford’s AI Audit Competition 2023</a>.

{{< image id="stanford" width_desktop="4" width_mobile="12" image1="/images/supported_by/HAI.png" alt1="Stanford University" link1="https://hai.stanford.edu/ai-audit-challenge-2023-finalists" caption1="Stanford University" >}}

{{< container_close >}}

{{< container_open title="OECD Catalogue of Tools & Metrics for Trustworthy AI" icon="fas fa-toolbox" id="OECD" >}}

Algorithm Audit's bias detection tool is part of OECD's <a href="https://oecd.ai/en/catalogue/tools/unsupervised-bias-detection-tool" target="_blank">Catalogue of Tools & Metrics for Trustworthy AI</a>.

{{< image id="oecd-image" width_desktop="4" width_mobile="12" image1="/images/BDT/oecd_logo.svg" alt1="OECD AI Policy Observatory" caption1="OECD AI Policy Observatory" link1="https://oecd.ai/en/catalogue/tools/unsupervised-bias-detection-tool" >}}

{{< container_close >}}

{{< container_open title="Hierarchical Bias-Aware Clustering (HBAC) algorithm" icon="fas fa-code-branch" id="HBAC" >}}

The bias detection tool currently works for tabular numerical and categorical data. The _Hierarchical Bias-Aware Clustering_ (HBAC) algorithm processes input data according to the k-means or k-modes clustering algorithm. The HBAC-algorithm is introduced by Misztal-Radecka and Indurkya in a [scientific article](https://www.sciencedirect.com/science/article/abs/pii/S0306457321000285) as published in *Information Processing and Management* (2021). Our implementation of the HBAC-algorithm can be found on <a href="https://github.com/NGO-Algorithm-Audit/unsupervised-bias-detection/blob/master/README.md" target="_blank">Github</a>.

{{< container_close >}}

{{< container_open title="FAQ" icon="fas fa-question-circle" >}}

##### Why this bias detection tool?

- **Quantitative-qualitative joint method**: Data-driven bias testing combined with the balanced and context-sensitive judgment of human experts;
- **Unsupervised bias detection**: No user data needed on protected attributes;
- **Bias scan tool**: Scalable method based on statistical learning to detect algorithmic bias;
- **Detects complex bias**: Identifies unfairly treated groups characterized by mixture of features, detects intersectional bias;
- **Model-agnostic**: Works for all AI systems;
- **Open-source and not-for-profit**: Easy to use and available for the entire AI auditing community.

##### By whom can the bias detection tool be used? 

The bias detection tool allows the entire ecosystem involved in auditing AI, e.g., data scientists, journalists, policy makers, public- and private auditors, to use quantitative methods to detect bias in AI systems.

##### What does the tool compute? 

A statistical method is used to compute for which clusters an AI system underperforms. A cluster is a group of data points sharing similar features. On these features the AI system is initially trained. The tool identifies and visualizes the found clusters automatically. The tool also assesses how individuals in a deviating cluster differ (in terms of the provided features) from other data points outside the cluster. The differences between these clusters are tested on statistical significance. All results can directly be downloaded as a pdf file.

#### The tool detects prohibited discrimination in AI? 

No. The bias detection tool serves as a starting point to assess potentially unfair AI classifiers with the help of subject-matter expertise. The features of identified clusters are examined on critical links with protected grounds, and whether the measured disparities are legitimate. This is a qualitative assessment for which the context-sensitive legal doctrine provides guidelines, i.e., to assess the legitimacy of the aim pursued and whether the means of achieving that aim are appropriate and necessary. In a [case study](/algoprudence/cases/bert-based-disinformation-classifier-aa202301/) of Algorithm Audit – in which the bias detection tool was tested on a BERT-based disinformation classifier – a normative advice commission argued that the measured quantitative deviations could be legitimised. Legitimisation of unequal treatment is a context-sensitive taks for which legal frameworks exist, such an assessment of proportionality, necessity and suitability. This qualitative judgement will always be a human task.

##### How is my data processed?

The tool is privacy preserving. It uses computing power of your own computer to analyze a dataset. In this architectural setup, data is processed entirely on your device and it not uploaded to any third party, such as cloud providers. This local-only feature allows organisations to securely use the tool with proprietary data. The used software is also available as <a href="https://pypi.org/project/unsupervised-bias-detection/" target="_blank">pip package</a> `unsupervised-bias-detection`. [![!pypi](https://img.shields.io/pypi/v/unsupervised-bias-detection?logo=pypi&color=blue)](https://pypi.org/project/unsupervised-bias-detection/)

##### In sum 

Quantitative methods, such as unsupervised bias detection, are helpful to discover potentially unfair treated groups of similar users in AI systems in a scalable manner. Automated identification of cluster disparities in AI models allows human experts to assess observed disparities in a qualitative manner, subject to political, social and environmental traits. This two-pronged approach bridges the gap between the qualitative requirements of law and ethics, and the quantitative nature of AI (see figure). In making normative advice, on identified ethical issues publicly available, over time a [repository](/algoprudence/) of case reviews emerges. We call case-based normative advice for ethical algorithm _algoprudence_. Data scientists and public authorities can learn from our algoprudence and can criticise it, as ultimately normative decisions regarding fair AI should be made within democratic sight.

[Read more](/algoprudence/how-we-work/) about algoprudence and how Algorithm Audit's builds it.

{{< image id="overview-JFAM" width_desktop="12" width_mobile="12" image1="/images/BDT/Qualitative_quantitative_EN.png" alt1="Overview Joint Fairness Assessment Method" caption1="Overview Joint Fairness Assessment Method" >}}

{{< container_close >}}

{{< team >}}
