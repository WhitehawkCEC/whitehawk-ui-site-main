import{bZ as f,co as d,d as u,bT as R,n as p}from"./index.f5fd5acd.js";const _={};_.setup=(n,t)=>{const r=f("id"),s=d.read(r),a=u(()=>s.data.value?s.data.value.features:[]),l=u(()=>{const e=`/client/companies/${encodeURIComponent(r.value)}/journey/cyber-risk-rating/`,o=m(),i=v();return o&&i?[{to:`${e}rating-service-1`,name:"1"},{to:`${e}rating-service-2`,name:"2"}]:o?[{to:`${e}rating-service-1`,name:"1"}]:i?[{to:`${e}rating-service-2`,name:"1"}]:[{to:`${e}`,name:"1"}]});function m(){return a.value.some(e=>e.id==="CYBER_RISK_RATING_BITSIGHT")}function v(){return a.value.some(e=>e.id==="CYBER_RISK_RATING_BLACK_KITE")}return R().set(l),{}};var g=function(){var n=this,t=n.$createElement,r=n._self._c||t;return r("NuxtChild")},b=[];const c={};var y=p(_,g,b,!1,I,null,null,null);function I(n){for(let t in c)this[t]=c[t]}const T=function(){return y.exports}();export{T as default};
