import{P as c,u as i}from"./ProductQuotesTable.91c6f9e8.js";import{ca as p,d as l,n as _}from"./index.87a2880c.js";import"./AppTanStackTable.d5252755.js";import"./createOnChangeFn.80d14209.js";import"./chevron-up.736f4142.js";import"./magnifying-glass.b7cbe8fe.js";import"./arrow-down-tray.793d581e.js";import"./FileSaver.min.1452d647.js";import"./createSimpleTable.8b55e9af.js";const r={};r.setup=(t,o)=>{const e=p("id"),u=i.list(e);return{productQuotes:l(()=>{var s;return((s=u.data.value)==null?void 0:s.filter(a=>a.status==="COMPLETE"))||[]})}};r.components=Object.assign({ProductQuotesTable:c},r.components);var m=function(){var t=this,o=t.$createElement,e=t._self._c||o;return e("BaseTablePageLayout",{scopedSlots:t._u([{key:"title",fn:function(){return[t._v("Purchase History")]},proxy:!0},{key:"table",fn:function(){return[e("ProductQuotesTable",{attrs:{"purchase-history":t.productQuotes}})]},proxy:!0}])})},d=[];const n={};var f=_(r,m,d,!1,v,null,null,null);function v(t){for(let o in n)this[o]=n[o]}const j=function(){return f.exports}();export{j as default};