import{C as u,P as _}from"./PeratonRiskAnalyticsDisplay.95dbba0e.js";import{ca as o,d as y,n as d}from"./index.1144ecd1.js";import{u as r}from"./usePeratonRiskAnalytics.67113060.js";import"./chartjs-adapter-date-fns.esm.e0599476.js";import"./chart.c54a61e9.js";import"./index.e9a9ceff.js";import"./index.ac110f80.js";import"./index.7f617598.js";import"./index.7a54c9f6.js";import"./index.87e44ac4.js";import"./index.4c516129.js";import"./index.d35b2858.js";import"./index.1652bd11.js";import"./index.eebbf92c.js";import"./index.1dbbc31a.js";import"./ToolTip.d3a3db60.js";import"./index.ebbce841.js";import"./index.8094b592.js";const n={};n.setup=(s,i)=>{const t=o("id"),e=o("subscriptionId"),c=o("companyId"),p=r.list(t),m=r.read(t,c),l=y(()=>`/client/companies/${t.value}/subscriptions/${e.value}/suppliers`);return{riskAnalytics:p,riskAnalysis:m,link:l}};n.components=Object.assign({CompanyIdHeader:u,PeratonRiskAnalyticsDisplay:_},n.components);var k=function(){var s=this,i=s.$createElement,t=s._self._c||i;return s.riskAnalysis?t("section",{staticClass:"space-y-6"},[t("CompanyIdHeader",{attrs:{company:s.riskAnalysis.company,link:s.link}}),t("PeratonRiskAnalyticsDisplay",{attrs:{value:s.riskAnalysis,"risk-analytics":s.riskAnalytics}})],1):s._e()},f=[];const a={};var v=d(n,k,f,!1,A,null,null,null);function A(s){for(let i in a)this[i]=a[i]}const q=function(){return v.exports}();export{q as default};