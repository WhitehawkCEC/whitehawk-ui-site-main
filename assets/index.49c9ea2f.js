import{T as y}from"./TodosChart.9f174f78.js";import{l as p}from"./lodash.2f203e49.js";import{ca as f,d as c,n as v}from"./index.1144ecd1.js";import{u as g}from"./_baseEach.9da0ccd4.js";import{s as x}from"./index.2bf4243c.js";import"./TabbedPanel.b193c563.js";import"./_baseOrderBy.21fcf8cb.js";import"./chart.c54a61e9.js";import"./_arrayMap.dcea68f3.js";import"./_baseIteratee.043f9ac4.js";import"./_Uint8Array.f2615faf.js";import"./keys.9cbd67c8.js";import"./_baseIsEqual.f8950d45.js";const a={};a.setup=(t,e)=>{const o=f("id"),s=["critical","next","pending"],r=g.list(o),u=c(()=>r.data.value||[]),m=x(c(()=>{const d=p.exports.sortBy(u.value,"order"),_=p.exports.groupBy(d,"category");return s.reduce((n,i)=>(n[i]=_[i]||[],n),{})}));return{id:o,goalCategories:s,maturityList:r,mappedGoals:m}};a.components=Object.assign({TodosChart:y},a.components);var h=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"flex flex-col space-y-8"},[o("div",{staticClass:"-space-y-2"},[o("BaseTypography",{staticClass:"uppercase text-gray-500",attrs:{variant:"overline"}},[t._v(" Cyber Maturity Roadmap ")]),o("BaseTypography",{attrs:{component:"h2",variant:"h5"}},[t._v("Action Plan")])],1),o("BaseSimpleCard",[o("BaseVueQuery",{attrs:{query:t.maturityList},scopedSlots:t._u([{key:"success",fn:function(){return[o("TodosChart",{attrs:{"company-id":t.id,categories:t.goalCategories},model:{value:t.mappedGoals,callback:function(s){t.mappedGoals=s},expression:"mappedGoals"}})]},proxy:!0}])})],1)],1)},C=[];const l={};var B=v(a,h,C,!1,T,null,null,null);function T(t){for(let e in l)this[e]=l[e]}const D=function(){return B.exports}();export{D as default};