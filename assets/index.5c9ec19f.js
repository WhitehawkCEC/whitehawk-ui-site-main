import{aq as Q,bZ as h,c3 as x,c6 as T,d as l,c7 as w,cF as R,c5 as q,aJ as A,n as F}from"./index.97180dc3.js";import{S as j,a as G}from"./SubscriptionProductsTable.33590cbb.js";import{S as H}from"./SubscriptionIdHeader.f966cf51.js";import"./DateRangeDisplay.01ee2014.js";import"./IsoDateTimeDisplay.726e9785.js";import"./AppTanStackTable.676427ea.js";import"./createOnChangeFn.c20047b6.js";import"./chevron-up.736f4142.js";import"./magnifying-glass.b7cbe8fe.js";import"./chevron-left.0808b01b.js";import"./TransitionExpand.816d6271.js";import"./createSimpleTable.1f6afcd3.js";import"./BackButton.7952e411.js";import"./index.e621cb9e.js";const m={};m.setup=(s,d)=>{const t=h("id"),r=h("subscriptionId"),a=x.read(t,r),_=T.list(t,r),y=l(()=>_.data.value||[]),P=w(),S=l(()=>P.pinnedProductIds),$=l(()=>{const i=[];return y.value.filter(c=>{var e,v;return((v=(e=c.product)==null?void 0:e.id)==null?void 0:v.value)&&S.value.includes(c.product.id.value)?i.push(c):R.SubscriptionProductWithConfigType.create()}),i.sort((c,e)=>c.product&&e.product?c.product.name.localeCompare(e.product.name):-1)||[]}),k=x.read(t,r),g=l(()=>{var i;return((i=k.data.value)==null?void 0:i.features)||q.SubscriptionFeatures.create()}),f=A(),I=l(()=>{var b,c;const i=new Map;for(const e of y.value){const v=((c=(b=e.product)==null?void 0:b.id)==null?void 0:c.value)||"",B=[{id:"view",action(){var o,u,n,p;g.value.hasGroups?f.push(`/admin/companies/${t.value}/subscriptions/${r.value}/products/${(u=(o=e.product)==null?void 0:o.id)==null?void 0:u.value}/groups`):f.push(`/admin/companies/${t.value}/subscriptions/${r.value}/products/${(p=(n=e.product)==null?void 0:n.id)==null?void 0:p.value}`)}},{id:"edit",action(){var o,u;f.push(`/admin/companies/${t.value}/subscriptions/${r.value}/products/${(u=(o=e.product)==null?void 0:o.id)==null?void 0:u.value}/settings`)}},{id:"pinProduct",action(){var o,u,n,p;(u=(o=e.product)==null?void 0:o.id)!=null&&u.value&&P.setPinned((p=(n=e.product)==null?void 0:n.id)==null?void 0:p.value)}}].filter(o=>{var u,n;return((n=(u=e.product)==null?void 0:u.id)==null?void 0:n.value)&&S.value.includes(e.product.id.value)||g.value.hasGroups?o.id!=="pinProduct":o});i.set(v,B)}return i});return{id:t,subscriptionId:r,subscriptionQuery:a,productsQuery:_,pinnedProducts:$,actions:I}};m.components=Object.assign({SubscriptionIdHeader:H,SubscriptionProductCard:j,PlusSvg:Q,SubscriptionProductsTable:G},m.components);var M=function(){var s=this,d=s.$createElement,t=s._self._c||d;return t("section",{staticClass:"space-y-6"},[t("BaseVueQuery",{attrs:{query:s.subscriptionQuery},scopedSlots:s._u([{key:"success",fn:function(r){var a=r.data;return[t("SubscriptionIdHeader",{attrs:{id:s.id,subscription:a}})]}}])}),s.pinnedProducts.length>0?t("div",{staticClass:"space-y-2"},[t("BaseTypography",{staticClass:"uppercase text-gray-600",attrs:{variant:"overline"}},[s._v(" Pinned Products ")]),t("ul",{staticClass:"grid grid-cols-1 gap-4 sm:gap-6 lg:grid-cols-2 2xl:grid-cols-3"},s._l(s.pinnedProducts,function(r,a){return t("li",{key:a},[t("SubscriptionProductCard",{attrs:{id:s.id,"subscription-id":s.subscriptionId,product:r}})],1)}),0)],1):s._e(),t("BaseTablePageLayout",{scopedSlots:s._u([{key:"title",fn:function(){return[s._v("Subscription Products")]},proxy:!0},{key:"button",fn:function(){return[t("BaseButton",{staticClass:"space-x-1",attrs:{to:"./new",append:""}},[t("PlusSvg",{staticClass:"w-5"}),t("span",[s._v("Product")])],1)]},proxy:!0},{key:"table",fn:function(){return[t("BaseVueQuery",{attrs:{query:s.productsQuery},scopedSlots:s._u([{key:"success",fn:function(r){var a=r.data;return[t("SubscriptionProductsTable",{attrs:{value:a,"mapped-actions":s.actions}})]}}])})]},proxy:!0}])})],1)},V=[];const C={};var z=F(m,M,V,!1,E,null,null,null);function E(s){for(let d in C)this[d]=C[d]}const ot=function(){return z.exports}();export{ot as default};
