import{U as w}from"./arrow-down-on-square.bf61cdc5.js";import{T as b}from"./trash.78f57a7a.js";import{L as A,bs as k,c7 as T,bG as D,d as i,b as q,aK as E,aF as I,n as L}from"./index.b52a2fa9.js";import{S as N}from"./ScorecardInput.e17f0042.js";import{u as R}from"./useCompanyScorecardTemplates.a10d20b8.js";import{u as U}from"./useProducts.53335341.js";import{u as F}from"./useScorecardTemplates.53d01242.js";import{u as M}from"./useBlackKiteEntities.a04900d0.js";import{u as P}from"./useInDepthScorecardsV2.037971b1.js";import{u as V}from"./useUsers.13a0e427.js";import{e as u}from"./attributeValue.ea53a720.js";import"./arrow-path.24b87f73.js";import"./BundleSolutionInput.c6768cd4.js";import"./GradeLetterDisplay.fd31a8ac.js";import"./BlackKiteProgressBar.4c2d6197.js";import"./index.ebbce841.js";import"./ToolTip.f56af92a.js";import"./ratingScoreDescription.3b48b1ea.js";import"./CollapsibleSection.b18fb108.js";import"./TransitionExpand.dd5c9b46.js";import"./_baseIteratee.df2d024d.js";import"./_Uint8Array.d7980cfd.js";import"./keys.84fd4876.js";import"./_baseIsEqual.f0f16939.js";import"./_arrayMap.dcea68f3.js";import"./AnalystSelect.9bb95de9.js";import"./ObjectDisplay.484d7fa5.js";import"./StatusInput.f8cd2b30.js";import"./DynamicForm.3d052b71.js";import"./SupplierSelect.ec1e1d43.js";import"./TemplateSelect.8c03d23f.js";const l={};l.setup=(t,o)=>{const e=T("id"),r=[U.list(),F.list(),M.list(e)],n=V.list(),c=D.read(e),p=R.get(e),m=i(()=>{if(c.data.value){const{id:a,name:s}=c.data.value;return{company:{id:a,name:s}}}}),_=i(()=>{var a;return(a=n.data.value)==null?void 0:a.map(s=>({id:u(s,"sub"),email:u(s,"email"),name:u(s,"name"),title:u(s,"custom:title")})).find(s=>s.email==="consultingservices@whitehawk.com")}),d=q(),v=i({get(){var S;if(d.value)return d.value;const a=new Date,s=a.getUTCFullYear(),B=Math.ceil((a.getMonth()+1)/4);return{type:"in-depth-bk",template:((S=p.data.value)==null?void 0:S.split("/")[1])||"",data:{buyer:m.value,analyst:_.value,supplier:null,focusAreas:[null,null,null],bundle:{BASIC:{groups:[null,null]},BALANCED:{groups:[null,null,null]},ADVANCED:{groups:[null,null,null,null]}},includeCmmc:!0,status:{state:"IN_PROGRESS",year:s,quarter:`Q${B}`}}}},set(a){d.value=a}}),C=i(()=>Boolean(n.data.value&&c.data.value)),h=E(),f=I(),y=P.create(e);async function x(){v.value&&(await y.mutateAsync(v.value)&&(f.success("Created Successfully"),h.push(`/admin/companies/${e.value}/scorecards/in-depth/rating-service-2`)),f.error("Something went wrong."))}return{id:e,queries:r,users:n,scorecard:v,ready:C,scorecardCreate:y,create:x}};l.components=Object.assign({LoadingSpinner:A,BackButton:k,ScorecardInput:N,SaveSvg:w,TrashSvg:b},l.components);var $=function(){var t=this,o=t.$createElement,e=t._self._c||o;return e("section",{staticClass:"space-y-4"},[t.ready?[e("div",{staticClass:"flex flex-col space-y-4 sm:flex-row sm:items-center sm:space-y-0 sm:space-x-4"},[e("BackButton"),e("BaseTypography",{attrs:{variant:"h5",component:"h2"}},[t._v(" New Scorecard ")])],1),e("form",{on:{submit:function(r){return r.preventDefault(),t.create.apply(null,arguments)}}},[e("BaseSimpleCard",{staticClass:"divide-y"},[e("BaseVueQueries",{attrs:{queries:t.queries},scopedSlots:t._u([{key:"success",fn:function(r){var n=r[0],c=r[1],p=r[2];return[e("ScorecardInput",{attrs:{id:t.id,users:t.users.data.value||[],entities:p,products:n,templates:c},model:{value:t.scorecard,callback:function(m){t.scorecard=m},expression:"scorecard"}})]}}])}),e("div",{staticClass:"flex flex-col space-y-2 p-4 md:flex-row md:space-x-2 md:space-y-0"},[e("BaseButton",{staticClass:"space-x-2",attrs:{disabled:t.scorecardCreate.isLoading.value}},[e("SaveSvg",{staticClass:"h-auto w-4 xl:w-5"}),e("span",[t._v("Create")])],1),e("BaseButton",{staticClass:"space-x-2",attrs:{type:"button","display-type":"danger",action:"secondary",to:"..",append:""}},[e("TrashSvg",{staticClass:"h-auto w-4 xl:w-5"}),e("span",[t._v("Cancel")])],1)],1)],1)],1)]:e("LoadingSpinner")],2)},j=[];const g={};var G=L(l,$,j,!1,K,null,null,null);function K(t){for(let o in g)this[o]=g[o]}const xe=function(){return G.exports}();export{xe as default};