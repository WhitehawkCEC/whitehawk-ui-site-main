import{D as q}from"./document-arrow-down.2aec0021.js";import{aB as A,c as b,aS as g,bs as B,a_ as y,az as I,n as w,ax as M,bt as N,L as T,c8 as P,r as $,aK as j,aP as L,aQ as O}from"./index.fc6fe55f.js";import{A as Z,R as E}from"./RowSelectionInput.a6649088.js";import{A as U,T as z}from"./AppTanStackTable.49bf929e.js";import{S as Q}from"./ScorecardStatusBadge.f0e81408.js";import{u as H,c as G,i as x,r as K,h as Y,g as J,f as W,b as X,e as ee,d as ae}from"./createOnChangeFn.91bd4c30.js";import{u as te}from"./useInDepthScorecardsV2.2f59299c.js";import"./magnifying-glass.b7cbe8fe.js";import"./TransitionExpand.fc606591.js";import"./chevron-up.736f4142.js";const f={};f.props={id:{key:"id",required:!0,type:String},value:{key:"value",required:!1,type:Array},scorecards:{key:"scorecards",required:!0,type:Array}};f.setup=(e,s)=>{const a=e,r=s.emit,o=A(a,r),u=b(()=>a.scorecards.map(({id:t,data:c,meta:l})=>{const{supplier:h,status:i}=c;return{id:t,supplier:h.name,status:i.state,year:i.year,quarter:i.quarter,updatedAt:l.updatedAt}})),n=G(),S=[n.display({id:"select",header:({table:t})=>g(Z,{props:{table:t}}),cell:({row:t})=>g(E,{props:{row:t}})}),n.accessor(t=>t.supplier,{id:"supplier",header:()=>"Supplier",cell:t=>t.getValue(),enableColumnFilter:!1}),n.accessor("status",{header:()=>"Status",cell:t=>g(Q,{props:{value:t.getValue()}}),enableColumnFilter:!1}),n.accessor("quarter",{header:()=>"Quarter",cell:t=>t.getValue(),enableColumnFilter:!1}),n.accessor("year",{header:()=>"Year",cell:t=>t.getValue(),enableColumnFilter:!1}),n.accessor("updatedAt",{header:()=>"Last Updated",cell:t=>g(B,{props:{value:t.getValue(),format:"date"}}),enableColumnFilter:!1}),n.display({id:"actions",header:"Actions",cell:({row:t})=>g(z,{props:{actions:[{id:"edit",to:`/admin/companies/${encodeURIComponent(a.id)}/scorecards/in-depth/rating-service-2/${t.original.id}`}]}})})],_=y([]),d=y({pageIndex:0,pageSize:10}),p=y(""),m=y({}),R=H({get data(){return u.value},columns:S,state:{get sorting(){return _.value},get pagination(){return d.value},get globalFilter(){return p.value},get rowSelection(){return m.value}},onSortingChange:x(_),onPaginationChange:x(d),onGlobalFilterChange:x(p),globalFilterFn:(t,c,l,h)=>{const i=K(t.getValue(c),l,{threshold:Y.CONTAINS});return h(i),i.passed},onRowSelectionChange:x(m),getCoreRowModel:J(),getSortedRowModel:W(),getFacetedUniqueValues:X(),getPaginationRowModel:ee(),getFilteredRowModel:ae()}),D=b(()=>R.getSelectedRowModel().rows);return I(D,t=>{const c=[];t.forEach(l=>{l.original&&c.push({scorecardId:l.original.id,supplierName:l.original.supplier})}),o.value=c},{immediate:!0}),{instance:R}};f.components=Object.assign({AppTanStackTable:U},f.components);var se=function(){var e=this,s=e.$createElement,a=e._self._c||s;return a("AppTanStackTable",{attrs:{table:e.instance}})},re=[];const F={};var oe=w(f,se,re,!1,ne,null,null,null);function ne(e){for(let s in F)this[s]=F[s]}const le=function(){return oe.exports}(),v={};v.props={id:{key:"id",required:!0,type:String},value:{key:"value",required:!1,type:null},scorecards:{key:"scorecards",required:!0,type:Array}};v.setup=(e,s)=>{const a=e,r=s.emit;return{proxy:M(a,r)}};v.components=Object.assign({ConvertScorecardsV2Table:le},v.components);var ce=function(){var e=this,s=e.$createElement,a=e._self._c||s;return a("section",{staticClass:"grid gap-6"},[a("ConvertScorecardsV2Table",{attrs:{id:e.id,scorecards:e.scorecards},model:{value:e.proxy.scorecards,callback:function(r){e.$set(e.proxy,"scorecards",r)},expression:"proxy.scorecards"}}),a("BaseSimpleCard",{staticClass:"divide-y"},[a("BaseLabel",{staticClass:"flex flex-col p-4 lg:grid lg:grid-cols-3 lg:items-center"},[a("span",{staticClass:"space-x-1"},[e._v(" File Name "),a("span",{staticClass:"text-red-500"},[e._v("*")])]),a("div",{staticClass:"flex flex-col lg:col-span-2"},[a("BaseInput",{attrs:{type:"text",required:"","aria-required":"true"},model:{value:e.proxy.fileName,callback:function(r){e.$set(e.proxy,"fileName",r)},expression:"proxy.fileName"}})],1)]),a("dl",{staticClass:"p-4"},[a("dt",{staticClass:"sr-only"},[e._v("File Name Display:")]),a("div",{staticClass:"rounded-md border bg-gray-100 p-2 shadow-inner"},[a("dd",{staticClass:"text-gray-500"},[e._v(e._s(e.proxy.fileName)+".zip")])])])],1)],1)},ie=[];const k={};var ue=w(v,ce,ie,!1,de,null,null,null);function de(e){for(let s in k)this[s]=k[s]}const pe=function(){return ue.exports}(),C={};C.setup=(e,s)=>{const a=P("id"),r=$(!1),o=$(),u=te.list(a),n=b(()=>{var d,p,m;return!((d=o.value)!=null&&d.fileName)||!((m=(p=o.value)==null?void 0:p.scorecards)!=null&&m.length)}),S=j();async function _(){if(!!o.value){r.value=!0;try{await L.post(`${O}/companies/${a.value}/batch/scorecards`,{fileName:o.value.fileName,supplierScorecardInfos:o.value.scorecards})}finally{r.value=!1}S.push(`/admin/companies/${a.value}/scorecards/batch/rating-service-2?expandZipView=true`)}}return{id:a,isLoading:r,fileZip:o,scorecards:u,isDisabled:n,convert:_}};C.components=Object.assign({BackButton:N,ConvertScorecardsV2Input:pe,LoadingSpinner:T,DocumentDownloadSvg:q},C.components);var me=function(){var e=this,s=e.$createElement,a=e._self._c||s;return a("div",{staticClass:"space-y-6"},[a("div",{staticClass:"flex flex-col space-y-4 lg:flex-row lg:items-center lg:space-x-4 lg:space-y-0"},[a("BackButton"),a("BaseTypography",{attrs:{variant:"h5"}},[e._v("Convert Scorecards to ZIP")])],1),a("form",{staticClass:"space-y-6",on:{submit:function(r){return r.preventDefault(),e.convert.apply(null,arguments)}}},[a("BaseVueQuery",{attrs:{query:e.scorecards},scopedSlots:e._u([{key:"success",fn:function(r){var o=r.data;return[a("ConvertScorecardsV2Input",{attrs:{id:e.id,scorecards:o},model:{value:e.fileZip,callback:function(u){e.fileZip=u},expression:"fileZip"}})]}}])}),a("BaseButton",{staticClass:"space-x-2",attrs:{disabled:e.isDisabled}},[e.isLoading?a("LoadingSpinner"):[a("DocumentDownloadSvg",{staticClass:"w-4 xl:w-5"}),a("span",[e._v("Convert")])]],2)],1)])},ge=[];const V={};var fe=w(C,me,ge,!1,ve,null,null,null);function ve(e){for(let s in V)this[s]=V[s]}const Fe=function(){return fe.exports}();export{Fe as default};
