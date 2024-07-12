---
title: "Why Fairness cannot be Automated"
author: Sandra Wachter, Brent Mittelstadt, Chris Russell
image: "/images/knowledge_base/fairness_automated.png"
layout: article
type: knowledgebase_item
draft: false
summary: Must-read scientific paper proposing ideas to bridge the qualitative (legal) and quantitative (statistical) doctrine
---

#### **Authors: Sandra Wachter, Brent Mittelstadt, Chris Russell**

##### **Key take-aways**

<span style="color:#005aa7; font-weight: bold;">-</span> A critical incompatibility is identified between European notions of discrimination and existing work on algorithmic and automated fairness. A clear gap exists between statistical measures of fairness and the context-sensitive, often intuitive and ambiguous discrimination metrics and evidential requirements used by the European Court of Human Rights.

<span style="color:#005aa7; font-weight: bold;">-</span> While numerous statistical metrics exist in the technical literature, none can yet reliably capture a European conceptualisation of discrimination which is, by definition, contextual.

<span style="color:#005aa7; font-weight: bold;">-</span> Based on our analysis, we argue that conditional demographic disparity (CDD) can be used as a baseline measure to detect possible discrimination in automated systems that is both philosophically sound and harmonious with EU non-discrimination law and jurisprudence.

##### **Conditional demographic disparity: a statistical ‘gold standard’ for automated fairness**

> Conditional demographic disparity differs from demographic disparity only in the sense that one or more additional conditions are added. For example, if we condition on grade point average (GPA) and we admit 70% of white applicants to graduate school that had a 4.0 GPA, conditional demographic parity would be satisfied only if 70% of black applicants with a 4.0 GPA were also admitted.

##### **Remarks on CDD**

<span style="color:#005aa7; font-weight: bold;">-</span> Conditional demographic density is not well aligned with the notion of ‘contextual equality’ in non-discrimination law in Europe in which judicial interpretation plays a significant role.

<span style="color:#005aa7; font-weight: bold;">-</span> Re-aligned in this way, the proper goal of ‘automating fairness’ would not just be to correct potential discrimination as a part of system development and deployment, but rather to create systems which can automatically provide the baseline evidence required for external adjudication. This re-alignment will help the judiciary continue to fulfil its crucial role as an interpreter of non-discrimination law on a contextual, case-specific basis and help system controllers and developers to pre-emptively correct biases and potential discriminatory results.

<span style="color:#005aa7; font-weight: bold;">-</span> If adopted as an evidential standard, CDD will help answer the two key questions concerning fairness in automated systems that can be justifiably delegated to the machine learning community. Specifically, in any given case of prima facie discrimination caused by an automated system: - 1) Across the entire affected population, which protected groups could I compare to identify potential discrimination? - 2) How do these protected groups compare to one another in terms of disparity of outcomes?
