import{an as c,c7 as u,n as i}from"./index.78dd2457.js";import{B as p}from"./BatchScorecardsV2Table.c39e6fbd.js";import{u as l}from"./useBatchScorecardsV2.bc685576.js";import"./AppTanStackTable.98d97e9f.js";import"./createOnChangeFn.17d6c734.js";import"./chevron-up.736f4142.js";import"./magnifying-glass.b7cbe8fe.js";import"./TransitionExpand.bbfe5743.js";import"./ScorecardStatusBadge.33e13dc1.js";import"./createSimpleTable.a91d14b2.js";const s={};s.setup=(t,r)=>{const e=u("id");return{batchQuery:l.list(e)}};s.components=Object.assign({PlusSvg:c,BatchScorecardsV2Table:p},s.components);var _=function(){var t=this,r=t.$createElement,e=t._self._c||r;return e("BaseTablePageLayout",{scopedSlots:t._u([{key:"title",fn:function(){return[t._v("Scorecard Batches")]},proxy:!0},{key:"button",fn:function(){return[e("BaseButton",{staticClass:"space-x-1",attrs:{to:"./new",append:""}},[e("PlusSvg",{staticClass:"w-4 xl:w-5"}),e("span",[t._v("Batch")])],1)]},proxy:!0},{key:"table",fn:function(){return[e("BaseVueQuery",{attrs:{query:t.batchQuery},scopedSlots:t._u([{key:"success",fn:function(a){var o=a.data;return[e("BatchScorecardsV2Table",{attrs:{batches:o}})]}}])})]},proxy:!0}])})},m=[];const n={};var f=i(s,_,m,!1,d,null,null,null);function d(t){for(let r in n)this[r]=n[r]}const Q=function(){return f.exports}();export{Q as default};
