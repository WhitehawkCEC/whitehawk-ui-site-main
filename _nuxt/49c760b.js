(window.webpackJsonp=window.webpackJsonp||[]).push([[99,56,74],{1445:function(e,t){},1675:function(e,t){},1676:function(e,t){},2228:function(e,t,n){"use strict";n.r(t);var r=n(36),o=(n(73),n(199),n(42),n(46),n(24),n(529),n(336),n(121),n(50),n(103),n(38),n(74),n(884)),l=n.n(o),c=n(493),d=n(776),m=n(904),f=n(902),v=n(20),y=n(1673),x=n(502),h=n(870),C=n(482),w={};w.setup=function(e,t){var n=Object(C.b)("id"),o=x.k.get(n),l=Object(v.ref)(),c=[{label:"Name",field:"name"},{label:"Source",field:"source"},{label:"Updated At",field:"updatedAt"},{label:"Score",field:"bitsightScore"},{label:"Application Security",field:"applicationSecurity"},{label:"Communications Encryption",field:"communicationsEncryption"},{label:"Compromised Systems",field:"compromisedSystems"},{label:"Email Security",field:"emailSecurity"},{label:"Public Disclosure",field:"publicDisclosure"},{label:"System Patching",field:"systemPatching"},{label:"User Behavior",field:"userBehavior"},{label:"CIS to CMMC",field:"cisCmmc"}],d=Object(v.computed)((function(){return o.data.value?o.data.value.map((function(e){for(var t,n,o,l,c,d,m,f=e.performanceEvaluation,v=e.mapping,source=e.source,y=e.updatedAt,x={},h=0,C=Object.entries(f.analysis);h<C.length;h++){var w=C[h],_=Object(r.a)(w,2),S=_[0],k=_[1].grade;x[S]={grade:k}}return{name:f.supplier.name,source:source,updatedAt:y,bitsightScore:f.bitsightScore,applicationSecurity:null===(t=x["Application Security"])||void 0===t?void 0:t.grade,communicationsEncryption:null===(n=x["Communications Encryption"])||void 0===n?void 0:n.grade,compromisedSystems:null===(o=x["Compromised Systems"])||void 0===o?void 0:o.grade,emailSecurity:null===(l=x["Email Security"])||void 0===l?void 0:l.grade,publicDisclosure:null===(c=x["Public Disclosure"])||void 0===c?void 0:c.grade,systemPatching:null===(d=x["System Patching"])||void 0===d?void 0:d.grade,userBehavior:null===(m=x["User Behavior"])||void 0===m?void 0:m.grade,cisCmmc:v}})):[]})),m=Object(v.computed)((function(){return d.value.filter((function(e){return void 0!==e.cisCmmc}))})),f=Object(v.computed)((function(){return m.value.filter((function(e){return"Bitsight"===e.source}))})),w=Object(v.computed)((function(){return m.value.filter((function(e){return"Scorecard"===e.source}))}));function _(e){var data=e.map((function(e){return Object.assign({},e)})).map(Object.values),t=function(e){var t=[];return e.map((function(element){var e,n=null===(e=element.cisCmmc)||void 0===e?void 0:e.mapping;if(n)for(var o=0,l=Object.entries(n);o<l.length;o++){var c,d,m=Object(r.a)(l[o],2),f=m[0],v=m[1],y=null!==v.L1?"unknown"!==(null===(c=v[f])||void 0===c?void 0:c.type)?null===(d=v[f])||void 0===d?void 0:d.category:"-":"",x=null!=v.L2?"unknown"!=v.L2.type?v.L2.category:"-":"",h=null!=v.L3?"unknown"!=v.L3.type?v.L3.category:"-":"",C=null!=v.L4?"unknown"!=v.L4.type?v.L4.category:"-":"";t.push(y),t.push(x),t.push(h),t.push(C)}})),t}(e),n=Object.entries(data).map((function(e,n){return e[1].concat(t[n])})),o=c.filter((function(e){return"cisCmmc"!==e.field})).map((function(e){return e.label})),l=function(e){var t,n=null==e||null===(t=e.cisCmmc)||void 0===t?void 0:t.mapping,r=[];for(var o in n){var l=parseInt(o.replace("_","")),c=h.a[l-1];r.push(o+":"+(null==c?void 0:c.description)+":L1"),r.push(o+":"+(null==c?void 0:c.description)+":L2"),r.push(o+":"+(null==c?void 0:c.description)+":L3"),r.push(o+":"+(null==c?void 0:c.description)+":L4/L5")}return r}(e[0]),d=o.concat(l);return n.unshift(d),n}return{id:n,selectedRow:l,columns:c,rows:d,encode:function(){var e,t;null===(e=f.value)||void 0===e||e.sort((function(a,b){return a.name.localeCompare(b.name)}));var n=_(f.value);null===(t=w.value)||void 0===t||t.sort((function(a,b){return a.name.localeCompare(b.name)}));var r=_(w.value),o=y.utils.book_new(),l=y.utils.aoa_to_sheet(r);y.utils.book_append_sheet(o,l,"ScorecardData");var c=y.utils.aoa_to_sheet(n);y.utils.book_append_sheet(o,c,"BitsightData"),Object(y.writeFile)(o,"analytics-"+new Date+".xlsx")}}},w.components=Object.assign({AppVueGoodTable:m.a,BasicModal:d.a,CisToCmmcMappingDisplay:f.a,DocumentDownload:l.a,LoadingSpinner:c.a},w.components);var _=w,S=n(55),component=Object(S.a)(_,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("section",{staticClass:"space-y-6"},[e.rows&&e.rows.length>0?n("BaseSimpleCard",{staticClass:"divide-y"},[n("BaseTypography",{staticClass:"p-4 capitalize",attrs:{variant:"subtitle3",component:"h2"}},[e._v("\n      Analytics for Companies in "+e._s(e.id)+"\n    ")]),e._v(" "),n("div",{staticClass:"divide-y"},[n("div",{staticClass:"p-4"},[e.rows?n("AppVueGoodTable",{attrs:{columns:e.columns,rows:e.rows,"sort-options":{enabled:!0,initialSortBy:{field:"name"}}},scopedSlots:e._u([{key:"table-row",fn:function(t){var r=t.row,o=t.column,l=t.formattedRow;return["cisCmmc"===o.field?[n("button",{staticClass:"text-sm font-normal text-blue-500 hover:text-blue-800 focus:outline-none",attrs:{type:"button"},on:{click:function(t){e.selectedRow=r.cisCmmc}}},[e._v("\n                View\n              ")])]:[e._v("\n              "+e._s(l[o.field])+"\n            ")]]}}],null,!1,3520692311)}):e._e()],1),e._v(" "),e.selectedRow?n("BasicModal",{on:{close:function(t){e.selectedRow=void 0}},scopedSlots:e._u([{key:"body",fn:function(){return[n("div",{staticClass:"flex justify-center overflow-auto rounded-lg border"},[n("CisToCmmcMappingDisplay",{staticClass:"w-full",attrs:{value:e.selectedRow}})],1)]},proxy:!0}],null,!1,20284958)}):e._e(),e._v(" "),n("div",{staticClass:"p-4"},[n("div",{staticClass:"md:inline-flex"},[n("BaseButton",{staticClass:"w-full space-x-2 md:w-auto",on:{click:e.encode}},[n("DocumentDownload",{staticClass:"h-auto w-4 xl:w-5"}),e._v(" "),n("span",[e._v("Download")])],1)],1)])],1)],1):n("LoadingSpinner")],1)}),[],!1,null,null,null);t.default=component.exports;installComponents(component,{BaseTypography:n(476).default,BaseButton:n(310).default,BaseSimpleCard:n(492).default})},476:function(e,t,n){"use strict";n.r(t);var r=n(20),o=Object(r.defineComponent)({inheritAttrs:!1});o.props={variant:{key:"variant",required:!0,type:null},component:{key:"component",required:!1,type:null,default:"span"}},o.setup=function(e,t){var n="antialiased",o={h1:"".concat(n," font-display text-4xl font-semibold leading-snug tracking-wide sm:text-5xl md:text-6xl"),h2:"".concat(n," font-display text-3xl font-semibold leading-9 tracking-normal sm:text-5xl sm:leading-10"),h3:"".concat(n," font-display text-3xl font-medium leading-8 tracking-normal sm:text-4xl sm:leading-10"),h4:"".concat(n," font-display text-2xl font-medium leading-8 tracking-wide sm:text-3xl sm:leading-9"),h5:"".concat(n," font-display text-2xl font-medium leading-6 tracking-normal"),h6:"".concat(n," font-display text-xl font-semibold leading-7 tracking-wide"),p1:"".concat(n," font-body text-base font-normal leading-7 tracking-wide"),p2:"".concat(n," font-body text-sm font-normal leading-6 tracking-normal"),subtitle1:"".concat(n," font-body text-lg font-normal leading-6 tracking-wide sm:text-xl"),subtitle2:"".concat(n," font-body text-xs font-medium leading-5 tracking-wide"),subtitle3:"".concat(n," font-display text-lg font-medium leading-5 tracking-wide"),overline:"".concat(n," font-display text-xs font-medium tracking-widest"),button:"".concat(n," font-body text-xs font-medium tracking-wider sm:text-sm xl:tracking-wide"),data:"".concat(n," font-mono text-xs font-normal tracking-wider sm:text-sm xl:tracking-wide")},l=e;return{displayTypeClass:Object(r.computed)((function(){return o[l.variant]}))}};var l=o,c=n(55),component=Object(c.a)(l,(function(){var e=this,t=e.$createElement;return(e._self._c||t)(e.component,e._g(e._b({tag:"Component",class:e.displayTypeClass},"Component",e.$attrs,!1),e.$listeners),[e._t("default")],2)}),[],!1,null,null,null);t.default=component.exports},490:function(e,t,n){"use strict";n(24),n(159),n(121);var r=n(20),o={props:{definition:{key:"definition",required:!0,type:null}},setup:function(e,t){var n=e,o=Object(r.computed)((function(){return n.definition.icon[0]})),l=Object(r.computed)((function(){return n.definition.icon[1]}));return{svgPathData:Object(r.computed)((function(){return n.definition.icon[4].toString()})),viewBox:Object(r.computed)((function(){return"0 0 ".concat(o.value," ").concat(l.value)}))}}},l=o,c=n(55),component=Object(c.a)(l,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("svg",{attrs:{xmlns:"http://www.w3.org/2000/svg",viewBox:e.viewBox,"aria-hidden":"true",focusable:"false",role:"img"}},[n("path",{attrs:{fill:"currentColor",d:e.svgPathData}})])}),[],!1,null,null,null);t.a=component.exports},493:function(e,t,n){"use strict";var r=n(490),o=n(497),l={setup:function(e,t){return{definition:o.definition}}};l.components=Object.assign({FontAwesomeSvg:r.a},l.components);var c=l,d=n(55),component=Object(d.a)(c,(function(){var e=this,t=e.$createElement;return(e._self._c||t)("FontAwesomeSvg",{staticClass:"h-5 w-5 animate-spin",attrs:{definition:e.definition}})}),[],!1,null,null,null);t.a=component.exports},501:function(e,t,n){"use strict";n.r(t);var r=n(20),o=Object(r.defineComponent)({inheritAttrs:!1});o.props={action:{key:"action",required:!1,type:null,default:"primary"},shape:{key:"shape",required:!1,type:null,default:"round"},color:{key:"color",required:!1,type:null,default:"base"},size:{key:"size",required:!1,type:null,default:"base"},to:{key:"to",required:!1,type:null,default:void 0}},o.setup=function(e,t){var n="inline-flex flex-shrink-0 justify-center items-center antialiased transform transition duration-200 hover:-translate-y-px hover:shadow-md focus:outline-none focus:ring disabled:cursor-not-allowed disabled:opacity-50",o={primary:{base:"".concat(n," text-white bg-blue-500 hover:bg-blue-600 focus:bg-blue-600 focus:ring-blue-200"),teal:"".concat(n," text-white bg-teal-500 hover:bg-teal-600 focus:bg-teal-600 focus:ring-teal-200"),light:"".concat(n," text-gray-400 border border-gray-400 hover:text-indigo-500 hover:shadow-none hover:border-indigo-500 focus:text-indigo-500 focus:shadow-none focus:ring-indigo-200 focus:border-indigo-500"),info:"".concat(n," text-white bg-prime-indigo hover:bg-indigo-500 focus:bg-indigo-500 focus:ring-indigo-200"),danger:"".concat(n," text-white bg-red-500 hover:bg-red-600 focus:bg-red-600 focus:ring-red-200")},secondary:{base:"".concat(n," border bg-white text-prime-navy hover:text-prime-darkest hover:shadow-inner focus:shadow-inner focus:text-prime-darkest focus:ring-gray-200"),teal:"".concat(n," bg-white text-teal-500 border-teal-500 hover:bg-teal-200 hover:text-teal-600 hover:border-transparent focus:bg-teal-200 focus:text-teal-600 focus:border-transparent focus:ring-teal-200"),light:"".concat(n," text-white hover:bg-gray-50 hover:text-gray-500 focus:bg-gray-50 focus:text-gray-500 focus:ring-gray-200"),info:"".concat(n," bg-white text-indigo-500 border-indigo-500 hover:bg-indigo-200 hover:text-indigo-600 hover:border-transparent focus:bg-indigo-200 focus:text-indigo-600 focus:border-transparent focus:ring-indigo-200"),danger:"".concat(n," bg-white text-red-500 border-red-500 hover:bg-red-200 hover:text-red-600 hover:border-transparent focus:bg-red-200 focus:text-red-600 focus:border-transparent focus:ring-red-200")}},l=e;return{SIZE_CLASSES:{xs:"p-0.5",small:"p-1",base:"p-2",large:"p-3"},SHAPE_CLASSES:{round:"rounded-full",square:"rounded-md"},COLOR_CLASSES:o,type:Object(r.computed)((function(){return l.to?"nuxt-link":"button"}))}};var l=o,c=n(55),component=Object(c.a)(l,(function(){var e=this,t=e.$createElement;return(e._self._c||t)(e.type,e._g(e._b({tag:"Component",class:[e.SIZE_CLASSES[e.size],e.SHAPE_CLASSES[e.shape],e.COLOR_CLASSES[e.action][e.color]],attrs:{to:e.to}},"Component",e.$attrs,!1),e.$listeners),[e._t("default")],2)}),[],!1,null,null,null);t.default=component.exports},524:function(e,t,n){"use strict";var r=n(20),o=Object(r.defineComponent)({inheritAttrs:!1});o.props={activeClass:{key:"activeClass",required:!0,type:String},enterLeaveToClass:{key:"enterLeaveToClass",required:!0,type:String}},o.setup=function(e,t){return{}};var l=o,c=n(55),component=Object(c.a)(l,(function(){var e=this,t=e.$createElement;return(e._self._c||t)("Transition",e._g(e._b({attrs:{"enter-active-class":e.activeClass,"leave-active-class":e.activeClass,"enter-from-class":e.enterLeaveToClass,"enter-class":e.enterLeaveToClass,"leave-to-class":e.enterLeaveToClass}},"Transition",e.$attrs,!1),e.$listeners),[e._t("default")],2)}),[],!1,null,null,null);t.a=component.exports},776:function(e,t,n){"use strict";var r=n(525),o=n.n(r),l=n(524),c={setup:function(e,t){return{emit:t.emit}}};c.components=Object.assign({SimpleTransition:l.a,XSvg:o.a},c.components);var d=c,m=n(55),component=Object(m.a)(d,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("SimpleTransition",{attrs:{"active-class":"transition duration-300 ease-in transform","enter-leave-to-class":"scale-110 opacity-0"}},[n("section",{staticClass:"fixed inset-0 z-50 transform overflow-hidden"},[n("div",{staticClass:"flex min-h-screen items-end justify-center px-4 pt-4 pb-20 text-center sm:block sm:p-0"},[n("div",{staticClass:"fixed inset-0 transition-opacity"},[n("button",{staticClass:"inset-0 h-full w-full cursor-default bg-gray-500 opacity-50",attrs:{type:"button",tabindex:"-1"},on:{click:function(t){return e.emit("close")}}})]),e._v(" "),n("span",{staticClass:"hidden sm:inline-block sm:h-screen sm:align-middle"}),e._v("\n      ​\n\n      "),n("div",{staticClass:"inline-block transform overflow-y-scroll rounded-lg bg-white p-2 text-left align-bottom shadow-xl transition-all sm:my-2 sm:w-full sm:max-w-xl sm:p-2 sm:align-middle lg:max-w-5xl",attrs:{role:"dialog","aria-modal":"true","aria-labelledby":"modal-headline"}},[n("div",{staticClass:"flex flex-1 flex-col justify-center",style:{"max-height":"95vh"}},[n("div",{staticClass:"flex justify-end"},[n("BaseIcon",{attrs:{type:"button",action:"secondary",color:"danger",size:"small"},on:{click:function(t){return e.emit("close")}}},[n("XSvg",{staticClass:"h-5 w-5"})],1)],1),e._v(" "),n("div",{staticClass:"flex h-full min-h-0 min-w-0 justify-center"},[e._t("body")],2)])])])])])}),[],!1,null,null,null);t.a=component.exports;installComponents(component,{BaseIcon:n(501).default})},870:function(e,t,n){"use strict";t.a=[{number:1,description:"Inventory and Control of Hardware Assets"},{number:2,description:"Inventory and Control of Software Assets"},{number:3,description:"Continuous Vulnerability Management"},{number:4,description:"Controlled Use of Administrative Privileges"},{number:5,description:"Secure Configuration for HW & SW on Mobile Devices, Laptops, Workstations and Servers"},{number:6,description:"Maintenance, Monitoring and Analysis of Audit Logs"},{number:7,description:"Email and Web Browser Protections"},{number:8,description:"Malware Defenses"},{number:9,description:"Limitation and Control of Network Ports, Protocols, and Services"},{number:10,description:"Data Recovery Capabilities"},{number:11,description:"Secure Configuration for Network Devices, such as Firewalls, Routers and Switches"},{number:12,description:"Boundary Defense"},{number:13,description:"Data Protection"},{number:14,description:"Controlled Access Based on the Need to Know"},{number:15,description:"Wireless Access Control"},{number:16,description:"Account Monitoring and Control"},{number:17,description:"Implement a Security Awareness and Training Program"},{number:18,description:"Application Software Security"},{number:19,description:"Incident Response and Management"},{number:20,description:"Penetration Tests and Red Team Exercises"}]},902:function(e,t,n){"use strict";var r=n(104),o=(n(121),n(73),{props:{level:{key:"level",required:!1,type:null}},setup:function(e,t){return{}}}),l=o,c=n(55),d=Object(c.a)(l,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return e.level?n("div",{staticClass:"flex items-center justify-center"},[e.level.category?[n("svg",{staticClass:"h-3 w-3 fill-current",class:{"text-green-400":"ADVANCED"===e.level.category,"text-yellow-300":"INTERMEDIATE"===e.level.category,"text-red-400":"BASIC"===e.level.category},attrs:{viewBox:"-4 -4 8 8"}},[n("circle",{attrs:{stroke:"1",r:"4"}})])]:[n("span",[e._v("-")])]],2):e._e()}),[],!1,null,null,null).exports,m=n(20),f=n(870),v={props:{value:{key:"value",required:!0,type:null}},setup:function(e,t){var n=[2,3,4,6,10,11,17,19].concat([1,5,8,12,13,14,15,16]),o=[7,9,18].concat(Object(r.a)(n)),l=[20].concat(Object(r.a)(o)),c=e;return{headers:Object(m.computed)((function(){return[{text:"Description",srOnly:!0},{text:"Number",srOnly:!0,borderRight:!0},{text:"L1",textCenter:!0},{text:"L2",textCenter:!0},{text:"L3",textCenter:!0},{text:"L4/L5",textCenter:!0}]})),levels:Object(m.computed)((function(){return["L1","L2","L3","L4"]})),rows:Object(m.computed)((function(){return l.map((function(e){return{cis:f.a[e-1],cmmc:c.value.mapping["_".concat(e)]}}))}))}}};v.components=Object.assign({CmmcColoredBall:d},v.components);var y=v,x=Object(c.a)(y,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("table",{staticClass:"w-full leading-4"},[n("colgroup",{attrs:{span:"2"}}),e._v(" "),n("colgroup",{attrs:{span:"4"}}),e._v(" "),n("thead",[e._m(0),e._v(" "),n("tr",e._l(e.headers,(function(header){return n("th",{key:header.text,staticClass:"border-b border-gray-300 bg-gray-200 px-4 py-2 text-sm font-medium tracking-wider text-gray-700",class:{"border-r":header.borderRight},attrs:{scope:"col"}},[n("span",{class:{"sr-only":header.srOnly,"text-left":!header.textCenter,"text-center":header.textCenter}},[e._v("\n          "+e._s(header.text)+"\n        ")])])})),0)]),e._v(" "),n("tbody",e._l(e.rows,(function(t,i){return n("tr",{key:t.cis?t.cis.description:i,class:{"bg-gray-50":i%2==1}},[t.cis?n("th",{staticClass:"px-4 py-2 text-left text-sm font-normal text-gray-900",class:{"bg-gray-50":i%2==1},attrs:{scope:"row"}},[e._v("\n        "+e._s(t.cis.description)+"\n      ")]):e._e(),e._v(" "),t.cis?n("td",{staticClass:"border-r border-gray-200 px-4 py-2 text-right text-sm font-normal text-gray-900",class:{"bg-gray-50":i%2==1}},[e._v("\n        #"+e._s(t.cis.number)+"\n      ")]):e._e(),e._v(" "),e._l(e.levels,(function(r){return n("td",{key:r},[t.cmmc&&t.cmmc[r]?n("div",[n("CmmcColoredBall",{attrs:{level:t.cmmc[r]}})],1):e._e()])}))],2)})),0),e._v(" "),n("tfoot",[n("tr",[e._m(1),e._v(" "),e._l(e.value.totals,(function(footer,i){return n("td",{key:i,staticClass:"border-t border-gray-300 bg-gray-200 px-4 py-2 text-sm font-medium tracking-wider text-gray-700"},[n("span",{staticClass:"text-center"},[e._v("\n          "+e._s(footer.numAdvanced)+"/"+e._s(footer.numTotal)+"\n        ")])])}))],2)])])}),[function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("tr",[n("th",{staticClass:"border-r border-gray-300 bg-gray-200 px-4 py-2 text-left text-sm font-medium uppercase tracking-wider text-gray-600",attrs:{scope:"colgroup",colspan:"2"}},[e._v("\n        CIS Controls\n      ")]),e._v(" "),n("th",{staticClass:"bg-gray-200 px-4 py-2 text-left text-sm font-medium uppercase tracking-wider text-gray-600",attrs:{scope:"colgroup",colspan:"4"}},[e._v("\n        CMMC Maturity Levels\n      ")])])},function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("th",{staticClass:"border-t border-r border-gray-300 bg-gray-200",attrs:{scope:"row",colspan:"2"}},[n("span",{staticClass:"sr-only"},[e._v("Counts")])])}],!1,null,null,null);t.a=x.exports}}]);