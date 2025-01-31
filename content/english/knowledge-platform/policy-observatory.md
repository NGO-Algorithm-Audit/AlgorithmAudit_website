---
title: AI Policy Observatory
subtitle: >
  There are various policy initiatives for responsible deployment of algorithms
  and AI. On this page information is collected about these initiatives,
  including reference material that Algorithm Audit has developed.
image: /images/svg-illustrations/knowledge_base.svg
reports_preview:
  title: White papers
  icon: fas fa-file
  button_text: Read our white papers
  button_link: >-
    /knowledge-platform/knowledge-base/white_paper_dsa_delegated_regulation_feedback/
  id: white-papers
  feature_item:
    - name: Feedback on DSA Delegated Regulation (conducting independent audits)
      image: /images/knowledge_base/white-paper-3.png
      link: >-
        /knowledge-platform/knowledge-base/white_paper_dsa_delegated_regulation_feedback/
      content: >
        Feedback to the European Commission on DSA Delegated Regulation –
        conducting independent audits
---

{{< tab_header width="2" default_tab="AIAct" tab1_id="AIAct" tab1_title="AI Act" tab2_id="GDPR" tab2_title="GDPR" tab3_id="administrative-law" tab3_title="Administrative law" tab4_id="FRIA" tab4_title="FRIA" tab5_id="DSA" tab5_title="DSA" >}}

{{< tab_content_open id="AIAct" icon="fa-newspaper" title="AI Act" >}}

The <a href="https://eur-lex.europa.eu/legal-content/EN/TXT/?qid=1623335154975&uri=CELEX%3A52021PC0206" target="_blank">AI Act</a> imposes broad new responsibilities to control risks from AI systems without at the same time laying down specific standards they are expected to meet. For instance:

* **Risk- and quality management systems (Art. 9 and 17) –** Requirements set out for risk management systems and quality management systems remain too generic. For example, it does not provide precise guidelines how to identify and mitigate ethical issues such as algorithmic discrimination;
* **Conformity assessment (Art. 43) –** The proposed route for internal control relies too much on the self-reflective capacities of producers to assess AI quality management, risk management and bias. Resulting in subjective best-practices;
* **Technical standards –** Technical standards alone, as requested the European Commission to standardization bodies CEN-CENELEC, are not enough to realize AI harmonization across the EU. Publicly available technical and normative best-practices for fair AI are urgently needed.

As a member of Dutch standardization body NEN, Algorithm Audit contributes to the European debate how fundamental rights should be co-regulated by product safety.

{{< button button_text="Learn more about our AI Act Implementation Tool" button_link="/technical-tools/implementation-tool/" >}}

{{< tab_content_close >}}

{{< tab_content_open icon="fa-newspaper" title="Digital Services Act (DSA)" id="DSA" >}}

