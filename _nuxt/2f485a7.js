(window.webpackJsonp=window.webpackJsonp||[]).push([[253,56,60,74,76],{1087:function(t,e,r){"use strict";var n=r(847),o=r.n(n),c=r(516),l=r(929),d=r(20),f=r(925),v={};v.props={id:{key:"id",required:!0,type:String},subscription:{key:"subscription",required:!0,type:null}},v.setup=function(t,e){var r=t;return{formattedType:Object(d.computed)((function(){return Object(f.a)(r.subscription.type)}))}},v.components=Object.assign({BackButton:c.a,ShieldCheckSvg:o.a,SubscriptionStateBadge:l.a},v.components);var y=v,m=r(49),component=Object(m.a)(y,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"flex flex-col space-y-2 lg:flex-row lg:items-end lg:justify-between lg:space-y-0"},[r("div",{staticClass:"flex flex-col space-y-6 lg:flex-row lg:items-center lg:space-x-6 lg:space-y-0"},[r("BackButton"),t._v(" "),r("div",{staticClass:"flex items-center space-x-2"},[r("div",{staticClass:"shrink-0 rounded-full bg-blue-900 p-2"},[r("ShieldCheckSvg",{staticClass:"h-auto w-6 text-white"})],1),t._v(" "),r("div",{staticClass:"flex flex-col -space-y-1"},[r("BaseTypography",{staticClass:"uppercase text-gray-500",attrs:{variant:"overline"}},[t._v("\n          "+t._s(t.formattedType)+"\n        ")]),t._v(" "),r("BaseTypography",{attrs:{variant:"h5",component:"h2"}},[t._v("\n          "+t._s(t.subscription.name)+"\n        ")])],1)])],1),t._v(" "),t.subscription.status?r("SubscriptionStateBadge",{attrs:{state:t.subscription.status.state}}):t._e()],1)}),[],!1,null,null,null);e.a=component.exports;installComponents(component,{BaseTypography:r(475).default})},2281:function(t,e,r){"use strict";r.r(e);r(102),r(103),r(119);var n=r(711),o=r(713),c=r(1087),l=r(20),d=r(529),f=r(481),v={setup:function(t,e){var r=Object(f.b)("id"),n=Object(f.b)("subscriptionId"),o=d.g.read(r,n),c=Object(f.a)(),v=Object(l.computed)((function(){return!c.value.path.includes("products")})),y=Object(l.computed)((function(){var t="/client/companies/".concat(encodeURIComponent(r.value),"/subscriptions/").concat(encodeURIComponent(n.value));return[{to:"".concat(t),name:"Overview"},{to:"".concat(t,"/settings"),name:"Settings"}]}));return{id:r,subscriptionRead:o,shouldShow:v,links:y}}};v.components=Object.assign({ParentPageWrapper:o.a,ParentPageLinks:n.a,SubscriptionIdHeader:c.a},v.components);var y=v,m=r(49),component=Object(m.a)(y,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("section",{staticClass:"md:space-y-12"},[t.shouldShow?r("ClientOnly",[r("ParentPageWrapper",[r("ParentPageLinks",{attrs:{links:t.links}})],1)],1):t._e(),t._v(" "),r("div",{staticClass:"space-y-8"},[r("BaseVueQuery",{attrs:{query:t.subscriptionRead},scopedSlots:t._u([{key:"success",fn:function(e){var data=e.data;return[r("SubscriptionIdHeader",{attrs:{id:t.id,subscription:data}})]}}])}),t._v(" "),r("NuxtChild")],1)],1)}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{BaseVueQuery:r(504).default})},470:function(t,e){t.exports=function(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t},t.exports.__esModule=!0,t.exports.default=t.exports},471:function(t,e,r){var n=r(490);t.exports=function(source,t){if(null==source)return{};var e,i,r=n(source,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(source);for(i=0;i<o.length;i++)e=o[i],t.indexOf(e)>=0||Object.prototype.propertyIsEnumerable.call(source,e)&&(r[e]=source[e])}return r},t.exports.__esModule=!0,t.exports.default=t.exports},475:function(t,e,r){"use strict";r.r(e);var n=r(20),o=Object(n.defineComponent)({inheritAttrs:!1});o.props={variant:{key:"variant",required:!0,type:null},component:{key:"component",required:!1,type:null,default:"span"}},o.setup=function(t,e){var r="antialiased",o={h1:"".concat(r," font-display text-4xl font-semibold leading-snug tracking-wide sm:text-5xl md:text-6xl"),h2:"".concat(r," font-display text-3xl font-semibold leading-9 tracking-normal sm:text-5xl sm:leading-10"),h3:"".concat(r," font-display text-3xl font-medium leading-8 tracking-normal sm:text-4xl sm:leading-10"),h4:"".concat(r," font-display text-2xl font-medium leading-8 tracking-wide sm:text-3xl sm:leading-9"),h5:"".concat(r," font-display text-2xl font-medium leading-6 tracking-normal"),h6:"".concat(r," font-display text-xl font-semibold leading-7 tracking-wide"),p1:"".concat(r," font-body text-base font-normal leading-7 tracking-wide"),p2:"".concat(r," font-body text-sm font-normal leading-6 tracking-normal"),subtitle1:"".concat(r," font-body text-lg font-normal leading-6 tracking-wide sm:text-xl"),subtitle2:"".concat(r," font-body text-xs font-medium leading-5 tracking-wide"),subtitle3:"".concat(r," font-display text-lg font-medium leading-5 tracking-wide"),overline:"".concat(r," font-display text-xs font-medium tracking-widest"),button:"".concat(r," font-body text-xs font-medium tracking-wider sm:text-sm xl:tracking-wide"),data:"".concat(r," font-mono text-xs font-normal tracking-wider sm:text-sm xl:tracking-wide")},c=t;return{displayTypeClass:Object(n.computed)((function(){return o[c.variant]}))}};var c=o,l=r(49),component=Object(l.a)(c,(function(){var t=this,e=t.$createElement;return(t._self._c||e)(t.component,t._g(t._b({tag:"Component",class:t.displayTypeClass},"Component",t.$attrs,!1),t.$listeners),[t._t("default")],2)}),[],!1,null,null,null);e.default=component.exports},481:function(t,e,r){"use strict";r.d(e,"a",(function(){return d})),r.d(e,"d",(function(){return f})),r.d(e,"b",(function(){return v})),r.d(e,"c",(function(){return y}));var n=r(30),o=(r(84),r(54),r(120),r(51),r(40),r(50),r(26),r(65),r(41),r(66),r(20));function c(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(object);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,r)}return e}function l(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?c(Object(source),!0).forEach((function(e){Object(n.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):c(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}function d(){var t=Object(o.getCurrentInstance)();if(!t)throw new Error("Not in setup()?");return Object(o.computed)((function(){return t.proxy.$route}))}function f(){var t=Object(o.getCurrentInstance)();if(!t)throw new Error("Not in setup()?");return t.proxy.$router}function v(t){var e=d();return Object(o.computed)((function(){var r=e.value.params[t];if(!r)throw new Error("Missing param: ".concat(t));return r}))}function y(t,e){var r,c=d(),v=f();return Object(o.computed)({get:function(){return c.value.query[t]||e},set:function(e){clearTimeout(r),r=setTimeout((function(){v.replace({query:l(l({},c.value.query),{},Object(n.a)({},t,e))})}),300)}})}},489:function(t,e,r){"use strict";r(26),r(156),r(119);var n=r(20),o={props:{definition:{key:"definition",required:!0,type:null}},setup:function(t,e){var r=t,o=Object(n.computed)((function(){return r.definition.icon[0]})),c=Object(n.computed)((function(){return r.definition.icon[1]}));return{svgPathData:Object(n.computed)((function(){return r.definition.icon[4].toString()})),viewBox:Object(n.computed)((function(){return"0 0 ".concat(o.value," ").concat(c.value)}))}}},c=o,l=r(49),component=Object(l.a)(c,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("svg",{attrs:{xmlns:"http://www.w3.org/2000/svg",viewBox:t.viewBox,"aria-hidden":"true",focusable:"false",role:"img"}},[r("path",{attrs:{fill:"currentColor",d:t.svgPathData}})])}),[],!1,null,null,null);e.a=component.exports},490:function(t,e){t.exports=function(source,t){if(null==source)return{};var e,i,r={},n=Object.keys(source);for(i=0;i<n.length;i++)e=n[i],t.indexOf(e)>=0||(r[e]=source[e]);return r},t.exports.__esModule=!0,t.exports.default=t.exports},492:function(t,e,r){"use strict";var n=r(489),o=r(496),c={setup:function(t,e){return{definition:o.definition}}};c.components=Object.assign({FontAwesomeSvg:n.a},c.components);var l=c,d=r(49),component=Object(d.a)(l,(function(){var t=this,e=t.$createElement;return(t._self._c||e)("FontAwesomeSvg",{staticClass:"h-5 w-5 animate-spin",attrs:{definition:t.definition}})}),[],!1,null,null,null);e.a=component.exports},494:function(t,e,r){"use strict";var n=r(495),o=r(20);r(42);var c={props:{error:{key:"error",required:!0,type:null}}};c.setup=function(t,e){var r=t;return{alert:Object(o.computed)((function(){return"string"==typeof(t=r.error)?{title:"Error",message:t}:t instanceof Error||t instanceof Object&&"name"in t&&"message"in t?{title:t.name,message:t.message}:{title:"Error",message:String(t)};var t}))}},c.components=Object.assign({AlertError:n.a},c.components);var l=c,d=r(49),component=Object(d.a)(l,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("section",[r("AlertError",{scopedSlots:t._u([{key:"title",fn:function(){return[t._v("\n      "+t._s(t.alert.title)+"\n    ")]},proxy:!0},{key:"message",fn:function(){return[t._v("\n      "+t._s(t.alert.message)+"\n    ")]},proxy:!0}])})],1)}),[],!1,null,null,null);e.a=component.exports},495:function(t,e,r){"use strict";var n=r(497),o=r.n(n),c={setup:function(t,e){return{}}};c.components=Object.assign({XCircleSvg:o.a},c.components);var l=c,d=r(49),component=Object(d.a)(l,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"rounded-md bg-red-50 p-4 shadow",attrs:{role:"alert"}},[r("div",{staticClass:"flex space-x-3"},[r("div",{staticClass:"flex-shrink-0"},[r("XCircleSvg",{staticClass:"h-5 w-5 text-red-500"})],1),t._v(" "),r("div",{staticClass:"space-y-2"},[r("h3",{staticClass:"text-sm font-medium leading-5 text-red-800"},[t._t("title")],2),t._v(" "),r("div",{staticClass:"text-sm leading-5 text-red-700"},[t._t("message")],2)])])])}),[],!1,null,null,null);e.a=component.exports},496:function(t,e,r){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n="spinner",o=[],c="f110",l="M304 48c0-26.5-21.5-48-48-48s-48 21.5-48 48s21.5 48 48 48s48-21.5 48-48zm0 416c0-26.5-21.5-48-48-48s-48 21.5-48 48s21.5 48 48 48s48-21.5 48-48zM48 304c26.5 0 48-21.5 48-48s-21.5-48-48-48s-48 21.5-48 48s21.5 48 48 48zm464-48c0-26.5-21.5-48-48-48s-48 21.5-48 48s21.5 48 48 48s48-21.5 48-48zM142.9 437c18.7-18.7 18.7-49.1 0-67.9s-49.1-18.7-67.9 0s-18.7 49.1 0 67.9s49.1 18.7 67.9 0zm0-294.2c18.7-18.7 18.7-49.1 0-67.9S93.7 56.2 75 75s-18.7 49.1 0 67.9s49.1 18.7 67.9 0zM369.1 437c18.7 18.7 49.1 18.7 67.9 0s18.7-49.1 0-67.9s-49.1-18.7-67.9 0s-18.7 49.1 0 67.9z";e.definition={prefix:"fas",iconName:n,icon:[512,512,o,c,l]},e.faSpinner=e.definition,e.prefix="fas",e.iconName=n,e.width=512,e.height=512,e.ligatures=o,e.unicode=c,e.svgPathData=l,e.aliases=o},497:function(t,e,r){r(51),r(40),r(50),r(26),r(65),r(41),r(66);var n=r(470),o=r(471),c=["class","staticClass","style","staticStyle","attrs"];function l(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(object);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,r)}return e}r(119),t.exports={functional:!0,render:function(t,e){var r=e._c,data=(e._v,e.data),d=e.children,f=void 0===d?[]:d,v=data.class,y=data.staticClass,style=data.style,m=data.staticStyle,x=data.attrs,h=void 0===x?{}:x,O=o(data,c);return r("svg",function(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?l(Object(source),!0).forEach((function(e){n(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):l(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}({class:[v,y],style:[style,m],attrs:Object.assign({xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",fill:"currentColor","aria-hidden":"true"},h)},O),f.concat([r("path",{attrs:{"fill-rule":"evenodd",d:"M10 18a8 8 0 100-16 8 8 0 000 16zM8.28 7.22a.75.75 0 00-1.06 1.06L8.94 10l-1.72 1.72a.75.75 0 101.06 1.06L10 11.06l1.72 1.72a.75.75 0 101.06-1.06L11.06 10l1.72-1.72a.75.75 0 00-1.06-1.06L10 8.94 8.28 7.22z","clip-rule":"evenodd"}})]))}}},499:function(t,e,r){"use strict";r.d(e,"a",(function(){return c}));var n=r(20),o=r(121);function c(){var t=Object(o.a)();return Object(n.computed)((function(){return t.accessToken}))}},500:function(t,e,r){"use strict";r.r(e);var n=r(20),o=Object(n.defineComponent)({inheritAttrs:!1});o.props={action:{key:"action",required:!1,type:null,default:"primary"},shape:{key:"shape",required:!1,type:null,default:"round"},color:{key:"color",required:!1,type:null,default:"base"},size:{key:"size",required:!1,type:null,default:"base"},to:{key:"to",required:!1,type:null,default:void 0}},o.setup=function(t,e){var r="inline-flex flex-shrink-0 justify-center items-center antialiased transform transition duration-200 hover:-translate-y-px hover:shadow-md focus:outline-none focus:ring disabled:cursor-not-allowed disabled:opacity-50",o={primary:{base:"".concat(r," text-white bg-blue-500 hover:bg-blue-600 focus:bg-blue-600 focus:ring-blue-200"),teal:"".concat(r," text-white bg-teal-500 hover:bg-teal-600 focus:bg-teal-600 focus:ring-teal-200"),light:"".concat(r," text-gray-400 border border-gray-400 hover:text-indigo-500 hover:shadow-none hover:border-indigo-500 focus:text-indigo-500 focus:shadow-none focus:ring-indigo-200 focus:border-indigo-500"),info:"".concat(r," text-white bg-prime-indigo hover:bg-indigo-500 focus:bg-indigo-500 focus:ring-indigo-200"),danger:"".concat(r," text-white bg-red-500 hover:bg-red-600 focus:bg-red-600 focus:ring-red-200")},secondary:{base:"".concat(r," border bg-white text-prime-navy hover:text-prime-darkest hover:shadow-inner focus:shadow-inner focus:text-prime-darkest focus:ring-gray-200"),teal:"".concat(r," bg-white text-teal-500 border-teal-500 hover:bg-teal-200 hover:text-teal-600 hover:border-transparent focus:bg-teal-200 focus:text-teal-600 focus:border-transparent focus:ring-teal-200"),light:"".concat(r," text-white hover:bg-gray-50 hover:text-gray-500 focus:bg-gray-50 focus:text-gray-500 focus:ring-gray-200"),info:"".concat(r," bg-white text-indigo-500 border-indigo-500 hover:bg-indigo-200 hover:text-indigo-600 hover:border-transparent focus:bg-indigo-200 focus:text-indigo-600 focus:border-transparent focus:ring-indigo-200"),danger:"".concat(r," bg-white text-red-500 border-red-500 hover:bg-red-200 hover:text-red-600 hover:border-transparent focus:bg-red-200 focus:text-red-600 focus:border-transparent focus:ring-red-200")}},c=t;return{SIZE_CLASSES:{xs:"p-0.5",small:"p-1",base:"p-2",large:"p-3"},SHAPE_CLASSES:{round:"rounded-full",square:"rounded-md"},COLOR_CLASSES:o,type:Object(n.computed)((function(){return c.to?"nuxt-link":"button"}))}};var c=o,l=r(49),component=Object(l.a)(c,(function(){var t=this,e=t.$createElement;return(t._self._c||e)(t.type,t._g(t._b({tag:"Component",class:[t.SIZE_CLASSES[t.size],t.SHAPE_CLASSES[t.shape],t.COLOR_CLASSES[t.action][t.color]],attrs:{to:t.to}},"Component",t.$attrs,!1),t.$listeners),[t._t("default")],2)}),[],!1,null,null,null);e.default=component.exports},504:function(t,e,r){"use strict";r.r(e);var n=r(494),o=r(492),c={props:{query:{key:"query",required:!0,type:null}},setup:function(t,e){var r=t.query;return{isLoading:r.isLoading,isError:r.isError,error:r.error,data:r.data}}};c.components=Object.assign({LoadingSpinner:o.a,GenericError:n.a},c.components);var l=c,d=r(49),f=Object(d.a)(l,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",[r("ClientOnly",[t.isLoading?[t._t("loading",(function(){return[r("LoadingSpinner")]}))]:t.isError?[t._t("error",(function(){return[r("GenericError",{attrs:{error:t.error}})]}),null,{error:t.error})]:[t._t("success",(function(){return[r("pre",[t._v(t._s(JSON.stringify(t.data,null,2)))])]}),null,{data:t.data})]],2)],1)}),[],!1,null,null,null).exports,v=Object(d.a)(f,undefined,undefined,!1,null,null,null);e.default=v.exports},506:function(t,e,r){r(51),r(40),r(50),r(26),r(65),r(41),r(66);var n=r(470),o=r(471),c=["class","staticClass","style","staticStyle","attrs"];function l(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(object);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,r)}return e}r(119),t.exports={functional:!0,render:function(t,e){var r=e._c,data=(e._v,e.data),d=e.children,f=void 0===d?[]:d,v=data.class,y=data.staticClass,style=data.style,m=data.staticStyle,x=data.attrs,h=void 0===x?{}:x,O=o(data,c);return r("svg",function(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?l(Object(source),!0).forEach((function(e){n(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):l(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}({class:[v,y],style:[style,m],attrs:Object.assign({xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",fill:"currentColor","aria-hidden":"true"},h)},O),f.concat([r("path",{attrs:{"fill-rule":"evenodd",d:"M12.79 5.23a.75.75 0 01-.02 1.06L8.832 10l3.938 3.71a.75.75 0 11-1.04 1.08l-4.5-4.25a.75.75 0 010-1.08l4.5-4.25a.75.75 0 011.06.02z","clip-rule":"evenodd"}})]))}}},511:function(t,e,r){"use strict";r.r(e);r(119);var n=r(20),o=Object(n.defineComponent)({inheritAttrs:!1});o.props={displayType:{key:"displayType",required:!1,type:null,default:"normal"}},o.setup=function(t,e){var text="no-underline antialiased font-body text-base leading-6 font-medium",r="focus:outline-none disabled:cursor-not-allowed disabled:opacity-50",base="".concat(r," ").concat(text," ").concat("transform transition duration-200 hover:-translate-y-px"," inline-flex"),o={normal:"".concat(base," text-blue-500 hover:text-blue-700 focus:text-blue-800"),dark:"".concat(base," text-white hover:text-gray-400 focus:text-gray-400"),gray:"".concat(base," text-gray-500 hover:text-prime-indigo focus:text-prime-indigo"),primary:"".concat(base," text-blue-500 hover:text-teal-500"),"primary-prime":"".concat(base," text-prime-indigo hover:text-indigo-400 focus:text-indigo-400"),secondary:"".concat(base," text-prime-navy hover:text-prime-indigo focus:text-prime-indigo"),none:"".concat(r," ").concat(text," inline-flex")},c=t;return{displayTypeClass:Object(n.computed)((function(){return o[c.displayType]}))}};var c=o,l=r(49),component=Object(l.a)(c,(function(){var t=this,e=t.$createElement;return(t._self._c||e)("NuxtLink",t._g(t._b({class:t.displayTypeClass},"NuxtLink",t.$attrs,!1),t.$listeners),[t._t("default")],2)}),[],!1,null,null,null);e.default=component.exports},516:function(t,e,r){"use strict";var n=r(506),o=r.n(n),c={};c.props={link:{key:"link",required:!1,type:null,default:"."},text:{key:"text",required:!1,type:String,default:"Back"}},c.setup=function(t,e){return{}},c.components=Object.assign({ChevronLeftSvg:o.a},c.components);var l=c,d=r(49),component=Object(d.a)(l,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",[t.link?r("BaseButton",{attrs:{shape:"rectangle","display-type":"light",size:"even",to:t.link}},[r("ChevronLeftSvg",{staticClass:"-ml-1 h-auto w-5"}),t._v(" "),r("span",[t._v(t._s(t.text))])],1):r("BaseButton",{attrs:{shape:"rectangle","display-type":"light",size:"even",to:t.link,append:""}},[r("ChevronLeftSvg",{staticClass:"-ml-1 h-auto w-5"}),t._v(" "),r("span",[t._v(t._s(t.text))])],1)],1)}),[],!1,null,null,null);e.a=component.exports;installComponents(component,{BaseButton:r(309).default})},711:function(t,e,r){"use strict";var n={};n.props={links:{key:"links",required:!0,type:Array},newLink:{key:"newLink",required:!1,type:null}},n.setup=function(t,e){return{}};var o=n,c=r(49),component=Object(c.a)(o,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("nav",{staticClass:"bg-white shadow"},[r("div",{staticClass:"mx-auto max-w-8xl sm:px-6 md:px-8"},[r("ul",{staticClass:"flex items-center space-x-4 overflow-x-auto"},[t._l(t.links,(function(link){return r("li",{key:link.name,staticClass:"text-gray-500 hover:text-prime-navy"},[r("BaseLink",{staticClass:"border-b-2 border-transparent p-2 hover:border-prime-navy focus:border-prime-navy focus:text-prime-navy focus:outline-none",attrs:{"exact-active-class":"text-prime-navy border-prime-navy focus:text-prime-navy focus:border-prime-navy",to:link.to,"display-type":"none"}},[r("BaseTypography",{staticClass:"whitespace-nowrap",attrs:{variant:"p2"}},[t._v("\n            "+t._s(link.name)+"\n          ")])],1)],1)})),t._v(" "),t.newLink?r("li",[r("BaseIcon",{attrs:{color:"light",size:"small",to:t.newLink}},[r("PlusSvg",{staticClass:"h-auto w-4 hover:text-prime-navy focus:text-prime-navy"})],1)],1):t._e()],2)])])}),[],!1,null,null,null);e.a=component.exports;installComponents(component,{BaseTypography:r(475).default,BaseLink:r(511).default,BaseIcon:r(500).default})},713:function(t,e,r){"use strict";var n=r(49),component=Object(n.a)({},(function(){var t=this,e=t.$createElement;return(t._self._c||e)("div",{staticClass:"absolute left-0 top-28 w-full"},[t._t("default")],2)}),[],!1,null,null,null);e.a=component.exports},847:function(t,e,r){r(51),r(40),r(50),r(26),r(65),r(41),r(66);var n=r(470),o=r(471),c=["class","staticClass","style","staticStyle","attrs"];function l(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(object);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,r)}return e}r(119),t.exports={functional:!0,render:function(t,e){var r=e._c,data=(e._v,e.data),d=e.children,f=void 0===d?[]:d,v=data.class,y=data.staticClass,style=data.style,m=data.staticStyle,x=data.attrs,h=void 0===x?{}:x,O=o(data,c);return r("svg",function(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?l(Object(source),!0).forEach((function(e){n(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):l(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}({class:[v,y],style:[style,m],attrs:Object.assign({xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",fill:"currentColor","aria-hidden":"true"},h)},O),f.concat([r("path",{attrs:{"fill-rule":"evenodd",d:"M9.661 2.237a.531.531 0 01.678 0 11.947 11.947 0 007.078 2.749.5.5 0 01.479.425c.069.52.104 1.05.104 1.59 0 5.162-3.26 9.563-7.834 11.256a.48.48 0 01-.332 0C5.26 16.564 2 12.163 2 7c0-.538.035-1.069.104-1.589a.5.5 0 01.48-.425 11.947 11.947 0 007.077-2.75zm4.196 5.954a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z","clip-rule":"evenodd"}})]))}}},925:function(t,e,r){"use strict";r.d(e,"a",(function(){return o}));var n=r(541);function o(t){switch(t){case n.SubscriptionType.INDIVIDUAL:return"Individual";case n.SubscriptionType.PORTFOLIO:return"Portfolio";case n.SubscriptionType.RESELLER:return"Reseller";default:return"N/A"}}},929:function(t,e,r){"use strict";var n=r(20),o=r(541);function c(t){switch(t){case o.SubscriptionState.ACTIVE:return"Active";case o.SubscriptionState.INACTIVE:return"Inactive";case o.SubscriptionState.ARCHIVED:return"Archived";default:return"N/A"}}var l={props:{state:{key:"state",required:!0,type:null}},setup:function(t,e){var r=t;return{toStringState:c,colors:Object(n.computed)((function(){switch(r.state){case 1:return{innerBall:"fill-green-600",outerBall:"fill-green-500",background:"bg-green-100",text:"text-green-900",outline:"border-green-200",stroke:"stroke-green-300"};case 2:return{innerBall:"fill-yellow-600",outerBall:"fill-yellow-500",background:"bg-yellow-100",text:"text-yellow-900",outline:"border-yellow-200",stroke:"stroke-yellow-300"};case 3:return{innerBall:"fill-red-600",outerBall:"fill-red-500",background:"bg-red-100",text:"text-red-900",outline:"border-red-200",stroke:"stroke-red-300"};default:return{innerBall:"fill-gray-600",outerBall:"fill-gray-500",background:"bg-gray-100",text:"text-gray-900",outline:"border-gray-200",stroke:"stroke-gray-300"}}}))}}},d=l,f=r(49),component=Object(f.a)(d,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"group inline-flex max-w-min shrink-0 items-center space-x-2 rounded-full border px-3 py-1 shadow",class:[t.colors.background,t.colors.outline]},[r("BaseTypography",{staticClass:"uppercase",class:t.colors.text,attrs:{variant:"overline"}},[t._v("\n    "+t._s(t.toStringState(t.state))+"\n  ")]),t._v(" "),r("svg",{staticClass:"relative h-3 w-3 rounded-full",attrs:{viewBox:"-9 -9 18 18"}},[r("circle",{staticClass:"fill-transparent",class:t.colors.stroke,attrs:{r:"8"}}),t._v(" "),r("circle",{staticClass:"absolute inline-flex h-full w-full opacity-75 group-hover:animate-ping",class:t.colors.outerBall,attrs:{r:"6"}}),t._v(" "),r("circle",{class:t.colors.innerBall,attrs:{r:"6"}})])],1)}),[],!1,null,null,null);e.a=component.exports;installComponents(component,{BaseTypography:r(475).default})}}]);