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
  title: Team
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
    - title: Broncode
      url: '#source-code'
    - title: Anomaliedetectie-algoritme
      url: '#HBAC'
    - title: Wetenschappelijke paper en auditrapport
      url: '#scientific-paper'
    - title: Ondersteund door
      url: '#supported-by'
    - title: Prijzen en ondersteuning
      url: '#awards-acknowledgements'
    - title: Samenvatting
      url: '#summary'
    - title: Team
      url: '#team'
---



<!-- Introductie -->

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

#### Overzicht van proces
<div style="margin-bottom:50px; display: flex; justify-content: center;">
  <img src="/images/BDT/overview_tool NL.png" alt="drawing" width="600px"/>
</div>

#### How wordt mijn data verwerkt?
De tool is privacyvriendelijk omdat de data alleen in de browser worden verwerkt. De data verlaten je computer en de omgeving van je organisatie niet. De tool gebruikt de rekenkracht van je eigen computer om data te analyseren. Naar deze vorm browser-based software wordt verwezen als *local-first*. De tool uploadt de data dus niet naar derden, zoals cloudproviders. Instructies over hoe de tool lokaal binnen je eigen organisatie gehost kan worden, inclusief de broncode, vind je in <a href="https://github.com/NGO-Algorithm-Audit/local-first-web-tool" target="_blank">Github</a>.

Gebruik de tool hier beneden ⬇️

{{< container_close >}}



<!-- Web app -->

{{< iframe title="Web app – Unsupervised bias detectie tool" icon="fas fa-cloud" id="web-app" src="https://local-first-bias-detection.s3.eu-central-1.amazonaws.com/bias-detection.html?lang=nl" height="770px" >}} 



<!-- Promobar -->

{{< promo_bar content="Waardeer je het werk van Algorithm Audit? ⭐️ ons op" id="promo" >}}




<!-- Broncode -->

{{< container_open title="Broncode" id="source-code" icon="fas fa-toolbox" >}}

