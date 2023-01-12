import{P as l}from"./ParentPageWithTabbedMenuItems.a3ec851b.js";import{S as _}from"./SubscriptionProductIdHeader.b55d39b3.js";import{ca as c,ck as v,d as a,n as b}from"./index.b0bcf7b8.js";import"./ToolTip.2079f8a1.js";import"./DateRangeDisplay.664dd227.js";import"./IsoDateTimeDisplay.606f1e5a.js";import"./index.322fb768.js";import"./index.527d10a3.js";const r={};r.setup=(t,o)=>{const e=c("id"),n=c("subscriptionId"),s=c("productId"),d=v.read(e,n,s),p=a(()=>{const i=`/client/companies/${encodeURIComponent(e.value)}/subscriptions/${encodeURIComponent(n.value)}/products/${encodeURIComponent(s.value)}`;return[{to:`${i}`,name:"Overview"},{to:`${i}/settings`,name:"Settings"}]}),m=a(()=>`/client/companies/${e.value}/subscriptions/${n.value}`);return{id:e,subscriptionId:n,productRead:d,links:p,backLink:m}};r.components=Object.assign({ParentPageWithTabbedMenuItems:l,SubscriptionProductIdHeader:_},r.components);var f=function(){var t=this,o=t.$createElement,e=t._self._c||o;return e("ParentPageWithTabbedMenuItems",{attrs:{value:t.links}},[e("BaseVueQuery",{attrs:{query:t.productRead},scopedSlots:t._u([{key:"success",fn:function(n){var s=n.data;return[e("SubscriptionProductIdHeader",{attrs:{id:t.id,"subscription-id":t.subscriptionId,value:s,"back-link":t.backLink}})]}}])})],1)},I=[];const u={};var k=b(r,f,I,!1,P,null,null,null);function P(t){for(let o in u)this[o]=u[o]}const M=function(){return k.exports}();export{M as default};
