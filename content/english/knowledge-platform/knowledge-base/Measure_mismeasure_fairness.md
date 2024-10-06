---
title: "The Measure and Mismeasure of Fairness"
author: Sam Corbett-Davies, Sharad Goel
image: "/images/knowledge_base/measure_mismeasure.png"
layout: article
type: knowledgebase_item
facets:
  - value: type_article
    label: article
  - value: subject_scientific
    label: scientific
draft: false
weight: 0
summary: Why are formulas for fairness troublesome? Why prevailing definitions of fairness typically do not map on to traditional social, economic or legal understandings of the concept? This paper provides answers.
---

_The article can be found <a href="https://arxiv.org/pdf/1808.00023.pdf," target="_blank">here</a>._

### Short summary

This scientific paper elaborates on incompatibilities between various popular formalisations of fairness. It is argued why formal definitions of fairness typically do not map on to traditional social, economic or legal understandings of the concept and why these formalisations are often ill-suited either as diagnostics or as design constraints for 'fair' algorithms. Besides, pros and cons of utility-based frameworks for decisions making are discussed, e.g., risk assessment tools including threshold policies. Some common misconceptions that occur in informal discussions on fairness are reviewed. For instance: If protected attributes are not predictive, one could in theory build an accurate risk model using only examples from one particular group (e.g., white men). Given enough examples of white men, the model would learn the relationship between features and risk, which by our assumption would generalise to the entire population. This phenomenon highlights a tension between advocating both for representative training data and for the exclusion of protected attributes. The central these of this paper is that representative data are often most important precisely when protected attributes add information, in which case their use is arguably justified. In the concluding section of this paper, the focus shifts from identiying the shortcomings of formal definitions of fairness, to a path forward how to ensure future algorithmic decisions are fair.

### Long summary

#### 1. Introduction

The main topics discusses in this paper are introduced in this section. The topics are discussed in greater detail in Section 2-4.

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

<span style="color:#005aa7; font-weight: bold;">Subgroup validity</span> The predictive power of features can vary across groups, what Ayres (2002) calls the problem of subgroup validity. Even when labels are accurately measured, the relationship between predictor variables and outcomes might differ across groups. This phenomenon can be countered by fitting group-specific risk models that learn such idiosyncratic patterns—violating anti-classification. Indeed, as mentioned above, this is precisely the rationale for employing gender-specific recidivism models.

<span style="color:#005aa7; font-weight: bold;">2\.</span> Sample bias. Buolamwini and Gebru (2018) found that commercial image analysis programs have difficulty classifying the gender of dark-skinned individuals, a shortcoming that is potentially due to the relative dearth of dark-skinned faces in popular facial analysis datasets.

##### Externalities and equilibrium effects

While single-threshold policies are often a useful starting point, they do not work in all circumstances, particularly when externalities and equilibrium effects may dominate the immediate, localised costs and benefits of decisions. For example in university admissions, a diverse student body may benefit the entire institution, creating interdependencies between applicants. Importantly, though, this complexity does not mean that the popular formalisations of fairness we study can help one achieve equitable outcomes. Indeed, requiring either anti-classification or classification parity can in fact exacerbate these problems.

#### 2. Background

Legal, economical and mathematical background is provided for fair decision supporting methods, e.g., risk assessment tools.

##### 2.1 Discrimination in law and economics

Legal and economic notions of discrimination are used to define the algorithmic doctrine of discrimination.

###### Economic doctrine

There are two dominant economic categories of discrimination, both of which focus on utility:

<span style="color:#005aa7; font-weight: bold;">1\.</span> Statistical – Decision makers explicitly consider protected attributes in order to optimally achieve some non-prejudicial goal. For example, profit-maximising auto insurers may charge a premium to male drivers to account for gender differences in accident rates.

<span style="color:#005aa7; font-weight: bold;">2\.</span> Taste-based: Decision makers act as if they have a preference or “taste” for bias, sacrificing profit to avoid certain transactions. For example, an employer who forfeits financial gain by failing to hire exceptionally qualified minority applicants.

###### Legal doctrine

