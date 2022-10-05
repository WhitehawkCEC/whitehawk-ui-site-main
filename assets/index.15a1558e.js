import{F as S}from"./FormButton.6049583a.js";import{B as k}from"./BackButton.01c40626.js";import{D as C}from"./DynamicForm.ae78fcbe.js";import{aC as x,d as m,bN as B,n as _,aZ as D,b$ as d,ck as I,c8 as q,aG as $,aJ as P}from"./index.2f8dadb3.js";import{S as w}from"./SubscriptionProductConfigInput.908130f3.js";import{D as F}from"./DateRangeInput.d703aaf1.js";import{D as j}from"./DateRangeDisplay.557b96f4.js";import{u as O}from"./useAccountSubscriptionValidity.806aa1d5.js";import{a as A}from"./index.e1dc956f.js";import"./arrow-down-on-square.bf61cdc5.js";import"./trash.78f57a7a.js";import"./chevron-left.0808b01b.js";import"./ApiKeyInput.4e8c001d.js";import"./ApiKeyValidation.1e7b4bd9.js";import"./ApiKeyDescriptionDisplay.e3fe0f3b.js";import"./useBitsightCompanies.83083ced.js";import"./useBlackKiteEntities.67c2b091.js";import"./index.d268004d.js";import"./index.29d66bf4.js";import"./index.7a54c9f6.js";import"./index.87e44ac4.js";import"./index.f1fdbb9a.js";import"./index.e5ac0541.js";import"./IsoDateTimeDisplay.55e5b47e.js";import"./index.eb094270.js";const o={};o.props={id:{key:"id",required:!0,type:String},value:{key:"value",required:!0,type:null}};o.setup=(t,s)=>{const e=t,a=s.emit,r=x(e,a),l=m(()=>e.id),i=[{name:"name",label:"Name",component:{is:B,attrs:{required:!0,class:"w-full lg:max-w-sm"}}},{name:"validity",label:"Validity",component:{is:F,attrs:{required:!0}}},{name:"config",label:"Config",component:{is:w,attrs:{required:!0,id:l.value}}}];return{proxy:r,schema:i}};o.components=Object.assign({DynamicForm:C},o.components);var G=function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("DynamicForm",{attrs:{schema:t.schema},model:{value:t.proxy,callback:function(a){t.proxy=a},expression:"proxy"}})},N=[];const f={};var V=_(o,G,N,!1,E,null,null,null);function E(t){for(let s in f)this[s]=f[s]}const K=function(){return V.exports}();function M(t){const s=D();return m({get(){return s.value||t.value},set(e){s.value=e}})}const u={};u.setup=(t,s)=>{const e=d("id"),a=d("subscriptionId"),r=new Date,l=A(r,1),i=O.get(e,a),p=M(m(()=>{var n,c;return{name:"",config:{value:{oneofKind:"cyberRiskRatingBk",cyberRiskRatingBk:I.CyberRiskRatingBlackKiteConfig.create()}},validity:{start:{value:r.toISOString()},end:{value:((c=(n=i.data.value)==null?void 0:n.end)==null?void 0:c.value)||l.toISOString()}}}})),y=q.create(e,a),b=$(),g=P();async function R(){var n;if(p.value){const c=await y.mutateAsync(p.value);b.success("Created product");const h=((n=c.response.productId)==null?void 0:n.value)||"";g.push({path:`../${h}`,append:!0})}}return{id:e,subscriptionId:a,validityGet:i,createRequest:p,submit:R}};u.components=Object.assign({BackButton:k,DateRangeDisplay:j,SubscriptionProductPartialCreateRequestInput:K,FormButton:S},u.components);var z=function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("section",{staticClass:"space-y-6"},[e("BackButton",{attrs:{link:`/admin/companies/${t.id}/subscriptions/${t.subscriptionId}/products`}}),e("BaseSimpleCard",{staticClass:"divide-y overflow-hidden"},[e("BaseTypography",{staticClass:"block p-4",attrs:{variant:"subtitle3"}},[t._v(" Create Subscription Product ")]),e("div",{staticClass:"p-4"},[e("BaseVueQuery",{attrs:{query:t.validityGet},scopedSlots:t._u([{key:"success",fn:function(a){var r=a.data;return[e("DateRangeDisplay",{attrs:{value:r}})]}}])})],1),e("form",{staticClass:"divide-y",on:{submit:function(a){return a.preventDefault(),t.submit.apply(null,arguments)}}},[e("SubscriptionProductPartialCreateRequestInput",{attrs:{id:t.id},model:{value:t.createRequest,callback:function(a){t.createRequest=a},expression:"createRequest"}}),e("FormButton",{attrs:{action:"create"}})],1)],1)],1)},J=[];const v={};var Q=_(u,z,J,!1,T,null,null,null);function T(t){for(let s in v)this[s]=v[s]}const bt=function(){return Q.exports}();export{bt as default};