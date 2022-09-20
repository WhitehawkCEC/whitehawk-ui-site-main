(window.webpackJsonp=window.webpackJsonp||[]).push([[292,67,74],{1190:function(t,e,n){"use strict";var r=n(935),o=n(545),l=n(936),c=n(522),d=n(478),m={};m.props={value:{key:"value",required:!0,type:Object}},m.setup=function(t,e){var n=t,o=e.emit;return{proxy:Object(d.b)(n,o),attributes:[{name:"email",label:"Email",component:{is:"BaseInput",attrs:{type:"email",autocomplete:"email"}}},{name:"name",label:"Name",component:{is:"BaseInput",attrs:{autocomplete:"name"}}},{name:"custom:title",label:"Title",component:{is:"BaseInput"}},{name:"phone_number",label:"Phone Number",component:{is:l.a}},{name:"custom:referred_by",label:"Referred by",component:{is:c.a,attrs:{options:[{text:"",value:null},{value:"Self"},{value:"EZShield"},{value:"CSN"},{value:"360 CRS"}]}}},{name:"custom:should_auto_logout",label:"Autologout?",component:{is:c.a,attrs:{options:[{text:"",value:null},{text:"Yes",value:"1"},{text:"No",value:"0"}]}}},{name:"address",label:"Address",component:{is:r.a}}]}},m.components=Object.assign({DynamicForm:o.a},m.components);var f=m,v=n(55),component=Object(v.a)(f,(function(){var t=this,e=t.$createElement;return(t._self._c||e)("DynamicForm",{attrs:{schema:t.attributes},model:{value:t.proxy,callback:function(e){t.proxy=e},expression:"proxy"}})}),[],!1,null,null,null);e.a=component.exports},1378:function(t,e,n){"use strict";var r=n(631),o=n(1190),l=n(935),c=n(545),d=n(936),m=n(522),f=n(478),v={};v.props={value:{key:"value",required:!0,type:Object}},v.setup=function(t,e){var n=t,r=e.emit;return{proxy:Object(f.b)(n,r),attributes:[{name:"name",label:"Name",component:{is:"BaseInput",attrs:{autocomplete:"name"}}},{name:"custom:title",label:"Title",component:{is:"BaseInput"}},{name:"phone_number",label:"Phone Number",component:{is:d.a}},{name:"custom:should_auto_logout",label:"Autologout?",component:{is:m.a,attrs:{options:[{text:"",value:null},{text:"Yes",value:"1"},{text:"No",value:"0"}]}}},{name:"address",label:"Address",component:{is:l.a}}]}},v.components=Object.assign({DynamicForm:c.a},v.components);var y=v,x=n(55),h=Object(x.a)(y,(function(){var t=this,e=t.$createElement;return(t._self._c||e)("DynamicForm",{attrs:{schema:t.attributes},model:{value:t.proxy,callback:function(e){t.proxy=e},expression:"proxy"}})}),[],!1,null,null,null).exports,_=n(767),O=n.n(_),j=n(20),w={};w.props={attributes:{key:"attributes",required:!0,type:Object},isAdmin:{key:"isAdmin",required:!0,type:Boolean}},w.setup=function(t,e){var n=t,r=Object(j.ref)({});Object(j.watch)((function(){return n.attributes}),(function(t){t&&(r.value=O()(t))}),{immediate:!0});var o=e.emit;return{attributesEdit:r,save:function(){o("save",r.value)}}},w.components=Object.assign({CognitoAdminUserAttributesEdit:o.a,CognitoUserAttributesEdit:h,FormButton:r.a},w.components);var C=w,k=Object(x.a)(C,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("section",[n("BaseSimpleCard",{staticClass:"divide-y"},[n("BaseTypography",{staticClass:"p-4",attrs:{component:"h2",variant:"subtitle3"}},[t._v("\n      Personal Information\n    ")]),t._v(" "),n("form",{staticClass:"space-y-2 divide-y",on:{submit:function(e){return e.preventDefault(),t.save.apply(null,arguments)}}},[t.isAdmin?[n("CognitoAdminUserAttributesEdit",{model:{value:t.attributesEdit,callback:function(e){t.attributesEdit=e},expression:"attributesEdit"}})]:[n("CognitoUserAttributesEdit",{model:{value:t.attributesEdit,callback:function(e){t.attributesEdit=e},expression:"attributesEdit"}})],t._v(" "),n("FormButton",{attrs:{action:"update"}})],2)],1)],1)}),[],!1,null,null,null);e.a=k.exports;installComponents(k,{BaseTypography:n(476).default,BaseSimpleCard:n(491).default})},1417:function(t,e,n){"use strict";n.d(e,"a",(function(){return d}));var r=n(10),o=(n(48),n(158)),l=n(197),c="amplify-auth",d={update:function(){var t=Object(l.d)();function e(){return(e=Object(r.a)(regeneratorRuntime.mark((function t(e){var n;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,o.a.currentAuthenticatedUser();case 2:return n=t.sent,t.next=5,o.a.updateUserAttributes(n,e);case 5:return t.abrupt("return",t.sent);case 6:case"end":return t.stop()}}),t)})))).apply(this,arguments)}return Object(l.b)((function(t){return e.apply(this,arguments)}),{onSuccess:function(){t.invalidateQueries([c,"current-user","attributes"],{exact:!0})}})},list:function(){function t(){return(t=Object(r.a)(regeneratorRuntime.mark((function t(){var e;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,o.a.currentAuthenticatedUser();case 2:return e=t.sent,t.abrupt("return",o.a.userAttributes(e));case 4:case"end":return t.stop()}}),t)})))).apply(this,arguments)}return Object(l.c)([c,"current-user","attributes"],(function(){return t.apply(this,arguments)}),{})}}},2286:function(t,e,n){"use strict";n.r(e);var r=n(36),o=n(10),l=(n(48),n(199),n(1378)),c=n(1417),d=n(201),m=n(878),f=n(481),v={setup:function(t,e){var n=Object(f.b)("username"),l=Object(f.d)(),v=c.a.list(),y=c.a.update(),x=Object(d.a)();function h(){return(h=Object(o.a)(regeneratorRuntime.mark((function t(e){var o,c,d,m,f,v;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:for(o={},c=0,d=Object.entries(e);c<d.length;c++)m=Object(r.a)(d[c],2),f=m[0],v=m[1],o[f]=v||"";return t.next=4,y.mutateAsync(o);case 4:x.success("Attributes were saved"),l.push("/profile/".concat(n.value));case 6:case"end":return t.stop()}}),t)})))).apply(this,arguments)}return{attributeListToMap:m.a,attributes:v,save:function(t){return h.apply(this,arguments)}}}};v.components=Object.assign({UserProfileEdit:l.a},v.components);var y=v,x=n(55),component=Object(x.a)(y,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("ClientOnly",[n("BaseVueQuery",{attrs:{query:t.attributes},scopedSlots:t._u([{key:"success",fn:function(e){var data=e.data;return[n("UserProfileEdit",{attrs:{attributes:t.attributeListToMap(data),"is-admin":!1},on:{save:t.save}})]}}])})],1)}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{BaseVueQuery:n(505).default})},476:function(t,e,n){"use strict";n.r(e);var r=n(20),o=Object(r.defineComponent)({inheritAttrs:!1});o.props={variant:{key:"variant",required:!0,type:null},component:{key:"component",required:!1,type:null,default:"span"}},o.setup=function(t,e){var n="antialiased",o={h1:"".concat(n," font-display text-4xl font-semibold leading-snug tracking-wide sm:text-5xl md:text-6xl"),h2:"".concat(n," font-display text-3xl font-semibold leading-9 tracking-normal sm:text-5xl sm:leading-10"),h3:"".concat(n," font-display text-3xl font-medium leading-8 tracking-normal sm:text-4xl sm:leading-10"),h4:"".concat(n," font-display text-2xl font-medium leading-8 tracking-wide sm:text-3xl sm:leading-9"),h5:"".concat(n," font-display text-2xl font-medium leading-6 tracking-normal"),h6:"".concat(n," font-display text-xl font-semibold leading-7 tracking-wide"),p1:"".concat(n," font-body text-base font-normal leading-7 tracking-wide"),p2:"".concat(n," font-body text-sm font-normal leading-6 tracking-normal"),subtitle1:"".concat(n," font-body text-lg font-normal leading-6 tracking-wide sm:text-xl"),subtitle2:"".concat(n," font-body text-xs font-medium leading-5 tracking-wide"),subtitle3:"".concat(n," font-display text-lg font-medium leading-5 tracking-wide"),overline:"".concat(n," font-display text-xs font-medium tracking-widest"),button:"".concat(n," font-body text-xs font-medium tracking-wider sm:text-sm xl:tracking-wide"),data:"".concat(n," font-mono text-xs font-normal tracking-wider sm:text-sm xl:tracking-wide")},l=t;return{displayTypeClass:Object(r.computed)((function(){return o[l.variant]}))}};var l=o,c=n(55),component=Object(c.a)(l,(function(){var t=this,e=t.$createElement;return(t._self._c||e)(t.component,t._g(t._b({tag:"Component",class:t.displayTypeClass},"Component",t.$attrs,!1),t.$listeners),[t._t("default")],2)}),[],!1,null,null,null);e.default=component.exports},490:function(t,e,n){"use strict";n(24),n(159),n(121);var r=n(20),o={props:{definition:{key:"definition",required:!0,type:null}},setup:function(t,e){var n=t,o=Object(r.computed)((function(){return n.definition.icon[0]})),l=Object(r.computed)((function(){return n.definition.icon[1]}));return{svgPathData:Object(r.computed)((function(){return n.definition.icon[4].toString()})),viewBox:Object(r.computed)((function(){return"0 0 ".concat(o.value," ").concat(l.value)}))}}},l=o,c=n(55),component=Object(c.a)(l,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("svg",{attrs:{xmlns:"http://www.w3.org/2000/svg",viewBox:t.viewBox,"aria-hidden":"true",focusable:"false",role:"img"}},[n("path",{attrs:{fill:"currentColor",d:t.svgPathData}})])}),[],!1,null,null,null);e.a=component.exports},493:function(t,e,n){"use strict";var r=n(490),o=n(497),l={setup:function(t,e){return{definition:o.definition}}};l.components=Object.assign({FontAwesomeSvg:r.a},l.components);var c=l,d=n(55),component=Object(d.a)(c,(function(){var t=this,e=t.$createElement;return(t._self._c||e)("FontAwesomeSvg",{staticClass:"h-5 w-5 animate-spin",attrs:{definition:t.definition}})}),[],!1,null,null,null);e.a=component.exports},495:function(t,e,n){"use strict";var r=n(496),o=n(20);n(42);var l={props:{error:{key:"error",required:!0,type:null}}};l.setup=function(t,e){var n=t;return{alert:Object(o.computed)((function(){return"string"==typeof(t=n.error)?{title:"Error",message:t}:t instanceof Error||t instanceof Object&&"name"in t&&"message"in t?{title:t.name,message:t.message}:{title:"Error",message:String(t)};var t}))}},l.components=Object.assign({AlertError:r.a},l.components);var c=l,d=n(55),component=Object(d.a)(c,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("section",[n("AlertError",{scopedSlots:t._u([{key:"title",fn:function(){return[t._v("\n      "+t._s(t.alert.title)+"\n    ")]},proxy:!0},{key:"message",fn:function(){return[t._v("\n      "+t._s(t.alert.message)+"\n    ")]},proxy:!0}])})],1)}),[],!1,null,null,null);e.a=component.exports},496:function(t,e,n){"use strict";var r=n(498),o=n.n(r),l={setup:function(t,e){return{}}};l.components=Object.assign({XCircleSvg:o.a},l.components);var c=l,d=n(55),component=Object(d.a)(c,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"rounded-md bg-red-50 p-4 shadow",attrs:{role:"alert"}},[n("div",{staticClass:"flex space-x-3"},[n("div",{staticClass:"flex-shrink-0"},[n("XCircleSvg",{staticClass:"h-5 w-5 text-red-500"})],1),t._v(" "),n("div",{staticClass:"space-y-2"},[n("h3",{staticClass:"text-sm font-medium leading-5 text-red-800"},[t._t("title")],2),t._v(" "),n("div",{staticClass:"text-sm leading-5 text-red-700"},[t._t("message")],2)])])])}),[],!1,null,null,null);e.a=component.exports},505:function(t,e,n){"use strict";n.r(e);var r=n(495),o=n(493),l={props:{query:{key:"query",required:!0,type:null}},setup:function(t,e){var n=t.query;return{isLoading:n.isLoading,isError:n.isError,error:n.error,data:n.data}}};l.components=Object.assign({LoadingSpinner:o.a,GenericError:r.a},l.components);var c=l,d=n(55),m=Object(d.a)(c,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("ClientOnly",[t.isLoading?[t._t("loading",(function(){return[n("LoadingSpinner")]}))]:t.isError?[t._t("error",(function(){return[n("GenericError",{attrs:{error:t.error}})]}),null,{error:t.error})]:[t._t("success",(function(){return[n("pre",[t._v(t._s(JSON.stringify(t.data,null,2)))])]}),null,{data:t.data})]],2)],1)}),[],!1,null,null,null).exports,f=Object(d.a)(m,undefined,undefined,!1,null,null,null);e.default=f.exports},511:function(t,e,n){"use strict";n.r(e);var r=n(20),o="model-value-change",l={prop:"modelValue",event:o},c=Object(r.defineComponent)({inheritAttrs:!1,model:l});c.props={modelValue:{key:"modelValue",required:!1,type:null,default:void 0},multiple:{key:"multiple",required:!1,type:null,default:!1}},c.setup=function(t,e){var n=t,l=e.emit;return{proxy:Object(r.computed)({get:function(){var t=n.modelValue;return t||(void 0!==n.multiple?[]:void 0)},set:function(t){l(o,t)}})}};var d=c,m=n(55),component=Object(m.a)(d,(function(){var t=this,e=t.$createElement;return(t._self._c||e)("select",t._g(t._b({directives:[{name:"model",rawName:"v-model",value:t.proxy,expression:"proxy"}],staticClass:"block cursor-pointer rounded-md border-gray-300 py-2 pl-3 pr-10 text-sm focus:border-blue-300 focus:outline-none focus:ring focus:ring-blue-200 focus:ring-opacity-50 sm:text-base",attrs:{multiple:t.multiple},on:{change:function(e){var n=Array.prototype.filter.call(e.target.options,(function(t){return t.selected})).map((function(t){return"_value"in t?t._value:t.value}));t.proxy=e.target.multiple?n:n[0]}}},"select",t.$attrs,!1),t.$listeners),[t._t("default")],2)}),[],!1,null,null,null);e.default=component.exports},514:function(t,e,n){"use strict";var r=n(55),component=Object(r.a)({},(function(){var t=this.$createElement,e=this._self._c||t;return e("svg",{staticClass:"h-5 w-5",attrs:{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",fill:"currentColor"}},[e("path",{attrs:{"fill-rule":"evenodd",d:"M10 3a1 1 0 011 1v5h5a1 1 0 110 2h-5v5a1 1 0 11-2 0v-5H4a1 1 0 110-2h5V4a1 1 0 011-1z","clip-rule":"evenodd"}})])}),[],!1,null,null,null);e.a=component.exports},522:function(t,e,n){"use strict";var r=n(478),o=n(20),l={prop:"sModelValue",event:"s-model-value-change"},c=Object(o.defineComponent)({inheritAttrs:!1,model:l});c.props={sModelValue:{key:"sModelValue",required:!1,type:null},options:{key:"options",required:!0,type:Array}},c.setup=function(t,e){var n=t,o=e.emit;return{proxy:Object(r.b)(n,o,l)}};var d=c,m=n(55),component=Object(m.a)(d,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("BaseSelect",t._g(t._b({model:{value:t.proxy,callback:function(e){t.proxy=e},expression:"proxy"}},"BaseSelect",t.$attrs,!1),t.$listeners),t._l(t.options,(function(option){return n("option",{key:option.key||option.text||option.value,domProps:{value:option.value}},[t._v("\n    "+t._s(option.text||option.value)+"\n  ")])})),0)}),[],!1,null,null,null);e.a=component.exports;installComponents(component,{BaseSelect:n(511).default})},631:function(t,e,n){"use strict";var r=n(578),o=n.n(r),l=n(579),c=n.n(l),d=n(514),m=n(20),f={};f.props={action:{key:"action",required:!0,type:null},priority:{key:"priority",required:!1,type:null,default:"primary"},isValidForm:{key:"isValidForm",required:!1,type:Boolean,default:!0}},f.setup=function(t,e){var n={create:{icon:d.a,text:"Create",color:"base"},update:{icon:o.a,text:"Update",color:"base"},delete:{icon:c.a,text:"Delete",color:"danger"}},r=t,l=Object(m.computed)((function(){return n[r.action]}));return{props:r,display:l}};var v=f,y=n(55),component=Object(y.a)(v,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"p-4"},[n("BaseButton",{staticClass:"w-full space-x-1 lg:w-auto",attrs:{action:t.props.priority,"display-type":t.display.color,disabled:!t.isValidForm}},[n(t.display.icon,{tag:"Component",staticClass:"-ml-1 w-4 lg:w-5"}),t._v(" "),n("span",[t._v(t._s(t.display.text))])],1)],1)}),[],!1,null,null,null);e.a=component.exports;installComponents(component,{BaseButton:n(310).default})},878:function(t,e,n){"use strict";n(77),n(24),n(42),n(76),n(51),n(50),n(38),n(74),n(75),n(49);function r(t,e){var n="undefined"!=typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(!n){if(Array.isArray(t)||(n=function(t,e){if(!t)return;if("string"==typeof t)return o(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);"Object"===n&&t.constructor&&(n=t.constructor.name);if("Map"===n||"Set"===n)return Array.from(t);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return o(t,e)}(t))||e&&t&&"number"==typeof t.length){n&&(t=n);var i=0,r=function(){};return{s:r,n:function(){return i>=t.length?{done:!0}:{done:!1,value:t[i++]}},e:function(t){throw t},f:r}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var l,c=!0,d=!1;return{s:function(){n=n.call(t)},n:function(){var t=n.next();return c=t.done,t},e:function(t){d=!0,l=t},f:function(){try{c||null==n.return||n.return()}finally{if(d)throw l}}}}function o(t,e){(null==e||e>t.length)&&(e=t.length);for(var i=0,n=new Array(e);i<e;i++)n[i]=t[i];return n}e.a=function(t){var e,n={},o=r(t);try{for(o.s();!(e=o.n()).done;){var l=e.value,c=l.Name,d=l.Value;c&&d&&(n[c]=d)}}catch(t){o.e(t)}finally{o.f()}return n}},935:function(t,e,n){"use strict";var r=n(1004),o=n(20),l={};l.props={value:{key:"value",required:!1,type:String}},l.setup=function(t,e){var n=t,r=e.emit;return{proxy:Object(o.computed)({get:function(){return n.value?JSON.parse(n.value):{}},set:function(t){r("input",JSON.stringify(t))}})}},l.components=Object.assign({AddressClaimInput:r.a},l.components);var c=l,d=n(55),component=Object(d.a)(c,(function(){var t=this,e=t.$createElement;return(t._self._c||e)("AddressClaimInput",{model:{value:t.proxy,callback:function(e){t.proxy=e},expression:"proxy"}})}),[],!1,null,null,null);e.a=component.exports},936:function(t,e,n){"use strict";var r=n(2074),o=n(20),l=n(1149),c=n.n(l),d=(n(1150),{});d.props={value:{key:"value",required:!1,type:String,default:""}},d.setup=function(t,e){var n=t,l=e.emit,c=Object(o.ref)(),d=Object(o.ref)(""),m=Object(o.computed)((function(){return c.value||f.value})),f=Object(o.computed)((function(){if(!v.value)return null;var t=v.value,e=t.country,n=t.countryCallingCode,r=t.metadata;return e||r.country_calling_codes[n][0]})),v=Object(o.computed)((function(){return null!==n.value&&n.value.length>0?Object(r.a)(n.value):null}));return Object(o.watch)((function(){return v.value}),(function(t){d.value=t?t.formatNational():""}),{immediate:!0}),{phoneLocalFormat:d,defaultCountryCode:m,updatePhoneNumber:function(t){var e=t.e164,n=t.countryCode;c.value=n,l("input",e||"")}}},d.components=Object.assign({VuePhoneNumberInput:c.a},d.components);var m=d,f=n(55),component=Object(f.a)(m,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("ClientOnly",[n("VuePhoneNumberInput",{attrs:{"default-country-code":t.defaultCountryCode},on:{update:t.updatePhoneNumber},model:{value:t.phoneLocalFormat,callback:function(e){t.phoneLocalFormat=e},expression:"phoneLocalFormat"}})],1)],1)}),[],!1,null,null,null);e.a=component.exports}}]);