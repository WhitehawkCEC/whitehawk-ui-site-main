import{c1 as s,c as i,c9 as p,n as _}from"./index.cb90a26d.js";import{u as d}from"./useAccountSubscriptionGroups.6a4cabeb.js";const n={};n.setup=(t,e)=>{const o=s("id"),c=s("subscriptionId"),u=s("groupId"),a=d.read(o,c,u);return{group:i(()=>a.data.value||p.SubscriptionGroup.create())}};var l=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("section",{staticClass:"space-y-2"},[o("div",[t._v("TODO: add group overview here")]),o("pre",[t._v(t._s(t.group))])])},v=[];const r={};var m=_(n,l,v,!1,f,null,null,null);function f(t){for(let e in r)this[e]=r[e]}const h=function(){return m.exports}();export{h as default};