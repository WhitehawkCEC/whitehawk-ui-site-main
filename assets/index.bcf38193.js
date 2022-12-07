import{c as o,bm as A,aG as x,aH as g,aS as T,n as v,an as k,bH as _,aF as $}from"./index.99fb95af.js";import{A as F,T as w}from"./AppTanStackTable.544ccedd.js";import{c as D}from"./createOnChangeFn.49edfed1.js";import{u as j}from"./createSimpleTable.09673503.js";import"./magnifying-glass.b7cbe8fe.js";import"./TransitionExpand.048025e9.js";import"./chevron-up.736f4142.js";const l={};l.props={value:{key:"value",required:!0,type:Array}};l.setup=(e,t)=>{const n=e,i=t.emit,c=o(()=>n.value),m=A(),p=o(()=>m.companies),b=x(),d=g(),C=o(()=>d.isAdmin),S=o(()=>{var a;return((a=d.email)==null?void 0:a.split("@")[1])==="whitehawk.com"&&C.value}),r=D(),h=[r.accessor("id",{header:()=>"ID",enableColumnFilter:!1}),r.accessor("name",{header:()=>"Name",enableColumnFilter:!1}),r.accessor("domain",{header:()=>"Domain",enableColumnFilter:!1}),r.accessor(s=>{var a;return(a=s.industry)==null?void 0:a.name},{id:"industry",header:()=>"Industry",enableColumnFilter:!1}),r.display({id:"actions",header:"Actions",cell:({row:s})=>T(w,{props:{actions:[{id:"edit",to:`/admin/companies/${s.original.id}/settings`},{id:"view",async action(){await b.setCompanyId(s.original.id)},isDisabled:o(()=>!p.value.find(a=>a.id===s.original.id))},{id:"delete",action(){i("delete",s.original.id)},isDisabled:o(()=>!S.value)}]}})})];return{instance:j(c,h)}};l.components=Object.assign({AppTanStackTable:F},l.components);var B=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("AppTanStackTable",{attrs:{table:e.instance}})},H=[];const f={};var E=v(l,B,H,!1,I,null,null,null);function I(e){for(let t in f)this[t]=f[t]}const L=function(){return E.exports}(),u={};u.setup=(e,t)=>{const n=_.list(),i=$(),c=_.delete();async function m(p){await c.mutateAsync(p),i.success("Successfully deleted company.")}return{companyList:n,deleteCompany:m}};u.components=Object.assign({PlusSvg:k,CompaniesTable:L},u.components);var P=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("BaseTablePageLayout",{scopedSlots:e._u([{key:"title",fn:function(){return[e._v("Companies")]},proxy:!0},{key:"button",fn:function(){return[n("BaseButton",{staticClass:"space-x-1",attrs:{to:"/admin/companies/new",type:"button"}},[n("PlusSvg",{staticClass:"w-5"}),n("span",[e._v("Company")])],1)]},proxy:!0},{key:"table",fn:function(){return[n("BaseVueQuery",{attrs:{query:e.companyList},scopedSlots:e._u([{key:"success",fn:function(i){var c=i.data;return[n("CompaniesTable",{attrs:{value:c},on:{delete:e.deleteCompany}})]}}])})]},proxy:!0}])})},U=[];const y={};var q=v(u,P,U,!1,M,null,null,null);function M(e){for(let t in y)this[t]=y[t]}const J=function(){return q.exports}();export{J as default};