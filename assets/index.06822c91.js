import{U as T}from"./arrow-down-on-square.bf61cdc5.js";import{T as $}from"./trash.78f57a7a.js";import{L as q,bv as H,c2 as L,bJ as w,d as m,r as N,aK as U,aH as D,n as M}from"./index.ad2ff904.js";import{S as P}from"./ScorecardInput.8d724d89.js";import{u as Q}from"./useCompanyAccess.bf41592e.js";import{u as R}from"./useProducts.65c031cf.js";import{u as W}from"./useBitsightCompanies.a2cd11c5.js";import{u as j}from"./useInDepthScorecards.5e0caffc.js";import{u as E}from"./useUsers.0e71c22f.js";import{e as p}from"./attributeValue.ea53a720.js";import"./SupplierSelect.538b1901.js";import"./exclamation-triangle.54812a62.js";import"./ToolTip.5148f62d.js";import"./ObjectDisplay.dc8241fa.js";import"./CisToCmmcMappingDisplay.712930c6.js";import"./CollapsibleSection.cb066c03.js";import"./TransitionExpand.5b598212.js";import"./arrow-path.24b87f73.js";import"./RiskVectorSummary.449bfb0c.js";import"./GradeLetterDisplay.eb702f06.js";import"./BitsightLevelBadge.92815bb4.js";import"./AnalystSelect.0d50e383.js";import"./usePerformanceEvaluations.032687a9.js";import"./sortWorstRiskVectorsFirst.3076076d.js";import"./ratingScoreDescription.3b48b1ea.js";import"./index.6e54b4ff.js";import"./index.28672862.js";import"./index.7a54c9f6.js";import"./index.87e44ac4.js";import"./index.0699373b.js";const d={};d.setup=(t,i)=>{const e=L("id"),r=[R.list(),W.list(e),Q.list(e),w.list()],n=E.list(),c=w.read(e),l=m(()=>{if(c.data.value){const{id:a,name:s}=c.data.value;return{id:a,name:s}}}),o=m(()=>{var a;return(a=n.data.value)==null?void 0:a.map(s=>({id:p(s,"sub"),email:p(s,"email"),name:p(s,"name"),title:p(s,"custom:title")})).find(s=>s.email==="consultingservices@whitehawk.com")}),u=N(),v=m({get(){var g,C,h,_,x,S;if(u.value)return u.value;const a=new Date,s=a.getUTCFullYear(),I=Math.ceil((a.getMonth()+1)/3);return{data:{buyerId:(g=l.value)==null?void 0:g.id,"Buyer Company Name":(C=l.value)==null?void 0:C.name,analystId:(h=o.value)==null?void 0:h.id,"WhiteHawk Analyst Name":(_=o.value)==null?void 0:_.name,"WhiteHawk Analyst Title":(x=o.value)==null?void 0:x.title,"WhiteHawk Analyst Email":(S=o.value)==null?void 0:S.email},status:"In Progress",yearQuarterValue:`${s}/Q${I}`}},set(a){u.value=a}}),b=m(()=>Boolean(n.data.value&&c.data.value)),k=U(),f=D(),y=j.create(e);async function A(){if(v.value){const a=await y.mutateAsync(v.value);if(a){const{id:s}=a.data;f.success("Created Successfully"),k.push(`/admin/companies/${s.value}/scorecards/in-depth/rating-service-1`)}f.error("Something went wrong.")}}return{id:e,queries:r,users:n,scorecard:v,ready:b,scorecardCreate:y,create:A}};d.components=Object.assign({LoadingSpinner:q,BackButton:H,ScorecardInput:P,SaveSvg:T,TrashSvg:$},d.components);var F=function(){var t=this,i=t.$createElement,e=t._self._c||i;return e("section",{staticClass:"space-y-4"},[t.ready?[e("div",{staticClass:"flex flex-col space-y-4 sm:flex-row sm:items-center sm:space-y-0 sm:space-x-4"},[e("div",[e("BackButton",{attrs:{link:`/admin/companies/${t.id}/scorecards/in-depth/rating-service-1`}})],1),e("h3",{staticClass:"font-display text-xl font-semibold"},[t._v("New Scorecard")])]),e("form",{on:{submit:function(r){return r.preventDefault(),t.create.apply(null,arguments)}}},[e("BaseSimpleCard",{staticClass:"divide-y"},[e("BaseVueQueries",{attrs:{queries:t.queries},scopedSlots:t._u([{key:"success",fn:function(r){var n=r[0],c=r[1],l=r[2],o=r[3];return[e("ScorecardInput",{attrs:{products:n,users:t.users.data.value||[],"company-access":l,"company-bitsight-companies":c,companies:o},model:{value:t.scorecard,callback:function(u){t.scorecard=u},expression:"scorecard"}})]}}])}),e("div",{staticClass:"flex flex-col space-y-2 p-4 md:flex-row md:space-x-2 md:space-y-0"},[e("BaseButton",{staticClass:"space-x-2",attrs:{disabled:t.scorecardCreate.isLoading.value}},[e("SaveSvg",{staticClass:"w-4 xl:w-5"}),e("span",[t._v("Create")])],1),e("BaseButton",{staticClass:"space-x-2",attrs:{type:"button","display-type":"danger",action:"secondary",to:"..",append:""}},[e("TrashSvg",{staticClass:"w-4 xl:w-5"}),e("span",[t._v("Cancel")])],1)],1)],1)],1)]:[e("LoadingSpinner")]],2)},V=[];const B={};var z=M(d,F,V,!1,J,null,null,null);function J(t){for(let i in B)this[i]=B[i]}const Be=function(){return z.exports}();export{Be as default};