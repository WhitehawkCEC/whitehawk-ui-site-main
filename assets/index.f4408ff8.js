import{bs as u,ao as i,b$ as c,n as p}from"./index.ffd5f45d.js";import{B as l}from"./BatchZipFilesTable.44ed641d.js";import{u as _}from"./useBatchScorecardsZip.4741c806.js";import"./AppTanStackTable.2d43b54b.js";import"./createOnChangeFn.e6dad83b.js";import"./chevron-up.736f4142.js";import"./magnifying-glass.b7cbe8fe.js";import"./TransitionExpand.ff112907.js";import"./FileSaver.min.6cc5e77d.js";import"./createSimpleTable.97fff998.js";const r={};r.setup=(t,n)=>{const e=c("id");return{zipQuery:_.list(e)}};r.components=Object.assign({BackButton:u,PlusSvg:i,BatchZipFilesTable:l},r.components);var f=function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("BaseTablePageLayout",{scopedSlots:t._u([{key:"backButton",fn:function(){return[e("BackButton")]},proxy:!0},{key:"title",fn:function(){return[t._v("ZIP Files")]},proxy:!0},{key:"button",fn:function(){return[e("BaseButton",{staticClass:"space-x-1",attrs:{to:"./new",append:""}},[e("PlusSvg",{staticClass:"w-4 xl:w-5"}),e("span",[t._v("ZIP File")])],1)]},proxy:!0},{key:"table",fn:function(){return[e("BaseVueQuery",{attrs:{query:t.zipQuery},scopedSlots:t._u([{key:"success",fn:function(s){var a=s.data;return[e("BatchZipFilesTable",{attrs:{"zip-files":a}})]}}])})]},proxy:!0}])})},m=[];const o={};var y=p(r,f,m,!1,d,null,null,null);function d(t){for(let n in o)this[n]=o[n]}const Z=function(){return y.exports}();export{Z as default};
