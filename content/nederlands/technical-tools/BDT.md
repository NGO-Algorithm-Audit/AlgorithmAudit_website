---
title: Bias detectie tool
subtitle: >
  Algorithm Audit's bias detectie tool gebruikt statistiek om mogelijk ongelijk
  behandelde groepen door een AI-systeem te identificeren. De tool informeert de
  kwalitatieve doctrine van het recht en de ethiek welke afwijkingen in
  algoritmische systemen handmatig onderzocht moeten worden. Algorithm Audit
  combineert kwantitatieve en kwalitatieve methoden om keuzes te maken oven
  eerlijke AI, ook wel onze <a
  href="https://github.com/NGO-Algorithm-Audit/Bias_scan" target="_blank">joint
  fairness assessment method (JFAM)</a> genaamd.
image: /images/svg-illustrations/illustration_cases.svg
type: bias-detection-tool
reports_preview:
  title: Voorbeeld output bias detectie tool
  icon: fas fa-file
  button_text: Overzicht casuïstiek
  button_link: /nl/algoprudence
  id: example-reports
  feature_item:
    - name: Normatief oordeel commissie
      image: /images/algoprudence/AA202301/Cover.png
      link: /algoprudence/cases/aa202301_bert-based-disinformation-classifier/
      content: >
        Adviescommissie oordeelt dat er een laag risico is op
        (hoger-dimensionale) proxydiscriminatie bij gebruik van de
        BERT-gebaseerde desinformatie detectie-algoritme
    - name: FPR clustering resultaten
      image: /images/BDT/Example_report.png
      link: >-
        https://static-files-pdf.s3.amazonaws.com/bias_scan_FPR_test_pred_BERT.pdf
      content: "Voorbeeld van automatisch gegenereerde biasgegevens over \_[BERT-gebaseerde desinformatie detectie-algoritme (FPR) case study](https://static-files-pdf.s3.amazonaws.com/bias_scan_FPR_test_pred_BERT.pdf)\n"
team:
  title: Unsupervised bias detectie team
  icon: fas fa-user-friends
  button_text: Andere teams
  button_link: /nl/about/teams/
  team_members:
    - image: /images/people/FHolstege.jpeg
      name: Floris Holstege
      bio: |
        PhD-kandidaat Machine Learning, Universiteit van Amsterdam
    - image: /images/people/JPersson.jpeg
      name: Joel Persson PhD
      bio: |
        R\&D, Spotify
    - image: /images/people/KPadh.jpeg
      name: Kirtan Padh
      bio: |
        PhD-kandidaat Causal Inference and Machine Learning, TU München
    - image: /images/people/KProrokovic.jpeg
      name: Krsto Proroković
      bio: |
        PhD-kandidaat, Swiss AI Lab IDSIA
    - image: /images/people/MJorgensen.jpeg
      name: Mackenzie Jorgensen PhD
      bio: |
        Onderzoeker Alan Turing Institute, Londen
quick_navigation:
  title: Content overview
  links:
    - title: Inhoudsopgave
      url: '#info'
    - title: Tool
      url: '#web-app'
    - title: HBAC algoritme
      url: '#HBAC'
    - title: FAQ
      url: '#FAQ'
    - title: Team
      url: '#team'
---

{{< container_open title="Bias detectie tool – Wat is het?" icon="fas fa-search" id="info" >}}

