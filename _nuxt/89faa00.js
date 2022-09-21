(window.webpackJsonp=window.webpackJsonp||[]).push([[175,59,68],{1009:function(e,t,n){"use strict";var r=n(735),o=Object(r.a)([{label:"Annual",name:"annual",component:{is:"BaseInput",attrs:{type:"number",min:0}}},{label:"One Time",name:"oneTime",component:{is:"BaseInput",attrs:{type:"number",min:0}}}]),c=n(55),component=Object(c.a)(o,undefined,undefined,!1,null,null,null);t.a=component.exports},1172:function(e,t,n){"use strict";n.d(t,"a",(function(){return j}));n(47),n(38),n(46),n(63),n(39),n(64);var r=n(28),o=n(10),c=(n(24),n(49),n(48),n(1342)),l=n(197),f=n(471),v=n(472),d=n(473);function m(object,e){var t=Object.keys(object);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(object);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(object,e).enumerable}))),t.push.apply(t,n)}return t}function y(e){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?m(Object(source),!0).forEach((function(t){Object(r.a)(e,t,source[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(source)):m(Object(source)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(source,t))}))}return e}var O=new c.ServiceClient(d.a),j={create:function(e,t,n){var r=Object(v.a)(),c=Object(l.d)();function d(){return(d=Object(o.a)(regeneratorRuntime.mark((function o(c){return regeneratorRuntime.wrap((function(o){for(;;)switch(o.prev=o.next){case 0:return o.next=2,O.create(y({accountId:{value:e.value},subscriptionId:{value:t.value},productId:{value:n.value}},c),r.value);case 2:return o.abrupt("return",o.sent);case 3:case"end":return o.stop()}}),o)})))).apply(this,arguments)}return Object(l.b)((function(e){return d.apply(this,arguments)}),{onSuccess:function(){c.invalidateQueries([f.a,"accounts",e,"subscriptions",t,"products",n,"license-batches"],{exact:!0})}})},read:function(e,t,n,r){var c=Object(v.a)();function d(){return(d=Object(o.a)(regeneratorRuntime.mark((function o(){var l,f;return regeneratorRuntime.wrap((function(o){for(;;)switch(o.prev=o.next){case 0:return o.next=2,O.read({accountId:{value:e.value},subscriptionId:{value:t.value},productId:{value:n.value},batchId:{value:r.value}},c.value);case 2:return l=o.sent,f=l.response,o.abrupt("return",f);case 5:case"end":return o.stop()}}),o)})))).apply(this,arguments)}return Object(l.c)([f.a,"accounts",e,"subscriptions",t,"products",n,"license-batches",r],(function(){return d.apply(this,arguments)}))},list:function(e,t,n){var r=Object(v.a)();function c(){return(c=Object(o.a)(regeneratorRuntime.mark((function o(){var c,l;return regeneratorRuntime.wrap((function(o){for(;;)switch(o.prev=o.next){case 0:return o.next=2,O.list({accountId:{value:e.value},subscriptionId:{value:t.value},productId:{value:n.value}},r.value);case 2:return c=o.sent,l=c.response,o.abrupt("return",l.values);case 5:case"end":return o.stop()}}),o)})))).apply(this,arguments)}return Object(l.c)([f.a,"accounts",e,"subscriptions",t,"products",n,"license-batches"],(function(){return c.apply(this,arguments)}))}}},2280:function(e,t,n){"use strict";n.r(t);var r=n(10),o=(n(48),n(121),n(514)),c=n(520),l=n(1009),f=n(20),v=n(1172),d=n(482),m={setup:function(e,t){var n=Object(d.b)("id"),c=Object(d.b)("subscriptionId"),l=Object(d.b)("productId"),m=Object(d.d)(),y=Object(f.ref)({annual:0,oneTime:0}),O=v.a.create(n,c,l),j=Object(f.computed)((function(){return"/admin/companies/".concat(n.value,"/subscriptions/").concat(c.value,"/products/").concat(l.value,"/license-batches")}));function x(){return(x=Object(r.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,O.mutateAsync({quantities:y.value});case 2:m.push(j.value);case 3:case"end":return e.stop()}}),e)})))).apply(this,arguments)}return{PlusSvg:o.a,quantities:y,backLink:j,submit:function(){return x.apply(this,arguments)}}}};m.components=Object.assign({BackButton:c.a,LicenseTypeMapQuantitiesInput:l.a},m.components);var y=m,O=n(55),component=Object(O.a)(y,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("section",{staticClass:"space-y-4"},[n("BackButton",{attrs:{link:e.backLink}}),e._v(" "),n("BaseSimpleCard",{staticClass:"divide-y"},[n("h2",{staticClass:"p-4 font-display text-lg font-semibold"},[e._v("Add License Batch")]),e._v(" "),n("form",{staticClass:"divide-y",on:{submit:function(t){return t.preventDefault(),e.submit.apply(null,arguments)}}},[n("LicenseTypeMapQuantitiesInput",{model:{value:e.quantities,callback:function(t){e.quantities=t},expression:"quantities"}}),e._v(" "),n("div",{staticClass:"p-4"},[n("div",{staticClass:"md:inline-flex"},[n("BaseButton",{staticClass:"w-full md:w-auto",attrs:{"display-type":"info",svg:e.PlusSvg}},[e._v("\n            Create License Batch\n          ")])],1)])],1)])],1)}),[],!1,null,null,null);t.default=component.exports;installComponents(component,{BaseButton:n(310).default,BaseSimpleCard:n(492).default})},471:function(e,t,n){"use strict";n.d(t,"a",(function(){return r}));var r="client-portal"},472:function(e,t,n){"use strict";n.d(t,"a",(function(){return l}));var r=n(28),o=n(20),c=n(500);function l(){var e=Object(c.a)();return Object(o.computed)((function(){if(e.value)return{meta:Object(r.a)({},"jwt",e.value)}}))}},473:function(e,t,n){"use strict";n.d(t,"a",(function(){return c}));var r=n(2302),o=n(198),c=new r.a({baseUrl:o.b,format:"binary"})},474:function(e,t){e.exports=function(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e},e.exports.__esModule=!0,e.exports.default=e.exports},475:function(e,t,n){var r=n(491);e.exports=function(source,e){if(null==source)return{};var t,i,n=r(source,e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(source);for(i=0;i<o.length;i++)t=o[i],e.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(source,t)&&(n[t]=source[t])}return n},e.exports.__esModule=!0,e.exports.default=e.exports},478:function(e,t,n){"use strict";n.d(t,"b",(function(){return y})),n.d(t,"c",(function(){return O})),n.d(t,"a",(function(){return j}));n(47),n(38),n(46),n(24),n(63),n(39),n(64);var r=n(36),o=n(104),c=n(28),l=(n(199),n(20));function f(object,e){var t=Object.keys(object);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(object);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(object,e).enumerable}))),t.push.apply(t,n)}return t}function v(e){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?f(Object(source),!0).forEach((function(t){Object(c.a)(e,t,source[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(source)):f(Object(source)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(source,t))}))}return e}var d=!0,m={prop:"value",event:"input"};function y(e,t){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:m,r=n.prop,o=n.event;return Object(l.computed)({get:function(){return e[r]},set:function(e){t(o,e)}})}function O(e,t){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:m,r=n.prop,o=n.event;return Object(l.computed)((function(){var n={},c=e[r]||{};return new Proxy(c,{get:function(e,t){return e[t]},set:function(e,r,c){return n[r]=c,t(o,v(v({},e),n)),d}})}))}function j(e,t){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:m,c=n.prop,f=n.event;return Object(l.computed)((function(){var n={},l=e[c]||[];return new Proxy(l,{get:function(e,t){return e[t]},set:function(e,c,l){if(e[c]===l)return d;var v=Object(o.a)(e);n[c]=l;for(var m=0,y=Object.entries(n);m<y.length;m++){var O=Object(r.a)(y[m],2),j=O[0],x=O[1];v[j]=x}return t(f,v),d}})}))}},482:function(e,t,n){"use strict";n.d(t,"a",(function(){return f})),n.d(t,"d",(function(){return v})),n.d(t,"b",(function(){return d})),n.d(t,"c",(function(){return m}));var r=n(28),o=(n(84),n(50),n(103),n(47),n(38),n(46),n(24),n(63),n(39),n(64),n(20));function c(object,e){var t=Object.keys(object);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(object);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(object,e).enumerable}))),t.push.apply(t,n)}return t}function l(e){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?c(Object(source),!0).forEach((function(t){Object(r.a)(e,t,source[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(source)):c(Object(source)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(source,t))}))}return e}function f(){var e=Object(o.getCurrentInstance)();if(!e)throw new Error("Not in setup()?");return Object(o.computed)((function(){return e.proxy.$route}))}function v(){var e=Object(o.getCurrentInstance)();if(!e)throw new Error("Not in setup()?");return e.proxy.$router}function d(e){var t=f();return Object(o.computed)((function(){var n=t.value.params[e];if(!n)throw new Error("Missing param: ".concat(e));return n}))}function m(e,t){var n,c=f(),d=v();return Object(o.computed)({get:function(){return c.value.query[e]||t},set:function(t){clearTimeout(n),n=setTimeout((function(){d.replace({query:l(l({},c.value.query),{},Object(r.a)({},e,t))})}),300)}})}},488:function(e,t,n){"use strict";n.r(t);var r=n(20),o=Object(r.defineComponent)({inheritAttrs:!1}),c=n(55),component=Object(c.a)(o,(function(){var e=this,t=e.$createElement;return(e._self._c||t)("label",e._g(e._b({staticClass:"block font-body text-sm font-medium leading-5 tracking-wide text-gray-600 antialiased",attrs:{role:"label"}},"label",e.$attrs,!1),e.$listeners),[e._t("default")],2)}),[],!1,null,null,null);t.default=component.exports},491:function(e,t){e.exports=function(source,e){if(null==source)return{};var t,i,n={},r=Object.keys(source);for(i=0;i<r.length;i++)t=r[i],e.indexOf(t)>=0||(n[t]=source[t]);return n},e.exports.__esModule=!0,e.exports.default=e.exports},492:function(e,t,n){"use strict";n.r(t);var r=n(55),component=Object(r.a)({},(function(){var e=this,t=e.$createElement;return(e._self._c||t)("div",{staticClass:"rounded-xl bg-white shadow"},[e._t("default")],2)}),[],!1,null,null,null);t.default=component.exports},500:function(e,t,n){"use strict";n.d(t,"a",(function(){return c}));var r=n(20),o=n(122);function c(){var e=Object(o.a)();return Object(r.computed)((function(){return e.accessToken}))}},510:function(e,t,n){n(47),n(38),n(46),n(24),n(63),n(39),n(64);var r=n(474),o=n(475),c=["class","staticClass","style","staticStyle","attrs"];function l(object,e){var t=Object.keys(object);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(object);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(object,e).enumerable}))),t.push.apply(t,n)}return t}n(121),e.exports={functional:!0,render:function(e,t){var n=t._c,data=(t._v,t.data),f=t.children,v=void 0===f?[]:f,d=data.class,m=data.staticClass,style=data.style,y=data.staticStyle,O=data.attrs,j=void 0===O?{}:O,x=o(data,c);return n("svg",function(e){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?l(Object(source),!0).forEach((function(t){r(e,t,source[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(source)):l(Object(source)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(source,t))}))}return e}({class:[d,m],style:[style,y],attrs:Object.assign({xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",fill:"currentColor","aria-hidden":"true"},j)},x),v.concat([n("path",{attrs:{"fill-rule":"evenodd",d:"M12.79 5.23a.75.75 0 01-.02 1.06L8.832 10l3.938 3.71a.75.75 0 11-1.04 1.08l-4.5-4.25a.75.75 0 010-1.08l4.5-4.25a.75.75 0 011.06.02z","clip-rule":"evenodd"}})]))}}},514:function(e,t,n){"use strict";var r=n(55),component=Object(r.a)({},(function(){var e=this.$createElement,t=this._self._c||e;return t("svg",{staticClass:"h-5 w-5",attrs:{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",fill:"currentColor"}},[t("path",{attrs:{"fill-rule":"evenodd",d:"M10 3a1 1 0 011 1v5h5a1 1 0 110 2h-5v5a1 1 0 11-2 0v-5H4a1 1 0 110-2h5V4a1 1 0 011-1z","clip-rule":"evenodd"}})])}),[],!1,null,null,null);t.a=component.exports},520:function(e,t,n){"use strict";var r=n(510),o=n.n(r),c={};c.props={link:{key:"link",required:!1,type:null,default:"."},text:{key:"text",required:!1,type:String,default:"Back"}},c.setup=function(e,t){return{}},c.components=Object.assign({ChevronLeftSvg:o.a},c.components);var l=c,f=n(55),component=Object(f.a)(l,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[e.link?n("BaseButton",{attrs:{shape:"rectangle","display-type":"light",size:"even",to:e.link}},[n("ChevronLeftSvg",{staticClass:"-ml-1 h-auto w-5"}),e._v(" "),n("span",[e._v(e._s(e.text))])],1):n("BaseButton",{attrs:{shape:"rectangle","display-type":"light",size:"even",to:e.link,append:""}},[n("ChevronLeftSvg",{staticClass:"-ml-1 h-auto w-5"}),e._v(" "),n("span",[e._v(e._s(e.text))])],1)],1)}),[],!1,null,null,null);t.a=component.exports;installComponents(component,{BaseButton:n(310).default})},547:function(e,t,n){"use strict";var r=n(478),o=n(20),c={prop:"modelValue",event:"update:modelValue"},l=Object(o.defineComponent)({model:c});l.props={modelValue:{key:"modelValue",required:!1,type:null},component:{key:"component",required:!0,type:null}},l.setup=function(e,t){var n=e,o=t.emit;return{proxy:Object(r.b)(n,o,c)}};var f=l,v=n(55),d=Object(v.a)(f,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",["input"===e.component.is?["checkbox"===e.component.attrs.type?n("input",e._b({directives:[{name:"model",rawName:"v-model",value:e.proxy,expression:"proxy"}],attrs:{type:"checkbox"},domProps:{checked:Array.isArray(e.proxy)?e._i(e.proxy,null)>-1:e.proxy},on:{change:function(t){var n=e.proxy,r=t.target,o=!!r.checked;if(Array.isArray(n)){var c=e._i(n,null);r.checked?c<0&&(e.proxy=n.concat([null])):c>-1&&(e.proxy=n.slice(0,c).concat(n.slice(c+1)))}else e.proxy=o}}},"input",e.component.attrs,!1)):"radio"===e.component.attrs.type?n("input",e._b({directives:[{name:"model",rawName:"v-model",value:e.proxy,expression:"proxy"}],attrs:{type:"radio"},domProps:{checked:e._q(e.proxy,null)},on:{change:function(t){e.proxy=null}}},"input",e.component.attrs,!1)):n("input",e._b({directives:[{name:"model",rawName:"v-model",value:e.proxy,expression:"proxy"}],attrs:{type:e.component.attrs.type},domProps:{value:e.proxy},on:{input:function(t){t.target.composing||(e.proxy=t.target.value)}}},"input",e.component.attrs,!1))]:"select"===e.component.is?[n("select",e._b({directives:[{name:"model",rawName:"v-model",value:e.proxy,expression:"proxy"}],on:{change:function(t){var n=Array.prototype.filter.call(t.target.options,(function(e){return e.selected})).map((function(e){return"_value"in e?e._value:e.value}));e.proxy=t.target.multiple?n:n[0]}}},"select",e.component.attrs,!1))]:"textarea"===e.component.is?[n("textarea",e._b({directives:[{name:"model",rawName:"v-model",value:e.proxy,expression:"proxy"}],domProps:{value:e.proxy},on:{input:function(t){t.target.composing||(e.proxy=t.target.value)}}},"textarea",e.component.attrs,!1))]:[n(e.component.is,e._b({tag:"Component",model:{value:e.proxy,callback:function(t){e.proxy=t},expression:"proxy"}},"Component",e.component.attrs,!1))]],2)}),[],!1,null,null,null).exports,m={props:{value:{key:"value",required:!1,type:null},schema:{key:"schema",required:!0,type:null}},setup:function(e,t){var n=e,c=t.emit;return{proxy:Object(r.b)(n,c),isRequired:Object(o.computed)((function(){var e,t;return null===(e=n.schema.component)||void 0===e||null===(t=e.attrs)||void 0===t?void 0:t.required}))}}};m.components=Object.assign({DynamicComponent:d},m.components);var y=m,O=Object(v.a)(y,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("BaseLabel",{staticClass:"grid grid-cols-1 gap-1 sm:grid-cols-3 sm:items-center sm:gap-4"},[n("span",[e._v("\n    "+e._s(e.schema.label)+"\n    "),e.isRequired?n("span",{staticClass:"text-red-700"},[e._v("*")]):e._e()]),e._v(" "),n("DynamicComponent",{staticClass:"flex flex-col sm:col-span-2",attrs:{component:e.schema.component},model:{value:e.proxy,callback:function(t){e.proxy=t},expression:"proxy"}})],1)}),[],!1,null,null,null),j=O.exports;installComponents(O,{BaseLabel:n(488).default});var x={props:{value:{key:"value",required:!1,type:null},schema:{key:"schema",required:!0,type:null}},setup:function(e,t){var n=e,o=t.emit;return{proxy:Object(r.c)(n,o)}}};x.components=Object.assign({DynamicFormInputGroup:j},x.components);var h=x,w=Object(v.a)(h,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"flex flex-col space-y-6 sm:space-y-0 sm:divide-y"},e._l(e.schema,(function(t){return n("div",{key:t.name,staticClass:"min-w-0 p-4"},[n("DynamicFormInputGroup",{staticClass:"h-full",attrs:{schema:t},model:{value:e.proxy[t.name],callback:function(n){e.$set(e.proxy,t.name,n)},expression:"proxy[field.name]"}})],1)})),0)}),[],!1,null,null,null);t.a=w.exports},735:function(e,t,n){"use strict";n.d(t,"a",(function(){return l}));var r=n(547),o=n(20),c={value:{type:Object}};function l(e){return Object(o.defineComponent)({props:c,render:function(t){return t(r.a,{props:{value:this.value,schema:e},attrs:this.$attrs,on:this.$listeners})}})}}}]);