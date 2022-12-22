import{A as $,T}from"./AppTanStackTable.98ac6539.js";import{S as j}from"./StarLevelDisplay.40d99571.js";import{c as F}from"./createOnChangeFn.19c36eca.js";import{d as l,aS as w,n as y,cy as A,aQ as D,c7 as h,b as O,az as B}from"./index.0c8230bc.js";import{u as I}from"./createSimpleTable.65ab466f.js";import{T as q}from"./TodosChart.c977ac67.js";import{g as k,s as E}from"./sortBy.49a04c67.js";import{u as R}from"./BarChart.df7eff83.js";import{K as L}from"./KnownStandardCodes.dc74bde0.js";import"./magnifying-glass.b7cbe8fe.js";import"./TransitionExpand.7e0b9363.js";import"./keys.800f56cd.js";import"./chevron-up.736f4142.js";import"./TabbedPanel.6e67d6fd.js";import"./_baseAssignValue.b8c9a3e6.js";import"./_Uint8Array.5c187ad7.js";import"./_baseIteratee.a09e2f86.js";import"./_baseIsEqual.56c2aa08.js";import"./_arrayMap.dcea68f3.js";import"./chart.c54a61e9.js";const d={};d.props={id:{key:"id",required:!0,type:String},frameworkId:{key:"frameworkId",required:!0,type:String},controls:{key:"controls",required:!0,type:Object}};d.setup=(e,r)=>{const t=e,s=l(()=>{const a=[];for(const[i,c]of Object.entries(t.controls))a.push({id:u(i),name:i,numControls:c.length,averageStarLevel:n(c)});return a});function u(a){return a.split(" ").join("-").toLocaleLowerCase()}function n(a){let i=0,c=0;return a.forEach(({StarLevel:p})=>{p!==0&&(i+=p,c++)}),i/c}const o=F(),m=[o.accessor("name",{header:()=>"Area",enableColumnFilter:!1}),o.accessor("numControls",{header:()=>"Total # Controls",enableColumnFilter:!1}),o.accessor("averageStarLevel",{header:()=>"Average Star Level",cell:a=>w(j,{props:{id:a.row.original.id,value:a.getValue()}}),enableColumnFilter:!1}),o.display({id:"actions",header:"Actions",cell:({row:a})=>w(T,{props:{actions:[{id:"view",to:`/client/companies/${t.id}/journey/cyber-maturity-roadmap/${t.frameworkId}/${a.original.id}`}]}})})];return{instance:I(s,m)}};d.components=Object.assign({AppTanStackTable:$},d.components);var M=function(){var e=this,r=e.$createElement,t=e._self._c||r;return t("AppTanStackTable",{attrs:{table:e.instance}})},N=[];const b={};var U=y(d,M,N,!1,Q,null,null,null);function Q(e){for(let r in b)this[r]=b[r]}const z=function(){return U.exports}(),f={};f.props={value:{key:"value",required:!0,type:null}};f.setup=(e,r)=>{const t=e,s=l(()=>{const n=new Map;for(const[o,m]of Object.entries(t.value))(o==="StandardCode"||o==="Completeness"||o==="Compliance"||o==="Confidence")&&n.set(o,m);return Object.fromEntries(n)});return{imageUrl:l(()=>{const n=new URLSearchParams(s.value);return`${D}/generated-images/black-kite/summary-compliance-entry?${n}`})}};f.components=Object.assign({DotsSquare:A},f.components);var V=function(){var e=this,r=e.$createElement,t=e._self._c||r;return t("div",{staticClass:"relative max-w-fit overflow-hidden rounded-2xl bg-gradient-to-br from-blue-100 via-white to-white px-8 pt-8 shadow lg:max-h-72"},[t("div",{staticClass:"absolute top-full left-full -translate-y-1/3 -translate-x-1/3 rotate-45 transform xl:-translate-y-1/2"},[t("DotsSquare",{attrs:{color:"blue"}})],1),t("img",{staticClass:"relative h-64 w-64",attrs:{src:e.imageUrl,alt:e.value.StandardCode}})])},H=[];const x={};var K=y(f,V,H,!1,P,null,null,null);function P(e){for(let r in x)this[r]=x[r]}const W=function(){return K.exports}(),G={read(e){return l(()=>{const r=L.find(t=>t.frameworkId===e.value);if(r)return r.data})}},_={};_.setup=(e,r)=>{const t=h("id"),s=h("frameworkId"),u=G.read(s),n=l(()=>{if(u.value)return k(u.value.Controls,"AreaName")}),o=l(()=>s.value==="cis-csc-20"),m=O(),v=["basic","foundational","organizational"],a=R.list(t),i=l(()=>a.data.value||[]),c=l(()=>{const p=E(i.value,"order");return k(p,"category")});return B(c,p=>{m.value=v.reduce((C,g)=>(C[g]=p[g]||[],C),{})},{immediate:!0}),{id:t,frameworkId:s,framework:u,mappedControls:n,isCis:o,maturity:m,maturityCategories:v,maturityQuery:a}};_.components=Object.assign({FrameworkSummaryDonut:W,ComplianceFrameworkTable:z,TodosChart:q},_.components);var J=function(){var e=this,r=e.$createElement,t=e._self._c||r;return e.framework?t("div",{staticClass:"flex flex-col space-y-8"},[t("div",{staticClass:"-space-y-2"},[t("BaseTypography",{staticClass:"uppercase text-gray-500",attrs:{variant:"overline"}},[e._v(" "+e._s(e.framework.StandardCode)+" ")]),t("BaseTypography",{attrs:{component:"h2",variant:"h5"}},[e._v(" "+e._s(e.framework.StandardFullName)+" ")])],1),t("div",{staticClass:"flex flex-col space-y-8 lg:flex-row lg:space-y-0 lg:space-x-8"},[t("FrameworkSummaryDonut",{attrs:{value:e.framework}}),t("BaseTypography",{staticClass:"flex-1 text-gray-500",attrs:{component:"p",variant:"p1"}},[e._v(" "+e._s(e.framework.StandardDescription)+" ")])],1),e.mappedControls?t("ComplianceFrameworkTable",{attrs:{id:e.id,"framework-id":e.frameworkId,controls:e.mappedControls}}):e._e(),e.isCis?t("BaseSimpleCard",[t("BaseVueQuery",{attrs:{query:e.maturityQuery},scopedSlots:e._u([{key:"success",fn:function(){return[e.maturity?t("TodosChart",{attrs:{"company-id":e.id,categories:e.maturityCategories},model:{value:e.maturity,callback:function(s){e.maturity=s},expression:"maturity"}}):e._e()]},proxy:!0}],null,!1,3916945308)})],1):e._e()],1):e._e()},X=[];const S={};var Y=y(_,J,X,!1,Z,null,null,null);function Z(e){for(let r in S)this[r]=S[r]}const we=function(){return Y.exports}();export{we as default};
