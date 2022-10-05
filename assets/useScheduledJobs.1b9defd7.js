import{cd as v,cg as L,cc as Y,cf as M,ce as J,ch as q,ci as E,aT as A,aE as G,ai as F,cj as C}from"./index.3c868a01.js";var j={};(function(l){Object.defineProperty(l,"__esModule",{value:!0}),l.RiskRatingServiceToCyberOne=l.SupplyWisdomToCyberOne=l.JobConfig=l.JobSchedule=l.Job=l.RatingProviderType=l.FrequencyType=void 0;const y=v,u=v,f=v,p=v,k=v,g=L,R=Y,_=M;var S;(function(b){b[b.UNSPECIFIED=0]="UNSPECIFIED",b[b.DAILY=1]="DAILY",b[b.MONTHLY=2]="MONTHLY",b[b.QUARTERLY=3]="QUARTERLY",b[b.YEARLY=4]="YEARLY"})(S=l.FrequencyType||(l.FrequencyType={}));var w;(function(b){b[b.UNSPECIFIED=0]="UNSPECIFIED",b[b.BITSIGHT=1]="BITSIGHT",b[b.BLACK_KITE=2]="BLACK_KITE"})(w=l.RatingProviderType||(l.RatingProviderType={}));class T extends k.MessageType{constructor(){super("whitehawk.proto.job.v1.Job",[{no:1,name:"job_id",kind:"message",T:()=>_.Ulid},{no:2,name:"job_config",kind:"message",T:()=>l.JobConfig},{no:3,name:"schedule",kind:"message",T:()=>l.JobSchedule}])}create(i){const a={};return globalThis.Object.defineProperty(a,p.MESSAGE_TYPE,{enumerable:!1,value:this}),i!==void 0&&(0,f.reflectionMergePartial)(this,a,i),a}internalBinaryRead(i,a,e,n){let t=n!=null?n:this.create(),o=i.pos+a;for(;i.pos<o;){let[r,c]=i.tag();switch(r){case 1:t.jobId=_.Ulid.internalBinaryRead(i,i.uint32(),e,t.jobId);break;case 2:t.jobConfig=l.JobConfig.internalBinaryRead(i,i.uint32(),e,t.jobConfig);break;case 3:t.schedule=l.JobSchedule.internalBinaryRead(i,i.uint32(),e,t.schedule);break;default:let s=e.readUnknownField;if(s==="throw")throw new globalThis.Error(`Unknown field ${r} (wire type ${c}) for ${this.typeName}`);let d=i.skip(c);s!==!1&&(s===!0?u.UnknownFieldHandler.onRead:s)(this.typeName,t,r,c,d)}}return t}internalBinaryWrite(i,a,e){i.jobId&&_.Ulid.internalBinaryWrite(i.jobId,a.tag(1,y.WireType.LengthDelimited).fork(),e).join(),i.jobConfig&&l.JobConfig.internalBinaryWrite(i.jobConfig,a.tag(2,y.WireType.LengthDelimited).fork(),e).join(),i.schedule&&l.JobSchedule.internalBinaryWrite(i.schedule,a.tag(3,y.WireType.LengthDelimited).fork(),e).join();let n=e.writeUnknownFields;return n!==!1&&(n==!0?u.UnknownFieldHandler.onWrite:n)(this.typeName,i,a),a}}l.Job=new T;class W extends k.MessageType{constructor(){super("whitehawk.proto.job.v1.JobSchedule",[{no:1,name:"range",kind:"message",T:()=>R.DateRange},{no:2,name:"frequency",kind:"enum",T:()=>["whitehawk.proto.job.v1.FrequencyType",S,"FREQUENCY_TYPE_"]}])}create(i){const a={frequency:0};return globalThis.Object.defineProperty(a,p.MESSAGE_TYPE,{enumerable:!1,value:this}),i!==void 0&&(0,f.reflectionMergePartial)(this,a,i),a}internalBinaryRead(i,a,e,n){let t=n!=null?n:this.create(),o=i.pos+a;for(;i.pos<o;){let[r,c]=i.tag();switch(r){case 1:t.range=R.DateRange.internalBinaryRead(i,i.uint32(),e,t.range);break;case 2:t.frequency=i.int32();break;default:let s=e.readUnknownField;if(s==="throw")throw new globalThis.Error(`Unknown field ${r} (wire type ${c}) for ${this.typeName}`);let d=i.skip(c);s!==!1&&(s===!0?u.UnknownFieldHandler.onRead:s)(this.typeName,t,r,c,d)}}return t}internalBinaryWrite(i,a,e){i.range&&R.DateRange.internalBinaryWrite(i.range,a.tag(1,y.WireType.LengthDelimited).fork(),e).join(),i.frequency!==0&&a.tag(2,y.WireType.Varint).int32(i.frequency);let n=e.writeUnknownFields;return n!==!1&&(n==!0?u.UnknownFieldHandler.onWrite:n)(this.typeName,i,a),a}}l.JobSchedule=new W;class U extends k.MessageType{constructor(){super("whitehawk.proto.job.v1.JobConfig",[{no:1,name:"supply_wisdom_to_cyber_one",kind:"message",oneof:"value",T:()=>l.SupplyWisdomToCyberOne},{no:2,name:"risk_rating_service_to_cyber_one",kind:"message",oneof:"value",T:()=>l.RiskRatingServiceToCyberOne}])}create(i){const a={value:{oneofKind:void 0}};return globalThis.Object.defineProperty(a,p.MESSAGE_TYPE,{enumerable:!1,value:this}),i!==void 0&&(0,f.reflectionMergePartial)(this,a,i),a}internalBinaryRead(i,a,e,n){let t=n!=null?n:this.create(),o=i.pos+a;for(;i.pos<o;){let[r,c]=i.tag();switch(r){case 1:t.value={oneofKind:"supplyWisdomToCyberOne",supplyWisdomToCyberOne:l.SupplyWisdomToCyberOne.internalBinaryRead(i,i.uint32(),e,t.value.supplyWisdomToCyberOne)};break;case 2:t.value={oneofKind:"riskRatingServiceToCyberOne",riskRatingServiceToCyberOne:l.RiskRatingServiceToCyberOne.internalBinaryRead(i,i.uint32(),e,t.value.riskRatingServiceToCyberOne)};break;default:let s=e.readUnknownField;if(s==="throw")throw new globalThis.Error(`Unknown field ${r} (wire type ${c}) for ${this.typeName}`);let d=i.skip(c);s!==!1&&(s===!0?u.UnknownFieldHandler.onRead:s)(this.typeName,t,r,c,d)}}return t}internalBinaryWrite(i,a,e){i.value.oneofKind==="supplyWisdomToCyberOne"&&l.SupplyWisdomToCyberOne.internalBinaryWrite(i.value.supplyWisdomToCyberOne,a.tag(1,y.WireType.LengthDelimited).fork(),e).join(),i.value.oneofKind==="riskRatingServiceToCyberOne"&&l.RiskRatingServiceToCyberOne.internalBinaryWrite(i.value.riskRatingServiceToCyberOne,a.tag(2,y.WireType.LengthDelimited).fork(),e).join();let n=e.writeUnknownFields;return n!==!1&&(n==!0?u.UnknownFieldHandler.onWrite:n)(this.typeName,i,a),a}}l.JobConfig=new U;class I extends k.MessageType{constructor(){super("whitehawk.proto.job.v1.SupplyWisdomToCyberOne",[{no:1,name:"source_id",kind:"message",T:()=>g.Slug},{no:2,name:"target_id",kind:"message",T:()=>g.Slug}])}create(i){const a={};return globalThis.Object.defineProperty(a,p.MESSAGE_TYPE,{enumerable:!1,value:this}),i!==void 0&&(0,f.reflectionMergePartial)(this,a,i),a}internalBinaryRead(i,a,e,n){let t=n!=null?n:this.create(),o=i.pos+a;for(;i.pos<o;){let[r,c]=i.tag();switch(r){case 1:t.sourceId=g.Slug.internalBinaryRead(i,i.uint32(),e,t.sourceId);break;case 2:t.targetId=g.Slug.internalBinaryRead(i,i.uint32(),e,t.targetId);break;default:let s=e.readUnknownField;if(s==="throw")throw new globalThis.Error(`Unknown field ${r} (wire type ${c}) for ${this.typeName}`);let d=i.skip(c);s!==!1&&(s===!0?u.UnknownFieldHandler.onRead:s)(this.typeName,t,r,c,d)}}return t}internalBinaryWrite(i,a,e){i.sourceId&&g.Slug.internalBinaryWrite(i.sourceId,a.tag(1,y.WireType.LengthDelimited).fork(),e).join(),i.targetId&&g.Slug.internalBinaryWrite(i.targetId,a.tag(2,y.WireType.LengthDelimited).fork(),e).join();let n=e.writeUnknownFields;return n!==!1&&(n==!0?u.UnknownFieldHandler.onWrite:n)(this.typeName,i,a),a}}l.SupplyWisdomToCyberOne=new I;class B extends k.MessageType{constructor(){super("whitehawk.proto.job.v1.RiskRatingServiceToCyberOne",[{no:1,name:"source_id",kind:"message",T:()=>g.Slug},{no:2,name:"target_id",kind:"message",T:()=>g.Slug},{no:3,name:"rating_provider_type",kind:"enum",T:()=>["whitehawk.proto.job.v1.RatingProviderType",w,"RATING_PROVIDER_TYPE_"]}])}create(i){const a={ratingProviderType:0};return globalThis.Object.defineProperty(a,p.MESSAGE_TYPE,{enumerable:!1,value:this}),i!==void 0&&(0,f.reflectionMergePartial)(this,a,i),a}internalBinaryRead(i,a,e,n){let t=n!=null?n:this.create(),o=i.pos+a;for(;i.pos<o;){let[r,c]=i.tag();switch(r){case 1:t.sourceId=g.Slug.internalBinaryRead(i,i.uint32(),e,t.sourceId);break;case 2:t.targetId=g.Slug.internalBinaryRead(i,i.uint32(),e,t.targetId);break;case 3:t.ratingProviderType=i.int32();break;default:let s=e.readUnknownField;if(s==="throw")throw new globalThis.Error(`Unknown field ${r} (wire type ${c}) for ${this.typeName}`);let d=i.skip(c);s!==!1&&(s===!0?u.UnknownFieldHandler.onRead:s)(this.typeName,t,r,c,d)}}return t}internalBinaryWrite(i,a,e){i.sourceId&&g.Slug.internalBinaryWrite(i.sourceId,a.tag(1,y.WireType.LengthDelimited).fork(),e).join(),i.targetId&&g.Slug.internalBinaryWrite(i.targetId,a.tag(2,y.WireType.LengthDelimited).fork(),e).join(),i.ratingProviderType!==0&&a.tag(3,y.WireType.Varint).int32(i.ratingProviderType);let n=e.writeUnknownFields;return n!==!1&&(n==!0?u.UnknownFieldHandler.onWrite:n)(this.typeName,i,a),a}}l.RiskRatingServiceToCyberOne=new B})(j);var D={};(function(l){Object.defineProperty(l,"__esModule",{value:!0}),l.Service=l.ListResponse=l.ListRequest=l.ReadResponse=l.ReadRequest=l.CreateResponse=l.CreateRequest=void 0;const y=J,u=v,f=v,p=v,k=v,g=v,R=j,_=j,S=j,w=M,T=L;class W extends g.MessageType{constructor(){super("whitehawk.proto.internal.client_portal.accounts.id.jobs.v1.CreateRequest",[{no:1,name:"account_id",kind:"message",T:()=>T.Slug},{no:2,name:"job_id",kind:"message",T:()=>w.Ulid},{no:3,name:"config",kind:"message",T:()=>S.JobConfig},{no:4,name:"schedule",kind:"message",T:()=>_.JobSchedule}])}create(e){const n={};return globalThis.Object.defineProperty(n,k.MESSAGE_TYPE,{enumerable:!1,value:this}),e!==void 0&&(0,p.reflectionMergePartial)(this,n,e),n}internalBinaryRead(e,n,t,o){let r=o!=null?o:this.create(),c=e.pos+n;for(;e.pos<c;){let[s,d]=e.tag();switch(s){case 1:r.accountId=T.Slug.internalBinaryRead(e,e.uint32(),t,r.accountId);break;case 2:r.jobId=w.Ulid.internalBinaryRead(e,e.uint32(),t,r.jobId);break;case 3:r.config=S.JobConfig.internalBinaryRead(e,e.uint32(),t,r.config);break;case 4:r.schedule=_.JobSchedule.internalBinaryRead(e,e.uint32(),t,r.schedule);break;default:let h=t.readUnknownField;if(h==="throw")throw new globalThis.Error(`Unknown field ${s} (wire type ${d}) for ${this.typeName}`);let m=e.skip(d);h!==!1&&(h===!0?f.UnknownFieldHandler.onRead:h)(this.typeName,r,s,d,m)}}return r}internalBinaryWrite(e,n,t){e.accountId&&T.Slug.internalBinaryWrite(e.accountId,n.tag(1,u.WireType.LengthDelimited).fork(),t).join(),e.jobId&&w.Ulid.internalBinaryWrite(e.jobId,n.tag(2,u.WireType.LengthDelimited).fork(),t).join(),e.config&&S.JobConfig.internalBinaryWrite(e.config,n.tag(3,u.WireType.LengthDelimited).fork(),t).join(),e.schedule&&_.JobSchedule.internalBinaryWrite(e.schedule,n.tag(4,u.WireType.LengthDelimited).fork(),t).join();let o=t.writeUnknownFields;return o!==!1&&(o==!0?f.UnknownFieldHandler.onWrite:o)(this.typeName,e,n),n}}l.CreateRequest=new W;class U extends g.MessageType{constructor(){super("whitehawk.proto.internal.client_portal.accounts.id.jobs.v1.CreateResponse",[{no:1,name:"job_id",kind:"message",T:()=>w.Ulid}])}create(e){const n={};return globalThis.Object.defineProperty(n,k.MESSAGE_TYPE,{enumerable:!1,value:this}),e!==void 0&&(0,p.reflectionMergePartial)(this,n,e),n}internalBinaryRead(e,n,t,o){let r=o!=null?o:this.create(),c=e.pos+n;for(;e.pos<c;){let[s,d]=e.tag();switch(s){case 1:r.jobId=w.Ulid.internalBinaryRead(e,e.uint32(),t,r.jobId);break;default:let h=t.readUnknownField;if(h==="throw")throw new globalThis.Error(`Unknown field ${s} (wire type ${d}) for ${this.typeName}`);let m=e.skip(d);h!==!1&&(h===!0?f.UnknownFieldHandler.onRead:h)(this.typeName,r,s,d,m)}}return r}internalBinaryWrite(e,n,t){e.jobId&&w.Ulid.internalBinaryWrite(e.jobId,n.tag(1,u.WireType.LengthDelimited).fork(),t).join();let o=t.writeUnknownFields;return o!==!1&&(o==!0?f.UnknownFieldHandler.onWrite:o)(this.typeName,e,n),n}}l.CreateResponse=new U;class I extends g.MessageType{constructor(){super("whitehawk.proto.internal.client_portal.accounts.id.jobs.v1.ReadRequest",[{no:1,name:"account_id",kind:"message",T:()=>T.Slug},{no:2,name:"job_id",kind:"message",T:()=>w.Ulid}])}create(e){const n={};return globalThis.Object.defineProperty(n,k.MESSAGE_TYPE,{enumerable:!1,value:this}),e!==void 0&&(0,p.reflectionMergePartial)(this,n,e),n}internalBinaryRead(e,n,t,o){let r=o!=null?o:this.create(),c=e.pos+n;for(;e.pos<c;){let[s,d]=e.tag();switch(s){case 1:r.accountId=T.Slug.internalBinaryRead(e,e.uint32(),t,r.accountId);break;case 2:r.jobId=w.Ulid.internalBinaryRead(e,e.uint32(),t,r.jobId);break;default:let h=t.readUnknownField;if(h==="throw")throw new globalThis.Error(`Unknown field ${s} (wire type ${d}) for ${this.typeName}`);let m=e.skip(d);h!==!1&&(h===!0?f.UnknownFieldHandler.onRead:h)(this.typeName,r,s,d,m)}}return r}internalBinaryWrite(e,n,t){e.accountId&&T.Slug.internalBinaryWrite(e.accountId,n.tag(1,u.WireType.LengthDelimited).fork(),t).join(),e.jobId&&w.Ulid.internalBinaryWrite(e.jobId,n.tag(2,u.WireType.LengthDelimited).fork(),t).join();let o=t.writeUnknownFields;return o!==!1&&(o==!0?f.UnknownFieldHandler.onWrite:o)(this.typeName,e,n),n}}l.ReadRequest=new I;class B extends g.MessageType{constructor(){super("whitehawk.proto.internal.client_portal.accounts.id.jobs.v1.ReadResponse",[{no:1,name:"value",kind:"message",T:()=>R.Job}])}create(e){const n={};return globalThis.Object.defineProperty(n,k.MESSAGE_TYPE,{enumerable:!1,value:this}),e!==void 0&&(0,p.reflectionMergePartial)(this,n,e),n}internalBinaryRead(e,n,t,o){let r=o!=null?o:this.create(),c=e.pos+n;for(;e.pos<c;){let[s,d]=e.tag();switch(s){case 1:r.value=R.Job.internalBinaryRead(e,e.uint32(),t,r.value);break;default:let h=t.readUnknownField;if(h==="throw")throw new globalThis.Error(`Unknown field ${s} (wire type ${d}) for ${this.typeName}`);let m=e.skip(d);h!==!1&&(h===!0?f.UnknownFieldHandler.onRead:h)(this.typeName,r,s,d,m)}}return r}internalBinaryWrite(e,n,t){e.value&&R.Job.internalBinaryWrite(e.value,n.tag(1,u.WireType.LengthDelimited).fork(),t).join();let o=t.writeUnknownFields;return o!==!1&&(o==!0?f.UnknownFieldHandler.onWrite:o)(this.typeName,e,n),n}}l.ReadResponse=new B;class b extends g.MessageType{constructor(){super("whitehawk.proto.internal.client_portal.accounts.id.jobs.v1.ListRequest",[{no:1,name:"account_id",kind:"message",T:()=>T.Slug}])}create(e){const n={};return globalThis.Object.defineProperty(n,k.MESSAGE_TYPE,{enumerable:!1,value:this}),e!==void 0&&(0,p.reflectionMergePartial)(this,n,e),n}internalBinaryRead(e,n,t,o){let r=o!=null?o:this.create(),c=e.pos+n;for(;e.pos<c;){let[s,d]=e.tag();switch(s){case 1:r.accountId=T.Slug.internalBinaryRead(e,e.uint32(),t,r.accountId);break;default:let h=t.readUnknownField;if(h==="throw")throw new globalThis.Error(`Unknown field ${s} (wire type ${d}) for ${this.typeName}`);let m=e.skip(d);h!==!1&&(h===!0?f.UnknownFieldHandler.onRead:h)(this.typeName,r,s,d,m)}}return r}internalBinaryWrite(e,n,t){e.accountId&&T.Slug.internalBinaryWrite(e.accountId,n.tag(1,u.WireType.LengthDelimited).fork(),t).join();let o=t.writeUnknownFields;return o!==!1&&(o==!0?f.UnknownFieldHandler.onWrite:o)(this.typeName,e,n),n}}l.ListRequest=new b;class i extends g.MessageType{constructor(){super("whitehawk.proto.internal.client_portal.accounts.id.jobs.v1.ListResponse",[{no:1,name:"value",kind:"message",repeat:1,T:()=>R.Job}])}create(e){const n={value:[]};return globalThis.Object.defineProperty(n,k.MESSAGE_TYPE,{enumerable:!1,value:this}),e!==void 0&&(0,p.reflectionMergePartial)(this,n,e),n}internalBinaryRead(e,n,t,o){let r=o!=null?o:this.create(),c=e.pos+n;for(;e.pos<c;){let[s,d]=e.tag();switch(s){case 1:r.value.push(R.Job.internalBinaryRead(e,e.uint32(),t));break;default:let h=t.readUnknownField;if(h==="throw")throw new globalThis.Error(`Unknown field ${s} (wire type ${d}) for ${this.typeName}`);let m=e.skip(d);h!==!1&&(h===!0?f.UnknownFieldHandler.onRead:h)(this.typeName,r,s,d,m)}}return r}internalBinaryWrite(e,n,t){for(let r=0;r<e.value.length;r++)R.Job.internalBinaryWrite(e.value[r],n.tag(1,u.WireType.LengthDelimited).fork(),t).join();let o=t.writeUnknownFields;return o!==!1&&(o==!0?f.UnknownFieldHandler.onWrite:o)(this.typeName,e,n),n}}l.ListResponse=new i,l.Service=new y.ServiceType("whitehawk.proto.internal.client_portal.accounts.id.jobs.v1.Service",[{name:"Create",options:{},I:l.CreateRequest,O:l.CreateResponse},{name:"Read",options:{},I:l.ReadRequest,O:l.ReadResponse},{name:"List",options:{},I:l.ListRequest,O:l.ListResponse}])})(D);var P={};Object.defineProperty(P,"__esModule",{value:!0});var H=P.ServiceClient=void 0;const N=D,$=J;class K{constructor(y){this._transport=y,this.typeName=N.Service.typeName,this.methods=N.Service.methods,this.options=N.Service.options}create(y,u){const f=this.methods[0],p=this._transport.mergeOptions(u);return(0,$.stackIntercept)("unary",this._transport,f,p,y)}read(y,u){const f=this.methods[1],p=this._transport.mergeOptions(u);return(0,$.stackIntercept)("unary",this._transport,f,p,y)}list(y,u){const f=this.methods[2],p=this._transport.mergeOptions(u);return(0,$.stackIntercept)("unary",this._transport,f,p,y)}}H=P.ServiceClient=K;const O=new H(q),V={create(l){const y=E(),u=A();async function f(p){return await O.create(p,y.value)}return G(f,{onSuccess(){u.invalidateQueries([C,"accounts",l,"jobs"],{exact:!0})}})},read(l,y){const u=E();async function f(){const p=await O.read({accountId:{value:l.value},jobId:{value:y.value}},u.value),{value:k}=p.response;return k}return F([C,"accounts",l,"jobs",y],f)},list(l){const y=E();async function u(){const f=await O.list({accountId:{value:l.value}},y.value),{value:p}=f.response;return p}return F([C,"accounts",l,"jobs"],u)}};export{j as m,D as s,V as u};
