import{d as l,aS as _,n as g,an as I,ca as v,dn as B}from"./index.b0bcf7b8.js";import{A as x,T as S}from"./AppTanStackTable.cd9aeee9.js";import{I as b}from"./IsoDateTimeDisplay.606f1e5a.js";import{c as $}from"./createOnChangeFn.f8dcdac4.js";import{u as T}from"./createSimpleTable.5fe7daf8.js";import"./magnifying-glass.b7cbe8fe.js";import"./arrow-down-tray.793d581e.js";import"./chevron-up.736f4142.js";const r={};r.props={accountId:{key:"accountId",required:!0,type:String},subId:{key:"subId",required:!0,type:String},value:{key:"value",required:!0,type:Array}};r.setup=(e,n)=>{const t=e,d=l(()=>t.accountId),m=l(()=>t.subId),u=l(()=>t.value),c=$(),i=[c.accessor(s=>{var a,o;return(o=(a=s.usage)==null?void 0:a.id)==null?void 0:o.value},{id:"id",header:()=>"Batch ID",enableColumnFilter:!1}),c.accessor(s=>{var a;return(a=s.accountBatchId)==null?void 0:a.value},{id:"accountBatchId",header:()=>"Account Batch ID",enableColumnFilter:!1}),c.group({id:"validity",header:()=>"Validity",columns:[c.accessor(s=>{var a,o;return(o=(a=s.usage)==null?void 0:a.validity)==null?void 0:o.start},{id:"start",header:()=>"Start",cell:s=>_(b,{props:{value:s.getValue(),format:"date"}}),enableColumnFilter:!1}),c.accessor(s=>{var a,o;return(o=(a=s.usage)==null?void 0:a.validity)==null?void 0:o.end},{id:"end",header:()=>"End",cell:s=>_(b,{props:{value:s.getValue(),format:"date"}}),enableColumnFilter:!1})]}),c.display({id:"actions",header:"Actions",cell:({row:s})=>{var a,o,f;return _(S,{props:{actions:[{id:"view",to:`/admin/companies/${d.value}/subscriptions/${m.value}/integrations/2/scorecards/portfolio/groups/${(a=s.original.groupId)==null?void 0:a.value}/license-batches/${(f=(o=s.original.usage)==null?void 0:o.id)==null?void 0:f.value}`}]}})}})];return{instance:T(u,i)}};r.components=Object.assign({AppTanStackTable:x},r.components);var k=function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("AppTanStackTable",{attrs:{table:e.instance}})},A=[];const h={};var C=g(r,k,A,!1,V,null,null,null);function V(e){for(let n in h)this[n]=h[n]}const F=function(){return C.exports}(),p={};p.setup=(e,n)=>{const t=v("id"),d=v("subscriptionId"),m=v("groupId"),u=B.list(t,m),c=l(()=>{var i;return((i=u.data.value)==null?void 0:i.values)||[]});return{id:t,subscriptionId:d,licenseBatches:u,licenseBatchesValue:c}};p.components=Object.assign({PlusSvg:I,GroupLicenseBatchUsageTable:F},p.components);var w=function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("BaseTablePageLayout",{scopedSlots:e._u([{key:"title",fn:function(){return[e._v("Group License Batches")]},proxy:!0},{key:"button",fn:function(){return[t("BaseButton",{staticClass:"space-x-2",attrs:{to:"new",append:"",type:"button"}},[t("PlusSvg",{staticClass:"h-auto w-4 xl:w-5"}),t("span",[e._v("New Batch")])],1)]},proxy:!0},{key:"table",fn:function(){return[t("BaseVueQuery",{attrs:{query:e.licenseBatches},scopedSlots:e._u([{key:"success",fn:function(){return[t("GroupLicenseBatchUsageTable",{attrs:{"account-id":e.id,"sub-id":e.subscriptionId,value:e.licenseBatchesValue}})]},proxy:!0}])})]},proxy:!0}])})},L=[];const y={};var j=g(p,w,L,!1,q,null,null,null);function q(e){for(let n in y)this[n]=y[n]}const z=function(){return j.exports}();export{z as default};
