import{F as f}from"./FormButton.6049583a.js";import{B as _}from"./BackButton.01c40626.js";import{E as x,u as y}from"./ExternalAccessInput.bf86b402.js";import{b$ as u,bF as B,r as A,aB as E,aJ as h,n as k}from"./index.2f8dadb3.js";import{u as p}from"./useBlackKiteExternalAccess.7debbf7c.js";import"./arrow-down-on-square.bf61cdc5.js";import"./trash.78f57a7a.js";import"./chevron-left.0808b01b.js";import"./DynamicForm.ae78fcbe.js";const r={};r.setup=(t,n)=>{const s=u("id"),e=u("externalId"),o=[B.list(),y.get(s)],i=p.read(s,e),a=A();E(()=>i.data.value,c=>{c&&(a.value=c)},{immediate:!0});const m=h(),d=p.update(s,e);async function v(){if(a.value){const c=a.value;await d.mutateAsync(c),m.push(`/admin/companies/${s.value}/rating-service-2/access`)}}return{id:s,queries:o,access:a,updateAccess:v}};r.components=Object.assign({BackButton:_,ExternalAccessInput:x,FormButton:f},r.components);var C=function(){var t=this,n=t.$createElement,s=t._self._c||n;return s("div",{staticClass:"space-y-6"},[s("BackButton",{attrs:{link:`/admin/companies/${t.id}/rating-service-2/access`}}),s("BaseSimpleCard",{staticClass:"divide-y"},[s("BaseTypography",{staticClass:"p-4",attrs:{component:"h2",variant:"subtitle3"}},[t._v(" Update External Access ")]),s("form",{staticClass:"divide-y",on:{submit:function(e){return e.preventDefault(),t.updateAccess.apply(null,arguments)}}},[s("BaseVueQueries",{attrs:{queries:t.queries},scopedSlots:t._u([{key:"success",fn:function(e){var o=e[0],i=e[1];return[s("ExternalAccessInput",{attrs:{"provider-options":i,companies:o},model:{value:t.access,callback:function(a){t.access=a},expression:"access"}})]}}])}),s("FormButton",{attrs:{action:"update"}})],1)],1)],1)},b=[];const l={};var g=k(r,C,b,!1,F,null,null,null);function F(t){for(let n in l)this[n]=l[n]}const U=function(){return g.exports}();export{U as default};