(window.webpackJsonp=window.webpackJsonp||[]).push([[157,69],{2243:function(t,e,n){"use strict";n.r(e);var r=n(525),o=n(20),c=n(500),l=n(482),d={setup:function(t,e){var n=Object(l.b)("id"),r=c.C.read(n);return{company:Object(o.computed)((function(){return r.data.value}))}}};d.components=Object.assign({BackButton:r.a},d.components);var f=d,y=n(53),component=Object(y.a)(f,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("section",[n("div",{staticClass:"space-y-8"},[t.company?n("div",{staticClass:"flex flex-col space-y-2 lg:flex-row lg:items-end lg:justify-between lg:space-y-0"},[n("div",{staticClass:"flex flex-col space-y-2 lg:flex-row lg:items-end lg:space-y-0 lg:space-x-8"},[n("div",[n("BackButton",{attrs:{link:"/admin/companies"}})],1),t._v(" "),n("div",{staticClass:"flex flex-col"},[n("BaseTypography",{attrs:{component:"h2",variant:"h5"}},[t._v("\n            "+t._s(t.company.name)+"\n          ")]),t._v(" "),n("BaseTypography",{staticClass:"truncate uppercase text-gray-500",attrs:{variant:"overline"}},[t._v("\n            "+t._s(t.company.domain)+"\n          ")])],1)]),t._v(" "),t.company.industry?n("div",[n("dt",{staticClass:"sr-only"},[t._v("Industry")]),t._v(" "),n("dd",{staticClass:"inline-block self-start rounded-full bg-teal-200 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-teal-800"},[t._v("\n          "+t._s(t.company.industry.name)+"\n        ")])]):t._e()]):t._e(),t._v(" "),n("NuxtChild")],1)])}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{BaseTypography:n(471).default})},469:function(t,e){t.exports=function(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t},t.exports.__esModule=!0,t.exports.default=t.exports},470:function(t,e,n){var r=n(489);t.exports=function(source,t){if(null==source)return{};var e,i,n=r(source,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(source);for(i=0;i<o.length;i++)e=o[i],t.indexOf(e)>=0||Object.prototype.propertyIsEnumerable.call(source,e)&&(n[e]=source[e])}return n},t.exports.__esModule=!0,t.exports.default=t.exports},471:function(t,e,n){"use strict";n.r(e);var r=n(20),o=Object(r.defineComponent)({inheritAttrs:!1});o.props={variant:{key:"variant",required:!0,type:null},component:{key:"component",required:!1,type:null,default:"span"}},o.setup=function(t,e){var n="antialiased",o={h1:"".concat(n," font-display text-4xl font-semibold leading-snug tracking-wide sm:text-5xl md:text-6xl"),h2:"".concat(n," font-display text-3xl font-semibold leading-9 tracking-normal sm:text-5xl sm:leading-10"),h3:"".concat(n," font-display text-3xl font-medium leading-8 tracking-normal sm:text-4xl sm:leading-10"),h4:"".concat(n," font-display text-2xl font-medium leading-8 tracking-wide sm:text-3xl sm:leading-9"),h5:"".concat(n," font-display text-2xl font-medium leading-6 tracking-normal"),h6:"".concat(n," font-display text-xl font-semibold leading-7 tracking-wide"),p1:"".concat(n," font-body text-base font-normal leading-7 tracking-wide"),p2:"".concat(n," font-body text-sm font-normal leading-6 tracking-normal"),subtitle1:"".concat(n," font-body text-lg font-normal leading-6 tracking-wide sm:text-xl"),subtitle2:"".concat(n," font-body text-xs font-medium leading-5 tracking-wide"),subtitle3:"".concat(n," font-display text-lg font-medium leading-5 tracking-wide"),overline:"".concat(n," font-display text-xs font-medium tracking-widest"),button:"".concat(n," font-body text-xs font-medium tracking-wider sm:text-sm xl:tracking-wide")},c=t;return{displayTypeClass:Object(r.computed)((function(){return o[c.variant]}))}};var c=o,l=n(53),component=Object(l.a)(c,(function(){var t=this,e=t.$createElement;return(t._self._c||e)(t.component,t._g(t._b({tag:"Component",class:t.displayTypeClass},"Component",t.$attrs,!1),t.$listeners),[t._t("default")],2)}),[],!1,null,null,null);e.default=component.exports},482:function(t,e,n){"use strict";n.d(e,"a",(function(){return d})),n.d(e,"d",(function(){return f})),n.d(e,"b",(function(){return y})),n.d(e,"c",(function(){return m}));var r=n(28),o=(n(102),n(47),n(100),n(45),n(37),n(44),n(26),n(62),n(38),n(63),n(20));function c(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(object);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,n)}return e}function l(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?c(Object(source),!0).forEach((function(e){Object(r.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):c(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}function d(){var t=Object(o.getCurrentInstance)();if(!t)throw new Error("Not in setup()?");return Object(o.computed)((function(){return t.proxy.$route}))}function f(){var t=Object(o.getCurrentInstance)();if(!t)throw new Error("Not in setup()?");return t.proxy.$router}function y(t){var e=d();return Object(o.computed)((function(){var n=e.value.params[t];if(!n)throw new Error("Missing param: ".concat(t));return n}))}function m(t,e){var n,c=d(),y=f();return Object(o.computed)({get:function(){return c.value.query[t]||e},set:function(e){clearTimeout(n),n=setTimeout((function(){y.replace({query:l(l({},c.value.query),{},Object(r.a)({},t,e))})}),300)}})}},489:function(t,e){t.exports=function(source,t){if(null==source)return{};var e,i,n={},r=Object.keys(source);for(i=0;i<r.length;i++)e=r[i],t.indexOf(e)>=0||(n[e]=source[e]);return n},t.exports.__esModule=!0,t.exports.default=t.exports},502:function(t,e,n){n(45),n(37),n(44),n(26),n(62),n(38),n(63);var r=n(469),o=n(470),c=["class","staticClass","style","staticStyle","attrs"];function l(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(object);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,n)}return e}n(121),t.exports={functional:!0,render:function(t,e){var n=e._c,data=(e._v,e.data),d=e.children,f=void 0===d?[]:d,y=data.class,m=data.staticClass,style=data.style,v=data.staticStyle,x=data.attrs,O=void 0===x?{}:x,w=o(data,c);return n("svg",function(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?l(Object(source),!0).forEach((function(e){r(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):l(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}({class:[y,m],style:[style,v],attrs:Object.assign({xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",fill:"currentColor","aria-hidden":"true"},O)},w),f.concat([n("path",{attrs:{"fill-rule":"evenodd",d:"M12.79 5.23a.75.75 0 01-.02 1.06L8.832 10l3.938 3.71a.75.75 0 11-1.04 1.08l-4.5-4.25a.75.75 0 010-1.08l4.5-4.25a.75.75 0 011.06.02z","clip-rule":"evenodd"}})]))}}},525:function(t,e,n){"use strict";var r=n(502),o=n.n(r),c={};c.props={link:{key:"link",required:!1,type:null,default:"."},text:{key:"text",required:!1,type:String,default:"Back"}},c.setup=function(t,e){return{}},c.components=Object.assign({ChevronLeftSvg:o.a},c.components);var l=c,d=n(53),component=Object(d.a)(l,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[t.link?n("BaseButton",{attrs:{shape:"rectangle","display-type":"light",size:"even",to:t.link}},[n("ChevronLeftSvg",{staticClass:"-ml-1 h-auto w-5"}),t._v(" "),n("span",[t._v(t._s(t.text))])],1):n("BaseButton",{attrs:{shape:"rectangle","display-type":"light",size:"even",to:t.link,append:""}},[n("ChevronLeftSvg",{staticClass:"-ml-1 h-auto w-5"}),t._v(" "),n("span",[t._v(t._s(t.text))])],1)],1)}),[],!1,null,null,null);e.a=component.exports;installComponents(component,{BaseButton:n(308).default})}}]);