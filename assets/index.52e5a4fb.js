import{an as f,c9 as i,d as p,n as b}from"./index.e627960d.js";import{A as y}from"./AccountSubscriptionGroupsTable.bb622445.js";import{u as x}from"./useAccountSubscriptionGroups.403c0dcc.js";import"./AppTanStackTable.9bda351a.js";import"./createOnChangeFn.7e56f0c4.js";import"./chevron-up.736f4142.js";import"./magnifying-glass.b7cbe8fe.js";import"./createSimpleTable.7ef16907.js";const r={};r.setup=(t,o)=>{const s=i("id"),n=i("subscriptionId"),e=x.list(s,n),m=p(()=>e.data.value||[]),_=p(()=>{var c;const a=new Map;for(const d of m.value){const u=((c=d.id)==null?void 0:c.value)||"",v=[{id:"view",to:`/admin/companies/${s.value}/subscriptions/${n.value}/groups/${u}`},{id:"edit",to:`/admin/companies/${s.value}/subscriptions/${n.value}/groups/${u}/settings`}];a.set(u,v)}return a});return{list:e,actions:_}};r.components=Object.assign({PlusSvg:f,AccountSubscriptionGroupsTable:y},r.components);var S=function(){var t=this,o=t.$createElement,s=t._self._c||o;return s("BaseTablePageLayout",{scopedSlots:t._u([{key:"title",fn:function(){return[t._v("Subscription Groups")]},proxy:!0},{key:"button",fn:function(){return[s("BaseButton",{staticClass:"space-x-1",attrs:{to:"./new",append:""}},[s("PlusSvg",{staticClass:"w-5"}),s("span",[t._v("Group")])],1)]},proxy:!0},{key:"table",fn:function(){return[s("BaseVueQuery",{attrs:{query:t.list},scopedSlots:t._u([{key:"success",fn:function(n){var e=n.data;return[s("AccountSubscriptionGroupsTable",{attrs:{value:e,"mapped-actions":t.actions}})]}}])})]},proxy:!0}])})},g=[];const l={};var $=b(r,S,g,!1,k,null,null,null);function k(t){for(let o in l)this[o]=l[o]}const j=function(){return $.exports}();export{j as default};
