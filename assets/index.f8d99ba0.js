import{C as v}from"./calendar.aad8910e.js";import{B as y}from"./BackButton.aa9060de.js";import{B,a as l}from"./BatchSchedulerInput.e2cef183.js";import{r as S,bH as x,a1 as w,G as b,I as C,n as g}from"./index.2de808b0.js";import{u as k}from"./useScheduledBatches.f7217967.js";import{f as m}from"./index.1135f873.js";import"./chevron-left.0808b01b.js";import"./index.c77982a1.js";import"./index.c3ec7408.js";import"./index.810f09a3.js";import"./index.7a54c9f6.js";const o={};o.setup=(t,s)=>{const e=new Date,n=l(e,{days:1}),c=m(n),a=m(l(n,{months:1})),u=S({frequency:"Monthly",range:{start:c,end:a},type:"Rating Service 2, In-Depth"}),r=x("id"),d=w.list(),i=b(),f=C(),h=k.create(r);async function _(){await h.mutateAsync(u.value)?(i.success("Batch scheduled successfully"),f.push(`/admin/companies/${r.value}/scorecards/batch/scheduler`)):i.error("Something went wrong")}return{schedule:u,id:r,companies:d,submit:_}};o.components=Object.assign({BackButton:y,BatchSchedulerInput:B,CalendarSvg:v},o.components);var I=function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("section",{staticClass:"space-y-6"},[e("div",{staticClass:"flex flex-col space-y-4 sm:flex-row sm:items-center sm:space-y-0 sm:space-x-4"},[e("div",[e("BackButton",{attrs:{link:`/admin/companies/${t.id}/scorecards/batch/scheduler`}})],1),e("BaseTypography",{attrs:{variant:"h5",component:"h2"}},[t._v(" Schedule New Batch ")])],1),e("BaseVueQuery",{attrs:{query:t.companies},scopedSlots:t._u([{key:"success",fn:function(n){var c=n.data;return[e("form",{on:{submit:function(a){return a.preventDefault(),t.submit.apply(null,arguments)}}},[e("BatchSchedulerInput",{attrs:{companies:c},model:{value:t.schedule,callback:function(a){t.schedule=a},expression:"schedule"}})],1)]}}])}),e("BaseButton",{staticClass:"w-full space-x-2 md:w-auto",attrs:{type:"button"},on:{click:t.submit}},[e("CalendarSvg",{staticClass:"h-auto w-4 xl:w-5"}),e("span",[t._v("Set Schedule")])],1)],1)},R=[];const p={};var D=g(o,I,R,!1,$,null,null,null);function $(t){for(let s in p)this[s]=p[s]}const Q=function(){return D.exports}();export{Q as default};
