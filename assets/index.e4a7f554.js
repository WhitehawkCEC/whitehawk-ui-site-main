import{G as y,B as m}from"./GaugeChart.e128a0af.js";import{n as l,ca as d,bH as v}from"./index.6ef5ab54.js";import{u as _,a as f}from"./useCompanyOverview.7422ecc4.js";import"./BasicModal.c07eb034.js";import"./useCompanyWishlistItems.d4f8e9ac.js";import"./cloneDeep.6928cf16.js";import"./_Uint8Array.742488d2.js";import"./keys.052190cc.js";import"./_baseAssignValue.cdd63b64.js";import"./_copyArray.56331c81.js";const n={};n.props={value:{key:"value",required:!0,type:null},companyId:{key:"companyId",required:!0,type:String},companyName:{key:"companyName",required:!0,type:String}};n.setup=(e,a)=>({});n.components=Object.assign({GaugeChart:y},n.components);var x=function(){var e=this,a=e.$createElement,t=e._self._c||a;return t("section",{staticClass:"flex flex-col space-y-6"},[e.companyName?t("div",{staticClass:"-space-y-2"},[t("BaseTypography",{staticClass:"uppercase text-gray-500",attrs:{variant:"overline"}},[e._v(" Cyber Risk Profile ")]),t("BaseTypography",{attrs:{variant:"h5",component:"h2"}},[e._v(" "+e._s(e.companyName)+" ")])],1):e._e(),t("BaseSimpleCard",{staticClass:"flex flex-col space-y-6 overflow-hidden px-4 py-5 sm:py-8 sm:px-6"},[t("div",{staticClass:"flex flex-col space-y-6 xl:flex-row xl:items-center xl:justify-between xl:space-y-0"},[t("ul",{staticClass:"grid grid-cols-2 justify-items-center gap-4 px-2 sm:grid-cols-4 sm:px-6 md:grid-cols-2 lg:grid-cols-4 xl:flex-1"},e._l(e.value.summary,function(s,r){return t("li",{key:s},[t("div",{staticClass:"flex flex-col space-y-2"},[t("BaseTypography",{staticClass:"uppercase text-gray-500",attrs:{variant:"overline"}},[e._v(" "+e._s(r)+" ")]),t("BaseTypography",{attrs:{variant:"p1",component:"p"}},[e._v(" "+e._s(s)+" ")])],1)])}),0),t("div",{staticClass:"flex flex-col items-center justify-center space-y-4 xl:px-8 2xl:px-16"},[t("GaugeChart",{attrs:{"cyber-score":e.value.scores.cyberPath}}),t("BaseTypography",{staticClass:"text-xs text-gray-500",attrs:{variant:"subtitle2"}},[e._v(" Your Cyber Risk Indicator ")])],1)]),t("div",{staticClass:"prose max-w-full space-y-4 text-justify"},e._l(e.value.text,function(s,r){return t("BaseTypography",{key:r,staticClass:"text-gray-500",attrs:{variant:"p1",component:"p"}},[e._v(" "+e._s(s)+" ")])}),1),t("div",{staticClass:"md:inline-flex"},[t("BaseButton",{staticClass:"w-full md:w-auto",attrs:{to:`/client/companies/${encodeURIComponent(e.companyId)}/journey/cyber-risk-profile/questionnaire`,action:"secondary"}},[e._v(" Retake Questionnaire ")])],1)])],1)},g=[];const i={};var C=l(n,x,g,!1,h,null,null,null);function h(e){for(let a in i)this[a]=i[a]}const b=function(){return C.exports}(),o={};o.setup=(e,a)=>{const t=d("id"),s=[_.get(t),f.get(t),v.read(t)];return{id:t,queries:s}};o.components=Object.assign({QuestionnaireOverviewDisplay:b,BundleSolutionDisplay:m},o.components);var B=function(){var e=this,a=e.$createElement,t=e._self._c||a;return t("BaseVueQueries",{attrs:{queries:e.queries},scopedSlots:e._u([{key:"success",fn:function(s){var r=s[0],p=s[1],u=s[2];return[t("section",{staticClass:"space-y-12"},[t("QuestionnaireOverviewDisplay",{attrs:{"company-id":e.id,"company-name":u.name,value:r}}),t("div",{staticClass:"space-y-4"},[t("BaseTypography",{attrs:{variant:"h6"}},[e._v(" Based on your response, below are your solution options: ")]),t("BundleSolutionDisplay",{attrs:{id:e.id,bundle:p}})],1)],1)]}},{key:"error",fn:function(s){var r=s[0];return[r.response.status===404?[t("div",{staticClass:"space-y-4"},[t("BaseP1",{staticClass:"text-gray-500"},[e._v(" Please take our complimentary Cyber Readiness Questionnaire by answering just 10 questions and to find out what the greatest threats to your industry are and how best to protect yourself. Our free online tool identifies your biggest risks and matches you to affordable products that can help you today. ")]),t("BaseButton",{staticClass:"place-self-start",attrs:{"display-type":"info",to:`/client/companies/${encodeURIComponent(e.id)}/journey/cyber-risk-profile/questionnaire`}},[e._v(" Take the Questionnaire ")])],1)]:e._e()]}}])})},k=[];const c={};var w=l(o,B,k,!1,j,null,null,null);function j(e){for(let a in c)this[a]=c[a]}const N=function(){return w.exports}();export{N as default};