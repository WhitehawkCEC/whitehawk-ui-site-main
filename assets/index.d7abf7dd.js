import{bX as i,aI as d,r as v,c as f,ap as _,n as b}from"./index.7b120442.js";import{B as y}from"./BackButton.e90e26bd.js";import{L as B}from"./LicenseTypeMapQuantitiesInput.8e18147e.js";import{u as C}from"./useAccountSubscriptionProductLicenseBatches.3984a8ba.js";import"./chevron-left.0808b01b.js";import"./index.1c2548e9.js";import"./DynamicForm.54ce95a5.js";import"./message_pb.4d8d06a9.js";const a={};a.setup=(s,n)=>{const t=i("id"),e=i("subscriptionId"),c=i("productId"),l=d(),o=v({annual:0,oneTime:0}),p=C.create(t,e,c),u=f(()=>`/admin/companies/${t.value}/subscriptions/${e.value}/products/${c.value}/license-batches`);async function m(){await p.mutateAsync({quantities:o.value}),l.push(u.value)}return{PlusSvg:_,quantities:o,backLink:u,submit:m}};a.components=Object.assign({BackButton:y,LicenseTypeMapQuantitiesInput:B},a.components);var h=function(){var s=this,n=s.$createElement,t=s._self._c||n;return t("section",{staticClass:"space-y-4"},[t("BackButton",{attrs:{link:s.backLink}}),t("BaseSimpleCard",{staticClass:"divide-y"},[t("h2",{staticClass:"p-4 font-display text-lg font-semibold"},[s._v("Add License Batch")]),t("form",{staticClass:"divide-y",on:{submit:function(e){return e.preventDefault(),s.submit.apply(null,arguments)}}},[t("LicenseTypeMapQuantitiesInput",{model:{value:s.quantities,callback:function(e){s.quantities=e},expression:"quantities"}}),t("div",{staticClass:"p-4"},[t("div",{staticClass:"md:inline-flex"},[t("BaseButton",{staticClass:"w-full md:w-auto",attrs:{"display-type":"info",svg:s.PlusSvg}},[s._v(" Create License Batch ")])],1)])],1)])],1)},k=[];const r={};var x=b(a,h,k,!1,L,null,null,null);function L(s){for(let n in r)this[n]=r[n]}const M=function(){return x.exports}();export{M as default};
