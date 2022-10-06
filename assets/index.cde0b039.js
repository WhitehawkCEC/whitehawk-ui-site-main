import{F as J}from"./FormButton.0d3ebb19.js";import{D as Q}from"./DynamicForm.6c956cbf.js";import{aU as A,aE as U,ai as E,aQ as h,aR as q,b1 as R,aC as _,d as l,bH as Y,n as v,ab as H,c0 as G,aJ as z}from"./index.d85f57f8.js";import{m as p,u as X}from"./useScheduledJobs.1feae872.js";import{a as Z,D as V}from"./DateRangeInput.9d88d627.js";import{f as F}from"./index.a92c026a.js";import{s as ee}from"./index.53d857dc.js";import{a as te}from"./index.cc7d5263.js";import"./arrow-down-on-square.bf61cdc5.js";import"./trash.78f57a7a.js";import"./index.9820293f.js";import"./index.5eb4777b.js";import"./index.7a54c9f6.js";import"./index.87e44ac4.js";import"./index.dc4f18a6.js";import"./index.b7eda8cf.js";const ne={create(e){const n=A();return U(t=>h.post(`${q}/companies/${e.value}/supply-wisdom-targets`,t).then(s=>s.data),{onSuccess(){n.invalidateQueries(["companies",e,"supply-wisdom","targets"],{exact:!0})}})},read(e,n){return E(["companies",e,"supply-wisdom","targets",n],()=>h.get(`${q}/companies/${e.value}/supply-wisdom-targets/${n.value}`).then(t=>t.data))},list(e){return E(["companies",e,"supply-wisdom","targets"],()=>h.get(`${q}/companies/${e.value}/supply-wisdom-targets`).then(n=>n.data))}},g={};g.props={id:{key:"id",required:!0,type:String},value:{key:"value",required:!1,type:null}};g.setup=(e,n)=>{const t=e,s=n.emit,r=_(t,s),i=l(()=>t.id),y=ne.list(i),o=l(()=>y.data.value||[]),m=l(()=>o.value.map(u=>({text:`${u.targetName} - ${u.targetType}`,value:u.targetType}))),a=l({get(){var u;return(u=t.value)==null?void 0:u.sourceId},set(u){u&&(r.value.sourceId=u)}}),d=Y.list(),c=l(()=>d.data.value||[]),b=l(()=>c.value.map(({id:u,name:f})=>({text:f,value:u})).sort((u,f)=>u.text.localeCompare(f.text))),N=l({get(){var u,f;return(f=(u=t.value)==null?void 0:u.targetId)==null?void 0:f.value},set(u){u&&r.value.targetId&&(r.value.targetId.value=u)}});return{targetOptions:m,sourceId:a,companyOptions:b,targetId:N}};g.components=Object.assign({SimpleSelect:R},g.components);var se=function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("div",{staticClass:"flex flex-col space-y-6"},[t("BaseLabel",[t("span",[e._v("Source:")]),t("SimpleSelect",{staticClass:"w-full lg:max-w-sm",attrs:{options:e.targetOptions},model:{value:e.sourceId,callback:function(s){e.sourceId=s},expression:"sourceId"}})],1),t("BaseLabel",[t("span",[e._v("Target:")]),t("SimpleSelect",{staticClass:"w-full lg:max-w-sm",attrs:{options:e.companyOptions},model:{value:e.targetId,callback:function(s){e.targetId=s},expression:"targetId"}})],1)],1)},re=[];const j={};var oe=v(g,se,re,!1,ae,null,null,null);function ae(e){for(let n in j)this[n]=j[n]}const ce=function(){return oe.exports}(),x={};x.props={value:{key:"value",required:!1,type:null}};x.setup=(e,n)=>{const t=e,s=n.emit,r=_(t,s),i=[{text:" ",value:p.RatingProviderType.UNSPECIFIED},{text:"Bitsight",value:p.RatingProviderType.RATING_SERVICE_1},{text:"Black Kite",value:p.RatingProviderType.RATING_SERVICE_2}];return{proxy:r,options:i}};x.components=Object.assign({SimpleSelect:R},x.components);var le=function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("SimpleSelect",{staticClass:"w-full",attrs:{options:e.options},model:{value:e.proxy,callback:function(s){e.proxy=s},expression:"proxy"}})},ie=[];const D={};var ue=v(x,le,ie,!1,pe,null,null,null);function pe(e){for(let n in D)this[n]=D[n]}const ye=function(){return ue.exports}(),C={};C.props={id:{key:"id",required:!0,type:String},value:{key:"value",required:!1,type:null}};C.setup=(e,n)=>{const t=e,s=n.emit,r=_(t,s),i=l({get(){var c;return(c=t.value)==null?void 0:c.ratingProviderType},set(c){c&&(r.value.ratingProviderType=c)}}),y=l({get(){var c;return(c=t.value)==null?void 0:c.sourceId},set(c){c&&(r.value.sourceId=c)}}),o=l({get(){var c;return(c=t.value)==null?void 0:c.targetId},set(c){c&&(r.value.targetId=c)}}),m=Y.list(),a=l(()=>m.data.value||[]),d=l(()=>a.value.map(({id:c,name:b})=>({text:b,value:c})).sort((c,b)=>c.text.localeCompare(b.text)));return{ratingProviderType:i,sourceId:y,targetId:o,companyOptions:d}};C.components=Object.assign({RatingProviderTypeInput:ye,SimpleSelect:R},C.components);var de=function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("div",{staticClass:"flex flex-col space-y-6"},[t("BaseLabel",[t("span",[e._v("Rating Provider:")]),t("RatingProviderTypeInput",{staticClass:"w-full lg:max-w-xs",model:{value:e.ratingProviderType,callback:function(s){e.ratingProviderType=s},expression:"ratingProviderType"}})],1),t("BaseLabel",[t("span",[e._v("Source:")]),t("SimpleSelect",{staticClass:"w-full lg:max-w-sm",attrs:{options:e.companyOptions},model:{value:e.sourceId,callback:function(s){e.sourceId=s},expression:"sourceId"}})],1),t("BaseLabel",[t("span",[e._v("Target:")]),t("SimpleSelect",{staticClass:"w-full lg:max-w-sm",attrs:{options:e.companyOptions},model:{value:e.targetId,callback:function(s){e.targetId=s},expression:"targetId"}})],1)],1)},ve=[];const W={};var me=v(C,de,ve,!1,_e,null,null,null);function _e(e){for(let n in W)this[n]=W[n]}const fe=function(){return me.exports}(),T={};T.props={id:{key:"id",required:!0,type:String},value:{key:"value",required:!1,type:null}};T.setup=(e,n)=>{const t=e,s=n.emit,r=_(t,s),i=l({get(){var a;return(a=t.value)==null?void 0:a.value.oneofKind},set(a){if(a==="cyberRiskScorecardToCyberOne")r.value={value:{oneofKind:"cyberRiskScorecardToCyberOne",cyberRiskScorecardToCyberOne:p.CyberRiskScorecardToCyberOne.create()}};else if(a==="supplyWisdomToCyberOne")r.value={value:{oneofKind:"supplyWisdomToCyberOne",supplyWisdomToCyberOne:p.SupplyWisdomToCyberOne.create()}};else throw new Error(`Unhandled case: ${a}`)}}),y=[{text:"Cyber Risk Scorecard to CyberOne",value:"cyberRiskScorecardToCyberOne"},{text:"Business Reports to CyberOne",value:"supplyWisdomToCyberOne"}],o=l({get(){var d;const a=(d=t.value)==null?void 0:d.value;if((a==null?void 0:a.oneofKind)==="cyberRiskScorecardToCyberOne")return a.cyberRiskScorecardToCyberOne},set(a){a?r.value={value:{oneofKind:"cyberRiskScorecardToCyberOne",cyberRiskScorecardToCyberOne:a}}:r.value={value:{oneofKind:void 0}}}}),m=l({get(){var d;const a=(d=t.value)==null?void 0:d.value;if((a==null?void 0:a.oneofKind)==="supplyWisdomToCyberOne")return a.supplyWisdomToCyberOne},set(a){a?r.value={value:{oneofKind:"supplyWisdomToCyberOne",supplyWisdomToCyberOne:a}}:r.value={value:{oneofKind:void 0}}}});return{type:i,typeOptions:y,cyberRiskScorecardToCyberOne:o,supplyWisdomToCyberOne:m}};T.components=Object.assign({SimpleSelect:R,CyberRiskScorecardToCyberOneConfigInput:fe,BusinessRatingToCyberOneConfigInput:ce},T.components);var be=function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("div",{staticClass:"space-y-6"},[t("BaseLabel",[t("span",[e._v("Type:")]),t("SimpleSelect",{staticClass:"w-full lg:max-w-md",attrs:{options:e.typeOptions},model:{value:e.type,callback:function(s){e.type=s},expression:"type"}})],1),e.type==="cyberRiskScorecardToCyberOne"?[t("CyberRiskScorecardToCyberOneConfigInput",{attrs:{id:e.id},model:{value:e.cyberRiskScorecardToCyberOne,callback:function(s){e.cyberRiskScorecardToCyberOne=s},expression:"cyberRiskScorecardToCyberOne"}})]:e.type==="supplyWisdomToCyberOne"?[t("BusinessRatingToCyberOneConfigInput",{attrs:{id:e.id},model:{value:e.supplyWisdomToCyberOne,callback:function(s){e.supplyWisdomToCyberOne=s},expression:"supplyWisdomToCyberOne"}})]:e._e()],2)},ge=[];const P={};var xe=v(T,be,ge,!1,Ce,null,null,null);function Ce(e){for(let n in P)this[n]=P[n]}const Te=function(){return xe.exports}(),$={};$.props={value:{key:"value",required:!1,type:null}};$.setup=(e,n)=>{const t=e,s=n.emit;function r(o){return{value:F(o)}}function i(o){return H(o.value)}return{proxy:l({get(){return t.value?i(t.value):void 0},set(o){o&&s("input",r(o))}})}};$.components=Object.assign({DatePicker:Z},$.components);var $e=function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("BaseLabel",[t("span",[e._v("Date:")]),t("DatePicker",{staticClass:"md:hidden",attrs:{margin:"none",direction:"right"},model:{value:e.proxy,callback:function(s){e.proxy=s},expression:"proxy"}}),t("DatePicker",{staticClass:"hidden md:flex",attrs:{margin:"none",direction:"left"},model:{value:e.proxy,callback:function(s){e.proxy=s},expression:"proxy"}})],1)},Se=[];const B={};var Oe=v($,$e,Se,!1,Ie,null,null,null);function Ie(e){for(let n in B)this[n]=B[n]}const Re=function(){return Oe.exports}(),S={};S.props={value:{key:"value",required:!1,type:null}};S.setup=(e,n)=>{const t=e,s=n.emit,r=_(t,s),i=[{text:" ",value:p.FrequencyType.UNSPECIFIED},{text:"One Time",value:p.FrequencyType.ONE_TIME},{text:"Daily",value:p.FrequencyType.DAILY},{text:"Weekly",value:p.FrequencyType.WEEKLY},{text:"Monthly",value:p.FrequencyType.MONTHLY},{text:"Every Sixty Day",value:p.FrequencyType.SIXTY_DAY},{text:"Quarterly",value:p.FrequencyType.QUARTERLY},{text:"Yearly",value:p.FrequencyType.YEARLY}];return{proxy:r,options:i}};S.components=Object.assign({SimpleSelect:R},S.components);var ke=function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("SimpleSelect",{staticClass:"w-full",attrs:{options:e.options},model:{value:e.proxy,callback:function(s){e.proxy=s},expression:"proxy"}})},he=[];const w={};var qe=v(S,ke,he,!1,Fe,null,null,null);function Fe(e){for(let n in w)this[n]=w[n]}const Ee=function(){return qe.exports}(),O={};O.props={value:{key:"value",required:!1,type:null}};O.setup=(e,n)=>{const t=e,s=n.emit,r=_(t,s),i=l({get(){var o;return(o=t.value)==null?void 0:o.frequency},set(o){o&&(r.value.frequency=o)}}),y=l({get(){var o;return(o=t.value)==null?void 0:o.range},set(o){o&&(i.value===p.FrequencyType.ONE_TIME?r.value.range={start:o.start,end:o.start}:r.value.range=o)}});return{FrequencyType:p.FrequencyType,frequency:i,dateRange:y}};O.components=Object.assign({FrequencyTypeInput:Ee,DateInput:Re,DateRangeInput:V},O.components);var je=function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("div",{staticClass:"space-y-6"},[t("BaseLabel",[t("span",[e._v("Frequency:")]),t("FrequencyTypeInput",{staticClass:"w-full lg:max-w-xs",model:{value:e.frequency,callback:function(s){e.frequency=s},expression:"frequency"}})],1),e.frequency===e.FrequencyType.ONE_TIME&&e.dateRange?[t("DateInput",{staticClass:"w-full lg:max-w-xs",model:{value:e.dateRange.start,callback:function(s){e.$set(e.dateRange,"start",s)},expression:"dateRange.start"}})]:[t("DateRangeInput",{staticClass:"sm:col-span-2",model:{value:e.dateRange,callback:function(s){e.dateRange=s},expression:"dateRange"}})]],2)},De=[];const L={};var We=v(O,je,De,!1,Pe,null,null,null);function Pe(e){for(let n in L)this[n]=L[n]}const Be=function(){return We.exports}(),I={};I.props={id:{key:"id",required:!0,type:String},value:{key:"value",required:!1,type:null,default:void 0}};I.setup=(e,n)=>{const t=e,s=n.emit,r=_(t,s),i=l(()=>t.id),y=l(()=>[{name:"schedule",label:"Schedule",component:{is:Be,attrs:{required:!0}}},{name:"config",label:"Sync",component:{is:Te,attrs:{required:!0,id:i.value}}}]);return{proxy:r,schema:y}};I.components=Object.assign({DynamicForm:Q},I.components);var we=function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("DynamicForm",{attrs:{schema:e.schema},model:{value:e.proxy,callback:function(s){e.proxy=s},expression:"proxy"}})},Le=[];const M={};var Me=v(I,we,Le,!1,Ke,null,null,null);function Ke(e){for(let n in M)this[n]=M[n]}const Ye=function(){return Me.exports}(),k={};k.setup=(e,n)=>{const t=G("id"),s=new Date,r=te(s,1),i=ee(l(()=>({jobId:{value:""},config:{value:{oneofKind:"supplyWisdomToCyberOne",supplyWisdomToCyberOne:p.SupplyWisdomToCyberOne.create()}},schedule:{range:{start:{value:F(s)},end:{value:F(r)}},frequency:p.FrequencyType.MONTHLY}}))),y=z(),o=X.create(t);async function m(){i.value&&(await o.mutateAsync(i.value),y.push(`/admin/companies/${t.value}/jobs`))}return{id:t,job:i,createJob:m}};k.components=Object.assign({JobInput:Ye,FormButton:J},k.components);var Ne=function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("BaseFormPageLayout",{scopedSlots:e._u([{key:"form",fn:function(){return[t("BaseTypography",{staticClass:"p-4",attrs:{component:"h4",variant:"subtitle3"}},[e._v(" Create Scheduled Job ")]),t("form",{staticClass:"divide-y",on:{submit:function(s){return s.preventDefault(),e.createJob.apply(null,arguments)}}},[t("JobInput",{attrs:{id:e.id},model:{value:e.job,callback:function(s){e.job=s},expression:"job"}}),t("FormButton",{attrs:{action:"create"}})],1)]},proxy:!0}])})},Je=[];const K={};var Qe=v(k,Ne,Je,!1,Ae,null,null,null);function Ae(e){for(let n in K)this[n]=K[n]}const it=function(){return Qe.exports}();export{it as default};
