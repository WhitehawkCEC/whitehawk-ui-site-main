import{A as d}from"./AccountSubscriptionsTable.33e151b7.js";import{c9 as f,ce as v,d as a,n as b}from"./index.e627960d.js";import"./AppTanStackTable.9bda351a.js";import"./createOnChangeFn.7e56f0c4.js";import"./chevron-up.736f4142.js";import"./magnifying-glass.b7cbe8fe.js";import"./index.e5e1ef4e.js";import"./IsoDateTimeDisplay.ba6927d3.js";import"./createSimpleTable.7ef16907.js";const e={};e.setup=(t,n)=>{const s=f("id"),o=v.list(s),r=a(()=>o.data.value||[]),l=a(()=>{var u;const i=new Map;for(const m of r.value){const c=((u=m.subscriptionId)==null?void 0:u.value)||"",_=[{id:"view",to:`/client/companies/${s.value}/subscriptions/${c}`},{id:"edit",to:`/client/companies/${s.value}/subscriptions/${c}/settings`}];i.set(c,_)}return i});return{subscriptionQuery:o,actions:l}};e.components=Object.assign({AccountSubscriptionsTable:d},e.components);var y=function(){var t=this,n=t.$createElement,s=t._self._c||n;return s("BaseTablePageLayout",{scopedSlots:t._u([{key:"title",fn:function(){return[t._v("Subscriptions")]},proxy:!0},{key:"table",fn:function(){return[s("BaseVueQuery",{attrs:{query:t.subscriptionQuery},scopedSlots:t._u([{key:"success",fn:function(o){var r=o.data;return[s("AccountSubscriptionsTable",{attrs:{value:r,"mapped-actions":t.actions}})]}}])})]},proxy:!0}])})},x=[];const p={};var S=b(e,y,x,!1,k,null,null,null);function k(t){for(let n in p)this[n]=p[n]}const M=function(){return S.exports}();export{M as default};
