import{S as h,F as v}from"./ScorecardBatchSuccessFailBadge.d4c44b33.js";import{d as S,aT as y,n as b,bu as B,c1 as d,r as m,aB as x}from"./index.765bdb5f.js";import{A as k}from"./AppTanStackTable.f9746f35.js";import{c as F}from"./createOnChangeFn.c71a9a98.js";import{u as T}from"./createSimpleTable.aee8a25f.js";import{u as C}from"./useBatchScorecardsV2.a40b65c2.js";import"./magnifying-glass.b7cbe8fe.js";import"./TransitionExpand.6812981e.js";import"./chevron-up.736f4142.js";const n={};n.props={batches:{key:"batches",required:!0,type:Array},entites:{key:"entites",required:!0,type:Array}};n.setup=(e,a)=>{const t=e,u=S(()=>t.entites.map(s=>{var p;return{id:s.id,supplier:s.name,state:t.batches.some(i=>i.supplierId===s.id)?"Success":"Failed",scorecardId:(p=t.batches.find(i=>i.supplierId===s.id))==null?void 0:p.scorecardId}})),r=F(),c=[r.accessor("id",{header:()=>"Supplier ID",enableColumnFilter:!1}),r.accessor("supplier",{header:()=>"Supplier Name",enableColumnFilter:!1}),r.accessor("state",{header:()=>"Scorecard State",cell:s=>y(h,{props:{value:s.getValue()}}),enableColumnFilter:!1})];return{instance:T(u,c)}};n.components=Object.assign({AppTanStackTable:k},n.components);var I=function(){var e=this,a=e.$createElement,t=e._self._c||a;return t("AppTanStackTable",{attrs:{table:e.instance}})},$=[];const _={};var g=b(n,I,$,!1,A,null,null,null);function A(e){for(let a in _)this[a]=_[a]}const j=function(){return g.exports}(),o={};o.setup=(e,a)=>{const t=d("id"),u=d("batchId"),r=C.read(t,u),c=m(),l=m();return x(()=>r.data.value,s=>{s&&(c.value=s.scorecardIds,l.value=s.batchRequest.entities)},{immediate:!0}),{batches:c,entites:l}};o.components=Object.assign({BackButton:B,FolderDownloadSvg:v,BatchScorecardStatusV2Table:j},o.components);var w=function(){var e=this,a=e.$createElement,t=e._self._c||a;return e.batches&&e.entites?t("BaseTablePageLayout",{scopedSlots:e._u([{key:"backButton",fn:function(){return[t("BackButton")]},proxy:!0},{key:"title",fn:function(){return[e._v("Batch Status")]},proxy:!0},{key:"button",fn:function(){return[t("BaseButton",{staticClass:"space-x-1",attrs:{to:"../convert",append:"",action:"secondary"}},[t("FolderDownloadSvg",{staticClass:"w-4 xl:w-5"}),t("span",[e._v("Convert")])],1)]},proxy:!0},{key:"table",fn:function(){return[t("BatchScorecardStatusV2Table",{attrs:{batches:e.batches,entites:e.entites}})]},proxy:!0}],null,!1,3213689416)}):e._e()},R=[];const f={};var q=b(o,w,R,!1,D,null,null,null);function D(e){for(let a in f)this[a]=f[a]}const Q=function(){return q.exports}();export{Q as default};
