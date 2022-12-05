import{bL as s,bj as l,ao as i,n as p}from"./index.76f70903.js";import{D as c}from"./document-chart-bar.32a60c42.js";import{R as d}from"./ReportTypeCard.d49303d9.js";var m=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("svg",e._g({attrs:{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",fill:"currentColor","aria-hidden":"true"}},e.$listeners),[r("path",{attrs:{"fill-rule":"evenodd",d:"M4.5 2A1.5 1.5 0 0 0 3 3.5v13A1.5 1.5 0 0 0 4.5 18h11a1.5 1.5 0 0 0 1.5-1.5V7.621a1.5 1.5 0 0 0-.44-1.06l-4.12-4.122A1.5 1.5 0 0 0 11.378 2H4.5zm2.25 8.5a.75.75 0 0 0 0 1.5h6.5a.75.75 0 0 0 0-1.5h-6.5zm0 3a.75.75 0 0 0 0 1.5h6.5a.75.75 0 0 0 0-1.5h-6.5z","clip-rule":"evenodd"}})])};const v={render:m};var g=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("svg",e._g({attrs:{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",fill:"currentColor","aria-hidden":"true"}},e.$listeners),[r("path",{attrs:{"fill-rule":"evenodd",d:"M6 5v1H4.667a1.75 1.75 0 0 0-1.743 1.598l-.826 9.5A1.75 1.75 0 0 0 3.84 19h12.32a1.75 1.75 0 0 0 1.743-1.902l-.826-9.5A1.75 1.75 0 0 0 15.333 6H14V5a4 4 0 0 0-8 0zm4-2.5A2.5 2.5 0 0 0 7.5 5v1h5V5A2.5 2.5 0 0 0 10 2.5zM7.5 10a2.5 2.5 0 0 0 5 0V8.75a.75.75 0 0 1 1.5 0V10a4 4 0 0 1-8 0V8.75a.75.75 0 0 1 1.5 0V10z","clip-rule":"evenodd"}})])};const _={render:g},n={};n.setup=(e,t)=>({reportTypes:[{link:"/admin/reports/users/canned",title:"Users",type:"Canned Report",component:s,bgColor:"bg-prime-green"},{link:"/admin/reports/marketplace/canned",title:"Marketplace",type:"Canned Report",component:_,bgColor:"bg-prime-teal"},{link:"/admin/reports/scorecard/canned",title:"Scorecards",type:"Canned Report",component:v,bgColor:"bg-prime-navy"},{link:"/admin/reports/company/canned",title:"Companies",type:"Canned Report",component:l,bgColor:"bg-prime-indigo"},{link:"/admin/reports/marketplace/adhoc",title:"Marketplace",type:"Adhoc Report",component:i,bgColor:"bg-prime-teal"},{link:"/admin/reports/scorecard/adhoc",title:"Scorecards",type:"Adhoc Report",component:c,bgColor:"bg-prime-navy"}]});n.components=Object.assign({ReportTypeCard:d},n.components);var u=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("section",{staticClass:"space-y-6"},[r("BaseTypography",{attrs:{component:"h2",variant:"h5"}},[e._v(" Select Report Type ")]),r("ul",{staticClass:"grid gap-6 sm:grid-cols-2 md:grid-cols-1 lg:grid-cols-2 xl:grid-cols-3"},e._l(e.reportTypes,function(o){return r("li",{key:o.link},[r("ReportTypeCard",{attrs:{value:o}})],1)}),0)],1)},h=[];const a={};var f=p(n,u,h,!1,y,null,null,null);function y(e){for(let t in a)this[t]=a[t]}const S=function(){return f.exports}();export{S as default};