import{A as m,T as _}from"./AppTanStackTable.a02685f3.js";import{c as d}from"./createOnChangeFn.ce323c7c.js";import{d as c,aS as v,n as f}from"./index.81c74de4.js";import{u as A}from"./createSimpleTable.a48e043d.js";const t={};t.props={value:{key:"value",required:!0,type:Array},mappedActions:{key:"mappedActions",required:!0,type:Map}};t.setup=(e,n)=>{const a=e,i=c(()=>a.value),p=c(()=>a.mappedActions),s=d(),u=[s.accessor("name",{header:()=>"Name",enableColumnFilter:!1}),s.display({id:"actions",header:"Actions",cell:({row:o})=>{var r;return v(_,{props:{actions:(r=o.original.id)!=null&&r.value?p.value.get(o.original.id.value):[]}})}})];return{instance:A(i,u)}};t.components=Object.assign({AppTanStackTable:m},t.components);var b=function(){var e=this,n=e.$createElement,a=e._self._c||n;return a("AppTanStackTable",{attrs:{table:e.instance}})},T=[];const l={};var y=f(t,b,T,!1,S,null,null,null);function S(e){for(let n in l)this[n]=l[n]}const j=function(){return y.exports}();export{j as A};
