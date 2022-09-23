import{ca as B,c9 as k,cg as M,cb as j,cc as q,cd as F,ce as R,ah as C,aS as O,aD as D,cf as v}from"./index.7b120442.js";var T={},W={};(function(r){Object.defineProperty(r,"__esModule",{value:!0}),r.Service=r.UpdateResponse=r.UpdateRequest=r.GetResponse=r.GetRequest=void 0;const c=B,a=k,o=k,l=k,h=k,g=k,y=M,b=j,d=q;class $ extends g.MessageType{constructor(){super("whitehawk.proto.internal.client_portal.accounts.id.subscriptions.subscription_id.products.product_id.config.v3.GetRequest",[{no:1,name:"account_id",kind:"message",T:()=>d.Slug},{no:2,name:"subscription_id",kind:"message",T:()=>d.Slug},{no:3,name:"product_id",kind:"message",T:()=>b.Ulid}])}create(e){const n={};return globalThis.Object.defineProperty(n,h.MESSAGE_TYPE,{enumerable:!1,value:this}),e!==void 0&&(0,l.reflectionMergePartial)(this,n,e),n}internalBinaryRead(e,n,i,t){let s=t!=null?t:this.create(),_=e.pos+n;for(;e.pos<_;){let[p,f]=e.tag();switch(p){case 1:s.accountId=d.Slug.internalBinaryRead(e,e.uint32(),i,s.accountId);break;case 2:s.subscriptionId=d.Slug.internalBinaryRead(e,e.uint32(),i,s.subscriptionId);break;case 3:s.productId=b.Ulid.internalBinaryRead(e,e.uint32(),i,s.productId);break;default:let u=i.readUnknownField;if(u==="throw")throw new globalThis.Error(`Unknown field ${p} (wire type ${f}) for ${this.typeName}`);let m=e.skip(f);u!==!1&&(u===!0?o.UnknownFieldHandler.onRead:u)(this.typeName,s,p,f,m)}}return s}internalBinaryWrite(e,n,i){e.accountId&&d.Slug.internalBinaryWrite(e.accountId,n.tag(1,a.WireType.LengthDelimited).fork(),i).join(),e.subscriptionId&&d.Slug.internalBinaryWrite(e.subscriptionId,n.tag(2,a.WireType.LengthDelimited).fork(),i).join(),e.productId&&b.Ulid.internalBinaryWrite(e.productId,n.tag(3,a.WireType.LengthDelimited).fork(),i).join();let t=i.writeUnknownFields;return t!==!1&&(t==!0?o.UnknownFieldHandler.onWrite:t)(this.typeName,e,n),n}}r.GetRequest=new $;class N extends g.MessageType{constructor(){super("whitehawk.proto.internal.client_portal.accounts.id.subscriptions.subscription_id.products.product_id.config.v3.GetResponse",[{no:1,name:"config",kind:"message",T:()=>y.SubscriptionProductConfig}])}create(e){const n={};return globalThis.Object.defineProperty(n,h.MESSAGE_TYPE,{enumerable:!1,value:this}),e!==void 0&&(0,l.reflectionMergePartial)(this,n,e),n}internalBinaryRead(e,n,i,t){let s=t!=null?t:this.create(),_=e.pos+n;for(;e.pos<_;){let[p,f]=e.tag();switch(p){case 1:s.config=y.SubscriptionProductConfig.internalBinaryRead(e,e.uint32(),i,s.config);break;default:let u=i.readUnknownField;if(u==="throw")throw new globalThis.Error(`Unknown field ${p} (wire type ${f}) for ${this.typeName}`);let m=e.skip(f);u!==!1&&(u===!0?o.UnknownFieldHandler.onRead:u)(this.typeName,s,p,f,m)}}return s}internalBinaryWrite(e,n,i){e.config&&y.SubscriptionProductConfig.internalBinaryWrite(e.config,n.tag(1,a.WireType.LengthDelimited).fork(),i).join();let t=i.writeUnknownFields;return t!==!1&&(t==!0?o.UnknownFieldHandler.onWrite:t)(this.typeName,e,n),n}}r.GetResponse=new N;class E extends g.MessageType{constructor(){super("whitehawk.proto.internal.client_portal.accounts.id.subscriptions.subscription_id.products.product_id.config.v3.UpdateRequest",[{no:1,name:"account_id",kind:"message",T:()=>d.Slug},{no:2,name:"subscription_id",kind:"message",T:()=>d.Slug},{no:3,name:"product_id",kind:"message",T:()=>b.Ulid},{no:4,name:"config",kind:"message",T:()=>y.SubscriptionProductConfig}])}create(e){const n={};return globalThis.Object.defineProperty(n,h.MESSAGE_TYPE,{enumerable:!1,value:this}),e!==void 0&&(0,l.reflectionMergePartial)(this,n,e),n}internalBinaryRead(e,n,i,t){let s=t!=null?t:this.create(),_=e.pos+n;for(;e.pos<_;){let[p,f]=e.tag();switch(p){case 1:s.accountId=d.Slug.internalBinaryRead(e,e.uint32(),i,s.accountId);break;case 2:s.subscriptionId=d.Slug.internalBinaryRead(e,e.uint32(),i,s.subscriptionId);break;case 3:s.productId=b.Ulid.internalBinaryRead(e,e.uint32(),i,s.productId);break;case 4:s.config=y.SubscriptionProductConfig.internalBinaryRead(e,e.uint32(),i,s.config);break;default:let u=i.readUnknownField;if(u==="throw")throw new globalThis.Error(`Unknown field ${p} (wire type ${f}) for ${this.typeName}`);let m=e.skip(f);u!==!1&&(u===!0?o.UnknownFieldHandler.onRead:u)(this.typeName,s,p,f,m)}}return s}internalBinaryWrite(e,n,i){e.accountId&&d.Slug.internalBinaryWrite(e.accountId,n.tag(1,a.WireType.LengthDelimited).fork(),i).join(),e.subscriptionId&&d.Slug.internalBinaryWrite(e.subscriptionId,n.tag(2,a.WireType.LengthDelimited).fork(),i).join(),e.productId&&b.Ulid.internalBinaryWrite(e.productId,n.tag(3,a.WireType.LengthDelimited).fork(),i).join(),e.config&&y.SubscriptionProductConfig.internalBinaryWrite(e.config,n.tag(4,a.WireType.LengthDelimited).fork(),i).join();let t=i.writeUnknownFields;return t!==!1&&(t==!0?o.UnknownFieldHandler.onWrite:t)(this.typeName,e,n),n}}r.UpdateRequest=new E;class G extends g.MessageType{constructor(){super("whitehawk.proto.internal.client_portal.accounts.id.subscriptions.subscription_id.products.product_id.config.v3.UpdateResponse",[])}create(e){const n={};return globalThis.Object.defineProperty(n,h.MESSAGE_TYPE,{enumerable:!1,value:this}),e!==void 0&&(0,l.reflectionMergePartial)(this,n,e),n}internalBinaryRead(e,n,i,t){return t!=null?t:this.create()}internalBinaryWrite(e,n,i){let t=i.writeUnknownFields;return t!==!1&&(t==!0?o.UnknownFieldHandler.onWrite:t)(this.typeName,e,n),n}}r.UpdateResponse=new G,r.Service=new c.ServiceType("whitehawk.proto.internal.client_portal.accounts.id.subscriptions.subscription_id.products.product_id.config.v3.Service",[{name:"Get",options:{},I:r.GetRequest,O:r.GetResponse},{name:"Update",options:{},I:r.UpdateRequest,O:r.UpdateResponse}])})(W);Object.defineProperty(T,"__esModule",{value:!0});var P=T.ServiceClient=void 0;const S=W,U=B;class L{constructor(c){this._transport=c,this.typeName=S.Service.typeName,this.methods=S.Service.methods,this.options=S.Service.options}get(c,a){const o=this.methods[0],l=this._transport.mergeOptions(a);return(0,U.stackIntercept)("unary",this._transport,o,l,c)}update(c,a){const o=this.methods[1],l=this._transport.mergeOptions(a);return(0,U.stackIntercept)("unary",this._transport,o,l,c)}}P=T.ServiceClient=L;const I=new P(F),A={get(r,c,a){const o=R();async function l(){return(await I.get({accountId:{value:r.value},subscriptionId:{value:c.value},productId:{value:a.value}},o.value)).response}return C([v,"accounts",r,"subscriptions",c,"products",a,"config"],l)},update(r,c,a){const o=R(),l=O();async function h(g){return await I.update({accountId:{value:r.value},subscriptionId:{value:c.value},productId:{value:a.value},...g},o.value)}return D(h,{onSuccess(){l.invalidateQueries([v,"accounts",r,"subscriptions",c,"products"],{exact:!0}),l.invalidateQueries([v,"accounts",r,"subscriptions",c,"products",a])}})}};export{A as u};
