import{ao as b,b$ as c,c as l,aI as y,n as B}from"./index.70bf5aa2.js";import{L as x}from"./LicenseBatchUsageTable.14022010.js";import{u as L}from"./useAccountSubscriptionProductLicenseBatches.742d294f.js";import"./AppTanStackTable.b48b88c8.js";import"./createOnChangeFn.956ee960.js";import"./chevron-up.736f4142.js";import"./magnifying-glass.b7cbe8fe.js";import"./TransitionExpand.6abd5354.js";import"./IsoDateTimeDisplay.ce797c95.js";import"./createSimpleTable.7b3f82c2.js";import"./message_pb.1504c2a9.js";const a={};a.setup=(t,s)=>{const e=c("id"),n=c("subscriptionId"),o=c("productId"),r=L.list(e,n,o),m=l(()=>r.data.value||[]),_=y(),f=l(()=>{var u;const i=new Map;for(const v of m.value){const p=((u=v.id)==null?void 0:u.value)||"",h=[{id:"edit",action(){_.push(`/admin/companies/${e.value}/subscriptions/${n.value}/products/${o.value}/license-batches/${p}`)}}];i.set(p,h)}return i});return{licenseBatchList:r,actions:f}};a.components=Object.assign({PlusSvg:b,LicenseBatchUsageTable:x},a.components);var g=function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("section",{staticClass:"space-y-6"},[e("BaseTablePageLayout",{scopedSlots:t._u([{key:"title",fn:function(){return[t._v("License Batch Usage")]},proxy:!0},{key:"button",fn:function(){return[e("BaseButton",{staticClass:"space-x-2",attrs:{append:"",to:"new"}},[e("PlusSvg",{staticClass:"h-4 w-4"}),e("span",[t._v("License Batch")])],1)]},proxy:!0},{key:"table",fn:function(){return[e("BaseVueQuery",{attrs:{query:t.licenseBatchList},scopedSlots:t._u([{key:"success",fn:function(n){var o=n.data;return[e("LicenseBatchUsageTable",{attrs:{value:o,"mapped-actions":t.actions}})]}}])})]},proxy:!0}])})],1)},k=[];const d={};var S=B(a,g,k,!1,$,null,null,null);function $(t){for(let s in d)this[s]=d[s]}const A=function(){return S.exports}();export{A as default};