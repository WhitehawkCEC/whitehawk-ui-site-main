import{P as m}from"./ParentPageWithTabbedMenuItems.3b75d437.js";import{S as l}from"./SubscriptionGroupIdHeader.3483303b.js";import{c1 as s,d as _,n as v}from"./index.765bdb5f.js";import{u as I}from"./useAccountSubscriptionGroups.9a842cf0.js";const r={};r.setup=(e,n)=>{const t=s("id"),o=s("subscriptionId"),u=s("productId"),c=s("groupId"),p=I.read(t,o,c),d=_(()=>{const a=`/admin/companies/${encodeURIComponent(t.value)}/subscriptions/${encodeURIComponent(o.value)}/products/${encodeURIComponent(u.value)}/groups/${encodeURIComponent(c.value)}`;return[{to:`${a}`,name:"Overview"},{to:`${a}/license-batches`,name:"Licenses"},{to:`${a}/settings`,name:"Settings"}]});return{id:t,subscriptionId:o,groupRead:p,links:d}};r.components=Object.assign({ParentPageWithTabbedMenuItems:m,SubscriptionGroupIdHeader:l},r.components);var f=function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("ParentPageWithTabbedMenuItems",{attrs:{value:e.links}},[t("BaseVueQuery",{attrs:{query:e.groupRead},scopedSlots:e._u([{key:"success",fn:function(o){var u=o.data;return[t("SubscriptionGroupIdHeader",{attrs:{id:e.id,"subscription-id":e.subscriptionId,group:u}})]}}])})],1)},b=[];const i={};var g=v(r,f,b,!1,R,null,null,null);function R(e){for(let n in i)this[n]=i[n]}const x=function(){return g.exports}();export{x as default};
