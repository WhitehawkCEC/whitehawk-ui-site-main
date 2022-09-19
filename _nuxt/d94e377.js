(window.webpackJsonp=window.webpackJsonp||[]).push([[274,67,73],{1280:function(t,e){},1606:function(t,e,n){"use strict";var r=n(1280),o=n.n(r);e.default=o.a},2187:function(t,e,n){"use strict";n.r(e);var r=n(10),o=(n(48),n(20)),c=n(122),l=n(480),d=n(225),f=n(622),m=Object(o.defineComponent)({layout:"siteMain"});m.setup=function(t,e){var n=Object(c.a)(),m=Object(f.a)(),y=Object(o.computed)((function(){return n.loggedIn})),v=Object(l.d)();function x(){return(x=Object(r.a)(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return m.clear(),n.clear(),t.next=4,Object(d.c)();case 4:v.push("/logout");case 5:case"end":return t.stop()}}),t)})))).apply(this,arguments)}return{loggedIn:y,logout:function(){return x.apply(this,arguments)},cancelLogout:function(){v.push("/")}}};var y=m,v=n(55),x=n(1606),component=Object(v.a)(y,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("section",{staticClass:"min-h-[60vh] bg-gray-100"},[n("div",{staticClass:"px-4 pt-20"},[n("BaseSimpleCard",{staticClass:"mx-auto flex flex-col space-y-4 p-10 text-center sm:max-w-md"},[n("BaseTypography",{attrs:{component:"h2",variant:"subtitle3"}},[t._v("\n        Sign Out\n      ")]),t._v(" "),t.loggedIn?[n("BaseTypography",{staticClass:"uppercase text-gray-500",attrs:{component:"span",variant:"overline"}},[t._v("\n          Are you sure?\n        ")]),t._v(" "),n("BaseButton",{attrs:{shape:"rectangle",size:"large","display-type":"dark"},on:{click:t.logout}},[t._v("\n          Yes\n        ")]),t._v(" "),n("BaseButton",{attrs:{shape:"rectangle",size:"large","display-type":"info"},on:{click:t.cancelLogout}},[t._v("\n          Cancel\n        ")])]:[n("BaseTypography",{staticClass:"uppercase text-gray-500",attrs:{component:"span",variant:"overline"}},[t._v("\n          You are currently signed out\n        ")]),t._v(" "),n("BaseButton",{attrs:{shape:"rectangle",size:"large","display-type":"dark",to:"/login"}},[t._v("\n          Back to login\n        ")])]],2)],1)])}),[],!1,null,null,null);"function"==typeof x.default&&Object(x.default)(component);e.default=component.exports;installComponents(component,{BaseTypography:n(475).default,BaseButton:n(309).default,BaseSimpleCard:n(491).default})},475:function(t,e,n){"use strict";n.r(e);var r=n(20),o=Object(r.defineComponent)({inheritAttrs:!1});o.props={variant:{key:"variant",required:!0,type:null},component:{key:"component",required:!1,type:null,default:"span"}},o.setup=function(t,e){var n="antialiased",o={h1:"".concat(n," font-display text-4xl font-semibold leading-snug tracking-wide sm:text-5xl md:text-6xl"),h2:"".concat(n," font-display text-3xl font-semibold leading-9 tracking-normal sm:text-5xl sm:leading-10"),h3:"".concat(n," font-display text-3xl font-medium leading-8 tracking-normal sm:text-4xl sm:leading-10"),h4:"".concat(n," font-display text-2xl font-medium leading-8 tracking-wide sm:text-3xl sm:leading-9"),h5:"".concat(n," font-display text-2xl font-medium leading-6 tracking-normal"),h6:"".concat(n," font-display text-xl font-semibold leading-7 tracking-wide"),p1:"".concat(n," font-body text-base font-normal leading-7 tracking-wide"),p2:"".concat(n," font-body text-sm font-normal leading-6 tracking-normal"),subtitle1:"".concat(n," font-body text-lg font-normal leading-6 tracking-wide sm:text-xl"),subtitle2:"".concat(n," font-body text-xs font-medium leading-5 tracking-wide"),subtitle3:"".concat(n," font-display text-lg font-medium leading-5 tracking-wide"),overline:"".concat(n," font-display text-xs font-medium tracking-widest"),button:"".concat(n," font-body text-xs font-medium tracking-wider sm:text-sm xl:tracking-wide")},c=t;return{displayTypeClass:Object(r.computed)((function(){return o[c.variant]}))}};var c=o,l=n(55),component=Object(l.a)(c,(function(){var t=this,e=t.$createElement;return(t._self._c||e)(t.component,t._g(t._b({tag:"Component",class:t.displayTypeClass},"Component",t.$attrs,!1),t.$listeners),[t._t("default")],2)}),[],!1,null,null,null);e.default=component.exports},480:function(t,e,n){"use strict";n.d(e,"a",(function(){return d})),n.d(e,"d",(function(){return f})),n.d(e,"b",(function(){return m})),n.d(e,"c",(function(){return y}));var r=n(28),o=(n(84),n(49),n(103),n(47),n(38),n(46),n(24),n(63),n(39),n(64),n(20));function c(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(object);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,n)}return e}function l(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?c(Object(source),!0).forEach((function(e){Object(r.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):c(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}function d(){var t=Object(o.getCurrentInstance)();if(!t)throw new Error("Not in setup()?");return Object(o.computed)((function(){return t.proxy.$route}))}function f(){var t=Object(o.getCurrentInstance)();if(!t)throw new Error("Not in setup()?");return t.proxy.$router}function m(t){var e=d();return Object(o.computed)((function(){var n=e.value.params[t];if(!n)throw new Error("Missing param: ".concat(t));return n}))}function y(t,e){var n,c=d(),m=f();return Object(o.computed)({get:function(){return c.value.query[t]||e},set:function(e){clearTimeout(n),n=setTimeout((function(){m.replace({query:l(l({},c.value.query),{},Object(r.a)({},t,e))})}),300)}})}},491:function(t,e,n){"use strict";n.r(e);var r=n(55),component=Object(r.a)({},(function(){var t=this,e=t.$createElement;return(t._self._c||e)("div",{staticClass:"rounded-xl bg-white shadow"},[t._t("default")],2)}),[],!1,null,null,null);e.default=component.exports},622:function(t,e,n){"use strict";n.d(e,"a",(function(){return l}));var r=n(522),o=n(67),c="impersonated-user",l=Object(o.c)(c,(function(){var t=Object(r.useLocalStorage)("".concat(c,".user"),null,{deep:!1,serializer:r.StorageSerializers.object});return{user:Object(o.e)(t),set:function(e){t.value=e},clear:function(){t.value=void 0}}}))}}]);