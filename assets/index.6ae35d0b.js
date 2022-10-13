import{aV as b,aF as h,aR as S,aS as k,d as l,aK as B,aU as _,bu as C,n as g,bv as x,c2 as T}from"./index.ad2ff904.js";import{A as $,T as w}from"./AppTanStackTable.a9750958.js";import{B as F}from"./BitsightLevelBadge.92815bb4.js";import{c as A}from"./createOnChangeFn.9f62ccbf.js";import{u as L}from"./createSimpleTable.e78f974d.js";import{f as U}from"./index.91aa5ddc.js";import{u as D}from"./useBitsightCompanies.a2cd11c5.js";import"./magnifying-glass.b7cbe8fe.js";import"./TransitionExpand.5b598212.js";import"./chevron-up.736f4142.js";import"./index.28672862.js";import"./index.7a54c9f6.js";const R={create(e){const a=b();return h(()=>S.post(`${k}/companies/${e.value}/bitsight/sync`).then(t=>t.data),{onSuccess(){a.invalidateQueries(["companies",e,"bitsight","sync"],{exact:!0})}})}},i={};i.props={id:{key:"id",required:!0,type:String},companies:{key:"companies",required:!0,type:Array}};i.setup=(e,a)=>{const t=e,c=l(()=>t.id),r=l(()=>t.companies.map(n=>{const{data:o}=n,v=U(new Date(o.rating_date));return{id:o.guid,name:o.name,domain:o.primary_domain,score:o.rating,lastUpdated:v,industry:o.industry,network:o.network_size_v4}})),p=B(),s=A(),m=[s.accessor("name",{header:()=>"Name",enableColumnFilter:!1}),s.accessor("domain",{header:()=>"Domain",enableColumnFilter:!1}),s.accessor("score",{header:()=>"Score",cell:n=>_(F,{props:{value:n.getValue()}}),enableColumnFilter:!1}),s.accessor("lastUpdated",{header:()=>"LastUpdated",cell:n=>_(C,{props:{value:n.getValue(),format:"date"}}),enableColumnFilter:!1}),s.accessor("industry",{header:()=>"Industry",enableColumnFilter:!1}),s.accessor("network",{header:()=>"Network Size",enableColumnFilter:!1}),s.display({id:"actions",header:"Actions",cell:({row:n})=>_(w,{props:{actions:[{id:"view",action(){p.push(`/admin/companies/${c.value}/cyber-risk-rating/rating-service-1/companies/${n.original.id}`)}}]}})})];return{instance:L(r,m)}};i.components=Object.assign({AppTanStackTable:$},i.components);var j=function(){var e=this,a=e.$createElement,t=e._self._c||a;return t("AppTanStackTable",{attrs:{table:e.instance}})},I=[];const f={};var V=g(i,j,I,!1,q,null,null,null);function q(e){for(let a in f)this[a]=f[a]}const z=function(){return V.exports}(),u={};u.setup=(e,a)=>{const t=T("id"),c=D.list(t),r=R.create(t),p=l(()=>{var d,n;return((n=(d=r.data.value)==null?void 0:d.companies)==null?void 0:n.map(o=>({data:o})))||c.data.value}),s=l(()=>c.isLoading.value||r.isLoading.value);async function m(){await r.mutateAsync()}return{id:t,companiesToShow:p,isLoading:s,triggerSync:m}};u.components=Object.assign({BackButton:x,BitsightCompaniesTable:z},u.components);var E=function(){var e=this,a=e.$createElement,t=e._self._c||a;return t("BaseTablePageLayout",{scopedSlots:e._u([{key:"backButton",fn:function(){return[t("BackButton",{attrs:{link:`/admin/companies/${e.id}/cyber-risk-rating`}})]},proxy:!0},{key:"title",fn:function(){return[e._v("Bitsight Companies")]},proxy:!0},{key:"button",fn:function(){return[t("BaseButton",{staticClass:"self-start",attrs:{shape:"rectangle",type:"button",disabled:e.isLoading},on:{click:e.triggerSync}},[e._v(" Update ")])]},proxy:!0},{key:"table",fn:function(){return[e.companiesToShow?t("BitsightCompaniesTable",{attrs:{id:e.id,companies:e.companiesToShow}}):e._e()]},proxy:!0}])})},M=[];const y={};var O=g(u,E,M,!1,H,null,null,null);function H(e){for(let a in y)this[a]=y[a]}const ae=function(){return O.exports}();export{ae as default};