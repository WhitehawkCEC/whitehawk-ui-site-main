import{bs as u,ao as i,b$ as c,n as p}from"./index.fc55cc4e.js";import{B as l,u as _}from"./BatchZipFilesTable.0a3cb499.js";import"./AppTanStackTable.68292bec.js";import"./createOnChangeFn.0cc5c1a4.js";import"./chevron-up.736f4142.js";import"./magnifying-glass.b7cbe8fe.js";import"./TransitionExpand.666d84b4.js";import"./FileSaver.min.5a756d23.js";import"./createSimpleTable.a6fc7c41.js";const r={};r.setup=(t,n)=>{const e=c("id");return{zipQuery:_.list(e)}};r.components=Object.assign({BackButton:u,PlusSvg:i,BatchZipFilesTable:l},r.components);var f=function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("BaseTablePageLayout",{scopedSlots:t._u([{key:"backButton",fn:function(){return[e("BackButton")]},proxy:!0},{key:"title",fn:function(){return[t._v("ZIP Files")]},proxy:!0},{key:"button",fn:function(){return[e("BaseButton",{staticClass:"space-x-1",attrs:{to:"./new",append:""}},[e("PlusSvg",{staticClass:"w-4 xl:w-5"}),e("span",[t._v("ZIP File")])],1)]},proxy:!0},{key:"table",fn:function(){return[e("BaseVueQuery",{attrs:{query:t.zipQuery},scopedSlots:t._u([{key:"success",fn:function(s){var a=s.data;return[e("BatchZipFilesTable",{attrs:{"zip-files":a}})]}}])})]},proxy:!0}])})},m=[];const o={};var y=p(r,f,m,!1,d,null,null,null);function d(t){for(let n in o)this[n]=o[n]}const F=function(){return y.exports}();export{F as default};
