import{P as b}from"./ParentPageWithTabbedMenuItems.b617f14b.js";import{S}from"./SubscriptionIdHeader.be38722a.js";import{c1 as l,c7 as I,al as g,c as t,n as P}from"./index.f355bfbd.js";import"./index.db9d3758.js";const a={};a.setup=(e,n)=>{const s=l("id"),o=l("subscriptionId"),r=I.read(s,o),p=g(),u=t(()=>p.value.path),m=t(()=>u.value.includes("integrations")),v=t(()=>u.value.includes("products")),_=t(()=>u.value.includes("suppliers")),h=t(()=>u.value.includes("groups")),c=t(()=>!(m.value||v.value||h.value||_.value)),f=t(()=>{const i=`/admin/companies/${encodeURIComponent(s.value)}/subscriptions/${encodeURIComponent(o.value)}`;return c.value?[{to:`${i}`,name:"Overview"},{to:`${i}/settings`,name:"Settings"}]:[]});return{id:s,subscriptionRead:r,shouldShow:c,links:f}};a.components=Object.assign({ParentPageWithTabbedMenuItems:b,SubscriptionIdHeader:S},a.components);var w=function(){var e=this,n=e.$createElement,s=e._self._c||n;return s("ParentPageWithTabbedMenuItems",{attrs:{value:e.links}},[e.shouldShow?s("BaseVueQuery",{attrs:{query:e.subscriptionRead},scopedSlots:e._u([{key:"success",fn:function(o){var r=o.data;return[s("SubscriptionIdHeader",{attrs:{id:e.id,subscription:r}})]}}],null,!1,2921797513)}):e._e()],1)},R=[];const d={};var x=P(a,w,R,!1,$,null,null,null);function $(e){for(let n in d)this[n]=d[n]}const j=function(){return x.exports}();export{j as default};
