import{F as b}from"./FormButton.8da87ac9.js";import{aB as C,c,n as m,b0 as g,ay as K,c0 as h,cN as v,cZ as A,cR as I,aF as O}from"./index.5272d946.js";import{E as k}from"./arrow-top-right-on-square.b063d2af.js";import{A as S}from"./ApiKeyDescriptionDisplay.31b4175b.js";import{s as $}from"./index.7a52f655.js";import"./arrow-down-on-square.bf61cdc5.js";import"./trash.78f57a7a.js";const r={};r.props={value:{key:"value",required:!1,type:null}};r.setup=(t,s)=>{const e=t,n=s.emit,o=C(e,n);return{apiKeyValue:c({get(){var i;return((i=e.value)==null?void 0:i.value)||""},set(i){o.value={value:i}}}),description:{label:"The CyberOne API Key consists of:",items:["36 characters","In the format: xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx / (8-4-4-4-12)","Uppercase letters (A-Z)","Lowercase letters (a-z)","Numbers (0-9)"],example:"123e4567-e89b-12d3-a456-426614174000"}}};r.components=Object.assign({ApiKeyDescriptionDisplay:S,ExternalLinkSvg:k},r.components);var j=function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"flex flex-col space-y-2"},[e("ApiKeyDescriptionDisplay",{attrs:{value:t.description}}),e("BaseExternalLink",{staticClass:"space-x-2",attrs:{"display-type":"primary",href:"https://app.1risk.io/admin/users/eyJhY2NvdW50SWQiOjExLCJ1c2VySWQiOjYyOH0=/api-token"}},[e("ExternalLinkSvg",{staticClass:"h-auto w-5 shrink-0"}),e("span",[t._v("Find my key")])],1),e("BaseInput",{staticClass:"w-full",model:{value:t.apiKeyValue,callback:function(n){t.apiKeyValue=n},expression:"apiKeyValue"}})],1)},B=[];const d={};var E=m(r,j,B,!1,F,null,null,null);function F(t){for(let s in d)this[s]=d[s]}const L=function(){return E.exports}(),l={};l.props={value:{key:"value",required:!1,type:null},assets:{key:"assets",required:!0,type:Array}};l.setup=(t,s)=>{const e=t,n=s.emit,o=K(e,n),p=c({get(){var f;const a=(f=e.value)==null?void 0:f.apiKeyMaybe;if((a==null?void 0:a.oneofKind)==="apiKey")return a.apiKey},set(a){a?o.value.apiKeyMaybe={oneofKind:"apiKey",apiKey:a}:o.value.apiKeyMaybe={oneofKind:void 0}}}),u=c(()=>e.assets.map(a=>({text:a.name,value:a.referenceId}))),i=c({get(){var a;return(a=e.value)==null?void 0:a.mappedAssetId},set(a){a&&(o.value.mappedAssetId=a)}});return{apiKey:p,assetOptions:u,mappedAssetId:i}};l.components=Object.assign({ApiKeyInput:L,SimpleSelect:g},l.components);var D=function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"space-y-8"},[e("BaseLabel",{staticClass:"space-y-1"},[e("span",[t._v("API Key:")]),e("ApiKeyInput",{model:{value:t.apiKey,callback:function(n){t.apiKey=n},expression:"apiKey"}})],1),e("BaseLabel",{staticClass:"space-y-1"},[e("span",[t._v("Mapped Asset:")]),e("SimpleSelect",{staticClass:"w-full",attrs:{options:t.assetOptions},model:{value:t.mappedAssetId,callback:function(n){t.mappedAssetId=n},expression:"mappedAssetId"}})],1)],1)},M=[];const _={};var R=m(l,D,M,!1,P,null,null,null);function P(t){for(let s in _)this[s]=_[s]}const w=function(){return R.exports}(),y={};y.setup=(t,s)=>{const e=h("id"),n=v.get(e),o=$(c(()=>n.data.value||A.create())),p=I.list(e),u=c(()=>p.data.value||[]),i=O(),a=v.set(e);async function f(){await a.mutateAsync(o.value),i.success("Successfully updated config.")}return{config:o,assets:u,submit:f}};y.components=Object.assign({CyberOneConfigInput:w,FormButton:b},y.components);var N=function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("BaseSimpleCard",{staticClass:"divide-y"},[e("BaseTypography",{staticClass:"block p-4",attrs:{variant:"subtitle3"}},[t._v(" Configure CyberOne ")]),e("form",{staticClass:"divide-y",on:{submit:function(n){return n.preventDefault(),t.submit.apply(null,arguments)}}},[e("div",{staticClass:"p-4"},[e("CyberOneConfigInput",{attrs:{assets:t.assets},model:{value:t.config,callback:function(n){t.config=n},expression:"config"}})],1),e("FormButton",{attrs:{action:"save"}})],1)],1)},V=[];const x={};var W=m(y,N,V,!1,q,null,null,null);function q(t){for(let s in x)this[s]=x[s]}const H=function(){return W.exports}();export{H as default};
