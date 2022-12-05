import{Q as D}from"./QuestionnaireLayout.0b770605.js";import{c as a,n as p,cv as A,bo as H,b as W,r as L,L as z,c5 as T,b$ as G,b_ as V,aj as Q}from"./index.76f70903.js";import{a as X}from"./index.ebbce841.js";import{T as J}from"./ToolTip.81410496.js";import{u as C}from"./active-questionnaire.ac65f380.js";import"./ProgressBar.46c8c7ef.js";const b={};b.props={score:{key:"score",required:!0,type:Number},max:{key:"max",required:!0,type:Number}};b.setup=(e,s)=>{const t=e,n=a(()=>200-t.score/t.max*200),r=a(()=>`gradient-${Math.random()}`),o=a(()=>t.score>=740?"#10b981":t.score>=640?"#fde68a":"#ef4444");return{fill:n,gradientId:r,displayColor:o}};var K=function(){var e=this,s=e.$createElement,t=e._self._c||s;return t("svg",{attrs:{viewBox:"0 0 90 80",preserveAspectRatio:"none"}},[t("defs",[t("linearGradient",{attrs:{id:`${e.gradientId}`,x1:"15%",y1:"100%",x2:"80%",y2:"100%"}},[t("stop",{attrs:{offset:"0%","stop-color":`${e.displayColor}`}}),t("stop",{attrs:{offset:"100%","stop-color":`${e.displayColor}`}})],1)],1),t("path",{staticClass:"stroke-current text-gray-200 shadow-inner",attrs:{d:"M20,75 a40,40,0,1,1,50,0",fill:"none","stroke-linecap":"round","stroke-width":"3"}}),t("path",{staticClass:"filling transition duration-300",style:`--fill: ${e.fill}`,attrs:{d:"M20,75 a40,40,0,1,1,50,0",fill:"none",stroke:`url(#${e.gradientId})`,"stroke-dasharray":"200","stroke-dashoffset":"200","stroke-linecap":"round","stroke-width":"3"}})])},U=[];const k={};var Y=p(b,K,U,!1,Z,"62ebebb3",null,null);function Z(e){for(let s in k)this[s]=k[s]}const ee=function(){return Y.exports}(),v={};v.props={score:{key:"score",required:!0,type:Number},max:{key:"max",required:!0,type:Number}};v.setup=(e,s)=>{const t=e;return{percentage:a(()=>X(Math.round(t.score*100/t.max)))}};v.components=Object.assign({QuestionnaireProgressBar:ee},v.components);var te=function(){var e=this,s=e.$createElement,t=e._self._c||s;return t("div",{staticClass:"relative flex items-center justify-center p-4"},[t("div",{staticClass:"absolute flex items-center"},[t("BaseTypography",{staticClass:"text-blue-800",attrs:{variant:"h2"}},[e._v(" "+e._s(e.percentage)+" ")])],1),t("div",{staticClass:"relative w-44 sm:w-56"},[t("QuestionnaireProgressBar",{attrs:{score:e.score,max:e.max}})],1)])},se=[];const B={};var ne=p(v,te,se,!1,re,null,null,null);function re(e){for(let s in B)this[s]=B[s]}const P=function(){return ne.exports}(),d={};d.props={score:{key:"score",required:!0,type:Number},max:{key:"max",required:!0,type:Number}};d.setup=(e,s)=>({});d.components=Object.assign({DotsSquare:A,QuestionnaireProgressBarText:P},d.components);var ae=function(){var e=this,s=e.$createElement,t=e._self._c||s;return t("div",{staticClass:"relative mx-auto flex max-w-xs flex-col items-center justify-center overflow-hidden rounded-xl bg-gradient-to-br from-blue-100 via-white to-white px-4 py-8 shadow-md sm:max-w-sm sm:rounded-3xl xl:max-w-none xl:p-12"},[t("div",{staticClass:"absolute top-full left-full -translate-y-1/3 -translate-x-1/3 rotate-45 transform xl:-translate-y-1/2"},[t("DotsSquare",{attrs:{color:"blue"}})],1),t("QuestionnaireProgressBarText",{attrs:{score:e.score,max:e.max}})],1)},oe=[];const j={};var ie=p(d,ae,oe,!1,ce,null,null,null);function ce(e){for(let s in j)this[s]=j[s]}const le=function(){return ie.exports}(),m={};m.props={value:{key:"value",required:!0,type:null}};m.setup=(e,s)=>({});m.components=Object.assign({WaveForm:H,QuestionnaireScoreDisplay:le},m.components);var ue=function(){var e=this,s=e.$createElement,t=e._self._c||s;return t("div",{staticClass:"relative flex flex-col items-center justify-center lg:grid lg:grid-cols-12"},[t("div",{staticClass:"absolute top-36 w-full opacity-25 sm:top-40 lg:hidden"},[t("WaveForm")],1),t("div",{staticClass:"relative -mb-36 lg:col-span-4 lg:col-start-1 lg:row-start-1 lg:mb-0"},[t("div",{staticClass:"px-6 md:px-8 lg:px-4 lg:pl-0"},[t("QuestionnaireScoreDisplay",{attrs:{score:e.value.score,max:e.value.max}})],1)]),t("BaseSimpleCard",{staticClass:"pt-32 lg:col-span-10 lg:col-start-3 lg:row-start-1 lg:h-fit lg:p-0"},[t("div",{staticClass:"grid items-center gap-5 px-6 py-10 sm:p-8 lg:grid-cols-10 lg:col-start-3 lg:gap-0 lg:p-6 text-center lg:text-left"},[t("div",{staticClass:"grid gap-5 lg:col-span-10 lg:col-start-3"},[t("BaseTypography",{staticClass:"text-prime-navy",attrs:{component:"h2",variant:"h5"}},[e._v(" "+e._s(e.value.title)+" ")]),t("BaseTypography",{staticClass:"text-gray-600",attrs:{component:"p",variant:"p1"}},[e._v(" "+e._s(e.value.description)+" ")])],1)])])],1)},pe=[];const R={};var _e=p(m,ue,pe,!1,ve,null,null,null);function ve(e){for(let s in R)this[s]=R[s]}const de=function(){return _e.exports}(),f={};f.props={question:{key:"question",required:!0,type:null},index:{key:"index",required:!0,type:Number}};f.setup=(e,s)=>{const t=e,n=a(()=>{var i;return(i=t.question.id)==null?void 0:i.value}),r=C(),o=a(()=>n.value?r.questionScore(n.value):0),l=a(()=>{var _;const i=(_=t.question.answerSet)==null?void 0:_.answers.find(w=>{var h;return((h=w.id)==null?void 0:h.value)===n.value});if(i)return i.value}),c=a(()=>Boolean(o.value||l.value)),u=a(()=>c.value?{type:"info",text:l.value}:{type:"warn",text:"This question has not been answered yet."});return{score:o,text:l,toolTipInfo:u}};f.components=Object.assign({ToolTip:J},f.components);var me=function(){var e=this,s=e.$createElement,t=e._self._c||s;return t("div",{staticClass:"flex items-center justify-between p-4"},[t("div",{staticClass:"flex items-center space-x-4"},[t("BaseLink",{attrs:{"display-type":"primary-prime",to:"#"}},[e._v(" "+e._s(`Question ${e.index+1}`)+" ")]),t("ToolTip",{attrs:{type:e.toolTipInfo.type}},[e._v(" "+e._s(e.toolTipInfo.text)+" ")])],1),t("div",[e.question.questionType!=="TEXTAREA"?t("BaseTypography",{staticClass:"text-gray-500",attrs:{variant:"p1"}},[e._v(" "+e._s(`Score: ${e.score}`)+" ")]):t("BaseTypography",{staticClass:"text-gray-500",attrs:{variant:"p1"}},[e._v(" "+e._s(`Response: ${e.text}`)+" ")])],1)])},fe=[];const E={};var xe=p(f,me,fe,!1,ye,null,null,null);function ye(e){for(let s in E)this[s]=E[s]}const ge=function(){return xe.exports}(),x={};x.props={section:{key:"section",required:!0,type:null}};x.setup=(e,s)=>{const t=e,n=a(()=>{var u;return(u=t.section.id)==null?void 0:u.value}),r=C(),o=a(()=>n.value&&r.sectionTotal(n.value)||0),l=a(()=>n.value&&r.sectionMax(n.value)||0),c=a(()=>t.section.questions);return{total:o,max:l,questions:c}};x.components=Object.assign({QuestionnaireProgressBarText:P,QuestionOverview:ge},x.components);var he=function(){var e=this,s=e.$createElement,t=e._self._c||s;return t("div",{staticClass:"flex flex-col divide-y"},[t("QuestionnaireProgressBarText",{attrs:{score:e.total,max:e.max}}),t("ul",{staticClass:"divide-y"},e._l(e.questions,function(n,r){return t("li",{key:r},[t("QuestionOverview",{attrs:{question:n,index:r}})],1)}),0)],1)},$e=[];const M={};var Ce=p(x,he,$e,!1,be,null,null,null);function be(e){for(let s in M)this[s]=M[s]}const we=function(){return Ce.exports}(),y={};y.props={section:{key:"section",required:!0,type:null}};y.setup=(e,s)=>{const t=e,n=L(!1),r=a(()=>{var u;return(u=t.section.id)==null?void 0:u.value}),o=C(),l=a(()=>{if(r.value)return o.sectionTotal(r.value)}),c=a(()=>{if(r.value)return o.sectionMax(r.value)});return{isExpanded:n,total:l,max:c}};y.components=Object.assign({SectionDetails:we,ToggleButton:W},y.components);var qe=function(){var e=this,s=e.$createElement,t=e._self._c||s;return t("div",{staticClass:"flex flex-col space-y-2 my-1"},[t("div",{staticClass:"flex flex-col items-start -space-y-1 lg:flex-row lg:justify-between lg:items-center lg:space-y-0"},[t("BaseTypography",{staticClass:"text-gray-500 lg:order-2",attrs:{variant:"overline"}},[e._v(" "+e._s(e.section.questions.length)+" Questions ")]),t("BaseTypography",{staticClass:"text-prime-navy lg:order-1",attrs:{variant:"h6"}},[e._v(" "+e._s(e.section.name)+" ")])],1),t("div",{staticClass:"flex items-center space-x-2 justify-between"},[t("BaseSimpleCard",{staticClass:"flex flex-1"},[e.isExpanded?[t("SectionDetails",{attrs:{section:e.section}})]:t("div",{staticClass:"grid gap-4 grid-cols-2 sm:gap-6 items-center p-4"},[t("div",{staticClass:"flex flex-col items-center"},[t("BaseTypography",{staticClass:"text-gray-500",attrs:{variant:"p1"}},[e._v(" Total Score ")]),t("BaseTypography",{staticClass:"text-prime-indigo",attrs:{variant:"h2"}},[e._v(" "+e._s(e.total)+" ")])],1),t("div",{staticClass:"flex flex-col items-center"},[t("BaseTypography",{staticClass:"text-gray-500",attrs:{variant:"p1"}},[e._v(" Max Score ")]),t("BaseTypography",{staticClass:"text-prime-indigo",attrs:{variant:"h2"}},[e._v(" "+e._s(e.max)+" ")])],1)])],2),t("ToggleButton",{model:{value:e.isExpanded,callback:function(n){e.isExpanded=n},expression:"isExpanded"}})],1)])},Se=[];const O={};var Te=p(y,qe,Se,!1,Qe,null,null,null);function Qe(e){for(let s in O)this[s]=O[s]}const ke=function(){return Te.exports}(),g={};g.props={value:{key:"value",required:!0,type:null}};g.setup=(e,s)=>{const t=e,n=a(()=>t.value),r=C(),o=a(()=>({title:"Total Score / Overview",description:"Lorem ipsum dolor sit amet consectetur, adipisicing elit. Veritatis saepe ullam laborum accusantium itaque, enim commodinumquam incidunt, id autem pariatur sit ut qui libero eos amet molestias inventore ab.",score:r.riskScoreTotal,max:r.riskScoreMax})),l=a(()=>{var i;return(i=n.value)==null?void 0:i.sections}),c=L(!1);function u(i){const _=i.currentTarget,h=i.srcElement.offsetHeight,q=_.scrollTop,S=_.scrollHeight-q;if(S===h){c.value=!0;return}else if(S===q){c.value=!1;return}c.value=!1}return{overview:o,sections:l,atBottom:c,handleScroll:u}};g.components=Object.assign({QuestionnaireSummaryOverview:de,SectionOverview:ke},g.components);var Be=function(){var e=this,s=e.$createElement,t=e._self._c||s;return t("section",{staticClass:"space-y-8"},[t("QuestionnaireSummaryOverview",{attrs:{value:e.overview}}),t("div",{staticClass:"grid gap-4 h-120 space-y-8 overflow-y-scroll",class:[{"fade-bottom":!e.atBottom}],on:{scroll:e.handleScroll}},e._l(e.sections,function(n,r){return t("div",{key:r,staticClass:"flex items-center"},[t("SectionOverview",{attrs:{index:r,section:n}})],1)}),0)],1)},je=[];const F={};var Re=p(g,Be,je,!1,Ee,"1a06c873",null,null);function Ee(e){for(let s in F)this[s]=F[s]}const Me=function(){return Re.exports}(),$={};$.setup=(e,s)=>{const t=T("id"),n=T("questionnaireId"),r=G.read(n),o=a(()=>r.data.value||V.CustomQuestionnaire.create());return{id:t,questionnaireId:n,questionnaireRead:r,questionnaire:o}};$.components=Object.assign({LoadingSpinner:z,QuestionnaireLayout:D,QuestionnaireReview:Me},$.components);var Oe=function(){var e=this,s=e.$createElement,t=e._self._c||s;return t("div",{staticClass:"h-full bg-gradient-to-br from-gray-100 via-gray-50 to-blue-50"},[e.questionnaireRead.isLoading.value?t("LoadingSpinner"):t("QuestionnaireLayout",{attrs:{"account-id":e.id,"q-id":e.questionnaireId,value:e.questionnaire}},[t("section",{staticClass:"space-y-6"},[t("BaseTypography",{attrs:{variant:"h5",component:"h2"}},[e._v(" Review Questionnaire ")]),t("QuestionnaireReview")],1)])],1)},Fe=[];const I={};var N=p($,Oe,Fe,!1,Ie,null,null,null);function Ie(e){for(let s in I)this[s]=I[s]}typeof Q=="function"&&Q(N);const ze=function(){return N.exports}();export{ze as default};