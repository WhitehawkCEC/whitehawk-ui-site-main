import{F as f}from"./FormButton.4bf5521c.js";import{B as y}from"./BackButton.fa329f31.js";import{P as _}from"./ProductCategoriesInput.4274685f.js";import{bZ as v,aZ as g,bP as c,aB as C,aJ as B,aG as h,n as P}from"./index.9e932179.js";import"./arrow-down-on-square.bf61cdc5.js";import"./trash.78f57a7a.js";import"./chevron-left.0808b01b.js";import"./DynamicForm.d64a511b.js";import"./SlugInput.18695d6b.js";import"./FormValidation.907ef868.js";const s={};s.setup=(e,o)=>{const t=v("id"),a=g(),u=c.read(t);C(()=>u.data.value,r=>{r&&(a.value=r)},{immediate:!0});const p=B(),n=h(),m=c.update(t);async function l(){if(a.value)try{await m.mutateAsync(a.value),n.success(`Category  ${a.value.name} updated`),p.push("/admin/products/categories")}catch(r){const{message:d}=r;n.error(d,r)}}return{category:a,updateCategory:l}};s.components=Object.assign({BackButton:y,ProductCategoriesInput:_,FormButton:f},s.components);var b=function(){var e=this,o=e.$createElement,t=e._self._c||o;return t("section",{staticClass:"space-y-6"},[t("BackButton"),t("BaseSimpleCard",{staticClass:"divide-y"},[t("BaseTypography",{staticClass:"p-4",attrs:{component:"h2",variant:"subtitle3"}},[e._v(" Update Product Category ")]),t("form",{staticClass:"divide-y",on:{submit:function(a){return a.preventDefault(),e.updateCategory.apply(null,arguments)}}},[t("ProductCategoriesInput",{attrs:{"is-readonly":!0},model:{value:e.category,callback:function(a){e.category=a},expression:"category"}}),t("FormButton",{attrs:{action:"update"}})],1)],1)],1)},x=[];const i={};var F=P(s,b,x,!1,R,null,null,null);function R(e){for(let o in i)this[o]=i[o]}const E=function(){return F.exports}();export{E as default};