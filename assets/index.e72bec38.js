import{R as Q}from"./arrow-path.24b87f73.js";import{bs as A,L as T,an as I,c7 as G,bG as M,d as o,b as j,aK as q,aF as O,n as U}from"./index.e870dd6d.js";import{B as $,u as z}from"./BarChart.922487de.js";import{G as F,S as K}from"./ScorecardSnapshotInput.02f2b707.js";import{s as N,g as E}from"./sortBy.e3380031.js";import{u as H,a as J}from"./useCompanyOverview.4f664377.js";import{u as V}from"./useNewestQuestionnaireResponses.57d1072f.js";import{u as W}from"./useSnapshotScorecards.899c3556.js";import"./chart.c54a61e9.js";import"./GaugeChart.d6ba5476.js";import"./BasicModal.7025a961.js";import"./useCompanyWishlistItems.e5cfc516.js";import"./cloneDeep.31d4495d.js";import"./_Uint8Array.e36bcba0.js";import"./keys.0ff098cd.js";import"./_baseAssignValue.872f208c.js";import"./_copyArray.56331c81.js";import"./TabbedPanel.a90f1599.js";import"./_baseIteratee.3a7104f3.js";import"./_baseIsEqual.40d87432.js";import"./_arrayMap.dcea68f3.js";const u={};u.setup=(e,i)=>{const a=G("id"),n=M.read(a),b=o(()=>{if(n.data.value){const{id:t,name:s}=n.data.value;return{id:t,name:s}}}),d=z.list(a),r=o(()=>{const t=d.data.value;if(t){const s=N(t,"order");return E(s,"category")}}),l=o(()=>{if(r.value)return["basic","foundational","organizational"].reduce((t,s)=>{var c;return t[s]=((c=r.value)==null?void 0:c[s])||[],t},{})}),v=o(()=>{if(r.value)return["critical","next","pending"].reduce((t,s)=>{var c;return t[s]=((c=r.value)==null?void 0:c[s])||[],t},{})});async function w(){await d.refetch.value()}const y=V.get(a),f=o(()=>y.data.value);async function R(){await y.refetch.value()}const x=H.get(a),g=o(()=>x.data.value),C=o(()=>{var t,s;return(s=(t=x.data.value)==null?void 0:t.scores)==null?void 0:s.cyberPath}),P=J.get(a),h=o(()=>P.data.value),p=j(),m=o({get(){var t;return p.value?p.value:{type:"snapshot",company:b.value,questionnaireResponse:f.value,riskIndicator:{cyberScore:C.value,text:(t=g.value)==null?void 0:t.text},actionPlan:{data:v.value},maturityLevelAssessment:{data:l.value},bundles:h.value,cis:l.value?Object.values(l.value).flatMap(s=>s).map(s=>s.itemComplete):[]}},set(t){p.value=t}}),k=o(()=>Boolean(r.value&&h.value&&g.value&&f.value&&m.value)),D=q(),_=O(),S=W.create(a);async function L(){const t=await S.mutateAsync(m.value);t&&(_.success("Created Successfully"),D.push(`/admin/companies/${a.value}/scorecards/snapshot/${encodeURIComponent(t.id)}`)),_.error("Something went wrong.")}return{id:a,todos:r,maturityLevelAssessmentData:l,actionPlanData:v,latestTodos:w,latestQuestionnaireResponse:R,cyberScore:C,scorecard:m,ready:k,snapshotCreate:S,create:L}};u.components=Object.assign({BackButton:A,LoadingSpinner:T,GaugeChartDisplay:F,RefreshSvg:Q,BarChart:$,ScorecardSnapshotInput:K,PlusSvg:I},u.components);var X=function(){var e=this,i=e.$createElement,a=e._self._c||i;return a("section",{staticClass:"flex flex-col space-y-10"},[a("div",{staticClass:"flex flex-col space-y-4 sm:flex-row sm:items-center sm:space-y-0 sm:space-x-4"},[a("BackButton"),a("div",{staticClass:"flex flex-col -space-y-1"},[a("BaseTypography",{staticClass:"uppercase text-gray-500",attrs:{variant:"overline"}},[e._v(" Black Kite ")]),a("BaseTypography",{attrs:{variant:"h5",component:"h2"}},[e._v(" Snapshot Scorecard ")])],1)],1),e.ready?a("div",[a("div",{staticClass:"flex flex-col space-y-10 2xl:grid 2xl:grid-cols-3 2xl:gap-10 2xl:space-y-0"},[e.cyberScore?a("fieldset",{staticClass:"space-y-2"},[a("legend",[a("BaseTypography",{staticClass:"text-prime-navy",attrs:{variant:"h6",component:"h3"}},[e._v(" Cyber Risk Indicator ")])],1),a("div",{staticClass:"flex-1 lg:flex"},[a("GaugeChartDisplay",{staticClass:"mx-0",attrs:{value:e.cyberScore},scopedSlots:e._u([{key:"button",fn:function(){return[a("BaseButton",{staticClass:"w-full space-x-2 md:w-auto",attrs:{type:"button"},on:{click:e.latestQuestionnaireResponse}},[a("RefreshSvg",{staticClass:"-ml-1 w-5"}),a("span",[e._v("Update")])],1)]},proxy:!0}],null,!1,1877849566)})],1)]):e._e(),e.todos?a("fieldset",{staticClass:"space-y-2 2xl:col-span-2"},[a("legend",[a("BaseTypography",{staticClass:"text-prime-navy",attrs:{variant:"h6",component:"h3"}},[e._v(" Cyber Maturity Roadmap ")])],1),a("BaseSimpleCard",{staticClass:"flex flex-col space-y-4 p-4 sm:py-5 sm:px-6"},[a("div",{staticClass:"space-y-6 lg:grid lg:grid-cols-2 lg:gap-6 lg:space-y-0"},[a("div",{staticClass:"h-72 w-60 xs:w-auto 2xl:max-h-[15rem]"},[e.maturityLevelAssessmentData?a("BarChart",{attrs:{value:e.maturityLevelAssessmentData,options:{maintainAspectRatio:!1,devicePixelRatio:1}}}):e._e()],1),a("div",{staticClass:"h-72 w-60 xs:w-auto 2xl:max-h-[15rem]"},[e.actionPlanData?a("BarChart",{attrs:{value:e.actionPlanData,options:{maintainAspectRatio:!1,devicePixelRatio:1}}}):e._e()],1)]),a("div",{staticClass:"md:inline-flex"},[a("BaseButton",{staticClass:"w-full space-x-2 md:w-auto",attrs:{type:"button"},on:{click:e.latestTodos}},[a("RefreshSvg",{staticClass:"-ml-1 w-5"}),a("span",[e._v("Update")])],1)],1)])],1):e._e()]),a("form",{staticClass:"flex flex-col space-y-10",on:{submit:function(n){return n.preventDefault(),e.create.apply(null,arguments)}}},[a("ScorecardSnapshotInput",{attrs:{id:e.id},model:{value:e.scorecard,callback:function(n){e.scorecard=n},expression:"scorecard"}}),a("BaseButton",{staticClass:"space-x-2",attrs:{disabled:e.snapshotCreate.isLoading.value}},[a("PlusSvg",{staticClass:"h-auto w-4 xl:w-5"}),a("span",[e._v("Create")])],1)],1)]):a("LoadingSpinner")],1)},Y=[];const B={};var Z=U(u,X,Y,!1,aa,null,null,null);function aa(e){for(let i in B)this[i]=B[i]}const Sa=function(){return Z.exports}();export{Sa as default};
