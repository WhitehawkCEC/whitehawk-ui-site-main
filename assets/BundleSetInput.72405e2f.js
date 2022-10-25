import{D as f}from"./DynamicForm.e497462e.js";import{aB as m,r as v,c as _,n as d,b0 as y}from"./index.1f71e50f.js";const c={};c.props={value:{key:"value",required:!1,type:Array},options:{key:"options",required:!0,type:Array}};c.setup=(e,s)=>{const t=e,n=s.emit,o=m(t,n),r=v(!0),i=_({get(){return t.value},set(l){r?l&&r&&(o.value=l):o.value=[]}});return{confirm:r,selected:i}};var x=function(){var e=this,s=e.$createElement,t=e._self._c||s;return t("div",{staticClass:"space-y-4"},[t("BaseLabel",{staticClass:"flex items-center space-x-2"},[t("BaseInput",{attrs:{type:"checkbox"},model:{value:e.confirm,callback:function(n){e.confirm=n},expression:"confirm"}}),t("span",[e._v("Assign to companies?")])],1),e.confirm?t("BaseSelect",{staticClass:"w-full",attrs:{multiple:""},model:{value:e.selected,callback:function(n){e.selected=n},expression:"selected"}},e._l(e.options,function(n){return t("option",{key:n.name,domProps:{value:n}},[e._v(" "+e._s(n.name)+" ")])}),0):e._e()],1)},b=[];const u={};var k=d(c,x,b,!1,h,null,null,null);function h(e){for(let s in u)this[s]=u[s]}const q=function(){return k.exports}(),a={};a.props={value:{key:"value",required:!1,type:null,default:void 0},companies:{key:"companies",required:!0,type:Array},industries:{key:"industries",required:!0,type:Array},templates:{key:"templates",required:!0,type:Array}};a.setup=(e,s)=>{const t=e,n=s.emit,o=m(t,n),r=_(()=>[{name:"name",label:"Name",component:{is:"BaseInput",attrs:{required:!0}}},{name:"description",label:"Description",component:{is:"BaseTextarea",attrs:{required:!0}}},{name:"industries",label:"Industries",component:{is:y,attrs:{multiple:"",required:!0,options:[...t.industries.map(i=>({text:i.name,value:i}))]}}},{name:"assignedToCompanies",label:"Assign To Companies",component:{is:q,attrs:{options:t.companies}}}]);return{proxy:o,schema:r}};a.components=Object.assign({DynamicForm:f},a.components);var A=function(){var e=this,s=e.$createElement,t=e._self._c||s;return t("DynamicForm",{attrs:{schema:e.schema},model:{value:e.proxy,callback:function(n){e.proxy=n},expression:"proxy"}})},B=[];const p={};var $=d(a,A,B,!1,C,null,null,null);function C(e){for(let s in p)this[s]=p[s]}const D=function(){return $.exports}();export{D as B};
