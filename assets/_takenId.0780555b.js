import{cD as A,n as v,aO as F,aB as T,b as D,d as i,aJ as P,aY as z,L as J,ca as S,cJ as W,c1 as X,c0 as K,cK as N,ak as j}from"./index.1543f442.js";import{P as V}from"./ProgressBar.d49755d5.js";const m={};m.props={title:{key:"title",required:!1,type:String}};m.setup=(e,s)=>({});m.components=Object.assign({DotsSquare:A},m.components);var Y=function(){var e=this,s=e.$createElement,t=e._self._c||s;return e.title?t("section",{staticClass:"relative flex h-28 w-full flex-col items-center justify-center overflow-hidden bg-gradient-to-bl from-prime-navy via-blue-900 to-prime-navy"},[t("div",{staticClass:"absolute bottom-full right-full translate-y-3/4 translate-x-3/4 rotate-45 transform"},[t("DotsSquare",{attrs:{color:"navy"}})],1),t("div",{staticClass:"absolute top-full left-full -translate-y-3/4 -translate-x-3/4 rotate-45 transform"},[t("DotsSquare",{attrs:{color:"navy"}})],1),t("div",{staticClass:"relative max-w-sm px-4 sm:max-w-xl sm:px-0 lg:max-w-2xl xl:max-w-4xl"},[t("BaseTypography",{staticClass:"text-center text-white",attrs:{component:"h1",variant:"h4"}},[e._v(" "+e._s(e.title)+" ")])],1)]):e._e()},G=[];const Q={};var H=v(m,Y,G,!1,U,null,null,null);function U(e){for(let s in Q)this[s]=Q[s]}const Z=function(){return H.exports}(),C={};C.props={link:{key:"link",required:!0,type:Object}};C.setup=(e,s)=>({});var ee=function(){var e=this,s=e.$createElement,t=e._self._c||s;return t("BaseLink",{staticClass:"group flex w-11/12 transform items-center space-x-2 rounded-r-full py-3 pl-6 pr-2 transition duration-100 hover:translate-x-1 hover:bg-gradient-to-l hover:from-indigo-100 hover:to-white focus:bg-gradient-to-l focus:from-indigo-100 focus:to-white",attrs:{to:e.link.path,"display-type":"none"}},[t("BaseTypography",{staticClass:"text-gray-500 group-hover:text-indigo-600 group-focus:text-indigo-600",attrs:{variant:"p1"}},[e._v(" "+e._s(e.link.name)+" ")])],1)},te=[];const B={};var se=v(C,ee,te,!1,ne,null,null,null);function ne(e){for(let s in B)this[s]=B[s]}const ae=function(){return se.exports}(),x={};x.props={accountId:{key:"accountId",required:!0,type:String},responseId:{key:"responseId",required:!0,type:String},value:{key:"value",required:!0,type:Boolean}};x.setup=(e,s)=>{const t=e,n=s.emit;return{isOpen:T(t,n)}};x.components=Object.assign({XSvg:F},x.components);var oe=function(){var e=this,s=e.$createElement,t=e._self._c||s;return t("aside",[e.isOpen?t("div",{staticClass:"fixed inset-0 z-10 flex md:hidden",attrs:{role:"dialog","aria-modal":"true"}},[t("div",{staticClass:"fixed inset-0 bg-gray-500 bg-opacity-75",attrs:{"aria-hidden":"true"}}),t("div",{staticClass:"relative flex w-full max-w-xs flex-1 flex-col bg-white"},[t("div",{staticClass:"absolute right-0 top-0 -mr-12 pt-2"},[t("button",{staticClass:"flex h-10 w-10 items-center justify-center rounded-full focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white",attrs:{"aria-label":"Close Sidebar",type:"button"},on:{click:function(n){e.isOpen=!e.isOpen}}},[t("XSvg",{staticClass:"h-6 w-6 text-white"})],1)]),t("div",{staticClass:"flex h-0 flex-1 flex-col justify-between overflow-y-auto overflow-x-hidden"},[t("nav",{staticClass:"flex-1"},[e._t("default")],2),t("div",{staticClass:"sticky bottom-0 flex justify-center border-t bg-white py-4"},[t("BaseButton",{attrs:{action:"secondary",to:`/client/companies/${e.accountId}/journey/custom-assessments/${e.responseId}/review`}},[t("BaseOverline",{staticClass:"uppercase"},[e._v(" Review Questionnaire ")])],1)],1)])]),t("div",{staticClass:"w-14 flex-shrink-0"})]):e._e(),t("div",{staticClass:"hidden md:sticky md:top-20 md:flex md:h-screen md:flex-shrink-0 md:shadow"},[t("div",{staticClass:"flex max-w-xs flex-grow flex-col bg-white"},[t("div",{staticClass:"flex flex-grow flex-col overflow-y-auto overflow-x-hidden"},[t("nav",{staticClass:"min-w-[20rem] flex-1"},[e._t("default")],2)]),t("div",{staticClass:"sticky bottom-0 flex justify-center border-t bg-white py-4"},[t("BaseButton",{attrs:{action:"secondary",to:`/client/companies/${e.accountId}/journey/custom-assessments/${e.responseId}/review`}},[t("BaseTypography",{staticClass:"uppercase",attrs:{variant:"overline"}},[e._v(" Review Questionnaire ")])],1)],1)])])])},re=[];const O={};var ie=v(x,oe,re,!1,ce,null,null,null);function ce(e){for(let s in O)this[s]=O[s]}const le=function(){return ie.exports}(),y=z({inheritAttrs:!1});y.props={accountId:{key:"accountId",required:!0,type:String},responseId:{key:"responseId",required:!0,type:String},value:{key:"value",required:!0,type:null}};y.setup=(e,s)=>{const t=e,n=D(!1),l=i(()=>t.accountId),f=i(()=>t.responseId),_=i(()=>t.value),a=i(()=>_.value.sections.map((o,c)=>({name:o.name,path:{to:`/client/companies/${l.value}/journey/custom-assessments/${f.value}`,query:{section:c.toString()}}}))||[]);return{isOpen:n,id:l,takenId:f,sectionLinks:a}};y.components=Object.assign({QuestionnaireSidebarWrapper:le,ChevronLeftSvg:P,QuestionnaireMenuLink:ae},y.components);var ue=function(){var e=this,s=e.$createElement,t=e._self._c||s;return t("QuestionnaireSidebarWrapper",{attrs:{"account-id":e.id,"response-id":e.takenId},model:{value:e.isOpen,callback:function(n){e.isOpen=n},expression:"isOpen"}},[t("ul",[t("li",{staticClass:"border-b"},[t("RouterLink",{staticClass:"group inline-flex w-full transform space-x-2 py-3 pl-6 pr-2 font-body text-base font-medium leading-6 no-underline antialiased transition duration-100 hover:translate-x-1 hover:bg-gradient-to-l hover:from-indigo-100 hover:to-white focus:bg-gradient-to-l focus:from-indigo-100 focus:to-white focus:outline-none disabled:cursor-not-allowed disabled:opacity-50",attrs:{to:`/client/companies/${e.id}/journey/custom-assessments`}},[t("ChevronLeftSvg",{staticClass:"-ml-1 h-auto w-5 text-gray-500 group-hover:text-indigo-600 group-focus:text-indigo-600"}),t("BaseTypography",{staticClass:"text-gray-500 group-hover:text-indigo-600 group-focus:text-indigo-600",attrs:{variant:"p1"}},[e._v(" Questionnaires ")])],1)],1),e._l(e.sectionLinks,function(n,l){return t("li",{key:l},[t("QuestionnaireMenuLink",{attrs:{link:n}})],1)})],2)])},de=[];const L={};var pe=v(y,ue,de,!1,fe,null,null,null);function fe(e){for(let s in L)this[s]=L[s]}const ve=function(){return pe.exports}(),g={};g.props={accountId:{key:"accountId",required:!0,type:String},responseId:{key:"responseId",required:!0,type:String},value:{key:"value",required:!0,type:null},answers:{key:"answers",required:!0,type:Array}};g.setup=(e,s)=>{const t=e,n=i(()=>t.value),l=i(()=>{var o;const a=new Map;return(o=n.value)==null||o.sections.forEach(c=>{c.questions.forEach(d=>{var p;const r=(p=d.id)==null?void 0:p.value,u=t.answers.find(w=>{var b;return((b=w.questionId)==null?void 0:b.value)===r});r&&u&&!a.has(r)&&a.set(r,u)})}),a}),f=i(()=>{var o;const a=[];return(o=n.value)==null||o.sections.forEach(c=>{a.push(c.questions.length)}),a.reduce((c,d)=>c+d,0)}),_=i(()=>{var o;const a=[];return(o=n.value)==null||o.sections.forEach(c=>c.questions.forEach(d=>{var p;const r=((p=d.id)==null?void 0:p.value)||"",u=l.value.get(r);u&&a.push(u)})),a.length||0});return{questionnaire:n,totalQuestions:f,totalAnswers:_}};g.components=Object.assign({QuestionnaireSidebar:ve,QuestionnaireBanner:Z,ProgressBar:V},g.components);var _e=function(){var e=this,s=e.$createElement,t=e._self._c||s;return t("main",{staticClass:"flex"},[t("QuestionnaireSidebar",{attrs:{"response-id":e.responseId,"account-id":e.accountId,value:e.questionnaire}}),t("section",{staticClass:"flex flex-1 flex-col"},[t("QuestionnaireBanner",{attrs:{title:e.questionnaire.name}}),t("ProgressBar",{staticClass:"h-2 bg-white shadow",attrs:{current:e.totalAnswers,max:e.totalQuestions}}),t("div",{staticClass:"mx-auto max-w-7xl p-4 sm:p-6 lg:p-8"},[e.questionnaire.sections.length===0?[t("BaseTypography",{staticClass:"text-gray-500",attrs:{variant:"p1",component:"p"}},[e._v(" No data to display ")])]:t("div",{staticClass:"flex flex-col space-y-6"},[e._t("default")],2)],2)],1)],1)},me=[];const R={};var xe=v(g,_e,me,!1,ye,null,null,null);function ye(e){for(let s in R)this[s]=R[s]}const ge=function(){return xe.exports}(),h={};h.setup=(e,s)=>{const t=S("id"),n=S("takenId"),l=W.read(n),f=i(()=>l.data.value),_=i(()=>{var r,u;return(u=(r=f.value)==null?void 0:r.questionnaireId)==null?void 0:u.value}),a=X.read(_),o=i(()=>a.data.value||K.CustomQuestionnaire.create()),c=N.list(n),d=i(()=>{var r;return((r=c.data.value)==null?void 0:r.sort((u,p)=>{var k,$,q,I;const w=(($=(k=u.meta)==null?void 0:k.updatedAt)==null?void 0:$.value)||"";return(((I=(q=p.meta)==null?void 0:q.updatedAt)==null?void 0:I.value)||"").localeCompare(w)}))||[]});return{id:t,takenId:n,takenRead:l,questionnaireRead:a,questionnaire:o,answers:d}};h.components=Object.assign({LoadingSpinner:J,QuestionnaireLayout:ge},h.components);var he=function(){var e=this,s=e.$createElement,t=e._self._c||s;return t("main",{staticClass:"h-full bg-gradient-to-br from-gray-100 via-gray-50 to-blue-50"},[e.takenRead.isLoading.value||e.questionnaireRead.isLoading.value?t("LoadingSpinner"):t("QuestionnaireLayout",{attrs:{"account-id":e.id,"response-id":e.takenId,value:e.questionnaire,answers:e.answers}},[t("RouterView")],1)],1)},we=[];const E={};var M=v(h,he,we,!1,be,null,null,null);function be(e){for(let s in E)this[s]=E[s]}typeof j=="function"&&j(M);const $e=function(){return M.exports}();export{$e as default};