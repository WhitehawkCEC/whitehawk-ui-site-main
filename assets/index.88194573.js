import{S as c,a as u,b as p}from"./SubscriptionValidityCta.1f1010f3.js";import{bG as e,c5 as l,n as d}from"./index.d7842beb.js";import"./AppVDatePicker.4bbd445c.js";import"./index.e6ef85b1.js";import"./index.038c7349.js";import"./IsoDateTimeDisplay.0ee36ac5.js";import"./index.146438a5.js";import"./index.f36932fb.js";import"./index.87e44ac4.js";const i={};i.setup=(t,a)=>{const s=e("id"),n=e("subscriptionId");return{subscriptionQuery:l.read(s,n)}};i.components=Object.assign({SubscriptionFeaturesCard:c,SubscriptionValidityCta:u,SubscriptionCalendarDisplay:p},i.components);var _=function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("BaseVueQuery",{attrs:{query:t.subscriptionQuery},scopedSlots:t._u([{key:"success",fn:function(n){var r=n.data;return[r.status?s("section",{staticClass:"space-y-6"},[s("SubscriptionFeaturesCard",{attrs:{type:r.type}}),s("div",{staticClass:"grid gap-6 xl:grid-cols-3"},[s("SubscriptionValidityCta",{attrs:{status:r.status}}),r.status.validity?s("SubscriptionCalendarDisplay",{staticClass:"xl:col-span-2",attrs:{value:r.status.validity}}):t._e()],1)],1):t._e()]}}])})},m=[];const o={};var y=d(i,_,m,!1,b,null,null,null);function b(t){for(let a in o)this[a]=o[a]}const V=function(){return y.exports}();export{V as default};
