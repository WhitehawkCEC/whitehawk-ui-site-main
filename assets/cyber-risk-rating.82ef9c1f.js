import{P as f}from"./ParentPageWithTabbedMenuItems.ce1a797e.js";import{c0 as d,cs as p,c as u,n as R}from"./index.7dd79b15.js";const r={};r.setup=(t,n)=>{const a=d("id"),s=p.read(a),o=u(()=>s.data.value?s.data.value.features:[]),_=u(()=>{const e=`/client/companies/${encodeURIComponent(a.value)}/journey/cyber-risk-rating/`,i=l(),c=v();return i&&c?[{to:`${e}rating-service-1`,name:"1"},{to:`${e}rating-service-2`,name:"2"}]:i?[{to:`${e}rating-service-1`,name:"1"}]:c?[{to:`${e}rating-service-2`,name:"1"}]:[{to:`${e}`,name:"1"}]});function l(){return o.value.some(e=>e.id==="CYBER_RISK_RATING_BITSIGHT")}function v(){return o.value.some(e=>e.id==="CYBER_RISK_RATING_BLACK_KITE")}return{links:_}};r.components=Object.assign({ParentPageWithTabbedMenuItems:f},r.components);var g=function(){var t=this,n=t.$createElement,a=t._self._c||n;return a("ParentPageWithTabbedMenuItems",{attrs:{value:t.links}})},I=[];const m={};var b=R(r,g,I,!1,y,null,null,null);function y(t){for(let n in m)this[n]=m[n]}const T=function(){return b.exports}();export{T as default};
