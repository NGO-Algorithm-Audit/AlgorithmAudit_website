---
title: Synethetische data generatie
subtitle: >
  Synethetische data generatie (SDG) is een privacy-behoudend methode om
  gevoelige datasets te delen met derden. SDG kan worden gebruikt om de
  representativiteit van datasets te testen en om AI-systemen te trainen. Bij
  Algorithm Audit bouwen we praktische publieke kennis op hoe SDG ingezet kan
  worden voor AI bias testing.
image: /images/svg-illustrations/knowledge_base.svg
author: Parie
type: regular
team:
  title: Synthetische data generatie cohort
  icon: fas fa-user-friends
  button_text: Andere teams
  id: team
  button_link: /nl/about/teams/
  team_members:
    - image: /images/people/EBogaards.jpeg
      name: Ellen Bogaards
      bio: |
        MSc Artifical Intelligence, Universiteit Utrecht
    - image: /images/people/EMenvouta.jpeg
      name: ' Emmanuel Menvouta PhD'
      bio: |
        Machine learning engineer, Dataroots
    - image: /images/people/GAcheampong.jpeg
      name: Godwin Acheampong
      bio: |
        Data scientist, Budget Thuis
    - image: /images/people/JPersson.jpeg
      name: Joel Persson PhD
      bio: |
        R\&D, Spotify
    - image: /images/people/SBabac.jpeg
      name: Sonja Babac
      bio: >
        PhD-kandidaat, Technische Universiteit Eindhoven – Philips Medische
        Technologie
---

{{< container_open title="Synthetische data generatie – Wat is het?" icon="fas fa-database" id="info" >}}

Rommel erin, rommel eruit: bij het auditeren van algoritme-gedreven besluitvormingsprocessen is een van de meest urgente vragen de representativiteit van de data. Privacy is echter vaak een horde om datasets te delen met derden om de representativiteit van de data te toetsen. Zonder toegang tot de brondata kunnen belanghebbenden, zoals de personen waarvan de data is opgeslagen en onafhankelijke experts, echter de data niet toetsen op mogelijke misstanden. Data waar algoritme-gedreven besluitvormingsprocessen mee werken en AI-systemen op worden getraind worden daardoor slechts door een selecte groep mensen gekeurd op hun representativiteit. Als dit controleproces niet zorgvuldig wordt uitgeoefend heeft dit grote consequenties voor de besluitvormingsprocessen die gebruik maken van deze data. Dit schaadt publiek vertrouwen in technologie en in de organisatie die deze digitale methoden inzetten.

Synthetische data generatie (SDG) – een artificiële dataset die de statistische kenmerken van de originele dataset weerspiegelt – is een mogelijke oplossing om data wel met derden te kunnen delen. SDG heeft de potentie om de groep betrokken bij het beoordelen van de representativiteit van de data uit te breiden. Het wordt beschouwd als een veilige methode om privacy-gevoelige data te kunnen delen met derden, omdat de kunstmatig gecreëerde versie geen sporen bevat van de persoonlijke data op basis waarvan het gegenereerd is.

{{< container_close >}}

{{< container_open title="Hoe kan SDG gebruikt worden voor het testen van bias in AI systemen?" icon="fas fa-project-diagram" id="bias-testing" >}}

SDG stelt derde partijen in staat om datasets op een privacy-vriendelijke manier te auditeren. Er is momenteel echter nog onvoldoende kennis hoe en wanneer SDG een geschikte methode is voor bias testing. Allereerst is het niet altijd nodig om geavanceerde SDG-methoden in te zetten. Vaak is het publiceren van eenvoudige univariate of bivariate aggregatie statistiek over de data in kwestie afdoende. Ten tweede, SDG kan op vele manieren worden toegepast. Denk aan parametrische, non-parametrische, copula-gebaseerde schatting- en inferentiemethoden. De meest geschikte SDG-methode hangt af van de structuur van de dataset. De keuze voor de meest geschikte SDG-methode is daarom context-specifiek. Bij Algorithm Audit werken we aan deze open vragen, en bouwen we publieke kennis op hoe vormen van privacy-behoudenden methoden voor datadeling (SDG of alternatieven) concreet kunnen worden ingezet voor AI bias testing. Door onze technische en kwalitatieve expertise rond SDG samen te brengen draagt Algorithm Audit bij aan dit collectieve leerproces.

Kom meer te weten over Algorithm Audit's kwantitatieve en kwalitatieve werkmethoden, ook wel naar gerefereerd als de [joint fairness assessment method](https://github.com/NGO-Algorithm-Audit/Bias_scan).

{{< container_close >}}

{{< container_open title="Is SDG al eerder gebruikt?" icon="fas fa-history" id="past-usage" >}}

Ondanks dat er vele commerciële APIs zijn die automatisch synthetische data genereren, is SDG nog niet op grote schaal in gebruik genomen door het (kleine) risico op mogelijke privacyschendingen. Met name bij publieke organisaties, waar strenge richtlijnen zijn voor persoonsgegevens, wordt SDG nog maar mondjesmaats toegepast. De afgelopen jaren zijn er echter nieuwe ontwikkelingen geweest die daar verandering in kunnen brengen.

#### Eerdere toepassing

Onderzoeksjournalisten van [Lighthouse Reports](https://www.lighthousereports.com/suspicion-machines-methodology/) hebben een per abuis gedeelde dataset publiekelijk kunnen delen met behulp van SDG. Het delen van deze data heeft het mogelijk gemaakt dat bias in een omvangrijke dataset van de gemeente Rotterdam  aan het licht is gekomen. De niet-representatieve dataset is in het verleden gebruikt om een (inmiddels non-actief) machine learning-gedreven risicotaxatie-algoritme op te trainen.

#### AI Verordening

Artikel 10 van de AI Verordening bevat specifieke bepalingen over het gebruik van synthetische data voor bias detectie en -mitigatie doeleinden. Er geldt bijvoorbeeld een inspanningsverplichting voor aanbieders van AI-systemen om biases in data te rectificeren met behulp van synthetische of geanonimiseerde data.

{{< container_close >}}

{{< team >}}
