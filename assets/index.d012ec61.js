import{ah as x,aP as b,aQ as g,aD as A,d as n,aF as I,aS as f,br as T,n as h,bs as k,ca as y,cI as $}from"./index.1543f442.js";import{A as C,T as B}from"./AppTanStackTable.666e7cbc.js";import{S as F}from"./StatusBadge.7e94c76a.js";import{c as D}from"./createOnChangeFn.4b472854.js";import{u as E}from"./createSimpleTable.a9e677bc.js";import{G}from"./GroupSummaryTable.08f2d6fe.js";import"./magnifying-glass.b7cbe8fe.js";import"./chevron-up.736f4142.js";import"./IsoDateTimeDisplay.ad4424dd.js";const P={get(e){return x(["accounts",e,"scorecards"],()=>b.get(`${g}/accounts/${e.value}/scorecards`).then(a=>a.data))}},O={update(){return A(e=>b.put(`${g}/scorecard-orders/${e.id}/status`,e.status).then(a=>a.data))}},u={};u.props={scorecards:{key:"scorecards",required:!0,type:Array}};u.setup=(e,a)=>{const s=e,l=n(()=>s.scorecards.filter(t=>t.status.state==="Expired")),o=D(),d=I(),p=O.update(),m=[o.accessor(t=>t.account.id,{id:"accountId",header:()=>"Account ID",enableColumnFilter:!1}),o.accessor(t=>t.group.id,{id:"groupId",header:()=>"Group ID",enableColumnFilter:!1}),o.accessor(t=>t.id,{id:"scorecardId",header:()=>"Scorecard ID",enableColumnFilter:!1}),o.accessor(t=>t.company.domain,{id:"domain",header:()=>"Company Domain",enableColumnFilter:!1}),o.accessor(t=>t.status.state,{id:"state",header:()=>"Scorecard State",cell:t=>f(F,{props:{value:t.getValue()}}),enableColumnFilter:!1}),o.accessor(t=>t.log.expiresAt,{id:"expiresAt",header:()=>"Expires At",cell:t=>{var r;if(t.getValue())return f(T,{props:{value:(r=t.getValue())==null?void 0:r.toLocaleString(),format:"date"}})},enableColumnFilter:!1}),o.display({id:"actions",header:"Actions",cell:({row:t})=>f(B,{props:{actions:[{id:"archive",async action(){const r={id:t.original.id,status:{state:"Archived",date:new Date().toISOString()}};await p.mutateAsync(r),d.success("Archived Scorecard Successfully")}}]}})})];return{instance:E(l,m)}};u.components=Object.assign({AppTanStackTable:C},u.components);var j=function(){var e=this,a=e.$createElement,s=e._self._c||a;return s("AppTanStackTable",{attrs:{table:e.instance}})},V=[];const S={};var w=h(u,j,V,!1,L,null,null,null);function L(e){for(let a in S)this[a]=S[a]}const M=function(){return w.exports}(),i={};i.setup=(e,a)=>{const s=y("id"),l=y("subscriptionId"),o=P.get(s),d=n(()=>o.data.value||[]),p=n(()=>d.value.filter(r=>r.status.state==="Expired")),m=$.get(s),_=n(()=>{var r,c;return((c=(r=m.data.value)==null?void 0:r.data)==null?void 0:c.groups)||[]}),t=n(()=>_.value.filter(r=>{var c;return((c=r.status)==null?void 0:c.state)===3}));return{id:s,subscriptionId:l,filteredScorecards:p,filteredGroups:t}};i.components=Object.assign({BackButton:k,PortfolioAdminScorecardsTable:M,GroupSummaryTable:G},i.components);var Q=function(){var e=this,a=e.$createElement,s=e._self._c||a;return s("section",{staticClass:"space-y-6"},[s("BaseTablePageLayout",{scopedSlots:e._u([{key:"backButton",fn:function(){return[s("BackButton",{attrs:{link:"../in-depth"}})]},proxy:!0},{key:"title",fn:function(){return[e._v("Expired Scorecards")]},proxy:!0},{key:"table",fn:function(){return[s("PortfolioAdminScorecardsTable",{attrs:{scorecards:e.filteredScorecards}})]},proxy:!0}])}),s("BaseTablePageLayout",{scopedSlots:e._u([{key:"title",fn:function(){return[e._v("Inactive Groups")]},proxy:!0},{key:"table",fn:function(){return[s("GroupSummaryTable",{attrs:{"account-id":e.id,"sub-id":e.subscriptionId,groups:e.filteredGroups}})]},proxy:!0}])})],1)},R=[];const v={};var H=h(i,Q,R,!1,U,null,null,null);function U(e){for(let a in v)this[a]=v[a]}const ee=function(){return H.exports}();export{ee as default};