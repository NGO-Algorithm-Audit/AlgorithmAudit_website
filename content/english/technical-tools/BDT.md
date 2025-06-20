---
title: Unsupervised bias detection tool
subtitle: >
  A statistical tool that identifies groups where an AI system or algorithm
  shows deviating performance, potentially indicating unfair treatment. The tool
  informs which disparities need to be examimed manually by domain experts.
image: /images/svg-illustrations/illustration_cases.svg
quick_navigation:
  title: Content overview
  links:
    - title: Introduction
      url: '#info'
    - title: Technical introduction
      url: '#technical-introduction'
      indent: 1
    - title: Tool
      url: '#web-app'
    - title: Source code
      url: '#source-code'
    - title: Scientific paper and audit report
      url: '#scientific-paper'
    - title: Local-only architecture
      url: '#local-only'
    - title: Supported by
      url: '#supported-by'
    - title: Awards and acknowledgements
      url: '#awards-acknowledgements'
    - title: Summary
      url: '#summary'
    - title: Team
      url: '#team'
promo_bar:
  - content: "**\U0001F44B Do you also want to start using the tool locally? It's easier than you think! Get in [contact](/about/contact/) to learn more.**\n"
    id: promo-contact
  - content: >
      **Do you appreciate the work of Algorithm Audit? ⭐️ us on
      [GitHub](https://github.com/NGO-Algorithm-Audit/unsupervised-bias-detection)**
    id: promo
    iframe: >-
      https://ghbtns.com/github-btn.html?user=NGO-Algorithm-Audit&repo=unsupervised-bias-detection&type=star&count=true
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
        Freelance software developer and AI researcher
    - image: /images/people/MJorgensen.jpeg
      name: Mackenzie Jorgensen PhD
      bio: |
        Researcher Alan Turing Institute, London
---

<!-- Promobar -->

{{< promo_bar index="0" >}}

<!-- Introduction -->

{{< container_open title="Introduction – Unsupervised bias detection tool" icon="fas fa-search " id="info" isAccordion="" >}}

<br>

#### What does the tool do?

The tool helps find groups where an AI system or algorithm performs differently, which could indicate unfair treatment. This type of monitoring is called *anomaly detection*. It detect deviations using a technique called <a href="https://en.wikipedia.org/wiki/Cluster_analysis" target="_blank">clustering</a>, which groups similar data points together (in clusters). The tool doesn’t need information like gender, nationality, or ethnicity to find deviations. Instead, it uses an `bias variable` to measure deviations in the performace of the system, which you can choose based on your data.

#### What results does it give?

The tool finds groups (clusters) where performance of the algorithmic system is significantly deviating. It highlights the group with the worst bias variables and creates a report called a bias analysis report, which you can download as a PDF. You can also download all the identified groups (clusters) in a .json file. Additionally, the tool provides visual summaries of the results, helping experts dive deeper into the identified deviations. An example can be found below. {{< tooltip tooltip_content="The figure below shows that cluster 0, the cluster with systemic deviating bias variable, includes a higher-than-average proportion of African-American and a lower-than-average proportion of Caucasian people. For other demographic groups, cluster 0 reflects an average distribution. Additional details about this example are available in the demo dataset." >}}

<div style="margin-bottom:25px; display: flex; justify-content: center;">
  <img src="/images/BDT/example_COMPAS.png" alt="drawing" width="600px"/>
</div>

#### What kind of data does it work with?

The tool works with data in a table format, consisting solely of numbers or categories. You need to pick one column in the data to use as the `bias variable`. This column should have numbers only, and you’ll specify whether a higher or lower number is better. For example, if you’re looking at error rates, lower numbers are better. For accuracy, higher numbers are better. The tool also comes with a demo dataset you can use by clicking "Demo dataset".

<div>
  <p><u>Example of numerical dataset</u>:</p>
  <style type="text/css">.tg{border-collapse:collapse;border-spacing:0}.tg td{border-color:#000;border-style:solid;border-width:1px;font-size:14px;overflow:hidden;padding:10px 5px;word-break:normal}.tg th{border-color:#000;border-style:solid;border-width:1px;font-size:14px;font-weight:400;overflow:hidden;padding:10px 5px;word-break:normal}.tg .tg-uox0{border-color:#grey;font-weight:700;text-align:left;vertical-align:top}.tg .tg-uoz0{border-color:#grey;text-align:left;vertical-align:top} .tg-1wig{font-weight:700;text-align:left;vertical-align:top}.tg .tg-0lax{text-align:left;vertical-align:top}</style>
  <table class="tg">
    <thead>
      <tr>
      <th class="tg-uox0">Age</th><th class="tg-uox0">Income</th><th class="tg-uox0">...</th><th class="tg-uox0">Number of cars</th><th class="tg-uox0"><span style="font-family:SFMono-Regular,Menlo,Monaco,Consolas,liberation mono,courier new,monospace; color:#e83e8c; font-weight:300">Selected for investigation</span></th>
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

#### Is my data safe?

Yes! Your data stay on your computer and don't leave your organization’s environment. The tool runs directly in your browser, using your local device's computing power to analyze the data. This setup, called 'local-only', ensures no data are sent to cloud providers or third parties. More information about this local-only architecture can be found [below](/technical-tools/bdt/#local-only). Instructions for hosting local-only tools within your organization are available on <a href="https://github.com/NGO-Algorithm-Audit/local-only-web-tool" target="_blank">Github</a>.

Try the tool below ⬇️

{{< container_close >}}

<!-- Technical details -->

{{< container_open isAccordion="true" title="Technical introduction – Unsupervised bias detection tool" id="technical-introduction" >}}

<br>

#### Which steps does the tool undertake?

The unsupervised bias detection tool performs a series of steps:

##### Required preparations by the user:

<span style="color:#005AA7">Step 1. Data:</span> the user shoulds prepare the following aspects relating to the processed data:

* <span style="color:#005AA7">Dataset:</span> The data must be provided in a tabular format. Any missing values should be removed or replaced.
* <span style="color:#005AA7">Type of data:</span> All columns, except the bias variable column, should have uniform data types, e.g., either all numerical or all categorical. The user selects whether numerical of categorical data are processed.
* <span style="color:#005AA7">Bias variable:</span> A column should be selected from the dataset to serve as the `bias variable`, which needs to be numerical. In step 4, clustering will be performed based on these numerical values. Examples include metrics such as "being classified as high risk", "error rate" or "selected for an investigation".

<span style="color:#005AA7">Step 2. Parameters:</span> the user shoulds set the following hyperparameters:

* <span style="color:#005AA7">Iterations:</span> How often the data are allowed to be split in smaller clusters, by default 10 iterations are selected.
* <span style="color:#005AA7">Minimal cluster size:</span> How many datapoints the identified clusters may contain, by deafault set to 1% of the number of rows in the attached dataset. More guidance on well-informed choice of the minimal cluster size can be found in section 3.3 of our [scientific paper](/technical-tools/bdt/#scientific-paper).
* <span style="color:#005AA7">Bias variable interpretation:</span> How the bias variable should be interpreted. For instance, when error rate or misclassifications are chosen as the bias variable, a lower value is preferred, as the goal is to minimize errors. Conversely, when accuracy or precision is selected as the bias variable, a higher value is preferred, reflecting the aim to maximize performance.

##### Performed by the tool:

<span style="color:#005AA7">Step 3. Train-test data:</span> The dataset is divided into train and test subset, following a 80-20 ratio.

<span style="color:#005AA7">Step 4. Hierarchical Bias-Aware Clustering (HBAC):</span> The HBAC algorithm (detailed below) is applied to the train dataset. The centroids of the resulting clusters are saved and later used to assign cluster labels to data points in the test dataset.

<span style="color:#005AA7">Step 5. Testing cluster differences wrt. bias variable:</span> Statistical hypothesis testing is performed to evaluate whether the bias variable differ significantly in the most deviating cluster compared to the rest of the dataset. A t-test is used to compare the means of the bias variable.

<span style="color:#005AA7">Step 6. Testing cluster differences wrt. features:</span> If a statistically significant difference in bias variable between the most deviating cluster and the rest of the dataset occurs, feature diffences are examined. For this, also statistical hypothesis testing is used, namely a t-test in case numercial data and Pearson’s 𝜒2-test in case categorical data are processed. For multiple hypothesis testing, Bonferonni correction should be applied. Further details can be found in section 3.4 of our [scientific paper](/technical-tools/bdt/#scientific-paper).

A schematic overview of the above steps is depicted below.

<div style="margin-bottom:50px; display: flex; justify-content: center;">
  <img src="/images/BDT/Overview_tool_EN.png" alt="drawing" width="800px"/>
</div>

#### How does the clustering algorithm work?

The *Hierarchical Bias-Aware Clustering* (HBAC) algorithm identifies clusters in the provided dataset based on a user-defined `bias variable`. The objective is to find clusters with low variation in the bias variable within each cluster. Variation in the bias variable between clusters should be high. HBAC iteratively finds clusters in the data using k-means (for numerical data) or k-modes clustering (for categorical data). For the initial split, HBAC takes the full dataset and splits it in two clusters. Cluster `C` – with the highest standard deviation of the bias variable – is selected. Then, cluster `C` is divided into two candidate clusters `C'` and `C''`'. If the average bias variable in either candidate cluster exceed the the average bias variable in `C`, the candidate cluster with highest bias variable is selected as a new cluster. This process repeats until the maximum number of iterations (`max_iterations`) is reached or the resulting cluster fails to meet the minimum size requirement (`n_min`). The pseudo-code of the HBAC algorithm is provided below.

<div style="display: flex; justify-content: center;">
  <img src="/images/BDT/pseudo_code_HBAC.png" alt="drawing" width="800px"/>
</div>

The HBAC-algorithm is introduced by Misztal-Radecka and Indurkya in a [scientific article](https://www.sciencedirect.com/science/article/abs/pii/S0306457321000285) as published in *Information Processing and Management* in 2021. Our implementation of the HBAC-algorithm advances this implementation by proposing additional methodological checks to distinguish real singals from noise, such as sample splitting, statistical hypothesis testing and measuring cluster stability. Algorithm Audit's implementation of the algorithm can be found in the <a href="https://github.com/NGO-Algorithm-Audit/unsupervised-bias-detection/blob/master/README.md" target="_blank">unsupervised-bias-detection</a> pip package.

#### How should the results of the tool be interpreted?

The HBAC algorithm maximizes the difference in bias variable between clusters. To prevent incorrect conclusions that there are unwanted deviations in the decision-making process under review when there truly is none, we split the dataset in training and test data, and hypothesis testing prevents us from (wrongly) concluding that there is a difference in bias variable while there is none. If a statistically significant deviation is detected, the outcome of the tool serves as a starting point for human experts to assess the identified deviations in the decision-making processes.

{{< container_close >}}

<!-- Web app -->

{{< iframe title="Web app – Unsupervised bias detection tool" icon="fas fa-cloud" id="web-app" src="https://local-first-bias-detection.s3.eu-central-1.amazonaws.com/bias-detection.html?lang=en" height="770px" >}}

<!-- Promo bar -->

{{< promo_bar index="1" >}}

<!-- Source code -->

{{< container_open title="Source code" id="source-code" icon="fas fa-toolbox" >}}

* The source code of unsupervised bias detection using the HBAC algorithm is available on <a href="https://github.com/NGO-Algorithm-Audit/unsupervised-bias-detection" target="_blank">Github</a> and as a <a href="https://pypi.org/project/unsupervised-bias-detection/" target="_blank">pip package</a>: `pip install unsupervised-bias-detection`.
* The architecture to run local-only web apps is also available on <a href="https://github.com/NGO-Algorithm-Audit/local-only-web-tool" target="_blank">Github</a>.

{{< container_close >}}

<!-- Scientific paper and audit report -->

{{< container_open icon="far fa-file" title="Scientific paper and audit report" id="scientific-paper" >}}

The unsupervised bias detection tool has been applied in practice to audit a Dutch public sector risk profiling algorithm. Our [team](/technical-tools/bdt/#team) documented this case in a scientific paper. The tool identified proxies for students with a non-European migration background in a risk profiling algorithm. Specifically the most deviating cluster contains above average students following vocational education and has higher-than-average students living far away from their parent(s)' address, which turned out to be correlate significantly with students with a non-European migration background. Deviations in the control process could therefore also have been found if aggregation statistics on the origin of students had not been available. The results are also described in Appendix A of the below report. This report was sent to <a href="https://www.tweedekamer.nl/kamerstukken/detail?id=2024D20431&did=2024D20431" target="_blank">Dutch parliament</a> on 22-05-2024.

{{< embed_pdf url="/pdf-files/technical-tools/UBDT/20250205 Auditing a Dutch Public Sector Risk Profiling Algorithm.pdf" url2="/pdf-files/algoprudence/TA_AA202402/TA_AA202402_Addendum_Preventing_prejudice.pdf" width_mobile_pdf="12" width_desktop_pdf="6" >}}

{{< container_close >}}

<!-- Local-only architecture -->

{{< container_open title="Local-only architecture" icon="fas fa-map-pin" id="local-only" >}}

<br>

#### What is local-only?

Local-only computing is the opposite of cloud computing: data are not uploaded to third-parties, such as a cloud providers, but are processed by your own computer. The data attached to the tool therefore don't leave your computer or the environment of your organization. The tool is privacy-friendly because the data can be processed within the mandate of your organisation and doesn't need to be shared with new parties. The unsupervised bias detection tool can also be hosted locally within your organization. Instructions, including the source code or the web app, can be found on <a href="https://github.com/NGO-Algorithm-Audit/local-only-web-tool" target="_blank">Github</a>.

#### Overview of local-only architecture

<div style="margin-bottom:50px; display: flex; justify-content: center;">
  <img src="/images/BDT/local-only-infrastructure EN.png" alt="drawing" width="100%"/>
</div>

#### Explainer – Local-only tools for AI validation

{{< embed_pdf url="/pdf-files/technical-tools/UBDT/20250605 Local-first carrousel.pdf" width_mobile_pdf="12" width_desktop_pdf="6" >}}

{{< container_close >}}

<!-- Supported by -->

{{< container_open title="Supported by" icon="fas fa-toolbox" id="supported-by" >}}

This tool is developed with support of public and philanthropic organisations.

{{< accordions_area_open id="supported-by-accordion" >}}

{{< accordion_item_open title="Innovation grant Dutch Ministry of the Interior" image="/images/partner logo-cropped/MinBZK.png" tag1="2024-25" >}}

##### Description

In partnership with the Dutch Executive Agency for Education and the Dutch Ministry of the Interior, Algorithm Audit has been developing and testing this tool from July 2024 to July 2025, supported by an <a href="https://www.digitaleoverheid.nl/overzicht-van-alle-onderwerpen/innovatie/innovatiebudget/toekenning-innovatiebudget-2024/" target="_blank">Innovation grant</a> from the annual competition hosted by the Dutch Ministry of the Interior. Project progress was shared at a community gathering on 13-02-2025.

![](/images/events/20250213_Demodag2025.jpg)

{{< accordion_item_close >}}

{{< accordion_item_open title="SIDN Fund" image="/images/partner logo-cropped/SIDN.png" tag1="2024" >}}

##### Description

In 2024, the SIDN Fund <a href="https://www.sidnfonds.nl/projecten/open-source-ai-auditing" target="_blank">supported</a> Algorithm Audit to develop a first demo of the unsupervised bias detection tool.

{{< accordion_item_close >}}

{{< accordions_area_close >}}

{{< container_close >}}

<!-- Awards and acknowledgements -->

{{< container_open title="Awards and acknowledgements" icon="fas fa-medal" id="awards-acknowledgements" >}}

This tool has received awards and is acknowledged by various <a href="https://github.com/NGO-Algorithm-Audit/unsupervised-bias-detection?tab=readme-ov-file#contributing-members" target="_blank">stakeholders</a>, including civil society organisations, industry representatives and academics.

{{< accordions_area_open id="awards-accordion" >}}

{{< accordion_item_open title="Finalist Stanford’s AI Audit Challenge 2023" image="/images/partner logo-cropped/StanfordHAI.png" tag1="06-2023" >}}

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

* <span style="color:#005AA7">Quantitative-qualitative research method</span>: Data-driven bias testing combined with the balanced and context-sensitive judgment of human experts;
* <span style="color:#005AA7">Unsupervised bias detection</span>: No data needed on protected attributes, e.g., gender or ethnicity (*unsupervised learning*);
* <span style="color:#005AA7">Anolamy detection</span>: Scalable method based on statistical analysis;
* <span style="color:#005AA7">Detects complex bias</span>: Identifies unfairly treated groups characterized by mixture of features, detects intersectional bias;
* <span style="color:#005AA7">Model-agnostic</span>: Works for all algorithms and AI systems;
* <span style="color:#005AA7">Open-source and not-for-profit</span>: User friendly and free to use for the entire AI auditing community.

{{< container_close >}}

<!-- Team -->

{{< team id="team" >}}
