import{b$ as s,c as i,c7 as p,n as _}from"./index.1e14903e.js";import{u as d}from"./useAccountSubscriptionGroups.fff21d06.js";const n={};n.setup=(t,e)=>{const o=s("id"),c=s("subscriptionId"),u=s("groupId"),a=d.read(o,c,u);return{group:i(()=>a.data.value||p.SubscriptionGroup.create())}};var l=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("section",{staticClass:"space-y-2"},[o("div",[t._v("TODO: add group overview here")]),o("pre",[t._v(t._s(t.group))])])},v=[];const r={};var m=_(n,l,v,!1,f,null,null,null);function f(t){for(let e in r)this[e]=r[e]}const h=function(){return m.exports}();export{h as default};