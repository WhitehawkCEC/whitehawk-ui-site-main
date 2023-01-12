import{an as k,ca as _,cf as $,ck as g,d as u,cl as h,ch as w,n as B}from"./index.b0bcf7b8.js";import{S as D,P as I,a as C}from"./SubscriptionProductsTable.6a33fded.js";import"./DateRangeDisplay.664dd227.js";import"./IsoDateTimeDisplay.606f1e5a.js";import"./AppVDateRangePicker.9a2690d8.js";import"./index.527d10a3.js";import"./index.322fb768.js";import"./index.120b2583.js";import"./index.4e845b66.js";import"./index.87e44ac4.js";import"./AppTanStackTable.cd9aeee9.js";import"./createOnChangeFn.f8dcdac4.js";import"./chevron-up.736f4142.js";import"./magnifying-glass.b7cbe8fe.js";import"./arrow-down-tray.793d581e.js";import"./createSimpleTable.5fe7daf8.js";const a={};a.setup=(t,r)=>{const s=_("id"),e=_("subscriptionId"),o=$.read(s,e),c=g.list(s,e),p=u(()=>c.data.value||[]),d=h(),y=u(()=>d.pinnedProductIds),l=u(()=>{var n;return((n=o.data.value)==null?void 0:n.features)||w.SubscriptionFeatures.create()}),S=u(()=>{var m,v;const n=new Map;for(const P of p.value){const i=((v=(m=P.product)==null?void 0:m.id)==null?void 0:v.value)||"",x=[{id:"view",to:`/admin/companies/${s.value}/subscriptions/${e.value}/products/${i}`},{id:"edit",to:`/admin/companies/${s.value}/subscriptions/${e.value}/products/${i}/settings`},{id:"pinProduct",action(){d.setPinned(i)},isDisabled:u(()=>y.value.includes(i))}].filter(f=>l.value.hasGroups||l.value.hasSuppliers?f.id==="edit":f);n.set(i,x)}return n});return{id:s,subscriptionId:e,subscriptionRead:o,productsList:c,products:p,actions:S}};a.components=Object.assign({SubscriptionOverviewDisplay:D,PinnedProductsDisplay:I,PlusSvg:k,SubscriptionProductsTable:C},a.components);var R=function(){var t=this,r=t.$createElement,s=t._self._c||r;return s("section",{staticClass:"space-y-6"},[s("BaseVueQuery",{attrs:{query:t.subscriptionRead},scopedSlots:t._u([{key:"success",fn:function(e){var o=e.data.status;return[o?s("SubscriptionOverviewDisplay",{attrs:{status:o}}):t._e()]}}])}),s("PinnedProductsDisplay",{attrs:{"company-id":t.id,"sub-id":t.subscriptionId,products:t.products}}),s("BaseTablePageLayout",{scopedSlots:t._u([{key:"title",fn:function(){return[t._v("Subscription Products")]},proxy:!0},{key:"button",fn:function(){return[s("BaseButton",{staticClass:"space-x-1",attrs:{to:"products/new",append:""}},[s("PlusSvg",{staticClass:"w-5"}),s("span",[t._v("Product")])],1)]},proxy:!0},{key:"table",fn:function(){return[s("BaseVueQuery",{attrs:{query:t.productsList},scopedSlots:t._u([{key:"success",fn:function(e){var o=e.data;return[s("SubscriptionProductsTable",{attrs:{value:o,"mapped-actions":t.actions}})]}}])})]},proxy:!0}])})],1)},A=[];const b={};var L=B(a,R,A,!1,O,null,null,null);function O(t){for(let r in b)this[r]=b[r]}const Y=function(){return L.exports}();export{Y as default};
