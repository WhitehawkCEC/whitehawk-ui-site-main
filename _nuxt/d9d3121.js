(window.webpackJsonp=window.webpackJsonp||[]).push([[289,56,69],{2111:function(t,e,n){"use strict";n.r(e);var o=n(20),r=Object(o.defineComponent)({layout:"siteMain"}),l=n(55),component=Object(l.a)(r,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("section",{staticClass:"mx-auto my-20 max-w-6xl px-6"},[n("div",{staticClass:"flex flex-col space-y-6 sm:space-y-12"},[n("BaseTypography",{attrs:{variant:"h1",component:"h1"}},[t._v("\n      H1: Test Header Empowering a Fearless Internet\n    ")]),t._v(" "),n("BaseTypography",{attrs:{variant:"h2",component:"h2"}},[t._v("\n      H2: Test Header Empowering a Fearless Internet\n    ")]),t._v(" "),n("BaseTypography",{attrs:{variant:"h3",component:"h3"}},[t._v("\n      H3: Test Header Empowering a Fearless Internet\n    ")]),t._v(" "),n("BaseTypography",{attrs:{variant:"h4",component:"h4"}},[t._v("\n      H4: Test Header Empowering a Fearless Internet\n    ")]),t._v(" "),n("BaseTypography",{attrs:{variant:"h5",component:"h5"}},[t._v("\n      H5: Test Header Empowering a Fearless Internet\n    ")]),t._v(" "),n("BaseTypography",{attrs:{variant:"h6",component:"h6"}},[t._v("\n      H6: Test Header Empowering a Fearless Internet\n    ")]),t._v(" "),n("BaseTypography",{attrs:{variant:"p1",component:"p"}},[t._v("\n      P1: Test Header Empowering a Fearless Internet\n    ")]),t._v(" "),n("BaseTypography",{attrs:{variant:"p2",component:"p"}},[t._v("\n      P2: Test Header Empowering a Fearless Internet\n    ")]),t._v(" "),n("BaseTypography",{attrs:{variant:"subtitle1",component:"span"}},[t._v("\n      Subtitle1: Test Header Empowering a Fearless Internet\n    ")]),t._v(" "),n("BaseTypography",{attrs:{variant:"subtitle2",component:"span"}},[t._v("\n      Subtitle2: Test Header Empowering a Fearless Internet\n    ")]),t._v(" "),n("BaseTypography",{attrs:{variant:"subtitle3",component:"span"}},[t._v("\n      Subtitle3: Test Header Empowering a Fearless Internet\n    ")]),t._v(" "),n("BaseTypography",{staticClass:"uppercase",attrs:{variant:"overline",component:"span"}},[t._v("\n      Overline: Test body lorem ipsum.\n    ")]),t._v(" "),n("BaseTypography",{attrs:{variant:"h6",component:"h1"}},[t._v("\n      Example of H6 Variant on H1 Component\n    ")]),t._v(" "),n("div",{staticClass:"flex flex-col"},[n("BaseLink",{staticClass:"font-display text-base font-medium antialiased",attrs:{to:"#"}},[t._v("\n        Link Style 1\n      ")]),t._v(" "),t._m(0)],1)],1)])}),[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("small",[n("em",[t._v("\n          *Use for prominent UI element links only 'text-base font-display\n          font-medium'\n        ")])])}],!1,null,null,null);e.default=component.exports;installComponents(component,{BaseTypography:n(472).default,BaseLink:n(512).default})},472:function(t,e,n){"use strict";n.r(e);var o=n(20),r=Object(o.defineComponent)({inheritAttrs:!1});r.props={variant:{key:"variant",required:!0,type:null},component:{key:"component",required:!1,type:null,default:"span"}},r.setup=function(t,e){var n="antialiased",r={h1:"".concat(n," font-display text-4xl font-semibold leading-snug tracking-wide sm:text-5xl md:text-6xl"),h2:"".concat(n," font-display text-3xl font-semibold leading-9 tracking-normal sm:text-5xl sm:leading-10"),h3:"".concat(n," font-display text-3xl font-medium leading-8 tracking-normal sm:text-4xl sm:leading-10"),h4:"".concat(n," font-display text-2xl font-medium leading-8 tracking-wide sm:text-3xl sm:leading-9"),h5:"".concat(n," font-display text-2xl font-medium leading-6 tracking-normal"),h6:"".concat(n," font-display text-xl font-semibold leading-7 tracking-wide"),p1:"".concat(n," font-body text-base font-normal leading-7 tracking-wide"),p2:"".concat(n," font-body text-sm font-normal leading-6 tracking-normal"),subtitle1:"".concat(n," font-body text-lg font-normal leading-6 tracking-wide sm:text-xl"),subtitle2:"".concat(n," font-body text-xs font-medium leading-5 tracking-wide"),subtitle3:"".concat(n," font-display text-lg font-medium leading-5 tracking-wide"),overline:"".concat(n," font-display text-xs font-medium tracking-widest"),button:"".concat(n," font-body text-xs font-medium tracking-wider sm:text-sm xl:tracking-wide")},l=t;return{displayTypeClass:Object(o.computed)((function(){return r[l.variant]}))}};var l=r,c=n(55),component=Object(c.a)(l,(function(){var t=this,e=t.$createElement;return(t._self._c||e)(t.component,t._g(t._b({tag:"Component",class:t.displayTypeClass},"Component",t.$attrs,!1),t.$listeners),[t._t("default")],2)}),[],!1,null,null,null);e.default=component.exports},512:function(t,e,n){"use strict";n.r(e);n(121);var o=n(20),r=Object(o.defineComponent)({inheritAttrs:!1});r.props={displayType:{key:"displayType",required:!1,type:null,default:"normal"}},r.setup=function(t,e){var text="no-underline antialiased font-body text-base leading-6 font-medium",n="focus:outline-none disabled:cursor-not-allowed disabled:opacity-50",base="".concat(n," ").concat(text," ").concat("transform transition duration-200 hover:-translate-y-px"," inline-flex"),r={normal:"".concat(base," text-blue-500 hover:text-blue-700 focus:text-blue-800"),dark:"".concat(base," text-white hover:text-gray-400 focus:text-gray-400"),gray:"".concat(base," text-gray-500 hover:text-prime-indigo focus:text-prime-indigo"),primary:"".concat(base," text-blue-500 hover:text-teal-500"),"primary-prime":"".concat(base," text-prime-indigo hover:text-indigo-400 focus:text-indigo-400"),secondary:"".concat(base," text-prime-navy hover:text-prime-indigo focus:text-prime-indigo"),none:"".concat(n," ").concat(text," inline-flex")},l=t;return{displayTypeClass:Object(o.computed)((function(){return r[l.displayType]}))}};var l=r,c=n(55),component=Object(c.a)(l,(function(){var t=this,e=t.$createElement;return(t._self._c||e)("NuxtLink",t._g(t._b({class:t.displayTypeClass},"NuxtLink",t.$attrs,!1),t.$listeners),[t._t("default")],2)}),[],!1,null,null,null);e.default=component.exports}}]);