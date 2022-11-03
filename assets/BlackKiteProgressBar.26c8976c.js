import{c as u,aQ as R,n as l,aj as T}from"./index.81c86bc2.js";import{T as j}from"./ToolTip.8de4e4ec.js";import{G as H}from"./GradeLetterDisplay.a4c32af6.js";const h={};h.props={value:{key:"value",required:!0,type:null}};h.setup=(e,s)=>{const t=e;return{imageUrl:u(()=>{const a=new URLSearchParams(t.value);return`${R}/generated-images/black-kite/summary-compliance-entry?${a}`})}};var G=function(){var e=this,s=e.$createElement,t=e._self._c||s;return t("img",{staticClass:"h-64 w-64",attrs:{src:e.imageUrl,alt:e.value.StandardCode}})},K=[];const b={};var P=l(h,G,K,!1,N,null,null,null);function N(e){for(let s in b)this[s]=b[s]}const Se=function(){return P.exports}(),g={language:"en-US",currency:"USD"};function i(e){return new Intl.NumberFormat(g.language,{style:"currency",currency:g.currency}).format(e)}function v(e){return new Intl.NumberFormat(g.language,{style:"percent"}).format(e)}const x={};x.props={value:{key:"value",required:!0,type:Number},title:{key:"title",required:!0,type:null}};x.setup=(e,s)=>{const t={Minimum:{background:"bg-green-50 border-green-100",text:"text-green-700"},Average:{background:"bg-blue-50 border-blue-100",text:"text-blue-700"},Maximum:{background:"bg-red-50 border-red-100",text:"text-red-700"}},n=e,a=u(()=>t[n.title]);return{toCurrency:i,colors:a}};var O=function(){var e=this,s=e.$createElement,t=e._self._c||s;return t("div",{staticClass:"flex items-center justify-between lg:flex-col"},[t("BaseTypography",{staticClass:"text-gray-500",attrs:{variant:"p1"}},[e._v(" "+e._s(e.title)+": ")]),t("span",{staticClass:"flex items-center rounded-md border px-2 py-1",class:e.colors.background},[t("BaseTypography",{class:e.colors.text,attrs:{variant:"p2"}},[e._v(" "+e._s(e.toCurrency(e.value))+" ")])],1)],1)},U=[];const C={};var V=l(x,O,U,!1,z,null,null,null);function z(e){for(let s in C)this[s]=C[s]}const W=function(){return V.exports}(),k={};k.props={value:{key:"value",required:!0,type:null}};k.setup=(e,s)=>{const t=e,n=675,a=25,o=5,y=12.5,r=12,c=10,m=0,A=0;function q(){const D=t.value.Max-t.value.Min,F=t.value.Avg/D;return 647.23*F+12.5}return{width:n,height:a,r:o,min:y,strokeWidth:r,strokeMiterLimit:c,minX:m,minY:A,getPosition:q}};var I=function(){var e=this,s=e.$createElement,t=e._self._c||s;return t("svg",{attrs:{viewBox:`${e.minX} ${e.minY} ${e.width} ${e.height}`}},[t("g",[t("path",{attrs:{d:"M12.5 12.5 H659.73","stroke-width":e.strokeWidth,"stroke-linecap":"round","stroke-miterlimit":e.strokeMiterLimit,stroke:"#E5E7EB",x1:e.min,y1:e.min,x2:"659.73",y2:e.min}})]),t("g",[t("circle",{staticClass:"fill-current text-green-500",attrs:{cx:e.min,cy:e.min,r:e.r}})]),t("g",[t("circle",{staticClass:"fill-current text-blue-500",attrs:{cx:e.getPosition(),cy:e.min,r:e.r}})]),t("g",[t("circle",{staticClass:"fill-current text-red-500",attrs:{cx:"659.73",cy:e.min,r:e.r}})])])},X=[];const L={};var Y=l(k,I,X,!1,Q,null,null,null);function Q(e){for(let s in L)this[s]=L[s]}const Z=function(){return Y.exports}(),p={};p.props={value:{key:"value",required:!0,type:null}};p.setup=(e,s)=>({});p.components=Object.assign({AnnualLossExposureStatsDisplay:W,BlackKiteLossExposureSvg:Z},p.components);var J=function(){var e=this,s=e.$createElement,t=e._self._c||s;return t("div",{staticClass:"grid gap-y-4 lg:grid-cols-3"},[t("div",{staticClass:"flex flex-col lg:col-span-3"},[t("BaseTypography",{attrs:{variant:"subtitle3"}},[e._v("Annual Loss Exposure")]),t("BaseTypography",{staticClass:"text-gray-500",attrs:{variant:"p2"}},[e._v(" The forecasted annualized loss based on the given parameters below. ")])],1),t("AnnualLossExposureStatsDisplay",{attrs:{value:e.value.Min,title:"Minimum"}}),t("AnnualLossExposureStatsDisplay",{attrs:{value:e.value.Avg,title:"Average"}}),t("AnnualLossExposureStatsDisplay",{attrs:{value:e.value.Max,title:"Maximum"}}),t("div",{staticClass:"hidden lg:col-span-3 lg:grid"},[t("BlackKiteLossExposureSvg",{attrs:{value:e.value}})],1)],1)},ee=[];const S={};var te=l(p,J,ee,!1,se,null,null,null);function se(e){for(let s in S)this[s]=S[s]}const re=function(){return te.exports}(),_=T({name:"BlackKiteHelperValueWrapper"});_.props={depth:{key:"depth",required:!1,type:Number,default:0},title:{key:"title",required:!0,type:String},section:{key:"section",required:!0,type:null}};_.setup=(e,s)=>{const t=e,n=u(()=>{const r=[];for(const[c,m]of Object.entries(t.section))c!=="Value"&&r.push({key:c,value:m});return r});function a(r){var c;return(c=r.match(/[A-Z][a-z]+/g))==null?void 0:c.join(" ")}function o(r,c){switch(c){case"Loss Event Frequency":return r.toLocaleString();case"ThreatEventFrequency":return r.toLocaleString();case"ContactFrequency":return r.toLocaleString();case"ProbabilityOfAction":return v(r);case"Vulnerability":return v(r);case"ResistanceStrength":return v(r);case"ThreatCapability":return v(r);case"Loss Magnitude":return i(r);case"PrimaryLoss":return i(r);case"SecondaryLoss":return i(r);case"DetectionAndEscalation":return i(r);case"Notification":return i(r);case"PostDataBreachResponse":return i(r);case"LostBusiness":return i(r)}}function y(r){switch(r){case"Loss Event Frequency":return"How many times over the next year is the loss event likely to occur?";case"Loss Magnitude":return"How much loss is your organization likely to experience as a direct result of a loss event?";case"ThreatEventFrequency":return"How many times will the organization face a threat action?";case"ContactFrequency":return"How many times over the next year is the threat actor/agent likely to reach the organization?";case"ProbabilityOfAction":return"What percentage of threat/agent contacts with the asset are likely to result in threat events?";case"Vulnerability":return"What percentage of the threat events are likely to result in loss events?";case"ResistanceStrength":return"The strength of a control as compared to a baseline unit of force.";case"ThreatCapability":return"How capable is the threat community of successfully carrying out the threat event?";case"PrimaryLoss":return"How much money is the company likely to lose from each loss event?";case"SecondaryLoss":return"How much loss as a result of secondary stakeholders?";case"DetectionAndEscalation":return"How much loss as a result of secondary stakeholders?";case"Notification":return"How much loss as a result of secondary stakeholders?";case"PostDataBreachResponse":return"How much loss as a result of secondary stakeholders?";case"LostBusiness":return"How much loss as a result of secondary stakeholders?"}}return{children:n,format:a,formatNumber:o,getDescription:y}};_.components=Object.assign({ToolTip:j},_.components);var ae=function(){var e=this,s=e.$createElement,t=e._self._c||s;return t("section",[e.depth===0?t("div",{staticClass:"flex flex-col p-4",class:e.depth===0?"border-b":""},[t("div",{staticClass:"flex flex-row items-center justify-between"},[t("BaseTypography",{attrs:{variant:"subtitle3"}},[e._v(" "+e._s(e.format(e.title))+" ")]),t("span",{staticClass:"flex items-center rounded-md px-1",class:e.depth>=1?"bg-none":"bg-gray-100"},[t("BaseTypography",{staticClass:"text-gray-600",attrs:{variant:"p2"}},[e._v(" "+e._s(e.formatNumber(e.section.Value,e.title))+" ")])],1)],1),t("BaseTypography",{staticClass:"text-gray-500",attrs:{variant:"p2"}},[e._v(" "+e._s(e.getDescription(e.title))+" ")])],1):t("div",{staticClass:"flex flex-col font-display leading-7 tracking-wide antialiased"},[t("div",{staticClass:"flex items-center justify-between p-2"},[t("span",{class:{"text-base font-medium text-gray-700":e.depth===1,"font-body text-sm text-gray-500":e.depth===2}},[e._v(" "+e._s(e.format(e.title))+": ")]),t("div",{staticClass:"flex items-center space-x-2"},[t("span",{staticClass:"text-sm text-gray-700",class:e.depth===1?"font-semibold":""},[e._v(" "+e._s(e.formatNumber(e.section.Value,e.title))+" ")]),t("ToolTip",[e._v(" "+e._s(e.getDescription(e.title))+" ")])],1)])]),e._l(e.children,function(n){var a=n.key,o=n.value;return t("div",{key:a},[t("div",{staticClass:"ml-2"},[t("BlackKiteHelperValueWrapper",{attrs:{title:a,section:o,depth:e.depth+1}})],1)])})],2)},ne=[];const w={};var oe=l(_,ae,ne,!1,ce,null,null,null);function ce(e){for(let s in w)this[s]=w[s]}const ie=function(){return oe.exports}(),d={};d.props={risk:{key:"risk",required:!0,type:null}};d.setup=(e,s)=>({});d.components=Object.assign({AnnualLossExposureDisplay:re,BlackKiteHelperSection:ie},d.components);var le=function(){var e=this,s=e.$createElement,t=e._self._c||s;return t("section",{staticClass:"space-y-4 p-4"},[t("AnnualLossExposureDisplay",{attrs:{value:e.risk.AnnualLossExposure}}),t("div",{staticClass:"grid grid-cols-1 gap-4 lg:grid-cols-2"},[t("div",{staticClass:"flex flex-col rounded-xl border"},[t("BlackKiteHelperSection",{attrs:{section:e.risk.AnnualLossExposure.LossEventFrequency,title:"Loss Event Frequency"}})],1),t("div",{staticClass:"rounded-xl border"},[t("BlackKiteHelperSection",{attrs:{section:e.risk.AnnualLossExposure.LossMagnitude,title:"Loss Magnitude"}})],1)])],1)},ue=[];const B={};var pe=l(d,le,ue,!1,_e,null,null,null);function _e(e){for(let s in B)this[s]=B[s]}const we=function(){return pe.exports}(),f={};f.setup=(e,s)=>({grades:[{letterGrade:"A",range:"91-100"},{letterGrade:"B",range:"81-90"},{letterGrade:"C",range:"71-80"},{letterGrade:"D",range:"61-70"},{letterGrade:"F",range:"0-60"}]});f.components=Object.assign({GradeLetterDisplay:H},f.components);var de=function(){var e=this,s=e.$createElement,t=e._self._c||s;return t("div",{staticClass:"mx-auto grid gap-3"},e._l(e.grades,function(n){var a=n.letterGrade,o=n.range;return t("div",{key:a,staticClass:"flex items-center space-x-2"},[t("GradeLetterDisplay",{attrs:{grade:a}}),t("BaseTypography",{staticClass:"text-gray-600",attrs:{variant:"p1"}},[e._v(" "+e._s(o)+" ")])],1)}),0)},ve=[];const E={};var fe=l(f,de,ve,!1,ye,null,null,null);function ye(e){for(let s in E)this[s]=E[s]}const Be=function(){return fe.exports}(),$={};$.props={score:{key:"score",required:!0,type:Number},maxScore:{key:"maxScore",required:!0,type:Number}};$.setup=(e,s)=>{const t=e,n=u(()=>200-t.score/t.maxScore*200),a=u(()=>`gradient-${Math.random()}`),o=u(()=>t.score>=91?"#10b981":t.score>=81?"#3b83f6":t.score>=71?"#fde68a":t.score>=61?"#ed8936":"#ef4444");return{fill:n,gradientId:a,displayColor:o}};var me=function(){var e=this,s=e.$createElement,t=e._self._c||s;return t("svg",{attrs:{viewBox:"0 0 90 80",preserveAspectRatio:"none"}},[t("defs",[t("linearGradient",{attrs:{id:`${e.gradientId}`,x1:"15%",y1:"100%",x2:"80%",y2:"100%"}},[t("stop",{attrs:{offset:"0%","stop-color":`${e.displayColor}`}}),t("stop",{attrs:{offset:"100%","stop-color":`${e.displayColor}`}})],1)],1),t("path",{staticClass:"stroke-current text-gray-200 shadow-inner",attrs:{d:"M20,75 a40,40,0,1,1,50,0",fill:"none","stroke-linecap":"round","stroke-width":"3"}}),t("path",{staticClass:"filling transition duration-300",style:`--fill: ${e.fill}`,attrs:{d:"M20,75 a40,40,0,1,1,50,0",fill:"none",stroke:`url(#${e.gradientId})`,"stroke-dasharray":"200","stroke-dashoffset":"200","stroke-linecap":"round","stroke-width":"3"}})])},ge=[];const M={};var he=l($,me,ge,!1,xe,"03885cf2",null,null);function xe(e){for(let s in M)this[s]=M[s]}const Ee=function(){return he.exports}();export{we as B,Se as a,Ee as b,Be as c};