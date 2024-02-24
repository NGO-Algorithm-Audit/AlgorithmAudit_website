---
title: Bias detection tool
subtitle: >
  Quantitative-qualitative bias scan: To identify potentially unfair treated
  groups of similar users in AI systems. Working in tandem with the qualitative
  doctrine of law and ethics to assess fair AI.
image: /images/svg-illustrations/illustration_cases.svg
text_field1:
  title: Bias detection tool – What is it?
  icon: fas fa-search
  content: >
    This bias detection tool identifies potentially unfairly treated groups of
    similar users by a binary algorithmic classifier. The tool identifies
    clusters of users that face a higher misclassification rate compared to the
    rest of the data set. Clustering is an unsupervised ML method, so no data is
    needed is required on protected attributes of users. The metric by which
    bias is defined can be manually chosen in advance: False Negative Rate
    (FNR), False Positive Rate (FPR), or Accuracy (Acc).


    The tool returns a report which presents the cluster with the highest bias
    and describes this cluster by the features that characterizes it. This is
    quantitatively expressed by the (statistically significant) differences in
    feature means between the identified cluster and the rest of the data. The
    report also visualizes the outcomes.


    Try the tool below ⬇️
text_field2:
  title: Finalist Stanford's AI Audit Challenge 2023
  icon: fas fa-medal
  content: "Under the name Joint Fairness Assessment Method (JFAM) our bias scan tool has been selected as a finalist in\_[Stanford's AI Audit Competition 2023](https://hai.stanford.edu/ai-audit-challenge-2023-finalists).\n\n![Stanford University Human-Centered Artificial Intelligence](/images/supported_by/HAI.png)\n"
text_field3:
  title: Hierarchical Bias-Aware Clustering (HBAC) algorithm
  icon: fas fa-code-branch
  content: "The bias detection tool makes use of k-means or k-modes Hierarchical Bias-Aware Clustering (HBAC), as described by Misztal-Radecka and Indurkya in <i>Information Processing and Management</i>\_(2021)\_[\\[link\\]](https://www.sciencedirect.com/science/article/abs/pii/S0306457321000285). An implementation of the HBAC algorithm can be found on\_[Github.](https://github.com/NGO-Algorithm-Audit/AI_Audit_Challenge)\n\n[Download](https://github.com/NGO-Algorithm-Audit/Bias_scan/blob/master/classifiers/BERT_disinformation_classifier/test_pred_BERT.csv)\_an example data set to use the bias scan tool.\n"
