import{F as b}from"./FormButton.9f3b7083.js";import{aB as C,c as r,n as y,b1 as g,ax as K,c7 as h,cQ as v,d1 as A,cU as I,aF as O}from"./index.eb352f97.js";import{E as k}from"./arrow-top-right-on-square.b063d2af.js";import{A as S}from"./ApiKeyDescriptionDisplay.bb8f4f88.js";import{s as $}from"./index.b857f2c2.js";import"./arrow-down-on-square.bf61cdc5.js";import"./trash.78f57a7a.js";const c={};c.props={value:{key:"value",required:!1,type:null}};c.setup=(t,s)=>{const e=t,n=s.emit,o=C(e,n);return{apiKeyValue:r({get(){var i;return((i=e.value)==null?void 0:i.value)||""},set(i){o.value={value:i}}}),description:{label:"The CyberOne API Key consists of:",items:["36 characters","In the format: xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx / (8-4-4-4-12)","Uppercase letters (A-Z)","Lowercase letters (a-z)","Numbers (0-9)"],example:"123e4567-e89b-12d3-a456-426614174000"}}};c.components=Object.assign({ApiKeyDescriptionDisplay:S,ExternalLinkSvg:k},c.components);var j=function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"flex flex-col space-y-2"},[e("ApiKeyDescriptionDisplay",{attrs:{value:t.description}}),e("BaseExternalLink",{staticClass:"space-x-2",attrs:{"display-type":"primary",href:"https://app.1risk.io/admin/users/eyJhY2NvdW50SWQiOjExLCJ1c2VySWQiOjYyOH0=/api-token"}},[e("ExternalLinkSvg",{staticClass:"h-auto w-5 shrink-0"}),e("span",[t._v("Find my key")])],1),e("BaseInput",{staticClass:"w-full",model:{value:t.apiKeyValue,callback:function(n){t.apiKeyValue=n},expression:"apiKeyValue"}})],1)},B=[];const d={};var E=y(c,j,B,!1,F,null,null,null);function F(t){for(let s in d)this[s]=d[s]}const L=function(){return E.exports}(),l={};l.props={value:{key:"value",required:!1,type:null},assets:{key:"assets",required:!0,type:Array}};l.setup=(t,s)=>{const e=t,n=s.emit,o=K(e,n),p=r({get(){var f;const a=(f=e.value)==null?void 0:f.apiKeyMaybe;if((a==null?void 0:a.oneofKind)==="apiKey")return a.apiKey},set(a){a?o.value.apiKeyMaybe={oneofKind:"apiKey",apiKey:a}:o.value.apiKeyMaybe={oneofKind:void 0}}}),u=r(()=>e.assets.map(a=>({text:a.name,value:a.referenceId}))),i=r({get(){var a;return(a=e.value)==null?void 0:a.mappedAssetId},set(a){a&&(o.value.mappedAssetId=a)}});return{apiKey:p,assetOptions:u,mappedAssetId:i}};l.components=Object.assign({ApiKeyInput:L,SimpleSelect:g},l.components);var D=function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"space-y-8"},[e("BaseLabel",{staticClass:"space-y-1"},[e("span",[t._v("API Key:")]),e("ApiKeyInput",{model:{value:t.apiKey,callback:function(n){t.apiKey=n},expression:"apiKey"}})],1),e("BaseLabel",{staticClass:"space-y-1"},[e("span",[t._v("Mapped Asset:")]),e("SimpleSelect",{staticClass:"w-full",attrs:{options:t.assetOptions},model:{value:t.mappedAssetId,callback:function(n){t.mappedAssetId=n},expression:"mappedAssetId"}})],1)],1)},M=[];const x={};var P=y(l,D,M,!1,R,null,null,null);function R(t){for(let s in x)this[s]=x[s]}const w=function(){return P.exports}(),m={};m.setup=(t,s)=>{const e=h("id"),n=v.get(e),o=$(r(()=>n.data.value||A.create())),p=I.list(e),u=r(()=>p.data.value||[]),i=O(),a=v.set(e);async function f(){await a.mutateAsync(o.value),i.success("Successfully updated config.")}return{config:o,assets:u,submit:f}};m.components=Object.assign({CyberOneConfigInput:w,FormButton:b},m.components);var V=function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("BaseSimpleCard",{staticClass:"divide-y"},[e("BaseTypography",{staticClass:"block p-4",attrs:{variant:"subtitle3"}},[t._v(" Configure CyberOne ")]),e("form",{staticClass:"divide-y",on:{submit:function(n){return n.preventDefault(),t.submit.apply(null,arguments)}}},[e("div",{staticClass:"p-4"},[e("CyberOneConfigInput",{attrs:{assets:t.assets},model:{value:t.config,callback:function(n){t.config=n},expression:"config"}})],1),e("FormButton",{attrs:{action:"save"}})],1)],1)},W=[];const _={};var q=y(m,V,W,!1,N,null,null,null);function N(t){for(let s in _)this[s]=_[s]}const H=function(){return q.exports}();export{H as default};
