import{U as g}from"./arrow-down-on-square.bf61cdc5.js";import{D as C}from"./document-arrow-down.2aec0021.js";import{T as w}from"./trash.78f57a7a.js";import{L as h,bs as B,b$ as v,r as b,aA as D,bG as f,c as $,aF as U,aP as k,aQ as F,n as I}from"./index.1f71e50f.js";import{S as A}from"./ScorecardInput.2a8cbcbb.js";import{F as L}from"./FileSaver.min.a58a6977.js";import{u as T}from"./useCompanyAccess.06da1808.js";import{u as q}from"./useProducts.af7faf7e.js";import{u as P}from"./useBitsightCompanies.0ec868ef.js";import{u as y}from"./useInDepthScorecards.e05fd19e.js";import{u as Q}from"./useUsers.689ef91d.js";import"./SupplierSelect.b4181d62.js";import"./exclamation-triangle.54812a62.js";import"./ToolTip.6a353546.js";import"./AnalystSelect.b26870e3.js";import"./CisToCmmcMappingDisplay.64b3243b.js";import"./CollapsibleSection.7a1648ce.js";import"./TransitionExpand.861d9b26.js";import"./arrow-path.24b87f73.js";import"./RiskVectorSummary.4482060f.js";import"./GradeLetterDisplay.136aff58.js";import"./BitsightLevelBadge.562421ca.js";import"./usePerformanceEvaluations.b3b40058.js";import"./attributeValue.ea53a720.js";import"./sortWorstRiskVectorsFirst.3076076d.js";import"./ratingScoreDescription.3b48b1ea.js";import"./index.b71e8145.js";import"./index.8cffbea9.js";import"./index.7a54c9f6.js";import"./index.87e44ac4.js";import"./index.e66fd7f7.js";const n={};n.setup=(a,o)=>{const s=v("id"),t=v("scorecardId"),p=y.read(s,t),e=b();D(()=>p.data.value,r=>{r&&(e.value=r)},{immediate:!0});const l=[q.list(),P.list(s),T.list(s),f.list(),Q.list()],c=f.read(s),m=$(()=>Boolean(c.data.value)),i=U(),u=y.update(s,t);async function _(){e.value&&(await u.mutateAsync(e.value)&&i.success("Updated Successfully"),i.error("Something went wrong."))}async function S(){var d;const r=await k(`${F}/companies/${s.value}/scorecards/${t.value}/docx`,{responseType:"blob"});L.exports.saveAs(r.data,`${(d=c.data.value)==null?void 0:d.name}-${t.value}.docx`)}return{id:s,scorecardId:t,scorecard:e,queries:l,ready:m,scorecardUpdate:u,save:_,downloadFile:S}};n.components=Object.assign({LoadingSpinner:h,BackButton:B,ScorecardInput:A,SaveSvg:g,DownloadSvg:C,TrashSvg:w},n.components);var j=function(){var a=this,o=a.$createElement,s=a._self._c||o;return s("section",{staticClass:"space-y-4"},[a.ready?[s("div",{staticClass:"flex flex-col space-y-4 sm:flex-row sm:items-center sm:space-y-0 sm:space-x-4"},[s("div",[s("BackButton",{attrs:{link:`/admin/companies/${a.id}/scorecards/in-depth/rating-service-1`}})],1),s("div",{staticClass:"flex flex-col"},[s("h3",{staticClass:"font-display text-xl font-semibold"},[a._v("Edit Scorecard")]),s("BaseOverline",{staticClass:"uppercase"},[a._v(" "+a._s(a.scorecardId)+" ")])],1)]),s("form",{on:{submit:function(t){return t.preventDefault(),a.save.apply(null,arguments)}}},[s("BaseSimpleCard",{staticClass:"divide-y"},[s("BaseVueQueries",{attrs:{queries:a.queries},scopedSlots:a._u([{key:"success",fn:function(t){var p=t[0],e=t[1],l=t[2],c=t[3],m=t[4];return[s("ScorecardInput",{attrs:{products:p,users:m,companies:c,"company-access":l,"company-bitsight-companies":e},model:{value:a.scorecard,callback:function(i){a.scorecard=i},expression:"scorecard"}})]}}])}),s("div",{staticClass:"flex flex-col space-y-2 p-4 lg:flex-row lg:space-x-2 lg:space-y-0"},[s("BaseButton",{staticClass:"space-x-2",attrs:{disabled:a.scorecardUpdate.isLoading.value}},[s("SaveSvg",{staticClass:"h-auto w-4 xl:w-5"}),s("span",[a._v("Save")])],1),s("BaseButton",{staticClass:"space-x-2",attrs:{type:"button",action:"secondary","display-type":"info"},on:{click:a.downloadFile}},[s("DownloadSvg",{staticClass:"h-auto w-4 xl:w-5"}),s("span",[a._v("Download")])],1),s("BaseButton",{staticClass:"space-x-2",attrs:{type:"button","display-type":"danger",action:"secondary",to:"..",append:""}},[s("TrashSvg",{staticClass:"h-auto w-4 xl:w-5"}),s("span",[a._v("Cancel")])],1)],1)],1)],1)]:[s("LoadingSpinner")]],2)},E=[];const x={};var O=I(n,j,E,!1,R,null,null,null);function R(a){for(let o in x)this[o]=x[o]}const Ss=function(){return O.exports}();export{Ss as default};
