import{P as i}from"./ProgressBar.0a2ed1ac.js";import{n}from"./index.3627f53e.js";const r={};r.props={item:{key:"item",required:!0,type:null},inProgress:{key:"inProgress",required:!0,type:Array}};r.setup=(t,s)=>({});r.components=Object.assign({ProgressBar:i},r.components);var o=function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("BaseSimpleCard",{staticClass:"relative flex h-full flex-col justify-between overflow-hidden p-5"},[e("BaseTypography",{attrs:{variant:"subtitle3"}},[t._v(t._s(t.item.name))]),t.item.id?e("div",{staticClass:"mt-auto flex justify-between"},[e("BaseTypography",{staticClass:"text-gray-500",attrs:{variant:"p3"}},[t._v(" 120 Questions ")]),t.inProgress.includes(t.item)?[e("BaseLink",{attrs:{to:`custom-questionnaires/${t.item.id.value}`,"display-type":"primary-prime"}},[e("span",{staticClass:"font-display text-sm font-semibold uppercase"},[t._v(" Continue ")])]),e("ProgressBar",{staticClass:"absolute inset-x-0 bottom-0 h-2 bg-gray-200",attrs:{current:35,max:100}})]:[e("BaseLink",{attrs:{"display-type":"primary-prime",to:`custom-questionnaires/${t.item.id.value}`}},[e("span",{staticClass:"font-display text-sm font-semibold uppercase"},[t._v(" Begin ")])])]],2):t._e()],1)},l=[];const a={};var p=n(r,o,l,!1,u,null,null,null);function u(t){for(let s in a)this[s]=a[s]}const _=function(){return p.exports}();export{_ as C};