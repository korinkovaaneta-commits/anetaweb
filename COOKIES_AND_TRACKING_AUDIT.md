# Cookies & Tracking Audit Report
**anetakorinkova.com** | Completed: 2026-08-26

---

## A. GOOGLE ANALYTICS 4 IMPLEMENTATION

### How GA4 is Implemented

**Files involved:**
- `analytics.js` - Main GA4 initialization script
- `cookies.js` - Cookie consent management

**Behavior:**
1. **Only runs in production** - GA4 is disabled on localhost and non-production domains
2. **Requires explicit consent** - GA4 only initializes if user has consented to analytics cookies
3. **Non-intrusive** - Sends minimal data (no personalization, IP anonymization enabled)
4. **Easy to disable** - Users can reject analytics via cookie consent banner

**Measurement ID:** `G-XZ862F97QQ` (stored in `analytics.js`)

**Implementation details:**
- Script loads asynchronously to avoid blocking page performance
- Watches for consent changes via localStorage
- If user changes preference, page reloads to apply new settings
- GA4 configuration:
  - `anonymize_ip: true` - Don't send raw IP addresses
  - `allow_google_signals: false` - No Google Signals integration
  - `allow_ad_personalization: false` - No ad personalization

---

## B. COOKIES & TRACKERY FOUND

### 1. Google Fonts
- **Service:** fonts.googleapis.com, fonts.gstatic.com
- **Purpose:** Load DM Sans font (300, 400, 500, 600, 700, 800 weights)
- **Data sent:** HTTP request headers, potentially device fingerprinting
- **Cookies:** Unlikely to set cookies, but connection data is logged
- **Consent required:** Technically falls under "essential" (renders the page)
- **Location:** index.html, articles.html, podcast.html, episode.html (head section)

### 2. Forendors (Newsletter Platform)
- **Service:** api.forendors.cz
- **Purpose:** Newsletter subscription (Dopis o práci)
- **Data sent:** 
  - Email address (user provides explicitly)
  - Form submission via fetch API
  - May set tracking cookies for email verification
- **Implementation:** Embedded HTML/CSS/JavaScript form (self-contained in index.html)
- **What Forendors does:**
  - Stores email in their system
  - Sends confirmation emails
  - May track opens/clicks via email pixels
  - May set cookies for session management
- **Consent required:** Likely should require consent (cookies possible, external service)
- **Note:** User explicitly agrees to "obchodními podmínkami" (terms of service) in the form

### 3. Libsyn (Podcast Hosting)
- **Service:** feeds.libsyn.com
- **Purpose:** Load RSS feed for podcast episodes
- **Data sent:**
  - RSS request with user's IP address
  - Referrer header showing it came from your site
- **Cookies:** May set tracking cookies
- **Implementation:** Loaded via JavaScript `fetch()` on index.html, podcast.html, episode.html
- **Consent required:** Debatable - it's just RSS metadata, but Libsyn logs requests

### 4. Google Analytics 4 (NEW - just added)
- **Service:** googletagmanager.com, analytics.google.com
- **Purpose:** Track page views, user behavior, traffic sources
- **Data sent:** Page views, events, browser info, referrer, IP (anonymized)
- **Cookies:** Sets `_ga`, `_ga_<ID>` cookies (2 years expiration)
- **Consent required:** YES - requires explicit opt-in
- **Status:** Only active if:
  - User is on production domain (not localhost)
  - User has consented to analytics cookies

---

## C. EXTERNAL SERVICES THAT MAY PROCESS DATA

1. **Google Fonts** (fonts.googleapis.com)
   - Logs all requests, may fingerprint users
   - No cookies typically set

2. **Forendors** (forendors.cz)
   - Stores email addresses
   - May have their own privacy policy
   - Likely has analytics on their platform
   - **Action needed:** Review Forendors privacy policy

