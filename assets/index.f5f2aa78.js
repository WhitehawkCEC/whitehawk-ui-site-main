import{D as j}from"./document-arrow-down.2aec0021.js";import{A as q}from"./AlertFriendly.3246cbc4.js";import{S as P,B as W}from"./BundleSolutionDisplay.4c011b6b.js";import{B as H}from"./BitsightSummaryOverview.5a5190de.js";import{C as z}from"./CisToCmmcMappingDisplay.7259e0b8.js";import{ai as N,d as i,aP as $,aQ as T,az as U,n as I,b_ as G,bE as J,ab as w}from"./index.63ee5a42.js";import{T as K}from"./TodosChart.bc2fc943.js";import{R as X}from"./RiskVectorSummary.0d4f4ae8.js";import{F as Y}from"./FileSaver.min.0ee537ba.js";import{u as Z}from"./usePerformanceEvaluations.95700d45.js";import{u as tt}from"./useBitsightCisToCmmcMapping.865383c5.js";import{u as et}from"./useInDepthScorecards.af75e908.js";import{r as at,s as st}from"./sortWorstRiskVectorsFirst.3076076d.js";import{c as ot}from"./index.ca3e535c.js";import"./BasicModal.00c4ca68.js";import"./useCompanyWishlistItems.16e79c22.js";import"./cloneDeep.e8085c59.js";import"./_Uint8Array.ed28adaa.js";import"./keys.0c02291c.js";import"./_baseAssignValue.bf51c19d.js";import"./_copyArray.56331c81.js";import"./BitsightLevelBadge.632ecbbf.js";import"./BitsightProgressBar.265c4f90.js";import"./ratingScoreDescription.3b48b1ea.js";import"./TabbedPanel.2b42928f.js";import"./BarChart.7ad87a9e.js";import"./chart.f4078cab.js";import"./_baseOrderBy.c97895b6.js";import"./_arrayMap.dcea68f3.js";import"./_baseIteratee.8a076fe2.js";import"./_baseIsEqual.9c73edea.js";import"./_baseEach.047d6417.js";import"./ToolTip.b2816d07.js";import"./exclamation-triangle.54812a62.js";import"./GradeLetterDisplay.fd37462c.js";import"./index.a5b68734.js";const rt={get(t,r){return N(["companies",t,"bitsight","companies",r,"cis-evaluation"],()=>$.get(`${T}/companies/${t.value}/bitsight/companies/${r.value}/cis-evaluation`).then(e=>e.data),{enabled:i(()=>r.value!==void 0)})}},b={};b.props={value:{key:"value",required:!0,type:Object}};b.setup=(t,r)=>{const e=t,c=r.emit;return{proxy:U(e,c)}};var nt=function(){var t=this,r=t.$createElement,e=t._self._c||r;return e("div",{staticClass:"flex flex-col space-y-6 p-4"},[t.proxy.num1?e("BaseLabel",{staticClass:"grid gap-1"},[t._v(" Focus Area 1 "),e("BaseInput",{staticClass:"w-full",attrs:{readonly:""},model:{value:t.proxy.num1.name,callback:function(c){t.$set(t.proxy.num1,"name",c)},expression:"proxy.num1.name"}})],1):t._e(),t.proxy.num2?e("BaseLabel",{staticClass:"grid gap-1"},[t._v(" Focus Area 2 "),e("BaseInput",{staticClass:"w-full",attrs:{readonly:""},model:{value:t.proxy.num2.name,callback:function(c){t.$set(t.proxy.num2,"name",c)},expression:"proxy.num2.name"}})],1):t._e(),t.proxy.num3?e("BaseLabel",{staticClass:"grid gap-1"},[t._v(" Focus Area 3 "),e("BaseInput",{staticClass:"w-full",attrs:{readonly:""},model:{value:t.proxy.num3.name,callback:function(c){t.$set(t.proxy.num3,"name",c)},expression:"proxy.num3.name"}})],1):t._e()],1)},it=[];const A={};var ct=I(b,nt,it,!1,ut,null,null,null);function ut(t){for(let r in A)this[r]=A[r]}const lt=function(){return ct.exports}(),v={};v.setup=(t,r)=>{const e=G("id"),c=J.read(e),y=i(()=>c.data.value),d=i(()=>{var s,a;return(a=(s=y.value)==null?void 0:s.attributes)==null?void 0:a.bitsightId}),F=i(()=>{var s,a;return(a=(s=y.value)==null?void 0:s.attributes)==null?void 0:a.bitsightAccessCompanyId}),C=rt.get(e,d),f=i(()=>C.data.value),E=tt.get(e,d),D=i(()=>E.data.value),x=et.list(e),k=i(()=>x.data.value),B=Z.list(e,d),g=i(()=>B.data.value),M=["basic","foundational","organizational"],h=i(()=>{if(g.value){const s={};for(const a of Object.entries(g.value.analysis)){const[o,n]=a,{grade:u,standard:p,custom:_}=n;let l="";for(const S of at)S.name===o&&(l=S.text);s[o]={grade:u,standard:p,custom:_,description:l}}return s}}),O=i(()=>{if(h.value){const[s,a,o]=st(h.value);return{num1:s,num2:a,num3:o}}}),L=i(()=>{var s;if(f.value){const a=f.value,o={};for(const[n,u]of Object.entries(a))for(const p of u)n in o||(o[n]=[]),(s=o[n])==null||s.push({id:e.value,category:n,todoText:p.control.description,itemComplete:p.okay});return o}}),m=i(()=>{if(k.value){const s=d.value,a=k.value.filter(o=>o.data.supplierId===s).filter(o=>o.status==="Complete");if(a.sort((o,n)=>{if(o.data.updatedAt&&n.data.updatedAt)return ot(w(o.data.updatedAt),w(n.data.updatedAt));throw new Error("Insufficient scorecards to sort")}),a.length===0)throw new Error("Scorecard not found");return a[0]}}),Q=i(()=>{if(m.value){const s=(a,o,n)=>{const u=[];for(let p=0;p<n;p++){const _=p+1,l=`${o} Product ${_}`;u.push({id:a[`${l} - mainId`]||"",name:a[`${l} - Product Option 1`]||"",description:a[`${l} - Description Option 1`],categories:[{id:a[`${l} - categoryId`]||"",name:a[`${l} - Category`]||""}],manufacturer:{name:a[`${l} - Vendor Option 1`]||""}})}return u};return[{type:"Basic",description:"The Essential bundle provides the cybersecurity products that fit your company's immediate needs. This bundle represents the minimum that your company needs to be doing to prevent or mitigate cyber crime and fraud.",products:s(m.value.data,"Basic",2)},{type:"Balanced",description:"The Balanced bundle offers the cybersecurity products that represent the best practices standard for your company's online operations. This bundle represents what you should be doing.",products:s(m.value.data,"Balanced",3)},{type:"Advanced",description:"The Premier bundle is the top of line maturity level for cybersecurity products. This bundle represents the level of cyber maturity that your company should be striving towards to address a breadth of cyber crime and fraud attacks to your revenue, customers and reputation.",products:s(m.value.data,"Advanced",4)}]}return[]});async function V(){var u;const s=(u=m.value)==null?void 0:u.id;if(!s)return;const a=F.value||e.value,o=encodeURIComponent(a),n=await $(`${T}/companies/${o}/scorecards/${s}/pdf`,{responseType:"blob"});Y.exports.saveAs(n.data,s+".pdf")}return{id:e,company:y,bitsightId:d,cisEvaluationQuery:C,cisEvaluation:f,cisToCmmcMapping:D,scorecardsQuery:x,performanceQuery:B,performanceEvaluation:g,maturityCategories:M,riskVectors:h,focusAreas:O,maturity:L,bundle:Q,downloadFile:V}};v.components=Object.assign({AlertFriendly:q,SkeletonLoader:P,BitsightSummaryOverview:H,RiskVectorSummary:X,FocusAreasDisplay:lt,TodosChart:K,CisToCmmcMappingDisplay:z,BundleSolutionDisplay:W,DocumentDownload:j},v.components);var pt=function(){var t=this,r=t.$createElement,e=t._self._c||r;return e("main",[t.bitsightId?e("div",{staticClass:"space-y-6"},[e("SkeletonLoader",{attrs:{"is-loading":t.performanceQuery.isLoading.value,boilerplate:"ratingOverview"},scopedSlots:t._u([{key:"content",fn:function(){return[t.performanceEvaluation?e("BitsightSummaryOverview",{attrs:{rating:t.performanceEvaluation,company:t.company?t.company.name:""}}):t._e()]},proxy:!0}])}),e("div",{staticClass:"grid gap-6 lg:grid-cols-2"},[e("SkeletonLoader",{attrs:{"is-loading":!t.riskVectors,boilerplate:"title, text, text, text"},scopedSlots:t._u([{key:"content",fn:function(){return[e("BaseSimpleCard",{staticClass:"divide-y"},[e("BaseTypography",{staticClass:"p-4",attrs:{component:"h2",variant:"subtitle3"}},[t._v(" Risk Vector Analysis ")]),t.riskVectors?e("RiskVectorSummary",{attrs:{value:t.riskVectors}}):t._e()],1)]},proxy:!0}])}),e("SkeletonLoader",{attrs:{"is-loading":!t.performanceEvaluation||!t.company,boilerplate:"title, text, text, text"},scopedSlots:t._u([{key:"content",fn:function(){return[e("BaseSimpleCard",{staticClass:"h-auto divide-y lg:h-full"},[e("BaseTypography",{staticClass:"p-4",attrs:{component:"h2",variant:"subtitle3"}},[t._v(" Recommended Focus Areas ")]),t.focusAreas?e("FocusAreasDisplay",{model:{value:t.focusAreas,callback:function(c){t.focusAreas=c},expression:"focusAreas"}}):t._e()],1)]},proxy:!0}])})],1),e("SkeletonLoader",{attrs:{"is-loading":t.cisEvaluationQuery.isLoading.value||!t.cisEvaluation,boilerplate:"title"},scopedSlots:t._u([{key:"content",fn:function(){return[e("BaseSimpleCard",{staticClass:"divide-y"},[e("BaseTypography",{staticClass:"p-4",attrs:{component:"h2",variant:"subtitle3"}},[t._v(" CIS Control-Based Maturity Level Assessment Based on Externally Observed Risk Rating ")]),t.maturity?e("TodosChart",{staticClass:"w-full",attrs:{value:t.maturity,"company-id":t.id,categories:t.maturityCategories,"can-add-notes":!1}}):t._e()],1)]},proxy:!0}])}),t.cisToCmmcMapping?e("BaseSimpleCard",{staticClass:"divide-y"},[e("BaseTypography",{staticClass:"p-4",attrs:{component:"h2",variant:"subtitle3"}},[t._v(" CIS Controls Mapped to CMMC Maturity Levels ")]),e("div",{staticClass:"p-4"},[e("div",{staticClass:"flex justify-center overflow-auto rounded-lg border shadow"},[e("CisToCmmcMappingDisplay",{staticClass:"w-full",attrs:{value:t.cisToCmmcMapping}})],1)])],1):t._e(),t.performanceEvaluation?e("div",[t.scorecardsQuery.error.value?e("AlertFriendly",{scopedSlots:t._u([{key:"title",fn:function(){return[t._v("Scorecard Not Found")]},proxy:!0},{key:"message",fn:function(){return[t._v(" It appears that we do not have a Scorecard for your company. To learn more and request a Scorecard, please contact a WhiteHawk Cyber Analyst. ")]},proxy:!0},{key:"action",fn:function(){return[t.company?e("BaseButton",{attrs:{shape:"rectangle","display-type":"success",to:{path:"/contact-us",query:{textBody:"I would like to talk with a WhiteHawk Consultant to request a scorecard for my company.",subject:"Request A Scorecard",company:t.company.name}}}},[t._v(" Request Scorecard ")]):t._e()]},proxy:!0}],null,!1,2559098050)}):e("div",{staticClass:"space-y-6"},[e("div",{staticClass:"space-y-4"},[e("BaseTypography",{attrs:{component:"h2",variant:"subtitle3"}},[t._v(" Solution Options Based on Risk Rating ")]),e("BundleSolutionDisplay",{attrs:{id:t.id,bundle:t.bundle,"is-loading":t.scorecardsQuery.isLoading.value}})],1),e("BaseButton",{staticClass:"space-x-1",attrs:{shape:"rectangle"},on:{click:t.downloadFile}},[e("span",[t._v("Download Scorecard")]),e("DocumentDownload",{staticClass:"h-auto w-4 xl:w-5"})],1)],1)],1):t._e()],1):e("AlertFriendly",{scopedSlots:t._u([{key:"title",fn:function(){return[t._v("Risk Rating Not Found")]},proxy:!0},{key:"message",fn:function(){return[t._v(" It appears that we do not have a Risk Rating for your company. To learn more and view your Risk Rating, please contact a WhiteHawk Cyber Analyst. ")]},proxy:!0},{key:"action",fn:function(){return[e("BaseButton",{attrs:{shape:"rectangle","display-type":"success",to:{path:"/contact-us",query:{textBody:"I would like to talk with a WhiteHawk Consultant to request a risk rating for my company.",subject:"Services and Solutions",company:t.company?t.company.name:""}}}},[t._v(" Request Risk Rating ")])]},proxy:!0}],null,!1,1957250383)})],1)},dt=[];const R={};var mt=I(v,pt,dt,!1,yt,null,null,null);function yt(t){for(let r in R)this[r]=R[r]}const Xt=function(){return mt.exports}();export{Xt as default};
