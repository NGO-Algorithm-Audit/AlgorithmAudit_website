---
title: Unsupervised bias detection tool
subtitle: >
  Local-first tool using statistical analysis to identify groups that may be
  subject to unfair treatment by algorithms or AI. The tool informs the
  qualitative doctrine of law and ethics which disparities need to be
  scrutinised manually by domain experts.
image: /images/svg-illustrations/illustration_cases.svg
quick_navigation:
  title: Content overview
  links:
    - title: Introduction
      url: "#info"
    - title: Web app
      url: "#web-app"
    - title: Source code
      url: "#source-code"
    - title: Anomaly detection algorithm
      url: "#HBAC"
    - title: Scientific paper and audit report
      url: "#scientific-paper"
    - title: Local-first computing
      url: "#local-first"
    - title: Supported by
      url: "#supported-by"
    - title: Awards and acknowledgements
      url: "#awards-acknowledgements"
    - title: Summary
      url: "#summary"
    - title: Team
      url: "#team"
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
  title: Team
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
type: bias-detection-tool
---

<!-- Introduction -->

{{< container_open title="Introduction – Unsupervised bias detection tool" icon="fas fa-search" id="info" isAccordion={true} >}}

<br>

#### What is the tool about?

The tool identifies groups where an algorithm or AI system shows variations in performance. This type of monitoring is referred to as _anomaly detection_. To identify anomalous patterns, the tool uses <a href="https://en.wikipedia.org/wiki/Cluster_analysis" target="_blank">clustering</a>. Clustering is a form of _unsupervised learning_. This means detecting disparate treatment (bias) does not require any data on protected attributes of users, such as gender, nationality, or ethnicity. The metric used to measure bias can be manually selected and is referred to as the `bias metric`.

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

The tool identifies deviating clusters. A summary of the results is made available in a bias analysis report that can be downloaded as a pdf. All identified clusters can be downloaded in a .json file. The tool specifically focuses on the most negatively deviating cluster and provides a description of this cluster. These results serve as a starting point for further investigation by domain experts, who can assess whether the observed disparities are indeed undesirable. The tool also visualizes the outcomes.

#### Overview of process

<div style="margin-bottom:50px; display: flex; justify-content: center;">
  <img src="/images/BDT/overview_tool.png" alt="drawing" width="600px"/>
</div>

#### How is my data processed?

The tool is privacy-friendly because the data is processed entirely within the browser. The data does not leave your computer or the environment of your organization. The tool utilizes the computing power of your own computer to analyze the data. This type of browser-based software is referred to as _local-first_. The tool does not upload data to third parties, such as cloud providers. Instructions on how to host the tool and local-first architecture can be hosted locally within your own organization can be found on <a href="https://github.com/NGO-Algorithm-Audit/local-first-web-tool" target="_blank">Github</a>.

Try the tool below ⬇️

{{< container_close >}}

<!-- Web app -->

{{< iframe title="Web app – Unsupervised bias detection tool" icon="fas fa-cloud" id="web-app" src="https://local-first-bias-detection.s3.eu-central-1.amazonaws.com/bias-detection.html?lang=en" height="770px" >}}

<!-- Promo bar -->

{{< promo_bar content="Do you appreciate the work of Algorithm Audit? ⭐️ us on" id="promo" >}}

<!-- Source code -->

{{< container_open title="Source code" id="source-code" icon="fas fa-toolbox" >}}

