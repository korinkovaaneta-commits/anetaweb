// Google Analytics 4 integration for anetakorinkova.com
// Only initializes if:
// 1. Running in production environment
// 2. User has consented to analytics cookies

(function() {
  // GA4 Measurement ID
  const GA4_MEASUREMENT_ID = 'G-XZ862F97QQ';

  // Check if running in production
  function isProduction() {
    const productionDomains = ['anetakorinkova.cz', 'www.anetakorinkova.cz'];
    const currentDomain = window.location.hostname;
    return productionDomains.includes(currentDomain);
  }

  // Check if analytics is allowed
  function isAnalyticsAllowed() {
    const consent = localStorage.getItem('anetakorinkova_cookies_consent');
    if (!consent) return false;
    try {
      const parsedConsent = JSON.parse(consent);
      return parsedConsent.analytics === true;
    } catch {
      return false;
    }
  }

  // Initialize Google Analytics if conditions are met
  function initializeAnalytics() {
    // Don't initialize in development/localhost
    if (!isProduction()) {
      console.log('[Analytics] Development environment detected - GA4 disabled');
      return;
    }

    // Don't initialize if user hasn't consented
    if (!isAnalyticsAllowed()) {
      console.log('[Analytics] User has not consented to analytics');
      return;
    }

    // Load Google Analytics
    console.log('[Analytics] Initializing GA4 with ID:', GA4_MEASUREMENT_ID);

    // Create gtag function
    window.dataLayer = window.dataLayer || [];
    function gtag() {
      dataLayer.push(arguments);
    }
    gtag('js', new Date());
    gtag('config', GA4_MEASUREMENT_ID, {
      // Respect user's choice - only track if they consented
      anonymize_ip: true,
      allow_google_signals: false,
      allow_ad_personalization: false
    });

    // Load Google Analytics script
    const script = document.createElement('script');
    script.async = true;
    script.src = 'https://www.googletagmanager.com/gtag/js?id=' + GA4_MEASUREMENT_ID;
    document.head.appendChild(script);

    // Make gtag global
    window.gtag = gtag;
  }

  // Initialize when DOM is ready
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initializeAnalytics);
  } else {
    initializeAnalytics();
  }

  // Watch for consent changes (if user changes preference via cookies link)
  window.addEventListener('storage', (event) => {
    if (event.key === 'anetakorinkova_cookies_consent') {
      // Consent changed - reload to apply new settings
      console.log('[Analytics] Consent changed - reloading page');
      window.location.reload();
    }
  });
})();
