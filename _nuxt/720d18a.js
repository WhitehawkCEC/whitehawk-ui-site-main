(window.webpackJsonp=window.webpackJsonp||[]).push([[234,60,64,65,71],{1173:function(e,t,r){"use strict";r(485);var n=r(18),o={};o.props={current:{key:"current",required:!0,type:Number},max:{key:"max",required:!0,type:Number}},o.setup=function(e,t){var r=e;return{percentage:Object(n.computed)((function(){return 100*r.current/(r.max-1)}))}};var c=o,l=r(55),component=Object(l.a)(c,(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",[r("div",{staticClass:"h-full bg-prime-green transition-all duration-500",style:"width:"+e.percentage+"%"})])}),[],!1,null,null,null);t.a=component.exports},2165:function(e,t,r){"use strict";r.r(t);r(69),r(41),r(70),r(48),r(46),r(36),r(67),r(68),r(47),r(45),r(56),r(37),r(57);var n=r(26),o=r(11),c=(r(53),r(44),r(22),r(1173)),l=r(18),f=r(531),d=r(479);function v(object,e){var t=Object.keys(object);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(object);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(object,e).enumerable}))),t.push.apply(t,r)}return t}function m(e){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?v(Object(source),!0).forEach((function(t){Object(n.a)(e,t,source[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(source)):v(Object(source)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(source,t))}))}return e}function y(e,t){var r="undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(!r){if(Array.isArray(e)||(r=function(e,t){if(!e)return;if("string"==typeof e)return O(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);"Object"===r&&e.constructor&&(r=e.constructor.name);if("Map"===r||"Set"===r)return Array.from(e);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return O(e,t)}(e))||t&&e&&"number"==typeof e.length){r&&(e=r);var i=0,n=function(){};return{s:n,n:function(){return i>=e.length?{done:!0}:{done:!1,value:e[i++]}},e:function(e){throw e},f:n}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var o,c=!0,l=!1;return{s:function(){r=r.call(e)},n:function(){var e=r.next();return c=e.done,e},e:function(e){l=!0,o=e},f:function(){try{c||null==r.return||r.return()}finally{if(l)throw o}}}}function O(e,t){(null==t||t>e.length)&&(t=e.length);for(var i=0,r=new Array(t);i<t;i++)r[i]=e[i];return r}var h={};h.setup=function(e,t){var r=Object(d.b)("id"),n=Object(d.d)(),c=Object(l.computed)((function(){return n.app.$route.hash})),v=[{name:"All",href:"#all",get current(){return this.href===c.value||!c.value}},{name:"In Progress",href:"#in-progress",get current(){return this.href===c.value}},{name:"Completed",href:"#completed",get current(){return this.href===c.value}},{name:"Recommended",href:"#recommended",get current(){return this.href===c.value}}],O=f.m.list(r.value),h=Object(l.computed)((function(){var e,t,r=[],n=null===(t=null===(e=null==O?void 0:O.data)||void 0===e?void 0:e.value)||void 0===t?void 0:t.taken;if(n){var o,c=y(n);try{for(c.s();!(o=c.n()).done;){var l=o.value;r.push(l)}}catch(e){c.e(e)}finally{c.f()}}return r})),j=f.n.list(),x=Object(l.computed)((function(){var e,t;return null===(t=null===(e=null==j?void 0:j.data)||void 0===e?void 0:e.value)||void 0===t?void 0:t.questionnaire})),_=[O,j],C=Object(l.computed)((function(){var e=x.value,t=[];if(e){var r,n=y(e);try{var o=function(){var q=r.value;h.value.filter((function(e){var r,n;(null===(r=e.questionnaireId)||void 0===r?void 0:r.value)===(null===(n=q.id)||void 0===n?void 0:n.value)&&t.push(q)}))};for(n.s();!(r=n.n()).done;)o()}catch(e){n.e(e)}finally{n.f()}}return t})),w=Object(l.ref)({value:null}),E=f.m.create();function P(){return(P=Object(o.a)(regeneratorRuntime.mark((function e(p){var t,r,o,c,l;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=m({},p),e.next=3,E.mutateAsync(r);case 3:o=e.sent,(c=o.response)&&(l=null===(t=c.taken)||void 0===t?void 0:t.id,n.push("custom-questionnaire/".concat(null==l?void 0:l.value)));case 6:case"end":return e.stop()}}),e)})))).apply(this,arguments)}return{tabs:v,QuestionnairesData:x,queries:_,QuestionnairesInProgress:C,toQuestionnaire:function(e){var t,o,c,l=y(h.value);try{for(l.s();!(c=l.n()).done;){var f=c.value;if((null===(t=f.questionnaireId)||void 0===t?void 0:t.value)===e.value)return void n.push("custom-questionnaire/".concat(null===(o=f.id)||void 0===o?void 0:o.value))}}catch(e){l.e(e)}finally{l.f()}w.value.value&&function(e){P.apply(this,arguments)}({userId:r.value,questionnaireId:{value:e.value}})}}},h.components=Object.assign({ProgressBar:c.a},h.components);var j=h,x=r(55),component=Object(x.a)(j,(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",[r("H2",{staticClass:"text-lg font-medium leading-6 text-gray-900"},[e._v("Questionnaires")]),e._v(" "),r("div",[r("div",{staticClass:"sm:hidden"},[r("label",{staticClass:"sr-only",attrs:{for:"tabs"}},[e._v("Select a tab")]),e._v(" "),r("select",{staticClass:"block w-full rounded-md border-gray-300 py-2 pl-3 pr-10 text-base focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm",attrs:{id:"tabs",name:"tabs"}},e._l(e.tabs,(function(t){return r("option",{key:t.name,domProps:{selected:t.current}},[e._v("\n          "+e._s(t.name)+"\n        ")])})),0)]),e._v(" "),r("div",{staticClass:"hidden sm:block"},[r("div",{staticClass:"border-b border-gray-200"},[r("nav",{staticClass:"-mb-px flex space-x-8",attrs:{"aria-label":"Tabs"}},e._l(e.tabs,(function(t){return r("NuxtLink",{key:t.name,class:[t.current?"border-indigo-500 text-indigo-600":"border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700","whitespace-nowrap border-b-2 py-4 px-1 text-sm font-medium"],attrs:{to:t.href,"aria-current":t.current?"page":void 0}},[e._v("\n            "+e._s(t.name)+"\n          ")])})),1)])])]),e._v(" "),r("BaseVueQueries",{attrs:{queries:e.queries},scopedSlots:e._u([{key:"success",fn:function(){return[r("div",{staticClass:"mt-4 grid grid-cols-12 gap-4"},e._l(e.QuestionnairesData,(function(t,i){return r("BaseSimpleCard",{key:i,staticClass:"relative col-span-4 flex flex-col overflow-hidden p-5",attrs:{value:t.id}},[r("BaseP1",[e._v(e._s(t.name))]),e._v(" "),r("div",{staticClass:"mt-auto flex justify-between"},[r("BaseSubtitle2",{staticClass:"text-gray-500"},[e._v("120 Questions")]),e._v(" "),e.QuestionnairesInProgress.includes(t)?[r("div",{staticClass:"ml-auto",attrs:{to:"#","display-type":"primary-prime"},on:{click:function(r){return e.toQuestionnaire(t.id)}}},[r("p",{staticClass:"block cursor-pointer font-display text-sm font-semibold uppercase tracking-wider text-prime-indigo"},[e._v("\n                  Continue\n                ")])]),e._v(" "),r("ProgressBar",{staticClass:"absolute inset-x-0 bottom-0 h-1.5 bg-gray-200",attrs:{current:35,max:100}})]:[r("div",{staticClass:"ml-auto",attrs:{"display-type":"primary-prime"},on:{click:function(r){return e.toQuestionnaire(t.id)}}},[r("p",{staticClass:"block cursor-pointer font-display text-sm font-semibold uppercase tracking-wider text-prime-indigo"},[e._v("\n                  Begin\n                ")])])]],2)],1)})),1)]},proxy:!0}])})],1)}),[],!1,null,null,null);t.default=component.exports;installComponents(component,{BaseP1:r(658).default,BaseSubtitle2:r(831).default,BaseSimpleCard:r(490).default,BaseVueQueries:r(701).default})},466:function(e,t){e.exports=function(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e},e.exports.__esModule=!0,e.exports.default=e.exports},467:function(e,t,r){var n=r(486);e.exports=function(source,e){if(null==source)return{};var t,i,r=n(source,e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(source);for(i=0;i<o.length;i++)t=o[i],e.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(source,t)&&(r[t]=source[t])}return r},e.exports.__esModule=!0,e.exports.default=e.exports},479:function(e,t,r){"use strict";r.d(t,"b",(function(){return d})),r.d(t,"c",(function(){return v}));var n=r(26),o=(r(85),r(46),r(105),r(45),r(36),r(44),r(22),r(56),r(37),r(57),r(66)),c=r(18);function l(object,e){var t=Object.keys(object);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(object);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(object,e).enumerable}))),t.push.apply(t,r)}return t}function f(e){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?l(Object(source),!0).forEach((function(t){Object(n.a)(e,t,source[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(source)):l(Object(source)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(source,t))}))}return e}function d(e){var t=Object(o.g)();return Object(c.computed)((function(){var r=t.value.params[e];if(!r)throw new Error("Missing param: ".concat(e));return r}))}function v(e,t){var r,l=Object(o.g)(),d=Object(o.h)();return Object(c.computed)({get:function(){return l.value.query[e]||t},set:function(t){clearTimeout(r),r=setTimeout((function(){d.replace({query:f(f({},l.value.query),{},Object(n.a)({},e,t))})}),300)}})}r.d(t,"a",(function(){return o.g})),r.d(t,"d",(function(){return o.h}))},485:function(e,t,r){"use strict";var n=r(27),o=r(14),c=r(12),l=r(127),f=r(33),d=r(24),v=r(221),m=r(77),y=r(126),O=r(309),h=r(13),j=r(108).f,x=r(59).f,_=r(30).f,C=r(526),w=r(510).trim,E="Number",P=o.Number,S=P.prototype,k=o.TypeError,I=c("".slice),N=c("".charCodeAt),A=function(e){var t=O(e,"number");return"bigint"==typeof t?t:M(t)},M=function(e){var t,r,n,o,c,l,f,code,d=O(e,"number");if(y(d))throw k("Cannot convert a Symbol value to a number");if("string"==typeof d&&d.length>2)if(d=w(d),43===(t=N(d,0))||45===t){if(88===(r=N(d,2))||120===r)return NaN}else if(48===t){switch(N(d,1)){case 66:case 98:n=2,o=49;break;case 79:case 111:n=8,o=55;break;default:return+d}for(l=(c=I(d,2)).length,f=0;f<l;f++)if((code=N(c,f))<48||code>o)return NaN;return parseInt(c,n)}return+d};if(l(E,!P(" 0o1")||!P("0b1")||P("+0x1"))){for(var D,B=function(e){var t=arguments.length<1?0:P(A(e)),r=this;return m(S,r)&&h((function(){C(r)}))?v(Object(t),r,B):t},L=n?j(P):"MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,EPSILON,MAX_SAFE_INTEGER,MIN_SAFE_INTEGER,isFinite,isInteger,isNaN,isSafeInteger,parseFloat,parseInt,fromString,range".split(","),$=0;L.length>$;$++)d(P,D=L[$])&&!d(B,D)&&_(B,D,x(P,D));B.prototype=S,S.constructor=B,f(o,E,B,{constructor:!0})}},486:function(e,t){e.exports=function(source,e){if(null==source)return{};var t,i,r={},n=Object.keys(source);for(i=0;i<n.length;i++)t=n[i],e.indexOf(t)>=0||(r[t]=source[t]);return r},e.exports.__esModule=!0,e.exports.default=e.exports},488:function(e,t,r){"use strict";r(22),r(122),r(104);var n=r(18),o={props:{definition:{key:"definition",required:!0,type:null}},setup:function(e,t){var r=e,o=Object(n.computed)((function(){return r.definition.icon[0]})),c=Object(n.computed)((function(){return r.definition.icon[1]}));return{svgPathData:Object(n.computed)((function(){return r.definition.icon[4].toString()})),viewBox:Object(n.computed)((function(){return"0 0 ".concat(o.value," ").concat(c.value)}))}}},c=o,l=r(55),component=Object(l.a)(c,(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("svg",{attrs:{xmlns:"http://www.w3.org/2000/svg",viewBox:e.viewBox,"aria-hidden":"true",focusable:"false",role:"img"}},[r("path",{attrs:{fill:"currentColor",d:e.svgPathData}})])}),[],!1,null,null,null);t.a=component.exports},490:function(e,t,r){"use strict";r.r(t);var n=r(55),component=Object(n.a)({},(function(){var e=this,t=e.$createElement;return(e._self._c||t)("div",{staticClass:"rounded-xl bg-white shadow"},[e._t("default")],2)}),[],!1,null,null,null);t.default=component.exports},491:function(e,t,r){"use strict";var n=r(488),o=r(493),c={setup:function(e,t){return{definition:o.definition}}};c.components=Object.assign({FontAwesomeSvg:n.a},c.components);var l=c,f=r(55),component=Object(f.a)(l,(function(){var e=this,t=e.$createElement;return(e._self._c||t)("FontAwesomeSvg",{staticClass:"h-5 w-5 animate-spin",attrs:{definition:e.definition}})}),[],!1,null,null,null);t.a=component.exports},492:function(e,t,r){"use strict";var n=r(495),o=r.n(n),c={setup:function(e,t){return{}}};c.components=Object.assign({XCircleSvg:o.a},c.components);var l=c,f=r(55),component=Object(f.a)(l,(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"rounded-md bg-red-50 p-4 shadow",attrs:{role:"alert"}},[r("div",{staticClass:"flex space-x-3"},[r("div",{staticClass:"flex-shrink-0"},[r("XCircleSvg",{staticClass:"h-5 w-5 text-red-500"})],1),e._v(" "),r("div",{staticClass:"space-y-2"},[r("h3",{staticClass:"text-sm font-medium leading-5 text-red-800"},[e._t("title")],2),e._v(" "),r("div",{staticClass:"text-sm leading-5 text-red-700"},[e._t("message")],2)])])])}),[],!1,null,null,null);t.a=component.exports},493:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n="spinner",o=[],c="f110",l="M304 48C304 74.51 282.5 96 256 96C229.5 96 208 74.51 208 48C208 21.49 229.5 0 256 0C282.5 0 304 21.49 304 48zM304 464C304 490.5 282.5 512 256 512C229.5 512 208 490.5 208 464C208 437.5 229.5 416 256 416C282.5 416 304 437.5 304 464zM0 256C0 229.5 21.49 208 48 208C74.51 208 96 229.5 96 256C96 282.5 74.51 304 48 304C21.49 304 0 282.5 0 256zM512 256C512 282.5 490.5 304 464 304C437.5 304 416 282.5 416 256C416 229.5 437.5 208 464 208C490.5 208 512 229.5 512 256zM74.98 437C56.23 418.3 56.23 387.9 74.98 369.1C93.73 350.4 124.1 350.4 142.9 369.1C161.6 387.9 161.6 418.3 142.9 437C124.1 455.8 93.73 455.8 74.98 437V437zM142.9 142.9C124.1 161.6 93.73 161.6 74.98 142.9C56.24 124.1 56.24 93.73 74.98 74.98C93.73 56.23 124.1 56.23 142.9 74.98C161.6 93.73 161.6 124.1 142.9 142.9zM369.1 369.1C387.9 350.4 418.3 350.4 437 369.1C455.8 387.9 455.8 418.3 437 437C418.3 455.8 387.9 455.8 369.1 437C350.4 418.3 350.4 387.9 369.1 369.1V369.1z";t.definition={prefix:"fas",iconName:n,icon:[512,512,o,c,l]},t.faSpinner=t.definition,t.prefix="fas",t.iconName=n,t.width=512,t.height=512,t.ligatures=o,t.unicode=c,t.svgPathData=l,t.aliases=o},494:function(e,t,r){"use strict";var n=r(492),o=r(18);r(41);var c={props:{error:{key:"error",required:!0,type:null}}};c.setup=function(e,t){var r=e;return{alert:Object(o.computed)((function(){return"string"==typeof(e=r.error)?{title:"Error",message:e}:e instanceof Error||e instanceof Object&&"name"in e&&"message"in e?{title:e.name,message:e.message}:{title:"Error",message:String(e)};var e}))}},c.components=Object.assign({AlertError:n.a},c.components);var l=c,f=r(55),component=Object(f.a)(l,(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("section",[r("AlertError",{scopedSlots:e._u([{key:"title",fn:function(){return[e._v("\n      "+e._s(e.alert.title)+"\n    ")]},proxy:!0},{key:"message",fn:function(){return[e._v("\n      "+e._s(e.alert.message)+"\n    ")]},proxy:!0}])})],1)}),[],!1,null,null,null);t.a=component.exports},495:function(e,t,r){r(45),r(36),r(44),r(22),r(56),r(37),r(57);var n=r(466),o=r(467),c=["class","staticClass","style","staticStyle","attrs"];function l(object,e){var t=Object.keys(object);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(object);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(object,e).enumerable}))),t.push.apply(t,r)}return t}r(104),e.exports={functional:!0,render:function(e,t){var r=t._c,data=(t._v,t.data),f=t.children,d=void 0===f?[]:f,v=data.class,m=data.staticClass,style=data.style,y=data.staticStyle,O=data.attrs,h=void 0===O?{}:O,j=o(data,c);return r("svg",function(e){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?l(Object(source),!0).forEach((function(t){n(e,t,source[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(source)):l(Object(source)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(source,t))}))}return e}({class:[v,m],style:[style,y],attrs:Object.assign({xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",fill:"currentColor","aria-hidden":"true"},h)},j),d.concat([r("path",{attrs:{"fill-rule":"evenodd",d:"M10 18a8 8 0 100-16 8 8 0 000 16zM8.28 7.22a.75.75 0 00-1.06 1.06L8.94 10l-1.72 1.72a.75.75 0 101.06 1.06L10 11.06l1.72 1.72a.75.75 0 101.06-1.06L11.06 10l1.72-1.72a.75.75 0 00-1.06-1.06L10 8.94 8.28 7.22z","clip-rule":"evenodd"}})]))}}},509:function(e,t){e.exports="\t\n\v\f\r                　\u2028\u2029\ufeff"},510:function(e,t,r){var n=r(12),o=r(49),c=r(28),l=r(509),f=n("".replace),d="["+l+"]",v=RegExp("^"+d+d+"*"),m=RegExp(d+d+"*$"),y=function(e){return function(t){var r=c(o(t));return 1&e&&(r=f(r,v,"")),2&e&&(r=f(r,m,"")),r}};e.exports={start:y(1),end:y(2),trim:y(3)}},526:function(e,t,r){var n=r(12);e.exports=n(1..valueOf)},658:function(e,t,r){"use strict";r.r(t);var n=r(55),component=Object(n.a)({},(function(){var e=this,t=e.$createElement;return(e._self._c||t)("p",{staticClass:"font-body text-base font-normal leading-7 tracking-wide"},[e._t("default")],2)}),[],!1,null,null,null);t.default=component.exports},701:function(e,t,r){"use strict";r.r(t);r(22),r(76);var n=r(494),o=r(491),c=r(18),l={};l.props={queries:{key:"queries",required:!0,type:Array}},l.setup=function(e,t){var r=e;return{isLoading:Object(c.computed)((function(){return r.queries.some((function(e){return e.isLoading.value}))})),isError:Object(c.computed)((function(){return r.queries.some((function(e){return e.isError.value}))})),errors:Object(c.computed)((function(){return r.queries.map((function(e){return e.error.value}))})),merged:Object(c.computed)((function(){return r.queries.map((function(e){return e.data.value}))}))}},l.components=Object.assign({LoadingSpinner:o.a,GenericError:n.a},l.components);var f=l,d=r(55),component=Object(d.a)(f,(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",[r("ClientOnly",[e.isLoading?[e._t("loading",(function(){return[r("LoadingSpinner")]}))]:e.isError?[e._t("error",(function(){return e._l(e.errors,(function(e,t){return r("div",{key:t},[r("GenericError",{attrs:{error:e}})],1)}))}),null,e.errors)]:[e._t("success",(function(){return[r("pre",[e._v(e._s(e.data))]),e._v(" "),e._l(e.merged,(function(data,t){return r("div",{key:t},[r("pre",[e._v(e._s(JSON.stringify(data,null,2)))])])}))]}),null,e.merged)]],2)],1)}),[],!1,null,null,null);t.default=component.exports},831:function(e,t,r){"use strict";r.r(t);var n=r(55),component=Object(n.a)({},(function(){var e=this,t=e.$createElement;return(e._self._c||t)("span",{staticClass:"font-body text-xs font-medium leading-5 tracking-wide"},[e._t("default")],2)}),[],!1,null,null,null);t.default=component.exports}}]);