- The source code of the anolamy detection-algorithm is available on <a href="https://github.com/NGO-Algorithm-Audit/unsupervised-bias-detection" target="_blank">Github</a> and as a <a href="https://pypi.org/project/unsupervised-bias-detection/" target="_blank">pip package</a>: `pip install unsupervised-bias-detection`.
  [![!pypi](https://img.shields.io/pypi/v/unsupervised-bias-detection?logo=pypi&color=blue)](https://pypi.org/project/unsupervised-bias-detection/)
- The architecture to run web apps local-first is also available on <a href="https://github.com/NGO-Algorithm-Audit/local-first-web-tool" target="_blank">Github</a>.

{{< container_close >}}

<!-- Anolamy detection algorithm -->

{{< container_open title="Anolamy detection algorithm – Hierarchical Bias-Aware Clustering (HBAC)" icon="fas fa-code-branch" id="HBAC" >}}

The tool uses the _Hierarchical Bias-Aware Clustering_ (HBAC) algorithm. HBAC processes input data according to the k-means (for numerical data) or k-modes (for categorical data) clustering algorithm. The HBAC-algorithm is introduced by Misztal-Radecka and Indurkya in a [scientific article](https://www.sciencedirect.com/science/article/abs/pii/S0306457321000285) as published in *Information Processing and Management* (2021). Our implementation of the HBAC-algorithm, including additional methodological checks to distinguish real bias from noise, such as sample splitting, statistical hypothesis testing and measuring cluster stability, can be found in the <a href="https://github.com/NGO-Algorithm-Audit/unsupervised-bias-detection/blob/master/README.md" target="_blank">unsupervised-bias-detection</a> pip package.

{{< container_close >}}

<!-- Scientific paper and audit report -->

{{< container_open icon="far fa-file" title="Scientific paper and audit report" id="scientific-paper" >}}

The unsupervised bias detection tool has been applied in practice to audit a Dutch public sector risk profiling algorithm. Our [team](/technical-tools/bdt/#team) documented this use case in a scientific paper. The tool identified proxies for students with a non-European migration background in the risk profiling algorithm, specifically education level and distance between the student's address and their parent(s)' address. The results are also described in Appendix A of the below report. This report was sent to <a href="https://www.tweedekamer.nl/kamerstukken/detail?id=2024D20431&did=2024D20431" target="_blank">Dutch parliament</a> on 22-05-2024.

{{< embed_pdf url="/pdf-files/technical-tools/UBDT/20250205 Auditing a Dutch Public Sector Risk Profiling Algorithm.pdf" url2="/pdf-files/algoprudence/TA_AA202402/TA_AA202402_Addendum_Preventing_prejudice.pdf" width_mobile_pdf="12" width_desktop_pdf="6" >}}

{{< container_close >}}

<!-- Local-first architecture -->

{{< container_open title="Local-first architecture" icon="fas fa-map-pin" id="local-first" >}}

<br>

#### What is local-first computing?

Local-first computing is the opposite of cloud computing: the data is not uploaded to third-parties, such as a cloud providers, and is processed by your own computer. The data attached to the tool therefore doesn't leave your computer or the environment of your organization. The tool is privacy-friendly because the data can be processed within the mandate of your organisation and doesn't need to be shared with new parties. The unsupervised bias detection tool can also be hosted locally within your organization. Instructions, including the source code or the web app, can be found on <a href="https://github.com/NGO-Algorithm-Audit/local-first-web-tool" target="_blank">Github</a>.

#### Overview of local-first architecture

<div style="margin-bottom:50px; display: flex; justify-content: center;">
  <img src="/images/BDT/local-first EN.png" alt="drawing" width="100%"/>
</div>

{{< container_close >}}

<!-- Supported by -->

{{< container_open title="Supported by" icon="fas fa-toolbox" id="supported-by" >}}

This tool is developed with support of public and philanthropic organisations.

{{< accordions_area_open id="supported-by-accordion" >}}

{{< accordion_item_open title="Innovation grant Dutch Ministry of the Interior" image="/images/supported_by/BZK.jpg" tag1="2024-25" >}}

##### Description

In partnership with the Dutch Executive Agency for Education and the Dutch Ministry of the Interior, Algorithm Audit has been developing and testing this tool from July 2024 to July 2025, supported by an <a href="https://www.digitaleoverheid.nl/overzicht-van-alle-onderwerpen/innovatie/innovatiebudget/toekenning-innovatiebudget-2024/" target="_blank">Innovation grant</a> from the annual competition hosted by the Dutch Ministry of the Interior. Project progress was shared at a community gathering on 13-02-2025.

![](/images/events/20250213_Demodag2025.jpg)

{{< accordion_item_close >}}

{{< accordion_item_open title="SIDN Fund" image="/images/supported_by/sidn.png" tag1="2024" >}}

##### Description

In 2024, the SIDN Fund <a href="https://www.sidnfonds.nl/projecten/open-source-ai-auditing" target="_blank">supported</a> Algorithm Audit to develop a first demo of the unsupervised bias detection tool.

{{< accordion_item_close >}}

{{< accordions_area_close >}}

{{< container_close >}}

<!-- Awards and acknowledgements -->

{{< container_open title="Awards and acknowledgements" icon="fas fa-medal" id="awards-acknowledgements" >}}

This tool has received awards and is acknowledged by various <a href="https://github.com/NGO-Algorithm-Audit/unsupervised-bias-detection?tab=readme-ov-file#contributing-members" target="_blank">stakeholders</a>, including civil society organisations, industry representatives and academics.

{{< accordions_area_open id="awards-accordion" >}}

{{< accordion_item_open title="Finalist Stanford’s AI Audit Challenge 2023" image="/images/supported_by/HAI.png" tag1="06-2023" >}}

##### Description

Under the name Joint Fairness Assessment Method (JFAM) the unsupervised bias detection tool has been selected as a finalist in <a href="https://hai.stanford.edu/ai-audit-challenge-2023-finalists" target="_blank">Stanford’s AI Audit Competition 2023</a>.

{{< accordion_item_close >}}

{{< accordion_item_open title="OECD Catalogue of Tools & Metrics for Trustworthy AI" image="/images/BDT/oecd_logo.svg" tag1="2024" >}}

##### Description

The unsupervised bias detection tool is part of OECD's <a href="https://oecd.ai/en/catalogue/tools/unsupervised-bias-detection-tool" target="_blank">Catalogue of Tools & Metrics for Trustworthy AI</a>.

{{< accordion_item_close >}}

{{< accordions_area_close >}}

{{< container_close >}}

<!-- Summary -->

{{< container_open title="Summary" icon="fas fa-dot-circle" id="summary" >}}

Key take-aways about unsupervised bias detection tool:

- <span style="color:#005AA7">Quantitative-qualitative research method</span>: Data-driven bias testing combined with the balanced and context-sensitive judgment of human experts;
- <span style="color:#005AA7">Unsupervised bias detection</span>: No user data needed on protected attributes (_unsupervised learning_);
- <span style="color:#005AA7">Anolamy detection</span>: Scalable method based on statistical analysis;
- <span style="color:#005AA7">Detects complex bias</span>: Identifies unfairly treated groups characterized by mixture of features, detects intersectional bias;
- <span style="color:#005AA7">Model-agnostic</span>: Works for all binary classification algorithms and AI systems;
- <span style="color:#005AA7">Open-source and not-for-profit</span>: User friendly and free to use for the entire AI auditing community.

{{< container_close >}}

<!-- Team -->

{{< team id="team" >}}
