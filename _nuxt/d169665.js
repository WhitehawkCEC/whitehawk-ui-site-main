(window.webpackJsonp=window.webpackJsonp||[]).push([[118,26,59,67,68,74],{2158:function(e,t,r){"use strict";r.r(t);r(47),r(38),r(46),r(24),r(63),r(39),r(64);var n=r(10),o=r(28),c=(r(48),r(42),r(631)),l=r(520),f=r(104),d=(r(73),r(531),r(121),r(545)),m=r(522),v=r(1440),y=r(20),x=r(478),h=r(770),O={};O.props={value:{key:"value",required:!1,type:null},users:{key:"users",required:!0,type:Array},companyAccess:{key:"companyAccess",required:!0,type:Array}},O.setup=function(e,t){var r=e,n=t.emit,o=Object(x.b)(r,n),c=Object(y.computed)((function(){return r.companyAccess.map((function(e){return e.user}))})),l=Object(y.computed)((function(){return r.users.map((function(e){return{id:Object(h.a)(e,"sub"),email:Object(h.a)(e,"email")}}))})),d=Object(y.computed)((function(){return Object(v.differenceBy)(l.value,c.value,(function(e){return e.id})).map((function(e){return{text:e.email,value:e}})).sort((function(a,b){return a.text.localeCompare(b.text)}))}));return{proxy:o,schema:[{name:"user",label:"User",component:{is:m.a,attrs:{required:!0,options:[{text:"",value:void 0}].concat(Object(f.a)(d.value))}}},{name:"permission",label:"Permission",component:{is:m.a,attrs:{required:!0,options:[{text:"",value:void 0}].concat([{text:"Read",value:"READ"},{text:"Write",value:"WRITE"},{text:"Admin",value:"ADMIN"}])}}}]}},O.components=Object.assign({DynamicForm:d.a},O.components);var j=O,w=r(55),k=Object(w.a)(j,(function(){var e=this,t=e.$createElement;return(e._self._c||t)("DynamicForm",{attrs:{schema:e.schema},model:{value:e.proxy,callback:function(t){e.proxy=t},expression:"proxy"}})}),[],!1,null,null,null).exports,_=r(501),P=r(738),C=r(481);function R(object,e){var t=Object.keys(object);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(object);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(object,e).enumerable}))),t.push.apply(t,r)}return t}function E(e){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?R(Object(source),!0).forEach((function(t){Object(o.a)(e,t,source[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(source)):R(Object(source)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(source,t))}))}return e}var S={setup:function(e,t){var r=Object(C.b)("id"),o=[P.a.list(),_.D.list(r)],c=_.C.read(r),l=Object(y.ref)();Object(y.watch)((function(){return c.data.value}),(function(e){e&&(l.value=E(E({},l.value),{},{company:{id:r.value,name:e.name}}))}),{immediate:!0});var f=Object(C.d)(),d=_.D.create();function m(){return(m=Object(n.a)(regeneratorRuntime.mark((function e(){var body;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!(l.value&&l.value.company&&l.value.user&&l.value.permission)){e.next=7;break}return body={company:l.value.company,user:l.value.user,permission:l.value.permission},e.next=4,d.mutateAsync({id:r.value,body:body});case 4:f.push("/admin/companies/".concat(encodeURIComponent(r.value),"/members")),e.next=8;break;case 7:throw new Error("Invalid request.");case 8:case"end":return e.stop()}}),e)})))).apply(this,arguments)}return{queries:o,access:l,addMember:function(){return m.apply(this,arguments)}}}};S.components=Object.assign({BackButton:l.a,UserAccessInput:k,FormButton:c.a},S.components);var A=S,D=Object(w.a)(A,(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"space-y-6"},[r("BackButton"),e._v(" "),r("BaseSimpleCard",{staticClass:"divide-y"},[r("BaseTypography",{staticClass:"p-4",attrs:{component:"h2",variant:"subtitle3"}},[e._v("\n      Add Member\n    ")]),e._v(" "),r("form",{staticClass:"divide-y",on:{submit:function(t){return t.preventDefault(),e.addMember.apply(null,arguments)}}},[r("BaseVueQueries",{attrs:{queries:e.queries},scopedSlots:e._u([{key:"success",fn:function(t){var n=t[0],o=t[1];return[r("UserAccessInput",{attrs:{users:n,"company-access":o},model:{value:e.access,callback:function(t){e.access=t},expression:"access"}})]}}])}),e._v(" "),r("FormButton",{attrs:{action:"create"}})],1)],1)],1)}),[],!1,null,null,null);t.default=D.exports;installComponents(D,{BaseTypography:r(476).default,BaseVueQueries:r(684).default,BaseSimpleCard:r(491).default})},476:function(e,t,r){"use strict";r.r(t);var n=r(20),o=Object(n.defineComponent)({inheritAttrs:!1});o.props={variant:{key:"variant",required:!0,type:null},component:{key:"component",required:!1,type:null,default:"span"}},o.setup=function(e,t){var r="antialiased",o={h1:"".concat(r," font-display text-4xl font-semibold leading-snug tracking-wide sm:text-5xl md:text-6xl"),h2:"".concat(r," font-display text-3xl font-semibold leading-9 tracking-normal sm:text-5xl sm:leading-10"),h3:"".concat(r," font-display text-3xl font-medium leading-8 tracking-normal sm:text-4xl sm:leading-10"),h4:"".concat(r," font-display text-2xl font-medium leading-8 tracking-wide sm:text-3xl sm:leading-9"),h5:"".concat(r," font-display text-2xl font-medium leading-6 tracking-normal"),h6:"".concat(r," font-display text-xl font-semibold leading-7 tracking-wide"),p1:"".concat(r," font-body text-base font-normal leading-7 tracking-wide"),p2:"".concat(r," font-body text-sm font-normal leading-6 tracking-normal"),subtitle1:"".concat(r," font-body text-lg font-normal leading-6 tracking-wide sm:text-xl"),subtitle2:"".concat(r," font-body text-xs font-medium leading-5 tracking-wide"),subtitle3:"".concat(r," font-display text-lg font-medium leading-5 tracking-wide"),overline:"".concat(r," font-display text-xs font-medium tracking-widest"),button:"".concat(r," font-body text-xs font-medium tracking-wider sm:text-sm xl:tracking-wide"),data:"".concat(r," font-mono text-xs font-normal tracking-wider sm:text-sm xl:tracking-wide")},c=e;return{displayTypeClass:Object(n.computed)((function(){return o[c.variant]}))}};var c=o,l=r(55),component=Object(l.a)(c,(function(){var e=this,t=e.$createElement;return(e._self._c||t)(e.component,e._g(e._b({tag:"Component",class:e.displayTypeClass},"Component",e.$attrs,!1),e.$listeners),[e._t("default")],2)}),[],!1,null,null,null);t.default=component.exports},478:function(e,t,r){"use strict";r.d(t,"b",(function(){return y})),r.d(t,"c",(function(){return x})),r.d(t,"a",(function(){return h}));r(47),r(38),r(46),r(24),r(63),r(39),r(64);var n=r(36),o=r(104),c=r(28),l=(r(199),r(20));function f(object,e){var t=Object.keys(object);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(object);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(object,e).enumerable}))),t.push.apply(t,r)}return t}function d(e){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?f(Object(source),!0).forEach((function(t){Object(c.a)(e,t,source[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(source)):f(Object(source)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(source,t))}))}return e}var m=!0,v={prop:"value",event:"input"};function y(e,t){var r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:v,n=r.prop,o=r.event;return Object(l.computed)({get:function(){return e[n]},set:function(e){t(o,e)}})}function x(e,t){var r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:v,n=r.prop,o=r.event;return Object(l.computed)((function(){var r={},c=e[n]||{};return new Proxy(c,{get:function(e,t){return e[t]},set:function(e,n,c){return r[n]=c,t(o,d(d({},e),r)),m}})}))}function h(e,t){var r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:v,c=r.prop,f=r.event;return Object(l.computed)((function(){var r={},l=e[c]||[];return new Proxy(l,{get:function(e,t){return e[t]},set:function(e,c,l){if(e[c]===l)return m;var d=Object(o.a)(e);r[c]=l;for(var v=0,y=Object.entries(r);v<y.length;v++){var x=Object(n.a)(y[v],2),h=x[0],O=x[1];d[h]=O}return t(f,d),m}})}))}},481:function(e,t,r){"use strict";r.d(t,"a",(function(){return f})),r.d(t,"d",(function(){return d})),r.d(t,"b",(function(){return m})),r.d(t,"c",(function(){return v}));var n=r(28),o=(r(84),r(50),r(103),r(47),r(38),r(46),r(24),r(63),r(39),r(64),r(20));function c(object,e){var t=Object.keys(object);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(object);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(object,e).enumerable}))),t.push.apply(t,r)}return t}function l(e){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?c(Object(source),!0).forEach((function(t){Object(n.a)(e,t,source[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(source)):c(Object(source)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(source,t))}))}return e}function f(){var e=Object(o.getCurrentInstance)();if(!e)throw new Error("Not in setup()?");return Object(o.computed)((function(){return e.proxy.$route}))}function d(){var e=Object(o.getCurrentInstance)();if(!e)throw new Error("Not in setup()?");return e.proxy.$router}function m(e){var t=f();return Object(o.computed)((function(){var r=t.value.params[e];if(!r)throw new Error("Missing param: ".concat(e));return r}))}function v(e,t){var r,c=f(),m=d();return Object(o.computed)({get:function(){return c.value.query[e]||t},set:function(t){clearTimeout(r),r=setTimeout((function(){m.replace({query:l(l({},c.value.query),{},Object(n.a)({},e,t))})}),300)}})}},488:function(e,t,r){"use strict";r.r(t);var n=r(20),o=Object(n.defineComponent)({inheritAttrs:!1}),c=r(55),component=Object(c.a)(o,(function(){var e=this,t=e.$createElement;return(e._self._c||t)("label",e._g(e._b({staticClass:"block font-body text-sm font-medium leading-5 tracking-wide text-gray-600 antialiased",attrs:{role:"label"}},"label",e.$attrs,!1),e.$listeners),[e._t("default")],2)}),[],!1,null,null,null);t.default=component.exports},490:function(e,t,r){"use strict";r(24),r(159),r(121);var n=r(20),o={props:{definition:{key:"definition",required:!0,type:null}},setup:function(e,t){var r=e,o=Object(n.computed)((function(){return r.definition.icon[0]})),c=Object(n.computed)((function(){return r.definition.icon[1]}));return{svgPathData:Object(n.computed)((function(){return r.definition.icon[4].toString()})),viewBox:Object(n.computed)((function(){return"0 0 ".concat(o.value," ").concat(c.value)}))}}},c=o,l=r(55),component=Object(l.a)(c,(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("svg",{attrs:{xmlns:"http://www.w3.org/2000/svg",viewBox:e.viewBox,"aria-hidden":"true",focusable:"false",role:"img"}},[r("path",{attrs:{fill:"currentColor",d:e.svgPathData}})])}),[],!1,null,null,null);t.a=component.exports},491:function(e,t,r){"use strict";r.r(t);var n=r(55),component=Object(n.a)({},(function(){var e=this,t=e.$createElement;return(e._self._c||t)("div",{staticClass:"rounded-xl bg-white shadow"},[e._t("default")],2)}),[],!1,null,null,null);t.default=component.exports},493:function(e,t,r){"use strict";var n=r(490),o=r(497),c={setup:function(e,t){return{definition:o.definition}}};c.components=Object.assign({FontAwesomeSvg:n.a},c.components);var l=c,f=r(55),component=Object(f.a)(l,(function(){var e=this,t=e.$createElement;return(e._self._c||t)("FontAwesomeSvg",{staticClass:"h-5 w-5 animate-spin",attrs:{definition:e.definition}})}),[],!1,null,null,null);t.a=component.exports},495:function(e,t,r){"use strict";var n=r(496),o=r(20);r(42);var c={props:{error:{key:"error",required:!0,type:null}}};c.setup=function(e,t){var r=e;return{alert:Object(o.computed)((function(){return"string"==typeof(e=r.error)?{title:"Error",message:e}:e instanceof Error||e instanceof Object&&"name"in e&&"message"in e?{title:e.name,message:e.message}:{title:"Error",message:String(e)};var e}))}},c.components=Object.assign({AlertError:n.a},c.components);var l=c,f=r(55),component=Object(f.a)(l,(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("section",[r("AlertError",{scopedSlots:e._u([{key:"title",fn:function(){return[e._v("\n      "+e._s(e.alert.title)+"\n    ")]},proxy:!0},{key:"message",fn:function(){return[e._v("\n      "+e._s(e.alert.message)+"\n    ")]},proxy:!0}])})],1)}),[],!1,null,null,null);t.a=component.exports},496:function(e,t,r){"use strict";var n=r(498),o=r.n(n),c={setup:function(e,t){return{}}};c.components=Object.assign({XCircleSvg:o.a},c.components);var l=c,f=r(55),component=Object(f.a)(l,(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"rounded-md bg-red-50 p-4 shadow",attrs:{role:"alert"}},[r("div",{staticClass:"flex space-x-3"},[r("div",{staticClass:"flex-shrink-0"},[r("XCircleSvg",{staticClass:"h-5 w-5 text-red-500"})],1),e._v(" "),r("div",{staticClass:"space-y-2"},[r("h3",{staticClass:"text-sm font-medium leading-5 text-red-800"},[e._t("title")],2),e._v(" "),r("div",{staticClass:"text-sm leading-5 text-red-700"},[e._t("message")],2)])])])}),[],!1,null,null,null);t.a=component.exports},511:function(e,t,r){"use strict";r.r(t);var n=r(20),o="model-value-change",c={prop:"modelValue",event:o},l=Object(n.defineComponent)({inheritAttrs:!1,model:c});l.props={modelValue:{key:"modelValue",required:!1,type:null,default:void 0},multiple:{key:"multiple",required:!1,type:null,default:!1}},l.setup=function(e,t){var r=e,c=t.emit;return{proxy:Object(n.computed)({get:function(){var e=r.modelValue;return e||(void 0!==r.multiple?[]:void 0)},set:function(e){c(o,e)}})}};var f=l,d=r(55),component=Object(d.a)(f,(function(){var e=this,t=e.$createElement;return(e._self._c||t)("select",e._g(e._b({directives:[{name:"model",rawName:"v-model",value:e.proxy,expression:"proxy"}],staticClass:"block cursor-pointer rounded-md border-gray-300 py-2 pl-3 pr-10 text-sm focus:border-blue-300 focus:outline-none focus:ring focus:ring-blue-200 focus:ring-opacity-50 sm:text-base",attrs:{multiple:e.multiple},on:{change:function(t){var r=Array.prototype.filter.call(t.target.options,(function(e){return e.selected})).map((function(e){return"_value"in e?e._value:e.value}));e.proxy=t.target.multiple?r:r[0]}}},"select",e.$attrs,!1),e.$listeners),[e._t("default")],2)}),[],!1,null,null,null);t.default=component.exports},512:function(e,t,r){r(47),r(38),r(46),r(24),r(63),r(39),r(64);var n=r(474),o=r(475),c=["class","staticClass","style","staticStyle","attrs"];function l(object,e){var t=Object.keys(object);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(object);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(object,e).enumerable}))),t.push.apply(t,r)}return t}r(121),e.exports={functional:!0,render:function(e,t){var r=t._c,data=(t._v,t.data),f=t.children,d=void 0===f?[]:f,m=data.class,v=data.staticClass,style=data.style,y=data.staticStyle,x=data.attrs,h=void 0===x?{}:x,O=o(data,c);return r("svg",function(e){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?l(Object(source),!0).forEach((function(t){n(e,t,source[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(source)):l(Object(source)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(source,t))}))}return e}({class:[m,v],style:[style,y],attrs:Object.assign({xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",fill:"currentColor","aria-hidden":"true"},h)},O),d.concat([r("path",{attrs:{"fill-rule":"evenodd",d:"M12.79 5.23a.75.75 0 01-.02 1.06L8.832 10l3.938 3.71a.75.75 0 11-1.04 1.08l-4.5-4.25a.75.75 0 010-1.08l4.5-4.25a.75.75 0 011.06.02z","clip-rule":"evenodd"}})]))}}},514:function(e,t,r){"use strict";var n=r(55),component=Object(n.a)({},(function(){var e=this.$createElement,t=this._self._c||e;return t("svg",{staticClass:"h-5 w-5",attrs:{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",fill:"currentColor"}},[t("path",{attrs:{"fill-rule":"evenodd",d:"M10 3a1 1 0 011 1v5h5a1 1 0 110 2h-5v5a1 1 0 11-2 0v-5H4a1 1 0 110-2h5V4a1 1 0 011-1z","clip-rule":"evenodd"}})])}),[],!1,null,null,null);t.a=component.exports},520:function(e,t,r){"use strict";var n=r(512),o=r.n(n),c={};c.props={link:{key:"link",required:!1,type:null,default:"."},text:{key:"text",required:!1,type:String,default:"Back"}},c.setup=function(e,t){return{}},c.components=Object.assign({ChevronLeftSvg:o.a},c.components);var l=c,f=r(55),component=Object(f.a)(l,(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",[e.link?r("BaseButton",{attrs:{shape:"rectangle","display-type":"light",size:"even",to:e.link}},[r("ChevronLeftSvg",{staticClass:"-ml-1 h-auto w-5"}),e._v(" "),r("span",[e._v(e._s(e.text))])],1):r("BaseButton",{attrs:{shape:"rectangle","display-type":"light",size:"even",to:e.link,append:""}},[r("ChevronLeftSvg",{staticClass:"-ml-1 h-auto w-5"}),e._v(" "),r("span",[e._v(e._s(e.text))])],1)],1)}),[],!1,null,null,null);t.a=component.exports;installComponents(component,{BaseButton:r(310).default})},522:function(e,t,r){"use strict";var n=r(478),o=r(20),c={prop:"sModelValue",event:"s-model-value-change"},l=Object(o.defineComponent)({inheritAttrs:!1,model:c});l.props={sModelValue:{key:"sModelValue",required:!1,type:null},options:{key:"options",required:!0,type:Array}},l.setup=function(e,t){var r=e,o=t.emit;return{proxy:Object(n.b)(r,o,c)}};var f=l,d=r(55),component=Object(d.a)(f,(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("BaseSelect",e._g(e._b({model:{value:e.proxy,callback:function(t){e.proxy=t},expression:"proxy"}},"BaseSelect",e.$attrs,!1),e.$listeners),e._l(e.options,(function(option){return r("option",{key:option.key||option.text||option.value,domProps:{value:option.value}},[e._v("\n    "+e._s(option.text||option.value)+"\n  ")])})),0)}),[],!1,null,null,null);t.a=component.exports;installComponents(component,{BaseSelect:r(511).default})},531:function(e,t,r){"use strict";var n=r(5),o=r(11),c=r(21),l=r(57),f=r(68),d=r(330),m=r(29),v=r(12),y=r(329),x=r(224),h=r(621),O=r(622),j=r(127),w=r(617),k=[],_=o(k.sort),P=o(k.push),C=v((function(){k.sort(void 0)})),R=v((function(){k.sort(null)})),E=x("sort"),S=!v((function(){if(j)return j<70;if(!(h&&h>3)){if(O)return!0;if(w)return w<603;var code,e,t,r,n="";for(code=65;code<76;code++){switch(e=String.fromCharCode(code),code){case 66:case 69:case 70:case 72:t=3;break;case 68:case 71:t=4;break;default:t=2}for(r=0;r<47;r++)k.push({k:e+r,v:t})}for(k.sort((function(a,b){return b.v-a.v})),r=0;r<k.length;r++)e=k[r].k.charAt(0),n.charAt(n.length-1)!==e&&(n+=e);return"DGBEFHACIJK"!==n}}));n({target:"Array",proto:!0,forced:C||!R||!E||!S},{sort:function(e){void 0!==e&&c(e);var t=l(this);if(S)return void 0===e?_(t):_(t,e);var r,n,o=[],v=f(t);for(n=0;n<v;n++)n in t&&P(o,t[n]);for(y(o,function(e){return function(t,r){return void 0===r?-1:void 0===t?1:void 0!==e?+e(t,r)||0:m(t)>m(r)?1:-1}}(e)),r=f(o),n=0;n<r;)t[n]=o[n++];for(;n<v;)d(t,n++);return t}})},545:function(e,t,r){"use strict";var n=r(478),o=r(20),c={prop:"modelValue",event:"update:modelValue"},l=Object(o.defineComponent)({model:c});l.props={modelValue:{key:"modelValue",required:!1,type:null},component:{key:"component",required:!0,type:null}},l.setup=function(e,t){var r=e,o=t.emit;return{proxy:Object(n.b)(r,o,c)}};var f=l,d=r(55),m=Object(d.a)(f,(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",["input"===e.component.is?["checkbox"===e.component.attrs.type?r("input",e._b({directives:[{name:"model",rawName:"v-model",value:e.proxy,expression:"proxy"}],attrs:{type:"checkbox"},domProps:{checked:Array.isArray(e.proxy)?e._i(e.proxy,null)>-1:e.proxy},on:{change:function(t){var r=e.proxy,n=t.target,o=!!n.checked;if(Array.isArray(r)){var c=e._i(r,null);n.checked?c<0&&(e.proxy=r.concat([null])):c>-1&&(e.proxy=r.slice(0,c).concat(r.slice(c+1)))}else e.proxy=o}}},"input",e.component.attrs,!1)):"radio"===e.component.attrs.type?r("input",e._b({directives:[{name:"model",rawName:"v-model",value:e.proxy,expression:"proxy"}],attrs:{type:"radio"},domProps:{checked:e._q(e.proxy,null)},on:{change:function(t){e.proxy=null}}},"input",e.component.attrs,!1)):r("input",e._b({directives:[{name:"model",rawName:"v-model",value:e.proxy,expression:"proxy"}],attrs:{type:e.component.attrs.type},domProps:{value:e.proxy},on:{input:function(t){t.target.composing||(e.proxy=t.target.value)}}},"input",e.component.attrs,!1))]:"select"===e.component.is?[r("select",e._b({directives:[{name:"model",rawName:"v-model",value:e.proxy,expression:"proxy"}],on:{change:function(t){var r=Array.prototype.filter.call(t.target.options,(function(e){return e.selected})).map((function(e){return"_value"in e?e._value:e.value}));e.proxy=t.target.multiple?r:r[0]}}},"select",e.component.attrs,!1))]:"textarea"===e.component.is?[r("textarea",e._b({directives:[{name:"model",rawName:"v-model",value:e.proxy,expression:"proxy"}],domProps:{value:e.proxy},on:{input:function(t){t.target.composing||(e.proxy=t.target.value)}}},"textarea",e.component.attrs,!1))]:[r(e.component.is,e._b({tag:"Component",model:{value:e.proxy,callback:function(t){e.proxy=t},expression:"proxy"}},"Component",e.component.attrs,!1))]],2)}),[],!1,null,null,null).exports,v={props:{value:{key:"value",required:!1,type:null},schema:{key:"schema",required:!0,type:null}},setup:function(e,t){var r=e,c=t.emit;return{proxy:Object(n.b)(r,c),isRequired:Object(o.computed)((function(){var e,t;return null===(e=r.schema.component)||void 0===e||null===(t=e.attrs)||void 0===t?void 0:t.required}))}}};v.components=Object.assign({DynamicComponent:m},v.components);var y=v,x=Object(d.a)(y,(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("BaseLabel",{staticClass:"grid grid-cols-1 gap-1 sm:grid-cols-3 sm:items-center sm:gap-4"},[r("span",[e._v("\n    "+e._s(e.schema.label)+"\n    "),e.isRequired?r("span",{staticClass:"text-red-700"},[e._v("*")]):e._e()]),e._v(" "),r("DynamicComponent",{staticClass:"flex flex-col sm:col-span-2",attrs:{component:e.schema.component},model:{value:e.proxy,callback:function(t){e.proxy=t},expression:"proxy"}})],1)}),[],!1,null,null,null),h=x.exports;installComponents(x,{BaseLabel:r(488).default});var O={props:{value:{key:"value",required:!1,type:null},schema:{key:"schema",required:!0,type:null}},setup:function(e,t){var r=e,o=t.emit;return{proxy:Object(n.c)(r,o)}}};O.components=Object.assign({DynamicFormInputGroup:h},O.components);var j=O,w=Object(d.a)(j,(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"flex flex-col space-y-6 sm:space-y-0 sm:divide-y"},e._l(e.schema,(function(t){return r("div",{key:t.name,staticClass:"min-w-0 p-4"},[r("DynamicFormInputGroup",{staticClass:"h-full",attrs:{schema:t},model:{value:e.proxy[t.name],callback:function(r){e.$set(e.proxy,t.name,r)},expression:"proxy[field.name]"}})],1)})),0)}),[],!1,null,null,null);t.a=w.exports},551:function(e,t,r){"use strict";r.d(t,"a",(function(){return N}));var n=r(10),o=(r(48),r(158)),c=r(765),l=r(220),f=(r(47),r(38),r(46),r(24),r(63),r(39),r(64),r(28)),d=r(125),m=r(126),v=r(745),y=r(746),x=r(747),h=r(748),O=r(749),j=r(750),w=r(751),k=r(752),_=r(753),P=r(754),C=r(755),R=r(756),E=r(757),S=r(758),A=r(759),D=r(760);function B(object,e){var t=Object.keys(object);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(object);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(object,e).enumerable}))),t.push.apply(t,r)}return t}function U(e){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?B(Object(source),!0).forEach((function(t){Object(f.a)(e,t,source[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(source)):B(Object(source)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(source,t))}))}return e}var $=function(){function e(t,r){Object(d.a)(this,e),this.clientProvider=t,this.userPoolId=r}var t,r,o,c,l,f,B,$,I,V,N,T,F,M,G,L;return Object(m.a)(e,[{key:"_allParams",value:function(e){return U(U({},e),{},{UserPoolId:this.userPoolId})}},{key:"listUsers",value:(L=Object(n.a)(regeneratorRuntime.mark((function e(t){var r;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.clientProvider();case 2:return r=e.sent,e.next=5,r.send(new v.a(this._allParams(t)),{});case 5:return e.abrupt("return",e.sent);case 6:case"end":return e.stop()}}),e,this)}))),function(e){return L.apply(this,arguments)})},{key:"adminCreateUser",value:(G=Object(n.a)(regeneratorRuntime.mark((function e(t){var r;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.clientProvider();case 2:return r=e.sent,e.next=5,r.send(new y.a(this._allParams(t)));case 5:return e.abrupt("return",e.sent);case 6:case"end":return e.stop()}}),e,this)}))),function(e){return G.apply(this,arguments)})},{key:"adminDisableUser",value:(M=Object(n.a)(regeneratorRuntime.mark((function e(t){var r;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.clientProvider();case 2:return r=e.sent,e.next=5,r.send(new x.a(this._allParams(t)));case 5:return e.abrupt("return",e.sent);case 6:case"end":return e.stop()}}),e,this)}))),function(e){return M.apply(this,arguments)})},{key:"adminDeleteUser",value:(F=Object(n.a)(regeneratorRuntime.mark((function e(t){var r;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.clientProvider();case 2:return r=e.sent,e.next=5,r.send(new h.a(this._allParams(t)));case 5:return e.abrupt("return",e.sent);case 6:case"end":return e.stop()}}),e,this)}))),function(e){return F.apply(this,arguments)})},{key:"adminGetUser",value:(T=Object(n.a)(regeneratorRuntime.mark((function e(t){var r;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.clientProvider();case 2:return r=e.sent,e.next=5,r.send(new O.a(this._allParams(t)));case 5:return e.abrupt("return",e.sent);case 6:case"end":return e.stop()}}),e,this)}))),function(e){return T.apply(this,arguments)})},{key:"adminSetUserPassword",value:(N=Object(n.a)(regeneratorRuntime.mark((function e(t){var r;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.clientProvider();case 2:return r=e.sent,e.next=5,r.send(new j.a(this._allParams(t)));case 5:return e.abrupt("return",e.sent);case 6:case"end":return e.stop()}}),e,this)}))),function(e){return N.apply(this,arguments)})},{key:"adminUpdateUserAttributes",value:(V=Object(n.a)(regeneratorRuntime.mark((function e(t){var r;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.clientProvider();case 2:return r=e.sent,e.next=5,r.send(new w.a(this._allParams(t)));case 5:return e.abrupt("return",e.sent);case 6:case"end":return e.stop()}}),e,this)}))),function(e){return V.apply(this,arguments)})},{key:"adminListGroupsForUser",value:(I=Object(n.a)(regeneratorRuntime.mark((function e(t){var r;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.clientProvider();case 2:return r=e.sent,e.next=5,r.send(new k.a(this._allParams(t)));case 5:return e.abrupt("return",e.sent);case 6:case"end":return e.stop()}}),e,this)}))),function(e){return I.apply(this,arguments)})},{key:"adminAddUserToGroup",value:($=Object(n.a)(regeneratorRuntime.mark((function e(t){var r;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.clientProvider();case 2:return r=e.sent,e.next=5,r.send(new _.a(this._allParams(t)));case 5:return e.abrupt("return",e.sent);case 6:case"end":return e.stop()}}),e,this)}))),function(e){return $.apply(this,arguments)})},{key:"adminRemoveUserFromGroup",value:(B=Object(n.a)(regeneratorRuntime.mark((function e(t){var r;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.clientProvider();case 2:return r=e.sent,e.next=5,r.send(new P.a(this._allParams(t)));case 5:return e.abrupt("return",e.sent);case 6:case"end":return e.stop()}}),e,this)}))),function(e){return B.apply(this,arguments)})},{key:"adminInitiateAuth",value:(f=Object(n.a)(regeneratorRuntime.mark((function e(t){var r;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.clientProvider();case 2:return r=e.sent,e.next=5,r.send(new C.a(this._allParams(t)));case 5:return e.abrupt("return",e.sent);case 6:case"end":return e.stop()}}),e,this)}))),function(e){return f.apply(this,arguments)})},{key:"adminRespondToAuthChallenge",value:(l=Object(n.a)(regeneratorRuntime.mark((function e(t){var r;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.clientProvider();case 2:return r=e.sent,e.next=5,r.send(new R.a(this._allParams(t)));case 5:return e.abrupt("return",e.sent);case 6:case"end":return e.stop()}}),e,this)}))),function(e){return l.apply(this,arguments)})},{key:"listGroups",value:(c=Object(n.a)(regeneratorRuntime.mark((function e(t){var r;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.clientProvider();case 2:return r=e.sent,e.next=5,r.send(new E.a(this._allParams(t)));case 5:return e.abrupt("return",e.sent);case 6:case"end":return e.stop()}}),e,this)}))),function(e){return c.apply(this,arguments)})},{key:"getGroup",value:(o=Object(n.a)(regeneratorRuntime.mark((function e(t){var r;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.clientProvider();case 2:return r=e.sent,e.next=5,r.send(new S.a(this._allParams(t)));case 5:return e.abrupt("return",e.sent);case 6:case"end":return e.stop()}}),e,this)}))),function(e){return o.apply(this,arguments)})},{key:"deleteGroup",value:(r=Object(n.a)(regeneratorRuntime.mark((function e(t){var r;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.clientProvider();case 2:return r=e.sent,e.next=5,r.send(new A.a(this._allParams(t)));case 5:return e.abrupt("return",e.sent);case 6:case"end":return e.stop()}}),e,this)}))),function(e){return r.apply(this,arguments)})},{key:"listUsersInGroup",value:(t=Object(n.a)(regeneratorRuntime.mark((function e(t){var r;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.clientProvider();case 2:return r=e.sent,e.next=5,r.send(new D.a(this._allParams(t)));case 5:return e.abrupt("return",e.sent);case 6:case"end":return e.stop()}}),e,this)}))),function(e){return t.apply(this,arguments)})}]),e}(),I=l.a.region,V=l.a.userPoolId,N=new $(Object(n.a)(regeneratorRuntime.mark((function e(){var t;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,o.a.currentCredentials();case 2:return t=e.sent,e.abrupt("return",new c.a({apiVersion:"2016-04-18",region:I,credentials:o.a.essentialCredentials(t)}));case 4:case"end":return e.stop()}}),e)}))),V)},552:function(e,t,r){"use strict";r.d(t,"a",(function(){return n}));var n="cognito"},556:function(e,t,r){"use strict";r.d(t,"a",(function(){return m})),r.d(t,"b",(function(){return y}));var n=r(104),o=r(10),c=r(559),l=r(560);r(48),r(38),r(74),r(24),r(557),r(75),r(51),r(49);function f(e){var t,r,n,o=2;for("undefined"!=typeof Symbol&&(r=Symbol.asyncIterator,n=Symbol.iterator);o--;){if(r&&null!=(t=e[r]))return t.call(e);if(n&&null!=(t=e[n]))return new d(t.call(e));r="@@asyncIterator",n="@@iterator"}throw new TypeError("Object is not async iterable")}function d(s){function e(e){if(Object(e)!==e)return Promise.reject(new TypeError(e+" is not an object."));var t=e.done;return Promise.resolve(e.value).then((function(e){return{value:e,done:t}}))}return d=function(s){this.s=s,this.n=s.next},d.prototype={s:null,n:null,next:function(){return e(this.n.apply(this.s,arguments))},return:function(t){var r=this.s.return;return void 0===r?Promise.resolve({value:t,done:!0}):e(r.apply(this.s,arguments))},throw:function(t){var r=this.s.return;return void 0===r?Promise.reject(t):e(r.apply(this.s,arguments))}},new d(s)}function m(e){return v.apply(this,arguments)}function v(){return(v=Object(o.a)(regeneratorRuntime.mark((function e(t){var r,o,c,l,d,m,v;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:r=[],o=!1,c=!1,e.prev=3,d=f(t);case 5:return e.next=7,d.next();case 7:if(!(o=!(m=e.sent).done)){e.next=13;break}v=m.value,r.push.apply(r,Object(n.a)(v));case 10:o=!1,e.next=5;break;case 13:e.next=19;break;case 15:e.prev=15,e.t0=e.catch(3),c=!0,l=e.t0;case 19:if(e.prev=19,e.prev=20,!o||null==d.return){e.next=24;break}return e.next=24,d.return();case 24:if(e.prev=24,!c){e.next=27;break}throw l;case 27:return e.finish(24);case 28:return e.finish(19);case 29:return e.abrupt("return",r);case 30:case"end":return e.stop()}}),e,null,[[3,15,19,29],[20,,24,28]])})))).apply(this,arguments)}function y(e,t,r){return x.apply(this,arguments)}function x(){return(x=Object(l.a)(regeneratorRuntime.mark((function e(t,r,n){var o,l,f,d;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(c.a)(t(o));case 2:if(l=e.sent,!(f=l[n])){e.next=8;break}return d=f,e.next=8,d;case 8:o=l[r];case 9:if(o){e.next=0;break}case 10:case"end":return e.stop()}}),e)})))).apply(this,arguments)}},617:function(e,t,r){var n=r(105).match(/AppleWebKit\/(\d+)\./);e.exports=!!n&&+n[1]},621:function(e,t,r){var n=r(105).match(/firefox\/(\d+)/i);e.exports=!!n&&+n[1]},622:function(e,t,r){var n=r(105);e.exports=/MSIE|Trident/.test(n)},631:function(e,t,r){"use strict";var n=r(578),o=r.n(n),c=r(579),l=r.n(c),f=r(514),d=r(20),m={};m.props={action:{key:"action",required:!0,type:null},priority:{key:"priority",required:!1,type:null,default:"primary"},isValidForm:{key:"isValidForm",required:!1,type:Boolean,default:!0}},m.setup=function(e,t){var r={create:{icon:f.a,text:"Create",color:"base"},update:{icon:o.a,text:"Update",color:"base"},delete:{icon:l.a,text:"Delete",color:"danger"}},n=e,c=Object(d.computed)((function(){return r[n.action]}));return{props:n,display:c}};var v=m,y=r(55),component=Object(y.a)(v,(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"p-4"},[r("BaseButton",{staticClass:"w-full space-x-1 lg:w-auto",attrs:{action:e.props.priority,"display-type":e.display.color,disabled:!e.isValidForm}},[r(e.display.icon,{tag:"Component",staticClass:"-ml-1 w-4 lg:w-5"}),e._v(" "),r("span",[e._v(e._s(e.display.text))])],1)],1)}),[],!1,null,null,null);t.a=component.exports;installComponents(component,{BaseButton:r(310).default})},684:function(e,t,r){"use strict";r.r(t);r(24),r(73);var n=r(495),o=r(493),c=r(20),l={};l.props={queries:{key:"queries",required:!0,type:Array}},l.setup=function(e,t){var r=e;return{isLoading:Object(c.computed)((function(){return r.queries.some((function(e){return e.isLoading.value}))})),isError:Object(c.computed)((function(){return r.queries.some((function(e){return e.isError.value}))})),errors:Object(c.computed)((function(){return r.queries.map((function(e){return e.error.value}))})),merged:Object(c.computed)((function(){return r.queries.map((function(e){return e.data.value}))}))}},l.components=Object.assign({LoadingSpinner:o.a,GenericError:n.a},l.components);var f=l,d=r(55),component=Object(d.a)(f,(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",[r("ClientOnly",[e.isLoading?[e._t("loading",(function(){return[r("LoadingSpinner")]}))]:e.isError?[e._t("error",(function(){return e._l(e.errors,(function(e,t){return r("div",{key:t},[r("GenericError",{attrs:{error:e}})],1)}))}),null,e.errors)]:[e._t("success",(function(){return[r("pre",[e._v(e._s(e.data))]),e._v(" "),e._l(e.merged,(function(data,t){return r("div",{key:t},[r("pre",[e._v(e._s(JSON.stringify(data,null,2)))])])}))]}),null,e.merged)]],2)],1)}),[],!1,null,null,null);t.default=component.exports},738:function(e,t,r){"use strict";r.d(t,"a",(function(){return O}));r(47),r(38),r(46),r(24),r(63),r(39),r(64);var n=r(28),o=r(10),c=(r(48),r(761)),l=r.n(c),f=r(197),d=r(220),m=r(556),v=r(551),y=r(552);function x(object,e){var t=Object.keys(object);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(object);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(object,e).enumerable}))),t.push.apply(t,r)}return t}function h(e){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?x(Object(source),!0).forEach((function(t){Object(n.a)(e,t,source[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(source)):x(Object(source)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(source,t))}))}return e}var O={create:function(){var e=Object(f.d)();return Object(f.b)(function(){var e=Object(o.a)(regeneratorRuntime.mark((function e(t){var r,n,c,f,m;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=function(){return n=Object(o.a)(regeneratorRuntime.mark((function e(t,r){var n,o;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,v.a.adminInitiateAuth({ClientId:d.a.userPoolWebClientId,AuthFlow:"ADMIN_NO_SRP_AUTH",AuthParameters:{USERNAME:t,PASSWORD:r}});case 2:return n=e.sent,o=n.Session,e.next=6,v.a.adminRespondToAuthChallenge({ClientId:d.a.userPoolWebClientId,Session:o,ChallengeName:"NEW_PASSWORD_REQUIRED",ChallengeResponses:{USERNAME:t,NEW_PASSWORD:r}});case 6:case"end":return e.stop()}}),e)}))),n.apply(this,arguments)},r=function(e,t){return n.apply(this,arguments)},c=l()("a0",32),e.next=5,v.a.adminCreateUser(h(h({},t),{},{TemporaryPassword:c}));case 5:if(f=e.sent,m=t.Username){e.next=9;break}throw new Error("Missing `Username`");case 9:return e.prev=9,e.next=12,r(m,c);case 12:e.next=19;break;case 14:return e.prev=14,e.t0=e.catch(9),e.next=18,v.a.adminDeleteUser({Username:m});case 18:throw e.t0;case 19:return e.abrupt("return",f);case 20:case"end":return e.stop()}}),e,null,[[9,14]])})));return function(t){return e.apply(this,arguments)}}(),{onSuccess:function(){e.invalidateQueries([y.a,"users"],{exact:!0})}})},read:function(e){return Object(f.c)([y.a,"users",e],Object(o.a)(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,v.a.adminGetUser({Username:e.value});case 2:return t.abrupt("return",t.sent);case 3:case"end":return t.stop()}}),t)}))))},delete:function(e){var t=Object(f.d)();return Object(f.b)(Object(o.a)(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,v.a.adminDeleteUser({Username:e.value});case 2:return t.abrupt("return",t.sent);case 3:case"end":return t.stop()}}),t)}))),{onSuccess:function(){t.invalidateQueries([y.a,"users"],{exact:!0}),t.invalidateQueries([y.a,"users",e],{exact:!0})}})},list:function(){return Object(f.c)([y.a,"users"],Object(o.a)(regeneratorRuntime.mark((function e(){var t;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=function(e){return v.a.listUsers({PaginationToken:e})},e.next=3,Object(m.a)(Object(m.b)(t,"PaginationToken","Users"));case 3:return e.abrupt("return",e.sent);case 4:case"end":return e.stop()}}),e)}))),{})}}},770:function(e,t,r){"use strict";r(311),r(24);t.a=function(e,t){var r=function(e){return"Attributes"in e}(e)?e.Attributes:e.UserAttributes,n=null==r?void 0:r.find((function(e){return e.Name===t}));return null==n?void 0:n.Value}}}]);