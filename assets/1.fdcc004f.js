import{P as m}from"./ParentPageWithTabbedMenuItems.1692e389.js";import{c8 as r,al as p,d as _,n as d}from"./index.29a5f8fb.js";const s={};s.setup=(e,n)=>{const o=r("id"),i=r("subscriptionId"),u=p();return{links:_(()=>{const t=`/admin/companies/${encodeURIComponent(o.value)}/subscriptions/${encodeURIComponent(i.value)}/integrations/1`,a=[{to:`${t}/scorecards/in-depth`,name:"In-Depth"},{to:`${t}/scorecards/batch`,name:"Batch"},{to:`${t}/scorecards/zip-files`,name:"ZIP Files"},{to:`${t}/companies`,name:"Companies"}];return a.map(({to:l})=>l).includes(u.value.path)?a:[]})}};s.components=Object.assign({ParentPageWithTabbedMenuItems:m},s.components);var f=function(){var e=this,n=e.$createElement,o=e._self._c||n;return o("ParentPageWithTabbedMenuItems",{attrs:{value:e.links}})},v=[];const c={};var h=d(s,f,v,!1,b,null,null,null);function b(e){for(let n in c)this[n]=c[n]}const R=function(){return h.exports}();export{R as default};