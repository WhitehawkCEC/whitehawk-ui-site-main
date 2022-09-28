import{d as l,aS as v,n as g,aq as C,bZ as _,c6 as x,aJ as B}from"./index.a891a3b2.js";import{S as L}from"./SubscriptionProductIdHeader.f7d6c77e.js";import{A as $,T as k}from"./AppTanStackTable.478ca9cb.js";import{I as h}from"./IsoDateTimeDisplay.9c36635b.js";import{c as F}from"./createOnChangeFn.e36bddcc.js";import{u as I}from"./createSimpleTable.b0ddb0c6.js";import{u as P}from"./useAccountSubscriptionProductLicenseBatches.ed800c8f.js";import"./BackButton.684e21b9.js";import"./chevron-left.0808b01b.js";import"./ToolTip.74e60f74.js";import"./exclamation-triangle.54812a62.js";import"./DateRangeDisplay.cc15b5ae.js";import"./index.9c9206ef.js";import"./index.0f3c4f77.js";import"./magnifying-glass.b7cbe8fe.js";import"./TransitionExpand.dede66ce.js";import"./chevron-up.736f4142.js";import"./message_pb.6dc7ca7e.js";const p={};p.props={value:{key:"value",required:!0,type:Array},mappedActions:{key:"mappedActions",required:!1,type:Map}};p.setup=(s,r)=>{const n=s,c=l(()=>n.value),i=l(()=>n.mappedActions),o=F(),m=l(()=>[o.accessor(t=>{var e;return(e=t.validity)==null?void 0:e.start},{id:"startDate",header:()=>"Start Date",cell:t=>v(h,{props:{value:t.getValue()}}),enableColumnFilter:!1}),o.accessor(t=>{var e;return(e=t.validity)==null?void 0:e.end},{id:"endDate",header:()=>"End Date",cell:t=>v(h,{props:{value:t.getValue()}}),enableColumnFilter:!1}),o.group({id:"oneTimeLicenses",header:()=>"One Time Licenses",columns:[o.accessor(t=>{var e,a;return(a=(e=t.counts)==null?void 0:e.oneTime)==null?void 0:a.quantity},{id:"oneTimeTotal",header:()=>"Total",enableColumnFilter:!1}),o.accessor(t=>{var e,a;return(a=(e=t.counts)==null?void 0:e.oneTime)==null?void 0:a.available},{id:"oneTimeAvailable",header:()=>"Available",enableColumnFilter:!1}),o.accessor(t=>{var e,a;return(a=(e=t.counts)==null?void 0:e.oneTime)==null?void 0:a.used},{id:"oneTimeUsed",header:()=>"Used",enableColumnFilter:!1})],enableGrouping:!0}),o.group({id:"annualLicenses",header:()=>"Annual Licenses",columns:[o.accessor(t=>{var e,a;return(a=(e=t.counts)==null?void 0:e.annual)==null?void 0:a.quantity},{id:"annualTotal",header:()=>"Total",enableColumnFilter:!1}),o.accessor(t=>{var e,a;return(a=(e=t.counts)==null?void 0:e.annual)==null?void 0:a.available},{id:"annualAvailable",header:()=>"Available",enableColumnFilter:!1}),o.accessor(t=>{var e,a;return(a=(e=t.counts)==null?void 0:e.annual)==null?void 0:a.used},{id:"annualUsed",header:()=>"Used",enableColumnFilter:!1})],enableGrouping:!0}),o.display({id:"actions",header:"Actions",cell:({row:t})=>{var e,a,u;return v(k,{props:{actions:(e=t.original.id)!=null&&e.value?(u=i.value)==null?void 0:u.get((a=t.original.id)==null?void 0:a.value):[]}})}})]);return{instance:I(c,m)}};p.components=Object.assign({AppTanStackTable:$},p.components);var q=function(){var s=this,r=s.$createElement,n=s._self._c||r;return n("AppTanStackTable",{attrs:{table:s.instance}})},U=[];const y={};var D=g(p,q,U,!1,R,null,null,null);function R(s){for(let r in y)this[r]=y[r]}const V=function(){return D.exports}(),d={};d.setup=(s,r)=>{const n=_("id"),c=_("subscriptionId"),i=_("productId"),o=P.list(n,c,i),m=l(()=>o.data.value||[]),f=x.read(n,c,i),t=B(),e=l(()=>{var u;const a=new Map;for(const S of m.value){const b=((u=S.id)==null?void 0:u.value)||"",A=[{id:"edit",action(){t.push(`/admin/companies/${n.value}/subscriptions/${c.value}/products/${i.value}/license-batches/${b}`)}}];a.set(b,A)}return a});return{id:n,subscriptionId:c,licenseBatchList:o,productRead:f,actions:e}};d.components=Object.assign({SubscriptionProductIdHeader:L,PlusSvg:C,LicenseBatchUsageTable:V},d.components);var j=function(){var s=this,r=s.$createElement,n=s._self._c||r;return n("section",{staticClass:"space-y-6"},[n("BaseVueQuery",{attrs:{query:s.productRead},scopedSlots:s._u([{key:"success",fn:function(c){var i=c.data;return[n("SubscriptionProductIdHeader",{attrs:{id:s.id,"subscription-id":s.subscriptionId,value:i}})]}}])}),n("BaseTablePageLayout",{scopedSlots:s._u([{key:"title",fn:function(){return[s._v("License Batch Usage")]},proxy:!0},{key:"button",fn:function(){return[n("BaseButton",{staticClass:"space-x-2",attrs:{append:"",to:"new"}},[n("PlusSvg",{staticClass:"h-4 w-4"}),n("span",[s._v("License Batch")])],1)]},proxy:!0},{key:"table",fn:function(){return[n("BaseVueQuery",{attrs:{query:s.licenseBatchList},scopedSlots:s._u([{key:"success",fn:function(c){var i=c.data;return[n("LicenseBatchUsageTable",{attrs:{value:i,"mapped-actions":s.actions}})]}}])})]},proxy:!0}])})],1)},E=[];const T={};var H=g(d,j,E,!1,M,null,null,null);function M(s){for(let r in T)this[r]=T[r]}const re=function(){return H.exports}();export{re as default};
