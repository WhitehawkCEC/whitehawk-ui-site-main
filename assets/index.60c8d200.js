import{U as h}from"./arrow-down-on-square.bf61cdc5.js";import{D as b}from"./document-arrow-down.2aec0021.js";import{T as $}from"./trash.78f57a7a.js";import{L as D,bv as U,c2 as f,r as x,aC as k,bJ as I,d as T,aH as F,ac as P,aR as y,aS as S,n as L}from"./index.ad2ff904.js";import{S as q}from"./ScorecardInput.aebae2f1.js";import{F as E}from"./FileSaver.min.bff023fc.js";import{u as R}from"./useProducts.65c031cf.js";import{u as j}from"./useScorecardTemplates.5f18db46.js";import{u as A}from"./useBlackKiteEntities.56086fba.js";import{u as _}from"./useInDepthScorecardsV2.7c36eff1.js";import{u as M}from"./useUsers.0e71c22f.js";import"./arrow-path.24b87f73.js";import"./SupplierSelect.538b1901.js";import"./exclamation-triangle.54812a62.js";import"./ToolTip.5148f62d.js";import"./ObjectDisplay.dc8241fa.js";import"./BlackKiteProgressBar.120acff5.js";import"./GradeLetterDisplay.eb702f06.js";import"./BlackKiteSummaryDescription.399bfe90.js";import"./ratingScoreDescription.3b48b1ea.js";import"./BlackKiteRiskVectorsDisplay.6fe99229.js";import"./CollapsibleSection.cb066c03.js";import"./TransitionExpand.5b598212.js";import"./_baseIteratee.1366e3fd.js";import"./_Uint8Array.2d00e5af.js";import"./keys.3ad8f78f.js";import"./_baseIsEqual.6f421f25.js";import"./_arrayMap.dcea68f3.js";import"./_baseUniq.ed87766f.js";import"./AnalystSelect.0d50e383.js";import"./StatusInput.9809d61e.js";import"./DynamicForm.50aff3fb.js";import"./attributeValue.ea53a720.js";import"./TemplateSelect.20901127.js";const l={};l.setup=(e,r)=>{const s=f("id"),t=f("scorecardId"),p=_.read(s,t),a=x();k(()=>p.data.value,o=>{o&&(a.value=o)},{immediate:!0});const u=[R.list(),j.list(),A.list(s),M.list()],i=I.read(s),d=T(()=>Boolean(i.data.value)),m=F(),v=_.update(s,t);async function w(){a.value&&((await v.mutateAsync(a.value)).data&&m.success("Updated Successfully"),m.error("Something went wrong."))}async function C(){var n;const o=await y(`${S}/companies/${s.value}/scorecards/${t.value}/docx`,{responseType:"blob"});E.exports.saveAs(o.data,`${(n=i.data.value)==null?void 0:n.name}-${t.value}.docx`)}const c=x(!1);P(()=>B());async function B(){c.value=!0;do(await y.get(`${S}/companies/${s.value}/scorecards/docx/${t.value}/status`)).data.length==0?c.value=!1:await new Promise(n=>setTimeout(n,1e3));while(c.value===!0)}return{id:s,scorecardId:t,scorecard:a,queries:u,ready:d,scorecardUpdate:v,save:w,downloadFile:C,isStillProcessing:c}};l.components=Object.assign({LoadingSpinner:D,BackButton:U,ScorecardInput:q,SaveSvg:h,DownloadSvg:b,TrashSvg:$},l.components);var O=function(){var e=this,r=e.$createElement,s=e._self._c||r;return s("section",{staticClass:"space-y-4"},[e.ready?[s("div",{staticClass:"flex flex-col space-y-4 sm:flex-row sm:items-center sm:space-y-0 sm:space-x-4"},[s("div",[s("BackButton",{attrs:{link:`/admin/companies/${e.id}/scorecards/in-depth/rating-service-2`}})],1),s("div",{staticClass:"flex flex-col"},[s("h3",{staticClass:"font-display text-xl font-semibold"},[e._v("Edit Scorecard")]),s("BaseOverline",{staticClass:"uppercase"},[e._v(" "+e._s(e.scorecardId)+" ")])],1)]),s("form",{on:{submit:function(t){return t.preventDefault(),e.save.apply(null,arguments)}}},[s("BaseSimpleCard",{staticClass:"divide-y"},[s("BaseVueQueries",{attrs:{queries:e.queries},scopedSlots:e._u([{key:"success",fn:function(t){var p=t[0],a=t[1],u=t[2],i=t[3];return[s("ScorecardInput",{attrs:{id:e.id,users:i,entities:u,products:p,templates:a},model:{value:e.scorecard,callback:function(d){e.scorecard=d},expression:"scorecard"}})]}}])}),s("div",{staticClass:"flex flex-col space-y-2 p-4 lg:flex-row lg:space-x-2 lg:space-y-0"},[s("BaseButton",{staticClass:"space-x-2",attrs:{disabled:e.scorecardUpdate.isLoading.value}},[s("SaveSvg",{staticClass:"h-auto w-4 xl:w-5"}),s("span",[e._v("Update")])],1),e.isStillProcessing?e._e():s("BaseButton",{staticClass:"space-x-2",attrs:{"display-type":"info",action:"secondary",type:"button"},on:{click:e.downloadFile}},[s("DownloadSvg",{staticClass:"h-auto w-4 xl:w-5"}),s("span",[e._v("Download")])],1),s("BaseButton",{staticClass:"space-x-2",attrs:{type:"button","display-type":"danger",action:"secondary",to:"..",append:""}},[s("TrashSvg",{staticClass:"h-auto w-4 xl:w-5"}),s("span",[e._v("Cancel")])],1)],1)],1)],1)]:[s("LoadingSpinner")]],2)},Q=[];const g={};var z=L(l,O,Q,!1,H,null,null,null);function H(e){for(let r in g)this[r]=g[r]}const bs=function(){return z.exports}();export{bs as default};