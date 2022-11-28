import{F as b}from"./FormButton.137fb130.js";import{aB as q,c as v,b0 as m,bY as c,n as f,bs as h,c3 as C,bZ as d,bV as B,aI as Q,aF as S}from"./index.2330016c.js";import{D as k}from"./DynamicForm.ea552917.js";import{s as D}from"./index.d8686498.js";import"./arrow-down-on-square.bf61cdc5.js";import"./trash.78f57a7a.js";const i={};i.props={value:{key:"value",required:!1,type:null},industries:{key:"industries",required:!0,type:Array}};i.setup=(e,s)=>{const t=e,n=s.emit,a=q(t,n),o=v(()=>t.industries.map(({id:r,name:u})=>({key:r==null?void 0:r.value,text:u,value:u}))),p=[{name:"name",label:"Name",component:{is:"BaseInput",attrs:{required:!0}}},{name:"type",label:"Type",component:{is:m,attrs:{required:!0,options:[{text:" ",value:c.QuestionnaireType.UNSPECIFIED},{text:"Canned",value:c.QuestionnaireType.CANNED},{text:"Custom",value:c.QuestionnaireType.CUSTOM}]}}},{name:"industry",label:"Industry",component:{is:m,attrs:{required:!0,options:o.value}}},{name:"description",label:"Description",component:{is:"BaseTextarea"}}];return{proxy:a,schema:p}};i.components=Object.assign({DynamicForm:k},i.components);var F=function(){var e=this,s=e.$createElement,t=e._self._c||s;return t("DynamicForm",{attrs:{schema:e.schema},model:{value:e.proxy,callback:function(n){e.proxy=n},expression:"proxy"}})},I=[];const _={};var $=f(i,F,I,!1,T,null,null,null);function T(e){for(let s in _)this[s]=_[s]}const R=function(){return $.exports}(),l={};l.setup=(e,s)=>{const t=C("id"),n=d.read(t),a=D(v(()=>n.data.value||c.CustomQuestionnaire.create())),o=B.list(),p=Q(),r=S(),u=d.update(t);async function x(){await u.mutateAsync({questionnaire:a.value}),r.success("Successfully updated questionnaire."),p.back()}return{questionnaire:a,industriesList:o,updateQuestionnaire:x}};l.components=Object.assign({BackButton:h,QuestionnaireInput:R,FormButton:b},l.components);var g=function(){var e=this,s=e.$createElement,t=e._self._c||s;return t("section",{staticClass:"space-y-6"},[t("BackButton"),t("BaseSimpleCard",{staticClass:"divide-y"},[t("BaseTypography",{staticClass:"p-4",attrs:{component:"h2",variant:"subtitle3"}},[e._v(" Update Questionnaire ")]),t("form",{staticClass:"divide-y",on:{submit:function(n){return n.preventDefault(),e.updateQuestionnaire.apply(null,arguments)}}},[t("BaseVueQuery",{attrs:{query:e.industriesList},scopedSlots:e._u([{key:"success",fn:function(n){var a=n.data;return[t("QuestionnaireInput",{attrs:{industries:a},model:{value:e.questionnaire,callback:function(o){e.questionnaire=o},expression:"questionnaire"}})]}}])}),t("FormButton",{attrs:{action:"update"}})],1)],1)],1)},E=[];const y={};var N=f(l,g,E,!1,j,null,null,null);function j(e){for(let s in y)this[s]=y[s]}const L=function(){return N.exports}();export{L as default};
