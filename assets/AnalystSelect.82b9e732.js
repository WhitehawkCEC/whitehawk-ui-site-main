import{T as l}from"./ToolTip.96a71265.js";import{O as n}from"./ObjectDisplay.fb62a24d.js";import{aB as c,n as i}from"./index.6ef5ab54.js";const o={};o.props={value:{key:"value",required:!1,type:null},options:{key:"options",required:!0,type:Array}};o.setup=(e,r)=>{const t=e,s=r.emit;return{proxy:c(t,s)}};o.components=Object.assign({ToolTip:l,ObjectDisplay:n},o.components);var p=function(){var e=this,r=e.$createElement,t=e._self._c||r;return t("BaseLabel",{staticClass:"flex flex-col p-4 lg:grid lg:grid-cols-3 lg:items-center lg:gap-1"},[t("div",{staticClass:"flex flex-row items-center space-x-1"},[t("span",{staticClass:"after:ml-0.5 after:text-red-700 after:content-['*']"},[e._v(" Analyst Email ")]),e.value?t("ToolTip",[t("ObjectDisplay",{attrs:{value:e.value}})],1):e._e()],1),t("BaseSelect",{staticClass:"lg:col-span-2",attrs:{required:""},model:{value:e.proxy,callback:function(s){e.proxy=s},expression:"proxy"}},e._l(e.options,function(s){return t("option",{key:s.id,domProps:{value:s}},[e._v(" "+e._s(s.email)+" ")])}),0)],1)},u=[];const a={};var m=i(o,p,u,!1,_,null,null,null);function _(e){for(let r in a)this[r]=a[r]}const d=function(){return m.exports}();export{d as A};