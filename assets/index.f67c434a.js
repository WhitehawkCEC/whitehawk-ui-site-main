import{F as C}from"./FormButton.4ad05f8a.js";import{D as h}from"./DynamicForm.e4882cf8.js";import{aA as b,c as m,b0 as d,n as x,c7 as q,bG as $,cN as D,r as F,aJ as R}from"./index.a478453f.js";import{l as k}from"./lodash.7c07e1a0.js";import{u as B}from"./useCompanyAccess.2dd9c010.js";import{u as E}from"./useUsers.136b3f00.js";import{e as I}from"./attributeValue.ea53a720.js";import"./arrow-down-on-square.bf61cdc5.js";import"./trash.78f57a7a.js";const i={};i.props={value:{key:"value",required:!1,type:null},companies:{key:"companies",required:!0,type:Array},companyAccess:{key:"companyAccess",required:!0,type:Array}};i.setup=(e,a)=>{const s=e,n=a.emit,c=b(s,n),u=[{text:"Read",value:"READ"},{text:"Write",value:"WRITE"},{text:"Admin",value:"ADMIN"}],t=m(()=>s.companyAccess.map(o=>o.company)),l=m(()=>s.companies.filter(o=>o.status==="ACTIVE").map(({id:o,name:r})=>({id:o,name:r}))),v=m(()=>k.exports.differenceBy(l.value,t.value,r=>r.id).map(r=>({text:r.name,value:r}))),y=[{name:"company",label:"Company",component:{is:d,attrs:{required:!0,options:[{text:"",value:void 0},...v.value]}}},{name:"permission",label:"Permission",component:{is:d,attrs:{required:!0,options:[{text:"",value:void 0},...u]}}}];return{proxy:c,schema:y}};i.components=Object.assign({DynamicForm:h},i.components);var S=function(){var e=this,a=e.$createElement,s=e._self._c||a;return s("DynamicForm",{attrs:{schema:e.schema},model:{value:e.proxy,callback:function(n){e.proxy=n},expression:"proxy"}})},g=[];const _={};var j=x(i,S,g,!1,w,null,null,null);function w(e){for(let a in _)this[a]=_[a]}const M=function(){return j.exports}(),p={};p.setup=(e,a)=>{const s=q("username"),n=[$.list(),D.list(s)],c=E.read(s),u=m(()=>c.data.value?{id:s.value,email:I(c.data.value,"email")}:void 0),t=F({company:void 0,user:u.value,permission:void 0}),l=R(),v=B.create();async function y(){var o,r;if(t.value&&t.value.company&&t.value.user&&t.value.permission){const A={company:t.value.company,user:t.value.user,permission:t.value.permission};await v.mutateAsync({id:(r=(o=t.value)==null?void 0:o.company)==null?void 0:r.id,body:A}),l.push(`/admin/users/${s.value}/companies`)}else throw new Error("Invalid request.")}return{queries:n,access:t,addCompany:y}};p.components=Object.assign({CompanyAccessInput:M,FormButton:C},p.components);var O=function(){var e=this,a=e.$createElement,s=e._self._c||a;return s("BaseSimpleCard",{staticClass:"divide-y"},[s("BaseTypography",{staticClass:"p-4",attrs:{component:"h2",variant:"subtitle3"}},[e._v(" Add Company ")]),s("form",{staticClass:"divide-y",on:{submit:function(n){return n.preventDefault(),e.addCompany.apply(null,arguments)}}},[s("BaseVueQueries",{attrs:{queries:e.queries},scopedSlots:e._u([{key:"success",fn:function(n){var c=n[0],u=n[1];return[s("CompanyAccessInput",{attrs:{companies:c,"company-access":u},model:{value:e.access,callback:function(t){e.access=t},expression:"access"}})]}}])}),s("FormButton",{attrs:{action:"create"}})],1)],1)},P=[];const f={};var T=x(p,O,P,!1,N,null,null,null);function N(e){for(let a in f)this[a]=f[a]}const L=function(){return T.exports}();export{L as default};
