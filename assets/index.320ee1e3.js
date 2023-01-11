import{aT as h,aD as k,aP as S,aQ as B,d as i,aS as _,br as C,n as g,bs as x,c9 as y}from"./index.e627960d.js";import{A as T,T as $}from"./AppTanStackTable.9bda351a.js";import{B as w}from"./BitsightLevelBadge.5b374a0b.js";import{c as I}from"./createOnChangeFn.7e56f0c4.js";import{u as F}from"./createSimpleTable.7ef16907.js";import{f as A}from"./index.b9efdce0.js";import{u as L}from"./useBitsightCompanies.e299c65a.js";import"./magnifying-glass.b7cbe8fe.js";import"./chevron-up.736f4142.js";import"./index.35a4d163.js";import"./index.7a54c9f6.js";const D={set(e){const n=h();return k(()=>S.post(`${B}/companies/${e.value}/bitsight/sync`).then(t=>t.data),{onSuccess(){n.invalidateQueries(["companies",e,"bitsight","sync"],{exact:!0})}})}},c={};c.props={id:{key:"id",required:!0,type:String},subId:{key:"subId",required:!1,type:String},companies:{key:"companies",required:!0,type:Array}};c.setup=(e,n)=>{const t=e,p=i(()=>t.id),u=i(()=>t.subId),r=i(()=>t.companies.map(s=>{const{data:a}=s,d=A(new Date(a.rating_date));return{id:a.guid,name:a.name,domain:a.primary_domain,score:a.rating,lastUpdated:d,industry:a.industry,network:a.network_size_v4}})),o=I(),m=[o.accessor("name",{header:()=>"Name",enableColumnFilter:!1}),o.accessor("domain",{header:()=>"Domain",enableColumnFilter:!1}),o.accessor("score",{header:()=>"Score",cell:s=>_(w,{props:{value:s.getValue()}}),enableColumnFilter:!1}),o.accessor("lastUpdated",{header:()=>"LastUpdated",cell:s=>_(C,{props:{value:s.getValue(),format:"date"}}),enableColumnFilter:!1}),o.accessor("industry",{header:()=>"Industry",enableColumnFilter:!1}),o.accessor("network",{header:()=>"Network Size",enableColumnFilter:!1}),o.display({id:"actions",header:"Actions",cell:({row:s})=>_($,{props:{actions:[{id:"view",to:`/admin/companies/${p.value}/subscriptions/${u.value}/integrations/1/companies/${s.original.id}/cyber-risk`}]}})})];return{instance:F(r,m)}};c.components=Object.assign({AppTanStackTable:T},c.components);var U=function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("AppTanStackTable",{attrs:{table:e.instance}})},j=[];const b={};var q=g(c,U,j,!1,z,null,null,null);function z(e){for(let n in b)this[n]=b[n]}const E=function(){return q.exports}(),l={};l.setup=(e,n)=>{const t=y("id"),p=y("subscriptionId"),u=L.list(t),r=D.set(t),o=i(()=>{var s,a;return((a=(s=r.data.value)==null?void 0:s.companies)==null?void 0:a.map(d=>({data:d})))||u.data.value}),m=i(()=>u.isLoading.value||r.isLoading.value);async function f(){await r.mutateAsync()}return{id:t,subscriptionId:p,companiesToShow:o,isLoading:m,createSync:f}};l.components=Object.assign({BackButton:x,BitsightCompaniesTable:E},l.components);var M=function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("BaseTablePageLayout",{scopedSlots:e._u([{key:"backButton",fn:function(){return[t("BackButton",{attrs:{link:".."}})]},proxy:!0},{key:"overline",fn:function(){return[e._v("Bitsight")]},proxy:!0},{key:"title",fn:function(){return[e._v("Companies")]},proxy:!0},{key:"button",fn:function(){return[t("BaseButton",{staticClass:"self-start",attrs:{shape:"rectangle",type:"button",disabled:e.isLoading},on:{click:e.createSync}},[e._v(" Update ")])]},proxy:!0},{key:"table",fn:function(){return[e.companiesToShow?t("BitsightCompaniesTable",{attrs:{id:e.id,"sub-id":e.subscriptionId,companies:e.companiesToShow}}):e._e()]},proxy:!0}])})},O=[];const v={};var P=g(l,M,O,!1,Q,null,null,null);function Q(e){for(let n in v)this[n]=v[n]}const ee=function(){return P.exports}();export{ee as default};
