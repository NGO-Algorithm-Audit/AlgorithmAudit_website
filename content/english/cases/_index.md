---
title: Cases
subtitle: We are working on a variety of cases. Once an audit commission
  has gathered and examined the ethical issue, the original problem statement and corresponding advice
  will be published on this website.
  
  
  We are open to new cases. Please [<span style="color:#005aa7">
  reach out</span>](index.html#contactform) to us when you know a case for review.
image: /images/illustration_cases.svg

---
{{< cases "Ethical risk assessment tool" "The composition of the audit commission for this case is made publicly available once the final advice of the commission is published.">}} This project sheds light on the complex tension between fairness, non-discrimination and statistics in risk assessment tools. Which characteristics of citizens and customers should be considered as protected variables and proxies for protected variables? To what extent and under what circumstances should these (proxy)variables be included or excluded from algorithmic predictions?

###### <span style="color:#005aa7">Contested algorithm</span>

In April 2020, the Rotterdam Court of Auditors ruled that a risk assessment tool used by the municipality of Rotterdam was biased. The reason was the use of ‘illiteracy’ as a prediction variable to select for re-examination welfare claimants that were deemed high-risk. The Court of Auditors considered the variable of 'illiteracy' to act as a proxy for non-Dutch origin, a protected characteristic. The risk assesment algorithm used by the municipality was ruled to be discriminatory as a consequence.

###### <span style="color:#005aa7">Ethical-statistical gridlock</span>

From a statistical perspective, to qualify an algorithm as discriminatory, solely on the ground that it made use of a proxy variable, is flawed and deficient. It is statistically inevitable that most if not all variables used by an algorithmic model are to various degrees correlated with protected variables. All these variables would therefore, strictly speaking, need to be considered as proxy variables. If only variables are admitted that are proven to be statistically independent and uncorrolated to protected variables, this would mean in practice that nearly all variables in the algorithmic model would be excluded from use, rendering accurate prediction all but impossible. In this line of reasoning, the only ethical use of prediction algorithms would be to use highly inaccurate models or using _no algorithms at all._ At Algorithm Audit, we have coined a term for this impasse: an _ethical-statistical gridlock_.

###### <span style="color:#005aa7">Fair ML research</span>

How to resolve this gridlock? Researchers in fair machine learning warn not to debate ‘At what correlation rate variables act as predictor variables or not?' (see [<span style="color:#005aa7">paper</span>](https://arxiv.org/abs/1808.00023)). Instead, researchers advise to examine whether including protected variables in the model hold predictive power. If so, researchers advocate to include protected variables in the prediction model such that the role of proxies becomes moot.

###### <span style="color:#005aa7"> Deliberation</span>

However, including protected variables – such as gender, race and age – in algorithmic models is not always desirable or even practically achievable. In fact, this aligns best with daily practices in which algorithms are developed. In such, selecting legitimate variables on which fair decisions can be made needs careful inspection and deliberation. By composing independent, professional and diverse audit commissions, Algorithm Audit provides ethical reviews of the ethical-statistical gridlock in a holistic and context-sensitive way that is mindful of societal impact.

###### <span style="color:#005aa7">Partners</span>

We are working with academic partners on an advice regarding the above-mentioned ethical issue that emerged at the Municipality of Rotterdam. For this project we are supported by the [<span style="color:#005aa7">SIDN Fund</span>](https://www.sidnfonds.nl/projecten/ethical-risk-assessment-tool).

{{</ cases >}}