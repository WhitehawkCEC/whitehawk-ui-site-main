import{U as x}from"./UserAttributesInput.4fd39d09.js";import{r as k,b3 as o,c as S,aA as n,aF as C,aI as I,aj as E,ae as R,aP as c,aQ as u,n as U,ak as l}from"./index.77543f41.js";import"./InternationalPhoneNumberInput.3987701f.js";import"./AddressClaimInput.db98106b.js";import"./DynamicForm.384793f5.js";const r=E({layout:"siteMain"});r.setup=(a,i)=>{const s=`${R}/main-page-pics/line-waves-md.svg`,t=k({}),d=o("customerId"),v=o("productId"),f=o("quantity"),b=S(()=>!(t.value.name!==void 0&&t.value.email!==void 0&&t.value.company_name!==void 0&&t.value.website_url!==void 0&&t.value["custom:title"]!==void 0&&t.value.comments!==void 0));n(()=>d.value,e=>{e&&(t.value.customer_id=String(e))},{immediate:!0}),n(()=>v.value,e=>{e&&(t.value.product_id=String(e))},{immediate:!0}),n(()=>f.value,e=>{e&&(t.value.quantity=String(e))},{immediate:!0});const y=C();async function _(){const e={customerId:t.value.customer_id,productId:t.value.product_id,attributes:t.value};await c.post(`${u}/marketplace/aws/saas`,e),y.success("Succesfully registered"),h(e),g()}async function h(e){await c.post(`${u}/marketplace/aws/saas/email`,{recipientEmail:e.attributes.email,senderEmail:"sales@whitehawk.com",proxySender:"sales@whitehawk.com",subject:`WhiteHawk Cyber Risk Scorecard via AWS Marketplace \u2013 Customer ID: ${e.customerId}`,customer:e,type:"CUSTOMER_NEW_REGISTER"}),await c.post(`${u}/marketplace/aws/saas/email`,{recipientEmail:"sales@whitehawk.com",senderEmail:"whdevops@whitehawk.com",proxySender:"whdevops@whitehawk.com",subject:`New WhiteHawk Cyber Risk Scorecard via AWS Marketplace \u2013 Customer ID: ${e.customerId}`,customer:e,type:"ADMIN_NEW_REGISTER"})}const w=I();function g(){w.push("success")}return{backgroundUrl:s,attributes:t,isDisabled:b,createUser:_}};r.components=Object.assign({UserAttributesInput:x},r.components);var B=function(){var a=this,i=a.$createElement,s=a._self._c||i;return s("section",{staticClass:"flex min-h-screen flex-col justify-center bg-prime-navy bg-[length:517px] bg-bottom bg-repeat-x px-2 py-16 sm:px-6 lg:px-8",style:{backgroundImage:`url(${a.backgroundUrl})`}},[s("BaseTypography",{staticClass:"px-4 pb-10 text-center text-white lg:pb-16",attrs:{component:"h1",variant:"h3"}},[a._v(" WhiteHawk SaaS Fulfillment ")]),s("BaseSimpleCard",{staticClass:"mx-auto max-w-lg lg:max-w-none"},[s("form",{staticClass:"divide-y",on:{submit:function(t){return t.preventDefault(),a.createUser.apply(null,arguments)}}},[s("BaseTypography",{staticClass:"p-4",attrs:{variant:"h6",component:"h2"}},[a._v(" Register New User ")]),s("UserAttributesInput",{model:{value:a.attributes,callback:function(t){a.attributes=t},expression:"attributes"}}),s("div",{staticClass:"flex flex-col space-y-2 p-4"},[s("BaseTypography",{staticClass:"text-gray-400",attrs:{variant:"p2"}},[a._v(" A WhiteHawk Consultant will contact you once you have submitted the form. ")]),s("div",{staticClass:"md:inline-flex"},[s("BaseButton",{staticClass:"w-full md:w-auto",attrs:{disabled:a.isDisabled,type:"submit","aria-label":"Submit Form"}},[a._v(" Submit ")])],1)],1)],1)])],1)},T=[];const m={};var p=U(r,B,T,!1,W,null,null,null);function W(a){for(let i in m)this[i]=m[i]}typeof l=="function"&&l(p);const N=function(){return p.exports}();export{N as default};