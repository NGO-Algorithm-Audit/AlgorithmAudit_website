---
type: regular
title: Synthetische data generatie tool
subtitle: >
  Local-first tool voor het genereren van synthetische tabulaire data. De tool genereert automatisch een evaluatierapport om de kwaliteit van de data te beoordelen. Alle data worden lokaal verwerkt zonder gebruik te maken van cloud-toepassingen.
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
    - title: Local-first computing
      url: '#local-first'
    - title: Supported by
      url: '#supported-by'
    - title: Team
      url: '#team'
---



<!-- Introductie -->

{{< container_open title="Introductie – Synthetische data generatie tool" icon="fas fa-table" id="info" >}}

<br>

#### Wat is synthetische data?
Synthetische data is artificiële data die de op groepsniveau de statistische kenmerken van de originele dataset nabootst zonder daarbij persoonlijke gegevens te delen.

#### Welke data kan worden verwerkt?
De tool verwerkt alle data in tabelvorm. Het type data (numeriek, categorisch, tijd, etc.) en ontbrekende waarden worden automatisch gedetecteerd. De gebruiker heeft verschillende opties om ontbrekende waarden te verwerken. Meer informatie wordt in de tool verstrekt.

#### Welke methoden voor synthetische datageneratie worden ondersteund?
Gebruikers kunnen momenteel kiezen uit twee methoden voor het genereren van synthetische data:
1. Classification And Regression Trees (CART); en 
2. Gaussian Copula (GC).

