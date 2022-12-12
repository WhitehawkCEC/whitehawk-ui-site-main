import{ag as b,aP as v,aQ as y,aD as h,c,aF as x,aS as m,bs as A,n as g,c8 as T,cF as $}from"./index.fc6fe55f.js";import{A as C,T as F}from"./AppTanStackTable.49bf929e.js";import{S as I}from"./StatusBadge.a79ec403.js";import{c as D}from"./createOnChangeFn.91bd4c30.js";import{u as k}from"./createSimpleTable.0bddfb04.js";import{G as E}from"./GroupSummaryTable.63f32af6.js";import"./magnifying-glass.b7cbe8fe.js";import"./TransitionExpand.fc606591.js";import"./chevron-up.736f4142.js";import"./IsoDateTimeDisplay.16e00368.js";const G={get(t){return b(["accounts",t,"scorecards"],()=>v.get(`${y}/accounts/${t.value}/scorecards`).then(a=>a.data))}},P={update(){return h(t=>v.put(`${y}/scorecard-orders/${t.id}/status`,t.status).then(a=>a.data))}},n={};n.props={scorecards:{key:"scorecards",required:!0,type:Array}};n.setup=(t,a)=>{const s=t,i=c(()=>s.scorecards.filter(e=>e.status.state==="Expired")),o=D(),l=x(),d=P.update(),p=[o.accessor(e=>e.account.id,{id:"accountId",header:()=>"Account ID",enableColumnFilter:!1}),o.accessor(e=>e.group.id,{id:"groupId",header:()=>"Group ID",enableColumnFilter:!1}),o.accessor(e=>e.id,{id:"scorecardId",header:()=>"Scorecard ID",enableColumnFilter:!1}),o.accessor(e=>e.company.domain,{id:"domain",header:()=>"Company Domain",enableColumnFilter:!1}),o.accessor(e=>e.status.state,{id:"state",header:()=>"Scorecard State",cell:e=>m(I,{props:{value:e.getValue()}}),enableColumnFilter:!1}),o.accessor(e=>e.log.expiresAt,{id:"expiresAt",header:()=>"Expires At",cell:e=>{var r;if(e.getValue())return m(A,{props:{value:(r=e.getValue())==null?void 0:r.toLocaleString(),format:"date"}})},enableColumnFilter:!1}),o.display({id:"actions",header:"Actions",cell:({row:e})=>m(F,{props:{actions:[{id:"archive",async action(){const r={id:e.original.id,status:{state:"Archived",date:new Date().toISOString()}};await d.mutateAsync(r),l.success("Archived Scorecard Successfully")}}]}})})];return{instance:k(i,p)}};n.components=Object.assign({AppTanStackTable:C},n.components);var O=function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("AppTanStackTable",{attrs:{table:t.instance}})},j=[];const _={};var B=g(n,O,j,!1,V,null,null,null);function V(t){for(let a in _)this[a]=_[a]}const w=function(){return B.exports}(),u={};u.setup=(t,a)=>{const s=T("id"),i=G.get(s),o=c(()=>i.data.value||[]),l=c(()=>o.value.filter(e=>e.status.state==="Expired")),d=$.get(s),p=c(()=>{var e,r;return((r=(e=d.data.value)==null?void 0:e.data)==null?void 0:r.groups)||[]}),f=c(()=>p.value.filter(e=>{var r;return((r=e.status)==null?void 0:r.state)===3}));return{id:s,filteredScorecards:l,filteredGroups:f}};u.components=Object.assign({PortfolioAdminScorecardsTable:w,GroupSummaryTable:E},u.components);var L=function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("section",{staticClass:"space-y-6"},[s("BaseTablePageLayout",{scopedSlots:t._u([{key:"title",fn:function(){return[t._v("Expired Scorecards")]},proxy:!0},{key:"table",fn:function(){return[s("PortfolioAdminScorecardsTable",{attrs:{scorecards:t.filteredScorecards}})]},proxy:!0}])}),s("BaseTablePageLayout",{scopedSlots:t._u([{key:"title",fn:function(){return[t._v("Inactive Groups")]},proxy:!0},{key:"table",fn:function(){return[s("GroupSummaryTable",{attrs:{"account-id":t.id,groups:t.filteredGroups}})]},proxy:!0}])})],1)},M=[];const S={};var Q=g(u,L,M,!1,R,null,null,null);function R(t){for(let a in S)this[a]=S[a]}const Z=function(){return Q.exports}();export{Z as default};
