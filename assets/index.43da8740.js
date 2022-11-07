import{U as w}from"./arrow-down-on-square.bf61cdc5.js";import{T as b}from"./trash.78f57a7a.js";import{L as k,bs as A,b$ as D,bG as I,c,r as T,aI as q,aF as E,n as L}from"./index.b66f7adf.js";import{S as N}from"./ScorecardInput.e85e3cb9.js";import{u as R}from"./useCompanyScorecardTemplates.a888dc56.js";import{u as $}from"./useProducts.20a8396b.js";import{u as U}from"./useScorecardTemplates.8b203bb1.js";import{u as F}from"./useBlackKiteEntities.a0ba1b16.js";import{u as M}from"./useInDepthScorecardsV2.afdb0370.js";import{u as P}from"./useUsers.59d5d98a.js";import{e as l}from"./attributeValue.ea53a720.js";import"./arrow-path.24b87f73.js";import"./SupplierSelect.cf086c1f.js";import"./exclamation-triangle.54812a62.js";import"./TransitionExpand.14926000.js";import"./ToolTip.764fdb80.js";import"./AnalystSelect.d4a237bd.js";import"./BlackKiteProgressBar.a64568de.js";import"./GradeLetterDisplay.37a49c1b.js";import"./BlackKiteReportSummary.1321dc9b.js";import"./BlackKiteRiskVectorsDisplay.c8ad897b.js";import"./ratingScoreDescription.dc21462c.js";import"./_baseIteratee.1fa29bda.js";import"./_Uint8Array.b5400606.js";import"./keys.d7cd2022.js";import"./_baseIsEqual.e46051b4.js";import"./_arrayMap.dcea68f3.js";import"./_baseUniq.2432bba8.js";import"./StatusInput.d850077e.js";import"./DynamicForm.5cf35254.js";import"./TemplateSelect.47bc7eea.js";const u={};u.setup=(e,o)=>{const t=D("id"),r=[$.list(),U.list(),F.list(t)],n=P.list(),i=I.read(t),p=R.get(t),m=c(()=>{if(i.data.value){const{id:s,name:a}=i.data.value;return{company:{id:s,name:a}}}}),C=c(()=>{var s;return(s=n.data.value)==null?void 0:s.map(a=>({id:l(a,"sub"),email:l(a,"email"),name:l(a,"name"),title:l(a,"custom:title")})).find(a=>a.email==="consultingservices@whitehawk.com")}),d=T(),f=c({get(){var S;if(d.value)return d.value;const s=new Date,a=s.getUTCFullYear(),B=Math.ceil((s.getMonth()+1)/4);return{type:"in-depth-bk",template:((S=p.data.value)==null?void 0:S.split("/")[1])||"",data:{buyer:m.value,analyst:C.value,supplier:null,focusAreas:[null,null,null],bundle:{BASIC:{groups:[null,null]},BALANCED:{groups:[null,null,null]},ADVANCED:{groups:[null,null,null,null]}},includeCmmc:!0,status:{state:"IN_PROGRESS",year:a,quarter:`Q${B}`}}}},set(s){d.value=s}}),_=c(()=>Boolean(n.data.value&&i.data.value)),x=q(),v=E(),y=M.create(t);async function h(){f.value&&(await y.mutateAsync(f.value)&&(v.success("Created Successfully"),x.push(`/admin/companies/${t.value}/scorecards/in-depth/rating-service-2`)),v.error("Something went wrong."))}return{id:t,queries:r,users:n,scorecard:f,ready:_,scorecardCreate:y,create:h}};u.components=Object.assign({LoadingSpinner:k,BackButton:A,ScorecardInput:N,SaveSvg:w,TrashSvg:b},u.components);var V=function(){var e=this,o=e.$createElement,t=e._self._c||o;return t("section",{staticClass:"space-y-4"},[e.ready?[t("div",{staticClass:"flex flex-col space-y-4 sm:flex-row sm:items-center sm:space-y-0 sm:space-x-4"},[t("div",[t("BackButton",{attrs:{link:`/admin/companies/${e.id}/scorecards/in-depth/rating-service-2`}})],1),t("h3",{staticClass:"font-display text-xl font-semibold"},[e._v("New Scorecard")])]),t("form",{on:{submit:function(r){return r.preventDefault(),e.create.apply(null,arguments)}}},[t("BaseSimpleCard",{staticClass:"divide-y"},[t("BaseVueQueries",{attrs:{queries:e.queries},scopedSlots:e._u([{key:"success",fn:function(r){var n=r[0],i=r[1],p=r[2];return[t("ScorecardInput",{attrs:{id:e.id,users:e.users.data.value||[],entities:p,products:n,templates:i},model:{value:e.scorecard,callback:function(m){e.scorecard=m},expression:"scorecard"}})]}}])}),t("div",{staticClass:"flex flex-col space-y-2 p-4 md:flex-row md:space-x-2 md:space-y-0"},[t("BaseButton",{staticClass:"space-x-2",attrs:{disabled:e.scorecardCreate.isLoading.value}},[t("SaveSvg",{staticClass:"h-auto w-4 xl:w-5"}),t("span",[e._v("Create")])],1),t("BaseButton",{staticClass:"space-x-2",attrs:{type:"button","display-type":"danger",action:"secondary",to:"..",append:""}},[t("TrashSvg",{staticClass:"h-auto w-4 xl:w-5"}),t("span",[e._v("Cancel")])],1)],1)],1)],1)]:[t("LoadingSpinner")]],2)},j=[];const g={};var G=L(u,V,j,!1,O,null,null,null);function O(e){for(let o in g)this[o]=g[o]}const ht=function(){return G.exports}();export{ht as default};
