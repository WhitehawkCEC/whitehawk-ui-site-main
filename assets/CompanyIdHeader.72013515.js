import{bs as r,bi as c,n as l}from"./index.bf67f21b.js";import{C as i}from"./CompanyStatusBadge.39cf2cf7.js";const s={};s.props={company:{key:"company",required:!0,type:null}};s.setup=(t,a)=>{function e(o){return new URL(o).hostname}return{formatUrl:e}};s.components=Object.assign({BackButton:r,BuildingSvg:c,CompanyStatusBadge:i},s.components);var p=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"flex flex-col space-y-2 lg:flex-row lg:items-center lg:justify-between lg:space-y-0"},[e("div",{staticClass:"flex flex-col space-y-2 lg:flex-row lg:items-center lg:space-y-0 lg:space-x-4"},[e("BackButton"),e("div",{staticClass:"flex items-center space-x-2"},[e("div",{staticClass:"shrink-0 rounded-full bg-blue-900 p-2"},[e("BuildingSvg",{staticClass:"h-auto w-6 text-white"})],1),e("div",{staticClass:"flex flex-col -space-y-1"},[t.company.domain?e("BaseTypography",{staticClass:"truncate uppercase text-gray-500",attrs:{variant:"overline"}},[t._v(" "+t._s(t.formatUrl(t.company.domain))+" ")]):t._e(),e("BaseTypography",{attrs:{component:"h2",variant:"h5"}},[t._v(" "+t._s(t.company.name)+" ")])],1)])],1),e("CompanyStatusBadge",{attrs:{value:t.company.status}})],1)},u=[];const n={};var m=l(s,p,u,!1,_,null,null,null);function _(t){for(let a in n)this[a]=n[a]}const v=function(){return m.exports}();export{v as C};
