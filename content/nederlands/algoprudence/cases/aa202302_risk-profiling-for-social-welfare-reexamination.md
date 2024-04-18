---
icon: fa-poll-h
layout: case
title: Risicoprofilering heronderzoek bijstandsuitkering
subtitle: |
  Probleemstelling (AA:2023:02:P) en adviesdocument (AA:2023:02:A)
image: /images/algoprudence/AA202302/AA202302A_front_icon_NL.png
form1:
  title: Reageer op dit normatieve oordeel
  content: >-
    Uw reactie wordt verstuurd naar het auditing team. Het team leest de reactie
    en, indien het verenigbaar is met Algorithm Audit's richtlijnen voor
    publicatie, wordt de reactie geplaatst in bovenstaande Discussie & debat
    sectie.
  button_text: Verstuur
  backend_link: 'https://formspree.io/f/xyyrjyzr'
  id: case-reaction
  questions:
    - label: |
        Naam
      id: name
      required: true
      type: text
    - label: |
        Affiliated organization
      id: affiliated-organization
      type: text
    - label: |
        Reactie
      id: reaction
      required: true
      type: textarea
    - label: |
        Contactgegevens
      id: contact-details
      required: true
      type: email
      placeholder: Emailadres
---

{{< tab_header width="4" tab1_id="description" tab1_title="Beschrijving algoprudentie" tab2_id="actions" tab2_title="Acties volgend op algoprudentie" tab3_id="discussion" tab3_title="Discussie & debat" default_tab="description" >}}

{{< tab_content_open icon="fa-poll-h" title="Risicoprofilering heronderzoek bijstandsuitkering" id="description" >}}

#### Algoprudentienummer

AA:2023:02

#### Hoofdpunten normatieve adviescommissie

* <span style="color:#005aa7; font-weight:600;">Algoritmische profilering is onder strikte voorwaarden mogelijk</span>\
  Mits zorgvuldig toegepast kan algoritmische profilering verantwoord worden ingezet voor heronderzoek naar de rechtmatigheid van bijstandsuitkeringen.
* <span style="color:#005aa7; font-weight:600;">Profilering moet geen verdenking zijn</span>\
  Heronderzoek moet meer op dienstverlening en minder op wantrouwen zijn gebaseerd.
* <span style="color:#005aa7; font-weight:600;">Diversiteit aan selectiemethoden</span>\
  Om tunnelvisie en feedbackloops te vermijden is het wenselijk om algoritmische profilering te combineren met expert-gedreven profilering en aselecte steekproeven.
* <span style="color:#005aa7; font-weight:600;">Verantwoord gebruik van profileringscriteria</span>\
  Met oog op het voorkomen van (proxy)discriminatie en andere onwenselijke vormen van onderscheid maakt de commissie per variabele een afweging over de geschiktheid voor profileringsdoeleinden (zie Infographic).
* <span style="color:#005aa7; font-weight:600;">Uitlegbaarheidsvereisten machine learning</span>\
  Het is noodzakelijk dat de selectie van inwoners door de gehele besluitvormingsketen uitlegbaar is. Complexe trainingsmethoden om profileringscriteria te selecteren, zoals het onderhavige xgboost-algoritme, worden te complex geacht om te voldoen aan uitlegbaarheidsvereisten.

#### Infographic

{{< image id="infographic" width_desktop="10" width_mobile="12" image1="/images/algoprudence/AA202302/Infographic_NL.png" alt1="Infographic" caption1="Infographic" >}}

#### Samenvatting

