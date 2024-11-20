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
---

{{< webapp id="webapp" appId="AIActImplementationTool" src="https://ai-documentation.s3.eu-central-1.amazonaws.com/AI-Act-Questionnaire-v1.0.0.js" title="" >}}

{{< embed_pdf url="/pdf-files/technical-tools/AIA-Implementation-Tool/20241118_AI_definition_carrousel.pdf" width_mobile_pdf="12" width_desktop_pdf="6" >}}

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

    /* Allow new lines for small elements inside #AIActImplementationTool */
    #AIActImplementationTool small {
        white-space: pre-wrap;
    }

    /* Allow new lines for label elements inside #AIActImplementationTool */
    #AIActImplementationTool label {
        white-space: pre-wrap;
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
