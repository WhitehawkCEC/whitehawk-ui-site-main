import{D as M}from"./document-arrow-down.8787241b.js";import{aB as q,d as w,aS as f,br as N,a_ as y,az as T,n as $,ax as V,bs as P,L as j,c7 as B,b as k,aK as L,aP as O,aQ as Q}from"./index.9293fb8e.js";import{A as U,R as E}from"./RowSelectionInput.b16db18d.js";import{A as Z,T as z}from"./AppTanStackTable.2095cda7.js";import{S as H}from"./ScorecardStatusBadge.4af5891d.js";import{u as Y,c as G,i as h,r as K,h as J,g as W,f as X,b as ee,e as te,d as ae}from"./createOnChangeFn.907df15b.js";import{u as se}from"./useInDepthScorecards.1ee899d8.js";import"./magnifying-glass.b7cbe8fe.js";import"./TransitionExpand.829c0957.js";import"./chevron-up.736f4142.js";const g={};g.props={id:{key:"id",required:!0,type:String},value:{key:"value",required:!1,type:Array},scorecards:{key:"scorecards",required:!0,type:Array}};g.setup=(e,s)=>{const t=e,r=s.emit,l=q(t,r),o=w(()=>t.scorecards.map(a=>{var m,F;const c=new Date,i=((m=a.yearQuarterValue.split("/")[0])==null?void 0:m.trim())||c.getUTCFullYear().toString(),C=((F=a.yearQuarterValue.split("/")[1])==null?void 0:F.trim())||`Q${Math.ceil((c.getMonth()+1)/3)}`;return{id:a.id,supplier:a.data["Supplier Name"]||"",status:a.status,year:i,quarter:C,updatedAt:a.data.updatedAt||"N/A"}})),x=w(()=>o.value.filter(a=>a.supplier!=="")),n=G(),b=[n.display({id:"select",header:({table:a})=>f(U,{props:{table:a}}),cell:({row:a})=>f(E,{props:{row:a}})}),n.accessor(a=>a.supplier,{id:"supplier",header:()=>"Supplier",cell:a=>a.getValue(),enableColumnFilter:!1}),n.accessor("status",{header:()=>"Status",cell:a=>f(H,{props:{value:a.getValue()}}),enableColumnFilter:!1}),n.accessor("quarter",{header:()=>"Quarter",cell:a=>a.getValue(),enableColumnFilter:!1}),n.accessor("year",{header:()=>"Year",cell:a=>a.getValue(),enableColumnFilter:!1}),n.accessor("updatedAt",{header:()=>"Last Updated",cell:a=>f(N,{props:{value:a.getValue(),format:"date"}}),enableColumnFilter:!1}),n.display({id:"actions",header:"Actions",cell:({row:a})=>f(z,{props:{actions:[{id:"edit",to:`/admin/companies/${encodeURIComponent(t.id)}/scorecards/in-depth/rating-service-2/${a.original.id}`}]}})})],_=y([]),u=y({pageIndex:0,pageSize:10}),p=y(""),d=y({}),R=Y({get data(){return x.value},columns:b,state:{get sorting(){return _.value},get pagination(){return u.value},get globalFilter(){return p.value},get rowSelection(){return d.value}},onSortingChange:h(_),onPaginationChange:h(u),onGlobalFilterChange:h(p),globalFilterFn:(a,c,i,C)=>{const m=K(a.getValue(c),i,{threshold:J.CONTAINS});return C(m),m.passed},onRowSelectionChange:h(d),getCoreRowModel:W(),getSortedRowModel:X(),getFacetedUniqueValues:ee(),getPaginationRowModel:te(),getFilteredRowModel:ae()});return T(()=>R.getSelectedRowModel().rows,a=>{if(a){const c=[];a.forEach(i=>{c.push({scorecardId:i.original.id,supplierName:i.original.supplier})}),l.value=c}}),{instance:R}};g.components=Object.assign({AppTanStackTable:Z},g.components);var re=function(){var e=this,s=e.$createElement,t=e._self._c||s;return t("AppTanStackTable",{attrs:{table:e.instance}})},oe=[];const I={};var ne=$(g,re,oe,!1,le,null,null,null);function le(e){for(let s in I)this[s]=I[s]}const ce=function(){return ne.exports}(),v={};v.props={id:{key:"id",required:!0,type:String},value:{key:"value",required:!1,type:null},scorecards:{key:"scorecards",required:!0,type:Array}};v.setup=(e,s)=>{const t=e,r=s.emit;return{proxy:V(t,r)}};v.components=Object.assign({ConvertBatchScorecardsTable:ce},v.components);var ie=function(){var e=this,s=e.$createElement,t=e._self._c||s;return t("section",{staticClass:"grid gap-6"},[t("ConvertBatchScorecardsTable",{attrs:{id:e.id,scorecards:e.scorecards},model:{value:e.proxy.scorecards,callback:function(r){e.$set(e.proxy,"scorecards",r)},expression:"proxy.scorecards"}}),t("BaseSimpleCard",[t("BaseLabel",{staticClass:"flex flex-col p-4 lg:grid lg:grid-cols-3 lg:items-center"},[t("span",{staticClass:"after:content-['*']` after:text-red-700"},[e._v("File Name")]),t("div",{staticClass:"flex flex-col lg:col-span-2"},[t("BaseInput",{attrs:{type:"text",required:"","aria-required":"true"},model:{value:e.proxy.fileName,callback:function(r){e.$set(e.proxy,"fileName",r)},expression:"proxy.fileName"}})],1)])],1)],1)},ue=[];const A={};var pe=$(v,ie,ue,!1,de,null,null,null);function de(e){for(let s in A)this[s]=A[s]}const me=function(){return pe.exports}(),S={};S.setup=(e,s)=>{const t=B("id"),r=B("subscriptionId"),l=k(!1),o=k(),x=se.list(t),n=w(()=>{var u,p,d;return!((u=o.value)!=null&&u.fileName)||!((d=(p=o.value)==null?void 0:p.scorecards)!=null&&d.length)}),b=L();async function _(){if(!!o.value){l.value=!0;try{await O.post(`${Q}/companies/${t.value}/batch/scorecards`,{fileName:o.value.fileName,supplierScorecardInfos:o.value.scorecards})}finally{l.value=!1}b.push(`/admin/companies/${t.value}/subscriptions/${r.value}/integrations/1/scorecards/zip-files`)}}return{id:t,isLoading:l,fileZip:o,scorecards:x,isDisabled:n,convert:_}};S.components=Object.assign({BackButton:P,ConvertScorecardsInput:me,LoadingSpinner:j,DocumentDownloadSvg:M},S.components);var fe=function(){var e=this,s=e.$createElement,t=e._self._c||s;return t("div",{staticClass:"space-y-6"},[t("div",{staticClass:"flex flex-col space-y-4 lg:flex-row lg:items-center lg:space-x-4 lg:space-y-0"},[t("BackButton"),t("div",{staticClass:"flex flex-col -space-y-1"},[t("BaseOverline",{staticClass:"uppercase text-gray-500"},[e._v("Bitsight")]),t("BaseTypography",{attrs:{variant:"h5"}},[e._v("ZIP Files")])],1)],1),t("form",{staticClass:"space-y-6",on:{submit:function(r){return r.preventDefault(),e.convert.apply(null,arguments)}}},[t("BaseVueQuery",{attrs:{query:e.scorecards},scopedSlots:e._u([{key:"success",fn:function(r){var l=r.data;return[t("ConvertScorecardsInput",{attrs:{id:e.id,scorecards:l},model:{value:e.fileZip,callback:function(o){e.fileZip=o},expression:"fileZip"}})]}}])}),t("BaseButton",{staticClass:"space-x-2",attrs:{disabled:e.isDisabled}},[e.isLoading?t("LoadingSpinner"):[t("DocumentDownloadSvg",{staticClass:"-ml-1 w-5"}),t("span",[e._v("Convert")])]],2)],1)])},ge=[];const D={};var ve=$(S,fe,ge,!1,_e,null,null,null);function _e(e){for(let s in D)this[s]=D[s]}const Be=function(){return ve.exports}();export{Be as default};
