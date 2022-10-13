import{F as d}from"./FormButton.3f764028.js";import{E as K}from"./arrow-top-right-on-square.b063d2af.js";import{A as b}from"./ApiKeyDescriptionDisplay.46321acd.js";import{aD as x,d as p,n as f,c2 as g,cJ as y,cK as C,aH as h}from"./index.d71cfc17.js";import{s as $}from"./index.dd716acf.js";import"./arrow-down-on-square.bf61cdc5.js";import"./trash.78f57a7a.js";const r={};r.props={value:{key:"value",required:!1,type:null}};r.setup=(e,n)=>{const t=e,s=n.emit,i=x(t,s);return{apiKeyValue:p({get(){var o;return((o=t.value)==null?void 0:o.value)||""},set(o){i.value={value:o}}}),description:{label:"The CyberOne API Key consists of:",items:["36 characters","Format: xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx (8-4-4-4-12)","Uppercase letters (a-z)","Lowercase letters (a-z)","Numbers (0-9)"],example:"123e4567-e89b-12d3-a456-426614174000"}}};r.components=Object.assign({ApiKeyDescriptionDisplay:b,ExternalLinkSvg:K},r.components);var k=function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("div",{staticClass:"flex flex-col space-y-4"},[t("ApiKeyDescriptionDisplay",{attrs:{value:e.description}}),t("BaseExternalLink",{staticClass:"space-x-2",attrs:{"display-type":"primary",href:"#"}},[t("ExternalLinkSvg",{staticClass:"h-auto w-5 shrink-0"}),t("span",[e._v("Find my key")])],1),t("div",{staticClass:"flex items-center space-x-2"},[t("BaseInput",{staticClass:"w-full",model:{value:e.apiKeyValue,callback:function(s){e.apiKeyValue=s},expression:"apiKeyValue"}})],1)],1)},A=[];const _={};var I=f(r,k,A,!1,O,null,null,null);function O(e){for(let n in _)this[n]=_[n]}const S=function(){return I.exports}(),c={};c.props={value:{key:"value",required:!1,type:null}};c.setup=(e,n)=>{const t=e,s=n.emit,i=x(t,s);return{apiKey:p({get(){var o;const a=(o=t.value)==null?void 0:o.apiKeyMaybe;if((a==null?void 0:a.oneofKind)==="apiKey")return a.apiKey},set(a){a?i.value={apiKeyMaybe:{oneofKind:"apiKey",apiKey:a}}:i.value={apiKeyMaybe:{oneofKind:void 0}}}})}};c.components=Object.assign({ApiKeyInput:S},c.components);var D=function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("ApiKeyInput",{model:{value:e.apiKey,callback:function(s){e.apiKey=s},expression:"apiKey"}})},F=[];const m={};var B=f(c,D,F,!1,E,null,null,null);function E(e){for(let n in m)this[n]=m[n]}const j=function(){return B.exports}(),l={};l.setup=(e,n)=>{const t=g("id"),s=y.get(t),i=$(p(()=>s.data.value||C.create())),u=h(),a=y.set(t);async function o(){await a.mutateAsync(i.value),u.success("Successfully updated config.")}return{config:i,submit:o}};l.components=Object.assign({CyberOneConfigInput:j,FormButton:d},l.components);var M=function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("BaseSimpleCard",{staticClass:"divide-y"},[t("BaseTypography",{staticClass:"block p-4",attrs:{variant:"subtitle3"}},[e._v(" Configure CyberOne ")]),t("form",{staticClass:"divide-y",on:{submit:function(s){return s.preventDefault(),e.submit.apply(null,arguments)}}},[t("div",{staticClass:"p-4"},[t("BaseLabel",{staticClass:"space-y-1"},[t("span",[e._v("API Key:")]),t("CyberOneConfigInput",{model:{value:e.config,callback:function(s){e.config=s},expression:"config"}})],1)],1),t("FormButton",{attrs:{action:"save"}})],1)],1)},L=[];const v={};var R=f(l,M,L,!1,w,null,null,null);function w(e){for(let n in v)this[n]=v[n]}const H=function(){return R.exports}();export{H as default};
