---
type: regular
title: AI en algoritmes kwalificatietoolkit (AI AQT)
subtitle: >
  AI AQT is een tool die ondersteunt bij het identificeren en
  risicoclassificeren van AI en andere data-gedreven systemen. Complexe
  juridische definities uit de AI-verordening, AVG en de Handreiking
  Algoritmeregister zijn vereenvoudigd tot begrijpbare vragen. De tool is open
  source ontwikkeld en kan gratis worden gebruikt door uw organisatie.
image: /images/svg-illustrations/AI research.svg
quick_navigation:
  title: Inhoudsopgave
  links:
    - title: Introductie
      url: '#intro'
    - title: Tool
      url: '#tool'
    - title: Uitkomsten tool
      url: '#outcome'
    - title: Broncode
      url: '#source-code'
    - title: Documentatie
      url: '#documentation-definition'
    - title: Voorbeelden en explainers
      url: '#explainers'
    - title: Flowchart Vragenlijst 1A
      url: '#flowchart-questionnaire-1A'
    - title: Flowchart Vragenlijst 1B
      url: '#flowchart-questionnaire-1B'
    - title: Flowchart Vragenlijst 2
      url: '#flowchart-questionnaire-2'
---

<!-- Promobar -->

<div id={{.Get "id" }} class="container-fluid mt-0 p-0">
    <div class="shadow bg-lightblue">
        <div class="row promobar-mobile-desktop-layout">
            <div class="col-12 flex justify-center items-center px-5">
                <!-- Content -->
                <span class="mr-3" style="font-size:16px; color:#005aa7;">
                    <b>👋 Wil je deze tool ook lokaal implementeren? Dat is eenvoudiger dan je denkt! Neem <u><a href="/nl/about/contact/" >contact</a></u> met ons op.</b>    </span>
            </div>
        </div>
    </div>
</div>

<!-- Introductie -->

{{< container_open icon="fa-solid fa-toolbox" title="Introductie - Een oplossing voor de AI-verordening en meer" id="intro" >}}

Wettelijke naleving veronderstelt correcte vaststelling of algoritmische systemen onder de reikwijdte van wet- en regelgeving vallen, inclusief bijbehorende risicocategorieën. AI AQT bestaat uit dynamische vragenlijsten die helpen bij:

1A – Identificatie van AI-systemen en impactvolle algoritmes;

1B – \[BETA] Identificatie van AI-systemen, impactvolle algoritmes en volledig geautomatiseerde besluitvorming;

2 – Risicoclassificatie van AI-systemen.

