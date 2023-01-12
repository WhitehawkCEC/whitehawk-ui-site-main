import{D as A}from"./document-arrow-down.8787241b.js";import{aB as D,d as y,aS as u,br as w,az as I,n as g,ax as q,bs as F,L as R,ca as b,b as h,aK as T,aP as N,aQ as V}from"./index.b0bcf7b8.js";import{A as j,R as L}from"./RowSelectionInput.ff217d39.js";import{A as M,T as Q}from"./AppTanStackTable.cd9aeee9.js";import{S as E}from"./ScorecardStatusBadge.d6008217.js";import{c as O}from"./createOnChangeFn.f8dcdac4.js";import{u as P}from"./createSimpleTable.5fe7daf8.js";import{u as Z}from"./useInDepthScorecards.6bc4c3bf.js";import"./magnifying-glass.b7cbe8fe.js";import"./arrow-down-tray.793d581e.js";import"./chevron-up.736f4142.js";const p={};p.props={id:{key:"id",required:!0,type:String},value:{key:"value",required:!1,type:Array},scorecards:{key:"scorecards",required:!0,type:Array}};p.setup=(e,a)=>{const s=e,r=a.emit,c=D(s,r),n=y(()=>s.scorecards.map(t=>{var x,S;const l=new Date,i=((x=t.yearQuarterValue.split("/")[0])==null?void 0:x.trim())||l.getUTCFullYear().toString(),k=((S=t.yearQuarterValue.split("/")[1])==null?void 0:S.trim())||`Q${Math.ceil((l.getMonth()+1)/3)}`;return{id:t.id,supplier:t.data["Supplier Name"]||"",status:t.status,year:i,quarter:k,updatedAt:t.data.updatedAt||"N/A"}})),v=y(()=>n.value.filter(t=>t.supplier!=="")),o=O(),_=[o.display({id:"select",header:({table:t})=>u(j,{props:{table:t}}),cell:({row:t})=>u(L,{props:{row:t}})}),o.accessor(t=>t.supplier,{id:"supplier",header:()=>"Supplier",cell:t=>t.getValue(),enableColumnFilter:!1}),o.accessor("status",{header:()=>"Status",cell:t=>u(E,{props:{value:t.getValue()}}),enableColumnFilter:!1}),o.accessor("quarter",{header:()=>"Quarter",cell:t=>t.getValue(),enableColumnFilter:!1}),o.accessor("year",{header:()=>"Year",cell:t=>t.getValue(),enableColumnFilter:!1}),o.accessor("updatedAt",{header:()=>"Last Updated",cell:t=>u(w,{props:{value:t.getValue(),format:"date"}}),enableColumnFilter:!1}),o.display({id:"actions",header:"Actions",cell:({row:t})=>u(Q,{props:{actions:[{id:"edit",to:`/admin/companies/${encodeURIComponent(s.id)}/scorecards/in-depth/rating-service-2/${t.original.id}`}]}})})],m=P(v,_);return I(()=>m.getSelectedRowModel().rows,t=>{if(t){const l=[];t.forEach(i=>{l.push({scorecardId:i.original.id,supplierName:i.original.supplier})}),c.value=l}}),{instance:m}};p.components=Object.assign({AppTanStackTable:M},p.components);var U=function(){var e=this,a=e.$createElement,s=e._self._c||a;return s("AppTanStackTable",{attrs:{table:e.instance}})},z=[];const C={};var H=g(p,U,z,!1,Y,null,null,null);function Y(e){for(let a in C)this[a]=C[a]}const K=function(){return H.exports}(),d={};d.props={id:{key:"id",required:!0,type:String},value:{key:"value",required:!1,type:null},scorecards:{key:"scorecards",required:!0,type:Array}};d.setup=(e,a)=>{const s=e,r=a.emit;return{proxy:q(s,r)}};d.components=Object.assign({ConvertBatchScorecardsTable:K},d.components);var G=function(){var e=this,a=e.$createElement,s=e._self._c||a;return s("section",{staticClass:"grid gap-6"},[s("ConvertBatchScorecardsTable",{attrs:{id:e.id,scorecards:e.scorecards},model:{value:e.proxy.scorecards,callback:function(r){e.$set(e.proxy,"scorecards",r)},expression:"proxy.scorecards"}}),s("BaseSimpleCard",[s("BaseLabel",{staticClass:"flex flex-col p-4 lg:grid lg:grid-cols-3 lg:items-center"},[s("span",{staticClass:"after:content-['*']` after:text-red-700"},[e._v("File Name")]),s("div",{staticClass:"flex flex-col lg:col-span-2"},[s("BaseInput",{attrs:{type:"text",required:"","aria-required":"true"},model:{value:e.proxy.fileName,callback:function(r){e.$set(e.proxy,"fileName",r)},expression:"proxy.fileName"}})],1)])],1)],1)},J=[];const $={};var W=g(d,G,J,!1,X,null,null,null);function X(e){for(let a in $)this[a]=$[a]}const ee=function(){return W.exports}(),f={};f.setup=(e,a)=>{const s=b("id"),r=b("subscriptionId"),c=h(!1),n=h(),v=Z.list(s),o=y(()=>{var t,l,i;return!((t=n.value)!=null&&t.fileName)||!((i=(l=n.value)==null?void 0:l.scorecards)!=null&&i.length)}),_=T();async function m(){if(!!n.value){c.value=!0;try{await N.post(`${V}/companies/${s.value}/batch/scorecards`,{fileName:n.value.fileName,supplierScorecardInfos:n.value.scorecards})}finally{c.value=!1}_.push(`/admin/companies/${s.value}/subscriptions/${r.value}/integrations/1/scorecards/zip-files`)}}return{id:s,isLoading:c,fileZip:n,scorecards:v,isDisabled:o,convert:m}};f.components=Object.assign({BackButton:F,ConvertScorecardsInput:ee,LoadingSpinner:R,DocumentDownloadSvg:A},f.components);var se=function(){var e=this,a=e.$createElement,s=e._self._c||a;return s("div",{staticClass:"space-y-6"},[s("div",{staticClass:"flex flex-col space-y-4 lg:flex-row lg:items-center lg:space-x-4 lg:space-y-0"},[s("BackButton"),s("div",{staticClass:"flex flex-col -space-y-1"},[s("BaseOverline",{staticClass:"uppercase text-gray-500"},[e._v("Bitsight")]),s("BaseTypography",{attrs:{variant:"h5"}},[e._v("ZIP Files")])],1)],1),s("form",{staticClass:"space-y-6",on:{submit:function(r){return r.preventDefault(),e.convert.apply(null,arguments)}}},[s("BaseVueQuery",{attrs:{query:e.scorecards},scopedSlots:e._u([{key:"success",fn:function(r){var c=r.data;return[s("ConvertScorecardsInput",{attrs:{id:e.id,scorecards:c},model:{value:e.fileZip,callback:function(n){e.fileZip=n},expression:"fileZip"}})]}}])}),s("BaseButton",{staticClass:"space-x-2",attrs:{disabled:e.isDisabled}},[e.isLoading?s("LoadingSpinner"):[s("DocumentDownloadSvg",{staticClass:"-ml-1 w-5"}),s("span",[e._v("Convert")])]],2)],1)])},te=[];const B={};var ae=g(f,se,te,!1,re,null,null,null);function re(e){for(let a in B)this[a]=B[a]}const _e=function(){return ae.exports}();export{_e as default};