Dominant legal doctrine of discrimination focuses on a decision maker’s motivations. Specifically, equal protection law—as established by the U.S. Constitution’s Fourteenth Amendment—prohibits government agents from acting with “discriminatory purpose” (Washington v. Davis, 1976).

###### Equal protection doctrine

The equal protection doctrine has evolved over time, and reflects ongoing debates about the role of classification (use of protected traits) versus subordination (subjugation of disadvantaged groups) in discrimination cases (Fiss, 1976). By law, it is presumptively suspect for government entities to explicitly base decisions on race, gender, or other protected attributes, with such policies automatically triggering heightened judicial scrutiny (Winkler, 2006). In this sense, the principle of anti-classification is firmly encoded in current legal standards. Importantly, however, one can clear this hurdle by arguing that such classifications are necessary to achieve equitable ends—as with affirmative action. There is thus recognition under constitutional law that society’s interests are not always served by a mechanical blindness to protected attributes. Further, several legal scholars have argued that courts, even when formally applying anti-classification criteria, are often sympathetic to the potential effects of judgments on social stratification, indicating tacit concern for anti-subordination (Balkin and Siegel, 2003; Colker, 1986; Siegel, 2003). Others, though, have noted that such judicial support for anti-subordination appears to be waning (Nurse, 2014).

###### Disparate impact doctrine

A practice may be deemed discriminatory if it has an unjustified adverse effect on protected groups, even in the absence of explicit categorisation or animus (Barocas and Selbst, 2016). It should be noted that the legal doctrine of disparate impact stems largely from federal statutes, not constitutional law.

The disparate impact doctrine was formalised in the landmark U.S. Supreme Court case Griggs v. Duke Power Co. (1971). In 1955, the Duke Power Company instituted a policy that mandated employees have a high school diploma to be considered for promotion, which had the effect of drastically limiting the eligibility of black employees. The Court found that this requirement had little relation to job performance, and thus deemed it to have an unjustified—and illegal—disparate impact. Importantly, the employer’s motivation for instituting the policy was irrelevant to the Court’s decision; even if enacted without discriminatory pur- pose, the policy was deemed discriminatory in its effects and hence illegal. Note, however, that disparate impact law does not prohibit all group differences produced by a policy—the law only prohibits unjustified disparities. For example, if, hypothetically, the high-school diploma requirement in Griggs were shown to be necessary for job success, the resulting disparities would be legal.

###### Algorithmic doctrine

In modern applications of statistical risk assessments, discriminatory intent is often of secondary concern— indeed, many policymakers adopt algorithms in part to reduce bias in unaided human decisions. Instead, the primary question is whether algorithms inadvertently lead to discriminatory decisions, either through inappropriate design or by implicitly encoding biases in the data on which they are built. As such, our discussion of fairness below draws heavily on the economic concept of taste-based discrimination and its counterpart in the law, unjustified disparate impact.

##### 2.2 Defining algorithmic fairness

Measures of algorithmic fairness are mathematically defined, but omitted here. For mathematical details please read the original paper.

###### Anti-classification

Decisions do not consider protected attributes.

###### Statistical parity

For statistical parity, measures are discussed that can be computed from the two-by-two confusion matrix: false positive rate, false negative rate, precision, recall and the proportion of decisions that are positive and area under the ROC curve (AUC). Two of the above measures—false positive rate, and the proportion of decisions that are positive— have received considerable attention in the machine learning community.

###### Demographic parity

Formally, parity in the proportion of positive decisions, is also known as demographic parity. In the running pretrial example, demographic parity means that detention rates are equal across race groups; and parity of false positive rates means that among defendants who would not have gone on to commit a violent crime if released, detention rates are equal across race groups. Demographic parity is not strictly speaking a measure of “error”, but we nonetheless include it under classification parity since it can be computed from a confusion matrix. We note that demographic parity is also closely related to anti-classification, since it requires that a classifier’s prediction is independent of protected group membership.

###### Calibration

The third definition of fairness we consider is calibration, meaning that outcomes should be independent of protected attributes conditional on risk score. In the pretrial context, calibration means that among defendants with a given risk score, the proportion who would reoffend if released is the same across race groups.

