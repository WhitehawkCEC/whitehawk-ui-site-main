import{P as p}from"./ParentPageWithTabbedMenuItems.42f006e9.js";import{S as m}from"./SubscriptionProductIdHeader.2d7e13b1.js";import{c1 as c,ca as l,d as _,n as v}from"./index.183f2327.js";import"./ToolTip.690c031a.js";import"./exclamation-triangle.54812a62.js";import"./DateRangeDisplay.9e29802f.js";import"./IsoDateTimeDisplay.766833c0.js";import"./index.a43e925a.js";import"./index.2ec67645.js";const s={};s.setup=(t,o)=>{const e=c("id"),n=c("subscriptionId"),r=c("productId"),u=l.read(e,n,r),d=_(()=>{const i=`/client/companies/${encodeURIComponent(e.value)}/subscriptions/${encodeURIComponent(n.value)}/products/${encodeURIComponent(r.value)}`;return[{to:`${i}`,name:"Overview"},{to:`${i}/settings`,name:"Settings"}]});return{id:e,subscriptionId:n,productRead:u,links:d}};s.components=Object.assign({ParentPageWithTabbedMenuItems:p,SubscriptionProductIdHeader:m},s.components);var f=function(){var t=this,o=t.$createElement,e=t._self._c||o;return e("ParentPageWithTabbedMenuItems",{attrs:{value:t.links}},[e("BaseVueQuery",{attrs:{query:t.productRead},scopedSlots:t._u([{key:"success",fn:function(n){var r=n.data;return[e("SubscriptionProductIdHeader",{attrs:{id:t.id,"subscription-id":t.subscriptionId,value:r}})]}}])})],1)},b=[];const a={};var I=v(s,f,b,!1,P,null,null,null);function P(t){for(let o in a)this[o]=a[o]}const M=function(){return I.exports}();export{M as default};
