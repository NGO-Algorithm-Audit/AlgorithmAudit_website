---
title: Cases
subtitle: We are working on a variety of cases. Once an audit commission has gathered and examined the ethical issue, the original problem statement and corresponding advice will be published on this website. Others learn from our algoprudence, help to improve it and utilize it as a best practice in similar cases.


  We are open to new cases. Please [<span style="color:#005aa7"> reach out</span>](/#contactform) to us when you know a case for review.
image: "images/case_repository.svg"

---
<!-- Case disinfo -->
{{< case_disinfo "BERT-based disinformation classifier" "Anne Meuwese, Professor in Public Law & AI at Leiden University" "Hinda Haned, Professor in Responsible Data Science at University of Amsterdam" "Raphaële Xenidis, Associate Professor in EU law at Sciences Po Paris" "Aileen Nielsen, Fellow Law&Tech at ETH Zürich" "Carlos Hernández-Echevarría, Assistant Director and Head of Public Policy at the anti-disinformation nonprofit fact-checker" "Ellen Judson, Head of CASM and Sophia Knight, Researcher, CASM at Britain’s leading cross-party think tank">}}{{</ case_disinfo >}}

<!-- Case SIM -->
{{< case_SIM "Type of SIM card as a predictor variable to detect payment fraud" "Fleur Jongepier, Assistant Professor Digital Ethics, Radboud University" "Jan Overgoor, PhD Management Science and Engineering, Stanford University" "Merel Noorman, Assistant Professor Law, Technology and Society, Tilburg University" "Roel Dobbe, Assistant Professor Engineering Systems and Services, TU Delft">}}{{</ case_SIM >}}

<!-- Case Rotterdam -->
{{< case_Rotterdam "Ethical risk assessment tool" "The composition of the audit commission for this case is made publicly available once the final advice of the commission is published.">}} This project sheds light on the complex tension between fairness, non-discrimination and statistics in risk assessment tools. Which characteristics of citizens and customers should be considered as protected variables and proxies for protected variables? To what extent and under what circumstances should these (proxy)variables be included or excluded from algorithmic predictions?

###### <span style="color:#005aa7">Contested algorithm</span>

In April 2020, the Rotterdam Court of Auditors ruled that an algorithmic risk assessment tool used by the municipality of Rotterdam was biased. The reason: the use of ‘illiteracy’ as a prediction variable to generate risk scores for welfare claimants. A certain percentage of the claimants deemed high-risk were invited for re-examination. The Court of Auditors considered the variable of ‘illiteracy’ to act as a proxy for non-Dutch origin, a protected characteristic. The risk assesment algorithm used by the municipality was ruled to be discriminatory as a consequence.

###### <span style="color:#005aa7">Ethical-statistical gridlock</span>

From a statistical perspective, to qualify an algorithm as discriminatory, solely on the ground that it made use of a proxy variable, is flawed and deficient. It is statistically inevitable that most if not all variables used by an algorithmic model are to various degrees correlated with protected variables. All these variables would therefore, strictly speaking, need to be considered as proxy variables. If only variables are admitted that are proven to be statistically independent and uncorrelated to protected variables, this would mean in practice that nearly all variables in the algorithmic model would be excluded from use, rendering accurate prediction all but impossible. In this line of reasoning, the only ethical use of prediction algorithms would be to use highly inaccurate models or using _no algorithms at all._ At Algorithm Audit, we have coined a term for this impasse: an _ethical-statistical gridlock_.

###### <span style="color:#005aa7">Fair ML research</span>

How to resolve this gridlock? Researchers in fair machine learning warn not to debate at what correlation rate variables act as predictor variables or not (see <a href="https://arxiv.org/abs/1808.00023" target="_blank">paper</a>). Instead, researchers advise to examine whether including protected variables in the model hold predictive power. If so, researchers frequently advocate to include protected variables in the prediction model such that the role of proxies becomes moot. The deliberate use of protected variables might sound counter-intuitive, but it allows to check and correct the algorithmic model for actual discriminatory bias.

###### <span style="color:#005aa7"> Deliberation</span>

However, including protected variables – such as gender, race and age – in algorithmic models is not always desirable. Moreover, it is often not even practically achievable. What is to be done to escape this gridlock? Selecting legitimate variables on which fair decisions can be made needs careful inspection and deliberation. By composing independent, professional and diverse audit commissions, Algorithm Audit provides ethical reviews of the ethical-statistical gridlock in a holistic and context-sensitive way that is mindful of societal impact.

###### <span style="color:#005aa7">Partners</span>

We are working with academic partners on an advice regarding the above-mentioned ethical issue that emerged at the Municipality of Rotterdam. For this project we are supported by the <a href="https://www.sidnfonds.nl/projecten/ethical-risk-assessment-tool" target="_blank">SIDN Fund</a>.

{{</ case_Rotterdam >}}
