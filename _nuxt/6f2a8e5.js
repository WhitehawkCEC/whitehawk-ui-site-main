(window.webpackJsonp=window.webpackJsonp||[]).push([[278,53,54,55,56,59],{1272:function(e,t){basic},1600:function(e,t,r){"use strict";var n=r(1272),o=r.n(n);t.default=o.a},2184:function(e,t,r){"use strict";r.r(t);var n=r(12),o=(r(46),r(26),r(159),r(502)),c=r.n(o),l=r(539),d=r.n(l),f=r(498),v=r(833),y=r(158),m=r(20),x=r(198),O=r(711),h=r(482),j=Object(m.defineComponent)({layout:"basic"});j.setup=function(e,t){var r,o="".concat(x.f,"/main-page-pics/line-waves-md.svg"),c=Object(h.a)(),l=Object(m.ref)((null===(r=c.value.query.email)||void 0===r?void 0:r.toString())||""),d=Object(m.ref)(!1),f=Object(m.ref)(),v=Object(m.ref)(),j=Object(h.d)();function w(){return(w=Object(n.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return d.value=!0,e.prev=1,e.next=4,y.a.forgotPassword(l.value.toLocaleLowerCase("us"));case 4:f.value=e.sent,e.next=10;break;case 7:e.prev=7,e.t0=e.catch(1),v.value=e.t0;case 10:return e.prev=10,d.value=!1,e.finish(10);case 13:case"end":return e.stop()}}),e,null,[[1,7,10,13]])})))).apply(this,arguments)}return Object(m.watch)(l,(function(e){var path=c.value.path,t=e?{email:e}:void 0;j.push({path:path,query:t})})),{checkEmail:O.b,backgroundUrl:o,email:l,response:f,error:v,submit:function(){return w.apply(this,arguments)}}},j.components=Object.assign({WhitehawkLogo:v.a,GenericError:f.a,ChevronLeftSvg:c.a,ChevronRightSvg:d.a},j.components);var w=j,_=r(53),C=r(1600),component=Object(_.a)(w,(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("main",{staticClass:"flex min-h-screen flex-col justify-center bg-prime-navy bg-[length:517px] bg-bottom bg-repeat-x py-12 sm:px-6 lg:px-8",style:{backgroundImage:"url("+e.backgroundUrl+")"}},[r("div",{staticClass:"container mx-auto flex flex-col space-y-4"},[r("BaseLink",{attrs:{"aria-label":"Link to main page",to:{path:"/"}}},[r("WhitehawkLogo",{staticClass:"mx-auto h-auto w-48 fill-current",attrs:{color:"white"}})],1),e._v(" "),r("h1",{staticClass:"text-center font-display text-3xl font-medium leading-9 tracking-tight text-white antialiased sm:text-5xl sm:leading-10"},[e._v("\n      Client Portal\n    ")]),e._v(" "),r("BaseP1",{staticClass:"text-center text-white"},[e._v("Reset your password")])],1),e._v(" "),r("div",{staticClass:"mt-8 sm:mx-auto sm:w-full sm:max-w-md"},[r("div",{staticClass:"space-y-8 rounded-lg bg-white px-10 py-8 shadow"},[e.error?r("GenericError",{attrs:{error:e.error}}):e._e(),e._v(" "),r("form",{staticClass:"space-y-8",on:{submit:function(t){return t.preventDefault(),e.submit.apply(null,arguments)}}},[r("BaseLabel",{staticClass:"flex flex-col space-y-1"},[r("span",{staticClass:"block text-sm font-medium leading-5"},[e._v("\n            Email\n            "),r("span",{staticClass:"text-red-500"},[e._v("*")])]),e._v(" "),r("BaseInputWithValidation",{attrs:{type:"email",name:"email",required:"","aria-required":"true",validator:e.checkEmail},model:{value:e.email,callback:function(t){e.email=t},expression:"email"}})],1),e._v(" "),r("BaseButton",{staticClass:"w-full",attrs:{shape:"rectangle",size:"large","display-type":"info",disabled:!e.email}},[e._v("\n          Request reset code\n        ")])],1),e._v(" "),e.response?[r("span",{staticClass:"my-2 text-sm text-gray-500"},[e._v("\n          An email has been sent to:\n          "+e._s(e.response.CodeDeliveryDetails.Destination)+"\n        ")])]:e._e(),e._v(" "),r("div",{staticClass:"flex justify-between"},[r("BaseLink",{staticClass:"group inline-flex items-center",attrs:{"display-type":"primary-prime",to:{path:"/login",query:{email:e.email}}}},[r("ChevronLeftSvg",{staticClass:"h-5 w-5 text-prime-indigo"}),e._v(" "),r("span",[e._v("Login")])],1),e._v(" "),r("BaseLink",{staticClass:"group inline-flex items-center",attrs:{"display-type":"primary-prime",to:{path:"/password-reset/code",query:{email:e.email}}}},[r("span",[e._v("Enter Code")]),e._v(" "),r("ChevronRightSvg",{staticClass:"h-5 w-5 text-prime-indigo"})],1)],1)],2)])])}),[],!1,null,null,null);"function"==typeof C.default&&Object(C.default)(component);t.default=component.exports;installComponents(component,{BaseLink:r(511).default,BaseP1:r(664).default,BaseInputWithValidation:r(700).default,BaseLabel:r(484).default,BaseButton:r(308).default})},469:function(e,t){e.exports=function(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e},e.exports.__esModule=!0,e.exports.default=e.exports},470:function(e,t,r){var n=r(489);e.exports=function(source,e){if(null==source)return{};var t,i,r=n(source,e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(source);for(i=0;i<o.length;i++)t=o[i],e.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(source,t)&&(r[t]=source[t])}return r},e.exports.__esModule=!0,e.exports.default=e.exports},477:function(e,t,r){"use strict";r.d(t,"b",(function(){return m})),r.d(t,"c",(function(){return x})),r.d(t,"a",(function(){return O}));r(45),r(37),r(44),r(26),r(62),r(38),r(63);var n=r(35),o=r(101),c=r(28),l=(r(199),r(20));function d(object,e){var t=Object.keys(object);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(object);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(object,e).enumerable}))),t.push.apply(t,r)}return t}function f(e){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?d(Object(source),!0).forEach((function(t){Object(c.a)(e,t,source[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(source)):d(Object(source)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(source,t))}))}return e}var v=!0,y={prop:"value",event:"input"};function m(e,t){var r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:y,n=r.prop,o=r.event;return Object(l.computed)({get:function(){return e[n]},set:function(e){t(o,e)}})}function x(e,t){var r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:y,n=r.prop,o=r.event;return Object(l.computed)((function(){var r={},c=e[n]||{};return new Proxy(c,{get:function(e,t){return e[t]},set:function(e,n,c){return r[n]=c,t(o,f(f({},e),r)),v}})}))}function O(e,t){var r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:y,c=r.prop,d=r.event;return Object(l.computed)((function(){var r={},l=e[c]||[];return new Proxy(l,{get:function(e,t){return e[t]},set:function(e,c,l){if(e[c]===l)return v;var f=Object(o.a)(e);r[c]=l;for(var y=0,m=Object.entries(r);y<m.length;y++){var x=Object(n.a)(m[y],2),O=x[0],h=x[1];f[O]=h}return t(d,f),v}})}))}},482:function(e,t,r){"use strict";r.d(t,"a",(function(){return d})),r.d(t,"d",(function(){return f})),r.d(t,"b",(function(){return v})),r.d(t,"c",(function(){return y}));var n=r(28),o=(r(102),r(47),r(100),r(45),r(37),r(44),r(26),r(62),r(38),r(63),r(20));function c(object,e){var t=Object.keys(object);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(object);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(object,e).enumerable}))),t.push.apply(t,r)}return t}function l(e){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?c(Object(source),!0).forEach((function(t){Object(n.a)(e,t,source[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(source)):c(Object(source)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(source,t))}))}return e}function d(){var e=Object(o.getCurrentInstance)();if(!e)throw new Error("Not in setup()?");return Object(o.computed)((function(){return e.proxy.$route}))}function f(){var e=Object(o.getCurrentInstance)();if(!e)throw new Error("Not in setup()?");return e.proxy.$router}function v(e){var t=d();return Object(o.computed)((function(){var r=t.value.params[e];if(!r)throw new Error("Missing param: ".concat(e));return r}))}function y(e,t){var r,c=d(),v=f();return Object(o.computed)({get:function(){return c.value.query[e]||t},set:function(t){clearTimeout(r),r=setTimeout((function(){v.replace({query:l(l({},c.value.query),{},Object(n.a)({},e,t))})}),300)}})}},484:function(e,t,r){"use strict";r.r(t);var n=r(20),o=Object(n.defineComponent)({inheritAttrs:!1}),c=r(53),component=Object(c.a)(o,(function(){var e=this,t=e.$createElement;return(e._self._c||t)("label",e._g(e._b({staticClass:"block font-body text-sm font-medium leading-5 tracking-wide text-gray-600 antialiased",attrs:{role:"label"}},"label",e.$attrs,!1),e.$listeners),[e._t("default")],2)}),[],!1,null,null,null);t.default=component.exports},489:function(e,t){e.exports=function(source,e){if(null==source)return{};var t,i,r={},n=Object.keys(source);for(i=0;i<n.length;i++)t=n[i],e.indexOf(t)>=0||(r[t]=source[t]);return r},e.exports.__esModule=!0,e.exports.default=e.exports},496:function(e,t,r){"use strict";var n=r(497),o=r.n(n),c={setup:function(e,t){return{}}};c.components=Object.assign({XCircleSvg:o.a},c.components);var l=c,d=r(53),component=Object(d.a)(l,(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"rounded-md bg-red-50 p-4 shadow",attrs:{role:"alert"}},[r("div",{staticClass:"flex space-x-3"},[r("div",{staticClass:"flex-shrink-0"},[r("XCircleSvg",{staticClass:"h-5 w-5 text-red-500"})],1),e._v(" "),r("div",{staticClass:"space-y-2"},[r("h3",{staticClass:"text-sm font-medium leading-5 text-red-800"},[e._t("title")],2),e._v(" "),r("div",{staticClass:"text-sm leading-5 text-red-700"},[e._t("message")],2)])])])}),[],!1,null,null,null);t.a=component.exports},497:function(e,t,r){r(45),r(37),r(44),r(26),r(62),r(38),r(63);var n=r(469),o=r(470),c=["class","staticClass","style","staticStyle","attrs"];function l(object,e){var t=Object.keys(object);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(object);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(object,e).enumerable}))),t.push.apply(t,r)}return t}r(121),e.exports={functional:!0,render:function(e,t){var r=t._c,data=(t._v,t.data),d=t.children,f=void 0===d?[]:d,v=data.class,y=data.staticClass,style=data.style,m=data.staticStyle,x=data.attrs,O=void 0===x?{}:x,h=o(data,c);return r("svg",function(e){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?l(Object(source),!0).forEach((function(t){n(e,t,source[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(source)):l(Object(source)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(source,t))}))}return e}({class:[v,y],style:[style,m],attrs:Object.assign({xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",fill:"currentColor","aria-hidden":"true"},O)},h),f.concat([r("path",{attrs:{"fill-rule":"evenodd",d:"M10 18a8 8 0 100-16 8 8 0 000 16zM8.28 7.22a.75.75 0 00-1.06 1.06L8.94 10l-1.72 1.72a.75.75 0 101.06 1.06L10 11.06l1.72 1.72a.75.75 0 101.06-1.06L11.06 10l1.72-1.72a.75.75 0 00-1.06-1.06L10 8.94 8.28 7.22z","clip-rule":"evenodd"}})]))}}},498:function(e,t,r){"use strict";var n=r(496),o=r(20);r(54);var c={props:{error:{key:"error",required:!0,type:null}}};c.setup=function(e,t){var r=e;return{alert:Object(o.computed)((function(){return"string"==typeof(e=r.error)?{title:"Error",message:e}:e instanceof Error||e instanceof Object&&"name"in e&&"message"in e?{title:e.name,message:e.message}:{title:"Error",message:String(e)};var e}))}},c.components=Object.assign({AlertError:n.a},c.components);var l=c,d=r(53),component=Object(d.a)(l,(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("section",[r("AlertError",{scopedSlots:e._u([{key:"title",fn:function(){return[e._v("\n      "+e._s(e.alert.title)+"\n    ")]},proxy:!0},{key:"message",fn:function(){return[e._v("\n      "+e._s(e.alert.message)+"\n    ")]},proxy:!0}])})],1)}),[],!1,null,null,null);t.a=component.exports},502:function(e,t,r){r(45),r(37),r(44),r(26),r(62),r(38),r(63);var n=r(469),o=r(470),c=["class","staticClass","style","staticStyle","attrs"];function l(object,e){var t=Object.keys(object);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(object);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(object,e).enumerable}))),t.push.apply(t,r)}return t}r(121),e.exports={functional:!0,render:function(e,t){var r=t._c,data=(t._v,t.data),d=t.children,f=void 0===d?[]:d,v=data.class,y=data.staticClass,style=data.style,m=data.staticStyle,x=data.attrs,O=void 0===x?{}:x,h=o(data,c);return r("svg",function(e){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?l(Object(source),!0).forEach((function(t){n(e,t,source[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(source)):l(Object(source)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(source,t))}))}return e}({class:[v,y],style:[style,m],attrs:Object.assign({xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",fill:"currentColor","aria-hidden":"true"},O)},h),f.concat([r("path",{attrs:{"fill-rule":"evenodd",d:"M12.79 5.23a.75.75 0 01-.02 1.06L8.832 10l3.938 3.71a.75.75 0 11-1.04 1.08l-4.5-4.25a.75.75 0 010-1.08l4.5-4.25a.75.75 0 011.06.02z","clip-rule":"evenodd"}})]))}}},507:function(e,t,r){"use strict";r.r(t);var n=r(20),o=r(477),c={prop:"modelValue",event:"model-value-change"},l=Object(n.defineComponent)({inheritAttrs:!1,model:c});l.props={modelValue:{key:"modelValue",required:!1,type:null,default:void 0},type:{key:"type",required:!1,type:String,default:"text"}},l.setup=function(e,t){var r=e,l=t.emit,d=Object(o.b)(r,l,c),f="shadow-sm border border-gray-300 focus:outline-none focus:border-blue-300 focus:ring focus:ring-opacity-50 transition duration-150 ease-in-out disabled:cursor-not-allowed inline-flex",v="".concat(f," rounded text-blue-500 focus:ring-blue-200"),y="".concat(f," text-blue-500 focus:ring-blue-200"),m="".concat(f," text-sm sm:text-base rounded-md read-only:bg-gray-200 focus:ring-blue-200");return{proxy:d,dynamicClass:Object(n.computed)((function(){switch(r.type){case"checkbox":return v;case"radio":return y;default:return m}}))}};var d=l,f=r(53),component=Object(f.a)(d,(function(){var e=this,t=e.$createElement,r=e._self._c||t;return"number"===e.type?r("input",e._g(e._b({directives:[{name:"model",rawName:"v-model.number",value:e.proxy,expression:"proxy",modifiers:{number:!0}}],staticClass:"block",class:e.dynamicClass,attrs:{type:e.type,pattern:"^[^ ].+[^ ]$"},domProps:{value:e.$attrs.value,value:e.proxy},on:{input:function(t){t.target.composing||(e.proxy=e._n(t.target.value))},blur:function(t){return e.$forceUpdate()}}},"input",e.$attrs,!1),e.$listeners)):"checkbox"===e.type?r("input",e._g(e._b({directives:[{name:"model",rawName:"v-model",value:e.proxy,expression:"proxy"}],staticClass:"block",class:e.dynamicClass,attrs:{pattern:"^[^ ].+[^ ]$",type:"checkbox"},domProps:{value:e.$attrs.value,checked:Array.isArray(e.proxy)?e._i(e.proxy,e.$attrs.value)>-1:e.proxy},on:{change:function(t){var r=e.proxy,n=t.target,o=!!n.checked;if(Array.isArray(r)){var c=e.$attrs.value,l=e._i(r,c);n.checked?l<0&&(e.proxy=r.concat([c])):l>-1&&(e.proxy=r.slice(0,l).concat(r.slice(l+1)))}else e.proxy=o}}},"input",e.$attrs,!1),e.$listeners)):"radio"===e.type?r("input",e._g(e._b({directives:[{name:"model",rawName:"v-model",value:e.proxy,expression:"proxy"}],staticClass:"block",class:e.dynamicClass,attrs:{pattern:"^[^ ].+[^ ]$",type:"radio"},domProps:{value:e.$attrs.value,checked:e._q(e.proxy,e.$attrs.value)},on:{change:function(t){e.proxy=e.$attrs.value}}},"input",e.$attrs,!1),e.$listeners)):r("input",e._g(e._b({directives:[{name:"model",rawName:"v-model",value:e.proxy,expression:"proxy"}],staticClass:"block",class:e.dynamicClass,attrs:{pattern:"^[^ ].+[^ ]$",type:e.type},domProps:{value:e.$attrs.value,value:e.proxy},on:{input:function(t){t.target.composing||(e.proxy=t.target.value)}}},"input",e.$attrs,!1),e.$listeners))}),[],!1,null,null,null);t.default=component.exports},508:function(e,t,r){"use strict";var n=r(20),o=Object(n.defineComponent)({inheritAttrs:!1});o.props={activeClass:{key:"activeClass",required:!0,type:String},enterLeaveToClass:{key:"enterLeaveToClass",required:!0,type:String}},o.setup=function(e,t){return{}};var c=o,l=r(53),component=Object(l.a)(c,(function(){var e=this,t=e.$createElement;return(e._self._c||t)("Transition",e._g(e._b({attrs:{"enter-active-class":e.activeClass,"leave-active-class":e.activeClass,"enter-from-class":e.enterLeaveToClass,"enter-class":e.enterLeaveToClass,"leave-to-class":e.enterLeaveToClass}},"Transition",e.$attrs,!1),e.$listeners),[e._t("default")],2)}),[],!1,null,null,null);t.a=component.exports},511:function(e,t,r){"use strict";r.r(t);r(121);var n=r(20),o=Object(n.defineComponent)({inheritAttrs:!1});o.props={displayType:{key:"displayType",required:!1,type:null,default:"normal"}},o.setup=function(e,t){var text="no-underline antialiased font-body text-base leading-6 font-medium",r="focus:outline-none disabled:cursor-not-allowed disabled:opacity-50",base="".concat(r," ").concat(text," ").concat("transform transition duration-200 hover:-translate-y-px"," inline-flex"),o={normal:"".concat(base," text-blue-500 hover:text-blue-700 focus:text-blue-800"),dark:"".concat(base," text-white hover:text-gray-400 focus:text-gray-400"),gray:"".concat(base," text-gray-500 hover:text-prime-indigo focus:text-prime-indigo"),primary:"".concat(base," text-blue-500 hover:text-teal-500"),"primary-prime":"".concat(base," text-prime-indigo hover:text-indigo-400 focus:text-indigo-400"),secondary:"".concat(base," text-prime-navy hover:text-prime-indigo focus:text-prime-indigo"),none:"".concat(r," ").concat(text," inline-flex")},c=e;return{displayTypeClass:Object(n.computed)((function(){return o[c.displayType]}))}};var c=o,l=r(53),component=Object(l.a)(c,(function(){var e=this,t=e.$createElement;return(e._self._c||t)("NuxtLink",e._g(e._b({class:e.displayTypeClass},"NuxtLink",e.$attrs,!1),e.$listeners),[e._t("default")],2)}),[],!1,null,null,null);t.default=component.exports},539:function(e,t,r){r(45),r(37),r(44),r(26),r(62),r(38),r(63);var n=r(469),o=r(470),c=["class","staticClass","style","staticStyle","attrs"];function l(object,e){var t=Object.keys(object);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(object);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(object,e).enumerable}))),t.push.apply(t,r)}return t}r(121),e.exports={functional:!0,render:function(e,t){var r=t._c,data=(t._v,t.data),d=t.children,f=void 0===d?[]:d,v=data.class,y=data.staticClass,style=data.style,m=data.staticStyle,x=data.attrs,O=void 0===x?{}:x,h=o(data,c);return r("svg",function(e){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?l(Object(source),!0).forEach((function(t){n(e,t,source[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(source)):l(Object(source)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(source,t))}))}return e}({class:[v,y],style:[style,m],attrs:Object.assign({xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",fill:"currentColor","aria-hidden":"true"},O)},h),f.concat([r("path",{attrs:{"fill-rule":"evenodd",d:"M7.21 14.77a.75.75 0 01.02-1.06L11.168 10 7.23 6.29a.75.75 0 111.04-1.08l4.5 4.25a.75.75 0 010 1.08l-4.5 4.25a.75.75 0 01-1.06-.02z","clip-rule":"evenodd"}})]))}}},650:function(e,t,r){"use strict";function n(e){e.target.blur()}r.d(t,"a",(function(){return n}))},664:function(e,t,r){"use strict";r.r(t);var n=r(53),component=Object(n.a)({},(function(){var e=this,t=e.$createElement;return(e._self._c||t)("p",{staticClass:"font-body text-base font-normal leading-7 tracking-wide"},[e._t("default")],2)}),[],!1,null,null,null);t.default=component.exports},700:function(e,t,r){"use strict";r.r(t);var n=r(708),o=r.n(n),c=r(508),l=r(20),d=r(477),f=r(650),v=Object(l.defineComponent)({inheritAttrs:!1});v.props={value:{key:"value",required:!1,type:null},validator:{key:"validator",required:!0,type:Function}},v.setup=function(e,t){var r=e,n=t.emit,o=Object(d.b)(r,n),c=Object(l.ref)({valid:!0});return{targetHtmlElementBlur:f.a,proxy:o,check:c,validate:function(){c.value=r.validator(o.value)}}},v.components=Object.assign({ExclamationCircleSvg:o.a,SimpleTransition:c.a},v.components);var y=v,m=r(53),component=Object(m.a)(y,(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"flex flex-col space-y-1"},[r("div",{staticClass:"relative flex h-full flex-col rounded-md"},[r("BaseInput",e._b({staticClass:"block h-full pr-10",class:e.check.valid?"":"focus:ring-red border-red-300 text-red-900 placeholder-red-300 focus:border-red-300",attrs:{"aria-invalid":e.check.valid},on:{blur:e.validate,keyup:function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"enter",13,t.key,"Enter")?null:e.targetHtmlElementBlur.apply(null,arguments)}},model:{value:e.proxy,callback:function(t){e.proxy=t},expression:"proxy"}},"BaseInput",e.$attrs,!1)),e._v(" "),e.check.valid?e._e():r("div",{staticClass:"pointer-events-none absolute inset-y-0 right-0 flex items-center pr-3"},[r("ExclamationCircleSvg",{staticClass:"h-5 w-5 text-red-500"})],1)],1),e._v(" "),r("SimpleTransition",{attrs:{"active-class":"transition duration-100 transform","enter-leave-to-class":"-translate-y-2 opacity-0"}},[e.check.valid?e._e():r("p",{staticClass:"max-w-lg overflow-x-auto text-xs text-red-600"},[e._v("\n      "+e._s(e.check.reason)+"\n    ")])])],1)}),[],!1,null,null,null);t.default=component.exports;installComponents(component,{BaseInput:r(507).default})},708:function(e,t,r){r(45),r(37),r(44),r(26),r(62),r(38),r(63);var n=r(469),o=r(470),c=["class","staticClass","style","staticStyle","attrs"];function l(object,e){var t=Object.keys(object);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(object);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(object,e).enumerable}))),t.push.apply(t,r)}return t}r(121),e.exports={functional:!0,render:function(e,t){var r=t._c,data=(t._v,t.data),d=t.children,f=void 0===d?[]:d,v=data.class,y=data.staticClass,style=data.style,m=data.staticStyle,x=data.attrs,O=void 0===x?{}:x,h=o(data,c);return r("svg",function(e){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?l(Object(source),!0).forEach((function(t){n(e,t,source[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(source)):l(Object(source)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(source,t))}))}return e}({class:[v,y],style:[style,m],attrs:Object.assign({xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",fill:"currentColor","aria-hidden":"true"},O)},h),f.concat([r("path",{attrs:{"fill-rule":"evenodd",d:"M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-5a.75.75 0 01.75.75v4.5a.75.75 0 01-1.5 0v-4.5A.75.75 0 0110 5zm0 10a1 1 0 100-2 1 1 0 000 2z","clip-rule":"evenodd"}})]))}}},711:function(e,t,r){"use strict";r.d(t,"b",(function(){return n})),r.d(t,"c",(function(){return o})),r.d(t,"d",(function(){return c})),r.d(t,"a",(function(){return l})),r.d(t,"e",(function(){return d}));r(104),r(105),r(47),r(329);function n(e){return e&&!function(e){return e.includes("@")&&e.length>=3}(e)?{valid:!1,reason:"Email address must be formatted as: example@email.com"}:{valid:!0}}function o(e){return e&&!function(e){return e.length>=8}(e)?{valid:!1,reason:"Password must be at least 8 characters long."}:{valid:!0}}function c(e){return e&&!function(e){return e.match(/^[a-z0-9][a-z0-9\\-]{0,67}[a-z0-9]$/)}(e)?{valid:!1,reason:"\n        Must be lowercase, must begin/end with an alphanumeric character, and contain\n        only letters, numbers or dashes.\n      "}:{valid:!0}}function l(e){return e&&!function(e){return 40===e.length&&e.match(/^[a-z0-9]{40}$/)}(e)?{valid:!1,reason:"Must be 40 characters, and contain only lowercase letters (a-z) and numbers (0-9)."}:{valid:!0}}function d(e){return e&&!function(e){return e.match(/^[0-9a-f]{8}\b-[0-9a-f]{4}\b-[0-9a-f]{4}\b-[0-9a-f]{4}\b-[0-9a-f]{12}$/)}(e)?{valid:!1,reason:"Must be in 8-4-4-4-12 format, and contain only lowercase letters (a-z) and numbers (0-9)."}:{valid:!0}}},833:function(e,t,r){"use strict";var n={};n.props={color:{key:"color",required:!1,type:String,default:"blue"}},n.setup=function(e,t){return{}};var o=n,c=r(53),component=Object(c.a)(o,(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("svg",{attrs:{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 417.34 268.48"}},[r("text",{attrs:{x:"208.67",y:"255.03",fill:e.color,"font-size":"58","letter-spacing":"6","text-anchor":"middle","text-rendering":"geometricPrecision"}},[e._v("\n    WHITEHAWK\n  ")]),e._v(" "),r("g",{attrs:{fill:"none","shape-rendering":"geometricPrecision",stroke:e.color,"stroke-miterlimit":"10","stroke-width":"5"}},[r("path",{attrs:{d:"M.38 6.86a220.44 220.44 0 0 1 47.34-5.11c104.86 0 192.59 73.32 214.73 171.48"}}),e._v(" "),r("path",{attrs:{d:"M152.5 172.54C174.89 74.72 262.5 1.75 367.07 1.75a221 221 0 0 1 49.88 5.68"}}),e._v(" "),r("path",{attrs:{d:"M8.5 35.83a219.6 219.6 0 0 1 80.22-15.08c93.72 0 173.76 58.57 205.51 141.1"}}),e._v(" "),r("path",{attrs:{d:"M120.96 160.82c32-82 111.78-140.07 205.11-140.07a219.44 219.44 0 0 1 82.54 16"}}),e._v(" "),r("path",{attrs:{d:"M20.57 63.68a220.25 220.25 0 0 1 301 83.24"}}),e._v(" "),r("path",{attrs:{d:"M96.1 147.08a220.26 220.26 0 0 1 300.86-83.55"}}),e._v(" "),r("path",{attrs:{d:"M35.48 88.41a220.15 220.15 0 0 1 309.39 41.12"}}),e._v(" "),r("path",{attrs:{d:"M70.98 128.15a220.15 220.15 0 0 1 310.05-38.4"}}),e._v(" "),r("path",{attrs:{d:"M51.67 108.98a220.11 220.11 0 0 1 311.6 2.8"}})])])}),[],!1,null,null,null);t.a=component.exports}}]);