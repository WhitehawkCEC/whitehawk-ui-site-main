import{A as f,T as y}from"./AppTanStackTable.218e250d.js";import{c as b}from"./createOnChangeFn.3127b769.js";import{c as l,aS as k,n as d,c8 as u}from"./index.89daa9e1.js";import{u as I}from"./createSimpleTable.114baee8.js";import{u as h}from"./usePeratonRiskAnalytics.0d4ba8cc.js";import"./magnifying-glass.b7cbe8fe.js";import"./TransitionExpand.bdeb7c21.js";import"./chevron-up.736f4142.js";import"./index.3f69bf94.js";const a={};a.props={accountId:{key:"accountId",required:!0,type:String},subId:{key:"subId",required:!0,type:String},value:{key:"value",required:!0,type:Array}};a.setup=(e,n)=>{const t=e,c=l(()=>t.accountId),i=l(()=>t.subId),_=l(()=>t.value),s=b(),v=[s.group({id:"company",header:()=>"Company",columns:[s.accessor(o=>o.company.id.value,{id:"companyId",header:()=>"ID",enableColumnFilter:!1}),s.accessor(o=>o.company.name,{id:"companyName",header:()=>"Name",enableColumnFilter:!1})]}),s.accessor(o=>o.populationRisk.overallRisk,{id:"overallRisk",header:()=>"Overall Risk",cell:o=>o.getValue().toFixed(4),enableColumnFilter:!1}),s.display({id:"action",header:"Action",cell:({row:o})=>k(y,{props:{actions:[{id:"view",to:`/admin/companies/${c.value}/subscriptions/${i.value}/integrations/5/companies/${o.original.company.id.value}/risk-analytics`}]}})})];return{instance:I(_,v)}};a.components=Object.assign({AppTanStackTable:f},a.components);var x=function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("AppTanStackTable",{attrs:{table:e.instance}})},$=[];const p={};var T=d(a,x,$,!1,g,null,null,null);function g(e){for(let n in p)this[n]=p[n]}const A=function(){return T.exports}(),r={};r.setup=(e,n)=>{const t=u("id"),c=u("subscriptionId"),i=h.list(t);return{id:t,subscriptionId:c,riskAnalytics:i}};r.components=Object.assign({PeratonCompaniesTable:A},r.components);var C=function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("BaseTablePageLayout",{scopedSlots:e._u([{key:"title",fn:function(){return[e._v("Peraton Companies")]},proxy:!0},{key:"table",fn:function(){return[t("PeratonCompaniesTable",{attrs:{"account-id":e.id,"sub-id":e.subscriptionId,value:e.riskAnalytics}})]},proxy:!0}])})},S=[];const m={};var R=d(r,C,S,!1,F,null,null,null);function F(e){for(let n in m)this[n]=m[n]}const z=function(){return R.exports}();export{z as default};