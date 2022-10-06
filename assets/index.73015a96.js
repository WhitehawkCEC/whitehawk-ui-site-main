import{aq as b,c1 as p,d as l,aJ as y,n as x}from"./index.765bdb5f.js";import{A as S}from"./AccountSubscriptionGroupsTable.5426ac5e.js";import{u as g}from"./useAccountSubscriptionGroups.9a842cf0.js";import"./AppTanStackTable.f9746f35.js";import"./createOnChangeFn.c71a9a98.js";import"./chevron-up.736f4142.js";import"./magnifying-glass.b7cbe8fe.js";import"./TransitionExpand.6812981e.js";import"./createSimpleTable.aee8a25f.js";const r={};r.setup=(t,o)=>{const s=p("id"),n=p("subscriptionId"),e=g.list(s,n),_=l(()=>e.data.value||[]),a=y(),d=l(()=>{var i;const c=new Map;for(const v of _.value){const u=((i=v.id)==null?void 0:i.value)||"",f=[{id:"view",action(){a.push(`/admin/companies/${s.value}/subscriptions/${n.value}/groups/${u}`)}},{id:"edit",action(){a.push(`/admin/companies/${s.value}/subscriptions/${n.value}/groups/${u}/settings`)}}];c.set(u,f)}return c});return{list:e,actions:d}};r.components=Object.assign({PlusSvg:b,AccountSubscriptionGroupsTable:S},r.components);var $=function(){var t=this,o=t.$createElement,s=t._self._c||o;return s("BaseTablePageLayout",{scopedSlots:t._u([{key:"title",fn:function(){return[t._v("Subscription Groups")]},proxy:!0},{key:"button",fn:function(){return[s("BaseButton",{staticClass:"space-x-1",attrs:{to:"./new",append:""}},[s("PlusSvg",{staticClass:"w-5"}),s("span",[t._v("Group")])],1)]},proxy:!0},{key:"table",fn:function(){return[s("BaseVueQuery",{attrs:{query:t.list},scopedSlots:t._u([{key:"success",fn:function(n){var e=n.data;return[s("AccountSubscriptionGroupsTable",{attrs:{value:e,"mapped-actions":t.actions}})]}}])})]},proxy:!0}])})},k=[];const m={};var h=x(r,$,k,!1,G,null,null,null);function G(t){for(let o in m)this[o]=m[o]}const I=function(){return h.exports}();export{I as default};