De tool is [open-source](/nl/technical-tools/implementation-tool/#source-code) ontwikkeld in samenwerking met de gemeente Amsterdam en kan kosteloos binnen uw organisatie worden gebruikt voor algoritmemanagement. Alle mogelijke uitkomsten van de vragenlijsten worden weergegeven in onderstaand [figuur](/nl/technical-tools/implementation-tool/#outcome). De flowcharts van de vragenlijsten kunnen ook [hieronder](/nl/technical-tools/implementation-tool/#flowchart-identification) worden gevonden.

{{< container_close >}}

<!-- Web app -->

{{< iframe src="https://ai-documentation.s3.eu-central-1.amazonaws.com/index.html?lang=nl" title="" id="tool" icon="" height="60vh" >}}

<!-- Kwalificatie en reikwijdte -->

{{< container_open icon="fa-solid fa-clipboard-check" title="Waarom de correct kwalificeren van algoritmische systemen belangrijk is" id="kwalificatie-reikwijdte" >}}

Het toepassen van juridische definities in de praktijk roept lastige vragen op. Bijvoorbeeld: Welke kenmerken onderscheiden AI van andere data-gedreven systemen? En welke criteria bepalen de risicocategorie van een AI-systeem? Gestandaardiseerde vragenlijsten helpen om algoritmemanagement efficiënt uit te voeren. Vragenlijsten kunnen binnen de gehele organisatie worden gedeeld en centraal worden verwerkt. AI AQT biedt hiervoor een eenduidige en gebruiksvriendelijke werkwijze en is daarmee een bouwsteen richting wettelijke naleving. Niet alleen in het kader van de AI-verordening, ook in het kader van de AVG en aanvullende beleidsinstrumenten, zoals de <a href="https://algoritmes.pleio.nl/attachment/entity/f1a35292-7ea6-4e47-93fa-b3358e9ab2e0" target="_blank">Handreiking Algoritmeregister</a>, is identificatie en risicoclassificatie relevant. Hoe deze regelgeving is verwerkt in de AI AQT kan worden gevonden in onderstaand figuur.

#### Verloop van AI AQT vragenlijsten

<img src="/images/ai-act-implementation-tool/Overview infographic.png" alt="drawing"/>

{{< container_close >}}

<!-- Uitkomsten tool -->

{{< container_open icon="fas fa-layer-group" title="Uitkomsten van de tool" id="outcome" >}}

De uitkomsten van de tool worden weergegeven in onderstaande figuur. Er wordt onderscheid gemaakt tussen de volgende categorieën:

#### Vragenlijst 1A:

* <span style="color:#005AA7">AI-systemen</span>: Vallen onder de reikwijdte van de AI-verordening. Afhankelijk van de risicocategorie zijn aanvullende beheersmaatregelen wettelijk verplicht. Ga verder met Vragenlijst 2.
* <span style="color:#005AA7">Impactvolle algoritmes</span>: Vallen buiten de reikwijdte van de AI-verordening, maar binnen de reikwijdte van het Nederlandse Algoritmesregister. Aanvullende controlemaatregelen zijn nodig.

#### Vragenlijst 1B \[BETA]:

* <span style="color:#005AA7">AI-systemen</span>: Zie uitkomst Vragenlijst 1A.
* <span style="color:#005AA7">Impactvolle algoritmes</span>: Zie uitkomst Vragenlijst 1A.
* <span style="color:#005AA7">Volledig geautomatiseerde besluitvorming</span>: Vallen onder de reikwijdte van artikel 22 van de AVG. Aanvullende beheersmaatregelen zijn nodig.
* <span style="color:#005AA7">Overige systemen</span>: Vallen buiten de reikwijdte van de AI-verordening, het Nederlandse Algoritmesregister en artikel 22 van de AVG.

#### Vragenlijst 2:

* <span style="color:#005AA7">Verboden AI-systemen</span>: Het gebruik van dit type AI-systeem is verboden in de Europese Unie. Meer informatie over deze categorie wordt verstrekt door de <a href="https://www.digitaleoverheid.nl/achtergrondartikelen/welke-ai-praktijken-zijn-volgend-jaar-verboden/" target="_blank">Nederlandse overheid</a>.
* <span style="color:#005AA7">Hoog-risico AI-systemen</span>: Er zijn aanvullende controlemaatregelen voor AI-systemen met een hoog risico nodig door middel van geharmoniseerde normen.
* <span style="color:#005AA7">Aanvullende transparantievereisten</span>: Dit type AI-systeem vereist aanvullende transparantie, maar er zijn geen controlemaatregelen nodig.
* <span style="color:#005AA7">AI-modellen voor algemene doeleinden (General Purpose AI)</span>: Er gelden aanvullende eisen voor de ontwikkelaars.

<img src="/images/ai-act-implementation-tool/Venn diagram NL V2.png" alt="drawing" width="600"/>

{{< container_close >}}

<!-- Broncode -->

{{< container_open icon="fas fa-terminal" title="Ontwikkeling, gebruik en broncode" id="source-code" >}}

De AI en Algoritme Kwalificatie Toolkit (AI AQT) is ontwikkeld in samenwerking met de gemeente Amsterdam. De broncode van de tool is beschikbaar in <a href="https://github.com/NGO-Algorithm-Audit/AI-Act-Implementation-Tool" target="_blank">Github</a> en kan worden (her)gebruikt onder de <a href="https://eupl.eu/1.2/nl/" target="_blank">EUPL-1.2 licentie</a>. De AI AQT wordt gebruikt door onder meer:

{{< image image1="/images/partner%20logo-cropped/GemeenteAmsterdam.png" image2="/images/partner%20logo-cropped/De Nederlandsche Bank.png" image3="/images/partner%20logo-cropped/GemeenteDenHaag.png" width_desktop="4" width_mobile="4" alt1="Gemeente Amsterdam" alt2="De Nederlandsche Bank" alt3="Gemeente Den Haag" caption1="Gemeente Amsterdam" caption2="De Nederlandsche Bank" caption3="Gemeente Den Haag" >}}

{{< container_close >}}

<!-- Documentatie -->

{{< container_open icon="far fa-file" title="Documentatie AI AQT vragenlijsten" id="documentation-definition" >}}

Overwegingen en keuzes die zijn gemaakt tijdens het opstellen van de vragenlijsten met betrekking tot interpretatie van de AI-verordening, <a href="https://digital-strategy.ec.europa.eu/en/library/commission-publishes-guidelines-ai-system-definition-facilitate-first-ai-acts-rules-application" target="_blank">richtlijnen</a> van de Europese Commissie over de definitie van een AI-systeem, artikel 22 AVG richtlijnen van de <a href="https://ec.europa.eu/newsroom/article29/items/612053" target="_blank">EPDB</a> en <a href="https://www.autoriteitpersoonsgegevens.nl/documenten/advies-geautomatiseerde-besluitvorming" target="_blank">Autoriteit Persoonsgegevens</a> (AP) en de <a href="https://algoritmes.pleio.nl/attachment/entity/f1a35292-7ea6-4e47-93fa-b3358e9ab2e0" target="_blank">Handreiking Algoritmeregister</a> worden beschreven in de white paper 'Implementatie van de AI-verordening – Definitie van een AI-systeem'. In de policy briefing wordt toegelicht waarom bepaalde passages uit de <a href="https://digital-strategy.ec.europa.eu/en/library/commission-publishes-guidelines-ai-system-definition-facilitate-first-ai-acts-rules-application" target="_blank">richtlijnen</a> van de Europese Commissie over de definitie van een AI-systeem op gespannen voet staan met de wettekst van de AI-verordening.

Vragenlijst 1B (bèta) wordt spoedig opgenomen in de documentatie.

{{< embed_pdf url="/pdf-files/technical-tools/AI-AQT/20250228 White paper Implementatie AI-verordening - definitie.pdf" width_mobile_pdf="12" width_desktop_pdf="6" url2="/pdf-files/technical-tools/AI-AQT/20250228 Policy briefing richtlijnen EC AI-systeem definitie.pdf" >}}

{{< container_close >}}

<!-- Voorbeelden en explainers -->

{{< container_open icon="fas fa-chalkboard-teacher" title="Voorbeelden en explainers" id="explainers" >}}

Aan de hand van voorbeelden lichten we de uitwerking van juridische concepten relevant voor algoritmische systemen toe.

{{< embed_pdf url="/pdf-files/technical-tools/AI-AQT/20250512 AI risk identification Algorithm Audit.pdf" width_mobile_pdf="12" width_desktop_pdf="6" url2="/pdf-files/technical-tools/AI-AQT/20241216_10_examples_(non)_AI_system.pdf" title="Risicoclassificatie" title2="10 voorbeelden van (geen) AI-systemen" >}}

#### Regelgebaseerde algoritmen onder de AI-verordening

{{< embed_pdf url="/pdf-files/technical-tools/AI-AQT/20241203_Rule_based_or_AI_system.pdf" width_mobile_pdf="12" width_desktop_pdf="6" >}}

#### Definitie van een AI-systeem volgens de AI-verordening

{{< embed_pdf url="/pdf-files/technical-tools/AI-AQT/20241118_AI_definition_carrousel.pdf" width_mobile_pdf="12" width_desktop_pdf="6" >}}

#### Voorkomen van uitsluitend op profilering gebaseerde besluitvorming

{{< embed_pdf url="/pdf-files/knowledge-base/20250515 Carrousel Meaningful human intervention risk profiling algorithms.pdf" width_mobile_pdf="12" width_desktop_pdf="6" >}}

{{< container_close >}}

<!-- Flowchart Vragenlijst 1A -->

{{< container_open icon="fas fa-arrows-alt" title="Flowchart Vragenlijst 1A - Identificatie van AI-systemen en impactvolle algoritmes" id="flowchart-questionnaire-1A" >}}

{{< embed_pdf url="/pdf-files/technical-tools/AI-AQT/20250224 Flowchart identificatie AIAIT NL - Vragenlijst 1A.pdf" width_mobile_pdf="12" width_desktop_pdf="12" >}}

{{< container_close >}}

<!-- Flowchart Vragenlijst 1B -->

{{< container_open icon="fas fa-arrows-alt" title="Flowchart Vragenlijst 1B - Identificatie van AI-systemen, impactvolle algoritmes en volledig geautomatiseerde besluitvorming" id="flowchart-questionnaire-1B" >}}

{{< embed_pdf url="/pdf-files/technical-tools/AI-AQT/20260114 Flowchart identificatie - Vragenlijst 1B.pdf" width_mobile_pdf="12" width_desktop_pdf="12" >}}

{{< container_close >}}

<!-- Flowchart Vragenlijst 2 -->

{{< container_open icon="fas fa-arrows-alt" title="Flowchart Vragenlijst 2 - Risicoclassificatie van AI-systemen" id="flowchart-questionnaire-2" >}}

{{< embed_pdf url="/pdf-files/technical-tools/AI-AQT/20250310 Flowchart classificatie NL.pdf" width_mobile_pdf="12" width_desktop_pdf="12" >}}

{{< container_close >}}
