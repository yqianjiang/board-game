(function(){var t={9662:function(t,n,r){var e=r(7854),o=r(614),i=r(6330),u=e.TypeError;t.exports=function(t){if(o(t))return t;throw u(i(t)+" is not a function")}},6077:function(t,n,r){var e=r(7854),o=r(614),i=e.String,u=e.TypeError;t.exports=function(t){if("object"==typeof t||o(t))return t;throw u("Can't set "+i(t)+" as a prototype")}},9670:function(t,n,r){var e=r(7854),o=r(111),i=e.String,u=e.TypeError;t.exports=function(t){if(o(t))return t;throw u(i(t)+" is not an object")}},1318:function(t,n,r){var e=r(5656),o=r(1400),i=r(6244),u=function(t){return function(n,r,u){var c,a=e(n),f=i(a),s=o(u,f);if(t&&r!=r){while(f>s)if(c=a[s++],c!=c)return!0}else for(;f>s;s++)if((t||s in a)&&a[s]===r)return t||s||0;return!t&&-1}};t.exports={includes:u(!0),indexOf:u(!1)}},4326:function(t,n,r){var e=r(1702),o=e({}.toString),i=e("".slice);t.exports=function(t){return i(o(t),8,-1)}},648:function(t,n,r){var e=r(7854),o=r(1694),i=r(614),u=r(4326),c=r(5112),a=c("toStringTag"),f=e.Object,s="Arguments"==u(function(){return arguments}()),p=function(t,n){try{return t[n]}catch(r){}};t.exports=o?u:function(t){var n,r,e;return void 0===t?"Undefined":null===t?"Null":"string"==typeof(r=p(n=f(t),a))?r:s?u(n):"Object"==(e=u(n))&&i(n.callee)?"Arguments":e}},7741:function(t,n,r){var e=r(1702),o=e("".replace),i=function(t){return String(Error(t).stack)}("zxcasd"),u=/\n\s*at [^:]*:[^\n]*/,c=u.test(i);t.exports=function(t,n){if(c&&"string"==typeof t)while(n--)t=o(t,u,"");return t}},9920:function(t,n,r){var e=r(2597),o=r(3887),i=r(1236),u=r(3070);t.exports=function(t,n,r){for(var c=o(n),a=u.f,f=i.f,s=0;s<c.length;s++){var p=c[s];e(t,p)||r&&e(r,p)||a(t,p,f(n,p))}}},8880:function(t,n,r){var e=r(9781),o=r(3070),i=r(9114);t.exports=e?function(t,n,r){return o.f(t,n,i(1,r))}:function(t,n,r){return t[n]=r,t}},9114:function(t){t.exports=function(t,n){return{enumerable:!(1&t),configurable:!(2&t),writable:!(4&t),value:n}}},9781:function(t,n,r){var e=r(7293);t.exports=!e((function(){return 7!=Object.defineProperty({},1,{get:function(){return 7}})[1]}))},317:function(t,n,r){var e=r(7854),o=r(111),i=e.document,u=o(i)&&o(i.createElement);t.exports=function(t){return u?i.createElement(t):{}}},8113:function(t,n,r){var e=r(5005);t.exports=e("navigator","userAgent")||""},7392:function(t,n,r){var e,o,i=r(7854),u=r(8113),c=i.process,a=i.Deno,f=c&&c.versions||a&&a.version,s=f&&f.v8;s&&(e=s.split("."),o=e[0]>0&&e[0]<4?1:+(e[0]+e[1])),!o&&u&&(e=u.match(/Edge\/(\d+)/),(!e||e[1]>=74)&&(e=u.match(/Chrome\/(\d+)/),e&&(o=+e[1]))),t.exports=o},748:function(t){t.exports=["constructor","hasOwnProperty","isPrototypeOf","propertyIsEnumerable","toLocaleString","toString","valueOf"]},2914:function(t,n,r){var e=r(7293),o=r(9114);t.exports=!e((function(){var t=Error("a");return!("stack"in t)||(Object.defineProperty(t,"stack",o(1,7)),7!==t.stack)}))},2109:function(t,n,r){var e=r(7854),o=r(1236).f,i=r(8880),u=r(1320),c=r(3505),a=r(9920),f=r(4705);t.exports=function(t,n){var r,s,p,l,v,d,h=t.target,g=t.global,y=t.stat;if(s=g?e:y?e[h]||c(h,{}):(e[h]||{}).prototype,s)for(p in n){if(v=n[p],t.noTargetGet?(d=o(s,p),l=d&&d.value):l=s[p],r=f(g?p:h+(y?".":"#")+p,t.forced),!r&&void 0!==l){if(typeof v==typeof l)continue;a(v,l)}(t.sham||l&&l.sham)&&i(v,"sham",!0),u(s,p,v,t)}}},7293:function(t){t.exports=function(t){try{return!!t()}catch(n){return!0}}},2104:function(t,n,r){var e=r(4374),o=Function.prototype,i=o.apply,u=o.call;t.exports="object"==typeof Reflect&&Reflect.apply||(e?u.bind(i):function(){return u.apply(i,arguments)})},4374:function(t,n,r){var e=r(7293);t.exports=!e((function(){var t=function(){}.bind();return"function"!=typeof t||t.hasOwnProperty("prototype")}))},6916:function(t,n,r){var e=r(4374),o=Function.prototype.call;t.exports=e?o.bind(o):function(){return o.apply(o,arguments)}},6530:function(t,n,r){var e=r(9781),o=r(2597),i=Function.prototype,u=e&&Object.getOwnPropertyDescriptor,c=o(i,"name"),a=c&&"something"===function(){}.name,f=c&&(!e||e&&u(i,"name").configurable);t.exports={EXISTS:c,PROPER:a,CONFIGURABLE:f}},1702:function(t,n,r){var e=r(4374),o=Function.prototype,i=o.bind,u=o.call,c=e&&i.bind(u,u);t.exports=e?function(t){return t&&c(t)}:function(t){return t&&function(){return u.apply(t,arguments)}}},5005:function(t,n,r){var e=r(7854),o=r(614),i=function(t){return o(t)?t:void 0};t.exports=function(t,n){return arguments.length<2?i(e[t]):e[t]&&e[t][n]}},8173:function(t,n,r){var e=r(9662);t.exports=function(t,n){var r=t[n];return null==r?void 0:e(r)}},7854:function(t,n,r){var e=function(t){return t&&t.Math==Math&&t};t.exports=e("object"==typeof globalThis&&globalThis)||e("object"==typeof window&&window)||e("object"==typeof self&&self)||e("object"==typeof r.g&&r.g)||function(){return this}()||Function("return this")()},2597:function(t,n,r){var e=r(1702),o=r(7908),i=e({}.hasOwnProperty);t.exports=Object.hasOwn||function(t,n){return i(o(t),n)}},3501:function(t){t.exports={}},4664:function(t,n,r){var e=r(9781),o=r(7293),i=r(317);t.exports=!e&&!o((function(){return 7!=Object.defineProperty(i("div"),"a",{get:function(){return 7}}).a}))},8361:function(t,n,r){var e=r(7854),o=r(1702),i=r(7293),u=r(4326),c=e.Object,a=o("".split);t.exports=i((function(){return!c("z").propertyIsEnumerable(0)}))?function(t){return"String"==u(t)?a(t,""):c(t)}:c},9587:function(t,n,r){var e=r(614),o=r(111),i=r(7674);t.exports=function(t,n,r){var u,c;return i&&e(u=n.constructor)&&u!==r&&o(c=u.prototype)&&c!==r.prototype&&i(t,c),t}},2788:function(t,n,r){var e=r(1702),o=r(614),i=r(5465),u=e(Function.toString);o(i.inspectSource)||(i.inspectSource=function(t){return u(t)}),t.exports=i.inspectSource},8340:function(t,n,r){var e=r(111),o=r(8880);t.exports=function(t,n){e(n)&&"cause"in n&&o(t,"cause",n.cause)}},9909:function(t,n,r){var e,o,i,u=r(8536),c=r(7854),a=r(1702),f=r(111),s=r(8880),p=r(2597),l=r(5465),v=r(6200),d=r(3501),h="Object already initialized",g=c.TypeError,y=c.WeakMap,b=function(t){return i(t)?o(t):e(t,{})},m=function(t){return function(n){var r;if(!f(n)||(r=o(n)).type!==t)throw g("Incompatible receiver, "+t+" required");return r}};if(u||l.state){var w=l.state||(l.state=new y),x=a(w.get),O=a(w.has),S=a(w.set);e=function(t,n){if(O(w,t))throw new g(h);return n.facade=t,S(w,t,n),n},o=function(t){return x(w,t)||{}},i=function(t){return O(w,t)}}else{var E=v("state");d[E]=!0,e=function(t,n){if(p(t,E))throw new g(h);return n.facade=t,s(t,E,n),n},o=function(t){return p(t,E)?t[E]:{}},i=function(t){return p(t,E)}}t.exports={set:e,get:o,has:i,enforce:b,getterFor:m}},614:function(t){t.exports=function(t){return"function"==typeof t}},4705:function(t,n,r){var e=r(7293),o=r(614),i=/#|\.prototype\./,u=function(t,n){var r=a[c(t)];return r==s||r!=f&&(o(n)?e(n):!!n)},c=u.normalize=function(t){return String(t).replace(i,".").toLowerCase()},a=u.data={},f=u.NATIVE="N",s=u.POLYFILL="P";t.exports=u},111:function(t,n,r){var e=r(614);t.exports=function(t){return"object"==typeof t?null!==t:e(t)}},1913:function(t){t.exports=!1},2190:function(t,n,r){var e=r(7854),o=r(5005),i=r(614),u=r(7976),c=r(3307),a=e.Object;t.exports=c?function(t){return"symbol"==typeof t}:function(t){var n=o("Symbol");return i(n)&&u(n.prototype,a(t))}},6244:function(t,n,r){var e=r(7466);t.exports=function(t){return e(t.length)}},133:function(t,n,r){var e=r(7392),o=r(7293);t.exports=!!Object.getOwnPropertySymbols&&!o((function(){var t=Symbol();return!String(t)||!(Object(t)instanceof Symbol)||!Symbol.sham&&e&&e<41}))},8536:function(t,n,r){var e=r(7854),o=r(614),i=r(2788),u=e.WeakMap;t.exports=o(u)&&/native code/.test(i(u))},6277:function(t,n,r){var e=r(1340);t.exports=function(t,n){return void 0===t?arguments.length<2?"":n:e(t)}},3070:function(t,n,r){var e=r(7854),o=r(9781),i=r(4664),u=r(3353),c=r(9670),a=r(4948),f=e.TypeError,s=Object.defineProperty,p=Object.getOwnPropertyDescriptor,l="enumerable",v="configurable",d="writable";n.f=o?u?function(t,n,r){if(c(t),n=a(n),c(r),"function"===typeof t&&"prototype"===n&&"value"in r&&d in r&&!r[d]){var e=p(t,n);e&&e[d]&&(t[n]=r.value,r={configurable:v in r?r[v]:e[v],enumerable:l in r?r[l]:e[l],writable:!1})}return s(t,n,r)}:s:function(t,n,r){if(c(t),n=a(n),c(r),i)try{return s(t,n,r)}catch(e){}if("get"in r||"set"in r)throw f("Accessors not supported");return"value"in r&&(t[n]=r.value),t}},1236:function(t,n,r){var e=r(9781),o=r(6916),i=r(5296),u=r(9114),c=r(5656),a=r(4948),f=r(2597),s=r(4664),p=Object.getOwnPropertyDescriptor;n.f=e?p:function(t,n){if(t=c(t),n=a(n),s)try{return p(t,n)}catch(r){}if(f(t,n))return u(!o(i.f,t,n),t[n])}},8006:function(t,n,r){var e=r(6324),o=r(748),i=o.concat("length","prototype");n.f=Object.getOwnPropertyNames||function(t){return e(t,i)}},5181:function(t,n){n.f=Object.getOwnPropertySymbols},7976:function(t,n,r){var e=r(1702);t.exports=e({}.isPrototypeOf)},6324:function(t,n,r){var e=r(1702),o=r(2597),i=r(5656),u=r(1318).indexOf,c=r(3501),a=e([].push);t.exports=function(t,n){var r,e=i(t),f=0,s=[];for(r in e)!o(c,r)&&o(e,r)&&a(s,r);while(n.length>f)o(e,r=n[f++])&&(~u(s,r)||a(s,r));return s}},5296:function(t,n){"use strict";var r={}.propertyIsEnumerable,e=Object.getOwnPropertyDescriptor,o=e&&!r.call({1:2},1);n.f=o?function(t){var n=e(this,t);return!!n&&n.enumerable}:r},7674:function(t,n,r){var e=r(1702),o=r(9670),i=r(6077);t.exports=Object.setPrototypeOf||("__proto__"in{}?function(){var t,n=!1,r={};try{t=e(Object.getOwnPropertyDescriptor(Object.prototype,"__proto__").set),t(r,[]),n=r instanceof Array}catch(u){}return function(r,e){return o(r),i(e),n?t(r,e):r.__proto__=e,r}}():void 0)},2140:function(t,n,r){var e=r(7854),o=r(6916),i=r(614),u=r(111),c=e.TypeError;t.exports=function(t,n){var r,e;if("string"===n&&i(r=t.toString)&&!u(e=o(r,t)))return e;if(i(r=t.valueOf)&&!u(e=o(r,t)))return e;if("string"!==n&&i(r=t.toString)&&!u(e=o(r,t)))return e;throw c("Can't convert object to primitive value")}},3887:function(t,n,r){var e=r(5005),o=r(1702),i=r(8006),u=r(5181),c=r(9670),a=o([].concat);t.exports=e("Reflect","ownKeys")||function(t){var n=i.f(c(t)),r=u.f;return r?a(n,r(t)):n}},1320:function(t,n,r){var e=r(7854),o=r(614),i=r(2597),u=r(8880),c=r(3505),a=r(2788),f=r(9909),s=r(6530).CONFIGURABLE,p=f.get,l=f.enforce,v=String(String).split("String");(t.exports=function(t,n,r,a){var f,p=!!a&&!!a.unsafe,d=!!a&&!!a.enumerable,h=!!a&&!!a.noTargetGet,g=a&&void 0!==a.name?a.name:n;o(r)&&("Symbol("===String(g).slice(0,7)&&(g="["+String(g).replace(/^Symbol\(([^)]*)\)/,"$1")+"]"),(!i(r,"name")||s&&r.name!==g)&&u(r,"name",g),f=l(r),f.source||(f.source=v.join("string"==typeof g?g:""))),t!==e?(p?!h&&t[n]&&(d=!0):delete t[n],d?t[n]=r:u(t,n,r)):d?t[n]=r:c(n,r)})(Function.prototype,"toString",(function(){return o(this)&&p(this).source||a(this)}))},4488:function(t,n,r){var e=r(7854),o=e.TypeError;t.exports=function(t){if(void 0==t)throw o("Can't call method on "+t);return t}},3505:function(t,n,r){var e=r(7854),o=Object.defineProperty;t.exports=function(t,n){try{o(e,t,{value:n,configurable:!0,writable:!0})}catch(r){e[t]=n}return n}},6200:function(t,n,r){var e=r(2309),o=r(9711),i=e("keys");t.exports=function(t){return i[t]||(i[t]=o(t))}},5465:function(t,n,r){var e=r(7854),o=r(3505),i="__core-js_shared__",u=e[i]||o(i,{});t.exports=u},2309:function(t,n,r){var e=r(1913),o=r(5465);(t.exports=function(t,n){return o[t]||(o[t]=void 0!==n?n:{})})("versions",[]).push({version:"3.20.3",mode:e?"pure":"global",copyright:"© 2014-2022 Denis Pushkarev (zloirock.ru)",license:"https://github.com/zloirock/core-js/blob/v3.20.3/LICENSE",source:"https://github.com/zloirock/core-js"})},1400:function(t,n,r){var e=r(9303),o=Math.max,i=Math.min;t.exports=function(t,n){var r=e(t);return r<0?o(r+n,0):i(r,n)}},5656:function(t,n,r){var e=r(8361),o=r(4488);t.exports=function(t){return e(o(t))}},9303:function(t){var n=Math.ceil,r=Math.floor;t.exports=function(t){var e=+t;return e!==e||0===e?0:(e>0?r:n)(e)}},7466:function(t,n,r){var e=r(9303),o=Math.min;t.exports=function(t){return t>0?o(e(t),9007199254740991):0}},7908:function(t,n,r){var e=r(7854),o=r(4488),i=e.Object;t.exports=function(t){return i(o(t))}},7593:function(t,n,r){var e=r(7854),o=r(6916),i=r(111),u=r(2190),c=r(8173),a=r(2140),f=r(5112),s=e.TypeError,p=f("toPrimitive");t.exports=function(t,n){if(!i(t)||u(t))return t;var r,e=c(t,p);if(e){if(void 0===n&&(n="default"),r=o(e,t,n),!i(r)||u(r))return r;throw s("Can't convert object to primitive value")}return void 0===n&&(n="number"),a(t,n)}},4948:function(t,n,r){var e=r(7593),o=r(2190);t.exports=function(t){var n=e(t,"string");return o(n)?n:n+""}},1694:function(t,n,r){var e=r(5112),o=e("toStringTag"),i={};i[o]="z",t.exports="[object z]"===String(i)},1340:function(t,n,r){var e=r(7854),o=r(648),i=e.String;t.exports=function(t){if("Symbol"===o(t))throw TypeError("Cannot convert a Symbol value to a string");return i(t)}},6330:function(t,n,r){var e=r(7854),o=e.String;t.exports=function(t){try{return o(t)}catch(n){return"Object"}}},9711:function(t,n,r){var e=r(1702),o=0,i=Math.random(),u=e(1..toString);t.exports=function(t){return"Symbol("+(void 0===t?"":t)+")_"+u(++o+i,36)}},3307:function(t,n,r){var e=r(133);t.exports=e&&!Symbol.sham&&"symbol"==typeof Symbol.iterator},3353:function(t,n,r){var e=r(9781),o=r(7293);t.exports=e&&o((function(){return 42!=Object.defineProperty((function(){}),"prototype",{value:42,writable:!1}).prototype}))},5112:function(t,n,r){var e=r(7854),o=r(2309),i=r(2597),u=r(9711),c=r(133),a=r(3307),f=o("wks"),s=e.Symbol,p=s&&s["for"],l=a?s:s&&s.withoutSetter||u;t.exports=function(t){if(!i(f,t)||!c&&"string"!=typeof f[t]){var n="Symbol."+t;c&&i(s,t)?f[t]=s[t]:f[t]=a&&p?p(n):l(n)}return f[t]}},9191:function(t,n,r){"use strict";var e=r(5005),o=r(2597),i=r(8880),u=r(7976),c=r(7674),a=r(9920),f=r(9587),s=r(6277),p=r(8340),l=r(7741),v=r(2914),d=r(1913);t.exports=function(t,n,r,h){var g=h?2:1,y=t.split("."),b=y[y.length-1],m=e.apply(null,y);if(m){var w=m.prototype;if(!d&&o(w,"cause")&&delete w.cause,!r)return m;var x=e("Error"),O=n((function(t,n){var r=s(h?n:t,void 0),e=h?new m(t):new m;return void 0!==r&&i(e,"message",r),v&&i(e,"stack",l(e.stack,2)),this&&u(w,this)&&f(e,this,O),arguments.length>g&&p(e,arguments[g]),e}));if(O.prototype=w,"Error"!==b&&(c?c(O,x):a(O,x,{name:!0})),a(O,m),!d)try{w.name!==b&&i(w,"name",b),w.constructor=O}catch(S){}return O}}},1703:function(t,n,r){var e=r(2109),o=r(7854),i=r(2104),u=r(9191),c="WebAssembly",a=o[c],f=7!==Error("e",{cause:7}).cause,s=function(t,n){var r={};r[t]=u(t,n,f),e({global:!0,forced:f},r)},p=function(t,n){if(a&&a[t]){var r={};r[t]=u(c+"."+t,n,f),e({target:c,stat:!0,forced:f},r)}};s("Error",(function(t){return function(n){return i(t,this,arguments)}})),s("EvalError",(function(t){return function(n){return i(t,this,arguments)}})),s("RangeError",(function(t){return function(n){return i(t,this,arguments)}})),s("ReferenceError",(function(t){return function(n){return i(t,this,arguments)}})),s("SyntaxError",(function(t){return function(n){return i(t,this,arguments)}})),s("TypeError",(function(t){return function(n){return i(t,this,arguments)}})),s("URIError",(function(t){return function(n){return i(t,this,arguments)}})),p("CompileError",(function(t){return function(n){return i(t,this,arguments)}})),p("LinkError",(function(t){return function(n){return i(t,this,arguments)}})),p("RuntimeError",(function(t){return function(n){return i(t,this,arguments)}}))}},n={};function r(e){var o=n[e];if(void 0!==o)return o.exports;var i=n[e]={exports:{}};return t[e](i,i.exports,r),i.exports}r.m=t,function(){r.n=function(t){var n=t&&t.__esModule?function(){return t["default"]}:function(){return t};return r.d(n,{a:n}),n}}(),function(){r.d=function(t,n){for(var e in n)r.o(n,e)&&!r.o(t,e)&&Object.defineProperty(t,e,{enumerable:!0,get:n[e]})}}(),function(){r.f={},r.e=function(t){return Promise.all(Object.keys(r.f).reduce((function(n,e){return r.f[e](t,n),n}),[]))}}(),function(){r.u=function(t){return"js/"+t+"."+{25:"d39344bd",354:"4aa0600d",373:"8f080b7a",429:"42b13aa7",898:"c18a7c43"}[t]+".js"}}(),function(){r.miniCssF=function(t){return"css/"+t+"."+{25:"8aa809c6",354:"f9bb9a3a",373:"a778a9c8",429:"7431417b",898:"0571e67f"}[t]+".css"}}(),function(){r.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(t){if("object"===typeof window)return window}}()}(),function(){r.o=function(t,n){return Object.prototype.hasOwnProperty.call(t,n)}}(),function(){var t={},n="board-games:";r.l=function(e,o,i,u){if(t[e])t[e].push(o);else{var c,a;if(void 0!==i)for(var f=document.getElementsByTagName("script"),s=0;s<f.length;s++){var p=f[s];if(p.getAttribute("src")==e||p.getAttribute("data-webpack")==n+i){c=p;break}}c||(a=!0,c=document.createElement("script"),c.charset="utf-8",c.timeout=120,r.nc&&c.setAttribute("nonce",r.nc),c.setAttribute("data-webpack",n+i),c.src=e),t[e]=[o];var l=function(n,r){c.onerror=c.onload=null,clearTimeout(v);var o=t[e];if(delete t[e],c.parentNode&&c.parentNode.removeChild(c),o&&o.forEach((function(t){return t(r)})),n)return n(r)},v=setTimeout(l.bind(null,void 0,{type:"timeout",target:c}),12e4);c.onerror=l.bind(null,c.onerror),c.onload=l.bind(null,c.onload),a&&document.head.appendChild(c)}}}(),function(){r.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})}}(),function(){r.p="/board-game/"}(),function(){var t=function(t,n,r,e){var o=document.createElement("link");o.rel="stylesheet",o.type="text/css";var i=function(i){if(o.onerror=o.onload=null,"load"===i.type)r();else{var u=i&&("load"===i.type?"missing":i.type),c=i&&i.target&&i.target.href||n,a=new Error("Loading CSS chunk "+t+" failed.\n("+c+")");a.code="CSS_CHUNK_LOAD_FAILED",a.type=u,a.request=c,o.parentNode.removeChild(o),e(a)}};return o.onerror=o.onload=i,o.href=n,document.head.appendChild(o),o},n=function(t,n){for(var r=document.getElementsByTagName("link"),e=0;e<r.length;e++){var o=r[e],i=o.getAttribute("data-href")||o.getAttribute("href");if("stylesheet"===o.rel&&(i===t||i===n))return o}var u=document.getElementsByTagName("style");for(e=0;e<u.length;e++){o=u[e],i=o.getAttribute("data-href");if(i===t||i===n)return o}},e=function(e){return new Promise((function(o,i){var u=r.miniCssF(e),c=r.p+u;if(n(u,c))return o();t(e,c,o,i)}))},o={143:0};r.f.miniCss=function(t,n){var r={25:1,354:1,373:1,429:1,898:1};o[t]?n.push(o[t]):0!==o[t]&&r[t]&&n.push(o[t]=e(t).then((function(){o[t]=0}),(function(n){throw delete o[t],n})))}}(),function(){var t={143:0};r.f.j=function(n,e){var o=r.o(t,n)?t[n]:void 0;if(0!==o)if(o)e.push(o[2]);else{var i=new Promise((function(r,e){o=t[n]=[r,e]}));e.push(o[2]=i);var u=r.p+r.u(n),c=new Error,a=function(e){if(r.o(t,n)&&(o=t[n],0!==o&&(t[n]=void 0),o)){var i=e&&("load"===e.type?"missing":e.type),u=e&&e.target&&e.target.src;c.message="Loading chunk "+n+" failed.\n("+i+": "+u+")",c.name="ChunkLoadError",c.type=i,c.request=u,o[1](c)}};r.l(u,a,"chunk-"+n,n)}};var n=function(n,e){var o,i,u=e[0],c=e[1],a=e[2],f=0;if(u.some((function(n){return 0!==t[n]}))){for(o in c)r.o(c,o)&&(r.m[o]=c[o]);if(a)a(r)}for(n&&n(e);f<u.length;f++)i=u[f],r.o(t,i)&&t[i]&&t[i][0](),t[i]=0},e=self["webpackChunkboard_games"]=self["webpackChunkboard_games"]||[];e.forEach(n.bind(null,0)),e.push=n.bind(null,e.push.bind(e))}();!function(){"use strict";r(1703);var t,n=function(){return Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/))};function e(r,e){void 0===e&&(e={});var c=e.registrationOptions;void 0===c&&(c={}),delete e.registrationOptions;var a=function(t){var n=[],r=arguments.length-1;while(r-- >0)n[r]=arguments[r+1];e&&e[t]&&e[t].apply(e,n)};"serviceWorker"in navigator&&t.then((function(){n()?(u(r,a,c),navigator.serviceWorker.ready.then((function(t){a("ready",t)})).catch((function(t){return o(a,t)}))):(i(r,a,c),navigator.serviceWorker.ready.then((function(t){a("ready",t)})).catch((function(t){return o(a,t)})))}))}function o(t,n){navigator.onLine||t("offline"),t("error",n)}function i(t,n,r){navigator.serviceWorker.register(t,r).then((function(t){n("registered",t),t.waiting?n("updated",t):t.onupdatefound=function(){n("updatefound",t);var r=t.installing;r.onstatechange=function(){"installed"===r.state&&(navigator.serviceWorker.controller?n("updated",t):n("cached",t))}}})).catch((function(t){return o(n,t)}))}function u(t,n,r){fetch(t).then((function(e){404===e.status?(n("error",new Error("Service worker not found at "+t)),c()):-1===e.headers.get("content-type").indexOf("javascript")?(n("error",new Error("Expected "+t+" to have javascript content-type, but received "+e.headers.get("content-type"))),c()):i(t,n,r)})).catch((function(t){return o(n,t)}))}function c(){"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(t){t.unregister()})).catch((function(t){return o(emit,t)}))}"undefined"!==typeof window&&(t="undefined"!==typeof Promise?new Promise((function(t){return window.addEventListener("load",t)})):{then:function(t){return window.addEventListener("load",t)}}),e("/board-game/service-worker.js",{ready(){console.log("App is being served from cache by a service worker.\nFor more details, visit https://goo.gl/AFskqB")},registered(){console.log("Service worker has been registered.")},cached(){console.log("Content has been cached for offline use.")},updatefound(){console.log("New content is downloading.")},updated(){console.log("New content is available; please refresh.")},offline(){console.log("No internet connection found. App is running in offline mode.")},error(t){console.error("Error during service worker registration:",t)}}),r.e(429).then(r.bind(r,9429))}()})();
//# sourceMappingURL=app.b379adb3.js.map