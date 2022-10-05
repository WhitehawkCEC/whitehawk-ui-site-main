import{aq as $,b$ as c,d,aJ as y,n as g}from"./index.2f8dadb3.js";import{A as x}from"./AccountSubscriptionGroupsTable.6efafb02.js";import{u as S}from"./useAccountSubscriptionGroups.46fdc964.js";import"./AppTanStackTable.65b4fe56.js";import"./createOnChangeFn.b706955f.js";import"./chevron-up.736f4142.js";import"./magnifying-glass.b7cbe8fe.js";import"./chevron-left.0808b01b.js";import"./TransitionExpand.04ab59f6.js";import"./createSimpleTable.60dbeec9.js";const r={};r.setup=(s,n)=>{const t=c("id"),o=c("subscriptionId"),e=c("productId"),i=S.list(t,o),v=d(()=>i.data.value||[]),a=y(),_=d(()=>{var l;const p=new Map;for(const f of v.value){const u=((l=f.id)==null?void 0:l.value)||"",b=[{id:"view",action(){a.push(`/admin/companies/${t.value}/subscriptions/${o.value}/products/${e.value}/groups/${u}`)}},{id:"licenseBatch",action(){a.push(`/admin/companies/${t.value}/subscriptions/${o.value}/products/${e.value}/groups/${u}/license-batches`)}},{id:"edit",action(){a.push(`/admin/companies/${t.value}/subscriptions/${o.value}/products/${e.value}/groups/${u}/settings`)}}];p.set(u,b)}return p});return{list:i,actions:_}};r.components=Object.assign({PlusSvg:$,AccountSubscriptionGroupsTable:x},r.components);var h=function(){var s=this,n=s.$createElement,t=s._self._c||n;return t("BaseTablePageLayout",{scopedSlots:s._u([{key:"title",fn:function(){return[s._v("Subscription Groups")]},proxy:!0},{key:"button",fn:function(){return[t("BaseButton",{staticClass:"space-x-1",attrs:{to:"./new",append:""}},[t("PlusSvg",{staticClass:"w-5"}),t("span",[s._v("Group")])],1)]},proxy:!0},{key:"table",fn:function(){return[t("BaseVueQuery",{attrs:{query:s.list},scopedSlots:s._u([{key:"success",fn:function(o){var e=o.data;return[t("AccountSubscriptionGroupsTable",{attrs:{value:e,"mapped-actions":s.actions}})]}}])})]},proxy:!0}])})},k=[];const m={};var B=g(r,h,k,!1,G,null,null,null);function G(s){for(let n in m)this[n]=m[n]}const z=function(){return B.exports}();export{z as default};