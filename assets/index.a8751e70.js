import{A as m}from"./AccountSummaryTable.4fcb8981.js";import{A as p}from"./AggregateLicenseDisplay.391948a3.js";import{b$ as _,cz as d,c as r,n as f}from"./index.81c86bc2.js";import"./AppTanStackTable.ae681d4c.js";import"./createOnChangeFn.8a95d919.js";import"./chevron-up.736f4142.js";import"./magnifying-glass.b7cbe8fe.js";import"./TransitionExpand.943da4d5.js";import"./IsoDateTimeDisplay.5c0812df.js";import"./createSimpleTable.41a2acf8.js";const c={};c.setup=(t,s)=>{const e=_("id"),o=d.get(e),u=r(()=>{var a,n;return((n=(a=o.data.value)==null?void 0:a.data)==null?void 0:n.totalLicenses)||{}}),l=r(()=>{var a,n;return((n=(a=o.data.value)==null?void 0:a.data)==null?void 0:n.licenseBatches)||[]});return{summary:o,totalLicenses:u,licenseBatches:l}};c.components=Object.assign({AggregateLicenseDisplay:p,AccountSummaryTable:m},c.components);var y=function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("BaseVueQuery",{attrs:{query:t.summary},scopedSlots:t._u([{key:"success",fn:function(){return[e("section",{staticClass:"space-y-6"},[e("AggregateLicenseDisplay",{attrs:{"license-usage":t.totalLicenses}}),e("BaseSimpleCard",{staticClass:"divide-y"},[e("h2",{staticClass:"p-4 font-display text-lg font-semibold"},[t._v(" License Batches ")]),e("AccountSummaryTable",{attrs:{batches:t.licenseBatches}})],1)],1)]},proxy:!0}])})},v=[];const i={};var g=f(c,y,v,!1,h,null,null,null);function h(t){for(let s in i)this[s]=i[s]}const R=function(){return g.exports}();export{R as default};