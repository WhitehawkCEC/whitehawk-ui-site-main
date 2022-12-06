import{n as x,c as o,c0 as I,cG as k,cA as R,aK as F,aG as A,c7 as M,b4 as N,c4 as O}from"./index.45274057.js";import{P as E}from"./ProgressBar.9c30df87.js";import{I as L}from"./IsoDateTimeDisplay.e5381c10.js";import{u as G}from"./active-questionnaire.ba9096ba.js";const b={};b.props={links:{key:"links",required:!0,type:Array}};b.setup=(e,s)=>({});var H=function(){var e=this,s=e.$createElement,t=e._self._c||s;return t("div",{staticClass:"absolute w-full -top-[4.6rem] left-2 md:-inset-x-6 md:-top-8 lg:-inset-x-8 xl:-inset-x-16 2xl:-inset-x-20 md:w-auto"},[t("nav",{staticClass:"bg-white border-l md:border-l-none md:border-b"},[t("div",{staticClass:"mx-auto flex max-w-8xl md:px-6 lg:px-8 xl:px-16 2xl:px-20"},[t("ul",{staticClass:"flex items-center space-x-1 overflow-x-auto"},e._l(e.links,function(n){return t("li",{key:n.name},[t("BaseLink",{staticClass:"border-b-2 border-transparent p-2 text-gray-500 hover:border-prime-navy hover:text-prime-navy focus:border-prime-navy focus:text-prime-navy focus:outline-none",attrs:{"exact-active-class":"text-prime-navy border-prime-navy focus:text-prime-navy focus:border-prime-navy",to:n.to,"display-type":"none"}},[t("BaseTypography",{staticClass:"whitespace-nowrap",attrs:{variant:"p2"}},[e._v(" "+e._s(n.name)+" ")])],1)],1)}),0)])])])},V=[];const B={};var W=x(b,H,V,!1,z,null,null,null);function z(e){for(let s in B)this[s]=B[s]}const K=function(){return W.exports}(),g={};g.props={accountId:{key:"accountId",required:!0,type:String},id:{key:"id",required:!0,type:String}};g.setup=(e,s)=>{const t=e,n=o(()=>t.accountId),r=o(()=>t.id),d=I.read(r),u=o(()=>d.data.value),y=o(()=>{var l,a;return(a=(l=u.value)==null?void 0:l.meta)==null?void 0:a.updatedAt}),m=o(()=>{var a;const l=[];return(a=u.value)==null||a.sections.forEach(i=>{l.push(i.questions.length)}),l.reduce((i,c)=>i+c,0)}),p=k.list(n),f=o(()=>{var l,a,i;return(i=(a=(l=p.data.value)==null?void 0:l.find(c=>{var _;return((_=c.questionnaireId)==null?void 0:_.value)===r.value}))==null?void 0:a.id)==null?void 0:i.value}),v=R.list(f);return{questionnaireId:r,questionnaire:u,lastUpdated:y,totalQuestions:m,answeredList:v}};g.components=Object.assign({ProgressBar:E,IsoDateTimeDisplay:L},g.components);var J=function(){var e=this,s=e.$createElement,t=e._self._c||s;return e.questionnaire?t("BaseSimpleCard",{staticClass:"relative overflow-hidden p-5"},[t("BaseVueQuery",{attrs:{query:e.answeredList},scopedSlots:e._u([{key:"success",fn:function(n){var r=n.data;return[t("ProgressBar",{staticClass:"absolute inset-x-0 bottom-0 h-2 bg-gray-200",attrs:{current:r.length,max:e.totalQuestions}})]}}],null,!1,3440009378)}),t("div",{staticClass:"relative flex flex-col space-y-3"},[t("div",{staticClass:"flex flex-col space-y-1"},[e.lastUpdated?t("BaseTypography",{staticClass:"text-gray-500 uppercase",attrs:{variant:"overline"}},[t("span",[e._v("Last Updated:")]),t("IsoDateTimeDisplay",{attrs:{value:e.lastUpdated,format:"date"}})],1):e._e(),t("BaseTypography",{attrs:{variant:"subtitle3"}},[e._v(" "+e._s(e.questionnaire.name)+" ")])],1),t("div",{staticClass:"flex justify-between items-baseline"},[t("BaseTypography",{staticClass:"text-gray-500",attrs:{variant:"p3"}},[e._v(" "+e._s(e.totalQuestions)+" Questions ")]),t("BaseButton",{attrs:{shape:"rectangle",to:`custom-questionnaires/${e.questionnaireId}/results`}},[e._v(" Results ")])],1)])],1):e._e()},X=[];const S={};var Y=x(g,J,X,!1,Z,null,null,null);function Z(e){for(let s in S)this[s]=S[s]}const U=function(){return Y.exports}(),h={};h.props={accountId:{key:"accountId",required:!0,type:String},id:{key:"id",required:!0,type:String}};h.setup=(e,s)=>{const t=e,n=o(()=>t.accountId),r=o(()=>t.id),d=I.read(r),u=o(()=>d.data.value),y=o(()=>{var a,i,c;return(c=(i=(a=u.value)==null?void 0:a.sections[0])==null?void 0:i.id)==null?void 0:c.value}),m=o(()=>{var a,i;return(i=(a=u.value)==null?void 0:a.meta)==null?void 0:i.updatedAt}),p=o(()=>{var i;const a=[];return(i=u.value)==null||i.sections.forEach(c=>{a.push(c.questions.length)}),a.reduce((c,_)=>c+_,0)}),f=k.list(n),v=o(()=>{var a,i,c;return(c=(i=(a=f.data.value)==null?void 0:a.find(_=>{var $;return(($=_.questionnaireId)==null?void 0:$.value)===r.value}))==null?void 0:i.id)==null?void 0:c.value}),l=R.list(v);return{questionnaireId:r,questionnaire:u,sectionId:y,lastUpdated:m,totalQuestions:p,answeredList:l}};h.components=Object.assign({ProgressBar:E,IsoDateTimeDisplay:L},h.components);var ee=function(){var e=this,s=e.$createElement,t=e._self._c||s;return e.questionnaire?t("BaseSimpleCard",{staticClass:"relative overflow-hidden p-5"},[t("BaseVueQuery",{attrs:{query:e.answeredList},scopedSlots:e._u([{key:"success",fn:function(n){var r=n.data;return[t("ProgressBar",{staticClass:"absolute inset-x-0 bottom-0 h-2 bg-gray-200",attrs:{current:r.length,max:e.totalQuestions}})]}}],null,!1,3440009378)}),t("div",{staticClass:"relative flex flex-col space-y-3"},[t("div",{staticClass:"flex flex-col space-y-1"},[e.lastUpdated?t("BaseTypography",{staticClass:"text-gray-500 uppercase",attrs:{variant:"overline"}},[t("span",[e._v("Last Updated:")]),t("IsoDateTimeDisplay",{attrs:{value:e.lastUpdated,format:"date"}})],1):e._e(),t("BaseTypography",{attrs:{variant:"subtitle3"}},[e._v(" "+e._s(e.questionnaire.name)+" ")])],1),t("div",{staticClass:"flex justify-between items-baseline"},[t("BaseTypography",{staticClass:"text-gray-500",attrs:{variant:"p3"}},[e._v(" "+e._s(e.totalQuestions)+" Questions ")]),t("BaseButton",{attrs:{shape:"rectangle",to:{path:`custom-questionnaires/${e.questionnaireId}`,query:{section:e.sectionId}}}},[e._v(" Continue ")])],1)])],1):e._e()},te=[];const w={};var se=x(h,ee,te,!1,ae,null,null,null);function ae(e){for(let s in w)this[s]=w[s]}const D=function(){return se.exports}(),Q={};Q.props={accountId:{key:"accountId",required:!0,type:String},id:{key:"id",required:!0,type:String}};Q.setup=(e,s)=>{const t=e,n=o(()=>t.accountId),r=o(()=>t.id),d=I.read(r),u=o(()=>d.data.value),y=o(()=>{var i;const a=[];return(i=u.value)==null||i.sections.forEach(c=>{a.push(c.questions.length)}),a.reduce((c,_)=>c+_,0)}),m=o(()=>{var a,i,c;return(c=(i=(a=u.value)==null?void 0:a.sections[0])==null?void 0:i.id)==null?void 0:c.value}),p=G(),f=F(),v=k.create();async function l(){const{response:a}=await v.mutateAsync({accountId:{value:n.value},questionnaireId:{value:r.value}});a.taken&&a.taken.id&&(await p.clearData(),await p.setQuestionnaireId(r.value),await p.setTakenId(a.taken.id.value),f.push({path:`custom-questionnaires/${r.value}`,query:{section:m.value}}))}return{questionnaire:u,totalQuestions:y,createTaken:l}};var ne=function(){var e=this,s=e.$createElement,t=e._self._c||s;return e.questionnaire?t("BaseSimpleCard",{staticClass:"relative overflow-hidden flex h-full flex-col justify-between space-y-3 p-5"},[t("div",{staticClass:"flex flex-col space-y-1"},[t("BaseTypography",{staticClass:"text-gray-500 uppercase",attrs:{variant:"overline"}},[e._v(" Not Started ")]),t("BaseTypography",{attrs:{variant:"subtitle3"}},[e._v(" "+e._s(e.questionnaire.name)+" ")])],1),t("div",{staticClass:"flex justify-between items-baseline"},[t("BaseTypography",{staticClass:"text-gray-500",attrs:{variant:"p3"}},[e._v(" "+e._s(e.totalQuestions)+" Questions ")]),t("BaseButton",{attrs:{shape:"rectangle"},on:{click:e.createTaken}},[e._v("Begin")])],1)]):e._e()},re=[];const T={};var oe=x(Q,ne,re,!1,ie,null,null,null);function ie(e){for(let s in T)this[s]=T[s]}const ue=function(){return oe.exports}(),C={};C.props={accountId:{key:"accountId",required:!0,type:String},questionnaireId:{key:"questionnaireId",required:!0,type:String}};C.setup=(e,s)=>{const t=A(),n=o(()=>t.inProgressQuestionnaires.map(d=>{var u;return(u=d.id)==null?void 0:u.value})),r=o(()=>t.completedQuestionnaires.map(d=>{var u;return(u=d.id)==null?void 0:u.value}));return{inProgressIds:n,completedIds:r}};C.components=Object.assign({InProgressQuestionnaireCard:D,CompletedQuestionnaireCard:U,NotStartedQuestionnaireCard:ue},C.components);var ce=function(){var e=this,s=e.$createElement,t=e._self._c||s;return e.inProgressIds.includes(e.questionnaireId)?t("div",[t("InProgressQuestionnaireCard",{attrs:{id:e.questionnaireId,"account-id":e.accountId}})],1):e.completedIds.includes(e.questionnaireId)?t("div",[t("CompletedQuestionnaireCard",{attrs:{id:e.questionnaireId,"account-id":e.accountId}})],1):t("div",[t("NotStartedQuestionnaireCard",{attrs:{id:e.questionnaireId,"account-id":e.accountId}})],1)},le=[];const j={};var de=x(C,ce,le,!1,pe,null,null,null);function pe(e){for(let s in j)this[s]=j[s]}const ve=function(){return de.exports}(),q={};q.setup=(e,s)=>{const t=M("id"),n=N("status",void 0),r=O.read(t),d=o(()=>r.data.value),u=A(),y=o(()=>u.questionnaires),m=o(()=>u.inProgressQuestionnaires),p=o(()=>u.completedQuestionnaires),f=o(()=>{const v=`/client/companies/${t.value}/journey/cyber-risk-profile/custom-questionnaires`;return[{to:v,name:"All"},{to:{path:v,query:{status:"in-progress"}},name:"In Progress"},{to:{path:v,query:{status:"completed"}},name:"Completed"}]});return{id:t,status:n,company:d,questionnaires:y,inProgress:m,completed:p,links:f}};q.components=Object.assign({QuestionnaireTabbedNav:K,CompletedQuestionnaireCard:U,InProgressQuestionnaireCard:D,CompanyQuestionnaireCards:ve},q.components);var _e=function(){var e=this,s=e.$createElement,t=e._self._c||s;return t("div",{staticClass:"relative md:space-y-14"},[e.questionnaires.length!==0?t("QuestionnaireTabbedNav",{attrs:{links:e.links}}):e._e(),t("div",{staticClass:"space-y-6"},[t("div",{staticClass:"-space-y-2"},[t("BaseTypography",{staticClass:"text-gray-500 uppercase",attrs:{variant:"overline"}},[e._v(" "+e._s(e.status?e.status:"All")+" ")]),t("BaseTypography",{attrs:{variant:"h5",component:"h2"}},[e._v(" Questionnaires ")])],1),e.questionnaires.length===0?t("BaseAlert",{attrs:{type:"friendly"},scopedSlots:e._u([{key:"title",fn:function(){return[e._v("Questionnaire Not Found")]},proxy:!0},{key:"message",fn:function(){return[e._v(" It appears that your company is not associated with any Questionnaires. To learn more and add questionnaires to take, please contact a WhiteHawk Cyber Analyst. ")]},proxy:!0},{key:"action",fn:function(){return[t("BaseButton",{attrs:{shape:"rectangle","display-type":"success",to:{path:"/contact-us",query:{textBody:"I would like to talk with a WhiteHawk Consultant to request a questionnaire for my company.",subject:"Services and Solutions",company:e.company?e.company.name:""}}}},[e._v(" Request Questionnaire ")])]},proxy:!0}],null,!1,826400206)}):t("ul",{staticClass:"grid sm:grid-cols-3 md:grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-4"},[e.status==="completed"?e._l(e.completed,function(n,r){return t("li",{key:r},[n.id?t("CompletedQuestionnaireCard",{attrs:{id:n.id.value,"account-id":e.id}}):e._e()],1)}):e.status==="in-progress"?e._l(e.inProgress,function(n,r){return t("li",{key:r},[n.id?t("InProgressQuestionnaireCard",{attrs:{id:n.id.value,"account-id":e.id}}):e._e()],1)}):e._l(e.questionnaires,function(n,r){return t("li",{key:r},[n.id?t("CompanyQuestionnaireCards",{attrs:{"questionnaire-id":n.id.value,"account-id":e.id}}):e._e()],1)})],2)],1)],1)},ye=[];const P={};var me=x(q,_e,ye,!1,fe,null,null,null);function fe(e){for(let s in P)this[s]=P[s]}const qe=function(){return me.exports}();export{qe as default};
