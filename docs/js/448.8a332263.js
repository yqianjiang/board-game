"use strict";(self["webpackChunkboard_games"]=self["webpackChunkboard_games"]||[]).push([[448],{1886:function(t,e,n){n.d(e,{P:function(){return o}});const o=(t,e,n=0)=>{const o=[];for(let a=0;a<t;a++){o[a]=[];for(let t=0;t<e;t++){const t="number"===typeof n?n:r(n);o[a].push(t)}}return o},r=t=>{const e=t.length;if(1===e)return t[0];{const n=Math.floor(Math.random()*e);return t[n]}}},6448:function(t,e,n){n.r(e),n.d(e,{default:function(){return C}});var o=n(3396),r=n(7139),a=n(9242);const l=t=>((0,o.dD)("data-v-893a6fe0"),t=t(),(0,o.Cn)(),t),s={class:"game-wrap"},u=l((()=>(0,o._)("h1",null,"数独",-1))),i=["onUpdate:modelValue","disabled"],c={key:0};function f(t,e,n,l,f,p){return(0,o.wg)(),(0,o.iD)("div",s,[u,((0,o.wg)(!0),(0,o.iD)(o.HY,null,(0,o.Ko)(t.stateMatrix,((e,n)=>((0,o.wg)(),(0,o.iD)("div",{class:"row",key:e},[((0,o.wg)(!0),(0,o.iD)(o.HY,null,(0,o.Ko)(e,((l,s)=>(0,o.wy)(((0,o.wg)(),(0,o.iD)("input",{class:(0,r.C_)(["toggle-box",{"toggle-box--error":t.errorMatrix[n][s]}]),key:l,"onUpdate:modelValue":t=>e[s]=t,disabled:!!t.originState[n][s]},null,10,i)),[[a.nr,e[s]]]))),128))])))),128)),(0,o._)("button",{onClick:e[0]||(e[0]=(...e)=>t.reset&&t.reset(...e))},"清空"),(0,o._)("button",{onClick:e[1]||(e[1]=e=>t.init(1.3))},"重开"),(0,o._)("button",{onClick:e[2]||(e[2]=(...e)=>t.solve&&t.solve(...e))},"解答"),t.loading?((0,o.wg)(),(0,o.iD)("div",c,"loading...")):(0,o.kq)("",!0)])}var p=n(4870),d=n(1886);const g=(t,e,n)=>{const o=(t,e)=>{const n=t=>Math.floor(t/3),o=3*n(t),r=3*n(e);return[[0,0],[0,1],[0,2],[1,0],[1,1],[1,2],[2,0],[2,1],[2,2]].map((t=>[t[0]+o,t[1]+r]))},r=[],a=o(e,n);for(const l of a){let[e,n]=l;r.push(t[e][n])}return r},m=(t,e)=>t.includes(e),v=(t,e,n,o)=>{const r=o;return!(m(t[e],r)||m(t.map((t=>t[n])),r)||m(g(t,e,n),r))},h=t=>{for(const e in t)for(let n=0;n<t[e].length;n++)if(0===t[e][n]){for(let o=1;o<10;o++)if(v(t,+e,n,o)){if(t[e][n]=o,h(t))return!0;t[e][n]=0}if(0===t[e][n])return!1}return!0},w=t=>{const e=t.map((t=>t.map((t=>+t||0)))),n=h(e);if(n)return e},b=(t,e,n)=>{const o=(t,e)=>{const n=t=>Math.floor(t/3),o=3*n(t),r=3*n(e);return[[0,0],[0,1],[0,2],[1,0],[1,1],[1,2],[2,0],[2,1],[2,2]].map((t=>[t[0]+o,t[1]+r]))},r=[],a=o(e,n);for(const l of a){let[e,n]=l;r.push(+t[e][n])}return r},M=(t,e,n)=>{const o=t[e][n];if(!o)return!1;if(o>9||o<0)return!0;const r=t=>{if(t.filter((t=>+t===+o)).length>1)return!0};return!!(r(t[e])||r(t.map((t=>t[n])))||r(b(t,e,n)))};var k=(0,o.aZ)({props:{properties:Object},setup(){const[t,e]=[9,9],n=(0,p.iH)(!1),r=(0,p.iH)((0,d.P)(t,e)),a=(0,p.iH)(r.value),l=(0,o.Fl)((()=>r.value.map(((t,e)=>t.map(((t,n)=>{const o=M(r.value,e,n);return o})))))),s=()=>{r.value=a.value.map((t=>t.map((t=>t))))},u=(o=1.3)=>{n.value=!0;const l=(new Date).getTime(),s=(n=[0,10])=>{const o=(0,d.P)(t,e,n);for(const t in o)for(let e=0;e<o[t].length;e++)0!==o[t][e]&&(o[t][e]=Math.ceil(9*Math.random()),M(o,+t,e)&&(o[t][e]=0));return o};let u=s(),i=w(u),c=1;const f=[0,10,0];while(!i&&c<5)u=s(f),i=w(u),c++,f.push(0);console.log(c),r.value=i?i.map((t=>t.map((t=>Math.floor(Math.random()*o)?t:"")))):u,a.value=r.value.map((t=>t.map((t=>t)))),n.value=!1,console.log("用时",(new Date).getTime()-l)};u();const i=()=>{const t=w(a.value);t?r.value=t:console.log("此题无解")};return{stateMatrix:r,reset:s,init:u,errorMatrix:l,originState:a,solve:i,loading:n}}}),D=n(89);const _=(0,D.Z)(k,[["render",f],["__scopeId","data-v-893a6fe0"]]);var C=_}}]);
//# sourceMappingURL=448.8a332263.js.map