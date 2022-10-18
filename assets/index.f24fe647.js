import{F as M}from"./FormButton.0ebfde7b.js";import{aB as j,c as h,n as $,b0 as N,ay as P,cg as T,cf as b,cK as q,ci as U,cj as D,ck as W,ag as G,cl as H,b$ as V,cG as A,cL as z,aF as Y}from"./index.7d19f156.js";import{A as Q,E as Z}from"./ApiKeyDescriptionDisplay.7a102aa7.js";import{s as J}from"./index.ac1ada87.js";import"./arrow-down-on-square.bf61cdc5.js";import"./trash.78f57a7a.js";const x={};x.props={value:{key:"value",required:!1,type:null}};x.setup=(e,s)=>{const t=e,a=s.emit,r=j(t,a);return{apiKeyValue:h({get(){var l;return((l=t.value)==null?void 0:l.value)||""},set(l){r.value={value:l}}}),description:{label:"The CyberOne API Key consists of:",items:["36 characters","In the format: xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx / (8-4-4-4-12)","Uppercase letters (A-Z)","Lowercase letters (a-z)","Numbers (0-9)"],example:"123e4567-e89b-12d3-a456-426614174000"}}};x.components=Object.assign({ApiKeyDescriptionDisplay:Q,ExternalLinkSvg:Z},x.components);var X=function(){var e=this,s=e.$createElement,t=e._self._c||s;return t("div",{staticClass:"flex flex-col space-y-2"},[t("ApiKeyDescriptionDisplay",{attrs:{value:e.description}}),t("BaseExternalLink",{staticClass:"space-x-2",attrs:{"display-type":"primary",href:"#"}},[t("ExternalLinkSvg",{staticClass:"h-auto w-5 shrink-0"}),t("span",[e._v("Find my key")])],1),t("BaseInput",{staticClass:"w-full",model:{value:e.apiKeyValue,callback:function(a){e.apiKeyValue=a},expression:"apiKeyValue"}})],1)},ee=[];const O={};var te=$(x,X,ee,!1,se,null,null,null);function se(e){for(let s in O)this[s]=O[s]}const ne=function(){return te.exports}(),g={};g.props={value:{key:"value",required:!1,type:null},assets:{key:"assets",required:!0,type:Array}};g.setup=(e,s)=>{const t=e,a=s.emit,r=P(t,a),f=h({get(){var d;const i=(d=t.value)==null?void 0:d.apiKeyMaybe;if((i==null?void 0:i.oneofKind)==="apiKey")return i.apiKey},set(i){i?r.value.apiKeyMaybe={oneofKind:"apiKey",apiKey:i}:r.value.apiKeyMaybe={oneofKind:void 0}}}),m=h(()=>t.assets.map(i=>{var d;return{text:i.name,value:(d=i.id)==null?void 0:d.value}})),l=h({get(){var i;return(i=t.value)==null?void 0:i.accountId},set(i){i&&(r.value.accountId=i)}});return{apiKey:f,assetOptions:m,mappedAccountId:l}};g.components=Object.assign({ApiKeyInput:ne,SimpleSelect:N},g.components);var ae=function(){var e=this,s=e.$createElement,t=e._self._c||s;return t("div",{staticClass:"space-y-8"},[t("BaseLabel",{staticClass:"space-y-1"},[t("span",[e._v("API Key:")]),t("ApiKeyInput",{model:{value:e.apiKey,callback:function(a){e.apiKey=a},expression:"apiKey"}})],1),t("BaseLabel",{staticClass:"space-y-1"},[t("span",[e._v("Mapped Account:")]),t("SimpleSelect",{staticClass:"w-full",attrs:{options:e.assetOptions},model:{value:e.mappedAccountId,callback:function(a){e.mappedAccountId=a},expression:"mappedAccountId"}})],1)],1)},ie=[];const R={};var oe=$(g,ae,ie,!1,re,null,null,null);function re(e){for(let s in R)this[s]=R[s]}const ce=function(){return oe.exports}();var K={},I={};(function(e){Object.defineProperty(e,"__esModule",{value:!0}),e.Service=e.ListResponse=e.ListRequest=void 0;const s=T,t=b,a=b,r=b,f=b,m=b,l=q,i=U;class d extends m.MessageType{constructor(){super("whitehawk.proto.internal.client_portal.accounts.id.integrations.cyber_one.assets.v1.ListRequest",[{no:1,name:"id",kind:"message",T:()=>i.Slug}])}create(n){const o={};return globalThis.Object.defineProperty(o,f.MESSAGE_TYPE,{enumerable:!1,value:this}),n!==void 0&&(0,r.reflectionMergePartial)(this,o,n),o}internalBinaryRead(n,o,p,c){let u=c!=null?c:this.create(),k=n.pos+o;for(;n.pos<k;){let[_,v]=n.tag();switch(_){case 1:u.id=i.Slug.internalBinaryRead(n,n.uint32(),p,u.id);break;default:let y=p.readUnknownField;if(y==="throw")throw new globalThis.Error(`Unknown field ${_} (wire type ${v}) for ${this.typeName}`);let C=n.skip(v);y!==!1&&(y===!0?a.UnknownFieldHandler.onRead:y)(this.typeName,u,_,v,C)}}return u}internalBinaryWrite(n,o,p){n.id&&i.Slug.internalBinaryWrite(n.id,o.tag(1,t.WireType.LengthDelimited).fork(),p).join();let c=p.writeUnknownFields;return c!==!1&&(c==!0?a.UnknownFieldHandler.onWrite:c)(this.typeName,n,o),o}}e.ListRequest=new d;class F extends m.MessageType{constructor(){super("whitehawk.proto.internal.client_portal.accounts.id.integrations.cyber_one.assets.v1.ListResponse",[{no:1,name:"assets",kind:"message",repeat:1,T:()=>l.CyberOneAsset}])}create(n){const o={assets:[]};return globalThis.Object.defineProperty(o,f.MESSAGE_TYPE,{enumerable:!1,value:this}),n!==void 0&&(0,r.reflectionMergePartial)(this,o,n),o}internalBinaryRead(n,o,p,c){let u=c!=null?c:this.create(),k=n.pos+o;for(;n.pos<k;){let[_,v]=n.tag();switch(_){case 1:u.assets.push(l.CyberOneAsset.internalBinaryRead(n,n.uint32(),p));break;default:let y=p.readUnknownField;if(y==="throw")throw new globalThis.Error(`Unknown field ${_} (wire type ${v}) for ${this.typeName}`);let C=n.skip(v);y!==!1&&(y===!0?a.UnknownFieldHandler.onRead:y)(this.typeName,u,_,v,C)}}return u}internalBinaryWrite(n,o,p){for(let u=0;u<n.assets.length;u++)l.CyberOneAsset.internalBinaryWrite(n.assets[u],o.tag(1,t.WireType.LengthDelimited).fork(),p).join();let c=p.writeUnknownFields;return c!==!1&&(c==!0?a.UnknownFieldHandler.onWrite:c)(this.typeName,n,o),o}}e.ListResponse=new F,e.Service=new s.ServiceType("whitehawk.proto.internal.client_portal.accounts.id.integrations.cyber_one.assets.v1.Service",[{name:"List",options:{},I:e.ListRequest,O:e.ListResponse}])})(I);Object.defineProperty(K,"__esModule",{value:!0});var B=K.ServiceClient=void 0;const S=I,le=T;class ue{constructor(s){this._transport=s,this.typeName=S.Service.typeName,this.methods=S.Service.methods,this.options=S.Service.options}list(s,t){const a=this.methods[0],r=this._transport.mergeOptions(t);return(0,le.stackIntercept)("unary",this._transport,a,r,s)}}B=K.ServiceClient=ue;const pe=new B(D),de={list(e){const s=W();async function t(){const a=await pe.list({id:{value:e.value}},s.value),{assets:r}=a.response;return r}return G([H,"accounts",e,"cyber-one","assets"],t)}},w={};w.setup=(e,s)=>{const t=V("id"),a=A.get(t),r=J(h(()=>a.data.value||z.create())),f=de.list(t),m=h(()=>f.data.value||[]),l=Y(),i=A.set(t);async function d(){await i.mutateAsync(r.value),l.success("Successfully updated config.")}return{config:r,assets:m,submit:d}};w.components=Object.assign({CyberOneConfigInput:ce,FormButton:M},w.components);var ye=function(){var e=this,s=e.$createElement,t=e._self._c||s;return t("BaseSimpleCard",{staticClass:"divide-y"},[t("BaseTypography",{staticClass:"block p-4",attrs:{variant:"subtitle3"}},[e._v(" Configure CyberOne ")]),t("form",{staticClass:"divide-y",on:{submit:function(a){return a.preventDefault(),e.submit.apply(null,arguments)}}},[t("div",{staticClass:"p-4"},[t("CyberOneConfigInput",{attrs:{assets:e.assets},model:{value:e.config,callback:function(a){e.config=a},expression:"config"}})],1),t("FormButton",{attrs:{action:"save"}})],1)],1)},fe=[];const L={};var me=$(w,ye,fe,!1,_e,null,null,null);function _e(e){for(let s in L)this[s]=L[s]}const ke=function(){return me.exports}();export{ke as default};
