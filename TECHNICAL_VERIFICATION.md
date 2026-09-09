# Technická Verifikace: Cookies, Tracking, Consent
**Prověřeno:** 2026-08-26

---

## 1. FORENDORS EMBED - DETAILNÍ ANALÝZA

### Co se načítá
V index.html je zabudovaný Forendors embed kód (řádky ~230):
- **HTML:** Formulář s email inputem + tlačítky
- **CSS:** Inline styl (vložen přímo v HTML)
- **JavaScript:** Třída `ForendorsEmbed` se inicializuje hned

### Časová osa - Co se stane na stránce

**1. Page Load**
```javascript
const forendorsEmbed = new ForendorsEmbed;
```
- Třída se inicializuje ihned
- Připojí event listener na form submit
- ✅ DŮLEŽITÉ: Nic se nezačíná posílat do Forendors API!
- ✅ Žádné HTTP requesty zatím

**2. Uživatel Zadá Email + Klikne "Chci číst Dopis o práci"**
```javascript
async _formSubmit() {
  let t = await fetch(`${PckConstants.BaseApiUrl}/newsletter/subscribe-public`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      handle: "korinkova.aneta",
      email: e  // Email uživatele
    })
  });
}
```
- Pošle POST na `https://api.forendors.cz/newsletter/subscribe-public`
- Tělo: Email adresa + váš handle

### Cookies - Co Forendors Nastavuje

**Na Page Load:** 
- ❌ Žádné cookies (skript je jen init)

**Na Form Submit (po kliknutí "Přijmout"):**
- ❓ **Nelze určit z kódu**, co Forendors API vrací
- Možnosti:
  - Forendors **MŮŽE** nastavit session cookie
  - Forendors **MŮŽE** nastavit tracking cookie
  - Forendors **MŮŽE** nic nenavstit (jen zpracuje email)

### Závěr: Forendors

| Aspekt | Stav |
|--------|------|
| Když se stránka načte | Bez cookies, jen HTML/JS |
| Jakmile se formulář odešle | Možné cookies od Forendors API |
| Vyžaduje consent? | **TEORETICKY NE** (cookies až po user action) |
| ALE - GDPR perspective | **JADRUHÉ** (odesílání emailu = osobní údaj) |
| Cookie consent banner | Není potřeba blokovat (cookies nejdříve po action) |

**Praktická Doporučení:**
- Forendors formulář se může nabídnout BEZ souhlasu s cookies
- ALE: V privacy policy musíte zmínit, že se email posílá Forendors
- V GDPR není potřeba cookie consent, ale IS potřeba "processing consent"

---

## 2. LIBSYN RSS FEED - DETAILNÍ ANALÝZA

### Co se Načítá

Na všech stránkách (index, articles, podcast, episode) se načítá RSS přes fetch:

**index.html + podcast.html:**
```javascript
const rssUrl = 'https://feeds.libsyn.com/304163/podcastopraci';
const response = await fetch(rssUrl);  // GET request
```

**episode.html:**
Stejný feed URL

### Časová osa

**1. Page Load**
- JavaScript se inicializuje
- `loadHomepageEpisodes()` nebo `loadPodcastEpisodes()` se spouští

**2. Ihned Poté (asynchroně)**
```javascript
const response = await fetch(rssUrl);
```
- Pošle GET request na `https://feeds.libsyn.com/304163/podcastopraci`
- Hlavičky zahrnují:
  - `User-Agent` (identifikuje váš prohlížeč)
  - `Referer` (odkud přišel request - anetakorinkova.cz)
  - Cookies (pokud Libsyn předtím nějaké nastavil)

### Cookies - Co Libsyn Nastavuje

**Na Page Load:**
- ❌ Žádné cookies inicializace

**Na RSS Fetch:**
- ❓ **Nelze určit z kódu** - závisí na Libsyn serveru
- Možnosti:
  - Libsyn **MŮŽE** nastavit analytics cookie
  - Libsyn **MŮŽE** nastavit session cookie (pro rate limiting)
  - Libsyn **MŮŽE** nic nenavstit

### Libsyn Logging

