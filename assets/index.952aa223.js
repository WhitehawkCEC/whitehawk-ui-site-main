import{F as D}from"./FormButton.e7392464.js";import{A as $}from"./AppVueGoodTable.d9511da1.js";import{c as _,a9 as h,n as v,b$ as T,aI as L,c$ as x,r as U,d5 as q}from"./index.c3ea02e1.js";import{L as S}from"./LicenseTypeMapQuantitiesInput.cbbd77b9.js";import"./arrow-down-on-square.bf61cdc5.js";import"./trash.78f57a7a.js";import"./index.22dc2cd4.js";import"./DynamicForm.0651f567.js";const d={};d.props={licenseBatches:{key:"licenseBatches",required:!0,type:Array}};d.setup=(e,a)=>{const n=e;return{rows:_(()=>n.licenseBatches.map(i=>{const{usage:t}=i,o=t.validity.start,l=h(o),u=t.validity.end,r=h(u);return{id:t.id,startDate:l,startDateDisplay:l.toLocaleString(),endDate:r,endDateDisplay:r.toLocaleString(),oneTimeQuantity:t.counts.oneTime.quantity,oneTimeAvailable:t.counts.oneTime.available,oneTimeUsed:t.counts.oneTime.used,annualQuantity:t.counts.annual.quantity,annualAvailable:t.counts.annual.available,annualUsed:t.counts.annual.used}})),columns:[{label:"Batch ID",field:"id"},{label:"Start Date",field:"startDate"},{label:"End Date",field:"endDate"},{label:"One Time Total",field:"oneTimeQuantity"},{label:"One Time Available",field:"oneTimeAvailable"},{label:"One Time Used",field:"oneTimeUsed"},{label:"Annual Total",field:"annualQuantity"},{label:"Annual Available",field:"annualAvailable"},{label:"Annual Used",field:"annualUsed"}]}};d.components=Object.assign({AppVueGoodTable:$},d.components);var w=function(){var e=this,a=e.$createElement,n=e._self._c||a;return n("AppVueGoodTable",{staticClass:"p-4",attrs:{columns:e.columns,rows:e.rows},scopedSlots:e._u([{key:"table-row",fn:function(s){var c=s.row,i=s.column,t=s.formattedRow;return[i.field==="startDate"?[n("time",{attrs:{datetime:c.startDate}},[e._v(" "+e._s(c.startDateDisplay)+" ")])]:i.field==="endDate"?[n("time",{attrs:{datetime:c.endDate}},[e._v(" "+e._s(c.endDateDisplay)+" ")])]:[e._v(" "+e._s(t[i.field])+" ")]]}}])})},O=[];const A={};var C=v(d,w,O,!1,k,null,null,null);function k(e){for(let a in A)this[a]=A[a]}const I=function(){return C.exports}(),p={};p.props={value:{key:"value",required:!0,type:Array}};p.setup=(e,a)=>{const n=e;function s(t){return t||{quantity:0,available:0,used:0}}function c(t){var o,l,u,r,f,y,b;return{id:((o=t.id)==null?void 0:o.value)||"",validity:{start:((u=(l=t.validity)==null?void 0:l.start)==null?void 0:u.value)||"",end:((f=(r=t.validity)==null?void 0:r.end)==null?void 0:f.value)||""},counts:{annual:s((y=t.counts)==null?void 0:y.annual),oneTime:s((b=t.counts)==null?void 0:b.oneTime)}}}return{converted:_(()=>n.value.map(t=>{var o;return{id:((o=t.id)==null?void 0:o.value)||"",usage:c(t.usage||{}),meta:{createdAt:"",updatedAt:""}}}))}};p.components=Object.assign({PortfolioOrdersTable:I},p.components);var Q=function(){var e=this,a=e.$createElement,n=e._self._c||a;return n("PortfolioOrdersTable",{attrs:{"license-batches":e.converted}})},R=[];const B={};var j=v(p,Q,R,!1,F,null,null,null);function F(e){for(let a in B)this[a]=B[a]}const M=function(){return j.exports}(),m={};m.setup=(e,a)=>{const n=T("id"),s=T("groupId"),c=L(),i=x.list(n),t=_(()=>{var r;return((r=i.data.value)==null?void 0:r.values)||[]}),o=U({annual:0,oneTime:0}),l=q.create(n,s);async function u(){await l.mutateAsync({quantities:o.value}),c.push(`/admin/companies/${n.value}/scorecards/portfolio/groups/${s.value}`)}return{accountLicenseBatches:i,licenseBatchUsages:t,quantities:o,create:u}};m.components=Object.assign({LicenseTypeMapQuantitiesInput:S,FormButton:D,AccountLicenseBatchUsageTable:M},m.components);var E=function(){var e=this,a=e.$createElement,n=e._self._c||a;return n("section",{staticClass:"space-y-6"},[n("BaseSimpleCard",{staticClass:"divide-y"},[n("BaseTypography",{staticClass:"p-4",attrs:{component:"h2",variant:"subtitle3"}},[e._v(" Add Group License Batch ")]),n("form",{staticClass:"divide-y",on:{submit:function(s){return s.preventDefault(),e.create.apply(null,arguments)}}},[n("LicenseTypeMapQuantitiesInput",{model:{value:e.quantities,callback:function(s){e.quantities=s},expression:"quantities"}}),n("FormButton",{attrs:{action:"create"}})],1)],1),n("BaseTablePageLayout",{scopedSlots:e._u([{key:"title",fn:function(){return[e._v("Available Account Licenses")]},proxy:!0},{key:"table",fn:function(){return[n("BaseVueQuery",{attrs:{query:e.accountLicenseBatches},scopedSlots:e._u([{key:"success",fn:function(){return[n("AccountLicenseBatchUsageTable",{attrs:{value:e.licenseBatchUsages}})]},proxy:!0}])})]},proxy:!0}])})],1)},G=[];const g={};var P=v(m,E,G,!1,V,null,null,null);function V(e){for(let a in g)this[a]=g[a]}const Z=function(){return P.exports}();export{Z as default};
