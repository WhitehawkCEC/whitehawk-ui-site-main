import{aq as p,r as m,aJ as l,bD as y,n as _}from"./index.f5fd5acd.js";import{B as d}from"./BackButton.20be8d93.js";import{C as v,u as C}from"./CompanyInput.e3e62470.js";import"./chevron-left.0808b01b.js";import"./DynamicForm.de01508f.js";import"./AddressClaimInput.3719287a.js";import"./index.df251787.js";import"./FormValidation.907ef868.js";const e={};e.setup=(s,a)=>{const t=m(),n=C.list(),o=l(),r=y.create();async function c(){const u=await r.mutateAsync(t.value);o.push(`/admin/companies/${u.id}/settings`)}return{company:t,industriesQuery:n,createCompany:c}};e.components=Object.assign({BackButton:d,CompanyInput:v,PlusSvg:p},e.components);var f=function(){var s=this,a=s.$createElement,t=s._self._c||a;return t("section",{staticClass:"space-y-6"},[t("BackButton",{attrs:{link:"/admin/companies"}}),t("BaseSimpleCard",{staticClass:"divide-y"},[t("BaseTypography",{staticClass:"p-4",attrs:{component:"h2",variant:"subtitle3"}},[s._v(" Create Company ")]),t("form",{staticClass:"divide-y",on:{submit:function(n){return n.preventDefault(),s.createCompany.apply(null,arguments)}}},[t("ClientOnly",[t("BaseVueQuery",{attrs:{query:s.industriesQuery},scopedSlots:s._u([{key:"success",fn:function(n){var o=n.data;return[t("CompanyInput",{attrs:{industries:o},model:{value:s.company,callback:function(r){s.company=r},expression:"company"}})]}}])})],1),t("div",{staticClass:"p-4"},[t("BaseButton",{staticClass:"space-x-2"},[t("PlusSvg",{staticClass:"w-5"}),t("span",[s._v("Company")])],1)],1)],1)],1)],1)},B=[];const i={};var x=_(e,f,B,!1,g,null,null,null);function g(s){for(let a in i)this[a]=i[a]}const w=function(){return x.exports}();export{w as default};
