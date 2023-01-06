import{U as C}from"./arrow-down-on-square.bf61cdc5.js";import{D as h}from"./document-arrow-down.8787241b.js";import{L as w,bs as b,c7 as f,d as u,bG as y,aF as D,aP as U,aQ as F,n as I}from"./index.7eada971.js";import{S as $}from"./ScorecardInput.211a59a8.js";import{F as k}from"./FileSaver.min.ff5bb41d.js";import{u as A}from"./useCompanyAccess.a16a428d.js";import{u as L}from"./useProducts.d65cf0d9.js";import{u as R}from"./useBitsightCompanies.17dceade.js";import{u as S}from"./useInDepthScorecards.d4b27d5c.js";import{u as q}from"./useUsers.5e461548.js";import{s as P}from"./index.0a5d914c.js";import"./CisToCmmcMappingDisplay.78d72571.js";import"./CollapsibleSection.af61df55.js";import"./TransitionExpand.8286ee80.js";import"./arrow-path.24b87f73.js";import"./RiskVectorSummary.4a5858ed.js";import"./ToolTip.de341942.js";import"./GradeLetterDisplay.3d93a635.js";import"./BitsightLevelBadge.adac6be3.js";import"./AnalystSelect.69d82ec9.js";import"./ObjectDisplay.0678adbb.js";import"./attributeValue.ea53a720.js";import"./ratingScoreDescription.3b48b1ea.js";import"./index.09c3b89e.js";import"./index.0c39b6d0.js";import"./index.7a54c9f6.js";import"./index.87e44ac4.js";import"./index.4715fa6e.js";const n={};n.setup=(a,t)=>{const s=f("id"),e=f("scorecardId"),i=S.read(s,e),o=P(u(()=>i.data.value)),p=[L.list(),R.list(s),A.list(s),y.list(),q.list()],r=D(),c=S.update(s,e);async function l(){o.value&&(await c.mutateAsync(o.value)&&r.success("Updated Successfully"),r.error("Something went wrong."))}const x=y.read(s),m=u(()=>x.data.value);async function g(){var v;const d=await U(`${F}/companies/${s.value}/scorecards/${e.value}/docx`,{responseType:"blob"});k.exports.saveAs(d.data,`${(v=m.value)==null?void 0:v.name}-${e.value}.docx`)}const B=u(()=>Boolean(m.value));return{scorecard:o,queries:p,scorecardUpdate:c,updateScorecard:l,downloadFile:g,ready:B}};n.components=Object.assign({LoadingSpinner:w,BackButton:b,ScorecardInput:$,SaveSvg:C,DownloadSvg:h},n.components);var Q=function(){var a=this,t=a.$createElement,s=a._self._c||t;return a.ready?s("section",{staticClass:"space-y-6"},[s("div",{staticClass:"flex flex-col space-y-4 sm:flex-row sm:items-center sm:space-y-0 sm:space-x-4"},[s("BackButton"),s("div",{staticClass:"flex flex-col -space-y-2"},[s("BaseOverline",{staticClass:"uppercase text-gray-500"},[a._v("Bitsight")]),s("BaseTypography",{attrs:{variant:"h5"}},[a._v("In-Depth Scorecard")])],1)],1),s("form",{on:{submit:function(e){return e.preventDefault(),a.updateScorecard.apply(null,arguments)}}},[s("BaseSimpleCard",{staticClass:"divide-y"},[s("BaseVueQueries",{attrs:{queries:a.queries},scopedSlots:a._u([{key:"success",fn:function(e){var i=e[0],o=e[1],p=e[2],r=e[3],c=e[4];return[s("ScorecardInput",{attrs:{products:i,users:c,companies:r,"company-access":p,"company-bitsight-companies":o},model:{value:a.scorecard,callback:function(l){a.scorecard=l},expression:"scorecard"}})]}}])}),s("div",{staticClass:"flex flex-col space-y-2 p-4 lg:flex-row lg:space-x-2 lg:space-y-0"},[s("BaseButton",{staticClass:"space-x-2",attrs:{disabled:a.scorecardUpdate.isLoading.value}},[s("SaveSvg",{staticClass:"-ml-1 w-5"}),s("span",[a._v("Update")])],1),s("BaseButton",{staticClass:"space-x-2",attrs:{type:"button",action:"secondary","display-type":"info"},on:{click:a.downloadFile}},[s("DownloadSvg",{staticClass:"-ml-1 w-5"}),s("span",[a._v("Download")])],1)],1)],1)],1)]):s("LoadingSpinner")},j=[];const _={};var O=I(n,Q,j,!1,T,null,null,null);function T(a){for(let t in _)this[t]=_[t]}const fs=function(){return O.exports}();export{fs as default};