De bias detectie tool identificeert mogelijk ongelijk behandelde groepen door een AI-systeem. De tool werkt momenteel alleen voor AI-systemen die individuen in twee groepen opdelen, bijvoorbeeld de voorspelling of een financiële transactie wel/niet risicovol is. De tool vindt groepen gebruikers die door het algoritme systematisch een afwijkende voorspelling krijgen. Deze afwijking wordt berekend aan de hand van een bepaalde maat, bijvoorbeeld de hoeveelheid valspositieven (het algoritme voorspelt dat de financiële transactie verdacht is, maar is dat niet), valsnegatieven (het algoritme voorspelt dat de financiële transactie niet-verdacht is, maar is dat wel) of een combinatie van deze twee. De tool maakt gebruik van [clustering](https://nl.wikipedia.org/wiki/Clusteranalyse) (unsupervised machine learning), wat betekent dat geen toegang nodig is tot de bijzondere persoonsgegevens van individuen – zoals geslacht, nationaliteit of etniciteit – om afwijkingen met betrekking tot deze gronden te detecteren. Omdat de tool gebruik maakt van statistiek is het in staat om hoger-dimensionale vormen van ogenschijnlijk neutraal onderscheid – ook wel meervoudige proxy of intersectionele discriminatie genoemd – te detecteren.

Via onderstaande web app kan de tool direct worden gebruikt. Mits de geüploade data voldoet aan de hieronder gespecificeerde structuur, voert de tool direct een clusteranalyse uit en retourneert het cluster met de grootste afwijking (volgens de gekozen metriek) naar de browser. De resultaten kunnen worden gedownload als pdf-bestand.

Gebruik de tool hieronder ⬇️

{{< container_close >}}

{{< iframe title="Bias detection tool" icon="fas fa-cloud" id="web-app" src="https://local-first-bias-detection.s3.eu-central-1.amazonaws.com/bias-detection.html?lang=nl" height="770px" >}} 

{{< promo_bar content="Waardeer je het werk van Algorithm Audit? ⭐️ ons op" id="promo" >}}

{{< reports_preview >}}

{{< container_open title="Finalist Stanford’s AI Audit Challenge 2023" icon="fas fa-medal" id="finalist" >}}

Met de inzending Joint Fairness Assessment Method (JFAM) is Algorithm Audit's bias detectie tool geselecteerd als finalist voor [Stanford’s AI Audit Competition 2023](https://hai.stanford.edu/ai-audit-challenge-2023-finalists).

{{< image id="stanford" width_desktop="4" width_mobile="8" image1="/images/supported_by/HAI.png" alt1="Stanford University" caption1="Stanford University" link1="https://hai.stanford.edu/ai-audit-challenge-2023-finalists" >}}

{{< container_close >}}

{{< container_open title="OECD Catalogus voor Tools & Metrieken voor Verantwoorde AI" icon="fas fa-toolbox" >}}

Algorithm Audit's bias detectie tool is onderdeel van de OECD's [Catalogus voor Tools & Metrieken voor Verantwoorde AI.](https://oecd.ai/en/catalogue/tools/unsupervised-bias-detection-tool)

{{< image id="OECD-logo" width_desktop="4" width_mobile="8" image1="/images/BDT/oecd_logo.svg" alt1="OECD Catalogus voor Tools & Metrieken voor Verantwoorde AI" caption1="OECD Catalogus voor Tools & Metrieken voor Verantwoorde AI" link1="https://oecd.ai/en/catalogue/tools/unsupervised-bias-detection-tool" >}}

{{< container_close >}}

{{< container_open title="Hierarchisch Bias-Bewust Clustering (HBAC) algoritme" icon="fas fa-code-branch" id="HBAC" >}}

De bias detectie tool werkt momenteel alleen voor numeriek data. Volgens een hierarchisch schema clustert het _Hierarchical Bias-Aware Clustering_ (HBAC) algoritme input data met behulp van k-means clustering algoritme. Op termijn kan de tool ook categorische data verwerken volgens k-modes clustering. Het HBAC-algoritme is geïntroduceerd door Misztal-Radecka en Indurkya in een [wetenschappelijk artikel](https://www.sciencedirect.com/science/article/abs/pii/S0306457321000285) in *Information Processing and Management* (2021). Onze implementatie van het HBAC-algoritme is open source en kan worden gevonden in [Github.](https://github.com/NGO-Algorithm-Audit/AI_Audit_Challenge)

[Download](https://github.com/NGO-Algorithm-Audit/Bias_scan/blob/master/classifiers/BERT_disinformation_classifier/test_pred_BERT.csv) een voorbeeld dataset om de bias detectie tool te gebruiken.

{{< container_close >}}

{{< container_open title="Input data" icon="fas fa-database" id="input-data" >}}

Welke input data kan de bias detectie tool verwerken? Een csv-bestand van maximaal 5GB met kolommen kenmerken (`features`), de voorspelde waarde (`pred_label`) en de echte waarde (`true_label`). Alleen de volgorde van de kolommen is van belang (eerst `features`, dan `pred_label`, dan `true_label`). Alle kolommen moeten numeriek en ongeschaald (niet gestandaardiseerd of genormaliseerd) zijn. Samengevat:

- `features`: ongeschaalde numerieke waarden, bijvoorbeeld `kenmerk_1`, `kenmerk_2`, ..., `kenmerk_n`;
- `pred_label`: 0 of 1;
- `true_label`: 0 of 1;
- Biasmetriek: proportie valspositieven (FPR), proportie valsnegatieven (FNR) of nauwkeurigheid (Acc).

<div><p><u>Voorbeeld</u>:</p><style type="text/css">.tg{border-collapse:collapse;border-spacing:0}.tg td{border-color:grey;border-style:solid;border-width:1px;font-size:14px;overflow:hidden;padding:10px 5px;word-break:normal}.tg th{border-color:#grey;border-style:solid;border-width:1px;font-size:14px;font-weight:400;overflow:hidden;padding:10px 5px;word-break:normal}.tg .tg-uox0{border-color:#grey;font-weight:700;text-align:left;vertical-align:top}.tg .tg-uoz0{border-color:#grey;text-align:left;vertical-align:top}</style><table class="tg"><thead><tr><th class="tg-uox0">eig_1</th><th class="tg-uox0">eig_2</th><th class="tg-uox0">...</th><th class="tg-uox0">eig_n</th><th class="tg-uox0">pred_label</th><th class="tg-uox0">true_label</th></tr></thead><tbody><tr><td class="tg-uoz0">10</td><td class="tg-uoz0">1</td><td class="tg-uoz0">...</td><td class="tg-uoz0">0.1</td><td class="tg-uoz0">1</td><td class="tg-uoz0">1</td></tr><tr><td class="tg-uoz0">20</td><td class="tg-uoz0">2</td><td class="tg-uoz0">...</td><td class="tg-uoz0">0.2</td><td class="tg-uoz0">1</td><td class="tg-uoz0">0</td></tr><tr><td class="tg-uoz0">30</td><td class="tg-uoz0">3</td><td class="tg-uoz0">...</td><td class="tg-uoz0">0.3</td><td class="tg-uoz0">0</td><td class="tg-uoz0">0</td></tr></tbody></table><br><p><u>Overzicht van ondersteunde biasmetrieken</u>:</p><style type="text/css">.tg{border-collapse:collapse;border-spacing:0}.tg td{border-color:#000;border-style:solid;border-width:1px;font-size:14px;overflow:hidden;padding:10px 5px;word-break:normal}.tg th{border-color:#000;border-style:solid;border-width:1px;font-size:14px;font-weight:400;overflow:hidden;padding:10px 5px;word-break:normal}.tg .tg-1wig{font-weight:700;text-align:left;vertical-align:top}.tg .tg-0lax{text-align:left;vertical-align:top}</style><table class="tg"><thead><tr><th class="tg-1wig">Biasmetriek</th><th class="tg-1wig">Beschrijving</th></tr></thead><tbody><tr><td class="tg-0lax">Proportie valspositieven (FPR)</td><td class="tg-0lax">De bias detectie tool vindt het cluster met de hoogste proportie valspositieven (False Positive Rate). Bijvoorbeeld: algoritme voorspelt dat een financiële transactie wel risicovol is, terwijl deze transactie dat na handmatige inspectie niet blijkt te zijn.</span></td></tr><tr><td class="tg-0lax">Proportie valsnegatieven (FNR)</td><td class="tg-0lax">De bias detectie tool vindt het cluster met de hoogste proportie valsnegatieven (False Negative Rate). Bijvoorbeeld: algoritme voorspelt dat een financiële transactie niet risicovol is, terwijl deze transactie dat na handmatige inspectie wel blijkt te zijn.</span></td></tr><tr><td class="tg-0lax">Nauwkeurigheid (Acc)</td><td class="tg-0lax">Deel echt positieven (True Positives) en echt negatieven (True Negatives) van alle voorspellingen.</td></tr></tbody></table><div style="margin-top:20px"><a style="color:#005aa7" href="https://en.wikipedia.org/wiki/Confusion_matrix#Table_of_confusion" target="_blank">Meer informatie</a> over biasmetrieken.</div></div>

{{< container_close >}}

{{< container_open title="Veelgestelde vragen" icon="fas fa-question-circle" id="FAQ">}}

##### Waarom deze bias detectie tool?

- Geen toegang nodig tot bijzondere persoonsgegevens (unsupervised bias detectie);
- Model-agnostisch (werkt voor alle binaire classificatie algoritmen);
- Informeert de mens welke gedrag van een AI-systeem gericht handmatig te onderzoeken.
- Verbindt kwantitatieve, statissche methoden met de kwalitatieve doctrine van recht en ethiek om eerlijke AI vorm te geven;
- Open-source ontwikkeld, zonder winstoogmerk.

##### Door wie kan deze bias detectie tool worden gebruikt? 

De bias detectie tool kan gebruikt worden door de het gehele gemeenschap die aan AI auditing werkt, in het bijzonder data scientists, journalisten, beleidsmakers, publieke- en private auditors.

##### Wat berekent de tool? 

Een statistische methode berekent welke clusters relatief vaak verkeerd geclassificeerd worden door een AI-systeem. Een cluster is een groep individuen die bepaalde kenmerken. Op deze kenmerken is het classificerende AI-systeem initieel getraind. De tool identificeert en visualiseert de gevonden clusters automatisch. De tool bepaalt ook hoe de individuen in clusters per kenmerk verschillen ten opzichte van anderen buiten het cluster. Of de verschillen tussen de groepen statistisch significant zijn wordt direct getoetst aan de hand van [Welch's t-toets](https://en.wikipedia.org/wiki/Welch%27s_t-test) voor twee deelgroepen met ongelijke variantie. Alle resultaten kunnen worden gedownload in een pdf-bestand.

##### Detecteert de tool discriminatie in AI-systemen? 

Nee, de bias detectie tool kan fungeren als startpunt om discriminerende AI aannemelijk te maken. Om discriminatie aan te tonen zijn echter altijd domeinexperts nodig. Experts kunnen bijvoorbeeld toetsen of een verband bestaat tussen de kenmerken van een geïdentificeerd cluster en beschermde gronden. Daarnaast kan de kwantitatieve afwijking van het meest afwijkende cluster kwalitatief worden geïnterpreteerd. In een [case studie](/nl/algoprudence/cases/bert-based-disinformation-classifier-aa202301/) van Algorithm Audit – waarbij de bias detectie tool is getest op een BERT-gebaseerde desinformatie classifier – achtte een commissie van het experts de gemeten afwijkingen bijvoorbeeld te legitimeren. Legitimeren van gemaakt onderscheid is een context-afhankelijke taak waarvoor het recht kaders biedt, zoals het duiden van noodzakelijkheid, proportionaliteit en geschiktheid. Dit kwalitatieve oordeel vellen zal altijd een menselijke taak zijn.

##### Voor welk type AI-systeem werkt de tool? 

De tool werkt momenteel alleen voor AI-systemen die individuen in twee groepen opdelen, bijvoorbeeld de voorspelling of een financiële transactie wel/niet risicovol is of het wel/niet diagnostiseren van een ziekte.

##### Wat gebeurt er met mijn data als ik de web app gebruik?

Het csv-bestand wordt geupload naar een bucket van Amazon Web Services (AWS), waar Python-code de data verwerkt. Als het HBAC-algoritme clusters heeft geïdentificeerd worden alleen de resultaten terug gestuurd naar de browser en wordt de data in AWS verwijderd. Doorgaans wordt de data dus slechts 5-10 seconden in de cloud opgeslagen. De web applicatie is gebouwd volgens onderstaand architecture diagram.

{{< image id="architecure-diagram" width_desktop="12" width_mobile="12" image1="/images/BDT/architecture.png" alt1="Architectuur diagram web app bias detectie tool" caption1="Architectuur diagram web app bias detectie tool" >}}

##### Samenvattend

Kwantitatieve methoden, zoals unsupervised bias detectie, zijn behulpzame methoden om mogelijk door AI-systemen ongelijk behandelde groepen te detecteren op een schaalbare manier. Het geautomatiseerd detecteren van afwijkende clusters stelt menselijke experts in staat de groepen afwijkende individuen handmatig te inspecteren, waarbij de politieke en sociale context van het gebruikte AI-systeem in ogenschouw kan worden genomen. Deze duale aanpak om bias in AI-systemen te detecteren overbrugt de kloof tussen de kwalitatieve eisen van het recht en de ethiek, en de kwantitatieve modus operandi van AI. Door normatieve afwegingen over de verantwoorde inzet van AI publiek toegankelijk te maken vormt zich in de loop van tijd een [kennisbank](/nl/algoprudence/) op met collectieve oordeelsvorming. Van deze keuzes kunnen data scientists, publieke autoriteiten en anderen leren, maar ook bekritiseren. Want uiteindelijk moet in democratisch zicht normatieve knopen worden doorgehakt over wat wel en niet verantwoorde AI is.

[Lees meer](/nl/algoprudence/how-we-work/) over algoprudentie en onze werkwijze.

{{< image id="overzicht-JFAM" width_desktop="12" width_mobile="12" image1="/images/BDT/Qualitative_quantitative_NL.png" alt1="Overzicht Joint Fairness Assessment Method" caption1="Overzicht Joint Fairness Assessment Method" >}}

{{< container_close >}}

{{< team id="team">}}
