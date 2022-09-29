import{U as g}from"./arrow-down-on-square.bf61cdc5.js";import{D as C}from"./document-arrow-down.2aec0021.js";import{T as w}from"./trash.78f57a7a.js";import{L as B,b_ as v,r as h,aB as b,bE as f,d as D,aG as U,aP as $,aQ as k,n as I}from"./index.e7f697eb.js";import{B as F}from"./BackButton.8f96cce7.js";import{S as A}from"./ScorecardInput.2ca47fa7.js";import{F as L}from"./FileSaver.min.4f076a64.js";import{u as T}from"./useCompanyAccess.a92e3d00.js";import{u as q}from"./useProducts.cfd01fd9.js";import{u as E}from"./useBitsightCompanies.a4a9c70c.js";import{u as y}from"./useInDepthScorecards.3494e5cc.js";import{u as P}from"./useUsers.960d8884.js";import"./chevron-left.0808b01b.js";import"./SupplierSelect.368a801a.js";import"./exclamation-triangle.54812a62.js";import"./ToolTip.7116193f.js";import"./ObjectDisplay.8a7c8f94.js";import"./CisToCmmcMappingDisplay.802d1851.js";import"./CollapsibleSection.dadc6176.js";import"./TransitionExpand.78bc4a1e.js";import"./arrow-path.24b87f73.js";import"./RiskVectorSummary.0bb39d2c.js";import"./GradeLetterDisplay.a742c0c6.js";import"./BitsightLevelBadge.287e6c84.js";import"./AnalystSelect.4b0d8130.js";import"./usePerformanceEvaluations.c421021e.js";import"./attributeValue.ea53a720.js";import"./sortWorstRiskVectorsFirst.3076076d.js";import"./ratingScoreDescription.3b48b1ea.js";import"./index.596a906e.js";import"./index.3e2cf2a7.js";import"./index.7a54c9f6.js";import"./index.87e44ac4.js";import"./index.58baeb39.js";const n={};n.setup=(a,o)=>{const s=v("id"),t=v("scorecardId"),p=y.read(s,t),e=h();b(()=>p.data.value,r=>{r&&(e.value=r)},{immediate:!0});const l=[q.list(),E.list(s),T.list(s),f.list(),P.list()],c=f.read(s),m=D(()=>Boolean(c.data.value)),i=U(),d=y.update(s,t);async function _(){e.value&&(await d.mutateAsync(e.value)&&i.success("Updated Successfully"),i.error("Something went wrong."))}async function S(){var u;const r=await $(`${k}/companies/${s.value}/scorecards/${t.value}/docx`,{responseType:"blob"});L.exports.saveAs(r.data,`${(u=c.data.value)==null?void 0:u.name}-${t.value}.docx`)}return{id:s,scorecardId:t,scorecard:e,queries:l,ready:m,scorecardUpdate:d,save:_,downloadFile:S}};n.components=Object.assign({LoadingSpinner:B,BackButton:F,ScorecardInput:A,SaveSvg:g,DownloadSvg:C,TrashSvg:w},n.components);var Q=function(){var a=this,o=a.$createElement,s=a._self._c||o;return s("section",{staticClass:"space-y-4"},[a.ready?[s("div",{staticClass:"flex flex-col space-y-4 sm:flex-row sm:items-center sm:space-y-0 sm:space-x-4"},[s("div",[s("BackButton",{attrs:{link:`/admin/companies/${a.id}/scorecards/in-depth/rating-service-1`}})],1),s("div",{staticClass:"flex flex-col"},[s("h3",{staticClass:"font-display text-xl font-semibold"},[a._v("Edit Scorecard")]),s("BaseOverline",{staticClass:"uppercase"},[a._v(" "+a._s(a.scorecardId)+" ")])],1)]),s("form",{on:{submit:function(t){return t.preventDefault(),a.save.apply(null,arguments)}}},[s("BaseSimpleCard",{staticClass:"divide-y"},[s("BaseVueQueries",{attrs:{queries:a.queries},scopedSlots:a._u([{key:"success",fn:function(t){var p=t[0],e=t[1],l=t[2],c=t[3],m=t[4];return[s("ScorecardInput",{attrs:{products:p,users:m,companies:c,"company-access":l,"company-bitsight-companies":e},model:{value:a.scorecard,callback:function(i){a.scorecard=i},expression:"scorecard"}})]}}])}),s("div",{staticClass:"flex flex-col space-y-2 p-4 lg:flex-row lg:space-x-2 lg:space-y-0"},[s("BaseButton",{staticClass:"space-x-2",attrs:{disabled:a.scorecardUpdate.isLoading.value}},[s("SaveSvg",{staticClass:"h-auto w-4 xl:w-5"}),s("span",[a._v("Save")])],1),s("BaseButton",{staticClass:"space-x-2",attrs:{type:"button",action:"secondary","display-type":"info"},on:{click:a.downloadFile}},[s("DownloadSvg",{staticClass:"h-auto w-4 xl:w-5"}),s("span",[a._v("Download")])],1),s("BaseButton",{staticClass:"space-x-2",attrs:{type:"button","display-type":"danger",action:"secondary",to:"..",append:""}},[s("TrashSvg",{staticClass:"h-auto w-4 xl:w-5"}),s("span",[a._v("Cancel")])],1)],1)],1)],1)]:[s("LoadingSpinner")]],2)},j=[];const x={};var O=I(n,Q,j,!1,R,null,null,null);function R(a){for(let o in x)this[o]=x[o]}const ws=function(){return O.exports}();export{ws as default};