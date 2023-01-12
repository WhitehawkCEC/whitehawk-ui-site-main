import{d,n as v,bs as x,bH as g,bi as h}from"./index.87a2880c.js";import{S as b}from"./StatisticDisplayCard.d952e570.js";import{A}from"./AppTanStackTable.d5252755.js";import{c as B}from"./createOnChangeFn.80d14209.js";import{u as S}from"./createSimpleTable.8b55e9af.js";import{u as _}from"./useAllCompanyAccess.48df17e2.js";import"./magnifying-glass.b7cbe8fe.js";import"./arrow-down-tray.793d581e.js";import"./chevron-up.736f4142.js";const o={};o.props={companies:{key:"companies",required:!0,type:Array},access:{key:"access",required:!0,type:Array}};o.setup=(e,t)=>{const s=e,m=d(()=>s.companies.map(a=>{const{id:l}=a,p=i(l).length,C=a.creator.email;return{company:a,users:p,createdBy:C}}));function i(a){const l=[];return s.access.filter(p=>{p.company.id===a&&l.push(p.user)}),l}const r=B(),n=[r.accessor(a=>a.company.name,{id:"company",header:()=>"Company",cell:a=>a.getValue()}),r.accessor("users",{header:()=>"Total Users",enableColumnFilter:!1}),r.accessor("createdBy",{header:()=>"Created By",enableColumnFilter:!1})];return{instance:S(m,n)}};o.components=Object.assign({AppTanStackTable:A},o.components);var T=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("AppTanStackTable",{attrs:{table:e.instance}})},k=[];const y={};var $=v(o,T,k,!1,q,null,null,null);function q(e){for(let t in y)this[t]=y[t]}const j=function(){return $.exports}(),u={};u.setup=(e,t)=>{const s={title:"Total Companies",component:h},m=[_.list()],i=d(()=>{const n=g.list().data.value;return n?n.filter(c=>c.status==="ACTIVE"):[]}),r=d(()=>_.list().data.value.filter(n=>{var c;return(c=i.value)==null?void 0:c.find(a=>n.company.id===a.id)}));return{companySummary:s,queries:m,activeCompanies:i,activeCompanyAccess:r}};u.components=Object.assign({BackButton:x,StatisticDisplayCard:b,AdminCannedCompanyTable:j},u.components);var F=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("section",{staticClass:"space-y-8"},[s("div",{staticClass:"flex flex-col space-y-4 sm:flex-row sm:items-center sm:space-x-4 sm:space-y-2"},[s("BackButton",{attrs:{link:".."}}),s("div",{staticClass:"flex flex-col -space-y-1"},[s("BaseTypography",{staticClass:"uppercase text-gray-600",attrs:{variant:"overline"}},[e._v(" Canned Report ")]),s("BaseTypography",{attrs:{component:"h2",variant:"h5"}},[e._v("Companies")])],1)],1),s("BaseVueQueries",{attrs:{queries:e.queries},scopedSlots:e._u([{key:"success",fn:function(){return[s("div",{staticClass:"space-y-6"},[s("div",{staticClass:"grid gap-6 lg:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4"},[s("StatisticDisplayCard",{attrs:{value:e.companySummary,number:e.activeCompanies.length}})],1),s("AdminCannedCompanyTable",{attrs:{access:e.activeCompanyAccess,companies:e.activeCompanies}})],1)]},proxy:!0}])})],1)},V=[];const f={};var E=v(u,F,V,!1,H,null,null,null);function H(e){for(let t in f)this[t]=f[t]}const G=function(){return E.exports}();export{G as default};