import{aq as u,b_ as i,n as c}from"./index.e6919ae3.js";import{B as p}from"./BackButton.966582c5.js";import{B as l,u as _}from"./BatchZipFilesTable.76ddb9a2.js";import"./chevron-left.0808b01b.js";import"./AppTanStackTable.a5641ea8.js";import"./createOnChangeFn.ce4cf229.js";import"./chevron-up.736f4142.js";import"./magnifying-glass.b7cbe8fe.js";import"./TransitionExpand.eea022b7.js";import"./FileSaver.min.cc090229.js";import"./createSimpleTable.4b38a2eb.js";const r={};r.setup=(t,n)=>{const e=i("id");return{zipQuery:_.list(e)}};r.components=Object.assign({BackButton:p,PlusSvg:u,BatchZipFilesTable:l},r.components);var m=function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("BaseTablePageLayout",{scopedSlots:t._u([{key:"backButton",fn:function(){return[e("BackButton")]},proxy:!0},{key:"title",fn:function(){return[t._v("ZIP Files")]},proxy:!0},{key:"button",fn:function(){return[e("BaseButton",{staticClass:"space-x-1",attrs:{to:"./new",append:""}},[e("PlusSvg",{staticClass:"w-4 xl:w-5"}),e("span",[t._v("ZIP File")])],1)]},proxy:!0},{key:"table",fn:function(){return[e("BaseVueQuery",{attrs:{query:t.zipQuery},scopedSlots:t._u([{key:"success",fn:function(s){var a=s.data;return[e("BatchZipFilesTable",{attrs:{"zip-files":a}})]}}])})]},proxy:!0}])})},f=[];const o={};var y=c(r,m,f,!1,B,null,null,null);function B(t){for(let n in o)this[n]=o[n]}const g=function(){return y.exports}();export{g as default};