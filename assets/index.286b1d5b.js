import{F as T}from"./FormButton.51c30109.js";import{bs as B,b3 as g,c as r,r as C,bW as S,bQ as h,bl as F,aI as x,bX as Q,aF as k,n as w}from"./index.70bf5aa2.js";import{B as I}from"./BundleTemplateInput.88f9f9cd.js";import{t as R}from"./convert-bundle-type.5187aa52.js";import"./arrow-down-on-square.bf61cdc5.js";import"./trash.78f57a7a.js";import"./DynamicForm.bba0b850.js";const u={};u.setup=(e,n)=>{const t=g("bundleType"),s=r(()=>R(String(t.value))),o=C(S.BundleTemplate.create({bundleType:s.value})),l=h.list(),p=F(),c=r(()=>p.mainCompany),d=r(()=>{if(c.value)return{id:{value:c.value.id},name:c.value.name,industry:void 0}}),y=r(()=>{const a=o.value;return Boolean(a&&a.name&&a.description&&a.bundleType&&a.productCategories.length>0)}),f=x(),v=Q.create(),i=k();async function b(){const a={bundleTemplate:{...o.value,createdByCompany:d.value}},{response:_}=await v.mutateAsync(a);_.bundleTemplate&&(i.success("Successfully created bundle template."),f.push("/admin/bundles/templates")),i.error("Something went wrong.")}return{bundleTemplate:o,categoriesQuery:l,isValidForm:y,createTemplate:b}};u.components=Object.assign({BackButton:B,BundleTemplateInput:I,FormButton:T},u.components);var V=function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("section",{staticClass:"space-y-6"},[t("BackButton",{attrs:{link:"/admin/bundles/templates"}}),t("BaseSimpleCard",{staticClass:"divide-y"},[t("BaseTypography",{staticClass:"p-4",attrs:{component:"h2",variant:"subtitle3"}},[e._v(" Create Bundle Template ")]),t("form",{staticClass:"divide-y",on:{submit:function(s){return s.preventDefault(),e.createTemplate.apply(null,arguments)}}},[t("BaseVueQuery",{attrs:{query:e.categoriesQuery},scopedSlots:e._u([{key:"success",fn:function(s){var o=s.data;return[t("BundleTemplateInput",{attrs:{categories:o},model:{value:e.bundleTemplate,callback:function(l){e.bundleTemplate=l},expression:"bundleTemplate"}})]}}])}),t("FormButton",{attrs:{action:"create","is-valid-form":e.isValidForm}})],1)],1)],1)},j=[];const m={};var A=w(u,V,j,!1,E,null,null,null);function E(e){for(let n in m)this[n]=m[n]}const U=function(){return A.exports}();export{U as default};