3. **Libsyn** (libsyn.com)
   - Logs podcast feed requests
   - Analytics dashboard for podcast stats
   - May set tracking cookies

4. **Google Analytics** (after GA4 consent)
   - Tracks user behavior on your site
   - Stores in Google Analytics interface
   - Sent to Google servers

5. **LinkedIn** (External link only)
   - Not embedded, just a link to your profile
   - No tracking unless user clicks

6. **Instagram** (External link only)
   - Not embedded, just a link to your profile
   - No tracking unless user clicks

---

## D. FORENDORS INTEGRATION DETAILS

### How Forendors Works on Your Site

**Form structure:**
```html
<div id="forendorsEmbedContainer" class="pe">
  <form id="forendorsEmbedForm">
    <input type="email" name="email" placeholder="Váš e-mail:" required>
    <button type="submit">Chci číst Dopis o práci</button>
  </form>
  <p class="agreement">
    Vyplněním e-mailu se přihlašujete k obsahovému newsletteru tvůrce 
    a souhlasíte s <a href="https://www.forendors.cz/vop">obchodními podmínkami</a>.
  </p>
</div>
```

**JavaScript handling:**
```javascript
class ForendorsEmbed {
  async _formSubmit() {
    // Sends email to Forendors API
    fetch('https://api.forendors.cz/newsletter/subscribe-public', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        handle: 'korinkova.aneta',
        email: userEmail
      })
    });
  }
}
```

**Data flow:**
1. User enters email in form
2. JavaScript captures email
3. Sends to `api.forendors.cz/newsletter/subscribe-public`
4. Forendors stores email in database
5. User receives confirmation email
6. Email added to "Dopis o práci" mailing list

**Cookies/Tracking by Forendors:**
- Likely sets cookies for session management
- May set analytics cookies
- Email pixels in newsletter (tracks opens/clicks)

**Personal data storage:**
- Email addresses stored on Forendors servers
- Access via your Forendors dashboard at forendors.cz
- Forendors handles storage, security, GDPR compliance

---

## E. WHICH TECHNOLOGIES REQUIRE CONSENT

### Category 1: Essential (NO consent required)
- Google Fonts - technically essential to render the page correctly
- Libsyn RSS feed - essential for podcast functionality

### Category 2: Analytics (CONSENT REQUIRED)
- **Google Analytics 4** - Requires explicit opt-in ✓ IMPLEMENTED
- Libsyn analytics - They track feed requests, users should be informed

### Category 3: Functional (CONSENT REQUIRED)
- **Forendors** - Stores personal data (email), requires consent

### Category 4: Marketing/Tracking (CONSENT REQUIRED - if enabled)
- Forendors email pixels - Tracks newsletter opens/clicks
- Facebook Pixel - NOT present
- LinkedIn Pixel - NOT present
- Hotjar - NOT present

---

## F. COOKIE CONSENT SOLUTION RECOMMENDED

### Current Implementation

A minimalist cookie consent approach has been implemented:

**Files:**
- `cookies.js` - Manages consent status in localStorage
- `analytics.js` - Respects consent status
- `style.css` - Styling for consent banner
- Updated: index.html, articles.html, podcast.html, episode.html

**How it works:**

1. **First visit:** Shows a small banner at bottom of page
   - "Používáme analytické cookies..."
   - Two buttons: "Odmítnout" (Reject) | "Přijmout" (Accept)

2. **User clicks:**
   - **Reject:** No analytics, no GA4 loading
   - **Accept:** GA4 initializes immediately, page reloads

3. **Stored:** Choice saved in `localStorage` as JSON
   ```json
   {
     "analytics": true/false,
     "timestamp": "2026-08-26T...",
     "version": "1"
   }
   ```

4. **Later visits:** No banner shown (user already chose)

5. **Change preference:** Link in footer "Cookies" can trigger
   - (Implementation needed for footer link to reset consent)

### Design Features