De commissie oordeelt dat algoritmische risicoprofilering onder strikte voorwaarden kan worden ingezet voor het selecteren van burgers met een bijstandsuitkering voor heronderzoek. Het oogmerk van heronderzoek is een leidende factor bij de beoordeling van profileringscriteria. Indien het bijstandsheronderzoek minder op basis van verdenking en meer op basis van dienstverlening zou worden ingevuld, dan laat de commissie meer ruimte voor het gebruik van profileringsvariabelen om hulpbehoevende groepen gericht van dienst te kunnen zijn. Voor de verschillende variabelen die door de Gemeente Rotterdam zijn gebruikt in de periode 2017-2021 geeft de commissie een onderbouwd oordeel waarom deze variabelen wel of niet wenselijk zijn om als selectiecriterium voor profilering te worden gebruikt (zie Infographic). Gecombineerde inzet van verschillende selectiemethoden (waaronder expert-gedreven profilering en aselecte steekproeven) wordt wenselijk geacht om tunnelvisie en verkeerde feedbackloops te doorbreken. De commissie adviseert om zwaardere eisen te stellen aan algoritmische variabelenselectie dan voor profileringscriteria geselecteerd door domeinexperts. De commissie stelt dat algoritmes die ter ondersteun- ing worden ingezet om burgers te selecteren voor heronderzoek uitlegbaar moeten zijn. Complexe trainingsmethoden, zoals het xgboost-algoritme gebruikt door de Gemeente Rotterdam, kunnen niet voldoen aan deze uitlegbaarheidsvereisten. Dit advies is gericht aan alle Nederlandse en Europese gemeenten die profileringsmethoden in de context van sociale voorzieningen overwegen of toepassen.

#### Bron van de casus

