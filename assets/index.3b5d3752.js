import{F as m}from"./FormButton.301daa06.js";import{bs as d,b$ as a,aZ as _,aF as f,aI as v,n as b}from"./index.5601926e.js";import{S as g}from"./SubscriptionGroupInput.89d41f02.js";import{u as y}from"./useAccountSubscriptionGroups.80534231.js";import"./arrow-down-on-square.bf61cdc5.js";import"./trash.78f57a7a.js";import"./SlugInput.74a47dfb.js";import"./FormValidation.fcce8505.js";import"./index.141b9e9e.js";import"./DynamicForm.dfd7d32d.js";const n={};n.setup=(o,s)=>{const t=a("id"),e=a("subscriptionId"),r=_({id:{value:""},name:""}),u=y.create(t,e),c=f(),p=v();async function l(){await u.mutateAsync({group:r.value}),c.success("Created group"),p.push({path:`../${r.value.id.value}`,append:!0})}return{groupEdit:r,submit:l}};n.components=Object.assign({BackButton:d,SubscriptionGroupInput:g,FormButton:m},n.components);var h=function(){var o=this,s=o.$createElement,t=o._self._c||s;return t("section",{staticClass:"space-y-6"},[t("BackButton"),t("BaseSimpleCard",{staticClass:"divide-y overflow-hidden"},[t("BaseTypography",{staticClass:"block p-4",attrs:{variant:"subtitle3"}},[o._v(" Create Subscription Group ")]),t("form",{staticClass:"divide-y",on:{submit:function(e){return e.preventDefault(),o.submit.apply(null,arguments)}}},[t("SubscriptionGroupInput",{model:{value:o.groupEdit,callback:function(e){o.groupEdit=e},expression:"groupEdit"}}),t("FormButton",{attrs:{action:"create"}})],1)],1)],1)},B=[];const i={};var C=b(n,h,B,!1,S,null,null,null);function S(o){for(let s in i)this[s]=i[s]}const A=function(){return C.exports}();export{A as default};