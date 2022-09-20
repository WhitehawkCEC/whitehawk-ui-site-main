(window.webpackJsonp=window.webpackJsonp||[]).push([[212,67],{1084:function(e,t,r){"use strict";r(494),r(85),r(86);var n=r(20),o=r(481),c={};c.props={value:{key:"value",required:!0,type:null},number:{key:"number",required:!0,type:Number}},c.setup=function(e,t){var r=Object(o.a)(),c=Object(n.computed)((function(){return r.value.path}));return{bgColor:Object(n.computed)((function(){return c.value.includes("users")?"bg-prime-green":c.value.includes("company")?"bg-prime-indigo":c.value.includes("marketplace")?"bg-prime-teal":"bg-prime-navy"}))}};var l=c,f=r(55),component=Object(f.a)(l,(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("BaseSimpleCard",{staticClass:"flex overflow-hidden"},[r("div",{staticClass:"flex w-16 shrink-0 items-center justify-center 2xl:w-20",class:e.bgColor},[r(e.value.component,{tag:"Component",staticClass:"h-6 w-6 text-white"})],1),e._v(" "),r("div",{staticClass:"flex flex-1 items-center justify-between p-4"},[r("BaseTypography",{staticClass:"truncate text-gray-500",attrs:{component:"p",variant:"p2"}},[e._v("\n      "+e._s(e.value.title)+"\n    ")]),e._v(" "),r("BaseTypography",{staticClass:"font-extrabold",attrs:{component:"p",variant:"h4"}},[e._v("\n      "+e._s(e.number)+"\n    ")])],1)])}),[],!1,null,null,null);t.a=component.exports;installComponents(component,{BaseTypography:r(476).default,BaseSimpleCard:r(492).default})},2124:function(e,t,r){"use strict";r.r(t);var n=r(967),o=r.n(n),c=r(521),l=r(1084),f=(r(73),r(46),r(24),r(42),r(577)),d=r(519),v=r(20),m=r(544),y={};y.props={companies:{key:"companies",required:!0,type:Array},access:{key:"access",required:!0,type:Array}},y.setup=function(e,t){var r=e,n=Object(v.computed)((function(){return r.companies.map((function(e){var t=function(e){var t=[];return r.access.filter((function(r){r.company.id===e&&t.push(r.user)})),t}(e.id).length;return{company:e,users:t,createdBy:e.creator.email}}))}));var o=Object(d.createColumnHelper)(),c=[o.accessor((function(e){return e.company.name}),{id:"company",header:function(){return"Company"},cell:function(e){return e.getValue()}}),o.accessor("users",{header:function(){return"Total Users"},enableColumnFilter:!1}),o.accessor("createdBy",{header:function(){return"Created By"},enableColumnFilter:!1})];return{instance:Object(m.a)(n,c)}},y.components=Object.assign({AppTanStackTable:f.a},y.components);var O=y,h=r(55),j=Object(h.a)(O,(function(){var e=this,t=e.$createElement;return(e._self._c||t)("AppTanStackTable",{attrs:{table:e.instance}})}),[],!1,null,null,null).exports,w=r(502),C={setup:function(e,t){return{companySummary:{title:"Total Companies",component:o.a},queries:[w.d.list(),w.C.list()]}}};C.components=Object.assign({BackButton:c.a,StatisticDisplayCard:l.a,AdminCannedCompanyTable:j},C.components);var _=C,x=Object(h.a)(_,(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("section",{staticClass:"space-y-8"},[r("div",{staticClass:"flex flex-col space-y-4 sm:flex-row sm:items-center sm:space-x-4 sm:space-y-0"},[r("BackButton",{attrs:{link:"/admin/reports"}}),e._v(" "),r("div",{staticClass:"flex flex-col"},[r("BaseTypography",{attrs:{component:"h2",variant:"h5"}},[e._v("Companies")]),e._v(" "),r("BaseTypography",{staticClass:"uppercase text-gray-600",attrs:{variant:"overline"}},[e._v("\n        Canned Report\n      ")])],1)],1),e._v(" "),r("BaseVueQueries",{attrs:{queries:e.queries},scopedSlots:e._u([{key:"success",fn:function(t){var n=t[0],o=t[1];return[r("div",{staticClass:"space-y-6"},[r("div",{staticClass:"grid gap-6 lg:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4"},[r("StatisticDisplayCard",{attrs:{value:e.companySummary,number:o.length}})],1),e._v(" "),r("AdminCannedCompanyTable",{attrs:{access:n,companies:o}})],1)]}}])})],1)}),[],!1,null,null,null);t.default=x.exports;installComponents(x,{BaseTypography:r(476).default,BaseVueQueries:r(684).default})},481:function(e,t,r){"use strict";r.d(t,"a",(function(){return f})),r.d(t,"d",(function(){return d})),r.d(t,"b",(function(){return v})),r.d(t,"c",(function(){return m}));var n=r(28),o=(r(84),r(49),r(103),r(47),r(38),r(46),r(24),r(63),r(39),r(64),r(20));function c(object,e){var t=Object.keys(object);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(object);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(object,e).enumerable}))),t.push.apply(t,r)}return t}function l(e){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?c(Object(source),!0).forEach((function(t){Object(n.a)(e,t,source[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(source)):c(Object(source)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(source,t))}))}return e}function f(){var e=Object(o.getCurrentInstance)();if(!e)throw new Error("Not in setup()?");return Object(o.computed)((function(){return e.proxy.$route}))}function d(){var e=Object(o.getCurrentInstance)();if(!e)throw new Error("Not in setup()?");return e.proxy.$router}function v(e){var t=f();return Object(o.computed)((function(){var r=t.value.params[e];if(!r)throw new Error("Missing param: ".concat(e));return r}))}function m(e,t){var r,c=f(),v=d();return Object(o.computed)({get:function(){return c.value.query[e]||t},set:function(t){clearTimeout(r),r=setTimeout((function(){v.replace({query:l(l({},c.value.query),{},Object(n.a)({},e,t))})}),300)}})}},490:function(e,t,r){"use strict";r(24),r(159),r(121);var n=r(20),o={props:{definition:{key:"definition",required:!0,type:null}},setup:function(e,t){var r=e,o=Object(n.computed)((function(){return r.definition.icon[0]})),c=Object(n.computed)((function(){return r.definition.icon[1]}));return{svgPathData:Object(n.computed)((function(){return r.definition.icon[4].toString()})),viewBox:Object(n.computed)((function(){return"0 0 ".concat(o.value," ").concat(c.value)}))}}},c=o,l=r(55),component=Object(l.a)(c,(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("svg",{attrs:{xmlns:"http://www.w3.org/2000/svg",viewBox:e.viewBox,"aria-hidden":"true",focusable:"false",role:"img"}},[r("path",{attrs:{fill:"currentColor",d:e.svgPathData}})])}),[],!1,null,null,null);t.a=component.exports},492:function(e,t,r){"use strict";r.r(t);var n=r(55),component=Object(n.a)({},(function(){var e=this,t=e.$createElement;return(e._self._c||t)("div",{staticClass:"rounded-xl bg-white shadow"},[e._t("default")],2)}),[],!1,null,null,null);t.default=component.exports},493:function(e,t,r){"use strict";var n=r(490),o=r(497),c={setup:function(e,t){return{definition:o.definition}}};c.components=Object.assign({FontAwesomeSvg:n.a},c.components);var l=c,f=r(55),component=Object(f.a)(l,(function(){var e=this,t=e.$createElement;return(e._self._c||t)("FontAwesomeSvg",{staticClass:"h-5 w-5 animate-spin",attrs:{definition:e.definition}})}),[],!1,null,null,null);t.a=component.exports},495:function(e,t,r){"use strict";var n=r(496),o=r(20);r(42);var c={props:{error:{key:"error",required:!0,type:null}}};c.setup=function(e,t){var r=e;return{alert:Object(o.computed)((function(){return"string"==typeof(e=r.error)?{title:"Error",message:e}:e instanceof Error||e instanceof Object&&"name"in e&&"message"in e?{title:e.name,message:e.message}:{title:"Error",message:String(e)};var e}))}},c.components=Object.assign({AlertError:n.a},c.components);var l=c,f=r(55),component=Object(f.a)(l,(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("section",[r("AlertError",{scopedSlots:e._u([{key:"title",fn:function(){return[e._v("\n      "+e._s(e.alert.title)+"\n    ")]},proxy:!0},{key:"message",fn:function(){return[e._v("\n      "+e._s(e.alert.message)+"\n    ")]},proxy:!0}])})],1)}),[],!1,null,null,null);t.a=component.exports},496:function(e,t,r){"use strict";var n=r(498),o=r.n(n),c={setup:function(e,t){return{}}};c.components=Object.assign({XCircleSvg:o.a},c.components);var l=c,f=r(55),component=Object(f.a)(l,(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"rounded-md bg-red-50 p-4 shadow",attrs:{role:"alert"}},[r("div",{staticClass:"flex space-x-3"},[r("div",{staticClass:"flex-shrink-0"},[r("XCircleSvg",{staticClass:"h-5 w-5 text-red-500"})],1),e._v(" "),r("div",{staticClass:"space-y-2"},[r("h3",{staticClass:"text-sm font-medium leading-5 text-red-800"},[e._t("title")],2),e._v(" "),r("div",{staticClass:"text-sm leading-5 text-red-700"},[e._t("message")],2)])])])}),[],!1,null,null,null);t.a=component.exports},497:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n="spinner",o=[],c="f110",l="M304 48c0-26.5-21.5-48-48-48s-48 21.5-48 48s21.5 48 48 48s48-21.5 48-48zm0 416c0-26.5-21.5-48-48-48s-48 21.5-48 48s21.5 48 48 48s48-21.5 48-48zM48 304c26.5 0 48-21.5 48-48s-21.5-48-48-48s-48 21.5-48 48s21.5 48 48 48zm464-48c0-26.5-21.5-48-48-48s-48 21.5-48 48s21.5 48 48 48s48-21.5 48-48zM142.9 437c18.7-18.7 18.7-49.1 0-67.9s-49.1-18.7-67.9 0s-18.7 49.1 0 67.9s49.1 18.7 67.9 0zm0-294.2c18.7-18.7 18.7-49.1 0-67.9S93.7 56.2 75 75s-18.7 49.1 0 67.9s49.1 18.7 67.9 0zM369.1 437c18.7 18.7 49.1 18.7 67.9 0s18.7-49.1 0-67.9s-49.1-18.7-67.9 0s-18.7 49.1 0 67.9z";t.definition={prefix:"fas",iconName:n,icon:[512,512,o,c,l]},t.faSpinner=t.definition,t.prefix="fas",t.iconName=n,t.width=512,t.height=512,t.ligatures=o,t.unicode=c,t.svgPathData=l,t.aliases=o},498:function(e,t,r){r(47),r(38),r(46),r(24),r(63),r(39),r(64);var n=r(474),o=r(475),c=["class","staticClass","style","staticStyle","attrs"];function l(object,e){var t=Object.keys(object);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(object);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(object,e).enumerable}))),t.push.apply(t,r)}return t}r(121),e.exports={functional:!0,render:function(e,t){var r=t._c,data=(t._v,t.data),f=t.children,d=void 0===f?[]:f,v=data.class,m=data.staticClass,style=data.style,y=data.staticStyle,O=data.attrs,h=void 0===O?{}:O,j=o(data,c);return r("svg",function(e){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?l(Object(source),!0).forEach((function(t){n(e,t,source[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(source)):l(Object(source)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(source,t))}))}return e}({class:[v,m],style:[style,y],attrs:Object.assign({xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",fill:"currentColor","aria-hidden":"true"},h)},j),d.concat([r("path",{attrs:{"fill-rule":"evenodd",d:"M10 18a8 8 0 100-16 8 8 0 000 16zM8.28 7.22a.75.75 0 00-1.06 1.06L8.94 10l-1.72 1.72a.75.75 0 101.06 1.06L10 11.06l1.72 1.72a.75.75 0 101.06-1.06L11.06 10l1.72-1.72a.75.75 0 00-1.06-1.06L10 8.94 8.28 7.22z","clip-rule":"evenodd"}})]))}}},521:function(e,t,r){"use strict";var n=r(512),o=r.n(n),c={};c.props={link:{key:"link",required:!1,type:null,default:"."},text:{key:"text",required:!1,type:String,default:"Back"}},c.setup=function(e,t){return{}},c.components=Object.assign({ChevronLeftSvg:o.a},c.components);var l=c,f=r(55),component=Object(f.a)(l,(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",[e.link?r("BaseButton",{attrs:{shape:"rectangle","display-type":"light",size:"even",to:e.link}},[r("ChevronLeftSvg",{staticClass:"-ml-1 h-auto w-5"}),e._v(" "),r("span",[e._v(e._s(e.text))])],1):r("BaseButton",{attrs:{shape:"rectangle","display-type":"light",size:"even",to:e.link,append:""}},[r("ChevronLeftSvg",{staticClass:"-ml-1 h-auto w-5"}),e._v(" "),r("span",[e._v(e._s(e.text))])],1)],1)}),[],!1,null,null,null);t.a=component.exports;installComponents(component,{BaseButton:r(310).default})},544:function(e,t,r){"use strict";r.d(t,"a",(function(){return d}));var n=r(627),o=r(519),c=r(20),l=r(558),f=r(534);function d(e,t){var r=Object(c.shallowRef)([]),d=Object(c.shallowRef)({pageIndex:0,pageSize:10}),v=Object(c.shallowRef)("");return Object(f.b)({get data(){return e.value},columns:t,state:{get sorting(){return r.value},get pagination(){return d.value},get globalFilter(){return v.value}},onSortingChange:Object(l.a)(r),onPaginationChange:Object(l.a)(d),onGlobalFilterChange:Object(l.a)(v),globalFilterFn:function(e,t,r,o){var c=Object(n.rankItem)(e.getValue(t),r,{threshold:n.rankings.MATCHES});return o(c),c.passed},getCoreRowModel:Object(o.getCoreRowModel)(),getSortedRowModel:Object(o.getSortedRowModel)(),getPaginationRowModel:Object(o.getPaginationRowModel)(),getFilteredRowModel:Object(o.getFilteredRowModel)(),getFacetedUniqueValues:Object(o.getFacetedUniqueValues)()})}},684:function(e,t,r){"use strict";r.r(t);r(24),r(73);var n=r(495),o=r(493),c=r(20),l={};l.props={queries:{key:"queries",required:!0,type:Array}},l.setup=function(e,t){var r=e;return{isLoading:Object(c.computed)((function(){return r.queries.some((function(e){return e.isLoading.value}))})),isError:Object(c.computed)((function(){return r.queries.some((function(e){return e.isError.value}))})),errors:Object(c.computed)((function(){return r.queries.map((function(e){return e.error.value}))})),merged:Object(c.computed)((function(){return r.queries.map((function(e){return e.data.value}))}))}},l.components=Object.assign({LoadingSpinner:o.a,GenericError:n.a},l.components);var f=l,d=r(55),component=Object(d.a)(f,(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",[r("ClientOnly",[e.isLoading?[e._t("loading",(function(){return[r("LoadingSpinner")]}))]:e.isError?[e._t("error",(function(){return e._l(e.errors,(function(e,t){return r("div",{key:t},[r("GenericError",{attrs:{error:e}})],1)}))}),null,e.errors)]:[e._t("success",(function(){return[r("pre",[e._v(e._s(e.data))]),e._v(" "),e._l(e.merged,(function(data,t){return r("div",{key:t},[r("pre",[e._v(e._s(JSON.stringify(data,null,2)))])])}))]}),null,e.merged)]],2)],1)}),[],!1,null,null,null);t.default=component.exports},967:function(e,t,r){r(47),r(38),r(46),r(24),r(63),r(39),r(64);var n=r(474),o=r(475),c=["class","staticClass","style","staticStyle","attrs"];function l(object,e){var t=Object.keys(object);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(object);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(object,e).enumerable}))),t.push.apply(t,r)}return t}r(121),e.exports={functional:!0,render:function(e,t){var r=t._c,data=(t._v,t.data),f=t.children,d=void 0===f?[]:f,v=data.class,m=data.staticClass,style=data.style,y=data.staticStyle,O=data.attrs,h=void 0===O?{}:O,j=o(data,c);return r("svg",function(e){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?l(Object(source),!0).forEach((function(t){n(e,t,source[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(source)):l(Object(source)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(source,t))}))}return e}({class:[v,m],style:[style,y],attrs:Object.assign({xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",fill:"currentColor","aria-hidden":"true"},h)},j),d.concat([r("path",{attrs:{"fill-rule":"evenodd",d:"M4 16.5v-13h-.25a.75.75 0 010-1.5h12.5a.75.75 0 010 1.5H16v13h.25a.75.75 0 010 1.5h-3.5a.75.75 0 01-.75-.75v-2.5a.75.75 0 00-.75-.75h-2.5a.75.75 0 00-.75.75v2.5a.75.75 0 01-.75.75h-3.5a.75.75 0 010-1.5H4zm3-11a.5.5 0 01.5-.5h1a.5.5 0 01.5.5v1a.5.5 0 01-.5.5h-1a.5.5 0 01-.5-.5v-1zM7.5 9a.5.5 0 00-.5.5v1a.5.5 0 00.5.5h1a.5.5 0 00.5-.5v-1a.5.5 0 00-.5-.5h-1zM11 5.5a.5.5 0 01.5-.5h1a.5.5 0 01.5.5v1a.5.5 0 01-.5.5h-1a.5.5 0 01-.5-.5v-1zm.5 3.5a.5.5 0 00-.5.5v1a.5.5 0 00.5.5h1a.5.5 0 00.5-.5v-1a.5.5 0 00-.5-.5h-1z","clip-rule":"evenodd"}})]))}}}}]);