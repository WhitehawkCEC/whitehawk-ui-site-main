import{aU as h,aE as b,aQ as S,aR as C,d as l,aJ as T,aT as _,bt as k,n as g,c1 as x}from"./index.765bdb5f.js";import{A as B,T as $}from"./AppTanStackTable.f9746f35.js";import{B as w}from"./BitsightLevelBadge.a3412ea3.js";import{c as F}from"./createOnChangeFn.c71a9a98.js";import{u as A}from"./createSimpleTable.aee8a25f.js";import{f as L}from"./index.a2ab966c.js";import{u as U}from"./useBitsightCompanies.82a3d6ed.js";import"./magnifying-glass.b7cbe8fe.js";import"./TransitionExpand.6812981e.js";import"./chevron-up.736f4142.js";import"./index.8c7e0a18.js";import"./index.7a54c9f6.js";const D={create(e){const a=h();return b(()=>S.post(`${C}/companies/${e.value}/bitsight/sync`).then(t=>t.data),{onSuccess(){a.invalidateQueries(["companies",e,"bitsight","sync"],{exact:!0})}})}},i={};i.props={id:{key:"id",required:!0,type:String},companies:{key:"companies",required:!0,type:Array}};i.setup=(e,a)=>{const t=e,c=l(()=>t.id),r=l(()=>t.companies.map(n=>{const{data:o}=n,v=L(new Date(o.rating_date));return{id:o.guid,name:o.name,domain:o.primary_domain,score:o.rating,lastUpdated:v,industry:o.industry,network:o.network_size_v4}})),p=T(),s=F(),m=[s.accessor("name",{header:()=>"Name",enableColumnFilter:!1}),s.accessor("domain",{header:()=>"Domain",enableColumnFilter:!1}),s.accessor("score",{header:()=>"Score",cell:n=>_(w,{props:{value:n.getValue()}}),enableColumnFilter:!1}),s.accessor("lastUpdated",{header:()=>"LastUpdated",cell:n=>_(k,{props:{value:n.getValue(),format:"date"}}),enableColumnFilter:!1}),s.accessor("industry",{header:()=>"Industry",enableColumnFilter:!1}),s.accessor("network",{header:()=>"Network Size",enableColumnFilter:!1}),s.display({id:"actions",header:"Actions",cell:({row:n})=>_($,{props:{actions:[{id:"view",action(){p.push(`/admin/companies/${c.value}/rating-service-1/companies/${n.original.id}`)}}]}})})];return{instance:A(r,m)}};i.components=Object.assign({AppTanStackTable:B},i.components);var R=function(){var e=this,a=e.$createElement,t=e._self._c||a;return t("AppTanStackTable",{attrs:{table:e.instance}})},j=[];const f={};var E=g(i,R,j,!1,I,null,null,null);function I(e){for(let a in f)this[a]=f[a]}const q=function(){return E.exports}(),u={};u.setup=(e,a)=>{const t=x("id"),c=U.list(t),r=D.create(t),p=l(()=>{var d,n;return((n=(d=r.data.value)==null?void 0:d.companies)==null?void 0:n.map(o=>({data:o})))||c.data.value}),s=l(()=>c.isLoading.value||r.isLoading.value);async function m(){await r.mutateAsync()}return{id:t,companiesToShow:p,isLoading:s,triggerSync:m}};u.components=Object.assign({BitsightCompaniesTable:q},u.components);var z=function(){var e=this,a=e.$createElement,t=e._self._c||a;return t("BaseTablePageLayout",{scopedSlots:e._u([{key:"title",fn:function(){return[e._v("Bitsight Companies")]},proxy:!0},{key:"button",fn:function(){return[t("BaseButton",{staticClass:"self-start",attrs:{shape:"rectangle",type:"button",disabled:e.isLoading},on:{click:e.triggerSync}},[e._v(" Update ")])]},proxy:!0},{key:"table",fn:function(){return[e.companiesToShow?t("BitsightCompaniesTable",{attrs:{id:e.id,companies:e.companiesToShow}}):e._e()]},proxy:!0}])})},M=[];const y={};var O=g(u,z,M,!1,Q,null,null,null);function Q(e){for(let a in y)this[a]=y[a]}const te=function(){return O.exports}();export{te as default};
