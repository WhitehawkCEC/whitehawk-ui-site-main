import{aE as x,bt as i,r as u,d as y,aJ as C,aG as P,n as p,b_ as h}from"./index.038aef42.js";const b={update(){return x(i.adminSetUserPassword.bind(i))}},r={};r.props={username:{key:"username",required:!0,type:String}};r.setup=(s,t)=>{const e=s,a=u(""),o=u(""),_=y(()=>a.value.length>0&&a.value===o.value),f=b.update(),v=C(),c=P();async function w(){try{await f.mutateAsync({Username:e.username,Password:a.value,Permanent:!0}),c.success("Password changed successfully"),v.push(`/admin/users/${e.username}`)}catch(l){const{message:g}=l;c.error(g,l)}}return{password:a,passwordConfirm:o,okayPassword:_,changePassword:w}};var $=function(){var s=this,t=s.$createElement,e=s._self._c||t;return e("form",{staticClass:"flex flex-col divide-y",on:{submit:function(a){return a.preventDefault(),s.changePassword.apply(null,arguments)}}},[e("div",[e("label",{staticClass:"hidden"},[s._v(" Username "),e("input",{attrs:{autocomplete:"username",readonly:""},domProps:{value:s.username}})]),e("BaseLabel",{staticClass:"grid grid-cols-1 gap-1 p-4 sm:grid-cols-3 sm:items-center sm:gap-4"},[e("span",{staticClass:"block text-sm font-medium leading-5 text-gray-700"},[s._v(" New Password ")]),e("div",{staticClass:"flex flex-col sm:col-span-2"},[e("BaseInput",{attrs:{type:"password",autocomplete:"new-password"},model:{value:s.password,callback:function(a){s.password=a},expression:"password"}})],1)])],1),e("BaseLabel",{staticClass:"grid grid-cols-1 gap-1 p-4 sm:grid-cols-3 sm:items-center sm:gap-4"},[e("span",{staticClass:"block text-sm font-medium leading-5 text-gray-700"},[s._v(" Confirm New Password ")]),e("div",{staticClass:"flex flex-col sm:col-span-2"},[e("BaseInput",{attrs:{type:"password",autocomplete:"new-password"},model:{value:s.passwordConfirm,callback:function(a){s.passwordConfirm=a},expression:"passwordConfirm"}})],1)]),e("div",{staticClass:"p-4"},[e("div",{staticClass:"md:inline-flex"},[e("BaseButton",{staticClass:"w-full md:w-auto",attrs:{"display-type":"info",disabled:!s.okayPassword}},[s._v(" Change Password ")])],1)])],1)},S=[];const d={};var k=p(r,$,S,!1,B,null,null,null);function B(s){for(let t in d)this[t]=d[t]}const R=function(){return k.exports}(),n={};n.setup=(s,t)=>({username:h("username")});n.components=Object.assign({AdminSetPasswordForm:R},n.components);var U=function(){var s=this,t=s.$createElement,e=s._self._c||t;return e("BaseSimpleCard",{staticClass:"divide-y"},[e("h2",{staticClass:"p-4 font-display text-lg font-semibold"},[s._v("Admin Reset Password")]),e("AdminSetPasswordForm",{attrs:{username:s.username}})],1)},A=[];const m={};var F=p(n,U,A,!1,j,null,null,null);function j(s){for(let t in m)this[t]=m[t]}const M=function(){return F.exports}();export{M as default};