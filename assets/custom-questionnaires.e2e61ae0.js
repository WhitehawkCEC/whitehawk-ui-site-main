import{P as a}from"./ParentPageWithTabbedMenuItems.f31fec8d.js";import{b$ as u,c,n as i}from"./index.8b152fa0.js";const n={};n.setup=(e,t)=>{const s=u("id");return{links:c(()=>{const o=`/client/companies/${s.value}/journey/cyber-risk-profile/custom-questionnaires`;return[{to:o,name:"All"},{to:{path:o,query:{status:"in-progress"}},name:"In Progress"},{to:{path:o,query:{status:"completed"}},name:"Completed"}]})}};n.components=Object.assign({ParentPageWithTabbedMenuItems:a},n.components);var l=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("ParentPageWithTabbedMenuItems",{attrs:{value:e.links}})},m=[];const r={};var _=i(n,l,m,!1,p,null,null,null);function p(e){for(let t in r)this[t]=r[t]}const b=function(){return _.exports}();export{b as default};
