import{c as B,n as h,ap as $,bY as m,cN as g}from"./index.e8125a1f.js";import{A as b}from"./AppVueGoodTable.3e6cf1b2.js";import{I as C}from"./IsoDateTimeDisplay.b7ccf304.js";const l={};l.props={value:{key:"value",required:!0,type:Array}};l.setup=(e,o)=>{const t=e;return{rows:B(()=>t.value.map(s=>{var u,d,p,_,v,f;const{usage:a}=s,I=((u=s.accountId)==null?void 0:u.value)||"",x=((d=s.groupId)==null?void 0:d.value)||"",i=((p=a==null?void 0:a.id)==null?void 0:p.value)||"";return{id:i,accountBatchId:(_=s==null?void 0:s.accountBatchId)==null?void 0:_.value,start:(v=a==null?void 0:a.validity)==null?void 0:v.start,end:(f=a==null?void 0:a.validity)==null?void 0:f.end,view:`/admin/companies/${I}/scorecards/portfolio/groups/${x}/license-batches/${i}`}})),columns:[{label:"Batch ID",field:"id"},{label:"Account Batch ID",field:"accountBatchId"},{label:"Start Date",field:"start"},{label:"End Date",field:"end"},{label:"View",field:"view",sortable:!1}]}};l.components=Object.assign({AppVueGoodTable:b,IsoDateTimeDisplay:C},l.components);var D=function(){var e=this,o=e.$createElement,t=e._self._c||o;return t("AppVueGoodTable",{attrs:{columns:e.columns,rows:e.rows},scopedSlots:e._u([{key:"table-row",fn:function(n){var c=n.row,s=n.column,a=n.formattedRow;return[s.field==="start"||s.field==="end"?[t("IsoDateTimeDisplay",{attrs:{value:c[s.field]}})]:s.field==="view"?[t("BaseLink",{attrs:{to:c.view}},[e._v("View")])]:[e._v(" "+e._s(a[s.field])+" ")]]}}])})},S=[];const w={};var V=h(l,D,S,!1,A,null,null,null);function A(e){for(let o in w)this[o]=w[o]}const G=function(){return V.exports}(),r={};r.setup=(e,o)=>{const t=m("id"),n=m("groupId"),c=g.list(t,n),s=B(()=>{var a;return((a=c.data.value)==null?void 0:a.values)||[]});return{id:t,groupId:n,licenseBatches:c,licenseBatchesValue:s}};r.components=Object.assign({GroupLicenseBatchUsageTable:G,PlusSvg:$},r.components);var T=function(){var e=this,o=e.$createElement,t=e._self._c||o;return t("section",{staticClass:"space-y-6"},[t("BaseVueQuery",{attrs:{query:e.licenseBatches},scopedSlots:e._u([{key:"success",fn:function(){return[t("BaseSimpleCard",{staticClass:"divide-y"},[t("h2",{staticClass:"p-4 font-display text-lg font-semibold"},[e._v(" Group License Batches ")]),t("div",{staticClass:"p-4"},[t("GroupLicenseBatchUsageTable",{attrs:{value:e.licenseBatchesValue}})],1),t("div",{staticClass:"p-4"},[t("div",{staticClass:"lg:inline-flex"},[t("BaseButton",{staticClass:"w-full space-x-2 lg:w-auto",attrs:{to:`/admin/companies/${e.id}/scorecards/portfolio/groups/${e.groupId}/license-batches/new`,"display-type":"info"}},[t("PlusSvg",{staticClass:"h-auto w-4 xl:w-5"}),t("span",[e._v("New Batch")])],1)],1)])])]},proxy:!0}])})],1)},L=[];const y={};var R=h(r,T,L,!1,j,null,null,null);function j(e){for(let o in y)this[o]=y[o]}const q=function(){return R.exports}();export{q as default};
