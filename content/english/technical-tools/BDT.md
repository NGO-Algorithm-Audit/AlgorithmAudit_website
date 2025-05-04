---
title: Unsupervised bias detection tool
subtitle: >
  Privacy-preserving tool using statistical analysis to identify groups that may be subject to unfair treatment by algorithms or AI. The tool informs
  the qualitative doctrine of law and ethics which disparities need to be
  scrutinised manually by domain experts. 
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
  title: Unsupervised bias detection team
  icon: fas fa-user-friends
  button_text: Other teams
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
      name: Mackenzie Jorgensen PhD
      bio: |
        Researcher Alan Turing Institute, London
quick_navigation:
  title: Content overview
  links:
    - title: Introduction
      url: '#info'
    - title: Web app
      url: '#web-app'
    - title: Anomaly detection algorithm
      url: '#HBAC'
    - title: FAQ
      url: '#FAQ'
    - title: Team
      url: '#team'
type: bias-detection-tool
---

{{< container_open title="Introduction – Unsupervised bias detection tool" icon="fas fa-search" id="info" >}}

<br>

#### What is the tool about?
The tool identifies groups where an algorithm or AI system shows variations in performance. This type of monitoring is referred to as *anomaly detection*. To identify anomalous patterns, the tool uses <a href="https://en.wikipedia.org/wiki/Cluster_analysis" target="_blank">clustering</a>. Clustering is a form of _unsupervised learning_. This means detecting disparate treatment (bias) does not require any data on protected attributes of users, such as gender, nationality, or ethnicity. The metric used to measure bias can be manually selected and is referred to as the `bias metric`.

#### What data can be processed?
The tool processes all data in table format. The type of data (numerical, categorical, time, etc.) is automatically detected. One column must be selected as the `bias metric` – which should be a numerical value. The user must specify whether a high or low value of the `bias metric` is considered better. For example: for an error rate, a low value is better, while for accuracy, a high value is better. 

The tool contains a demo data for which output is generated. Hit the 'Try it out' button.

