(window.webpackJsonp=window.webpackJsonp||[]).push([[216,53,59,64,70,72],{1176:function(e,t,r){"use strict";var n=r(20),o={};o.props={value:{key:"value",required:!0,type:String}},o.setup=function(e,t){var r=e;return{level:Object(n.computed)((function(){return"ADMIN"===r.value?{label:"Admin",color:"bg-blue-100 text-blue-900"}:"READ"===r.value?{label:"Read",color:"bg-purple-100 text-purple-900"}:{label:"Write",color:"bg-green-100 text-green-900"}}))}};var c=o,l=r(55),component=Object(l.a)(c,(function(){var e=this,t=e.$createElement;return(e._self._c||t)("BaseOverline",{staticClass:"inline-flex items-center rounded px-2 py-0.5 uppercase",class:e.level.color},[e._v("\n  "+e._s(e.level.label)+"\n")])}),[],!1,null,null,null);t.a=component.exports;installComponents(component,{BaseOverline:r(538).default})},2160:function(e,t,r){"use strict";r.r(t);var n=r(10),o=(r(48),r(504)),c=r.n(o),l=r(519),d=r(1176),f=r(500),v=r(201),m=r(482),y={setup:function(e,t){var r=Object(m.b)("username"),o=f.nb.list(r),c=Object(v.a)(),l=f.D.delete();function d(){return(d=Object(n.a)(regeneratorRuntime.mark((function e(t){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,l.mutateAsync({id:t,userId:r.value});case 2:c.success("Deleted company access.");case 3:case"end":return e.stop()}}),e)})))).apply(this,arguments)}return{username:r,userAccess:o,removeCompany:function(e){return d.apply(this,arguments)}}}};y.components=Object.assign({PermissionsBadge:d.a,XSvg:c.a,PlusSvg:l.a},y.components);var x=y,h=r(55),component=Object(h.a)(x,(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("BaseSimpleCard",{staticClass:"divide-y"},[r("BaseTypography",{staticClass:"p-4",attrs:{component:"h2",variant:"subtitle3"}},[e._v("\n    Companies\n  ")]),e._v(" "),r("BaseVueQuery",{attrs:{query:e.userAccess},scopedSlots:e._u([{key:"success",fn:function(t){var data=t.data;return[0===data.length?[r("BaseTypography",{staticClass:"p-4 text-gray-500",attrs:{component:"p",variant:"p1"}},[e._v("\n          This user is not currently a member of any company.\n        ")])]:e._l(data,(function(t){return r("div",{key:t.company.id,staticClass:"grid grid-cols-2 items-center"},[r("BaseTypography",{staticClass:"p-4 text-gray-500",attrs:{variant:"p1"}},[e._v("\n            "+e._s(t.company.name)+"\n          ")]),e._v(" "),r("div",{staticClass:"flex items-center justify-end space-x-4 p-4"},[r("PermissionsBadge",{attrs:{value:t.permission}}),e._v(" "),r("BaseIcon",{attrs:{action:"secondary",size:"xs",color:"danger",type:"button"},on:{click:function(r){return e.removeCompany(t.company.id)}}},[r("XSvg",{staticClass:"h-auto w-4"})],1)],1)],1)}))]}}])}),e._v(" "),r("div",{staticClass:"p-4"},[r("BaseButton",{staticClass:"space-x-2",attrs:{to:"/admin/users/"+e.username+"/companies/new"}},[r("PlusSvg",{staticClass:"w-4 xl:w-5"}),e._v(" "),r("span",[e._v("Company")])],1)],1)],1)}),[],!1,null,null,null);t.default=component.exports;installComponents(component,{BaseTypography:r(474).default,BaseIcon:r(487).default,BaseVueQuery:r(506).default,BaseButton:r(308).default,BaseSimpleCard:r(493).default})},469:function(e,t){e.exports=function(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e},e.exports.__esModule=!0,e.exports.default=e.exports},470:function(e,t,r){var n=r(489);e.exports=function(source,e){if(null==source)return{};var t,i,r=n(source,e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(source);for(i=0;i<o.length;i++)t=o[i],e.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(source,t)&&(r[t]=source[t])}return r},e.exports.__esModule=!0,e.exports.default=e.exports},474:function(e,t,r){"use strict";r.r(t);var n=r(20),o=Object(n.defineComponent)({inheritAttrs:!1});o.props={variant:{key:"variant",required:!0,type:null},component:{key:"component",required:!1,type:null,default:"span"}},o.setup=function(e,t){var r="antialiased",o={h1:"".concat(r," font-display text-4xl font-semibold leading-snug tracking-wide sm:text-5xl md:text-6xl"),h2:"".concat(r," font-display text-3xl font-semibold leading-9 tracking-normal sm:text-5xl sm:leading-10"),h3:"".concat(r," font-display text-3xl font-medium leading-8 tracking-normal sm:text-4xl sm:leading-10"),h4:"".concat(r," font-display text-2xl font-medium leading-8 tracking-wide sm:text-3xl sm:leading-9"),h5:"".concat(r," font-display text-2xl font-medium leading-6 tracking-normal"),h6:"".concat(r," font-display text-xl font-semibold leading-7 tracking-wide"),p1:"".concat(r," font-body text-base font-normal leading-7 tracking-wide"),p2:"".concat(r," font-body text-sm font-normal leading-6 tracking-normal"),subtitle1:"".concat(r," font-body text-lg font-normal leading-6 tracking-wide sm:text-xl"),subtitle2:"".concat(r," font-body text-xs font-medium leading-5 tracking-wide"),subtitle3:"".concat(r," font-display text-lg font-medium leading-5 tracking-wide"),overline:"".concat(r," font-display text-xs font-medium tracking-widest"),button:"".concat(r," font-body text-xs font-medium tracking-wider sm:text-sm xl:tracking-wide")},c=e;return{displayTypeClass:Object(n.computed)((function(){return o[c.variant]}))}};var c=o,l=r(55),component=Object(l.a)(c,(function(){var e=this,t=e.$createElement;return(e._self._c||t)(e.component,e._g(e._b({tag:"Component",class:e.displayTypeClass},"Component",e.$attrs,!1),e.$listeners),[e._t("default")],2)}),[],!1,null,null,null);t.default=component.exports},482:function(e,t,r){"use strict";r.d(t,"a",(function(){return d})),r.d(t,"d",(function(){return f})),r.d(t,"b",(function(){return v})),r.d(t,"c",(function(){return m}));var n=r(28),o=(r(84),r(49),r(103),r(47),r(38),r(46),r(24),r(63),r(39),r(64),r(20));function c(object,e){var t=Object.keys(object);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(object);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(object,e).enumerable}))),t.push.apply(t,r)}return t}function l(e){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?c(Object(source),!0).forEach((function(t){Object(n.a)(e,t,source[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(source)):c(Object(source)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(source,t))}))}return e}function d(){var e=Object(o.getCurrentInstance)();if(!e)throw new Error("Not in setup()?");return Object(o.computed)((function(){return e.proxy.$route}))}function f(){var e=Object(o.getCurrentInstance)();if(!e)throw new Error("Not in setup()?");return e.proxy.$router}function v(e){var t=d();return Object(o.computed)((function(){var r=t.value.params[e];if(!r)throw new Error("Missing param: ".concat(e));return r}))}function m(e,t){var r,c=d(),v=f();return Object(o.computed)({get:function(){return c.value.query[e]||t},set:function(t){clearTimeout(r),r=setTimeout((function(){v.replace({query:l(l({},c.value.query),{},Object(n.a)({},e,t))})}),300)}})}},487:function(e,t,r){"use strict";r.r(t);var n=r(20),o=Object(n.defineComponent)({inheritAttrs:!1});o.props={action:{key:"action",required:!1,type:null,default:"primary"},shape:{key:"shape",required:!1,type:null,default:"round"},color:{key:"color",required:!1,type:null,default:"base"},size:{key:"size",required:!1,type:null,default:"base"},to:{key:"to",required:!1,type:null,default:void 0}},o.setup=function(e,t){var r="inline-flex flex-shrink-0 justify-center items-center antialiased transform transition duration-200 hover:-translate-y-px hover:shadow-md focus:outline-none focus:ring disabled:cursor-not-allowed disabled:opacity-50",o={primary:{base:"".concat(r," text-white bg-blue-500 hover:bg-blue-600 focus:bg-blue-600 focus:ring-blue-200"),teal:"".concat(r," text-white bg-teal-500 hover:bg-teal-600 focus:bg-teal-600 focus:ring-teal-200"),light:"".concat(r," text-gray-400 border border-gray-400 hover:text-indigo-500 hover:shadow-none hover:border-indigo-500 focus:text-indigo-500 focus:shadow-none focus:ring-indigo-200 focus:border-indigo-500"),info:"".concat(r," text-white bg-prime-indigo hover:bg-indigo-500 focus:bg-indigo-500 focus:ring-indigo-200"),danger:"".concat(r," text-white bg-red-500 hover:bg-red-600 focus:bg-red-600 focus:ring-red-200")},secondary:{base:"".concat(r," border bg-white text-prime-navy hover:text-prime-darkest hover:shadow-inner focus:shadow-inner focus:text-prime-darkest focus:ring-gray-200"),teal:"".concat(r," bg-white text-teal-500 border-teal-500 hover:bg-teal-200 hover:text-teal-600 hover:border-transparent focus:bg-teal-200 focus:text-teal-600 focus:border-transparent focus:ring-teal-200"),light:"".concat(r," text-white hover:bg-gray-50 hover:text-gray-500 focus:bg-gray-50 focus:text-gray-500 focus:ring-gray-200"),info:"".concat(r," bg-white text-indigo-500 border-indigo-500 hover:bg-indigo-200 hover:text-indigo-600 hover:border-transparent focus:bg-indigo-200 focus:text-indigo-600 focus:border-transparent focus:ring-indigo-200"),danger:"".concat(r," bg-white text-red-500 border-red-500 hover:bg-red-200 hover:text-red-600 hover:border-transparent focus:bg-red-200 focus:text-red-600 focus:border-transparent focus:ring-red-200")}},c=e;return{SIZE_CLASSES:{xs:"p-0.5",small:"p-1",base:"p-2",large:"p-3"},SHAPE_CLASSES:{round:"rounded-full",square:"rounded-md"},COLOR_CLASSES:o,type:Object(n.computed)((function(){return c.to?"nuxt-link":"button"}))}};var c=o,l=r(55),component=Object(l.a)(c,(function(){var e=this,t=e.$createElement;return(e._self._c||t)(e.type,e._g(e._b({tag:"Component",class:[e.SIZE_CLASSES[e.size],e.SHAPE_CLASSES[e.shape],e.COLOR_CLASSES[e.action][e.color]],attrs:{to:e.to}},"Component",e.$attrs,!1),e.$listeners),[e._t("default")],2)}),[],!1,null,null,null);t.default=component.exports},489:function(e,t){e.exports=function(source,e){if(null==source)return{};var t,i,r={},n=Object.keys(source);for(i=0;i<n.length;i++)t=n[i],e.indexOf(t)>=0||(r[t]=source[t]);return r},e.exports.__esModule=!0,e.exports.default=e.exports},491:function(e,t,r){"use strict";r(24),r(159),r(121);var n=r(20),o={props:{definition:{key:"definition",required:!0,type:null}},setup:function(e,t){var r=e,o=Object(n.computed)((function(){return r.definition.icon[0]})),c=Object(n.computed)((function(){return r.definition.icon[1]}));return{svgPathData:Object(n.computed)((function(){return r.definition.icon[4].toString()})),viewBox:Object(n.computed)((function(){return"0 0 ".concat(o.value," ").concat(c.value)}))}}},c=o,l=r(55),component=Object(l.a)(c,(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("svg",{attrs:{xmlns:"http://www.w3.org/2000/svg",viewBox:e.viewBox,"aria-hidden":"true",focusable:"false",role:"img"}},[r("path",{attrs:{fill:"currentColor",d:e.svgPathData}})])}),[],!1,null,null,null);t.a=component.exports},493:function(e,t,r){"use strict";r.r(t);var n=r(55),component=Object(n.a)({},(function(){var e=this,t=e.$createElement;return(e._self._c||t)("div",{staticClass:"rounded-xl bg-white shadow"},[e._t("default")],2)}),[],!1,null,null,null);t.default=component.exports},494:function(e,t,r){"use strict";var n=r(491),o=r(496),c={setup:function(e,t){return{definition:o.definition}}};c.components=Object.assign({FontAwesomeSvg:n.a},c.components);var l=c,d=r(55),component=Object(d.a)(l,(function(){var e=this,t=e.$createElement;return(e._self._c||t)("FontAwesomeSvg",{staticClass:"h-5 w-5 animate-spin",attrs:{definition:e.definition}})}),[],!1,null,null,null);t.a=component.exports},495:function(e,t,r){"use strict";var n=r(498),o=r.n(n),c={setup:function(e,t){return{}}};c.components=Object.assign({XCircleSvg:o.a},c.components);var l=c,d=r(55),component=Object(d.a)(l,(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"rounded-md bg-red-50 p-4 shadow",attrs:{role:"alert"}},[r("div",{staticClass:"flex space-x-3"},[r("div",{staticClass:"flex-shrink-0"},[r("XCircleSvg",{staticClass:"h-5 w-5 text-red-500"})],1),e._v(" "),r("div",{staticClass:"space-y-2"},[r("h3",{staticClass:"text-sm font-medium leading-5 text-red-800"},[e._t("title")],2),e._v(" "),r("div",{staticClass:"text-sm leading-5 text-red-700"},[e._t("message")],2)])])])}),[],!1,null,null,null);t.a=component.exports},496:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n="spinner",o=[],c="f110",l="M304 48c0-26.5-21.5-48-48-48s-48 21.5-48 48s21.5 48 48 48s48-21.5 48-48zm0 416c0-26.5-21.5-48-48-48s-48 21.5-48 48s21.5 48 48 48s48-21.5 48-48zM48 304c26.5 0 48-21.5 48-48s-21.5-48-48-48s-48 21.5-48 48s21.5 48 48 48zm464-48c0-26.5-21.5-48-48-48s-48 21.5-48 48s21.5 48 48 48s48-21.5 48-48zM142.9 437c18.7-18.7 18.7-49.1 0-67.9s-49.1-18.7-67.9 0s-18.7 49.1 0 67.9s49.1 18.7 67.9 0zm0-294.2c18.7-18.7 18.7-49.1 0-67.9S93.7 56.2 75 75s-18.7 49.1 0 67.9s49.1 18.7 67.9 0zM369.1 437c18.7 18.7 49.1 18.7 67.9 0s18.7-49.1 0-67.9s-49.1-18.7-67.9 0s-18.7 49.1 0 67.9z";t.definition={prefix:"fas",iconName:n,icon:[512,512,o,c,l]},t.faSpinner=t.definition,t.prefix="fas",t.iconName=n,t.width=512,t.height=512,t.ligatures=o,t.unicode=c,t.svgPathData=l,t.aliases=o},497:function(e,t,r){"use strict";var n=r(495),o=r(20);r(42);var c={props:{error:{key:"error",required:!0,type:null}}};c.setup=function(e,t){var r=e;return{alert:Object(o.computed)((function(){return"string"==typeof(e=r.error)?{title:"Error",message:e}:e instanceof Error||e instanceof Object&&"name"in e&&"message"in e?{title:e.name,message:e.message}:{title:"Error",message:String(e)};var e}))}},c.components=Object.assign({AlertError:n.a},c.components);var l=c,d=r(55),component=Object(d.a)(l,(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("section",[r("AlertError",{scopedSlots:e._u([{key:"title",fn:function(){return[e._v("\n      "+e._s(e.alert.title)+"\n    ")]},proxy:!0},{key:"message",fn:function(){return[e._v("\n      "+e._s(e.alert.message)+"\n    ")]},proxy:!0}])})],1)}),[],!1,null,null,null);t.a=component.exports},498:function(e,t,r){r(47),r(38),r(46),r(24),r(63),r(39),r(64);var n=r(469),o=r(470),c=["class","staticClass","style","staticStyle","attrs"];function l(object,e){var t=Object.keys(object);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(object);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(object,e).enumerable}))),t.push.apply(t,r)}return t}r(121),e.exports={functional:!0,render:function(e,t){var r=t._c,data=(t._v,t.data),d=t.children,f=void 0===d?[]:d,v=data.class,m=data.staticClass,style=data.style,y=data.staticStyle,x=data.attrs,h=void 0===x?{}:x,O=o(data,c);return r("svg",function(e){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?l(Object(source),!0).forEach((function(t){n(e,t,source[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(source)):l(Object(source)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(source,t))}))}return e}({class:[v,m],style:[style,y],attrs:Object.assign({xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",fill:"currentColor","aria-hidden":"true"},h)},O),f.concat([r("path",{attrs:{"fill-rule":"evenodd",d:"M10 18a8 8 0 100-16 8 8 0 000 16zM8.28 7.22a.75.75 0 00-1.06 1.06L8.94 10l-1.72 1.72a.75.75 0 101.06 1.06L10 11.06l1.72 1.72a.75.75 0 101.06-1.06L11.06 10l1.72-1.72a.75.75 0 00-1.06-1.06L10 8.94 8.28 7.22z","clip-rule":"evenodd"}})]))}}},504:function(e,t,r){r(47),r(38),r(46),r(24),r(63),r(39),r(64);var n=r(469),o=r(470),c=["class","staticClass","style","staticStyle","attrs"];function l(object,e){var t=Object.keys(object);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(object);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(object,e).enumerable}))),t.push.apply(t,r)}return t}r(121),e.exports={functional:!0,render:function(e,t){var r=t._c,data=(t._v,t.data),d=t.children,f=void 0===d?[]:d,v=data.class,m=data.staticClass,style=data.style,y=data.staticStyle,x=data.attrs,h=void 0===x?{}:x,O=o(data,c);return r("svg",function(e){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?l(Object(source),!0).forEach((function(t){n(e,t,source[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(source)):l(Object(source)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(source,t))}))}return e}({class:[v,m],style:[style,y],attrs:Object.assign({xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",fill:"currentColor","aria-hidden":"true"},h)},O),f.concat([r("path",{attrs:{d:"M6.28 5.22a.75.75 0 00-1.06 1.06L8.94 10l-3.72 3.72a.75.75 0 101.06 1.06L10 11.06l3.72 3.72a.75.75 0 101.06-1.06L11.06 10l3.72-3.72a.75.75 0 00-1.06-1.06L10 8.94 6.28 5.22z"}})]))}}},506:function(e,t,r){"use strict";r.r(t);var n=r(497),o=r(494),c={props:{query:{key:"query",required:!0,type:null}},setup:function(e,t){var r=e.query;return{isLoading:r.isLoading,isError:r.isError,error:r.error,data:r.data}}};c.components=Object.assign({LoadingSpinner:o.a,GenericError:n.a},c.components);var l=c,d=r(55),f=Object(d.a)(l,(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",[r("ClientOnly",[e.isLoading?[e._t("loading",(function(){return[r("LoadingSpinner")]}))]:e.isError?[e._t("error",(function(){return[r("GenericError",{attrs:{error:e.error}})]}),null,{error:e.error})]:[e._t("success",(function(){return[r("pre",[e._v(e._s(JSON.stringify(e.data,null,2)))])]}),null,{data:e.data})]],2)],1)}),[],!1,null,null,null).exports,v=Object(d.a)(f,undefined,undefined,!1,null,null,null);t.default=v.exports},519:function(e,t,r){"use strict";var n=r(55),component=Object(n.a)({},(function(){var e=this.$createElement,t=this._self._c||e;return t("svg",{staticClass:"h-5 w-5",attrs:{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",fill:"currentColor"}},[t("path",{attrs:{"fill-rule":"evenodd",d:"M10 3a1 1 0 011 1v5h5a1 1 0 110 2h-5v5a1 1 0 11-2 0v-5H4a1 1 0 110-2h5V4a1 1 0 011-1z","clip-rule":"evenodd"}})])}),[],!1,null,null,null);t.a=component.exports},538:function(e,t,r){"use strict";r.r(t);var n=r(55),component=Object(n.a)({},(function(){var e=this,t=e.$createElement;return(e._self._c||t)("span",{staticClass:"font-display text-xs font-medium tracking-widest antialiased"},[e._t("default")],2)}),[],!1,null,null,null);t.default=component.exports}}]);