Všechny requesty na Libsyn jsou logovány:
- IP adresa (i když anonymizovaná)
- Referer (váš web)
- User-Agent
- Časové razítko

### Závěr: Libsyn

| Aspekt | Stav |
|--------|------|
| Cookies na page load | Nejspíše NE |
| Cookies na RSS fetch | Možné, ale neurčitě |
| Vyžaduje consent? | **DISKUTABILNÍ** - technicky je to jen RSS, ale je externí request |
| IP logging | ANO - Libsyn loguje requesty |
| Výhrada | Bez přístupu k Libsyn cookies politice nelze říci s jistotou |

**Praktická Doporučení:**
- Libsyn RSS se může načítat bez cookie consentu (stejně jako Google Fonts)
- ALE: V privacy policy zmínte, že IP se posílá Libsyn při načítání feedu
- Nezáleží na GA4 consentu - je to oddělený typ trackingu

---

## 3. OVĚŘENÍ GA4 CONSENT MECHANISMU

### Test 1: GA4 se NENAČÍTÁ Bez Souhlasu

**Aktuální stav v analytics.js:**
```javascript
// Check if analytics is allowed
function isAnalyticsAllowed() {
  const consent = localStorage.getItem('anetakorinkova_cookies_consent');
  if (!consent) return false;  // ← Bez souhlasu = FALSE
  const parsedConsent = JSON.parse(consent);
  return parsedConsent.analytics === true;
}

// Initialize only if allowed
if (!isAnalyticsAllowed()) {
  console.log('[Analytics] User has not consented to analytics');
  return;  // ← STOP - Neinicializuj GA4
}
```

**Status:** ✅ **SPRÁVNĚ** - GA4 se neinicializuje bez souhlasu

### Test 2: GA4 se NENAČÍTÁ na Localhost

**Aktuální stav v analytics.js:**
```javascript
function isProduction() {
  const productionDomains = ['anetakorinkova.cz', 'www.anetakorinkova.cz'];
  const currentDomain = window.location.hostname;
  return productionDomains.includes(currentDomain);
}

if (!isProduction()) {
  console.log('[Analytics] Development environment detected - GA4 disabled');
  return;  // ← STOP - Neinicializuj GA4
}
```

**Status:** ✅ **SPRÁVNĚ OPRAVENO** - Teď detekuje `.cz` domenu

### Test 3: Cookies Banner - Tlačítka Jsou Rovnocenná

**HTML v cookies.js:**
```html
<button class="cookie-consent__btn cookie-consent__btn--reject" 
  onclick="CookieConsent.setConsent(false); CookieConsent.hideBanner()">
  Odmítnout
</button>
<button class="cookie-consent__btn cookie-consent__btn--accept" 
  onclick="CookieConsent.setConsent(true); CookieConsent.reloadWithAnalytics(); CookieConsent.hideBanner()">
  Přijmout
</button>
```

**CSS v style.css:**
```css
.cookie-consent__btn {
  padding: 0.625rem 1.25rem;
  border: none;
  border-radius: 8px;
  font-size: 0.85rem;
  font-weight: 500;
  cursor: pointer;
}

.cookie-consent__btn--reject {
  background: #F0F0F0;  /* Lehčí barva */
  color: #555555;
}

.cookie-consent__btn--accept {
  background: var(--primary);  /* Navy - primární */
  color: white;
}
```

**Status:** ⚠️ **UPOZORNĚNÍ** - "Přijmout" tlačítko je vizuálně zdůrazněno (navy barva)

**Analýza:**
- Oba tlačítka jsou kliknutelná (✅ OK)
- "Odmítnout" je šedé, "Přijmout" je navy (⚠️ Psychologický bias)
- Z GDPR hlediska: Oba tlačítka by měla být "stejně snadno dostupná"
- **Doporučení:** Zvýraznit oba tlačítka stejně (např. oba navy, nebo oba šedé)

### Test 4: Změna Souhlasu Later

**Aktuální mechanismus:**
```html
<a href="#" onclick="CookieConsent.clearConsent(); location.reload(); return false">
  Cookies
</a>
```

