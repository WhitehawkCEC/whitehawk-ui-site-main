import{P as _}from"./ParentPageWithTabbedMenuItems.1b6177a3.js";import{S as v}from"./SubscriptionProductIdHeader.6e353bb8.js";import{ca as u,ck as f,al as b,d as I,n as P}from"./index.6ef5ab54.js";import"./ToolTip.96a71265.js";import"./DateRangeDisplay.e06eac14.js";import"./IsoDateTimeDisplay.b4a95082.js";import"./index.98f43d6b.js";import"./index.3198a990.js";const r={};r.setup=(t,n)=>{const e=u("id"),o=u("subscriptionId"),s=u("productId"),d=f.read(e,o,s),p=b(),l=I(()=>{const c=`/admin/companies/${encodeURIComponent(e.value)}/subscriptions/${encodeURIComponent(o.value)}/products/${encodeURIComponent(s.value)}`,a=[{to:`${c}`,name:"Overview"},{to:`${c}/licensing`,name:"Licensing"},{to:`${c}/settings`,name:"Settings"}];return a.map(({to:m})=>m).includes(p.value.path)?a:[]});return{id:e,subscriptionId:o,productRead:d,links:l}};r.components=Object.assign({ParentPageWithTabbedMenuItems:_,SubscriptionProductIdHeader:v},r.components);var g=function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("ParentPageWithTabbedMenuItems",{attrs:{value:t.links}},[t.links.length>0?e("BaseVueQuery",{attrs:{query:t.productRead},scopedSlots:t._u([{key:"success",fn:function(o){var s=o.data;return[e("SubscriptionProductIdHeader",{attrs:{id:t.id,"subscription-id":t.subscriptionId,value:s}})]}}],null,!1,347079121)}):t._e()],1)},R=[];const i={};var h=P(r,g,R,!1,S,null,null,null);function S(t){for(let n in i)this[n]=i[n]}const H=function(){return h.exports}();export{H as default};