(window.webpackJsonp=window.webpackJsonp||[]).push([[98,61],{1164:function(t,e,n){"use strict";var r=n(651),o={};o.props={links:{key:"links",required:!0,type:Array}},o.setup=function(t,e){return{targetHtmlElementBlur:r.a}};var c=o,l=n(55),component=Object(l.a)(c,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("nav",{attrs:{"aria-label":"Tabs"}},[n("div",{staticClass:"mx-auto max-w-8xl"},[n("span",{staticClass:"relative z-0 inline-flex rounded-md shadow"},t._l(t.links,(function(link,i){return n("NuxtLink",{key:link.to,staticClass:"relative inline-flex items-center border border-transparent bg-white px-4 py-2 text-gray-500 outline-none hover:bg-gray-50 focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500",class:{"rounded-l-md":0===i,"rounded-r-md":i===t.links.length-1},attrs:{to:link.to,type:"button",disabled:"","exact-active-class":"text-indigo-500 bg-indigo-50"},on:{click:t.targetHtmlElementBlur}},[n("BaseP2",[t._v(t._s(link.name))])],1)})),1)])])}),[],!1,null,null,null);e.a=component.exports;installComponents(component,{BaseP2:n(762).default})},2103:function(t,e,n){"use strict";n.r(e);var r=n(1164),o=n(18),c=n(125),l=n(479),f={setup:function(t,e){var n=Object(l.b)("id"),r=Object(c.a)();return{shouldShowTabs:Object(o.computed)((function(){return r.isAdmin||r.isAnalyst})),links:Object(o.computed)((function(){var t="/admin/companies/".concat(encodeURIComponent(n.value),"/journey/portfolio");return[{to:"".concat(t),name:"Orders"},{to:"".concat(t,"/groups"),name:"Groups"},{to:"".concat(t,"/reports"),name:"Reports"}]}))}}};f.components=Object.assign({StepParentPageLinks:r.a},f.components);var d=f,m=n(55),component=Object(m.a)(d,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("section",[t.shouldShowTabs?n("ClientOnly",[n("StepParentPageLinks",{attrs:{links:t.links}})],1):t._e(),t._v(" "),n("div",{class:t.shouldShowTabs?"mt-8 md:mt-16":""},[n("NuxtChild")],1)],1)}),[],!1,null,null,null);e.default=component.exports},479:function(t,e,n){"use strict";n.d(e,"b",(function(){return d})),n.d(e,"c",(function(){return m}));var r=n(26),o=(n(85),n(46),n(105),n(45),n(36),n(44),n(22),n(56),n(37),n(57),n(66)),c=n(18);function l(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(object);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,n)}return e}function f(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?l(Object(source),!0).forEach((function(e){Object(r.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):l(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}function d(t){var e=Object(o.g)();return Object(c.computed)((function(){var n=e.value.params[t];if(!n)throw new Error("Missing param: ".concat(t));return n}))}function m(t,e){var n,l=Object(o.g)(),d=Object(o.h)();return Object(c.computed)({get:function(){return l.value.query[t]||e},set:function(e){clearTimeout(n),n=setTimeout((function(){d.replace({query:f(f({},l.value.query),{},Object(r.a)({},t,e))})}),300)}})}n.d(e,"a",(function(){return o.g})),n.d(e,"d",(function(){return o.h}))},651:function(t,e,n){"use strict";function r(t){t.target.blur()}n.d(e,"a",(function(){return r}))},762:function(t,e,n){"use strict";n.r(e);var r=n(55),component=Object(r.a)({},(function(){var t=this,e=t.$createElement;return(t._self._c||e)("p",{staticClass:"font-body text-sm font-normal leading-6 tracking-normal"},[t._t("default")],2)}),[],!1,null,null,null);e.default=component.exports}}]);