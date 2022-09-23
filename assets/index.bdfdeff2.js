import{aB as F,n as g,ay as N,c as d,r as b,aA as Q,L as U,bX as V,bB as A,aI as G,aO as O,aP as T}from"./index.7b120442.js";import{B as z}from"./BackButton.e90e26bd.js";import{B as K}from"./BatchCompanySelect.ad2faaa9.js";import{A as X}from"./AnalystSelect.7bed7e0c.js";import{S as Y}from"./StatusInput.634718bc.js";import{T as H}from"./TemplateSelect.c361db0a.js";import{e as c}from"./attributeValue.ea53a720.js";import{u as J}from"./useCompanyScorecardTemplates.ff884356.js";import{u as W}from"./useScorecardTemplates.94d5796d.js";import{u as Z}from"./useBlackKiteEntities.a693c821.js";import{u as ee}from"./useUsers.78a16b32.js";import"./chevron-left.0808b01b.js";import"./ToolTip.ae87019a.js";import"./exclamation-triangle.54812a62.js";import"./ObjectDisplay.d86fe94a.js";import"./DynamicForm.54ce95a5.js";const S={};S.props={value:{key:"value",required:!1,type:Array},options:{key:"options",required:!0,type:Array}};S.setup=(e,n)=>{const t=e,a=n.emit;return{proxy:F(t,a)}};var te=function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("BaseLabel",{staticClass:"flex flex-col p-4 lg:grid lg:grid-cols-3 lg:items-center lg:gap-1"},[t("span",{staticClass:"space-x-1"},[e._v(" Companies "),t("span",{staticClass:"text-red-500"},[e._v("*")])]),t("BaseSelect",{staticClass:"lg:col-span-2",attrs:{multiple:""},model:{value:e.proxy,callback:function(a){e.proxy=a},expression:"proxy"}},[t("option",{domProps:{value:null}}),e._l(e.options,function(a){return t("option",{key:a.id,domProps:{value:a}},[t("div",{staticClass:"flex space-x-2"},[t("span",{staticClass:"text-semibold"},[e._v(" "+e._s(a.name)+" ")]),t("span",{staticClass:"text-sm text-gray-500"},[e._v("("+e._s(a.domain)+")")])])])})],2)],1)},ae=[];const P={};var se=g(S,te,ae,!1,ne,null,null,null);function ne(e){for(let n in P)this[n]=P[n]}const le=function(){return se.exports}(),C={};C.props={value:{key:"value",required:!1,type:null},users:{key:"users",required:!0,type:Array},entities:{key:"entities",required:!0,type:Array},templates:{key:"templates",required:!0,type:Array},companies:{key:"companies",required:!0,type:Array}};C.setup=(e,n)=>{const t=e,a=n.emit,r=N(t,a),f=d(()=>t.users.filter(s=>c(s,"email").includes("@whitehawk")).map(s=>({id:c(s,"sub"),name:c(s,"name"),title:c(s,"custom:title"),email:c(s,"email"),phone:c(s,"phone_number")})).sort((s,v)=>s.email.localeCompare(v.email))),y=d(()=>t.entities.map(s=>({id:s.CompanyId,name:s.CompanyName,domain:s.DomainName}))),u=d(()=>t.templates.map(({key:s})=>s)),p=b({year:r.value.year,quarter:r.value.quarter,state:r.value.status});return Q(p,s=>{s&&(r.value.status=p.value.state,r.value.year=p.value.year,r.value.quarter=p.value.quarter)},{immediate:!0}),{proxy:r,analystOptions:f,entityOptions:y,templateOptions:u,status:p}};C.components=Object.assign({TemplateSelect:H,BatchCompanySelect:K,AnalystSelect:X,StatusInput:Y,BatchEntitiesSelect:le},C.components);var oe=function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("section",{staticClass:"flex flex-col divide-y"},[t("div",{staticClass:"flex flex-col divide-y"},[t("h3",{staticClass:"p-4 font-display text-lg font-semibold"},[e._v("Template")]),t("TemplateSelect",{attrs:{options:e.templateOptions},model:{value:e.proxy.template,callback:function(a){e.$set(e.proxy,"template",a)},expression:"proxy.template"}})],1),t("div",{staticClass:"flex flex-col divide-y"},[t("h3",{staticClass:"p-4 font-display text-lg font-semibold"},[e._v("Buyer Information")]),t("BatchCompanySelect",{attrs:{options:e.companies},model:{value:e.proxy.buyerCompany,callback:function(a){e.$set(e.proxy,"buyerCompany",a)},expression:"proxy.buyerCompany"}})],1),t("div",{staticClass:"flex flex-col divide-y"},[t("h3",{staticClass:"p-4 font-display text-lg font-semibold"},[e._v(" Analyst Information ")]),t("AnalystSelect",{attrs:{options:e.analystOptions},model:{value:e.proxy.analystInfo,callback:function(a){e.$set(e.proxy,"analystInfo",a)},expression:"proxy.analystInfo"}})],1),t("div",{staticClass:"flex flex-col divide-y"},[t("h3",{staticClass:"p-4 font-display text-lg font-semibold"},[e._v("Status")]),t("StatusInput",{model:{value:e.status,callback:function(a){e.status=a},expression:"status"}})],1),t("div",{staticClass:"flex flex-col divide-y"},[t("h3",{staticClass:"p-4 font-display text-lg font-semibold"},[e._v("Select Companies")]),t("BatchEntitiesSelect",{attrs:{options:e.entityOptions},model:{value:e.proxy.entities,callback:function(a){e.$set(e.proxy,"entities",a)},expression:"proxy.entities"}})],1)])},ie=[];const E={};var re=g(C,oe,ie,!1,ce,null,null,null);function ce(e){for(let n in E)this[n]=E[n]}const ue=function(){return re.exports}(),h={};h.setup=(e,n)=>{const t=V("id"),a=b(!1),r=[A.list(),Z.list(t),W.list()],f=J.read(t),y=ee.list(),u=d(()=>{var o;return(o=y.data.value)==null?void 0:o.map(i=>({id:c(i,"sub"),email:c(i,"email"),name:c(i,"name"),title:c(i,"custom:title"),phone:c(i,"phone_number")})).find(i=>i.email==="consultingservices@whitehawk.com")}),p=A.read(t),s=d(()=>p.data.value),v=b(),l=d({get(){var m,x;if(v.value)return v.value;const o=new Date,i=o.getUTCFullYear(),_=`Q${Math.ceil((o.getMonth()+1)/4)}`;return{id:(m=s.value)==null?void 0:m.id,buyerCompany:s.value,analystInfo:u.value,template:((x=f.data.value)==null?void 0:x.split("/")[1])||"",year:i,quarter:"Q"+_,status:"IN_PROGRESS",includeCmmc:!0,entities:[]}},set(o){v.value=o}}),j=d(()=>l.value?!(l.value.entities.length>0&&l.value.analystInfo&&l.value.buyerCompany&&l.value.status&&l.value.template):!0);async function D(){var i,_,m,x,$,k,q,w,I;a.value=!0;const{data:o}=await O.post(`${T}/companies/${t.value}/batch/generate/scorecards-v2`,{id:(i=l.value)==null?void 0:i.id,buyerCompany:(_=l.value)==null?void 0:_.buyerCompany,analystInfo:(m=l.value)==null?void 0:m.analystInfo,status:{year:(x=l.value)==null?void 0:x.year,quarter:($=l.value)==null?void 0:$.quarter,state:(k=l.value)==null?void 0:k.status},includeCmmc:(q=l.value)==null?void 0:q.includeCmmc,template:(w=l.value)==null?void 0:w.template,supplierInfos:(I=l.value)==null?void 0:I.entities});B(o.id),o&&B(o.id)}const L=G();async function B(o){await M(o),a.value=!1,L.push(`/admin/companies/${t.value}/scorecards/batch/rating-service-2/${o}`)}async function M(o){let i=!0;do(await O.get(`${T}/companies/${t.value}/scorecards/docx/${o}/status`)).data.length===0?i=!1:await new Promise(m=>setTimeout(m,2e3));while(i)}return{isLoading:a,queries:r,users:y,batch:l,isDisabled:j,generate:D}};h.components=Object.assign({BackButton:z,BatchScorecardInputV2:ue,LoadingSpinner:U},h.components);var pe=function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("div",{staticClass:"space-y-6"},[t("div",{staticClass:"flex flex-col space-y-4 sm:flex-row sm:items-center sm:space-y-0 sm:space-x-4"},[t("BackButton"),t("BaseTypography",{attrs:{variant:"h5",component:"h2"}},[e._v(" Create New Batch ")])],1),t("BaseSimpleCard",[t("BaseVueQueries",{attrs:{queries:e.queries},scopedSlots:e._u([{key:"success",fn:function(a){var r=a[0],f=a[1],y=a[2];return[t("form",{staticClass:"divide-y",on:{submit:function(u){return u.preventDefault(),e.generate.apply(null,arguments)}}},[t("BatchScorecardInputV2",{attrs:{users:e.users.data.value||[],companies:r,entities:f,templates:y},model:{value:e.batch,callback:function(u){e.batch=u},expression:"batch"}}),t("div",{staticClass:"p-4"},[t("BaseButton",{staticClass:"w-full md:w-auto",attrs:{disabled:e.isDisabled}},[e.isLoading?t("LoadingSpinner"):t("span",[e._v("Generate Batch")])],1)],1)],1)]}}])})],1)],1)},me=[];const R={};var de=g(h,pe,me,!1,ye,null,null,null);function ye(e){for(let n in R)this[n]=R[n]}const Oe=function(){return de.exports}();export{Oe as default};
