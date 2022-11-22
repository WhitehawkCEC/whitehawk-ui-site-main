import{r as N,u as z,a as K,b as X,c as Y,d as E,e as W,s as G,_ as pe,f as fe,g as me,h as ie,R as ce,i as le,j as ue,Q as he,k as ye,v as xe}from"./QuestionnaireSidebar.e98937f3.js";import{h as _e}from"./_baseIteratee.ad7bd260.js";import{aj as M,bX as de,c as i,cB as U,r as j,aA as F,n as Z,a_ as Se,ac as ge,aU as we,c1 as ee,cv as Ce,cw as Ae,cC as te,bI as Ie,ak as se}from"./index.39cee636.js";import{B as qe}from"./BitsightProgressBar.14f9c955.js";import"./keys.6121ec39.js";import"./_Uint8Array.3f11cfab.js";import"./_isIterateeCall.5881cd97.js";import"./_baseAssignValue.3ebe6678.js";import"./_baseUniq.ae6f6bb4.js";import"./_baseIsEqual.f9b767c9.js";import"./_baseEach.f99fcb8c.js";import"./cloneDeep.e75302f2.js";import"./_copyArray.56331c81.js";import"./_arrayMap.dcea68f3.js";import"./isEqual.4e6345cd.js";import"./values.2cd4f038.js";const ke=M({props:{...N()},setup(e){const o=z(K(e)),t=de.list(),r=i(()=>{var s,d,w;return(w=(d=(s=t.data.value)==null?void 0:s[0])==null?void 0:d.id)==null?void 0:w.value}),u=X(),x=i(()=>u.data),I=i(()=>_e(x.value,e.path)),y=i(()=>I.value.questionType),S=i(()=>{const n="questions.";return parseInt(e.path.substring(e.path.indexOf(n)+n.length))}),f=i(()=>I.value),g=i(()=>y.value==="TEXTAREA"),R=i(()=>y.value==="CHECKBOX"),m=u.takenId,B=U.list(m,!!m),D=i(()=>B),_=i(()=>{var n;return(n=D.value.data.value)==null?void 0:n.questionAnswers});_.value&&u.setAnswers(_.value);const c=i(()=>{if(_.value){const n=_.value.filter(s=>{var d,w,b;return((d=s.questionId)==null?void 0:d.value)===((b=(w=f.value)==null?void 0:w.id)==null?void 0:b.value)});return n.length===1&&!R.value?n[0]:n}}),C=i(()=>{var n,s,d,w;if(Array.isArray(c.value)){const b=new Set;for(const Q of c.value)(n=Q.answerId)!=null&&n.value&&b.add((s=Q.answerId)==null?void 0:s.value);return[...b]}return(w=(d=c.value)==null?void 0:d.answerId)==null?void 0:w.value}),k=i({get(){return C.value},set(n){var d,w,b,Q,V;if(!n){if(!Array.isArray(c.value)){const T=(w=(d=c.value)==null?void 0:d.questionAnswerId)==null?void 0:w.value;T&&A(T)}return}if(Array.isArray(n)&&Array.isArray(c.value)&&!n[0]){for(const T of c.value)(b=T.questionAnswerId)!=null&&b.value&&A((Q=T.questionAnswerId)==null?void 0:Q.value);return}const s=c.value;if(typeof n!="string")for(const T of n){if(c.value&&Array.isArray(c.value))for(const $ of c.value)$.answerId&&$.questionAnswerId&&(n.includes($.answerId.value)||A($.questionAnswerId.value));if(Array.isArray(n)){if(!Array.isArray(s))s!=null&&s.answerId&&(s.answerId.value=T,v(s));else if(Array.isArray(C.value)&&!C.value.includes(T)){const $=P(T);$&&a($)}}return}if(!Array.isArray(s))((V=s==null?void 0:s.answerId)==null?void 0:V.value)&&typeof n=="string"&&(s.answerId.value=n,v(s));else if(typeof n=="string"){const T=P(n);T&&a(T)}}}),O=i(()=>{var n;if(!Array.isArray(c==null?void 0:c.value)){const s=(n=c==null?void 0:c.value)==null?void 0:n.answerText;if(s)return s}return""}),p=j(O.value),q=U.create(m);async function a(n){const s={questionAnswer:{...n}};await q.mutateAsync(s)}const l=U.update(m);async function v(n){const s={questionAnswer:{...n}};await l.mutateAsync(s)}const h=U.delete(m);async function A(n){await h.mutateAsync(n)}function L(n){var s,d,w;return(w=(d=(s=f.value)==null?void 0:s.answerSet)==null?void 0:d.answers)==null?void 0:w.filter(b=>{var Q;return((Q=b.id)==null?void 0:Q.value)===n})[0]}const P=function(n){var Q;if(!r.value||!m)return;let s;n!=null&&(s=L(n));const d=((Q=s==null?void 0:s.id)==null?void 0:Q.value)||f.value.id.value,w=(s==null?void 0:s.riskScore)||0;return{responseId:{value:m},questionnaireId:{value:r.value},questionId:{value:f.value.id.value},answerId:{value:d},riskScore:w,answerText:p.value}};return F(()=>p.value,n=>{const s=c.value;if(s)if(!Array.isArray(s))s.answerText=n,v(s);else if(s[0])for(const d of s)d.answerText=n,v(d);else{const d=P(void 0);d&&a(d)}else{const d=P(void 0);d&&a(d)}},{deep:!0}),F(()=>D,n=>{var s,d;!((s=n.value.data.value)!=null&&s.questionAnswers)||u.setAnswers((d=n.value.data.value)==null?void 0:d.questionAnswers)},{deep:!0}),{...o,selected:k,textAnswer:p,currentQuestion:f,currentAnswer:c,isTextarea:g,isMultiselect:R,currentQuestionIndex:S,questionType:y,questionnaireData:x,resolvedData:I,currentAnswerIds:C}},methods:{composePaths:Y,createDefaultValue:E,addButtonClick(){this.addItem(this.control.path,E(this.control.schema))()}}}),Te={renderer:ke,tester:W(1e3,G("answers"))},be=M({components:{ControlWrapper:pe},props:{...N()},setup(e){return fe(me(e))}}),Qe={renderer:be,tester:W(1e3,G("text"))},Re=M({props:{label:{required:!0,type:String,default:""},text:{required:!0,type:String,default:""},questionType:{required:!0,type:String,default:""}}});var Be=function(){var e=this,o=e.$createElement,t=e._self._c||o;return t("div",{staticClass:"overflow-hidden rounded-lg bg-white p-5 md:shadow-lg"},[t("BaseOverline",{staticClass:"uppercase text-gray-500"},[e._v(" Select All That Apply ")]),e._t("default")],2)},De=[];const ne={};var $e=Z(Re,Be,De,!1,Pe,null,null,null);function Pe(e){for(let o in ne)this[o]=ne[o]}const je=function(){return $e.exports}(),Ee=M({components:{QuestionListElement:je,DispatchRenderer:ie},props:{...N()},setup(e){const o=z(K(e)),t=Se(o.control),r=X(),u=i(()=>r.data),x=i({get(){return r.questionIndex},set(_){r.setQuestionIndex(_)}}),I=i(()=>x.value>0),y=i(()=>x.value<t.data.length-1),S=i({get(){return r.sectionIndex},set(_){r.setSectionIndex(_)}}),f=i(()=>{var _,c;return((c=(_=u.value)==null?void 0:_.sections)==null?void 0:c.length)||0}),g=i(()=>S.value>0),R=i(()=>S.value<f.value-1),m=i(()=>{var _,c,C;return g.value?((C=(c=(_=u.value)==null?void 0:_.sections)==null?void 0:c[S.value-1])==null?void 0:C.questions.length)||0:null});function B(){m.value&&(x.value=m.value-1,S.value--)}const D=i(()=>!0);return{...o,data:u,questionIndex:x,hasPrevQuestion:I,hasNextQuestion:y,prevQuestionCount:m,sectionIndex:S,sectionCount:f,hasPrevSection:g,hasNextSection:R,toEndOfPrevSection:B,isSingle:D}},computed:{arraySchema(){return ce.schema(this.control.rootSchema,this.control.uischema.scope,this.control.rootSchema)},detailUiSchema(){const e=le(this.control.uischemas,this.control.schema,this.control.uischema.scope,this.control.path,"Group",this.control.uischema,this.control.rootSchema);return ue(this.control.path)?e.type="VerticalLayout":e.label=this.control.label,e}},methods:{composePaths:Y,createDefaultValue:E,addButtonClick(){this.addItem(this.control.path,E(this.control.schema))()}}}),Me={renderer:Ee,tester:W(1e3,G("questions"))},J={};J.setup=(e,o)=>{const t=X(),r=i(()=>t.data),u=i(()=>t==null?void 0:t.riskScoreTotal),x=i(()=>t==null?void 0:t.riskScoreMax),I=i(()=>Math.round(u.value*100/x.value)),y=i(()=>{var a;return(a=r.value)==null?void 0:a.sections}),S=j(null),f=j(!1),g=j(-1),R=i(()=>t.sectionTotals),m=function(a){var v,h,A;const l=(A=(h=(v=y.value)==null?void 0:v[a])==null?void 0:h.id)==null?void 0:A.value;return l&&R.value.get(l)||0},B=function(a){var h,A;let l=0;const v=(A=(h=y==null?void 0:y.value)==null?void 0:h[a])==null?void 0:A.questions;if(v)for(const L of v)L.answerSet&&L.answerSet.answers.filter(n=>{l=l+n.riskScore});return l},D=function(a){const l=m(a),v=B(a);return l?Math.round(l*100/v):0},_=function(a){g.value===a?f.value=!f.value:f.value=!0,g.value=a},c=function(a){var l,v;return(v=(l=y.value)==null?void 0:l[a])==null?void 0:v.questions},C=i(()=>t==null?void 0:t.answers),k=function(a){if(a!=null&&a.value){let l=0;return C.value.filter(v=>{var h;((h=v.questionId)==null?void 0:h.value)===(a==null?void 0:a.value)&&(l=l+v.riskScore)}),l}},O=function(a){if(a!=null&&a.value){let l;return C.value.filter(v=>{var h;((h=v.questionId)==null?void 0:h.value)===(a==null?void 0:a.value)&&(l=v.answerText)}),l}},p=j(!1);return{riskScoreTotal:u,riskScoreMax:x,percentage:I,sections:y,sectionsCol:S,sectionsCollapsed:f,selectedSection:g,sectionRiskScoreTotal:m,sectionRiskScoreMax:B,sectionPercentage:D,selectSection:_,getSectionQuestions:c,getQuestionScore:k,getQuestionText:O,atBottom:p,handleScroll:function(a){const l=a.target,h=a.srcElement.offsetHeight,A=l.scrollTop;if(l.scrollHeight-A===h){p.value=!0;return}p.value=!1}}};J.components=Object.assign({BitsightProgressBar:qe,ChevronRightSvg:ge},J.components);var Oe=function(){var e=this,o=e.$createElement,t=e._self._c||o;return t("section",{staticClass:"space-y-5 py-5"},[t("div",{staticClass:"relative flex flex-col items-center justify-center xl:grid xl:grid-cols-12"},[t("div",{staticClass:"-mb-36 xl:col-span-4 xl:col-start-1 xl:row-start-1 xl:mb-0"},[t("div",{staticClass:"px-6 md:px-8 lg:px-4 xl:pl-0"},[t("div",{staticClass:"relative flex w-full max-w-xs flex-col items-center justify-center overflow-hidden rounded-xl bg-white px-4 py-8 shadow-md sm:max-w-sm sm:rounded-3xl xl:max-w-none xl:p-12"},[t("div",{staticClass:"absolute flex flex-col items-center space-y-2"},[t("span",{staticClass:"whitespace-nowrap"},[t("BaseTypography",{attrs:{variant:"h2"}},[e._v(" "+e._s(e.percentage)+" "),t("sup",{staticClass:"text-gray-500"},[e._v("%")])])],1)]),t("div",{staticClass:"relative w-44 sm:w-56"},[t("BitsightProgressBar",{attrs:{"cyber-score":e.riskScoreTotal,max:e.riskScoreMax}})],1)])])]),t("BaseSimpleCard",{staticClass:"pt-32 xl:col-span-10 xl:col-start-3 xl:row-start-1 xl:h-fit xl:p-0"},[t("div",{staticClass:"grid items-center gap-6 px-6 py-10 sm:p-8 lg:grid-cols-10 xl:gap-0 xl:p-6"},[t("div",{staticClass:"grid gap-5 text-center lg:col-span-10 xl:col-span-6 xl:col-start-3 xl:text-left"},[t("BaseTypography",{staticClass:"text-prime-navy",attrs:{component:"h2",variant:"h5"}},[e._v(" Total Score / Overview ")]),t("BaseTypography",{staticClass:"text-gray-600",attrs:{component:"p",variant:"p1"}},[e._v(" Lorem ipsum dolor sit amet consectetur, adipisicing elit. Veritatis saepe ullam laborum accusantium itaque, enim commodi numquam incidunt, id autem pariatur sit ut qui libero eos amet molestias inventore ab! ")])],1)])])],1),t("div",{staticClass:"relative grid grid-cols-12 gap-4"},[t("div",{ref:"sectionsCol",staticClass:"h-120 space-y-4 overflow-y-scroll",class:[{"fade-bottom":!e.atBottom},e.sectionsCollapsed?"col-span-4":"col-span-12"],on:{scroll:function(r){return e.handleScroll(r)}}},e._l(e.sections,function(r,u){return t("div",{key:u,staticClass:"pointer-events-auto flex cursor-pointer justify-between rounded-xl bg-white px-4 py-8 shadow",on:{click:function(x){return e.selectSection(u)}}},[t("span",[t("BaseP1",{staticClass:"text-prime-indigo"},[e._v(" "+e._s(r.name)+" ")]),t("BaseP2",{staticClass:"text-gray-500"},[e._v(" "+e._s(r.questions.length)+" questions ")])],1),e._v(" "+e._s("Total score:"+e.sectionRiskScoreTotal(u))+" "+e._s("Max score:"+e.sectionRiskScoreMax(u))+" "+e._s("Section percentage: "+e.sectionPercentage(u))+" "),t("div",{staticClass:"flex justify-self-end"},[t("ChevronRightSvg",{staticClass:"m-auto h-5 w-5 text-gray-400",attrs:{"aria-hidden":"true"}})],1)])}),0),e.sectionsCollapsed?t("div",{staticClass:"col-span-8"},[t("BaseSimpleCard",{staticClass:"px-4 py-8"},[t("BaseH4",[e._v("Section Details")]),e.selectedSection!=null?t("span",[t("div",{staticClass:"relative flex w-full max-w-xs flex-col items-center justify-center overflow-hidden"},[t("div",{staticClass:"relative w-36"},[t("BitsightProgressBar",{attrs:{"cyber-score":e.sectionRiskScoreTotal(e.selectedSection),max:e.sectionRiskScoreMax(e.selectedSection)}})],1),t("div",{staticClass:"absolute flex flex-col items-center space-y-2"},[t("span",{staticClass:"whitespace-nowrap"},[t("BaseTypography",{attrs:{variant:"h4",component:"p"}},[e._v(" "+e._s(e.sectionPercentage(e.selectedSection))+" "),t("sup",{staticClass:"text-gray-500"},[e._v("%")])])],1)])]),t("ul",{staticClass:"divide-y divide-gray-200",attrs:{role:"list"}},e._l(e.getSectionQuestions(e.selectedSection),function(r,u){return t("li",{key:u,staticClass:"py-4"},[e.getQuestionScore(r.id)!==void 0?t("div",{staticClass:"mx-0 flex w-full flex-row"},[t("BaseLink",{attrs:{"display-type":"primary-prime",to:"#"}},[e._v(" "+e._s(`Question ${u+1}`)+" ")]),t("BaseTypography",{staticClass:"mt-1 ml-4 block text-gray-500",attrs:{component:"p",variant:"overline"}},[e._v(" "+e._s(r.questionType)+" ")]),t("div",{staticClass:"ml-auto"},[r.questionType!="TEXTAREA"?t("p",[e._v(" "+e._s("Score: "+e.getQuestionScore(r.id))+" ")]):e._e(),e.getQuestionText(r.id)?t("p",[e._v(" "+e._s("Text Response: "+e.getQuestionText(r.id))+" ")]):e._e()])],1):e._e()])}),0),t("BaseTypography",{staticClass:"float-right mb-4",attrs:{component:"p",variant:"p1"}},[e._v(" "+e._s("Total score:"+e.sectionRiskScoreTotal(e.selectedSection))+" ")])],1):e._e()],1)],1):e._e()]),t("div",{staticClass:"flex p-8"},[t("BaseH5",[e._v("Additional CTA / Bundles?")])],1)])},Le=[];const ae={};var Ue=Z(J,Oe,Le,!1,Fe,"4eec88d0",null,null);function Fe(e){for(let o in ae)this[o]=ae[o]}const oe=function(){return Ue.exports}(),Je=M({components:{QuestionnaireSidebar:he,DispatchRenderer:ie,QuestionnaireReview:oe},props:{...N()},setup(e){const o=z(K(e)),t=X(),r=i(()=>t.sectionIndex),u=i(()=>t.atResults);return{...o,sectionIndex:r,isAtResults:u,QuestionnaireReview:oe}},computed:{noData(){return!this.control.data||this.control.data.length===0},arraySchema(){return ce.schema(this.control.rootSchema,this.control.uischema.scope,this.control.rootSchema)},detailUiSchema(){const e=le(this.control.uischemas,this.control.schema,this.control.uischema.scope,this.control.path,"Group",this.control.uischema,this.control.rootSchema);return ue(this.control.path)?e.type="VerticalLayout":e.label=this.control.label,e},allSections(){const e=[];for(const o of this.control.data)e.push(o.name);return e}},methods:{composePaths:Y,createDefaultValue:E,addButtonClick(){this.addItem(this.control.path,E(this.control.schema))()}}}),He={renderer:Je,tester:W(1e3,G("sections"))},Ne=we("custom-questionnaire",{state:()=>({sectionIndex:0,questionIndex:0,schema:void 0,data:void 0,takenId:void 0,answers:[],atResults:!1}),getters:{currentSection({data:e,sectionIndex:o}){var t;return(t=e==null?void 0:e.sections)==null?void 0:t[o]},currentQuestion({data:e}){var o,t,r;return(r=(t=(o=e==null?void 0:e.sections)==null?void 0:o[this.sectionIndex])==null?void 0:t.questions)==null?void 0:r[this.questionIndex]},riskScoreTotal({answers:e}){let o=0;return e.filter(t=>{if(Array.isArray(t)){for(const r of t)r.riskScore&&(o=o+r.riskScore);return}o=o+t.riskScore}),o},riskScoreMax({data:e}){let o=0;return e==null||e.sections.filter(t=>{for(const r of t.questions)r.answerSet&&r.answerSet.answers.filter(x=>{o=o+x.riskScore})}),o},sectionRiskScoreTotals({data:e,answers:o}){const t={};return e==null||e.sections.filter((r,u)=>{var I;const x=[];for(const y of r.questions)(I=y.answerSet)!=null&&I.answers&&o.filter(S=>{var f,g;((f=S.questionId)==null?void 0:f.value)===((g=y.id)==null?void 0:g.value)&&x.push(S.riskScore)});if(r.id){const y=x.reduce(function(S,f){return S+f},0);t[r.id.value]=y}}),t}},actions:{setSectionIndex(e){this.sectionIndex=e},setQuestionIndex(e){this.questionIndex=e},setSchema(e){this.schema=e},setData(e){this.data=e},setTakenId(e){this.takenId=e},setAnswers(e){this.answers=e},setAtResults(e){this.atResults=e},clearAnswers(){this.answers=[],this.sectionIndex=0,this.questionIndex=0,this.takenId=void 0,this.atResults=!1},clearSchema(){this.schema=void 0},clearData(){this.data=void 0}}}),H=M({layout:"siteMain"});H.setup=(e,o)=>{const t=[...xe,Te,Me,Qe,He],r=ee("id"),u=ee("questionnaireId"),x=i(()=>[I,g,S,c,_]),I=Ce.get(),y=i(()=>{var q;const p=((q=I.data.value)==null?void 0:q.displayUischema)||"";return JSON.parse(p)}),S=Ae.get(),f=i(()=>{var q;const p=((q=S.data.value)==null?void 0:q.displaySchema)||void 0;if(p)return JSON.parse(p)}),g=te.list(r.value),R=j(""),m=i(()=>{var p,q,a,l;return((l=(a=(q=(p=g==null?void 0:g.data)==null?void 0:p.value)==null?void 0:q.taken.filter(v=>{var h;return((h=v.questionnaireId)==null?void 0:h.value)===u.value})[0])==null?void 0:a.id)==null?void 0:l.value)||R.value}),B=te.create();async function D(p){var l,v,h,A;const q={...p},{response:a}=await B.mutateAsync(q);a&&(v=(l=a.taken)==null?void 0:l.id)!=null&&v.value&&(R.value=(A=(h=a.taken)==null?void 0:h.id)==null?void 0:A.value)}const _=U.list(m.value,!!m.value),c=de.read(u),C=i(()=>c.data.value),k=Ne();function O(){f.value&&k.setSchema(f.value),C.value&&k.setData(C.value),m.value===""&&!g.isLoading.value&&D({userId:r.value,questionnaireId:{value:u.value}}),m.value&&k.setTakenId(m.value)}return O(),F(()=>C.value,p=>{!p||k.setData(p)}),F(()=>m.value,p=>{!p||k.setTakenId(p)}),Ie(()=>{k.clearSchema(),k.clearData(),k.clearAnswers()}),{renderers:t,queries:x,uiSchemaData:y,schemaData:f,questionnaireData:C}};H.components=Object.assign({JsonForms:ye},H.components);var Xe=function(){var e=this,o=e.$createElement,t=e._self._c||o;return t("div",{staticClass:"min-h-screen bg-gray-100"},[t("BaseVueQueries",{attrs:{queries:e.queries},scopedSlots:e._u([{key:"success",fn:function(){return[t("JsonForms",{attrs:{data:e.questionnaireData,renderers:e.renderers,schema:e.schemaData,uischema:e.uiSchemaData}})]},proxy:!0}])})],1)},We=[];const re={};var ve=Z(H,Xe,We,!1,Ge,null,null,null);function Ge(e){for(let o in re)this[o]=re[o]}typeof se=="function"&&se(ve);const dt=function(){return ve.exports}();export{dt as default};
