import{P as b}from"./ParentPageWithTabbedMenuItems.fb775f7a.js";import{S}from"./SubscriptionIdHeader.7fa8137e.js";import{c8 as l,ce as I,ak as g,c as t,n as P}from"./index.789648de.js";import"./index.b5e5173f.js";const r={};r.setup=(e,n)=>{const s=l("id"),o=l("subscriptionId"),a=I.read(s,o),p=g(),u=t(()=>p.value.path),m=t(()=>u.value.includes("integrations")),v=t(()=>u.value.includes("products")),_=t(()=>u.value.includes("suppliers")),h=t(()=>u.value.includes("groups")),c=t(()=>!(m.value||v.value||h.value||_.value)),f=t(()=>{const i=`/client/companies/${encodeURIComponent(s.value)}/subscriptions/${encodeURIComponent(o.value)}`;return c.value?[{to:`${i}`,name:"Overview"},{to:`${i}/settings`,name:"Settings"}]:[]});return{id:s,subscriptionRead:a,shouldShow:c,links:f}};r.components=Object.assign({ParentPageWithTabbedMenuItems:b,SubscriptionIdHeader:S},r.components);var w=function(){var e=this,n=e.$createElement,s=e._self._c||n;return s("ParentPageWithTabbedMenuItems",{attrs:{value:e.links}},[e.shouldShow?s("BaseVueQuery",{attrs:{query:e.subscriptionRead},scopedSlots:e._u([{key:"success",fn:function(o){var a=o.data;return[s("SubscriptionIdHeader",{attrs:{id:e.id,subscription:a}})]}}],null,!1,2921797513)}):e._e()],1)},R=[];const d={};var x=P(r,w,R,!1,$,null,null,null);function $(e){for(let n in d)this[n]=d[n]}const j=function(){return x.exports}();export{j as default};
