(window.webpackJsonp=window.webpackJsonp||[]).push([[46],{2188:function(e,r,t){"use strict";t.r(r);var d=t(20),o={props:{color:{key:"color",required:!1,type:null,default:"blue"},padding:{key:"padding",required:!1,type:null,default:"base"}},setup:function(e,r){var t={blue:{border:"border-blue-50",gradient:"from-blue-100"},indigo:{border:"border-indigo-50",gradient:"from-indigo-100"},gray:{border:"border-gray-100",gradient:"from-gray-200"}},o={base:"p-6",wide:"py-6 px-8",tall:"py-8 px-6"},l=e;return{colorClass:Object(d.computed)((function(){return t[l.color]})),paddingClass:Object(d.computed)((function(){return o[l.padding]}))}}},l=o,n=t(55),component=Object(n.a)(l,(function(){var e=this,r=e.$createElement,t=e._self._c||r;return t("div",{staticClass:"overflow-hidden rounded-lg shadow-md"},[t("div",{staticClass:"space-y-4 bg-white",class:e.paddingClass},[e._t("header"),e._v(" "),e._t("subtitle"),e._v(" "),e._t("content")],2),e._v(" "),t("div",{staticClass:"relative overflow-hidden border-t bg-gradient-to-br via-white to-white",class:e.colorClass.gradient+" "+e.colorClass.border+" "+e.paddingClass},[t("div",{staticClass:"relative z-10"},[e._t("footer")],2)])])}),[],!1,null,null,null);r.default=component.exports}}]);