import{B as c}from"./BackButton.8f9dff6b.js";import{b_ as l,bE as i,d as r,n as p}from"./index.dc4d52c0.js";import"./chevron-left.0808b01b.js";const a={};a.setup=(t,s)=>{const e=l("id"),o=i.read(e);return{company:r(()=>o.data.value)}};a.components=Object.assign({BackButton:c},a.components);var m=function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("section",[e("div",{staticClass:"space-y-8"},[t.company?e("div",{staticClass:"flex flex-col space-y-2 lg:flex-row lg:items-end lg:justify-between lg:space-y-0"},[e("div",{staticClass:"flex flex-col space-y-2 lg:flex-row lg:items-end lg:space-y-0 lg:space-x-8"},[e("div",[e("BackButton",{attrs:{link:"/admin/companies"}})],1),e("div",{staticClass:"flex flex-col"},[e("BaseTypography",{attrs:{component:"h2",variant:"h5"}},[t._v(" "+t._s(t.company.name)+" ")]),e("BaseTypography",{staticClass:"truncate uppercase text-gray-500",attrs:{variant:"overline"}},[t._v(" "+t._s(t.company.domain)+" ")])],1)]),t.company.industry?e("div",[e("dt",{staticClass:"sr-only"},[t._v("Industry")]),e("dd",{staticClass:"inline-block self-start rounded-full bg-teal-200 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-teal-800"},[t._v(" "+t._s(t.company.industry.name)+" ")])]):t._e()]):t._e(),e("NuxtChild")],1)])},d=[];const n={};var u=p(a,m,d,!1,_,null,null,null);function _(t){for(let s in n)this[s]=n[s]}const g=function(){return u.exports}();export{g as default};