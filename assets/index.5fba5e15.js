import{L as Q}from"./LicenseTypeMapQuantitiesInput.12a12d34.js";import{c as u,d7 as $,d4 as C,r as I,c_ as x,aA as T,d3 as k,n as q,b$ as y}from"./index.5601926e.js";import{u as A,L as M}from"./LicenseBatchUsageDisplay.5eb32e08.js";import"./index.141b9e9e.js";import"./DynamicForm.dfd7d32d.js";import"./calendar.aad8910e.js";import"./identification.8410fcc9.js";import"./AggregateLicenseDisplay.68a293f5.js";import"./DateRangeDisplay.7695f565.js";import"./IsoDateTimeDisplay.d1bb4f43.js";const d={};d.props={accountId:{key:"accountId",required:!0,type:String},groupId:{key:"groupId",required:!0,type:String},groupBatchId:{key:"groupBatchId",required:!0,type:String}};d.setup=(t,a)=>{const e=t,s=u(()=>e.accountId),r=u(()=>e.groupId),o=u(()=>e.groupBatchId),_=$.create(s,r,o),i=C.read(s,r,o),p=u(()=>{var n,c;return(c=(n=i.data.value)==null?void 0:n.value)==null?void 0:c.accountBatchId}),g=u(()=>{var n,c,l;return(l=(c=(n=i.data.value)==null?void 0:n.value)==null?void 0:c.usage)==null?void 0:l.counts}),v=I(x.LicenseTypeMapQuantities.create()),h=I(!1);T(()=>g.value,n=>{var c,l;!n||h.value||(v.value={annual:((c=n.annual)==null?void 0:c.quantity)||0,oneTime:((l=n.oneTime)==null?void 0:l.quantity)||0},h.value=!0)},{immediate:!0});const f=A(g,v),L=u(()=>({accountBatchId:p.value||k.create(),quantitiesDiff:f.value})),S=u(()=>p.value&&(f.value.annual!==0||f.value.oneTime!==0));async function D(){await _.mutateAsync(L.value)}return{currentState:i,quantitiesDesired:v,canSubmit:S,submit:D}};d.components=Object.assign({LicenseTypeMapQuantitiesInput:Q},d.components);var j=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("BaseSimpleCard",{staticClass:"divide-y"},[e("BaseTypography",{staticClass:"p-4",attrs:{component:"h2",variant:"subtitle3"}},[t._v(" Edit Quantities ")]),e("form",{staticClass:"divide-y",on:{submit:function(s){return s.preventDefault(),t.submit.apply(null,arguments)}}},[e("BaseVueQuery",{attrs:{query:t.currentState},scopedSlots:t._u([{key:"success",fn:function(){return[e("LicenseTypeMapQuantitiesInput",{model:{value:t.quantitiesDesired,callback:function(s){t.quantitiesDesired=s},expression:"quantitiesDesired"}})]},proxy:!0}])}),e("div",{staticClass:"p-4"},[e("div",{staticClass:"md:inline-flex"},[e("BaseButton",{staticClass:"w-full md:w-auto",attrs:{"display-type":"info",disabled:!t.canSubmit}},[t._v(" Change ")])],1)])],1)],1)},G=[];const B={};var U=q(d,j,G,!1,E,null,null,null);function E(t){for(let a in B)this[a]=B[a]}const F=function(){return U.exports}(),m={};m.setup=(t,a)=>{const e=y("id"),s=y("groupId"),r=y("batchId"),o=C.read(e,s,r),_=u(()=>{var i,p;return((p=(i=o.data.value)==null?void 0:i.value)==null?void 0:p.usage)||x.LicenseBatchUsage.create()});return{id:e,groupId:s,batchId:r,licenseBatch:o,usage:_}};m.components=Object.assign({LicenseBatchUsageDisplay:M,AccountGroupLicenseBatchQuantitiesChange:F},m.components);var R=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("section",[e("BaseVueQuery",{attrs:{query:t.licenseBatch},scopedSlots:t._u([{key:"success",fn:function(){return[e("div",{staticClass:"flex flex-col space-y-4"},[e("LicenseBatchUsageDisplay",{attrs:{value:t.usage}}),e("AccountGroupLicenseBatchQuantitiesChange",{attrs:{"account-id":t.id,"group-id":t.groupId,"group-batch-id":t.batchId}})],1)]},proxy:!0}])})],1)},w=[];const b={};var O=q(m,R,w,!1,z,null,null,null);function z(t){for(let a in b)this[a]=b[a]}const tt=function(){return O.exports}();export{tt as default};