import{F as C}from"./FormButton.b64ecf32.js";import{B as S}from"./BackButton.f022f255.js";import{bM as B,n as d,aZ as h,d as f,b_ as l,cj as k,c7 as I,aG as D,aJ as q}from"./index.181068a8.js";import{S as x}from"./SubscriptionProductConfigInput.3e2dfb33.js";import{D as w}from"./DateRangeInput.2048034d.js";import{d as P}from"./index.e3aec016.js";import{D as $}from"./DateRangeDisplay.6164c365.js";import{u as F}from"./useAccountSubscriptionValidity.813c046c.js";import{a as j}from"./index.3a4d5a14.js";import"./arrow-down-on-square.bf61cdc5.js";import"./trash.78f57a7a.js";import"./chevron-left.0808b01b.js";import"./ApiKeyDescriptionDisplay.0f1f0e9a.js";import"./ApiKeyValidation.6c497e5c.js";import"./index.a325b185.js";import"./index.2f1d3902.js";import"./index.7a54c9f6.js";import"./index.87e44ac4.js";import"./index.9efe415a.js";import"./index.016977cb.js";import"./DynamicForm.fc38fbfd.js";import"./IsoDateTimeDisplay.18727b4c.js";import"./index.71bb9c04.js";const A=[{name:"name",label:"Name",component:{is:B,attrs:{required:!0,class:"w-full lg:max-w-sm"}}},{name:"validity",label:"Validity",component:{is:w,attrs:{required:!0}}},{name:"config",label:"Config",component:{is:x,attrs:{required:!0}}}],G=P(A);let M,O;const p={};var V=d(G,M,O,!1,K,null,null,null);function K(e){for(let s in p)this[s]=p[s]}const N=function(){return V.exports}();function z(e){const s=h();return f({get(){return s.value||e.value},set(t){s.value=t}})}const i={};i.setup=(e,s)=>{const t=l("id"),a=l("subscriptionId"),o=new Date,_=j(o,1),u=F.get(t,a),c=z(f(()=>{var n,r;return{name:"",config:{value:{oneofKind:"cyberRiskRatingBk",cyberRiskRatingBk:k.CyberRiskRatingBlackKiteConfig.create()}},validity:{start:{value:o.toISOString()},end:{value:((r=(n=u.data.value)==null?void 0:n.end)==null?void 0:r.value)||_.toISOString()}}}})),v=I.create(t,a),b=D(),y=q();async function g(){var n;if(c.value){const r=await v.mutateAsync(c.value);b.success("Created product");const R=((n=r.response.productId)==null?void 0:n.value)||"";y.push({path:`../${R}`,append:!0})}}return{id:t,subscriptionId:a,validityGet:u,createRequest:c,submit:g}};i.components=Object.assign({BackButton:S,DateRangeDisplay:$,SubscriptionProductPartialCreateRequestInput:N,FormButton:C},i.components);var E=function(){var e=this,s=e.$createElement,t=e._self._c||s;return t("section",{staticClass:"space-y-6"},[t("BackButton",{attrs:{link:`/admin/companies/${e.id}/subscriptions/${e.subscriptionId}/products`}}),t("BaseSimpleCard",{staticClass:"divide-y overflow-hidden"},[t("BaseTypography",{staticClass:"block p-4",attrs:{variant:"subtitle3"}},[e._v(" Create Subscription Product ")]),t("div",{staticClass:"p-4"},[t("BaseVueQuery",{attrs:{query:e.validityGet},scopedSlots:e._u([{key:"success",fn:function(a){var o=a.data;return[t("DateRangeDisplay",{attrs:{value:o}})]}}])})],1),t("form",{staticClass:"divide-y",on:{submit:function(a){return a.preventDefault(),e.submit.apply(null,arguments)}}},[t("SubscriptionProductPartialCreateRequestInput",{model:{value:e.createRequest,callback:function(a){e.createRequest=a},expression:"createRequest"}}),t("FormButton",{attrs:{action:"create"}})],1)],1)],1)},J=[];const m={};var Q=d(i,E,J,!1,T,null,null,null);function T(e){for(let s in m)this[s]=m[s]}const vt=function(){return Q.exports}();export{vt as default};