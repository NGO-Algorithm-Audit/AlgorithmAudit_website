---
type: regular
title: AI and Algorithms Qualification Toolkit (AI AQT)
subtitle: >
  AI AQT is a tool supporting identification and risk classification of algorithmic systems. Complex legal definitions from the AI Act, GDPR and other policy frameworks are simplified into understandable questions. The tool is developed open source and can be used for free by your organization. 
image: /images/svg-illustrations/AI research.svg
quick_navigation:
  title: Content overview
  links:
    - title: Introduction
      url: '#intro'
    - title: Tool
      url: '#tool'
    - title: Infographic
      url: '#infographic'
    - title: Outcomes of the tool
      url: '#outcome'
    - title: Source code
      url: '#source-code'
    - title: Documentation
      url: '#documentation'
    - title: Examples and explainers
      url: '#explainers'
    - title: Flowchart Questionnaire 1
      url: "#flowchart-questionnaire-1"
    - title: Flowchart Questionnaire 2
      url: "#flowchart-questionnaire-2"
promo_bar:
  - content: "**\U0001F44B Do you also want to start using AI AQT within your organisation? It's easier than you think! Get in [contact ](/about/contact) to learn more.**\n"
  - content: "**✉️ Mis je features in AI AQT? Stuur je verzoek in naar info@algorithmaudit.eu.**"
---

{{< promo_bar index="0" >}}

<!-- Introductie -->

{{< container_open icon="fa-solid fa-toolbox" title="Introduction - a solution for the AI Act and beyond " id="intro" >}}

Ensuring legal compliance when using algorithmic systems requires correct qualification of in-scope systems and correct risks categorization. AI AQT consists of dynamic questionnaires that help with:  

<span style="color:#005aa7; font-weight:600;">1 – Identification:</span> AI systems, solely automated decision-making and high-impact algorithms.

<span style="color:#005aa7; font-weight:600;">2 – Risk classification:</span> Prohibited AI systems, high risk AI systems, additional transparency requirements and General Purpose AI (GPAI) models.

