import{b0 as b,aB as g,n as l,ao as $,bR as I,aZ as h,cV as L,c0 as p}from"./index.36ccbbe7.js";import{m as r,u as S,a as k}from"./useAccountSubscriptionLicensingId.57430ccb.js";import{d as C}from"./index.b3b7ed44.js";import"./DynamicForm.7a76db33.js";const o={};o.props={value:{key:"value",required:!1,type:null}};o.setup=(e,t)=>{const n=e,s=t.emit,c=g(n,s),i=[{text:" ",value:r.LicenseType.UNSPECIFIED},{text:"Annual",value:r.LicenseType.ANNUAL},{text:"One Time",value:r.LicenseType.ONE_TIME}];return{proxy:c,options:i}};o.components=Object.assign({SimpleSelect:b},o.components);var P=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("SimpleSelect",{attrs:{options:e.options},model:{value:e.proxy,callback:function(s){e.proxy=s},expression:"proxy"}})},T=[];const _={};var A=l(o,P,T,!1,F,null,null,null);function F(e){for(let t in _)this[t]=_[t]}const R=function(){return A.exports}(),j=[{name:"type",label:"Type",component:{is:R}},{name:"quantity",label:"Quantity",component:{is:"BaseInput",attrs:{type:"number",min:0}}}],B=C(j);let E,O;const m={};var N=l(B,E,O,!1,q,null,null,null);function q(e){for(let t in m)this[t]=m[t]}const M=function(){return N.exports}(),a={};a.props={licensingId:{key:"licensingId",required:!0,type:String}};a.setup=(e,t)=>{const n=t.emit,c=I(e),i=h({type:r.LicenseType.ANNUAL,quantity:100}),f=S.create(c.licensingId);async function y(){const x=await f.mutateAsync(i.value);n("created",x.response.packId||L.create())}return{body:i,submit:y}};a.components=Object.assign({LicensePackOrderInput:M,PlusSvg:$},a.components);var w=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("BaseSimpleCard",{staticClass:"divide-y"},[n("BaseTypography",{staticClass:"p-4",attrs:{variant:"subtitle3",component:"h3"}},[e._v(" Add License Packs ")]),n("form",{staticClass:"divide-y",on:{submit:function(s){return s.preventDefault(),e.submit.apply(null,arguments)}}},[n("LicensePackOrderInput",{model:{value:e.body,callback:function(s){e.body=s},expression:"body"}}),n("div",{staticClass:"p-4"},[n("BaseButton",{staticClass:"space-x-2"},[n("PlusSvg",{staticClass:"h-auto w-4 xl:w-5"}),n("span",[e._v("License Pack")])],1)],1)],1)],1)},D=[];const d={};var U=l(a,w,D,!1,Q,null,null,null);function Q(e){for(let t in d)this[t]=d[t]}const V=function(){return U.exports}(),u={};u.setup=(e,t)=>{const n=p("id"),s=p("subscriptionId");return{licensingId:k.get(n,s)}};u.components=Object.assign({LicensePackCreateForm:V},u.components);var z=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("BaseVueQuery",{attrs:{query:e.licensingId},scopedSlots:e._u([{key:"success",fn:function(s){var c=s.data;return[n("LicensePackCreateForm",{attrs:{"licensing-id":c.id?c.id.value:""}})]}}])})},Z=[];const v={};var G=l(u,z,Z,!1,H,null,null,null);function H(e){for(let t in v)this[t]=v[t]}const Y=function(){return G.exports}();export{Y as default};
