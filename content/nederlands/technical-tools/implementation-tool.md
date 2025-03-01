---
type: regular
title: AI-verordening implementatie tool
subtitle: >
  Templates en hulpmiddelen voor implementatie van de AI-verordening. Vertaling
  van de belangrijkste aspecten van de AI-systeem definitie uit de verordening
  naar begrijpbare vragen. De tool identificeert ook impactvolle algoritmes die
  buiten de reikwijdte van de AI-verordening vallen.


  Help mee ontwikkelen, deel feedback middels
  [Github](https://github.com/NGO-Algorithm-Audit/AlgorithmAudit_website) of via
  [info@algorithmaudit.eu](mailto:info@algorithmaudit.eu).
image: /images/svg-illustrations/case_repository.svg
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
    - title: Voorbeelden
      url: '#explainers'
    - title: Flowchart
      url: '#flowchart'  
---

{{< container_open icon="fa-solid fa-laptop-code" title="Is mijn datagedreven toepassing een impactvol algoritme of AI-systeem?" id="intro" >}}

Implementatie van de AI-verordening brengt lastige vragen met zich mee. Wat is de reikwijdte van de AI-systeem definitie? Aan de hand van welke criteria kan de risicocategorie van een AI-systeem worden geidentificeerd? Onderstaande tool helpt gebruikers en ontwikkelaars bij implementatie van de AI-verordening middels twee dynamische vragenlijsten:

1. Identificatie van AI-systeem en impactvolle algoritmes
2. Identificatie van risicocategorie en verboden toepassingen.

De vragenlijsten zijn ontworpen om AI-systemen en de bijbehorende risicocategorie te identificeren aan de hand van eenvoudige vragen.

Omdat niet alle algoritmes met invloed op burgers een AI-systeem zijn, houdt de eerste vragenlijst ook rekening met _impactvolle algoritmes_. De term 'impactvolle algoritmes' wordt gebruik door de Rijksoverheid om te verwijzen naar algoritmes die niet voldoen aan de AI-systeem definitie uit de AI-verordening, maar waar wel risicobeheersmaatregelen voor ingericht dienen te worden. Meer informatie kan worden gevonden in de <a href="https://algoritmes.pleio.nl/attachment/entity/f1a35292-7ea6-4e47-93fa-b3358e9ab2e0" target="_blank">Handreiking Algoritmeregister</a> van het Ministerie van Binnenlandse Zaken en Koningkrijksrelaties.

Alle mogelijke uitkomsten van de beslisboom zijn weergeven in het [figuur](/nl/technical-tools/implementation-tool/#outcome) beneden op deze webpagina.

{{< container_close >}}

{{< iframe src="https://ai-documentation.s3.eu-central-1.amazonaws.com/index.html?lang=nl" title="" id="tool" icon="" height="60vh" >}}

{{< container_open icon="fas fa-terminal" title="Ontwikkeling en broncode" id="source-code" >}}

De vragen in de AI-verordening implemenatie tool zijn ontwikkeld in samenwerking met de gemeente Amsterdam. De broncode van de tool is beschikbaar in <a href="https://github.com/NGO-Algorithm-Audit/AI-Act-Implementation-Tool" target="_blank">Github</a> en kan worden (her)gebruikt onder de <a href="https://eupl.eu/1.2/nl/" target="_blank">EUPL-1.2 licentie</a>. <br> <br> <img src="/images/events/Amsterdam.png" alt="drawing" width="200"/>

{{< container_close >}}

{{< container_open icon="fas fa-layer-group" title="Uitkomsten vragenlijsten" id="outcome" >}}

De uitkomst van de eerste vragenlijst wordt schematisch weergeven in onderstaand figuur. Er wordt onderscheid gemaakt tussen:

- Algoritmes: vallen buiten de reikwijdte van de AI-verordening, behoeven geen extra beheersmaatregelen.
- Impactvolle algoritmes: vallen buiten de reikwijdte van de AI-verordening, behoeven wel extra beheersmaatregelen.
- AI-systemen: vallen binnen de reikwijdte van de AI-verordening, behoeven alleen extra beheersmaatregelen als er sprake is van hoog-risico AI-systemen en specifieke vormen van generieke AI.
- Hoog risico AI-systemen: vallen binnen de reikwijdte van de AI-verordening en behoeven extra beheersmaatregelen aan de hand van [geharmonizeerde normen](/nl/knowledge-platform/standards/).
- Verboden AI-systemen: vallen binnen de reikwijdte van de AI-verordening, dit type AI-systemen zijn verboden. Meer toelichting over deze categorie kan gevonden worden op <a href="https://www.digitaleoverheid.nl/achtergrondartikelen/welke-ai-praktijken-zijn-volgend-jaar-verboden/" target="_blank">Digitale overheid</a>.

<br> <br> <img src="/images/ai-act-implementation-tool/Venn diagram NL.png" alt="drawing" width="600"/>

{{< container_close >}}

{{< container_open icon="far fa-file" title="Richtlijnen voor AI-verordening implementatie" id="documentation-definition" >}}

Overwegingen en keuzes die zijn gemaakt tijdens het opstellen van de vragenlijst uit de AI-verordening implementatie tool worden in onderstaand documenten beschreven.

{{< embed_pdf url="/pdf-files/knowledge-base/20241218 Richtlijnen AI-systeem definitie.pdf" width_mobile_pdf="12" width_desktop_pdf="6" >}}

{{< container_close >}}

{{< container_open icon="fas fa-chalkboard-teacher" title="Voorbeelden" id="explainers" >}}

Aan de hand van voorbeelden lichten de volgende drie explainers de complexiteit van de AI-systeem definitie toe.

### 10 voorbeelden van (geen) AI-systemen

{{< embed_pdf url="/pdf-files/technical-tools/AIA-Implementation-Tool/20241216_10_examples_(non)_AI_system.pdf" width_mobile_pdf="12" width_desktop_pdf="6" >}}

### Regelgebaseerde algoritmen onder de AI-verordening

{{< embed_pdf url="/pdf-files/technical-tools/AIA-Implementation-Tool/20241203_Rule_based_or_AI_system.pdf" width_mobile_pdf="12" width_desktop_pdf="6" >}}

### Definitie van een AI-systeem volgens de AI-verordening

{{< embed_pdf url="/pdf-files/technical-tools/AIA-Implementation-Tool/20241118_AI_definition_carrousel.pdf" width_mobile_pdf="12" width_desktop_pdf="6" >}}

{{< container_close >}}

{{< container_open icon="fas fa-arrows-alt" title="Flowchart implementatie tool" id="flowchart" >}}

{{< embed_pdf url="/pdf-files/technical-tools/AIA-Implementation-Tool/20250224 Flowchart identification AIAIT EN.pdf" width_mobile_pdf="12" width_desktop_pdf="12" >}}

{{< container_close >}}