##### 2.3 Utility function and threshold rules

Utility-based frameworks, in which one explicitly details the costs and benefits of actions, serve as a useful paradigm for reasoning about policy choices.

###### Threshold decision methods

When developing risk assessment tools in practice, it is common to first approximate the true risk with a risk score function, and then perform an action if and only if the approximated risk score is higher than for some fixed threshold—we call these threshold rules. For example, in the banking context, one may deny loans to all applicants considered a high risk of default; and in the pretrial context, one may detain all defendants considered a high risk of committing a violent crime if released. This strategy, while not explicitly referencing fairness, satisfies a compelling notion of equity, with all individuals evaluated according to the same standard. When the threshold is chosen appropriately, threshold rules also satisfy the economic and legal concepts of fairness described above. A mathematical proof is provided that illustrates why threshold rules—under the laid out mathematical framework—ensure there is no taste-based discrimination or unjustified disparate impact.

Threshold rules are predicated on the assumption that errors are equally costly for all individuals. However, under a threshold rule, error rates generally differ across groups, violating classification parity. For example, it may, hypothetically, be more socially costly to detain a single parent than detaining a defendant without children, and thus decide to apply different thresholds to the two groups. Threshold rules can also violate anti-classification, since the most statistically accurate risk scores may depend on group membership.

Decisions might involve significant externalities, where the value of taking some action for an individual depends on what actions are taken for others. In this case, decisions cannot be considered in isolation, limiting the value of threshold rules. Despite these complications, threshold rules are often a natural starting point.

##### 2.4 Applications of formal fairness criteria

Formal fairness criteria have been applied to evaluate existing decision algorithms.

###### COMPAS

Perhaps most prominently, a team of investigative journalists at ProPublica reported that the popular COMPAS algorithm for recidivism prediction had higher false positive rates for black defendants than for whites—a finding widely interpreted as meaning the tool was biased against blacks (Angwin et al., 2016) (cf. Chouldechova, 2017, for discussion). The false positive rate metric has likewise been applied to assess algorithms for credit scoring (Hardt et al., 2016) and for child welfare services (Chouldechova et al., 2018). Others have examined whether algorithmic predictions in criminal justice have similar AUC across protected groups, a form of classification parity (Skeem and Lowenkamp, 2016), and whether such predictions are calibrated (Skeem et al., 2016).

###### Research to fair decision rules

Moving beyond diagnostics, a large body of work in computer science has proposed procedures for satisfying various fairness definitions. For example, Hardt et al. (2016) developed a method for constructing randomised decision rules that ensure true positive and false positive rates are equal across protected groups, a form of classification parity that they call equalised odds; they further study the case in which only false positive rates must be equal, which they call equal opportunity. Agarwal et al. (2018) similarly propose a technique for constructing algorithms that satisfy various forms of classification parity, including equality of false positive rates. Many papers, particularly early work in fair machine learning, proposed algorithms to achieve demographic parity via pre-processing, post-processing, and regularisation techniques (Agarwal et al., 2018; Calders and Verwer, 2010; Edwards and Storkey, 2015; Feldman et al., 2015; Kamiran et al., 2013; Pedreshi et al., 2008; Zemel et al., 2013). Corbett-Davies et al. (2017) show that among all algorithms that satisfy demographic parity, the utility-maximising rule uses different decision thresholds for each protected group; they similarly show that such multiple-threshold rules maximise utility among algorithms that satisfy parity of false positive rates. Finally, several papers have suggested algorithms that enforce a broad notion of anti-classification, which prohibits not only the explicit use of protected traits but also the use of potentially suspect “proxy” variables (Grgic-Hlaca et al., 2016; Johnson et al., 2016; Qureshi et al., 2016). Recently, researchers have further expanded the idea of anti-classification to create algorithms that avoid potentially suspect causal paths (Bonchi et al., 2017; Datta et al., 2017; Kilbertus et al., 2017; Kusner et al., 2017; Nabi and Shpitser, 2018).

###### Impossibility theorems

