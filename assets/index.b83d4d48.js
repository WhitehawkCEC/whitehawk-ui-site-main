import{F as U}from"./FormButton.c9187322.js";import{S as D}from"./SubscriptionPartialUpdateRequestInput.c6d66216.js";import{d as r,cd as g,a_ as B,az as j,aK as k,aF as q,n as v,cn as A,c8 as $}from"./index.4d0c918d.js";import{D as E}from"./DateRangeInput.3757ce62.js";import{u as h}from"./useAccountSubscriptionValidity.7f4bc726.js";import"./arrow-down-on-square.bf61cdc5.js";import"./trash.78f57a7a.js";import"./SlugInput.d7eba112.js";import"./FormValidation.a5e2f641.js";import"./index.79e2186d.js";import"./DynamicForm.7ab86245.js";import"./index.c132a885.js";import"./index.af6be564.js";import"./index.7a54c9f6.js";import"./index.87e44ac4.js";import"./index.ce347f9a.js";import"./index.45f57232.js";const u={};u.props={accountId:{key:"accountId",required:!0,type:String},subId:{key:"subId",required:!0,type:String}};u.setup=(t,n)=>{const s=t,e=r(()=>s.accountId),o=r(()=>s.subId),c=g.read(e,o),a=B();j(()=>c.data.value,i=>{i&&(a.value={accountId:i.accountId,subscriptionId:i.subscriptionId,name:i.name})},{immediate:!0});const b=r(()=>{var I,S;const i=a.value;return Boolean(i&&((I=i.subscriptionId)==null?void 0:I.value)&&i.name&&((S=i.accountId)==null?void 0:S.value))}),f=k(),l=q(),y=g.update(e,o);async function m(){if(a.value){const{response:i}=await y.mutateAsync(a.value);i?(l.success("Successfully updated subscription."),f.push(`/admin/companies/${e.value}/subscriptions`)):l.error("Something went wrong.")}}return{update:a,isValid:b,updateSubscription:m}};u.components=Object.assign({SubscriptionPartialUpdateRequestInput:D,FormButton:U},u.components);var M=function(){var t=this,n=t.$createElement,s=t._self._c||n;return s("form",{staticClass:"divide-y",on:{submit:function(e){return e.preventDefault(),t.updateSubscription.apply(null,arguments)}}},[t.update?s("SubscriptionPartialUpdateRequestInput",{model:{value:t.update,callback:function(e){t.update=e},expression:"update"}}):t._e(),s("FormButton",{attrs:{action:"update","is-valid-form":t.isValid}})],1)},N=[];const x={};var O=v(u,M,N,!1,P,null,null,null);function P(t){for(let n in x)this[n]=x[n]}const V=function(){return O.exports}(),p={};p.props={id:{key:"id",required:!0,type:String},subscriptionId:{key:"subscriptionId",required:!0,type:String}};p.setup=(t,n)=>{const s=t,e=r(()=>s.id),o=r(()=>s.subscriptionId),c=B(A.DateRange.create()),a=h.get(e,o);j(()=>a.data.value,m=>{m&&(c.value=m)},{immediate:!0});const b=k(),f=q(),l=h.update(e,o);async function y(){await l.mutateAsync({value:c.value}),f.success("Successfully updated subscription validity."),b.push(`/admin/companies/${e.value}/subscriptions`)}return{validity:c,submit:y}};p.components=Object.assign({DateRangeInput:E,FormButton:U},p.components);var w=function(){var t=this,n=t.$createElement,s=t._self._c||n;return s("form",{staticClass:"divide-y",on:{submit:function(e){return e.preventDefault(),t.submit.apply(null,arguments)}}},[s("div",{staticClass:"p-4"},[s("BaseLabel",{staticClass:"grid grid-cols-1 gap-1 sm:grid-cols-3 sm:items-center sm:gap-4"},[s("span",[t._v("Validity")]),s("DateRangeInput",{staticClass:"sm:col-span-2",model:{value:t.validity,callback:function(e){t.validity=e},expression:"validity"}})],1)],1),s("FormButton",{attrs:{action:"update"}})],1)},z=[];const F={};var T=v(p,w,z,!1,G,null,null,null);function G(t){for(let n in F)this[n]=F[n]}const K=function(){return T.exports}(),d={};d.props={accountId:{key:"accountId",required:!0,type:String},subId:{key:"subId",required:!0,type:String}};d.setup=(t,n)=>{const s=t,e=r(()=>s.accountId),o=r(()=>s.subId);return{id:e,subscriptionId:o}};d.components=Object.assign({UpdateSubscriptionNameForm:V,UpdateSubscriptionValidityForm:K},d.components);var L=function(){var t=this,n=t.$createElement,s=t._self._c||n;return s("section",{staticClass:"space-y-6"},[s("BaseSimpleCard",{staticClass:"divide-y"},[s("BaseTypography",{staticClass:"p-4",attrs:{component:"h4",variant:"subtitle3"}},[t._v(" Update Subscription Name ")]),s("UpdateSubscriptionNameForm",{attrs:{"account-id":t.id,"sub-id":t.subscriptionId}})],1),s("BaseSimpleCard",{staticClass:"divide-y"},[s("BaseTypography",{staticClass:"p-4",attrs:{component:"h4",variant:"subtitle3"}},[t._v(" Update Subscription Validity ")]),s("UpdateSubscriptionValidityForm",{attrs:{id:t.id,"subscription-id":t.subscriptionId}})],1)],1)},Q=[];const C={};var H=v(d,L,Q,!1,J,null,null,null);function J(t){for(let n in C)this[n]=C[n]}const W=function(){return H.exports}(),_={};_.setup=(t,n)=>{const s=$("id"),e=$("subscriptionId");return{id:s,subscriptionId:e}};_.components=Object.assign({UpdateSubscriptionForm:W},_.components);var X=function(){var t=this,n=t.$createElement,s=t._self._c||n;return s("UpdateSubscriptionForm",{attrs:{"account-id":t.id,"sub-id":t.subscriptionId}})},Y=[];const R={};var Z=v(_,X,Y,!1,tt,null,null,null);function tt(t){for(let n in R)this[n]=R[n]}const yt=function(){return Z.exports}();export{yt as default};