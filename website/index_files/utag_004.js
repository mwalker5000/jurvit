//tealium universal tag - utag.49 ut4.0.201802082121, Copyright 2018 Tealium.com Inc. All Rights Reserved.
try{(function(id,loader){var u={};utag.o[loader].sender[id]=u;if(utag===undefined){utag={};}if(utag.ut===undefined){utag.ut={};}if(utag.ut.loader===undefined){u.loader=function(o){var a,b,c,l;a=document;if(o.type==="iframe"){b=a.createElement("iframe");b.setAttribute("height","1");b.setAttribute("width","1");b.setAttribute("style","display:none");b.setAttribute("src",o.src);}else if(o.type==="img"){utag.DB("Attach img: "+o.src);b=new Image();b.src=o.src;return;}else{b=a.createElement("script");b.language="javascript";b.type="text/javascript";b.async=1;b.charset="utf-8";b.src=o.src;}if(o.id){b.id=o.id;}if(typeof o.cb==="function"){if(b.addEventListener){b.addEventListener("load",function(){o.cb();},false);}else{b.onreadystatechange=function(){if(this.readyState==="complete"||this.readyState==="loaded"){this.onreadystatechange=null;o.cb();}};}}l=o.loc||"head";c=a.getElementsByTagName(l)[0];if(c){utag.DB("Attach to "+l+": "+o.src);if(l==="script"){c.parentNode.insertBefore(b,c);}else{c.appendChild(b);}}};}else{u.loader=utag.ut.loader;}
u.ev={'view':1};u.initialized=false;u.map={};u.extend=[function(a,b){try{if(1){(function(d,f){var b={src:(d.location.protocol=="https:"?"https:":"http:")+"//aero.bankofamerica.com/30306/I3n.js",async:true,type:"text/javascript"},g="XMLHttpRequest",c=f.createElement("script"),h=f.getElementsByTagName("head")[0],a;if(d[g]&&(a=new d[g]()).withCredentials!==undefined){a.open("GET",b.src,b.async);a.withCredentials=true;a.onreadystatechange=function(e){if(a.readyState==4&&a.status==200){c.type="script/meta";c.src=b.src;h.appendChild(c);new Function(a.responseText)()}};a.send()}else{setTimeout(function(){for(var e in b){c.setAttribute(e,b[e])}h.appendChild(c)},0)}})(window,document);(function(){var f=document,e=window,i=e.location.protocol,b=[["src",[i=="https:"?"https:/":"http:/","boss.bankofamerica.com/30306/9hg.js"].join("/")],["type","text/javascript"],["async",true]],g="XMLHttpRequest",a=null,j=e[g]&&(a=new e[g]()).withCredentials!==undefined,c=f.createElement("script"),h=f.getElementsByTagName("head")[0];if(j){a.open("GET",b[0][1],b[2][1]);a.withCredentials=true;a.onreadystatechange=function(d){if(a.readyState==4&&a.status==200){c.type="script/meta";c.src=b[0][1];h.appendChild(c);new Function(a.responseText)()}};a.send()}else{setTimeout(function(){for(var d=0,k=b.length;d<k;d++){c.setAttribute(b[d][0],b[d][1])}h.appendChild(c)},0)}})();(function(){var d=document,c=window,g=c.location.protocol,e="XMLHttpRequest",a,h=c[e]&&(a=new c[e]()).withCredentials!==undefined,b=d.createElement("script"),f=d.getElementsByTagName("head")[0];b.src=(g=="https:"?"https://":"http://")+"dull.bankofamerica.com/boaa/y9h.js";b.async=true;if(!h){setTimeout(function(){b.type="text/javascript";f.appendChild(b)},0)}else{a.open("GET",b.src,b.async);a.withCredentials=true;a.onreadystatechange=function(i){if(a.readyState==4&&a.status==200){b.type="script/meta";f.appendChild(b);new Function(a.responseText)()}};a.send()}})();}}catch(e){utag.DB(e)}}];u.send=function(a,b){if(u.ev[a]||u.ev.all!==undefined){var c,d,e,f,i;u.data={};for(c=0;c<u.extend.length;c++){try{d=u.extend[c](a,b);if(d==false)return}catch(e){}};for(d in utag.loader.GV(u.map)){if(b[d]!==undefined&&b[d]!==""){e=u.map[d].split(",");for(f=0;f<e.length;f++){u.data[e[f]]=b[d];}}}
}};utag.o[loader].loader.LOAD(id);})("49","bofa.main");}catch(error){utag.DB(error);}