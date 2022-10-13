import{F as h}from"./FormButton.c7470adc.js";import{aD as k,d as v,bP as x,n as _,bv as C,c2 as m,ch as D,cb as B,aH as I,aK as q}from"./index.ad2ff904.js";import{D as $}from"./DynamicForm.50aff3fb.js";import{S as P}from"./SubscriptionProductConfigInput.ae77a268.js";import{D as w}from"./DateRangeInput.69954ce6.js";import{D as F}from"./DateRangeDisplay.4f9ad3a4.js";import{u as j}from"./useAccountSubscriptionValidity.09c14fbd.js";import{s as O}from"./index.f7d610a3.js";import{a as A}from"./index.982b383b.js";import"./arrow-down-on-square.bf61cdc5.js";import"./trash.78f57a7a.js";import"./ApiTokenInput.dee21fbd.js";import"./arrow-top-right-on-square.b063d2af.js";import"./ApiKeyDescriptionDisplay.c5089053.js";import"./useBitsightCompanies.a2cd11c5.js";import"./ApiKeyInput.830d91f5.js";import"./ApiKeyValidation.66cf1ead.js";import"./useBlackKiteEntities.56086fba.js";import"./index.6e54b4ff.js";import"./index.28672862.js";import"./index.7a54c9f6.js";import"./index.87e44ac4.js";import"./index.4443957f.js";import"./index.91aa5ddc.js";import"./IsoDateTimeDisplay.d6a37f66.js";import"./index.fb7d7d9f.js";const n={};n.props={id:{key:"id",required:!0,type:String},value:{key:"value",required:!0,type:null}};n.setup=(t,a)=>{const e=t,s=a.emit,r=k(e,s),p=v(()=>e.id),i=[{name:"name",label:"Name",component:{is:x,attrs:{required:!0,class:"w-full lg:max-w-sm"}}},{name:"validity",label:"Validity",component:{is:w,attrs:{required:!0}}},{name:"config",label:"Config",component:{is:P,attrs:{required:!0,id:p.value}}}];return{proxy:r,schema:i}};n.components=Object.assign({DynamicForm:$},n.components);var K=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("DynamicForm",{attrs:{schema:t.schema},model:{value:t.proxy,callback:function(s){t.proxy=s},expression:"proxy"}})},V=[];const d={};var E=_(n,K,V,!1,G,null,null,null);function G(t){for(let a in d)this[a]=d[a]}const M=function(){return E.exports}(),u={};u.setup=(t,a)=>{const e=m("id"),s=m("subscriptionId"),r=new Date,p=A(r,1),i=j.get(e,s),l=O(v(()=>{var o,c;return{name:"",config:{value:{oneofKind:"cyberRiskRatingBk",cyberRiskRatingBk:D.CyberRiskRatingBlackKiteConfig.create()}},validity:{start:{value:r.toISOString()},end:{value:((c=(o=i.data.value)==null?void 0:o.end)==null?void 0:c.value)||p.toISOString()}}}})),y=B.create(e,s),b=I(),g=q();async function R(){var o;if(l.value){const c=await y.mutateAsync(l.value);b.success("Created product");const S=((o=c.response.productId)==null?void 0:o.value)||"";g.push({path:`../${S}`,append:!0})}}return{id:e,subscriptionId:s,validityGet:i,createRequest:l,submit:R}};u.components=Object.assign({BackButton:C,DateRangeDisplay:F,SubscriptionProductPartialCreateRequestInput:M,FormButton:h},u.components);var N=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("section",{staticClass:"space-y-6"},[e("BackButton",{attrs:{link:`/admin/companies/${t.id}/subscriptions/${t.subscriptionId}/products`}}),e("BaseSimpleCard",{staticClass:"divide-y overflow-hidden"},[e("BaseTypography",{staticClass:"block p-4",attrs:{variant:"subtitle3"}},[t._v(" Create Subscription Product ")]),e("div",{staticClass:"p-4"},[e("BaseVueQuery",{attrs:{query:t.validityGet},scopedSlots:t._u([{key:"success",fn:function(s){var r=s.data;return[e("DateRangeDisplay",{attrs:{value:r}})]}}])})],1),e("form",{staticClass:"divide-y",on:{submit:function(s){return s.preventDefault(),t.submit.apply(null,arguments)}}},[e("SubscriptionProductPartialCreateRequestInput",{attrs:{id:t.id},model:{value:t.createRequest,callback:function(s){t.createRequest=s},expression:"createRequest"}}),e("FormButton",{attrs:{action:"create"}})],1)],1)],1)},z=[];const f={};var H=_(u,N,z,!1,Q,null,null,null);function Q(t){for(let a in f)this[a]=f[a]}const bt=function(){return H.exports}();export{bt as default};