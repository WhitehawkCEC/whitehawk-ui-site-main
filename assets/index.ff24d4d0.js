import{P as m,bG as r,r as v,I as f,n as _}from"./index.d7842beb.js";import{P as y}from"./PortfolioScorecardInput.215af61d.js";import{u as C}from"./useAccountGroupScorecardOrders.f580f047.js";import"./DynamicForm.461a2b0a.js";const n={};n.setup=(t,a)=>{const e=r("id"),s=r("groupId"),i=[{text:"One Time",value:"oneTime"},{text:"Annual",value:"annual"}],o=v(),l=f(),u=C.create(e,s);async function p(){if(o.value){const d={type:"in-depth-v2",licenseType:o.value.licenseType,company:{name:o.value.name,domain:o.value.domain}};await u.mutateAsync(d)}l.push(`/admin/companies/${e.value}/scorecards/portfolio/groups/${s.value}`)}return{licenseTypeOptions:i,scorecard:o,createScorecard:p}};n.components=Object.assign({PortfolioScorecardInput:y,PlusSvg:m},n.components);var x=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("section",{staticClass:"space-y-6"},[e("BaseSimpleCard",{staticClass:"divide-y"},[e("h2",{staticClass:"p-4 font-display text-lg font-semibold"},[t._v("Create Scorecard")]),e("form",{staticClass:"divide-y",on:{submit:function(s){return s.preventDefault(),t.createScorecard.apply(null,arguments)}}},[e("PortfolioScorecardInput",{attrs:{options:t.licenseTypeOptions},model:{value:t.scorecard,callback:function(s){t.scorecard=s},expression:"scorecard"}}),e("div",{staticClass:"p-4"},[e("div",{staticClass:"md:inline-flex"},[e("BaseButton",{staticClass:"w-full space-x-2 md:w-auto",attrs:{"display-type":"info"}},[e("PlusSvg",{staticClass:"h-auto w-4 xl:w-5"}),e("span",[t._v("Create Report")])],1)],1)])],1)])],1)},S=[];const c={};var g=_(n,x,S,!1,h,null,null,null);function h(t){for(let a in c)this[a]=c[a]}const w=function(){return g.exports}();export{w as default};
