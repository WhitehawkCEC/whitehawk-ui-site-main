import{D as l}from"./DynamicForm.461a2b0a.js";import{W as c,Y as m,Z as u,n as p}from"./index.d7842beb.js";import{S as d}from"./SlugInput.c924dc64.js";const t={};t.props={value:{key:"value",required:!1,type:null,default:void 0},isReadonly:{key:"isReadonly",required:!1,type:Boolean,default:!1}};t.setup=(e,n)=>{const o=e,s=n.emit,r=c(o,s),i=[{name:"id",label:"ID",component:{is:d,attrs:{required:!0,isReadonly:o.isReadonly}}},{name:"name",label:"Name",component:{is:m,attrs:{required:!0}}},{name:"description",label:"Description",component:{is:u}}];return{proxy:r,schema:i}};t.components=Object.assign({DynamicForm:l},t.components);var _=function(){var e=this,n=e.$createElement,o=e._self._c||n;return o("DynamicForm",{attrs:{schema:e.schema},model:{value:e.proxy,callback:function(s){e.proxy=s},expression:"proxy"}})},f=[];const a={};var y=p(t,_,f,!1,v,null,null,null);function v(e){for(let n in a)this[n]=a[n]}const b=function(){return y.exports}();export{b as P};