Complicating these efforts to develop fair algorithms, several researchers have pointed out that many formal fairness definitions are incompatible (cf. Berk et al., 2017, who survey fairness measures and their incompatibilities). For example, Chouldechova (2017) shows that various classification parity constraints (specifically, equal positive/negative predictive values, and equal false positive/negative rates) are incompatible if base rates differ across groups. Kleinberg et al. (2017b) prove that except in degenerate cases, no algorithm can simultaneously satisfy calibration and a particular form of classification parity. Corbett- Davies et al. (2016, 2017) and Pleiss et al. (2017) similarly consider the tension between calibration and alternative definitions of fairness.

###### Limits to mathematical definitions of fairness

This fast growing literature indicates the importance that many researchers place on formal, mathematical definitions of fairness, both as diagnostics to evaluate existing systems and as constraints when engineering new algorithms. Further, the impossibility results have been widely viewed as representing an unavoidable and unfortunate trade-off, with one desirable notion of fairness sacrificed to satisfy another, equally desirable one. However, as we discuss below, prevailing definitions of fairness typically do not map on to traditional social, economic or legal understandings of the concept. As a result, these formalisations are often ill-suited either as diagnostics or as design constraints. In particular, one can view the impossibility theorems as primarily identifying incompatibilities between various problematic fairness criteria, rather than as establishing more fundamental limits on fair machine learning.

#### 3. Limitations of prevailing mathematical definitions of fairness

In this section it is argued that the dominant mathematical formalisations of fairness—anti-classification, classification parity, and calibration—all suffer from significant limitations which, if not addressed, threaten to exacerbate the very problems of equity they seek to mitigate.

##### 3.1 Limitations of anti-classification

###### Protected characteristics and their proxies

Perhaps the simplest approach to designing an ostensibly fair algorithm is to exclude protected characteristics from the statistical model. This strategy ensures that decisions have no explicit dependence on group membership. However, the history of the United States shows that clearly discriminatory behaviour is possible even without using protected characteristics. For example, literacy tests were employed up until the 1960s as a facially race-neutral means of disenfranchising African Americans and others. This possibility has prompted many to argue that one should not only exclude protected attributes but also their “proxies”. We note, however, that it is difficult to operationalise the definition of a “proxy”, leading to a panoply of competing approaches. In part, this is because nearly every covariate commonly used in predictive models is at least partially correlated with protected group status; and in many situations, even strongly correlated covariates may be considered legitimate factors on which to base decisions (e.g., education in the case of hiring). We circumvent this debate over proxies by arguing that there are important cases where even protected group membership itself should be explicitly taken into account to make equitable decisions. Once we establish that there is value to including protected traits themselves in risk models, the role of proxies largely becomes moot.

###### Representative training data and for the exclusion of protected attributes

When gender or other protected traits add predictive value, excluding these attributes will in general lead to unjustified disparate impacts; when protected traits do not add predictive power, they can be safely removed from the algorithm. But we note one curiosity in the latter case. If protected attributes are not predictive, one could in theory build an accurate risk model using only examples from one particular group (e.g., white men). Given enough examples of white men, the model would learn the relationship between features and risk, which by our assumption would generalise to the entire population. This phenomenon highlights a tension in many informal discussions of fairness, with scholars advocating both for representative training data and for the exclusion of protected attributes. In reality, representative data are often most important precisely when protected attributes add information, in which case their use is arguably justified.

##### 3.2 Limitations of classification parity

Classification parity is not strictly a single fairness criterion, but rather a family of criteria that includes many of the most popular mathematical definitions of fairness. Starting with some aggregate measure of algorithmic performance, classification parity requires that measure be equal across groups. Commonly, the measures of performance are computed from an algorithm’s group-specific confusion matrix.

###### Incompatible classification parity criteria

For example, as noted above, Angwin et al. (2016) found that the COMPAS risk assessment tool had a higher false positive rate for black defendants in Broward County, and had a higher false negative rate for white defendants. These differences led the authors to argue that COMPAS was biased against black defendants. In response, the developers of COMPAS countered that false positive and negative rates were flawed measures of fairness; they instead advocated for ensuring equality in positive and negative predictive values across race, which COMPAS achieved (Dieterich et al., 2016). All four metrics are derived from COMPAS’s confusion matrices for black and white defendants, so arguments that some combination of them should be equalised are all arguments for some type of classification parity. Here we demonstrate that in fact all such statistics computed from a confusion matrix are problematic measures of fairness.

