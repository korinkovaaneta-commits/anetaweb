# Audit odkazů uvnitř článků — 29. 9. 2026

## Souhrn

- Prošlo všech **12 článků** v sekci Čtení o práci; audit se týká obsahu článků, nikoli navigace/patičky.
- Původně **27 skutečných odkazů**: 26 webových výskytů (21 unikátních URL) a 1 e-mailový odkaz. Navíc 2 prázdné elementy `<a>` bez `href` a bez textového popisku.
- **22 výskytů starých URL** (17 unikátních adres) nahrazeno přímými aktuálními URL. Všech 22 původně fungovalo přes jedno HTTP přesměrování.
- **3 neklikací CTA** změněna na odkazy. Žádná další jednoznačná neklikací zmínka konkrétního článku či epizody nebyla nalezena; konkrétní doporučení už odkazy měla.
- **0 potvrzených nefunkčních webových odkazů**: všech 21 původních unikátních webových cílů skončilo HTTP 200. E-mail má zachované `mailto:`; doručitelnost nebyla testována.
- Po dokončení podle rozhodnutí majitelky **28 skutečných odkazů**. Oba prázdné importované elementy byly odstraněny.
- Nový odkaz na LinkedIn má stejnou adresu jako existující kontakt na homepage; HTTP 999 je blokace automatické kontroly, nikoli prokázaná nefunkčnost.
- Nadpisy, perexy, navigace a značky obrázků včetně zdrojových adres zůstaly totožné. Podle následného zadání byla odstraněna pozvánka do facebookové skupiny a věta odkazující na nedostupný migrovaný článek. Obrázky se v auditním prohlížeči nestahovaly.
- Majitelka schválila push po závěrečné kontrole.

## Přehled článků

| Článek | Původní odkazy | Opravené staré URL | Nové odkazy |
|---|---:|---:|---:|
| [Když firmy čtou CV, ale nevidí člověka](articles_content/article1.html) | 0 | 0 | 0 |
| [Kalendář školního roku pro pracující rodiče](articles_content/article2.html) | 5 | 5 | 0 |
| [Jak nezískat práci: 25 osvědčených tipů](articles_content/article3.html) | 4 | 4 | 2 |
| [Soft skills budoucnosti: Na čem se vám vyplatí zapracovat?](articles_content/article4.html) | 5 | 5 | 0 |
| [30 vět které můžete říct na pohovoru i v posteli](articles_content/article5.html) | 0 | 0 | 0 |
| [Jak využívat sociální sítě k profesnímu růstu](articles_content/article6.html) | 0 | 0 | 1 |
| [Jak budovat odolnost: Zvládání neúspěchů a odmítnutí v kariéře i osobním životě](articles_content/article7.html) | 5 | 4 | 0 |
| [Data z pracovního trhu - červenec 2024](articles_content/article8.html) | 1 | 0 | 0 |
| [Prázdninový průvodce pro pracující rodiče](articles_content/article9.html) | 0 | 0 | 0 |
| [15 překvapujících faktů, které jste možná nevěděli o pracujících maminkách](articles_content/article10.html) | 0 | 0 | 0 |
| [Připravte si svůj Elevator Pitch](articles_content/article11.html) | 4 | 3 | 0 |
| [Jak si vyjednat práci na zkrácený úvazek](articles_content/article12.html) | 3 | 1 | 0 |

## Doplněné prokliky

- **Jak nezískat práci:** „můj blog“ → https://anetakorinkova.cz/articles.html; „Podcast o práci.“ → https://anetakorinkova.cz/podcast.html. Jde o obecné CTA, nikoli o zmínky konkrétního detailu.
- **Jak využívat sociální sítě k profesnímu růstu:** „Propojme se na LinkedInu“ → https://www.linkedin.com/in/anetakorinkova/. Propojen pouze text; obrázek i jeho URL zůstaly nedotčené.

## Vyřešeno podle rozhodnutí majitelky

- **Jak budovat odolnost:** odstraněn odkaz „tomto“ na starý článek „10 doporučení k hledání ideální práce pro moji kamarádku“ a pouze jeho závěrečná doporučující věta. Odstavec přirozeně končí větou „Uvidíte, že v tom nejste tom sama.“
- **Jak si vyjednat práci na zkrácený úvazek:** odstraněn odkaz na „Mateřství a práce. Jak se vypořádat s radami okolí a najít si svůj vlastní směr.“ Samotný text názvu zachován.
- **Jak využívat sociální sítě k profesnímu růstu:** odstraněny tři věty o skupině „Ženy a kariéra“ včetně pozvánky. Ostatní text zůstal zachován.
- Z téhož článku odstraněny obě prázdné značky `<a>` bez cíle; jejich mezery byly zachovány.
- Žádný nejasný odkaz už nevyžaduje rozhodnutí. Ve všech 12 článcích nezůstal odkaz na starý web ani prázdný odkaz. Staré adresy obrázků se podle zadání neměnily.

