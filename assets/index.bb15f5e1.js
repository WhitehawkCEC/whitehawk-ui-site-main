import{an as d,c7 as f,cc as v,d as u,n as b}from"./index.7eada971.js";import{A as y}from"./AccountSubscriptionsTable.e1066ec1.js";import"./AppTanStackTable.97b16647.js";import"./createOnChangeFn.c420d3cc.js";import"./chevron-up.736f4142.js";import"./magnifying-glass.b7cbe8fe.js";import"./TransitionExpand.8286ee80.js";import"./index.6dd680ce.js";import"./IsoDateTimeDisplay.2d6510c2.js";import"./createSimpleTable.c41917bd.js";const e={};e.setup=(t,n)=>{const s=f("id"),o=v.list(s),r=u(()=>o.data.value||[]),l=u(()=>{var a;const c=new Map;for(const m of r.value){const i=((a=m.subscriptionId)==null?void 0:a.value)||"",_=[{id:"view",to:`/admin/companies/${s.value}/subscriptions/${i}`},{id:"edit",to:`/admin/companies/${s.value}/subscriptions/${i}/settings`}];c.set(i,_)}return c});return{subscriptionQuery:o,actions:l}};e.components=Object.assign({PlusSvg:d,AccountSubscriptionsTable:y},e.components);var S=function(){var t=this,n=t.$createElement,s=t._self._c||n;return s("BaseTablePageLayout",{scopedSlots:t._u([{key:"title",fn:function(){return[t._v("Subscriptions")]},proxy:!0},{key:"button",fn:function(){return[s("BaseButton",{staticClass:"space-x-1",attrs:{to:"./new",append:""}},[s("PlusSvg",{staticClass:"w-5"}),s("span",[t._v("Subscription")])],1)]},proxy:!0},{key:"table",fn:function(){return[s("BaseVueQuery",{attrs:{query:t.subscriptionQuery},scopedSlots:t._u([{key:"success",fn:function(o){var r=o.data;return[s("AccountSubscriptionsTable",{attrs:{value:r,"mapped-actions":t.actions}})]}}])})]},proxy:!0}])})},x=[];const p={};var k=b(e,S,x,!1,g,null,null,null);function g(t){for(let n in p)this[n]=p[n]}const M=function(){return k.exports}();export{M as default};