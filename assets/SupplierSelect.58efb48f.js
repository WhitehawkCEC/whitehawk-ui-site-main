import{E as c}from"./exclamation-triangle.54812a62.js";import{n as i,aC as p}from"./index.038aef42.js";import{T as u}from"./ToolTip.2a12b8bd.js";import{O as _}from"./ObjectDisplay.f177ba64.js";const o={};o.setup=(e,s)=>({});o.components=Object.assign({ExclamationSvg:c},o.components);var m=function(){var e=this,s=e.$createElement,t=e._self._c||s;return t("div",{staticClass:"rounded-md bg-yellow-50 p-4 shadow",attrs:{role:"alert"}},[t("div",{staticClass:"flex space-x-2"},[t("div",{staticClass:"flex-shrink-0"},[t("ExclamationSvg",{staticClass:"h-5 w-5 text-yellow-400"})],1),t("div",{staticClass:"space-y-2"},[t("h3",{staticClass:"text-sm font-medium leading-5 text-yellow-800"},[e._t("title")],2),t("div",{staticClass:"text-sm leading-5 text-yellow-700"},[e._t("message")],2)])])])},v=[];const a={};var x=i(o,m,v,!1,f,null,null,null);function f(e){for(let s in a)this[s]=a[s]}const j=function(){return x.exports}(),n={};n.props={value:{key:"value",required:!1,type:null},options:{key:"options",required:!0,type:Array}};n.setup=(e,s)=>{const t=e,l=s.emit;return{proxy:p(t,l)}};n.components=Object.assign({ToolTip:u,ObjectDisplay:_},n.components);var d=function(){var e=this,s=e.$createElement,t=e._self._c||s;return t("BaseLabel",{staticClass:"flex flex-col p-4 lg:grid lg:grid-cols-3 lg:items-center lg:gap-1"},[t("div",{staticClass:"flex flex-row items-center space-x-1"},[t("span",{staticClass:"block text-sm font-medium leading-5 text-gray-700"},[e._v(" Supplier ")]),e.value?t("ToolTip",[t("ObjectDisplay",{attrs:{value:e.value}})],1):e._e()],1),t("div",{staticClass:"flex flex-col lg:col-span-2"},[t("BaseSelect",{model:{value:e.proxy,callback:function(l){e.proxy=l},expression:"proxy"}},[t("option",{domProps:{value:null}}),e._l(e.options,function(l){return t("option",{key:l.id,domProps:{value:l}},[e._v(" "+e._s(l.name)+" ")])})],2)],1)])},y=[];const r={};var g=i(n,d,y,!1,C,null,null,null);function C(e){for(let s in r)this[s]=r[s]}const k=function(){return g.exports}();export{j as A,k as S};