import{F as x}from"./FormButton.d44253aa.js";import{b1 as I,aC as h,cd as r,n as l,bO as C,bt as R,c5 as D,a_ as $,c as B,aJ as g,cb as F}from"./index.36d90401.js";import{S as T}from"./SlugInput.04e4184a.js";import{D as E}from"./DateRangeInput.00b31a1b.js";import{d as O}from"./index.01298668.js";import{a as P}from"./index.1a84af6a.js";import{f as m}from"./index.2351a9c3.js";import"./arrow-down-on-square.bf61cdc5.js";import"./trash.78f57a7a.js";import"./FormValidation.fcce8505.js";import"./index.1ccecbc8.js";import"./index.c2c9ee3b.js";import"./index.7a54c9f6.js";import"./index.87e44ac4.js";import"./index.ff923412.js";import"./DynamicForm.6c82851e.js";import"./index.9f7bfa67.js";const i={};i.props={value:{key:"value",required:!1,type:null}};i.setup=(t,e)=>{const n=t,o=e.emit,u=h(n,o),a=[{text:" ",value:r.SubscriptionType.UNSPECIFIED},{text:"Individual",value:r.SubscriptionType.INDIVIDUAL},{text:"Portfolio",value:r.SubscriptionType.PORTFOLIO},{text:"Reseller",value:r.SubscriptionType.RESELLER}];return{proxy:u,options:a}};i.components=Object.assign({SimpleSelect:I},i.components);var L=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("SimpleSelect",{attrs:{options:t.options},model:{value:t.proxy,callback:function(o){t.proxy=o},expression:"proxy"}})},j=[];const _={};var k=l(i,L,j,!1,V,null,null,null);function V(t){for(let e in _)this[e]=_[e]}const w=function(){return k.exports}(),A=[{name:"subscriptionId",label:"ID",component:{is:T}},{name:"name",label:"Name",component:{is:C}},{name:"type",label:"Type",component:{is:w}},{name:"validity",label:"Validity",component:{is:E}}],N=O(A);let q,M;const v={};var U=l(N,q,M,!1,Y,null,null,null);function Y(t){for(let e in v)this[e]=v[e]}const z=function(){return U.exports}(),c={};c.setup=(t,e)=>{const n=D("id"),o=new Date,u=P(o,1),a=$({subscriptionId:{value:""},name:"",type:r.SubscriptionType.INDIVIDUAL,validity:{start:{value:m(o)},end:{value:m(u)}}}),f=B(()=>{var p;const s=a.value;return Boolean(s&&((p=s.subscriptionId)==null?void 0:p.value.length)>0&&s.name.length>0&&s.type&&s.validity)}),y=g(),b=F.create(n);async function S(){const s=a.value;!s||(await b.mutateAsync(s),y.push(`/admin/companies/${n.value}/subscriptions`))}return{create:a,isValid:f,createSubscription:S}};c.components=Object.assign({BackButton:R,SubscriptionPartialCreateRequestInput:z,FormButton:x},c.components);var J=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("section",{staticClass:"space-y-6"},[n("BackButton"),n("BaseSimpleCard",{staticClass:"divide-y"},[n("BaseTypography",{staticClass:"p-4",attrs:{component:"h4",variant:"subtitle3"}},[t._v(" Create Subscription ")]),n("form",{staticClass:"divide-y",on:{submit:function(o){return o.preventDefault(),t.createSubscription.apply(null,arguments)}}},[n("SubscriptionPartialCreateRequestInput",{model:{value:t.create,callback:function(o){t.create=o},expression:"create"}}),n("FormButton",{attrs:{action:"create","is-valid-form":t.isValid}})],1)],1)],1)},G=[];const d={};var H=l(c,J,G,!1,K,null,null,null);function K(t){for(let e in d)this[e]=d[e]}const _t=function(){return H.exports}();export{_t as default};
