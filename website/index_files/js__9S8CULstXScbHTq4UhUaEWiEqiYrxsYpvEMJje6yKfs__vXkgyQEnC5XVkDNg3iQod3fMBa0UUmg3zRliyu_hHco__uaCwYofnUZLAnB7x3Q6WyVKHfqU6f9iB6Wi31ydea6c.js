/*! jQuery v1.10.2 | (c) 2005, 2013 jQuery Foundation, Inc. | jquery.org/license
//@ sourceMappingURL=jquery-1.10.2.min.map
*/
(function(e,t){var n,r,i=typeof t,o=e.location,a=e.document,s=a.documentElement,l=e.jQuery,u=e.$,c={},p=[],f="1.10.2",d=p.concat,h=p.push,g=p.slice,m=p.indexOf,y=c.toString,v=c.hasOwnProperty,b=f.trim,x=function(e,t){return new x.fn.init(e,t,r)},w=/[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,T=/\S+/g,C=/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,N=/^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]*))$/,k=/^<(\w+)\s*\/?>(?:<\/\1>|)$/,E=/^[\],:{}\s]*$/,S=/(?:^|:|,)(?:\s*\[)+/g,A=/\\(?:["\\\/bfnrt]|u[\da-fA-F]{4})/g,j=/"[^"\\\r\n]*"|true|false|null|-?(?:\d+\.|)\d+(?:[eE][+-]?\d+|)/g,D=/^-ms-/,L=/-([\da-z])/gi,H=function(e,t){return t.toUpperCase()},q=function(e){(a.addEventListener||"load"===e.type||"complete"===a.readyState)&&(_(),x.ready())},_=function(){a.addEventListener?(a.removeEventListener("DOMContentLoaded",q,!1),e.removeEventListener("load",q,!1)):(a.detachEvent("onreadystatechange",q),e.detachEvent("onload",q))};x.fn=x.prototype={jquery:f,constructor:x,init:function(e,n,r){var i,o;if(!e)return this;if("string"==typeof e){if(i="<"===e.charAt(0)&&">"===e.charAt(e.length-1)&&e.length>=3?[null,e,null]:N.exec(e),!i||!i[1]&&n)return!n||n.jquery?(n||r).find(e):this.constructor(n).find(e);if(i[1]){if(n=n instanceof x?n[0]:n,x.merge(this,x.parseHTML(i[1],n&&n.nodeType?n.ownerDocument||n:a,!0)),k.test(i[1])&&x.isPlainObject(n))for(i in n)x.isFunction(this[i])?this[i](n[i]):this.attr(i,n[i]);return this}if(o=a.getElementById(i[2]),o&&o.parentNode){if(o.id!==i[2])return r.find(e);this.length=1,this[0]=o}return this.context=a,this.selector=e,this}return e.nodeType?(this.context=this[0]=e,this.length=1,this):x.isFunction(e)?r.ready(e):(e.selector!==t&&(this.selector=e.selector,this.context=e.context),x.makeArray(e,this))},selector:"",length:0,toArray:function(){return g.call(this)},get:function(e){return null==e?this.toArray():0>e?this[this.length+e]:this[e]},pushStack:function(e){var t=x.merge(this.constructor(),e);return t.prevObject=this,t.context=this.context,t},each:function(e,t){return x.each(this,e,t)},ready:function(e){return x.ready.promise().done(e),this},slice:function(){return this.pushStack(g.apply(this,arguments))},first:function(){return this.eq(0)},last:function(){return this.eq(-1)},eq:function(e){var t=this.length,n=+e+(0>e?t:0);return this.pushStack(n>=0&&t>n?[this[n]]:[])},map:function(e){return this.pushStack(x.map(this,function(t,n){return e.call(t,n,t)}))},end:function(){return this.prevObject||this.constructor(null)},push:h,sort:[].sort,splice:[].splice},x.fn.init.prototype=x.fn,x.extend=x.fn.extend=function(){var e,n,r,i,o,a,s=arguments[0]||{},l=1,u=arguments.length,c=!1;for("boolean"==typeof s&&(c=s,s=arguments[1]||{},l=2),"object"==typeof s||x.isFunction(s)||(s={}),u===l&&(s=this,--l);u>l;l++)if(null!=(o=arguments[l]))for(i in o)e=s[i],r=o[i],s!==r&&(c&&r&&(x.isPlainObject(r)||(n=x.isArray(r)))?(n?(n=!1,a=e&&x.isArray(e)?e:[]):a=e&&x.isPlainObject(e)?e:{},s[i]=x.extend(c,a,r)):r!==t&&(s[i]=r));return s},x.extend({expando:"jQuery"+(f+Math.random()).replace(/\D/g,""),noConflict:function(t){return e.$===x&&(e.$=u),t&&e.jQuery===x&&(e.jQuery=l),x},isReady:!1,readyWait:1,holdReady:function(e){e?x.readyWait++:x.ready(!0)},ready:function(e){if(e===!0?!--x.readyWait:!x.isReady){if(!a.body)return setTimeout(x.ready);x.isReady=!0,e!==!0&&--x.readyWait>0||(n.resolveWith(a,[x]),x.fn.trigger&&x(a).trigger("ready").off("ready"))}},isFunction:function(e){return"function"===x.type(e)},isArray:Array.isArray||function(e){return"array"===x.type(e)},isWindow:function(e){return null!=e&&e==e.window},isNumeric:function(e){return!isNaN(parseFloat(e))&&isFinite(e)},type:function(e){return null==e?e+"":"object"==typeof e||"function"==typeof e?c[y.call(e)]||"object":typeof e},isPlainObject:function(e){var n;if(!e||"object"!==x.type(e)||e.nodeType||x.isWindow(e))return!1;try{if(e.constructor&&!v.call(e,"constructor")&&!v.call(e.constructor.prototype,"isPrototypeOf"))return!1}catch(r){return!1}if(x.support.ownLast)for(n in e)return v.call(e,n);for(n in e);return n===t||v.call(e,n)},isEmptyObject:function(e){var t;for(t in e)return!1;return!0},error:function(e){throw Error(e)},parseHTML:function(e,t,n){if(!e||"string"!=typeof e)return null;"boolean"==typeof t&&(n=t,t=!1),t=t||a;var r=k.exec(e),i=!n&&[];return r?[t.createElement(r[1])]:(r=x.buildFragment([e],t,i),i&&x(i).remove(),x.merge([],r.childNodes))},parseJSON:function(n){return e.JSON&&e.JSON.parse?e.JSON.parse(n):null===n?n:"string"==typeof n&&(n=x.trim(n),n&&E.test(n.replace(A,"@").replace(j,"]").replace(S,"")))?Function("return "+n)():(x.error("Invalid JSON: "+n),t)},parseXML:function(n){var r,i;if(!n||"string"!=typeof n)return null;try{e.DOMParser?(i=new DOMParser,r=i.parseFromString(n,"text/xml")):(r=new ActiveXObject("Microsoft.XMLDOM"),r.async="false",r.loadXML(n))}catch(o){r=t}return r&&r.documentElement&&!r.getElementsByTagName("parsererror").length||x.error("Invalid XML: "+n),r},noop:function(){},globalEval:function(t){t&&x.trim(t)&&(e.execScript||function(t){e.eval.call(e,t)})(t)},camelCase:function(e){return e.replace(D,"ms-").replace(L,H)},nodeName:function(e,t){return e.nodeName&&e.nodeName.toLowerCase()===t.toLowerCase()},each:function(e,t,n){var r,i=0,o=e.length,a=M(e);if(n){if(a){for(;o>i;i++)if(r=t.apply(e[i],n),r===!1)break}else for(i in e)if(r=t.apply(e[i],n),r===!1)break}else if(a){for(;o>i;i++)if(r=t.call(e[i],i,e[i]),r===!1)break}else for(i in e)if(r=t.call(e[i],i,e[i]),r===!1)break;return e},trim:b&&!b.call("\ufeff\u00a0")?function(e){return null==e?"":b.call(e)}:function(e){return null==e?"":(e+"").replace(C,"")},makeArray:function(e,t){var n=t||[];return null!=e&&(M(Object(e))?x.merge(n,"string"==typeof e?[e]:e):h.call(n,e)),n},inArray:function(e,t,n){var r;if(t){if(m)return m.call(t,e,n);for(r=t.length,n=n?0>n?Math.max(0,r+n):n:0;r>n;n++)if(n in t&&t[n]===e)return n}return-1},merge:function(e,n){var r=n.length,i=e.length,o=0;if("number"==typeof r)for(;r>o;o++)e[i++]=n[o];else while(n[o]!==t)e[i++]=n[o++];return e.length=i,e},grep:function(e,t,n){var r,i=[],o=0,a=e.length;for(n=!!n;a>o;o++)r=!!t(e[o],o),n!==r&&i.push(e[o]);return i},map:function(e,t,n){var r,i=0,o=e.length,a=M(e),s=[];if(a)for(;o>i;i++)r=t(e[i],i,n),null!=r&&(s[s.length]=r);else for(i in e)r=t(e[i],i,n),null!=r&&(s[s.length]=r);return d.apply([],s)},guid:1,proxy:function(e,n){var r,i,o;return"string"==typeof n&&(o=e[n],n=e,e=o),x.isFunction(e)?(r=g.call(arguments,2),i=function(){return e.apply(n||this,r.concat(g.call(arguments)))},i.guid=e.guid=e.guid||x.guid++,i):t},access:function(e,n,r,i,o,a,s){var l=0,u=e.length,c=null==r;if("object"===x.type(r)){o=!0;for(l in r)x.access(e,n,l,r[l],!0,a,s)}else if(i!==t&&(o=!0,x.isFunction(i)||(s=!0),c&&(s?(n.call(e,i),n=null):(c=n,n=function(e,t,n){return c.call(x(e),n)})),n))for(;u>l;l++)n(e[l],r,s?i:i.call(e[l],l,n(e[l],r)));return o?e:c?n.call(e):u?n(e[0],r):a},now:function(){return(new Date).getTime()},swap:function(e,t,n,r){var i,o,a={};for(o in t)a[o]=e.style[o],e.style[o]=t[o];i=n.apply(e,r||[]);for(o in t)e.style[o]=a[o];return i}}),x.ready.promise=function(t){if(!n)if(n=x.Deferred(),"complete"===a.readyState)setTimeout(x.ready);else if(a.addEventListener)a.addEventListener("DOMContentLoaded",q,!1),e.addEventListener("load",q,!1);else{a.attachEvent("onreadystatechange",q),e.attachEvent("onload",q);var r=!1;try{r=null==e.frameElement&&a.documentElement}catch(i){}r&&r.doScroll&&function o(){if(!x.isReady){try{r.doScroll("left")}catch(e){return setTimeout(o,50)}_(),x.ready()}}()}return n.promise(t)},x.each("Boolean Number String Function Array Date RegExp Object Error".split(" "),function(e,t){c["[object "+t+"]"]=t.toLowerCase()});function M(e){var t=e.length,n=x.type(e);return x.isWindow(e)?!1:1===e.nodeType&&t?!0:"array"===n||"function"!==n&&(0===t||"number"==typeof t&&t>0&&t-1 in e)}r=x(a),function(e,t){var n,r,i,o,a,s,l,u,c,p,f,d,h,g,m,y,v,b="sizzle"+-new Date,w=e.document,T=0,C=0,N=st(),k=st(),E=st(),S=!1,A=function(e,t){return e===t?(S=!0,0):0},j=typeof t,D=1<<31,L={}.hasOwnProperty,H=[],q=H.pop,_=H.push,M=H.push,O=H.slice,F=H.indexOf||function(e){var t=0,n=this.length;for(;n>t;t++)if(this[t]===e)return t;return-1},B="checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",P="[\\x20\\t\\r\\n\\f]",R="(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+",W=R.replace("w","w#"),$="\\["+P+"*("+R+")"+P+"*(?:([*^$|!~]?=)"+P+"*(?:(['\"])((?:\\\\.|[^\\\\])*?)\\3|("+W+")|)|)"+P+"*\\]",I=":("+R+")(?:\\(((['\"])((?:\\\\.|[^\\\\])*?)\\3|((?:\\\\.|[^\\\\()[\\]]|"+$.replace(3,8)+")*)|.*)\\)|)",z=RegExp("^"+P+"+|((?:^|[^\\\\])(?:\\\\.)*)"+P+"+$","g"),X=RegExp("^"+P+"*,"+P+"*"),U=RegExp("^"+P+"*([>+~]|"+P+")"+P+"*"),V=RegExp(P+"*[+~]"),Y=RegExp("="+P+"*([^\\]'\"]*)"+P+"*\\]","g"),J=RegExp(I),G=RegExp("^"+W+"$"),Q={ID:RegExp("^#("+R+")"),CLASS:RegExp("^\\.("+R+")"),TAG:RegExp("^("+R.replace("w","w*")+")"),ATTR:RegExp("^"+$),PSEUDO:RegExp("^"+I),CHILD:RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\("+P+"*(even|odd|(([+-]|)(\\d*)n|)"+P+"*(?:([+-]|)"+P+"*(\\d+)|))"+P+"*\\)|)","i"),bool:RegExp("^(?:"+B+")$","i"),needsContext:RegExp("^"+P+"*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\("+P+"*((?:-\\d)?\\d*)"+P+"*\\)|)(?=[^-]|$)","i")},K=/^[^{]+\{\s*\[native \w/,Z=/^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,et=/^(?:input|select|textarea|button)$/i,tt=/^h\d$/i,nt=/'|\\/g,rt=RegExp("\\\\([\\da-f]{1,6}"+P+"?|("+P+")|.)","ig"),it=function(e,t,n){var r="0x"+t-65536;return r!==r||n?t:0>r?String.fromCharCode(r+65536):String.fromCharCode(55296|r>>10,56320|1023&r)};try{M.apply(H=O.call(w.childNodes),w.childNodes),H[w.childNodes.length].nodeType}catch(ot){M={apply:H.length?function(e,t){_.apply(e,O.call(t))}:function(e,t){var n=e.length,r=0;while(e[n++]=t[r++]);e.length=n-1}}}function at(e,t,n,i){var o,a,s,l,u,c,d,m,y,x;if((t?t.ownerDocument||t:w)!==f&&p(t),t=t||f,n=n||[],!e||"string"!=typeof e)return n;if(1!==(l=t.nodeType)&&9!==l)return[];if(h&&!i){if(o=Z.exec(e))if(s=o[1]){if(9===l){if(a=t.getElementById(s),!a||!a.parentNode)return n;if(a.id===s)return n.push(a),n}else if(t.ownerDocument&&(a=t.ownerDocument.getElementById(s))&&v(t,a)&&a.id===s)return n.push(a),n}else{if(o[2])return M.apply(n,t.getElementsByTagName(e)),n;if((s=o[3])&&r.getElementsByClassName&&t.getElementsByClassName)return M.apply(n,t.getElementsByClassName(s)),n}if(r.qsa&&(!g||!g.test(e))){if(m=d=b,y=t,x=9===l&&e,1===l&&"object"!==t.nodeName.toLowerCase()){c=mt(e),(d=t.getAttribute("id"))?m=d.replace(nt,"\\$&"):t.setAttribute("id",m),m="[id='"+m+"'] ",u=c.length;while(u--)c[u]=m+yt(c[u]);y=V.test(e)&&t.parentNode||t,x=c.join(",")}if(x)try{return M.apply(n,y.querySelectorAll(x)),n}catch(T){}finally{d||t.removeAttribute("id")}}}return kt(e.replace(z,"$1"),t,n,i)}function st(){var e=[];function t(n,r){return e.push(n+=" ")>o.cacheLength&&delete t[e.shift()],t[n]=r}return t}function lt(e){return e[b]=!0,e}function ut(e){var t=f.createElement("div");try{return!!e(t)}catch(n){return!1}finally{t.parentNode&&t.parentNode.removeChild(t),t=null}}function ct(e,t){var n=e.split("|"),r=e.length;while(r--)o.attrHandle[n[r]]=t}function pt(e,t){var n=t&&e,r=n&&1===e.nodeType&&1===t.nodeType&&(~t.sourceIndex||D)-(~e.sourceIndex||D);if(r)return r;if(n)while(n=n.nextSibling)if(n===t)return-1;return e?1:-1}function ft(e){return function(t){var n=t.nodeName.toLowerCase();return"input"===n&&t.type===e}}function dt(e){return function(t){var n=t.nodeName.toLowerCase();return("input"===n||"button"===n)&&t.type===e}}function ht(e){return lt(function(t){return t=+t,lt(function(n,r){var i,o=e([],n.length,t),a=o.length;while(a--)n[i=o[a]]&&(n[i]=!(r[i]=n[i]))})})}s=at.isXML=function(e){var t=e&&(e.ownerDocument||e).documentElement;return t?"HTML"!==t.nodeName:!1},r=at.support={},p=at.setDocument=function(e){var n=e?e.ownerDocument||e:w,i=n.defaultView;return n!==f&&9===n.nodeType&&n.documentElement?(f=n,d=n.documentElement,h=!s(n),i&&i.attachEvent&&i!==i.top&&i.attachEvent("onbeforeunload",function(){p()}),r.attributes=ut(function(e){return e.className="i",!e.getAttribute("className")}),r.getElementsByTagName=ut(function(e){return e.appendChild(n.createComment("")),!e.getElementsByTagName("*").length}),r.getElementsByClassName=ut(function(e){return e.innerHTML="<div class='a'></div><div class='a i'></div>",e.firstChild.className="i",2===e.getElementsByClassName("i").length}),r.getById=ut(function(e){return d.appendChild(e).id=b,!n.getElementsByName||!n.getElementsByName(b).length}),r.getById?(o.find.ID=function(e,t){if(typeof t.getElementById!==j&&h){var n=t.getElementById(e);return n&&n.parentNode?[n]:[]}},o.filter.ID=function(e){var t=e.replace(rt,it);return function(e){return e.getAttribute("id")===t}}):(delete o.find.ID,o.filter.ID=function(e){var t=e.replace(rt,it);return function(e){var n=typeof e.getAttributeNode!==j&&e.getAttributeNode("id");return n&&n.value===t}}),o.find.TAG=r.getElementsByTagName?function(e,n){return typeof n.getElementsByTagName!==j?n.getElementsByTagName(e):t}:function(e,t){var n,r=[],i=0,o=t.getElementsByTagName(e);if("*"===e){while(n=o[i++])1===n.nodeType&&r.push(n);return r}return o},o.find.CLASS=r.getElementsByClassName&&function(e,n){return typeof n.getElementsByClassName!==j&&h?n.getElementsByClassName(e):t},m=[],g=[],(r.qsa=K.test(n.querySelectorAll))&&(ut(function(e){e.innerHTML="<select><option selected=''></option></select>",e.querySelectorAll("[selected]").length||g.push("\\["+P+"*(?:value|"+B+")"),e.querySelectorAll(":checked").length||g.push(":checked")}),ut(function(e){var t=n.createElement("input");t.setAttribute("type","hidden"),e.appendChild(t).setAttribute("t",""),e.querySelectorAll("[t^='']").length&&g.push("[*^$]="+P+"*(?:''|\"\")"),e.querySelectorAll(":enabled").length||g.push(":enabled",":disabled"),e.querySelectorAll("*,:x"),g.push(",.*:")})),(r.matchesSelector=K.test(y=d.webkitMatchesSelector||d.mozMatchesSelector||d.oMatchesSelector||d.msMatchesSelector))&&ut(function(e){r.disconnectedMatch=y.call(e,"div"),y.call(e,"[s!='']:x"),m.push("!=",I)}),g=g.length&&RegExp(g.join("|")),m=m.length&&RegExp(m.join("|")),v=K.test(d.contains)||d.compareDocumentPosition?function(e,t){var n=9===e.nodeType?e.documentElement:e,r=t&&t.parentNode;return e===r||!(!r||1!==r.nodeType||!(n.contains?n.contains(r):e.compareDocumentPosition&&16&e.compareDocumentPosition(r)))}:function(e,t){if(t)while(t=t.parentNode)if(t===e)return!0;return!1},A=d.compareDocumentPosition?function(e,t){if(e===t)return S=!0,0;var i=t.compareDocumentPosition&&e.compareDocumentPosition&&e.compareDocumentPosition(t);return i?1&i||!r.sortDetached&&t.compareDocumentPosition(e)===i?e===n||v(w,e)?-1:t===n||v(w,t)?1:c?F.call(c,e)-F.call(c,t):0:4&i?-1:1:e.compareDocumentPosition?-1:1}:function(e,t){var r,i=0,o=e.parentNode,a=t.parentNode,s=[e],l=[t];if(e===t)return S=!0,0;if(!o||!a)return e===n?-1:t===n?1:o?-1:a?1:c?F.call(c,e)-F.call(c,t):0;if(o===a)return pt(e,t);r=e;while(r=r.parentNode)s.unshift(r);r=t;while(r=r.parentNode)l.unshift(r);while(s[i]===l[i])i++;return i?pt(s[i],l[i]):s[i]===w?-1:l[i]===w?1:0},n):f},at.matches=function(e,t){return at(e,null,null,t)},at.matchesSelector=function(e,t){if((e.ownerDocument||e)!==f&&p(e),t=t.replace(Y,"='$1']"),!(!r.matchesSelector||!h||m&&m.test(t)||g&&g.test(t)))try{var n=y.call(e,t);if(n||r.disconnectedMatch||e.document&&11!==e.document.nodeType)return n}catch(i){}return at(t,f,null,[e]).length>0},at.contains=function(e,t){return(e.ownerDocument||e)!==f&&p(e),v(e,t)},at.attr=function(e,n){(e.ownerDocument||e)!==f&&p(e);var i=o.attrHandle[n.toLowerCase()],a=i&&L.call(o.attrHandle,n.toLowerCase())?i(e,n,!h):t;return a===t?r.attributes||!h?e.getAttribute(n):(a=e.getAttributeNode(n))&&a.specified?a.value:null:a},at.error=function(e){throw Error("Syntax error, unrecognized expression: "+e)},at.uniqueSort=function(e){var t,n=[],i=0,o=0;if(S=!r.detectDuplicates,c=!r.sortStable&&e.slice(0),e.sort(A),S){while(t=e[o++])t===e[o]&&(i=n.push(o));while(i--)e.splice(n[i],1)}return e},a=at.getText=function(e){var t,n="",r=0,i=e.nodeType;if(i){if(1===i||9===i||11===i){if("string"==typeof e.textContent)return e.textContent;for(e=e.firstChild;e;e=e.nextSibling)n+=a(e)}else if(3===i||4===i)return e.nodeValue}else for(;t=e[r];r++)n+=a(t);return n},o=at.selectors={cacheLength:50,createPseudo:lt,match:Q,attrHandle:{},find:{},relative:{">":{dir:"parentNode",first:!0}," ":{dir:"parentNode"},"+":{dir:"previousSibling",first:!0},"~":{dir:"previousSibling"}},preFilter:{ATTR:function(e){return e[1]=e[1].replace(rt,it),e[3]=(e[4]||e[5]||"").replace(rt,it),"~="===e[2]&&(e[3]=" "+e[3]+" "),e.slice(0,4)},CHILD:function(e){return e[1]=e[1].toLowerCase(),"nth"===e[1].slice(0,3)?(e[3]||at.error(e[0]),e[4]=+(e[4]?e[5]+(e[6]||1):2*("even"===e[3]||"odd"===e[3])),e[5]=+(e[7]+e[8]||"odd"===e[3])):e[3]&&at.error(e[0]),e},PSEUDO:function(e){var n,r=!e[5]&&e[2];return Q.CHILD.test(e[0])?null:(e[3]&&e[4]!==t?e[2]=e[4]:r&&J.test(r)&&(n=mt(r,!0))&&(n=r.indexOf(")",r.length-n)-r.length)&&(e[0]=e[0].slice(0,n),e[2]=r.slice(0,n)),e.slice(0,3))}},filter:{TAG:function(e){var t=e.replace(rt,it).toLowerCase();return"*"===e?function(){return!0}:function(e){return e.nodeName&&e.nodeName.toLowerCase()===t}},CLASS:function(e){var t=N[e+" "];return t||(t=RegExp("(^|"+P+")"+e+"("+P+"|$)"))&&N(e,function(e){return t.test("string"==typeof e.className&&e.className||typeof e.getAttribute!==j&&e.getAttribute("class")||"")})},ATTR:function(e,t,n){return function(r){var i=at.attr(r,e);return null==i?"!="===t:t?(i+="","="===t?i===n:"!="===t?i!==n:"^="===t?n&&0===i.indexOf(n):"*="===t?n&&i.indexOf(n)>-1:"$="===t?n&&i.slice(-n.length)===n:"~="===t?(" "+i+" ").indexOf(n)>-1:"|="===t?i===n||i.slice(0,n.length+1)===n+"-":!1):!0}},CHILD:function(e,t,n,r,i){var o="nth"!==e.slice(0,3),a="last"!==e.slice(-4),s="of-type"===t;return 1===r&&0===i?function(e){return!!e.parentNode}:function(t,n,l){var u,c,p,f,d,h,g=o!==a?"nextSibling":"previousSibling",m=t.parentNode,y=s&&t.nodeName.toLowerCase(),v=!l&&!s;if(m){if(o){while(g){p=t;while(p=p[g])if(s?p.nodeName.toLowerCase()===y:1===p.nodeType)return!1;h=g="only"===e&&!h&&"nextSibling"}return!0}if(h=[a?m.firstChild:m.lastChild],a&&v){c=m[b]||(m[b]={}),u=c[e]||[],d=u[0]===T&&u[1],f=u[0]===T&&u[2],p=d&&m.childNodes[d];while(p=++d&&p&&p[g]||(f=d=0)||h.pop())if(1===p.nodeType&&++f&&p===t){c[e]=[T,d,f];break}}else if(v&&(u=(t[b]||(t[b]={}))[e])&&u[0]===T)f=u[1];else while(p=++d&&p&&p[g]||(f=d=0)||h.pop())if((s?p.nodeName.toLowerCase()===y:1===p.nodeType)&&++f&&(v&&((p[b]||(p[b]={}))[e]=[T,f]),p===t))break;return f-=i,f===r||0===f%r&&f/r>=0}}},PSEUDO:function(e,t){var n,r=o.pseudos[e]||o.setFilters[e.toLowerCase()]||at.error("unsupported pseudo: "+e);return r[b]?r(t):r.length>1?(n=[e,e,"",t],o.setFilters.hasOwnProperty(e.toLowerCase())?lt(function(e,n){var i,o=r(e,t),a=o.length;while(a--)i=F.call(e,o[a]),e[i]=!(n[i]=o[a])}):function(e){return r(e,0,n)}):r}},pseudos:{not:lt(function(e){var t=[],n=[],r=l(e.replace(z,"$1"));return r[b]?lt(function(e,t,n,i){var o,a=r(e,null,i,[]),s=e.length;while(s--)(o=a[s])&&(e[s]=!(t[s]=o))}):function(e,i,o){return t[0]=e,r(t,null,o,n),!n.pop()}}),has:lt(function(e){return function(t){return at(e,t).length>0}}),contains:lt(function(e){return function(t){return(t.textContent||t.innerText||a(t)).indexOf(e)>-1}}),lang:lt(function(e){return G.test(e||"")||at.error("unsupported lang: "+e),e=e.replace(rt,it).toLowerCase(),function(t){var n;do if(n=h?t.lang:t.getAttribute("xml:lang")||t.getAttribute("lang"))return n=n.toLowerCase(),n===e||0===n.indexOf(e+"-");while((t=t.parentNode)&&1===t.nodeType);return!1}}),target:function(t){var n=e.location&&e.location.hash;return n&&n.slice(1)===t.id},root:function(e){return e===d},focus:function(e){return e===f.activeElement&&(!f.hasFocus||f.hasFocus())&&!!(e.type||e.href||~e.tabIndex)},enabled:function(e){return e.disabled===!1},disabled:function(e){return e.disabled===!0},checked:function(e){var t=e.nodeName.toLowerCase();return"input"===t&&!!e.checked||"option"===t&&!!e.selected},selected:function(e){return e.parentNode&&e.parentNode.selectedIndex,e.selected===!0},empty:function(e){for(e=e.firstChild;e;e=e.nextSibling)if(e.nodeName>"@"||3===e.nodeType||4===e.nodeType)return!1;return!0},parent:function(e){return!o.pseudos.empty(e)},header:function(e){return tt.test(e.nodeName)},input:function(e){return et.test(e.nodeName)},button:function(e){var t=e.nodeName.toLowerCase();return"input"===t&&"button"===e.type||"button"===t},text:function(e){var t;return"input"===e.nodeName.toLowerCase()&&"text"===e.type&&(null==(t=e.getAttribute("type"))||t.toLowerCase()===e.type)},first:ht(function(){return[0]}),last:ht(function(e,t){return[t-1]}),eq:ht(function(e,t,n){return[0>n?n+t:n]}),even:ht(function(e,t){var n=0;for(;t>n;n+=2)e.push(n);return e}),odd:ht(function(e,t){var n=1;for(;t>n;n+=2)e.push(n);return e}),lt:ht(function(e,t,n){var r=0>n?n+t:n;for(;--r>=0;)e.push(r);return e}),gt:ht(function(e,t,n){var r=0>n?n+t:n;for(;t>++r;)e.push(r);return e})}},o.pseudos.nth=o.pseudos.eq;for(n in{radio:!0,checkbox:!0,file:!0,password:!0,image:!0})o.pseudos[n]=ft(n);for(n in{submit:!0,reset:!0})o.pseudos[n]=dt(n);function gt(){}gt.prototype=o.filters=o.pseudos,o.setFilters=new gt;function mt(e,t){var n,r,i,a,s,l,u,c=k[e+" "];if(c)return t?0:c.slice(0);s=e,l=[],u=o.preFilter;while(s){(!n||(r=X.exec(s)))&&(r&&(s=s.slice(r[0].length)||s),l.push(i=[])),n=!1,(r=U.exec(s))&&(n=r.shift(),i.push({value:n,type:r[0].replace(z," ")}),s=s.slice(n.length));for(a in o.filter)!(r=Q[a].exec(s))||u[a]&&!(r=u[a](r))||(n=r.shift(),i.push({value:n,type:a,matches:r}),s=s.slice(n.length));if(!n)break}return t?s.length:s?at.error(e):k(e,l).slice(0)}function yt(e){var t=0,n=e.length,r="";for(;n>t;t++)r+=e[t].value;return r}function vt(e,t,n){var r=t.dir,o=n&&"parentNode"===r,a=C++;return t.first?function(t,n,i){while(t=t[r])if(1===t.nodeType||o)return e(t,n,i)}:function(t,n,s){var l,u,c,p=T+" "+a;if(s){while(t=t[r])if((1===t.nodeType||o)&&e(t,n,s))return!0}else while(t=t[r])if(1===t.nodeType||o)if(c=t[b]||(t[b]={}),(u=c[r])&&u[0]===p){if((l=u[1])===!0||l===i)return l===!0}else if(u=c[r]=[p],u[1]=e(t,n,s)||i,u[1]===!0)return!0}}function bt(e){return e.length>1?function(t,n,r){var i=e.length;while(i--)if(!e[i](t,n,r))return!1;return!0}:e[0]}function xt(e,t,n,r,i){var o,a=[],s=0,l=e.length,u=null!=t;for(;l>s;s++)(o=e[s])&&(!n||n(o,r,i))&&(a.push(o),u&&t.push(s));return a}function wt(e,t,n,r,i,o){return r&&!r[b]&&(r=wt(r)),i&&!i[b]&&(i=wt(i,o)),lt(function(o,a,s,l){var u,c,p,f=[],d=[],h=a.length,g=o||Nt(t||"*",s.nodeType?[s]:s,[]),m=!e||!o&&t?g:xt(g,f,e,s,l),y=n?i||(o?e:h||r)?[]:a:m;if(n&&n(m,y,s,l),r){u=xt(y,d),r(u,[],s,l),c=u.length;while(c--)(p=u[c])&&(y[d[c]]=!(m[d[c]]=p))}if(o){if(i||e){if(i){u=[],c=y.length;while(c--)(p=y[c])&&u.push(m[c]=p);i(null,y=[],u,l)}c=y.length;while(c--)(p=y[c])&&(u=i?F.call(o,p):f[c])>-1&&(o[u]=!(a[u]=p))}}else y=xt(y===a?y.splice(h,y.length):y),i?i(null,a,y,l):M.apply(a,y)})}function Tt(e){var t,n,r,i=e.length,a=o.relative[e[0].type],s=a||o.relative[" "],l=a?1:0,c=vt(function(e){return e===t},s,!0),p=vt(function(e){return F.call(t,e)>-1},s,!0),f=[function(e,n,r){return!a&&(r||n!==u)||((t=n).nodeType?c(e,n,r):p(e,n,r))}];for(;i>l;l++)if(n=o.relative[e[l].type])f=[vt(bt(f),n)];else{if(n=o.filter[e[l].type].apply(null,e[l].matches),n[b]){for(r=++l;i>r;r++)if(o.relative[e[r].type])break;return wt(l>1&&bt(f),l>1&&yt(e.slice(0,l-1).concat({value:" "===e[l-2].type?"*":""})).replace(z,"$1"),n,r>l&&Tt(e.slice(l,r)),i>r&&Tt(e=e.slice(r)),i>r&&yt(e))}f.push(n)}return bt(f)}function Ct(e,t){var n=0,r=t.length>0,a=e.length>0,s=function(s,l,c,p,d){var h,g,m,y=[],v=0,b="0",x=s&&[],w=null!=d,C=u,N=s||a&&o.find.TAG("*",d&&l.parentNode||l),k=T+=null==C?1:Math.random()||.1;for(w&&(u=l!==f&&l,i=n);null!=(h=N[b]);b++){if(a&&h){g=0;while(m=e[g++])if(m(h,l,c)){p.push(h);break}w&&(T=k,i=++n)}r&&((h=!m&&h)&&v--,s&&x.push(h))}if(v+=b,r&&b!==v){g=0;while(m=t[g++])m(x,y,l,c);if(s){if(v>0)while(b--)x[b]||y[b]||(y[b]=q.call(p));y=xt(y)}M.apply(p,y),w&&!s&&y.length>0&&v+t.length>1&&at.uniqueSort(p)}return w&&(T=k,u=C),x};return r?lt(s):s}l=at.compile=function(e,t){var n,r=[],i=[],o=E[e+" "];if(!o){t||(t=mt(e)),n=t.length;while(n--)o=Tt(t[n]),o[b]?r.push(o):i.push(o);o=E(e,Ct(i,r))}return o};function Nt(e,t,n){var r=0,i=t.length;for(;i>r;r++)at(e,t[r],n);return n}function kt(e,t,n,i){var a,s,u,c,p,f=mt(e);if(!i&&1===f.length){if(s=f[0]=f[0].slice(0),s.length>2&&"ID"===(u=s[0]).type&&r.getById&&9===t.nodeType&&h&&o.relative[s[1].type]){if(t=(o.find.ID(u.matches[0].replace(rt,it),t)||[])[0],!t)return n;e=e.slice(s.shift().value.length)}a=Q.needsContext.test(e)?0:s.length;while(a--){if(u=s[a],o.relative[c=u.type])break;if((p=o.find[c])&&(i=p(u.matches[0].replace(rt,it),V.test(s[0].type)&&t.parentNode||t))){if(s.splice(a,1),e=i.length&&yt(s),!e)return M.apply(n,i),n;break}}}return l(e,f)(i,t,!h,n,V.test(e)),n}r.sortStable=b.split("").sort(A).join("")===b,r.detectDuplicates=S,p(),r.sortDetached=ut(function(e){return 1&e.compareDocumentPosition(f.createElement("div"))}),ut(function(e){return e.innerHTML="<a href='#'></a>","#"===e.firstChild.getAttribute("href")})||ct("type|href|height|width",function(e,n,r){return r?t:e.getAttribute(n,"type"===n.toLowerCase()?1:2)}),r.attributes&&ut(function(e){return e.innerHTML="<input/>",e.firstChild.setAttribute("value",""),""===e.firstChild.getAttribute("value")})||ct("value",function(e,n,r){return r||"input"!==e.nodeName.toLowerCase()?t:e.defaultValue}),ut(function(e){return null==e.getAttribute("disabled")})||ct(B,function(e,n,r){var i;return r?t:(i=e.getAttributeNode(n))&&i.specified?i.value:e[n]===!0?n.toLowerCase():null}),x.find=at,x.expr=at.selectors,x.expr[":"]=x.expr.pseudos,x.unique=at.uniqueSort,x.text=at.getText,x.isXMLDoc=at.isXML,x.contains=at.contains}(e);var O={};function F(e){var t=O[e]={};return x.each(e.match(T)||[],function(e,n){t[n]=!0}),t}x.Callbacks=function(e){e="string"==typeof e?O[e]||F(e):x.extend({},e);var n,r,i,o,a,s,l=[],u=!e.once&&[],c=function(t){for(r=e.memory&&t,i=!0,a=s||0,s=0,o=l.length,n=!0;l&&o>a;a++)if(l[a].apply(t[0],t[1])===!1&&e.stopOnFalse){r=!1;break}n=!1,l&&(u?u.length&&c(u.shift()):r?l=[]:p.disable())},p={add:function(){if(l){var t=l.length;(function i(t){x.each(t,function(t,n){var r=x.type(n);"function"===r?e.unique&&p.has(n)||l.push(n):n&&n.length&&"string"!==r&&i(n)})})(arguments),n?o=l.length:r&&(s=t,c(r))}return this},remove:function(){return l&&x.each(arguments,function(e,t){var r;while((r=x.inArray(t,l,r))>-1)l.splice(r,1),n&&(o>=r&&o--,a>=r&&a--)}),this},has:function(e){return e?x.inArray(e,l)>-1:!(!l||!l.length)},empty:function(){return l=[],o=0,this},disable:function(){return l=u=r=t,this},disabled:function(){return!l},lock:function(){return u=t,r||p.disable(),this},locked:function(){return!u},fireWith:function(e,t){return!l||i&&!u||(t=t||[],t=[e,t.slice?t.slice():t],n?u.push(t):c(t)),this},fire:function(){return p.fireWith(this,arguments),this},fired:function(){return!!i}};return p},x.extend({Deferred:function(e){var t=[["resolve","done",x.Callbacks("once memory"),"resolved"],["reject","fail",x.Callbacks("once memory"),"rejected"],["notify","progress",x.Callbacks("memory")]],n="pending",r={state:function(){return n},always:function(){return i.done(arguments).fail(arguments),this},then:function(){var e=arguments;return x.Deferred(function(n){x.each(t,function(t,o){var a=o[0],s=x.isFunction(e[t])&&e[t];i[o[1]](function(){var e=s&&s.apply(this,arguments);e&&x.isFunction(e.promise)?e.promise().done(n.resolve).fail(n.reject).progress(n.notify):n[a+"With"](this===r?n.promise():this,s?[e]:arguments)})}),e=null}).promise()},promise:function(e){return null!=e?x.extend(e,r):r}},i={};return r.pipe=r.then,x.each(t,function(e,o){var a=o[2],s=o[3];r[o[1]]=a.add,s&&a.add(function(){n=s},t[1^e][2].disable,t[2][2].lock),i[o[0]]=function(){return i[o[0]+"With"](this===i?r:this,arguments),this},i[o[0]+"With"]=a.fireWith}),r.promise(i),e&&e.call(i,i),i},when:function(e){var t=0,n=g.call(arguments),r=n.length,i=1!==r||e&&x.isFunction(e.promise)?r:0,o=1===i?e:x.Deferred(),a=function(e,t,n){return function(r){t[e]=this,n[e]=arguments.length>1?g.call(arguments):r,n===s?o.notifyWith(t,n):--i||o.resolveWith(t,n)}},s,l,u;if(r>1)for(s=Array(r),l=Array(r),u=Array(r);r>t;t++)n[t]&&x.isFunction(n[t].promise)?n[t].promise().done(a(t,u,n)).fail(o.reject).progress(a(t,l,s)):--i;return i||o.resolveWith(u,n),o.promise()}}),x.support=function(t){var n,r,o,s,l,u,c,p,f,d=a.createElement("div");if(d.setAttribute("className","t"),d.innerHTML="  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>",n=d.getElementsByTagName("*")||[],r=d.getElementsByTagName("a")[0],!r||!r.style||!n.length)return t;s=a.createElement("select"),u=s.appendChild(a.createElement("option")),o=d.getElementsByTagName("input")[0],r.style.cssText="top:1px;float:left;opacity:.5",t.getSetAttribute="t"!==d.className,t.leadingWhitespace=3===d.firstChild.nodeType,t.tbody=!d.getElementsByTagName("tbody").length,t.htmlSerialize=!!d.getElementsByTagName("link").length,t.style=/top/.test(r.getAttribute("style")),t.hrefNormalized="/a"===r.getAttribute("href"),t.opacity=/^0.5/.test(r.style.opacity),t.cssFloat=!!r.style.cssFloat,t.checkOn=!!o.value,t.optSelected=u.selected,t.enctype=!!a.createElement("form").enctype,t.html5Clone="<:nav></:nav>"!==a.createElement("nav").cloneNode(!0).outerHTML,t.inlineBlockNeedsLayout=!1,t.shrinkWrapBlocks=!1,t.pixelPosition=!1,t.deleteExpando=!0,t.noCloneEvent=!0,t.reliableMarginRight=!0,t.boxSizingReliable=!0,o.checked=!0,t.noCloneChecked=o.cloneNode(!0).checked,s.disabled=!0,t.optDisabled=!u.disabled;try{delete d.test}catch(h){t.deleteExpando=!1}o=a.createElement("input"),o.setAttribute("value",""),t.input=""===o.getAttribute("value"),o.value="t",o.setAttribute("type","radio"),t.radioValue="t"===o.value,o.setAttribute("checked","t"),o.setAttribute("name","t"),l=a.createDocumentFragment(),l.appendChild(o),t.appendChecked=o.checked,t.checkClone=l.cloneNode(!0).cloneNode(!0).lastChild.checked,d.attachEvent&&(d.attachEvent("onclick",function(){t.noCloneEvent=!1}),d.cloneNode(!0).click());for(f in{submit:!0,change:!0,focusin:!0})d.setAttribute(c="on"+f,"t"),t[f+"Bubbles"]=c in e||d.attributes[c].expando===!1;d.style.backgroundClip="content-box",d.cloneNode(!0).style.backgroundClip="",t.clearCloneStyle="content-box"===d.style.backgroundClip;for(f in x(t))break;return t.ownLast="0"!==f,x(function(){var n,r,o,s="padding:0;margin:0;border:0;display:block;box-sizing:content-box;-moz-box-sizing:content-box;-webkit-box-sizing:content-box;",l=a.getElementsByTagName("body")[0];l&&(n=a.createElement("div"),n.style.cssText="border:0;width:0;height:0;position:absolute;top:0;left:-9999px;margin-top:1px",l.appendChild(n).appendChild(d),d.innerHTML="<table><tr><td></td><td>t</td></tr></table>",o=d.getElementsByTagName("td"),o[0].style.cssText="padding:0;margin:0;border:0;display:none",p=0===o[0].offsetHeight,o[0].style.display="",o[1].style.display="none",t.reliableHiddenOffsets=p&&0===o[0].offsetHeight,d.innerHTML="",d.style.cssText="box-sizing:border-box;-moz-box-sizing:border-box;-webkit-box-sizing:border-box;padding:1px;border:1px;display:block;width:4px;margin-top:1%;position:absolute;top:1%;",x.swap(l,null!=l.style.zoom?{zoom:1}:{},function(){t.boxSizing=4===d.offsetWidth}),e.getComputedStyle&&(t.pixelPosition="1%"!==(e.getComputedStyle(d,null)||{}).top,t.boxSizingReliable="4px"===(e.getComputedStyle(d,null)||{width:"4px"}).width,r=d.appendChild(a.createElement("div")),r.style.cssText=d.style.cssText=s,r.style.marginRight=r.style.width="0",d.style.width="1px",t.reliableMarginRight=!parseFloat((e.getComputedStyle(r,null)||{}).marginRight)),typeof d.style.zoom!==i&&(d.innerHTML="",d.style.cssText=s+"width:1px;padding:1px;display:inline;zoom:1",t.inlineBlockNeedsLayout=3===d.offsetWidth,d.style.display="block",d.innerHTML="<div></div>",d.firstChild.style.width="5px",t.shrinkWrapBlocks=3!==d.offsetWidth,t.inlineBlockNeedsLayout&&(l.style.zoom=1)),l.removeChild(n),n=d=o=r=null)}),n=s=l=u=r=o=null,t
}({});var B=/(?:\{[\s\S]*\}|\[[\s\S]*\])$/,P=/([A-Z])/g;function R(e,n,r,i){if(x.acceptData(e)){var o,a,s=x.expando,l=e.nodeType,u=l?x.cache:e,c=l?e[s]:e[s]&&s;if(c&&u[c]&&(i||u[c].data)||r!==t||"string"!=typeof n)return c||(c=l?e[s]=p.pop()||x.guid++:s),u[c]||(u[c]=l?{}:{toJSON:x.noop}),("object"==typeof n||"function"==typeof n)&&(i?u[c]=x.extend(u[c],n):u[c].data=x.extend(u[c].data,n)),a=u[c],i||(a.data||(a.data={}),a=a.data),r!==t&&(a[x.camelCase(n)]=r),"string"==typeof n?(o=a[n],null==o&&(o=a[x.camelCase(n)])):o=a,o}}function W(e,t,n){if(x.acceptData(e)){var r,i,o=e.nodeType,a=o?x.cache:e,s=o?e[x.expando]:x.expando;if(a[s]){if(t&&(r=n?a[s]:a[s].data)){x.isArray(t)?t=t.concat(x.map(t,x.camelCase)):t in r?t=[t]:(t=x.camelCase(t),t=t in r?[t]:t.split(" ")),i=t.length;while(i--)delete r[t[i]];if(n?!I(r):!x.isEmptyObject(r))return}(n||(delete a[s].data,I(a[s])))&&(o?x.cleanData([e],!0):x.support.deleteExpando||a!=a.window?delete a[s]:a[s]=null)}}}x.extend({cache:{},noData:{applet:!0,embed:!0,object:"clsid:D27CDB6E-AE6D-11cf-96B8-444553540000"},hasData:function(e){return e=e.nodeType?x.cache[e[x.expando]]:e[x.expando],!!e&&!I(e)},data:function(e,t,n){return R(e,t,n)},removeData:function(e,t){return W(e,t)},_data:function(e,t,n){return R(e,t,n,!0)},_removeData:function(e,t){return W(e,t,!0)},acceptData:function(e){if(e.nodeType&&1!==e.nodeType&&9!==e.nodeType)return!1;var t=e.nodeName&&x.noData[e.nodeName.toLowerCase()];return!t||t!==!0&&e.getAttribute("classid")===t}}),x.fn.extend({data:function(e,n){var r,i,o=null,a=0,s=this[0];if(e===t){if(this.length&&(o=x.data(s),1===s.nodeType&&!x._data(s,"parsedAttrs"))){for(r=s.attributes;r.length>a;a++)i=r[a].name,0===i.indexOf("data-")&&(i=x.camelCase(i.slice(5)),$(s,i,o[i]));x._data(s,"parsedAttrs",!0)}return o}return"object"==typeof e?this.each(function(){x.data(this,e)}):arguments.length>1?this.each(function(){x.data(this,e,n)}):s?$(s,e,x.data(s,e)):null},removeData:function(e){return this.each(function(){x.removeData(this,e)})}});function $(e,n,r){if(r===t&&1===e.nodeType){var i="data-"+n.replace(P,"-$1").toLowerCase();if(r=e.getAttribute(i),"string"==typeof r){try{r="true"===r?!0:"false"===r?!1:"null"===r?null:+r+""===r?+r:B.test(r)?x.parseJSON(r):r}catch(o){}x.data(e,n,r)}else r=t}return r}function I(e){var t;for(t in e)if(("data"!==t||!x.isEmptyObject(e[t]))&&"toJSON"!==t)return!1;return!0}x.extend({queue:function(e,n,r){var i;return e?(n=(n||"fx")+"queue",i=x._data(e,n),r&&(!i||x.isArray(r)?i=x._data(e,n,x.makeArray(r)):i.push(r)),i||[]):t},dequeue:function(e,t){t=t||"fx";var n=x.queue(e,t),r=n.length,i=n.shift(),o=x._queueHooks(e,t),a=function(){x.dequeue(e,t)};"inprogress"===i&&(i=n.shift(),r--),i&&("fx"===t&&n.unshift("inprogress"),delete o.stop,i.call(e,a,o)),!r&&o&&o.empty.fire()},_queueHooks:function(e,t){var n=t+"queueHooks";return x._data(e,n)||x._data(e,n,{empty:x.Callbacks("once memory").add(function(){x._removeData(e,t+"queue"),x._removeData(e,n)})})}}),x.fn.extend({queue:function(e,n){var r=2;return"string"!=typeof e&&(n=e,e="fx",r--),r>arguments.length?x.queue(this[0],e):n===t?this:this.each(function(){var t=x.queue(this,e,n);x._queueHooks(this,e),"fx"===e&&"inprogress"!==t[0]&&x.dequeue(this,e)})},dequeue:function(e){return this.each(function(){x.dequeue(this,e)})},delay:function(e,t){return e=x.fx?x.fx.speeds[e]||e:e,t=t||"fx",this.queue(t,function(t,n){var r=setTimeout(t,e);n.stop=function(){clearTimeout(r)}})},clearQueue:function(e){return this.queue(e||"fx",[])},promise:function(e,n){var r,i=1,o=x.Deferred(),a=this,s=this.length,l=function(){--i||o.resolveWith(a,[a])};"string"!=typeof e&&(n=e,e=t),e=e||"fx";while(s--)r=x._data(a[s],e+"queueHooks"),r&&r.empty&&(i++,r.empty.add(l));return l(),o.promise(n)}});var z,X,U=/[\t\r\n\f]/g,V=/\r/g,Y=/^(?:input|select|textarea|button|object)$/i,J=/^(?:a|area)$/i,G=/^(?:checked|selected)$/i,Q=x.support.getSetAttribute,K=x.support.input;x.fn.extend({attr:function(e,t){return x.access(this,x.attr,e,t,arguments.length>1)},removeAttr:function(e){return this.each(function(){x.removeAttr(this,e)})},prop:function(e,t){return x.access(this,x.prop,e,t,arguments.length>1)},removeProp:function(e){return e=x.propFix[e]||e,this.each(function(){try{this[e]=t,delete this[e]}catch(n){}})},addClass:function(e){var t,n,r,i,o,a=0,s=this.length,l="string"==typeof e&&e;if(x.isFunction(e))return this.each(function(t){x(this).addClass(e.call(this,t,this.className))});if(l)for(t=(e||"").match(T)||[];s>a;a++)if(n=this[a],r=1===n.nodeType&&(n.className?(" "+n.className+" ").replace(U," "):" ")){o=0;while(i=t[o++])0>r.indexOf(" "+i+" ")&&(r+=i+" ");n.className=x.trim(r)}return this},removeClass:function(e){var t,n,r,i,o,a=0,s=this.length,l=0===arguments.length||"string"==typeof e&&e;if(x.isFunction(e))return this.each(function(t){x(this).removeClass(e.call(this,t,this.className))});if(l)for(t=(e||"").match(T)||[];s>a;a++)if(n=this[a],r=1===n.nodeType&&(n.className?(" "+n.className+" ").replace(U," "):"")){o=0;while(i=t[o++])while(r.indexOf(" "+i+" ")>=0)r=r.replace(" "+i+" "," ");n.className=e?x.trim(r):""}return this},toggleClass:function(e,t){var n=typeof e;return"boolean"==typeof t&&"string"===n?t?this.addClass(e):this.removeClass(e):x.isFunction(e)?this.each(function(n){x(this).toggleClass(e.call(this,n,this.className,t),t)}):this.each(function(){if("string"===n){var t,r=0,o=x(this),a=e.match(T)||[];while(t=a[r++])o.hasClass(t)?o.removeClass(t):o.addClass(t)}else(n===i||"boolean"===n)&&(this.className&&x._data(this,"__className__",this.className),this.className=this.className||e===!1?"":x._data(this,"__className__")||"")})},hasClass:function(e){var t=" "+e+" ",n=0,r=this.length;for(;r>n;n++)if(1===this[n].nodeType&&(" "+this[n].className+" ").replace(U," ").indexOf(t)>=0)return!0;return!1},val:function(e){var n,r,i,o=this[0];{if(arguments.length)return i=x.isFunction(e),this.each(function(n){var o;1===this.nodeType&&(o=i?e.call(this,n,x(this).val()):e,null==o?o="":"number"==typeof o?o+="":x.isArray(o)&&(o=x.map(o,function(e){return null==e?"":e+""})),r=x.valHooks[this.type]||x.valHooks[this.nodeName.toLowerCase()],r&&"set"in r&&r.set(this,o,"value")!==t||(this.value=o))});if(o)return r=x.valHooks[o.type]||x.valHooks[o.nodeName.toLowerCase()],r&&"get"in r&&(n=r.get(o,"value"))!==t?n:(n=o.value,"string"==typeof n?n.replace(V,""):null==n?"":n)}}}),x.extend({valHooks:{option:{get:function(e){var t=x.find.attr(e,"value");return null!=t?t:e.text}},select:{get:function(e){var t,n,r=e.options,i=e.selectedIndex,o="select-one"===e.type||0>i,a=o?null:[],s=o?i+1:r.length,l=0>i?s:o?i:0;for(;s>l;l++)if(n=r[l],!(!n.selected&&l!==i||(x.support.optDisabled?n.disabled:null!==n.getAttribute("disabled"))||n.parentNode.disabled&&x.nodeName(n.parentNode,"optgroup"))){if(t=x(n).val(),o)return t;a.push(t)}return a},set:function(e,t){var n,r,i=e.options,o=x.makeArray(t),a=i.length;while(a--)r=i[a],(r.selected=x.inArray(x(r).val(),o)>=0)&&(n=!0);return n||(e.selectedIndex=-1),o}}},attr:function(e,n,r){var o,a,s=e.nodeType;if(e&&3!==s&&8!==s&&2!==s)return typeof e.getAttribute===i?x.prop(e,n,r):(1===s&&x.isXMLDoc(e)||(n=n.toLowerCase(),o=x.attrHooks[n]||(x.expr.match.bool.test(n)?X:z)),r===t?o&&"get"in o&&null!==(a=o.get(e,n))?a:(a=x.find.attr(e,n),null==a?t:a):null!==r?o&&"set"in o&&(a=o.set(e,r,n))!==t?a:(e.setAttribute(n,r+""),r):(x.removeAttr(e,n),t))},removeAttr:function(e,t){var n,r,i=0,o=t&&t.match(T);if(o&&1===e.nodeType)while(n=o[i++])r=x.propFix[n]||n,x.expr.match.bool.test(n)?K&&Q||!G.test(n)?e[r]=!1:e[x.camelCase("default-"+n)]=e[r]=!1:x.attr(e,n,""),e.removeAttribute(Q?n:r)},attrHooks:{type:{set:function(e,t){if(!x.support.radioValue&&"radio"===t&&x.nodeName(e,"input")){var n=e.value;return e.setAttribute("type",t),n&&(e.value=n),t}}}},propFix:{"for":"htmlFor","class":"className"},prop:function(e,n,r){var i,o,a,s=e.nodeType;if(e&&3!==s&&8!==s&&2!==s)return a=1!==s||!x.isXMLDoc(e),a&&(n=x.propFix[n]||n,o=x.propHooks[n]),r!==t?o&&"set"in o&&(i=o.set(e,r,n))!==t?i:e[n]=r:o&&"get"in o&&null!==(i=o.get(e,n))?i:e[n]},propHooks:{tabIndex:{get:function(e){var t=x.find.attr(e,"tabindex");return t?parseInt(t,10):Y.test(e.nodeName)||J.test(e.nodeName)&&e.href?0:-1}}}}),X={set:function(e,t,n){return t===!1?x.removeAttr(e,n):K&&Q||!G.test(n)?e.setAttribute(!Q&&x.propFix[n]||n,n):e[x.camelCase("default-"+n)]=e[n]=!0,n}},x.each(x.expr.match.bool.source.match(/\w+/g),function(e,n){var r=x.expr.attrHandle[n]||x.find.attr;x.expr.attrHandle[n]=K&&Q||!G.test(n)?function(e,n,i){var o=x.expr.attrHandle[n],a=i?t:(x.expr.attrHandle[n]=t)!=r(e,n,i)?n.toLowerCase():null;return x.expr.attrHandle[n]=o,a}:function(e,n,r){return r?t:e[x.camelCase("default-"+n)]?n.toLowerCase():null}}),K&&Q||(x.attrHooks.value={set:function(e,n,r){return x.nodeName(e,"input")?(e.defaultValue=n,t):z&&z.set(e,n,r)}}),Q||(z={set:function(e,n,r){var i=e.getAttributeNode(r);return i||e.setAttributeNode(i=e.ownerDocument.createAttribute(r)),i.value=n+="","value"===r||n===e.getAttribute(r)?n:t}},x.expr.attrHandle.id=x.expr.attrHandle.name=x.expr.attrHandle.coords=function(e,n,r){var i;return r?t:(i=e.getAttributeNode(n))&&""!==i.value?i.value:null},x.valHooks.button={get:function(e,n){var r=e.getAttributeNode(n);return r&&r.specified?r.value:t},set:z.set},x.attrHooks.contenteditable={set:function(e,t,n){z.set(e,""===t?!1:t,n)}},x.each(["width","height"],function(e,n){x.attrHooks[n]={set:function(e,r){return""===r?(e.setAttribute(n,"auto"),r):t}}})),x.support.hrefNormalized||x.each(["href","src"],function(e,t){x.propHooks[t]={get:function(e){return e.getAttribute(t,4)}}}),x.support.style||(x.attrHooks.style={get:function(e){return e.style.cssText||t},set:function(e,t){return e.style.cssText=t+""}}),x.support.optSelected||(x.propHooks.selected={get:function(e){var t=e.parentNode;return t&&(t.selectedIndex,t.parentNode&&t.parentNode.selectedIndex),null}}),x.each(["tabIndex","readOnly","maxLength","cellSpacing","cellPadding","rowSpan","colSpan","useMap","frameBorder","contentEditable"],function(){x.propFix[this.toLowerCase()]=this}),x.support.enctype||(x.propFix.enctype="encoding"),x.each(["radio","checkbox"],function(){x.valHooks[this]={set:function(e,n){return x.isArray(n)?e.checked=x.inArray(x(e).val(),n)>=0:t}},x.support.checkOn||(x.valHooks[this].get=function(e){return null===e.getAttribute("value")?"on":e.value})});var Z=/^(?:input|select|textarea)$/i,et=/^key/,tt=/^(?:mouse|contextmenu)|click/,nt=/^(?:focusinfocus|focusoutblur)$/,rt=/^([^.]*)(?:\.(.+)|)$/;function it(){return!0}function ot(){return!1}function at(){try{return a.activeElement}catch(e){}}x.event={global:{},add:function(e,n,r,o,a){var s,l,u,c,p,f,d,h,g,m,y,v=x._data(e);if(v){r.handler&&(c=r,r=c.handler,a=c.selector),r.guid||(r.guid=x.guid++),(l=v.events)||(l=v.events={}),(f=v.handle)||(f=v.handle=function(e){return typeof x===i||e&&x.event.triggered===e.type?t:x.event.dispatch.apply(f.elem,arguments)},f.elem=e),n=(n||"").match(T)||[""],u=n.length;while(u--)s=rt.exec(n[u])||[],g=y=s[1],m=(s[2]||"").split(".").sort(),g&&(p=x.event.special[g]||{},g=(a?p.delegateType:p.bindType)||g,p=x.event.special[g]||{},d=x.extend({type:g,origType:y,data:o,handler:r,guid:r.guid,selector:a,needsContext:a&&x.expr.match.needsContext.test(a),namespace:m.join(".")},c),(h=l[g])||(h=l[g]=[],h.delegateCount=0,p.setup&&p.setup.call(e,o,m,f)!==!1||(e.addEventListener?e.addEventListener(g,f,!1):e.attachEvent&&e.attachEvent("on"+g,f))),p.add&&(p.add.call(e,d),d.handler.guid||(d.handler.guid=r.guid)),a?h.splice(h.delegateCount++,0,d):h.push(d),x.event.global[g]=!0);e=null}},remove:function(e,t,n,r,i){var o,a,s,l,u,c,p,f,d,h,g,m=x.hasData(e)&&x._data(e);if(m&&(c=m.events)){t=(t||"").match(T)||[""],u=t.length;while(u--)if(s=rt.exec(t[u])||[],d=g=s[1],h=(s[2]||"").split(".").sort(),d){p=x.event.special[d]||{},d=(r?p.delegateType:p.bindType)||d,f=c[d]||[],s=s[2]&&RegExp("(^|\\.)"+h.join("\\.(?:.*\\.|)")+"(\\.|$)"),l=o=f.length;while(o--)a=f[o],!i&&g!==a.origType||n&&n.guid!==a.guid||s&&!s.test(a.namespace)||r&&r!==a.selector&&("**"!==r||!a.selector)||(f.splice(o,1),a.selector&&f.delegateCount--,p.remove&&p.remove.call(e,a));l&&!f.length&&(p.teardown&&p.teardown.call(e,h,m.handle)!==!1||x.removeEvent(e,d,m.handle),delete c[d])}else for(d in c)x.event.remove(e,d+t[u],n,r,!0);x.isEmptyObject(c)&&(delete m.handle,x._removeData(e,"events"))}},trigger:function(n,r,i,o){var s,l,u,c,p,f,d,h=[i||a],g=v.call(n,"type")?n.type:n,m=v.call(n,"namespace")?n.namespace.split("."):[];if(u=f=i=i||a,3!==i.nodeType&&8!==i.nodeType&&!nt.test(g+x.event.triggered)&&(g.indexOf(".")>=0&&(m=g.split("."),g=m.shift(),m.sort()),l=0>g.indexOf(":")&&"on"+g,n=n[x.expando]?n:new x.Event(g,"object"==typeof n&&n),n.isTrigger=o?2:3,n.namespace=m.join("."),n.namespace_re=n.namespace?RegExp("(^|\\.)"+m.join("\\.(?:.*\\.|)")+"(\\.|$)"):null,n.result=t,n.target||(n.target=i),r=null==r?[n]:x.makeArray(r,[n]),p=x.event.special[g]||{},o||!p.trigger||p.trigger.apply(i,r)!==!1)){if(!o&&!p.noBubble&&!x.isWindow(i)){for(c=p.delegateType||g,nt.test(c+g)||(u=u.parentNode);u;u=u.parentNode)h.push(u),f=u;f===(i.ownerDocument||a)&&h.push(f.defaultView||f.parentWindow||e)}d=0;while((u=h[d++])&&!n.isPropagationStopped())n.type=d>1?c:p.bindType||g,s=(x._data(u,"events")||{})[n.type]&&x._data(u,"handle"),s&&s.apply(u,r),s=l&&u[l],s&&x.acceptData(u)&&s.apply&&s.apply(u,r)===!1&&n.preventDefault();if(n.type=g,!o&&!n.isDefaultPrevented()&&(!p._default||p._default.apply(h.pop(),r)===!1)&&x.acceptData(i)&&l&&i[g]&&!x.isWindow(i)){f=i[l],f&&(i[l]=null),x.event.triggered=g;try{i[g]()}catch(y){}x.event.triggered=t,f&&(i[l]=f)}return n.result}},dispatch:function(e){e=x.event.fix(e);var n,r,i,o,a,s=[],l=g.call(arguments),u=(x._data(this,"events")||{})[e.type]||[],c=x.event.special[e.type]||{};if(l[0]=e,e.delegateTarget=this,!c.preDispatch||c.preDispatch.call(this,e)!==!1){s=x.event.handlers.call(this,e,u),n=0;while((o=s[n++])&&!e.isPropagationStopped()){e.currentTarget=o.elem,a=0;while((i=o.handlers[a++])&&!e.isImmediatePropagationStopped())(!e.namespace_re||e.namespace_re.test(i.namespace))&&(e.handleObj=i,e.data=i.data,r=((x.event.special[i.origType]||{}).handle||i.handler).apply(o.elem,l),r!==t&&(e.result=r)===!1&&(e.preventDefault(),e.stopPropagation()))}return c.postDispatch&&c.postDispatch.call(this,e),e.result}},handlers:function(e,n){var r,i,o,a,s=[],l=n.delegateCount,u=e.target;if(l&&u.nodeType&&(!e.button||"click"!==e.type))for(;u!=this;u=u.parentNode||this)if(1===u.nodeType&&(u.disabled!==!0||"click"!==e.type)){for(o=[],a=0;l>a;a++)i=n[a],r=i.selector+" ",o[r]===t&&(o[r]=i.needsContext?x(r,this).index(u)>=0:x.find(r,this,null,[u]).length),o[r]&&o.push(i);o.length&&s.push({elem:u,handlers:o})}return n.length>l&&s.push({elem:this,handlers:n.slice(l)}),s},fix:function(e){if(e[x.expando])return e;var t,n,r,i=e.type,o=e,s=this.fixHooks[i];s||(this.fixHooks[i]=s=tt.test(i)?this.mouseHooks:et.test(i)?this.keyHooks:{}),r=s.props?this.props.concat(s.props):this.props,e=new x.Event(o),t=r.length;while(t--)n=r[t],e[n]=o[n];return e.target||(e.target=o.srcElement||a),3===e.target.nodeType&&(e.target=e.target.parentNode),e.metaKey=!!e.metaKey,s.filter?s.filter(e,o):e},props:"altKey bubbles cancelable ctrlKey currentTarget eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "),fixHooks:{},keyHooks:{props:"char charCode key keyCode".split(" "),filter:function(e,t){return null==e.which&&(e.which=null!=t.charCode?t.charCode:t.keyCode),e}},mouseHooks:{props:"button buttons clientX clientY fromElement offsetX offsetY pageX pageY screenX screenY toElement".split(" "),filter:function(e,n){var r,i,o,s=n.button,l=n.fromElement;return null==e.pageX&&null!=n.clientX&&(i=e.target.ownerDocument||a,o=i.documentElement,r=i.body,e.pageX=n.clientX+(o&&o.scrollLeft||r&&r.scrollLeft||0)-(o&&o.clientLeft||r&&r.clientLeft||0),e.pageY=n.clientY+(o&&o.scrollTop||r&&r.scrollTop||0)-(o&&o.clientTop||r&&r.clientTop||0)),!e.relatedTarget&&l&&(e.relatedTarget=l===e.target?n.toElement:l),e.which||s===t||(e.which=1&s?1:2&s?3:4&s?2:0),e}},special:{load:{noBubble:!0},focus:{trigger:function(){if(this!==at()&&this.focus)try{return this.focus(),!1}catch(e){}},delegateType:"focusin"},blur:{trigger:function(){return this===at()&&this.blur?(this.blur(),!1):t},delegateType:"focusout"},click:{trigger:function(){return x.nodeName(this,"input")&&"checkbox"===this.type&&this.click?(this.click(),!1):t},_default:function(e){return x.nodeName(e.target,"a")}},beforeunload:{postDispatch:function(e){e.result!==t&&(e.originalEvent.returnValue=e.result)}}},simulate:function(e,t,n,r){var i=x.extend(new x.Event,n,{type:e,isSimulated:!0,originalEvent:{}});r?x.event.trigger(i,null,t):x.event.dispatch.call(t,i),i.isDefaultPrevented()&&n.preventDefault()}},x.removeEvent=a.removeEventListener?function(e,t,n){e.removeEventListener&&e.removeEventListener(t,n,!1)}:function(e,t,n){var r="on"+t;e.detachEvent&&(typeof e[r]===i&&(e[r]=null),e.detachEvent(r,n))},x.Event=function(e,n){return this instanceof x.Event?(e&&e.type?(this.originalEvent=e,this.type=e.type,this.isDefaultPrevented=e.defaultPrevented||e.returnValue===!1||e.getPreventDefault&&e.getPreventDefault()?it:ot):this.type=e,n&&x.extend(this,n),this.timeStamp=e&&e.timeStamp||x.now(),this[x.expando]=!0,t):new x.Event(e,n)},x.Event.prototype={isDefaultPrevented:ot,isPropagationStopped:ot,isImmediatePropagationStopped:ot,preventDefault:function(){var e=this.originalEvent;this.isDefaultPrevented=it,e&&(e.preventDefault?e.preventDefault():e.returnValue=!1)},stopPropagation:function(){var e=this.originalEvent;this.isPropagationStopped=it,e&&(e.stopPropagation&&e.stopPropagation(),e.cancelBubble=!0)},stopImmediatePropagation:function(){this.isImmediatePropagationStopped=it,this.stopPropagation()}},x.each({mouseenter:"mouseover",mouseleave:"mouseout"},function(e,t){x.event.special[e]={delegateType:t,bindType:t,handle:function(e){var n,r=this,i=e.relatedTarget,o=e.handleObj;return(!i||i!==r&&!x.contains(r,i))&&(e.type=o.origType,n=o.handler.apply(this,arguments),e.type=t),n}}}),x.support.submitBubbles||(x.event.special.submit={setup:function(){return x.nodeName(this,"form")?!1:(x.event.add(this,"click._submit keypress._submit",function(e){var n=e.target,r=x.nodeName(n,"input")||x.nodeName(n,"button")?n.form:t;r&&!x._data(r,"submitBubbles")&&(x.event.add(r,"submit._submit",function(e){e._submit_bubble=!0}),x._data(r,"submitBubbles",!0))}),t)},postDispatch:function(e){e._submit_bubble&&(delete e._submit_bubble,this.parentNode&&!e.isTrigger&&x.event.simulate("submit",this.parentNode,e,!0))},teardown:function(){return x.nodeName(this,"form")?!1:(x.event.remove(this,"._submit"),t)}}),x.support.changeBubbles||(x.event.special.change={setup:function(){return Z.test(this.nodeName)?(("checkbox"===this.type||"radio"===this.type)&&(x.event.add(this,"propertychange._change",function(e){"checked"===e.originalEvent.propertyName&&(this._just_changed=!0)}),x.event.add(this,"click._change",function(e){this._just_changed&&!e.isTrigger&&(this._just_changed=!1),x.event.simulate("change",this,e,!0)})),!1):(x.event.add(this,"beforeactivate._change",function(e){var t=e.target;Z.test(t.nodeName)&&!x._data(t,"changeBubbles")&&(x.event.add(t,"change._change",function(e){!this.parentNode||e.isSimulated||e.isTrigger||x.event.simulate("change",this.parentNode,e,!0)}),x._data(t,"changeBubbles",!0))}),t)},handle:function(e){var n=e.target;return this!==n||e.isSimulated||e.isTrigger||"radio"!==n.type&&"checkbox"!==n.type?e.handleObj.handler.apply(this,arguments):t},teardown:function(){return x.event.remove(this,"._change"),!Z.test(this.nodeName)}}),x.support.focusinBubbles||x.each({focus:"focusin",blur:"focusout"},function(e,t){var n=0,r=function(e){x.event.simulate(t,e.target,x.event.fix(e),!0)};x.event.special[t]={setup:function(){0===n++&&a.addEventListener(e,r,!0)},teardown:function(){0===--n&&a.removeEventListener(e,r,!0)}}}),x.fn.extend({on:function(e,n,r,i,o){var a,s;if("object"==typeof e){"string"!=typeof n&&(r=r||n,n=t);for(a in e)this.on(a,n,r,e[a],o);return this}if(null==r&&null==i?(i=n,r=n=t):null==i&&("string"==typeof n?(i=r,r=t):(i=r,r=n,n=t)),i===!1)i=ot;else if(!i)return this;return 1===o&&(s=i,i=function(e){return x().off(e),s.apply(this,arguments)},i.guid=s.guid||(s.guid=x.guid++)),this.each(function(){x.event.add(this,e,i,r,n)})},one:function(e,t,n,r){return this.on(e,t,n,r,1)},off:function(e,n,r){var i,o;if(e&&e.preventDefault&&e.handleObj)return i=e.handleObj,x(e.delegateTarget).off(i.namespace?i.origType+"."+i.namespace:i.origType,i.selector,i.handler),this;if("object"==typeof e){for(o in e)this.off(o,n,e[o]);return this}return(n===!1||"function"==typeof n)&&(r=n,n=t),r===!1&&(r=ot),this.each(function(){x.event.remove(this,e,r,n)})},trigger:function(e,t){return this.each(function(){x.event.trigger(e,t,this)})},triggerHandler:function(e,n){var r=this[0];return r?x.event.trigger(e,n,r,!0):t}});var st=/^.[^:#\[\.,]*$/,lt=/^(?:parents|prev(?:Until|All))/,ut=x.expr.match.needsContext,ct={children:!0,contents:!0,next:!0,prev:!0};x.fn.extend({find:function(e){var t,n=[],r=this,i=r.length;if("string"!=typeof e)return this.pushStack(x(e).filter(function(){for(t=0;i>t;t++)if(x.contains(r[t],this))return!0}));for(t=0;i>t;t++)x.find(e,r[t],n);return n=this.pushStack(i>1?x.unique(n):n),n.selector=this.selector?this.selector+" "+e:e,n},has:function(e){var t,n=x(e,this),r=n.length;return this.filter(function(){for(t=0;r>t;t++)if(x.contains(this,n[t]))return!0})},not:function(e){return this.pushStack(ft(this,e||[],!0))},filter:function(e){return this.pushStack(ft(this,e||[],!1))},is:function(e){return!!ft(this,"string"==typeof e&&ut.test(e)?x(e):e||[],!1).length},closest:function(e,t){var n,r=0,i=this.length,o=[],a=ut.test(e)||"string"!=typeof e?x(e,t||this.context):0;for(;i>r;r++)for(n=this[r];n&&n!==t;n=n.parentNode)if(11>n.nodeType&&(a?a.index(n)>-1:1===n.nodeType&&x.find.matchesSelector(n,e))){n=o.push(n);break}return this.pushStack(o.length>1?x.unique(o):o)},index:function(e){return e?"string"==typeof e?x.inArray(this[0],x(e)):x.inArray(e.jquery?e[0]:e,this):this[0]&&this[0].parentNode?this.first().prevAll().length:-1},add:function(e,t){var n="string"==typeof e?x(e,t):x.makeArray(e&&e.nodeType?[e]:e),r=x.merge(this.get(),n);return this.pushStack(x.unique(r))},addBack:function(e){return this.add(null==e?this.prevObject:this.prevObject.filter(e))}});function pt(e,t){do e=e[t];while(e&&1!==e.nodeType);return e}x.each({parent:function(e){var t=e.parentNode;return t&&11!==t.nodeType?t:null},parents:function(e){return x.dir(e,"parentNode")},parentsUntil:function(e,t,n){return x.dir(e,"parentNode",n)},next:function(e){return pt(e,"nextSibling")},prev:function(e){return pt(e,"previousSibling")},nextAll:function(e){return x.dir(e,"nextSibling")},prevAll:function(e){return x.dir(e,"previousSibling")},nextUntil:function(e,t,n){return x.dir(e,"nextSibling",n)},prevUntil:function(e,t,n){return x.dir(e,"previousSibling",n)},siblings:function(e){return x.sibling((e.parentNode||{}).firstChild,e)},children:function(e){return x.sibling(e.firstChild)},contents:function(e){return x.nodeName(e,"iframe")?e.contentDocument||e.contentWindow.document:x.merge([],e.childNodes)}},function(e,t){x.fn[e]=function(n,r){var i=x.map(this,t,n);return"Until"!==e.slice(-5)&&(r=n),r&&"string"==typeof r&&(i=x.filter(r,i)),this.length>1&&(ct[e]||(i=x.unique(i)),lt.test(e)&&(i=i.reverse())),this.pushStack(i)}}),x.extend({filter:function(e,t,n){var r=t[0];return n&&(e=":not("+e+")"),1===t.length&&1===r.nodeType?x.find.matchesSelector(r,e)?[r]:[]:x.find.matches(e,x.grep(t,function(e){return 1===e.nodeType}))},dir:function(e,n,r){var i=[],o=e[n];while(o&&9!==o.nodeType&&(r===t||1!==o.nodeType||!x(o).is(r)))1===o.nodeType&&i.push(o),o=o[n];return i},sibling:function(e,t){var n=[];for(;e;e=e.nextSibling)1===e.nodeType&&e!==t&&n.push(e);return n}});function ft(e,t,n){if(x.isFunction(t))return x.grep(e,function(e,r){return!!t.call(e,r,e)!==n});if(t.nodeType)return x.grep(e,function(e){return e===t!==n});if("string"==typeof t){if(st.test(t))return x.filter(t,e,n);t=x.filter(t,e)}return x.grep(e,function(e){return x.inArray(e,t)>=0!==n})}function dt(e){var t=ht.split("|"),n=e.createDocumentFragment();if(n.createElement)while(t.length)n.createElement(t.pop());return n}var ht="abbr|article|aside|audio|bdi|canvas|data|datalist|details|figcaption|figure|footer|header|hgroup|mark|meter|nav|output|progress|section|summary|time|video",gt=/ jQuery\d+="(?:null|\d+)"/g,mt=RegExp("<(?:"+ht+")[\\s/>]","i"),yt=/^\s+/,vt=/<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi,bt=/<([\w:]+)/,xt=/<tbody/i,wt=/<|&#?\w+;/,Tt=/<(?:script|style|link)/i,Ct=/^(?:checkbox|radio)$/i,Nt=/checked\s*(?:[^=]|=\s*.checked.)/i,kt=/^$|\/(?:java|ecma)script/i,Et=/^true\/(.*)/,St=/^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g,At={option:[1,"<select multiple='multiple'>","</select>"],legend:[1,"<fieldset>","</fieldset>"],area:[1,"<map>","</map>"],param:[1,"<object>","</object>"],thead:[1,"<table>","</table>"],tr:[2,"<table><tbody>","</tbody></table>"],col:[2,"<table><tbody></tbody><colgroup>","</colgroup></table>"],td:[3,"<table><tbody><tr>","</tr></tbody></table>"],_default:x.support.htmlSerialize?[0,"",""]:[1,"X<div>","</div>"]},jt=dt(a),Dt=jt.appendChild(a.createElement("div"));At.optgroup=At.option,At.tbody=At.tfoot=At.colgroup=At.caption=At.thead,At.th=At.td,x.fn.extend({text:function(e){return x.access(this,function(e){return e===t?x.text(this):this.empty().append((this[0]&&this[0].ownerDocument||a).createTextNode(e))},null,e,arguments.length)},append:function(){return this.domManip(arguments,function(e){if(1===this.nodeType||11===this.nodeType||9===this.nodeType){var t=Lt(this,e);t.appendChild(e)}})},prepend:function(){return this.domManip(arguments,function(e){if(1===this.nodeType||11===this.nodeType||9===this.nodeType){var t=Lt(this,e);t.insertBefore(e,t.firstChild)}})},before:function(){return this.domManip(arguments,function(e){this.parentNode&&this.parentNode.insertBefore(e,this)})},after:function(){return this.domManip(arguments,function(e){this.parentNode&&this.parentNode.insertBefore(e,this.nextSibling)})},remove:function(e,t){var n,r=e?x.filter(e,this):this,i=0;for(;null!=(n=r[i]);i++)t||1!==n.nodeType||x.cleanData(Ft(n)),n.parentNode&&(t&&x.contains(n.ownerDocument,n)&&_t(Ft(n,"script")),n.parentNode.removeChild(n));return this},empty:function(){var e,t=0;for(;null!=(e=this[t]);t++){1===e.nodeType&&x.cleanData(Ft(e,!1));while(e.firstChild)e.removeChild(e.firstChild);e.options&&x.nodeName(e,"select")&&(e.options.length=0)}return this},clone:function(e,t){return e=null==e?!1:e,t=null==t?e:t,this.map(function(){return x.clone(this,e,t)})},html:function(e){return x.access(this,function(e){var n=this[0]||{},r=0,i=this.length;if(e===t)return 1===n.nodeType?n.innerHTML.replace(gt,""):t;if(!("string"!=typeof e||Tt.test(e)||!x.support.htmlSerialize&&mt.test(e)||!x.support.leadingWhitespace&&yt.test(e)||At[(bt.exec(e)||["",""])[1].toLowerCase()])){e=e.replace(vt,"<$1></$2>");try{for(;i>r;r++)n=this[r]||{},1===n.nodeType&&(x.cleanData(Ft(n,!1)),n.innerHTML=e);n=0}catch(o){}}n&&this.empty().append(e)},null,e,arguments.length)},replaceWith:function(){var e=x.map(this,function(e){return[e.nextSibling,e.parentNode]}),t=0;return this.domManip(arguments,function(n){var r=e[t++],i=e[t++];i&&(r&&r.parentNode!==i&&(r=this.nextSibling),x(this).remove(),i.insertBefore(n,r))},!0),t?this:this.remove()},detach:function(e){return this.remove(e,!0)},domManip:function(e,t,n){e=d.apply([],e);var r,i,o,a,s,l,u=0,c=this.length,p=this,f=c-1,h=e[0],g=x.isFunction(h);if(g||!(1>=c||"string"!=typeof h||x.support.checkClone)&&Nt.test(h))return this.each(function(r){var i=p.eq(r);g&&(e[0]=h.call(this,r,i.html())),i.domManip(e,t,n)});if(c&&(l=x.buildFragment(e,this[0].ownerDocument,!1,!n&&this),r=l.firstChild,1===l.childNodes.length&&(l=r),r)){for(a=x.map(Ft(l,"script"),Ht),o=a.length;c>u;u++)i=l,u!==f&&(i=x.clone(i,!0,!0),o&&x.merge(a,Ft(i,"script"))),t.call(this[u],i,u);if(o)for(s=a[a.length-1].ownerDocument,x.map(a,qt),u=0;o>u;u++)i=a[u],kt.test(i.type||"")&&!x._data(i,"globalEval")&&x.contains(s,i)&&(i.src?x._evalUrl(i.src):x.globalEval((i.text||i.textContent||i.innerHTML||"").replace(St,"")));l=r=null}return this}});function Lt(e,t){return x.nodeName(e,"table")&&x.nodeName(1===t.nodeType?t:t.firstChild,"tr")?e.getElementsByTagName("tbody")[0]||e.appendChild(e.ownerDocument.createElement("tbody")):e}function Ht(e){return e.type=(null!==x.find.attr(e,"type"))+"/"+e.type,e}function qt(e){var t=Et.exec(e.type);return t?e.type=t[1]:e.removeAttribute("type"),e}function _t(e,t){var n,r=0;for(;null!=(n=e[r]);r++)x._data(n,"globalEval",!t||x._data(t[r],"globalEval"))}function Mt(e,t){if(1===t.nodeType&&x.hasData(e)){var n,r,i,o=x._data(e),a=x._data(t,o),s=o.events;if(s){delete a.handle,a.events={};for(n in s)for(r=0,i=s[n].length;i>r;r++)x.event.add(t,n,s[n][r])}a.data&&(a.data=x.extend({},a.data))}}function Ot(e,t){var n,r,i;if(1===t.nodeType){if(n=t.nodeName.toLowerCase(),!x.support.noCloneEvent&&t[x.expando]){i=x._data(t);for(r in i.events)x.removeEvent(t,r,i.handle);t.removeAttribute(x.expando)}"script"===n&&t.text!==e.text?(Ht(t).text=e.text,qt(t)):"object"===n?(t.parentNode&&(t.outerHTML=e.outerHTML),x.support.html5Clone&&e.innerHTML&&!x.trim(t.innerHTML)&&(t.innerHTML=e.innerHTML)):"input"===n&&Ct.test(e.type)?(t.defaultChecked=t.checked=e.checked,t.value!==e.value&&(t.value=e.value)):"option"===n?t.defaultSelected=t.selected=e.defaultSelected:("input"===n||"textarea"===n)&&(t.defaultValue=e.defaultValue)}}x.each({appendTo:"append",prependTo:"prepend",insertBefore:"before",insertAfter:"after",replaceAll:"replaceWith"},function(e,t){x.fn[e]=function(e){var n,r=0,i=[],o=x(e),a=o.length-1;for(;a>=r;r++)n=r===a?this:this.clone(!0),x(o[r])[t](n),h.apply(i,n.get());return this.pushStack(i)}});function Ft(e,n){var r,o,a=0,s=typeof e.getElementsByTagName!==i?e.getElementsByTagName(n||"*"):typeof e.querySelectorAll!==i?e.querySelectorAll(n||"*"):t;if(!s)for(s=[],r=e.childNodes||e;null!=(o=r[a]);a++)!n||x.nodeName(o,n)?s.push(o):x.merge(s,Ft(o,n));return n===t||n&&x.nodeName(e,n)?x.merge([e],s):s}function Bt(e){Ct.test(e.type)&&(e.defaultChecked=e.checked)}x.extend({clone:function(e,t,n){var r,i,o,a,s,l=x.contains(e.ownerDocument,e);if(x.support.html5Clone||x.isXMLDoc(e)||!mt.test("<"+e.nodeName+">")?o=e.cloneNode(!0):(Dt.innerHTML=e.outerHTML,Dt.removeChild(o=Dt.firstChild)),!(x.support.noCloneEvent&&x.support.noCloneChecked||1!==e.nodeType&&11!==e.nodeType||x.isXMLDoc(e)))for(r=Ft(o),s=Ft(e),a=0;null!=(i=s[a]);++a)r[a]&&Ot(i,r[a]);if(t)if(n)for(s=s||Ft(e),r=r||Ft(o),a=0;null!=(i=s[a]);a++)Mt(i,r[a]);else Mt(e,o);return r=Ft(o,"script"),r.length>0&&_t(r,!l&&Ft(e,"script")),r=s=i=null,o},buildFragment:function(e,t,n,r){var i,o,a,s,l,u,c,p=e.length,f=dt(t),d=[],h=0;for(;p>h;h++)if(o=e[h],o||0===o)if("object"===x.type(o))x.merge(d,o.nodeType?[o]:o);else if(wt.test(o)){s=s||f.appendChild(t.createElement("div")),l=(bt.exec(o)||["",""])[1].toLowerCase(),c=At[l]||At._default,s.innerHTML=c[1]+o.replace(vt,"<$1></$2>")+c[2],i=c[0];while(i--)s=s.lastChild;if(!x.support.leadingWhitespace&&yt.test(o)&&d.push(t.createTextNode(yt.exec(o)[0])),!x.support.tbody){o="table"!==l||xt.test(o)?"<table>"!==c[1]||xt.test(o)?0:s:s.firstChild,i=o&&o.childNodes.length;while(i--)x.nodeName(u=o.childNodes[i],"tbody")&&!u.childNodes.length&&o.removeChild(u)}x.merge(d,s.childNodes),s.textContent="";while(s.firstChild)s.removeChild(s.firstChild);s=f.lastChild}else d.push(t.createTextNode(o));s&&f.removeChild(s),x.support.appendChecked||x.grep(Ft(d,"input"),Bt),h=0;while(o=d[h++])if((!r||-1===x.inArray(o,r))&&(a=x.contains(o.ownerDocument,o),s=Ft(f.appendChild(o),"script"),a&&_t(s),n)){i=0;while(o=s[i++])kt.test(o.type||"")&&n.push(o)}return s=null,f},cleanData:function(e,t){var n,r,o,a,s=0,l=x.expando,u=x.cache,c=x.support.deleteExpando,f=x.event.special;for(;null!=(n=e[s]);s++)if((t||x.acceptData(n))&&(o=n[l],a=o&&u[o])){if(a.events)for(r in a.events)f[r]?x.event.remove(n,r):x.removeEvent(n,r,a.handle);
u[o]&&(delete u[o],c?delete n[l]:typeof n.removeAttribute!==i?n.removeAttribute(l):n[l]=null,p.push(o))}},_evalUrl:function(e){return x.ajax({url:e,type:"GET",dataType:"script",async:!1,global:!1,"throws":!0})}}),x.fn.extend({wrapAll:function(e){if(x.isFunction(e))return this.each(function(t){x(this).wrapAll(e.call(this,t))});if(this[0]){var t=x(e,this[0].ownerDocument).eq(0).clone(!0);this[0].parentNode&&t.insertBefore(this[0]),t.map(function(){var e=this;while(e.firstChild&&1===e.firstChild.nodeType)e=e.firstChild;return e}).append(this)}return this},wrapInner:function(e){return x.isFunction(e)?this.each(function(t){x(this).wrapInner(e.call(this,t))}):this.each(function(){var t=x(this),n=t.contents();n.length?n.wrapAll(e):t.append(e)})},wrap:function(e){var t=x.isFunction(e);return this.each(function(n){x(this).wrapAll(t?e.call(this,n):e)})},unwrap:function(){return this.parent().each(function(){x.nodeName(this,"body")||x(this).replaceWith(this.childNodes)}).end()}});var Pt,Rt,Wt,$t=/alpha\([^)]*\)/i,It=/opacity\s*=\s*([^)]*)/,zt=/^(top|right|bottom|left)$/,Xt=/^(none|table(?!-c[ea]).+)/,Ut=/^margin/,Vt=RegExp("^("+w+")(.*)$","i"),Yt=RegExp("^("+w+")(?!px)[a-z%]+$","i"),Jt=RegExp("^([+-])=("+w+")","i"),Gt={BODY:"block"},Qt={position:"absolute",visibility:"hidden",display:"block"},Kt={letterSpacing:0,fontWeight:400},Zt=["Top","Right","Bottom","Left"],en=["Webkit","O","Moz","ms"];function tn(e,t){if(t in e)return t;var n=t.charAt(0).toUpperCase()+t.slice(1),r=t,i=en.length;while(i--)if(t=en[i]+n,t in e)return t;return r}function nn(e,t){return e=t||e,"none"===x.css(e,"display")||!x.contains(e.ownerDocument,e)}function rn(e,t){var n,r,i,o=[],a=0,s=e.length;for(;s>a;a++)r=e[a],r.style&&(o[a]=x._data(r,"olddisplay"),n=r.style.display,t?(o[a]||"none"!==n||(r.style.display=""),""===r.style.display&&nn(r)&&(o[a]=x._data(r,"olddisplay",ln(r.nodeName)))):o[a]||(i=nn(r),(n&&"none"!==n||!i)&&x._data(r,"olddisplay",i?n:x.css(r,"display"))));for(a=0;s>a;a++)r=e[a],r.style&&(t&&"none"!==r.style.display&&""!==r.style.display||(r.style.display=t?o[a]||"":"none"));return e}x.fn.extend({css:function(e,n){return x.access(this,function(e,n,r){var i,o,a={},s=0;if(x.isArray(n)){for(o=Rt(e),i=n.length;i>s;s++)a[n[s]]=x.css(e,n[s],!1,o);return a}return r!==t?x.style(e,n,r):x.css(e,n)},e,n,arguments.length>1)},show:function(){return rn(this,!0)},hide:function(){return rn(this)},toggle:function(e){return"boolean"==typeof e?e?this.show():this.hide():this.each(function(){nn(this)?x(this).show():x(this).hide()})}}),x.extend({cssHooks:{opacity:{get:function(e,t){if(t){var n=Wt(e,"opacity");return""===n?"1":n}}}},cssNumber:{columnCount:!0,fillOpacity:!0,fontWeight:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,widows:!0,zIndex:!0,zoom:!0},cssProps:{"float":x.support.cssFloat?"cssFloat":"styleFloat"},style:function(e,n,r,i){if(e&&3!==e.nodeType&&8!==e.nodeType&&e.style){var o,a,s,l=x.camelCase(n),u=e.style;if(n=x.cssProps[l]||(x.cssProps[l]=tn(u,l)),s=x.cssHooks[n]||x.cssHooks[l],r===t)return s&&"get"in s&&(o=s.get(e,!1,i))!==t?o:u[n];if(a=typeof r,"string"===a&&(o=Jt.exec(r))&&(r=(o[1]+1)*o[2]+parseFloat(x.css(e,n)),a="number"),!(null==r||"number"===a&&isNaN(r)||("number"!==a||x.cssNumber[l]||(r+="px"),x.support.clearCloneStyle||""!==r||0!==n.indexOf("background")||(u[n]="inherit"),s&&"set"in s&&(r=s.set(e,r,i))===t)))try{u[n]=r}catch(c){}}},css:function(e,n,r,i){var o,a,s,l=x.camelCase(n);return n=x.cssProps[l]||(x.cssProps[l]=tn(e.style,l)),s=x.cssHooks[n]||x.cssHooks[l],s&&"get"in s&&(a=s.get(e,!0,r)),a===t&&(a=Wt(e,n,i)),"normal"===a&&n in Kt&&(a=Kt[n]),""===r||r?(o=parseFloat(a),r===!0||x.isNumeric(o)?o||0:a):a}}),e.getComputedStyle?(Rt=function(t){return e.getComputedStyle(t,null)},Wt=function(e,n,r){var i,o,a,s=r||Rt(e),l=s?s.getPropertyValue(n)||s[n]:t,u=e.style;return s&&(""!==l||x.contains(e.ownerDocument,e)||(l=x.style(e,n)),Yt.test(l)&&Ut.test(n)&&(i=u.width,o=u.minWidth,a=u.maxWidth,u.minWidth=u.maxWidth=u.width=l,l=s.width,u.width=i,u.minWidth=o,u.maxWidth=a)),l}):a.documentElement.currentStyle&&(Rt=function(e){return e.currentStyle},Wt=function(e,n,r){var i,o,a,s=r||Rt(e),l=s?s[n]:t,u=e.style;return null==l&&u&&u[n]&&(l=u[n]),Yt.test(l)&&!zt.test(n)&&(i=u.left,o=e.runtimeStyle,a=o&&o.left,a&&(o.left=e.currentStyle.left),u.left="fontSize"===n?"1em":l,l=u.pixelLeft+"px",u.left=i,a&&(o.left=a)),""===l?"auto":l});function on(e,t,n){var r=Vt.exec(t);return r?Math.max(0,r[1]-(n||0))+(r[2]||"px"):t}function an(e,t,n,r,i){var o=n===(r?"border":"content")?4:"width"===t?1:0,a=0;for(;4>o;o+=2)"margin"===n&&(a+=x.css(e,n+Zt[o],!0,i)),r?("content"===n&&(a-=x.css(e,"padding"+Zt[o],!0,i)),"margin"!==n&&(a-=x.css(e,"border"+Zt[o]+"Width",!0,i))):(a+=x.css(e,"padding"+Zt[o],!0,i),"padding"!==n&&(a+=x.css(e,"border"+Zt[o]+"Width",!0,i)));return a}function sn(e,t,n){var r=!0,i="width"===t?e.offsetWidth:e.offsetHeight,o=Rt(e),a=x.support.boxSizing&&"border-box"===x.css(e,"boxSizing",!1,o);if(0>=i||null==i){if(i=Wt(e,t,o),(0>i||null==i)&&(i=e.style[t]),Yt.test(i))return i;r=a&&(x.support.boxSizingReliable||i===e.style[t]),i=parseFloat(i)||0}return i+an(e,t,n||(a?"border":"content"),r,o)+"px"}function ln(e){var t=a,n=Gt[e];return n||(n=un(e,t),"none"!==n&&n||(Pt=(Pt||x("<iframe frameborder='0' width='0' height='0'/>").css("cssText","display:block !important")).appendTo(t.documentElement),t=(Pt[0].contentWindow||Pt[0].contentDocument).document,t.write("<!doctype html><html><body>"),t.close(),n=un(e,t),Pt.detach()),Gt[e]=n),n}function un(e,t){var n=x(t.createElement(e)).appendTo(t.body),r=x.css(n[0],"display");return n.remove(),r}x.each(["height","width"],function(e,n){x.cssHooks[n]={get:function(e,r,i){return r?0===e.offsetWidth&&Xt.test(x.css(e,"display"))?x.swap(e,Qt,function(){return sn(e,n,i)}):sn(e,n,i):t},set:function(e,t,r){var i=r&&Rt(e);return on(e,t,r?an(e,n,r,x.support.boxSizing&&"border-box"===x.css(e,"boxSizing",!1,i),i):0)}}}),x.support.opacity||(x.cssHooks.opacity={get:function(e,t){return It.test((t&&e.currentStyle?e.currentStyle.filter:e.style.filter)||"")?.01*parseFloat(RegExp.$1)+"":t?"1":""},set:function(e,t){var n=e.style,r=e.currentStyle,i=x.isNumeric(t)?"alpha(opacity="+100*t+")":"",o=r&&r.filter||n.filter||"";n.zoom=1,(t>=1||""===t)&&""===x.trim(o.replace($t,""))&&n.removeAttribute&&(n.removeAttribute("filter"),""===t||r&&!r.filter)||(n.filter=$t.test(o)?o.replace($t,i):o+" "+i)}}),x(function(){x.support.reliableMarginRight||(x.cssHooks.marginRight={get:function(e,n){return n?x.swap(e,{display:"inline-block"},Wt,[e,"marginRight"]):t}}),!x.support.pixelPosition&&x.fn.position&&x.each(["top","left"],function(e,n){x.cssHooks[n]={get:function(e,r){return r?(r=Wt(e,n),Yt.test(r)?x(e).position()[n]+"px":r):t}}})}),x.expr&&x.expr.filters&&(x.expr.filters.hidden=function(e){return 0>=e.offsetWidth&&0>=e.offsetHeight||!x.support.reliableHiddenOffsets&&"none"===(e.style&&e.style.display||x.css(e,"display"))},x.expr.filters.visible=function(e){return!x.expr.filters.hidden(e)}),x.each({margin:"",padding:"",border:"Width"},function(e,t){x.cssHooks[e+t]={expand:function(n){var r=0,i={},o="string"==typeof n?n.split(" "):[n];for(;4>r;r++)i[e+Zt[r]+t]=o[r]||o[r-2]||o[0];return i}},Ut.test(e)||(x.cssHooks[e+t].set=on)});var cn=/%20/g,pn=/\[\]$/,fn=/\r?\n/g,dn=/^(?:submit|button|image|reset|file)$/i,hn=/^(?:input|select|textarea|keygen)/i;x.fn.extend({serialize:function(){return x.param(this.serializeArray())},serializeArray:function(){return this.map(function(){var e=x.prop(this,"elements");return e?x.makeArray(e):this}).filter(function(){var e=this.type;return this.name&&!x(this).is(":disabled")&&hn.test(this.nodeName)&&!dn.test(e)&&(this.checked||!Ct.test(e))}).map(function(e,t){var n=x(this).val();return null==n?null:x.isArray(n)?x.map(n,function(e){return{name:t.name,value:e.replace(fn,"\r\n")}}):{name:t.name,value:n.replace(fn,"\r\n")}}).get()}}),x.param=function(e,n){var r,i=[],o=function(e,t){t=x.isFunction(t)?t():null==t?"":t,i[i.length]=encodeURIComponent(e)+"="+encodeURIComponent(t)};if(n===t&&(n=x.ajaxSettings&&x.ajaxSettings.traditional),x.isArray(e)||e.jquery&&!x.isPlainObject(e))x.each(e,function(){o(this.name,this.value)});else for(r in e)gn(r,e[r],n,o);return i.join("&").replace(cn,"+")};function gn(e,t,n,r){var i;if(x.isArray(t))x.each(t,function(t,i){n||pn.test(e)?r(e,i):gn(e+"["+("object"==typeof i?t:"")+"]",i,n,r)});else if(n||"object"!==x.type(t))r(e,t);else for(i in t)gn(e+"["+i+"]",t[i],n,r)}x.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(" "),function(e,t){x.fn[t]=function(e,n){return arguments.length>0?this.on(t,null,e,n):this.trigger(t)}}),x.fn.extend({hover:function(e,t){return this.mouseenter(e).mouseleave(t||e)},bind:function(e,t,n){return this.on(e,null,t,n)},unbind:function(e,t){return this.off(e,null,t)},delegate:function(e,t,n,r){return this.on(t,e,n,r)},undelegate:function(e,t,n){return 1===arguments.length?this.off(e,"**"):this.off(t,e||"**",n)}});var mn,yn,vn=x.now(),bn=/\?/,xn=/#.*$/,wn=/([?&])_=[^&]*/,Tn=/^(.*?):[ \t]*([^\r\n]*)\r?$/gm,Cn=/^(?:about|app|app-storage|.+-extension|file|res|widget):$/,Nn=/^(?:GET|HEAD)$/,kn=/^\/\//,En=/^([\w.+-]+:)(?:\/\/([^\/?#:]*)(?::(\d+)|)|)/,Sn=x.fn.load,An={},jn={},Dn="*/".concat("*");try{yn=o.href}catch(Ln){yn=a.createElement("a"),yn.href="",yn=yn.href}mn=En.exec(yn.toLowerCase())||[];function Hn(e){return function(t,n){"string"!=typeof t&&(n=t,t="*");var r,i=0,o=t.toLowerCase().match(T)||[];if(x.isFunction(n))while(r=o[i++])"+"===r[0]?(r=r.slice(1)||"*",(e[r]=e[r]||[]).unshift(n)):(e[r]=e[r]||[]).push(n)}}function qn(e,n,r,i){var o={},a=e===jn;function s(l){var u;return o[l]=!0,x.each(e[l]||[],function(e,l){var c=l(n,r,i);return"string"!=typeof c||a||o[c]?a?!(u=c):t:(n.dataTypes.unshift(c),s(c),!1)}),u}return s(n.dataTypes[0])||!o["*"]&&s("*")}function _n(e,n){var r,i,o=x.ajaxSettings.flatOptions||{};for(i in n)n[i]!==t&&((o[i]?e:r||(r={}))[i]=n[i]);return r&&x.extend(!0,e,r),e}x.fn.load=function(e,n,r){if("string"!=typeof e&&Sn)return Sn.apply(this,arguments);var i,o,a,s=this,l=e.indexOf(" ");return l>=0&&(i=e.slice(l,e.length),e=e.slice(0,l)),x.isFunction(n)?(r=n,n=t):n&&"object"==typeof n&&(a="POST"),s.length>0&&x.ajax({url:e,type:a,dataType:"html",data:n}).done(function(e){o=arguments,s.html(i?x("<div>").append(x.parseHTML(e)).find(i):e)}).complete(r&&function(e,t){s.each(r,o||[e.responseText,t,e])}),this},x.each(["ajaxStart","ajaxStop","ajaxComplete","ajaxError","ajaxSuccess","ajaxSend"],function(e,t){x.fn[t]=function(e){return this.on(t,e)}}),x.extend({active:0,lastModified:{},etag:{},ajaxSettings:{url:yn,type:"GET",isLocal:Cn.test(mn[1]),global:!0,processData:!0,async:!0,contentType:"application/x-www-form-urlencoded; charset=UTF-8",accepts:{"*":Dn,text:"text/plain",html:"text/html",xml:"application/xml, text/xml",json:"application/json, text/javascript"},contents:{xml:/xml/,html:/html/,json:/json/},responseFields:{xml:"responseXML",text:"responseText",json:"responseJSON"},converters:{"* text":String,"text html":!0,"text json":x.parseJSON,"text xml":x.parseXML},flatOptions:{url:!0,context:!0}},ajaxSetup:function(e,t){return t?_n(_n(e,x.ajaxSettings),t):_n(x.ajaxSettings,e)},ajaxPrefilter:Hn(An),ajaxTransport:Hn(jn),ajax:function(e,n){"object"==typeof e&&(n=e,e=t),n=n||{};var r,i,o,a,s,l,u,c,p=x.ajaxSetup({},n),f=p.context||p,d=p.context&&(f.nodeType||f.jquery)?x(f):x.event,h=x.Deferred(),g=x.Callbacks("once memory"),m=p.statusCode||{},y={},v={},b=0,w="canceled",C={readyState:0,getResponseHeader:function(e){var t;if(2===b){if(!c){c={};while(t=Tn.exec(a))c[t[1].toLowerCase()]=t[2]}t=c[e.toLowerCase()]}return null==t?null:t},getAllResponseHeaders:function(){return 2===b?a:null},setRequestHeader:function(e,t){var n=e.toLowerCase();return b||(e=v[n]=v[n]||e,y[e]=t),this},overrideMimeType:function(e){return b||(p.mimeType=e),this},statusCode:function(e){var t;if(e)if(2>b)for(t in e)m[t]=[m[t],e[t]];else C.always(e[C.status]);return this},abort:function(e){var t=e||w;return u&&u.abort(t),k(0,t),this}};if(h.promise(C).complete=g.add,C.success=C.done,C.error=C.fail,p.url=((e||p.url||yn)+"").replace(xn,"").replace(kn,mn[1]+"//"),p.type=n.method||n.type||p.method||p.type,p.dataTypes=x.trim(p.dataType||"*").toLowerCase().match(T)||[""],null==p.crossDomain&&(r=En.exec(p.url.toLowerCase()),p.crossDomain=!(!r||r[1]===mn[1]&&r[2]===mn[2]&&(r[3]||("http:"===r[1]?"80":"443"))===(mn[3]||("http:"===mn[1]?"80":"443")))),p.data&&p.processData&&"string"!=typeof p.data&&(p.data=x.param(p.data,p.traditional)),qn(An,p,n,C),2===b)return C;l=p.global,l&&0===x.active++&&x.event.trigger("ajaxStart"),p.type=p.type.toUpperCase(),p.hasContent=!Nn.test(p.type),o=p.url,p.hasContent||(p.data&&(o=p.url+=(bn.test(o)?"&":"?")+p.data,delete p.data),p.cache===!1&&(p.url=wn.test(o)?o.replace(wn,"$1_="+vn++):o+(bn.test(o)?"&":"?")+"_="+vn++)),p.ifModified&&(x.lastModified[o]&&C.setRequestHeader("If-Modified-Since",x.lastModified[o]),x.etag[o]&&C.setRequestHeader("If-None-Match",x.etag[o])),(p.data&&p.hasContent&&p.contentType!==!1||n.contentType)&&C.setRequestHeader("Content-Type",p.contentType),C.setRequestHeader("Accept",p.dataTypes[0]&&p.accepts[p.dataTypes[0]]?p.accepts[p.dataTypes[0]]+("*"!==p.dataTypes[0]?", "+Dn+"; q=0.01":""):p.accepts["*"]);for(i in p.headers)C.setRequestHeader(i,p.headers[i]);if(p.beforeSend&&(p.beforeSend.call(f,C,p)===!1||2===b))return C.abort();w="abort";for(i in{success:1,error:1,complete:1})C[i](p[i]);if(u=qn(jn,p,n,C)){C.readyState=1,l&&d.trigger("ajaxSend",[C,p]),p.async&&p.timeout>0&&(s=setTimeout(function(){C.abort("timeout")},p.timeout));try{b=1,u.send(y,k)}catch(N){if(!(2>b))throw N;k(-1,N)}}else k(-1,"No Transport");function k(e,n,r,i){var c,y,v,w,T,N=n;2!==b&&(b=2,s&&clearTimeout(s),u=t,a=i||"",C.readyState=e>0?4:0,c=e>=200&&300>e||304===e,r&&(w=Mn(p,C,r)),w=On(p,w,C,c),c?(p.ifModified&&(T=C.getResponseHeader("Last-Modified"),T&&(x.lastModified[o]=T),T=C.getResponseHeader("etag"),T&&(x.etag[o]=T)),204===e||"HEAD"===p.type?N="nocontent":304===e?N="notmodified":(N=w.state,y=w.data,v=w.error,c=!v)):(v=N,(e||!N)&&(N="error",0>e&&(e=0))),C.status=e,C.statusText=(n||N)+"",c?h.resolveWith(f,[y,N,C]):h.rejectWith(f,[C,N,v]),C.statusCode(m),m=t,l&&d.trigger(c?"ajaxSuccess":"ajaxError",[C,p,c?y:v]),g.fireWith(f,[C,N]),l&&(d.trigger("ajaxComplete",[C,p]),--x.active||x.event.trigger("ajaxStop")))}return C},getJSON:function(e,t,n){return x.get(e,t,n,"json")},getScript:function(e,n){return x.get(e,t,n,"script")}}),x.each(["get","post"],function(e,n){x[n]=function(e,r,i,o){return x.isFunction(r)&&(o=o||i,i=r,r=t),x.ajax({url:e,type:n,dataType:o,data:r,success:i})}});function Mn(e,n,r){var i,o,a,s,l=e.contents,u=e.dataTypes;while("*"===u[0])u.shift(),o===t&&(o=e.mimeType||n.getResponseHeader("Content-Type"));if(o)for(s in l)if(l[s]&&l[s].test(o)){u.unshift(s);break}if(u[0]in r)a=u[0];else{for(s in r){if(!u[0]||e.converters[s+" "+u[0]]){a=s;break}i||(i=s)}a=a||i}return a?(a!==u[0]&&u.unshift(a),r[a]):t}function On(e,t,n,r){var i,o,a,s,l,u={},c=e.dataTypes.slice();if(c[1])for(a in e.converters)u[a.toLowerCase()]=e.converters[a];o=c.shift();while(o)if(e.responseFields[o]&&(n[e.responseFields[o]]=t),!l&&r&&e.dataFilter&&(t=e.dataFilter(t,e.dataType)),l=o,o=c.shift())if("*"===o)o=l;else if("*"!==l&&l!==o){if(a=u[l+" "+o]||u["* "+o],!a)for(i in u)if(s=i.split(" "),s[1]===o&&(a=u[l+" "+s[0]]||u["* "+s[0]])){a===!0?a=u[i]:u[i]!==!0&&(o=s[0],c.unshift(s[1]));break}if(a!==!0)if(a&&e["throws"])t=a(t);else try{t=a(t)}catch(p){return{state:"parsererror",error:a?p:"No conversion from "+l+" to "+o}}}return{state:"success",data:t}}x.ajaxSetup({accepts:{script:"text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"},contents:{script:/(?:java|ecma)script/},converters:{"text script":function(e){return x.globalEval(e),e}}}),x.ajaxPrefilter("script",function(e){e.cache===t&&(e.cache=!1),e.crossDomain&&(e.type="GET",e.global=!1)}),x.ajaxTransport("script",function(e){if(e.crossDomain){var n,r=a.head||x("head")[0]||a.documentElement;return{send:function(t,i){n=a.createElement("script"),n.async=!0,e.scriptCharset&&(n.charset=e.scriptCharset),n.src=e.url,n.onload=n.onreadystatechange=function(e,t){(t||!n.readyState||/loaded|complete/.test(n.readyState))&&(n.onload=n.onreadystatechange=null,n.parentNode&&n.parentNode.removeChild(n),n=null,t||i(200,"success"))},r.insertBefore(n,r.firstChild)},abort:function(){n&&n.onload(t,!0)}}}});var Fn=[],Bn=/(=)\?(?=&|$)|\?\?/;x.ajaxSetup({jsonp:"callback",jsonpCallback:function(){var e=Fn.pop()||x.expando+"_"+vn++;return this[e]=!0,e}}),x.ajaxPrefilter("json jsonp",function(n,r,i){var o,a,s,l=n.jsonp!==!1&&(Bn.test(n.url)?"url":"string"==typeof n.data&&!(n.contentType||"").indexOf("application/x-www-form-urlencoded")&&Bn.test(n.data)&&"data");return l||"jsonp"===n.dataTypes[0]?(o=n.jsonpCallback=x.isFunction(n.jsonpCallback)?n.jsonpCallback():n.jsonpCallback,l?n[l]=n[l].replace(Bn,"$1"+o):n.jsonp!==!1&&(n.url+=(bn.test(n.url)?"&":"?")+n.jsonp+"="+o),n.converters["script json"]=function(){return s||x.error(o+" was not called"),s[0]},n.dataTypes[0]="json",a=e[o],e[o]=function(){s=arguments},i.always(function(){e[o]=a,n[o]&&(n.jsonpCallback=r.jsonpCallback,Fn.push(o)),s&&x.isFunction(a)&&a(s[0]),s=a=t}),"script"):t});var Pn,Rn,Wn=0,$n=e.ActiveXObject&&function(){var e;for(e in Pn)Pn[e](t,!0)};function In(){try{return new e.XMLHttpRequest}catch(t){}}function zn(){try{return new e.ActiveXObject("Microsoft.XMLHTTP")}catch(t){}}x.ajaxSettings.xhr=e.ActiveXObject?function(){return!this.isLocal&&In()||zn()}:In,Rn=x.ajaxSettings.xhr(),x.support.cors=!!Rn&&"withCredentials"in Rn,Rn=x.support.ajax=!!Rn,Rn&&x.ajaxTransport(function(n){if(!n.crossDomain||x.support.cors){var r;return{send:function(i,o){var a,s,l=n.xhr();if(n.username?l.open(n.type,n.url,n.async,n.username,n.password):l.open(n.type,n.url,n.async),n.xhrFields)for(s in n.xhrFields)l[s]=n.xhrFields[s];n.mimeType&&l.overrideMimeType&&l.overrideMimeType(n.mimeType),n.crossDomain||i["X-Requested-With"]||(i["X-Requested-With"]="XMLHttpRequest");try{for(s in i)l.setRequestHeader(s,i[s])}catch(u){}l.send(n.hasContent&&n.data||null),r=function(e,i){var s,u,c,p;try{if(r&&(i||4===l.readyState))if(r=t,a&&(l.onreadystatechange=x.noop,$n&&delete Pn[a]),i)4!==l.readyState&&l.abort();else{p={},s=l.status,u=l.getAllResponseHeaders(),"string"==typeof l.responseText&&(p.text=l.responseText);try{c=l.statusText}catch(f){c=""}s||!n.isLocal||n.crossDomain?1223===s&&(s=204):s=p.text?200:404}}catch(d){i||o(-1,d)}p&&o(s,c,p,u)},n.async?4===l.readyState?setTimeout(r):(a=++Wn,$n&&(Pn||(Pn={},x(e).unload($n)),Pn[a]=r),l.onreadystatechange=r):r()},abort:function(){r&&r(t,!0)}}}});var Xn,Un,Vn=/^(?:toggle|show|hide)$/,Yn=RegExp("^(?:([+-])=|)("+w+")([a-z%]*)$","i"),Jn=/queueHooks$/,Gn=[nr],Qn={"*":[function(e,t){var n=this.createTween(e,t),r=n.cur(),i=Yn.exec(t),o=i&&i[3]||(x.cssNumber[e]?"":"px"),a=(x.cssNumber[e]||"px"!==o&&+r)&&Yn.exec(x.css(n.elem,e)),s=1,l=20;if(a&&a[3]!==o){o=o||a[3],i=i||[],a=+r||1;do s=s||".5",a/=s,x.style(n.elem,e,a+o);while(s!==(s=n.cur()/r)&&1!==s&&--l)}return i&&(a=n.start=+a||+r||0,n.unit=o,n.end=i[1]?a+(i[1]+1)*i[2]:+i[2]),n}]};function Kn(){return setTimeout(function(){Xn=t}),Xn=x.now()}function Zn(e,t,n){var r,i=(Qn[t]||[]).concat(Qn["*"]),o=0,a=i.length;for(;a>o;o++)if(r=i[o].call(n,t,e))return r}function er(e,t,n){var r,i,o=0,a=Gn.length,s=x.Deferred().always(function(){delete l.elem}),l=function(){if(i)return!1;var t=Xn||Kn(),n=Math.max(0,u.startTime+u.duration-t),r=n/u.duration||0,o=1-r,a=0,l=u.tweens.length;for(;l>a;a++)u.tweens[a].run(o);return s.notifyWith(e,[u,o,n]),1>o&&l?n:(s.resolveWith(e,[u]),!1)},u=s.promise({elem:e,props:x.extend({},t),opts:x.extend(!0,{specialEasing:{}},n),originalProperties:t,originalOptions:n,startTime:Xn||Kn(),duration:n.duration,tweens:[],createTween:function(t,n){var r=x.Tween(e,u.opts,t,n,u.opts.specialEasing[t]||u.opts.easing);return u.tweens.push(r),r},stop:function(t){var n=0,r=t?u.tweens.length:0;if(i)return this;for(i=!0;r>n;n++)u.tweens[n].run(1);return t?s.resolveWith(e,[u,t]):s.rejectWith(e,[u,t]),this}}),c=u.props;for(tr(c,u.opts.specialEasing);a>o;o++)if(r=Gn[o].call(u,e,c,u.opts))return r;return x.map(c,Zn,u),x.isFunction(u.opts.start)&&u.opts.start.call(e,u),x.fx.timer(x.extend(l,{elem:e,anim:u,queue:u.opts.queue})),u.progress(u.opts.progress).done(u.opts.done,u.opts.complete).fail(u.opts.fail).always(u.opts.always)}function tr(e,t){var n,r,i,o,a;for(n in e)if(r=x.camelCase(n),i=t[r],o=e[n],x.isArray(o)&&(i=o[1],o=e[n]=o[0]),n!==r&&(e[r]=o,delete e[n]),a=x.cssHooks[r],a&&"expand"in a){o=a.expand(o),delete e[r];for(n in o)n in e||(e[n]=o[n],t[n]=i)}else t[r]=i}x.Animation=x.extend(er,{tweener:function(e,t){x.isFunction(e)?(t=e,e=["*"]):e=e.split(" ");var n,r=0,i=e.length;for(;i>r;r++)n=e[r],Qn[n]=Qn[n]||[],Qn[n].unshift(t)},prefilter:function(e,t){t?Gn.unshift(e):Gn.push(e)}});function nr(e,t,n){var r,i,o,a,s,l,u=this,c={},p=e.style,f=e.nodeType&&nn(e),d=x._data(e,"fxshow");n.queue||(s=x._queueHooks(e,"fx"),null==s.unqueued&&(s.unqueued=0,l=s.empty.fire,s.empty.fire=function(){s.unqueued||l()}),s.unqueued++,u.always(function(){u.always(function(){s.unqueued--,x.queue(e,"fx").length||s.empty.fire()})})),1===e.nodeType&&("height"in t||"width"in t)&&(n.overflow=[p.overflow,p.overflowX,p.overflowY],"inline"===x.css(e,"display")&&"none"===x.css(e,"float")&&(x.support.inlineBlockNeedsLayout&&"inline"!==ln(e.nodeName)?p.zoom=1:p.display="inline-block")),n.overflow&&(p.overflow="hidden",x.support.shrinkWrapBlocks||u.always(function(){p.overflow=n.overflow[0],p.overflowX=n.overflow[1],p.overflowY=n.overflow[2]}));for(r in t)if(i=t[r],Vn.exec(i)){if(delete t[r],o=o||"toggle"===i,i===(f?"hide":"show"))continue;c[r]=d&&d[r]||x.style(e,r)}if(!x.isEmptyObject(c)){d?"hidden"in d&&(f=d.hidden):d=x._data(e,"fxshow",{}),o&&(d.hidden=!f),f?x(e).show():u.done(function(){x(e).hide()}),u.done(function(){var t;x._removeData(e,"fxshow");for(t in c)x.style(e,t,c[t])});for(r in c)a=Zn(f?d[r]:0,r,u),r in d||(d[r]=a.start,f&&(a.end=a.start,a.start="width"===r||"height"===r?1:0))}}function rr(e,t,n,r,i){return new rr.prototype.init(e,t,n,r,i)}x.Tween=rr,rr.prototype={constructor:rr,init:function(e,t,n,r,i,o){this.elem=e,this.prop=n,this.easing=i||"swing",this.options=t,this.start=this.now=this.cur(),this.end=r,this.unit=o||(x.cssNumber[n]?"":"px")},cur:function(){var e=rr.propHooks[this.prop];return e&&e.get?e.get(this):rr.propHooks._default.get(this)},run:function(e){var t,n=rr.propHooks[this.prop];return this.pos=t=this.options.duration?x.easing[this.easing](e,this.options.duration*e,0,1,this.options.duration):e,this.now=(this.end-this.start)*t+this.start,this.options.step&&this.options.step.call(this.elem,this.now,this),n&&n.set?n.set(this):rr.propHooks._default.set(this),this}},rr.prototype.init.prototype=rr.prototype,rr.propHooks={_default:{get:function(e){var t;return null==e.elem[e.prop]||e.elem.style&&null!=e.elem.style[e.prop]?(t=x.css(e.elem,e.prop,""),t&&"auto"!==t?t:0):e.elem[e.prop]},set:function(e){x.fx.step[e.prop]?x.fx.step[e.prop](e):e.elem.style&&(null!=e.elem.style[x.cssProps[e.prop]]||x.cssHooks[e.prop])?x.style(e.elem,e.prop,e.now+e.unit):e.elem[e.prop]=e.now}}},rr.propHooks.scrollTop=rr.propHooks.scrollLeft={set:function(e){e.elem.nodeType&&e.elem.parentNode&&(e.elem[e.prop]=e.now)}},x.each(["toggle","show","hide"],function(e,t){var n=x.fn[t];x.fn[t]=function(e,r,i){return null==e||"boolean"==typeof e?n.apply(this,arguments):this.animate(ir(t,!0),e,r,i)}}),x.fn.extend({fadeTo:function(e,t,n,r){return this.filter(nn).css("opacity",0).show().end().animate({opacity:t},e,n,r)},animate:function(e,t,n,r){var i=x.isEmptyObject(e),o=x.speed(t,n,r),a=function(){var t=er(this,x.extend({},e),o);(i||x._data(this,"finish"))&&t.stop(!0)};return a.finish=a,i||o.queue===!1?this.each(a):this.queue(o.queue,a)},stop:function(e,n,r){var i=function(e){var t=e.stop;delete e.stop,t(r)};return"string"!=typeof e&&(r=n,n=e,e=t),n&&e!==!1&&this.queue(e||"fx",[]),this.each(function(){var t=!0,n=null!=e&&e+"queueHooks",o=x.timers,a=x._data(this);if(n)a[n]&&a[n].stop&&i(a[n]);else for(n in a)a[n]&&a[n].stop&&Jn.test(n)&&i(a[n]);for(n=o.length;n--;)o[n].elem!==this||null!=e&&o[n].queue!==e||(o[n].anim.stop(r),t=!1,o.splice(n,1));(t||!r)&&x.dequeue(this,e)})},finish:function(e){return e!==!1&&(e=e||"fx"),this.each(function(){var t,n=x._data(this),r=n[e+"queue"],i=n[e+"queueHooks"],o=x.timers,a=r?r.length:0;for(n.finish=!0,x.queue(this,e,[]),i&&i.stop&&i.stop.call(this,!0),t=o.length;t--;)o[t].elem===this&&o[t].queue===e&&(o[t].anim.stop(!0),o.splice(t,1));for(t=0;a>t;t++)r[t]&&r[t].finish&&r[t].finish.call(this);delete n.finish})}});function ir(e,t){var n,r={height:e},i=0;for(t=t?1:0;4>i;i+=2-t)n=Zt[i],r["margin"+n]=r["padding"+n]=e;return t&&(r.opacity=r.width=e),r}x.each({slideDown:ir("show"),slideUp:ir("hide"),slideToggle:ir("toggle"),fadeIn:{opacity:"show"},fadeOut:{opacity:"hide"},fadeToggle:{opacity:"toggle"}},function(e,t){x.fn[e]=function(e,n,r){return this.animate(t,e,n,r)}}),x.speed=function(e,t,n){var r=e&&"object"==typeof e?x.extend({},e):{complete:n||!n&&t||x.isFunction(e)&&e,duration:e,easing:n&&t||t&&!x.isFunction(t)&&t};return r.duration=x.fx.off?0:"number"==typeof r.duration?r.duration:r.duration in x.fx.speeds?x.fx.speeds[r.duration]:x.fx.speeds._default,(null==r.queue||r.queue===!0)&&(r.queue="fx"),r.old=r.complete,r.complete=function(){x.isFunction(r.old)&&r.old.call(this),r.queue&&x.dequeue(this,r.queue)},r},x.easing={linear:function(e){return e},swing:function(e){return.5-Math.cos(e*Math.PI)/2}},x.timers=[],x.fx=rr.prototype.init,x.fx.tick=function(){var e,n=x.timers,r=0;for(Xn=x.now();n.length>r;r++)e=n[r],e()||n[r]!==e||n.splice(r--,1);n.length||x.fx.stop(),Xn=t},x.fx.timer=function(e){e()&&x.timers.push(e)&&x.fx.start()},x.fx.interval=13,x.fx.start=function(){Un||(Un=setInterval(x.fx.tick,x.fx.interval))},x.fx.stop=function(){clearInterval(Un),Un=null},x.fx.speeds={slow:600,fast:200,_default:400},x.fx.step={},x.expr&&x.expr.filters&&(x.expr.filters.animated=function(e){return x.grep(x.timers,function(t){return e===t.elem}).length}),x.fn.offset=function(e){if(arguments.length)return e===t?this:this.each(function(t){x.offset.setOffset(this,e,t)});var n,r,o={top:0,left:0},a=this[0],s=a&&a.ownerDocument;if(s)return n=s.documentElement,x.contains(n,a)?(typeof a.getBoundingClientRect!==i&&(o=a.getBoundingClientRect()),r=or(s),{top:o.top+(r.pageYOffset||n.scrollTop)-(n.clientTop||0),left:o.left+(r.pageXOffset||n.scrollLeft)-(n.clientLeft||0)}):o},x.offset={setOffset:function(e,t,n){var r=x.css(e,"position");"static"===r&&(e.style.position="relative");var i=x(e),o=i.offset(),a=x.css(e,"top"),s=x.css(e,"left"),l=("absolute"===r||"fixed"===r)&&x.inArray("auto",[a,s])>-1,u={},c={},p,f;l?(c=i.position(),p=c.top,f=c.left):(p=parseFloat(a)||0,f=parseFloat(s)||0),x.isFunction(t)&&(t=t.call(e,n,o)),null!=t.top&&(u.top=t.top-o.top+p),null!=t.left&&(u.left=t.left-o.left+f),"using"in t?t.using.call(e,u):i.css(u)}},x.fn.extend({position:function(){if(this[0]){var e,t,n={top:0,left:0},r=this[0];return"fixed"===x.css(r,"position")?t=r.getBoundingClientRect():(e=this.offsetParent(),t=this.offset(),x.nodeName(e[0],"html")||(n=e.offset()),n.top+=x.css(e[0],"borderTopWidth",!0),n.left+=x.css(e[0],"borderLeftWidth",!0)),{top:t.top-n.top-x.css(r,"marginTop",!0),left:t.left-n.left-x.css(r,"marginLeft",!0)}}},offsetParent:function(){return this.map(function(){var e=this.offsetParent||s;while(e&&!x.nodeName(e,"html")&&"static"===x.css(e,"position"))e=e.offsetParent;return e||s})}}),x.each({scrollLeft:"pageXOffset",scrollTop:"pageYOffset"},function(e,n){var r=/Y/.test(n);x.fn[e]=function(i){return x.access(this,function(e,i,o){var a=or(e);return o===t?a?n in a?a[n]:a.document.documentElement[i]:e[i]:(a?a.scrollTo(r?x(a).scrollLeft():o,r?o:x(a).scrollTop()):e[i]=o,t)},e,i,arguments.length,null)}});function or(e){return x.isWindow(e)?e:9===e.nodeType?e.defaultView||e.parentWindow:!1}x.each({Height:"height",Width:"width"},function(e,n){x.each({padding:"inner"+e,content:n,"":"outer"+e},function(r,i){x.fn[i]=function(i,o){var a=arguments.length&&(r||"boolean"!=typeof i),s=r||(i===!0||o===!0?"margin":"border");return x.access(this,function(n,r,i){var o;return x.isWindow(n)?n.document.documentElement["client"+e]:9===n.nodeType?(o=n.documentElement,Math.max(n.body["scroll"+e],o["scroll"+e],n.body["offset"+e],o["offset"+e],o["client"+e])):i===t?x.css(n,r,s):x.style(n,r,i,s)},n,a?i:t,a,null)}})}),x.fn.size=function(){return this.length},x.fn.andSelf=x.fn.addBack,"object"==typeof module&&module&&"object"==typeof module.exports?module.exports=x:(e.jQuery=e.$=x,"function"==typeof define&&define.amd&&define("jquery",[],function(){return x}))})(window);

;/*})'"*/
;/*})'"*/
/* Source and licensing information for the line(s) below can be found at https://www.redhat.com/misc/jquery.once.js. */
(function($){var cache={},uuid=0;$.fn.once=function(id,fn){if(typeof id!='string'){if(!(id in cache))cache[id]=++uuid;if(!fn)fn=id;id='jquery-once-'+cache[id]};var name=id+'-processed',elements=this.not('.'+name).addClass(name);return $.isFunction(fn)?elements.each(fn):elements};$.fn.removeOnce=function(id,fn){var name=id+'-processed',elements=this.filter('.'+name).removeClass(name);return $.isFunction(fn)?elements.each(fn):elements}})(jQuery);;
/* Source and licensing information for the above line(s) can be found at https://www.redhat.com/misc/jquery.once.js. */
;/*})'"*/
/* Source and licensing information for the line(s) below can be found at https://www.redhat.com/misc/drupal.js. */
var Drupal=Drupal||{settings:{},behaviors:{},locale:{}};jQuery.noConflict();(function($){var jquery_init=$.fn.init;$.fn.init=function(selector,context,rootjQuery){if(selector&&typeof selector==='string'){var hash_position=selector.indexOf('#');if(hash_position>=0){var bracket_position=selector.indexOf('<');if(bracket_position>hash_position)throw'Syntax error, unrecognized expression: '+selector}};return jquery_init.call(this,selector,context,rootjQuery)};$.fn.init.prototype=jquery_init.prototype;if($.ajaxPrefilter){$.ajaxPrefilter(function(s){if(s.crossDomain)s.contents.script=false})}else if($.httpData){var jquery_httpData=$.httpData;$.httpData=function(xhr,type,s){if(!type&&!Drupal.urlIsLocal(s.url)){var content_type=xhr.getResponseHeader('content-type')||'';if(content_type.indexOf('javascript')>=0)type='text'};return jquery_httpData.call(this,xhr,type,s)};$.httpData.prototype=jquery_httpData.prototype};Drupal.attachBehaviors=function(context,settings){context=context||document;settings=settings||Drupal.settings;$.each(Drupal.behaviors,function(){if($.isFunction(this.attach))this.attach(context,settings)})};Drupal.detachBehaviors=function(context,settings,trigger){context=context||document;settings=settings||Drupal.settings;trigger=trigger||'unload';$.each(Drupal.behaviors,function(){if($.isFunction(this.detach))this.detach(context,settings,trigger)})};Drupal.checkPlain=function(str){var character,regex,replace={'&':'&amp;',"'":'&#39;','"':'&quot;','<':'&lt;','>':'&gt;'};str=String(str);for(character in replace)if(replace.hasOwnProperty(character)){regex=new RegExp(character,'g');str=str.replace(regex,replace[character])};return str};Drupal.formatString=function(str,args){for(var key in args)if(args.hasOwnProperty(key))switch(key.charAt(0)){case'@':args[key]=Drupal.checkPlain(args[key]);break;case'!':break;default:args[key]=Drupal.theme('placeholder',args[key]);break};return Drupal.stringReplace(str,args,null)};Drupal.stringReplace=function(str,args,keys){if(str.length===0)return str;if(!$.isArray(keys)){keys=[];for(var k in args)if(args.hasOwnProperty(k))keys.push(k);keys.sort(function(a,b){return a.length-b.length})};if(keys.length===0)return str;var key=keys.pop(),fragments=str.split(key);if(keys.length)for(var i=0;i<fragments.length;i++)fragments[i]=Drupal.stringReplace(fragments[i],args,keys.slice(0));return fragments.join(args[key])};Drupal.t=function(str,args,options){options=options||{};options.context=options.context||'';if(Drupal.locale.strings&&Drupal.locale.strings[options.context]&&Drupal.locale.strings[options.context][str])str=Drupal.locale.strings[options.context][str];if(args)str=Drupal.formatString(str,args);return str};Drupal.formatPlural=function(count,singular,plural,args,options){args=args||{};args['@count']=count;var index=Drupal.locale.pluralFormula?Drupal.locale.pluralFormula(args['@count']):((args['@count']==1)?0:1);if(index==0){return Drupal.t(singular,args,options)}else if(index==1){return Drupal.t(plural,args,options)}else{args['@count['+index+']']=args['@count'];delete args['@count'];return Drupal.t(plural.replace('@count','@count['+index+']'),args,options)}};Drupal.absoluteUrl=function(url){var urlParsingNode=document.createElement('a');try{url=decodeURIComponent(url)}catch(e){};urlParsingNode.setAttribute('href',url);return urlParsingNode.cloneNode(false).href};Drupal.urlIsLocal=function(url){var absoluteUrl=Drupal.absoluteUrl(url),protocol=location.protocol;if(protocol==='http:'&&absoluteUrl.indexOf('https:')===0)protocol='https:';var baseUrl=protocol+'//'+location.host+Drupal.settings.basePath.slice(0,-1);try{absoluteUrl=decodeURIComponent(absoluteUrl)}catch(e){};try{baseUrl=decodeURIComponent(baseUrl)}catch(e){};return absoluteUrl===baseUrl||absoluteUrl.indexOf(baseUrl+'/')===0};Drupal.theme=function(func){var args=Array.prototype.slice.apply(arguments,[1]);return(Drupal.theme[func]||Drupal.theme.prototype[func]).apply(this,args)};Drupal.freezeHeight=function(){Drupal.unfreezeHeight();$('<div id="freeze-height"></div>').css({position:'absolute',top:'0px',left:'0px',width:'1px',height:$('body').css('height')}).appendTo('body')};Drupal.unfreezeHeight=function(){$('#freeze-height').remove()};Drupal.encodePath=function(item,uri){uri=uri||location.href;return encodeURIComponent(item).replace(/%2F/g,'/')};Drupal.getSelection=function(element){if(typeof element.selectionStart!='number'&&document.selection){var range1=document.selection.createRange(),range2=range1.duplicate();range2.moveToElementText(element);range2.setEndPoint('EndToEnd',range1);var start=range2.text.length-range1.text.length,end=start+range1.text.length;return{start:start,end:end}};return{start:element.selectionStart,end:element.selectionEnd}};Drupal.beforeUnloadCalled=false;$(window).bind('beforeunload pagehide',function(){Drupal.beforeUnloadCalled=true});Drupal.displayAjaxError=function(message){if(!Drupal.beforeUnloadCalled)alert(message)};Drupal.ajaxError=function(xmlhttp,uri,customMessage){var statusCode,statusText,pathText,responseText,readyStateText,message;if(xmlhttp.status){statusCode="\n"+Drupal.t("An AJAX HTTP error occurred.")+"\n"+Drupal.t("HTTP Result Code: !status",{'!status':xmlhttp.status})}else statusCode="\n"+Drupal.t("An AJAX HTTP request terminated abnormally.");statusCode+="\n"+Drupal.t("Debugging information follows.");pathText="\n"+Drupal.t("Path: !uri",{'!uri':uri});statusText='';try{statusText="\n"+Drupal.t("StatusText: !statusText",{'!statusText':$.trim(xmlhttp.statusText)})}catch(e){};responseText='';try{responseText="\n"+Drupal.t("ResponseText: !responseText",{'!responseText':$.trim(xmlhttp.responseText)})}catch(e){};responseText=responseText.replace(/<("[^"]*"|'[^']*'|[^'">])*>/gi,"");responseText=responseText.replace(/[\n]+\s+/g,"\n");readyStateText=xmlhttp.status==0?("\n"+Drupal.t("ReadyState: !readyState",{'!readyState':xmlhttp.readyState})):"";customMessage=customMessage?("\n"+Drupal.t("CustomMessage: !customMessage",{'!customMessage':customMessage})):"";message=statusCode+pathText+statusText+customMessage+responseText+readyStateText;return message};$('html').addClass('js');document.cookie='has_js=1; path=/';$(function(){if(jQuery.support.positionFixed===undefined){var el=$('<div style="position:fixed; top:10px" />').appendTo(document.body);jQuery.support.positionFixed=el[0].offsetTop===10;el.remove()}});$(function(){Drupal.attachBehaviors(document,Drupal.settings)});Drupal.theme.prototype={placeholder:function(str){return'<em class="placeholder">'+Drupal.checkPlain(str)+'</em>'}}})(jQuery);;
/* Source and licensing information for the above line(s) can be found at https://www.redhat.com/misc/drupal.js. */
;/*})'"*/
!function(a,b,c){"use strict";a.digitalData=a.digitalData||{},c.isArray(a.digitalData.event)||(a.digitalData.event=[]),a.redhat=a.redhat||{},a.redhat.ddo={dispatchEvent:function(a){if(!a)return this;if(!b.body||!c.isFunction(b.body.dispatchEvent))return this;var d;return c.isFunction(b.createEvent)?(d=b.createEvent("Event"),d.initEvent(a,!0,!0)):CustomEvent&&(d=new CustomEvent(a,{buddles:!0,cancellable:!0})),d&&b.body.dispatchEvent(d),this},addEvent:function(b){if(!c.isPlainObject(b))return this;var d={eventInfo:c.extend(!0,{eventName:"",eventAction:"",timestamp:new Date,processed:{adobeAnalytics:!1}},b)};return a.digitalData.event.push(d),this},get:function(b){return b?a.digitalData:c.extend(!0,{},a.digitalData)},set:function(b){return a.digitalData=b,this},extend:function(b){return c.extend(!0,a.digitalData,b),this}}}(window,document,jQuery);
;/*})'"*/
;/*})'"*/
/*! jQuery UI - v1.10.2 - 2013-03-14
* http://jqueryui.com
* Copyright 2013 jQuery Foundation and other contributors; Licensed MIT */
(function(e,t){function i(t,i){var a,n,r,o=t.nodeName.toLowerCase();return"area"===o?(a=t.parentNode,n=a.name,t.href&&n&&"map"===a.nodeName.toLowerCase()?(r=e("img[usemap=#"+n+"]")[0],!!r&&s(r)):!1):(/input|select|textarea|button|object/.test(o)?!t.disabled:"a"===o?t.href||i:i)&&s(t)}function s(t){return e.expr.filters.visible(t)&&!e(t).parents().addBack().filter(function(){return"hidden"===e.css(this,"visibility")}).length}var a=0,n=/^ui-id-\d+$/;e.ui=e.ui||{},e.extend(e.ui,{version:"1.10.2",keyCode:{BACKSPACE:8,COMMA:188,DELETE:46,DOWN:40,END:35,ENTER:13,ESCAPE:27,HOME:36,LEFT:37,NUMPAD_ADD:107,NUMPAD_DECIMAL:110,NUMPAD_DIVIDE:111,NUMPAD_ENTER:108,NUMPAD_MULTIPLY:106,NUMPAD_SUBTRACT:109,PAGE_DOWN:34,PAGE_UP:33,PERIOD:190,RIGHT:39,SPACE:32,TAB:9,UP:38}}),e.fn.extend({focus:function(t){return function(i,s){return"number"==typeof i?this.each(function(){var t=this;setTimeout(function(){e(t).focus(),s&&s.call(t)},i)}):t.apply(this,arguments)}}(e.fn.focus),scrollParent:function(){var t;return t=e.ui.ie&&/(static|relative)/.test(this.css("position"))||/absolute/.test(this.css("position"))?this.parents().filter(function(){return/(relative|absolute|fixed)/.test(e.css(this,"position"))&&/(auto|scroll)/.test(e.css(this,"overflow")+e.css(this,"overflow-y")+e.css(this,"overflow-x"))}).eq(0):this.parents().filter(function(){return/(auto|scroll)/.test(e.css(this,"overflow")+e.css(this,"overflow-y")+e.css(this,"overflow-x"))}).eq(0),/fixed/.test(this.css("position"))||!t.length?e(document):t},zIndex:function(i){if(i!==t)return this.css("zIndex",i);if(this.length)for(var s,a,n=e(this[0]);n.length&&n[0]!==document;){if(s=n.css("position"),("absolute"===s||"relative"===s||"fixed"===s)&&(a=parseInt(n.css("zIndex"),10),!isNaN(a)&&0!==a))return a;n=n.parent()}return 0},uniqueId:function(){return this.each(function(){this.id||(this.id="ui-id-"+ ++a)})},removeUniqueId:function(){return this.each(function(){n.test(this.id)&&e(this).removeAttr("id")})}}),e.extend(e.expr[":"],{data:e.expr.createPseudo?e.expr.createPseudo(function(t){return function(i){return!!e.data(i,t)}}):function(t,i,s){return!!e.data(t,s[3])},focusable:function(t){return i(t,!isNaN(e.attr(t,"tabindex")))},tabbable:function(t){var s=e.attr(t,"tabindex"),a=isNaN(s);return(a||s>=0)&&i(t,!a)}}),e("<a>").outerWidth(1).jquery||e.each(["Width","Height"],function(i,s){function a(t,i,s,a){return e.each(n,function(){i-=parseFloat(e.css(t,"padding"+this))||0,s&&(i-=parseFloat(e.css(t,"border"+this+"Width"))||0),a&&(i-=parseFloat(e.css(t,"margin"+this))||0)}),i}var n="Width"===s?["Left","Right"]:["Top","Bottom"],r=s.toLowerCase(),o={innerWidth:e.fn.innerWidth,innerHeight:e.fn.innerHeight,outerWidth:e.fn.outerWidth,outerHeight:e.fn.outerHeight};e.fn["inner"+s]=function(i){return i===t?o["inner"+s].call(this):this.each(function(){e(this).css(r,a(this,i)+"px")})},e.fn["outer"+s]=function(t,i){return"number"!=typeof t?o["outer"+s].call(this,t):this.each(function(){e(this).css(r,a(this,t,!0,i)+"px")})}}),e.fn.addBack||(e.fn.addBack=function(e){return this.add(null==e?this.prevObject:this.prevObject.filter(e))}),e("<a>").data("a-b","a").removeData("a-b").data("a-b")&&(e.fn.removeData=function(t){return function(i){return arguments.length?t.call(this,e.camelCase(i)):t.call(this)}}(e.fn.removeData)),e.ui.ie=!!/msie [\w.]+/.exec(navigator.userAgent.toLowerCase()),e.support.selectstart="onselectstart"in document.createElement("div"),e.fn.extend({disableSelection:function(){return this.bind((e.support.selectstart?"selectstart":"mousedown")+".ui-disableSelection",function(e){e.preventDefault()})},enableSelection:function(){return this.unbind(".ui-disableSelection")}}),e.extend(e.ui,{plugin:{add:function(t,i,s){var a,n=e.ui[t].prototype;for(a in s)n.plugins[a]=n.plugins[a]||[],n.plugins[a].push([i,s[a]])},call:function(e,t,i){var s,a=e.plugins[t];if(a&&e.element[0].parentNode&&11!==e.element[0].parentNode.nodeType)for(s=0;a.length>s;s++)e.options[a[s][0]]&&a[s][1].apply(e.element,i)}},hasScroll:function(t,i){if("hidden"===e(t).css("overflow"))return!1;var s=i&&"left"===i?"scrollLeft":"scrollTop",a=!1;return t[s]>0?!0:(t[s]=1,a=t[s]>0,t[s]=0,a)}})})(jQuery);
;/*})'"*/
;/*})'"*/
/*! jQuery UI - v1.10.2 - 2013-03-14
* http://jqueryui.com
* Copyright 2013 jQuery Foundation and other contributors; Licensed MIT */
(function(e,t){var i=0,s=Array.prototype.slice,n=e.cleanData;e.cleanData=function(t){for(var i,s=0;null!=(i=t[s]);s++)try{e(i).triggerHandler("remove")}catch(a){}n(t)},e.widget=function(i,s,n){var a,r,o,h,l={},u=i.split(".")[0];i=i.split(".")[1],a=u+"-"+i,n||(n=s,s=e.Widget),e.expr[":"][a.toLowerCase()]=function(t){return!!e.data(t,a)},e[u]=e[u]||{},r=e[u][i],o=e[u][i]=function(e,i){return this._createWidget?(arguments.length&&this._createWidget(e,i),t):new o(e,i)},e.extend(o,r,{version:n.version,_proto:e.extend({},n),_childConstructors:[]}),h=new s,h.options=e.widget.extend({},h.options),e.each(n,function(i,n){return e.isFunction(n)?(l[i]=function(){var e=function(){return s.prototype[i].apply(this,arguments)},t=function(e){return s.prototype[i].apply(this,e)};return function(){var i,s=this._super,a=this._superApply;return this._super=e,this._superApply=t,i=n.apply(this,arguments),this._super=s,this._superApply=a,i}}(),t):(l[i]=n,t)}),o.prototype=e.widget.extend(h,{widgetEventPrefix:r?h.widgetEventPrefix:i},l,{constructor:o,namespace:u,widgetName:i,widgetFullName:a}),r?(e.each(r._childConstructors,function(t,i){var s=i.prototype;e.widget(s.namespace+"."+s.widgetName,o,i._proto)}),delete r._childConstructors):s._childConstructors.push(o),e.widget.bridge(i,o)},e.widget.extend=function(i){for(var n,a,r=s.call(arguments,1),o=0,h=r.length;h>o;o++)for(n in r[o])a=r[o][n],r[o].hasOwnProperty(n)&&a!==t&&(i[n]=e.isPlainObject(a)?e.isPlainObject(i[n])?e.widget.extend({},i[n],a):e.widget.extend({},a):a);return i},e.widget.bridge=function(i,n){var a=n.prototype.widgetFullName||i;e.fn[i]=function(r){var o="string"==typeof r,h=s.call(arguments,1),l=this;return r=!o&&h.length?e.widget.extend.apply(null,[r].concat(h)):r,o?this.each(function(){var s,n=e.data(this,a);return n?e.isFunction(n[r])&&"_"!==r.charAt(0)?(s=n[r].apply(n,h),s!==n&&s!==t?(l=s&&s.jquery?l.pushStack(s.get()):s,!1):t):e.error("no such method '"+r+"' for "+i+" widget instance"):e.error("cannot call methods on "+i+" prior to initialization; "+"attempted to call method '"+r+"'")}):this.each(function(){var t=e.data(this,a);t?t.option(r||{})._init():e.data(this,a,new n(r,this))}),l}},e.Widget=function(){},e.Widget._childConstructors=[],e.Widget.prototype={widgetName:"widget",widgetEventPrefix:"",defaultElement:"<div>",options:{disabled:!1,create:null},_createWidget:function(t,s){s=e(s||this.defaultElement||this)[0],this.element=e(s),this.uuid=i++,this.eventNamespace="."+this.widgetName+this.uuid,this.options=e.widget.extend({},this.options,this._getCreateOptions(),t),this.bindings=e(),this.hoverable=e(),this.focusable=e(),s!==this&&(e.data(s,this.widgetFullName,this),this._on(!0,this.element,{remove:function(e){e.target===s&&this.destroy()}}),this.document=e(s.style?s.ownerDocument:s.document||s),this.window=e(this.document[0].defaultView||this.document[0].parentWindow)),this._create(),this._trigger("create",null,this._getCreateEventData()),this._init()},_getCreateOptions:e.noop,_getCreateEventData:e.noop,_create:e.noop,_init:e.noop,destroy:function(){this._destroy(),this.element.unbind(this.eventNamespace).removeData(this.widgetName).removeData(this.widgetFullName).removeData(e.camelCase(this.widgetFullName)),this.widget().unbind(this.eventNamespace).removeAttr("aria-disabled").removeClass(this.widgetFullName+"-disabled "+"ui-state-disabled"),this.bindings.unbind(this.eventNamespace),this.hoverable.removeClass("ui-state-hover"),this.focusable.removeClass("ui-state-focus")},_destroy:e.noop,widget:function(){return this.element},option:function(i,s){var n,a,r,o=i;if(0===arguments.length)return e.widget.extend({},this.options);if("string"==typeof i)if(o={},n=i.split("."),i=n.shift(),n.length){for(a=o[i]=e.widget.extend({},this.options[i]),r=0;n.length-1>r;r++)a[n[r]]=a[n[r]]||{},a=a[n[r]];if(i=n.pop(),s===t)return a[i]===t?null:a[i];a[i]=s}else{if(s===t)return this.options[i]===t?null:this.options[i];o[i]=s}return this._setOptions(o),this},_setOptions:function(e){var t;for(t in e)this._setOption(t,e[t]);return this},_setOption:function(e,t){return this.options[e]=t,"disabled"===e&&(this.widget().toggleClass(this.widgetFullName+"-disabled ui-state-disabled",!!t).attr("aria-disabled",t),this.hoverable.removeClass("ui-state-hover"),this.focusable.removeClass("ui-state-focus")),this},enable:function(){return this._setOption("disabled",!1)},disable:function(){return this._setOption("disabled",!0)},_on:function(i,s,n){var a,r=this;"boolean"!=typeof i&&(n=s,s=i,i=!1),n?(s=a=e(s),this.bindings=this.bindings.add(s)):(n=s,s=this.element,a=this.widget()),e.each(n,function(n,o){function h(){return i||r.options.disabled!==!0&&!e(this).hasClass("ui-state-disabled")?("string"==typeof o?r[o]:o).apply(r,arguments):t}"string"!=typeof o&&(h.guid=o.guid=o.guid||h.guid||e.guid++);var l=n.match(/^(\w+)\s*(.*)$/),u=l[1]+r.eventNamespace,c=l[2];c?a.delegate(c,u,h):s.bind(u,h)})},_off:function(e,t){t=(t||"").split(" ").join(this.eventNamespace+" ")+this.eventNamespace,e.unbind(t).undelegate(t)},_delay:function(e,t){function i(){return("string"==typeof e?s[e]:e).apply(s,arguments)}var s=this;return setTimeout(i,t||0)},_hoverable:function(t){this.hoverable=this.hoverable.add(t),this._on(t,{mouseenter:function(t){e(t.currentTarget).addClass("ui-state-hover")},mouseleave:function(t){e(t.currentTarget).removeClass("ui-state-hover")}})},_focusable:function(t){this.focusable=this.focusable.add(t),this._on(t,{focusin:function(t){e(t.currentTarget).addClass("ui-state-focus")},focusout:function(t){e(t.currentTarget).removeClass("ui-state-focus")}})},_trigger:function(t,i,s){var n,a,r=this.options[t];if(s=s||{},i=e.Event(i),i.type=(t===this.widgetEventPrefix?t:this.widgetEventPrefix+t).toLowerCase(),i.target=this.element[0],a=i.originalEvent)for(n in a)n in i||(i[n]=a[n]);return this.element.trigger(i,s),!(e.isFunction(r)&&r.apply(this.element[0],[i].concat(s))===!1||i.isDefaultPrevented())}},e.each({show:"fadeIn",hide:"fadeOut"},function(t,i){e.Widget.prototype["_"+t]=function(s,n,a){"string"==typeof n&&(n={effect:n});var r,o=n?n===!0||"number"==typeof n?i:n.effect||i:t;n=n||{},"number"==typeof n&&(n={duration:n}),r=!e.isEmptyObject(n),n.complete=a,n.delay&&s.delay(n.delay),r&&e.effects&&e.effects.effect[o]?s[t](n):o!==t&&s[o]?s[o](n.duration,n.easing,a):s.queue(function(i){e(this)[t](),a&&a.call(s[0]),i()})}})})(jQuery);
;/*})'"*/
;/*})'"*/
/*! jQuery UI - v1.10.2 - 2013-03-14
* http://jqueryui.com
* Copyright 2013 jQuery Foundation and other contributors; Licensed MIT */
(function(t,e){var i="ui-effects-";t.effects={effect:{}},function(t,e){function i(t,e,i){var s=u[e.type]||{};return null==t?i||!e.def?null:e.def:(t=s.floor?~~t:parseFloat(t),isNaN(t)?e.def:s.mod?(t+s.mod)%s.mod:0>t?0:t>s.max?s.max:t)}function s(i){var s=l(),n=s._rgba=[];return i=i.toLowerCase(),f(h,function(t,a){var o,r=a.re.exec(i),h=r&&a.parse(r),l=a.space||"rgba";return h?(o=s[l](h),s[c[l].cache]=o[c[l].cache],n=s._rgba=o._rgba,!1):e}),n.length?("0,0,0,0"===n.join()&&t.extend(n,a.transparent),s):a[i]}function n(t,e,i){return i=(i+1)%1,1>6*i?t+6*(e-t)*i:1>2*i?e:2>3*i?t+6*(e-t)*(2/3-i):t}var a,o="backgroundColor borderBottomColor borderLeftColor borderRightColor borderTopColor color columnRuleColor outlineColor textDecorationColor textEmphasisColor",r=/^([\-+])=\s*(\d+\.?\d*)/,h=[{re:/rgba?\(\s*(\d{1,3})\s*,\s*(\d{1,3})\s*,\s*(\d{1,3})\s*(?:,\s*(\d?(?:\.\d+)?)\s*)?\)/,parse:function(t){return[t[1],t[2],t[3],t[4]]}},{re:/rgba?\(\s*(\d+(?:\.\d+)?)\%\s*,\s*(\d+(?:\.\d+)?)\%\s*,\s*(\d+(?:\.\d+)?)\%\s*(?:,\s*(\d?(?:\.\d+)?)\s*)?\)/,parse:function(t){return[2.55*t[1],2.55*t[2],2.55*t[3],t[4]]}},{re:/#([a-f0-9]{2})([a-f0-9]{2})([a-f0-9]{2})/,parse:function(t){return[parseInt(t[1],16),parseInt(t[2],16),parseInt(t[3],16)]}},{re:/#([a-f0-9])([a-f0-9])([a-f0-9])/,parse:function(t){return[parseInt(t[1]+t[1],16),parseInt(t[2]+t[2],16),parseInt(t[3]+t[3],16)]}},{re:/hsla?\(\s*(\d+(?:\.\d+)?)\s*,\s*(\d+(?:\.\d+)?)\%\s*,\s*(\d+(?:\.\d+)?)\%\s*(?:,\s*(\d?(?:\.\d+)?)\s*)?\)/,space:"hsla",parse:function(t){return[t[1],t[2]/100,t[3]/100,t[4]]}}],l=t.Color=function(e,i,s,n){return new t.Color.fn.parse(e,i,s,n)},c={rgba:{props:{red:{idx:0,type:"byte"},green:{idx:1,type:"byte"},blue:{idx:2,type:"byte"}}},hsla:{props:{hue:{idx:0,type:"degrees"},saturation:{idx:1,type:"percent"},lightness:{idx:2,type:"percent"}}}},u={"byte":{floor:!0,max:255},percent:{max:1},degrees:{mod:360,floor:!0}},d=l.support={},p=t("<p>")[0],f=t.each;p.style.cssText="background-color:rgba(1,1,1,.5)",d.rgba=p.style.backgroundColor.indexOf("rgba")>-1,f(c,function(t,e){e.cache="_"+t,e.props.alpha={idx:3,type:"percent",def:1}}),l.fn=t.extend(l.prototype,{parse:function(n,o,r,h){if(n===e)return this._rgba=[null,null,null,null],this;(n.jquery||n.nodeType)&&(n=t(n).css(o),o=e);var u=this,d=t.type(n),p=this._rgba=[];return o!==e&&(n=[n,o,r,h],d="array"),"string"===d?this.parse(s(n)||a._default):"array"===d?(f(c.rgba.props,function(t,e){p[e.idx]=i(n[e.idx],e)}),this):"object"===d?(n instanceof l?f(c,function(t,e){n[e.cache]&&(u[e.cache]=n[e.cache].slice())}):f(c,function(e,s){var a=s.cache;f(s.props,function(t,e){if(!u[a]&&s.to){if("alpha"===t||null==n[t])return;u[a]=s.to(u._rgba)}u[a][e.idx]=i(n[t],e,!0)}),u[a]&&0>t.inArray(null,u[a].slice(0,3))&&(u[a][3]=1,s.from&&(u._rgba=s.from(u[a])))}),this):e},is:function(t){var i=l(t),s=!0,n=this;return f(c,function(t,a){var o,r=i[a.cache];return r&&(o=n[a.cache]||a.to&&a.to(n._rgba)||[],f(a.props,function(t,i){return null!=r[i.idx]?s=r[i.idx]===o[i.idx]:e})),s}),s},_space:function(){var t=[],e=this;return f(c,function(i,s){e[s.cache]&&t.push(i)}),t.pop()},transition:function(t,e){var s=l(t),n=s._space(),a=c[n],o=0===this.alpha()?l("transparent"):this,r=o[a.cache]||a.to(o._rgba),h=r.slice();return s=s[a.cache],f(a.props,function(t,n){var a=n.idx,o=r[a],l=s[a],c=u[n.type]||{};null!==l&&(null===o?h[a]=l:(c.mod&&(l-o>c.mod/2?o+=c.mod:o-l>c.mod/2&&(o-=c.mod)),h[a]=i((l-o)*e+o,n)))}),this[n](h)},blend:function(e){if(1===this._rgba[3])return this;var i=this._rgba.slice(),s=i.pop(),n=l(e)._rgba;return l(t.map(i,function(t,e){return(1-s)*n[e]+s*t}))},toRgbaString:function(){var e="rgba(",i=t.map(this._rgba,function(t,e){return null==t?e>2?1:0:t});return 1===i[3]&&(i.pop(),e="rgb("),e+i.join()+")"},toHslaString:function(){var e="hsla(",i=t.map(this.hsla(),function(t,e){return null==t&&(t=e>2?1:0),e&&3>e&&(t=Math.round(100*t)+"%"),t});return 1===i[3]&&(i.pop(),e="hsl("),e+i.join()+")"},toHexString:function(e){var i=this._rgba.slice(),s=i.pop();return e&&i.push(~~(255*s)),"#"+t.map(i,function(t){return t=(t||0).toString(16),1===t.length?"0"+t:t}).join("")},toString:function(){return 0===this._rgba[3]?"transparent":this.toRgbaString()}}),l.fn.parse.prototype=l.fn,c.hsla.to=function(t){if(null==t[0]||null==t[1]||null==t[2])return[null,null,null,t[3]];var e,i,s=t[0]/255,n=t[1]/255,a=t[2]/255,o=t[3],r=Math.max(s,n,a),h=Math.min(s,n,a),l=r-h,c=r+h,u=.5*c;return e=h===r?0:s===r?60*(n-a)/l+360:n===r?60*(a-s)/l+120:60*(s-n)/l+240,i=0===l?0:.5>=u?l/c:l/(2-c),[Math.round(e)%360,i,u,null==o?1:o]},c.hsla.from=function(t){if(null==t[0]||null==t[1]||null==t[2])return[null,null,null,t[3]];var e=t[0]/360,i=t[1],s=t[2],a=t[3],o=.5>=s?s*(1+i):s+i-s*i,r=2*s-o;return[Math.round(255*n(r,o,e+1/3)),Math.round(255*n(r,o,e)),Math.round(255*n(r,o,e-1/3)),a]},f(c,function(s,n){var a=n.props,o=n.cache,h=n.to,c=n.from;l.fn[s]=function(s){if(h&&!this[o]&&(this[o]=h(this._rgba)),s===e)return this[o].slice();var n,r=t.type(s),u="array"===r||"object"===r?s:arguments,d=this[o].slice();return f(a,function(t,e){var s=u["object"===r?t:e.idx];null==s&&(s=d[e.idx]),d[e.idx]=i(s,e)}),c?(n=l(c(d)),n[o]=d,n):l(d)},f(a,function(e,i){l.fn[e]||(l.fn[e]=function(n){var a,o=t.type(n),h="alpha"===e?this._hsla?"hsla":"rgba":s,l=this[h](),c=l[i.idx];return"undefined"===o?c:("function"===o&&(n=n.call(this,c),o=t.type(n)),null==n&&i.empty?this:("string"===o&&(a=r.exec(n),a&&(n=c+parseFloat(a[2])*("+"===a[1]?1:-1))),l[i.idx]=n,this[h](l)))})})}),l.hook=function(e){var i=e.split(" ");f(i,function(e,i){t.cssHooks[i]={set:function(e,n){var a,o,r="";if("transparent"!==n&&("string"!==t.type(n)||(a=s(n)))){if(n=l(a||n),!d.rgba&&1!==n._rgba[3]){for(o="backgroundColor"===i?e.parentNode:e;(""===r||"transparent"===r)&&o&&o.style;)try{r=t.css(o,"backgroundColor"),o=o.parentNode}catch(h){}n=n.blend(r&&"transparent"!==r?r:"_default")}n=n.toRgbaString()}try{e.style[i]=n}catch(h){}}},t.fx.step[i]=function(e){e.colorInit||(e.start=l(e.elem,i),e.end=l(e.end),e.colorInit=!0),t.cssHooks[i].set(e.elem,e.start.transition(e.end,e.pos))}})},l.hook(o),t.cssHooks.borderColor={expand:function(t){var e={};return f(["Top","Right","Bottom","Left"],function(i,s){e["border"+s+"Color"]=t}),e}},a=t.Color.names={aqua:"#00ffff",black:"#000000",blue:"#0000ff",fuchsia:"#ff00ff",gray:"#808080",green:"#008000",lime:"#00ff00",maroon:"#800000",navy:"#000080",olive:"#808000",purple:"#800080",red:"#ff0000",silver:"#c0c0c0",teal:"#008080",white:"#ffffff",yellow:"#ffff00",transparent:[null,null,null,0],_default:"#ffffff"}}(jQuery),function(){function i(e){var i,s,n=e.ownerDocument.defaultView?e.ownerDocument.defaultView.getComputedStyle(e,null):e.currentStyle,a={};if(n&&n.length&&n[0]&&n[n[0]])for(s=n.length;s--;)i=n[s],"string"==typeof n[i]&&(a[t.camelCase(i)]=n[i]);else for(i in n)"string"==typeof n[i]&&(a[i]=n[i]);return a}function s(e,i){var s,n,o={};for(s in i)n=i[s],e[s]!==n&&(a[s]||(t.fx.step[s]||!isNaN(parseFloat(n)))&&(o[s]=n));return o}var n=["add","remove","toggle"],a={border:1,borderBottom:1,borderColor:1,borderLeft:1,borderRight:1,borderTop:1,borderWidth:1,margin:1,padding:1};t.each(["borderLeftStyle","borderRightStyle","borderBottomStyle","borderTopStyle"],function(e,i){t.fx.step[i]=function(t){("none"!==t.end&&!t.setAttr||1===t.pos&&!t.setAttr)&&(jQuery.style(t.elem,i,t.end),t.setAttr=!0)}}),t.fn.addBack||(t.fn.addBack=function(t){return this.add(null==t?this.prevObject:this.prevObject.filter(t))}),t.effects.animateClass=function(e,a,o,r){var h=t.speed(a,o,r);return this.queue(function(){var a,o=t(this),r=o.attr("class")||"",l=h.children?o.find("*").addBack():o;l=l.map(function(){var e=t(this);return{el:e,start:i(this)}}),a=function(){t.each(n,function(t,i){e[i]&&o[i+"Class"](e[i])})},a(),l=l.map(function(){return this.end=i(this.el[0]),this.diff=s(this.start,this.end),this}),o.attr("class",r),l=l.map(function(){var e=this,i=t.Deferred(),s=t.extend({},h,{queue:!1,complete:function(){i.resolve(e)}});return this.el.animate(this.diff,s),i.promise()}),t.when.apply(t,l.get()).done(function(){a(),t.each(arguments,function(){var e=this.el;t.each(this.diff,function(t){e.css(t,"")})}),h.complete.call(o[0])})})},t.fn.extend({addClass:function(e){return function(i,s,n,a){return s?t.effects.animateClass.call(this,{add:i},s,n,a):e.apply(this,arguments)}}(t.fn.addClass),removeClass:function(e){return function(i,s,n,a){return arguments.length>1?t.effects.animateClass.call(this,{remove:i},s,n,a):e.apply(this,arguments)}}(t.fn.removeClass),toggleClass:function(i){return function(s,n,a,o,r){return"boolean"==typeof n||n===e?a?t.effects.animateClass.call(this,n?{add:s}:{remove:s},a,o,r):i.apply(this,arguments):t.effects.animateClass.call(this,{toggle:s},n,a,o)}}(t.fn.toggleClass),switchClass:function(e,i,s,n,a){return t.effects.animateClass.call(this,{add:i,remove:e},s,n,a)}})}(),function(){function s(e,i,s,n){return t.isPlainObject(e)&&(i=e,e=e.effect),e={effect:e},null==i&&(i={}),t.isFunction(i)&&(n=i,s=null,i={}),("number"==typeof i||t.fx.speeds[i])&&(n=s,s=i,i={}),t.isFunction(s)&&(n=s,s=null),i&&t.extend(e,i),s=s||i.duration,e.duration=t.fx.off?0:"number"==typeof s?s:s in t.fx.speeds?t.fx.speeds[s]:t.fx.speeds._default,e.complete=n||i.complete,e}function n(e){return!e||"number"==typeof e||t.fx.speeds[e]?!0:"string"!=typeof e||t.effects.effect[e]?t.isFunction(e)?!0:"object"!=typeof e||e.effect?!1:!0:!0}t.extend(t.effects,{version:"1.10.2",save:function(t,e){for(var s=0;e.length>s;s++)null!==e[s]&&t.data(i+e[s],t[0].style[e[s]])},restore:function(t,s){var n,a;for(a=0;s.length>a;a++)null!==s[a]&&(n=t.data(i+s[a]),n===e&&(n=""),t.css(s[a],n))},setMode:function(t,e){return"toggle"===e&&(e=t.is(":hidden")?"show":"hide"),e},getBaseline:function(t,e){var i,s;switch(t[0]){case"top":i=0;break;case"middle":i=.5;break;case"bottom":i=1;break;default:i=t[0]/e.height}switch(t[1]){case"left":s=0;break;case"center":s=.5;break;case"right":s=1;break;default:s=t[1]/e.width}return{x:s,y:i}},createWrapper:function(e){if(e.parent().is(".ui-effects-wrapper"))return e.parent();var i={width:e.outerWidth(!0),height:e.outerHeight(!0),"float":e.css("float")},s=t("<div></div>").addClass("ui-effects-wrapper").css({fontSize:"100%",background:"transparent",border:"none",margin:0,padding:0}),n={width:e.width(),height:e.height()},a=document.activeElement;try{a.id}catch(o){a=document.body}return e.wrap(s),(e[0]===a||t.contains(e[0],a))&&t(a).focus(),s=e.parent(),"static"===e.css("position")?(s.css({position:"relative"}),e.css({position:"relative"})):(t.extend(i,{position:e.css("position"),zIndex:e.css("z-index")}),t.each(["top","left","bottom","right"],function(t,s){i[s]=e.css(s),isNaN(parseInt(i[s],10))&&(i[s]="auto")}),e.css({position:"relative",top:0,left:0,right:"auto",bottom:"auto"})),e.css(n),s.css(i).show()},removeWrapper:function(e){var i=document.activeElement;return e.parent().is(".ui-effects-wrapper")&&(e.parent().replaceWith(e),(e[0]===i||t.contains(e[0],i))&&t(i).focus()),e},setTransition:function(e,i,s,n){return n=n||{},t.each(i,function(t,i){var a=e.cssUnit(i);a[0]>0&&(n[i]=a[0]*s+a[1])}),n}}),t.fn.extend({effect:function(){function e(e){function s(){t.isFunction(a)&&a.call(n[0]),t.isFunction(e)&&e()}var n=t(this),a=i.complete,r=i.mode;(n.is(":hidden")?"hide"===r:"show"===r)?(n[r](),s()):o.call(n[0],i,s)}var i=s.apply(this,arguments),n=i.mode,a=i.queue,o=t.effects.effect[i.effect];return t.fx.off||!o?n?this[n](i.duration,i.complete):this.each(function(){i.complete&&i.complete.call(this)}):a===!1?this.each(e):this.queue(a||"fx",e)},show:function(t){return function(e){if(n(e))return t.apply(this,arguments);var i=s.apply(this,arguments);return i.mode="show",this.effect.call(this,i)}}(t.fn.show),hide:function(t){return function(e){if(n(e))return t.apply(this,arguments);var i=s.apply(this,arguments);return i.mode="hide",this.effect.call(this,i)}}(t.fn.hide),toggle:function(t){return function(e){if(n(e)||"boolean"==typeof e)return t.apply(this,arguments);var i=s.apply(this,arguments);return i.mode="toggle",this.effect.call(this,i)}}(t.fn.toggle),cssUnit:function(e){var i=this.css(e),s=[];return t.each(["em","px","%","pt"],function(t,e){i.indexOf(e)>0&&(s=[parseFloat(i),e])}),s}})}(),function(){var e={};t.each(["Quad","Cubic","Quart","Quint","Expo"],function(t,i){e[i]=function(e){return Math.pow(e,t+2)}}),t.extend(e,{Sine:function(t){return 1-Math.cos(t*Math.PI/2)},Circ:function(t){return 1-Math.sqrt(1-t*t)},Elastic:function(t){return 0===t||1===t?t:-Math.pow(2,8*(t-1))*Math.sin((80*(t-1)-7.5)*Math.PI/15)},Back:function(t){return t*t*(3*t-2)},Bounce:function(t){for(var e,i=4;((e=Math.pow(2,--i))-1)/11>t;);return 1/Math.pow(4,3-i)-7.5625*Math.pow((3*e-2)/22-t,2)}}),t.each(e,function(e,i){t.easing["easeIn"+e]=i,t.easing["easeOut"+e]=function(t){return 1-i(1-t)},t.easing["easeInOut"+e]=function(t){return.5>t?i(2*t)/2:1-i(-2*t+2)/2}})}()})(jQuery);
;/*})'"*/
;/*})'"*/
/*! eq.js (with polyfills) v1.9.0 (c) 2013-2016 Sam Richard with thanks to the Financial Times, MIT license */
!function(){"getPrototypeOf"in Object||(Object.getPrototypeOf=function(t){if(t!==Object(t))throw new TypeError("Object.getPrototypeOf called on non-object");return t.constructor?t.constructor.prototype:null}),"requestAnimationFrame"in this||!function(t){"use strict";var e=Date.now();t.requestAnimationFrame=function(t){if("function"!=typeof t)throw new TypeError(t+"is not a function");var n=Date.now(),o=16+e-n;return 0>o&&(o=0),e=n,setTimeout(function(){e=Date.now(),t(performance.now())},o)},t.cancelAnimationFrame=function(t){clearTimeout(t)}}(this),function(t){if(!("Event"in t))return!1;if("function"==typeof t.Event)return!0;try{return new Event("click"),!0}catch(e){return!1}}(this)||(this.Event=function(t,e){if(!t)throw new Error("Not enough arguments");var n=document.createEvent("Event"),o=e&&void 0!==e.bubbles?e.bubbles:!1,r=e&&void 0!==e.cancelable?e.cancelable:!1;return n.initEvent(t,o,r),n}),"CustomEvent"in this&&("function"==typeof this.CustomEvent||this.CustomEvent.toString().indexOf("CustomEventConstructor")>-1)||(this.CustomEvent=function(t,e){if(!t)throw Error('TypeError: Failed to construct "CustomEvent": An event name must be provided.');var n;e=e||{bubbles:!1,cancelable:!1,detail:null};try{n=document.createEvent("CustomEvent"),n.initCustomEvent(t,e.bubbles,e.cancelable,e.detail)}catch(o){n=document.createEvent("Event"),n.initEvent(t,e.bubbles,e.cancelable),n.detail=e.detail}return n},CustomEvent.prototype=Event.prototype),"addEventListener"in this||document.attachEvent("onreadystatechange",function(){"complete"===document.readyState&&document.dispatchEvent(new Event("DOMContentLoaded",{bubbles:!0}))}),"getComputedStyle"in this||!function(t){function e(t,n,o){var r,i=t.document&&t.currentStyle[n].match(/([\d\.]+)(%|cm|em|in|mm|pc|pt|)/)||[0,0,""],u=i[1],c=i[2];return o=o?/%|em/.test(c)&&t.parentElement?e(t.parentElement,"fontSize",null):16:o,r="fontSize"==n?o:/width/i.test(n)?t.clientWidth:t.clientHeight,"%"==c?u/100*r:"cm"==c?.3937*u*96:"em"==c?u*o:"in"==c?96*u:"mm"==c?.3937*u*96/10:"pc"==c?12*u*96/72:"pt"==c?96*u/72:u}function n(t,e){var n="border"==e?"Width":"",o=e+"Top"+n,r=e+"Right"+n,i=e+"Bottom"+n,u=e+"Left"+n;t[e]=(t[o]==t[r]&&t[o]==t[i]&&t[o]==t[u]?[t[o]]:t[o]==t[i]&&t[u]==t[r]?[t[o],t[r]]:t[u]==t[r]?[t[o],t[r],t[i]]:[t[o],t[r],t[i],t[u]]).join(" ")}function o(t){var o,r=this,i=t.currentStyle,u=e(t,"fontSize"),c=function(t){return"-"+t.toLowerCase()};for(o in i)if(Array.prototype.push.call(r,"styleFloat"==o?"float":o.replace(/[A-Z]/,c)),"width"==o)r[o]=t.offsetWidth+"px";else if("height"==o)r[o]=t.offsetHeight+"px";else if("styleFloat"==o)r["float"]=i[o];else if(/margin.|padding.|border.+W/.test(o)&&"auto"!=r[o])r[o]=Math.round(e(t,o,u))+"px";else if(/^outline/.test(o))try{r[o]=i[o]}catch(a){r.outlineColor=i.color,r.outlineStyle=r.outlineStyle||"none",r.outlineWidth=r.outlineWidth||"0px",r.outline=[r.outlineColor,r.outlineWidth,r.outlineStyle].join(" ")}else r[o]=i[o];n(r,"margin"),n(r,"padding"),n(r,"border"),r.fontSize=Math.round(u)+"px"}o.prototype={constructor:o,getPropertyPriority:function(){throw new Error("NotSupportedError: DOM Exception 9")},getPropertyValue:function(t){return this[t.replace(/-\w/g,function(t){return t[1].toUpperCase()})]},item:function(t){return this[t]},removeProperty:function(){throw new Error("NoModificationAllowedError: DOM Exception 7")},setProperty:function(){throw new Error("NoModificationAllowedError: DOM Exception 7")},getPropertyCSSValue:function(){throw new Error("NotSupportedError: DOM Exception 9")}},t.getComputedStyle=function(t){return new o(t)}}(this),"forEach"in Array.prototype||(Array.prototype.forEach=function(t){if(void 0===this||null===this)throw new TypeError(this+"is not an object");if(!(t instanceof Function))throw new TypeError(t+" is not a function");for(var e=Object(this),n=arguments[1],o=e instanceof String?e.split(""):e,r=Math.max(Math.min(o.length,9007199254740991),0)||0,i=-1;++i<r;)i in o&&t.call(n,o[i],i,e)})}(),function(t){"use strict";function e(){this.nodes=[],this.eqsLength=0,this.widths=[],this.points=[],this.callback=void 0}function n(t,e,n){t.addEventListener?t.addEventListener(e,n,!1):t.attachEvent("on"+e,function(){return n.call(t,window.event)})}function o(t){return window.getComputedStyle(t,":before").getPropertyValue("content").slice(1,-1)}var r=function(t,e){return[].slice.call(t).concat([].slice.call(e))};e.prototype.query=function(e,n){var r,i=Object.getPrototypeOf(t);n&&"function"==typeof n&&(i.callback=n),e&&"number"!=typeof e?r=e.length:(e=i.nodes,r=i.nodesLength);var u,c=[],a=[];for(u=0;r>u;u++){var l=e[u].getBoundingClientRect(),s=l.width;void 0===s&&(s=l.right-l.left),c.push(s);try{a.push(i.sortObj(e[u].getAttribute("data-eq-pts")))}catch(f){try{a.push(i.sortObj(o(e[u])))}catch(d){a.push([{key:"",value:0}])}}}i.widths=c,i.points=a,e&&"number"!=typeof e?i.nodeWrites(e,c,a):n&&"function"!=typeof n?i.nodeWrites():window.requestAnimationFrame(i.nodeWrites)},e.prototype.nodeWrites=function(e){var n,o,r,i,u,c,a,l=Object.getPrototypeOf(t),s=l.widths,f=l.points;for(e&&"number"!=typeof e?i=e.length:(e=l.nodes,i=l.nodesLength),n=0;i>n;n++){var d=s[n],p=e[n],h=f[n],y=[],v=h.length;if(d<h[0].value)a=null;else if(d>=h[v-1].value){for(r=0;v>r;r++)y.push(h[r].key);a=y.join(" ")}else for(o=0;v>o;o++){var m=h[o],b=h[o+1];if(y.push(m.key),0===o&&d<m.value){a=null;break}if(void 0!==b&&void 0===b.value){y.push(b.key),a=y.join(" ");break}if(d>=m.value&&d<b.value){a=y.join(" ");break}}null===a?p.removeAttribute("data-eq-state"):p.setAttribute("data-eq-state",a),c=new CustomEvent("eqResize",{detail:a,bubbles:!0}),p.dispatchEvent(c)}l.callback&&(u=l.callback,l.callback=void 0,u(e))},e.prototype.refreshNodes=function(){var e=Object.getPrototypeOf(t),n=[];e.nodes=document.querySelectorAll("[data-eq-pts]"),n=o(document.querySelector("html")).split(", "),n.forEach(function(t){""!==t&&(e.nodes=r(e.nodes,document.querySelectorAll(t)))}),e.nodesLength=e.nodes.length},e.prototype.sortObj=function(t){for(var e=[],n=t.split(","),o=0;o<n.length;o++){var r=n[o].split(":");e.push({key:r[0].replace(/^\s+|\s+$/g,""),value:parseFloat(r[1])})}return e.sort(function(t,e){return t.value-e.value})},e.prototype.definePts=function(t,e){return e=e?e:{},e=JSON.stringify(e),e=e.substring(1,e.length-1),e=e.replace(/:/g,": "),e=e.replace(/,/g,", "),e=e.replace(/"/g,""),t.setAttribute("data-eq-pts",e),e},e.prototype.all=function(e){var n=Object.getPrototypeOf(t),o=e?!0:!1;n.refreshNodes(),o?n.query(void 0,e):window.requestAnimationFrame(n.query)},t=t||new e,n(window,"DOMContentLoaded",function(){t.all(!1)}),n(window,"load",function(){t.all(!0)}),n(window,"resize",function(){t.all(!0)}),"undefined"!=typeof module&&module.exports?module.exports=t:"function"==typeof define&&define.amd?define("eqjs",function(){return t}):window.eqjs=t}(window.eqjs);
//# sourceMappingURL=eq.polyfilled.min.js.map

/*!
Waypoints - 4.0.1
Copyright © 2011-2016 Caleb Troughton
Licensed under the MIT license.
https://github.com/imakewebthings/waypoints/blob/master/licenses.txt
*/
!function(){"use strict";function t(o){if(!o)throw new Error("No options passed to Waypoint constructor");if(!o.element)throw new Error("No element option passed to Waypoint constructor");if(!o.handler)throw new Error("No handler option passed to Waypoint constructor");this.key="waypoint-"+e,this.options=t.Adapter.extend({},t.defaults,o),this.element=this.options.element,this.adapter=new t.Adapter(this.element),this.callback=o.handler,this.axis=this.options.horizontal?"horizontal":"vertical",this.enabled=this.options.enabled,this.triggerPoint=null,this.group=t.Group.findOrCreate({name:this.options.group,axis:this.axis}),this.context=t.Context.findOrCreateByElement(this.options.context),t.offsetAliases[this.options.offset]&&(this.options.offset=t.offsetAliases[this.options.offset]),this.group.add(this),this.context.add(this),i[this.key]=this,e+=1}var e=0,i={};t.prototype.queueTrigger=function(t){this.group.queueTrigger(this,t)},t.prototype.trigger=function(t){this.enabled&&this.callback&&this.callback.apply(this,t)},t.prototype.destroy=function(){this.context.remove(this),this.group.remove(this),delete i[this.key]},t.prototype.disable=function(){return this.enabled=!1,this},t.prototype.enable=function(){return this.context.refresh(),this.enabled=!0,this},t.prototype.next=function(){return this.group.next(this)},t.prototype.previous=function(){return this.group.previous(this)},t.invokeAll=function(t){var e=[];for(var o in i)e.push(i[o]);for(var n=0,r=e.length;r>n;n++)e[n][t]()},t.destroyAll=function(){t.invokeAll("destroy")},t.disableAll=function(){t.invokeAll("disable")},t.enableAll=function(){t.Context.refreshAll();for(var e in i)i[e].enabled=!0;return this},t.refreshAll=function(){t.Context.refreshAll()},t.viewportHeight=function(){return window.innerHeight||document.documentElement.clientHeight},t.viewportWidth=function(){return document.documentElement.clientWidth},t.adapters=[],t.defaults={context:window,continuous:!0,enabled:!0,group:"default",horizontal:!1,offset:0},t.offsetAliases={"bottom-in-view":function(){return this.context.innerHeight()-this.adapter.outerHeight()},"right-in-view":function(){return this.context.innerWidth()-this.adapter.outerWidth()}},window.Waypoint=t}(),function(){"use strict";function t(t){window.setTimeout(t,1e3/60)}function e(t){this.element=t,this.Adapter=n.Adapter,this.adapter=new this.Adapter(t),this.key="waypoint-context-"+i,this.didScroll=!1,this.didResize=!1,this.oldScroll={x:this.adapter.scrollLeft(),y:this.adapter.scrollTop()},this.waypoints={vertical:{},horizontal:{}},t.waypointContextKey=this.key,o[t.waypointContextKey]=this,i+=1,n.windowContext||(n.windowContext=!0,n.windowContext=new e(window)),this.createThrottledScrollHandler(),this.createThrottledResizeHandler()}var i=0,o={},n=window.Waypoint,r=window.onload;e.prototype.add=function(t){var e=t.options.horizontal?"horizontal":"vertical";this.waypoints[e][t.key]=t,this.refresh()},e.prototype.checkEmpty=function(){var t=this.Adapter.isEmptyObject(this.waypoints.horizontal),e=this.Adapter.isEmptyObject(this.waypoints.vertical),i=this.element==this.element.window;t&&e&&!i&&(this.adapter.off(".waypoints"),delete o[this.key])},e.prototype.createThrottledResizeHandler=function(){function t(){e.handleResize(),e.didResize=!1}var e=this;this.adapter.on("resize.waypoints",function(){e.didResize||(e.didResize=!0,n.requestAnimationFrame(t))})},e.prototype.createThrottledScrollHandler=function(){function t(){e.handleScroll(),e.didScroll=!1}var e=this;this.adapter.on("scroll.waypoints",function(){(!e.didScroll||n.isTouch)&&(e.didScroll=!0,n.requestAnimationFrame(t))})},e.prototype.handleResize=function(){n.Context.refreshAll()},e.prototype.handleScroll=function(){var t={},e={horizontal:{newScroll:this.adapter.scrollLeft(),oldScroll:this.oldScroll.x,forward:"right",backward:"left"},vertical:{newScroll:this.adapter.scrollTop(),oldScroll:this.oldScroll.y,forward:"down",backward:"up"}};for(var i in e){var o=e[i],n=o.newScroll>o.oldScroll,r=n?o.forward:o.backward;for(var s in this.waypoints[i]){var a=this.waypoints[i][s];if(null!==a.triggerPoint){var l=o.oldScroll<a.triggerPoint,h=o.newScroll>=a.triggerPoint,p=l&&h,u=!l&&!h;(p||u)&&(a.queueTrigger(r),t[a.group.id]=a.group)}}}for(var c in t)t[c].flushTriggers();this.oldScroll={x:e.horizontal.newScroll,y:e.vertical.newScroll}},e.prototype.innerHeight=function(){return this.element==this.element.window?n.viewportHeight():this.adapter.innerHeight()},e.prototype.remove=function(t){delete this.waypoints[t.axis][t.key],this.checkEmpty()},e.prototype.innerWidth=function(){return this.element==this.element.window?n.viewportWidth():this.adapter.innerWidth()},e.prototype.destroy=function(){var t=[];for(var e in this.waypoints)for(var i in this.waypoints[e])t.push(this.waypoints[e][i]);for(var o=0,n=t.length;n>o;o++)t[o].destroy()},e.prototype.refresh=function(){var t,e=this.element==this.element.window,i=e?void 0:this.adapter.offset(),o={};this.handleScroll(),t={horizontal:{contextOffset:e?0:i.left,contextScroll:e?0:this.oldScroll.x,contextDimension:this.innerWidth(),oldScroll:this.oldScroll.x,forward:"right",backward:"left",offsetProp:"left"},vertical:{contextOffset:e?0:i.top,contextScroll:e?0:this.oldScroll.y,contextDimension:this.innerHeight(),oldScroll:this.oldScroll.y,forward:"down",backward:"up",offsetProp:"top"}};for(var r in t){var s=t[r];for(var a in this.waypoints[r]){var l,h,p,u,c,d=this.waypoints[r][a],f=d.options.offset,w=d.triggerPoint,y=0,g=null==w;d.element!==d.element.window&&(y=d.adapter.offset()[s.offsetProp]),"function"==typeof f?f=f.apply(d):"string"==typeof f&&(f=parseFloat(f),d.options.offset.indexOf("%")>-1&&(f=Math.ceil(s.contextDimension*f/100))),l=s.contextScroll-s.contextOffset,d.triggerPoint=Math.floor(y+l-f),h=w<s.oldScroll,p=d.triggerPoint>=s.oldScroll,u=h&&p,c=!h&&!p,!g&&u?(d.queueTrigger(s.backward),o[d.group.id]=d.group):!g&&c?(d.queueTrigger(s.forward),o[d.group.id]=d.group):g&&s.oldScroll>=d.triggerPoint&&(d.queueTrigger(s.forward),o[d.group.id]=d.group)}}return n.requestAnimationFrame(function(){for(var t in o)o[t].flushTriggers()}),this},e.findOrCreateByElement=function(t){return e.findByElement(t)||new e(t)},e.refreshAll=function(){for(var t in o)o[t].refresh()},e.findByElement=function(t){return o[t.waypointContextKey]},window.onload=function(){r&&r(),e.refreshAll()},n.requestAnimationFrame=function(e){var i=window.requestAnimationFrame||window.mozRequestAnimationFrame||window.webkitRequestAnimationFrame||t;i.call(window,e)},n.Context=e}(),function(){"use strict";function t(t,e){return t.triggerPoint-e.triggerPoint}function e(t,e){return e.triggerPoint-t.triggerPoint}function i(t){this.name=t.name,this.axis=t.axis,this.id=this.name+"-"+this.axis,this.waypoints=[],this.clearTriggerQueues(),o[this.axis][this.name]=this}var o={vertical:{},horizontal:{}},n=window.Waypoint;i.prototype.add=function(t){this.waypoints.push(t)},i.prototype.clearTriggerQueues=function(){this.triggerQueues={up:[],down:[],left:[],right:[]}},i.prototype.flushTriggers=function(){for(var i in this.triggerQueues){var o=this.triggerQueues[i],n="up"===i||"left"===i;o.sort(n?e:t);for(var r=0,s=o.length;s>r;r+=1){var a=o[r];(a.options.continuous||r===o.length-1)&&a.trigger([i])}}this.clearTriggerQueues()},i.prototype.next=function(e){this.waypoints.sort(t);var i=n.Adapter.inArray(e,this.waypoints),o=i===this.waypoints.length-1;return o?null:this.waypoints[i+1]},i.prototype.previous=function(e){this.waypoints.sort(t);var i=n.Adapter.inArray(e,this.waypoints);return i?this.waypoints[i-1]:null},i.prototype.queueTrigger=function(t,e){this.triggerQueues[e].push(t)},i.prototype.remove=function(t){var e=n.Adapter.inArray(t,this.waypoints);e>-1&&this.waypoints.splice(e,1)},i.prototype.first=function(){return this.waypoints[0]},i.prototype.last=function(){return this.waypoints[this.waypoints.length-1]},i.findOrCreate=function(t){return o[t.axis][t.name]||new i(t)},n.Group=i}(),function(){"use strict";function t(t){this.$element=e(t)}var e=window.jQuery,i=window.Waypoint;e.each(["innerHeight","innerWidth","off","offset","on","outerHeight","outerWidth","scrollLeft","scrollTop"],function(e,i){t.prototype[i]=function(){var t=Array.prototype.slice.call(arguments);return this.$element[i].apply(this.$element,t)}}),e.each(["extend","inArray","isEmptyObject"],function(i,o){t[o]=e[o]}),i.adapters.push({name:"jquery",Adapter:t}),i.Adapter=t}(),function(){"use strict";function t(t){return function(){var i=[],o=arguments[0];return t.isFunction(arguments[0])&&(o=t.extend({},arguments[1]),o.handler=arguments[0]),this.each(function(){var n=t.extend({},o,{element:this});"string"==typeof n.context&&(n.context=t(this).closest(n.context)[0]),i.push(new e(n))}),i}}var e=window.Waypoint;window.jQuery&&(window.jQuery.fn.waypoint=t(window.jQuery)),window.Zepto&&(window.Zepto.fn.waypoint=t(window.Zepto))}();
;/*})'"*/
;/*})'"*/
/**
@license @nocompile
Copyright (c) 2018 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/
(function () {
  'use strict';

  (function(){if(void 0===window.Reflect||void 0===window.customElements||window.customElements.hasOwnProperty('polyfillWrapFlushCallback'))return;const a=HTMLElement;window.HTMLElement=function(){return Reflect.construct(a,[],this.constructor)},HTMLElement.prototype=a.prototype,HTMLElement.prototype.constructor=HTMLElement,Object.setPrototypeOf(HTMLElement,a);})();

}());

/**
@license @nocompile
Copyright (c) 2018 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/
(function(){/*

 Copyright (c) 2016 The Polymer Project Authors. All rights reserved.
 This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
 The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
 The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
 Code distributed by Google as part of the polymer project is also
 subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/
'use strict';var r,aa="function"==typeof Object.defineProperties?Object.defineProperty:function(a,b,c){a!=Array.prototype&&a!=Object.prototype&&(a[b]=c.value)},fa="undefined"!=typeof window&&window===this?this:"undefined"!=typeof global&&null!=global?global:this;function ha(){ha=function(){};fa.Symbol||(fa.Symbol=ia)}var ia=function(){var a=0;return function(b){return"jscomp_symbol_"+(b||"")+a++}}();
function ja(){ha();var a=fa.Symbol.iterator;a||(a=fa.Symbol.iterator=fa.Symbol("iterator"));"function"!=typeof Array.prototype[a]&&aa(Array.prototype,a,{configurable:!0,writable:!0,value:function(){return ka(this)}});ja=function(){}}function ka(a){var b=0;return la(function(){return b<a.length?{done:!1,value:a[b++]}:{done:!0}})}function la(a){ja();a={next:a};a[fa.Symbol.iterator]=function(){return this};return a}function ma(a){ja();var b=a[Symbol.iterator];return b?b.call(a):ka(a)}
function na(a){for(var b,c=[];!(b=a.next()).done;)c.push(b.value);return c}var oa;if("function"==typeof Object.setPrototypeOf)oa=Object.setPrototypeOf;else{var pa;a:{var qa={Na:!0},ra={};try{ra.__proto__=qa;pa=ra.Na;break a}catch(a){}pa=!1}oa=pa?function(a,b){a.__proto__=b;if(a.__proto__!==b)throw new TypeError(a+" is not extensible");return a}:null}var sa=oa;function ta(){this.f=!1;this.b=null;this.fa=void 0;this.a=1;this.G=0;this.c=null}
function ua(a){if(a.f)throw new TypeError("Generator is already running");a.f=!0}ta.prototype.m=function(a){this.fa=a};function va(a,b){a.c={Qa:b,Ua:!0};a.a=a.G}ta.prototype.return=function(a){this.c={return:a};this.a=this.G};function wa(a,b){a.a=3;return{value:b}}function xa(a){this.a=new ta;this.b=a}function ya(a,b){ua(a.a);var c=a.a.b;if(c)return Ba(a,"return"in c?c["return"]:function(a){return{value:a,done:!0}},b,a.a.return);a.a.return(b);return Ca(a)}
function Ba(a,b,c,d){try{var e=b.call(a.a.b,c);if(!(e instanceof Object))throw new TypeError("Iterator result "+e+" is not an object");if(!e.done)return a.a.f=!1,e;var f=e.value}catch(g){return a.a.b=null,va(a.a,g),Ca(a)}a.a.b=null;d.call(a.a,f);return Ca(a)}function Ca(a){for(;a.a.a;)try{var b=a.b(a.a);if(b)return a.a.f=!1,{value:b.value,done:!1}}catch(c){a.a.fa=void 0,va(a.a,c)}a.a.f=!1;if(a.a.c){b=a.a.c;a.a.c=null;if(b.Ua)throw b.Qa;return{value:b.return,done:!0}}return{value:void 0,done:!0}}
function Da(a){this.next=function(b){ua(a.a);a.a.b?b=Ba(a,a.a.b.next,b,a.a.m):(a.a.m(b),b=Ca(a));return b};this.throw=function(b){ua(a.a);a.a.b?b=Ba(a,a.a.b["throw"],b,a.a.m):(va(a.a,b),b=Ca(a));return b};this.return=function(b){return ya(a,b)};ja();this[Symbol.iterator]=function(){return this}}function Ea(a,b){b=new Da(new xa(b));sa&&sa(b,a.prototype);return b}
(function(){if(!function(){var a=document.createEvent("Event");a.initEvent("foo",!0,!0);a.preventDefault();return a.defaultPrevented}()){var a=Event.prototype.preventDefault;Event.prototype.preventDefault=function(){this.cancelable&&(a.call(this),Object.defineProperty(this,"defaultPrevented",{get:function(){return!0},configurable:!0}))}}var b=/Trident/.test(navigator.userAgent);if(!window.CustomEvent||b&&"function"!==typeof window.CustomEvent)window.CustomEvent=function(a,b){b=b||{};var c=document.createEvent("CustomEvent");
c.initCustomEvent(a,!!b.bubbles,!!b.cancelable,b.detail);return c},window.CustomEvent.prototype=window.Event.prototype;if(!window.Event||b&&"function"!==typeof window.Event){var c=window.Event;window.Event=function(a,b){b=b||{};var c=document.createEvent("Event");c.initEvent(a,!!b.bubbles,!!b.cancelable);return c};if(c)for(var d in c)window.Event[d]=c[d];window.Event.prototype=c.prototype}if(!window.MouseEvent||b&&"function"!==typeof window.MouseEvent){b=window.MouseEvent;window.MouseEvent=function(a,
b){b=b||{};var c=document.createEvent("MouseEvent");c.initMouseEvent(a,!!b.bubbles,!!b.cancelable,b.view||window,b.detail,b.screenX,b.screenY,b.clientX,b.clientY,b.ctrlKey,b.altKey,b.shiftKey,b.metaKey,b.button,b.relatedTarget);return c};if(b)for(d in b)window.MouseEvent[d]=b[d];window.MouseEvent.prototype=b.prototype}Array.from||(Array.from=function(a){return[].slice.call(a)});Object.assign||(Object.assign=function(a,b){for(var c=[].slice.call(arguments,1),d=0,e;d<c.length;d++)if(e=c[d])for(var f=
a,n=e,p=Object.getOwnPropertyNames(n),G=0;G<p.length;G++)e=p[G],f[e]=n[e];return a})})(window.WebComponents);(function(){function a(){}function b(a,b){if(!a.childNodes.length)return[];switch(a.nodeType){case Node.DOCUMENT_NODE:return R.call(a,b);case Node.DOCUMENT_FRAGMENT_NODE:return yb.call(a,b);default:return w.call(a,b)}}var c="undefined"===typeof HTMLTemplateElement,d=!(document.createDocumentFragment().cloneNode()instanceof DocumentFragment),e=!1;/Trident/.test(navigator.userAgent)&&function(){function a(a,b){if(a instanceof DocumentFragment)for(var d;d=a.firstChild;)c.call(this,d,b);else c.call(this,
a,b);return a}e=!0;var b=Node.prototype.cloneNode;Node.prototype.cloneNode=function(a){a=b.call(this,a);this instanceof DocumentFragment&&(a.__proto__=DocumentFragment.prototype);return a};DocumentFragment.prototype.querySelectorAll=HTMLElement.prototype.querySelectorAll;DocumentFragment.prototype.querySelector=HTMLElement.prototype.querySelector;Object.defineProperties(DocumentFragment.prototype,{nodeType:{get:function(){return Node.DOCUMENT_FRAGMENT_NODE},configurable:!0},localName:{get:function(){},
configurable:!0},nodeName:{get:function(){return"#document-fragment"},configurable:!0}});var c=Node.prototype.insertBefore;Node.prototype.insertBefore=a;var d=Node.prototype.appendChild;Node.prototype.appendChild=function(b){b instanceof DocumentFragment?a.call(this,b,null):d.call(this,b);return b};var f=Node.prototype.removeChild,g=Node.prototype.replaceChild;Node.prototype.replaceChild=function(b,c){b instanceof DocumentFragment?(a.call(this,b,c),f.call(this,c)):g.call(this,b,c);return c};Document.prototype.createDocumentFragment=
function(){var a=this.createElement("df");a.__proto__=DocumentFragment.prototype;return a};var h=Document.prototype.importNode;Document.prototype.importNode=function(a,b){b=h.call(this,a,b||!1);a instanceof DocumentFragment&&(b.__proto__=DocumentFragment.prototype);return b}}();var f=Node.prototype.cloneNode,g=Document.prototype.createElement,h=Document.prototype.importNode,k=Node.prototype.removeChild,l=Node.prototype.appendChild,n=Node.prototype.replaceChild,p=DOMParser.prototype.parseFromString,
G=Object.getOwnPropertyDescriptor(window.HTMLElement.prototype,"innerHTML")||{get:function(){return this.innerHTML},set:function(a){this.innerHTML=a}},u=Object.getOwnPropertyDescriptor(window.Node.prototype,"childNodes")||{get:function(){return this.childNodes}},w=Element.prototype.querySelectorAll,R=Document.prototype.querySelectorAll,yb=DocumentFragment.prototype.querySelectorAll,zb=function(){if(!c){var a=document.createElement("template"),b=document.createElement("template");b.content.appendChild(document.createElement("div"));
a.content.appendChild(b);a=a.cloneNode(!0);return 0===a.content.childNodes.length||0===a.content.firstChild.content.childNodes.length||d}}();if(c){var U=document.implementation.createHTMLDocument("template"),Ma=!0,q=document.createElement("style");q.textContent="template{display:none;}";var za=document.head;za.insertBefore(q,za.firstElementChild);a.prototype=Object.create(HTMLElement.prototype);var da=!document.createElement("div").hasOwnProperty("innerHTML");a.R=function(b){if(!b.content&&b.namespaceURI===
document.documentElement.namespaceURI){b.content=U.createDocumentFragment();for(var c;c=b.firstChild;)l.call(b.content,c);if(da)b.__proto__=a.prototype;else if(b.cloneNode=function(b){return a.b(this,b)},Ma)try{m(b),y(b)}catch(Hh){Ma=!1}a.a(b.content)}};var ba={option:["select"],thead:["table"],col:["colgroup","table"],tr:["tbody","table"],th:["tr","tbody","table"],td:["tr","tbody","table"]},m=function(b){Object.defineProperty(b,"innerHTML",{get:function(){return ea(this)},set:function(b){var c=ba[(/<([a-z][^/\0>\x20\t\r\n\f]+)/i.exec(b)||
["",""])[1].toLowerCase()];if(c)for(var d=0;d<c.length;d++)b="<"+c[d]+">"+b+"</"+c[d]+">";U.body.innerHTML=b;for(a.a(U);this.content.firstChild;)k.call(this.content,this.content.firstChild);b=U.body;if(c)for(d=0;d<c.length;d++)b=b.lastChild;for(;b.firstChild;)l.call(this.content,b.firstChild)},configurable:!0})},y=function(a){Object.defineProperty(a,"outerHTML",{get:function(){return"<template>"+this.innerHTML+"</template>"},set:function(a){if(this.parentNode){U.body.innerHTML=a;for(a=this.ownerDocument.createDocumentFragment();U.body.firstChild;)l.call(a,
U.body.firstChild);n.call(this.parentNode,a,this)}else throw Error("Failed to set the 'outerHTML' property on 'Element': This element has no parent node.");},configurable:!0})};m(a.prototype);y(a.prototype);a.a=function(c){c=b(c,"template");for(var d=0,e=c.length,f;d<e&&(f=c[d]);d++)a.R(f)};document.addEventListener("DOMContentLoaded",function(){a.a(document)});Document.prototype.createElement=function(){var b=g.apply(this,arguments);"template"===b.localName&&a.R(b);return b};DOMParser.prototype.parseFromString=
function(){var b=p.apply(this,arguments);a.a(b);return b};Object.defineProperty(HTMLElement.prototype,"innerHTML",{get:function(){return ea(this)},set:function(b){G.set.call(this,b);a.a(this)},configurable:!0,enumerable:!0});var ca=/[&\u00A0"]/g,Ab=/[&\u00A0<>]/g,Na=function(a){switch(a){case "&":return"&amp;";case "<":return"&lt;";case ">":return"&gt;";case '"':return"&quot;";case "\u00a0":return"&nbsp;"}};q=function(a){for(var b={},c=0;c<a.length;c++)b[a[c]]=!0;return b};var Aa=q("area base br col command embed hr img input keygen link meta param source track wbr".split(" ")),
Oa=q("style script xmp iframe noembed noframes plaintext noscript".split(" ")),ea=function(a,b){"template"===a.localName&&(a=a.content);for(var c="",d=b?b(a):u.get.call(a),e=0,f=d.length,g;e<f&&(g=d[e]);e++){a:{var h=g;var k=a;var l=b;switch(h.nodeType){case Node.ELEMENT_NODE:for(var n=h.localName,m="<"+n,p=h.attributes,w=0;k=p[w];w++)m+=" "+k.name+'="'+k.value.replace(ca,Na)+'"';m+=">";h=Aa[n]?m:m+ea(h,l)+"</"+n+">";break a;case Node.TEXT_NODE:h=h.data;h=k&&Oa[k.localName]?h:h.replace(Ab,Na);break a;
case Node.COMMENT_NODE:h="\x3c!--"+h.data+"--\x3e";break a;default:throw window.console.error(h),Error("not implemented");}}c+=h}return c}}if(c||zb){a.b=function(a,b){var c=f.call(a,!1);this.R&&this.R(c);b&&(l.call(c.content,f.call(a.content,!0)),Pa(c.content,a.content));return c};var Pa=function(c,d){if(d.querySelectorAll&&(d=b(d,"template"),0!==d.length)){c=b(c,"template");for(var e=0,f=c.length,g,h;e<f;e++)h=d[e],g=c[e],a&&a.R&&a.R(h),n.call(g.parentNode,tf.call(h,!0),g)}},tf=Node.prototype.cloneNode=
function(b){if(!e&&d&&this instanceof DocumentFragment)if(b)var c=uf.call(this.ownerDocument,this,!0);else return this.ownerDocument.createDocumentFragment();else this.nodeType===Node.ELEMENT_NODE&&"template"===this.localName&&this.namespaceURI==document.documentElement.namespaceURI?c=a.b(this,b):c=f.call(this,b);b&&Pa(c,this);return c},uf=Document.prototype.importNode=function(c,d){d=d||!1;if("template"===c.localName)return a.b(c,d);var e=h.call(this,c,d);if(d){Pa(e,c);c=b(e,'script:not([type]),script[type="application/javascript"],script[type="text/javascript"]');
for(var f,k=0;k<c.length;k++){f=c[k];d=g.call(document,"script");d.textContent=f.textContent;for(var l=f.attributes,m=0,p;m<l.length;m++)p=l[m],d.setAttribute(p.name,p.value);n.call(f.parentNode,d,f)}}return e}}c&&(window.HTMLTemplateElement=a)})();var Fa=setTimeout;function Ga(){}function Ha(a,b){return function(){a.apply(b,arguments)}}function t(a){if(!(this instanceof t))throw new TypeError("Promises must be constructed via new");if("function"!==typeof a)throw new TypeError("not a function");this.J=0;this.wa=!1;this.A=void 0;this.U=[];Ia(a,this)}
function Ja(a,b){for(;3===a.J;)a=a.A;0===a.J?a.U.push(b):(a.wa=!0,Ka(function(){var c=1===a.J?b.Wa:b.Xa;if(null===c)(1===a.J?La:Qa)(b.ra,a.A);else{try{var d=c(a.A)}catch(e){Qa(b.ra,e);return}La(b.ra,d)}}))}function La(a,b){try{if(b===a)throw new TypeError("A promise cannot be resolved with itself.");if(b&&("object"===typeof b||"function"===typeof b)){var c=b.then;if(b instanceof t){a.J=3;a.A=b;Ra(a);return}if("function"===typeof c){Ia(Ha(c,b),a);return}}a.J=1;a.A=b;Ra(a)}catch(d){Qa(a,d)}}
function Qa(a,b){a.J=2;a.A=b;Ra(a)}function Ra(a){2===a.J&&0===a.U.length&&Ka(function(){a.wa||"undefined"!==typeof console&&console&&console.warn("Possible Unhandled Promise Rejection:",a.A)});for(var b=0,c=a.U.length;b<c;b++)Ja(a,a.U[b]);a.U=null}function Sa(a,b,c){this.Wa="function"===typeof a?a:null;this.Xa="function"===typeof b?b:null;this.ra=c}function Ia(a,b){var c=!1;try{a(function(a){c||(c=!0,La(b,a))},function(a){c||(c=!0,Qa(b,a))})}catch(d){c||(c=!0,Qa(b,d))}}
t.prototype["catch"]=function(a){return this.then(null,a)};t.prototype.then=function(a,b){var c=new this.constructor(Ga);Ja(this,new Sa(a,b,c));return c};t.prototype["finally"]=function(a){var b=this.constructor;return this.then(function(c){return b.resolve(a()).then(function(){return c})},function(c){return b.resolve(a()).then(function(){return b.reject(c)})})};
function Ta(a){return new t(function(b,c){function d(a,g){try{if(g&&("object"===typeof g||"function"===typeof g)){var h=g.then;if("function"===typeof h){h.call(g,function(b){d(a,b)},c);return}}e[a]=g;0===--f&&b(e)}catch(n){c(n)}}if(!a||"undefined"===typeof a.length)throw new TypeError("Promise.all accepts an array");var e=Array.prototype.slice.call(a);if(0===e.length)return b([]);for(var f=e.length,g=0;g<e.length;g++)d(g,e[g])})}
function Ua(a){return a&&"object"===typeof a&&a.constructor===t?a:new t(function(b){b(a)})}function Va(a){return new t(function(b,c){c(a)})}function Wa(a){return new t(function(b,c){for(var d=0,e=a.length;d<e;d++)a[d].then(b,c)})}var Ka="function"===typeof setImmediate&&function(a){setImmediate(a)}||function(a){Fa(a,0)};/*

Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/
if(!window.Promise){window.Promise=t;t.prototype.then=t.prototype.then;t.all=Ta;t.race=Wa;t.resolve=Ua;t.reject=Va;var Xa=document.createTextNode(""),Ya=[];(new MutationObserver(function(){for(var a=Ya.length,b=0;b<a;b++)Ya[b]();Ya.splice(0,a)})).observe(Xa,{characterData:!0});Ka=function(a){Ya.push(a);Xa.textContent=0<Xa.textContent.length?"":"a"}};/*
 Copyright (C) 2015 by WebReflection

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in
all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
THE SOFTWARE.

*/
(function(a,b){if(!(b in a)){var c=typeof global===typeof c?window:global,d=0,e=""+Math.random(),f="__\u0001symbol@@"+e,g=a.getOwnPropertyNames,h=a.getOwnPropertyDescriptor,k=a.create,l=a.keys,n=a.freeze||a,p=a.defineProperty,G=a.defineProperties,u=h(a,"getOwnPropertyNames"),w=a.prototype,R=w.hasOwnProperty,yb=w.propertyIsEnumerable,zb=w.toString,U=function(a,b,c){R.call(a,f)||p(a,f,{enumerable:!1,configurable:!1,writable:!1,value:{}});a[f]["@@"+b]=c},Ma=function(a,b){var c=k(a);g(b).forEach(function(a){ba.call(b,
a)&&Aa(c,a,b[a])});return c},q=function(){},za=function(a){return a!=f&&!R.call(ca,a)},da=function(a){return a!=f&&R.call(ca,a)},ba=function(a){var b=""+a;return da(b)?R.call(this,b)&&this[f]["@@"+b]:yb.call(this,a)},m=function(b){p(w,b,{enumerable:!1,configurable:!0,get:q,set:function(a){ea(this,b,{enumerable:!1,configurable:!0,writable:!0,value:a});U(this,b,!0)}});return n(ca[b]=p(a(b),"constructor",Ab))},y=function(a){if(this&&this!==c)throw new TypeError("Symbol is not a constructor");return m("__\u0001symbol:".concat(a||
"",e,++d))},ca=k(null),Ab={value:y},Na=function(a){return ca[a]},Aa=function(a,b,c){var d=""+b;if(da(d)){b=ea;if(c.enumerable){var e=k(c);e.enumerable=!1}else e=c;b(a,d,e);U(a,d,!!c.enumerable)}else p(a,b,c);return a},Oa=function(a){return g(a).filter(da).map(Na)};u.value=Aa;p(a,"defineProperty",u);u.value=Oa;p(a,b,u);u.value=function(a){return g(a).filter(za)};p(a,"getOwnPropertyNames",u);u.value=function(a,b){var c=Oa(b);c.length?l(b).concat(c).forEach(function(c){ba.call(b,c)&&Aa(a,c,b[c])}):G(a,
b);return a};p(a,"defineProperties",u);u.value=ba;p(w,"propertyIsEnumerable",u);u.value=y;p(c,"Symbol",u);u.value=function(a){a="__\u0001symbol:".concat("__\u0001symbol:",a,e);return a in w?ca[a]:m(a)};p(y,"for",u);u.value=function(a){if(za(a))throw new TypeError(a+" is not a symbol");return R.call(ca,a)?a.slice(20,-e.length):void 0};p(y,"keyFor",u);u.value=function(a,b){var c=h(a,b);c&&da(b)&&(c.enumerable=ba.call(a,b));return c};p(a,"getOwnPropertyDescriptor",u);u.value=function(a,b){return 1===
arguments.length?k(a):Ma(a,b)};p(a,"create",u);u.value=function(){var a=zb.call(this);return"[object String]"===a&&da(this)?"[object Symbol]":a};p(w,"toString",u);try{var ea=k(p({},"__\u0001symbol:",{get:function(){return p(this,"__\u0001symbol:",{value:!1})["__\u0001symbol:"]}}))["__\u0001symbol:"]||p}catch(Pa){ea=function(a,b,c){var d=h(w,b);delete w[b];p(a,b,c);p(w,b,d)}}}})(Object,"getOwnPropertySymbols");
(function(a){var b=a.defineProperty,c=a.prototype,d=c.toString,e;"iterator match replace search split hasInstance isConcatSpreadable unscopables species toPrimitive toStringTag".split(" ").forEach(function(f){if(!(f in Symbol))switch(b(Symbol,f,{value:Symbol(f)}),f){case "toStringTag":e=a.getOwnPropertyDescriptor(c,"toString"),e.value=function(){var a=d.call(this),b=this[Symbol.toStringTag];return"undefined"===typeof b?a:"[object "+b+"]"},b(c,"toString",e)}})})(Object,Symbol);
(function(a,b,c){function d(){return this}b[a]||(b[a]=function(){var b=0,c=this,g={next:function(){var a=c.length<=b;return a?{done:a}:{done:a,value:c[b++]}}};g[a]=d;return g});c[a]||(c[a]=function(){var b=String.fromCodePoint,c=this,g=0,h=c.length,k={next:function(){var a=h<=g,d=a?"":b(c.codePointAt(g));g+=d.length;return a?{done:a}:{done:a,value:d}}};k[a]=d;return k})})(Symbol.iterator,Array.prototype,String.prototype);/*

Copyright (c) 2018 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/
Object.keys=function(a){return Object.getOwnPropertyNames(a).filter(function(b){return(b=Object.getOwnPropertyDescriptor(a,b))&&b.enumerable})};var Za=window.Symbol.iterator;String.prototype[Za]&&String.prototype.codePointAt||(String.prototype[Za]=function $a(){var b,c=this;return Ea($a,function(d){1==d.a&&(b=0);if(3!=d.a)return b<c.length?d=wa(d,c[b]):(d.a=0,d=void 0),d;b++;d.a=2})});
Set.prototype[Za]||(Set.prototype[Za]=function ab(){var b,c=this,d;return Ea(ab,function(e){1==e.a&&(b=[],c.forEach(function(c){b.push(c)}),d=0);if(3!=e.a)return d<b.length?e=wa(e,b[d]):(e.a=0,e=void 0),e;d++;e.a=2})});Map.prototype[Za]||(Map.prototype[Za]=function bb(){var b,c=this,d;return Ea(bb,function(e){1==e.a&&(b=[],c.forEach(function(c,d){b.push([d,c])}),d=0);if(3!=e.a)return d<b.length?e=wa(e,b[d]):(e.a=0,e=void 0),e;d++;e.a=2})});/*

 Copyright (c) 2014 The Polymer Project Authors. All rights reserved.
 This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
 The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
 The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
 Code distributed by Google as part of the polymer project is also
 subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/
window.WebComponents=window.WebComponents||{flags:{}};var cb=document.querySelector('script[src*="webcomponents-bundle"]'),db=/wc-(.+)/,v={};if(!v.noOpts){location.search.slice(1).split("&").forEach(function(a){a=a.split("=");var b;a[0]&&(b=a[0].match(db))&&(v[b[1]]=a[1]||!0)});if(cb)for(var eb=0,fb=void 0;fb=cb.attributes[eb];eb++)"src"!==fb.name&&(v[fb.name]=fb.value||!0);if(v.log&&v.log.split){var gb=v.log.split(",");v.log={};gb.forEach(function(a){v.log[a]=!0})}else v.log={}}
window.WebComponents.flags=v;var hb=v.shadydom;hb&&(window.ShadyDOM=window.ShadyDOM||{},window.ShadyDOM.force=hb);var ib=v.register||v.ce;ib&&window.customElements&&(window.customElements.forcePolyfill=ib);/*

Copyright (c) 2016 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/
function jb(){this.za=this.root=null;this.ea=!1;this.N=this.$=this.oa=this.assignedSlot=this.assignedNodes=this.S=null;this.childNodes=this.nextSibling=this.previousSibling=this.lastChild=this.firstChild=this.parentNode=this.V=void 0;this.Ea=this.ua=!1;this.Z={}}jb.prototype.toJSON=function(){return{}};function x(a){a.ma||(a.ma=new jb);return a.ma}function z(a){return a&&a.ma};var A=window.ShadyDOM||{};A.Sa=!(!Element.prototype.attachShadow||!Node.prototype.getRootNode);var kb=Object.getOwnPropertyDescriptor(Node.prototype,"firstChild");A.K=!!(kb&&kb.configurable&&kb.get);A.qa=A.force||!A.Sa;var lb=navigator.userAgent.match("Trident"),mb=navigator.userAgent.match("Edge");void 0===A.Ba&&(A.Ba=A.K&&(lb||mb));function nb(a){return(a=z(a))&&void 0!==a.firstChild}function B(a){return"ShadyRoot"===a.Ja}function ob(a){a=a.getRootNode();if(B(a))return a}
var pb=Element.prototype,qb=pb.matches||pb.matchesSelector||pb.mozMatchesSelector||pb.msMatchesSelector||pb.oMatchesSelector||pb.webkitMatchesSelector;function rb(a,b){if(a&&b)for(var c=Object.getOwnPropertyNames(b),d=0,e=void 0;d<c.length&&(e=c[d]);d++){var f=e,g=a,h=Object.getOwnPropertyDescriptor(b,f);h&&Object.defineProperty(g,f,h)}}function sb(a,b){for(var c=[],d=1;d<arguments.length;++d)c[d-1]=arguments[d];for(d=0;d<c.length;d++)rb(a,c[d]);return a}
function tb(a,b){for(var c in b)a[c]=b[c]}var ub=document.createTextNode(""),vb=0,wb=[];(new MutationObserver(function(){for(;wb.length;)try{wb.shift()()}catch(a){throw ub.textContent=vb++,a;}})).observe(ub,{characterData:!0});function xb(a){wb.push(a);ub.textContent=vb++}var Bb=!!document.contains;function Cb(a,b){for(;b;){if(b==a)return!0;b=b.parentNode}return!1}
function Db(a){for(var b=a.length-1;0<=b;b--){var c=a[b],d=c.getAttribute("id")||c.getAttribute("name");d&&"length"!==d&&isNaN(d)&&(a[d]=c)}a.item=function(b){return a[b]};a.namedItem=function(b){if("length"!==b&&isNaN(b)&&a[b])return a[b];for(var c=ma(a),d=c.next();!d.done;d=c.next())if(d=d.value,(d.getAttribute("id")||d.getAttribute("name"))==b)return d;return null};return a};var Eb=[],Fb;function Gb(a){Fb||(Fb=!0,xb(Hb));Eb.push(a)}function Hb(){Fb=!1;for(var a=!!Eb.length;Eb.length;)Eb.shift()();return a}Hb.list=Eb;function Ib(){this.a=!1;this.addedNodes=[];this.removedNodes=[];this.ca=new Set}function Jb(a){a.a||(a.a=!0,xb(function(){a.flush()}))}Ib.prototype.flush=function(){if(this.a){this.a=!1;var a=this.takeRecords();a.length&&this.ca.forEach(function(b){b(a)})}};Ib.prototype.takeRecords=function(){if(this.addedNodes.length||this.removedNodes.length){var a=[{addedNodes:this.addedNodes,removedNodes:this.removedNodes}];this.addedNodes=[];this.removedNodes=[];return a}return[]};
function Kb(a,b){var c=x(a);c.S||(c.S=new Ib);c.S.ca.add(b);var d=c.S;return{Ia:b,P:d,Ka:a,takeRecords:function(){return d.takeRecords()}}}function Lb(a){var b=a&&a.P;b&&(b.ca.delete(a.Ia),b.ca.size||(x(a.Ka).S=null))}
function Mb(a,b){var c=b.getRootNode();return a.map(function(a){var b=c===a.target.getRootNode();if(b&&a.addedNodes){if(b=Array.from(a.addedNodes).filter(function(a){return c===a.getRootNode()}),b.length)return a=Object.create(a),Object.defineProperty(a,"addedNodes",{value:b,configurable:!0}),a}else if(b)return a}).filter(function(a){return a})};var Nb=Element.prototype.insertBefore,Ob=Element.prototype.replaceChild,Pb=Element.prototype.removeChild,Qb=Element.prototype.setAttribute,Rb=Element.prototype.removeAttribute,Sb=Element.prototype.cloneNode,Tb=Document.prototype.importNode,Ub=Element.prototype.addEventListener,Vb=Element.prototype.removeEventListener,Wb=Window.prototype.addEventListener,Xb=Window.prototype.removeEventListener,Yb=Element.prototype.dispatchEvent,Zb=Node.prototype.contains||HTMLElement.prototype.contains,$b=Document.prototype.getElementById,
ac=Element.prototype.querySelector,bc=DocumentFragment.prototype.querySelector,cc=Document.prototype.querySelector,dc=Element.prototype.querySelectorAll,ec=DocumentFragment.prototype.querySelectorAll,fc=Document.prototype.querySelectorAll,C={};C.appendChild=Element.prototype.appendChild;C.insertBefore=Nb;C.replaceChild=Ob;C.removeChild=Pb;C.setAttribute=Qb;C.removeAttribute=Rb;C.cloneNode=Sb;C.importNode=Tb;C.addEventListener=Ub;C.removeEventListener=Vb;C.gb=Wb;C.hb=Xb;C.dispatchEvent=Yb;
C.contains=Zb;C.getElementById=$b;C.pb=ac;C.tb=bc;C.nb=cc;C.querySelector=function(a){switch(this.nodeType){case Node.ELEMENT_NODE:return ac.call(this,a);case Node.DOCUMENT_NODE:return cc.call(this,a);default:return bc.call(this,a)}};C.qb=dc;C.ub=ec;C.ob=fc;C.querySelectorAll=function(a){switch(this.nodeType){case Node.ELEMENT_NODE:return dc.call(this,a);case Node.DOCUMENT_NODE:return fc.call(this,a);default:return ec.call(this,a)}};var gc=/[&\u00A0"]/g,hc=/[&\u00A0<>]/g;function ic(a){switch(a){case "&":return"&amp;";case "<":return"&lt;";case ">":return"&gt;";case '"':return"&quot;";case "\u00a0":return"&nbsp;"}}function jc(a){for(var b={},c=0;c<a.length;c++)b[a[c]]=!0;return b}var kc=jc("area base br col command embed hr img input keygen link meta param source track wbr".split(" ")),lc=jc("style script xmp iframe noembed noframes plaintext noscript".split(" "));
function mc(a,b){"template"===a.localName&&(a=a.content);for(var c="",d=b?b(a):a.childNodes,e=0,f=d.length,g=void 0;e<f&&(g=d[e]);e++){a:{var h=g;var k=a,l=b;switch(h.nodeType){case Node.ELEMENT_NODE:k=h.localName;for(var n="<"+k,p=h.attributes,G=0,u;u=p[G];G++)n+=" "+u.name+'="'+u.value.replace(gc,ic)+'"';n+=">";h=kc[k]?n:n+mc(h,l)+"</"+k+">";break a;case Node.TEXT_NODE:h=h.data;h=k&&lc[k.localName]?h:h.replace(hc,ic);break a;case Node.COMMENT_NODE:h="\x3c!--"+h.data+"--\x3e";break a;default:throw window.console.error(h),
Error("not implemented");}}c+=h}return c};var D=document.createTreeWalker(document,NodeFilter.SHOW_ALL,null,!1),E=document.createTreeWalker(document,NodeFilter.SHOW_ELEMENT,null,!1);function nc(a){var b=[];D.currentNode=a;for(a=D.firstChild();a;)b.push(a),a=D.nextSibling();return b}
var F={parentNode:function(a){D.currentNode=a;return D.parentNode()},firstChild:function(a){D.currentNode=a;return D.firstChild()},lastChild:function(a){D.currentNode=a;return D.lastChild()},previousSibling:function(a){D.currentNode=a;return D.previousSibling()},nextSibling:function(a){D.currentNode=a;return D.nextSibling()}};F.childNodes=nc;F.parentElement=function(a){E.currentNode=a;return E.parentNode()};F.firstElementChild=function(a){E.currentNode=a;return E.firstChild()};
F.lastElementChild=function(a){E.currentNode=a;return E.lastChild()};F.previousElementSibling=function(a){E.currentNode=a;return E.previousSibling()};F.nextElementSibling=function(a){E.currentNode=a;return E.nextSibling()};F.children=function(a){var b=[];E.currentNode=a;for(a=E.firstChild();a;)b.push(a),a=E.nextSibling();return Db(b)};F.innerHTML=function(a){return mc(a,function(a){return nc(a)})};
F.textContent=function(a){switch(a.nodeType){case Node.ELEMENT_NODE:case Node.DOCUMENT_FRAGMENT_NODE:a=document.createTreeWalker(a,NodeFilter.SHOW_TEXT,null,!1);for(var b="",c;c=a.nextNode();)b+=c.nodeValue;return b;default:return a.nodeValue}};var oc=A.K,pc=[Node.prototype,Element.prototype,HTMLElement.prototype];function H(a){var b;a:{for(b=0;b<pc.length;b++){var c=pc[b];if(c.hasOwnProperty(a)){b=c;break a}}b=void 0}if(!b)throw Error("Could not find descriptor for "+a);return Object.getOwnPropertyDescriptor(b,a)}
var I=oc?{parentNode:H("parentNode"),firstChild:H("firstChild"),lastChild:H("lastChild"),previousSibling:H("previousSibling"),nextSibling:H("nextSibling"),childNodes:H("childNodes"),parentElement:H("parentElement"),previousElementSibling:H("previousElementSibling"),nextElementSibling:H("nextElementSibling"),innerHTML:H("innerHTML"),textContent:H("textContent"),firstElementChild:H("firstElementChild"),lastElementChild:H("lastElementChild"),children:H("children")}:{},qc=oc?{firstElementChild:Object.getOwnPropertyDescriptor(DocumentFragment.prototype,
"firstElementChild"),lastElementChild:Object.getOwnPropertyDescriptor(DocumentFragment.prototype,"lastElementChild"),children:Object.getOwnPropertyDescriptor(DocumentFragment.prototype,"children")}:{},rc=oc?{firstElementChild:Object.getOwnPropertyDescriptor(Document.prototype,"firstElementChild"),lastElementChild:Object.getOwnPropertyDescriptor(Document.prototype,"lastElementChild"),children:Object.getOwnPropertyDescriptor(Document.prototype,"children")}:{},sc={ya:I,sb:qc,mb:rc,parentNode:function(a){return I.parentNode.get.call(a)},
firstChild:function(a){return I.firstChild.get.call(a)},lastChild:function(a){return I.lastChild.get.call(a)},previousSibling:function(a){return I.previousSibling.get.call(a)},nextSibling:function(a){return I.nextSibling.get.call(a)},childNodes:function(a){return Array.prototype.slice.call(I.childNodes.get.call(a))},parentElement:function(a){return I.parentElement.get.call(a)},previousElementSibling:function(a){return I.previousElementSibling.get.call(a)},nextElementSibling:function(a){return I.nextElementSibling.get.call(a)},
innerHTML:function(a){return I.innerHTML.get.call(a)},textContent:function(a){return I.textContent.get.call(a)},children:function(a){switch(a.nodeType){case Node.DOCUMENT_FRAGMENT_NODE:return qc.children.get.call(a);case Node.DOCUMENT_NODE:return rc.children.get.call(a);default:return I.children.get.call(a)}},firstElementChild:function(a){switch(a.nodeType){case Node.DOCUMENT_FRAGMENT_NODE:return qc.firstElementChild.get.call(a);case Node.DOCUMENT_NODE:return rc.firstElementChild.get.call(a);default:return I.firstElementChild.get.call(a)}},
lastElementChild:function(a){switch(a.nodeType){case Node.DOCUMENT_FRAGMENT_NODE:return qc.lastElementChild.get.call(a);case Node.DOCUMENT_NODE:return rc.lastElementChild.get.call(a);default:return I.lastElementChild.get.call(a)}}};var J=A.Ba?sc:F;function tc(a){for(;a.firstChild;)a.removeChild(a.firstChild)}
var uc=A.K,vc=document.implementation.createHTMLDocument("inert"),wc=Object.getOwnPropertyDescriptor(Node.prototype,"isConnected"),xc=wc&&wc.get,yc=Object.getOwnPropertyDescriptor(Document.prototype,"activeElement"),zc={parentElement:{get:function(){var a=z(this);(a=a&&a.parentNode)&&a.nodeType!==Node.ELEMENT_NODE&&(a=null);return void 0!==a?a:J.parentElement(this)},configurable:!0},parentNode:{get:function(){var a=z(this);a=a&&a.parentNode;return void 0!==a?a:J.parentNode(this)},configurable:!0},
nextSibling:{get:function(){var a=z(this);a=a&&a.nextSibling;return void 0!==a?a:J.nextSibling(this)},configurable:!0},previousSibling:{get:function(){var a=z(this);a=a&&a.previousSibling;return void 0!==a?a:J.previousSibling(this)},configurable:!0},nextElementSibling:{get:function(){var a=z(this);if(a&&void 0!==a.nextSibling){for(a=this.nextSibling;a&&a.nodeType!==Node.ELEMENT_NODE;)a=a.nextSibling;return a}return J.nextElementSibling(this)},configurable:!0},previousElementSibling:{get:function(){var a=
z(this);if(a&&void 0!==a.previousSibling){for(a=this.previousSibling;a&&a.nodeType!==Node.ELEMENT_NODE;)a=a.previousSibling;return a}return J.previousElementSibling(this)},configurable:!0}},Ac={className:{get:function(){return this.getAttribute("class")||""},set:function(a){this.setAttribute("class",a)},configurable:!0}},Bc={childNodes:{get:function(){if(nb(this)){var a=z(this);if(!a.childNodes){a.childNodes=[];for(var b=this.firstChild;b;b=b.nextSibling)a.childNodes.push(b)}var c=a.childNodes}else c=
J.childNodes(this);c.item=function(a){return c[a]};return c},configurable:!0},childElementCount:{get:function(){return this.children.length},configurable:!0},firstChild:{get:function(){var a=z(this);a=a&&a.firstChild;return void 0!==a?a:J.firstChild(this)},configurable:!0},lastChild:{get:function(){var a=z(this);a=a&&a.lastChild;return void 0!==a?a:J.lastChild(this)},configurable:!0},textContent:{get:function(){if(nb(this)){for(var a=[],b=0,c=this.childNodes,d;d=c[b];b++)d.nodeType!==Node.COMMENT_NODE&&
a.push(d.textContent);return a.join("")}return J.textContent(this)},set:function(a){if("undefined"===typeof a||null===a)a="";switch(this.nodeType){case Node.ELEMENT_NODE:case Node.DOCUMENT_FRAGMENT_NODE:if(!nb(this)&&uc){var b=this.firstChild;(b!=this.lastChild||b&&b.nodeType!=Node.TEXT_NODE)&&tc(this);sc.ya.textContent.set.call(this,a)}else tc(this),(0<a.length||this.nodeType===Node.ELEMENT_NODE)&&this.appendChild(document.createTextNode(a));break;default:this.nodeValue=a}},configurable:!0},firstElementChild:{get:function(){var a=
z(this);if(a&&void 0!==a.firstChild){for(a=this.firstChild;a&&a.nodeType!==Node.ELEMENT_NODE;)a=a.nextSibling;return a}return J.firstElementChild(this)},configurable:!0},lastElementChild:{get:function(){var a=z(this);if(a&&void 0!==a.lastChild){for(a=this.lastChild;a&&a.nodeType!==Node.ELEMENT_NODE;)a=a.previousSibling;return a}return J.lastElementChild(this)},configurable:!0},children:{get:function(){return nb(this)?Db(Array.prototype.filter.call(this.childNodes,function(a){return a.nodeType===Node.ELEMENT_NODE})):
J.children(this)},configurable:!0},innerHTML:{get:function(){return nb(this)?mc("template"===this.localName?this.content:this):J.innerHTML(this)},set:function(a){var b="template"===this.localName?this.content:this;tc(b);var c=this.localName||"div";c=this.namespaceURI&&this.namespaceURI!==vc.namespaceURI?vc.createElementNS(this.namespaceURI,c):vc.createElement(c);uc?sc.ya.innerHTML.set.call(c,a):c.innerHTML=a;for(a="template"===this.localName?c.content:c;a.firstChild;)b.appendChild(a.firstChild)},
configurable:!0}},Cc={shadowRoot:{get:function(){var a=z(this);return a&&a.za||null},configurable:!0}},Dc={activeElement:{get:function(){var a=yc&&yc.get?yc.get.call(document):A.K?void 0:document.activeElement;if(a&&a.nodeType){var b=!!B(this);if(this===document||b&&this.host!==a&&C.contains.call(this.host,a)){for(b=ob(a);b&&b!==this;)a=b.host,b=ob(a);a=this===document?b?null:a:b===this?a:null}else a=null}else a=null;return a},set:function(){},configurable:!0}};
function K(a,b,c){for(var d in b){var e=Object.getOwnPropertyDescriptor(a,d);e&&e.configurable||!e&&c?Object.defineProperty(a,d,b[d]):c&&console.warn("Could not define",d,"on",a)}}function Ec(a){K(a,zc);K(a,Ac);K(a,Bc);K(a,Dc)}
function Fc(){var a=Gc.prototype;a.__proto__=DocumentFragment.prototype;K(a,zc,!0);K(a,Bc,!0);K(a,Dc,!0);Object.defineProperties(a,{nodeType:{value:Node.DOCUMENT_FRAGMENT_NODE,configurable:!0},nodeName:{value:"#document-fragment",configurable:!0},nodeValue:{value:null,configurable:!0}});["localName","namespaceURI","prefix"].forEach(function(b){Object.defineProperty(a,b,{value:void 0,configurable:!0})});["ownerDocument","baseURI","isConnected"].forEach(function(b){Object.defineProperty(a,b,{get:function(){return this.host[b]},
configurable:!0})})}var Hc=A.K?function(){}:function(a){var b=x(a);b.ua||(b.ua=!0,K(a,zc,!0),K(a,Ac,!0))},Ic=A.K?function(){}:function(a){x(a).Ea||(K(a,Bc,!0),K(a,Cc,!0))};var Jc=J.childNodes;function Kc(a,b,c){Ic(b);var d=x(b);void 0!==d.firstChild&&(d.childNodes=null);if(a.nodeType===Node.DOCUMENT_FRAGMENT_NODE){d=a.childNodes;for(var e=0;e<d.length;e++)Lc(d[e],b,c);a=x(a);b=void 0!==a.firstChild?null:void 0;a.firstChild=a.lastChild=b;a.childNodes=b}else Lc(a,b,c)}
function Lc(a,b,c){Hc(a);c=c||null;var d=x(a),e=x(b),f=c?x(c):null;d.previousSibling=c?f.previousSibling:b.lastChild;if(f=z(d.previousSibling))f.nextSibling=a;if(f=z(d.nextSibling=c))f.previousSibling=a;d.parentNode=b;c?c===e.firstChild&&(e.firstChild=a):(e.lastChild=a,e.firstChild||(e.firstChild=a));e.childNodes=null}
function Mc(a,b){var c=x(a);b=x(b);a===b.firstChild&&(b.firstChild=c.nextSibling);a===b.lastChild&&(b.lastChild=c.previousSibling);a=c.previousSibling;var d=c.nextSibling;a&&(x(a).nextSibling=d);d&&(x(d).previousSibling=a);c.parentNode=c.previousSibling=c.nextSibling=void 0;void 0!==b.childNodes&&(b.childNodes=null)}
function Nc(a){var b=x(a);if(void 0===b.firstChild){b.childNodes=null;var c=Jc(a);b.firstChild=c[0]||null;b.lastChild=c[c.length-1]||null;Ic(a);for(b=0;b<c.length;b++){var d=c[b],e=x(d);e.parentNode=a;e.nextSibling=c[b+1]||null;e.previousSibling=c[b-1]||null;Hc(d)}}};var Oc=J.parentNode;
function Pc(a,b,c){if(b===a)throw Error("Failed to execute 'appendChild' on 'Node': The new child element contains the parent.");if(c){var d=z(c);d=d&&d.parentNode;if(void 0!==d&&d!==a||void 0===d&&Oc(c)!==a)throw Error("Failed to execute 'insertBefore' on 'Node': The node before which the new node is to be inserted is not a child of this node.");}if(c===b)return b;var e=[],f=Qc,g=ob(a),h=g?g.host.localName:"";if(b.parentNode){var k=Rc(b);Sc(b.parentNode,b,!!g||!(b.getRootNode()instanceof ShadowRoot));
f=function(a,b){Tc()&&(Uc(a,k),Qc(a,b))}}d=!0;var l=!Vc(b,h);!g||b.__noInsertionPoint&&!l||Wc(b,function(a){"slot"===a.localName&&e.push(a);l&&f(a,h)});e.length&&Xc(g,e);("slot"===a.localName||e.length)&&g&&Yc(g);nb(a)&&(Kc(b,a,c),g=z(a),Zc(a)?(Yc(g.root),d=!1):g.root&&(d=!1));d?(d=B(a)?a.host:a,c?(c=$c(c),C.insertBefore.call(d,b,c)):C.appendChild.call(d,b)):b.ownerDocument!==a.ownerDocument&&a.ownerDocument.adoptNode(b);ad(a,b);return b}
function Sc(a,b,c){c=void 0===c?!1:c;if(b.parentNode!==a)throw Error("The node to be removed is not a child of this node: "+b);var d=ob(b),e=z(a);if(nb(a)&&(Mc(b,a),Zc(a))){Yc(e.root);var f=!0}if(Tc()&&!c&&d){var g=Rc(b);Wc(b,function(a){Uc(a,g)})}bd(b);if(d){var h=a&&"slot"===a.localName;h&&(f=!0);((c=cd(d,b))||h)&&Yc(d)}f||(f=B(a)?a.host:a,(!e.root&&"slot"!==b.localName||f===Oc(b))&&C.removeChild.call(f,b));ad(a,null,b);return b}
function bd(a){var b=z(a);if(b&&void 0!==b.V){b=a.childNodes;for(var c=0,d=b.length,e=void 0;c<d&&(e=b[c]);c++)bd(e)}if(a=z(a))a.V=void 0}function $c(a){var b=a;a&&"slot"===a.localName&&(b=(b=(b=z(a))&&b.N)&&b.length?b[0]:$c(a.nextSibling));return b}function Zc(a){return(a=(a=z(a))&&a.root)&&dd(a)}
function ed(a,b){if("slot"===b)a=a.parentNode,Zc(a)&&Yc(z(a).root);else if("slot"===a.localName&&"name"===b&&(b=ob(a))){if(b.o){fd(b);var c=a.Ha,d=gd(a);if(d!==c){c=b.w[c];var e=c.indexOf(a);0<=e&&c.splice(e,1);c=b.w[d]||(b.w[d]=[]);c.push(a);1<c.length&&(b.w[d]=hd(c))}}Yc(b)}}function ad(a,b,c){if(a=(a=z(a))&&a.S)b&&a.addedNodes.push(b),c&&a.removedNodes.push(c),Jb(a)}
function id(a){if(a&&a.nodeType){var b=x(a),c=b.V;void 0===c&&(B(a)?(c=a,b.V=c):(c=(c=a.parentNode)?id(c):a,C.contains.call(document.documentElement,a)&&(b.V=c)));return c}}function jd(a,b,c){var d=[];kd(a.childNodes,b,c,d);return d}function kd(a,b,c,d){for(var e=0,f=a.length,g=void 0;e<f&&(g=a[e]);e++){var h;if(h=g.nodeType===Node.ELEMENT_NODE){h=g;var k=b,l=c,n=d,p=k(h);p&&n.push(h);l&&l(p)?h=p:(kd(h.childNodes,k,l,n),h=void 0)}if(h)break}}var ld=null;
function Tc(){ld||(ld=window.ShadyCSS&&window.ShadyCSS.ScopingShim);return ld||null}function md(a,b,c){var d=Tc();d&&"class"===b?d.setElementClass(a,c):(C.setAttribute.call(a,b,c),ed(a,b))}function nd(a,b){if(a.ownerDocument!==document||"template"===a.localName)return C.importNode.call(document,a,b);var c=C.importNode.call(document,a,!1);if(b){a=a.childNodes;b=0;for(var d;b<a.length;b++)d=nd(a[b],!0),c.appendChild(d)}return c}function Qc(a,b){var c=Tc();c&&c.scopeNode(a,b)}
function Uc(a,b){var c=Tc();c&&c.unscopeNode(a,b)}function Vc(a,b){var c=Tc();if(!c)return!0;if(a.nodeType===Node.DOCUMENT_FRAGMENT_NODE){c=!0;for(var d=0;c&&d<a.childNodes.length;d++)c=c&&Vc(a.childNodes[d],b);return c}return a.nodeType!==Node.ELEMENT_NODE?!0:c.currentScopeForNode(a)===b}function Rc(a){if(a.nodeType!==Node.ELEMENT_NODE)return"";var b=Tc();return b?b.currentScopeForNode(a):""}
function Wc(a,b){if(a){a.nodeType===Node.ELEMENT_NODE&&b(a);for(var c=0,d;c<a.childNodes.length;c++)d=a.childNodes[c],d.nodeType===Node.ELEMENT_NODE&&Wc(d,b)}};var od="__eventWrappers"+Date.now(),pd=function(){var a=Object.getOwnPropertyDescriptor(Event.prototype,"composed");return a?function(b){return a.get.call(b)}:null}(),qd={blur:!0,focus:!0,focusin:!0,focusout:!0,click:!0,dblclick:!0,mousedown:!0,mouseenter:!0,mouseleave:!0,mousemove:!0,mouseout:!0,mouseover:!0,mouseup:!0,wheel:!0,beforeinput:!0,input:!0,keydown:!0,keyup:!0,compositionstart:!0,compositionupdate:!0,compositionend:!0,touchstart:!0,touchend:!0,touchmove:!0,touchcancel:!0,pointerover:!0,
pointerenter:!0,pointerdown:!0,pointermove:!0,pointerup:!0,pointercancel:!0,pointerout:!0,pointerleave:!0,gotpointercapture:!0,lostpointercapture:!0,dragstart:!0,drag:!0,dragenter:!0,dragleave:!0,dragover:!0,drop:!0,dragend:!0,DOMActivate:!0,DOMFocusIn:!0,DOMFocusOut:!0,keypress:!0},rd={DOMAttrModified:!0,DOMAttributeNameChanged:!0,DOMCharacterDataModified:!0,DOMElementNameChanged:!0,DOMNodeInserted:!0,DOMNodeInsertedIntoDocument:!0,DOMNodeRemoved:!0,DOMNodeRemovedFromDocument:!0,DOMSubtreeModified:!0};
function sd(a,b){var c=[],d=a;for(a=a===window?window:a.getRootNode();d;)c.push(d),d=d.assignedSlot?d.assignedSlot:d.nodeType===Node.DOCUMENT_FRAGMENT_NODE&&d.host&&(b||d!==a)?d.host:d.parentNode;c[c.length-1]===document&&c.push(window);return c}function td(a,b){if(!B)return a;a=sd(a,!0);for(var c=0,d,e=void 0,f,g=void 0;c<b.length;c++)if(d=b[c],f=d===window?window:d.getRootNode(),f!==e&&(g=a.indexOf(f),e=f),!B(f)||-1<g)return d}
var ud={get composed(){void 0===this.Y&&(pd?this.Y="focusin"===this.type||"focusout"===this.type||pd(this):!1!==this.isTrusted&&(this.Y=qd[this.type]));return this.Y||!1},composedPath:function(){this.ta||(this.ta=sd(this.__target,this.composed));return this.ta},get target(){return td(this.currentTarget||this.__previousCurrentTarget,this.composedPath())},get relatedTarget(){if(!this.la)return null;this.va||(this.va=sd(this.la,!0));return td(this.currentTarget||this.__previousCurrentTarget,this.va)},
stopPropagation:function(){Event.prototype.stopPropagation.call(this);this.ka=!0},stopImmediatePropagation:function(){Event.prototype.stopImmediatePropagation.call(this);this.ka=this.Da=!0}};function vd(a){function b(b,d){b=new a(b,d);b.Y=d&&!!d.composed;return b}tb(b,a);b.prototype=a.prototype;return b}var wd={focus:!0,blur:!0};function xd(a){return a.__target!==a.target||a.la!==a.relatedTarget}
function yd(a,b,c){if(c=b.__handlers&&b.__handlers[a.type]&&b.__handlers[a.type][c])for(var d=0,e;(e=c[d])&&(!xd(a)||a.target!==a.relatedTarget)&&(e.call(b,a),!a.Da);d++);}
function zd(a){var b=a.composedPath();Object.defineProperty(a,"currentTarget",{get:function(){return d},configurable:!0});for(var c=b.length-1;0<=c;c--){var d=b[c];yd(a,d,"capture");if(a.ka)return}Object.defineProperty(a,"eventPhase",{get:function(){return Event.AT_TARGET}});var e;for(c=0;c<b.length;c++){d=b[c];var f=z(d);f=f&&f.root;if(0===c||f&&f===e)if(yd(a,d,"bubble"),d!==window&&(e=d.getRootNode()),a.ka)break}}
function Ad(a,b,c,d,e,f){for(var g=0;g<a.length;g++){var h=a[g],k=h.type,l=h.capture,n=h.once,p=h.passive;if(b===h.node&&c===k&&d===l&&e===n&&f===p)return g}return-1}
function Bd(a,b,c){if(b){var d=typeof b;if("function"===d||"object"===d)if("object"!==d||b.handleEvent&&"function"===typeof b.handleEvent){var e=this instanceof Window?C.gb:C.addEventListener;if(rd[a])return e.call(this,a,b,c);if(c&&"object"===typeof c){var f=!!c.capture;var g=!!c.once;var h=!!c.passive}else f=!!c,h=g=!1;var k=c&&c.na||this,l=b[od];if(l){if(-1<Ad(l,k,a,f,g,h))return}else b[od]=[];l=function(e){g&&this.removeEventListener(a,b,c);e.__target||Cd(e);if(k!==this){var f=Object.getOwnPropertyDescriptor(e,
"currentTarget");Object.defineProperty(e,"currentTarget",{get:function(){return k},configurable:!0})}e.__previousCurrentTarget=e.currentTarget;if(!B(k)||-1!=e.composedPath().indexOf(k))if(e.composed||-1<e.composedPath().indexOf(k))if(xd(e)&&e.target===e.relatedTarget)e.eventPhase===Event.BUBBLING_PHASE&&e.stopImmediatePropagation();else if(e.eventPhase===Event.CAPTURING_PHASE||e.bubbles||e.target===k||k instanceof Window){var h="function"===d?b.call(k,e):b.handleEvent&&b.handleEvent(e);k!==this&&
(f?(Object.defineProperty(e,"currentTarget",f),f=null):delete e.currentTarget);return h}};b[od].push({node:k,type:a,capture:f,once:g,passive:h,ib:l});wd[a]?(this.__handlers=this.__handlers||{},this.__handlers[a]=this.__handlers[a]||{capture:[],bubble:[]},this.__handlers[a][f?"capture":"bubble"].push(l)):e.call(this,a,l,c)}}}
function Dd(a,b,c){if(b){var d=this instanceof Window?C.hb:C.removeEventListener;if(rd[a])return d.call(this,a,b,c);if(c&&"object"===typeof c){var e=!!c.capture;var f=!!c.once;var g=!!c.passive}else e=!!c,g=f=!1;var h=c&&c.na||this,k=void 0;var l=null;try{l=b[od]}catch(n){}l&&(f=Ad(l,h,a,e,f,g),-1<f&&(k=l.splice(f,1)[0].ib,l.length||(b[od]=void 0)));d.call(this,a,k||b,c);k&&wd[a]&&this.__handlers&&this.__handlers[a]&&(a=this.__handlers[a][e?"capture":"bubble"],k=a.indexOf(k),-1<k&&a.splice(k,1))}}
function Ed(){for(var a in wd)window.addEventListener(a,function(a){a.__target||(Cd(a),zd(a))},!0)}function Cd(a){a.__target=a.target;a.la=a.relatedTarget;if(A.K){var b=Object.getPrototypeOf(a);if(!b.hasOwnProperty("__patchProto")){var c=Object.create(b);c.jb=b;rb(c,ud);b.__patchProto=c}a.__proto__=b.__patchProto}else rb(a,ud)}var Fd=vd(window.Event),Gd=vd(window.CustomEvent),Hd=vd(window.MouseEvent);
function Id(){window.Event=Fd;window.CustomEvent=Gd;window.MouseEvent=Hd;Ed();if(!pd&&Object.getOwnPropertyDescriptor(Event.prototype,"isTrusted")){var a=function(){var a=new MouseEvent("click",{bubbles:!0,cancelable:!0,composed:!0});this.dispatchEvent(a)};Element.prototype.click?Element.prototype.click=a:HTMLElement.prototype.click&&(HTMLElement.prototype.click=a)}};function Jd(a,b){return{index:a,W:[],ba:b}}
function Kd(a,b,c,d){var e=0,f=0,g=0,h=0,k=Math.min(b-e,d-f);if(0==e&&0==f)a:{for(g=0;g<k;g++)if(a[g]!==c[g])break a;g=k}if(b==a.length&&d==c.length){h=a.length;for(var l=c.length,n=0;n<k-g&&Ld(a[--h],c[--l]);)n++;h=n}e+=g;f+=g;b-=h;d-=h;if(0==b-e&&0==d-f)return[];if(e==b){for(b=Jd(e,0);f<d;)b.W.push(c[f++]);return[b]}if(f==d)return[Jd(e,b-e)];k=e;g=f;d=d-g+1;h=b-k+1;b=Array(d);for(l=0;l<d;l++)b[l]=Array(h),b[l][0]=l;for(l=0;l<h;l++)b[0][l]=l;for(l=1;l<d;l++)for(n=1;n<h;n++)if(a[k+n-1]===c[g+l-1])b[l][n]=
b[l-1][n-1];else{var p=b[l-1][n]+1,G=b[l][n-1]+1;b[l][n]=p<G?p:G}k=b.length-1;g=b[0].length-1;d=b[k][g];for(a=[];0<k||0<g;)0==k?(a.push(2),g--):0==g?(a.push(3),k--):(h=b[k-1][g-1],l=b[k-1][g],n=b[k][g-1],p=l<n?l<h?l:h:n<h?n:h,p==h?(h==d?a.push(0):(a.push(1),d=h),k--,g--):p==l?(a.push(3),k--,d=l):(a.push(2),g--,d=n));a.reverse();b=void 0;k=[];for(g=0;g<a.length;g++)switch(a[g]){case 0:b&&(k.push(b),b=void 0);e++;f++;break;case 1:b||(b=Jd(e,0));b.ba++;e++;b.W.push(c[f]);f++;break;case 2:b||(b=Jd(e,
0));b.ba++;e++;break;case 3:b||(b=Jd(e,0)),b.W.push(c[f]),f++}b&&k.push(b);return k}function Ld(a,b){return a===b};var Md=J.parentNode,Nd=J.childNodes,Od={},Pd=A.deferConnectionCallbacks&&"loading"===document.readyState,Qd;function Rd(a){var b=[];do b.unshift(a);while(a=a.parentNode);return b}
function Gc(a,b,c){if(a!==Od)throw new TypeError("Illegal constructor");this.Ja="ShadyRoot";this.host=b;this.c=c&&c.mode;Nc(b);a=x(b);a.root=this;a.za="closed"!==this.c?this:null;a=x(this);a.firstChild=a.lastChild=a.parentNode=a.nextSibling=a.previousSibling=null;a.childNodes=[];this.b=this.aa=!1;this.a=this.w=this.o=null;Yc(this)}function Yc(a){a.aa||(a.aa=!0,Gb(function(){return Sd(a)}))}
function Sd(a){for(var b;a;){a.aa&&(b=a);a:{var c=a;a=c.host.getRootNode();if(B(a))for(var d=c.host.childNodes,e=0;e<d.length;e++)if(c=d[e],"slot"==c.localName)break a;a=void 0}}b&&b._renderRoot()}
Gc.prototype._renderRoot=function(){var a=Pd;Pd=!0;this.aa=!1;if(this.o){fd(this);for(var b=0,c;b<this.o.length;b++){c=this.o[b];var d=z(c),e=d.assignedNodes;d.assignedNodes=[];d.N=[];if(d.oa=e)for(d=0;d<e.length;d++){var f=z(e[d]);f.$=f.assignedSlot;f.assignedSlot===c&&(f.assignedSlot=null)}}for(b=this.host.firstChild;b;b=b.nextSibling)Td(this,b);for(b=0;b<this.o.length;b++){c=this.o[b];e=z(c);if(!e.assignedNodes.length)for(d=c.firstChild;d;d=d.nextSibling)Td(this,d,c);(d=(d=z(c.parentNode))&&d.root)&&
dd(d)&&d._renderRoot();Ud(this,e.N,e.assignedNodes);if(d=e.oa){for(f=0;f<d.length;f++)z(d[f]).$=null;e.oa=null;d.length>e.assignedNodes.length&&(e.ea=!0)}e.ea&&(e.ea=!1,Vd(this,c))}c=this.o;b=[];for(e=0;e<c.length;e++)d=c[e].parentNode,(f=z(d))&&f.root||!(0>b.indexOf(d))||b.push(d);for(c=0;c<b.length;c++){f=b[c];e=f===this?this.host:f;d=[];f=f.childNodes;for(var g=0;g<f.length;g++){var h=f[g];if("slot"==h.localName){h=z(h).N;for(var k=0;k<h.length;k++)d.push(h[k])}else d.push(h)}f=Nd(e);g=Kd(d,d.length,
f,f.length);k=h=0;for(var l=void 0;h<g.length&&(l=g[h]);h++){for(var n=0,p=void 0;n<l.W.length&&(p=l.W[n]);n++)Md(p)===e&&C.removeChild.call(e,p),f.splice(l.index+k,1);k-=l.ba}k=0;for(l=void 0;k<g.length&&(l=g[k]);k++)for(h=f[l.index],n=l.index;n<l.index+l.ba;n++)p=d[n],C.insertBefore.call(e,p,h),f.splice(n,0,p)}}if(!this.b)for(b=this.host.childNodes,c=0,e=b.length;c<e;c++)d=b[c],f=z(d),Md(d)!==this.host||"slot"!==d.localName&&f.assignedSlot||C.removeChild.call(this.host,d);this.b=!0;Pd=a;Qd&&Qd()};
function Td(a,b,c){var d=x(b),e=d.$;d.$=null;c||(c=(a=a.w[b.slot||"__catchall"])&&a[0]);c?(x(c).assignedNodes.push(b),d.assignedSlot=c):d.assignedSlot=void 0;e!==d.assignedSlot&&d.assignedSlot&&(x(d.assignedSlot).ea=!0)}function Ud(a,b,c){for(var d=0,e=void 0;d<c.length&&(e=c[d]);d++)if("slot"==e.localName){var f=z(e).assignedNodes;f&&f.length&&Ud(a,b,f)}else b.push(c[d])}function Vd(a,b){C.dispatchEvent.call(b,new Event("slotchange"));b=z(b);b.assignedSlot&&Vd(a,b.assignedSlot)}
function Xc(a,b){a.a=a.a||[];a.o=a.o||[];a.w=a.w||{};a.a.push.apply(a.a,b instanceof Array?b:na(ma(b)))}function fd(a){if(a.a&&a.a.length){for(var b=a.a,c,d=0;d<b.length;d++){var e=b[d];Nc(e);Nc(e.parentNode);var f=gd(e);a.w[f]?(c=c||{},c[f]=!0,a.w[f].push(e)):a.w[f]=[e];a.o.push(e)}if(c)for(var g in c)a.w[g]=hd(a.w[g]);a.a=[]}}function gd(a){var b=a.name||a.getAttribute("name")||"__catchall";return a.Ha=b}
function hd(a){return a.sort(function(a,c){a=Rd(a);for(var b=Rd(c),e=0;e<a.length;e++){c=a[e];var f=b[e];if(c!==f)return a=Array.from(c.parentNode.childNodes),a.indexOf(c)-a.indexOf(f)}})}function cd(a,b){if(a.o){fd(a);var c=a.w,d;for(d in c)for(var e=c[d],f=0;f<e.length;f++){var g=e[f];if(Cb(b,g)){e.splice(f,1);var h=a.o.indexOf(g);0<=h&&a.o.splice(h,1);f--;g=z(g);if(h=g.N)for(var k=0;k<h.length;k++){var l=h[k],n=Md(l);n&&C.removeChild.call(n,l)}g.N=[];g.assignedNodes=[];h=!0}}return h}}
function dd(a){fd(a);return!(!a.o||!a.o.length)}
if(window.customElements&&A.qa){var Wd=new Map;Qd=function(){var a=Array.from(Wd);Wd.clear();a=ma(a);for(var b=a.next();!b.done;b=a.next()){b=ma(b.value);var c=b.next().value;b.next().value?c.Fa():c.Ga()}};Pd&&document.addEventListener("readystatechange",function(){Pd=!1;Qd()},{once:!0});var Xd=function(a,b,c){var d=0,e="__isConnected"+d++;if(b||c)a.prototype.connectedCallback=a.prototype.Fa=function(){Pd?Wd.set(this,!0):this[e]||(this[e]=!0,b&&b.call(this))},a.prototype.disconnectedCallback=a.prototype.Ga=
function(){Pd?this.isConnected||Wd.set(this,!1):this[e]&&(this[e]=!1,c&&c.call(this))};return a},define=window.customElements.define;Object.defineProperty(window.CustomElementRegistry.prototype,"define",{value:function(a,b){var c=b.prototype.connectedCallback,d=b.prototype.disconnectedCallback;define.call(window.customElements,a,Xd(b,c,d));b.prototype.connectedCallback=c;b.prototype.disconnectedCallback=d}})};function Yd(a){var b=a.getRootNode();B(b)&&Sd(b);return(a=z(a))&&a.assignedSlot||null}
var Zd={addEventListener:Bd.bind(window),removeEventListener:Dd.bind(window)},$d={addEventListener:Bd,removeEventListener:Dd,appendChild:function(a){return Pc(this,a)},insertBefore:function(a,b){return Pc(this,a,b)},removeChild:function(a){return Sc(this,a)},replaceChild:function(a,b){Pc(this,a,b);Sc(this,b);return a},cloneNode:function(a){if("template"==this.localName)var b=C.cloneNode.call(this,a);else if(b=C.cloneNode.call(this,!1),a&&b.nodeType!==Node.ATTRIBUTE_NODE){a=this.childNodes;for(var c=
0,d;c<a.length;c++)d=a[c].cloneNode(!0),b.appendChild(d)}return b},getRootNode:function(){return id(this)},contains:function(a){return Cb(this,a)},dispatchEvent:function(a){Hb();return C.dispatchEvent.call(this,a)}};
Object.defineProperties($d,{isConnected:{get:function(){if(xc&&xc.call(this))return!0;if(this.nodeType==Node.DOCUMENT_FRAGMENT_NODE)return!1;var a=this.ownerDocument;if(Bb){if(C.contains.call(a,this))return!0}else if(a.documentElement&&C.contains.call(a.documentElement,this))return!0;for(a=this;a&&!(a instanceof Document);)a=a.parentNode||(B(a)?a.host:void 0);return!!(a&&a instanceof Document)},configurable:!0}});
var ae={get assignedSlot(){return Yd(this)}},be={querySelector:function(a){return jd(this,function(b){return qb.call(b,a)},function(a){return!!a})[0]||null},querySelectorAll:function(a,b){if(b){b=Array.prototype.slice.call(C.querySelectorAll.call(this,a));var c=this.getRootNode();return b.filter(function(a){return a.getRootNode()==c})}return jd(this,function(b){return qb.call(b,a)})}},ce={assignedNodes:function(a){if("slot"===this.localName){var b=this.getRootNode();B(b)&&Sd(b);return(b=z(this))?
(a&&a.flatten?b.N:b.assignedNodes)||[]:[]}}},de=sb({setAttribute:function(a,b){md(this,a,b)},removeAttribute:function(a){C.removeAttribute.call(this,a);ed(this,a)},attachShadow:function(a){if(!this)throw"Must provide a host.";if(!a)throw"Not enough arguments.";return new Gc(Od,this,a)},get slot(){return this.getAttribute("slot")},set slot(a){md(this,"slot",a)},get assignedSlot(){return Yd(this)}},be,ce);Object.defineProperties(de,Cc);
var ee=sb({importNode:function(a,b){return nd(a,b)},getElementById:function(a){return jd(this,function(b){return b.id==a},function(a){return!!a})[0]||null}},be);Object.defineProperties(ee,{_activeElement:Dc.activeElement});
for(var fe=HTMLElement.prototype.blur,ge={blur:function(){var a=z(this);(a=(a=a&&a.root)&&a.activeElement)?a.blur():fe.call(this)}},he={},ie=ma(Object.getOwnPropertyNames(Document.prototype)),je=ie.next();!je.done;he={H:he.H},je=ie.next())he.H=je.value,"on"===he.H.substring(0,2)&&Object.defineProperty(ge,he.H,{set:function(a){return function(b){var c=x(this),d=a.H.substring(2);c.Z[a.H]&&this.removeEventListener(d,c.Z[a.H]);this.addEventListener(d,b,{});c.Z[a.H]=b}}(he),get:function(a){return function(){var b=
z(this);return b&&b.Z[a.H]}}(he),configurable:!0});var ke={addEventListener:function(a,b,c){"object"!==typeof c&&(c={capture:!!c});c.na=this;this.host.addEventListener(a,b,c)},removeEventListener:function(a,b,c){"object"!==typeof c&&(c={capture:!!c});c.na=this;this.host.removeEventListener(a,b,c)},getElementById:function(a){return jd(this,function(b){return b.id==a},function(a){return!!a})[0]||null}};
function L(a,b){for(var c=Object.getOwnPropertyNames(b),d=0;d<c.length;d++){var e=c[d],f=Object.getOwnPropertyDescriptor(b,e);f.value?a[e]=f.value:Object.defineProperty(a,e,f)}};if(A.qa){var ShadyDOM={inUse:A.qa,patch:function(a){Ic(a);Hc(a);return a},isShadyRoot:B,enqueue:Gb,flush:Hb,settings:A,filterMutations:Mb,observeChildren:Kb,unobserveChildren:Lb,nativeMethods:C,nativeTree:J,deferConnectionCallbacks:A.deferConnectionCallbacks,handlesDynamicScoping:!0};window.ShadyDOM=ShadyDOM;Id();var le=window.customElements&&window.customElements.nativeHTMLElement||HTMLElement;L(Gc.prototype,ke);L(window.Node.prototype,$d);L(window.Window.prototype,Zd);L(window.Text.prototype,ae);
L(window.DocumentFragment.prototype,be);L(window.Element.prototype,de);L(window.Document.prototype,ee);window.HTMLSlotElement&&L(window.HTMLSlotElement.prototype,ce);L(le.prototype,ge);A.K&&(Ec(window.Node.prototype),Ec(window.Text.prototype),Ec(window.DocumentFragment.prototype),Ec(window.Element.prototype),Ec(le.prototype),Ec(window.Document.prototype),window.HTMLSlotElement&&Ec(window.HTMLSlotElement.prototype));Fc();window.ShadowRoot=Gc};var me=new Set("annotation-xml color-profile font-face font-face-src font-face-uri font-face-format font-face-name missing-glyph".split(" "));function ne(a){var b=me.has(a);a=/^[a-z][.0-9_a-z]*-[\-.0-9_a-z]*$/.test(a);return!b&&a}function M(a){var b=a.isConnected;if(void 0!==b)return b;for(;a&&!(a.__CE_isImportDocument||a instanceof Document);)a=a.parentNode||(window.ShadowRoot&&a instanceof ShadowRoot?a.host:void 0);return!(!a||!(a.__CE_isImportDocument||a instanceof Document))}
function oe(a,b){for(;b&&b!==a&&!b.nextSibling;)b=b.parentNode;return b&&b!==a?b.nextSibling:null}
function pe(a,b,c){c=void 0===c?new Set:c;for(var d=a;d;){if(d.nodeType===Node.ELEMENT_NODE){var e=d;b(e);var f=e.localName;if("link"===f&&"import"===e.getAttribute("rel")){d=e.import;if(d instanceof Node&&!c.has(d))for(c.add(d),d=d.firstChild;d;d=d.nextSibling)pe(d,b,c);d=oe(a,e);continue}else if("template"===f){d=oe(a,e);continue}if(e=e.__CE_shadowRoot)for(e=e.firstChild;e;e=e.nextSibling)pe(e,b,c)}d=d.firstChild?d.firstChild:oe(a,d)}}function N(a,b,c){a[b]=c};function qe(){this.a=new Map;this.m=new Map;this.f=[];this.c=!1}function re(a,b,c){a.a.set(b,c);a.m.set(c.constructor,c)}function se(a,b){a.c=!0;a.f.push(b)}function te(a,b){a.c&&pe(b,function(b){return a.b(b)})}qe.prototype.b=function(a){if(this.c&&!a.__CE_patched){a.__CE_patched=!0;for(var b=0;b<this.f.length;b++)this.f[b](a)}};function O(a,b){var c=[];pe(b,function(a){return c.push(a)});for(b=0;b<c.length;b++){var d=c[b];1===d.__CE_state?a.connectedCallback(d):ue(a,d)}}
function P(a,b){var c=[];pe(b,function(a){return c.push(a)});for(b=0;b<c.length;b++){var d=c[b];1===d.__CE_state&&a.disconnectedCallback(d)}}
function Q(a,b,c){c=void 0===c?{}:c;var d=c.fb||new Set,e=c.ia||function(b){return ue(a,b)},f=[];pe(b,function(b){if("link"===b.localName&&"import"===b.getAttribute("rel")){var c=b.import;c instanceof Node&&(c.__CE_isImportDocument=!0,c.__CE_hasRegistry=!0);c&&"complete"===c.readyState?c.__CE_documentLoadHandled=!0:b.addEventListener("load",function(){var c=b.import;if(!c.__CE_documentLoadHandled){c.__CE_documentLoadHandled=!0;var f=new Set(d);f.delete(c);Q(a,c,{fb:f,ia:e})}})}else f.push(b)},d);
if(a.c)for(b=0;b<f.length;b++)a.b(f[b]);for(b=0;b<f.length;b++)e(f[b])}
function ue(a,b){if(void 0===b.__CE_state){var c=b.ownerDocument;if(c.defaultView||c.__CE_isImportDocument&&c.__CE_hasRegistry)if(c=a.a.get(b.localName)){c.constructionStack.push(b);var d=c.constructor;try{try{if(new d!==b)throw Error("The custom element constructor did not produce the element being upgraded.");}finally{c.constructionStack.pop()}}catch(g){throw b.__CE_state=2,g;}b.__CE_state=1;b.__CE_definition=c;if(c.attributeChangedCallback)for(c=c.observedAttributes,d=0;d<c.length;d++){var e=c[d],
f=b.getAttribute(e);null!==f&&a.attributeChangedCallback(b,e,null,f,null)}M(b)&&a.connectedCallback(b)}}}qe.prototype.connectedCallback=function(a){var b=a.__CE_definition;b.connectedCallback&&b.connectedCallback.call(a)};qe.prototype.disconnectedCallback=function(a){var b=a.__CE_definition;b.disconnectedCallback&&b.disconnectedCallback.call(a)};
qe.prototype.attributeChangedCallback=function(a,b,c,d,e){var f=a.__CE_definition;f.attributeChangedCallback&&-1<f.observedAttributes.indexOf(b)&&f.attributeChangedCallback.call(a,b,c,d,e)};function ve(a){var b=document;this.b=a;this.a=b;this.P=void 0;Q(this.b,this.a);"loading"===this.a.readyState&&(this.P=new MutationObserver(this.c.bind(this)),this.P.observe(this.a,{childList:!0,subtree:!0}))}function we(a){a.P&&a.P.disconnect()}ve.prototype.c=function(a){var b=this.a.readyState;"interactive"!==b&&"complete"!==b||we(this);for(b=0;b<a.length;b++)for(var c=a[b].addedNodes,d=0;d<c.length;d++)Q(this.b,c[d])};function xe(){var a=this;this.a=this.A=void 0;this.b=new Promise(function(b){a.a=b;a.A&&b(a.A)})}xe.prototype.resolve=function(a){if(this.A)throw Error("Already resolved.");this.A=a;this.a&&this.a(a)};function S(a){this.c=!1;this.a=a;this.G=new Map;this.f=function(a){return a()};this.b=!1;this.m=[];this.fa=new ve(a)}r=S.prototype;
r.define=function(a,b){var c=this;if(!(b instanceof Function))throw new TypeError("Custom element constructors must be functions.");if(!ne(a))throw new SyntaxError("The element name '"+a+"' is not valid.");if(this.a.a.get(a))throw Error("A custom element with name '"+a+"' has already been defined.");if(this.c)throw Error("A custom element is already being defined.");this.c=!0;try{var d=function(a){var b=e[a];if(void 0!==b&&!(b instanceof Function))throw Error("The '"+a+"' callback must be a function.");
return b},e=b.prototype;if(!(e instanceof Object))throw new TypeError("The custom element constructor's prototype is not an object.");var f=d("connectedCallback");var g=d("disconnectedCallback");var h=d("adoptedCallback");var k=d("attributeChangedCallback");var l=b.observedAttributes||[]}catch(n){return}finally{this.c=!1}b={localName:a,constructor:b,connectedCallback:f,disconnectedCallback:g,adoptedCallback:h,attributeChangedCallback:k,observedAttributes:l,constructionStack:[]};re(this.a,a,b);this.m.push(b);
this.b||(this.b=!0,this.f(function(){return ye(c)}))};r.ia=function(a){Q(this.a,a)};function ye(a){if(!1!==a.b){a.b=!1;for(var b=a.m,c=[],d=new Map,e=0;e<b.length;e++)d.set(b[e].localName,[]);Q(a.a,document,{ia:function(b){if(void 0===b.__CE_state){var e=b.localName,f=d.get(e);f?f.push(b):a.a.a.get(e)&&c.push(b)}}});for(e=0;e<c.length;e++)ue(a.a,c[e]);for(;0<b.length;){var f=b.shift();e=f.localName;f=d.get(f.localName);for(var g=0;g<f.length;g++)ue(a.a,f[g]);(e=a.G.get(e))&&e.resolve(void 0)}}}
r.get=function(a){if(a=this.a.a.get(a))return a.constructor};r.Ca=function(a){if(!ne(a))return Promise.reject(new SyntaxError("'"+a+"' is not a valid custom element name."));var b=this.G.get(a);if(b)return b.b;b=new xe;this.G.set(a,b);this.a.a.get(a)&&!this.m.some(function(b){return b.localName===a})&&b.resolve(void 0);return b.b};r.Ya=function(a){we(this.fa);var b=this.f;this.f=function(c){return a(function(){return b(c)})}};window.CustomElementRegistry=S;S.prototype.define=S.prototype.define;
S.prototype.upgrade=S.prototype.ia;S.prototype.get=S.prototype.get;S.prototype.whenDefined=S.prototype.Ca;S.prototype.polyfillWrapFlushCallback=S.prototype.Ya;var ze=window.Document.prototype.createElement,Ae=window.Document.prototype.createElementNS,Be=window.Document.prototype.importNode,Ce=window.Document.prototype.prepend,De=window.Document.prototype.append,Ee=window.DocumentFragment.prototype.prepend,Fe=window.DocumentFragment.prototype.append,Ge=window.Node.prototype.cloneNode,He=window.Node.prototype.appendChild,Ie=window.Node.prototype.insertBefore,Je=window.Node.prototype.removeChild,Ke=window.Node.prototype.replaceChild,Le=Object.getOwnPropertyDescriptor(window.Node.prototype,
"textContent"),Me=window.Element.prototype.attachShadow,Ne=Object.getOwnPropertyDescriptor(window.Element.prototype,"innerHTML"),Oe=window.Element.prototype.getAttribute,Pe=window.Element.prototype.setAttribute,Qe=window.Element.prototype.removeAttribute,Re=window.Element.prototype.getAttributeNS,Se=window.Element.prototype.setAttributeNS,Te=window.Element.prototype.removeAttributeNS,Ue=window.Element.prototype.insertAdjacentElement,Ve=window.Element.prototype.insertAdjacentHTML,We=window.Element.prototype.prepend,
Xe=window.Element.prototype.append,Ye=window.Element.prototype.before,Ze=window.Element.prototype.after,$e=window.Element.prototype.replaceWith,af=window.Element.prototype.remove,bf=window.HTMLElement,cf=Object.getOwnPropertyDescriptor(window.HTMLElement.prototype,"innerHTML"),df=window.HTMLElement.prototype.insertAdjacentElement,ef=window.HTMLElement.prototype.insertAdjacentHTML;var ff=new function(){};function gf(){var a=hf;window.HTMLElement=function(){function b(){var b=this.constructor,d=a.m.get(b);if(!d)throw Error("The custom element being constructed was not registered with `customElements`.");var e=d.constructionStack;if(0===e.length)return e=ze.call(document,d.localName),Object.setPrototypeOf(e,b.prototype),e.__CE_state=1,e.__CE_definition=d,a.b(e),e;d=e.length-1;var f=e[d];if(f===ff)throw Error("The HTMLElement constructor was either called reentrantly for this constructor or called multiple times.");
e[d]=ff;Object.setPrototypeOf(f,b.prototype);a.b(f);return f}b.prototype=bf.prototype;Object.defineProperty(b.prototype,"constructor",{writable:!0,configurable:!0,enumerable:!1,value:b});return b}()};function jf(a,b,c){function d(b){return function(c){for(var d=[],e=0;e<arguments.length;++e)d[e]=arguments[e];e=[];for(var f=[],l=0;l<d.length;l++){var n=d[l];n instanceof Element&&M(n)&&f.push(n);if(n instanceof DocumentFragment)for(n=n.firstChild;n;n=n.nextSibling)e.push(n);else e.push(n)}b.apply(this,d);for(d=0;d<f.length;d++)P(a,f[d]);if(M(this))for(d=0;d<e.length;d++)f=e[d],f instanceof Element&&O(a,f)}}void 0!==c.ha&&(b.prepend=d(c.ha));void 0!==c.append&&(b.append=d(c.append))};function kf(){var a=hf;N(Document.prototype,"createElement",function(b){if(this.__CE_hasRegistry){var c=a.a.get(b);if(c)return new c.constructor}b=ze.call(this,b);a.b(b);return b});N(Document.prototype,"importNode",function(b,c){b=Be.call(this,b,c);this.__CE_hasRegistry?Q(a,b):te(a,b);return b});N(Document.prototype,"createElementNS",function(b,c){if(this.__CE_hasRegistry&&(null===b||"http://www.w3.org/1999/xhtml"===b)){var d=a.a.get(c);if(d)return new d.constructor}b=Ae.call(this,b,c);a.b(b);return b});
jf(a,Document.prototype,{ha:Ce,append:De})};function lf(){function a(a,d){Object.defineProperty(a,"textContent",{enumerable:d.enumerable,configurable:!0,get:d.get,set:function(a){if(this.nodeType===Node.TEXT_NODE)d.set.call(this,a);else{var c=void 0;if(this.firstChild){var e=this.childNodes,h=e.length;if(0<h&&M(this)){c=Array(h);for(var k=0;k<h;k++)c[k]=e[k]}}d.set.call(this,a);if(c)for(a=0;a<c.length;a++)P(b,c[a])}}})}var b=hf;N(Node.prototype,"insertBefore",function(a,d){if(a instanceof DocumentFragment){var c=Array.prototype.slice.apply(a.childNodes);
a=Ie.call(this,a,d);if(M(this))for(d=0;d<c.length;d++)O(b,c[d]);return a}c=M(a);d=Ie.call(this,a,d);c&&P(b,a);M(this)&&O(b,a);return d});N(Node.prototype,"appendChild",function(a){if(a instanceof DocumentFragment){var c=Array.prototype.slice.apply(a.childNodes);a=He.call(this,a);if(M(this))for(var e=0;e<c.length;e++)O(b,c[e]);return a}c=M(a);e=He.call(this,a);c&&P(b,a);M(this)&&O(b,a);return e});N(Node.prototype,"cloneNode",function(a){a=Ge.call(this,a);this.ownerDocument.__CE_hasRegistry?Q(b,a):
te(b,a);return a});N(Node.prototype,"removeChild",function(a){var c=M(a),e=Je.call(this,a);c&&P(b,a);return e});N(Node.prototype,"replaceChild",function(a,d){if(a instanceof DocumentFragment){var c=Array.prototype.slice.apply(a.childNodes);a=Ke.call(this,a,d);if(M(this))for(P(b,d),d=0;d<c.length;d++)O(b,c[d]);return a}c=M(a);var f=Ke.call(this,a,d),g=M(this);g&&P(b,d);c&&P(b,a);g&&O(b,a);return f});Le&&Le.get?a(Node.prototype,Le):se(b,function(b){a(b,{enumerable:!0,configurable:!0,get:function(){for(var a=
[],b=0;b<this.childNodes.length;b++)a.push(this.childNodes[b].textContent);return a.join("")},set:function(a){for(;this.firstChild;)Je.call(this,this.firstChild);He.call(this,document.createTextNode(a))}})})};function mf(a){function b(b){return function(c){for(var d=[],e=0;e<arguments.length;++e)d[e]=arguments[e];e=[];for(var h=[],k=0;k<d.length;k++){var l=d[k];l instanceof Element&&M(l)&&h.push(l);if(l instanceof DocumentFragment)for(l=l.firstChild;l;l=l.nextSibling)e.push(l);else e.push(l)}b.apply(this,d);for(d=0;d<h.length;d++)P(a,h[d]);if(M(this))for(d=0;d<e.length;d++)h=e[d],h instanceof Element&&O(a,h)}}var c=Element.prototype;void 0!==Ye&&(c.before=b(Ye));void 0!==Ye&&(c.after=b(Ze));void 0!==$e&&
N(c,"replaceWith",function(b){for(var c=[],d=0;d<arguments.length;++d)c[d]=arguments[d];d=[];for(var g=[],h=0;h<c.length;h++){var k=c[h];k instanceof Element&&M(k)&&g.push(k);if(k instanceof DocumentFragment)for(k=k.firstChild;k;k=k.nextSibling)d.push(k);else d.push(k)}h=M(this);$e.apply(this,c);for(c=0;c<g.length;c++)P(a,g[c]);if(h)for(P(a,this),c=0;c<d.length;c++)g=d[c],g instanceof Element&&O(a,g)});void 0!==af&&N(c,"remove",function(){var b=M(this);af.call(this);b&&P(a,this)})};function nf(){function a(a,b){Object.defineProperty(a,"innerHTML",{enumerable:b.enumerable,configurable:!0,get:b.get,set:function(a){var c=this,e=void 0;M(this)&&(e=[],pe(this,function(a){a!==c&&e.push(a)}));b.set.call(this,a);if(e)for(var f=0;f<e.length;f++){var g=e[f];1===g.__CE_state&&d.disconnectedCallback(g)}this.ownerDocument.__CE_hasRegistry?Q(d,this):te(d,this);return a}})}function b(a,b){N(a,"insertAdjacentElement",function(a,c){var e=M(c);a=b.call(this,a,c);e&&P(d,c);M(a)&&O(d,c);return a})}
function c(a,b){function c(a,b){for(var c=[];a!==b;a=a.nextSibling)c.push(a);for(b=0;b<c.length;b++)Q(d,c[b])}N(a,"insertAdjacentHTML",function(a,d){a=a.toLowerCase();if("beforebegin"===a){var e=this.previousSibling;b.call(this,a,d);c(e||this.parentNode.firstChild,this)}else if("afterbegin"===a)e=this.firstChild,b.call(this,a,d),c(this.firstChild,e);else if("beforeend"===a)e=this.lastChild,b.call(this,a,d),c(e||this.firstChild,null);else if("afterend"===a)e=this.nextSibling,b.call(this,a,d),c(this.nextSibling,
e);else throw new SyntaxError("The value provided ("+String(a)+") is not one of 'beforebegin', 'afterbegin', 'beforeend', or 'afterend'.");})}var d=hf;Me&&N(Element.prototype,"attachShadow",function(a){return this.__CE_shadowRoot=a=Me.call(this,a)});Ne&&Ne.get?a(Element.prototype,Ne):cf&&cf.get?a(HTMLElement.prototype,cf):se(d,function(b){a(b,{enumerable:!0,configurable:!0,get:function(){return Ge.call(this,!0).innerHTML},set:function(a){var b="template"===this.localName,c=b?this.content:this,d=Ae.call(document,
this.namespaceURI,this.localName);for(d.innerHTML=a;0<c.childNodes.length;)Je.call(c,c.childNodes[0]);for(a=b?d.content:d;0<a.childNodes.length;)He.call(c,a.childNodes[0])}})});N(Element.prototype,"setAttribute",function(a,b){if(1!==this.__CE_state)return Pe.call(this,a,b);var c=Oe.call(this,a);Pe.call(this,a,b);b=Oe.call(this,a);d.attributeChangedCallback(this,a,c,b,null)});N(Element.prototype,"setAttributeNS",function(a,b,c){if(1!==this.__CE_state)return Se.call(this,a,b,c);var e=Re.call(this,a,
b);Se.call(this,a,b,c);c=Re.call(this,a,b);d.attributeChangedCallback(this,b,e,c,a)});N(Element.prototype,"removeAttribute",function(a){if(1!==this.__CE_state)return Qe.call(this,a);var b=Oe.call(this,a);Qe.call(this,a);null!==b&&d.attributeChangedCallback(this,a,b,null,null)});N(Element.prototype,"removeAttributeNS",function(a,b){if(1!==this.__CE_state)return Te.call(this,a,b);var c=Re.call(this,a,b);Te.call(this,a,b);var e=Re.call(this,a,b);c!==e&&d.attributeChangedCallback(this,b,c,e,a)});df?b(HTMLElement.prototype,
df):Ue?b(Element.prototype,Ue):console.warn("Custom Elements: `Element#insertAdjacentElement` was not patched.");ef?c(HTMLElement.prototype,ef):Ve?c(Element.prototype,Ve):console.warn("Custom Elements: `Element#insertAdjacentHTML` was not patched.");jf(d,Element.prototype,{ha:We,append:Xe});mf(d)};var of=window.customElements;if(!of||of.forcePolyfill||"function"!=typeof of.define||"function"!=typeof of.get){var hf=new qe;gf();kf();jf(hf,DocumentFragment.prototype,{ha:Ee,append:Fe});lf();nf();document.__CE_hasRegistry=!0;var customElements=new S(hf);Object.defineProperty(window,"customElements",{configurable:!0,enumerable:!0,value:customElements})};function pf(){this.end=this.start=0;this.rules=this.parent=this.previous=null;this.cssText=this.parsedCssText="";this.atRule=!1;this.type=0;this.parsedSelector=this.selector=this.keyframesName=""}
function qf(a){a=a.replace(rf,"").replace(sf,"");var b=vf,c=a,d=new pf;d.start=0;d.end=c.length;for(var e=d,f=0,g=c.length;f<g;f++)if("{"===c[f]){e.rules||(e.rules=[]);var h=e,k=h.rules[h.rules.length-1]||null;e=new pf;e.start=f+1;e.parent=h;e.previous=k;h.rules.push(e)}else"}"===c[f]&&(e.end=f+1,e=e.parent||d);return b(d,a)}
function vf(a,b){var c=b.substring(a.start,a.end-1);a.parsedCssText=a.cssText=c.trim();a.parent&&(c=b.substring(a.previous?a.previous.end:a.parent.start,a.start-1),c=wf(c),c=c.replace(xf," "),c=c.substring(c.lastIndexOf(";")+1),c=a.parsedSelector=a.selector=c.trim(),a.atRule=0===c.indexOf("@"),a.atRule?0===c.indexOf("@media")?a.type=yf:c.match(zf)&&(a.type=Af,a.keyframesName=a.selector.split(xf).pop()):a.type=0===c.indexOf("--")?Bf:Cf);if(c=a.rules)for(var d=0,e=c.length,f=void 0;d<e&&(f=c[d]);d++)vf(f,
b);return a}function wf(a){return a.replace(/\\([0-9a-f]{1,6})\s/gi,function(a,c){a=c;for(c=6-a.length;c--;)a="0"+a;return"\\"+a})}
function Df(a,b,c){c=void 0===c?"":c;var d="";if(a.cssText||a.rules){var e=a.rules,f;if(f=e)f=e[0],f=!(f&&f.selector&&0===f.selector.indexOf("--"));if(f){f=0;for(var g=e.length,h=void 0;f<g&&(h=e[f]);f++)d=Df(h,b,d)}else b?b=a.cssText:(b=a.cssText,b=b.replace(Ef,"").replace(Ff,""),b=b.replace(Gf,"").replace(Hf,"")),(d=b.trim())&&(d="  "+d+"\n")}d&&(a.selector&&(c+=a.selector+" {\n"),c+=d,a.selector&&(c+="}\n\n"));return c}
var Cf=1,Af=7,yf=4,Bf=1E3,rf=/\/\*[^*]*\*+([^/*][^*]*\*+)*\//gim,sf=/@import[^;]*;/gim,Ef=/(?:^[^;\-\s}]+)?--[^;{}]*?:[^{};]*?(?:[;\n]|$)/gim,Ff=/(?:^[^;\-\s}]+)?--[^;{}]*?:[^{};]*?{[^}]*?}(?:[;\n]|$)?/gim,Gf=/@apply\s*\(?[^);]*\)?\s*(?:[;\n]|$)?/gim,Hf=/[^;:]*?:[^;]*?var\([^;]*\)(?:[;\n]|$)?/gim,zf=/^@[^\s]*keyframes/,xf=/\s+/g;var T=!(window.ShadyDOM&&window.ShadyDOM.inUse),If;function Jf(a){If=a&&a.shimcssproperties?!1:T||!(navigator.userAgent.match(/AppleWebKit\/601|Edge\/15/)||!window.CSS||!CSS.supports||!CSS.supports("box-shadow","0 0 0 var(--foo)"))}window.ShadyCSS&&void 0!==window.ShadyCSS.nativeCss?If=window.ShadyCSS.nativeCss:window.ShadyCSS?(Jf(window.ShadyCSS),window.ShadyCSS=void 0):Jf(window.WebComponents&&window.WebComponents.flags);var V=If;var Kf=/(?:^|[;\s{]\s*)(--[\w-]*?)\s*:\s*(?:((?:'(?:\\'|.)*?'|"(?:\\"|.)*?"|\([^)]*?\)|[^};{])+)|\{([^}]*)\}(?:(?=[;\s}])|$))/gi,Lf=/(?:^|\W+)@apply\s*\(?([^);\n]*)\)?/gi,Mf=/(--[\w-]+)\s*([:,;)]|$)/gi,Nf=/(animation\s*:)|(animation-name\s*:)/,Of=/@media\s(.*)/,Pf=/\{[^}]*\}/g;var Qf=new Set;function Rf(a,b){if(!a)return"";"string"===typeof a&&(a=qf(a));b&&Sf(a,b);return Df(a,V)}function Tf(a){!a.__cssRules&&a.textContent&&(a.__cssRules=qf(a.textContent));return a.__cssRules||null}function Uf(a){return!!a.parent&&a.parent.type===Af}function Sf(a,b,c,d){if(a){var e=!1,f=a.type;if(d&&f===yf){var g=a.selector.match(Of);g&&(window.matchMedia(g[1]).matches||(e=!0))}f===Cf?b(a):c&&f===Af?c(a):f===Bf&&(e=!0);if((a=a.rules)&&!e)for(e=0,f=a.length,g=void 0;e<f&&(g=a[e]);e++)Sf(g,b,c,d)}}
function Vf(a,b,c,d){var e=document.createElement("style");b&&e.setAttribute("scope",b);e.textContent=a;Wf(e,c,d);return e}var Xf=null;function Yf(a){a=document.createComment(" Shady DOM styles for "+a+" ");var b=document.head;b.insertBefore(a,(Xf?Xf.nextSibling:null)||b.firstChild);return Xf=a}function Wf(a,b,c){b=b||document.head;b.insertBefore(a,c&&c.nextSibling||b.firstChild);Xf?a.compareDocumentPosition(Xf)===Node.DOCUMENT_POSITION_PRECEDING&&(Xf=a):Xf=a}
function Zf(a,b){for(var c=0,d=a.length;b<d;b++)if("("===a[b])c++;else if(")"===a[b]&&0===--c)return b;return-1}function $f(a,b){var c=a.indexOf("var(");if(-1===c)return b(a,"","","");var d=Zf(a,c+3),e=a.substring(c+4,d);c=a.substring(0,c);a=$f(a.substring(d+1),b);d=e.indexOf(",");return-1===d?b(c,e.trim(),"",a):b(c,e.substring(0,d).trim(),e.substring(d+1).trim(),a)}function ag(a,b){T?a.setAttribute("class",b):window.ShadyDOM.nativeMethods.setAttribute.call(a,"class",b)}
function bg(a){var b=a.localName,c="";b?-1<b.indexOf("-")||(c=b,b=a.getAttribute&&a.getAttribute("is")||""):(b=a.is,c=a.extends);return{is:b,X:c}}function cg(a){for(var b=[],c="",d=0;0<=d&&d<a.length;d++)if("("===a[d]){var e=Zf(a,d);c+=a.slice(d,e+1);d=e}else","===a[d]?(b.push(c),c=""):c+=a[d];c&&b.push(c);return b}
function dg(a){if(void 0===a.ja){var b=a.getAttribute("css-build");if(b)a.ja=b;else{a:{b="template"===a.localName?a.content.firstChild:a.firstChild;if(b instanceof Comment&&(b=b.textContent.trim().split(":"),"css-build"===b[0])){b=b[1];break a}b=""}if(""!==b){var c="template"===a.localName?a.content.firstChild:a.firstChild;c.parentNode.removeChild(c)}a.ja=b}}return a.ja||""};function eg(){}function fg(a,b){gg(W,a,function(a){hg(a,b||"")})}function gg(a,b,c){b.nodeType===Node.ELEMENT_NODE&&c(b);if(b="template"===b.localName?(b.content||b.kb||b).childNodes:b.children||b.childNodes)for(var d=0;d<b.length;d++)gg(a,b[d],c)}
function hg(a,b,c){if(b)if(a.classList)c?(a.classList.remove("style-scope"),a.classList.remove(b)):(a.classList.add("style-scope"),a.classList.add(b));else if(a.getAttribute){var d=a.getAttribute(ig);c?d&&(b=d.replace("style-scope","").replace(b,""),ag(a,b)):ag(a,(d?d+" ":"")+"style-scope "+b)}}function jg(a,b,c){gg(W,a,function(a){hg(a,b,!0);hg(a,c)})}function kg(a,b){gg(W,a,function(a){hg(a,b||"",!0)})}
function lg(a,b,c,d){var e=W;T||"shady"===(void 0===d?"":d)?b=Rf(b,c):(a=bg(a),b=mg(e,b,a.is,a.X,c)+"\n\n");return b.trim()}function mg(a,b,c,d,e){var f=ng(c,d);c=c?og+c:"";return Rf(b,function(b){b.c||(b.selector=b.F=pg(a,b,a.b,c,f),b.c=!0);e&&e(b,c,f)})}function ng(a,b){return b?"[is="+a+"]":a}function pg(a,b,c,d,e){var f=cg(b.selector);if(!Uf(b)){b=0;for(var g=f.length,h=void 0;b<g&&(h=f[b]);b++)f[b]=c.call(a,h,d,e)}return f.filter(function(a){return!!a}).join(qg)}
function rg(a){return a.replace(sg,function(a,c,d){-1<d.indexOf("+")?d=d.replace(/\+/g,"___"):-1<d.indexOf("___")&&(d=d.replace(/___/g,"+"));return":"+c+"("+d+")"})}function tg(a){for(var b=[],c;c=a.match(ug);){var d=c.index,e=Zf(a,d);if(-1===e)throw Error(c.input+" selector missing ')'");c=a.slice(d,e+1);a=a.replace(c,"\ue000");b.push(c)}return{sa:a,matches:b}}function vg(a,b){var c=a.split("\ue000");return b.reduce(function(a,b,f){return a+b+c[f+1]},c[0])}
eg.prototype.b=function(a,b,c){var d=!1;a=a.trim();var e=sg.test(a);e&&(a=a.replace(sg,function(a,b,c){return":"+b+"("+c.replace(/\s/g,"")+")"}),a=rg(a));var f=ug.test(a);if(f){var g=tg(a);a=g.sa;g=g.matches}a=a.replace(wg,xg+" $1");a=a.replace(yg,function(a,e,f){d||(a=zg(f,e,b,c),d=d||a.stop,e=a.Oa,f=a.value);return e+f});f&&(a=vg(a,g));e&&(a=rg(a));return a};
function zg(a,b,c,d){var e=a.indexOf(Ag);0<=a.indexOf(xg)?a=Bg(a,d):0!==e&&(a=c?Cg(a,c):a);c=!1;0<=e&&(b="",c=!0);if(c){var f=!0;c&&(a=a.replace(Dg,function(a,b){return" > "+b}))}a=a.replace(Eg,function(a,b,c){return'[dir="'+c+'"] '+b+", "+b+'[dir="'+c+'"]'});return{value:a,Oa:b,stop:f}}function Cg(a,b){a=a.split(Fg);a[0]+=b;return a.join(Fg)}
function Bg(a,b){var c=a.match(Gg);return(c=c&&c[2].trim()||"")?c[0].match(Hg)?a.replace(Gg,function(a,c,f){return b+f}):c.split(Hg)[0]===b?c:Ig:a.replace(xg,b)}function Jg(a){a.selector===Kg&&(a.selector="html")}eg.prototype.c=function(a){return a.match(xg)?"":a.match(Ag)?this.b(a,Lg):Cg(a.trim(),Lg)};fa.Object.defineProperties(eg.prototype,{a:{configurable:!0,enumerable:!0,get:function(){return"style-scope"}}});
var sg=/:(nth[-\w]+)\(([^)]+)\)/,Lg=":not(.style-scope)",qg=",",yg=/(^|[\s>+~]+)((?:\[.+?\]|[^\s>+~=[])+)/g,Hg=/[[.:#*]/,xg=":host",Kg=":root",Ag="::slotted",wg=new RegExp("^("+Ag+")"),Gg=/(:host)(?:\(((?:\([^)(]*\)|[^)(]*)+?)\))/,Dg=/(?:::slotted)(?:\(((?:\([^)(]*\)|[^)(]*)+?)\))/,Eg=/(.*):dir\((?:(ltr|rtl))\)/,og=".",Fg=":",ig="class",Ig="should_not_match",ug=/:(?:matches|any|-(?:webkit|moz)-any)/,W=new eg;function Mg(a,b,c,d,e){this.M=a||null;this.b=b||null;this.c=c||[];this.T=null;this.da=e||"";this.X=d||"";this.a=this.I=this.O=null}function X(a){return a?a.__styleInfo:null}function Ng(a,b){return a.__styleInfo=b}Mg.prototype.f=function(){return this.M};Mg.prototype._getStyleRules=Mg.prototype.f;function Og(a){var b=this.matches||this.matchesSelector||this.mozMatchesSelector||this.msMatchesSelector||this.oMatchesSelector||this.webkitMatchesSelector;return b&&b.call(this,a)}var Pg=navigator.userAgent.match("Trident");function Qg(){}function Rg(a){var b={},c=[],d=0;Sf(a,function(a){Sg(a);a.index=d++;a=a.B.cssText;for(var c;c=Mf.exec(a);){var e=c[1];":"!==c[2]&&(b[e]=!0)}},function(a){c.push(a)});a.b=c;a=[];for(var e in b)a.push(e);return a}
function Sg(a){if(!a.B){var b={},c={};Tg(a,c)&&(b.L=c,a.rules=null);b.cssText=a.parsedCssText.replace(Pf,"").replace(Kf,"");a.B=b}}function Tg(a,b){var c=a.B;if(c){if(c.L)return Object.assign(b,c.L),!0}else{c=a.parsedCssText;for(var d;a=Kf.exec(c);){d=(a[2]||a[3]).trim();if("inherit"!==d||"unset"!==d)b[a[1].trim()]=d;d=!0}return d}}
function Ug(a,b,c){b&&(b=0<=b.indexOf(";")?Vg(a,b,c):$f(b,function(b,e,f,g){if(!e)return b+g;(e=Ug(a,c[e],c))&&"initial"!==e?"apply-shim-inherit"===e&&(e="inherit"):e=Ug(a,c[f]||f,c)||f;return b+(e||"")+g}));return b&&b.trim()||""}
function Vg(a,b,c){b=b.split(";");for(var d=0,e,f;d<b.length;d++)if(e=b[d]){Lf.lastIndex=0;if(f=Lf.exec(e))e=Ug(a,c[f[1]],c);else if(f=e.indexOf(":"),-1!==f){var g=e.substring(f);g=g.trim();g=Ug(a,g,c)||g;e=e.substring(0,f)+g}b[d]=e&&e.lastIndexOf(";")===e.length-1?e.slice(0,-1):e||""}return b.join(";")}
function Wg(a,b){var c={},d=[];Sf(a,function(a){a.B||Sg(a);var e=a.F||a.parsedSelector;b&&a.B.L&&e&&Og.call(b,e)&&(Tg(a,c),a=a.index,e=parseInt(a/32,10),d[e]=(d[e]||0)|1<<a%32)},null,!0);return{L:c,key:d}}
function Xg(a,b,c,d){b.B||Sg(b);if(b.B.L){var e=bg(a);a=e.is;e=e.X;e=a?ng(a,e):"html";var f=b.parsedSelector,g=":host > *"===f||"html"===f,h=0===f.indexOf(":host")&&!g;"shady"===c&&(g=f===e+" > *."+e||-1!==f.indexOf("html"),h=!g&&0===f.indexOf(e));if(g||h)c=e,h&&(b.F||(b.F=pg(W,b,W.b,a?og+a:"",e)),c=b.F||e),d({sa:c,Va:h,vb:g})}}function Yg(a,b,c){var d={},e={};Sf(b,function(b){Xg(a,b,c,function(c){Og.call(a.lb||a,c.sa)&&(c.Va?Tg(b,d):Tg(b,e))})},null,!0);return{Za:e,Ta:d}}
function Zg(a,b,c,d){var e=bg(b),f=ng(e.is,e.X),g=new RegExp("(?:^|[^.#[:])"+(b.extends?"\\"+f.slice(0,-1)+"\\]":f)+"($|[.:[\\s>+~])"),h=X(b);e=h.M;h=h.da;var k=$g(e,d);return lg(b,e,function(b){var e="";b.B||Sg(b);b.B.cssText&&(e=Vg(a,b.B.cssText,c));b.cssText=e;if(!T&&!Uf(b)&&b.cssText){var h=e=b.cssText;null==b.xa&&(b.xa=Nf.test(e));if(b.xa)if(null==b.ga){b.ga=[];for(var l in k)h=k[l],h=h(e),e!==h&&(e=h,b.ga.push(l))}else{for(l=0;l<b.ga.length;++l)h=k[b.ga[l]],e=h(e);h=e}b.cssText=h;b.F=b.F||b.selector;
e="."+d;l=cg(b.F);h=0;for(var u=l.length,w=void 0;h<u&&(w=l[h]);h++)l[h]=w.match(g)?w.replace(f,e):e+" "+w;b.selector=l.join(",")}},h)}function $g(a,b){a=a.b;var c={};if(!T&&a)for(var d=0,e=a[d];d<a.length;e=a[++d]){var f=e,g=b;f.f=new RegExp("\\b"+f.keyframesName+"(?!\\B|-)","g");f.a=f.keyframesName+"-"+g;f.F=f.F||f.selector;f.selector=f.F.replace(f.keyframesName,f.a);c[e.keyframesName]=ah(e)}return c}function ah(a){return function(b){return b.replace(a.f,a.a)}}
function bh(a,b){var c=ch,d=Tf(a);a.textContent=Rf(d,function(a){var d=a.cssText=a.parsedCssText;a.B&&a.B.cssText&&(d=d.replace(Ef,"").replace(Ff,""),a.cssText=Vg(c,d,b))})}fa.Object.defineProperties(Qg.prototype,{a:{configurable:!0,enumerable:!0,get:function(){return"x-scope"}}});var ch=new Qg;var dh={},eh=window.customElements;if(eh&&!T){var fh=eh.define;eh.define=function(a,b,c){dh[a]||(dh[a]=Yf(a));fh.call(eh,a,b,c)}};function gh(){this.cache={}}gh.prototype.store=function(a,b,c,d){var e=this.cache[a]||[];e.push({L:b,styleElement:c,I:d});100<e.length&&e.shift();this.cache[a]=e};gh.prototype.fetch=function(a,b,c){if(a=this.cache[a])for(var d=a.length-1;0<=d;d--){var e=a[d],f;a:{for(f=0;f<c.length;f++){var g=c[f];if(e.L[g]!==b[g]){f=!1;break a}}f=!0}if(f)return e}};function hh(){}function ih(a){var b=[];a.classList?b=Array.from(a.classList):a instanceof window.SVGElement&&a.hasAttribute("class")&&(b=a.getAttribute("class").split(/\s+/));a=b;b=a.indexOf(W.a);return-1<b?a[b+1]:""}function jh(a){var b=a.getRootNode();return b===a||b===a.ownerDocument?"":(a=b.host)?bg(a).is:""}
function kh(a){for(var b=0;b<a.length;b++){var c=a[b];if(c.target!==document.documentElement&&c.target!==document.head)for(var d=0;d<c.addedNodes.length;d++){var e=c.addedNodes[d];if(e.nodeType===Node.ELEMENT_NODE){var f=e.getRootNode(),g=ih(e);if(g&&f===e.ownerDocument&&("style"!==e.localName&&"template"!==e.localName||""===dg(e)))kg(e,g);else if(f instanceof ShadowRoot)for(f=jh(e),f!==g&&jg(e,g,f),e=window.ShadyDOM.nativeMethods.querySelectorAll.call(e,":not(."+W.a+")"),g=0;g<e.length;g++){f=e[g];
var h=jh(f);h&&hg(f,h)}}}}}
if(!(T||window.ShadyDOM&&window.ShadyDOM.handlesDynamicScoping)){var lh=new MutationObserver(kh),mh=function(a){lh.observe(a,{childList:!0,subtree:!0})};if(window.customElements&&!window.customElements.polyfillWrapFlushCallback)mh(document);else{var nh=function(){mh(document.body)};window.HTMLImports?window.HTMLImports.whenReady(nh):requestAnimationFrame(function(){if("loading"===document.readyState){var a=function(){nh();document.removeEventListener("readystatechange",a)};document.addEventListener("readystatechange",
a)}else nh()})}hh=function(){kh(lh.takeRecords())}}var oh=hh;var ph={};var qh=Promise.resolve();function rh(a){if(a=ph[a])a._applyShimCurrentVersion=a._applyShimCurrentVersion||0,a._applyShimValidatingVersion=a._applyShimValidatingVersion||0,a._applyShimNextVersion=(a._applyShimNextVersion||0)+1}function sh(a){return a._applyShimCurrentVersion===a._applyShimNextVersion}function th(a){a._applyShimValidatingVersion=a._applyShimNextVersion;a.b||(a.b=!0,qh.then(function(){a._applyShimCurrentVersion=a._applyShimNextVersion;a.b=!1}))};var uh=new gh;function Y(){this.G={};this.c=document.documentElement;var a=new pf;a.rules=[];this.f=Ng(this.c,new Mg(a));this.m=!1;this.b=this.a=null}r=Y.prototype;r.flush=function(){oh()};r.Ra=function(a){return Tf(a)};r.cb=function(a){return Rf(a)};r.prepareTemplate=function(a,b,c){this.prepareTemplateDom(a,b);this.prepareTemplateStyles(a,b,c)};
r.prepareTemplateStyles=function(a,b,c){if(!a.m){T||dh[b]||(dh[b]=Yf(b));a.m=!0;a.name=b;a.extends=c;ph[b]=a;var d=dg(a);var e=[];for(var f=a.content.querySelectorAll("style"),g=0;g<f.length;g++){var h=f[g];if(h.hasAttribute("shady-unscoped")){if(!T){var k=h.textContent;Qf.has(k)||(Qf.add(k),k=h.cloneNode(!0),document.head.appendChild(k));h.parentNode.removeChild(h)}}else e.push(h.textContent),h.parentNode.removeChild(h)}e=e.join("").trim();c={is:b,extends:c};vh(this);if(f=""===dg(a))f=Lf.test(e)||
Kf.test(e),Lf.lastIndex=0,Kf.lastIndex=0;e=qf(e);f&&V&&this.a&&this.a.transformRules(e,b);a._styleAst=e;e=[];V||(e=Rg(a._styleAst));if(!e.length||V)f=T?a.content:null,b=dh[b]||null,d=lg(c,a._styleAst,null,d),d=d.length?Vf(d,c.is,f,b):void 0,a.a=d;a.f=e}};r.prepareTemplateDom=function(a,b){var c=dg(a);T||"shady"===c||a.c||(a.c=!0,fg(a.content,b))};
function wh(a){!a.b&&window.ShadyCSS&&window.ShadyCSS.CustomStyleInterface&&(a.b=window.ShadyCSS.CustomStyleInterface,a.b.transformCallback=function(b){a.Aa(b)},a.b.validateCallback=function(){requestAnimationFrame(function(){(a.b.enqueued||a.m)&&a.flushCustomStyles()})})}function vh(a){!a.a&&window.ShadyCSS&&window.ShadyCSS.ApplyShim&&(a.a=window.ShadyCSS.ApplyShim,a.a.invalidCallback=rh);wh(a)}
r.flushCustomStyles=function(){vh(this);if(this.b){var a=this.b.processStyles();if(this.b.enqueued){if(V)for(var b=0;b<a.length;b++){var c=this.b.getStyleForCustomStyle(a[b]);if(c&&V&&this.a){var d=Tf(c);vh(this);this.a.transformRules(d);c.textContent=Rf(d)}}else for(xh(this,this.c,this.f),b=0;b<a.length;b++)(c=this.b.getStyleForCustomStyle(a[b]))&&bh(c,this.f.O);this.b.enqueued=!1;this.m&&!V&&this.styleDocument()}}};
r.styleElement=function(a,b){var c=X(a);if(!c){var d=bg(a);c=d.is;d=d.X;var e=dh[c]||null;c=ph[c];if(c){var f=c._styleAst;var g=c.f;var h=dg(c)}f=new Mg(f,e,g,d,h);c&&Ng(a,f);c=f}a!==this.c&&(this.m=!0);b&&(c.T=c.T||{},Object.assign(c.T,b));if(V){b=c;f=bg(a).is;if(b.T){g=b.T;for(var k in g)null===k?a.style.removeProperty(k):a.style.setProperty(k,g[k])}if(!(!(k=ph[f])&&a!==this.c||k&&""!==dg(k))&&k&&k.a&&!sh(k)){if(sh(k)||k._applyShimValidatingVersion!==k._applyShimNextVersion)vh(this),this.a&&this.a.transformRules(k._styleAst,
f),k.a.textContent=lg(a,b.M),th(k);T&&(f=a.shadowRoot)&&(f=f.querySelector("style"))&&(f.textContent=lg(a,b.M));b.M=k._styleAst}}else if(k=c,this.flush(),xh(this,a,k),k.c&&k.c.length){b=bg(a).is;c=(f=uh.fetch(b,k.O,k.c))?f.styleElement:null;g=k.I;(h=f&&f.I)||(h=this.G[b]=(this.G[b]||0)+1,h=b+"-"+h);k.I=h;h=k.I;d=ch;d=c?c.textContent||"":Zg(d,a,k.O,h);e=X(a);var l=e.a;l&&!T&&l!==c&&(l._useCount--,0>=l._useCount&&l.parentNode&&l.parentNode.removeChild(l));T?e.a?(e.a.textContent=d,c=e.a):d&&(c=Vf(d,
h,a.shadowRoot,e.b)):c?c.parentNode||(Pg&&-1<d.indexOf("@media")&&(c.textContent=d),Wf(c,null,e.b)):d&&(c=Vf(d,h,null,e.b));c&&(c._useCount=c._useCount||0,e.a!=c&&c._useCount++,e.a=c);h=c;T||(c=k.I,e=d=a.getAttribute("class")||"",g&&(e=d.replace(new RegExp("\\s*x-scope\\s*"+g+"\\s*","g")," ")),e+=(e?" ":"")+"x-scope "+c,d!==e&&ag(a,e));f||uh.store(b,k.O,h,k.I)}};function yh(a,b){return(b=b.getRootNode().host)?X(b)?b:yh(a,b):a.c}
function xh(a,b,c){a=yh(a,b);var d=X(a);a=Object.create(d.O||null);var e=Yg(b,c.M,c.da);b=Wg(d.M,b).L;Object.assign(a,e.Ta,b,e.Za);b=c.T;for(var f in b)if((e=b[f])||0===e)a[f]=e;f=ch;b=Object.getOwnPropertyNames(a);for(e=0;e<b.length;e++)d=b[e],a[d]=Ug(f,a[d],a);c.O=a}r.styleDocument=function(a){this.styleSubtree(this.c,a)};
r.styleSubtree=function(a,b){var c=a.shadowRoot;(c||a===this.c)&&this.styleElement(a,b);if(b=c&&(c.children||c.childNodes))for(a=0;a<b.length;a++)this.styleSubtree(b[a]);else if(a=a.children||a.childNodes)for(b=0;b<a.length;b++)this.styleSubtree(a[b])};
r.Aa=function(a){var b=this,c=Tf(a),d=dg(a);d!==this.f.da&&(this.f.da=d);Sf(c,function(a){if(T)Jg(a);else{var c=W;a.selector=a.parsedSelector;Jg(a);a.selector=a.F=pg(c,a,c.c,void 0,void 0)}V&&""===d&&(vh(b),b.a&&b.a.transformRule(a))});V?a.textContent=Rf(c):this.f.M.rules.push(c)};r.getComputedStyleValue=function(a,b){var c;V||(c=(X(a)||X(yh(this,a))).O[b]);return(c=c||window.getComputedStyle(a).getPropertyValue(b))?c.trim():""};
r.bb=function(a,b){var c=a.getRootNode();b=b?b.split(/\s/):[];c=c.host&&c.host.localName;if(!c){var d=a.getAttribute("class");if(d){d=d.split(/\s/);for(var e=0;e<d.length;e++)if(d[e]===W.a){c=d[e+1];break}}}c&&b.push(W.a,c);V||(c=X(a))&&c.I&&b.push(ch.a,c.I);ag(a,b.join(" "))};r.La=function(a){return X(a)};r.ab=function(a,b){hg(a,b)};r.eb=function(a,b){hg(a,b,!0)};r.$a=function(a){return jh(a)};r.Pa=function(a){return ih(a)};Y.prototype.flush=Y.prototype.flush;Y.prototype.prepareTemplate=Y.prototype.prepareTemplate;
Y.prototype.styleElement=Y.prototype.styleElement;Y.prototype.styleDocument=Y.prototype.styleDocument;Y.prototype.styleSubtree=Y.prototype.styleSubtree;Y.prototype.getComputedStyleValue=Y.prototype.getComputedStyleValue;Y.prototype.setElementClass=Y.prototype.bb;Y.prototype._styleInfoForNode=Y.prototype.La;Y.prototype.transformCustomStyleForDocument=Y.prototype.Aa;Y.prototype.getStyleAst=Y.prototype.Ra;Y.prototype.styleAstToString=Y.prototype.cb;Y.prototype.flushCustomStyles=Y.prototype.flushCustomStyles;
Y.prototype.scopeNode=Y.prototype.ab;Y.prototype.unscopeNode=Y.prototype.eb;Y.prototype.scopeForNode=Y.prototype.$a;Y.prototype.currentScopeForNode=Y.prototype.Pa;Object.defineProperties(Y.prototype,{nativeShadow:{get:function(){return T}},nativeCss:{get:function(){return V}}});var Z=new Y,zh,Ah;window.ShadyCSS&&(zh=window.ShadyCSS.ApplyShim,Ah=window.ShadyCSS.CustomStyleInterface);
window.ShadyCSS={ScopingShim:Z,prepareTemplate:function(a,b,c){Z.flushCustomStyles();Z.prepareTemplate(a,b,c)},prepareTemplateDom:function(a,b){Z.prepareTemplateDom(a,b)},prepareTemplateStyles:function(a,b,c){Z.flushCustomStyles();Z.prepareTemplateStyles(a,b,c)},styleSubtree:function(a,b){Z.flushCustomStyles();Z.styleSubtree(a,b)},styleElement:function(a){Z.flushCustomStyles();Z.styleElement(a)},styleDocument:function(a){Z.flushCustomStyles();Z.styleDocument(a)},flushCustomStyles:function(){Z.flushCustomStyles()},
getComputedStyleValue:function(a,b){return Z.getComputedStyleValue(a,b)},nativeCss:V,nativeShadow:T};zh&&(window.ShadyCSS.ApplyShim=zh);Ah&&(window.ShadyCSS.CustomStyleInterface=Ah);(function(a){function b(a){""==a&&(f.call(this),this.i=!0);return a.toLowerCase()}function c(a){var b=a.charCodeAt(0);return 32<b&&127>b&&-1==[34,35,60,62,63,96].indexOf(b)?a:encodeURIComponent(a)}function d(a){var b=a.charCodeAt(0);return 32<b&&127>b&&-1==[34,35,60,62,96].indexOf(b)?a:encodeURIComponent(a)}function e(a,e,g){function h(a){ba.push(a)}var k=e||"scheme start",w=0,q="",u=!1,R=!1,ba=[];a:for(;(void 0!=a[w-1]||0==w)&&!this.i;){var m=a[w];switch(k){case "scheme start":if(m&&p.test(m))q+=
m.toLowerCase(),k="scheme";else if(e){h("Invalid scheme.");break a}else{q="";k="no scheme";continue}break;case "scheme":if(m&&G.test(m))q+=m.toLowerCase();else if(":"==m){this.h=q;q="";if(e)break a;void 0!==l[this.h]&&(this.D=!0);k="file"==this.h?"relative":this.D&&g&&g.h==this.h?"relative or authority":this.D?"authority first slash":"scheme data"}else if(e){void 0!=m&&h("Code point not allowed in scheme: "+m);break a}else{q="";w=0;k="no scheme";continue}break;case "scheme data":"?"==m?(this.u="?",
k="query"):"#"==m?(this.C="#",k="fragment"):void 0!=m&&"\t"!=m&&"\n"!=m&&"\r"!=m&&(this.pa+=c(m));break;case "no scheme":if(g&&void 0!==l[g.h]){k="relative";continue}else h("Missing scheme."),f.call(this),this.i=!0;break;case "relative or authority":if("/"==m&&"/"==a[w+1])k="authority ignore slashes";else{h("Expected /, got: "+m);k="relative";continue}break;case "relative":this.D=!0;"file"!=this.h&&(this.h=g.h);if(void 0==m){this.j=g.j;this.s=g.s;this.l=g.l.slice();this.u=g.u;this.v=g.v;this.g=g.g;
break a}else if("/"==m||"\\"==m)"\\"==m&&h("\\ is an invalid code point."),k="relative slash";else if("?"==m)this.j=g.j,this.s=g.s,this.l=g.l.slice(),this.u="?",this.v=g.v,this.g=g.g,k="query";else if("#"==m)this.j=g.j,this.s=g.s,this.l=g.l.slice(),this.u=g.u,this.C="#",this.v=g.v,this.g=g.g,k="fragment";else{k=a[w+1];var y=a[w+2];if("file"!=this.h||!p.test(m)||":"!=k&&"|"!=k||void 0!=y&&"/"!=y&&"\\"!=y&&"?"!=y&&"#"!=y)this.j=g.j,this.s=g.s,this.v=g.v,this.g=g.g,this.l=g.l.slice(),this.l.pop();k=
"relative path";continue}break;case "relative slash":if("/"==m||"\\"==m)"\\"==m&&h("\\ is an invalid code point."),k="file"==this.h?"file host":"authority ignore slashes";else{"file"!=this.h&&(this.j=g.j,this.s=g.s,this.v=g.v,this.g=g.g);k="relative path";continue}break;case "authority first slash":if("/"==m)k="authority second slash";else{h("Expected '/', got: "+m);k="authority ignore slashes";continue}break;case "authority second slash":k="authority ignore slashes";if("/"!=m){h("Expected '/', got: "+
m);continue}break;case "authority ignore slashes":if("/"!=m&&"\\"!=m){k="authority";continue}else h("Expected authority, got: "+m);break;case "authority":if("@"==m){u&&(h("@ already seen."),q+="%40");u=!0;for(m=0;m<q.length;m++)y=q[m],"\t"==y||"\n"==y||"\r"==y?h("Invalid whitespace in authority."):":"==y&&null===this.g?this.g="":(y=c(y),null!==this.g?this.g+=y:this.v+=y);q=""}else if(void 0==m||"/"==m||"\\"==m||"?"==m||"#"==m){w-=q.length;q="";k="host";continue}else q+=m;break;case "file host":if(void 0==
m||"/"==m||"\\"==m||"?"==m||"#"==m){2!=q.length||!p.test(q[0])||":"!=q[1]&&"|"!=q[1]?(0!=q.length&&(this.j=b.call(this,q),q=""),k="relative path start"):k="relative path";continue}else"\t"==m||"\n"==m||"\r"==m?h("Invalid whitespace in file host."):q+=m;break;case "host":case "hostname":if(":"!=m||R)if(void 0==m||"/"==m||"\\"==m||"?"==m||"#"==m){this.j=b.call(this,q);q="";k="relative path start";if(e)break a;continue}else"\t"!=m&&"\n"!=m&&"\r"!=m?("["==m?R=!0:"]"==m&&(R=!1),q+=m):h("Invalid code point in host/hostname: "+
m);else if(this.j=b.call(this,q),q="",k="port","hostname"==e)break a;break;case "port":if(/[0-9]/.test(m))q+=m;else if(void 0==m||"/"==m||"\\"==m||"?"==m||"#"==m||e){""!=q&&(q=parseInt(q,10),q!=l[this.h]&&(this.s=q+""),q="");if(e)break a;k="relative path start";continue}else"\t"==m||"\n"==m||"\r"==m?h("Invalid code point in port: "+m):(f.call(this),this.i=!0);break;case "relative path start":"\\"==m&&h("'\\' not allowed in path.");k="relative path";if("/"!=m&&"\\"!=m)continue;break;case "relative path":if(void 0!=
m&&"/"!=m&&"\\"!=m&&(e||"?"!=m&&"#"!=m))"\t"!=m&&"\n"!=m&&"\r"!=m&&(q+=c(m));else{"\\"==m&&h("\\ not allowed in relative path.");if(y=n[q.toLowerCase()])q=y;".."==q?(this.l.pop(),"/"!=m&&"\\"!=m&&this.l.push("")):"."==q&&"/"!=m&&"\\"!=m?this.l.push(""):"."!=q&&("file"==this.h&&0==this.l.length&&2==q.length&&p.test(q[0])&&"|"==q[1]&&(q=q[0]+":"),this.l.push(q));q="";"?"==m?(this.u="?",k="query"):"#"==m&&(this.C="#",k="fragment")}break;case "query":e||"#"!=m?void 0!=m&&"\t"!=m&&"\n"!=m&&"\r"!=m&&(this.u+=
d(m)):(this.C="#",k="fragment");break;case "fragment":void 0!=m&&"\t"!=m&&"\n"!=m&&"\r"!=m&&(this.C+=m)}w++}}function f(){this.v=this.pa=this.h="";this.g=null;this.s=this.j="";this.l=[];this.C=this.u="";this.D=this.i=!1}function g(a,b){void 0===b||b instanceof g||(b=new g(String(b)));this.Ma=a;f.call(this);a=a.replace(/^[ \t\r\n\f]+|[ \t\r\n\f]+$/g,"");e.call(this,a,null,b)}var h=!1;if(!a.rb)try{var k=new URL("b","http://a");k.pathname="c%20d";h="http://a/c%20d"===k.href}catch(w){}if(!h){var l=Object.create(null);
l.ftp=21;l.file=0;l.gopher=70;l.http=80;l.https=443;l.ws=80;l.wss=443;var n=Object.create(null);n["%2e"]=".";n[".%2e"]="..";n["%2e."]="..";n["%2e%2e"]="..";var p=/[a-zA-Z]/,G=/[a-zA-Z0-9\+\-\.]/;g.prototype={toString:function(){return this.href},get href(){if(this.i)return this.Ma;var a="";if(""!=this.v||null!=this.g)a=this.v+(null!=this.g?":"+this.g:"")+"@";return this.protocol+(this.D?"//"+a+this.host:"")+this.pathname+this.u+this.C},set href(a){f.call(this);e.call(this,a)},get protocol(){return this.h+
":"},set protocol(a){this.i||e.call(this,a+":","scheme start")},get host(){return this.i?"":this.s?this.j+":"+this.s:this.j},set host(a){!this.i&&this.D&&e.call(this,a,"host")},get hostname(){return this.j},set hostname(a){!this.i&&this.D&&e.call(this,a,"hostname")},get port(){return this.s},set port(a){!this.i&&this.D&&e.call(this,a,"port")},get pathname(){return this.i?"":this.D?"/"+this.l.join("/"):this.pa},set pathname(a){!this.i&&this.D&&(this.l=[],e.call(this,a,"relative path start"))},get search(){return this.i||
!this.u||"?"==this.u?"":this.u},set search(a){!this.i&&this.D&&(this.u="?","?"==a[0]&&(a=a.slice(1)),e.call(this,a,"query"))},get hash(){return this.i||!this.C||"#"==this.C?"":this.C},set hash(a){this.i||(this.C="#","#"==a[0]&&(a=a.slice(1)),e.call(this,a,"fragment"))},get origin(){var a;if(this.i||!this.h)return"";switch(this.h){case "data":case "file":case "javascript":case "mailto":return"null"}return(a=this.host)?this.h+"://"+a:""}};var u=a.URL;u&&(g.createObjectURL=function(a){return u.createObjectURL.apply(u,
arguments)},g.revokeObjectURL=function(a){u.revokeObjectURL(a)});a.URL=g}})(window);Object.getOwnPropertyDescriptor(Node.prototype,"baseURI")||Object.defineProperty(Node.prototype,"baseURI",{get:function(){var a=(this.ownerDocument||this).querySelector("base[href]");return a&&a.href||window.location.href},configurable:!0,enumerable:!0});var Bh=document.createElement("style");Bh.textContent="body {transition: opacity ease-in 0.2s; } \nbody[unresolved] {opacity: 0; display: block; overflow: hidden; position: relative; } \n";var Ch=document.querySelector("head");Ch.insertBefore(Bh,Ch.firstChild);var Dh=window.customElements,Eh=!1,Fh=null;Dh.polyfillWrapFlushCallback&&Dh.polyfillWrapFlushCallback(function(a){Fh=a;Eh&&a()});function Gh(){window.HTMLTemplateElement.bootstrap&&window.HTMLTemplateElement.bootstrap(window.document);Fh&&Fh();Eh=!0;window.WebComponents.ready=!0;document.dispatchEvent(new CustomEvent("WebComponentsReady",{bubbles:!0}))}
"complete"!==document.readyState?(window.addEventListener("load",Gh),window.addEventListener("DOMContentLoaded",function(){window.removeEventListener("load",Gh);Gh()})):Gh();}).call(this);

//# sourceMappingURL=webcomponents-bundle.js.map

!function(e,t){"object"==typeof exports&&"undefined"!=typeof module?module.exports=t():"function"==typeof define&&define.amd?define(t):e.RHElement=t()}(this,function(){"use strict";var o=function(){return null};function r(){o("[reveal] web components ready"),o("[reveal] elements ready, revealing the body"),window.document.body.removeAttribute("unresolved")}var t=function(){function o(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(e,t,n){return t&&o(e.prototype,t),n&&o(e,n),e}}(),s=function(e){if(Array.isArray(e)){for(var t=0,n=Array(e.length);t<e.length;t++)n[t]=e[t];return n}return Array.from(e)},e=function(e){function u(e){var t=1<arguments.length&&void 0!==arguments[1]?arguments[1]:{},n=t.type,o=void 0===n?null:n,r=t.delayRender,i=void 0!==r&&r;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,u);var a=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(u.__proto__||Object.getPrototypeOf(u)).call(this));return a._rhClass=e,a.tag=e.tag,a._queue=[],a.template=document.createElement("template"),a.attachShadow({mode:"open"}),o&&a._queueAction({type:"setProperty",data:{name:"rhType",value:o}}),i||a.render(),a}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(u,HTMLElement),t(u,[{key:"rhType",get:function(){return this.getAttribute("rh-type")},set:function(e){this.setAttribute("rh-type",e)}}],[{key:"create",value:function(e){window.customElements.define(e.tag,e)}},{key:"debugLog",value:function(){var e=0<arguments.length&&void 0!==arguments[0]?arguments[0]:null;return null!==e&&(u._debugLog=!!e),u._debugLog}},{key:"log",value:function(){var e;u.debugLog()&&(e=console).log.apply(e,arguments)}},{key:"RhTypes",get:function(){return{Container:"container",Content:"content",Pattern:"pattern"}}}]),t(u,[{key:"connectedCallback",value:function(){window.ShadyCSS&&window.ShadyCSS.styleElement(this),this.classList.add("rhelement"),this._queue.length&&this._processQueue()}},{key:"attributeChangedCallback",value:function(e,t,n){if(this._rhClass.cascadingAttributes){var o=this._rhClass.cascadingAttributes[e];o&&this._copyAttribute(e,o)}}},{key:"_copyAttribute",value:function(e,t){var n=[].concat(s(this.querySelectorAll(t)),s(this.shadowRoot.querySelectorAll(t))),o=this.getAttribute(e),r=null==o?"removeAttribute":"setAttribute",i=!0,a=!1,u=void 0;try{for(var l,c=n[Symbol.iterator]();!(i=(l=c.next()).done);i=!0){l.value[r](e,o)}}catch(e){a=!0,u=e}finally{try{!i&&c.return&&c.return()}finally{if(a)throw u}}}},{key:"_queueAction",value:function(e){this._queue.push(e)}},{key:"_processQueue",value:function(){var t=this;this._queue.forEach(function(e){t["_"+e.type](e.data)}),this._queue=[]}},{key:"_setProperty",value:function(e){var t=e.name,n=e.value;this[t]=n}},{key:"render",value:function(){this.shadowRoot.innerHTML="",this.template.innerHTML=this.html,window.ShadyCSS&&window.ShadyCSS.prepareTemplate(this.template,this.tag),this.shadowRoot.appendChild(this.template.content.cloneNode(!0))}},{key:"log",value:function(){for(var e=arguments.length,t=Array(e),n=0;n<e;n++)t[n]=arguments[n];u.log.apply(u,["["+this.tag+"]"].concat(t))}}]),u}();return function(e){o=e;var t=window.WebComponents,n=t&&window.WebComponents.ready;!t||n?r():window.addEventListener("WebComponentsReady",r)}(e.log),e});
//# sourceMappingURL=rhelement.umd.js.map

!function(r,e){"object"==typeof exports&&"undefined"!=typeof module?module.exports=e(require("../rhelement/rhelement.umd.js")):"function"==typeof define&&define.amd?define(["../rhelement/rhelement.umd.js"],e):r.RhCard=e(r.RHElement)}(this,function(o){"use strict";o=o&&o.hasOwnProperty("default")?o.default:o;var t=function(){function t(r,e){for(var o=0;o<e.length;o++){var t=e[o];t.enumerable=t.enumerable||!1,t.configurable=!0,"value"in t&&(t.writable=!0),Object.defineProperty(r,t.key,t)}}return function(r,e,o){return e&&t(r.prototype,e),o&&t(r,o),r}}(),r=function(r){function e(){return function(r,e){if(!(r instanceof e))throw new TypeError("Cannot call a class as a function")}(this,e),function(r,e){if(!r)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!=typeof e&&"function"!=typeof e?r:e}(this,(e.__proto__||Object.getPrototypeOf(e)).call(this,e))}return function(r,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);r.prototype=Object.create(e&&e.prototype,{constructor:{value:r,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(r,e):r.__proto__=e)}(e,o),t(e,[{key:"html",get:function(){return'\n<style>\n:host {\n  --rh-card--padding:                          calc(var(--rh-theme--container-spacer, 1rem) * 2);\n  --rh-card_header--size:                      var(--rh-theme--font-size--heading--gamma, 21px);\n  --rh-card--bg:                               var(--rh-theme--color--surface--base, #dfdfdf);\n  --rh-broadcasted--color--text:               var(--rh-theme--color--surface--base--text, #333);\n  --rh-broadcasted--color--ui-link:            var(--rh-theme--color--surface--base--link, #00538c);\n  --rh-broadcasted--color--ui-link--visited:   var(--rh-theme--color--surface--base--link--visited, #7551a6);\n  --rh-broadcasted--color--ui-link--hover:     var(--rh-theme--color--surface--base--link--hover, #00305b);\n  --rh-broadcasted--color--ui-link--focus:     var(--rh-theme--color--surface--base--link--focus, #00305b);\n  display: flex;\n  flex-direction: column;\n  justify-items: flex-start;\n  padding: var(--rh-card--padding);\n  border: var(--rh-theme--surface--border-width, 1px) var(--rh-theme--surface--border-style, solid) transparent;\n  border-radius: var(--rh-theme--surface--border-radius, 0);\n  background: var(--rh-card--bg);\n  color: var(--rh-broadcasted--color--text); }\n\na {\n  color: var(--rh-broadcasted--color--ui-link); }\n\na:visited {\n  color: var(--rh-broadcasted--color--ui-link--visited); }\n\na:hover {\n  color: var(--rh-broadcasted--color--ui-link--hover); }\n\na:focus {\n  color: var(--rh-broadcasted--color--ui-link--focus); }\n\n:host([color="dark"]) {\n  --rh-card--bg:                               var(--rh-theme--color--surface--darker, #464646);\n  --rh-broadcasted--color--text:               var(--rh-theme--color--surface--darker--text, #fff);\n  --rh-broadcasted--color--ui-link:            var(--rh-theme--color--surface--darker--link, #99ccff);\n  --rh-broadcasted--color--ui-link--visited:   var(--rh-theme--color--surface--darker--link--visited, #b38cd9);\n  --rh-broadcasted--color--ui-link--hover:     var(--rh-theme--color--surface--darker--link--hover, #cce6ff);\n  --rh-broadcasted--color--ui-link--focus:     var(--rh-theme--color--surface--darker--link--focus, #cce6ff); }\n\n:host([color="darkest"]) {\n  --rh-card--bg:                               var(--rh-theme--color--surface--darkest, #131313);\n  --rh-broadcasted--color--text:               var(--rh-theme--color--surface--darkest--text, #fff);\n  --rh-broadcasted--color--ui-link:            var(--rh-theme--color--surface--darkest--link, #99ccff);\n  --rh-broadcasted--color--ui-link--visited:   var(--rh-theme--color--surface--darkest--link--visited, #b38cd9);\n  --rh-broadcasted--color--ui-link--hover:     var(--rh-theme--color--surface--darkest--link--hover, #cce6ff);\n  --rh-broadcasted--color--ui-link--focus:     var(--rh-theme--color--surface--darkest--link--focus, #cce6ff); }\n\n:host([color="light"]) {\n  --rh-card--bg:                               var(--rh-theme--color--surface--lighter, #ececec);\n  --rh-broadcasted--color--text:               var(--rh-theme--color--surface--lighter--text, #333);\n  --rh-broadcasted--color--ui-link:            var(--rh-theme--color--surface--lighter--link, #06c);\n  --rh-broadcasted--color--ui-link--visited:   var(--rh-theme--color--surface--lighter--link--visited, rebeccapurple);\n  --rh-broadcasted--color--ui-link--hover:     var(--rh-theme--color--surface--lighter--link--hover, #003366);\n  --rh-broadcasted--color--ui-link--focus:     var(--rh-theme--color--surface--lighter--link--focus, #003366); }\n\n:host([color="lightest"]) {\n  --rh-card--bg:                               var(--rh-theme--color--surface--lightest, #fff);\n  --rh-broadcasted--color--text:               var(--rh-theme--color--surface--lightest--text, #333);\n  --rh-broadcasted--color--ui-link:            var(--rh-theme--color--surface--lightest--link, #06c);\n  --rh-broadcasted--color--ui-link--visited:   var(--rh-theme--color--surface--lightest--link--visited, rebeccapurple);\n  --rh-broadcasted--color--ui-link--hover:     var(--rh-theme--color--surface--lightest--link--hover, #003366);\n  --rh-broadcasted--color--ui-link--focus:     var(--rh-theme--color--surface--lightest--link--focus, #003366); }\n\n:host([color="complement"]) {\n  --rh-card--bg:                               var(--rh-theme--color--surface--complement, #0477a4);\n  --rh-broadcasted--color--text:               var(--rh-theme--color--surface--complement--text, #fff);\n  --rh-broadcasted--color--ui-link:            var(--rh-theme--color--surface--complement--link, #99ccff);\n  --rh-broadcasted--color--ui-link--visited:   var(--rh-theme--color--surface--complement--link--visited, #b38cd9);\n  --rh-broadcasted--color--ui-link--hover:     var(--rh-theme--color--surface--complement--link--hover, #cce6ff);\n  --rh-broadcasted--color--ui-link--focus:     var(--rh-theme--color--surface--complement--link--focus, #cce6ff); }\n\n:host([color="accent"]) {\n  --rh-card--bg:                               var(--rh-theme--color--surface--accent, #fe460d);\n  --rh-broadcasted--color--text:               var(--rh-theme--color--surface--accent--text, #fff);\n  --rh-broadcasted--color--ui-link:            var(--rh-theme--color--surface--accent--link, #99ccff);\n  --rh-broadcasted--color--ui-link--visited:   var(--rh-theme--color--surface--accent--link--visited, #b38cd9);\n  --rh-broadcasted--color--ui-link--hover:     var(--rh-theme--color--surface--accent--link--hover, #cce6ff);\n  --rh-broadcasted--color--ui-link--focus:     var(--rh-theme--color--surface--accent--link--focus, #cce6ff); }\n\n:host([size="small"]) {\n  --rh-card--padding:        var(--rh-theme--container-spacer, 1rem); }\n\n.rh-card__header,\n.rh-card__body,\n.rh-card__footer {\n  display: block;\n  margin: 0; }\n\n.rh-card__header::slotted(h1:first-child),\n.rh-card__header::slotted(h2:first-child),\n.rh-card__header::slotted(h3:first-child),\n.rh-card__header::slotted(h4:first-child),\n.rh-card__header::slotted(h5:first-child),\n.rh-card__header::slotted(h6:first-child) {\n  margin-top: 0 !important;\n  font-size: var(--rh-card_header--size); }\n\n.rh-card__body::slotted(*:nth-child(2)) {\n  margin-top: 0 !important; }\n\n.rh-card__footer {\n  margin-top: auto;\n  justify-self: flex-end; }\n</style>\n<slot class="rh-card__header" name="header"></slot>\n<slot class="rh-card__body"></slot>\n<slot class="rh-card__footer" name="footer"></slot>'}},{key:"styleUrl",get:function(){return"rh-card.scss"}},{key:"templateUrl",get:function(){return"rh-card.html"}}],[{key:"tag",get:function(){return"rh-card"}}]),e}();return o.create(r),r});
//# sourceMappingURL=rh-card.umd.js.map

!function(r,t){"object"==typeof exports&&"undefined"!=typeof module?module.exports=t(require("../rhelement/rhelement.umd.js")):"function"==typeof define&&define.amd?define(["../rhelement/rhelement.umd.js"],t):r.RhCta=t(r.RHElement)}(this,function(e){"use strict";e=e&&e.hasOwnProperty("default")?e.default:e;var o=function(){function o(r,t){for(var e=0;e<t.length;e++){var o=t[e];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(r,o.key,o)}}return function(r,t,e){return t&&o(r.prototype,t),e&&o(r,e),r}}(),r=function(r){function t(){return function(r,t){if(!(r instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),function(r,t){if(!r)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?r:t}(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,t))}return function(r,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);r.prototype=Object.create(t&&t.prototype,{constructor:{value:r,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(r,t):r.__proto__=t)}(t,e),o(t,[{key:"html",get:function(){return'\n<style>\n:host {\n  --rh-cta--main:                     var(--rh-theme--color--ui-link, #06c);\n  --rh-cta--main--hover:              var(--rh-theme--color--ui-link--hover, #003366);\n  --rh-cta--main--focus:              var(--rh-theme--color--ui-link--focus, #003366);\n  --rh-cta--main--visited:            var(--rh-theme--color--ui-link--visited, rebeccapurple);\n  --rh-cta--aux:                      transparent;\n  --rh-cta--aux--hover:               transparent;\n  display: inline-block;\n  font-weight: bold; }\n  :host ::slotted(a) {\n    line-height: inherit;\n    color: var(--rh-cta--main) !important;\n    transition: all var(--rh-theme--animation-timing, cubic-bezier(0.465, 0.183, 0.153, 0.946)); }\n    :host ::slotted(a)::after {\n      display: block;\n      margin-left: calc(var(--rh-theme--content-spacer, 1rem) * 0.25);\n      vertical-align: middle;\n      border-style: solid;\n      border-width: 0.313em 0.313em 0;\n      border-color: transparent;\n      border-top-color: var(--rh-cta--main);\n      transform: rotate(-90deg);\n      display: inline-block;\n      content: ""; }\n  :host ::slotted(a:hover) {\n    color: var(--rh-cta--main--hover) !important; }\n    :host ::slotted(a:hover)::after {\n      border-top-color: var(--rh-cta--main--hover); }\n  :host ::slotted(a:focus) {\n    color: var(--rh-cta--main--focus) !important; }\n    :host ::slotted(a:focus)::after {\n      border-top-color: var(--rh-cta--main--focus); }\n\n:host([priority="primary"]) {\n  --rh-cta--main:          var(--rh-theme--color--ui-accent, #fe460d);\n  --rh-cta--main--hover:   var(--rh-theme--color--ui-accent--hover, #a42701);\n  --rh-cta--aux:           var(--rh-theme--color--ui-accent--text, #fff);\n  --rh-cta--aux--hover:    var(--rh-theme--color--ui-accent--text--hover, #fff); }\n  :host([priority="primary"]) ::slotted(a) {\n    display: inline-block;\n    padding: calc(var(--rh-theme--container-padding, 1rem) * 0.5) calc(var(--rh-theme--container-padding, 1rem) * 2);\n    border-radius: calc(var(--rh-theme--ui--border-radius, 2px) * 20);\n    border: var(--rh-theme--ui--border-width, 1px) var(--rh-theme--ui--border-style, solid) transparent;\n    text-decoration: none;\n    line-height: 1.2;\n    border-color: var(--rh-cta--main) !important;\n    background: var(--rh-cta--main) !important;\n    color: var(--rh-cta--aux) !important; }\n    :host([priority="primary"]) ::slotted(a)::after {\n      display: none; }\n  :host([priority="primary"]) ::slotted(a:hover),\n  :host([priority="primary"]) ::slotted(a:focus) {\n    border-color: var(--rh-cta--main--hover) !important;\n    background: var(--rh-cta--main--hover) !important;\n    color: var(--rh-cta--aux--hover) !important; }\n\n:host([priority="secondary"]) {\n  --rh-cta--main:          var(--rh-theme--color--ui-base, #0477a4);\n  --rh-cta--main--hover:   var(--rh-theme--color--ui-base--hover, #022f40);\n  --rh-cta--aux:           var(--rh-theme--color--ui-base--text, #fff);\n  --rh-cta--aux--hover:    var(--rh-theme--color--ui-base--text--hover, #fff); }\n  :host([priority="secondary"]) ::slotted(a) {\n    display: inline-block;\n    padding: calc(var(--rh-theme--container-padding, 1rem) * 0.5) calc(var(--rh-theme--container-padding, 1rem) * 2);\n    border-radius: calc(var(--rh-theme--ui--border-radius, 2px) * 20);\n    border: var(--rh-theme--ui--border-width, 1px) var(--rh-theme--ui--border-style, solid) var(--rh-cta--main);\n    text-decoration: none;\n    line-height: 1.2;\n    border-color: var(--rh-cta--main) !important;\n    background: var(--rh-cta--aux) !important;\n    color: var(--rh-cta--main) !important; }\n    :host([priority="secondary"]) ::slotted(a)::after {\n      display: none; }\n  :host([priority="secondary"]) ::slotted(a:hover),\n  :host([priority="secondary"]) ::slotted(a:focus) {\n    border-color: var(--rh-cta--main--hover) !important;\n    background: var(--rh-cta--main--hover) !important;\n    color: var(--rh-cta--aux--hover) !important; }\n\n:host([on="dark"]) {\n  --rh-cta--main:        var(--rh-theme--color--text--on-dark, #fff);\n  --rh-cta--main--hover: var(--rh-theme--color--ui-link--on-dark--hover, #cce6ff);\n  --rh-cta--aux:         transparent;\n  --rh-cta--aux--hover:  transparent; }\n\n:host([on="dark"][priority="primary"]) {\n  --rh-cta--main:        var(--rh-theme--color--ui-accent--text, #fff);\n  --rh-cta--main--hover: var(--rh-theme--color--ui-accent--text--hover, #fff);\n  --rh-cta--aux:         var(--rh-theme--color--ui-accent, #fe460d);\n  --rh-cta--aux--hover:  var(--rh-theme--color--ui-accent--hover, #a42701); }\n\n:host([on="dark"][priority="secondary"]) {\n  --rh-cta--main:        var(--rh-theme--color--ui-base--text, #fff);\n  --rh-cta--main--hover: var(--rh-theme--color--ui-base--text--hover, #fff);\n  --rh-cta--aux:         transparent;\n  --rh-cta--aux--hover:  var(--rh-theme--color--ui-base--hover, #022f40); }\n\n:host([color="base"]) {\n  --rh-cta--main:        var(--rh-theme--color--ui-base, #0477a4) !important;\n  --rh-cta--main--hover: var(--rh-theme--color--ui-base--hover, #022f40) !important;\n  --rh-cta--aux:         var(--rh-theme--color--ui-base--text, #fff) !important;\n  --rh-cta--aux--hover:  var(--rh-theme--color--ui-base--text--hover, #fff) !important; }\n\n:host([color="complement"]) {\n  --rh-cta--main:        var(--rh-theme--color--ui-complement, #464646) !important;\n  --rh-cta--main--hover: var(--rh-theme--color--ui-complement--hover, #131313) !important;\n  --rh-cta--aux:         var(--rh-theme--color--ui-complement--text, #fff) !important;\n  --rh-cta--aux--hover:  var(--rh-theme--color--ui-complement--text--hover, #fff) !important; }\n\n:host([color="accent"]) {\n  --rh-cta--main:        var(--rh-theme--color--ui-accent, #fe460d) !important;\n  --rh-cta--main--hover: var(--rh-theme--color--ui-accent--hover, #a42701) !important;\n  --rh-cta--aux:         var(--rh-theme--color--ui-accent--text, #fff) !important;\n  --rh-cta--aux--hover:  var(--rh-theme--color--ui-accent--text--hover, #fff) !important; }\n</style>\n<slot></slot>'}},{key:"styleUrl",get:function(){return"rh-cta.scss"}},{key:"templateUrl",get:function(){return"rh-cta.html"}}],[{key:"tag",get:function(){return"rh-cta"}}]),o(t,[{key:"connectedCallback",value:function(){(function r(t,e,o){null===t&&(t=Function.prototype);var a=Object.getOwnPropertyDescriptor(t,e);if(void 0===a){var n=Object.getPrototypeOf(t);return null===n?void 0:r(n,e,o)}if("value"in a)return a.value;var i=a.get;return void 0!==i?i.call(o):void 0})(t.prototype.__proto__||Object.getPrototypeOf(t.prototype),"connectedCallback",this).call(this);var r=this.children[0];r?r&&"a"!==r.tagName.toLowerCase()?console.warn("The first child in the light DOM must be an anchor tag (<a>)"):this.link=this.querySelector("a"):console.warn("The first child in the light DOM must be an anchor tag (<a>)")}},{key:"disconnectedCallback",value:function(){}}]),t}();return e.create(r),r});
//# sourceMappingURL=rh-cta.umd.js.map

;/*})'"*/
;/*})'"*/
var rh = rh || {}; rh.webrh = rh.webrh || {}; ( function($){ rh.webrh.load = function( context ){//--- Global utility variables
rh.webrh.utils = {
    lg: function () {
        return $( window ).width() >= 1200;
    },
    md: function () {
        return $( window ).width() >= 992 && $( window ).width() < 1200;
    },
    sm: function () {
        return $( window ).width() >= 768 && $( window ).width() < 992;
    },
    xs: function () {
        return $( window ).width() >= 480 && $( window ).width() < 768;
    },
    xxs: function () {
        return $( window ).width() < 480;
    },
    getHeight: function () {
        return $( window ).height();
    },
    getWidth: function () {
        return $( window ).width();
    },
    getElHeight: function( element ) {
        var height = 0;
        if ( $(element).length > 0 ) {
             height = $(element).outerHeight();
        }
        return height;
    },
    breakpoints: [ "xxs", "xs", "sm", "md", "lg" ],
    url: {
        root: window.location.hostname,
        path: window.location.pathname.split( "/" )
    }
};
rh.webrh.scrollToTop = function( $el, afterFunction ) {
    $( "html, body" ).animate( {
        scrollTop: $( "body" ).position().top + "px"
    }, 1200, "linear", afterFunction );
};
rh.webrh.menu = {
    attr: {
        toggleID: "data-rh-toggle-id",
        state: "data-rh-state",
        expanded: "aria-expanded",
        hidden: "aria-hidden",
        selected: "aria-selected",
        toggleOpen: "data-rh-toggle-open",
        scroll: "data-rh-scroll-to",
        stickyState: "data-rh-sticky-state",
        menu: "data-rh-menu",
        menuContext: "data-rh-menu-context",
        menuType: "data-rh-menu-main-type",
        navLabel: "data-rh-navigation-label",
        navType: "data-rh-navigation-type",
        navLink: "data-rh-navigation-link-for",
        subType: "data-rh-nav-subtype",
        menuID: "data-rh-menu-id",
        hasDynamic: "data-rh-dynamic"
    },
    classes: {
        hashValue: "rh-band-header-hash",
        bandLayout: "rh-band--layout"
    },
    nav: {
        $static: $( "[data-rh-menu]", context ),
        $fixed: $( "[data-rh-menu=\"fixed\"]", context ),
        $dynamic: $( "[data-rh-menu=\"dynamic\"]", context ),
        $drupalNav: $( "#main-nav-wrap", context )
    },
    // This is the height at which the sticky nav will fire
    fireNavHeight: function ( $nav ) {
        var offset = 0;
        var bpCheck = true;
        var height = 0;
        var isSecondary;
        if ( typeof $nav !== "undefined" && $nav.length > 0 ) {
            isSecondary = $nav.has( "[" + this.attr.menuType + "=\"secondary\"]" ).length > 0;
            if ( typeof rh.webrh.utils !== "undefined" ) {
                bpCheck = rh.webrh.utils.sm() || rh.webrh.utils.md() || rh.webrh.utils.lg();
                height = rh.webrh.utils.getElHeight( "#main-nav-wrap" );
            } else {
                height = $( "#main-nav-wrap" ).outerHeight();
            }
            // If the secondary-nav-bar, set offset to be under the main menu
            if ( isSecondary && bpCheck) {
                offset = $nav.offset().top - height;
            } else {
                offset = $nav.outerHeight() + $nav.offset().top;
            }
        }
        return offset;
    },
    // Set the static nav to indicate if it's in a fixed state
    isFixed: function ( $static ) {
        var state = false,
            id = $static.attr( this.attr.menuID ),
            hidden = $static.prev( "[" + this.attr.menuID + "=\"" + id + "\"]" ).attr( this.attr.hidden );
        if ( typeof hidden !== "undefined" ) {
            state = hidden !== "true";
        }
        return state;
    },
    // Return dropdown menu to closed when fixing or un-fixing the nav
    closeDropdown: function ( $context ) {
        var $button,
            $buttons = $context.find( "[" + this.attr.toggleOpen + "]" );
        $buttons.each( function ( idx, button ) {
            $button = $( button );
            // If the toggle functions exist...
            if ( typeof rh.webrh.toggle !== "undefined" ) {
                // Check if the state is open
                if ( rh.webrh.toggle.checkState( $button ) === "open" ) {
                    // If it is, toggle that state to closed
                    rh.webrh.toggle.element( { trigger: $button, target: $( "#" + $button.attr( this.attr.toggleID ), $context ) }, true );
                }
            }
        }.bind( this ) );
    },
    // Close the dropdown and slide the fixed navigation up or down depending on state
    toggleFixed: function ( $staticNav, $fixed, state ) {
        // Close dropdowns
        this.closeDropdown( state ? $staticNav : $fixed );
        $fixed.slideToggle().attr( this.attr.hidden, !state );
        return state;
    },
    // This is optional step 1 on page load: build the navigation dynamically
    buildDynamic: function ( $dynamic ) {
        var done = false;
        var hasLinks = false;
        var hasFeaturedLink = false;
        var $mainLinks = $( "[" + this.attr.menuContext + "=\"main-links\"]", $dynamic );
        var $template = $( "[aria-template=\"true\"]", $mainLinks );
        var $parent = $template.parent();
        var $trigger;
        var $listItem;
        var $link;
        var $externalLink;
        var $lastChild;

        // Find the bands on the page with dynamic navigation triggers
        $( "[" + this.attr.navLabel + "]", context ).each( function ( idx, trigger ) {
            var link = {};
            link.isFeatured = false;
            $trigger = $( trigger );
            // Get the label value
            link.label = $trigger.attr( this.attr.navLabel );
            // Get the ID value to link to it from the navigation
            link.hash = $trigger.find( "." + this.classes.hashValue ).attr( "id" );
            // Prepend in advance with the anchor tag
            if ( typeof link.hash !== "undefined" ) {
                link.hash = "#" + link.hash;
            }
            // Check if this is a "featured" link
            if ( $trigger.attr( this.attr.navType ) === "featured" ) {
                link.isFeatured = true;
                hasFeaturedLink = true;
                $externalLink = $trigger.find( "[ " + this.attr.navLink + "=\"featured\"] a" );
                if ( $externalLink.length > 0 ) {
                    link.href = $externalLink[ 0 ].href;
                }
            }
            // If the label value exists
            if ( typeof link.label !== "undefined" ) {
                //-- Add the waypoint triggers
                // Scroll down trigger
                $trigger.waypoint( {
                    handler: function ( direction ) {
                        if ( direction === "down" ) {
                            rh.webrh.menu.waypointEvent( link.label );
                        }
                    },
                    offset: function() {
                        // TODO This could be calculated once after the fixed nav is built and stored
                        return rh.webrh.menu.determineScrollOffset();
                    }
                } );

                // Scroll up trigger
                $trigger.waypoint( {
                    handler: function ( direction ) {
                        if ( direction === "up" ) {
                            rh.webrh.menu.waypointEvent( link.label );
                        }
                    },
                    // Return half of the current sticky menu height
                    offset: function() {
                        // -- For scrolling up, active when half of the section is viewable under the sticky navs
                        return ( Waypoint.viewportHeight() / 2 ) - rh.webrh.menu.determineScrollOffset() - this.clientHeight;
                    }
                } );

                //-- Copy the navigation template and add in the new values
                // Clone the template list item
                $listItem = $template.clone().removeAttr( "aria-template" );
                // Update the values to match the label and link
                $link = $listItem.find( "a" ).attr( "href", ( typeof link.href === "undefined" ) ? link.hash : link.href ).attr( "title", link.label ).text( link.label );
                if ( link.isFeatured ) {
                    $link.attr( this.attr.subType, "ghost" );
                } else {
                    $link.attr( this.attr.subType, "standard" );
                }
                // If there is a featured link but it's not this one
                if ( hasFeaturedLink && !link.isFeatured ) {
                    // Get the last element in the list
                    $lastChild = $parent.find( "li:last-child" );
                    // And insert this before it
                    $listItem.insertBefore( $lastChild );
                    hasLinks = true;
                } else {
                    // Add the new list item to the end of the parent element
                    $parent.append( $listItem );
                    hasLinks = true;
                }
            }
        }.bind( this ) );

        if ( hasLinks ) {
            // Rename the template attribute to navigation and remove the hidden state
            $parent.attr( "aria-label", "navigation" ).removeAttr( "aria-hidden" );
            // Remove the first child element which is the original template
            $template.remove();
            // Update the attribute to trigger the sticky nav builder in optional step 2
            $dynamic.attr( this.attr.menu, "initial" ).removeAttr( "aria-hidden" );
            done = true;
        }
        return done;
    },
    // This is optional step 2 on page load: build the sticky navigation
    buildMobile: function ( $menu ) {
        var status = false,
            $mobileContainer = $( "[" + this.attr.menuContext + "=\"dropdown-mobile\"]", $menu ),
            mainContent = $( "[" + this.attr.menuContext + "=\"main-links\"]", $menu ).html(),
            utilityContent = $( "[" + this.attr.menuContext + "=\"utility-links\"]", $menu ).html(),
            fullLinkSet = "";
        if ( typeof $mobileContainer !== "undefined" ) {
            fullLinkSet += typeof mainContent !== "undefined" ? mainContent : "";
            fullLinkSet += typeof utilityContent !== "undefined" ? utilityContent : "";
            // Copy content from the desktop container into the mobile container
            $mobileContainer.html( fullLinkSet );
            status = true;
        }
        return status;
    },
    // This is optional step 2 on page load: build the sticky navigation
    buildSticky: function ( $fixed ) {
        var status = false,
            $target,
            oldID,
            newID;
        // Find the old id of the mobile navigation items and postfix them with "-fixed"
        $fixed.find( "[" + this.attr.toggleID + "]" ).each( function ( idx, target ) {
            $target = $( target );
            // Get old ID of the target element
            oldID = $target.attr( this.attr.toggleID );
            // Create a new ID with -fixed postfixed to the string
            newID = oldID + ( oldID ? "-" : "" ) + "fixed";
            // Assign this to the fixed navigation child
            $target.attr( this.attr.toggleID, newID );
            $fixed.find( "#" + oldID ).attr( "id", newID );
            status = true;
        }.bind( this ) );
        // Add onclick event for scroll-to-top icon
        $( "[" + this.attr.scroll + "=\"top\"]", $fixed ).click( function ( event ) {
            event.preventDefault();
            if ( typeof rh.webrh.scrollToTop !== "undefined" ) {
                rh.webrh.scrollToTop( $fixed );
            }
        } );
        return status;
    },
    // Scroll event
    waypointEvent: function ( title ) {
        var $link;
        $.each( this.nav, function ( idx, menu ) {
            $link = $( menu ).find( "[title=\"" + title + "\"]" );
            $link.parent().siblings().children( "a" ).each( function ( idx, el ) {
                $( el ).attr( this.attr.selected, false );
            }.bind( this ) );
            $link.attr( this.attr.selected, true );
        }.bind( this ) );
    },
    // Scroll event tasks
    scrollEvent: function ( $window ) {
        // Close any open navigation windows on scroll
        // $.each( this.nav, function ( idx, menu ) {
        //     this.closeDropdown( $( menu ) );
        // }.bind( this ) );
        // Set rules for fixed nav interactions on scroll
        // If the top navigation is above the fold + 300px, show the sticky nav
        this.nav.$static.each( function ( idx, el ) {
            var $el = $( el ),
                id = $el.attr( this.attr.menuID ),
                $fixed = $el.prev( "[" + this.attr.menuID + "=\"" + id + "\"]" );
            if ( typeof $el !== "undefined" ) {
                if ( $window.scrollTop() > this.fireNavHeight( $el ) ) {
                    // Check if the sticky nav is already active, if not, trigger it and return true
                    if ( !this.isFixed( $el ) ) {
                        this.toggleFixed( $el, $fixed, true );
                    }
                } else {
                    // Check if the sticky nav is has already been turned off
                    // If it hasn't, trigger and return false
                    if ( this.isFixed( $el ) ) {
                        this.toggleFixed( $el, $fixed, false );
                    }
                }
            }
        }.bind( this ) );
    },
    // This recalculates the desired top position of secondary navigation
    setNavPosition: function ( $main, $secondary ) {
        var bpCheck = true,
            pos = 0;
        if ( typeof rh.webrh.utils !== "undefined" ) {
            bpCheck = rh.webrh.utils.sm() || rh.webrh.utils.md() || rh.webrh.utils.lg();
        }
        if ( bpCheck ) {
            pos = rh.webrh.utils.getElHeight( $main );
        }
        // Apply top position to nav
        $secondary.css( {
            top: pos + "px"
        } );
    },
    // Remove empty menu HTML in the event that there are no navigation labels
    removeEmptyMenu: function ( $menu ) {
        $menu.remove();
    },
    checkFold: function ( $menu, $window ) {
        var cssObj,
            zindex = 1000 + this.nav.$static.length,
            isSecondary = $menu.has( "[" + this.attr.menuType + "=\"secondary\"]" ),
            id = $menu.attr( this.attr.menuID ),
            $fixed = $menu.prev( "[" + this.attr.menuID + "=\"" + id + "\"]" ),
            $toTop = $fixed.find( "[" + this.attr.scroll + "=\"top\"]" ),
            printToTop = $toTop.length > 0,
            bpCheck = ( typeof rh.webrh.utils !== "undefined" ) ? rh.webrh.utils.sm() || rh.webrh.utils.md() || rh.webrh.utils.lg() : $window.outerWidth() > 768,
            height = ( typeof rh.webrh.utils !== "undefined" && isSecondary ) ? rh.webrh.utils.getElHeight( "#main-nav-wrap" ) : 0;
        // If secondary, set height so it sits under the main menu
        if ( isSecondary && bpCheck ) {
            zindex = 99;
        }
        cssObj = {
            "top": height + "px",
            "z-index": zindex
        };
        zindex = zindex - 1;
        // If there is more than 1 menu and this one is not the last one
        if ( this.nav.$static.length > 1 && this.nav.$static.last() !== $menu ) {
            cssObj.boxShadow = "none";
        }
        // Apply the css to the fixed nav
        $fixed.css( cssObj );
        // Set the height of the fixed nav
        height = $fixed.height();
        // Hide the to top element on the fixed nav
        if ( printToTop ) {
            $toTop.hide();
        }
        // Check if the sticky nav is already active, if not, trigger it
        if ( $window.scrollTop() > this.fireNavHeight( $menu ) && !this.isFixed( $menu ) ) {
            this.toggleFixed( $menu, $fixed, true );
        }
    },
    determineScrollOffset: function () {
        var offset;
        var isSecondary = false;
        var bpCheck = false;
        var navHeight = 65;
        var menuHeight = 85;
        if ( typeof this.nav.$fixed !== "undefined" && this.nav.$fixed.length > 0 ) {
            isSecondary = this.nav.$fixed.has( "[" + this.attr.menuType + "=\"secondary\"]" ).length > 0;
            navHeight = this.nav.$fixed.outerHeight();
        }
        if ( typeof rh.webrh.utils !== "undefined" &&
            typeof this.nav.$drupalNav !== "undefined" && this.nav.$drupalNav.length > 0 ) {
            bpCheck = rh.webrh.utils.sm() || rh.webrh.utils.md() || rh.webrh.utils.lg();
            menuHeight = rh.webrh.utils.getElHeight( this.nav.$drupalNav );
        } else {
            menuHeight = this.nav.$drupalNav.outerHeight();
        }
        // If the secondary-nav-bar, set offset to be under the main menu
        if ( isSecondary && bpCheck ) {
            offset = navHeight + menuHeight;
        } else {
            offset = menuHeight;
        }
        return offset;
    }
};

var $window = $( window ),
    menuObj = rh.webrh.menu;

// Build any dynamic navigation
if ( typeof menuObj.nav.$dynamic !== "undefined" && menuObj.nav.$dynamic.length > 0 ) {
    menuObj.nav.$dynamic.each( function ( idx, menu ) {
        menuObj.buildDynamic( $( menu ) );
    } );

    // Reset the value for the static nav element to reflect updates
    menuObj.nav.$static = $( "[data-rh-menu=\"initial\"]", context );
}

var reset = false;
// Check if the static nav exists
if ( typeof menuObj.nav.$static !== "undefined" && menuObj.nav.$static.length > 0 ) {
    // Build the mobile nav based on the desktop navigation
    menuObj.nav.$static.each( function ( idx, menu ) {
        reset = menuObj.buildMobile( $( menu ) );
    } );
    if ( reset ) {
        // Reset the value for the static nav element to reflect updates
        menuObj.nav.$static = $( "[data-rh-menu]", context );
        reset = false;
    }

    //-- Build the fixed nav based on the static navigation
    // Clone the static navigation and add a fixed attribute
    menuObj.nav.$static.each( function ( idx, menu ) {
        $( menu ).before( $( menu ).clone().attr( menuObj.attr.menu, "fixed" ).attr( menuObj.attr.hidden, true ) );
    } );
    // Get the fixed navigation elements
    menuObj.nav.$fixed = $( "[" + menuObj.attr.menu + "=\"fixed\"]", context );
    if ( typeof menuObj.nav.$fixed !== "undefined" && menuObj.nav.$fixed.length > 0 ) {
        menuObj.nav.$fixed.each( function ( idx, menu ) {
            reset = menuObj.buildSticky( $( menu ) );
        } );
        if ( reset ) {
            // Reset the value for the fixed nav element to reflect updates
            menuObj.nav.$fixed = $( "[" + menuObj.attr.menu + "=\"fixed\"]", context );
            reset = false;
        }
    }

    // On load event: add logic to determine if the page has loaded below the fold
    menuObj.nav.$static.each( function ( idx, el ) {
        menuObj.checkFold( $( el ), $window );
    } );

    // Add an onclick event to close the dropdowns when you click outside them
    $window.click( function () {
        // Close any open navigation windows on click
        $.each( menuObj.nav, function ( idx, menu ) {
            var $menu = $( menu );
            if ( typeof $menu !== "undefined" ) {
                menuObj.closeDropdown( $menu );
            }
        } );
    } );
    /* Cancel the event when you click inside the element, works in combination
        with the above event */
    $.each( menuObj.nav, function ( idx, menu ) {
        var $menu = $( menu );
        if ( typeof $menu !== "undefined" ) {
            // Set nav position
            menuObj.setNavPosition( menuObj.nav.$drupalNav, $( menu ), 100 );
            // Cancel click event
            $menu.click( function ( event ) {
                event.stopPropagation();
            } );
        }
    } );
    // Set the onscroll timer
    var scrollTimer = null;
    $window.scroll( function () {
        if ( scrollTimer ) {
            // Clear any previous pending timer
            clearTimeout( scrollTimer );
        }
        // Set new timer
        scrollTimer = setTimeout( menuObj.scrollEvent( $window ), 500 );
    } );
    // Set the onscroll timer
    var resizeTimer = null;
    $window.on( "resize", function () {
        if ( resizeTimer ) {
            // Clear any previous pending timer
            clearTimeout( resizeTimer );
        }
        // Set new timer
        var $main;
        $.each( menuObj.nav, function ( idx, menu ) {
            if ( menuObj.nav.$drupalNav !== "undefined" ) {
                $main = menuObj.nav.$drupalNav;
            } else {
                if ( $( "[" + menuObj.attr.navType + "='primary']", context ) !== "undefined" ) {
                    $main = $( "[" + menuObj.attr.navType + "='primary']", context );
                }
            }
            if ( typeof $( menu ) !== "undefined" ) {
                resizeTimer = setTimeout( menuObj.setNavPosition( $main, $( menu ), 100 ) );
            }
        } );
    } );
}

// If menu is set to be dynamic, but there are not any nav labels, remove any generated HTML
var hasLinks = $( "[" + menuObj.attr.navLabel + "]" ).length > 0,
    isDynamic = menuObj.nav.$dynamic.length > 0;
if ( !hasLinks && isDynamic ) {
    menuObj.nav.$dynamic.each( function ( idx, menu ) {
        menuObj.removeEmptyMenu( $( menu ) );
    } );
}
// Add focus to main content: https://www.bignerdranch.com/blog/web-accessibility-skip-navigation-links/
rh.webrh.skipNav = function ( skipTo ) {
    $( skipTo ).attr( "tabindex", -1 ).on( "blur focusout", function () {
        $( this ).removeAttr( "tabindex" );
    } ).focus();
};

rh.webrh.current = function ( link ) {
    $( link ).attr( "aria-current", "page" );
};

// Update the tabindex of the skip nav on click
$( "[data-rh-skip-nav]", context ).click( function () {
    rh.webrh.skipNav( $( this ).attr( "href" ) );
} );

// Add an aria label when the url matches the url of the current page
$( "a[href$=\"" + location.pathname.replace( /(en|fr|de|es|pt-br|ja|zh)\//i, "" ) + "\"]", context ).each( function ( idx, link ) {
    rh.webrh.current( link );
} );
rh.webrh.alignElement = {
    attr: {
        trigger: "data-rh-align-element",
        target: "data-rh-align-target",
        fill: "data-rh-align-fill",
        focalPoint: "data-rh-align-focal-point"
    },
    setDefault: function ( number, fallback ) {
        // if the number is not valid, use the fallback value, else use the provided number
        return isNaN( number ) ? fallback : number;
    },
    setPosition: function ( $trigger, $target ) {
        // This is the arrow object or the object to be centered
        var relation = $trigger.attr( this.attr.fill ),
            $focalPoint = $target.find( "[" + this.attr.focalPoint + "]" ).first(), // get focal point object (such as arrow)
            triggerMarginLeft = $trigger.css( "marginLeft" ),
            $relative,
            triggerWidth,
            focalWidth,
            relativeLeft,
            triggerLeft,
            targetLeft,
            focalLeft,
            marginTop;

        // Get width of containing element
        // Defaults to parent if relation is not specified
        if ( relation === "grandparent" ) {
            $relative = $trigger.parent().parent();
        } else if ( relation === "parent" ) {
            $relative = $trigger.parent();
        } else if ( relation === "self" ) {
            $relative = $trigger;
        } else {
            $relative = $target;
        }

        // Get left position of trigger element
        triggerWidth = parseInt( $trigger.outerWidth() );
        // Get left position of trigger element
        triggerLeft = parseInt( $trigger.position().left );
        // Get left position of relative element
        relativeLeft = parseInt( $relative.position().left );

        // Get height of the focal element
        focalWidth = $focalPoint.outerWidth();

        // Adjust top margin for the indicator arrow
        marginTop = parseInt( $trigger.parent().css( "marginBottom" ) ) * -1 + 5;
        // Focal left positioning
        targetLeft = triggerLeft - relativeLeft;

        // Set position of container element and adjust focal point
        if ( relation ) {
            focalLeft = targetLeft + ( triggerWidth / 2 - focalWidth / 2 );
            this.positionEl( $target, "width",  parseInt( $relative.outerWidth() ) );
            this.positionEl( $target, "marginLeft", targetLeft * -1 );
        } else {
            focalLeft = targetLeft - ( triggerWidth / 2 );
            this.positionEl( $target, "marginLeft", triggerWidth / 2 );
        }

        $focalPoint.css( "left", "calc(" + focalLeft + "px + " + triggerMarginLeft + ")" );
        this.positionEl( $target, "marginTop", marginTop );

        // Add the done indicator so that the tooltip is not unnecessarily updated
        $trigger.attr( this.attr.trigger, $trigger.attr( this.attr.trigger ) + " done" );
    },
    positionEl: function ( el, cssProp, measurement ) {
        $( el ).css( cssProp, ( measurement + "px" ) );
    },
    init: function ( $eventEl ) {
        var $triggers = $( "[" + this.attr.trigger + "]", $eventEl ),
            id,
            $trigger,
            $target;

        // If the $trigger element does not exist or is empty, set to the event
        if ( typeof $triggers !== "undefined" && $triggers.length < 1 ) {
            $triggers = $eventEl;
        }

        $.each( $triggers, function( idx, val ) {
            $trigger = $( val );
            // Check if the alignment should be run
            if ( ( $trigger.attr( this.attr.trigger ).indexOf( "done" ) !== 1 ) ) {
                // Get the trigger ID
                id = $trigger.attr( this.attr.trigger );
                // Get the target by the ID
                $target = $( "[" + this.attr.target + "=\"" + id + "\"]", context ).first();

                // If the trigger and target exist, set the position
                if ( $trigger.length > 0 && $target.length > 0 ) {
                    this.setPosition( $trigger, $target );
                }
            }
        }.bind( this ) );
    }
};
rh.webrh.bq = function(target) {
  var width = $(window).width();

      $(target).each(function() {
        var $this = $(this),
            backgrounds = $this.attr('data-rh-bq').split(',');
            
        if (width > 768) {
          background = backgrounds[0];
        }
        else if (backgrounds.length === 2) {
          background = backgrounds[1];
        }
        else {
          return false;
        }
        $this.css('background-image', 'url(' + background + ')');
      });
};

rh.webrh.bq('[data-rh-bq]');
// Carousel interactions
rh.webrh.carousel = {
    parent: ".rh-carousel--layout",
    switcher: {
        body: ".rh-carousel-body",
        slide: ".rh-carousel-slide--layout"
    },
    nav: {
        wrapper: ".rh-carousel-navigation",
        previous: ".rh-carousel-previous",
        next: ".rh-carousel-next",
    },
    attr: {
        state: "data-rh-state", // Valid values: previous, next, current
        background: "data-rh-background",
        theme: "data-rh-theme"
    },
    animation: {
        easing: "swing",
        speed: "2s"
    },
    // Get the current slide in the carousel
    getCurrentSlide: function ( $parent ) {
        // Try to get it by the current attribute
        var $current = $( this.switcher.slide + "[" + this.attr.state + "=\"current\"]", $parent );
        if ( typeof $current === "undefined" || $current.length < 1 ) {
            // If there is no current attribute, get the first slide in the stack
            $current = $( this.switcher.slide, $parent ).first();
        }
        return $current;
    },
    // Set parent height based on tallest child element
    setHeight: function( $parent ) {
        var $slide;
        var $copy;
        var height = 0;
        var $slides = $( this.switcher.slide, $parent );
        var max = 0;
        // Find the height of each slide
        $slides.each( function( idx, slide ) {
            $slide = $( slide );
            // Clone the slide to get real height
            $copy = $slide.clone().attr( "id", false );
            $copy.css( {
                visibility: "hidden",
                position: "absolute",
                display: "block",
                minHeight: "0"
            } );
            // Must add the clone to the document to get height
            $( "body" ).append( $copy );
            // Get the height
            height = $copy.height();
            // Remove the clone from the DOM
            $copy.remove();
            // If this height is greater than the max, use it instead
            max = ( height > max ) ? height : max;
        } );
        // If max is greater than 0, set the min-height of the slides and parent context
        if ( max > 0 ) {
            // Set the height to that of the tallest slide
            $slides.css( "min-height", max + "px" );
            $parent.css( "min-height", max + "px" );
        }
    },
    setTheme: function ( theme, $el, $fallback ) {
        // If the new slide doesn't have a theme, get the theme from the parent
        if ( typeof theme === "undefined" || !theme ) {
            theme = $fallback.attr( this.attr.theme );
        }
        // If the theme is still undefined, use light
        if ( typeof theme === "undefined" || !theme ) {
            theme = "light";
        }
        // Apply the theme to the element
        $el.attr( this.attr.theme, theme );
    },
    slide: function ( $current, direction ) {
        var $newCurrent;
        var $parent = $current.closest( this.parent );
        var $nav = $parent.find( this.nav.wrapper );
        var travel;
        var distance = "100%";
        // Grad the state attribute and assign locally
        var stateAttr = this.attr.state;
        // Grab the animation settings from the object and give them a local variable
        var easing = this.animation.easing;
        var duration = this.animation.speed;
        $current.css( {
            left: "0"
        } );
        if ( direction === "next" ) {
            // Set the travel direction
            travel = "-=";
            // Check that there is a next object
            $newCurrent = $current.next();
            // If there isn't a next object, get the first item in the stack
            if ( typeof $newCurrent === "undefined" || $newCurrent.length < 1 ) {
                $newCurrent = $current.siblings().first();
            }
            // Update the position of the element
            $newCurrent.css( {
                left: distance
            } );
        } else {
            // Set the travel direction
            travel = "+=";
            // Check that there is a previous sibling
            $newCurrent = $current.prev();
            // If there isn't a previous sibling, get the last item in the stack
            if ( typeof $newCurrent === "undefined" || $newCurrent.length < 1 ) {
                $newCurrent = $current.siblings().last();
            }
            // Update the position of the element
            $newCurrent.css( {
                left: "-" + distance
            } );
        }

        // Only animate if you have both the old and new element
        if ( $newCurrent.length > 0 ) {
            // Animate the current element
            $current.animate( {
                left: travel + distance
            }, {
                queue: false,
                easing: easing,
                duration: duration,
                complete: function() {
                    // Update the state attribute and hide from screen reader
                    $newCurrent.nextAll().attr( stateAttr, "next" ).attr( "aria-hidden", "true" );
                    $newCurrent.prevAll().attr( stateAttr, "previous" ).attr( "aria-hidden", "true" );
                }
            } );

            // Update the theme on the navigation elements
            this.setTheme( $newCurrent.attr( this.attr.theme ), $nav, $parent );

            // Animate the new current element
            $newCurrent.animate( {
                left: travel + distance
            }, {
                queue: false,
                easing: easing,
                duration: duration,
                complete: function() {
                    // Update the state attribute and show to screen reader
                    $( this ).attr( stateAttr, "current" ).attr( "aria-hidden", "false" );
                }
            } );
        }
    },
    init: function ( $parent ) {
        var $slides = $( this.switcher.slide, $parent );
        var slideCount = $slides.length;
        var $current;
        var $nav;
        // Set up carousel states
        if ( typeof slideCount !== "undefined" && slideCount > 1 ) {
            // If there are more than 2 slides, show the navigation
            $( this.nav.wrapper, $parent ).show();
            // Set the height of the container
            this.setHeight( $parent );
            // Set all slides to the next state
            $slides.attr( this.attr.state, "next" ).attr( "aria-hidden", "true" );
            // Set the first slide to the current state
            $current = $slides.first().attr( this.attr.state, "current" ).attr( "aria-hidden", "false" );
            // Set the theme on the navigation
            $nav = $current.closest( this.parent ).find( this.nav.wrapper );
            this.setTheme( $current.attr( this.attr.theme ), $nav, $parent );
        }
    },
    onclick: function ( $button ) {
        var carouselID = $button.closest( this.parent ).attr( "id" );
        var $current = this.getCurrentSlide( $( "#" + carouselID ) );
        var direction = $button.attr( "aria-label" );
        if ( typeof $current !== "undefined" && $current.length > 0 ) {
            this.slide( $current, direction );
        }
    }
};

// On load, set up the carousel
// Loop through all carousel layouts on the page
$( rh.webrh.carousel.parent, context ).each( function( idx, el ) {
    // Initialize each carousel
    rh.webrh.carousel.init( $( el ) );
} );

// Set the resize timer
var resizeTimer = null;
window.addEventListener( "resize", function () {
    if ( resizeTimer ) {
        // Clear any previous pending timer
        clearTimeout( resizeTimer );
    }
    // Loop through all carousel layouts on the page
    $( rh.webrh.carousel.parent, context ).each( function( idx, el ) {
        resizeTimer = setTimeout( rh.webrh.carousel.setHeight( $( el ) ), 500 );
    } );
} );

// Listen for orientation changes
window.addEventListener( "orientationchange", function() {
    // Loop through all carousel layouts on the page
    $( rh.webrh.carousel.parent, context ).each( function( idx, el ) {
        rh.webrh.carousel.setHeight( $( el ) );
    } );
}, false);

// On click for the previous and next button, move to the appropriate slide
$( rh.webrh.carousel.nav.previous + ", " + rh.webrh.carousel.nav.next, context ).click( function() {
    rh.webrh.carousel.onclick( $( this ) );
} );
rh.webrh.emphasize = {
    attr: {
        trigger: "data-rh-emphasis"
    },
    set: function( $el ) {
        var state = $el.attr( this.attr.trigger );
        // First, reset all toggle states to inactive.
        this.reset();
        // Next, change the selected item to primary if it's set to inactive or background.
        if ( state === "inactive" || state === "background" ) {
            $el.attr( this.attr.trigger, "primary" ).siblings().attr( this.attr.trigger, "background" );
        } else {
            this.reset();
        }
    },
    reset: function() {
        $( "[" + this.attr.trigger + "]", context ).attr( this.attr.trigger, "inactive" );
    }
};

// Valid states are primary, background, and inactive
$( "[" + rh.webrh.emphasize.attr.trigger + "]", context ).each( function ( idx, val ) {
    var $val = $( val );
    // On load set all to inactive
    $val.attr( rh.webrh.emphasize.attr.trigger, "inactive" );
    // On click, set trigger to primary and siblings to background
    $val.click( function () {
        rh.webrh.emphasize.set( $val );
    } );
} );

// On clicking outside all elements, reset to inactive
$( document ).click( function( evt ) {
    if ( !$( evt.target ).closest( "[" + rh.webrh.emphasize.attr.trigger + "]" ).length ) {
        rh.webrh.emphasize.reset();
    }
} );
rh.webrh.reveal = {
    attr: {
        trigger: "data-rh-reveal",
        count: "data-rh-reveal-by",
        state: "data-rh-state",
        container: "data-rh-reveal-container"
    },
    countHidden: function ( items ) {
        var myself = this,
            count = 0;
        if ( Array.isArray( items ) ) {
            $.each( items, function ( key, value ) {
                if ( $( value ).attr( myself.attr.state ) === "hidden" ) {
                    count += 1;
                }
            } );
        }
        return count;
    },
    onclick: function ( id, count, $trigger ) {
        var child,
            $parent = $( "[" + this.attr.container + "=" + id + "]", context ),
            hiddenChildren = $( "[" + this.attr.state + "=hidden]", $parent );
        // Use the count variable to reveal more items
        if ( typeof count === "number" ) {
            if ( hiddenChildren.length > 0 ) {
                for ( var i = 0; i < count; i += 1 ) {
                    child = hiddenChildren[ i ];
                    if ( typeof child !== "undefined" ) {
                        $( child ).attr( this.attr.state, "visible" );
                    }
                }
            }
        } else {
            $( "[" + this.attr.state + "=hidden]", $parent ).show().attr( this.attr.state, "visible" );
        }
        if ( this.countHidden( hiddenChildren ) === 0 ) {
            $trigger.hide();
        }
    }
};

$( "[" + rh.webrh.reveal.attr.trigger + "]", context ).click( function () {
    rh.webrh.reveal.onclick( $( this ).attr( rh.webrh.reveal.attr.trigger ), $( this ).attr( rh.webrh.reveal.attr.count ), $( this ) );
} );
rh.webrh.setYear = function ( $el, when ) {
    if ( when === "now" ) {
        $el.text( new Date().getFullYear() );
    }
};

$( "[data-rh-year]" ).each(function( index, value ) {
    rh.webrh.setYear( $( value ), $( value ).attr( "data-rh-year" ) );
});
/* ----- SMOOTH SCROLL ----- */
rh.webrh.smoothScroll = {
    meta: {
        attrUniqueID: "data-rh-unique-id",
        classMenu: ".rh-menu"
    },
    // If the element is empty, try a different property to find that element
    ifEmpty: function( el, propName, hash ) {
        return el.length > 0 ? el : $( "[" + propName + "=\"" + hash.slice( 1 ) + "\"]", context );
    },
    // Toggles all sibling states to false and the targeted element to true
    toggleActiveState: function ( $siblings, $target ) {
        // Set all sibling links to inactive
        $siblings.attr( "aria-selected", false );
        // Set the clicked link as active
        $target.attr( "aria-selected", true );
    },
    // Smooth scroll animate to the target location
    scroll: function( $target, offsetTop ) {
        if ( typeof $target !== "undefined" && $target.length > 0 ) {
            $( "html, body" ).stop().animate( {
                scrollTop: $target.offset().top - offsetTop
            }, 500, "swing", function() {
                // Callback after animation to change focus
                $target.focus();
                // Check that the target was focused
                if ( $target.is( ":focus" ) ) {
                    return false;
                } else {
                    // Add tabindex for elements that are not focusable
                    $target.attr( "tabindex", "-1" );
                    // Set focus again
                    $target.focus();
                }
            } );
        }
    },
    isValidHash: function( hash ) {
        // Create a regular expression to test the first item in the hash string
        var regex = new RegExp("[a-zA-Z0-9_]");
        // Grab the last anchor tag location from the hash string
        var anchorLoc = hash.lastIndexOf( "#" ) < 0 ? 0 : hash.lastIndexOf( "#" );
        // Check that the hash value is valid and has an element on the DOM
        return regex.test( hash.slice( anchorLoc, anchorLoc + 1 ) ) && ( document.getElementById( hash ) !== null || document.getElementsByName( hash ).length > 0 );
    },
    trigger: function( evt ) {
        var hash;
        var $trigger;
        if ( typeof evt === "undefined" || typeof evt.target === "undefined" || typeof evt.target.hash === "undefined" ) {
            hash = decodeURIComponent( window.location.hash.substr( 1 ) );
        } else {
            hash = decodeURIComponent( evt.target.hash.substr( 1 ) );
            $trigger = $( evt );
            evt.preventDefault();
        }
        if ( hash && this.getTarget( hash ) && !hash.endsWith( "-tray" ) ) {
            this.fire( $trigger, hash );
        }
    },
    // Get the target element
    getTarget: function ( hash ) {
        // Only run this if the hash value is a valid anchor
        if ( this.isValidHash( hash ) ) {
            var $target = $( "#" + hash, context );
            // If it can't find the value by #id, try the name property...
            $target = this.ifEmpty( $target, "name", hash );
            // If it still can't find the value, try the unique-id attribute for FTS
            return this.ifEmpty( $target, this.meta.attrUniqueID, hash );
        }

    },
    // Fire the smooth scroll event
    fire: function( $trigger, hash) {
        var $target = this.getTarget( hash );
        var offset = 0;
        this.toggleActiveState( $( this.anchors, context ), $target );
        // Trigger scroll event
        if ( !( typeof $trigger !== "undefined" && $trigger.attr( "toggle" ) === "tabs" ) ) {
            offset = 100; // Base menu height fallback
            if ( typeof rh.webrh.menu !== "undefined" ) {
                offset = rh.webrh.menu.determineScrollOffset() + 20;
            }
            this.scroll( $target, offset );
        }
        window.location.hash = hash;
    }
};

// data-toggle tab is used to exclude tab based navigation.
$( "a[class^=rh][href^='#']:not([data-toggle='tab'])", context ).on( "click", $.proxy( rh.webrh.smoothScroll.trigger, rh.webrh.smoothScroll ) );


// Set the timer
var smoothScrollTimer = null;
// Smooth scroll to the anchor id on page load
if ( window.location.hash ) {

    if ( smoothScrollTimer ) {
        // Clear any previous pending timer
        clearTimeout( smoothScrollTimer );
    }
    // Allow menu height calculations before scrolling
    smoothScrollTimer = setTimeout( function() {
        rh.webrh.smoothScroll.trigger();
    }, 800 );
}
rh.webrh.hash = function(location) {
  var newHash = location.hash.replace( /^#/, "" ),
      hashSplit = newHash.split("."),
      hashFunction = hashSplit[0];

      if (hashFunction === "tab") {
        rh.webrh.switchTab(hashSplit[1], hashSplit[2]);
      }
};


rh.webrh.switchTab = function(id, index) {

  $("[data-rh-tab-id='"  + id +  "']").each(function(i,v) {
    var $children = $(v).children();
    $children.attr("data-rh-active", "false");
    $children.eq(index).attr("data-rh-active", "true");
  });

};

if(window.location.hash) {
  rh.webrh.hash(window.location);
}

$(window).bind("hashchange", function() {
  rh.webrh.hash(location);
});
rh.webrh.themeToggle = function ( $target, evt, type ) {
    var currentValue = $target.attr( "data-rh-" + type ),
        newValue = $target.attr( "data-rh-" + type + "-" + evt );
    $target.attr( "data-rh-" + type + "-" + evt, currentValue ); // set old state
    $target.attr( "data-rh-" + type, newValue ); // set new state
};

$( "[data-rh-theme-hover], [data-rh-theme-click], [data-rh-background-hover], [data-rh-background-click]" ).each( function ( idx, val ) {
    var $target = $( val );
    $.each( $target.data(), function ( key ) {
        var evt = key.match( "Hover$" ) ? "hover" : key.match( "Click$" ) ? "click" : "",
            array = key.split( /[A-Z]+/ ),
            typeKey = array[ 1 ],
            type = typeKey === "ackground" ? "b" + typeKey : typeKey === "heme" ? "t" + typeKey : "";
        if ( evt === "hover" ) {
            $target.hover( function () {
                rh.webrh.themeToggle( $target, evt, type );
            } );
        } else if ( evt === "click" ) {
            $target.click( function () {
                rh.webrh.themeToggle( $target, evt, type );
            } );
        }
    } );
} );
rh.webrh.toggle = {
    attr: {
        openEvent: "data-rh-toggle-open",
        closeEvent: "data-rh-toggle-close",
        toggleID: "data-rh-toggle-id",
        toggleTarget: "data-rh-toggle-target",
        state: "data-rh-state",
        expanded: "aria-expanded",
        align: "data-rh-align-element",
        toggle: "data-rh-toggle"
    },
    isAtBreakpoint: function ( bpString ) {
        // This function tests to see the current breakpoint exists in the allowed bp strings provided as input
        var atBreakpoint = true;
        // If the breakpoint string exists and is not empty
        if ( typeof bpString !== "undefined" && bpString !== "" ) {
            // Test that our current breakpoint is in this list of support breakpoints
            var bps = bpString.split( " " );
            atBreakpoint = false;
            // If the first array value is not empty
            $.each( bps, function ( idx, bp ) {
                // Check that the bp value is one of the supported breakpoints
                if ( $.inArray( bp, rh.webrh.utils.breakpoints ) >= 0 ) {
                    if ( rh.webrh.utils[ bp ]() ) {
                        atBreakpoint = true;
                    }
                }
            } );
        }
        return atBreakpoint;
    },
    changeState: function ( $el, to ) {
        return $el.attr( this.attr.state, to ).attr( this.attr.expanded, to === "open" );
    },
    checkState: function ( $el ) {
        var status = $el.attr( this.attr.state );
        if ( status === "" ) {
            status = $el.attr( this.attr.expanded ) ? "open" : "closed";
        }
        return status;
    },
    scroll: function ( $el ) {
        $( "html, body" ).animate( {
            scrollTop: $el.offset().top - 100
        }, 600 );
    },
    reveal: function ( props ) {
        var alignAttr = props.trigger.attr( this.attr.align ),
            hasAlignAttr = props.trigger.has( "[" + this.attr.align + "]" );
        props.target.attr( this.attr.toggle, "reveal" );
        this.setState( [ props.target, props.trigger ], "open" );
        if ( ( typeof alignAttr !== "undefined" && alignAttr !== "" ) || hasAlignAttr.length > 0 ) {
            rh.webrh.alignElement.init( props.trigger );
        }
    },
    hide: function ( props ) {
        props.target.attr( this.attr.toggle, "hide" );
        this.setState( [ props.target, props.trigger ], "closed" );
    },
    element: function ( props, change ) {
        var state = this.getState( props.target ),
            bpTargets = props.target.attr( this.attr.toggleTarget );
        // If we are approved to toggle
        if ( this.isAtBreakpoint( bpTargets ) ) {
            if ( state === "closed" ) {
                // If the state is closed, reveal
                change ? this.reveal( props ) : this.hide( props );
            } else if ( state === "open" ) {
                // If the state is open, hide
                change ? this.hide( props ) : this.reveal( props );
            } else {
                // If state is an empty string or undefined, always opt to reveal content
                this.reveal( props );
            }
        } else {
            // Make sure it's visible if not at a supported breakpoints
            this.reveal( props );
        }
    },
    getState: function ( $el ) {
        var state = $el.attr( this.attr.state );
        if ( typeof state === "undefined" ) {
            state = $el.attr( "aria-expanded" ) ? "open" : "closed";
        }
        return state;
    },
    setState: function ( $els, state ) {
        $.each( $els, function ( idx, $el ) {
            if ( state === "open" ) {
                $el.attr( this.attr.state, "open" ).attr( "aria-expanded", true );
            } else {
                $el.attr( this.attr.state, "closed" ).attr( "aria-expanded", false );
            }
        }.bind( this ) );
    },
    reset: function ( $trigger, $target ) {
        var targetBps = $target.attr( this.attr.toggleTarget );
        if ( this.isAtBreakpoint( targetBps ) ) {
            // If a supported breakpoint, instantiate the current state
            this.element( { trigger: $trigger, target: $target }, false );
        } else if ( this.checkState( $target ) === "closed" ) {
            // If not a supported breakpoint and the state is currently closed
            // Open the element
            $target.attr( this.attr.toggle, "reveal" );
        }

        // Remove the done indicator so that the tooltip is not unnecessarily updated
        $.each( $( "[" + this.attr.align + "]" ), function ( idx, val ) {
            $( val ).attr( this.attr.align, $( val ).attr( this.attr.align ).replace( " done", "" ) );
        }.bind( this ) );
    },
    getTargets: function ( $trigger ) {
        var $target,
            eventType = $trigger.attr( this.attr.openEvent ).split( " " ),
            toggleID = $trigger.attr( this.attr.toggleID );
        // If the elements are connected using a shared ID, use that first
        if ( typeof toggleID !== "undefined" && toggleID !== "" ) {
            $target = $( "#" + toggleID, context );
            if ( $target.length < 1 ) {
                $target = undefined;
            }
        }
        // Else, look for a sibling element that has the toggle-target attribute
        if ( typeof $target === "undefined" ) {
            $target = $trigger.siblings( "[" + this.attr.toggleTarget + "]" );
            if ( $target.length < 1 ) {
                $target = undefined;
            }
        }
        // Else, look for a child element that has the toggle-target attribute
        if ( typeof $target === "undefined" ) {
            $target = $trigger.children( "[" + this.attr.toggleTarget + "]" );
            if ( $target.length < 1 ) {
                $target = undefined;
            }
        }
        return { trigger: $trigger, target: $target, eventType: eventType };
    }
};

// On load, trigger the closing of any open accordions that have a state of closed set and attach click event
$( "[" + rh.webrh.toggle.attr.openEvent + "]", context ).each( function ( idx, val ) {
    var props = rh.webrh.toggle.getTargets( $( val ) );
    if ( typeof props.target !== "undefined" ) {
        // OnLoad activate current state based on data attribute
        rh.webrh.toggle.element( props, false );

        if ( props.eventType.indexOf( "click" ) !== -1 ) {
            // Close element on outside clicks without stopping event propagation
            if ( props.eventType.indexOf( "single" ) !== -1 ) {
                $( document ).click( function ( evt ) {
                    // Check if the click is outside an open item, if yes, close the items
                    if ( $( evt.target ).closest( props.trigger ).length ) {
                        // OnClick change current state and data attribute and scroll to the trigger.
                        // Unless you're clicking inside the toggle elements
                        if ( !( $( evt.target ).closest( props.target ).length &&
                                rh.webrh.toggle.getState( props.target ) === "open" ) ||
                            $( evt.target ).is( $( "[" + rh.webrh.toggle.attr.closeEvent + "]" ) )
                        ) {
                            rh.webrh.toggle.element( props, true );
                            // Scroll to the trigger if it has 'scroll' as an eventType
                            if ( props.eventType.indexOf( "scroll" ) !== -1 ) {
                                rh.webrh.toggle.scroll( props.trigger );
                            }
                        }
                    } else {
                        rh.webrh.toggle.hide( rh.webrh.toggle.getTargets( props.trigger ) );
                    }
                } );
            } else {
                // On click change current state and data attribute and scroll to the trigger.
                props.trigger.click( function () {
                    rh.webrh.toggle.element( props, true );
                } );
                // Open the tooltip when the Return key is pressed.
                props.trigger.keydown( function ( e ){
                    if( e.keyCode === 13 || e.keyCode === 32 ){
                        e.preventDefault();
                        rh.webrh.toggle.element( props, true );
                    }
                });
            }
        } else if ( props.eventType.indexOf( "hover" ) !== -1 ) {
            // OnHover change current state and data attribute
            props.trigger.hover( function () {
                rh.webrh.toggle.element( props, true );
            } );
        }
    }
} );

// Create debounce function to only trigger calls one time after it finishes resizing,
// instead of hundreds of times while it is updated
var resizeTimer;
$( window ).on( "resize", function () {
    clearTimeout( resizeTimer );
    resizeTimer = setTimeout( function () {
        // Reset any element that have been triggered before resizing and need to be reset.
        $( "[" + rh.webrh.toggle.attr.openEvent + "]", context ).each( function ( idx, val ) {
            var $trigger = $( val ),
                toggleID = $trigger.attr( rh.webrh.toggle.attr.toggleID );
            if ( typeof toggleID !== "undefined" && toggleID !== "" ) {
                rh.webrh.toggle.reset( $trigger, $( "#" + toggleID, context ) );
            } else {
                rh.webrh.toggle.reset( $trigger, $trigger.siblings( "[" + rh.webrh.toggle.attr.toggleTarget + "]" ) );
            }
        } );
        // Set back to false after resize is complete
    }, 250 );
} );
rh.webrh.urlReplace = {
    attr: {
        trigger: "data-rh-url-replace"
    },
    objToParams: function( obj ) {
        var param = [];
        for ( var key in obj ) {
            if( obj.hasOwnProperty( key ) ) {
                param.push( key + "=" + encodeURIComponent( obj[ key ] ) );
            }
        }
        return param.join( "&" );
    },
    queryObj: function( url ) {
        var sets = {};
        var search;
        if ( url.indexOf( "?" ) > -1 ) {
            search = url.slice( url.indexOf( "?" ) + 1 );
            var array = ( typeof search !== "undefined" ) ? search.split( "&" ) : [ "" ];
            $.each( array.filter( function( n ) {
                return n !== "";
            } ), function( idx, val ) {
                var group = val.split( "=" );
                sets[ group[ 0 ] ] = decodeURIComponent( group[ 1 ] || "" );
            } );
        }
        return JSON.parse( JSON.stringify( sets ) );
    },
    getSummary: function() {
        var string = "";
        var heading = $( "h1" );
        if ( typeof heading !== "undefined" ) {
            string = heading.first().text();
        } else {
            string = $( "title" ).first().text();
        }
        return string;
    },
    onLoad: function ( $el, attrs ) {
        var summary;
        var update = false;
        var states = attrs.trim().split( " " );
        var url = $el.attr( "href" );
        var query = this.queryObj( url );
        var pseudo = document.createElement( "a" );
        pseudo.href = url;
        if ( states.indexOf( "summary" ) !== -1 ) {
            summary = this.getSummary();
            // If the summary exists, append it
            if ( summary.trim() ) {
                if ( pseudo.host === "twitter.com" ) {
                    query.text = summary.replace( /%20/g, "+" );
                } else if ( pseudo.host === "www.linkedin.com" ||  pseudo.host === "www.reddit.com" ) {
                    query.summary = summary.replace( /%20/g, "+" );
                } else if ( url.slice( 0, 6 ) === "mailto" ) {
                    query.subject += " " + summary;
                }
                update = true;
            }
        }
        if ( states.indexOf( "link" ) !== -1 ) {
            if ( query.hasOwnProperty( "url" ) || query.hasOwnProperty( "p[url]" ) || url.slice( 0, 6 ) === "mailto" ) {
                if ( query.hasOwnProperty( "url" ) ) {
                    query.url = window.location.href;
                } else if ( query.hasOwnProperty( "p[url]" ) ) {
                    query[ "p[url]" ] = window.location.href;
                } else if ( url.slice( 0, 6 ) === "mailto" ) {
                    query.body += " " + window.location.href;
                }
            }
            update = true;
        }
        // Append query back onto url
        if ( update && pseudo.origin ) {
            if ( pseudo.origin.slice( 0, 6 ) === "mailto" ) {
                $el.attr( "href", pseudo.origin.replace( "//", "" ) + pseudo.pathname + "?" + this.objToParams( query ).replace( /\+/g, " " ) );
            } else {
                $el.attr( "href", pseudo.origin + pseudo.pathname + "?" + this.objToParams( query ) );
            }
        }
    }
};

var trigger = rh.webrh.urlReplace.attr.trigger;
$( "[" + trigger + "]" ).each( function ( index, value ) {
    rh.webrh.urlReplace.onLoad( $( value ), $( value ).attr( trigger ) );
} );
}; if( typeof Drupal !== 'undefined' && Drupal.behaviors ){ Drupal.behaviors.webrh = {attach: function( context, settings ){ rh.webrh.load( context ); } }; } else { $( document ).ready( function(){ rh.webrh.load( document ); }); }})( jQuery );
;/*})'"*/
;/*})'"*/
/* Source and licensing information for the line(s) below can be found at https://www.redhat.com/sites/all/modules/jquery_update/replace/ui/ui/minified/jquery.ui.effect-slide.min.js. */
(function(t){t.effects.effect.slide=function(e,i){var s,n=t(this),a=["position","top","bottom","left","right","width","height"],o=t.effects.setMode(n,e.mode||"show"),r="show"===o,h=e.direction||"left",l="up"===h||"down"===h?"top":"left",c="up"===h||"left"===h,u={};t.effects.save(n,a),n.show(),s=e.distance||n["top"===l?"outerHeight":"outerWidth"](!0),t.effects.createWrapper(n).css({overflow:"hidden"}),r&&n.css(l,c?isNaN(s)?"-"+s:-s:s),u[l]=(r?c?"+=":"-=":c?"-=":"+=")+s,n.animate(u,{queue:!1,duration:e.duration,easing:e.easing,complete:function(){"hide"===o&&n.hide(),t.effects.restore(n,a),t.effects.removeWrapper(n),i()}})}})(jQuery);;
/* Source and licensing information for the above line(s) can be found at https://www.redhat.com/sites/all/modules/jquery_update/replace/ui/ui/minified/jquery.ui.effect-slide.min.js. */
;/*})'"*/
