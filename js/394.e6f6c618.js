"use strict";(self["webpackChunkboard_games"]=self["webpackChunkboard_games"]||[]).push([[394],{1886:function(t,e,o){o.d(e,{P:function(){return n}});const n=(t,e,o=0)=>{const n=[];for(let a=0;a<t;a++){n[a]=[];for(let t=0;t<e;t++){const t="number"===typeof o?o:r(o);n[a].push(t)}}return n},r=t=>{const e=t.length;if(1===e)return t[0];{const o=Math.floor(Math.random()*e);return t[o]}}},394:function(t,e,o){o.r(e),o.d(e,{default:function(){return Y}});var n=o(3396),r=o(9242),a=o(7139);const l=t=>((0,n.dD)("data-v-6f844af7"),t=t(),(0,n.Cn)(),t),i={class:"game-wrap"},u=l((()=>(0,n._)("h1",null,"数独",-1))),s=(0,n.Uk)("难度： "),c=(0,n.uE)('<option value="1" data-v-6f844af7>非常简单</option><option value="2" data-v-6f844af7>简单</option><option value="3" data-v-6f844af7>普通</option><option value="4" data-v-6f844af7>困难</option><option value="5" data-v-6f844af7>非常困难</option><option value="6" data-v-6f844af7>空白</option>',6),f=[c],p=["onUpdate:modelValue","disabled"],v={class:"btn-wrap"};function m(t,e,o,l,c,m){return(0,n.wg)(),(0,n.iD)("div",i,[u,(0,n._)("div",null,[(0,n._)("label",null,[s,(0,n.wy)((0,n._)("select",{"onUpdate:modelValue":e[0]||(e[0]=e=>t.level=e)},f,512),[[r.bM,t.level]])]),(0,n._)("button",{onClick:e[1]||(e[1]=(...e)=>t.init&&t.init(...e))},"应用"),(0,n._)("div",null,"累计用时："+(0,a.zw)(t.timeCounter),1)]),((0,n.wg)(!0),(0,n.iD)(n.HY,null,(0,n.Ko)(t.stateMatrix,((e,o)=>((0,n.wg)(),(0,n.iD)("div",{class:"row",key:o},[((0,n.wg)(!0),(0,n.iD)(n.HY,null,(0,n.Ko)(e,((e,l)=>(0,n.wy)(((0,n.wg)(),(0,n.iD)("input",{class:(0,a.C_)(["toggle-box",{"toggle-box--error":t.errorMatrix[o][l],"toggle-box--box-top":0===o||3===o||6===o,"toggle-box--box-left":0===l||3===l||6===l,"toggle-box--box-bottom":8===o,"toggle-box--box-right":8===l}]),key:l,"onUpdate:modelValue":e=>t.stateMatrix[o][l]=e,type:"number",disabled:!!t.originState[o][l]},null,10,p)),[[r.nr,t.stateMatrix[o][l],void 0,{number:!0}]]))),128))])))),128)),(0,n._)("div",v,[(0,n._)("button",{onClick:e[2]||(e[2]=(...e)=>t.reset&&t.reset(...e))},"清空"),(0,n._)("button",{onClick:e[3]||(e[3]=(...e)=>t.findAllSolve&&t.findAllSolve(...e))},"提示"),(0,n._)("button",{onClick:e[4]||(e[4]=(...e)=>t.solve&&t.solve(...e))},"解答")])])}var d=o(4870);const g=()=>{const t=(0,d.iH)((new Date).getTime()),e=(0,d.iH)((new Date).getTime()),o=(0,d.iH)(!1),r=(0,n.Fl)((()=>{const o=e.value-t.value,n=Math.round(o/1e3);return`${Math.floor(n/60)}分${n%60}秒`})),a=()=>{t.value=(new Date).getTime(),o.value=!1,requestAnimationFrame(i)},l=()=>{o.value=!0},i=()=>{e.value=(new Date).getTime(),o.value||requestAnimationFrame(i)};return requestAnimationFrame(i),{restartTimer:a,stopTimer:l,timeCounter:r}};var b=o(1886);const h=(t,e)=>{const o=t=>Math.floor(t/3),n=3*o(t),r=3*o(e);return[[0,0],[0,1],[0,2],[1,0],[1,1],[1,2],[2,0],[2,1],[2,2]].map((t=>[t[0]+n,t[1]+r]))},w=(t,e,o)=>{const n=[],r=h(e,o);for(const a of r){let[e,o]=a;n.push(+t[e][o])}return n},x=(t,e,o)=>o?t.includes(e):t.filter((t=>+t===+e)).length>1,M=(t,e,o,n=999)=>{const r=999!==n,a=r?n:+t[e][o];return 0===a||!(a>9||a<1)&&!(x(t[e],a,r)||x(t.map((t=>t[o])),a,r)||x(w(t,e,o),a,r))},_=t=>{for(const e in t)for(let o=0;o<t[e].length;o++)if(0===t[e][o]){for(let n=1;n<10;n++)if(M(t,+e,o,n)){if(t[e][o]=n,_(t))return!0;t[e][o]=0}if(0===t[e][o])return!1}return!0},C=t=>{const e=t.map((t=>t.map((t=>+t||0)))),o=_(e);if(o)return e};function D(t){const e=t.map((t=>t.map((t=>+t||0))));console.log("start");const o=F([...e],0,0);console.log(o)}const k=(t,e,o)=>{const n=(t,e)=>{const o=t=>Math.floor(t/3),n=3*o(t),r=3*o(e);return[[0,0],[0,1],[0,2],[1,0],[1,1],[1,2],[2,0],[2,1],[2,2]].map((t=>[t[0]+n,t[1]+r]))},r=[],a=n(e,o);for(const l of a){let[e,o]=l;r.push(t[e][o])}return r},T=(t,e)=>t.includes(e),H=(t,e,o,n)=>{const r=n;return!(T(t[e],r)||T(t.map((t=>t[o])),r)||T(k(t,e,o),r))},y=(t,e,o,n)=>{const r=[];for(const a in t)r.push([...t[a]]);return r[e][o]=n,r},A=(t,e)=>t+1<9?[t+1,e]:e+1<9?[0,e+1]:[0,0],F=(t,e,o)=>{const[n,r]=A(e,o);if(0!==t[e][o])return n+r===0?[t]:F(t,n,r);const a=[];for(let l=1;l<10;l++)if(H(t,e,o,l)){const i=y(t,e,o,l);if(n+r===0)return[i];a.push(...F(i,n,r))}return a},S=(t=9,e=1)=>Math.floor(Math.random()*t/e),P=()=>{const t=(0,b.P)(9,9);for(let e=1;e<10;e++){let o=S();while(t[0][o]>0)o=S();t[0][o]=e}return t};var U=(0,n.aZ)({props:{properties:Object},setup(){const{restartTimer:t,stopTimer:e,timeCounter:o}=g(),[r,a]=[9,9],l=(0,d.iH)(3),i=(0,d.iH)((0,b.P)(r,a)),u=(0,d.iH)(i.value),s=(0,n.Fl)((()=>i.value.map(((t,e)=>t.map(((t,o)=>{const n=!M(i.value,e,o);return n})))))),c=()=>{t(),i.value=u.value.map((t=>t.map((t=>t))))},f=()=>{const e=(new Date).getTime();let o=P(),n=C(o),r=1;while(!n&&r<5)o=P(),n=C(o),r++;i.value=n?n.map((t=>t.map((t=>S(6,+l.value)?t:"")))):o,u.value=i.value.map((t=>t.map((t=>t)))),t(),r>1&&(console.log(r),console.log("loaded, 用时",(new Date).getTime()-e))};f();const p=()=>{const t=C(u.value);t?i.value=t:console.log("此题无解")},v=()=>{D(i.value)};return(0,n.YP)(i,(()=>{for(const t of i.value)for(const e of t)if(!e)return;e()}),{deep:!0}),{level:l,timeCounter:o,originState:u,stateMatrix:i,errorMatrix:s,init:f,reset:c,solve:p,findAllSolve:v}}}),q=o(89);const V=(0,q.Z)(U,[["render",m],["__scopeId","data-v-6f844af7"]]);var Y=V}}]);
//# sourceMappingURL=394.e6f6c618.js.map