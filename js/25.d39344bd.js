"use strict";(self["webpackChunkboard_games"]=self["webpackChunkboard_games"]||[]).push([[25],{1886:function(t,o,e){e.d(o,{P:function(){return n}});const n=(t,o,e=0)=>{const n=[];for(let s=0;s<t;s++){n[s]=[];for(let t=0;t<o;t++){const t="number"===typeof e?e:l(e);n[s].push(t)}}return n},l=t=>{const o=t.length;if(1===o)return t[0];{const e=Math.floor(Math.random()*o);return t[e]}}},2025:function(t,o,e){e.r(o),e.d(o,{default:function(){return _}});var n=e(3396),l=e(7139);const s=t=>((0,n.dD)("data-v-50ed4703"),t=t(),(0,n.Cn)(),t),i={class:"game-wrap"},u=s((()=>(0,n._)("h1",null,"关灯游戏",-1))),r=["onClick"],a={class:"history-text"},c={key:2,class:"history-text"},v=s((()=>(0,n._)("div",null,"参考答案",-1)));function g(t,o,e,s,g,f){return(0,n.wg)(),(0,n.iD)("div",i,[u,((0,n.wg)(!0),(0,n.iD)(n.HY,null,(0,n.Ko)(t.stateMatrix,((o,e)=>((0,n.wg)(),(0,n.iD)("div",{class:"row",key:o},[((0,n.wg)(!0),(0,n.iD)(n.HY,null,(0,n.Ko)(o,((o,s)=>((0,n.wg)(),(0,n.iD)("div",{class:(0,l.C_)(["toggle-box",{"toggle-box--dead":0===o}]),key:e+s,onClick:o=>t.toggle(e,s)},null,10,r)))),128))])))),128)),(0,n._)("button",{onClick:o[0]||(o[0]=(...o)=>t.reset&&t.reset(...o))},"重置"),(0,n._)("button",{onClick:o[1]||(o[1]=(...o)=>t.init&&t.init(...o))},"随机开局"),(0,n._)("button",{onClick:o[2]||(o[2]=(...o)=>t.complete&&t.complete(...o))},"自动填充"),t.solutions[0][0][0]?((0,n.wg)(),(0,n.iD)("button",{key:0,onClick:o[3]||(o[3]=(...o)=>t.autoSolve&&t.autoSolve(...o))},"自动解答")):((0,n.wg)(),(0,n.iD)("button",{key:1,onClick:o[4]||(o[4]=(...o)=>t.showSolution&&t.showSolution(...o))},"显示答案")),(0,n._)("div",a,"操作历史"+(0,l.zw)("\n"+t.history.join("\n")),1),t.solutions[0][0][0]?((0,n.wg)(),(0,n.iD)("div",c,[v,((0,n.wg)(!0),(0,n.iD)(n.HY,null,(0,n.Ko)(t.solutions,(t=>((0,n.wg)(),(0,n.iD)("div",{key:t},(0,l.zw)(t.join("\n")+"\n---\n"),1)))),128))])):(0,n.kq)("",!0)])}var f=e(4870),h=e(1886);const d=t=>0===+t.join(""),p=(t,o,e,n)=>{t[e]^=1<<o-1-n},w=(t,o,e,n,l)=>{p(o,e,n,l);const s=[[0,0],[0,-1],[0,1],[-1,0],[1,0]];for(const i of s){let[o,s]=i;o+=n,s+=l,o>=0&&s>=0&&o<t.length&&s<e&&p(t,e,o,s)}},k=(t,o,e)=>{for(let n=1;n<t.length;n++)for(let l=0;l<e;l++)(t[n-1]&1<<e-1-l)>0&&w(t,o,e,n,l)},b=(t,o,e,n,l,s)=>(s&&w(t,o,e,n,l),l<e-1?[...b([...t],[...o],e,n,l+1,!0),...b([...t],[...o],e,n,l+1,!1)]:(k(t,o,e),d(t)?[o]:[])),m=t=>{const o=t?.[0].length||5,e=t?t.map((t=>parseInt(t.join(""),2))):[31,31,31,31,31],n=t?[t.map((t=>0))]:[[0,0,0,0,0]];for(const l of[!0,!1]){const t=b([...e],[...n[0]],o,0,0,l);t&&n.push(...t)}return n.slice(1)};var y=(0,n.aZ)({props:{properties:Object},setup(){const[t,o]=[5,5],e=(0,f.iH)((0,h.P)(t,o,1)),n=(0,f.iH)((0,h.P)(t,o)),l=(0,f.iH)([[[""]]]),s=[[0,0],[0,-1],[0,1],[-1,0],[1,0]],i=(l,i)=>{n.value[l][i]=n.value[l][i]?0:1;for(const n of s){let[s,u]=n;s+=l,u+=i,s>=0&&u>=0&&s<t&&u<o&&(e.value[s][u]=+!e.value[s][u])}},u=()=>{n.value=(0,h.P)(t,o),e.value=(0,h.P)(t,o,1),l.value=[[[""]]]},r=()=>{u();let n=(0,h.P)(t,o,[0,1]),l=m(n);while(!l[0])n=(0,h.P)(t,o,[0,1]),l=m(n);e.value=n},a=()=>{for(let t=1;t<e.value.length;t++)for(const o in e.value[t])e.value[t-1][o]&&i(t,+o)},c=()=>{const t=m(e.value);t[0]?l.value=t.map((t=>t.map((t=>{let o=t.toString(2);while(o.length<e.value[0].length)o="0"+o;return o.split("")})))):console.log("此局无解")},v=()=>{const t=l.value[0];for(let o=0;o<e.value.length;o++)for(const n in e.value[o])"1"==t[o][+n]&&i(o,+n)};return{stateMatrix:e,toggle:i,reset:u,init:r,complete:a,showSolution:c,autoSolve:v,history:n,solutions:l}}}),C=e(89);const D=(0,C.Z)(y,[["render",g],["__scopeId","data-v-50ed4703"]]);var _=D}}]);
//# sourceMappingURL=25.d39344bd.js.map