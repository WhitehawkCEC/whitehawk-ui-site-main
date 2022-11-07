import{F as Q}from"./FormButton.55dd7c06.js";import{L as $}from"./LicenseTypeMapQuantitiesInput.5b0d3f10.js";import{c as u,d7 as T,d5 as q,r as I,c_ as x,aA as k,d3 as A,n as L,b$ as y}from"./index.496d7921.js";import{u as F,L as M}from"./LicenseBatchUsageDisplay.0b02de51.js";import"./arrow-down-on-square.bf61cdc5.js";import"./trash.78f57a7a.js";import"./index.96db45be.js";import"./DynamicForm.4440eb91.js";import"./calendar.aad8910e.js";import"./identification.8410fcc9.js";import"./AggregateLicenseDisplay.b044b7f9.js";import"./DateRangeDisplay.668baa6a.js";import"./IsoDateTimeDisplay.66162d00.js";const d={};d.props={accountId:{key:"accountId",required:!0,type:String},groupId:{key:"groupId",required:!0,type:String},groupBatchId:{key:"groupBatchId",required:!0,type:String}};d.setup=(t,a)=>{const e=t,n=u(()=>e.accountId),o=u(()=>e.groupId),i=u(()=>e.groupBatchId),_=T.create(n,o,i),r=q.read(n,o,i),p=u(()=>{var s,c;return(c=(s=r.data.value)==null?void 0:s.value)==null?void 0:c.accountBatchId}),g=u(()=>{var s,c,l;return(l=(c=(s=r.data.value)==null?void 0:s.value)==null?void 0:c.usage)==null?void 0:l.counts}),f=I(x.LicenseTypeMapQuantities.create()),h=I(!1);k(()=>g.value,s=>{var c,l;!s||h.value||(f.value={annual:((c=s.annual)==null?void 0:c.quantity)||0,oneTime:((l=s.oneTime)==null?void 0:l.quantity)||0},h.value=!0)},{immediate:!0});const v=F(g,f),S=u(()=>({accountBatchId:p.value||A.create(),quantitiesDiff:v.value})),C=u(()=>p.value&&(v.value.annual!==0||v.value.oneTime!==0));async function D(){await _.mutateAsync(S.value)}return{currentState:r,quantitiesDesired:f,canSubmit:C,submit:D}};d.components=Object.assign({LicenseTypeMapQuantitiesInput:$,FormButton:Q},d.components);var j=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("BaseSimpleCard",{staticClass:"divide-y"},[e("BaseTypography",{staticClass:"p-4",attrs:{component:"h2",variant:"subtitle3"}},[t._v(" Edit Quantities ")]),e("form",{staticClass:"divide-y",on:{submit:function(n){return n.preventDefault(),t.submit.apply(null,arguments)}}},[e("BaseVueQuery",{attrs:{query:t.currentState},scopedSlots:t._u([{key:"success",fn:function(){return[e("LicenseTypeMapQuantitiesInput",{model:{value:t.quantitiesDesired,callback:function(n){t.quantitiesDesired=n},expression:"quantitiesDesired"}})]},proxy:!0}])}),e("FormButton",{attrs:{action:"update","is-valid-form":t.canSubmit}})],1)],1)},G=[];const B={};var U=L(d,j,G,!1,E,null,null,null);function E(t){for(let a in B)this[a]=B[a]}const R=function(){return U.exports}(),m={};m.setup=(t,a)=>{const e=y("id"),n=y("groupId"),o=y("batchId"),i=q.read(e,n,o),_=u(()=>{var r,p;return((p=(r=i.data.value)==null?void 0:r.value)==null?void 0:p.usage)||x.LicenseBatchUsage.create()});return{id:e,groupId:n,batchId:o,licenseBatch:i,usage:_}};m.components=Object.assign({LicenseBatchUsageDisplay:M,AccountGroupLicenseBatchQuantitiesChange:R},m.components);var O=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("BaseVueQuery",{attrs:{query:t.licenseBatch},scopedSlots:t._u([{key:"success",fn:function(){return[e("section",{staticClass:"flex flex-col space-y-6"},[e("LicenseBatchUsageDisplay",{attrs:{value:t.usage}}),e("AccountGroupLicenseBatchQuantitiesChange",{attrs:{"account-id":t.id,"group-id":t.groupId,"group-batch-id":t.batchId}})],1)]},proxy:!0}])})},z=[];const b={};var P=L(m,O,z,!1,w,null,null,null);function w(t){for(let a in b)this[a]=b[a]}const st=function(){return P.exports}();export{st as default};
