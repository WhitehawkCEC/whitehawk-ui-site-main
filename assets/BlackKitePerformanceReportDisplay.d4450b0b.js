import{aB as p,n as c}from"./index.4c25b472.js";import{B as m,C as u}from"./CmmcAnalysisDisplay.a2c2c3e7.js";import{B as y}from"./BlackKiteProgressBar.2d2fa6b8.js";import{B as v}from"./BlackKiteRiskVectorsDisplay.fe25b2fb.js";import{B as _}from"./BlackKiteSummaryOverview.085f84cd.js";const o={};o.props={value:{key:"value",required:!0,type:Array},options:{key:"options",required:!0,type:Array},isReadonly:{key:"isReadonly",required:!1,type:Boolean,default:!1}};o.setup=(s,a)=>{const e=s,t=a.emit;return{proxy:p(e,t)}};var d=function(){var s=this,a=s.$createElement,e=s._self._c||a;return e("div",{staticClass:"flex flex-col space-y-5"},s._l(s.proxy.length,function(t){return e("BaseLabel",{key:t,staticClass:"grid gap-1"},[e("span",[s._v("Focus Area "+s._s(t))]),e("div",{staticClass:"xl:col-span-2"},[e("BaseInput",{staticClass:"w-full",attrs:{readonly:""},model:{value:s.proxy[t-1],callback:function(i){s.$set(s.proxy,t-1,i)},expression:"proxy[i - 1]"}})],1)])}),1)},f=[];const l={};var B=c(o,d,f,!1,C,null,null,null);function C(s){for(let a in l)this[a]=l[a]}const x=function(){return B.exports}(),r={};r.props={value:{key:"value",required:!0,type:null}};r.setup=(s,a)=>({});r.components=Object.assign({BlackKiteSummaryOverview:_,BlackKiteRiskVectorsDisplay:v,BlackKiteFocusAreasDisplay:x,BlackKiteReportComplianceFiltered:m,CmmcAnalysisDisplay:u,BlackKiteReportRisk:y},r.components);var k=function(){var s=this,a=s.$createElement,e=s._self._c||a;return e("section",{staticClass:"space-y-10"},[e("BlackKiteSummaryOverview",{attrs:{score:parseInt(s.value.reports.summary.GradeOver100),date:s.value.reports.summary.LastUpdatedAt}}),e("div",{staticClass:"grid gap-10 lg:grid-cols-2"},[e("BaseSimpleCard",{staticClass:"space-y-4 p-4 sm:px-6 sm:py-5"},[e("BaseTypography",{staticClass:"text-prime-navy",attrs:{component:"h3",variant:"h6"}},[s._v(" Risk Vector Analysis ")]),e("BlackKiteRiskVectorsDisplay",{attrs:{value:s.value.riskVectors}})],1),e("BaseSimpleCard",{staticClass:"space-y-4 p-4 sm:px-6 sm:py-5"},[e("BaseTypography",{staticClass:"text-prime-navy",attrs:{component:"h3",variant:"h6"}},[s._v(" Focus Areas ")]),e("BlackKiteFocusAreasDisplay",{attrs:{value:s.value.focusAreaOrder.slice(0,3),options:s.value.focusAreaOrder,"is-readonly":!0}})],1)],1),e("BaseSimpleCard",{staticClass:"space-y-6 p-4 sm:px-6 sm:py-5"},[e("BaseTypography",{staticClass:"text-prime-navy",attrs:{component:"h3",variant:"h6"}},[s._v(" Compliance ")]),e("BlackKiteReportComplianceFiltered",{attrs:{compliance:s.value.reports.compliance}})],1),e("div",{staticClass:"space-y-3"},[e("BaseTypography",{staticClass:"text-prime-navy",attrs:{component:"h3",variant:"h6"}},[s._v(" CMMC Analysis ")]),e("CmmcAnalysisDisplay",{attrs:{value:s.value.cmmcAnalysis}})],1),e("BaseSimpleCard",{staticClass:"space-y-4 p-4 sm:px-6 sm:py-5"},[e("BaseTypography",{staticClass:"text-prime-navy",attrs:{component:"h3",variant:"h6"}},[s._v(" FAIR Assessment ")]),e("BlackKiteReportRisk",{attrs:{risk:s.value.reports.risk}})],1),s._t("default")],2)},h=[];const n={};var A=c(r,k,h,!1,R,null,null,null);function R(s){for(let a in n)this[a]=n[a]}const S=function(){return A.exports}();export{S as B};
