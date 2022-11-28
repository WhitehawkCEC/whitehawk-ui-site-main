import{c as m,aJ as B,aT as d,n as g,ao as x,c5 as v,dg as I}from"./index.36d90401.js";import{A as T,T as S}from"./AppTanStackTable.d264bfb6.js";import{I as f}from"./IsoDateTimeDisplay.ee32b0a4.js";import{c as $}from"./createOnChangeFn.033d15d4.js";import{u as k}from"./createSimpleTable.c684e1a0.js";import"./magnifying-glass.b7cbe8fe.js";import"./TransitionExpand.156aa394.js";import"./chevron-up.736f4142.js";const r={};r.props={accountId:{key:"accountId",required:!0,type:String},value:{key:"value",required:!0,type:Array}};r.setup=(e,n)=>{const t=e,p=m(()=>t.accountId),u=m(()=>t.value),c=$(),l=B(),b=[c.accessor(a=>{var s,o;return(o=(s=a.usage)==null?void 0:s.id)==null?void 0:o.value},{id:"id",header:()=>"Batch ID",enableColumnFilter:!1}),c.accessor(a=>{var s;return(s=a.accountBatchId)==null?void 0:s.value},{id:"accountBatchId",header:()=>"Account Batch ID",enableColumnFilter:!1}),c.group({id:"validity",header:()=>"Validity",columns:[c.accessor(a=>{var s,o;return(o=(s=a.usage)==null?void 0:s.validity)==null?void 0:o.start},{id:"start",header:()=>"Start",cell:a=>d(f,{props:{value:a.getValue(),format:"date"}}),enableColumnFilter:!1}),c.accessor(a=>{var s,o;return(o=(s=a.usage)==null?void 0:s.validity)==null?void 0:o.end},{id:"end",header:()=>"End",cell:a=>d(f,{props:{value:a.getValue(),format:"date"}}),enableColumnFilter:!1})]}),c.display({id:"actions",header:"Actions",cell:({row:a})=>d(S,{props:{actions:[{id:"view",action(){var s,o,_;l.push(`/admin/companies/${p.value}/scorecards/portfolio/groups/${(s=a.original.groupId)==null?void 0:s.value}/license-batches/${(_=(o=a.original.usage)==null?void 0:o.id)==null?void 0:_.value}`)}}]}})})];return{instance:k(u,b)}};r.components=Object.assign({AppTanStackTable:T},r.components);var A=function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("AppTanStackTable",{attrs:{table:e.instance}})},C=[];const h={};var V=g(r,A,C,!1,F,null,null,null);function F(e){for(let n in h)this[n]=h[n]}const w=function(){return V.exports}(),i={};i.setup=(e,n)=>{const t=v("id"),p=v("groupId"),u=I.list(t,p),c=m(()=>{var l;return((l=u.data.value)==null?void 0:l.values)||[]});return{id:t,licenseBatches:u,licenseBatchesValue:c}};i.components=Object.assign({PlusSvg:x,GroupLicenseBatchUsageTable:w},i.components);var L=function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("BaseTablePageLayout",{scopedSlots:e._u([{key:"title",fn:function(){return[e._v("Group License Batches")]},proxy:!0},{key:"button",fn:function(){return[t("BaseButton",{staticClass:"space-x-2",attrs:{to:"new",append:"",type:"button"}},[t("PlusSvg",{staticClass:"h-auto w-4 xl:w-5"}),t("span",[e._v("New Batch")])],1)]},proxy:!0},{key:"table",fn:function(){return[t("BaseVueQuery",{attrs:{query:e.licenseBatches},scopedSlots:e._u([{key:"success",fn:function(){return[t("GroupLicenseBatchUsageTable",{attrs:{"account-id":e.id,value:e.licenseBatchesValue}})]},proxy:!0}])})]},proxy:!0}])})},j=[];const y={};var D=g(i,L,j,!1,E,null,null,null);function E(e){for(let n in y)this[n]=y[n]}const J=function(){return D.exports}();export{J as default};
