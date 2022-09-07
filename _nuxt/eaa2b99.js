(window.webpackJsonp=window.webpackJsonp||[]).push([[33,57,64,65,71,72],{1490:function(e,t,r){"use strict";r(76),r(41);var n=r(546),o=r(555),c=r(18),l=r(474),d={};d.props={value:{key:"value",required:!1,type:null},companies:{key:"companies",required:!0,type:Array},providerOptions:{key:"providerOptions",required:!0,type:Array}},d.setup=function(e,t){var r=e,n=t.emit,d=Object(l.b)(r,n),f=Object(c.computed)((function(){return r.companies.map((function(e){return{accountId:e.id}}))}));return{proxy:d,schema:Object(c.computed)((function(){return[{name:"provider",label:"Provider",component:{is:o.a,attrs:{required:!0,options:r.providerOptions.map((function(e){return{text:e.data.name,value:e}}))}}},{name:"consumer",label:"Consumer",component:{is:o.a,attrs:{required:!0,options:f.value.map((function(e){return{text:e.accountId,value:e}}))}}}]}))}},d.components=Object.assign({DynamicForm:n.a},d.components);var f=d,m=r(55),component=Object(m.a)(f,(function(){var e=this,t=e.$createElement;return(e._self._c||t)("DynamicForm",{attrs:{schema:e.schema},model:{value:e.proxy,callback:function(t){e.proxy=t},expression:"proxy"}})}),[],!1,null,null,null);t.a=component.exports},466:function(e,t){e.exports=function(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e},e.exports.__esModule=!0,e.exports.default=e.exports},467:function(e,t,r){var n=r(484);e.exports=function(source,e){if(null==source)return{};var t,i,r=n(source,e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(source);for(i=0;i<o.length;i++)t=o[i],e.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(source,t)&&(r[t]=source[t])}return r},e.exports.__esModule=!0,e.exports.default=e.exports},471:function(e,t,r){"use strict";r.r(t);var n=r(18),o=Object(n.defineComponent)({inheritAttrs:!1});o.props={variant:{key:"variant",required:!0,type:null},component:{key:"component",required:!1,type:null,default:"span"}},o.setup=function(e,t){var r="antialiased",o={h1:"".concat(r," font-display text-4xl font-semibold leading-snug tracking-wide sm:text-5xl md:text-6xl"),h2:"".concat(r," font-display text-3xl font-semibold leading-9 tracking-normal sm:text-5xl sm:leading-10"),h3:"".concat(r," font-display text-3xl font-medium leading-8 tracking-normal sm:text-4xl sm:leading-10"),h4:"".concat(r," font-display text-2xl font-medium leading-8 tracking-wide sm:text-3xl sm:leading-9"),h5:"".concat(r," font-display text-2xl font-medium leading-6 tracking-normal"),h6:"".concat(r," font-display text-xl font-semibold leading-7 tracking-wide"),p1:"".concat(r," font-body text-base font-normal leading-7 tracking-wide"),p2:"".concat(r," font-body text-sm font-normal leading-6 tracking-normal"),subtitle1:"".concat(r," font-body text-lg font-normal leading-6 tracking-wide sm:text-xl"),subtitle2:"".concat(r," font-body text-xs font-medium leading-5 tracking-wide"),subtitle3:"".concat(r," font-display text-lg font-medium leading-5 tracking-wide"),overline:"".concat(r," font-display text-xs font-medium tracking-widest"),button:"".concat(r," font-body text-xs font-medium tracking-wider sm:text-sm xl:tracking-wide")},c=e;return{displayTypeClass:Object(n.computed)((function(){return o[c.variant]}))}};var c=o,l=r(55),component=Object(l.a)(c,(function(){var e=this,t=e.$createElement;return(e._self._c||t)(e.component,e._g(e._b({tag:"Component",class:e.displayTypeClass},"Component",e.$attrs,!1),e.$listeners),[e._t("default")],2)}),[],!1,null,null,null);t.default=component.exports},474:function(e,t,r){"use strict";r.d(t,"b",(function(){return y})),r.d(t,"c",(function(){return x})),r.d(t,"a",(function(){return O}));r(45),r(36),r(44),r(22),r(56),r(37),r(57);var n=r(38),o=r(105),c=r(26),l=(r(202),r(18));function d(object,e){var t=Object.keys(object);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(object);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(object,e).enumerable}))),t.push.apply(t,r)}return t}function f(e){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?d(Object(source),!0).forEach((function(t){Object(c.a)(e,t,source[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(source)):d(Object(source)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(source,t))}))}return e}var m=!0,v={prop:"value",event:"input"};function y(e,t){var r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:v,n=r.prop,o=r.event;return Object(l.computed)({get:function(){return e[n]},set:function(e){t(o,e)}})}function x(e,t){var r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:v,n=r.prop,o=r.event;return Object(l.computed)((function(){var r={},c=e[n]||{};return new Proxy(c,{get:function(e,t){return e[t]},set:function(e,n,c){return r[n]=c,t(o,f(f({},e),r)),m}})}))}function O(e,t){var r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:v,c=r.prop,d=r.event;return Object(l.computed)((function(){var r={},l=e[c]||[];return new Proxy(l,{get:function(e,t){return e[t]},set:function(e,c,l){if(e[c]===l)return m;var f=Object(o.a)(e);r[c]=l;for(var v=0,y=Object.entries(r);v<y.length;v++){var x=Object(n.a)(y[v],2),O=x[0],h=x[1];f[O]=h}return t(d,f),m}})}))}},479:function(e,t,r){"use strict";r.d(t,"b",(function(){return f})),r.d(t,"c",(function(){return m}));var n=r(26),o=(r(85),r(46),r(106),r(45),r(36),r(44),r(22),r(56),r(37),r(57),r(66)),c=r(18);function l(object,e){var t=Object.keys(object);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(object);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(object,e).enumerable}))),t.push.apply(t,r)}return t}function d(e){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?l(Object(source),!0).forEach((function(t){Object(n.a)(e,t,source[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(source)):l(Object(source)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(source,t))}))}return e}function f(e){var t=Object(o.g)();return Object(c.computed)((function(){var r=t.value.params[e];if(!r)throw new Error("Missing param: ".concat(e));return r}))}function m(e,t){var r,l=Object(o.g)(),f=Object(o.h)();return Object(c.computed)({get:function(){return l.value.query[e]||t},set:function(t){clearTimeout(r),r=setTimeout((function(){f.replace({query:d(d({},l.value.query),{},Object(n.a)({},e,t))})}),300)}})}r.d(t,"a",(function(){return o.g})),r.d(t,"d",(function(){return o.h}))},481:function(e,t,r){"use strict";r.r(t);var n=r(18),o=Object(n.defineComponent)({inheritAttrs:!1}),c=r(55),component=Object(c.a)(o,(function(){var e=this,t=e.$createElement;return(e._self._c||t)("label",e._g(e._b({staticClass:"block font-body text-sm font-medium leading-5 tracking-wide text-gray-600 antialiased",attrs:{role:"label"}},"label",e.$attrs,!1),e.$listeners),[e._t("default")],2)}),[],!1,null,null,null);t.default=component.exports},484:function(e,t){e.exports=function(source,e){if(null==source)return{};var t,i,r={},n=Object.keys(source);for(i=0;i<n.length;i++)t=n[i],e.indexOf(t)>=0||(r[t]=source[t]);return r},e.exports.__esModule=!0,e.exports.default=e.exports},488:function(e,t,r){"use strict";r(22),r(122),r(104);var n=r(18),o={props:{definition:{key:"definition",required:!0,type:null}},setup:function(e,t){var r=e,o=Object(n.computed)((function(){return r.definition.icon[0]})),c=Object(n.computed)((function(){return r.definition.icon[1]}));return{svgPathData:Object(n.computed)((function(){return r.definition.icon[4].toString()})),viewBox:Object(n.computed)((function(){return"0 0 ".concat(o.value," ").concat(c.value)}))}}},c=o,l=r(55),component=Object(l.a)(c,(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("svg",{attrs:{xmlns:"http://www.w3.org/2000/svg",viewBox:e.viewBox,"aria-hidden":"true",focusable:"false",role:"img"}},[r("path",{attrs:{fill:"currentColor",d:e.svgPathData}})])}),[],!1,null,null,null);t.a=component.exports},489:function(e,t,r){"use strict";var n=r(488),o=r(493),c={setup:function(e,t){return{definition:o.definition}}};c.components=Object.assign({FontAwesomeSvg:n.a},c.components);var l=c,d=r(55),component=Object(d.a)(l,(function(){var e=this,t=e.$createElement;return(e._self._c||t)("FontAwesomeSvg",{staticClass:"h-5 w-5 animate-spin",attrs:{definition:e.definition}})}),[],!1,null,null,null);t.a=component.exports},490:function(e,t,r){"use strict";r.r(t);var n=r(55),component=Object(n.a)({},(function(){var e=this,t=e.$createElement;return(e._self._c||t)("div",{staticClass:"rounded-xl bg-white shadow"},[e._t("default")],2)}),[],!1,null,null,null);t.default=component.exports},491:function(e,t,r){"use strict";var n=r(495),o=r.n(n),c={setup:function(e,t){return{}}};c.components=Object.assign({XCircleSvg:o.a},c.components);var l=c,d=r(55),component=Object(d.a)(l,(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"rounded-md bg-red-50 p-4 shadow",attrs:{role:"alert"}},[r("div",{staticClass:"flex space-x-3"},[r("div",{staticClass:"flex-shrink-0"},[r("XCircleSvg",{staticClass:"h-5 w-5 text-red-500"})],1),e._v(" "),r("div",{staticClass:"space-y-2"},[r("h3",{staticClass:"text-sm font-medium leading-5 text-red-800"},[e._t("title")],2),e._v(" "),r("div",{staticClass:"text-sm leading-5 text-red-700"},[e._t("message")],2)])])])}),[],!1,null,null,null);t.a=component.exports},493:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n="spinner",o=[],c="f110",l="M304 48C304 74.51 282.5 96 256 96C229.5 96 208 74.51 208 48C208 21.49 229.5 0 256 0C282.5 0 304 21.49 304 48zM304 464C304 490.5 282.5 512 256 512C229.5 512 208 490.5 208 464C208 437.5 229.5 416 256 416C282.5 416 304 437.5 304 464zM0 256C0 229.5 21.49 208 48 208C74.51 208 96 229.5 96 256C96 282.5 74.51 304 48 304C21.49 304 0 282.5 0 256zM512 256C512 282.5 490.5 304 464 304C437.5 304 416 282.5 416 256C416 229.5 437.5 208 464 208C490.5 208 512 229.5 512 256zM74.98 437C56.23 418.3 56.23 387.9 74.98 369.1C93.73 350.4 124.1 350.4 142.9 369.1C161.6 387.9 161.6 418.3 142.9 437C124.1 455.8 93.73 455.8 74.98 437V437zM142.9 142.9C124.1 161.6 93.73 161.6 74.98 142.9C56.24 124.1 56.24 93.73 74.98 74.98C93.73 56.23 124.1 56.23 142.9 74.98C161.6 93.73 161.6 124.1 142.9 142.9zM369.1 369.1C387.9 350.4 418.3 350.4 437 369.1C455.8 387.9 455.8 418.3 437 437C418.3 455.8 387.9 455.8 369.1 437C350.4 418.3 350.4 387.9 369.1 369.1V369.1z";t.definition={prefix:"fas",iconName:n,icon:[512,512,o,c,l]},t.faSpinner=t.definition,t.prefix="fas",t.iconName=n,t.width=512,t.height=512,t.ligatures=o,t.unicode=c,t.svgPathData=l,t.aliases=o},494:function(e,t,r){"use strict";var n=r(491),o=r(18);r(41);var c={props:{error:{key:"error",required:!0,type:null}}};c.setup=function(e,t){var r=e;return{alert:Object(o.computed)((function(){return"string"==typeof(e=r.error)?{title:"Error",message:e}:e instanceof Error||e instanceof Object&&"name"in e&&"message"in e?{title:e.name,message:e.message}:{title:"Error",message:String(e)};var e}))}},c.components=Object.assign({AlertError:n.a},c.components);var l=c,d=r(55),component=Object(d.a)(l,(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("section",[r("AlertError",{scopedSlots:e._u([{key:"title",fn:function(){return[e._v("\n      "+e._s(e.alert.title)+"\n    ")]},proxy:!0},{key:"message",fn:function(){return[e._v("\n      "+e._s(e.alert.message)+"\n    ")]},proxy:!0}])})],1)}),[],!1,null,null,null);t.a=component.exports},495:function(e,t,r){r(45),r(36),r(44),r(22),r(56),r(37),r(57);var n=r(466),o=r(467),c=["class","staticClass","style","staticStyle","attrs"];function l(object,e){var t=Object.keys(object);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(object);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(object,e).enumerable}))),t.push.apply(t,r)}return t}r(104),e.exports={functional:!0,render:function(e,t){var r=t._c,data=(t._v,t.data),d=t.children,f=void 0===d?[]:d,m=data.class,v=data.staticClass,style=data.style,y=data.staticStyle,x=data.attrs,O=void 0===x?{}:x,h=o(data,c);return r("svg",function(e){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?l(Object(source),!0).forEach((function(t){n(e,t,source[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(source)):l(Object(source)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(source,t))}))}return e}({class:[m,v],style:[style,y],attrs:Object.assign({xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",fill:"currentColor","aria-hidden":"true"},O)},h),f.concat([r("path",{attrs:{"fill-rule":"evenodd",d:"M10 18a8 8 0 100-16 8 8 0 000 16zM8.28 7.22a.75.75 0 00-1.06 1.06L8.94 10l-1.72 1.72a.75.75 0 101.06 1.06L10 11.06l1.72 1.72a.75.75 0 101.06-1.06L11.06 10l1.72-1.72a.75.75 0 00-1.06-1.06L10 8.94 8.28 7.22z","clip-rule":"evenodd"}})]))}}},498:function(e,t,r){r(45),r(36),r(44),r(22),r(56),r(37),r(57);var n=r(466),o=r(467),c=["class","staticClass","style","staticStyle","attrs"];function l(object,e){var t=Object.keys(object);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(object);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(object,e).enumerable}))),t.push.apply(t,r)}return t}r(104),e.exports={functional:!0,render:function(e,t){var r=t._c,data=(t._v,t.data),d=t.children,f=void 0===d?[]:d,m=data.class,v=data.staticClass,style=data.style,y=data.staticStyle,x=data.attrs,O=void 0===x?{}:x,h=o(data,c);return r("svg",function(e){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?l(Object(source),!0).forEach((function(t){n(e,t,source[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(source)):l(Object(source)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(source,t))}))}return e}({class:[m,v],style:[style,y],attrs:Object.assign({xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",fill:"currentColor","aria-hidden":"true"},O)},h),f.concat([r("path",{attrs:{"fill-rule":"evenodd",d:"M13.79 3.23a.75.75 0 01-.02 1.06L7.832 10l5.938 5.71a.75.75 0 11-1.04 1.08l-6.5-6.25a.75.75 0 010-1.08l6.5-6.25a.75.75 0 011.06.02z","clip-rule":"evenodd"}})]))}}},513:function(e,t,r){"use strict";var n=r(55),component=Object(n.a)({},(function(){var e=this.$createElement,t=this._self._c||e;return t("svg",{staticClass:"h-5 w-5",attrs:{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",fill:"currentColor"}},[t("path",{attrs:{"fill-rule":"evenodd",d:"M10 3a1 1 0 011 1v5h5a1 1 0 110 2h-5v5a1 1 0 11-2 0v-5H4a1 1 0 110-2h5V4a1 1 0 011-1z","clip-rule":"evenodd"}})])}),[],!1,null,null,null);t.a=component.exports},514:function(e,t,r){"use strict";r.r(t);var n=r(18),o="model-value-change",c={prop:"modelValue",event:o},l=Object(n.defineComponent)({inheritAttrs:!1,model:c});l.props={modelValue:{key:"modelValue",required:!1,type:null,default:void 0},multiple:{key:"multiple",required:!1,type:null,default:!1}},l.setup=function(e,t){var r=e,c=t.emit;return{proxy:Object(n.computed)({get:function(){var e=r.modelValue;return e||(void 0!==r.multiple?[]:void 0)},set:function(e){c(o,e)}})}};var d=l,f=r(55),component=Object(f.a)(d,(function(){var e=this,t=e.$createElement;return(e._self._c||t)("select",e._g(e._b({directives:[{name:"model",rawName:"v-model",value:e.proxy,expression:"proxy"}],staticClass:"block cursor-pointer rounded-md border-gray-300 py-2 pl-3 pr-10 text-sm focus:border-blue-300 focus:outline-none focus:ring focus:ring-blue-200 focus:ring-opacity-50 sm:text-base",attrs:{multiple:e.multiple},on:{change:function(t){var r=Array.prototype.filter.call(t.target.options,(function(e){return e.selected})).map((function(e){return"_value"in e?e._value:e.value}));e.proxy=t.target.multiple?r:r[0]}}},"select",e.$attrs,!1),e.$listeners),[e._t("default")],2)}),[],!1,null,null,null);t.default=component.exports},515:function(e,t,r){"use strict";var n=r(498),o=r.n(n),c={};c.props={link:{key:"link",required:!1,type:null,default:"."},text:{key:"text",required:!1,type:String,default:"Back"}},c.setup=function(e,t){return{}},c.components=Object.assign({ChevronLeftSvg:o.a},c.components);var l=c,d=r(55),component=Object(d.a)(l,(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",[e.link?r("BaseButton",{attrs:{shape:"rectangle","display-type":"light",size:"even",to:e.link}},[r("ChevronLeftSvg",{staticClass:"-ml-1 h-auto w-5"}),e._v(" "),r("span",[e._v(e._s(e.text))])],1):r("BaseButton",{attrs:{shape:"rectangle","display-type":"light",size:"even",to:e.link,append:""}},[r("ChevronLeftSvg",{staticClass:"-ml-1 h-auto w-5"}),e._v(" "),r("span",[e._v(e._s(e.text))])],1)],1)}),[],!1,null,null,null);t.a=component.exports;installComponents(component,{BaseButton:r(306).default})},546:function(e,t,r){"use strict";var n=r(474),o=r(18),c={prop:"modelValue",event:"update:modelValue"},l=Object(o.defineComponent)({model:c});l.props={modelValue:{key:"modelValue",required:!1,type:null},component:{key:"component",required:!0,type:null}},l.setup=function(e,t){var r=e,o=t.emit;return{proxy:Object(n.b)(r,o,c)}};var d=l,f=r(55),m=Object(f.a)(d,(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",["input"===e.component.is?["checkbox"===e.component.attrs.type?r("input",e._b({directives:[{name:"model",rawName:"v-model",value:e.proxy,expression:"proxy"}],attrs:{type:"checkbox"},domProps:{checked:Array.isArray(e.proxy)?e._i(e.proxy,null)>-1:e.proxy},on:{change:function(t){var r=e.proxy,n=t.target,o=!!n.checked;if(Array.isArray(r)){var c=e._i(r,null);n.checked?c<0&&(e.proxy=r.concat([null])):c>-1&&(e.proxy=r.slice(0,c).concat(r.slice(c+1)))}else e.proxy=o}}},"input",e.component.attrs,!1)):"radio"===e.component.attrs.type?r("input",e._b({directives:[{name:"model",rawName:"v-model",value:e.proxy,expression:"proxy"}],attrs:{type:"radio"},domProps:{checked:e._q(e.proxy,null)},on:{change:function(t){e.proxy=null}}},"input",e.component.attrs,!1)):r("input",e._b({directives:[{name:"model",rawName:"v-model",value:e.proxy,expression:"proxy"}],attrs:{type:e.component.attrs.type},domProps:{value:e.proxy},on:{input:function(t){t.target.composing||(e.proxy=t.target.value)}}},"input",e.component.attrs,!1))]:"select"===e.component.is?[r("select",e._b({directives:[{name:"model",rawName:"v-model",value:e.proxy,expression:"proxy"}],on:{change:function(t){var r=Array.prototype.filter.call(t.target.options,(function(e){return e.selected})).map((function(e){return"_value"in e?e._value:e.value}));e.proxy=t.target.multiple?r:r[0]}}},"select",e.component.attrs,!1))]:"textarea"===e.component.is?[r("textarea",e._b({directives:[{name:"model",rawName:"v-model",value:e.proxy,expression:"proxy"}],domProps:{value:e.proxy},on:{input:function(t){t.target.composing||(e.proxy=t.target.value)}}},"textarea",e.component.attrs,!1))]:[r(e.component.is,e._b({tag:"Component",model:{value:e.proxy,callback:function(t){e.proxy=t},expression:"proxy"}},"Component",e.component.attrs,!1))]],2)}),[],!1,null,null,null).exports,v={props:{value:{key:"value",required:!1,type:null},schema:{key:"schema",required:!0,type:null}},setup:function(e,t){var r=e,c=t.emit;return{proxy:Object(n.b)(r,c),isRequired:Object(o.computed)((function(){var e,t;return null===(t=null===(e=r.schema.component)||void 0===e?void 0:e.attrs)||void 0===t?void 0:t.required}))}}};v.components=Object.assign({DynamicComponent:m},v.components);var y=v,x=Object(f.a)(y,(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("BaseLabel",{staticClass:"grid grid-cols-1 gap-1 sm:grid-cols-3 sm:items-center sm:gap-4"},[r("span",[e._v("\n    "+e._s(e.schema.label)+"\n    "),e.isRequired?r("span",{staticClass:"text-red-700"},[e._v("*")]):e._e()]),e._v(" "),r("DynamicComponent",{staticClass:"flex flex-col sm:col-span-2",attrs:{component:e.schema.component},model:{value:e.proxy,callback:function(t){e.proxy=t},expression:"proxy"}})],1)}),[],!1,null,null,null),O=x.exports;installComponents(x,{BaseLabel:r(481).default});var h={props:{value:{key:"value",required:!1,type:null},schema:{key:"schema",required:!0,type:null}},setup:function(e,t){var r=e,o=t.emit;return{proxy:Object(n.c)(r,o)}}};h.components=Object.assign({DynamicFormInputGroup:O},h.components);var j=h,w=Object(f.a)(j,(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"flex flex-col space-y-6 sm:space-y-0 sm:divide-y"},e._l(e.schema,(function(t){return r("div",{key:t.name,staticClass:"min-w-0 p-4"},[r("DynamicFormInputGroup",{staticClass:"h-full",attrs:{schema:t},model:{value:e.proxy[t.name],callback:function(r){e.$set(e.proxy,t.name,r)},expression:"proxy[field.name]"}})],1)})),0)}),[],!1,null,null,null);t.a=w.exports},555:function(e,t,r){"use strict";var n=r(474),o=r(18),c={prop:"sModelValue",event:"s-model-value-change"},l=Object(o.defineComponent)({inheritAttrs:!1,model:c});l.props={sModelValue:{key:"sModelValue",required:!1,type:null},options:{key:"options",required:!0,type:Array}},l.setup=function(e,t){var r=e,o=t.emit;return{proxy:Object(n.b)(r,o,c)}};var d=l,f=r(55),component=Object(f.a)(d,(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("BaseSelect",e._g(e._b({model:{value:e.proxy,callback:function(t){e.proxy=t},expression:"proxy"}},"BaseSelect",e.$attrs,!1),e.$listeners),e._l(e.options,(function(option){return r("option",{key:option.key||option.text||option.value,domProps:{value:option.value}},[e._v("\n    "+e._s(option.text||option.value)+"\n  ")])})),0)}),[],!1,null,null,null);t.a=component.exports;installComponents(component,{BaseSelect:r(514).default})},600:function(e,t,r){r(45),r(36),r(44),r(22),r(56),r(37),r(57);var n=r(466),o=r(467),c=["class","staticClass","style","staticStyle","attrs"];function l(object,e){var t=Object.keys(object);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(object);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(object,e).enumerable}))),t.push.apply(t,r)}return t}r(104),e.exports={functional:!0,render:function(e,t){var r=t._c,data=(t._v,t.data),d=t.children,f=void 0===d?[]:d,m=data.class,v=data.staticClass,style=data.style,y=data.staticStyle,x=data.attrs,O=void 0===x?{}:x,h=o(data,c);return r("svg",function(e){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?l(Object(source),!0).forEach((function(t){n(e,t,source[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(source)):l(Object(source)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(source,t))}))}return e}({class:[m,v],style:[style,y],attrs:Object.assign({xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",fill:"currentColor","aria-hidden":"true"},O)},h),f.concat([r("path",{attrs:{d:"M13.75 7h-3v5.296l1.943-2.048a.75.75 0 011.114 1.004l-3.25 3.5a.75.75 0 01-1.114 0l-3.25-3.5a.75.75 0 111.114-1.004l1.943 2.048V7h1.5V1.75a.75.75 0 00-1.5 0V7h-3A2.25 2.25 0 004 9.25v7.5A2.25 2.25 0 006.25 19h7.5A2.25 2.25 0 0016 16.75v-7.5A2.25 2.25 0 0013.75 7z"}})]))}}},603:function(e,t,r){r(45),r(36),r(44),r(22),r(56),r(37),r(57);var n=r(466),o=r(467),c=["class","staticClass","style","staticStyle","attrs"];function l(object,e){var t=Object.keys(object);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(object);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(object,e).enumerable}))),t.push.apply(t,r)}return t}r(104),e.exports={functional:!0,render:function(e,t){var r=t._c,data=(t._v,t.data),d=t.children,f=void 0===d?[]:d,m=data.class,v=data.staticClass,style=data.style,y=data.staticStyle,x=data.attrs,O=void 0===x?{}:x,h=o(data,c);return r("svg",function(e){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?l(Object(source),!0).forEach((function(t){n(e,t,source[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(source)):l(Object(source)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(source,t))}))}return e}({class:[m,v],style:[style,y],attrs:Object.assign({xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",fill:"currentColor","aria-hidden":"true"},O)},h),f.concat([r("path",{attrs:{"fill-rule":"evenodd",d:"M8.75 1A2.75 2.75 0 006 3.75v.443c-.795.077-1.584.176-2.365.298a.75.75 0 10.23 1.482l.149-.022.841 10.518A2.75 2.75 0 007.596 19h4.807a2.75 2.75 0 002.742-2.53l.841-10.52.149.023a.75.75 0 00.23-1.482A41.03 41.03 0 0014 4.193V3.75A2.75 2.75 0 0011.25 1h-2.5zM10 4c.84 0 1.673.025 2.5.075V3.75c0-.69-.56-1.25-1.25-1.25h-2.5c-.69 0-1.25.56-1.25 1.25v.325C8.327 4.025 9.16 4 10 4zM8.58 7.72a.75.75 0 00-1.5.06l.3 7.5a.75.75 0 101.5-.06l-.3-7.5zm4.34.06a.75.75 0 10-1.5-.06l-.3 7.5a.75.75 0 101.5.06l.3-7.5z","clip-rule":"evenodd"}})]))}}},691:function(e,t,r){"use strict";var n=r(600),o=r.n(n),c=r(603),l=r.n(c),d=r(513),f=r(18),m={};m.props={action:{key:"action",required:!0,type:null},priority:{key:"priority",required:!1,type:null,default:"primary"},isValidForm:{key:"isValidForm",required:!1,type:Boolean,default:!0}},m.setup=function(e,t){var r={create:{icon:d.a,text:"Create",color:"base"},update:{icon:o.a,text:"Update",color:"base"},delete:{icon:l.a,text:"Delete",color:"danger"}},n=e,c=Object(f.computed)((function(){return r[n.action]}));return{props:n,display:c}};var v=m,y=r(55),component=Object(y.a)(v,(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"p-4"},[r("BaseButton",{staticClass:"w-full space-x-1 lg:w-auto",attrs:{action:e.props.priority,"display-type":e.display.color,disabled:!e.isValidForm}},[r(e.display.icon,{tag:"Component",staticClass:"-ml-1 w-4 lg:w-5"}),e._v(" "),r("span",[e._v(e._s(e.display.text))])],1)],1)}),[],!1,null,null,null);t.a=component.exports;installComponents(component,{BaseButton:r(306).default})},725:function(e,t,r){"use strict";r.r(t);r(22),r(76);var n=r(494),o=r(489),c=r(18),l={};l.props={queries:{key:"queries",required:!0,type:Array}},l.setup=function(e,t){var r=e;return{isLoading:Object(c.computed)((function(){return r.queries.some((function(e){return e.isLoading.value}))})),isError:Object(c.computed)((function(){return r.queries.some((function(e){return e.isError.value}))})),errors:Object(c.computed)((function(){return r.queries.map((function(e){return e.error.value}))})),merged:Object(c.computed)((function(){return r.queries.map((function(e){return e.data.value}))}))}},l.components=Object.assign({LoadingSpinner:o.a,GenericError:n.a},l.components);var d=l,f=r(55),component=Object(f.a)(d,(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",[e.isLoading?[e._t("loading",(function(){return[r("LoadingSpinner")]}))]:e.isError?[e._t("error",(function(){return e._l(e.errors,(function(e,t){return r("div",{key:t},[r("GenericError",{attrs:{error:e}})],1)}))}),null,e.errors)]:[e._t("success",(function(){return[r("pre",[e._v(e._s(e.data))]),e._v(" "),e._l(e.merged,(function(data,t){return r("div",{key:t},[r("pre",[e._v(e._s(JSON.stringify(data,null,2)))])])}))]}),null,e.merged)]],2)}),[],!1,null,null,null);t.default=component.exports}}]);