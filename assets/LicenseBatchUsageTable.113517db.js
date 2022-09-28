import{A as f,T}from"./AppTanStackTable.c20d9d09.js";import{I as d}from"./IsoDateTimeDisplay.85441b41.js";import{c as _}from"./createOnChangeFn.b7cc0e74.js";import{d as i,aS as c,n as h}from"./index.4033ed1e.js";import{u as A}from"./createSimpleTable.0d6c27de.js";const r={};r.props={value:{key:"value",required:!0,type:Array},mappedActions:{key:"mappedActions",required:!1,type:Map}};r.setup=(l,t)=>{const o=l,p=i(()=>o.value),v=i(()=>o.mappedActions),s=_(),b=i(()=>[s.accessor(a=>{var e;return(e=a.validity)==null?void 0:e.start},{id:"startDate",header:()=>"Start Date",cell:a=>c(d,{props:{value:a.getValue()}}),enableColumnFilter:!1}),s.accessor(a=>{var e;return(e=a.validity)==null?void 0:e.end},{id:"endDate",header:()=>"End Date",cell:a=>c(d,{props:{value:a.getValue()}}),enableColumnFilter:!1}),s.group({id:"oneTimeLicenses",header:()=>"One Time Licenses",columns:[s.accessor(a=>{var e,n;return(n=(e=a.counts)==null?void 0:e.oneTime)==null?void 0:n.quantity},{id:"oneTimeTotal",header:()=>"Total",enableColumnFilter:!1}),s.accessor(a=>{var e,n;return(n=(e=a.counts)==null?void 0:e.oneTime)==null?void 0:n.available},{id:"oneTimeAvailable",header:()=>"Available",enableColumnFilter:!1}),s.accessor(a=>{var e,n;return(n=(e=a.counts)==null?void 0:e.oneTime)==null?void 0:n.used},{id:"oneTimeUsed",header:()=>"Used",enableColumnFilter:!1})],enableGrouping:!0}),s.group({id:"annualLicenses",header:()=>"Annual Licenses",columns:[s.accessor(a=>{var e,n;return(n=(e=a.counts)==null?void 0:e.annual)==null?void 0:n.quantity},{id:"annualTotal",header:()=>"Total",enableColumnFilter:!1}),s.accessor(a=>{var e,n;return(n=(e=a.counts)==null?void 0:e.annual)==null?void 0:n.available},{id:"annualAvailable",header:()=>"Available",enableColumnFilter:!1}),s.accessor(a=>{var e,n;return(n=(e=a.counts)==null?void 0:e.annual)==null?void 0:n.used},{id:"annualUsed",header:()=>"Used",enableColumnFilter:!1})],enableGrouping:!0}),s.display({id:"actions",header:"Actions",cell:({row:a})=>{var e,n,u;return c(T,{props:{actions:(e=a.original.id)!=null&&e.value?(u=v.value)==null?void 0:u.get((n=a.original.id)==null?void 0:n.value):[]}})}})].filter(a=>o.mappedActions?a:a.id!=="actions"));return{instance:A(p,b)}};r.components=Object.assign({AppTanStackTable:f},r.components);var y=function(){var l=this,t=l.$createElement,o=l._self._c||t;return o("AppTanStackTable",{attrs:{table:l.instance}})},g=[];const m={};var C=h(r,y,g,!1,F,null,null,null);function F(l){for(let t in m)this[t]=m[t]}const E=function(){return C.exports}();export{E as L};
