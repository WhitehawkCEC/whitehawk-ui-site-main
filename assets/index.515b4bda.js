import{U as w}from"./arrow-down-on-square.bf61cdc5.js";import{T as b}from"./trash.78f57a7a.js";import{L as k,b_ as A,bE as D,d as c,r as E,aJ as T,aG as q,n as I}from"./index.e7f697eb.js";import{B as L}from"./BackButton.8f96cce7.js";import{S as N}from"./ScorecardInput.6bd2f619.js";import{u as R}from"./useCompanyScorecardTemplates.b70d1b10.js";import{u as U}from"./useProducts.cfd01fd9.js";import{u as $}from"./useScorecardTemplates.0602f4de.js";import{u as M}from"./useBlackKiteEntities.43ca2e2d.js";import{u as P}from"./useInDepthScorecardsV2.1ecafbcc.js";import{u as V}from"./useUsers.960d8884.js";import{e as l}from"./attributeValue.ea53a720.js";import"./chevron-left.0808b01b.js";import"./arrow-path.24b87f73.js";import"./SupplierSelect.368a801a.js";import"./exclamation-triangle.54812a62.js";import"./ToolTip.7116193f.js";import"./ObjectDisplay.8a7c8f94.js";import"./BlackKiteProgressBar.2824d0f5.js";import"./GradeLetterDisplay.a742c0c6.js";import"./BlackKiteSummaryDescription.0553d946.js";import"./ratingScoreDescription.3b48b1ea.js";import"./BlackKiteRiskVectorsDisplay.03646ec8.js";import"./CollapsibleSection.dadc6176.js";import"./TransitionExpand.78bc4a1e.js";import"./_baseIteratee.f07eb529.js";import"./_Uint8Array.a229e6e8.js";import"./keys.fa583e17.js";import"./_baseIsEqual.3f1b8e41.js";import"./_arrayMap.dcea68f3.js";import"./_baseUniq.3e1d7199.js";import"./AnalystSelect.4b0d8130.js";import"./StatusInput.d09efbf6.js";import"./DynamicForm.f06158c9.js";import"./TemplateSelect.f40c5ef8.js";const u={};u.setup=(e,o)=>{const t=A("id"),r=[U.list(),$.list(),M.list(t)],n=V.list(),i=D.read(t),p=R.read(t),m=c(()=>{if(i.data.value){const{id:s,name:a}=i.data.value;return{company:{id:s,name:a}}}}),C=c(()=>{var s;return(s=n.data.value)==null?void 0:s.map(a=>({id:l(a,"sub"),email:l(a,"email"),name:l(a,"name"),title:l(a,"custom:title")})).find(a=>a.email==="consultingservices@whitehawk.com")}),d=E(),f=c({get(){var S;if(d.value)return d.value;const s=new Date,a=s.getUTCFullYear(),B=Math.ceil((s.getMonth()+1)/4);return{type:"in-depth-bk",template:((S=p.data.value)==null?void 0:S.split("/")[1])||"",data:{buyer:m.value,analyst:C.value,supplier:null,focusAreas:[null,null,null],bundle:{BASIC:{groups:[null,null]},BALANCED:{groups:[null,null,null]},ADVANCED:{groups:[null,null,null,null]}},includeCmmc:!0,status:{state:"IN_PROGRESS",year:a,quarter:`Q${B}`}}}},set(s){d.value=s}}),g=c(()=>Boolean(n.data.value&&i.data.value)),x=T(),v=q(),y=P.create(t);async function h(){f.value&&(await y.mutateAsync(f.value)&&(v.success("Created Successfully"),x.push(`/admin/companies/${t.value}/scorecards/in-depth/rating-service-2`)),v.error("Something went wrong."))}return{id:t,queries:r,users:n,scorecard:f,ready:g,scorecardCreate:y,create:h}};u.components=Object.assign({LoadingSpinner:k,BackButton:L,ScorecardInput:N,SaveSvg:w,TrashSvg:b},u.components);var j=function(){var e=this,o=e.$createElement,t=e._self._c||o;return t("section",{staticClass:"space-y-4"},[e.ready?[t("div",{staticClass:"flex flex-col space-y-4 sm:flex-row sm:items-center sm:space-y-0 sm:space-x-4"},[t("div",[t("BackButton",{attrs:{link:`/admin/companies/${e.id}/scorecards/in-depth/rating-service-2`}})],1),t("h3",{staticClass:"font-display text-xl font-semibold"},[e._v("New Scorecard")])]),t("form",{on:{submit:function(r){return r.preventDefault(),e.create.apply(null,arguments)}}},[t("BaseSimpleCard",{staticClass:"divide-y"},[t("BaseVueQueries",{attrs:{queries:e.queries},scopedSlots:e._u([{key:"success",fn:function(r){var n=r[0],i=r[1],p=r[2];return[t("ScorecardInput",{attrs:{id:e.id,users:e.users.data.value||[],entities:p,products:n,templates:i},model:{value:e.scorecard,callback:function(m){e.scorecard=m},expression:"scorecard"}})]}}])}),t("div",{staticClass:"flex flex-col space-y-2 p-4 md:flex-row md:space-x-2 md:space-y-0"},[t("BaseButton",{staticClass:"space-x-2",attrs:{disabled:e.scorecardCreate.isLoading.value}},[t("SaveSvg",{staticClass:"h-auto w-4 xl:w-5"}),t("span",[e._v("Create")])],1),t("BaseButton",{staticClass:"space-x-2",attrs:{type:"button","display-type":"danger",action:"secondary",to:"..",append:""}},[t("TrashSvg",{staticClass:"h-auto w-4 xl:w-5"}),t("span",[e._v("Cancel")])],1)],1)],1)],1)]:[t("LoadingSpinner")]],2)},F=[];const _={};var G=I(u,j,F,!1,O,null,null,null);function O(e){for(let o in _)this[o]=_[o]}const kt=function(){return G.exports}();export{kt as default};