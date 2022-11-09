import{D as x}from"./arrow-down-tray.5bfa5b2e.js";import{ad as h,c as C,n as m,ae as o,ag as S,ah as k,ai as $,aq as P,bn as q,aw as A,aj as B,bf as D,bo as F,ba as O,ak as u}from"./index.06ea6359.js";import{S as z}from"./SiteMainBanner.98b4978b.js";import{V as T}from"./VideoFeatureSection.94b5b05c.js";import{a as j}from"./axios-data.b9e0a83c.js";import{N as H}from"./namespace.d5e90c67.js";const s={};s.props={cmmcProducts:{key:"cmmcProducts",required:!0,type:Array}};s.setup=(e,a)=>{const t=e;return{columns:C(()=>t.cmmcProducts.length)}};s.components=Object.assign({LazyImg:h},s.components);var I=function(){var e=this,a=e.$createElement,t=e._self._c||a;return t("section",{staticClass:"grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3",class:`xl:grid-cols-${e.columns}`},e._l(e.cmmcProducts,function(r){return t("div",{key:r.id},[t("RouterLink",{staticClass:"flex h-36 transform items-center justify-center rounded-lg bg-white p-4 shadow hover:scale-105 hover:shadow-lg focus:ring focus:ring-indigo-300",attrs:{to:r.to}},[t("LazyImg",{staticClass:"max-h-20 w-full object-contain object-center",attrs:{src:r.image,alt:r.alt,options:{w:560,il:!0},"options-placeholder":{w:48}}})],1)],1)}),0)},W=[];const d={};var R=m(s,I,W,!1,E,null,null,null);function E(e){for(let a in d)this[a]=d[a]}const L=function(){return R.exports}(),i={};i.setup=(e,a)=>{const t=`${o}/main-page-pics/landing/cmmc/`,r=[{id:"cyberOne",alt:"Cyber One",image:`${t}cmmc-products/ProductCMMC-7.png`,to:{path:"/marketplace/products",query:{manufacturer:"cyberone"}}},{id:"safernet",alt:"Safer Net",image:`${t}cmmc-products/ProductCMMC-1.png`,to:{path:"/marketplace/products",query:{manufacturer:"safernet"}}},{id:"netAbstraction",alt:"Net Abstraction",image:`${t}cmmc-products/ProductCMMC-2.png`,to:{path:"/marketplace/products",query:{manufacturer:"netabstraction"}}},{id:"remediant",alt:"Remediant",image:`${t}cmmc-products/ProductCMMC-3.png`,to:{path:"/marketplace/products",query:{manufacturer:"remediant"}}},{id:"dekkoSecure",alt:"Dekko Secure",image:`${t}cmmc-products/ProductCMMC-5.png`,to:{path:"/marketplace/products",query:{manufacturer:"dekkosecure"}}},{id:"preVeil",alt:"PreVeil",image:`${t}cmmc-products/ProductCMMC-6.png`,to:{path:"/marketplace/products",query:{manufacturer:"preveil"}}},{id:"whiteHawk",alt:"White Hawk",image:`${t}cmmc-products/ProductCMMC-4.png`,to:{path:"/marketplace/products",query:{manufacturer:"whitehawk"}}}],c=[{id:"rbAdvisory",alt:"R B Advisory",image:`${t}cmmc-providers/ServiceCMMC-1.png`,to:{path:"/marketplace/products",query:{manufacturer:"rb-advisory"}}},{id:"solviturSystems",alt:"Solvitur Systems",image:`${t}cmmc-providers/ServiceCMMC-5.png`,to:{path:"/marketplace/products",query:{manufacturer:"solvitur-systems"}}},{id:"virescitTacticalSystems",alt:"Virescit Tactical Systems",image:`${t}cmmc-providers/ServiceCMMC-2.png`,to:{path:"/marketplace/products",query:{manufacturer:"virescit-tactical-systems"}}},{id:"soundWay",alt:"Sound Way Consultinng",image:`${t}cmmc-providers/ServiceCMMC-3.png`,to:{path:"/marketplace/products",query:{manufacturer:"soundway-consulting"}}},{id:"dobbsDefenseSolutions",alt:"Dobbs Defense Solutions",image:`${t}cmmc-providers/ServiceCMMC-4.png`,to:{path:"/marketplace/products",query:{manufacturer:"dobbs-defense-solutions"}}}];return{cmmcProducts:r,cmmcServices:c}};i.components=Object.assign({CmmcProducts:L},i.components);var N=function(){var e=this,a=e.$createElement,t=e._self._c||a;return t("section",{staticClass:"container mx-auto pb-16"},[t("div",{staticClass:"p-16"},[t("BaseH5",{staticClass:"text-center text-prime-navy md:text-left"},[e._v(" Featured CMMC Consulting Services ")]),t("div",{staticClass:"pt-8"},[t("CmmcProducts",{attrs:{"cmmc-products":e.cmmcServices}})],1)],1),t("div",{staticClass:"px-16 pt-8 pb-16"},[t("BaseH5",{staticClass:"text-center text-prime-navy md:text-left"},[e._v(" Featured CMMC Solutions ")]),t("div",{staticClass:"pt-8"},[t("CmmcProducts",{attrs:{"cmmc-products":e.cmmcProducts}})],1)],1)])},U=[];const p={};var V=m(i,N,U,!1,Q,null,null,null);function Q(e){for(let a in p)this[a]=p[a]}const G=function(){return V.exports}(),Y={list(){return S([H,"page-cmmc-seo"],j(`${k}/cybersecurity-maturity-model-certification`))}},n=B({layout:"landing",head:{}});n.setup=(e,a)=>{const t="https://www.acq.osd.mil/cmmc/faq.html",r=`${o}/main-page-pics/landing/cmmc/vlad-bagacian-d1eaoAabeXs-unsplash.jpg`,c=`${o}/main-page-pics/line-waves-sm-dark.svg`,f=`${o}/WhiteHawk-Videos/cmmc_interview.mp4`,y={src:"https://wh-site.s3.amazonaws.com/main-page-pics/landing/cmmc/cmmc-tiers.png",alt:"CMMC Tiers"},M={path:"https://communications.whitehawk.com/WhiteHawk-products-services/CMMC-Overview.pdf",text:"CMMC Overview"},b={title:"Get Started Today",subtitle:"Speak with our CMMC Registered Practitioner",to:"/scheduler",btnText:"Schedule Free CMMC Consultation",image:{imgSrc:"https://wh-site.s3.amazonaws.com/main-page-pics/landing/cmmc/rp-registered.png",alt:"CMMC Registered Practitioner Badge"}},_=[{title:"Who needs to achieve CMMC?",description:"Any organization that plans to conduct business with the DoD will be required to undergo an audit by an authorized CMMC C3PAO auditor before bidding, winning, and participating on a contract or subcontracting to a prime. All DOD contractors or suppliers will need to achieve at a minimum CMMC Level 1, if they want to continue to do business with the DoD.",component:D},{title:"How does an organization become certified?",description:"A non-profit, independent organization called the CMMC Accreditation Body (CMMC-AB) will accredit CMMC Third-Party Assessment Organizations (C3PAOs) and individual auditors. The CMMC-AB will establish a CMMC marketplace with a list of approved C3PAOs from which DIB companies will choose an approved auditing organization.",component:F},{title:"How does the CMMC framework function?",description:"CMMC 2.0 has three different certification levels, that reflect the maturity and reliability of a government contractor\u2019s infrastructure to protect both sensitive and proprietary government information. The three levels build upon each other\u2019s technical and policy requirements, including the requirements from the previous level.",component:O}],w=Y.list();return $(C(()=>{var l;return(l=w.data.value)==null?void 0:l.seo})),{cmmcNoticeUrl:t,coverImage:r,backgroundUrl:c,videoSource:f,sectionImage:y,whitePaper:M,cta:b,cmmcQuestions:_}};n.components=Object.assign({SiteMainBanner:z,LazyImg:h,DownloadSvg:x,DynamicFeatureSection:P,WaveForm:q,FeaturedCmmc:G,VideoFeatureSection:T,CustomCta:A},n.components);var X=function(){var e=this,a=e.$createElement,t=e._self._c||a;return t("main",[t("SiteMainBanner",{attrs:{landing:"","cover-image":e.coverImage}}),t("section",{staticClass:"bg-gray-100"},[t("div",{staticClass:"mx-auto flex max-w-6xl flex-col space-y-4 p-8 text-center md:py-12"},[t("BaseTypography",{staticClass:"text-prime-navy",attrs:{component:"h2",variant:"h4"}},[e._v(" Don't have an in-house team? We've got you covered! ")]),t("BaseTypography",{staticClass:"text-gray-500",attrs:{component:"p",variant:"p1"}},[e._v(" Your path to CMMC certification can be daunting, especially for companies who do not have sophisticated CIO/CISO internal organizations. WhiteHawk, as a Cyber Risk prioritization and mitigation online platform, is welcoming the transition to the Cybersecurity Maturity Model Certification 2.0 (CMMC) because it is the great equalizer. CMMC 2.0 is enabling all companies and enterprises to have a path to cyber resilience that is tiered to their body of work and level of cyber sophistication. ")])],1)]),t("section",{staticClass:"bg-gradient-to-b from-gray-100 to-white"},[t("div",{staticClass:"container mx-auto md:py-12"},[t("div",{staticClass:"flex flex-col items-center justify-center space-y-6"},[t("div",{staticClass:"mx-auto flex max-w-6xl flex-col space-y-4 text-center"},[t("BaseTypography",{staticClass:"text-prime-navy",attrs:{component:"h6",variant:"h6"}},[e._v(" CMMC 2.0 Change Notice ")]),t("BaseTypography",{staticClass:"text-gray-500",attrs:{component:"p",variant:"p1"}},[e._v(" WhiteHawk is aware of the ongoing changes to CMMC and will update our offerings accordingly as the Office of the Secretary of Defense publishes their updated guidance and timelines between now and 2nd quarter 2023. Please visit "),t("BaseExternalLink",{attrs:{href:e.cmmcNoticeUrl,"display-type":"secondary","aria-label":"Acquisition and Sustainment CMMC Faq Page"}},[e._v(" CMMC FAQ ")]),e._v(" for more information. ")],1)],1),t("LazyImg",{staticClass:"h-auto w-full max-w-5xl bg-white shadow-lg sm:rounded-xl",attrs:{src:e.sectionImage.src,alt:e.sectionImage.alt,options:{w:1200,il:!0},"options-placeholder":{w:48}}}),t("BaseButton",{attrs:{shape:"rectangle","display-type":"info"}},[t("BaseExternalLink",{staticClass:"space-x-1",attrs:{href:e.whitePaper.path,"aria-label":e.whitePaper.text}},[t("DownloadSvg",{staticClass:"h-5 w-5 shrink-0"}),t("span",[e._v(e._s(e.whitePaper.text))])],1)],1)],1),t("DynamicFeatureSection",{attrs:{value:e.cmmcQuestions}})],1)]),t("WaveForm",{staticClass:"bg-white"}),t("section",{staticClass:"border-b bg-gradient-to-b from-white to-gray-100"},[t("FeaturedCmmc")],1),t("section",{staticClass:"bg-white bg-bottom bg-repeat-x",style:{backgroundImage:`url(${e.backgroundUrl})`}},[t("VideoFeatureSection",{attrs:{"video-source":e.videoSource},scopedSlots:e._u([{key:"title",fn:function(){return[e._v("An Automated Path to CMMC")]},proxy:!0},{key:"description",fn:function(){return[e._v(" Terry Roberts, CEO and Founder of WhiteHawk Cybersecurity Exchange, interviews Lily Yeoh, CEO and Founder of CyberOne on how to best automate your path to CMMC ")]},proxy:!0}])})],1),t("CustomCta",{attrs:{value:e.cta}})],1)},J=[];const g={};var v=m(n,X,J,!1,K,null,null,null);function K(e){for(let a in g)this[a]=g[a]}typeof u=="function"&&u(v);const ot=function(){return v.exports}();export{ot as default};