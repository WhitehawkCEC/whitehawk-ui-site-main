import{d as f,aK as b,aU as l,bu as h,n as m,aq as v,c2 as y}from"./index.ad2ff904.js";import{A as S,T as x}from"./AppTanStackTable.a9750958.js";import{S as g}from"./ScorecardStatusBadge.56a0c7bc.js";import{c as B}from"./createOnChangeFn.9f62ccbf.js";import{u as T}from"./createSimpleTable.e78f974d.js";import{u as $}from"./useBatchScorecardsV2.dcaac4bc.js";import"./magnifying-glass.b7cbe8fe.js";import"./TransitionExpand.5b598212.js";import"./chevron-up.736f4142.js";const n={};n.props={batches:{key:"batches",required:!0,type:Array}};n.setup=(e,s)=>{const a=e,o=f(()=>a.batches),u=b(),r=B(),_=[r.accessor("buyer",{header:()=>"Buyer",enableColumnFilter:!1}),r.accessor(t=>t.status.state,{id:"state",header:()=>"State",cell:t=>l(g,{props:{value:t.getValue()}}),enableColumnFilter:!1}),r.accessor(t=>t.status.quarter,{id:"quarter",header:()=>"Quarter",enableColumnFilter:!1}),r.accessor(t=>t.status.year,{id:"year",header:()=>"Year",enableColumnFilter:!1}),r.accessor(t=>{var i;return(i=t.meta)==null?void 0:i.updatedAt},{id:"updatedAt",header:()=>"Updated At",cell:t=>l(h,{props:{value:t.getValue(),format:"date"}}),enableColumnFilter:!1}),r.display({id:"actions",header:"Actions",cell:({row:t})=>l(x,{props:{actions:[{id:"view",action(){u.push(`/admin/companies/${t.original.buyer}/scorecards/batch/rating-service-2/${t.original.id}`)}}]}})})];return{instance:T(o,_)}};n.components=Object.assign({AppTanStackTable:S},n.components);var A=function(){var e=this,s=e.$createElement,a=e._self._c||s;return a("AppTanStackTable",{attrs:{table:e.instance}})},C=[];const p={};var k=m(n,A,C,!1,F,null,null,null);function F(e){for(let s in p)this[s]=p[s]}const V=function(){return k.exports}(),c={};c.setup=(e,s)=>{const a=y("id");return{batchQuery:$.list(a)}};c.components=Object.assign({PlusSvg:v,BatchScorecardsV2Table:V},c.components);var q=function(){var e=this,s=e.$createElement,a=e._self._c||s;return a("BaseTablePageLayout",{scopedSlots:e._u([{key:"title",fn:function(){return[e._v("Scorecard Batches")]},proxy:!0},{key:"button",fn:function(){return[a("BaseButton",{staticClass:"space-x-1",attrs:{to:"./new",append:""}},[a("PlusSvg",{staticClass:"w-4 xl:w-5"}),a("span",[e._v("Batch")])],1)]},proxy:!0},{key:"table",fn:function(){return[a("BaseVueQuery",{attrs:{query:e.batchQuery},scopedSlots:e._u([{key:"success",fn:function(o){var u=o.data;return[a("BatchScorecardsV2Table",{attrs:{batches:u}})]}}])})]},proxy:!0}])})},Q=[];const d={};var j=m(c,q,Q,!1,w,null,null,null);function w(e){for(let s in d)this[s]=d[s]}const K=function(){return j.exports}();export{K as default};