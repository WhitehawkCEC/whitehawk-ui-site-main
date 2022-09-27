import{aT as g,aE as b,aP as h,aQ as w,br as S,bZ as f,d,n as v}from"./index.f5fd5acd.js";import{A as B}from"./AppVueGoodTable.99207db8.js";import{B as C}from"./BitsightLevelBadge.d47b2a17.js";import{f as k}from"./index.461fb5f0.js";import{u as $}from"./useBitsightCompanies.73453d19.js";import"./index.2b05f6c7.js";import"./index.7a54c9f6.js";const x={create(e){const s=g();return b(()=>h.post(`${w}/companies/${e.value}/bitsight/sync`).then(t=>t.data),{onSuccess(){s.invalidateQueries(["companies",e,"bitsight","sync"],{exact:!0})}})}},c={};c.props={companies:{key:"companies",required:!0,type:Array}};c.setup=(e,s)=>{const t=e,o=[{label:"Name",field:"name"},{label:"Domain",field:"domain"},{label:"Score",field:"score"},{label:"Last Updated",field:"lastUpdated"},{label:"Industry",field:"industry"},{label:"Network Size",field:"network",type:"number"},{field:"view",sortable:!1}],a=f("id"),n=d(()=>t.companies.map(r=>{const{data:i}=r,l=k(new Date(i.rating_date));return{id:i.guid,name:i.name,domain:i.primary_domain,score:i.rating,lastUpdated:l,industry:i.industry,network:i.network_size_v4}}));function p(r){return`/admin/companies/${a.value}/rating-service-1/companies/${r}`}return{columns:o,rows:n,companyLink:p}};c.components=Object.assign({AppVueGoodTable:B,BitsightLevelBadge:C,DateIsoStringDisplay:S},c.components);var L=function(){var e=this,s=e.$createElement,t=e._self._c||s;return t("div",{staticClass:"p-4"},[t("AppVueGoodTable",{attrs:{columns:e.columns,rows:e.rows},scopedSlots:e._u([{key:"table-row",fn:function(o){var a=o.column,n=o.row;return[a.field==="score"?[t("span",[e._v(e._s(n[a.field]))]),t("BitsightLevelBadge",{attrs:{value:n[a.field]}})]:a.field==="lastUpdated"?[t("DateIsoStringDisplay",{attrs:{value:n[a.field],format:"date"}})]:a.field==="network"?[e._v(" "+e._s(n.network.toLocaleString())+" ")]:a.field==="view"?[t("BaseLink",{attrs:{to:e.companyLink(n.id)}},[e._v("View")])]:[e._v(" "+e._s(n[a.field])+" ")]]}}])},[e._v(" > ")])],1)},T=[];const m={};var D=v(c,L,T,!1,U,null,null,null);function U(e){for(let s in m)this[s]=m[s]}const A=function(){return D.exports}(),u={};u.setup=(e,s)=>{const t=f("id"),o=$.list(t),a=x.create(t),n=d(()=>{var i,l;return((l=(i=a.data.value)==null?void 0:i.companies)==null?void 0:l.map(y=>({data:y})))||o.data.value}),p=d(()=>o.isLoading.value||a.isLoading.value);async function r(){await a.mutateAsync()}return{companiesToShow:n,isLoading:p,triggerSync:r}};u.components=Object.assign({BitsightCompanyTable:A},u.components);var j=function(){var e=this,s=e.$createElement,t=e._self._c||s;return t("div",{staticClass:"flex flex-col space-y-4"},[t("BaseButton",{staticClass:"self-start",attrs:{shape:"rectangle",type:"button",disabled:e.isLoading},on:{click:e.triggerSync}},[e._v(" Update ")]),e.companiesToShow?t("BaseSimpleCard",{staticClass:"divide-y"},[t("BaseTypography",{staticClass:"p-4",attrs:{component:"h2",variant:"subtitle3"}},[e._v(" Bitsight Companies ")]),t("BitsightCompanyTable",{attrs:{companies:e.companiesToShow}})],1):e._e()],1)},I=[];const _={};var z=v(u,j,I,!1,E,null,null,null);function E(e){for(let s in _)this[s]=_[s]}const G=function(){return z.exports}();export{G as default};
