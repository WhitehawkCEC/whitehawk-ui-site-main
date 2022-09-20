(window.webpackJsonp=window.webpackJsonp||[]).push([[263,50,68,74],{1265:function(e,t){},1586:function(e,t,r){"use strict";var n=r(1265),o=r.n(n);t.default=o.a},2116:function(e,t,r){"use strict";r.r(t);var n=r(688),o={};o.props={value:{key:"value",required:!0,type:Array}},o.setup=function(e,t){return{}};var c=o,l=r(55),component=Object(l.a)(c,(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("section",{staticClass:"container grid grid-cols-1 gap-8 sm:grid-cols-2"},e._l(e.value,(function(t,n){return r("div",{key:n,staticClass:"cols-span-1 mx-auto w-64"},[r("BaseTypography",{staticClass:"pb-1",attrs:{component:"h6",variant:"h6"}},[e._v("\n      "+e._s(t.title)+"\n    ")]),e._v(" "),e._l(t.text,(function(t,i){return r("div",{key:i,staticClass:"text-gray-500"},[r("BaseTypography",{staticClass:"text-gray-500",attrs:{component:"span",variant:"p1"}},[e._v("\n        "+e._s(t)+"\n      ")])],1)}))],2)})),0)}),[],!1,null,null,null),d=component.exports;installComponents(component,{BaseTypography:r(476).default});var f=r(20),m=Object(f.defineComponent)({layout:"siteMain"});m.setup=function(e,t){return{registrationUrl:"https://investor.automic.com.au/#/home",directory:[{title:"Directors",text:["Terry Roberts","Philip George","Melissa King","Brian Hibbeln"]},{title:"ASX Code",text:["WHK"]},{title:"Registered Office",text:["Level 28","140 St Georges Terrace","Perth WA 6000","Australia"]},{title:"Auditor",text:["RSM Australia Partners","Level 13","60 Castlereagh Street","Sydney NSW 2000","Australia"]},{title:"Share Registry",text:["Automic Registry Services","Level 5","191 St Georges Terrace","Perth WA 6000","Australia","Telephone : 1300 288 664","Email : hello@automic.com.au","https://www.automicgroup.com.au/"]},{title:"Lawyer",text:["Steinepreis Paganin","Level 4, The Read Buildings","16 Milligan Street","Perth WA 6000","Australia"]},{title:"Company Secretary",text:["Kevin Kye"]}]}},m.components=Object.assign({SiteMainBanner:n.a,CorporateDirectorySection:d},m.components);var y=m,h=r(1586),v=Object(l.a)(y,(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("main",[r("SiteMainBanner"),e._v(" "),r("section",{staticClass:"bg-gray-100"},[r("section",{staticClass:"mx-auto flex max-w-5xl flex-col space-y-4 bg-gray-100 p-8 md:py-12"},[r("BaseTypography",{staticClass:"text-center",attrs:{component:"h6",variant:"h6"}},[e._v("\n        Enroll Online\n      ")]),e._v(" "),r("BaseTypography",{staticClass:"pb-4 text-gray-500",attrs:{component:"p",variant:"p1"}},[e._v("\n        Shareholders wishing to receive Annual Reports, Notice of Meetings,\n        Newsletters and other company information via email, register through\n        the\n        "),r("BaseExternalLink",{attrs:{href:e.registrationUrl,"display-type":"secondary","aria-label":"Shareholders Registration Link"}},[e._v("\n          InvestorOnLine\n        ")]),e._v("\n        facility.\n      ")],1),e._v(" "),r("BaseSimpleCard",{staticClass:"p-4 text-center sm:text-left"},[r("CorporateDirectorySection",{attrs:{value:e.directory}})],1)],1)])],1)}),[],!1,null,null,null);"function"==typeof h.default&&Object(h.default)(v);t.default=v.exports;installComponents(v,{BaseTypography:r(476).default,BaseExternalLink:r(648).default,BaseSimpleCard:r(491).default})},476:function(e,t,r){"use strict";r.r(t);var n=r(20),o=Object(n.defineComponent)({inheritAttrs:!1});o.props={variant:{key:"variant",required:!0,type:null},component:{key:"component",required:!1,type:null,default:"span"}},o.setup=function(e,t){var r="antialiased",o={h1:"".concat(r," font-display text-4xl font-semibold leading-snug tracking-wide sm:text-5xl md:text-6xl"),h2:"".concat(r," font-display text-3xl font-semibold leading-9 tracking-normal sm:text-5xl sm:leading-10"),h3:"".concat(r," font-display text-3xl font-medium leading-8 tracking-normal sm:text-4xl sm:leading-10"),h4:"".concat(r," font-display text-2xl font-medium leading-8 tracking-wide sm:text-3xl sm:leading-9"),h5:"".concat(r," font-display text-2xl font-medium leading-6 tracking-normal"),h6:"".concat(r," font-display text-xl font-semibold leading-7 tracking-wide"),p1:"".concat(r," font-body text-base font-normal leading-7 tracking-wide"),p2:"".concat(r," font-body text-sm font-normal leading-6 tracking-normal"),subtitle1:"".concat(r," font-body text-lg font-normal leading-6 tracking-wide sm:text-xl"),subtitle2:"".concat(r," font-body text-xs font-medium leading-5 tracking-wide"),subtitle3:"".concat(r," font-display text-lg font-medium leading-5 tracking-wide"),overline:"".concat(r," font-display text-xs font-medium tracking-widest"),button:"".concat(r," font-body text-xs font-medium tracking-wider sm:text-sm xl:tracking-wide"),data:"".concat(r," font-mono text-xs font-normal tracking-wider sm:text-sm xl:tracking-wide")},c=e;return{displayTypeClass:Object(n.computed)((function(){return o[c.variant]}))}};var c=o,l=r(55),component=Object(l.a)(c,(function(){var e=this,t=e.$createElement;return(e._self._c||t)(e.component,e._g(e._b({tag:"Component",class:e.displayTypeClass},"Component",e.$attrs,!1),e.$listeners),[e._t("default")],2)}),[],!1,null,null,null);t.default=component.exports},481:function(e,t,r){"use strict";r.d(t,"a",(function(){return d})),r.d(t,"d",(function(){return f})),r.d(t,"b",(function(){return m})),r.d(t,"c",(function(){return y}));var n=r(28),o=(r(84),r(50),r(103),r(47),r(38),r(46),r(24),r(63),r(39),r(64),r(20));function c(object,e){var t=Object.keys(object);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(object);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(object,e).enumerable}))),t.push.apply(t,r)}return t}function l(e){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?c(Object(source),!0).forEach((function(t){Object(n.a)(e,t,source[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(source)):c(Object(source)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(source,t))}))}return e}function d(){var e=Object(o.getCurrentInstance)();if(!e)throw new Error("Not in setup()?");return Object(o.computed)((function(){return e.proxy.$route}))}function f(){var e=Object(o.getCurrentInstance)();if(!e)throw new Error("Not in setup()?");return e.proxy.$router}function m(e){var t=d();return Object(o.computed)((function(){var r=t.value.params[e];if(!r)throw new Error("Missing param: ".concat(e));return r}))}function y(e,t){var r,c=d(),m=f();return Object(o.computed)({get:function(){return c.value.query[e]||t},set:function(t){clearTimeout(r),r=setTimeout((function(){m.replace({query:l(l({},c.value.query),{},Object(n.a)({},e,t))})}),300)}})}},491:function(e,t,r){"use strict";r.r(t);var n=r(55),component=Object(n.a)({},(function(){var e=this,t=e.$createElement;return(e._self._c||t)("div",{staticClass:"rounded-xl bg-white shadow"},[e._t("default")],2)}),[],!1,null,null,null);t.default=component.exports},494:function(e,t,r){"use strict";var n=r(25),o=r(14),c=r(11),l=r(124),d=r(33),f=r(26),m=r(219),y=r(78),h=r(123),v=r(313),x=r(12),w=r(106).f,k=r(56).f,C=r(30).f,O=r(527),S=r(515).trim,j="Number",_=o.Number,I=_.prototype,A=o.TypeError,E=c("".slice),T=c("".charCodeAt),P=function(e){var t=v(e,"number");return"bigint"==typeof t?t:R(t)},R=function(e){var t,r,n,o,c,l,d,code,f=v(e,"number");if(h(f))throw A("Cannot convert a Symbol value to a number");if("string"==typeof f&&f.length>2)if(f=S(f),43===(t=T(f,0))||45===t){if(88===(r=T(f,2))||120===r)return NaN}else if(48===t){switch(T(f,1)){case 66:case 98:n=2,o=49;break;case 79:case 111:n=8,o=55;break;default:return+f}for(l=(c=E(f,2)).length,d=0;d<l;d++)if((code=T(c,d))<48||code>o)return NaN;return parseInt(c,n)}return+f};if(l(j,!_(" 0o1")||!_("0b1")||_("+0x1"))){for(var N,B=function(e){var t=arguments.length<1?0:_(P(e)),r=this;return y(I,r)&&x((function(){O(r)}))?m(Object(t),r,B):t},M=n?w(_):"MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,EPSILON,MAX_SAFE_INTEGER,MIN_SAFE_INTEGER,isFinite,isInteger,isNaN,isSafeInteger,parseFloat,parseInt,fromString,range".split(","),W=0;M.length>W;W++)f(_,N=M[W])&&!f(B,N)&&C(B,N,k(_,N));B.prototype=I,I.constructor=B,d(o,j,B,{constructor:!0})}},513:function(e,t){e.exports="\t\n\v\f\r                　\u2028\u2029\ufeff"},515:function(e,t,r){var n=r(11),o=r(52),c=r(29),l=r(513),d=n("".replace),f="["+l+"]",m=RegExp("^"+f+f+"*"),y=RegExp(f+f+"*$"),h=function(e){return function(t){var r=c(o(t));return 1&e&&(r=d(r,m,"")),2&e&&(r=d(r,y,"")),r}};e.exports={start:h(1),end:h(2),trim:h(3)}},527:function(e,t,r){var n=r(11);e.exports=n(1..valueOf)},541:function(e,t,r){e.exports={}},543:function(e,t,r){"use strict";var n=r(36),o=(r(24),r(51),r(49),r(312),r(199),r(222),r(121),r(494),r(77),r(42),r(76),r(50),r(38),r(74),r(75),r(523)),c=r(20),l=r(198);function d(e,t){var r="undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(!r){if(Array.isArray(e)||(r=function(e,t){if(!e)return;if("string"==typeof e)return f(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);"Object"===r&&e.constructor&&(r=e.constructor.name);if("Map"===r||"Set"===r)return Array.from(e);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return f(e,t)}(e))||t&&e&&"number"==typeof e.length){r&&(e=r);var i=0,n=function(){};return{s:n,n:function(){return i>=e.length?{done:!0}:{done:!1,value:e[i++]}},e:function(e){throw e},f:n}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var o,c=!0,l=!1;return{s:function(){r=r.call(e)},n:function(){var e=r.next();return c=e.done,e},e:function(e){l=!0,o=e},f:function(){try{c||null==r.return||r.return()}finally{if(l)throw o}}}}function f(e,t){(null==t||t>e.length)&&(t=e.length);for(var i=0,r=new Array(t);i<t;i++)r[i]=e[i];return r}var m=Object(c.defineComponent)({inheritAttrs:!1});m.props={src:{key:"src",required:!0,type:String},options:{key:"options",required:!0,type:null},optionsPlaceholder:{key:"optionsPlaceholder",required:!0,type:null}},m.setup=function(e,t){var r=e;function f(e){for(var t=new URLSearchParams,o=0,c=Object.entries(e);o<c.length;o++){var d=c[o],f=Object(n.a)(d,2),m=f[0],y=f[1];t.append(m,String(y))}return t.append("url",r.src),r.src.startsWith("http://localhost")?"".concat(r.src,"#").concat(t):"".concat(l.h,"/?").concat(t)}var m=Object(c.computed)((function(){return f(r.options)})),y=Object(c.computed)((function(){return f(r.optionsPlaceholder)})),h=Object(c.computed)((function(){var e=r.options.w;return e?Math.log(Number(e)):4})),v=Object(c.shallowRef)(!1),x=Object(c.shallowRef)(!1),w=Object(c.shallowRef)(0),img=Object(c.shallowRef)();Object(c.watch)((function(){return r.src}),(function(){v.value=!1,w.value=0}));var k=Object(o.useIntersectionObserver)(img,(function(e){var t,r=d(e);try{for(r.s();!(t=r.n()).done;){if(t.value.isIntersecting)return x.value=!0,void C()}}catch(e){r.e(e)}finally{r.f()}})),C=k.stop;return k.isSupported.value||(x.value=!0),{generatedUrl:m,placeholderUrl:y,blurAmount:h,error:v,inView:x,loaded:w,img:img}};var y=m,h=(r(619),r(55)),component=Object(h.a)(y,(function(){var e=this,t=e.$createElement,r=e._self._c||t;return e.error?r("img",e._b({attrs:{src:"https://wh-site.s3.amazonaws.com/Coming+Soon.png"}},"img",e.$attrs,!1)):r("img",e._b({ref:"img",staticClass:"transition-filter duration-150",style:{filter:e.loaded<2?"blur("+e.blurAmount+"px)":void 0},attrs:{src:0!==e.loaded&&e.inView?e.generatedUrl:e.placeholderUrl},on:{load:function(t){e.loaded+=1},error:function(t){e.error=!0}}},"img",e.$attrs,!1))}),[],!1,null,"3a7a0994",null);t.a=component.exports},619:function(e,t,r){"use strict";r(541)},648:function(e,t,r){"use strict";r.r(t);var n=r(20),o=Object(n.defineComponent)({inheritAttrs:!1});o.props={displayType:{key:"displayType",required:!1,type:String,default:"no-style"}},o.setup=function(e,t){var r=e;return{displayTypeClass:Object(n.computed)((function(){switch(r.displayType){case"no-style":return;case"primary":return"text-prime-blue hover:text-blue-800";case"secondary":return"text-prime-indigo hover:text-indigo-400";case"gray":return"text-gray-500 hover:text-prime-indigo focus:text-prime-indigo";default:return"text-blue-500 hover:text-blue-800"}}))}};var c=o,l=r(55),component=Object(l.a)(c,(function(){var e=this,t=e.$createElement;return(e._self._c||t)("a",e._g(e._b({staticClass:"no-underline",class:e.displayTypeClass,attrs:{target:"_blank",rel:"noopener noreferrer"}},"a",e.$attrs,!1),e.$listeners),[e._t("default")],2)}),[],!1,null,null,null);t.default=component.exports},688:function(e,t,r){"use strict";r(85),r(86);var n=r(543),o=r(20),c=r(198),l=r(481),d={};d.props={landing:{key:"landing",required:!1,type:Boolean},coverImage:{key:"coverImage",required:!1,type:String}},d.setup=function(e,t){var r="".concat(c.f,"/main-page-pics/line-waves-crop.svg"),n=Object(l.a)().value.path,d=Object(o.computed)((function(){return n.includes("client")||n.includes("admin")}));return{backgroundUrl:r,text:Object(o.computed)((function(){if(d.value||n.includes("profile"))return{title:"WhiteHawk Client Portal"};switch(n){case"/corporate-directory":case"/corporate-directory/":return{title:"Corporate Directory"};case"/enterprise":case"/enterprise/":return{title:"Enterprise Solutions",subtitle:"Defend Your Company and Supply Chain Against Evolving Threats"};case"/cyber-risk-radar":case"/cyber-risk-radar/":return{title:"Cyber Risk Radar",subtitle:"Streamline Your Supply Chain Risk Monitoring & Mitigation of Threats"};case"/cyber-risk-program":case"/cyber-risk-program/":return{title:"Cyber Risk Program",subtitle:"Get a Hacker’s View of Your Cyber Risks"};case"/cyber-risk-paas":case"/cyber-risk-paas/":return{title:"Cyber Risk Platform as a Service",subtitle:"For Business & Organization Clients of ISPs, MSPs, Banks, and Government Entities"};case"/innovative-solutions":case"/innovative-solutions/":return{title:"Innovative Solutions Focused on Enterprises",subtitle:"We Do All the Work for You"};case"/training-and-education":case"/training-and-education/":return{title:"Cyber Training & Education",subtitle:"Enable your Team to Stop Online Fraud in its Tracks"};case"/small-midsize":case"/small-midsize/":return{title:"Small and Midsize Businesses",subtitle:"Don’t have a CIO or CISO? We Will Help You Protect Your Business"};case"/cyber-risk-journey":case"/cyber-risk-journey/":return{title:"Cyber Risk Journey",subtitle:"Cyber Risk Management doesn’t have to be daunting. We partner with you to help take the necessary steps over time to improving your cyber risk posture."};case"/cyber-risk-scorecard":case"/cyber-risk-scorecard/":return{title:"Cyber Risk Scorecard",subtitle:"Get a Snapshot of Your Company’s Vulnerabilities and a Roadmap to Address Them"};case"/business-risk-suite":case"/business-risk-suite/":return{title:"Business Risk Suite",subtitle:"Personalize Your Protection with Sontiq & WhiteHawk Scalable SMB Offering"};case"/cmmc":case"/cmmc/":return{title:"Your Path to CMMC",subtitle:"Start your Cybersecurity Maturity Model Certification baseline today"};case"/marketplace/products":case"/marketplace/products/":return{title:"Marketplace",subtitle:"We Are The World's First Cybersecurity Exchange"};case"/marketplace/products-comparison":case"/marketplace/products-comparison/":return{title:"Product Comparison",subtitle:"Side-by-Side Comparison of up to Four Products"};case"/blog":case"/blog/":return{title:"News & Insights",subtitle:"Cybersecurity Insights Simplified"};case"/about-us":case"/about-us/":return{title:"About Us",subtitle:"We Are The World's First Cybersecurity Exchange"};case"/whitehawk-limited":case"/whitehawk-limited/":return{title:"Investor Center"};case"/careers":case"/careers/":return{title:"WhiteHawk is Hiring"};case"/contact-us":case"/contact-us/":return{title:"Contact Us",subtitle:"We are here to help and answer any questions you might have. We look forward to hearing from you."};case"/contact-us/thank-you":case"/contact-us/thank-you/":return{title:"Contact Us"};case"/scheduler":case"/scheduler/":return{title:"Schedule An Appointment"};case"/terms-conditions":return{title:"WhiteHawk Terms & Conditions"};case"/privacy-notice":return{title:"WhiteHawk Privacy Policy"};case"/questionnaire":return{title:"Cyber Threat Readiness Questionnaire",subtitle:"Answer just 10 questions and find out your top vulnerabilities and get matched to products that can help you today"};case"/marketplace/aws/register/success":case"/marketplace/aws/register/success/":return{title:"WhiteHawk SaaS Fulfillment"};case"/esg":case"/esg/":return{title:"Environmental, Social & Governance (ESG)",subtitle:"Principles for Impactful Growth"};default:return{title:"Defend Your Business Against Cybercrime"}}}))}},d.components=Object.assign({LazyImg:n.a},d.components);var f=d,m=r(55),component=Object(m.a)(f,(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("section",{staticClass:"relative flex h-64 w-full items-center justify-center",class:e.landing?"min-h-30":"min-h-0"},[e.coverImage?r("LazyImg",{staticClass:"absolute z-0 h-full w-full object-cover",attrs:{src:e.coverImage,alt:"Cover Image",options:{w:2e3,il:!0},"options-placeholder":{w:100}}}):e._e(),e._v(" "),r("div",{staticClass:"absolute z-0 h-full w-full bg-prime-navy bg-[length:517px] bg-bottom bg-repeat-x",class:e.coverImage?"opacity-75":"",style:{backgroundImage:"url("+e.backgroundUrl+")"}}),e._v(" "),r("ClientOnly",[r("div",{staticClass:"z-10 flex max-w-xs flex-col space-y-4 text-center text-white sm:max-w-md md:max-w-2xl lg:max-w-4xl"},[r("BaseTypography",{attrs:{component:"h1",variant:"h2"}},[e._v("\n        "+e._s(e.text.title)+"\n      ")]),e._v(" "),r("BaseTypography",{attrs:{component:"span",variant:"subtitle1"}},[e._v("\n        "+e._s(e.text.subtitle)+"\n      ")])],1)])],1)}),[],!1,null,null,null);t.a=component.exports;installComponents(component,{BaseTypography:r(476).default})}}]);