<div>
  <p><u>Example of numerical data set</u>:</p>
  <style type="text/css">.tg{border-collapse:collapse;border-spacing:0}.tg td{border-color:#000;border-style:solid;border-width:1px;font-size:14px;overflow:hidden;padding:10px 5px;word-break:normal}.tg th{border-color:#000;border-style:solid;border-width:1px;font-size:14px;font-weight:400;overflow:hidden;padding:10px 5px;word-break:normal}.tg .tg-uox0{border-color:#grey;font-weight:700;text-align:left;vertical-align:top}.tg .tg-uoz0{border-color:#grey;text-align:left;vertical-align:top} .tg-1wig{font-weight:700;text-align:left;vertical-align:top}.tg .tg-0lax{text-align:left;vertical-align:top}</style>
  <table class="tg">
    <thead>
      <tr>
      <th class="tg-uox0">Age</th><th class="tg-uox0">Income</th><th class="tg-uox0">...</th><th class="tg-uox0">Number of cars</th><th class="tg-uox0"><span style="font-family:SFMono-Regular,Menlo,Monaco,Consolas,liberation mono,courier new,monospace; color:#e83e8c; font-weight:300">Selected for control</span></th>
      </tr>
    </thead>
    <tbody>
      <tr><td class="tg-uoz0">35</td><td class="tg-uoz0">55.000</td><td class="tg-uoz0">...</td><td class="tg-uoz0">1</td><td class="tg-uoz0">1</td></tr>
      <tr><td class="tg-uoz0">40</td><td class="tg-uoz0">45.000</td><td class="tg-uoz0">...</td><td class="tg-uoz0">0</td><td class="tg-uoz0">0</td></tr>
      <tr><td class="tg-uoz0">...</td><td class="tg-uoz0">...</td><td class="tg-uoz0">...</td><td class="tg-uoz0">...</td><td class="tg-uoz0">...</td></tr>
      <tr><td class="tg-uoz0">20</td><td class="tg-uoz0">30.000</td><td class="tg-uoz0">...</td><td class="tg-uoz0">0</td><td class="tg-uoz0">0</td></tr>
    </tbody>
  </table>
</div>
<br>

#### What does the tool return?
The tool identifies deviating clusters. A summary of the results is made available in a bias analysis report that can be downloaded as a PDF. All identified clusters can be downloaded in a `.json` file. The tool specifically focuses on the most negatively deviating cluster and provides a description of this cluster. These results serve as a starting point for further investigation by domain experts, who can assess whether the observed disparities are indeed undesirable. The tool also visualizes the outcomes.

#### How is my data processed?
The tool is privacy-friendly because the data is processed entirely within the browser. The data does not leave your computer or the environment of your organization. The tool utilizes the computing power of your own computer to analyze the data. This type of browser-based software is referred to as *local-first*. Therefore, the tool does not upload the data to third parties, such as cloud providers. Instructions on how to host the tool locally within your own organization, including the source code, can be found on <a href="https://github.com/NGO-Algorithm-Audit/local-first-web-tool" target="_blank">Github</a>.

Try the tool below ⬇️

{{< container_close >}}

{{< iframe title="Bias detection tool" icon="fas fa-cloud" id="web-app" src="https://local-first-bias-detection.s3.eu-central-1.amazonaws.com/bias-detection.html?lang=en" height="770px" >}} 

{{< promo_bar content="Do you appreciate the work of Algorithm Audit? ⭐️ us on" id="promo" >}}

{{< reports_preview >}}

{{< container_open title="Source code" id="source-code" icon="fas fa-toolbox" >}}

- The source code of the clustering method is available on <a href="https://github.com/NGO-Algorithm-Audit/unsupervised-bias-detection" target="_blank">Github</a> and as a <a href="https://pypi.org/project/unsupervised-bias-detection/" target="_blank">pip package</a>: `pip install unsupervised-bias-detection`. 
[![!pypi](https://img.shields.io/pypi/v/unsupervised-bias-detection?logo=pypi\&color=blue)](https://pypi.org/project/unsupervised-bias-detection/)

- The local-first architecture in available on <a href="https://github.com/NGO-Algorithm-Audit/local-first-web-tool" target="_blank">Github repository</a> 

{{< container_close >}}

{{< container_open title="Innovatiebudget" icon="fas fa-toolbox" >}}

Algorithm Audit's bias detectie tool is onderdeel van de OECD's [Catalogus voor Tools & Metrieken voor Verantwoorde AI.](https://oecd.ai/en/catalogue/tools/unsupervised-bias-detection-tool)

{{< image id="OECD-logo" width_desktop="4" width_mobile="8" image1="/images/BDT/oecd_logo.svg" alt1="OECD Catalogus voor Tools & Metrieken voor Verantwoorde AI" caption1="OECD Catalogus voor Tools & Metrieken voor Verantwoorde AI" link1="https://oecd.ai/en/catalogue/tools/unsupervised-bias-detection-tool" >}}

{{< container_close >}}

{{< container_open title="Finalist Stanford’s AI Audit Challenge 2023" icon="fas fa-medal" id="finalist" >}}

Under the name Joint Fairness Assessment Method (JFAM) our bias scan tool has been selected as a finalist in <a href="https://hai.stanford.edu/ai-audit-challenge-2023-finalists" target="_blank">Stanford’s AI Audit Competition 2023</a>.

{{< image id="stanford" width_desktop="4" width_mobile="12" image1="/images/supported_by/HAI.png" alt1="Stanford University" link1="https://hai.stanford.edu/ai-audit-challenge-2023-finalists" caption1="Stanford University" >}}

{{< container_close >}}

{{< container_open title="OECD Catalogue of Tools & Metrics for Trustworthy AI" icon="fas fa-toolbox" id="OECD" >}}

Algorithm Audit's bias detection tool is part of OECD's <a href="https://oecd.ai/en/catalogue/tools/unsupervised-bias-detection-tool" target="_blank">Catalogue of Tools & Metrics for Trustworthy AI</a>.

{{< image id="oecd-image" width_desktop="4" width_mobile="12" image1="/images/BDT/oecd_logo.svg" alt1="OECD AI Policy Observatory" caption1="OECD AI Policy Observatory" link1="https://oecd.ai/en/catalogue/tools/unsupervised-bias-detection-tool" >}}

{{< container_close >}}

{{< container_open title="Hierarchical Bias-Aware Clustering (HBAC) algorithm" icon="fas fa-code-branch" id="HBAC" >}}

The bias detection tool utilizes the _Hierarchical Bias-Aware Clustering_ (HBAC) algorithm. HBAC processes input data according to the k-means (for numerical data) or k-modes (for categorical data) clustering algorithm. The HBAC-algorithm is introduced by Misztal-Radecka and Indurkya in a [scientific article](https://www.sciencedirect.com/science/article/abs/pii/S0306457321000285) as published in *Information Processing and Management* (2021). Our implementation of the HBAC-algorithm can be found on <a href="https://github.com/NGO-Algorithm-Audit/unsupervised-bias-detection/blob/master/README.md" target="_blank">Github</a>. The methodology has been reviewed by a team of machine learning engineers and statisticians, and is continuously undergoing evaluation.

{{< container_close >}}

{{< container_open title="FAQ" icon="fas fa-question-circle" id="FAQ">}}

##### Why this bias detection tool?

- **Quantitative-qualitative joint method**: Data-driven bias testing combined with the balanced and context-sensitive judgment of human experts;
- **Unsupervised bias detection**: No user data needed on protected attributes;
- **Anolamy detection**: Scalable method based on statistical learning to detect bias;
- **Detects complex bias**: Identifies unfairly treated groups characterized by mixture of features, detects intersectional bias;
- **Model-agnostic**: Works for all classification algorithms and AI systems;
- **Open-source and not-for-profit**: User friendly and free to use for the entire AI auditing community.

#### The tool detects prohibited discrimination in AI? 

No. The bias detection tool serves as a starting point to assess potentially unfair AI classifiers with the help of subject-matter expertise. The features of identified clusters are examined on critical links with protected grounds, and whether the measured disparities are legitimate. This is a qualitative assessment for which the context-sensitive legal doctrine provides guidelines, i.e., to assess the legitimacy of the aim pursued and whether the means of achieving that aim are appropriate and necessary. In a [case study](/algoprudence/cases/bert-based-disinformation-classifier-aa202301/) of Algorithm Audit – in which the bias detection tool was tested on a BERT-based disinformation classifier – a normative advice commission argued that the measured quantitative deviations could be legitimised. Legitimisation of unequal treatment is a context-sensitive taks for which legal frameworks exist, such as an assessment of proportionality, necessity and suitability. This qualitative judgement will always be a human task.

##### How is my data processed?

The tool is privacy preserving. It uses computing power of your own computer to analyze a dataset. In this architectural setup, data is processed entirely on your device and it not uploaded to any third party, such as cloud providers. This local-only feature allows organisations to securely use the tool with proprietary data. The used software is also available as <a href="https://pypi.org/project/unsupervised-bias-detection/" target="_blank">pip package</a> `unsupervised-bias-detection`. [![!pypi](https://img.shields.io/pypi/v/unsupervised-bias-detection?logo=pypi&color=blue)](https://pypi.org/project/unsupervised-bias-detection/)

##### In sum 

Quantitative methods, such as unsupervised bias detection, are helpful to discover potentially unfair treated groups of similar users in AI systems in a scalable manner. Automated identification of cluster disparities in AI models allows human experts to assess observed disparities in a qualitative manner, subject to political, social and environmental traits. This two-pronged approach bridges the gap between the qualitative requirements of law and ethics, and the quantitative nature of AI (see figure). In making normative advice, on identified ethical issues publicly available, over time a [repository](/algoprudence/) of case reviews emerges. We call case-based normative advice for ethical algorithm _algoprudence_. Data scientists and public authorities can learn from our algoprudence and can criticise it, as ultimately normative decisions regarding fair AI should be made within democratic sight.

[Read more](/algoprudence/how-we-work/) about algoprudence and how Algorithm Audit's builds it.

{{< image id="overview-JFAM" width_desktop="12" width_mobile="12" image1="/images/BDT/Qualitative_quantitative_EN.png" alt1="Overview Joint Fairness Assessment Method" caption1="Overview Joint Fairness Assessment Method" >}}

{{< container_close >}}

{{< team id="team" >}}
