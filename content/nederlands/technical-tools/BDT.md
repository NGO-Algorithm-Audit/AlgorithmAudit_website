---
title: Unsupervised bias detectie tool
subtitle: >
  Privacy behoudende tool die gebruik maakt van statistiek om mogelijk ongelijk
  behandelde groepen door algoritmes of AI te identificeren. De tool informeert de
  kwalitatieve doctrine van het recht en de ethiek welke afwijkingen onderzocht moeten worden door domeinexperts.
  
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
  title: Inhoudsopgave
  links:
    - title: Introductie
      url: '#info'
    - title: Web app
      url: '#web-app'
    - title: Anomaliedetectie-algoritme
      url: '#HBAC'
    - title: FAQ
      url: '#FAQ'
    - title: Team
      url: '#team'
---

{{< container_open title="Introductie – Unsupervised bias detectie tool" icon="fas fa-search" id="info" >}}

<br>

#### Wat doet de tool?
De tool detecteert groepen waarvoor een algoritme of AI-systeem afwijkend presteert. Naar deze vorm van monitoring wordt verwezen als *anomaliedetectie*. Voor het detecteren van afwijkende partonen maakt de tool gebruik van <a href="https://en.wikipedia.org/wiki/Cluster_analysis" target="_blank">clustering</a>. Clustering is een vorm van _unsupervised learning_. Dit betekent dat er geen gegevens nodig zijn over beschermde kenmerken van gebruikers, zoals geslacht, nationaliteit of etniciteit, om verdacht onderscheid (bias) te detecteren. De metriek aan de hand waarvan onderscheid wordt bepaald kan handmatig worden gekozen en wordt naar verwezen als de `gelijkheidsmetriek`.

#### Welke data kan worden verwerkt?
De tool verwerkt alle data in tabel-vorm. Het type data (numerieke, categorische, tijden etc.) wordt automatisch gedetecteerd. Eén kolom moet geselecteerd worden als de `gelijkheidsmetriek`, welke een numerieke waarde moet zijn. De gebruiker dient aan te aangeven of een hoge of lage waarde van de `gelijkheidsmetriek` beter is. Voorbeeld: als de `gelijkheidsmetriek` een foutpercentage betreft dan is een lage waarde beter, terwijl bij nauwkeurigheid een hoge waarde beter is. 

