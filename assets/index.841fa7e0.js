import{A as g,T as h}from"./AppTanStackTable.cd6197a2.js";import{S as x}from"./StatusBadge.64ef06b9.js";import{I as A}from"./IsoDateTimeDisplay.0ee36ac5.js";import{c as T}from"./createOnChangeFn.10d3a00c.js";import{f as $,g as y,h as S,e as C,c,G as I,d as m,n as b,bG as G,ct as D}from"./index.d7842beb.js";import{u as F}from"./createSimpleTable.fdde5950.js";import{G as k}from"./GroupSummaryTable.1311e126.js";import"./magnifying-glass.b7cbe8fe.js";import"./chevron-left.0808b01b.js";import"./TransitionExpand.011f84e2.js";import"./chevron-up.736f4142.js";const E={get(t){return $(["accounts",t,"scorecards"],()=>y.get(`${S}/accounts/${t.value}/scorecards`).then(a=>a.data))}},O={update(){return C(t=>y.put(`${S}/scorecard-orders/${t.id}/status`,t.status).then(a=>a.data))}},n={};n.props={scorecards:{key:"scorecards",required:!0,type:Array}};n.setup=(t,a)=>{const r=t,i=c(()=>r.scorecards.filter(e=>e.status.state==="Expired")),s=T(),l=I(),d=O.update(),p=[s.accessor(e=>e.account.id,{id:"accountId",header:()=>"Account ID",enableColumnFilter:!1}),s.accessor(e=>e.group.id,{id:"groupId",header:()=>"Group ID",enableColumnFilter:!1}),s.accessor(e=>e.id,{id:"scorecardId",header:()=>"Scorecard ID",enableColumnFilter:!1}),s.accessor(e=>e.company.domain,{id:"domain",header:()=>"Company Domain",enableColumnFilter:!1}),s.accessor(e=>e.status.state,{id:"state",header:()=>"Scorecard State",cell:e=>m(x,{props:{value:e.getValue()}}),enableColumnFilter:!1}),s.accessor(e=>e.log.expiresAt,{id:"expiration",header:()=>"Expiration Date",cell:e=>m(A,{props:{value:e.getValue(),format:"date"}}),enableColumnFilter:!1}),s.display({id:"actions",header:"Actions",cell:({row:e})=>m(h,{props:{actions:[{id:"archive",async action(){const o={id:e.original.id,status:{state:"Archived",date:new Date().toISOString()}};await d.mutateAsync(o),l.success("Archived Scorecard Successfully")}}]}})})];return{instance:F(i,p)}};n.components=Object.assign({AppTanStackTable:g},n.components);var P=function(){var t=this,a=t.$createElement,r=t._self._c||a;return r("AppTanStackTable",{attrs:{table:t.instance}})},j=[];const _={};var B=b(n,P,j,!1,w,null,null,null);function w(t){for(let a in _)this[a]=_[a]}const M=function(){return B.exports}(),u={};u.setup=(t,a)=>{const r=G("id"),i=E.get(r),s=c(()=>i.data.value||[]),l=c(()=>s.value.filter(e=>e.status.state==="Expired")),d=D.get(r),p=c(()=>{var e,o;return((o=(e=d.data.value)==null?void 0:e.data)==null?void 0:o.groups)||[]}),f=c(()=>p.value.filter(e=>{var o;return((o=e.status)==null?void 0:o.state)===3}));return{id:r,filteredScorecards:l,filteredGroups:f}};u.components=Object.assign({PortfolioAdminScorecardsTable:M,GroupSummaryTable:k},u.components);var R=function(){var t=this,a=t.$createElement,r=t._self._c||a;return r("section",{staticClass:"space-y-6"},[r("BaseTablePageLayout",{scopedSlots:t._u([{key:"title",fn:function(){return[t._v("Expired Scorecards")]},proxy:!0},{key:"table",fn:function(){return[r("PortfolioAdminScorecardsTable",{attrs:{scorecards:t.filteredScorecards}})]},proxy:!0}])}),r("BaseTablePageLayout",{scopedSlots:t._u([{key:"title",fn:function(){return[t._v("Inactive Groups")]},proxy:!0},{key:"table",fn:function(){return[r("GroupSummaryTable",{attrs:{"account-id":t.id,groups:t.filteredGroups}})]},proxy:!0}])})],1)},V=[];const v={};var H=b(u,R,V,!1,L,null,null,null);function L(t){for(let a in v)this[a]=v[a]}const ee=function(){return H.exports}();export{ee as default};
