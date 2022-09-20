(window.webpackJsonp=window.webpackJsonp||[]).push([[125,59,68,74],{1403:function(t,e,n){"use strict";var r=n(578),o=n.n(r),c=n(881),l=n.n(c),f=n(478),d={};d.props={value:{key:"value",required:!1,type:String}},d.setup=function(t,e){var n=t,r=e.emit;return{proxy:Object(f.b)(n,r)}},d.components=Object.assign({KeySvg:l.a,SaveSvg:o.a},d.components);var v=d,y=n(55),component=Object(y.a)(v,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("BaseLabel",[n("span",[t._v("Token / Key:")]),t._v(" "),n("div",{staticClass:"flex rounded-md shadow-sm"},[n("div",{staticClass:"relative flex-grow focus-within:z-10"},[n("div",{staticClass:"pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3"},[n("KeySvg",{staticClass:"h-5 w-5 text-gray-300"})],1),t._v(" "),n("input",{directives:[{name:"model",rawName:"v-model",value:t.proxy,expression:"proxy"}],staticClass:"block w-full rounded-none rounded-l-md border-gray-300 pl-10 shadow-sm transition duration-150 ease-in-out read-only:bg-gray-200 focus:border-blue-300 focus:outline-none focus:ring focus:ring-blue-200 focus:ring-opacity-50 sm:text-sm",attrs:{type:"text"},domProps:{value:t.proxy},on:{input:function(e){e.target.composing||(t.proxy=e.target.value)}}})]),t._v(" "),n("button",{staticClass:"focus:ring-blue relative -ml-px inline-flex items-center rounded-r-md border border-gray-300 bg-prime-indigo px-6 py-2 text-sm font-medium leading-5 text-white transition duration-150 ease-in-out hover:bg-indigo-700 focus:border-blue-300 focus:outline-none active:bg-gray-100 active:text-gray-700"},[n("SaveSvg",{staticClass:"h-5 w-5 text-white"}),t._v(" "),n("span",{staticClass:"ml-2"},[t._v("Update")])],1)])])}),[],!1,null,null,null);e.a=component.exports;installComponents(component,{BaseLabel:n(488).default})},2237:function(t,e,n){"use strict";n.r(e);var r=n(10),o=(n(48),n(881)),c=n.n(o),l=n(1403),f=n(20),d=n(501),v=n(201),y=n(481),m={setup:function(t,e){var n=Object(y.b)("id"),o=d.l.read(n),c=Object(f.ref)();Object(f.watch)((function(){return o.data.value}),(function(t){t&&(c.value=t.data)}),{immediate:!0});var l=Object(v.a)(),m=d.l.update(n);function O(){return(O=Object(r.a)(regeneratorRuntime.mark((function t(){var e;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(!c.value){t.next=6;break}return e={data:c.value},t.next=4,m.mutateAsync(e);case 4:t.sent?l.success("Successfully udpated API token."):l.error("Something went wrong.");case 6:case"end":return t.stop()}}),t)})))).apply(this,arguments)}return{token:c,updateToken:function(){return O.apply(this,arguments)}}}};m.components=Object.assign({KeySvg:c.a,FormEmbeddedButton:l.a},m.components);var O=m,x=n(55),component=Object(x.a)(O,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"space-y-8"},[t.token?n("div",{staticClass:"rounded-lg border-gray-300 bg-gray-200 px-2 py-4 shadow-inner sm:py-2"},[n("dl",{staticClass:"flex items-center space-x-2 overflow-x-auto whitespace-nowrap text-gray-500"},[n("KeySvg",{staticClass:"h-5 w-5 text-gray-500"}),t._v(" "),n("dt",[t._v("Current Token:")]),t._v(" "),n("dd",[t._v(t._s(t.token))])],1)]):t._e(),t._v(" "),n("BaseSimpleCard",{staticClass:"divide-y"},[n("BaseTypography",{staticClass:"block p-4",attrs:{variant:"subtitle3"}},[t._v("\n      Update Token\n    ")]),t._v(" "),n("form",{staticClass:"p-4",on:{submit:function(e){return e.preventDefault(),t.updateToken.apply(null,arguments)}}},[n("FormEmbeddedButton",{model:{value:t.token,callback:function(e){t.token=e},expression:"token"}})],1)],1)],1)}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{BaseTypography:n(476).default,BaseSimpleCard:n(491).default})},474:function(t,e){t.exports=function(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t},t.exports.__esModule=!0,t.exports.default=t.exports},475:function(t,e,n){var r=n(492);t.exports=function(source,t){if(null==source)return{};var e,i,n=r(source,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(source);for(i=0;i<o.length;i++)e=o[i],t.indexOf(e)>=0||Object.prototype.propertyIsEnumerable.call(source,e)&&(n[e]=source[e])}return n},t.exports.__esModule=!0,t.exports.default=t.exports},476:function(t,e,n){"use strict";n.r(e);var r=n(20),o=Object(r.defineComponent)({inheritAttrs:!1});o.props={variant:{key:"variant",required:!0,type:null},component:{key:"component",required:!1,type:null,default:"span"}},o.setup=function(t,e){var n="antialiased",o={h1:"".concat(n," font-display text-4xl font-semibold leading-snug tracking-wide sm:text-5xl md:text-6xl"),h2:"".concat(n," font-display text-3xl font-semibold leading-9 tracking-normal sm:text-5xl sm:leading-10"),h3:"".concat(n," font-display text-3xl font-medium leading-8 tracking-normal sm:text-4xl sm:leading-10"),h4:"".concat(n," font-display text-2xl font-medium leading-8 tracking-wide sm:text-3xl sm:leading-9"),h5:"".concat(n," font-display text-2xl font-medium leading-6 tracking-normal"),h6:"".concat(n," font-display text-xl font-semibold leading-7 tracking-wide"),p1:"".concat(n," font-body text-base font-normal leading-7 tracking-wide"),p2:"".concat(n," font-body text-sm font-normal leading-6 tracking-normal"),subtitle1:"".concat(n," font-body text-lg font-normal leading-6 tracking-wide sm:text-xl"),subtitle2:"".concat(n," font-body text-xs font-medium leading-5 tracking-wide"),subtitle3:"".concat(n," font-display text-lg font-medium leading-5 tracking-wide"),overline:"".concat(n," font-display text-xs font-medium tracking-widest"),button:"".concat(n," font-body text-xs font-medium tracking-wider sm:text-sm xl:tracking-wide"),data:"".concat(n," font-mono text-xs font-normal tracking-wider sm:text-sm xl:tracking-wide")},c=t;return{displayTypeClass:Object(r.computed)((function(){return o[c.variant]}))}};var c=o,l=n(55),component=Object(l.a)(c,(function(){var t=this,e=t.$createElement;return(t._self._c||e)(t.component,t._g(t._b({tag:"Component",class:t.displayTypeClass},"Component",t.$attrs,!1),t.$listeners),[t._t("default")],2)}),[],!1,null,null,null);e.default=component.exports},478:function(t,e,n){"use strict";n.d(e,"b",(function(){return m})),n.d(e,"c",(function(){return O})),n.d(e,"a",(function(){return x}));n(47),n(38),n(46),n(24),n(63),n(39),n(64);var r=n(36),o=n(104),c=n(28),l=(n(199),n(20));function f(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(object);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,n)}return e}function d(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?f(Object(source),!0).forEach((function(e){Object(c.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):f(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}var v=!0,y={prop:"value",event:"input"};function m(t,e){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:y,r=n.prop,o=n.event;return Object(l.computed)({get:function(){return t[r]},set:function(t){e(o,t)}})}function O(t,e){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:y,r=n.prop,o=n.event;return Object(l.computed)((function(){var n={},c=t[r]||{};return new Proxy(c,{get:function(t,e){return t[e]},set:function(t,r,c){return n[r]=c,e(o,d(d({},t),n)),v}})}))}function x(t,e){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:y,c=n.prop,f=n.event;return Object(l.computed)((function(){var n={},l=t[c]||[];return new Proxy(l,{get:function(t,e){return t[e]},set:function(t,c,l){if(t[c]===l)return v;var d=Object(o.a)(t);n[c]=l;for(var y=0,m=Object.entries(n);y<m.length;y++){var O=Object(r.a)(m[y],2),x=O[0],w=O[1];d[x]=w}return e(f,d),v}})}))}},481:function(t,e,n){"use strict";n.d(e,"a",(function(){return f})),n.d(e,"d",(function(){return d})),n.d(e,"b",(function(){return v})),n.d(e,"c",(function(){return y}));var r=n(28),o=(n(84),n(50),n(103),n(47),n(38),n(46),n(24),n(63),n(39),n(64),n(20));function c(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(object);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,n)}return e}function l(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?c(Object(source),!0).forEach((function(e){Object(r.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):c(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}function f(){var t=Object(o.getCurrentInstance)();if(!t)throw new Error("Not in setup()?");return Object(o.computed)((function(){return t.proxy.$route}))}function d(){var t=Object(o.getCurrentInstance)();if(!t)throw new Error("Not in setup()?");return t.proxy.$router}function v(t){var e=f();return Object(o.computed)((function(){var n=e.value.params[t];if(!n)throw new Error("Missing param: ".concat(t));return n}))}function y(t,e){var n,c=f(),v=d();return Object(o.computed)({get:function(){return c.value.query[t]||e},set:function(e){clearTimeout(n),n=setTimeout((function(){v.replace({query:l(l({},c.value.query),{},Object(r.a)({},t,e))})}),300)}})}},488:function(t,e,n){"use strict";n.r(e);var r=n(20),o=Object(r.defineComponent)({inheritAttrs:!1}),c=n(55),component=Object(c.a)(o,(function(){var t=this,e=t.$createElement;return(t._self._c||e)("label",t._g(t._b({staticClass:"block font-body text-sm font-medium leading-5 tracking-wide text-gray-600 antialiased",attrs:{role:"label"}},"label",t.$attrs,!1),t.$listeners),[t._t("default")],2)}),[],!1,null,null,null);e.default=component.exports},491:function(t,e,n){"use strict";n.r(e);var r=n(55),component=Object(r.a)({},(function(){var t=this,e=t.$createElement;return(t._self._c||e)("div",{staticClass:"rounded-xl bg-white shadow"},[t._t("default")],2)}),[],!1,null,null,null);e.default=component.exports},492:function(t,e){t.exports=function(source,t){if(null==source)return{};var e,i,n={},r=Object.keys(source);for(i=0;i<r.length;i++)e=r[i],t.indexOf(e)>=0||(n[e]=source[e]);return n},t.exports.__esModule=!0,t.exports.default=t.exports},578:function(t,e,n){n(47),n(38),n(46),n(24),n(63),n(39),n(64);var r=n(474),o=n(475),c=["class","staticClass","style","staticStyle","attrs"];function l(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(object);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,n)}return e}n(121),t.exports={functional:!0,render:function(t,e){var n=e._c,data=(e._v,e.data),f=e.children,d=void 0===f?[]:f,v=data.class,y=data.staticClass,style=data.style,m=data.staticStyle,O=data.attrs,x=void 0===O?{}:O,w=o(data,c);return n("svg",function(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?l(Object(source),!0).forEach((function(e){r(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):l(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}({class:[v,y],style:[style,m],attrs:Object.assign({xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",fill:"currentColor","aria-hidden":"true"},x)},w),d.concat([n("path",{attrs:{d:"M13.75 7h-3v5.296l1.943-2.048a.75.75 0 011.114 1.004l-3.25 3.5a.75.75 0 01-1.114 0l-3.25-3.5a.75.75 0 111.114-1.004l1.943 2.048V7h1.5V1.75a.75.75 0 00-1.5 0V7h-3A2.25 2.25 0 004 9.25v7.5A2.25 2.25 0 006.25 19h7.5A2.25 2.25 0 0016 16.75v-7.5A2.25 2.25 0 0013.75 7z"}})]))}}},881:function(t,e,n){n(47),n(38),n(46),n(24),n(63),n(39),n(64);var r=n(474),o=n(475),c=["class","staticClass","style","staticStyle","attrs"];function l(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(object);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,n)}return e}n(121),t.exports={functional:!0,render:function(t,e){var n=e._c,data=(e._v,e.data),f=e.children,d=void 0===f?[]:f,v=data.class,y=data.staticClass,style=data.style,m=data.staticStyle,O=data.attrs,x=void 0===O?{}:O,w=o(data,c);return n("svg",function(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?l(Object(source),!0).forEach((function(e){r(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):l(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}({class:[v,y],style:[style,m],attrs:Object.assign({xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",fill:"currentColor","aria-hidden":"true"},x)},w),d.concat([n("path",{attrs:{"fill-rule":"evenodd",d:"M8 7a5 5 0 113.61 4.804l-1.903 1.903A1 1 0 019 14H8v1a1 1 0 01-1 1H6v1a1 1 0 01-1 1H3a1 1 0 01-1-1v-2a1 1 0 01.293-.707L8.196 8.39A5.002 5.002 0 018 7zm5-3a.75.75 0 000 1.5A1.5 1.5 0 0114.5 7 .75.75 0 0016 7a3 3 0 00-3-3z","clip-rule":"evenodd"}})]))}}}}]);