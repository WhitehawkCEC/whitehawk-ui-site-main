import{F as d}from"./FormButton.560791f8.js";import{bs as m,c7 as i,a_ as _,aF as f,aK as v,n as y}from"./index.b52a2fa9.js";import{u as b,e as h}from"./index.1080ffb2.js";import"./arrow-down-on-square.bf61cdc5.js";import"./trash.78f57a7a.js";const a={};a.setup=(s,e)=>{const t=i("id"),n=i("subscriptionId"),o=_({id:{type:{oneofKind:"typeDomain",typeDomain:{domain:""}}},name:""}),c=b.create(t,n),u=f(),p=v();async function l(){await c.mutateAsync({supplier:o.value}),u.success("Created supplier"),p.push({path:`../${h(o.value.id)}`,append:!0})}return{submit:l}};a.components=Object.assign({BackButton:m,FormButton:d},a.components);var C=function(){var s=this,e=s.$createElement,t=s._self._c||e;return t("section",{staticClass:"space-y-6"},[t("BackButton"),t("BaseSimpleCard",{staticClass:"divide-y overflow-hidden"},[t("BaseTypography",{staticClass:"block p-4",attrs:{variant:"subtitle3"}},[s._v(" Create Subscription Supplier ")]),t("form",{staticClass:"divide-y",on:{submit:function(n){return n.preventDefault(),s.submit.apply(null,arguments)}}},[t("div",{staticClass:"p-4"},[s._v(" TODO: this should add a supplier to a specific integration/product ")]),t("FormButton",{attrs:{action:"create"}})],1)],1)],1)},B=[];const r={};var S=y(a,C,B,!1,x,null,null,null);function x(s){for(let e in r)this[e]=r[e]}const w=function(){return S.exports}();export{w as default};