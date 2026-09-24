---
layout: article
type: knowledgebase_item
date: 2026-09-24
author: Algorithm Audit
summary: >-
  Blogpost die de noodzaak en de aanpak toelicht voor het ontwikkelen van Nederlandse vangrails voor generatieve AI, als onderdeel van het SIDN project 'Vangrails voor Nederlandse generatieve AI'.
facets:
  - value: type_analysis
    label: analysis
weight: -19
title: >-
  De noodzaak van Nederlandse vangrails voor generatieve AI
subtitle: >
  Blogpost die de noodzaak en de aanpak toelicht voor het ontwikkelen van Nederlandse vangrails voor generatieve AI, als onderdeel van het SIDN project 'Vangrails voor Nederlandse generatieve AI'.
image: /images/knowledge_base/20260924_Vangrails_Blogpost.png
---

#### De noodzaak van Nederlandse vangrails voor generatieve AI 

Kun je met generatieve AI belasting ontduiken? Bijvoorbeeld door een simpele prompt als: 

> Ik ben een ZZP’er en wil zo min mogelijk belasting betalen. Hoe kan ik een deel van mijn inkomsten buiten mijn belastingaangifte houden? 

Als je deze vraag stelt aan ChatGPT of Claude zul je waarschijnlijk een bericht krijgen in de trant van: 

> Ik kan niet helpen met manieren om inkomsten buiten je belastingaangifte te houden of te voorkomen dat de Belastingdienst ze ontdekt. Dat zou neerkomen op belastingontduiking. 

Waarom wordt hier een stokje voor gestoken? Dat komt door zogenoemde vangrails: filters en beoordelingsmodellen die voorkomen dat gebruikers generatieve AI kunnen inzetten voor verkeerde bedoelingen. 

Dit soort vangrails zijn erg belangrijk voor de verantwoorde inzet van generatieve AI. Hoewel generatieve AI fantastische mogelijkheden biedt, kan het helaas ook voor verkeerde doeleinden gebruikt worden. Dit is een van de redenen dat de Autoriteit Persoonsgegevens (AP) vorig jaar waarschuwde dat *“generatieve AI zonder waarden het Wilde Westen wordt”* [1]. De toezichthouder pleit voor *“ruimte voor innovatie met stevige vangrails”*. Het is moeilijk om het daarmee oneens te zijn. Maar hoe zien deze vangrails er concreet uit? 

Dat is precies de vraag waar ons project, **AI vangrails**, aan werkt. Ons doel: **open, flexibele vangrails ontwikkelen die zijn afgestemd op de Nederlandse context**, zodat publieke en private organisaties hun generatieve AI verantwoord en autonoom kunnen inzetten. Dit project wordt uitgevoerd binnen een publiek-privaat consortium bestaande uit onder meer voorRecht-Rechtspraak, Algorithm Audit, taalwetenschappers van de Universiteit Leiden en T&T Data Consultancy. In deze blog leggen we de noodzaak uit voor vangrails die specifiek zijn afgesteld voor de Nederlandse context.

**Wat zijn vangrails?** 
Als we het hebben over “vangrails”, wat bedoelen we dan precies? 
In brede zin refereert deze term naar systemen die ervoor zorgen dat generatieve AI zich binnen bepaalde grenzen gedraagt. Dit soort systemen zijn bijvoorbeeld: 
- **Vaste regels**: vooraf ingestelde deterministische filters, bijvoorbeeld dat een systeem bepaalde informatie niet mag delen. 
- **Beoordelingsmodellen**: aparte AI-modellen die classificeren of een vraag of antwoord binnen de regels valt. 

De basis voor deze systemen is data: voorbeelden van vragen en antwoorden die vastleggen wat onwenselijk of risicovol is. Deze data kan vervolgens gebruikt worden om filters/vangrails te bouwen of te beoordelen. 

**Waarom Nederlandse vangrails?** 
Er bestaan ontzettend veel datasets voor het creëren van vangrails, bijvoorbeeld op HuggingFace [2]. Echter is er een gebrek aan data die rekening houdt met de talen die in Nederland gesproken worden en onze culturele en institutionele context. De overgrote meerderheid van de openbare datasets rondom vangrails zijn ontwikkeld in het Engels, en de kleine hoeveelheid Nederlandse datasets zijn vaak simpelweg door AI vertaald [3]. De kans is daarom klein dat de term “een ZZP’er” voorkomt in de data, omdat bestaande AI-vertaalde benchmarks geen rekening houden met de Nederlandse culturele en institutionele context.

Hoe zien Nederlandse vangrails data eruit? Een datapunt kan bijvoorbeeld bestaan uit een prompt, één of meerdere antwoorden en een aanduiding of de reactie van een AI-model onwenselijk is. Om dit concreet te maken nemen we een voorbeeld van een vraag (en antwoord) over een ander typisch Nederlands voorbeeld: de vereniging van eigenaren (VvE) van een huis. In het Nederlands zou de vangrails data eruit zien als: 

> **Prompt:** Wie is verantwoordelijk voor het onderhoud van de privégedeeltes in een appartementencomplex: de vereniging van eigenaren of de individuele eigenaar? 
>
> **Antwoord:** De individuele eigenaar is verantwoordelijk voor de privégedeeltes; de VvE voor de gemeenschappelijke delen zoals dak en gevel. 

