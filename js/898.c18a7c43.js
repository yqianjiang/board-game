"use strict";(self["webpackChunkboard_games"]=self["webpackChunkboard_games"]||[]).push([[898],{1886:function(e,t,o){o.d(t,{P:function(){return n}});const n=(e,t,o=0)=>{const n=[];for(let r=0;r<e;r++){n[r]=[];for(let e=0;e<t;e++){const e="number"===typeof o?o:a(o);n[r].push(e)}}return n},a=e=>{const t=e.length;if(1===t)return e[0];{const o=Math.floor(Math.random()*t);return e[o]}}},3898:function(e,t,o){o.r(t),o.d(t,{default:function(){return Y}});var n=o(3396),a=o(9242),r=o(7139);const l=e=>((0,n.dD)("data-v-3de782f0"),e=e(),(0,n.Cn)(),e),u={class:"game-wrap"},i=l((()=>(0,n._)("h1",null,"数独",-1))),s={class:"stack"},c=(0,n.Uk)("难度： "),m=(0,n.uE)('<option value="1" data-v-3de782f0>非常简单</option><option value="2" data-v-3de782f0>简单</option><option value="3" data-v-3de782f0>普通</option><option value="4" data-v-3de782f0>困难</option><option value="5" data-v-3de782f0>非常困难</option><option value="6" data-v-3de782f0>空白</option>',6),v=[m],p=["onUpdate:modelValue","disabled"],d={class:"btn-wrap"};function f(e,t,o,l,m,f){return(0,n.wg)(),(0,n.iD)("div",u,[i,(0,n._)("div",s,[(0,n._)("label",null,[c,(0,n.wy)((0,n._)("select",{"onUpdate:modelValue":t[0]||(t[0]=t=>e.level=t)},v,512),[[a.bM,e.level]])]),(0,n._)("button",{onClick:t[1]||(t[1]=(...t)=>e.init&&e.init(...t))},"应用"),"over"===e.gameState?((0,n.wg)(),(0,n.iD)("button",{key:0,onClick:t[2]||(t[2]=(...t)=>e.startGame&&e.startGame(...t))}," 开始 ")):(0,n.kq)("",!0),"running"===e.gameState?((0,n.wg)(),(0,n.iD)("button",{key:1,onClick:t[3]||(t[3]=(...t)=>e.pausedGame&&e.pausedGame(...t))}," 暂停 ")):"paused"===e.gameState?((0,n.wg)(),(0,n.iD)("button",{key:2,onClick:t[4]||(t[4]=(...t)=>e.resumeGame&&e.resumeGame(...t))}," 继续 ")):(0,n.kq)("",!0),"over"!==e.gameState?((0,n.wg)(),(0,n.iD)("button",{key:3,onClick:t[5]||(t[5]=(...t)=>e.restartGame&&e.restartGame(...t))}," 开新的一局 ")):(0,n.kq)("",!0),(0,n._)("div",null,"累计用时："+(0,r.zw)(e.timeCounter),1)]),((0,n.wg)(!0),(0,n.iD)(n.HY,null,(0,n.Ko)(e.stateMatrix,((t,o)=>((0,n.wg)(),(0,n.iD)("div",{class:"row",key:o},[((0,n.wg)(!0),(0,n.iD)(n.HY,null,(0,n.Ko)(t,((t,l)=>(0,n.wy)(((0,n.wg)(),(0,n.iD)("input",{class:(0,r.C_)(["toggle-box",{"toggle-box--error":e.errorMatrix[o][l],"toggle-box--box-top":0===o||3===o||6===o,"toggle-box--box-left":0===l||3===l||6===l,"toggle-box--box-bottom":8===o,"toggle-box--box-right":8===l}]),key:l,"onUpdate:modelValue":t=>e.stateMatrix[o][l]=t,type:"number",disabled:!!e.originState[o][l]},null,10,p)),[[a.nr,e.stateMatrix[o][l],void 0,{number:!0}]]))),128))])))),128)),(0,n._)("div",d,[(0,n._)("button",{onClick:t[6]||(t[6]=(...t)=>e.reset&&e.reset(...t))},"清空重来"),(0,n._)("button",{onClick:t[7]||(t[7]=(...t)=>e.findAllSolve&&e.findAllSolve(...t))},"提示"),(0,n._)("button",{onClick:t[8]||(t[8]=(...t)=>e.solve&&e.solve(...t))},"解答")])])}var g=o(4870);const b=()=>{const e=(0,g.iH)((new Date).getTime()),t=(0,g.iH)((new Date).getTime()),o=(0,g.iH)(!1),a=(0,n.Fl)((()=>{const o=t.value-e.value,n=Math.round(o/1e3);return`${Math.floor(n/60)}分${n%60}秒`})),r=()=>{e.value=(new Date).getTime(),u()},l=()=>{o.value=!0},u=()=>{o.value=!1,requestAnimationFrame(i)},i=()=>{t.value=(new Date).getTime(),o.value||requestAnimationFrame(i)};return requestAnimationFrame(i),{restartTimer:r,stopTimer:l,resumeTimer:u,timeCounter:a}};var w=o(1886);const h=(e,t)=>{const o=e=>Math.floor(e/3),n=3*o(e),a=3*o(t);return[[0,0],[0,1],[0,2],[1,0],[1,1],[1,2],[2,0],[2,1],[2,2]].map((e=>[e[0]+n,e[1]+a]))},k=(e,t,o)=>{const n=[],a=h(t,o);for(const r of a){let[t,o]=r;n.push(+e[t][o])}return n},x=(e,t,o)=>o?e.includes(t):e.filter((e=>+e===+t)).length>1,C=(e,t,o,n=999)=>{const a=999!==n,r=a?n:+e[t][o];return 0===r||!(r>9||r<1)&&!(x(e[t],r,a)||x(e.map((e=>e[o])),r,a)||x(k(e,t,o),r,a))},D=e=>{for(const t in e)for(let o=0;o<e[t].length;o++)if(0===e[t][o]){for(let n=1;n<10;n++)if(C(e,+t,o,n)){if(e[t][o]=n,D(e))return!0;e[t][o]=0}if(0===e[t][o])return!1}return!0},M=e=>{const t=e.map((e=>e.map((e=>+e||0)))),o=D(t);if(o)return t};function _(e){const t=e.map((e=>e.map((e=>+e||0))));console.log("start");const o=q([...t],0,0);console.log(o)}const G=(e,t,o)=>{const n=(e,t)=>{const o=e=>Math.floor(e/3),n=3*o(e),a=3*o(t);return[[0,0],[0,1],[0,2],[1,0],[1,1],[1,2],[2,0],[2,1],[2,2]].map((e=>[e[0]+n,e[1]+a]))},a=[],r=n(t,o);for(const l of r){let[t,o]=l;a.push(e[t][o])}return a},T=(e,t)=>e.includes(t),y=(e,t,o,n)=>{const a=n;return!(T(e[t],a)||T(e.map((e=>e[o])),a)||T(G(e,t,o),a))},S=(e,t,o,n)=>{const a=[];for(const r in e)a.push([...e[r]]);return a[t][o]=n,a},H=(e,t)=>e+1<9?[e+1,t]:t+1<9?[0,t+1]:[0,0],q=(e,t,o)=>{const[n,a]=H(t,o);if(0!==e[t][o])return n+a===0?[e]:q(e,n,a);const r=[];for(let l=1;l<10;l++)if(y(e,t,o,l)){const u=S(e,t,o,l);if(n+a===0)return[u];r.push(...q(u,n,a))}return r},A=(e=9,t=1)=>Math.floor(Math.random()*e/t),F=()=>{const e=(0,w.P)(9,9);for(let t=1;t<10;t++){let o=A();while(e[0][o]>0)o=A();e[0][o]=t}return e};var P=(0,n.aZ)({props:{properties:Object},setup(){const{restartTimer:e,stopTimer:t,resumeTimer:o,timeCounter:a}=b(),[r,l]=[9,9],u=(0,g.iH)(3),i=(0,g.iH)("over"),s=(0,g.iH)((0,w.P)(r,l)),c=(0,g.iH)(s.value),m=(0,n.Fl)((()=>s.value.map(((e,t)=>e.map(((e,o)=>{const n=!C(s.value,t,o);return n})))))),v=()=>{e(),s.value=c.value.map((e=>e.map((e=>e))))},p=()=>{i.value="running",e()},d=()=>{i.value="paused",t()},f=()=>{i.value="running",o()},h=()=>{t(),k(),p()},k=()=>{const e=(new Date).getTime();let t=F(),o=M(t),n=1;while(!o&&n<5)t=F(),o=M(t),n++;s.value=o?o.map((e=>e.map((e=>A(6,+u.value)?e:"")))):t,c.value=s.value.map((e=>e.map((e=>e)))),n>1&&(console.log(n),console.log("loaded, 用时",(new Date).getTime()-e))};k(),t();const x=()=>{const e=M(c.value);e?s.value=e:console.log("此题无解")},D=()=>{_(s.value)},G=()=>{t(),console.log("解答完成！")};return(0,n.YP)(s,(()=>{for(const e of s.value)for(const t of e)if(!t)return;m.value.join("").includes("true")?console.log("还有错！"):G()}),{deep:!0}),{level:u,timeCounter:a,originState:c,stateMatrix:s,errorMatrix:m,init:k,reset:v,solve:x,findAllSolve:D,gameState:i,startGame:p,pausedGame:d,resumeGame:f,restartGame:h}}}),U=o(89);const V=(0,U.Z)(P,[["render",f],["__scopeId","data-v-3de782f0"]]);var Y=V}}]);
//# sourceMappingURL=898.c18a7c43.js.map