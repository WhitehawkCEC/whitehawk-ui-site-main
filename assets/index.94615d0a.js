import{U as d}from"./UserProfileEdit.67f7792b.js";import{u as i}from"./useCurrentUserAttributes.5f878368.js";import{b_ as v,aJ as b,aG as y,n as x}from"./index.e7f697eb.js";import{a as U}from"./attributeListToMap.bea9f70d.js";import"./FormButton.e6654761.js";import"./arrow-down-on-square.bf61cdc5.js";import"./trash.78f57a7a.js";import"./CognitoAdminUserAttributesEdit.2694afab.js";import"./InternationalPhoneNumberInput.eeb3dc78.js";import"./AddressClaimInput.98afe338.js";import"./DynamicForm.f06158c9.js";import"./cloneDeep.da3a0cb4.js";import"./_Uint8Array.a229e6e8.js";import"./keys.fa583e17.js";import"./_baseAssignValue.f58d54aa.js";import"./_copyArray.56331c81.js";const r={};r.setup=(t,e)=>{const s=v("username"),o=b(),n=i.list(),c=i.update(),m=y();async function p(f){const a={};for(const[l,_]of Object.entries(f))a[l]=_||"";await c.mutateAsync(a),m.success("Attributes were saved"),o.push(`/profile/${s.value}`)}return{attributeListToMap:U,attributes:n,save:p}};r.components=Object.assign({UserProfileEdit:d},r.components);var h=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("ClientOnly",[s("BaseVueQuery",{attrs:{query:t.attributes},scopedSlots:t._u([{key:"success",fn:function(o){var n=o.data;return[s("UserProfileEdit",{attrs:{attributes:t.attributeListToMap(n),"is-admin":!1},on:{save:t.save}})]}}])})],1)},j=[];const u={};var A=x(r,h,j,!1,C,null,null,null);function C(t){for(let e in u)this[e]=u[e]}const G=function(){return A.exports}();export{G as default};