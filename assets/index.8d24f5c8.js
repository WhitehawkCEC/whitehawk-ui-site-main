import{F as y}from"./FormButton.8ea903a2.js";import{bs as C,bl as b,d as c,b as B,aK as h,bH as x,n as g}from"./index.1543f442.js";import{C as k,u as F}from"./CompanyInput.9da801f8.js";import{u as S}from"./useUsers.b99a3af0.js";import"./arrow-down-on-square.bf61cdc5.js";import"./trash.78f57a7a.js";import"./DynamicForm.96efdff6.js";import"./AddressClaimInput.3aae304b.js";import"./attributeValue.ea53a720.js";import"./FormValidation.a5e2f641.js";const n={};n.setup=(t,a)=>{const s=b(),e=c(()=>{if(s.user){const{id:r,email:i}=s.user;return{id:r,email:i}}}),o=B(),m=S.list(),p=c(()=>m.data.value||[]),l=F.list(),d=c(()=>l.data.value||[]),v=h(),_=x.create();async function f(){if(o.value&&e.value){const r={...o.value,creator:e.value},i=await _.mutateAsync(r);v.push(`/admin/companies/${i.id}/settings`)}}return{company:o,users:p,industries:d,createCompany:f}};n.components=Object.assign({BackButton:C,CompanyInput:k,FormButton:y},n.components);var U=function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("section",{staticClass:"space-y-6"},[s("BackButton",{attrs:{link:"/admin/companies"}}),s("BaseSimpleCard",{staticClass:"divide-y"},[s("BaseTypography",{staticClass:"p-4",attrs:{component:"h2",variant:"subtitle3"}},[t._v(" Create Company ")]),s("form",{staticClass:"divide-y",on:{submit:function(e){return e.preventDefault(),t.createCompany.apply(null,arguments)}}},[s("CompanyInput",{attrs:{industries:t.industries,users:t.users},model:{value:t.company,callback:function(e){t.company=e},expression:"company"}}),s("FormButton",{attrs:{action:"create"}})],1)],1)],1)},I=[];const u={};var j=g(n,U,I,!1,A,null,null,null);function A(t){for(let a in u)this[a]=u[a]}const O=function(){return j.exports}();export{O as default};