(window.webpackJsonp=window.webpackJsonp||[]).push([[279,65,71],{1324:function(t,e,n){"use strict";var r={};r.props={attributes:{key:"attributes",required:!0,type:Array}},r.setup=function(t,e){return{}};var o=r,c=n(55),component=Object(c.a)(o,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("dl",{staticClass:"xl: grid gap-4 lg:grid-cols-2 lg:gap-6 xl:grid-cols-3"},t._l(t.attributes,(function(e){return n("div",{key:e.title,class:"grid lg:col-span-"+e.width},[n("div",{staticClass:"flex items-start space-x-2"},[n("div",{staticClass:"rounded-full p-1"},[n(e.icon,{tag:"Component",staticClass:"h-auto w-5 shrink-0 text-teal-600"})],1),t._v(" "),n("div",{staticClass:"flex flex-col"},[n("dt",{staticClass:"font-medium text-gray-500"},[n("BaseTypography",{attrs:{variant:"p2"}},[t._v("\n            "+t._s(e.title)+"\n          ")])],1),t._v(" "),n("dd",{staticClass:"font-medium text-gray-900"},[n("BaseTypography",{attrs:{variant:"p1"}},[t._v("\n            "+t._s(e.description)+"\n          ")])],1)])])])})),0)}),[],!1,null,null,null);e.a=component.exports;installComponents(component,{BaseTypography:n(471).default})},1331:function(t,e,n){"use strict";n.d(e,"a",(function(){return f}));var r=n(11),o=(n(53),n(163)),c=n(200),l="amplify-auth",f={update:function(){var t=Object(c.d)();function e(){return(e=Object(r.a)(regeneratorRuntime.mark((function t(e){var n;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,o.a.currentAuthenticatedUser();case 2:return n=t.sent,t.next=5,o.a.updateUserAttributes(n,e);case 5:return t.abrupt("return",t.sent);case 6:case"end":return t.stop()}}),t)})))).apply(this,arguments)}return Object(c.b)((function(t){return e.apply(this,arguments)}),{onSuccess:function(){t.invalidateQueries([l,"current-user","attributes"],{exact:!0})}})},list:function(){function t(){return(t=Object(r.a)(regeneratorRuntime.mark((function t(){var e;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,o.a.currentAuthenticatedUser();case 2:return e=t.sent,t.abrupt("return",o.a.userAttributes(e));case 4:case"end":return t.stop()}}),t)})))).apply(this,arguments)}return Object(c.c)([l,"current-user","attributes"],(function(){return t.apply(this,arguments)}),{})}}},2058:function(t,e,n){"use strict";n.r(e);n(338);var r=n(1357),o=n.n(r),c=n(1176),l=n.n(c),f=n(1108),d=n.n(f),m=n(1177),v=n.n(m),y=n(1358),x=n.n(y),h=n(816),_=n(1324),O={};O.props={attributes:{key:"attributes",required:!0,type:Object}},O.setup=function(t,e){var n=t;return{formattedAttributes:[{title:"Phone",description:n.attributes.phone_number,icon:x.a,width:1},{title:"Email",description:n.attributes.email,icon:l.a,width:1},{title:"Location",description:function(address){if(address)return JSON.parse(address).locality+", "+JSON.parse(address).region}(n.attributes.address),icon:v.a,width:1},{title:"Referred By",description:n.attributes["custom:referred_by"],icon:o.a,width:1},{title:"User ID",description:n.attributes.sub,icon:d.a,width:2}]}},O.components=Object.assign({GravatarImg:h.a,UserProfileAttributeListDisplay:_.a},O.components);var w=O,j=n(55),component=Object(j.a)(w,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"divide-y"},[n("div",{staticClass:"flex flex-col overflow-x-auto"},[n("div",{staticClass:"flex flex-col items-center justify-center space-y-3 p-4 text-center lg:flex-row lg:items-start lg:justify-start lg:space-y-0 lg:space-x-6 lg:text-left"},[t.attributes.email?n("GravatarImg",{staticClass:"h-28 w-28 shrink-0 rounded-full lg:h-16 lg:w-16",attrs:{email:t.attributes.email}}):t._e(),t._v(" "),t.attributes.name?[n("div",{staticClass:"flex flex-col"},[n("BaseTypography",{attrs:{component:"h2",variant:"h6"}},[t._v("\n            "+t._s(t.attributes.name)+"\n          ")]),t._v(" "),t.attributes["custom:title"]?[n("BaseTypography",{staticClass:"text-gray-500",attrs:{variant:"p2"}},[t._v("\n              "+t._s(t.attributes["custom:title"])+"\n            ")])]:t._e()],2)]:[n("BaseTypography",{attrs:{component:"h2",variant:"h6"}},[t._v("\n          "+t._s(t.attributes.email)+"\n        ")])]],2),t._v(" "),n("div",{staticClass:"p-4"},[n("UserProfileAttributeListDisplay",{attrs:{attributes:t.formattedAttributes}})],1)])])}),[],!1,null,null,null),C=component.exports;installComponents(component,{BaseTypography:n(471).default});var k=n(1331),E=n(883),S=n(479),B={setup:function(t,e){var n=Object(S.b)("username"),r=k.a.list();return{attributeListToMap:E.a,username:n,attributes:r}}};B.components=Object.assign({CurrentUserProfile:C},B.components);var A=B,P=Object(j.a)(A,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("section",[n("BaseSimpleCard",{staticClass:"divide-y"},[n("div",{staticClass:"flex flex-col p-4"},[n("BaseTypography",{attrs:{component:"h2",variant:"subtitle3"}},[t._v("\n        Profile\n      ")]),t._v(" "),n("BaseTypography",{staticClass:"text-gray-500",attrs:{variant:"subtitle2"}},[t._v("\n        This information is not displayed publicly.\n      ")])],1),t._v(" "),n("BaseVueQuery",{attrs:{query:t.attributes},scopedSlots:t._u([{key:"success",fn:function(e){var data=e.data;return[n("CurrentUserProfile",{attrs:{attributes:t.attributeListToMap(data)}})]}}])}),t._v(" "),n("div",{staticClass:"p-4"},[n("BaseButton",{attrs:{to:"/profile/"+t.username+"/settings","display-type":"info"}},[t._v("\n        Edit Profile\n      ")])],1)],1)],1)}),[],!1,null,null,null);e.default=P.exports;installComponents(P,{BaseTypography:n(471).default,BaseVueQuery:n(501).default,BaseButton:n(306).default,BaseSimpleCard:n(490).default})},471:function(t,e,n){"use strict";n.r(e);var r=n(18),o=Object(r.defineComponent)({inheritAttrs:!1});o.props={variant:{key:"variant",required:!0,type:null},component:{key:"component",required:!1,type:null,default:"span"}},o.setup=function(t,e){var n="antialiased",o={h1:"".concat(n," font-display text-4xl font-semibold leading-snug tracking-wide sm:text-5xl md:text-6xl"),h2:"".concat(n," font-display text-3xl font-semibold leading-9 tracking-normal sm:text-5xl sm:leading-10"),h3:"".concat(n," font-display text-3xl font-medium leading-8 tracking-normal sm:text-4xl sm:leading-10"),h4:"".concat(n," font-display text-2xl font-medium leading-8 tracking-wide sm:text-3xl sm:leading-9"),h5:"".concat(n," font-display text-2xl font-medium leading-6 tracking-normal"),h6:"".concat(n," font-display text-xl font-semibold leading-7 tracking-wide"),p1:"".concat(n," font-body text-base font-normal leading-7 tracking-wide"),p2:"".concat(n," font-body text-sm font-normal leading-6 tracking-normal"),subtitle1:"".concat(n," font-body text-lg font-normal leading-6 tracking-wide sm:text-xl"),subtitle2:"".concat(n," font-body text-xs font-medium leading-5 tracking-wide"),subtitle3:"".concat(n," font-display text-lg font-medium leading-5 tracking-wide"),overline:"".concat(n," font-display text-xs font-medium tracking-widest"),button:"".concat(n," font-body text-xs font-medium tracking-wider sm:text-sm xl:tracking-wide")},c=t;return{displayTypeClass:Object(r.computed)((function(){return o[c.variant]}))}};var c=o,l=n(55),component=Object(l.a)(c,(function(){var t=this,e=t.$createElement;return(t._self._c||e)(t.component,t._g(t._b({tag:"Component",class:t.displayTypeClass},"Component",t.$attrs,!1),t.$listeners),[t._t("default")],2)}),[],!1,null,null,null);e.default=component.exports},479:function(t,e,n){"use strict";n.d(e,"b",(function(){return d})),n.d(e,"c",(function(){return m}));var r=n(26),o=(n(85),n(46),n(106),n(45),n(36),n(44),n(22),n(56),n(37),n(57),n(66)),c=n(18);function l(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(object);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,n)}return e}function f(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?l(Object(source),!0).forEach((function(e){Object(r.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):l(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}function d(t){var e=Object(o.g)();return Object(c.computed)((function(){var n=e.value.params[t];if(!n)throw new Error("Missing param: ".concat(t));return n}))}function m(t,e){var n,l=Object(o.g)(),d=Object(o.h)();return Object(c.computed)({get:function(){return l.value.query[t]||e},set:function(e){clearTimeout(n),n=setTimeout((function(){d.replace({query:f(f({},l.value.query),{},Object(r.a)({},t,e))})}),300)}})}n.d(e,"a",(function(){return o.g})),n.d(e,"d",(function(){return o.h}))},488:function(t,e,n){"use strict";n(22),n(122),n(104);var r=n(18),o={props:{definition:{key:"definition",required:!0,type:null}},setup:function(t,e){var n=t,o=Object(r.computed)((function(){return n.definition.icon[0]})),c=Object(r.computed)((function(){return n.definition.icon[1]}));return{svgPathData:Object(r.computed)((function(){return n.definition.icon[4].toString()})),viewBox:Object(r.computed)((function(){return"0 0 ".concat(o.value," ").concat(c.value)}))}}},c=o,l=n(55),component=Object(l.a)(c,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("svg",{attrs:{xmlns:"http://www.w3.org/2000/svg",viewBox:t.viewBox,"aria-hidden":"true",focusable:"false",role:"img"}},[n("path",{attrs:{fill:"currentColor",d:t.svgPathData}})])}),[],!1,null,null,null);e.a=component.exports},489:function(t,e,n){"use strict";var r=n(488),o=n(493),c={setup:function(t,e){return{definition:o.definition}}};c.components=Object.assign({FontAwesomeSvg:r.a},c.components);var l=c,f=n(55),component=Object(f.a)(l,(function(){var t=this,e=t.$createElement;return(t._self._c||e)("FontAwesomeSvg",{staticClass:"h-5 w-5 animate-spin",attrs:{definition:t.definition}})}),[],!1,null,null,null);e.a=component.exports},490:function(t,e,n){"use strict";n.r(e);var r=n(55),component=Object(r.a)({},(function(){var t=this,e=t.$createElement;return(t._self._c||e)("div",{staticClass:"rounded-xl bg-white shadow"},[t._t("default")],2)}),[],!1,null,null,null);e.default=component.exports},491:function(t,e,n){"use strict";var r=n(495),o=n.n(r),c={setup:function(t,e){return{}}};c.components=Object.assign({XCircleSvg:o.a},c.components);var l=c,f=n(55),component=Object(f.a)(l,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"rounded-md bg-red-50 p-4 shadow",attrs:{role:"alert"}},[n("div",{staticClass:"flex space-x-3"},[n("div",{staticClass:"flex-shrink-0"},[n("XCircleSvg",{staticClass:"h-5 w-5 text-red-500"})],1),t._v(" "),n("div",{staticClass:"space-y-2"},[n("h3",{staticClass:"text-sm font-medium leading-5 text-red-800"},[t._t("title")],2),t._v(" "),n("div",{staticClass:"text-sm leading-5 text-red-700"},[t._t("message")],2)])])])}),[],!1,null,null,null);e.a=component.exports},494:function(t,e,n){"use strict";var r=n(491),o=n(18);n(41);var c={props:{error:{key:"error",required:!0,type:null}}};c.setup=function(t,e){var n=t;return{alert:Object(o.computed)((function(){return"string"==typeof(t=n.error)?{title:"Error",message:t}:t instanceof Error||t instanceof Object&&"name"in t&&"message"in t?{title:t.name,message:t.message}:{title:"Error",message:String(t)};var t}))}},c.components=Object.assign({AlertError:r.a},c.components);var l=c,f=n(55),component=Object(f.a)(l,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("section",[n("AlertError",{scopedSlots:t._u([{key:"title",fn:function(){return[t._v("\n      "+t._s(t.alert.title)+"\n    ")]},proxy:!0},{key:"message",fn:function(){return[t._v("\n      "+t._s(t.alert.message)+"\n    ")]},proxy:!0}])})],1)}),[],!1,null,null,null);e.a=component.exports},501:function(t,e,n){"use strict";n.r(e);var r=n(494),o=n(489),c={props:{query:{key:"query",required:!0,type:null}},setup:function(t,e){var n=t.query;return{isLoading:n.isLoading,isError:n.isError,error:n.error,data:n.data}}};c.components=Object.assign({LoadingSpinner:o.a,GenericError:r.a},c.components);var l=c,f=n(55),d=Object(f.a)(l,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[t.isLoading?[t._t("loading",(function(){return[n("LoadingSpinner")]}))]:t.isError?[t._t("error",(function(){return[n("GenericError",{attrs:{error:t.error}})]}),null,{error:t.error})]:[t._t("success",(function(){return[n("pre",[t._v(t._s(JSON.stringify(t.data,null,2)))])]}),null,{data:t.data})]],2)}),[],!1,null,null,null).exports,m=Object(f.a)(d,undefined,undefined,!1,null,null,null);e.default=m.exports},816:function(t,e,n){"use strict";n(696),n(22),n(48),n(47),n(307),n(104);var r=n(818),o=n.n(r),c=n(18),l=Object(c.defineComponent)({inheritAttrs:!1});l.props={email:{key:"email",required:!0,type:String},defaultImg:{key:"defaultImg",required:!1,type:String,default:"retro"}},l.setup=function(t,e){var n=t;return{url:Object(c.computed)((function(){var t=n.email?o()(n.email.trim().toLowerCase()):"",e=new URLSearchParams({d:n.defaultImg});return"https://www.gravatar.com/avatar/".concat(t,"?").concat(e)}))}};var f=l,d=n(55),component=Object(d.a)(f,(function(){var t=this,e=t.$createElement;return(t._self._c||e)("img",t._g(t._b({attrs:{src:t.url,alt:"User avatar"}},"img",t.$attrs,!1),t.$listeners))}),[],!1,null,null,null);e.a=component.exports},883:function(t,e,n){"use strict";n(69),n(22),n(41),n(70),n(48),n(46),n(36),n(67),n(68),n(47);function r(t,e){var n="undefined"!=typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(!n){if(Array.isArray(t)||(n=function(t,e){if(!t)return;if("string"==typeof t)return o(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);"Object"===n&&t.constructor&&(n=t.constructor.name);if("Map"===n||"Set"===n)return Array.from(t);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return o(t,e)}(t))||e&&t&&"number"==typeof t.length){n&&(t=n);var i=0,r=function(){};return{s:r,n:function(){return i>=t.length?{done:!0}:{done:!1,value:t[i++]}},e:function(t){throw t},f:r}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var c,l=!0,f=!1;return{s:function(){n=n.call(t)},n:function(){var t=n.next();return l=t.done,t},e:function(t){f=!0,c=t},f:function(){try{l||null==n.return||n.return()}finally{if(f)throw c}}}}function o(t,e){(null==e||e>t.length)&&(e=t.length);for(var i=0,n=new Array(e);i<e;i++)n[i]=t[i];return n}e.a=function(t){var e,n={},o=r(t);try{for(o.s();!(e=o.n()).done;){var c=e.value,l=c.Name,f=c.Value;l&&f&&(n[l]=f)}}catch(t){o.e(t)}finally{o.f()}return n}}}]);