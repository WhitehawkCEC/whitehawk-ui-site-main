import{A as b,T}from"./AppTanStackTable.f4f1ba24.js";import{S as $}from"./StarLevelDisplay.8e316206.js";import{c as j}from"./createOnChangeFn.d6d59161.js";import{d as u,aJ as A,aS as g,n as C,cl as F,aQ as O,bZ as h,r as I,aB as R}from"./index.9e932179.js";import{u as B}from"./createSimpleTable.a17270bd.js";import{T as D}from"./TodosChart.8d86571c.js";import{g as w,s as E}from"./sortBy.7bc02a86.js";import{u as M}from"./BarChart.9cbf272c.js";import{M as q}from"./MaturityTodo.d2c152a5.js";import{K as L}from"./KnownStandardCodes.dc74bde0.js";import"./magnifying-glass.b7cbe8fe.js";import"./chevron-left.0808b01b.js";import"./TransitionExpand.4501a89f.js";import"./keys.df393307.js";import"./chevron-up.736f4142.js";import"./_baseOrderBy.e1582146.js";import"./_arrayMap.dcea68f3.js";import"./_baseIteratee.ad64d973.js";import"./_Uint8Array.33edb8fe.js";import"./_baseIsEqual.6aad13b8.js";import"./_baseEach.e8c469fc.js";import"./_baseAssignValue.416f55d0.js";import"./_baseRest.58bd2008.js";import"./chart.f4078cab.js";const d={};d.props={id:{key:"id",required:!0,type:String},frameworkId:{key:"frameworkId",required:!0,type:String},controls:{key:"controls",required:!0,type:Object}};d.setup=(e,r)=>{const t=e,o=u(()=>{const a=[];for(const[l,c]of Object.entries(t.controls))a.push({id:m(l),name:l,numControls:c.length,averageStarLevel:i(c)});return a});function m(a){return a.split(" ").join("-").toLocaleLowerCase()}function i(a){let l=0,c=0;return a.forEach(({StarLevel:p})=>{p!==0&&(l+=p,c++)}),l/c}const s=A(),n=j(),_=[n.accessor("name",{header:()=>"Area",enableColumnFilter:!1}),n.accessor("numControls",{header:()=>"Total # Controls",enableColumnFilter:!1}),n.accessor("averageStarLevel",{header:()=>"Average Star Level",cell:a=>g($,{props:{id:a.row.original.id,value:a.getValue()}}),enableColumnFilter:!1}),n.display({id:"actions",header:"Actions",cell:({row:a})=>g(T,{props:{actions:[{id:"view",action(){s.push(`/client/companies/${t.id}/journey/cyber-maturity-roadmap/${t.frameworkId}/${a.original.id}`)}}]}})})];return{instance:B(o,_)}};d.components=Object.assign({AppTanStackTable:b},d.components);var U=function(){var e=this,r=e.$createElement,t=e._self._c||r;return t("AppTanStackTable",{attrs:{table:e.instance}})},N=[];const k={};var Q=C(d,U,N,!1,V,null,null,null);function V(e){for(let r in k)this[r]=k[r]}const z=function(){return Q.exports}(),f={};f.props={value:{key:"value",required:!0,type:null}};f.setup=(e,r)=>{const t=e,o=u(()=>{const i=new Map;for(const[s,n]of Object.entries(t.value))(s==="StandardCode"||s==="Completeness"||s==="Compliance"||s==="Confidence")&&i.set(s,n);return Object.fromEntries(i)});return{imageUrl:u(()=>{const i=new URLSearchParams(o.value);return`${O}/generated-images/black-kite/summary-compliance-entry?${i}`})}};f.components=Object.assign({DotsSquare:F},f.components);var H=function(){var e=this,r=e.$createElement,t=e._self._c||r;return t("div",{staticClass:"relative max-w-fit overflow-hidden rounded-2xl bg-gradient-to-br from-blue-100 via-white to-white px-8 pt-8 shadow lg:max-h-72"},[t("img",{staticClass:"relative z-10 h-64 w-64",attrs:{src:e.imageUrl,alt:e.value.StandardCode}}),t("div",{staticClass:"absolute top-full left-full -translate-y-1/3 -translate-x-1/3 rotate-45 transform xl:-translate-y-1/2"},[t("DotsSquare",{attrs:{color:"blue"}})],1)])},K=[];const x={};var P=C(f,H,K,!1,G,null,null,null);function G(e){for(let r in x)this[r]=x[r]}const J=function(){return P.exports}(),W={read(e){return u(()=>{const r=L.find(t=>t.frameworkId===e.value);if(r)return r.data})}},v={};v.setup=(e,r)=>{const t=h("id"),o=h("frameworkId"),m=W.read(o),i=u(()=>{if(m.value)return w(m.value.Controls,"AreaName")}),s=u(()=>o.value==="cis-csc-20"),n=I(),_=q,y=M.list(t),a=u(()=>{const l=E(y.data.value,"order");return w(l,"category")});return R(a,l=>{n.value=_.reduce((c,p)=>(c[p]=l[p]||[],c),{})},{immediate:!0}),{id:t,frameworkId:o,framework:m,mappedControls:i,isCis:s,maturity:n,maturityCategories:_,maturityQuery:y}};v.components=Object.assign({FrameworkSummaryDonut:J,ComplianceFrameworkTable:z,TodosChart:D},v.components);var Y=function(){var e=this,r=e.$createElement,t=e._self._c||r;return e.framework?t("div",{staticClass:"flex flex-col space-y-8"},[t("div",{staticClass:"flex flex-col"},[t("BaseTypography",{staticClass:"uppercase text-gray-500",attrs:{variant:"overline"}},[e._v(" "+e._s(e.framework.StandardCode)+" ")]),t("BaseTypography",{attrs:{component:"h2",variant:"h5"}},[e._v(" "+e._s(e.framework.StandardFullName)+" ")])],1),t("div",{staticClass:"flex flex-col space-y-8 lg:flex-row lg:space-y-0 lg:space-x-8"},[t("FrameworkSummaryDonut",{attrs:{value:e.framework}}),t("BaseTypography",{staticClass:"flex-1 text-gray-500",attrs:{component:"p",variant:"p1"}},[e._v(" "+e._s(e.framework.StandardDescription)+" ")])],1),t("ClientOnly",[e.mappedControls?t("ComplianceFrameworkTable",{attrs:{id:e.id,"framework-id":e.frameworkId,controls:e.mappedControls}}):e._e()],1),e.isCis?t("BaseSimpleCard",[t("BaseVueQuery",{attrs:{query:e.maturityQuery},scopedSlots:e._u([{key:"success",fn:function(){return[e.maturity?t("TodosChart",{attrs:{"company-id":e.id,categories:e.maturityCategories},model:{value:e.maturity,callback:function(o){e.maturity=o},expression:"maturity"}}):e._e()]},proxy:!0}],null,!1,3916945308)})],1):e._e()],1):e._e()},Z=[];const S={};var X=C(v,Y,Z,!1,ee,null,null,null);function ee(e){for(let r in S)this[r]=S[r]}const be=function(){return X.exports}();export{be as default};