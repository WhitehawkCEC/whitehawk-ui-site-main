import{bu as l,c1 as n,r as m,aB as d,n as u}from"./index.765bdb5f.js";import{S as _}from"./ScorecardSnapshotInput.565f9a4d.js";import{u as f}from"./useSnapshotScorecards.9b2e41c6.js";import"./BundleSolutionDisplay.0e235177.js";import"./BasicModal.977611d7.js";import"./useCompanyWishlistItems.5fc299b4.js";import"./cloneDeep.3a17a8ab.js";import"./_Uint8Array.9365bc74.js";import"./keys.3510b3c2.js";import"./_baseAssignValue.a5c8bbec.js";import"./_copyArray.56331c81.js";import"./TabbedPanel.8d76693f.js";import"./GaugeChart.9b5fc39c.js";const e={};e.setup=(t,a)=>{const s=n("id"),r=n("scorecardId"),o=m(),p=f.read(s,r);return d(()=>p.data.value,c=>{c&&(o.value=c)},{immediate:!0}),{id:s,scorecardId:r,scorecard:o}};e.components=Object.assign({BackButton:l,ScorecardSnapshotInput:_},e.components);var v=function(){var t=this,a=t.$createElement,s=t._self._c||a;return t.scorecard?s("section",{staticClass:"flex flex-col"},[s("div",{staticClass:"flex flex-col space-y-4 sm:flex-row sm:items-center sm:space-y-0 sm:space-x-4"},[s("div",[s("BackButton",{attrs:{link:`/admin/companies/${t.id}/scorecards/snapshot`}})],1),s("div",{staticClass:"flex flex-col"},[s("BaseTypography",{staticClass:"font-display text-xl font-semibold",attrs:{variant:"h5",component:"h3"}},[t._v(" "+t._s(t.scorecard.company.name)+" ")]),s("BaseTypography",{staticClass:"uppercase text-gray-500",attrs:{variant:"overline"}},[t._v(" "+t._s(t.scorecardId)+" ")])],1)]),s("ScorecardSnapshotInput",{attrs:{id:t.id},model:{value:t.scorecard,callback:function(r){t.scorecard=r},expression:"scorecard"}})],1):t._e()},x=[];const i={};var h=u(e,v,x,!1,y,null,null,null);function y(t){for(let a in i)this[a]=i[a]}const E=function(){return h.exports}();export{E as default};
