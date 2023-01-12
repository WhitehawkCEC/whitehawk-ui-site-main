import{d as c,aS as d,br as $,aP as k,aQ as x,n as h,bs as I,an as F,ca as _}from"./index.1543f442.js";import{A,T}from"./AppTanStackTable.666e7cbc.js";import{S as C}from"./ScorecardStatusBadge.8be51df3.js";import{c as q}from"./createOnChangeFn.4b472854.js";import{F as z}from"./FileSaver.min.0888b041.js";import{u as P}from"./createSimpleTable.a9e677bc.js";import{u as j}from"./useBatchScorecards.96577b70.js";import{u as D}from"./useBatchScorecardsZip.50ce636d.js";import"./magnifying-glass.b7cbe8fe.js";import"./chevron-up.736f4142.js";const u={};u.props={id:{key:"id",required:!0,type:String},subId:{key:"subId",required:!0,type:String},batches:{key:"batches",required:!0,type:Array},zipFiles:{key:"zipFiles",required:!0,type:Array}};u.setup=(e,a)=>{const t=e,n=c(()=>t.id),o=c(()=>t.subId),p=c(()=>t.batches),m=c(()=>t.zipFiles),r=q(),y=[r.accessor("id",{header:()=>"Batch ID",enableColumnFilter:!1}),r.accessor(s=>s.status.state,{id:"state",header:()=>"State",cell:s=>d(C,{props:{value:s.getValue()}}),enableColumnFilter:!1}),r.accessor(s=>s.status.quarter,{id:"quarter",header:()=>"Quarter",enableColumnFilter:!1}),r.accessor(s=>s.status.year,{id:"year",header:()=>"Year",enableColumnFilter:!1}),r.accessor(s=>{var i;return(i=s.meta)==null?void 0:i.updatedAt},{id:"updatedAt",header:()=>"Updated At",cell:s=>d($,{props:{value:s.getValue(),format:"date"}}),enableColumnFilter:!1}),r.display({id:"actions",header:"Actions",cell:({row:s})=>d(T,{props:{actions:[{id:"view",to:`/admin/companies/${n.value}/subscriptions/${o.value}/integrations/1/scorecards/batch/${s.original.id}`},{id:"download",async action(){var f;const i=encodeURIComponent(s.original.id),S=((f=m.value.find(g=>g.batchId===s.original.id))==null?void 0:f.zipFileName)||"",B=await k(`${x}/companies/${n.value}/batch/file/zip/${i}`,{responseType:"blob"});z.exports.saveAs(B.data,`${S}.zip`)},isDisabled:c(()=>!m.value.find(i=>i.batchId===s.original.id))}]}})})];return{instance:P(p,y)}};u.components=Object.assign({AppTanStackTable:A},u.components);var R=function(){var e=this,a=e.$createElement,t=e._self._c||a;return t("AppTanStackTable",{attrs:{table:e.instance}})},V=[];const b={};var w=h(u,R,V,!1,E,null,null,null);function E(e){for(let a in b)this[a]=b[a]}const Q=function(){return w.exports}(),l={};l.setup=(e,a)=>{const t=_("id"),n=_("subscriptionId"),o=[j.list(t),D.list(t)];return{id:t,subscriptionId:n,queries:o}};l.components=Object.assign({BackButton:I,PlusSvg:F,BatchScorecardsTable:Q},l.components);var U=function(){var e=this,a=e.$createElement,t=e._self._c||a;return t("BaseTablePageLayout",{scopedSlots:e._u([{key:"backButton",fn:function(){return[t("BackButton",{attrs:{link:`/admin/companies/${e.id}/subscriptions/${e.subscriptionId}/integrations`}})]},proxy:!0},{key:"overline",fn:function(){return[e._v("Bitsight")]},proxy:!0},{key:"title",fn:function(){return[e._v("Batch Scorecards")]},proxy:!0},{key:"button",fn:function(){return[t("BaseButton",{staticClass:"space-x-1",attrs:{to:"./new",append:""}},[t("PlusSvg",{staticClass:"-ml-1 w-5"}),t("span",[e._v("Batch")])],1)]},proxy:!0},{key:"table",fn:function(){return[t("BaseVueQueries",{attrs:{queries:e.queries},scopedSlots:e._u([{key:"success",fn:function(n){var o=n[0],p=n[1];return[t("BatchScorecardsTable",{attrs:{id:e.id,"sub-id":e.subscriptionId,batches:o,"zip-files":p}})]}}])})]},proxy:!0}])})},H=[];const v={};var M=h(l,U,H,!1,N,null,null,null);function N(e){for(let a in v)this[a]=v[a]}const se=function(){return M.exports}();export{se as default};