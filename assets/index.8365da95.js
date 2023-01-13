import{F as v}from"./FormButton.7075a329.js";import{Q as y}from"./QuestionnairePreferenceInput.06a298a4.js";import{ca as p,cS as c,d as h,dC as q,c8 as C,c1 as Q,aF as S,aK as b,n as x}from"./index.1144ecd1.js";import{s as B}from"./index.2bf4243c.js";import"./arrow-down-on-square.bf61cdc5.js";import"./trash.78f57a7a.js";import"./DynamicForm.70fc1268.js";const a={};a.setup=(t,n)=>{const e=p("id"),s=p("preferenceId"),o=c.read(e,s),r=B(h(()=>o.data.value||q.QuestionnairePreference.create())),i=[C.list(),Q.list(),c.list(e)],u=S(),f=b(),m=c.update(e,s);async function d(){const{response:_}=await m.mutateAsync(r.value);_.questionnairePreference&&(u.success("Successfully updated company questionnaire."),f.push(`/admin/companies/${e.value}/settings/questionnaires`))}return{preference:r,queries:i,update:d}};a.components=Object.assign({QuestionnairePreferenceInput:y,FormButton:v},a.components);var P=function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("BaseSimpleCard",{staticClass:"divide-y"},[e("BaseTypography",{staticClass:"p-4",attrs:{component:"h3",variant:"subtitle3"}},[t._v(" Update Company Questionnaire ")]),e("form",{staticClass:"divide-y",on:{submit:function(s){return s.preventDefault(),t.update.apply(null,arguments)}}},[e("BaseVueQueries",{attrs:{queries:t.queries},scopedSlots:t._u([{key:"success",fn:function(s){var o=s[0],r=s[1],i=s[2];return[e("QuestionnairePreferenceInput",{attrs:{"bundle-sets":o,questionnaires:r,preferences:i},model:{value:t.preference,callback:function(u){t.preference=u},expression:"preference"}})]}}])}),e("FormButton",{attrs:{action:"update"}})],1)],1)},g=[];const l={};var F=x(a,P,g,!1,R,null,null,null);function R(t){for(let n in l)this[n]=l[n]}const $=function(){return F.exports}();export{$ as default};