import{F}from"./FormButton.cac7a0b9.js";import{S as j}from"./SubscriptionProductConfigInput.bbe60a6b.js";import{d as b,aZ as k,aB as q,aJ as U,aG as B,n as p,bM as D,bR as A,cb as S,c7 as $,b_ as g}from"./index.c5897af8.js";import{u as C}from"./useAccountSubscriptionProductConfig.b63a1a7f.js";import{D as M}from"./DateRangeInput.3ac82b63.js";import{d as E}from"./index.f6cada46.js";import"./arrow-down-on-square.bf61cdc5.js";import"./trash.78f57a7a.js";import"./ApiKeyInput.1d531c1c.js";import"./ApiKeyValidation.d92e3fe0.js";import"./ApiKeyDescriptionDisplay.4383392a.js";import"./useBitsightCompanies.0a83c752.js";import"./useBlackKiteEntities.85cdf41d.js";import"./index.9f27a8b9.js";import"./index.3355479f.js";import"./index.7a54c9f6.js";import"./index.87e44ac4.js";import"./index.53653756.js";import"./index.b8b7440a.js";import"./DynamicForm.cac5c6b3.js";const a={};a.props={accountId:{key:"accountId",required:!0,type:String},subscriptionId:{key:"subscriptionId",required:!0,type:String},productId:{key:"productId",required:!0,type:String}};a.setup=(t,s)=>{const e=t,n=b(()=>e.accountId),o=b(()=>e.subscriptionId),c=b(()=>e.productId),i=k({value:{oneofKind:void 0}}),l=C.get(n,o,c);q(()=>l.data.value,r=>{r&&(i.value=r.config?r.config:{value:{oneofKind:void 0}})},{immediate:!0});const m=U(),_=B(),f=C.update(n,o,c);async function v(){await f.mutateAsync({config:i.value}),_.success("Successfully updated subscription product."),m.push(`/admin/companies/${n.value}/subscriptions/${o.value}/products`)}return{id:n,config:i,submit:v}};a.components=Object.assign({SubscriptionProductConfigInput:j,FormButton:F},a.components);var w=function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("form",{staticClass:"divide-y",on:{submit:function(n){return n.preventDefault(),t.submit.apply(null,arguments)}}},[e("fieldset",{staticClass:"grid gap-1 p-4 sm:grid-cols-3 sm:items-center sm:gap-4"},[t._m(0),e("div",{staticClass:"flex flex-col space-y-6 sm:col-span-2"},[e("SubscriptionProductConfigInput",{attrs:{id:t.id},model:{value:t.config,callback:function(n){t.config=n},expression:"config"}})],1)]),e("FormButton",{attrs:{action:"update","is-valid-form":!0}})],1)},O=[function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",[e("legend",{staticClass:"block font-body text-sm font-medium leading-5 tracking-wide text-gray-600 antialiased"},[t._v(" Config "),e("span",{staticClass:"text-red-700"},[t._v("*")])])])}];const h={};var G=p(a,w,O,!1,K,null,null,null);function K(t){for(let s in h)this[s]=h[s]}const N=function(){return G.exports}(),T=[{name:"name",label:"Name",component:{is:D,attrs:{required:!0,class:"w-full lg:max-w-sm"}}},{name:"validity",label:"Validity",component:{is:M,attrs:{required:!0}}}],z=E(T);let J,Z;const x={};var H=p(z,J,Z,!1,L,null,null,null);function L(t){for(let s in x)this[s]=x[s]}const Q=function(){return H.exports}(),u={};u.props={accountId:{key:"accountId",required:!0,type:String},subscriptionId:{key:"subscriptionId",required:!0,type:String},productId:{key:"productId",required:!0,type:String}};u.setup=(t,s)=>{const e=t,{accountId:n,subscriptionId:o,productId:c}=A(e),i=k({name:"",validity:S.DateRange.create()}),l=$.read(n,o,c);q(()=>l.data.value,r=>{var y,I;r&&(i.value={name:((y=r.product)==null?void 0:y.name)||"",validity:((I=r.product)==null?void 0:I.validity)||S.DateRange.create()})},{immediate:!0});const m=U(),_=B(),f=$.update(n,o,c);async function v(){await f.mutateAsync(i.value),_.success("Successfully updated subscription product."),m.push(`/admin/companies/${n.value}/subscriptions/${o.value}/products`)}return{update:i,submit:v}};u.components=Object.assign({SubscriptionProductPartialUpdateRequestInput:Q,FormButton:F},u.components);var W=function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("form",{staticClass:"divide-y",on:{submit:function(n){return n.preventDefault(),t.submit.apply(null,arguments)}}},[e("SubscriptionProductPartialUpdateRequestInput",{model:{value:t.update,callback:function(n){t.update=n},expression:"update"}}),e("FormButton",{attrs:{action:"update","is-valid-form":!0}})],1)},X=[];const P={};var Y=p(u,W,X,!1,V,null,null,null);function V(t){for(let s in P)this[s]=P[s]}const tt=function(){return Y.exports}(),d={};d.setup=(t,s)=>{const e=g("id"),n=g("subscriptionId"),o=g("productId");return{id:e,subscriptionId:n,productId:o}};d.components=Object.assign({UpdateSubscriptionProductForm:tt,UpdateSubscriptionProductConfigForm:N},d.components);var et=function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("section",{staticClass:"space-y-6"},[e("BaseSimpleCard",{staticClass:"divide-y"},[e("BaseTypography",{staticClass:"p-4",attrs:{component:"h4",variant:"subtitle3"}},[t._v(" Update Product Attributes ")]),e("UpdateSubscriptionProductForm",{attrs:{"account-id":t.id,"subscription-id":t.subscriptionId,"product-id":t.productId}})],1),e("BaseSimpleCard",{staticClass:"divide-y"},[e("BaseTypography",{staticClass:"p-4",attrs:{component:"h4",variant:"subtitle3"}},[t._v(" Update Product Config ")]),e("UpdateSubscriptionProductConfigForm",{attrs:{"account-id":t.id,"subscription-id":t.subscriptionId,"product-id":t.productId}})],1)],1)},st=[];const R={};var nt=p(d,et,st,!1,ot,null,null,null);function ot(t){for(let s in R)this[s]=R[s]}const xt=function(){return nt.exports}();export{xt as default};