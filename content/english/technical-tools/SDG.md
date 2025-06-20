---
type: regular
title: Synthetic data generation tool
subtitle: >
  Tool for generating synthetic data. The tool automatically generates an evaluation report to assess the quality of the generated synthetic data. All data are locally processed without using cloud solutions.
image: /images/svg-illustrations/local-only.svg
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
      url: "#info"
    - title: Technical introduction
      url: "#technical-introduction"
      indent: 1
    - title: Tool
      url: "#web-app"
    - title: Source code
      url: "#source-code"
    - title: Use cases
      url: "#use-cases"
    - title: Privacy and legal aspects
      url: "#privacy-legal"
    - title: Local-only architecture
      url: "#local-only"
    - title: Synthetic data for AI auditing
      url: "#ai-auditing"
    - title: Supported by
      url: "#supported-by"
    - title: Team
      url: "#team"
promo_bar:
  - content: >
      **Do you appreciate the work of Algorithm Audit? ⭐️ us on
      [GitHub](https://github.com/NGO-Algorithm-Audit/unsupervised-bias-detection)**
    id: promo
    iframe: >-
      https://ghbtns.com/github-btn.html?user=NGO-Algorithm-Audit&repo=unsupervised-bias-detection&type=star&count=true
---

<!-- Promobar -->

<div id={{.Get "id" }} class="container-fluid mt-0 p-0">
    <div class="shadow bg-lightblue">
        <div class="row promobar-mobile-desktop-layout">
            <div class="col-12 flex justify-center items-center px-5">
                <!-- Content -->
                <span class="mr-3" style="font-size:16px; color:#005aa7;">
                    <b>👋 Do you also want to start using the tool locally? It's easier than you think! Get in <u><a href="/about/contact/" >contact</a></u> to learn more.</b>    </span>
            </div>
        </div>
    </div>
</div>

<!-- Introduction -->

{{< container_open title="Introduction – Synthetic data generation tool" icon="fas fa-table" id="info" >}}

<br>

#### What is synthetic data?

Synthetic data is artificial data mimicking the original dataset's statistical characteristics without sharing personal data.

#### What data can be processed?

The tool processes all data in table format. The type of data (numerical, categorical, time, etc.) and missing values are automatically detected. The user has several options for how missing values can be processed. More info about how missing values can be treated is provided in the tool.

#### What does the tool return?

The tool generates synthetic data. An evaluation report of the generated data, including various evaluation metrics, is automatically created and can be downloaded as a pdf. The synthetic data can be downloaded in .csv and .json format.

<div style="margin-bottom:25px; display: flex; justify-content: center;">
  <img src="/images/SDG/example_SDG.png" alt="drawing" width="600px"/>
</div>

#### What synthetic data generation methods are supported?

Users can currently choose two methods for generating synthetic data:

1. Classification And Regression Trees (CART); and
2. Gaussian Copula (GC).

By default, CART is used. CART generally produces higher quality synthetic data, but might not work well on datasets with categorical variables with 20+ categories. GC is recommended in those cases. The tool contains a demo data explaing how data are processed. Use the "Demo dataset" in the [web app](/technical-tools/sdg/#web-app).

#### Is my data safe?

Yes! Your data stay on your computer and don't leave your organization’s environment. The tool runs directly in your browser, using your local device's computing power to analyze the data. This setup, called 'local-only', ensures no data are sent to cloud providers or third parties. More information about this local-only architecture can be found [below](/technical-tools/sdg/#local-only). Instructions for hosting local-only tools within your organization are available on <a href="https://github.com/NGO-Algorithm-Audit/local-only-web-tool" target="_blank">Github</a>.

Try the tool below ⬇️

{{< container_close >}}

<!-- Technical introduction -->

{{< container_open isAccordion="true" title="Technical introduction – Synthetic data generation" id="technical-introduction" >}}

<br>

The synthetic data generation tool performs a series of steps:

#### Required preparations by the user:

The user shoulds prepare the following aspects to synthesize data:

- <span style="color:#005AA7">Dataset:</span> Only categorical, numerical, or time data can be processed. Datasets may contain a maximum of 8 columns, must have a header with column names and do not require an index column.
- <span style="color:#005AA7">Method:</span> By default, the CART method is used to generate synthetic data. CART generally produces higher quality synthetic data, but might not work well on datasets with categorical variables with 20+ categories. Use Gaussian Copula in those cases.
- <span style="color:#005AA7">Number of synthetic data points:</span> Number of synthetic data points to be generated by the tool. Due to computational contstraints of browser-based synthetic data generation, the maximum is set to 5.000.

#### Performed by the tool

The following steps are performed by the tool:

##### Step 1. Data types detection:

The tool detects the type of data for each column of the attached dataset (numerical, categorical or datetime).

##### Step 2. Handling missing data:

- <span style="color:#005AA7">Missing at Random (MAR):</span> The probability of data being missing is related to the observed data but not the missing data itself. The missingness can be predicted by other variables in the dataset. Example: Students' test scores are missing, but the missingness is related to their attendance records. For this scenrario missing data is imputed.
- <span style="color:#005AA7">Missing Not at Random (MNAR):</span> The probability of data being missing is related to the missing data itself. There is a systematic pattern to the missingness that is related to the unobserved data. Example: Patients with more severe symptoms are less likely to report their symptoms, leading to missing data that is related to the severity of the symptoms. For this scenrario missing data is imputed.
- <span style="color:#005AA7">Missing Completely at Random (MCAR):</span> The probability of data being missing is completely independent of both observed and unobserved data. There is no systematic pattern to the missingness. Example: A survey respondent accidentally skips a question due to a printing error. In this scenario missing data is removed.

More information on the concepts MCAR, MAR en MNAR can be found in the book cby prof. Stef van Buuren, Utrecht University.

##### Step [unnumbered] Preprocessing:

Transforms all data into numerical format using `LabelEncoder` for less than 10 unique value per categorical column, `OneHotEncoder` for less than 50 unique value per categorical column and `FrequencyEncoding` for other cases. `StandardScaler` is used for numerical data.

##### Step 3. Synthesize method

- <span style="color:#005AA7">CART:</span> The CART (Classification and Regression Trees) method generates synthetic data by learning patterns from real data through a decision tree that splits data into homogeneous groups based on feature values. It predicts averages for numerical data and assigns the most common category for categorical data, using these predictions to create new synthetic points.
- <span style="color:#005AA7">Gaussian Copula:</span> Gaussian Copula works in two main steps: 1. The real data is transformed into a uniform distribution. Correlations between variables are modeled using a multivariate normal distribution (the Gaussian copula); and 2. Synthetic data is created by sampling from this Gaussian copula and transforming the samples back to the original data distributions.

##### Step [unnumbered] Postprocessing:

Encoded data are transformed back to it's original format.

##### Step 4. Evaluation:

The generated synthetic data are evaluated in various ways.

###### Step 4.1 Visualization:

Univariate and bivariate plots are created to compare the generated synthetic data with the real data. For comparing categorical variables, bar charts are plotted. For comparing a numerical and a categorical variables, a <a href="https://en.wikipedia.org/wiki/Violin_plot" target="_blank">violin plot</a> is created. For comparing numercial variables, a <a href="https://en.wikipedia.org/wiki/Local_regression" target="_blank">LOESS plot</a> is shown. For all plots holds: the synthetic data is of high quality when the shape of the distributions in the synthetic data equal the distributions in the real data.

###### Step 4.2 Diagnostic report:

For each column, diagnostic results are computed for the quality of the generated synthetic data. The computed metrics depend on the type of data.

###### Diagnostic results:

For numerical (or datetime) columns the following metrics are computed:

- <span style="color:#005AA7">Missing value similarity:</span> Compares whether the synthetic data has the same proportion of missing values as the real data for a given column;
- <span style="color:#005AA7">Range coverage:</span> Measures whether a synthetic column covers the full range of values that are present in a real column;
- <span style="color:#005AA7">Boundary adherence:</span> Measures whether a synthetic column respects the minimum and maximum values of the real column. It returns the percentage of synthetic rows that adhere to the real boundaries;
- <span style="color:#005AA7">Statistic similarity:</span> Measures the similarity between real column and a synthetic column by comparing the mean, standard deviation and median;
- <span style="color:#005AA7">Kolmogorov–Smirnov (KS) complement:</span> Measures the maximum difference between the cumulative distribution functions (CDFs) of numerical columns in the synthetic and real dataset.

For categorical columns the following metrics are computed:

- <span style="color:#005AA7">Missing value similarity:</span> Compares whether the synthetic data has the same proportion of missing values as the real data for a given column;
- <span style="color:#005AA7">Category coverage:</span> Measures whether a synthetic column covers all the possible categories that are present in a real column;
- <span style="color:#005AA7">Category adherence:</span> Measures whether a synthetic column adheres to the same category values as the real data;
- <span style="color:#005AA7">Total variation (TV) complement:</span> Measures the maximum difference between the cumulative distribution functions (CDFs) of categorical columns in the synthetic and real dataset.

💯 For high-quality synthetic data, all values should be close to 1.0, but at least higher than 0.85.

###### Correlation matrix:

The one-to-one correlations between variables in the synthetic and real data are calculated, indicating the strength and direction of their linear relationships. The correlation matrix of the generated synthetic and real data should roughly display the same patterns.

###### Efficacy metrics:

cComparing real and synthetic datasets for downstream predictive tasks, such as regression and classification. The idea is to train a predictive model on synthetic data and evaluate its performance on real data.

For regression (when the target variable is numerical), the following metrics are computed:

- <span style="color:#005AA7">Mean squared error (MSE):</span> average squared difference between predicted and actual values, quantifying the accuracy of a model's predictions by penalizing larger errors more heavily;
- <span style="color:#005AA7">Mean absolute error (MAE):</span> average magnitude of the errors between predicted and actual values, providing a straightforward assessment of model accuracy without emphasizing large errors;
- <span style="color:#005AA7">R² score:</span> quantifies how well a model's predictions match the actual data by measuring the proportion of variance in the target variable explained by the model.

For classification (when the target variable is categorical), the following metrics are computed:

- <span style="color:#005AA7">Accuracy score:</span> measures the proportion of correctly predicted instances out of the total instances, providing an overall assessment of a model's performance in classification tasks;
- <span style="color:#005AA7">Weighted F1 score:</span> harmonic mean of precision and recall, calculated for each class and weighted by the class's support (number of true instances), providing a balanced performance measure for imbalanced datasets.

###### Privacy metrics:

Computing the _disclosure protection metric_ for synthetic data. This metric measures the proportion of synthetic records that are too similar (within a defined threshold) to real records, posing a disclosure risk.

##### Step 5. Download:

The generated synthetic data can de downloaded as csv and as json file. Evaluation of the synthetic data according to the above metrics can be downloaded as a evaluation report in pdf.

#### Documentation

More documentation about the tool and underlying SDG methods can be found on <a href="https://github.com/NGO-Algorithm-Audit/python-synhtpop" target="_blank">Github</a>.

{{< container_close >}}

<!-- Web app -->

{{< iframe src="https://local-first-bias-detection.s3.eu-central-1.amazonaws.com/synthetic-data.html?lang=en" title="Synthetic data generation tool" icon="fas fa-table" id="web-app" height="800px" >}}

<!-- Promo bar -->

{{< promo_bar index="0" >}}

<!-- Source code -->

{{< container_open title="Source code" id="source-code" icon="fas fa-toolbox" >}}

- The source code of the synthetic data generation methods are available on <a href="https://github.com/NGO-Algorithm-Audit/python-synhtpop" target="_blank">Github</a> and as a <a href="https://pypi.org/project/unsupervised-bias-detection/" target="_blank">pip package</a>: `pip install python-synthpop`.
  [![!pypi](https://img.shields.io/pypi/v/python-synthpop?logo=pypi&color=blue)](https://pypi.org/project/python-synthpop/)
- The architecture to run local-only web apps is also available on <a href="https://github.com/NGO-Algorithm-Audit/local-only-web-tool" target="_blank">Github</a>.

{{< container_close >}}

<!-- Use cases -->

{{< container_open title="SDG use cases" icon="fas fa-history" id="use-cases" >}}

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

<!-- AI auditing -->

{{< container_open title="How can SDG be used for AI auditing?" icon="fas fa-project-diagram" id="ai-auditing" >}}

When auditing algorithmic-driven decision-making processes, one of the most immediate questions is the representativeness of the source data. However, privacy poses a hurdle to sharing data with external parties to assess the representativeness of the data. Absent access to source data means that stakeholders – such as people whose data is stored and independent experts – cannot scrutinize it for potential biases. Consequently, the evaluation of data used for decision-making processes, and training of AI-systems, relies on a small group of experts. If evaluation processes by this small group are not performed carefully, this can have severe downstream consequences, such as bias and skewed. This harms public trust in technology and in the organisations that deploy these digital methods.

Synthetic data generation (SDG) offers a promising solution. By creating data that mimics the properties of the original dataset without containing any identifiable personal information, SDG allows for broader participation in assessing data representativeness while preserving privacy. It is considered a safe approach for the wider release of privately held data, as it contains no identifiable trace of the personal data it was generated from.

{{< container_close >}}

<!-- Supported by -->

{{< container_open title="Supported by" icon="fas fa-toolbox" id="supported-by">}}

This local-first synthetic data generation tool is developed with support of public and philanthropic organisations.

{{< accordions_area_open>}}

{{< accordion_item_open title="Innovation grant Dutch Ministry of the Interior" image="/images/partner logo-cropped/MinBZK.png" tag1="2024-25" >}}

##### Description

In partnership with the Dutch Executive Agency for Education and the Dutch Ministry of the Interior, Algorithm Audit has been developing and testing this tool from July 2024 to July 2025, supported by an <a href="https://www.digitaleoverheid.nl/overzicht-van-alle-onderwerpen/innovatie/innovatiebudget/toekenning-innovatiebudget-2024/" target="_blank">Innovation grant</a> from the annual competition hosted by the Dutch Ministry of the Interior. Project progress was shared at a community gathering on 13-02-2025. A first version of the tools are launched during a webinar on 10-06-2025.

![](/images/events/20250213_Demodag2025.jpg)

{{< accordion_item_close >}}

{{< accordion_item_open title="SIDN Fund" image="/images/partner logo-cropped/SIDN.png" tag1="2024" >}}

##### Description

In 2024, the SIDN Fund <a href="https://www.sidnfonds.nl/projecten/open-source-ai-auditing" target="_blank">supported</a> Algorithm Audit to develop a first demo of the synthetic data generation tool.

{{< accordion_item_close >}}

{{< accordions_area_close >}}

{{< container_close >}}

<!-- Team -->

{{< team id="team" >}}
