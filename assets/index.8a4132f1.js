import{c as k,aF as V,aS as u,bs as T,aP as f,aQ as v,a_ as d,aK as M,n as A,an as I,c7 as q}from"./index.d0befb50.js";import{A as P,R as B}from"./RowSelectionInput.619d0d16.js";import{A as U,T as j}from"./AppTanStackTable.ca34eb6c.js";import{S as D}from"./ScorecardStatusBadge.c976feb3.js";import{u as N,c as O,i as p,r as E,h as Q,g as z,f as H,b as L,e as G,d as K}from"./createOnChangeFn.a792e913.js";import{F as Y}from"./FileSaver.min.d4926e1b.js";import{u as J}from"./useInDepthScorecardsV2.cdc6c76b.js";import"./magnifying-glass.b7cbe8fe.js";import"./TransitionExpand.32f5b016.js";import"./chevron-up.736f4142.js";const g={};g.props={id:{key:"id",required:!0,type:String},scorecards:{key:"scorecards",required:!0,type:Array}};g.setup=(t,a)=>{const s=t,i=k(()=>s.scorecards.map(({id:e,data:r,meta:o})=>{const{supplier:l,status:n}=r;return{id:e,supplier:l.name,status:n.state,year:n.year,quarter:n.quarter,updatedAt:o.updatedAt}})),m=V(),c=O(),x=[c.display({id:"select",header:({table:e})=>u(P,{props:{table:e}}),cell:({row:e})=>u(B,{props:{row:e}})}),c.accessor(e=>e.supplier,{id:"supplier",header:()=>"Supplier",cell:e=>e.getValue()}),c.accessor("status",{header:()=>"Status",cell:e=>u(D,{props:{value:e.getValue()}})}),c.accessor("quarter",{header:()=>"Quarter",cell:e=>e.getValue()}),c.accessor("year",{header:()=>"Year",cell:e=>e.getValue()}),c.accessor("updatedAt",{header:()=>"Last Updated",cell:e=>u(T,{props:{value:e.getValue(),format:"date"}}),enableColumnFilter:!1}),c.display({id:"actions",header:"Actions",cell:({row:e})=>u(j,{props:{actions:[{id:"edit",to:`/admin/companies/${encodeURIComponent(s.id)}/scorecards/in-depth/rating-service-2/${e.original.id}`},{id:"download",async action(){const r=await f(`${v}/companies/${s.id}/scorecards/${e.original.id}/docx`,{responseType:"blob"}),o=`${e.original.supplier} Scorecard ${e.original.quarter} ${e.original.id}.docx`;Y.exports.saveAs(r.data,o)}},{id:"archive",async action(){(await f.delete(`${v}/companies/${s.id}/scorecards-v2/${e.original.id}`)).status===200&&m.success("Archived Scorecard Successfully")}}]}})})],S=d([]),h=d({pageIndex:0,pageSize:10}),y=d(""),b=d([]),$=d({}),R=N({get data(){return i.value},columns:x,state:{get sorting(){return S.value},get pagination(){return h.value},get globalFilter(){return y.value},get columnFilters(){return b.value},get rowSelection(){return $.value}},onSortingChange:p(S),onPaginationChange:p(h),onColumnFiltersChange:p(b),onGlobalFilterChange:p(y),globalFilterFn:(e,r,o,l)=>{const n=E(e.getValue(r),o,{threshold:Q.CONTAINS});return l(n),n.passed},onRowSelectionChange:p($),getCoreRowModel:z(),getSortedRowModel:H(),getFacetedUniqueValues:L(),getPaginationRowModel:G(),getFilteredRowModel:K()}),C=M();return{instance:R,bulkActions:[{id:"archive",async action(){const e=R.getSelectedRowModel().rows,r=e.length;let o=0;if(r>0){for(const l of e){const n=l.original.id;(await f.delete(`${v}/companies/${s.id}/scorecards-v2/${n}`)).status===200&&o++}m.success(`Archived ${o}/${r} Scorecard(s) Successfully`),C.push(`/admin/companies/${s.id}/scorecards/in-depth/rating-service-2`)}}}]}};g.components=Object.assign({AppTanStackTable:U},g.components);var W=function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("AppTanStackTable",{attrs:{table:t.instance,"table-actions":t.bulkActions}})},X=[];const w={};var Z=A(g,W,X,!1,ee,null,null,null);function ee(t){for(let a in w)this[a]=w[a]}const te=function(){return Z.exports}(),_={};_.setup=(t,a)=>{const s=q("id"),i=J.list(s);return{id:s,scorecards:i}};_.components=Object.assign({PlusSvg:I,ScorecardsV2Table:te},_.components);var se=function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("BaseTablePageLayout",{scopedSlots:t._u([{key:"overline",fn:function(){return[t._v("Rating Service 2")]},proxy:!0},{key:"title",fn:function(){return[t._v("In-Depth Scorecards")]},proxy:!0},{key:"button",fn:function(){return[s("BaseButton",{staticClass:"space-x-1",attrs:{type:"button",to:"new",append:""}},[s("PlusSvg",{staticClass:"w-5"}),s("span",[t._v("Scorecard")])],1)]},proxy:!0},{key:"table",fn:function(){return[s("BaseVueQuery",{attrs:{query:t.scorecards},scopedSlots:t._u([{key:"success",fn:function(i){var m=i.data;return[s("ScorecardsV2Table",{attrs:{id:t.id,scorecards:m}})]}}])})]},proxy:!0}])})},ae=[];const F={};var re=A(_,se,ae,!1,oe,null,null,null);function oe(t){for(let a in F)this[a]=F[a]}const Se=function(){return re.exports}();export{Se as default};
