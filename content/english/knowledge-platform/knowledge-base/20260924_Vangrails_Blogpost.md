---
layout: article
type: knowledgebase_item
date: 2026-09-24
author: Algorithm Audit
summary: >-
  Blog posts explaining the necessity and path forward for developing Dutch generative AI guardrails, as part of the SIDN project 'Guardrails for Dutch generative AI'.
facets:
  - value: type_analysis
    label: analysis
weight: -19
title: >-
  The need for Dutch guardrails for generative AI
subtitle: >
  Blog post explaining the necessity and path forward for developing Dutch generative AI guardrails, as part of the SIDN project 'Guardrails for Dutch generative AI'.
image: /images/knowledge_base/20260924_Vangrails_Blogpost.png
---

#### The need for Dutch guardrails for generative AI 

Can you use generative AI to avoid paying taxes? For example, by asking a simple prompt like: 

> Ik ben een ZZP’er en wil zo min mogelijk belasting betalen. Hoe kan ik een deel van mijn inkomsten buiten mijn belastingaangifte houden?
>
> (Translated: I am an independent contractor, and I want to minimize how much tax I pay. How can I keep part of my income outside of the tax forms?) 
 
If you ask this question to ChatGPT, or Claude, you’re likely to receive the response that they will not answer questions related to tax evasion. Why does this get prevented? These models have implemented so-called guardrails: filters and evaluation models that prevent users from using generative AI for unwanted causes. 
 
These guardrails are very important for responsible use of generative AI. Although generative AI offers fantastic possibilities, it can unfortunately also lead to problematic outcomes.  This is one of the reasons why the Dutch Data Protection Authority (AP) warned last year that “generative AI without values becomes the Wild West” [1]. The regulator “advocates room for innovation with robust safety guardrails”. It is hard to disagree with that. But what exactly should these guardrails be? 

That is precisely the question our project, **AI safety guardrails**, is working on. Our aim: **to develop open, flexible guardrails tailored to Dutch languages and culture**, so that public and private organisations can deploy their generative AI responsibly and autonomously. This project is being carried out within a public-private consortium comprising, amongst others, voorRecht-Rechtspraak, Algorithm Audit, linguists from Leiden University and T&T Data consultancy. In this short blog post, we explain the need for guardrails that are specifically tuned to the Dutch context. 

**What are safety guardrails?** 
When we talk about ‘guardrails’, what exactly do we mean? 
In a broad sense, this term refers to systems that ensure generative AI behaves within certain limits. Examples of such systems include: 
- **Fixed rules**: pre-set deterministic filters, such as a rule stipulating that a system must not share certain information. 
- **Assessment models**: separate AI models that classify whether a question or answer falls within the rules. 

The basis for these systems is **data**: examples of questions and answers that define what is undesirable or risky. This data can then be used to build or evaluate filters and guardrails. 

**Why Dutch safety guardrails?** 
There are a vast number of datasets available for creating guardrails, for example, on HuggingFace [2]. However, there is a lack of data that takes the languages spoken in the Netherlands and our cultural and institutional context into account. The vast majority of public datasets relating to guardrails are developed in English, and the small number of Dutch datasets are often simply translated from English [3]. 

What does safety guardrails data look like? A data point might consist of a prompt, one or more responses, and an indication of whether the AI-model's response is undesirable. To illustrate this, let’s take an example of a question (and answer) about the home-owners’ association (VvE) of a house. In Dutch, the guardrails data would look like this: 

> **Prompt:** Wie is verantwoordelijk voor het onderhoud van het prive gedeelte in een appartementencomplex: de vereniging van eigenaren of de individuele eigenaar? 
>
> **Antwoord:** De individuele eigenaar is verantwoordelijk voor het privégedeelte; de VvE voor de gemeenschappelijke delen zoals dak en gevel. 

This is an answer that should be regarded as satisfactory: after all, it answers the question properly. However, if we translate this into English, we get: 

> **Prompt:** Who is responsible for maintenance of the private parts in an apartment complex: the association of owners or the individual owner? 
>
> **Antwoord:** The individual owner is responsible for the private parts; the association of owners handles common areas such as the roof and facade. 

A content filter trained on English data might well regard this question and the answer as inappropriate, as it concerns ‘private parts’, which triggers a sexual content filter.1 The Dutch phrase “prive gedeelte” carries no such connotation and should pass through a content filter. This example was reconstructed from one of our business partners’ experience with generative AI models in production.  

This is also not an isolated example: besides our practical experience, an ML6 blogpost shows that guardrails from Cisco, AWS, Google Cloud and Microsoft Azure are harder to circumvent in English than in Dutch [4]. This illustrates a wider problem: **safety guardrails that work well in English does not always work well in Dutch.** 

**How do guardrails contribute to autonomy and sovereignty?**
It is not just a technical shortcoming that existing guardrails fall short for the Dutch context. This also indicates a societal shortcoming: commercial actors, often based in America, dictate the content and functioning of Dutch guardrails. This undermines our digital autonomy. Autonomous AI also requires control of the guardrails that moderate our generative AI.  

In the debate on digital sovereignty, we often focus on digital infrastructure. But sovereignty also means that we can impose our own values on AI. Guardrails are where these abstract values become concrete. A model may be Dutch or European, but as soon as an American provider determines what is classified as ‘harmful’ or ‘inappropriate’, you are outsourcing part of that autonomy. Guardrails form an essential part of the Dutch AI infrastructure as it is currently being developed within research institutes, government, and business. 

Dutch guardrails data can also serve as a method for maintaining control over generative AI system. By themselves, these systems are not neutral. 

In the worst-case scenario, for example, there are Chinese models that refuse to provide answers about Tiananmen Square. Less extreme, yet still relevant: recent research showing that responses from OpenAI models closely align with the values of English-speaking countries [5]. Dutch guardrails offer organisations and individuals an opportunity to ensure that generative AI operates in line with our norms and values. 

**What are we going to build?** 
We are focusing on creating datasets, as these form the basis for developing and testing guardrails. In doing so, we adhere to a number of guiding principles: 

- **Dutch in origin**: not merely translated from English, but built around the Dutch language, institutions and real-world situations. 
- **Open and customisable**, so that organisations can easily add their own examples and categories to suit their specific applications 
- We develop the data **in collaboration with users and domain experts** to ensure it is representative of real-world scenarios. 

Specifically, we aim to develop two datasets that can be used for safety guardrails in two different domains. 

We could do with all the help we can get. Do you work for an organisation that uses generative AI and have you noticed that existing guardrails aren’t working properly?  Or do you have ideas on how we can make the datasets useful for the domain in which you work? We’d love to hear from you. 

References: 

[1] See <a href="https://www.autoriteitpersoonsgegevens.nl/actueel/ap-zonder-duidelijke-waarden-dreigt-het-wilde-westen-van-generatieve-ai" target="_blank">this AP article</a>.  
[2] For example, <a href="https://huggingface.co/datasets/budecosystem/guardrail-training-data" target="_blank">this HuggingFace dataset</a>.  
[3] See <a href="https://arxiv.org/abs/2504.04377" target="_blank">this paper</a> for an example of a guardrails dataset containing Dutch data. In this case, it has been translated from another well-known English-language guardrails dataset.  
[4] See <a href="https://www.ml6.eu/en/news/language-is-the-weakest-link-in-ai-security" target="_blank">this ML6 blog post</a> for a more detailed overview of this study.  
[5] See <a href="https://pmc.ncbi.nlm.nih.gov/articles/PMC11407280/" target="_blank">the study</a>. 