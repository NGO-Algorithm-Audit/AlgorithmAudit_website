---
type: regular
title: Synthetische data generatie tool
subtitle: >
  Tool voor het genereren van synthetische data. De tool genereert automatisch een evaluatierapport om de kwaliteit van de gegenereerde data te beoordelen. Alle data worden lokaal verwerkt zonder gebruik te maken van cloud-toepassingen.
image: /images/svg-illustrations/local-only.svg
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
    - image: /images/people/MLisdonk.png
      name: Maikel van de Lisdonk
      bio: |
        Freelance software developer
    - image: /images/people/RLangius.jpg
      name: Ruben Langius
      bio: |
        Freelance software developer
quick_navigation:
  title: Inhoudsopgave
  links:
    - title: Introductie
      url: '#info'
    - title: Technische introductie
      url: '#technical-introduction'
      indent: 1
    - title: Tool
      url: '#web-app'
    - title: Broncode
      url: '#source-code'
    - title: Synthetische data voor AI auditing
      url: '#ai-auditing'
    - title: Toepassingen
      url: '#use-cases'
    - title: Privacy en juridische aspecten
      url: '#privacy-legal'
    - title: Local-only architectuur
      url: '#local-only'
    - title: Ondersteund door
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

#### Wat is de uitkomst van de tool?
De tool genereert synthetische data. Een evaluatierapport van de gegenereerde data, inclusief verschillende evaluatiemetrieken, wordt automatisch opgesteld en kan als pdf worden gedownload. De synthetische data kan worden gedownload in .csv- en .json-formaat.

<div style="margin-bottom:25px; display: flex; justify-content: center;">
  <img src="/images/SDG/example_SDG.png" alt="drawing" width="600px"/>
</div>

#### Welke methoden voor synthetische datageneratie worden ondersteund?
Gebruikers kunnen momenteel kiezen uit twee methoden voor het genereren van synthetische data:
1. Classification And Regression Trees (CART); en 
2. Gaussian Copula (GC).