###### Risk distributions and the problem of infra-marginality

The concept of risk distributions is mathematically introduced in this section. In general, we would expect any two groups—defined by race, gender, or any other attributes—to have risk distributions with different means and with different variances. Because the risk distributions of protected groups will in general differ, threshold-based decisions will typically yield error metrics that also differ by group. This general phenomenon is known as the problem of infra-marginality in the economics and statistics literatures, and has long been known to plague tests of discrimination in human decisions (Ayres, 2002; Simoiu et al., 2017). In short, the most common legal and economic understandings of fairness are concerned with what happens at the margin (e.g., whether the same standard is applied to all individuals). What happens at the margin also determines whether decisions maximise social welfare, with the optimal threshold set at the point where the marginal benefits equal the marginal costs. However, popular error metrics assess behaviour away from the margin, hence they are called infra-marginal statistics. As a result, when risk distributions differ, standard error metrics are often poor proxies for individual equity or social well-being. To the extent that error metrics differ across groups, that tells us more about the shapes of the risk distributions than about the quality of decisions. In particular, it is hard to determine whether differences in error rates are due to discrimination or to differences in the risk distributions.

###### Infra-marginality in practice

The problem of infra-marginality is not merely a hypothetical possibility. One might attribute differences in the estimated risk distributions to problems with the statistical risk algorithm or with the dataset on which it was trained. But we caution against that conclusion. As noted above, when base rates of violent recidivism differ across groups, the true risk distributions will necessarily differ as well—and this difference persists regardless of which features are used in the prediction. The empirical COMPAS data suggest that 21% of black defendants in Broward County are rearrested for violent offences, compared to 12% of white defendants. Though these rearrest rates are only approximations of the true, unobserved recidivism rate (a point we discuss in Section 4), they do suggest that there are indeed real differences between the two subpopulations. Of course, differences in recidivism rates are themselves a product of past social and economic discrimination. That fact, however, does not mean that statistical estimates of current, individual-level risk are inaccurate, or that better policy outcomes could be achieved by altering risk scores to satisfy classification parity. Policymakers may strive to reduce group differences, and they may debate the appropriate course of action to accomplish that goal, but we believe it would be misleading to characterise an algorithm or its training data as unfair for accurately identifying existing statistical patterns.

###### The effect of classification parity on group well-being

When risk distributions differ, enforcing classification parity can often decrease utility for all groups. Under relatively mild assumptions, Corbett- Davies et al. (2017) show that the optimal way to achieve classification parity is by setting different decision thresholds for different groups. Specifically, they show that among all decision rules that satisfy parity of false positive rates, utility (as defined in Section 2.3) is maximised by implementing group-specific decision thresholds. They similarly show that such multiple-threshold rules maximise utility among all algorithms satisfying demographic parity, though the optimal thresholds for satisfying demographic parity will in general differ from those necessary to optimally satisfy parity of false positive rates. Most importantly, the thresholds required to optimally satisfy these classification parity constraints will typically differ from the optimal thresholds for any community. Thus, requiring classification parity (or even approximate parity) can hurt majority and minority groups alike. When risk distributions differ, classification parity is typically costly to all groups, regardless of how society balances the relative costs of crime and detention.

###### Additional misconceptions about false positive rates

The discussion of classification parity is concluded by highlighting two popular misconceptions specific to equalising false positive rates. First, one might believe that a difference in group-level false positive rates indicates an informational disparity. In our pretrial example, this view suggests that the higher observed false positive rate for black defendants relative to whites results from using less predictive features for blacks. Accordingly, some have argued that requiring parity of false positive rates creates an incentive for algorithm designers to collect better information on the higher error-rate group—black defendants in this case (Hardt et al., 2016).

