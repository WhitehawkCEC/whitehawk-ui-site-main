import{F as V}from"./FormButton.a6c4ca52.js";import{E as Q}from"./arrow-top-right-on-square.b063d2af.js";import{A as J}from"./ApiKeyDescriptionDisplay.250fc564.js";import{aB as L,c as E,n as F,cg as g,ch as H,cj as X,ck as Z,cl as B,ag as ee,aT as te,aD as ne,cH as ie,c0 as ae,aF as se}from"./index.379cbc44.js";import{s as re}from"./index.1d6cc307.js";import"./arrow-down-on-square.bf61cdc5.js";import"./trash.78f57a7a.js";const W={};W.props={value:{key:"value",required:!1,type:null}};W.setup=(t,a)=>{const n=t,o=a.emit,p=L(n,o);return{apiKeyValue:E({get(){var y;return((y=n.value)==null?void 0:y.value)||""},set(y){p.value={value:y}}}),description:{label:"The Supply Wisdom API Key consists of:",items:["40 characters","Lowercase letters (a-z)","Numbers (0-9)"],example:"a9k1sdzwqr1bqmktj0xyzh1isp5leylpnkyj1kze"}}};W.components=Object.assign({ApiKeyDescriptionDisplay:J,ExternalLinkSvg:Q},W.components);var oe=function(){var t=this,a=t.$createElement,n=t._self._c||a;return n("div",{staticClass:"flex flex-col space-y-4"},[n("ApiKeyDescriptionDisplay",{attrs:{value:t.description}}),n("BaseExternalLink",{staticClass:"space-x-2",attrs:{"display-type":"primary",href:"#"}},[n("ExternalLinkSvg",{staticClass:"h-auto w-5 shrink-0"}),n("span",[t._v("Find my key")])],1),n("BaseInput",{staticClass:"w-full",model:{value:t.apiKeyValue,callback:function(o){t.apiKeyValue=o},expression:"apiKeyValue"}})],1)},le=[];const C={};var ue=F(W,oe,le,!1,pe,null,null,null);function pe(t){for(let a in C)this[a]=C[a]}const ce=function(){return ue.exports}(),K={};K.props={value:{key:"value",required:!1,type:null}};K.setup=(t,a)=>{const n=t,o=a.emit,p=L(n,o);return{apiKey:E({get(){var y;const m=(y=n.value)==null?void 0:y.apiKeyMaybe;if((m==null?void 0:m.oneofKind)==="apiKey")return m.apiKey},set(m){m?p.value={apiKeyMaybe:{oneofKind:"apiKey",apiKey:m}}:p.value={apiKeyMaybe:{oneofKind:void 0}}}})}};K.components=Object.assign({ApiKeyInput:ce},K.components);var de=function(){var t=this,a=t.$createElement,n=t._self._c||a;return n("ApiKeyInput",{model:{value:t.apiKey,callback:function(o){t.apiKey=o},expression:"apiKey"}})},ye=[];const P={};var fe=F(K,de,ye,!1,me,null,null,null);function me(t){for(let a in P)this[a]=P[a]}const he=function(){return fe.exports}();var R={},I={};(function(t){Object.defineProperty(t,"__esModule",{value:!0}),t.SupplyWisdomTarget=t.SupplyWisdomAsset=t.ApiKey=void 0;const a=g,n=g,o=g,p=g,f=g;class m extends f.MessageType{constructor(){super("whitehawk.proto.integration.supply_wisdom.domain.v1.ApiKey",[{no:1,name:"value",kind:"scalar",T:9}])}create(i){const l={value:""};return globalThis.Object.defineProperty(l,p.MESSAGE_TYPE,{enumerable:!1,value:this}),i!==void 0&&(0,o.reflectionMergePartial)(this,l,i),l}internalBinaryRead(i,l,h,d){let e=d!=null?d:this.create(),s=i.pos+l;for(;i.pos<s;){let[u,r]=i.tag();switch(u){case 1:e.value=i.string();break;default:let c=h.readUnknownField;if(c==="throw")throw new globalThis.Error(`Unknown field ${u} (wire type ${r}) for ${this.typeName}`);let v=i.skip(r);c!==!1&&(c===!0?n.UnknownFieldHandler.onRead:c)(this.typeName,e,u,r,v)}}return e}internalBinaryWrite(i,l,h){i.value!==""&&l.tag(1,a.WireType.LengthDelimited).string(i.value);let d=h.writeUnknownFields;return d!==!1&&(d==!0?n.UnknownFieldHandler.onWrite:d)(this.typeName,i,l),l}}t.ApiKey=new m;class y extends f.MessageType{constructor(){super("whitehawk.proto.integration.supply_wisdom.domain.v1.SupplyWisdomAsset",[{no:1,name:"id",kind:"scalar",T:9},{no:2,name:"name",kind:"scalar",T:9},{no:3,name:"target",kind:"message",T:()=>t.SupplyWisdomTarget},{no:4,name:"web_site_url",kind:"scalar",T:9}])}create(i){const l={id:"",name:"",webSiteUrl:""};return globalThis.Object.defineProperty(l,p.MESSAGE_TYPE,{enumerable:!1,value:this}),i!==void 0&&(0,o.reflectionMergePartial)(this,l,i),l}internalBinaryRead(i,l,h,d){let e=d!=null?d:this.create(),s=i.pos+l;for(;i.pos<s;){let[u,r]=i.tag();switch(u){case 1:e.id=i.string();break;case 2:e.name=i.string();break;case 3:e.target=t.SupplyWisdomTarget.internalBinaryRead(i,i.uint32(),h,e.target);break;case 4:e.webSiteUrl=i.string();break;default:let c=h.readUnknownField;if(c==="throw")throw new globalThis.Error(`Unknown field ${u} (wire type ${r}) for ${this.typeName}`);let v=i.skip(r);c!==!1&&(c===!0?n.UnknownFieldHandler.onRead:c)(this.typeName,e,u,r,v)}}return e}internalBinaryWrite(i,l,h){i.id!==""&&l.tag(1,a.WireType.LengthDelimited).string(i.id),i.name!==""&&l.tag(2,a.WireType.LengthDelimited).string(i.name),i.target&&t.SupplyWisdomTarget.internalBinaryWrite(i.target,l.tag(3,a.WireType.LengthDelimited).fork(),h).join(),i.webSiteUrl!==""&&l.tag(4,a.WireType.LengthDelimited).string(i.webSiteUrl);let d=h.writeUnknownFields;return d!==!1&&(d==!0?n.UnknownFieldHandler.onWrite:d)(this.typeName,i,l),l}}t.SupplyWisdomAsset=new y;class w extends f.MessageType{constructor(){super("whitehawk.proto.integration.supply_wisdom.domain.v1.SupplyWisdomTarget",[{no:1,name:"target_type",kind:"scalar",T:9},{no:2,name:"target_name",kind:"scalar",T:9}])}create(i){const l={targetType:"",targetName:""};return globalThis.Object.defineProperty(l,p.MESSAGE_TYPE,{enumerable:!1,value:this}),i!==void 0&&(0,o.reflectionMergePartial)(this,l,i),l}internalBinaryRead(i,l,h,d){let e=d!=null?d:this.create(),s=i.pos+l;for(;i.pos<s;){let[u,r]=i.tag();switch(u){case 1:e.targetType=i.string();break;case 2:e.targetName=i.string();break;default:let c=h.readUnknownField;if(c==="throw")throw new globalThis.Error(`Unknown field ${u} (wire type ${r}) for ${this.typeName}`);let v=i.skip(r);c!==!1&&(c===!0?n.UnknownFieldHandler.onRead:c)(this.typeName,e,u,r,v)}}return e}internalBinaryWrite(i,l,h){i.targetType!==""&&l.tag(1,a.WireType.LengthDelimited).string(i.targetType),i.targetName!==""&&l.tag(2,a.WireType.LengthDelimited).string(i.targetName);let d=h.writeUnknownFields;return d!==!1&&(d==!0?n.UnknownFieldHandler.onWrite:d)(this.typeName,i,l),l}}t.SupplyWisdomTarget=new w})(I);Object.defineProperty(R,"__esModule",{value:!0});var x=R.SupplyWisdomConfig=void 0;const ge=g,A=g,_e=g,we=g,ve=g,M=I;class ke extends ve.MessageType{constructor(){super("whitehawk.proto.integration.supply_wisdom.config.v1.SupplyWisdomConfig",[{no:1,name:"api_key",kind:"message",oneof:"apiKeyMaybe",T:()=>M.ApiKey}])}create(a){const n={apiKeyMaybe:{oneofKind:void 0}};return globalThis.Object.defineProperty(n,we.MESSAGE_TYPE,{enumerable:!1,value:this}),a!==void 0&&(0,_e.reflectionMergePartial)(this,n,a),n}internalBinaryRead(a,n,o,p){let f=p!=null?p:this.create(),m=a.pos+n;for(;a.pos<m;){let[y,w]=a.tag();switch(y){case 1:f.apiKeyMaybe={oneofKind:"apiKey",apiKey:M.ApiKey.internalBinaryRead(a,a.uint32(),o,f.apiKeyMaybe.apiKey)};break;default:let T=o.readUnknownField;if(T==="throw")throw new globalThis.Error(`Unknown field ${y} (wire type ${w}) for ${this.typeName}`);let i=a.skip(w);T!==!1&&(T===!0?A.UnknownFieldHandler.onRead:T)(this.typeName,f,y,w,i)}}return f}internalBinaryWrite(a,n,o){a.apiKeyMaybe.oneofKind==="apiKey"&&M.ApiKey.internalBinaryWrite(a.apiKeyMaybe.apiKey,n.tag(1,ge.WireType.LengthDelimited).fork(),o).join();let p=o.writeUnknownFields;return p!==!1&&(p==!0?A.UnknownFieldHandler.onWrite:p)(this.typeName,a,n),n}}x=R.SupplyWisdomConfig=new ke;var N={},Y={};(function(t){Object.defineProperty(t,"__esModule",{value:!0}),t.Service=t.SetResponse=t.SetRequest=t.GetResponse=t.GetRequest=void 0;const a=H,n=g,o=g,p=g,f=g,m=g,y=R,w=X;class T extends m.MessageType{constructor(){super("whitehawk.proto.internal.client_portal.accounts.id.integrations.supply_wisdom.config.v1.GetRequest",[{no:1,name:"id",kind:"message",T:()=>w.Slug}])}create(e){const s={};return globalThis.Object.defineProperty(s,f.MESSAGE_TYPE,{enumerable:!1,value:this}),e!==void 0&&(0,p.reflectionMergePartial)(this,s,e),s}internalBinaryRead(e,s,u,r){let c=r!=null?r:this.create(),v=e.pos+s;for(;e.pos<v;){let[k,S]=e.tag();switch(k){case 1:c.id=w.Slug.internalBinaryRead(e,e.uint32(),u,c.id);break;default:let _=u.readUnknownField;if(_==="throw")throw new globalThis.Error(`Unknown field ${k} (wire type ${S}) for ${this.typeName}`);let b=e.skip(S);_!==!1&&(_===!0?o.UnknownFieldHandler.onRead:_)(this.typeName,c,k,S,b)}}return c}internalBinaryWrite(e,s,u){e.id&&w.Slug.internalBinaryWrite(e.id,s.tag(1,n.WireType.LengthDelimited).fork(),u).join();let r=u.writeUnknownFields;return r!==!1&&(r==!0?o.UnknownFieldHandler.onWrite:r)(this.typeName,e,s),s}}t.GetRequest=new T;class i extends m.MessageType{constructor(){super("whitehawk.proto.internal.client_portal.accounts.id.integrations.supply_wisdom.config.v1.GetResponse",[{no:1,name:"data",kind:"message",T:()=>y.SupplyWisdomConfig}])}create(e){const s={};return globalThis.Object.defineProperty(s,f.MESSAGE_TYPE,{enumerable:!1,value:this}),e!==void 0&&(0,p.reflectionMergePartial)(this,s,e),s}internalBinaryRead(e,s,u,r){let c=r!=null?r:this.create(),v=e.pos+s;for(;e.pos<v;){let[k,S]=e.tag();switch(k){case 1:c.data=y.SupplyWisdomConfig.internalBinaryRead(e,e.uint32(),u,c.data);break;default:let _=u.readUnknownField;if(_==="throw")throw new globalThis.Error(`Unknown field ${k} (wire type ${S}) for ${this.typeName}`);let b=e.skip(S);_!==!1&&(_===!0?o.UnknownFieldHandler.onRead:_)(this.typeName,c,k,S,b)}}return c}internalBinaryWrite(e,s,u){e.data&&y.SupplyWisdomConfig.internalBinaryWrite(e.data,s.tag(1,n.WireType.LengthDelimited).fork(),u).join();let r=u.writeUnknownFields;return r!==!1&&(r==!0?o.UnknownFieldHandler.onWrite:r)(this.typeName,e,s),s}}t.GetResponse=new i;class l extends m.MessageType{constructor(){super("whitehawk.proto.internal.client_portal.accounts.id.integrations.supply_wisdom.config.v1.SetRequest",[{no:1,name:"id",kind:"message",T:()=>w.Slug},{no:2,name:"data",kind:"message",T:()=>y.SupplyWisdomConfig}])}create(e){const s={};return globalThis.Object.defineProperty(s,f.MESSAGE_TYPE,{enumerable:!1,value:this}),e!==void 0&&(0,p.reflectionMergePartial)(this,s,e),s}internalBinaryRead(e,s,u,r){let c=r!=null?r:this.create(),v=e.pos+s;for(;e.pos<v;){let[k,S]=e.tag();switch(k){case 1:c.id=w.Slug.internalBinaryRead(e,e.uint32(),u,c.id);break;case 2:c.data=y.SupplyWisdomConfig.internalBinaryRead(e,e.uint32(),u,c.data);break;default:let _=u.readUnknownField;if(_==="throw")throw new globalThis.Error(`Unknown field ${k} (wire type ${S}) for ${this.typeName}`);let b=e.skip(S);_!==!1&&(_===!0?o.UnknownFieldHandler.onRead:_)(this.typeName,c,k,S,b)}}return c}internalBinaryWrite(e,s,u){e.id&&w.Slug.internalBinaryWrite(e.id,s.tag(1,n.WireType.LengthDelimited).fork(),u).join(),e.data&&y.SupplyWisdomConfig.internalBinaryWrite(e.data,s.tag(2,n.WireType.LengthDelimited).fork(),u).join();let r=u.writeUnknownFields;return r!==!1&&(r==!0?o.UnknownFieldHandler.onWrite:r)(this.typeName,e,s),s}}t.SetRequest=new l;class h extends m.MessageType{constructor(){super("whitehawk.proto.internal.client_portal.accounts.id.integrations.supply_wisdom.config.v1.SetResponse",[])}create(e){const s={};return globalThis.Object.defineProperty(s,f.MESSAGE_TYPE,{enumerable:!1,value:this}),e!==void 0&&(0,p.reflectionMergePartial)(this,s,e),s}internalBinaryRead(e,s,u,r){return r!=null?r:this.create()}internalBinaryWrite(e,s,u){let r=u.writeUnknownFields;return r!==!1&&(r==!0?o.UnknownFieldHandler.onWrite:r)(this.typeName,e,s),s}}t.SetResponse=new h,t.Service=new a.ServiceType("whitehawk.proto.internal.client_portal.accounts.id.integrations.supply_wisdom.config.v1.Service",[{name:"Get",options:{},I:t.GetRequest,O:t.GetResponse},{name:"Set",options:{},I:t.SetRequest,O:t.SetResponse}])})(Y);Object.defineProperty(N,"__esModule",{value:!0});var z=N.ServiceClient=void 0;const U=Y,j=H;class Se{constructor(a){this._transport=a,this.typeName=U.Service.typeName,this.methods=U.Service.methods,this.options=U.Service.options}get(a,n){const o=this.methods[0],p=this._transport.mergeOptions(n);return(0,j.stackIntercept)("unary",this._transport,o,p,a)}set(a,n){const o=this.methods[1],p=this._transport.mergeOptions(n);return(0,j.stackIntercept)("unary",this._transport,o,p,a)}}z=N.ServiceClient=Se;const q=new z(Z);function D(t){return{queryKey:ie("accounts",t,"integrations","supply-wisdom","config")}}const G={get(t){const{queryKey:a}=D(t),n=B();async function o(){const p=await q.get({id:{value:t.value}},n.value),{data:f}=p.response;return f}return ee(a,o)},set(t){const{queryKey:a}=D(t),n=B(),o=te();async function p(f){return await q.set({id:{value:t.value},data:f},n.value)}return ne(p,{onSuccess(){o.invalidateQueries({queryKey:a,exact:!0})}})}},$={};$.setup=(t,a)=>{const n=ae("id"),o=G.get(n),p=re(E(()=>o.data.value||x.create())),f=se(),m=G.set(n);async function y(){await m.mutateAsync(p.value),f.success("Successfully updated config.")}return{config:p,submit:y}};$.components=Object.assign({SupplyWisdomConfigInput:he,FormButton:V},$.components);var Te=function(){var t=this,a=t.$createElement,n=t._self._c||a;return n("BaseSimpleCard",{staticClass:"divide-y"},[n("BaseTypography",{staticClass:"block p-4",attrs:{variant:"subtitle3"}},[t._v(" Configure Supply Wisdom ")]),n("form",{staticClass:"divide-y",on:{submit:function(o){return o.preventDefault(),t.submit.apply(null,arguments)}}},[n("div",{staticClass:"p-4"},[n("BaseLabel",{staticClass:"space-y-1"},[n("span",[t._v("API Key:")]),n("SupplyWisdomConfigInput",{model:{value:t.config,callback:function(o){t.config=o},expression:"config"}})],1)],1),n("FormButton",{attrs:{action:"save"}})],1)],1)},be=[];const O={};var We=F($,Te,be,!1,Ke,null,null,null);function Ke(t){for(let a in O)this[a]=O[a]}const Be=function(){return We.exports}();export{Be as default};
