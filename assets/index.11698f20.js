import{U as $}from"./arrow-down-on-square.bf61cdc5.js";import{T}from"./trash.78f57a7a.js";import{L as q,b$ as L,bF as w,d as l,r as N,aJ as U,aG as D,n as F}from"./index.64b997b9.js";import{B as H}from"./BackButton.95947bd3.js";import{S as M}from"./ScorecardInput.6b062985.js";import{u as P}from"./useCompanyAccess.b0daf4c4.js";import{u as Q}from"./useProducts.39e66753.js";import{u as R}from"./useBitsightCompanies.71f93931.js";import{u as W}from"./useInDepthScorecards.95ff74b4.js";import{u as j}from"./useUsers.70d51f47.js";import{e as p}from"./attributeValue.ea53a720.js";import"./chevron-left.0808b01b.js";import"./SupplierSelect.38cae565.js";import"./exclamation-triangle.54812a62.js";import"./ToolTip.b2c767dc.js";import"./ObjectDisplay.79011478.js";import"./CisToCmmcMappingDisplay.3a9a4cdd.js";import"./CollapsibleSection.e3d795d1.js";import"./TransitionExpand.90004165.js";import"./arrow-path.24b87f73.js";import"./RiskVectorSummary.0aeb40e7.js";import"./GradeLetterDisplay.c9eb2ba7.js";import"./BitsightLevelBadge.dc047692.js";import"./AnalystSelect.58579387.js";import"./usePerformanceEvaluations.1605bba3.js";import"./sortWorstRiskVectorsFirst.3076076d.js";import"./ratingScoreDescription.3b48b1ea.js";import"./index.e6ac321c.js";import"./index.097dff3f.js";import"./index.7a54c9f6.js";import"./index.87e44ac4.js";import"./index.847be4b9.js";const d={};d.setup=(t,i)=>{const e=L("id"),r=[Q.list(),R.list(e),P.list(e),w.list()],n=j.list(),c=w.read(e),u=l(()=>{if(c.data.value){const{id:a,name:s}=c.data.value;return{id:a,name:s}}}),o=l(()=>{var a;return(a=n.data.value)==null?void 0:a.map(s=>({id:p(s,"sub"),email:p(s,"email"),name:p(s,"name"),title:p(s,"custom:title")})).find(s=>s.email==="consultingservices@whitehawk.com")}),m=N(),v=l({get(){var g,C,h,_,x,S;if(m.value)return m.value;const a=new Date,s=a.getUTCFullYear(),I=Math.ceil((a.getMonth()+1)/3);return{data:{buyerId:(g=u.value)==null?void 0:g.id,"Buyer Company Name":(C=u.value)==null?void 0:C.name,analystId:(h=o.value)==null?void 0:h.id,"WhiteHawk Analyst Name":(_=o.value)==null?void 0:_.name,"WhiteHawk Analyst Title":(x=o.value)==null?void 0:x.title,"WhiteHawk Analyst Email":(S=o.value)==null?void 0:S.email},status:"In Progress",yearQuarterValue:`${s}/Q${I}`}},set(a){m.value=a}}),b=l(()=>Boolean(n.data.value&&c.data.value)),k=U(),f=D(),y=W.create(e);async function A(){if(v.value){const a=await y.mutateAsync(v.value);if(a){const{id:s}=a.data;f.success("Created Successfully"),k.push(`/admin/companies/${s.value}/scorecards/in-depth/rating-service-1`)}f.error("Something went wrong.")}}return{id:e,queries:r,users:n,scorecard:v,ready:b,scorecardCreate:y,create:A}};d.components=Object.assign({LoadingSpinner:q,BackButton:H,ScorecardInput:M,SaveSvg:$,TrashSvg:T},d.components);var E=function(){var t=this,i=t.$createElement,e=t._self._c||i;return e("section",{staticClass:"space-y-4"},[t.ready?[e("div",{staticClass:"flex flex-col space-y-4 sm:flex-row sm:items-center sm:space-y-0 sm:space-x-4"},[e("div",[e("BackButton",{attrs:{link:`/admin/companies/${t.id}/scorecards/in-depth/rating-service-1`}})],1),e("h3",{staticClass:"font-display text-xl font-semibold"},[t._v("New Scorecard")])]),e("form",{on:{submit:function(r){return r.preventDefault(),t.create.apply(null,arguments)}}},[e("BaseSimpleCard",{staticClass:"divide-y"},[e("BaseVueQueries",{attrs:{queries:t.queries},scopedSlots:t._u([{key:"success",fn:function(r){var n=r[0],c=r[1],u=r[2],o=r[3];return[e("ScorecardInput",{attrs:{products:n,users:t.users.data.value||[],"company-access":u,"company-bitsight-companies":c,companies:o},model:{value:t.scorecard,callback:function(m){t.scorecard=m},expression:"scorecard"}})]}}])}),e("div",{staticClass:"flex flex-col space-y-2 p-4 md:flex-row md:space-x-2 md:space-y-0"},[e("BaseButton",{staticClass:"space-x-2",attrs:{disabled:t.scorecardCreate.isLoading.value}},[e("SaveSvg",{staticClass:"w-4 xl:w-5"}),e("span",[t._v("Create")])],1),e("BaseButton",{staticClass:"space-x-2",attrs:{type:"button","display-type":"danger",action:"secondary",to:"..",append:""}},[e("TrashSvg",{staticClass:"w-4 xl:w-5"}),e("span",[t._v("Cancel")])],1)],1)],1)],1)]:[e("LoadingSpinner")]],2)},V=[];const B={};var z=F(d,E,V,!1,G,null,null,null);function G(t){for(let i in B)this[i]=B[i]}const ke=function(){return z.exports}();export{ke as default};
