import{r as z,u as ee,a as te,b,c as se,d as A,e as K,s as Y,_ as Ie,f as Ae,g as ke,h as ye,R as xe,i as ge,j as Se,Q as Te,v as Qe,k as Be}from"./QuestionnaireSidebar.dfe61bea.js";import{aj as k,c as n,cy as W,r as V,aA as G,n as g,cv as $e,bo as Re,ac as je,c5 as ae,cz as Ee,cA as Oe,b$ as Me,b_ as De,cB as re,cC as Fe,bK as Pe,L as Ne,ak as oe}from"./index.2cafd56c.js";import{a as Le}from"./index.ebbce841.js";import{T as Ue}from"./ToolTip.eb39eb2a.js";import{P as Je}from"./ProgressBar.957d08cd.js";import{s as We}from"./index.be140039.js";import"./keys.b965c3d3.js";import"./_Uint8Array.522044d2.js";import"./_baseIteratee.0a54f1fd.js";import"./_baseIsEqual.0ed18f51.js";import"./_arrayMap.dcea68f3.js";import"./_isIterateeCall.34efd6bb.js";import"./_baseAssignValue.5a4c4db7.js";import"./_baseUniq.1547262d.js";import"./_baseEach.5cb3d0e1.js";import"./cloneDeep.b61f82d9.js";import"./_copyArray.56331c81.js";import"./isEqual.0759013f.js";import"./values.574746bf.js";const Ge=k({props:{...z()},setup(e){const s=ee(te(e)),t=b(),o=n(()=>t.data),c=n(()=>t.currentQuestion),l=n(()=>{var a;return(a=c.value)==null?void 0:a.questionType}),v=n(()=>l.value==="TEXTAREA"),m=n(()=>l.value==="CHECKBOX"),p=n(()=>{const a="questions.";return parseInt(e.path.substring(e.path.indexOf(a)+a.length))}),f=n(()=>t.takenId),h=W.list(f),_=n(()=>h.data.value||[]);t.setAnswers(_.value);const r=n(()=>_.value.find(a=>{var i,u,S;return((i=a.questionId)==null?void 0:i.value)===((S=(u=c.value)==null?void 0:u.id)==null?void 0:S.value)})),y=n(()=>{var a,i;return Array.isArray(r.value)?[...new Set(...r.value.map(u=>u.answerId.value))]:(i=(a=r.value)==null?void 0:a.answerId)==null?void 0:i.value}),C=n({get(){return y.value},set(a){var u,S,Q,q,B,R,j;if(!a){Array.isArray(r.value)||(S=(u=r.value)==null?void 0:u.questionAnswerId)!=null&&S.value&&Z((q=(Q=r.value)==null?void 0:Q.questionAnswerId)==null?void 0:q.value);return}if(Array.isArray(a)&&Array.isArray(r.value)&&!a[0]){for(const x of r.value)(B=x.questionAnswerId)!=null&&B.value&&Z((R=x.questionAnswerId)==null?void 0:R.value);return}const i=r.value;if(typeof a!="string")for(const x of a){if(r.value&&Array.isArray(r.value))for(const $ of r.value)$.answerId&&$.questionAnswerId&&(a.includes($.answerId.value)||Z($.questionAnswerId.value));if(Array.isArray(a)){if(!Array.isArray(i))i!=null&&i.answerId&&(i.answerId.value=x,U(i));else if(Array.isArray(y.value)&&!y.value.includes(x)){const $=J(x);$&&d($)}}return}if(!Array.isArray(i))((j=i==null?void 0:i.answerId)==null?void 0:j.value)&&typeof a=="string"&&(i.answerId.value=a,U(i));else if(typeof a=="string"){const x=J(a);x&&d(x)}}}),w=V(),I=n({get(){var a;if(w.value)return w.value;if(!Array.isArray(r.value))return(a=r.value)==null?void 0:a.answerText},set(a){a&&(w.value=a)}}),L=W.create();async function d(a){await L.mutateAsync(a)}const T=W.update();async function U(a){await T.mutateAsync(a)}const qe=W.delete();async function Z(a){await qe.mutateAsync(a)}function be(a){var i,u,S;return(S=(u=(i=c.value)==null?void 0:i.answerSet)==null?void 0:u.answers)==null?void 0:S.find(Q=>{var q;return((q=Q.id)==null?void 0:q.value)===a})}const J=function(a){var q,B,R,j,x,$;if(!o.value||!f.value)return;let i;a!=null&&(i=be(a));const u=((q=i==null?void 0:i.id)==null?void 0:q.value)||((R=(B=c.value)==null?void 0:B.id)==null?void 0:R.value),S=(i==null?void 0:i.riskScore)||0;return{responseId:{value:f.value},questionnaireId:{value:((j=o.value.id)==null?void 0:j.value)||""},questionId:{value:(($=(x=c.value)==null?void 0:x.id)==null?void 0:$.value)||""},answerId:{value:u||""},riskScore:S,answerText:I.value||""}};return G(()=>I.value,a=>{const i=r.value;if(i&&a)if(!Array.isArray(i))i.answerText=a,U(i);else if(i[0])for(const u of i)u.answerText=a,U(u);else{const u=J(void 0);u&&d(u)}else{const u=J(void 0);u&&d(u)}},{deep:!0,immediate:!0}),G(()=>h.data.value,a=>{a&&t.setAnswers(a)},{deep:!0,immediate:!0}),{...s,selected:C,inputChanges:w,currentQuestion:c,currentAnswer:r,isTextarea:v,isMultiselect:m,currentQuestionIndex:p,questionType:l,questionnaire:o,currentAnswerIds:y}},methods:{composePaths:se,createDefaultValue:A,addButtonClick(){this.addItem(this.control.path,A(this.control.schema))()}}}),He={renderer:Ge,tester:K(1e3,Y("answers"))},Xe=k({components:{ControlWrapper:Ie},props:{...z()},setup(e){return Ae(ke(e))}}),ze={renderer:Xe,tester:K(1e3,Y("text"))},Ke=k({props:{questionIndex:{required:!0,type:Number,default:0},totalQuestions:{required:!0,type:Number,default:0}}});var Ye=function(){var e=this,s=e.$createElement,t=e._self._c||s;return t("BaseSimpleCard",{staticClass:"p-5 space-y-6"},[t("div",{staticClass:"flex justify-end"},[t("BaseOverline",{staticClass:"uppercase text-gray-500"},[e._v(" Question "+e._s(e.questionIndex+1)+" of "+e._s(e.totalQuestions)+" ")])],1),e._t("default")],2)},Ze=[];const ie={};var Ve=g(Ke,Ye,Ze,!1,et,null,null,null);function et(e){for(let s in ie)this[s]=ie[s]}const tt=function(){return Ve.exports}(),st=k({components:{QuestionListElement:tt,DispatchRenderer:ye},props:{...z()},setup(e){const s=ee(te(e)),t=b(),o=n(()=>t.data),c=n({get(){return t.questionIndex},set(_){t.setQuestionIndex(_)}}),l=n({get(){return t.sectionIndex},set(_){t.setSectionIndex(_)}}),v=n(()=>{var _,r;return((r=(_=o.value)==null?void 0:_.sections)==null?void 0:r.length)||0}),m=n(()=>l.value>0),p=n(()=>l.value<v.value-1),f=n(()=>{var _,r,y;if(m.value)return((y=(r=(_=o.value)==null?void 0:_.sections)==null?void 0:r[l.value-1])==null?void 0:y.questions.length)||0});function h(){f.value&&(c.value=f.value-1,l.value--)}return{...s,data:o,questionIndex:c,prevQuestionCount:f,sectionIndex:l,sectionCount:v,hasPrevSection:m,hasNextSection:p,toEndOfPrevSection:h}},computed:{arraySchema(){return xe.schema(this.control.rootSchema,this.control.uischema.scope,this.control.rootSchema)},detailUiSchema(){const e=ge(this.control.uischemas,this.control.schema,this.control.uischema.scope,this.control.path,"Group",this.control.uischema,this.control.rootSchema);if(Se(this.control.path))e.type="VerticalLayout";else{const s=e;s.label=this.control.label}return e}},methods:{composePaths:se,createDefaultValue:A,addButtonClick(){this.addItem(this.control.path,A(this.control.schema))()}}}),nt={renderer:st,tester:K(1e3,Y("questions"))},E={};E.props={title:{key:"title",required:!0,type:String}};E.setup=(e,s)=>({});E.components=Object.assign({DotsSquare:$e},E.components);var at=function(){var e=this,s=e.$createElement,t=e._self._c||s;return t("section",{staticClass:"relative flex h-28 w-full flex-col items-center justify-center overflow-hidden bg-gradient-to-bl from-prime-navy via-blue-900 to-prime-navy"},[t("div",{staticClass:"absolute bottom-full right-full translate-y-3/4 translate-x-3/4 rotate-45 transform"},[t("DotsSquare",{attrs:{color:"navy"}})],1),t("div",{staticClass:"absolute top-full left-full -translate-y-3/4 -translate-x-3/4 rotate-45 transform"},[t("DotsSquare",{attrs:{color:"navy"}})],1),t("div",{staticClass:"relative px-4 sm:px-0 max-w-sm sm:max-w-xl lg:max-w-2xl xl:max-w-4xl"},[t("BaseTypography",{staticClass:"text-center text-white",attrs:{component:"h1",variant:"h3"}},[e._v(" "+e._s(e.title)+" ")])],1)])},rt=[];const ce={};var ot=g(E,at,rt,!1,it,null,null,null);function it(e){for(let s in ce)this[s]=ce[s]}const ct=function(){return ot.exports}(),ne={};ne.props={score:{key:"score",required:!0,type:Number},max:{key:"max",required:!0,type:Number}};ne.setup=(e,s)=>{const t=e,o=n(()=>200-t.score/t.max*200),c=n(()=>`gradient-${Math.random()}`),l=n(()=>t.score>=740?"#10b981":t.score>=640?"#fde68a":"#ef4444");return{fill:o,gradientId:c,displayColor:l}};var lt=function(){var e=this,s=e.$createElement,t=e._self._c||s;return t("svg",{attrs:{viewBox:"0 0 90 80",preserveAspectRatio:"none"}},[t("defs",[t("linearGradient",{attrs:{id:`${e.gradientId}`,x1:"15%",y1:"100%",x2:"80%",y2:"100%"}},[t("stop",{attrs:{offset:"0%","stop-color":`${e.displayColor}`}}),t("stop",{attrs:{offset:"100%","stop-color":`${e.displayColor}`}})],1)],1),t("path",{staticClass:"stroke-current text-gray-200 shadow-inner",attrs:{d:"M20,75 a40,40,0,1,1,50,0",fill:"none","stroke-linecap":"round","stroke-width":"3"}}),t("path",{staticClass:"filling transition duration-300",style:`--fill: ${e.fill}`,attrs:{d:"M20,75 a40,40,0,1,1,50,0",fill:"none",stroke:`url(#${e.gradientId})`,"stroke-dasharray":"200","stroke-dashoffset":"200","stroke-linecap":"round","stroke-width":"3"}})])},ut=[];const le={};var vt=g(ne,lt,ut,!1,pt,"e9b6ad54",null,null);function pt(e){for(let s in le)this[s]=le[s]}const dt=function(){return vt.exports}(),O={};O.props={score:{key:"score",required:!0,type:Number},max:{key:"max",required:!0,type:Number}};O.setup=(e,s)=>{const t=e,o=n(()=>Math.round(t.score*100/t.max));return{toPercentage:Le,percentage:o}};O.components=Object.assign({QuestionnaireProgressBar:dt},O.components);var mt=function(){var e=this,s=e.$createElement,t=e._self._c||s;return t("div",{staticClass:"relative flex items-center justify-center"},[t("div",{staticClass:"absolute flex items-center"},[t("BaseTypography",{staticClass:"text-blue-800",attrs:{variant:"h2"}},[e._v(" "+e._s(e.toPercentage(e.percentage))+" ")])],1),t("div",{staticClass:"relative w-44 sm:w-56"},[t("QuestionnaireProgressBar",{attrs:{score:e.score,max:e.max}})],1)])},_t=[];const ue={};var ft=g(O,mt,_t,!1,ht,null,null,null);function ht(e){for(let s in ue)this[s]=ue[s]}const Ce=function(){return ft.exports}(),M={};M.props={score:{key:"score",required:!0,type:Number},max:{key:"max",required:!0,type:Number}};M.setup=(e,s)=>({});M.components=Object.assign({DotsSquare:$e,QuestionnaireProgressBarText:Ce},M.components);var yt=function(){var e=this,s=e.$createElement,t=e._self._c||s;return t("div",{staticClass:"relative mx-auto flex max-w-xs flex-col items-center justify-center overflow-hidden rounded-xl bg-gradient-to-br from-blue-100 via-white to-white px-4 py-8 shadow-md sm:max-w-sm sm:rounded-3xl xl:max-w-none xl:p-12"},[t("div",{staticClass:"absolute top-full left-full -translate-y-1/3 -translate-x-1/3 rotate-45 transform xl:-translate-y-1/2"},[t("DotsSquare",{attrs:{color:"blue"}})],1),t("QuestionnaireProgressBarText",{attrs:{score:e.score,max:e.max}})],1)},xt=[];const ve={};var gt=g(M,yt,xt,!1,St,null,null,null);function St(e){for(let s in ve)this[s]=ve[s]}const $t=function(){return gt.exports}(),D={};D.props={value:{key:"value",required:!0,type:null}};D.setup=(e,s)=>({});D.components=Object.assign({WaveForm:Re,QuestionnaireScoreDisplay:$t},D.components);var Ct=function(){var e=this,s=e.$createElement,t=e._self._c||s;return t("div",{staticClass:"relative flex flex-col items-center justify-center lg:grid lg:grid-cols-12"},[t("div",{staticClass:"absolute top-36 w-full opacity-25 sm:top-40 lg:hidden"},[t("WaveForm")],1),t("div",{staticClass:"relative -mb-36 lg:col-span-4 lg:col-start-1 lg:row-start-1 lg:mb-0"},[t("div",{staticClass:"px-6 md:px-8 lg:px-4 lg:pl-0"},[t("QuestionnaireScoreDisplay",{attrs:{score:e.value.score,max:e.value.max}})],1)]),t("BaseSimpleCard",{staticClass:"pt-32 lg:col-span-10 lg:col-start-3 lg:row-start-1 lg:h-fit lg:p-0"},[t("div",{staticClass:"grid items-center gap-5 px-6 py-10 sm:p-8 lg:grid-cols-10 lg:col-start-3 lg:gap-0 lg:p-6 text-center lg:text-left"},[t("div",{staticClass:"grid gap-5 lg:col-span-10 lg:col-start-3"},[t("BaseTypography",{staticClass:"text-prime-navy",attrs:{component:"h2",variant:"h5"}},[e._v(" "+e._s(e.value.title)+" ")]),t("BaseTypography",{staticClass:"text-gray-600",attrs:{component:"p",variant:"p1"}},[e._v(" "+e._s(e.value.description)+" ")])],1)])])],1)},wt=[];const pe={};var qt=g(D,Ct,wt,!1,bt,null,null,null);function bt(e){for(let s in pe)this[s]=pe[s]}const It=function(){return qt.exports}(),F={};F.props={question:{key:"question",required:!0,type:null},index:{key:"index",required:!0,type:Number}};F.setup=(e,s)=>{const t=e,o=n(()=>{var f;return(f=t.question.id)==null?void 0:f.value}),c=b(),l=n(()=>o.value?c.questionScore(o.value):0),v=n(()=>{var h;const f=(h=t.question.answerSet)==null?void 0:h.answers.find(_=>{var r;return((r=_.id)==null?void 0:r.value)===o.value});if(f)return f.value}),m=n(()=>Boolean(l.value||v.value)),p=n(()=>m.value?{type:"info",text:v.value}:{type:"warn",text:"This question has not been answered yet."});return{score:l,text:v,toolTipInfo:p}};F.components=Object.assign({ToolTip:Ue},F.components);var At=function(){var e=this,s=e.$createElement,t=e._self._c||s;return t("div",{staticClass:"flex items-center justify-between"},[t("div",{staticClass:"flex items-center space-x-4"},[t("BaseLink",{attrs:{"display-type":"primary-prime",to:"#"}},[e._v(" "+e._s(`Question ${e.index+1}`)+" ")]),t("ToolTip",{attrs:{type:e.toolTipInfo.type}},[e._v(" "+e._s(e.toolTipInfo.text)+" ")])],1),t("div",[e.question.questionType!=="TEXTAREA"?t("BaseTypography",{staticClass:"text-gray-500",attrs:{variant:"p1"}},[e._v(" "+e._s(`Score: ${e.score}`)+" ")]):t("BaseTypography",{staticClass:"text-gray-500",attrs:{variant:"p1"}},[e._v(" "+e._s(`Response: ${e.text}`)+" ")])],1)])},kt=[];const de={};var Tt=g(F,At,kt,!1,Qt,null,null,null);function Qt(e){for(let s in de)this[s]=de[s]}const Bt=function(){return Tt.exports}(),P={};P.props={section:{key:"section",required:!0,type:null}};P.setup=(e,s)=>{const t=e,o=n(()=>{var p;return(p=t.section.id)==null?void 0:p.value}),c=b(),l=n(()=>o.value&&c.sectionTotal(o.value)||0),v=n(()=>o.value&&c.sectionMax(o.value)||0),m=n(()=>t.section.questions);return{total:l,max:v,questions:m}};P.components=Object.assign({QuestionnaireProgressBarText:Ce,QuestionOverview:Bt},P.components);var Rt=function(){var e=this,s=e.$createElement,t=e._self._c||s;return t("div",{staticClass:"flex flex-col space-y-2"},[t("BaseTypography",{staticClass:"text-prime-navy",attrs:{variant:"h6"}},[e._v(" "+e._s(e.section.name)+" ")]),t("BaseSimpleCard",[t("ul",{staticClass:"divide-y"},[t("div",{staticClass:"p-4"},[t("QuestionnaireProgressBarText",{attrs:{score:e.total,max:e.max}})],1),e._l(e.questions,function(o,c){return t("li",{key:c,staticClass:"p-4"},[t("QuestionOverview",{attrs:{question:o,index:c}})],1)})],2)])],1)},jt=[];const me={};var Et=g(P,Rt,jt,!1,Ot,null,null,null);function Ot(e){for(let s in me)this[s]=me[s]}const Mt=function(){return Et.exports}(),N={};N.props={section:{key:"section",required:!0,type:null},isExpanded:{key:"isExpanded",required:!0,type:Boolean}};N.setup=(e,s)=>{const t=e,o=n(()=>{var m;return(m=t.section.id)==null?void 0:m.value}),c=b(),l=n(()=>{if(o.value)return c.sectionTotal(o.value)}),v=n(()=>{if(o.value)return c.sectionMax(o.value)});return{total:l,max:v}};N.components=Object.assign({ChevronRightSvg:je},N.components);var Dt=function(){var e=this,s=e.$createElement,t=e._self._c||s;return t("div",{staticClass:"space-y-2"},[t("div",{staticClass:"flex flex-col items-start lg:flex-row lg:justify-between lg:items-center"},[t("BaseTypography",{staticClass:"text-prime-navy",attrs:{variant:"h6"}},[e._v(" "+e._s(e.section.name)+" ")]),t("BaseTypography",{staticClass:"text-gray-500",attrs:{variant:"overline"}},[e._v(" "+e._s(e.section.questions.length)+" questions ")])],1),t("BaseSimpleCard",{staticClass:"flex justify-between items-center p-4 md:py-6"},[t("div",{staticClass:"flex-1 grid gap-4 sm:grid-cols-2 sm:gap-6"},[t("div",{staticClass:"flex flex-col items-center"},[t("BaseTypography",{staticClass:"text-gray-500",attrs:{variant:"p1"}},[e._v(" Total Score ")]),t("BaseTypography",{staticClass:"text-prime-indigo",attrs:{variant:"h2"}},[e._v(" "+e._s(e.total)+" ")])],1),t("div",{staticClass:"flex flex-col items-center"},[t("BaseTypography",{staticClass:"text-gray-500",attrs:{variant:"p1"}},[e._v(" Max Score ")]),t("BaseTypography",{staticClass:"text-prime-indigo",attrs:{variant:"h2"}},[e._v(" "+e._s(e.max)+" ")])],1)]),t("ChevronRightSvg",{staticClass:"shrink-0 h-5 w-5 text-gray-400",attrs:{"aria-hidden":"true"}})],1)],1)},Ft=[];const _e={};var Pt=g(N,Dt,Ft,!1,Nt,null,null,null);function Nt(e){for(let s in _e)this[s]=_e[s]}const Lt=function(){return Pt.exports}(),H={};H.setup=(e,s)=>{const t=b(),o=n(()=>t.data),c=n(()=>({title:"Total Score / Overview",description:"Lorem ipsum dolor sit amet consectetur, adipisicing elit. Veritatis saepe ullam laborum accusantium itaque, enim commodinumquam incidunt, id autem pariatur sit ut qui libero eos amet molestias inventore ab.",score:t.riskScoreTotal,max:t.riskScoreMax})),l=n(()=>{var r;return(r=o.value)==null?void 0:r.sections}),v=n({get(){return t.sectionIndex},set(r){t.setSectionIndex(r)}}),m=n(()=>t.currentSection),p=V(!1);function f(r){v.value===r?p.value=!p.value:p.value=!0,v.value=r}const h=V(!1);function _(r){const y=r.currentTarget,w=r.srcElement.offsetHeight,I=y.scrollTop,d=y.scrollHeight-I;if(d===w){h.value=!0;return}else if(d===I){h.value=!1;return}h.value=!1}return{overview:c,sections:l,selectedSection:m,isExpanded:p,expandSection:f,atBottom:h,handleScroll:_}};H.components=Object.assign({QuestionnaireSummaryOverview:It,SectionOverview:Lt,SectionDetails:Mt},H.components);var Ut=function(){var e=this,s=e.$createElement,t=e._self._c||s;return t("section",{staticClass:"space-y-5 py-5"},[t("QuestionnaireSummaryOverview",{attrs:{value:e.overview}}),t("div",{staticClass:"relative grid grid-cols-12 gap-4"},[t("div",{staticClass:"h-120 space-y-4 overflow-y-scroll",class:[{"fade-bottom":!e.atBottom},e.isExpanded?"col-span-4":"col-span-12"],on:{scroll:function(o){return e.handleScroll(o)}}},e._l(e.sections,function(o,c){return t("div",{key:c},[t("button",{staticClass:"w-full",attrs:{type:"button"},on:{click:function(l){return e.expandSection(c)}}},[t("SectionOverview",{attrs:{section:o,"is-expanded":e.isExpanded}})],1)])}),0),e.isExpanded?t("div",{staticClass:"col-span-8"},[e.selectedSection?t("SectionDetails",{attrs:{section:e.selectedSection}}):e._e()],1):e._e()])],1)},Jt=[];const fe={};var Wt=g(H,Ut,Jt,!1,Gt,"45f0c18c",null,null);function Gt(e){for(let s in fe)this[s]=fe[s]}const Ht=function(){return Wt.exports}(),Xt=k({components:{QuestionnaireSidebar:Te,QuestionnaireBanner:ct,DispatchRenderer:ye,QuestionnaireReview:Ht,ProgressBar:Je},props:{...z()},setup(e){const s=ee(te(e)),t=b(),o=n(()=>t.sectionIndex),c=n(()=>{var p;return((p=t.currentSection)==null?void 0:p.name)||""}),l=n(()=>t.answers.length),v=n(()=>t.totalQuestions),m=n(()=>t.atResults);return{...s,sectionIndex:o,sectionName:c,totalAnswers:l,totalQuestions:v,isAtResults:m}},computed:{noData(){return!this.control.data||this.control.data.length===0},arraySchema(){return xe.schema(this.control.rootSchema,this.control.uischema.scope,this.control.rootSchema)},detailUiSchema(){const e=ge(this.control.uischemas,this.control.schema,this.control.uischema.scope,this.control.path,"Group",this.control.uischema,this.control.rootSchema);if(Se(this.control.path))e.type="VerticalLayout";else{const s=e;s.label=this.control.label}return e},allSections(){return this.control.data.map(e=>e.name)}},methods:{composePaths:se,createDefaultValue:A,addButtonClick(){this.addItem(this.control.path,A(this.control.schema))()}}}),zt={renderer:Xt,tester:K(1e3,Y("sections"))},X=k({layout:"siteMain"});X.setup=(e,s)=>{const t=ae("id"),o=ae("questionnaireId"),c=n(()=>[...Qe,He,nt,ze,zt]),l=Ee.get(),v=n(()=>{var d;if((d=l.data.value)!=null&&d.displayUischema)return JSON.parse(l.data.value.displayUischema)}),m=Oe.get(),p=n(()=>m.data.value?JSON.parse(m.data.value.displaySchema):""),f=Me.read(o),h=n(()=>f.data.value||De.CustomQuestionnaire.create()),_=re.read(o),r=We(n(()=>_.data.value||Fe.create())),y=n(()=>Boolean(v.value&&p.value&&h.value)),C=b();async function w(){await C.setData(h.value),r.value.id?await C.setTakenId(r.value.id.value):await L({accountId:{value:t.value},questionnaireId:{value:o.value}})}w();const I=re.create();async function L(d){const{response:T}=await I.mutateAsync(d);T.taken&&T.taken.id&&(r.value.id=T.taken.id)}return G(()=>h.value,async d=>{d&&await C.setData(d)},{immediate:!0}),G(()=>r.value,async d=>{d&&d.id&&await C.setTakenId(d.id.value)},{immediate:!0}),Pe(()=>{C.clearData(),C.clearAnswers()}),{renderers:c,uiSchema:v,schema:p,questionnaire:h,ready:y}};X.components=Object.assign({LoadingSpinner:Ne,JsonForms:Be},X.components);var Kt=function(){var e=this,s=e.$createElement,t=e._self._c||s;return e.ready?t("JsonForms",{attrs:{data:e.questionnaire,renderers:e.renderers,schema:e.schema,uischema:e.uiSchema}}):t("LoadingSpinner")},Yt=[];const he={};var we=g(X,Kt,Yt,!1,Zt,null,null,null);function Zt(e){for(let s in he)this[s]=he[s]}typeof oe=="function"&&oe(we);const ys=function(){return we.exports}();export{ys as default};
