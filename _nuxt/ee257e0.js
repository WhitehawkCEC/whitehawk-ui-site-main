(window.webpackJsonp=window.webpackJsonp||[]).push([[193,25,54,57,68,71],{2052:function(e,t,n){"use strict";n.r(t);var r=n(514),o=(n(41),n(104),n(549)),l=n(525),c=n(512),d=n(18),f=n(562),v=n(479),y={};y.props={id:{key:"id",required:!0,type:String},products:{key:"products",required:!0,type:Array}},y.setup=function(e,t){var n=e,r=Object(d.computed)((function(){return n.products})),o=Object(v.d)(),y=Object(c.createColumnHelper)(),m=[y.accessor("id",{header:function(){return"Id"},enableColumnFilter:!1}),y.accessor("name",{header:function(){return"Name"},enableColumnFilter:!1}),y.accessor((function(e){return e.type.name}),{id:"type",header:function(){return"Type"},enableColumnFilter:!1}),y.display({id:"actions",header:"Actions",cell:function(e){var t=e.row;return Object(d.h)(l.a,{props:{actions:[{id:"view",action:function(){o.push("/admin/manufacturers/".concat(n.id,"/products/").concat(t.original.id))}}]}})}})];return{instance:Object(f.a)(r,m)}},y.components=Object.assign({AppTanStackTable:o.a},y.components);var m=y,h=n(55),x=Object(h.a)(m,(function(){var e=this,t=e.$createElement;return(e._self._c||t)("AppTanStackTable",{attrs:{table:e.instance}})}),[],!1,null,null,null).exports,C=n(497),_={setup:function(e,t){var n=Object(v.b)("id");return{id:n,productsQuery:C.R.list(n)}}};_.components=Object.assign({PlusSvg:r.a,ManufacturerProductsTable:x},_.components);var w=_,O=Object(h.a)(w,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("BaseTablePageLayout",{scopedSlots:e._u([{key:"title",fn:function(){return[e._v("Products")]},proxy:!0},{key:"button",fn:function(){return[n("BaseButton",{staticClass:"w-full space-x-2 md:w-auto",attrs:{to:"/admin/manufacturers/"+e.id+"/products/new"}},[n("PlusSvg",{staticClass:"h-auto w-4 xl:w-5"}),e._v(" "),n("span",[e._v("Product")])],1)]},proxy:!0},{key:"table",fn:function(){return[n("BaseVueQuery",{attrs:{query:e.productsQuery},scopedSlots:e._u([{key:"success",fn:function(t){var data=t.data;return[n("ManufacturerProductsTable",{attrs:{id:e.id,products:data}})]}}])})]},proxy:!0}])})}),[],!1,null,null,null);t.default=O.exports;installComponents(O,{BaseButton:n(306).default,BaseVueQuery:n(502).default,BaseTablePageLayout:n(605).default})},471:function(e,t,n){"use strict";n.r(t);var r=n(18),o=Object(r.defineComponent)({inheritAttrs:!1});o.props={variant:{key:"variant",required:!0,type:null},component:{key:"component",required:!1,type:null,default:"span"}},o.setup=function(e,t){var n="antialiased",o={h1:"".concat(n," font-display text-4xl font-semibold leading-snug tracking-wide sm:text-5xl md:text-6xl"),h2:"".concat(n," font-display text-3xl font-semibold leading-9 tracking-normal sm:text-5xl sm:leading-10"),h3:"".concat(n," font-display text-3xl font-medium leading-8 tracking-normal sm:text-4xl sm:leading-10"),h4:"".concat(n," font-display text-2xl font-medium leading-8 tracking-wide sm:text-3xl sm:leading-9"),h5:"".concat(n," font-display text-2xl font-medium leading-6 tracking-normal"),h6:"".concat(n," font-display text-xl font-semibold leading-7 tracking-wide"),p1:"".concat(n," font-body text-base font-normal leading-7 tracking-wide"),p2:"".concat(n," font-body text-sm font-normal leading-6 tracking-normal"),subtitle1:"".concat(n," font-body text-lg font-normal leading-6 tracking-wide sm:text-xl"),subtitle2:"".concat(n," font-body text-xs font-medium leading-5 tracking-wide"),subtitle3:"".concat(n," font-display text-lg font-medium leading-5 tracking-wide"),overline:"".concat(n," font-display text-xs font-medium tracking-widest"),button:"".concat(n," font-body text-xs font-medium tracking-wider sm:text-sm xl:tracking-wide")},l=e;return{displayTypeClass:Object(r.computed)((function(){return o[l.variant]}))}};var l=o,c=n(55),component=Object(c.a)(l,(function(){var e=this,t=e.$createElement;return(e._self._c||t)(e.component,e._g(e._b({tag:"Component",class:e.displayTypeClass},"Component",e.$attrs,!1),e.$listeners),[e._t("default")],2)}),[],!1,null,null,null);t.default=component.exports},479:function(e,t,n){"use strict";n.d(t,"b",(function(){return f})),n.d(t,"c",(function(){return v}));var r=n(26),o=(n(85),n(46),n(105),n(45),n(36),n(44),n(22),n(56),n(37),n(57),n(66)),l=n(18);function c(object,e){var t=Object.keys(object);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(object);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(object,e).enumerable}))),t.push.apply(t,n)}return t}function d(e){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?c(Object(source),!0).forEach((function(t){Object(r.a)(e,t,source[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(source)):c(Object(source)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(source,t))}))}return e}function f(e){var t=Object(o.g)();return Object(l.computed)((function(){var n=t.value.params[e];if(!n)throw new Error("Missing param: ".concat(e));return n}))}function v(e,t){var n,c=Object(o.g)(),f=Object(o.h)();return Object(l.computed)({get:function(){return c.value.query[e]||t},set:function(t){clearTimeout(n),n=setTimeout((function(){f.replace({query:d(d({},c.value.query),{},Object(r.a)({},e,t))})}),300)}})}n.d(t,"a",(function(){return o.g})),n.d(t,"d",(function(){return o.h}))},481:function(e,t,n){"use strict";n.r(t);var r=n(18),o=Object(r.defineComponent)({inheritAttrs:!1}),l=n(55),component=Object(l.a)(o,(function(){var e=this,t=e.$createElement;return(e._self._c||t)("label",e._g(e._b({staticClass:"block font-body text-sm font-medium leading-5 tracking-wide text-gray-600 antialiased",attrs:{role:"label"}},"label",e.$attrs,!1),e.$listeners),[e._t("default")],2)}),[],!1,null,null,null);t.default=component.exports},484:function(e,t,n){"use strict";n.r(t);var r=n(18),o=Object(r.defineComponent)({inheritAttrs:!1});o.props={action:{key:"action",required:!1,type:null,default:"primary"},shape:{key:"shape",required:!1,type:null,default:"round"},color:{key:"color",required:!1,type:null,default:"base"},size:{key:"size",required:!1,type:null,default:"base"},to:{key:"to",required:!1,type:null,default:void 0}},o.setup=function(e,t){var n="inline-flex flex-shrink-0 justify-center items-center antialiased transform transition duration-200 hover:-translate-y-px hover:shadow-md focus:outline-none focus:ring disabled:cursor-not-allowed disabled:opacity-50",o={primary:{base:"".concat(n," text-white bg-blue-500 hover:bg-blue-600 focus:bg-blue-600 focus:ring-blue-200"),teal:"".concat(n," text-white bg-teal-500 hover:bg-teal-600 focus:bg-teal-600 focus:ring-teal-200"),light:"".concat(n," text-gray-400 border border-gray-400 hover:text-indigo-500 hover:shadow-none hover:border-indigo-500 focus:text-indigo-500 focus:shadow-none focus:ring-indigo-200 focus:border-indigo-500"),info:"".concat(n," text-white bg-prime-indigo hover:bg-indigo-500 focus:bg-indigo-500 focus:ring-indigo-200"),danger:"".concat(n," text-white bg-red-500 hover:bg-red-600 focus:bg-red-600 focus:ring-red-200")},secondary:{base:"".concat(n," border bg-white text-prime-navy hover:text-prime-darkest hover:shadow-inner focus:shadow-inner focus:text-prime-darkest focus:ring-gray-200"),teal:"".concat(n," bg-white text-teal-500 border-teal-500 hover:bg-teal-200 hover:text-teal-600 hover:border-transparent focus:bg-teal-200 focus:text-teal-600 focus:border-transparent focus:ring-teal-200"),light:"".concat(n," text-white hover:bg-gray-50 hover:text-gray-500 focus:bg-gray-50 focus:text-gray-500 focus:ring-gray-200"),info:"".concat(n," bg-white text-indigo-500 border-indigo-500 hover:bg-indigo-200 hover:text-indigo-600 hover:border-transparent focus:bg-indigo-200 focus:text-indigo-600 focus:border-transparent focus:ring-indigo-200"),danger:"".concat(n," bg-white text-red-500 border-red-500 hover:bg-red-200 hover:text-red-600 hover:border-transparent focus:bg-red-200 focus:text-red-600 focus:border-transparent focus:ring-red-200")}},l=e;return{SIZE_CLASSES:{xs:"p-0.5",small:"p-1",base:"p-2",large:"p-3"},SHAPE_CLASSES:{round:"rounded-full",square:"rounded-md"},COLOR_CLASSES:o,type:Object(r.computed)((function(){return l.to?"nuxt-link":"button"}))}};var l=o,c=n(55),component=Object(c.a)(l,(function(){var e=this,t=e.$createElement;return(e._self._c||t)(e.type,e._g(e._b({tag:"Component",class:[e.SIZE_CLASSES[e.size],e.SHAPE_CLASSES[e.shape],e.COLOR_CLASSES[e.action][e.color]],attrs:{to:e.to}},"Component",e.$attrs,!1),e.$listeners),[e._t("default")],2)}),[],!1,null,null,null);t.default=component.exports},488:function(e,t,n){"use strict";n(22),n(122),n(104);var r=n(18),o={props:{definition:{key:"definition",required:!0,type:null}},setup:function(e,t){var n=e,o=Object(r.computed)((function(){return n.definition.icon[0]})),l=Object(r.computed)((function(){return n.definition.icon[1]}));return{svgPathData:Object(r.computed)((function(){return n.definition.icon[4].toString()})),viewBox:Object(r.computed)((function(){return"0 0 ".concat(o.value," ").concat(l.value)}))}}},l=o,c=n(55),component=Object(c.a)(l,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("svg",{attrs:{xmlns:"http://www.w3.org/2000/svg",viewBox:e.viewBox,"aria-hidden":"true",focusable:"false",role:"img"}},[n("path",{attrs:{fill:"currentColor",d:e.svgPathData}})])}),[],!1,null,null,null);t.a=component.exports},490:function(e,t,n){"use strict";var r=n(488),o=n(492),l={setup:function(e,t){return{definition:o.definition}}};l.components=Object.assign({FontAwesomeSvg:r.a},l.components);var c=l,d=n(55),component=Object(d.a)(c,(function(){var e=this,t=e.$createElement;return(e._self._c||t)("FontAwesomeSvg",{staticClass:"h-5 w-5 animate-spin",attrs:{definition:e.definition}})}),[],!1,null,null,null);t.a=component.exports},492:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r="spinner",o=[],l="f110",c="M304 48C304 74.51 282.5 96 256 96C229.5 96 208 74.51 208 48C208 21.49 229.5 0 256 0C282.5 0 304 21.49 304 48zM304 464C304 490.5 282.5 512 256 512C229.5 512 208 490.5 208 464C208 437.5 229.5 416 256 416C282.5 416 304 437.5 304 464zM0 256C0 229.5 21.49 208 48 208C74.51 208 96 229.5 96 256C96 282.5 74.51 304 48 304C21.49 304 0 282.5 0 256zM512 256C512 282.5 490.5 304 464 304C437.5 304 416 282.5 416 256C416 229.5 437.5 208 464 208C490.5 208 512 229.5 512 256zM74.98 437C56.23 418.3 56.23 387.9 74.98 369.1C93.73 350.4 124.1 350.4 142.9 369.1C161.6 387.9 161.6 418.3 142.9 437C124.1 455.8 93.73 455.8 74.98 437V437zM142.9 142.9C124.1 161.6 93.73 161.6 74.98 142.9C56.24 124.1 56.24 93.73 74.98 74.98C93.73 56.23 124.1 56.23 142.9 74.98C161.6 93.73 161.6 124.1 142.9 142.9zM369.1 369.1C387.9 350.4 418.3 350.4 437 369.1C455.8 387.9 455.8 418.3 437 437C418.3 455.8 387.9 455.8 369.1 437C350.4 418.3 350.4 387.9 369.1 369.1V369.1z";t.definition={prefix:"fas",iconName:r,icon:[512,512,o,l,c]},t.faSpinner=t.definition,t.prefix="fas",t.iconName=r,t.width=512,t.height=512,t.ligatures=o,t.unicode=l,t.svgPathData=c,t.aliases=o},493:function(e,t,n){"use strict";var r=n(495),o=n.n(r),l={setup:function(e,t){return{}}};l.components=Object.assign({XCircleSvg:o.a},l.components);var c=l,d=n(55),component=Object(d.a)(c,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"rounded-md bg-red-50 p-4 shadow",attrs:{role:"alert"}},[n("div",{staticClass:"flex space-x-3"},[n("div",{staticClass:"flex-shrink-0"},[n("XCircleSvg",{staticClass:"h-5 w-5 text-red-500"})],1),e._v(" "),n("div",{staticClass:"space-y-2"},[n("h3",{staticClass:"text-sm font-medium leading-5 text-red-800"},[e._t("title")],2),e._v(" "),n("div",{staticClass:"text-sm leading-5 text-red-700"},[e._t("message")],2)])])])}),[],!1,null,null,null);t.a=component.exports},494:function(e,t,n){"use strict";var r=n(493),o=n(18);n(41);var l={props:{error:{key:"error",required:!0,type:null}}};l.setup=function(e,t){var n=e;return{alert:Object(o.computed)((function(){return"string"==typeof(e=n.error)?{title:"Error",message:e}:e instanceof Error||e instanceof Object&&"name"in e&&"message"in e?{title:e.name,message:e.message}:{title:"Error",message:String(e)};var e}))}},l.components=Object.assign({AlertError:r.a},l.components);var c=l,d=n(55),component=Object(d.a)(c,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("section",[n("AlertError",{scopedSlots:e._u([{key:"title",fn:function(){return[e._v("\n      "+e._s(e.alert.title)+"\n    ")]},proxy:!0},{key:"message",fn:function(){return[e._v("\n      "+e._s(e.alert.message)+"\n    ")]},proxy:!0}])})],1)}),[],!1,null,null,null);t.a=component.exports},495:function(e,t,n){n(45),n(36),n(44),n(22),n(56),n(37),n(57);var r=n(466),o=n(467),l=["class","staticClass","style","staticStyle","attrs"];function c(object,e){var t=Object.keys(object);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(object);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(object,e).enumerable}))),t.push.apply(t,n)}return t}n(104),e.exports={functional:!0,render:function(e,t){var n=t._c,data=(t._v,t.data),d=t.children,f=void 0===d?[]:d,v=data.class,y=data.staticClass,style=data.style,m=data.staticStyle,h=data.attrs,x=void 0===h?{}:h,C=o(data,l);return n("svg",function(e){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?c(Object(source),!0).forEach((function(t){r(e,t,source[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(source)):c(Object(source)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(source,t))}))}return e}({class:[v,y],style:[style,m],attrs:Object.assign({xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",fill:"currentColor","aria-hidden":"true"},x)},C),f.concat([n("path",{attrs:{"fill-rule":"evenodd",d:"M10 18a8 8 0 100-16 8 8 0 000 16zM8.28 7.22a.75.75 0 00-1.06 1.06L8.94 10l-1.72 1.72a.75.75 0 101.06 1.06L10 11.06l1.72 1.72a.75.75 0 101.06-1.06L11.06 10l1.72-1.72a.75.75 0 00-1.06-1.06L10 8.94 8.28 7.22z","clip-rule":"evenodd"}})]))}}},502:function(e,t,n){"use strict";n.r(t);var r=n(494),o=n(490),l={props:{query:{key:"query",required:!0,type:null}},setup:function(e,t){var n=e.query;return{isLoading:n.isLoading,isError:n.isError,error:n.error,data:n.data}}};l.components=Object.assign({LoadingSpinner:o.a,GenericError:r.a},l.components);var c=l,d=n(55),f=Object(d.a)(c,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("ClientOnly",[e.isLoading?[e._t("loading",(function(){return[n("LoadingSpinner")]}))]:e.isError?[e._t("error",(function(){return[n("GenericError",{attrs:{error:e.error}})]}),null,{error:e.error})]:[e._t("success",(function(){return[n("pre",[e._v(e._s(JSON.stringify(e.data,null,2)))])]}),null,{data:e.data})]],2)],1)}),[],!1,null,null,null).exports,v=Object(d.a)(f,undefined,undefined,!1,null,null,null);t.default=v.exports},506:function(e,t,n){"use strict";var r=n(18),o=Object(r.defineComponent)({inheritAttrs:!1});o.props={activeClass:{key:"activeClass",required:!0,type:String},enterLeaveToClass:{key:"enterLeaveToClass",required:!0,type:String}},o.setup=function(e,t){return{}};var l=o,c=n(55),component=Object(c.a)(l,(function(){var e=this,t=e.$createElement;return(e._self._c||t)("Transition",e._g(e._b({attrs:{"enter-active-class":e.activeClass,"leave-active-class":e.activeClass,"enter-from-class":e.enterLeaveToClass,"enter-class":e.enterLeaveToClass,"leave-to-class":e.enterLeaveToClass}},"Transition",e.$attrs,!1),e.$listeners),[e._t("default")],2)}),[],!1,null,null,null);t.a=component.exports},510:function(e,t,n){e.exports={}},514:function(e,t,n){"use strict";var r=n(55),component=Object(r.a)({},(function(){var e=this.$createElement,t=this._self._c||e;return t("svg",{staticClass:"h-5 w-5",attrs:{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",fill:"currentColor"}},[t("path",{attrs:{"fill-rule":"evenodd",d:"M10 3a1 1 0 011 1v5h5a1 1 0 110 2h-5v5a1 1 0 11-2 0v-5H4a1 1 0 110-2h5V4a1 1 0 011-1z","clip-rule":"evenodd"}})])}),[],!1,null,null,null);t.a=component.exports},516:function(e,t,n){"use strict";n.d(t,"a",(function(){return d})),n.d(t,"b",(function(){return f}));var r=n(39),o=n(512),l=n(639),c=n(18),d=Object(c.defineComponent)({props:["render","props"],render:function(e){if(this.render instanceof Function){var t=this.render(this.props);return"object"===Object(r.a)(t)?t:e("span",{},t)}return this.render}});function f(e){var t=Object(l.a)({state:{},onStateChange:function(){},renderFallbackValue:null,mergeOptions:function(e,t){return Object(l.a)(e,t)}},e),table=Object(o.createTable)(t),n=Object(c.ref)(table.initialState);return Object(c.watchEffect)((function(){table.setOptions((function(t){var r,o=new Proxy({},{get:function(e,t){return n.value[t]}});return Object(l.a)(t,e,{state:Object(l.a)(o,null!==(r=e.state)&&void 0!==r?r:{}),onStateChange:function(t){var r;n.value=t instanceof Function?t(n.value):t,null===(r=e.onStateChange)||void 0===r||r.call(e,t)}})}))})),table}},525:function(e,t,n){"use strict";var r=n(645),o=n.n(r),l=n(646),c=n.n(l),d=n(647),f=n.n(d),v=n(606),y=n.n(v),m=n(609),h=n.n(m),x=n(582),C=n.n(x),_=n(648),w=n.n(_),O=n(548),j={view:{icon:f.a,color:"light"},edit:{icon:y.a,color:"base"},download:{icon:c.a,color:"info"},archive:{icon:o.a,color:"danger"},delete:{icon:C.a,color:"danger"},impersonate:{icon:w.a,color:"teal"},setFeatured:{icon:h.a,color:"teal"},pinProduct:{icon:O.a,color:"teal"}},S={};S.props={actions:{key:"actions",required:!0,type:Array}},S.setup=function(e,t){return{display:function(e){return j[e]}}};var k=S,P=n(55),component=Object(P.a)(k,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("section",{staticClass:"inline-flex space-x-2"},e._l(e.actions,(function(t){var r=t.id,o=t.action,l=t.isDisabled;return n("div",{key:r},[n("BaseIcon",{attrs:{type:"button",size:"small",color:e.display(r).color,disabled:l},on:{click:o}},[n("span",{staticClass:"sr-only"},[e._v(e._s(r))]),e._v(" "),n(e.display(r).icon,{tag:"Component",staticClass:"h-auto w-5"})],1)],1)})),0)}),[],!1,null,null,null);t.a=component.exports;installComponents(component,{BaseIcon:n(484).default})},538:function(e,t,n){"use strict";n(510)},539:function(e,t,n){"use strict";var r=n(506),o={setup:function(e,t){return{enter:function(element){var e=getComputedStyle(element).width;element.style.width=e,element.style.position="absolute",element.style.visibility="hidden",element.style.height="auto",requestAnimationFrame((function(){var e=getComputedStyle(element).height;element.style.width="",element.style.position="",element.style.visibility="",element.style.height="0",getComputedStyle(element).height,requestAnimationFrame((function(){element.style.height=e}))}))},afterEnter:function(element){element.style.height="auto"},leave:function(element){var e=getComputedStyle(element).height;element.style.height=e,getComputedStyle(element).height,requestAnimationFrame((function(){element.style.height="0"}))}}}};o.components=Object.assign({SimpleTransition:r.a},o.components);var l=o,c=(n(538),n(55)),component=Object(c.a)(l,(function(){var e=this,t=e.$createElement;return(e._self._c||t)("SimpleTransition",{attrs:{"active-class":"transition-height duration-500 ease-in-out overflow-hidden","enter-leave-to-class":"h-0 opacity-0"},on:{enter:e.enter,"after-enter":e.afterEnter,leave:e.leave}},[e._t("default")],2)}),[],!1,null,"1a63f784",null);t.a=component.exports},547:function(e,t,n){"use strict";function r(e){return function(t){e.value=t instanceof Function?t(e.value):t}}n.d(t,"a",(function(){return r}))},548:function(e,t,n){"use strict";var r=n(55),component=Object(r.a)({},(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("svg",{attrs:{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 25.316 24.65"}},[n("g",{attrs:{id:"_29","data-name":"29",transform:"translate(0.707 0.592)"}},[n("path",{attrs:{id:"Path_1830","data-name":"Path 1830",d:"M898.541,344.893l-6.5,0,12.4,12.431.618-6.2,5.636-5.616a1.158,1.158,0,0,0,.037-1.574l-4.884-4.88a1.058,1.058,0,0,0-1.493.079Z",transform:"translate(-887.02 -338.784)",fill:"none",stroke:"#fff","stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"1"}}),e._v(" "),n("line",{attrs:{id:"Line_80","data-name":"Line 80",y1:"11.109",x2:"11.109",transform:"translate(0 12.241)",fill:"none",stroke:"#fff","stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"1"}})])])}),[],!1,null,null,null);t.a=component.exports},549:function(e,t,n){"use strict";n(22),n(37);var r=n(501),o=n.n(r),l={props:{instance:{key:"instance",required:!0,type:null}},setup:function(e,t){return{}}};l.components=Object.assign({XSvg:o.a},l.components);var c=l,d=n(55),component=Object(d.a)(c,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"bg-gray-50"},[n("div",{staticClass:"flex flex-col space-y-1 py-2 px-3 lg:flex-row lg:items-center lg:justify-between lg:space-y-0"},[n("BaseTypography",{staticClass:"text-gray-500",attrs:{variant:"p2"}},[e._v("\n      Applied Filters\n    ")]),e._v(" "),n("div",{staticClass:"flex items-center justify-between space-y-1 lg:justify-end lg:space-x-1"},[n("div",{staticClass:"flex flex-col space-y-1 sm:flex-row sm:items-center sm:space-x-1 sm:space-y-0"},e._l(e.instance.getState().columnFilters,(function(filter){return n("ul",{key:filter.id,attrs:{role:"list"}},[n("li",{staticClass:"inline-flex items-center rounded-full bg-blue-100 py-0.5 pl-2.5 pr-1"},[n("BaseTypography",{staticClass:"text-blue-700",attrs:{variant:"subtitle2"}},[e._v("\n              "+e._s(filter.value)+"\n            ")]),e._v(" "),n("BaseIcon",{staticClass:"ml-1 flex-shrink-0",attrs:{type:"button",size:"xs"},on:{click:function(t){e.instance.getColumn(filter.id).setFilterValue(void 0)}}},[n("span",{staticClass:"sr-only"},[e._v("Remove "+e._s(filter.value)+" option")]),e._v(" "),n("XSvg",{staticClass:"h-auto w-4"})],1)],1)])})),0),e._v(" "),n("div",[n("BaseIcon",{attrs:{type:"button",size:"xs",color:"danger"},on:{click:function(t){return e.instance.resetColumnFilters()}}},[n("span",{staticClass:"sr-only"},[e._v("Clear all filters")]),e._v(" "),n("XSvg",{staticClass:"h-auto w-4"})],1)],1)])],1)])}),[],!1,null,null,null),f=component.exports;installComponents(component,{BaseTypography:n(471).default,BaseIcon:n(484).default});n(76),n(515);var v=n(643),y=n.n(v),m=n(18),h={props:{column:{key:"column",required:!0,type:null},instance:{key:"instance",required:!0,type:null}},setup:function(e,t){var n=e,r=Object(m.ref)([]),o=Object(m.computed)({get:function(){return n.column.getFilterValue()},set:function(e){return n.column.setFilterValue(e)}});return Object(m.watch)((function(){return n.instance.getFilteredRowModel().rows}),(function(e){var t=n.column.id,o=e.map((function(e){return e.original[t]}));r.value=y()(o).sort()}),{immediate:!0}),{options:r,proxy:o}}},x=h,C=Object(d.a)(x,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("select",{directives:[{name:"model",rawName:"v-model",value:e.proxy,expression:"proxy"}],staticClass:"block max-w-xs cursor-pointer rounded-md border-gray-300 py-2 pl-3 pr-10 text-sm font-normal focus:border-blue-300 focus:outline-none focus:ring focus:ring-blue-200 focus:ring-opacity-50",on:{change:function(t){var n=Array.prototype.filter.call(t.target.options,(function(e){return e.selected})).map((function(e){return"_value"in e?e._value:e.value}));e.proxy=t.target.multiple?n:n[0]}}},e._l(e.options,(function(t,r){return n("option",{key:r,domProps:{value:t}},[e._v("\n    "+e._s(t)+"\n  ")])})),0)}),[],!1,null,null,null).exports,_=n(636),w=n.n(_),O=n(1171),j={props:{value:{key:"value",required:!0,type:null}},setup:function(e,t){var n=e;return{debouncedGlobalSearch:Object(O.useDebounceFn)((function(e){var t=e.target.value;n.value.setGlobalFilter(t)}),1e3)}}};j.components=Object.assign({SearchSvg:w.a,XSvg:o.a},j.components);var S=j,k=Object(d.a)(S,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("BaseLabel",{staticClass:"flex flex-1 space-x-2"},[n("SearchSvg",{staticClass:"w-6 text-gray-500"}),e._v(" "),n("span",{staticClass:"sr-only"},[e._v("Search Table")]),e._v(" "),n("div",{staticClass:"relative w-full"},[n("input",{staticClass:"w-full rounded-md border border-gray-300 px-3 py-2 text-sm transition duration-150 ease-in-out read-only:bg-gray-200 focus:border-blue-300 focus:outline-none focus:ring focus:ring-blue-200 focus:ring-opacity-50 disabled:cursor-not-allowed",attrs:{type:"text",placeholder:"Search Table"},domProps:{value:e.value.getState().globalFilter},on:{input:function(t){return e.debouncedGlobalSearch(t)}}}),e._v(" "),n("div",{staticClass:"absolute inset-y-0 right-0 flex items-center pr-3"},[e.value.getState().globalFilter?n("BaseIcon",{attrs:{size:"xs",color:"danger",action:"secondary"},on:{click:function(t){return e.value.resetGlobalFilter()}}},[n("XSvg",{staticClass:"w-4",attrs:{"aria-hidden":"true"}})],1):e._e()],1)])],1)}),[],!1,null,null,null),P=k.exports;installComponents(k,{BaseIcon:n(484).default,BaseLabel:n(481).default});n(104);var E=n(644),T=n.n(E),F=n(586),B=n.n(F),A=n(499),R=n.n(A),L=n(531),D=n.n(L),M=(n(485),{props:{value:{key:"value",required:!0,type:null}},setup:function(e,t){var n=e;return{proxy:Object(m.computed)({get:function(){return n.value.getState().pagination.pageSize},set:function(e){return n.value.setPageSize(Number(e))}}),perPageOptions:Object(m.computed)((function(){return[{text:"10",value:10},{text:"20",value:20},{text:"30",value:30},{text:"40",value:40},{text:"50",value:50},{text:"All",value:n.value.getFilteredRowModel().rows.length}]}))}}}),$=M,I=Object(d.a)($,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("BaseLabel",{staticClass:"flex items-center space-x-2"},[n("BaseTypography",{staticClass:"whitespace-nowrap text-gray-500",attrs:{variant:"p2"}},[e._v("\n    Per page:\n  ")]),e._v(" "),n("select",{directives:[{name:"model",rawName:"v-model",value:e.proxy,expression:"proxy"}],staticClass:"block cursor-pointer rounded-md border-gray-300 py-1 pl-3 pr-10 text-sm focus:border-blue-300 focus:outline-none focus:ring focus:ring-blue-200 focus:ring-opacity-50",on:{change:function(t){var n=Array.prototype.filter.call(t.target.options,(function(e){return e.selected})).map((function(e){return"_value"in e?e._value:e.value}));e.proxy=t.target.multiple?n:n[0]}}},e._l(e.perPageOptions,(function(t){return n("option",{key:t.text,domProps:{value:t.value}},[e._v("\n      "+e._s(t.text)+"\n    ")])})),0)],1)}),[],!1,null,null,null),z=I.exports;installComponents(I,{BaseTypography:n(471).default,BaseLabel:n(481).default});var G={props:{value:{key:"value",required:!0,type:null}},setup:function(e,t){var n=e;return{paginationResultText:Object(m.computed)((function(){var e=n.value.getState().pagination,t=e.pageIndex,r=e.pageSize,o=n.value.getFilteredRowModel().rows.length,l=t*r,c=Math.min(l+r,o);return 0===n.value.getPageCount()?"Showing 0 results":"Showing ".concat(l+1," to ").concat(c," of ").concat(o," results")}))}}};G.components=Object.assign({PageSizeInput:z,DoubleChevronLeftSvg:T.a,ChevronLeftSvg:R.a,ChevronRightSvg:D.a,DoubleChevronRightSvg:B.a},G.components);var N=G,V=Object(d.a)(N,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"flex items-center justify-between py-2 px-3"},[n("PageSizeInput",{attrs:{value:e.value}}),e._v(" "),n("div",{staticClass:"flex items-center space-x-2"},[n("BaseTypography",{staticClass:"text-gray-500",attrs:{variant:"p2"}},[e._v("\n      "+e._s(e.paginationResultText)+"\n    ")]),e._v(" "),n("nav",{staticClass:"inline-flex -space-x-px"},[n("button",{staticClass:"inline-flex rounded-l-md border border-gray-300 bg-white px-2 py-1 text-sm font-medium leading-5 text-gray-600 transition duration-150 ease-in-out hover:border-transparent hover:bg-blue-500 hover:text-white focus:border-blue-300 focus:outline-none focus:ring focus:ring-blue-200 disabled:cursor-not-allowed disabled:opacity-50",attrs:{type:"button","aria-label":"Go to first page",disabled:!e.value.getCanPreviousPage()},on:{click:function(t){return e.value.setPageIndex(0)}}},[n("DoubleChevronLeftSvg",{staticClass:"w-5"}),e._v(" "),n("span",{staticClass:"sr-only"},[e._v("First")])],1),e._v(" "),n("button",{staticClass:"inline-flex border border-gray-300 bg-white px-2 py-1 text-sm font-medium leading-5 text-gray-600 transition duration-150 ease-in-out hover:border-transparent hover:bg-blue-500 hover:text-white focus:border-blue-300 focus:outline-none focus:ring focus:ring-blue-200 disabled:cursor-not-allowed disabled:opacity-50",attrs:{type:"button","aria-label":"Go to previous page",disabled:!e.value.getCanPreviousPage()},on:{click:function(t){return e.value.previousPage()}}},[n("ChevronLeftSvg",{staticClass:"w-5"}),e._v(" "),n("span",{staticClass:"sr-only"},[e._v("Previous")])],1),e._v(" "),n("button",{staticClass:"inline-flex border border-gray-300 bg-white px-2 py-1 text-sm font-medium leading-5 text-gray-600 transition duration-150 ease-in-out hover:border-transparent hover:bg-blue-500 hover:text-white focus:border-blue-300 focus:outline-none focus:ring focus:ring-blue-200 disabled:cursor-not-allowed disabled:opacity-50",attrs:{type:"button","aria-label":"Go to next page",disabled:!e.value.getCanNextPage()},on:{click:function(t){return e.value.nextPage()}}},[n("span",{staticClass:"sr-only"},[e._v("Next")]),e._v(" "),n("ChevronRightSvg",{staticClass:"w-5"})],1),e._v(" "),n("button",{staticClass:"inline-flex rounded-r-md border border-gray-300 bg-white px-2 py-1 text-sm font-medium leading-5 text-gray-600 transition duration-150 ease-in-out hover:border-transparent hover:bg-blue-500 hover:text-white focus:border-blue-300 focus:outline-none focus:ring focus:ring-blue-200 disabled:cursor-not-allowed disabled:opacity-50",attrs:{type:"button","aria-label":"Go to last page",disabled:!e.value.getCanNextPage()},on:{click:function(t){e.value.setPageIndex(e.value.getPageCount()-1)}}},[n("span",{staticClass:"sr-only"},[e._v("Last")]),e._v(" "),n("DoubleChevronRightSvg",{staticClass:"w-5"})],1)])],1)],1)}),[],!1,null,null,null),H=V.exports;installComponents(V,{BaseTypography:n(471).default});var X={};X.props={numRows:{key:"numRows",required:!0,type:Number}},X.setup=function(e,t){return{}};var Q=X,J=Object(d.a)(Q,(function(){var e=this,t=e.$createElement;return(e._self._c||t)("BaseTypography",{staticClass:"px-3 py-2 text-gray-500",attrs:{variant:"p2",component:"p"}},[e._v("\n  Rows selected: "+e._s(e.numRows)+"\n")])}),[],!1,null,null,null),Z=J.exports;installComponents(J,{BaseTypography:n(471).default});var U=n(551),K=n(525),W=n(539),Y=n(516),ee={};ee.props={table:{key:"table",required:!0,type:null},tableActions:{key:"tableActions",required:!1,type:Array}},ee.setup=function(e,t){var n=e;return{toggleSort:function(e,t){var n=t.getToggleSortingHandler();null==n||n(e)},hasCustomFilters:Object(m.computed)((function(){var e=!1;return n.table.getHeaderGroups().forEach((function(t){return t.headers.forEach((function(header){header.column.getCanFilter()&&(e=!0)}))})),e}))}},ee.components=Object.assign({PaginationDisplay:H,GlobalSearchInput:P,TableActions:K.a,TransitionExpand:W.a,RowsSelectedDisplay:Z,AppliedFiltersDisplay:f,FlexRender:Y.a,SortDirectionDisplay:U.a,ColumnFilterInput:C},ee.components);var te=ee,ne=Object(d.a)(te,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("section",{staticClass:"rounded-xl shadow ring-1 ring-black ring-opacity-5"},[n("div",{staticClass:"overflow-hidden rounded-xl bg-white"},[n("div",{staticClass:"overflow-x-auto"},[n("div",{staticClass:"inline-block min-w-full divide-y bg-gray-50 align-middle"},[n("PaginationDisplay",{attrs:{value:e.table}}),e._v(" "),n("section",{staticClass:"flex items-center space-x-3 py-2 px-3"},[n("GlobalSearchInput",{attrs:{value:e.table}}),e._v(" "),e.tableActions?n("TableActions",{attrs:{actions:e.tableActions}}):e._e()],1),e._v(" "),n("TransitionExpand",[e.table.getFilteredSelectedRowModel().rows.length?n("RowsSelectedDisplay",{attrs:{"num-rows":e.table.getFilteredSelectedRowModel().rows.length}}):e._e()],1),e._v(" "),n("TransitionExpand",[e.table.getState().columnFilters.length>0?n("AppliedFiltersDisplay",{attrs:{instance:e.table}}):e._e()],1),e._v(" "),n("table",{staticClass:"min-w-full divide-y"},[n("thead",e._l(e.table.getHeaderGroups(),(function(t){return n("tr",{key:t.id},e._l(t.headers,(function(header){return n("th",{key:header.id,staticClass:"py-2 px-3 text-left font-body text-sm font-semibold text-gray-700 antialiased",class:{"h-16":e.hasCustomFilters},attrs:{colspan:header.colSpan,scope:"col"}},[header.isPlaceholder?e._e():[header.column.getCanSort()?[n("div",{staticClass:"flex h-full flex-col space-y-1"},[n("button",{staticClass:"flex items-center space-x-1",attrs:{type:"button"},on:{click:function(t){return e.toggleSort(t,header.column)}}},[n("FlexRender",{attrs:{render:header.column.columnDef.header,props:header.getContext()}}),e._v(" "),header.column.getIsSorted()?n("SortDirectionDisplay",{attrs:{value:header.column.getIsSorted()}}):e._e()],1),e._v(" "),header.column.getCanFilter()?[n("ColumnFilterInput",{attrs:{column:header.column,instance:e.table}})]:e._e()],2)]:[n("FlexRender",{attrs:{render:header.column.columnDef.header,props:header.getContext()}})]]],2)})),0)})),0),e._v(" "),e.table.getRowModel().rows.length>0?n("tbody",{staticClass:"divide-y divide-gray-100 bg-white"},e._l(e.table.getRowModel().rows,(function(t){return n("tr",{key:t.id,class:{"bg-blue-50":t.getIsSelected()}},e._l(t.getVisibleCells(),(function(r,i){return n("td",{key:r.id,staticClass:"relative p-3 text-sm text-gray-500"},[t.getIsSelected()&&0===i?n("div",{staticClass:"absolute inset-y-0 left-0 w-0.5 bg-blue-500"}):e._e(),e._v(" "),n("FlexRender",{attrs:{render:r.column.columnDef.cell,props:r.getContext()}})],1)})),0)})),0):n("tbody",{staticClass:"bg-white"},[n("tr",[n("td",{staticClass:"py-2 px-3 text-center",attrs:{scope:"row",colspan:"100"}},[n("BaseTypography",{staticClass:"w-full text-gray-500",attrs:{variant:"p2",component:"p"}},[e._v("\n                  No data to display\n                ")])],1)])]),e._v(" "),n("tfoot",[n("tr",[n("th",{staticClass:"py-2 px-3 text-center text-gray-500",attrs:{scope:"row",colspan:"100"}},[0!==e.table.getPageCount()?[n("BaseTypography",{attrs:{variant:"p2"}},[e._v("\n                    Page "+e._s(e.table.getState().pagination.pageIndex+1)+" of\n                    "+e._s(e.table.getPageCount())+"\n                  ")])]:[n("BaseTypography",{attrs:{variant:"p2"}},[e._v("\n                    Page "+e._s(e.table.getState().pagination.pageIndex)+" of\n                    "+e._s(e.table.getPageCount())+"\n                  ")])]],2)])])])],1)])])])}),[],!1,null,null,null);t.a=ne.exports;installComponents(ne,{BaseTypography:n(471).default})},551:function(e,t,n){"use strict";var r=n(608),o=n.n(r),l=n(635),c=n.n(l),d={props:{value:{key:"value",required:!0,type:null}},setup:function(e,t){return{}}};d.components=Object.assign({ChevronUpSvg:c.a,ChevronDownSvg:o.a},d.components);var f=d,v=n(55),component=Object(v.a)(f,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"flex place-items-center"},["asc"===e.value?[n("ChevronUpSvg",{staticClass:"w-4 text-gray-700"})]:"desc"===e.value?[n("ChevronDownSvg",{staticClass:"w-4 text-gray-700"})]:e._e()],2)}),[],!1,null,null,null);t.a=component.exports},562:function(e,t,n){"use strict";n.d(t,"a",(function(){return f}));var r=n(637),o=n(512),l=n(18),c=n(547),d=n(516);function f(e,t){var n=Object(l.shallowRef)([]),f=Object(l.shallowRef)({pageIndex:0,pageSize:10}),v=Object(l.shallowRef)("");return Object(d.b)({get data(){return e.value},columns:t,state:{get sorting(){return n.value},get pagination(){return f.value},get globalFilter(){return v.value}},onSortingChange:Object(c.a)(n),onPaginationChange:Object(c.a)(f),onGlobalFilterChange:Object(c.a)(v),globalFilterFn:function(e,t,n,o){var l=Object(r.rankItem)(e.getValue(t),n,{threshold:r.rankings.MATCHES});return o(l),l.passed},getCoreRowModel:Object(o.getCoreRowModel)(),getSortedRowModel:Object(o.getSortedRowModel)(),getPaginationRowModel:Object(o.getPaginationRowModel)(),getFilteredRowModel:Object(o.getFilteredRowModel)()})}},605:function(e,t,n){"use strict";n.r(t);var r=n(55),component=Object(r.a)({},(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("main",{staticClass:"space-y-6"},[n("ClientOnly",[n("div",{staticClass:"flex flex-col space-y-4 md:flex-row md:items-center md:justify-between md:space-y-0"},[n("div",{staticClass:"flex flex-col space-y-4 sm:flex-row sm:items-center sm:space-y-0 sm:space-x-4"},[e._t("backButton"),e._v(" "),n("div",{staticClass:"flex flex-col"},[n("BaseTypography",{staticClass:"uppercase text-gray-500",attrs:{variant:"overline"}},[e._t("overline")],2),e._v(" "),n("BaseTypography",{attrs:{variant:"h5",component:"h2"}},[e._t("title")],2)],1)],2),e._v(" "),e._t("button")],2)]),e._v(" "),e._t("table")],2)}),[],!1,null,null,null);t.default=component.exports;installComponents(component,{BaseTypography:n(471).default})}}]);