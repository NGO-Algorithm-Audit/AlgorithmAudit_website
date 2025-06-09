---
type: regular
title: AI-verordening implementatie tool
subtitle: >
  Dynamische vragenlijsten voor identificatie en risicoclassificatie van AI-systemen en _impactvolle algoritmes_. 
  Vertaling van complexe juridische definities uit de AI-verordening naar begrijpbare taal. 
  De tool is open-source ontwikkeld en kan lokaal kosteloos binnen uw organisatie worden gebruikt.


  Mee helpen ontwikkelen? Of wilt u meer informatie hoe de tool binnen uw organisatie gebruikt kan worden?
  Check [Github](https://github.com/NGO-Algorithm-Audit/AlgorithmAudit_website) of benader ons via
  [info@algorithmaudit.eu](mailto:info@algorithmaudit.eu).
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
    - title: Flowchart identificatie
      url: '#flowchart-identification'
    - title: Flowchart risicoclassificatie
      url: '#flowchart-classification'  
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

{{< container_open icon="fa-solid fa-laptop-code" title="Is mijn datagedreven toepassing een AI-systeem of impactvol algoritme?" id="intro" >}}

Implementatie van de AI-verordening brengt lastige vragen met zich mee. Wat is de reikwijdte van de AI-systeem definitie? Aan de hand van welke criteria kan de risicocategorie van een algoritme worden geïdentificeerd? Twee dynamische vragenlijsten helpen gebruikers en ontwikkelaars bij:

1. Identificatie van AI-systeem en impactvolle algoritmes;
2. Risicoclassificatie van AI-systemen.

Complexe juridische definities uit de AI-verordening en bijbehorende richtlijnen zijn vertaald naar begrijpbare taal, zodat de tool door een brede doelgroep gebruikt kan worden.

Omdat niet alle algoritmes met invloed op burgers een AI-systeem zijn, houdt de eerste vragenlijst ook rekening met _impactvolle algoritmes_. Deze term wordt gebruik door de Rijksoverheid om te verwijzen naar algoritmes die niet voldoen aan de AI-systeem definitie uit de AI-verordening, maar waar wel risicobeheersmaatregelen voor ingericht dienen te worden. Meer informatie kan worden gevonden in de <a href="https://algoritmes.pleio.nl/attachment/entity/f1a35292-7ea6-4e47-93fa-b3358e9ab2e0" target="_blank">Handreiking Algoritmeregister</a> van het Ministerie van Binnenlandse Zaken en Koningkrijksrelaties.

De tool is [open-source](/nl/technical-tools/implementation-tool/#source-code) ontwikkeld en kan kosteloos binnen uw organisatie worden gebruikt voor algoritemanagement. Alle mogelijke uitkomsten van de eerste vragenlijst zijn weergeven in het [figuur](/nl/technical-tools/implementation-tool/#outcome) beneden op deze webpagina. De flowcharts van beide vragenlijsten kunnen ook [hieronder](/nl/technical-tools/implementation-tool/#flowchart-identification) worden gevonden.

{{< container_close >}}



<!-- Web app -->

{{< iframe src="https://ai-documentation.s3.eu-central-1.amazonaws.com/index.html?lang=nl" title="" id="tool" icon="" height="60vh" >}}



<!-- Uitkomsten tool -->

{{< container_open icon="fas fa-layer-group" title="Uitkomsten vragenlijsten" id="outcome" >}}

De uitkomst van de eerste vragenlijst wordt schematisch weergeven in onderstaand figuur. Er wordt onderscheid gemaakt tussen:

- <span style="color:#005AA7">Algoritmes</span>: vallen buiten de reikwijdte van de AI-verordening, behoeven geen extra beheersmaatregelen.
- <span style="color:#005AA7">Impactvolle algoritmes</span>: vallen buiten de reikwijdte van de AI-verordening, behoeven wel extra beheersmaatregelen.
- <span style="color:#005AA7">AI-systemen</span>: vallen binnen de reikwijdte van de AI-verordening, behoeven alleen extra beheersmaatregelen als er sprake is van hoog-risico AI-systemen en specifieke vormen van generieke AI.
- <span style="color:#005AA7">Hoog risico AI-systemen</span>: vallen binnen de reikwijdte van de AI-verordening en behoeven extra beheersmaatregelen aan de hand van [geharmonizeerde normen](/nl/knowledge-platform/standards/).
- <span style="color:#005AA7">Verboden AI-systemen</span>: vallen binnen de reikwijdte van de AI-verordening, dit type AI-systemen zijn verboden. Meer toelichting over deze categorie kan gevonden worden op <a href="https://www.digitaleoverheid.nl/achtergrondartikelen/welke-ai-praktijken-zijn-volgend-jaar-verboden/" target="_blank">Digitale overheid</a>.

<br> <br> <img src="/images/ai-act-implementation-tool/Venn diagram NL.png" alt="drawing" width="600"/>

{{< container_close >}}



<!-- Broncode -->

{{< container_open icon="fas fa-terminal" title="Ontwikkeling en broncode" id="source-code" >}}

De vragen in de AI-verordening implemenatie tool zijn ontwikkeld in samenwerking met de gemeente Amsterdam. De broncode van de tool is beschikbaar in <a href="https://github.com/NGO-Algorithm-Audit/AI-Act-Implementation-Tool" target="_blank">Github</a> en kan worden (her)gebruikt onder de <a href="https://eupl.eu/1.2/nl/" target="_blank">EUPL-1.2 licentie</a>. <br> <br> <img src="/images/events/Amsterdam.png" alt="drawing" width="200"/>

{{< container_close >}}



<!-- Documentatie -->

{{< container_open icon="far fa-file" title="Documentatie voor AI-verordening implementatie" id="documentation-definition" >}}

Overwegingen en keuzes die zijn gemaakt tijdens het opstellen van de vragenlijsten met betrekking tot de wettekst, <a href="https://digital-strategy.ec.europa.eu/en/library/commission-publishes-guidelines-ai-system-definition-facilitate-first-ai-acts-rules-application" target="_blank">richtlijnen</a>  van de Europese Commissie en de <a href="https://algoritmes.pleio.nl/attachment/entity/f1a35292-7ea6-4e47-93fa-b3358e9ab2e0" target="_blank">Handreiking Algoritmeregister</a> worden in de white paper 'Implementatie van de AI-verordening – Definitie van een AI-systeem' beschreven. In de policy briefing wordt toegelicht waarom de <a href="https://digital-strategy.ec.europa.eu/en/library/commission-publishes-guidelines-ai-system-definition-facilitate-first-ai-acts-rules-application" target="_blank">richtlijnen</a> van de Europese Commissie over de definitie van een AI-systeem op gespannen voet staan met de wettekst van de AI-verordening. De white paper en de vragenlijsten zijn beiden aangepast naar aanleiding van publicatie van de <a href="https://digital-strategy.ec.europa.eu/en/library/commission-publishes-guidelines-ai-system-definition-facilitate-first-ai-acts-rules-application" target="_blank">richtlijnen</a> van de Europese Commissie.  


{{< embed_pdf url="/pdf-files/technical-tools/AIA-Implementation-Tool/20250228 White paper Implementatie AI-verordening - definitie.pdf" width_mobile_pdf="12" width_desktop_pdf="6" url2="/pdf-files/technical-tools/AIA-Implementation-Tool/20250228 Policy briefing richtlijnen EC AI-systeem definitie.pdf" >}}

{{< container_close >}}


<!-- Voorbeelden en explainers -->

{{< container_open icon="fas fa-chalkboard-teacher" title="Voorbeelden en explainers" id="explainers" >}}

Aan de hand van voorbeelden lichten we belangrijke concepten uit de AI-verordening in begrijpelijke taal toe.

### Risicoclassificatie

{{< embed_pdf url="/pdf-files/technical-tools/AIA-Implementation-Tool/20250512 AI risk identification Algorithm Audit.pdf" width_mobile_pdf="12" width_desktop_pdf="6" >}}

### 10 voorbeelden van (geen) AI-systemen

{{< embed_pdf url="/pdf-files/technical-tools/AIA-Implementation-Tool/20241216_10_examples_(non)_AI_system.pdf" width_mobile_pdf="12" width_desktop_pdf="6" >}}

### Regelgebaseerde algoritmen onder de AI-verordening

{{< embed_pdf url="/pdf-files/technical-tools/AIA-Implementation-Tool/20241203_Rule_based_or_AI_system.pdf" width_mobile_pdf="12" width_desktop_pdf="6" >}}

### Definitie van een AI-systeem volgens de AI-verordening

{{< embed_pdf url="/pdf-files/technical-tools/AIA-Implementation-Tool/20241118_AI_definition_carrousel.pdf" width_mobile_pdf="12" width_desktop_pdf="6" >}}

{{< container_close >}}



<!-- Flowchart identificatie -->

{{< container_open icon="fas fa-arrows-alt" title="Flowchart identificatie vragenlijst" id="flowchart-identification" >}}

{{< embed_pdf url="/pdf-files/technical-tools/AIA-Implementation-Tool/20250224 Flowchart identificatie NL.pdf" width_mobile_pdf="12" width_desktop_pdf="12" >}}

{{< container_close >}}



<!-- Flowchart risicoclassificatie -->

{{< container_open icon="fas fa-arrows-alt" title="Flowchart risicoclassificatie vragenlijst" id="flowchart-classification" >}}

{{< embed_pdf url="/pdf-files/technical-tools/AIA-Implementation-Tool/20250310 Flowchart classificatie NL.pdf" width_mobile_pdf="12" width_desktop_pdf="12" >}}

{{< container_close >}}