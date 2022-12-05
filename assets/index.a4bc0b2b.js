import{U}from"./UserProfileEdit.f6c56e0b.js";import{aT as y,aD as A,ag as x,bu as o,bv as c,c5 as M,r as S,aK as h,aF as Q,n as j}from"./index.76f70903.js";import{a as w}from"./attributeListToMap.bea9f70d.js";import"./FormButton.683947c2.js";import"./arrow-down-on-square.bf61cdc5.js";import"./trash.78f57a7a.js";import"./CognitoAdminUserAttributesEdit.88c7945a.js";import"./InternationalPhoneNumberInput.3fcbe757.js";import"./AddressClaimInput.72585b5b.js";import"./DynamicForm.1897c2ae.js";import"./cloneDeep.79fe850a.js";import"./_Uint8Array.fdf35f8f.js";import"./keys.17c8d06e.js";import"./_baseAssignValue.6704b7ce.js";import"./_copyArray.56331c81.js";const m={update(t){const e=y();return A(async s=>await c.adminUpdateUserAttributes({...s,Username:t.value}),{onSuccess(){e.invalidateQueries([o,"users",t,"attributes"],{exact:!0})}})},list(t){return x([o,"users",t,"attributes"],async()=>{const{UserAttributes:e}=await c.adminGetUser({Username:t.value});return e})}},n={};n.setup=(t,e)=>{const s=M("username"),r=S();function u(a){return r.value||w(a||[])}const l=h(),d=m.list(s),_=m.update(s),f=Q();async function v(a){r.value=a,await _.mutateAsync({UserAttributes:Object.entries(a).filter(([i])=>i!=="sub").map(([i,b])=>({Name:i,Value:b}))}),f.success("Attributes were saved"),l.push(`/admin/users/${s.value}`)}return{toMap:u,userAttributes:d,save:v}};n.components=Object.assign({UserProfileEdit:U},n.components);var C=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("BaseVueQuery",{attrs:{query:t.userAttributes},scopedSlots:t._u([{key:"success",fn:function(r){var u=r.data;return[s("UserProfileEdit",{attrs:{attributes:t.toMap(u),"is-admin":!0},on:{save:t.save}})]}}])})},E=[];const p={};var P=j(n,C,E,!1,R,null,null,null);function R(t){for(let e in p)this[e]=p[e]}const I=function(){return P.exports}();export{I as default};