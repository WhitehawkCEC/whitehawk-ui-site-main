import{P as i,u as l}from"./ProductQuoteTable.05f63008.js";import{bG as p,n as _}from"./index.d7842beb.js";import"./arrow-down-tray.5bfa5b2e.js";import"./AppVueGoodTable.b6ba50c4.js";import"./FileSaver.min.53ff1e2c.js";const r={};r.setup=(t,s)=>{const e=p("id"),o=l.list(e);function n(u){return u.filter(c=>c.status==="COMPLETE")}return{productQuotes:o,filter:n}};r.components=Object.assign({ProductQuoteTable:i},r.components);var d=function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("BaseSimpleCard",{staticClass:"divide-y"},[e("BaseTypography",{staticClass:"p-4",attrs:{component:"h2",variant:"subtitle3"}},[t._v(" Purchase History ")]),e("BaseVueQuery",{attrs:{query:t.productQuotes},scopedSlots:t._u([{key:"success",fn:function(o){var n=o.data;return[e("ProductQuoteTable",{attrs:{"purchase-history":t.filter(n)}})]}}])})],1)},m=[];const a={};var f=_(r,d,m,!1,v,null,null,null);function v(t){for(let s in a)this[s]=a[s]}const x=function(){return f.exports}();export{x as default};
