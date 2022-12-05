import{F as v}from"./FormButton.683947c2.js";import{Q as y}from"./QuestionnairePreferenceInput.e6c5f251.js";import{c5 as p,cZ as c,c as b,d4 as h,c4 as q,b$ as Q,aF as C,aK as S,n as x}from"./index.76f70903.js";import{s as B}from"./index.873d1b66.js";import"./arrow-down-on-square.bf61cdc5.js";import"./trash.78f57a7a.js";import"./DynamicForm.1897c2ae.js";const a={};a.setup=(t,n)=>{const e=p("id"),s=p("preferenceId"),o=c.read(e,s),r=B(b(()=>o.data.value||h.QuestionnairePreference.create())),i=[q.list(),Q.list(),c.list(e)],u=C(),f=S(),m=c.update(e,s);async function d(){const{response:_}=await m.mutateAsync(r.value);_.questionnairePreference&&(u.success("Successfully updated company questionnaire."),f.push(`/admin/companies/${e.value}/settings/questionnaires`))}return{preference:r,queries:i,update:d}};a.components=Object.assign({QuestionnairePreferenceInput:y,FormButton:v},a.components);var P=function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("BaseSimpleCard",{staticClass:"divide-y"},[e("BaseTypography",{staticClass:"p-4",attrs:{component:"h3",variant:"subtitle3"}},[t._v(" Update Company Questionnaire ")]),e("form",{staticClass:"divide-y",on:{submit:function(s){return s.preventDefault(),t.update.apply(null,arguments)}}},[e("BaseVueQueries",{attrs:{queries:t.queries},scopedSlots:t._u([{key:"success",fn:function(s){var o=s[0],r=s[1],i=s[2];return[e("QuestionnairePreferenceInput",{attrs:{"bundle-sets":o,questionnaires:r,preferences:i},model:{value:t.preference,callback:function(u){t.preference=u},expression:"preference"}})]}}])}),e("FormButton",{attrs:{action:"update"}})],1)],1)},g=[];const l={};var F=x(a,P,g,!1,R,null,null,null);function R(t){for(let n in l)this[n]=l[n]}const U=function(){return F.exports}();export{U as default};