import{U as C}from"./arrow-down-on-square.bf61cdc5.js";import{D as b}from"./document-arrow-down.2aec0021.js";import{T as $}from"./trash.78f57a7a.js";import{L as D,bt as U,c7 as f,r as y,az as T,bH as k,c as F,aF as I,aa as P,aP as x,aQ as _,n as L}from"./index.eb352f97.js";import{S as q}from"./ScorecardInput.53319c8e.js";import{F as E}from"./FileSaver.min.cdb537ed.js";import{u as Q}from"./useProducts.e712ee57.js";import{u as j}from"./useScorecardTemplates.3275b42f.js";import{u as z}from"./useBlackKiteEntities.1461a466.js";import{u as S}from"./useInDepthScorecardsV2.223ded60.js";import{u as A}from"./useUsers.c2e87565.js";import"./arrow-path.24b87f73.js";import"./BlackKiteProgressBar.82c9ad5c.js";import"./index.ebbce841.js";import"./ToolTip.44f766b6.js";import"./GradeLetterDisplay.adc1e0f1.js";import"./BlackKiteReportSummary.6d4e115e.js";import"./BlackKiteRiskVectorsDisplay.7607c13e.js";import"./ratingScoreDescription.dc21462c.js";import"./SupplierSelect.b891b1b0.js";import"./TransitionExpand.8b04df52.js";import"./ObjectDisplay.e0cdef03.js";import"./_baseIteratee.0fddd719.js";import"./_Uint8Array.130f323c.js";import"./keys.2c39222e.js";import"./_baseIsEqual.33453a95.js";import"./_arrayMap.dcea68f3.js";import"./_baseUniq.5731b0d6.js";import"./AnalystSelect.6212e330.js";import"./StatusInput.5fa9fc4c.js";import"./DynamicForm.08cda9b0.js";import"./attributeValue.ea53a720.js";import"./TemplateSelect.60dd607c.js";const l={};l.setup=(e,r)=>{const s=f("id"),t=f("scorecardId"),p=S.read(s,t),a=y();T(()=>p.data.value,o=>{o&&(a.value=o)},{immediate:!0});const u=[Q.list(),j.list(),z.list(s),A.list()],c=k.read(s),d=F(()=>Boolean(c.data.value)),m=I(),v=S.update(s,t);async function w(){a.value&&((await v.mutateAsync(a.value)).data&&m.success("Updated Successfully"),m.error("Something went wrong."))}async function B(){var n;const o=await x(`${_}/companies/${s.value}/scorecards/${t.value}/docx`,{responseType:"blob"});E.exports.saveAs(o.data,`${(n=c.data.value)==null?void 0:n.name}-${t.value}.docx`)}const i=y(!1);P(()=>h());async function h(){i.value=!0;do(await x.get(`${_}/companies/${s.value}/scorecards/docx/${t.value}/status`)).data.length==0?i.value=!1:await new Promise(n=>setTimeout(n,1e3));while(i.value===!0)}return{id:s,scorecardId:t,scorecard:a,queries:u,ready:d,scorecardUpdate:v,save:w,downloadFile:B,isStillProcessing:i}};l.components=Object.assign({LoadingSpinner:D,BackButton:U,ScorecardInput:q,SaveSvg:C,DownloadSvg:b,TrashSvg:$},l.components);var M=function(){var e=this,r=e.$createElement,s=e._self._c||r;return s("section",{staticClass:"space-y-4"},[e.ready?[s("div",{staticClass:"flex flex-col space-y-4 sm:flex-row sm:items-center sm:space-y-0 sm:space-x-4"},[s("BackButton"),s("div",{staticClass:"flex flex-col"},[s("BaseOverline",{staticClass:"uppercase text-gray-500"},[e._v(" "+e._s(e.scorecardId)+" ")]),s("BaseTypography",{attrs:{variant:"h5",component:"h2"}},[e._v(" Edit Scorecard ")])],1)],1),s("form",{on:{submit:function(t){return t.preventDefault(),e.save.apply(null,arguments)}}},[s("BaseSimpleCard",{staticClass:"divide-y"},[s("BaseVueQueries",{attrs:{queries:e.queries},scopedSlots:e._u([{key:"success",fn:function(t){var p=t[0],a=t[1],u=t[2],c=t[3];return[s("ScorecardInput",{attrs:{id:e.id,users:c,entities:u,products:p,templates:a},model:{value:e.scorecard,callback:function(d){e.scorecard=d},expression:"scorecard"}})]}}])}),s("div",{staticClass:"flex flex-col space-y-2 p-4 lg:flex-row lg:space-x-2 lg:space-y-0"},[s("BaseButton",{staticClass:"space-x-2",attrs:{disabled:e.scorecardUpdate.isLoading.value}},[s("SaveSvg",{staticClass:"h-auto w-4 xl:w-5"}),s("span",[e._v("Update")])],1),e.isStillProcessing?e._e():s("BaseButton",{staticClass:"space-x-2",attrs:{"display-type":"info",action:"secondary",type:"button"},on:{click:e.downloadFile}},[s("DownloadSvg",{staticClass:"h-auto w-4 xl:w-5"}),s("span",[e._v("Download")])],1),s("BaseButton",{staticClass:"space-x-2",attrs:{type:"button","display-type":"danger",action:"secondary",to:"..",append:""}},[s("TrashSvg",{staticClass:"h-auto w-4 xl:w-5"}),s("span",[e._v("Cancel")])],1)],1)],1)],1)]:s("LoadingSpinner")],2)},O=[];const g={};var R=L(l,M,O,!1,H,null,null,null);function H(e){for(let r in g)this[r]=g[r]}const Cs=function(){return R.exports}();export{Cs as default};
