---
type: regular
title: AI and Algorithms Qualification Toolkit (AI AQT)
subtitle: >
  AI AQT is a tool for identification and risk classification of AI and other data-driven systems. Complex legal definitions from the AI Act, GDPR, and other frameworks are simplified into understandable questions. The tool is developed open source and can be used for free, locally by your organization. 
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
      url: '#documentation'
    - title: Examples and explainers
      url: '#explainers'
    - title: Flowchart Questionnaire 1A
      url: "#flowchart-questionnaire-1A"
    - title: Flowchart Questionnaire 1B
      url: "#flowchart-questionnaire-1B"
    - title: Flowchart Questionnaire 2
      url: "#flowchart-questionnaire-2"
promo_bar:
  - content: "**\U0001F44B Do you also want to start using the tool locally? It's easier than you think! Get in [contact ](/en/about/contact) to learn more. .**\n"
---

{{< promo_bar index="0" >}}

<!-- Introductie -->

{{< container_open icon="fa-solid fa-toolbox" title="Introduction - a solution for the AI Act and beyond " id="intro" >}}

Ensuring legal compliance when using algorithmic systems requires correct qualification of in-scope systems and risks categories. AI AQT consists of dynamic questionnaires that help with: 

1A – Identification of AI systems and high-impact algorithms; 

1B – \[BETA] Identification of AI systems and assessment of high-impact algorithms and solely automated decision-making (sADM); 

2 – Risk classification of AI systems. 

