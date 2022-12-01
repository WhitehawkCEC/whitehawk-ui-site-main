import{D as B}from"./document-arrow-down.2aec0021.js";import{aB as I,c as b,aK as q,aS as g,bs as M,a_ as _,az as N,n as w,ax as T,bt as P,L as j,c5 as L,r as F,aP as O,aQ as Z}from"./index.575adb5e.js";import{A as E,R as U}from"./RowSelectionInput.b1fc7d5a.js";import{A as z,T as Q}from"./AppTanStackTable.95f4ee53.js";import{S as H}from"./ScorecardStatusBadge.91bf462a.js";import{u as G,c as K,i as y,r as Y,h as J,g as W,f as X,b as ee,e as ae,d as te}from"./createOnChangeFn.b853c32f.js";import{u as se}from"./useInDepthScorecardsV2.14a44ab8.js";import"./magnifying-glass.b7cbe8fe.js";import"./TransitionExpand.27b4cea5.js";import"./chevron-up.736f4142.js";const f={};f.props={id:{key:"id",required:!0,type:String},value:{key:"value",required:!1,type:Array},scorecards:{key:"scorecards",required:!0,type:Array}};f.setup=(e,s)=>{const a=e,r=s.emit,o=I(a,r),u=b(()=>a.scorecards.map(({id:t,data:c,meta:l})=>{const{supplier:S,status:i}=c;return{id:t,supplier:S.name,status:i.state,year:i.year,quarter:i.quarter,updatedAt:l.updatedAt}})),h=q(),n=K(),C=[n.display({id:"select",header:({table:t})=>g(E,{props:{table:t}}),cell:({row:t})=>g(U,{props:{row:t}})}),n.accessor(t=>t.supplier,{id:"supplier",header:()=>"Supplier",cell:t=>t.getValue(),enableColumnFilter:!1}),n.accessor("status",{header:()=>"Status",cell:t=>g(H,{props:{value:t.getValue()}}),enableColumnFilter:!1}),n.accessor("quarter",{header:()=>"Quarter",cell:t=>t.getValue(),enableColumnFilter:!1}),n.accessor("year",{header:()=>"Year",cell:t=>t.getValue(),enableColumnFilter:!1}),n.accessor("updatedAt",{header:()=>"Last Updated",cell:t=>g(M,{props:{value:t.getValue(),format:"date"}}),enableColumnFilter:!1}),n.display({id:"actions",header:"Actions",cell:({row:t})=>g(Q,{props:{actions:[{id:"edit",action(){h.push(`/admin/companies/${encodeURIComponent(a.id)}/scorecards/in-depth/rating-service-2/${t.original.id}`)}}]}})})],d=_([]),p=_({pageIndex:0,pageSize:10}),m=_(""),R=_({}),$=G({get data(){return u.value},columns:C,state:{get sorting(){return d.value},get pagination(){return p.value},get globalFilter(){return m.value},get rowSelection(){return R.value}},onSortingChange:y(d),onPaginationChange:y(p),onGlobalFilterChange:y(m),globalFilterFn:(t,c,l,S)=>{const i=Y(t.getValue(c),l,{threshold:J.CONTAINS});return S(i),i.passed},onRowSelectionChange:y(R),getCoreRowModel:W(),getSortedRowModel:X(),getFacetedUniqueValues:ee(),getPaginationRowModel:ae(),getFilteredRowModel:te()}),A=b(()=>$.getSelectedRowModel().rows);return N(A,t=>{const c=[];t.forEach(l=>{l.original&&c.push({scorecardId:l.original.id,supplierName:l.original.supplier})}),o.value=c},{immediate:!0}),{instance:$}};f.components=Object.assign({AppTanStackTable:z},f.components);var re=function(){var e=this,s=e.$createElement,a=e._self._c||s;return a("AppTanStackTable",{attrs:{table:e.instance}})},oe=[];const k={};var ne=w(f,re,oe,!1,le,null,null,null);function le(e){for(let s in k)this[s]=k[s]}const ce=function(){return ne.exports}(),v={};v.props={id:{key:"id",required:!0,type:String},value:{key:"value",required:!1,type:null},scorecards:{key:"scorecards",required:!0,type:Array}};v.setup=(e,s)=>{const a=e,r=s.emit;return{proxy:T(a,r)}};v.components=Object.assign({ConvertScorecardsV2Table:ce},v.components);var ie=function(){var e=this,s=e.$createElement,a=e._self._c||s;return a("section",{staticClass:"grid gap-6"},[a("ConvertScorecardsV2Table",{attrs:{id:e.id,scorecards:e.scorecards},model:{value:e.proxy.scorecards,callback:function(r){e.$set(e.proxy,"scorecards",r)},expression:"proxy.scorecards"}}),a("BaseSimpleCard",{staticClass:"divide-y"},[a("BaseLabel",{staticClass:"flex flex-col p-4 lg:grid lg:grid-cols-3 lg:items-center"},[a("span",{staticClass:"space-x-1"},[e._v(" File Name "),a("span",{staticClass:"text-red-500"},[e._v("*")])]),a("div",{staticClass:"flex flex-col lg:col-span-2"},[a("BaseInput",{attrs:{type:"text",required:"","aria-required":"true"},model:{value:e.proxy.fileName,callback:function(r){e.$set(e.proxy,"fileName",r)},expression:"proxy.fileName"}})],1)]),a("dl",{staticClass:"p-4"},[a("dt",{staticClass:"sr-only"},[e._v("File Name Display:")]),a("div",{staticClass:"rounded-md border bg-gray-100 p-2 shadow-inner"},[a("dd",{staticClass:"text-gray-500"},[e._v(e._s(e.proxy.fileName)+".zip")])])])],1)],1)},ue=[];const V={};var de=w(v,ie,ue,!1,pe,null,null,null);function pe(e){for(let s in V)this[s]=V[s]}const me=function(){return de.exports}(),x={};x.setup=(e,s)=>{const a=L("id"),r=F(!1),o=F(),u=se.list(a),h=b(()=>{var d,p,m;return!((d=o.value)!=null&&d.fileName)||!((m=(p=o.value)==null?void 0:p.scorecards)!=null&&m.length)}),n=q();async function C(){if(!!o.value){r.value=!0;try{await O.post(`${Z}/companies/${a.value}/batch/scorecards`,{fileName:o.value.fileName,supplierScorecardInfos:o.value.scorecards})}finally{r.value=!1}n.push(`/admin/companies/${a.value}/scorecards/batch/rating-service-2?expandZipView=true`)}}return{id:a,isLoading:r,fileZip:o,scorecards:u,isDisabled:h,convert:C}};x.components=Object.assign({BackButton:P,ConvertScorecardsV2Input:me,LoadingSpinner:j,DocumentDownloadSvg:B},x.components);var ge=function(){var e=this,s=e.$createElement,a=e._self._c||s;return a("div",{staticClass:"space-y-6"},[a("div",{staticClass:"flex flex-col space-y-4 lg:flex-row lg:items-center lg:space-x-4 lg:space-y-0"},[a("BackButton"),a("BaseTypography",{attrs:{variant:"h5"}},[e._v("Convert Scorecards to ZIP")])],1),a("form",{staticClass:"space-y-6",on:{submit:function(r){return r.preventDefault(),e.convert.apply(null,arguments)}}},[a("BaseVueQuery",{attrs:{query:e.scorecards},scopedSlots:e._u([{key:"success",fn:function(r){var o=r.data;return[a("ConvertScorecardsV2Input",{attrs:{id:e.id,scorecards:o},model:{value:e.fileZip,callback:function(u){e.fileZip=u},expression:"fileZip"}})]}}])}),a("BaseButton",{staticClass:"space-x-2",attrs:{disabled:e.isDisabled}},[e.isLoading?a("LoadingSpinner"):[a("DocumentDownloadSvg",{staticClass:"w-4 xl:w-5"}),a("span",[e._v("Convert")])]],2)],1)])},fe=[];const D={};var ve=w(x,ge,fe,!1,_e,null,null,null);function _e(e){for(let s in D)this[s]=D[s]}const ke=function(){return ve.exports}();export{ke as default};