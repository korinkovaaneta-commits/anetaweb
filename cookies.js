// Cookie consent management for anetakorinkova.com
// Minimalist approach for GDPR compliance

const CookieConsent = {
  // Get current consent status
  getConsent() {
    const stored = localStorage.getItem('anetakorinkova_cookies_consent');
    return stored ? JSON.parse(stored) : null;
  },

  // Save consent choice
  setConsent(analytics = false) {
    const consent = {
      analytics: analytics,
      timestamp: new Date().toISOString(),
      version: '1'
    };
    localStorage.setItem('anetakorinkova_cookies_consent', JSON.stringify(consent));
    return consent;
  },

  // Check if analytics is allowed
  isAnalyticsAllowed() {
    const consent = this.getConsent();
    return consent ? consent.analytics : false;
  },

  // Clear consent (e.g., when user changes settings)
  clearConsent() {
    localStorage.removeItem('anetakorinkova_cookies_consent');
  },

  // Check if environment is production
  isProduction() {
    // Production domains
    const productionDomains = ['anetakorinkova.com', 'www.anetakorinkova.com'];
    const currentDomain = window.location.hostname;
    return productionDomains.includes(currentDomain);
  },

  // Initialize consent banner
  initConsentBanner() {
    // Only show banner if consent not yet given
    if (this.getConsent() !== null) {
      return; // User has already made a choice
    }

    // Create consent banner
    const banner = document.createElement('div');
    banner.id = 'cookie-consent-banner';
    banner.innerHTML = `
      <div class="cookie-consent__content">
        <div class="cookie-consent__text">
          <p>Používáme analytické cookies, aby se nám web lépe vylepšoval. Můžete je odmítnout nebo přijmout.</p>
        </div>
        <div class="cookie-consent__actions">
          <button class="cookie-consent__btn cookie-consent__btn--reject" onclick="CookieConsent.setConsent(false); CookieConsent.hideBanner()">
            Odmítnout
          </button>
          <button class="cookie-consent__btn cookie-consent__btn--accept" onclick="CookieConsent.setConsent(true); CookieConsent.reloadWithAnalytics(); CookieConsent.hideBanner()">
            Přijmout
          </button>
        </div>
      </div>
    `;

    document.body.appendChild(banner);
  },

  // Hide consent banner
  hideBanner() {
    const banner = document.getElementById('cookie-consent-banner');
    if (banner) {
      banner.style.display = 'none';
    }
  },

  // Reload page to activate analytics after consent
  reloadWithAnalytics() {
    // Delay reload to ensure consent is saved
    setTimeout(() => {
      window.location.reload();
    }, 100);
  }
};

// Initialize consent banner when DOM is ready
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', () => {
    CookieConsent.initConsentBanner();
  });
} else {
  CookieConsent.initConsentBanner();
}
