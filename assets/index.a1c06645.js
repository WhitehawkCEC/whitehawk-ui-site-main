import{ao as g,c1 as S,c7 as w,ca as I,c as i,cb as B,c9 as R,aI as C,n as D}from"./index.774779f3.js";import{S as A,P as L,a as O}from"./SubscriptionProductsTable.f0dcc440.js";import"./DateRangeDisplay.1e1ff5ef.js";import"./IsoDateTimeDisplay.3263829e.js";import"./AppVDateRangePicker.58f0003d.js";import"./index.e5b67897.js";import"./index.c7acacec.js";import"./index.e8e73086.js";import"./index.b40d7921.js";import"./index.87e44ac4.js";import"./AppTanStackTable.2809ab19.js";import"./createOnChangeFn.ff3c4275.js";import"./chevron-up.736f4142.js";import"./magnifying-glass.b7cbe8fe.js";import"./TransitionExpand.3d593e31.js";import"./createSimpleTable.8f2aff80.js";const c={};c.setup=(t,r)=>{const s=S("id"),e=S("subscriptionId"),o=w.read(s,e),d=I.list(s,e),l=i(()=>d.data.value||[]),m=B(),h=i(()=>m.pinnedProductIds),v=i(()=>{var n;return((n=o.data.value)==null?void 0:n.features)||R.SubscriptionFeatures.create()}),f=C(),k=i(()=>{var _,b;const n=new Map;for(const a of l.value){const u=((b=(_=a.product)==null?void 0:_.id)==null?void 0:b.value)||"",$=[{id:"view",action(){f.push(`/admin/companies/${s.value}/subscriptions/${e.value}/products/${u}`)}},{id:"edit",action(){f.push(`/admin/companies/${s.value}/subscriptions/${e.value}/products/${u}/settings`)}},{id:"pinProduct",action(){m.setPinned(u)}}].filter(p=>{var y,P;return((P=(y=a.product)==null?void 0:y.id)==null?void 0:P.value)&&h.value.includes(a.product.id.value)||v.value.hasGroups||v.value.hasSuppliers?p.id!=="pinProduct":p});n.set(u,$)}return n});return{id:s,subscriptionId:e,subscriptionRead:o,productsList:d,products:l,actions:k}};c.components=Object.assign({SubscriptionOverviewDisplay:A,PinnedProductsDisplay:L,PlusSvg:g,SubscriptionProductsTable:O},c.components);var T=function(){var t=this,r=t.$createElement,s=t._self._c||r;return s("section",{staticClass:"space-y-6"},[s("BaseVueQuery",{attrs:{query:t.subscriptionRead},scopedSlots:t._u([{key:"success",fn:function(e){var o=e.data.status;return[o?s("SubscriptionOverviewDisplay",{attrs:{status:o}}):t._e()]}}])}),s("PinnedProductsDisplay",{attrs:{"company-id":t.id,"sub-id":t.subscriptionId,products:t.products}}),s("BaseTablePageLayout",{scopedSlots:t._u([{key:"title",fn:function(){return[t._v("Subscription Products")]},proxy:!0},{key:"button",fn:function(){return[s("BaseButton",{staticClass:"space-x-1",attrs:{to:"./products/new",append:""}},[s("PlusSvg",{staticClass:"w-5"}),s("span",[t._v("Product")])],1)]},proxy:!0},{key:"table",fn:function(){return[s("BaseVueQuery",{attrs:{query:t.productsList},scopedSlots:t._u([{key:"success",fn:function(e){var o=e.data;return[s("SubscriptionProductsTable",{attrs:{value:o,"mapped-actions":t.actions}})]}}])})]},proxy:!0}])})],1)},j=[];const x={};var q=D(c,T,j,!1,F,null,null,null);function F(t){for(let r in x)this[r]=x[r]}const et=function(){return q.exports}();export{et as default};