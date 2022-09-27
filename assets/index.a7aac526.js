import{d as u,aJ as g,aS as b,n as h,aq as $,bZ as f,c6 as x}from"./index.f1eeb782.js";import{S as A}from"./SubscriptionProductIdHeader.6409f20d.js";import{A as B,T as C}from"./AppTanStackTable.dbd51248.js";import{I as v}from"./IsoDateTimeDisplay.b1ab2436.js";import{c as P}from"./createOnChangeFn.2d31f7fd.js";import{u as k}from"./createSimpleTable.b52a2545.js";import{u as L}from"./useAccountSubscriptionProductLicenseBatches.09a51808.js";import"./BackButton.7574749d.js";import"./chevron-left.0808b01b.js";import"./ToolTip.46f8061f.js";import"./exclamation-triangle.54812a62.js";import"./DateRangeDisplay.2c376167.js";import"./index.089d9fd3.js";import"./index.246bd5de.js";import"./magnifying-glass.b7cbe8fe.js";import"./TransitionExpand.cc959990.js";import"./chevron-up.736f4142.js";import"./message_pb.fe472e3e.js";const l={};l.props={companyId:{key:"companyId",required:!0,type:String},subId:{key:"subId",required:!0,type:String},prodId:{key:"prodId",required:!0,type:String},value:{key:"value",required:!0,type:Array},hasPermissions:{key:"hasPermissions",required:!1,type:Boolean,default:!0}};l.setup=(t,r)=>{const s=t,i=u(()=>s.companyId),c=u(()=>s.subId),d=u(()=>s.prodId),m=u(()=>s.value),T=u(()=>s.hasPermissions?`/admin/companies/${i.value}/subscriptions/${c.value}/products/${d.value}`:`/client/companies/${i.value}/subscriptions/${c.value}/products/${d.value}`),I=g(),o=P(),S=u(()=>[o.accessor(a=>{var e;return(e=a.validity)==null?void 0:e.start},{id:"startDate",header:()=>"Start Date",cell:a=>b(v,{props:{value:a.getValue()}}),enableColumnFilter:!1}),o.accessor(a=>{var e;return(e=a.validity)==null?void 0:e.end},{id:"endDate",header:()=>"End Date",cell:a=>b(v,{props:{value:a.getValue()}}),enableColumnFilter:!1}),o.group({id:"oneTimeLicenses",header:()=>"One Time Licenses",columns:[o.accessor(a=>{var e,n;return(n=(e=a.counts)==null?void 0:e.oneTime)==null?void 0:n.quantity},{id:"oneTimeTotal",header:()=>"Total",enableColumnFilter:!1}),o.accessor(a=>{var e,n;return(n=(e=a.counts)==null?void 0:e.oneTime)==null?void 0:n.available},{id:"oneTimeAvailable",header:()=>"Available",enableColumnFilter:!1}),o.accessor(a=>{var e,n;return(n=(e=a.counts)==null?void 0:e.oneTime)==null?void 0:n.used},{id:"oneTimeUsed",header:()=>"Used",enableColumnFilter:!1})],enableGrouping:!0}),o.group({id:"annualLicenses",header:()=>"Annual Licenses",columns:[o.accessor(a=>{var e,n;return(n=(e=a.counts)==null?void 0:e.annual)==null?void 0:n.quantity},{id:"annualTotal",header:()=>"Total",enableColumnFilter:!1}),o.accessor(a=>{var e,n;return(n=(e=a.counts)==null?void 0:e.annual)==null?void 0:n.available},{id:"annualAvailable",header:()=>"Available",enableColumnFilter:!1}),o.accessor(a=>{var e,n;return(n=(e=a.counts)==null?void 0:e.annual)==null?void 0:n.used},{id:"annualUsed",header:()=>"Used",enableColumnFilter:!1})],enableGrouping:!0}),o.display({id:"actions",header:"Actions",cell:({row:a})=>b(C,{props:{actions:[{id:"edit",action(){var e;I.push(`${T.value}/license-batches/${(e=a.original.id)==null?void 0:e.value}`)}}].filter(e=>s.hasPermissions?e:e.id!=="edit")}})})]);return{instance:k(m,S)}};l.components=Object.assign({AppTanStackTable:B},l.components);var q=function(){var t=this,r=t.$createElement,s=t._self._c||r;return s("AppTanStackTable",{attrs:{table:t.instance}})},F=[];const _={};var U=h(l,q,F,!1,D,null,null,null);function D(t){for(let r in _)this[r]=_[r]}const R=function(){return U.exports}(),p={};p.setup=(t,r)=>{const s=f("id"),i=f("subscriptionId"),c=f("productId"),d=L.list(s,i,c),m=x.read(s,i,c);return{id:s,subscriptionId:i,productId:c,licenseBatchList:d,productRead:m}};p.components=Object.assign({SubscriptionProductIdHeader:A,PlusSvg:$,LicenseBatchUsageTable:R},p.components);var V=function(){var t=this,r=t.$createElement,s=t._self._c||r;return s("section",{staticClass:"space-y-6"},[s("BaseVueQuery",{attrs:{query:t.productRead},scopedSlots:t._u([{key:"success",fn:function(i){var c=i.data;return[s("SubscriptionProductIdHeader",{attrs:{id:t.id,"subscription-id":t.subscriptionId,value:c}})]}}])}),s("BaseTablePageLayout",{scopedSlots:t._u([{key:"title",fn:function(){return[t._v("License Batch Usage")]},proxy:!0},{key:"button",fn:function(){return[s("BaseButton",{staticClass:"space-x-2",attrs:{append:"",to:"new"}},[s("PlusSvg",{staticClass:"h-4 w-4"}),s("span",[t._v("License Batch")])],1)]},proxy:!0},{key:"table",fn:function(){return[s("BaseVueQuery",{attrs:{query:t.licenseBatchList},scopedSlots:t._u([{key:"success",fn:function(i){var c=i.data;return[s("LicenseBatchUsageTable",{attrs:{"company-id":t.id,"sub-id":t.subscriptionId,"prod-id":t.productId,value:c}})]}}])})]},proxy:!0}])})],1)},j=[];const y={};var E=h(p,V,j,!1,H,null,null,null);function H(t){for(let r in y)this[r]=y[r]}const oe=function(){return E.exports}();export{oe as default};
