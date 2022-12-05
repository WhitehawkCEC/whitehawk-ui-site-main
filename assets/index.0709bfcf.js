import{U as C}from"./arrow-down-on-square.bf61cdc5.js";import{D as b}from"./document-arrow-down.2aec0021.js";import{T as $}from"./trash.78f57a7a.js";import{L as D,bt as U,c5 as f,r as y,az as T,bH as k,c as F,aF as I,aa as P,aP as x,aQ as _,n as L}from"./index.76f70903.js";import{S as q}from"./ScorecardInput.c0e4cbd3.js";import{F as E}from"./FileSaver.min.b8809f1a.js";import{u as Q}from"./useProducts.ea21ba67.js";import{u as j}from"./useScorecardTemplates.ed14586c.js";import{u as z}from"./useBlackKiteEntities.f6b3e5a7.js";import{u as S}from"./useInDepthScorecardsV2.4490001a.js";import{u as A}from"./useUsers.274b70c6.js";import"./arrow-path.24b87f73.js";import"./BlackKiteProgressBar.e0298342.js";import"./index.ebbce841.js";import"./ToolTip.81410496.js";import"./GradeLetterDisplay.13c2b42f.js";import"./BlackKiteReportSummary.da95de5a.js";import"./BlackKiteRiskVectorsDisplay.e9817c52.js";import"./ratingScoreDescription.dc21462c.js";import"./SupplierSelect.bace22de.js";import"./TransitionExpand.c1724d34.js";import"./AnalystSelect.e4f1686c.js";import"./_baseIteratee.78cad3ec.js";import"./_Uint8Array.fdf35f8f.js";import"./keys.17c8d06e.js";import"./_baseIsEqual.56bb7bbe.js";import"./_arrayMap.dcea68f3.js";import"./_baseUniq.69d7c7be.js";import"./StatusInput.389ed929.js";import"./DynamicForm.1897c2ae.js";import"./attributeValue.ea53a720.js";import"./TemplateSelect.3401e447.js";const l={};l.setup=(e,r)=>{const s=f("id"),a=f("scorecardId"),p=S.read(s,a),t=y();T(()=>p.data.value,o=>{o&&(t.value=o)},{immediate:!0});const u=[Q.list(),j.list(),z.list(s),A.list()],c=k.read(s),d=F(()=>Boolean(c.data.value)),m=I(),v=S.update(s,a);async function w(){t.value&&((await v.mutateAsync(t.value)).data&&m.success("Updated Successfully"),m.error("Something went wrong."))}async function B(){var n;const o=await x(`${_}/companies/${s.value}/scorecards/${a.value}/docx`,{responseType:"blob"});E.exports.saveAs(o.data,`${(n=c.data.value)==null?void 0:n.name}-${a.value}.docx`)}const i=y(!1);P(()=>h());async function h(){i.value=!0;do(await x.get(`${_}/companies/${s.value}/scorecards/docx/${a.value}/status`)).data.length==0?i.value=!1:await new Promise(n=>setTimeout(n,1e3));while(i.value===!0)}return{id:s,scorecardId:a,scorecard:t,queries:u,ready:d,scorecardUpdate:v,save:w,downloadFile:B,isStillProcessing:i}};l.components=Object.assign({LoadingSpinner:D,BackButton:U,ScorecardInput:q,SaveSvg:C,DownloadSvg:b,TrashSvg:$},l.components);var M=function(){var e=this,r=e.$createElement,s=e._self._c||r;return s("section",{staticClass:"space-y-4"},[e.ready?[s("div",{staticClass:"flex flex-col space-y-4 sm:flex-row sm:items-center sm:space-y-0 sm:space-x-4"},[s("BackButton"),s("div",{staticClass:"flex flex-col"},[s("BaseOverline",{staticClass:"uppercase text-gray-500"},[e._v(" "+e._s(e.scorecardId)+" ")]),s("BaseTypography",{attrs:{variant:"h5",component:"h2"}},[e._v(" Edit Scorecard ")])],1)],1),s("form",{on:{submit:function(a){return a.preventDefault(),e.save.apply(null,arguments)}}},[s("BaseSimpleCard",{staticClass:"divide-y"},[s("BaseVueQueries",{attrs:{queries:e.queries},scopedSlots:e._u([{key:"success",fn:function(a){var p=a[0],t=a[1],u=a[2],c=a[3];return[s("ScorecardInput",{attrs:{id:e.id,users:c,entities:u,products:p,templates:t},model:{value:e.scorecard,callback:function(d){e.scorecard=d},expression:"scorecard"}})]}}])}),s("div",{staticClass:"flex flex-col space-y-2 p-4 lg:flex-row lg:space-x-2 lg:space-y-0"},[s("BaseButton",{staticClass:"space-x-2",attrs:{disabled:e.scorecardUpdate.isLoading.value}},[s("SaveSvg",{staticClass:"h-auto w-4 xl:w-5"}),s("span",[e._v("Update")])],1),e.isStillProcessing?e._e():s("BaseButton",{staticClass:"space-x-2",attrs:{"display-type":"info",action:"secondary",type:"button"},on:{click:e.downloadFile}},[s("DownloadSvg",{staticClass:"h-auto w-4 xl:w-5"}),s("span",[e._v("Download")])],1),s("BaseButton",{staticClass:"space-x-2",attrs:{type:"button","display-type":"danger",action:"secondary",to:"..",append:""}},[s("TrashSvg",{staticClass:"h-auto w-4 xl:w-5"}),s("span",[e._v("Cancel")])],1)],1)],1)],1)]:s("LoadingSpinner")],2)},O=[];const g={};var R=L(l,M,O,!1,H,null,null,null);function H(e){for(let r in g)this[r]=g[r]}const hs=function(){return R.exports}();export{hs as default};