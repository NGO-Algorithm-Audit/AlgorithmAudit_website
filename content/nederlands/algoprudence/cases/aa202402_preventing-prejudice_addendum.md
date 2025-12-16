---
icon: fas fa-balance-scale-left
layout: case
title: Addendum Vooringenomenheid voorkomen
subtitle: >
  Addendum op eerder
  [auditrapport](/nl/algoprudence/cases/aa202401_preventing-prejudice/)
  (TA:AA:2024:01) – Biasmeting aan de hand van CBS-data over het Controle
  Uitwonendenbeurs (CUB) proces van DUO
image: /images/algoprudence/AA202402/AA202402_cover.png
dynamic_form_engine:
  - title: Reageer op deze technische audit
    content: >-
      Uw reactie wordt verstuurd naar het auditing team. Het team leest de reactie
      en, indien het verenigbaar is met Algorithm Audit's richtlijnen voor
      publicatie, wordt de reactie geplaatst in bovenstaande Discussie & debat
      sectie.
    id: case-reaction
    icon: fas fa-align-justify
    section:
      - questions:
          - title: |
              Naam
            identifier: name
            required: true
            type: text
          - title: |
              Affiliated organization
            identifier: affiliated-organization
            type: text
          - title: |
              Reactie
            identifier: reaction
            required: true
            type: textarea
          - title: |
              Contactgegevens
            identifier: contact-details
            required: true
            type: email
            placeholder: Emailadres
    complete_form_options:
      type: submit
      button_text: Verstuur
      backend_link: "https://formspree.io/f/xyyrjyzr"
---

{{< tab_header width="4" tab1_id="description" tab1_title="Beschrijving van technische audit" tab2_id="actions" tab2_title="Acties volgend op technische audit" tab3_id="discussion" tab3_title="Discussie & debat" default_tab="description" >}}

{{< tab_content_open icon="fas fa-balance-scale-left" title="Addendum Vooringenomenheid voorkomen" id="description" >}}

#### Nummer van technische audit

TA:AA:2024:02

#### Samenvatting

In de controle op rechtmatig gebruik van studiefinanciering voor uitwonende studenten controleerde de Dienst Uitvoering Onderwijs (DUO) aanzienlijk vaker studenten met een niet-Europese migratieachtergrond. Hieruit blijkt een onbewuste vooringenomenheid van het controleproces van DUO. Studenten met een niet-Europese migratieachtergrond kregen een hogere risicoscore toegekend door een risicoprofiel en werden vaker handmatig geselecteerd voor een huisbezoek. Dit blijkt uit vervolgonderzoek dat stichting Algorithm Audit heeft uitgevoerd in opdracht van DUO en op 22 mei door de minister aan de Tweede Kamer is verstuurd. De onderzoeksresultaten versterken het beeld van eerder onderzoek, op basis waarvan de minister op 1 maart 2024 namens het kabinet zijn excuses heeft aangeboden voor indirecte discriminatie in het controleproces.

Een persbericht kan [hier](/nl/events/press_room/) worden gevonden.

#### Github repository

<p>
  <a href="https://github.com/NGO-Algorithm-Audit/DUO-CUB"
     target="_blank"
     rel="noopener">
    https://github.com/NGO-Algorithm-Audit/DUO-CUB
  </a>
</p>

#### Bron van de casus

Dienst Uitvoering Onderwijs (DUO)

#### Auditrapport

{{< embed_pdf url="/pdf-files/algoprudence/TA_AA202402/TA_AA202402_Addendum_Vooringenomenheid_voorkomen.pdf" >}}

{{< tab_content_close >}}

{{< tab_content_open icon="" title="" id="actions" >}}

{{< accordions_area_open id="actions" >}}

{{< accordion_item_open title="Vervolgonderzoek CBS en Algorithm Audit naar controle uitwonendenbeurs" background_color="#eef2f6" date="22-05-2024" tag1="migratieachtergrond" tag2="bias meting" tag3="CBS" image="/images/algoprudence/AA202401/Actions/TK.svg" >}}

#### Reactie Minister Onderwijs, Cultuur en Wetenschap

Officiële <a href='https://www.tweedekamer.nl/kamerstukken/brieven_regering/detail?id=2024Z08699&did=2024D20430' target="_blank">reactie</a>

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

{{< dynamic_form_engine index="0" >}}
