import{C as Ye}from"./CisToCmmcMappingDisplay.5efdcd67.js";import{C as ne}from"./CollapsibleSection.b18fb108.js";import{R as Je}from"./arrow-path.24b87f73.js";import{R as Xe}from"./RiskVectorSummary.768c70e6.js";import{ah as Ze,d as n,aP as Ee,aQ as Te,r as et,bF as tt,aB as ie,n as _,ax as S,az as ee,ab as st}from"./index.b52a2fa9.js";import{G as at}from"./GradeLetterDisplay.fd31a8ac.js";import{B as ot}from"./BitsightLevelBadge.4895f3d3.js";import{A as rt}from"./AnalystSelect.9bb95de9.js";import{T as nt}from"./ToolTip.f56af92a.js";import{O as it}from"./ObjectDisplay.484d7fa5.js";import{S as ct}from"./SupplierSelect.ec1e1d43.js";import{e as T}from"./attributeValue.ea53a720.js";import{a as lt}from"./ratingScoreDescription.3b48b1ea.js";import{h as ut,m as fe,f as pt,g as dt}from"./index.e5da98bf.js";import{d as mt}from"./index.cc59a871.js";import{t as ge}from"./index.17c63c88.js";import{g as _e}from"./index.87e44ac4.js";const vt={list(e,o){return Ze(["companies",e,"bitsight","companies",o,"performance-evaluation"],()=>Ee.get(`${Te}/companies/${e.value}/bitsight/companies/${o.value}/performance-evaluation`).then(t=>t.data),{enabled:n(()=>o.value!==void 0&&e.value!==void 0)})}};function yt(e,o,t){var s,a,d,l,p,i,c,u,f,D;et(2,arguments);var B=ge(e),F=ge(o),O=dt(),b=(s=(a=t==null?void 0:t.locale)!==null&&a!==void 0?a:O.locale)!==null&&s!==void 0?s:ut,M=tt((d=(l=(p=(i=t==null?void 0:t.weekStartsOn)!==null&&i!==void 0?i:t==null||(c=t.locale)===null||c===void 0||(u=c.options)===null||u===void 0?void 0:u.weekStartsOn)!==null&&p!==void 0?p:O.weekStartsOn)!==null&&l!==void 0?l:(f=O.locale)===null||f===void 0||(D=f.options)===null||D===void 0?void 0:D.weekStartsOn)!==null&&d!==void 0?d:0);if(!b.localize)throw new RangeError("locale must contain localize property");if(!b.formatLong)throw new RangeError("locale must contain formatLong property");if(!b.formatRelative)throw new RangeError("locale must contain formatRelative property");var x=mt(B,F);if(isNaN(x))throw new RangeError("Invalid time value");var h;x<-6?h="other":x<-1?h="lastWeek":x<0?h="yesterday":x<1?h="today":x<2?h="tomorrow":x<7?h="nextWeek":h="other";var Q=fe(B,_e(B)),G=fe(F,_e(F)),J=b.formatRelative(h,Q,G,{locale:b,weekStartsOn:M});return pt(B,J,{locale:b,weekStartsOn:M})}const ce={};ce.props={value:{key:"value",required:!1,type:null},options:{key:"options",required:!0,type:Array}};ce.setup=(e,o)=>{const t=e,s=o.emit;return{proxy:ie(t,s)}};var ft=function(){var e=this,o=e.$createElement,t=e._self._c||o;return t("div",{staticClass:"flex flex-col xl:col-span-2"},[t("BaseSelect",{model:{value:e.proxy,callback:function(s){e.proxy=s},expression:"proxy"}},[t("option",{domProps:{value:null}}),e._l(e.options,function(s){return t("option",{key:s.name,domProps:{value:s}},[e._v(" "+e._s(s.name)+" ")])})],2)],1)},gt=[];const xe={};var _t=_(ce,ft,gt,!1,xt,null,null,null);function xt(e){for(let o in xe)this[o]=xe[o]}const Ct=function(){return _t.exports}(),q={};q.props={value:{key:"value",required:!0,type:Object},options:{key:"options",required:!0,type:Array}};q.setup=(e,o)=>{const t=e,s=o.emit;return{proxy:S(t,s)}};q.components=Object.assign({FocusAreaInput:Ct},q.components);var ht=function(){var e=this,o=e.$createElement,t=e._self._c||o;return t("div",{staticClass:"grid divide-y xl:col-span-2"},e._l(e.proxy,function(s,a){return t("BaseLabel",{key:a,staticClass:"flex flex-col p-4 lg:grid lg:items-center xl:grid-cols-3"},[e._v(" Focus Area "+e._s(a.split("num")[1])+" "),t("div",{staticClass:"xl:col-span-2"},[t("FocusAreaInput",{staticClass:"w-full",attrs:{options:e.options},model:{value:e.proxy[a],callback:function(d){e.$set(e.proxy,a,d)},expression:"proxy[i]"}})],1)])}),1)},kt=[];const Ce={};var bt=_(q,ht,kt,!1,St,null,null,null);function St(e){for(let o in Ce)this[o]=Ce[o]}const $t=function(){return bt.exports}(),le={};le.props={value:{key:"value",required:!1,type:String,default:""}};le.setup=(e,o)=>{const t=e,s=o.emit;return{proxy:ie(t,s)}};var At=function(){var e=this,o=e.$createElement,t=e._self._c||o;return t("BaseLabel",{staticClass:"flex flex-col p-4 lg:grid lg:grid-cols-3 lg:items-center"},[t("span",{staticClass:"block text-sm font-medium leading-5 text-gray-700"},[e._v(" Industry Description ")]),t("div",{staticClass:"flex flex-col lg:col-span-2"},[t("BaseTextarea",{attrs:{rows:"2"},model:{value:e.proxy,callback:function(s){e.proxy=s},expression:"proxy"}})],1)])},Dt=[];const he={};var It=_(le,At,Dt,!1,wt,null,null,null);function wt(e){for(let o in he)this[o]=he[o]}const Pt=function(){return It.exports}(),ue={};ue.props={value:{key:"value",required:!1,type:null},products:{key:"products",required:!0,type:Array}};ue.setup=(e,o)=>{const t=e,s=o.emit,a=S(t,s),d=n(()=>{const c=new Map;for(const f of t.products)c.set(f.manufacturer.id,{id:f.manufacturer.id,name:f.manufacturer.name});return[...c.values()].sort((f,D)=>f.name.localeCompare(D.name))}),l=n(()=>a.value.manufacturer?t.products.filter(c=>c.manufacturer.name===a.value.manufacturer):t.products),p=n({get(){return a.value.manufacturer},set(c){a.value.manufacturer=c,a.value.product=void 0,a.value.description=void 0}}),i=n({get(){return a.value.product},set(c){a.value.product=c;const u=l.value.find(f=>f.name===c);a.value.id=u==null?void 0:u.id,a.value.description=u==null?void 0:u.description}});return{proxy:a,filteredManufacturers:d,filteredProducts:l,manufacturer:p,product:i}};var Bt=function(){var e=this,o=e.$createElement,t=e._self._c||o;return t("section",{staticClass:"flex flex-col space-y-3"},[t("BaseLabel",{staticClass:"flex flex-col space-y-1"},[e._v(" Manufacturer "),t("BaseSelect",{staticClass:"w-full",model:{value:e.manufacturer,callback:function(s){e.manufacturer=s},expression:"manufacturer"}},[t("option",{domProps:{value:null}}),e._l(e.filteredManufacturers,function(s){return t("option",{key:s.id,domProps:{value:s.name}},[e._v(" "+e._s(s.name)+" ")])})],2)],1),t("BaseLabel",{staticClass:"flex flex-col space-y-1"},[e._v(" Product "),t("BaseSelect",{staticClass:"w-full",model:{value:e.product,callback:function(s){e.product=s},expression:"product"}},[t("option",{domProps:{value:null}}),e._l(e.filteredProducts,function(s){return t("option",{key:s.id,domProps:{value:s.name}},[e._v(" "+e._s(s.name)+" ")])})],2)],1),t("BaseLabel",{staticClass:"flex flex-col space-y-1"},[e._v(" Product Description "),t("BaseTextarea",{staticClass:"block w-full resize-none",attrs:{rows:"5"},model:{value:e.proxy.description,callback:function(s){e.$set(e.proxy,"description",s)},expression:"proxy.description"}})],1)],1)},Ot=[];const ke={};var Rt=_(ue,Bt,Ot,!1,Ft,null,null,null);function Ft(e){for(let o in ke)this[o]=ke[o]}const Mt=function(){return Rt.exports}(),j={};j.props={value:{key:"value",required:!1,type:null},title:{key:"title",required:!0,type:String},productCategories:{key:"productCategories",required:!0,type:Array},products:{key:"products",required:!0,type:Array}};j.setup=(e,o)=>{const t=e,s=o.emit,a=S(t,s),d=n({get(){return a.value.category},set(p){a.value.category=p,a.value.main=void 0,a.value.option=void 0}}),l=n(()=>a.value.category?t.products.filter(p=>p.categories.some(i=>{var c;return i.id===((c=a.value.category)==null?void 0:c.id)})):[]);return{proxy:a,category:d,productsWithSelectedCategory:l}};j.components=Object.assign({ProductInput:Mt},j.components);var Et=function(){var e=this,o=e.$createElement,t=e._self._c||o;return t("section",{staticClass:"flex flex-col divide-y"},[t("BaseTypography",{staticClass:"p-4 text-gray-600",attrs:{variant:"p1"}},[e._v(" "+e._s(e.title)+" ")]),t("BaseLabel",{staticClass:"p-4"},[e._v(" Category "),t("BaseSelect",{staticClass:"w-full",model:{value:e.category,callback:function(s){e.category=s},expression:"category"}},[t("option",{domProps:{value:null}}),e._l(e.productCategories,function(s){return t("option",{key:s.id,domProps:{value:s}},[e._v(" "+e._s(s.name)+" ")])})],2)],1),t("div",{staticClass:"flex flex-col space-y-4 divide-y lg:flex-row lg:items-center lg:justify-between lg:space-y-0 lg:divide-y-0 lg:divide-x"},[t("div",{staticClass:"flex-1 p-4"},[t("fieldset",{staticClass:"space-y-2"},[t("legend",{staticClass:"font-display font-semibold"},[e._v("Main")]),t("ProductInput",{attrs:{products:e.productsWithSelectedCategory},model:{value:e.proxy.main,callback:function(s){e.$set(e.proxy,"main",s)},expression:"proxy.main"}})],1)]),t("div",{staticClass:"flex-1 p-4"},[t("fieldset",{staticClass:"space-y-2"},[t("legend",{staticClass:"font-display font-semibold"},[e._v("Option")]),t("ProductInput",{attrs:{products:e.productsWithSelectedCategory},model:{value:e.proxy.option,callback:function(s){e.$set(e.proxy,"option",s)},expression:"proxy.option"}})],1)])])],1)},Tt=[];const be={};var qt=_(j,Et,Tt,!1,jt,null,null,null);function jt(e){for(let o in be)this[o]=be[o]}const Nt=function(){return qt.exports}(),N={};N.props={value:{key:"value",required:!0,type:null},productCategories:{key:"productCategories",required:!0,type:Array},products:{key:"products",required:!0,type:Array},title:{key:"title",required:!0,type:String},numProducts:{key:"numProducts",required:!0,type:Number}};N.setup=(e,o)=>{const t=e,s=o.emit;return{proxy:S(t,s)}};N.components=Object.assign({CollapsibleSection:ne,ProductPair:Nt},N.components);var Lt=function(){var e=this,o=e.$createElement,t=e._self._c||o;return t("CollapsibleSection",{scopedSlots:e._u([{key:"title",fn:function(){return[t("BaseTypography",{staticClass:"py-4 pl-4",attrs:{component:"h3",variant:"subtitle3"}},[e._v(" "+e._s(e.title)+" Product Options ")])]},proxy:!0},{key:"content",fn:function(){return[t("div",{staticClass:"divide-y"},e._l(e.numProducts,function(s){return t("ProductPair",{key:s,attrs:{"product-categories":e.productCategories,products:e.products,title:`Product ${s}`},model:{value:e.proxy[s],callback:function(a){e.$set(e.proxy,s,a)},expression:"proxy[num]"}})}),1)]},proxy:!0}])})},Ut=[];const Se={};var Wt=_(N,Lt,Ut,!1,Ht,null,null,null);function Ht(e){for(let o in Se)this[o]=Se[o]}const zt=function(){return Wt.exports}(),pe={};pe.props={value:{key:"value",required:!1,type:null}};pe.setup=(e,o)=>{const t=e,s=o.emit;return{proxy:S(t,s)}};var Qt=function(){var e=this,o=e.$createElement,t=e._self._c||o;return t("div",{staticClass:"flex flex-col justify-between space-y-2 p-4 lg:flex-row lg:space-x-4 lg:space-y-0"},[t("BaseLabel",{staticClass:"flex-1"},[t("span",{staticClass:"block text-sm font-medium leading-5 text-gray-700"},[e._v(" Standard Note: ")]),t("BaseTextarea",{staticClass:"w-full",attrs:{rows:"5",placeholder:"Canned description based on the grade"},model:{value:e.proxy.standard,callback:function(s){e.$set(e.proxy,"standard",s)},expression:"proxy.standard"}})],1),t("BaseLabel",{staticClass:"flex-1"},[t("span",{staticClass:"block text-sm font-medium leading-5 text-gray-700"},[e._v(" Custom Note: ")]),t("BaseTextarea",{staticClass:"w-full",attrs:{rows:"5",placeholder:"Custom description starting with selected canned note"},model:{value:e.proxy.custom,callback:function(s){e.$set(e.proxy,"custom",s)},expression:"proxy.custom"}})],1)],1)},Gt=[];const $e={};var Vt=_(pe,Qt,Gt,!1,Kt,null,null,null);function Kt(e){for(let o in $e)this[o]=$e[o]}const Yt=function(){return Vt.exports}(),L={};L.props={value:{key:"value",required:!0,type:Object}};L.setup=(e,o)=>{const t=e,s=o.emit;return{proxy:S(t,s)}};L.components=Object.assign({GradeLetterDisplay:at,RiskVectorNotes:Yt},L.components);var Jt=function(){var e=this,o=e.$createElement,t=e._self._c||o;return t("section",{staticClass:"divide-y"},e._l(e.proxy,function(s,a){return t("div",{key:a,staticClass:"divide-y"},[t("div",{staticClass:"flex flex-row justify-start space-x-2 p-4"},[t("BaseTypography",{staticClass:"text-gray-700",attrs:{component:"h4",variant:"p1"}},[e._v(" "+e._s(a)+": ")]),s.grade?t("GradeLetterDisplay",{attrs:{grade:s.grade}}):e._e()],1),t("RiskVectorNotes",{model:{value:e.proxy[a],callback:function(d){e.$set(e.proxy,a,d)},expression:"proxy[type]"}})],1)}),0)},Xt=[];const Ae={};var Zt=_(L,Jt,Xt,!1,es,null,null,null);function es(e){for(let o in Ae)this[o]=Ae[o]}const ts=function(){return Zt.exports}(),U={};U.props={score:{key:"score",required:!1,type:Number},ipv4Count:{key:"ipv4Count",required:!1,type:Number},monitoringCompanyCount:{key:"monitoringCompanyCount",required:!1,type:String}};U.setup=(e,o)=>{const t=e;return{ipv4CountDisplay:n(()=>new Number(t.ipv4Count).toLocaleString())}};U.components=Object.assign({BitsightLevelBadge:ot},U.components);var ss=function(){var e=this,o=e.$createElement,t=e._self._c||o;return t("div",{staticClass:"grid grid-cols-1 gap-4 p-4 lg:grid-cols-3"},[t("div",{staticClass:"overflow-hidden rounded-lg border"},[t("div",{staticClass:"px-4 py-5 sm:p-6"},[t("dl",{staticClass:"space-y-1"},[t("dt",{staticClass:"truncate text-sm font-medium leading-5 text-gray-500"},[e._v(" Rating Score ")]),e.score?t("dd",{staticClass:"flex items-center space-x-4 text-3xl font-semibold leading-9 text-gray-900"},[t("span",[e._v(e._s(e.score))]),t("BitsightLevelBadge",{attrs:{value:e.score}})],1):t("dd",{staticClass:"mt-1 text-3xl font-semibold leading-9 text-gray-900"},[t("span",[e._v("???")])])])])]),t("div",{staticClass:"overflow-hidden rounded-lg border"},[t("div",{staticClass:"px-4 py-5 sm:p-6"},[t("dl",[t("dt",{staticClass:"truncate text-sm font-medium leading-5 text-gray-500"},[e._v(" # IP Addresses ")]),t("dd",{staticClass:"mt-1 text-3xl font-semibold leading-9 text-gray-900"},[e._v(" "+e._s(e.ipv4CountDisplay||"???")+" ")])])])]),t("div",{staticClass:"overflow-hidden rounded-lg border"},[t("div",{staticClass:"px-4 py-5 sm:p-6"},[t("dl",[t("dt",{staticClass:"truncate text-sm font-medium leading-5 text-gray-500"},[e._v(" Monitoring Company Count ")]),t("dd",{staticClass:"mt-1 text-3xl font-semibold leading-9 text-gray-900"},[e._v(" "+e._s(e.monitoringCompanyCount||"???")+" ")])])])])])},as=[];const De={};var os=_(U,ss,as,!1,rs,null,null,null);function rs(e){for(let o in De)this[o]=De[o]}const ns=function(){return os.exports}(),W={};W.props={value:{key:"value",required:!1,type:null},options:{key:"options",required:!0,type:Array}};W.setup=(e,o)=>{const t=e,s=o.emit;return{proxy:ie(t,s)}};W.components=Object.assign({ToolTip:nt,ObjectDisplay:it},W.components);var is=function(){var e=this,o=e.$createElement,t=e._self._c||o;return t("BaseLabel",{staticClass:"flex flex-col p-4 lg:grid lg:grid-cols-3 lg:items-center"},[t("div",{staticClass:"flex flex-row items-center space-x-1"},[t("span",{staticClass:"block text-sm font-medium leading-5 text-gray-700"},[e._v(" Buyer Company ")]),e.value?t("ToolTip",[t("ObjectDisplay",{attrs:{value:e.value}})],1):e._e()],1),t("div",{staticClass:"flex flex-col lg:col-span-2"},[t("BaseSelect",{model:{value:e.proxy,callback:function(s){e.proxy=s},expression:"proxy"}},[t("option",{domProps:{value:null}}),e._l(e.options,function(s){return t("option",{key:s.id,domProps:{value:s}},[e._v(" "+e._s(s.name)+" ")])})],2)],1)])},cs=[];const Ie={};var ls=_(W,is,cs,!1,us,null,null,null);function us(e){for(let o in Ie)this[o]=Ie[o]}const ps=function(){return ls.exports}();function we(e){return Math.floor(Math.random()*e.length)}function*ds(e){if(e.length<2)throw new Error(`Cannot pick 2 from array with only ${e.length} elements`);const o=we(e);for(yield e[o];;){const t=we(e);if(t!==o){yield e[t];return}}}const te=[{name:"Compromised Systems",text:"Compromised Systems risk vectors make up 55% of the Risk Rating. It contains information based on Botnet Infections, Spam Propagation, Malware Servers, Unsolicited Communications, and Potentially Exploited Devices. The total grade of all Compromised Systems risk vectors, configurations, and event durations factor into the entire Compromised Systems risk category. We then normalize them to account for company size."},{name:"Public Disclosure",text:"Public Disclosure risk vectors are based on collected data breach information from verifiable news sources both domestic and international and by filing Freedom of Information Act (FOIA) requests. Information obtained through these research processes include a range of security events. Though these events do not necessarily result in direct data loss to you, the relevant interruptions to business continuity can be used to make informed decisions to improve your security preparedness."},{name:"System Patching",text:"System Patching risk vectors evaluate how vulnerabilities affect how many systems in an organization's network infrastructure and how quickly the company resolves any issues."},{name:"Application Security",text:"Application Security risk vectors track security holes and liabilities introduced by out-of-date or unsupported server software and business applications. These vectors also track outgoing communications from desktop devices including metadata about the device's operating system and its browser version. WhiteHawk compares that information with currently released versions or software updates available for those systems."},{name:"Communications Encryption",text:"Communications Encryption risk vectors analyze server configurations to determine if a server's security protocol libraries are correctly configured and supporting strong encryption when making connections to other machines. Incorrect configurations may make servers vulnerable to POODLE and Heartbleed attacks that can lead to attackers obtaining sensitive data. WhiteHawk checks TLS/SSL connections with servers and collects the certificate chain during the session negotiation process, allowing us to review and establish which hosts need updating."},{name:"Email Security",text:"Email Security risk vectors track the use of SPF, DKIM and DMARC DNS records. SPF on its own isn't enough to prevent domain name spoofing. Email has two possible \u201CFrom\u201D Address Fields (Envelope From, Header From.) SPF checks are done on the Envelope From, so it's not a preventative measure against all spoofing. Legitimate services do use this approach, for example, newsletters, but it is also used in spoofing. DKIM and DMARC both seek to get around this vulnerability. DKIM signs the email with a signature that a recipient server can verify against the Published DNS record. DMARC is used in conjunction with SPF; it aims to match the Header From domain name with the Envelope From used during the SPF check."},{name:"User Behavior",text:"User Behavior risk vectors focus on employee activities that may introduce risks into an organization's networks. User behavior risk examples include sharing files over BitTorrent and determining if employees are re-using corporate login credentials in external websites outside of the corporate network."}],se={"Application Security":{essential:["Application Security","Access Control"],balanced:["Web Services Security","Traffic Analysis","Denial of Service Mitigation"],premier:["Orchestration","Security Information and Event Management","Network Intrusion Prevention System","Threat Intelligence"]},"Communications Encryption":{essential:["Encrypted Communication","Virtual Private Network"],balanced:["Secure Managed File Transfer","Traffic Analysis","Data Leak Prevention"],premier:["Security Network Engineering","Security Information and Event Management","Managed Security Services","Compliance Reporting"]},"Compromised Systems":{essential:["Antimalware","Access Control"],balanced:["Incident Response","Network Intrusion Detection System","Malware Analysis"],premier:["Host-Based Intrusion Prevention System","Security Information and Event Management","Managed Security Services","Compliance Reporting"]},"Email Security":{essential:["Email Filter","Training"],balanced:["Web Filter","Traffic Analysis","Incident Response"],premier:["Threat Intelligence","Security Information and Event Management","Orchestration","Managed Security Services"]},"Public Disclosure":{essential:["Training","Data Leak Prevention"],balanced:["Incident Response","Host-Based Intrusion Prevention System","Network Intrusion Detection System"],premier:["Managed Security Services","Compliance Reporting","Forensics","Security Information and Event Management"]},"System Patching":{essential:["Patch Management","Network Discovery"],balanced:["Encrypted Storage","Backup","Threat Manager"],premier:["Virtualization Security Endpoint Protection","Host-Based Intrusion Prevention System","Security Information and Event Management","Vulnerability Assessment"]},"User Behavior":{essential:["Web Filter","Training"],balanced:["Threat Manager","Insider Threat Analytics","Data Leak Prevention"],premier:["Threat Intelligence","Security Information and Event Management","Orchestration","Compliance Reporting"]}},qe=["Compromised Systems","Public Disclosure","System Patching","Application Security","User Behavior","Email Security"],ms=["Communications Encryption"];function Pe(e,o,t){const s=`${t} ${o}`;return{grade:e[t]||"",standard:e[`${s} Description`]||"",custom:e[`${s} Analyst Note`]||""}}function vs(e){const o={};for(const t of qe)o[t]=Pe(e,"Risk Vector Grade",t);for(const t of ms)o[t]=Pe(e,"Risk Vector",t);return o}function ys(e){if(!e)return{};const o={};for(const t of Object.entries(e)){const[s,a]=t,d=qe.includes(s)?`${s} Risk Vector Grade`:`${s} Risk Vector`;o[s]=a.grade,o[`${d} Description`]=a.standard,o[`${d} Analyst Note`]=a.custom}return o}const Be=["Compromised Systems","Public Disclosure","System Patching","Application Security","Communications Encryption","Email Security","User Behavior"],re={};for(let e=0;e<Be.length;e++){const o=Be[e];o&&(re[o]=e)}const Oe=e=>{const o=Object.entries(e).map(([t,s])=>({name:t,grade:s.grade})).filter(({grade:t})=>t&&t!=="N/A");return o.sort((t,s)=>{const a=s.grade.localeCompare(t.grade);if(a!==0)return a;const d=re[t.name]||0,l=re[s.name]||0;return d-l}),o.map(t=>({name:t.name}))};function ae(e,o,t){const s={};for(let a=0;a<t;a++){const d=a+1,l=`${o} Product ${d}`;s[d]={category:{id:e[`${l} - categoryId`],name:e[`${l} - Category`]},main:{id:e[`${l} - mainId`],manufacturer:e[`${l} - Vendor Option 1`],product:e[`${l} - Product Option 1`],description:e[`${l} - Description Option 1`]},option:{id:e[`${l} - optionId`],manufacturer:e[`${l} - Vendor Option 2`],product:e[`${l} - Product Option 2`],description:e[`${l} - Description Option 2`]}}}return s}function oe(e,o){return e?Object.entries(e).reduce((t,s)=>{const[a,d]=s,{category:l,main:p,option:i}=d,c=`${o} Product ${a}`;return t[`${c} - categoryId`]=l==null?void 0:l.id,t[`${c} - Category`]=l==null?void 0:l.name,t[`${c} - mainId`]=p==null?void 0:p.id,t[`${c} - Vendor Option 1`]=p==null?void 0:p.manufacturer,t[`${c} - Product Option 1`]=p==null?void 0:p.product,t[`${c} - Description Option 1`]=p==null?void 0:p.description,t[`${c} - optionId`]=i==null?void 0:i.id,t[`${c} - Vendor Option 2`]=i==null?void 0:i.manufacturer,t[`${c} - Product Option 2`]=i==null?void 0:i.product,t[`${c} - Description Option 2`]=i==null?void 0:i.description,t},{}):{}}const H={};H.props={value:{key:"value",required:!1,type:null},products:{key:"products",required:!0,type:Array},users:{key:"users",required:!0,type:Array},companyAccess:{key:"companyAccess",required:!0,type:Array},companies:{key:"companies",required:!0,type:Array},companyBitsightCompanies:{key:"companyBitsightCompanies",required:!0,type:Array},status:{key:"status",required:!0,type:String}};H.setup=(e,o)=>{const t=e,s=o.emit,a=S(t,s),d=n({get(){return{id:a.value.buyerId}},set(r){r&&r.id&&(a.value.buyerId=r.id)}}),l=n({get(){return{id:a.value.analystId||"",name:a.value["WhiteHawk Analyst Name"]||"",title:a.value["WhiteHawk Analyst Title"]||"",email:a.value["WhiteHawk Analyst Email"]||""}},set(r){const{id:m,name:v,title:y,email:$}=r;r&&(a.value.analystId=m,a.value["WhiteHawk Analyst Name"]=v,a.value["WhiteHawk Analyst Title"]=y,a.value["WhiteHawk Analyst Email"]=$)}}),p=n({get(){return{id:a.value["Buyer Company Id"]==null?a.value.buyerId||"":a.value["Buyer Company Id"]||"",name:a.value["Buyer Company Name"]||""}},set(r){r&&(a.value["Buyer Company Id"]=r.id,a.value["Buyer Company Name"]=r.name)}}),i=n({get(){return a.value["Rating Score Description"]},set(r){r&&(a.value["Rating Score Description"]=r)}}),c=n({get(){return a.value["Industry Comparison Description"]},set(r){r&&(a.value["Industry Comparison Description"]=r)}}),u=n({get(){return{num1:{name:a.value["Focus Area 1 Title"]||""},num2:{name:a.value["Focus Area 2 Title"]||""},num3:{name:a.value["Focus Area 3 Title"]||""}}},set(r){const{num1:m,num2:v,num3:y}=r;r&&m&&v&&y&&(a.value["Focus Area 1 Title"]=m.name,a.value["Focus Area 2 Title"]=v.name,a.value["Focus Area 3 Title"]=y.name)}}),f=n({get(){return vs(a.value)},set(r){const m=ys(r);for(const[v,y]of Object.entries(m))a.value[v]=y}}),D=n(()=>{var r;return u.value.num1&&u.value.num1.name?(r=f.value[u.value.num1.name])==null?void 0:r.standard:""});ee(D,r=>{r&&(a.value["Focus Area 1 Description"]=r)});const B=n(()=>{var r;return u.value.num2&&u.value.num2.name?(r=f.value[u.value.num2.name])==null?void 0:r.standard:""});ee(B,r=>{r&&(a.value["Focus Area 2 Description"]=r)});const F=n(()=>{var r;return u.value.num3&&u.value.num3.name?(r=f.value[u.value.num3.name])==null?void 0:r.standard:""});ee(F,r=>{r&&(a.value["Focus Area 3 Description"]=r)});const O=n({get(){if(a.value["# IP Address"])return+a.value["# IP Address"]},set(r){r&&(a.value["# IP Address"]=r.toString())}}),b=n({get(){return a.value["Monitoring company count"]},set(r){r&&(a.value["Monitoring company count"]=r)}}),M=n({get(){if(a.value["Security Rating"])return+a.value["Security Rating"]},set(r){r&&(a.value["Security Rating"]=r.toString())}}),x=n({get(){return{id:a.value.supplierId||"",name:a.value["Supplier Name"]||"",domain:a.value.Domain||""}},set(r){r&&r.id&&r.name&&r.domain&&(a.value.supplierId=r.id,a.value["Supplier Name"]=r.name,a.value.Domain=r.domain)}}),h=n({get(){return ae(a.value,"Basic",2)},set(r){if(r){const m=oe(r,"Basic");for(const[v,y]of Object.entries(m))a.value[v]=y}}}),Q=n({get(){return ae(a.value,"Balanced",3)},set(r){if(r){const m=oe(r,"Balanced");for(const[v,y]of Object.entries(m))a.value[v]=y}}}),G=n({get(){return ae(a.value,"Advanced",4)},set(r){if(r){const m=oe(r,"Advanced");for(const[v,y]of Object.entries(m))a.value[v]=y}}}),J=n(()=>t.users.filter(r=>T(r,"email").includes("@whitehawk")).map(r=>({id:T(r,"sub"),name:T(r,"name"),title:T(r,"custom:title"),email:T(r,"email")})).sort((r,m)=>r.email.localeCompare(m.email))),je=n(()=>t.companies.filter(r=>r.status==="ACTIVE").map(r=>({id:r.id,name:r.name}))),Ne=n(()=>{const r={};for(const v of t.products)for(const y of v.categories||[])r[y.id]=y;return Object.values(r).sort((v,y)=>v.name.localeCompare(y.name))}),me=n(()=>{var m;const r={};for(const v of t.products)for(const y of v.categories||[]){const{name:$}=y;r[$]?(m=r[$])==null||m.push(v):r[$]=[v]}return r}),Le=n(()=>t.companyBitsightCompanies.map(r=>({id:r.data.guid,name:r.data.name,domain:r.data.primary_domain})).sort((r,m)=>r.name.localeCompare(m.name))),Ue=n(()=>Oe(f.value)),We=n(()=>{const r=[];return x.value.id||r.push("Select a supplier"),t.status==="Delivered"&&r.push('The status of this scorecard has already been marked as "Delivered."'),{allowed:r.length===0,reasons:r}}),He=n(()=>d.value.id),ze=n(()=>x.value.id),Qe=vt.list(He,ze),I=n(()=>Qe.data.value);function Ge(){var r,m,v,y,$;if(I.value){const ve=I.value.customerMonitoringCount;O.value=I.value.ipv4Count,b.value=ve===1?"1":`${ve}`,M.value=I.value.bitsightScore||0,i.value=lt(x.value.name,I.value.bitsightScore),c.value=I.value.industryComparison.join(`

`);const X={};for(const C of Object.entries(I.value.analysis)){const[g,R]=C,{customNote:A,standardNote:w,grade:P}=R;let E="";for(let k=0;k<te.length;k++)((r=te[k])==null?void 0:r.name)===g&&(E=((m=te[k])==null?void 0:m.text)||"");X[g]={grade:P,description:E,custom:A.join(" "),standard:w.join(" ")}}f.value=X;const[V,K,Y]=Oe(X);u.value={num1:V,num2:K,num3:Y};const ye=C=>{var g;return{id:C.id,manufacturer:(g=C.manufacturer)==null?void 0:g.name,product:C.name,description:C.description}},Ve=C=>{if(!(C in me.value))return[void 0,void 0];const g=me.value[C];if(g){if(g.length===1){const w=g[0];return[w,w]}const[R,A]=ds(g);return[R,A]}return[void 0,void 0]},Z=C=>{var R;const g={};for(let A=0;A<C.length;A++){const w=C[A]||"",[P,E]=Ve(w),k=(R=P==null?void 0:P.categories)==null?void 0:R.find(Ke=>Ke.name===w);g[A+1]={category:{id:k==null?void 0:k.id,name:k==null?void 0:k.name},main:P?ye(P):void 0,option:E?ye(E):void 0}}return g};h.value=Z(((v=se[(V==null?void 0:V.name)||""])==null?void 0:v.essential)||[]),Q.value=Z(((y=se[(K==null?void 0:K.name)||""])==null?void 0:y.balanced)||[]),G.value=Z((($=se[(Y==null?void 0:Y.name)||""])==null?void 0:$.premier)||[]),s("update-data")}else throw new Error("Performance Evaluation is undefined")}return{analyst:l,buyerCompany:p,ratingScoreDescription:i,industryComparisonDescription:c,focusAreas:u,riskVectors:f,ipv4Count:O,monitoringCompanyCount:b,bitSightRatingScore:M,supplier:x,essential:h,balanced:Q,premier:G,analystOptions:J,companyOptions:je,productCategories:Ne,supplierOptions:Le,worstRiskVectorsFirst:Ue,canUpdateData:We,updateData:Ge}};H.components=Object.assign({CompanySelect:ps,AnalystSelect:rt,SupplierSelect:ct,RefreshSvg:Je,SupplierStats:ns,IndustryDescription:Pt,RiskVectorSummary:Xe,FocusAreasInput:$t,CollapsibleSection:ne,RiskVectorPerformance:ts,ProductGroup:zt},H.components);var fs=function(){var e=this,o=e.$createElement,t=e._self._c||o;return t("section",{staticClass:"flex flex-col divide-y"},[t("div",{staticClass:"flex flex-col divide-y"},[t("BaseTypography",{staticClass:"p-4",attrs:{component:"h3",variant:"subtitle3"}},[e._v(" Buyer Information ")]),t("CompanySelect",{attrs:{options:e.companyOptions},model:{value:e.buyerCompany,callback:function(s){e.buyerCompany=s},expression:"buyerCompany"}})],1),t("div",{staticClass:"flex flex-col divide-y"},[t("BaseTypography",{staticClass:"p-4",attrs:{component:"h3",variant:"subtitle3"}},[e._v(" Analyst Information ")]),t("AnalystSelect",{attrs:{options:e.analystOptions},model:{value:e.analyst,callback:function(s){e.analyst=s},expression:"analyst"}})],1),t("div",{staticClass:"flex flex-col divide-y"},[t("BaseTypography",{staticClass:"p-4",attrs:{component:"h3",variant:"subtitle3"}},[e._v(" Supplier Information ")]),t("SupplierSelect",{attrs:{options:e.supplierOptions},model:{value:e.supplier,callback:function(s){e.supplier=s},expression:"supplier"}})],1),t("div",{staticClass:"grid divide-y"},[t("BaseTypography",{staticClass:"p-4",attrs:{component:"h3",variant:"subtitle3"}},[e._v(" Update Data ")]),e.canUpdateData.allowed?e._e():t("BaseAlert",{attrs:{type:"warn"},scopedSlots:e._u([{key:"title",fn:function(){return[e._v("Update Unavailable")]},proxy:!0},{key:"message",fn:function(){return[t("ul",{staticClass:"flex list-inside list-disc flex-col space-y-1"},e._l(e.canUpdateData.reasons,function(s){return t("li",{key:s},[e._v(" "+e._s(s)+" ")])}),0)]},proxy:!0}],null,!1,4159848379)}),t("div",{staticClass:"p-4"},[t("div",{staticClass:"lg:inline-flex"},[t("BaseButton",{staticClass:"w-full space-x-2 lg:w-auto",attrs:{type:"button","display-type":"info",disabled:!e.canUpdateData.allowed},on:{click:e.updateData}},[t("RefreshSvg",{staticClass:"h-auto w-4 xl:w-5"}),t("span",[e._v("Update")])],1)],1)])],1),t("div",{staticClass:"flex flex-col divide-y"},[t("BaseTypography",{staticClass:"p-4",attrs:{component:"h3",variant:"subtitle3"}},[e._v(" Performance Evaluation ")]),t("div",{staticClass:"flex flex-col divide-y"},[t("SupplierStats",{attrs:{score:e.bitSightRatingScore,"ipv4-count":e.ipv4Count,"monitoring-company-count":e.monitoringCompanyCount}}),t("BaseLabel",{staticClass:"flex flex-col p-4 lg:grid lg:grid-cols-3 lg:items-center"},[t("span",{staticClass:"block text-sm font-medium leading-5 text-gray-700"},[e._v(" Rating Score Description ")]),t("div",{staticClass:"flex flex-col lg:col-span-2"},[t("BaseTextarea",{attrs:{rows:"3"},model:{value:e.ratingScoreDescription,callback:function(s){e.ratingScoreDescription=s},expression:"ratingScoreDescription"}})],1)])],1)],1),t("div",{staticClass:"flex flex-col divide-y"},[t("BaseTypography",{staticClass:"p-4",attrs:{component:"h3",variant:"subtitle3"}},[e._v(" Industry Comparison ")]),t("IndustryDescription",{model:{value:e.industryComparisonDescription,callback:function(s){e.industryComparisonDescription=s},expression:"industryComparisonDescription"}})],1),t("div",{staticClass:"flex flex-col divide-y"},[t("BaseTypography",{staticClass:"p-4",attrs:{component:"h3",variant:"subtitle3"}},[e._v(" Recommended Focus Areas ")]),t("div",{staticClass:"flex flex-col divide-y lg:grid lg:grid-cols-2 lg:divide-x lg:divide-y-0 xl:grid-cols-3"},[t("RiskVectorSummary",{attrs:{value:e.riskVectors}}),t("FocusAreasInput",{attrs:{options:e.worstRiskVectorsFirst},model:{value:e.focusAreas,callback:function(s){e.focusAreas=s},expression:"focusAreas"}})],1)],1),t("CollapsibleSection",{scopedSlots:e._u([{key:"title",fn:function(){return[t("BaseTypography",{staticClass:"py-4 pl-4",attrs:{component:"h3",variant:"subtitle3"}},[e._v(" Risk Vector Performance ")])]},proxy:!0},{key:"content",fn:function(){return[e.riskVectors?t("RiskVectorPerformance",{model:{value:e.riskVectors,callback:function(s){e.riskVectors=s},expression:"riskVectors"}}):e._e()]},proxy:!0}])}),t("ProductGroup",{attrs:{"product-categories":e.productCategories,products:e.products,title:"Essential","num-products":2},model:{value:e.essential,callback:function(s){e.essential=s},expression:"essential"}}),t("ProductGroup",{attrs:{"product-categories":e.productCategories,products:e.products,title:"Balanced","num-products":3},model:{value:e.balanced,callback:function(s){e.balanced=s},expression:"balanced"}}),t("ProductGroup",{attrs:{"product-categories":e.productCategories,products:e.products,title:"Premier","num-products":4},model:{value:e.premier,callback:function(s){e.premier=s},expression:"premier"}})],1)},gs=[];const Re={};var _s=_(H,fs,gs,!1,xs,null,null,null);function xs(e){for(let o in Re)this[o]=Re[o]}const Cs=function(){return _s.exports}(),de={};de.props={value:{key:"value",required:!1,type:null}};de.setup=(e,o)=>{const t=e,s=o.emit,a=S(t,s),d=["In Progress","Products Needed","Ready For QA","Complete","Delivered"],l=["Q1","Q2","Q3","Q4","Other"],p=n(()=>{const i=[],c=new Date().getFullYear();for(let u=c-1;u<=c+5;u++)i.push(u);return i});return{proxy:a,statusOptions:d,quarterOptions:l,yearOptions:p}};var hs=function(){var e=this,o=e.$createElement,t=e._self._c||o;return t("div",{staticClass:"grid divide-y lg:grid-cols-4 lg:divide-y-0"},[t("div",{staticClass:"p-4 lg:col-span-2"},[t("BaseLabel",{staticClass:"grid grid-cols-1 gap-1 sm:grid-cols-3 sm:items-center sm:gap-4 lg:grid-cols-1 lg:gap-1"},[t("span",{staticClass:"block text-sm font-medium leading-5 text-gray-700"},[e._v(" Status ")]),t("div",{staticClass:"flex flex-col sm:col-span-2 lg:col-span-1"},[t("BaseSelect",{model:{value:e.proxy.status,callback:function(s){e.$set(e.proxy,"status",s)},expression:"proxy.status"}},[t("option",{domProps:{value:null}}),e._l(e.statusOptions,function(s){return t("option",{key:s},[e._v(" "+e._s(s)+" ")])})],2)],1)])],1),t("div",{staticClass:"p-4 lg:col-span-1"},[t("BaseLabel",{staticClass:"grid grid-cols-1 gap-1 sm:grid-cols-3 sm:items-center sm:gap-4 lg:grid-cols-1 lg:gap-1"},[t("span",{staticClass:"block text-sm font-medium leading-5 text-gray-700"},[e._v(" Year ")]),t("div",{staticClass:"flex flex-col sm:col-span-2 lg:col-span-1"},[t("BaseSelect",{model:{value:e.proxy.year,callback:function(s){e.$set(e.proxy,"year",s)},expression:"proxy.year"}},[t("option",{domProps:{value:null}}),e._l(e.yearOptions,function(s){return t("option",{key:s},[e._v(" "+e._s(s)+" ")])})],2)],1)])],1),t("div",{staticClass:"p-4 lg:col-span-1"},[t("BaseLabel",{staticClass:"grid grid-cols-1 gap-1 sm:grid-cols-3 sm:items-center sm:gap-4 lg:grid-cols-1 lg:gap-1"},[t("span",{staticClass:"block text-sm font-medium leading-5 text-gray-700"},[e._v(" Quarter ")]),t("div",{staticClass:"flex flex-col sm:col-span-2 lg:col-span-1"},[t("BaseSelect",{model:{value:e.proxy.quarter,callback:function(s){e.$set(e.proxy,"quarter",s)},expression:"proxy.quarter"}},[t("option",{domProps:{value:null}}),e._l(e.quarterOptions,function(s){return t("option",{key:s},[e._v(" "+e._s(s)+" ")])})],2)],1)])],1)])},ks=[];const Fe={};var bs=_(de,hs,ks,!1,Ss,null,null,null);function Ss(e){for(let o in Fe)this[o]=Fe[o]}const $s=function(){return bs.exports}(),z={};z.props={value:{key:"value",required:!1,type:null},products:{key:"products",required:!0,type:Array},users:{key:"users",required:!0,type:Array},companyAccess:{key:"companyAccess",required:!0,type:Array},companies:{key:"companies",required:!0,type:Array},companyBitsightCompanies:{key:"companyBitsightCompanies",required:!0,type:Array}};z.setup=(e,o)=>{const t=e,s=o.emit,a=S(t,s),d=n({get(){const i=a.value.yearQuarterValue.split("/")||[],[c,u]=i;return{status:a.value.status,year:c,quarter:u}},set(i){a.value.status=i.status,a.value.yearQuarterValue=`${i.year}/${i.quarter}`}}),l=n(()=>{const i=a.value.data.updatedAt;return i?yt(st(i),new Date):"???"});async function p(){if(a.value.data.buyerId&&a.value.data.supplierId){const i=encodeURIComponent(a.value.data.buyerId),c=encodeURIComponent(a.value.data.supplierId),{data:u}=await Ee.get(`${Te}/companies/${i}/bitsight/companies/${c}/cis-to-cmmc-mapping`);a.value.mapping=u}}return{proxy:a,status:d,updatedAtDisplay:l,updateData:p}};z.components=Object.assign({ScorecardDataInput:Cs,CollapsibleSection:ne,CisToCmmcMappingDisplay:Ye,ScorecardStatus:$s},z.components);var As=function(){var e=this,o=e.$createElement,t=e._self._c||o;return t("section",{staticClass:"divide-y"},[t("ScorecardDataInput",{attrs:{products:e.products,users:e.users,"company-access":e.companyAccess,companies:e.companies,"company-bitsight-companies":e.companyBitsightCompanies,status:e.status.status},on:{"update-data":e.updateData},model:{value:e.proxy.data,callback:function(s){e.$set(e.proxy,"data",s)},expression:"proxy.data"}}),t("CollapsibleSection",{scopedSlots:e._u([{key:"title",fn:function(){return[t("BaseTypography",{staticClass:"py-4 pl-4",attrs:{component:"h3",variant:"subtitle3"}},[e._v(" CIS Controls Mapped to CMMC Maturity Levels ")])]},proxy:!0},{key:"content",fn:function(){return[e.proxy.mapping?t("div",{staticClass:"p-4"},[t("div",{staticClass:"flex justify-center overflow-y-auto rounded-lg border"},[t("CisToCmmcMappingDisplay",{attrs:{value:e.proxy.mapping}})],1)]):t("BaseAlert",{attrs:{type:"warn"},scopedSlots:e._u([{key:"title",fn:function(){return[e._v("No Data Found")]},proxy:!0},{key:"message",fn:function(){return[e._v("Update required.")]},proxy:!0}])})]},proxy:!0}])}),t("div",{staticClass:"grid divide-y"},[t("div",{staticClass:"flex flex-col items-start p-4 sm:flex-row sm:items-center sm:justify-between"},[t("h3",{staticClass:"font-display text-lg font-semibold"},[e._v("Status")]),t("div",{directives:[{name:"show",rawName:"v-show",value:e.proxy.data.updatedAt,expression:"proxy.data.updatedAt"}],staticClass:"inline-flex justify-center rounded-md bg-teal-200 px-2 py-1 text-teal-800"},[t("BaseOverline",{staticClass:"uppercase"},[e._v(" Last updated: "),t("time",{attrs:{datetime:e.proxy.data.updatedAt}},[e._v(" "+e._s(e.updatedAtDisplay)+" ")])])],1)]),t("ScorecardStatus",{model:{value:e.status,callback:function(s){e.status=s},expression:"status"}})],1)],1)},Ds=[];const Me={};var Is=_(z,As,Ds,!1,ws,null,null,null);function ws(e){for(let o in Me)this[o]=Me[o]}const Gs=function(){return Is.exports}();export{Gs as S};