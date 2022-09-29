import{S as h,F as v}from"./ScorecardBatchSuccessFailBadge.4eb633b7.js";import{B as S}from"./BackButton.8f96cce7.js";import{A as y}from"./AppTanStackTable.aeb2fd41.js";import{c as B}from"./createOnChangeFn.41680a6f.js";import{d as x,aS as g,n as b,b_ as m,r as d,aB as k}from"./index.e7f697eb.js";import{u as C}from"./createSimpleTable.a9df3eb6.js";import{u as F}from"./useBatchScorecards.8084cc2f.js";import"./chevron-left.0808b01b.js";import"./magnifying-glass.b7cbe8fe.js";import"./TransitionExpand.78bc4a1e.js";import"./chevron-up.736f4142.js";const n={};n.props={batches:{key:"batches",required:!0,type:Array},bitsightCompanies:{key:"bitsightCompanies",required:!0,type:Array}};n.setup=(e,a)=>{const t=e,i=x(()=>t.bitsightCompanies.map(s=>{var p;return{id:s.id,supplier:s.name,state:t.batches.some(l=>l.supplierId===s.id)?"Success":"Failed",scorecardId:(p=t.batches.find(l=>l.supplierId===s.id))==null?void 0:p.scorecardId}})),r=B(),o=[r.accessor("id",{header:()=>"Supplier ID",enableColumnFilter:!1}),r.accessor("supplier",{header:()=>"Supplier Name",enableColumnFilter:!1}),r.accessor("state",{header:()=>"Scorecard State",cell:s=>g(h,{props:{value:s.getValue()}}),enableColumnFilter:!1})];return{instance:C(i,o)}};n.components=Object.assign({AppTanStackTable:y},n.components);var I=function(){var e=this,a=e.$createElement,t=e._self._c||a;return t("AppTanStackTable",{attrs:{table:e.instance}})},T=[];const _={};var $=b(n,I,T,!1,A,null,null,null);function A(e){for(let a in _)this[a]=_[a]}const j=function(){return $.exports}(),c={};c.setup=(e,a)=>{const t=m("id"),i=m("batchId"),r=F.read(t,i),o=d(),u=d();return k(()=>r.data.value,s=>{s&&(o.value=s.scorecardIds,u.value=s.batchRequest.supplierInfos)},{immediate:!0}),{batches:o,companies:u}};c.components=Object.assign({BackButton:S,FolderDownloadSvg:v,BatchScorecardStatusTable:j},c.components);var w=function(){var e=this,a=e.$createElement,t=e._self._c||a;return e.batches&&e.companies?t("BaseTablePageLayout",{scopedSlots:e._u([{key:"backButton",fn:function(){return[t("BackButton")]},proxy:!0},{key:"title",fn:function(){return[e._v("Batch Status")]},proxy:!0},{key:"button",fn:function(){return[t("BaseButton",{staticClass:"space-x-1",attrs:{to:"../convert",append:"",action:"secondary"}},[t("FolderDownloadSvg",{staticClass:"w-4 xl:w-5"}),t("span",[e._v("Convert")])],1)]},proxy:!0},{key:"table",fn:function(){return[t("BatchScorecardStatusTable",{attrs:{batches:e.batches,"bitsight-companies":e.companies}})]},proxy:!0}],null,!1,3318675455)}):e._e()},R=[];const f={};var q=b(c,w,R,!1,D,null,null,null);function D(e){for(let a in f)this[a]=f[a]}const K=function(){return q.exports}();export{K as default};