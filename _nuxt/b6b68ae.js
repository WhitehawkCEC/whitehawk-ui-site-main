(window.webpackJsonp=window.webpackJsonp||[]).push([[151],{2125:function(e,t,n){"use strict";n.r(t);var c=n(11),r=(n(53),n(938)),o=n.n(r),l=n(514),d=n(1484),h=n(1946),m=n(1131),f=n(18),v=n(497),y=n(220),w=n(479),B={setup:function(e,t){var n=new Date,r=Object(h.a)(n,{days:1}),o=Object(m.a)(r),l=Object(m.a)(Object(h.a)(r,{months:1})),d=Object(f.ref)({frequency:"Monthly",range:{start:o,end:l},type:"Rating Service 2, In-Depth"}),B=Object(w.b)("id"),j=v.C.list(),O=Object(y.a)(),x=Object(w.d)(),S=v.bb.create(B);function k(){return(k=Object(c.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,S.mutateAsync(d.value);case 2:e.sent?(O.success("Batch scheduled successfully"),x.push("/admin/companies/".concat(B.value,"/scorecards/batch/scheduler"))):O.error("Something went wrong");case 4:case"end":return e.stop()}}),e)})))).apply(this,arguments)}return{schedule:d,id:B,companies:j,submit:function(){return k.apply(this,arguments)}}}};B.components=Object.assign({BackButton:l.a,BatchSchedulerInput:d.a,CalendarSvg:o.a},B.components);var j=B,O=n(55),component=Object(O.a)(j,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("section",{staticClass:"space-y-6"},[n("div",{staticClass:"flex flex-col space-y-4 sm:flex-row sm:items-center sm:space-y-0 sm:space-x-4"},[n("div",[n("BackButton",{attrs:{link:"/admin/companies/"+e.id+"/scorecards/batch/scheduler"}})],1),e._v(" "),n("BaseTypography",{attrs:{variant:"h5",component:"h2"}},[e._v("\n      Schedule New Batch\n    ")])],1),e._v(" "),n("BaseVueQuery",{attrs:{query:e.companies},scopedSlots:e._u([{key:"success",fn:function(t){var data=t.data;return[n("form",{on:{submit:function(t){return t.preventDefault(),e.submit.apply(null,arguments)}}},[n("BatchSchedulerInput",{attrs:{companies:data},model:{value:e.schedule,callback:function(t){e.schedule=t},expression:"schedule"}})],1)]}}])}),e._v(" "),n("BaseButton",{staticClass:"w-full space-x-2 md:w-auto",attrs:{type:"button"},on:{click:e.submit}},[n("CalendarSvg",{staticClass:"h-auto w-4 xl:w-5"}),e._v(" "),n("span",[e._v("Set Schedule")])],1)],1)}),[],!1,null,null,null);t.default=component.exports;installComponents(component,{BaseTypography:n(471).default,BaseVueQuery:n(501).default,BaseButton:n(306).default})}}]);