**Status:** ✅ **IMPLEMENTOVÁNO** v `cookies.js`, ale:
- Odkaz musí být v HTML (zatím NENÍ ve footeru)
- Footer obsahuje jen prázdný odkaz `<a href="#">Cookies</a>`

**Úkol:** Přidat funkčnost k odkazu v footer

### Test 5: Odmítnutí Neblokuje Web

**Aktuální chování:**
1. Uživatel klikne "Odmítnout"
2. Souhlas se uloží: `{"analytics": false}`
3. Banner se skryje
4. GA4 se nenačítá
5. Web se nenačítá - **Vše funguje normálně** ✅

**Status:** ✅ **SPRÁVNĚ** - Odmítnutí web neblokuje

---

## 4. COOKIES BANNER - VYLEPŠENÍ

### Aktuální Problém

CSS dává "Přijmout" tlačítku primární barvu (navy), což vytváří psychologický bias - uživatel je veden k příjetí.

### GDPR Požadavek

Obě tlačítka by měla být "stejně snadno dostupná" - bez psychologického nátlaku.

### Doporučená Oprava

Změnit CSS tak, aby obě tlačítka vypadala stejně (neutrálně):

**Option A:** Oba šedá (current "Odmítnout" styl)
```css
.cookie-consent__btn--reject { background: #F0F0F0; }
.cookie-consent__btn--accept { background: #F0F0F0; }  /* Změna */
```

**Option B:** Oba navy (invertovat)
```css
.cookie-consent__btn--reject { background: var(--primary); color: white; }  /* Změna */
.cookie-consent__btn--accept { background: var(--primary); color: white; }
```

**Option C:** Oba jako tlačítka (border + hover)
```css
.cookie-consent__btn--reject { border: 1px solid var(--primary); color: var(--primary); }
.cookie-consent__btn--accept { border: 1px solid var(--primary); color: var(--primary); }
```

---

## 5. ZÁLOHA: FOOTER COOKIES LINK

### Aktuální Stav

```html
<nav class="footer__nav">
  <a href="#">Ochrana osobních údajů</a>
  <a href="#">Cookies</a>  <!-- Bez funkčnosti -->
</nav>
```

### Potřebné Úpravy

Přidat funkčnost k "Cookies" odkazu:

```html
<a href="#" onclick="CookieConsent.clearConsent(); CookieConsent.initConsentBanner(); return false">
  Cookies
</a>
```

Tím se:
1. Smaže uložený souhlas
2. Znovu zobrazí banner
3. Uživatel může znovu vybrat

---

## SHRNUTÍ: Co Je Hotovo vs. Co Zbývá

### ✅ HOTOVO (Bez Akcí)
- GA4 detekuje `.cz` doménu
- GA4 se nenačítá bez souhlasu
- GA4 se nenačítá na localhost
- Cookie consent banner se zobrazuje
- Souhlas se ukládá v localStorage

### ⚠️ UPOZORNĚNÍ (Vyžaduje Úpravu)
- **Tlačítka cookies banneru:** "Přijmout" je vizuálně zdůrazněné (bias)
- **Footer "Cookies" link:** Nemá funkčnost

### ⏳ BUDOUCÍ KROKY
- Opravit CSS tlačítek (udělat je neutrálním)
- Přidat funkčnost k footer "Cookies" linku
- Vytvořit stránky "Ochrana osobních údajů" a "Cookies"

---

## VĚDECKÝ APARÁT: Co Víme a Co Ne

| Aspekt | Jistota | Poznámka |
|--------|---------|----------|
| Forendors cookies na page load | 100% | Vidíme kód - žádné inicializace |
| Forendors cookies na form submit | ~30% | Závisí na Forendors API - nelze určit |
| Libsyn cookies na page load | ~50% | Nelze určit bez inspekce Libsyn |
| Libsyn cookies na RSS fetch | ~60% | Libsyn typicky nastavuje session cookies |
| GA4 se nenačítá bez souhlasu | 100% | Vidíme kód - logika je jasná |
| GA4 se nenačítá na localhost | 100% | Vidíme kód - domény jsou správné |

---

**Závěr: Web je privacy-first, ale cookie consent banner potřebuje malou úpravu CSS pro GDPR compliance.**