<div>
  <p><u>Voorbeeld van numerieke dataset</u>:</p>
  <style type="text/css">.tg{border-collapse:collapse;border-spacing:0}.tg td{border-color:#000;border-style:solid;border-width:1px;font-size:14px;overflow:hidden;padding:10px 5px;word-break:normal}.tg th{border-color:#000;border-style:solid;border-width:1px;font-size:14px;font-weight:400;overflow:hidden;padding:10px 5px;word-break:normal}.tg .tg-uox0{border-color:#grey;font-weight:700;text-align:left;vertical-align:top}.tg .tg-uoz0{border-color:#grey;text-align:left;vertical-align:top} .tg-1wig{font-weight:700;text-align:left;vertical-align:top}.tg .tg-0lax{text-align:left;vertical-align:top}</style>
  <table class="tg">
    <thead>
      <tr>
      <th class="tg-uox0">Leeftijd</th><th class="tg-uox0">Inkomen</th><th class="tg-uox0">...</th><th class="tg-uox0">Aantal auto's</th><th class="tg-uox0"><span style="font-family:SFMono-Regular,Menlo,Monaco,Consolas,liberation mono,courier new,monospace; color:#e83e8c; font-weight:300">Geselecteerd voor controle</span></th>
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

#### Wat zijn de uitkomsten van de tool?
De tool identificeert afwijkende clusters. Een samenvatting van de resultaten wordt beschikbaar gemaakt in een bias analyse-rapport dat als pdf gedownload kan worden. In een .json-bestand kunnen alle geïdentificeerde clusters worden gedownload. De tool richt zich specifiek op het in negatieve zin meest afwijkende cluster en geeft een beschrijving van dit cluster. Deze resultaten zijn het startpunt voor vervolgonderzoek door domeinexperts die een oordeel kunnen vellen of het waargenomen onderscheid daadwerkelijk onwenselijk is. De tool visualiseert ook de uitkomsten.

#### How wordt mijn data verwerkt?
De tool is privacyvriendelijk omdat de data alleen in de browser worden verwerkt. De data verlaten je computer en de omgeving van je organisatie niet. De tool gebruikt de rekenkracht van je eigen computer om data te analyseren. Naar deze vorm browser-based software wordt verwezen als *local-first*. De tool uploadt de data dus niet naar derden, zoals cloudproviders. Instructies over hoe de tool lokaal binnen je eigen organisatie gehost kan worden, inclusief de broncode, vind je in <a href="https://github.com/NGO-Algorithm-Audit/local-first-web-tool" target="_blank">Github</a>.

Gebruik de tool hier beneden ⬇️

{{< container_close >}}

{{< iframe title="Web app – Unsupervised bias detection tool" icon="fas fa-cloud" id="web-app" src="https://local-first-bias-detection.s3.eu-central-1.amazonaws.com/bias-detection.html?lang=nl" height="770px" >}} 

{{< promo_bar content="Waardeer je het werk van Algorithm Audit? ⭐️ ons op" id="promo" >}}

{{< reports_preview >}}

{{< container_open title="Broncode" id="source-code" icon="fas fa-toolbox" >}}

- The source code of the clustering method is available on <a href="https://github.com/NGO-Algorithm-Audit/unsupervised-bias-detection" target="_blank">Github</a> and as a <a href="https://pypi.org/project/unsupervised-bias-detection/" target="_blank">pip package</a>: `pip install unsupervised-bias-detection`. 
[![!pypi](https://img.shields.io/pypi/v/unsupervised-bias-detection?logo=pypi\&color=blue)](https://pypi.org/project/unsupervised-bias-detection/)

- The local-first architecture in available on <a href="https://github.com/NGO-Algorithm-Audit/local-first-web-tool" target="_blank">Github repository</a> 

{{< container_close >}}

{{< container_open title="Innovatiebudget" icon="fas fa-toolbox" >}}

Algorithm Audit's bias detectie tool is onderdeel van de OECD's [Catalogus voor Tools & Metrieken voor Verantwoorde AI.](https://oecd.ai/en/catalogue/tools/unsupervised-bias-detection-tool)

{{< image id="OECD-logo" width_desktop="4" width_mobile="8" image1="/images/BDT/oecd_logo.svg" alt1="OECD Catalogus voor Tools & Metrieken voor Verantwoorde AI" caption1="OECD Catalogus voor Tools & Metrieken voor Verantwoorde AI" link1="https://oecd.ai/en/catalogue/tools/unsupervised-bias-detection-tool" >}}

{{< container_close >}}

{{< container_open title="OECD Catalogus voor Tools & Metrieken voor Verantwoorde AI" icon="fas fa-toolbox" >}}

Algorithm Audit's bias detectie tool is onderdeel van de OECD's [Catalogus voor Tools & Metrieken voor Verantwoorde AI.](https://oecd.ai/en/catalogue/tools/unsupervised-bias-detection-tool)

{{< image id="OECD-logo" width_desktop="4" width_mobile="8" image1="/images/BDT/oecd_logo.svg" alt1="OECD Catalogus voor Tools & Metrieken voor Verantwoorde AI" caption1="OECD Catalogus voor Tools & Metrieken voor Verantwoorde AI" link1="https://oecd.ai/en/catalogue/tools/unsupervised-bias-detection-tool" >}}

{{< container_close >}}

{{< container_open title="Finalist Stanford’s AI Audit Challenge 2023" icon="fas fa-medal" id="finalist" >}}

Met de inzending Joint Fairness Assessment Method (JFAM) is Algorithm Audit's bias detectie tool geselecteerd als finalist voor [Stanford’s AI Audit Competition 2023](https://hai.stanford.edu/ai-audit-challenge-2023-finalists).

{{< image id="stanford" width_desktop="4" width_mobile="8" image1="/images/supported_by/HAI.png" alt1="Stanford University" caption1="Stanford University" link1="https://hai.stanford.edu/ai-audit-challenge-2023-finalists" >}}

{{< container_close >}}

{{< container_open title="Hierarchisch Bias-Bewust Clustering (HBAC) algoritme" icon="fas fa-code-branch" id="HBAC" >}}

De bias detectie tool werkt momenteel alleen voor numeriek data. Volgens een hierarchisch schema clustert het _Hierarchical Bias-Aware Clustering_ (HBAC) algoritme input data met behulp van k-means clustering algoritme. Op termijn kan de tool ook categorische data verwerken volgens k-modes clustering. Het HBAC-algoritme is geïntroduceerd door Misztal-Radecka en Indurkya in een [wetenschappelijk artikel](https://www.sciencedirect.com/science/article/abs/pii/S0306457321000285) in *Information Processing and Management* (2021). Onze implementatie van het HBAC-algoritme is open source en kan worden gevonden in [Github.](https://github.com/NGO-Algorithm-Audit/AI_Audit_Challenge)

[Download](https://github.com/NGO-Algorithm-Audit/Bias_scan/blob/master/classifiers/BERT_disinformation_classifier/test_pred_BERT.csv) een voorbeeld dataset om de bias detectie tool te gebruiken.

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
