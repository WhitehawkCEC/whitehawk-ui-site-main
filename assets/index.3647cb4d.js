import{B as f,r as v}from"./resource-accounts__0__subscriptions__0__integrations__black_kite__entities__0__latest_scorecard.v1.7aafa3f7.js";import{ca as i,cs as y,ct as g,d as c,cu as b,n as k}from"./index.87a2880c.js";import"./arrow-down-tray.793d581e.js";import"./ToolTip.0f9b2ce1.js";import"./index.917d3254.js";import"./index.ebbce841.js";import"./GradeLetterDisplay.268db343.js";import"./index.91ba4939.js";import"./ratingScoreDescription.3b48b1ea.js";import"./BundleSolutionDisplay.4f0bae35.js";import"./BasicModal.80a70cae.js";import"./useCompanyWishlistItems.7bf7f015.js";import"./cloneDeep.9b022b53.js";import"./_Uint8Array.fa1c5b7a.js";import"./keys.a295fe6a.js";import"./_baseAssignValue.b9ec5668.js";import"./_copyArray.56331c81.js";import"./FileSaver.min.1452d647.js";const o={};o.setup=(t,s)=>{const e=i("id"),r=i("subscriptionId"),n=i("entityId"),m=y.get(e,n),u=g.get(n),l=c(()=>{var a;return((a=u.data.value)==null?void 0:a.findings)||b.Findings.create()}),d=v.get(e,r,n),_=c(()=>d.data.value);return{id:e,cyberRiskGet:m,findings:l,latest:_}};o.components=Object.assign({BlackKitePerformanceReportDisplay:f},o.components);var R=function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("BaseVueQuery",{attrs:{query:t.cyberRiskGet},scopedSlots:t._u([{key:"success",fn:function(r){var n=r.data;return[e("BlackKitePerformanceReportDisplay",{attrs:{"account-id":t.id,value:n,findings:t.findings,latest:t.latest}})]}}])})},x=[];const p={};var B=k(o,R,x,!1,I,null,null,null);function I(t){for(let s in p)this[s]=p[s]}const $=function(){return B.exports}();export{$ as default};