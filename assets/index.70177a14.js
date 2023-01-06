import{U}from"./UserProfileEdit.c4c8f17d.js";import{aT as y,aD as A,ah as x,bt as o,bu as c,c8 as h,b as M,aK as S,aF as Q,n as j}from"./index.bf67f21b.js";import{a as w}from"./attributeListToMap.bea9f70d.js";import"./FormButton.7128ff96.js";import"./arrow-down-on-square.bf61cdc5.js";import"./trash.78f57a7a.js";import"./CognitoAdminUserAttributesEdit.2f77e158.js";import"./InternationalPhoneNumberInput.ded47362.js";import"./AddressClaimInput.b83aa780.js";import"./DynamicForm.1119b985.js";import"./cloneDeep.02a8d162.js";import"./_Uint8Array.0e4342d6.js";import"./keys.82ddb0ad.js";import"./_baseAssignValue.7af75bb3.js";import"./_copyArray.56331c81.js";const m={update(t){const e=y();return A(async s=>await c.adminUpdateUserAttributes({...s,Username:t.value}),{onSuccess(){e.invalidateQueries([o,"users",t,"attributes"],{exact:!0})}})},list(t){return x([o,"users",t,"attributes"],async()=>{const{UserAttributes:e}=await c.adminGetUser({Username:t.value});return e})}},n={};n.setup=(t,e)=>{const s=h("username"),r=M();function u(a){return r.value||w(a||[])}const l=S(),d=m.list(s),_=m.update(s),f=Q();async function v(a){r.value=a,await _.mutateAsync({UserAttributes:Object.entries(a).filter(([i])=>i!=="sub").map(([i,b])=>({Name:i,Value:b}))}),f.success("Attributes were saved"),l.push(`/admin/users/${s.value}`)}return{toMap:u,userAttributes:d,save:v}};n.components=Object.assign({UserProfileEdit:U},n.components);var C=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("BaseVueQuery",{attrs:{query:t.userAttributes},scopedSlots:t._u([{key:"success",fn:function(r){var u=r.data;return[s("UserProfileEdit",{attrs:{attributes:t.toMap(u),"is-admin":!0},on:{save:t.save}})]}}])})},E=[];const p={};var P=j(n,C,E,!1,R,null,null,null);function R(t){for(let e in p)this[e]=p[e]}const I=function(){return P.exports}();export{I as default};