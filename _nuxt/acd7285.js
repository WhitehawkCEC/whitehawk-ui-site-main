(window.webpackJsonp=window.webpackJsonp||[]).push([[166,52,56,69,71],{1852:function(t,e,r){"use strict";r.d(e,"a",(function(){return c}));var n=r(506),o=r(485);function c(t,e){Object(o.a)(2,arguments);var time=Object(n.a)(t).getTime(),r=Object(n.a)(e.start).getTime(),c=Object(n.a)(e.end).getTime();if(!(r<=c))throw new RangeError("Invalid interval");return time>=r&&time<=c}},2158:function(t,e,r){"use strict";r.r(e);r(121);var n=r(719),o=r(720),c=r(958),l=r.n(c),d=r(525),f=r(949),v=r(492),y=r(657),m=r(1852),O=r(20),h={};h.props={id:{key:"id",required:!0,type:String},subscriptionId:{key:"subscriptionId",required:!0,type:String},product:{key:"product",required:!0,type:null}},h.setup=function(t,e){var r=t,n=new Date,o=Object(O.computed)((function(){if(r.product.validity&&r.product.validity.start&&r.product.validity.end)return{start:Object(y.a)(r.product.validity.start.value),end:Object(y.a)(r.product.validity.end.value)}})),c=Object(O.computed)((function(){return!!o.value&&Object(m.a)(n,o.value)}));return{DateRange:v.DateRange,isValid:c}},h.components=Object.assign({BackButton:d.a,CalendarSvg:l.a,DateRangeDisplay:f.a},h.components);var x=h,w=r(53),component=Object(w.a)(x,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"flex flex-col space-y-2 lg:flex-row lg:items-end lg:justify-between lg:space-y-0"},[r("div",{staticClass:"flex flex-col space-y-6 lg:flex-row lg:items-center lg:space-x-4 lg:space-y-0"},[r("div",[r("BackButton",{attrs:{link:".",append:""}})],1),t._v(" "),r("div",{staticClass:"flex flex-col"},[r("BaseTypography",{staticClass:"uppercase text-gray-500",attrs:{variant:"overline"}},[t._v("\n        Subscription Product\n      ")]),t._v(" "),r("BaseTypography",{attrs:{variant:"h5",component:"h2"}},[t._v("\n        "+t._s(t.product.name)+"\n      ")])],1)]),t._v(" "),r("span",{staticClass:"flex max-w-min shrink-0 items-center space-x-2 rounded-full px-3 py-0.5 shadow-sm",class:t.isValid?"bg-teal-500":"bg-red-500"},[r("CalendarSvg",{staticClass:"w-5",class:t.isValid?"text-teal-100":"text-red-100"}),t._v(" "),r("BaseTypography",{class:t.isValid?"text-teal-100":"text-red-100",attrs:{variant:"p2"}},[r("DateRangeDisplay",{attrs:{value:t.product.validity||t.DateRange.create()}})],1)],1)])}),[],!1,null,null,null),j=component.exports;installComponents(component,{BaseTypography:r(471).default});var _=r(552),S=r(820),C=r(482),k={setup:function(t,e){var r=Object(C.b)("id"),n=Object(C.b)("subscriptionId"),o=Object(C.b)("productId"),c=S.a.read(r,n,o),l=Object(O.computed)((function(){var t="/admin/companies/".concat(encodeURIComponent(r.value),"/subscriptions/").concat(encodeURIComponent(n.value),"/products/").concat(encodeURIComponent(o.value));return[{to:"".concat(t),name:"Overview"},{to:"".concat(t,"/settings"),name:"Settings"}]}));return{id:r,subscriptionId:n,productRead:c,links:l,product:function(t){return t.product||_.SubscriptionProduct.create()}}}};k.components=Object.assign({ParentPageWrapper:o.a,ParentPageLinks:n.a,SubscriptionProductIdHeader:j},k.components);var D=k,P=Object(w.a)(D,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("section",{staticClass:"md:space-y-12"},[r("ClientOnly",[r("ParentPageWrapper",[r("ParentPageLinks",{attrs:{links:t.links}})],1)],1),t._v(" "),r("div",{staticClass:"space-y-8"},[r("BaseVueQuery",{attrs:{query:t.productRead},scopedSlots:t._u([{key:"success",fn:function(e){var data=e.data;return[r("SubscriptionProductIdHeader",{attrs:{id:t.id,"subscription-id":t.subscriptionId,product:t.product(data)}})]}}])}),t._v(" "),r("NuxtChild")],1)],1)}),[],!1,null,null,null);e.default=P.exports;installComponents(P,{BaseVueQuery:r(505).default})},469:function(t,e){t.exports=function(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t},t.exports.__esModule=!0,t.exports.default=t.exports},470:function(t,e,r){var n=r(489);t.exports=function(source,t){if(null==source)return{};var e,i,r=n(source,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(source);for(i=0;i<o.length;i++)e=o[i],t.indexOf(e)>=0||Object.prototype.propertyIsEnumerable.call(source,e)&&(r[e]=source[e])}return r},t.exports.__esModule=!0,t.exports.default=t.exports},471:function(t,e,r){"use strict";r.r(e);var n=r(20),o=Object(n.defineComponent)({inheritAttrs:!1});o.props={variant:{key:"variant",required:!0,type:null},component:{key:"component",required:!1,type:null,default:"span"}},o.setup=function(t,e){var r="antialiased",o={h1:"".concat(r," font-display text-4xl font-semibold leading-snug tracking-wide sm:text-5xl md:text-6xl"),h2:"".concat(r," font-display text-3xl font-semibold leading-9 tracking-normal sm:text-5xl sm:leading-10"),h3:"".concat(r," font-display text-3xl font-medium leading-8 tracking-normal sm:text-4xl sm:leading-10"),h4:"".concat(r," font-display text-2xl font-medium leading-8 tracking-wide sm:text-3xl sm:leading-9"),h5:"".concat(r," font-display text-2xl font-medium leading-6 tracking-normal"),h6:"".concat(r," font-display text-xl font-semibold leading-7 tracking-wide"),p1:"".concat(r," font-body text-base font-normal leading-7 tracking-wide"),p2:"".concat(r," font-body text-sm font-normal leading-6 tracking-normal"),subtitle1:"".concat(r," font-body text-lg font-normal leading-6 tracking-wide sm:text-xl"),subtitle2:"".concat(r," font-body text-xs font-medium leading-5 tracking-wide"),subtitle3:"".concat(r," font-display text-lg font-medium leading-5 tracking-wide"),overline:"".concat(r," font-display text-xs font-medium tracking-widest"),button:"".concat(r," font-body text-xs font-medium tracking-wider sm:text-sm xl:tracking-wide")},c=t;return{displayTypeClass:Object(n.computed)((function(){return o[c.variant]}))}};var c=o,l=r(53),component=Object(l.a)(c,(function(){var t=this,e=t.$createElement;return(t._self._c||e)(t.component,t._g(t._b({tag:"Component",class:t.displayTypeClass},"Component",t.$attrs,!1),t.$listeners),[t._t("default")],2)}),[],!1,null,null,null);e.default=component.exports},472:function(t,e,r){"use strict";r.d(e,"a",(function(){return n}));var n="client-portal"},473:function(t,e,r){"use strict";r.d(e,"a",(function(){return l}));var n=r(28),o=r(20),c=r(499);function l(){var t=Object(c.a)();return Object(o.computed)((function(){if(t.value)return{meta:Object(n.a)({},"jwt",t.value)}}))}},474:function(t,e,r){"use strict";r.d(e,"a",(function(){return c}));var n=r(2289),o=r(198),c=new n.a({baseUrl:o.b,format:"binary"})},482:function(t,e,r){"use strict";r.d(e,"a",(function(){return d})),r.d(e,"d",(function(){return f})),r.d(e,"b",(function(){return v})),r.d(e,"c",(function(){return y}));var n=r(28),o=(r(102),r(47),r(100),r(45),r(37),r(44),r(26),r(62),r(38),r(63),r(20));function c(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(object);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,r)}return e}function l(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?c(Object(source),!0).forEach((function(e){Object(n.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):c(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}function d(){var t=Object(o.getCurrentInstance)();if(!t)throw new Error("Not in setup()?");return Object(o.computed)((function(){return t.proxy.$route}))}function f(){var t=Object(o.getCurrentInstance)();if(!t)throw new Error("Not in setup()?");return t.proxy.$router}function v(t){var e=d();return Object(o.computed)((function(){var r=e.value.params[t];if(!r)throw new Error("Missing param: ".concat(t));return r}))}function y(t,e){var r,c=d(),v=f();return Object(o.computed)({get:function(){return c.value.query[t]||e},set:function(e){clearTimeout(r),r=setTimeout((function(){v.replace({query:l(l({},c.value.query),{},Object(n.a)({},t,e))})}),300)}})}},485:function(t,e,r){"use strict";function n(t,e){if(e.length<t)throw new TypeError(t+" argument"+(t>1?"s":"")+" required, but only "+e.length+" present")}r.d(e,"a",(function(){return n}))},487:function(t,e,r){"use strict";r.r(e);var n=r(20),o=Object(n.defineComponent)({inheritAttrs:!1});o.props={action:{key:"action",required:!1,type:null,default:"primary"},shape:{key:"shape",required:!1,type:null,default:"round"},color:{key:"color",required:!1,type:null,default:"base"},size:{key:"size",required:!1,type:null,default:"base"},to:{key:"to",required:!1,type:null,default:void 0}},o.setup=function(t,e){var r="inline-flex flex-shrink-0 justify-center items-center antialiased transform transition duration-200 hover:-translate-y-px hover:shadow-md focus:outline-none focus:ring disabled:cursor-not-allowed disabled:opacity-50",o={primary:{base:"".concat(r," text-white bg-blue-500 hover:bg-blue-600 focus:bg-blue-600 focus:ring-blue-200"),teal:"".concat(r," text-white bg-teal-500 hover:bg-teal-600 focus:bg-teal-600 focus:ring-teal-200"),light:"".concat(r," text-gray-400 border border-gray-400 hover:text-indigo-500 hover:shadow-none hover:border-indigo-500 focus:text-indigo-500 focus:shadow-none focus:ring-indigo-200 focus:border-indigo-500"),info:"".concat(r," text-white bg-prime-indigo hover:bg-indigo-500 focus:bg-indigo-500 focus:ring-indigo-200"),danger:"".concat(r," text-white bg-red-500 hover:bg-red-600 focus:bg-red-600 focus:ring-red-200")},secondary:{base:"".concat(r," border bg-white text-prime-navy hover:text-prime-darkest hover:shadow-inner focus:shadow-inner focus:text-prime-darkest focus:ring-gray-200"),teal:"".concat(r," bg-white text-teal-500 border-teal-500 hover:bg-teal-200 hover:text-teal-600 hover:border-transparent focus:bg-teal-200 focus:text-teal-600 focus:border-transparent focus:ring-teal-200"),light:"".concat(r," text-white hover:bg-gray-50 hover:text-gray-500 focus:bg-gray-50 focus:text-gray-500 focus:ring-gray-200"),info:"".concat(r," bg-white text-indigo-500 border-indigo-500 hover:bg-indigo-200 hover:text-indigo-600 hover:border-transparent focus:bg-indigo-200 focus:text-indigo-600 focus:border-transparent focus:ring-indigo-200"),danger:"".concat(r," bg-white text-red-500 border-red-500 hover:bg-red-200 hover:text-red-600 hover:border-transparent focus:bg-red-200 focus:text-red-600 focus:border-transparent focus:ring-red-200")}},c=t;return{SIZE_CLASSES:{xs:"p-0.5",small:"p-1",base:"p-2",large:"p-3"},SHAPE_CLASSES:{round:"rounded-full",square:"rounded-md"},COLOR_CLASSES:o,type:Object(n.computed)((function(){return c.to?"nuxt-link":"button"}))}};var c=o,l=r(53),component=Object(l.a)(c,(function(){var t=this,e=t.$createElement;return(t._self._c||e)(t.type,t._g(t._b({tag:"Component",class:[t.SIZE_CLASSES[t.size],t.SHAPE_CLASSES[t.shape],t.COLOR_CLASSES[t.action][t.color]],attrs:{to:t.to}},"Component",t.$attrs,!1),t.$listeners),[t._t("default")],2)}),[],!1,null,null,null);e.default=component.exports},489:function(t,e){t.exports=function(source,t){if(null==source)return{};var e,i,r={},n=Object.keys(source);for(i=0;i<n.length;i++)e=n[i],t.indexOf(e)>=0||(r[e]=source[e]);return r},t.exports.__esModule=!0,t.exports.default=t.exports},490:function(t,e,r){"use strict";r(26),r(159),r(121);var n=r(20),o={props:{definition:{key:"definition",required:!0,type:null}},setup:function(t,e){var r=t,o=Object(n.computed)((function(){return r.definition.icon[0]})),c=Object(n.computed)((function(){return r.definition.icon[1]}));return{svgPathData:Object(n.computed)((function(){return r.definition.icon[4].toString()})),viewBox:Object(n.computed)((function(){return"0 0 ".concat(o.value," ").concat(c.value)}))}}},c=o,l=r(53),component=Object(l.a)(c,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("svg",{attrs:{xmlns:"http://www.w3.org/2000/svg",viewBox:t.viewBox,"aria-hidden":"true",focusable:"false",role:"img"}},[r("path",{attrs:{fill:"currentColor",d:t.svgPathData}})])}),[],!1,null,null,null);e.a=component.exports},494:function(t,e,r){"use strict";var n=r(490),o=r(495),c={setup:function(t,e){return{definition:o.definition}}};c.components=Object.assign({FontAwesomeSvg:n.a},c.components);var l=c,d=r(53),component=Object(d.a)(l,(function(){var t=this,e=t.$createElement;return(t._self._c||e)("FontAwesomeSvg",{staticClass:"h-5 w-5 animate-spin",attrs:{definition:t.definition}})}),[],!1,null,null,null);e.a=component.exports},495:function(t,e,r){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n="spinner",o=[],c="f110",l="M304 48c0-26.5-21.5-48-48-48s-48 21.5-48 48s21.5 48 48 48s48-21.5 48-48zm0 416c0-26.5-21.5-48-48-48s-48 21.5-48 48s21.5 48 48 48s48-21.5 48-48zM48 304c26.5 0 48-21.5 48-48s-21.5-48-48-48s-48 21.5-48 48s21.5 48 48 48zm464-48c0-26.5-21.5-48-48-48s-48 21.5-48 48s21.5 48 48 48s48-21.5 48-48zM142.9 437c18.7-18.7 18.7-49.1 0-67.9s-49.1-18.7-67.9 0s-18.7 49.1 0 67.9s49.1 18.7 67.9 0zm0-294.2c18.7-18.7 18.7-49.1 0-67.9S93.7 56.2 75 75s-18.7 49.1 0 67.9s49.1 18.7 67.9 0zM369.1 437c18.7 18.7 49.1 18.7 67.9 0s18.7-49.1 0-67.9s-49.1-18.7-67.9 0s-18.7 49.1 0 67.9z";e.definition={prefix:"fas",iconName:n,icon:[512,512,o,c,l]},e.faSpinner=e.definition,e.prefix="fas",e.iconName=n,e.width=512,e.height=512,e.ligatures=o,e.unicode=c,e.svgPathData=l,e.aliases=o},496:function(t,e,r){"use strict";var n=r(497),o=r(20);r(54);var c={props:{error:{key:"error",required:!0,type:null}}};c.setup=function(t,e){var r=t;return{alert:Object(o.computed)((function(){return"string"==typeof(t=r.error)?{title:"Error",message:t}:t instanceof Error||t instanceof Object&&"name"in t&&"message"in t?{title:t.name,message:t.message}:{title:"Error",message:String(t)};var t}))}},c.components=Object.assign({AlertError:n.a},c.components);var l=c,d=r(53),component=Object(d.a)(l,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("section",[r("AlertError",{scopedSlots:t._u([{key:"title",fn:function(){return[t._v("\n      "+t._s(t.alert.title)+"\n    ")]},proxy:!0},{key:"message",fn:function(){return[t._v("\n      "+t._s(t.alert.message)+"\n    ")]},proxy:!0}])})],1)}),[],!1,null,null,null);e.a=component.exports},497:function(t,e,r){"use strict";var n=r(498),o=r.n(n),c={setup:function(t,e){return{}}};c.components=Object.assign({XCircleSvg:o.a},c.components);var l=c,d=r(53),component=Object(d.a)(l,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"rounded-md bg-red-50 p-4 shadow",attrs:{role:"alert"}},[r("div",{staticClass:"flex space-x-3"},[r("div",{staticClass:"flex-shrink-0"},[r("XCircleSvg",{staticClass:"h-5 w-5 text-red-500"})],1),t._v(" "),r("div",{staticClass:"space-y-2"},[r("h3",{staticClass:"text-sm font-medium leading-5 text-red-800"},[t._t("title")],2),t._v(" "),r("div",{staticClass:"text-sm leading-5 text-red-700"},[t._t("message")],2)])])])}),[],!1,null,null,null);e.a=component.exports},498:function(t,e,r){r(45),r(37),r(44),r(26),r(62),r(38),r(63);var n=r(469),o=r(470),c=["class","staticClass","style","staticStyle","attrs"];function l(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(object);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,r)}return e}r(121),t.exports={functional:!0,render:function(t,e){var r=e._c,data=(e._v,e.data),d=e.children,f=void 0===d?[]:d,v=data.class,y=data.staticClass,style=data.style,m=data.staticStyle,O=data.attrs,h=void 0===O?{}:O,x=o(data,c);return r("svg",function(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?l(Object(source),!0).forEach((function(e){n(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):l(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}({class:[v,y],style:[style,m],attrs:Object.assign({xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",fill:"currentColor","aria-hidden":"true"},h)},x),f.concat([r("path",{attrs:{"fill-rule":"evenodd",d:"M10 18a8 8 0 100-16 8 8 0 000 16zM8.28 7.22a.75.75 0 00-1.06 1.06L8.94 10l-1.72 1.72a.75.75 0 101.06 1.06L10 11.06l1.72 1.72a.75.75 0 101.06-1.06L11.06 10l1.72-1.72a.75.75 0 00-1.06-1.06L10 8.94 8.28 7.22z","clip-rule":"evenodd"}})]))}}},499:function(t,e,r){"use strict";r.d(e,"a",(function(){return c}));var n=r(20),o=r(122);function c(){var t=Object(o.a)();return Object(n.computed)((function(){return t.accessToken}))}},501:function(t,e,r){"use strict";function n(t){if(null===t||!0===t||!1===t)return NaN;var e=Number(t);return isNaN(e)?e:e<0?Math.ceil(e):Math.floor(e)}r.d(e,"a",(function(){return n}))},502:function(t,e,r){r(45),r(37),r(44),r(26),r(62),r(38),r(63);var n=r(469),o=r(470),c=["class","staticClass","style","staticStyle","attrs"];function l(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(object);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,r)}return e}r(121),t.exports={functional:!0,render:function(t,e){var r=e._c,data=(e._v,e.data),d=e.children,f=void 0===d?[]:d,v=data.class,y=data.staticClass,style=data.style,m=data.staticStyle,O=data.attrs,h=void 0===O?{}:O,x=o(data,c);return r("svg",function(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?l(Object(source),!0).forEach((function(e){n(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):l(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}({class:[v,y],style:[style,m],attrs:Object.assign({xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",fill:"currentColor","aria-hidden":"true"},h)},x),f.concat([r("path",{attrs:{"fill-rule":"evenodd",d:"M12.79 5.23a.75.75 0 01-.02 1.06L8.832 10l3.938 3.71a.75.75 0 11-1.04 1.08l-4.5-4.25a.75.75 0 010-1.08l4.5-4.25a.75.75 0 011.06.02z","clip-rule":"evenodd"}})]))}}},505:function(t,e,r){"use strict";r.r(e);var n=r(496),o=r(494),c={props:{query:{key:"query",required:!0,type:null}},setup:function(t,e){var r=t.query;return{isLoading:r.isLoading,isError:r.isError,error:r.error,data:r.data}}};c.components=Object.assign({LoadingSpinner:o.a,GenericError:n.a},c.components);var l=c,d=r(53),f=Object(d.a)(l,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",[r("ClientOnly",[t.isLoading?[t._t("loading",(function(){return[r("LoadingSpinner")]}))]:t.isError?[t._t("error",(function(){return[r("GenericError",{attrs:{error:t.error}})]}),null,{error:t.error})]:[t._t("success",(function(){return[r("pre",[t._v(t._s(JSON.stringify(t.data,null,2)))])]}),null,{data:t.data})]],2)],1)}),[],!1,null,null,null).exports,v=Object(d.a)(f,undefined,undefined,!1,null,null,null);e.default=v.exports},506:function(t,e,r){"use strict";r.d(e,"a",(function(){return c}));var n=r(485);function o(t){return o="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},o(t)}function c(t){Object(n.a)(1,arguments);var e=Object.prototype.toString.call(t);return t instanceof Date||"object"===o(t)&&"[object Date]"===e?new Date(t.getTime()):"number"==typeof t||"[object Number]"===e?new Date(t):("string"!=typeof t&&"[object String]"!==e||"undefined"==typeof console||(console.warn("Starting with v2.0.0-beta.1 date-fns doesn't accept strings as date arguments. Please use `parseISO` to parse strings. See: https://github.com/date-fns/date-fns/blob/master/docs/upgradeGuide.md#string-arguments"),console.warn((new Error).stack)),new Date(NaN))}},511:function(t,e,r){"use strict";r.r(e);r(121);var n=r(20),o=Object(n.defineComponent)({inheritAttrs:!1});o.props={displayType:{key:"displayType",required:!1,type:null,default:"normal"}},o.setup=function(t,e){var text="no-underline antialiased font-body text-base leading-6 font-medium",r="focus:outline-none disabled:cursor-not-allowed disabled:opacity-50",base="".concat(r," ").concat(text," ").concat("transform transition duration-200 hover:-translate-y-px"," inline-flex"),o={normal:"".concat(base," text-blue-500 hover:text-blue-700 focus:text-blue-800"),dark:"".concat(base," text-white hover:text-gray-400 focus:text-gray-400"),gray:"".concat(base," text-gray-500 hover:text-prime-indigo focus:text-prime-indigo"),primary:"".concat(base," text-blue-500 hover:text-teal-500"),"primary-prime":"".concat(base," text-prime-indigo hover:text-indigo-400 focus:text-indigo-400"),secondary:"".concat(base," text-prime-navy hover:text-prime-indigo focus:text-prime-indigo"),none:"".concat(r," ").concat(text," inline-flex")},c=t;return{displayTypeClass:Object(n.computed)((function(){return o[c.displayType]}))}};var c=o,l=r(53),component=Object(l.a)(c,(function(){var t=this,e=t.$createElement;return(t._self._c||e)("NuxtLink",t._g(t._b({class:t.displayTypeClass},"NuxtLink",t.$attrs,!1),t.$listeners),[t._t("default")],2)}),[],!1,null,null,null);e.default=component.exports},525:function(t,e,r){"use strict";var n=r(502),o=r.n(n),c={};c.props={link:{key:"link",required:!1,type:null,default:"."},text:{key:"text",required:!1,type:String,default:"Back"}},c.setup=function(t,e){return{}},c.components=Object.assign({ChevronLeftSvg:o.a},c.components);var l=c,d=r(53),component=Object(d.a)(l,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",[t.link?r("BaseButton",{attrs:{shape:"rectangle","display-type":"light",size:"even",to:t.link}},[r("ChevronLeftSvg",{staticClass:"-ml-1 h-auto w-5"}),t._v(" "),r("span",[t._v(t._s(t.text))])],1):r("BaseButton",{attrs:{shape:"rectangle","display-type":"light",size:"even",to:t.link,append:""}},[r("ChevronLeftSvg",{staticClass:"-ml-1 h-auto w-5"}),t._v(" "),r("span",[t._v(t._s(t.text))])],1)],1)}),[],!1,null,null,null);e.a=component.exports;installComponents(component,{BaseButton:r(308).default})},531:function(t,e,r){"use strict";r.d(e,"b",(function(){return n})),r.d(e,"a",(function(){return o})),r.d(e,"c",(function(){return c}));Math.pow(10,8);var n=6e4,o=36e5,c=1e3},542:function(t,e,r){"use strict";var n=r(20),o={props:{value:{key:"value",required:!0,type:null},format:{key:"format",required:!1,type:null,default:"full"}},setup:function(t,e){var r={full:function(t){return t.toLocaleString()},date:function(t){return t.toLocaleDateString()}},o=t,c=Object(n.computed)((function(){return r[o.format]}));return{dateTimeValue:Object(n.computed)((function(){return o.value.toISOString()})),display:Object(n.computed)((function(){return c.value(o.value)}))}}},c=o,l=r(53),component=Object(l.a)(c,(function(){var t=this,e=t.$createElement;return(t._self._c||e)("time",{attrs:{datetime:t.dateTimeValue}},[t._v("\n  "+t._s(t.display)+"\n")])}),[],!1,null,null,null);e.a=component.exports},657:function(t,e,r){"use strict";r.d(e,"a",(function(){return l}));var n=r(531),o=r(485),c=r(501);function l(t,e){var r;Object(o.a)(1,arguments);var n=Object(c.a)(null!==(r=null==e?void 0:e.additionalDigits)&&void 0!==r?r:2);if(2!==n&&1!==n&&0!==n)throw new RangeError("additionalDigits must be 0, 1 or 2");if("string"!=typeof t&&"[object String]"!==Object.prototype.toString.call(t))return new Date(NaN);var l,d=m(t);if(d.date){var f=O(d.date,n);l=h(f.restDateString,f.year)}if(!l||isNaN(l.getTime()))return new Date(NaN);var v,y=l.getTime(),time=0;if(d.time&&(time=w(d.time),isNaN(time)))return new Date(NaN);if(!d.timezone){var x=new Date(y+time),j=new Date(0);return j.setFullYear(x.getUTCFullYear(),x.getUTCMonth(),x.getUTCDate()),j.setHours(x.getUTCHours(),x.getUTCMinutes(),x.getUTCSeconds(),x.getUTCMilliseconds()),j}return v=_(d.timezone),isNaN(v)?new Date(NaN):new Date(y+time+v)}var d={dateTimeDelimiter:/[T ]/,timeZoneDelimiter:/[Z ]/i,timezone:/([Z+-].*)$/},f=/^-?(?:(\d{3})|(\d{2})(?:-?(\d{2}))?|W(\d{2})(?:-?(\d{1}))?|)$/,v=/^(\d{2}(?:[.,]\d*)?)(?::?(\d{2}(?:[.,]\d*)?))?(?::?(\d{2}(?:[.,]\d*)?))?$/,y=/^([+-])(\d{2})(?::?(\d{2}))?$/;function m(t){var e,r={},n=t.split(d.dateTimeDelimiter);if(n.length>2)return r;if(/:/.test(n[0])?e=n[0]:(r.date=n[0],e=n[1],d.timeZoneDelimiter.test(r.date)&&(r.date=t.split(d.timeZoneDelimiter)[0],e=t.substr(r.date.length,t.length))),e){var o=d.timezone.exec(e);o?(r.time=e.replace(o[1],""),r.timezone=o[1]):r.time=e}return r}function O(t,e){var r=new RegExp("^(?:(\\d{4}|[+-]\\d{"+(4+e)+"})|(\\d{2}|[+-]\\d{"+(2+e)+"})$)"),n=t.match(r);if(!n)return{year:NaN,restDateString:""};var o=n[1]?parseInt(n[1]):null,c=n[2]?parseInt(n[2]):null;return{year:null===c?o:100*c,restDateString:t.slice((n[1]||n[2]).length)}}function h(t,e){if(null===e)return new Date(NaN);var r=t.match(f);if(!r)return new Date(NaN);var n=!!r[4],o=x(r[1]),c=x(r[2])-1,l=x(r[3]),d=x(r[4]),v=x(r[5])-1;if(n)return function(t,e,r){return e>=1&&e<=53&&r>=0&&r<=6}(0,d,v)?function(t,e,r){var n=new Date(0);n.setUTCFullYear(t,0,4);var o=n.getUTCDay()||7,c=7*(e-1)+r+1-o;return n.setUTCDate(n.getUTCDate()+c),n}(e,d,v):new Date(NaN);var y=new Date(0);return function(t,e,r){return e>=0&&e<=11&&r>=1&&r<=(S[e]||(C(t)?29:28))}(e,c,l)&&function(t,e){return e>=1&&e<=(C(t)?366:365)}(e,o)?(y.setUTCFullYear(e,c,Math.max(o,l)),y):new Date(NaN)}function x(t){return t?parseInt(t):1}function w(t){var e=t.match(v);if(!e)return NaN;var r=j(e[1]),o=j(e[2]),c=j(e[3]);return function(t,e,r){if(24===t)return 0===e&&0===r;return r>=0&&r<60&&e>=0&&e<60&&t>=0&&t<25}(r,o,c)?r*n.a+o*n.b+1e3*c:NaN}function j(t){return t&&parseFloat(t.replace(",","."))||0}function _(t){if("Z"===t)return 0;var e=t.match(y);if(!e)return 0;var r="+"===e[1]?-1:1,o=parseInt(e[2]),c=e[3]&&parseInt(e[3])||0;return function(t,e){return e>=0&&e<=59}(0,c)?r*(o*n.a+c*n.b):NaN}var S=[31,null,31,30,31,30,31,31,30,31,30,31];function C(t){return t%400==0||t%4==0&&t%100!=0}},705:function(t,e,r){"use strict";var n=r(542),o=r(657),c=r(20),l={};l.props={value:{key:"value",required:!0,type:null},format:{key:"format",required:!1,type:String}},l.setup=function(t,e){var r=t;return{date:Object(c.computed)((function(){return Object(o.a)(r.value.value)}))}},l.components=Object.assign({DateDisplay:n.a},l.components);var d=l,f=r(53),component=Object(f.a)(d,(function(){var t=this,e=t.$createElement;return(t._self._c||e)("DateDisplay",{attrs:{value:t.date,format:t.format}})}),[],!1,null,null,null);e.a=component.exports},719:function(t,e,r){"use strict";var n={};n.props={links:{key:"links",required:!0,type:Array},newLink:{key:"newLink",required:!1,type:null}},n.setup=function(t,e){return{}};var o=n,c=r(53),component=Object(c.a)(o,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("nav",{staticClass:"bg-white shadow"},[r("div",{staticClass:"mx-auto max-w-8xl sm:px-6 md:px-8"},[r("ul",{staticClass:"flex items-center space-x-4 overflow-x-auto"},[t._l(t.links,(function(link){return r("li",{key:link.name,staticClass:"text-gray-500 hover:text-prime-navy"},[r("BaseLink",{staticClass:"border-b-2 border-transparent p-2 hover:border-prime-navy focus:border-prime-navy focus:text-prime-navy focus:outline-none",attrs:{"exact-active-class":"text-prime-navy border-prime-navy focus:text-prime-navy focus:border-prime-navy",to:link.to,"display-type":"none"}},[r("BaseTypography",{staticClass:"whitespace-nowrap",attrs:{variant:"p2"}},[t._v("\n            "+t._s(link.name)+"\n          ")])],1)],1)})),t._v(" "),t.newLink?r("li",[r("BaseIcon",{attrs:{color:"light",size:"small",to:t.newLink}},[r("PlusSvg",{staticClass:"h-auto w-4 hover:text-prime-navy focus:text-prime-navy"})],1)],1):t._e()],2)])])}),[],!1,null,null,null);e.a=component.exports;installComponents(component,{BaseTypography:r(471).default,BaseLink:r(511).default,BaseIcon:r(487).default})},720:function(t,e,r){"use strict";var n=r(53),component=Object(n.a)({},(function(){var t=this,e=t.$createElement;return(t._self._c||e)("div",{staticClass:"absolute left-0 top-28 w-full"},[t._t("default")],2)}),[],!1,null,null,null);e.a=component.exports},758:function(t,e,r){r(45),r(37),r(44),r(26),r(62),r(38),r(63);var n=r(469),o=r(470),c=["class","staticClass","style","staticStyle","attrs"];function l(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(object);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,r)}return e}r(121),t.exports={functional:!0,render:function(t,e){var r=e._c,data=(e._v,e.data),d=e.children,f=void 0===d?[]:d,v=data.class,y=data.staticClass,style=data.style,m=data.staticStyle,O=data.attrs,h=void 0===O?{}:O,x=o(data,c);return r("svg",function(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?l(Object(source),!0).forEach((function(e){n(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):l(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}({class:[v,y],style:[style,m],attrs:Object.assign({xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",fill:"currentColor","aria-hidden":"true"},h)},x),f.concat([r("path",{attrs:{"fill-rule":"evenodd",d:"M2 10a.75.75 0 01.75-.75h12.59l-2.1-1.95a.75.75 0 111.02-1.1l3.5 3.25a.75.75 0 010 1.1l-3.5 3.25a.75.75 0 11-1.02-1.1l2.1-1.95H2.75A.75.75 0 012 10z","clip-rule":"evenodd"}})]))}}},820:function(t,e,r){"use strict";r.d(e,"a",(function(){return x}));r(45),r(37),r(44),r(62),r(38),r(63);var n=r(28),o=r(12),c=(r(26),r(48),r(46),r(869)),l=r(20),d=r(197),f=r(472),v=r(473),y=r(474);function m(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(object);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,r)}return e}function O(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?m(Object(source),!0).forEach((function(e){Object(n.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):m(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}var h=new c.ServiceClient(y.a),x={create:function(t,e){var r=Object(v.a)(),n=Object(d.d)();function c(){return(c=Object(o.a)(regeneratorRuntime.mark((function n(o){return regeneratorRuntime.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,h.create(O({accountId:{value:t.value},subscriptionId:{value:e.value}},o),r.value);case 2:return n.abrupt("return",n.sent);case 3:case"end":return n.stop()}}),n)})))).apply(this,arguments)}return Object(d.b)((function(t){return c.apply(this,arguments)}),{onSuccess:function(){n.invalidateQueries([f.a,"accounts",t,"subscriptions",e,"products"],{exact:!0})}})},read:function(t,e,r){var n=Object(v.a)();function c(){return(c=Object(o.a)(regeneratorRuntime.mark((function o(){var c,l;return regeneratorRuntime.wrap((function(o){for(;;)switch(o.prev=o.next){case 0:return o.next=2,h.read({accountId:{value:t.value},subscriptionId:{value:e.value},productId:{value:r.value}},n.value);case 2:return c=o.sent,l=c.response.value,o.abrupt("return",l);case 5:case"end":return o.stop()}}),o)})))).apply(this,arguments)}return Object(d.c)([f.a,"accounts",t,"subscriptions",e,"products",r],(function(){return c.apply(this,arguments)}))},update:function(t,e,r){var n=Object(v.a)(),c=Object(d.d)();function l(){return(l=Object(o.a)(regeneratorRuntime.mark((function o(c){return regeneratorRuntime.wrap((function(o){for(;;)switch(o.prev=o.next){case 0:return o.next=2,h.update(O({accountId:{value:t.value},subscriptionId:{value:e.value},productId:{value:r.value}},c),n.value);case 2:return o.abrupt("return",o.sent);case 3:case"end":return o.stop()}}),o)})))).apply(this,arguments)}return Object(d.b)((function(t){return l.apply(this,arguments)}),{onSuccess:function(){for(var n=0,o=[[f.a,"accounts",t,"subscriptions",e,"products"],[f.a,"accounts",t,"subscriptions",e,"products",r]];n<o.length;n++){var l=o[n];c.invalidateQueries(l,{exact:!0})}}})},list:function(t,e){var r=Object(v.a)();function n(){return(n=Object(o.a)(regeneratorRuntime.mark((function n(){var o,c;return regeneratorRuntime.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:if(t.value&&e.value){n.next=2;break}throw new Error("Should not have been called");case 2:return n.next=4,h.list({accountId:{value:t.value},subscriptionId:{value:e.value}},r.value);case 4:return o=n.sent,c=o.response.values,n.abrupt("return",c);case 7:case"end":return n.stop()}}),n)})))).apply(this,arguments)}return Object(d.c)([f.a,"accounts",t,"subscriptions",e,"products"],(function(){return n.apply(this,arguments)}),{enabled:Object(l.computed)((function(){return void 0!==t.value&&void 0!==e.value}))})}}},949:function(t,e,r){"use strict";var n=r(758),o=r.n(n),c=r(705),l=r(492),d=r(20),f={props:{value:{key:"value",required:!0,type:null}},setup:function(t,e){var r=t;return{start:Object(d.computed)((function(){return r.value.start||l.IsoDateTime.create()})),end:Object(d.computed)((function(){return r.value.end||l.IsoDateTime.create()}))}}};f.components=Object.assign({IsoDateTimeDisplay:c.a,ArrowRightSvg:o.a},f.components);var v=f,y=r(53),component=Object(y.a)(v,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("span",{staticClass:"flex items-center space-x-2"},[r("IsoDateTimeDisplay",{attrs:{format:"date",value:t.start}}),t._v(" "),r("ArrowRightSvg",{staticClass:"h-auto w-4"}),t._v(" "),r("IsoDateTimeDisplay",{attrs:{format:"date",value:t.end}})],1)}),[],!1,null,null,null);e.a=component.exports},958:function(t,e,r){r(45),r(37),r(44),r(26),r(62),r(38),r(63);var n=r(469),o=r(470),c=["class","staticClass","style","staticStyle","attrs"];function l(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(object);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,r)}return e}r(121),t.exports={functional:!0,render:function(t,e){var r=e._c,data=(e._v,e.data),d=e.children,f=void 0===d?[]:d,v=data.class,y=data.staticClass,style=data.style,m=data.staticStyle,O=data.attrs,h=void 0===O?{}:O,x=o(data,c);return r("svg",function(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?l(Object(source),!0).forEach((function(e){n(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):l(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}({class:[v,y],style:[style,m],attrs:Object.assign({xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",fill:"currentColor","aria-hidden":"true"},h)},x),f.concat([r("path",{attrs:{"fill-rule":"evenodd",d:"M5.75 2a.75.75 0 01.75.75V4h7V2.75a.75.75 0 011.5 0V4h.25A2.75 2.75 0 0118 6.75v8.5A2.75 2.75 0 0115.25 18H4.75A2.75 2.75 0 012 15.25v-8.5A2.75 2.75 0 014.75 4H5V2.75A.75.75 0 015.75 2zm-1 5.5c-.69 0-1.25.56-1.25 1.25v6.5c0 .69.56 1.25 1.25 1.25h10.5c.69 0 1.25-.56 1.25-1.25v-6.5c0-.69-.56-1.25-1.25-1.25H4.75z","clip-rule":"evenodd"}})]))}}}}]);