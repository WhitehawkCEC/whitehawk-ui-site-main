import{S as u}from"./StepParentPageLinks.4a53bd09.js";import{b$ as p,aH as _,c as a,n as m}from"./index.3cac3a76.js";const n={};n.setup=(e,s)=>{const t=p("id"),r=_(),i=a(()=>r.isAdmin||r.isAnalyst),l=a(()=>{const o=`/admin/companies/${encodeURIComponent(t.value)}/scorecards/portfolio`;return[{to:`${o}`,name:"Orders"},{to:`${o}/groups`,name:"Groups"},{to:`${o}/reports`,name:"Reports"}]});return{shouldShowTabs:i,links:l}};n.components=Object.assign({StepParentPageLinks:u},n.components);var d=function(){var e=this,s=e.$createElement,t=e._self._c||s;return t("section",{staticClass:"space-y-6"},[e.shouldShowTabs?t("ClientOnly",[t("StepParentPageLinks",{attrs:{links:e.links}})],1):e._e(),t("RouterView")],1)},f=[];const c={};var v=m(n,d,f,!1,S,null,null,null);function S(e){for(let s in c)this[s]=c[s]}const $=function(){return v.exports}();export{$ as default};