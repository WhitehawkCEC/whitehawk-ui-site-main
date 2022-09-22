import{c as v,ab as h,n as _,P as D,bG as A,I as x,cA as $,r as L,cE as C}from"./index.d7842beb.js";import{A as w}from"./AppVueGoodTable.b6ba50c4.js";import{L as S}from"./LicenseTypeMapQuantitiesInput.ff8fe112.js";import"./index.997ac16c.js";import"./DynamicForm.461a2b0a.js";const d={};d.props={licenseBatches:{key:"licenseBatches",required:!0,type:Array}};d.setup=(e,n)=>{const t=e;return{rows:v(()=>t.licenseBatches.map(l=>{const{usage:a}=l,i=a.validity.start,r=h(i),u=a.validity.end,c=h(u);return{id:a.id,startDate:r,startDateDisplay:r.toLocaleString(),endDate:c,endDateDisplay:c.toLocaleString(),oneTimeQuantity:a.counts.oneTime.quantity,oneTimeAvailable:a.counts.oneTime.available,oneTimeUsed:a.counts.oneTime.used,annualQuantity:a.counts.annual.quantity,annualAvailable:a.counts.annual.available,annualUsed:a.counts.annual.used}})),columns:[{label:"Batch ID",field:"id"},{label:"Start Date",field:"startDate"},{label:"End Date",field:"endDate"},{label:"One Time Total",field:"oneTimeQuantity"},{label:"One Time Available",field:"oneTimeAvailable"},{label:"One Time Used",field:"oneTimeUsed"},{label:"Annual Total",field:"annualQuantity"},{label:"Annual Available",field:"annualAvailable"},{label:"Annual Used",field:"annualUsed"}]}};d.components=Object.assign({AppVueGoodTable:w},d.components);var U=function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("AppVueGoodTable",{staticClass:"p-4",attrs:{columns:e.columns,rows:e.rows},scopedSlots:e._u([{key:"table-row",fn:function(s){var o=s.row,l=s.column,a=s.formattedRow;return[l.field==="startDate"?[t("time",{attrs:{datetime:o.startDate}},[e._v(" "+e._s(o.startDateDisplay)+" ")])]:l.field==="endDate"?[t("time",{attrs:{datetime:o.endDate}},[e._v(" "+e._s(o.endDateDisplay)+" ")])]:[e._v(" "+e._s(a[l.field])+" ")]]}}])})},q=[];const T={};var O=_(d,U,q,!1,I,null,null,null);function I(e){for(let n in T)this[n]=T[n]}const Q=function(){return O.exports}(),p={};p.props={value:{key:"value",required:!0,type:Array}};p.setup=(e,n)=>{const t=e;function s(a){return a||{quantity:0,available:0,used:0}}function o(a){var i,r,u,c,f,y,b;return{id:((i=a.id)==null?void 0:i.value)||"",validity:{start:((u=(r=a.validity)==null?void 0:r.start)==null?void 0:u.value)||"",end:((f=(c=a.validity)==null?void 0:c.end)==null?void 0:f.value)||""},counts:{annual:s((y=a.counts)==null?void 0:y.annual),oneTime:s((b=a.counts)==null?void 0:b.oneTime)}}}return{converted:v(()=>t.value.map(a=>{var i;return{id:((i=a.id)==null?void 0:i.value)||"",usage:o(a.usage||{}),meta:{createdAt:"",updatedAt:""}}}))}};p.components=Object.assign({PortfolioOrdersTable:Q},p.components);var R=function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("PortfolioOrdersTable",{attrs:{"license-batches":e.converted}})},j=[];const g={};var P=_(p,R,j,!1,k,null,null,null);function k(e){for(let n in g)this[n]=g[n]}const E=function(){return P.exports}(),m={};m.setup=(e,n)=>{const t=A("id"),s=A("groupId"),o=x(),l=$.list(t),a=v(()=>{var c;return((c=l.data.value)==null?void 0:c.values)||[]}),i=L({annual:0,oneTime:0}),r=C.create(t,s);async function u(){await r.mutateAsync({quantities:i.value}),o.push(`/admin/companies/${t.value}/scorecards/portfolio/groups/${s.value}`)}return{accountLicenseBatches:l,licenseBatchUsages:a,quantities:i,create:u}};m.components=Object.assign({LicenseTypeMapQuantitiesInput:S,PlusSvg:D,AccountLicenseBatchUsageTable:E},m.components);var G=function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("section",{staticClass:"space-y-6"},[t("BaseSimpleCard",{staticClass:"divide-y"},[t("h2",{staticClass:"p-4 font-display text-lg font-semibold"},[e._v(" Add Group License Batch ")]),t("form",{staticClass:"divide-y",on:{submit:function(s){return s.preventDefault(),e.create.apply(null,arguments)}}},[t("LicenseTypeMapQuantitiesInput",{model:{value:e.quantities,callback:function(s){e.quantities=s},expression:"quantities"}}),t("div",{staticClass:"p-4"},[t("div",{staticClass:"md:inline-flex"},[t("BaseButton",{staticClass:"w-full space-x-2 md:w-auto",attrs:{"display-type":"info"}},[t("PlusSvg",{staticClass:"h-auto w-4 xl:w-5"}),t("span",[e._v("Add License Batch")])],1)],1)])],1)]),t("BaseSimpleCard",{staticClass:"divide-y"},[t("h2",{staticClass:"p-4 font-display text-lg font-semibold"},[e._v(" Available Account Licenses ")]),t("div",[t("BaseVueQuery",{attrs:{query:e.accountLicenseBatches},scopedSlots:e._u([{key:"success",fn:function(){return[t("AccountLicenseBatchUsageTable",{attrs:{value:e.licenseBatchUsages}})]},proxy:!0}])})],1)])],1)},M=[];const B={};var F=_(m,G,M,!1,V,null,null,null);function V(e){for(let n in B)this[n]=B[n]}const W=function(){return F.exports}();export{W as default};