text_field4:
  title: Input data
  icon: fas fa-database
  content: "What input does the bias scan tool need?\nA .csv file of max. 1GB with feature columns, predicted labels by the classifier and ground truth labels. Only the name of 'pred\\_label' and 'truth\\_label' are of importance, not the naming or order of the feature columns. All column values should be numeric and unscaled.\n\n\\- Features:\_unscaled numeric values, e.g.,\_feat\\_1, feat\\_2, ..., feat\\_n;\n\n\\- Predicted label:\_0 or 1;\n\n\\- Truth label:\_0 or 1;\n\n\\- Bias metric:\_False Positive Rate (FPR), False Negative Rate (FNR) or Accuracy.\n\n<div>\n        <p><u>Data snippet</u>:</p>\n        <style type=\"text/css\">\n          .tg  {border-collapse:collapse;border-spacing:0;}\n          .tg td{border-color:grey;border-style:solid;border-width:1px;font-size:14px;\n            overflow:hidden;padding:10px 5px;word-break:normal;}\n          .tg th{border-color:#grey;border-style:solid;border-width:1px;font-size:14px;\n            font-weight:normal;overflow:hidden;padding:10px 5px;word-break:normal;}\n          .tg .tg-uox0{border-color:#grey;font-weight:bold;text-align:left;vertical-align:top}\n          .tg .tg-uoz0{border-color:#grey;text-align:left;vertical-align:top}\n          </style>\n          <table class=\"tg\">\n          <thead>\n            <tr>\n              <th class=\"tg-uox0\">feat_1</th>\n              <th class=\"tg-uox0\">feat_2</th>\n              <th class=\"tg-uox0\">...</th>\n              <th class=\"tg-uox0\">feat_n</th>\n              <th class=\"tg-uox0\">pred_label</th>\n              <th class=\"tg-uox0\">truth_label</th>\n            </tr>\n          </thead>\n          <tbody>\n            <tr>\n              <td class=\"tg-uoz0\">10</td>\n              <td class=\"tg-uoz0\">1</td>\n              <td class=\"tg-uoz0\">...</td>\n              <td class=\"tg-uoz0\">0.1</td>\n              <td class=\"tg-uoz0\">1</td>\n              <td class=\"tg-uoz0\">1</td>\n            </tr>\n            <tr>\n              <td class=\"tg-uoz0\">20</td>\n              <td class=\"tg-uoz0\">2</td>\n              <td class=\"tg-uoz0\">...</td>\n              <td class=\"tg-uoz0\">0.2</td>\n              <td class=\"tg-uoz0\">1</td>\n              <td class=\"tg-uoz0\">0</td>\n            </tr>\n            <tr>\n              <td class=\"tg-uoz0\">30</td>\n              <td class=\"tg-uoz0\">3</td>\n              <td class=\"tg-uoz0\">...</td>\n              <td class=\"tg-uoz0\">0.3</td>\n              <td class=\"tg-uoz0\">0</td>\n              <td class=\"tg-uoz0\">0</td>\n            </tr>\n          </tbody>\n          </table>\n          <br>\n          <p><u>Overview of supported bias metrics</u>:</p>\n          <style type=\"text/css\">\n            .tg  {border-collapse:collapse;border-spacing:0;}\n            .tg td{border-color:black;border-style:solid;border-width:1px;font-size:14px;\n              overflow:hidden;padding:10px 5px;word-break:normal;}\n            .tg th{border-color:black;border-style:solid;border-width:1px;font-size:14px;\n              font-weight:normal;overflow:hidden;padding:10px 5px;word-break:normal;}\n            .tg .tg-1wig{font-weight:bold;text-align:left;vertical-align:top}\n            .tg .tg-0lax{text-align:left;vertical-align:top}\n          </style>\n          <table class=\"tg\">\n            <thead>\n              <tr>\n                <th class=\"tg-1wig\">Metric</th>\n                <th class=\"tg-1wig\">Description</th>\n              </tr>\n            </thead>\n            <tbody>\n              <tr>\n                <td class=\"tg-0lax\">False Positive <br>Rate (FPR)</td>\n                <td class=\"tg-0lax\"><span style=\"font-weight:400;font-style:normal;text-decoration:none\">The bias scan tool finds the cluster for which most true labels are predicted to</span><br><span style=\"font-weight:400;font-style:normal;text-decoration:none\">be false, proportional to all true labels (False Positive Rate).</span></td>\n              </tr>\n              <tr>\n                <td class=\"tg-0lax\"><span style=\"font-weight:400;font-style:normal;text-decoration:none\">False Negative</span><br><span style=\"font-weight:400;font-style:normal;text-decoration:none\">Rate (FN</span>R)</td>\n                <td class=\"tg-0lax\"><span style=\"font-weight:400;font-style:normal;text-decoration:none\">The bias scan tool finds the cluster for which most false labels are predicted to</span><br><span style=\"font-weight:400;font-style:normal;text-decoration:none\">be true, proportional to all false labels (False Negative Rate).</span></td>\n              </tr>\n              <tr>\n                <td class=\"tg-0lax\">Accuracy</td>\n                <td class=\"tg-0lax\"><span style=\"font-weight:400;font-style:normal;text-decoration:none\">Sum of True Positives (TPs) and True Negatives (TNs), </span><br><span style=\"font-weight:400;font-style:normal;text-decoration:none\">proportional to all predictions.</span></td>\n              </tr>\n            </tbody>\n          </table>\n          <div style=\"margin-top:20px;\">\n            <a style=\"color:#005aa7;\" href=\"https://en.wikipedia.org/wiki/Confusion_matrix#Table_of_confusion\" target=\"_blank\">Learn more</a> about bias metrics.\n          </div>\n      </div>\n"
web_app:
  title: Web app
  icon: fas fa-cloud
  content: |
    Web app container
reports_preview:
  title: Example reports
  icon: fas fa-file
  button_text: ''
  button_link: ''
  feature_item:
    - name: FPR clustering results
      image: /images/BDT/Example_report.png
      link: >-
        https://static-files-pdf.s3.amazonaws.com/bias_scan_FPR_test_pred_BERT.pdf
      content: "An example report for the\_[BERT-based disinformation detection (FPR) case study](https://static-files-pdf.s3.amazonaws.com/bias_scan_FPR_test_pred_BERT.pdf)\n"
    - name: FNR clustering results
      image: /images/BDT/Example_report.png
      link: >-
        https://static-files-pdf.s3.amazonaws.com/bias_scan_FPR_test_pred_BERT.pdf
      content: "An example report for the\_[BERT-based disinformation detection (FNR) case study](https://static-files-pdf.s3.amazonaws.com/bias_scan_FNR_test_pred_BERT.pdf)\n"
---

{{< text_field1 >}}

{{< web_app >}}

{{< text_field2 >}}

{{< text_field3 >}}

{{< text_field4 >}}

{{< reports_preview >}}

{{< bias_scan_faq title="FAQ" >}}
