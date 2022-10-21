import{F as x}from"./FormButton.0845fed0.js";import{aB as K,c as r,n as f,b0 as b,ay as S,b$ as C,cL as v,cN as h,cO as k,aF as $}from"./index.1e14903e.js";import{A,E as N,s as I}from"./index.bd01f109.js";import"./arrow-down-on-square.bf61cdc5.js";import"./trash.78f57a7a.js";const c={};c.props={value:{key:"value",required:!1,type:null}};c.setup=(t,s)=>{const e=t,n=s.emit,o=K(e,n);return{apiKeyValue:r({get(){var i;return((i=e.value)==null?void 0:i.value)||""},set(i){o.value={value:i}}}),description:{label:"The Supply Wisdom API Key consists of:",items:["40 characters","Lowercase letters (a-z)","Numbers (0-9)"],example:"a9k1sdzwqr1bqmktj0xyzh1isp5leylpnkyj1kze"}}};c.components=Object.assign({ApiKeyDescriptionDisplay:A,ExternalLinkSvg:N},c.components);var j=function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"flex flex-col space-y-2"},[e("ApiKeyDescriptionDisplay",{attrs:{value:t.description}}),e("BaseExternalLink",{staticClass:"space-x-2",attrs:{"display-type":"primary",href:"#"}},[e("ExternalLinkSvg",{staticClass:"h-auto w-5 shrink-0"}),e("span",[t._v("Find my key")])],1),e("BaseInput",{staticClass:"w-full",model:{value:t.apiKeyValue,callback:function(n){t.apiKeyValue=n},expression:"apiKeyValue"}})],1)},B=[];const _={};var F=f(c,j,B,!1,L,null,null,null);function L(t){for(let s in _)this[s]=_[s]}const T=function(){return F.exports}(),l={};l.props={value:{key:"value",required:!1,type:null},targets:{key:"targets",required:!0,type:Array}};l.setup=(t,s)=>{const e=t,n=s.emit,o=S(e,n),p=r({get(){var m;const a=(m=e.value)==null?void 0:m.apiKeyMaybe;if((a==null?void 0:a.oneofKind)==="apiKey")return a.apiKey},set(a){a?o.value.apiKeyMaybe={oneofKind:"apiKey",apiKey:a}:o.value.apiKeyMaybe={oneofKind:void 0}}}),u=r(()=>e.targets.map(a=>({text:a.targetName,value:a.targetName}))),i=r({get(){var a;return(a=e.value)==null?void 0:a.targetName},set(a){a&&(o.value.targetName=a)}});return{apiKey:p,targetOptions:u,mappedTargetName:i}};l.components=Object.assign({ApiKeyInput:T,SimpleSelect:b},l.components);var W=function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"space-y-8"},[e("BaseLabel",{staticClass:"space-y-1"},[e("span",[t._v("API Key:")]),e("ApiKeyInput",{model:{value:t.apiKey,callback:function(n){t.apiKey=n},expression:"apiKey"}})],1),e("BaseLabel",{staticClass:"space-y-1"},[e("span",[t._v("Mapped Target:")]),e("SimpleSelect",{staticClass:"w-full",attrs:{options:t.targetOptions},model:{value:t.mappedTargetName,callback:function(n){t.mappedTargetName=n},expression:"mappedTargetName"}})],1)],1)},D=[];const d={};var E=f(l,W,D,!1,M,null,null,null);function M(t){for(let s in d)this[s]=d[s]}const O=function(){return E.exports}(),y={};y.setup=(t,s)=>{const e=C("id"),n=v.get(e),o=I(r(()=>n.data.value||h.create())),p=k.list(e),u=r(()=>p.data.value||[]),i=$(),a=v.set(e);async function m(){await a.mutateAsync(o.value),i.success("Successfully updated config.")}return{config:o,targets:u,submit:m}};y.components=Object.assign({SupplyWisdomConfigInput:O,FormButton:x},y.components);var q=function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("BaseSimpleCard",{staticClass:"divide-y"},[e("BaseTypography",{staticClass:"block p-4",attrs:{variant:"subtitle3"}},[t._v(" Configure Supply Wisdom ")]),e("form",{staticClass:"divide-y",on:{submit:function(n){return n.preventDefault(),t.submit.apply(null,arguments)}}},[e("div",{staticClass:"p-4"},[e("SupplyWisdomConfigInput",{attrs:{targets:t.targets},model:{value:t.config,callback:function(n){t.config=n},expression:"config"}})],1),e("FormButton",{attrs:{action:"save"}})],1)],1)},w=[];const g={};var z=f(y,q,w,!1,P,null,null,null);function P(t){for(let s in g)this[s]=g[s]}const Q=function(){return z.exports}();export{Q as default};