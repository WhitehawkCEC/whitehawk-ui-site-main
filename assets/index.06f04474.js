import{ci as U,ch as O,cl as A,cm as G,cn as N,aT as j,aD as L,ag as q,co as E,c as Y}from"./index.f355bfbd.js";var D={},H={},$={};(function(t){Object.defineProperty(t,"__esModule",{value:!0}),t.SupplierIdDomain=t.SupplierId=t.Supplier=void 0;const p=U,l=U,u=U,d=U,k=U;class g extends k.MessageType{constructor(){super("whitehawk.proto.subscription.supplier.v1.Supplier",[{no:1,name:"id",kind:"message",T:()=>t.SupplierId},{no:2,name:"name",kind:"scalar",T:9}])}create(r){const o={name:""};return globalThis.Object.defineProperty(o,d.MESSAGE_TYPE,{enumerable:!1,value:this}),r!==void 0&&(0,u.reflectionMergePartial)(this,o,r),o}internalBinaryRead(r,o,b,h){let S=h!=null?h:this.create(),B=r.pos+o;for(;r.pos<B;){let[R,v]=r.tag();switch(R){case 1:S.id=t.SupplierId.internalBinaryRead(r,r.uint32(),b,S.id);break;case 2:S.name=r.string();break;default:let w=b.readUnknownField;if(w==="throw")throw new globalThis.Error(`Unknown field ${R} (wire type ${v}) for ${this.typeName}`);let e=r.skip(v);w!==!1&&(w===!0?l.UnknownFieldHandler.onRead:w)(this.typeName,S,R,v,e)}}return S}internalBinaryWrite(r,o,b){r.id&&t.SupplierId.internalBinaryWrite(r.id,o.tag(1,p.WireType.LengthDelimited).fork(),b).join(),r.name!==""&&o.tag(2,p.WireType.LengthDelimited).string(r.name);let h=b.writeUnknownFields;return h!==!1&&(h==!0?l.UnknownFieldHandler.onWrite:h)(this.typeName,r,o),o}}t.Supplier=new g;class W extends k.MessageType{constructor(){super("whitehawk.proto.subscription.supplier.v1.SupplierId",[{no:1,name:"type_domain",kind:"message",oneof:"type",T:()=>t.SupplierIdDomain}])}create(r){const o={type:{oneofKind:void 0}};return globalThis.Object.defineProperty(o,d.MESSAGE_TYPE,{enumerable:!1,value:this}),r!==void 0&&(0,u.reflectionMergePartial)(this,o,r),o}internalBinaryRead(r,o,b,h){let S=h!=null?h:this.create(),B=r.pos+o;for(;r.pos<B;){let[R,v]=r.tag();switch(R){case 1:S.type={oneofKind:"typeDomain",typeDomain:t.SupplierIdDomain.internalBinaryRead(r,r.uint32(),b,S.type.typeDomain)};break;default:let w=b.readUnknownField;if(w==="throw")throw new globalThis.Error(`Unknown field ${R} (wire type ${v}) for ${this.typeName}`);let e=r.skip(v);w!==!1&&(w===!0?l.UnknownFieldHandler.onRead:w)(this.typeName,S,R,v,e)}}return S}internalBinaryWrite(r,o,b){r.type.oneofKind==="typeDomain"&&t.SupplierIdDomain.internalBinaryWrite(r.type.typeDomain,o.tag(1,p.WireType.LengthDelimited).fork(),b).join();let h=b.writeUnknownFields;return h!==!1&&(h==!0?l.UnknownFieldHandler.onWrite:h)(this.typeName,r,o),o}}t.SupplierId=new W;class T extends k.MessageType{constructor(){super("whitehawk.proto.subscription.supplier.v1.SupplierIdDomain",[{no:1,name:"domain",kind:"scalar",T:9}])}create(r){const o={domain:""};return globalThis.Object.defineProperty(o,d.MESSAGE_TYPE,{enumerable:!1,value:this}),r!==void 0&&(0,u.reflectionMergePartial)(this,o,r),o}internalBinaryRead(r,o,b,h){let S=h!=null?h:this.create(),B=r.pos+o;for(;r.pos<B;){let[R,v]=r.tag();switch(R){case 1:S.domain=r.string();break;default:let w=b.readUnknownField;if(w==="throw")throw new globalThis.Error(`Unknown field ${R} (wire type ${v}) for ${this.typeName}`);let e=r.skip(v);w!==!1&&(w===!0?l.UnknownFieldHandler.onRead:w)(this.typeName,S,R,v,e)}}return S}internalBinaryWrite(r,o,b){r.domain!==""&&o.tag(1,p.WireType.LengthDelimited).string(r.domain);let h=b.writeUnknownFields;return h!==!1&&(h==!0?l.UnknownFieldHandler.onWrite:h)(this.typeName,r,o),o}}t.SupplierIdDomain=new T})($);(function(t){Object.defineProperty(t,"__esModule",{value:!0}),t.Service=t.ListResponse=t.ListRequest=t.UpdateResponse=t.UpdateRequest=t.ReadResponse=t.ReadRequest=t.CreateResponse=t.CreateRequest=void 0;const p=O,l=U,u=U,d=U,k=U,g=U,W=$,T=$,f=A;class r extends g.MessageType{constructor(){super("whitehawk.proto.internal.client_portal.accounts.id.subscriptions.subscription_id.suppliers.v1.CreateRequest",[{no:1,name:"account_id",kind:"message",T:()=>f.Slug},{no:2,name:"subscription_id",kind:"message",T:()=>f.Slug},{no:3,name:"supplier",kind:"message",T:()=>T.Supplier}])}create(e){const n={};return globalThis.Object.defineProperty(n,k.MESSAGE_TYPE,{enumerable:!1,value:this}),e!==void 0&&(0,d.reflectionMergePartial)(this,n,e),n}internalBinaryRead(e,n,s,i){let a=i!=null?i:this.create(),_=e.pos+n;for(;e.pos<_;){let[y,m]=e.tag();switch(y){case 1:a.accountId=f.Slug.internalBinaryRead(e,e.uint32(),s,a.accountId);break;case 2:a.subscriptionId=f.Slug.internalBinaryRead(e,e.uint32(),s,a.subscriptionId);break;case 3:a.supplier=T.Supplier.internalBinaryRead(e,e.uint32(),s,a.supplier);break;default:let c=s.readUnknownField;if(c==="throw")throw new globalThis.Error(`Unknown field ${y} (wire type ${m}) for ${this.typeName}`);let I=e.skip(m);c!==!1&&(c===!0?u.UnknownFieldHandler.onRead:c)(this.typeName,a,y,m,I)}}return a}internalBinaryWrite(e,n,s){e.accountId&&f.Slug.internalBinaryWrite(e.accountId,n.tag(1,l.WireType.LengthDelimited).fork(),s).join(),e.subscriptionId&&f.Slug.internalBinaryWrite(e.subscriptionId,n.tag(2,l.WireType.LengthDelimited).fork(),s).join(),e.supplier&&T.Supplier.internalBinaryWrite(e.supplier,n.tag(3,l.WireType.LengthDelimited).fork(),s).join();let i=s.writeUnknownFields;return i!==!1&&(i==!0?u.UnknownFieldHandler.onWrite:i)(this.typeName,e,n),n}}t.CreateRequest=new r;class o extends g.MessageType{constructor(){super("whitehawk.proto.internal.client_portal.accounts.id.subscriptions.subscription_id.suppliers.v1.CreateResponse",[])}create(e){const n={};return globalThis.Object.defineProperty(n,k.MESSAGE_TYPE,{enumerable:!1,value:this}),e!==void 0&&(0,d.reflectionMergePartial)(this,n,e),n}internalBinaryRead(e,n,s,i){return i!=null?i:this.create()}internalBinaryWrite(e,n,s){let i=s.writeUnknownFields;return i!==!1&&(i==!0?u.UnknownFieldHandler.onWrite:i)(this.typeName,e,n),n}}t.CreateResponse=new o;class b extends g.MessageType{constructor(){super("whitehawk.proto.internal.client_portal.accounts.id.subscriptions.subscription_id.suppliers.v1.ReadRequest",[{no:1,name:"account_id",kind:"message",T:()=>f.Slug},{no:2,name:"subscription_id",kind:"message",T:()=>f.Slug},{no:3,name:"supplier_id",kind:"message",T:()=>W.SupplierId}])}create(e){const n={};return globalThis.Object.defineProperty(n,k.MESSAGE_TYPE,{enumerable:!1,value:this}),e!==void 0&&(0,d.reflectionMergePartial)(this,n,e),n}internalBinaryRead(e,n,s,i){let a=i!=null?i:this.create(),_=e.pos+n;for(;e.pos<_;){let[y,m]=e.tag();switch(y){case 1:a.accountId=f.Slug.internalBinaryRead(e,e.uint32(),s,a.accountId);break;case 2:a.subscriptionId=f.Slug.internalBinaryRead(e,e.uint32(),s,a.subscriptionId);break;case 3:a.supplierId=W.SupplierId.internalBinaryRead(e,e.uint32(),s,a.supplierId);break;default:let c=s.readUnknownField;if(c==="throw")throw new globalThis.Error(`Unknown field ${y} (wire type ${m}) for ${this.typeName}`);let I=e.skip(m);c!==!1&&(c===!0?u.UnknownFieldHandler.onRead:c)(this.typeName,a,y,m,I)}}return a}internalBinaryWrite(e,n,s){e.accountId&&f.Slug.internalBinaryWrite(e.accountId,n.tag(1,l.WireType.LengthDelimited).fork(),s).join(),e.subscriptionId&&f.Slug.internalBinaryWrite(e.subscriptionId,n.tag(2,l.WireType.LengthDelimited).fork(),s).join(),e.supplierId&&W.SupplierId.internalBinaryWrite(e.supplierId,n.tag(3,l.WireType.LengthDelimited).fork(),s).join();let i=s.writeUnknownFields;return i!==!1&&(i==!0?u.UnknownFieldHandler.onWrite:i)(this.typeName,e,n),n}}t.ReadRequest=new b;class h extends g.MessageType{constructor(){super("whitehawk.proto.internal.client_portal.accounts.id.subscriptions.subscription_id.suppliers.v1.ReadResponse",[{no:1,name:"value",kind:"message",T:()=>T.Supplier}])}create(e){const n={};return globalThis.Object.defineProperty(n,k.MESSAGE_TYPE,{enumerable:!1,value:this}),e!==void 0&&(0,d.reflectionMergePartial)(this,n,e),n}internalBinaryRead(e,n,s,i){let a=i!=null?i:this.create(),_=e.pos+n;for(;e.pos<_;){let[y,m]=e.tag();switch(y){case 1:a.value=T.Supplier.internalBinaryRead(e,e.uint32(),s,a.value);break;default:let c=s.readUnknownField;if(c==="throw")throw new globalThis.Error(`Unknown field ${y} (wire type ${m}) for ${this.typeName}`);let I=e.skip(m);c!==!1&&(c===!0?u.UnknownFieldHandler.onRead:c)(this.typeName,a,y,m,I)}}return a}internalBinaryWrite(e,n,s){e.value&&T.Supplier.internalBinaryWrite(e.value,n.tag(1,l.WireType.LengthDelimited).fork(),s).join();let i=s.writeUnknownFields;return i!==!1&&(i==!0?u.UnknownFieldHandler.onWrite:i)(this.typeName,e,n),n}}t.ReadResponse=new h;class S extends g.MessageType{constructor(){super("whitehawk.proto.internal.client_portal.accounts.id.subscriptions.subscription_id.suppliers.v1.UpdateRequest",[{no:1,name:"account_id",kind:"message",T:()=>f.Slug},{no:2,name:"subscription_id",kind:"message",T:()=>f.Slug},{no:3,name:"supplier",kind:"message",T:()=>T.Supplier}])}create(e){const n={};return globalThis.Object.defineProperty(n,k.MESSAGE_TYPE,{enumerable:!1,value:this}),e!==void 0&&(0,d.reflectionMergePartial)(this,n,e),n}internalBinaryRead(e,n,s,i){let a=i!=null?i:this.create(),_=e.pos+n;for(;e.pos<_;){let[y,m]=e.tag();switch(y){case 1:a.accountId=f.Slug.internalBinaryRead(e,e.uint32(),s,a.accountId);break;case 2:a.subscriptionId=f.Slug.internalBinaryRead(e,e.uint32(),s,a.subscriptionId);break;case 3:a.supplier=T.Supplier.internalBinaryRead(e,e.uint32(),s,a.supplier);break;default:let c=s.readUnknownField;if(c==="throw")throw new globalThis.Error(`Unknown field ${y} (wire type ${m}) for ${this.typeName}`);let I=e.skip(m);c!==!1&&(c===!0?u.UnknownFieldHandler.onRead:c)(this.typeName,a,y,m,I)}}return a}internalBinaryWrite(e,n,s){e.accountId&&f.Slug.internalBinaryWrite(e.accountId,n.tag(1,l.WireType.LengthDelimited).fork(),s).join(),e.subscriptionId&&f.Slug.internalBinaryWrite(e.subscriptionId,n.tag(2,l.WireType.LengthDelimited).fork(),s).join(),e.supplier&&T.Supplier.internalBinaryWrite(e.supplier,n.tag(3,l.WireType.LengthDelimited).fork(),s).join();let i=s.writeUnknownFields;return i!==!1&&(i==!0?u.UnknownFieldHandler.onWrite:i)(this.typeName,e,n),n}}t.UpdateRequest=new S;class B extends g.MessageType{constructor(){super("whitehawk.proto.internal.client_portal.accounts.id.subscriptions.subscription_id.suppliers.v1.UpdateResponse",[])}create(e){const n={};return globalThis.Object.defineProperty(n,k.MESSAGE_TYPE,{enumerable:!1,value:this}),e!==void 0&&(0,d.reflectionMergePartial)(this,n,e),n}internalBinaryRead(e,n,s,i){return i!=null?i:this.create()}internalBinaryWrite(e,n,s){let i=s.writeUnknownFields;return i!==!1&&(i==!0?u.UnknownFieldHandler.onWrite:i)(this.typeName,e,n),n}}t.UpdateResponse=new B;class R extends g.MessageType{constructor(){super("whitehawk.proto.internal.client_portal.accounts.id.subscriptions.subscription_id.suppliers.v1.ListRequest",[{no:1,name:"account_id",kind:"message",T:()=>f.Slug},{no:2,name:"subscription_id",kind:"message",T:()=>f.Slug}])}create(e){const n={};return globalThis.Object.defineProperty(n,k.MESSAGE_TYPE,{enumerable:!1,value:this}),e!==void 0&&(0,d.reflectionMergePartial)(this,n,e),n}internalBinaryRead(e,n,s,i){let a=i!=null?i:this.create(),_=e.pos+n;for(;e.pos<_;){let[y,m]=e.tag();switch(y){case 1:a.accountId=f.Slug.internalBinaryRead(e,e.uint32(),s,a.accountId);break;case 2:a.subscriptionId=f.Slug.internalBinaryRead(e,e.uint32(),s,a.subscriptionId);break;default:let c=s.readUnknownField;if(c==="throw")throw new globalThis.Error(`Unknown field ${y} (wire type ${m}) for ${this.typeName}`);let I=e.skip(m);c!==!1&&(c===!0?u.UnknownFieldHandler.onRead:c)(this.typeName,a,y,m,I)}}return a}internalBinaryWrite(e,n,s){e.accountId&&f.Slug.internalBinaryWrite(e.accountId,n.tag(1,l.WireType.LengthDelimited).fork(),s).join(),e.subscriptionId&&f.Slug.internalBinaryWrite(e.subscriptionId,n.tag(2,l.WireType.LengthDelimited).fork(),s).join();let i=s.writeUnknownFields;return i!==!1&&(i==!0?u.UnknownFieldHandler.onWrite:i)(this.typeName,e,n),n}}t.ListRequest=new R;class v extends g.MessageType{constructor(){super("whitehawk.proto.internal.client_portal.accounts.id.subscriptions.subscription_id.suppliers.v1.ListResponse",[{no:1,name:"values",kind:"message",repeat:1,T:()=>T.Supplier}])}create(e){const n={values:[]};return globalThis.Object.defineProperty(n,k.MESSAGE_TYPE,{enumerable:!1,value:this}),e!==void 0&&(0,d.reflectionMergePartial)(this,n,e),n}internalBinaryRead(e,n,s,i){let a=i!=null?i:this.create(),_=e.pos+n;for(;e.pos<_;){let[y,m]=e.tag();switch(y){case 1:a.values.push(T.Supplier.internalBinaryRead(e,e.uint32(),s));break;default:let c=s.readUnknownField;if(c==="throw")throw new globalThis.Error(`Unknown field ${y} (wire type ${m}) for ${this.typeName}`);let I=e.skip(m);c!==!1&&(c===!0?u.UnknownFieldHandler.onRead:c)(this.typeName,a,y,m,I)}}return a}internalBinaryWrite(e,n,s){for(let a=0;a<e.values.length;a++)T.Supplier.internalBinaryWrite(e.values[a],n.tag(1,l.WireType.LengthDelimited).fork(),s).join();let i=s.writeUnknownFields;return i!==!1&&(i==!0?u.UnknownFieldHandler.onWrite:i)(this.typeName,e,n),n}}t.ListResponse=new v,t.Service=new p.ServiceType("whitehawk.proto.internal.client_portal.accounts.id.subscriptions.subscription_id.suppliers.v1.Service",[{name:"Create",options:{},I:t.CreateRequest,O:t.CreateResponse},{name:"Read",options:{},I:t.ReadRequest,O:t.ReadResponse},{name:"Update",options:{},I:t.UpdateRequest,O:t.UpdateResponse},{name:"List",options:{},I:t.ListRequest,O:t.ListResponse}])})(H);Object.defineProperty(D,"__esModule",{value:!0});var C=D.ServiceClient=void 0;const P=H,F=O;class J{constructor(p){this._transport=p,this.typeName=P.Service.typeName,this.methods=P.Service.methods,this.options=P.Service.options}create(p,l){const u=this.methods[0],d=this._transport.mergeOptions(l);return(0,F.stackIntercept)("unary",this._transport,u,d,p)}read(p,l){const u=this.methods[1],d=this._transport.mergeOptions(l);return(0,F.stackIntercept)("unary",this._transport,u,d,p)}update(p,l){const u=this.methods[2],d=this._transport.mergeOptions(l);return(0,F.stackIntercept)("unary",this._transport,u,d,p)}list(p,l){const u=this.methods[3],d=this._transport.mergeOptions(l);return(0,F.stackIntercept)("unary",this._transport,u,d,p)}}C=D.ServiceClient=J;const M=new C(G),K={create(t,p){const l=N(),u=j();async function d(k){return await M.create({accountId:{value:t.value},subscriptionId:{value:p.value},...k},l.value)}return L(d,{onSuccess(){u.invalidateQueries([E,"accounts",t,"subscriptions",p,"suppliers"],{exact:!0})}})},read(t,p,l){const u=N();async function d(){const k=await M.read({accountId:{value:t.value},subscriptionId:{value:p.value},supplierId:l.value},u.value),{value:g}=k.response;return g}return q([E,"accounts",t,"subscriptions",p,"suppliers",Y(()=>$.SupplierId.toJsonString(l.value))],d)},update(t,p,l){const u=N(),d=j();async function k(g){return await M.update({accountId:{value:t.value},subscriptionId:{value:p.value},supplier:{id:l.value,name:g}},u.value)}return L(k,{onSuccess(){const g=[[E,"accounts",t,"subscriptions",p,"suppliers"],[E,"accounts",t,"subscriptions",p,"suppliers",$.SupplierId.toJsonString(l.value)]];for(const W of g)d.invalidateQueries(W,{exact:!0})}})},list(t,p){const l=N();async function u(){const d=await M.list({accountId:{value:t.value},subscriptionId:{value:p.value}},l.value),{values:k}=d.response;return k}return q([E,"accounts",t,"subscriptions",p,"suppliers"],u)}};function z(t){return window.btoa($.SupplierId.toJsonString(t))}function V(t){return $.SupplierId.fromJsonString(window.atob(t))}export{V as d,z as e,K as u};
