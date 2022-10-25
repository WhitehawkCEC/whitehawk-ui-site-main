import{A as g,T as h}from"./AppTanStackTable.716c407f.js";import{S as x}from"./StatusBadge.a0679aa9.js";import{I as A}from"./IsoDateTimeDisplay.d1bb4f43.js";import{c as T}from"./createOnChangeFn.0db18275.js";import{ag as $,aP as y,aQ as S,aD as C,c,aF as I,aS as m,n as b,b$ as D,cz as F}from"./index.5601926e.js";import{u as k}from"./createSimpleTable.73cc7d1f.js";import{G as E}from"./GroupSummaryTable.b92528d0.js";import"./magnifying-glass.b7cbe8fe.js";import"./TransitionExpand.22dffc10.js";import"./chevron-up.736f4142.js";const G={get(t){return $(["accounts",t,"scorecards"],()=>y.get(`${S}/accounts/${t.value}/scorecards`).then(a=>a.data))}},P={update(){return C(t=>y.put(`${S}/scorecard-orders/${t.id}/status`,t.status).then(a=>a.data))}},n={};n.props={scorecards:{key:"scorecards",required:!0,type:Array}};n.setup=(t,a)=>{const s=t,i=c(()=>s.scorecards.filter(e=>e.status.state==="Expired")),r=T(),l=I(),d=P.update(),p=[r.accessor(e=>e.account.id,{id:"accountId",header:()=>"Account ID",enableColumnFilter:!1}),r.accessor(e=>e.group.id,{id:"groupId",header:()=>"Group ID",enableColumnFilter:!1}),r.accessor(e=>e.id,{id:"scorecardId",header:()=>"Scorecard ID",enableColumnFilter:!1}),r.accessor(e=>e.company.domain,{id:"domain",header:()=>"Company Domain",enableColumnFilter:!1}),r.accessor(e=>e.status.state,{id:"state",header:()=>"Scorecard State",cell:e=>m(x,{props:{value:e.getValue()}}),enableColumnFilter:!1}),r.accessor(e=>e.log.expiresAt,{id:"expiration",header:()=>"Expiration Date",cell:e=>m(A,{props:{value:e.getValue(),format:"date"}}),enableColumnFilter:!1}),r.display({id:"actions",header:"Actions",cell:({row:e})=>m(h,{props:{actions:[{id:"archive",async action(){const o={id:e.original.id,status:{state:"Archived",date:new Date().toISOString()}};await d.mutateAsync(o),l.success("Archived Scorecard Successfully")}}]}})})];return{instance:k(i,p)}};n.components=Object.assign({AppTanStackTable:g},n.components);var O=function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("AppTanStackTable",{attrs:{table:t.instance}})},j=[];const _={};var B=b(n,O,j,!1,w,null,null,null);function w(t){for(let a in _)this[a]=_[a]}const M=function(){return B.exports}(),u={};u.setup=(t,a)=>{const s=D("id"),i=G.get(s),r=c(()=>i.data.value||[]),l=c(()=>r.value.filter(e=>e.status.state==="Expired")),d=F.get(s),p=c(()=>{var e,o;return((o=(e=d.data.value)==null?void 0:e.data)==null?void 0:o.groups)||[]}),f=c(()=>p.value.filter(e=>{var o;return((o=e.status)==null?void 0:o.state)===3}));return{id:s,filteredScorecards:l,filteredGroups:f}};u.components=Object.assign({PortfolioAdminScorecardsTable:M,GroupSummaryTable:E},u.components);var Q=function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("section",{staticClass:"space-y-6"},[s("BaseTablePageLayout",{scopedSlots:t._u([{key:"title",fn:function(){return[t._v("Expired Scorecards")]},proxy:!0},{key:"table",fn:function(){return[s("PortfolioAdminScorecardsTable",{attrs:{scorecards:t.filteredScorecards}})]},proxy:!0}])}),s("BaseTablePageLayout",{scopedSlots:t._u([{key:"title",fn:function(){return[t._v("Inactive Groups")]},proxy:!0},{key:"table",fn:function(){return[s("GroupSummaryTable",{attrs:{"account-id":t.id,groups:t.filteredGroups}})]},proxy:!0}])})],1)},R=[];const v={};var V=b(u,Q,R,!1,z,null,null,null);function z(t){for(let a in v)this[a]=v[a]}const Z=function(){return V.exports}();export{Z as default};