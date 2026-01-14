---
type: regular
title: AI Act Implementation Tool
subtitle: >
  Dynamic questionnaires for identification and risk classification of AI
  systems and *high-impact algorithms*. Simplification of the key elements of
  the AI system definition. The tool is developed open source and can be used
  for free locally by your organisation.
image: /images/svg-illustrations/AI research.svg
quick_navigation:
  title: Content overview
  links:
    - title: Introduction
      url: '#intro'
    - title: Tool
      url: '#tool'
    - title: Outcomes tool
      url: '#outcome'
    - title: Source code
      url: '#source-code'
    - title: Documentation
      url: '#documentation-definition'
    - title: Examples and explainers
      url: '#explainers'
    - title: Flowchart identification
      url: '#flowchart-identification'
    - title: Flowchart risk classification
      url: '#flowchart-classification'
---

<!-- Promobar -->

<div id={{.Get "id" }} class="container-fluid mt-0 p-0">
    <div class="shadow bg-lightblue">
        <div class="row promobar-mobile-desktop-layout">
            <div class="col-12 flex justify-center items-center px-5">
                <!-- Content -->
                <span class="mr-3" style="font-size:16px; color:#005aa7;">
                    <b>👋 Do you also want to start using the tool locally? It's easier than you think! Get in <u><a href="/nl/about/contact/" >contact</a></u> to learn more.</b>    </span>
            </div>
        </div>
    </div>
</div>

<!-- Introduction -->

{{< container_open icon="fa-solid fa-laptop-code" title="Is my data-driven application an AI system or high-impact algorithm?" id="intro" >}}

Implementation of the AI Act raises difficult questions. What is the scope of the AI system defintion? What criteria are used to determine the risk category of an algorithm? Two dynamic questionnaires help deployers and producers with:

1. Identification of AI systems and high-impact algorithms;
2. Risk classification of AI systems.

Complex legal definitions from the AI Act and its guidelines are simplified into clear and accessible language, making the tool suitable for a broad audience.

Since many straightforward algorithms that impact people are not considered AI systems, the first questionnaire also identifies *high-impact algorithms*. This concept is used by the Dutch government to refer to simple algorithms that do not meet the definition of an AI system under the AI Act but still require control measures. More information can be found in the <a href="https://algoritmes.pleio.nl/attachment/entity/f1a35292-7ea6-4e47-93fa-b3358e9ab2e0" target="_blank">Algorithm Registry Guidance Document</a> of the Dutch Ministry of the Interior.

