---
title: Dien een case in
subtitle: >
  Algorithm Audit verricht zelfstandig audits en werkt op verzoek. Vul
  onderstaand formulier in om informatie te delen over een algoritme dat u
  geaudit wilt hebben. Of dien een zorgvuldig gedocumenteerd normatief oordeel
  in dat u in onze case repository gepubliceerd wilt hebben.
image: /images/svg-illustrations/case_repository.svg
dynamic_form_engine:
  - title: Informatie over de case
    id: submit-a-case
    icon: fas fa-align-justify
    section:
      - questions:
          - title: |
              Naam algoritme
            identifier: name
            required: true
            type: text
          - title: |
              Korte beschrijving van algoritme (max. 200 woorden)
            identifier: description
            required: true
            type: textarea
          - title: >
              Technische aspecten – Beschrijving van o.a. verzamelde data, gehanteerde
              statistische methode en gebruikte evaluatie criteria
            identifier: technical
            type: textarea
          - title: >
              Juridisch kader – Relevante wet- en regelgeving, beschrijving van open
              juridische normen, bijvoorbeeld in de Algemene Verordening
              Gegevensbescherming (AVG) of de Algemene Wet Gelijke Behandeling (AWGB)
            identifier: legal-framework
            type: textarea
          - title: >
              Ethische aspecten – Beschrijving van geïdentificeerd ethische kwesties
              gegeven de technische en juridische achtergrond
            identifier: ethical-issues
            required: true
            type: textarea
          - title: |
              Contactgegevens
            identifier: reaction
            type: email
            placeholder: Emailadres
          - title: >
              Voorwaarden <br> <span style="font-size:12px; color=#777;">Verstrekte
              gegevens worden alleen verwerkt voor het hierboven beschreven doel, de
              gegevens worden niet langer opgeslagen dan strikt noodzakelijk en worden
              opgeslagen in een beschermde omgeving</span>
            identifier: terms-conditions
            options:
              - title: Agree
                value: agree
                id: agree
            required: true
            type: checkbox
    complete_form_options:
      type: submit
      button_text: Verstuur
      backend_link: "https://formspree.io/f/xzbnrlan"
  - title: Informatie over het oordeel
    content: ""
    id: case-for-repository
    icon: fas fa-align-justify
    section:
      - questions:
          - title: Naam organisatie
            identifier: name
            type: text
          - title: >-
              Geveld normatief oordeel – Geef een beschrijving van het de taak van het
              algoritme, de socio-technologische context, statistische methodologie,
              het relevante juridische kader en welke keuze is genomen inzake de
              geïdentificeerde ethische kwesties
            identifier: description
            type: textarea
          - title: Contactgegevens
            identifier: contact-details
            type: email
            placeholder: Emailadres
          - title: Relevante documenten
            identifier: documents
            file_upload_text: Kies bestand
            type: file
          - title: >
              Voorwaarden <br> <span style="font-size:12px; color=#777;">Verstrekte
              gegevens worden alleen verwerkt voor het hierboven beschreven doel, de
              gegevens worden niet langer opgeslagen dan strikt noodzakelijk en worden
              opgeslagen in een beschermde omgeving</span>
            identifier: terms-conditions
            required: true
            type: checkbox
            options:
              - title: Agree
                value: agree
                id: agree
    complete_form_options:
      type: submit
      button_text: Verstuur
      backend_link: "https://formspree.io/f/xleqlakw"
reports_preview:
  title: Recente audits
  icon: fas fa-file
  button_text: Meer cases
  button_link: /nl/algoprudence/
  id: recent-audits
  feature_item:
    - name: Risicoprofilering heronderzoek bijstandsuitkering
      image: /images/algoprudence/AA202302/AA202302A_front_icon_NL.png
      link: >-
        /nl/algoprudence/cases/aa202302_risk-profiling-for-social-welfare-reexamination/
      content: >
        De commissie oordeelt dat algoritmische risicoprofilering onder strikte
        voorwaarden kan worden ingezet voor het selecteren van burgers met een
        bijstandsuitkering voor heronderzoek.
    - name: Technische audit indirecte discriminatie
      image: /images/algoprudence/AA202401/Cover.png
      link: /nl/algoprudence/cases/aa202401_bias-prevented/
      content: >
        Kwantitatief en kwalitatieve audit naar bias in algoritme-gedreven
        besluitvormingsproces, o.a., testen van risicodistributie middels
        Z-toetsen en analyse van organisatorische waarborgen
quick_navigation:
  title: Inhoudsopgave
  links:
    - title: Dien een case in
      url: "#case-for-review_tab_btn"
    - title: Vervolgstappen
      url: "#next-steps"
    - title: Recente cases
      url: "#case-repository"
---

{{< tab_header width="6" tab1_id="case-for-review" default_tab="case-for-review" tab1_title="Dien een case in voor beoordeling" tab2_id="case-repository" tab2_title="Voeg oordeel toe aan algoprudentie uitspraken" >}}

{{< tab_content_open icon="fa-question" title="Dien een case in voor beoordeling door een normatieve adviescommissie" id="case-for-review" >}}

Cases kunnen anoniem worden behandeld. Kom meer te weten over onze [werkwijze](/nl/algoprudence/how-we-work/). Informatie over de stappen die volgen na het indienen van een case kunnen [beneden](#next-steps) worden gevonden.

{{< dynamic_form_engine index="0" >}}

{{< tab_content_close >}}

{{< tab_content_open icon="fa-layer-group" title="Voeg een oordeel toe aan het overzicht van algoprudentie uitspraken" id="case-repository" >}}

Wil uw organisatie bijdragen aan het overzicht van algoprudentie uitspraken? Vul onderstaand formulier in. U wordt aangemoedigd oordelen die eerder in het [overzicht](/nl/algoprudence/) zijn opgenomen zorgvuldig door te nemen. Informatie over de stappen die volgen na het indienen van een case kunnen [beneden](http://localhost:1313/nl/algoprudence/submit-a-case/#next-steps) worden gevonden.

{{< dynamic_form_engine index="1" >}}

{{< tab_content_close >}}

{{< container_open icon="fas fa-forward" title="Wat gebeurt er nu ik een case heb ingestuurd?" id="next-steps" >}}

Inzending worden behandeld door Team Algoprudentie. Het team beoordeelt of de casus past bij het werk van Algorithm Audit en of er voldoende capaciteit is om de casus te behandelen. U ontvangt binnen twee weken reactie.

{{< button button_text="Onze auditmethodologie" button_link="/algoprudence/how-we-work/" >}}

{{< container_close >}}

{{< team >}}

{{< reports_preview id="case-repository">}}
