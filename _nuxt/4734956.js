(window.webpackJsonp=window.webpackJsonp||[]).push([[76,48,51,56,59,63,69],{1041:function(e,t,n){"use strict";n.r(t);var r=n(55),component=Object(r.a)({},(function(){var e=this,t=e.$createElement;return(e._self._c||t)("h3",{staticClass:"font-display text-3xl font-extrabold leading-8 tracking-normal antialiased sm:text-4xl sm:leading-10"},[e._t("default")],2)}),[],!1,null,null,null);t.default=component.exports},1988:function(e,t,n){"use strict";n.r(t);var r=n(708),o=n(834),l=(n(121),n(540)),c=n.n(l),d=n(616),m=n.n(d),f=n(546),h=n(20),v=n(198),y={props:{member:{key:"member",required:!0,type:null}},setup:function(e,t){var n=e,r=Object(h.ref)(!1),o=Object(h.computed)((function(){return"".concat(v.f,"/team-pictures/").concat(n.member.imageName,".png")})),l=Object(h.computed)((function(){return r.value?m.a:c.a}));return{isShowing:r,imageUrl:o,dynamicToggleButton:l,showText:function(){r.value=!r.value}}}};y.components=Object.assign({LazyImg:f.a},y.components);var x=y,w=n(55),component=Object(w.a)(x,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("section",{staticClass:"grid items-start p-4 md:grid-cols-12 md:gap-4 md:p-8"},[n("div",{staticClass:"p-4 md:col-span-3 md:px-0 lg:col-span-2"},[n("LazyImg",{staticClass:"inline-block h-24 w-24 rounded-full object-cover md:h-28 md:w-28",attrs:{src:e.imageUrl,options:{w:200,il:!0},alt:"Profile Pictures","options-placeholder":{w:48}}})],1),e._v(" "),n("div",{staticClass:"md:col-span-9 lg:col-span-10"},[n("ul",{staticClass:"flex flex-col"},[n("li",{staticClass:"space-y-4 text-center md:text-left"},[n("div",[n("BaseH6",{staticClass:"text-prime-navy"},[e._v("\n            "+e._s(e.member.name)+"\n          ")]),e._v(" "),n("span",{staticClass:"font-arial text-sm font-bold leading-5 text-gray-500"},[e._v("\n            "+e._s(e.member.title)+"\n          ")])],1),e._v(" "),n("div",{staticClass:"overflow-hidden transition-all duration-700 ease-in-out",style:e.isShowing?{maxHeight:"220rem"}:{maxHeight:"5.5rem"}},e._l(e.member.background,(function(t,r){return n("BaseP1",{key:r,staticClass:"pb-2 text-left text-gray-500"},[e._v("\n            "+e._s(t)+"\n          ")])})),1),e._v(" "),n("div",{staticClass:"flex"},[n("BaseLink",{staticClass:"flex items-center justify-center pr-1",attrs:{"display-type":"primary-prime",to:""},nativeOn:{click:function(t){return e.showText.apply(null,arguments)}}},[n("span",{staticClass:"flex items-center",class:e.isShowing?"text-prime-indigo hover:text-indigo-400":""},[e._v("\n              "+e._s(e.isShowing?"Read Less":"Read More")+"\n\n              "),n(e.dynamicToggleButton,{tag:"Component",staticClass:"h-5 w-5"})],1)])],1)])])])])}),[],!1,null,null,null),C=component.exports;installComponents(component,{BaseH6:n(926).default,BaseP1:n(665).default,BaseLink:n(512).default});var O={};O.props={executiveTeam:{key:"executiveTeam",required:!0,type:Array}},O.setup=function(e,t){return{}},O.components=Object.assign({ExecMember:C},O.components);var k=O,_=Object(w.a)(k,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"space-y-5 pt-12"},[n("BaseH3",{staticClass:"text-prime-navy"},[e._v("Our Leadership")]),e._v(" "),n("ul",{staticClass:"divide-y"},e._l(e.executiveTeam,(function(e){return n("li",{key:e.name},[n("ExecMember",{attrs:{member:e}})],1)})),0)],1)}),[],!1,null,null,null),S=_.exports;installComponents(_,{BaseH3:n(1041).default});n(42),n(76);var j={props:{member:{key:"member",required:!0,type:null}},setup:function(e,t){var n=e,r=Object(h.ref)(!1),o=Object(h.computed)((function(){return"".concat(v.f,"/team-pictures/").concat(n.member.imageName,".png")})),l=Object(h.computed)((function(){var e;return n.member.name.split(" ")[0]+" "+(null===(e=n.member.name.split(" ")[1])||void 0===e?void 0:e.slice(0,1))+"."}));return{active:r,imageUrl:o,displayName:l,toggle:function(){r.value=!r.value}}}};j.components=Object.assign({LazyImg:f.a},j.components);var I=j,E=Object(w.a)(I,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"relative flex cursor-default flex-col md:flex-row md:items-start",on:{mouseenter:e.toggle,mouseleave:e.toggle}},[e.active?n("div",{staticClass:"absolute flex h-24 w-24 items-center justify-center rounded-full bg-indigo-500 px-1 py-4 font-extrabold leading-tight text-white opacity-80 md:h-28 md:w-28 md:py-8"},[n("BaseH6",[e._v("\n      "+e._s(e.displayName)+"\n    ")])],1):e._e(),e._v(" "),n("LazyImg",{staticClass:"inline-block h-24 w-24 rounded-full object-cover md:h-28 md:w-28",attrs:{src:e.imageUrl,alt:e.displayName,options:{w:200,il:!0},"options-placeholder":{w:48}}})],1)}),[],!1,null,null,null),N=E.exports;installComponents(E,{BaseH6:n(926).default});var T={};T.props={team:{key:"team",required:!0,type:Array}},T.setup=function(e,t){return{}},T.components=Object.assign({TeamMember:N},T.components);var P=T,A=Object(w.a)(P,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"mt-12 space-y-5"},[n("BaseH3",{staticClass:"text-prime-navy"},[e._v("Our Team")]),e._v(" "),n("ul",{staticClass:"flex flex-wrap justify-center"},e._l(e.team,(function(e){return n("li",{key:e.name,staticClass:"mx-2 justify-start p-4"},[n("TeamMember",{attrs:{member:e}})],1)})),0)],1)}),[],!1,null,null,null),M=A.exports;installComponents(A,{BaseH3:n(1041).default});var D=n(722),R=n(197),B=n(750),H=n(716),W=function(){return Object(R.c)([H.a,"page-about-us-seo"],Object(B.a)("".concat(v.d,"/about-us")))},z=Object(h.defineComponent)({layout:"siteMain",head:{}});z.setup=function(e,t){var n="".concat(v.f,"/main-page-pics/line-waves-sm-dark.svg"),r=W();return Object(D.a)(Object(h.computed)((function(){var e;return null===(e=r.data.value)||void 0===e?void 0:e.seo}))),{backgroundUrl:n,companyDesc:["We are driven to stop online crime and fraud in its tracks across businesses and organizations of all sizes. And we know that starts with enabling all of us to take smart action today: for our businesses, for our organizations, for our family offices, for ourselves.","Ours is a unique end to end risk based approach - from Digital Age Risk Identification, Prioritization to Mitigation - using globally available open data sets, AI based risk analytics, and online platforms that provide clients with their prioritized cyber risks, automated cyber risk roadmaps and matching to best of breed solution options, assessments, an online maturity model and virtual consults.","With Terry Roberts’ (CEO) and Soo Kim’s (COO) easy to use, affordable and accessible “Hacker View of Your Risk” online approach, we’re delivering an innovative, collaborative, and agile e-commerce ecosystem - The WhiteHawk Cybersecurity Exchange - based upon our patent pending, online platform, including hundreds of continuously vetted innovative, best of breed cyber solution partners.","It is time for all to “take drivers education, get an annual inspection, follow the rules of the road, wear our seatbelts and purchase insurance” so that we can operate our global economy smartly and safely, thereby mitigating the majority of  Digital Age Risks to our Revenue, Reputation and Operations."],team:[{name:"Michael Good",imageName:"Michael_Good"},{name:"Mike Ferris",imageName:"Mike_Ferris"},{name:"Israel Villanueva",imageName:"Israel_Villanueva"},{name:"David Brady",imageName:"David_Brady"},{name:"Morgan Goodale",imageName:"Morgan_Goodale"},{name:"Jacob Bradley",imageName:"Jacob_Bradley"},{name:"Alex Chaphiv",imageName:"Alex_Chaphiv"},{name:"Emma Stotz",imageName:"Emma_Stotz"},{name:"Amit Niroula",imageName:"Amit_Niroula"},{name:"Daniel Merene",imageName:"Daniel_Merene"},{name:"Scott Miller",imageName:"Scott_Miller"},{name:"Sakeef Salman",imageName:"Sakeef_Salman"},{name:"Chris Duong",imageName:"Chris_Duong"},{name:"William Hortman",imageName:"William_Hortman"}],executiveTeam:[{id:"ceo_and_founder",name:"Terry Roberts",title:"Founder & CEO",imageName:"Terry_Roberts",background:["Terry Roberts has established the first Cybersecurity Online Exchange - enabling all businesses (especially mid- sized and small companies) to have continuous online access to tailored learning, smart buying, and connections to the best products, services, insights, and trends industry wide. Previously, Terry was the TASC Vice President for Cyber Engineering and Analytics, running all Cyber/IT, Financial, and Business Analytics cross cutting, innovative technical services. Prior to TASC, Terry was the Executive Director of the Carnegie Mellon, Software Engineering Institute, leading the technical body of work for the entire US Interagency, with a special focus on leveraging and transitioning commercial innovation and acquisition excellence to government programs and capabilities, and establishing the Emerging Technologies Center and Cyber Intelligence Consortium.","Before transitioning to industry in 2009, Terry Roberts was the Deputy Director of Naval Intelligence (DDNI), where she led, together with the Director of Naval Intelligence, more than 20,000 intelligence and information-warfare military and civilian professionals and managed more than $5 billion in resources, technologies, and programs globally. She helped lead the initial approach for the merging of Naval Communications and Intelligence under the OPNAV N2/N6 and the creation of the Information Dominance Corps. Prior to being the Navy DDNI, Terry Roberts served as the Director of Requirements and Resources for the Office of the Under Secretary of Defense for Intelligence (USDI), spearheading the creation and implementation of the Military Intelligence Program (MIP), in partnership with the Director of National Intelligence, the Services, the Combat Support Agencies, and the Office of the Secretary of Defense (OSD).","An intelligence professional for over 30 years, Terry has held many senior intelligence positions, including Director of Intelligence, Commander Naval Forces Europe and Commander-in-Chief NATO AFSOUTH; Director, Defense Intelligence Resource Management Office (manager of the General Defense Intelligence Program); Director, Naval Command, Control, Communications, Computers, Intelligence, Surveillance and Reconnaissance (C4ISR) Scientific and Technical Intelligence (S&TI) analysis at the Office of Naval Intelligence; special assistant to the Associate Director of Central Intelligence for Military Support, and the Chief of Staff for the Director Military Intelligence Staff. In addition, Terry has directed, conducted, and enabled intelligence operations globally, with much of this work being focused on the requirements, planning, and implementation of intelligence and communications technologies, software, and architectures.","Terry Roberts is the Chair Emeritus of the Intelligence and National Security Alliance (INSA) Cyber Council since 2010, a Member of the AFCEA Intelligence Committee since 2008, on the Naval Intelligence Professionals (NIP) Board of Directors, a Cyber Fellow at New America (non-partisan think tank), and a member of the US Naval Academy Cyber Education Advisory Board of Directors since 2010.","Terry’s personal awards include the Office of the Secretary of Defense Medal for Exceptional Civilian Service; the Navy Senior Civilian Award of Distinction, the NGA Personal Medallion for Excellence; the Coast Guard Distinguished Public Service Award; the Director of Central Intelligence National Intelligence Certificate of Distinction; the National Intelligence Reform Medal; and the National Intelligence Meritorious Unit Citation."]},{id:"chief_operating_officer",name:"Soo Kim",title:"Chief Operating Officer",imageName:"Soo_Kim",background:["Soo Kim is WhiteHawk’s Chief Operating Officer (COO). In this role, she is responsible for all of the optimization of WhiteHawk’s internal business operations and performance. This includes product and service vision, strategy, design, development, delivery and all customer facing services; while ensuring the company’s in-house and customer ecosystem is continuously improved to deliver an easy, intuitive, and enabling set of online services and offerings.","Previously, Soo has held Executive and Senior technical management positions as Chief Product Officer, Vice President, Technical Director, Cybersecurity Strategist, Solution Architect and Software Development Engineer at TASC, Northrop Grumman, Accenture Federal Services and Hewlett Packard Enterprise Services. Soo has provided leadership for the development of cybersecurity assets and capabilities in support of clients; served as the technical lead on multiple prime bids; and established and integrated best practices for business operations and continuity, customer program execution, business growth, and financial management and reporting.","Soo brings over 20 years of experience in technical and business leadership, with a focus on strategic planning, tactical execution, business operations, and solutions delivery. She has her bachelor’s degree in Mathematics from Virginia Tech and is a Certified Enterprise Architect and Scrum Master."]},{id:"chief_financial_officer",name:"Kevin Goodale",title:"Chief Financial Officer",imageName:"Kevin_Goodale",background:["Kevin Goodale is a co-founder of WhiteHawk and serves as Chief Financial Officer (CFO). In this role, Kevin is responsible for the Administration of WhiteHawk to include the Accounting Function, the Human Resources Function and Executive Director Function.  As the CFO, Kevin is responsible for the complete accounting cycle, banking and finance relationships, payroll management, job costing, accounts receivable, accounts payable management and all managerial financial reports in support of the C-Suite.","Administratively, Kevin has a Human Resources responsibilities support the C-Suite in personnel requisitions, hiring and terminations, management of all employee benefits plans and all aspects of employee welfare."]},{id:"senior_advisor",name:"Luis Cruz-Rivera",title:"Co-Founder and Senior Technology Advisor",imageName:"Luis_Cruz_Rivera",background:["Luis Cruz-Rivera is the technical and business architect for the WhiteHawk Decision Engine and online ecosystem, CyberPath, bringing to WhiteHawk a proven track record in leading world-class development teams responsible for delivering industry-leading solutions.","Luis previously held technical director and engineering leadership positions for over 14 years at TASC and ManTech where he was responsible for the architecture, technology commercialization, and delivery of various projects that include mobility, embedded data management, and telecommunications, among other areas. He also spent over five years at the Sentric venture accelerator where he focused on intellectual property strategy, web application development, and data science.","Luis holds a Master of Science in Electrical Engineering from Stanford University and performed graduate work at Georgia Tech and the University of Minnesota."]}]}},z.components=Object.assign({SiteMainBanner:r.a,WhitehawkLogo:o.a,TeamCollage:M,ExecTeamMembers:S},z.components);var F=z,U=Object(w.a)(F,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("main",{staticClass:"flex flex-col bg-gray-100 bg-[length:517px] bg-bottom bg-repeat-x",style:{backgroundImage:"url("+e.backgroundUrl+")"}},[n("SiteMainBanner"),e._v(" "),n("section",{staticClass:"container mx-auto flex max-w-6xl flex-col p-8"},[n("div",{staticClass:"flex"},[n("div",{staticClass:"flex-1"},[n("div",{staticClass:"flex-1 sm:flex"},[n("WhitehawkLogo",{staticClass:"mx-auto h-24 w-24"})],1),e._v(" "),n("div",{staticClass:"space-y-5 px-2 py-2 text-center md:px-4 lg:px-0"},[n("BaseH3",{staticClass:"text-prime-navy"},[e._v("Our Story")]),e._v(" "),n("div",{staticClass:"space-y-3 text-left text-gray-500 sm:text-center"},e._l(e.companyDesc,(function(t){return n("BaseP1",{key:t},[e._v("\n              "+e._s(t)+"\n            ")])})),1)],1)])])]),e._v(" "),n("BaseSimpleCard",{staticClass:"container mx-auto my-12 flex flex-col space-y-12 text-center"},[n("TeamCollage",{attrs:{team:e.team}}),e._v(" "),n("ExecTeamMembers",{attrs:{"executive-team":e.executiveTeam}})],1)],1)}),[],!1,null,null,null);t.default=U.exports;installComponents(U,{BaseH3:n(1041).default,BaseP1:n(665).default,BaseSimpleCard:n(494).default})},470:function(e,t){e.exports=function(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e},e.exports.__esModule=!0,e.exports.default=e.exports},471:function(e,t,n){var r=n(490);e.exports=function(source,e){if(null==source)return{};var t,i,n=r(source,e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(source);for(i=0;i<o.length;i++)t=o[i],e.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(source,t)&&(n[t]=source[t])}return n},e.exports.__esModule=!0,e.exports.default=e.exports},472:function(e,t,n){"use strict";n.r(t);var r=n(20),o=Object(r.defineComponent)({inheritAttrs:!1});o.props={variant:{key:"variant",required:!0,type:null},component:{key:"component",required:!1,type:null,default:"span"}},o.setup=function(e,t){var n="antialiased",o={h1:"".concat(n," font-display text-4xl font-semibold leading-snug tracking-wide sm:text-5xl md:text-6xl"),h2:"".concat(n," font-display text-3xl font-semibold leading-9 tracking-normal sm:text-5xl sm:leading-10"),h3:"".concat(n," font-display text-3xl font-medium leading-8 tracking-normal sm:text-4xl sm:leading-10"),h4:"".concat(n," font-display text-2xl font-medium leading-8 tracking-wide sm:text-3xl sm:leading-9"),h5:"".concat(n," font-display text-2xl font-medium leading-6 tracking-normal"),h6:"".concat(n," font-display text-xl font-semibold leading-7 tracking-wide"),p1:"".concat(n," font-body text-base font-normal leading-7 tracking-wide"),p2:"".concat(n," font-body text-sm font-normal leading-6 tracking-normal"),subtitle1:"".concat(n," font-body text-lg font-normal leading-6 tracking-wide sm:text-xl"),subtitle2:"".concat(n," font-body text-xs font-medium leading-5 tracking-wide"),subtitle3:"".concat(n," font-display text-lg font-medium leading-5 tracking-wide"),overline:"".concat(n," font-display text-xs font-medium tracking-widest"),button:"".concat(n," font-body text-xs font-medium tracking-wider sm:text-sm xl:tracking-wide")},l=e;return{displayTypeClass:Object(r.computed)((function(){return o[l.variant]}))}};var l=o,c=n(55),component=Object(c.a)(l,(function(){var e=this,t=e.$createElement;return(e._self._c||t)(e.component,e._g(e._b({tag:"Component",class:e.displayTypeClass},"Component",e.$attrs,!1),e.$listeners),[e._t("default")],2)}),[],!1,null,null,null);t.default=component.exports},483:function(e,t,n){"use strict";n.d(t,"a",(function(){return d})),n.d(t,"d",(function(){return m})),n.d(t,"b",(function(){return f})),n.d(t,"c",(function(){return h}));var r=n(28),o=(n(84),n(49),n(103),n(47),n(38),n(46),n(24),n(63),n(39),n(64),n(20));function l(object,e){var t=Object.keys(object);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(object);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(object,e).enumerable}))),t.push.apply(t,n)}return t}function c(e){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?l(Object(source),!0).forEach((function(t){Object(r.a)(e,t,source[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(source)):l(Object(source)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(source,t))}))}return e}function d(){var e=Object(o.getCurrentInstance)();if(!e)throw new Error("Not in setup()?");return Object(o.computed)((function(){return e.proxy.$route}))}function m(){var e=Object(o.getCurrentInstance)();if(!e)throw new Error("Not in setup()?");return e.proxy.$router}function f(e){var t=d();return Object(o.computed)((function(){var n=t.value.params[e];if(!n)throw new Error("Missing param: ".concat(e));return n}))}function h(e,t){var n,l=d(),f=m();return Object(o.computed)({get:function(){return l.value.query[e]||t},set:function(t){clearTimeout(n),n=setTimeout((function(){f.replace({query:c(c({},l.value.query),{},Object(r.a)({},e,t))})}),300)}})}},489:function(e,t,n){"use strict";var r=n(25),o=n(14),l=n(11),c=n(124),d=n(33),m=n(26),f=n(219),h=n(78),v=n(123),y=n(312),x=n(12),w=n(106).f,C=n(57).f,O=n(30).f,k=n(531),_=n(515).trim,S="Number",j=o.Number,I=j.prototype,E=o.TypeError,N=l("".slice),T=l("".charCodeAt),P=function(e){var t=y(e,"number");return"bigint"==typeof t?t:A(t)},A=function(e){var t,n,r,o,l,c,d,code,m=y(e,"number");if(v(m))throw E("Cannot convert a Symbol value to a number");if("string"==typeof m&&m.length>2)if(m=_(m),43===(t=T(m,0))||45===t){if(88===(n=T(m,2))||120===n)return NaN}else if(48===t){switch(T(m,1)){case 66:case 98:r=2,o=49;break;case 79:case 111:r=8,o=55;break;default:return+m}for(c=(l=N(m,2)).length,d=0;d<c;d++)if((code=T(l,d))<48||code>o)return NaN;return parseInt(l,r)}return+m};if(c(S,!j(" 0o1")||!j("0b1")||j("+0x1"))){for(var M,D=function(e){var t=arguments.length<1?0:j(P(e)),n=this;return h(I,n)&&x((function(){k(n)}))?f(Object(t),n,D):t},R=r?w(j):"MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,EPSILON,MAX_SAFE_INTEGER,MIN_SAFE_INTEGER,isFinite,isInteger,isNaN,isSafeInteger,parseFloat,parseInt,fromString,range".split(","),B=0;R.length>B;B++)m(j,M=R[B])&&!m(D,M)&&O(D,M,C(j,M));D.prototype=I,I.constructor=D,d(o,S,D,{constructor:!0})}},490:function(e,t){e.exports=function(source,e){if(null==source)return{};var t,i,n={},r=Object.keys(source);for(i=0;i<r.length;i++)t=r[i],e.indexOf(t)>=0||(n[t]=source[t]);return n},e.exports.__esModule=!0,e.exports.default=e.exports},494:function(e,t,n){"use strict";n.r(t);var r=n(55),component=Object(r.a)({},(function(){var e=this,t=e.$createElement;return(e._self._c||t)("div",{staticClass:"rounded-xl bg-white shadow"},[e._t("default")],2)}),[],!1,null,null,null);t.default=component.exports},512:function(e,t,n){"use strict";n.r(t);n(121);var r=n(20),o=Object(r.defineComponent)({inheritAttrs:!1});o.props={displayType:{key:"displayType",required:!1,type:null,default:"normal"}},o.setup=function(e,t){var text="no-underline antialiased font-body text-base leading-6 font-medium",n="focus:outline-none disabled:cursor-not-allowed disabled:opacity-50",base="".concat(n," ").concat(text," ").concat("transform transition duration-200 hover:-translate-y-px"," inline-flex"),o={normal:"".concat(base," text-blue-500 hover:text-blue-700 focus:text-blue-800"),dark:"".concat(base," text-white hover:text-gray-400 focus:text-gray-400"),gray:"".concat(base," text-gray-500 hover:text-prime-indigo focus:text-prime-indigo"),primary:"".concat(base," text-blue-500 hover:text-teal-500"),"primary-prime":"".concat(base," text-prime-indigo hover:text-indigo-400 focus:text-indigo-400"),secondary:"".concat(base," text-prime-navy hover:text-prime-indigo focus:text-prime-indigo"),none:"".concat(n," ").concat(text," inline-flex")},l=e;return{displayTypeClass:Object(r.computed)((function(){return o[l.displayType]}))}};var l=o,c=n(55),component=Object(c.a)(l,(function(){var e=this,t=e.$createElement;return(e._self._c||t)("NuxtLink",e._g(e._b({class:e.displayTypeClass},"NuxtLink",e.$attrs,!1),e.$listeners),[e._t("default")],2)}),[],!1,null,null,null);t.default=component.exports},513:function(e,t){e.exports="\t\n\v\f\r                　\u2028\u2029\ufeff"},515:function(e,t,n){var r=n(11),o=n(52),l=n(29),c=n(513),d=r("".replace),m="["+c+"]",f=RegExp("^"+m+m+"*"),h=RegExp(m+m+"*$"),v=function(e){return function(t){var n=l(o(t));return 1&e&&(n=d(n,f,"")),2&e&&(n=d(n,h,"")),n}};e.exports={start:v(1),end:v(2),trim:v(3)}},531:function(e,t,n){var r=n(11);e.exports=r(1..valueOf)},540:function(e,t,n){n(47),n(38),n(46),n(24),n(63),n(39),n(64);var r=n(470),o=n(471),l=["class","staticClass","style","staticStyle","attrs"];function c(object,e){var t=Object.keys(object);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(object);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(object,e).enumerable}))),t.push.apply(t,n)}return t}n(121),e.exports={functional:!0,render:function(e,t){var n=t._c,data=(t._v,t.data),d=t.children,m=void 0===d?[]:d,f=data.class,h=data.staticClass,style=data.style,v=data.staticStyle,y=data.attrs,x=void 0===y?{}:y,w=o(data,l);return n("svg",function(e){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?c(Object(source),!0).forEach((function(t){r(e,t,source[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(source)):c(Object(source)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(source,t))}))}return e}({class:[f,h],style:[style,v],attrs:Object.assign({xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",fill:"currentColor","aria-hidden":"true"},x)},w),m.concat([n("path",{attrs:{"fill-rule":"evenodd",d:"M7.21 14.77a.75.75 0 01.02-1.06L11.168 10 7.23 6.29a.75.75 0 111.04-1.08l4.5 4.25a.75.75 0 010 1.08l-4.5 4.25a.75.75 0 01-1.06-.02z","clip-rule":"evenodd"}})]))}}},546:function(e,t,n){"use strict";var r=n(36),o=(n(24),n(51),n(50),n(311),n(199),n(223),n(121),n(489),n(76),n(42),n(77),n(49),n(38),n(74),n(75),n(517)),l=n(20),c=n(198);function d(e,t){var n="undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(!n){if(Array.isArray(e)||(n=function(e,t){if(!e)return;if("string"==typeof e)return m(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(e);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return m(e,t)}(e))||t&&e&&"number"==typeof e.length){n&&(e=n);var i=0,r=function(){};return{s:r,n:function(){return i>=e.length?{done:!0}:{done:!1,value:e[i++]}},e:function(e){throw e},f:r}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var o,l=!0,c=!1;return{s:function(){n=n.call(e)},n:function(){var e=n.next();return l=e.done,e},e:function(e){c=!0,o=e},f:function(){try{l||null==n.return||n.return()}finally{if(c)throw o}}}}function m(e,t){(null==t||t>e.length)&&(t=e.length);for(var i=0,n=new Array(t);i<t;i++)n[i]=e[i];return n}var f=Object(l.defineComponent)({inheritAttrs:!1});f.props={src:{key:"src",required:!0,type:String},options:{key:"options",required:!0,type:null},optionsPlaceholder:{key:"optionsPlaceholder",required:!0,type:null}},f.setup=function(e,t){var n=e;function m(e){for(var t=new URLSearchParams,o=0,l=Object.entries(e);o<l.length;o++){var d=l[o],m=Object(r.a)(d,2),f=m[0],h=m[1];t.append(f,String(h))}return t.append("url",n.src),n.src.startsWith("http://localhost")?"".concat(n.src,"#").concat(t):"".concat(c.h,"/?").concat(t)}var f=Object(l.computed)((function(){return m(n.options)})),h=Object(l.computed)((function(){return m(n.optionsPlaceholder)})),v=Object(l.computed)((function(){var e=n.options.w;return e?Math.log(Number(e)):4})),y=Object(l.shallowRef)(!1),x=Object(l.shallowRef)(!1),w=Object(l.shallowRef)(0),img=Object(l.shallowRef)();Object(l.watch)((function(){return n.src}),(function(){y.value=!1,w.value=0}));var C=Object(o.useIntersectionObserver)(img,(function(e){var t,n=d(e);try{for(n.s();!(t=n.n()).done;){if(t.value.isIntersecting)return x.value=!0,void O()}}catch(e){n.e(e)}finally{n.f()}})),O=C.stop;return C.isSupported.value||(x.value=!0),{generatedUrl:f,placeholderUrl:h,blurAmount:v,error:y,inView:x,loaded:w,img:img}};var h=f,v=(n(615),n(55)),component=Object(v.a)(h,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return e.error?n("img",e._b({attrs:{src:"https://wh-site.s3.amazonaws.com/Coming+Soon.png"}},"img",e.$attrs,!1)):n("img",e._b({ref:"img",staticClass:"transition-filter duration-150",style:{filter:e.loaded<2?"blur("+e.blurAmount+"px)":void 0},attrs:{src:0!==e.loaded&&e.inView?e.generatedUrl:e.placeholderUrl},on:{load:function(t){e.loaded+=1},error:function(t){e.error=!0}}},"img",e.$attrs,!1))}),[],!1,null,"3a7a0994",null);t.a=component.exports},548:function(e,t,n){e.exports={}},615:function(e,t,n){"use strict";n(548)},616:function(e,t,n){n(47),n(38),n(46),n(24),n(63),n(39),n(64);var r=n(470),o=n(471),l=["class","staticClass","style","staticStyle","attrs"];function c(object,e){var t=Object.keys(object);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(object);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(object,e).enumerable}))),t.push.apply(t,n)}return t}n(121),e.exports={functional:!0,render:function(e,t){var n=t._c,data=(t._v,t.data),d=t.children,m=void 0===d?[]:d,f=data.class,h=data.staticClass,style=data.style,v=data.staticStyle,y=data.attrs,x=void 0===y?{}:y,w=o(data,l);return n("svg",function(e){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?c(Object(source),!0).forEach((function(t){r(e,t,source[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(source)):c(Object(source)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(source,t))}))}return e}({class:[f,h],style:[style,v],attrs:Object.assign({xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",fill:"currentColor","aria-hidden":"true"},x)},w),m.concat([n("path",{attrs:{"fill-rule":"evenodd",d:"M14.77 12.79a.75.75 0 01-1.06-.02L10 8.832 6.29 12.77a.75.75 0 11-1.08-1.04l4.25-4.5a.75.75 0 011.08 0l4.25 4.5a.75.75 0 01-.02 1.06z","clip-rule":"evenodd"}})]))}}},665:function(e,t,n){"use strict";n.r(t);var r=n(55),component=Object(r.a)({},(function(){var e=this,t=e.$createElement;return(e._self._c||t)("p",{staticClass:"font-body text-base font-normal leading-7 tracking-wide"},[e._t("default")],2)}),[],!1,null,null,null);t.default=component.exports},708:function(e,t,n){"use strict";n(85),n(86);var r=n(546),o=n(20),l=n(198),c=n(483),d={};d.props={landing:{key:"landing",required:!1,type:Boolean},coverImage:{key:"coverImage",required:!1,type:String}},d.setup=function(e,t){var n="".concat(l.f,"/main-page-pics/line-waves-crop.svg"),r=Object(c.a)().value.path,d=Object(o.computed)((function(){return r.includes("client")||r.includes("admin")}));return{backgroundUrl:n,text:Object(o.computed)((function(){if(d.value||r.includes("profile"))return{title:"WhiteHawk Client Portal"};switch(r){case"/corporate-directory":case"/corporate-directory/":return{title:"Corporate Directory"};case"/enterprise":case"/enterprise/":return{title:"Enterprise Solutions",subtitle:"Defend Your Company and Supply Chain Against Evolving Threats"};case"/cyber-risk-radar":case"/cyber-risk-radar/":return{title:"Cyber Risk Radar",subtitle:"Streamline Your Supply Chain Risk Monitoring & Mitigation of Threats"};case"/cyber-risk-program":case"/cyber-risk-program/":return{title:"Cyber Risk Program",subtitle:"Get a Hacker’s View of Your Cyber Risks"};case"/cyber-risk-paas":case"/cyber-risk-paas/":return{title:"Cyber Risk Platform as a Service",subtitle:"For Business & Organization Clients of ISPs, MSPs, Banks, and Government Entities"};case"/innovative-solutions":case"/innovative-solutions/":return{title:"Innovative Solutions Focused on Enterprises",subtitle:"We Do All the Work for You"};case"/training-and-education":case"/training-and-education/":return{title:"Cyber Training & Education",subtitle:"Enable your Team to Stop Online Fraud in its Tracks"};case"/small-midsize":case"/small-midsize/":return{title:"Small and Midsize Businesses",subtitle:"Don’t have a CIO or CISO? We Will Help You Protect Your Business"};case"/cyber-risk-journey":case"/cyber-risk-journey/":return{title:"Cyber Risk Journey",subtitle:"Cyber Risk Management doesn’t have to be daunting. We partner with you to help take the necessary steps over time to improving your cyber risk posture."};case"/cyber-risk-scorecard":case"/cyber-risk-scorecard/":return{title:"Cyber Risk Scorecard",subtitle:"Get a Snapshot of Your Company’s Vulnerabilities and a Roadmap to Address Them"};case"/business-risk-suite":case"/business-risk-suite/":return{title:"Business Risk Suite",subtitle:"Personalize Your Protection with Sontiq & WhiteHawk Scalable SMB Offering"};case"/cmmc":case"/cmmc/":return{title:"Your Path to CMMC",subtitle:"Start your Cybersecurity Maturity Model Certification baseline today"};case"/marketplace/products":case"/marketplace/products/":return{title:"Marketplace",subtitle:"We Are The World's First Cybersecurity Exchange"};case"/marketplace/products-comparison":case"/marketplace/products-comparison/":return{title:"Product Comparison",subtitle:"Side-by-Side Comparison of up to Four Products"};case"/blog":case"/blog/":return{title:"News & Insights",subtitle:"Cybersecurity Insights Simplified"};case"/about-us":case"/about-us/":return{title:"About Us",subtitle:"We Are The World's First Cybersecurity Exchange"};case"/whitehawk-limited":case"/whitehawk-limited/":return{title:"Investor Center"};case"/careers":case"/careers/":return{title:"WhiteHawk is Hiring"};case"/contact-us":case"/contact-us/":return{title:"Contact Us",subtitle:"We are here to help and answer any questions you might have. We look forward to hearing from you."};case"/contact-us/thank-you":case"/contact-us/thank-you/":return{title:"Contact Us"};case"/scheduler":case"/scheduler/":return{title:"Schedule An Appointment"};case"/terms-conditions":return{title:"WhiteHawk Terms & Conditions"};case"/privacy-notice":return{title:"WhiteHawk Privacy Policy"};case"/questionnaire":return{title:"Cyber Threat Readiness Questionnaire",subtitle:"Answer just 10 questions and find out your top vulnerabilities and get matched to products that can help you today"};case"/marketplace/aws/register/success":case"/marketplace/aws/register/success/":return{title:"WhiteHawk SaaS Fulfillment"};case"/esg":case"/esg/":return{title:"Environmental, Social & Governance (ESG)",subtitle:"Principles for Impactful Growth"};default:return{title:"Defend Your Business Against Cybercrime"}}}))}},d.components=Object.assign({LazyImg:r.a},d.components);var m=d,f=n(55),component=Object(f.a)(m,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("section",{staticClass:"relative flex h-64 w-full items-center justify-center",class:e.landing?"min-h-30":"min-h-0"},[e.coverImage?n("LazyImg",{staticClass:"absolute z-0 h-full w-full object-cover",attrs:{src:e.coverImage,alt:"Cover Image",options:{w:2e3,il:!0},"options-placeholder":{w:100}}}):e._e(),e._v(" "),n("div",{staticClass:"absolute z-0 h-full w-full bg-prime-navy bg-[length:517px] bg-bottom bg-repeat-x",class:e.coverImage?"opacity-75":"",style:{backgroundImage:"url("+e.backgroundUrl+")"}}),e._v(" "),n("ClientOnly",[n("div",{staticClass:"z-10 flex max-w-xs flex-col space-y-4 text-center text-white sm:max-w-md md:max-w-2xl lg:max-w-4xl"},[n("BaseTypography",{attrs:{component:"h1",variant:"h2"}},[e._v("\n        "+e._s(e.text.title)+"\n      ")]),e._v(" "),n("BaseTypography",{attrs:{component:"span",variant:"subtitle1"}},[e._v("\n        "+e._s(e.text.subtitle)+"\n      ")])],1)])],1)}),[],!1,null,null,null);t.a=component.exports;installComponents(component,{BaseTypography:n(472).default})},716:function(e,t,n){"use strict";n.d(t,"a",(function(){return r}));var r="whitehawk-cms"},722:function(e,t,n){"use strict";n.d(t,"a",(function(){return l}));n(73),n(42),n(723);var r=n(69),o=n(20);function l(e){var t=Object(o.computed)((function(){var t,n,r,o=e.value;if(!o)return{};var title=o.title,l=o.Meta,image=o.image,meta=l.map((function(e){return{name:e.name,content:e.content}}));if(image){var c=image.formats;meta.push({name:"og:image",content:(null===(t=null==c?void 0:c.medium)||void 0===t?void 0:t.url)||(null===(n=null==c?void 0:c.small)||void 0===n?void 0:n.url)||(null===(r=null==c?void 0:c.thumbnail)||void 0===r?void 0:r.url)})}return{title:title,meta:meta}}));return Object(r.e)((function(){return t.value}))}},723:function(e,t,n){"use strict";var r=n(5),o=n(332);r({target:"String",proto:!0,forced:n(333)("small")},{small:function(){return o(this,"small","","")}})},750:function(e,t,n){"use strict";n.d(t,"a",(function(){return c}));var r=n(10),o=(n(48),n(200)),l=n.n(o);function c(e){return function(){var t=Object(r.a)(regeneratorRuntime.mark((function t(){var n,data;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,l.a.get(e);case 2:return n=t.sent,data=n.data,t.abrupt("return",data);case 5:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}()}},834:function(e,t,n){"use strict";var r={};r.props={color:{key:"color",required:!1,type:String,default:"blue"}},r.setup=function(e,t){return{}};var o=r,l=n(55),component=Object(l.a)(o,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("svg",{attrs:{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 417.34 268.48"}},[n("text",{attrs:{x:"208.67",y:"255.03",fill:e.color,"font-size":"58","letter-spacing":"6","text-anchor":"middle","text-rendering":"geometricPrecision"}},[e._v("\n    WHITEHAWK\n  ")]),e._v(" "),n("g",{attrs:{fill:"none","shape-rendering":"geometricPrecision",stroke:e.color,"stroke-miterlimit":"10","stroke-width":"5"}},[n("path",{attrs:{d:"M.38 6.86a220.44 220.44 0 0 1 47.34-5.11c104.86 0 192.59 73.32 214.73 171.48"}}),e._v(" "),n("path",{attrs:{d:"M152.5 172.54C174.89 74.72 262.5 1.75 367.07 1.75a221 221 0 0 1 49.88 5.68"}}),e._v(" "),n("path",{attrs:{d:"M8.5 35.83a219.6 219.6 0 0 1 80.22-15.08c93.72 0 173.76 58.57 205.51 141.1"}}),e._v(" "),n("path",{attrs:{d:"M120.96 160.82c32-82 111.78-140.07 205.11-140.07a219.44 219.44 0 0 1 82.54 16"}}),e._v(" "),n("path",{attrs:{d:"M20.57 63.68a220.25 220.25 0 0 1 301 83.24"}}),e._v(" "),n("path",{attrs:{d:"M96.1 147.08a220.26 220.26 0 0 1 300.86-83.55"}}),e._v(" "),n("path",{attrs:{d:"M35.48 88.41a220.15 220.15 0 0 1 309.39 41.12"}}),e._v(" "),n("path",{attrs:{d:"M70.98 128.15a220.15 220.15 0 0 1 310.05-38.4"}}),e._v(" "),n("path",{attrs:{d:"M51.67 108.98a220.11 220.11 0 0 1 311.6 2.8"}})])])}),[],!1,null,null,null);t.a=component.exports},926:function(e,t,n){"use strict";n.r(t);var r=n(55),component=Object(r.a)({},(function(){var e=this,t=e.$createElement;return(e._self._c||t)("h6",{staticClass:"font-display text-xl font-semibold leading-7 tracking-wide antialiased"},[e._t("default")],2)}),[],!1,null,null,null);t.default=component.exports}}]);