import{T as d}from"./TodosChart.5ad58f9f.js";import{s as f,g}from"./sortBy.50c3bf9a.js";import{c1 as v,r as y,c as m,aA as h,n as x}from"./index.cb90a26d.js";import{u as C}from"./BarChart.4c1277f4.js";import"./TabbedPanel.bc09a7e8.js";import"./_baseOrderBy.264d13ba.js";import"./_arrayMap.dcea68f3.js";import"./_baseIteratee.18955e42.js";import"./_Uint8Array.b5fb3cf4.js";import"./keys.616fe924.js";import"./_baseIsEqual.50bcb824.js";import"./_baseEach.a1bf8494.js";import"./_baseAssignValue.bb5e7cc7.js";import"./_baseRest.ec7076f1.js";import"./chart.f4078cab.js";const a={};a.setup=(t,e)=>{const o=v("id"),r=y(),n=["critical","next","pending"],p=C.list(o),u=m(()=>p.data.value||[]),_=m(()=>{const s=f(u.value,"order");return g(s,"category")});return h(()=>_.value,s=>{r.value=n.reduce((i,c)=>(i[c]=s[c]||[],i),{})},{immediate:!0}),{id:o,goals:r,goalCategories:n}};a.components=Object.assign({TodosChart:d},a.components);var T=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"flex flex-col space-y-6"},[o("BaseTypography",{attrs:{component:"h2",variant:"h5"}},[t._v("Action Plan")]),o("BaseSimpleCard",[t.goals?o("TodosChart",{attrs:{"company-id":t.id,categories:t.goalCategories},model:{value:t.goals,callback:function(r){t.goals=r},expression:"goals"}}):t._e()],1)],1)},B=[];const l={};var b=x(a,T,B,!1,j,null,null,null);function j(t){for(let e in l)this[e]=l[e]}const D=function(){return b.exports}();export{D as default};