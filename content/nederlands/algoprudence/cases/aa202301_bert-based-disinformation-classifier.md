---
layout: case
title: >-
  Multidimensionale bias in een BERT-gebaseerde disinformatiedetectie-algoritme
subtitle: |
  Problemstelling (ALGO:AA:2023:01:P) en adviesdocument (ALGO:AA:2023:01:A)
image: /images/algoprudence/AA202301/Cover.png
---

{{< tab_header width="6" tab1_id="description" tab1_title="Beschrijving van algoprudentie" tab2_id="actions" tab2_title="Acties volgend op algoprudentie" tab3_id="" tab3_title="" default_tab="description" >}}

{{< tab_content_open icon="fa-newspaper" title="Multidimensionale bias in een BERT-gebaseerd disinformatiedetectie-algoritme" id="description" >}}

#### Algoprudentienummer

ALGO:AA:2023:01

#### Samenvatting advies

De adviescommissie is van mening dat er een laag risico is op (multi-dimensionale) proxydiscriminatie door de BERT-gebaseerde desinformatiedetectie-algoritme. Het concrete waargenomen verschil in ongelijke behandeling van verschillende Twitter-gebruikers kan gelegitimeerd worden, indien bepaalde maatregelen zijn getroffen.

#### Bron van de casus

Toepassing van de door Algorithm Audit zelf-geimplementeerde unsupervised [bias detectie tool](/technical-tools/bdt/) op een zelf-getraind BERT-gebaseerd desinformatiedetectie-algoritme op de veelgebruikte Twitter1516 dataset. Zie ook onze [Github](https://github.com/NGO-Algorithm-Audit/Bias-detection-tool).

#### Stanford's AI Audit Challenge 2023

Deze algoprudentie, in combinatie met de [bias detectie tool,](/technical-tools/bdt/) is onder de naam Joint Fairness Assessment Method (JFAM) geselecteerd als finalist voor [Stanford’s AI Audit Challenge 2023](https://hai.stanford.edu/ai-audit-challenge-2023-finalists).

{{< image id="stanford" width_desktop="6" width_mobile="12" image1="/images/partner logo-cropped/StanfordHAI.png" alt1="Universiteit Stanford" caption1="Universiteit Stanford" link1="https://hai.stanford.edu/ai-audit-challenge-2023-finalists" >}}

#### Presentatie

Een visuele presentatie van deze case study kan worden gevonden in [dit](https://github.com/NGO-Algorithm-Audit/Bias-detection-tool/blob/master/Main_presentation_joint_fairness_assessment_method.pdf) slide deck.

#### Probleemstelling en adviesrapport

{{< embed_pdf url2="/pdf-files/algoprudence/ALGO_AA202301/ALGO_AA202301A_Case_study_disinfo.pdf" url="/pdf-files/algoprudence/ALGO_AA202301/ALGO_AA202301P_Case_study_disinfo.pdf" >}}

#### Normatieve adviescommissie

- Anne Meuwese, Hoogleraar staats- en bestuursrecht, Leiden University
- Hinda Haned, Hoogleraar in Responsible Data Science, Universiteit van Amsterdam
- Raphaële Xenidis, Associate Professor in Europees recht, Sciences Po Paris
- Aileen Nielsen, Visiting Assistant Professor, Harvard Law School
- Carlos Hernández-Echevarría, Assistant Director en Head of Public Policy bij anti-disinformatie nonprofit fact-checker [Maldita.es](https://maldita.es/maldita-es-journalism-to-not-be-fooled/)
- Ellen Judson, Head of CASM en Sophia Knight, Onderzoekers bij de partijoverstijgende Britse denktank [Demos](https://demos.co.uk/)

{{< tab_content_close >}}

{{< tab_content_open icon="" title="" id="actions" >}}

{{< accordions_area_open id="actions" >}}

{{< accordion_item_open image="/images/partner logo-cropped/SIDN.png" title="Ondersteuning voor verdere ontwikkeling" id="sidn" date="01-12-2023" tag1="financiering" tag2="open source" tag3="AI auditing tool" >}}

##### Beschrijving

Het [SIDN Fonds](https://www.sidnfonds.nl/projecten/open-source-ai-auditing) ondersteunt Algorithm Audit om de bias detectie tool verder te ontwikkelen. Op 01-01-2024 is een [team](/nl/about/teams/#bdt) gestart dat de tool verder gaat ontwikkelen.

{{< accordion_item_close >}}

{{< accordion_item_open title="Finalist Stanford's AI Audit Challenge 2023" image="/images/partner logo-cropped/StanfordHAI.png" id="ai_audit_challenge" date="28-04-2023" tag1="finalist" >}}

##### Beschrijving

Deze algoprudentie, in combinatie met de [unsupervised bias detectie tool,](/technical-tools/bdt/) is onder de naam Joint Fairness Assessment Method (JFAM) geselecteerd als finalist voor [Stanford’s AI Audit Challenge 2023](https://hai.stanford.edu/ai-audit-challenge-2023-finalists).

{{< accordion_item_close >}}

{{< accordions_area_close >}}

{{< tab_content_close >}}
