(self["webpackChunkboard_games"]=self["webpackChunkboard_games"]||[]).push([[608],{1886:function(t,r,n){"use strict";n.d(r,{P:function(){return e}});const e=(t,r,n=0)=>{const e=[];for(let i=0;i<t;i++){e[i]=[];for(let t=0;t<r;t++){const t="number"===typeof n?n:o(n);e[i].push(t)}}return e},o=t=>{const r=t.length;if(1===r)return t[0];{const n=Math.floor(Math.random()*r);return t[n]}}},1608:function(t,r,n){"use strict";n.r(r),n.d(r,{default:function(){return F}});n(2222);var e=n(3396),o=n(7139),i=function(t){return(0,e.dD)("data-v-2927b446"),t=t(),(0,e.Cn)(),t},a={class:"game-wrap"},u=i((function(){return(0,e._)("h1",null,"生命游戏",-1)})),c=["name","onClick"];function f(t,r,n,i,f,l){return(0,e.wg)(),(0,e.iD)("div",a,[u,((0,e.wg)(!0),(0,e.iD)(e.HY,null,(0,e.Ko)(t.stateMatrix,(function(r,n){return(0,e.wg)(),(0,e.iD)("div",{class:"row",key:r},[((0,e.wg)(!0),(0,e.iD)(e.HY,null,(0,e.Ko)(r,(function(r,i){return(0,e.wg)(),(0,e.iD)("div",{class:(0,o.C_)(["toggle-box",{"toggle-box--dead":0===r}]),key:r,name:"".concat(n,",").concat(i),onClick:function(r){return t.toggle(n,i)}},null,10,c)})),128))])})),128)),(0,e._)("button",{onClick:r[0]||(r[0]=function(){return t.start&&t.start.apply(t,arguments)})},"开始"),(0,e._)("button",{onClick:r[1]||(r[1]=function(r){return t.stop=!0})},"停止"),(0,e._)("button",{onClick:r[2]||(r[2]=function(){return t.goNext&&t.goNext.apply(t,arguments)})},"下一步"),(0,e._)("button",{onClick:r[3]||(r[3]=function(){return t.reset&&t.reset.apply(t,arguments)})},"重置")])}function l(t){if(Array.isArray(t))return t}function s(t,r){var n=null==t?null:"undefined"!==typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(null!=n){var e,o,i=[],a=!0,u=!1;try{for(n=n.call(t);!(a=(e=n.next()).done);a=!0)if(i.push(e.value),r&&i.length===r)break}catch(c){u=!0,o=c}finally{try{a||null==n["return"]||n["return"]()}finally{if(u)throw o}}return i}}function h(t,r){(null==r||r>t.length)&&(r=t.length);for(var n=0,e=new Array(r);n<r;n++)e[n]=t[n];return e}function v(t,r){if(t){if("string"===typeof t)return h(t,r);var n=Object.prototype.toString.call(t).slice(8,-1);return"Object"===n&&t.constructor&&(n=t.constructor.name),"Map"===n||"Set"===n?Array.from(t):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?h(t,r):void 0}}n(1703);function p(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function d(t,r){return l(t)||s(t,r)||v(t,r)||p()}function y(t,r,n,e,o,i,a){try{var u=t[i](a),c=u.value}catch(f){return void n(f)}u.done?r(c):Promise.resolve(c).then(e,o)}function g(t){return function(){var r=this,n=arguments;return new Promise((function(e,o){var i=t.apply(r,n);function a(t){y(i,e,o,a,u,"next",t)}function u(t){y(i,e,o,a,u,"throw",t)}a(void 0)}))}}n(6133);var m=n(4870),w=n(1886),x=(n(1539),n(2564),n(8862),function(t){for(var r=0,n=0;n<t.length;n++)for(var e=0;e<t[0].length;e++){var o;r+=null!==(o=t[n][e])&&void 0!==o?o:0}return r}),b=function(){var t=g(regeneratorRuntime.mark((function t(){var r,n=arguments;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return r=n.length>0&&void 0!==n[0]?n[0]:300,t.next=3,new Promise((function(t){setTimeout((function(){t(0)}),r)}));case 3:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}(),L=function(t,r){return JSON.stringify(t)===JSON.stringify(r)},k=function(t){for(var r=function(t,r,n){for(var e=0,o=Math.max(0,r-1);o<=r+1;o++)for(var i=Math.max(0,n-1);i<=n+1;i++){var a,u;e+=null!==(a=null===(u=t[o])||void 0===u?void 0:u[i])&&void 0!==a?a:0}return e},n=[],e=t.length,o=t[0].length,i=0;i<e;i++){n[i]=[];for(var a=0;a<o;a++)if(0===t[i][a])n[i].push(3===r(t,i,a)?1:0);else{var u=r(t,i,a)-1;n[i].push(3===u||2===u?1:0)}}return n},E=(0,e.aZ)({props:{properties:Object},setup:function(t){var r=(0,e.Fl)((function(){var r,n;return[(null===(r=t.properties)||void 0===r?void 0:r.nRows["default"])||9,(null===(n=t.properties)||void 0===n?void 0:n.nCols["default"])||9]})),n=(0,m.iH)([[0]]),o=(0,m.iH)([[0]]),i=(0,m.iH)(!1),a=function(){o.value=n.value,n.value=k(n.value)},u=function(){var r=g(regeneratorRuntime.mark((function r(){var e;return regeneratorRuntime.wrap((function(r){while(1)switch(r.prev=r.next){case 0:i.value=!1;case 1:if(!(x(n.value)>0)||L(o.value,n.value)||i.value){r.next=8;break}return console.log(1),a(),r.next=6,b(null===(e=t.properties)||void 0===e?void 0:e.speed["default"]);case 6:r.next=1;break;case 8:case"end":return r.stop()}}),r)})));return function(){return r.apply(this,arguments)}}(),c=function(t,r){n.value[t][r]=+!n.value[t][r]},f=function(){i.value=!0;var t=d(r.value,2),e=t[0],o=t[1];n.value=(0,w.P)(e,o)};return(0,e.m0)(f),{stateMatrix:n,goNext:a,start:u,toggle:c,reset:f,stop:i}}}),_=n(89);const O=(0,_.Z)(E,[["render",f],["__scopeId","data-v-2927b446"]]);var F=O},1194:function(t,r,n){var e=n(7293),o=n(5112),i=n(7392),a=o("species");t.exports=function(t){return i>=51||!e((function(){var r=[],n=r.constructor={};return n[a]=function(){return{foo:1}},1!==r[t](Boolean).foo}))}},206:function(t,r,n){var e=n(1702);t.exports=e([].slice)},7475:function(t,r,n){var e=n(7854),o=n(3157),i=n(4411),a=n(111),u=n(5112),c=u("species"),f=e.Array;t.exports=function(t){var r;return o(t)&&(r=t.constructor,i(r)&&(r===f||o(r.prototype))?r=void 0:a(r)&&(r=r[c],null===r&&(r=void 0))),void 0===r?f:r}},5417:function(t,r,n){var e=n(7475);t.exports=function(t,r){return new(e(t))(0===r?0:r)}},6135:function(t,r,n){"use strict";var e=n(4948),o=n(3070),i=n(9114);t.exports=function(t,r,n){var a=e(r);a in t?o.f(t,a,i(0,n)):t[a]=n}},3157:function(t,r,n){var e=n(4326);t.exports=Array.isArray||function(t){return"Array"==e(t)}},4411:function(t,r,n){var e=n(1702),o=n(7293),i=n(614),a=n(648),u=n(5005),c=n(2788),f=function(){},l=[],s=u("Reflect","construct"),h=/^\s*(?:class|function)\b/,v=e(h.exec),p=!h.exec(f),d=function(t){if(!i(t))return!1;try{return s(f,l,t),!0}catch(r){return!1}},y=function(t){if(!i(t))return!1;switch(a(t)){case"AsyncFunction":case"GeneratorFunction":case"AsyncGeneratorFunction":return!1}try{return p||!!v(h,c(t))}catch(r){return!0}};y.sham=!0,t.exports=!s||o((function(){var t;return d(d.call)||!d(Object)||!d((function(){t=!0}))||t}))?y:d},2222:function(t,r,n){"use strict";var e=n(2109),o=n(7854),i=n(7293),a=n(3157),u=n(111),c=n(7908),f=n(6244),l=n(6135),s=n(5417),h=n(1194),v=n(5112),p=n(7392),d=v("isConcatSpreadable"),y=9007199254740991,g="Maximum allowed index exceeded",m=o.TypeError,w=p>=51||!i((function(){var t=[];return t[d]=!1,t.concat()[0]!==t})),x=h("concat"),b=function(t){if(!u(t))return!1;var r=t[d];return void 0!==r?!!r:a(t)},L=!w||!x;e({target:"Array",proto:!0,forced:L},{concat:function(t){var r,n,e,o,i,a=c(this),u=s(a,0),h=0;for(r=-1,e=arguments.length;r<e;r++)if(i=-1===r?a:arguments[r],b(i)){if(o=f(i),h+o>y)throw m(g);for(n=0;n<o;n++,h++)n in i&&l(u,h,i[n])}else{if(h>=y)throw m(g);l(u,h++,i)}return u.length=h,u}})},8862:function(t,r,n){var e=n(2109),o=n(7854),i=n(5005),a=n(2104),u=n(1702),c=n(7293),f=o.Array,l=i("JSON","stringify"),s=u(/./.exec),h=u("".charAt),v=u("".charCodeAt),p=u("".replace),d=u(1..toString),y=/[\uD800-\uDFFF]/g,g=/^[\uD800-\uDBFF]$/,m=/^[\uDC00-\uDFFF]$/,w=function(t,r,n){var e=h(n,r-1),o=h(n,r+1);return s(g,t)&&!s(m,o)||s(m,t)&&!s(g,e)?"\\u"+d(v(t,0),16):t},x=c((function(){return'"\\udf06\\ud834"'!==l("\udf06\ud834")||'"\\udead"'!==l("\udead")}));l&&e({target:"JSON",stat:!0,forced:x},{stringify:function(t,r,n){for(var e=0,o=arguments.length,i=f(o);e<o;e++)i[e]=arguments[e];var u=a(l,null,i);return"string"==typeof u?p(u,y,w):u}})},2564:function(t,r,n){var e=n(2109),o=n(7854),i=n(2104),a=n(614),u=n(8113),c=n(206),f=/MSIE .\./.test(u),l=o.Function,s=function(t){return function(r,n){var e=arguments.length>2,o=e?c(arguments,2):void 0;return t(e?function(){i(a(r)?r:l(r),this,o)}:r,n)}};e({global:!0,bind:!0,forced:f},{setTimeout:s(o.setTimeout),setInterval:s(o.setInterval)})},6133:function(t,r,n){n(1703);var e=function(t){"use strict";var r,n=Object.prototype,e=n.hasOwnProperty,o="function"===typeof Symbol?Symbol:{},i=o.iterator||"@@iterator",a=o.asyncIterator||"@@asyncIterator",u=o.toStringTag||"@@toStringTag";function c(t,r,n){return Object.defineProperty(t,r,{value:n,enumerable:!0,configurable:!0,writable:!0}),t[r]}try{c({},"")}catch(N){c=function(t,r,n){return t[r]=n}}function f(t,r,n,e){var o=r&&r.prototype instanceof y?r:y,i=Object.create(o.prototype),a=new S(e||[]);return i._invoke=_(t,n,a),i}function l(t,r,n){try{return{type:"normal",arg:t.call(r,n)}}catch(N){return{type:"throw",arg:N}}}t.wrap=f;var s="suspendedStart",h="suspendedYield",v="executing",p="completed",d={};function y(){}function g(){}function m(){}var w={};c(w,i,(function(){return this}));var x=Object.getPrototypeOf,b=x&&x(x(j([])));b&&b!==n&&e.call(b,i)&&(w=b);var L=m.prototype=y.prototype=Object.create(w);function k(t){["next","throw","return"].forEach((function(r){c(t,r,(function(t){return this._invoke(r,t)}))}))}function E(t,r){function n(o,i,a,u){var c=l(t[o],t,i);if("throw"!==c.type){var f=c.arg,s=f.value;return s&&"object"===typeof s&&e.call(s,"__await")?r.resolve(s.__await).then((function(t){n("next",t,a,u)}),(function(t){n("throw",t,a,u)})):r.resolve(s).then((function(t){f.value=t,a(f)}),(function(t){return n("throw",t,a,u)}))}u(c.arg)}var o;function i(t,e){function i(){return new r((function(r,o){n(t,e,r,o)}))}return o=o?o.then(i,i):i()}this._invoke=i}function _(t,r,n){var e=s;return function(o,i){if(e===v)throw new Error("Generator is already running");if(e===p){if("throw"===o)throw i;return C()}n.method=o,n.arg=i;while(1){var a=n.delegate;if(a){var u=O(a,n);if(u){if(u===d)continue;return u}}if("next"===n.method)n.sent=n._sent=n.arg;else if("throw"===n.method){if(e===s)throw e=p,n.arg;n.dispatchException(n.arg)}else"return"===n.method&&n.abrupt("return",n.arg);e=v;var c=l(t,r,n);if("normal"===c.type){if(e=n.done?p:h,c.arg===d)continue;return{value:c.arg,done:n.done}}"throw"===c.type&&(e=p,n.method="throw",n.arg=c.arg)}}}function O(t,n){var e=t.iterator[n.method];if(e===r){if(n.delegate=null,"throw"===n.method){if(t.iterator["return"]&&(n.method="return",n.arg=r,O(t,n),"throw"===n.method))return d;n.method="throw",n.arg=new TypeError("The iterator does not provide a 'throw' method")}return d}var o=l(e,t.iterator,n.arg);if("throw"===o.type)return n.method="throw",n.arg=o.arg,n.delegate=null,d;var i=o.arg;return i?i.done?(n[t.resultName]=i.value,n.next=t.nextLoc,"return"!==n.method&&(n.method="next",n.arg=r),n.delegate=null,d):i:(n.method="throw",n.arg=new TypeError("iterator result is not an object"),n.delegate=null,d)}function F(t){var r={tryLoc:t[0]};1 in t&&(r.catchLoc=t[1]),2 in t&&(r.finallyLoc=t[2],r.afterLoc=t[3]),this.tryEntries.push(r)}function A(t){var r=t.completion||{};r.type="normal",delete r.arg,t.completion=r}function S(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(F,this),this.reset(!0)}function j(t){if(t){var n=t[i];if(n)return n.call(t);if("function"===typeof t.next)return t;if(!isNaN(t.length)){var o=-1,a=function n(){while(++o<t.length)if(e.call(t,o))return n.value=t[o],n.done=!1,n;return n.value=r,n.done=!0,n};return a.next=a}}return{next:C}}function C(){return{value:r,done:!0}}return g.prototype=m,c(L,"constructor",m),c(m,"constructor",g),g.displayName=c(m,u,"GeneratorFunction"),t.isGeneratorFunction=function(t){var r="function"===typeof t&&t.constructor;return!!r&&(r===g||"GeneratorFunction"===(r.displayName||r.name))},t.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,m):(t.__proto__=m,c(t,u,"GeneratorFunction")),t.prototype=Object.create(L),t},t.awrap=function(t){return{__await:t}},k(E.prototype),c(E.prototype,a,(function(){return this})),t.AsyncIterator=E,t.async=function(r,n,e,o,i){void 0===i&&(i=Promise);var a=new E(f(r,n,e,o),i);return t.isGeneratorFunction(n)?a:a.next().then((function(t){return t.done?t.value:a.next()}))},k(L),c(L,u,"Generator"),c(L,i,(function(){return this})),c(L,"toString",(function(){return"[object Generator]"})),t.keys=function(t){var r=[];for(var n in t)r.push(n);return r.reverse(),function n(){while(r.length){var e=r.pop();if(e in t)return n.value=e,n.done=!1,n}return n.done=!0,n}},t.values=j,S.prototype={constructor:S,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=r,this.done=!1,this.delegate=null,this.method="next",this.arg=r,this.tryEntries.forEach(A),!t)for(var n in this)"t"===n.charAt(0)&&e.call(this,n)&&!isNaN(+n.slice(1))&&(this[n]=r)},stop:function(){this.done=!0;var t=this.tryEntries[0],r=t.completion;if("throw"===r.type)throw r.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var n=this;function o(e,o){return u.type="throw",u.arg=t,n.next=e,o&&(n.method="next",n.arg=r),!!o}for(var i=this.tryEntries.length-1;i>=0;--i){var a=this.tryEntries[i],u=a.completion;if("root"===a.tryLoc)return o("end");if(a.tryLoc<=this.prev){var c=e.call(a,"catchLoc"),f=e.call(a,"finallyLoc");if(c&&f){if(this.prev<a.catchLoc)return o(a.catchLoc,!0);if(this.prev<a.finallyLoc)return o(a.finallyLoc)}else if(c){if(this.prev<a.catchLoc)return o(a.catchLoc,!0)}else{if(!f)throw new Error("try statement without catch or finally");if(this.prev<a.finallyLoc)return o(a.finallyLoc)}}}},abrupt:function(t,r){for(var n=this.tryEntries.length-1;n>=0;--n){var o=this.tryEntries[n];if(o.tryLoc<=this.prev&&e.call(o,"finallyLoc")&&this.prev<o.finallyLoc){var i=o;break}}i&&("break"===t||"continue"===t)&&i.tryLoc<=r&&r<=i.finallyLoc&&(i=null);var a=i?i.completion:{};return a.type=t,a.arg=r,i?(this.method="next",this.next=i.finallyLoc,d):this.complete(a)},complete:function(t,r){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&r&&(this.next=r),d},finish:function(t){for(var r=this.tryEntries.length-1;r>=0;--r){var n=this.tryEntries[r];if(n.finallyLoc===t)return this.complete(n.completion,n.afterLoc),A(n),d}},catch:function(t){for(var r=this.tryEntries.length-1;r>=0;--r){var n=this.tryEntries[r];if(n.tryLoc===t){var e=n.completion;if("throw"===e.type){var o=e.arg;A(n)}return o}}throw new Error("illegal catch attempt")},delegateYield:function(t,n,e){return this.delegate={iterator:j(t),resultName:n,nextLoc:e},"next"===this.method&&(this.arg=r),d}},t}(t.exports);try{regeneratorRuntime=e}catch(o){"object"===typeof globalThis?globalThis.regeneratorRuntime=e:Function("r","regeneratorRuntime = r")(e)}}}]);
//# sourceMappingURL=608.d6e4258c.js.map