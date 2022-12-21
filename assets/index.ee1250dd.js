import{U}from"./UserProfileEdit.f3eb97b4.js";import{aT as y,aD as A,ag as x,bu as o,bv as c,c8 as M,r as S,aK as h,aF as Q,n as j}from"./index.d6fb131d.js";import{a as w}from"./attributeListToMap.bea9f70d.js";import"./FormButton.1f2de0d8.js";import"./arrow-down-on-square.bf61cdc5.js";import"./trash.78f57a7a.js";import"./CognitoAdminUserAttributesEdit.ab7f2f04.js";import"./InternationalPhoneNumberInput.72065ebe.js";import"./AddressClaimInput.9c2674c4.js";import"./DynamicForm.451ca03f.js";import"./cloneDeep.ab846328.js";import"./_Uint8Array.de9d3499.js";import"./keys.1439d6eb.js";import"./_baseAssignValue.f07110d4.js";import"./_copyArray.56331c81.js";const m={update(t){const e=y();return A(async s=>await c.adminUpdateUserAttributes({...s,Username:t.value}),{onSuccess(){e.invalidateQueries([o,"users",t,"attributes"],{exact:!0})}})},list(t){return x([o,"users",t,"attributes"],async()=>{const{UserAttributes:e}=await c.adminGetUser({Username:t.value});return e})}},n={};n.setup=(t,e)=>{const s=M("username"),r=S();function u(a){return r.value||w(a||[])}const l=h(),d=m.list(s),_=m.update(s),f=Q();async function v(a){r.value=a,await _.mutateAsync({UserAttributes:Object.entries(a).filter(([i])=>i!=="sub").map(([i,b])=>({Name:i,Value:b}))}),f.success("Attributes were saved"),l.push(`/admin/users/${s.value}`)}return{toMap:u,userAttributes:d,save:v}};n.components=Object.assign({UserProfileEdit:U},n.components);var C=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("BaseVueQuery",{attrs:{query:t.userAttributes},scopedSlots:t._u([{key:"success",fn:function(r){var u=r.data;return[s("UserProfileEdit",{attrs:{attributes:t.toMap(u),"is-admin":!0},on:{save:t.save}})]}}])})},E=[];const p={};var P=j(n,C,E,!1,R,null,null,null);function R(t){for(let e in p)this[e]=p[e]}const I=function(){return P.exports}();export{I as default};