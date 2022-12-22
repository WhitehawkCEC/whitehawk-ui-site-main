import{S as j}from"./arrow-path.5187a52b.js";import{bs as A,L as D,an as I,c7 as G,bG as M,d as o,b as $,aK as q,aF as O,n as T}from"./index.0c8230bc.js";import{G as U}from"./GaugeChart.bda90ba6.js";import{B as z,u as F}from"./BarChart.df7eff83.js";import{S as N}from"./ScorecardSnapshotInput.54297053.js";import{s as E,g as K}from"./sortBy.49a04c67.js";import{u as H,a as J}from"./useCompanyOverview.ae36bf12.js";import{u as V}from"./useNewestQuestionnaireResponses.b60aa08b.js";import{u as W}from"./useSnapshotScorecards.efe6d320.js";import"./BasicModal.3545004f.js";import"./useCompanyWishlistItems.c3a60ab6.js";import"./cloneDeep.09a1d335.js";import"./_Uint8Array.5c187ad7.js";import"./keys.800f56cd.js";import"./_baseAssignValue.b8c9a3e6.js";import"./_copyArray.56331c81.js";import"./chart.c54a61e9.js";import"./TabbedPanel.6e67d6fd.js";import"./_baseIteratee.a09e2f86.js";import"./_baseIsEqual.56c2aa08.js";import"./_arrayMap.dcea68f3.js";const u={};u.setup=(t,r)=>{const e=G("id"),n=M.read(e),w=o(()=>{if(n.data.value){const{id:a,name:s}=n.data.value;return{id:a,name:s}}}),v=F.list(e),i=o(()=>{const a=v.data.value;if(a){const s=E(a,"order");return K(s,"category")}}),l=o(()=>{if(i.value)return["basic","foundational","organizational"].reduce((a,s)=>{var c;return a[s]=((c=i.value)==null?void 0:c[s])||[],a},{})}),m=o(()=>{if(i.value)return["critical","next","pending"].reduce((a,s)=>{var c;return a[s]=((c=i.value)==null?void 0:c[s])||[],a},{})});async function B(){await v.refetch.value()}const f=V.get(e),y=o(()=>f.data.value);async function R(){await f.refetch.value()}const x=H.get(e),C=o(()=>x.data.value),h=o(()=>{var a,s;return(s=(a=x.data.value)==null?void 0:a.scores)==null?void 0:s.cyberPath}),P=J.get(e),g=o(()=>P.data.value),d=$(),p=o({get(){var a;return d.value?d.value:{type:"snapshot",company:w.value,questionnaireResponse:y.value,riskIndicator:{cyberScore:h.value,text:(a=C.value)==null?void 0:a.text},actionPlan:{data:m.value},maturityLevelAssessment:{data:l.value},bundles:g.value,cis:l.value?Object.values(l.value).flatMap(s=>s).map(s=>s.itemComplete):[]}},set(a){d.value=a}}),k=o(()=>Boolean(i.value&&g.value&&C.value&&y.value&&p.value)),L=q(),_=O(),S=W.create(e);async function Q(){const a=await S.mutateAsync(p.value);a&&(_.success("Created Successfully"),L.push(`/admin/companies/${e.value}/scorecards/snapshot/${encodeURIComponent(a.id)}`)),_.error("Something went wrong.")}return{id:e,todos:i,maturityLevelAssessmentData:l,actionPlanData:m,latestTodos:B,latestQuestionnaireResponse:R,cyberScore:h,scorecard:p,ready:k,snapshotCreate:S,create:Q}};u.components=Object.assign({BackButton:A,LoadingSpinner:D,GaugeChart:U,RefreshSvg:j,BarChart:z,ScorecardSnapshotInput:N,PlusSvg:I},u.components);var X=function(){var t=this,r=t.$createElement,e=t._self._c||r;return e("section",{staticClass:"flex flex-col space-y-6"},[e("div",[e("BackButton",{attrs:{link:`/admin/companies/${t.id}/scorecards/snapshot`}})],1),t.ready?e("div",[e("div",{staticClass:"grid grid-cols-1 gap-4 2xl:grid-cols-3"},[t.cyberScore?[e("BaseSimpleCard",{staticClass:"justify-center divide-y 2xl:col-span-1 2xl:flex-1"},[e("fieldset",{staticClass:"divide-y"},[e("legend",[e("h3",{staticClass:"p-4 font-display text-lg font-semibold"},[t._v(" Cyber Risk Indicator ")])]),e("div",{staticClass:"flex items-center justify-center p-4 2xl:h-66"},[e("div",[e("GaugeChart",{staticClass:"h-24 w-48 2xl:h-32 2xl:w-64",attrs:{"cyber-score":t.cyberScore}})],1)])]),e("div",{staticClass:"p-4"},[e("BaseButton",{staticClass:"space-x-2",attrs:{type:"button"},on:{click:t.latestQuestionnaireResponse}},[e("RefreshSvg",{staticClass:"h-auto w-4 xl:w-5"}),e("span",[t._v("Update")])],1)],1)])]:t._e(),t.todos?[e("BaseSimpleCard",{staticClass:"justify-center divide-y 2xl:col-span-2 2xl:flex-1"},[e("fieldset",{staticClass:"divide-y"},[e("legend",[e("h3",{staticClass:"p-4 font-display text-lg font-semibold"},[t._v(" Cyber Maturity Roadmap ")])]),e("div",{staticClass:"flex flex-col items-center space-y-8 p-4 xl:flex-row xl:justify-around xl:space-x-8 xl:space-y-0"},[t.maturityLevelAssessmentData?e("BarChart",{attrs:{width:96*3.34,height:96*2.5,value:t.maturityLevelAssessmentData,options:{maintainAspectRatio:!1,devicePixelRatio:1}}}):t._e(),t.actionPlanData?e("BarChart",{attrs:{width:96*3.34,height:96*2.5,value:t.actionPlanData,options:{maintainAspectRatio:!1,devicePixelRatio:1}}}):t._e()],1)]),e("div",{staticClass:"p-4"},[e("BaseButton",{staticClass:"space-x-2",attrs:{type:"button"},on:{click:t.latestTodos}},[e("RefreshSvg",{staticClass:"h-auto w-4 xl:w-5"}),e("span",[t._v("Update")])],1)],1)])]:t._e()],2),e("form",{staticClass:"flex flex-col space-y-6",on:{submit:function(n){return n.preventDefault(),t.create.apply(null,arguments)}}},[e("ScorecardSnapshotInput",{attrs:{id:t.id},model:{value:t.scorecard,callback:function(n){t.scorecard=n},expression:"scorecard"}}),e("div",{staticClass:"lg:inline-flex"},[e("BaseButton",{staticClass:"w-full space-x-2 lg:w-auto",attrs:{disabled:t.snapshotCreate.isLoading.value}},[e("PlusSvg",{staticClass:"h-auto w-4 xl:w-5"}),e("span",[t._v("Create")])],1)],1)],1)]):e("div",[e("LoadingSpinner")],1)])},Y=[];const b={};var Z=T(u,X,Y,!1,ee,null,null,null);function ee(t){for(let r in b)this[r]=b[r]}const Se=function(){return Z.exports}();export{Se as default};
