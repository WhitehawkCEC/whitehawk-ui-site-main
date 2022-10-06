import{aJ as V,d as F,aG as q,aT as u,bt as I,a_ as d,aQ as _,aR as h,n as T,aq as B,c1 as P}from"./index.765bdb5f.js";import{A as Q,R as U}from"./RowSelectionInput.2d82ce52.js";import{A as j,T as D}from"./AppTanStackTable.f9746f35.js";import{S as N}from"./ScorecardStatusBadge.a8a817de.js";import{u as E,c as O,i as p,r as z,h as G,g as H,f as Y,b as J,e as L,d as K}from"./createOnChangeFn.c71a9a98.js";import{F as W}from"./FileSaver.min.cf7674db.js";import{u as X}from"./useInDepthScorecards.bdd45771.js";import"./magnifying-glass.b7cbe8fe.js";import"./TransitionExpand.6812981e.js";import"./chevron-up.736f4142.js";const g={};g.props={id:{key:"id",required:!0,type:String},scorecards:{key:"scorecards",required:!0,type:Array}};g.setup=(a,s)=>{const t=a,i=V(),v=F(()=>t.scorecards.map(e=>{var c,f;const r=new Date,o=((c=e.yearQuarterValue.split("/")[0])==null?void 0:c.trim())||r.getUTCFullYear().toString(),l=((f=e.yearQuarterValue.split("/")[1])==null?void 0:f.trim())||`Q${Math.ceil((r.getMonth()+1)/3)}`;return{id:e.id,supplier:e.data["Supplier Name"]||"",status:e.status,year:o,quarter:l,updatedAt:e.data.updatedAt||r.toString()}})),M=F(()=>v.value.filter(e=>e.supplier!==void 0)),S=q(),n=O(),k=[n.display({id:"select",header:({table:e})=>u(Q,{props:{table:e}}),cell:({row:e})=>u(U,{props:{row:e}})}),n.accessor(e=>e.supplier,{id:"supplier",header:()=>"Supplier",cell:e=>e.getValue()}),n.accessor("status",{header:()=>"Status",cell:e=>u(N,{props:{value:e.getValue()}}),enableColumnFilter:!1}),n.accessor("quarter",{header:()=>"Quarter",cell:e=>e.getValue()}),n.accessor("year",{header:()=>"Year",cell:e=>e.getValue(),filterFn:"weakEquals"}),n.accessor("updatedAt",{header:()=>"Last Updated",cell:e=>u(I,{props:{value:e.getValue(),format:"date"}}),enableColumnFilter:!1}),n.display({id:"actions",header:"Actions",cell:({row:e})=>u(D,{props:{actions:[{id:"edit",action(){i.push(`/admin/companies/${encodeURIComponent(t.id)}/scorecards/in-depth/rating-service-1/${e.original.id}`)}},{id:"download",async action(){const r=await _(`${h}/companies/${t.id}/scorecards/${e.original.id}/docx`,{responseType:"blob"}),o=`${e.original.supplier} Scorecard ${e.original.quarter} ${e.original.id}.docx`;W.exports.saveAs(r.data,o)}},{id:"archive",async action(){(await _.delete(`${h}/companies/${t.id}/scorecards/${e.original.id}`)).status===200&&S.success("Archived Scorecard Successfully")}}]}})})],y=d([]),$=d({pageIndex:0,pageSize:10}),b=d(""),w=d([]),R=d({}),C=E({get data(){return M.value},columns:k,state:{get sorting(){return y.value},get pagination(){return $.value},get globalFilter(){return b.value},get columnFilters(){return w.value},get rowSelection(){return R.value}},onSortingChange:p(y),onPaginationChange:p($),onColumnFiltersChange:p(w),onGlobalFilterChange:p(b),globalFilterFn:(e,r,o,l)=>{const c=z(e.getValue(r),o,{threshold:G.CONTAINS});return l(c),c.passed},onRowSelectionChange:p(R),getCoreRowModel:H(),getSortedRowModel:Y(),getFacetedUniqueValues:J(),getPaginationRowModel:L(),getFilteredRowModel:K()});return{instance:C,bulkActions:[{id:"archive",async action(){const e=C.getSelectedRowModel().rows,r=e.length;let o=0;if(r>0){for(const l of e){const c=l.original.id;(await _.delete(`${h}/companies/${t.id}/scorecards/${c}`)).status===200&&o++}S.success(`Archived ${o}/${r} Scorecard(s) Successfully`),i.push(`/admin/companies/${t.id}/scorecards/in-depth/rating-service-1`)}}}]}};g.components=Object.assign({AppTanStackTable:j},g.components);var Z=function(){var a=this,s=a.$createElement,t=a._self._c||s;return t("AppTanStackTable",{attrs:{table:a.instance,"table-actions":a.bulkActions}})},ee=[];const A={};var te=T(g,Z,ee,!1,ae,null,null,null);function ae(a){for(let s in A)this[s]=A[s]}const se=function(){return te.exports}(),m={};m.setup=(a,s)=>{const t=P("id"),i=X.list(t);return{id:t,scorecards:i}};m.components=Object.assign({PlusSvg:B,ScorecardsTable:se},m.components);var re=function(){var a=this,s=a.$createElement,t=a._self._c||s;return t("div",{staticClass:"space-y-6"},[t("div",{staticClass:"flex items-center justify-between"},[t("div",{staticClass:"flex flex-col"},[t("BaseTypography",{staticClass:"uppercase text-gray-500",attrs:{variant:"overline"}},[a._v(" Rating Service 1 ")]),t("BaseTypography",{attrs:{variant:"h5",component:"h3"}},[a._v(" In-Depth Scorecards ")])],1),t("BaseButton",{staticClass:"space-x-1",attrs:{type:"button",to:`/admin/companies/${a.id}/scorecards/in-depth/rating-service-1/new`}},[t("PlusSvg",{staticClass:"w-5"}),t("span",[a._v("Scorecard")])],1)],1),t("BaseVueQuery",{attrs:{query:a.scorecards},scopedSlots:a._u([{key:"success",fn:function(i){var v=i.data;return[t("ScorecardsTable",{attrs:{id:a.id,scorecards:v}})]}}])})],1)},oe=[];const x={};var ne=T(m,re,oe,!1,ce,null,null,null);function ce(a){for(let s in x)this[s]=x[s]}const Se=function(){return ne.exports}();export{Se as default};
