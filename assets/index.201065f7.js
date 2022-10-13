import{bv as l,c2 as i,d as _,n as f}from"./index.ad2ff904.js";import{P as y}from"./PerformanceEvaluationDisplay.cfbdbc79.js";import{u as v}from"./usePerformanceEvaluations.032687a9.js";import{u as d}from"./useBitsightCisToCmmcMapping.b02f6111.js";import{u as g}from"./useBitsightCompanies.a2cd11c5.js";import"./chart.f4078cab.js";import"./index.28672862.js";import"./index.4443957f.js";import"./index.6e54b4ff.js";import"./index.7a54c9f6.js";import"./index.87e44ac4.js";import"./index.982b383b.js";import"./index.fb7d7d9f.js";import"./index.75ce774a.js";import"./index.a6bac91b.js";import"./index.0699373b.js";import"./BitsightSummaryOverview.88cceb3e.js";import"./BitsightLevelBadge.92815bb4.js";import"./BitsightProgressBar.9a33b387.js";import"./ratingScoreDescription.3b48b1ea.js";import"./CisToCmmcMappingDisplay.712930c6.js";import"./RiskVectorSummary.449bfb0c.js";import"./ToolTip.5148f62d.js";import"./exclamation-triangle.54812a62.js";import"./GradeLetterDisplay.eb702f06.js";const s={};s.setup=(t,e)=>{const a=i("id"),o=i("bitsightId"),r=g.read(a,o),m=_(()=>{var n;return(n=r.data.value)==null?void 0:n.data}),c=v.list(a,o),u=d.get(a,o);return{companyQuery:r,company:m,performanceQuery:c,mapping:u}};s.components=Object.assign({BackButton:l,PerformanceEvaluationDisplay:y},s.components);var x=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("section",{staticClass:"flex flex-col space-y-6"},[a("div",{staticClass:"flex items-center space-x-4"},[a("BackButton"),a("BaseVueQuery",{attrs:{query:t.companyQuery},scopedSlots:t._u([{key:"success",fn:function(){return[t.company?a("div",{staticClass:"flex flex-col"},[a("BaseTypography",{staticClass:"uppercase text-gray-500",attrs:{variant:"overline"}},[t._v(" "+t._s(t.company.primary_domain)+" ")]),a("BaseTypography",{attrs:{component:"h2",variant:"h5"}},[t._v(" "+t._s(t.company.name)+" ")])],1):t._e()]},proxy:!0}])})],1),a("BaseVueQuery",{attrs:{query:t.performanceQuery},scopedSlots:t._u([{key:"success",fn:function(o){var r=o.data;return[t.mapping.data.value?a("PerformanceEvaluationDisplay",{attrs:{value:r,mapping:t.mapping.data.value}}):t._e()]}}])})],1)},h=[];const p={};var B=f(s,x,h,!1,C,null,null,null);function C(t){for(let e in p)this[e]=p[e]}const N=function(){return B.exports}();export{N as default};