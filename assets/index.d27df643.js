import{C as v}from"./calendar.aad8910e.js";import{B as y}from"./BackButton.aa9060de.js";import{B}from"./BatchSchedulerInput.e2cef183.js";import{bH as i,r as b,c as x,w as S,a1 as w,G as C,I as g,n as k}from"./index.2de808b0.js";import{u as l}from"./useScheduledBatches.f7217967.js";import"./chevron-left.0808b01b.js";import"./index.c77982a1.js";import"./index.c3ec7408.js";import"./index.810f09a3.js";import"./index.1135f873.js";import"./index.7a54c9f6.js";const n={};n.setup=(e,a)=>{const t=i("id"),c=i("batchId"),o=l.read(t,c),s=b(),d=x(()=>o.data.value);S(d,r=>{r&&(s.value=r)},{immediate:!0});const p=w.list(),u=C(),h=g(),f=l.update(t,c);async function _(){s.value&&await f.mutateAsync(s.value)&&(u.success("Batch updated successfully"),h.push(`/admin/companies/${t.value}/scorecards/batch/scheduler`)),u.error("Something went wrong")}return{id:t,schedule:s,companiesQuery:p,submit:_}};n.components=Object.assign({BackButton:y,BatchSchedulerInput:B,CalendarSvg:v},n.components);var I=function(){var e=this,a=e.$createElement,t=e._self._c||a;return t("section",{staticClass:"space-y-6"},[t("div",{staticClass:"flex flex-col space-y-4 sm:flex-row sm:items-center sm:space-y-0 sm:space-x-4"},[t("div",[t("BackButton",{attrs:{link:`/admin/companies/${e.id}/scorecards/batch/scheduler`}})],1),t("BaseTypography",{attrs:{variant:"h5",component:"h2"}},[e._v(" Update Scheduled Batch ")])],1),t("BaseVueQuery",{attrs:{query:e.companiesQuery},scopedSlots:e._u([{key:"success",fn:function(c){var o=c.data;return[t("form",{on:{submit:function(s){return s.preventDefault(),e.submit.apply(null,arguments)}}},[t("BatchSchedulerInput",{attrs:{companies:o},model:{value:e.schedule,callback:function(s){e.schedule=s},expression:"schedule"}})],1)]}}])}),t("BaseButton",{staticClass:"w-full space-x-2 md:w-auto",attrs:{type:"button"},on:{click:e.submit}},[t("CalendarSvg",{staticClass:"h-auto w-4 xl:w-5"}),t("span",[e._v("Update Schedule")])],1)],1)},Q=[];const m={};var R=k(n,I,Q,!1,U,null,null,null);function U(e){for(let a in m)this[a]=m[a]}const N=function(){return R.exports}();export{N as default};