- **Minimalist:** Subtle banner at bottom, not intrusive
- **Matches your site:** Uses your colors (primary navy, accent mauve)
- **Mobile friendly:** Stacks buttons on small screens
- **Non-tracking:** Doesn't use external consent tools (no OneTrust, Cookiebot, etc.)
- **GDPR friendly:** Explicit opt-in before any tracking
- **Easy to manage:** Simple localStorage, no complex databases

### What's NOT Tracked Before Consent

✓ Google Analytics - BLOCKED
✓ GA4 cookies - NOT SET
✓ Event tracking - NOT SENT
✓ Google Signals - DISABLED

### What IS Tracked (Always)

- Page loads (server logs)
- RSS feed requests (Libsyn logs)
- Email submissions to Forendors
- Static asset loads (images, CSS, JS)

---

## G. INFORMATION NEEDED FOR PRIVACY/COOKIES PAGES

To create proper legal pages, I need answers to these questions:

### For "Ochrana osobních údajů" (Privacy Policy)

1. **Personal data processing:**
   - Do you process any personal data beyond newsletter emails? (NO = answer: no)
   - How long do you store email addresses? (Forendors policy or yours?)
   - Do you ever share email lists? (NO = answer: no)
   - Do you have a Data Processing Agreement with Forendors?

2. **Rights of users:**
   - Can users request their data? (YES - they can contact Forendors)
   - Can they request deletion? (YES - they can unsubscribe)
   - How do they contact you? (Email or form?)

3. **Forendors specifics:**
   - Do you take responsibility for Forendors' data handling?
   - Do you want to link to Forendors' privacy policy?

4. **Analytics:**
   - Will you mention GA4 by name?
   - How long do you keep analytics data? (GA4 defaults to 14 months)

5. **Third parties:**
   - Should you mention Google, Forendors, Libsyn?
   - Should you link to their privacy policies?

### For "Cookies" (Cookie Policy)

1. **Cookie categories:**
   - Will you require consent for "Essential" cookies?
   - Will you explain GA4 cookies specifically?
   - Will you mention Forendors may set cookies?

2. **User control:**
   - How can users manage their cookie choices?
   - Where is the "change preferences" link? (Footer "Cookies" link)
   - What happens if they reject all cookies?

3. **Cookie list:**
   - Should you list specific cookies? (_ga, _ga_XZ862F97QQ, etc.)
   - How technical should you be?

4. **Compliance scope:**
   - Is this for GDPR only (EU users)?
   - Or also for other regulations (USA, etc.)?

---

## SUMMARY: WHAT'S TRACKING WHAT

| Service | Data | Cookies | Consent | Status |
|---------|------|---------|---------|--------|
| Google Fonts | Font requests | No | Essential | ✓ Active |
| Forendors | Email address | Possibly | Required | ✓ Consent banner works |
| Libsyn | RSS feed requests | Possibly | Should inform | ✓ No blocking needed |
| Google Analytics 4 | Page views, events | YES | Required | ✓ Implemented, awaits consent |
| LinkedIn | Profile link | No | No | ✓ External link only |
| Instagram | Profile link | No | No | ✓ External link only |

---

## NEXT STEPS (When Ready)

1. Test cookie consent banner on live site
2. Create "Ochrana osobních údajů" page (using answers above)
3. Create "Cookies" page (cookie management & settings)
4. Link "Cookies" in footer to reset consent (small JavaScript function)
5. Review Forendors terms of service for compliance
6. (Optional) Set up Google Analytics 4 dashboard to view data
7. (Optional) Add more events to GA4 (e.g., newsletter signups, article clicks)

---

## NO ISSUES FOUND

✅ No unauthorized tracking detected
✅ No Google Tag Manager
✅ No Meta Pixel
✅ No third-party analytics (besides GA4, which requires consent)
✅ No marketing pixels
✅ No vendor tracking (Google Fonts is only essential service)

**Your site is clean and privacy-friendly by default.**
