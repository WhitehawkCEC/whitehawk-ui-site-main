(window.webpackJsonp=window.webpackJsonp||[]).push([[132,60],{1101:function(t,e,n){"use strict";var r=n(646),c={};c.props={links:{key:"links",required:!0,type:Array}},c.setup=function(t,e){return{targetHtmlElementBlur:r.a}};var o=c,l=n(55),component=Object(l.a)(o,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("nav",{attrs:{"aria-label":"Tabs"}},[n("div",{staticClass:"mx-auto max-w-8xl"},[n("span",{staticClass:"relative z-0 inline-flex rounded-md shadow"},t._l(t.links,(function(link,i){return n("NuxtLink",{key:link.to,staticClass:"relative inline-flex items-center border border-transparent bg-white px-4 py-2 text-gray-500 outline-none hover:bg-gray-50 focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500",class:{"rounded-l-md":0===i,"rounded-r-md":i===t.links.length-1},attrs:{to:link.to,type:"button",disabled:"","exact-active-class":"text-indigo-500 bg-indigo-50"},on:{click:t.targetHtmlElementBlur}},[n("BaseP2",[t._v(t._s(link.name))])],1)})),1)])])}),[],!1,null,null,null);e.a=component.exports;installComponents(component,{BaseP2:n(752).default})},2123:function(t,e,n){"use strict";n.r(e);var r=n(1101),c=n(18),o=n(479),l={setup:function(t,e){var n=Object(o.b)("id");return{links:Object(c.computed)((function(){var t="/admin/companies/".concat(encodeURIComponent(n.value),"/scorecards/batch/");return[{to:"".concat(t,"rating-service-1"),name:"1"},{to:"".concat(t,"rating-service-2"),name:"2"},{to:"".concat(t,"scheduler"),name:"Scheduler"}]}))}}};l.components=Object.assign({StepParentPageLinks:r.a},l.components);var f=l,d=n(55),component=Object(d.a)(f,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("section",{staticClass:"space-y-8"},[n("StepParentPageLinks",{attrs:{links:t.links}}),t._v(" "),n("NuxtChild")],1)}),[],!1,null,null,null);e.default=component.exports},479:function(t,e,n){"use strict";n.d(e,"b",(function(){return d})),n.d(e,"c",(function(){return m}));var r=n(26),c=(n(85),n(46),n(105),n(45),n(36),n(44),n(22),n(56),n(37),n(57),n(66)),o=n(18);function l(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(object);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,n)}return e}function f(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?l(Object(source),!0).forEach((function(e){Object(r.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):l(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}function d(t){var e=Object(c.g)();return Object(o.computed)((function(){var n=e.value.params[t];if(!n)throw new Error("Missing param: ".concat(t));return n}))}function m(t,e){var n,l=Object(c.g)(),d=Object(c.h)();return Object(o.computed)({get:function(){return l.value.query[t]||e},set:function(e){clearTimeout(n),n=setTimeout((function(){d.replace({query:f(f({},l.value.query),{},Object(r.a)({},t,e))})}),300)}})}n.d(e,"a",(function(){return c.g})),n.d(e,"d",(function(){return c.h}))},646:function(t,e,n){"use strict";function r(t){t.target.blur()}n.d(e,"a",(function(){return r}))},752:function(t,e,n){"use strict";n.r(e);var r=n(55),component=Object(r.a)({},(function(){var t=this,e=t.$createElement;return(t._self._c||e)("p",{staticClass:"font-body text-sm font-normal leading-6 tracking-normal"},[t._t("default")],2)}),[],!1,null,null,null);e.default=component.exports}}]);