import{F as E}from"./FormButton.5dc3e2f1.js";import{B as J}from"./BackButton.08c85180.js";import{D as Q}from"./DynamicForm.7080bda7.js";import{aT as L,aE as M,ai as k,aP as h,aQ as I,b0 as T,aC as O,bF as S,d as i,n as y,b$ as D,aZ as P,aJ as U}from"./index.3c868a01.js";import{m as $,s as z,u as A}from"./useScheduledJobs.1b9defd7.js";import"./arrow-down-on-square.bf61cdc5.js";import"./trash.78f57a7a.js";import"./chevron-left.0808b01b.js";const N={create(e){const n=L();return M(t=>h.post(`${I}/companies/${e.value}/supply-wisdom-targets`,t).then(o=>o.data),{onSuccess(){n.invalidateQueries(["companies",e,"supply-wisdom","targets"],{exact:!0})}})},read(e,n){return k(["companies",e,"supply-wisdom","targets",n],()=>h.get(`${I}/companies/${e.value}/supply-wisdom-targets/${n.value}`).then(t=>t.data))},list(e){return k(["companies",e,"supply-wisdom","targets"],()=>h.get(`${I}/companies/${e.value}/supply-wisdom-targets`).then(n=>n.data))}},b={};b.props={id:{key:"id",required:!0,type:String},value:{key:"value",required:!1,type:null}};b.setup=(e,n)=>{const t=e,o=n.emit,a=O(t,o),c=S.list(),u=i(()=>c.data.value||[]),p=i(()=>u.value.map(({id:s,name:r})=>({text:r,value:s})).sort((s,r)=>s.text.localeCompare(r.text))),d=i({get(){var s;return(s=t.value)==null?void 0:s.sourceId},set(s){s&&(a.value.sourceId=s)}}),m=i({get(){var s;return(s=t.value)==null?void 0:s.targetId},set(s){s&&(a.value.targetId=s)}});return{companyOptions:p,sourceId:d,targetId:m}};b.components=Object.assign({SimpleSelect:T},b.components);var Z=function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("div",{staticClass:"flex flex-col space-y-6"},[t("BaseLabel",[t("span",[e._v("Source")]),t("SimpleSelect",{staticClass:"w-full lg:max-w-sm",attrs:{options:e.companyOptions},model:{value:e.sourceId,callback:function(o){e.sourceId=o},expression:"sourceId"}})],1),t("BaseLabel",[t("span",[e._v("Target")]),t("SimpleSelect",{staticClass:"w-full lg:max-w-sm",attrs:{options:e.companyOptions},model:{value:e.targetId,callback:function(o){e.targetId=o},expression:"targetId"}})],1)],1)},G=[];const K={};var H=y(b,Z,G,!1,X,null,null,null);function X(e){for(let n in K)this[n]=K[n]}const Y=function(){return H.exports}(),f={};f.props={id:{key:"id",required:!0,type:String},value:{key:"value",required:!1,type:null}};f.setup=(e,n)=>{const t=e,o=n.emit,a=O(t,o),c=S.list(),u=i(()=>c.data.value||[]),p=i(()=>u.value.map(({id:s,name:r})=>({text:r,value:s})).sort((s,r)=>s.text.localeCompare(r.text))),d=i({get(){var s;return(s=t.value)==null?void 0:s.sourceId},set(s){s&&(a.value.sourceId=s)}}),m=i({get(){var s,r;return(r=(s=t.value)==null?void 0:s.targetId)==null?void 0:r.value},set(s){s&&a.value.targetId&&(a.value.targetId.value=s)}});return{companyOptions:p,sourceId:d,targetId:m}};f.components=Object.assign({SimpleSelect:T},f.components);var V=function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("div",{staticClass:"flex flex-col space-y-6"},[t("BaseLabel",[t("span",[e._v("Source")]),t("SimpleSelect",{staticClass:"w-full lg:max-w-sm",attrs:{options:e.companyOptions},model:{value:e.sourceId,callback:function(o){e.sourceId=o},expression:"sourceId"}})],1),t("BaseLabel",[t("span",[e._v("Target")]),t("SimpleSelect",{staticClass:"w-full lg:max-w-sm",attrs:{options:e.companyOptions},model:{value:e.targetId,callback:function(o){e.targetId=o},expression:"targetId"}})],1)],1)},ee=[];const B={};var te=y(f,V,ee,!1,se,null,null,null);function se(e){for(let n in B)this[n]=B[n]}const ne=function(){return te.exports}(),_={};_.props={id:{key:"id",required:!0,type:String},value:{key:"value",required:!1,type:null}};_.setup=(e,n)=>{const t=e,o=n.emit,a=O(t,o),c=i(()=>t.id),u=N.list(c),p=i(()=>u.data.value||[]),d=i(()=>p.value.map(l=>({text:l.targetName,value:l.targetType}))),m=i({get(){var l;return(l=t.value)==null?void 0:l.sourceId},set(l){l&&(a.value.sourceId=l)}}),s=S.list(),r=i(()=>s.data.value||[]),F=i(()=>r.value.map(({id:l,name:v})=>({text:v,value:l})).sort((l,v)=>l.text.localeCompare(v.text))),R=i({get(){var l,v;return(v=(l=t.value)==null?void 0:l.targetId)==null?void 0:v.value},set(l){l&&a.value.targetId&&(a.value.targetId.value=l)}});return{targetOptions:d,sourceId:m,companyOptions:F,targetId:R}};_.components=Object.assign({SimpleSelect:T},_.components);var oe=function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("div",{staticClass:"flex flex-col space-y-6"},[t("BaseLabel",[t("span",[e._v("Source")]),t("SimpleSelect",{staticClass:"w-full lg:max-w-sm",attrs:{options:e.targetOptions},model:{value:e.sourceId,callback:function(o){e.sourceId=o},expression:"sourceId"}})],1),t("BaseLabel",[t("span",[e._v("Target")]),t("SimpleSelect",{staticClass:"w-full lg:max-w-sm",attrs:{options:e.companyOptions},model:{value:e.targetId,callback:function(o){e.targetId=o},expression:"targetId"}})],1)],1)},ae=[];const j={};var re=y(_,oe,ae,!1,ie,null,null,null);function ie(e){for(let n in j)this[n]=j[n]}const le=function(){return re.exports}(),g={};g.props={id:{key:"id",required:!0,type:String},value:{key:"value",required:!1,type:null}};g.setup=(e,n)=>{const t=e,o=n.emit,a=O(t,o),c=i({get(){var s;return(s=t.value)==null?void 0:s.value.oneofKind},set(s){if(s==="blackKiteToCyberOne")a.value={value:{oneofKind:"blackKiteToCyberOne",blackKiteToCyberOne:$.BlackKiteToCyberOne.create()}};else if(s==="bitsightToCyberOne")a.value={value:{oneofKind:"bitsightToCyberOne",bitsightToCyberOne:$.BitsightToCyberOne.create()}};else if(s==="supplyWisdomToCyberOne")a.value={value:{oneofKind:"supplyWisdomToCyberOne",supplyWisdomToCyberOne:$.SupplyWisdomToCyberOne.create()}};else throw new Error(`Unhandled case: ${s}`)}}),u=[{text:"Black Kite to CyberOne",value:"blackKiteToCyberOne"},{text:"Bitsight to CyberOne",value:"bitsightToCyberOne"},{text:"Supply Wisdom to CyberOne",value:"supplyWisdomToCyberOne"}],p=i({get(){var r;const s=(r=t.value)==null?void 0:r.value;if((s==null?void 0:s.oneofKind)==="blackKiteToCyberOne")return s.blackKiteToCyberOne},set(s){s?a.value={value:{oneofKind:"blackKiteToCyberOne",blackKiteToCyberOne:s}}:a.value={value:{oneofKind:void 0}}}}),d=i({get(){var r;const s=(r=t.value)==null?void 0:r.value;if((s==null?void 0:s.oneofKind)==="bitsightToCyberOne")return s.bitsightToCyberOne},set(s){s?a.value={value:{oneofKind:"bitsightToCyberOne",bitsightToCyberOne:s}}:a.value={value:{oneofKind:void 0}}}}),m=i({get(){var r;const s=(r=t.value)==null?void 0:r.value;if((s==null?void 0:s.oneofKind)==="supplyWisdomToCyberOne")return s.supplyWisdomToCyberOne},set(s){s?a.value={value:{oneofKind:"supplyWisdomToCyberOne",supplyWisdomToCyberOne:s}}:a.value={value:{oneofKind:void 0}}}});return{type:c,typeOptions:u,blackKiteToCyberOne:p,bitsightToCyberOne:d,supplyWisdomToCyberOne:m}};g.components=Object.assign({SimpleSelect:T,BlackKiteToCyberOneConfigInput:ne,BitsightToCyberOneConfigInput:Y,SupplyWisdomToCyberOneConfigInput:le},g.components);var ce=function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("div",{staticClass:"space-y-6"},[t("BaseLabel",[t("span",[e._v("Type")]),t("SimpleSelect",{staticClass:"w-full lg:max-w-sm",attrs:{options:e.typeOptions},model:{value:e.type,callback:function(o){e.type=o},expression:"type"}})],1),e.type==="blackKiteToCyberOne"?[t("BlackKiteToCyberOneConfigInput",{attrs:{id:e.id},model:{value:e.blackKiteToCyberOne,callback:function(o){e.blackKiteToCyberOne=o},expression:"blackKiteToCyberOne"}})]:e.type==="bitsightToCyberOne"?[t("BitsightToCyberOneConfigInput",{attrs:{id:e.id},model:{value:e.bitsightToCyberOne,callback:function(o){e.bitsightToCyberOne=o},expression:"bitsightToCyberOne"}})]:e.type==="supplyWisdomToCyberOne"?[t("SupplyWisdomToCyberOneConfigInput",{attrs:{id:e.id},model:{value:e.supplyWisdomToCyberOne,callback:function(o){e.supplyWisdomToCyberOne=o},expression:"supplyWisdomToCyberOne"}})]:e._e()],2)},ue=[];const W={};var pe=y(g,ce,ue,!1,de,null,null,null);function de(e){for(let n in W)this[n]=W[n]}const me=function(){return pe.exports}(),C={};C.props={id:{key:"id",required:!0,type:String},value:{key:"value",required:!1,type:null,default:void 0}};C.setup=(e,n)=>{const t=e,o=n.emit,a=O(t,o),c=i(()=>t.id),u=i(()=>[{name:"config",label:"Sync Type",component:{is:me,attrs:{required:!0,id:c.value}}}]);return{proxy:a,schema:u}};C.components=Object.assign({DynamicForm:Q},C.components);var ve=function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("DynamicForm",{attrs:{schema:e.schema},model:{value:e.proxy,callback:function(o){e.proxy=o},expression:"proxy"}})},ye=[];const q={};var be=y(C,ve,ye,!1,fe,null,null,null);function fe(e){for(let n in q)this[n]=q[n]}const _e=function(){return be.exports}(),x={};x.setup=(e,n)=>{const t=D("id"),o=P(z.CreateRequest.create()),a=U(),c=A.create(t);async function u(){await c.mutateAsync(o.value),a.push(`/admin/companies/${t.value}/jobs`)}return{id:t,job:o,createJob:u}};x.components=Object.assign({BackButton:J,ScheduledJobInput:_e,FormButton:E},x.components);var ge=function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("section",{staticClass:"space-y-6"},[t("BackButton"),t("BaseSimpleCard",{staticClass:"divide-y"},[t("BaseTypography",{staticClass:"p-4",attrs:{component:"h4",variant:"subtitle3"}},[e._v(" Create Scheduled Job ")]),t("form",{staticClass:"divide-y",on:{submit:function(o){return o.preventDefault(),e.createJob.apply(null,arguments)}}},[t("ScheduledJobInput",{attrs:{id:e.id},model:{value:e.job,callback:function(o){e.job=o},expression:"job"}}),t("FormButton",{attrs:{action:"create"}})],1)],1)],1)},Ce=[];const w={};var Oe=y(x,ge,Ce,!1,xe,null,null,null);function xe(e){for(let n in w)this[n]=w[n]}const je=function(){return Oe.exports}();export{je as default};
