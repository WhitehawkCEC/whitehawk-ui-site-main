import{F as x}from"./FormButton.c7470adc.js";import{b2 as I,aD as h,ca as r,n as l,bP as D,bv as R,c2 as $,a$ as C,d as B,aK as g,c8 as F}from"./index.ad2ff904.js";import{S as T}from"./SlugInput.db050d1a.js";import{D as P}from"./DateRangeInput.69954ce6.js";import{d as E}from"./index.9474efc8.js";import{a as L}from"./index.982b383b.js";import{f as m}from"./index.91aa5ddc.js";import"./arrow-down-on-square.bf61cdc5.js";import"./trash.78f57a7a.js";import"./FormValidation.907ef868.js";import"./index.6e54b4ff.js";import"./index.28672862.js";import"./index.7a54c9f6.js";import"./index.87e44ac4.js";import"./index.4443957f.js";import"./DynamicForm.50aff3fb.js";import"./index.fb7d7d9f.js";const i={};i.props={value:{key:"value",required:!1,type:null}};i.setup=(t,e)=>{const n=t,o=e.emit,u=h(n,o),a=[{text:" ",value:r.SubscriptionType.UNSPECIFIED},{text:"Individual",value:r.SubscriptionType.INDIVIDUAL},{text:"Portfolio",value:r.SubscriptionType.PORTFOLIO},{text:"Reseller",value:r.SubscriptionType.RESELLER}];return{proxy:u,options:a}};i.components=Object.assign({SimpleSelect:I},i.components);var O=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("SimpleSelect",{attrs:{options:t.options},model:{value:t.proxy,callback:function(o){t.proxy=o},expression:"proxy"}})},j=[];const _={};var k=l(i,O,j,!1,V,null,null,null);function V(t){for(let e in _)this[e]=_[e]}const w=function(){return k.exports}(),A=[{name:"subscriptionId",label:"ID",component:{is:T}},{name:"name",label:"Name",component:{is:D}},{name:"type",label:"Type",component:{is:w}},{name:"validity",label:"Validity",component:{is:P}}],N=E(A);let q,M;const v={};var U=l(N,q,M,!1,Y,null,null,null);function Y(t){for(let e in v)this[e]=v[e]}const z=function(){return U.exports}(),c={};c.setup=(t,e)=>{const n=$("id"),o=new Date,u=L(o,1),a=C({subscriptionId:{value:""},name:"",type:r.SubscriptionType.INDIVIDUAL,validity:{start:{value:m(o)},end:{value:m(u)}}}),f=B(()=>{var p;const s=a.value;return Boolean(s&&((p=s.subscriptionId)==null?void 0:p.value.length)>0&&s.name.length>0&&s.type&&s.validity)}),y=g(),b=F.create(n);async function S(){const s=a.value;!s||(await b.mutateAsync(s),y.push(`/admin/companies/${n.value}/subscriptions`))}return{create:a,isValid:f,createSubscription:S}};c.components=Object.assign({BackButton:R,SubscriptionPartialCreateRequestInput:z,FormButton:x},c.components);var K=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("section",{staticClass:"space-y-6"},[n("BackButton"),n("BaseSimpleCard",{staticClass:"divide-y"},[n("BaseTypography",{staticClass:"p-4",attrs:{component:"h4",variant:"subtitle3"}},[t._v(" Create Subscription ")]),n("form",{staticClass:"divide-y",on:{submit:function(o){return o.preventDefault(),t.createSubscription.apply(null,arguments)}}},[n("SubscriptionPartialCreateRequestInput",{model:{value:t.create,callback:function(o){t.create=o},expression:"create"}}),n("FormButton",{attrs:{action:"create","is-valid-form":t.isValid}})],1)],1)],1)},G=[];const d={};var H=l(c,K,G,!1,J,null,null,null);function J(t){for(let e in d)this[e]=d[e]}const _t=function(){return H.exports}();export{_t as default};