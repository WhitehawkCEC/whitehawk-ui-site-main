import{F as x}from"./FormButton.ccb2e5ec.js";import{aB as b,c as p,b0 as h,n as v,bs as q,c1 as B,bX as m,cL as k,bV as C,aI as F,aF as $}from"./index.34d10044.js";import{D as Q}from"./DynamicForm.3e24d6d4.js";import{s as S}from"./index.ef4631a0.js";import"./arrow-down-on-square.bf61cdc5.js";import"./trash.78f57a7a.js";const o={};o.props={value:{key:"value",required:!0,type:null},industries:{key:"industries",required:!0,type:Array}};o.setup=(t,s)=>{const e=t,n=s.emit,r=b(e,n),c=p(()=>e.industries.map(({id:a,name:i})=>({key:a==null?void 0:a.value,text:i,value:i}))),l=[{name:"name",label:"Name",component:{is:"BaseInput",attrs:{required:!0}}},{name:"industry",label:"Industry",component:{is:h,attrs:{required:!0,options:c.value}}}];return{proxy:r,schema:l}};o.components=Object.assign({DynamicForm:Q},o.components);var D=function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("DynamicForm",{attrs:{schema:t.schema},model:{value:t.proxy,callback:function(n){t.proxy=n},expression:"proxy"}})},I=[];const d={};var R=v(o,D,I,!1,g,null,null,null);function g(t){for(let s in d)this[s]=d[s]}const j=function(){return R.exports}(),u={};u.setup=(t,s)=>{const e=B("id"),n=m.read(e),r=S(p(()=>n.data.value||k.CustomQuestionnaire.create())),c=C.list(),l=p(()=>c.data.value||[]),a=F(),i=$(),f=m.update(e);async function y(){await f.mutateAsync({questionnaire:r.value}),i.success("Successfully updated questionnaire."),a.back()}return{questionnaire:r,industries:l,updateQuestionnaire:y}};u.components=Object.assign({BackButton:q,QuestionnaireInput:j,FormButton:x},u.components);var O=function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("section",{staticClass:"space-y-6"},[e("BackButton"),e("BaseSimpleCard",{staticClass:"divide-y"},[e("BaseTypography",{staticClass:"p-4",attrs:{component:"h2",variant:"subtitle3"}},[t._v(" Update Questionnaire ")]),e("form",{staticClass:"divide-y",on:{submit:function(n){return n.preventDefault(),t.updateQuestionnaire.apply(null,arguments)}}},[e("QuestionnaireInput",{attrs:{industries:t.industries},model:{value:t.questionnaire,callback:function(n){t.questionnaire=n},expression:"questionnaire"}}),e("FormButton",{attrs:{action:"update"}})],1)],1)],1)},w=[];const _={};var A=v(u,O,w,!1,E,null,null,null);function E(t){for(let s in _)this[s]=_[s]}const T=function(){return A.exports}();export{T as default};
