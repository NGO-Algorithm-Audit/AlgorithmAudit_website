---
type: regular
title: Synthetische data generatie tool
subtitle: >
  Tool voor het genereren van synthetische data. De tool genereert automatisch een evaluatierapport om de kwaliteit van de gegenereerde data te beoordelen. Alle data worden lokaal verwerkt zonder gebruik te maken van cloud-toepassingen.
image: /images/svg-illustrations/knowledge_base.svg
team:
  title: Synthetische data generatioe team
  icon: fas fa-user-friends
  button_text: Andere teams
  button_link: /about/teams/
  team_members:
    - image: /images/people/EMenvouta.jpeg
      name: Emmanuel Menvouta PhD
      bio: |
        Freelance machine learning engineer, gespecialiseerd in SDG methodologie
    - image: /images/people/JParie.jpg
      name: Jurriaan Parie
      bio: |
        Directeur-bestuurder Algorithm Audit
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
    - title: Introductie
      url: '#info'
    - title: Technical introduction
      url: '#technical-introduction'
      indent: 1
    - title: Web app
      url: '#web-app'
    - title: Broncode
      url: '#source-code'
    - title: Synthetische data voor AI auditing
      url: '#ai-auditing'
    - title: Toepassingen
      url: '#use-cases'
    - title: Privacy en juridische aspecten
      url: '#privacy-legal'
    - title: Local-first computing
      url: '#local-first'
    - title: Supported by
      url: '#supported-by'
    - title: Team
      url: '#team'
---

<!-- Promobar -->

<div id={{.Get "id" }} class="container-fluid mt-0 p-0">
    <div class="shadow bg-lightblue">
        <div class="row promobar-mobile-desktop-layout">
            <div class="col-12 flex justify-center items-center px-5">
                <!-- Content -->
                <span class="mr-3" style="font-size:16px; color:#005aa7;">
                    <b>👋 Wil je de tool ook lokaal gebruiken? Dat is gemakkelijker dan je denkt! Kom in <u><a href="/nl/about/contact/" >contact</a></u> voor meer informatie.</b>    </span>
            </div>
        </div>
    </div>
</div>



<!-- Introductie -->

{{< container_open title="Introductie – Synthetische data generatie tool" icon="fas fa-table" id="info" >}}

<br>

#### Wat is synthetische data?
Synthetische data is artificiële data die de op groepsniveau de statistische kenmerken van de originele dataset nabootst zonder dat de data persoonsgegevens bevat.

#### Welke data kan worden verwerkt?
De tool verwerkt alle data in tabelvorm. Het type data (numeriek, categorisch, tijd, etc.) en ontbrekende waarden worden automatisch gedetecteerd. De gebruiker heeft verschillende opties om ontbrekende waarden te verwerken. Meer informatie over de omgang met missende waarden wordt in de tool gedeeld.

#### Welke methoden voor synthetische datageneratie worden ondersteund?
Gebruikers kunnen momenteel kiezen uit twee methoden voor het genereren van synthetische data:
1. Classification And Regression Trees (CART); en 
2. Gaussian Copula (GC).

