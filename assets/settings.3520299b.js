import{P as u}from"./ParentPageWithTabbedMenuItems.e04dea14.js";import{c8 as m,al as l,d as _,n as p}from"./index.57286342.js";const s={};s.setup=(t,n)=>{const o=m("id"),i=l();return{links:_(()=>{const e=`/admin/companies/${encodeURIComponent(o.value)}`,a=[{to:`${e}`,name:"Overview"},{to:`${e}/settings`,name:"Settings"},{to:`${e}/settings/questionnaires`,name:"Questionnaires"},{to:`${e}/settings/frameworks`,name:"Frameworks"},{to:`${e}/settings/scorecards`,name:"Scorecards"},{to:`${e}/settings/bitsight`,name:"Bitsight"},{to:`${e}/settings/black-kite`,name:"Black Kite"},{to:`${e}/settings/cyber-one`,name:"CyberOne"},{to:`${e}/settings/supply-wisdom`,name:"Supply Wisdom"}];return a.map(({to:c})=>c).includes(i.value.path)?a:[]})}};s.components=Object.assign({ParentPageWithTabbedMenuItems:u},s.components);var d=function(){var t=this,n=t.$createElement,o=t._self._c||n;return o("ParentPageWithTabbedMenuItems",{attrs:{value:t.links}})},g=[];const r={};var f=p(s,d,g,!1,v,null,null,null);function v(t){for(let n in r)this[n]=r[n]}const y=function(){return f.exports}();export{y as default};
