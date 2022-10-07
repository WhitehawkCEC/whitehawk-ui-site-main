import{aC as x,d as H,n as $,ci as P,ch as b,cI as D,cJ as L,cl as Q,cm as T,ai as Y,aU as z,aE as J,cK as X,at as Z,bT as V,a_ as ee,cL as te,aB as ne,aG as ie,c1 as C}from"./index.fe4a1600.js";import{F as se}from"./FormButton.100534ea.js";import{A as ae}from"./ApiKeyInput.c3fae935.js";import{c as oe}from"./reactivity.esm-bundler.7760aebf.js";import"./arrow-down-on-square.bf61cdc5.js";import"./trash.78f57a7a.js";import"./ApiKeyValidation.763593ff.js";import"./ApiKeyDescriptionDisplay.122cddf2.js";const k={};k.props={value:{key:"value",required:!1,type:null}};k.setup=(e,s)=>{const i=e,o=s.emit,c=x(i,o);return{apiKey:H({get(){var f;const u=(f=i.value)==null?void 0:f.apiKeyMaybe;if((u==null?void 0:u.oneofKind)==="apiKey")return u.apiKey},set(u){u?c.value={apiKeyMaybe:{oneofKind:"apiKey",apiKey:u}}:c.value={apiKeyMaybe:{oneofKind:void 0}}}})}};k.components=Object.assign({ApiKeyInput:ae},k.components);var re=function(){var e=this,s=e.$createElement,i=e._self._c||s;return i("div",{staticClass:"flex flex-col space-y-4"},[i("ApiKeyInput",{model:{value:e.apiKey,callback:function(o){e.apiKey=o},expression:"apiKey"}})],1)},ce=[];const F={};var ue=$(k,re,ce,!1,le,null,null,null);function le(e){for(let s in F)this[s]=F[s]}const pe=function(){return ue.exports}();var I={},j={};(function(e){Object.defineProperty(e,"__esModule",{value:!0}),e.Service=e.SetResponse=e.SetRequest=e.GetResponse=e.GetRequest=void 0;const s=P,i=b,o=b,c=b,d=b,u=b,f=D,m=L;class R extends u.MessageType{constructor(){super("whitehawk.proto.internal.client_portal.accounts.id.subscriptions.subscription_id.integrations.black_kite.config.v1.GetRequest",[{no:1,name:"id",kind:"message",T:()=>m.AccountSubscriptionId}])}create(t){const n={};return globalThis.Object.defineProperty(n,d.MESSAGE_TYPE,{enumerable:!1,value:this}),t!==void 0&&(0,c.reflectionMergePartial)(this,n,t),n}internalBinaryRead(t,n,r,a){let l=a!=null?a:this.create(),v=t.pos+n;for(;t.pos<v;){let[y,_]=t.tag();switch(y){case 1:l.id=m.AccountSubscriptionId.internalBinaryRead(t,t.uint32(),r,l.id);break;default:let p=r.readUnknownField;if(p==="throw")throw new globalThis.Error(`Unknown field ${y} (wire type ${_}) for ${this.typeName}`);let g=t.skip(_);p!==!1&&(p===!0?o.UnknownFieldHandler.onRead:p)(this.typeName,l,y,_,g)}}return l}internalBinaryWrite(t,n,r){t.id&&m.AccountSubscriptionId.internalBinaryWrite(t.id,n.tag(1,i.WireType.LengthDelimited).fork(),r).join();let a=r.writeUnknownFields;return a!==!1&&(a==!0?o.UnknownFieldHandler.onWrite:a)(this.typeName,t,n),n}}e.GetRequest=new R;class h extends u.MessageType{constructor(){super("whitehawk.proto.internal.client_portal.accounts.id.subscriptions.subscription_id.integrations.black_kite.config.v1.GetResponse",[{no:1,name:"data",kind:"message",T:()=>f.BlackKiteConfig}])}create(t){const n={};return globalThis.Object.defineProperty(n,d.MESSAGE_TYPE,{enumerable:!1,value:this}),t!==void 0&&(0,c.reflectionMergePartial)(this,n,t),n}internalBinaryRead(t,n,r,a){let l=a!=null?a:this.create(),v=t.pos+n;for(;t.pos<v;){let[y,_]=t.tag();switch(y){case 1:l.data=f.BlackKiteConfig.internalBinaryRead(t,t.uint32(),r,l.data);break;default:let p=r.readUnknownField;if(p==="throw")throw new globalThis.Error(`Unknown field ${y} (wire type ${_}) for ${this.typeName}`);let g=t.skip(_);p!==!1&&(p===!0?o.UnknownFieldHandler.onRead:p)(this.typeName,l,y,_,g)}}return l}internalBinaryWrite(t,n,r){t.data&&f.BlackKiteConfig.internalBinaryWrite(t.data,n.tag(1,i.WireType.LengthDelimited).fork(),r).join();let a=r.writeUnknownFields;return a!==!1&&(a==!0?o.UnknownFieldHandler.onWrite:a)(this.typeName,t,n),n}}e.GetResponse=new h;class W extends u.MessageType{constructor(){super("whitehawk.proto.internal.client_portal.accounts.id.subscriptions.subscription_id.integrations.black_kite.config.v1.SetRequest",[{no:1,name:"id",kind:"message",T:()=>m.AccountSubscriptionId},{no:2,name:"data",kind:"message",T:()=>f.BlackKiteConfig}])}create(t){const n={};return globalThis.Object.defineProperty(n,d.MESSAGE_TYPE,{enumerable:!1,value:this}),t!==void 0&&(0,c.reflectionMergePartial)(this,n,t),n}internalBinaryRead(t,n,r,a){let l=a!=null?a:this.create(),v=t.pos+n;for(;t.pos<v;){let[y,_]=t.tag();switch(y){case 1:l.id=m.AccountSubscriptionId.internalBinaryRead(t,t.uint32(),r,l.id);break;case 2:l.data=f.BlackKiteConfig.internalBinaryRead(t,t.uint32(),r,l.data);break;default:let p=r.readUnknownField;if(p==="throw")throw new globalThis.Error(`Unknown field ${y} (wire type ${_}) for ${this.typeName}`);let g=t.skip(_);p!==!1&&(p===!0?o.UnknownFieldHandler.onRead:p)(this.typeName,l,y,_,g)}}return l}internalBinaryWrite(t,n,r){t.id&&m.AccountSubscriptionId.internalBinaryWrite(t.id,n.tag(1,i.WireType.LengthDelimited).fork(),r).join(),t.data&&f.BlackKiteConfig.internalBinaryWrite(t.data,n.tag(2,i.WireType.LengthDelimited).fork(),r).join();let a=r.writeUnknownFields;return a!==!1&&(a==!0?o.UnknownFieldHandler.onWrite:a)(this.typeName,t,n),n}}e.SetRequest=new W;class O extends u.MessageType{constructor(){super("whitehawk.proto.internal.client_portal.accounts.id.subscriptions.subscription_id.integrations.black_kite.config.v1.SetResponse",[])}create(t){const n={};return globalThis.Object.defineProperty(n,d.MESSAGE_TYPE,{enumerable:!1,value:this}),t!==void 0&&(0,c.reflectionMergePartial)(this,n,t),n}internalBinaryRead(t,n,r,a){return a!=null?a:this.create()}internalBinaryWrite(t,n,r){let a=r.writeUnknownFields;return a!==!1&&(a==!0?o.UnknownFieldHandler.onWrite:a)(this.typeName,t,n),n}}e.SetResponse=new O,e.Service=new s.ServiceType("whitehawk.proto.internal.client_portal.accounts.id.subscriptions.subscription_id.integrations.black_kite.config.v1.Service",[{name:"Get",options:{},I:e.GetRequest,O:e.GetResponse},{name:"Set",options:{},I:e.SetRequest,O:e.SetResponse}])})(j);Object.defineProperty(I,"__esModule",{value:!0});var N=I.ServiceClient=void 0;const K=j,q=P;class de{constructor(s){this._transport=s,this.typeName=K.Service.typeName,this.methods=K.Service.methods,this.options=K.Service.options}get(s,i){const o=this.methods[0],c=this._transport.mergeOptions(i);return(0,q.stackIntercept)("unary",this._transport,o,c,s)}set(s,i){const o=this.methods[1],c=this._transport.mergeOptions(i);return(0,q.stackIntercept)("unary",this._transport,o,c,s)}}N=I.ServiceClient=de;const M=new N(Q);function A({accountId:e,subscriptionId:s}){return{idArg:oe(()=>({accountId:{value:e.value},subscriptionId:{value:s.value}})),queryKey:X("accounts",e,"subscriptions",s,"integrations","black-kite","config")}}const E={get(e){const{idArg:s,queryKey:i}=A(e),o=T();async function c(){const d=await M.get({id:s.value},o.value),{response:u}=d;return u}return Y(i,c)},set(e){const{idArg:s,queryKey:i}=A(e),o=T(),c=z();async function d(u){return await M.set({id:s.value,data:u},o.value)}return J(d,{onSuccess(){c.invalidateQueries({queryKey:i,exact:!0})}})}},S={};S.props={accountId:{key:"accountId",required:!0,type:String},subscriptionId:{key:"subscriptionId",required:!0,type:String}};S.setup=(e,s)=>{const o=V(e),c=ee(te.create()),d={accountId:o.accountId,subscriptionId:o.subscriptionId},u=E.get(d);ne(()=>u.data.value,h=>{h!=null&&h.data&&(c.value=h.data)},{immediate:!0});const f=ie(),m=E.set(d);async function R(){await m.mutateAsync(c.value),f.success("Successfully updated config.")}return{config:c,configSet:m,submit:R}};S.components=Object.assign({BlackKiteConfigInput:pe,FormButton:se,CheckSvg:Z},S.components);var fe=function(){var e=this,s=e.$createElement,i=e._self._c||s;return i("section",{staticClass:"space-y-6"},[i("BaseSimpleCard",{staticClass:"divide-y"},[i("BaseTypography",{staticClass:"block p-4",attrs:{variant:"subtitle3"}},[e._v(" Configure Black Kite ")]),i("form",{staticClass:"divide-y",on:{submit:function(o){return o.preventDefault(),e.submit.apply(null,arguments)}}},[i("div",{staticClass:"p-4"},[i("BaseLabel",{staticClass:"space-y-1"},[i("span",[e._v("API Key:")]),i("BlackKiteConfigInput",{model:{value:e.config,callback:function(o){e.config=o},expression:"config"}})],1)],1),i("FormButton",{attrs:{action:"save"}})],1)],1),i("BaseVueQuery",{attrs:{query:e.configSet},scopedSlots:e._u([{key:"success",fn:function(){return[i("CheckSvg",{staticClass:"sr-only"})]},proxy:!0}])})],1)},ye=[];const U={};var _e=$(S,fe,ye,!1,me,null,null,null);function me(e){for(let s in U)this[s]=U[s]}const he=function(){return _e.exports}(),w={};w.setup=(e,s)=>{const i=C("id"),o=C("subscriptionId");return{accountId:i,subscriptionId:o}};w.components=Object.assign({IntegrationBlackKiteConfigForm:he},w.components);var ve=function(){var e=this,s=e.$createElement,i=e._self._c||s;return i("IntegrationBlackKiteConfigForm",{attrs:{"account-id":e.accountId,"subscription-id":e.subscriptionId}})},ge=[];const G={};var be=$(w,ve,ge,!1,ke,null,null,null);function ke(e){for(let s in G)this[s]=G[s]}const Ce=function(){return be.exports}();export{Ce as default};
