import{S as f}from"./SiteMainBanner.8472ad72.js";import{c as _,n as d,ag as y,ah as x,ai as b,aj as g,ae as h,ak as p}from"./index.81c86bc2.js";import{u as C}from"./useJobPosts.45630163.js";import{a as k}from"./axios-data.59f5c197.js";import{N as B}from"./namespace.d5e90c67.js";const c={};c.props={posts:{key:"posts",required:!0,type:Array}};c.setup=(t,e)=>{const s=t;return{mappedJobPosts:_(()=>{const n=new Map;for(const o of s.posts){const a=o.department.replace(/_/g," "),l=n.get(a);l?l.push(o):n.set(a,[o])}return n})}};var j=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("section",{staticClass:"mx-auto max-w-4xl"},t._l(t.mappedJobPosts,function(r){var n=r[0],o=r[1];return s("div",{key:n,staticClass:"flex flex-col"},[s("BaseTypography",{staticClass:"mt-4 px-4 text-center capitalize text-prime-navy sm:text-left",attrs:{component:"h3",variant:"h4"}},[t._v(" "+t._s(n)+" ")]),s("ul",{staticClass:"px-6 py-0 sm:px-16"},t._l(o,function(a){return s("li",{key:a.id,staticClass:"my-8 flex justify-between border-b-2 border-gray-200 pb-6 md:px-8"},[s("div",{staticClass:"flex flex-col"},[s("div",{staticClass:"flex"},[s("BaseTypography",{staticClass:"hidden sm:block",attrs:{component:"h4",variant:"h6"}},[t._v(" "+t._s(a.job_title)+" ")]),s("BaseLink",{attrs:{to:`/careers/${a.id}`}},[s("BaseTypography",{staticClass:"sm:hidden",attrs:{component:"h4",variant:"h6"}},[t._v(" "+t._s(a.job_title)+" ")])],1)],1),s("BaseTypography",{staticClass:"text-gray-600",attrs:{component:"span",variant:"overline"}},[t._v(" "+t._s(a.location)+" ")])],1),s("div",{staticClass:"sm:flex sm:items-center"},[s("BaseButton",{staticClass:"hidden sm:inline-flex sm:whitespace-nowrap",attrs:{"display-type":"info","aria-label":"view job details",to:`/careers/${a.id}`}},[t._v(" View Details ")])],1)])}),0)],1)}),0)},$=[];const u={};var P=d(c,j,$,!1,S,null,null,null);function S(t){for(let e in u)this[e]=u[e]}const w=function(){return P.exports}(),J={list(){return y([B,"page-careers-seo"],k(`${x}/career`))}},i=g({layout:"siteMain",head:{}});i.setup=(t,e)=>{const s=`${h}/main-page-pics/line-waves-sm-dark.svg`,r=C.list(),n=J.list();return b(_(()=>{var o;return(o=n.data.value)==null?void 0:o.seo})),{backgroundUrl:s,jobPosts:r}};i.components=Object.assign({SiteMainBanner:f,JobPostsDisplay:w},i.components);var M=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("section",{staticClass:"flex flex-col justify-center bg-gray-100 bg-[length:517px] bg-bottom bg-repeat-x",style:{backgroundImage:`url(${t.backgroundUrl})`}},[s("SiteMainBanner"),s("div",{staticClass:"container mx-auto mb-24"},[s("div",{staticClass:"my-16 text-center"},[s("BaseTypography",{staticClass:"uppercase text-gray-500",attrs:{variant:"overline",component:"span"}},[t._v(" Join Us ")]),s("BaseTypography",{staticClass:"text-prime-navy",attrs:{variant:"h3",component:"h2"}},[t._v(" Current Openings ")])],1),s("BaseVueQuery",{attrs:{query:t.jobPosts},scopedSlots:t._u([{key:"success",fn:function(){return[s("JobPostsDisplay",{attrs:{posts:t.jobPosts.data.value||[]}})]},proxy:!0}])})],1)],1)},T=[];const m={};var v=d(i,M,T,!1,U,null,null,null);function U(t){for(let e in m)this[e]=m[e]}typeof p=="function"&&p(v);const N=function(){return v.exports}();export{N as default};