import{bs as n,cg as i,d as c,n as o}from"./index.1543f442.js";import{S as l,t as p}from"./index.e978bf00.js";const a={};a.props={id:{key:"id",required:!0,type:String},subscription:{key:"subscription",required:!0,type:null}};a.setup=(t,s)=>{const e=t;return{formattedType:c(()=>p(e.subscription.type))}};a.components=Object.assign({BackButton:n,ShieldCheckSvg:i,SubscriptionStateBadge:l},a.components);var u=function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"flex flex-col space-y-2 lg:flex-row lg:items-end lg:justify-between lg:space-y-0"},[e("div",{staticClass:"flex flex-col space-y-6 lg:flex-row lg:items-center lg:space-x-6 lg:space-y-0"},[e("BackButton"),e("div",{staticClass:"flex items-center space-x-2"},[e("div",{staticClass:"shrink-0 rounded-full bg-blue-900 p-2"},[e("ShieldCheckSvg",{staticClass:"h-auto w-6 text-white"})],1),e("div",{staticClass:"flex flex-col -space-y-1"},[e("BaseTypography",{staticClass:"uppercase text-gray-500",attrs:{variant:"overline"}},[t._v(" "+t._s(t.formattedType)+" ")]),e("BaseTypography",{attrs:{variant:"h5",component:"h2"}},[t._v(" "+t._s(t.subscription.name)+" ")])],1)])],1),t.subscription.status?e("SubscriptionStateBadge",{attrs:{state:t.subscription.status.state}}):t._e()],1)},d=[];const r={};var _=o(a,u,d,!1,f,null,null,null);function f(t){for(let s in r)this[s]=r[s]}const v=function(){return _.exports}();export{v as S};