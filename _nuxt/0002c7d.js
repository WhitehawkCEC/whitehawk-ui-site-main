(window.webpackJsonp=window.webpackJsonp||[]).push([[173,62,68,74],{1030:function(t,e,n){n(47),n(38),n(46),n(24),n(63),n(39),n(64);var r=n(474),c=n(475),o=["class","staticClass","style","staticStyle","attrs"];function l(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(object);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,n)}return e}n(121),t.exports={functional:!0,render:function(t,e){var n=e._c,data=(e._v,e.data),f=e.children,d=void 0===f?[]:f,v=data.class,m=data.staticClass,style=data.style,y=data.staticStyle,O=data.attrs,j=void 0===O?{}:O,h=c(data,o);return n("svg",function(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?l(Object(source),!0).forEach((function(e){r(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):l(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}({class:[v,m],style:[style,y],attrs:Object.assign({xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",fill:"currentColor","aria-hidden":"true"},j)},h),d.concat([n("path",{attrs:{"fill-rule":"evenodd",d:"M1 6a3 3 0 013-3h12a3 3 0 013 3v8a3 3 0 01-3 3H4a3 3 0 01-3-3V6zm4 1.5a2 2 0 114 0 2 2 0 01-4 0zm2 3a4 4 0 00-3.665 2.395.75.75 0 00.416 1A8.98 8.98 0 007 14.5a8.98 8.98 0 003.249-.604.75.75 0 00.416-1.001A4.001 4.001 0 007 10.5zm5-3.75a.75.75 0 01.75-.75h2.5a.75.75 0 010 1.5h-2.5a.75.75 0 01-.75-.75zm0 6.5a.75.75 0 01.75-.75h2.5a.75.75 0 010 1.5h-2.5a.75.75 0 01-.75-.75zm.75-4a.75.75 0 000 1.5h2.5a.75.75 0 000-1.5h-2.5z","clip-rule":"evenodd"}})]))}}},1171:function(t,e,n){"use strict";n.d(e,"a",(function(){return j}));n(47),n(38),n(46),n(63),n(39),n(64);var r=n(28),c=n(10),o=(n(24),n(49),n(48),n(1340)),l=n(197),f=n(471),d=n(472),v=n(473);function m(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(object);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,n)}return e}function y(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?m(Object(source),!0).forEach((function(e){Object(r.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):m(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}var O=new o.ServiceClient(v.a),j={create:function(t,e,n){var r=Object(d.a)(),o=Object(l.d)();function v(){return(v=Object(c.a)(regeneratorRuntime.mark((function c(o){return regeneratorRuntime.wrap((function(c){for(;;)switch(c.prev=c.next){case 0:return c.next=2,O.create(y({accountId:{value:t.value},subscriptionId:{value:e.value},productId:{value:n.value}},o),r.value);case 2:return c.abrupt("return",c.sent);case 3:case"end":return c.stop()}}),c)})))).apply(this,arguments)}return Object(l.b)((function(t){return v.apply(this,arguments)}),{onSuccess:function(){o.invalidateQueries([f.a,"accounts",t,"subscriptions",e,"products",n,"license-batches"],{exact:!0})}})},read:function(t,e,n,r){var o=Object(d.a)();function v(){return(v=Object(c.a)(regeneratorRuntime.mark((function c(){var l,f;return regeneratorRuntime.wrap((function(c){for(;;)switch(c.prev=c.next){case 0:return c.next=2,O.read({accountId:{value:t.value},subscriptionId:{value:e.value},productId:{value:n.value},batchId:{value:r.value}},o.value);case 2:return l=c.sent,f=l.response,c.abrupt("return",f);case 5:case"end":return c.stop()}}),c)})))).apply(this,arguments)}return Object(l.c)([f.a,"accounts",t,"subscriptions",e,"products",n,"license-batches",r],(function(){return v.apply(this,arguments)}))},list:function(t,e,n){var r=Object(d.a)();function o(){return(o=Object(c.a)(regeneratorRuntime.mark((function c(){var o,l;return regeneratorRuntime.wrap((function(c){for(;;)switch(c.prev=c.next){case 0:return c.next=2,O.list({accountId:{value:t.value},subscriptionId:{value:e.value},productId:{value:n.value}},r.value);case 2:return o=c.sent,l=o.response,c.abrupt("return",l.values);case 5:case"end":return c.stop()}}),c)})))).apply(this,arguments)}return Object(l.c)([f.a,"accounts",t,"subscriptions",e,"products",n,"license-batches"],(function(){return o.apply(this,arguments)}))}}},1192:function(t,e,n){"use strict";var r=n(916),c=n.n(r),o=n(1030),l=n.n(o),f=n(931),d=n(903),v=n(1031),m=n(489),y=n(477),O=n(20),j={props:{value:{key:"value",required:!0,type:null}},setup:function(t,e){var n=t;return{id:Object(O.computed)((function(){return n.value.id||y.Ulid.create()})),validity:Object(O.computed)((function(){return n.value.validity||m.DateRange.create()})),counts:Object(O.computed)((function(){return n.value.counts||v.LicenseTypeMapLicenseUsage.create()}))}}};j.components=Object.assign({IdentificationSvg:l.a,CalendarSvg:c.a,DateRangeDisplay:d.a,AggregateLicenseDisplay:f.a},j.components);var h=j,x=n(55),component=Object(x.a)(h,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"flex flex-col space-y-4"},[n("div",{staticClass:"flex flex-col space-y-2 lg:flex-row lg:justify-between lg:space-y-0"},[n("div",{staticClass:"flex items-center space-x-2"},[n("IdentificationSvg",{staticClass:"h-5 w-5 text-indigo-600 lg:h-6 lg:w-6"}),t._v(" "),n("BaseOverline",{staticClass:"uppercase"},[t._v("\n        "+t._s(t.id.value)+"\n      ")])],1),t._v(" "),n("div",{staticClass:"flex items-center space-x-2"},[n("CalendarSvg",{staticClass:"h-5 w-5 text-indigo-600 lg:h-6 lg:w-6"}),t._v(" "),n("BaseTypography",{staticClass:"uppercase",attrs:{variant:"overline"}},[n("DateRangeDisplay",{attrs:{value:t.validity}})],1)],1)]),t._v(" "),n("AggregateLicenseDisplay",{attrs:{"license-usage":t.counts}})],1)}),[],!1,null,null,null);e.a=component.exports;installComponents(component,{BaseOverline:n(532).default,BaseTypography:n(476).default})},2278:function(t,e,n){"use strict";n.r(e);var r=n(1192),c=n(1031),o=n(20),l=n(1171),f=n(481),d={setup:function(t,e){var n=Object(f.b)("id"),r=Object(f.b)("subscriptionId"),d=Object(f.b)("productId"),v=Object(f.b)("batchId"),m=l.a.read(n,r,d,v),y=Object(o.computed)((function(){var t;return(null===(t=m.data.value)||void 0===t?void 0:t.value)||c.LicenseBatchUsage.create()}));return{licenseBatch:m,usage:y}}};d.components=Object.assign({LicenseBatchUsageDisplay:r.a},d.components);var v=d,m=n(55),component=Object(m.a)(v,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("section",[n("BaseVueQuery",{attrs:{query:t.licenseBatch},scopedSlots:t._u([{key:"success",fn:function(){return[n("div",{staticClass:"flex flex-col space-y-4"},[n("LicenseBatchUsageDisplay",{attrs:{value:t.usage}})],1)]},proxy:!0}])})],1)}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{BaseVueQuery:n(505).default})},471:function(t,e,n){"use strict";n.d(e,"a",(function(){return r}));var r="client-portal"},472:function(t,e,n){"use strict";n.d(e,"a",(function(){return l}));var r=n(28),c=n(20),o=n(500);function l(){var t=Object(o.a)();return Object(c.computed)((function(){if(t.value)return{meta:Object(r.a)({},"jwt",t.value)}}))}},473:function(t,e,n){"use strict";n.d(e,"a",(function(){return o}));var r=n(2299),c=n(198),o=new r.a({baseUrl:c.b,format:"binary"})},476:function(t,e,n){"use strict";n.r(e);var r=n(20),c=Object(r.defineComponent)({inheritAttrs:!1});c.props={variant:{key:"variant",required:!0,type:null},component:{key:"component",required:!1,type:null,default:"span"}},c.setup=function(t,e){var n="antialiased",c={h1:"".concat(n," font-display text-4xl font-semibold leading-snug tracking-wide sm:text-5xl md:text-6xl"),h2:"".concat(n," font-display text-3xl font-semibold leading-9 tracking-normal sm:text-5xl sm:leading-10"),h3:"".concat(n," font-display text-3xl font-medium leading-8 tracking-normal sm:text-4xl sm:leading-10"),h4:"".concat(n," font-display text-2xl font-medium leading-8 tracking-wide sm:text-3xl sm:leading-9"),h5:"".concat(n," font-display text-2xl font-medium leading-6 tracking-normal"),h6:"".concat(n," font-display text-xl font-semibold leading-7 tracking-wide"),p1:"".concat(n," font-body text-base font-normal leading-7 tracking-wide"),p2:"".concat(n," font-body text-sm font-normal leading-6 tracking-normal"),subtitle1:"".concat(n," font-body text-lg font-normal leading-6 tracking-wide sm:text-xl"),subtitle2:"".concat(n," font-body text-xs font-medium leading-5 tracking-wide"),subtitle3:"".concat(n," font-display text-lg font-medium leading-5 tracking-wide"),overline:"".concat(n," font-display text-xs font-medium tracking-widest"),button:"".concat(n," font-body text-xs font-medium tracking-wider sm:text-sm xl:tracking-wide"),data:"".concat(n," font-mono text-xs font-normal tracking-wider sm:text-sm xl:tracking-wide")},o=t;return{displayTypeClass:Object(r.computed)((function(){return c[o.variant]}))}};var o=c,l=n(55),component=Object(l.a)(o,(function(){var t=this,e=t.$createElement;return(t._self._c||e)(t.component,t._g(t._b({tag:"Component",class:t.displayTypeClass},"Component",t.$attrs,!1),t.$listeners),[t._t("default")],2)}),[],!1,null,null,null);e.default=component.exports},481:function(t,e,n){"use strict";n.d(e,"a",(function(){return f})),n.d(e,"d",(function(){return d})),n.d(e,"b",(function(){return v})),n.d(e,"c",(function(){return m}));var r=n(28),c=(n(84),n(50),n(103),n(47),n(38),n(46),n(24),n(63),n(39),n(64),n(20));function o(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(object);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,n)}return e}function l(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?o(Object(source),!0).forEach((function(e){Object(r.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):o(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}function f(){var t=Object(c.getCurrentInstance)();if(!t)throw new Error("Not in setup()?");return Object(c.computed)((function(){return t.proxy.$route}))}function d(){var t=Object(c.getCurrentInstance)();if(!t)throw new Error("Not in setup()?");return t.proxy.$router}function v(t){var e=f();return Object(c.computed)((function(){var n=e.value.params[t];if(!n)throw new Error("Missing param: ".concat(t));return n}))}function m(t,e){var n,o=f(),v=d();return Object(c.computed)({get:function(){return o.value.query[t]||e},set:function(e){clearTimeout(n),n=setTimeout((function(){v.replace({query:l(l({},o.value.query),{},Object(r.a)({},t,e))})}),300)}})}},487:function(t,e,n){"use strict";function r(t,e){if(e.length<t)throw new TypeError(t+" argument"+(t>1?"s":"")+" required, but only "+e.length+" present")}n.d(e,"a",(function(){return r}))},490:function(t,e,n){"use strict";n(24),n(159),n(121);var r=n(20),c={props:{definition:{key:"definition",required:!0,type:null}},setup:function(t,e){var n=t,c=Object(r.computed)((function(){return n.definition.icon[0]})),o=Object(r.computed)((function(){return n.definition.icon[1]}));return{svgPathData:Object(r.computed)((function(){return n.definition.icon[4].toString()})),viewBox:Object(r.computed)((function(){return"0 0 ".concat(c.value," ").concat(o.value)}))}}},o=c,l=n(55),component=Object(l.a)(o,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("svg",{attrs:{xmlns:"http://www.w3.org/2000/svg",viewBox:t.viewBox,"aria-hidden":"true",focusable:"false",role:"img"}},[n("path",{attrs:{fill:"currentColor",d:t.svgPathData}})])}),[],!1,null,null,null);e.a=component.exports},491:function(t,e,n){"use strict";n.r(e);var r=n(55),component=Object(r.a)({},(function(){var t=this,e=t.$createElement;return(t._self._c||e)("div",{staticClass:"rounded-xl bg-white shadow"},[t._t("default")],2)}),[],!1,null,null,null);e.default=component.exports},493:function(t,e,n){"use strict";var r=n(490),c=n(497),o={setup:function(t,e){return{definition:c.definition}}};o.components=Object.assign({FontAwesomeSvg:r.a},o.components);var l=o,f=n(55),component=Object(f.a)(l,(function(){var t=this,e=t.$createElement;return(t._self._c||e)("FontAwesomeSvg",{staticClass:"h-5 w-5 animate-spin",attrs:{definition:t.definition}})}),[],!1,null,null,null);e.a=component.exports},495:function(t,e,n){"use strict";var r=n(496),c=n(20);n(42);var o={props:{error:{key:"error",required:!0,type:null}}};o.setup=function(t,e){var n=t;return{alert:Object(c.computed)((function(){return"string"==typeof(t=n.error)?{title:"Error",message:t}:t instanceof Error||t instanceof Object&&"name"in t&&"message"in t?{title:t.name,message:t.message}:{title:"Error",message:String(t)};var t}))}},o.components=Object.assign({AlertError:r.a},o.components);var l=o,f=n(55),component=Object(f.a)(l,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("section",[n("AlertError",{scopedSlots:t._u([{key:"title",fn:function(){return[t._v("\n      "+t._s(t.alert.title)+"\n    ")]},proxy:!0},{key:"message",fn:function(){return[t._v("\n      "+t._s(t.alert.message)+"\n    ")]},proxy:!0}])})],1)}),[],!1,null,null,null);e.a=component.exports},496:function(t,e,n){"use strict";var r=n(498),c=n.n(r),o={setup:function(t,e){return{}}};o.components=Object.assign({XCircleSvg:c.a},o.components);var l=o,f=n(55),component=Object(f.a)(l,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"rounded-md bg-red-50 p-4 shadow",attrs:{role:"alert"}},[n("div",{staticClass:"flex space-x-3"},[n("div",{staticClass:"flex-shrink-0"},[n("XCircleSvg",{staticClass:"h-5 w-5 text-red-500"})],1),t._v(" "),n("div",{staticClass:"space-y-2"},[n("h3",{staticClass:"text-sm font-medium leading-5 text-red-800"},[t._t("title")],2),t._v(" "),n("div",{staticClass:"text-sm leading-5 text-red-700"},[t._t("message")],2)])])])}),[],!1,null,null,null);e.a=component.exports},497:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r="spinner",c=[],o="f110",l="M304 48c0-26.5-21.5-48-48-48s-48 21.5-48 48s21.5 48 48 48s48-21.5 48-48zm0 416c0-26.5-21.5-48-48-48s-48 21.5-48 48s21.5 48 48 48s48-21.5 48-48zM48 304c26.5 0 48-21.5 48-48s-21.5-48-48-48s-48 21.5-48 48s21.5 48 48 48zm464-48c0-26.5-21.5-48-48-48s-48 21.5-48 48s21.5 48 48 48s48-21.5 48-48zM142.9 437c18.7-18.7 18.7-49.1 0-67.9s-49.1-18.7-67.9 0s-18.7 49.1 0 67.9s49.1 18.7 67.9 0zm0-294.2c18.7-18.7 18.7-49.1 0-67.9S93.7 56.2 75 75s-18.7 49.1 0 67.9s49.1 18.7 67.9 0zM369.1 437c18.7 18.7 49.1 18.7 67.9 0s18.7-49.1 0-67.9s-49.1-18.7-67.9 0s-18.7 49.1 0 67.9z";e.definition={prefix:"fas",iconName:r,icon:[512,512,c,o,l]},e.faSpinner=e.definition,e.prefix="fas",e.iconName=r,e.width=512,e.height=512,e.ligatures=c,e.unicode=o,e.svgPathData=l,e.aliases=c},498:function(t,e,n){n(47),n(38),n(46),n(24),n(63),n(39),n(64);var r=n(474),c=n(475),o=["class","staticClass","style","staticStyle","attrs"];function l(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(object);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,n)}return e}n(121),t.exports={functional:!0,render:function(t,e){var n=e._c,data=(e._v,e.data),f=e.children,d=void 0===f?[]:f,v=data.class,m=data.staticClass,style=data.style,y=data.staticStyle,O=data.attrs,j=void 0===O?{}:O,h=c(data,o);return n("svg",function(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?l(Object(source),!0).forEach((function(e){r(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):l(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}({class:[v,m],style:[style,y],attrs:Object.assign({xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",fill:"currentColor","aria-hidden":"true"},j)},h),d.concat([n("path",{attrs:{"fill-rule":"evenodd",d:"M10 18a8 8 0 100-16 8 8 0 000 16zM8.28 7.22a.75.75 0 00-1.06 1.06L8.94 10l-1.72 1.72a.75.75 0 101.06 1.06L10 11.06l1.72 1.72a.75.75 0 101.06-1.06L11.06 10l1.72-1.72a.75.75 0 00-1.06-1.06L10 8.94 8.28 7.22z","clip-rule":"evenodd"}})]))}}},500:function(t,e,n){"use strict";n.d(e,"a",(function(){return o}));var r=n(20),c=n(122);function o(){var t=Object(c.a)();return Object(r.computed)((function(){return t.accessToken}))}},503:function(t,e,n){"use strict";function r(t){if(null===t||!0===t||!1===t)return NaN;var e=Number(t);return isNaN(e)?e:e<0?Math.ceil(e):Math.floor(e)}n.d(e,"a",(function(){return r}))},505:function(t,e,n){"use strict";n.r(e);var r=n(495),c=n(493),o={props:{query:{key:"query",required:!0,type:null}},setup:function(t,e){var n=t.query;return{isLoading:n.isLoading,isError:n.isError,error:n.error,data:n.data}}};o.components=Object.assign({LoadingSpinner:c.a,GenericError:r.a},o.components);var l=o,f=n(55),d=Object(f.a)(l,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("ClientOnly",[t.isLoading?[t._t("loading",(function(){return[n("LoadingSpinner")]}))]:t.isError?[t._t("error",(function(){return[n("GenericError",{attrs:{error:t.error}})]}),null,{error:t.error})]:[t._t("success",(function(){return[n("pre",[t._v(t._s(JSON.stringify(t.data,null,2)))])]}),null,{data:t.data})]],2)],1)}),[],!1,null,null,null).exports,v=Object(f.a)(d,undefined,undefined,!1,null,null,null);e.default=v.exports},525:function(t,e,n){"use strict";n.d(e,"b",(function(){return r})),n.d(e,"a",(function(){return c})),n.d(e,"c",(function(){return o}));Math.pow(10,8);var r=6e4,c=36e5,o=1e3},532:function(t,e,n){"use strict";n.r(e);var r=n(55),component=Object(r.a)({},(function(){var t=this,e=t.$createElement;return(t._self._c||e)("span",{staticClass:"font-display text-xs font-medium tracking-widest antialiased"},[t._t("default")],2)}),[],!1,null,null,null);e.default=component.exports},534:function(t,e,n){"use strict";var r=n(20),c={props:{value:{key:"value",required:!0,type:null},format:{key:"format",required:!1,type:null,default:"full"}},setup:function(t,e){var n={full:function(t){return t.toLocaleString()},date:function(t){return t.toLocaleDateString()}},c=t,o=Object(r.computed)((function(){return n[c.format]}));return{dateTimeValue:Object(r.computed)((function(){return c.value.toISOString()})),display:Object(r.computed)((function(){return o.value(c.value)}))}}},o=c,l=n(55),component=Object(l.a)(o,(function(){var t=this,e=t.$createElement;return(t._self._c||e)("time",{attrs:{datetime:t.dateTimeValue}},[t._v("\n  "+t._s(t.display)+"\n")])}),[],!1,null,null,null);e.a=component.exports},633:function(t,e,n){"use strict";n.d(e,"a",(function(){return l}));var r=n(525),c=n(487),o=n(503);function l(t,e){var n;Object(c.a)(1,arguments);var r=Object(o.a)(null!==(n=null==e?void 0:e.additionalDigits)&&void 0!==n?n:2);if(2!==r&&1!==r&&0!==r)throw new RangeError("additionalDigits must be 0, 1 or 2");if("string"!=typeof t&&"[object String]"!==Object.prototype.toString.call(t))return new Date(NaN);var l,f=y(t);if(f.date){var d=O(f.date,r);l=j(d.restDateString,d.year)}if(!l||isNaN(l.getTime()))return new Date(NaN);var v,m=l.getTime(),time=0;if(f.time&&(time=x(f.time),isNaN(time)))return new Date(NaN);if(!f.timezone){var h=new Date(m+time),w=new Date(0);return w.setFullYear(h.getUTCFullYear(),h.getUTCMonth(),h.getUTCDate()),w.setHours(h.getUTCHours(),h.getUTCMinutes(),h.getUTCSeconds(),h.getUTCMilliseconds()),w}return v=_(f.timezone),isNaN(v)?new Date(NaN):new Date(m+time+v)}var f={dateTimeDelimiter:/[T ]/,timeZoneDelimiter:/[Z ]/i,timezone:/([Z+-].*)$/},d=/^-?(?:(\d{3})|(\d{2})(?:-?(\d{2}))?|W(\d{2})(?:-?(\d{1}))?|)$/,v=/^(\d{2}(?:[.,]\d*)?)(?::?(\d{2}(?:[.,]\d*)?))?(?::?(\d{2}(?:[.,]\d*)?))?$/,m=/^([+-])(\d{2})(?::?(\d{2}))?$/;function y(t){var e,n={},r=t.split(f.dateTimeDelimiter);if(r.length>2)return n;if(/:/.test(r[0])?e=r[0]:(n.date=r[0],e=r[1],f.timeZoneDelimiter.test(n.date)&&(n.date=t.split(f.timeZoneDelimiter)[0],e=t.substr(n.date.length,t.length))),e){var c=f.timezone.exec(e);c?(n.time=e.replace(c[1],""),n.timezone=c[1]):n.time=e}return n}function O(t,e){var n=new RegExp("^(?:(\\d{4}|[+-]\\d{"+(4+e)+"})|(\\d{2}|[+-]\\d{"+(2+e)+"})$)"),r=t.match(n);if(!r)return{year:NaN,restDateString:""};var c=r[1]?parseInt(r[1]):null,o=r[2]?parseInt(r[2]):null;return{year:null===o?c:100*o,restDateString:t.slice((r[1]||r[2]).length)}}function j(t,e){if(null===e)return new Date(NaN);var n=t.match(d);if(!n)return new Date(NaN);var r=!!n[4],c=h(n[1]),o=h(n[2])-1,l=h(n[3]),f=h(n[4]),v=h(n[5])-1;if(r)return function(t,e,n){return e>=1&&e<=53&&n>=0&&n<=6}(0,f,v)?function(t,e,n){var r=new Date(0);r.setUTCFullYear(t,0,4);var c=r.getUTCDay()||7,o=7*(e-1)+n+1-c;return r.setUTCDate(r.getUTCDate()+o),r}(e,f,v):new Date(NaN);var m=new Date(0);return function(t,e,n){return e>=0&&e<=11&&n>=1&&n<=(D[e]||(C(t)?29:28))}(e,o,l)&&function(t,e){return e>=1&&e<=(C(t)?366:365)}(e,c)?(m.setUTCFullYear(e,o,Math.max(c,l)),m):new Date(NaN)}function h(t){return t?parseInt(t):1}function x(t){var e=t.match(v);if(!e)return NaN;var n=w(e[1]),c=w(e[2]),o=w(e[3]);return function(t,e,n){if(24===t)return 0===e&&0===n;return n>=0&&n<60&&e>=0&&e<60&&t>=0&&t<25}(n,c,o)?n*r.a+c*r.b+1e3*o:NaN}function w(t){return t&&parseFloat(t.replace(",","."))||0}function _(t){if("Z"===t)return 0;var e=t.match(m);if(!e)return 0;var n="+"===e[1]?-1:1,c=parseInt(e[2]),o=e[3]&&parseInt(e[3])||0;return function(t,e){return e>=0&&e<=59}(0,o)?n*(c*r.a+o*r.b):NaN}var D=[31,null,31,30,31,30,31,31,30,31,30,31];function C(t){return t%400==0||t%4==0&&t%100!=0}},686:function(t,e,n){"use strict";var r=n(534),c=n(633),o=n(20),l={};l.props={value:{key:"value",required:!0,type:null},format:{key:"format",required:!1,type:String}},l.setup=function(t,e){var n=t;return{date:Object(o.computed)((function(){return Object(c.a)(n.value.value)}))}},l.components=Object.assign({DateDisplay:r.a},l.components);var f=l,d=n(55),component=Object(d.a)(f,(function(){var t=this,e=t.$createElement;return(t._self._c||e)("DateDisplay",{attrs:{value:t.date,format:t.format}})}),[],!1,null,null,null);e.a=component.exports},721:function(t,e,n){n(47),n(38),n(46),n(24),n(63),n(39),n(64);var r=n(474),c=n(475),o=["class","staticClass","style","staticStyle","attrs"];function l(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(object);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,n)}return e}n(121),t.exports={functional:!0,render:function(t,e){var n=e._c,data=(e._v,e.data),f=e.children,d=void 0===f?[]:f,v=data.class,m=data.staticClass,style=data.style,y=data.staticStyle,O=data.attrs,j=void 0===O?{}:O,h=c(data,o);return n("svg",function(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?l(Object(source),!0).forEach((function(e){r(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):l(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}({class:[v,m],style:[style,y],attrs:Object.assign({xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",fill:"currentColor","aria-hidden":"true"},j)},h),d.concat([n("path",{attrs:{"fill-rule":"evenodd",d:"M2 10a.75.75 0 01.75-.75h12.59l-2.1-1.95a.75.75 0 111.02-1.1l3.5 3.25a.75.75 0 010 1.1l-3.5 3.25a.75.75 0 11-1.02-1.1l2.1-1.95H2.75A.75.75 0 012 10z","clip-rule":"evenodd"}})]))}}},903:function(t,e,n){"use strict";var r=n(721),c=n.n(r),o=n(686),l=n(489),f=n(20),d={props:{value:{key:"value",required:!0,type:null}},setup:function(t,e){var n=t;return{start:Object(f.computed)((function(){return n.value.start||l.IsoDateTime.create()})),end:Object(f.computed)((function(){return n.value.end||l.IsoDateTime.create()}))}}};d.components=Object.assign({IsoDateTimeDisplay:o.a,ArrowRightSvg:c.a},d.components);var v=d,m=n(55),component=Object(m.a)(v,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("span",{staticClass:"flex items-center space-x-2"},[n("IsoDateTimeDisplay",{attrs:{format:"date",value:t.start}}),t._v(" "),n("ArrowRightSvg",{staticClass:"h-auto w-4"}),t._v(" "),n("IsoDateTimeDisplay",{attrs:{format:"date",value:t.end}})],1)}),[],!1,null,null,null);e.a=component.exports},916:function(t,e,n){n(47),n(38),n(46),n(24),n(63),n(39),n(64);var r=n(474),c=n(475),o=["class","staticClass","style","staticStyle","attrs"];function l(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(object);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,n)}return e}n(121),t.exports={functional:!0,render:function(t,e){var n=e._c,data=(e._v,e.data),f=e.children,d=void 0===f?[]:f,v=data.class,m=data.staticClass,style=data.style,y=data.staticStyle,O=data.attrs,j=void 0===O?{}:O,h=c(data,o);return n("svg",function(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?l(Object(source),!0).forEach((function(e){r(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):l(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}({class:[v,m],style:[style,y],attrs:Object.assign({xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",fill:"currentColor","aria-hidden":"true"},j)},h),d.concat([n("path",{attrs:{"fill-rule":"evenodd",d:"M5.75 2a.75.75 0 01.75.75V4h7V2.75a.75.75 0 011.5 0V4h.25A2.75 2.75 0 0118 6.75v8.5A2.75 2.75 0 0115.25 18H4.75A2.75 2.75 0 012 15.25v-8.5A2.75 2.75 0 014.75 4H5V2.75A.75.75 0 015.75 2zm-1 5.5c-.69 0-1.25.56-1.25 1.25v6.5c0 .69.56 1.25 1.25 1.25h10.5c.69 0 1.25-.56 1.25-1.25v-6.5c0-.69-.56-1.25-1.25-1.25H4.75z","clip-rule":"evenodd"}})]))}}},931:function(t,e,n){"use strict";var r=n(55),component=Object(r.a)({},(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("span",{staticClass:"flex flex-col items-center p-4 text-sm font-medium text-gray-700"},[n("span",{staticClass:"font-display text-xl font-bold text-prime-indigo sm:text-2xl"},[t._t("number")],2),t._v(" "),n("BaseOverline",{staticClass:"uppercase"},[t._t("title")],2)],1)}),[],!1,null,null,null),c=component.exports;installComponents(component,{BaseOverline:n(532).default});var o={props:{licenseUsage:{key:"licenseUsage",required:!0,type:null}},setup:function(t,e){return{}}};o.components=Object.assign({LicenseUsageDisplay:c},o.components);var l=o,f=Object(r.a)(l,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"grid gap-6 lg:grid-cols-2"},[n("BaseSimpleCard",{staticClass:"divide-y"},[n("h2",{staticClass:"p-4 font-display font-semibold sm:text-lg"},[t._v("\n      One Time Licenses\n    ")]),t._v(" "),n("ul",{staticClass:"grid grid-cols-3 divide-x sm:divide-x-0"},t._l(Object.entries(t.licenseUsage.oneTime||{}),(function(e){var r=e[0],c=e[1];return n("li",{key:r,staticClass:"flex justify-center"},[n("LicenseUsageDisplay",{scopedSlots:t._u([{key:"number",fn:function(){return[t._v("\n            "+t._s(c)+"\n          ")]},proxy:!0},{key:"title",fn:function(){return[t._v(t._s(r))]},proxy:!0}],null,!0)})],1)})),0)]),t._v(" "),n("BaseSimpleCard",{staticClass:"divide-y"},[n("h2",{staticClass:"p-4 font-display font-semibold sm:text-lg"},[t._v("Annual Licenses")]),t._v(" "),n("ul",{staticClass:"grid grid-cols-3 divide-x sm:divide-x-0"},t._l(Object.entries(t.licenseUsage.annual||{}),(function(e){var r=e[0],c=e[1];return n("li",{key:r,staticClass:"flex justify-center"},[n("LicenseUsageDisplay",{scopedSlots:t._u([{key:"number",fn:function(){return[t._v("\n            "+t._s(c)+"\n          ")]},proxy:!0},{key:"title",fn:function(){return[t._v(t._s(r))]},proxy:!0}],null,!0)})],1)})),0)])],1)}),[],!1,null,null,null);e.a=f.exports;installComponents(f,{BaseSimpleCard:n(491).default})}}]);