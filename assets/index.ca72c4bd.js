import{F as h}from"./FormButton.560791f8.js";import{b1 as T,ax as N,d as c,n as m,co as F,cX as w,de as K,aF as x,cc as $,a_ as D,az as A,aK as O,cm as L,ce as P,c7 as E}from"./index.b52a2fa9.js";import{s as V}from"./index.ed991bc1.js";import{S as z}from"./SubscriptionPartialUpdateRequestInput.218e8d4a.js";import{D as G}from"./DateRangeInput.8678c8f5.js";import{u as k}from"./useAccountSubscriptionValidity.d5d5eeba.js";import"./arrow-down-on-square.bf61cdc5.js";import"./trash.78f57a7a.js";import"./SlugInput.dfa331f5.js";import"./FormValidation.fcce8505.js";import"./index.7f03adfd.js";import"./DynamicForm.3d052b71.js";import"./index.e5da98bf.js";import"./index.17c63c88.js";import"./index.7a54c9f6.js";import"./index.87e44ac4.js";import"./index.0bd9a9f0.js";import"./index.9bdbf46a.js";const v={};v.props={value:{key:"value",required:!1,type:null},entities:{key:"entities",required:!0,type:Array}};v.setup=(t,s)=>{const e=t,n=s.emit,r=N(e,n),u=c(()=>e.entities.map(({id:i,name:p})=>({text:p,value:i}))),a=c({get(){var i;return(i=e.value)==null?void 0:i.mappedEntityId},set(i){i&&(r.value.mappedEntityId=i)}});return{entityOptions:u,mappedEntityId:a}};v.components=Object.assign({SimpleSelect:T},v.components);var Q=function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("BaseLabel",{staticClass:"space-y-1 p-4"},[e("span",[t._v("Mapped Entity:")]),e("SimpleSelect",{staticClass:"w-full",attrs:{options:t.entityOptions},model:{value:t.mappedEntityId,callback:function(n){t.mappedEntityId=n},expression:"mappedEntityId"}})],1)},W=[];const B={};var X=m(v,Q,W,!1,H,null,null,null);function H(t){for(let s in B)this[s]=B[s]}const J=function(){return X.exports}(),f={};f.props={accountId:{key:"accountId",required:!0,type:String}};f.setup=(t,s)=>{const e=t,n=c(()=>e.accountId),r=F.get(n),u=V(c(()=>r.data.value||w.create())),a=K.list(n),i=c(()=>{var l;return((l=a.data.value)==null?void 0:l.sort((o,S)=>o.name.localeCompare(S.name)))||[]}),p=x(),d=F.set(n);async function _(){await d.mutateAsync(u.value),p.success("Successfully updated config.")}return{config:u,entities:i,submit:_}};f.components=Object.assign({SubscriptionMappedEntityInput:J,FormButton:h},f.components);var Y=function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("form",{staticClass:"divide-y",on:{submit:function(n){return n.preventDefault(),t.submit.apply(null,arguments)}}},[e("SubscriptionMappedEntityInput",{attrs:{entities:t.entities},model:{value:t.config,callback:function(n){t.config=n},expression:"config"}}),e("FormButton",{attrs:{action:"update"}})],1)},Z=[];const R={};var tt=m(f,Y,Z,!1,et,null,null,null);function et(t){for(let s in R)this[s]=R[s]}const st=function(){return tt.exports}(),y={};y.props={accountId:{key:"accountId",required:!0,type:String},subId:{key:"subId",required:!0,type:String}};y.setup=(t,s)=>{const e=t,n=c(()=>e.accountId),r=c(()=>e.subId),u=$.read(n,r),a=D();A(()=>u.data.value,o=>{o&&(a.value={accountId:o.accountId,subscriptionId:o.subscriptionId,name:o.name})},{immediate:!0});const i=c(()=>{var S,C;const o=a.value;return Boolean(o&&((S=o.subscriptionId)==null?void 0:S.value)&&o.name&&((C=o.accountId)==null?void 0:C.value))}),p=O(),d=x(),_=$.update(n,r);async function l(){if(a.value){const{response:o}=await _.mutateAsync(a.value);o?(d.success("Successfully updated subscription."),p.push(`/admin/companies/${n.value}/subscriptions`)):d.error("Something went wrong.")}}return{update:a,isValid:i,updateSubscription:l}};y.components=Object.assign({SubscriptionPartialUpdateRequestInput:z,FormButton:h},y.components);var nt=function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("form",{staticClass:"divide-y",on:{submit:function(n){return n.preventDefault(),t.updateSubscription.apply(null,arguments)}}},[t.update?e("SubscriptionPartialUpdateRequestInput",{model:{value:t.update,callback:function(n){t.update=n},expression:"update"}}):t._e(),e("FormButton",{attrs:{action:"update","is-valid-form":t.isValid}})],1)},it=[];const j={};var at=m(y,nt,it,!1,ot,null,null,null);function ot(t){for(let s in j)this[s]=j[s]}const ct=function(){return at.exports}(),b={};b.props={id:{key:"id",required:!0,type:String},subscriptionId:{key:"subscriptionId",required:!0,type:String}};b.setup=(t,s)=>{const e=t,n=c(()=>e.id),r=c(()=>e.subscriptionId),u=D(L.DateRange.create()),a=k.get(n,r);A(()=>a.data.value,l=>{l&&(u.value=l)},{immediate:!0});const i=O(),p=x(),d=k.update(n,r);async function _(){await d.mutateAsync({value:u.value}),p.success("Successfully updated subscription validity."),i.push(`/admin/companies/${n.value}/subscriptions`)}return{validity:u,submit:_}};b.components=Object.assign({DateRangeInput:G,FormButton:h},b.components);var rt=function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("form",{staticClass:"divide-y",on:{submit:function(n){return n.preventDefault(),t.submit.apply(null,arguments)}}},[e("div",{staticClass:"p-4"},[e("BaseLabel",{staticClass:"grid grid-cols-1 gap-1 sm:grid-cols-3 sm:items-center sm:gap-4"},[e("span",[t._v("Validity")]),e("DateRangeInput",{staticClass:"sm:col-span-2",model:{value:t.validity,callback:function(n){t.validity=n},expression:"validity"}})],1)],1),e("FormButton",{attrs:{action:"update"}})],1)},ut=[];const M={};var pt=m(b,rt,ut,!1,lt,null,null,null);function lt(t){for(let s in M)this[s]=M[s]}const dt=function(){return pt.exports}(),I={};I.props={accountId:{key:"accountId",required:!0,type:String},subId:{key:"subId",required:!0,type:String}};I.setup=(t,s)=>{const e=t,n=c(()=>e.accountId),r=c(()=>e.subId),u=$.read(n,r),a=c(()=>{var i;return(i=u.data.value)==null?void 0:i.type});return{SubscriptionType:P.SubscriptionType,id:n,subscriptionId:r,subscriptionType:a}};I.components=Object.assign({UpdateSubscriptionNameForm:ct,UpdateSubscriptionValidityForm:dt,SubscriptionMappedEntityForm:st},I.components);var mt=function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("section",{staticClass:"space-y-6"},[e("BaseSimpleCard",{staticClass:"divide-y"},[e("BaseTypography",{staticClass:"p-4",attrs:{component:"h4",variant:"subtitle3"}},[t._v(" Update Subscription Name ")]),e("UpdateSubscriptionNameForm",{attrs:{"account-id":t.id,"sub-id":t.subscriptionId}})],1),e("BaseSimpleCard",{staticClass:"divide-y"},[e("BaseTypography",{staticClass:"p-4",attrs:{component:"h4",variant:"subtitle3"}},[t._v(" Update Subscription Validity ")]),e("UpdateSubscriptionValidityForm",{attrs:{id:t.id,"subscription-id":t.subscriptionId}})],1),t.subscriptionType===t.SubscriptionType.INDIVIDUAL?e("BaseSimpleCard",{staticClass:"divide-y"},[e("BaseTypography",{staticClass:"p-4",attrs:{component:"h4",variant:"subtitle3"}},[t._v(" Mapped Entity ")]),e("SubscriptionMappedEntityForm",{attrs:{"account-id":t.id}})],1):t._e()],1)},_t=[];const U={};var vt=m(I,mt,_t,!1,ft,null,null,null);function ft(t){for(let s in U)this[s]=U[s]}const yt=function(){return vt.exports}(),g={};g.setup=(t,s)=>{const e=E("id"),n=E("subscriptionId");return{id:e,subscriptionId:n}};g.components=Object.assign({UpdateSubscriptionForm:yt},g.components);var bt=function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("UpdateSubscriptionForm",{attrs:{"account-id":t.id,"sub-id":t.subscriptionId}})},It=[];const q={};var St=m(g,bt,It,!1,gt,null,null,null);function gt(t){for(let s in q)this[s]=q[s]}const wt=function(){return St.exports}();export{wt as default};