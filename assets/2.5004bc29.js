import{P as m}from"./ParentPageWithTabbedMenuItems.9cfb5679.js";import{c7 as r,al as d,d as a,n as p}from"./index.287ffa76.js";const n={};n.setup=(t,s)=>{const o=r("id"),i=r("subscriptionId"),u=d(),l=a(()=>!u.value.path.endsWith("cyber-risk"));return{links:a(()=>{const e=`/admin/companies/${encodeURIComponent(o.value)}/subscriptions/${i.value}/integrations/2`;return l.value?[{to:`${e}/scorecards/in-depth`,name:"In-Depth"},{to:`${e}/scorecards/snapshot`,name:"Snapshot"},{to:`${e}/scorecards/batch`,name:"Batch"},{to:`${e}/scorecards/scheduler`,name:"Scheduler"},{to:`${e}/scorecards/portfolio`,name:"Portfolio"},{to:`${e}/scorecards/zip-files`,name:"ZIP Files"},{to:`${e}/entities`,name:"Entities"}]:[]})}};n.components=Object.assign({ParentPageWithTabbedMenuItems:m},n.components);var _=function(){var t=this,s=t.$createElement,o=t._self._c||s;return o("ParentPageWithTabbedMenuItems",{attrs:{value:t.links}})},h=[];const c={};var f=p(n,_,h,!1,v,null,null,null);function v(t){for(let s in c)this[s]=c[s]}const I=function(){return f.exports}();export{I as default};
