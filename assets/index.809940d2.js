import{U as T}from"./arrow-down-on-square.bf61cdc5.js";import{T as q}from"./trash.78f57a7a.js";import{L as H,bt as L,c8 as N,bH as w,c as m,r as U,aK as $,aF as D,n as F}from"./index.fc6fe55f.js";import{S as M}from"./ScorecardInput.05bda953.js";import{u as P}from"./useCompanyAccess.ef6324f7.js";import{u as Q}from"./useProducts.06824ef2.js";import{u as R}from"./useBitsightCompanies.f7fda46f.js";import{u as W}from"./useInDepthScorecards.75fe2b45.js";import{u as j}from"./useUsers.867568e4.js";import{e as p}from"./attributeValue.ea53a720.js";import"./CisToCmmcMappingDisplay.b20aecdd.js";import"./SupplierSelect.d7a7de97.js";import"./TransitionExpand.fc606591.js";import"./ToolTip.b0fcfac4.js";import"./ObjectDisplay.9c1e7372.js";import"./arrow-path.24b87f73.js";import"./RiskVectorSummary.15180646.js";import"./GradeLetterDisplay.5c4d0202.js";import"./BitsightLevelBadge.459f5b41.js";import"./AnalystSelect.b459a59c.js";import"./usePerformanceEvaluations.3536f687.js";import"./sortWorstRiskVectorsFirst.3076076d.js";import"./ratingScoreDescription.dc21462c.js";import"./index.2d79f9a7.js";import"./index.872b49b4.js";import"./index.7a54c9f6.js";import"./index.87e44ac4.js";import"./index.885f8224.js";const d={};d.setup=(t,n)=>{const e=N("id"),r=[Q.list(),R.list(e),P.list(e),w.list()],i=j.list(),c=w.read(e),l=m(()=>{if(c.data.value){const{id:a,name:s}=c.data.value;return{id:a,name:s}}}),o=m(()=>{var a;return(a=i.data.value)==null?void 0:a.map(s=>({id:p(s,"sub"),email:p(s,"email"),name:p(s,"name"),title:p(s,"custom:title")})).find(s=>s.email==="consultingservices@whitehawk.com")}),u=U(),v=m({get(){var g,h,C,_,S,x;if(u.value)return u.value;const a=new Date,s=a.getUTCFullYear(),I=Math.ceil((a.getMonth()+1)/3);return{data:{buyerId:(g=l.value)==null?void 0:g.id,"Buyer Company Name":(h=l.value)==null?void 0:h.name,analystId:(C=o.value)==null?void 0:C.id,"WhiteHawk Analyst Name":(_=o.value)==null?void 0:_.name,"WhiteHawk Analyst Title":(S=o.value)==null?void 0:S.title,"WhiteHawk Analyst Email":(x=o.value)==null?void 0:x.email},status:"In Progress",yearQuarterValue:`${s}/Q${I}`}},set(a){u.value=a}}),b=m(()=>Boolean(i.data.value&&c.data.value)),k=$(),f=D(),y=W.create(e);async function A(){if(v.value){const a=await y.mutateAsync(v.value);if(a){const{id:s}=a.data;f.success("Created Successfully"),k.push(`/admin/companies/${s.value}/scorecards/in-depth/rating-service-1`)}f.error("Something went wrong.")}}return{queries:r,users:i,scorecard:v,ready:b,scorecardCreate:y,create:A}};d.components=Object.assign({LoadingSpinner:H,BackButton:L,ScorecardInput:M,SaveSvg:T,TrashSvg:q},d.components);var E=function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("section",{staticClass:"space-y-4"},[t.ready?[e("div",{staticClass:"flex flex-col space-y-4 sm:flex-row sm:items-center sm:space-y-0 sm:space-x-4"},[e("BackButton"),e("BaseTypography",{attrs:{variant:"h5",component:"h2"}},[t._v(" New Scorecard ")])],1),e("form",{on:{submit:function(r){return r.preventDefault(),t.create.apply(null,arguments)}}},[e("BaseSimpleCard",{staticClass:"divide-y"},[e("BaseVueQueries",{attrs:{queries:t.queries},scopedSlots:t._u([{key:"success",fn:function(r){var i=r[0],c=r[1],l=r[2],o=r[3];return[e("ScorecardInput",{attrs:{products:i,users:t.users.data.value||[],"company-access":l,"company-bitsight-companies":c,companies:o},model:{value:t.scorecard,callback:function(u){t.scorecard=u},expression:"scorecard"}})]}}])}),e("div",{staticClass:"flex flex-col space-y-2 p-4 md:flex-row md:space-x-2 md:space-y-0"},[e("BaseButton",{staticClass:"space-x-2",attrs:{disabled:t.scorecardCreate.isLoading.value}},[e("SaveSvg",{staticClass:"w-4 xl:w-5"}),e("span",[t._v("Create")])],1),e("BaseButton",{staticClass:"space-x-2",attrs:{type:"button","display-type":"danger",action:"secondary",to:"..",append:""}},[e("TrashSvg",{staticClass:"w-4 xl:w-5"}),e("span",[t._v("Cancel")])],1)],1)],1)],1)]:e("LoadingSpinner")],2)},V=[];const B={};var z=F(d,E,V,!1,K,null,null,null);function K(t){for(let n in B)this[n]=B[n]}const xe=function(){return z.exports}();export{xe as default};
