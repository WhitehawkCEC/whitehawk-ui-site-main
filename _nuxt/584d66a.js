/*! For license information please see LICENSES */
(window.webpackJsonp=window.webpackJsonp||[]).push([[215,54,56,64,72],{2002:function(e,t,r){"use strict";r.r(t);var n=r(10),o=(r(48),r(18)),c=r(783),l=r(482),f={};f.props={username:{key:"username",required:!0,type:String},email:{key:"email",required:!0,type:String}},f.setup=function(e,t){var r=e,f=Object(o.ref)(!1),d=c.a.delete(Object(o.computed)((function(){return r.username}))),v=Object(l.d)();function y(){return(y=Object(n.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,d.mutateAsync();case 2:v.push("/admin/users");case 3:case"end":return e.stop()}}),e)})))).apply(this,arguments)}return{confirm:f,submit:function(){return y.apply(this,arguments)}}};var d=f,v=r(55),component=Object(v.a)(d,(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("form",{staticClass:"divide-y",on:{submit:function(t){return t.preventDefault(),e.submit.apply(null,arguments)}}},[r("BaseLabel",{staticClass:"flex flex-col space-x-2 p-4 lg:flex-row lg:justify-between"},[r("div",{staticClass:"flex items-center space-x-2"},[r("BaseInput",{attrs:{type:"checkbox"},model:{value:e.confirm,callback:function(t){e.confirm=t},expression:"confirm"}}),e._v(" "),r("span",[e._v("I am certain that I want to disable:")])],1),e._v(" "),r("a",{staticClass:"truncate indent-4 font-bold italic",attrs:{href:"mailto:"+e.email}},[e._v("\n      "+e._s(e.email)+"\n    ")])]),e._v(" "),r("div",{staticClass:"p-4"},[r("div",{staticClass:"md:inline-flex"},[r("BaseButton",{staticClass:"w-full md:w-auto",attrs:{"display-type":"danger",disabled:!e.confirm}},[e._v("\n        Disable\n      ")])],1)])],1)}),[],!1,null,null,null),y=component.exports;installComponents(component,{BaseInput:r(509).default,BaseLabel:r(484).default,BaseButton:r(308).default});r(121),r(46),r(24),r(73),r(85),r(86),r(76),r(42),r(77),r(51),r(49),r(38),r(74),r(75),r(50);var m=r(578),O=r.n(m),h=r(673),x=r(201);function j(e,t){var r="undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(!r){if(Array.isArray(e)||(r=function(e,t){if(!e)return;if("string"==typeof e)return w(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);"Object"===r&&e.constructor&&(r=e.constructor.name);if("Map"===r||"Set"===r)return Array.from(e);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return w(e,t)}(e))||t&&e&&"number"==typeof e.length){r&&(e=r);var i=0,n=function(){};return{s:n,n:function(){return i>=e.length?{done:!0}:{done:!1,value:e[i++]}},e:function(e){throw e},f:n}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var o,c=!0,l=!1;return{s:function(){r=r.call(e)},n:function(){var e=r.next();return c=e.done,e},e:function(e){l=!0,o=e},f:function(){try{c||null==r.return||r.return()}finally{if(l)throw o}}}}function w(e,t){(null==t||t>e.length)&&(t=e.length);for(var i=0,r=new Array(t);i<t;i++)r[i]=e[i];return r}var _={};_.props={username:{key:"username",required:!0,type:String}},_.setup=function(e,t){var r=e,c=["user-access-general","user-access-industry","user-access-rating","user-access-maturity","cyber-journey-black-kite"],l=Object(o.ref)([]),f=Object(o.ref)(""),d=[].concat(c,["admin","analyst","cognito-admin"]),v=h.a.list(Object(o.computed)((function(){return r.username}))),y=Object(o.computed)((function(){return(v.data.value||[]).map((function(e){return e.GroupName})).filter((function(e){return void 0!==e}))})),m=Object(o.computed)((function(){switch(f.value){case"whitehawkAdmin":return["admin","cognito-admin"];case"whitehawkAnalyst":return["analyst","cognito-admin"];case"client":return l.value;default:throw new Error(f.value)}})),O=Object(o.computed)((function(){return m.value.filter((function(e){return!y.value.includes(e)}))})),w=Object(o.computed)((function(){return y.value.filter((function(e){return!m.value.includes(e)})).filter((function(e){return d.includes(e)}))}));Object(o.watch)(y,(function(e){l.value=e.filter((function(e){return c.includes(e)})),e.includes("admin")?f.value="whitehawkAdmin":e.includes("analyst")?f.value="whitehawkAnalyst":f.value="client"}),{immediate:!0});var _=h.a.create(Object(o.computed)((function(){return r.username}))),k=h.a.delete(Object(o.computed)((function(){return r.username}))),C=Object(x.a)();function S(){return(S=Object(n.a)(regeneratorRuntime.mark((function e(){var t,n,o,c,l,f;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:e.prev=0,t=j(O.value),e.prev=2,t.s();case 4:if((n=t.n()).done){e.next=10;break}return o=n.value,e.next=8,_.mutateAsync({Username:r.username,GroupName:o});case 8:e.next=4;break;case 10:e.next=15;break;case 12:e.prev=12,e.t0=e.catch(2),t.e(e.t0);case 15:return e.prev=15,t.f(),e.finish(15);case 18:c=j(w.value),e.prev=19,c.s();case 21:if((l=c.n()).done){e.next=27;break}return f=l.value,e.next=25,k.mutateAsync({Username:r.username,GroupName:f});case 25:e.next=21;break;case 27:e.next=32;break;case 29:e.prev=29,e.t1=e.catch(19),c.e(e.t1);case 32:return e.prev=32,c.f(),e.finish(32);case 35:C.success("Saved groups"),e.next=41;break;case 38:e.prev=38,e.t2=e.catch(0),C.error("Failed to save groups: ".concat(e.t2),e.t2);case 41:case"end":return e.stop()}}),e,null,[[0,38],[2,12,15,18],[19,29,32,35]])})))).apply(this,arguments)}return{userRoleType:f,roleTypes:{whitehawkAdmin:{label:"WhiteHawk Administrator"},whitehawkAnalyst:{label:"WhiteHawk Analyst"},client:{label:"Client User"}},userGroups:v,save:function(){return S.apply(this,arguments)}}},_.components=Object.assign({SaveSvg:O.a},_.components);var k=_,C=Object(v.a)(k,(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",[r("BaseVueQuery",{attrs:{query:e.userGroups},scopedSlots:e._u([{key:"success",fn:function(){return[r("form",{staticClass:"divide-y",on:{submit:function(t){return t.preventDefault(),e.save.apply(null,arguments)}}},[r("div",{staticClass:"space-y-2 p-4"},e._l(e.roleTypes,(function(t,n){return r("BaseLabel",{key:n,staticClass:"flex items-center space-x-2"},[r("BaseInput",{attrs:{type:"radio",value:n},model:{value:e.userRoleType,callback:function(t){e.userRoleType=t},expression:"userRoleType"}}),e._v(" "),r("span",{staticClass:"capitalize"},[e._v(e._s(t.label))])],1)})),1),e._v(" "),r("div",{staticClass:"p-4"},[r("div",{staticClass:"md:inline-flex"},[r("BaseButton",{staticClass:"w-full space-x-2 md:w-auto",attrs:{"display-type":"info"}},[r("SaveSvg",{staticClass:"h-5 w-5"}),e._v(" "),r("span",[e._v("Save")])],1)],1)])])]},proxy:!0}])})],1)}),[],!1,null,null,null),S=C.exports;installComponents(C,{BaseInput:r(509).default,BaseLabel:r(484).default,BaseButton:r(308).default,BaseVueQuery:r(506).default});var A=r(806),P={setup:function(e,t){var r=Object(l.b)("username"),n=c.a.read(r);return{username:r,email:Object(o.computed)((function(){return n.data.value?Object(A.a)(n.data.value,"email"):null}))}}};P.components=Object.assign({UserGroupsEdit:S,DisableUserForm:y},P.components);var E=P,$=Object(v.a)(E,(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("section",{staticClass:"space-y-8"},[r("BaseSimpleCard",{staticClass:"divide-y"},[r("h2",{staticClass:"p-4 font-display text-lg font-semibold"},[e._v("Edit Groups")]),e._v(" "),r("UserGroupsEdit",{attrs:{username:e.username}})],1),e._v(" "),r("BaseSimpleCard",{staticClass:"divide-y"},[r("h2",{staticClass:"p-4 font-display text-lg font-semibold"},[e._v("Disable User")]),e._v(" "),e.email?r("DisableUserForm",{attrs:{username:e.username,email:e.email}}):e._e()],1)],1)}),[],!1,null,null,null);t.default=$.exports;installComponents($,{BaseSimpleCard:r(493).default})},469:function(e,t){e.exports=function(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e},e.exports.__esModule=!0,e.exports.default=e.exports},470:function(e,t,r){var n=r(489);e.exports=function(source,e){if(null==source)return{};var t,i,r=n(source,e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(source);for(i=0;i<o.length;i++)t=o[i],e.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(source,t)&&(r[t]=source[t])}return r},e.exports.__esModule=!0,e.exports.default=e.exports},477:function(e,t,r){"use strict";r.d(t,"b",(function(){return m})),r.d(t,"c",(function(){return O})),r.d(t,"a",(function(){return h}));r(47),r(38),r(46),r(24),r(63),r(39),r(64);var n=r(36),o=r(104),c=r(28),l=(r(199),r(18));function f(object,e){var t=Object.keys(object);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(object);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(object,e).enumerable}))),t.push.apply(t,r)}return t}function d(e){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?f(Object(source),!0).forEach((function(t){Object(c.a)(e,t,source[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(source)):f(Object(source)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(source,t))}))}return e}var v=!0,y={prop:"value",event:"input"};function m(e,t){var r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:y,n=r.prop,o=r.event;return Object(l.computed)({get:function(){return e[n]},set:function(e){t(o,e)}})}function O(e,t){var r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:y,n=r.prop,o=r.event;return Object(l.computed)((function(){var r={},c=e[n]||{};return new Proxy(c,{get:function(e,t){return e[t]},set:function(e,n,c){return r[n]=c,t(o,d(d({},e),r)),v}})}))}function h(e,t){var r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:y,c=r.prop,f=r.event;return Object(l.computed)((function(){var r={},l=e[c]||[];return new Proxy(l,{get:function(e,t){return e[t]},set:function(e,c,l){if(e[c]===l)return v;var d=Object(o.a)(e);r[c]=l;for(var y=0,m=Object.entries(r);y<m.length;y++){var O=Object(n.a)(m[y],2),h=O[0],x=O[1];d[h]=x}return t(f,d),v}})}))}},482:function(e,t,r){"use strict";r.d(t,"b",(function(){return d})),r.d(t,"c",(function(){return v}));var n=r(28),o=(r(84),r(49),r(103),r(47),r(38),r(46),r(24),r(63),r(39),r(64),r(67)),c=r(18);function l(object,e){var t=Object.keys(object);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(object);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(object,e).enumerable}))),t.push.apply(t,r)}return t}function f(e){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?l(Object(source),!0).forEach((function(t){Object(n.a)(e,t,source[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(source)):l(Object(source)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(source,t))}))}return e}function d(e){var t=Object(o.g)();return Object(c.computed)((function(){var r=t.value.params[e];if(!r)throw new Error("Missing param: ".concat(e));return r}))}function v(e,t){var r,l=Object(o.g)(),d=Object(o.h)();return Object(c.computed)({get:function(){return l.value.query[e]||t},set:function(t){clearTimeout(r),r=setTimeout((function(){d.replace({query:f(f({},l.value.query),{},Object(n.a)({},e,t))})}),300)}})}r.d(t,"a",(function(){return o.g})),r.d(t,"d",(function(){return o.h}))},484:function(e,t,r){"use strict";r.r(t);var n=r(18),o=Object(n.defineComponent)({inheritAttrs:!1}),c=r(55),component=Object(c.a)(o,(function(){var e=this,t=e.$createElement;return(e._self._c||t)("label",e._g(e._b({staticClass:"block font-body text-sm font-medium leading-5 tracking-wide text-gray-600 antialiased",attrs:{role:"label"}},"label",e.$attrs,!1),e.$listeners),[e._t("default")],2)}),[],!1,null,null,null);t.default=component.exports},489:function(e,t){e.exports=function(source,e){if(null==source)return{};var t,i,r={},n=Object.keys(source);for(i=0;i<n.length;i++)t=n[i],e.indexOf(t)>=0||(r[t]=source[t]);return r},e.exports.__esModule=!0,e.exports.default=e.exports},491:function(e,t,r){"use strict";r(24),r(159),r(121);var n=r(18),o={props:{definition:{key:"definition",required:!0,type:null}},setup:function(e,t){var r=e,o=Object(n.computed)((function(){return r.definition.icon[0]})),c=Object(n.computed)((function(){return r.definition.icon[1]}));return{svgPathData:Object(n.computed)((function(){return r.definition.icon[4].toString()})),viewBox:Object(n.computed)((function(){return"0 0 ".concat(o.value," ").concat(c.value)}))}}},c=o,l=r(55),component=Object(l.a)(c,(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("svg",{attrs:{xmlns:"http://www.w3.org/2000/svg",viewBox:e.viewBox,"aria-hidden":"true",focusable:"false",role:"img"}},[r("path",{attrs:{fill:"currentColor",d:e.svgPathData}})])}),[],!1,null,null,null);t.a=component.exports},493:function(e,t,r){"use strict";r.r(t);var n=r(55),component=Object(n.a)({},(function(){var e=this,t=e.$createElement;return(e._self._c||t)("div",{staticClass:"rounded-xl bg-white shadow"},[e._t("default")],2)}),[],!1,null,null,null);t.default=component.exports},494:function(e,t,r){"use strict";var n=r(491),o=r(496),c={setup:function(e,t){return{definition:o.definition}}};c.components=Object.assign({FontAwesomeSvg:n.a},c.components);var l=c,f=r(55),component=Object(f.a)(l,(function(){var e=this,t=e.$createElement;return(e._self._c||t)("FontAwesomeSvg",{staticClass:"h-5 w-5 animate-spin",attrs:{definition:e.definition}})}),[],!1,null,null,null);t.a=component.exports},495:function(e,t,r){"use strict";var n=r(498),o=r.n(n),c={setup:function(e,t){return{}}};c.components=Object.assign({XCircleSvg:o.a},c.components);var l=c,f=r(55),component=Object(f.a)(l,(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"rounded-md bg-red-50 p-4 shadow",attrs:{role:"alert"}},[r("div",{staticClass:"flex space-x-3"},[r("div",{staticClass:"flex-shrink-0"},[r("XCircleSvg",{staticClass:"h-5 w-5 text-red-500"})],1),e._v(" "),r("div",{staticClass:"space-y-2"},[r("h3",{staticClass:"text-sm font-medium leading-5 text-red-800"},[e._t("title")],2),e._v(" "),r("div",{staticClass:"text-sm leading-5 text-red-700"},[e._t("message")],2)])])])}),[],!1,null,null,null);t.a=component.exports},496:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n="spinner",o=[],c="f110",l="M304 48c0-26.5-21.5-48-48-48s-48 21.5-48 48s21.5 48 48 48s48-21.5 48-48zm0 416c0-26.5-21.5-48-48-48s-48 21.5-48 48s21.5 48 48 48s48-21.5 48-48zM48 304c26.5 0 48-21.5 48-48s-21.5-48-48-48s-48 21.5-48 48s21.5 48 48 48zm464-48c0-26.5-21.5-48-48-48s-48 21.5-48 48s21.5 48 48 48s48-21.5 48-48zM142.9 437c18.7-18.7 18.7-49.1 0-67.9s-49.1-18.7-67.9 0s-18.7 49.1 0 67.9s49.1 18.7 67.9 0zm0-294.2c18.7-18.7 18.7-49.1 0-67.9S93.7 56.2 75 75s-18.7 49.1 0 67.9s49.1 18.7 67.9 0zM369.1 437c18.7 18.7 49.1 18.7 67.9 0s18.7-49.1 0-67.9s-49.1-18.7-67.9 0s-18.7 49.1 0 67.9z";t.definition={prefix:"fas",iconName:n,icon:[512,512,o,c,l]},t.faSpinner=t.definition,t.prefix="fas",t.iconName=n,t.width=512,t.height=512,t.ligatures=o,t.unicode=c,t.svgPathData=l,t.aliases=o},497:function(e,t,r){"use strict";var n=r(495),o=r(18);r(42);var c={props:{error:{key:"error",required:!0,type:null}}};c.setup=function(e,t){var r=e;return{alert:Object(o.computed)((function(){return"string"==typeof(e=r.error)?{title:"Error",message:e}:e instanceof Error||e instanceof Object&&"name"in e&&"message"in e?{title:e.name,message:e.message}:{title:"Error",message:String(e)};var e}))}},c.components=Object.assign({AlertError:n.a},c.components);var l=c,f=r(55),component=Object(f.a)(l,(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("section",[r("AlertError",{scopedSlots:e._u([{key:"title",fn:function(){return[e._v("\n      "+e._s(e.alert.title)+"\n    ")]},proxy:!0},{key:"message",fn:function(){return[e._v("\n      "+e._s(e.alert.message)+"\n    ")]},proxy:!0}])})],1)}),[],!1,null,null,null);t.a=component.exports},498:function(e,t,r){r(47),r(38),r(46),r(24),r(63),r(39),r(64);var n=r(469),o=r(470),c=["class","staticClass","style","staticStyle","attrs"];function l(object,e){var t=Object.keys(object);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(object);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(object,e).enumerable}))),t.push.apply(t,r)}return t}r(121),e.exports={functional:!0,render:function(e,t){var r=t._c,data=(t._v,t.data),f=t.children,d=void 0===f?[]:f,v=data.class,y=data.staticClass,style=data.style,m=data.staticStyle,O=data.attrs,h=void 0===O?{}:O,x=o(data,c);return r("svg",function(e){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?l(Object(source),!0).forEach((function(t){n(e,t,source[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(source)):l(Object(source)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(source,t))}))}return e}({class:[v,y],style:[style,m],attrs:Object.assign({xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",fill:"currentColor","aria-hidden":"true"},h)},x),d.concat([r("path",{attrs:{"fill-rule":"evenodd",d:"M10 18a8 8 0 100-16 8 8 0 000 16zM8.28 7.22a.75.75 0 00-1.06 1.06L8.94 10l-1.72 1.72a.75.75 0 101.06 1.06L10 11.06l1.72 1.72a.75.75 0 101.06-1.06L11.06 10l1.72-1.72a.75.75 0 00-1.06-1.06L10 8.94 8.28 7.22z","clip-rule":"evenodd"}})]))}}},506:function(e,t,r){"use strict";r.r(t);var n=r(497),o=r(494),c={props:{query:{key:"query",required:!0,type:null}},setup:function(e,t){var r=e.query;return{isLoading:r.isLoading,isError:r.isError,error:r.error,data:r.data}}};c.components=Object.assign({LoadingSpinner:o.a,GenericError:n.a},c.components);var l=c,f=r(55),d=Object(f.a)(l,(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",[r("ClientOnly",[e.isLoading?[e._t("loading",(function(){return[r("LoadingSpinner")]}))]:e.isError?[e._t("error",(function(){return[r("GenericError",{attrs:{error:e.error}})]}),null,{error:e.error})]:[e._t("success",(function(){return[r("pre",[e._v(e._s(JSON.stringify(e.data,null,2)))])]}),null,{data:e.data})]],2)],1)}),[],!1,null,null,null).exports,v=Object(f.a)(d,undefined,undefined,!1,null,null,null);t.default=v.exports},509:function(e,t,r){"use strict";r.r(t);var n=r(18),o=r(477),c={prop:"modelValue",event:"model-value-change"},l=Object(n.defineComponent)({inheritAttrs:!1,model:c});l.props={modelValue:{key:"modelValue",required:!1,type:null,default:void 0},type:{key:"type",required:!1,type:String,default:"text"}},l.setup=function(e,t){var r=e,l=t.emit,f=Object(o.b)(r,l,c),d="shadow-sm border border-gray-300 focus:outline-none focus:border-blue-300 focus:ring focus:ring-opacity-50 transition duration-150 ease-in-out disabled:cursor-not-allowed inline-flex",v="".concat(d," rounded text-blue-500 focus:ring-blue-200"),y="".concat(d," text-blue-500 focus:ring-blue-200"),m="".concat(d," text-sm sm:text-base rounded-md read-only:bg-gray-200 focus:ring-blue-200");return{proxy:f,dynamicClass:Object(n.computed)((function(){switch(r.type){case"checkbox":return v;case"radio":return y;default:return m}}))}};var f=l,d=r(55),component=Object(d.a)(f,(function(){var e=this,t=e.$createElement,r=e._self._c||t;return"number"===e.type?r("input",e._g(e._b({directives:[{name:"model",rawName:"v-model.number",value:e.proxy,expression:"proxy",modifiers:{number:!0}}],staticClass:"block",class:e.dynamicClass,attrs:{type:e.type,pattern:"^[^ ].+[^ ]$"},domProps:{value:e.$attrs.value,value:e.proxy},on:{input:function(t){t.target.composing||(e.proxy=e._n(t.target.value))},blur:function(t){return e.$forceUpdate()}}},"input",e.$attrs,!1),e.$listeners)):"checkbox"===e.type?r("input",e._g(e._b({directives:[{name:"model",rawName:"v-model",value:e.proxy,expression:"proxy"}],staticClass:"block",class:e.dynamicClass,attrs:{pattern:"^[^ ].+[^ ]$",type:"checkbox"},domProps:{value:e.$attrs.value,checked:Array.isArray(e.proxy)?e._i(e.proxy,e.$attrs.value)>-1:e.proxy},on:{change:function(t){var r=e.proxy,n=t.target,o=!!n.checked;if(Array.isArray(r)){var c=e.$attrs.value,l=e._i(r,c);n.checked?l<0&&(e.proxy=r.concat([c])):l>-1&&(e.proxy=r.slice(0,l).concat(r.slice(l+1)))}else e.proxy=o}}},"input",e.$attrs,!1),e.$listeners)):"radio"===e.type?r("input",e._g(e._b({directives:[{name:"model",rawName:"v-model",value:e.proxy,expression:"proxy"}],staticClass:"block",class:e.dynamicClass,attrs:{pattern:"^[^ ].+[^ ]$",type:"radio"},domProps:{value:e.$attrs.value,checked:e._q(e.proxy,e.$attrs.value)},on:{change:function(t){e.proxy=e.$attrs.value}}},"input",e.$attrs,!1),e.$listeners)):r("input",e._g(e._b({directives:[{name:"model",rawName:"v-model",value:e.proxy,expression:"proxy"}],staticClass:"block",class:e.dynamicClass,attrs:{pattern:"^[^ ].+[^ ]$",type:e.type},domProps:{value:e.$attrs.value,value:e.proxy},on:{input:function(t){t.target.composing||(e.proxy=t.target.value)}}},"input",e.$attrs,!1),e.$listeners))}),[],!1,null,null,null);t.default=component.exports},527:function(e,t,r){"use strict";function n(e,t){this.v=e,this.k=t}r.d(t,"a",(function(){return n}))},564:function(e,t,r){r(223)("asyncIterator")},568:function(e,t,r){"use strict";r.d(t,"a",(function(){return o}));var n=r(527);function o(e){return new n.a(e,0)}},571:function(e,t,r){"use strict";r.d(t,"a",(function(){return c}));var n=r(527);function o(e){var t,r;function o(t,r){try{var l=e[t](r),f=l.value,d=f instanceof n.a;Promise.resolve(d?f.v:f).then((function(r){if(d){var n="return"===t?"return":"next";if(!f.k||r.done)return o(n,r);r=e[n](r).value}c(l.done?"return":"normal",r)}),(function(e){o("throw",e)}))}catch(e){c("throw",e)}}function c(e,n){switch(e){case"return":t.resolve({value:n,done:!0});break;case"throw":t.reject(n);break;default:t.resolve({value:n,done:!1})}(t=t.next)?o(t.key,t.arg):r=null}this._invoke=function(e,n){return new Promise((function(c,l){var f={key:e,arg:n,resolve:c,reject:l,next:null};r?r=r.next=f:(t=r=f,o(e,n))}))},"function"!=typeof e.return&&(this.return=void 0)}function c(e){return function(){return new o(e.apply(this,arguments))}}o.prototype["function"==typeof Symbol&&Symbol.asyncIterator||"@@asyncIterator"]=function(){return this},o.prototype.next=function(e){return this._invoke("next",e)},o.prototype.throw=function(e){return this._invoke("throw",e)},o.prototype.return=function(e){return this._invoke("return",e)}},578:function(e,t,r){r(47),r(38),r(46),r(24),r(63),r(39),r(64);var n=r(469),o=r(470),c=["class","staticClass","style","staticStyle","attrs"];function l(object,e){var t=Object.keys(object);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(object);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(object,e).enumerable}))),t.push.apply(t,r)}return t}r(121),e.exports={functional:!0,render:function(e,t){var r=t._c,data=(t._v,t.data),f=t.children,d=void 0===f?[]:f,v=data.class,y=data.staticClass,style=data.style,m=data.staticStyle,O=data.attrs,h=void 0===O?{}:O,x=o(data,c);return r("svg",function(e){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?l(Object(source),!0).forEach((function(t){n(e,t,source[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(source)):l(Object(source)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(source,t))}))}return e}({class:[v,y],style:[style,m],attrs:Object.assign({xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",fill:"currentColor","aria-hidden":"true"},h)},x),d.concat([r("path",{attrs:{d:"M13.75 7h-3v5.296l1.943-2.048a.75.75 0 011.114 1.004l-3.25 3.5a.75.75 0 01-1.114 0l-3.25-3.5a.75.75 0 111.114-1.004l1.943 2.048V7h1.5V1.75a.75.75 0 00-1.5 0V7h-3A2.25 2.25 0 004 9.25v7.5A2.25 2.25 0 006.25 19h7.5A2.25 2.25 0 0016 16.75v-7.5A2.25 2.25 0 0013.75 7z"}})]))}}},673:function(e,t,r){"use strict";r.d(t,"a",(function(){return v}));var n=r(10),o=(r(48),r(18)),c=r(197),l=r(572),f=r(558),d=r(566),v={create:function(e){var t=Object(c.d)();return Object(c.b)(f.a.adminAddUserToGroup.bind(f.a),{onSuccess:function(){t.invalidateQueries([d.a,"users",e,"groups"],{exact:!0})}})},delete:function(e){var t=Object(c.d)();return Object(c.b)(f.a.adminRemoveUserFromGroup.bind(f.a),{onSuccess:function(){t.invalidateQueries([d.a,"users",e,"groups"],{exact:!0})}})},list:function(e){return Object(c.c)([d.a,"users",e,"groups"],Object(n.a)(regeneratorRuntime.mark((function t(){var r;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(e.value){t.next=2;break}throw new Error("Missing username");case 2:return r=function(t){return f.a.adminListGroupsForUser({Username:e.value,NextToken:t})},t.next=5,Object(l.a)(Object(l.b)(r,"NextToken","Groups"));case 5:return t.abrupt("return",t.sent);case 6:case"end":return t.stop()}}),t)}))),{enabled:Object(o.computed)((function(){return void 0!==e.value}))})}}},760:function(e,t,r){"use strict";e.exports=function(e){var t=typeof e;if("string"===t||e instanceof String){if(!e.trim())return!1}else if("number"!==t&&!(e instanceof Number))return!1;return e-e+1>=0}},761:function(e,t){var r=Object.prototype.toString;function n(e){return"function"==typeof e.constructor?e.constructor.name:null}e.exports=function(e){if(void 0===e)return"undefined";if(null===e)return"null";var t,o=typeof e;if("boolean"===o)return"boolean";if("string"===o)return"string";if("number"===o)return"number";if("symbol"===o)return"symbol";if("function"===o)return t=e,"GeneratorFunction"===n(t)?"generatorfunction":"function";if(function(e){return Array.isArray?Array.isArray(e):e instanceof Array}(e))return"array";if(function(e){if(e.constructor&&"function"==typeof e.constructor.isBuffer)return e.constructor.isBuffer(e);return!1}(e))return"buffer";if(function(e){try{if("number"==typeof e.length&&"function"==typeof e.callee)return!0}catch(e){if(-1!==e.message.indexOf("callee"))return!0}return!1}(e))return"arguments";if(function(e){return e instanceof Date||"function"==typeof e.toDateString&&"function"==typeof e.getDate&&"function"==typeof e.setDate}(e))return"date";if(function(e){return e instanceof Error||"string"==typeof e.message&&e.constructor&&"number"==typeof e.constructor.stackTraceLimit}(e))return"error";if(function(e){return e instanceof RegExp||"string"==typeof e.flags&&"boolean"==typeof e.ignoreCase&&"boolean"==typeof e.multiline&&"boolean"==typeof e.global}(e))return"regexp";switch(n(e)){case"Symbol":return"symbol";case"Promise":return"promise";case"WeakMap":return"weakmap";case"WeakSet":return"weakset";case"Map":return"map";case"Set":return"set";case"Int8Array":return"int8array";case"Uint8Array":return"uint8array";case"Uint8ClampedArray":return"uint8clampedarray";case"Int16Array":return"int16array";case"Uint16Array":return"uint16array";case"Int32Array":return"int32array";case"Uint32Array":return"uint32array";case"Float32Array":return"float32array";case"Float64Array":return"float64array"}if(function(e){return"function"==typeof e.throw&&"function"==typeof e.return&&"function"==typeof e.next}(e))return"generator";switch(o=r.call(e)){case"[object Object]":return"object";case"[object Map Iterator]":return"mapiterator";case"[object Set Iterator]":return"setiterator";case"[object String Iterator]":return"stringiterator";case"[object Array Iterator]":return"arrayiterator"}return o.slice(8,-1).toLowerCase().replace(/\s/g,"")}},762:function(e,t){e.exports=function(e){var t="Uint32Array"in e,r=e.crypto||e.msCrypto,n=r&&"function"==typeof r.getRandomValues;if(!(t&&n))return Math.random;var o=new Uint32Array(1),c=Math.pow(2,32);function l(){return r.getRandomValues(o),o[0]/c}return l.cryptographic=!0,l}("undefined"!=typeof self?self:window)},788:function(e,t,r){"use strict";var n=r(760),o=r(761),c=r(762);e.exports=function(pattern,e,t){if(void 0===pattern)throw new Error("randomatic expects a string or number.");var r=!1;1===arguments.length&&("string"==typeof pattern?e=pattern.length:n(pattern)&&(t={},e=pattern,pattern="*"));"object"===o(e)&&e.hasOwnProperty("chars")&&(pattern=(t=e).chars,e=pattern.length,r=!0);var f=t||{},mask="",d="";-1!==pattern.indexOf("?")&&(mask+=f.chars);-1!==pattern.indexOf("a")&&(mask+=l.lower);-1!==pattern.indexOf("A")&&(mask+=l.upper);-1!==pattern.indexOf("0")&&(mask+=l.number);-1!==pattern.indexOf("!")&&(mask+=l.special);-1!==pattern.indexOf("*")&&(mask+=l.all);r&&(mask+=pattern);if(f.exclude){var v="string"===o(f.exclude)?f.exclude:f.exclude.join("");v=v.replace(new RegExp("[\\]]+","g"),""),mask=mask.replace(new RegExp("["+v+"]+","g"),""),-1!==f.exclude.indexOf("]")&&(mask=mask.replace(new RegExp("[\\]]+","g"),""))}for(;e--;)d+=mask.charAt(parseInt(c()*mask.length,10));return d},e.exports.isCrypto=!!c.cryptographic;var l={lower:"abcdefghijklmnopqrstuvwxyz",upper:"ABCDEFGHIJKLMNOPQRSTUVWXYZ",number:"0123456789",special:"~!@#$%^&()_+-={}[];',."};l.all=l.lower+l.upper+l.number+l.special},806:function(e,t,r){"use strict";r(309),r(24);t.a=function(e,t){var r=function(e){return"Attributes"in e}(e)?e.Attributes:e.UserAttributes,n=null==r?void 0:r.find((function(e){return e.Name===t}));return null==n?void 0:n.Value}}}]);