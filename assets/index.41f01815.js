import{U as w}from"./arrow-down-on-square.bf61cdc5.js";import{T as b}from"./trash.78f57a7a.js";import{L as A,bs as k,c7 as T,bG as D,c as i,r as E,aJ as q,aE as I,n as L}from"./index.f9aabd94.js";import{S as N}from"./ScorecardInput.233c81e6.js";import{u as R}from"./useCompanyScorecardTemplates.bb85e3e9.js";import{u as U}from"./useProducts.1a7dee4c.js";import{u as M}from"./useScorecardTemplates.7b3eb886.js";import{u as P}from"./useBlackKiteEntities.455d7de7.js";import{u as V}from"./useInDepthScorecardsV2.c006ec57.js";import{u as $}from"./useUsers.0058f024.js";import{e as u}from"./attributeValue.ea53a720.js";import"./arrow-path.24b87f73.js";import"./BlackKiteProgressBar.65117885.js";import"./index.ebbce841.js";import"./ToolTip.253b33fa.js";import"./GradeLetterDisplay.fd6d410f.js";import"./BlackKiteReportSummary.36a9b94f.js";import"./BlackKiteRiskVectorsDisplay.3cc3773f.js";import"./ratingScoreDescription.dc21462c.js";import"./SupplierSelect.0c706de9.js";import"./TransitionExpand.b5ac7a01.js";import"./ObjectDisplay.3d4792f1.js";import"./_baseIteratee.110fb052.js";import"./_Uint8Array.d5aa7bee.js";import"./keys.3575accf.js";import"./_baseIsEqual.971b49c9.js";import"./_arrayMap.dcea68f3.js";import"./_baseUniq.8e11bc32.js";import"./AnalystSelect.a37799b3.js";import"./StatusInput.3a4443c4.js";import"./DynamicForm.af1fe49d.js";import"./TemplateSelect.e234533e.js";const l={};l.setup=(e,o)=>{const t=T("id"),r=[U.list(),M.list(),P.list(t)],n=$.list(),c=D.read(t),p=R.get(t),m=i(()=>{if(c.data.value){const{id:a,name:s}=c.data.value;return{company:{id:a,name:s}}}}),_=i(()=>{var a;return(a=n.data.value)==null?void 0:a.map(s=>({id:u(s,"sub"),email:u(s,"email"),name:u(s,"name"),title:u(s,"custom:title")})).find(s=>s.email==="consultingservices@whitehawk.com")}),d=E(),v=i({get(){var S;if(d.value)return d.value;const a=new Date,s=a.getUTCFullYear(),B=Math.ceil((a.getMonth()+1)/4);return{type:"in-depth-bk",template:((S=p.data.value)==null?void 0:S.split("/")[1])||"",data:{buyer:m.value,analyst:_.value,supplier:null,focusAreas:[null,null,null],bundle:{BASIC:{groups:[null,null]},BALANCED:{groups:[null,null,null]},ADVANCED:{groups:[null,null,null,null]}},includeCmmc:!0,status:{state:"IN_PROGRESS",year:s,quarter:`Q${B}`}}}},set(a){d.value=a}}),C=i(()=>Boolean(n.data.value&&c.data.value)),h=q(),f=I(),y=V.create(t);async function x(){v.value&&(await y.mutateAsync(v.value)&&(f.success("Created Successfully"),h.push(`/admin/companies/${t.value}/scorecards/in-depth/rating-service-2`)),f.error("Something went wrong."))}return{id:t,queries:r,users:n,scorecard:v,ready:C,scorecardCreate:y,create:x}};l.components=Object.assign({LoadingSpinner:A,BackButton:k,ScorecardInput:N,SaveSvg:w,TrashSvg:b},l.components);var j=function(){var e=this,o=e.$createElement,t=e._self._c||o;return t("section",{staticClass:"space-y-4"},[e.ready?[t("div",{staticClass:"flex flex-col space-y-4 sm:flex-row sm:items-center sm:space-y-0 sm:space-x-4"},[t("BackButton"),t("BaseTypography",{attrs:{variant:"h5",component:"h2"}},[e._v(" New Scorecard ")])],1),t("form",{on:{submit:function(r){return r.preventDefault(),e.create.apply(null,arguments)}}},[t("BaseSimpleCard",{staticClass:"divide-y"},[t("BaseVueQueries",{attrs:{queries:e.queries},scopedSlots:e._u([{key:"success",fn:function(r){var n=r[0],c=r[1],p=r[2];return[t("ScorecardInput",{attrs:{id:e.id,users:e.users.data.value||[],entities:p,products:n,templates:c},model:{value:e.scorecard,callback:function(m){e.scorecard=m},expression:"scorecard"}})]}}])}),t("div",{staticClass:"flex flex-col space-y-2 p-4 md:flex-row md:space-x-2 md:space-y-0"},[t("BaseButton",{staticClass:"space-x-2",attrs:{disabled:e.scorecardCreate.isLoading.value}},[t("SaveSvg",{staticClass:"h-auto w-4 xl:w-5"}),t("span",[e._v("Create")])],1),t("BaseButton",{staticClass:"space-x-2",attrs:{type:"button","display-type":"danger",action:"secondary",to:"..",append:""}},[t("TrashSvg",{staticClass:"h-auto w-4 xl:w-5"}),t("span",[e._v("Cancel")])],1)],1)],1)],1)]:t("LoadingSpinner")],2)},F=[];const g={};var G=L(l,j,F,!1,O,null,null,null);function O(e){for(let o in g)this[o]=g[o]}const Bt=function(){return G.exports}();export{Bt as default};