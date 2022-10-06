import{F as T}from"./FormButton.f3fd4336.js";import{bu as B,b4 as g,d as r,r as C,bY as S,bT as h,bm as x,aJ as F,bZ as k,aG as Q,n as w}from"./index.765bdb5f.js";import{B as R}from"./BundleTemplateInput.706591c2.js";import{t as V}from"./convert-bundle-type.24e5bd14.js";import"./arrow-down-on-square.bf61cdc5.js";import"./trash.78f57a7a.js";import"./DynamicForm.d8a86ce8.js";const u={};u.setup=(e,n)=>{const t=g("bundleType"),s=r(()=>V(String(t.value))),o=C(S.BundleTemplate.create({bundleType:s.value})),l=h.list(),p=x(),c=r(()=>p.mainCompany),d=r(()=>{if(c.value)return{id:{value:c.value.id},name:c.value.name,industry:void 0}}),y=r(()=>{const a=o.value;return Boolean(a&&a.name&&a.description&&a.bundleType&&a.productCategories.length>0)}),f=F(),v=k.create(),i=Q();async function b(){const a={bundleTemplate:{...o.value,createdByCompany:d.value}},{response:_}=await v.mutateAsync(a);_.bundleTemplate&&(i.success("Successfully created bundle template."),f.push("/admin/bundles/templates")),i.error("Something went wrong.")}return{bundleTemplate:o,categoriesQuery:l,isValidForm:y,createTemplate:b}};u.components=Object.assign({BackButton:B,BundleTemplateInput:R,FormButton:T},u.components);var j=function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("section",{staticClass:"space-y-6"},[t("BackButton",{attrs:{link:"/admin/bundles/templates"}}),t("BaseSimpleCard",{staticClass:"divide-y"},[t("BaseTypography",{staticClass:"p-4",attrs:{component:"h2",variant:"subtitle3"}},[e._v(" Create Bundle Template ")]),t("form",{staticClass:"divide-y",on:{submit:function(s){return s.preventDefault(),e.createTemplate.apply(null,arguments)}}},[t("BaseVueQuery",{attrs:{query:e.categoriesQuery},scopedSlots:e._u([{key:"success",fn:function(s){var o=s.data;return[t("BundleTemplateInput",{attrs:{categories:o},model:{value:e.bundleTemplate,callback:function(l){e.bundleTemplate=l},expression:"bundleTemplate"}})]}}])}),t("FormButton",{attrs:{action:"create","is-valid-form":e.isValidForm}})],1)],1)],1)},A=[];const m={};var E=w(u,j,A,!1,I,null,null,null);function I(e){for(let n in m)this[n]=m[n]}const O=function(){return E.exports}();export{O as default};
