import{U as w}from"./arrow-down-on-square.bf61cdc5.js";import{T as b}from"./trash.78f57a7a.js";import{L as k,bs as A,b$ as D,bG as I,c,r as T,aI as q,aF as E,n as L}from"./index.fc8bdabe.js";import{S as N}from"./ScorecardInput.a9983097.js";import{u as R}from"./useCompanyScorecardTemplates.9d84eca8.js";import{u as $}from"./useProducts.216929bd.js";import{u as U}from"./useScorecardTemplates.99d6c0ff.js";import{u as F}from"./useBlackKiteEntities.725737fd.js";import{u as M}from"./useInDepthScorecardsV2.567d940c.js";import{u as P}from"./useUsers.f878cbf1.js";import{e as l}from"./attributeValue.ea53a720.js";import"./arrow-path.24b87f73.js";import"./SupplierSelect.637f9f8c.js";import"./exclamation-triangle.54812a62.js";import"./ToolTip.61cebbda.js";import"./ObjectDisplay.8a8c3342.js";import"./BlackKiteProgressBar.73d739fe.js";import"./GradeLetterDisplay.97652212.js";import"./BlackKiteSummaryDescription.7a14a54f.js";import"./ratingScoreDescription.3b48b1ea.js";import"./BlackKiteRiskVectorsDisplay.1b4d3559.js";import"./CollapsibleSection.6950f4ba.js";import"./TransitionExpand.8e90e13f.js";import"./_baseIteratee.06556f52.js";import"./_Uint8Array.98e6cc41.js";import"./keys.4f31c396.js";import"./_baseIsEqual.ca5ac815.js";import"./_arrayMap.dcea68f3.js";import"./_baseUniq.5d442918.js";import"./AnalystSelect.ecb76744.js";import"./StatusInput.9acab851.js";import"./DynamicForm.1129fd80.js";import"./TemplateSelect.39d39994.js";const u={};u.setup=(e,o)=>{const t=D("id"),r=[$.list(),U.list(),F.list(t)],n=P.list(),i=I.read(t),p=R.read(t),m=c(()=>{if(i.data.value){const{id:s,name:a}=i.data.value;return{company:{id:s,name:a}}}}),_=c(()=>{var s;return(s=n.data.value)==null?void 0:s.map(a=>({id:l(a,"sub"),email:l(a,"email"),name:l(a,"name"),title:l(a,"custom:title")})).find(a=>a.email==="consultingservices@whitehawk.com")}),d=T(),f=c({get(){var S;if(d.value)return d.value;const s=new Date,a=s.getUTCFullYear(),B=Math.ceil((s.getMonth()+1)/4);return{type:"in-depth-bk",template:((S=p.data.value)==null?void 0:S.split("/")[1])||"",data:{buyer:m.value,analyst:_.value,supplier:null,focusAreas:[null,null,null],bundle:{BASIC:{groups:[null,null]},BALANCED:{groups:[null,null,null]},ADVANCED:{groups:[null,null,null,null]}},includeCmmc:!0,status:{state:"IN_PROGRESS",year:a,quarter:`Q${B}`}}}},set(s){d.value=s}}),g=c(()=>Boolean(n.data.value&&i.data.value)),x=q(),v=E(),y=M.create(t);async function h(){f.value&&(await y.mutateAsync(f.value)&&(v.success("Created Successfully"),x.push(`/admin/companies/${t.value}/scorecards/in-depth/rating-service-2`)),v.error("Something went wrong."))}return{id:t,queries:r,users:n,scorecard:f,ready:g,scorecardCreate:y,create:h}};u.components=Object.assign({LoadingSpinner:k,BackButton:A,ScorecardInput:N,SaveSvg:w,TrashSvg:b},u.components);var V=function(){var e=this,o=e.$createElement,t=e._self._c||o;return t("section",{staticClass:"space-y-4"},[e.ready?[t("div",{staticClass:"flex flex-col space-y-4 sm:flex-row sm:items-center sm:space-y-0 sm:space-x-4"},[t("div",[t("BackButton",{attrs:{link:`/admin/companies/${e.id}/scorecards/in-depth/rating-service-2`}})],1),t("h3",{staticClass:"font-display text-xl font-semibold"},[e._v("New Scorecard")])]),t("form",{on:{submit:function(r){return r.preventDefault(),e.create.apply(null,arguments)}}},[t("BaseSimpleCard",{staticClass:"divide-y"},[t("BaseVueQueries",{attrs:{queries:e.queries},scopedSlots:e._u([{key:"success",fn:function(r){var n=r[0],i=r[1],p=r[2];return[t("ScorecardInput",{attrs:{id:e.id,users:e.users.data.value||[],entities:p,products:n,templates:i},model:{value:e.scorecard,callback:function(m){e.scorecard=m},expression:"scorecard"}})]}}])}),t("div",{staticClass:"flex flex-col space-y-2 p-4 md:flex-row md:space-x-2 md:space-y-0"},[t("BaseButton",{staticClass:"space-x-2",attrs:{disabled:e.scorecardCreate.isLoading.value}},[t("SaveSvg",{staticClass:"h-auto w-4 xl:w-5"}),t("span",[e._v("Create")])],1),t("BaseButton",{staticClass:"space-x-2",attrs:{type:"button","display-type":"danger",action:"secondary",to:"..",append:""}},[t("TrashSvg",{staticClass:"h-auto w-4 xl:w-5"}),t("span",[e._v("Cancel")])],1)],1)],1)],1)]:[t("LoadingSpinner")]],2)},j=[];const C={};var G=L(u,V,j,!1,O,null,null,null);function O(e){for(let o in C)this[o]=C[o]}const wt=function(){return G.exports}();export{wt as default};