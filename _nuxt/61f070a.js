(window.webpackJsonp=window.webpackJsonp||[]).push([[22,50,60,66,74],{1247:function(t,e,r){"use strict";var n={};n.props={videoSource:{key:"videoSource",required:!0,type:String}},n.setup=function(t,e){return{}};var o=n,l=r(49),component=Object(l.a)(o,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"flex flex-col sm:space-y-8 sm:px-8 sm:pt-16 sm:pb-28"},[r("div",{staticClass:"mx-auto space-y-2 p-8 text-center sm:p-0"},[r("BaseTypography",{staticClass:"text-prime-navy",attrs:{component:"h2",variant:"h4"}},[t._t("title")],2),t._v(" "),r("BaseTypography",{staticClass:"max-w-3xl text-gray-500",attrs:{component:"p",variant:"p1"}},[t._t("description")],2)],1),t._v(" "),r("div",{staticClass:"self-center"},[r("video",{staticClass:"h-auto w-auto shadow-lg sm:rounded-lg md:max-w-2xl lg:max-w-3xl",attrs:{controls:""}},[r("source",{attrs:{src:t.videoSource,type:"video/mp4"}})])])])}),[],!1,null,null,null);e.a=component.exports;installComponents(component,{BaseTypography:r(475).default})},470:function(t,e){t.exports=function(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t},t.exports.__esModule=!0,t.exports.default=t.exports},471:function(t,e,r){var n=r(490);t.exports=function(source,t){if(null==source)return{};var e,i,r=n(source,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(source);for(i=0;i<o.length;i++)e=o[i],t.indexOf(e)>=0||Object.prototype.propertyIsEnumerable.call(source,e)&&(r[e]=source[e])}return r},t.exports.__esModule=!0,t.exports.default=t.exports},475:function(t,e,r){"use strict";r.r(e);var n=r(20),o=Object(n.defineComponent)({inheritAttrs:!1});o.props={variant:{key:"variant",required:!0,type:null},component:{key:"component",required:!1,type:null,default:"span"}},o.setup=function(t,e){var r="antialiased",o={h1:"".concat(r," font-display text-4xl font-semibold leading-snug tracking-wide sm:text-5xl md:text-6xl"),h2:"".concat(r," font-display text-3xl font-semibold leading-9 tracking-normal sm:text-5xl sm:leading-10"),h3:"".concat(r," font-display text-3xl font-medium leading-8 tracking-normal sm:text-4xl sm:leading-10"),h4:"".concat(r," font-display text-2xl font-medium leading-8 tracking-wide sm:text-3xl sm:leading-9"),h5:"".concat(r," font-display text-2xl font-medium leading-6 tracking-normal"),h6:"".concat(r," font-display text-xl font-semibold leading-7 tracking-wide"),p1:"".concat(r," font-body text-base font-normal leading-7 tracking-wide"),p2:"".concat(r," font-body text-sm font-normal leading-6 tracking-normal"),subtitle1:"".concat(r," font-body text-lg font-normal leading-6 tracking-wide sm:text-xl"),subtitle2:"".concat(r," font-body text-xs font-medium leading-5 tracking-wide"),subtitle3:"".concat(r," font-display text-lg font-medium leading-5 tracking-wide"),overline:"".concat(r," font-display text-xs font-medium tracking-widest"),button:"".concat(r," font-body text-xs font-medium tracking-wider sm:text-sm xl:tracking-wide"),data:"".concat(r," font-mono text-xs font-normal tracking-wider sm:text-sm xl:tracking-wide")},l=t;return{displayTypeClass:Object(n.computed)((function(){return o[l.variant]}))}};var l=o,c=r(49),component=Object(c.a)(l,(function(){var t=this,e=t.$createElement;return(t._self._c||e)(t.component,t._g(t._b({tag:"Component",class:t.displayTypeClass},"Component",t.$attrs,!1),t.$listeners),[t._t("default")],2)}),[],!1,null,null,null);e.default=component.exports},481:function(t,e,r){"use strict";r.d(e,"a",(function(){return d})),r.d(e,"d",(function(){return f})),r.d(e,"b",(function(){return m})),r.d(e,"c",(function(){return y}));var n=r(30),o=(r(84),r(54),r(120),r(51),r(40),r(50),r(26),r(65),r(41),r(66),r(20));function l(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(object);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,r)}return e}function c(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?l(Object(source),!0).forEach((function(e){Object(n.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):l(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}function d(){var t=Object(o.getCurrentInstance)();if(!t)throw new Error("Not in setup()?");return Object(o.computed)((function(){return t.proxy.$route}))}function f(){var t=Object(o.getCurrentInstance)();if(!t)throw new Error("Not in setup()?");return t.proxy.$router}function m(t){var e=d();return Object(o.computed)((function(){var r=e.value.params[t];if(!r)throw new Error("Missing param: ".concat(t));return r}))}function y(t,e){var r,l=d(),m=f();return Object(o.computed)({get:function(){return l.value.query[t]||e},set:function(e){clearTimeout(r),r=setTimeout((function(){m.replace({query:c(c({},l.value.query),{},Object(n.a)({},t,e))})}),300)}})}},490:function(t,e){t.exports=function(source,t){if(null==source)return{};var e,i,r={},n=Object.keys(source);for(i=0;i<n.length;i++)e=n[i],t.indexOf(e)>=0||(r[e]=source[e]);return r},t.exports.__esModule=!0,t.exports.default=t.exports},493:function(t,e,r){"use strict";var n=r(24),o=r(14),l=r(10),c=r(123),d=r(33),f=r(25),m=r(217),y=r(78),v=r(122),h=r(312),x=r(11),w=r(104).f,O=r(56).f,k=r(29).f,C=r(527),_=r(514).trim,j="Number",S=o.Number,I=S.prototype,T=o.TypeError,E=l("".slice),P=l("".charCodeAt),B=function(t){var e=h(t,"number");return"bigint"==typeof e?e:A(e)},A=function(t){var e,r,n,o,l,c,d,code,f=h(t,"number");if(v(f))throw T("Cannot convert a Symbol value to a number");if("string"==typeof f&&f.length>2)if(f=_(f),43===(e=P(f,0))||45===e){if(88===(r=P(f,2))||120===r)return NaN}else if(48===e){switch(P(f,1)){case 66:case 98:n=2,o=49;break;case 79:case 111:n=8,o=55;break;default:return+f}for(c=(l=E(f,2)).length,d=0;d<c;d++)if((code=P(l,d))<48||code>o)return NaN;return parseInt(l,n)}return+f};if(c(j,!S(" 0o1")||!S("0b1")||S("+0x1"))){for(var N,R=function(t){var e=arguments.length<1?0:S(B(t)),r=this;return y(I,r)&&x((function(){C(r)}))?m(Object(e),r,R):e},M=n?w(S):"MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,EPSILON,MAX_SAFE_INTEGER,MIN_SAFE_INTEGER,isFinite,isInteger,isNaN,isSafeInteger,parseFloat,parseInt,fromString,range".split(","),$=0;M.length>$;$++)f(S,N=M[$])&&!f(R,N)&&k(R,N,O(S,N));R.prototype=I,I.constructor=R,d(o,j,R,{constructor:!0})}},511:function(t,e,r){"use strict";r.r(e);r(119);var n=r(20),o=Object(n.defineComponent)({inheritAttrs:!1});o.props={displayType:{key:"displayType",required:!1,type:null,default:"normal"}},o.setup=function(t,e){var text="no-underline antialiased font-body text-base leading-6 font-medium",r="focus:outline-none disabled:cursor-not-allowed disabled:opacity-50",base="".concat(r," ").concat(text," ").concat("transform transition duration-200 hover:-translate-y-px"," inline-flex"),o={normal:"".concat(base," text-blue-500 hover:text-blue-700 focus:text-blue-800"),dark:"".concat(base," text-white hover:text-gray-400 focus:text-gray-400"),gray:"".concat(base," text-gray-500 hover:text-prime-indigo focus:text-prime-indigo"),primary:"".concat(base," text-blue-500 hover:text-teal-500"),"primary-prime":"".concat(base," text-prime-indigo hover:text-indigo-400 focus:text-indigo-400"),secondary:"".concat(base," text-prime-navy hover:text-prime-indigo focus:text-prime-indigo"),none:"".concat(r," ").concat(text," inline-flex")},l=t;return{displayTypeClass:Object(n.computed)((function(){return o[l.displayType]}))}};var l=o,c=r(49),component=Object(c.a)(l,(function(){var t=this,e=t.$createElement;return(t._self._c||e)("NuxtLink",t._g(t._b({class:t.displayTypeClass},"NuxtLink",t.$attrs,!1),t.$listeners),[t._t("default")],2)}),[],!1,null,null,null);e.default=component.exports},513:function(t,e){t.exports="\t\n\v\f\r                　\u2028\u2029\ufeff"},514:function(t,e,r){var n=r(10),o=r(46),l=r(28),c=r(513),d=n("".replace),f="["+c+"]",m=RegExp("^"+f+f+"*"),y=RegExp(f+f+"*$"),v=function(t){return function(e){var r=l(o(e));return 1&t&&(r=d(r,m,"")),2&t&&(r=d(r,y,"")),r}};t.exports={start:v(1),end:v(2),trim:v(3)}},527:function(t,e,r){var n=r(10);t.exports=n(1..valueOf)},540:function(t,e,r){t.exports={}},542:function(t,e,r){"use strict";var n=r(36),o=(r(26),r(55),r(53),r(311),r(197),r(222),r(119),r(493),r(77),r(42),r(76),r(54),r(40),r(74),r(75),r(522)),l=r(20),c=r(196);function d(t,e){var r="undefined"!=typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(!r){if(Array.isArray(t)||(r=function(t,e){if(!t)return;if("string"==typeof t)return f(t,e);var r=Object.prototype.toString.call(t).slice(8,-1);"Object"===r&&t.constructor&&(r=t.constructor.name);if("Map"===r||"Set"===r)return Array.from(t);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return f(t,e)}(t))||e&&t&&"number"==typeof t.length){r&&(t=r);var i=0,n=function(){};return{s:n,n:function(){return i>=t.length?{done:!0}:{done:!1,value:t[i++]}},e:function(t){throw t},f:n}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var o,l=!0,c=!1;return{s:function(){r=r.call(t)},n:function(){var t=r.next();return l=t.done,t},e:function(t){c=!0,o=t},f:function(){try{l||null==r.return||r.return()}finally{if(c)throw o}}}}function f(t,e){(null==e||e>t.length)&&(e=t.length);for(var i=0,r=new Array(e);i<e;i++)r[i]=t[i];return r}var m=Object(l.defineComponent)({inheritAttrs:!1});m.props={src:{key:"src",required:!0,type:String},options:{key:"options",required:!0,type:null},optionsPlaceholder:{key:"optionsPlaceholder",required:!0,type:null}},m.setup=function(t,e){var r=t;function f(t){for(var e=new URLSearchParams,o=0,l=Object.entries(t);o<l.length;o++){var d=l[o],f=Object(n.a)(d,2),m=f[0],y=f[1];e.append(m,String(y))}return e.append("url",r.src),r.src.startsWith("http://localhost")?"".concat(r.src,"#").concat(e):"".concat(c.h,"/?").concat(e)}var m=Object(l.computed)((function(){return f(r.options)})),y=Object(l.computed)((function(){return f(r.optionsPlaceholder)})),v=Object(l.computed)((function(){var t=r.options.w;return t?Math.log(Number(t)):4})),h=Object(l.shallowRef)(!1),x=Object(l.shallowRef)(!1),w=Object(l.shallowRef)(0),img=Object(l.shallowRef)();Object(l.watch)((function(){return r.src}),(function(){h.value=!1,w.value=0}));var O=Object(o.useIntersectionObserver)(img,(function(t){var e,r=d(t);try{for(r.s();!(e=r.n()).done;){if(e.value.isIntersecting)return x.value=!0,void k()}}catch(t){r.e(t)}finally{r.f()}})),k=O.stop;return O.isSupported.value||(x.value=!0),{generatedUrl:m,placeholderUrl:y,blurAmount:v,error:h,inView:x,loaded:w,img:img}};var y=m,v=(r(623),r(49)),component=Object(v.a)(y,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return t.error?r("img",t._b({attrs:{src:"https://wh-site.s3.amazonaws.com/Coming+Soon.png"}},"img",t.$attrs,!1)):r("img",t._b({ref:"img",staticClass:"transition-filter duration-150",style:{filter:t.loaded<2?"blur("+t.blurAmount+"px)":void 0},attrs:{src:0!==t.loaded&&t.inView?t.generatedUrl:t.placeholderUrl},on:{load:function(e){t.loaded+=1},error:function(e){t.error=!0}}},"img",t.$attrs,!1))}),[],!1,null,"3a7a0994",null);e.a=component.exports},548:function(t,e,r){r(51),r(40),r(50),r(26),r(65),r(41),r(66);var n=r(470),o=r(471),l=["class","staticClass","style","staticStyle","attrs"];function c(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(object);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,r)}return e}r(119),t.exports={functional:!0,render:function(t,e){var r=e._c,data=(e._v,e.data),d=e.children,f=void 0===d?[]:d,m=data.class,y=data.staticClass,style=data.style,v=data.staticStyle,h=data.attrs,x=void 0===h?{}:h,w=o(data,l);return r("svg",function(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?c(Object(source),!0).forEach((function(e){n(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):c(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}({class:[m,y],style:[style,v],attrs:Object.assign({xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",fill:"currentColor","aria-hidden":"true"},x)},w),f.concat([r("path",{attrs:{"fill-rule":"evenodd",d:"M7.21 14.77a.75.75 0 01.02-1.06L11.168 10 7.23 6.29a.75.75 0 111.04-1.08l4.5 4.25a.75.75 0 010 1.08l-4.5 4.25a.75.75 0 01-1.06-.02z","clip-rule":"evenodd"}})]))}}},623:function(t,e,r){"use strict";r(540)},654:function(t,e,r){"use strict";r.r(e);var n=r(20),o=Object(n.defineComponent)({inheritAttrs:!1});o.props={displayType:{key:"displayType",required:!1,type:String,default:"no-style"}},o.setup=function(t,e){var r=t;return{displayTypeClass:Object(n.computed)((function(){switch(r.displayType){case"no-style":return;case"primary":return"text-prime-blue hover:text-blue-800";case"secondary":return"text-prime-indigo hover:text-indigo-400";case"gray":return"text-gray-500 hover:text-prime-indigo focus:text-prime-indigo";default:return"text-blue-500 hover:text-blue-800"}}))}};var l=o,c=r(49),component=Object(c.a)(l,(function(){var t=this,e=t.$createElement;return(t._self._c||e)("a",t._g(t._b({staticClass:"no-underline",class:t.displayTypeClass,attrs:{target:"_blank",rel:"noopener noreferrer"}},"a",t.$attrs,!1),t.$listeners),[t._t("default")],2)}),[],!1,null,null,null);e.default=component.exports},691:function(t,e,r){"use strict";r(102),r(103);var n=r(542),o=r(20),l=r(196),c=r(481),d={};d.props={landing:{key:"landing",required:!1,type:Boolean},coverImage:{key:"coverImage",required:!1,type:String}},d.setup=function(t,e){var r="".concat(l.f,"/main-page-pics/line-waves-crop.svg"),n=Object(c.a)().value.path,d=Object(o.computed)((function(){return n.includes("client")||n.includes("admin")}));return{backgroundUrl:r,text:Object(o.computed)((function(){if(d.value||n.includes("profile"))return{title:"WhiteHawk Client Portal"};switch(n){case"/corporate-directory":case"/corporate-directory/":return{title:"Corporate Directory"};case"/enterprise":case"/enterprise/":return{title:"Enterprise Solutions",subtitle:"Defend Your Company and Supply Chain Against Evolving Threats"};case"/cyber-risk-radar":case"/cyber-risk-radar/":return{title:"Cyber Risk Radar",subtitle:"Streamline Your Supply Chain Risk Monitoring & Mitigation of Threats"};case"/cyber-risk-program":case"/cyber-risk-program/":return{title:"Cyber Risk Program",subtitle:"Get a Hacker’s View of Your Cyber Risks"};case"/cyber-risk-paas":case"/cyber-risk-paas/":return{title:"Cyber Risk Platform as a Service",subtitle:"For Business & Organization Clients of ISPs, MSPs, Banks, and Government Entities"};case"/innovative-solutions":case"/innovative-solutions/":return{title:"Innovative Solutions Focused on Enterprises",subtitle:"We Do All the Work for You"};case"/training-and-education":case"/training-and-education/":return{title:"Cyber Training & Education",subtitle:"Enable your Team to Stop Online Fraud in its Tracks"};case"/small-midsize":case"/small-midsize/":return{title:"Small and Midsize Businesses",subtitle:"Don’t have a CIO or CISO? We Will Help You Protect Your Business"};case"/cyber-risk-journey":case"/cyber-risk-journey/":return{title:"Cyber Risk Journey",subtitle:"Cyber Risk Management doesn’t have to be daunting. We partner with you to help take the necessary steps over time to improving your cyber risk posture."};case"/cyber-risk-scorecard":case"/cyber-risk-scorecard/":return{title:"Cyber Risk Scorecard",subtitle:"Get a Snapshot of Your Company’s Vulnerabilities and a Roadmap to Address Them"};case"/business-risk-suite":case"/business-risk-suite/":return{title:"Business Risk Suite",subtitle:"Personalize Your Protection with Sontiq & WhiteHawk Scalable SMB Offering"};case"/cmmc":case"/cmmc/":return{title:"Your Path to CMMC",subtitle:"Start your Cybersecurity Maturity Model Certification baseline today"};case"/marketplace/products":case"/marketplace/products/":return{title:"Marketplace",subtitle:"We Are The World's First Cybersecurity Exchange"};case"/marketplace/products-comparison":case"/marketplace/products-comparison/":return{title:"Product Comparison",subtitle:"Side-by-Side Comparison of up to Four Products"};case"/blog":case"/blog/":return{title:"News & Insights",subtitle:"Cybersecurity Insights Simplified"};case"/about-us":case"/about-us/":return{title:"About Us",subtitle:"We Are The World's First Cybersecurity Exchange"};case"/whitehawk-limited":case"/whitehawk-limited/":return{title:"Investor Center"};case"/careers":case"/careers/":return{title:"WhiteHawk is Hiring"};case"/contact-us":case"/contact-us/":return{title:"Contact Us",subtitle:"We are here to help and answer any questions you might have. We look forward to hearing from you."};case"/contact-us/thank-you":case"/contact-us/thank-you/":return{title:"Contact Us"};case"/scheduler":case"/scheduler/":return{title:"Schedule An Appointment"};case"/terms-conditions":return{title:"WhiteHawk Terms & Conditions"};case"/privacy-notice":return{title:"WhiteHawk Privacy Policy"};case"/questionnaire":return{title:"Cyber Threat Readiness Questionnaire",subtitle:"Answer just 10 questions and find out your top vulnerabilities and get matched to products that can help you today"};case"/marketplace/aws/register/success":case"/marketplace/aws/register/success/":return{title:"WhiteHawk SaaS Fulfillment"};case"/esg":case"/esg/":return{title:"Environmental, Social & Governance (ESG)",subtitle:"Principles for Impactful Growth"};default:return{title:"Defend Your Business Against Cybercrime"}}}))}},d.components=Object.assign({LazyImg:n.a},d.components);var f=d,m=r(49),component=Object(m.a)(f,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("section",{staticClass:"relative flex h-64 w-full items-center justify-center",class:t.landing?"min-h-30":"min-h-0"},[t.coverImage?r("LazyImg",{staticClass:"absolute z-0 h-full w-full object-cover",attrs:{src:t.coverImage,alt:"Cover Image",options:{w:2e3,il:!0},"options-placeholder":{w:100}}}):t._e(),t._v(" "),r("div",{staticClass:"absolute z-0 h-full w-full bg-prime-navy bg-[length:517px] bg-bottom bg-repeat-x",class:t.coverImage?"opacity-75":"",style:{backgroundImage:"url("+t.backgroundUrl+")"}}),t._v(" "),r("ClientOnly",[r("div",{staticClass:"z-10 flex max-w-xs flex-col space-y-4 text-center text-white sm:max-w-md md:max-w-2xl lg:max-w-4xl"},[r("BaseTypography",{attrs:{component:"h1",variant:"h2"}},[t._v("\n        "+t._s(t.text.title)+"\n      ")]),t._v(" "),r("BaseTypography",{attrs:{component:"span",variant:"subtitle1"}},[t._v("\n        "+t._s(t.text.subtitle)+"\n      ")])],1)])],1)}),[],!1,null,null,null);e.a=component.exports;installComponents(component,{BaseTypography:r(475).default})},700:function(t,e,r){"use strict";r.d(e,"a",(function(){return n}));var n="whitehawk-cms"},704:function(t,e,r){"use strict";r.d(e,"a",(function(){return l}));r(73),r(42),r(710);var n=r(69),o=r(20);function l(t){var e=Object(o.computed)((function(){var e,r,n,o=t.value;if(!o)return{};var title=o.title,l=o.Meta,image=o.image,meta=l.map((function(t){return{name:t.name,content:t.content}})),c=null==image?void 0:image.formats,d=(null==c||null===(e=c.medium)||void 0===e?void 0:e.url)||(null==c||null===(r=c.small)||void 0===r?void 0:r.url)||(null==c||null===(n=c.thumbnail)||void 0===n?void 0:n.url);return d&&meta.push({name:"og:image",content:d}),{title:title,meta:meta}}));return Object(n.d)((function(){return e.value}))}},710:function(t,e,r){"use strict";var n=r(5),o=r(332);n({target:"String",proto:!0,forced:r(333)("small")},{small:function(){return o(this,"small","","")}})},714:function(t,e,r){"use strict";r.d(e,"a",(function(){return c}));var n=r(12),o=(r(52),r(198)),l=r.n(o);function c(t){return function(){var e=Object(n.a)(regeneratorRuntime.mark((function e(){var r,data;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,l.a.get(t);case 2:return r=e.sent,data=r.data,e.abrupt("return",data);case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}()}},760:function(t,e,r){"use strict";r.r(e);var n=r(49),component=Object(n.a)({},(function(){var t=this,e=t.$createElement;return(t._self._c||e)("section",{staticClass:"mx-auto max-w-7xl py-12 px-6 xl:py-16"},[t._t("default")],2)}),[],!1,null,null,null);e.default=component.exports},824:function(t,e,r){"use strict";var n=r(542),o={};o.props={value:{key:"value",required:!0,type:null},condensed:{key:"condensed",required:!1,type:Boolean,default:!1},muted:{key:"muted",required:!1,type:Boolean,default:!1}},o.setup=function(t,e){return{}},o.components=Object.assign({LazyImg:n.a},o.components);var l=o,c=r(49),component=Object(c.a)(l,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("section",{staticClass:"relative flex items-center justify-center"},[t.value.coverImage?r("LazyImg",{staticClass:"absolute z-0 h-full w-full object-cover",attrs:{src:t.value.coverImage,alt:"Cover Image",options:{w:1e3,il:!0},"options-placeholder":{w:800}}}):t._e(),t._v(" "),r("div",{staticClass:"absolute z-0 h-full w-full bg-[length:517px] bg-bottom bg-repeat-x",class:[t.value.coverImage&&"opacity-70",t.muted?"bg-gray-100":"bg-prime-navy"]}),t._v(" "),r("div",{staticClass:"container z-10 mx-auto px-4 text-center sm:px-6",class:t.condensed?"py-6 lg:py-8 ":"py-12 lg:py-16 "},[r("ClientOnly",[r("div",{staticClass:"flex flex-col items-center justify-center space-y-8"},[t.value.image?[r("LazyImg",{staticClass:"h-auto w-28 object-fill",attrs:{src:t.value.image.imgSrc,alt:t.value.image.alt,options:{w:1200,il:!0},"options-placeholder":{w:48}}})]:t._e(),t._v(" "),r("div",{staticClass:"flex flex-col space-y-1"},[r("BaseTypography",{class:t.muted?"text-prime-navy":"text-white",attrs:{variant:"h4",component:"h2"}},[t._v("\n            "+t._s(t.value.title)+"\n          ")]),t._v(" "),r("BaseTypography",{class:t.muted?"text-prime-indigo":"text-prime-teal",attrs:{variant:"h5",component:"span"}},[t._v("\n            "+t._s(t.value.subtitle)+"\n          ")])],1),t._v(" "),t.value.isExternal?r("BaseButton",{attrs:{"display-type":"light"}},[r("BaseExternalLink",{attrs:{href:t.value.to,"aria-label":"Cyber Liability Quote Request"}},[t._v("\n            "+t._s(t.value.btnText)+"\n          ")])],1):r("BaseButton",{attrs:{"display-type":"light",to:t.value.to}},[t._v("\n          "+t._s(t.value.btnText)+"\n        ")])],2)])],1)],1)}),[],!1,null,null,null);e.a=component.exports;installComponents(component,{BaseTypography:r(475).default,BaseExternalLink:r(654).default,BaseButton:r(309).default})},835:function(t,e,r){"use strict";var n=r(548),o=r.n(n),l=r(20),c={};c.props={value:{key:"value",required:!0,type:Array}},c.setup=function(t,e){var r=t;return{columns:Object(l.computed)((function(){return 4===r.value.length?"lg:grid-cols-2":"lg:grid-cols-".concat(r.value.length)}))}},c.components=Object.assign({ChevronRightSvg:o.a},c.components);var d=c,f=r(49),component=Object(f.a)(d,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("BaseSectionWrapper",{staticClass:"space-y-6 lg:space-y-10"},[r("div",{staticClass:"mx-auto max-w-lg space-y-4 text-center lg:max-w-none"},[r("BaseTypography",{staticClass:"text-prime-navy",attrs:{component:"h2",variant:"h4"}},[t._t("title")],2),t._v(" "),r("BaseTypography",{staticClass:"text-gray-500",attrs:{component:"p",variant:"p1"}},[t._t("description")],2)],1),t._v(" "),r("ul",{staticClass:"grid gap-8 2xl:gap-10",class:""+t.columns},t._l(t.value,(function(e){return r("li",{key:e.title,staticClass:"mx-auto flex max-w-md flex-col items-center space-y-4 lg:mx-0 lg:max-w-none lg:items-start"},[e.component?r("div",{staticClass:"flex h-12 w-12 shrink-0 items-center justify-center rounded-md bg-prime-indigo text-white"},[r(e.component,{tag:"Component",staticClass:"h-6 w-6",attrs:{"stroke-data":e.strokeColor}})],1):t._e(),t._v(" "),r("div",{staticClass:"space-y-2 text-center lg:text-left"},[r("BaseTypography",{attrs:{variant:"subtitle3",component:"h3"}},[t._v("\n          "+t._s(e.title)+"\n        ")]),t._v(" "),r("BaseTypography",{staticClass:"text-gray-500",attrs:{variant:"p1",component:"p"}},[t._v("\n          "+t._s(e.description)+"\n        ")])],1),t._v(" "),e.linkTitle?r("div",[r("BaseLink",{staticClass:"flex flex-row items-center",attrs:{to:e.to,"display-type":"primary-prime"}},[r("span",[t._v(t._s(e.linkTitle))]),t._v(" "),r("ChevronRightSvg",{staticClass:"h-6 w-6"})],1)],1):t._e()])})),0)])}),[],!1,null,null,null);e.a=component.exports;installComponents(component,{BaseTypography:r(475).default,BaseLink:r(511).default,BaseSectionWrapper:r(760).default})}}]);