import{F as l}from"./FormButton.51c30109.js";import{L as d}from"./LicenseTypeMapQuantitiesInput.7948d439.js";import{b$ as i,aI as _,r as f,n as v}from"./index.70bf5aa2.js";import{u as b}from"./useAccountSubscriptionProductLicenseBatches.742d294f.js";import"./arrow-down-on-square.bf61cdc5.js";import"./trash.78f57a7a.js";import"./index.8ffa1277.js";import"./DynamicForm.bba0b850.js";import"./message_pb.1504c2a9.js";const a={};a.setup=(e,n)=>{const t=i("id"),s=i("subscriptionId"),o=i("productId"),u=_(),r=f({annual:0,oneTime:0}),p=b.create(t,s,o);async function m(){await p.mutateAsync({quantities:r.value}),u.push(`/admin/companies/${t.value}/subscriptions/${s.value}/products/${o.value}/license-batches`)}return{quantities:r,submit:m}};a.components=Object.assign({LicenseTypeMapQuantitiesInput:d,FormButton:l},a.components);var y=function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("section",{staticClass:"space-y-6"},[t("BaseSimpleCard",{staticClass:"divide-y"},[t("BaseTypography",{staticClass:"p-4",attrs:{variant:"subtitle3",component:"h2"}},[e._v(" Add License Batch ")]),t("form",{staticClass:"divide-y",on:{submit:function(s){return s.preventDefault(),e.submit.apply(null,arguments)}}},[t("LicenseTypeMapQuantitiesInput",{model:{value:e.quantities,callback:function(s){e.quantities=s},expression:"quantities"}}),t("FormButton",{attrs:{action:"create"}})],1)],1)],1)},h=[];const c={};var B=v(a,y,h,!1,C,null,null,null);function C(e){for(let n in c)this[n]=c[n]}const M=function(){return B.exports}();export{M as default};