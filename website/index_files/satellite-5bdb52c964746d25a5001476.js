_satellite.pushAsyncScript(function(event, target, $variables){
  if (typeof jQuery !== 'undefined') {
  jQuery.getScript('https://www.googletagmanager.com/gtag/js?id=DC-8453737',
    function() {
      window.dataLayer = window.dataLayer || [];

      window.gtag = function() {
        dataLayer.push(arguments);
      }
      gtag('js', new Date());
      gtag('config', 'AW-991646916');
      gtag('config', 'DC-8453737');
    });
}
});
