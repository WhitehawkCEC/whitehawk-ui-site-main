import{A as m}from"./AppVueGoodTable.b6ba50c4.js";import{n as _,bG as f,g as v,h as S}from"./index.d7842beb.js";const o={};o.props={suppliers:{key:"suppliers",required:!0,type:Array}};o.setup=(e,t)=>({columns:[{label:"Supplier ID",field:"id"},{label:"Supplier Name",field:"name"},{field:"view",sortable:!1}]});o.components=Object.assign({AppVueGoodTable:m},o.components);var b=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"p-4"},[s("AppVueGoodTable",{attrs:{columns:e.columns,rows:e.suppliers},scopedSlots:e._u([{key:"table-row",fn:function(n){var a=n.column,r=n.row;return[a.field==="view"?[s("BaseLink",{attrs:{to:`/admin/companies/whitehawk/journey/individual/${r.id}/scorecards`}},[e._v(" View ")])]:[e._v(" "+e._s(r[a.field])+" ")]]}}])},[e._v(" > ")])],1)},y=[];const p={};var $=_(o,b,y,!1,h,null,null,null);function h(e){for(let t in p)this[t]=p[t]}const w=function(){return $.exports}(),l={};l.setup=(e,t)=>{const s=f("id"),n=Promise.all([v.get(`${S}/companies/${s.value}/scorecards-v2`)]);function a(r){return[...new Set(r.map(i=>i.data.supplier.id))].map(i=>{var c;return{id:i,name:(c=r.find(d=>d.data.supplier.id===i))==null?void 0:c.data.supplier.name}})}return{promises:n,filterScorecards:a}};l.components=Object.assign({ScorecardSuppliersTable:w},l.components);var x=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("section",{staticClass:"space-y-6"},[s("BaseSimpleCard",{staticClass:"divide-y"},[s("BaseTypography",{staticClass:"p-4",attrs:{component:"h2",variant:"subtitle3"}},[e._v(" Suppliers ")]),e.promises?s("BasePromise",{attrs:{promise:e.promises},scopedSlots:e._u([{key:"success",fn:function(n){var a=n.result,r=a[0];return[s("ScorecardSuppliersTable",{attrs:{suppliers:e.filterScorecards(r.data)}})]}}],null,!1,2651979178)}):e._e(),s("div",{staticClass:"p-4"},[s("div",{staticClass:"md:inline-flex"},[s("BaseButton",{attrs:{to:"./new",append:""}},[e._v("Add Supplier")])],1)])],1)],1)},C=[];const u={};var B=_(l,x,C,!1,g,null,null,null);function g(e){for(let t in u)this[t]=u[t]}const T=function(){return B.exports}();export{T as default};
