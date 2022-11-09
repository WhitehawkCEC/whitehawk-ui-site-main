import{d2 as Q,d3 as S,c,d4 as D,d1 as b,r as y,d0 as C,aA as $,n as I,b$ as h}from"./index.06ea6359.js";import{L as T}from"./LicenseTypeMapQuantitiesInput.5f8b4f53.js";import{u as A,L as M}from"./LicenseBatchUsageDisplay.cde14c28.js";import"./index.6f54aa56.js";import"./DynamicForm.5db6884a.js";import"./calendar.aad8910e.js";import"./identification.8410fcc9.js";import"./AggregateLicenseDisplay.295334d5.js";import"./DateRangeDisplay.5ddf1a9c.js";import"./IsoDateTimeDisplay.8c256603.js";const p={};p.props={accountId:{key:"accountId",required:!0,type:String},accountBatchId:{key:"accountBatchId",required:!0,type:String}};p.setup=(t,a)=>{const e=t,s=c(()=>e.accountId),i=c(()=>e.accountBatchId),m=D.create(s,i),u=b.read(s,i),o=c(()=>{var n,r,l;return(l=(r=(n=u.data.value)==null?void 0:n.value)==null?void 0:r.usage)==null?void 0:l.counts}),_=y(C.LicenseTypeMapQuantities.create()),v=y(!1);$(()=>o.value,n=>{var r,l;!n||v.value||(_.value={annual:((r=n.annual)==null?void 0:r.quantity)||0,oneTime:((l=n.oneTime)==null?void 0:l.quantity)||0},v.value=!0)},{immediate:!0});const f=A(o,_),x=c(()=>({quantitiesDiff:f.value})),L=c(()=>f.value.annual!==0||f.value.oneTime!==0);async function q(){await m.mutateAsync(x.value)}return{currentState:u,quantitiesDesired:_,canSubmit:L,submit:q}};p.components=Object.assign({BaseVueQuery:Q,LicenseTypeMapQuantitiesInput:T,BaseButton:S},p.components);var k=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("BaseSimpleCard",{staticClass:"divide-y"},[e("BaseTypography",{staticClass:"p-4",attrs:{component:"h2",variant:"subtitle3"}},[t._v(" Edit Quantities ")]),e("form",{staticClass:"divide-y",on:{submit:function(s){return s.preventDefault(),t.submit.apply(null,arguments)}}},[e("BaseVueQuery",{attrs:{query:t.currentState},scopedSlots:t._u([{key:"success",fn:function(){return[e("LicenseTypeMapQuantitiesInput",{model:{value:t.quantitiesDesired,callback:function(s){t.quantitiesDesired=s},expression:"quantitiesDesired"}})]},proxy:!0}])}),e("div",{staticClass:"p-4"},[e("BaseButton",{staticClass:"w-full md:w-auto",attrs:{action:"primary",shape:"rectangle","display-type":"success",disabled:!t.canSubmit}},[t._v(" Change ")])],1)],1)],1)},j=[];const B={};var E=I(p,k,j,!1,F,null,null,null);function F(t){for(let a in B)this[a]=B[a]}const R=function(){return E.exports}(),d={};d.setup=(t,a)=>{const e=h("id"),s=h("batchId"),i=b.read(e,s),m=c(()=>{var u,o;return((o=(u=i.data.value)==null?void 0:u.value)==null?void 0:o.usage)||C.LicenseBatchUsage.create()});return{id:e,batchId:s,licenseBatch:i,usage:m}};d.components=Object.assign({LicenseBatchUsageDisplay:M,AccountLicenseBatchQuantitiesChange:R},d.components);var U=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("section",[e("BaseVueQuery",{attrs:{query:t.licenseBatch},scopedSlots:t._u([{key:"success",fn:function(){return[e("div",{staticClass:"flex flex-col space-y-4"},[e("LicenseBatchUsageDisplay",{attrs:{value:t.usage}}),e("AccountLicenseBatchQuantitiesChange",{attrs:{"account-id":t.id,"account-batch-id":t.batchId}})],1)]},proxy:!0}])})],1)},w=[];const g={};var O=I(d,U,w,!1,z,null,null,null);function z(t){for(let a in g)this[a]=g[a]}const Z=function(){return O.exports}();export{Z as default};