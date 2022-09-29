import{U}from"./UserProfileEdit.f5960745.js";import{aT as y,aE as A,ai as x,bs as o,bt as c,b_ as M,r as S,aJ as h,aG as E,n as Q}from"./index.181068a8.js";import{a as j}from"./attributeListToMap.bea9f70d.js";import"./FormButton.b64ecf32.js";import"./arrow-down-on-square.bf61cdc5.js";import"./trash.78f57a7a.js";import"./CognitoAdminUserAttributesEdit.df80efe9.js";import"./InternationalPhoneNumberInput.72b7de92.js";import"./AddressClaimInput.880aebe1.js";import"./DynamicForm.fc38fbfd.js";import"./cloneDeep.2b603e01.js";import"./_Uint8Array.9230702b.js";import"./keys.bb0e7749.js";import"./_baseAssignValue.6692fc7d.js";import"./_copyArray.56331c81.js";const m={update(t){const e=y();return A(async s=>await c.adminUpdateUserAttributes({...s,Username:t.value}),{onSuccess(){e.invalidateQueries([o,"users",t,"attributes"],{exact:!0})}})},list(t){return x([o,"users",t,"attributes"],async()=>{const{UserAttributes:e}=await c.adminGetUser({Username:t.value});return e})}},n={};n.setup=(t,e)=>{const s=M("username"),r=S();function u(a){return r.value||j(a||[])}const l=h(),_=m.list(s),d=m.update(s),f=E();async function v(a){r.value=a,await d.mutateAsync({UserAttributes:Object.entries(a).filter(([i])=>i!=="sub").map(([i,b])=>({Name:i,Value:b}))}),f.success("Attributes were saved"),l.push(`/admin/users/${s.value}`)}return{toMap:u,userAttributes:_,save:v}};n.components=Object.assign({UserProfileEdit:U},n.components);var w=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("BaseVueQuery",{attrs:{query:t.userAttributes},scopedSlots:t._u([{key:"success",fn:function(r){var u=r.data;return[s("UserProfileEdit",{attrs:{attributes:t.toMap(u),"is-admin":!0},on:{save:t.save}})]}}])})},C=[];const p={};var P=Q(n,w,C,!1,R,null,null,null);function R(t){for(let e in p)this[e]=p[e]}const I=function(){return P.exports}();export{I as default};