import{P as _}from"./ParentPageWithTabbedMenuItems.2b5ac09f.js";import{S as v}from"./SubscriptionProductIdHeader.1056c3f6.js";import{c5 as c,ce as f,ak as b,c as i,n as I}from"./index.575adb5e.js";import"./ToolTip.652e85ac.js";import"./DateRangeDisplay.472c1c50.js";import"./IsoDateTimeDisplay.dfee8792.js";import"./index.33dd9edb.js";import"./index.c4ca443c.js";const r={};r.setup=(t,n)=>{const e=c("id"),o=c("subscriptionId"),s=c("productId"),p=f.read(e,o,s),l=b(),a=i(()=>!l.value.path.includes("groups")),m=i(()=>{const u=`/admin/companies/${encodeURIComponent(e.value)}/subscriptions/${encodeURIComponent(o.value)}/products/${encodeURIComponent(s.value)}`;return a.value?[{to:`${u}`,name:"Overview"},{to:`${u}/licensing`,name:"Licensing"},{to:`${u}/settings`,name:"Settings"}]:[]});return{id:e,subscriptionId:o,productRead:p,shouldShow:a,links:m}};r.components=Object.assign({ParentPageWithTabbedMenuItems:_,SubscriptionProductIdHeader:v},r.components);var h=function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("ParentPageWithTabbedMenuItems",{attrs:{value:t.links}},[t.shouldShow?e("BaseVueQuery",{attrs:{query:t.productRead},scopedSlots:t._u([{key:"success",fn:function(o){var s=o.data;return[e("SubscriptionProductIdHeader",{attrs:{id:t.id,"subscription-id":t.subscriptionId,value:s}})]}}],null,!1,347079121)}):t._e()],1)},P=[];const d={};var S=I(r,h,P,!1,g,null,null,null);function g(t){for(let n in d)this[n]=d[n]}const U=function(){return S.exports}();export{U as default};