The tool is developed [open-source](/technical-tools/implementation-tool/#source-code) in collaboration with the Municipality of Amsterdam and can be used for free within your organization to manage algorithms. All potential outcomes of the questionnaires are shown in the [figure](/technical-tools/implementation-tool/#outcome) below. The flowcharts of both questionnaires can also be found [below](/technical-tools/implementation-tool/#flowchart-questionnaire-1A).

{{< container_close >}}

<!-- Web app -->

{{< iframe src="https://ai-documentation.s3.eu-central-1.amazonaws.com/index.html?lang=en" title="" id="tool" icon="" height="60vh" height_mobile="100vh" >}}

<!-- Why correct qualification of algorithmic systems matters -->

{{< container_open icon="fa-solid fa-clipboard-check" title="Why correct qualification of algorithmic systems matters" id="kwalificatie-reikwijdte" >}}

Applying legal definitions in practice raises difficult questions: For example: What features distinguish AI from other algoritmic systems? And what criteria determine the risk category of an AI system? Standardized questionnaires can help govern algorithms efficiently. Questionnaires can be shared across the entire organization and can be processed centrally. AI AQT provides a clear and user-friendly approach and serves as a building block for compliance. Identification and risk classification are relevant not only in the context of the AI Act, but also in relation to the GDPR and additional policy instruments, such as the <a href="https://algoritmes.pleio.nl/attachment/entity/f1a35292-7ea6-4e47-93fa-b3358e9ab2e0" target="_blank">Algorithm Register Guidelines</a>  of the Dutch government.

#### Flow of the AI AQT questionnaires 

<img src="/images/ai-act-implementation-tool/Infographic EN.png" alt="drawing"/>

{{< container_close >}}

<!-- Outcomes tool -->

{{< container_open icon="fas fa-layer-group" title="Outcomes tool" id="outcome" >}}

The outcomes of the tool are displayed in the figure below. The following categories are distinguished: 

#### Questionnaire 1A:

- <span style="color:#005AA7">AI systems</span>: Fall inside the scope of the AI Act. Additional control measures are legally required dependent on the risk category. Continue with Questionnaire 2.
- <span style="color:#005AA7">High-impact algorithms</span>: Fall outside the scope of the AI Act but inside the scope of the Dutch Algorithm Register. Additional control measures are needed.

#### Questionnaire 1B \[BETA]:

- <span style="color:#005AA7">AI systems</span>: See outcome Questionnaire 1A.
- <span style="color:#005AA7">High-impact algorithms</span>: See outcome Questionnaire 1A.
- <span style="color:#005AA7">Solely automated decision-making (sADM)</span>: Fall inside the scope of Article 22 of the GDPR. Additional control measures are needed.
- <span style="color:#005AA7">Other systems</span>: Fall outside the scopes of the AI Act, Dutch Algorithm Register and Article 22 of the GDPR.

#### Questionnaire 2:

- <span style="color:#005AA7">Prohibited AI systems</span>: Usage of this type of AI system is prohibited in the European Union. More information about this category is provided by the <a href="https://www.digitaleoverheid.nl/achtergrondartikelen/welke-ai-praktijken-zijn-volgend-jaar-verboden/" target="_blank">Dutch government</a>.
- <span style="color:#005AA7">High-risk AI systems</span>: Additional control measures for high-risk AI systems are needed through harmonized standards.
- <span style="color:#005AA7">Additional transparency requirements</span>: This type of AI system requires additional transparency, but no control measures are required.
- <span style="color:#005AA7">General Purpose AI (GPAI)</span>: Additional requirements apply to the provider.

<img src="/images/ai-act-implementation-tool/Venn diagram EN.png" alt="drawing" width="600"/>

{{< container_close >}}

<!-- Source code -->

{{< container_open icon="fas fa-terminal" title="Development, usage and source code:" id="source-code" >}}

The AI and Algorithms Qualification Toolkit (AI AQT) is developed in collaboration with the municipality of Amsterdam. The source code of the tool can be found on <a href="https://github.com/NGO-Algorithm-Audit/AI-Act-Implementation-Tool" target="_blank">Github</a> and can be (re-)used under the <a href="https://eupl.eu/1.2/en/" target="_blank">EUPL-1.2 license</a>. Among others, the AI AQT is used by:

{{< image image1="/images/partner%20logo-cropped/GemeenteAmsterdam.png" image2="/images/partner%20logo-cropped/De Nederlandsche Bank.png" image3="/images/partner%20logo-cropped/GemeenteDenHaag.png" width_desktop="4" width_mobile="4" alt1="Gemeente Amsterdam" alt2="De Nederlandsche Bank" alt3="Gemeente Den Haag" caption1="Gemeente Amsterdam" caption2="De Nederlandsche Bank" caption3="Gemeente Den Haag" >}}

{{< container_close >}}

<!-- Documentation -->

{{< container_open icon="far fa-file" title="Documentation AI AQT questionnaires" id="documentation" >}}

Considerations and choices made during development of the questionnaires relating to the AI Act, <a href="https://digital-strategy.ec.europa.eu/en/library/commission-publishes-guidelines-ai-system-definition-facilitate-first-ai-acts-rules-application" target="_blank">guidelines</a> from the European Commission on the definition of an AI system, Article 22 GDPR and guidelines of the <a href="https://ec.europa.eu/newsroom/article29/items/612053" target="_blank">EPDB</a> and <a href="https://www.autoriteitpersoonsgegevens.nl/documenten/advies-geautomatiseerde-besluitvorming" target="_blank">Dutch DPA</a> (AP) and the Dutch <a href="https://algoritmes.pleio.nl/attachment/entity/f1a35292-7ea6-4e47-93fa-b3358e9ab2e0" target="_blank">Algorithm Register Guidelines</a> are described in ‘Implementation of the AI Act – Definition of an AI System’. The policy briefing explains why certain elements from <a href="https://digital-strategy.ec.europa.eu/en/library/commission-publishes-guidelines-ai-system-definition-facilitate-first-ai-acts-rules-application" target="_blank">guidelines</a> of the European Commission on the definition of an AI system contradict the legislative text of the AI Act.

Questionnaire 1B (in beta) will be covered soon in the documentation. 

{{< embed_pdf url="/pdf-files/technical-tools/AI-AQT/20250228 White paper Implementation AI Act - definition.pdf" width_mobile_pdf="12" width_desktop_pdf="6" url2="/pdf-files/technical-tools/AI-AQT/20250228 Policy briefing guidelines EC AI system definition.pdf" >}}

{{< container_close >}}

<!-- Examples and explainers -->

{{< container_open icon="fas fa-chalkboard-teacher" title="Examples and explainers" id="explainers" >}}

Using examples, we explain how legal definitions apply to common algorithmic systems. 

{{< embed_pdf url="/pdf-files/technical-tools/AI-AQT/20250512 AI risk identification Algorithm Audit.pdf" width_mobile_pdf="12" width_desktop_pdf="6" url2="/pdf-files/technical-tools/AI-AQT/20241216_10_examples_(non)_AI_system.pdf" title="Risk classification" title2="10 examples of (non) AI systems" >}}

{{< embed_pdf url="/pdf-files/technical-tools/AI-AQT/20241203_Rule_based_or_AI_system.pdf" width_mobile_pdf="12" width_desktop_pdf="6" url2="/pdf-files/technical-tools/AI-AQT/20241118_AI_definition_carrousel.pdf" title="Rule-based algorithms under the AI Act" title2="Definition of an AI system under the AI Act" >}}

{{< embed_pdf url="/pdf-files/knowledge-base/20250515 Carrousel Meaningful human intervention risk profiling algorithms.pdf" width_mobile_pdf="12" width_desktop_pdf="6" title="Preventing prohibited automated decision-making">}}

{{< container_close >}}

<!-- Flowchart Questionnaire 1A -->

{{< container_open icon="fas fa-arrows-alt" title="Flowchart Questionnaire 1A - Identification of AI systems and high-impact algorithms" id="flowchart-questionnaire-1A" >}}

{{< embed_pdf url="/pdf-files/technical-tools/AI-AQT/20250224 Flowchart identification AIAIT EN - Questionnaire 1A.pdf" width_mobile_pdf="12" width_desktop_pdf="12" >}}

{{< container_close >}}

<!-- Flowchart Questionnaire 1B -->

{{< container_open icon="fas fa-arrows-alt" title="Flowchart Questionnaire 1B - Identification of AI systems, high-impact algorithms and solely automated decision-making" id="flowchart-questionnaire-1B" >}}

{{< embed_pdf url="/pdf-files/technical-tools/AI-AQT/20260203 - Flowcharts identification EN merged - Questionnaire 1B.pdf" width_mobile_pdf="12" width_desktop_pdf="12" >}}

The above flowcharts for Questionnaire 1B are simplified representations of only the logic needed to assess whether a system falls under one of the legal definitions, considered in isolation (either AI, high-impact algorithm or sADM). In an actual run through the questionnaire, the questions overlap, and users encounter each of them only once. A complete flowchart of Questionnaire 1B with all paths and outcomes can be found <a href="https://algorithmaudit.eu/pdf-files/technical-tools/AI-AQT/20260115%20Full%20flowchart%20identification%20EN.pdf" target="_blank">here</a>.
{{< container_close >}}

<!-- Flowchart Questionnaire 2 -->

{{< container_open icon="fas fa-arrows-alt" title="Flowchart Questionnaire 2 – Risk classification of AI systems" id="flowchart-questionnaire-2" >}}

{{< embed_pdf url="/pdf-files/technical-tools/AI-AQT/20250310 Flowchart classificatie NL.pdf" width_mobile_pdf="12" width_desktop_pdf="12" >}}

{{< container_close >}}