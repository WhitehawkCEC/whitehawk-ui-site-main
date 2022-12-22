import{aT as g,aD as h,aP as T,aQ as x,d as c,bl as I,aG as $,aH as k,aS as _,n as S,an as E,bG as V,aF as F}from"./index.0c8230bc.js";import{A as B,T as D}from"./AppTanStackTable.98ac6539.js";import{C as N}from"./CompanyStatusBadge.9827ab63.js";import{c as Q}from"./createOnChangeFn.19c36eca.js";import{u as j}from"./createSimpleTable.65ab466f.js";import"./magnifying-glass.b7cbe8fe.js";import"./TransitionExpand.7e0b9363.js";import"./chevron-up.736f4142.js";const P={set(){const t=g();return h(e=>T.put(`${x}/companies/${e.id}`,e).then(n=>n.data),{onSuccess(e){console.log(e.id+" "+e.status),t.invalidateQueries(["companies"],{exact:!0}),t.invalidateQueries(["companies",e.id],{exact:!0})}})}},m={};m.props={value:{key:"value",required:!0,type:Array}};m.setup=(t,e)=>{const n=t,o=e.emit,r=c(()=>n.value),d=I(),v=c(()=>d.companies),u=$(),i=k(),b=c(()=>i.isAdmin),y=c(()=>{var s;return((s=i.email)==null?void 0:s.split("@")[1])==="whitehawk.com"&&b.value}),l=Q(),A=[l.accessor("id",{header:()=>"ID",enableColumnFilter:!1}),l.accessor("name",{header:()=>"Name",enableColumnFilter:!1}),l.accessor("domain",{header:()=>"Domain",enableColumnFilter:!1}),l.accessor(a=>{var s;return(s=a.industry)==null?void 0:s.name},{id:"industry",header:()=>"Industry",enableColumnFilter:!1}),l.accessor(a=>a.status,{id:"status",header:()=>"Status",enableColumnFilter:!1,cell:a=>_(N,{props:{value:a.getValue()}})}),l.display({id:"actions",header:"Actions",cell:({row:a})=>_(D,{props:{actions:[{id:"edit",to:`/admin/companies/${a.original.id}/settings`},{id:"view",async action(){await u.setCompanyId(a.original.id)},isDisabled:c(()=>!v.value.find(s=>s.id===a.original.id))},{id:"activate",action(){o("activate",a.original)},isDisabled:c(()=>!y.value||a.original.status==="ACTIVE")},{id:"inactivate",action(){o("inactivate",a.original)},isDisabled:c(()=>{var s;return!y.value||a.original.status==="INACTIVE"||((s=u.company)==null?void 0:s.id)===a.original.id})}].filter(s=>a.original.status==="ACTIVE"&&s.id!=="activate"||a.original.status==="INACTIVE"&&s.id!=="inactivate")}})})];return{instance:j(r,A)}};m.components=Object.assign({AppTanStackTable:B},m.components);var U=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("AppTanStackTable",{attrs:{table:t.instance}})},q=[];const f={};var H=S(m,U,q,!1,L,null,null,null);function L(t){for(let e in f)this[e]=f[e]}const M=function(){return H.exports}(),p={};p.setup=(t,e)=>{const n=V.list(),o=F(),r=P.set();async function d(u){const i={...u,status:"ACTIVE"};await r.mutateAsync(i),o.success("Successfully activated company "+i.name+".")}async function v(u){const i={...u,status:"INACTIVE"};await r.mutateAsync(i),o.success("Successfully inactivated company "+i.name+".")}return{companyList:n,activateCompany:d,inactivateCompany:v}};p.components=Object.assign({PlusSvg:E,CompaniesTable:M},p.components);var G=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("BaseTablePageLayout",{scopedSlots:t._u([{key:"title",fn:function(){return[t._v("Companies")]},proxy:!0},{key:"button",fn:function(){return[n("BaseButton",{staticClass:"space-x-1",attrs:{to:"/admin/companies/new",type:"button"}},[n("PlusSvg",{staticClass:"w-5"}),n("span",[t._v("Company")])],1)]},proxy:!0},{key:"table",fn:function(){return[n("BaseVueQuery",{attrs:{query:t.companyList},scopedSlots:t._u([{key:"success",fn:function(o){var r=o.data;return[n("CompaniesTable",{attrs:{value:r},on:{activate:t.activateCompany,inactivate:t.inactivateCompany}})]}}])})]},proxy:!0}])})},O=[];const C={};var R=S(p,G,O,!1,w,null,null,null);function w(t){for(let e in C)this[e]=C[e]}const at=function(){return R.exports}();export{at as default};
