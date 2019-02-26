var scCid = window._sdi.util.getCookie('rh_omni_tc');
if (scCid !== '') {
  // find links on the page that lead to vts.inxpo.com
  //check in the current URLs for url parameters
  var updatedLink = '';
  var anchors = window.document.getElementsByTagName("a");
  for (var i = 0; i < anchors.length; i++) {
    if (((anchors[i].href.indexOf('vts.inxpo.com') > -1) || (anchors[i].href.indexOf('onlinexperiences.com') > -1)) && (anchors[i].href.toLowerCase().indexOf('affiliatedata=') == -1)) {
      updatedLink = window._sdi.util.appendQuery(anchors[i].href, 'affiliatedata', scCid);
      if (updatedLink !== '') {
        anchors[i].href = updatedLink;
      }
    }
  }
}