## Zachované externí odkazy

- Alma Career: odkaz „video“ v článku Data z pracovního trhu; HTTP 200 bez přesměrování, obsah odpovídá Datové snídani Q2 2024.
- Spotify: epizoda s Bárou Beranovou a Marcelou Drašnarovou v článku o zkráceném úvazku; HTTP 200 bez přesměrování, název potvrzuje epizodu 35. Odkaz zůstal externí.
- E-mail v Elevator Pitch zůstal beze změny.

## Přesné náhrady

| Článek | Text odkazu | Původní URL | Přímá cílová URL |
|---|---|---|---|
| articles_content/article2.html | Prázdninového průvodce pro pracující rodiče. | https://www.edumama.cz/clanky/prazdninovy-pruvodce-pro-pracujici-rodice | https://anetakorinkova.cz/articles_content/article9.html |
| articles_content/article2.html | Aneta Martinek: O organizaci času pro ženy | https://www.edumama.cz/podcast/s-anetou-martinek-o-organizaci-casu-pro-zeny | https://anetakorinkova.cz/episode.html?num=36&slug=s-anetou-martinek-o-organizaci-%C4%8Dasu-pro-%C5%BEeny |
| articles_content/article2.html | Daniel Gamrot: O produktivitě s lehkostí | https://www.edumama.cz/podcast/55-daniel-gamrot-o-produktivite-s-lehkosti | https://anetakorinkova.cz/episode.html?num=55&slug=55daniel-gamrot-o-produktivit%C4%9B-s-lehkost%C3%AD |
| articles_content/article2.html | Otec na rodičovské: Jak Libor Pospíšil mění stereotypy | https://www.edumama.cz/podcast/otec-na-rodicovske-jak-libor-pospisil-meni-stereotypy | https://anetakorinkova.cz/episode.html?num=48&slug=otec-na-rodi%C4%8Dovsk%C3%A9-jak-libor-posp%C3%AD%C5%A1il-m%C4%9Bn%C3%AD-stereot |
| articles_content/article2.html | 15 překvapujících faktů, které jste možná nevěděli o pracujících maminkách | https://www.edumama.cz/clanky/15-faktu-o-pracujicich-maminkach | https://anetakorinkova.cz/articles_content/article10.html |
| articles_content/article3.html | Jak budovat odolnost: Zvládání neúspěchů a odmítnutí v kariéře i osobním životě | https://www.edumama.cz/clanky/jak-budovat-odolnost | https://anetakorinkova.cz/articles_content/article7.html |
| articles_content/article3.html | Připravte si svůj Elevator Pitch | https://www.edumama.cz/clanky/pripravte-si-svuj-elevator-pitch | https://anetakorinkova.cz/articles_content/article11.html |
| articles_content/article3.html | Osobní značka: Jak a proč ji budovat? | https://www.edumama.cz/podcast/osobni-znacka-jak-a-proc-ji-budovat | https://anetakorinkova.cz/episode.html?num=49&slug=s%C3%ADla-osobn%C3%AD-zna%C4%8Dky-jak-a-pro%C4%8D-ji-budovat |
| articles_content/article3.html | Michal Šrajer: Štěstí v práci. Jak na něj? | https://www.edumama.cz/podcast/44-michal-srajer-stesti-v-praci-jak-na-nej | https://anetakorinkova.cz/episode.html?num=44&slug=michal-%C5%A1rajer-%C5%A1t%C4%9Bst%C3%AD-v-pr%C3%A1ci-jak-na-n%C4%9Bj |
| articles_content/article4.html | jak skvěle prezentovat | https://www.edumama.cz/podcast/s-petrou-bouskovou-o-umeni-skvele-prezentovat | https://anetakorinkova.cz/episode.html?num=37&slug=s-petrou-bou%C5%A1kovou-o-um%C4%9Bn%C3%AD-skv%C4%9Ble-prezentovat |
| articles_content/article4.html | článek | https://www.edumama.cz/clanky/jak-budovat-odolnost | https://anetakorinkova.cz/articles_content/article7.html |
| articles_content/article4.html | podcast | https://www.edumama.cz/podcast/s-anetou-martinek-o-organizaci-casu-pro-zeny | https://anetakorinkova.cz/episode.html?num=36&slug=s-anetou-martinek-o-organizaci-%C4%8Dasu-pro-%C5%BEeny |
| articles_content/article4.html | článek | https://www.edumama.cz/clanky/jak-vyuzivat-socialni-site-k-profesnimu-rustu | https://anetakorinkova.cz/articles_content/article6.html |
| articles_content/article4.html | podcast | https://www.edumama.cz/podcast/barbora-riedl-cernikova-o-psychickem-zdravi-v-praci | https://anetakorinkova.cz/episode.html?num=33&slug=barbora-riedl-%C4%8Dern%C3%ADkov%C3%A1-o-psychick%C3%A9m-zdrav%C3%AD-v-pr%C3%A1c |
| articles_content/article7.html | s takovými situacemi | https://www.edumama.cz/clanky/15-faktu-o-pracujicich-maminkach | https://anetakorinkova.cz/articles_content/article10.html |
| articles_content/article7.html | Aneta Martinek v Podcastu o práci. | https://www.edumama.cz/podcast/s-anetou-martinek-o-organizaci-casu-pro-zeny | https://anetakorinkova.cz/episode.html?num=36&slug=s-anetou-martinek-o-organizaci-%C4%8Dasu-pro-%C5%BEeny |
| articles_content/article7.html | Pavla Táborská v Podcastu o práci. | https://www.edumama.cz/podcast/pavla-taborska-o-ceste-k-well-beingu-dusevni-pohode-a-odolnosti | https://anetakorinkova.cz/episode.html?num=40&slug=pavla-t%C3%A1borsk%C3%A1-o-cest%C4%9B-k-well-beingu-du%C5%A1evn%C3%AD-pohod |
| articles_content/article7.html | Podcastu o práci s Denisou Dědičovou. | https://www.edumama.cz/podcast/denisa-dedicova-jsme-prvni-generace-ktera-si-muze-dovolit-resit-smysl-v-praci | https://anetakorinkova.cz/episode.html?num=22&slug=denisa-d%C4%9Bdi%C4%8Dov%C3%A1-jsme-prvn%C3%AD-generace-kter%C3%A1-si-m%C5%AF%C5%BEe |
| articles_content/article11.html | S Petrou Bouškovou o umění skvělě prezentovat | https://www.edumama.cz/podcast/s-petrou-bouskovou-o-umeni-skvele-prezentovat | https://anetakorinkova.cz/episode.html?num=37&slug=s-petrou-bou%C5%A1kovou-o-um%C4%9Bn%C3%AD-skv%C4%9Ble-prezentovat |
| articles_content/article11.html | S Barborou Beranovou a Marcelou Drašnarovou o kariérní změně | https://www.edumama.cz/podcast/s-barborou-beranovou-a-marcelou-drasnarovou-o-karierni-zmene | https://anetakorinkova.cz/episode.html?num=35&slug=s-barborou-beranovou-a-marcelou-dra%C5%A1narovou-o-kari |
| articles_content/article11.html | Jak si vyjednat práci na zkrácený úvazek | https://www.edumama.cz/clanky/jak-si-vyjednat-praci-na-zkraceny-uvazek | https://anetakorinkova.cz/articles_content/article12.html |
| articles_content/article12.html | Andrea Bohačíková: Rodičovská není brzda, když nechcete. | https://www.edumama.cz/podcast/andrea-bohacikova-rodicovka-neni-brzda-kdyz-nechcete | https://anetakorinkova.cz/episode.html?num=23&slug=andrea-boha%C4%8D%C3%ADkov%C3%A1-rodi%C4%8Dovsk%C3%A1-nen%C3%AD-brzda-kdy%C5%BE-nechc |

## Ověření

- Všech 19 unikátních nových interních cílů vrací HTTP 200 bez přesměrování (17 migrovaných detailů a 2 obecné přehledy).
- Podcastové detaily byly porovnány s aktuálním RSS a načteny v prohlížeči: epizody 22, 23, 33, 35, 36, 37, 40, 44, 48, 49 a 55.
- Desktop 1440 px a mobil 390 px: zkontrolováno všech 12 článků a všech 28 odkazů, včetně Tab/Shift+Tab, viditelného fokusu a aktivace Enterem.
- Odkazy mají společné podtržení, tmavě modrou barvu, malinový hover/focus a obrys při ovládání klávesnicí. Styl nemění velikost ani řez textu.
- Při prvním auditu porovnán veškerý text; následné textové změny jsou omezeny na výše schválená odstranění. Závěrečná kontrola porovnává HTML headerů, navigaci, šířku a kompletní značky obrázků, které zůstaly beze změny.
- HTTP stav je stav k datu auditu, nikoli záruka budoucí dostupnosti.
