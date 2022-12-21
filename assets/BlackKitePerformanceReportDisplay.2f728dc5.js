import{T as p}from"./ToolTip.fa21a803.js";import{aB as m,n as c}from"./index.d6fb131d.js";import{B as u,a as v}from"./BlackKiteSummaryOverview.19b335d8.js";import{B as y}from"./BlackKiteProgressBar.74ad9aad.js";import{B as _}from"./BlackKiteRiskVectorsDisplay.37fbe88e.js";import{C as d}from"./CmmcAnalysisDisplay.335dd277.js";const i={};i.props={value:{key:"value",required:!0,type:Array},options:{key:"options",required:!0,type:Array},isReadonly:{key:"isReadonly",required:!1,type:Boolean,default:!1}};i.setup=(e,t)=>{const s=e,a=t.emit;return{proxy:m(s,a)}};var f=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"flex flex-col space-y-5"},e._l(e.proxy.length,function(a){return s("BaseLabel",{key:a,staticClass:"grid gap-1"},[s("span",[e._v("Focus Area "+e._s(a))]),s("div",{staticClass:"xl:col-span-2"},[s("BaseInput",{staticClass:"w-full",attrs:{readonly:""},model:{value:e.proxy[a-1],callback:function(l){e.$set(e.proxy,a-1,l)},expression:"proxy[i - 1]"}})],1)])}),1)},C=[];const o={};var x=c(i,f,C,!1,B,null,null,null);function B(e){for(let t in o)this[t]=o[t]}const h=function(){return x.exports}(),r={};r.props={value:{key:"value",required:!0,type:null}};r.setup=(e,t)=>({});r.components=Object.assign({BlackKiteSummaryOverview:u,BlackKiteRiskVectorsDisplay:_,BlackKiteFocusAreasDisplay:h,BlackKiteReportComplianceFiltered:v,ToolTip:p,CmmcAnalysisDisplay:d,BlackKiteReportRisk:y},r.components);var k=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("section",{staticClass:"space-y-10"},[s("BlackKiteSummaryOverview",{attrs:{score:parseInt(e.value.reports.summary.GradeOver100),date:e.value.reports.summary.LastUpdatedAt}}),s("div",{staticClass:"grid gap-10 lg:grid-cols-2"},[s("div",{staticClass:"space-y-2"},[s("BaseTypography",{staticClass:"text-prime-navy",attrs:{component:"h3",variant:"h6"}},[e._v(" Risk Vector Analysis ")]),s("BaseSimpleCard",{staticClass:"p-4 sm:px-6 sm:py-5"},[s("BlackKiteRiskVectorsDisplay",{attrs:{value:e.value.riskVectors}})],1)],1),s("div",{staticClass:"space-y-2"},[s("BaseTypography",{staticClass:"text-prime-navy",attrs:{component:"h3",variant:"h6"}},[e._v(" Focus Areas ")]),s("BaseSimpleCard",{staticClass:"p-4 sm:px-6 sm:py-5"},[s("BlackKiteFocusAreasDisplay",{attrs:{value:e.value.focusAreaOrder.slice(0,3),options:e.value.focusAreaOrder,"is-readonly":!0}})],1)],1)]),s("div",{staticClass:"space-y-2"},[s("BaseTypography",{staticClass:"text-prime-navy",attrs:{component:"h3",variant:"h6"}},[e._v(" Compliance ")]),s("BaseSimpleCard",{staticClass:"p-4 sm:px-6 sm:py-5"},[s("BlackKiteReportComplianceFiltered",{attrs:{compliance:e.value.reports.compliance}})],1)],1),s("div",{staticClass:"space-y-2"},[s("div",{staticClass:"flex space-x-1 items-end"},[s("BaseTypography",{staticClass:"text-prime-navy",attrs:{component:"h3",variant:"h6"}},[e._v(" CMMC Analysis ")]),s("ToolTip",[e._v(" Note: While Levels 1-2 are finalized for CMMC 2.0, DoD is still in the process of completing the Level 3 requirements. Once the Level 3 mappings are finalized, this report will be updated to include Level 3 observations. ")])],1),s("CmmcAnalysisDisplay",{attrs:{value:e.value.cmmcAnalysis}})],1),s("div",{staticClass:"space-y-2"},[s("BaseTypography",{staticClass:"text-prime-navy",attrs:{component:"h3",variant:"h6"}},[e._v(" FAIR Assessment ")]),s("BaseSimpleCard",{staticClass:"p-4 sm:px-6 sm:py-5"},[s("BlackKiteReportRisk",{attrs:{risk:e.value.reports.risk}})],1)],1),e._t("default")],2)},A=[];const n={};var g=c(r,k,A,!1,R,null,null,null);function R(e){for(let t in n)this[t]=n[t]}const O=function(){return g.exports}();export{O as B};