import{U as d}from"./UserProfileEdit.efde93b0.js";import{u as i}from"./useCurrentUserAttributes.e3d90118.js";import{c7 as v,aK as b,aF as y,n as x}from"./index.b52a2fa9.js";import{a as U}from"./attributeListToMap.bea9f70d.js";import"./FormButton.560791f8.js";import"./arrow-down-on-square.bf61cdc5.js";import"./trash.78f57a7a.js";import"./CognitoAdminUserAttributesEdit.0622b98a.js";import"./InternationalPhoneNumberInput.3e323042.js";import"./AddressClaimInput.c5015187.js";import"./DynamicForm.3d052b71.js";import"./cloneDeep.1a2a958b.js";import"./_Uint8Array.d7980cfd.js";import"./keys.84fd4876.js";import"./_baseAssignValue.50d3510c.js";import"./_copyArray.56331c81.js";const r={};r.setup=(t,e)=>{const s=v("username"),o=b(),n=i.list(),c=i.update(),m=y();async function p(f){const a={};for(const[l,_]of Object.entries(f))a[l]=_||"";await c.mutateAsync(a),m.success("Attributes were saved"),o.push(`/profile/${s.value}`)}return{attributeListToMap:U,attributes:n,save:p}};r.components=Object.assign({UserProfileEdit:d},r.components);var h=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("ClientOnly",[s("BaseVueQuery",{attrs:{query:t.attributes},scopedSlots:t._u([{key:"success",fn:function(o){var n=o.data;return[s("UserProfileEdit",{attrs:{attributes:t.attributeListToMap(n),"is-admin":!1},on:{save:t.save}})]}}])})],1)},j=[];const u={};var A=x(r,h,j,!1,C,null,null,null);function C(t){for(let e in u)this[e]=u[e]}const K=function(){return A.exports}();export{K as default};