Standaard wordt CART gebruikt. CART produceert synthetische data van goede kwaliteit voor uiteenlopende soorten data, maar werkt mogelijk minder goed bij datasets met categorische variabelen met meer dan 20 categorieën. GC wordt in die gevallen aanbevolen. De tool bevat een demo-dataset waarvoor output wordt gegenereerd. Gebruik de knop ['Probeer het uit'](/technical-tools/sdg/#web-app).

#### Wat is de uitkomst van de tool?
De tool genereert synthetische data. Een evaluatierapport van de gegenereerde data, inclusief verschillende evaluatiemetrieken, wordt automatisch opgesteld en kan als pdf worden gedownload. De synthetische data kan worden gedownload in .csv- en .json-formaat.

#### Hoe wordt mijn data verwerkt?
De tool is privacyvriendelijk omdat de data volledig binnen de browser wordt verwerkt. De data verlaat uw computer of de omgeving van uw organisatie niet. De tool maakt gebruik van de rekenkracht van uw eigen computer om de data te analyseren. Dit type browsergebaseerde software wordt aangeduid als [*local-first*](/technical-tools/sdg/#local-first). De tool uploadt geen data naar derden, zoals cloudproviders. Instructies over hoe de tool en de local-first architectuur lokaal binnen uw eigen organisatie kunnen worden gehost, zijn te vinden op <a href="https://github.com/NGO-Algorithm-Audit/local-first-web-tool" target="_blank">Github</a>.

Probeer de tool hieronder uit ⬇️

{{< container_close >}}



<!-- Web app -->

{{< iframe src="https://local-first-bias-detection.s3.eu-central-1.amazonaws.com/synthetic-data.html?lang=en" title="Synthetic data generation tool" icon="fas fa-search" id="web-app" height="800px" >}}



<!-- Promo bar -->

{{< promo_bar content="Waardeer je het werk van Algorithm Audit? Geef ons een ⭐️ op" id="promo" >}}



<!-- Broncode -->

{{< container_open title="Broncode" id="source-code" icon="fas fa-toolbox" >}}

- De broncode van de synthetische data generatie methoden zijn beschikbaar op <a href="https://github.com/NGO-Algorithm-Audit/python-synhtpop" target="_blank">Github</a> en als <a href="https://pypi.org/project/unsupervised-bias-detection/" target="_blank">pip package</a>: `pip install python-synthpop`. 

- De architectuur om web apps local-first te gebruiken is ook beschikbaar op <a href="https://github.com/NGO-Algorithm-Audit/local-first-web-tool" target="_blank">Github</a>.

{{< container_close >}}



<!-- AI auditing -->

{{< container_open title="Hoe kan SDG gebruikt worden voor AI auditing?" icon="fas fa-project-diagram" id="ai-auditing" >}}

Wanneer algoritmisch gedreven besluitvormingsprocessen worden geaudit, is een van de meest prangende vragen de representativiteit van de brondata. Privacy vormt echter een obstakel bij het delen van data met externe partijen om de representativiteit van de data te beoordelen. Zonder toegang tot de brondata kunnen belanghebbenden – zoals personen van wie de data wordt opgeslagen en onafhankelijke experts – deze niet onderzoeken op mogelijke afwijkingen. Hierdoor is de evaluatie van data die worden gebruikt voor besluitvormingsprocessen en het trainen van AI-systemen afhankelijk van een kleine groep experts. Als de evaluatieprocessen door deze kleine groep niet zorgvuldig worden uitgevoerd, kan dit onwenselijke gevolgen hebben, zoals slechte datakwaliteit en vooringenomenheid. Dit schaadt het publieke vertrouwen in technologie en in de organisaties die deze digitale methoden inzetten.

Synthetische data generatie (SDG) biedt een oplossing. Door artificiële data te creëren die de eigenschappen van de originele dataset nabootst zonder daarbij persoonlijke informatie te delen, maakt SDG het breder delen van data mogelijk. Het wordt beschouwd als een veilige aanpak voor het breder delen van data, omdat het geen naar individuen herleidbare persoonlijke data bevat. In beneden bijgevoegde memo kan meer achtergrondinformatie worden gevonden over de juridische aspecten van synthetische data generatie. 

{{< container_close >}}



<!-- Use cases -->

{{< container_open title="Is SDG eerder toegepast?" icon="fas fa-history" id="use-cases" >}}

Breed gebruik van synthetische datageneratie is lange tijd belemmerd door privacyzorgen over het delen van data. Veel commerciële API's zijn afhankelijk van cloudgebaseerde software, wat ze ongeschikt maakt voor publieke organisaties omdat data van burgers niet zo maar naar cloudplatformen geupload mogen worden. [Local-first](/technical-tools/sdg/#local-first) dataverwerking biedt een oplossing, waarmee synthetische data kan worden gegenereerd op basis van software in de browser. De data verlaat de organisatie dus niet. Bovendien hebben recent nieuwe interessante use cases laten zien dat synthetische data veilig gedeeld kunnen worden terwijl privacy wordt gewaarborgd.

#### Toepassingen

Zo heeft <a href="https://www.lighthousereports.com/suspicion-machines-methodology/" target="_blank">Lighthouse Reports</a> onbedoeld verkregen data middels synthetische data publiekelijk kunnen delen, waarmee vooroordelen in een dataset van de Gemeente Rotterdam aan het licht zijn gebracht. Deze dataset werd gebruikt voor machine learning-gedreven risicoprofilering in het kader van heronderzoek naar de bijstandsuitkering.

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
Local-first is het tegenovergestelde van cloud computing: de data wordt niet geüpload naar derden, zoals cloudproviders, en wordt verwerkt door je eigen computer. De data die aan de tool wordt gekoppeld, verlaat je computer of de omgeving van je organisatie dus niet. De tool is privacyvriendelijk omdat de data binnen bestaande bevoegdheden verwerkt kan worden en niet gedeeld hoeft te worden met nieuwe partijen. De synthetische data generatie tool kan ook lokaal binnen je organisatie worden gehost. Instructies, inclusief de broncode van de tool, zijn te vinden op <a href="https://github.com/NGO-Algorithm-Audit/local-first-web-tool" target="_blank">Github</a>.

#### Overzicht van local-first architectuur

<div style="margin-bottom:50px; display: flex; justify-content: center;">
  <img src="/images/BDT/local-first NL.png" alt="drawing" width="100%"/>
</div>

{{< container_close >}}



<!-- Ondersteund door -->

{{< container_open title="Ondersteund door" icon="fas fa-toolbox" id="supported-by">}}

Deze tool is ontwikkeld met steun van publieke en filantropische organisatie.

{{< accordions_area_open>}}

{{< accordion_item_open title="Innovatiebudget Ministerie van Binnenlandse Zaken" image="/images/supported_by/BZK.jpg" tag1="2024-25" >}}

##### Beschrijving
In samenwerking met de Dienst Uitvoering Onderwijs (DUO) en het Ministerie van Binnenlandse Zaken heeft Algorithm Audit deze tool ontwikkeld en getest in de periode juli 2024 tot juli 2025 met ondersteuning van <a href="https://www.digitaleoverheid.nl/overzicht-van-alle-onderwerpen/innovatie/innovatiebudget/toekenning-innovatiebudget-2024/" target="_blank">Innovatiebudget</a>, een jaarlijkse competitie georganiseerd door het Ministerie van Binnenlandse Zaken. De voortgang van het project werd gedeeld tijdens een bijeenkomst op 13-02-2025.

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