Standaard wordt CART gebruikt. CART produceert synthetische data van goede kwaliteit voor uiteenlopende soorten data, maar werkt mogelijk minder goed bij datasets met categorische variabelen met meer dan 20 categorieën. GC wordt in die gevallen aanbevolen. De tool bevat een demo-dataset waarvoor output wordt gegenereerd. Gebruik de knop ['Probeer het uit'](/technical-tools/sdg/#web-app).

#### Wat is de uitkomst van de tool?
De tool genereert synthetische data. Een evaluatierapport van de gegenereerde data, inclusief verschillende evaluatiemetrieken, wordt automatisch opgesteld en kan als pdf worden gedownload. De synthetische data kan worden gedownload in .csv- en .json-formaat.

#### Hoe wordt mijn data verwerkt?
De tool is privacyvriendelijk omdat de data volledig binnen de browser worden verwerkt. De data verlaat uw computer of de omgeving van uw organisatie niet. De tool maakt gebruik van de rekenkracht van uw eigen computer om de data te analyseren. Dit type browsergebaseerde software wordt aangeduid als [*local-first*](/technical-tools/sdg/#local-first). De tool uploadt geen data naar derden, zoals cloudproviders. Instructies over hoe de tool en de local-first architectuur lokaal binnen uw eigen organisatie kunnen worden gebruikt, zijn te vinden op <a href="https://github.com/NGO-Algorithm-Audit/local-first-web-tool" target="_blank">Github</a>.

Probeer de tool hieronder uit ⬇️

{{< container_close >}}



<!-- Technische details -->

{{< container_open isAccordion="true" title="Technische details – Synthetic data generation" id="technical-introduction" >}}

<br>
De tool voor synthetische datageneratie doorloopt de volgende stappen:

#### Benodigdheden van de gebruiker:
De gebruiker dient de volgende aspecten van de te verwerken data voor te bereiden:
- <span style="color:#005AA7">Dataset:</span> Categorie-, numerieke of tijdsdata.
- <span style="color:#005AA7">Methode:</span> Standaard wordt de CART-methode gebruikt om synthetische data te genereren. CART levert doorgaans synthetische data van hoge kwaliteit, maar werkt mogelijk minder goed bij datasets met categorische variabelen met meer dan 20 categorieën. Gebruik in dat geval Gaussian Copula.
- <span style="color:#005AA7">Aantal synthetische datapunten:</span> Aantal synthetische datapunten dat door de tool wordt gegenereerd. Vanwege de rekencapaciteit van browser-gebaseerde datageneratie is het maximum ingesteld op 5.000.

#### Uitgevoerd door de tool

##### Stap 1. Detecteren van datatypes:
De tool detecteert het type data voor elke kolom van de toegevoegde dataset (numeriek, categorisch of datum/tijd).

##### Stap 2. Verwerken van missende data:
- <span style="color:#005AA7">Missing at Random (MAR):</span> De kans dat data ontbreekt hangt samen met de waargenomen data, maar niet met de ontbrekende data zelf. Het ontbreken kan worden voorspeld door andere variabelen in de dataset. Voorbeeld: Toetsresultaten van studenten ontbreken, maar het ontbreken hangt samen met hun aanwezigheid. In dit scenario worden missende waarden geïmputeerd.
- <span style="color:#005AA7">Missing Not at Random (MNAR):</span> De kans dat data ontbreekt hangt samen met de ontbrekende data zelf. Er is een systematisch patroon in het ontbreken dat samenhangt met de niet-waargenomen data. Voorbeeld: Patiënten met ernstigere symptomen rapporteren deze minder vaak, waardoor ontbrekende data samenhangt met de ernst van de symptomen. Ook hier worden missende waarden geïmputeerd.
- <span style="color:#005AA7">Missing Completely at Random (MCAR):</span> De kans dat data ontbreekt is volledig onafhankelijk van zowel waargenomen als niet-waargenomen data. Er is geen systematisch patroon. Voorbeeld: Een respondent slaat per ongeluk een vraag over door een drukfout. In dit scenario worden missende waarden verwijderd.

##### Stap 3. Preprocessing:
Alle data wordt omgezet naar numeriek formaat met behulp van `LabelEncoder` voor categorische kolommen met minder dan 10 unieke waarden, `OneHotEncoder` voor minder dan 50 unieke waarden en `FrequencyEncoding` voor overige gevallen. Voor numerieke data wordt `StandardScaler` gebruikt.

##### Stap 4. Synthese:
- <span style="color:#005AA7">CART:</span> De CART-methode (Classification and Regression Trees) genereert synthetische data door patronen te leren uit de echte data via een beslisboom die data splitst in homogene groepen op basis van kenmerken. Voor numerieke data worden gemiddelden voorspeld, voor categorische data de meest voorkomende categorie. Op basis hiervan worden nieuwe synthetische datapunten gegenereerd.
- <span style="color:#005AA7">Gaussian Copula:</span> Gaussian Copula werkt in twee stappen: 1. De echte data wordt getransformeerd naar een uniforme verdeling. Correlaties tussen variabelen worden gemodelleerd met een multivariate normale verdeling (de Gaussian copula); en 2. Synthetische data wordt gegenereerd door te sampelen uit deze copula en de samples terug te transformeren naar de oorspronkelijke verdelingen.

##### Stap 5. Postprocessing:
De gecodeerde data wordt teruggezet naar het oorspronkelijke formaat.

##### Stap 6. Evaluatie:
- <span style="color:#005AA7">Visualisatie:</span> Univariate en bivariate grafieken worden gemaakt voor de gegenereerde synthetische data. Voor categorische variabelen worden staafdiagrammen getoond. Voor een combinatie van numerieke en categorische variabelen worden violin plots gemaakt. Voor numerieke variabelen wordt een LOESS-plot getoond. In alle gevallen geldt: de synthetische data is van hoge kwaliteit als de verdelingen van de synthetische data overeenkomen met die van de echte data.
- <span style="color:#005AA7">Diagnostisch rapport:</span> Voor elke kolom worden diagnostische resultaten berekend voor de kwaliteit van de gegenereerde synthetische data. De gebruikte metrics zijn afhankelijk van het datatype.

Voor numerieke (of datum/tijd) kolommen worden de volgende metrics berekend:

- Overeenkomst ontbrekende waarden: Vergelijkt of het aandeel ontbrekende waarden in de synthetische data gelijk is aan dat in de echte data;
- Range coverage: Meet of een synthetische kolom het volledige bereik van waarden uit de echte kolom dekt;
- Boundary adherence: Meet of een synthetische kolom binnen de minimum- en maximumwaarden van de echte kolom blijft. Geeft het percentage synthetische rijen dat binnen de grenzen valt;
- Statistische overeenkomst: Vergelijkt gemiddelde, standaarddeviatie en mediaan tussen echte en synthetische kolom;
- Kolmogorov–Smirnov (KS) complement: Meet de overeenkomst tussen de verdelingen (1D histogram) van echte en synthetische kolommen.

Voor categorische (of booleaanse) kolommen worden de volgende metrics berekend:

- Overeenkomst ontbrekende waarden: Vergelijkt of het aandeel ontbrekende waarden in de synthetische data gelijk is aan dat in de echte data;
- Category coverage: Meet of een synthetische kolom alle categorieën uit de echte kolom bevat;
- Category adherence: Meet of een synthetische kolom zich houdt aan de categorieën uit de echte data;
- Total variation (TV) complement: Meet de overeenkomst tussen de verdelingen (1D histogram) van echte en synthetische kolommen.

💯 Alle waarden dienen dicht bij 1.0 te liggen.
- <span style="color:#005AA7">Download:</span> De gegenereerde synthetische data kan worden gedownload als csv- en json-bestand. De evaluatie volgens bovenstaande metrics kan als evaluatierapport in pdf worden gedownload.

{{< container_close >}}



<!-- Web app -->

{{< iframe src="https://local-first-bias-detection.s3.eu-central-1.amazonaws.com/synthetic-data.html?lang=en" title="Synthetic data generation tool" icon="fas fa-search" id="web-app" height="800px" >}}



<!-- Promo bar -->

{{< promo_bar content="Waardeer je het werk van Algorithm Audit? Geef ons een ⭐️ op" id="promo" >}}



<!-- Broncode -->

{{< container_open title="Broncode" id="source-code" icon="fas fa-toolbox" >}}

- De broncode van de synthetische data generatie methoden zijn beschikbaar op <a href="https://github.com/NGO-Algorithm-Audit/python-synhtpop" target="_blank">Github</a> en als <a href="https://pypi.org/project/unsupervised-bias-detection/" target="_blank">pip package</a>: `pip install python-synthpop`. 

- Instructies om de local-first web apps binnen je eigen organisatie te gebruiken zijn ook beschikbaar op <a href="https://github.com/NGO-Algorithm-Audit/local-first-web-tool" target="_blank">Github</a>.

{{< container_close >}}



<!-- AI auditing -->

{{< container_open title="Hoe kan SDG gebruikt worden voor AI auditing?" icon="fas fa-project-diagram" id="ai-auditing" >}}

Bij het auditeren van algoritme-gedreven besluitvormingsprocessen is een van de meest prangende vragen de representativiteit van de brondata. Privacy vormt echter een obstakel bij het delen van data met externe partijen om de representativiteit van de data te onderzoeken. Zonder toegang tot de brondata kunnen belanghebbenden – zoals personen van wie de data wordt opgeslagen en onafhankelijke experts – deze niet onderzoeken op mogelijke afwijkingen. Hierdoor is de evaluatie van data die worden gebruikt voor besluitvormingsprocessen en het trainen van AI-systemen afhankelijk van een kleine groep experts. Als evaluatie door deze kleine groep niet zorgvuldig wordt uitgevoerd, kan dit onwenselijke gevolgen hebben, zoals slechte datakwaliteit en vooringenomenheid. Dit schaadt het publieke vertrouwen in technologie en in de organisaties die deze digitale methoden inzetten.

Synthetische data generatie (SDG) biedt een oplossing. Door artificiële data te creëren die de eigenschappen van de originele dataset nabootst zonder daarbij persoonsgegevens te delen, maakt SDG het breder delen van data mogelijk. Het wordt beschouwd als een veilige aanpak voor het breder delen van data, omdat het geen naar individuen herleidbare data bevat. In beneden bijgevoegde [memo](/technical-tools/sdg/#privacy-legal) kan meer achtergrondinformatie worden gevonden over de juridische aspecten van synthetische data generatie. 

{{< container_close >}}



<!-- Toepassingen -->

{{< container_open title="Is SDG eerder toegepast?" icon="fas fa-history" id="use-cases" >}}

Voor twee redenen is gebruik van synthetische data lange tijd geremd:
1. <span style="color:#005AA7">Privacyrisico's –</span> Voornamelijk onder juristen bestonden zorgen over de risico's dat bij het delen van synthetische data alsnog persoonsgegevens vrij zouden komen. Onderzoek en praktijkvoorbeelden hebben aangetoond dat deze risico's kunnen worden uitgesloten. Zie ook beneden bijgevoegde [memo](/technical-tools/sdg/#privacy-legal) met meer achtergrondinformatie over de juridische aspecten van synthetische data generatie. 
2. <span style="color:#005AA7">Cloud-afhankelijkheden –</span> Veel bestaande (commerciële) API's zijn afhankelijk van cloudgebaseerde software, wat ze ongeschikt maakt voor publieke organisaties omdat data van burgers niet zo maar naar cloudplatformen geupload mogen worden. [Local-first](/technical-tools/sdg/#local-first) dataverwerking biedt een oplossing voor dit probleem. Met behulp van deze tool kan synthetische data kan in de browser synthetische data worden gegenereerd. De data verlaat de computer van de gebruiker en dus ook de omgeving van organisatie dus niet. 

Kortom, recent use cases hebben laten zien dat synthetische data veilig gedeeld kunnen worden en dat synthetische data gegenereerd kan worden zonder tussenkomst van een cloudprovider. Het is tijd voor opschaling, zodat betrokkenen meer en beter inzicht krijgen op data die overheidsorganisaties van hen beheren.

#### Toepassingen

<a href="https://www.lighthousereports.com/suspicion-machines-methodology/" target="_blank">Lighthouse Reports</a> heeft onbedoeld verkregen data middels synthetische data publiekelijk kunnen delen, waarmee bias in een dataset van de Gemeente Rotterdam aan het licht is gebracht. Deze dataset werd gebruikt voor machine learning-gedreven risicoprofilering in het kader van heronderzoek naar de bijstandsuitkering.

#### AI-verordening

Daarnaast bevat Artikel 10(5) van de AI-verordening een specifieke bepaling over het gebruik van synthetische data voor biasdetectie en -mitigatie. Het vereist dat aanbieders van AI-systemen bias eerst onderzoeken met behulp van synthetische- of geanonimiseerde data, in plaats van direct "bijzondere categorieën persoonsgegevens te verwerken".

{{< container_close >}}



<!-- Privacy en Juridische Aspecten Synthetische tabulaire data -->

{{< container_open icon="far fa-file" title="Privacy en juridische aspecten synthetische tabulaire data" id="privacy-legal" >}}

{{< embed_pdf url="/pdf-files/technical-tools/SDG/Memo_Privacy___Juridische_Aspecten_Synthetische_Data_-_Publieke_Versie.pdf" width_mobile_pdf="12" width_desktop_pdf="6" >}}

{{< container_close >}}



<!-- Local-first architectuur -->

{{< container_open title="Local-first architectuur" icon="fas fa-map-pin" id="local-first" >}}

<br>

#### Wat is local-first?
Local-first is het tegenovergestelde van cloud computing: de data worden niet geüpload naar derden, zoals cloudproviders, maar wordt verwerkt door je eigen computer. De data die aan deze tool worden gekoppeld, verlaten je computer of de omgeving van je organisatie dus niet. De tool is privacyvriendelijk omdat de data binnen bestaande bevoegdheden worden verwerkt en niet gedeeld hoeven te worden met nieuwe partijen. Deze synthetische data generatie tool kan ook lokaal binnen je organisatie worden gebruikt. Instructies hiervoor, inclusief de broncode van de tool, kunnen gevonden worden op <a href="https://github.com/NGO-Algorithm-Audit/local-first-web-tool" target="_blank">Github</a>.

#### Overzicht van local-first architectuur

<div style="margin-bottom:50px; display: flex; justify-content: center;">
  <img src="/images/BDT/local-first NL.png" alt="drawing" width="100%"/>
</div>

{{< container_close >}}



<!-- Ondersteund door -->

{{< container_open title="Ondersteund door" icon="fas fa-toolbox" id="supported-by">}}

Deze local-first synthetische data generatie tool is ontwikkeld met steun van publieke en filantropische organisaties.

{{< accordions_area_open>}}

{{< accordion_item_open title="Innovatiebudget Ministerie van Binnenlandse Zaken" image="/images/supported_by/BZK.jpg" tag1="2024-25" >}}

##### Beschrijving
In samenwerking met de Dienst Uitvoering Onderwijs (DUO) en het Ministerie van Binnenlandse Zaken heeft Algorithm Audit deze tool ontwikkeld en getest in de periode juli 2024 tot juli 2025 met ondersteuning van <a href="https://www.digitaleoverheid.nl/overzicht-van-alle-onderwerpen/innovatie/innovatiebudget/toekenning-innovatiebudget-2024/" target="_blank">Innovatiebudget</a>, een jaarlijkse competitie georganiseerd door het Ministerie van Binnenlandse Zaken. De voortgang van het project werd gedeeld tijdens een bijeenkomst op 13-02-2025. Een eerste versie van de tools zijn tijdens een webinar online gelanceerd op 10-06-2025.

![](/images/events/20250213_Demodag2025.jpg)

{{< accordion_item_close >}}

{{< accordion_item_open title="SIDN Fonds" image="/images/supported_by/sidn.png" tag1="2024" >}}

##### Beschrijving
In 2024 ondersteunde het SIDN Fonds <a href="https://www.sidnfonds.nl/projecten/open-source-ai-auditing" target="_blank">Algorithm Audit</a> bij het ontwikkelen van een eerste demo van de synthetische data generatie tool.

{{< accordion_item_close >}}

{{< accordions_area_close >}}

{{< container_close >}}



<!-- Team -->

{{< team id="team" >}}