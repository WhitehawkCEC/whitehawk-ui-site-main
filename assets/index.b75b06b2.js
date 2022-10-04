import{F as S}from"./FormButton.cac7a0b9.js";import{bR as g,aZ as h,aB as x,aJ as $,aG as B,n as _,b_ as c,d as C}from"./index.c5897af8.js";import{u as l,d as F}from"./index.afb37b5e.js";import"./arrow-down-on-square.bf61cdc5.js";import"./trash.78f57a7a.js";const r={};r.props={accountId:{key:"accountId",required:!0,type:String},subscriptionId:{key:"subscriptionId",required:!0,type:String},supplierId:{key:"supplierId",required:!0,type:null}};r.setup=(t,e)=>{const s=t,{accountId:n,subscriptionId:i,supplierId:a}=g(s),u=h(""),f=l.read(n,i,a);x(()=>f.data.value,p=>{p&&(u.value=p.name)},{immediate:!0});const v=$(),b=B(),y=l.update(n,i,a);async function I(){await y.mutateAsync(u.value),b.success("Successfully updated subscription supplier."),v.push(`/admin/companies/${n.value}/subscriptions/${i.value}/suppliers`)}return{name:u,submit:I}};r.components=Object.assign({FormButton:S},r.components);var R=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("form",{staticClass:"divide-y",on:{submit:function(n){return n.preventDefault(),t.submit.apply(null,arguments)}}},[s("BaseLabel",{staticClass:"grid grid-cols-1 gap-1 p-4 sm:grid-cols-3 sm:items-center sm:gap-4"},[s("span",[t._v("Name")]),s("BaseInput",{staticClass:"flex flex-col sm:col-span-2",model:{value:t.name,callback:function(n){t.name=n},expression:"name"}})],1),s("FormButton",{attrs:{action:"update"}})],1)},j=[];const d={};var k=_(r,R,j,!1,U,null,null,null);function U(t){for(let e in d)this[e]=d[e]}const q=function(){return k.exports}(),o={};o.setup=(t,e)=>{const s=c("id"),n=c("subscriptionId"),i=c("supplierId"),a=C(()=>F(i.value));return{id:s,subscriptionId:n,supplierId:a}};o.components=Object.assign({UpdateSubscriptionSupplierForm:q},o.components);var w=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("BaseSimpleCard",{staticClass:"divide-y"},[s("BaseTypography",{staticClass:"p-4",attrs:{component:"h4",variant:"subtitle3"}},[t._v(" Update Subscription Supplier ")]),s("UpdateSubscriptionSupplierForm",{attrs:{"account-id":t.id,"subscription-id":t.subscriptionId,"supplier-id":t.supplierId}})],1)},A=[];const m={};var E=_(o,w,A,!1,M,null,null,null);function M(t){for(let e in m)this[e]=m[e]}const J=function(){return E.exports}();export{J as default};