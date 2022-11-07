import{c as k,aI as T,aF as M,aS as d,br as I,aZ as i,aP as g,aQ as _,n as C,ao as P,b$ as V}from"./index.496d7921.js";import{A as q,R as B}from"./RowSelectionInput.a50db6e7.js";import{A as N,T as U}from"./AppTanStackTable.6cdc18dd.js";import{u as j,c as O,i as l,r as D,h as E,g as z,f as H,b as L,e as Q,d as G}from"./createOnChangeFn.d8e40c41.js";import{F as Z}from"./FileSaver.min.7d8b8af4.js";import{u as J}from"./useSnapshotScorecards.f679042f.js";import"./magnifying-glass.b7cbe8fe.js";import"./TransitionExpand.5d0d63b2.js";import"./chevron-up.736f4142.js";const u={};u.props={id:{key:"id",required:!0,type:String},scorecards:{key:"scorecards",required:!0,type:Array}};u.setup=(t,o)=>{const a=t,n=k(()=>a.scorecards),m=T(),f=M(),r=O(),x=[r.display({id:"select",header:({table:e})=>d(q,{props:{table:e}}),cell:({row:e})=>d(B,{props:{row:e}})}),r.accessor(e=>e.company.name,{id:"company",header:()=>"Company",cell:e=>e.getValue(),enableColumnFilter:!1}),r.accessor("id",{header:()=>"Scorecard ID",enableColumnFilter:!1}),r.accessor("updatedAt",{header:()=>"Last Updated",cell:e=>d(I,{props:{value:e.getValue(),format:"date"}}),enableColumnFilter:!1}),r.display({id:"actions",header:"Actions",cell:({row:e})=>d(U,{props:{actions:[{id:"view",action(){m.push(`/admin/companies/${encodeURIComponent(a.id)}/scorecards/snapshot/${e.original.id}`)}},{id:"download",async action(){const s=await g(`${_}/companies/${a.id}/scorecards/${e.original.id}/docx`,{responseType:"blob"}),c=`${e.original.company.name} - Snapshot - ${e.id}.docx`;Z.exports.saveAs(s.data,c)}},{id:"archive",async action(){(await g.delete(`${_}/companies/${a.id}/snapshot-scorecards/${e.original.id}`)).status===200&&f.success("Archived Scorecard Successfully")}}]}})})],S=i([]),h=i({pageIndex:0,pageSize:10}),v=i(""),y=i([]),b=i({}),w=j({get data(){return n.value},columns:x,state:{get sorting(){return S.value},get pagination(){return h.value},get globalFilter(){return v.value},get columnFilters(){return y.value},get rowSelection(){return b.value}},onSortingChange:l(S),onPaginationChange:l(h),onColumnFiltersChange:l(y),onGlobalFilterChange:l(v),globalFilterFn:(e,s,c,A)=>{const R=D(e.getValue(s),c,{threshold:E.CONTAINS});return A(R),R.passed},onRowSelectionChange:l(b),getCoreRowModel:z(),getSortedRowModel:H(),getFacetedUniqueValues:L(),getPaginationRowModel:Q(),getFilteredRowModel:G()});return{instance:w,bulkActions:[{id:"archive",async action(){const e=w.getSelectedRowModel().rows;for(const s of e){const c=s.original.id;await g.delete(`${_}/companies/${a.id}/snapshot-scorecards/${c}`)}f.success("Archived Scorecard(s) Successfully")}}]}};u.components=Object.assign({AppTanStackTable:N},u.components);var K=function(){var t=this,o=t.$createElement,a=t._self._c||o;return a("AppTanStackTable",{attrs:{table:t.instance,"table-actions":t.bulkActions}})},W=[];const $={};var X=C(u,K,W,!1,Y,null,null,null);function Y(t){for(let o in $)this[o]=$[o]}const ee=function(){return X.exports}(),p={};p.setup=(t,o)=>{const a=V("id"),n=J.list(a);return{id:a,scorecards:n}};p.components=Object.assign({PlusSvg:P,SnapshotScorecardsTable:ee},p.components);var te=function(){var t=this,o=t.$createElement,a=t._self._c||o;return a("BaseTablePageLayout",{scopedSlots:t._u([{key:"title",fn:function(){return[t._v("Snapshot Scorecards")]},proxy:!0},{key:"button",fn:function(){return[a("BaseButton",{staticClass:"space-x-2",attrs:{type:"button",to:"new",append:""}},[a("PlusSvg",{staticClass:"h-auto w-4 xl:w-5"}),a("span",[t._v("New Report")])],1)]},proxy:!0},{key:"table",fn:function(){return[a("BaseVueQuery",{attrs:{query:t.scorecards},scopedSlots:t._u([{key:"success",fn:function(n){var m=n.data;return[a("SnapshotScorecardsTable",{attrs:{id:t.id,scorecards:m}})]}}])})]},proxy:!0}])})},ae=[];const F={};var oe=C(p,te,ae,!1,se,null,null,null);function se(t){for(let o in F)this[o]=F[o]}const _e=function(){return oe.exports}();export{_e as default};
