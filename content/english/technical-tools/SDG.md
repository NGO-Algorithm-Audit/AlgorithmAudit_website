---
type: regular
title: Synthetic data generation tool
subtitle: >
  Local-first tool to generate synthetic data. The tool automatically generates an evaluation report to assess the quality of the generated data. All data are locally processed without using cloud solutions.
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
    - title: Source code
      url: '#source-code'
    - title: Synthetic data for AI auditing
      url: '#ai-auditing'
    - title: Use cases
      url: '#use-cases'
    - title: Privacy and legal aspects
      url: '#privacy-legal'
    - title: Local-first computing
      url: '#local-first'
    - title: Supported by
      url: '#supported-by'
    - title: Team
      url: '#team'
---



<!-- Introduction -->

{{< container_open title="Introduction – Synthetic data generation tool" icon="fas fa-table" id="info" >}}

<br>

#### What is synthetic data?
Synthetic data is artificial data mimicking the original dataset's statistical characteristics without sharing personal data.

#### What data can be processed?
The tool processes all data in table format. The type of data (numerical, categorical, time, etc.) and missing values are automatically detected. The user has several option how missing values can be processed. More info how missing values can be treated is provided in the tool. 

#### What synthetic data generation methods are supported?
Users can currently choose two methods for generating synthetic data: 
1. Classification And Regression Trees (CART); and 
2. Gaussian Copula (GC). 

