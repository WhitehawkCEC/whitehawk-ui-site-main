import{P as l}from"./ParentPageWithTabbedMenuItems.8ce844ad.js";import{C as d}from"./CompanyIdHeader.4cbce53a.js";import{c7 as p,bG as _,aj as f,c,n as v}from"./index.2a44373a.js";import"./CompanyStatusBadge.36fa768c.js";const a={};a.setup=(e,s)=>{const n=p("id"),o=_.read(n),r=f(),i=c(()=>r.value.path.endsWith(n.value)),m=c(()=>{const t=`/admin/companies/${encodeURIComponent(n.value)}`;return i.value?[{to:`${t}`,name:"Overview"},{to:`${t}/settings`,name:"Settings"},{to:`${t}/settings/questionnaires`,name:"Questionnaires"},{to:`${t}/settings/frameworks`,name:"Frameworks"},{to:`${t}/settings/scorecards`,name:"Scorecards"},{to:`${t}/settings/bitsight`,name:"Bitsight"},{to:`${t}/settings/black-kite`,name:"Black Kite"},{to:`${t}/settings/cyber-one`,name:"CyberOne"},{to:`${t}/settings/supply-wisdom`,name:"Supply Wisdom"}]:[]});return{companyRead:o,shouldShow:i,links:m}};a.components=Object.assign({ParentPageWithTabbedMenuItems:l,CompanyIdHeader:d},a.components);var g=function(){var e=this,s=e.$createElement,n=e._self._c||s;return n("ParentPageWithTabbedMenuItems",{attrs:{value:e.links}},[e.shouldShow?n("BaseVueQuery",{attrs:{query:e.companyRead},scopedSlots:e._u([{key:"success",fn:function(o){var r=o.data;return[n("CompanyIdHeader",{attrs:{company:r}})]}}],null,!1,2108565471)}):e._e()],1)},h=[];const u={};var y=v(a,g,h,!1,$,null,null,null);function $(e){for(let s in u)this[s]=u[s]}const S=function(){return y.exports}();export{S as default};
