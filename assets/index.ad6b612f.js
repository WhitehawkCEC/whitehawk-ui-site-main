import{d as k,aJ as T,aG as M,aS as d,br as I,aZ as i,aP as g,aQ as _,n as C,aq as P,b_ as V}from"./index.181068a8.js";import{A as q,R as B}from"./RowSelectionInput.3d40d12f.js";import{A as N,T as U}from"./AppTanStackTable.4f5e0374.js";import{u as j,c as O,i as l,r as D,h as E,g as z,f as G,b as H,e as L,d as Q}from"./createOnChangeFn.651ed8c5.js";import{F as J}from"./FileSaver.min.8162a01b.js";import{u as Z}from"./useSnapshotScorecards.4f77164a.js";import"./magnifying-glass.b7cbe8fe.js";import"./chevron-left.0808b01b.js";import"./TransitionExpand.09b447a3.js";import"./chevron-up.736f4142.js";const u={};u.props={id:{key:"id",required:!0,type:String},scorecards:{key:"scorecards",required:!0,type:Array}};u.setup=(e,a)=>{const s=e,n=k(()=>s.scorecards),m=T(),f=M(),r=O(),x=[r.display({id:"select",header:({table:t})=>d(q,{props:{table:t}}),cell:({row:t})=>d(B,{props:{row:t}})}),r.accessor(t=>t.company.name,{id:"company",header:()=>"Company",cell:t=>t.getValue(),enableColumnFilter:!1}),r.accessor("id",{header:()=>"Scorecard ID",enableColumnFilter:!1}),r.accessor("updatedAt",{header:()=>"Last Updated",cell:t=>d(I,{props:{value:t.getValue(),format:"date"}}),enableColumnFilter:!1}),r.display({id:"actions",header:"Actions",cell:({row:t})=>d(U,{props:{actions:[{id:"view",action(){m.push(`/admin/companies/${encodeURIComponent(s.id)}/scorecards/snapshot/${t.original.id}`)}},{id:"download",async action(){const o=await g(`${_}/companies/${s.id}/scorecards/${t.original.id}/docx`,{responseType:"blob"}),c=`${t.original.company.name} - Snapshot - ${t.id}.docx`;J.exports.saveAs(o.data,c)}},{id:"archive",async action(){(await g.delete(`${_}/companies/${s.id}/snapshot-scorecards/${t.original.id}`)).status===200&&f.success("Archived Scorecard Successfully")}}]}})})],S=i([]),h=i({pageIndex:0,pageSize:10}),v=i(""),y=i([]),b=i({}),w=j({get data(){return n.value},columns:x,state:{get sorting(){return S.value},get pagination(){return h.value},get globalFilter(){return v.value},get columnFilters(){return y.value},get rowSelection(){return b.value}},onSortingChange:l(S),onPaginationChange:l(h),onColumnFiltersChange:l(y),onGlobalFilterChange:l(v),globalFilterFn:(t,o,c,A)=>{const R=D(t.getValue(o),c,{threshold:E.CONTAINS});return A(R),R.passed},onRowSelectionChange:l(b),getCoreRowModel:z(),getSortedRowModel:G(),getFacetedUniqueValues:H(),getPaginationRowModel:L(),getFilteredRowModel:Q()});return{instance:w,bulkActions:[{id:"archive",async action(){const t=w.getSelectedRowModel().rows;for(const o of t){const c=o.original.id;await g.delete(`${_}/companies/${s.id}/snapshot-scorecards/${c}`)}f.success("Archived Scorecard(s) Successfully")}}]}};u.components=Object.assign({AppTanStackTable:N},u.components);var K=function(){var e=this,a=e.$createElement,s=e._self._c||a;return s("AppTanStackTable",{attrs:{table:e.instance,"table-actions":e.bulkActions}})},W=[];const $={};var X=C(u,K,W,!1,Y,null,null,null);function Y(e){for(let a in $)this[a]=$[a]}const ee=function(){return X.exports}(),p={};p.setup=(e,a)=>{const s=V("id"),n=Z.list(s);return{id:s,scorecards:n}};p.components=Object.assign({PlusSvg:P,SnapshotScorecardsTable:ee},p.components);var te=function(){var e=this,a=e.$createElement,s=e._self._c||a;return s("BaseTablePageLayout",{scopedSlots:e._u([{key:"title",fn:function(){return[e._v("Snapshot Scorecards")]},proxy:!0},{key:"button",fn:function(){return[s("BaseButton",{staticClass:"w-full space-x-2 md:w-auto",attrs:{to:`/admin/companies/${e.id}/scorecards/snapshot/new`}},[s("PlusSvg",{staticClass:"h-auto w-4 xl:w-5"}),s("span",[e._v("New Report")])],1)]},proxy:!0},{key:"table",fn:function(){return[s("BaseVueQuery",{attrs:{query:e.scorecards},scopedSlots:e._u([{key:"success",fn:function(n){var m=n.data;return[s("SnapshotScorecardsTable",{attrs:{id:e.id,scorecards:m}})]}}])})]},proxy:!0}])})},se=[];const F={};var ae=C(p,te,se,!1,oe,null,null,null);function oe(e){for(let a in F)this[a]=F[a]}const fe=function(){return ae.exports}();export{fe as default};