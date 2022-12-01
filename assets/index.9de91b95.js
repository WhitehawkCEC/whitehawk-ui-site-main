import{U as w}from"./arrow-down-on-square.bf61cdc5.js";import{T as b}from"./trash.78f57a7a.js";import{L as A,bt as k,c5 as T,bH as D,c as i,r as q,aK as E,aF as I,n as L}from"./index.575adb5e.js";import{S as N}from"./ScorecardInput.4d5a816a.js";import{u as R}from"./useCompanyScorecardTemplates.c918c73b.js";import{u as U}from"./useProducts.1c55b98f.js";import{u as F}from"./useScorecardTemplates.00a82676.js";import{u as M}from"./useBlackKiteEntities.e5b46559.js";import{u as P}from"./useInDepthScorecardsV2.14a44ab8.js";import{u as V}from"./useUsers.52254c3b.js";import{e as u}from"./attributeValue.ea53a720.js";import"./arrow-path.24b87f73.js";import"./BlackKiteProgressBar.9a501b61.js";import"./index.ebbce841.js";import"./ToolTip.652e85ac.js";import"./GradeLetterDisplay.a7140103.js";import"./BlackKiteReportSummary.22d39e17.js";import"./BlackKiteRiskVectorsDisplay.58d23997.js";import"./ratingScoreDescription.dc21462c.js";import"./SupplierSelect.65801748.js";import"./TransitionExpand.27b4cea5.js";import"./AnalystSelect.67962988.js";import"./_baseIteratee.b0bfe489.js";import"./_Uint8Array.329a0619.js";import"./keys.ea8b65b3.js";import"./_baseIsEqual.f5cb40e3.js";import"./_arrayMap.dcea68f3.js";import"./_baseUniq.337f472d.js";import"./StatusInput.db5f7183.js";import"./DynamicForm.31c94f4e.js";import"./TemplateSelect.f67baff0.js";const l={};l.setup=(e,o)=>{const t=T("id"),r=[U.list(),F.list(),M.list(t)],n=V.list(),c=D.read(t),p=R.get(t),m=i(()=>{if(c.data.value){const{id:a,name:s}=c.data.value;return{company:{id:a,name:s}}}}),_=i(()=>{var a;return(a=n.data.value)==null?void 0:a.map(s=>({id:u(s,"sub"),email:u(s,"email"),name:u(s,"name"),title:u(s,"custom:title")})).find(s=>s.email==="consultingservices@whitehawk.com")}),d=q(),v=i({get(){var S;if(d.value)return d.value;const a=new Date,s=a.getUTCFullYear(),B=Math.ceil((a.getMonth()+1)/4);return{type:"in-depth-bk",template:((S=p.data.value)==null?void 0:S.split("/")[1])||"",data:{buyer:m.value,analyst:_.value,supplier:null,focusAreas:[null,null,null],bundle:{BASIC:{groups:[null,null]},BALANCED:{groups:[null,null,null]},ADVANCED:{groups:[null,null,null,null]}},includeCmmc:!0,status:{state:"IN_PROGRESS",year:s,quarter:`Q${B}`}}}},set(a){d.value=a}}),C=i(()=>Boolean(n.data.value&&c.data.value)),h=E(),f=I(),y=P.create(t);async function x(){v.value&&(await y.mutateAsync(v.value)&&(f.success("Created Successfully"),h.push(`/admin/companies/${t.value}/scorecards/in-depth/rating-service-2`)),f.error("Something went wrong."))}return{id:t,queries:r,users:n,scorecard:v,ready:C,scorecardCreate:y,create:x}};l.components=Object.assign({LoadingSpinner:A,BackButton:k,ScorecardInput:N,SaveSvg:w,TrashSvg:b},l.components);var $=function(){var e=this,o=e.$createElement,t=e._self._c||o;return t("section",{staticClass:"space-y-4"},[e.ready?[t("div",{staticClass:"flex flex-col space-y-4 sm:flex-row sm:items-center sm:space-y-0 sm:space-x-4"},[t("BackButton"),t("BaseTypography",{attrs:{variant:"h5",component:"h2"}},[e._v(" New Scorecard ")])],1),t("form",{on:{submit:function(r){return r.preventDefault(),e.create.apply(null,arguments)}}},[t("BaseSimpleCard",{staticClass:"divide-y"},[t("BaseVueQueries",{attrs:{queries:e.queries},scopedSlots:e._u([{key:"success",fn:function(r){var n=r[0],c=r[1],p=r[2];return[t("ScorecardInput",{attrs:{id:e.id,users:e.users.data.value||[],entities:p,products:n,templates:c},model:{value:e.scorecard,callback:function(m){e.scorecard=m},expression:"scorecard"}})]}}])}),t("div",{staticClass:"flex flex-col space-y-2 p-4 md:flex-row md:space-x-2 md:space-y-0"},[t("BaseButton",{staticClass:"space-x-2",attrs:{disabled:e.scorecardCreate.isLoading.value}},[t("SaveSvg",{staticClass:"h-auto w-4 xl:w-5"}),t("span",[e._v("Create")])],1),t("BaseButton",{staticClass:"space-x-2",attrs:{type:"button","display-type":"danger",action:"secondary",to:"..",append:""}},[t("TrashSvg",{staticClass:"h-auto w-4 xl:w-5"}),t("span",[e._v("Cancel")])],1)],1)],1)],1)]:t("LoadingSpinner")],2)},j=[];const g={};var K=L(l,$,j,!1,O,null,null,null);function O(e){for(let o in g)this[o]=g[o]}const xt=function(){return K.exports}();export{xt as default};