/* Source and licensing information for the line(s) below can be found at https://www.redhat.com/profiles/rh/modules/redhat_www_menu/js/rh_nav.js. */
(function($,Drupal){"use strict";Drupal.behaviors.redhat_www_menu={attach:function(context,settings){$(document.body,context).once('redhat_www_menu',function(){var $navWrap=$('#main-nav-wrap',context),$subnav=$('.main-subnav',context),$subnavContainer=$('div.main-subnav div.container',context),$menus=$('#main-nav li',context),$body=$('body',context),$window=$(window),target_opened=-1,closeCurrentSubnav=function(){$subnav.find('.subnav-open').removeClass('subnav-open');$menus.removeClass('main-active')},openTargetSubnav=function($clicked,$target){$target.addClass('subnav-open');$clicked.parent().addClass('main-active')},collapseSubnav=function(){$subnav.removeAttr('style');$body.removeClass('nav-open')},openSubnav=function(){var elementHeights=$('.sub-menu',context).map(function(){return $(this).outerHeight()}).get(),maxHeight=Math.max.apply(null,elementHeights);$subnav.css('height',maxHeight);$body.addClass('nav-open')},resetNavigation=function(){closeCurrentSubnav();collapseSubnav()},subnavHandler=function($target,$menus,target_opened,$body,$clicked,index){if($target.hasClass('subnav-open')){resetNavigation()}else if($menus.hasClass('main-active')){closeCurrentSubnav();if(target_opened===index){if($body.hasClass('nav-open'))collapseSubnav()}else{openTargetSubnav($clicked,$target);target_opened=index}}else{openSubnav();openTargetSubnav($clicked,$target);target_opened=index}};$window.on('scroll',function(){if($window.height()>600)if($body.hasClass('nav-open'))resetNavigation()});$subnav.on('click',function(e){e.stopPropagation()});var globalHandler=function(e){e.preventDefault();var $globeContainer=$('#globe-panel .utility-content'),$mobileContainer=$('#global-tray'),urlBase=window.location.protocol+'//'+window.location.hostname+Drupal.settings.basePath+Drupal.settings.pathPrefix,successCb=function(data){if(data&&typeof data!=='undefined'&&data!==null){$globeContainer.html($(data).filter('.globe-tray'));$mobileContainer.html($(data).filter('.mobile-globe-tray')).find('.tray').addClass('collapse').collapse({toggle:false});$window.trigger('resize').trigger('resize.PanelResize')}},errorCb=function(){$.ajax({url:urlBase+'redhat_www_menu/ajax/global',method:'GET',dataType:'html',success:successCb})},dataParams={path:Drupal.settings.redhat_www_menu.path};if(window.location.search.match(/(?:\?|&)redhat_www_menu_ajax_fail/))dataParams.redhat_www_menu_ajax_fail=1;if($globeContainer.children().length<1)$.ajax({url:urlBase+'redhat_www_menu/ajax/global',method:'GET',data:dataParams,dataType:'html',success:successCb,error:errorCb})};$('#utility-globe a',context).on('click',globalHandler);$('#mobile-utility-nav',context).on('click',function(e){if($(e.target).hasClass('global'))globalHandler(e)});$('nav#main-nav a',context).on('click',function(e){var $clicked=$(this),index=$clicked.parent().index();if($window.width()>=768){if($subnavContainer.children().length<1){$.ajax({url:window.location.protocol+'//'+window.location.hostname+Drupal.settings.basePath+Drupal.settings.pathPrefix+'redhat_www_menu/ajax/menus',method:'GET',dataType:'html',success:function(data){if(data)if(typeof data!=='undefined'&&data!==null){$subnavContainer.html(data);var $target=$('div.sub-menu',$subnav).eq(index);subnavHandler($target,$menus,target_opened,$body,$clicked,index)}}})}else{var $target=$('div.sub-menu',$subnav).eq(index);subnavHandler($target,$menus,target_opened,$body,$clicked,index)};e.preventDefault();return false}});$(document).on('click',function(){if($window.width()>=768)resetNavigation()});var helper={lg:function(){return $window.width()>=1200},md:function(){return $window.width()>=992&&$window.width()<1200},sm:function(){return $window.width()>=768&&$window.width()<992},xs:function(){return $window.width()>=480&&$window.width()<768},xxs:function(){return $window.width()<480},getHeight:function(){return $window.height()},getWidth:function(){return $window.width()},getElHeight:function(element){var height=0;if($(element).length>0)height=$(element).outerHeight();return height},breakpoints:["xxs","xs","sm","md","lg"],isAtBreakpoint:function(bpString){var atBreakpoint=true;if(bpString){var bps=bpString.split(" ");atBreakpoint=false;$.each(bps,function(idx,bp){if($.inArray(bp,helper.breakpoints)>=0)if(helper[bp]())atBreakpoint=true})};return atBreakpoint},url:{root:window.location.hostname,path:window.location.pathname.split("/")}},toggle={attr:{toggleID:"data-rc-toggle-id",toggleTarget:"data-rc-toggle-target",state:"data-rc-state",expanded:"aria-expanded"},get:{target:function($trigger){var $target,bps,toggleID=$trigger.attr(toggle.attr.toggleID);if(typeof toggleID!=="undefined"&&toggleID!==""){$target=$("#"+toggleID,context);if($target.length<1)$target=undefined};if(typeof $target==="undefined"){$target=$trigger.siblings("["+toggle.attr.toggleTarget+"]");if($target.length<1)$target=undefined};if(typeof $target==="undefined"){$target=$trigger.children("["+toggle.attr.toggleTarget+"]");if($target.length<1)$target=undefined};if(typeof $target!=="undefined")bps=$target.attr(toggle.attr.toggleTarget);return{trigger:$trigger,target:$target,breakpoints:bps}},state:function($el){var state=$el.attr(toggle.attr.state);if(typeof state==="undefined")state=$el.attr("aria-expanded")?"open":"closed";return state}},state:{set:function($els,state){$.each($els,function(idx,$el){if(state==="open"){$el.attr(toggle.attr.state,"open").attr("aria-expanded",true)}else $el.attr(toggle.attr.state,"closed").attr("aria-expanded",false)})},check:function($el){var status=$el.attr(toggle.attr.state);if(status==="")status=$el.attr(toggle.attr.expanded)?"open":"closed";return status}},event:{reveal:function(props){toggle.state.set([props.target,props.trigger],"open")},hide:function(props){toggle.state.set([props.target,props.trigger],"closed")},change:function(props,change){var state=toggle.get.state(props.target);if(helper.isAtBreakpoint(props.breakpoints)){if(state==="closed"){change?this.reveal(props):this.hide(props)}else if(state==="open"){change?this.hide(props):this.reveal(props)}else this.reveal(props)}else this.reveal(props)}}};$("["+toggle.attr.state+"]",context).each(function(idx,val){var props=toggle.get.target($(val));if(typeof props.target!=="undefined"){toggle.event.change(props,false);props.trigger.click(function(){toggle.event.change(props,true)});props.trigger.keydown(function(event){if(event.which===13||event.which===32)toggle.event.change(props,true)})}});var resizeTimer;$window.on("resize",function(){resizeTimer&&clearTimeout(resizeTimer);resizeTimer=setTimeout(function(){$("["+toggle.attr.state+"]",context).each(function(idx,val){var props=toggle.get.target($(val));if(typeof props.target!=="undefined")helper.isAtBreakpoint(props.breakpoints)?toggle.event.change(props,false):toggle.event.reveal(props)})},250)})})}}})(jQuery,Drupal);;
/* Source and licensing information for the above line(s) can be found at https://www.redhat.com/profiles/rh/modules/redhat_www_menu/js/rh_nav.js. */
;/*})'"*/
/* Source and licensing information for the line(s) below can be found at https://www.redhat.com/profiles/rh/modules/redhat_www_share/js/rh_share.js. */
(function($){Drupal.behaviors.rh_sharePopup={attach:function(context,settings){if(typeof settings.redhat_www_share!=='undefined')$.each(settings.redhat_www_share,function(key,popup){$(context).on('click','a.redhat_www_share-'+key,function(e){$this=$(this);var options='';options+="width="+popup.window.width;options+=",height="+popup.window.height;options+=",menubar=no,resizeable=no,scrollbars=no,titlebar=no,toolbar=no,status=no,location=no";window.open($this.attr('href'),"redhat_www_share-"+key,options);e.preventDefault()})})}}})(jQuery);;
/* Source and licensing information for the above line(s) can be found at https://www.redhat.com/profiles/rh/modules/redhat_www_share/js/rh_share.js. */
;/*})'"*/
/*! jquery.cookie v1.4.1 | MIT */
!function(a){"function"==typeof define&&define.amd?define(["jquery"],a):"object"==typeof exports?a(require("jquery")):a(jQuery)}(function(a){function b(a){return h.raw?a:encodeURIComponent(a)}function c(a){return h.raw?a:decodeURIComponent(a)}function d(a){return b(h.json?JSON.stringify(a):String(a))}function e(a){0===a.indexOf('"')&&(a=a.slice(1,-1).replace(/\\"/g,'"').replace(/\\\\/g,"\\"));try{return a=decodeURIComponent(a.replace(g," ")),h.json?JSON.parse(a):a}catch(b){}}function f(b,c){var d=h.raw?b:e(b);return a.isFunction(c)?c(d):d}var g=/\+/g,h=a.cookie=function(e,g,i){if(void 0!==g&&!a.isFunction(g)){if(i=a.extend({},h.defaults,i),"number"==typeof i.expires){var j=i.expires,k=i.expires=new Date;k.setTime(+k+864e5*j)}return document.cookie=[b(e),"=",d(g),i.expires?"; expires="+i.expires.toUTCString():"",i.path?"; path="+i.path:"",i.domain?"; domain="+i.domain:"",i.secure?"; secure":""].join("")}for(var l=e?void 0:{},m=document.cookie?document.cookie.split("; "):[],n=0,o=m.length;o>n;n++){var p=m[n].split("="),q=c(p.shift()),r=p.join("=");if(e&&e===q){l=f(r,g);break}e||void 0===(r=f(r))||(l[q]=r)}return l};h.defaults={},a.removeCookie=function(b,c){return void 0===a.cookie(b)?!1:(a.cookie(b,"",a.extend({},c,{expires:-1})),!a.cookie(b))}});
;/*})'"*/
;/*})'"*/
/* Source and licensing information for the line(s) below can be found at https://www.redhat.com/profiles/rh/modules/redhat_www_solr/js/rh_solr.js. */
(function($){'use strict';Drupal.behaviors.rh_solr={attach:function(context,settings){$('#redhat-www-solr-search-box, #rh-search-form, .search-form',context).find('input[type=submit]').click(function(){if(!$.trim($(this).closest('form').find('input[name=keys]').val()).length)return false});$('a.resource-link, p.rh-article-teaser-link-view a',context).each(function(){$(this).text(this.origin+this.pathname)})}}})(jQuery);;
/* Source and licensing information for the above line(s) can be found at https://www.redhat.com/profiles/rh/modules/redhat_www_solr/js/rh_solr.js. */
;/*})'"*/
/* Source and licensing information for the line(s) below can be found at https://www.redhat.com/profiles/rh/modules/redhat_www_solr/js/redhat_www_solr_suggestions.js. */
(function($,Drupal){"use strict";Drupal.behaviors.redhat_www_solr_suggestions={attach:function(context,settings){$('body').once('redhat_www_solr_suggestions',function(){suggestionsInit('#search-form');suggestionsInit('#redhat-www-solr-search-box')})
function suggestionsInit(selector){var $form=$(selector),$wrapper=$form.find('.form-wrapper').first(),$input=$form.find('input[name="keys"]'),$container=$wrapper.find('.search-autocomplete__container'),$overlay=$form.find('.search-autocomplete__overlay'),xhr;if(!$overlay.length)$overlay=$('<div>').addClass('search-autocomplete__overlay').appendTo($form.parent());if(!$container.length)$container=$('<div>').addClass('search-autocomplete__container').appendTo($wrapper);$input.on('keyup',function(e){var keys=$(this).val().trim(),lang=Drupal.settings.basePath+Drupal.settings.pathPrefix,url=lang+'search/autocomplete/'+encodeURIComponent(keys);if(keys&&keys.length>=3&&keys!==$container.data('keys')){$container.data('keys',keys);if(xhr&&xhr.abort)xhr.abort();xhr=$.getJSON(url);xhr.then(function(data){var items=[];if(data&&data.results&&data.results.length){showSuggestions();for(var i=0;i<data.results.length;i++){var row=data.results[i],$div=$('<div>').addClass('search-autocomplete__item'),href=lang+'search/'+encodeURIComponent(row);$('<a>').attr('href',href).text(row).appendTo($div);items.push($div)};$container.empty().append(items)}else $container.data('keys',false)})}}).on('focus',function(e){if($container.data('keys')===$(this).val().trim())showSuggestions()}).on('blur',function(e){if(!$container.hasClass('search-autocomplete-container--active'))hideSuggestions()});$overlay.on('click',function(e){hideSuggestions()});$container.on('mouseenter',function(e){$(this).addClass('search-autocomplete-container--active')}).on('mouseleave',function(e){$(this).removeClass('search-autocomplete-container--active');if(!$input.is(':focus'))hideSuggestions()})
function hideSuggestions(){$overlay.fadeOut();$container.slideUp()}
function showSuggestions(){var $panel=$container.closest('#search-panel'),height=$panel.height(),timeout=$panel.length&&height===0?600:0;setTimeout(function(){if(height||height===0)$panel.data('height',height).height('auto');$container.slideDown();$overlay.fadeIn()},timeout)}}}}}(jQuery,Drupal));;
/* Source and licensing information for the above line(s) can be found at https://www.redhat.com/profiles/rh/modules/redhat_www_solr/js/redhat_www_solr_suggestions.js. */
;/*})'"*/
/* Modernizr 2.8.3 (Custom Build) | MIT & BSD
 * Build: http://modernizr.com/download/#-flexbox-shiv-cssclasses-testprop-testallprops-domprefixes-load
 */
;window.Modernizr=function(a,b,c){function x(a){j.cssText=a}function y(a,b){return x(prefixes.join(a+";")+(b||""))}function z(a,b){return typeof a===b}function A(a,b){return!!~(""+a).indexOf(b)}function B(a,b){for(var d in a){var e=a[d];if(!A(e,"-")&&j[e]!==c)return b=="pfx"?e:!0}return!1}function C(a,b,d){for(var e in a){var f=b[a[e]];if(f!==c)return d===!1?a[e]:z(f,"function")?f.bind(d||b):f}return!1}function D(a,b,c){var d=a.charAt(0).toUpperCase()+a.slice(1),e=(a+" "+n.join(d+" ")+d).split(" ");return z(b,"string")||z(b,"undefined")?B(e,b):(e=(a+" "+o.join(d+" ")+d).split(" "),C(e,b,c))}var d="2.8.3",e={},f=!0,g=b.documentElement,h="modernizr",i=b.createElement(h),j=i.style,k,l={}.toString,m="Webkit Moz O ms",n=m.split(" "),o=m.toLowerCase().split(" "),p={},q={},r={},s=[],t=s.slice,u,v={}.hasOwnProperty,w;!z(v,"undefined")&&!z(v.call,"undefined")?w=function(a,b){return v.call(a,b)}:w=function(a,b){return b in a&&z(a.constructor.prototype[b],"undefined")},Function.prototype.bind||(Function.prototype.bind=function(b){var c=this;if(typeof c!="function")throw new TypeError;var d=t.call(arguments,1),e=function(){if(this instanceof e){var a=function(){};a.prototype=c.prototype;var f=new a,g=c.apply(f,d.concat(t.call(arguments)));return Object(g)===g?g:f}return c.apply(b,d.concat(t.call(arguments)))};return e}),p.flexbox=function(){return D("flexWrap")};for(var E in p)w(p,E)&&(u=E.toLowerCase(),e[u]=p[E](),s.push((e[u]?"":"no-")+u));return e.addTest=function(a,b){if(typeof a=="object")for(var d in a)w(a,d)&&e.addTest(d,a[d]);else{a=a.toLowerCase();if(e[a]!==c)return e;b=typeof b=="function"?b():b,typeof f!="undefined"&&f&&(g.className+=" "+(b?"":"no-")+a),e[a]=b}return e},x(""),i=k=null,function(a,b){function l(a,b){var c=a.createElement("p"),d=a.getElementsByTagName("head")[0]||a.documentElement;return c.innerHTML="x<style>"+b+"</style>",d.insertBefore(c.lastChild,d.firstChild)}function m(){var a=s.elements;return typeof a=="string"?a.split(" "):a}function n(a){var b=j[a[h]];return b||(b={},i++,a[h]=i,j[i]=b),b}function o(a,c,d){c||(c=b);if(k)return c.createElement(a);d||(d=n(c));var g;return d.cache[a]?g=d.cache[a].cloneNode():f.test(a)?g=(d.cache[a]=d.createElem(a)).cloneNode():g=d.createElem(a),g.canHaveChildren&&!e.test(a)&&!g.tagUrn?d.frag.appendChild(g):g}function p(a,c){a||(a=b);if(k)return a.createDocumentFragment();c=c||n(a);var d=c.frag.cloneNode(),e=0,f=m(),g=f.length;for(;e<g;e++)d.createElement(f[e]);return d}function q(a,b){b.cache||(b.cache={},b.createElem=a.createElement,b.createFrag=a.createDocumentFragment,b.frag=b.createFrag()),a.createElement=function(c){return s.shivMethods?o(c,a,b):b.createElem(c)},a.createDocumentFragment=Function("h,f","return function(){var n=f.cloneNode(),c=n.createElement;h.shivMethods&&("+m().join().replace(/[\w\-]+/g,function(a){return b.createElem(a),b.frag.createElement(a),'c("'+a+'")'})+");return n}")(s,b.frag)}function r(a){a||(a=b);var c=n(a);return s.shivCSS&&!g&&!c.hasCSS&&(c.hasCSS=!!l(a,"article,aside,dialog,figcaption,figure,footer,header,hgroup,main,nav,section{display:block}mark{background:#FF0;color:#000}template{display:none}")),k||q(a,c),a}var c="3.7.0",d=a.html5||{},e=/^<|^(?:button|map|select|textarea|object|iframe|option|optgroup)$/i,f=/^(?:a|b|code|div|fieldset|h1|h2|h3|h4|h5|h6|i|label|li|ol|p|q|span|strong|style|table|tbody|td|th|tr|ul)$/i,g,h="_html5shiv",i=0,j={},k;(function(){try{var a=b.createElement("a");a.innerHTML="<xyz></xyz>",g="hidden"in a,k=a.childNodes.length==1||function(){b.createElement("a");var a=b.createDocumentFragment();return typeof a.cloneNode=="undefined"||typeof a.createDocumentFragment=="undefined"||typeof a.createElement=="undefined"}()}catch(c){g=!0,k=!0}})();var s={elements:d.elements||"abbr article aside audio bdi canvas data datalist details dialog figcaption figure footer header hgroup main mark meter nav output progress section summary template time video",version:c,shivCSS:d.shivCSS!==!1,supportsUnknownElements:k,shivMethods:d.shivMethods!==!1,type:"default",shivDocument:r,createElement:o,createDocumentFragment:p};a.html5=s,r(b)}(this,b),e._version=d,e._domPrefixes=o,e._cssomPrefixes=n,e.testProp=function(a){return B([a])},e.testAllProps=D,g.className=g.className.replace(/(^|\s)no-js(\s|$)/,"$1$2")+(f?" js "+s.join(" "):""),e}(this,this.document),function(a,b,c){function d(a){return"[object Function]"==o.call(a)}function e(a){return"string"==typeof a}function f(){}function g(a){return!a||"loaded"==a||"complete"==a||"uninitialized"==a}function h(){var a=p.shift();q=1,a?a.t?m(function(){("c"==a.t?B.injectCss:B.injectJs)(a.s,0,a.a,a.x,a.e,1)},0):(a(),h()):q=0}function i(a,c,d,e,f,i,j){function k(b){if(!o&&g(l.readyState)&&(u.r=o=1,!q&&h(),l.onload=l.onreadystatechange=null,b)){"img"!=a&&m(function(){t.removeChild(l)},50);for(var d in y[c])y[c].hasOwnProperty(d)&&y[c][d].onload()}}var j=j||B.errorTimeout,l=b.createElement(a),o=0,r=0,u={t:d,s:c,e:f,a:i,x:j};1===y[c]&&(r=1,y[c]=[]),"object"==a?l.data=c:(l.src=c,l.type=a),l.width=l.height="0",l.onerror=l.onload=l.onreadystatechange=function(){k.call(this,r)},p.splice(e,0,u),"img"!=a&&(r||2===y[c]?(t.insertBefore(l,s?null:n),m(k,j)):y[c].push(l))}function j(a,b,c,d,f){return q=0,b=b||"j",e(a)?i("c"==b?v:u,a,b,this.i++,c,d,f):(p.splice(this.i++,0,a),1==p.length&&h()),this}function k(){var a=B;return a.loader={load:j,i:0},a}var l=b.documentElement,m=a.setTimeout,n=b.getElementsByTagName("script")[0],o={}.toString,p=[],q=0,r="MozAppearance"in l.style,s=r&&!!b.createRange().compareNode,t=s?l:n.parentNode,l=a.opera&&"[object Opera]"==o.call(a.opera),l=!!b.attachEvent&&!l,u=r?"object":l?"script":"img",v=l?"script":u,w=Array.isArray||function(a){return"[object Array]"==o.call(a)},x=[],y={},z={timeout:function(a,b){return b.length&&(a.timeout=b[0]),a}},A,B;B=function(a){function b(a){var a=a.split("!"),b=x.length,c=a.pop(),d=a.length,c={url:c,origUrl:c,prefixes:a},e,f,g;for(f=0;f<d;f++)g=a[f].split("="),(e=z[g.shift()])&&(c=e(c,g));for(f=0;f<b;f++)c=x[f](c);return c}function g(a,e,f,g,h){var i=b(a),j=i.autoCallback;i.url.split(".").pop().split("?").shift(),i.bypass||(e&&(e=d(e)?e:e[a]||e[g]||e[a.split("/").pop().split("?")[0]]),i.instead?i.instead(a,e,f,g,h):(y[i.url]?i.noexec=!0:y[i.url]=1,f.load(i.url,i.forceCSS||!i.forceJS&&"css"==i.url.split(".").pop().split("?").shift()?"c":c,i.noexec,i.attrs,i.timeout),(d(e)||d(j))&&f.load(function(){k(),e&&e(i.origUrl,h,g),j&&j(i.origUrl,h,g),y[i.url]=2})))}function h(a,b){function c(a,c){if(a){if(e(a))c||(j=function(){var a=[].slice.call(arguments);k.apply(this,a),l()}),g(a,j,b,0,h);else if(Object(a)===a)for(n in m=function(){var b=0,c;for(c in a)a.hasOwnProperty(c)&&b++;return b}(),a)a.hasOwnProperty(n)&&(!c&&!--m&&(d(j)?j=function(){var a=[].slice.call(arguments);k.apply(this,a),l()}:j[n]=function(a){return function(){var b=[].slice.call(arguments);a&&a.apply(this,b),l()}}(k[n])),g(a[n],j,b,n,h))}else!c&&l()}var h=!!a.test,i=a.load||a.both,j=a.callback||f,k=j,l=a.complete||f,m,n;c(h?a.yep:a.nope,!!i),i&&c(i)}var i,j,l=this.yepnope.loader;if(e(a))g(a,0,l,0);else if(w(a))for(i=0;i<a.length;i++)j=a[i],e(j)?g(j,0,l,0):w(j)?B(j):Object(j)===j&&h(j,l);else Object(a)===a&&h(a,l)},B.addPrefix=function(a,b){z[a]=b},B.addFilter=function(a){x.push(a)},B.errorTimeout=1e4,null==b.readyState&&b.addEventListener&&(b.readyState="loading",b.addEventListener("DOMContentLoaded",A=function(){b.removeEventListener("DOMContentLoaded",A,0),b.readyState="complete"},0)),a.yepnope=k(),a.yepnope.executeStack=h,a.yepnope.injectJs=function(a,c,d,e,i,j){var k=b.createElement("script"),l,o,e=e||B.errorTimeout;k.src=a;for(o in d)k.setAttribute(o,d[o]);c=j?h:c||f,k.onreadystatechange=k.onload=function(){!l&&g(k.readyState)&&(l=1,c(),k.onload=k.onreadystatechange=null)},m(function(){l||(l=1,c(1))},e),i?k.onload():n.parentNode.insertBefore(k,n)},a.yepnope.injectCss=function(a,c,d,e,g,i){var e=b.createElement("link"),j,c=i?h:c||f;e.href=a,e.rel="stylesheet",e.type="text/css";for(j in d)e.setAttribute(j,d[j]);g||(n.parentNode.insertBefore(e,n),m(c,0))}}(this,document),Modernizr.load=function(){yepnope.apply(window,[].slice.call(arguments,0))};

;/*})'"*/
;/*})'"*/
/* Source and licensing information for the line(s) below can be found at https://www.redhat.com/profiles/rh/themes/redhatdotcom/js/jquery.pushmenu.js. */
(function($){$.fn.pushmenu=function(options){options=$.extend({open_easing:'easeOutCirc',open_height:250,open_speed:500,close_speed:500,close_easing:'easeOutCirc',slide_speed:300,slide_easing:'swing'},options);return this.each(function(){var $this=$(this),o=$.metadata?$.extend({},options,$this.metadata()):options,wraph=$(this).height();$this.find('.nav-links').each(function(i){var $thiseach=$(this),$subi=$this.find('.main-subnav').find(".container").find('.sub-menu:nth-child('+(i+1)+')').has('.sub-container');$thiseach.bind('click',function(){var $current=(i+1);if($this.find('#main-nav ul').has('li:nth-child('+$current+').main-active').length){$subi.animate({left:'-1000px'},{duration:o.slide_speed,easing:o.slide_easing});$this.stop(true,false).animate({height:wraph+'px'},{duration:o.close_speed,easing:o.close_easing});$subi.removeClass('group');$('body').removeClass('nav-open');$thiseach.removeClass('main-active');return false}else{$('body').addClass('nav-open');var subheight=$subi.outerHeight(true);if($subi.length){$this.animate({height:(subheight+50)+'px'},{duration:o.open_speed,easing:o.open_easing});$this.find('.main-subnav').find(".container").find('.sub-menu').not('.sub-menu:nth-child('+(i+1)+')').stop(true,false).animate({left:'-1000px'},{duration:o.slide_speed,easing:o.slide_easing,complete:function(){$this.find('.main-subnav').find('.container').find('.sub-menu').removeClass('group');$this.find('.nav-links').removeClass('main-active');$subi.addClass('group');$thiseach.addClass('main-active');if($subi.position().left<0)$subi.stop(true,false).animate({left:'0px'},{duration:o.slide_speed,easing:o.slide_easing});$(window).bind('scroll',function(){$('body').removeClass('nav-open');$this.removeClass('group');$this.stop(true,false).animate({height:wraph+'px'},{duration:10,easing:o.close_easing});$subi.animate({left:'-1000px'},{duration:o.slide_speed,easing:o.slide_easing});$this.find('.nav-links').removeClass('main-active')})},queue:false})}else $this.stop(true,false).animate({height:wraph+'px'},{duration:o.close_speed,easing:o.close_easing});return false}})});var $thissub=$this.find('.main-subnav').find('.container').find('.sub-menu')})}})(jQuery);;
/* Source and licensing information for the above line(s) can be found at https://www.redhat.com/profiles/rh/themes/redhatdotcom/js/jquery.pushmenu.js. */
;/*})'"*/
/* Source and licensing information for the line(s) below can be found at https://www.redhat.com/profiles/rh/themes/redhatdotcom/js/jquery-scrolltofixed.js. */
(function($){$.isScrollToFixed=function(el){return!!$(el).data('ScrollToFixed')};$.ScrollToFixed=function(el,options){var base=this;base.$el=$(el);base.el=el;base.$el.data('ScrollToFixed',base);var isReset=false,target=base.$el,position,originalPosition,originalOffset,offsetTop=0,offsetLeft=0,originalOffsetLeft=-1,lastOffsetLeft=-1,spacer=null,spacerClass,className
function resetScroll(){target.trigger('preUnfixed.ScrollToFixed');setUnfixed();target.trigger('unfixed.ScrollToFixed');lastOffsetLeft=-1;offsetTop=target.offset().top;offsetLeft=target.offset().left;if(base.options.offsets)offsetLeft+=(target.offset().left-target.position().left);if(originalOffsetLeft==-1)originalOffsetLeft=offsetLeft;position=target.css('position');isReset=true;if(base.options.bottom!=-1){target.trigger('preFixed.ScrollToFixed');setFixed();target.trigger('fixed.ScrollToFixed')}}
function getLimit(){var limit=base.options.limit;if(!limit)return 0;if(typeof limit==='function')return limit.apply(target);return limit}
function isFixed(){return position==='fixed'}
function isAbsolute(){return position==='absolute'}
function isUnfixed(){return!(isFixed()||isAbsolute())}
function setFixed(){if(!isFixed()){spacer.css({display:target.css('display'),width:target.outerWidth(true),height:target.outerHeight(true),'float':target.css('float')});cssOptions={position:'fixed',top:base.options.bottom==-1?getMarginTop():'',bottom:base.options.bottom==-1?'':base.options.bottom,'margin-left':'0px'};if(!base.options.dontSetWidth)cssOptions.width=target.width();target.css(cssOptions);target.addClass('scroll-to-fixed-fixed');if(base.options.className)target.addClass(base.options.className);position='fixed'}}
function setAbsolute(){var top=getLimit(),left=offsetLeft;if(base.options.removeOffsets){left=0;top=top-offsetTop};cssOptions={position:'absolute',top:top,left:left,'margin-left':'0px',bottom:''};if(!base.options.dontSetWidth)cssOptions.width=target.width();target.css(cssOptions);position='absolute'}
function setUnfixed(){if(!isUnfixed()){lastOffsetLeft=-1;spacer.css('display','none');target.css({width:'',position:originalPosition,left:'',top:originalOffset.top,'margin-left':''});target.removeClass('scroll-to-fixed-fixed');if(base.options.className)target.removeClass(base.options.className);position=null}}
function setLeft(x){if(x!=lastOffsetLeft){target.css('left',offsetLeft-x);lastOffsetLeft=x}}
function getMarginTop(){var marginTop=base.options.marginTop;if(!marginTop)return 0;if(typeof marginTop==='function')return marginTop.apply(target);return marginTop}
function checkScroll(){if(!$.isScrollToFixed(target))return;var wasReset=isReset;if(!isReset)resetScroll();var x=$(window).scrollLeft(),y=$(window).scrollTop(),limit=getLimit();if(base.options.minWidth&&$(window).width()<base.options.minWidth){if(!isUnfixed()||!wasReset){postPosition();target.trigger('preUnfixed.ScrollToFixed');setUnfixed();target.trigger('unfixed.ScrollToFixed')}}else if(base.options.bottom==-1){if(limit>0&&y>=limit-getMarginTop()){if(!isAbsolute()||!wasReset){postPosition();target.trigger('preAbsolute.ScrollToFixed');setAbsolute();target.trigger('unfixed.ScrollToFixed')}}else if(y>=offsetTop-getMarginTop()){if(!isFixed()||!wasReset){postPosition();target.trigger('preFixed.ScrollToFixed');setFixed();lastOffsetLeft=-1;target.trigger('fixed.ScrollToFixed')};setLeft(x)}else if(!isUnfixed()||!wasReset){postPosition();target.trigger('preUnfixed.ScrollToFixed');setUnfixed();target.trigger('unfixed.ScrollToFixed')}}else if(limit>0){if(y+$(window).height()-target.outerHeight(true)>=limit-(getMarginTop()||-getBottom())){if(isFixed()){postPosition();target.trigger('preUnfixed.ScrollToFixed');if(originalPosition==='absolute'){setAbsolute()}else setUnfixed();target.trigger('unfixed.ScrollToFixed')}}else{if(!isFixed()){postPosition();target.trigger('preFixed.ScrollToFixed');setFixed()};setLeft(x);target.trigger('fixed.ScrollToFixed')}}else setLeft(x)}
function getBottom(){if(!base.options.bottom)return 0;return base.options.bottom}
function postPosition(){var position=target.css('position');if(position=='absolute'){target.trigger('postAbsolute.ScrollToFixed')}else if(position=='fixed'){target.trigger('postFixed.ScrollToFixed')}else target.trigger('postUnfixed.ScrollToFixed')};var windowResize=function(event){if(target.is(':visible')){isReset=false;checkScroll()}},windowScroll=function(event){checkScroll()},isPositionFixedSupported=function(){var container=document.body;if(document.createElement&&container&&container.appendChild&&container.removeChild){var el=document.createElement('div');if(!el.getBoundingClientRect)return null;el.innerHTML='x';el.style.cssText='position:fixed;top:100px;';container.appendChild(el);var originalHeight=container.style.height,originalScrollTop=container.scrollTop;container.style.height='3000px';container.scrollTop=500;var elementTop=el.getBoundingClientRect().top;container.style.height=originalHeight;var isSupported=(elementTop===100);container.removeChild(el);container.scrollTop=originalScrollTop;return isSupported};return null},preventDefault=function(e){e=e||window.event;if(e.preventDefault)e.preventDefault();e.returnValue=false};base.init=function(){base.options=$.extend({},$.ScrollToFixed.defaultOptions,options);base.$el.css('z-index',base.options.zIndex);spacer=$('<div />');position=target.css('position');originalPosition=target.css('position');originalOffset=$.extend({},target.offset());if(isUnfixed())base.$el.after(spacer);$(window).bind('resize.ScrollToFixed',windowResize);$(window).bind('scroll.ScrollToFixed',windowScroll);if(base.options.preFixed)target.bind('preFixed.ScrollToFixed',base.options.preFixed);if(base.options.postFixed)target.bind('postFixed.ScrollToFixed',base.options.postFixed);if(base.options.preUnfixed)target.bind('preUnfixed.ScrollToFixed',base.options.preUnfixed);if(base.options.postUnfixed)target.bind('postUnfixed.ScrollToFixed',base.options.postUnfixed);if(base.options.preAbsolute)target.bind('preAbsolute.ScrollToFixed',base.options.preAbsolute);if(base.options.postAbsolute)target.bind('postAbsolute.ScrollToFixed',base.options.postAbsolute);if(base.options.fixed)target.bind('fixed.ScrollToFixed',base.options.fixed);if(base.options.unfixed)target.bind('unfixed.ScrollToFixed',base.options.unfixed);if(base.options.spacerClass)spacer.addClass(base.options.spacerClass);target.bind('resize.ScrollToFixed',function(){spacer.height(target.height())});target.bind('scroll.ScrollToFixed',function(){target.trigger('preUnfixed.ScrollToFixed');setUnfixed();target.trigger('unfixed.ScrollToFixed');checkScroll()});target.bind('detach.ScrollToFixed',function(ev){preventDefault(ev);target.trigger('preUnfixed.ScrollToFixed');setUnfixed();target.trigger('unfixed.ScrollToFixed');$(window).unbind('resize.ScrollToFixed',windowResize);$(window).unbind('scroll.ScrollToFixed',windowScroll);target.unbind('.ScrollToFixed');base.$el.removeData('ScrollToFixed')});windowResize()};base.init()};$.ScrollToFixed.defaultOptions={marginTop:1,limit:0,bottom:-1,zIndex:1e3};$.fn.scrollToFixed=function(options){return this.each(function(){(new $.ScrollToFixed(this,options))})}})(jQuery);;
/* Source and licensing information for the above line(s) can be found at https://www.redhat.com/profiles/rh/themes/redhatdotcom/js/jquery-scrolltofixed.js. */
;/*})'"*/
// Generated by CoffeeScript 1.6.2
/*
jQuery Waypoints - v2.0.4
Copyright (c) 2011-2014 Caleb Troughton
Dual licensed under the MIT license and GPL license.
https://github.com/imakewebthings/jquery-waypoints/blob/master/licenses.txt
*/
(function(){var t=[].indexOf||function(t){for(var e=0,n=this.length;e<n;e++){if(e in this&&this[e]===t)return e}return-1},e=[].slice;(function(t,e){if(typeof define==="function"&&define.amd){return define("waypoints",["jquery"],function(n){return e(n,t)})}else{return e(t.jQuery,t)}})(this,function(n,r){var i,o,l,s,f,u,c,a,h,d,p,y,v,w,g,m;i=n(r);a=t.call(r,"ontouchstart")>=0;s={horizontal:{},vertical:{}};f=1;c={};u="waypoints-context-id";p="resize.waypoints";y="scroll.waypoints";v=1;w="waypoints-waypoint-ids";g="waypoint";m="waypoints";o=function(){function t(t){var e=this;this.$element=t;this.element=t[0];this.didResize=false;this.didScroll=false;this.id="context"+f++;this.oldScroll={x:t.scrollLeft(),y:t.scrollTop()};this.waypoints={horizontal:{},vertical:{}};this.element[u]=this.id;c[this.id]=this;t.bind(y,function(){var t;if(!(e.didScroll||a)){e.didScroll=true;t=function(){e.doScroll();return e.didScroll=false};return r.setTimeout(t,n[m].settings.scrollThrottle)}});t.bind(p,function(){var t;if(!e.didResize){e.didResize=true;t=function(){n[m]("refresh");return e.didResize=false};return r.setTimeout(t,n[m].settings.resizeThrottle)}})}t.prototype.doScroll=function(){var t,e=this;t={horizontal:{newScroll:this.$element.scrollLeft(),oldScroll:this.oldScroll.x,forward:"right",backward:"left"},vertical:{newScroll:this.$element.scrollTop(),oldScroll:this.oldScroll.y,forward:"down",backward:"up"}};if(a&&(!t.vertical.oldScroll||!t.vertical.newScroll)){n[m]("refresh")}n.each(t,function(t,r){var i,o,l;l=[];o=r.newScroll>r.oldScroll;i=o?r.forward:r.backward;n.each(e.waypoints[t],function(t,e){var n,i;if(r.oldScroll<(n=e.offset)&&n<=r.newScroll){return l.push(e)}else if(r.newScroll<(i=e.offset)&&i<=r.oldScroll){return l.push(e)}});l.sort(function(t,e){return t.offset-e.offset});if(!o){l.reverse()}return n.each(l,function(t,e){if(e.options.continuous||t===l.length-1){return e.trigger([i])}})});return this.oldScroll={x:t.horizontal.newScroll,y:t.vertical.newScroll}};t.prototype.refresh=function(){var t,e,r,i=this;r=n.isWindow(this.element);e=this.$element.offset();this.doScroll();t={horizontal:{contextOffset:r?0:e.left,contextScroll:r?0:this.oldScroll.x,contextDimension:this.$element.width(),oldScroll:this.oldScroll.x,forward:"right",backward:"left",offsetProp:"left"},vertical:{contextOffset:r?0:e.top,contextScroll:r?0:this.oldScroll.y,contextDimension:r?n[m]("viewportHeight"):this.$element.height(),oldScroll:this.oldScroll.y,forward:"down",backward:"up",offsetProp:"top"}};return n.each(t,function(t,e){return n.each(i.waypoints[t],function(t,r){var i,o,l,s,f;i=r.options.offset;l=r.offset;o=n.isWindow(r.element)?0:r.$element.offset()[e.offsetProp];if(n.isFunction(i)){i=i.apply(r.element)}else if(typeof i==="string"){i=parseFloat(i);if(r.options.offset.indexOf("%")>-1){i=Math.ceil(e.contextDimension*i/100)}}r.offset=o-e.contextOffset+e.contextScroll-i;if(r.options.onlyOnScroll&&l!=null||!r.enabled){return}if(l!==null&&l<(s=e.oldScroll)&&s<=r.offset){return r.trigger([e.backward])}else if(l!==null&&l>(f=e.oldScroll)&&f>=r.offset){return r.trigger([e.forward])}else if(l===null&&e.oldScroll>=r.offset){return r.trigger([e.forward])}})})};t.prototype.checkEmpty=function(){if(n.isEmptyObject(this.waypoints.horizontal)&&n.isEmptyObject(this.waypoints.vertical)){this.$element.unbind([p,y].join(" "));return delete c[this.id]}};return t}();l=function(){function t(t,e,r){var i,o;r=n.extend({},n.fn[g].defaults,r);if(r.offset==="bottom-in-view"){r.offset=function(){var t;t=n[m]("viewportHeight");if(!n.isWindow(e.element)){t=e.$element.height()}return t-n(this).outerHeight()}}this.$element=t;this.element=t[0];this.axis=r.horizontal?"horizontal":"vertical";this.callback=r.handler;this.context=e;this.enabled=r.enabled;this.id="waypoints"+v++;this.offset=null;this.options=r;e.waypoints[this.axis][this.id]=this;s[this.axis][this.id]=this;i=(o=this.element[w])!=null?o:[];i.push(this.id);this.element[w]=i}t.prototype.trigger=function(t){if(!this.enabled){return}if(this.callback!=null){this.callback.apply(this.element,t)}if(this.options.triggerOnce){return this.destroy()}};t.prototype.disable=function(){return this.enabled=false};t.prototype.enable=function(){this.context.refresh();return this.enabled=true};t.prototype.destroy=function(){delete s[this.axis][this.id];delete this.context.waypoints[this.axis][this.id];return this.context.checkEmpty()};t.getWaypointsByElement=function(t){var e,r;r=t[w];if(!r){return[]}e=n.extend({},s.horizontal,s.vertical);return n.map(r,function(t){return e[t]})};return t}();d={init:function(t,e){var r;if(e==null){e={}}if((r=e.handler)==null){e.handler=t}this.each(function(){var t,r,i,s;t=n(this);i=(s=e.context)!=null?s:n.fn[g].defaults.context;if(!n.isWindow(i)){i=t.closest(i)}i=n(i);r=c[i[0][u]];if(!r){r=new o(i)}return new l(t,r,e)});n[m]("refresh");return this},disable:function(){return d._invoke.call(this,"disable")},enable:function(){return d._invoke.call(this,"enable")},destroy:function(){return d._invoke.call(this,"destroy")},prev:function(t,e){return d._traverse.call(this,t,e,function(t,e,n){if(e>0){return t.push(n[e-1])}})},next:function(t,e){return d._traverse.call(this,t,e,function(t,e,n){if(e<n.length-1){return t.push(n[e+1])}})},_traverse:function(t,e,i){var o,l;if(t==null){t="vertical"}if(e==null){e=r}l=h.aggregate(e);o=[];this.each(function(){var e;e=n.inArray(this,l[t]);return i(o,e,l[t])});return this.pushStack(o)},_invoke:function(t){this.each(function(){var e;e=l.getWaypointsByElement(this);return n.each(e,function(e,n){n[t]();return true})});return this}};n.fn[g]=function(){var t,r;r=arguments[0],t=2<=arguments.length?e.call(arguments,1):[];if(d[r]){return d[r].apply(this,t)}else if(n.isFunction(r)){return d.init.apply(this,arguments)}else if(n.isPlainObject(r)){return d.init.apply(this,[null,r])}else if(!r){return n.error("jQuery Waypoints needs a callback function or handler option.")}else{return n.error("The "+r+" method does not exist in jQuery Waypoints.")}};n.fn[g].defaults={context:r,continuous:true,enabled:true,horizontal:false,offset:0,triggerOnce:false};h={refresh:function(){return n.each(c,function(t,e){return e.refresh()})},viewportHeight:function(){var t;return(t=r.innerHeight)!=null?t:i.height()},aggregate:function(t){var e,r,i;e=s;if(t){e=(i=c[n(t)[0][u]])!=null?i.waypoints:void 0}if(!e){return[]}r={horizontal:[],vertical:[]};n.each(r,function(t,i){n.each(e[t],function(t,e){return i.push(e)});i.sort(function(t,e){return t.offset-e.offset});r[t]=n.map(i,function(t){return t.element});return r[t]=n.unique(r[t])});return r},above:function(t){if(t==null){t=r}return h._filter(t,"vertical",function(t,e){return e.offset<=t.oldScroll.y})},below:function(t){if(t==null){t=r}return h._filter(t,"vertical",function(t,e){return e.offset>t.oldScroll.y})},left:function(t){if(t==null){t=r}return h._filter(t,"horizontal",function(t,e){return e.offset<=t.oldScroll.x})},right:function(t){if(t==null){t=r}return h._filter(t,"horizontal",function(t,e){return e.offset>t.oldScroll.x})},enable:function(){return h._invoke("enable")},disable:function(){return h._invoke("disable")},destroy:function(){return h._invoke("destroy")},extendFn:function(t,e){return d[t]=e},_invoke:function(t){var e;e=n.extend({},s.vertical,s.horizontal);return n.each(e,function(e,n){n[t]();return true})},_filter:function(t,e,r){var i,o;i=c[n(t)[0][u]];if(!i){return[]}o=[];n.each(i.waypoints[e],function(t,e){if(r(i,e)){return o.push(e)}});o.sort(function(t,e){return t.offset-e.offset});return n.map(o,function(t){return t.element})}};n[m]=function(){var t,n;n=arguments[0],t=2<=arguments.length?e.call(arguments,1):[];if(h[n]){return h[n].apply(null,t)}else{return h.aggregate.call(null,n)}};n[m].settings={resizeThrottle:100,scrollThrottle:30};return i.load(function(){return n[m]("refresh")})})}).call(this);
;/*})'"*/
;/*})'"*/
/*!
 * Bootstrap v3.1.0 (http://getbootstrap.com)
 * Copyright 2011-2014 Twitter, Inc.
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
 */
if("undefined"==typeof jQuery)throw new Error("Bootstrap requires jQuery");+function(a){"use strict";function b(){var a=document.createElement("bootstrap"),b={WebkitTransition:"webkitTransitionEnd",MozTransition:"transitionend",OTransition:"oTransitionEnd otransitionend",transition:"transitionend"};for(var c in b)if(void 0!==a.style[c])return{end:b[c]};return!1}a.fn.emulateTransitionEnd=function(b){var c=!1,d=this;a(this).one(a.support.transition.end,function(){c=!0});var e=function(){c||a(d).trigger(a.support.transition.end)};return setTimeout(e,b),this},a(function(){a.support.transition=b()})}(jQuery),+function(a){"use strict";var b='[data-dismiss="alert"]',c=function(c){a(c).on("click",b,this.close)};c.prototype.close=function(b){function c(){f.trigger("closed.bs.alert").remove()}var d=a(this),e=d.attr("data-target");e||(e=d.attr("href"),e=e&&e.replace(/.*(?=#[^\s]*$)/,""));var f=a(e);b&&b.preventDefault(),f.length||(f=d.hasClass("alert")?d:d.parent()),f.trigger(b=a.Event("close.bs.alert")),b.isDefaultPrevented()||(f.removeClass("in"),a.support.transition&&f.hasClass("fade")?f.one(a.support.transition.end,c).emulateTransitionEnd(150):c())};var d=a.fn.alert;a.fn.alert=function(b){return this.each(function(){var d=a(this),e=d.data("bs.alert");e||d.data("bs.alert",e=new c(this)),"string"==typeof b&&e[b].call(d)})},a.fn.alert.Constructor=c,a.fn.alert.noConflict=function(){return a.fn.alert=d,this},a(document).on("click.bs.alert.data-api",b,c.prototype.close)}(jQuery),+function(a){"use strict";var b=function(c,d){this.$element=a(c),this.options=a.extend({},b.DEFAULTS,d),this.isLoading=!1};b.DEFAULTS={loadingText:"loading..."},b.prototype.setState=function(b){var c="disabled",d=this.$element,e=d.is("input")?"val":"html",f=d.data();b+="Text",f.resetText||d.data("resetText",d[e]()),d[e](f[b]||this.options[b]),setTimeout(a.proxy(function(){"loadingText"==b?(this.isLoading=!0,d.addClass(c).attr(c,c)):this.isLoading&&(this.isLoading=!1,d.removeClass(c).removeAttr(c))},this),0)},b.prototype.toggle=function(){var a=!0,b=this.$element.closest('[data-toggle="buttons"]');if(b.length){var c=this.$element.find("input");"radio"==c.prop("type")&&(c.prop("checked")&&this.$element.hasClass("active")?a=!1:b.find(".active").removeClass("active")),a&&c.prop("checked",!this.$element.hasClass("active")).trigger("change")}a&&this.$element.toggleClass("active")};var c=a.fn.button;a.fn.button=function(c){return this.each(function(){var d=a(this),e=d.data("bs.button"),f="object"==typeof c&&c;e||d.data("bs.button",e=new b(this,f)),"toggle"==c?e.toggle():c&&e.setState(c)})},a.fn.button.Constructor=b,a.fn.button.noConflict=function(){return a.fn.button=c,this},a(document).on("click.bs.button.data-api","[data-toggle^=button]",function(b){var c=a(b.target);c.hasClass("btn")||(c=c.closest(".btn")),c.button("toggle"),b.preventDefault()})}(jQuery),+function(a){"use strict";var b=function(b,c){this.$element=a(b),this.$indicators=this.$element.find(".carousel-indicators"),this.options=c,this.paused=this.sliding=this.interval=this.$active=this.$items=null,"hover"==this.options.pause&&this.$element.on("mouseenter",a.proxy(this.pause,this)).on("mouseleave",a.proxy(this.cycle,this))};b.DEFAULTS={interval:5e3,pause:"hover",wrap:!0},b.prototype.cycle=function(b){return b||(this.paused=!1),this.interval&&clearInterval(this.interval),this.options.interval&&!this.paused&&(this.interval=setInterval(a.proxy(this.next,this),this.options.interval)),this},b.prototype.getActiveIndex=function(){return this.$active=this.$element.find(".item.active"),this.$items=this.$active.parent().children(),this.$items.index(this.$active)},b.prototype.to=function(b){var c=this,d=this.getActiveIndex();return b>this.$items.length-1||0>b?void 0:this.sliding?this.$element.one("slid.bs.carousel",function(){c.to(b)}):d==b?this.pause().cycle():this.slide(b>d?"next":"prev",a(this.$items[b]))},b.prototype.pause=function(b){return b||(this.paused=!0),this.$element.find(".next, .prev").length&&a.support.transition&&(this.$element.trigger(a.support.transition.end),this.cycle(!0)),this.interval=clearInterval(this.interval),this},b.prototype.next=function(){return this.sliding?void 0:this.slide("next")},b.prototype.prev=function(){return this.sliding?void 0:this.slide("prev")},b.prototype.slide=function(b,c){var d=this.$element.find(".item.active"),e=c||d[b](),f=this.interval,g="next"==b?"left":"right",h="next"==b?"first":"last",i=this;if(!e.length){if(!this.options.wrap)return;e=this.$element.find(".item")[h]()}if(e.hasClass("active"))return this.sliding=!1;var j=a.Event("slide.bs.carousel",{relatedTarget:e[0],direction:g});return this.$element.trigger(j),j.isDefaultPrevented()?void 0:(this.sliding=!0,f&&this.pause(),this.$indicators.length&&(this.$indicators.find(".active").removeClass("active"),this.$element.one("slid.bs.carousel",function(){var b=a(i.$indicators.children()[i.getActiveIndex()]);b&&b.addClass("active")})),a.support.transition&&this.$element.hasClass("slide")?(e.addClass(b),e[0].offsetWidth,d.addClass(g),e.addClass(g),d.one(a.support.transition.end,function(){e.removeClass([b,g].join(" ")).addClass("active"),d.removeClass(["active",g].join(" ")),i.sliding=!1,setTimeout(function(){i.$element.trigger("slid.bs.carousel")},0)}).emulateTransitionEnd(1e3*d.css("transition-duration").slice(0,-1))):(d.removeClass("active"),e.addClass("active"),this.sliding=!1,this.$element.trigger("slid.bs.carousel")),f&&this.cycle(),this)};var c=a.fn.carousel;a.fn.carousel=function(c){return this.each(function(){var d=a(this),e=d.data("bs.carousel"),f=a.extend({},b.DEFAULTS,d.data(),"object"==typeof c&&c),g="string"==typeof c?c:f.slide;e||d.data("bs.carousel",e=new b(this,f)),"number"==typeof c?e.to(c):g?e[g]():f.interval&&e.pause().cycle()})},a.fn.carousel.Constructor=b,a.fn.carousel.noConflict=function(){return a.fn.carousel=c,this},a(document).on("click.bs.carousel.data-api","[data-slide], [data-slide-to]",function(b){var c,d=a(this),e=a(d.attr("data-target")||(c=d.attr("href"))&&c.replace(/.*(?=#[^\s]+$)/,"")),f=a.extend({},e.data(),d.data()),g=d.attr("data-slide-to");g&&(f.interval=!1),e.carousel(f),(g=d.attr("data-slide-to"))&&e.data("bs.carousel").to(g),b.preventDefault()}),a(window).on("load",function(){a('[data-ride="carousel"]').each(function(){var b=a(this);b.carousel(b.data())})})}(jQuery),+function(a){"use strict";var b=function(c,d){this.$element=a(c),this.options=a.extend({},b.DEFAULTS,d),this.transitioning=null,this.options.parent&&(this.$parent=a(this.options.parent)),this.options.toggle&&this.toggle()};b.DEFAULTS={toggle:!0},b.prototype.dimension=function(){var a=this.$element.hasClass("width");return a?"width":"height"},b.prototype.show=function(){if(!this.transitioning&&!this.$element.hasClass("in")){var b=a.Event("show.bs.collapse");if(this.$element.trigger(b),!b.isDefaultPrevented()){var c=this.$parent&&this.$parent.find("> .panel > .in");if(c&&c.length){var d=c.data("bs.collapse");if(d&&d.transitioning)return;c.collapse("hide"),d||c.data("bs.collapse",null)}var e=this.dimension();this.$element.removeClass("collapse").addClass("collapsing")[e](0),this.transitioning=1;var f=function(){this.$element.removeClass("collapsing").addClass("collapse in")[e]("auto"),this.transitioning=0,this.$element.trigger("shown.bs.collapse")};if(!a.support.transition)return f.call(this);var g=a.camelCase(["scroll",e].join("-"));this.$element.one(a.support.transition.end,a.proxy(f,this)).emulateTransitionEnd(350)[e](this.$element[0][g])}}},b.prototype.hide=function(){if(!this.transitioning&&this.$element.hasClass("in")){var b=a.Event("hide.bs.collapse");if(this.$element.trigger(b),!b.isDefaultPrevented()){var c=this.dimension();this.$element[c](this.$element[c]())[0].offsetHeight,this.$element.addClass("collapsing").removeClass("collapse").removeClass("in"),this.transitioning=1;var d=function(){this.transitioning=0,this.$element.trigger("hidden.bs.collapse").removeClass("collapsing").addClass("collapse")};return a.support.transition?void this.$element[c](0).one(a.support.transition.end,a.proxy(d,this)).emulateTransitionEnd(350):d.call(this)}}},b.prototype.toggle=function(){this[this.$element.hasClass("in")?"hide":"show"]()};var c=a.fn.collapse;a.fn.collapse=function(c){return this.each(function(){var d=a(this),e=d.data("bs.collapse"),f=a.extend({},b.DEFAULTS,d.data(),"object"==typeof c&&c);!e&&f.toggle&&"show"==c&&(c=!c),e||d.data("bs.collapse",e=new b(this,f)),"string"==typeof c&&e[c]()})},a.fn.collapse.Constructor=b,a.fn.collapse.noConflict=function(){return a.fn.collapse=c,this},a(document).on("click.bs.collapse.data-api","[data-toggle=collapse]",function(b){var c,d=a(this),e=d.attr("data-target")||b.preventDefault()||(c=d.attr("href"))&&c.replace(/.*(?=#[^\s]+$)/,""),f=a(e),g=f.data("bs.collapse"),h=g?"toggle":d.data(),i=d.attr("data-parent"),j=i&&a(i);g&&g.transitioning||(j&&j.find('[data-toggle=collapse][data-parent="'+i+'"]').not(d).addClass("collapsed"),d[f.hasClass("in")?"addClass":"removeClass"]("collapsed")),f.collapse(h)})}(jQuery),+function(a){"use strict";function b(b){a(d).remove(),a(e).each(function(){var d=c(a(this)),e={relatedTarget:this};d.hasClass("open")&&(d.trigger(b=a.Event("hide.bs.dropdown",e)),b.isDefaultPrevented()||d.removeClass("open").trigger("hidden.bs.dropdown",e))})}function c(b){var c=b.attr("data-target");c||(c=b.attr("href"),c=c&&/#[A-Za-z]/.test(c)&&c.replace(/.*(?=#[^\s]*$)/,""));var d=c&&a(c);return d&&d.length?d:b.parent()}var d=".dropdown-backdrop",e="[data-toggle=dropdown]",f=function(b){a(b).on("click.bs.dropdown",this.toggle)};f.prototype.toggle=function(d){var e=a(this);if(!e.is(".disabled, :disabled")){var f=c(e),g=f.hasClass("open");if(b(),!g){"ontouchstart"in document.documentElement&&!f.closest(".navbar-nav").length&&a('<div class="dropdown-backdrop"/>').insertAfter(a(this)).on("click",b);var h={relatedTarget:this};if(f.trigger(d=a.Event("show.bs.dropdown",h)),d.isDefaultPrevented())return;f.toggleClass("open").trigger("shown.bs.dropdown",h),e.focus()}return!1}},f.prototype.keydown=function(b){if(/(38|40|27)/.test(b.keyCode)){var d=a(this);if(b.preventDefault(),b.stopPropagation(),!d.is(".disabled, :disabled")){var f=c(d),g=f.hasClass("open");if(!g||g&&27==b.keyCode)return 27==b.which&&f.find(e).focus(),d.click();var h=" li:not(.divider):visible a",i=f.find("[role=menu]"+h+", [role=listbox]"+h);if(i.length){var j=i.index(i.filter(":focus"));38==b.keyCode&&j>0&&j--,40==b.keyCode&&j<i.length-1&&j++,~j||(j=0),i.eq(j).focus()}}}};var g=a.fn.dropdown;a.fn.dropdown=function(b){return this.each(function(){var c=a(this),d=c.data("bs.dropdown");d||c.data("bs.dropdown",d=new f(this)),"string"==typeof b&&d[b].call(c)})},a.fn.dropdown.Constructor=f,a.fn.dropdown.noConflict=function(){return a.fn.dropdown=g,this},a(document).on("click.bs.dropdown.data-api",b).on("click.bs.dropdown.data-api",".dropdown form",function(a){a.stopPropagation()}).on("click.bs.dropdown.data-api",e,f.prototype.toggle).on("keydown.bs.dropdown.data-api",e+", [role=menu], [role=listbox]",f.prototype.keydown)}(jQuery),+function(a){"use strict";var b=function(b,c){this.options=c,this.$element=a(b),this.$backdrop=this.isShown=null,this.options.remote&&this.$element.find(".modal-content").load(this.options.remote,a.proxy(function(){this.$element.trigger("loaded.bs.modal")},this))};b.DEFAULTS={backdrop:!0,keyboard:!0,show:!0},b.prototype.toggle=function(a){return this[this.isShown?"hide":"show"](a)},b.prototype.show=function(b){var c=this,d=a.Event("show.bs.modal",{relatedTarget:b});this.$element.trigger(d),this.isShown||d.isDefaultPrevented()||(this.isShown=!0,this.escape(),this.$element.on("click.dismiss.bs.modal",'[data-dismiss="modal"]',a.proxy(this.hide,this)),this.backdrop(function(){var d=a.support.transition&&c.$element.hasClass("fade");c.$element.parent().length||c.$element.appendTo(document.body),c.$element.show().scrollTop(0),d&&c.$element[0].offsetWidth,c.$element.addClass("in").attr("aria-hidden",!1),c.enforceFocus();var e=a.Event("shown.bs.modal",{relatedTarget:b});d?c.$element.find(".modal-dialog").one(a.support.transition.end,function(){c.$element.focus().trigger(e)}).emulateTransitionEnd(300):c.$element.focus().trigger(e)}))},b.prototype.hide=function(b){b&&b.preventDefault(),b=a.Event("hide.bs.modal"),this.$element.trigger(b),this.isShown&&!b.isDefaultPrevented()&&(this.isShown=!1,this.escape(),a(document).off("focusin.bs.modal"),this.$element.removeClass("in").attr("aria-hidden",!0).off("click.dismiss.bs.modal"),a.support.transition&&this.$element.hasClass("fade")?this.$element.one(a.support.transition.end,a.proxy(this.hideModal,this)).emulateTransitionEnd(300):this.hideModal())},b.prototype.enforceFocus=function(){a(document).off("focusin.bs.modal").on("focusin.bs.modal",a.proxy(function(a){this.$element[0]===a.target||this.$element.has(a.target).length||this.$element.focus()},this))},b.prototype.escape=function(){this.isShown&&this.options.keyboard?this.$element.on("keyup.dismiss.bs.modal",a.proxy(function(a){27==a.which&&this.hide()},this)):this.isShown||this.$element.off("keyup.dismiss.bs.modal")},b.prototype.hideModal=function(){var a=this;this.$element.hide(),this.backdrop(function(){a.removeBackdrop(),a.$element.trigger("hidden.bs.modal")})},b.prototype.removeBackdrop=function(){this.$backdrop&&this.$backdrop.remove(),this.$backdrop=null},b.prototype.backdrop=function(b){var c=this.$element.hasClass("fade")?"fade":"";if(this.isShown&&this.options.backdrop){var d=a.support.transition&&c;if(this.$backdrop=a('<div class="modal-backdrop '+c+'" />').appendTo(document.body),this.$element.on("click.dismiss.bs.modal",a.proxy(function(a){a.target===a.currentTarget&&("static"==this.options.backdrop?this.$element[0].focus.call(this.$element[0]):this.hide.call(this))},this)),d&&this.$backdrop[0].offsetWidth,this.$backdrop.addClass("in"),!b)return;d?this.$backdrop.one(a.support.transition.end,b).emulateTransitionEnd(150):b()}else!this.isShown&&this.$backdrop?(this.$backdrop.removeClass("in"),a.support.transition&&this.$element.hasClass("fade")?this.$backdrop.one(a.support.transition.end,b).emulateTransitionEnd(150):b()):b&&b()};var c=a.fn.modal;a.fn.modal=function(c,d){return this.each(function(){var e=a(this),f=e.data("bs.modal"),g=a.extend({},b.DEFAULTS,e.data(),"object"==typeof c&&c);f||e.data("bs.modal",f=new b(this,g)),"string"==typeof c?f[c](d):g.show&&f.show(d)})},a.fn.modal.Constructor=b,a.fn.modal.noConflict=function(){return a.fn.modal=c,this},a(document).on("click.bs.modal.data-api",'[data-toggle="modal"]',function(b){var c=a(this),d=c.attr("href"),e=a(c.attr("data-target")||d&&d.replace(/.*(?=#[^\s]+$)/,"")),f=e.data("bs.modal")?"toggle":a.extend({remote:!/#/.test(d)&&d},e.data(),c.data());c.is("a")&&b.preventDefault(),e.modal(f,this).one("hide",function(){c.is(":visible")&&c.focus()})}),a(document).on("show.bs.modal",".modal",function(){a(document.body).addClass("modal-open")}).on("hidden.bs.modal",".modal",function(){a(document.body).removeClass("modal-open")})}(jQuery),+function(a){"use strict";var b=function(a,b){this.type=this.options=this.enabled=this.timeout=this.hoverState=this.$element=null,this.init("tooltip",a,b)};b.DEFAULTS={animation:!0,placement:"top",selector:!1,template:'<div class="tooltip"><div class="tooltip-arrow"></div><div class="tooltip-inner"></div></div>',trigger:"hover focus",title:"",delay:0,html:!1,container:!1},b.prototype.init=function(b,c,d){this.enabled=!0,this.type=b,this.$element=a(c),this.options=this.getOptions(d);for(var e=this.options.trigger.split(" "),f=e.length;f--;){var g=e[f];if("click"==g)this.$element.on("click."+this.type,this.options.selector,a.proxy(this.toggle,this));else if("manual"!=g){var h="hover"==g?"mouseenter":"focusin",i="hover"==g?"mouseleave":"focusout";this.$element.on(h+"."+this.type,this.options.selector,a.proxy(this.enter,this)),this.$element.on(i+"."+this.type,this.options.selector,a.proxy(this.leave,this))}}this.options.selector?this._options=a.extend({},this.options,{trigger:"manual",selector:""}):this.fixTitle()},b.prototype.getDefaults=function(){return b.DEFAULTS},b.prototype.getOptions=function(b){return b=a.extend({},this.getDefaults(),this.$element.data(),b),b.delay&&"number"==typeof b.delay&&(b.delay={show:b.delay,hide:b.delay}),b},b.prototype.getDelegateOptions=function(){var b={},c=this.getDefaults();return this._options&&a.each(this._options,function(a,d){c[a]!=d&&(b[a]=d)}),b},b.prototype.enter=function(b){var c=b instanceof this.constructor?b:a(b.currentTarget)[this.type](this.getDelegateOptions()).data("bs."+this.type);return clearTimeout(c.timeout),c.hoverState="in",c.options.delay&&c.options.delay.show?void(c.timeout=setTimeout(function(){"in"==c.hoverState&&c.show()},c.options.delay.show)):c.show()},b.prototype.leave=function(b){var c=b instanceof this.constructor?b:a(b.currentTarget)[this.type](this.getDelegateOptions()).data("bs."+this.type);return clearTimeout(c.timeout),c.hoverState="out",c.options.delay&&c.options.delay.hide?void(c.timeout=setTimeout(function(){"out"==c.hoverState&&c.hide()},c.options.delay.hide)):c.hide()},b.prototype.show=function(){var b=a.Event("show.bs."+this.type);if(this.hasContent()&&this.enabled){if(this.$element.trigger(b),b.isDefaultPrevented())return;var c=this,d=this.tip();this.setContent(),this.options.animation&&d.addClass("fade");var e="function"==typeof this.options.placement?this.options.placement.call(this,d[0],this.$element[0]):this.options.placement,f=/\s?auto?\s?/i,g=f.test(e);g&&(e=e.replace(f,"")||"top"),d.detach().css({top:0,left:0,display:"block"}).addClass(e),this.options.container?d.appendTo(this.options.container):d.insertAfter(this.$element);var h=this.getPosition(),i=d[0].offsetWidth,j=d[0].offsetHeight;if(g){var k=this.$element.parent(),l=e,m=document.documentElement.scrollTop||document.body.scrollTop,n="body"==this.options.container?window.innerWidth:k.outerWidth(),o="body"==this.options.container?window.innerHeight:k.outerHeight(),p="body"==this.options.container?0:k.offset().left;e="bottom"==e&&h.top+h.height+j-m>o?"top":"top"==e&&h.top-m-j<0?"bottom":"right"==e&&h.right+i>n?"left":"left"==e&&h.left-i<p?"right":e,d.removeClass(l).addClass(e)}var q=this.getCalculatedOffset(e,h,i,j);this.applyPlacement(q,e),this.hoverState=null;var r=function(){c.$element.trigger("shown.bs."+c.type)};a.support.transition&&this.$tip.hasClass("fade")?d.one(a.support.transition.end,r).emulateTransitionEnd(150):r()}},b.prototype.applyPlacement=function(b,c){var d,e=this.tip(),f=e[0].offsetWidth,g=e[0].offsetHeight,h=parseInt(e.css("margin-top"),10),i=parseInt(e.css("margin-left"),10);isNaN(h)&&(h=0),isNaN(i)&&(i=0),b.top=b.top+h,b.left=b.left+i,a.offset.setOffset(e[0],a.extend({using:function(a){e.css({top:Math.round(a.top),left:Math.round(a.left)})}},b),0),e.addClass("in");var j=e[0].offsetWidth,k=e[0].offsetHeight;if("top"==c&&k!=g&&(d=!0,b.top=b.top+g-k),/bottom|top/.test(c)){var l=0;b.left<0&&(l=-2*b.left,b.left=0,e.offset(b),j=e[0].offsetWidth,k=e[0].offsetHeight),this.replaceArrow(l-f+j,j,"left")}else this.replaceArrow(k-g,k,"top");d&&e.offset(b)},b.prototype.replaceArrow=function(a,b,c){this.arrow().css(c,a?50*(1-a/b)+"%":"")},b.prototype.setContent=function(){var a=this.tip(),b=this.getTitle();a.find(".tooltip-inner")[this.options.html?"html":"text"](b),a.removeClass("fade in top bottom left right")},b.prototype.hide=function(){function b(){"in"!=c.hoverState&&d.detach(),c.$element.trigger("hidden.bs."+c.type)}var c=this,d=this.tip(),e=a.Event("hide.bs."+this.type);return this.$element.trigger(e),e.isDefaultPrevented()?void 0:(d.removeClass("in"),a.support.transition&&this.$tip.hasClass("fade")?d.one(a.support.transition.end,b).emulateTransitionEnd(150):b(),this.hoverState=null,this)},b.prototype.fixTitle=function(){var a=this.$element;(a.attr("title")||"string"!=typeof a.attr("data-original-title"))&&a.attr("data-original-title",a.attr("title")||"").attr("title","")},b.prototype.hasContent=function(){return this.getTitle()},b.prototype.getPosition=function(){var b=this.$element[0];return a.extend({},"function"==typeof b.getBoundingClientRect?b.getBoundingClientRect():{width:b.offsetWidth,height:b.offsetHeight},this.$element.offset())},b.prototype.getCalculatedOffset=function(a,b,c,d){return"bottom"==a?{top:b.top+b.height,left:b.left+b.width/2-c/2}:"top"==a?{top:b.top-d,left:b.left+b.width/2-c/2}:"left"==a?{top:b.top+b.height/2-d/2,left:b.left-c}:{top:b.top+b.height/2-d/2,left:b.left+b.width}},b.prototype.getTitle=function(){var a,b=this.$element,c=this.options;return a=b.attr("data-original-title")||("function"==typeof c.title?c.title.call(b[0]):c.title)},b.prototype.tip=function(){return this.$tip=this.$tip||a(this.options.template)},b.prototype.arrow=function(){return this.$arrow=this.$arrow||this.tip().find(".tooltip-arrow")},b.prototype.validate=function(){this.$element[0].parentNode||(this.hide(),this.$element=null,this.options=null)},b.prototype.enable=function(){this.enabled=!0},b.prototype.disable=function(){this.enabled=!1},b.prototype.toggleEnabled=function(){this.enabled=!this.enabled},b.prototype.toggle=function(b){var c=b?a(b.currentTarget)[this.type](this.getDelegateOptions()).data("bs."+this.type):this;c.tip().hasClass("in")?c.leave(c):c.enter(c)},b.prototype.destroy=function(){clearTimeout(this.timeout),this.hide().$element.off("."+this.type).removeData("bs."+this.type)};var c=a.fn.tooltip;a.fn.tooltip=function(c){return this.each(function(){var d=a(this),e=d.data("bs.tooltip"),f="object"==typeof c&&c;(e||"destroy"!=c)&&(e||d.data("bs.tooltip",e=new b(this,f)),"string"==typeof c&&e[c]())})},a.fn.tooltip.Constructor=b,a.fn.tooltip.noConflict=function(){return a.fn.tooltip=c,this}}(jQuery),+function(a){"use strict";var b=function(a,b){this.init("popover",a,b)};if(!a.fn.tooltip)throw new Error("Popover requires tooltip.js");b.DEFAULTS=a.extend({},a.fn.tooltip.Constructor.DEFAULTS,{placement:"right",trigger:"click",content:"",template:'<div class="popover"><div class="arrow"></div><h3 class="popover-title"></h3><div class="popover-content"></div></div>'}),b.prototype=a.extend({},a.fn.tooltip.Constructor.prototype),b.prototype.constructor=b,b.prototype.getDefaults=function(){return b.DEFAULTS},b.prototype.setContent=function(){var a=this.tip(),b=this.getTitle(),c=this.getContent();a.find(".popover-title")[this.options.html?"html":"text"](b),a.find(".popover-content")[this.options.html?"string"==typeof c?"html":"append":"text"](c),a.removeClass("fade top bottom left right in"),a.find(".popover-title").html()||a.find(".popover-title").hide()},b.prototype.hasContent=function(){return this.getTitle()||this.getContent()},b.prototype.getContent=function(){var a=this.$element,b=this.options;return a.attr("data-content")||("function"==typeof b.content?b.content.call(a[0]):b.content)},b.prototype.arrow=function(){return this.$arrow=this.$arrow||this.tip().find(".arrow")},b.prototype.tip=function(){return this.$tip||(this.$tip=a(this.options.template)),this.$tip};var c=a.fn.popover;a.fn.popover=function(c){return this.each(function(){var d=a(this),e=d.data("bs.popover"),f="object"==typeof c&&c;(e||"destroy"!=c)&&(e||d.data("bs.popover",e=new b(this,f)),"string"==typeof c&&e[c]())})},a.fn.popover.Constructor=b,a.fn.popover.noConflict=function(){return a.fn.popover=c,this}}(jQuery),+function(a){"use strict";function b(c,d){var e,f=a.proxy(this.process,this);this.$element=a(a(c).is("body")?window:c),this.$body=a("body"),this.$scrollElement=this.$element.on("scroll.bs.scroll-spy.data-api",f),this.options=a.extend({},b.DEFAULTS,d),this.selector=(this.options.target||(e=a(c).attr("href"))&&e.replace(/.*(?=#[^\s]+$)/,"")||"")+" .nav li > a",this.offsets=a([]),this.targets=a([]),this.activeTarget=null,this.refresh(),this.process()}b.DEFAULTS={offset:10},b.prototype.refresh=function(){var b=this.$element[0]==window?"offset":"position";this.offsets=a([]),this.targets=a([]);{var c=this;this.$body.find(this.selector).map(function(){var d=a(this),e=d.data("target")||d.attr("href"),f=/^#./.test(e)&&a(e);return f&&f.length&&f.is(":visible")&&[[f[b]().top+(!a.isWindow(c.$scrollElement.get(0))&&c.$scrollElement.scrollTop()),e]]||null}).sort(function(a,b){return a[0]-b[0]}).each(function(){c.offsets.push(this[0]),c.targets.push(this[1])})}},b.prototype.process=function(){var a,b=this.$scrollElement.scrollTop()+this.options.offset,c=this.$scrollElement[0].scrollHeight||this.$body[0].scrollHeight,d=c-this.$scrollElement.height(),e=this.offsets,f=this.targets,g=this.activeTarget;if(b>=d)return g!=(a=f.last()[0])&&this.activate(a);if(g&&b<=e[0])return g!=(a=f[0])&&this.activate(a);for(a=e.length;a--;)g!=f[a]&&b>=e[a]&&(!e[a+1]||b<=e[a+1])&&this.activate(f[a])},b.prototype.activate=function(b){this.activeTarget=b,a(this.selector).parentsUntil(this.options.target,".active").removeClass("active");var c=this.selector+'[data-target="'+b+'"],'+this.selector+'[href="'+b+'"]',d=a(c).parents("li").addClass("active");d.parent(".dropdown-menu").length&&(d=d.closest("li.dropdown").addClass("active")),d.trigger("activate.bs.scrollspy")};var c=a.fn.scrollspy;a.fn.scrollspy=function(c){return this.each(function(){var d=a(this),e=d.data("bs.scrollspy"),f="object"==typeof c&&c;e||d.data("bs.scrollspy",e=new b(this,f)),"string"==typeof c&&e[c]()})},a.fn.scrollspy.Constructor=b,a.fn.scrollspy.noConflict=function(){return a.fn.scrollspy=c,this},a(window).on("load",function(){a('[data-spy="scroll"]').each(function(){var b=a(this);b.scrollspy(b.data())})})}(jQuery),+function(a){"use strict";var b=function(b){this.element=a(b)};b.prototype.show=function(){var b=this.element,c=b.closest("ul:not(.dropdown-menu)"),d=b.data("target");if(d||(d=b.attr("href"),d=d&&d.replace(/.*(?=#[^\s]*$)/,"")),!b.parent("li").hasClass("active")){var e=c.find(".active:last a")[0],f=a.Event("show.bs.tab",{relatedTarget:e});if(b.trigger(f),!f.isDefaultPrevented()){var g=a(d);this.activate(b.parent("li"),c),this.activate(g,g.parent(),function(){b.trigger({type:"shown.bs.tab",relatedTarget:e})})}}},b.prototype.activate=function(b,c,d){function e(){f.removeClass("active").find("> .dropdown-menu > .active").removeClass("active"),b.addClass("active"),g?(b[0].offsetWidth,b.addClass("in")):b.removeClass("fade"),b.parent(".dropdown-menu")&&b.closest("li.dropdown").addClass("active"),d&&d()}var f=c.find("> .active"),g=d&&a.support.transition&&f.hasClass("fade");g?f.one(a.support.transition.end,e).emulateTransitionEnd(150):e(),f.removeClass("in")};var c=a.fn.tab;a.fn.tab=function(c){return this.each(function(){var d=a(this),e=d.data("bs.tab");e||d.data("bs.tab",e=new b(this)),"string"==typeof c&&e[c]()})},a.fn.tab.Constructor=b,a.fn.tab.noConflict=function(){return a.fn.tab=c,this},a(document).on("click.bs.tab.data-api",'[data-toggle="tab"], [data-toggle="pill"]',function(b){b.preventDefault(),a(this).tab("show")})}(jQuery),+function(a){"use strict";var b=function(c,d){this.options=a.extend({},b.DEFAULTS,d),this.$window=a(window).on("scroll.bs.affix.data-api",a.proxy(this.checkPosition,this)).on("click.bs.affix.data-api",a.proxy(this.checkPositionWithEventLoop,this)),this.$element=a(c),this.affixed=this.unpin=this.pinnedOffset=null,this.checkPosition()};b.RESET="affix affix-top affix-bottom",b.DEFAULTS={offset:0},b.prototype.getPinnedOffset=function(){if(this.pinnedOffset)return this.pinnedOffset;this.$element.removeClass(b.RESET).addClass("affix");var a=this.$window.scrollTop(),c=this.$element.offset();return this.pinnedOffset=c.top-a},b.prototype.checkPositionWithEventLoop=function(){setTimeout(a.proxy(this.checkPosition,this),1)},b.prototype.checkPosition=function(){if(this.$element.is(":visible")){var c=a(document).height(),d=this.$window.scrollTop(),e=this.$element.offset(),f=this.options.offset,g=f.top,h=f.bottom;"top"==this.affixed&&(e.top+=d),"object"!=typeof f&&(h=g=f),"function"==typeof g&&(g=f.top(this.$element)),"function"==typeof h&&(h=f.bottom(this.$element));var i=null!=this.unpin&&d+this.unpin<=e.top?!1:null!=h&&e.top+this.$element.height()>=c-h?"bottom":null!=g&&g>=d?"top":!1;if(this.affixed!==i){this.unpin&&this.$element.css("top","");var j="affix"+(i?"-"+i:""),k=a.Event(j+".bs.affix");this.$element.trigger(k),k.isDefaultPrevented()||(this.affixed=i,this.unpin="bottom"==i?this.getPinnedOffset():null,this.$element.removeClass(b.RESET).addClass(j).trigger(a.Event(j.replace("affix","affixed"))),"bottom"==i&&this.$element.offset({top:c-h-this.$element.height()}))}}};var c=a.fn.affix;a.fn.affix=function(c){return this.each(function(){var d=a(this),e=d.data("bs.affix"),f="object"==typeof c&&c;e||d.data("bs.affix",e=new b(this,f)),"string"==typeof c&&e[c]()})},a.fn.affix.Constructor=b,a.fn.affix.noConflict=function(){return a.fn.affix=c,this},a(window).on("load",function(){a('[data-spy="affix"]').each(function(){var b=a(this),c=b.data();c.offset=c.offset||{},c.offsetBottom&&(c.offset.bottom=c.offsetBottom),c.offsetTop&&(c.offset.top=c.offsetTop),b.affix(c)})})}(jQuery);
;/*})'"*/
;/*})'"*/
(function($) {

function rh_on_load(context) {

var buttonSlideTo = $('body').position().top;
$('.btn_slideto', context).on({
  click:function(){
    $('html,body').animate({
      scrollTop:buttonSlideTo+'px'
    }, 1200, 'easeInOutExpo', function(){
      //
    });
    return false;
  }
});


////
// Utility Navigation
////

var $utilityLinks = $('#utility-nav a', context),
  $utilityPanels = $('.utility-panel', context),
  resetUtility = function() {
    $utilityLinks.removeClass('open');
    $utilityPanels.css('height', "");
    $utilityPanels.removeClass('open');
    $(window).off("resize.PanelResize");
  };

if (context == document) {

  var account_cooke = $.cookie('rh_user');
  if (account_cooke) {
    account_cooke = account_cooke.split('|');
    $('.rh-user-loggedout', context).remove();
    $('.rh-name', context).text(account_cooke[1]);
  }
  else {
    $('.rh-user-loggedin', context).remove();
  }


  var utilityPanelResize = function($panel) {
    $panel.css('height', $panel.find('.utility-content').outerHeight());
  };

  var openTargetUtilityNavLink = function($target) {
    $target.addClass('open');
    resetNavigation();
  };

  var openTargetUtilityPanel = function($panel) {
    if ($panel.is('#search-panel')) {
      $panel.find('.form-text').focus();
    }
    $panel.addClass('open');
    utilityPanelResize($panel);
    $(window).on("resize.PanelResize", function(){
      utilityPanelResize($panel);
    });
  };

  $utilityLinks.on('click', function() {
    var $this = $(this),
        $index  = $this.parent().index(), // index of icon clicked
        $utilityPanel = $utilityPanels.eq($index); // target pane based on index

    if ($this.hasClass('open')) {
      resetUtility();
    }
    else {
      resetUtility();
      openTargetUtilityPanel($utilityPanel);
      openTargetUtilityNavLink($this);
    }
  });
}

// Main Nav Scroll to Fixed
if ($(window).height() >= 600 ) {

  $('#main-nav-wrap', context).scrollToFixed({
    fixed: function() {
      resetUtility();
      $('#to-top').fadeIn(function() {
        $(this).show;
      });
      $('body').addClass('scroll-to-fixed-menu');
    },
    postFixed: function() {
      $('#to-top').fadeOut(function() {
        $(this).hide;
        $('body').removeClass('scroll-to-fixed-menu');
      });
    },
    minWidth: 768
  });
}


// rset1 layout switch

var enableGridView = function() {
  $container = $('.rset1.list-view');
  $eqHeightContainer = $container.find('section');
  $container.removeClass('list-view');
  $container.addClass('grid-view');
  $eqHeightContainer.addClass('equal-height');
  equalheight('.equal-height > *');
};

var enableListView = function() {
  $container = $('.rset1.grid-view');
  $eqHeightContainer = $container.find('section');
  $container.removeClass('grid-view');
  // Remove equal-height class and reset all height to auto
  $eqHeightContainer.removeClass('equal-height').children('article').css('height', 'auto');
  $container.addClass('list-view');
};

$('#grid-view', context).on('click', function(e) {
  e.preventDefault();
  enableGridView();
});

$('#list-view', context).on('click', function(e) {
  e.preventDefault();
  enableListView();
});


// Facets


// check grid/list toggle and update filter href to maintain styling on reload
$('.view-filter-container div.taxonomy-group li a', context).on('click', function() {
  var href = $(this).attr('href');
  if (href) {
  // todo: make better test?
    var format = ($('.rset1.list-view').length > 0) ? 'list' : 'grid';

    if (href.indexOf('rset1_format') != -1) {
      href = href.replace(/rset1_format=\w+/, 'rset1_format=' + format);
    } else {
      href += (href.match(/\?/) ? '&' : '?') + 'rset1_format=' + format;
    }
    $(this).attr('href', href).toggleClass('facetapi-active');
  }
});
// Move Filter to outer most container
$('#view-filter-container', context).detach().appendTo('body');

var pathName = window.location.pathname;

// Toggle filter being visible
var close_text = Drupal.t('Close');
var filters_text = $('#view-filter-toggle').text();
$('body', context).on('click',function(e){
  if ($('body').hasClass('view-filter-toggle-open')) {
    if (e.target.id == 'view-filter-container' || $(e.target).parents('#view-filter-container').length > 0) {
      // If the target of the click is the filter container or one of its children do not close it.
      return true;
    }
    else {
      // Close the filter tray on a click outside of it.
      $('body').removeClass('view-filter-toggle-open');
      // Return the button to it's proper state
      $('#view-filter-toggle').text(filters_text);
      // Set the session variable for closed
      sessionStorage.setItem(pathName, "closed");
    }
  }
});

$('#view-filter-toggle, .view-filter-container-x, .view-filter-container-close', context).on('click',function(e){
    e.preventDefault();
    e.stopPropagation();
    $toggle = $("#view-filter-toggle");
    $('body').toggleClass('view-filter-toggle-open');
    if (sessionStorage.getItem(pathName) != 'open') {
      sessionStorage.setItem(pathName, "open");
      $toggle.text(close_text);
    }
    else {
      sessionStorage.setItem(pathName, "closed");
      $toggle.text(filters_text)
    }
});

if (sessionStorage.getItem(pathName) == 'open') {
    $('body').addClass('view-filter-toggle-open');
    $('#view-filter-toggle', context).text(close_text);
}

// reopen any groups with active facets
$('.facetapi-active').closest('.taxonomy-group').addClass('taxonomy-group-open');


// Toggle open/close taxonomy groups, set session var to open or closed
$('.taxonomy-group button', context).on('click',function(){
    var $this = $(this),
        number = $this.closest('.taxonomy-group').index();

    if (sessionStorage.getItem(pathName + ':taxonomy-group-' + number) != 'open') {
      sessionStorage.setItem(pathName + ':taxonomy-group-' + number, "open");
    }
    else {
      sessionStorage.setItem(pathName + ':taxonomy-group-' + number, "closed");
    }

    $(this).closest('.taxonomy-group').toggleClass('taxonomy-group-open');
});

// Setup facets for being open or closed on resource listing pages.
$active_facets = $('.resource-listing-view-filter-container').find('.facetapi-active');
if ($active_facets.length < 1) {
  // There are no active facet so we need to open the Type facet
  $('.resource-listing-view-filter-container .taxonomy-group.facetapi-type', context).each(function(){
    $(this).closest('.taxonomy-group').toggleClass('taxonomy-group-open');
  });
}
// Check session variable for each button to see if it should be open
$('.taxonomy-group button', context).each(function() {
    var $this = $(this),
    $group = $this.closest('.taxonomy-group');
    number = $group.index();
    if (sessionStorage.getItem(pathName + ':taxonomy-group-' + number) == 'open') {
      $group.addClass('taxonomy-group-open');
    }
});


// HTAB1

$(".htab1 .nav-tabs").click(function() {
    if ($('.htab1-navbar').hasClass('condensed-nav')) {
      return true;
    }
    else {
      $('html, body').animate({
          scrollTop: $(".htab1 .nav-tabs a").offset().top - 90
      }, 500);
    return true;
  }
});

  $('.htab1-navbar').waypoint(function(direction) {
    var timer1;
    clearTimeout(timer1);
    $this = $(this);
    if (direction == 'down') {
      $this.addClass("htab1-animate");
      $this.addClass("condensed-nav");
      timer1 = setTimeout( function() {
        $this.removeClass("htab1-animate");
      }, 1000 );
    }
    else {
      $this.addClass("htab1-animate");
      $this.removeClass("condensed-nav");
      timer1 = setTimeout( function() {
        $this.removeClass("htab1-animate");
      }, 1000 );
    }
  }, { offset: 140 });


////
// Mobile Menu
////

if (context == document) {
    var $body = $('body');
    $('.expand-mobile-search', context).click(function(e) {
        e.preventDefault();
        resetNavigation();
        $body.removeClass('mobile-nav-open');
        $body.toggleClass('mobile-search-open');
        $("#search-panel").find('.form-text').focus();
    });

    $('.expand-mobile-nav', context).click(function(e) {
        e.preventDefault();
        resetNavigation();
        $body.removeClass('mobile-search-open');
        $body.toggleClass('mobile-nav-open');
    });
}


////
// Primary Navigation
////

if (context == document) {
  var resetNavigation = function() {
    var $subnav = $('.main-subnav', context);
        $subnav.find('.subnav-open').removeClass('subnav-open');
        $('#main-nav li', context).removeClass('main-active');
        $subnav.removeAttr('style');
        $('body', context).removeClass('nav-open');
  };
}

// Video tabs for About and Transcript for body2 template
$('.body2 article > ul a', context).on('click', function(e) {
        $('.body2 article > section').addClass('hideo');
        $(this).tab('show');
        $('.body2 article > ul a').removeClass('on');
        $(this).addClass('on');
        e.preventDefault();
    });
    $('.body2 article > ul li:first-child a').click();


if (context == document) {
$(window).resize(function() {
  if ($(window).width() < 768) {
    resetUtility();
    $(".panel-nav").css("display","");
  }
  else {
    $("#to-top").css("display","");
  }

});
} // end context document


// Extended and traditional footer collapse per breakpoints
  var responsive_footer = function() {
    // clear click listeners for these headers
    $('footer .extended h3').off('click');

    // if tablet and below
    if ($(window).width() < 768) {
      if (!$('body').hasClass('is-mobile-footer')) {
        // This if statement keeps this from firing multiple times.
        // It will fire once when the screen goes below the mobile break point.
        // If fixes a defect in chrome that fires the window.width every time the page is scrolled.
        $('body').addClass('is-mobile-footer')
        $('footer .extended ul').collapse('hide');
      }
        $('footer .extended h3').on('click',function(){
            $(this).next('footer .extended ul').collapse('toggle');
        });
    }

    // if tablet and up
    if ($(window).width() >= 768) {
        $('body').removeClass('is-mobile-footer')
        $('footer .extended ul').collapse('show');
        $('footer .extended h3').off('click');
    }
  };

// Make the mobile utility nav responsive and collapsible
var responsive_utility_nav = function() {
  // Clear click listeners for these headers
  $('#mobile-utility-nav li.trigger > a').off('click');

  // If tablet and below
  if ($(window).width() < 768) {
    if (!$('body').hasClass('is-mobile-utility')) {
      // This if statement keeps this from firing multiple times.
      // It will fire once when the screen goes below the mobile break point.
      // If fixes a defect in chrome that fires the window.width every time the page is scrolled.
      $('body').addClass('is-mobile-utility')
      // This controls the main nav and it's sub elements
      $('#mobile-utility-nav .tray').collapse('hide');
    }
    $('#mobile-utility-nav li.trigger > a').on('click', function(e) {
      e.preventDefault();
      var $trigger = $(this);
      var tray = '.' + $(this).attr('class') + '-tray';
      // Collapse any open tray that are not the current tray or one of its parents
      $('#mobile-utility-nav .tray').not(tray).not($(this).parents('.tray')).collapse('hide');
      $('#mobile-utility-nav ' + tray).collapse('toggle').on('shown.bs.collapse', function(e) {
        if ($trigger.is(':above-the-top') && !$('body').hasClass('is-scrolling')) {
          $('html, body').addClass('is-scrolling').animate({
              scrollTop: $trigger.offset().top
          }, 500, function() {
            // Remove the is-scrolling class once the animation is complete.
            $(this).removeClass('is-scrolling');
          });
        }
      });
    });
  }

  // if tablet and up
  if ($(window).width() >= 768) {
    $('body').removeClass('is-mobile-utility')
    $('#mobile-utility-nav li.trigger > a').off('click');
  }
};

//Promo1 Slider
$('.item:first-child').addClass('active');

$('[id^="promo-slider"]').each(function() {
  sliderCheckitem(this); // on load
}).on('slid.bs.carousel', function() {
  sliderCheckitem(this);
});  // on caroussel move

function sliderCheckitem(el) {

    var $this = $(el),
        $current = $this.find('.active'),
        $control = $this.find('.rh-carousel-control'),
        $prevLink = $this.find('.left.rh-carousel-control'),
        $nextLink = $this.find('.right.rh-carousel-control'),
        prevTitle = $current.prev().find('.promo1-title').html(),
        nextTitle = $current.next().find('.promo1-title').html();
    // set prev/next link html to title of prev/next slide
    $prevLink.html(prevTitle);
    $nextLink.html(nextTitle);
    // set data-text-color of prev/next based on the color of the current slide
    $this.find('.rh-carousel-control')
         .attr('data-text-color', $current.find('section').attr('data-text-color'));

    // show all controls before hiding the necessary one
    $control.show();

    // If there is only one promo hide all controls
    if ($('.carousel-inner .item', $this).length == 1) {
      $control.hide();
    } else if($('.carousel-inner .item:first', $this).hasClass('active')) {
      $prevLink.hide();
    } else if($('.carousel-inner .item:last', $this).hasClass('active')) {
      $nextLink.hide();
    }
}

//Keep boxes the same height fluidly
  equalheight = function(container){

  var currentTallest = 0,
       currentRowStart = 0,
       rowDivs = new Array(),
       $el,
       topPosition = 0;
   $(container).each(function() {

     $el = $(this);
     $($el).height('auto');
     topPostion = $el.offset().top;
     if (currentRowStart != topPostion) {
       for (currentDiv = 0 ; currentDiv < rowDivs.length ; currentDiv++) {
         rowDivs[currentDiv].height(currentTallest);
       }
       rowDivs.length = 0; // empty the array
       currentRowStart = topPostion;
       currentTallest = $el.height();
       rowDivs.push($el);
     } else {
       rowDivs.push($el);
       currentTallest = (currentTallest < $el.height()) ? ($el.height()) : (currentTallest);
    }
     for (currentDiv = 0 ; currentDiv < rowDivs.length ; currentDiv++) {
       rowDivs[currentDiv].height(currentTallest);
     }
   });
  };


if (context == document) {
  responsive_footer();
  responsive_utility_nav();
  $(window).load(function() {
    window.setTimeout(function() {
          responsive_footer();
          responsive_utility_nav();
    }, 300);
  equalheight('.equal-height > *');
  });
  $(window).resize(function() {
    responsive_footer();
    responsive_utility_nav();
    equalheight('.equal-height > *');
  });
}

  equalheight('.equal-height > *');

    //simple tabs
     $(".c-tabs .nav-tabs li a", context).click(function(event) {
        $(".narrative.c-tabs").removeClass("in").addClass("collapse");
    });
    //product tabs
    $(".c-tabs .nav-tabs li a", context).click(function(event) {
        $(".resources.c-tabs").removeClass("in").addClass("collapse");
    });
    //vertical tabs
    $(".c-tabs .nav-tabs li a", context).click(function(event) {
        $(".vertical-tabs .c-tabs").removeClass("in").addClass("collapse");
    });

if(!Modernizr.cssanimations) {
    //jQuery fallback
    // If cssanimations are not available (ie9) then we need to turn on opacity for fade-in elements
    $('.fade-in').css('opacity', 1);
}

  if (typeof fitVids == 'function') {
    // youtube resizing.
    $(".training_taste .media-youtube-video", context).fitVids();
    $(".fwvd1 .content", context).fitVids();
  }


  // about/transcript switcher
  $('.body2 article > ul a', context).on('click', function(e) {
      $('.body2 article > section').addClass('hideo');
      $(this).tab('show');
      $('.body2 article > ul a').removeClass('on');
      $(this).addClass('on');
      e.preventDefault();
  });
  $('.body2 article > ul li:first-child a', context).click();

  if (!!$(".edit-country").length) {
    function trainingListChangeCountry(selected) {
      if (!trainingListChangeCountry.hasOwnProperty('xpath_target')) {
        trainingListChangeCountry.xpath_target = false;
        trainingListChangeCountry.xpath_target_clear = false;
        trainingListChangeCountry.page_type_key = false;
        if (!!$('section.training_list').length) {
          trainingListChangeCountry.xpath_target = 'tr.class-%key% > td.views-field:last';
          trainingListChangeCountry.xpath_target_clear = 'tr.class-training > td.views-field:last-child';
          trainingListChangeCountry.page_type_key = 't';
        }
        else if (!!$('section.training-by-curriculum').length) {
          trainingListChangeCountry.xpath_target = 'div.class-%key%';
          trainingListChangeCountry.xpath_target_clear = 'div.class-training';
          trainingListChangeCountry.page_type_key = 'c';
        }
      }

      // only run this code on pages which have been set up for it.
      if (false !== trainingListChangeCountry.xpath_target) {
        // If we have a country selected, show only the rows for that country.
        if (selected.length > 0) {
          var cid = selected;
          setCidItems(
            cid,
            trainingListChangeCountry.xpath_target,
            trainingListChangeCountry.xpath_target_clear,
            trainingListChangeCountry.page_type_key
          );

          $('.training_list tbody, .training_list thead').show();
          $('.training_list tbody ul.country-' + selected).show();
        }
        // Otherwise show the "please select country" message.
        else {
          $('.course-listing-empty').show();
          $('.training_list tbody, .training_list thead').hide();
        }
      }
    }
    /** Interactions for the training list page **/
    // Fire the list change to start with then fire it again below on .change()
  $('.edit-country').change(function() {
      // Sometimes the country box doesn't update the selectboxIt feature on change
      country_id = $(this).val();
      country = $(this).children("option[value='" + country_id + "']").text();
      $('#edit-countrySelectBoxItText').text(country);
      trainingListChangeCountry(country_id);
      $('.course-listing-empty').hide();
    });
  }

  function setCidItems(cid, xpath_target, xpath_target_clear, page_type_key) {
    if (!Drupal.settings.hasOwnProperty('redhat_www_type_training')) {
      Drupal.settings.redhat_www_type_training = { countrycache: {} };
    } else if (!Drupal.settings.redhat_www_type_training.hasOwnProperty('countrycache')) {
      Drupal.settings.redhat_www_type_training.countrycache = {};
    }

    if (false != Drupal.settings.redhat_www_type_training.countrycache[cid]) {
      setCidItems.lastCid = cid;
      if (Drupal.settings.redhat_www_type_training.countrycache.hasOwnProperty(cid)) {
        $(xpath_target_clear).empty();
        $.each(Drupal.settings.redhat_www_type_training.countrycache[cid], function( key, val ) {
          $(xpath_target.replace('%key%', key)).html(val[page_type_key]);
        });
        $('.training_list table').addClass('waystotrain-loaded');
      }
      else {
        // set to false as a flag to the external if that this CID is being worked on presently
        Drupal.settings.redhat_www_type_training.countrycache[cid] = false;
        $.getJSON(Drupal.settings.basePath + Drupal.settings.pathPrefix + 'training/' + cid + '/json', function( data ) {
          Drupal.settings.redhat_www_type_training.countrycache[cid] = data;
          if (cid == setCidItems.lastCid) {
            setCidItems(cid, xpath_target, xpath_target_clear, page_type_key);
          }
        });
      }
    }
  }

  $('select.select-box-it', context).each(function(){
    $(this).selectBoxIt({native: true, autoWidth: false});
    // Set the select box (now hidden) height and width to match the styled html so clickability is normal
    var $selectBoxCont = $(this).parent('.selectboxit-wrapper');
    $(this).css({width: $selectBoxCont.width(), height: $selectBoxCont.height()});
  });

  // Switchable plugin for select boxes
  $('select.switch-it', context).each(function(){
    $(this).switchIt();
  });

  if ($('#block-views-training-list-block-training table').length) {
    $('#block-views-training-list-block-training table tbody tr').on('mouseover', function(){
      $(this).addClass('hover');
      $(this).children('td').children('a').addClass('hover');
    })
    .on('mouseout', function(){
      $(this).removeClass('hover');
      $(this).children('td').children('a').removeClass('hover');
    })
    .on('click', function() {
      window.location.href = $(this).children('td').children('a').attr('href');
    });
  }
  $('.search-google-appliance-search-form .form-text', context).focus();

  if ($('body').hasClass('success-detail') && typeof $.fn['stat1Band'] !== 'undefined') {
    // Just a sanity check above to ensure this won't break all JS if the plugin isn't loaded
    $('.stat1 section').stat1Band();
  }

  // Used by admins to show/hide admin info for nodes.
  // This allows for easier previewing of the actual node content.
  if ($('#rh_toggle_admin', context).length) {
    $('#rh_toggle_admin', context).on('click', function(e) {
      e.preventDefault();
      $('ul.tabs.primary, #block-workbench-block').toggle();
    });
  }
}

if (typeof Drupal !== 'undefined' && Drupal.behaviors) {
  Drupal.behaviors.rhchrome = {
    attach: function (context, settings) {
      rh_on_load(context);
    }
  };
}
else {
  $(document).ready(function () {
    rh_on_load(document);
  });
}
})(jQuery);


;/*})'"*/
;/*})'"*/
/* Source and licensing information for the line(s) below can be found at https://www.redhat.com/profiles/rh/themes/redhatdotcom/js/jquery.fitvids.js. */
(function($){"use strict";$.fn.fitVids=function(options){var settings={customSelector:null};if(!document.getElementById('fit-vids-style')){var div=document.createElement('div'),ref=document.getElementsByTagName('base')[0]||document.getElementsByTagName('script')[0],cssStyles='&shy;<style>.fluid-width-video-wrapper{width:100%;position:relative;padding:0;}.fluid-width-video-wrapper iframe,.fluid-width-video-wrapper object,.fluid-width-video-wrapper embed {position:absolute;top:0;left:0;width:100%;height:100%;}</style>';div.className='fit-vids-style';div.id='fit-vids-style';div.style.display='none';div.innerHTML=cssStyles;ref.parentNode.insertBefore(div,ref)};if(options)$.extend(settings,options);return this.each(function(){var selectors=["iframe[src*='player.vimeo.com']","iframe[src*='youtube.com']","iframe[src*='youtube-nocookie.com']","iframe[src*='kickstarter.com'][src*='video.html']","object","embed"];if(settings.customSelector)selectors.push(settings.customSelector);var $allVideos=$(this).find(selectors.join(','));$allVideos=$allVideos.not("object object");$allVideos.each(function(){var $this=$(this);if(this.tagName.toLowerCase()==='embed'&&$this.parent('object').length||$this.parent('.fluid-width-video-wrapper').length)return;var height=(this.tagName.toLowerCase()==='object'||($this.attr('height')&&!isNaN(parseInt($this.attr('height'),10))))?parseInt($this.attr('height'),10):$this.height(),width=!isNaN(parseInt($this.attr('width'),10))?parseInt($this.attr('width'),10):$this.width(),aspectRatio=height/width;if(!$this.attr('id')){var videoID='fitvid'+Math.floor(Math.random()*999999);$this.attr('id',videoID)};$this.wrap('<div class="fluid-width-video-wrapper"></div>').parent('.fluid-width-video-wrapper').css('padding-top',(aspectRatio*100)+"%");$this.removeAttr('height').removeAttr('width')})})}})(window.jQuery||window.Zepto);;
/* Source and licensing information for the above line(s) can be found at https://www.redhat.com/profiles/rh/themes/redhatdotcom/js/jquery.fitvids.js. */
;/*})'"*/
/*
 * Switch It jQuery plugin for Redhat.com
 *
 * This is a custom written plugin for toggling content on
 * and off based on a select box choice.
 */


// the semi-colon before the function invocation is a safety
// net against concatenated scripts and/or other plugins
// that are not closed properly.
;(function ($) {

    // Create the defaults once
    var pluginName = 'switchIt',
        defaults = {
          // key can be any html attribute for the select box to key off of
          key: 'id'
        };

    // The actual plugin constructor
    function switchIt(element, options) {
        this.element = element;

        // jQuery has an extend method that merges the
        // contents of two or more objects, storing the
        // result in the first object. The first object
        // is generally empty because we don't want to alter
        // the default options for future instances of the plugin
        this.options = $.extend({}, defaults, options) ;

        this._defaults = defaults;
        this._name = pluginName;

        this.init();
    }

    switchIt.prototype.toggle = function ($container, value) {
      var onClass = ".switchable-" + value;
      $container.children("[class*='switchable-']:not(" + onClass + ")").hide();
      $container.children(onClass).show();
    }

    switchIt.prototype.init = function () {
      $el = $(this.element);
      this.key = $el.attr(this.options.key);
      var switchContainer = this.key + '-switchable';
      _this = this;
      $el.on('change', function(e) {
        _this.toggle($("[id|='" + switchContainer + "']"), this.value);
      });
      $el.trigger('change');
    };

    // A really lightweight plugin wrapper around the constructor,
    // preventing against multiple instantiations
    $.fn[pluginName] = function (options) {
        return this.each(function () {
            if (!$.data(this, 'plugin_' + pluginName)) {
                $.data(this, 'plugin_' + pluginName,
                new switchIt(this, options));
            }
        });
    }

})(jQuery);
;/*})'"*/
;/*})'"*/
/* Source and licensing information for the line(s) below can be found at https://www.redhat.com/profiles/rh/themes/redhatdotcom/js/jquery.selectBoxIt/jquery.selectBoxIt.js. */
(function(selectBoxIt){"use strict";selectBoxIt(window.jQuery,window,document)}(function($,window,document,undefined){"use strict";$.widget("selectBox.selectBoxIt",{VERSION:"3.8.1",options:{showEffect:"none",showEffectOptions:{},showEffectSpeed:"medium",hideEffect:"none",hideEffectOptions:{},hideEffectSpeed:"medium",showFirstOption:true,defaultText:"",defaultIcon:"",downArrowIcon:"",theme:"default",keydownOpen:true,isMobile:function(){var ua=navigator.userAgent||navigator.vendor||window.opera;return/iPhone|iPod|iPad|Silk|Android|BlackBerry|Opera Mini|IEMobile/.test(ua)},"native":false,aggressiveChange:false,selectWhenHidden:true,viewport:$(window),similarSearch:false,copyAttributes:["title","rel"],copyClasses:"button",nativeMousedown:false,customShowHideEvent:false,autoWidth:true,html:true,populate:"",dynamicPositioning:true,hideCurrent:false},getThemes:function(){var self=this,theme=$(self.element).attr("data-theme")||"c";return{bootstrap:{focus:"active",hover:"",enabled:"enabled",disabled:"disabled",arrow:"caret",button:"btn",list:"dropdown-menu",container:"bootstrap",open:"open"},jqueryui:{focus:"ui-state-focus",hover:"ui-state-hover",enabled:"ui-state-enabled",disabled:"ui-state-disabled",arrow:"ui-icon ui-icon-triangle-1-s",button:"ui-widget ui-state-default",list:"ui-widget ui-widget-content",container:"jqueryui",open:"selectboxit-open"},jquerymobile:{focus:"ui-btn-down-"+theme,hover:"ui-btn-hover-"+theme,enabled:"ui-enabled",disabled:"ui-disabled",arrow:"ui-icon ui-icon-arrow-d ui-icon-shadow",button:"ui-btn ui-btn-icon-right ui-btn-corner-all ui-shadow ui-btn-up-"+theme,list:"ui-btn ui-btn-icon-right ui-btn-corner-all ui-shadow ui-btn-up-"+theme,container:"jquerymobile",open:"selectboxit-open"},"default":{focus:"selectboxit-focus",hover:"selectboxit-hover",enabled:"selectboxit-enabled",disabled:"selectboxit-disabled",arrow:"selectboxit-default-arrow",button:"selectboxit-btn",list:"selectboxit-list",container:"selectboxit-container",open:"selectboxit-open"}}},isDeferred:function(def){return $.isPlainObject(def)&&def.promise&&def.done},_create:function(internal){var self=this,populateOption=self.options["populate"],userTheme=self.options["theme"];if(!self.element.is("select"))return;self.widgetProto=$.Widget.prototype;self.originalElem=self.element[0];self.selectBox=self.element;if(self.options["populate"]&&self.add&&!internal)self.add(populateOption);self.selectItems=self.element.find("option");self.firstSelectItem=self.selectItems.slice(0,1);self.documentHeight=$(document).height();self.theme=$.isPlainObject(userTheme)?$.extend({},self.getThemes()["default"],userTheme):self.getThemes()[userTheme]?self.getThemes()[userTheme]:self.getThemes()["default"];self.currentFocus=0;self.blur=true;self.textArray=[];self.currentIndex=0;self.currentText="";self.flipped=false;if(!internal)self.selectBoxStyles=self.selectBox.attr("style");self._createDropdownButton()._createUnorderedList()._copyAttributes()._replaceSelectBox()._addClasses(self.theme)._eventHandlers();if(self.originalElem.disabled&&self.disable)self.disable();if(self._ariaAccessibility)self._ariaAccessibility();self.isMobile=self.options["isMobile"]();if(self._mobile)self._mobile();if(self.options["native"])this._applyNativeSelect();self.triggerEvent("create");return self},_createDropdownButton:function(){var self=this,originalElemId=self.originalElemId=self.originalElem.id||"",originalElemValue=self.originalElemValue=self.originalElem.value||"",originalElemName=self.originalElemName=self.originalElem.name||"",copyClasses=self.options["copyClasses"],selectboxClasses=self.selectBox.attr("class")||"";self.dropdownText=$("<span/>",{id:originalElemId&&originalElemId+"SelectBoxItText","class":"selectboxit-text",unselectable:"on",text:self.firstSelectItem.text()}).attr("data-val",originalElemValue);self.dropdownImageContainer=$("<span/>",{"class":"selectboxit-option-icon-container"});self.dropdownImage=$("<i/>",{id:originalElemId&&originalElemId+"SelectBoxItDefaultIcon","class":"selectboxit-default-icon",unselectable:"on"});self.dropdown=$("<span/>",{id:originalElemId&&originalElemId+"SelectBoxIt","class":"selectboxit "+(copyClasses==="button"?selectboxClasses:"")+" "+(self.selectBox.prop("disabled")?self.theme["disabled"]:self.theme["enabled"]),name:originalElemName,tabindex:self.selectBox.attr("tabindex")||"0",unselectable:"on"}).append(self.dropdownImageContainer.append(self.dropdownImage)).append(self.dropdownText);self.dropdownContainer=$("<span/>",{id:originalElemId&&originalElemId+"SelectBoxItContainer","class":'selectboxit-wrapper '+self.theme.container+' '+(copyClasses==="container"?selectboxClasses:"")}).append(self.dropdown);return self},_createUnorderedList:function(){var self=this,dataDisabled,optgroupClass,optgroupElement,iconClass,iconUrl,iconUrlClass,iconUrlStyle,currentItem="",originalElemId=self.originalElemId||"",createdList=$("<ul/>",{id:originalElemId&&originalElemId+"SelectBoxItOptions","class":"selectboxit-options",tabindex:-1}),currentDataSelectedText,currentDataText,currentDataSearch,currentText,currentOption,parent;if(!self.options["showFirstOption"]){self.selectItems.first().attr("disabled","disabled");self.selectItems=self.selectBox.find("option").slice(1)};self.selectItems.each(function(index){currentOption=$(this);optgroupClass="";optgroupElement="";dataDisabled=currentOption.prop("disabled");iconClass=currentOption.attr("data-icon")||"";iconUrl=currentOption.attr("data-iconurl")||"";iconUrlClass=iconUrl?"selectboxit-option-icon-url":"";iconUrlStyle=iconUrl?'style="background-image:url(\''+iconUrl+'\');"':"";currentDataSelectedText=currentOption.attr("data-selectedtext");currentDataText=currentOption.attr("data-text");currentText=currentDataText?currentDataText:currentOption.text();parent=currentOption.parent();if(parent.is("optgroup")){optgroupClass="selectboxit-optgroup-option";if(currentOption.index()===0)optgroupElement='<span class="selectboxit-optgroup-header '+parent.first().attr("class")+'"data-disabled="true">'+parent.first().attr("label")+'</span>'};currentOption.attr("value",this.value);currentItem+=optgroupElement+'<li data-id="'+index+'" data-val="'+this.value+'" data-disabled="'+dataDisabled+'" class="'+optgroupClass+" selectboxit-option "+($(this).attr("class")||"")+'"><a class="selectboxit-option-anchor"><span class="selectboxit-option-icon-container"><i class="selectboxit-option-icon '+iconClass+' '+(iconUrlClass||self.theme["container"])+'"'+iconUrlStyle+'></i></span>'+(self.options["html"]?currentText:self.htmlEscape(currentText))+'</a></li>';currentDataSearch=currentOption.attr("data-search");self.textArray[index]=dataDisabled?"":currentDataSearch?currentDataSearch:currentText;if(this.selected){self._setText(self.dropdownText,currentDataSelectedText||currentText);self.currentFocus=index}});if((self.options["defaultText"]||self.selectBox.attr("data-text"))){var defaultedText=self.options["defaultText"]||self.selectBox.attr("data-text");self._setText(self.dropdownText,defaultedText);self.options["defaultText"]=defaultedText};createdList.append(currentItem);self.list=createdList;self.dropdownContainer.append(self.list);self.listItems=self.list.children("li");self.listAnchors=self.list.find("a");self.listItems.first().addClass("selectboxit-option-first");self.listItems.last().addClass("selectboxit-option-last");self.list.find("li[data-disabled='true']").not(".optgroupHeader").addClass(self.theme["disabled"]);self.dropdownImage.addClass(self.selectBox.attr("data-icon")||self.options["defaultIcon"]||self.listItems.eq(self.currentFocus).find("i").attr("class"));self.dropdownImage.attr("style",self.listItems.eq(self.currentFocus).find("i").attr("style"));return self},_replaceSelectBox:function(){var self=this,height,originalElemId=self.originalElem.id||"",size=self.selectBox.attr("data-size"),listSize=self.listSize=size===undefined?"auto":size==="0"||"size"==="auto"?"auto":+size,downArrowContainerWidth,dropdownImageWidth;self.selectBox.css("display","none").after(self.dropdownContainer);self.dropdownContainer.appendTo('body').addClass('selectboxit-rendering');height=self.dropdown.height();self.downArrow=$("<i/>",{id:originalElemId&&originalElemId+"SelectBoxItArrow","class":"selectboxit-arrow",unselectable:"on"});self.downArrowContainer=$("<span/>",{id:originalElemId&&originalElemId+"SelectBoxItArrowContainer","class":"selectboxit-arrow-container",unselectable:"on"}).append(self.downArrow);self.dropdown.append(self.downArrowContainer);self.listItems.removeClass("selectboxit-selected").eq(self.currentFocus).addClass("selectboxit-selected");downArrowContainerWidth=self.downArrowContainer.outerWidth(true);dropdownImageWidth=self.dropdownImage.outerWidth(true);if(self.options["autoWidth"]){self.dropdown.css({width:"auto"}).css({width:self.list.outerWidth(true)+downArrowContainerWidth+dropdownImageWidth});self.list.css({"min-width":self.dropdown.width()})};self.dropdownText.css({"max-width":self.dropdownContainer.outerWidth(true)-(downArrowContainerWidth+dropdownImageWidth)});self.selectBox.after(self.dropdownContainer);self.dropdownContainer.removeClass('selectboxit-rendering');if($.type(listSize)==="number")self.maxHeight=self.listAnchors.outerHeight(true)*listSize;return self},_scrollToView:function(type){var self=this,currentOption=self.listItems.eq(self.currentFocus),listScrollTop=self.list.scrollTop(),currentItemHeight=currentOption.height(),currentTopPosition=currentOption.position().top,absCurrentTopPosition=Math.abs(currentTopPosition),listHeight=self.list.height(),currentText;if(type==="search"){if(listHeight-currentTopPosition<currentItemHeight){self.list.scrollTop(listScrollTop+(currentTopPosition-(listHeight-currentItemHeight)))}else if(currentTopPosition<-1)self.list.scrollTop(currentTopPosition-currentItemHeight)}else if(type==="up"){if(currentTopPosition<-1)self.list.scrollTop(listScrollTop-absCurrentTopPosition)}else if(type==="down")if(listHeight-currentTopPosition<currentItemHeight)self.list.scrollTop((listScrollTop+(absCurrentTopPosition-listHeight+currentItemHeight)));return self},_callbackSupport:function(callback){var self=this;if($.isFunction(callback))callback.call(self,self.dropdown);return self},_setText:function(elem,currentText){var self=this;if(self.options["html"]){elem.html(currentText)}else elem.text(currentText);return self},open:function(callback){var self=this,showEffect=self.options["showEffect"],showEffectSpeed=self.options["showEffectSpeed"],showEffectOptions=self.options["showEffectOptions"],isNative=self.options["native"],isMobile=self.isMobile;if(!self.listItems.length||self.dropdown.hasClass(self.theme["disabled"]))return self;if((!isNative&&!isMobile)&&!this.list.is(":visible")){self.triggerEvent("open");if(self._dynamicPositioning&&self.options["dynamicPositioning"])self._dynamicPositioning();if(showEffect==="none"){self.list.show()}else if(showEffect==="show"||showEffect==="slideDown"||showEffect==="fadeIn"){self.list[showEffect](showEffectSpeed)}else self.list.show(showEffect,showEffectOptions,showEffectSpeed);self.list.promise().done(function(){self._scrollToView("search");self.triggerEvent("opened")})};self._callbackSupport(callback);return self},close:function(callback){var self=this,hideEffect=self.options["hideEffect"],hideEffectSpeed=self.options["hideEffectSpeed"],hideEffectOptions=self.options["hideEffectOptions"],isNative=self.options["native"],isMobile=self.isMobile;if((!isNative&&!isMobile)&&self.list.is(":visible")){self.triggerEvent("close");if(hideEffect==="none"){self.list.hide()}else if(hideEffect==="hide"||hideEffect==="slideUp"||hideEffect==="fadeOut"){self.list[hideEffect](hideEffectSpeed)}else self.list.hide(hideEffect,hideEffectOptions,hideEffectSpeed);self.list.promise().done(function(){self.triggerEvent("closed")})};self._callbackSupport(callback);return self},toggle:function(){var self=this,listIsVisible=self.list.is(":visible");if(listIsVisible){self.close()}else if(!listIsVisible)self.open()},_keyMappings:{"38":"up","40":"down","13":"enter","8":"backspace","9":"tab","32":"space","27":"esc"},_keydownMethods:function(){var self=this,moveToOption=self.list.is(":visible")||!self.options["keydownOpen"];return{down:function(){if(self.moveDown&&moveToOption)self.moveDown()},up:function(){if(self.moveUp&&moveToOption)self.moveUp()},enter:function(){var activeElem=self.listItems.eq(self.currentFocus);self._update(activeElem);if(activeElem.attr("data-preventclose")!=="true")self.close();self.triggerEvent("enter")},tab:function(){self.triggerEvent("tab-blur");self.close()},backspace:function(){self.triggerEvent("backspace")},esc:function(){self.close()}}},_eventHandlers:function(){var self=this,nativeMousedown=self.options["nativeMousedown"],customShowHideEvent=self.options["customShowHideEvent"],currentDataText,currentText,focusClass=self.focusClass,hoverClass=self.hoverClass,openClass=self.openClass;this.dropdown.on({"click.selectBoxIt":function(){self.dropdown.trigger("focus",true);if(!self.originalElem.disabled){self.triggerEvent("click");if(!nativeMousedown&&!customShowHideEvent)self.toggle()}},"mousedown.selectBoxIt":function(){$(this).data("mdown",true);self.triggerEvent("mousedown");if(nativeMousedown&&!customShowHideEvent)self.toggle()},"mouseup.selectBoxIt":function(){self.triggerEvent("mouseup")},"blur.selectBoxIt":function(){if(self.blur){self.triggerEvent("blur");self.close();$(this).removeClass(focusClass)}},"focus.selectBoxIt":function(event,internal){var mdown=$(this).data("mdown");$(this).removeData("mdown");if(!mdown&&!internal)setTimeout(function(){self.triggerEvent("tab-focus")},0);if(!internal){if(!$(this).hasClass(self.theme["disabled"]))$(this).addClass(focusClass);self.triggerEvent("focus")}},"keydown.selectBoxIt":function(e){var currentKey=self._keyMappings[e.keyCode],keydownMethod=self._keydownMethods()[currentKey];if(keydownMethod){keydownMethod();if(self.options["keydownOpen"]&&(currentKey==="up"||currentKey==="down"))self.open()};if(keydownMethod&&currentKey!=="tab")e.preventDefault()},"keypress.selectBoxIt":function(e){var currentKey=e.charCode||e.keyCode,key=self._keyMappings[e.charCode||e.keyCode],alphaNumericKey=String.fromCharCode(currentKey);if(self.search&&(!key||(key&&key==="space")))self.search(alphaNumericKey,true,true);if(key==="space")e.preventDefault()},"mouseenter.selectBoxIt":function(){self.triggerEvent("mouseenter")},"mouseleave.selectBoxIt":function(){self.triggerEvent("mouseleave")}});self.list.on({"mouseover.selectBoxIt":function(){self.blur=false},"mouseout.selectBoxIt":function(){self.blur=true},"focusin.selectBoxIt":function(){self.dropdown.trigger("focus",true)}});self.list.on({"mousedown.selectBoxIt":function(){self._update($(this));self.triggerEvent("option-click");if($(this).attr("data-disabled")==="false"&&$(this).attr("data-preventclose")!=="true")self.close();setTimeout(function(){self.dropdown.trigger('focus',true)},0)},"focusin.selectBoxIt":function(){self.listItems.not($(this)).removeAttr("data-active");$(this).attr("data-active","");var listIsHidden=self.list.is(":hidden");if((self.options["searchWhenHidden"]&&listIsHidden)||self.options["aggressiveChange"]||(listIsHidden&&self.options["selectWhenHidden"]))self._update($(this));$(this).addClass(focusClass)},"mouseup.selectBoxIt":function(){if(nativeMousedown&&!customShowHideEvent){self._update($(this));self.triggerEvent("option-mouseup");if($(this).attr("data-disabled")==="false"&&$(this).attr("data-preventclose")!=="true")self.close()}},"mouseenter.selectBoxIt":function(){if($(this).attr("data-disabled")==="false"){self.listItems.removeAttr("data-active");$(this).addClass(focusClass).attr("data-active","");self.listItems.not($(this)).removeClass(focusClass);$(this).addClass(focusClass);self.currentFocus=+$(this).attr("data-id")}},"mouseleave.selectBoxIt":function(){if($(this).attr("data-disabled")==="false"){self.listItems.not($(this)).removeClass(focusClass).removeAttr("data-active");$(this).addClass(focusClass);self.currentFocus=+$(this).attr("data-id")}},"blur.selectBoxIt":function(){$(this).removeClass(focusClass)}},".selectboxit-option");self.list.on({"click.selectBoxIt":function(ev){ev.preventDefault()}},"a");self.selectBox.on({"change.selectBoxIt, internal-change.selectBoxIt":function(event,internal){var currentOption,currentDataSelectedText;if(!internal){currentOption=self.list.find('li[data-val="'+self.originalElem.value+'"]');if(currentOption.length){self.listItems.eq(self.currentFocus).removeClass(self.focusClass);self.currentFocus=+currentOption.attr("data-id")}};currentOption=self.listItems.eq(self.currentFocus);currentDataSelectedText=currentOption.attr("data-selectedtext");currentDataText=currentOption.attr("data-text");currentText=currentDataText?currentDataText:currentOption.find("a").text();self._setText(self.dropdownText,currentDataSelectedText||currentText);self.dropdownText.attr("data-val",self.originalElem.value);if(currentOption.find("i").attr("class")){self.dropdownImage.attr("class",currentOption.find("i").attr("class")).addClass("selectboxit-default-icon");self.dropdownImage.attr("style",currentOption.find("i").attr("style"))};self.triggerEvent("changed")},"disable.selectBoxIt":function(){self.dropdown.addClass(self.theme["disabled"])},"enable.selectBoxIt":function(){self.dropdown.removeClass(self.theme["disabled"])},"open.selectBoxIt":function(){var currentElem=self.list.find("li[data-val='"+self.dropdownText.attr("data-val")+"']"),activeElem;if(!currentElem.length)currentElem=self.listItems.not("[data-disabled=true]").first();self.currentFocus=+currentElem.attr("data-id");activeElem=self.listItems.eq(self.currentFocus);self.dropdown.addClass(openClass).removeClass(hoverClass).addClass(focusClass);self.listItems.removeClass(self.selectedClass).removeAttr("data-active").not(activeElem).removeClass(focusClass);activeElem.addClass(self.selectedClass).addClass(focusClass);if(self.options.hideCurrent){self.listItems.show();activeElem.hide()}},"close.selectBoxIt":function(){self.dropdown.removeClass(openClass)},"blur.selectBoxIt":function(){self.dropdown.removeClass(focusClass)},"mouseenter.selectBoxIt":function(){if(!$(this).hasClass(self.theme["disabled"]))self.dropdown.addClass(hoverClass)},"mouseleave.selectBoxIt":function(){self.dropdown.removeClass(hoverClass)},destroy:function(ev){ev.preventDefault();ev.stopPropagation()}});return self},_update:function(elem){var self=this,currentDataSelectedText,currentDataText,currentText,defaultText=self.options["defaultText"]||self.selectBox.attr("data-text"),currentElem=self.listItems.eq(self.currentFocus);if(elem.attr("data-disabled")==="false"){currentDataSelectedText=self.listItems.eq(self.currentFocus).attr("data-selectedtext");currentDataText=currentElem.attr("data-text");currentText=currentDataText?currentDataText:currentElem.text();if((defaultText&&self.options["html"]?self.dropdownText.html()===defaultText:self.dropdownText.text()===defaultText)&&self.selectBox.val()===elem.attr("data-val")){self.triggerEvent("change")}else{self.selectBox.val(elem.attr("data-val"));self.currentFocus=+elem.attr("data-id");if(self.originalElem.value!==self.dropdownText.attr("data-val"))self.triggerEvent("change")}}},_addClasses:function(obj){var self=this,focusClass=self.focusClass=obj.focus,hoverClass=self.hoverClass=obj.hover,buttonClass=obj.button,listClass=obj.list,arrowClass=obj.arrow,containerClass=obj.container,openClass=self.openClass=obj.open;self.selectedClass="selectboxit-selected";self.downArrow.addClass(self.selectBox.attr("data-downarrow")||self.options["downArrowIcon"]||arrowClass);self.dropdownContainer.addClass(containerClass);self.dropdown.addClass(buttonClass);self.list.addClass(listClass);return self},refresh:function(callback,internal){var self=this;self._destroySelectBoxIt()._create(true);if(!internal)self.triggerEvent("refresh");self._callbackSupport(callback);return self},htmlEscape:function(str){return String(str).replace(/&/g,"&amp;").replace(/"/g,"&quot;").replace(/'/g,"&#39;").replace(/</g,"&lt;").replace(/>/g,"&gt;")},triggerEvent:function(eventName){var self=this,currentIndex=self.options["showFirstOption"]?self.currentFocus:((self.currentFocus-1)>=0?self.currentFocus:0);self.selectBox.trigger(eventName,{selectbox:self.selectBox,selectboxOption:self.selectItems.eq(currentIndex),dropdown:self.dropdown,dropdownOption:self.listItems.eq(self.currentFocus)});return self},_copyAttributes:function(){var self=this;if(self._addSelectBoxAttributes)self._addSelectBoxAttributes();return self},_realOuterWidth:function(elem){if(elem.is(":visible"))return elem.outerWidth(true);var self=this,clonedElem=elem.clone(),outerWidth;clonedElem.css({visibility:"hidden",display:"block",position:"absolute"}).appendTo("body");outerWidth=clonedElem.outerWidth(true);clonedElem.remove();return outerWidth}});var selectBoxIt=$.selectBox.selectBoxIt.prototype;selectBoxIt._updateMobileText=function(){var self=this,currentOption,currentDataText,currentText;currentOption=self.selectBox.find("option").filter(":selected");currentDataText=currentOption.attr("data-text");currentText=currentDataText?currentDataText:currentOption.text();self._setText(self.dropdownText,currentText);if(self.list.find('li[data-val="'+currentOption.val()+'"]').find("i").attr("class"))self.dropdownImage.attr("class",self.list.find('li[data-val="'+currentOption.val()+'"]').find("i").attr("class")).addClass("selectboxit-default-icon")};selectBoxIt._applyNativeSelect=function(){var self=this;self.dropdownContainer.append(self.selectBox);self.dropdown.attr("tabindex","-1");self.selectBox.css({display:"block",visibility:"visible",width:self._realOuterWidth(self.dropdown),height:self.dropdown.outerHeight(),opacity:"0",position:"absolute",top:"0",left:"0",cursor:"pointer","z-index":"999999",margin:self.dropdown.css("margin"),padding:"0","-webkit-appearance":"menulist-button"});if(self.originalElem.disabled)self.triggerEvent("disable");return this};selectBoxIt._mobileEvents=function(){var self=this;self.selectBox.on({"changed.selectBoxIt":function(){self.hasChanged=true;self._updateMobileText();self.triggerEvent("option-click")},"mousedown.selectBoxIt":function(){if(!self.hasChanged&&self.options.defaultText&&!self.originalElem.disabled){self._updateMobileText();self.triggerEvent("option-click")}},"enable.selectBoxIt":function(){self.selectBox.removeClass('selectboxit-rendering')},"disable.selectBoxIt":function(){self.selectBox.addClass('selectboxit-rendering')}})};selectBoxIt._mobile=function(callback){var self=this;if(self.isMobile){self._applyNativeSelect();self._mobileEvents()};return this}}));;
/* Source and licensing information for the above line(s) can be found at https://www.redhat.com/profiles/rh/themes/redhatdotcom/js/jquery.selectBoxIt/jquery.selectBoxIt.js. */
;/*})'"*/

(function($){$.belowthefold=function(element,settings){var fold=$(window).height()+$(window).scrollTop();return fold<=$(element).offset().top-settings.threshold;};$.abovethetop=function(element,settings){var top=$(window).scrollTop();return top>=$(element).offset().top+$(element).height()-settings.threshold;};$.rightofscreen=function(element,settings){var fold=$(window).width()+$(window).scrollLeft();return fold<=$(element).offset().left-settings.threshold;};$.leftofscreen=function(element,settings){var left=$(window).scrollLeft();return left>=$(element).offset().left+$(element).width()-settings.threshold;};$.inviewport=function(element,settings){return!$.rightofscreen(element,settings)&&!$.leftofscreen(element,settings)&&!$.belowthefold(element,settings)&&!$.abovethetop(element,settings);};$.extend($.expr[':'],{"below-the-fold":function(a,i,m){return $.belowthefold(a,{threshold:0});},"above-the-top":function(a,i,m){return $.abovethetop(a,{threshold:0});},"left-of-screen":function(a,i,m){return $.leftofscreen(a,{threshold:0});},"right-of-screen":function(a,i,m){return $.rightofscreen(a,{threshold:0});},"in-viewport":function(a,i,m){return $.inviewport(a,{threshold:0});}});})(jQuery);
;/*})'"*/
;/*})'"*/
/* Source and licensing information for the line(s) below can be found at https://www.redhat.com/profiles/rh/themes/redhatdotcom/js/script.js. */
(function($,Drupal,window,document,undefined){Drupal.behaviors.my_custom_behavior={attach:function(context,settings){if($('#edit-submit-resource-db-index').length)$('#edit-submit-resource-db-index').unbind()}}})(jQuery,Drupal,this,this.document);;
/* Source and licensing information for the above line(s) can be found at https://www.redhat.com/profiles/rh/themes/redhatdotcom/js/script.js. */
;/*})'"*/
