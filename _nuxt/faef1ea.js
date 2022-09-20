(window.webpackJsonp=window.webpackJsonp||[]).push([[191,67],{1390:function(e,t,n){"use strict";n(73),n(923);var r,o,c=n(522),l=n(20);!function(e){e[e.UNSPECIFIED=0]="UNSPECIFIED",e.IN_PROGRESS="IN_PROGRESS",e.PRODUCTS_NEEDED="PRODUCTS_NEEDED",e.READY_FOR_QA="READY_FOR_QA",e.DELIVERED="DELIVERED",e.COMPLETE="COMPLETE"}(r||(r={})),function(e){e[e.UNSPECIFIED=0]="UNSPECIFIED",e.Q1="Q1",e.Q2="Q2",e.Q3="Q3",e.Q4="Q4",e.OTHER="Other"}(o||(o={}));var f=n(478),d={props:{value:{key:"value",required:!1,type:null}},setup:function(e,t){var n=e,c=t.emit,d=Object(f.c)(n,c),m=Object(l.computed)((function(){return(new Date).getFullYear()})),v=Object(l.computed)((function(){return new Array(10).fill(m.value).map((function(e,t){return m.value-5+t}))}));return{proxy:d,stateOptions:[{text:" ",value:r.UNSPECIFIED},{text:"Complete",value:r.COMPLETE},{text:"Delivered",value:r.DELIVERED}],yearOptions:Object(l.computed)((function(){return v.value.map((function(e){return{value:e}}))})),quarterOptions:[{text:" ",value:o.UNSPECIFIED},{text:"Q1",value:o.Q1},{text:"Q2",value:o.Q2},{text:"Q3",value:o.Q3},{text:"Q4",value:o.Q4},{text:"Other",value:o.OTHER}]}}};d.components=Object.assign({SimpleSelect:c.a},d.components);var m=d,v=n(55),component=Object(v.a)(m,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"space-y-4"},[n("BaseLabel",[n("span",[e._v("State")]),e._v(" "),n("SimpleSelect",{staticClass:"w-full",attrs:{options:e.stateOptions},model:{value:e.proxy.state,callback:function(t){e.$set(e.proxy,"state",t)},expression:"proxy.state"}})],1),e._v(" "),n("BaseLabel",[n("span",[e._v("Year")]),e._v(" "),n("SimpleSelect",{staticClass:"w-full",attrs:{options:e.yearOptions},model:{value:e.proxy.year,callback:function(t){e.$set(e.proxy,"year",t)},expression:"proxy.year"}})],1),e._v(" "),n("BaseLabel",[n("span",[e._v("Quarter")]),e._v(" "),n("SimpleSelect",{staticClass:"w-full",attrs:{options:e.quarterOptions},model:{value:e.proxy.quarter,callback:function(t){e.$set(e.proxy,"quarter",t)},expression:"proxy.quarter"}})],1)],1)}),[],!1,null,null,null);t.a=component.exports;installComponents(component,{BaseLabel:n(488).default})},2079:function(e,t,n){"use strict";n.r(t);var r=n(10),o=(n(48),n(493)),c=n(632),l=(n(42),n(577)),f=n(519),d=n(20),m=n(544),v={};v.props={matches:{key:"matches",required:!0,type:Array}},v.setup=function(e,t){var n=e,r=Object(d.toRefs)(n).matches,o=Object(f.createColumnHelper)(),c=[o.accessor((function(e){return e.cyberOne.id}),{id:"id",header:function(){return"ID"},enableColumnFilter:!1}),o.accessor((function(e){return e.cyberOne.name}),{id:"name",header:function(){return"Name"},enableColumnFilter:!1}),o.accessor((function(e){return e.cyberOne.domain}),{id:"domain",header:function(){return"Domain"},enableColumnFilter:!1}),o.accessor((function(e){return e.supplier.name}),{id:"supplier",header:function(){return"Supplier"},enableColumnFilter:!1})];return{instance:Object(m.a)(r,c)}},v.components=Object.assign({AppTanStackTable:l.a},v.components);var y,O=v,h=n(55),x=Object(h.a)(O,(function(){var e=this,t=e.$createElement;return(e._self._c||t)("AppTanStackTable",{attrs:{table:e.instance}})}),[],!1,null,null,null).exports,j=n(545),_=n(522),w=n(1390);!function(e){e.RATING_SERVICE_1="RATING_SERVICE_1",e.RATING_SERVICE_2="RATING_SERVICE_2"}(y||(y={}));var E=n(478),C={};C.props={value:{key:"value",required:!1,type:null},matches:{key:"matches",required:!0,type:Array}},C.setup=function(e,t){var n=e,r=t.emit;return{proxy:Object(E.b)(n,r),schema:[{name:"ratingService",label:"Report Type",component:{is:_.a,attrs:{required:!0,options:[{text:"Rating Service 1",value:y.RATING_SERVICE_1},{text:"Rating Service 2",value:y.RATING_SERVICE_2}]}}},{name:"status",label:"Status",component:{is:w.a,attrs:{required:!0}}}]}},C.components=Object.assign({DynamicForm:j.a},C.components);var S=C,k=Object(h.a)(S,(function(){var e=this,t=e.$createElement;return(e._self._c||t)("DynamicForm",{attrs:{schema:e.schema},model:{value:e.proxy,callback:function(t){e.proxy=t},expression:"proxy"}})}),[],!1,null,null,null).exports,R=(n(121),n(197)),P=n(198),D=n(470),I=function(e){return Object(R.c)(["companies",e,"cyber-one","matched-pairs","whitehawk"],(function(){return D.a.get("".concat(P.a,"/companies/").concat(e.value,"/cyber-one/matched-pairs-whitehawk")).then((function(e){return e.data}))}))},T=function(e){var t=Object(R.d)();return Object(R.b)((function(t){return D.a.post("".concat(P.a,"/companies/").concat(e.value,"/cyber-one/matched-pairs-whitehawk/sync"),t).then((function(e){return e.data}))}),{onSuccess:function(){t.invalidateQueries(["companies",e,"cyber-one","matched-pairs","whitehawk"],{exact:!0})}})},A=n(481),L={setup:function(e,t){var n=Object(A.b)("id"),o=I(n),c=Object(d.ref)(),l=Object(d.computed)({get:function(){if(c.value)return c.value;var e=new Date,t=e.getFullYear(),r="Q".concat(Math.ceil((e.getMonth()+1)/4));return{id:n.value,matchedPair:o.data.value||[],status:{state:"COMPLETE",year:t,quarter:r},ratingService:"RATING_SERVICE_2"}},set:function(e){e&&(c.value=e)}}),f=Object(A.d)(),m=T(n);function v(){return(v=Object(r.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!l.value){e.next=5;break}return e.next=3,m.mutateAsync(l.value);case 3:e.sent.data&&f.push("../");case 5:case"end":return e.stop()}}),e)})))).apply(this,arguments)}return{matches:o,sync:l,syncUpdate:m,upload:function(){return v.apply(this,arguments)}}}};L.components=Object.assign({WhiteHawkMatchedPairsTable:x,ToolTip:c.a,WhiteHawkSyncInput:k,LoadingSpinner:o.a},L.components);var F=L,N=Object(h.a)(F,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("main",{staticClass:"space-y-6"},[n("BaseTablePageLayout",{scopedSlots:e._u([{key:"overline",fn:function(){return[e._v("VRM Dashboard")]},proxy:!0},{key:"title",fn:function(){return[e._v("Scorecard Sync")]},proxy:!0},{key:"table",fn:function(){return[n("WhiteHawkMatchedPairsTable",{attrs:{matches:e.matches.data.value||[]}})]},proxy:!0}])}),e._v(" "),n("BaseSimpleCard",{staticClass:"divide-y"},[n("div",{staticClass:"flex items-center space-y-1 space-x-1 p-4"},[n("BaseTypography",{attrs:{variant:"subtitle3",component:"h2"}},[e._v("\n        Sync Scorecard Assets\n      ")]),e._v(" "),n("ToolTip",[e._v("\n        This will sync the documents for the assets listed above to CyberOne.\n      ")])],1),e._v(" "),n("form",{staticClass:"divide-y",on:{submit:function(t){return t.preventDefault(),e.upload.apply(null,arguments)}}},[n("BaseVueQuery",{attrs:{query:e.matches},scopedSlots:e._u([{key:"success",fn:function(t){var data=t.data;return[n("WhiteHawkSyncInput",{attrs:{matches:data},model:{value:e.sync,callback:function(t){e.sync=t},expression:"sync"}})]}}])}),e._v(" "),n("div",{staticClass:"p-4"},[n("BaseButton",{attrs:{disabled:e.syncUpdate.isLoading.value}},[e.syncUpdate.isLoading.value?n("LoadingSpinner"):n("span",[e._v("Sync")])],1)],1)],1)])],1)}),[],!1,null,null,null);t.default=N.exports;installComponents(N,{BaseTablePageLayout:n(581).default,BaseTypography:n(476).default,BaseVueQuery:n(505).default,BaseButton:n(310).default,BaseSimpleCard:n(492).default})},470:function(e,t,n){"use strict";n.d(t,"a",(function(){return d}));var r=n(200),o=n.n(r),c=n(20),l=n(500),f=Object(c.computed)((function(){var e=Object(l.a)();return e.value?"Bearer ".concat(e.value):void 0})),d=o.a.create();d.interceptors.request.use((function(e){var t=f.value;return t&&(e.headers.Authorization=t),e}))},481:function(e,t,n){"use strict";n.d(t,"a",(function(){return f})),n.d(t,"d",(function(){return d})),n.d(t,"b",(function(){return m})),n.d(t,"c",(function(){return v}));var r=n(28),o=(n(84),n(49),n(103),n(47),n(38),n(46),n(24),n(63),n(39),n(64),n(20));function c(object,e){var t=Object.keys(object);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(object);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(object,e).enumerable}))),t.push.apply(t,n)}return t}function l(e){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?c(Object(source),!0).forEach((function(t){Object(r.a)(e,t,source[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(source)):c(Object(source)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(source,t))}))}return e}function f(){var e=Object(o.getCurrentInstance)();if(!e)throw new Error("Not in setup()?");return Object(o.computed)((function(){return e.proxy.$route}))}function d(){var e=Object(o.getCurrentInstance)();if(!e)throw new Error("Not in setup()?");return e.proxy.$router}function m(e){var t=f();return Object(o.computed)((function(){var n=t.value.params[e];if(!n)throw new Error("Missing param: ".concat(e));return n}))}function v(e,t){var n,c=f(),m=d();return Object(o.computed)({get:function(){return c.value.query[e]||t},set:function(t){clearTimeout(n),n=setTimeout((function(){m.replace({query:l(l({},c.value.query),{},Object(r.a)({},e,t))})}),300)}})}},490:function(e,t,n){"use strict";n(24),n(159),n(121);var r=n(20),o={props:{definition:{key:"definition",required:!0,type:null}},setup:function(e,t){var n=e,o=Object(r.computed)((function(){return n.definition.icon[0]})),c=Object(r.computed)((function(){return n.definition.icon[1]}));return{svgPathData:Object(r.computed)((function(){return n.definition.icon[4].toString()})),viewBox:Object(r.computed)((function(){return"0 0 ".concat(o.value," ").concat(c.value)}))}}},c=o,l=n(55),component=Object(l.a)(c,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("svg",{attrs:{xmlns:"http://www.w3.org/2000/svg",viewBox:e.viewBox,"aria-hidden":"true",focusable:"false",role:"img"}},[n("path",{attrs:{fill:"currentColor",d:e.svgPathData}})])}),[],!1,null,null,null);t.a=component.exports},492:function(e,t,n){"use strict";n.r(t);var r=n(55),component=Object(r.a)({},(function(){var e=this,t=e.$createElement;return(e._self._c||t)("div",{staticClass:"rounded-xl bg-white shadow"},[e._t("default")],2)}),[],!1,null,null,null);t.default=component.exports},493:function(e,t,n){"use strict";var r=n(490),o=n(497),c={setup:function(e,t){return{definition:o.definition}}};c.components=Object.assign({FontAwesomeSvg:r.a},c.components);var l=c,f=n(55),component=Object(f.a)(l,(function(){var e=this,t=e.$createElement;return(e._self._c||t)("FontAwesomeSvg",{staticClass:"h-5 w-5 animate-spin",attrs:{definition:e.definition}})}),[],!1,null,null,null);t.a=component.exports},495:function(e,t,n){"use strict";var r=n(496),o=n(20);n(42);var c={props:{error:{key:"error",required:!0,type:null}}};c.setup=function(e,t){var n=e;return{alert:Object(o.computed)((function(){return"string"==typeof(e=n.error)?{title:"Error",message:e}:e instanceof Error||e instanceof Object&&"name"in e&&"message"in e?{title:e.name,message:e.message}:{title:"Error",message:String(e)};var e}))}},c.components=Object.assign({AlertError:r.a},c.components);var l=c,f=n(55),component=Object(f.a)(l,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("section",[n("AlertError",{scopedSlots:e._u([{key:"title",fn:function(){return[e._v("\n      "+e._s(e.alert.title)+"\n    ")]},proxy:!0},{key:"message",fn:function(){return[e._v("\n      "+e._s(e.alert.message)+"\n    ")]},proxy:!0}])})],1)}),[],!1,null,null,null);t.a=component.exports},496:function(e,t,n){"use strict";var r=n(498),o=n.n(r),c={setup:function(e,t){return{}}};c.components=Object.assign({XCircleSvg:o.a},c.components);var l=c,f=n(55),component=Object(f.a)(l,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"rounded-md bg-red-50 p-4 shadow",attrs:{role:"alert"}},[n("div",{staticClass:"flex space-x-3"},[n("div",{staticClass:"flex-shrink-0"},[n("XCircleSvg",{staticClass:"h-5 w-5 text-red-500"})],1),e._v(" "),n("div",{staticClass:"space-y-2"},[n("h3",{staticClass:"text-sm font-medium leading-5 text-red-800"},[e._t("title")],2),e._v(" "),n("div",{staticClass:"text-sm leading-5 text-red-700"},[e._t("message")],2)])])])}),[],!1,null,null,null);t.a=component.exports},497:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r="spinner",o=[],c="f110",l="M304 48c0-26.5-21.5-48-48-48s-48 21.5-48 48s21.5 48 48 48s48-21.5 48-48zm0 416c0-26.5-21.5-48-48-48s-48 21.5-48 48s21.5 48 48 48s48-21.5 48-48zM48 304c26.5 0 48-21.5 48-48s-21.5-48-48-48s-48 21.5-48 48s21.5 48 48 48zm464-48c0-26.5-21.5-48-48-48s-48 21.5-48 48s21.5 48 48 48s48-21.5 48-48zM142.9 437c18.7-18.7 18.7-49.1 0-67.9s-49.1-18.7-67.9 0s-18.7 49.1 0 67.9s49.1 18.7 67.9 0zm0-294.2c18.7-18.7 18.7-49.1 0-67.9S93.7 56.2 75 75s-18.7 49.1 0 67.9s49.1 18.7 67.9 0zM369.1 437c18.7 18.7 49.1 18.7 67.9 0s18.7-49.1 0-67.9s-49.1-18.7-67.9 0s-18.7 49.1 0 67.9z";t.definition={prefix:"fas",iconName:r,icon:[512,512,o,c,l]},t.faSpinner=t.definition,t.prefix="fas",t.iconName=r,t.width=512,t.height=512,t.ligatures=o,t.unicode=c,t.svgPathData=l,t.aliases=o},498:function(e,t,n){n(47),n(38),n(46),n(24),n(63),n(39),n(64);var r=n(474),o=n(475),c=["class","staticClass","style","staticStyle","attrs"];function l(object,e){var t=Object.keys(object);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(object);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(object,e).enumerable}))),t.push.apply(t,n)}return t}n(121),e.exports={functional:!0,render:function(e,t){var n=t._c,data=(t._v,t.data),f=t.children,d=void 0===f?[]:f,m=data.class,v=data.staticClass,style=data.style,y=data.staticStyle,O=data.attrs,h=void 0===O?{}:O,x=o(data,c);return n("svg",function(e){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?l(Object(source),!0).forEach((function(t){r(e,t,source[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(source)):l(Object(source)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(source,t))}))}return e}({class:[m,v],style:[style,y],attrs:Object.assign({xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",fill:"currentColor","aria-hidden":"true"},h)},x),d.concat([n("path",{attrs:{"fill-rule":"evenodd",d:"M10 18a8 8 0 100-16 8 8 0 000 16zM8.28 7.22a.75.75 0 00-1.06 1.06L8.94 10l-1.72 1.72a.75.75 0 101.06 1.06L10 11.06l1.72 1.72a.75.75 0 101.06-1.06L11.06 10l1.72-1.72a.75.75 0 00-1.06-1.06L10 8.94 8.28 7.22z","clip-rule":"evenodd"}})]))}}},500:function(e,t,n){"use strict";n.d(t,"a",(function(){return c}));var r=n(20),o=n(122);function c(){var e=Object(o.a)();return Object(r.computed)((function(){return e.accessToken}))}},505:function(e,t,n){"use strict";n.r(t);var r=n(495),o=n(493),c={props:{query:{key:"query",required:!0,type:null}},setup:function(e,t){var n=e.query;return{isLoading:n.isLoading,isError:n.isError,error:n.error,data:n.data}}};c.components=Object.assign({LoadingSpinner:o.a,GenericError:r.a},c.components);var l=c,f=n(55),d=Object(f.a)(l,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("ClientOnly",[e.isLoading?[e._t("loading",(function(){return[n("LoadingSpinner")]}))]:e.isError?[e._t("error",(function(){return[n("GenericError",{attrs:{error:e.error}})]}),null,{error:e.error})]:[e._t("success",(function(){return[n("pre",[e._v(e._s(JSON.stringify(e.data,null,2)))])]}),null,{data:e.data})]],2)],1)}),[],!1,null,null,null).exports,m=Object(f.a)(d,undefined,undefined,!1,null,null,null);t.default=m.exports},544:function(e,t,n){"use strict";n.d(t,"a",(function(){return d}));var r=n(627),o=n(519),c=n(20),l=n(558),f=n(534);function d(e,t){var n=Object(c.shallowRef)([]),d=Object(c.shallowRef)({pageIndex:0,pageSize:10}),m=Object(c.shallowRef)("");return Object(f.b)({get data(){return e.value},columns:t,state:{get sorting(){return n.value},get pagination(){return d.value},get globalFilter(){return m.value}},onSortingChange:Object(l.a)(n),onPaginationChange:Object(l.a)(d),onGlobalFilterChange:Object(l.a)(m),globalFilterFn:function(e,t,n,o){var c=Object(r.rankItem)(e.getValue(t),n,{threshold:r.rankings.MATCHES});return o(c),c.passed},getCoreRowModel:Object(o.getCoreRowModel)(),getSortedRowModel:Object(o.getSortedRowModel)(),getPaginationRowModel:Object(o.getPaginationRowModel)(),getFilteredRowModel:Object(o.getFilteredRowModel)(),getFacetedUniqueValues:Object(o.getFacetedUniqueValues)()})}},545:function(e,t,n){"use strict";var r=n(478),o=n(20),c={prop:"modelValue",event:"update:modelValue"},l=Object(o.defineComponent)({model:c});l.props={modelValue:{key:"modelValue",required:!1,type:null},component:{key:"component",required:!0,type:null}},l.setup=function(e,t){var n=e,o=t.emit;return{proxy:Object(r.b)(n,o,c)}};var f=l,d=n(55),m=Object(d.a)(f,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",["input"===e.component.is?["checkbox"===e.component.attrs.type?n("input",e._b({directives:[{name:"model",rawName:"v-model",value:e.proxy,expression:"proxy"}],attrs:{type:"checkbox"},domProps:{checked:Array.isArray(e.proxy)?e._i(e.proxy,null)>-1:e.proxy},on:{change:function(t){var n=e.proxy,r=t.target,o=!!r.checked;if(Array.isArray(n)){var c=e._i(n,null);r.checked?c<0&&(e.proxy=n.concat([null])):c>-1&&(e.proxy=n.slice(0,c).concat(n.slice(c+1)))}else e.proxy=o}}},"input",e.component.attrs,!1)):"radio"===e.component.attrs.type?n("input",e._b({directives:[{name:"model",rawName:"v-model",value:e.proxy,expression:"proxy"}],attrs:{type:"radio"},domProps:{checked:e._q(e.proxy,null)},on:{change:function(t){e.proxy=null}}},"input",e.component.attrs,!1)):n("input",e._b({directives:[{name:"model",rawName:"v-model",value:e.proxy,expression:"proxy"}],attrs:{type:e.component.attrs.type},domProps:{value:e.proxy},on:{input:function(t){t.target.composing||(e.proxy=t.target.value)}}},"input",e.component.attrs,!1))]:"select"===e.component.is?[n("select",e._b({directives:[{name:"model",rawName:"v-model",value:e.proxy,expression:"proxy"}],on:{change:function(t){var n=Array.prototype.filter.call(t.target.options,(function(e){return e.selected})).map((function(e){return"_value"in e?e._value:e.value}));e.proxy=t.target.multiple?n:n[0]}}},"select",e.component.attrs,!1))]:"textarea"===e.component.is?[n("textarea",e._b({directives:[{name:"model",rawName:"v-model",value:e.proxy,expression:"proxy"}],domProps:{value:e.proxy},on:{input:function(t){t.target.composing||(e.proxy=t.target.value)}}},"textarea",e.component.attrs,!1))]:[n(e.component.is,e._b({tag:"Component",model:{value:e.proxy,callback:function(t){e.proxy=t},expression:"proxy"}},"Component",e.component.attrs,!1))]],2)}),[],!1,null,null,null).exports,v={props:{value:{key:"value",required:!1,type:null},schema:{key:"schema",required:!0,type:null}},setup:function(e,t){var n=e,c=t.emit;return{proxy:Object(r.b)(n,c),isRequired:Object(o.computed)((function(){var e,t;return null===(e=n.schema.component)||void 0===e||null===(t=e.attrs)||void 0===t?void 0:t.required}))}}};v.components=Object.assign({DynamicComponent:m},v.components);var y=v,O=Object(d.a)(y,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("BaseLabel",{staticClass:"grid grid-cols-1 gap-1 sm:grid-cols-3 sm:items-center sm:gap-4"},[n("span",[e._v("\n    "+e._s(e.schema.label)+"\n    "),e.isRequired?n("span",{staticClass:"text-red-700"},[e._v("*")]):e._e()]),e._v(" "),n("DynamicComponent",{staticClass:"flex flex-col sm:col-span-2",attrs:{component:e.schema.component},model:{value:e.proxy,callback:function(t){e.proxy=t},expression:"proxy"}})],1)}),[],!1,null,null,null),h=O.exports;installComponents(O,{BaseLabel:n(488).default});var x={props:{value:{key:"value",required:!1,type:null},schema:{key:"schema",required:!0,type:null}},setup:function(e,t){var n=e,o=t.emit;return{proxy:Object(r.c)(n,o)}}};x.components=Object.assign({DynamicFormInputGroup:h},x.components);var j=x,_=Object(d.a)(j,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"flex flex-col space-y-6 sm:space-y-0 sm:divide-y"},e._l(e.schema,(function(t){return n("div",{key:t.name,staticClass:"min-w-0 p-4"},[n("DynamicFormInputGroup",{staticClass:"h-full",attrs:{schema:t},model:{value:e.proxy[t.name],callback:function(n){e.$set(e.proxy,t.name,n)},expression:"proxy[field.name]"}})],1)})),0)}),[],!1,null,null,null);t.a=_.exports},581:function(e,t,n){"use strict";n.r(t);var r=n(55),component=Object(r.a)({},(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("main",{staticClass:"space-y-6"},[n("ClientOnly",[n("div",{staticClass:"flex flex-col space-y-4 md:flex-row md:items-center md:justify-between md:space-y-0"},[n("div",{staticClass:"flex flex-col space-y-4 sm:flex-row sm:items-center sm:space-y-0 sm:space-x-4"},[e._t("backButton"),e._v(" "),n("div",{staticClass:"flex flex-col"},[n("BaseTypography",{staticClass:"uppercase text-gray-500",attrs:{variant:"overline"}},[e._t("overline")],2),e._v(" "),n("BaseTypography",{attrs:{variant:"h5",component:"h2"}},[e._t("title")],2)],1)],2),e._v(" "),e._t("button")],2)]),e._v(" "),e._t("table")],2)}),[],!1,null,null,null);t.default=component.exports;installComponents(component,{BaseTypography:n(476).default})},632:function(e,t,n){"use strict";n(47),n(38),n(46),n(24),n(63),n(39),n(64);var r=n(104),o=n(28),c=n(10),l=(n(48),n(121),n(733)),f=n.n(l),d=n(818),m=n.n(d),v=n(2050),y=n(20);function O(object,e){var t=Object.keys(object);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(object);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(object,e).enumerable}))),t.push.apply(t,n)}return t}function h(e){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?O(Object(source),!0).forEach((function(t){Object(o.a)(e,t,source[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(source)):O(Object(source)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(source,t))}))}return e}var x={props:{type:{key:"type",required:!1,type:null,default:"info"}},setup:function(e,t){var n=e,o=Object(y.computed)((function(){return"info"===n.type?m.a:f.a})),l=Object(y.computed)((function(){return"info"===n.type?"text-indigo-500":"text-red-500"})),d=Object(y.ref)(!1),O=Object(y.ref)(),x=Object(y.ref)(),j=Object(y.computed)((function(){var e=O.value,t=x.value;if(e&&t)return Object(v.a)(e,t,{placement:"right",modifiers:[{name:"offset",options:{offset:[30,10]}}]})}));return Object(y.onUnmounted)((function(){var e;null===(e=j.value)||void 0===e||e.destroy()})),Object(y.watch)(d,function(){var e=Object(c.a)(regeneratorRuntime.mark((function e(t){var n;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!(n=j.value)){e.next=6;break}if(n.setOptions((function(e){return h(h({},e),{},{modifiers:[].concat(Object(r.a)(e.modifiers||[]),[{name:"eventListeners",enabled:t}])})})),!t){e.next=6;break}return e.next=6,n.update();case 6:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()),{dynamicIcon:o,dynamicClass:l,show:d,btnRef:O,tooltipRef:x}}},j=x,_=n(55),component=Object(_.a)(j,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("button",{ref:"btnRef",staticClass:"rounded-full transition duration-150 focus:outline-none focus:ring active:bg-gray-200",attrs:{type:"button"},on:{focus:function(t){e.show=!0},blur:function(t){e.show=!1},mouseenter:function(t){e.show=!0},mouseleave:function(t){e.show=!1},click:function(t){e.show=!e.show}}},[n(e.dynamicIcon,{tag:"Component",staticClass:"h-5 w-5",class:e.dynamicClass})],1),e._v(" "),n("div",{ref:"tooltipRef",staticClass:"z-50 w-52 rounded border border-gray-50 bg-white text-left text-sm leading-normal md:w-96",class:{block:e.show,hidden:!e.show}},[n("div",{staticClass:"rounded-md p-3 shadow-md"},[e._t("default")],2)])])}),[],!1,null,null,null);t.a=component.exports},858:function(e,t,n){"use strict";var r=n(57),o=n(130),c=n(68);e.exports=function(e){for(var t=r(this),n=c(t),l=arguments.length,f=o(l>1?arguments[1]:void 0,n),d=l>2?arguments[2]:void 0,m=void 0===d?n:o(d,n);m>f;)t[f++]=e;return t}},923:function(e,t,n){var r=n(5),o=n(858),c=n(162);r({target:"Array",proto:!0},{fill:o}),c("fill")}}]);