(window.webpackJsonp=window.webpackJsonp||[]).push([[214],{1027:function(t,e,n){"use strict";var r=n(5),o=n(1028),c=n(21),l=n(57),f=n(68),d=n(164);r({target:"Array",proto:!0},{flatMap:function(t){var e,n=l(this),r=f(n);return c(t),(e=d(n,0)).length=o(e,n,n,r,0,1,t,arguments.length>1?arguments[1]:void 0),e}})},1028:function(t,e,n){"use strict";var r=n(109),o=n(68),c=n(226),l=n(27),f=function(t,e,source,n,d,v,m,h){for(var element,y,O=d,j=0,w=!!m&&l(m,h);j<n;)j in source&&(element=w?w(source[j],j,e):source[j],v>0&&r(element)?(y=o(element),O=f(t,e,element,y,O,v-1)-1):(c(O+1),t[O]=element),O++),j++;return O};t.exports=f},1029:function(t,e,n){n(162)("flatMap")},1298:function(t,e,n){"use strict";n.d(e,"a",(function(){return c}));n(317),n(24),n(51),n(318),n(319),n(320),n(321),n(322),n(323),n(324),n(325),n(326),n(327),n(328),n(329),n(330),n(50),n(77),n(42),n(76),n(49),n(38),n(74),n(75);function r(t,e){var n="undefined"!=typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(!n){if(Array.isArray(t)||(n=function(t,e){if(!t)return;if("string"==typeof t)return o(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);"Object"===n&&t.constructor&&(n=t.constructor.name);if("Map"===n||"Set"===n)return Array.from(t);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return o(t,e)}(t))||e&&t&&"number"==typeof t.length){n&&(t=n);var i=0,r=function(){};return{s:r,n:function(){return i>=t.length?{done:!0}:{done:!1,value:t[i++]}},e:function(t){throw t},f:r}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var c,l=!0,f=!1;return{s:function(){n=n.call(t)},n:function(){var t=n.next();return l=t.done,t},e:function(t){f=!0,c=t},f:function(){try{l||null==n.return||n.return()}finally{if(f)throw c}}}}function o(t,e){(null==e||e>t.length)&&(e=t.length);for(var i=0,n=new Array(e);i<e;i++)n[i]=t[i];return n}function c(t){var e,n=new Map,o=r(t);try{for(o.s();!(e=o.n()).done;){var c=e.value;n.has(c)?n.set(c,(n.get(c)||0)+1):n.set(c,1)}}catch(t){o.e(t)}finally{o.f()}return n}},2107:function(t,e,n){"use strict";n.r(e);n(24),n(51),n(50);var r=n(521),o=(n(529),n(73),n(42),n(311),n(128),n(85),n(86),n(1027),n(1029),n(77),n(76),n(49),n(38),n(74),n(75),n(577)),c=n(627),l=n(519),f=n(20),d=n(558),v=[{text:"0-1",isInRange:function(t){return t>=0&&t<=1}},{text:"2-5",isInRange:function(t){return t>=2&&t<=5}},{text:"6 and more",isInRange:function(t){return t>=6}}],m=n(1298),h=n(534);function y(t,e){var n="undefined"!=typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(!n){if(Array.isArray(t)||(n=function(t,e){if(!t)return;if("string"==typeof t)return O(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);"Object"===n&&t.constructor&&(n=t.constructor.name);if("Map"===n||"Set"===n)return Array.from(t);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return O(t,e)}(t))||e&&t&&"number"==typeof t.length){n&&(t=n);var i=0,r=function(){};return{s:r,n:function(){return i>=t.length?{done:!0}:{done:!1,value:t[i++]}},e:function(t){throw t},f:r}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var o,c=!0,l=!1;return{s:function(){n=n.call(t)},n:function(){var t=n.next();return c=t.done,t},e:function(t){l=!0,o=t},f:function(){try{c||null==n.return||n.return()}finally{if(l)throw o}}}}function O(t,e){(null==e||e>t.length)&&(e=t.length);for(var i=0,n=new Array(e);i<e;i++)n[i]=t[i];return n}var j={};j.props={products:{key:"products",required:!0,type:Array}},j.setup=function(t,e){var n=t,r=Object(f.computed)((function(){return n.products.map((function(t){var e=t.id,r=t.name,o=t.manufacturer,c=t.categories,l=t.type,f=t.price,d=function(t){var e,r=[],o=y(n.products);try{for(o.s();!(e=o.n()).done;){var c=e.value;t===c.manufacturer.id&&r.push(c)}}catch(t){o.e(t)}finally{o.f()}return r.length}(o.id),m=v.find((function(t){return t.isInRange(d)}));return{id:e,product:{name:r,productCount:d,countGroup:null==m?void 0:m.text},manufacturer:o,categories:c,type:l,price:f}})).sort((function(a,b){return a.product.name.localeCompare(b.product.name)}))}));var o=Object(l.createColumnHelper)(),O=[o.accessor("product",{header:function(){return"Product"},cell:function(t){return t.getValue().name},filterFn:function(t,e,n){return t.original.product.countGroup===n}}),o.accessor((function(t){return t.manufacturer.name}),{id:"manufacturer",header:function(){return"Manufacturer"}}),o.accessor("categories",{header:function(){return"Categories"},cell:function(t){return t.getValue().map((function(t){return t.name})).join(", ")},filterFn:function(t,e,n){return t.original.categories.map((function(t){return t.name})).includes(n)}}),o.accessor((function(t){return t.type.name}),{id:"type",header:function(){return"Product Type"}}),o.accessor("price",{header:function(){return"Price Range"},filterFn:"equalsString"})],j=Object(f.shallowRef)([]),w=Object(f.shallowRef)({pageIndex:0,pageSize:10}),x=Object(f.shallowRef)(""),_=Object(f.shallowRef)([]),C=Object(f.shallowRef)({});return{instance:Object(h.b)({get data(){return r.value},columns:O,state:{get sorting(){return j.value},get pagination(){return w.value},get globalFilter(){return x.value},get columnFilters(){return _.value},get rowSelection(){return C.value}},onSortingChange:Object(d.a)(j),onPaginationChange:Object(d.a)(w),onColumnFiltersChange:Object(d.a)(_),onGlobalFilterChange:Object(d.a)(x),globalFilterFn:function(t,e,n,r){var o=Object(c.rankItem)(t.getValue(e),n,{threshold:c.rankings.CONTAINS});return r(o),o.passed},onRowSelectionChange:Object(d.a)(C),getCoreRowModel:Object(l.getCoreRowModel)(),getFacetedRowModel:Object(l.getFacetedRowModel)(),getSortedRowModel:Object(l.getSortedRowModel)(),getFacetedUniqueValues:function(table,t){var e=Object(l.getFacetedUniqueValues)();return"product"===t?function(){var e=table.getColumn(t).getFacetedRowModel();return Object(m.a)(e.flatRows.flatMap((function(t){return t.original.product.countGroup?[t.original.product.countGroup]:[]})))}:"categories"===t?function(){var e=table.getColumn(t).getFacetedRowModel();return Object(m.a)(e.flatRows.flatMap((function(t){return t.original.categories?t.original.categories.map((function(t){return t.name})):[]})))}:e(table,t)},getPaginationRowModel:Object(l.getPaginationRowModel)(),getFilteredRowModel:Object(l.getFilteredRowModel)()})}},j.components=Object.assign({AppTanStackTable:o.a},j.components);var w=j,x=n(55),_=Object(x.a)(w,(function(){var t=this,e=t.$createElement;return(t._self._c||e)("AppTanStackTable",{attrs:{table:t.instance}})}),[],!1,null,null,null).exports,C=n(470),S=n(198),k={setup:function(t,e){return{promises:Promise.all([C.a.get("".concat(S.a,"/products"))])}}};k.components=Object.assign({BackButton:r.a,AdminAdhocMarketplaceTable:_},k.components);var M=k,R=Object(x.a)(M,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("section",{staticClass:"space-y-8"},[n("div",{staticClass:"flex flex-col space-y-4 sm:flex-row sm:items-center sm:space-x-4 sm:space-y-0"},[n("BackButton",{attrs:{link:"/admin/reports"}}),t._v(" "),n("div",{staticClass:"flex flex-col"},[n("BaseTypography",{attrs:{component:"h2",variant:"h5"}},[t._v("Marketplace")]),t._v(" "),n("BaseTypography",{staticClass:"uppercase text-gray-600",attrs:{variant:"overline"}},[t._v("\n        Adhoc Report\n      ")])],1)],1),t._v(" "),t.promises?n("BasePromise",{attrs:{promise:t.promises},scopedSlots:t._u([{key:"success",fn:function(t){var e=t.result[0];return[n("AdminAdhocMarketplaceTable",{attrs:{products:e.data}})]}}],null,!1,486391857)}):t._e()],1)}),[],!1,null,null,null);e.default=R.exports;installComponents(R,{BaseTypography:n(476).default,BasePromise:n(833).default})},470:function(t,e,n){"use strict";n.d(e,"a",(function(){return d}));var r=n(200),o=n.n(r),c=n(20),l=n(500),f=Object(c.computed)((function(){var t=Object(l.a)();return t.value?"Bearer ".concat(t.value):void 0})),d=o.a.create();d.interceptors.request.use((function(t){var e=f.value;return e&&(t.headers.Authorization=e),t}))},490:function(t,e,n){"use strict";n(24),n(159),n(121);var r=n(20),o={props:{definition:{key:"definition",required:!0,type:null}},setup:function(t,e){var n=t,o=Object(r.computed)((function(){return n.definition.icon[0]})),c=Object(r.computed)((function(){return n.definition.icon[1]}));return{svgPathData:Object(r.computed)((function(){return n.definition.icon[4].toString()})),viewBox:Object(r.computed)((function(){return"0 0 ".concat(o.value," ").concat(c.value)}))}}},c=o,l=n(55),component=Object(l.a)(c,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("svg",{attrs:{xmlns:"http://www.w3.org/2000/svg",viewBox:t.viewBox,"aria-hidden":"true",focusable:"false",role:"img"}},[n("path",{attrs:{fill:"currentColor",d:t.svgPathData}})])}),[],!1,null,null,null);e.a=component.exports},493:function(t,e,n){"use strict";var r=n(490),o=n(497),c={setup:function(t,e){return{definition:o.definition}}};c.components=Object.assign({FontAwesomeSvg:r.a},c.components);var l=c,f=n(55),component=Object(f.a)(l,(function(){var t=this,e=t.$createElement;return(t._self._c||e)("FontAwesomeSvg",{staticClass:"h-5 w-5 animate-spin",attrs:{definition:t.definition}})}),[],!1,null,null,null);e.a=component.exports},495:function(t,e,n){"use strict";var r=n(496),o=n(20);n(42);var c={props:{error:{key:"error",required:!0,type:null}}};c.setup=function(t,e){var n=t;return{alert:Object(o.computed)((function(){return"string"==typeof(t=n.error)?{title:"Error",message:t}:t instanceof Error||t instanceof Object&&"name"in t&&"message"in t?{title:t.name,message:t.message}:{title:"Error",message:String(t)};var t}))}},c.components=Object.assign({AlertError:r.a},c.components);var l=c,f=n(55),component=Object(f.a)(l,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("section",[n("AlertError",{scopedSlots:t._u([{key:"title",fn:function(){return[t._v("\n      "+t._s(t.alert.title)+"\n    ")]},proxy:!0},{key:"message",fn:function(){return[t._v("\n      "+t._s(t.alert.message)+"\n    ")]},proxy:!0}])})],1)}),[],!1,null,null,null);e.a=component.exports},496:function(t,e,n){"use strict";var r=n(498),o=n.n(r),c={setup:function(t,e){return{}}};c.components=Object.assign({XCircleSvg:o.a},c.components);var l=c,f=n(55),component=Object(f.a)(l,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"rounded-md bg-red-50 p-4 shadow",attrs:{role:"alert"}},[n("div",{staticClass:"flex space-x-3"},[n("div",{staticClass:"flex-shrink-0"},[n("XCircleSvg",{staticClass:"h-5 w-5 text-red-500"})],1),t._v(" "),n("div",{staticClass:"space-y-2"},[n("h3",{staticClass:"text-sm font-medium leading-5 text-red-800"},[t._t("title")],2),t._v(" "),n("div",{staticClass:"text-sm leading-5 text-red-700"},[t._t("message")],2)])])])}),[],!1,null,null,null);e.a=component.exports},497:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r="spinner",o=[],c="f110",l="M304 48c0-26.5-21.5-48-48-48s-48 21.5-48 48s21.5 48 48 48s48-21.5 48-48zm0 416c0-26.5-21.5-48-48-48s-48 21.5-48 48s21.5 48 48 48s48-21.5 48-48zM48 304c26.5 0 48-21.5 48-48s-21.5-48-48-48s-48 21.5-48 48s21.5 48 48 48zm464-48c0-26.5-21.5-48-48-48s-48 21.5-48 48s21.5 48 48 48s48-21.5 48-48zM142.9 437c18.7-18.7 18.7-49.1 0-67.9s-49.1-18.7-67.9 0s-18.7 49.1 0 67.9s49.1 18.7 67.9 0zm0-294.2c18.7-18.7 18.7-49.1 0-67.9S93.7 56.2 75 75s-18.7 49.1 0 67.9s49.1 18.7 67.9 0zM369.1 437c18.7 18.7 49.1 18.7 67.9 0s18.7-49.1 0-67.9s-49.1-18.7-67.9 0s-18.7 49.1 0 67.9z";e.definition={prefix:"fas",iconName:r,icon:[512,512,o,c,l]},e.faSpinner=e.definition,e.prefix="fas",e.iconName=r,e.width=512,e.height=512,e.ligatures=o,e.unicode=c,e.svgPathData=l,e.aliases=o},498:function(t,e,n){n(47),n(38),n(46),n(24),n(63),n(39),n(64);var r=n(474),o=n(475),c=["class","staticClass","style","staticStyle","attrs"];function l(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(object);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,n)}return e}n(121),t.exports={functional:!0,render:function(t,e){var n=e._c,data=(e._v,e.data),f=e.children,d=void 0===f?[]:f,v=data.class,m=data.staticClass,style=data.style,h=data.staticStyle,y=data.attrs,O=void 0===y?{}:y,j=o(data,c);return n("svg",function(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?l(Object(source),!0).forEach((function(e){r(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):l(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}({class:[v,m],style:[style,h],attrs:Object.assign({xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",fill:"currentColor","aria-hidden":"true"},O)},j),d.concat([n("path",{attrs:{"fill-rule":"evenodd",d:"M10 18a8 8 0 100-16 8 8 0 000 16zM8.28 7.22a.75.75 0 00-1.06 1.06L8.94 10l-1.72 1.72a.75.75 0 101.06 1.06L10 11.06l1.72 1.72a.75.75 0 101.06-1.06L11.06 10l1.72-1.72a.75.75 0 00-1.06-1.06L10 8.94 8.28 7.22z","clip-rule":"evenodd"}})]))}}},500:function(t,e,n){"use strict";n.d(e,"a",(function(){return c}));var r=n(20),o=n(122);function c(){var t=Object(o.a)();return Object(r.computed)((function(){return t.accessToken}))}},521:function(t,e,n){"use strict";var r=n(512),o=n.n(r),c={};c.props={link:{key:"link",required:!1,type:null,default:"."},text:{key:"text",required:!1,type:String,default:"Back"}},c.setup=function(t,e){return{}},c.components=Object.assign({ChevronLeftSvg:o.a},c.components);var l=c,f=n(55),component=Object(f.a)(l,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[t.link?n("BaseButton",{attrs:{shape:"rectangle","display-type":"light",size:"even",to:t.link}},[n("ChevronLeftSvg",{staticClass:"-ml-1 h-auto w-5"}),t._v(" "),n("span",[t._v(t._s(t.text))])],1):n("BaseButton",{attrs:{shape:"rectangle","display-type":"light",size:"even",to:t.link,append:""}},[n("ChevronLeftSvg",{staticClass:"-ml-1 h-auto w-5"}),t._v(" "),n("span",[t._v(t._s(t.text))])],1)],1)}),[],!1,null,null,null);e.a=component.exports;installComponents(component,{BaseButton:n(310).default})},833:function(t,e,n){"use strict";n.r(e);var r=n(10),o=(n(48),n(495)),c=n(493),l=n(20),f={props:{promise:{key:"promise",required:!0,type:null}},setup:function(t,e){var n=t,o=Object(l.ref)({loading:!1,error:null,result:null});return Object(l.watch)((function(){return n.promise}),function(){var t=Object(r.a)(regeneratorRuntime.mark((function t(e){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return o.value.loading=!0,o.value.result=null,o.value.error=null,t.prev=3,t.next=6,e;case 6:o.value.result=t.sent,t.next=12;break;case 9:t.prev=9,t.t0=t.catch(3),o.value.error=t.t0;case 12:return t.prev=12,o.value.loading=!1,t.finish(12);case 15:case"end":return t.stop()}}),t,null,[[3,9,12,15]])})));return function(e){return t.apply(this,arguments)}}(),{immediate:!0}),{status:o}}};f.components=Object.assign({LoadingSpinner:c.a,GenericError:o.a},f.components);var d=f,v=n(55),component=Object(v.a)(d,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[t.status.loading?[t._t("loading",(function(){return[n("LoadingSpinner")]}))]:t.status.error?[t._t("error",(function(){return[n("GenericError",{attrs:{error:t.status.error}})]}),null,{error:t.status.error})]:[t._t("success",(function(){return[n("pre",[t._v(t._s(JSON.stringify(t.status.result,null,2)))])]}),null,{result:t.status.result})]],2)}),[],!1,null,null,null);e.default=component.exports}}]);