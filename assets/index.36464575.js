import{A as $,T}from"./AppTanStackTable.cd9aeee9.js";import{S as j}from"./StarLevelDisplay.d06d8cf2.js";import{c as D}from"./createOnChangeFn.f8dcdac4.js";import{d as o,aS as h,n as g,cD as F,aQ as A,ca as w}from"./index.b0bcf7b8.js";import{u as I}from"./createSimpleTable.5fe7daf8.js";import{T as M}from"./TodosChart.3d37036b.js";import{l as C}from"./lodash.0b248da5.js";import{u as B}from"./_baseEach.0b768e78.js";import{K as O}from"./KnownStandardCodes.dc74bde0.js";import{s as R}from"./index.def45aa5.js";import"./magnifying-glass.b7cbe8fe.js";import"./arrow-down-tray.793d581e.js";import"./keys.81560206.js";import"./chevron-up.736f4142.js";import"./TabbedPanel.b5a48f6e.js";import"./_baseOrderBy.b9dbd40d.js";import"./chart.c54a61e9.js";import"./_arrayMap.dcea68f3.js";import"./_baseIteratee.b2933234.js";import"./_Uint8Array.da871775.js";import"./_baseIsEqual.7db90180.js";const f={};f.props={id:{key:"id",required:!0,type:String},frameworkId:{key:"frameworkId",required:!0,type:String},controls:{key:"controls",required:!0,type:Object}};f.setup=(e,r)=>{const t=e,s=o(()=>t.id),m=o(()=>t.frameworkId),l=o(()=>{const a=[];for(const[u,i]of Object.entries(t.controls))a.push({id:n(u),name:u,numControls:i.length,averageStarLevel:p(i)});return a});function n(a){return a.split(" ").join("-").toLocaleLowerCase()}function p(a){let u=0,i=0;return a.forEach(({StarLevel:d})=>{d!==0&&(u+=d,i++)}),u/i}const c=D(),y=[c.accessor("name",{header:()=>"Area",enableColumnFilter:!1}),c.accessor("numControls",{header:()=>"Total # Controls",enableColumnFilter:!1}),c.accessor("averageStarLevel",{header:()=>"Average Star Level",cell:a=>h(j,{props:{id:a.row.original.id,value:a.getValue()}}),enableColumnFilter:!1}),c.display({id:"actions",header:"Actions",cell:({row:a})=>h(T,{props:{actions:[{id:"view",to:`/client/companies/${s.value}/journey/cyber-maturity-roadmap/${m.value}/controls/${a.original.id}`}]}})})];return{instance:I(l,y)}};f.components=Object.assign({AppTanStackTable:$},f.components);var L=function(){var e=this,r=e.$createElement,t=e._self._c||r;return t("AppTanStackTable",{attrs:{table:e.instance}})},q=[];const k={};var E=g(f,L,q,!1,N,null,null,null);function N(e){for(let r in k)this[r]=k[r]}const U=function(){return E.exports}(),_={};_.props={value:{key:"value",required:!0,type:null}};_.setup=(e,r)=>{const t=e,s=o(()=>{const l=new Map;for(const[n,p]of Object.entries(t.value))(n==="StandardCode"||n==="Completeness"||n==="Compliance"||n==="Confidence")&&l.set(n,p);return Object.fromEntries(l)});return{imageUrl:o(()=>{const l=new URLSearchParams(s.value);return`${A}/generated-images/black-kite/summary-compliance-entry?${l}`})}};_.components=Object.assign({DotsSquare:F},_.components);var V=function(){var e=this,r=e.$createElement,t=e._self._c||r;return t("div",{staticClass:"relative max-w-fit overflow-hidden rounded-2xl bg-gradient-to-br from-blue-100 via-white to-white px-8 pt-8 shadow lg:max-h-72"},[t("div",{staticClass:"absolute top-full left-full -translate-y-1/3 -translate-x-1/3 rotate-45 transform xl:-translate-y-1/2"},[t("DotsSquare",{attrs:{color:"blue"}})],1),t("img",{staticClass:"relative h-64 w-64",attrs:{src:e.imageUrl,alt:e.value.StandardCode}})])},z=[];const b={};var H=g(_,V,z,!1,K,null,null,null);function K(e){for(let r in b)this[r]=b[r]}const P=function(){return H.exports}(),Q={read(e){return o(()=>{const r=O.find(t=>t.frameworkId===e.value);if(r)return r.data})}},v={};v.setup=(e,r)=>{const t=w("id"),s=w("frameworkId"),m=Q.read(s),l=o(()=>{if(m.value)return C.exports.groupBy(m.value.Controls,"AreaName")}),n=o(()=>s.value==="cis-csc-20"),p=["basic","foundational","organizational"],c=B.list(t),y=o(()=>c.data.value||[]),x=R(o(()=>{const a=C.exports.sortBy(y.value,"order"),u=C.exports.groupBy(a,"category");return p.reduce((i,d)=>(i[d]=u[d]||[],i),{})}));return{id:t,frameworkId:s,framework:m,mappedControls:l,isCis:n,maturityCategories:p,maturityList:c,mappedMaturity:x}};v.components=Object.assign({FrameworkSummaryDonut:P,ComplianceFrameworkTable:U,TodosChart:M},v.components);var W=function(){var e=this,r=e.$createElement,t=e._self._c||r;return e.framework?t("div",{staticClass:"flex flex-col space-y-8"},[t("div",{staticClass:"-space-y-2"},[t("BaseTypography",{staticClass:"uppercase text-gray-500",attrs:{variant:"overline"}},[e._v(" Cyber Maturity Roadmap ")]),t("BaseTypography",{attrs:{component:"h2",variant:"h5"}},[e._v(" "+e._s(e.framework.StandardFullName)+" ")])],1),t("div",{staticClass:"flex flex-col space-y-8 xl:flex-row xl:space-y-0 xl:space-x-8"},[t("FrameworkSummaryDonut",{attrs:{value:e.framework}}),t("BaseTypography",{staticClass:"flex-1 text-gray-500",attrs:{component:"p",variant:"p1"}},[e._v(" "+e._s(e.framework.StandardDescription)+" ")])],1),e.mappedControls?t("ComplianceFrameworkTable",{attrs:{id:e.id,"framework-id":e.frameworkId,controls:e.mappedControls}}):e._e(),e.isCis?t("BaseSimpleCard",[t("BaseVueQuery",{attrs:{query:e.maturityList},scopedSlots:e._u([{key:"success",fn:function(){return[t("TodosChart",{attrs:{"company-id":e.id,categories:e.maturityCategories},model:{value:e.mappedMaturity,callback:function(s){e.mappedMaturity=s},expression:"mappedMaturity"}})]},proxy:!0}],null,!1,1633110133)})],1):e._e()],1):e._e()},G=[];const S={};var J=g(v,W,G,!1,X,null,null,null);function X(e){for(let r in S)this[r]=S[r]}const ge=function(){return J.exports}();export{ge as default};
