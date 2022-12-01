import{D as h}from"./arrow-down-tray.5bfa5b2e.js";import{ag as f,ah as C,ap as k,b9 as b,ad as _,av as S,ai as w,c as x,ae as r,bc as R,n as M,aj as i}from"./index.575adb5e.js";import{S as B}from"./SiteMainBanner.be9184cc.js";import{V as $}from"./VideoFeatureSection.5391367f.js";import{a as z}from"./axios-data.ba683027.js";import{N as P}from"./namespace.d5e90c67.js";var F=function(){var e=this,a=e.$createElement,t=e._self._c||a;return t("svg",e._g({attrs:{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24","stroke-width":"1.5",stroke:"currentColor","aria-hidden":"true"}},e.$listeners),[t("path",{attrs:{"stroke-linecap":"round","stroke-linejoin":"round",d:"M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0z"}})])};const I={render:F};var D=function(){var e=this,a=e.$createElement,t=e._self._c||a;return t("svg",e._g({attrs:{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24","stroke-width":"1.5",stroke:"currentColor","aria-hidden":"true"}},e.$listeners),[t("path",{attrs:{"stroke-linecap":"round","stroke-linejoin":"round",d:"M2.25 15a4.5 4.5 0 0 0 4.5 4.5H18a3.75 3.75 0 0 0 1.332-7.257 3 3 0 0 0-3.758-3.848 5.25 5.25 0 0 0-10.233 2.33A4.502 4.502 0 0 0 2.25 15z"}})])};const T={render:D},j={list(){return f([P,"page-cyber-risk-radar-seo"],z(`${C}/cyber-risk-radar`))}},n={};n.setup=(e,a)=>{const t=`${r}/main-page-pics/landing/cyber-risk-radar/bannerImage.jpg`,l=`${r}/main-page-pics/line-waves-sm-dark.svg`,p=`${r}/WhiteHawk-Videos/cyber-risk-radar.mp4`,d={src:`${r}/main-page-pics/landing/cyber-risk-radar/riskRadarFeatureTiers.png`,alt:"Cyber Risk Radar Overview"},u={path:"https://communications.whitehawk.com/WhiteHawk-products-services/WhiteHawk-Cyber-Risk-Radar-White-Paper.pdf",text:"Cyber Risk Radar White Paper"},m=[{title:"Real-time Cyber Risk Mitigation",description:"This affordable, AI-driven platform identifies, prioritizes and provides near real time mitigation of cyber risk in your supply chain, vendors and teammates.",component:I},{title:"Path to CMMC",description:"Cyber Risk Radar establishes a scalable strategy and an automated path to Cybersecurity Maturity Model Certification (CMMC).",component:R},{title:"Software as a Service (SaaS)",description:"This is an annual Software as a Service (SaaS) subscription providing quarterly services including Cyber Risk Scorecards, Cyber Risk Portfolio Reports, and online CMMC Cyber Consultants.",component:T}],v={items:["Understand an organization\u2019s portfolio of all suppliers and vendors.","Collect, analyze, and correlate openly available data into actionable intelligence.","Understand an organization's security performance and be alerted to impactful changes.","Perform deep dives in the areas that need focus rather than into the entire dataset.","Visualize the enterprise by understanding the supplier and vendor interconnections.","Prioritize risk mitigation and business actions based on CMMC levels for impact and performance.","Continuous situational awareness, tracking, mitigation, and management of the Supply Chain Risk Management (SCRM)/Vendor Relationship Management (VRM) program."]},y={title:"Get Started Today",to:{path:"/contact-us",query:{subject:"Services and Solutions",textBody:"Cyber Risk Radar"}},btnText:"Contact Us"},g=j.list();return w(x(()=>{var s;return(s=g.data.value)==null?void 0:s.seo})),{coverImage:t,backgroundUrl:l,videoSource:p,sectionImage:d,whitePaper:u,overview:m,featuresAndBenefits:v,cta:y}};n.components=Object.assign({SiteMainBanner:B,DynamicFeatureSection:k,DynamicBenefitSection:b,LazyImg:_,DownloadSvg:h,VideoFeatureSection:$,CustomCta:S},n.components);var U=function(){var e=this,a=e.$createElement,t=e._self._c||a;return t("main",[t("SiteMainBanner",{attrs:{landing:"","cover-image":e.coverImage}}),t("section",{staticClass:"mx-auto flex max-w-6xl flex-col space-y-4 p-8 text-center md:py-12"},[t("BaseTypography",{staticClass:"text-prime-navy",attrs:{component:"h2",variant:"h4"}},[e._v(" Meet and Exceed All New CMMC Requirements ")]),t("BaseTypography",{staticClass:"text-gray-500",attrs:{component:"p",variant:"p1"}},[e._v(" The Cyber Risk Radar can provide your company and all your suppliers an automated path to CMMC. ")])],1),t("section",{staticClass:"bg-gray-100"},[t("DynamicFeatureSection",{attrs:{value:e.overview},scopedSlots:e._u([{key:"title",fn:function(){return[e._v(" Easy Options for Businesses Across the Supply Chain ")]},proxy:!0}])})],1),t("DynamicBenefitSection",{attrs:{value:e.featuresAndBenefits},scopedSlots:e._u([{key:"title",fn:function(){return[e._v("Features & Benefits")]},proxy:!0},{key:"content",fn:function(){return[t("LazyImg",{staticClass:"h-auto w-full max-w-xl",attrs:{src:e.sectionImage.src,alt:e.sectionImage.alt,options:{w:1500,il:!0},"options-placeholder":{w:100}}}),t("BaseButton",{attrs:{shape:"rectangle","display-type":"info"}},[t("BaseExternalLink",{staticClass:"space-x-1",attrs:{href:e.whitePaper.path,"aria-label":e.whitePaper.text}},[t("DownloadSvg",{staticClass:"h-5 w-5 shrink-0"}),t("span",[e._v(e._s(e.whitePaper.text))])],1)],1)]},proxy:!0}])}),t("section",{staticClass:"bg-gray-100 bg-[length:517px] bg-bottom bg-repeat-x",style:{backgroundImage:`url(${e.backgroundUrl})`}},[t("VideoFeatureSection",{attrs:{"video-source":e.videoSource},scopedSlots:e._u([{key:"title",fn:function(){return[e._v("WhiteHawk Cyber Risk Radar Demo")]},proxy:!0},{key:"description",fn:function(){return[e._v("For Supply Chain Risk Mitigation")]},proxy:!0}])})],1),t("CustomCta",{attrs:{value:e.cta}})],1)},V=[];const o={};var c=M(n,U,V,!1,A,null,null,null);function A(e){for(let a in o)this[a]=o[a]}typeof i=="function"&&i(c);const O=function(){return c.exports}();export{O as default};