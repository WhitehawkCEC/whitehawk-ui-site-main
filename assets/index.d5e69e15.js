import{D as A}from"./document-arrow-down.3c48191b.js";import{V as D,c as b,I,d as g,$ as M,v as _,w as N,n as w,Z as T,B as j,bG as P,r as F,g as Z,h as L}from"./index.70a21152.js";import{B as O}from"./BackButton.44d1b84f.js";import{A as E,R as U}from"./RowSelectionInput.820c24e8.js";import{A as z,T as G}from"./AppTanStackTable.c2a94b9b.js";import{S as H}from"./ScorecardStatusBadge.0180564e.js";import{u as Q,c as Y,i as y,r as J,h as K,g as W,f as X,b as ee,e as te,d as ae}from"./createOnChangeFn.cbd95929.js";import{u as se}from"./useInDepthScorecardsV2.c611bd7f.js";import"./chevron-left.0808b01b.js";import"./magnifying-glass.b7cbe8fe.js";import"./TransitionExpand.605b7613.js";import"./chevron-up.736f4142.js";const f={};f.props={id:{key:"id",required:!0,type:String},value:{key:"value",required:!1,type:Array},scorecards:{key:"scorecards",required:!0,type:Array}};f.setup=(e,s)=>{const t=e,r=s.emit,o=D(t,r),u=b(()=>t.scorecards.map(({id:a,data:c,meta:l})=>{const{supplier:S,status:i}=c;return{id:a,supplier:S.name,status:i.state,year:i.year,quarter:i.quarter,updatedAt:l.updatedAt}})),h=I(),n=Y(),C=[n.display({id:"select",header:({table:a})=>g(E,{props:{table:a}}),cell:({row:a})=>g(U,{props:{row:a}})}),n.accessor(a=>a.supplier,{id:"supplier",header:()=>"Supplier",cell:a=>a.getValue(),enableColumnFilter:!1}),n.accessor("status",{header:()=>"Status",cell:a=>g(H,{props:{value:a.getValue()}}),enableColumnFilter:!1}),n.accessor("quarter",{header:()=>"Quarter",cell:a=>a.getValue(),enableColumnFilter:!1}),n.accessor("year",{header:()=>"Year",cell:a=>a.getValue(),enableColumnFilter:!1}),n.accessor("updatedAt",{header:()=>"Last Updated",cell:a=>g(M,{props:{value:a.getValue(),format:"date"}}),enableColumnFilter:!1}),n.display({id:"actions",header:"Actions",cell:({row:a})=>g(G,{props:{actions:[{id:"edit",action(){h.push(`/admin/companies/${encodeURIComponent(t.id)}/scorecards/in-depth/rating-service-2/${a.original.id}`)}}]}})})],p=_([]),d=_({pageIndex:0,pageSize:10}),m=_(""),$=_({}),R=Q({get data(){return u.value},columns:C,state:{get sorting(){return p.value},get pagination(){return d.value},get globalFilter(){return m.value},get rowSelection(){return $.value}},onSortingChange:y(p),onPaginationChange:y(d),onGlobalFilterChange:y(m),globalFilterFn:(a,c,l,S)=>{const i=J(a.getValue(c),l,{threshold:K.CONTAINS});return S(i),i.passed},onRowSelectionChange:y($),getCoreRowModel:W(),getSortedRowModel:X(),getFacetedUniqueValues:ee(),getPaginationRowModel:te(),getFilteredRowModel:ae()}),q=b(()=>R.getSelectedRowModel().rows);return N(q,a=>{const c=[];a.forEach(l=>{l.original&&c.push({scorecardId:l.original.id,supplierName:l.original.supplier})}),o.value=c},{immediate:!0}),{instance:R}};f.components=Object.assign({AppTanStackTable:z},f.components);var re=function(){var e=this,s=e.$createElement,t=e._self._c||s;return t("AppTanStackTable",{attrs:{table:e.instance}})},oe=[];const k={};var ne=w(f,re,oe,!1,le,null,null,null);function le(e){for(let s in k)this[s]=k[s]}const ce=function(){return ne.exports}(),v={};v.props={id:{key:"id",required:!0,type:String},value:{key:"value",required:!1,type:null},scorecards:{key:"scorecards",required:!0,type:Array}};v.setup=(e,s)=>{const t=e,r=s.emit;return{proxy:T(t,r)}};v.components=Object.assign({ConvertScorecardsV2Table:ce},v.components);var ie=function(){var e=this,s=e.$createElement,t=e._self._c||s;return t("section",{staticClass:"grid gap-6"},[t("ConvertScorecardsV2Table",{attrs:{id:e.id,scorecards:e.scorecards},model:{value:e.proxy.scorecards,callback:function(r){e.$set(e.proxy,"scorecards",r)},expression:"proxy.scorecards"}}),t("BaseSimpleCard",{staticClass:"divide-y"},[t("BaseLabel",{staticClass:"flex flex-col p-4 lg:grid lg:grid-cols-3 lg:items-center"},[t("span",{staticClass:"space-x-1"},[e._v(" File Name "),t("span",{staticClass:"text-red-500"},[e._v("*")])]),t("div",{staticClass:"flex flex-col lg:col-span-2"},[t("BaseInput",{attrs:{type:"text",required:"","aria-required":"true"},model:{value:e.proxy.fileName,callback:function(r){e.$set(e.proxy,"fileName",r)},expression:"proxy.fileName"}})],1)]),t("dl",{staticClass:"p-4"},[t("dt",{staticClass:"sr-only"},[e._v("File Name Display:")]),t("div",{staticClass:"rounded-md border bg-gray-100 p-2 shadow-inner"},[t("dd",{staticClass:"text-gray-500"},[e._v(e._s(e.proxy.fileName)+".zip")])])])],1)],1)},ue=[];const V={};var pe=w(v,ie,ue,!1,de,null,null,null);function de(e){for(let s in V)this[s]=V[s]}const me=function(){return pe.exports}(),x={};x.setup=(e,s)=>{const t=P("id"),r=F(!1),o=F(),u=se.list(t),h=b(()=>{var p,d,m;return!((p=o.value)!=null&&p.fileName)||!((m=(d=o.value)==null?void 0:d.scorecards)!=null&&m.length)}),n=I();async function C(){if(!!o.value){r.value=!0;try{await Z.post(`${L}/companies/${t.value}/batch/scorecards`,{fileName:o.value.fileName,supplierScorecardInfos:o.value.scorecards})}finally{r.value=!1}n.push(`/admin/companies/${t.value}/scorecards/batch/rating-service-2?expandZipView=true`)}}return{id:t,isLoading:r,fileZip:o,scorecards:u,isDisabled:h,convert:C}};x.components=Object.assign({BackButton:O,ConvertScorecardsV2Input:me,LoadingSpinner:j,DocumentDownloadSvg:A},x.components);var ge=function(){var e=this,s=e.$createElement,t=e._self._c||s;return t("div",{staticClass:"space-y-6"},[t("div",{staticClass:"flex flex-col space-y-4 lg:flex-row lg:items-center lg:space-x-4 lg:space-y-0"},[t("BackButton"),t("BaseTypography",{attrs:{variant:"h5"}},[e._v("Convert Scorecards to ZIP")])],1),t("form",{staticClass:"space-y-6",on:{submit:function(r){return r.preventDefault(),e.convert.apply(null,arguments)}}},[t("BaseVueQuery",{attrs:{query:e.scorecards},scopedSlots:e._u([{key:"success",fn:function(r){var o=r.data;return[t("ConvertScorecardsV2Input",{attrs:{id:e.id,scorecards:o},model:{value:e.fileZip,callback:function(u){e.fileZip=u},expression:"fileZip"}})]}}])}),t("BaseButton",{staticClass:"space-x-2",attrs:{disabled:e.isDisabled}},[e.isLoading?t("LoadingSpinner"):[t("DocumentDownloadSvg",{staticClass:"w-4 xl:w-5"}),t("span",[e._v("Convert")])]],2)],1)])},fe=[];const B={};var ve=w(x,ge,fe,!1,_e,null,null,null);function _e(e){for(let s in B)this[s]=B[s]}const Be=function(){return ve.exports}();export{Be as default};
