import{B as y}from"./BackButton.e90e26bd.js";import{A as x}from"./AppTanStackTable.e1a870b9.js";import{ah as g,aO as $,aP as B,c as o,n as i,aR as k,bX as _}from"./index.7b120442.js";import{c as C}from"./createOnChangeFn.af5d9675.js";import{u as F}from"./createSimpleTable.00cd422c.js";import"./chevron-left.0808b01b.js";import"./magnifying-glass.b7cbe8fe.js";import"./TransitionExpand.c6a1c219.js";import"./chevron-up.736f4142.js";const I={read(e,s){return g(["companies",e,"batch","scorecards","status-v2",s],()=>$.get(`${B}/companies/${e.value}/batch/scorecards/status-v2/${s.value}`).then(t=>t.data))}},p={};p.props={value:{key:"value",required:!0,type:String}};p.setup=(e,s)=>{const t=e;return{level:o(()=>{switch(t.value.toLowerCase()){case"success":return{label:"Success",color:"bg-green-100 text-green-900"};case"failed":return{label:"Failed",color:"bg-red-100 text-red-900"};default:return{label:"Status N/A",color:"bg-gray-100 text-gray-900"}}})}};var T=function(){var e=this,s=e.$createElement,t=e._self._c||s;return t("span",{staticClass:"inline-flex items-center whitespace-nowrap rounded px-2 py-0.5",class:e.level.color},[t("BaseOverline",{staticClass:"uppercase"},[e._v(" "+e._s(e.level.label)+" ")])],1)},R=[];const m={};var q=i(p,T,R,!1,w,null,null,null);function w(e){for(let s in m)this[s]=m[s]}const j=function(){return q.exports}(),c={};c.props={id:{key:"id",required:!0,type:String},batchId:{key:"batchId",required:!0,type:String},batchStatuses:{key:"batchStatuses",required:!0,type:null}};c.setup=(e,s)=>{const t=e,a=o(()=>t.batchStatuses.batchRequest.entities),r=o(()=>t.batchStatuses.scorecardIds),f=o(()=>!a.value&&!r.value?[]:a.value.map(n=>{var d;return{id:n.id,name:n.name,status:(d=r.value.filter(S=>S.supplierId==n.id))!=null&&d.length?"Success":"Failed"}})),u=C(),b=[u.accessor("id",{header:()=>"Supplier ID",enableColumnFilter:!1}),u.accessor("name",{header:()=>"Supplier Name",enableColumnFilter:!1}),u.accessor("status",{header:()=>"Scorecard Report Status",cell:n=>k(j,{props:{value:n.getValue()}}),enableColumnFilter:!1})];return{instance:F(f,b)}};c.components=Object.assign({AppTanStackTable:x},c.components);var A=function(){var e=this,s=e.$createElement,t=e._self._c||s;return t("AppTanStackTable",{attrs:{table:e.instance}})},E=[];const v={};var O=i(c,A,E,!1,Q,null,null,null);function Q(e){for(let s in v)this[s]=v[s]}const V=function(){return O.exports}(),l={};l.setup=(e,s)=>{const t=_("id"),a=_("batchId"),r=I.read(t,a);return{id:t,batchId:a,statusQuery:r}};l.components=Object.assign({BackButton:y,BatchScheduleStatusTable:V},l.components);var M=function(){var e=this,s=e.$createElement,t=e._self._c||s;return t("div",{staticClass:"space-y-4"},[t("div",{staticClass:"flex flex-col space-y-4 sm:flex-row sm:items-center sm:space-y-0 sm:space-x-4"},[t("div",[t("BackButton",{attrs:{link:`/admin/companies/${e.id}/scorecards/batch/scheduler`}})],1),t("BaseTypography",{attrs:{variant:"h5",component:"h2"}},[e._v("Batch Status")])],1),t("BaseVueQuery",{attrs:{query:e.statusQuery},scopedSlots:e._u([{key:"success",fn:function(a){var r=a.data;return[t("BatchScheduleStatusTable",{attrs:{id:e.id,"batch-id":e.batchId,"batch-statuses":r}})]}}])})],1)},H=[];const h={};var N=i(l,M,H,!1,P,null,null,null);function P(e){for(let s in h)this[s]=h[s]}const Z=function(){return N.exports}();export{Z as default};
