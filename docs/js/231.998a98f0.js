"use strict";(self["webpackChunkboard_games"]=self["webpackChunkboard_games"]||[]).push([[231],{1886:function(e,t,o){o.d(t,{P:function(){return a}});const a=(e,t,o=0)=>{const a=[];for(let r=0;r<e;r++){a[r]=[];for(let e=0;e<t;e++){const e="number"===typeof o?o:n(o);a[r].push(e)}}return a},n=e=>{const t=e.length;if(1===t)return e[0];{const o=Math.floor(Math.random()*t);return e[o]}}},231:function(e,t,o){o.r(t),o.d(t,{default:function(){return y}});var a=o(3396),n=o(9242),r=o(7139);const l=e=>((0,a.dD)("data-v-798a9398"),e=e(),(0,a.Cn)(),e),i={class:"game-wrap"},u=l((()=>(0,a._)("h1",null,"数独",-1))),s=(0,a.Uk)("难度： "),c=(0,a.uE)('<option value="1" data-v-798a9398>非常简单</option><option value="2" data-v-798a9398>简单</option><option value="3" data-v-798a9398>普通</option><option value="4" data-v-798a9398>困难</option><option value="5" data-v-798a9398>非常困难</option>',5),v=[c],m=["onUpdate:modelValue","disabled"],p={class:"btn-wrap"};function d(e,t,o,l,c,d){return(0,a.wg)(),(0,a.iD)("div",i,[u,(0,a._)("div",null,[(0,a._)("label",null,[s,(0,a.wy)((0,a._)("select",{"onUpdate:modelValue":t[0]||(t[0]=t=>e.level=t)},v,512),[[n.bM,e.level]])]),(0,a._)("button",{onClick:t[1]||(t[1]=(...t)=>e.init&&e.init(...t))},"应用"),(0,a._)("div",null,"累计用时："+(0,r.zw)(e.timeCounter),1)]),((0,a.wg)(!0),(0,a.iD)(a.HY,null,(0,a.Ko)(e.stateMatrix,((t,o)=>((0,a.wg)(),(0,a.iD)("div",{class:"row",key:t},[((0,a.wg)(!0),(0,a.iD)(a.HY,null,(0,a.Ko)(t,((l,i)=>(0,a.wy)(((0,a.wg)(),(0,a.iD)("input",{class:(0,r.C_)(["toggle-box",{"toggle-box--error":e.errorMatrix[o][i],"toggle-box--box-top":0===o||3===o||6===o,"toggle-box--box-left":0===i||3===i||6===i,"toggle-box--box-bottom":8===o,"toggle-box--box-right":8===i}]),key:l,"onUpdate:modelValue":e=>t[i]=e,disabled:!!e.originState[o][i]},null,10,m)),[[n.nr,t[i]]]))),128))])))),128)),(0,a._)("div",p,[(0,a._)("button",{onClick:t[2]||(t[2]=(...t)=>e.reset&&e.reset(...t))},"清空"),(0,a._)("button",{onClick:t[3]||(t[3]=(...t)=>e.solve&&e.solve(...t))},"解答")])])}var f=o(4870);const g=()=>{const e=(0,f.iH)((new Date).getTime()),t=(0,f.iH)((new Date).getTime()),o=(0,f.iH)(!1),n=(0,a.Fl)((()=>{const o=t.value-e.value,a=Math.round(o/1e3);return`${Math.floor(a/60)}分${a%60}秒`})),r=()=>{e.value=(new Date).getTime(),o.value=!1,requestAnimationFrame(i)},l=()=>{o.value=!0},i=()=>{t.value=(new Date).getTime(),o.value||requestAnimationFrame(i)};return requestAnimationFrame(i),{restartTimer:r,stopTimer:l,timeCounter:n}};var b=o(1886);const h=(e,t)=>{const o=e=>Math.floor(e/3),a=3*o(e),n=3*o(t);return[[0,0],[0,1],[0,2],[1,0],[1,1],[1,2],[2,0],[2,1],[2,2]].map((e=>[e[0]+a,e[1]+n]))},w=(e,t,o)=>{const a=[],n=h(t,o);for(const r of n){let[t,o]=r;a.push(+e[t][o])}return a},M=(e,t,o)=>o?e.includes(t):e.filter((e=>+e===+t)).length>1,x=(e,t,o,a=999)=>{const n=999!==a,r=n?a:+e[t][o];return 0===r||!(r>9||r<1)&&!(M(e[t],r,n)||M(e.map((e=>e[o])),r,n)||M(w(e,t,o),r,n))},_=e=>{for(const t in e)for(let o=0;o<e[t].length;o++)if(0===e[t][o]){for(let a=1;a<10;a++)if(x(e,+t,o,a)){if(e[t][o]=a,_(e))return!0;e[t][o]=0}if(0===e[t][o])return!1}return!0},D=e=>{const t=e.map((e=>e.map((e=>+e||0)))),o=_(t);if(o)return t},C=()=>{const e=(0,b.P)(9,9);for(let t=1;t<10;t++){let o=Math.floor(9*Math.random());while(e[0][o]>0)o=Math.floor(9*Math.random());e[0][o]=t}return e};var k=(0,a.aZ)({props:{properties:Object},setup(){const{restartTimer:e,stopTimer:t,timeCounter:o}=g(),[n,r]=[9,9],l=(0,f.iH)(3),i=(0,f.iH)((0,b.P)(n,r)),u=(0,f.iH)(i.value),s=(0,a.Fl)((()=>i.value.map(((e,t)=>e.map(((e,o)=>{const a=!x(i.value,t,o);return a})))))),c=()=>{e(),i.value=u.value.map((e=>e.map((e=>e))))},v=()=>{const t=(new Date).getTime();let o=C(),a=D(o),n=1;while(!a&&n<5)o=C(),a=D(o),n++;i.value=a?a.map((e=>e.map((e=>Math.floor(6*Math.random()/+l.value)?e:"")))):o,u.value=i.value.map((e=>e.map((e=>e)))),e(),n>1&&(console.log(n),console.log("loaded, 用时",(new Date).getTime()-t))};v();const m=()=>{const e=D(u.value);e?i.value=e:console.log("此题无解")};return(0,a.YP)(i,(()=>{for(const e of i.value)for(const t of e)if(!t)return void console.log(t);t()}),{deep:!0}),{level:l,timeCounter:o,originState:u,stateMatrix:i,errorMatrix:s,init:v,reset:c,solve:m}}}),T=o(89);const H=(0,T.Z)(k,[["render",d],["__scopeId","data-v-798a9398"]]);var y=H}}]);
//# sourceMappingURL=231.998a98f0.js.map