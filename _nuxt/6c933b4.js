(window.webpackJsonp=window.webpackJsonp||[]).push([[117,55,57,64,65,71],{1967:function(e,t,n){"use strict";n.r(t);var r=n(11),o=(n(53),n(600)),l=n.n(o),c=n(603),d=n.n(c),m=n(515),f=(n(104),n(546)),y=n(555),v=n(474),x={props:{value:{key:"value",required:!0,type:null}},setup:function(e,t){var n=e,r=t.emit;return{proxy:Object(v.c)(n,r),fields:[{label:"ID",name:"id"},{label:"Name",name:"name"}]}}},O=x,h=n(55),component=Object(h.a)(O,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"space-y-4"},e._l(e.fields,(function(t){return n("BaseLabel",{key:t.label,staticClass:"grid gap-1 pt-4 sm:pt-0"},[n("span",{staticClass:"block text-xs font-medium leading-5 text-gray-700"},[e._v("\n      "+e._s(t.label)+"\n    ")]),e._v(" "),n("BaseInput",{staticClass:"w-full text-sm font-medium leading-5 text-gray-700",attrs:{"aria-readonly":"true",readonly:""},model:{value:e.proxy[t.name],callback:function(n){e.$set(e.proxy,t.name,n)},expression:"proxy[field.name]"}})],1)})),1)}),[],!1,null,null,null),j=component.exports;installComponents(component,{BaseInput:n(502).default,BaseLabel:n(481).default});var _={props:{value:{key:"value",required:!0,type:null}},setup:function(e,t){var n=e,r=t.emit;return{proxy:Object(v.c)(n,r),fields:[{label:"ID",name:"id"},{label:"Email",name:"email"}]}}},w=_,k=Object(h.a)(w,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"space-y-4"},e._l(e.fields,(function(t){return n("BaseLabel",{key:t.label,staticClass:"grid gap-1 pt-4 sm:pt-0"},[n("span",{staticClass:"block text-xs font-medium leading-5 text-gray-700"},[e._v("\n      "+e._s(t.label)+"\n    ")]),e._v(" "),n("BaseInput",{staticClass:"w-full text-sm font-medium leading-5 text-gray-700",attrs:{"aria-readonly":"true",readonly:""},model:{value:e.proxy[t.name],callback:function(n){e.$set(e.proxy,t.name,n)},expression:"proxy[field.name]"}})],1)})),1)}),[],!1,null,null,null),C=k.exports;installComponents(k,{BaseInput:n(502).default,BaseLabel:n(481).default});var P={props:{value:{key:"value",required:!1,type:null}},setup:function(e,t){var n=e,r=t.emit;return{proxy:Object(v.b)(n,r),schema:[{name:"user",label:"User",component:{is:C}},{name:"company",label:"Company",component:{is:j}},{name:"permission",label:"Permission",component:{is:y.a,attrs:{required:!0,options:[{text:"",value:void 0}].concat([{text:"Read",value:"READ"},{text:"Write",value:"WRITE"},{text:"Admin",value:"ADMIN"}])}}}]}}};P.components=Object.assign({DynamicForm:f.a},P.components);var $=P,B=Object(h.a)($,(function(){var e=this,t=e.$createElement;return(e._self._c||t)("DynamicForm",{attrs:{schema:e.schema},model:{value:e.proxy,callback:function(t){e.proxy=t},expression:"proxy"}})}),[],!1,null,null,null).exports,S=n(18),D=n(497),A=n(220),E=n(479),V={setup:function(e,t){var n=Object(E.b)("id"),o=Object(E.b)("userId"),l=D.B.read(n,o),c=Object(S.ref)();Object(S.watch)((function(){return l.data.value}),(function(e){e&&(c.value=e)}),{immediate:!0});var d=Object(E.d)(),m=Object(A.a)(),f=D.B.update(n,o);function y(){return(y=Object(r.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!c.value){e.next=7;break}return e.next=3,f.mutateAsync(c.value);case 3:m.success("Saved"),d.push("/admin/companies/".concat(encodeURIComponent(n.value),"/members")),e.next=8;break;case 7:throw new Error("Invalid request.");case 8:case"end":return e.stop()}}),e)})))).apply(this,arguments)}var v=D.B.delete();function x(){return(x=Object(r.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,v.mutateAsync({id:n.value,userId:o.value});case 2:d.push("/admin/companies/".concat(encodeURIComponent(n.value),"/members"));case 3:case"end":return e.stop()}}),e)})))).apply(this,arguments)}return{access:c,save:function(){return y.apply(this,arguments)},deleteMe:function(){return x.apply(this,arguments)}}}};V.components=Object.assign({BackButton:m.a,UserCompanyAccessInput:B,UpdateSvg:l.a,TrashSvg:d.a},V.components);var I=V,M=Object(h.a)(I,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"space-y-6"},[n("BackButton"),e._v(" "),n("BaseSimpleCard",{staticClass:"divide-y"},[n("BaseTypography",{staticClass:"p-4",attrs:{variant:"subtitle3",component:"h2"}},[e._v("\n      Update Permission\n    ")]),e._v(" "),n("form",{staticClass:"divide-y",on:{submit:function(t){return t.preventDefault(),e.save.apply(null,arguments)}}},[n("UserCompanyAccessInput",{model:{value:e.access,callback:function(t){e.access=t},expression:"access"}}),e._v(" "),n("div",{staticClass:"flex flex-col space-y-2 p-4 md:flex-row md:space-x-2 md:space-y-0"},[n("BaseButton",{staticClass:"space-x-2"},[n("UpdateSvg",{staticClass:"w-4 xl:w-5"}),e._v(" "),n("span",[e._v("Update")])],1),e._v(" "),n("BaseButton",{staticClass:"space-x-2",attrs:{type:"button",action:"secondary","display-type":"danger"},on:{click:e.deleteMe}},[n("TrashSvg",{staticClass:"w-4 xl:w-5"}),e._v(" "),n("span",[e._v("Delete")])],1)],1)],1)],1)],1)}),[],!1,null,null,null);t.default=M.exports;installComponents(M,{BaseTypography:n(471).default,BaseButton:n(306).default,BaseSimpleCard:n(490).default})},466:function(e,t){e.exports=function(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e},e.exports.__esModule=!0,e.exports.default=e.exports},467:function(e,t,n){var r=n(484);e.exports=function(source,e){if(null==source)return{};var t,i,n=r(source,e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(source);for(i=0;i<o.length;i++)t=o[i],e.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(source,t)&&(n[t]=source[t])}return n},e.exports.__esModule=!0,e.exports.default=e.exports},471:function(e,t,n){"use strict";n.r(t);var r=n(18),o=Object(r.defineComponent)({inheritAttrs:!1});o.props={variant:{key:"variant",required:!0,type:null},component:{key:"component",required:!1,type:null,default:"span"}},o.setup=function(e,t){var n="antialiased",o={h1:"".concat(n," font-display text-4xl font-semibold leading-snug tracking-wide sm:text-5xl md:text-6xl"),h2:"".concat(n," font-display text-3xl font-semibold leading-9 tracking-normal sm:text-5xl sm:leading-10"),h3:"".concat(n," font-display text-3xl font-medium leading-8 tracking-normal sm:text-4xl sm:leading-10"),h4:"".concat(n," font-display text-2xl font-medium leading-8 tracking-wide sm:text-3xl sm:leading-9"),h5:"".concat(n," font-display text-2xl font-medium leading-6 tracking-normal"),h6:"".concat(n," font-display text-xl font-semibold leading-7 tracking-wide"),p1:"".concat(n," font-body text-base font-normal leading-7 tracking-wide"),p2:"".concat(n," font-body text-sm font-normal leading-6 tracking-normal"),subtitle1:"".concat(n," font-body text-lg font-normal leading-6 tracking-wide sm:text-xl"),subtitle2:"".concat(n," font-body text-xs font-medium leading-5 tracking-wide"),subtitle3:"".concat(n," font-display text-lg font-medium leading-5 tracking-wide"),overline:"".concat(n," font-display text-xs font-medium tracking-widest"),button:"".concat(n," font-body text-xs font-medium tracking-wider sm:text-sm xl:tracking-wide")},l=e;return{displayTypeClass:Object(r.computed)((function(){return o[l.variant]}))}};var l=o,c=n(55),component=Object(c.a)(l,(function(){var e=this,t=e.$createElement;return(e._self._c||t)(e.component,e._g(e._b({tag:"Component",class:e.displayTypeClass},"Component",e.$attrs,!1),e.$listeners),[e._t("default")],2)}),[],!1,null,null,null);t.default=component.exports},474:function(e,t,n){"use strict";n.d(t,"b",(function(){return v})),n.d(t,"c",(function(){return x})),n.d(t,"a",(function(){return O}));n(45),n(36),n(44),n(22),n(56),n(37),n(57);var r=n(38),o=n(105),l=n(26),c=(n(202),n(18));function d(object,e){var t=Object.keys(object);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(object);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(object,e).enumerable}))),t.push.apply(t,n)}return t}function m(e){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?d(Object(source),!0).forEach((function(t){Object(l.a)(e,t,source[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(source)):d(Object(source)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(source,t))}))}return e}var f=!0,y={prop:"value",event:"input"};function v(e,t){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:y,r=n.prop,o=n.event;return Object(c.computed)({get:function(){return e[r]},set:function(e){t(o,e)}})}function x(e,t){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:y,r=n.prop,o=n.event;return Object(c.computed)((function(){var n={},l=e[r]||{};return new Proxy(l,{get:function(e,t){return e[t]},set:function(e,r,l){return n[r]=l,t(o,m(m({},e),n)),f}})}))}function O(e,t){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:y,l=n.prop,d=n.event;return Object(c.computed)((function(){var n={},c=e[l]||[];return new Proxy(c,{get:function(e,t){return e[t]},set:function(e,l,c){if(e[l]===c)return f;var m=Object(o.a)(e);n[l]=c;for(var y=0,v=Object.entries(n);y<v.length;y++){var x=Object(r.a)(v[y],2),O=x[0],h=x[1];m[O]=h}return t(d,m),f}})}))}},479:function(e,t,n){"use strict";n.d(t,"b",(function(){return m})),n.d(t,"c",(function(){return f}));var r=n(26),o=(n(85),n(46),n(106),n(45),n(36),n(44),n(22),n(56),n(37),n(57),n(66)),l=n(18);function c(object,e){var t=Object.keys(object);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(object);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(object,e).enumerable}))),t.push.apply(t,n)}return t}function d(e){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?c(Object(source),!0).forEach((function(t){Object(r.a)(e,t,source[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(source)):c(Object(source)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(source,t))}))}return e}function m(e){var t=Object(o.g)();return Object(l.computed)((function(){var n=t.value.params[e];if(!n)throw new Error("Missing param: ".concat(e));return n}))}function f(e,t){var n,c=Object(o.g)(),m=Object(o.h)();return Object(l.computed)({get:function(){return c.value.query[e]||t},set:function(t){clearTimeout(n),n=setTimeout((function(){m.replace({query:d(d({},c.value.query),{},Object(r.a)({},e,t))})}),300)}})}n.d(t,"a",(function(){return o.g})),n.d(t,"d",(function(){return o.h}))},481:function(e,t,n){"use strict";n.r(t);var r=n(18),o=Object(r.defineComponent)({inheritAttrs:!1}),l=n(55),component=Object(l.a)(o,(function(){var e=this,t=e.$createElement;return(e._self._c||t)("label",e._g(e._b({staticClass:"block font-body text-sm font-medium leading-5 tracking-wide text-gray-600 antialiased",attrs:{role:"label"}},"label",e.$attrs,!1),e.$listeners),[e._t("default")],2)}),[],!1,null,null,null);t.default=component.exports},484:function(e,t){e.exports=function(source,e){if(null==source)return{};var t,i,n={},r=Object.keys(source);for(i=0;i<r.length;i++)t=r[i],e.indexOf(t)>=0||(n[t]=source[t]);return n},e.exports.__esModule=!0,e.exports.default=e.exports},490:function(e,t,n){"use strict";n.r(t);var r=n(55),component=Object(r.a)({},(function(){var e=this,t=e.$createElement;return(e._self._c||t)("div",{staticClass:"rounded-xl bg-white shadow"},[e._t("default")],2)}),[],!1,null,null,null);t.default=component.exports},498:function(e,t,n){n(45),n(36),n(44),n(22),n(56),n(37),n(57);var r=n(466),o=n(467),l=["class","staticClass","style","staticStyle","attrs"];function c(object,e){var t=Object.keys(object);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(object);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(object,e).enumerable}))),t.push.apply(t,n)}return t}n(104),e.exports={functional:!0,render:function(e,t){var n=t._c,data=(t._v,t.data),d=t.children,m=void 0===d?[]:d,f=data.class,y=data.staticClass,style=data.style,v=data.staticStyle,x=data.attrs,O=void 0===x?{}:x,h=o(data,l);return n("svg",function(e){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?c(Object(source),!0).forEach((function(t){r(e,t,source[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(source)):c(Object(source)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(source,t))}))}return e}({class:[f,y],style:[style,v],attrs:Object.assign({xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",fill:"currentColor","aria-hidden":"true"},O)},h),m.concat([n("path",{attrs:{"fill-rule":"evenodd",d:"M13.79 3.23a.75.75 0 01-.02 1.06L7.832 10l5.938 5.71a.75.75 0 11-1.04 1.08l-6.5-6.25a.75.75 0 010-1.08l6.5-6.25a.75.75 0 011.06.02z","clip-rule":"evenodd"}})]))}}},502:function(e,t,n){"use strict";n.r(t);var r=n(18),o=n(474),l={prop:"modelValue",event:"model-value-change"},c=Object(r.defineComponent)({inheritAttrs:!1,model:l});c.props={modelValue:{key:"modelValue",required:!1,type:null,default:void 0},type:{key:"type",required:!1,type:String,default:"text"}},c.setup=function(e,t){var n=e,c=t.emit,d=Object(o.b)(n,c,l),m="shadow-sm border border-gray-300 focus:outline-none focus:border-blue-300 focus:ring focus:ring-opacity-50 transition duration-150 ease-in-out disabled:cursor-not-allowed inline-flex",f="".concat(m," rounded text-blue-500 focus:ring-blue-200"),y="".concat(m," text-blue-500 focus:ring-blue-200"),v="".concat(m," text-sm sm:text-base rounded-md read-only:bg-gray-200 focus:ring-blue-200");return{proxy:d,dynamicClass:Object(r.computed)((function(){switch(n.type){case"checkbox":return f;case"radio":return y;default:return v}}))}};var d=c,m=n(55),component=Object(m.a)(d,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return"number"===e.type?n("input",e._g(e._b({directives:[{name:"model",rawName:"v-model.number",value:e.proxy,expression:"proxy",modifiers:{number:!0}}],staticClass:"block",class:e.dynamicClass,attrs:{type:e.type,pattern:"^[^ ].+[^ ]$"},domProps:{value:e.$attrs.value,value:e.proxy},on:{input:function(t){t.target.composing||(e.proxy=e._n(t.target.value))},blur:function(t){return e.$forceUpdate()}}},"input",e.$attrs,!1),e.$listeners)):"checkbox"===e.type?n("input",e._g(e._b({directives:[{name:"model",rawName:"v-model",value:e.proxy,expression:"proxy"}],staticClass:"block",class:e.dynamicClass,attrs:{pattern:"^[^ ].+[^ ]$",type:"checkbox"},domProps:{value:e.$attrs.value,checked:Array.isArray(e.proxy)?e._i(e.proxy,e.$attrs.value)>-1:e.proxy},on:{change:function(t){var n=e.proxy,r=t.target,o=!!r.checked;if(Array.isArray(n)){var l=e.$attrs.value,c=e._i(n,l);r.checked?c<0&&(e.proxy=n.concat([l])):c>-1&&(e.proxy=n.slice(0,c).concat(n.slice(c+1)))}else e.proxy=o}}},"input",e.$attrs,!1),e.$listeners)):"radio"===e.type?n("input",e._g(e._b({directives:[{name:"model",rawName:"v-model",value:e.proxy,expression:"proxy"}],staticClass:"block",class:e.dynamicClass,attrs:{pattern:"^[^ ].+[^ ]$",type:"radio"},domProps:{value:e.$attrs.value,checked:e._q(e.proxy,e.$attrs.value)},on:{change:function(t){e.proxy=e.$attrs.value}}},"input",e.$attrs,!1),e.$listeners)):n("input",e._g(e._b({directives:[{name:"model",rawName:"v-model",value:e.proxy,expression:"proxy"}],staticClass:"block",class:e.dynamicClass,attrs:{pattern:"^[^ ].+[^ ]$",type:e.type},domProps:{value:e.$attrs.value,value:e.proxy},on:{input:function(t){t.target.composing||(e.proxy=t.target.value)}}},"input",e.$attrs,!1),e.$listeners))}),[],!1,null,null,null);t.default=component.exports},514:function(e,t,n){"use strict";n.r(t);var r=n(18),o="model-value-change",l={prop:"modelValue",event:o},c=Object(r.defineComponent)({inheritAttrs:!1,model:l});c.props={modelValue:{key:"modelValue",required:!1,type:null,default:void 0},multiple:{key:"multiple",required:!1,type:null,default:!1}},c.setup=function(e,t){var n=e,l=t.emit;return{proxy:Object(r.computed)({get:function(){var e=n.modelValue;return e||(void 0!==n.multiple?[]:void 0)},set:function(e){l(o,e)}})}};var d=c,m=n(55),component=Object(m.a)(d,(function(){var e=this,t=e.$createElement;return(e._self._c||t)("select",e._g(e._b({directives:[{name:"model",rawName:"v-model",value:e.proxy,expression:"proxy"}],staticClass:"block cursor-pointer rounded-md border-gray-300 py-2 pl-3 pr-10 text-sm focus:border-blue-300 focus:outline-none focus:ring focus:ring-blue-200 focus:ring-opacity-50 sm:text-base",attrs:{multiple:e.multiple},on:{change:function(t){var n=Array.prototype.filter.call(t.target.options,(function(e){return e.selected})).map((function(e){return"_value"in e?e._value:e.value}));e.proxy=t.target.multiple?n:n[0]}}},"select",e.$attrs,!1),e.$listeners),[e._t("default")],2)}),[],!1,null,null,null);t.default=component.exports},515:function(e,t,n){"use strict";var r=n(498),o=n.n(r),l={};l.props={link:{key:"link",required:!1,type:null,default:"."},text:{key:"text",required:!1,type:String,default:"Back"}},l.setup=function(e,t){return{}},l.components=Object.assign({ChevronLeftSvg:o.a},l.components);var c=l,d=n(55),component=Object(d.a)(c,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[e.link?n("BaseButton",{attrs:{shape:"rectangle","display-type":"light",size:"even",to:e.link}},[n("ChevronLeftSvg",{staticClass:"-ml-1 h-auto w-5"}),e._v(" "),n("span",[e._v(e._s(e.text))])],1):n("BaseButton",{attrs:{shape:"rectangle","display-type":"light",size:"even",to:e.link,append:""}},[n("ChevronLeftSvg",{staticClass:"-ml-1 h-auto w-5"}),e._v(" "),n("span",[e._v(e._s(e.text))])],1)],1)}),[],!1,null,null,null);t.a=component.exports;installComponents(component,{BaseButton:n(306).default})},546:function(e,t,n){"use strict";var r=n(474),o=n(18),l={prop:"modelValue",event:"update:modelValue"},c=Object(o.defineComponent)({model:l});c.props={modelValue:{key:"modelValue",required:!1,type:null},component:{key:"component",required:!0,type:null}},c.setup=function(e,t){var n=e,o=t.emit;return{proxy:Object(r.b)(n,o,l)}};var d=c,m=n(55),f=Object(m.a)(d,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",["input"===e.component.is?["checkbox"===e.component.attrs.type?n("input",e._b({directives:[{name:"model",rawName:"v-model",value:e.proxy,expression:"proxy"}],attrs:{type:"checkbox"},domProps:{checked:Array.isArray(e.proxy)?e._i(e.proxy,null)>-1:e.proxy},on:{change:function(t){var n=e.proxy,r=t.target,o=!!r.checked;if(Array.isArray(n)){var l=e._i(n,null);r.checked?l<0&&(e.proxy=n.concat([null])):l>-1&&(e.proxy=n.slice(0,l).concat(n.slice(l+1)))}else e.proxy=o}}},"input",e.component.attrs,!1)):"radio"===e.component.attrs.type?n("input",e._b({directives:[{name:"model",rawName:"v-model",value:e.proxy,expression:"proxy"}],attrs:{type:"radio"},domProps:{checked:e._q(e.proxy,null)},on:{change:function(t){e.proxy=null}}},"input",e.component.attrs,!1)):n("input",e._b({directives:[{name:"model",rawName:"v-model",value:e.proxy,expression:"proxy"}],attrs:{type:e.component.attrs.type},domProps:{value:e.proxy},on:{input:function(t){t.target.composing||(e.proxy=t.target.value)}}},"input",e.component.attrs,!1))]:"select"===e.component.is?[n("select",e._b({directives:[{name:"model",rawName:"v-model",value:e.proxy,expression:"proxy"}],on:{change:function(t){var n=Array.prototype.filter.call(t.target.options,(function(e){return e.selected})).map((function(e){return"_value"in e?e._value:e.value}));e.proxy=t.target.multiple?n:n[0]}}},"select",e.component.attrs,!1))]:"textarea"===e.component.is?[n("textarea",e._b({directives:[{name:"model",rawName:"v-model",value:e.proxy,expression:"proxy"}],domProps:{value:e.proxy},on:{input:function(t){t.target.composing||(e.proxy=t.target.value)}}},"textarea",e.component.attrs,!1))]:[n(e.component.is,e._b({tag:"Component",model:{value:e.proxy,callback:function(t){e.proxy=t},expression:"proxy"}},"Component",e.component.attrs,!1))]],2)}),[],!1,null,null,null).exports,y={props:{value:{key:"value",required:!1,type:null},schema:{key:"schema",required:!0,type:null}},setup:function(e,t){var n=e,l=t.emit;return{proxy:Object(r.b)(n,l),isRequired:Object(o.computed)((function(){var e,t;return null===(t=null===(e=n.schema.component)||void 0===e?void 0:e.attrs)||void 0===t?void 0:t.required}))}}};y.components=Object.assign({DynamicComponent:f},y.components);var v=y,x=Object(m.a)(v,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("BaseLabel",{staticClass:"grid grid-cols-1 gap-1 sm:grid-cols-3 sm:items-center sm:gap-4"},[n("span",[e._v("\n    "+e._s(e.schema.label)+"\n    "),e.isRequired?n("span",{staticClass:"text-red-700"},[e._v("*")]):e._e()]),e._v(" "),n("DynamicComponent",{staticClass:"flex flex-col sm:col-span-2",attrs:{component:e.schema.component},model:{value:e.proxy,callback:function(t){e.proxy=t},expression:"proxy"}})],1)}),[],!1,null,null,null),O=x.exports;installComponents(x,{BaseLabel:n(481).default});var h={props:{value:{key:"value",required:!1,type:null},schema:{key:"schema",required:!0,type:null}},setup:function(e,t){var n=e,o=t.emit;return{proxy:Object(r.c)(n,o)}}};h.components=Object.assign({DynamicFormInputGroup:O},h.components);var j=h,_=Object(m.a)(j,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"flex flex-col space-y-6 sm:space-y-0 sm:divide-y"},e._l(e.schema,(function(t){return n("div",{key:t.name,staticClass:"min-w-0 p-4"},[n("DynamicFormInputGroup",{staticClass:"h-full",attrs:{schema:t},model:{value:e.proxy[t.name],callback:function(n){e.$set(e.proxy,t.name,n)},expression:"proxy[field.name]"}})],1)})),0)}),[],!1,null,null,null);t.a=_.exports},555:function(e,t,n){"use strict";var r=n(474),o=n(18),l={prop:"sModelValue",event:"s-model-value-change"},c=Object(o.defineComponent)({inheritAttrs:!1,model:l});c.props={sModelValue:{key:"sModelValue",required:!1,type:null},options:{key:"options",required:!0,type:Array}},c.setup=function(e,t){var n=e,o=t.emit;return{proxy:Object(r.b)(n,o,l)}};var d=c,m=n(55),component=Object(m.a)(d,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("BaseSelect",e._g(e._b({model:{value:e.proxy,callback:function(t){e.proxy=t},expression:"proxy"}},"BaseSelect",e.$attrs,!1),e.$listeners),e._l(e.options,(function(option){return n("option",{key:option.key||option.text||option.value,domProps:{value:option.value}},[e._v("\n    "+e._s(option.text||option.value)+"\n  ")])})),0)}),[],!1,null,null,null);t.a=component.exports;installComponents(component,{BaseSelect:n(514).default})},600:function(e,t,n){n(45),n(36),n(44),n(22),n(56),n(37),n(57);var r=n(466),o=n(467),l=["class","staticClass","style","staticStyle","attrs"];function c(object,e){var t=Object.keys(object);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(object);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(object,e).enumerable}))),t.push.apply(t,n)}return t}n(104),e.exports={functional:!0,render:function(e,t){var n=t._c,data=(t._v,t.data),d=t.children,m=void 0===d?[]:d,f=data.class,y=data.staticClass,style=data.style,v=data.staticStyle,x=data.attrs,O=void 0===x?{}:x,h=o(data,l);return n("svg",function(e){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?c(Object(source),!0).forEach((function(t){r(e,t,source[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(source)):c(Object(source)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(source,t))}))}return e}({class:[f,y],style:[style,v],attrs:Object.assign({xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",fill:"currentColor","aria-hidden":"true"},O)},h),m.concat([n("path",{attrs:{d:"M13.75 7h-3v5.296l1.943-2.048a.75.75 0 011.114 1.004l-3.25 3.5a.75.75 0 01-1.114 0l-3.25-3.5a.75.75 0 111.114-1.004l1.943 2.048V7h1.5V1.75a.75.75 0 00-1.5 0V7h-3A2.25 2.25 0 004 9.25v7.5A2.25 2.25 0 006.25 19h7.5A2.25 2.25 0 0016 16.75v-7.5A2.25 2.25 0 0013.75 7z"}})]))}}},603:function(e,t,n){n(45),n(36),n(44),n(22),n(56),n(37),n(57);var r=n(466),o=n(467),l=["class","staticClass","style","staticStyle","attrs"];function c(object,e){var t=Object.keys(object);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(object);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(object,e).enumerable}))),t.push.apply(t,n)}return t}n(104),e.exports={functional:!0,render:function(e,t){var n=t._c,data=(t._v,t.data),d=t.children,m=void 0===d?[]:d,f=data.class,y=data.staticClass,style=data.style,v=data.staticStyle,x=data.attrs,O=void 0===x?{}:x,h=o(data,l);return n("svg",function(e){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?c(Object(source),!0).forEach((function(t){r(e,t,source[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(source)):c(Object(source)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(source,t))}))}return e}({class:[f,y],style:[style,v],attrs:Object.assign({xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",fill:"currentColor","aria-hidden":"true"},O)},h),m.concat([n("path",{attrs:{"fill-rule":"evenodd",d:"M8.75 1A2.75 2.75 0 006 3.75v.443c-.795.077-1.584.176-2.365.298a.75.75 0 10.23 1.482l.149-.022.841 10.518A2.75 2.75 0 007.596 19h4.807a2.75 2.75 0 002.742-2.53l.841-10.52.149.023a.75.75 0 00.23-1.482A41.03 41.03 0 0014 4.193V3.75A2.75 2.75 0 0011.25 1h-2.5zM10 4c.84 0 1.673.025 2.5.075V3.75c0-.69-.56-1.25-1.25-1.25h-2.5c-.69 0-1.25.56-1.25 1.25v.325C8.327 4.025 9.16 4 10 4zM8.58 7.72a.75.75 0 00-1.5.06l.3 7.5a.75.75 0 101.5-.06l-.3-7.5zm4.34.06a.75.75 0 10-1.5-.06l-.3 7.5a.75.75 0 101.5.06l.3-7.5z","clip-rule":"evenodd"}})]))}}}}]);