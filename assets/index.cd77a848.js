import{B as c}from"./BlackKitePerformanceReportDisplay.31741b44.js";import{c5 as i,du as u,n as p}from"./index.575adb5e.js";import"./BlackKiteSummaryOverview.4cd66d78.js";import"./BlackKiteProgressBar.9a501b61.js";import"./index.ebbce841.js";import"./ToolTip.652e85ac.js";import"./GradeLetterDisplay.a7140103.js";import"./TransitionExpand.27b4cea5.js";import"./ratingScoreDescription.dc21462c.js";import"./BlackKiteRiskVectorsDisplay.58d23997.js";import"./CmmcAnalysisDisplay.8d2fbf49.js";const n={};n.setup=(t,e)=>{const r=i("id"),o=i("entityId");return{cyberRiskGet:u.get(r,o)}};n.components=Object.assign({BlackKitePerformanceReportDisplay:c},n.components);var m=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("BaseVueQuery",{attrs:{query:t.cyberRiskGet},scopedSlots:t._u([{key:"success",fn:function(o){var s=o.data;return[r("BlackKitePerformanceReportDisplay",{attrs:{value:s}})]}}])})},_=[];const a={};var l=p(n,m,_,!1,f,null,null,null);function f(t){for(let e in a)this[e]=a[e]}const I=function(){return l.exports}();export{I as default};