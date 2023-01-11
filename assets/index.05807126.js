import{d as u,aS as v,n as d,bs as y,c9 as l}from"./index.e627960d.js";import{A as b,T as k}from"./AppTanStackTable.9bda351a.js";import{c as x}from"./createOnChangeFn.7e56f0c4.js";import{u as I}from"./createSimpleTable.7ef16907.js";import{u as h}from"./usePeratonRiskAnalytics.f421504a.js";import"./magnifying-glass.b7cbe8fe.js";import"./chevron-up.736f4142.js";import"./index.6256b3e0.js";const s={};s.props={accountId:{key:"accountId",required:!0,type:String},subId:{key:"subId",required:!0,type:String},value:{key:"value",required:!0,type:Array}};s.setup=(e,t)=>{const n=e,c=u(()=>n.accountId),i=u(()=>n.subId),_=u(()=>n.value),a=x(),f=[a.group({id:"company",header:()=>"Company",columns:[a.accessor(o=>o.company.id.value,{id:"companyId",header:()=>"ID",enableColumnFilter:!1}),a.accessor(o=>o.company.name,{id:"companyName",header:()=>"Name",enableColumnFilter:!1})]}),a.accessor(o=>o.populationRisk.overallRisk,{id:"overallRisk",header:()=>"Overall Risk",cell:o=>o.getValue().toFixed(4),enableColumnFilter:!1}),a.display({id:"action",header:"Action",cell:({row:o})=>v(k,{props:{actions:[{id:"view",to:`/admin/companies/${c.value}/subscriptions/${i.value}/integrations/5/companies/${o.original.company.id.value}/risk-analytics`}]}})})];return{instance:I(_,f)}};s.components=Object.assign({AppTanStackTable:b},s.components);var $=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("AppTanStackTable",{attrs:{table:e.instance}})},T=[];const p={};var g=d(s,$,T,!1,A,null,null,null);function A(e){for(let t in p)this[t]=p[t]}const C=function(){return g.exports}(),r={};r.setup=(e,t)=>{const n=l("id"),c=l("subscriptionId"),i=h.list(n);return{id:n,subscriptionId:c,riskAnalytics:i}};r.components=Object.assign({BackButton:y,PeratonCompaniesTable:C},r.components);var S=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("BaseTablePageLayout",{scopedSlots:e._u([{key:"backButton",fn:function(){return[n("BackButton",{attrs:{link:".."}})]},proxy:!0},{key:"overline",fn:function(){return[e._v("Peraton")]},proxy:!0},{key:"title",fn:function(){return[e._v("Companies")]},proxy:!0},{key:"table",fn:function(){return[n("PeratonCompaniesTable",{attrs:{"account-id":e.id,"sub-id":e.subscriptionId,value:e.riskAnalytics}})]},proxy:!0}])})},R=[];const m={};var B=d(r,S,R,!1,F,null,null,null);function F(e){for(let t in m)this[t]=m[t]}const V=function(){return B.exports}();export{V as default};
