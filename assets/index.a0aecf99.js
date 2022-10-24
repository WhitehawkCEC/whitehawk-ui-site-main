import{F as A}from"./FormButton.b4dbac98.js";import{b0 as B,c as l,n as v,aB as R,da as I,ce as $,bM as j,bs as w,b$ as S,c8 as F,aF as L,aI as M}from"./index.a947e411.js";import{D as N}from"./DynamicForm.d5f1a153.js";import{A as U}from"./ApiTokenInput.0a970076.js";import{u as Q}from"./useBitsightCompanies.cb306218.js";import{A as G}from"./ApiKeyInput.de172cb7.js";import{u as Y}from"./useBlackKiteEntities.85e64089.js";import{D as z}from"./DateRangeInput.ec262a8a.js";import{D as W}from"./DateRangeDisplay.316a3586.js";import{u as H}from"./useAccountSubscriptionValidity.b5674776.js";import{s as J}from"./index.a4269f77.js";import{a as X}from"./index.cc535017.js";import"./arrow-down-on-square.bf61cdc5.js";import"./trash.78f57a7a.js";import"./ApiKeyDescriptionDisplay.9066021f.js";import"./ApiKeyValidation.91ac5140.js";import"./index.07915586.js";import"./index.1865f824.js";import"./index.7a54c9f6.js";import"./index.87e44ac4.js";import"./index.c16e046c.js";import"./index.6ab913c5.js";import"./IsoDateTimeDisplay.1fbceaaa.js";import"./index.4e2da1c9.js";const y={};y.props={value:{key:"value",required:!1,type:null},id:{key:"id",required:!0,type:String}};y.setup=(e,n)=>{const t=e,s=n.emit,i=l({get(){var c;return(c=t.value)==null?void 0:c.value},set(c){s("input",c?{value:c}:void 0)}}),u=l(()=>t.id),p=Q.list(u),r=l(()=>p.data.value?p.data.value.map(c=>({text:c.data.shortname,value:c.data.guid})).sort((c,a)=>c.text.localeCompare(a.text)):[]);return{proxy:i,companies:r}};y.components=Object.assign({SimpleSelect:B},y.components);var Z=function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("SimpleSelect",{attrs:{options:e.companies},model:{value:e.proxy,callback:function(s){e.proxy=s},expression:"proxy"}})},V=[];const h={};var ee=v(y,Z,V,!1,te,null,null,null);function te(e){for(let n in h)this[n]=h[n]}const ne=function(){return ee.exports}(),f={};f.props={id:{key:"id",required:!0,type:String},value:{key:"value",required:!1,type:null}};f.setup=(e,n)=>{const t=e,s=n.emit,i=R(t,s),u=l({get(){var r;return(r=t.value)==null?void 0:r.apiToken},set(r){r&&(i.value.apiToken=r)}}),p=l({get(){var r;return((r=t.value)==null?void 0:r.mappedEntityId.oneofKind)==="value"?t.value.mappedEntityId.value:void 0},set(r){i.value.mappedEntityId=r?{oneofKind:"value",value:r}:{oneofKind:void 0}}});return{proxy:i,apiToken:u,mappedEntityId:p}};f.components=Object.assign({ApiTokenInput:U,UuidInput:ne},f.components);var se=function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("div",{staticClass:"flex flex-col space-y-6"},[t("BaseLabel",[t("span",[e._v("API Token")]),t("ApiTokenInput",{staticClass:"w-full",model:{value:e.apiToken,callback:function(s){e.apiToken=s},expression:"apiToken"}})],1),t("BaseLabel",[t("span",{staticClass:"block"},[e._v("Mapped Entity ID")]),t("UuidInput",{staticClass:"w-full lg:max-w-sm",attrs:{id:e.id},model:{value:e.mappedEntityId,callback:function(s){e.mappedEntityId=s},expression:"mappedEntityId"}})],1),t("BaseLabel",[t("span",{staticClass:"block"},[e._v("Domain")]),t("BaseInput",{staticClass:"w-full lg:max-w-sm",model:{value:e.proxy.domain,callback:function(s){e.$set(e.proxy,"domain",s)},expression:"proxy.domain"}})],1)],1)},ae=[];const K={};var ie=v(f,se,ae,!1,oe,null,null,null);function oe(e){for(let n in K)this[n]=K[n]}const re=function(){return ie.exports}(),_={};_.props={value:{key:"value",required:!1,type:null}};_.setup=(e,n)=>{const t=e,s=n.emit,i=R(t,s),u=[{text:" ",value:I.ScanProfileType.UNSPECIFIED},{text:"Continuous 60-day",value:I.ScanProfileType.CONTINUOUS_60_DAY},{text:"Continuous Annual",value:I.ScanProfileType.CONTINUOUS_ANNUAL}];return{proxy:i,options:u}};_.components=Object.assign({SimpleSelect:B},_.components);var ce=function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("SimpleSelect",{staticClass:"w-full",attrs:{options:e.options},model:{value:e.proxy,callback:function(s){e.proxy=s},expression:"proxy"}})},le=[];const E={};var ue=v(_,ce,le,!1,pe,null,null,null);function pe(e){for(let n in E)this[n]=E[n]}const de=function(){return ue.exports}(),k={};k.props={id:{key:"id",required:!0,type:String},value:{key:"value",required:!1,type:null}};k.setup=(e,n)=>{const t=e,s=n.emit,i=R(t,s),u=l(()=>t.id),p=l({get(){var o;return(o=t.value)==null?void 0:o.apiKey},set(o){o&&(i.value.apiKey=o)}}),r=l({get(){var o;return(o=t.value)==null?void 0:o.licenseType},set(o){o&&(i.value.licenseType=o)}}),c=Y.list(u),a=l(()=>c.data.value?c.data.value.map(({CompanyId:o,CompanyName:m})=>({text:m,value:o})).sort((o,m)=>o.text.localeCompare(m.text)):[]),d=l({get(){var o;return(o=t.value)==null?void 0:o.mappedEntityId},set(o){o&&(i.value.mappedEntityId=o)}});return{proxy:i,apiKey:p,licenseType:r,entities:a,mappedEntityId:d}};k.components=Object.assign({ApiKeyInput:G,ScanProfileTypeInput:de,SimpleSelect:B},k.components);var me=function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("div",{staticClass:"flex flex-col space-y-6"},[t("BaseLabel",[t("span",[e._v("API Key")]),t("ApiKeyInput",{staticClass:"w-full",model:{value:e.apiKey,callback:function(s){e.apiKey=s},expression:"apiKey"}})],1),t("BaseLabel",[t("span",[e._v("License Type")]),t("ScanProfileTypeInput",{staticClass:"w-full lg:max-w-xs",model:{value:e.licenseType,callback:function(s){e.licenseType=s},expression:"licenseType"}})],1),t("BaseLabel",[t("span",{staticClass:"block"},[e._v("Mapped Entity ID")]),t("SimpleSelect",{staticClass:"w-full lg:max-w-sm",attrs:{options:e.entities},model:{value:e.mappedEntityId,callback:function(s){e.mappedEntityId=s},expression:"mappedEntityId"}})],1),t("BaseLabel",[t("span",{staticClass:"block"},[e._v("Domain")]),t("BaseInput",{staticClass:"w-full lg:max-w-sm",model:{value:e.proxy.domain,callback:function(s){e.$set(e.proxy,"domain",s)},expression:"proxy.domain"}})],1)],1)},ve=[];const T={};var ye=v(k,me,ve,!1,fe,null,null,null);function fe(e){for(let n in T)this[n]=T[n]}const _e=function(){return ye.exports}(),b={};b.props={id:{key:"id",required:!0,type:String},value:{key:"value",required:!1,type:null}};b.setup=(e,n)=>{const t=e,s=n.emit,i=R(t,s),u=l({get(){var a;return(a=t.value)==null?void 0:a.value.oneofKind},set(a){if(a==="cyberRiskRatingBk")i.value={value:{oneofKind:"cyberRiskRatingBk",cyberRiskRatingBk:$.CyberRiskRatingBlackKiteConfig.create()}};else if(a==="cyberRiskRatingBs")i.value={value:{oneofKind:"cyberRiskRatingBs",cyberRiskRatingBs:$.CyberRiskRatingBitsightConfig.create()}};else throw new Error(`Unhandled case: ${a}`)}}),p=l({get(){var d;const a=(d=t.value)==null?void 0:d.value;if((a==null?void 0:a.oneofKind)==="cyberRiskRatingBk")return a.cyberRiskRatingBk},set(a){a?i.value={value:{oneofKind:"cyberRiskRatingBk",cyberRiskRatingBk:a}}:i.value={value:{oneofKind:void 0}}}}),r=l({get(){var d;const a=(d=t.value)==null?void 0:d.value;if((a==null?void 0:a.oneofKind)==="cyberRiskRatingBs")return a.cyberRiskRatingBs},set(a){a?i.value={value:{oneofKind:"cyberRiskRatingBs",cyberRiskRatingBs:a}}:i.value={value:{oneofKind:void 0}}}});return{type:u,blackKite:p,bitsight:r,typeOptions:[{text:"Cyber Risk Rating (Black Kite)",value:"cyberRiskRatingBk"},{text:"Cyber Risk Rating (BitSight)",value:"cyberRiskRatingBs"}]}};b.components=Object.assign({SimpleSelect:B,CyberRiskRatingBlackKiteConfigInput:_e,CyberRiskRatingBitsightConfigInput:re},b.components);var ke=function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("div",{staticClass:"space-y-6"},[t("BaseLabel",[t("span",[e._v("Type")]),t("SimpleSelect",{staticClass:"w-full lg:max-w-sm",attrs:{options:e.typeOptions},model:{value:e.type,callback:function(s){e.type=s},expression:"type"}})],1),e.type==="cyberRiskRatingBk"?[t("CyberRiskRatingBlackKiteConfigInput",{attrs:{id:e.id},model:{value:e.blackKite,callback:function(s){e.blackKite=s},expression:"blackKite"}})]:e.type==="cyberRiskRatingBs"?[t("CyberRiskRatingBitsightConfigInput",{attrs:{id:e.id},model:{value:e.bitsight,callback:function(s){e.bitsight=s},expression:"bitsight"}})]:e._e()],2)},be=[];const q={};var ge=v(b,ke,be,!1,Re,null,null,null);function Re(e){for(let n in q)this[n]=q[n]}const xe=function(){return ge.exports}(),g={};g.props={id:{key:"id",required:!0,type:String},value:{key:"value",required:!0,type:null}};g.setup=(e,n)=>{const t=e,s=n.emit,i=R(t,s),u=l(()=>t.id),p=[{name:"name",label:"Name",component:{is:j,attrs:{required:!0,class:"w-full lg:max-w-sm"}}},{name:"validity",label:"Validity",component:{is:z,attrs:{required:!0}}},{name:"config",label:"Config",component:{is:xe,attrs:{required:!0,id:u.value}}}];return{proxy:i,schema:p}};g.components=Object.assign({DynamicForm:N},g.components);var Ce=function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("DynamicForm",{attrs:{schema:e.schema},model:{value:e.proxy,callback:function(s){e.proxy=s},expression:"proxy"}})},Be=[];const D={};var Ie=v(g,Ce,Be,!1,$e,null,null,null);function $e(e){for(let n in D)this[n]=D[n]}const Se=function(){return Ie.exports}(),C={};C.setup=(e,n)=>{const t=S("id"),s=S("subscriptionId"),i=new Date,u=X(i,1),p=H.get(t,s),r=J(l(()=>{var m,x;return{name:"",config:{value:{oneofKind:"cyberRiskRatingBk",cyberRiskRatingBk:$.CyberRiskRatingBlackKiteConfig.create()}},validity:{start:{value:i.toISOString()},end:{value:((x=(m=p.data.value)==null?void 0:m.end)==null?void 0:x.value)||u.toISOString()}}}})),c=F.create(t,s),a=L(),d=M();async function o(){var m;if(r.value){const x=await c.mutateAsync(r.value);a.success("Created product");const O=((m=x.response.productId)==null?void 0:m.value)||"";d.push({path:`../${O}`,append:!0})}}return{id:t,subscriptionId:s,validityGet:p,createRequest:r,submit:o}};C.components=Object.assign({BackButton:w,DateRangeDisplay:W,SubscriptionProductPartialCreateRequestInput:Se,FormButton:A},C.components);var he=function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("section",{staticClass:"space-y-6"},[t("BackButton",{attrs:{link:`/admin/companies/${e.id}/subscriptions/${e.subscriptionId}/products`}}),t("BaseSimpleCard",{staticClass:"divide-y overflow-hidden"},[t("BaseTypography",{staticClass:"block p-4",attrs:{variant:"subtitle3"}},[e._v(" Create Subscription Product ")]),t("div",{staticClass:"p-4"},[t("BaseVueQuery",{attrs:{query:e.validityGet},scopedSlots:e._u([{key:"success",fn:function(s){var i=s.data;return[t("DateRangeDisplay",{attrs:{value:i}})]}}])})],1),t("form",{staticClass:"divide-y",on:{submit:function(s){return s.preventDefault(),e.submit.apply(null,arguments)}}},[t("SubscriptionProductPartialCreateRequestInput",{attrs:{id:e.id},model:{value:e.createRequest,callback:function(s){e.createRequest=s},expression:"createRequest"}}),t("FormButton",{attrs:{action:"create"}})],1)],1)],1)},Ke=[];const P={};var Ee=v(C,he,Ke,!1,Te,null,null,null);function Te(e){for(let n in P)this[n]=P[n]}const nt=function(){return Ee.exports}();export{nt as default};
