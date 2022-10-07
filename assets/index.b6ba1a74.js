import{M as y}from"./MembersDisplay.a8f5395c.js";import{A as f}from"./AccountSubscriptionsTable.e8441fbc.js";import{c1 as b,c7 as h,d as p,aJ as A,n as S}from"./index.6c0638d6.js";import{u as x}from"./useCompanyAccess.93711051.js";import"./AppTanStackTable.5c76b348.js";import"./createOnChangeFn.e5567d85.js";import"./chevron-up.736f4142.js";import"./magnifying-glass.b7cbe8fe.js";import"./TransitionExpand.e96a991d.js";import"./index.49c59772.js";import"./IsoDateTimeDisplay.84bdfe63.js";import"./createSimpleTable.edeb5a4f.js";const c={};c.setup=(t,e)=>{const s=b("id"),n=x.list(s),o=h.list(s),l=p(()=>o.data.value||[]),r=A(),d=p(()=>{var u;const i=new Map;for(const _ of l.value){const a=((u=_.subscriptionId)==null?void 0:u.value)||"",v=[{id:"view",action(){r.push(`/admin/companies/${s.value}/subscriptions/${a}`)}},{id:"edit",action(){r.push(`/admin/companies/${s.value}/subscriptions/${a}/settings`)}}];i.set(a,v)}return i});return{id:s,companyAccessQuery:n,subscriptionsList:o,actions:d}};c.components=Object.assign({AccountSubscriptionsTable:f,MembersDisplay:y},c.components);var M=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("section",{staticClass:"space-y-6"},[s("div",{staticClass:"space-y-4"},[s("BaseTypography",{attrs:{component:"h3",variant:"h6"}},[t._v("Subscriptions")]),s("BaseVueQuery",{attrs:{query:t.subscriptionsList},scopedSlots:t._u([{key:"success",fn:function(n){var o=n.data;return[s("AccountSubscriptionsTable",{attrs:{value:o,"mapped-actions":t.actions}})]}}])})],1),s("BaseVueQuery",{attrs:{query:t.companyAccessQuery},scopedSlots:t._u([{key:"success",fn:function(n){var o=n.data;return[s("MembersDisplay",{attrs:{id:t.id,access:o}})]}}])})],1)},$=[];const m={};var k=S(c,M,$,!1,C,null,null,null);function C(t){for(let e in m)this[e]=m[e]}const E=function(){return k.exports}();export{E as default};
