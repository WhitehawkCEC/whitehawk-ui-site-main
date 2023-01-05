import{aB as F,n as g,ax as N,d as p,b,az as Q,bs as V,L as G,c7 as U,bG as A,aK as z,aP as O,aQ as T}from"./index.78dd2457.js";import{B as K,S as Y}from"./StatusInput.de9b50c0.js";import{A as H}from"./AnalystSelect.c51b7491.js";import{T as J}from"./TemplateSelect.316b51e0.js";import{e as c}from"./attributeValue.ea53a720.js";import{u as W}from"./useCompanyScorecardTemplates.b1227ed1.js";import{u as X}from"./useScorecardTemplates.efc8918b.js";import{u as Z}from"./useBlackKiteEntities.9038e849.js";import{u as ee}from"./useUsers.60e5f24f.js";import"./ToolTip.6e676252.js";import"./ObjectDisplay.95c31bdb.js";import"./DynamicForm.d83899aa.js";const S={};S.props={value:{key:"value",required:!1,type:Array},options:{key:"options",required:!0,type:Array}};S.setup=(e,n)=>{const t=e,a=n.emit;return{proxy:F(t,a)}};var te=function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("BaseLabel",{staticClass:"flex flex-col p-4 lg:grid lg:grid-cols-3 lg:items-center lg:gap-1"},[t("span",{staticClass:"space-x-1"},[e._v(" Companies "),t("span",{staticClass:"text-red-500"},[e._v("*")])]),t("BaseSelect",{staticClass:"lg:col-span-2",attrs:{multiple:""},model:{value:e.proxy,callback:function(a){e.proxy=a},expression:"proxy"}},[t("option",{domProps:{value:null}}),e._l(e.options,function(a){return t("option",{key:a.id,domProps:{value:a}},[t("div",{staticClass:"flex space-x-2"},[t("span",{staticClass:"text-semibold"},[e._v(" "+e._s(a.name)+" ")]),t("span",{staticClass:"text-sm text-gray-500"},[e._v("("+e._s(a.domain)+")")])])])})],2)],1)},ae=[];const E={};var se=g(S,te,ae,!1,ne,null,null,null);function ne(e){for(let n in E)this[n]=E[n]}const le=function(){return se.exports}(),x={};x.props={value:{key:"value",required:!1,type:null},users:{key:"users",required:!0,type:Array},entities:{key:"entities",required:!0,type:Array},templates:{key:"templates",required:!0,type:Array},companies:{key:"companies",required:!0,type:Array}};x.setup=(e,n)=>{const t=e,a=n.emit,r=N(t,a),v=p(()=>t.companies.filter(s=>s.status==="ACTIVE")),y=p(()=>t.users.filter(s=>c(s,"email").includes("@whitehawk")).map(s=>({id:c(s,"sub"),name:c(s,"name"),title:c(s,"custom:title"),email:c(s,"email"),phone:c(s,"phone_number")})).sort((s,l)=>s.email.localeCompare(l.email))),m=p(()=>t.entities.map(s=>({id:s.CompanyId,name:s.CompanyName,domain:s.DomainName}))),h=p(()=>t.templates.map(({key:s})=>s)),u=b({year:r.value.year,quarter:r.value.quarter,state:r.value.status});return Q(u,s=>{s&&(r.value.status=u.value.state,r.value.year=u.value.year,r.value.quarter=u.value.quarter)},{immediate:!0}),{proxy:r,consumerOptions:v,analystOptions:y,entityOptions:m,templateOptions:h,status:u}};x.components=Object.assign({TemplateSelect:J,BatchCompanySelect:K,AnalystSelect:H,StatusInput:Y,BatchEntitiesSelect:le},x.components);var oe=function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("section",{staticClass:"flex flex-col divide-y"},[t("div",{staticClass:"flex flex-col divide-y"},[t("h3",{staticClass:"p-4 font-display text-lg font-semibold"},[e._v("Template")]),t("TemplateSelect",{attrs:{options:e.templateOptions},model:{value:e.proxy.template,callback:function(a){e.$set(e.proxy,"template",a)},expression:"proxy.template"}})],1),t("div",{staticClass:"flex flex-col divide-y"},[t("h3",{staticClass:"p-4 font-display text-lg font-semibold"},[e._v("Buyer Information")]),t("BatchCompanySelect",{attrs:{options:e.consumerOptions},model:{value:e.proxy.buyerCompany,callback:function(a){e.$set(e.proxy,"buyerCompany",a)},expression:"proxy.buyerCompany"}})],1),t("div",{staticClass:"flex flex-col divide-y"},[t("h3",{staticClass:"p-4 font-display text-lg font-semibold"},[e._v(" Analyst Information ")]),t("AnalystSelect",{attrs:{options:e.analystOptions},model:{value:e.proxy.analystInfo,callback:function(a){e.$set(e.proxy,"analystInfo",a)},expression:"proxy.analystInfo"}})],1),t("div",{staticClass:"flex flex-col divide-y"},[t("h3",{staticClass:"p-4 font-display text-lg font-semibold"},[e._v("Status")]),t("StatusInput",{model:{value:e.status,callback:function(a){e.status=a},expression:"status"}})],1),t("div",{staticClass:"flex flex-col divide-y"},[t("h3",{staticClass:"p-4 font-display text-lg font-semibold"},[e._v("Select Companies")]),t("BatchEntitiesSelect",{attrs:{options:e.entityOptions},model:{value:e.proxy.entities,callback:function(a){e.$set(e.proxy,"entities",a)},expression:"proxy.entities"}})],1)])},ie=[];const P={};var re=g(x,oe,ie,!1,ce,null,null,null);function ce(e){for(let n in P)this[n]=P[n]}const ue=function(){return re.exports}(),C={};C.setup=(e,n)=>{const t=U("id"),a=b(!1),r=[A.list(),Z.list(t),X.list()],v=W.get(t),y=ee.list(),m=p(()=>{var o;return(o=y.data.value)==null?void 0:o.map(i=>({id:c(i,"sub"),email:c(i,"email"),name:c(i,"name"),title:c(i,"custom:title"),phone:c(i,"phone_number")})).find(i=>i.email==="consultingservices@whitehawk.com")}),h=A.read(t),u=p(()=>h.data.value),s=b(),l=p({get(){var d,_;if(s.value)return s.value;const o=new Date,i=o.getUTCFullYear(),f=`Q${Math.ceil((o.getMonth()+1)/4)}`;return{id:(d=u.value)==null?void 0:d.id,buyerCompany:u.value,analystInfo:m.value,template:((_=v.data.value)==null?void 0:_.split("/")[1])||"",year:i,quarter:"Q"+f,status:"IN_PROGRESS",includeCmmc:!0,entities:[]}},set(o){s.value=o}}),j=p(()=>l.value?!(l.value.entities.length>0&&l.value.analystInfo&&l.value.buyerCompany&&l.value.status&&l.value.template):!0);async function D(){var i,f,d,_,B,k,q,w,I;a.value=!0;const{data:o}=await O.post(`${T}/companies/${t.value}/batch/generate/scorecards-v2`,{id:(i=l.value)==null?void 0:i.id,buyerCompany:(f=l.value)==null?void 0:f.buyerCompany,analystInfo:(d=l.value)==null?void 0:d.analystInfo,status:{year:(_=l.value)==null?void 0:_.year,quarter:(B=l.value)==null?void 0:B.quarter,state:(k=l.value)==null?void 0:k.status},includeCmmc:(q=l.value)==null?void 0:q.includeCmmc,template:(w=l.value)==null?void 0:w.template,supplierInfos:(I=l.value)==null?void 0:I.entities});$(o.id),o&&$(o.id)}const L=z();async function $(o){await M(o),a.value=!1,L.push(`/admin/companies/${t.value}/scorecards/batch/rating-service-2/${o}`)}async function M(o){let i=!0;do(await O.get(`${T}/companies/${t.value}/scorecards/docx/${o}/status`)).data.length===0?i=!1:await new Promise(d=>setTimeout(d,2e3));while(i)}return{isLoading:a,queries:r,users:y,batch:l,isDisabled:j,generate:D}};C.components=Object.assign({BackButton:V,BatchScorecardInputV2:ue,LoadingSpinner:G},C.components);var pe=function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("div",{staticClass:"space-y-6"},[t("div",{staticClass:"flex flex-col space-y-4 sm:flex-row sm:items-center sm:space-y-0 sm:space-x-4"},[t("BackButton"),t("BaseTypography",{attrs:{variant:"h5",component:"h2"}},[e._v(" Create New Batch ")])],1),t("BaseSimpleCard",[t("BaseVueQueries",{attrs:{queries:e.queries},scopedSlots:e._u([{key:"success",fn:function(a){var r=a[0],v=a[1],y=a[2];return[t("form",{staticClass:"divide-y",on:{submit:function(m){return m.preventDefault(),e.generate.apply(null,arguments)}}},[t("BatchScorecardInputV2",{attrs:{users:e.users.data.value||[],companies:r,entities:v,templates:y},model:{value:e.batch,callback:function(m){e.batch=m},expression:"batch"}}),t("div",{staticClass:"p-4"},[t("BaseButton",{staticClass:"w-full md:w-auto",attrs:{disabled:e.isDisabled}},[e.isLoading?t("LoadingSpinner"):t("span",[e._v("Generate Batch")])],1)],1)],1)]}}])})],1)],1)},me=[];const R={};var de=g(C,pe,me,!1,ye,null,null,null);function ye(e){for(let n in R)this[n]=R[n]}const qe=function(){return de.exports}();export{qe as default};
