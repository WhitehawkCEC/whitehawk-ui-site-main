import{S as c,a as u}from"./SubscriptionValidityCta.3ca2a460.js";import{b_ as o,c4 as p,n as l}from"./index.181068a8.js";import"./AppVDateRangePicker.ae181ce5.js";import"./index.2f1d3902.js";import"./index.06049490.js";import"./IsoDateTimeDisplay.18727b4c.js";import"./index.029329b6.js";import"./index.8a2c85a6.js";import"./index.87e44ac4.js";const n={};n.setup=(t,i)=>{const s=o("id"),a=o("subscriptionId");return{subscriptionQuery:p.read(s,a)}};n.components=Object.assign({SubscriptionValidityCta:c,SubscriptionCalendarDisplay:u},n.components);var _=function(){var t=this,i=t.$createElement,s=t._self._c||i;return s("BaseVueQuery",{attrs:{query:t.subscriptionQuery},scopedSlots:t._u([{key:"success",fn:function(a){var r=a.data;return[r.status?s("section",{staticClass:"grid gap-6 xl:grid-cols-3"},[s("SubscriptionValidityCta",{attrs:{status:r.status}}),r.status.validity?s("SubscriptionCalendarDisplay",{staticClass:"xl:col-span-2",attrs:{value:r.status.validity}}):t._e()],1):t._e()]}}])})},d=[];const e={};var m=l(n,_,d,!1,y,null,null,null);function y(t){for(let i in e)this[i]=e[i]}const V=function(){return m.exports}();export{V as default};