import{U}from"./UserProfileEdit.aba38a9b.js";import{aT as y,aD as A,ag as x,bu as o,bv as c,c5 as M,r as S,aK as h,aF as Q,n as j}from"./index.575adb5e.js";import{a as w}from"./attributeListToMap.bea9f70d.js";import"./FormButton.e500c984.js";import"./arrow-down-on-square.bf61cdc5.js";import"./trash.78f57a7a.js";import"./CognitoAdminUserAttributesEdit.c1cddc85.js";import"./InternationalPhoneNumberInput.f6cba71c.js";import"./AddressClaimInput.624fa7bc.js";import"./DynamicForm.31c94f4e.js";import"./cloneDeep.cd117488.js";import"./_Uint8Array.329a0619.js";import"./keys.ea8b65b3.js";import"./_baseAssignValue.b04fb871.js";import"./_copyArray.56331c81.js";const m={update(t){const e=y();return A(async s=>await c.adminUpdateUserAttributes({...s,Username:t.value}),{onSuccess(){e.invalidateQueries([o,"users",t,"attributes"],{exact:!0})}})},list(t){return x([o,"users",t,"attributes"],async()=>{const{UserAttributes:e}=await c.adminGetUser({Username:t.value});return e})}},n={};n.setup=(t,e)=>{const s=M("username"),r=S();function u(a){return r.value||w(a||[])}const l=h(),d=m.list(s),_=m.update(s),f=Q();async function v(a){r.value=a,await _.mutateAsync({UserAttributes:Object.entries(a).filter(([i])=>i!=="sub").map(([i,b])=>({Name:i,Value:b}))}),f.success("Attributes were saved"),l.push(`/admin/users/${s.value}`)}return{toMap:u,userAttributes:d,save:v}};n.components=Object.assign({UserProfileEdit:U},n.components);var C=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("BaseVueQuery",{attrs:{query:t.userAttributes},scopedSlots:t._u([{key:"success",fn:function(r){var u=r.data;return[s("UserProfileEdit",{attrs:{attributes:t.toMap(u),"is-admin":!0},on:{save:t.save}})]}}])})},E=[];const p={};var P=j(n,C,E,!1,R,null,null,null);function R(t){for(let e in p)this[e]=p[e]}const I=function(){return P.exports}();export{I as default};