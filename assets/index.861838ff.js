import{aq as d,b$ as c,r as m,aJ as f,n as v}from"./index.2f8dadb3.js";import{P as _}from"./PortfolioScorecardInput.0577633f.js";import{u as y}from"./useAccountGroupScorecardOrders.34571882.js";import"./DynamicForm.ae78fcbe.js";const r={};r.setup=(t,s)=>{const e=c("id"),a=c("groupId"),o=m(),i=f(),l=y.create(e,a);async function u(){if(o.value){const p={type:"in-depth-v2",licenseType:o.value.licenseType,company:{name:o.value.name,domain:o.value.domain}};await l.mutateAsync(p)}i.push(`/admin/companies/${e.value}/scorecards/portfolio/groups/${a.value}`)}return{scorecard:o,createScorecard:u}};r.components=Object.assign({PortfolioScorecardInput:_,PlusSvg:d},r.components);var C=function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("section",{staticClass:"space-y-6"},[e("BaseSimpleCard",{staticClass:"divide-y"},[e("h2",{staticClass:"p-4 font-display text-lg font-semibold"},[t._v("Create Scorecard")]),e("form",{staticClass:"divide-y",on:{submit:function(a){return a.preventDefault(),t.createScorecard.apply(null,arguments)}}},[e("PortfolioScorecardInput",{model:{value:t.scorecard,callback:function(a){t.scorecard=a},expression:"scorecard"}}),e("div",{staticClass:"p-4"},[e("div",{staticClass:"md:inline-flex"},[e("BaseButton",{staticClass:"w-full space-x-2 md:w-auto",attrs:{"display-type":"info"}},[e("PlusSvg",{staticClass:"h-auto w-4 xl:w-5"}),e("span",[t._v("Create Report")])],1)],1)])],1)])],1)},S=[];const n={};var x=v(r,C,S,!1,g,null,null,null);function g(t){for(let s in n)this[s]=n[s]}const I=function(){return x.exports}();export{I as default};