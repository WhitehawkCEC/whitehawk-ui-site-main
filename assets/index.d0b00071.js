import{bs as p,an as m,c7 as _,cF as f,d as r,n as y}from"./index.a3119a0b.js";import{A as d}from"./AccountSummaryTable.5d1de28e.js";import{A as v}from"./AggregateLicenseDisplay.77618a13.js";import"./AppTanStackTable.fe49f065.js";import"./createOnChangeFn.8f7c5b22.js";import"./chevron-up.736f4142.js";import"./magnifying-glass.b7cbe8fe.js";import"./TransitionExpand.c4dabd8d.js";import"./IsoDateTimeDisplay.a4d7a120.js";import"./createSimpleTable.1c42ee1b.js";const o={};o.setup=(e,s)=>{const t=_("id"),c=f.get(t),u=r(()=>{var n,a;return((a=(n=c.data.value)==null?void 0:n.data)==null?void 0:a.totalLicenses)||{}}),l=r(()=>{var n,a;return((a=(n=c.data.value)==null?void 0:n.data)==null?void 0:a.licenseBatches)||[]});return{totalLicenses:u,licenseBatches:l}};o.components=Object.assign({BackButton:p,PlusSvg:m,AccountSummaryTable:d,AggregateLicenseDisplay:v},o.components);var B=function(){var e=this,s=e.$createElement,t=e._self._c||s;return t("section",{staticClass:"space-y-6"},[t("BaseTablePageLayout",{scopedSlots:e._u([{key:"backButton",fn:function(){return[t("BackButton",{attrs:{link:"./in-depth"}})]},proxy:!0},{key:"title",fn:function(){return[e._v("License Batches")]},proxy:!0},{key:"button",fn:function(){return[t("BaseButton",{staticClass:"space-x-2",attrs:{to:"./new",append:""}},[t("PlusSvg",{staticClass:"-ml-1 w-5"}),t("span",[e._v("License Batch")])],1)]},proxy:!0},{key:"table",fn:function(){return[t("AccountSummaryTable",{attrs:{batches:e.licenseBatches}})]},proxy:!0}])}),t("AggregateLicenseDisplay",{attrs:{"license-usage":e.totalLicenses}})],1)},g=[];const i={};var h=y(o,B,g,!1,x,null,null,null);function x(e){for(let s in i)this[s]=i[s]}const D=function(){return h.exports}();export{D as default};