(window.webpackJsonp=window.webpackJsonp||[]).push([[196,67],{2003:function(e,t,r){"use strict";r.r(t);r(42),r(338),r(121),r(77),r(24),r(76),r(51),r(49),r(38),r(74),r(75),r(50);var n=r(581),o=r(547),l=r(587),c={};c.props={value:{key:"value",required:!1,type:String},remove:{key:"remove",required:!0,type:Function}},c.setup=function(e,t){return{}},c.components=Object.assign({DateIsoStringDisplay:l.a},c.components);var d=c,f=r(55),v=Object(f.a)(d,(function(){var e=this,t=e.$createElement,r=e._self._c||t;return e.value?r("div",{staticClass:"flex items-center space-x-1"},[r("DateIsoStringDisplay",{staticClass:"inline-flex items-center px-2 py-0.5 text-xs font-medium uppercase leading-4 tracking-widest",attrs:{value:e.value,format:"date"}})],1):e._e()}),[],!1,null,null,null).exports,m=r(69),y=r(521),h=r(20),O=r(544);function j(e,t){var r="undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(!r){if(Array.isArray(e)||(r=function(e,t){if(!e)return;if("string"==typeof e)return w(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);"Object"===r&&e.constructor&&(r=e.constructor.name);if("Map"===r||"Set"===r)return Array.from(e);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return w(e,t)}(e))||t&&e&&"number"==typeof e.length){r&&(e=r);var i=0,n=function(){};return{s:n,n:function(){return i>=e.length?{done:!0}:{done:!1,value:e[i++]}},e:function(e){throw e},f:n}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var o,l=!0,c=!1;return{s:function(){r=r.call(e)},n:function(){var e=r.next();return l=e.done,e},e:function(e){c=!0,o=e},f:function(){try{l||null==r.return||r.return()}finally{if(c)throw o}}}}function w(e,t){(null==t||t>e.length)&&(t=e.length);for(var i=0,r=new Array(t);i<t;i++)r[i]=e[i];return r}var _={};_.props={value:{key:"value",required:!0,type:Array},directory:{key:"directory",required:!0,type:String}},_.setup=function(e,t){var r=e,n=Object(m.f)(),l=Object(y.createColumnHelper)(),c=Object(h.computed)((function(){var e,t=[],n=j(r.value);try{for(n.s();!(e=n.n()).done;){var o=e.value,l=o.key,c=o.lastUpdated;if((null==l?void 0:l.endsWith(".pdf"))&&!(null==l?void 0:l.endsWith(".doc"))){var f=d(l);t.push({key:f,lastUpdated:c})}}}catch(e){n.e(e)}finally{n.f()}return t}));function d(e){return e.split("/")[1]}var f=[l.accessor("key",{header:function(){return"File Name"},enableColumnFilter:!1}),l.accessor((function(e){return null==e?void 0:e.lastUpdated}),{id:"lastUpdated",header:function(){return"Last Updated"},cell:function(e){return Object(h.h)(v,{props:{value:e.getValue(),format:"date"}})},enableColumnFilter:!1}),l.display({id:"actions",header:"Actions",cell:function(e){var t=e.row;return Object(h.h)(o.a,{props:{actions:[{id:"edit",action:function(){var e;n.push("/admin/file-upload/document/".concat(encodeURIComponent(r.directory),"/").concat(null===(e=t.original)||void 0===e?void 0:e.key))}}]}})}})];return{rows:c,instance:Object(O.a)(c,f)}},_.components=Object.assign({AppTanStackTable:n.a},_.components);var C=_,x=Object(f.a)(C,(function(){var e=this,t=e.$createElement,r=e._self._c||t;return e.rows?r("div",[r("AppTanStackTable",{attrs:{table:e.instance}})],1):e._e()}),[],!1,null,null,null).exports,D=r(501),S={setup:function(e,t){var r=Object(h.ref)(),n=Object(h.ref)(!1),o=Object(h.computed)((function(){var e;return null===(e=r.value)||void 0===e?void 0:e.name})),l=D.P.read(o);Object(h.watch)(o,(function(e){e&&(n.value=!0)}));return{directories:r,toggleTable:n,directoryNames:o,getdirectoriesFiles:l,directoriesName:[{name:"testFolder"}]}}};S.components=Object.assign({PagesDocumentsTable:x},S.components);var N=S,T=Object(f.a)(N,(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("section",{staticClass:"space-y-2"},[r("div",[r("BaseTypography",{staticClass:"px-1 pb-6",attrs:{component:"h2",variant:"h6"}},[e._v("\n      Document Management\n    ")]),e._v(" "),r("BaseSimpleCard",{staticClass:"p-4"},[r("div",{staticClass:"divide-y divide-gray-300 border-t border-l border-r border-gray-300 bg-gray-100"},[r("BaseTypography",{staticClass:"p-4 text-gray-600",attrs:{variant:"subtitle3",component:"h3"}},[e._v("\n          Select Documents Directory\n        ")]),e._v(" "),r("div",{staticClass:"p-4"},[r("BaseLabel",{staticClass:"flex flex-col lg:col-span-3"},[e._v("\n            Directories\n            "),r("BaseSelect",{model:{value:e.directories,callback:function(t){e.directories=t},expression:"directories"}},[r("option",{domProps:{value:null}}),e._v(" "),e._l(e.directoriesName,(function(option){return r("option",{key:option.name,domProps:{value:option}},[e._v("\n                "+e._s(option.name)+"\n              ")])}))],2)],1)],1)],1),e._v(" "),e.toggleTable?r("div",[r("BaseVueQuery",{attrs:{query:e.getdirectoriesFiles},scopedSlots:e._u([{key:"success",fn:function(t){var data=t.data;return[r("div",{staticClass:"flex flex-col space-y-12"},[r("PagesDocumentsTable",{attrs:{value:data,directory:e.directoryNames}})],1)]}}],null,!1,1641520578)})],1):e._e()])],1)])}),[],!1,null,null,null);t.default=T.exports;installComponents(T,{BaseTypography:r(475).default,BaseSelect:r(508).default,BaseLabel:r(487).default,BaseVueQuery:r(504).default,BaseSimpleCard:r(491).default})},486:function(e,t,r){"use strict";function n(e,t){if(t.length<e)throw new TypeError(e+" argument"+(e>1?"s":"")+" required, but only "+t.length+" present")}r.d(t,"a",(function(){return n}))},489:function(e,t,r){"use strict";r(24),r(159),r(121);var n=r(20),o={props:{definition:{key:"definition",required:!0,type:null}},setup:function(e,t){var r=e,o=Object(n.computed)((function(){return r.definition.icon[0]})),l=Object(n.computed)((function(){return r.definition.icon[1]}));return{svgPathData:Object(n.computed)((function(){return r.definition.icon[4].toString()})),viewBox:Object(n.computed)((function(){return"0 0 ".concat(o.value," ").concat(l.value)}))}}},l=o,c=r(55),component=Object(c.a)(l,(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("svg",{attrs:{xmlns:"http://www.w3.org/2000/svg",viewBox:e.viewBox,"aria-hidden":"true",focusable:"false",role:"img"}},[r("path",{attrs:{fill:"currentColor",d:e.svgPathData}})])}),[],!1,null,null,null);t.a=component.exports},491:function(e,t,r){"use strict";r.r(t);var n=r(55),component=Object(n.a)({},(function(){var e=this,t=e.$createElement;return(e._self._c||t)("div",{staticClass:"rounded-xl bg-white shadow"},[e._t("default")],2)}),[],!1,null,null,null);t.default=component.exports},492:function(e,t,r){"use strict";var n=r(489),o=r(496),l={setup:function(e,t){return{definition:o.definition}}};l.components=Object.assign({FontAwesomeSvg:n.a},l.components);var c=l,d=r(55),component=Object(d.a)(c,(function(){var e=this,t=e.$createElement;return(e._self._c||t)("FontAwesomeSvg",{staticClass:"h-5 w-5 animate-spin",attrs:{definition:e.definition}})}),[],!1,null,null,null);t.a=component.exports},494:function(e,t,r){"use strict";var n=r(495),o=r(20);r(42);var l={props:{error:{key:"error",required:!0,type:null}}};l.setup=function(e,t){var r=e;return{alert:Object(o.computed)((function(){return"string"==typeof(e=r.error)?{title:"Error",message:e}:e instanceof Error||e instanceof Object&&"name"in e&&"message"in e?{title:e.name,message:e.message}:{title:"Error",message:String(e)};var e}))}},l.components=Object.assign({AlertError:n.a},l.components);var c=l,d=r(55),component=Object(d.a)(c,(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("section",[r("AlertError",{scopedSlots:e._u([{key:"title",fn:function(){return[e._v("\n      "+e._s(e.alert.title)+"\n    ")]},proxy:!0},{key:"message",fn:function(){return[e._v("\n      "+e._s(e.alert.message)+"\n    ")]},proxy:!0}])})],1)}),[],!1,null,null,null);t.a=component.exports},495:function(e,t,r){"use strict";var n=r(498),o=r.n(n),l={setup:function(e,t){return{}}};l.components=Object.assign({XCircleSvg:o.a},l.components);var c=l,d=r(55),component=Object(d.a)(c,(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"rounded-md bg-red-50 p-4 shadow",attrs:{role:"alert"}},[r("div",{staticClass:"flex space-x-3"},[r("div",{staticClass:"flex-shrink-0"},[r("XCircleSvg",{staticClass:"h-5 w-5 text-red-500"})],1),e._v(" "),r("div",{staticClass:"space-y-2"},[r("h3",{staticClass:"text-sm font-medium leading-5 text-red-800"},[e._t("title")],2),e._v(" "),r("div",{staticClass:"text-sm leading-5 text-red-700"},[e._t("message")],2)])])])}),[],!1,null,null,null);t.a=component.exports},496:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n="spinner",o=[],l="f110",c="M304 48c0-26.5-21.5-48-48-48s-48 21.5-48 48s21.5 48 48 48s48-21.5 48-48zm0 416c0-26.5-21.5-48-48-48s-48 21.5-48 48s21.5 48 48 48s48-21.5 48-48zM48 304c26.5 0 48-21.5 48-48s-21.5-48-48-48s-48 21.5-48 48s21.5 48 48 48zm464-48c0-26.5-21.5-48-48-48s-48 21.5-48 48s21.5 48 48 48s48-21.5 48-48zM142.9 437c18.7-18.7 18.7-49.1 0-67.9s-49.1-18.7-67.9 0s-18.7 49.1 0 67.9s49.1 18.7 67.9 0zm0-294.2c18.7-18.7 18.7-49.1 0-67.9S93.7 56.2 75 75s-18.7 49.1 0 67.9s49.1 18.7 67.9 0zM369.1 437c18.7 18.7 49.1 18.7 67.9 0s18.7-49.1 0-67.9s-49.1-18.7-67.9 0s-18.7 49.1 0 67.9z";t.definition={prefix:"fas",iconName:n,icon:[512,512,o,l,c]},t.faSpinner=t.definition,t.prefix="fas",t.iconName=n,t.width=512,t.height=512,t.ligatures=o,t.unicode=l,t.svgPathData=c,t.aliases=o},498:function(e,t,r){r(47),r(38),r(46),r(24),r(63),r(39),r(64);var n=r(470),o=r(471),l=["class","staticClass","style","staticStyle","attrs"];function c(object,e){var t=Object.keys(object);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(object);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(object,e).enumerable}))),t.push.apply(t,r)}return t}r(121),e.exports={functional:!0,render:function(e,t){var r=t._c,data=(t._v,t.data),d=t.children,f=void 0===d?[]:d,v=data.class,m=data.staticClass,style=data.style,y=data.staticStyle,h=data.attrs,O=void 0===h?{}:h,j=o(data,l);return r("svg",function(e){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?c(Object(source),!0).forEach((function(t){n(e,t,source[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(source)):c(Object(source)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(source,t))}))}return e}({class:[v,m],style:[style,y],attrs:Object.assign({xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",fill:"currentColor","aria-hidden":"true"},O)},j),f.concat([r("path",{attrs:{"fill-rule":"evenodd",d:"M10 18a8 8 0 100-16 8 8 0 000 16zM8.28 7.22a.75.75 0 00-1.06 1.06L8.94 10l-1.72 1.72a.75.75 0 101.06 1.06L10 11.06l1.72 1.72a.75.75 0 101.06-1.06L11.06 10l1.72-1.72a.75.75 0 00-1.06-1.06L10 8.94 8.28 7.22z","clip-rule":"evenodd"}})]))}}},502:function(e,t,r){"use strict";function n(e){if(null===e||!0===e||!1===e)return NaN;var t=Number(e);return isNaN(t)?t:t<0?Math.ceil(t):Math.floor(t)}r.d(t,"a",(function(){return n}))},504:function(e,t,r){"use strict";r.r(t);var n=r(494),o=r(492),l={props:{query:{key:"query",required:!0,type:null}},setup:function(e,t){var r=e.query;return{isLoading:r.isLoading,isError:r.isError,error:r.error,data:r.data}}};l.components=Object.assign({LoadingSpinner:o.a,GenericError:n.a},l.components);var c=l,d=r(55),f=Object(d.a)(c,(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",[r("ClientOnly",[e.isLoading?[e._t("loading",(function(){return[r("LoadingSpinner")]}))]:e.isError?[e._t("error",(function(){return[r("GenericError",{attrs:{error:e.error}})]}),null,{error:e.error})]:[e._t("success",(function(){return[r("pre",[e._v(e._s(JSON.stringify(e.data,null,2)))])]}),null,{data:e.data})]],2)],1)}),[],!1,null,null,null).exports,v=Object(d.a)(f,undefined,undefined,!1,null,null,null);t.default=v.exports},524:function(e,t,r){"use strict";r.d(t,"b",(function(){return n})),r.d(t,"a",(function(){return o})),r.d(t,"c",(function(){return l}));Math.pow(10,8);var n=6e4,o=36e5,l=1e3},531:function(e,t,r){"use strict";var n=r(20),o={props:{value:{key:"value",required:!0,type:null},format:{key:"format",required:!1,type:null,default:"full"}},setup:function(e,t){var r={full:function(e){return e.toLocaleString()},date:function(e){return e.toLocaleDateString()}},o=e,l=Object(n.computed)((function(){return r[o.format]}));return{dateTimeValue:Object(n.computed)((function(){return o.value.toISOString()})),display:Object(n.computed)((function(){return l.value(o.value)}))}}},l=o,c=r(55),component=Object(c.a)(l,(function(){var e=this,t=e.$createElement;return(e._self._c||t)("time",{attrs:{datetime:e.dateTimeValue}},[e._v("\n  "+e._s(e.display)+"\n")])}),[],!1,null,null,null);t.a=component.exports},544:function(e,t,r){"use strict";r.d(t,"a",(function(){return f}));var n=r(631),o=r(521),l=r(20),c=r(579),d=r(534);function f(e,t){var r=Object(l.shallowRef)([]),f=Object(l.shallowRef)({pageIndex:0,pageSize:10}),v=Object(l.shallowRef)("");return Object(d.b)({get data(){return e.value},columns:t,state:{get sorting(){return r.value},get pagination(){return f.value},get globalFilter(){return v.value}},onSortingChange:Object(c.a)(r),onPaginationChange:Object(c.a)(f),onGlobalFilterChange:Object(c.a)(v),globalFilterFn:function(e,t,r,o){var l=Object(n.rankItem)(e.getValue(t),r,{threshold:n.rankings.MATCHES});return o(l),l.passed},getCoreRowModel:Object(o.getCoreRowModel)(),getSortedRowModel:Object(o.getSortedRowModel)(),getPaginationRowModel:Object(o.getPaginationRowModel)(),getFilteredRowModel:Object(o.getFilteredRowModel)(),getFacetedUniqueValues:Object(o.getFacetedUniqueValues)()})}},587:function(e,t,r){"use strict";var n=r(531),o=r(632),l=r(20),c={};c.props={value:{key:"value",required:!0,type:null},format:{key:"format",required:!1,type:String}},c.setup=function(e,t){var r=e;return{date:Object(l.computed)((function(){return Object(o.a)(r.value)}))}},c.components=Object.assign({DateDisplay:n.a},c.components);var d=c,f=r(55),component=Object(f.a)(d,(function(){var e=this,t=e.$createElement,r=e._self._c||t;return e.value?r("DateDisplay",{attrs:{value:e.date,format:e.format}}):e._e()}),[],!1,null,null,null);t.a=component.exports},632:function(e,t,r){"use strict";r.d(t,"a",(function(){return c}));var n=r(524),o=r(486),l=r(502);function c(e,t){var r;Object(o.a)(1,arguments);var n=Object(l.a)(null!==(r=null==t?void 0:t.additionalDigits)&&void 0!==r?r:2);if(2!==n&&1!==n&&0!==n)throw new RangeError("additionalDigits must be 0, 1 or 2");if("string"!=typeof e&&"[object String]"!==Object.prototype.toString.call(e))return new Date(NaN);var c,d=y(e);if(d.date){var f=h(d.date,n);c=O(f.restDateString,f.year)}if(!c||isNaN(c.getTime()))return new Date(NaN);var v,m=c.getTime(),time=0;if(d.time&&(time=w(d.time),isNaN(time)))return new Date(NaN);if(!d.timezone){var j=new Date(m+time),_=new Date(0);return _.setFullYear(j.getUTCFullYear(),j.getUTCMonth(),j.getUTCDate()),_.setHours(j.getUTCHours(),j.getUTCMinutes(),j.getUTCSeconds(),j.getUTCMilliseconds()),_}return v=C(d.timezone),isNaN(v)?new Date(NaN):new Date(m+time+v)}var d={dateTimeDelimiter:/[T ]/,timeZoneDelimiter:/[Z ]/i,timezone:/([Z+-].*)$/},f=/^-?(?:(\d{3})|(\d{2})(?:-?(\d{2}))?|W(\d{2})(?:-?(\d{1}))?|)$/,v=/^(\d{2}(?:[.,]\d*)?)(?::?(\d{2}(?:[.,]\d*)?))?(?::?(\d{2}(?:[.,]\d*)?))?$/,m=/^([+-])(\d{2})(?::?(\d{2}))?$/;function y(e){var t,r={},n=e.split(d.dateTimeDelimiter);if(n.length>2)return r;if(/:/.test(n[0])?t=n[0]:(r.date=n[0],t=n[1],d.timeZoneDelimiter.test(r.date)&&(r.date=e.split(d.timeZoneDelimiter)[0],t=e.substr(r.date.length,e.length))),t){var o=d.timezone.exec(t);o?(r.time=t.replace(o[1],""),r.timezone=o[1]):r.time=t}return r}function h(e,t){var r=new RegExp("^(?:(\\d{4}|[+-]\\d{"+(4+t)+"})|(\\d{2}|[+-]\\d{"+(2+t)+"})$)"),n=e.match(r);if(!n)return{year:NaN,restDateString:""};var o=n[1]?parseInt(n[1]):null,l=n[2]?parseInt(n[2]):null;return{year:null===l?o:100*l,restDateString:e.slice((n[1]||n[2]).length)}}function O(e,t){if(null===t)return new Date(NaN);var r=e.match(f);if(!r)return new Date(NaN);var n=!!r[4],o=j(r[1]),l=j(r[2])-1,c=j(r[3]),d=j(r[4]),v=j(r[5])-1;if(n)return function(e,t,r){return t>=1&&t<=53&&r>=0&&r<=6}(0,d,v)?function(e,t,r){var n=new Date(0);n.setUTCFullYear(e,0,4);var o=n.getUTCDay()||7,l=7*(t-1)+r+1-o;return n.setUTCDate(n.getUTCDate()+l),n}(t,d,v):new Date(NaN);var m=new Date(0);return function(e,t,r){return t>=0&&t<=11&&r>=1&&r<=(x[t]||(D(e)?29:28))}(t,l,c)&&function(e,t){return t>=1&&t<=(D(e)?366:365)}(t,o)?(m.setUTCFullYear(t,l,Math.max(o,c)),m):new Date(NaN)}function j(e){return e?parseInt(e):1}function w(e){var t=e.match(v);if(!t)return NaN;var r=_(t[1]),o=_(t[2]),l=_(t[3]);return function(e,t,r){if(24===e)return 0===t&&0===r;return r>=0&&r<60&&t>=0&&t<60&&e>=0&&e<25}(r,o,l)?r*n.a+o*n.b+1e3*l:NaN}function _(e){return e&&parseFloat(e.replace(",","."))||0}function C(e){if("Z"===e)return 0;var t=e.match(m);if(!t)return 0;var r="+"===t[1]?-1:1,o=parseInt(t[2]),l=t[3]&&parseInt(t[3])||0;return function(e,t){return t>=0&&t<=59}(0,l)?r*(o*n.a+l*n.b):NaN}var x=[31,null,31,30,31,30,31,31,30,31,30,31];function D(e){return e%400==0||e%4==0&&e%100!=0}}}]);