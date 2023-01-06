import{bs as I,L as R,c7 as _,du as q,b as D,bG as b,d as l,dn as L,aK as T,n as E}from"./index.7eada971.js";import{B as V}from"./BatchScorecardInputV3.c355be85.js";import{u as $}from"./useCompanyScorecardTemplates.9afec3d9.js";import{u as A}from"./useScorecardTemplates.eec8a332.js";import{u as K}from"./useBlackKiteEntities.ae21e55d.js";import{u as M}from"./useUsers.5e461548.js";import{e as o}from"./attributeValue.ea53a720.js";import{s as Q}from"./index.0a5d914c.js";import{t as j}from"./index.cb2896fa.js";import"./StatusInput.a9f2a611.js";import"./ToolTip.de341942.js";import"./ObjectDisplay.0678adbb.js";import"./DynamicForm.c1da4a45.js";const m={};m.setup=(e,i)=>{const t=_("id"),n=_("subscriptionId"),p=q.create(t,n),d=D(!1),v=[b.list(),K.list(t),A.list()],f=$.get(t),y=M.list(),g=l(()=>{var c;return(c=y.data.value)==null?void 0:c.map(s=>({id:{value:o(s,"sub")},name:o(s,"name")||"",title:o(s,"custom:title")||"",email:o(s,"email"),phone:o(s,"phone_number")||""})).find(s=>s.email==="consultingservices@whitehawk.com")}),h=b.read(t),C=l(()=>{if(h.data.value)return{id:{value:h.data.value.id},name:h.data.value.name}}),a=Q(l(()=>{var u;const c=new Date,s=c.getUTCFullYear(),r=`Q${Math.ceil((c.getMonth()+1)/4)}`;return{id:t,company:C.value,analyst:g.value,template:((u=f.data.value)==null?void 0:u.split("/")[1])||"",status:{state:L.State.IN_PROGRESS,year:s,quarter:j(r)},includeCmmc:!0,entities:[]}})),S=l(()=>a.value?!(a.value.entities.length>0&&a.value.analyst&&a.value.company&&a.value.status&&a.value.template):!0),x=T();async function k(){var c,s,r;if(a.value){const u={company:a.value.company,analyst:a.value.analyst,status:a.value.status,includeCmmc:(c=a.value)==null?void 0:c.includeCmmc,template:a.value.template,entities:(s=a.value)==null?void 0:s.entities},{response:w}=await p.mutateAsync(u);(r=w.batchId)!=null&&r.value&&x.push(`/admin/companies/${t.value}/subscriptions/${n.value}/integrations/2/scorecards/batch`)}}return{isLoading:d,queries:v,users:y,batch:a,isDisabled:S,createBatch:k}};m.components=Object.assign({BackButton:I,BatchScorecardInputV3:V,LoadingSpinner:R},m.components);var F=function(){var e=this,i=e.$createElement,t=e._self._c||i;return t("div",{staticClass:"space-y-6"},[t("div",{staticClass:"flex flex-col space-y-4 sm:flex-row sm:items-center sm:space-y-0 sm:space-x-4"},[t("BackButton"),t("div",{staticClass:"flex flex-col -space-y-1"},[t("BaseTypography",{staticClass:"uppercase text-gray-500",attrs:{variant:"overline"}},[e._v(" Black Kite ")]),t("BaseTypography",{attrs:{variant:"h5",component:"h2"}},[e._v(" Batch Scorecard ")])],1)],1),t("BaseSimpleCard",[t("form",{staticClass:"divide-y",on:{submit:function(n){return n.preventDefault(),e.createBatch.apply(null,arguments)}}},[t("BaseVueQueries",{attrs:{queries:e.queries},scopedSlots:e._u([{key:"success",fn:function(n){var p=n[0],d=n[1],v=n[2];return[t("BatchScorecardInputV3",{attrs:{users:e.users.data.value||[],companies:p,entities:d,templates:v},model:{value:e.batch,callback:function(f){e.batch=f},expression:"batch"}})]}}])}),t("div",{staticClass:"p-4"},[t("BaseButton",{attrs:{disabled:e.isDisabled}},[e.isLoading?t("LoadingSpinner"):t("span",[e._v("Create Batch")])],1)],1)],1)])],1)},G=[];const B={};var O=E(m,F,G,!1,P,null,null,null);function P(e){for(let i in B)this[i]=B[i]}const nt=function(){return O.exports}();export{nt as default};