By default, CART is used. CART generally produces higher quality synthetic data, but might not work well on datasets with categorical variables with 20+ categories. GC is recommended in those cases. The tool contains a demo data for which output is generated. Use the ['Try it out'](/technical-tools/sdg/#web-app) button.

#### What does the tool return?
The tool generates synthetic data. An evaluation report of the generated data, including various evaluation metrics, is automatically created and can be downloaded as a pdf. The synthetic data can be downloaded in .csv and .json format. 

#### How is my data processed?
The tool is privacy-friendly because the data are processed entirely within the browser. The data does not leave your computer or the environment of your organization. The tool utilizes the computing power of your own computer to analyze the data. This type of browser-based software is referred to as [*local-first*](/technical-tools/sdg/#local-first). The tool does not upload data to third parties, such as cloud providers. Instructions on how the tool and the local-first architecture can be hosted locally within your own organization can be found on <a href="https://github.com/NGO-Algorithm-Audit/local-first-web-tool" target="_blank">Github</a>.

Try the tool below ⬇️

{{< container_close >}}



<!-- Web app -->

{{< iframe src="https://local-first-bias-detection.s3.eu-central-1.amazonaws.com/synthetic-data.html?lang=en" title="Synthetic data generation tool" icon="fas fa-search" id="web-app" height="800px" >}}



<!-- Promo bar -->

{{< promo_bar content="Do you appreciate the work of Algorithm Audit? Give us a ⭐️ on" id="promo" >}}



<!-- Source code -->

{{< container_open title="Source code" id="source-code" icon="fas fa-toolbox" >}}

- The source code of the synthetic data generation methods are available on <a href="https://github.com/NGO-Algorithm-Audit/python-synhtpop" target="_blank">Github</a> and as a <a href="https://pypi.org/project/unsupervised-bias-detection/" target="_blank">pip package</a>: `pip install python-synthpop`. 
[![!pypi](https://img.shields.io/pypi/v/python-synthpop?logo=pypi\&color=blue)](https://pypi.org/project/python-synthpop/)

- The architecture to run web apps local-first is also available on <a href="https://github.com/NGO-Algorithm-Audit/local-first-web-tool" target="_blank">Github</a>.

{{< container_close >}}



<!-- AI auditing -->

{{< container_open title="How can SDG be used for AI auditing?" icon="fas fa-project-diagram" id="ai-auditing" >}}

When auditing algorithmic-driven decision-making processes, one of the most immediate questions is the representativeness of the source data. However, privacy poses a hurdle to sharing data with external parties to assess the representativeness of the data. Absent access to source data means that stakeholders – such as people whose data is stored and independent experts – cannot scrutinize it for potential biases. Consequently, the evaluation of data used for decision-making processes, and training of AI-systems, relies on a small group of experts. If evaluation processes by this small group are not performed carefully, this can have severe downstream consequences, such as bias and skewed. This harms public trust in technology and in the organisations that deploy these digital methods.

Synthetic data generation (SDG) offers a promising solution. By creating data that mimics the properties of the original dataset without containing any identifiable personal information, SDG allows for broader participation in assessing data representativeness while preserving privacy. It is considered a safe approach for the wider release of privately held data, as it contains no identifiable trace of the personal data it was generated from.

Synthetic data generation (SDG) offers a solution. By creating artificial data that mimics the properties of the original dataset without sharing personal information, SDG enables broader data sharing. It is considered a safe approach for wider data dissemination, as it contains no personally identifiable information.

{{< container_close >}}



<!-- Use cases -->

{{< container_open title="Has SDG been used in the past?" icon="fas fa-history" id="use-cases" >}}

For two reasons, the use of synthetic data has long been hindered:
1. <span style="color:#005AA7">Privacy risks</span> – Concerns, particularly among legal professionals, existed about the risks of personal data being exposed when sharing synthetic data. Research and practical examples have demonstrated that these risks can be mitigated. See the attached [memo](/technical-tools/sdg/#privacy-legal) below for more background information on the legal aspects of synthetic data generation.
2. <span style="color:#005AA7">Cloud dependencies risks</span> – Many existing (commercial) APIs rely on cloud-based software, making them unsuitable for public organizations, as citizen data cannot simply be uploaded to cloud platforms. [Local-first](/technical-tools/sdg/#local-first) data processing offers a solution to this problem. With this tool, synthetic data can be generated directly in the browser. The data does not leave the user's computer or the organization's environment.

In sum, recent use cases have shown that synthetic data can be safely shared and generated without the involvement of a cloud provider. It is time to scale up so that stakeholders can gain more and better insights into the data managed by government organizations.

#### Applications
<a href="https://www.lighthousereports.com/suspicion-machines-methodology/" target="_blank">Lighthouse Reports</a> was able to publicly share unintentionally obtained data using synthetic data, revealing bias in a dataset from the Municipality of Rotterdam. This dataset was used for machine learning-driven risk profiling in the context of social welfare re-examination.

#### AI Act
Additionally, Article 10(5) of the AI Act includes a specific provision regarding the use of synthetic data for bias detection and mitigation. It requires AI system providers to first investigate bias using synthetic or anonymized data, rather than directly processing "special categories of personal data."

{{< container_close >}}


<!-- Privacy en legal aspects synthetic tabular data -->

{{< container_open icon="far fa-file" title="Privacy en legal aspects synthetic tabular data" id="privacy-legal" >}}

{{< embed_pdf url="/pdf-files/technical-tools/SDG/Memo Privacy and Legal Aspects of Synthetic Data.pdf" width_mobile_pdf="12" width_desktop_pdf="6" >}}

{{< container_close >}}


<!-- Local-first architecture -->

{{< container_open title="Local-first architecture" icon="fas fa-map-pin" id="local-first" >}}

<br>

#### What is local-first computing?
Local-first computing is the opposite of cloud computing: the data are not uploaded to third-parties, such as a cloud providers, and are processed by your own computer. The data attached to the tool therefore don't leave your computer or the environment of your organization. The tool is privacy-friendly because the data can be processed within the mandate of your organisation and don't need to be shared with new parties. This synthetic data generation tool can also be hosted locally within your organization. Instructions for local hosting, including the source code or the web app, can be found on <a href="https://github.com/NGO-Algorithm-Audit/local-first-web-tool" target="_blank">Github</a>.

#### Overview of local-first architecture

<div style="margin-bottom:50px; display: flex; justify-content: center;">
  <img src="/images/BDT/local-first EN.png" alt="drawing" width="100%"/>
</div>

{{< container_close >}}



<!-- Supported by -->

{{< container_open title="Supported by" icon="fas fa-toolbox" id="supported-by">}}

This local-first synthetic data generation tool is developed with support of public and philanthropic organisations.

{{< accordions_area_open>}}

{{< accordion_item_open title="Innovation grant Dutch Ministry of the Interior" image="/images/supported_by/BZK.jpg" tag1="2024-25" >}}

##### Description
In partnership with the Dutch Executive Agency for Education and the Dutch Ministry of the Interior, Algorithm Audit has been developing and testing this tool from July 2024 to July 2025, supported by an <a href="https://www.digitaleoverheid.nl/overzicht-van-alle-onderwerpen/innovatie/innovatiebudget/toekenning-innovatiebudget-2024/" target="_blank">Innovation grant</a> from the annual competition hosted by the Dutch Ministry of the Interior. Project progress was shared at a community gathering on 13-02-2025. A first version of the tools are launched during a webinar on 10-06-2025.

![](/images/events/20250213_Demodag2025.jpg)

{{< accordion_item_close >}}

{{< accordion_item_open title="SIDN Fund" image="/images/supported_by/sidn.png" tag1="2024" >}}

##### Description

In 2024, the SIDN Fund <a href="https://www.sidnfonds.nl/projecten/open-source-ai-auditing" target="_blank">supported</a> Algorithm Audit to develop a first demo of the synthetic data generation tool.

{{< accordion_item_close >}}

{{< accordions_area_close >}}

{{< container_close >}}



<!-- Team -->

{{< team id="team" >}}