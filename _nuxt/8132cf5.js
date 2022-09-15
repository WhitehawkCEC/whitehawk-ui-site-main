(window.webpackJsonp=window.webpackJsonp||[]).push([[108,55,58,63,69,71],{1013:function(e,t,n){"use strict";var r=n(53),component=Object(r.a)({},(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("span",{staticClass:"flex flex-col items-center p-4 text-sm font-medium text-gray-700"},[n("span",{staticClass:"font-display text-xl font-bold text-prime-indigo sm:text-2xl"},[e._t("number")],2),e._v(" "),n("BaseOverline",{staticClass:"uppercase"},[e._t("title")],2)],1)}),[],!1,null,null,null),o=component.exports;installComponents(component,{BaseOverline:n(541).default});var c={props:{licenseUsage:{key:"licenseUsage",required:!0,type:null}},setup:function(e,t){return{}}};c.components=Object.assign({LicenseUsageDisplay:o},c.components);var l=c,d=Object(r.a)(l,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"grid gap-6 lg:grid-cols-2"},[n("BaseSimpleCard",{staticClass:"divide-y"},[n("h2",{staticClass:"p-4 font-display font-semibold sm:text-lg"},[e._v("\n      One Time Licenses\n    ")]),e._v(" "),n("ul",{staticClass:"grid grid-cols-3 divide-x sm:divide-x-0"},e._l(Object.entries(e.licenseUsage.oneTime||{}),(function(t){var r=t[0],o=t[1];return n("li",{key:r,staticClass:"flex justify-center"},[n("LicenseUsageDisplay",{scopedSlots:e._u([{key:"number",fn:function(){return[e._v("\n            "+e._s(o)+"\n          ")]},proxy:!0},{key:"title",fn:function(){return[e._v(e._s(r))]},proxy:!0}],null,!0)})],1)})),0)]),e._v(" "),n("BaseSimpleCard",{staticClass:"divide-y"},[n("h2",{staticClass:"p-4 font-display font-semibold sm:text-lg"},[e._v("Annual Licenses")]),e._v(" "),n("ul",{staticClass:"grid grid-cols-3 divide-x sm:divide-x-0"},e._l(Object.entries(e.licenseUsage.annual||{}),(function(t){var r=t[0],o=t[1];return n("li",{key:r,staticClass:"flex justify-center"},[n("LicenseUsageDisplay",{scopedSlots:e._u([{key:"number",fn:function(){return[e._v("\n            "+e._s(o)+"\n          ")]},proxy:!0},{key:"title",fn:function(){return[e._v(e._s(r))]},proxy:!0}],null,!0)})],1)})),0)])],1)}),[],!1,null,null,null);t.a=d.exports;installComponents(d,{BaseSimpleCard:n(493).default})},1123:function(e,t,n){"use strict";var r=n(789),o=Object(r.a)([{label:"Annual",name:"annual",component:{is:"BaseInput",attrs:{type:"number",min:0}}},{label:"One Time",name:"oneTime",component:{is:"BaseInput",attrs:{type:"number",min:0}}}]),c=n(53),component=Object(c.a)(o,undefined,undefined,!1,null,null,null);t.a=component.exports},1124:function(e,t,n){n(45),n(37),n(44),n(26),n(62),n(38),n(63);var r=n(469),o=n(470),c=["class","staticClass","style","staticStyle","attrs"];function l(object,e){var t=Object.keys(object);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(object);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(object,e).enumerable}))),t.push.apply(t,n)}return t}n(121),e.exports={functional:!0,render:function(e,t){var n=t._c,data=(t._v,t.data),d=t.children,f=void 0===d?[]:d,v=data.class,m=data.staticClass,style=data.style,y=data.staticStyle,O=data.attrs,x=void 0===O?{}:O,h=o(data,c);return n("svg",function(e){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?l(Object(source),!0).forEach((function(t){r(e,t,source[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(source)):l(Object(source)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(source,t))}))}return e}({class:[v,m],style:[style,y],attrs:Object.assign({xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",fill:"currentColor","aria-hidden":"true"},x)},h),f.concat([n("path",{attrs:{"fill-rule":"evenodd",d:"M1 6a3 3 0 013-3h12a3 3 0 013 3v8a3 3 0 01-3 3H4a3 3 0 01-3-3V6zm4 1.5a2 2 0 114 0 2 2 0 01-4 0zm2 3a4 4 0 00-3.665 2.395.75.75 0 00.416 1A8.98 8.98 0 007 14.5a8.98 8.98 0 003.249-.604.75.75 0 00.416-1.001A4.001 4.001 0 007 10.5zm5-3.75a.75.75 0 01.75-.75h2.5a.75.75 0 010 1.5h-2.5a.75.75 0 01-.75-.75zm0 6.5a.75.75 0 01.75-.75h2.5a.75.75 0 010 1.5h-2.5a.75.75 0 01-.75-.75zm.75-4a.75.75 0 000 1.5h2.5a.75.75 0 000-1.5h-2.5z","clip-rule":"evenodd"}})]))}}},1296:function(e,t,n){"use strict";n.d(t,"a",(function(){return o}));var r=n(20);function o(e,t){return Object(r.computed)((function(){var n,r,o,c,l=e.value,d=(null===(n=null==l?void 0:l.annual)||void 0===n?void 0:n.quantity)||0,f=(null===(r=null==l?void 0:l.oneTime)||void 0===r?void 0:r.quantity)||0;return{annual:((null===(o=t.value)||void 0===o?void 0:o.annual)||0)-d,oneTime:((null===(c=t.value)||void 0===c?void 0:c.oneTime)||0)-f}}))}},1393:function(e,t,n){"use strict";var r=n(958),o=n.n(r),c=n(1124),l=n.n(c),d=n(1013),f=n(949),v=n(486),m=n(492),y=n(476),O=n(20),x={props:{value:{key:"value",required:!0,type:null}},setup:function(e,t){var n=e;return{id:Object(O.computed)((function(){return n.value.id||y.Ulid.create()})),validity:Object(O.computed)((function(){return n.value.validity||m.DateRange.create()})),counts:Object(O.computed)((function(){return n.value.counts||v.LicenseTypeMapLicenseUsage.create()}))}}};x.components=Object.assign({IdentificationSvg:l.a,CalendarSvg:o.a,DateRangeDisplay:f.a,AggregateLicenseDisplay:d.a},x.components);var h=x,j=n(53),component=Object(j.a)(h,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"flex flex-col space-y-4"},[n("div",{staticClass:"flex flex-col space-y-2 lg:flex-row lg:justify-between lg:space-y-0"},[n("div",{staticClass:"flex items-center space-x-2"},[n("IdentificationSvg",{staticClass:"h-5 w-5 text-indigo-600 lg:h-6 lg:w-6"}),e._v(" "),n("BaseOverline",{staticClass:"uppercase"},[e._v("\n        "+e._s(e.id.value)+"\n      ")])],1),e._v(" "),n("div",{staticClass:"flex items-center space-x-2"},[n("CalendarSvg",{staticClass:"h-5 w-5 text-indigo-600 lg:h-6 lg:w-6"}),e._v(" "),n("BaseTypography",{staticClass:"uppercase",attrs:{variant:"overline"}},[n("DateRangeDisplay",{attrs:{value:e.validity}})],1)],1)]),e._v(" "),n("AggregateLicenseDisplay",{attrs:{"license-usage":e.counts}})],1)}),[],!1,null,null,null);t.a=component.exports;installComponents(component,{BaseOverline:n(541).default,BaseTypography:n(471).default})},2129:function(e,t,n){"use strict";n.r(t);var r=n(12),o=(n(46),n(308)),c=n(505),l=n(1123),d=n(486),f=n(20),v=n(535),m=n(1296),y={};y.props={accountId:{key:"accountId",required:!0,type:String},accountBatchId:{key:"accountBatchId",required:!0,type:String}},y.setup=function(e,t){var n=e,o=Object(f.computed)((function(){return n.accountId})),c=Object(f.computed)((function(){return n.accountBatchId})),l=v.e.create(o,c),y=v.f.read(o,c),O=Object(f.computed)((function(){var e,t,n;return null===(n=null===(t=null===(e=y.data.value)||void 0===e?void 0:e.value)||void 0===t?void 0:t.usage)||void 0===n?void 0:n.counts})),x=Object(f.ref)(d.LicenseTypeMapQuantities.create()),h=Object(f.ref)(!1);Object(f.watch)((function(){return O.value}),(function(e){var t,n;e&&!h.value&&(x.value={annual:(null===(t=e.annual)||void 0===t?void 0:t.quantity)||0,oneTime:(null===(n=e.oneTime)||void 0===n?void 0:n.quantity)||0},h.value=!0)}),{immediate:!0});var j=Object(m.a)(O,x),body=Object(f.computed)((function(){return{quantitiesDiff:j.value}})),w=Object(f.computed)((function(){return 0!==j.value.annual||0!==j.value.oneTime}));function _(){return(_=Object(r.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,l.mutateAsync(body.value);case 2:case"end":return e.stop()}}),e)})))).apply(this,arguments)}return{currentState:y,quantitiesDesired:x,canSubmit:w,submit:function(){return _.apply(this,arguments)}}},y.components=Object.assign({BaseVueQuery:c.default,LicenseTypeMapQuantitiesInput:l.a,BaseButton:o.default},y.components);var O=y,x=n(53),component=Object(x.a)(O,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("BaseSimpleCard",{staticClass:"divide-y"},[n("BaseTypography",{staticClass:"p-4",attrs:{component:"h2",variant:"subtitle3"}},[e._v("\n    Edit Quantities\n  ")]),e._v(" "),n("form",{staticClass:"divide-y",on:{submit:function(t){return t.preventDefault(),e.submit.apply(null,arguments)}}},[n("BaseVueQuery",{attrs:{query:e.currentState},scopedSlots:e._u([{key:"success",fn:function(){return[n("LicenseTypeMapQuantitiesInput",{model:{value:e.quantitiesDesired,callback:function(t){e.quantitiesDesired=t},expression:"quantitiesDesired"}})]},proxy:!0}])}),e._v(" "),n("div",{staticClass:"p-4"},[n("BaseButton",{staticClass:"w-full md:w-auto",attrs:{action:"primary",shape:"rectangle","display-type":"success",disabled:!e.canSubmit}},[e._v("\n        Change\n      ")])],1)],1)],1)}),[],!1,null,null,null),h=component.exports;installComponents(component,{BaseTypography:n(471).default,BaseVueQuery:n(505).default,BaseButton:n(308).default,BaseSimpleCard:n(493).default});var j=n(1393),w=n(482),_={setup:function(e,t){var n=Object(w.b)("id"),r=Object(w.b)("batchId"),o=v.f.read(n,r),c=Object(f.computed)((function(){var e,t;return(null===(t=null===(e=o.data.value)||void 0===e?void 0:e.value)||void 0===t?void 0:t.usage)||d.LicenseBatchUsage.create()}));return{id:n,batchId:r,licenseBatch:o,usage:c}}};_.components=Object.assign({LicenseBatchUsageDisplay:j.a,AccountLicenseBatchQuantitiesChange:h},_.components);var C=_,D=Object(x.a)(C,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("section",[n("BaseVueQuery",{attrs:{query:e.licenseBatch},scopedSlots:e._u([{key:"success",fn:function(){return[n("div",{staticClass:"flex flex-col space-y-4"},[n("LicenseBatchUsageDisplay",{attrs:{value:e.usage}}),e._v(" "),n("AccountLicenseBatchQuantitiesChange",{attrs:{"account-id":e.id,"account-batch-id":e.batchId}})],1)]},proxy:!0}])})],1)}),[],!1,null,null,null);t.default=D.exports;installComponents(D,{BaseVueQuery:n(505).default})},469:function(e,t){e.exports=function(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e},e.exports.__esModule=!0,e.exports.default=e.exports},470:function(e,t,n){var r=n(489);e.exports=function(source,e){if(null==source)return{};var t,i,n=r(source,e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(source);for(i=0;i<o.length;i++)t=o[i],e.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(source,t)&&(n[t]=source[t])}return n},e.exports.__esModule=!0,e.exports.default=e.exports},471:function(e,t,n){"use strict";n.r(t);var r=n(20),o=Object(r.defineComponent)({inheritAttrs:!1});o.props={variant:{key:"variant",required:!0,type:null},component:{key:"component",required:!1,type:null,default:"span"}},o.setup=function(e,t){var n="antialiased",o={h1:"".concat(n," font-display text-4xl font-semibold leading-snug tracking-wide sm:text-5xl md:text-6xl"),h2:"".concat(n," font-display text-3xl font-semibold leading-9 tracking-normal sm:text-5xl sm:leading-10"),h3:"".concat(n," font-display text-3xl font-medium leading-8 tracking-normal sm:text-4xl sm:leading-10"),h4:"".concat(n," font-display text-2xl font-medium leading-8 tracking-wide sm:text-3xl sm:leading-9"),h5:"".concat(n," font-display text-2xl font-medium leading-6 tracking-normal"),h6:"".concat(n," font-display text-xl font-semibold leading-7 tracking-wide"),p1:"".concat(n," font-body text-base font-normal leading-7 tracking-wide"),p2:"".concat(n," font-body text-sm font-normal leading-6 tracking-normal"),subtitle1:"".concat(n," font-body text-lg font-normal leading-6 tracking-wide sm:text-xl"),subtitle2:"".concat(n," font-body text-xs font-medium leading-5 tracking-wide"),subtitle3:"".concat(n," font-display text-lg font-medium leading-5 tracking-wide"),overline:"".concat(n," font-display text-xs font-medium tracking-widest"),button:"".concat(n," font-body text-xs font-medium tracking-wider sm:text-sm xl:tracking-wide")},c=e;return{displayTypeClass:Object(r.computed)((function(){return o[c.variant]}))}};var c=o,l=n(53),component=Object(l.a)(c,(function(){var e=this,t=e.$createElement;return(e._self._c||t)(e.component,e._g(e._b({tag:"Component",class:e.displayTypeClass},"Component",e.$attrs,!1),e.$listeners),[e._t("default")],2)}),[],!1,null,null,null);t.default=component.exports},477:function(e,t,n){"use strict";n.d(t,"b",(function(){return y})),n.d(t,"c",(function(){return O})),n.d(t,"a",(function(){return x}));n(45),n(37),n(44),n(26),n(62),n(38),n(63);var r=n(35),o=n(101),c=n(28),l=(n(199),n(20));function d(object,e){var t=Object.keys(object);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(object);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(object,e).enumerable}))),t.push.apply(t,n)}return t}function f(e){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?d(Object(source),!0).forEach((function(t){Object(c.a)(e,t,source[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(source)):d(Object(source)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(source,t))}))}return e}var v=!0,m={prop:"value",event:"input"};function y(e,t){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:m,r=n.prop,o=n.event;return Object(l.computed)({get:function(){return e[r]},set:function(e){t(o,e)}})}function O(e,t){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:m,r=n.prop,o=n.event;return Object(l.computed)((function(){var n={},c=e[r]||{};return new Proxy(c,{get:function(e,t){return e[t]},set:function(e,r,c){return n[r]=c,t(o,f(f({},e),n)),v}})}))}function x(e,t){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:m,c=n.prop,d=n.event;return Object(l.computed)((function(){var n={},l=e[c]||[];return new Proxy(l,{get:function(e,t){return e[t]},set:function(e,c,l){if(e[c]===l)return v;var f=Object(o.a)(e);n[c]=l;for(var m=0,y=Object.entries(n);m<y.length;m++){var O=Object(r.a)(y[m],2),x=O[0],h=O[1];f[x]=h}return t(d,f),v}})}))}},482:function(e,t,n){"use strict";n.d(t,"a",(function(){return d})),n.d(t,"d",(function(){return f})),n.d(t,"b",(function(){return v})),n.d(t,"c",(function(){return m}));var r=n(28),o=(n(102),n(47),n(100),n(45),n(37),n(44),n(26),n(62),n(38),n(63),n(20));function c(object,e){var t=Object.keys(object);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(object);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(object,e).enumerable}))),t.push.apply(t,n)}return t}function l(e){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?c(Object(source),!0).forEach((function(t){Object(r.a)(e,t,source[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(source)):c(Object(source)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(source,t))}))}return e}function d(){var e=Object(o.getCurrentInstance)();if(!e)throw new Error("Not in setup()?");return Object(o.computed)((function(){return e.proxy.$route}))}function f(){var e=Object(o.getCurrentInstance)();if(!e)throw new Error("Not in setup()?");return e.proxy.$router}function v(e){var t=d();return Object(o.computed)((function(){var n=t.value.params[e];if(!n)throw new Error("Missing param: ".concat(e));return n}))}function m(e,t){var n,c=d(),v=f();return Object(o.computed)({get:function(){return c.value.query[e]||t},set:function(t){clearTimeout(n),n=setTimeout((function(){v.replace({query:l(l({},c.value.query),{},Object(r.a)({},e,t))})}),300)}})}},484:function(e,t,n){"use strict";n.r(t);var r=n(20),o=Object(r.defineComponent)({inheritAttrs:!1}),c=n(53),component=Object(c.a)(o,(function(){var e=this,t=e.$createElement;return(e._self._c||t)("label",e._g(e._b({staticClass:"block font-body text-sm font-medium leading-5 tracking-wide text-gray-600 antialiased",attrs:{role:"label"}},"label",e.$attrs,!1),e.$listeners),[e._t("default")],2)}),[],!1,null,null,null);t.default=component.exports},485:function(e,t,n){"use strict";function r(e,t){if(t.length<e)throw new TypeError(e+" argument"+(e>1?"s":"")+" required, but only "+t.length+" present")}n.d(t,"a",(function(){return r}))},489:function(e,t){e.exports=function(source,e){if(null==source)return{};var t,i,n={},r=Object.keys(source);for(i=0;i<r.length;i++)t=r[i],e.indexOf(t)>=0||(n[t]=source[t]);return n},e.exports.__esModule=!0,e.exports.default=e.exports},490:function(e,t,n){"use strict";n(26),n(159),n(121);var r=n(20),o={props:{definition:{key:"definition",required:!0,type:null}},setup:function(e,t){var n=e,o=Object(r.computed)((function(){return n.definition.icon[0]})),c=Object(r.computed)((function(){return n.definition.icon[1]}));return{svgPathData:Object(r.computed)((function(){return n.definition.icon[4].toString()})),viewBox:Object(r.computed)((function(){return"0 0 ".concat(o.value," ").concat(c.value)}))}}},c=o,l=n(53),component=Object(l.a)(c,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("svg",{attrs:{xmlns:"http://www.w3.org/2000/svg",viewBox:e.viewBox,"aria-hidden":"true",focusable:"false",role:"img"}},[n("path",{attrs:{fill:"currentColor",d:e.svgPathData}})])}),[],!1,null,null,null);t.a=component.exports},493:function(e,t,n){"use strict";n.r(t);var r=n(53),component=Object(r.a)({},(function(){var e=this,t=e.$createElement;return(e._self._c||t)("div",{staticClass:"rounded-xl bg-white shadow"},[e._t("default")],2)}),[],!1,null,null,null);t.default=component.exports},494:function(e,t,n){"use strict";var r=n(490),o=n(495),c={setup:function(e,t){return{definition:o.definition}}};c.components=Object.assign({FontAwesomeSvg:r.a},c.components);var l=c,d=n(53),component=Object(d.a)(l,(function(){var e=this,t=e.$createElement;return(e._self._c||t)("FontAwesomeSvg",{staticClass:"h-5 w-5 animate-spin",attrs:{definition:e.definition}})}),[],!1,null,null,null);t.a=component.exports},495:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r="spinner",o=[],c="f110",l="M304 48c0-26.5-21.5-48-48-48s-48 21.5-48 48s21.5 48 48 48s48-21.5 48-48zm0 416c0-26.5-21.5-48-48-48s-48 21.5-48 48s21.5 48 48 48s48-21.5 48-48zM48 304c26.5 0 48-21.5 48-48s-21.5-48-48-48s-48 21.5-48 48s21.5 48 48 48zm464-48c0-26.5-21.5-48-48-48s-48 21.5-48 48s21.5 48 48 48s48-21.5 48-48zM142.9 437c18.7-18.7 18.7-49.1 0-67.9s-49.1-18.7-67.9 0s-18.7 49.1 0 67.9s49.1 18.7 67.9 0zm0-294.2c18.7-18.7 18.7-49.1 0-67.9S93.7 56.2 75 75s-18.7 49.1 0 67.9s49.1 18.7 67.9 0zM369.1 437c18.7 18.7 49.1 18.7 67.9 0s18.7-49.1 0-67.9s-49.1-18.7-67.9 0s-18.7 49.1 0 67.9z";t.definition={prefix:"fas",iconName:r,icon:[512,512,o,c,l]},t.faSpinner=t.definition,t.prefix="fas",t.iconName=r,t.width=512,t.height=512,t.ligatures=o,t.unicode=c,t.svgPathData=l,t.aliases=o},496:function(e,t,n){"use strict";var r=n(497),o=n(20);n(54);var c={props:{error:{key:"error",required:!0,type:null}}};c.setup=function(e,t){var n=e;return{alert:Object(o.computed)((function(){return"string"==typeof(e=n.error)?{title:"Error",message:e}:e instanceof Error||e instanceof Object&&"name"in e&&"message"in e?{title:e.name,message:e.message}:{title:"Error",message:String(e)};var e}))}},c.components=Object.assign({AlertError:r.a},c.components);var l=c,d=n(53),component=Object(d.a)(l,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("section",[n("AlertError",{scopedSlots:e._u([{key:"title",fn:function(){return[e._v("\n      "+e._s(e.alert.title)+"\n    ")]},proxy:!0},{key:"message",fn:function(){return[e._v("\n      "+e._s(e.alert.message)+"\n    ")]},proxy:!0}])})],1)}),[],!1,null,null,null);t.a=component.exports},497:function(e,t,n){"use strict";var r=n(498),o=n.n(r),c={setup:function(e,t){return{}}};c.components=Object.assign({XCircleSvg:o.a},c.components);var l=c,d=n(53),component=Object(d.a)(l,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"rounded-md bg-red-50 p-4 shadow",attrs:{role:"alert"}},[n("div",{staticClass:"flex space-x-3"},[n("div",{staticClass:"flex-shrink-0"},[n("XCircleSvg",{staticClass:"h-5 w-5 text-red-500"})],1),e._v(" "),n("div",{staticClass:"space-y-2"},[n("h3",{staticClass:"text-sm font-medium leading-5 text-red-800"},[e._t("title")],2),e._v(" "),n("div",{staticClass:"text-sm leading-5 text-red-700"},[e._t("message")],2)])])])}),[],!1,null,null,null);t.a=component.exports},498:function(e,t,n){n(45),n(37),n(44),n(26),n(62),n(38),n(63);var r=n(469),o=n(470),c=["class","staticClass","style","staticStyle","attrs"];function l(object,e){var t=Object.keys(object);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(object);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(object,e).enumerable}))),t.push.apply(t,n)}return t}n(121),e.exports={functional:!0,render:function(e,t){var n=t._c,data=(t._v,t.data),d=t.children,f=void 0===d?[]:d,v=data.class,m=data.staticClass,style=data.style,y=data.staticStyle,O=data.attrs,x=void 0===O?{}:O,h=o(data,c);return n("svg",function(e){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?l(Object(source),!0).forEach((function(t){r(e,t,source[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(source)):l(Object(source)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(source,t))}))}return e}({class:[v,m],style:[style,y],attrs:Object.assign({xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",fill:"currentColor","aria-hidden":"true"},x)},h),f.concat([n("path",{attrs:{"fill-rule":"evenodd",d:"M10 18a8 8 0 100-16 8 8 0 000 16zM8.28 7.22a.75.75 0 00-1.06 1.06L8.94 10l-1.72 1.72a.75.75 0 101.06 1.06L10 11.06l1.72 1.72a.75.75 0 101.06-1.06L11.06 10l1.72-1.72a.75.75 0 00-1.06-1.06L10 8.94 8.28 7.22z","clip-rule":"evenodd"}})]))}}},499:function(e,t,n){"use strict";n.d(t,"a",(function(){return c}));var r=n(20),o=n(122);function c(){var e=Object(o.a)();return Object(r.computed)((function(){return e.accessToken}))}},501:function(e,t,n){"use strict";function r(e){if(null===e||!0===e||!1===e)return NaN;var t=Number(e);return isNaN(t)?t:t<0?Math.ceil(t):Math.floor(t)}n.d(t,"a",(function(){return r}))},505:function(e,t,n){"use strict";n.r(t);var r=n(496),o=n(494),c={props:{query:{key:"query",required:!0,type:null}},setup:function(e,t){var n=e.query;return{isLoading:n.isLoading,isError:n.isError,error:n.error,data:n.data}}};c.components=Object.assign({LoadingSpinner:o.a,GenericError:r.a},c.components);var l=c,d=n(53),f=Object(d.a)(l,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("ClientOnly",[e.isLoading?[e._t("loading",(function(){return[n("LoadingSpinner")]}))]:e.isError?[e._t("error",(function(){return[n("GenericError",{attrs:{error:e.error}})]}),null,{error:e.error})]:[e._t("success",(function(){return[n("pre",[e._v(e._s(JSON.stringify(e.data,null,2)))])]}),null,{data:e.data})]],2)],1)}),[],!1,null,null,null).exports,v=Object(d.a)(f,undefined,undefined,!1,null,null,null);t.default=v.exports},531:function(e,t,n){"use strict";n.d(t,"b",(function(){return r})),n.d(t,"a",(function(){return o})),n.d(t,"c",(function(){return c}));Math.pow(10,8);var r=6e4,o=36e5,c=1e3},541:function(e,t,n){"use strict";n.r(t);var r=n(53),component=Object(r.a)({},(function(){var e=this,t=e.$createElement;return(e._self._c||t)("span",{staticClass:"font-display text-xs font-medium tracking-widest antialiased"},[e._t("default")],2)}),[],!1,null,null,null);t.default=component.exports},542:function(e,t,n){"use strict";var r=n(20),o={props:{value:{key:"value",required:!0,type:null},format:{key:"format",required:!1,type:null,default:"full"}},setup:function(e,t){var n={full:function(e){return e.toLocaleString()},date:function(e){return e.toLocaleDateString()}},o=e,c=Object(r.computed)((function(){return n[o.format]}));return{dateTimeValue:Object(r.computed)((function(){return o.value.toISOString()})),display:Object(r.computed)((function(){return c.value(o.value)}))}}},c=o,l=n(53),component=Object(l.a)(c,(function(){var e=this,t=e.$createElement;return(e._self._c||t)("time",{attrs:{datetime:e.dateTimeValue}},[e._v("\n  "+e._s(e.display)+"\n")])}),[],!1,null,null,null);t.a=component.exports},555:function(e,t,n){"use strict";var r=n(477),o=n(20),c={prop:"modelValue",event:"update:modelValue"},l=Object(o.defineComponent)({model:c});l.props={modelValue:{key:"modelValue",required:!1,type:null},component:{key:"component",required:!0,type:null}},l.setup=function(e,t){var n=e,o=t.emit;return{proxy:Object(r.b)(n,o,c)}};var d=l,f=n(53),v=Object(f.a)(d,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",["input"===e.component.is?["checkbox"===e.component.attrs.type?n("input",e._b({directives:[{name:"model",rawName:"v-model",value:e.proxy,expression:"proxy"}],attrs:{type:"checkbox"},domProps:{checked:Array.isArray(e.proxy)?e._i(e.proxy,null)>-1:e.proxy},on:{change:function(t){var n=e.proxy,r=t.target,o=!!r.checked;if(Array.isArray(n)){var c=e._i(n,null);r.checked?c<0&&(e.proxy=n.concat([null])):c>-1&&(e.proxy=n.slice(0,c).concat(n.slice(c+1)))}else e.proxy=o}}},"input",e.component.attrs,!1)):"radio"===e.component.attrs.type?n("input",e._b({directives:[{name:"model",rawName:"v-model",value:e.proxy,expression:"proxy"}],attrs:{type:"radio"},domProps:{checked:e._q(e.proxy,null)},on:{change:function(t){e.proxy=null}}},"input",e.component.attrs,!1)):n("input",e._b({directives:[{name:"model",rawName:"v-model",value:e.proxy,expression:"proxy"}],attrs:{type:e.component.attrs.type},domProps:{value:e.proxy},on:{input:function(t){t.target.composing||(e.proxy=t.target.value)}}},"input",e.component.attrs,!1))]:"select"===e.component.is?[n("select",e._b({directives:[{name:"model",rawName:"v-model",value:e.proxy,expression:"proxy"}],on:{change:function(t){var n=Array.prototype.filter.call(t.target.options,(function(e){return e.selected})).map((function(e){return"_value"in e?e._value:e.value}));e.proxy=t.target.multiple?n:n[0]}}},"select",e.component.attrs,!1))]:"textarea"===e.component.is?[n("textarea",e._b({directives:[{name:"model",rawName:"v-model",value:e.proxy,expression:"proxy"}],domProps:{value:e.proxy},on:{input:function(t){t.target.composing||(e.proxy=t.target.value)}}},"textarea",e.component.attrs,!1))]:[n(e.component.is,e._b({tag:"Component",model:{value:e.proxy,callback:function(t){e.proxy=t},expression:"proxy"}},"Component",e.component.attrs,!1))]],2)}),[],!1,null,null,null).exports,m={props:{value:{key:"value",required:!1,type:null},schema:{key:"schema",required:!0,type:null}},setup:function(e,t){var n=e,c=t.emit;return{proxy:Object(r.b)(n,c),isRequired:Object(o.computed)((function(){var e,t;return null===(t=null===(e=n.schema.component)||void 0===e?void 0:e.attrs)||void 0===t?void 0:t.required}))}}};m.components=Object.assign({DynamicComponent:v},m.components);var y=m,O=Object(f.a)(y,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("BaseLabel",{staticClass:"grid grid-cols-1 gap-1 sm:grid-cols-3 sm:items-center sm:gap-4"},[n("span",[e._v("\n    "+e._s(e.schema.label)+"\n    "),e.isRequired?n("span",{staticClass:"text-red-700"},[e._v("*")]):e._e()]),e._v(" "),n("DynamicComponent",{staticClass:"flex flex-col sm:col-span-2",attrs:{component:e.schema.component},model:{value:e.proxy,callback:function(t){e.proxy=t},expression:"proxy"}})],1)}),[],!1,null,null,null),x=O.exports;installComponents(O,{BaseLabel:n(484).default});var h={props:{value:{key:"value",required:!1,type:null},schema:{key:"schema",required:!0,type:null}},setup:function(e,t){var n=e,o=t.emit;return{proxy:Object(r.c)(n,o)}}};h.components=Object.assign({DynamicFormInputGroup:x},h.components);var j=h,w=Object(f.a)(j,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"flex flex-col space-y-6 sm:space-y-0 sm:divide-y"},e._l(e.schema,(function(t){return n("div",{key:t.name,staticClass:"min-w-0 p-4"},[n("DynamicFormInputGroup",{staticClass:"h-full",attrs:{schema:t},model:{value:e.proxy[t.name],callback:function(n){e.$set(e.proxy,t.name,n)},expression:"proxy[field.name]"}})],1)})),0)}),[],!1,null,null,null);t.a=w.exports},657:function(e,t,n){"use strict";n.d(t,"a",(function(){return l}));var r=n(531),o=n(485),c=n(501);function l(e,t){var n;Object(o.a)(1,arguments);var r=Object(c.a)(null!==(n=null==t?void 0:t.additionalDigits)&&void 0!==n?n:2);if(2!==r&&1!==r&&0!==r)throw new RangeError("additionalDigits must be 0, 1 or 2");if("string"!=typeof e&&"[object String]"!==Object.prototype.toString.call(e))return new Date(NaN);var l,d=y(e);if(d.date){var f=O(d.date,r);l=x(f.restDateString,f.year)}if(!l||isNaN(l.getTime()))return new Date(NaN);var v,m=l.getTime(),time=0;if(d.time&&(time=j(d.time),isNaN(time)))return new Date(NaN);if(!d.timezone){var h=new Date(m+time),w=new Date(0);return w.setFullYear(h.getUTCFullYear(),h.getUTCMonth(),h.getUTCDate()),w.setHours(h.getUTCHours(),h.getUTCMinutes(),h.getUTCSeconds(),h.getUTCMilliseconds()),w}return v=_(d.timezone),isNaN(v)?new Date(NaN):new Date(m+time+v)}var d={dateTimeDelimiter:/[T ]/,timeZoneDelimiter:/[Z ]/i,timezone:/([Z+-].*)$/},f=/^-?(?:(\d{3})|(\d{2})(?:-?(\d{2}))?|W(\d{2})(?:-?(\d{1}))?|)$/,v=/^(\d{2}(?:[.,]\d*)?)(?::?(\d{2}(?:[.,]\d*)?))?(?::?(\d{2}(?:[.,]\d*)?))?$/,m=/^([+-])(\d{2})(?::?(\d{2}))?$/;function y(e){var t,n={},r=e.split(d.dateTimeDelimiter);if(r.length>2)return n;if(/:/.test(r[0])?t=r[0]:(n.date=r[0],t=r[1],d.timeZoneDelimiter.test(n.date)&&(n.date=e.split(d.timeZoneDelimiter)[0],t=e.substr(n.date.length,e.length))),t){var o=d.timezone.exec(t);o?(n.time=t.replace(o[1],""),n.timezone=o[1]):n.time=t}return n}function O(e,t){var n=new RegExp("^(?:(\\d{4}|[+-]\\d{"+(4+t)+"})|(\\d{2}|[+-]\\d{"+(2+t)+"})$)"),r=e.match(n);if(!r)return{year:NaN,restDateString:""};var o=r[1]?parseInt(r[1]):null,c=r[2]?parseInt(r[2]):null;return{year:null===c?o:100*c,restDateString:e.slice((r[1]||r[2]).length)}}function x(e,t){if(null===t)return new Date(NaN);var n=e.match(f);if(!n)return new Date(NaN);var r=!!n[4],o=h(n[1]),c=h(n[2])-1,l=h(n[3]),d=h(n[4]),v=h(n[5])-1;if(r)return function(e,t,n){return t>=1&&t<=53&&n>=0&&n<=6}(0,d,v)?function(e,t,n){var r=new Date(0);r.setUTCFullYear(e,0,4);var o=r.getUTCDay()||7,c=7*(t-1)+n+1-o;return r.setUTCDate(r.getUTCDate()+c),r}(t,d,v):new Date(NaN);var m=new Date(0);return function(e,t,n){return t>=0&&t<=11&&n>=1&&n<=(C[t]||(D(e)?29:28))}(t,c,l)&&function(e,t){return t>=1&&t<=(D(e)?366:365)}(t,o)?(m.setUTCFullYear(t,c,Math.max(o,l)),m):new Date(NaN)}function h(e){return e?parseInt(e):1}function j(e){var t=e.match(v);if(!t)return NaN;var n=w(t[1]),o=w(t[2]),c=w(t[3]);return function(e,t,n){if(24===e)return 0===t&&0===n;return n>=0&&n<60&&t>=0&&t<60&&e>=0&&e<25}(n,o,c)?n*r.a+o*r.b+1e3*c:NaN}function w(e){return e&&parseFloat(e.replace(",","."))||0}function _(e){if("Z"===e)return 0;var t=e.match(m);if(!t)return 0;var n="+"===t[1]?-1:1,o=parseInt(t[2]),c=t[3]&&parseInt(t[3])||0;return function(e,t){return t>=0&&t<=59}(0,c)?n*(o*r.a+c*r.b):NaN}var C=[31,null,31,30,31,30,31,31,30,31,30,31];function D(e){return e%400==0||e%4==0&&e%100!=0}},705:function(e,t,n){"use strict";var r=n(542),o=n(657),c=n(20),l={};l.props={value:{key:"value",required:!0,type:null},format:{key:"format",required:!1,type:String}},l.setup=function(e,t){var n=e;return{date:Object(c.computed)((function(){return Object(o.a)(n.value.value)}))}},l.components=Object.assign({DateDisplay:r.a},l.components);var d=l,f=n(53),component=Object(f.a)(d,(function(){var e=this,t=e.$createElement;return(e._self._c||t)("DateDisplay",{attrs:{value:e.date,format:e.format}})}),[],!1,null,null,null);t.a=component.exports},758:function(e,t,n){n(45),n(37),n(44),n(26),n(62),n(38),n(63);var r=n(469),o=n(470),c=["class","staticClass","style","staticStyle","attrs"];function l(object,e){var t=Object.keys(object);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(object);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(object,e).enumerable}))),t.push.apply(t,n)}return t}n(121),e.exports={functional:!0,render:function(e,t){var n=t._c,data=(t._v,t.data),d=t.children,f=void 0===d?[]:d,v=data.class,m=data.staticClass,style=data.style,y=data.staticStyle,O=data.attrs,x=void 0===O?{}:O,h=o(data,c);return n("svg",function(e){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?l(Object(source),!0).forEach((function(t){r(e,t,source[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(source)):l(Object(source)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(source,t))}))}return e}({class:[v,m],style:[style,y],attrs:Object.assign({xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",fill:"currentColor","aria-hidden":"true"},x)},h),f.concat([n("path",{attrs:{"fill-rule":"evenodd",d:"M2 10a.75.75 0 01.75-.75h12.59l-2.1-1.95a.75.75 0 111.02-1.1l3.5 3.25a.75.75 0 010 1.1l-3.5 3.25a.75.75 0 11-1.02-1.1l2.1-1.95H2.75A.75.75 0 012 10z","clip-rule":"evenodd"}})]))}}},789:function(e,t,n){"use strict";n.d(t,"a",(function(){return l}));var r=n(555),o=n(20),c={value:{type:Object}};function l(e){return Object(o.defineComponent)({props:c,render:function(t){return t(r.a,{props:{value:this.value,schema:e},attrs:this.$attrs,on:this.$listeners})}})}},949:function(e,t,n){"use strict";var r=n(758),o=n.n(r),c=n(705),l=n(492),d=n(20),f={props:{value:{key:"value",required:!0,type:null}},setup:function(e,t){var n=e;return{start:Object(d.computed)((function(){return n.value.start||l.IsoDateTime.create()})),end:Object(d.computed)((function(){return n.value.end||l.IsoDateTime.create()}))}}};f.components=Object.assign({IsoDateTimeDisplay:c.a,ArrowRightSvg:o.a},f.components);var v=f,m=n(53),component=Object(m.a)(v,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("span",{staticClass:"flex items-center space-x-2"},[n("IsoDateTimeDisplay",{attrs:{format:"date",value:e.start}}),e._v(" "),n("ArrowRightSvg",{staticClass:"h-auto w-4"}),e._v(" "),n("IsoDateTimeDisplay",{attrs:{format:"date",value:e.end}})],1)}),[],!1,null,null,null);t.a=component.exports},958:function(e,t,n){n(45),n(37),n(44),n(26),n(62),n(38),n(63);var r=n(469),o=n(470),c=["class","staticClass","style","staticStyle","attrs"];function l(object,e){var t=Object.keys(object);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(object);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(object,e).enumerable}))),t.push.apply(t,n)}return t}n(121),e.exports={functional:!0,render:function(e,t){var n=t._c,data=(t._v,t.data),d=t.children,f=void 0===d?[]:d,v=data.class,m=data.staticClass,style=data.style,y=data.staticStyle,O=data.attrs,x=void 0===O?{}:O,h=o(data,c);return n("svg",function(e){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?l(Object(source),!0).forEach((function(t){r(e,t,source[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(source)):l(Object(source)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(source,t))}))}return e}({class:[v,m],style:[style,y],attrs:Object.assign({xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",fill:"currentColor","aria-hidden":"true"},x)},h),f.concat([n("path",{attrs:{"fill-rule":"evenodd",d:"M5.75 2a.75.75 0 01.75.75V4h7V2.75a.75.75 0 011.5 0V4h.25A2.75 2.75 0 0118 6.75v8.5A2.75 2.75 0 0115.25 18H4.75A2.75 2.75 0 012 15.25v-8.5A2.75 2.75 0 014.75 4H5V2.75A.75.75 0 015.75 2zm-1 5.5c-.69 0-1.25.56-1.25 1.25v6.5c0 .69.56 1.25 1.25 1.25h10.5c.69 0 1.25-.56 1.25-1.25v-6.5c0-.69-.56-1.25-1.25-1.25H4.75z","clip-rule":"evenodd"}})]))}}}}]);