import{d as a,n as l}from"./index.a3119a0b.js";const o={byScore(e){return e>=740?{label:"Advanced",color:"bg-green-100 text-green-800"}:e>=640?{label:"Intermediate",color:"bg-yellow-100 text-yellow-800"}:{label:"Basic",color:"bg-red-100 text-red-800"}}},n={};n.props={value:{key:"value",required:!0,type:Number}};n.setup=(e,t)=>{const r=e;return{badge:a(()=>o.byScore(r.value))}};var c=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("span",{staticClass:"inline-flex items-center rounded px-2",class:e.badge.color},[r("BaseTypography",{staticClass:"uppercase",attrs:{variant:"p3"}},[e._v(" "+e._s(e.badge.label)+" ")])],1)},i=[];const s={};var u=l(n,c,i,!1,_,null,null,null);function _(e){for(let t in s)this[t]=s[t]}const v=function(){return u.exports}();export{v as B};