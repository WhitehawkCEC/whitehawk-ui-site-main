import{S as c,a as u}from"./SubscriptionValidityCta.d400ec36.js";import{b$ as o,c5 as p,n as l}from"./index.2f8dadb3.js";import"./AppVDateRangePicker.833123d1.js";import"./index.29d66bf4.js";import"./index.6fa4a646.js";import"./IsoDateTimeDisplay.55e5b47e.js";import"./index.9b92597e.js";import"./index.cd92dc51.js";import"./index.87e44ac4.js";const r={};r.setup=(t,i)=>{const s=o("id"),n=o("subscriptionId");return{subscriptionQuery:p.read(s,n)}};r.components=Object.assign({SubscriptionValidityCta:c,SubscriptionCalendarDisplay:u},r.components);var _=function(){var t=this,i=t.$createElement,s=t._self._c||i;return s("BaseVueQuery",{attrs:{query:t.subscriptionQuery},scopedSlots:t._u([{key:"success",fn:function(n){var a=n.data;return[s("section",{staticClass:"space-y-6"},[a.status?s("div",{staticClass:"grid gap-6 xl:grid-cols-3"},[s("SubscriptionValidityCta",{attrs:{status:a.status}}),a.status.validity?s("SubscriptionCalendarDisplay",{staticClass:"xl:col-span-2",attrs:{value:a.status.validity}}):t._e()],1):t._e()])]}}])})},d=[];const e={};var m=l(r,_,d,!1,y,null,null,null);function y(t){for(let i in e)this[i]=e[i]}const V=function(){return m.exports}();export{V as default};