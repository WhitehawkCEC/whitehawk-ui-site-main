import{F as d}from"./FormButton.811f9150.js";import{D as v}from"./DynamicForm.384793f5.js";import{aB as y,n as l,c1 as k,bW as u,c as w,cL as x,aI as F,aF as h}from"./index.77543f41.js";import{s as b}from"./index.b22946b3.js";import"./arrow-down-on-square.bf61cdc5.js";import"./trash.78f57a7a.js";const n={};n.props={value:{key:"value",required:!0,type:null}};n.setup=(e,t)=>{const r=e,o=t.emit;return{proxy:y(r,o),schema:[{name:"name",label:"Name",component:{is:"BaseInput",attrs:{required:!0}}},{name:"description",label:"Description",component:{is:"BaseTextarea"}}]}};n.components=Object.assign({DynamicForm:v},n.components);var $=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("DynamicForm",{attrs:{schema:e.schema},model:{value:e.proxy,callback:function(o){e.proxy=o},expression:"proxy"}})},D=[];const m={};var B=l(n,$,D,!1,R,null,null,null);function R(e){for(let t in m)this[t]=m[t]}const C=function(){return B.exports}(),a={};a.setup=(e,t)=>{const r=k("id"),o=u.read(r),s=b(w(()=>o.data.value||x.create())),c=F(),p=h(),f=u.update();async function _(){await f.mutateAsync({framework:s.value}),p.success("Successfully updated framework."),c.push("/admin/frameworks")}return{framework:s,updateFramework:_}};a.components=Object.assign({ComplianceFrameworkInput:C,FormButton:d},a.components);var S=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("BaseFormPageLayout",{scopedSlots:e._u([{key:"formTitle",fn:function(){return[e._v("Update Compliance Framework")]},proxy:!0},{key:"form",fn:function(){return[r("form",{staticClass:"divide-y",on:{submit:function(o){return o.preventDefault(),e.updateFramework.apply(null,arguments)}}},[r("ComplianceFrameworkInput",{model:{value:e.framework,callback:function(o){e.framework=o},expression:"framework"}}),r("FormButton",{attrs:{action:"update"}})],1)]},proxy:!0}])})},g=[];const i={};var j=l(a,S,g,!1,I,null,null,null);function I(e){for(let t in i)this[t]=i[t]}const O=function(){return j.exports}();export{O as default};
