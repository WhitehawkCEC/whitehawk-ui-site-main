(window.webpackJsonp=window.webpackJsonp||[]).push([[36,60,66,74],{1557:function(t,e,n){"use strict";var r=n(10),o=(n(48),n(24),n(51),n(50),n(539)),c=n(20),l=Object(c.defineAsyncComponent)(Object(r.a)(regeneratorRuntime.mark((function t(){var e,r;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,n.e(16).then(n.t.bind(null,2058,7));case 2:return e=t.sent,r=e.Carousel,t.abrupt("return",r);case 5:case"end":return t.stop()}}),t)})))),d=Object(c.defineAsyncComponent)(Object(r.a)(regeneratorRuntime.mark((function t(){var e,r;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,n.e(16).then(n.t.bind(null,2058,7));case 2:return e=t.sent,r=e.Slide,t.abrupt("return",r);case 5:case"end":return t.stop()}}),t)})))),m={};m.props={vendors:{key:"vendors",required:!0,type:Array}},m.setup=function(t,e){return{}},m.components=Object.assign({Carousel:l,Slide:d,LazyImg:o.a},m.components);var f=m,y=n(55),component=Object(y.a)(f,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("ClientOnly",[n("Carousel",{attrs:{"per-page-custom":[[0,1],[768,2],[1024,4]],"pagination-enabled":!1,"navigation-enabled":!0}},t._l(t.vendors,(function(e){return n("Slide",{key:e.id,staticClass:"space-y-3 p-4"},[n("NuxtLink",{staticClass:"flex h-36 transform flex-col items-center justify-center rounded-lg bg-white p-4 shadow hover:scale-105 hover:shadow-lg focus:ring focus:ring-indigo-300",attrs:{to:e.to}},[n("LazyImg",{staticClass:"max-h-20 w-full object-contain object-center",attrs:{src:e.image,alt:e.alt,options:{w:560,il:!0},"options-placeholder":{w:48}}})],1),t._v(" "),n("div",{staticClass:"flex flex-col text-center"},[e.note?n("BaseTypography",{staticClass:"uppercase text-gray-500",attrs:{component:"span",variant:"overline"}},[t._v("\n          "+t._s(e.note)+"\n        ")]):t._e(),t._v(" "),n("BaseTypography",{staticClass:"text-prime-indigo",attrs:{component:"h3",variant:"h6"}},[t._v("\n          "+t._s(e.name)+"\n        ")])],1)],1)})),1)],1)}),[],!1,null,null,null),v=component.exports;installComponents(component,{BaseTypography:n(475).default});var h=n(1601),x=n.n(h),w={};w.props={groups:{key:"groups",required:!0,type:Array}},w.setup=function(t,e){return{shuffleVendors:function(t){return t.length>4?x()(t):t}}},w.components=Object.assign({InnovativeVendorsCarousel:v},w.components);var k=w,C=Object(y.a)(k,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("section",{staticClass:"divide-y divide-gray-300"},t._l(t.groups,(function(e){return n("div",{key:e.id,staticClass:"p-8 sm:px-16"},[n("div",{staticClass:"mt-8 flex flex-col space-y-2 text-center"},[n("BaseTypography",{staticClass:"text-prime-navy",attrs:{component:"h2",variant:"h5"}},[t._v("\n        "+t._s(e.name)+"\n      ")]),t._v(" "),n("BaseTypography",{staticClass:"text-gray-500",attrs:{component:"span",variant:"subtitle3"}},[t._v("\n        "+t._s(e.subtitle)+"\n      ")])],1),t._v(" "),n("div",{staticClass:"mx-auto max-w-7xl px-4 py-8 sm:px-6 md:px-8"},[n("InnovativeVendorsCarousel",{attrs:{vendors:t.shuffleVendors(e.vendors)}})],1)])})),0)}),[],!1,null,null,null);e.a=C.exports;installComponents(C,{BaseTypography:n(475).default})},475:function(t,e,n){"use strict";n.r(e);var r=n(20),o=Object(r.defineComponent)({inheritAttrs:!1});o.props={variant:{key:"variant",required:!0,type:null},component:{key:"component",required:!1,type:null,default:"span"}},o.setup=function(t,e){var n="antialiased",o={h1:"".concat(n," font-display text-4xl font-semibold leading-snug tracking-wide sm:text-5xl md:text-6xl"),h2:"".concat(n," font-display text-3xl font-semibold leading-9 tracking-normal sm:text-5xl sm:leading-10"),h3:"".concat(n," font-display text-3xl font-medium leading-8 tracking-normal sm:text-4xl sm:leading-10"),h4:"".concat(n," font-display text-2xl font-medium leading-8 tracking-wide sm:text-3xl sm:leading-9"),h5:"".concat(n," font-display text-2xl font-medium leading-6 tracking-normal"),h6:"".concat(n," font-display text-xl font-semibold leading-7 tracking-wide"),p1:"".concat(n," font-body text-base font-normal leading-7 tracking-wide"),p2:"".concat(n," font-body text-sm font-normal leading-6 tracking-normal"),subtitle1:"".concat(n," font-body text-lg font-normal leading-6 tracking-wide sm:text-xl"),subtitle2:"".concat(n," font-body text-xs font-medium leading-5 tracking-wide"),subtitle3:"".concat(n," font-display text-lg font-medium leading-5 tracking-wide"),overline:"".concat(n," font-display text-xs font-medium tracking-widest"),button:"".concat(n," font-body text-xs font-medium tracking-wider sm:text-sm xl:tracking-wide")},c=t;return{displayTypeClass:Object(r.computed)((function(){return o[c.variant]}))}};var c=o,l=n(55),component=Object(l.a)(c,(function(){var t=this,e=t.$createElement;return(t._self._c||e)(t.component,t._g(t._b({tag:"Component",class:t.displayTypeClass},"Component",t.$attrs,!1),t.$listeners),[t._t("default")],2)}),[],!1,null,null,null);e.default=component.exports},480:function(t,e,n){"use strict";n.d(e,"a",(function(){return d})),n.d(e,"d",(function(){return m})),n.d(e,"b",(function(){return f})),n.d(e,"c",(function(){return y}));var r=n(28),o=(n(84),n(49),n(103),n(47),n(38),n(46),n(24),n(63),n(39),n(64),n(20));function c(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(object);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,n)}return e}function l(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?c(Object(source),!0).forEach((function(e){Object(r.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):c(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}function d(){var t=Object(o.getCurrentInstance)();if(!t)throw new Error("Not in setup()?");return Object(o.computed)((function(){return t.proxy.$route}))}function m(){var t=Object(o.getCurrentInstance)();if(!t)throw new Error("Not in setup()?");return t.proxy.$router}function f(t){var e=d();return Object(o.computed)((function(){var n=e.value.params[t];if(!n)throw new Error("Missing param: ".concat(t));return n}))}function y(t,e){var n,c=d(),f=m();return Object(o.computed)({get:function(){return c.value.query[t]||e},set:function(e){clearTimeout(n),n=setTimeout((function(){f.replace({query:l(l({},c.value.query),{},Object(r.a)({},t,e))})}),300)}})}},510:function(t,e,n){"use strict";n.r(e);n(121);var r=n(20),o=Object(r.defineComponent)({inheritAttrs:!1});o.props={displayType:{key:"displayType",required:!1,type:null,default:"normal"}},o.setup=function(t,e){var text="no-underline antialiased font-body text-base leading-6 font-medium",n="focus:outline-none disabled:cursor-not-allowed disabled:opacity-50",base="".concat(n," ").concat(text," ").concat("transform transition duration-200 hover:-translate-y-px"," inline-flex"),o={normal:"".concat(base," text-blue-500 hover:text-blue-700 focus:text-blue-800"),dark:"".concat(base," text-white hover:text-gray-400 focus:text-gray-400"),gray:"".concat(base," text-gray-500 hover:text-prime-indigo focus:text-prime-indigo"),primary:"".concat(base," text-blue-500 hover:text-teal-500"),"primary-prime":"".concat(base," text-prime-indigo hover:text-indigo-400 focus:text-indigo-400"),secondary:"".concat(base," text-prime-navy hover:text-prime-indigo focus:text-prime-indigo"),none:"".concat(n," ").concat(text," inline-flex")},c=t;return{displayTypeClass:Object(r.computed)((function(){return o[c.displayType]}))}};var c=o,l=n(55),component=Object(l.a)(c,(function(){var t=this,e=t.$createElement;return(t._self._c||e)("NuxtLink",t._g(t._b({class:t.displayTypeClass},"NuxtLink",t.$attrs,!1),t.$listeners),[t._t("default")],2)}),[],!1,null,null,null);e.default=component.exports},538:function(t,e,n){t.exports={}},539:function(t,e,n){"use strict";var r=n(36),o=(n(24),n(51),n(50),n(311),n(199),n(222),n(121),n(493),n(77),n(42),n(76),n(49),n(38),n(74),n(75),n(522)),c=n(20),l=n(198);function d(t,e){var n="undefined"!=typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(!n){if(Array.isArray(t)||(n=function(t,e){if(!t)return;if("string"==typeof t)return m(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);"Object"===n&&t.constructor&&(n=t.constructor.name);if("Map"===n||"Set"===n)return Array.from(t);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return m(t,e)}(t))||e&&t&&"number"==typeof t.length){n&&(t=n);var i=0,r=function(){};return{s:r,n:function(){return i>=t.length?{done:!0}:{done:!1,value:t[i++]}},e:function(t){throw t},f:r}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var o,c=!0,l=!1;return{s:function(){n=n.call(t)},n:function(){var t=n.next();return c=t.done,t},e:function(t){l=!0,o=t},f:function(){try{c||null==n.return||n.return()}finally{if(l)throw o}}}}function m(t,e){(null==e||e>t.length)&&(e=t.length);for(var i=0,n=new Array(e);i<e;i++)n[i]=t[i];return n}var f=Object(c.defineComponent)({inheritAttrs:!1});f.props={src:{key:"src",required:!0,type:String},options:{key:"options",required:!0,type:null},optionsPlaceholder:{key:"optionsPlaceholder",required:!0,type:null}},f.setup=function(t,e){var n=t;function m(t){for(var e=new URLSearchParams,o=0,c=Object.entries(t);o<c.length;o++){var d=c[o],m=Object(r.a)(d,2),f=m[0],y=m[1];e.append(f,String(y))}return e.append("url",n.src),n.src.startsWith("http://localhost")?"".concat(n.src,"#").concat(e):"".concat(l.h,"/?").concat(e)}var f=Object(c.computed)((function(){return m(n.options)})),y=Object(c.computed)((function(){return m(n.optionsPlaceholder)})),v=Object(c.computed)((function(){var t=n.options.w;return t?Math.log(Number(t)):4})),h=Object(c.shallowRef)(!1),x=Object(c.shallowRef)(!1),w=Object(c.shallowRef)(0),img=Object(c.shallowRef)();Object(c.watch)((function(){return n.src}),(function(){h.value=!1,w.value=0}));var k=Object(o.useIntersectionObserver)(img,(function(t){var e,n=d(t);try{for(n.s();!(e=n.n()).done;){if(e.value.isIntersecting)return x.value=!0,void C()}}catch(t){n.e(t)}finally{n.f()}})),C=k.stop;return k.isSupported.value||(x.value=!0),{generatedUrl:f,placeholderUrl:y,blurAmount:v,error:h,inView:x,loaded:w,img:img}};var y=f,v=(n(620),n(55)),component=Object(v.a)(y,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return t.error?n("img",t._b({attrs:{src:"https://wh-site.s3.amazonaws.com/Coming+Soon.png"}},"img",t.$attrs,!1)):n("img",t._b({ref:"img",staticClass:"transition-filter duration-150",style:{filter:t.loaded<2?"blur("+t.blurAmount+"px)":void 0},attrs:{src:0!==t.loaded&&t.inView?t.generatedUrl:t.placeholderUrl},on:{load:function(e){t.loaded+=1},error:function(e){t.error=!0}}},"img",t.$attrs,!1))}),[],!1,null,"3a7a0994",null);e.a=component.exports},620:function(t,e,n){"use strict";n(538)},687:function(t,e,n){"use strict";n(85),n(86);var r=n(539),o=n(20),c=n(198),l=n(480),d={};d.props={landing:{key:"landing",required:!1,type:Boolean},coverImage:{key:"coverImage",required:!1,type:String}},d.setup=function(t,e){var n="".concat(c.f,"/main-page-pics/line-waves-crop.svg"),r=Object(l.a)().value.path,d=Object(o.computed)((function(){return r.includes("client")||r.includes("admin")}));return{backgroundUrl:n,text:Object(o.computed)((function(){if(d.value||r.includes("profile"))return{title:"WhiteHawk Client Portal"};switch(r){case"/corporate-directory":case"/corporate-directory/":return{title:"Corporate Directory"};case"/enterprise":case"/enterprise/":return{title:"Enterprise Solutions",subtitle:"Defend Your Company and Supply Chain Against Evolving Threats"};case"/cyber-risk-radar":case"/cyber-risk-radar/":return{title:"Cyber Risk Radar",subtitle:"Streamline Your Supply Chain Risk Monitoring & Mitigation of Threats"};case"/cyber-risk-program":case"/cyber-risk-program/":return{title:"Cyber Risk Program",subtitle:"Get a Hacker’s View of Your Cyber Risks"};case"/cyber-risk-paas":case"/cyber-risk-paas/":return{title:"Cyber Risk Platform as a Service",subtitle:"For Business & Organization Clients of ISPs, MSPs, Banks, and Government Entities"};case"/innovative-solutions":case"/innovative-solutions/":return{title:"Innovative Solutions Focused on Enterprises",subtitle:"We Do All the Work for You"};case"/training-and-education":case"/training-and-education/":return{title:"Cyber Training & Education",subtitle:"Enable your Team to Stop Online Fraud in its Tracks"};case"/small-midsize":case"/small-midsize/":return{title:"Small and Midsize Businesses",subtitle:"Don’t have a CIO or CISO? We Will Help You Protect Your Business"};case"/cyber-risk-journey":case"/cyber-risk-journey/":return{title:"Cyber Risk Journey",subtitle:"Cyber Risk Management doesn’t have to be daunting. We partner with you to help take the necessary steps over time to improving your cyber risk posture."};case"/cyber-risk-scorecard":case"/cyber-risk-scorecard/":return{title:"Cyber Risk Scorecard",subtitle:"Get a Snapshot of Your Company’s Vulnerabilities and a Roadmap to Address Them"};case"/business-risk-suite":case"/business-risk-suite/":return{title:"Business Risk Suite",subtitle:"Personalize Your Protection with Sontiq & WhiteHawk Scalable SMB Offering"};case"/cmmc":case"/cmmc/":return{title:"Your Path to CMMC",subtitle:"Start your Cybersecurity Maturity Model Certification baseline today"};case"/marketplace/products":case"/marketplace/products/":return{title:"Marketplace",subtitle:"We Are The World's First Cybersecurity Exchange"};case"/marketplace/products-comparison":case"/marketplace/products-comparison/":return{title:"Product Comparison",subtitle:"Side-by-Side Comparison of up to Four Products"};case"/blog":case"/blog/":return{title:"News & Insights",subtitle:"Cybersecurity Insights Simplified"};case"/about-us":case"/about-us/":return{title:"About Us",subtitle:"We Are The World's First Cybersecurity Exchange"};case"/whitehawk-limited":case"/whitehawk-limited/":return{title:"Investor Center"};case"/careers":case"/careers/":return{title:"WhiteHawk is Hiring"};case"/contact-us":case"/contact-us/":return{title:"Contact Us",subtitle:"We are here to help and answer any questions you might have. We look forward to hearing from you."};case"/contact-us/thank-you":case"/contact-us/thank-you/":return{title:"Contact Us"};case"/scheduler":case"/scheduler/":return{title:"Schedule An Appointment"};case"/terms-conditions":return{title:"WhiteHawk Terms & Conditions"};case"/privacy-notice":return{title:"WhiteHawk Privacy Policy"};case"/questionnaire":return{title:"Cyber Threat Readiness Questionnaire",subtitle:"Answer just 10 questions and find out your top vulnerabilities and get matched to products that can help you today"};case"/marketplace/aws/register/success":case"/marketplace/aws/register/success/":return{title:"WhiteHawk SaaS Fulfillment"};case"/esg":case"/esg/":return{title:"Environmental, Social & Governance (ESG)",subtitle:"Principles for Impactful Growth"};default:return{title:"Defend Your Business Against Cybercrime"}}}))}},d.components=Object.assign({LazyImg:r.a},d.components);var m=d,f=n(55),component=Object(f.a)(m,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("section",{staticClass:"relative flex h-64 w-full items-center justify-center",class:t.landing?"min-h-30":"min-h-0"},[t.coverImage?n("LazyImg",{staticClass:"absolute z-0 h-full w-full object-cover",attrs:{src:t.coverImage,alt:"Cover Image",options:{w:2e3,il:!0},"options-placeholder":{w:100}}}):t._e(),t._v(" "),n("div",{staticClass:"absolute z-0 h-full w-full bg-prime-navy bg-[length:517px] bg-bottom bg-repeat-x",class:t.coverImage?"opacity-75":"",style:{backgroundImage:"url("+t.backgroundUrl+")"}}),t._v(" "),n("ClientOnly",[n("div",{staticClass:"z-10 flex max-w-xs flex-col space-y-4 text-center text-white sm:max-w-md md:max-w-2xl lg:max-w-4xl"},[n("BaseTypography",{attrs:{component:"h1",variant:"h2"}},[t._v("\n        "+t._s(t.text.title)+"\n      ")]),t._v(" "),n("BaseTypography",{attrs:{component:"span",variant:"subtitle1"}},[t._v("\n        "+t._s(t.text.subtitle)+"\n      ")])],1)])],1)}),[],!1,null,null,null);e.a=component.exports;installComponents(component,{BaseTypography:n(475).default})},697:function(t,e,n){"use strict";n.d(e,"a",(function(){return r}));var r="whitehawk-cms"},703:function(t,e,n){"use strict";n.d(e,"a",(function(){return c}));n(73),n(42),n(707);var r=n(69),o=n(20);function c(t){var e=Object(o.computed)((function(){var e,n,r,o=t.value;if(!o)return{};var title=o.title,c=o.Meta,image=o.image,meta=c.map((function(t){return{name:t.name,content:t.content}})),l=null==image?void 0:image.formats,d=(null===(e=null==l?void 0:l.medium)||void 0===e?void 0:e.url)||(null===(n=null==l?void 0:l.small)||void 0===n?void 0:n.url)||(null===(r=null==l?void 0:l.thumbnail)||void 0===r?void 0:r.url);return d&&meta.push({name:"og:image",content:d}),{title:title,meta:meta}}));return Object(r.e)((function(){return e.value}))}},711:function(t,e,n){"use strict";n.d(e,"a",(function(){return l}));var r=n(10),o=(n(48),n(200)),c=n.n(o);function l(t){return function(){var e=Object(r.a)(regeneratorRuntime.mark((function e(){var n,data;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,c.a.get(t);case 2:return n=e.sent,data=n.data,e.abrupt("return",data);case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}()}},743:function(t,e,n){"use strict";n.r(e);var r=n(55),component=Object(r.a)({},(function(){var t=this,e=t.$createElement;return(t._self._c||e)("section",{staticClass:"mx-auto max-w-7xl py-12 px-6 xl:py-16"},[t._t("default")],2)}),[],!1,null,null,null);e.default=component.exports},833:function(t,e,n){"use strict";var r=n(546),o=n.n(r),c=n(20),l={};l.props={value:{key:"value",required:!0,type:Array}},l.setup=function(t,e){var n=t;return{columns:Object(c.computed)((function(){return 4===n.value.length?"lg:grid-cols-2":"lg:grid-cols-".concat(n.value.length)}))}},l.components=Object.assign({ChevronRightSvg:o.a},l.components);var d=l,m=n(55),component=Object(m.a)(d,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("BaseSectionWrapper",{staticClass:"space-y-6 lg:space-y-10"},[n("div",{staticClass:"mx-auto max-w-lg space-y-4 text-center lg:max-w-none"},[n("BaseTypography",{staticClass:"text-prime-navy",attrs:{component:"h2",variant:"h4"}},[t._t("title")],2),t._v(" "),n("BaseTypography",{staticClass:"text-gray-500",attrs:{component:"p",variant:"p1"}},[t._t("description")],2)],1),t._v(" "),n("ul",{staticClass:"grid gap-8 2xl:gap-10",class:""+t.columns},t._l(t.value,(function(e){return n("li",{key:e.title,staticClass:"mx-auto flex max-w-md flex-col items-center space-y-4 lg:mx-0 lg:max-w-none lg:items-start"},[e.component?n("div",{staticClass:"flex h-12 w-12 shrink-0 items-center justify-center rounded-md bg-prime-indigo text-white"},[n(e.component,{tag:"Component",staticClass:"h-6 w-6",attrs:{"stroke-data":e.strokeColor}})],1):t._e(),t._v(" "),n("div",{staticClass:"space-y-2 text-center lg:text-left"},[n("BaseTypography",{attrs:{variant:"subtitle3",component:"h3"}},[t._v("\n          "+t._s(e.title)+"\n        ")]),t._v(" "),n("BaseTypography",{staticClass:"text-gray-500",attrs:{variant:"p1",component:"p"}},[t._v("\n          "+t._s(e.description)+"\n        ")])],1),t._v(" "),e.linkTitle?n("div",[n("BaseLink",{staticClass:"flex flex-row items-center",attrs:{to:e.to,"display-type":"primary-prime"}},[n("span",[t._v(t._s(e.linkTitle))]),t._v(" "),n("ChevronRightSvg",{staticClass:"h-6 w-6"})],1)],1):t._e()])})),0)])}),[],!1,null,null,null);e.a=component.exports;installComponents(component,{BaseTypography:n(475).default,BaseLink:n(510).default,BaseSectionWrapper:n(743).default})}}]);