---
title: Dien een case in
subtitle: >
  Algorithm Audit verricht zelfstandig audits en werkt op verzoek. Vul
  onderstaand formulier in om informatie te delen over een algoritme dat u
  geaudit wilt hebben.
image: /images/svg-illustrations/case_repository.svg
background_color: '#ffffff'
team:
  title: Team Algoprudentie
  icon: fas fa-user-friends
  button_text: Andere teams
  id: team
  button_link: /nl/about/teams/
  team_members:
    - image: /images/people/VDjwalapersad.png
      name: Vardâyani Djwalapersad
      bio: |
        Projectmanager algoprudentie
    - image: /images/people/JParie.jpg
      name: Jurriaan Parie
      bio: |
        Directeur en bestuurder
    - image: /images/people/AVoogt.jpeg
      name: Ariën Voogt
      bio: |
        Bestuurder
    - image: /images/people/SMohammad.jpeg
      name: Samaa Mohammad-Ulenberg
      bio: |
        Bestuurder
form:
  title: Dien een case in
  button_text: Verstuur
  backend_link: 'https://formspree.io/f/xzbnrlan'
  questions:
    - label: Naam algoritme
      id: naam
      type: text
    - label: Korte beschrijving van algoritme (max. 100 woorden)
      id: beschrijving
      type: textarea
    - label: >-
        Technische aspecten – Beschrijving van o.a. verzamelde data, gehanteerde
        statistische methode en gebruikte evaluatie criteria
      id: technische-dimensie
      type: textarea
    - label: >-
        Juridisch kader – Relevante wet- en regelgeving, beschrijving van open
        juridische normen, bijvoorbeeld in de Algemene Verordening
        Gegevensbescherming (AVG) of de Algemene Wet Gelijke Behandeling (AWGB)
      id: juridische-dimensie
      type: textarea
    - label: >-
        Ethische aspecten – Beschrijving van geïdentificeerd ethische kwesties
        gegeven de technische en juridische achtergrond
      id: ethische-dimensie
      type: textarea
    - label: Contactgegevens
      id: contactgegevens
      type: email
      placeholder: Emailadres
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
        /nl/algoprudence/cases/risk-profiling-for-social-welfare-reexamination-aa202302/
      content: >
        De commissie oordeelt dat algoritmische risicoprofilering onder strikte
        voorwaarden kan worden ingezet voor het selecteren van burgers met een
        bijstandsuitkering voor heronderzoek.
    - name: Vooringenomenheid voorkomen
      image: /images/algoprudence/AA202401/Cover.png
      link: /nl/algoprudence/
      content: >
        Kwantitatief en kwalitatieve audit naar bias in algoritme-gedreven
        besluitvormingsproces, o.a., testen van risicodistributie middels
        Z-toetsen en analyse van organisatorische waarborgen
---

{{< form >}}

{{< container_open icon="fas fa-forward" title="Wat gebeurt er nu ik een case heb ingestuurd?" id="next-steps" >}}

Inzending worden behandeld door Team Algoprudentie. Het team beoordeelt of de casus past bij het werk van Algorithm Audit en of er voldoende capaciteit is om de casus te behandelen. U ontvangt binnen twee weken reactie.

{{< container_close >}}

{{< team >}}

{{< reports_preview >}}
