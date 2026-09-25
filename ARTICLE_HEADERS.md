# Jednotný úvod článků

Všechny články ve Čtení o práci používají `article-covers.css` a `article-covers.js`.
Společná komponenta vytváří `header` s jedním `h1`: horizontální linka,
titulek (včetně případného stávajícího podtitulku) a autor. Nemá designové varianty.

## Nový článek

Použij stejnou navigaci, patičku a produkční skripty jako v existujícím článku.
Po `style.css` načti `article-covers.css?v=20260925-editorial` a před koncem body
`article-covers.js?v=20260925-editorial`. Relativní cesty přizpůsob umístění souboru.

```html
<article class="article-content article-content--editorial"
         data-title="Přesný titulek článku">
  <p>Úvodní perex v původním znění.</p>
  <!-- Hlavní text článku -->
</article>
```

Titulek ukládej jako bezpečně escapovaný HTML atribut (např. `&quot;`
pro uvozovky). Autor je standardně Aneta Kořínková. Volitelný `data-subtitle`
zachová podtitulek; `data-accent` může obsahovat jednu krátkou část titulku,
pokud její zvýraznění dává smysl. Akcent není povinný.

První neprázdný odstavec je automaticky perex: běžný řez, mírně větší velikost
a společný line-height. Komponenta odstraní pouze jeho kurzívní obal `em`/`i`;
text ani důrazy v dalším obsahu nemění. Prázdné importované odstavce před perexem
se nezobrazují. Další CSS pro jednotlivé články není potřeba.

Existujících 12 článků používá `data-article` a obsahové konfigurace v
`article-covers.js`. `create_articles_from_xml.py` už generuje stejný systém
přes `data-title`; jeho spuštění není nutné pro úpravu existujících stránek.

Horní odstup pod navigací: desktop 60 px, tablet 48 px, mobil do 600 px 32 px.
Čtecí šířku a horizontální odsazení těla článku nadále určuje `style.css`.

Kategorie nejsou součástí systému. Mezi linkou a titulkem je 24 px whitespace;
pro kategorii se nevytváří žádný prvek ani rezervované místo.
