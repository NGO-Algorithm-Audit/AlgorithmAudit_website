---
title: "The Measure and Mismeasure of Fairness"
author: Sam Corbett-Davies, Sharad Goel
image: "images/knowledge_base/measure_mismeasure.png"
type: "regular"
draft: false
summary: Why are formulas for fairness troublesome? Why prevailing definitions of fairness typically do not map on to traditional social, economic or legal understandings of the concept? This paper provides answers.
---

*The original version of the article can be found <a href="https://arxiv.org/pdf/1808.00023.pdf," target="_blank">here</a>.*

### Short summary

This scientific paper elaborates on incompatibilities between various popular formalisations of fairness. It is argued why formal definitions of fairness typically do not map on to traditional social, economic or legal understandings of the concept and why these formalisations are often ill-suited either as diagnostics or as design constraints for 'fair' algorithms. Besides, pros and cons of utility-based frameworks for decisions making are discussed, e.g., risk assessment tools including threshold policies. Some common misconceptions that occur in informal discussions on fairness are reviewed. For instance: If protected attributes are not predictive, one could in theory build an accurate risk model using only examples from one particular group (e.g., white men). Given enough examples of white men, the model would learn the relationship between features and risk, which by our assumption would generalise to the entire population. This phenomenon highlights a tension between advocating both for representative training data and for the exclusion of protected attributes. The central these of this paper is that representative data are often most important precisely when protected attributes add information, in which case their use is arguably justified. Finally, the focus shifts from identiying the shortcomings of formal definitions of fairness, to a path forward how to ensure future algorithmic decisions are fair.  

### Long summary 

#### 1. Introduction 

The main components of this paper are introduced and discussed in more detail in Section 2-4.

##### Formal definitions of fairness
From the fair ML research community, three classes of fairness definitions have gained prominence:


<span style="color:#005aa7; font-weight: bold;">1\.</span> Anti-classification: risk assessment algorithms do not consider protected characteristics—like race, gender, or their proxies—when deriving estimates 


<span style="color:#005aa7; font-weight: bold;">2\.</span> Classification parity: certain common measures of predictive performance are required be equal across groups defined by the protected attributes. For example, a risk assessment algorithm that predicts loan default might be required to produce similar false negative rates for white and black applicants. 


<span style="color:#005aa7; font-weight: bold;">3\.</span> Calibration: Outcomes are independent of protected attributes after controlling for estimated risk. For example, among loan applicants estimated to have a 10% chance of default, calibration requires that whites and blacks default at similar rates. 
These formalisations of fairness have considerable intuitive appeal, but suffer from deep statistical limitations. In particular, they are poor measures for detecting discriminatory algorithms and, even more importantly, designing algorithms to satisfy these definitions can, perversely, negatively impact the well-being of minority and majority communities alike. 


##### Protected variables and the concept of infra-marginality
In contrast to the principle of anti-classification, it is often necessary for equitable risk assessment algorithms to explicitly consider protected characteristics. In the criminal justice system, for example, women are typically less likely to commit a future violent crime than men with similar criminal histories. As a result, gender-neutral risk scores can systematically overestimate a woman’s recidivism risk, and can in turn encourage unnecessarily harsh judicial decisions. When the true underlying distribution of risk varies across groups, differences in group-level error rates are an expected consequence of algorithms that accurately capture each individual’s risk. This general statistical phenomenon is known as the problem of infra-marginality.

Besides, it is shown that calibration, while generally desirable, provides only a weak guarantee of equity.

##### Risk score threshold policies
Practitioners have long designed tools that adhere to an alternative fairness concept: (risk score) threshold policies. This decision strategy follows widely accepted legal standards of fairness. However, this thresholding approach will in general violate classification parity, and may additionally violate anti-classification, as some risk assessments use protected characteristics.

Training data 
Two ways are considered in which problems with the training data can corrupt risk scores:


<span style="color:#005aa7; font-weight: bold;">1\.</span> Label bias. Consists of two components:

<span style="color:#005aa7; font-weight: bold;">Measurement problem</span> Not all subgroups are measured alike, for instance in the criminal justice system, whites and blacks who commit the same offence are often arrested and convicted for those offences at different rates, particularly for low-level crimes, like minor drug use. There is no easy solution for this measurement problem.

<span style="color:#005aa7; font-weight: bold;">Subgroup validity</span> The predictive power of features can vary across groups, what Ayres (2002) calls the problem of subgroup validity.  Even when labels are accurately measured, the relationship between predictor variables and outcomes might differ across groups. This phenomenon can be countered by fitting group-specific risk models that learn such idiosyncratic patterns—violating anti-classification. Indeed, as mentioned above, this is precisely the rationale for employing gender-specific recidivism models. 


<span style="color:#005aa7; font-weight: bold;">2\.</span> Sample bias. Buolamwini and Gebru (2018) found that commercial image analysis programs have difficulty classifying the gender of dark-skinned individuals, a shortcoming that is potentially due to the relative dearth of dark-skinned faces in popular facial analysis datasets.

##### Externalities and equilibrium effects
While single-threshold policies are often a useful starting point, they do not work in all circumstances, particularly when externalities and equilibrium effects may dominate the immediate, localised costs and benefits of decisions. For example in university admissions, a diverse student body may benefit the entire institution, creating interdependencies between applicants. Importantly, though, this complexity does not mean that the popular formalisations of fairness we study can help one achieve equitable outcomes. Indeed, requiring either anti-classification or classification parity can in fact exacerbate these problems. 

#### 2. Background 

...