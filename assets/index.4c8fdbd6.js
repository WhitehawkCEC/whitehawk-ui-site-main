import{A as m}from"./AccountSummaryTable.a41e92d3.js";import{A as p}from"./AggregateLicenseDisplay.a488f9b2.js";import{c1 as _,cF as d,c as r,n as f}from"./index.77543f41.js";import"./AppTanStackTable.1ffd209b.js";import"./createOnChangeFn.bcf271e6.js";import"./chevron-up.736f4142.js";import"./magnifying-glass.b7cbe8fe.js";import"./TransitionExpand.cf25d155.js";import"./IsoDateTimeDisplay.cac187dc.js";import"./createSimpleTable.1801a7a9.js";const c={};c.setup=(t,s)=>{const e=_("id"),o=d.get(e),u=r(()=>{var a,n;return((n=(a=o.data.value)==null?void 0:a.data)==null?void 0:n.totalLicenses)||{}}),l=r(()=>{var a,n;return((n=(a=o.data.value)==null?void 0:a.data)==null?void 0:n.licenseBatches)||[]});return{summary:o,totalLicenses:u,licenseBatches:l}};c.components=Object.assign({AggregateLicenseDisplay:p,AccountSummaryTable:m},c.components);var y=function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("BaseVueQuery",{attrs:{query:t.summary},scopedSlots:t._u([{key:"success",fn:function(){return[e("section",{staticClass:"space-y-6"},[e("AggregateLicenseDisplay",{attrs:{"license-usage":t.totalLicenses}}),e("BaseSimpleCard",{staticClass:"divide-y"},[e("h2",{staticClass:"p-4 font-display text-lg font-semibold"},[t._v(" License Batches ")]),e("AccountSummaryTable",{attrs:{batches:t.licenseBatches}})],1)],1)]},proxy:!0}])})},v=[];const i={};var g=f(c,y,v,!1,h,null,null,null);function h(t){for(let s in i)this[s]=i[s]}const R=function(){return g.exports}();export{R as default};