- De broncode van het anomaliedetectie-algoritme is beschikbaar op <a href="https://github.com/NGO-Algorithm-Audit/unsupervised-bias-detection" target="_blank">Github</a> en als <a href="https://pypi.org/project/unsupervised-bias-detection/" target="_blank">pip package</a>: `pip install unsupervised-bias-detection`. 
[![!pypi](https://img.shields.io/pypi/v/unsupervised-bias-detection?logo=pypi\&color=blue)](https://pypi.org/project/unsupervised-bias-detection/)

- De achitectuur om web apps local-first te gebruiken is ook beschikbaar op <a href="https://github.com/NGO-Algorithm-Audit/local-first-web-tool" target="_blank">Github</a>.

{{< container_close >}}



<!-- Anolamiedetection algoritme -->

{{< container_open title="Anolamiedetectie algoritme – Hierarchisch Bias-Aware Clustering (HBAC)" icon="fas fa-code-branch" id="HBAC" >}}

De tool maakt gebruik van het _Hierarchisch Bias-Aware Clustering_ (HBAC) algoritme. HBAC verwerkt invoergegevens volgens het k-means (voor numerieke data) of k-modes (voor categorische data) clustering algoritme. Het HBAC-algoritme is geïntroduceerd door Misztal-Radecka en Indurkhya in een [wetenschappelijk artikel](https://www.sciencedirect.com/science/article/abs/pii/S0306457321000285) gepubliceerd in *Information Processing and Management* (2021). Onze implementatie van het HBAC-algoritme, inclusief aanvullende methodologische controles om daadwerkelijke bias van ruis te onderscheiden, zoals sample splitting, het toetsen van statistische hypotheses en het meten van clusterstabiliteit, is te vinden in de <a href="https://github.com/NGO-Algorithm-Audit/unsupervised-bias-detection/blob/master/README.md" target="_blank">unsupervised-bias-detection</a> pip package.

{{< container_close >}}



<!-- Wetenschappelijke paper en auditrapport -->

{{< container_open icon="far fa-file" title="Wetenschappelijke paper en auditrapport" id="scientific-paper" >}}

De unsupervised bias detectie tool is in de praktijk toegepast om een risicoprofileringsalgoritme van de Dienst Uitvoering Onderwijs (DUO) te auditen. Ons [team](/technical-tools/bdt/#team) heeft deze casus gedocumenteerd in een wetenschappelijke paper. De tool identificeerde proxies voor studenten met een niet-Europese migratieachtergrond in het risicoprofileringsalgoritme, specifiek opleidingsniveau en de afstand tussen het adres van de student en dat van hun ouder(s). De resultaten worden ook beschreven in Appendix A van het onderstaande rapport. Dit rapport is op 22-05-2024 naar de <a href="https://www.tweedekamer.nl/kamerstukken/detail?id=2024D20431&did=2024D20431" target="_blank">Tweede Kamer</a> gestuurd.

{{< embed_pdf url="/pdf-files/technical-tools/UBDT/20250205 Auditing a Dutch Public Sector Risk Profiling Algorithm.pdf" url2="/pdf-files/algoprudence/TA_AA202402/TA_AA202402_Addendum_Vooringenomenheid_voorkomen.pdf" width_mobile_pdf="12" width_desktop_pdf="6" >}}

{{< container_close >}}



<!-- Supported by -->

{{< container_open title="Ondersteund door" icon="fas fa-toolbox" id="supported-by">}}

Deze tool is ontwikkeld met de steun van publieke en filantropische financiering.

{{< accordions_area_open>}}

{{< accordion_item_open title="Innovatiebudget Ministerie van Binnenlandse Zaken" image="/images/supported_by/BZK.jpg" tag1="2024-25" >}}

##### Description
In samenwerking met de Dienst Uitvoering Onderwijs (DUO) en het Ministerie van Binnenlandse Zaken heeft Algorithm Audit deze tool ontwikkeld en getest in de periode juli 2024 tot juli 2025 met ondersteuning van <a href="https://www.digitaleoverheid.nl/overzicht-van-alle-onderwerpen/innovatie/innovatiebudget/toekenning-innovatiebudget-2024/" target="_blank">innovatiebudget</a>, een jaarlijkse competitie georganiseerd door het Ministerie van Binnenlandse Zaken. De voortgang van het project werd gedeeld tijdens een bijeenkomst op 13-02-2025.

![](/images/events/20250213_Demodag2025.jpg)

{{< accordion_item_close >}}

{{< accordion_item_open title="SIDN Fonds" image="/images/supported_by/sidn.png" tag1="2024" >}}

##### Description

In 2024 ondersteunde het SIDN Fonds <a href="https://www.sidnfonds.nl/projecten/open-source-ai-auditing" target="_blank">Algorithm Audit</a> bij het ontwikkelen van een eerste demo van de unsupervised bias detectie tool.

{{< accordion_item_close >}}

{{< accordions_area_close >}}

{{< container_close >}}



<!-- Prijzen en ondersteuning -->

{{< container_open title="Prijzen en ondersteuning" icon="fas fa-medal" id="awards-acknowledgements">}}

De tool heeft prijzen ontvangen en wordt ondersteund door verschillende <a href="https://github.com/NGO-Algorithm-Audit/unsupervised-bias-detection?tab=readme-ov-file#contributing-members" target="_blank">belanghebbenden</a>, waaronder maatschappelijke organisaties, vertegenwoordigers uit de industrie en academici.

{{< accordions_area_open>}}

{{< accordion_item_open title="Finalist Stanford’s AI Audit Challenge 2023" image="/images/supported_by/HAI.png" tag1="06-2023" >}}

##### Description
Onder de naam Joint Fairness Assessment Method (JFAM) is de unsupervised bias detectie tool geselecteerd als finalist voor <a href="https://hai.stanford.edu/ai-audit-challenge-2023-finalists" target="_blank">Stanford’s AI Audit Competition 2023</a>.

{{< accordion_item_close >}}

{{< accordion_item_open title="OECD Catalogue of Tools & Metrics for Trustworthy AI" image="/images/BDT/oecd_logo.svg" tag1="2024" >}}

##### Description
De unsupervised bias detectie tool maakt deel uit van de <a href="https://oecd.ai/en/catalogue/tools/unsupervised-bias-detection-tool" target="_blank">Catalogue of Tools & Metrics for Trustworthy AI</a>.

{{< accordion_item_close >}}

{{< accordions_area_close >}}

{{< container_close >}}



<!-- Samenvatting -->

{{< container_open title="Samenvatting" icon="fas fa-dot-circle" id="summary">}}

Belangrijkste punten over de unsupervised bias detectie tool:

- <span style="color:#005AA7">Kwantitatieve-kwalitatieve onderzoeksmethode</span>: Data-gedreven onderzoek naar bias ter ondersteuning van delibartief en context-afhankelijk oordeel van domeinexperts;
- <span style="color:#005AA7">Unsupervised bias detectie</span>: Vereist geen toegang tot bijzondere persoonsgegevens (_unsupervised learning_);
- <span style="color:#005AA7">Anolamiedetectie</span>: Schaalbare methode gebaseerd op statische analyse;
- <span style="color:#005AA7">Detecteert complexe bias</span>: Identificeert groepen die structureel afwijkend worden behandeld en geeft een beschrijving van deze groepen, is in staat intersectionele bias te detecteren;
- <span style="color:#005AA7">Model-agnostic</span>: Werkt voor alle binaire classificatie algoritmen en AI-systemen;
- <span style="color:#005AA7">Open-source en zonder winstoogmerk</span>: Gebruiksvriendelijke en gratis te gebruiken voor de gehele AI auditing gemeenschap.

{{< container_close >}}

{{< team id="team">}}
