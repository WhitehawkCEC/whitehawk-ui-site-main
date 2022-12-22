import{d as u,aQ as F,n as c,aY as H,ax as G}from"./index.0c8230bc.js";import{t as l,a as y}from"./index.ebbce841.js";import{T as A}from"./ToolTip.166026bd.js";import{G as T}from"./GradeLetterDisplay.22ff3bd0.js";const h={};h.props={value:{key:"value",required:!0,type:null}};h.setup=(e,s)=>{const t=e;return{imageUrl:u(()=>{const n=new URLSearchParams;for(const[o,p]of Object.entries(t.value))n.append(o,p);return`${F}/generated-images/black-kite/summary-compliance-entry?${n}`})}};var K=function(){var e=this,s=e.$createElement,t=e._self._c||s;return t("img",{staticClass:"h-auto w-60 sm:w-64",attrs:{src:e.imageUrl,alt:e.value.StandardCode}})},P=[];const b={};var O=c(h,K,P,!1,N,null,null,null);function N(e){for(let s in b)this[s]=b[s]}const Te=function(){return O.exports}(),x={};x.props={value:{key:"value",required:!0,type:Number},title:{key:"title",required:!0,type:null}};x.setup=(e,s)=>{const t={Minimum:{background:"bg-green-50 border-green-100",text:"text-green-700"},Average:{background:"bg-blue-50 border-blue-100",text:"text-blue-700"},Maximum:{background:"bg-red-50 border-red-100",text:"text-red-700"}},a=e,n=u(()=>t[a.title]);return{toCurrency:l,colors:n}};var V=function(){var e=this,s=e.$createElement,t=e._self._c||s;return t("div",{staticClass:"flex items-center justify-between lg:flex-col"},[t("BaseTypography",{staticClass:"text-gray-500",attrs:{variant:"p1"}},[e._v(" "+e._s(e.title)+": ")]),t("span",{staticClass:"flex items-center rounded-md border px-2 py-1",class:e.colors.background},[t("BaseTypography",{class:e.colors.text,attrs:{variant:"p2"}},[e._v(" "+e._s(e.toCurrency(e.value))+" ")])],1)],1)},z=[];const C={};var W=c(x,V,z,!1,U,null,null,null);function U(e){for(let s in C)this[s]=C[s]}const I=function(){return W.exports}(),k={};k.props={value:{key:"value",required:!0,type:null}};k.setup=(e,s)=>{const t=e,a=675,n=25,o=5,p=12.5,r=12,i=10,g=0,R=0;function q(){const D=t.value.Max-t.value.Min;return 647.23*(t.value.Avg/D)+12.5}return{width:a,height:n,r:o,min:p,strokeWidth:r,strokeMiterLimit:i,minX:g,minY:R,getPosition:q}};var Y=function(){var e=this,s=e.$createElement,t=e._self._c||s;return t("svg",{attrs:{viewBox:`${e.minX} ${e.minY} ${e.width} ${e.height}`}},[t("g",[t("path",{attrs:{d:"M12.5 12.5 H659.73","stroke-width":e.strokeWidth,"stroke-linecap":"round","stroke-miterlimit":e.strokeMiterLimit,stroke:"#E5E7EB",x1:e.min,y1:e.min,x2:"659.73",y2:e.min}})]),t("g",[t("circle",{staticClass:"fill-current text-green-500",attrs:{cx:e.min,cy:e.min,r:e.r}})]),t("g",[t("circle",{staticClass:"fill-current text-blue-500",attrs:{cx:e.getPosition(),cy:e.min,r:e.r}})]),t("g",[t("circle",{staticClass:"fill-current text-red-500",attrs:{cx:"659.73",cy:e.min,r:e.r}})])])},X=[];const L={};var Q=c(k,Y,X,!1,Z,null,null,null);function Z(e){for(let s in L)this[s]=L[s]}const J=function(){return Q.exports}(),_={};_.props={value:{key:"value",required:!0,type:null}};_.setup=(e,s)=>({});_.components=Object.assign({AnnualLossExposureStatsDisplay:I,BlackKiteLossExposureSvg:J},_.components);var ee=function(){var e=this,s=e.$createElement,t=e._self._c||s;return t("div",{staticClass:"grid gap-y-4 lg:grid-cols-3"},[t("div",{staticClass:"flex flex-col lg:col-span-3"},[t("BaseTypography",{attrs:{variant:"subtitle3"}},[e._v("Annual Loss Exposure")]),t("BaseTypography",{staticClass:"text-gray-500",attrs:{variant:"p2"}},[e._v(" The forecasted annualized loss based on the given parameters below. ")])],1),t("AnnualLossExposureStatsDisplay",{attrs:{value:e.value.Min,title:"Minimum"}}),t("AnnualLossExposureStatsDisplay",{attrs:{value:e.value.Avg,title:"Average"}}),t("AnnualLossExposureStatsDisplay",{attrs:{value:e.value.Max,title:"Maximum"}}),t("div",{staticClass:"hidden lg:col-span-3 lg:grid"},[t("BlackKiteLossExposureSvg",{attrs:{value:e.value}})],1)],1)},te=[];const w={};var se=c(_,ee,te,!1,re,null,null,null);function re(e){for(let s in w)this[s]=w[s]}const ae=function(){return se.exports}(),d=H({name:"BlackKiteHelperValueWrapper"});d.props={depth:{key:"depth",required:!1,type:Number,default:0},title:{key:"title",required:!0,type:String},section:{key:"section",required:!0,type:null}};d.setup=(e,s)=>{const t=e,a=u(()=>{const r=[];for(const[i,g]of Object.entries(t.section))i!=="Value"&&r.push({key:i,value:g});return r});function n(r){var i;return(i=r.match(/[A-Z][a-z]+/g))==null?void 0:i.join(" ")}function o(r,i){switch(i){case"Loss Event Frequency":return r.toLocaleString();case"ThreatEventFrequency":return r.toLocaleString();case"ContactFrequency":return r.toLocaleString();case"ProbabilityOfAction":return y(r);case"Vulnerability":return y(r);case"ResistanceStrength":return y(r);case"ThreatCapability":return y(r);case"Loss Magnitude":return l(r);case"PrimaryLoss":return l(r);case"SecondaryLoss":return l(r);case"DetectionAndEscalation":return l(r);case"Notification":return l(r);case"PostDataBreachResponse":return l(r);case"LostBusiness":return l(r)}}function p(r){switch(r){case"Loss Event Frequency":return"How many times over the next year is the loss event likely to occur?";case"Loss Magnitude":return"How much loss is your organization likely to experience as a direct result of a loss event?";case"ThreatEventFrequency":return"How many times will the organization face a threat action?";case"ContactFrequency":return"How many times over the next year is the threat actor/agent likely to reach the organization?";case"ProbabilityOfAction":return"What percentage of threat/agent contacts with the asset are likely to result in threat events?";case"Vulnerability":return"What percentage of the threat events are likely to result in loss events?";case"ResistanceStrength":return"The strength of a control as compared to a baseline unit of force.";case"ThreatCapability":return"How capable is the threat community of successfully carrying out the threat event?";case"PrimaryLoss":return"How much money is the company likely to lose from each loss event?";case"SecondaryLoss":return"How much loss as a result of secondary stakeholders?";case"DetectionAndEscalation":return"How much loss as a result of secondary stakeholders?";case"Notification":return"How much loss as a result of secondary stakeholders?";case"PostDataBreachResponse":return"How much loss as a result of secondary stakeholders?";case"LostBusiness":return"How much loss as a result of secondary stakeholders?"}}return{children:a,format:n,formatNumber:o,getDescription:p}};d.components=Object.assign({ToolTip:A},d.components);var ne=function(){var e=this,s=e.$createElement,t=e._self._c||s;return t("div",[e.depth===0?t("div",{staticClass:"flex flex-col p-4",class:e.depth===0?"border-b":""},[t("div",{staticClass:"flex flex-row items-center justify-between"},[t("BaseTypography",{attrs:{variant:"subtitle3"}},[e._v(" "+e._s(e.format(e.title))+" ")]),t("span",{staticClass:"flex items-center rounded-md px-1",class:e.depth>=1?"bg-none":"bg-gray-100"},[t("BaseTypography",{staticClass:"text-gray-600",attrs:{variant:"p2"}},[e._v(" "+e._s(e.formatNumber(e.section.Value,e.title))+" ")])],1)],1),t("BaseTypography",{staticClass:"text-gray-500",attrs:{variant:"p2"}},[e._v(" "+e._s(e.getDescription(e.title))+" ")])],1):t("div",{staticClass:"flex flex-col font-display leading-7 tracking-wide antialiased"},[t("div",{staticClass:"flex items-center justify-between p-2"},[t("span",{class:{"text-base font-medium text-gray-700":e.depth===1,"font-body text-sm text-gray-500":e.depth===2}},[e._v(" "+e._s(e.format(e.title))+": ")]),t("div",{staticClass:"flex items-center space-x-2"},[t("span",{staticClass:"text-sm text-gray-700",class:e.depth===1?"font-semibold":""},[e._v(" "+e._s(e.formatNumber(e.section.Value,e.title))+" ")]),t("ToolTip",[e._v(" "+e._s(e.getDescription(e.title))+" ")])],1)])]),e._l(e.children,function(a){var n=a.key,o=a.value;return t("div",{key:n},[t("div",{staticClass:"ml-2"},[t("BlackKiteHelperValueWrapper",{attrs:{title:n,section:o,depth:e.depth+1}})],1)])})],2)},oe=[];const B={};var ie=c(d,ne,oe,!1,ce,null,null,null);function ce(e){for(let s in B)this[s]=B[s]}const le=function(){return ie.exports}(),v={};v.props={risk:{key:"risk",required:!0,type:null}};v.setup=(e,s)=>({});v.components=Object.assign({AnnualLossExposureDisplay:ae,BlackKiteHelperSection:le},v.components);var ue=function(){var e=this,s=e.$createElement,t=e._self._c||s;return t("section",{staticClass:"space-y-4"},[t("AnnualLossExposureDisplay",{attrs:{value:e.risk.AnnualLossExposure}}),t("div",{staticClass:"grid gap-4 xl:grid-cols-2 xl:gap-6"},[t("div",{staticClass:"rounded-xl border"},[t("BlackKiteHelperSection",{attrs:{section:e.risk.AnnualLossExposure.LossEventFrequency,title:"Loss Event Frequency"}})],1),t("div",{staticClass:"rounded-xl border"},[t("BlackKiteHelperSection",{attrs:{section:e.risk.AnnualLossExposure.LossMagnitude,title:"Loss Magnitude"}})],1)])],1)},pe=[];const S={};var _e=c(v,ue,pe,!1,de,null,null,null);function de(e){for(let s in S)this[s]=S[s]}const Re=function(){return _e.exports}(),f={};f.props={value:{key:"value",required:!0,type:null}};f.setup=(e,s)=>{const t=e,a=s.emit;return{proxy:G(t,a)}};f.components=Object.assign({ToolTip:A,GradeLetterDisplay:T},f.components);var ve=function(){var e=this,s=e.$createElement,t=e._self._c||s;return e.proxy?t("dl",{staticClass:"grid gap-2 xl:col-span-1"},e._l(e.proxy,function(a,n){return t("div",{key:n,staticClass:"flex flex-row items-center justify-between"},[t("dt",{staticClass:"flex flex-row items-center space-x-2"},[a.description?t("ToolTip",[e._v(e._s(a.description))]):e._e(),t("BaseTypography",{staticClass:"text-gray-600",attrs:{variant:"p1"}},[e._v(" "+e._s(n)+" ")])],1),t("dd",[t("GradeLetterDisplay",{attrs:{grade:a.gradeLetter}})],1)])}),0):e._e()},fe=[];const E={};var ye=c(f,ve,fe,!1,me,null,null,null);function me(e){for(let s in E)this[s]=E[s]}const qe=function(){return ye.exports}(),m={};m.setup=(e,s)=>({grades:[{letterGrade:"A",range:"91-100"},{letterGrade:"B",range:"81-90"},{letterGrade:"C",range:"71-80"},{letterGrade:"D",range:"61-70"},{letterGrade:"F",range:"0-60"}]});m.components=Object.assign({GradeLetterDisplay:T},m.components);var ge=function(){var e=this,s=e.$createElement,t=e._self._c||s;return t("div",{staticClass:"mx-auto grid gap-3"},e._l(e.grades,function(a){var n=a.letterGrade,o=a.range;return t("div",{key:n,staticClass:"flex items-center space-x-2"},[t("GradeLetterDisplay",{attrs:{grade:n}}),t("BaseTypography",{staticClass:"text-gray-600",attrs:{variant:"p1"}},[e._v(" "+e._s(o)+" ")])],1)}),0)},he=[];const M={};var xe=c(m,ge,he,!1,ke,null,null,null);function ke(e){for(let s in M)this[s]=M[s]}const De=function(){return xe.exports}(),$={};$.props={score:{key:"score",required:!0,type:Number},maxScore:{key:"maxScore",required:!0,type:Number}};$.setup=(e,s)=>{const t=e,a=u(()=>200-t.score/t.maxScore*200),n=u(()=>`gradient-${Math.random()}`),o=u(()=>t.score>=91?"#10b981":t.score>=81?"#3b83f6":t.score>=71?"#fde68a":t.score>=61?"#ed8936":"#ef4444");return{fill:a,gradientId:n,displayColor:o}};var $e=function(){var e=this,s=e.$createElement,t=e._self._c||s;return t("svg",{attrs:{viewBox:"0 0 90 80",preserveAspectRatio:"none"}},[t("defs",[t("linearGradient",{attrs:{id:`${e.gradientId}`,x1:"15%",y1:"100%",x2:"80%",y2:"100%"}},[t("stop",{attrs:{offset:"0%","stop-color":`${e.displayColor}`}}),t("stop",{attrs:{offset:"100%","stop-color":`${e.displayColor}`}})],1)],1),t("path",{staticClass:"stroke-current text-gray-200 shadow-inner",attrs:{d:"M20,75 a40,40,0,1,1,50,0",fill:"none","stroke-linecap":"round","stroke-width":"3"}}),t("path",{staticClass:"filling transition duration-300",style:`--fill: ${e.fill}`,attrs:{d:"M20,75 a40,40,0,1,1,50,0",fill:"none",stroke:`url(#${e.gradientId})`,"stroke-dasharray":"200","stroke-dashoffset":"200","stroke-linecap":"round","stroke-width":"3"}})])},be=[];const j={};var Ce=c($,$e,be,!1,Le,"fb9f60b0",null,null);function Le(e){for(let s in j)this[s]=j[s]}const Fe=function(){return Ce.exports}();export{Te as B,Fe as a,De as b,qe as c,Re as d};
