import{P as m}from"./ParentPageWithTabbedMenuItems.4d37b3bc.js";import{S as _}from"./SubscriptionGroupIdHeader.9d58f580.js";import{ca as s,d as l,n as v}from"./index.87a2880c.js";import{u as I}from"./useAccountSubscriptionGroups.8dcd3b57.js";const r={};r.setup=(e,o)=>{const t=s("id"),n=s("subscriptionId"),u=s("productId"),a=s("groupId"),p=I.read(t,n,a),d=l(()=>{const c=`/admin/companies/${encodeURIComponent(t.value)}/subscriptions/${encodeURIComponent(n.value)}/products/${encodeURIComponent(u.value)}/groups/${encodeURIComponent(a.value)}`;return[{to:`${c}`,name:"Overview"},{to:`${c}/settings`,name:"Settings"}]});return{id:t,subscriptionId:n,groupRead:p,links:d}};r.components=Object.assign({ParentPageWithTabbedMenuItems:m,SubscriptionGroupIdHeader:_},r.components);var f=function(){var e=this,o=e.$createElement,t=e._self._c||o;return t("ParentPageWithTabbedMenuItems",{attrs:{value:e.links}},[t("BaseVueQuery",{attrs:{query:e.groupRead},scopedSlots:e._u([{key:"success",fn:function(n){var u=n.data;return[t("SubscriptionGroupIdHeader",{attrs:{id:e.id,"subscription-id":e.subscriptionId,group:u}})]}}])})],1)},b=[];const i={};var g=v(r,f,b,!1,R,null,null,null);function R(e){for(let o in i)this[o]=i[o]}const x=function(){return g.exports}();export{x as default};