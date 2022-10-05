import{F as Y}from"./FormButton.d21e7065.js";import{B as J}from"./BackButton.46d984f3.js";import{D as Q}from"./DynamicForm.62a82e27.js";import{aT as A,aE as U,ai as q,aP as R,aQ as h,b0 as I,aC as _,n as m,d as l,bF as K,b$ as N,aZ as H,aJ as z}from"./index.2a5b3770.js";import{m as d,u as G}from"./useScheduledJobs.ab9daa0d.js";import{D as Z}from"./DateRangeInput.b7b9fcab.js";import{a as X}from"./index.b112b678.js";import{f as F}from"./index.47051402.js";import"./arrow-down-on-square.bf61cdc5.js";import"./trash.78f57a7a.js";import"./chevron-left.0808b01b.js";import"./index.84a9d1bd.js";import"./index.db5f2c2d.js";import"./index.7a54c9f6.js";import"./index.87e44ac4.js";import"./index.0362075f.js";import"./index.6e662391.js";const V={create(e){const n=A();return U(t=>R.post(`${h}/companies/${e.value}/supply-wisdom-targets`,t).then(s=>s.data),{onSuccess(){n.invalidateQueries(["companies",e,"supply-wisdom","targets"],{exact:!0})}})},read(e,n){return q(["companies",e,"supply-wisdom","targets",n],()=>R.get(`${h}/companies/${e.value}/supply-wisdom-targets/${n.value}`).then(t=>t.data))},list(e){return q(["companies",e,"supply-wisdom","targets"],()=>R.get(`${h}/companies/${e.value}/supply-wisdom-targets`).then(n=>n.data))}},g={};g.props={value:{key:"value",required:!1,type:null}};g.setup=(e,n)=>{const t=e,s=n.emit,r=_(t,s),u=[{text:" ",value:d.RatingProviderType.UNSPECIFIED},{text:"Bitsight",value:d.RatingProviderType.BITSIGHT},{text:"Black Kite",value:d.RatingProviderType.BLACK_KITE}];return{proxy:r,options:u}};g.components=Object.assign({SimpleSelect:I},g.components);var ee=function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("SimpleSelect",{staticClass:"w-full",attrs:{options:e.options},model:{value:e.proxy,callback:function(s){e.proxy=s},expression:"proxy"}})},te=[];const j={};var ne=m(g,ee,te,!1,se,null,null,null);function se(e){for(let n in j)this[n]=j[n]}const oe=function(){return ne.exports}(),x={};x.props={id:{key:"id",required:!0,type:String},value:{key:"value",required:!1,type:null}};x.setup=(e,n)=>{const t=e,s=n.emit,r=_(t,s),u=l({get(){var a;return(a=t.value)==null?void 0:a.ratingProviderType},set(a){a&&(r.value.ratingProviderType=a)}}),p=l({get(){var a;return(a=t.value)==null?void 0:a.sourceId},set(a){a&&(r.value.sourceId=a)}}),c=l({get(){var a;return(a=t.value)==null?void 0:a.targetId},set(a){a&&(r.value.targetId=a)}}),v=K.list(),o=l(()=>v.data.value||[]),y=l(()=>o.value.map(({id:a,name:b})=>({text:b,value:a})).sort((a,b)=>a.text.localeCompare(b.text)));return{ratingProviderType:u,sourceId:p,targetId:c,companyOptions:y}};x.components=Object.assign({RatingProviderTypeInput:oe,SimpleSelect:I},x.components);var re=function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("div",{staticClass:"flex flex-col space-y-6"},[t("BaseLabel",[t("span",[e._v("Rating Provider")]),t("RatingProviderTypeInput",{model:{value:e.ratingProviderType,callback:function(s){e.ratingProviderType=s},expression:"ratingProviderType"}})],1),t("BaseLabel",[t("span",[e._v("Source")]),t("SimpleSelect",{staticClass:"w-full lg:max-w-sm",attrs:{options:e.companyOptions},model:{value:e.sourceId,callback:function(s){e.sourceId=s},expression:"sourceId"}})],1),t("BaseLabel",[t("span",[e._v("Target")]),t("SimpleSelect",{staticClass:"w-full lg:max-w-sm",attrs:{options:e.companyOptions},model:{value:e.targetId,callback:function(s){e.targetId=s},expression:"targetId"}})],1)],1)},ae=[];const B={};var ce=m(x,re,ae,!1,le,null,null,null);function le(e){for(let n in B)this[n]=B[n]}const ie=function(){return ce.exports}(),C={};C.props={id:{key:"id",required:!0,type:String},value:{key:"value",required:!1,type:null}};C.setup=(e,n)=>{const t=e,s=n.emit,r=_(t,s),u=l(()=>t.id),p=V.list(u),c=l(()=>p.data.value||[]),v=l(()=>c.value.map(i=>({text:i.targetName,value:i.targetType}))),o=l({get(){var i;return(i=t.value)==null?void 0:i.sourceId},set(i){i&&(r.value.sourceId=i)}}),y=K.list(),a=l(()=>y.data.value||[]),b=l(()=>a.value.map(({id:i,name:f})=>({text:f,value:i})).sort((i,f)=>i.text.localeCompare(f.text))),M=l({get(){var i,f;return(f=(i=t.value)==null?void 0:i.targetId)==null?void 0:f.value},set(i){i&&r.value.targetId&&(r.value.targetId.value=i)}});return{targetOptions:v,sourceId:o,companyOptions:b,targetId:M}};C.components=Object.assign({SimpleSelect:I},C.components);var ue=function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("div",{staticClass:"flex flex-col space-y-6"},[t("BaseLabel",[t("span",[e._v("Source")]),t("SimpleSelect",{staticClass:"w-full lg:max-w-sm",attrs:{options:e.targetOptions},model:{value:e.sourceId,callback:function(s){e.sourceId=s},expression:"sourceId"}})],1),t("BaseLabel",[t("span",[e._v("Target")]),t("SimpleSelect",{staticClass:"w-full lg:max-w-sm",attrs:{options:e.companyOptions},model:{value:e.targetId,callback:function(s){e.targetId=s},expression:"targetId"}})],1)],1)},pe=[];const E={};var de=m(C,ue,pe,!1,ye,null,null,null);function ye(e){for(let n in E)this[n]=E[n]}const me=function(){return de.exports}(),T={};T.props={id:{key:"id",required:!0,type:String},value:{key:"value",required:!1,type:null}};T.setup=(e,n)=>{const t=e,s=n.emit,r=_(t,s),u=l({get(){var o;return(o=t.value)==null?void 0:o.value.oneofKind},set(o){if(o==="cyberRiskScorecardToCyberOne")r.value={value:{oneofKind:"cyberRiskScorecardToCyberOne",cyberRiskScorecardToCyberOne:d.CyberRiskScorecardToCyberOne.create()}};else if(o==="supplyWisdomToCyberOne")r.value={value:{oneofKind:"supplyWisdomToCyberOne",supplyWisdomToCyberOne:d.SupplyWisdomToCyberOne.create()}};else throw new Error(`Unhandled case: ${o}`)}}),p=[{text:"Cyber Risk Scorecard to CyberOne",value:"cyberRiskScorecardToCyberOne"},{text:"Business Reports to CyberOne",value:"supplyWisdomToCyberOne"}],c=l({get(){var y;const o=(y=t.value)==null?void 0:y.value;if((o==null?void 0:o.oneofKind)==="cyberRiskScorecardToCyberOne")return o.cyberRiskScorecardToCyberOne},set(o){o?r.value={value:{oneofKind:"cyberRiskScorecardToCyberOne",cyberRiskScorecardToCyberOne:o}}:r.value={value:{oneofKind:void 0}}}}),v=l({get(){var y;const o=(y=t.value)==null?void 0:y.value;if((o==null?void 0:o.oneofKind)==="supplyWisdomToCyberOne")return o.supplyWisdomToCyberOne},set(o){o?r.value={value:{oneofKind:"supplyWisdomToCyberOne",supplyWisdomToCyberOne:o}}:r.value={value:{oneofKind:void 0}}}});return{type:u,typeOptions:p,cyberRiskScorecardToCyberOne:c,supplyWisdomToCyberOne:v}};T.components=Object.assign({SimpleSelect:I,CyberRiskScorecardToCyberOneConfigInput:ie,SupplyWisdomToCyberOneConfigInput:me},T.components);var ve=function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("div",{staticClass:"space-y-6"},[t("BaseLabel",[t("span",[e._v("Type:")]),t("SimpleSelect",{staticClass:"w-full lg:max-w-sm",attrs:{options:e.typeOptions},model:{value:e.type,callback:function(s){e.type=s},expression:"type"}})],1),e.type==="cyberRiskScorecardToCyberOne"?[t("CyberRiskScorecardToCyberOneConfigInput",{attrs:{id:e.id},model:{value:e.cyberRiskScorecardToCyberOne,callback:function(s){e.cyberRiskScorecardToCyberOne=s},expression:"cyberRiskScorecardToCyberOne"}})]:e.type==="supplyWisdomToCyberOne"?[t("SupplyWisdomToCyberOneConfigInput",{attrs:{id:e.id},model:{value:e.supplyWisdomToCyberOne,callback:function(s){e.supplyWisdomToCyberOne=s},expression:"supplyWisdomToCyberOne"}})]:e._e()],2)},_e=[];const P={};var fe=m(T,ve,_e,!1,be,null,null,null);function be(e){for(let n in P)this[n]=P[n]}const ge=function(){return fe.exports}(),S={};S.props={value:{key:"value",required:!1,type:null}};S.setup=(e,n)=>{const t=e,s=n.emit,r=_(t,s),u=[{text:" ",value:d.FrequencyType.UNSPECIFIED},{text:"Daily",value:d.FrequencyType.DAILY},{text:"Monthly",value:d.FrequencyType.MONTHLY},{text:"Quarterly",value:d.FrequencyType.QUARTERLY},{text:"Yearly",value:d.FrequencyType.YEARLY}];return{proxy:r,options:u}};S.components=Object.assign({SimpleSelect:I},S.components);var xe=function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("SimpleSelect",{staticClass:"w-full",attrs:{options:e.options},model:{value:e.proxy,callback:function(s){e.proxy=s},expression:"proxy"}})},Ce=[];const W={};var Te=m(S,xe,Ce,!1,Se,null,null,null);function Se(e){for(let n in W)this[n]=W[n]}const $e=function(){return Te.exports}(),$={};$.props={value:{key:"value",required:!1,type:null}};$.setup=(e,n)=>{const t=e,s=n.emit,r=_(t,s),u=l({get(){var c;return(c=t.value)==null?void 0:c.frequency},set(c){c&&(r.value.frequency=c)}}),p=l({get(){var c;return(c=t.value)==null?void 0:c.range},set(c){c&&(r.value.range=c)}});return{frequency:u,dateRange:p}};$.components=Object.assign({FrequencyTypeInput:$e,DateRangeInput:Z},$.components);var Oe=function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("div",{staticClass:"space-y-6"},[t("BaseLabel",[t("span",[e._v("Frequency:")]),t("FrequencyTypeInput",{staticClass:"w-full lg:max-w-sm",model:{value:e.frequency,callback:function(s){e.frequency=s},expression:"frequency"}})],1),t("DateRangeInput",{staticClass:"sm:col-span-2",model:{value:e.dateRange,callback:function(s){e.dateRange=s},expression:"dateRange"}})],1)},Ie=[];const w={};var ke=m($,Oe,Ie,!1,Re,null,null,null);function Re(e){for(let n in w)this[n]=w[n]}const he=function(){return ke.exports}(),O={};O.props={id:{key:"id",required:!0,type:String},value:{key:"value",required:!1,type:null,default:void 0}};O.setup=(e,n)=>{const t=e,s=n.emit,r=_(t,s),u=l(()=>t.id),p=l(()=>[{name:"schedule",label:"Schedule",component:{is:he,attrs:{required:!0}}},{name:"config",label:"Sync",component:{is:ge,attrs:{required:!0,id:u.value}}}]);return{proxy:r,schema:p}};O.components=Object.assign({DynamicForm:Q},O.components);var qe=function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("DynamicForm",{attrs:{schema:e.schema},model:{value:e.proxy,callback:function(s){e.proxy=s},expression:"proxy"}})},Fe=[];const L={};var je=m(O,qe,Fe,!1,Be,null,null,null);function Be(e){for(let n in L)this[n]=L[n]}const Ee=function(){return je.exports}(),k={};k.setup=(e,n)=>{const t=N("id"),s=new Date,r=X(s,1),u=H({config:{value:{oneofKind:void 0}},schedule:{range:{start:{value:F(s)},end:{value:F(r)}},frequency:d.FrequencyType.YEARLY}}),p=z(),c=G.create(t);async function v(){u.value&&(await c.mutateAsync(u.value),p.push(`/admin/companies/${t.value}/jobs`))}return{id:t,job:u,createJob:v}};k.components=Object.assign({BackButton:J,JobInput:Ee,FormButton:Y},k.components);var Pe=function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("section",{staticClass:"space-y-6"},[t("BackButton"),t("BaseSimpleCard",{staticClass:"divide-y"},[t("BaseTypography",{staticClass:"p-4",attrs:{component:"h4",variant:"subtitle3"}},[e._v(" Create Scheduled Job ")]),t("form",{staticClass:"divide-y",on:{submit:function(s){return s.preventDefault(),e.createJob.apply(null,arguments)}}},[t("JobInput",{attrs:{id:e.id},model:{value:e.job,callback:function(s){e.job=s},expression:"job"}}),t("FormButton",{attrs:{action:"create"}})],1)],1)],1)},We=[];const D={};var we=m(k,Pe,We,!1,Le,null,null,null);function Le(e){for(let n in D)this[n]=D[n]}const nt=function(){return we.exports}();export{nt as default};
