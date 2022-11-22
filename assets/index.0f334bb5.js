import{A as l}from"./AlertFriendly.86996760.js";import{C as m}from"./CompanyQuestionnaireCard.8b0d9b87.js";import{c1 as y,b$ as d,c as r,aG as _,n as f}from"./index.39cee636.js";import"./ProgressBar.bb0d373a.js";const s={};s.setup=(e,n)=>{const t=y("id"),o=d.read(t),a=r(()=>o.data.value),i=_(),c=r(()=>i.questionnaires),p=r(()=>i.inProgressQuestionnaires);return{company:a,questionnaires:c,inProgress:p}};s.components=Object.assign({AlertFriendly:l,CompanyQuestionnaireCard:m},s.components);var v=function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("div",{staticClass:"space-y-6"},[t("BaseTypography",{attrs:{variant:"h5",component:"h2"}},[e._v("Questionnaires")]),e.questionnaires.length===0?t("AlertFriendly",{scopedSlots:e._u([{key:"title",fn:function(){return[e._v("Questionnaire Not Found")]},proxy:!0},{key:"message",fn:function(){return[e._v(" It appears that your company is not associated with any Questionnaires. To learn more and add questionnaires to take, please contact a WhiteHawk Cyber Analyst. ")]},proxy:!0},{key:"action",fn:function(){return[t("BaseButton",{attrs:{shape:"rectangle","display-type":"success",to:{path:"/contact-us",query:{textBody:"I would like to talk with a WhiteHawk Consultant to request a questionnaire for my company.",subject:"Services and Solutions",company:e.company?e.company.name:""}}}},[e._v(" Request Questionnaire ")])]},proxy:!0}],null,!1,1927384782)}):t("ul",{staticClass:"grid grid-cols-3 gap-4"},e._l(e.questionnaires,function(o,a){return t("li",{key:a},[t("CompanyQuestionnaireCard",{attrs:{item:o,"in-progress":e.inProgress}})],1)}),0)],1)},h=[];const u={};var C=f(s,v,h,!1,g,null,null,null);function g(e){for(let n in u)this[n]=u[n]}const S=function(){return C.exports}();export{S as default};
