import{ag as _,aP as y,aQ as v,dh as d,c as f,n as p,c1 as h,r as k,aA as g}from"./index.77543f41.js";import{B,a as C}from"./BlackKiteSummaryOverview.978d5442.js";import{B as x}from"./BlackKiteProgressBar.647ad78f.js";import{B as $}from"./BlackKiteReportSummary.90e39c52.js";import"./TransitionExpand.cf25d155.js";import"./GradeLetterDisplay.4f3e5ad7.js";import"./ratingScoreDescription.dc21462c.js";import"./ToolTip.e3a45efb.js";import"./exclamation-triangle.54812a62.js";const R={get(t){return _(["companies",t,"black-kite","mapped-entity","reports"],()=>y.get(`${v}/companies/${t.value}/black-kite/mapped-entity/reports`).then(r=>r.data))}},n={};n.props={error:{key:"error",required:!0,type:null}};n.setup=(t,r)=>{const e=t;return{alert:f(()=>e.error)}};n.components=Object.assign({AlertError:d},n.components);var E=function(){var t=this,r=t.$createElement,e=t._self._c||r;return t.alert.response&&t.alert.response.status===404?e("AlertError",{scopedSlots:t._u([{key:"title",fn:function(){return[t._v(" "+t._s(t.alert.response.status)+" "+t._s(t.alert.response.data.message)+" ")]},proxy:!0},{key:"message",fn:function(){return[t._v("Mapped Entity is currently unset")]},proxy:!0}],null,!1,3525819082)}):t._e()},S=[];const l={};var M=p(n,E,S,!1,K,null,null,null);function K(t){for(let r in l)this[r]=l[r]}const b=function(){return M.exports}(),o={};o.props={id:{key:"id",required:!0,type:String},reports:{key:"reports",required:!0,type:null}};o.setup=(t,r)=>({});o.components=Object.assign({BlackKiteSummaryOverview:B,BlackKiteReportSummary:$,BlackKiteReportRisk:x,BlackKiteReportComplianceFiltered:C},o.components);var j=function(){var t=this,r=t.$createElement,e=t._self._c||r;return e("section",{staticClass:"space-y-6"},[e("div",{staticClass:"flex flex-col space-y-2 lg:flex-row lg:items-end lg:justify-between lg:space-y-0"},[e("div",{staticClass:"-space-y-2"},[e("BaseTypography",{staticClass:"uppercase text-gray-500",attrs:{variant:"overline"}},[t._v(" Mapped Entity ")]),e("BaseTypography",{staticClass:"capitalize",attrs:{component:"h2",variant:"h5"}},[t._v(" "+t._s(t.reports.summary.DomainValue)+" ")])],1),e("BaseButton",{attrs:{to:`/admin/companies/${t.id}/cyber-risk-rating/rating-service-2/mapped-entity/settings`}},[t._v(" Change ")])],1),e("div",{staticClass:"space-y-10"},[e("BlackKiteSummaryOverview",{attrs:{score:parseInt(t.reports.summary.GradeOver100),date:t.reports.summary.LastUpdatedAt}}),e("div",{staticClass:"space-y-2"},[e("BaseTypography",{staticClass:"text-prime-navy",attrs:{component:"h3",variant:"h6"}},[t._v(" Summary ")]),e("BaseSimpleCard",{staticClass:"p-4 sm:px-6 sm:py-5"},[e("BlackKiteReportSummary",{attrs:{summary:t.reports.summary}})],1)],1),e("div",{staticClass:"space-y-2"},[e("BaseTypography",{staticClass:"text-prime-navy",attrs:{component:"h3",variant:"h6"}},[t._v(" Risk ")]),e("BaseSimpleCard",{staticClass:"p-4 sm:px-6 sm:py-5"},[e("BlackKiteReportRisk",{attrs:{risk:t.reports.risk}})],1)],1),e("div",{staticClass:"space-y-2"},[e("BaseTypography",{staticClass:"text-prime-navy",attrs:{component:"h3",variant:"h6"}},[t._v(" Compliance ")]),e("BaseSimpleCard",{staticClass:"p-4 sm:px-6 sm:py-5 lg:py-6"},[e("BlackKiteReportComplianceFiltered",{attrs:{compliance:t.reports.compliance}})],1)],1)],1)])},O=[];const u={};var D=p(o,j,O,!1,F,null,null,null);function F(t){for(let r in u)this[r]=u[r]}const Q=function(){return D.exports}(),i={};i.setup=(t,r)=>{const e=h("id"),s=R.get(e),a=k();return g(()=>s.data.value,c=>{c&&(a.value=c)},{immediate:!0}),{id:e,reportsQuery:s}};i.components=Object.assign({MappedEntityErrorDisplay:b,MappedEntityReportsDisplay:Q},i.components);var T=function(){var t=this,r=t.$createElement,e=t._self._c||r;return e("section",{staticClass:"space-y-6"},[e("BaseVueQuery",{attrs:{query:t.reportsQuery},scopedSlots:t._u([{key:"error",fn:function(s){var a=s.error;return[e("MappedEntityErrorDisplay",{attrs:{error:a}})]}},{key:"success",fn:function(s){var a=s.data;return[e("MappedEntityReportsDisplay",{attrs:{id:t.id,reports:a}})]}}])})],1)},q=[];const m={};var w=p(i,T,q,!1,A,null,null,null);function A(t){for(let r in m)this[r]=m[r]}const N=function(){return w.exports}();export{N as default};