While this argument is intuitively appealing, it is again important to consider the shape of risk distributions. As discussed above, risk distributions differ whenever base rates differ, regardless of the features collected, and so one would expect false positive rates to differ even when predictions are based on high-quality information. Without considering the distribution of risk—and in particular, the process that gave rise to that distribution—false positive rates can be a misleading measure of fairness.

##### 3.3. Limitations of calibration

Calibration ensures that risk scores mean the same thing for all protected groups—for example, that white and black defendants given a risk score of 7 indeed recidivate at comparable rates. While important, calibration is insufficient to ensure that risk scores are accurate or that decisions are equitable.

Examples are discussed that illustrate the importance of considering all available data when constructing statistical risk estimates; assessments that either intentionally or inadvertently ignore predictive information may facilitate discriminatory decisions while satisfying calibration.

Although discrete risk categories may aid interpretation by human decision makers, it further complicates the role of calibration in assessing fairness.

#### 4. Open challenges for designing equitable algorithms

Unfortunately, there is no simple procedure or metric to ensure algorithmic decisions are fair.

Four key principles for designing equitable algorithms are presented:

<span style="color:#005aa7; font-weight: bold;">1\.</span> Measurement error: <span style="color:#005aa7; font-weight: bold;">a)</span> Label bias, <span style="color:#005aa7; font-weight: bold;">b)</span> Feature bias

<span style="color:#005aa7; font-weight: bold;">2\.</span> Sample bias

<span style="color:#005aa7; font-weight: bold;">3\.</span> Model form, including model interpretability

<span style="color:#005aa7; font-weight: bold;">4\.</span> Externalities and equilibrium effects

Background:

<span style="color:#005aa7; font-weight: bold;">1\. Measurement error</span> It is argued that label bias often poses significant challenges to constructing equitable risk scores, and indeed label bias is perhaps the most serious obstacle facing fair machine learning. Feature bias, however, can often be dealt with more easily in practice, though complications still remain.

<span style="color:#005aa7; font-weight: bold;">1a) Label bias</span> Two problems occur regarding label bias: i) We typically only observe crime that results in a conviction or an arrest; ii) We only observe counterfactual outcomes, i.e., what happened conditional on the judge’s actual detention decision.

There are no perfect solutions to the general problem of label bias. It is discussed how in certain applications, one can mitigate these tricky statistical issues.

<span style="color:#005aa7; font-weight: bold;">1b) Feature bias</span> Situations occur in which features are not equally predictive across (sub)groups. However, subgroup validity is not always desirable since the relationship between predictors and labels may plausibly differ across group even when predictors and labels are accurately measured. One may be able to gather better data with greater investment of time and money. Focussing on a relatively short list of key features provides most of the predictive power, reducing costs.

<span style="color:#005aa7; font-weight: bold;">2\. Sample bias</span> One should train algorithms on datasets that are representative of the populations on which they are ultimately applied. As with measurement error, there is no complete solution to the problem of sample bias. In many settings, it may be prohibitively difficult to obtain representative data. In particular, even an imperfect algorithm may in some circumstances be better than leaving decisions to similarly imperfect humans who have their own biases.

<span style="color:#005aa7; font-weight: bold;">3\. Model form</span> When the feature space is low-dimensional and the training data are abundant, the precise statistical strategy chosen has little effect on the resulting estimates. Though this is an admittedly best-case scenario, it is not far from reality in some common risk assessment applications. In the risk assessment community, there is a growing push to design statistical models that are simple, transparent, and explainable to domain experts. Simpler models may better transfer from one population to another by capturing general relationships rather than idiosyncratic patterns, partially alleviating concerns about sample bias in the training data.

<span style="color:#005aa7; font-weight: bold;">4\. Externalities and equilibrium effects</span> Understanding fairness in more complex environments is a challenge. Some decisions are better thought of as group rather than individual choices. In university admissions, a diverse student body may benefit the entire institution, creating interdependencies between applicants. Deploying an algorithm can also change the behavior of more distant actors in a complex system. For example, a pretrial risk assessment tool could change the upstream actions of officers and prosecutors who compensate for the expected outcomes of their decisions. While it is easy to enumerate such potential complications, it is admittedly difficult to quantify their effects or to translate such observations to actionable insights.
