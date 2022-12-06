import{cx as $,n as _,aO as k,aB as q,c7 as x,aK as S,r as j,c as r,aJ as B,aY as Q}from"./index.7d12495e.js";import{P as I}from"./ProgressBar.ff1ca327.js";import{u as O}from"./active-questionnaire.68ceb2d4.js";const p={};p.props={title:{key:"title",required:!1,type:String}};p.setup=(t,s)=>({});p.components=Object.assign({DotsSquare:$},p.components);var R=function(){var t=this,s=t.$createElement,e=t._self._c||s;return t.title?e("section",{staticClass:"relative flex h-28 w-full flex-col items-center justify-center overflow-hidden bg-gradient-to-bl from-prime-navy via-blue-900 to-prime-navy"},[e("div",{staticClass:"absolute bottom-full right-full translate-y-3/4 translate-x-3/4 rotate-45 transform"},[e("DotsSquare",{attrs:{color:"navy"}})],1),e("div",{staticClass:"absolute top-full left-full -translate-y-3/4 -translate-x-3/4 rotate-45 transform"},[e("DotsSquare",{attrs:{color:"navy"}})],1),e("div",{staticClass:"relative px-4 sm:px-0 max-w-sm sm:max-w-xl lg:max-w-2xl xl:max-w-4xl"},[e("BaseTypography",{staticClass:"text-center text-white",attrs:{component:"h1",variant:"h4"}},[t._v(" "+t._s(t.title)+" ")])],1)]):t._e()},L=[];const y={};var T=_(p,R,L,!1,M,null,null,null);function M(t){for(let s in y)this[s]=y[s]}const E=function(){return T.exports}(),m={};m.props={link:{key:"link",required:!0,type:Object}};m.setup=(t,s)=>({});var F=function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("BaseLink",{staticClass:"group w-11/12 rounded-r-full py-3 pl-6 pr-2 hover:bg-gradient-to-l flex transform items-center space-x-2 transition duration-100 hover:translate-x-1 hover:from-indigo-100 hover:to-white focus:bg-gradient-to-l focus:from-indigo-100 focus:to-white",attrs:{to:t.link.path,"display-type":"none"}},[e("BaseTypography",{staticClass:"text-gray-500 group-hover:text-indigo-600 group-focus:text-indigo-600",attrs:{variant:"p1"}},[t._v(" "+t._s(t.link.name)+" ")])],1)},P=[];const g={};var A=_(m,F,P,!1,D,null,null,null);function D(t){for(let s in g)this[s]=g[s]}const z=function(){return A.exports}(),d={};d.props={value:{key:"value",required:!0,type:Boolean}};d.setup=(t,s)=>{const e=t,n=s.emit,o=q(e,n),l=x("id"),c=x("questionnaireId"),a=S();function i(){a.push(`/client/companies/${l.value}/journey/cyber-risk-profile/custom-questionnaires/${c.value}/review`)}return{isOpen:o,routeToReview:i}};d.components=Object.assign({XSvg:k},d.components);var W=function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("aside",[t.isOpen?e("div",{staticClass:"fixed inset-0 flex z-10 md:hidden",attrs:{role:"dialog","aria-modal":"true"}},[e("div",{staticClass:"fixed inset-0 bg-gray-500 bg-opacity-75",attrs:{"aria-hidden":"true"}}),e("div",{staticClass:"relative flex w-full max-w-xs flex-1 flex-col bg-white"},[e("div",{staticClass:"absolute right-0 top-0 -mr-12 pt-2"},[e("button",{staticClass:"flex h-10 w-10 items-center justify-center rounded-full focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white",attrs:{"aria-label":"Close Sidebar",type:"button"},on:{click:function(n){t.isOpen=!t.isOpen}}},[e("XSvg",{staticClass:"h-6 w-6 text-white"})],1)]),e("div",{staticClass:"flex h-0 flex-1 flex-col justify-between overflow-y-auto overflow-x-hidden"},[e("nav",{staticClass:"flex-1"},[t._t("default")],2),e("div",{staticClass:"sticky bottom-0 flex justify-center border-t bg-white py-4"},[e("BaseButton",{attrs:{action:"secondary"},on:{click:t.routeToReview}},[e("BaseOverline",{staticClass:"uppercase"},[t._v(" Review Questionnaire ")])],1)],1)])]),e("div",{staticClass:"w-14 flex-shrink-0"})]):t._e(),e("div",{staticClass:"hidden md:sticky md:top-20 md:flex md:h-screen md:flex-shrink-0 md:shadow"},[e("div",{staticClass:"flex max-w-xs flex-grow flex-col bg-white"},[e("div",{staticClass:"flex flex-grow flex-col overflow-y-auto overflow-x-hidden"},[e("nav",{staticClass:"min-w-[20rem] flex-1"},[t._t("default")],2)]),e("div",{staticClass:"sticky bottom-0 flex justify-center border-t bg-white py-4"},[e("BaseButton",{attrs:{action:"secondary"},on:{click:t.routeToReview}},[e("BaseTypography",{staticClass:"uppercase",attrs:{variant:"overline"}},[t._v(" Review Questionnaire ")])],1)],1)])])])},X=[];const h={};var J=_(d,W,X,!1,K,null,null,null);function K(t){for(let s in h)this[s]=h[s]}const N=function(){return J.exports}(),f=Q({inheritAttrs:!1});f.props={accountId:{key:"accountId",required:!0,type:String},qId:{key:"qId",required:!0,type:String},value:{key:"value",required:!0,type:null}};f.setup=(t,s)=>{const e=t,n=j(!1),o=r(()=>e.accountId),l=r(()=>e.qId),c=r(()=>e.value),a=r(()=>c.value.sections.map((i,u)=>({name:i.name,path:{to:`/client/companies/${o.value}/journey/cyber-risk-profile/custom-questionnaires/${l.value}`,query:{section:u.toString()}}}))||[]);return{isOpen:n,id:o,sectionLinks:a}};f.components=Object.assign({QuestionnaireSidebarWrapper:N,ChevronLeftSvg:B,QuestionnaireMenuLink:z},f.components);var Y=function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("QuestionnaireSidebarWrapper",{model:{value:t.isOpen,callback:function(n){t.isOpen=n},expression:"isOpen"}},[e("ul",[e("li",{staticClass:"border-b"},[e("RouterLink",{staticClass:"inline-flex no-underline antialiased font-body text-base leading-6 font-medium group w-full py-3 pl-6 pr-2 hover:bg-gradient-to-l hover:from-indigo-100 hover:to-white focus:bg-gradient-to-l focus:from-indigo-100 focus:to-white transform transition duration-100 hover:translate-x-1 focus:outline-none disabled:cursor-not-allowed disabled:opacity-50 space-x-2",attrs:{to:`/client/companies/${t.id}/journey/cyber-risk-profile/custom-questionnaires`}},[e("ChevronLeftSvg",{staticClass:"text-gray-500 -ml-1 h-auto w-5 group-hover:text-indigo-600 group-focus:text-indigo-600"}),e("BaseTypography",{staticClass:"text-gray-500 group-hover:text-indigo-600 group-focus:text-indigo-600",attrs:{variant:"p1"}},[t._v(" Questionnaires ")])],1)],1),t._l(t.sectionLinks,function(n,o){return e("li",{key:o},[e("QuestionnaireMenuLink",{attrs:{link:n}})],1)})],2)])},G=[];const w={};var H=_(f,Y,G,!1,U,null,null,null);function U(t){for(let s in w)this[s]=w[s]}const V=function(){return H.exports}(),v={};v.props={accountId:{key:"accountId",required:!0,type:String},qId:{key:"qId",required:!0,type:String},value:{key:"value",required:!0,type:null}};v.setup=(t,s)=>{const e=t,n=r(()=>e.value),o=r(()=>{var i;const a=[];return(i=n.value)==null||i.sections.forEach(u=>{a.push(u.questions.length)}),a.reduce((u,C)=>u+C,0)}),l=O(),c=r(()=>l.answers.length);return{questionnaire:n,totalQuestions:o,totalAnswers:c}};v.components=Object.assign({QuestionnaireSidebar:V,QuestionnaireBanner:E,ProgressBar:I},v.components);var Z=function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("main",{staticClass:"flex"},[e("QuestionnaireSidebar",{attrs:{"q-id":t.qId,"account-id":t.accountId,value:t.questionnaire}}),e("section",{staticClass:"flex-1 flex flex-col"},[e("QuestionnaireBanner",{attrs:{title:t.questionnaire.name}}),e("ProgressBar",{staticClass:"h-2 bg-white shadow",attrs:{current:t.totalAnswers,max:t.totalQuestions}}),e("div",{staticClass:"mx-auto max-w-7xl p-4 sm:p-6 lg:p-8"},[t.questionnaire.sections.length===0?[e("BaseTypography",{staticClass:"text-gray-500",attrs:{variant:"p1",component:"p"}},[t._v(" No data to display ")])]:e("div",{staticClass:"flex flex-col space-y-6"},[t._t("default")],2)],2)],1)],1)},tt=[];const b={};var et=_(v,Z,tt,!1,st,null,null,null);function st(t){for(let s in b)this[s]=b[s]}const at=function(){return et.exports}();export{at as Q};
