import{ao as f,b$ as v,c5 as b,c as p,aI as y,n as S}from"./index.70bf5aa2.js";import{A as x}from"./AccountSubscriptionsTable.3d09468f.js";import"./AppTanStackTable.b48b88c8.js";import"./createOnChangeFn.956ee960.js";import"./chevron-up.736f4142.js";import"./magnifying-glass.b7cbe8fe.js";import"./TransitionExpand.6abd5354.js";import"./index.ad4f5c87.js";import"./IsoDateTimeDisplay.ce797c95.js";import"./createSimpleTable.7b3f82c2.js";const e={};e.setup=(t,n)=>{const s=v("id"),o=b.list(s),r=p(()=>o.data.value||[]),i=y(),m=p(()=>{var c;const u=new Map;for(const _ of r.value){const a=((c=_.subscriptionId)==null?void 0:c.value)||"",d=[{id:"view",action(){i.push(`/admin/companies/${s.value}/subscriptions/${a}`)}},{id:"edit",action(){i.push(`/admin/companies/${s.value}/subscriptions/${a}/settings`)}}];u.set(a,d)}return u});return{subscriptionQuery:o,actions:m}};e.components=Object.assign({PlusSvg:f,AccountSubscriptionsTable:x},e.components);var k=function(){var t=this,n=t.$createElement,s=t._self._c||n;return s("BaseTablePageLayout",{scopedSlots:t._u([{key:"title",fn:function(){return[t._v("Subscriptions")]},proxy:!0},{key:"button",fn:function(){return[s("BaseButton",{staticClass:"space-x-1",attrs:{to:"./new",append:""}},[s("PlusSvg",{staticClass:"w-5"}),s("span",[t._v("Subscription")])],1)]},proxy:!0},{key:"table",fn:function(){return[s("BaseVueQuery",{attrs:{query:t.subscriptionQuery},scopedSlots:t._u([{key:"success",fn:function(o){var r=o.data;return[s("AccountSubscriptionsTable",{attrs:{value:r,"mapped-actions":t.actions}})]}}])})]},proxy:!0}])})},$=[];const l={};var g=S(e,k,$,!1,h,null,null,null);function h(t){for(let n in l)this[n]=l[n]}const M=function(){return g.exports}();export{M as default};