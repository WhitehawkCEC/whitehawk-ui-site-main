import{an as _,c7 as d,cF as f,d as c,aH as y,n as v}from"./index.b52a2fa9.js";import{A as h}from"./AccountSummaryTable.f4ef91e3.js";import{A as g}from"./AggregateLicenseDisplay.94286c49.js";import"./AppTanStackTable.fda5a887.js";import"./createOnChangeFn.afc6cba5.js";import"./chevron-up.736f4142.js";import"./magnifying-glass.b7cbe8fe.js";import"./TransitionExpand.dd5c9b46.js";import"./IsoDateTimeDisplay.9797c375.js";import"./createSimpleTable.9a1ea957.js";const o={};o.setup=(t,s)=>{const e=d("id"),r=f.get(e),l=c(()=>{var n,a;return((a=(n=r.data.value)==null?void 0:n.data)==null?void 0:a.totalLicenses)||{}}),m=c(()=>{var n,a;return((a=(n=r.data.value)==null?void 0:n.data)==null?void 0:a.licenseBatches)||[]}),i=y(),p=c(()=>i.isAdmin||i.isAnalyst);return{totalLicenses:l,licenseBatches:m,shouldShowButton:p}};o.components=Object.assign({PlusSvg:_,AccountSummaryTable:h,AggregateLicenseDisplay:g},o.components);var S=function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("section",{staticClass:"space-y-6"},[e("BaseTablePageLayout",{scopedSlots:t._u([{key:"title",fn:function(){return[t._v("License Batches")]},proxy:!0},{key:"button",fn:function(){return[t.shouldShowButton?e("BaseButton",{staticClass:"space-x-2",attrs:{to:"./new",append:""}},[e("PlusSvg",{staticClass:"w-4 xl:w-5"}),e("span",[t._v("License Batch")])],1):t._e()]},proxy:!0},{key:"table",fn:function(){return[e("AccountSummaryTable",{attrs:{batches:t.licenseBatches}})]},proxy:!0}])}),e("AggregateLicenseDisplay",{attrs:{"license-usage":t.totalLicenses}})],1)},x=[];const u={};var B=v(o,S,x,!1,A,null,null,null);function A(t){for(let s in u)this[s]=u[s]}const R=function(){return B.exports}();export{R as default};