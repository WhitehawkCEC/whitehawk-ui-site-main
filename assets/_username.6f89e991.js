import{bt as p,bz as _,c8 as f,c as o,n as v}from"./index.89daa9e1.js";import{P as d}from"./ParentPageWithTabbedMenuItems.8f3a2213.js";import{u as x}from"./useUsers.0b53ab7c.js";import{e as c}from"./attributeValue.ea53a720.js";const r={};r.setup=(e,t)=>{const s=f("username"),a=x.read(s),m=o(()=>a.data.value?c(a.data.value,"name"):null),u=o(()=>a.data.value?c(a.data.value,"email"):null),i=o(()=>{const n=`/admin/users/${encodeURIComponent(s.value)}/`;return[{to:n,name:"Profile"},{to:`${n}settings`,name:"Settings"},{to:`${n}password`,name:"Password"},{to:`${n}companies`,name:"Companies"},{to:`${n}access`,name:"Access"}]});return{user:a,name:m,email:u,links:i}};r.components=Object.assign({ParentPageWithTabbedMenuItems:d,BackButton:p,GravatarImg:_},r.components);var h=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("ParentPageWithTabbedMenuItems",{attrs:{value:e.links}},[s("div",{staticClass:"flex flex-col items-start space-y-4 sm:flex-row sm:items-center sm:space-x-8 sm:space-y-0"},[s("BackButton"),s("BaseVueQuery",{attrs:{query:e.user},scopedSlots:e._u([{key:"success",fn:function(){return[s("div",{staticClass:"flex items-center space-x-4"},[e.email?s("GravatarImg",{staticClass:"h-10 w-10 flex-shrink-0 rounded-full",attrs:{email:e.email}}):e._e(),s("div",{staticClass:"flex flex-col"},[s("BaseTypography",{staticClass:"truncate",attrs:{variant:"h6",component:"h1"}},[e._v(" "+e._s(e.name)+" ")]),s("BaseTypography",{staticClass:"uppercase",attrs:{variant:"overline"}},[e._v(" "+e._s(e.email)+" ")])],1)],1)]},proxy:!0}])})],1)])},y=[];const l={};var g=v(r,h,y,!1,C,null,null,null);function C(e){for(let t in l)this[t]=l[t]}const $=function(){return g.exports}();export{$ as default};