import{U as d}from"./UserProfileEdit.40efc98a.js";import{u as i}from"./useCurrentUserAttributes.6ba37be4.js";import{bX as v,aI as b,aF as y,n as x}from"./index.7b120442.js";import{a as U}from"./attributeListToMap.bea9f70d.js";import"./FormButton.443a6555.js";import"./arrow-down-on-square.bf61cdc5.js";import"./trash.78f57a7a.js";import"./CognitoAdminUserAttributesEdit.46fa7407.js";import"./InternationalPhoneNumberInput.aff11899.js";import"./AddressClaimInput.700e0875.js";import"./DynamicForm.54ce95a5.js";import"./cloneDeep.0dfa2aba.js";import"./_Uint8Array.d085b95b.js";import"./keys.2f8ae524.js";import"./_baseAssignValue.c3f5b51f.js";import"./_copyArray.56331c81.js";const r={};r.setup=(t,e)=>{const s=v("username"),o=b(),n=i.list(),c=i.update(),m=y();async function p(f){const a={};for(const[l,_]of Object.entries(f))a[l]=_||"";await c.mutateAsync(a),m.success("Attributes were saved"),o.push(`/profile/${s.value}`)}return{attributeListToMap:U,attributes:n,save:p}};r.components=Object.assign({UserProfileEdit:d},r.components);var h=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("ClientOnly",[s("BaseVueQuery",{attrs:{query:t.attributes},scopedSlots:t._u([{key:"success",fn:function(o){var n=o.data;return[s("UserProfileEdit",{attrs:{attributes:t.attributeListToMap(n),"is-admin":!1},on:{save:t.save}})]}}])})],1)},j=[];const u={};var A=x(r,h,j,!1,C,null,null,null);function C(t){for(let e in u)this[e]=u[e]}const I=function(){return A.exports}();export{I as default};
