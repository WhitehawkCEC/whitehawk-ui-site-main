import{ap as m,bX as r,r as v,aI as f,n as _}from"./index.7b120442.js";import{P as y}from"./PortfolioScorecardInput.dfc5d1b6.js";import{u as C}from"./useAccountGroupScorecardOrders.6d006750.js";import"./DynamicForm.54ce95a5.js";const o={};o.setup=(t,s)=>{const e=r("id"),a=r("supplierId"),i=[{text:"One Time",value:"oneTime"},{text:"Annual",value:"annual"}],n=v(),l=f(),u=C.create(e,a);async function p(){if(n.value){const d={type:"in-depth-v2",licenseType:n.value.licenseType,company:{name:n.value.name,domain:n.value.domain}};await u.mutateAsync(d)}l.push(`/admin/companies/${e.value}/scorecards/individual/${a.value}`)}return{licenseTypeOptions:i,scorecard:n,createScorecard:p}};o.components=Object.assign({PortfolioScorecardInput:y,PlusSvg:m},o.components);var x=function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("section",{staticClass:"space-y-6"},[e("BaseSimpleCard",{staticClass:"divide-y"},[e("h2",{staticClass:"p-4 font-display text-lg font-semibold"},[t._v("Create Scorecard")]),e("form",{staticClass:"divide-y",on:{submit:function(a){return a.preventDefault(),t.createScorecard.apply(null,arguments)}}},[e("PortfolioScorecardInput",{attrs:{options:t.licenseTypeOptions},model:{value:t.scorecard,callback:function(a){t.scorecard=a},expression:"scorecard"}}),e("div",{staticClass:"p-4"},[e("div",{staticClass:"md:inline-flex"},[e("BaseButton",{staticClass:"w-full space-x-2 md:w-auto",attrs:{disabled:!0,"display-type":"info"}},[e("PlusSvg",{staticClass:"h-auto w-4 xl:w-5"}),e("span",[t._v("Create Report")])],1)],1)])],1)])],1)},S=[];const c={};var b=_(o,x,S,!1,h,null,null,null);function h(t){for(let s in c)this[s]=c[s]}const w=function(){return b.exports}();export{w as default};