The [Digital Services Act (DSA)](https://eur-lex.europa.eu/legal-content/EN/TXT/PDF/?uri=CELEX:52020PC0825) lacks provisions to disclose normative methodological choices that underlie the AI systems the DSA tries to regulate. For instance:

* **Risk definitions –** Article 9 of the <a href="https://ec.europa.eu/info/law/better-regulation/have-your-say/initiatives/13626-Digital-Services-Act-conducting-independent-audits_en" target="_blank">Delegated Regulation (DR)</a> for independent third party auditing (as mandated under DSA Art. 37) specifies that “audit risk analysis shall consider inherent risk, control risk and detection risk”. More specific guidance should be provided in Art. 2 of the DR how risks relating to subjective concepts, such as “…the nature, the activity and the use of the audited service”, can be assessed;
* **Audit templates –** Pursuant to Article 5(1)(a) of the DR, Very Large Open Platforms (VLOPs) and Very Large Online Search Engines (VLOSEs) shall transmit to third-party auditing organisations “benchmarks used \[…] to assert or monitor compliance \[…], as well as supporting documentation”. We argue that the normative considerations underlying the selection of these benchmarks should be asked out more decisively in this phase of the audit. Therefore, we asked the European Commission (EC) to add this dimension to Question 3(a) of Section D.1 Audit conclusion for obligation Subsection II. Audit procedures and their results;
* **Insufficient knowledge how to audit AI –** <a href="https://ec.europa.eu/info/law/better-regulation/have-your-say/initiatives/13626-Digital-Services-Act-conducting-independent-audits/feedback_en?p_id=32081201" target="_blank">Feedback</a> submitted to the European Commission (EC) on DSA Art. 37 DR reveals that:
  * Private auditors (like PwC and Deloitte) warn that the lack of guidance on criteria against which to audit poses a risk of subjective audits;
  * Tech companies (like Snap and Wikipedia) raise concerns about the industry’s lack of expertise to audit specific AI products, like company-tailored timeline recommender systems.

#### Read Algorithm Audit's feedback to the Europen Commission on DSA Art. 37 Delegated Regulation

{{< embed_pdf url="/pdf-files/policy-observatory/20230705_DSA_delegated_regulation.pdf" width_desktop_pdf="6" width_mobile_pdf="12" >}}

{{< button button_text="Read the white paper" button_link="/knowledge-platform/knowledge-base/white_paper_dsa_delegated_regulation_feedback/" >}}

{{< tab_content_close >}}

{{< tab_content_open icon="fa-newspaper" title="General Data Protection Regulation (GDPR)" id="GDPR" >}}

The GDPR has its strengths regarding participatory decision-making, but it has also weaknesses in regulating profiling algorithms and its focus on fully automated decision-making.

* <a href="https://gdpr-info.eu/art-35-gdpr/" target="\_blank"> Participatory Data Privacy Impact Assessment (DPIA) (art. 35 sub 9)</a> – This provision mandates that in cases where a Data Privacy Impact Assessment (DPIA) is obligatory, the opinions of data subjects regarding the planned data processing shall be seeked. This is a powerful legal mechanism to foster collaborative algorithm development. Nevertheless, the inclusion of data subjects in this manner is scarcely observed in practice;
* <a href="https://gdpr-info.eu/art-22-gdpr/" target="\_blank"> Automated decision-making (art. 22 sub 2)</a> – Ongoing legal uncertainty what exactly is 'automated decision-making' and 'meaningful human interaction' given the <a href="[https://](https://curia.europa.eu/juris/liste.jsf?num=C-634/21)" target="_blank">Schüfa court</a> ruling by the Court of Justice of the European Union (CJEU).

#### Article summarizing interaction GDPR and AI Act regarding data collection for debiasing

{{< embed_pdf url="/pdf-files/policy-observatory/2023_VanBekkum_Using sensitive data to prevent discrimination by AI.pdf" width_desktop_pdf="6" width_mobile_pdf="12" >}}

{{< tab_content_close >}}

{{< tab_content_open icon="fa-newspaper" title="Administrative law" id="administrative-law" >}}

Administrative law provides a normative framework for algorithmic-driven decision-making processes. In The Netherlands, for instance, through the codification of general principles of good administration (gpga). We argue that these principles are relevant to the algorithmic practice, but require contextualisation, which is often lacking. Take a closer look, for instance, to:

* **Duty to give reasons:** It must be sufficiently clear on what grounds and why an administrative body takes a decision. When an algorithm is used for decision support it should be explained how the output of the algorithm contributed to the decision-making process.
* **Duty of care:** The duty of care, among others stating that a situation must be created in which all interest can be weighed and in which a suitable ML method is used;
* **Fair play principle:** The principle of fair play, or proper treatment, which is partly codified as a prohibition of bias in Section 2:4 of the Dutch General Administrative Law Act, concerns impartial execution of tasks by an administrative body. We argue that ‘contextualising’ the gpga in the case of this principle should focus on new, digital manifestations of bias. Thereafter, a subsequent best-efforts obligation could be applied to prevent bias and guarantee fairness in algorithmic applications.

#### Read the article How ‘algoprudence’ can contribute to responsible use of ML-algorithms and its interplay with the Dutch General Administrative Law Act

{{< embed_pdf url="/pdf-files/policy-observatory/20240516_White_paper_Algoprudence.pdf" width_desktop_pdf="6" width_mobile_pdf="12" >}}

{{< tab_content_close >}}

{{< tab_content_open icon="fa-newspaper" title="FRIA" id="FRIA" >}}

Over the years, many Fundamental Rights Impact Assessments (FRIAs) have been developed. FRIAs typically assess responsible deployment of algorithms and AI by asking questions that are meant to stimulate self-reflection. It does not provide answers or concrete guidelines how to realise ethical algorithms.

#### Read Algorithm Audit's comparative analysis of 10 FRIAs

{{< embed_pdf url="/pdf-files/policy-observatory/20240918_Comparative review 10 FRIAs Algorithm Audit.pdf" width_desktop_pdf="6" width_mobile_pdf="12" >}}

{{< tab_content_close >}}

{{< tab_content_close >}}