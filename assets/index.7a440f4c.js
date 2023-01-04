import{D as T}from"./document-arrow-down.8787241b.js";import{aT as w,aD as R,ah as V,aP as u,aQ as d,aB as I,d as F,aS as f,br as Q,a_ as h,az as P,n as k,ax as j,bs as L,L as O,c7 as Z,b as D,aK as E}from"./index.762d52b0.js";import{A as U,R as z}from"./RowSelectionInput.cf74e5a1.js";import{A as H,T as G}from"./AppTanStackTable.6ce2bd1a.js";import{S as K}from"./ScorecardStatusBadge.ce44a190.js";import{u as Y,c as J,i as C,r as W,h as X,g as ee,f as ae,b as te,e as se,d as re}from"./createOnChangeFn.128caefb.js";import"./magnifying-glass.b7cbe8fe.js";import"./TransitionExpand.2a1f96aa.js";import"./chevron-up.736f4142.js";const ne={create(e){const t=w();return R(a=>u.post(`${d}/companies/${e.value}/scorecards-v2`,a).then(r=>r.data),{onSuccess(a){t.invalidateQueries(["companies",e,"scorecards-v2"],{exact:!0}),t.invalidateQueries(["companies",e,"scorecards-v2",a.id],{exact:!0})}})},read(e,t){return V(["companies",e,"scorecards-v2",t],()=>u.get(`${d}/companies/${e.value}/scorecards-v2/${t.value}`).then(a=>a.data))},update(e,t){const a=w();return R(r=>u.put(`${d}/companies/${e.value}/scorecards-v2/${t.value}`,r).then(n=>n.data),{onSuccess(){a.invalidateQueries(["companies",e,"scorecards-v2",t],{exact:!0})}})},delete(e,t){const a=w();return R(()=>u.delete(`${d}/companies/${e.value}scorecards-v2/${t.value}`).then(r=>r.data),{onSuccess(){a.invalidateQueries(["companies",e,"scorecards-v2",t],{exact:!0})}})},list(e){return V(["companies",e,"scorecards-v2"],()=>u.get(`${d}/companies/${e.value}/scorecards-v2`).then(t=>t.data))}},_={};_.props={id:{key:"id",required:!0,type:String},value:{key:"value",required:!1,type:Array},scorecards:{key:"scorecards",required:!0,type:Array}};_.setup=(e,t)=>{const a=e,r=t.emit,n=I(a,r),p=F(()=>a.scorecards.map(({id:s,data:l,meta:c})=>{const{supplier:$,status:i}=l;return{id:s,supplier:$.name,status:i.state,year:i.year,quarter:i.quarter,updatedAt:c.updatedAt}})),o=J(),b=[o.display({id:"select",header:({table:s})=>f(U,{props:{table:s}}),cell:({row:s})=>f(z,{props:{row:s}})}),o.accessor(s=>s.supplier,{id:"supplier",header:()=>"Supplier",cell:s=>s.getValue(),enableColumnFilter:!1}),o.accessor("status",{header:()=>"Status",cell:s=>f(K,{props:{value:s.getValue()}}),enableColumnFilter:!1}),o.accessor("quarter",{header:()=>"Quarter",cell:s=>s.getValue(),enableColumnFilter:!1}),o.accessor("year",{header:()=>"Year",cell:s=>s.getValue(),enableColumnFilter:!1}),o.accessor("updatedAt",{header:()=>"Last Updated",cell:s=>f(Q,{props:{value:s.getValue(),format:"date"}}),enableColumnFilter:!1}),o.display({id:"actions",header:"Actions",cell:({row:s})=>f(G,{props:{actions:[{id:"edit",to:`/admin/companies/${encodeURIComponent(a.id)}/scorecards/in-depth/rating-service-2/${s.original.id}`}]}})})],x=h([]),v=h({pageIndex:0,pageSize:10}),m=h(""),g=h({}),q=Y({get data(){return p.value},columns:b,state:{get sorting(){return x.value},get pagination(){return v.value},get globalFilter(){return m.value},get rowSelection(){return g.value}},onSortingChange:C(x),onPaginationChange:C(v),onGlobalFilterChange:C(m),globalFilterFn:(s,l,c,$)=>{const i=W(s.getValue(l),c,{threshold:X.CONTAINS});return $(i),i.passed},onRowSelectionChange:C(g),getCoreRowModel:ee(),getSortedRowModel:ae(),getFacetedUniqueValues:te(),getPaginationRowModel:se(),getFilteredRowModel:re()}),N=F(()=>q.getSelectedRowModel().rows);return P(N,s=>{const l=[];s.forEach(c=>{c.original&&l.push({scorecardId:c.original.id,supplierName:c.original.supplier})}),n.value=l},{immediate:!0}),{instance:q}};_.components=Object.assign({AppTanStackTable:H},_.components);var oe=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("AppTanStackTable",{attrs:{table:e.instance}})},ce=[];const A={};var le=k(_,oe,ce,!1,ie,null,null,null);function ie(e){for(let t in A)this[t]=A[t]}const ue=function(){return le.exports}(),y={};y.props={id:{key:"id",required:!0,type:String},value:{key:"value",required:!1,type:null},scorecards:{key:"scorecards",required:!0,type:Array}};y.setup=(e,t)=>{const a=e,r=t.emit;return{proxy:j(a,r)}};y.components=Object.assign({ConvertScorecardsV2Table:ue},y.components);var de=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("section",{staticClass:"grid gap-6"},[a("ConvertScorecardsV2Table",{attrs:{id:e.id,scorecards:e.scorecards},model:{value:e.proxy.scorecards,callback:function(r){e.$set(e.proxy,"scorecards",r)},expression:"proxy.scorecards"}}),a("BaseSimpleCard",{staticClass:"divide-y"},[a("BaseLabel",{staticClass:"flex flex-col p-4 lg:grid lg:grid-cols-3 lg:items-center"},[a("span",{staticClass:"space-x-1"},[e._v(" File Name "),a("span",{staticClass:"text-red-500"},[e._v("*")])]),a("div",{staticClass:"flex flex-col lg:col-span-2"},[a("BaseInput",{attrs:{type:"text",required:"","aria-required":"true"},model:{value:e.proxy.fileName,callback:function(r){e.$set(e.proxy,"fileName",r)},expression:"proxy.fileName"}})],1)]),a("dl",{staticClass:"p-4"},[a("dt",{staticClass:"sr-only"},[e._v("File Name Display:")]),a("div",{staticClass:"rounded-md border bg-gray-100 p-2 shadow-inner"},[a("dd",{staticClass:"text-gray-500"},[e._v(e._s(e.proxy.fileName)+".zip")])])])],1)],1)},pe=[];const B={};var ve=k(y,de,pe,!1,me,null,null,null);function me(e){for(let t in B)this[t]=B[t]}const ge=function(){return ve.exports}(),S={};S.setup=(e,t)=>{const a=Z("id"),r=D(!1),n=D(),p=ne.list(a),o=F(()=>{var v,m,g;return!((v=n.value)!=null&&v.fileName)||!((g=(m=n.value)==null?void 0:m.scorecards)!=null&&g.length)}),b=E();async function x(){if(!!n.value){r.value=!0;try{await u.post(`${d}/companies/${a.value}/batch/scorecards`,{fileName:n.value.fileName,supplierScorecardInfos:n.value.scorecards})}finally{r.value=!1}b.push(`/admin/companies/${a.value}/scorecards/batch/rating-service-2?expandZipView=true`)}}return{id:a,isLoading:r,fileZip:n,scorecards:p,isDisabled:o,convert:x}};S.components=Object.assign({BackButton:L,ConvertScorecardsV2Input:ge,LoadingSpinner:O,DocumentDownloadSvg:T},S.components);var fe=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"space-y-6"},[a("div",{staticClass:"flex flex-col space-y-4 lg:flex-row lg:items-center lg:space-x-4 lg:space-y-0"},[a("BackButton"),a("BaseTypography",{attrs:{variant:"h5"}},[e._v("Convert Scorecards to ZIP")])],1),a("form",{staticClass:"space-y-6",on:{submit:function(r){return r.preventDefault(),e.convert.apply(null,arguments)}}},[a("BaseVueQuery",{attrs:{query:e.scorecards},scopedSlots:e._u([{key:"success",fn:function(r){var n=r.data;return[a("ConvertScorecardsV2Input",{attrs:{id:e.id,scorecards:n},model:{value:e.fileZip,callback:function(p){e.fileZip=p},expression:"fileZip"}})]}}])}),a("BaseButton",{staticClass:"space-x-2",attrs:{disabled:e.isDisabled}},[e.isLoading?a("LoadingSpinner"):[a("DocumentDownloadSvg",{staticClass:"w-4 xl:w-5"}),a("span",[e._v("Convert")])]],2)],1)])},_e=[];const M={};var ye=k(S,fe,_e,!1,xe,null,null,null);function xe(e){for(let t in M)this[t]=M[t]}const qe=function(){return ye.exports}();export{qe as default};
