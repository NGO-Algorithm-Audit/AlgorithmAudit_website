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
---

{{< container_open icon="fa-solid fa-laptop-code" title="Is mijn datagedreven toepassing een algoritme of AI-systeem?" id="amsterdam" >}}

Implementatie van de AI-verordening brengt lastige vragen met zich mee. Wat is de reikwijdte van de AI-systeem definitie? Aan de hand van welke criteria kan de risicocategorie van een AI-systeem worden geidentificeerd?  Onderstaande tool helpt gebruikers en ontwikkelaars van AI-systemen bij implementatie van de AI-verordening middels twee dynamische vragenlijsten:

1. Identificatie van AI-systeem en impactvolle algoritmes
2. Identificatie van risicocategorie en verboden toepassingen.

De vragenlijsten hebben als doel om aan de hand van enkele simpele vragen AI-systemen te identificeren en de juiste risicocategorie voor deze systemen te bepalen. Omdat lang alle algoritmes met invloed op burgers ook echt AI-systemen zijn, houdt de eerste vragenlijst houdt ook rekening met impactvolle algoritmes. Dit type algoritme is volgens de AI-verordening geen AI-systeem, maar brengt wel risico’s met zich mee die beheerst moeten worden. Alle mogelijke uitkomsten van de beslisboom zijn weergeven in het figuur beneden op deze pagina.

{{< container_close >}}

{{< webapp id="webapp" appId="AIActImplementationTool" src="https://ai-documentation.s3.eu-central-1.amazonaws.com/AI-Act-Questionnaire-v1.0.0.js" title="" >}}

{{< container_open icon="fas fa-layer-group" title="Uitkomsten vragenlijsten" id="amsterdam" >}}

De uitkomst van de eerste vragenlijst wordt schematisch weergeven in onderstaand figuur. Er wordt onderscheid gemaakt tussen:

* Algoritmes: vallen buiten de reikwijdte van de AI-verordening, behoeven geen extra beheersmaatregelen
* Impactvolle algoritmes: vallen buiten de reikwijdte van de AI-verordening, behoeven wel extra beheersmaatregelen
* AI-systemen: vallen binnen de reikwijdte van de AI-verordening, behoeven geen extra beheersmaatregelen voor hoog-risico AI-systemen
* Hoog risico AI-systemen: vallen binnen de reikwijdte van de AI-verordening, behoeven geen extra beheersmaatregelen voor hoog-risico AI-systemen
* Verboden AI-systemen: vallen binnen de reikwijdte van de AI-verordening, dit type AI-systemen zijn verboden in

<br> <br> <img src="/images/ai-act-implementation-tool/Venn diagram_EN.png" alt="drawing" width="600"/>

{{< container_close >}}

{{< container_open icon="fas fa-terminal" title="Ontwikkeling en broncode" id="amsterdam" >}}

De vragen in de AI-verordening implemenatie tool zijn ontwikkeld in samenwerking met de gemeente Amsterdam. De broncode van de tool is beschikbaar in <a href="https://github.com/NGO-Algorithm-Audit/AI-Act-Implementation-Tool" target="_blank">Github</a> en kan worden (her)gebruikt onder de <a href="https://creativecommons.org/licenses/by/4.0/" target="_blank">CC BY 4.0 licentie</a> <br> <br> <img src="/images/events/Amsterdam.png" alt="drawing" width="200"/>

{{< container_close >}}

{{< container_open icon="far fa-file" title="Documentatie" id="documentation" >}}

Overwegingen en keuzes die zijn gemaakt tijdens het opstellen van de vragenlijst uit de AI-verordening implementatie tool worden in onderstaand document beschreven.

{{< embed_pdf url="/pdf-files/technical-tools/AIA-Implementation-Tool/20241118_AI_definition_carrousel.pdf" width_mobile_pdf="12" width_desktop_pdf="6" >}}

{{< container_close >}}

<style>
    /* Targeting the first direct div inside #AIActImplementationTool */
    #AIActImplementationTool > div:first-child {
        height: auto!important;
        padding: 12px;
    }

    /* Styling for form-group elements inside #AIActImplementationTool */
    #AIActImplementationTool .form-group {
        display: block;
    }

    /* Styling color output area inside #AIActImplementationTool */
    #AIActImplementationTool .card-body .bg-primary {
        background-color: #F8E5E3;
    }

    /* Styling for form-group elements header labels inside #AIActImplementationTool */
    #AIActImplementationTool .form-group .form-label {
        margin-left: 0;
        color: black;
    }

    /* Styling for form-group elements labels inside #AIActImplementationTool */
    #AIActImplementationTool .form-group label {
        color: black;
    }

    /* Styling for intermediate-output labels in #AIActImplementationTool */
    #AIActImplementationTool .intermediate-output label {
        font-weight: 700;
    }

    /* Styling for intermediate-output textareas in #AIActImplementationTool */
    #AIActImplementationTool .intermediate-output textarea {
        border: none;
        background-color: transparent;
        resize: none;
        width: 100%;
        height: auto;
        padding: 0;
        margin: 0;
        font-size: inherit;
        font-family: inherit;
        line-height: inherit;
        color: inherit;
        overflow: hidden;
        white-space: pre-wrap;
        word-wrap: break-word;
    }
</style>
