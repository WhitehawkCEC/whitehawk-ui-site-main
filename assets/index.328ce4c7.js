import{P as a,u as i}from"./ProductQuotesTable.94de358c.js";import{c9 as p,d as l,n as _}from"./index.e627960d.js";import"./AppTanStackTable.9bda351a.js";import"./createOnChangeFn.7e56f0c4.js";import"./chevron-up.736f4142.js";import"./magnifying-glass.b7cbe8fe.js";import"./FileSaver.min.d1d8f9ff.js";import"./createSimpleTable.7ef16907.js";const r={};r.setup=(t,o)=>{const e=p("id"),u=i.list(e);return{productQuotes:l(()=>{var s;return((s=u.data.value)==null?void 0:s.filter(c=>c.status==="COMPLETE"))||[]})}};r.components=Object.assign({ProductQuotesTable:a},r.components);var m=function(){var t=this,o=t.$createElement,e=t._self._c||o;return e("BaseTablePageLayout",{scopedSlots:t._u([{key:"title",fn:function(){return[t._v("Purchase History")]},proxy:!0},{key:"table",fn:function(){return[e("ProductQuotesTable",{attrs:{"purchase-history":t.productQuotes}})]},proxy:!0}])})},d=[];const n={};var f=_(r,m,d,!1,v,null,null,null);function v(t){for(let o in n)this[o]=n[o]}const g=function(){return f.exports}();export{g as default};
