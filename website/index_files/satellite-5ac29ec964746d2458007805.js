_satellite.pushAsyncScript(function(event, target, $variables){
  // First, make sure jQuery is loaded on the page
if (typeof jQuery !== 'undefined' && typeof adobe !== 'undefined') {
    // Dynamically insert a DIV for breaking news at the very top
    // of the page (first element after <BODY> tag) and make it
    // hidden by default
    jQuery('<div id="breakingNews" class="mboxDefault" style="display:none"></div>').prependTo('body');
    // Retrieve the offer for the breaking news mbox
    adobe.target.getOffer({
        "mbox": "newsmbox",
        "params": {
            "a": 1
        },
        // Once the offer's been retrieved, apply it...
        "success": function(offer) {
            adobe.target.applyOffer({
                "mbox": "newsmbox",
                "selector": "div#breakingNews",
                "offer": offer
            });
            // and then un-hide the DIV.
            jQuery("div#breakingNews").css('display', 'block');
        },
        // Handle errors gracefully
        "error": function(status, error) {
        }
    });
}
});
