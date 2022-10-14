import{D as f}from"./arrow-down-tray.5bfa5b2e.js";import{ag as v,ah as b,ai as k,c as C,aq as S,b8 as w,ad as x,aw as _,aj as P,ae as i,bh as B,as as I,n as M,ak as o}from"./index.6898036f.js";import{P as R}from"./chart-pie.b61256d8.js";import{S as A}from"./SiteMainBanner.cd26bd7f.js";import{a as T}from"./axios-data.c1379130.js";import{N as W}from"./namespace.d5e90c67.js";const D={list(){return v([W,"page-cyber-risk-paas-seo"],T(`${b}/cyber-risk-paas`))}},n=P({layout:"landing",head:{}});n.setup=(e,a)=>{const t=`${i}/main-page-pics/landing/cyber-risk-paas/bannerImage.jpg`,l={src:`${i}/main-page-pics/landing/cyber-risk-paas/cyberRiskPaasProducts.png`,alt:"Cyber Risk Platform as a Service"},d={text:"Cyber Risk PaaS White Paper",path:"https://communications.whitehawk.com/WhiteHawk-products-services/WhiteHawk-Cyber-Risk-Paas-White-Paper.pdf"},u={title:"Provide your clients with a Virtual Cyber Consult, a Risk Profile, Maturity Model, Action Plan and Instant Risk Mitigation from a Vetted Marketplace of Solution Options.",description:"Step up and scale your Digital Age Risk services across all of your Business Clients, enabling them to continuously know the truth about their cyber risks and take smart action. Our Cyber Risk Platform as a Service (PaaS) is an end-to-end Cyber Risk identification, prioritization and mitigation cloud-based ecosystem, that can effectively and affordably service thousands to millions of your Business Clients continuously and seamlessly."},p={title:"Get Started Today",btnText:"Contact Us",to:{path:"/contact-us",query:{subject:"Services and Solutions",textBody:"Cyber Risk Platform as a Service"}}},m={items:["Tailored Risk Platform of Online Services & Business Models to meet the objectives of Prime Client.","Ability to tailor & add features to the platform to meet any business or mission objective.","Co-branding, white labeling, annual licensing, revenue sharing or revenue neutral and O&M service options.","Cyber Threat Readiness Questionnaire, Risk Profile, Cyber Risk Consult to establish the risk baseline.","Automated & Documented Cyber Risk Prioritization & Scorecard matched to Solution Options \u2013 Action Plan.","Matching to Vetted Cyber Innovative Solution Partners for Enterprise & SMB Clients \u2013 updated continuously.","Grounded on publicly available risk data sets, proven AI-based Cyber Risk analytics, models & solutions."]},h={title:"Time to Step Up to Defeat Online Crime, Fraud and Disruption Across All Businesses and Organizations",description:"Insurance Groups, Financial Institutions, Internet Service Providers (ISPs), Managed Service Providers (MSPs) and the Federal Government have an obligation to protect their business clients, organizations and suppliers against cyber risks. Learn how to provide identification/scoping, prioritization and mitigation from the experts. Contact us to discuss and learn more."},y=[{id:"labelingAndCobranding",title:"White Labeling and Co-Branding ",description:"The WhiteHawk platform uses open technologies that cleanly decouple UI/UX and the backend business processing services. We have branding and theming configurations that take place only in the UI. We do this through templated components, interpolating branding data from centralized configuration files. The branding includes theming elements such as colors, fonts, images, logos, and slogans, enabling us to establish a white labeled instance for any brand quickly. We can easily tailor our platform to support your enterprise\u2019s brand and messaging for a seamless user experience to your end clients.",component:B},{id:"vettingAndOnboarding",title:"Marketplace Solution Vetting and Onboarding ",description:"WhiteHawk maintains an in-house dedicated Vendor Management team that scouts, vets, and onboards innovative solution vendors onto the online Marketplace. We will work closely to meet the Prime Client\u2019s business objectives and collaborate on the identification and onboarding of solutions for its. WhiteHawk\u2019s mature vendor process onboards on average 1 to 2 cyber risk, security, and analytics vendors a week, with consistent and repeatable business processes. The Vendor Management team at WhiteHawk conducts vendor technology demonstrations and follow-up business model discussions including the appropriate revenue sharing agreements.",component:R},{id:"mappingToSecurity",title:"Platform Assessment Mapping to Security Standards",description:"Because NIST and ISO controls are daunting even for sophisticated cyber professionals, WhiteHawk built our maturity models based on the CIS framework, which maps to the NIST framework and is impactful and actionable for the vast majority of companies and organizations. Using this approach, we have implemented the CIS and CMMC frameworks as a foundation to our virtual client consultations. By aligning multiple frameworks, WhiteHawk delivers an uncomplicated and documented path to CIS and CMMC compliance. With our flexible and open architecture, we are able to customize and integrate any additional security frameworks selected by the client.",component:I}],g=D.list();return k(C(()=>{var s;return(s=g.data.value)==null?void 0:s.seo})),{coverImage:t,sectionImage:l,whitePaper:d,intro:u,cta:p,featuresAndBenefits:m,contactUs:h,overview:y}};n.components=Object.assign({SiteMainBanner:A,DynamicFeatureSection:S,DynamicBenefitSection:w,LazyImg:x,DownloadSvg:f,CustomCta:_},n.components);var z=function(){var e=this,a=e.$createElement,t=e._self._c||a;return t("main",[t("SiteMainBanner",{attrs:{landing:"","cover-image":e.coverImage}}),t("section",{staticClass:"flex flex-col space-y-4 p-8 text-center md:py-12"},[t("BaseTypography",{staticClass:"mx-auto max-w-6xl text-prime-navy",attrs:{component:"h2",variant:"h4"}},[e._v(" All Business Customers Receive Effective Digital Age Risk Services at Scale ")]),t("div",{staticClass:"mx-auto flex max-w-4xl flex-col space-y-2"},[t("BaseTypography",{staticClass:"text-gray-500",attrs:{component:"p",variant:"p1"}},[e._v(" "+e._s(e.intro.title)+" ")]),t("BaseTypography",{staticClass:"text-gray-500",attrs:{component:"p",variant:"p1"}},[e._v(" "+e._s(e.intro.description)+" ")])],1)],1),t("div",{staticClass:"bg-gray-100"},[t("DynamicFeatureSection",{attrs:{value:e.overview},scopedSlots:e._u([{key:"title",fn:function(){return[e._v("Cyber Risk PaaS Business Models and Features")]},proxy:!0}])})],1),t("DynamicBenefitSection",{attrs:{value:e.featuresAndBenefits},scopedSlots:e._u([{key:"title",fn:function(){return[e._v("Features & Benefits")]},proxy:!0},{key:"content",fn:function(){return[t("LazyImg",{staticClass:"h-auto w-full max-w-xl",attrs:{src:e.sectionImage.src,alt:e.sectionImage.alt,options:{w:1500,il:!0},"options-placeholder":{w:100}}}),t("BaseButton",{attrs:{shape:"rectangle","display-type":"info"}},[t("BaseExternalLink",{staticClass:"inline-flex items-center space-x-1",attrs:{href:e.whitePaper.path,"aria-label":e.whitePaper.text}},[t("DownloadSvg",{staticClass:"h-5 w-5 shrink-0"}),t("span",[e._v(e._s(e.whitePaper.text))])],1)],1)]},proxy:!0}])}),t("section",{staticClass:"bg-gray-100"},[t("div",{staticClass:"mx-auto flex max-w-6xl flex-col space-y-4 p-8 text-center md:py-12"},[t("BaseTypography",{staticClass:"text-prime-navy",attrs:{component:"h2",variant:"h4"}},[e._v(" "+e._s(e.contactUs.title)+" ")]),t("BaseTypography",{staticClass:"text-gray-500",attrs:{component:"p",variant:"p1"}},[e._v(" "+e._s(e.contactUs.description)+" ")])],1)]),t("CustomCta",{attrs:{value:e.cta}})],1)},O=[];const r={};var c=M(n,z,O,!1,U,null,null,null);function U(e){for(let a in r)this[a]=r[a]}typeof o=="function"&&o(c);const E=function(){return c.exports}();export{E as default};
