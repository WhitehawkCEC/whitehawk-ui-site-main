import{S as a}from"./SubscriptionGroupIdHeader.966e1e58.js";import{u as p}from"./useAccountSubscriptionGroups.703fc84d.js";import{bZ as i,n as d}from"./index.4a01a87b.js";import"./BackButton.df586d26.js";import"./chevron-left.0808b01b.js";const e={};e.setup=(t,o)=>{const r=i("id"),s=i("subscriptionId"),n=i("groupId"),c=p.read(r,s,n);return{id:r,subscriptionId:s,groupRead:c}};e.components=Object.assign({SubscriptionGroupIdHeader:a},e.components);var _=function(){var t=this,o=t.$createElement,r=t._self._c||o;return r("section",{staticClass:"space-y-6"},[r("BaseVueQuery",{attrs:{query:t.groupRead},scopedSlots:t._u([{key:"success",fn:function(s){var n=s.data;return[r("SubscriptionGroupIdHeader",{attrs:{id:t.id,"subscription-id":t.subscriptionId,group:n}})]}}])}),r("div",[t._v("TODO: add group overview here")])],1)},m=[];const u={};var l=d(e,_,m,!1,f,null,null,null);function f(t){for(let o in u)this[o]=u[o]}const x=function(){return l.exports}();export{x as default};
