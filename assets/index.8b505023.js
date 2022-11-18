import{U as T}from"./arrow-down-on-square.bf61cdc5.js";import{T as q}from"./trash.78f57a7a.js";import{L,bs as N,c1 as U,bG as w,c as m,r as $,aI as D,aF as F,n as H}from"./index.774779f3.js";import{S as M}from"./ScorecardInput.d365f4ce.js";import{u as P}from"./useCompanyAccess.d7900fbc.js";import{u as Q}from"./useProducts.1b93018d.js";import{u as R}from"./useBitsightCompanies.6dc73014.js";import{u as W}from"./useInDepthScorecards.5fa3b51b.js";import{u as j}from"./useUsers.15ed5144.js";import{e as p}from"./attributeValue.ea53a720.js";import"./SupplierSelect.7c78fe5a.js";import"./exclamation-triangle.54812a62.js";import"./TransitionExpand.3d593e31.js";import"./ToolTip.ab1be4e0.js";import"./AnalystSelect.84d0d669.js";import"./CisToCmmcMappingDisplay.c1cdfd8c.js";import"./arrow-path.24b87f73.js";import"./RiskVectorSummary.4c113dc0.js";import"./GradeLetterDisplay.b1c2b1bb.js";import"./BitsightLevelBadge.e91bc480.js";import"./usePerformanceEvaluations.d7df3d08.js";import"./sortWorstRiskVectorsFirst.3076076d.js";import"./ratingScoreDescription.dc21462c.js";import"./index.a6c5c5b7.js";import"./index.e5b67897.js";import"./index.7a54c9f6.js";import"./index.87e44ac4.js";import"./index.b40d7921.js";const d={};d.setup=(a,n)=>{const e=U("id"),r=[Q.list(),R.list(e),P.list(e),w.list()],i=j.list(),c=w.read(e),l=m(()=>{if(c.data.value){const{id:t,name:s}=c.data.value;return{id:t,name:s}}}),o=m(()=>{var t;return(t=i.data.value)==null?void 0:t.map(s=>({id:p(s,"sub"),email:p(s,"email"),name:p(s,"name"),title:p(s,"custom:title")})).find(s=>s.email==="consultingservices@whitehawk.com")}),u=$(),v=m({get(){var g,h,C,_,S,x;if(u.value)return u.value;const t=new Date,s=t.getUTCFullYear(),I=Math.ceil((t.getMonth()+1)/3);return{data:{buyerId:(g=l.value)==null?void 0:g.id,"Buyer Company Name":(h=l.value)==null?void 0:h.name,analystId:(C=o.value)==null?void 0:C.id,"WhiteHawk Analyst Name":(_=o.value)==null?void 0:_.name,"WhiteHawk Analyst Title":(S=o.value)==null?void 0:S.title,"WhiteHawk Analyst Email":(x=o.value)==null?void 0:x.email},status:"In Progress",yearQuarterValue:`${s}/Q${I}`}},set(t){u.value=t}}),b=m(()=>Boolean(i.data.value&&c.data.value)),k=D(),f=F(),y=W.create(e);async function A(){if(v.value){const t=await y.mutateAsync(v.value);if(t){const{id:s}=t.data;f.success("Created Successfully"),k.push(`/admin/companies/${s.value}/scorecards/in-depth/rating-service-1`)}f.error("Something went wrong.")}}return{queries:r,users:i,scorecard:v,ready:b,scorecardCreate:y,create:A}};d.components=Object.assign({LoadingSpinner:L,BackButton:N,ScorecardInput:M,SaveSvg:T,TrashSvg:q},d.components);var E=function(){var a=this,n=a.$createElement,e=a._self._c||n;return e("section",{staticClass:"space-y-4"},[a.ready?[e("div",{staticClass:"flex flex-col space-y-4 sm:flex-row sm:items-center sm:space-y-0 sm:space-x-4"},[e("BackButton"),e("BaseTypography",{attrs:{variant:"h5",component:"h2"}},[a._v(" New Scorecard ")])],1),e("form",{on:{submit:function(r){return r.preventDefault(),a.create.apply(null,arguments)}}},[e("BaseSimpleCard",{staticClass:"divide-y"},[e("BaseVueQueries",{attrs:{queries:a.queries},scopedSlots:a._u([{key:"success",fn:function(r){var i=r[0],c=r[1],l=r[2],o=r[3];return[e("ScorecardInput",{attrs:{products:i,users:a.users.data.value||[],"company-access":l,"company-bitsight-companies":c,companies:o},model:{value:a.scorecard,callback:function(u){a.scorecard=u},expression:"scorecard"}})]}}])}),e("div",{staticClass:"flex flex-col space-y-2 p-4 md:flex-row md:space-x-2 md:space-y-0"},[e("BaseButton",{staticClass:"space-x-2",attrs:{disabled:a.scorecardCreate.isLoading.value}},[e("SaveSvg",{staticClass:"w-4 xl:w-5"}),e("span",[a._v("Create")])],1),e("BaseButton",{staticClass:"space-x-2",attrs:{type:"button","display-type":"danger",action:"secondary",to:"..",append:""}},[e("TrashSvg",{staticClass:"w-4 xl:w-5"}),e("span",[a._v("Cancel")])],1)],1)],1)],1)]:e("LoadingSpinner")],2)},V=[];const B={};var z=H(d,E,V,!1,G,null,null,null);function G(a){for(let n in B)this[n]=B[n]}const xe=function(){return z.exports}();export{xe as default};