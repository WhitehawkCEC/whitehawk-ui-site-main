import{A as f}from"./AccountSubscriptionsTable.92ce6912.js";import{c1 as v,c7 as b,c as p,aI as y,n as x}from"./index.cb90a26d.js";import"./AppTanStackTable.ee747f8b.js";import"./createOnChangeFn.037df413.js";import"./chevron-up.736f4142.js";import"./magnifying-glass.b7cbe8fe.js";import"./TransitionExpand.18ea0ced.js";import"./index.9e96c30a.js";import"./IsoDateTimeDisplay.cb4d1ea8.js";import"./createSimpleTable.7d574f51.js";const e={};e.setup=(t,n)=>{const s=v("id"),o=b.list(s),r=p(()=>o.data.value||[]),i=y(),m=p(()=>{var a;const u=new Map;for(const _ of r.value){const c=((a=_.subscriptionId)==null?void 0:a.value)||"",d=[{id:"view",action(){i.push(`/client/companies/${s.value}/subscriptions/${c}`)}},{id:"edit",action(){i.push(`/client/companies/${s.value}/subscriptions/${c}/settings`)}}];u.set(c,d)}return u});return{subscriptionQuery:o,actions:m}};e.components=Object.assign({AccountSubscriptionsTable:f},e.components);var S=function(){var t=this,n=t.$createElement,s=t._self._c||n;return s("BaseTablePageLayout",{scopedSlots:t._u([{key:"title",fn:function(){return[t._v("Subscriptions")]},proxy:!0},{key:"table",fn:function(){return[s("BaseVueQuery",{attrs:{query:t.subscriptionQuery},scopedSlots:t._u([{key:"success",fn:function(o){var r=o.data;return[s("AccountSubscriptionsTable",{attrs:{value:r,"mapped-actions":t.actions}})]}}])})]},proxy:!0}])})},h=[];const l={};var k=x(e,S,h,!1,$,null,null,null);function $(t){for(let n in l)this[n]=l[n]}const P=function(){return k.exports}();export{P as default};