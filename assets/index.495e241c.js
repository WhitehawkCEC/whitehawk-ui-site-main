import{c7 as s,c as i,ce as p,n as _}from"./index.4a38bad4.js";import{u as d}from"./useAccountSubscriptionGroups.07a14938.js";const n={};n.setup=(e,t)=>{const o=s("id"),c=s("subscriptionId"),u=s("groupId"),a=d.read(o,c,u);return{group:i(()=>a.data.value||p.SubscriptionGroup.create())}};var l=function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("section",{staticClass:"space-y-2"},[o("div",[e._v("TODO: add group overview here")]),o("pre",[e._v(e._s(e.group))])])},v=[];const r={};var m=_(n,l,v,!1,f,null,null,null);function f(e){for(let t in r)this[t]=r[t]}const h=function(){return m.exports}();export{h as default};
