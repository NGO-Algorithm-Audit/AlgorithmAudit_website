---
title: Bias detectie tool
subtitle: >
  Algorithm Audit's bias detectie tool identificeert mogelijk ongelijk
  behandelde groepen door een AI-systeem middels statistiek. De tool informeert
  de kwalitatieve doctrine van het recht en de ethiek welke afwijkingen in
  algoritmische systemen handmatig onderzocht moeten worden. Algorithm Audit
  combineert kwantitatieve en kwalitatieve methoden om keuzes te maken oven
  eerlijke AI, ook wel onze <a
  href="https://github.com/NGO-Algorithm-Audit/Bias_scan" target="_blank">joint
  fairness assessment method (JFAM)</a> genaamd.
image: /images/svg-illustrations/illustration_cases.svg
type: bias-detection-tool
web_app:
  title: Web app
  icon: fas fa-cloud
  id: web-app
---

{{< container_open title="Bias detectie tool – Wat is het?" icon="fas fa-search" id="info" >}}

De bias detectie tool identificeert mogelijk ongelijk behandelde groepen door een AI-systeem. De tool werkt momenteel alleen voor AI-systemen die individuen in twee groepen opdelen, bijvoorbeeld de voorspelling of een financiële transactie wel/niet risicovol is. De tool vindt groepen gebruikers die door het algoritme systematisch een afwijkende voorspelling krijgen. Deze afwijking wordt berekend aan de hand van een bepaalde maat, bijvoorbeeld de hoeveelheid valspositieven (het algoritme voorspelt dat de financiële transactie verdacht is, maar is dat niet), valsnegatieven (het algoritme voorspelt dat de financiële transactie niet-verdacht is, maar is dat wel) of een combinatie van deze twee. De tool maakt gebruik van [clustering](https://nl.wikipedia.org/wiki/Clusteranalyse) (unsupervised machine learning), wat betekent dat geen toegang nodig is tot de bijzondere persoonsgegevens van individuen – zoals geslacht, nationaliteit of etniciteit – om afwijkingen met betrekking tot deze gronden te detecteren. Omdat de tool gebruik maakt van statistiek is het in staat om hoger-dimensionale vormen van ogenschijnlijk neutraal onderscheid – ook wel meervoudige proxy of intersectionele discriminatie genoemd – te detecteren.

Via onderstaande web app kan de tool direct worden gebruikt. Mits de geüploade data voldoet aan de hieronder gespecificeerde structuur, voert de tool direct een clusteranalyse uit en retourneert het cluster met de grootste afwijking (volgens de gekozen metriek) naar de browser. De resultaten kunnen worden gedownload als pdf-bestand. 

Gebruik de tool hieronder ⬇️

{{< container_close >}}

{{< web_app >}}

{{< container_open title="Finalist Stanford’s AI Audit Challenge 2023" icon="fas fa-medal" id="finalist" >}}

Met de inzending Joint Fairness Assessment Method (JFAM) is Algorithm Audit's bias detectie tool geselecteerd als finalist voor [Stanford’s AI Audit Competition 2023](https://hai.stanford.edu/ai-audit-challenge-2023-finalists).

{{< image image="/images/supported_by/HAI.png" alt="Stanford's AI Audit Challenge 2023" caption="Stanford's AI Audit Challenge 2023" width="6" >}}

{{< container_close >}}

{{< container_open title="Hierarchisch Bias-Bewust Clustering (HBAC) algoritme" icon="fas fa-code-branch" id="HBAC" >}}

De bias detectie tool werkt momenteel alleen voor categorische data en clustert volgens een hierarchisch schema input data met behulp van k-means clustering algoritme. Op termijn kan de tool ook numerieke data verwerken volgens k-modes clustering. De originele *Hierarchical Bias-Aware Clustering* (HBAC) methode is geintroduceerd bij Misztal-Radecka and Indurkya in een wetenschappelijk artikel in *Information Processing and Management* (2021) [\[link\]](https://www.sciencedirect.com/science/article/abs/pii/S0306457321000285). Onze implementatie van het HBAC-algoritme is open source en kan worden gevonden in [Github.](https://github.com/NGO-Algorithm-Audit/AI_Audit_Challenge)

[Download](https://github.com/NGO-Algorithm-Audit/Bias_scan/blob/master/classifiers/BERT_disinformation_classifier/test_pred_BERT.csv) een voorbeeld dataset om de bias scan tool te gebruiken.

{{< container_close >}}

{{< container_open title="Input data" icon="fas fa-database" id="input-data" >}}

What input does the bias scan tool need? A .csv file of max. 1GB with feature columns, predicted labels by the classifier and ground truth labels. Only the name of ‘pred\_label’ and ’truth\_label’ are of importance, not the naming or order of the feature columns. All column values should be numeric and unscaled.

* Features: unscaled numeric values, e.g., feat\_1, feat\_2, …, feat\_n;
* Predicted label: 0 or 1;
* Truth label: 0 or 1;
* Bias metric: False Positive Rate (FPR), False Negative Rate (FNR) or Accuracy.

<div><p><u>Data snippet</u>:</p><style type="text/css">.tg{border-collapse:collapse;border-spacing:0}.tg td{border-color:grey;border-style:solid;border-width:1px;font-size:14px;overflow:hidden;padding:10px 5px;word-break:normal}.tg th{border-color:#grey;border-style:solid;border-width:1px;font-size:14px;font-weight:400;overflow:hidden;padding:10px 5px;word-break:normal}.tg .tg-uox0{border-color:#grey;font-weight:700;text-align:left;vertical-align:top}.tg .tg-uoz0{border-color:#grey;text-align:left;vertical-align:top}</style><table class="tg"><thead><tr><th class="tg-uox0">feat_1</th><th class="tg-uox0">feat_2</th><th class="tg-uox0">...</th><th class="tg-uox0">feat_n</th><th class="tg-uox0">pred_label</th><th class="tg-uox0">truth_label</th></tr></thead><tbody><tr><td class="tg-uoz0">10</td><td class="tg-uoz0">1</td><td class="tg-uoz0">...</td><td class="tg-uoz0">0.1</td><td class="tg-uoz0">1</td><td class="tg-uoz0">1</td></tr><tr><td class="tg-uoz0">20</td><td class="tg-uoz0">2</td><td class="tg-uoz0">...</td><td class="tg-uoz0">0.2</td><td class="tg-uoz0">1</td><td class="tg-uoz0">0</td></tr><tr><td class="tg-uoz0">30</td><td class="tg-uoz0">3</td><td class="tg-uoz0">...</td><td class="tg-uoz0">0.3</td><td class="tg-uoz0">0</td><td class="tg-uoz0">0</td></tr></tbody></table><br><p><u>Overview of supported bias metrics</u>:</p><style type="text/css">.tg{border-collapse:collapse;border-spacing:0}.tg td{border-color:#000;border-style:solid;border-width:1px;font-size:14px;overflow:hidden;padding:10px 5px;word-break:normal}.tg th{border-color:#000;border-style:solid;border-width:1px;font-size:14px;font-weight:400;overflow:hidden;padding:10px 5px;word-break:normal}.tg .tg-1wig{font-weight:700;text-align:left;vertical-align:top}.tg .tg-0lax{text-align:left;vertical-align:top}</style><table class="tg"><thead><tr><th class="tg-1wig">Metric</th><th class="tg-1wig">Description</th></tr></thead><tbody><tr><td class="tg-0lax">False Positive<br>Rate (FPR)</td><td class="tg-0lax"><span style="font-weight:400;font-style:normal;text-decoration:none">The bias scan tool finds the cluster for which most true labels are predicted to</span><br><span style="font-weight:400;font-style:normal;text-decoration:none">be false, proportional to all true labels (False Positive Rate).</span></td></tr><tr><td class="tg-0lax"><span style="font-weight:400;font-style:normal;text-decoration:none">False Negative</span><br><span style="font-weight:400;font-style:normal;text-decoration:none">Rate (FN</span>R)</td><td class="tg-0lax"><span style="font-weight:400;font-style:normal;text-decoration:none">The bias scan tool finds the cluster for which most false labels are predicted to</span><br><span style="font-weight:400;font-style:normal;text-decoration:none">be true, proportional to all false labels (False Negative Rate).</span></td></tr><tr><td class="tg-0lax">Accuracy</td><td class="tg-0lax"><span style="font-weight:400;font-style:normal;text-decoration:none">Sum of True Positives (TPs) and True Negatives (TNs),</span><br><span style="font-weight:400;font-style:normal;text-decoration:none">proportional to all predictions.</span></td></tr></tbody></table><div style="margin-top:20px"><a style="color:#005aa7" href="https://en.wikipedia.org/wiki/Confusion_matrix#Table_of_confusion" target="_blank">Learn more</a> about bias metrics.</div></div>

{{< container_close >}}

{{< reports_preview >}}

{{< container_open title="FAQ" icon="fas fa-question-circle" >}}

##### Why this bias detection tool?

* No data needed on protected attributes of users (unsupervised bias detection);
* Model-agnostic (AI binary classifiers only);
* Connecting quantitative tools with qualitative methods to assess fair AI;
* Developed open-source and not-for-profit.

##### By whom can the bias detection tool be used? 

The bias detection tool allows the entire ecosystem involved in auditing AI, e.g., data scientists, journalists, policy makers, public- and private auditors, to use quantitative methods to detect bias in AI systems.

##### What does the tool compute? 

A statistical method is used to compute which clusters are relatively often misclassified by an AI system. A cluster is a group of data points sharing similar features. The tool returns a report in which identified differences (between feature means) are visualized and statistical significant feature differences are tested (Welch’s two-samples t-test for unequal variances).

##### The tool detects prohibited discrimination in AI? 

No. The bias detection tool serves as a starting point to assess potentially unfair AI classifiers with the help of subject-matter expertise. The features of identified clusters are examined on critical links with protected grounds, and whether the measured disparities are legitimate. This is a qualitative assessment for which the context-sensitive legal doctrine provides guidelines, i.e., to assess the legitimacy of the aim pursued and whether the means of achieving that aim are appropriate and necessary.

##### For what type of AI does the tool work? 

Currently, only binary classification algorithms can be reviewed. For instance, prediction of loan approval (yes/no), disinformation detection (true/false) or disease detection (positive/negative).

##### What happens with my data?

Your .csv file is uploaded to a AWS bucket, where it is processed. Once the clustering algorithm is finised the data is immediately deleted.

##### In sum 

Quantitative methods, such as unsupervised bias detection, are helpful to discover potentially unfair treated groups of similar users in AI systems in a scalable manner. Automated identification of cluster disparities in AI models allows human experts to assess observed disparities in a qualitative manner, subject to political, social and environmental traits. This two-pronged approach bridges the gap between the qualitative requirements of law and ethics, and the quantitative nature of AI (see figure). In making normative advice, on identified ethical issues publicly available, over time a repository of ’techno-ethical jurisprudence’ emerges; from which data scientists and public authorities can distill best practices to build fairer AI (see our case reviews). 

{{< container_close >}}

{{< team >}}
