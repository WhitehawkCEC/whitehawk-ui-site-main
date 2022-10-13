import{cj as $,ci as m,ca as C,cl as H,cm as D,cn as v,aV as U,aF as B,ai as W,co as R}from"./index.ad2ff904.js";var I={},E={};(function(a){Object.defineProperty(a,"__esModule",{value:!0}),a.Service=a.ListResponse=a.ListRequest=a.UpdateResponse=a.UpdateRequest=a.ReadResponse=a.ReadRequest=a.CreateResponse=a.CreateRequest=void 0;const c=$,r=m,o=m,p=m,f=m,y=m,g=C,l=H;class N extends y.MessageType{constructor(){super("whitehawk.proto.internal.client_portal.accounts.id.subscriptions.subscription_id.groups.v1.CreateRequest",[{no:1,name:"account_id",kind:"message",T:()=>l.Slug},{no:2,name:"subscription_id",kind:"message",T:()=>l.Slug},{no:3,name:"group",kind:"message",T:()=>g.SubscriptionGroup}])}create(e){const n={};return globalThis.Object.defineProperty(n,f.MESSAGE_TYPE,{enumerable:!1,value:this}),e!==void 0&&(0,p.reflectionMergePartial)(this,n,e),n}internalBinaryRead(e,n,i,t){let s=t!=null?t:this.create(),b=e.pos+n;for(;e.pos<b;){let[d,h]=e.tag();switch(d){case 1:s.accountId=l.Slug.internalBinaryRead(e,e.uint32(),i,s.accountId);break;case 2:s.subscriptionId=l.Slug.internalBinaryRead(e,e.uint32(),i,s.subscriptionId);break;case 3:s.group=g.SubscriptionGroup.internalBinaryRead(e,e.uint32(),i,s.group);break;default:let u=i.readUnknownField;if(u==="throw")throw new globalThis.Error(`Unknown field ${d} (wire type ${h}) for ${this.typeName}`);let w=e.skip(h);u!==!1&&(u===!0?o.UnknownFieldHandler.onRead:u)(this.typeName,s,d,h,w)}}return s}internalBinaryWrite(e,n,i){e.accountId&&l.Slug.internalBinaryWrite(e.accountId,n.tag(1,r.WireType.LengthDelimited).fork(),i).join(),e.subscriptionId&&l.Slug.internalBinaryWrite(e.subscriptionId,n.tag(2,r.WireType.LengthDelimited).fork(),i).join(),e.group&&g.SubscriptionGroup.internalBinaryWrite(e.group,n.tag(3,r.WireType.LengthDelimited).fork(),i).join();let t=i.writeUnknownFields;return t!==!1&&(t==!0?o.UnknownFieldHandler.onWrite:t)(this.typeName,e,n),n}}a.CreateRequest=new N;class M extends y.MessageType{constructor(){super("whitehawk.proto.internal.client_portal.accounts.id.subscriptions.subscription_id.groups.v1.CreateResponse",[])}create(e){const n={};return globalThis.Object.defineProperty(n,f.MESSAGE_TYPE,{enumerable:!1,value:this}),e!==void 0&&(0,p.reflectionMergePartial)(this,n,e),n}internalBinaryRead(e,n,i,t){return t!=null?t:this.create()}internalBinaryWrite(e,n,i){let t=i.writeUnknownFields;return t!==!1&&(t==!0?o.UnknownFieldHandler.onWrite:t)(this.typeName,e,n),n}}a.CreateResponse=new M;class q extends y.MessageType{constructor(){super("whitehawk.proto.internal.client_portal.accounts.id.subscriptions.subscription_id.groups.v1.ReadRequest",[{no:1,name:"account_id",kind:"message",T:()=>l.Slug},{no:2,name:"subscription_id",kind:"message",T:()=>l.Slug},{no:3,name:"group_id",kind:"message",T:()=>l.Slug}])}create(e){const n={};return globalThis.Object.defineProperty(n,f.MESSAGE_TYPE,{enumerable:!1,value:this}),e!==void 0&&(0,p.reflectionMergePartial)(this,n,e),n}internalBinaryRead(e,n,i,t){let s=t!=null?t:this.create(),b=e.pos+n;for(;e.pos<b;){let[d,h]=e.tag();switch(d){case 1:s.accountId=l.Slug.internalBinaryRead(e,e.uint32(),i,s.accountId);break;case 2:s.subscriptionId=l.Slug.internalBinaryRead(e,e.uint32(),i,s.subscriptionId);break;case 3:s.groupId=l.Slug.internalBinaryRead(e,e.uint32(),i,s.groupId);break;default:let u=i.readUnknownField;if(u==="throw")throw new globalThis.Error(`Unknown field ${d} (wire type ${h}) for ${this.typeName}`);let w=e.skip(h);u!==!1&&(u===!0?o.UnknownFieldHandler.onRead:u)(this.typeName,s,d,h,w)}}return s}internalBinaryWrite(e,n,i){e.accountId&&l.Slug.internalBinaryWrite(e.accountId,n.tag(1,r.WireType.LengthDelimited).fork(),i).join(),e.subscriptionId&&l.Slug.internalBinaryWrite(e.subscriptionId,n.tag(2,r.WireType.LengthDelimited).fork(),i).join(),e.groupId&&l.Slug.internalBinaryWrite(e.groupId,n.tag(3,r.WireType.LengthDelimited).fork(),i).join();let t=i.writeUnknownFields;return t!==!1&&(t==!0?o.UnknownFieldHandler.onWrite:t)(this.typeName,e,n),n}}a.ReadRequest=new q;class P extends y.MessageType{constructor(){super("whitehawk.proto.internal.client_portal.accounts.id.subscriptions.subscription_id.groups.v1.ReadResponse",[{no:1,name:"value",kind:"message",T:()=>g.SubscriptionGroup}])}create(e){const n={};return globalThis.Object.defineProperty(n,f.MESSAGE_TYPE,{enumerable:!1,value:this}),e!==void 0&&(0,p.reflectionMergePartial)(this,n,e),n}internalBinaryRead(e,n,i,t){let s=t!=null?t:this.create(),b=e.pos+n;for(;e.pos<b;){let[d,h]=e.tag();switch(d){case 1:s.value=g.SubscriptionGroup.internalBinaryRead(e,e.uint32(),i,s.value);break;default:let u=i.readUnknownField;if(u==="throw")throw new globalThis.Error(`Unknown field ${d} (wire type ${h}) for ${this.typeName}`);let w=e.skip(h);u!==!1&&(u===!0?o.UnknownFieldHandler.onRead:u)(this.typeName,s,d,h,w)}}return s}internalBinaryWrite(e,n,i){e.value&&g.SubscriptionGroup.internalBinaryWrite(e.value,n.tag(1,r.WireType.LengthDelimited).fork(),i).join();let t=i.writeUnknownFields;return t!==!1&&(t==!0?o.UnknownFieldHandler.onWrite:t)(this.typeName,e,n),n}}a.ReadResponse=new P;class j extends y.MessageType{constructor(){super("whitehawk.proto.internal.client_portal.accounts.id.subscriptions.subscription_id.groups.v1.UpdateRequest",[{no:1,name:"account_id",kind:"message",T:()=>l.Slug},{no:2,name:"subscription_id",kind:"message",T:()=>l.Slug},{no:3,name:"group",kind:"message",T:()=>g.SubscriptionGroup}])}create(e){const n={};return globalThis.Object.defineProperty(n,f.MESSAGE_TYPE,{enumerable:!1,value:this}),e!==void 0&&(0,p.reflectionMergePartial)(this,n,e),n}internalBinaryRead(e,n,i,t){let s=t!=null?t:this.create(),b=e.pos+n;for(;e.pos<b;){let[d,h]=e.tag();switch(d){case 1:s.accountId=l.Slug.internalBinaryRead(e,e.uint32(),i,s.accountId);break;case 2:s.subscriptionId=l.Slug.internalBinaryRead(e,e.uint32(),i,s.subscriptionId);break;case 3:s.group=g.SubscriptionGroup.internalBinaryRead(e,e.uint32(),i,s.group);break;default:let u=i.readUnknownField;if(u==="throw")throw new globalThis.Error(`Unknown field ${d} (wire type ${h}) for ${this.typeName}`);let w=e.skip(h);u!==!1&&(u===!0?o.UnknownFieldHandler.onRead:u)(this.typeName,s,d,h,w)}}return s}internalBinaryWrite(e,n,i){e.accountId&&l.Slug.internalBinaryWrite(e.accountId,n.tag(1,r.WireType.LengthDelimited).fork(),i).join(),e.subscriptionId&&l.Slug.internalBinaryWrite(e.subscriptionId,n.tag(2,r.WireType.LengthDelimited).fork(),i).join(),e.group&&g.SubscriptionGroup.internalBinaryWrite(e.group,n.tag(3,r.WireType.LengthDelimited).fork(),i).join();let t=i.writeUnknownFields;return t!==!1&&(t==!0?o.UnknownFieldHandler.onWrite:t)(this.typeName,e,n),n}}a.UpdateRequest=new j;class L extends y.MessageType{constructor(){super("whitehawk.proto.internal.client_portal.accounts.id.subscriptions.subscription_id.groups.v1.UpdateResponse",[])}create(e){const n={};return globalThis.Object.defineProperty(n,f.MESSAGE_TYPE,{enumerable:!1,value:this}),e!==void 0&&(0,p.reflectionMergePartial)(this,n,e),n}internalBinaryRead(e,n,i,t){return t!=null?t:this.create()}internalBinaryWrite(e,n,i){let t=i.writeUnknownFields;return t!==!1&&(t==!0?o.UnknownFieldHandler.onWrite:t)(this.typeName,e,n),n}}a.UpdateResponse=new L;class G extends y.MessageType{constructor(){super("whitehawk.proto.internal.client_portal.accounts.id.subscriptions.subscription_id.groups.v1.ListRequest",[{no:1,name:"account_id",kind:"message",T:()=>l.Slug},{no:2,name:"subscription_id",kind:"message",T:()=>l.Slug}])}create(e){const n={};return globalThis.Object.defineProperty(n,f.MESSAGE_TYPE,{enumerable:!1,value:this}),e!==void 0&&(0,p.reflectionMergePartial)(this,n,e),n}internalBinaryRead(e,n,i,t){let s=t!=null?t:this.create(),b=e.pos+n;for(;e.pos<b;){let[d,h]=e.tag();switch(d){case 1:s.accountId=l.Slug.internalBinaryRead(e,e.uint32(),i,s.accountId);break;case 2:s.subscriptionId=l.Slug.internalBinaryRead(e,e.uint32(),i,s.subscriptionId);break;default:let u=i.readUnknownField;if(u==="throw")throw new globalThis.Error(`Unknown field ${d} (wire type ${h}) for ${this.typeName}`);let w=e.skip(h);u!==!1&&(u===!0?o.UnknownFieldHandler.onRead:u)(this.typeName,s,d,h,w)}}return s}internalBinaryWrite(e,n,i){e.accountId&&l.Slug.internalBinaryWrite(e.accountId,n.tag(1,r.WireType.LengthDelimited).fork(),i).join(),e.subscriptionId&&l.Slug.internalBinaryWrite(e.subscriptionId,n.tag(2,r.WireType.LengthDelimited).fork(),i).join();let t=i.writeUnknownFields;return t!==!1&&(t==!0?o.UnknownFieldHandler.onWrite:t)(this.typeName,e,n),n}}a.ListRequest=new G;class O extends y.MessageType{constructor(){super("whitehawk.proto.internal.client_portal.accounts.id.subscriptions.subscription_id.groups.v1.ListResponse",[{no:1,name:"values",kind:"message",repeat:1,T:()=>g.SubscriptionGroup}])}create(e){const n={values:[]};return globalThis.Object.defineProperty(n,f.MESSAGE_TYPE,{enumerable:!1,value:this}),e!==void 0&&(0,p.reflectionMergePartial)(this,n,e),n}internalBinaryRead(e,n,i,t){let s=t!=null?t:this.create(),b=e.pos+n;for(;e.pos<b;){let[d,h]=e.tag();switch(d){case 1:s.values.push(g.SubscriptionGroup.internalBinaryRead(e,e.uint32(),i));break;default:let u=i.readUnknownField;if(u==="throw")throw new globalThis.Error(`Unknown field ${d} (wire type ${h}) for ${this.typeName}`);let w=e.skip(h);u!==!1&&(u===!0?o.UnknownFieldHandler.onRead:u)(this.typeName,s,d,h,w)}}return s}internalBinaryWrite(e,n,i){for(let s=0;s<e.values.length;s++)g.SubscriptionGroup.internalBinaryWrite(e.values[s],n.tag(1,r.WireType.LengthDelimited).fork(),i).join();let t=i.writeUnknownFields;return t!==!1&&(t==!0?o.UnknownFieldHandler.onWrite:t)(this.typeName,e,n),n}}a.ListResponse=new O,a.Service=new c.ServiceType("whitehawk.proto.internal.client_portal.accounts.id.subscriptions.subscription_id.groups.v1.Service",[{name:"Create",options:{},I:a.CreateRequest,O:a.CreateResponse},{name:"Read",options:{},I:a.ReadRequest,O:a.ReadResponse},{name:"Update",options:{},I:a.UpdateRequest,O:a.UpdateResponse},{name:"List",options:{},I:a.ListRequest,O:a.ListResponse}])})(E);Object.defineProperty(I,"__esModule",{value:!0});var F=I.ServiceClient=void 0;const _=E,T=$;class A{constructor(c){this._transport=c,this.typeName=_.Service.typeName,this.methods=_.Service.methods,this.options=_.Service.options}create(c,r){const o=this.methods[0],p=this._transport.mergeOptions(r);return(0,T.stackIntercept)("unary",this._transport,o,p,c)}read(c,r){const o=this.methods[1],p=this._transport.mergeOptions(r);return(0,T.stackIntercept)("unary",this._transport,o,p,c)}update(c,r){const o=this.methods[2],p=this._transport.mergeOptions(r);return(0,T.stackIntercept)("unary",this._transport,o,p,c)}list(c,r){const o=this.methods[3],p=this._transport.mergeOptions(r);return(0,T.stackIntercept)("unary",this._transport,o,p,c)}}F=I.ServiceClient=A;const S=new F(D),Q={create(a,c){const r=v(),o=U();async function p(f){return await S.create({accountId:{value:a.value},subscriptionId:{value:c.value},...f},r.value)}return B(p,{onSuccess(){o.invalidateQueries([R,"accounts",a,"subscriptions",c,"groups"],{exact:!0})}})},read(a,c,r){const o=v();async function p(){const f=await S.read({accountId:{value:a.value},subscriptionId:{value:c.value},groupId:{value:r.value}},o.value),{value:y}=f.response;return y}return W([R,"accounts",a,"subscriptions",c,"groups",r],p)},update(a,c,r){const o=v(),p=U();async function f(y){return await S.update({accountId:{value:a.value},subscriptionId:{value:c.value},group:{id:{value:r.value},name:y}},o.value)}return B(f,{onSuccess(){const y=[[R,"accounts",a,"subscriptions",c,"groups"],[R,"accounts",a,"subscriptions",c,"groups",r]];for(const g of y)p.invalidateQueries(g,{exact:!0})}})},list(a,c){const r=v();async function o(){const p=await S.list({accountId:{value:a.value},subscriptionId:{value:c.value}},r.value),{values:f}=p.response;return f}return W([R,"accounts",a,"subscriptions",c,"groups"],o)}};export{Q as u};