import{T as d}from"./TodosChart.89c5c3f4.js";import{s as f,g}from"./sortBy.1fcfb7e6.js";import{b$ as v,r as y,c as m,aA as h,n as x}from"./index.1e14903e.js";import{u as C}from"./BarChart.be32a5d2.js";import"./TabbedPanel.b2489643.js";import"./_baseOrderBy.00d9924c.js";import"./_arrayMap.dcea68f3.js";import"./_baseIteratee.a8d587f0.js";import"./_Uint8Array.33a28bee.js";import"./keys.d46cc2fa.js";import"./_baseIsEqual.50045d39.js";import"./_baseEach.b0dd8181.js";import"./_baseAssignValue.2bd10278.js";import"./_baseRest.a46d0cb8.js";import"./chart.f4078cab.js";const a={};a.setup=(t,e)=>{const o=v("id"),r=y(),n=["critical","next","pending"],p=C.list(o),u=m(()=>p.data.value||[]),_=m(()=>{const s=f(u.value,"order");return g(s,"category")});return h(()=>_.value,s=>{r.value=n.reduce((i,c)=>(i[c]=s[c]||[],i),{})},{immediate:!0}),{id:o,goals:r,goalCategories:n}};a.components=Object.assign({TodosChart:d},a.components);var T=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"flex flex-col space-y-6"},[o("BaseTypography",{attrs:{component:"h2",variant:"h5"}},[t._v("Action Plan")]),o("BaseSimpleCard",[t.goals?o("TodosChart",{attrs:{"company-id":t.id,categories:t.goalCategories},model:{value:t.goals,callback:function(r){t.goals=r},expression:"goals"}}):t._e()],1)],1)},B=[];const l={};var b=x(a,T,B,!1,j,null,null,null);function j(t){for(let e in l)this[e]=l[e]}const D=function(){return b.exports}();export{D as default};