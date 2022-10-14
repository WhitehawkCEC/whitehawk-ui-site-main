import{A as $,T}from"./AppTanStackTable.9158f35d.js";import{S as j}from"./StarLevelDisplay.78a8ffbf.js";import{c as A}from"./createOnChangeFn.49d20a2f.js";import{c,aI as F,aS as h,n as C,cp as D,aQ as I,c0 as w,r as O,aA as B}from"./index.0f72a133.js";import{u as R}from"./createSimpleTable.075dbb0d.js";import{T as q}from"./TodosChart.8d00c426.js";import{g as k,s as E}from"./sortBy.47953798.js";import{u as L}from"./BarChart.570ad811.js";import{K as M}from"./KnownStandardCodes.dc74bde0.js";import"./magnifying-glass.b7cbe8fe.js";import"./TransitionExpand.adec6bac.js";import"./keys.9ed30e7b.js";import"./chevron-up.736f4142.js";import"./TabbedPanel.983eef7e.js";import"./_baseOrderBy.17f5352f.js";import"./_arrayMap.dcea68f3.js";import"./_baseIteratee.796b8c57.js";import"./_Uint8Array.aff23e05.js";import"./_baseIsEqual.dfd62374.js";import"./_baseEach.25079273.js";import"./_baseAssignValue.c34fdc17.js";import"./_baseRest.9bd16d32.js";import"./chart.f4078cab.js";const d={};d.props={id:{key:"id",required:!0,type:String},frameworkId:{key:"frameworkId",required:!0,type:String},controls:{key:"controls",required:!0,type:Object}};d.setup=(e,r)=>{const t=e,o=c(()=>{const a=[];for(const[u,i]of Object.entries(t.controls))a.push({id:m(u),name:u,numControls:i.length,averageStarLevel:l(i)});return a});function m(a){return a.split(" ").join("-").toLocaleLowerCase()}function l(a){let u=0,i=0;return a.forEach(({StarLevel:p})=>{p!==0&&(u+=p,i++)}),u/i}const s=F(),n=A(),_=[n.accessor("name",{header:()=>"Area",enableColumnFilter:!1}),n.accessor("numControls",{header:()=>"Total # Controls",enableColumnFilter:!1}),n.accessor("averageStarLevel",{header:()=>"Average Star Level",cell:a=>h(j,{props:{id:a.row.original.id,value:a.getValue()}}),enableColumnFilter:!1}),n.display({id:"actions",header:"Actions",cell:({row:a})=>h(T,{props:{actions:[{id:"view",action(){s.push(`/client/companies/${t.id}/journey/cyber-maturity-roadmap/${t.frameworkId}/${a.original.id}`)}}]}})})];return{instance:R(o,_)}};d.components=Object.assign({AppTanStackTable:$},d.components);var N=function(){var e=this,r=e.$createElement,t=e._self._c||r;return t("AppTanStackTable",{attrs:{table:e.instance}})},U=[];const x={};var Q=C(d,N,U,!1,z,null,null,null);function z(e){for(let r in x)this[r]=x[r]}const V=function(){return Q.exports}(),f={};f.props={value:{key:"value",required:!0,type:null}};f.setup=(e,r)=>{const t=e,o=c(()=>{const l=new Map;for(const[s,n]of Object.entries(t.value))(s==="StandardCode"||s==="Completeness"||s==="Compliance"||s==="Confidence")&&l.set(s,n);return Object.fromEntries(l)});return{imageUrl:c(()=>{const l=new URLSearchParams(o.value);return`${I}/generated-images/black-kite/summary-compliance-entry?${l}`})}};f.components=Object.assign({DotsSquare:D},f.components);var H=function(){var e=this,r=e.$createElement,t=e._self._c||r;return t("div",{staticClass:"relative max-w-fit overflow-hidden rounded-2xl bg-gradient-to-br from-blue-100 via-white to-white px-8 pt-8 shadow lg:max-h-72"},[t("img",{staticClass:"relative z-10 h-64 w-64",attrs:{src:e.imageUrl,alt:e.value.StandardCode}}),t("div",{staticClass:"absolute top-full left-full -translate-y-1/3 -translate-x-1/3 rotate-45 transform xl:-translate-y-1/2"},[t("DotsSquare",{attrs:{color:"blue"}})],1)])},K=[];const b={};var P=C(f,H,K,!1,W,null,null,null);function W(e){for(let r in b)this[r]=b[r]}const G=function(){return P.exports}(),J={read(e){return c(()=>{const r=M.find(t=>t.frameworkId===e.value);if(r)return r.data})}},v={};v.setup=(e,r)=>{const t=w("id"),o=w("frameworkId"),m=J.read(o),l=c(()=>{if(m.value)return k(m.value.Controls,"AreaName")}),s=c(()=>o.value==="cis-csc-20"),n=O(),_=["basic","foundational","organizational"],y=L.list(t),a=c(()=>y.data.value||[]),u=c(()=>{const i=E(a.value,"order");return k(i,"category")});return B(u,i=>{n.value=_.reduce((p,g)=>(p[g]=i[g]||[],p),{})},{immediate:!0}),{id:t,frameworkId:o,framework:m,mappedControls:l,isCis:s,maturity:n,maturityCategories:_,maturityQuery:y}};v.components=Object.assign({FrameworkSummaryDonut:G,ComplianceFrameworkTable:V,TodosChart:q},v.components);var X=function(){var e=this,r=e.$createElement,t=e._self._c||r;return e.framework?t("div",{staticClass:"flex flex-col space-y-8"},[t("div",{staticClass:"flex flex-col"},[t("BaseTypography",{staticClass:"uppercase text-gray-500",attrs:{variant:"overline"}},[e._v(" "+e._s(e.framework.StandardCode)+" ")]),t("BaseTypography",{attrs:{component:"h2",variant:"h5"}},[e._v(" "+e._s(e.framework.StandardFullName)+" ")])],1),t("div",{staticClass:"flex flex-col space-y-8 lg:flex-row lg:space-y-0 lg:space-x-8"},[t("FrameworkSummaryDonut",{attrs:{value:e.framework}}),t("BaseTypography",{staticClass:"flex-1 text-gray-500",attrs:{component:"p",variant:"p1"}},[e._v(" "+e._s(e.framework.StandardDescription)+" ")])],1),e.mappedControls?t("ComplianceFrameworkTable",{attrs:{id:e.id,"framework-id":e.frameworkId,controls:e.mappedControls}}):e._e(),e.isCis?t("BaseSimpleCard",[t("BaseVueQuery",{attrs:{query:e.maturityQuery},scopedSlots:e._u([{key:"success",fn:function(){return[e.maturity?t("TodosChart",{attrs:{"company-id":e.id,categories:e.maturityCategories},model:{value:e.maturity,callback:function(o){e.maturity=o},expression:"maturity"}}):e._e()]},proxy:!0}],null,!1,3916945308)})],1):e._e()],1):e._e()},Y=[];const S={};var Z=C(v,X,Y,!1,ee,null,null,null);function ee(e){for(let r in S)this[r]=S[r]}const be=function(){return Z.exports}();export{be as default};
