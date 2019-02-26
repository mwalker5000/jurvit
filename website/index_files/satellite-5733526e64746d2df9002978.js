_satellite.pushAsyncScript(function(event, target, $variables){
  if (typeof jQuery !== 'undefined') {
  jQuery(document).ajaxSuccess(function() {
    // check for form submission
    // see if the submit button has been clicked
    var formSubmitted = _satellite.getVar('form submitted');
    if (formSubmitted == 'yes') {
      // create object with eventInfo and form attributes
      // form attribute data elements pulled from event based Form View and Form Interactions rules
      var ddFormEvent = {
        eventInfo: {
          eventName: 'formSubmit',
          eventAction: 'formSubmission',
          formStep: 'success',
          formId: _satellite.getVar('form id'),
          formName: _satellite.getVar('form name'),
          formType: '',
          offerId: _satellite.getVar('form offer id'),
          timeStamp: new Date(),
          processed: {
            adobeAnalytics: false
          }
        }
      };
      //Push it onto the events array on digitalData object
      var digitalData = window.digitalData = window.digitalData || {};
      digitalData.events = digitalData.events || [];
      digitalData.events.push(ddFormEvent);
      //Create and dispatch an event trigger
      sendCustomEvent('formEvent');
      _satellite.setVar('form submitted', 'no');
    }
  });
}
});
