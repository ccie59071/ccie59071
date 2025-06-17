const CONFIG = {
  formspreeEndpoint: 'https://formspree.io/f/meokkbnk', // Replace with your Formspree endpoint
  googleAnalyticsId: 'G-WJ2KXWYWN1', // Replace with your Google Analytics ID (or leave empty to disable)
  linkedinUrl: 'https://linkedin.com/in/your-profile', // Replace with your LinkedIn URL
  xUrl: 'https://x.com/your-profile', // Replace with your X URL
  phoneNumber: '+XXX-XXX-XXX-XXX' // Replace with your phone number
};

// Dynamically insert Google Analytics if ID is provided
if (CONFIG.googleAnalyticsId) {
  const gaScript = document.createElement('script');
  gaScript.async = true;
  gaScript.src = `https://www.googletagmanager.com/gtag/js?id=${CONFIG.googleAnalyticsId}`;
  document.head.appendChild(gaScript);

  const gaConfigScript = document.createElement('script');
  gaConfigScript.innerHTML = `
    window.dataLayer = window.dataLayer || [];
    function gtag(){dataLayer.push(arguments);}
    gtag('js', new Date());
    gtag('config', '${CONFIG.googleAnalyticsId}');
  `;
  document.head.appendChild(gaConfigScript);
}
