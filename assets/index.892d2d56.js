import{F as m}from"./FormButton.284fdcf6.js";import{bs as d,ca as a,a_ as _,aF as f,aK as v,n as b}from"./index.87a2880c.js";import{S as g}from"./SubscriptionGroupInput.0db65bec.js";import{u as y}from"./useAccountSubscriptionGroups.8dcd3b57.js";import"./arrow-down-on-square.bf61cdc5.js";import"./trash.78f57a7a.js";import"./SlugInput.b648f667.js";import"./FormValidation.a5e2f641.js";import"./index.5eb45212.js";import"./DynamicForm.4d0e61c6.js";const n={};n.setup=(o,s)=>{const t=a("id"),e=a("subscriptionId"),r=_({id:{value:""},name:""}),u=y.create(t,e),c=f(),p=v();async function l(){await u.mutateAsync({group:r.value}),c.success("Created group"),p.push({path:`../${r.value.id.value}`,append:!0})}return{groupEdit:r,submit:l}};n.components=Object.assign({BackButton:d,SubscriptionGroupInput:g,FormButton:m},n.components);var h=function(){var o=this,s=o.$createElement,t=o._self._c||s;return t("section",{staticClass:"space-y-6"},[t("BackButton"),t("BaseSimpleCard",{staticClass:"divide-y overflow-hidden"},[t("BaseTypography",{staticClass:"block p-4",attrs:{variant:"subtitle3"}},[o._v(" Create Subscription Group ")]),t("form",{staticClass:"divide-y",on:{submit:function(e){return e.preventDefault(),o.submit.apply(null,arguments)}}},[t("SubscriptionGroupInput",{model:{value:o.groupEdit,callback:function(e){o.groupEdit=e},expression:"groupEdit"}}),t("FormButton",{attrs:{action:"create"}})],1)],1)],1)},B=[];const i={};var C=b(n,h,B,!1,S,null,null,null);function S(o){for(let s in i)this[s]=i[s]}const $=function(){return C.exports}();export{$ as default};