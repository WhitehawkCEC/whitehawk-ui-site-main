import{aD as y,aL as u,b as o,aH as h,d,aK as b,aF as B,n as w}from"./index.1144ecd1.js";const $={update(){async function e({oldPassword:t,newPassword:s}){const a=await u.currentAuthenticatedUser();return await u.changePassword(a,t,s)}return y(e)}},f={};f.setup=(e,t)=>{const s=o(""),a=o(""),r=o(""),_=h(),l=d(()=>_.username),v=d(()=>s.value.length>0&&a.value.length>0&&a.value===r.value),g=b(),C=$.update(),c=B();async function x(){try{await C.mutateAsync({oldPassword:s.value,newPassword:a.value}),c.success("Password changed successfully"),g.push(`/profile/${l.value}`)}catch(i){const{message:P}=i;c.error(P,i)}}return{oldPassword:s,newPassword:a,newPasswordConfirm:r,username:l,okay:v,changePassword:x}};var k=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("form",{staticClass:"flex flex-col sm:divide-y",on:{submit:function(a){return a.preventDefault(),e.changePassword.apply(null,arguments)}}},[s("div",{staticClass:"p-4"},[s("label",{staticClass:"hidden"},[e._v(" Username "),s("input",{attrs:{autocomplete:"username",readonly:""},domProps:{value:e.username}})]),s("BaseLabel",{staticClass:"grid grid-cols-1 gap-1 sm:grid-cols-3 sm:items-center sm:gap-4"},[s("span",{staticClass:"block text-sm font-medium leading-5 text-gray-700"},[e._v(" Old Password ")]),s("div",{staticClass:"flex flex-col sm:col-span-2"},[s("BaseInput",{attrs:{type:"password",autocomplete:"password"},model:{value:e.oldPassword,callback:function(a){e.oldPassword=a},expression:"oldPassword"}})],1)])],1),s("BaseLabel",{staticClass:"grid grid-cols-1 gap-1 p-4 sm:grid-cols-3 sm:items-center sm:gap-4"},[s("span",{staticClass:"block text-sm font-medium leading-5 text-gray-700"},[e._v(" New Password ")]),s("div",{staticClass:"flex flex-col sm:col-span-2"},[s("BaseInput",{attrs:{type:"password",autocomplete:"new-password"},model:{value:e.newPassword,callback:function(a){e.newPassword=a},expression:"newPassword"}})],1)]),s("BaseLabel",{staticClass:"grid grid-cols-1 gap-1 p-4 sm:grid-cols-3 sm:items-center sm:gap-4"},[s("span",{staticClass:"block text-sm font-medium leading-5 text-gray-700"},[e._v(" Confirm New Password ")]),s("div",{staticClass:"flex flex-col sm:col-span-2"},[s("BaseInput",{attrs:{type:"password",autocomplete:"new-password"},model:{value:e.newPasswordConfirm,callback:function(a){e.newPasswordConfirm=a},expression:"newPasswordConfirm"}})],1)]),s("div",{staticClass:"p-4"},[s("div",{staticClass:"md:inline-flex"},[s("BaseButton",{staticClass:"w-full md:w-auto",attrs:{"display-type":"info",disabled:!e.okay}},[e._v(" Change Password ")])],1)])],1)},U=[];const m={};var S=w(f,k,U,!1,F,null,null,null);function F(e){for(let t in m)this[t]=m[t]}const L=function(){return S.exports}(),n={};n.setup=(e,t)=>({});n.components=Object.assign({CurrentUserChangePasswordForm:L},n.components);var j=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("main",{staticClass:"space-y-8"},[s("BaseSimpleCard",{staticClass:"flex flex-col divide-y"},[s("BaseTypography",{staticClass:"p-4",attrs:{component:"h2",variant:"subtitle3"}},[e._v(" Password ")]),s("CurrentUserChangePasswordForm")],1)],1)},A=[];const p={};var I=w(n,j,A,!1,M,null,null,null);function M(e){for(let t in p)this[t]=p[t]}const R=function(){return I.exports}();export{R as default};
