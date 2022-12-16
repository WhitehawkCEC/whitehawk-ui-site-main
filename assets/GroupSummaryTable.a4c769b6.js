import{A as g,T as y}from"./AppTanStackTable.218e250d.js";import{c as i,db as l,n as v,aS as u}from"./index.89daa9e1.js";import{I as A}from"./IsoDateTimeDisplay.2df9bc10.js";import{c as S}from"./createOnChangeFn.3127b769.js";import{u as x}from"./createSimpleTable.114baee8.js";const p={};p.props={value:{key:"value",required:!0,type:null}};p.setup=(e,r)=>{const a=e;return{level:i(()=>{switch(a.value){case l.GroupState.PENDING:return{label:"Pending",color:"bg-blue-100 text-blue-900"};case l.GroupState.ACTIVE:return{label:"Active",color:"bg-green-100 text-green-900"};case l.GroupState.INACTIVE:return{label:"Inactive",color:"bg-red-100 text-red-900"};case l.GroupState.ARCHIVED:return{label:"Archived",color:"bg-gray-100 text-gray-900"};default:return{label:"Status N/A",color:"bg-red-100 text-red-900"}}})}};var h=function(){var e=this,r=e.$createElement,a=e._self._c||r;return a("BaseOverline",{staticClass:"inline-flex items-center rounded px-2 py-0.5 uppercase",class:e.level.color},[e._v(" "+e._s(e.level.label)+" ")])},$=[];const m={};var I=v(p,h,$,!1,T,null,null,null);function T(e){for(let r in m)this[r]=m[r]}const C=function(){return I.exports}(),o={};o.props={accountId:{key:"accountId",required:!0,type:String},groups:{key:"groups",required:!0,type:Array}};o.setup=(e,r)=>{const a=e,c=i(()=>a.accountId),f=i(()=>a.groups),s=S(),b=[s.accessor(t=>t.name,{id:"name",header:()=>"Group Name",enableColumnFilter:!1}),s.accessor(t=>{var n;return(n=t.status)==null?void 0:n.state},{id:"state",header:()=>"State",cell:t=>u(C,{props:{value:t.getValue()}}),enableColumnFilter:!1}),s.accessor(t=>{var n;return(n=t.meta)==null?void 0:n.createdAt},{id:"createdAt",header:()=>"Created At",cell:t=>u(A,{props:{value:t.getValue(),format:"date"}}),enableColumnFilter:!1}),s.display({id:"actions",header:"Actions",cell:({row:t})=>{var n,d;return u(y,{props:{actions:[{id:"view",to:`/admin/companies/${c.value}/scorecards/portfolio/groups/${(n=t.original.id)==null?void 0:n.value}`},{id:"edit",to:`/admin/companies/${c.value}/scorecards/portfolio/groups/${(d=t.original.id)==null?void 0:d.value}/edit`}]}})}})];return{instance:x(f,b)}};o.components=Object.assign({AppTanStackTable:g},o.components);var G=function(){var e=this,r=e.$createElement,a=e._self._c||r;return a("AppTanStackTable",{attrs:{table:e.instance}})},E=[];const _={};var V=v(o,G,E,!1,k,null,null,null);function k(e){for(let r in _)this[r]=_[r]}const R=function(){return V.exports}();export{R as G};