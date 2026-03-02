---
title: Unsupervised bias detectie tool
subtitle: >
  Een statistische tool die groepen identificeert waarvoor een AI-systeem of algoritme afwijkende presteert, wat mogelijk wijst op ongelijke behandeling. De tool informeert welke afwijkingen nader onderzocht moeten worden door domeinexperts.
image: /images/svg-illustrations/illustration_cases.svg
type: bias-detection-tool
quick_navigation:
  title: Inhoudsopgave
  links:
    - title: Introductie
      url: "#info"
    - title: Technische introductie
      url: "#technical-introduction"
      indent: 1
    - title: Tool
      url: "#web-app"
    - title: Broncode
      url: "#source-code"
    - title: Wetenschappelijke paper en auditrapport
      url: "#scientific-paper"
    - title: Local-only architectuur
      url: "#local-only"
    - title: Ondersteund door
      url: "#supported-by"
    - title: Prijzen en publicaties
      url: "#awards-publications"
    - title: Samenvatting
      url: "#summary"
    - title: Team
      url: "#team"
promo_bar:
  - content: >
      **👋 Wil je de tool ook lokaal gebruiken? Dat is gemakkelijker dan je denkt! Kom in [contact](/nl/about/contact/) voor meer informatie.**
    id: promo-contact
  - content: >
      **Waardeer je het werk van Algorithm Audit? ⭐️ ons op
      [GitHub](https://github.com/NGO-Algorithm-Audit/unsupervised-bias-detection)**
    id: promo
    iframe: >-
      https://ghbtns.com/github-btn.html?user=NGO-Algorithm-Audit&repo=unsupervised-bias-detection&type=star&count=true
team:
  - id: team
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
          Postdoctorale onderzoeker, Northumbria University
      - image: /images/people/JParie.jpg
        name: Jurriaan Parie
        bio: |
          Directeurr, Algorithm Audit
---

<!-- Promobar -->

{{< promo_bar index="0" >}}

<!-- Introductie -->

{{< container_open title="Introductie – Unsupervised bias detectie tool" icon="fas fa-search" id="info" >}}

<br>

#### Wat doet de tool?

De tool detecteert groepen waarvoor een algoritme of AI-systeem afwijkend presteert, wat mogelijk zou kunnen duiden op ongelijke behandeling. Naar deze vorm van monitoring wordt verwezen als _anomaliedetectie_. Voor het detecteren van afwijkende partonen maakt de tool gebruik van <a href="https://en.wikipedia.org/wiki/Cluster_analysis" target="_blank">clustering</a> om datapunten te groeperen (in clusters). De tool heeft geen beschermde kenmerken nodig van gebruikers, zoals geslacht, nationaliteit of etniciteit, om afwijkingen te detecteren. De variabele aan de hand waarvan onderscheid wordt bepaald kan handmatig worden gekozen en wordt naar verwezen als de `bias variabele`.

#### Welke uitkomsten geeft de tool?

De tool identificeert groepen (clusters) waarvoor de prestaties van het algoritme systematisch afwijken. Het cluster met de meest afwijkende bias variabele wordt uitgelicht en er wordt een bias analyse-rapport gegenereerd dat als PDF kan worden gedownload. Ook kunnen alle geïdentificeerde groepen (clusters) als .json-bestand worden gedownload. Daarnaast biedt de tool visualisaties van de resultaten, zodat domeinexperts de gevonden afwijkingen nader kunnen onderzoeken. Een voorbeeld is hieronder te zien. {{< tooltip tooltip_content="Onderstaande figuur laat zien dat cluster 0, het cluster met de meest afwijkende bias variabele (valspositieven in dit voorbeeld), een hoger dan gemiddeld aandeel Afro-Amerikaanse en een lager dan gemiddeld aandeel 'Kaukasische' personen bevat. Voor andere demografische groepen bevat cluster 0 een gemiddelde verdeling. Meer details over dit voorbeeld zijn te vinden in de demo dataset." >}}

<div style="margin-bottom:50px; display: flex; justify-content: center;">
  <img src="/images/BDT/example_COMPAS.png" alt="drawing" width="600px"/>
</div>

#### Welke data kan worden verwerkt?

De tool verwerkt data in tabel-formaat, dat enkel uit numerieke of categorische waarden bestaat. Eén kolom moet worden geselecteerd als `bias variabele`. Deze kolom mag enkel uit categorische waarden bestaan. De gebruiker dient aan te aangeven of een hoge of lage waarde van de `bias variabele` beter is. Voorbeeld: als je kijkt naar foutpercentages, zijn lagere waarden beter; voor nauwkeurigheid zijn hogere waarden beter. De tool bevat ook een demo dataset die je kunt gebruiken door op "Demo dataset" te klikken.

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

#### Is mijn data veilig?

Ja! Je data blijft op je eigen computer en verlaat de omgeving van je organisatie niet. De tool werkt in je browser en gebruikt de rekenkracht van je lokla apparaat om de data te analyseren. Deze aanpak, ‘local-only’ genaamd, zorgt ervoor dat er geen data met cloudproviders of andere derde partijen wordt gedeeld – ook niet met Algorithm Audit. Meer informatie over deze local-only architectuur vind je [hieronder](/nl/technical-tools/bdt/#local-only). Instructies om local-only tools binnen je organisatie te hosten zijn te vinden op <a href="https://github.com/NGO-Algorithm-Audit/local-only-web-tool" target="_blank">Github</a>.

Gebruik de tool hier beneden ⬇️

{{< container_close >}}

<!-- Technische details -->

{{< container_open isAccordion="true" title="Technische introductie – Unsupervised bias detectie tool" id="technical-introduction" >}}

<br>

#### Welke stappen doorloopt de tool?

De unsupervised bias detectie tool voert de volgende stappen uit:

##### Vereiste voorbereidingen door de gebruiker:

<span style="color:#005AA7">Stap 1. Data:</span> de gebruiker dient de volgende aspecten van de te verwerken data voor te bereiden:

- <span style="color:#005AA7">Dataset:</span> De data moet worden aangeleverd in tabelvorm. Eventuele ontbrekende waarden dienen te worden verwijderd of vervangen.
- <span style="color:#005AA7">Type data:</span> Alle kolommen, behalve de bias variabele-kolom, moeten hetzelfde datatype hebben, bijvoorbeeld allemaal numeriek of allemaal categorisch. De gebruiker geeft aan of numerieke of categorische data worden verwerkt.
- <span style="color:#005AA7">Bias variabele:</span> Er moet een kolom uit de dataset worden geselecteerd als `bias variabele`, welke categorisch moet zijn. In stap 4 wordt op basis van deze categorische waarden clustering uitgevoerd. Voorbeelden zijn: "aangewezen als hoog risico", "foutpercentage" of "geselecteerd voor controle".

<span style="color:#005AA7">Stap 2. Hyperparameters:</span> de gebruiker kiest de volgende hyperparameters:

- <span style="color:#005AA7">Iteraties:</span> Hoe vaak de data mogen worden gesplitst in kleinere clusters; standaard zijn 3 iteraties ingesteld.
- <span style="color:#005AA7">Minimale clustergrootte:</span> Hoeveel datapunten de gevonden clusters minimaal moeten bevatten; standaard is dit 1% van het aantal rijen in de dataset. Meer uitleg over een geïnformeerde keuze voor de minimale clustergrootte is te vinden in sectie 3.3 van onze [wetenschappelijke paper](/technical-tools/bdt/#scientific-paper).
- <span style="color:#005AA7">Interpretatie bias variabele:</span> Hoe de bias variabele geïnterpreteerd moet worden. Bijvoorbeeld: als foutpercentage of misclassificaties als bias variabele worden gekozen, is een lagere waarde beter, omdat het doel is fouten te minimaliseren. Als nauwkeurigheid of precisie als bias variabele wordt gekozen, is een hogere waarde beter, omdat het doel is de prestaties te maximaliseren.

##### Uitgevoerd door de tool:

<span style="color:#005AA7">Stap 3. Train-test data:</span> De dataset wordt opgesplitst in een train- en testsubset, volgens een 80-20 verhouding.

<span style="color:#005AA7">Stap 4. Hierarchisch Bias-Aware Clustering (HBAC):</span> Het HBAC-algoritme (hieronder toegelicht) wordt toegepast op de train dataset. De centra van de gevonden clusters worden opgeslagen en later gebruikt om clusterlabels toe te wijzen aan datapunten in de test dataset.

<span style="color:#005AA7">Stap 5. Toetsen van verschillen tussen clusters mbt. bias variabele:</span> Statistische hypothesetoets wordt uitgevoerd om te bepalen of de bias variabele significant verschilt in het meest afwijkende cluster ten opzichte van de rest van de dataset. Hiervoor wordt een eenzijdige Z-toets gebruikt om de gemiddelden van de bias variabelen te vergelijken middels de volgende hypothesetoets:

```
H_0: geen verschil in bias variable tussen het meest afwijkende cluster en de rest van de dataset
H_A: verschil in bias variable tussen het meest afwijkende cluster en de rest van de dataset.
```

<span style="color:#005AA7">Stap 6. Toetsen van verschillen tussen cluster mbt. eigenschappen:</span> Indien een statistisch significant verschil in bias variabele wordt gevonden tussen het meest afwijkende cluster en de rest van de dataset, worden de verschillen in eigenschappen (tussen het meest afwijkende cluster en de rest van de dataset) onderzocht. Ook hiervoor wordt statistische hypothesetoetsen gebruikt, namelijk een t-toets wanneer numerieke data en de Pearson 𝜒²-toets wanneer categorische data worden verwerkt. Bij het uitvoeren van meerdere hypothesetoetsen wordt Bonferroni-correctie toegepast. Meer informatie hierover kan worden gevonden in sectie 3.4 van onze [wetenschappelijke paper](/nl/technical-tools/bdt/#scientific-paper).

Een schematisch overzicht van bovenstaande stappen wordt hieronder weergegeven.

<div style="margin-bottom:50px; display: flex; justify-content: center;">
  <img src="/images/BDT/Overview_tool_NL.png" alt="drawing" width="800px"/>
</div>

#### Hoe werkt het clustering algoritme?

Het _Hierarchisch Bias-Aware Clustering_ (HBAC) algoritme identificeert clusters in de aangeleverde dataset op basis van een door de gebruiker gekozen `bias variabele`. Het doel is om clusters te vinden met een lage variatie in bias variabele binnen elk cluster, terwijl de variatie tussen clusters juist hoog is. HBAC vindt iteratief clusters in de data met behulp van k-means clustering (voor numerieke data) of k-modes clustering (voor categorische data). Voor de eerste split neemt HBAC de volledige dataset en splitst deze in twee clusters. Cluster `C` – met de hoogste standaarddeviatie van de bias variabele – wordt geselecteerd. Vervolgens wordt cluster `C` opgesplitst in twee kandidaat-clusters `C'` en `C''`. Als het gemiddelde van de bias variabele in een van de kandidaat-clusters hoger is dan het gemiddelde in `C`, wordt het kandidaat-cluster met de hoogste bias variabele geselecteerd als nieuw cluster. Dit proces herhaalt zich totdat het maximale aantal iteraties (`max_iteraties`) is bereikt of het resulterende cluster niet meer voldoet aan de minimale grootte (`n_min`). De pseudo-code van het HBAC-algoritme is hieronder weergegeven.

<div style="display: flex; justify-content: center;">
  <img src="/images/BDT/pseudo_code_HBAC.png" alt="drawing" width="800px"/>
</div>

Het HBAC-algoritme is geïntroduceerd door Misztal-Radecka en Indurkhya in een [wetenschappelijk artikel](https://www.sciencedirect.com/science/article/abs/pii/S0306457321000285) gepubliceerd in _Information Processing and Management_ (2021). Onze implementatie van het HBAC-algoritme bouwt hierop voort door aanvullende methodologische checks toe te voegen om echte signalen van ruis te onderscheiden, zoals sample splitting, het statistisch toetsen van hypotheses en het meten van clusterstabiliteit. De implementatie van het algoritme door Algorithm Audit is te vinden in het <a href="https://github.com/NGO-Algorithm-Audit/unsupervised-bias-detection/blob/master/README.md" target="_blank">unsupervised-bias-detection</a> pip package.

#### Hoe moeten de resultaten van de tool worden geïnterpreteerd?

Het HBAC-algoritme maximaliseert het verschil in bias variabele tussen clusters. Om te voorkomen dat er ten onrechte wordt geconcludeerd dat er ongewenste afwijkingen zijn in het onderzochte besluitvormingsproces terwijl die er niet zijn, wordt: 1) de dataset gesplitst in train- en testdata; en 2) toetsen we hyptotheses. Als een statistisch significante afwijking wordt gedetecteerd, vormt de uitkomst van de tool een startpunt voor domeinexperts om de geïdentificeerde afwijkingen in het besluitvormingsproces te beoordelen.

{{< container_close >}}

<!-- Web app -->

{{< iframe title="Web app – Unsupervised bias detectie tool" icon="fas fa-cloud" id="web-app" src="https://local-first-bias-detection.s3.eu-central-1.amazonaws.com/bias-detection.html?lang=nl" height="770px" >}}

<!-- Promobar -->

{{< promo_bar index="1" >}}

<!-- Broncode -->

{{< container_open title="Broncode" id="source-code" icon="fas fa-toolbox" >}}

- De broncode van unsupervised bias detectie door middel van het HBAC-algoritme is beschikbaar op <a href="https://github.com/NGO-Algorithm-Audit/unsupervised-bias-detection" target="_blank">Github</a> en als <a href="https://pypi.org/project/unsupervised-bias-detection/" target="_blank">pip package</a>: `pip install unsupervised-bias-detection`.
  [![!pypi](https://img.shields.io/pypi/v/unsupervised-bias-detection?logo=pypi&color=blue)](https://pypi.org/project/unsupervised-bias-detection/)

- De achitectuur om web apps local-only te gebruiken is ook beschikbaar op <a href="https://github.com/NGO-Algorithm-Audit/local-first-web-tool" target="_blank">Github</a>.

{{< container_close >}}

<!-- Wetenschappelijke paper en auditrapport -->

{{< container_open icon="far fa-file" title="Wetenschappelijke paper en auditrapport" id="scientific-paper" >}}

De unsupervised bias detectie tool is in de praktijk toegepast om een risicoprofileringsalgoritme van de Dienst Uitvoering Onderwijs (DUO) te auditen. Ons [team](/technical-tools/bdt/#team) heeft deze casus uitgewerkt in een wetenschappelijke paper. De tool identificeerde proxies voor studenten met een niet-Europese migratieachtergrond in het risicoprofileringsalgoritme, specifiek opleidingsniveau en de afstand tussen het adres van de student en dat van hun ouder(s). Afwijkingen in het controleproces hadden dus ook gevonden kunnen worden als CBS-data over de herkomst van studenten niet beschikbaar was geweest. De resultaten worden ook beschreven in Appendix A van het onderstaande rapport. Dit rapport is op 22-05-2024 naar de <a href="https://www.tweedekamer.nl/kamerstukken/detail?id=2024D20431&did=2024D20431" target="_blank">Tweede Kamer</a> gestuurd.

{{< embed_pdf url="/pdf-files/technical-tools/UBDT/20260215 Auditing a Dutch Public Sector Risk Profiling Algorithm.pdf" url2="/pdf-files/algoprudence/TA_AA202402/TA_AA202402_Addendum_Vooringenomenheid_voorkomen.pdf" width_mobile_pdf="12" width_desktop_pdf="6" >}}

{{< container_close >}}

<!-- Local-only architectuur -->

{{< container_open title="Local-only architectuur" icon="fas fa-map-pin" id="local-only" >}}

<br>

#### Wat is local-only?

Local-only is het tegenovergestelde van cloud computing: de data wordt niet geüpload naar derden, zoals cloudproviders, en wordt verwerkt door je eigen computer. De data die aan de tool wordt gekoppeld, verlaat je computer of de omgeving van je organisatie dus niet. De tool is privacyvriendelijk omdat de data binnen bestaande bevoegdheden verwerkt kan worden en niet gedeeld hoeft te worden met nieuwe partijen. De unsupervised bias detectie tool kan ook lokaal binnen je organisatie worden gehost. Instructies, inclusief de broncode van de tool, zijn te vinden op <a href="https://github.com/NGO-Algorithm-Audit/local-only-web-tool" target="_blank">Github</a>.

#### Overzicht van local-only architectuur

<div style="margin-bottom:50px; display: flex; justify-content: center;">
  <img src="/images/BDT/local-only-infrastructure NL.png" alt="drawing" width="100%"/>
</div>

#### Explainer – Local-only tools voor AI validatie

{{< embed_pdf url="/pdf-files/technical-tools/UBDT/20250605 Local-first carrousel.pdf" width_mobile_pdf="12" width_desktop_pdf="6" >}}

{{< container_close >}}

<!-- Ondersteund door -->

{{< container_open title="Ondersteund door" icon="fas fa-toolbox" id="supported-by">}}

Deze tool is ontwikkeld met steun van publieke en filantropische organisaties.

{{< accordions_area_open id="supported-by-accordion" >}}

{{< accordion_item_open title="Innovatiebudget Ministerie van Binnenlandse Zaken" image="/images/partner logo-cropped/MinBZK.png" tag1="2024-25" >}}

##### Beschrijving

In samenwerking met de Dienst Uitvoering Onderwijs (DUO) en het Ministerie van Binnenlandse Zaken heeft Algorithm Audit deze tool ontwikkeld en getest in de periode juli 2024 tot juli 2025 met ondersteuning van <a href="https://www.digitaleoverheid.nl/overzicht-van-alle-onderwerpen/innovatie/innovatiebudget/toekenning-innovatiebudget-2024/" target="_blank">Innovatiebudget</a>, een jaarlijkse competitie georganiseerd door het Ministerie van Binnenlandse Zaken. De voortgang van het project werd gedeeld tijdens een bijeenkomst op 13-02-2025.

![](/images/events/20250213_Demodag2025.jpg)

{{< accordion_item_close >}}

{{< accordion_item_open title="SIDN Fonds" image="/images/partner logo-cropped/SIDN.png" tag1="2024" >}}

##### Beschrijving

In 2024 ondersteunde het SIDN Fonds <a href="https://www.sidnfonds.nl/projecten/open-source-ai-auditing" target="_blank">Algorithm Audit</a> bij het ontwikkelen van een eerste demo van de unsupervised bias detectie tool.

{{< accordion_item_close >}}

{{< accordions_area_close >}}

{{< container_close >}}

<!-- Prijzen en publicaties -->

{{< container_open title="Prijzen en publicaties" icon="fas fa-medal" id="awards-publications">}}

De tool heeft prijzen ontvangen en is erkend door verschillende <a href="https://github.com/NGO-Algorithm-Audit/unsupervised-bias-detection?tab=readme-ov-file#contributing-members" target="_blank">belanghebbenden</a>, waaronder maatschappelijke organisaties, vertegenwoordigers uit de industrie en academische outlets.

{{< accordions_area_open>}}

{{< accordion_item_open title="IASEAI’26 presentatie" image="/images/BDT/IASEAI_logo.png" tag1="2026" >}}

##### Description

De [wetenschappelijke paper](/#scientific-paper) over de tool werd gepresenteerd tijds het International Association for Safe and Ethical Artificial Intelligence (<a href="https://www.iaseai.org" target="_blank">IASEAI’26</a>).

{{< accordion_item_close >}}

{{< accordion_item_open title="OECD Catalogue of Tools & Metrics for Trustworthy AI" image="/images/BDT/oecd_logo.svg" tag1="2024" >}}

##### Description

De unsupervised bias detectie tool maakt deel uit van de <a href="https://oecd.ai/en/catalogue/tools/unsupervised-bias-detection-tool" target="_blank">Catalogue of Tools & Metrics for Trustworthy AI</a>.

{{< accordion_item_close >}}

{{< accordion_item_open title="Finalist Stanford’s AI Audit Challenge 2023" image="/images/partner logo-cropped/StanfordHAI.png" tag1="2023" >}}

##### Beschrijving

Onder de naam Joint Fairness Assessment Method (JFAM) is de unsupervised bias detectie tool geselecteerd als finalist voor <a href="https://hai.stanford.edu/ai-audit-challenge-2023-finalists" target="_blank">Stanford’s AI Audit Competition 2023</a>.

{{< accordion_item_close >}}

{{< accordions_area_close >}}

{{< container_close >}}

<!-- Samenvatting -->

{{< container_open title="Samenvatting" icon="fas fa-dot-circle" id="summary">}}

Belangrijkste punten over de unsupervised bias detectie tool:

- <span style="color:#005AA7">Kwantitatieve-kwalitatieve onderzoeksmethode</span>: Data-gedreven onderzoek naar bias ter ondersteuning van delibartief en context-afhankelijk oordeel van domeinexperts;
- <span style="color:#005AA7">Unsupervised bias detectie</span>: Vereist geen toegang tot bijzondere persoonsgegevens (_unsupervised learning_);
- <span style="color:#005AA7">Anolamiedetectie</span>: Schaalbare methode gebaseerd op statische analyse;
- <span style="color:#005AA7">Detecteert complexe bias</span>: Identificeert groepen die structureel afwijkend worden behandeld en geeft een beschrijving van deze groepen, in staat intersectionele bias te detecteren;
- <span style="color:#005AA7">Model-agnostic</span>: Werkt voor alle algoritmen en AI-systemen;
- <span style="color:#005AA7">Open-source en zonder winstoogmerk</span>: Gebruiksvriendelijke en gratis te gebruiken voor de gehele AI auditing gemeenschap.

{{< container_close >}}

<!-- Team -->

{{< team index="0">}}
