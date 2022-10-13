import{C as _}from"./calendar.aad8910e.js";import{bv as y,c2 as i,r as B,d as b,aC as x,bJ as S,aH as C,aK as w,n as g}from"./index.ad2ff904.js";import{B as k}from"./BatchSchedulerInput.9b2658eb.js";import{u as l}from"./useScheduledBatches.1fbec447.js";import"./AppVDateRangePicker.46d3208a.js";import"./index.75ce774a.js";import"./index.28672862.js";import"./index.fb7d7d9f.js";import"./index.91aa5ddc.js";import"./index.7a54c9f6.js";const n={};n.setup=(t,a)=>{const e=i("id"),c=i("batchId"),o=l.read(e,c),s=B(),m=b(()=>o.data.value);x(m,r=>{r&&(s.value=r)},{immediate:!0});const p=S.list(),u=C(),h=w(),f=l.update(e,c);async function v(){s.value&&await f.mutateAsync(s.value)&&(u.success("Batch updated successfully"),h.push(`/admin/companies/${e.value}/scorecards/batch/scheduler`)),u.error("Something went wrong")}return{id:e,schedule:s,companiesQuery:p,submit:v}};n.components=Object.assign({BackButton:y,BatchSchedulerInput:k,CalendarSvg:_},n.components);var I=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("section",{staticClass:"space-y-6"},[e("div",{staticClass:"flex flex-col space-y-4 sm:flex-row sm:items-center sm:space-y-0 sm:space-x-4"},[e("div",[e("BackButton",{attrs:{link:`/admin/companies/${t.id}/scorecards/batch/scheduler`}})],1),e("BaseTypography",{attrs:{variant:"h5",component:"h2"}},[t._v(" Update Scheduled Batch ")])],1),e("BaseVueQuery",{attrs:{query:t.companiesQuery},scopedSlots:t._u([{key:"success",fn:function(c){var o=c.data;return[e("form",{on:{submit:function(s){return s.preventDefault(),t.submit.apply(null,arguments)}}},[e("BatchSchedulerInput",{attrs:{companies:o},model:{value:t.schedule,callback:function(s){t.schedule=s},expression:"schedule"}})],1)]}}])}),e("BaseButton",{staticClass:"w-full space-x-2 md:w-auto",attrs:{type:"button"},on:{click:t.submit}},[e("CalendarSvg",{staticClass:"h-auto w-4 xl:w-5"}),e("span",[t._v("Update Schedule")])],1)],1)},Q=[];const d={};var R=g(n,I,Q,!1,U,null,null,null);function U(t){for(let a in d)this[a]=d[a]}const K=function(){return R.exports}();export{K as default};