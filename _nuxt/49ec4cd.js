(window.webpackJsonp=window.webpackJsonp||[]).push([[288,48,57,58,61,67,71],{1542:function(e,t){},1958:function(e,t,n){"use strict";n.r(t);var r=n(702),o=n(11),c=(n(53),n(489)),l=n(18),d={setup:function(e,t){return{loaded:Object(l.ref)(!1)}}};d.components=Object.assign({LoadingSpinner:c.a},d.components);var f=d,m=n(55),component=Object(m.a)(f,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("section",{staticClass:"flex flex-col -space-y-1 -space-x-2 px-4",style:{"min-height":"400px"}},[n("BaseTypography",{staticClass:"uppercase text-gray-600",attrs:{component:"h3",variant:"subtitle3"}},[e._v("\n    ASX Announcements\n  ")]),e._v(" "),e.loaded?e._e():n("div",[n("LoadingSpinner")],1),e._v(" "),n("script",{attrs:{src:"https://app.sharelinktechnologies.com/widget/js",defer:""}}),e._v(" "),n("iframe",{directives:[{name:"show",rawName:"v-show",value:e.loaded,expression:"loaded"}],staticClass:"w-px min-w-full overflow-hidden py-4",attrs:{title:"Asx Announcments",width:"100%",height:"400",loading:"lazy",src:"https://app.sharelinktechnologies.com/widget/9c6e4efc-237f-4fbc-86fe-3ea32801c9c3"},on:{load:function(t){e.loaded=!0}}})],1)}),[],!1,null,null,null),v=component.exports;installComponents(component,{BaseTypography:n(471).default});n(69);var y=n(1525),h=n.n(y),x=n(788),w={};w.props={value:{key:"value",required:!0,type:Array},showDate:{key:"showDate",required:!1,type:Boolean}},w.setup=function(e,t){var n=e,r=Object(l.ref)(!1),o=Object(l.computed)((function(){return r.value?n.value:n.value.slice(0,3)}));return{showAllDocuments:r,documentsToShow:o}},w.components=Object.assign({DocumentDownloadSvg:h.a,ToggleButton:x.a},w.components);var k=w,O=Object(m.a)(k,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("section",{staticClass:"flex flex-col space-y-4 sm:px-4 sm:py-6"},[n("BaseTypography",{staticClass:"uppercase text-gray-600",attrs:{component:"h3",variant:"subtitle3"}},[e._t("title")],2),e._v(" "),n("div",{staticClass:"space-y-2"},[n("ul",{staticClass:"flex flex-col space-y-1"},e._l(e.documentsToShow,(function(t,r){return n("li",{key:r},[n("BaseExternalLink",{staticClass:"flex items-center space-x-1",attrs:{href:t.url,role:"Link","aria-label":"Link to Corporate Document","display-type":"secondary"}},[n("DocumentDownloadSvg",{staticClass:"h-auto w-5 shrink-0"}),e._v(" "),e.showDate?n("span",[e._v("\n            "+e._s(t.dateDisplay)+" | "+e._s(t.title)+"\n          ")]):n("span",[e._v("\n            "+e._s(t.title)+"\n          ")])],1)],1)})),0),e._v(" "),e.documentsToShow&&e.value.length>3?n("div",{staticClass:"group flex px-6 pb-4 sm:pb-0"},[n("BaseLabel",{staticClass:"flex cursor-pointer group-hover:text-indigo-500",attrs:{"aria-label":"Toggle"}},[e._v("\n        "+e._s(e.showAllDocuments?"See Less":"See All")+"\n        "),e.documentsToShow?n("ToggleButton",{class:e.showAllDocuments?"rotate-180 transform transition-transform duration-100":"",attrs:{"aria-label":"Documents Toggle"},model:{value:e.showAllDocuments,callback:function(t){e.showAllDocuments=t},expression:"showAllDocuments"}}):e._e()],1)],1):e._e()])],1)}),[],!1,null,null,null),_=O.exports;installComponents(O,{BaseTypography:n(471).default,BaseExternalLink:n(689).default,BaseLabel:n(481).default});n(36),n(67),n(22),n(563),n(68),n(48),n(47),n(336),n(516),n(46),n(313),n(696);var j=n(1960),C=n(1544),S=n(666),T=n(26),P=n(1526),B=n(567),E=n(577),D=(n(45),n(44),n(56),n(37),n(57),n(2059));function I(object,e){var t=Object.keys(object);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(object);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(object,e).enumerable}))),t.push.apply(t,n)}return t}function A(e){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?I(Object(source),!0).forEach((function(t){Object(T.a)(e,t,source[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(source)):I(Object(source)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(source,t))}))}return e}function R(e){var t,n,r,o=2;for("undefined"!=typeof Symbol&&(n=Symbol.asyncIterator,r=Symbol.iterator);o--;){if(n&&null!=(t=e[n]))return t.call(e);if(r&&null!=(t=e[r]))return new W(t.call(e));n="@@asyncIterator",r="@@iterator"}throw new TypeError("Object is not async iterable")}function W(s){function e(e){if(Object(e)!==e)return Promise.reject(new TypeError(e+" is not an object."));var t=e.done;return Promise.resolve(e.value).then((function(e){return{value:e,done:t}}))}return W=function(s){this.s=s,this.n=s.next},W.prototype={s:null,n:null,next:function(){return e(this.n.apply(this.s,arguments))},return:function(t){var n=this.s.return;return void 0===n?Promise.resolve({value:t,done:!0}):e(n.apply(this.s,arguments))},throw:function(t){var n=this.s.return;return void 0===n?Promise.reject(t):e(n.apply(this.s,arguments))}},new W(s)}function L(e,t){return $.apply(this,arguments)}function $(){return($=Object(E.a)(regeneratorRuntime.mark((function e(t,n){var r,o,c,l;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:r=n;case 1:return e.next=4,Object(B.a)(t.send(new D.a(r)));case 4:return o=e.sent,c=o.IsTruncated,l=o.NextContinuationToken,e.next=8,o;case 8:if(c){e.next=10;break}return e.abrupt("return");case 10:r=A(A({},n),{},{ContinuationToken:l}),e.next=1;break;case 13:case"end":return e.stop()}}),e)})))).apply(this,arguments)}var M=function(e,t){return H.apply(this,arguments)};function H(){return(H=Object(E.a)(regeneratorRuntime.mark((function e(t,n){var r,o,c,l,d,f,m;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:r=!1,o=!1,e.prev=2,l=R(L(t,n));case 4:return e.next=6,Object(B.a)(l.next());case 6:if(!(r=!(d=e.sent).done)){e.next=14;break}if(f=d.value,!(m=f.Contents)){e.next=11;break}return e.delegateYield(Object(P.a)(R(m),B.a),"t0",11);case 11:r=!1,e.next=4;break;case 14:e.next=20;break;case 16:e.prev=16,e.t1=e.catch(2),o=!0,c=e.t1;case 20:if(e.prev=20,e.prev=21,!r||null==l.return){e.next=25;break}return e.next=25,Object(B.a)(l.return());case 25:if(e.prev=25,!o){e.next=28;break}throw c;case 28:return e.finish(25);case 29:return e.finish(20);case 30:case"end":return e.stop()}}),e,null,[[2,16,20,30],[21,,25,29]])})))).apply(this,arguments)}function z(e){var t,n,r,o=2;for("undefined"!=typeof Symbol&&(n=Symbol.asyncIterator,r=Symbol.iterator);o--;){if(n&&null!=(t=e[n]))return t.call(e);if(r&&null!=(t=e[r]))return new U(t.call(e));n="@@asyncIterator",r="@@iterator"}throw new TypeError("Object is not async iterable")}function U(s){function e(e){if(Object(e)!==e)return Promise.reject(new TypeError(e+" is not an object."));var t=e.done;return Promise.resolve(e.value).then((function(e){return{value:e,done:t}}))}return U=function(s){this.s=s,this.n=s.next},U.prototype={s:null,n:null,next:function(){return e(this.n.apply(this.s,arguments))},return:function(t){var n=this.s.return;return void 0===n?Promise.resolve({value:t,done:!0}):e(n.apply(this.s,arguments))},throw:function(t){var n=this.s.return;return void 0===n?Promise.reject(t):e(n.apply(this.s,arguments))}},new U(s)}var F=new j.a({region:"us-east-1",signer:{sign:function(e){return Promise.resolve(e)}}}),Y=function(e){return Object(o.a)(regeneratorRuntime.mark((function t(){var n,r,o,c,l,d,f,m,v,y;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:n=M(F,{Bucket:"communications.whitehawk.com",Delimiter:"/",Prefix:e}),r=[],o=!1,c=!1,t.prev=4,d=z(n);case 6:return t.next=8,d.next();case 8:if(!(o=!(f=t.sent).done)){t.next=18;break}if(m=f.value,(v=m.Key)&&(v.endsWith(".pdf")||v.endsWith(".doc"))){t.next=13;break}return t.abrupt("continue",15);case 13:y=G(v),r.push(y);case 15:o=!1,t.next=6;break;case 18:t.next=24;break;case 20:t.prev=20,t.t0=t.catch(4),c=!0,l=t.t0;case 24:if(t.prev=24,t.prev=25,!o||null==d.return){t.next=29;break}return t.next=29,d.return();case 29:if(t.prev=29,!c){t.next=32;break}throw l;case 32:return t.finish(29);case 33:return t.finish(24);case 34:return t.abrupt("return",r.sort((function(a,b){return Object(C.a)(a.date,b.date)})));case 35:case"end":return t.stop()}}),t,null,[[4,20,24,34],[25,,29,33]])})))()};function G(e){var t="https://communications.whitehawk.com/".concat(e),n=e.split("/"),r=n[2];if(r){var o=N(r);return{title:o.title,date:o.parsed,dateDisplay:o.dateDisplay,url:t}}var c=n[1];if(!c)throw new Error("weird key: "+e);var l=N(c);return{title:l.title,date:l.parsed,dateDisplay:l.dateDisplay,url:t}}function N(e){var t=e.lastIndexOf("."),n=e.indexOf("|"),r=e.substring(0,n-1),title=e.substring(n+2,t).trim(),o=Object(S.a)(r.trim()),c=o.toLocaleDateString();return{title:title,parsed:o,dateDisplay:c}}var V={setup:function(e,t){var n=Object(l.ref)(),r=Object(l.ref)(),c=Object(l.ref)();return Object(l.onBeforeMount)(Object(o.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Y("investor-center/corporate-governance/");case 2:return n.value=e.sent,e.next=5,Y("investor-center/financial-reports/");case 5:return r.value=e.sent,e.next=8,Y("WhiteHawk-Report/");case 8:c.value=e.sent;case 9:case"end":return e.stop()}}),e)})))),{governance:n,finance:r,reports:c}}};V.components=Object.assign({InvestorResourceDisplay:_,AsxAnnouncement:v},V.components);var J=V,K=Object(m.a)(J,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("section",{staticClass:"bg-gray-100 p-8 sm:px-4 md:py-12 lg:px-16 lg:py-8 lg:pt-16"},[n("div",{staticClass:"container mx-auto space-y-6"},[n("BaseTypography",{staticClass:"text-center text-prime-navy",attrs:{component:"h2",variant:"h4"}},[e._v("\n      Investor Resources\n    ")]),e._v(" "),n("div",{staticClass:"grid grid-cols-1 gap-4 md:grid-cols-2 xl:grid-cols-3 xl:gap-8"},[e.governance?n("InvestorResourceDisplay",{staticClass:"col-span-1",attrs:{value:e.governance},scopedSlots:e._u([{key:"title",fn:function(){return[e._v("Corporate Governance")]},proxy:!0}],null,!1,562037392)}):e._e(),e._v(" "),e.finance?n("InvestorResourceDisplay",{staticClass:"col-span-1",attrs:{value:e.finance,"show-date":!0},scopedSlots:e._u([{key:"title",fn:function(){return[e._v("Financial Reports")]},proxy:!0}],null,!1,570924585)}):e._e(),e._v(" "),e.reports?n("InvestorResourceDisplay",{staticClass:"col-span-1 md:col-span-2 xl:col-span-1",attrs:{value:e.reports},scopedSlots:e._u([{key:"title",fn:function(){return[e._v("WhiteHawk Reports")]},proxy:!0}],null,!1,2627846226)}):e._e()],1),e._v(" "),n("div",{staticClass:"container mx-auto border-t border-gray-300 pt-8 sm:pt-12 xl:pt-16"},[n("AsxAnnouncement")],1)],1)])}),[],!1,null,null,null),X=K.exports;installComponents(K,{BaseTypography:n(471).default});var Q=n(533),Z=n.n(Q),ee=n(828),te={setup:function(e,t){return{investorData:[{paragraph:"WhiteHawk Limited is the first global online cybersecurity exchange enabling all businesses and organizations to take smart action against online crime, fraud and disruption."},{paragraph:"Launched in 2016, WhiteHawk began as a cyber risk advisory service with a vision to develop the first online cyber security exchange, simplifying how companies and organizations identify, prioritize and mitigate their key cyber risks in near real time via an online platform and virtual consult."},{paragraph:"WhiteHawk is a cloud-based cyber security exchange platform that delivers Artificial Intelligence based Cyber Risk Profile’s, interactive online maturity models, tailored Cyber Risk Scorecard reports, matching to innovative products, solutions and best practices, all via an intuitive virtual consult. The platform enables customers to leverage their tailored Security Story to find affordable and impactful cyber tools, non-technical context, and relevant services through our algorithms, online customer journey and accessible expertise. The Team delivers all by staying on top of Cyber Innovation, by continuously vetting and partnering with best of breed, scalable, easy to implement products and solutions. WhiteHawk enables companies to fill their needs on an ongoing basis with demonstrated cost and time savings."}]}}};te.components=Object.assign({WhitehawkLogo:ee.a,ChevrowRightSvg:Z.a},te.components);var ne=te,re=Object(m.a)(ne,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("section",{staticClass:"bg-gray-100"},[n("div",{staticClass:"container mx-auto space-y-6 p-8 md:py-12"},[n("WhitehawkLogo",{staticClass:"mx-auto h-20 w-auto"}),e._v(" "),e._l(e.investorData,(function(desc,i){return n("div",{key:i,staticClass:"mx-auto max-w-6xl space-y-2 text-center"},[n("BaseTypography",{staticClass:"text-gray-500",attrs:{component:"p",variant:"p1"}},[e._v("\n        "+e._s(desc.paragraph)+"\n      ")])],1)})),e._v(" "),n("div",{staticClass:"mx-auto flex max-w-3xl flex-col space-y-2 text-center"},[n("BaseTypography",{staticClass:"text-gray-500",attrs:{component:"p",variant:"subtitle3"}},[e._v("\n        WhiteHawk is one of the First ASX-listed adopters of the World\n        Economic Forum’s New Environmental, Social and Governance (ESG)\n        Standard\n      ")]),e._v(" "),n("BaseLink",{staticClass:"inline-flex items-center justify-center",attrs:{to:"/esg","display-type":"primary-prime","aria-label":"Link to Environmental, Social & Governance Page"}},[e._v("\n        Read More\n        "),n("ChevrowRightSvg",{staticClass:"h-auto w-5"})],1)],1)],2)])}),[],!1,null,null,null),ae=re.exports;installComponents(re,{BaseTypography:n(471).default,BaseLink:n(509).default});var se=n(969),ie=n.n(se),oe=n(542),ce=n(201),le={setup:function(e,t){var n="".concat(ce.f,"/main-page-pics/spiral.png"),r=Object(l.ref)(!1);return{backgroundUrl:n,loaded:r,load:function(){r.value=!0}}}};le.components=Object.assign({LoadingSpinner:c.a,LazyImg:oe.a},le.components);var ue=le,pe=Object(m.a)(ue,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("section",[n("div",{staticClass:"relative"},[n("div",{staticClass:"absolute inset-0 m-auto h-36 max-w-xs rounded-md border border-gray-100 bg-white p-4 shadow-sm"},[n("script",{attrs:{src:"https://app.sharelinktechnologies.com/widget/js",defer:""}}),e._v(" "),n("iframe",{directives:[{name:"show",rawName:"v-show",value:e.loaded,expression:"loaded"}],staticClass:"sharelink",staticStyle:{width:"1px","min-width":"100%"},attrs:{width:"100%",frameborder:"0",loading:"lazy",allowtransparency:"true",scrolling:"no",src:"https://app.sharelinktechnologies.com/widget/c5dc9770-1dbf-42f5-bbbd-6914a9e0f9b9"},on:{load:e.load}}),e._v(" "),e.loaded?e._e():n("div",[n("LoadingSpinner")],1)]),e._v(" "),n("LazyImg",{staticClass:"block",attrs:{src:e.backgroundUrl,alt:"Stock Background Image",options:{w:368},"options-placeholder":{w:48}}})],1)])}),[],!1,null,null,null).exports,de={setup:function(e,t){return{investor:{title:"WhiteHawk CEC, Inc",btnText:"Send Investor Request",p:"WhiteHawk, listed on the Australian Securities Exchange (ASX:WHK), is a USA based cybersecurity company, providing cyber risk products, services and solutions. WhiteHawk developed and operates the first online cybersecurity exchange enabling businesses of all sizes to manage cybersecurity threats."}}}};de.components=Object.assign({ChartSvg:ie.a,WhitehawkStockTicker:pe},de.components);var fe=de,me=Object(m.a)(fe,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("section",{staticClass:"container mx-auto my-auto grid gap-12 p-8 lg:grid-cols-2 lg:gap-32 lg:py-12 xl:gap-48"},[n("div",{staticClass:"flex flex-col space-y-4 md:my-auto md:flex-row md:space-y-0 md:space-x-4"},[n("div",{staticClass:"flex h-12 w-12 shrink-0 items-center justify-center rounded-md bg-prime-indigo text-white"},[n("ChartSvg",{staticClass:"h-6 w-6"})],1),e._v(" "),n("div",{staticClass:"flex flex-col space-y-4"},[n("BaseSubtitle3",{staticClass:"text-prime-navy"},[e._v("\n        "+e._s(e.investor.title)+"\n      ")]),e._v(" "),n("BaseP1",{staticClass:"text-gray-500"},[e._v("\n        "+e._s(e.investor.p)+"\n      ")]),e._v(" "),n("div",{staticClass:"space-y-4"},[n("BaseButton",{staticClass:"mr-2 w-full sm:w-52",attrs:{to:{path:"/contact-us",query:{subject:"Investing"}},"display-type":"success",shape:"rectangle","aria-label":"Link to Contact Us Form"}},[e._v("\n          "+e._s(e.investor.btnText)+"\n        ")]),e._v(" "),n("BaseButton",{staticClass:"w-full sm:w-52",attrs:{"display-type":"success",shape:"rectangle",to:"/corporate-directory"}},[e._v("\n          Register For Notification\n        ")])],1)],1)]),e._v(" "),n("div",{staticClass:"mx-auto my-auto"},[n("WhitehawkStockTicker")],1)])}),[],!1,null,null,null),ve=me.exports;installComponents(me,{BaseSubtitle3:n(959).default,BaseP1:n(687).default,BaseButton:n(306).default});var ye=n(737),be=n(200),he=n(743),ge=n(733),xe=function(){return Object(be.c)([ge.a,"page-investor-center-seo"],Object(he.a)("".concat(ce.d,"/whitehawk-limited")))},we=Object(l.defineComponent)({layout:"siteMain",head:{}});we.setup=function(e,t){var n=xe();return Object(ye.a)(Object(l.computed)((function(){var e;return null===(e=n.data.value)||void 0===e?void 0:e.seo}))),{}},we.components=Object.assign({SiteMainBanner:r.a,LandingInvestorDescription:ae,LandingInvestorStock:ve,InvestorResourceDocuments:X},we.components);var ke=we,Oe=Object(m.a)(ke,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("main",{staticClass:"flex flex-col"},[n("SiteMainBanner"),e._v(" "),n("LandingInvestorDescription"),e._v(" "),n("LandingInvestorStock"),e._v(" "),n("InvestorResourceDocuments")],1)}),[],!1,null,null,null);t.default=Oe.exports},471:function(e,t,n){"use strict";n.r(t);var r=n(18),o=Object(r.defineComponent)({inheritAttrs:!1});o.props={variant:{key:"variant",required:!0,type:null},component:{key:"component",required:!1,type:null,default:"span"}},o.setup=function(e,t){var n="antialiased",o={h1:"".concat(n," font-display text-4xl font-semibold leading-snug tracking-wide sm:text-5xl md:text-6xl"),h2:"".concat(n," font-display text-3xl font-semibold leading-9 tracking-normal sm:text-5xl sm:leading-10"),h3:"".concat(n," font-display text-3xl font-medium leading-8 tracking-normal sm:text-4xl sm:leading-10"),h4:"".concat(n," font-display text-2xl font-medium leading-8 tracking-wide sm:text-3xl sm:leading-9"),h5:"".concat(n," font-display text-2xl font-medium leading-6 tracking-normal"),h6:"".concat(n," font-display text-xl font-semibold leading-7 tracking-wide"),p1:"".concat(n," font-body text-base font-normal leading-7 tracking-wide"),p2:"".concat(n," font-body text-sm font-normal leading-6 tracking-normal"),subtitle1:"".concat(n," font-body text-lg font-normal leading-6 tracking-wide sm:text-xl"),subtitle2:"".concat(n," font-body text-xs font-medium leading-5 tracking-wide"),subtitle3:"".concat(n," font-display text-lg font-medium leading-5 tracking-wide"),overline:"".concat(n," font-display text-xs font-medium tracking-widest"),button:"".concat(n," font-body text-xs font-medium tracking-wider sm:text-sm xl:tracking-wide")},c=e;return{displayTypeClass:Object(r.computed)((function(){return o[c.variant]}))}};var c=o,l=n(55),component=Object(l.a)(c,(function(){var e=this,t=e.$createElement;return(e._self._c||t)(e.component,e._g(e._b({tag:"Component",class:e.displayTypeClass},"Component",e.$attrs,!1),e.$listeners),[e._t("default")],2)}),[],!1,null,null,null);t.default=component.exports},479:function(e,t,n){"use strict";n.d(t,"b",(function(){return f})),n.d(t,"c",(function(){return m}));var r=n(26),o=(n(85),n(46),n(106),n(45),n(36),n(44),n(22),n(56),n(37),n(57),n(66)),c=n(18);function l(object,e){var t=Object.keys(object);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(object);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(object,e).enumerable}))),t.push.apply(t,n)}return t}function d(e){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?l(Object(source),!0).forEach((function(t){Object(r.a)(e,t,source[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(source)):l(Object(source)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(source,t))}))}return e}function f(e){var t=Object(o.g)();return Object(c.computed)((function(){var n=t.value.params[e];if(!n)throw new Error("Missing param: ".concat(e));return n}))}function m(e,t){var n,l=Object(o.g)(),f=Object(o.h)();return Object(c.computed)({get:function(){return l.value.query[e]||t},set:function(t){clearTimeout(n),n=setTimeout((function(){f.replace({query:d(d({},l.value.query),{},Object(r.a)({},e,t))})}),300)}})}n.d(t,"a",(function(){return o.g})),n.d(t,"d",(function(){return o.h}))},481:function(e,t,n){"use strict";n.r(t);var r=n(18),o=Object(r.defineComponent)({inheritAttrs:!1}),c=n(55),component=Object(c.a)(o,(function(){var e=this,t=e.$createElement;return(e._self._c||t)("label",e._g(e._b({staticClass:"block font-body text-sm font-medium leading-5 tracking-wide text-gray-600 antialiased",attrs:{role:"label"}},"label",e.$attrs,!1),e.$listeners),[e._t("default")],2)}),[],!1,null,null,null);t.default=component.exports},488:function(e,t,n){"use strict";n(22),n(122),n(104);var r=n(18),o={props:{definition:{key:"definition",required:!0,type:null}},setup:function(e,t){var n=e,o=Object(r.computed)((function(){return n.definition.icon[0]})),c=Object(r.computed)((function(){return n.definition.icon[1]}));return{svgPathData:Object(r.computed)((function(){return n.definition.icon[4].toString()})),viewBox:Object(r.computed)((function(){return"0 0 ".concat(o.value," ").concat(c.value)}))}}},c=o,l=n(55),component=Object(l.a)(c,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("svg",{attrs:{xmlns:"http://www.w3.org/2000/svg",viewBox:e.viewBox,"aria-hidden":"true",focusable:"false",role:"img"}},[n("path",{attrs:{fill:"currentColor",d:e.svgPathData}})])}),[],!1,null,null,null);t.a=component.exports},489:function(e,t,n){"use strict";var r=n(488),o=n(493),c={setup:function(e,t){return{definition:o.definition}}};c.components=Object.assign({FontAwesomeSvg:r.a},c.components);var l=c,d=n(55),component=Object(d.a)(l,(function(){var e=this,t=e.$createElement;return(e._self._c||t)("FontAwesomeSvg",{staticClass:"h-5 w-5 animate-spin",attrs:{definition:e.definition}})}),[],!1,null,null,null);t.a=component.exports},509:function(e,t,n){"use strict";n.r(t);n(104);var r=n(18),o=Object(r.defineComponent)({inheritAttrs:!1});o.props={displayType:{key:"displayType",required:!1,type:null,default:"normal"}},o.setup=function(e,t){var text="no-underline antialiased font-body text-base leading-6 font-medium",n="focus:outline-none disabled:cursor-not-allowed disabled:opacity-50",base="".concat(n," ").concat(text," ").concat("transform transition duration-200 hover:-translate-y-px"," inline-flex"),o={normal:"".concat(base," text-blue-500 hover:text-blue-700 focus:text-blue-800"),dark:"".concat(base," text-white hover:text-gray-400 focus:text-gray-400"),gray:"".concat(base," text-gray-500 hover:text-prime-indigo focus:text-prime-indigo"),primary:"".concat(base," text-blue-500 hover:text-teal-500"),"primary-prime":"".concat(base," text-prime-indigo hover:text-indigo-400 focus:text-indigo-400"),secondary:"".concat(base," text-prime-navy hover:text-prime-indigo focus:text-prime-indigo"),none:"".concat(n," ").concat(text," inline-flex")},c=e;return{displayTypeClass:Object(r.computed)((function(){return o[c.displayType]}))}};var c=o,l=n(55),component=Object(l.a)(c,(function(){var e=this,t=e.$createElement;return(e._self._c||t)("NuxtLink",e._g(e._b({class:e.displayTypeClass},"NuxtLink",e.$attrs,!1),e.$listeners),[e._t("default")],2)}),[],!1,null,null,null);t.default=component.exports},542:function(e,t,n){"use strict";var r=n(38),o=(n(22),n(48),n(47),n(307),n(202),n(226),n(104),n(485),n(69),n(41),n(70),n(46),n(36),n(67),n(68),n(511)),c=n(18),l=n(201);function d(e,t){var n="undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(!n){if(Array.isArray(e)||(n=function(e,t){if(!e)return;if("string"==typeof e)return f(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(e);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return f(e,t)}(e))||t&&e&&"number"==typeof e.length){n&&(e=n);var i=0,r=function(){};return{s:r,n:function(){return i>=e.length?{done:!0}:{done:!1,value:e[i++]}},e:function(e){throw e},f:r}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var o,c=!0,l=!1;return{s:function(){n=n.call(e)},n:function(){var e=n.next();return c=e.done,e},e:function(e){l=!0,o=e},f:function(){try{c||null==n.return||n.return()}finally{if(l)throw o}}}}function f(e,t){(null==t||t>e.length)&&(t=e.length);for(var i=0,n=new Array(t);i<t;i++)n[i]=e[i];return n}var m=Object(c.defineComponent)({inheritAttrs:!1});m.props={src:{key:"src",required:!0,type:String},options:{key:"options",required:!0,type:null},optionsPlaceholder:{key:"optionsPlaceholder",required:!0,type:null}},m.setup=function(e,t){var n=e;function f(e){for(var t=new URLSearchParams,o=0,c=Object.entries(e);o<c.length;o++){var d=c[o],f=Object(r.a)(d,2),m=f[0],v=f[1];t.append(m,String(v))}return t.append("url",n.src),n.src.startsWith("http://localhost")?"".concat(n.src,"#").concat(t):"".concat(l.h,"/?").concat(t)}var m=Object(c.computed)((function(){return f(n.options)})),v=Object(c.computed)((function(){return f(n.optionsPlaceholder)})),y=Object(c.computed)((function(){var e=n.options.w;return e?Math.log(Number(e)):4})),h=Object(c.shallowRef)(!1),x=Object(c.shallowRef)(!1),w=Object(c.shallowRef)(0),img=Object(c.shallowRef)(),k=Object(o.useIntersectionObserver)(img,(function(e){var t,n=d(e);try{for(n.s();!(t=n.n()).done;){if(t.value.isIntersecting)return x.value=!0,void O()}}catch(e){n.e(e)}finally{n.f()}})),O=k.stop;return k.isSupported.value||(x.value=!0),{generatedUrl:m,placeholderUrl:v,blurAmount:y,error:h,inView:x,loaded:w,img:img}};var v=m,y=(n(605),n(55)),component=Object(y.a)(v,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return e.error?n("img",e._b({attrs:{src:"https://wh-site.s3.amazonaws.com/Coming+Soon.png"}},"img",e.$attrs,!1)):n("img",e._b({ref:"img",staticClass:"transition-filter duration-150",style:{filter:e.loaded<2?"blur("+e.blurAmount+"px)":void 0},attrs:{src:0!==e.loaded&&e.inView?e.generatedUrl:e.placeholderUrl},on:{load:function(t){e.loaded+=1},error:function(t){e.error=!0}}},"img",e.$attrs,!1))}),[],!1,null,"655aa004",null);t.a=component.exports},544:function(e,t,n){e.exports={}},605:function(e,t,n){"use strict";n(544)},687:function(e,t,n){"use strict";n.r(t);var r=n(55),component=Object(r.a)({},(function(){var e=this,t=e.$createElement;return(e._self._c||t)("p",{staticClass:"font-body text-base font-normal leading-7 tracking-wide"},[e._t("default")],2)}),[],!1,null,null,null);t.default=component.exports},689:function(e,t,n){"use strict";n.r(t);var r=n(18),o=Object(r.defineComponent)({inheritAttrs:!1});o.props={displayType:{key:"displayType",required:!1,type:String,default:"no-style"}},o.setup=function(e,t){var n=e;return{displayTypeClass:Object(r.computed)((function(){switch(n.displayType){case"no-style":return;case"primary":return"text-prime-blue hover:text-blue-800";case"secondary":return"text-prime-indigo hover:text-indigo-400";case"gray":return"text-gray-500 hover:text-prime-indigo focus:text-prime-indigo";default:return"text-blue-500 hover:text-blue-800"}}))}};var c=o,l=n(55),component=Object(l.a)(c,(function(){var e=this,t=e.$createElement;return(e._self._c||t)("a",e._g(e._b({staticClass:"no-underline",class:e.displayTypeClass,attrs:{target:"_blank",rel:"noopener noreferrer"}},"a",e.$attrs,!1),e.$listeners),[e._t("default")],2)}),[],!1,null,null,null);t.default=component.exports},702:function(e,t,n){"use strict";n(86),n(87);var r=n(542),o=n(18),c=n(201),l=n(479),d={};d.props={landing:{key:"landing",required:!1,type:Boolean},coverImage:{key:"coverImage",required:!1,type:String}},d.setup=function(e,t){var n="".concat(c.f,"/main-page-pics/line-waves-crop.svg"),r=Object(l.a)().value.path,d=Object(o.computed)((function(){return r.includes("client")||r.includes("admin")}));return{backgroundUrl:n,text:Object(o.computed)((function(){if(d.value||r.includes("profile"))return{title:"WhiteHawk Client Portal"};switch(r){case"/corporate-directory":case"/corporate-directory/":return{title:"Corporate Directory"};case"/enterprise":case"/enterprise/":return{title:"Enterprise Solutions",subtitle:"Defend Your Company and Supply Chain Against Evolving Threats"};case"/cyber-risk-radar":case"/cyber-risk-radar/":return{title:"Cyber Risk Radar",subtitle:"Streamline Your Supply Chain Risk Monitoring & Mitigation of Threats"};case"/cyber-risk-program":case"/cyber-risk-program/":return{title:"Cyber Risk Program",subtitle:"Get a Hacker’s View of Your Cyber Risks"};case"/cyber-risk-paas":case"/cyber-risk-paas/":return{title:"Cyber Risk Platform as a Service",subtitle:"For Business & Organization Clients of ISPs, MSPs, Banks, and Government Entities"};case"/innovative-solutions":case"/innovative-solutions/":return{title:"Innovative Solutions Focused on Enterprises",subtitle:"We Do All the Work for You"};case"/training-and-education":case"/training-and-education/":return{title:"Cyber Training & Education",subtitle:"Enable your Team to Stop Online Fraud in its Tracks"};case"/small-midsize":case"/small-midsize/":return{title:"Small and Midsize Businesses",subtitle:"Don’t have a CIO or CISO? We Will Help You Protect Your Business"};case"/cyber-risk-journey":case"/cyber-risk-journey/":return{title:"Cyber Risk Journey",subtitle:"Cyber Risk Management doesn’t have to be daunting. We partner with you to help take the necessary steps over time to improving your cyber risk posture."};case"/cyber-risk-scorecard":case"/cyber-risk-scorecard/":return{title:"Cyber Risk Scorecard",subtitle:"Get a Snapshot of Your Company’s Vulnerabilities and a Roadmap to Address Them"};case"/business-risk-suite":case"/business-risk-suite/":return{title:"Business Risk Suite",subtitle:"Personalize Your Protection with Sontiq & WhiteHawk Scalable SMB Offering"};case"/cmmc":case"/cmmc/":return{title:"Your Path to CMMC",subtitle:"Start your Cybersecurity Maturity Model Certification baseline today"};case"/marketplace/products":case"/marketplace/products/":return{title:"Marketplace",subtitle:"We Are The World's First Cybersecurity Exchange"};case"/marketplace/products-comparison":case"/marketplace/products-comparison/":return{title:"Product Comparison",subtitle:"Side-by-Side Comparison of up to Four Products"};case"/blog":case"/blog/":return{title:"News & Insights",subtitle:"Cybersecurity Insights Simplified"};case"/about-us":case"/about-us/":return{title:"About Us",subtitle:"We Are The World's First Cybersecurity Exchange"};case"/whitehawk-limited":case"/whitehawk-limited/":return{title:"Investor Center"};case"/careers":case"/careers/":return{title:"WhiteHawk is Hiring"};case"/contact-us":case"/contact-us/":return{title:"Contact Us",subtitle:"We are here to help and answer any questions you might have. We look forward to hearing from you."};case"/contact-us/thank-you":case"/contact-us/thank-you/":return{title:"Contact Us"};case"/scheduler":case"/scheduler/":return{title:"Schedule An Appointment"};case"/terms-conditions":return{title:"WhiteHawk Terms & Conditions"};case"/privacy-notice":return{title:"WhiteHawk Privacy Policy"};case"/questionnaire":return{title:"Cyber Threat Readiness Questionnaire",subtitle:"Answer just 10 questions and find out your top vulnerabilities and get matched to products that can help you today"};case"/marketplace/aws/register/success":case"/marketplace/aws/register/success/":return{title:"WhiteHawk SaaS Fulfillment"};case"/esg":case"/esg/":return{title:"Environmental, Social & Governance (ESG)",subtitle:"Principles for Impactful Growth"};default:return{title:"Defend Your Business Against Cybercrime"}}}))}},d.components=Object.assign({LazyImg:r.a},d.components);var f=d,m=n(55),component=Object(m.a)(f,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("section",{staticClass:"relative flex h-64 w-full items-center justify-center",class:e.landing?"min-h-30":"min-h-0"},[e.coverImage?n("LazyImg",{staticClass:"absolute z-0 h-full w-full object-cover",attrs:{src:e.coverImage,alt:"Cover Image",options:{w:2e3,il:!0},"options-placeholder":{w:100}}}):e._e(),e._v(" "),n("div",{staticClass:"absolute z-0 h-full w-full bg-prime-navy bg-[length:517px] bg-bottom bg-repeat-x",class:e.coverImage?"opacity-75":"",style:{backgroundImage:"url("+e.backgroundUrl+")"}}),e._v(" "),n("ClientOnly",[n("div",{staticClass:"z-10 flex max-w-xs flex-col space-y-4 text-center text-white sm:max-w-md md:max-w-2xl lg:max-w-4xl"},[n("BaseTypography",{attrs:{component:"h1",variant:"h2"}},[e._v("\n        "+e._s(e.text.title)+"\n      ")]),e._v(" "),n("BaseTypography",{attrs:{component:"span",variant:"subtitle1"}},[e._v("\n        "+e._s(e.text.subtitle)+"\n      ")])],1)])],1)}),[],!1,null,null,null);t.a=component.exports;installComponents(component,{BaseTypography:n(471).default})},733:function(e,t,n){"use strict";n.d(t,"a",(function(){return r}));var r="whitehawk-cms"},737:function(e,t,n){"use strict";n.d(t,"a",(function(){return c}));n(76),n(41),n(732);var r=n(66),o=n(18);function c(e){var t=Object(o.computed)((function(){var t,n,r,o=e.value;if(!o)return{};var title=o.title,c=o.Meta,image=o.image,meta=c.map((function(e){return{name:e.name,content:e.content}}));if(image){var l=image.formats;meta.push({name:"og:image",content:(null===(t=null==l?void 0:l.medium)||void 0===t?void 0:t.url)||(null===(n=null==l?void 0:l.small)||void 0===n?void 0:n.url)||(null===(r=null==l?void 0:l.thumbnail)||void 0===r?void 0:r.url)})}return{title:title,meta:meta}}));return Object(r.f)((function(){return t.value}))}},743:function(e,t,n){"use strict";n.d(t,"a",(function(){return l}));var r=n(11),o=(n(53),n(78)),c=n.n(o);function l(e){return function(){var t=Object(r.a)(regeneratorRuntime.mark((function t(){var n,data;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,c.a.get(e);case 2:return n=t.sent,data=n.data,t.abrupt("return",data);case 5:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}()}},788:function(e,t,n){"use strict";var r=n(533),o=n.n(r),c={};c.props={value:{key:"value",required:!0,type:Boolean}},c.setup=function(e,t){return{emit:t.emit}},c.components=Object.assign({ChevronRightSvg:o.a},c.components);var l=c,d=n(55),component=Object(d.a)(l,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("button",{staticClass:"flex items-center focus:outline-none",attrs:{type:"button"},on:{click:function(t){return e.emit("input",!e.value)}}},[e._t("text"),e._v(" "),n("ChevronRightSvg",{staticClass:"h-5 w-5 transform transition-transform duration-100",class:e.value?"rotate-90":""})],2)}),[],!1,null,null,null);t.a=component.exports},828:function(e,t,n){"use strict";var r={};r.props={color:{key:"color",required:!1,type:String,default:"blue"}},r.setup=function(e,t){return{}};var o=r,c=n(55),component=Object(c.a)(o,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("svg",{attrs:{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 417.34 268.48"}},[n("text",{attrs:{x:"208.67",y:"255.03",fill:e.color,"font-size":"58","letter-spacing":"6","text-anchor":"middle","text-rendering":"geometricPrecision"}},[e._v("\n    WHITEHAWK\n  ")]),e._v(" "),n("g",{attrs:{fill:"none","shape-rendering":"geometricPrecision",stroke:e.color,"stroke-miterlimit":"10","stroke-width":"5"}},[n("path",{attrs:{d:"M.38 6.86a220.44 220.44 0 0 1 47.34-5.11c104.86 0 192.59 73.32 214.73 171.48"}}),e._v(" "),n("path",{attrs:{d:"M152.5 172.54C174.89 74.72 262.5 1.75 367.07 1.75a221 221 0 0 1 49.88 5.68"}}),e._v(" "),n("path",{attrs:{d:"M8.5 35.83a219.6 219.6 0 0 1 80.22-15.08c93.72 0 173.76 58.57 205.51 141.1"}}),e._v(" "),n("path",{attrs:{d:"M120.96 160.82c32-82 111.78-140.07 205.11-140.07a219.44 219.44 0 0 1 82.54 16"}}),e._v(" "),n("path",{attrs:{d:"M20.57 63.68a220.25 220.25 0 0 1 301 83.24"}}),e._v(" "),n("path",{attrs:{d:"M96.1 147.08a220.26 220.26 0 0 1 300.86-83.55"}}),e._v(" "),n("path",{attrs:{d:"M35.48 88.41a220.15 220.15 0 0 1 309.39 41.12"}}),e._v(" "),n("path",{attrs:{d:"M70.98 128.15a220.15 220.15 0 0 1 310.05-38.4"}}),e._v(" "),n("path",{attrs:{d:"M51.67 108.98a220.11 220.11 0 0 1 311.6 2.8"}})])])}),[],!1,null,null,null);t.a=component.exports},959:function(e,t,n){"use strict";n.r(t);var r=n(55),component=Object(r.a)({},(function(){var e=this,t=e.$createElement;return(e._self._c||t)("span",{staticClass:"font-display text-lg font-medium leading-5 tracking-wide antialiased"},[e._t("default")],2)}),[],!1,null,null,null);t.default=component.exports}}]);