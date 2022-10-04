import{B as m}from"./BundleSolutionDisplay.9ac384c7.js";import{G as y}from"./GaugeChart.5d2d1bff.js";import{n as c,b_ as d,bE as _}from"./index.c5897af8.js";import{u as v,a as f}from"./useCompanyOverview.4dbf8e40.js";import"./BasicModal.91c6408d.js";import"./useCompanyWishlistItems.d55c8b33.js";import"./cloneDeep.8ea278f1.js";import"./_Uint8Array.b86cc21e.js";import"./keys.8af22ecf.js";import"./_baseAssignValue.9dbaeede.js";import"./_copyArray.56331c81.js";const o={};o.props={value:{key:"value",required:!0,type:null},companyId:{key:"companyId",required:!0,type:String},companyName:{key:"companyName",required:!0,type:String}};o.setup=(e,a)=>({});o.components=Object.assign({GaugeChart:y},o.components);var x=function(){var e=this,a=e.$createElement,t=e._self._c||a;return t("div",{staticClass:"space-y-6 overflow-hidden rounded-lg bg-white px-4 py-5 shadow sm:py-8 sm:px-6"},[t("div",{staticClass:"space-y-2 lg:w-full"},[e.companyName?t("BaseH5",{staticClass:"text-center sm:text-left"},[e._v(" "+e._s(e.companyName)+" ")]):e._e(),t("dl",{staticClass:"relative flex flex-row flex-wrap pt-10 pb-8"},[e._l(e.value.summary,function(s,n){return t("div",{key:s,staticClass:"mb-8 flex w-1/2 sm:w-1/4 xl:mb-0 xl:w-1/6"},[t("div",{staticClass:"mx-auto my-auto xl:mx-0"},[t("dt",[t("BaseOverline",{staticClass:"mb-3 block uppercase text-gray-500"},[e._v(" "+e._s(n)+" ")])],1),t("dd",[t("BaseP1",{},[e._v(e._s(s))])],1)])])}),t("div",{staticClass:"flex flex-1 flex-col items-center space-y-4 xl:mx-auto xl:-mt-16 xl:w-1/5"},[t("GaugeChart",{staticClass:"w-full max-w-xs px-8",attrs:{"cyber-score":e.value.scores.cyberPath}}),t("span",{staticClass:"text-xs font-semibold text-gray-500"},[e._v(" Your Cyber Risk Indicator ")])],1)],2),t("div",{staticClass:"prose max-w-full space-y-2 text-justify"},e._l(e.value.text,function(s,n){return t("p",{key:n,staticClass:"text-gray-500"},[e._v(" "+e._s(s)+" ")])}),0)],1),t("div",{staticClass:"flex justify-between"},[t("BaseButton",{attrs:{to:`/client/companies/${encodeURIComponent(e.companyId)}/journey/cyber-risk-profile/questionnaire`,"display-type":"info"}},[e._v(" Retake Questionnaire ")]),t("BaseButton",{attrs:{to:`/client/companies/${encodeURIComponent(e.companyId)}/journey/cyber-risk-profile/custom-questionnaire`,action:"secondary","display-type":"info"}},[e._v(" Other Questionnaires ")])],1)])},C=[];const i={};var b=c(o,x,C,!1,h,null,null,null);function h(e){for(let a in i)this[a]=i[a]}const w=function(){return b.exports}(),r={};r.setup=(e,a)=>{const t=d("id"),s=[v.get(t),f.get(t),_.read(t)];return{id:t,queries:s}};r.components=Object.assign({QuestionnaireOverviewDisplay:w,BundleSolutionDisplay:m},r.components);var g=function(){var e=this,a=e.$createElement,t=e._self._c||a;return t("BaseVueQueries",{attrs:{queries:e.queries},scopedSlots:e._u([{key:"success",fn:function(s){var n=s[0],u=s[1],p=s[2];return[t("section",{staticClass:"space-y-12"},[t("QuestionnaireOverviewDisplay",{attrs:{"company-id":e.id,"company-name":p.name,value:n}}),t("div",{staticClass:"space-y-4"},[t("BaseTypography",{attrs:{variant:"subtitle3"}},[e._v(" Based on your response, below are your solution options: ")]),t("BundleSolutionDisplay",{attrs:{id:e.id,bundle:u}})],1)],1)]}},{key:"error",fn:function(s){var n=s[0];return[n.response.status===404?[t("div",{staticClass:"space-y-4"},[t("BaseP1",{staticClass:"text-gray-500"},[e._v(" Please take our complimentary Cyber Readiness Questionnaire by answering just 10 questions and to find out what the greatest threats to your industry are and how best to protect yourself. Our free online tool identifies your biggest risks and matches you to affordable products that can help you today. ")]),t("BaseButton",{staticClass:"place-self-start",attrs:{"display-type":"info",to:`/client/companies/${encodeURIComponent(e.id)}/journey/cyber-risk-profile/questionnaire`}},[e._v(" Take the Questionnaire ")])],1)]:e._e()]}}])})},B=[];const l={};var k=c(r,g,B,!1,$,null,null,null);function $(e){for(let a in l)this[a]=l[a]}const G=function(){return k.exports}();export{G as default};