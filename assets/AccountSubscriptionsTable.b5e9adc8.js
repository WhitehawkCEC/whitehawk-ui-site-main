import{A as _,T as v}from"./AppTanStackTable.2ebe60ed.js";import{t as b,S as y}from"./index.aef30577.js";import{I as i}from"./IsoDateTimeDisplay.94c77cb0.js";import{c as S}from"./createOnChangeFn.29ec50aa.js";import{d as p,aS as c,n as A}from"./index.9ab1cd2e.js";import{u as T}from"./createSimpleTable.442d97d5.js";const o={};o.props={value:{key:"value",required:!0,type:Array},mappedActions:{key:"mappedActions",required:!0,type:Map}};o.setup=(a,n)=>{const l=a,m=p(()=>l.value),d=p(()=>l.mappedActions),s=S(),f=[s.accessor("name",{header:()=>"Name",enableColumnFilter:!1}),s.accessor("type",{header:()=>"Type",cell:e=>b(e.getValue()),enableColumnFilter:!1}),s.accessor(e=>{var t;return(t=e.status)==null?void 0:t.state},{id:"state",header:()=>"State",cell:e=>c(y,{props:{state:e.getValue()}}),enableColumnFilter:!1}),s.accessor(e=>{var t,r;return(r=(t=e.status)==null?void 0:t.validity)==null?void 0:r.start},{id:"startDate",header:()=>"Start Date",cell:e=>c(i,{props:{value:e.getValue(),format:"date"}}),enableColumnFilter:!1}),s.accessor(e=>{var t,r;return(r=(t=e.status)==null?void 0:t.validity)==null?void 0:r.end},{id:"endDate",header:()=>"End Date",cell:e=>c(i,{props:{value:e.getValue(),format:"date"}}),enableColumnFilter:!1}),s.display({id:"actions",header:"Actions",cell:({row:e})=>{var t;return c(v,{props:{actions:(t=e.original.subscriptionId)!=null&&t.value?d.value.get(e.original.subscriptionId.value):[]}})}})];return{instance:T(m,f)}};o.components=Object.assign({AppTanStackTable:_},o.components);var g=function(){var a=this,n=a.$createElement,l=a._self._c||n;return l("AppTanStackTable",{attrs:{table:a.instance}})},h=[];const u={};var C=A(o,g,h,!1,D,null,null,null);function D(a){for(let n in u)this[n]=u[n]}const q=function(){return C.exports}();export{q as A};
