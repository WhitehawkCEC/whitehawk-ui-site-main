import{B as c}from"./BlackKitePerformanceReportDisplay.a8f40a94.js";import{c8 as i,dv as p,n as u}from"./index.99fb95af.js";import"./BlackKiteSummaryOverview.b655a311.js";import"./BlackKiteProgressBar.6ecd3e6f.js";import"./index.ebbce841.js";import"./ToolTip.dc4e62e7.js";import"./GradeLetterDisplay.76d997a3.js";import"./TransitionExpand.048025e9.js";import"./ratingScoreDescription.dc21462c.js";import"./BlackKiteRiskVectorsDisplay.a09ab64f.js";import"./CmmcAnalysisDisplay.111da375.js";const n={};n.setup=(t,e)=>{const r=i("id"),o=i("entityId");return{cyberRiskGet:p.get(r,o)}};n.components=Object.assign({BlackKitePerformanceReportDisplay:c},n.components);var m=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("BaseVueQuery",{attrs:{query:t.cyberRiskGet},scopedSlots:t._u([{key:"success",fn:function(o){var s=o.data;return[r("BlackKitePerformanceReportDisplay",{attrs:{value:s}})]}}])})},_=[];const a={};var l=u(n,m,_,!1,f,null,null,null);function f(t){for(let e in a)this[e]=a[e]}const I=function(){return l.exports}();export{I as default};