Ongevraagd advies aan alle 340+ Nederlandse gemeenten. Onderzoek bouwt voort op [wob-documenten](https://www.vpro.nl/argos/media/luister/argos-radio/onderwerpen/2021/In-het-vizier-van-het-algoritme-.html) gepubliceerd door onderzoeksjournalisten.

#### Presentatie

Het adviesrapport (AA:2023:02:A) is op 29 november 2023 aangeboden aan de Staatssecretaris van Digitalisering. Een persbericht kan [hier](https://algorithmaudit.eu/pressroom) worden gevonden. 

{{< image id="presentation-minister" image1="/images/algoprudence/AA202302/Algorithm audit presentatie BZK FB-18.jpg" alt1="Presentation advice report to Dutch Minister of Digitalization" caption1="Presentation advice report to Dutch Minister of Digitalization" width_desktop="5" width_mobile="12" >}}

#### Algoprudentie

Het adviesrapport (AA:2023:02:A) kan [hier](https://drive.google.com/file/d/19ZkqTXC5M9qx3wPZFNe3Vqn6Ha0B3Yii/view?usp=sharing) worden gedownload en de probleemstelling (AA:2023:02:P) [hier](https://drive.google.com/file/d/1GSGW0-jCTsJmxYJmu6tjq6UgZJkCN5_r/view?usp=sharing).

{{< pdf_frame articleUrl1="https://drive.google.com/file/d/1_8NclIHyQ2rE8e7lRc3cibW13VO8KbbE/preview" articleUrl2="https://drive.google.com/file/d/1t-hkH-lCU2fOu11XELX6xbifdTRiGAQ9/preview" >}}

#### Normatieve adviescommissie

* Abderrahman El Aazani, onderzoeker bij Ombudsman Rotterdam-Rijnmond
* Francien Dechesne, Associate Professor Law and Digital Technologies, Universiteit Leiden
* Maarten van Asten, wethouder Financiën, Digitalisering, Sport en Evenementen Gemeente Tilburg
* Munish Ramlal, ombudsman Metropool Amsterdam
* Oskar Gstrein, Assistant Professor Governance and Innovation, Rijksuniversiteit Groningen

#### Gefinancieerd door

<br>

{{< image image1="/images/supported_by/sidn.png" alt1="SIDN" caption1="SIDN" image2="/images/supported_by/EUAISFund.png" alt2="European AI & Society Fund" caption2="European AI & Society Fund" id="funded-by" image3="/images/supported_by/BZK.jpg" alt3="Dutch Ministry of the Interior" caption3="Dutch Ministry of the Interior" link1="https://www.sidnfonds.nl/projecten/ethical-risk-assessment-tool" width_desktop="4" width_mobile="6" link2="https://europeanaifund.org/" link3="https://www.government.nl/ministries/ministry-of-the-interior-and-kingdom-relations" >}}

{{< tab_content_close >}}

{{< tab_content_open icon="" title="" id="actions" >}}

{{< accordions_area_open id="actions" >}}

{{< accordion_item_open title="Vragen Amsterdamse gemeenteraad" image="/images/algoprudence/AA202302/Actions/images.png" id="amsterdam" date="04-12-2023" tag1="politieke actie" >}}

##### Beschrijving

Raadsleden hebben naar aanleiding van adviesrapport AA-2023:02:A <a href="https://amsterdam.raadsinformatie.nl/document/13573898/1/236+sv+Aslami%2C+IJmker+en+Garmy+inzake+toegepaste+profileringscriteria+gemeentelijke+algoritmes" target="_blank">vragen</a> gesteld aan het college van Burgemeester en Wethouders over een vergelijkbaar machine learning-gedreven algoritme ‘Slimme check levensonderhoud’ dat de gemeente Amsterdam momenteel als pilot test. De vragen hebben betrekking tot:

* (on)geschikte selectiecriteria die aan het ML gevoed kunnen worden voor variabeleselectie
* uitlegbaarheidsvereisten voor het gebruikte explainable boosting algoritme
* implicaties van de aanstaande AI Verordening voor deze vorm van risicoprofileren.

{{< pdf_frame articleUrl1="https://drive.google.com/file/d/1oPiO_s9KuV7446BqC9a4P2qjW7MGUyxu/preview" >}}

{{< accordion_item_close >}}

{{< accordion_item_open title="Binnenlands Bestuur" image="/images/algoprudence/AA202302/Actions/logo-bb.svg" id="binnenlands-bestuur" date="01-12-2023" tag1="nieuws" >}}

##### Beschrijving

<a href="https://www.binnenlandsbestuur.nl/digitaal/algoritmische-profilering-onder-strikte-voorwaarden-mogelijk" target="_blank">Nieuwsitem</a> op website van Binnenlands Bestuur over nieuwe algoprudentie.

{{< accordion_item_close >}}

{{< accordions_area_close >}}

{{< tab_content_close >}}

{{< tab_content_open id="discussion" >}}

{{< accordions_area_open id="discussion" >}}

{{< accordion_item_open title="Reactie College Rechten van de Mens leeftijdsdiscriminatie" id="cvrm" background_color="#eef2f6" date="12-04-2024" tag1="reactie" image="/images/algoprudence/AA202302/Discussion&debate/CvRM.svg" >}}

#### Leeftijdsdiscriminatie


Een beleid, zoals een overheidsinstantie die fraude onderzoekt of een werkgever die nieuwe werknemers zoekt, kan bedoeld of onbedoeld leiden tot onderscheid tussen bepaalde groepen mensen. Als een organisatie dit onderscheid maakt op gronden die wettelijk beschermd zijn, zoals geslacht, afkomst, seksuele oriëntatie, of een handicap of chronische ziekte, en hiervoor is geen goede, rechtvaardigende reden voor te geven is, dan maakt de organisatie verboden onderscheid. We spreken dan van discriminatie. 


En leeftijd dan? Zowel het Rotterdamse als het DUO-algoritme waar Algorithm Audit onderzoek naar deed, maakte daar onderscheid op. Toch is er in die gevallen geen sprake van leeftijdsdiscriminatie. 


De gelijkebehandelingswetgeving kent ook een verbod op onderscheid naar leeftijd. Een sollicitant zomaar weigeren voor een baan omdat diegene te oud is, mag dus niet. Maar de wetgeving rond leeftijdonderscheid laat wel meer ruimte voor een rechtvaardigend argument dan de eerdergenoemde persoonskenmerken. Dit geldt zeker als het algoritme niet gaat over arbeidskwesties.  In het geval van opsporing van bijstandsfraude of misbruik van studiefinanciering is het daarom niet per se verboden dat een algoritme iemands leeftijd meeneemt. Toch zal er wel een duidelijk verband moet zijn tussen leeftijd en het doel van het algoritme. Zolang niet is aangetoond dat iemands leeftijd de kans vergroot op misbruik of fraude mag je leeftijd evengoed niet laten meewegen in de algoritmische selectie. Als het bijvoorbeeld gaat om een Wajong-uitkering die je alleen tot een bepaalde leeftijd mag aanvragen, dan is er wel een duidelijk verband, en dan zou een algoritme daar wel naar kunnen kijken.

{{< accordion_item_close >}}

{{< accordions_area_close >}}

{{< tab_content_close >}}

{{< form1 >}}
