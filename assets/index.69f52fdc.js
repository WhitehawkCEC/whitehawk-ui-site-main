import{F as k}from"./folder-arrow-down.817acc4a.js";import{dy as b,d,aS as B,n as x,bs as C,c9 as f,b as S,dw as F,de as $,aK as N}from"./index.e627960d.js";import{A,T}from"./AppTanStackTable.9bda351a.js";import{c as M}from"./createOnChangeFn.7e56f0c4.js";import{u as w}from"./createSimpleTable.7ef16907.js";import{d as E}from"./FormValidation.a5e2f641.js";import"./magnifying-glass.b7cbe8fe.js";import"./chevron-up.736f4142.js";function R(e){switch(e){case b.Status.SUCCESS:return"Success";case b.Status.FAILURE:return"Failure";default:return"NA"}}const o={};o.props={id:{key:"id",required:!0,type:String},subId:{key:"subId",required:!0,type:String},scorecardsMeta:{key:"scorecardsMeta",required:!0,type:Array}};o.setup=(e,a)=>{const t=e,r=d(()=>t.id),m=d(()=>t.subId),i=d(()=>t.scorecardsMeta),c=M(),l=[c.accessor("supplierId",{header:()=>"Supplier ID",enableColumnFilter:!1}),c.accessor("supplierName",{header:()=>"Supplier Name",enableColumnFilter:!1}),c.accessor("status",{header:()=>"Scorecard State",cell:n=>R(n.getValue()),enableColumnFilter:!1}),c.display({id:"actions",header:"Actions",cell:({row:n})=>B(T,{props:{actions:[{id:"edit",to:`/admin/companies/${r.value}/subscriptions/${m.value}/integrations/2/scorecards/in-depth/${n.original.scorecardId}`}]}})})];return{instance:w(i,l)}};o.components=Object.assign({AppTanStackTable:A},o.components);var V=function(){var e=this,a=e.$createElement,t=e._self._c||a;return t("AppTanStackTable",{attrs:{table:e.instance}})},q=[];const y={};var j=x(o,V,q,!1,L,null,null,null);function L(e){for(let a in y)this[a]=y[a]}const Z=function(){return j.exports}(),p={};p.setup=(e,a)=>{const t=f("id"),r=f("subscriptionId"),m=f("batchId"),i=S(""),c=S(!1),l=F.read(t,m),_=$.create(t,r),n=d(()=>{var u;return((u=l.data.value)==null?void 0:u.scorecardMeta)||[]}),g=N();async function I(){var v;const u=n.value.map(s=>({scorecardId:s==null?void 0:s.scorecardId,supplierName:s==null?void 0:s.supplierName}));c.value=!0;try{const s={batchId:(v=l.data.value)==null?void 0:v.id,fileName:i.value,scorecardIds:u},K=await _.mutateAsync(s)}finally{c.value=!1}g.push(`/admin/companies/${t.value}/subscriptions/${r.value}/integrations/2/scorecards/zip-files`)}return{checkZipFileExtension:E,id:t,subscriptionId:r,fileName:i,scorecardsMeta:n,convert:I}};p.components=Object.assign({BackButton:C,FolderDownloadSvg:k,BatchScorecardsStatusV3Table:Z},p.components);var z=function(){var e=this,a=e.$createElement,t=e._self._c||a;return e.scorecardsMeta?t("BaseTablePageLayout",{scopedSlots:e._u([{key:"backButton",fn:function(){return[t("BackButton")]},proxy:!0},{key:"overline",fn:function(){return[e._v("Black Kite")]},proxy:!0},{key:"title",fn:function(){return[e._v("Batch Scorecard")]},proxy:!0},{key:"button",fn:function(){return[t("BaseButton",{staticClass:"space-x-2",attrs:{disabled:!e.fileName},on:{click:e.convert}},[t("FolderDownloadSvg",{staticClass:"-ml-1 w-5"}),t("span",[e._v("ZIP Batch")])],1)]},proxy:!0},{key:"table",fn:function(){return[t("div",{staticClass:"space-y-6"},[t("BatchScorecardsStatusV3Table",{attrs:{id:e.id,"sub-id":e.subscriptionId,"scorecards-meta":e.scorecardsMeta}}),t("BaseSimpleCard",[t("BaseLabel",{staticClass:"flex flex-col p-4 lg:grid lg:grid-cols-3 lg:items-center"},[t("span",{staticClass:"after:content-['*']` after:text-red-700"},[e._v(" File Name: ")]),t("div",{staticClass:"flex flex-col lg:col-span-2"},[t("BaseInputWithValidation",{attrs:{type:"text",required:"","aria-required":"true",validator:e.checkZipFileExtension},model:{value:e.fileName,callback:function(r){e.fileName=r},expression:"fileName"}})],1)])],1)],1)]},proxy:!0}],null,!1,3056871286)}):e._e()},D=[];const h={};var P=x(p,z,D,!1,H,null,null,null);function H(e){for(let a in h)this[a]=h[a]}const ee=function(){return P.exports}();export{ee as default};
