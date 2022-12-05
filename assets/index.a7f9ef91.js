import{F as S}from"./FormButton.683947c2.js";import{bT as g,a_ as h,az as x,aK as $,aF as F,n as _,c5 as c,c as C}from"./index.76f70903.js";import{u as l,d as B}from"./index.f3cc6af1.js";import"./arrow-down-on-square.bf61cdc5.js";import"./trash.78f57a7a.js";const r={};r.props={accountId:{key:"accountId",required:!0,type:String},subscriptionId:{key:"subscriptionId",required:!0,type:String},supplierId:{key:"supplierId",required:!0,type:null}};r.setup=(t,e)=>{const s=t,{accountId:n,subscriptionId:i,supplierId:a}=g(s),u=h(""),f=l.read(n,i,a);x(()=>f.data.value,p=>{p&&(u.value=p.name)},{immediate:!0});const v=$(),b=F(),y=l.update(n,i,a);async function I(){await y.mutateAsync(u.value),b.success("Successfully updated subscription supplier."),v.push(`/admin/companies/${n.value}/subscriptions/${i.value}/suppliers`)}return{name:u,submit:I}};r.components=Object.assign({FormButton:S},r.components);var R=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("form",{staticClass:"divide-y",on:{submit:function(n){return n.preventDefault(),t.submit.apply(null,arguments)}}},[s("BaseLabel",{staticClass:"grid grid-cols-1 gap-1 p-4 sm:grid-cols-3 sm:items-center sm:gap-4"},[s("span",[t._v("Name")]),s("BaseInput",{staticClass:"flex flex-col sm:col-span-2",model:{value:t.name,callback:function(n){t.name=n},expression:"name"}})],1),s("FormButton",{attrs:{action:"update"}})],1)},j=[];const d={};var k=_(r,R,j,!1,U,null,null,null);function U(t){for(let e in d)this[e]=d[e]}const q=function(){return k.exports}(),o={};o.setup=(t,e)=>{const s=c("id"),n=c("subscriptionId"),i=c("supplierId"),a=C(()=>B(i.value));return{id:s,subscriptionId:n,supplierId:a}};o.components=Object.assign({UpdateSubscriptionSupplierForm:q},o.components);var w=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("BaseSimpleCard",{staticClass:"divide-y"},[s("BaseTypography",{staticClass:"p-4",attrs:{component:"h4",variant:"subtitle3"}},[t._v(" Update Subscription Supplier ")]),s("UpdateSubscriptionSupplierForm",{attrs:{"account-id":t.id,"subscription-id":t.subscriptionId,"supplier-id":t.supplierId}})],1)},z=[];const m={};var A=_(o,w,z,!1,E,null,null,null);function E(t){for(let e in m)this[e]=m[e]}const K=function(){return A.exports}();export{K as default};