The tool is developed [open-source](/technical-tools/implementation-tool/#source-code) in collaboration with the Municipality of Amsterdam and can be used for free within your organisation to manage algorithms. All potential outcomes of the questionnaires are shown in the [figure](/technical-tools/implementation-tool/#outcome) below on this webpage. The flowcharts of both questionnaires can also be found [below](/technical-tools/implementation-tool/#flowchart-identification).

{{< container_close >}}



<!-- Web app -->

{{< iframe src="https://ai-documentation.s3.eu-central-1.amazonaws.com/index.html?lang=en" title="" id="tool" icon="" height="60vh" height_mobile="100vh" >}}



<!-- Outcomes tool -->

{{< container_open icon="fas fa-layer-group" title="Outcomes tool" id="outcome" >}}

The outcomes of the first questionnaire are displayed in the below figure. The following categories are distinguished:

* Algorithms: fall outside the scope of the AI Act, no additional control measures are needed.
* High-impact algorithms: fall outside the scope of the AI Act, additional control measures are needed.
* AI systems: are in scope of the AI Act, only additional control measures are needed in case of high-risk AI systems.
* High risk AI systems: are in scope of the AI Act, additional control measures for high-risk AI systems are needed through harmonized standards.
* Prohibited AI systems: are in scope of the AI Act, usage of this type of AI systems is prohibited in the European Union. More information about this category is provided by the <a href="https://www.digitaleoverheid.nl/achtergrondartikelen/welke-ai-praktijken-zijn-volgend-jaar-verboden/" target="_blank">Dutch government</a>.

<br> <br> <img src="/images/ai-act-implementation-tool/Venn diagram EN.png" alt="drawing" width="600"/>

{{< container_close >}}



<!-- Source code -->

{{< container_open icon="fas fa-terminal" title="Development and source code" id="source-code" >}}

The questions in the AI Act Implementation Tool are developed in collaboration with the municipaility of Amsterdam. The source code of the tool can be found on <a href="https://github.com/NGO-Algorithm-Audit/AI-Act-Implementation-Tool" target="_blank">Github</a> and can be (re-)used under the <a href="https://eupl.eu/1.2/en/" target="_blank">EUPL-1.2 license</a>. <br> <br> <img src="/images/partner logo-cropped/GemeenteAmsterdam.png" alt="drawing" width="200"/>.

{{< container_close >}}



<!-- Documentation -->

{{< container_open icon="far fa-file" title="Documentation for AI Act implementation" id="documentation-definition" >}}

Considerations and choices made during development of the questionnaires regarding the legislative text of the AI Act, <a href="https://digital-strategy.ec.europa.eu/en/library/commission-publishes-guidelines-ai-system-definition-facilitate-first-ai-acts-rules-application" target="_blank">guidelines</a> from the European Commission, and the <a href="https://algoritmes.pleio.nl/attachment/entity/f1a35292-7ea6-4e47-93fa-b3358e9ab2e0" target="_blank">Algorithm Registry Guidance Document</a> are described in the white paper 'Implementation of the AI Regulation – Definition of an AI System'. The policy briefing explains why the <a href="https://digital-strategy.ec.europa.eu/en/library/commission-publishes-guidelines-ai-system-definition-facilitate-first-ai-acts-rules-application" target="_blank">guidelines</a> from the European Commission on the definition of an AI system contradict the legislative text. Both the white paper and the questionnaires have been adjusted following the publication of the <a href="https://digital-strategy.ec.europa.eu/en/library/commission-publishes-guidelines-ai-system-definition-facilitate-first-ai-acts-rules-application" target="_blank">guidelines</a> by the European Commission.

{{< embed_pdf url="/pdf-files/technical-tools/AI-AQT/20250228 White paper Implementation AI Act - definition.pdf" width_mobile_pdf="12" width_desktop_pdf="6" url2="/pdf-files/technical-tools/AI-AQT/20250228 Policy briefing guidelines EC AI system definition.pdf" >}}

{{< container_close >}}



<!-- Examples and explainers -->

{{< container_open icon="fas fa-chalkboard-teacher" title="Examples and explainers" id="explainers" >}}

We simplify the complex concepts of the AI Act by explaining them with clear, relatable examples.

### Risk classification

{{< embed_pdf url="/pdf-files/technical-tools/AI-AQT/20250512 AI risk identification Algorithm Audit.pdf" width_mobile_pdf="12" width_desktop_pdf="6" >}}

### 10 examples of (non) AI systems

{{< embed_pdf url="/pdf-files/technical-tools/AI-AQT/20241216_10_examples_(non)_AI_system.pdf" width_mobile_pdf="12" width_desktop_pdf="6" >}}

### Rule-based algorithms under the AI Act

{{< embed_pdf url="/pdf-files/technical-tools/AI-AQT/20241203_Rule_based_or_AI_system.pdf" width_mobile_pdf="12" width_desktop_pdf="6" >}}

### Definition of an AI system under the AI Act

{{< embed_pdf url="/pdf-files/technical-tools/AI-AQT/20241118_AI_definition_carrousel.pdf" width_mobile_pdf="12" width_desktop_pdf="6" >}}

{{< container_close >}}



<!-- Flowchart identification -->

{{< container_open icon="fas fa-arrows-alt" title="Flowchart identification questionnaire" id="flowchart-identification" >}}

{{< embed_pdf url="/pdf-files/technical-tools/AI-AQT/20250224 Flowchart identification EN.pdf" width_mobile_pdf="12" width_desktop_pdf="12" >}}

{{< container_close >}}



<!-- Flowchart risk classification -->

{{< container_open icon="fas fa-arrows-alt" title="Flowchart risk classification questionnaire" id="flowchart-classification" >}}

{{< embed_pdf url="/pdf-files/technical-tools/AI-AQT/20250310 Flowchart classification EN.pdf" width_mobile_pdf="12" width_desktop_pdf="12" >}}

{{< container_close >}}
