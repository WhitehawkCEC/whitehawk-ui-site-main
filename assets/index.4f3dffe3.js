import{U as h}from"./arrow-down-on-square.bf61cdc5.js";import{D as b}from"./document-arrow-down.2aec0021.js";import{T as $}from"./trash.78f57a7a.js";import{L as D,bs as U,b$ as f,r as x,aA as k,bG as F,c as I,aF as P,aa as T,aP as y,aQ as _,n as L}from"./index.1f71e50f.js";import{S as q}from"./ScorecardInput.68c51e39.js";import{F as A}from"./FileSaver.min.a58a6977.js";import{u as E}from"./useProducts.af7faf7e.js";import{u as Q}from"./useScorecardTemplates.ded7ed24.js";import{u as j}from"./useBlackKiteEntities.aaa3bbc6.js";import{u as S}from"./useInDepthScorecardsV2.e010a15d.js";import{u as M}from"./useUsers.689ef91d.js";import"./arrow-path.24b87f73.js";import"./SupplierSelect.b4181d62.js";import"./exclamation-triangle.54812a62.js";import"./ToolTip.6a353546.js";import"./AnalystSelect.b26870e3.js";import"./BlackKiteProgressBar.b92af985.js";import"./GradeLetterDisplay.136aff58.js";import"./BlackKiteSummaryDescription.69da9c13.js";import"./ratingScoreDescription.3b48b1ea.js";import"./BlackKiteRiskVectorsDisplay.1dfff393.js";import"./CollapsibleSection.7a1648ce.js";import"./TransitionExpand.861d9b26.js";import"./_baseIteratee.a10bf325.js";import"./_Uint8Array.c4a9f1e2.js";import"./keys.32c21d52.js";import"./_baseIsEqual.8fbbf4ed.js";import"./_arrayMap.dcea68f3.js";import"./_baseUniq.5f830398.js";import"./StatusInput.8599e552.js";import"./DynamicForm.e497462e.js";import"./attributeValue.ea53a720.js";import"./TemplateSelect.901296e8.js";const l={};l.setup=(e,r)=>{const s=f("id"),t=f("scorecardId"),p=S.read(s,t),a=x();k(()=>p.data.value,o=>{o&&(a.value=o)},{immediate:!0});const u=[E.list(),Q.list(),j.list(s),M.list()],i=F.read(s),d=I(()=>Boolean(i.data.value)),m=P(),v=S.update(s,t);async function w(){a.value&&((await v.mutateAsync(a.value)).data&&m.success("Updated Successfully"),m.error("Something went wrong."))}async function B(){var n;const o=await y(`${_}/companies/${s.value}/scorecards/${t.value}/docx`,{responseType:"blob"});A.exports.saveAs(o.data,`${(n=i.data.value)==null?void 0:n.name}-${t.value}.docx`)}const c=x(!1);T(()=>C());async function C(){c.value=!0;do(await y.get(`${_}/companies/${s.value}/scorecards/docx/${t.value}/status`)).data.length==0?c.value=!1:await new Promise(n=>setTimeout(n,1e3));while(c.value===!0)}return{id:s,scorecardId:t,scorecard:a,queries:u,ready:d,scorecardUpdate:v,save:w,downloadFile:B,isStillProcessing:c}};l.components=Object.assign({LoadingSpinner:D,BackButton:U,ScorecardInput:q,SaveSvg:h,DownloadSvg:b,TrashSvg:$},l.components);var O=function(){var e=this,r=e.$createElement,s=e._self._c||r;return s("section",{staticClass:"space-y-4"},[e.ready?[s("div",{staticClass:"flex flex-col space-y-4 sm:flex-row sm:items-center sm:space-y-0 sm:space-x-4"},[s("div",[s("BackButton",{attrs:{link:`/admin/companies/${e.id}/scorecards/in-depth/rating-service-2`}})],1),s("div",{staticClass:"flex flex-col"},[s("h3",{staticClass:"font-display text-xl font-semibold"},[e._v("Edit Scorecard")]),s("BaseOverline",{staticClass:"uppercase"},[e._v(" "+e._s(e.scorecardId)+" ")])],1)]),s("form",{on:{submit:function(t){return t.preventDefault(),e.save.apply(null,arguments)}}},[s("BaseSimpleCard",{staticClass:"divide-y"},[s("BaseVueQueries",{attrs:{queries:e.queries},scopedSlots:e._u([{key:"success",fn:function(t){var p=t[0],a=t[1],u=t[2],i=t[3];return[s("ScorecardInput",{attrs:{id:e.id,users:i,entities:u,products:p,templates:a},model:{value:e.scorecard,callback:function(d){e.scorecard=d},expression:"scorecard"}})]}}])}),s("div",{staticClass:"flex flex-col space-y-2 p-4 lg:flex-row lg:space-x-2 lg:space-y-0"},[s("BaseButton",{staticClass:"space-x-2",attrs:{disabled:e.scorecardUpdate.isLoading.value}},[s("SaveSvg",{staticClass:"h-auto w-4 xl:w-5"}),s("span",[e._v("Update")])],1),e.isStillProcessing?e._e():s("BaseButton",{staticClass:"space-x-2",attrs:{"display-type":"info",action:"secondary",type:"button"},on:{click:e.downloadFile}},[s("DownloadSvg",{staticClass:"h-auto w-4 xl:w-5"}),s("span",[e._v("Download")])],1),s("BaseButton",{staticClass:"space-x-2",attrs:{type:"button","display-type":"danger",action:"secondary",to:"..",append:""}},[s("TrashSvg",{staticClass:"h-auto w-4 xl:w-5"}),s("span",[e._v("Cancel")])],1)],1)],1)],1)]:[s("LoadingSpinner")]],2)},R=[];const g={};var z=L(l,O,R,!1,G,null,null,null);function G(e){for(let r in g)this[r]=g[r]}const hs=function(){return z.exports}();export{hs as default};
