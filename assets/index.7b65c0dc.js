import{C as c}from"./CognitoUsersTable.7d2f55e6.js";import{ao as u,n as p}from"./index.cb90a26d.js";import{u as m}from"./useAllCompanyAccess.bcf38e33.js";import{u as l}from"./useUsers.c532d175.js";import"./CognitoUserStatusDisplay.b072bb8f.js";import"./UserGravatarDisplay.07ff0643.js";import"./AppTanStackTable.ee747f8b.js";import"./createOnChangeFn.037df413.js";import"./chevron-up.736f4142.js";import"./magnifying-glass.b7cbe8fe.js";import"./TransitionExpand.18ea0ced.js";import"./attributeListToMap.bea9f70d.js";import"./createSimpleTable.7d574f51.js";const r={};r.setup=(t,e)=>({queries:[l.list(),m.list()]});r.components=Object.assign({PlusSvg:u,CognitoUsersTable:c},r.components);var _=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("section",{staticClass:"space-y-4"},[s("div",{staticClass:"flex items-center justify-between"},[s("BaseTypography",{attrs:{component:"h2",variant:"h5"}},[t._v("Users")]),s("BaseButton",{staticClass:"space-x-1",attrs:{to:"/admin/users/new",type:"button"}},[s("PlusSvg",{staticClass:"w-5"}),s("span",[t._v("User")])],1)],1),s("BaseVueQueries",{attrs:{queries:t.queries},scopedSlots:t._u([{key:"success",fn:function(o){var a=o[0],i=o[1];return[s("CognitoUsersTable",{attrs:{users:a,"company-access":i}})]}}])})],1)},f=[];const n={};var v=p(r,_,f,!1,y,null,null,null);function y(t){for(let e in n)this[e]=n[e]}const T=function(){return v.exports}();export{T as default};