import{aT as b,aD as h,aP as k,aQ as S,c as l,aI as B,aS as _,br as C,n as v,bs as T,c1 as x}from"./index.774779f3.js";import{A as $,T as w}from"./AppTanStackTable.2809ab19.js";import{B as F}from"./BitsightLevelBadge.e91bc480.js";import{c as A}from"./createOnChangeFn.ff3c4275.js";import{u as L}from"./createSimpleTable.8f2aff80.js";import{f as D}from"./index.0c81d824.js";import{u as I}from"./useBitsightCompanies.6dc73014.js";import"./magnifying-glass.b7cbe8fe.js";import"./TransitionExpand.3d593e31.js";import"./chevron-up.736f4142.js";import"./index.e5b67897.js";import"./index.7a54c9f6.js";const U={set(e){const a=b();return h(()=>k.post(`${S}/companies/${e.value}/bitsight/sync`).then(t=>t.data),{onSuccess(){a.invalidateQueries(["companies",e,"bitsight","sync"],{exact:!0})}})}},i={};i.props={id:{key:"id",required:!0,type:String},companies:{key:"companies",required:!0,type:Array}};i.setup=(e,a)=>{const t=e,c=l(()=>t.id),r=l(()=>t.companies.map(n=>{const{data:o}=n,g=D(new Date(o.rating_date));return{id:o.guid,name:o.name,domain:o.primary_domain,score:o.rating,lastUpdated:g,industry:o.industry,network:o.network_size_v4}})),p=B(),s=A(),m=[s.accessor("name",{header:()=>"Name",enableColumnFilter:!1}),s.accessor("domain",{header:()=>"Domain",enableColumnFilter:!1}),s.accessor("score",{header:()=>"Score",cell:n=>_(F,{props:{value:n.getValue()}}),enableColumnFilter:!1}),s.accessor("lastUpdated",{header:()=>"LastUpdated",cell:n=>_(C,{props:{value:n.getValue(),format:"date"}}),enableColumnFilter:!1}),s.accessor("industry",{header:()=>"Industry",enableColumnFilter:!1}),s.accessor("network",{header:()=>"Network Size",enableColumnFilter:!1}),s.display({id:"actions",header:"Actions",cell:({row:n})=>_(w,{props:{actions:[{id:"view",action(){p.push(`/admin/companies/${c.value}/cyber-risk-rating/rating-service-1/companies/${n.original.id}`)}}]}})})];return{instance:L(r,m)}};i.components=Object.assign({AppTanStackTable:$},i.components);var j=function(){var e=this,a=e.$createElement,t=e._self._c||a;return t("AppTanStackTable",{attrs:{table:e.instance}})},R=[];const f={};var q=v(i,j,R,!1,z,null,null,null);function z(e){for(let a in f)this[a]=f[a]}const E=function(){return q.exports}(),u={};u.setup=(e,a)=>{const t=x("id"),c=I.list(t),r=U.set(t),p=l(()=>{var d,n;return((n=(d=r.data.value)==null?void 0:d.companies)==null?void 0:n.map(o=>({data:o})))||c.data.value}),s=l(()=>c.isLoading.value||r.isLoading.value);async function m(){await r.mutateAsync()}return{id:t,companiesToShow:p,isLoading:s,createSync:m}};u.components=Object.assign({BackButton:T,BitsightCompaniesTable:E},u.components);var M=function(){var e=this,a=e.$createElement,t=e._self._c||a;return t("BaseTablePageLayout",{scopedSlots:e._u([{key:"backButton",fn:function(){return[t("BackButton",{attrs:{link:`/admin/companies/${e.id}/cyber-risk-rating`}})]},proxy:!0},{key:"title",fn:function(){return[e._v("Bitsight Companies")]},proxy:!0},{key:"button",fn:function(){return[t("BaseButton",{staticClass:"self-start",attrs:{shape:"rectangle",type:"button",disabled:e.isLoading},on:{click:e.createSync}},[e._v(" Update ")])]},proxy:!0},{key:"table",fn:function(){return[e.companiesToShow?t("BitsightCompaniesTable",{attrs:{id:e.id,companies:e.companiesToShow}}):e._e()]},proxy:!0}])})},O=[];const y={};var P=v(u,M,O,!1,Q,null,null,null);function Q(e){for(let a in y)this[a]=y[a]}const ae=function(){return P.exports}();export{ae as default};