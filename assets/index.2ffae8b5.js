import{F as d}from"./FormButton.0845fed0.js";import{C as f,u as y}from"./CompanyInput.04079f1e.js";import{c as _}from"./cloneDeep.40777269.js";import{b$ as v,r as C,bG as u,aA as x,aF as b,n as h}from"./index.1e14903e.js";import"./arrow-down-on-square.bf61cdc5.js";import"./trash.78f57a7a.js";import"./DynamicForm.2752171b.js";import"./AddressClaimInput.a8c7d4d0.js";import"./index.a69bb9b0.js";import"./FormValidation.fcce8505.js";import"./_Uint8Array.33a28bee.js";import"./keys.d46cc2fa.js";import"./_baseAssignValue.2bd10278.js";import"./_copyArray.56331c81.js";const s={};s.setup=(t,n)=>{const e=v("id"),a=C(),o=u.read(e),r=y.list();x(()=>o.data.value,i=>{i&&(a.value=_(i))},{immediate:!0});const p=b(),m=u.update(e);async function l(){a.value&&(await m.mutateAsync(a.value),p.success("Saved"))}return{company:a,industriesQuery:r,updateCompany:l}};s.components=Object.assign({CompanyInput:f,FormButton:d},s.components);var B=function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("BaseSimpleCard",{staticClass:"divide-y"},[e("BaseTypography",{staticClass:"p-4",attrs:{component:"h3",variant:"subtitle3"}},[t._v(" Attributes ")]),e("form",{staticClass:"flex flex-col divide-y",on:{submit:function(a){return a.preventDefault(),t.updateCompany.apply(null,arguments)}}},[e("BaseVueQuery",{attrs:{query:t.industriesQuery},scopedSlots:t._u([{key:"success",fn:function(a){var o=a.data;return[e("CompanyInput",{attrs:{industries:o,"is-readonly":!0},model:{value:t.company,callback:function(r){t.company=r},expression:"company"}})]}}])}),e("FormButton",{attrs:{action:"update"}})],1)],1)},F=[];const c={};var S=h(s,B,F,!1,Q,null,null,null);function Q(t){for(let n in c)this[n]=c[n]}const N=function(){return S.exports}();export{N as default};