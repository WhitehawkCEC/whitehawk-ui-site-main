(window.webpackJsonp=window.webpackJsonp||[]).push([[127],{2057:function(e,t,n){"use strict";n.r(t);var r=n(10),c=(n(48),n(514)),o=(n(42),n(121),n(581)),l=n(547),f=n(521),d=n(20),v=n(544),m=n(480),O={};O.props={id:{key:"id",required:!0,type:String},access:{key:"access",required:!0,type:Array}},O.setup=function(e,t){var n=e,r=t.emit,c=Object(d.computed)((function(){return n.id})),o=Object(d.computed)((function(){return n.access})),O=Object(m.d)(),y=Object(f.createColumnHelper)(),j=[y.accessor((function(e){return e.provider.data.name}),{id:"name",header:function(){return"Provider Name"},enableColumnFilter:!1}),y.accessor((function(e){return e.consumer.accountId}),{id:"consumerId",header:function(){return"Consumer ID"},enableColumnFilter:!1}),y.display({id:"actions",header:"Actions",cell:function(e){var t=e.row;return Object(d.h)(l.a,{props:{actions:[{id:"edit",action:function(){O.push("/admin/companies/".concat(c.value,"/rating-service-2/access/").concat(t.original.consumer.accountId))}},{id:"delete",action:function(){r("delete",t.original.consumer.accountId)}}]}})}})];return{instance:Object(v.a)(o,j)}},O.components=Object.assign({AppTanStackTable:o.a},O.components);var y=O,j=n(55),h=Object(j.a)(y,(function(){var e=this,t=e.$createElement;return(e._self._c||t)("AppTanStackTable",{attrs:{table:e.instance}})}),[],!1,null,null,null).exports,w=n(501),x={setup:function(e,t){var n=Object(m.b)("id"),c=w.s.list(n),o=w.s.delete(n);function l(){return l=Object(r.a)(regeneratorRuntime.mark((function e(t){var n;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=Object(d.computed)((function(){return t})),e.next=3,o.mutateAsync(n);case 3:case"end":return e.stop()}}),e)}))),l.apply(this,arguments)}return{id:n,accessQuery:c,deleteAccess:function(e){return l.apply(this,arguments)}}}};x.components=Object.assign({PlusSvg:c.a,ExternalAccessTable:h},x.components);var _=x,C=Object(j.a)(_,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("BaseTablePageLayout",{scopedSlots:e._u([{key:"title",fn:function(){return[e._v("Entities with External Permissions")]},proxy:!0},{key:"button",fn:function(){return[n("BaseButton",{staticClass:"space-x-1",attrs:{to:"./new",append:""}},[n("PlusSvg",{staticClass:"w-5"}),e._v(" "),n("span",[e._v("Entity Access")])],1)]},proxy:!0},{key:"table",fn:function(){return[n("BaseVueQuery",{attrs:{query:e.accessQuery},scopedSlots:e._u([{key:"success",fn:function(t){var data=t.data;return[n("ExternalAccessTable",{attrs:{id:e.id,access:data},on:{delete:e.deleteAccess}})]}}])})]},proxy:!0}])})}),[],!1,null,null,null);t.default=C.exports;installComponents(C,{BaseButton:n(309).default,BaseVueQuery:n(504).default,BaseTablePageLayout:n(578).default})},480:function(e,t,n){"use strict";n.d(t,"a",(function(){return f})),n.d(t,"d",(function(){return d})),n.d(t,"b",(function(){return v})),n.d(t,"c",(function(){return m}));var r=n(28),c=(n(84),n(49),n(103),n(47),n(38),n(46),n(24),n(63),n(39),n(64),n(20));function o(object,e){var t=Object.keys(object);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(object);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(object,e).enumerable}))),t.push.apply(t,n)}return t}function l(e){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?o(Object(source),!0).forEach((function(t){Object(r.a)(e,t,source[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(source)):o(Object(source)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(source,t))}))}return e}function f(){var e=Object(c.getCurrentInstance)();if(!e)throw new Error("Not in setup()?");return Object(c.computed)((function(){return e.proxy.$route}))}function d(){var e=Object(c.getCurrentInstance)();if(!e)throw new Error("Not in setup()?");return e.proxy.$router}function v(e){var t=f();return Object(c.computed)((function(){var n=t.value.params[e];if(!n)throw new Error("Missing param: ".concat(e));return n}))}function m(e,t){var n,o=f(),v=d();return Object(c.computed)({get:function(){return o.value.query[e]||t},set:function(t){clearTimeout(n),n=setTimeout((function(){v.replace({query:l(l({},o.value.query),{},Object(r.a)({},e,t))})}),300)}})}},489:function(e,t,n){"use strict";n(24),n(159),n(121);var r=n(20),c={props:{definition:{key:"definition",required:!0,type:null}},setup:function(e,t){var n=e,c=Object(r.computed)((function(){return n.definition.icon[0]})),o=Object(r.computed)((function(){return n.definition.icon[1]}));return{svgPathData:Object(r.computed)((function(){return n.definition.icon[4].toString()})),viewBox:Object(r.computed)((function(){return"0 0 ".concat(c.value," ").concat(o.value)}))}}},o=c,l=n(55),component=Object(l.a)(o,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("svg",{attrs:{xmlns:"http://www.w3.org/2000/svg",viewBox:e.viewBox,"aria-hidden":"true",focusable:"false",role:"img"}},[n("path",{attrs:{fill:"currentColor",d:e.svgPathData}})])}),[],!1,null,null,null);t.a=component.exports},492:function(e,t,n){"use strict";var r=n(489),c=n(496),o={setup:function(e,t){return{definition:c.definition}}};o.components=Object.assign({FontAwesomeSvg:r.a},o.components);var l=o,f=n(55),component=Object(f.a)(l,(function(){var e=this,t=e.$createElement;return(e._self._c||t)("FontAwesomeSvg",{staticClass:"h-5 w-5 animate-spin",attrs:{definition:e.definition}})}),[],!1,null,null,null);t.a=component.exports},494:function(e,t,n){"use strict";var r=n(495),c=n(20);n(42);var o={props:{error:{key:"error",required:!0,type:null}}};o.setup=function(e,t){var n=e;return{alert:Object(c.computed)((function(){return"string"==typeof(e=n.error)?{title:"Error",message:e}:e instanceof Error||e instanceof Object&&"name"in e&&"message"in e?{title:e.name,message:e.message}:{title:"Error",message:String(e)};var e}))}},o.components=Object.assign({AlertError:r.a},o.components);var l=o,f=n(55),component=Object(f.a)(l,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("section",[n("AlertError",{scopedSlots:e._u([{key:"title",fn:function(){return[e._v("\n      "+e._s(e.alert.title)+"\n    ")]},proxy:!0},{key:"message",fn:function(){return[e._v("\n      "+e._s(e.alert.message)+"\n    ")]},proxy:!0}])})],1)}),[],!1,null,null,null);t.a=component.exports},495:function(e,t,n){"use strict";var r=n(498),c=n.n(r),o={setup:function(e,t){return{}}};o.components=Object.assign({XCircleSvg:c.a},o.components);var l=o,f=n(55),component=Object(f.a)(l,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"rounded-md bg-red-50 p-4 shadow",attrs:{role:"alert"}},[n("div",{staticClass:"flex space-x-3"},[n("div",{staticClass:"flex-shrink-0"},[n("XCircleSvg",{staticClass:"h-5 w-5 text-red-500"})],1),e._v(" "),n("div",{staticClass:"space-y-2"},[n("h3",{staticClass:"text-sm font-medium leading-5 text-red-800"},[e._t("title")],2),e._v(" "),n("div",{staticClass:"text-sm leading-5 text-red-700"},[e._t("message")],2)])])])}),[],!1,null,null,null);t.a=component.exports},496:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r="spinner",c=[],o="f110",l="M304 48c0-26.5-21.5-48-48-48s-48 21.5-48 48s21.5 48 48 48s48-21.5 48-48zm0 416c0-26.5-21.5-48-48-48s-48 21.5-48 48s21.5 48 48 48s48-21.5 48-48zM48 304c26.5 0 48-21.5 48-48s-21.5-48-48-48s-48 21.5-48 48s21.5 48 48 48zm464-48c0-26.5-21.5-48-48-48s-48 21.5-48 48s21.5 48 48 48s48-21.5 48-48zM142.9 437c18.7-18.7 18.7-49.1 0-67.9s-49.1-18.7-67.9 0s-18.7 49.1 0 67.9s49.1 18.7 67.9 0zm0-294.2c18.7-18.7 18.7-49.1 0-67.9S93.7 56.2 75 75s-18.7 49.1 0 67.9s49.1 18.7 67.9 0zM369.1 437c18.7 18.7 49.1 18.7 67.9 0s18.7-49.1 0-67.9s-49.1-18.7-67.9 0s-18.7 49.1 0 67.9z";t.definition={prefix:"fas",iconName:r,icon:[512,512,c,o,l]},t.faSpinner=t.definition,t.prefix="fas",t.iconName=r,t.width=512,t.height=512,t.ligatures=c,t.unicode=o,t.svgPathData=l,t.aliases=c},498:function(e,t,n){n(47),n(38),n(46),n(24),n(63),n(39),n(64);var r=n(470),c=n(471),o=["class","staticClass","style","staticStyle","attrs"];function l(object,e){var t=Object.keys(object);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(object);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(object,e).enumerable}))),t.push.apply(t,n)}return t}n(121),e.exports={functional:!0,render:function(e,t){var n=t._c,data=(t._v,t.data),f=t.children,d=void 0===f?[]:f,v=data.class,m=data.staticClass,style=data.style,O=data.staticStyle,y=data.attrs,j=void 0===y?{}:y,h=c(data,o);return n("svg",function(e){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?l(Object(source),!0).forEach((function(t){r(e,t,source[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(source)):l(Object(source)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(source,t))}))}return e}({class:[v,m],style:[style,O],attrs:Object.assign({xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",fill:"currentColor","aria-hidden":"true"},j)},h),d.concat([n("path",{attrs:{"fill-rule":"evenodd",d:"M10 18a8 8 0 100-16 8 8 0 000 16zM8.28 7.22a.75.75 0 00-1.06 1.06L8.94 10l-1.72 1.72a.75.75 0 101.06 1.06L10 11.06l1.72 1.72a.75.75 0 101.06-1.06L11.06 10l1.72-1.72a.75.75 0 00-1.06-1.06L10 8.94 8.28 7.22z","clip-rule":"evenodd"}})]))}}},504:function(e,t,n){"use strict";n.r(t);var r=n(494),c=n(492),o={props:{query:{key:"query",required:!0,type:null}},setup:function(e,t){var n=e.query;return{isLoading:n.isLoading,isError:n.isError,error:n.error,data:n.data}}};o.components=Object.assign({LoadingSpinner:c.a,GenericError:r.a},o.components);var l=o,f=n(55),d=Object(f.a)(l,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("ClientOnly",[e.isLoading?[e._t("loading",(function(){return[n("LoadingSpinner")]}))]:e.isError?[e._t("error",(function(){return[n("GenericError",{attrs:{error:e.error}})]}),null,{error:e.error})]:[e._t("success",(function(){return[n("pre",[e._v(e._s(JSON.stringify(e.data,null,2)))])]}),null,{data:e.data})]],2)],1)}),[],!1,null,null,null).exports,v=Object(f.a)(d,undefined,undefined,!1,null,null,null);t.default=v.exports},514:function(e,t,n){"use strict";var r=n(55),component=Object(r.a)({},(function(){var e=this.$createElement,t=this._self._c||e;return t("svg",{staticClass:"h-5 w-5",attrs:{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",fill:"currentColor"}},[t("path",{attrs:{"fill-rule":"evenodd",d:"M10 3a1 1 0 011 1v5h5a1 1 0 110 2h-5v5a1 1 0 11-2 0v-5H4a1 1 0 110-2h5V4a1 1 0 011-1z","clip-rule":"evenodd"}})])}),[],!1,null,null,null);t.a=component.exports},544:function(e,t,n){"use strict";n.d(t,"a",(function(){return d}));var r=n(631),c=n(521),o=n(20),l=n(579),f=n(534);function d(e,t){var n=Object(o.shallowRef)([]),d=Object(o.shallowRef)({pageIndex:0,pageSize:10}),v=Object(o.shallowRef)("");return Object(f.b)({get data(){return e.value},columns:t,state:{get sorting(){return n.value},get pagination(){return d.value},get globalFilter(){return v.value}},onSortingChange:Object(l.a)(n),onPaginationChange:Object(l.a)(d),onGlobalFilterChange:Object(l.a)(v),globalFilterFn:function(e,t,n,c){var o=Object(r.rankItem)(e.getValue(t),n,{threshold:r.rankings.MATCHES});return c(o),o.passed},getCoreRowModel:Object(c.getCoreRowModel)(),getSortedRowModel:Object(c.getSortedRowModel)(),getPaginationRowModel:Object(c.getPaginationRowModel)(),getFilteredRowModel:Object(c.getFilteredRowModel)(),getFacetedUniqueValues:Object(c.getFacetedUniqueValues)()})}},578:function(e,t,n){"use strict";n.r(t);var r=n(55),component=Object(r.a)({},(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("main",{staticClass:"space-y-6"},[n("ClientOnly",[n("div",{staticClass:"flex flex-col space-y-4 md:flex-row md:items-center md:justify-between md:space-y-0"},[n("div",{staticClass:"flex flex-col space-y-4 sm:flex-row sm:items-center sm:space-y-0 sm:space-x-4"},[e._t("backButton"),e._v(" "),n("div",{staticClass:"flex flex-col"},[n("BaseTypography",{staticClass:"uppercase text-gray-500",attrs:{variant:"overline"}},[e._t("overline")],2),e._v(" "),n("BaseTypography",{attrs:{variant:"h5",component:"h2"}},[e._t("title")],2)],1)],2),e._v(" "),e._t("button")],2)]),e._v(" "),e._t("table")],2)}),[],!1,null,null,null);t.default=component.exports;installComponents(component,{BaseTypography:n(475).default})}}]);