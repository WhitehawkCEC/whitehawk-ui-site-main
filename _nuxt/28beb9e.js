(window.webpackJsonp=window.webpackJsonp||[]).push([[283],{2190:function(t,e,n){"use strict";n.r(e);var r=n(470),c=n(198),o={setup:function(t,e){return r.a.get("".concat(c.a,"/migrate/all")),{}}},l=o,f=n(55),component=Object(f.a)(l,(function(){var t=this,e=t.$createElement;return(t._self._c||e)("div",[t._v("Migration template")])}),[],!1,null,null,null);e.default=component.exports},470:function(t,e,n){"use strict";n.d(e,"a",(function(){return v}));var r=n(200),c=n.n(r),o=n(20),l=n(500),f=Object(o.computed)((function(){var t=Object(l.a)();return t.value?"Bearer ".concat(t.value):void 0})),v=c.a.create();v.interceptors.request.use((function(t){var e=f.value;return e&&(t.headers.Authorization=e),t}))},500:function(t,e,n){"use strict";n.d(e,"a",(function(){return o}));var r=n(20),c=n(122);function o(){var t=Object(c.a)();return Object(r.computed)((function(){return t.accessToken}))}}}]);