The tool is developed [open-source](/technical-tools/implementation-tool/#source-code) and can be used for free within your organization for AI governance. All outcomes of the questionnaires are shown in the [figure](/technical-tools/implementation-tool/#outcome) below. The flowcharts of the questionnaires can also be found [below](/technical-tools/implementation-tool/#flowchart-questionnaire-1).

{{< container_close >}}

<!-- Web app -->

{{< iframe src="https://ai-documentation.s3.eu-central-1.amazonaws.com/index.html?lang=en" title="" id="tool" icon="" height="60vh" height_mobile="100vh" >}}

<!-- Promo bar -->

{{< promo_bar index="1" >}}

<!-- Infographic: Why correct qualification of algorithmic systems matters -->

{{< container_open icon="fa-solid fa-clipboard-check" title="Why correct qualification of algorithmic systems matters" id="infographic" >}}

Applying legal definitions in practice raises difficult questions. For example: What features distinguish AI from other algoritmic systems? And what criteria determine the risk category of an AI system? Standardized questionnaires can help govern algorithms efficiently. Questionnaires can be shared across the entire organization and can be processed centrally. AI AQT provides a clear and user-friendly approach and serves as a building block for compliance. Identification and risk classification are relevant not only in the context of the AI Act, but also in relation to the GDPR and additional policy instruments, such as the <a href="https://algoritmes.pleio.nl/attachment/entity/f1a35292-7ea6-4e47-93fa-b3358e9ab2e0" target="_blank">Algorithm Register Guidelines</a>  of the Dutch government.

#### Infographic – Flow of the AI AQT questionnaires 

<img src="/images/ai-act-implementation-tool/Infographic EN.png" alt="drawing"/>

{{< container_close >}}

<!-- Outcomes tool -->

{{< container_open icon="fas fa-layer-group" title="Outcomes of the tool" id="outcome" >}}

The outcomes of the tool are displayed in the figure below. The following categories are distinguished: 

#### Questionnaire 1:

- <span style="color:#005AA7">AI systems</span>: Fall inside the scope of the AI Act. Additional control measures are legally required dependent on the risk category. Continue with Questionnaire 2.
- <span style="color:#005AA7">High-impact algorithms</span>: Fall outside the scope of the AI Act but inside the scope of the Dutch Algorithm Register. Additional control measures are needed.
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

The first version of AI AQT was developed in collaboration with the Municipality of Amsterdam and has since been further developed by Algorithm Audit. The source code of the tool can be found on <a href="https://github.com/NGO-Algorithm-Audit/AI-Act-Implementation-Tool" target="_blank">Github</a> and can be (re)used under the <a href="https://eupl.eu/1.2/en/" target="_blank">EUPL-1.2 license</a>. AI AQT is used by the following organisations:

{{< image image1="/images/partner%20logo-cropped/GemeenteAmsterdam.png" image2="/images/partner%20logo-cropped/De Nederlandsche Bank.png" image3="/images/partner%20logo-cropped/GemeenteDenHaag.png" image4="/images/partner%20logo-cropped/GemeenteGouda.jpg" width_desktop="3" width_mobile="8" alt1="Gemeente Amsterdam" alt2="De Nederlandsche Bank" alt3="Gemeente Den Haag" alt4="Gemeente Gouda" caption1="Gemeente Amsterdam" caption2="De Nederlandsche Bank" caption3="Gemeente Den Haag" caption4="Gemeente Gouda" >}}

{{< container_close >}}

<!-- Documentation -->

{{< container_open icon="far fa-file" title="Documentation AI AQT" id="documentation" >}}

Considerations and choices made during development of the questionnaires relating to the AI Act, <a href="https://digital-strategy.ec.europa.eu/en/library/commission-publishes-guidelines-ai-system-definition-facilitate-first-ai-acts-rules-application" target="_blank">guidelines</a> from the European Commission on the definition of an AI system, Article 22 GDPR and guidelines of the <a href="https://ec.europa.eu/newsroom/article29/items/612053" target="_blank">EPDB</a> and <a href="https://www.autoriteitpersoonsgegevens.nl/documenten/advies-geautomatiseerde-besluitvorming" target="_blank">Dutch DPA</a> (AP) and the Dutch <a href="https://algoritmes.pleio.nl/attachment/entity/f1a35292-7ea6-4e47-93fa-b3358e9ab2e0" target="_blank">Algorithm Register Guidelines</a> are described in 'AI AQT Documentation'. The policy briefing elaborates why the <a href="https://digital-strategy.ec.europa.eu/en/library/commission-publishes-guidelines-ai-system-definition-facilitate-first-ai-acts-rules-application" target="_blank">guidelines</a> of the European Commission blur the interpretation of the AI system definition.

{{< embed_pdf url="/pdf-files/technical-tools/AI-AQT/20260312 AI AQT documentation.pdf" width_mobile_pdf="12" width_desktop_pdf="6" url2="/pdf-files/technical-tools/AI-AQT/20250228 Policy briefing guidelines EC AI system definition.pdf" >}}

{{< container_close >}}

<!-- Examples and explainers -->

{{< container_open icon="fas fa-chalkboard-teacher" title="Examples and explainers" id="explainers" >}}

Using examples, we explain how the AI system definition and risk categories from the AI Act apply to real-world algorithmic applications. 

{{< embed_pdf url="/pdf-files/technical-tools/AI-AQT/20250512 AI risk identification Algorithm Audit.pdf" width_mobile_pdf="12" width_desktop_pdf="6" url2="/pdf-files/technical-tools/AI-AQT/20241216_10_examples_(non)_AI_system.pdf" title="Risk classification" title2="10 examples of (non) AI systems" >}}

{{< embed_pdf url="/pdf-files/technical-tools/AI-AQT/20241203_Rule_based_or_AI_system.pdf" width_mobile_pdf="12" width_desktop_pdf="6" url2="/pdf-files/technical-tools/AI-AQT/20241118_AI_definition_carrousel.pdf" title="Rule-based algorithms under the AI Act" title2="Definition of an AI system under the AI Act" >}}

{{< embed_pdf url="/pdf-files/knowledge-base/20250515 Carrousel Meaningful human intervention risk profiling algorithms.pdf" width_mobile_pdf="12" width_desktop_pdf="6" title="Preventing prohibited automated decision-making">}}

{{< container_close >}}

<!-- Flowchart Questionnaire 1 -->

{{< container_open icon="fas fa-arrows-alt" title="Flowchart Questionnaire 1 - Identification of AI systems, high-impact algorithms and solely automated decision-making" id="flowchart-questionnaire-1" >}}

{{< embed_pdf url="/pdf-files/technical-tools/AI-AQT/20260203 - Flowcharts identification EN merged - Questionnaire 1.pdf" width_mobile_pdf="12" width_desktop_pdf="12" >}}

The above flowcharts for Questionnaire 1 are simplified representations of the logic needed to assess whether an algorithmic system falls under one of the legal definitions: AI system, solely automated decision-making or high-impact algorithm). When using the questionnaire, users encounter questions only once. A complete flowchart of Questionnaire 1 with all paths and outcomes can be found <a href="https://algorithmaudit.eu/pdf-files/technical-tools/AI-AQT/20260203 - Full flowchart identification EN.pdf" target="_blank">here</a>.
{{< container_close >}}

<!-- Flowchart Questionnaire 2 -->

{{< container_open icon="fas fa-arrows-alt" title="Flowchart Questionnaire 2 – Risk classification of AI systems" id="flowchart-questionnaire-2" >}}

{{< embed_pdf url="/pdf-files/technical-tools/AI-AQT/20250310 Flowchart classificatie NL.pdf" width_mobile_pdf="12" width_desktop_pdf="12" >}}

{{< container_close >}}