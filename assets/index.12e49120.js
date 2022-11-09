import{D as j}from"./document-arrow-down.2aec0021.js";import{A as q}from"./AlertFriendly.dd1252a8.js";import{S as P,B as W}from"./BundleSolutionDisplay.61bd45ba.js";import{B as H}from"./BitsightSummaryOverview.2a5a6188.js";import{C as z}from"./CisToCmmcMappingDisplay.5534ae1c.js";import{ag as N,c as i,aP as R,aQ as T,ay as U,n as I,b$ as G,bG as J,a9 as w}from"./index.06ea6359.js";import{T as K}from"./TodosChart.d074db52.js";import{R as X}from"./RiskVectorSummary.ba64d75a.js";import{F as Y}from"./FileSaver.min.defd0125.js";import{u as Z}from"./usePerformanceEvaluations.217091ef.js";import{u as tt}from"./useBitsightCisToCmmcMapping.8bb842be.js";import{u as et}from"./useInDepthScorecards.fe17b431.js";import{r as at,s as ot}from"./sortWorstRiskVectorsFirst.3076076d.js";import{c as st}from"./index.3cad3bad.js";import"./BasicModal.8d110000.js";import"./useCompanyWishlistItems.9f12497a.js";import"./cloneDeep.7242d007.js";import"./_Uint8Array.347aed7b.js";import"./keys.32276aac.js";import"./_baseAssignValue.e711f020.js";import"./_copyArray.56331c81.js";import"./BitsightLevelBadge.3a972fe9.js";import"./BitsightProgressBar.f81475d7.js";import"./ratingScoreDescription.dc21462c.js";import"./TabbedPanel.75623af4.js";import"./BarChart.e84e5747.js";import"./chart.f4078cab.js";import"./_baseOrderBy.ba988987.js";import"./_arrayMap.dcea68f3.js";import"./_baseIteratee.b64a3328.js";import"./_baseIsEqual.30991915.js";import"./_baseEach.63835f24.js";import"./ToolTip.ce981e04.js";import"./exclamation-triangle.54812a62.js";import"./GradeLetterDisplay.708700ca.js";import"./index.a248017f.js";const rt={get(t,r){return N(["companies",t,"bitsight","companies",r,"cis-evaluation"],()=>R.get(`${T}/companies/${t.value}/bitsight/companies/${r.value}/cis-evaluation`).then(e=>e.data),{enabled:i(()=>r.value!==void 0)})}},x={};x.props={value:{key:"value",required:!0,type:Object}};x.setup=(t,r)=>{const e=t,c=r.emit;return{proxy:U(e,c)}};var nt=function(){var t=this,r=t.$createElement,e=t._self._c||r;return e("div",{staticClass:"flex flex-col space-y-6 p-4"},[t.proxy.num1?e("BaseLabel",{staticClass:"grid gap-1"},[t._v(" Focus Area 1 "),e("BaseInput",{staticClass:"w-full",attrs:{readonly:""},model:{value:t.proxy.num1.name,callback:function(c){t.$set(t.proxy.num1,"name",c)},expression:"proxy.num1.name"}})],1):t._e(),t.proxy.num2?e("BaseLabel",{staticClass:"grid gap-1"},[t._v(" Focus Area 2 "),e("BaseInput",{staticClass:"w-full",attrs:{readonly:""},model:{value:t.proxy.num2.name,callback:function(c){t.$set(t.proxy.num2,"name",c)},expression:"proxy.num2.name"}})],1):t._e(),t.proxy.num3?e("BaseLabel",{staticClass:"grid gap-1"},[t._v(" Focus Area 3 "),e("BaseInput",{staticClass:"w-full",attrs:{readonly:""},model:{value:t.proxy.num3.name,callback:function(c){t.$set(t.proxy.num3,"name",c)},expression:"proxy.num3.name"}})],1):t._e()],1)},it=[];const A={};var ct=I(x,nt,it,!1,ut,null,null,null);function ut(t){for(let r in A)this[r]=A[r]}const lt=function(){return ct.exports}(),v={};v.setup=(t,r)=>{const e=G("id"),c=J.read(e),y=i(()=>c.data.value),m=i(()=>{var o,a;return(a=(o=y.value)==null?void 0:o.attributes)==null?void 0:a.bitsightId}),F=i(()=>{var o,a;return(a=(o=y.value)==null?void 0:o.attributes)==null?void 0:a.bitsightAccessCompanyId}),b=rt.get(e,m),f=i(()=>b.data.value),E=tt.get(e,m),D=i(()=>E.data.value),C=et.list(e),k=i(()=>C.data.value),S=Z.list(e,m),h=i(()=>S.data.value),g=i(()=>{if(h.value){const o={};for(const a of Object.entries(h.value.analysis)){const[s,n]=a,{grade:u,standard:p,custom:_}=n;let l="";for(const B of at)B.name===s&&(l=B.text);o[s]={grade:u,standard:p,custom:_,description:l}}return o}}),M=i(()=>{if(g.value){const[o,a,s]=ot(g.value);return{num1:o,num2:a,num3:s}}}),O=["basic","foundational","organizational"],L=i(()=>{var o;if(f.value){const a=f.value,s={};for(const[n,u]of Object.entries(a))for(const p of u)n in s||(s[n]=[]),(o=s[n])==null||o.push({id:e.value,category:n,todoText:p.control.description,itemComplete:p.okay});return s}}),d=i(()=>{if(k.value){const o=m.value,a=k.value.filter(s=>s.data.supplierId===o).filter(s=>s.status==="Complete");if(a.sort((s,n)=>{if(s.data.updatedAt&&n.data.updatedAt)return st(w(s.data.updatedAt),w(n.data.updatedAt));throw new Error("Insufficient scorecards to sort")}),a.length===0)throw new Error("Scorecard not found");return a[0]}}),Q=i(()=>{if(d.value){const o=(a,s,n)=>{const u=[];for(let p=0;p<n;p++){const _=p+1,l=`${s} Product ${_}`;u.push({id:a[`${l} - mainId`]||"",name:a[`${l} - Product Option 1`]||"",description:a[`${l} - Description Option 1`],categories:[{id:a[`${l} - categoryId`]||"",name:a[`${l} - Category`]||""}],manufacturer:{name:a[`${l} - Vendor Option 1`]||""}})}return u};return[{type:"basic",description:"The Essential bundle provides the cybersecurity products that fit your company's immediate needs. This bundle represents the minimum that your company needs to be doing to prevent or mitigate cyber crime and fraud.",products:o(d.value.data,"Basic",2)},{type:"balanced",description:"The Balanced bundle offers the cybersecurity products that represent the best practices standard for your company's online operations. This bundle represents what you should be doing.",products:o(d.value.data,"Balanced",3)},{type:"advanced",description:"The Premier bundle is the top of line maturity level for cybersecurity products. This bundle represents the level of cyber maturity that your company should be striving towards to address a breadth of cyber crime and fraud attacks to your revenue, customers and reputation.",products:o(d.value.data,"Advanced",4)}]}return[]});async function V(){var u;const o=(u=d.value)==null?void 0:u.id;if(!o)return;const a=F.value||e.value,s=encodeURIComponent(a),n=await R(`${T}/companies/${s}/scorecards/${o}/pdf`,{responseType:"blob"});Y.exports.saveAs(n.data,o+".pdf")}return{id:e,company:y,bitsightId:m,cisEvaluationQuery:b,cisEvaluation:f,cisToCmmcMapping:D,scorecardsQuery:C,performanceQuery:S,performanceEvaluation:h,riskVectors:g,focusAreas:M,maturityCategories:O,maturity:L,bundle:Q,downloadFile:V}};v.components=Object.assign({AlertFriendly:q,SkeletonLoader:P,BitsightSummaryOverview:H,RiskVectorSummary:X,FocusAreasDisplay:lt,TodosChart:K,CisToCmmcMappingDisplay:z,BundleSolutionDisplay:W,DocumentDownload:j},v.components);var pt=function(){var t=this,r=t.$createElement,e=t._self._c||r;return e("main",[t.bitsightId?e("div",{staticClass:"space-y-10"},[e("SkeletonLoader",{attrs:{"is-loading":t.performanceQuery.isLoading.value,boilerplate:"ratingOverview"},scopedSlots:t._u([{key:"content",fn:function(){return[t.performanceEvaluation?e("BitsightSummaryOverview",{attrs:{rating:t.performanceEvaluation,company:t.company?t.company.name:""}}):t._e()]},proxy:!0}])}),e("div",{staticClass:"grid gap-10 lg:grid-cols-2"},[e("SkeletonLoader",{attrs:{"is-loading":!t.riskVectors,boilerplate:"title, text, text, text"},scopedSlots:t._u([{key:"content",fn:function(){return[e("div",{staticClass:"space-y-2"},[e("BaseTypography",{staticClass:"text-prime-navy",attrs:{variant:"h6",component:"h3"}},[t._v(" Risk Vector Analysis ")]),e("BaseSimpleCard",[t.riskVectors?e("RiskVectorSummary",{attrs:{value:t.riskVectors}}):t._e()],1)],1)]},proxy:!0}])}),e("SkeletonLoader",{attrs:{"is-loading":!t.performanceEvaluation||!t.company,boilerplate:"title, text, text, text"},scopedSlots:t._u([{key:"content",fn:function(){return[e("div",{staticClass:"space-y-2"},[e("BaseTypography",{staticClass:"text-prime-navy",attrs:{variant:"h6",component:"h3"}},[t._v(" Recommended Focus Areas ")]),e("BaseSimpleCard",[t.focusAreas?e("FocusAreasDisplay",{model:{value:t.focusAreas,callback:function(c){t.focusAreas=c},expression:"focusAreas"}}):t._e()],1)],1)]},proxy:!0}])})],1),e("SkeletonLoader",{attrs:{"is-loading":t.cisEvaluationQuery.isLoading.value||!t.cisEvaluation,boilerplate:"title"},scopedSlots:t._u([{key:"content",fn:function(){return[e("div",{staticClass:"space-y-2"},[e("BaseTypography",{staticClass:"text-prime-navy",attrs:{variant:"h6",component:"h3"}},[t._v(" CIS Control-Based Maturity Level Assessment Based on Externally Observed Risk Rating ")]),e("BaseSimpleCard",[t.maturity?e("TodosChart",{attrs:{value:t.maturity,"company-id":t.id,categories:t.maturityCategories,"can-add-notes":!1}}):t._e()],1)],1)]},proxy:!0}])}),t.cisToCmmcMapping?e("div",{staticClass:"space-y-2"},[e("BaseTypography",{staticClass:"text-prime-navy",attrs:{variant:"h6",component:"h3"}},[t._v(" CIS Controls Mapped to CMMC Maturity Levels ")]),e("CisToCmmcMappingDisplay",{attrs:{value:t.cisToCmmcMapping}})],1):t._e(),t.performanceEvaluation?e("div",[t.scorecardsQuery.error.value?e("AlertFriendly",{scopedSlots:t._u([{key:"title",fn:function(){return[t._v("Scorecard Not Found")]},proxy:!0},{key:"message",fn:function(){return[t._v(" It appears that we do not have a Scorecard for your company. To learn more and request a Scorecard, please contact a WhiteHawk Cyber Analyst. ")]},proxy:!0},{key:"action",fn:function(){return[t.company?e("BaseButton",{attrs:{shape:"rectangle","display-type":"success",to:{path:"/contact-us",query:{textBody:"I would like to talk with a WhiteHawk Consultant to request a scorecard for my company.",subject:"Request A Scorecard",company:t.company.name}}}},[t._v(" Request Scorecard ")]):t._e()]},proxy:!0}],null,!1,2559098050)}):e("div",{staticClass:"space-y-6"},[e("div",{staticClass:"space-y-2"},[e("BaseTypography",{staticClass:"text-prime-navy",attrs:{variant:"h6",component:"h3"}},[t._v(" Solution Options Based on Risk Rating ")]),e("BundleSolutionDisplay",{attrs:{id:t.id,bundle:t.bundle,"is-loading":t.scorecardsQuery.isLoading.value}})],1),e("BaseButton",{staticClass:"space-x-1",attrs:{shape:"rectangle"},on:{click:t.downloadFile}},[e("span",[t._v("Download Scorecard")]),e("DocumentDownload",{staticClass:"h-auto w-4 xl:w-5"})],1)],1)],1):t._e()],1):e("AlertFriendly",{scopedSlots:t._u([{key:"title",fn:function(){return[t._v("Risk Rating Not Found")]},proxy:!0},{key:"message",fn:function(){return[t._v(" It appears that we do not have a Risk Rating for your company. To learn more and view your Risk Rating, please contact a WhiteHawk Cyber Analyst. ")]},proxy:!0},{key:"action",fn:function(){return[e("BaseButton",{attrs:{shape:"rectangle","display-type":"success",to:{path:"/contact-us",query:{textBody:"I would like to talk with a WhiteHawk Consultant to request a risk rating for my company.",subject:"Services and Solutions",company:t.company?t.company.name:""}}}},[t._v(" Request Risk Rating ")])]},proxy:!0}],null,!1,1957250383)})],1)},mt=[];const $={};var dt=I(v,pt,mt,!1,yt,null,null,null);function yt(t){for(let r in $)this[r]=$[r]}const Xt=function(){return dt.exports}();export{Xt as default};