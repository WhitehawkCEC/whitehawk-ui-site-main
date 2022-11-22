import{ao as y,c3 as a,c as d,aI as x,n as S}from"./index.3627f53e.js";import{A as $}from"./AccountSubscriptionGroupsTable.7ff26743.js";import{u as g}from"./useAccountSubscriptionGroups.80a00a7e.js";import"./AppTanStackTable.25f2b57c.js";import"./createOnChangeFn.27ca25b0.js";import"./chevron-up.736f4142.js";import"./magnifying-glass.b7cbe8fe.js";import"./TransitionExpand.ede5801f.js";import"./createSimpleTable.256f5ffb.js";const r={};r.setup=(t,o)=>{const s=a("id"),n=a("subscriptionId"),e=a("productId"),c=g.list(s,n),_=d(()=>c.data.value||[]),i=x(),v=d(()=>{var l;const p=new Map;for(const f of _.value){const u=((l=f.id)==null?void 0:l.value)||"",b=[{id:"view",action(){i.push(`/admin/companies/${s.value}/subscriptions/${n.value}/products/${e.value}/groups/${u}`)}},{id:"edit",action(){i.push(`/admin/companies/${s.value}/subscriptions/${n.value}/products/${e.value}/groups/${u}/settings`)}}];p.set(u,b)}return p});return{list:c,actions:v}};r.components=Object.assign({PlusSvg:y,AccountSubscriptionGroupsTable:$},r.components);var k=function(){var t=this,o=t.$createElement,s=t._self._c||o;return s("BaseTablePageLayout",{scopedSlots:t._u([{key:"title",fn:function(){return[t._v("Subscription Groups")]},proxy:!0},{key:"button",fn:function(){return[s("BaseButton",{staticClass:"space-x-1",attrs:{to:"./new",append:""}},[s("PlusSvg",{staticClass:"w-5"}),s("span",[t._v("Group")])],1)]},proxy:!0},{key:"table",fn:function(){return[s("BaseVueQuery",{attrs:{query:t.list},scopedSlots:t._u([{key:"success",fn:function(n){var e=n.data;return[s("AccountSubscriptionGroupsTable",{attrs:{value:e,"mapped-actions":t.actions}})]}}])})]},proxy:!0}])})},h=[];const m={};var G=S(r,k,h,!1,I,null,null,null);function I(t){for(let o in m)this[o]=m[o]}const q=function(){return G.exports}();export{q as default};