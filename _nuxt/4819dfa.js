(window.webpackJsonp=window.webpackJsonp||[]).push([[144],{2251:function(t,e,n){"use strict";n.r(e);var r=n(10),c=(n(48),n(121),n(706)),o=n.n(c),l=n(525),d=n.n(l),f=n(1113),v=n(20),y=n(470),m=n(198),O=n(201),x=n(482),w={setup:function(t,e){var n=Object(x.b)("id"),c=Object(x.b)("groupId"),o=Object(v.ref)(""),l=Object(v.ref)(null),d=Object(v.computed)((function(){return{id:{accountId:n.value,groupId:c.value},data:o.value}})),f=Object(v.computed)((function(){return y.a.get("".concat(m.a,"/accounts/").concat(n.value,"/groups/").concat(c.value,"/black-kite/api-key"))})),w=Object(x.d)(),_=Object(O.a)();function j(){return(j=Object(r.a)(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,y.a.put("".concat(m.a,"/accounts/").concat(n.value,"/groups/").concat(c.value,"/black-kite/api-key"),d.value);case 2:l.value=t.sent,_.success("Api Key updated"),y.a.get("".concat(m.a,"/accounts/").concat(n.value,"/groups/").concat(c.value,"/black-kite/api-key")),w.push("/admin/companies/".concat(n.value,"/scorecards/portfolio/groups/").concat(c.value));case 6:case"end":return t.stop()}}),t)})))).apply(this,arguments)}return{apiKeyValue:o,apiKeyUpdate:l,apiKey:f,update:function(){return j.apply(this,arguments)}}}};w.components=Object.assign({ApiKeyValidation:f.a,CheckSvg:o.a,XSvg:d.a},w.components);var _=w,j=n(55),component=Object(j.a)(_,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("section",{staticClass:"space-y-6"},[n("BasePromise",{attrs:{promise:t.apiKey},scopedSlots:t._u([{key:"success",fn:function(e){var data=e.result.data;return[n("BaseSimpleCard",{staticClass:"divide-y"},[n("div",{staticClass:"flex flex-col p-4 sm:flex-row sm:items-center sm:justify-between"},[n("h2",{staticClass:"font-display text-lg font-semibold"},[t._v("Current Token")]),t._v(" "),n("div",[n("ApiKeyValidation",{attrs:{value:data.data},scopedSlots:t._u([{key:"valid",fn:function(){return[n("div",{staticClass:"inline-flex items-center space-x-2 rounded-md bg-green-600 px-2"},[n("CheckSvg",{staticClass:"h-4 w-4 text-white"}),t._v(" "),n("span",{staticClass:"text-sm font-medium uppercase text-white"},[t._v("\n                    Valid Token\n                  ")])],1)]},proxy:!0},{key:"invalid",fn:function(){return[n("div",{staticClass:"inline-flex items-center space-x-2 rounded-md bg-red-600 px-2"},[n("XSvg",{staticClass:"h-4 w-4 text-white"}),t._v(" "),n("span",{staticClass:"text-sm font-medium uppercase text-white"},[t._v("\n                    Invalid Token\n                  ")])],1)]},proxy:!0}],null,!0)})],1)]),t._v(" "),n("div",{staticClass:"flex p-4"},[n("span",{staticClass:"overflow-y-auto rounded-md border bg-gray-200 px-4 py-2 text-gray-700 shadow-inner"},[t._v("\n            "+t._s(data.data)+"\n          ")])])])]}}])}),t._v(" "),n("BaseSimpleCard",{staticClass:"divide-y"},[n("h2",{staticClass:"p-4 font-display text-lg font-semibold"},[t._v("Update Group Token")]),t._v(" "),n("div",{staticClass:"space-y-2 p-4 text-xs text-gray-700"},[n("p",[n("span",[t._v("A Token (API Key) consists of:")])]),t._v(" "),n("ul",{staticClass:"ml-4 list-disc"},[n("li",[t._v("50 characters")]),t._v(" "),n("li",[t._v("Uppercase Letters (A-Z)")]),t._v(" "),n("li",[t._v("Lowercase Letters (a-z)")]),t._v(" "),n("li",[t._v("Numbers (0-9)")])]),t._v(" "),n("p",{staticClass:"overflow-y-auto"},[n("span",[t._v("E.G.")]),t._v(" "),n("span",{staticClass:"font-mono"},[t._v("\n          a9K1sDZwQR1BQmktj0xyzH1isP5LEYLpNkyj1kzeCnwoJMNfjZ\n        ")])])]),t._v(" "),n("form",{staticClass:"divide-y",on:{submit:function(e){return e.preventDefault(),t.update.apply(null,arguments)}}},[n("div",{staticClass:"p-4"},[n("BaseLabel",{staticClass:"grid grid-cols-1 gap-1 sm:grid-cols-3 sm:items-center sm:gap-4"},[n("span",{staticClass:"block text-sm font-medium leading-5 text-gray-700"},[t._v("\n            Token\n          ")]),t._v(" "),n("div",{staticClass:"flex flex-col sm:col-span-2"},[n("BaseInput",{staticClass:"w-full",model:{value:t.apiKeyValue,callback:function(e){t.apiKeyValue=e},expression:"apiKeyValue"}})],1)])],1),t._v(" "),n("div",{staticClass:"p-4"},[n("div",{staticClass:"lg:inline-flex"},[n("BaseButton",{staticClass:"w-full space-x-2 lg:w-auto",attrs:{"display-type":"info"}},[t._v("\n            Update Token\n          ")])],1)])]),t._v(" "),t.apiKeyUpdate?n("BasePromise",{staticClass:"sr-only",attrs:{promise:t.apiKeyUpdate},scopedSlots:t._u([{key:"success",fn:function(){return[n("span",{staticClass:"p-4"},[t._v("Changed successfully")])]},proxy:!0}],null,!1,2892460225)}):t._e()],1)],1)}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{BaseSimpleCard:n(492).default,BasePromise:n(835).default,BaseInput:n(508).default,BaseLabel:n(488).default,BaseButton:n(310).default})},470:function(t,e,n){"use strict";n.d(e,"a",(function(){return f}));var r=n(200),c=n.n(r),o=n(20),l=n(500),d=Object(o.computed)((function(){var t=Object(l.a)();return t.value?"Bearer ".concat(t.value):void 0})),f=c.a.create();f.interceptors.request.use((function(t){var e=d.value;return e&&(t.headers.Authorization=e),t}))},471:function(t,e){t.exports=function(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t},t.exports.__esModule=!0,t.exports.default=t.exports},472:function(t,e,n){var r=n(491);t.exports=function(source,t){if(null==source)return{};var e,i,n=r(source,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(source);for(i=0;i<c.length;i++)e=c[i],t.indexOf(e)>=0||Object.prototype.propertyIsEnumerable.call(source,e)&&(n[e]=source[e])}return n},t.exports.__esModule=!0,t.exports.default=t.exports},491:function(t,e){t.exports=function(source,t){if(null==source)return{};var e,i,n={},r=Object.keys(source);for(i=0;i<r.length;i++)e=r[i],t.indexOf(e)>=0||(n[e]=source[e]);return n},t.exports.__esModule=!0,t.exports.default=t.exports},525:function(t,e,n){n(47),n(38),n(46),n(24),n(63),n(39),n(64);var r=n(471),c=n(472),o=["class","staticClass","style","staticStyle","attrs"];function l(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(object);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,n)}return e}n(121),t.exports={functional:!0,render:function(t,e){var n=e._c,data=(e._v,e.data),d=e.children,f=void 0===d?[]:d,v=data.class,y=data.staticClass,style=data.style,m=data.staticStyle,O=data.attrs,x=void 0===O?{}:O,w=c(data,o);return n("svg",function(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?l(Object(source),!0).forEach((function(e){r(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):l(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}({class:[v,y],style:[style,m],attrs:Object.assign({xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",fill:"currentColor","aria-hidden":"true"},x)},w),f.concat([n("path",{attrs:{d:"M6.28 5.22a.75.75 0 00-1.06 1.06L8.94 10l-3.72 3.72a.75.75 0 101.06 1.06L10 11.06l3.72 3.72a.75.75 0 101.06-1.06L11.06 10l3.72-3.72a.75.75 0 00-1.06-1.06L10 8.94 6.28 5.22z"}})]))}}},706:function(t,e,n){n(47),n(38),n(46),n(24),n(63),n(39),n(64);var r=n(471),c=n(472),o=["class","staticClass","style","staticStyle","attrs"];function l(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(object);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,n)}return e}n(121),t.exports={functional:!0,render:function(t,e){var n=e._c,data=(e._v,e.data),d=e.children,f=void 0===d?[]:d,v=data.class,y=data.staticClass,style=data.style,m=data.staticStyle,O=data.attrs,x=void 0===O?{}:O,w=c(data,o);return n("svg",function(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?l(Object(source),!0).forEach((function(e){r(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):l(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}({class:[v,y],style:[style,m],attrs:Object.assign({xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",fill:"currentColor","aria-hidden":"true"},x)},w),f.concat([n("path",{attrs:{"fill-rule":"evenodd",d:"M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z","clip-rule":"evenodd"}})]))}}}}]);