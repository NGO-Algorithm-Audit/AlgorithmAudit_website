---
type: regular
title: AI Act Implementation Tool
subtitle: >
  Templates and tools for AI Act implementation. Simplification of the key
  elements of the AI system definition into an intuitive decision tree. The tool
  also identifies impactful algorithms that fall outside the scope of the AI
  Act.


  Help developing and share feedback through
  [Github](https://github.com/NGO-Algorithm-Audit/AlgorithmAudit_website) or via
  [info@algorithmaudit.eu](mailto:info@algorithmaudit.eu).
image: /images/svg-illustrations/case_repository.svg
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
    - title: Explainers
      url: '#explainers'
    - title: Flowchart
      url: '#flowchart'    
---

{{< container_open icon="fa-solid fa-laptop-code" title="Is my data-driven application a high-impact algorithm or AI system?" id="intro" >}}

Implementation of the AI Act raises difficult questions. What is the scope of the AI system defintion? Based on which criteria can the risk category of an AI system be identified? The below tool helps deployers and producers of AI systems with implementation of the AI Act through two dynamic questionnaires:

1. Identification of AI systems and impactful algorithms
2. Identification of risk category and prohibited applications.

The questionnaires are designed to identify AI systems and their risk category using straightforward questions.

Since many straightforward algorithms that impact people are not considered AI systems, the first questionnaire also identifies *impactful algorithms*. The term 'impactful algorithms' is used by the Dutch government to refer to simple algorithms that do not meet the definition of an AI system under the AI Act but still require risk management measures. More information can be found in the <a href="https://algoritmes.pleio.nl/attachment/entity/f1a35292-7ea6-4e47-93fa-b3358e9ab2e0" target="_blank">Algorithm Registry Guidance Document</a> of the Dutch Ministry of the Interior.

All potential outcomes of the first questionnaire are shown in the [figure](/technical-tools/implementation-tool/#outcome) below on this webpage.

{{< container_close >}}

{{< iframe src="https://ai-documentation.s3.eu-central-1.amazonaws.com/index.html?lang=en" title="" id="tool" icon="" height="60vh" height_mobile="100vh" >}}

{{< container_open icon="fas fa-layer-group" title="Outcomes tool" id="outcome" >}}

The outcomes of the first questionnaire are displayed in the below figure. The following categories are distinguished:

* Algorithms: fall outside the scope of the AI Act, no additional control measures are needed.
* Impactful algorithms: fall outside the scope of the AI Act, additional control measures are needed.
* AI systems: are in scope of the AI Act, only additional control measures are needed in case of high-risk AI systems.
* High risk AI systems: are in scope of the AI Act, additional control measures for high-risk AI systems are needed through harmonized standards.
* Prohibited AI systems: are in scope of the AI Act, usage of this type of AI systems is prohibited in the European Union. More information about this category is provided by the <a href="https://www.digitaleoverheid.nl/achtergrondartikelen/welke-ai-praktijken-zijn-volgend-jaar-verboden/" target="_blank">Dutch government</a>.

<br> <br> <img src="/images/ai-act-implementation-tool/Venn diagram EN.png" alt="drawing" width="600"/>

{{< container_close >}}

{{< container_open icon="fas fa-terminal" title="Development and source code" id="source-code" >}}

The questions in the AI Act Implementation Tool are developed in collaboration with the municipaility of Amsterdam. The source code of the tool can be found on <a href="https://github.com/NGO-Algorithm-Audit/AI-Act-Implementation-Tool" target="_blank">Github</a> and can be re-used under the <a href="https://eupl.eu/1.2/en/" target="_blank">EUPL-1.2 license</a>. <br> <br> <img src="/images/events/Amsterdam.png" alt="drawing" width="200"/>.

{{< container_close >}}

{{< container_open icon="far fa-file" title="Guidelines for AI Act implementation" id="documentation-definition" >}}

The reasoning and motivations behind the selected questions in the AI Act Implementation Tool are outlined in the below documents.

{{< embed_pdf url="/pdf-files/knowledge-base/20241218_Guidelines_AI_system_definition.pdf" width_mobile_pdf="12" width_desktop_pdf="6" >}}

{{< container_close >}}

{{< container_open icon="fas fa-chalkboard-teacher" title="Explainers" id="explainers" >}}

Through examples the slides decks explain the intricacies of the AI system definition.

### 10 examples of (non) AI systems

{{< embed_pdf url="/pdf-files/technical-tools/AIA-Implementation-Tool/20241216_10_examples_(non)_AI_system.pdf" width_mobile_pdf="12" width_desktop_pdf="6" >}}

### Rule-based algorithms under the AI Act

{{< embed_pdf url="/pdf-files/technical-tools/AIA-Implementation-Tool/20241203_Rule_based_or_AI_system.pdf" width_mobile_pdf="12" width_desktop_pdf="6" >}}

### Definition of an AI system under the AI Act

{{< embed_pdf url="/pdf-files/technical-tools/AIA-Implementation-Tool/20241118_AI_definition_carrousel.pdf" width_mobile_pdf="12" width_desktop_pdf="6" >}}

{{< container_close >}}

{{< container_open icon="fas fa-arrows-alt" title="Flowchart Implementation Tool" id="flowchart" >}}

{{< embed_pdf url="/pdf-files/technical-tools/AIA-Implementation-Tool/20250224 Flowchart identification AIAIT EN.pdf" width_mobile_pdf="12" width_desktop_pdf="12" >}}

{{< container_close >}}
