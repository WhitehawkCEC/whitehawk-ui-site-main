import{ao as f,c0 as v,c6 as b,c as p,aI as y,n as S}from"./index.5272d946.js";import{A as x}from"./AccountSubscriptionsTable.6484f96b.js";import"./AppTanStackTable.fca81ccd.js";import"./createOnChangeFn.0ebbf8b2.js";import"./chevron-up.736f4142.js";import"./magnifying-glass.b7cbe8fe.js";import"./TransitionExpand.62d1e83e.js";import"./index.f257243a.js";import"./IsoDateTimeDisplay.58e0828f.js";import"./createSimpleTable.44c5fd66.js";const e={};e.setup=(t,n)=>{const s=v("id"),o=b.list(s),r=p(()=>o.data.value||[]),c=y(),m=p(()=>{var u;const i=new Map;for(const _ of r.value){const a=((u=_.subscriptionId)==null?void 0:u.value)||"",d=[{id:"view",action(){c.push(`/admin/companies/${s.value}/subscriptions/${a}`)}},{id:"edit",action(){c.push(`/admin/companies/${s.value}/subscriptions/${a}/settings`)}}];i.set(a,d)}return i});return{subscriptionQuery:o,actions:m}};e.components=Object.assign({PlusSvg:f,AccountSubscriptionsTable:x},e.components);var k=function(){var t=this,n=t.$createElement,s=t._self._c||n;return s("BaseTablePageLayout",{scopedSlots:t._u([{key:"title",fn:function(){return[t._v("Subscriptions")]},proxy:!0},{key:"button",fn:function(){return[s("BaseButton",{staticClass:"space-x-1",attrs:{to:"./new",append:""}},[s("PlusSvg",{staticClass:"w-5"}),s("span",[t._v("Subscription")])],1)]},proxy:!0},{key:"table",fn:function(){return[s("BaseVueQuery",{attrs:{query:t.subscriptionQuery},scopedSlots:t._u([{key:"success",fn:function(o){var r=o.data;return[s("AccountSubscriptionsTable",{attrs:{value:r,"mapped-actions":t.actions}})]}}])})]},proxy:!0}])})},g=[];const l={};var h=S(e,k,g,!1,$,null,null,null);function $(t){for(let n in l)this[n]=l[n]}const M=function(){return h.exports}();export{M as default};
