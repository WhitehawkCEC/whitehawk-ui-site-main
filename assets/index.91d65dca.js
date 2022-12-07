import{D as I}from"./document-arrow-down.2aec0021.js";import{aB as M,c as b,aS as g,bs as N,a_ as _,az as q,n as w,ax as T,bt as V,L as P,c7 as j,r as k,aK as L,aP as O,aQ as Q}from"./index.d0befb50.js";import{A as U,R as Z}from"./RowSelectionInput.619d0d16.js";import{A as E,T as z}from"./AppTanStackTable.ca34eb6c.js";import{S as H}from"./ScorecardStatusBadge.c976feb3.js";import{u as Y,c as G,i as y,r as K,h as J,g as W,f as X,b as ee,e as ae,d as te}from"./createOnChangeFn.a792e913.js";import{u as se}from"./useInDepthScorecards.72de80d5.js";import"./magnifying-glass.b7cbe8fe.js";import"./TransitionExpand.32f5b016.js";import"./chevron-up.736f4142.js";const f={};f.props={id:{key:"id",required:!0,type:String},value:{key:"value",required:!1,type:Array},scorecards:{key:"scorecards",required:!0,type:Array}};f.setup=(e,s)=>{const a=e,r=s.emit,o=M(a,r),i=b(()=>a.scorecards.map(t=>{var m,F;const l=new Date,c=((m=t.yearQuarterValue.split("/")[0])==null?void 0:m.trim())||l.getUTCFullYear().toString(),C=((F=t.yearQuarterValue.split("/")[1])==null?void 0:F.trim())||`Q${Math.ceil((l.getMonth()+1)/3)}`;return{id:t.id,supplier:t.data["Supplier Name"]||"",status:t.status,year:c,quarter:C,updatedAt:t.data.updatedAt||"N/A"}})),x=b(()=>i.value.filter(t=>t.supplier!=="")),n=G(),S=[n.display({id:"select",header:({table:t})=>g(U,{props:{table:t}}),cell:({row:t})=>g(Z,{props:{row:t}})}),n.accessor(t=>t.supplier,{id:"supplier",header:()=>"Supplier",cell:t=>t.getValue(),enableColumnFilter:!1}),n.accessor("status",{header:()=>"Status",cell:t=>g(H,{props:{value:t.getValue()}}),enableColumnFilter:!1}),n.accessor("quarter",{header:()=>"Quarter",cell:t=>t.getValue(),enableColumnFilter:!1}),n.accessor("year",{header:()=>"Year",cell:t=>t.getValue(),enableColumnFilter:!1}),n.accessor("updatedAt",{header:()=>"Last Updated",cell:t=>g(N,{props:{value:t.getValue(),format:"date"}}),enableColumnFilter:!1}),n.display({id:"actions",header:"Actions",cell:({row:t})=>g(z,{props:{actions:[{id:"edit",to:`/admin/companies/${encodeURIComponent(a.id)}/scorecards/in-depth/rating-service-2/${t.original.id}`}]}})})],u=_([]),d=_({pageIndex:0,pageSize:10}),p=_(""),$=_({}),R=Y({get data(){return x.value},columns:S,state:{get sorting(){return u.value},get pagination(){return d.value},get globalFilter(){return p.value},get rowSelection(){return $.value}},onSortingChange:y(u),onPaginationChange:y(d),onGlobalFilterChange:y(p),globalFilterFn:(t,l,c,C)=>{const m=K(t.getValue(l),c,{threshold:J.CONTAINS});return C(m),m.passed},onRowSelectionChange:y($),getCoreRowModel:W(),getSortedRowModel:X(),getFacetedUniqueValues:ee(),getPaginationRowModel:ae(),getFilteredRowModel:te()});return q(()=>R.getSelectedRowModel().rows,t=>{if(t){const l=[];t.forEach(c=>{l.push({scorecardId:c.original.id,supplierName:c.original.supplier})}),o.value=l}}),{instance:R}};f.components=Object.assign({AppTanStackTable:E},f.components);var re=function(){var e=this,s=e.$createElement,a=e._self._c||s;return a("AppTanStackTable",{attrs:{table:e.instance}})},oe=[];const B={};var ne=w(f,re,oe,!1,le,null,null,null);function le(e){for(let s in B)this[s]=B[s]}const ce=function(){return ne.exports}(),v={};v.props={id:{key:"id",required:!0,type:String},value:{key:"value",required:!1,type:null},scorecards:{key:"scorecards",required:!0,type:Array}};v.setup=(e,s)=>{const a=e,r=s.emit;return{proxy:T(a,r)}};v.components=Object.assign({ConvertBatchScorecardsTable:ce},v.components);var ie=function(){var e=this,s=e.$createElement,a=e._self._c||s;return a("section",{staticClass:"grid gap-6"},[a("ConvertBatchScorecardsTable",{attrs:{id:e.id,scorecards:e.scorecards},model:{value:e.proxy.scorecards,callback:function(r){e.$set(e.proxy,"scorecards",r)},expression:"proxy.scorecards"}}),a("BaseSimpleCard",{staticClass:"divide-y"},[a("BaseLabel",{staticClass:"flex flex-col p-4 lg:grid lg:grid-cols-3 lg:items-center"},[a("span",{staticClass:"space-x-1"},[e._v(" File Name "),a("span",{staticClass:"text-red-500"},[e._v("*")])]),a("div",{staticClass:"flex flex-col lg:col-span-2"},[a("BaseInput",{attrs:{type:"text",required:"","aria-required":"true"},model:{value:e.proxy.fileName,callback:function(r){e.$set(e.proxy,"fileName",r)},expression:"proxy.fileName"}})],1)]),a("dl",{staticClass:"p-4"},[a("dt",{staticClass:"sr-only"},[e._v("File Name Display:")]),a("div",{staticClass:"rounded-md border bg-gray-100 p-2 shadow-inner"},[a("dd",{staticClass:"text-gray-500"},[e._v(e._s(e.proxy.fileName)+".zip")])])])],1)],1)},ue=[];const D={};var de=w(v,ie,ue,!1,pe,null,null,null);function pe(e){for(let s in D)this[s]=D[s]}const me=function(){return de.exports}(),h={};h.setup=(e,s)=>{const a=j("id"),r=k(!1),o=k(),i=se.list(a),x=b(()=>{var u,d,p;return!((u=o.value)!=null&&u.fileName)||!((p=(d=o.value)==null?void 0:d.scorecards)!=null&&p.length)}),n=L();async function S(){if(!!o.value){r.value=!0;try{await O.post(`${Q}/companies/${a.value}/batch/scorecards`,{fileName:o.value.fileName,supplierScorecardInfos:o.value.scorecards})}finally{r.value=!1}n.push(`/admin/companies/${a.value}/scorecards/batch/rating-service-2?expandZipView=true`)}}return{id:a,isLoading:r,fileZip:o,scorecards:i,isDisabled:x,convert:S}};h.components=Object.assign({BackButton:V,ConvertScorecardsInput:me,LoadingSpinner:P,DocumentDownloadSvg:I},h.components);var ge=function(){var e=this,s=e.$createElement,a=e._self._c||s;return a("div",{staticClass:"space-y-6"},[a("div",{staticClass:"flex flex-col space-y-4 lg:flex-row lg:items-center lg:space-x-4 lg:space-y-0"},[a("BackButton"),a("BaseTypography",{attrs:{variant:"h5"}},[e._v("Convert Scorecards to ZIP")])],1),a("form",{staticClass:"space-y-6",on:{submit:function(r){return r.preventDefault(),e.convert.apply(null,arguments)}}},[a("BaseVueQuery",{attrs:{query:e.scorecards},scopedSlots:e._u([{key:"success",fn:function(r){var o=r.data;return[a("ConvertScorecardsInput",{attrs:{id:e.id,scorecards:o},model:{value:e.fileZip,callback:function(i){e.fileZip=i},expression:"fileZip"}})]}}])}),a("BaseButton",{staticClass:"space-x-2",attrs:{disabled:e.isDisabled}},[e.isLoading?a("LoadingSpinner"):[a("DocumentDownloadSvg",{staticClass:"w-4 xl:w-5"}),a("span",[e._v("Convert")])]],2)],1)])},fe=[];const A={};var ve=w(h,ge,fe,!1,_e,null,null,null);function _e(e){for(let s in A)this[s]=A[s]}const ke=function(){return ve.exports}();export{ke as default};
