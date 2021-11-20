---
title: Cases
subtitle: We are currently working on a variety of cases. Once an audit commission
  has formulated an advice, the original problem statement and corresponding advice
  will be published here. We are open to new cases. Please [<span style="color:#005aa7">
  reach out</span>](index.html#contactform) to us when you a case for review.
image: images/illustration2.jpeg

---
{{< cases "Ethical risk assessment tool" "The composition of the audit commission for this case is made publicly available once the final advice of the commission is published.">}}
This project sheds light into the complex tension between ethics and statistics in risk assessment tools. When should characteristics of citizens and customers be considered as protected variables? When do variables act as proxies for protected characteristics?

###### <span style="color:#005aa7">Contested algorithm</span>
In April 2020, the Rotterdam Court of Auditors ruled that a risk assessment tool used by the Municipality of Rotterdam was biased. Why? Due to the presence of ‘illiteracy’ as a predictor variable to select welfare claimants for re-examination. The Court of Auditors considered this variable as a proxy for non-Dutch origin. Therefore, the algorithm used by the Municipality was perceived as discriminatory. 

###### <span style="color:#005aa7">Ethical-statistical gridlock</span>
However, from a statistical perspective, the argumentation to qualify an algorithm as biased solely on presence of proxy variables is flawed. Why? Because all variables in a prediction model are to a certain extent correlated to protected variables and can therefore be considered as proxy variables. Only statistically independent variables are not correlated and do therefore not act as proxy variables. In practice this means that nearly all variables included in a prediction models act as proxy variables. At Algorithm Audit, we coined a term for this impasse: the *ethical-statistical gridlock*.

###### <span style="color:#005aa7">Fair ML research</span>
How to resolve this gridlock? Researchers in fair machine learning warn not to debate ‘At what correlation rate variables act as predictor variables or not?' (see [<span style="color:#005aa7">paper</span>](https://arxiv.org/abs/1808.00023)). Instead, researchers advise to examine whether including protected variables in the model hold predictive power. If so, researchers advocate to include protected variables in the prediction model such that the role of proxies becomes moot. 

###### <span style="color:#005aa7"> Achieving ethical algorithms trough deliberation</span>
However, including protected variables – such as gender, race and age – in algorithmic models is not always desirable or even practically achievable. In fact, this aligns best with daily practices in which algorithms are developed. In such, selecting legitimate variables on which fair decisions can be made needs careful inspection and deliberation. By composing independent, professional and diverse audit commissions, Algorithm Audit provides ethical reviews of the ethical-statistical gridlock in a holistic and context-sensitive way that is mindful of societal impact. 

###### <span style="color:#005aa7">Case</span>
We are working with academic partners on an advice regarding the above-mentioned ethical issue that emerged at the Municipality of Rotterdam. For this project we are supported by the [<span style="color:#005aa7">SIDN Fund</span>](https://www.sidnfonds.nl/projecten/ethical-risk-assessment-tool).

{{</ cases >}}