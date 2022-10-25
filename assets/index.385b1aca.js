import{U as $}from"./arrow-down-on-square.bf61cdc5.js";import{T}from"./trash.78f57a7a.js";import{L as q,bs as L,b$ as N,bG as w,c as m,r as U,aI as D,aF as F,n as H}from"./index.1f71e50f.js";import{S as M}from"./ScorecardInput.2a8cbcbb.js";import{u as P}from"./useCompanyAccess.06da1808.js";import{u as Q}from"./useProducts.af7faf7e.js";import{u as R}from"./useBitsightCompanies.0ec868ef.js";import{u as W}from"./useInDepthScorecards.e05fd19e.js";import{u as j}from"./useUsers.689ef91d.js";import{e as p}from"./attributeValue.ea53a720.js";import"./SupplierSelect.b4181d62.js";import"./exclamation-triangle.54812a62.js";import"./ToolTip.6a353546.js";import"./AnalystSelect.b26870e3.js";import"./CisToCmmcMappingDisplay.64b3243b.js";import"./CollapsibleSection.7a1648ce.js";import"./TransitionExpand.861d9b26.js";import"./arrow-path.24b87f73.js";import"./RiskVectorSummary.4482060f.js";import"./GradeLetterDisplay.136aff58.js";import"./BitsightLevelBadge.562421ca.js";import"./usePerformanceEvaluations.b3b40058.js";import"./sortWorstRiskVectorsFirst.3076076d.js";import"./ratingScoreDescription.3b48b1ea.js";import"./index.b71e8145.js";import"./index.8cffbea9.js";import"./index.7a54c9f6.js";import"./index.87e44ac4.js";import"./index.e66fd7f7.js";const d={};d.setup=(t,i)=>{const e=N("id"),r=[Q.list(),R.list(e),P.list(e),w.list()],n=j.list(),c=w.read(e),l=m(()=>{if(c.data.value){const{id:a,name:s}=c.data.value;return{id:a,name:s}}}),o=m(()=>{var a;return(a=n.data.value)==null?void 0:a.map(s=>({id:p(s,"sub"),email:p(s,"email"),name:p(s,"name"),title:p(s,"custom:title")})).find(s=>s.email==="consultingservices@whitehawk.com")}),u=U(),v=m({get(){var g,C,h,_,x,S;if(u.value)return u.value;const a=new Date,s=a.getUTCFullYear(),I=Math.ceil((a.getMonth()+1)/3);return{data:{buyerId:(g=l.value)==null?void 0:g.id,"Buyer Company Name":(C=l.value)==null?void 0:C.name,analystId:(h=o.value)==null?void 0:h.id,"WhiteHawk Analyst Name":(_=o.value)==null?void 0:_.name,"WhiteHawk Analyst Title":(x=o.value)==null?void 0:x.title,"WhiteHawk Analyst Email":(S=o.value)==null?void 0:S.email},status:"In Progress",yearQuarterValue:`${s}/Q${I}`}},set(a){u.value=a}}),b=m(()=>Boolean(n.data.value&&c.data.value)),k=D(),f=F(),y=W.create(e);async function A(){if(v.value){const a=await y.mutateAsync(v.value);if(a){const{id:s}=a.data;f.success("Created Successfully"),k.push(`/admin/companies/${s.value}/scorecards/in-depth/rating-service-1`)}f.error("Something went wrong.")}}return{id:e,queries:r,users:n,scorecard:v,ready:b,scorecardCreate:y,create:A}};d.components=Object.assign({LoadingSpinner:q,BackButton:L,ScorecardInput:M,SaveSvg:$,TrashSvg:T},d.components);var E=function(){var t=this,i=t.$createElement,e=t._self._c||i;return e("section",{staticClass:"space-y-4"},[t.ready?[e("div",{staticClass:"flex flex-col space-y-4 sm:flex-row sm:items-center sm:space-y-0 sm:space-x-4"},[e("div",[e("BackButton",{attrs:{link:`/admin/companies/${t.id}/scorecards/in-depth/rating-service-1`}})],1),e("h3",{staticClass:"font-display text-xl font-semibold"},[t._v("New Scorecard")])]),e("form",{on:{submit:function(r){return r.preventDefault(),t.create.apply(null,arguments)}}},[e("BaseSimpleCard",{staticClass:"divide-y"},[e("BaseVueQueries",{attrs:{queries:t.queries},scopedSlots:t._u([{key:"success",fn:function(r){var n=r[0],c=r[1],l=r[2],o=r[3];return[e("ScorecardInput",{attrs:{products:n,users:t.users.data.value||[],"company-access":l,"company-bitsight-companies":c,companies:o},model:{value:t.scorecard,callback:function(u){t.scorecard=u},expression:"scorecard"}})]}}])}),e("div",{staticClass:"flex flex-col space-y-2 p-4 md:flex-row md:space-x-2 md:space-y-0"},[e("BaseButton",{staticClass:"space-x-2",attrs:{disabled:t.scorecardCreate.isLoading.value}},[e("SaveSvg",{staticClass:"w-4 xl:w-5"}),e("span",[t._v("Create")])],1),e("BaseButton",{staticClass:"space-x-2",attrs:{type:"button","display-type":"danger",action:"secondary",to:"..",append:""}},[e("TrashSvg",{staticClass:"w-4 xl:w-5"}),e("span",[t._v("Cancel")])],1)],1)],1)],1)]:[e("LoadingSpinner")]],2)},V=[];const B={};var z=H(d,E,V,!1,G,null,null,null);function G(t){for(let i in B)this[i]=B[i]}const we=function(){return z.exports}();export{we as default};
