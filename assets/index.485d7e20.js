import{U as D}from"./arrow-down-on-square.bf61cdc5.js";import{T as $}from"./trash.78f57a7a.js";import{L as q,bs as H,c9 as w,bH as B,d as l,aK as L,aF as R,n as U}from"./index.e627960d.js";import{S as W}from"./ScorecardInput.26d4746a.js";import{u as F}from"./useCompanyAccess.3b3da9aa.js";import{u as M}from"./useProducts.a4ff6b73.js";import{u as N}from"./useBitsightCompanies.e299c65a.js";import{u as P}from"./useInDepthScorecards.fa3c97fe.js";import{u as Q}from"./useUsers.9f00274c.js";import{e as p}from"./attributeValue.ea53a720.js";import{s as j}from"./index.5942a5e4.js";import"./CisToCmmcMappingDisplay.a2051bd1.js";import"./CollapsibleSection.3099dc84.js";import"./arrow-path.24b87f73.js";import"./RiskVectorSummary.21a81082.js";import"./ToolTip.0f824417.js";import"./GradeLetterDisplay.8e4c63c3.js";import"./BitsightLevelBadge.5b374a0b.js";import"./AnalystSelect.1a27d052.js";import"./ObjectDisplay.f4d3d119.js";import"./ratingScoreDescription.3b48b1ea.js";import"./index.b0d1f47c.js";import"./index.35a4d163.js";import"./index.7a54c9f6.js";import"./index.87e44ac4.js";import"./index.2fff8398.js";const m={};m.setup=(a,i)=>{const t=w("id"),o=w("subscriptionId"),d=[M.list(),N.list(t),F.list(t),B.list()],n=Q.list(),c=B.read(t),u=l(()=>{if(c.data.value){const{id:s,name:e}=c.data.value;return{id:s,name:e}}}),r=l(()=>{var s;return(s=n.data.value)==null?void 0:s.map(e=>({id:p(e,"sub"),email:p(e,"email"),name:p(e,"name"),title:p(e,"custom:title")})).find(e=>e.email==="consultingservices@whitehawk.com")}),v=j(l(()=>{var h,g,C,_,x,S;const s=new Date,e=s.getUTCFullYear(),T=Math.ceil((s.getMonth()+1)/3);return{data:{buyerId:(h=u.value)==null?void 0:h.id,"Buyer Company Name":(g=u.value)==null?void 0:g.name,analystId:(C=r.value)==null?void 0:C.id,"WhiteHawk Analyst Name":(_=r.value)==null?void 0:_.name,"WhiteHawk Analyst Title":(x=r.value)==null?void 0:x.title,"WhiteHawk Analyst Email":(S=r.value)==null?void 0:S.email},status:"In Progress",yearQuarterValue:`${e}/Q${T}`}})),I=l(()=>Boolean(n.data.value&&c.data.value)),k=L(),f=R(),y=P.create(t);async function A(){if(v.value){const s=await y.mutateAsync(v.value);if(s){const{id:e}=s.data;f.success("Created Successfully"),k.push(`/admin/companies/${e.value}/subscriptions/${o.value}/integrations/1/scorecards/in-depth`)}f.error("Something went wrong.")}}return{queries:d,users:n,scorecard:v,ready:I,scorecardCreate:y,createScorecard:A}};m.components=Object.assign({LoadingSpinner:q,BackButton:H,ScorecardInput:W,SaveSvg:D,TrashSvg:$},m.components);var E=function(){var a=this,i=a.$createElement,t=a._self._c||i;return a.ready?t("section",{staticClass:"space-y-6"},[t("div",{staticClass:"flex flex-col space-y-4 sm:flex-row sm:items-center sm:space-y-0 sm:space-x-4"},[t("BackButton"),t("div",{staticClass:"flex flex-col -space-y-1"},[t("BaseOverline",{staticClass:"uppercase text-gray-500"},[a._v("Bitsight")]),t("BaseTypography",{attrs:{variant:"h5"}},[a._v("In-Depth Scorecard")])],1)],1),t("form",{on:{submit:function(o){return o.preventDefault(),a.createScorecard.apply(null,arguments)}}},[t("BaseSimpleCard",{staticClass:"divide-y"},[t("BaseVueQueries",{attrs:{queries:a.queries},scopedSlots:a._u([{key:"success",fn:function(o){var d=o[0],n=o[1],c=o[2],u=o[3];return[t("ScorecardInput",{attrs:{products:d,users:a.users.data.value||[],"company-access":c,"company-bitsight-companies":n,companies:u},model:{value:a.scorecard,callback:function(r){a.scorecard=r},expression:"scorecard"}})]}}])}),t("div",{staticClass:"flex flex-col space-y-2 p-4 md:flex-row md:space-x-2 md:space-y-0"},[t("BaseButton",{staticClass:"space-x-2",attrs:{disabled:a.scorecardCreate.isLoading.value}},[t("SaveSvg",{staticClass:"w-4 xl:w-5"}),t("span",[a._v("Create")])],1),t("BaseButton",{staticClass:"space-x-2",attrs:{type:"button","display-type":"danger",action:"secondary",to:"..",append:""}},[t("TrashSvg",{staticClass:"w-4 xl:w-5"}),t("span",[a._v("Cancel")])],1)],1)],1)],1)]):t("LoadingSpinner")},O=[];const b={};var V=U(m,E,O,!1,z,null,null,null);function z(a){for(let i in b)this[i]=b[i]}const _t=function(){return V.exports}();export{_t as default};
