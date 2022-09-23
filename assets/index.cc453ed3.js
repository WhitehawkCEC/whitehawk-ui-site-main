import{F as I}from"./FormButton.443a6555.js";import{B as x}from"./BackButton.e90e26bd.js";import{a_ as h,aB as R,c3 as r,n as l,bJ as $,bX as B,aY as C,c as D,aI as g,c1 as F}from"./index.7b120442.js";import{S as T}from"./SlugInput.37cc2689.js";import{D as E}from"./DateRangeInput.3fcb0704.js";import{d as P}from"./index.1c2548e9.js";import{a as k}from"./index.76a88555.js";import{f as m}from"./index.36846ff5.js";import"./arrow-down-on-square.bf61cdc5.js";import"./trash.78f57a7a.js";import"./chevron-left.0808b01b.js";import"./FormValidation.907ef868.js";import"./index.12bd2e1a.js";import"./index.5d75643c.js";import"./index.7a54c9f6.js";import"./index.87e44ac4.js";import"./index.b5161418.js";import"./DynamicForm.54ce95a5.js";import"./index.b8946108.js";const i={};i.props={value:{key:"value",required:!1,type:null}};i.setup=(t,e)=>{const n=t,o=e.emit,u=R(n,o),a=[{text:" ",value:r.SubscriptionType.UNSPECIFIED},{text:"Individual",value:r.SubscriptionType.INDIVIDUAL},{text:"Portfolio",value:r.SubscriptionType.PORTFOLIO},{text:"Reseller",value:r.SubscriptionType.RESELLER}];return{proxy:u,options:a}};i.components=Object.assign({SimpleSelect:h},i.components);var L=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("SimpleSelect",{attrs:{options:t.options},model:{value:t.proxy,callback:function(o){t.proxy=o},expression:"proxy"}})},O=[];const _={};var j=l(i,L,O,!1,V,null,null,null);function V(t){for(let e in _)this[e]=_[e]}const w=function(){return j.exports}(),A=[{name:"subscriptionId",label:"ID",component:{is:T}},{name:"name",label:"Name",component:{is:$}},{name:"type",label:"Type",component:{is:w}},{name:"validity",label:"Validity",component:{is:E}}],N=P(A);let q,M;const v={};var U=l(N,q,M,!1,Y,null,null,null);function Y(t){for(let e in v)this[e]=v[e]}const z=function(){return U.exports}(),c={};c.setup=(t,e)=>{const n=B("id"),o=new Date,u=k(o,1),a=C({subscriptionId:{value:""},name:"",type:r.SubscriptionType.INDIVIDUAL,validity:{start:{value:m(o)},end:{value:m(u)}}}),f=D(()=>{var p;const s=a.value;return Boolean(s&&((p=s.subscriptionId)==null?void 0:p.value.length)>0&&s.name.length>0&&s.type&&s.validity)}),y=g(),b=F.create(n);async function S(){const s=a.value;!s||(await b.mutateAsync(s),y.push(`/admin/companies/${n.value}/subscriptions`))}return{id:n,create:a,isValid:f,createSubscription:S}};c.components=Object.assign({BackButton:x,SubscriptionPartialCreateRequestInput:z,FormButton:I},c.components);var J=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("section",{staticClass:"space-y-6"},[n("BackButton",{attrs:{link:`/admin/companies/${t.id}/subscriptions`}}),n("BaseSimpleCard",{staticClass:"divide-y"},[n("BaseTypography",{staticClass:"p-4",attrs:{component:"h4",variant:"subtitle3"}},[t._v(" Create Subscription ")]),n("form",{staticClass:"divide-y",on:{submit:function(o){return o.preventDefault(),t.createSubscription.apply(null,arguments)}}},[n("SubscriptionPartialCreateRequestInput",{model:{value:t.create,callback:function(o){t.create=o},expression:"create"}}),n("FormButton",{attrs:{action:"create","is-valid-form":t.isValid}})],1)],1)],1)},X=[];const d={};var G=l(c,J,X,!1,H,null,null,null);function H(t){for(let e in d)this[e]=d[e]}const dt=function(){return G.exports}();export{dt as default};
