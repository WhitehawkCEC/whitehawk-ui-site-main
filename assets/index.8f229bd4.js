import{F as _}from"./FormButton.7128ff96.js";import{bs as v,b,aK as C,n as U}from"./index.bf67f21b.js";import{C as y}from"./CognitoAdminUserAttributesEdit.2f77e158.js";import{u as A}from"./useUsers.1c09ae71.js";import"./arrow-down-on-square.bf61cdc5.js";import"./trash.78f57a7a.js";import"./InternationalPhoneNumberInput.ded47362.js";import"./AddressClaimInput.b83aa780.js";import"./DynamicForm.1119b985.js";const n={};n.setup=(e,s)=>{const t=b({}),r=A.create(),m=C();async function l(){var i,c;const o={...t.value,email:(i=t.value.email)==null?void 0:i.toLocaleLowerCase("us"),email_verified:"true"},p=Object.entries(o).map(([d,f])=>({Name:d,Value:f})),a=(c=(await r.mutateAsync({Username:o.email,UserAttributes:p,DesiredDeliveryMediums:["EMAIL"]})).User)==null?void 0:c.Username;a&&m.push(`/profile/${encodeURIComponent(a)}`)}return{attributes:t,createUser:l}};n.components=Object.assign({BackButton:v,CognitoAdminUserAttributesEdit:y,FormButton:_},n.components);var x=function(){var e=this,s=e.$createElement,t=e._self._c||s;return t("section",{staticClass:"space-y-4"},[t("BackButton",{attrs:{link:"/admin/users"}}),t("BaseSimpleCard",{staticClass:"divide-y"},[t("h2",{staticClass:"p-4 font-display text-lg font-semibold"},[e._v("Create User")]),t("form",{staticClass:"divide-y",on:{submit:function(r){return r.preventDefault(),e.createUser.apply(null,arguments)}}},[t("CognitoAdminUserAttributesEdit",{model:{value:e.attributes,callback:function(r){e.attributes=r},expression:"attributes"}}),t("FormButton",{attrs:{action:"create"}})],1)])],1)},B=[];const u={};var g=U(n,x,B,!1,h,null,null,null);function h(e){for(let s in u)this[s]=u[s]}const I=function(){return g.exports}();export{I as default};