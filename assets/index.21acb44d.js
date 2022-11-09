import{U as g}from"./arrow-down-on-square.bf61cdc5.js";import{D as C}from"./document-arrow-down.2aec0021.js";import{T as w}from"./trash.78f57a7a.js";import{L as h,bs as B,b$ as v,r as b,aA as D,bG as f,c as U,aF as $,aP as F,aQ as I,n as k}from"./index.06ea6359.js";import{S as A}from"./ScorecardInput.c2534284.js";import{F as T}from"./FileSaver.min.defd0125.js";import{u as L}from"./useCompanyAccess.7d7763b0.js";import{u as q}from"./useProducts.4f37ed8a.js";import{u as P}from"./useBitsightCompanies.f7ab2f5f.js";import{u as y}from"./useInDepthScorecards.fe17b431.js";import{u as Q}from"./useUsers.eb460be0.js";import"./SupplierSelect.c38c6060.js";import"./exclamation-triangle.54812a62.js";import"./TransitionExpand.3b97601c.js";import"./ToolTip.ce981e04.js";import"./AnalystSelect.798f5d76.js";import"./CisToCmmcMappingDisplay.5534ae1c.js";import"./arrow-path.24b87f73.js";import"./RiskVectorSummary.ba64d75a.js";import"./GradeLetterDisplay.708700ca.js";import"./BitsightLevelBadge.3a972fe9.js";import"./usePerformanceEvaluations.217091ef.js";import"./attributeValue.ea53a720.js";import"./sortWorstRiskVectorsFirst.3076076d.js";import"./ratingScoreDescription.dc21462c.js";import"./index.de4162fd.js";import"./index.a248017f.js";import"./index.7a54c9f6.js";import"./index.87e44ac4.js";import"./index.0a84f600.js";const i={};i.setup=(a,o)=>{const s=v("id"),t=v("scorecardId"),p=y.read(s,t),e=b();D(()=>p.data.value,r=>{r&&(e.value=r)},{immediate:!0});const l=[q.list(),P.list(s),L.list(s),f.list(),Q.list()],c=f.read(s),u=U(()=>Boolean(c.data.value)),n=$(),m=y.update(s,t);async function _(){e.value&&(await m.mutateAsync(e.value)&&n.success("Updated Successfully"),n.error("Something went wrong."))}async function S(){var d;const r=await F(`${I}/companies/${s.value}/scorecards/${t.value}/docx`,{responseType:"blob"});T.exports.saveAs(r.data,`${(d=c.data.value)==null?void 0:d.name}-${t.value}.docx`)}return{scorecardId:t,scorecard:e,queries:l,ready:u,scorecardUpdate:m,save:_,downloadFile:S}};i.components=Object.assign({LoadingSpinner:h,BackButton:B,ScorecardInput:A,SaveSvg:g,DownloadSvg:C,TrashSvg:w},i.components);var j=function(){var a=this,o=a.$createElement,s=a._self._c||o;return s("section",{staticClass:"space-y-4"},[a.ready?[s("div",{staticClass:"flex flex-col space-y-4 sm:flex-row sm:items-center sm:space-y-0 sm:space-x-4"},[s("BackButton"),s("div",{staticClass:"flex flex-col"},[s("BaseOverline",{staticClass:"uppercase text-gray-500"},[a._v(" "+a._s(a.scorecardId)+" ")]),s("BaseTypography",{attrs:{variant:"h5",component:"h2"}},[a._v(" Edit Scorecard ")])],1)],1),s("form",{on:{submit:function(t){return t.preventDefault(),a.save.apply(null,arguments)}}},[s("BaseSimpleCard",{staticClass:"divide-y"},[s("BaseVueQueries",{attrs:{queries:a.queries},scopedSlots:a._u([{key:"success",fn:function(t){var p=t[0],e=t[1],l=t[2],c=t[3],u=t[4];return[s("ScorecardInput",{attrs:{products:p,users:u,companies:c,"company-access":l,"company-bitsight-companies":e},model:{value:a.scorecard,callback:function(n){a.scorecard=n},expression:"scorecard"}})]}}])}),s("div",{staticClass:"flex flex-col space-y-2 p-4 lg:flex-row lg:space-x-2 lg:space-y-0"},[s("BaseButton",{staticClass:"space-x-2",attrs:{disabled:a.scorecardUpdate.isLoading.value}},[s("SaveSvg",{staticClass:"h-auto w-4 xl:w-5"}),s("span",[a._v("Save")])],1),s("BaseButton",{staticClass:"space-x-2",attrs:{type:"button",action:"secondary","display-type":"info"},on:{click:a.downloadFile}},[s("DownloadSvg",{staticClass:"h-auto w-4 xl:w-5"}),s("span",[a._v("Download")])],1),s("BaseButton",{staticClass:"space-x-2",attrs:{type:"button","display-type":"danger",action:"secondary",to:"..",append:""}},[s("TrashSvg",{staticClass:"h-auto w-4 xl:w-5"}),s("span",[a._v("Cancel")])],1)],1)],1)],1)]:s("LoadingSpinner")],2)},E=[];const x={};var O=k(i,j,E,!1,R,null,null,null);function R(a){for(let o in x)this[o]=x[o]}const _s=function(){return O.exports}();export{_s as default};