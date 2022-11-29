import{P as h}from"./ProgressBar.957d08cd.js";import{c as o,b$ as q,aH as f,n as g,c5 as x,b4 as Q,r as b,c3 as k,aA as B}from"./index.2cafd56c.js";const l={};l.props={id:{key:"id",required:!0,type:String}};l.setup=(e,n)=>{const t=e,s=o(()=>t.id),a=q.read(s),p=o(()=>a.data.value),m=o(()=>{var r;const u=[];return(r=p.value)==null||r.sections.forEach(c=>{u.push(c.questions.length)}),u.reduce((c,C)=>c+C,0)}),i=f(),y=o(()=>i.inProgressQuestionnaires?i.inProgressQuestionnaires.map(u=>{var r;return(r=u.id)==null?void 0:r.value}):[]);return{questionnaireId:s,questionnaire:p,totalQuestions:m,inProgressIds:y}};l.components=Object.assign({ProgressBar:h},l.components);var P=function(){var e=this,n=e.$createElement,t=e._self._c||n;return e.questionnaire?t("BaseSimpleCard",{staticClass:"flex h-full flex-col justify-between space-y-3 p-5"},[t("BaseTypography",{attrs:{variant:"subtitle3"}},[e._v(" "+e._s(e.questionnaire.name)+" ")]),t("div",{staticClass:"flex justify-between"},[t("BaseTypography",{staticClass:"text-gray-500",attrs:{variant:"p3"}},[e._v(" "+e._s(e.totalQuestions)+" Questions ")]),e.inProgressIds.includes(e.questionnaireId)?[t("BaseLink",{attrs:{to:`custom-questionnaires/${e.questionnaireId}`,"display-type":"primary-prime"}},[t("span",{staticClass:"font-display text-sm font-semibold uppercase"},[e._v(" Continue ")])]),t("ProgressBar",{staticClass:"absolute inset-x-0 bottom-0 h-2 bg-gray-200",attrs:{current:35,max:100}})]:[t("BaseLink",{attrs:{"display-type":"primary-prime",to:`custom-questionnaires/${e.questionnaireId}`}},[t("span",{staticClass:"font-display text-sm font-semibold uppercase"},[e._v(" Begin ")])])]],2)],1):e._e()},$=[];const _={};var S=g(l,P,$,!1,w,null,null,null);function w(e){for(let n in _)this[n]=_[n]}const I=function(){return S.exports}(),d={};d.setup=(e,n)=>{const t=x("id"),s=Q("status",void 0),a=b(),p=k.read(t),m=o(()=>p.data.value),i=f(),y=o(()=>i.questionnaires),u=o(()=>i.inProgressQuestionnaires),r=o(()=>i.completedQuestionnaires);return B(()=>s.value,c=>{a.value=c},{immediate:!0}),{status:a,company:m,questionnaires:y,inProgress:u,completed:r}};d.components=Object.assign({CompanyQuestionnaireCard:I},d.components);var j=function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("div",{staticClass:"space-y-6"},[t("BaseTypography",{attrs:{variant:"h5",component:"h2"}},[e._v("Questionnaires")]),e.questionnaires.length===0?t("BaseAlert",{attrs:{type:"friendly"},scopedSlots:e._u([{key:"title",fn:function(){return[e._v("Questionnaire Not Found")]},proxy:!0},{key:"message",fn:function(){return[e._v(" It appears that your company is not associated with any Questionnaires. To learn more and add questionnaires to take, please contact a WhiteHawk Cyber Analyst. ")]},proxy:!0},{key:"action",fn:function(){return[t("BaseButton",{attrs:{shape:"rectangle","display-type":"success",to:{path:"/contact-us",query:{textBody:"I would like to talk with a WhiteHawk Consultant to request a questionnaire for my company.",subject:"Services and Solutions",company:e.company?e.company.name:""}}}},[e._v(" Request Questionnaire ")])]},proxy:!0}],null,!1,1927384782)}):t("ul",{staticClass:"grid sm:grid-cols-3 md:grid-cols-1 lg:grid-cols-3 gap-4"},[e.status==="completed"?e._l(e.completed,function(s,a){return t("li",{key:a},[s.id?t("CompanyQuestionnaireCard",{attrs:{id:s.id.value}}):e._e()],1)}):e.status==="in-progress"?e._l(e.inProgress,function(s,a){return t("li",{key:a},[s.id?t("CompanyQuestionnaireCard",{attrs:{id:s.id.value}}):e._e()],1)}):e._l(e.questionnaires,function(s,a){return t("li",{key:a},[s.id?t("CompanyQuestionnaireCard",{attrs:{id:s.id.value}}):e._e()],1)})],2)],1)},R=[];const v={};var A=g(d,j,R,!1,T,null,null,null);function T(e){for(let n in v)this[n]=v[n]}const H=function(){return A.exports}();export{H as default};
