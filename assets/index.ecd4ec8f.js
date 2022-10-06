import{d as _,aJ as F,aG as q,aT as o,bt as u,n as v,aq as R,c1 as V}from"./index.765bdb5f.js";import{A as k,T as B}from"./AppTanStackTable.f9746f35.js";import{c as w}from"./createOnChangeFn.c71a9a98.js";import{u as g}from"./useScheduledBatches.098ed7e3.js";import{u as I}from"./createSimpleTable.aee8a25f.js";import"./magnifying-glass.b7cbe8fe.js";import"./TransitionExpand.6812981e.js";import"./chevron-up.736f4142.js";const l={};l.props={id:{key:"id",required:!0,type:String},batches:{key:"batches",required:!0,type:Array}};l.setup=(t,s)=>{const a=t,c=_(()=>a.id),d=_(()=>{var e;return(e=a.batches)==null?void 0:e.map(f=>{const{id:D,type:x,company:$,frequency:T,range:h,batchResultId:A,meta:r}=f;return{id:D,type:x,company:$.name,batchResultId:A,frequency:T,quarter:f.quarter,startDate:h.start,endDate:h.end,createdDate:r==null?void 0:r.createdAt,updatedDate:r==null?void 0:r.updatedAt}})}),p=F(),m=q(),S=g.delete(c),n=w(),C=[n.accessor("company",{header:()=>"Company",enableColumnFilter:!1}),n.accessor("type",{header:()=>"Report Type",enableColumnFilter:!1}),n.accessor("startDate",{header:()=>"Start Date",cell:e=>{if(e.getValue())return o(u,{props:{value:e.getValue(),format:"date"}})},enableColumnFilter:!1}),n.accessor("endDate",{header:()=>"End Date",cell:e=>{if(e.getValue())return o(u,{props:{value:e.getValue(),format:"date"}})},enableColumnFilter:!1}),n.accessor("frequency",{header:()=>"Frequency",enableColumnFilter:!1}),n.accessor("quarter",{header:()=>"Quarter",enableColumnFilter:!1}),n.accessor("createdDate",{header:()=>"Created At",cell:e=>{if(e.getValue())return o(u,{props:{value:e.getValue(),format:"date"}})},enableColumnFilter:!1}),n.accessor("updatedDate",{header:()=>"Last Updated",cell:e=>{if(e.getValue())return o(u,{props:{value:e.getValue(),format:"date"}})},enableColumnFilter:!1}),n.display({id:"actions",header:"Actions",cell:({row:e})=>o(B,{props:{actions:[{id:"view",action(){p.push(`/admin/companies/${encodeURIComponent(a.id)}/scorecards/batch/scheduler/${e.original.batchResultId}/status`)},isDisabled:e.original.batchResultId===null},{id:"edit",action(){p.push(`/admin/companies/${encodeURIComponent(a.id)}/scorecards/batch/scheduler/${e.original.id}`)}},{id:"archive",async action(){e.original&&(await S.mutateAsync(e.original.id),m.success("Archived batch successfully")),m.error("Something went wrong")}}]}})})];return{instance:I(d,C)}};l.components=Object.assign({AppTanStackTable:k},l.components);var j=function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("AppTanStackTable",{attrs:{table:t.instance}})},E=[];const b={};var P=v(l,j,E,!1,U,null,null,null);function U(t){for(let s in b)this[s]=b[s]}const H=function(){return P.exports}(),i={};i.setup=(t,s)=>{const a=V("id"),c=g.list(a);return{id:a,batches:c}};i.components=Object.assign({PlusSvg:R,BatchScheduleTable:H},i.components);var L=function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("BaseTablePageLayout",{scopedSlots:t._u([{key:"title",fn:function(){return[t._v("Scheduled Batches")]},proxy:!0},{key:"button",fn:function(){return[a("BaseButton",{staticClass:"w-full space-x-2 md:w-auto",attrs:{to:`/admin/companies/${t.id}/scorecards/batch/scheduler/new`}},[a("PlusSvg",{staticClass:"h-auto w-4 xl:w-5"}),a("span",[t._v("New Schedule")])],1)]},proxy:!0},{key:"table",fn:function(){return[a("BaseVueQuery",{attrs:{query:t.batches},scopedSlots:t._u([{key:"success",fn:function(c){var d=c.data;return[a("BatchScheduleTable",{attrs:{id:t.id,batches:d}})]}}])})]},proxy:!0}])})},M=[];const y={};var N=v(i,L,M,!1,O,null,null,null);function O(t){for(let s in y)this[s]=y[s]}const ee=function(){return N.exports}();export{ee as default};
