---
type: regular
title: Documentation for AI-systems
subtitle: >
  Open-source templates for model documentation. Based on AI Act requirements
  and soft law frameworks, such as the [Research framework
  Algorithms](https://www.rijksoverheid.nl/documenten/rapporten/2023/07/11/onderzoekskader-algoritmes-adr-2023#:~:text=De%20Auditdienst%20Rijk%20heeft%20een,risico's%20beheerst%20\(kunnen\)%20worden.)
  of the Netherlands Executive Audit Agency, the [Algorithm
  framework](https://minbzk.github.io/Algoritmekader/) of the Dutch Ministry of
  the Interior and the Dutch Fundamental Rights Impact Assessment
  ([IAMA](https://www.rijksoverheid.nl/documenten/rapporten/2021/02/25/impact-assessment-mensenrechten-en-algoritmes)).


  Help developing and share feedback through
  [Github](https://github.com/NGO-Algorithm-Audit/AlgorithmAudit_website) or via
  [info@algorithmaudit.eu](mailto:info@algorithmaudit.eu).
image: /images/svg-illustrations/case_repository.svg
overview_block:
  - title: Identification of AI-systems and high-risk algorithms
    content: >
      By answering maximum 8 targeted questions, you can determine whether a
      data-driven application qualifies as an AI-system or as an impactful
      algorithm. Complete the dynamic questionnaire to find out.
    icon: fas fa-search
    id: quick-scan
    items:
      - title: Identify
        icon: fas fa-star
        link: classification-quick-scan/#form
---

{{< webapp id="webapp" appId="AIActImplementationTool" src="https://ai-documentation.s3.eu-central-1.amazonaws.com/AI-Act-Questionnaire-v1.0.0.js" title="" >}}

<style>
    /* Styling for form-group elements inside #AIActImplementationTool */
    #AIActImplementationTool .form-group {
        display: block;
    }

    /* Styling color output area inside #AIActImplementationTool */
    #AIActImplementationTool .card-body .bg-primary {
        background color: #F8E5E3;
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