import{S as a}from"./StepParentPageLinks.f43ce4b3.js";import{b_ as c,d as i,n as u}from"./index.c5897af8.js";const t={};t.setup=(n,s)=>{const e=c("id");return{links:i(()=>{const o=`/admin/companies/${encodeURIComponent(e.value)}/vrm-dashboard/sync`;return[{to:`${o}/business-rating`,name:"Business Rating"},{to:`${o}/scorecards`,name:"Scorecards"}]})}};t.components=Object.assign({StepParentPageLinks:a},t.components);var _=function(){var n=this,s=n.$createElement,e=n._self._c||s;return e("section",{staticClass:"space-y-8"},[e("StepParentPageLinks",{attrs:{links:n.links}}),e("NuxtChild")],1)},l=[];const r={};var m=u(t,_,l,!1,p,null,null,null);function p(n){for(let s in r)this[s]=r[s]}const k=function(){return m.exports}();export{k as default};