import{A as y,T as S}from"./AppTanStackTable.d237c2ea.js";import{d as c,dc as l,n as b,aS as i}from"./index.6187e1e1.js";import{I as A}from"./IsoDateTimeDisplay.32ef519f.js";import{c as I}from"./createOnChangeFn.0d3528a6.js";import{u as x}from"./createSimpleTable.30b61882.js";const p={};p.props={value:{key:"value",required:!0,type:null}};p.setup=(e,r)=>{const a=e;return{level:c(()=>{switch(a.value){case l.GroupState.PENDING:return{label:"Pending",color:"bg-blue-100 text-blue-900"};case l.GroupState.ACTIVE:return{label:"Active",color:"bg-green-100 text-green-900"};case l.GroupState.INACTIVE:return{label:"Inactive",color:"bg-red-100 text-red-900"};case l.GroupState.ARCHIVED:return{label:"Archived",color:"bg-gray-100 text-gray-900"};default:return{label:"Status N/A",color:"bg-red-100 text-red-900"}}})}};var $=function(){var e=this,r=e.$createElement,a=e._self._c||r;return a("BaseOverline",{staticClass:"inline-flex items-center rounded px-2 py-0.5 uppercase",class:e.level.color},[e._v(" "+e._s(e.level.label)+" ")])},h=[];const _={};var T=b(p,$,h,!1,C,null,null,null);function C(e){for(let r in _)this[r]=_[r]}const G=function(){return T.exports}(),n={};n.props={accountId:{key:"accountId",required:!0,type:String},subId:{key:"subId",required:!0,type:String},groups:{key:"groups",required:!0,type:Array}};n.setup=(e,r)=>{const a=e,u=c(()=>a.accountId),d=c(()=>a.subId),f=c(()=>a.groups),o=I(),g=[o.accessor(t=>t.name,{id:"name",header:()=>"Group Name",enableColumnFilter:!1}),o.accessor(t=>{var s;return(s=t.status)==null?void 0:s.state},{id:"state",header:()=>"State",cell:t=>i(G,{props:{value:t.getValue()}}),enableColumnFilter:!1}),o.accessor(t=>{var s;return(s=t.meta)==null?void 0:s.createdAt},{id:"createdAt",header:()=>"Created At",cell:t=>i(A,{props:{value:t.getValue(),format:"date"}}),enableColumnFilter:!1}),o.display({id:"actions",header:"Actions",cell:({row:t})=>{var s,m;return i(S,{props:{actions:[{id:"view",to:`/admin/companies/${u.value}/subscriptions/${d.value}/integrations/2/scorecards/portfolio/groups/${(s=t.original.id)==null?void 0:s.value}`},{id:"edit",to:`/admin/companies/${u.value}/subscriptions/${d.value}/integrations/2/scorecards/portfolio/groups/${(m=t.original.id)==null?void 0:m.value}/settings`}]}})}})];return{instance:x(f,g)}};n.components=Object.assign({AppTanStackTable:y},n.components);var E=function(){var e=this,r=e.$createElement,a=e._self._c||r;return a("AppTanStackTable",{attrs:{table:e.instance}})},k=[];const v={};var V=b(n,E,k,!1,F,null,null,null);function F(e){for(let r in v)this[r]=v[r]}const w=function(){return V.exports}();export{w as G};
