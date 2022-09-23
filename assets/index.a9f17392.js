import{c as l,I as $,d as m,n as y,P as S,bG as v}from"./index.915cb62f.js";import{A as x,T as A}from"./AppTanStackTable.e831bfc8.js";import{I as _}from"./IsoDateTimeDisplay.06497d39.js";import{c as B}from"./createOnChangeFn.aad9fb4d.js";import{u as C}from"./createSimpleTable.1eb8476f.js";import{u as L}from"./useAccountSubscriptionProductLicenseBatches.be75926d.js";import"./magnifying-glass.b7cbe8fe.js";import"./chevron-left.0808b01b.js";import"./TransitionExpand.22877ed3.js";import"./chevron-up.736f4142.js";import"./message_pb.b6b3a09a.js";const u={};u.props={companyId:{key:"companyId",required:!0,type:String},subId:{key:"subId",required:!0,type:String},prodId:{key:"prodId",required:!0,type:String},value:{key:"value",required:!0,type:Array},hasPermissions:{key:"hasPermissions",required:!1,type:Boolean,default:!0}};u.setup=(s,r)=>{const n=s,i=l(()=>n.companyId),c=l(()=>n.subId),d=l(()=>n.prodId),h=l(()=>n.value),T=l(()=>n.hasPermissions?`/admin/companies/${i.value}/subscriptions/${c.value}/products/${d.value}`:`/client/companies/${i.value}/subscriptions/${c.value}/products/${d.value}`),I=$(),o=B(),g=l(()=>[o.accessor(t=>{var e;return(e=t.validity)==null?void 0:e.start},{id:"startDate",header:()=>"Start Date",cell:t=>m(_,{props:{value:t.getValue()}}),enableColumnFilter:!1}),o.accessor(t=>{var e;return(e=t.validity)==null?void 0:e.end},{id:"endDate",header:()=>"End Date",cell:t=>m(_,{props:{value:t.getValue()}}),enableColumnFilter:!1}),o.group({id:"oneTimeLicenses",header:()=>"One Time Licenses",columns:[o.accessor(t=>{var e,a;return(a=(e=t.counts)==null?void 0:e.oneTime)==null?void 0:a.quantity},{id:"oneTimeTotal",header:()=>"Total",enableColumnFilter:!1}),o.accessor(t=>{var e,a;return(a=(e=t.counts)==null?void 0:e.oneTime)==null?void 0:a.available},{id:"oneTimeAvailable",header:()=>"Available",enableColumnFilter:!1}),o.accessor(t=>{var e,a;return(a=(e=t.counts)==null?void 0:e.oneTime)==null?void 0:a.used},{id:"oneTimeUsed",header:()=>"Used",enableColumnFilter:!1})],enableGrouping:!0}),o.group({id:"annualLicenses",header:()=>"Annual Licenses",columns:[o.accessor(t=>{var e,a;return(a=(e=t.counts)==null?void 0:e.annual)==null?void 0:a.quantity},{id:"annualTotal",header:()=>"Total",enableColumnFilter:!1}),o.accessor(t=>{var e,a;return(a=(e=t.counts)==null?void 0:e.annual)==null?void 0:a.available},{id:"annualAvailable",header:()=>"Available",enableColumnFilter:!1}),o.accessor(t=>{var e,a;return(a=(e=t.counts)==null?void 0:e.annual)==null?void 0:a.used},{id:"annualUsed",header:()=>"Used",enableColumnFilter:!1})],enableGrouping:!0}),o.display({id:"actions",header:"Actions",cell:({row:t})=>m(A,{props:{actions:[{id:"edit",action(){var e;I.push(`${T.value}/license-batches/${(e=t.original.id)==null?void 0:e.value}`)}}].filter(e=>n.hasPermissions?e:e.id!=="edit")}})})]);return{instance:C(h,g.value)}};u.components=Object.assign({AppTanStackTable:x},u.components);var k=function(){var s=this,r=s.$createElement,n=s._self._c||r;return n("AppTanStackTable",{attrs:{table:s.instance}})},P=[];const f={};var F=y(u,k,P,!1,q,null,null,null);function q(s){for(let r in f)this[r]=f[r]}const U=function(){return F.exports}(),p={};p.setup=(s,r)=>{const n=v("id"),i=v("subscriptionId"),c=v("productId"),d=L.list(n,i,c);return{id:n,subscriptionId:i,productId:c,licenseBatchList:d}};p.components=Object.assign({PlusSvg:S,LicenseBatchUsageTable:U},p.components);var D=function(){var s=this,r=s.$createElement,n=s._self._c||r;return n("BaseTablePageLayout",{scopedSlots:s._u([{key:"title",fn:function(){return[s._v("License Batch Usage")]},proxy:!0},{key:"button",fn:function(){return[n("BaseButton",{staticClass:"space-x-2",attrs:{append:"",to:"new"}},[n("PlusSvg",{staticClass:"h-4 w-4"}),n("span",[s._v("License Batch")])],1)]},proxy:!0},{key:"table",fn:function(){return[n("BaseVueQuery",{attrs:{query:s.licenseBatchList},scopedSlots:s._u([{key:"success",fn:function(i){var c=i.data;return[n("LicenseBatchUsageTable",{attrs:{"company-id":s.id,"sub-id":s.subscriptionId,"prod-id":s.productId,value:c}})]}}])})]},proxy:!0}])})},j=[];const b={};var E=y(p,D,j,!1,R,null,null,null);function R(s){for(let r in b)this[r]=b[r]}const X=function(){return E.exports}();export{X as default};