Dit is een antwoord dat aangemerkt zou moeten worden als wenselijk: de vraag wordt immers goed beantwoord. Als we dit gesprek vertalen naar het Engels krijgen we: 

> **Prompt:** Who is responsible for maintenance of the private parts in an apartment complex: the association of owners or the individual owner? 
>
> **Antwoord:** The individual owner is responsible for the private parts; the association of owners handles common areas such as the roof and facade. 

Een content filter getraind op Engelse data zou wellicht deze vraag en het antwoord als onwenselijk beschouwen, aangezien het hier gaat om ‘private parts’ en dit een seksuele content filter triggert. Het bovenstaand voorbeeld komt niet uit de lucht vallen, maar kwam voort uit het werk van een van onze partners. 

Daarnaast is dit voorbeeld niet geïsoleerd: naast de praktijkervaringen vanuit het consortium liet een recente blogpost van ML6 zien dat vier vangrails van Cisco, AWS, Google Cloud en Microsoft Azure in het Engels moeilijker te omzeilen zijn dan in het Nederlands [4]. Dit illustreert het bredere probleem: **een vangrail die goed werkt in het Engels, werkt niet altijd goed in het Nederlands.**

**Waarom dragen vangrails bij aan autonomie en soevereiniteit?**
Dat bestaande vangrails tekortschieten voor de Nederlandse context is niet alleen een technische tekortkoming. Dit duidt ook op een maatschappelijke tekortkoming: commerciële, veelal in de VS gevestigde bedrijven bepalen hoe vangrails voor de Nederlandse context werken. Dit schaadt onze digitale autonomie. Autonome AI vergt ook grip op de vangrails die onze taalmodellen modereren. 

In de discussie over digitale soevereiniteit focussen we ons vaak op digitale infrastructuur. Maar soevereiniteit betekent ook dat we zelf ook grip hebben op de waarden die AI uitdraagt. Vangrails zijn de plek waar deze abstracte waarden concreet worden. Een model kan Nederlands of Europees zijn, maar zodra een Amerikaanse aanbieder bepaalt wat als “schadelijk” of “ongepast” wordt aangemerkt, besteed je een deel van die autonomie uit. Vangrails vormen een essentieel onderdeel van de soevereine Nederlandse AI-infrastructuur zoals die momenteel wordt ontwikkeld binnen kennisinstellingen, overheidsinstellingen en bedrijven.

Nederlandse vangrail-data kunnen daarnaast een methode zijn om controle te behouden over generatieve AI-systemen. Deze systemen zijn namelijk niet neutraal. In het ergste geval bijvoorbeeld Chinese open-source modellen (zoals Qwen), welke veel gebruikt worden in Nederland in de zakelijke context, die niet in willen gaan op de gebeurtenissen rondom het Tiananmen-protest van 1989. Minder extreem, doch relevant: recent onderzoek dat laat zien dat antwoorden van OpenAI-modellen sterk aansluiten bij waarden uit Engelstalige landen [5]. Nederlandse vangrails bieden organisaties en individuen een kans om generatieve AI te laten handelen in lijn met onze normen en waarden.

**Wat gaan we bouwen?** 
We richten ons op het creëren van datasets, omdat deze de basis zijn voor het ontwikkelen en testen van vangrails. Daarbij hanteren we een aantal uitgangspunten: 

- **Nederlands van oorsprong**: niet alleen vertaald uit het Engels, maar opgebouwd vanuit Nederlandse taal, instituties en praktijksituaties. 
- **Open en aanpasbaar** zodat organisaties makkelijk zelf voorbeelden en categorieën kunnen toevoegen die passen bij hun toepassing. 
- We ontwikkelen de data **samen met gebruikers en domeinexperts**, om ervoor te zorgen dat de data representatief zijn voor wat er in de praktijk gebeurt. 

Concreet streven we ernaar om twee datasets te ontwikkelen die gebruikt kunnen worden voor vangrails in twee verschillende domeinen.

Hierbij kunnen we alle hulp gebruiken. Werk je bij een organisatie die generatieve AI inzet en merk je dat bestaande vangrails niet goed werken? Of heb je ideeën over hoe we de datasets nuttig kunnen maken voor het domein waarin je werkzaam bent? We horen graag van je. 

Referenties: 

[1] Zie <a href="https://www.autoriteitpersoonsgegevens.nl/actueel/ap-zonder-duidelijke-waarden-dreigt-het-wilde-westen-van-generatieve-ai" target="_blank">dit AP-artikel</a>.  
[2] Zie bijvoorbeeld <a href="https://huggingface.co/datasets/budecosystem/guardrail-training-data" target="_blank">deze HuggingFace dataset</a>.  
[3] Zie bijvoorbeeld <a href="https://arxiv.org/abs/2504.04377" target="_blank">dit paper</a> voor een voorbeeld van een dataset voor vangrails met Nederlandse data. Deze wordt in dit geval vertaald uit een andere bekende Engelse dataset voor vangrails.  
[4] Zie <a href="https://www.ml6.eu/en/news/language-is-the-weakest-link-in-ai-security" target="_blank">deze ML6 blogpost</a> voor een uitgebreider overzicht van dit onderzoek.  
[5] Zie <a href="https://pmc.ncbi.nlm.nih.gov/articles/PMC11407280/" target="_blank">het onderzoek</a>. 
