import{F as d}from"./FormButton.0845fed0.js";import{L as _}from"./LicenseTypeMapQuantitiesInput.9d3b4d0b.js";import{b$ as a,aI as f,r as v,n as y}from"./index.1e14903e.js";import{u as b}from"./useAccountSubscriptionProductGroupLicenseBatches.aab3ce9e.js";import"./arrow-down-on-square.bf61cdc5.js";import"./trash.78f57a7a.js";import"./index.a69bb9b0.js";import"./DynamicForm.2752171b.js";import"./message_pb.31a7f9d8.js";const o={};o.setup=(t,n)=>{const e=a("id"),s=a("subscriptionId"),c=a("productId"),u=a("groupId"),p=f(),i=v({annual:0,oneTime:0}),m=b.create({accountId:e,subscriptionId:s,productId:c,groupId:u});async function l(){await m.mutateAsync({quantities:i.value}),p.push({append:!0,path:"../"})}return{quantities:i,submit:l}};o.components=Object.assign({LicenseTypeMapQuantitiesInput:_,FormButton:d},o.components);var h=function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("section",{staticClass:"space-y-6"},[e("BaseSimpleCard",{staticClass:"divide-y"},[e("BaseTypography",{staticClass:"p-4",attrs:{variant:"subtitle3",component:"h2"}},[t._v(" Add License Batch ")]),e("form",{staticClass:"divide-y",on:{submit:function(s){return s.preventDefault(),t.submit.apply(null,arguments)}}},[e("LicenseTypeMapQuantitiesInput",{model:{value:t.quantities,callback:function(s){t.quantities=s},expression:"quantities"}}),e("FormButton",{attrs:{action:"create"}})],1)],1)],1)},I=[];const r={};var B=y(o,h,I,!1,C,null,null,null);function C(t){for(let n in r)this[n]=r[n]}const S=function(){return B.exports}();export{S as default};