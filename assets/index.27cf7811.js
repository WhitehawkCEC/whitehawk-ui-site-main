import{B as m}from"./BlackKitePerformanceReportDisplay.c0c14476.js";import{ca as i,cs as _,ct as l,d,cu as f,n as y}from"./index.6ef5ab54.js";import"./ToolTip.96a71265.js";import"./BlackKiteProgressBar.4ae6fcf1.js";import"./index.ebbce841.js";import"./GradeLetterDisplay.093b33ce.js";import"./ratingScoreDescription.3b48b1ea.js";const a={};a.setup=(t,e)=>{const n=i("id"),s=i("entityId"),r=_.get(n,s),u=l.get(s),p=d(()=>{var o;return((o=u.data.value)==null?void 0:o.findings)||f.Findings.create()});return{cyberRiskGet:r,findings:p}};a.components=Object.assign({BlackKitePerformanceReportDisplay:m},a.components);var v=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("BaseVueQuery",{attrs:{query:t.cyberRiskGet},scopedSlots:t._u([{key:"success",fn:function(s){var r=s.data;return[n("BlackKitePerformanceReportDisplay",{attrs:{value:r,findings:t.findings}})]}}])})},g=[];const c={};var k=y(a,v,g,!1,R,null,null,null);function R(t){for(let e in c)this[e]=c[e]}const P=function(){return k.exports}();export{P as default};