Standaard wordt CART gebruikt. CART produceert synthetische data van goede kwaliteit voor uiteenlopende soorten data, maar werkt mogelijk minder goed bij datasets met categorische variabelen met meer dan 20 categorieën. GC wordt in die gevallen aanbevolen. De tool bevat een demo-dataset waarvoor output wordt gegenereerd. Gebruik de knop ['Probeer het uit'](/technical-tools/sdg/#web-app).

#### Is mijn data veilig?
Ja! Je data blijft op je eigen computer en verlaat de omgeving van je organisatie niet. De tool werkt in je browser en gebruikt de rekenkracht van je lokla apparaat om de data te analyseren. Deze aanpak, ‘local-only’ genoemd, zorgt ervoor dat er geen data met cloudproviders of anderen wordt gedeeld. Meer informatie over deze local-only architectuur vind je [hieronder](/nl/technical-tools/bdt/#local-only). Instructies om local-only tools binnen je organisatie te hosten zijn te vinden op <a href="https://github.com/NGO-Algorithm-Audit/local-only-web-tool" target="_blank">Github</a>.

Probeer de tool hieronder uit ⬇️

{{< container_close >}}



<!-- Technische introductie -->

{{< container_open isAccordion="true" title="Technische introductie – Synthetische data generatie" id="technical-introduction" >}}

<br>

De tool voor synthetische data generatie doorloopt de volgende stappen:

#### Benodigdheden van de gebruiker:
De gebruiker dient de volgende aspecten voor te bereiden:
- <span style="color:#005AA7">Dataset:</span> Alleen categorische, numerieke of tijdsdata kunnen worden verwerkt. Datasets mogen maximaal 8 kolommen bevatten, dienen een header te hebben met kolomnamen en hoeven geen index-kolom te hebben.
- <span style="color:#005AA7">Methode:</span> Standaard wordt de CART-methode gebruikt om synthetische data te genereren. CART levert doorgaans synthetische data van hoge kwaliteit, maar werkt mogelijk minder goed bij datasets met categorische variabelen met meer dan 20 categorieën. Gebruik in dat geval Gaussian Copula.
- <span style="color:#005AA7">Aantal synthetische datapunten:</span> Aantal synthetische datapunten die door de tool worden gegenereerd. Vanwege de rekencapaciteit van browser-gebaseerde datageneratie is het maximum ingesteld op 5.000.

#### Uitgevoerd door de tool
De volgende stappen worden door de tool uitgevoerd:

##### Stap 1. Detecteren van datatypes:
De tool detecteert het type data voor elke kolom van de gekoppelde dataset (numerieke, categorische of tijdsdata).

##### Stap 2. Omgang met missende data:
- <span style="color:#005AA7">Missing at Random (MAR):</span> De kans dat data ontbreekt hangt samen met de waargenomen data, maar niet met de ontbrekende data zelf. Het ontbreken kan worden voorspeld door andere variabelen in de dataset. Voorbeeld: toetsresultaten van studenten ontbreken, maar het ontbreken hangt samen met hun aanwezigheid. In dit scenario worden missende waarden vervangen door schattingen.
- <span style="color:#005AA7">Missing Not at Random (MNAR):</span> De kans dat data ontbreekt hangt samen met de ontbrekende data zelf. Er is een  patroon in het ontbreken van waarden dat samenhangt met de niet-waargenomen data. Voorbeeld: patiënten met ernstigere symptomen rapporteren deze minder vaak, waardoor ontbrekende data samenhangen met de ernst van de symptomen. Ook in dit scenario worden missende waarden vervangen door schattingen.
- <span style="color:#005AA7">Missing Completely at Random (MCAR):</span> De kans dat data ontbreekt is volledig onafhankelijk van zowel waargenomen als niet-waargenomen data. Er is geen systematisch patroon. Voorbeeld: Een respondent slaat per ongeluk een vraag over door een drukfout. In dit scenario worden missende waarden verwijderd.

Meer informatie over concepten MCAR, MAR en MNAR kan worden gevonden in het boek <a href="https://stefvanbuuren.name/fimd/sec-MCAR.html" target="_blank">Flexible Imputation of Missing Data</a> van prof. Stef van Buuren, Universiteit Utrecht.

##### Stap [ongenummerd] Pre-verwerking:
Alle data worden omgezet naar numeriek formaat met behulp van `LabelEncoder` voor categorische kolommen met minder dan 10 unieke waarden, `OneHotEncoder` voor minder dan 50 unieke waarden en `FrequencyEncoding` voor overige gevallen. Voor numerieke data wordt `StandardScaler` gebruikt.

##### Stap 3. Synthese methode
- <span style="color:#005AA7">CART:</span> De CART-methode (Classification and Regression Trees) genereert synthetische data door patronen te leren uit de echte data via een beslisboom die op basis van kenmerken data splitst in homogene groepen. Voor numerieke data worden gemiddelden voorspeld, voor categorische data de meest voorkomende categorie. Op basis hiervan worden nieuwe synthetische datapunten gegenereerd/gesampled.
- <span style="color:#005AA7">Gaussian Copula:</span> Gaussian Copula werkt in twee stappen: 1. De echte data worden getransformeerd naar een uniforme verdeling. Correlaties tussen variabelen worden gemodelleerd met een multivariate normale verdeling (de Gaussian copula); en 2. Synthetische data worden gegenereerd door te sampelen uit deze copula en de samples terug te transformeren naar de oorspronkelijke verdelingen.

##### Stap [ongenummerd] Post-verwerking:
De gecodeerde data worden teruggezet naar het oorspronkelijke formaat.

##### Stap 4. Evaluatie:
De gegenereerde synthetische data worden op verschillende manieren geëvalueerd.

###### Step 4.1 Visualisatie:
Univariate en bivariate grafieken worden gemaakt om de gegenereerde synthetische data te vergelijken met de echte data. Voor categorische variabelen worden staafdiagrammen getoond. Voor een combinatie van numerieke en categorische variabelen wordt een <a href="https://en.wikipedia.org/wiki/Violin_plot" target="_blank">viool-plot</a> gemaakt. Voor numerieke variabelen wordt een <a href="https://en.wikipedia.org/wiki/Local_regression" target="_blank">LOESS-plot</a> getoond. In alle gevallen geldt: de synthetische data is van hoge kwaliteit als de verdelingen van de synthetische data overeenkomen met die van de echte data.

###### Stap 4.2 Diagnostisch rapport:
Voor elke kolom worden diagnostische resultaten bepaald voor de kwaliteit van de gegenereerde synthetische data. De gebruikte metrieken zijn afhankelijk van het datatype.

###### Diagnostische resultaten:
- <span style="color:#005AA7">Overeenkomst ontbrekende waarden:</span> Vergelijkt of het aandeel missende waarden in de synthetische data gelijk is aan dat in de echte data;
- <span style="color:#005AA7">Bereik dekkend:</span> Bepaalt per kolom of synthetische data het volledige bereik van waarden uit de echte data dekt;
- <span style="color:#005AA7">Grens eerbiediging:</span> Bepaalt per kolom  of synthetische data binnen de minimum- en maximumwaarden van de echte data blijven. Geeft het percentage rijen synthetische data dat binnen de grenzen valt;
- <span style="color:#005AA7">Statistische overeenkomst:</span> Vergelijkt per kolom gemiddelde, standaarddeviatie en mediaan tussen echte en synthetische data;
- <span style="color:#005AA7">Kolmogorov–Smirnov (KS) complement:</span> Meet het maximale verschil tussen de cumulatieve distributiefuncties (CDF's) van numerieke kolommen in de synthetische en echte dataset.

Voor categorische kolommen worden de volgende metrieken berekend:

- <span style="color:#005AA7">Overeenkomst ontbrekende waarden:</span> Vergelijkt of het aandeel missende waarden in de synthetische data gelijk is aan dat in de echte data;
- <span style="color:#005AA7">Categorie dekking:</span> Bepaalt per kolom of de synthetische data alle categorieën uit de echte data bevat;
- <span style="color:#005AA7">Categorie eerbiediging:</span> Bepaalt per kolom of synthetische data dezelfde categorieën bevat als de echte data;
- <span style="color:#005AA7">Totale variatie (TV) complement:</span> Meet het maximale verschil tussen de cumulatieve distributiefuncties (CDF's) van categorische kolommen in de synthetische en echte dataset.

💯 Bij goede kwaliteit synthetische data liggen alle waarden in de buurt van de 1.0, maar zeker hoger dan 0.85.

###### Correlatiematrix:
De één-op-één correlaties tussen variabelen in de synthetische en echte data worden berekend, wat de sterkte en richting van hun lineaire relaties aangeeft. De correlatiematrix van de gegenereerde synthetische en echte data dienen grofweg dezelfde patronen te hebben.

###### Effectiviteitsmetrieken:
Effectiviteitsmetrieken worden gebruikt om de kwaliteit en bruikbaarheid van synthetische data te beoordelen door te meten hoe goed een regressie- en classificatiemodel, getraind op synthetische data, presteert in vergelijking met modellen die op echte data zijn getraind.

Voor regressie (wanneer de doelvariabele numeriek is) worden de volgende metrieken berekend:
- <span style="color:#005AA7">Mean squared error (MSE):</span> de gemiddelde kwadratische afwijking tussen voorspelde en werkelijke waarden, waarmee de nauwkeurigheid van de voorspellingen wordt gekwantificeerd en grotere fouten zwaarder worden bestraft;
- <span style="color:#005AA7">Mean absolute error (MAE):</span> de gemiddelde absolute afwijking tussen voorspelde en werkelijke waarden, wat een directe maat geeft voor de nauwkeurigheid van het model zonder grote fouten extra te benadrukken;
- <span style="color:#005AA7">R² score:</span> geeft aan in hoeverre de voorspellingen van het model overeenkomen met de werkelijke data door het aandeel verklaarde variantie in de doelvariabele te meten.

Voor classificatie (wanneer de doelvariabele categorisch is) worden de volgende metrieken berekend:
- <span style="color:#005AA7">Accuracy score:</span> meet het aandeel correct voorspelde gevallen ten opzichte van het totaal, en geeft zo een algemene beoordeling van de prestaties van het classificatiemodel;
- <span style="color:#005AA7">Gewogen F1-score:</span> het harmonisch gemiddelde van precisie en recall, berekend per klasse en gewogen naar het aantal echte gevallen per klasse, wat een metriek biedt voor datasets met ongelijke klassenverdeling.

###### Privacy metriek:
De *onthullings beschermings metriek* meet het aandeel synthetische datapunten die te veel lijkt op echte datapunten (binnen een vooraf gedefinieerde drempelwaarde), wat een risico op herleidbaarheid naar persoonsgegevens vormt. Een lage waarde van deze metriek duidt op een goede bescherming tegen het onbedoeld prijsgeven van persoonsgegevens.

##### Step 5. Download:
De gegenereerde synthetische data kan worden gedownload als csv- en json-bestand. De evaluatie volgens bovenstaande metrics kan als evaluatierapport in pdf worden gedownload.

#### Documentatie
Meer documentatie over de tool en onderliggende SDG methoden kunnen worden gevonden op <a href="https://github.com/NGO-Algorithm-Audit/python-synhtpop" target="_blank">Github</a>.

{{< container_close >}}



<!-- Web app -->

{{< iframe src="https://local-first-bias-detection.s3.eu-central-1.amazonaws.com/synthetic-data.html?lang=nl" title="Synthetische data generatie tool" icon="fas fa-table" id="web-app" height="800px" >}}



<!-- Promo bar -->

{{< promo_bar content="Waardeer je het werk van Algorithm Audit? Geef ons een ⭐️ op" id="promo" >}}



<!-- Broncode -->

{{< container_open title="Broncode" id="source-code" icon="fas fa-toolbox" >}}

- De broncode van de synthetische data generatie methoden zijn beschikbaar op <a href="https://github.com/NGO-Algorithm-Audit/python-synhtpop" target="_blank">Github</a> en als <a href="https://pypi.org/project/unsupervised-bias-detection/" target="_blank">pip package</a>: `pip install python-synthpop`. 

- De achitectuur om web apps local-only te gebruiken is ook beschikbaar op <a href="https://github.com/NGO-Algorithm-Audit/local-first-web-tool" target="_blank">Github</a>.

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
2. <span style="color:#005AA7">Cloud-afhankelijkheden –</span> Veel bestaande (commerciële) API's zijn afhankelijk van cloudgebaseerde software, wat ze ongeschikt maakt voor publieke organisaties omdat data van burgers niet zo maar naar cloudplatformen geupload mogen worden. [Local-only](/technical-tools/sdg/#local-only) dataverwerking biedt een oplossing voor dit probleem. Met behulp van deze tool kan synthetische data kan in de browser synthetische data worden gegenereerd. De data verlaat de computer van de gebruiker en dus ook de omgeving van organisatie dus niet. 

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

Deze local-only synthetische data generatie tool is ontwikkeld met steun van publieke en filantropische organisaties.

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