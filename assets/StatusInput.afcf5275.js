import{T as b}from"./ToolTip.6e676252.js";import{O as D}from"./ObjectDisplay.95c31bdb.js";import{aB as x,d as u,n as d,dn as s,b1 as v}from"./index.78dd2457.js";import{e as l}from"./attributeValue.ea53a720.js";import{D as O}from"./DynamicForm.d83899aa.js";const c={};c.props={value:{key:"value",required:!1,type:null},users:{key:"users",required:!0,type:Array}};c.setup=(e,a)=>{const t=e,r=a.emit,o=x(t,r),p=u(()=>t.users.map(n=>({id:{value:l(n,"sub")},name:l(n,"name")||"",title:l(n,"custom:title")||"",email:l(n,"email"),phone:l(n,"phone_number")||""})).sort((n,m)=>n.email.localeCompare(m.email)));return{proxy:o,options:p}};c.components=Object.assign({ToolTip:b,ObjectDisplay:D},c.components);var E=function(){var e=this,a=e.$createElement,t=e._self._c||a;return t("BaseLabel",{staticClass:"flex flex-col p-4 lg:grid lg:grid-cols-3 lg:items-center"},[t("div",{staticClass:"flex flex-row items-center space-x-1 after:ml-0.5 after:text-red-700 after:content-['*']"},[t("span",[e._v("Analyst")]),e.value?t("ToolTip",[t("ObjectDisplay",{attrs:{value:e.value}})],1):e._e()],1),t("BaseSelect",{staticClass:"lg:col-span-2",attrs:{required:""},model:{value:e.proxy,callback:function(r){e.proxy=r},expression:"proxy"}},e._l(e.options,function(r,o){return t("option",{key:o,domProps:{value:r}},[e._v(" "+e._s(r.email)+" ")])}),0)],1)},h=[];const _={};var g=d(c,E,h,!1,R,null,null,null);function R(e){for(let a in _)this[a]=_[a]}const Y=function(){return g.exports}(),i={};i.props={value:{key:"value",required:!1,type:null}};i.setup=(e,a)=>{const t=e,r=a.emit,o=x(t,r),p=u(()=>new Date().getFullYear()),n=u(()=>new Array(10).fill(p.value).map(($,S)=>({value:p.value-5+S}))),m=u(()=>[{text:"In Progress",value:s.State.IN_PROGRESS},{text:"Products Needed",value:s.State.PRODUCTS_NEEDED},{text:"Ready for QA",value:s.State.READY_FOR_QA},{text:"Delivered",value:s.State.DELIVERED},{text:"Complete",value:s.State.COMPLETE}]),y=u(()=>[{text:"Q1",value:s.Quarter.Q1},{text:"Q2",value:s.Quarter.Q2},{text:"Q3",value:s.Quarter.Q3},{text:"Q4",value:s.Quarter.Q4},{text:"Other",value:s.Quarter.OTHER}]),Q=[{name:"state",label:"State",component:{is:v,attrs:{required:!0,options:m.value}}},{name:"year",label:"Year",component:{is:v,attrs:{required:!0,options:n.value}}},{name:"quarter",label:"Quarter",component:{is:v,attrs:{required:!0,options:y.value}}}];return{proxy:o,schema:Q}};i.components=Object.assign({DynamicForm:O},i.components);var q=function(){var e=this,a=e.$createElement,t=e._self._c||a;return t("DynamicForm",{attrs:{schema:e.schema},model:{value:e.proxy,callback:function(r){e.proxy=r},expression:"proxy"}})},A=[];const f={};var C=d(i,q,A,!1,T,null,null,null);function T(e){for(let a in f)this[a]=f[a]}const w=function(){return C.exports}();export{Y as A,w as S};
