import{F as y}from"./FormButton.3618e075.js";import{bs as _,c1 as f,aZ as v,bQ as c,aA as g,aI as C,aF as h,n as B}from"./index.774779f3.js";import{P}from"./ProductCategoriesInput.51be40bd.js";import"./arrow-down-on-square.bf61cdc5.js";import"./trash.78f57a7a.js";import"./DynamicForm.e2456b76.js";import"./SlugInput.f7cc56fd.js";import"./FormValidation.fcce8505.js";const r={};r.setup=(e,o)=>{const t=f("id"),a=v(),i=c.read(t);g(()=>i.data.value,s=>{s&&(a.value=s)},{immediate:!0});const p=C(),n=h(),l=c.update(t);async function m(){if(a.value)try{await l.mutateAsync(a.value),n.success(`Category  ${a.value.name} updated`),p.push("/admin/products/categories")}catch(s){const{message:d}=s;n.error(d,s)}}return{category:a,updateCategory:m}};r.components=Object.assign({BackButton:_,ProductCategoriesInput:P,FormButton:y},r.components);var b=function(){var e=this,o=e.$createElement,t=e._self._c||o;return t("section",{staticClass:"space-y-6"},[t("BackButton"),t("BaseSimpleCard",{staticClass:"divide-y"},[t("BaseTypography",{staticClass:"p-4",attrs:{component:"h2",variant:"subtitle3"}},[e._v(" Update Product Category ")]),t("form",{staticClass:"divide-y",on:{submit:function(a){return a.preventDefault(),e.updateCategory.apply(null,arguments)}}},[t("ProductCategoriesInput",{attrs:{"is-readonly":!0},model:{value:e.category,callback:function(a){e.category=a},expression:"category"}}),t("FormButton",{attrs:{action:"update"}})],1)],1)],1)},x=[];const u={};var F=B(r,b,x,!1,R,null,null,null);function R(e){for(let o in u)this[o]=u[o]}const z=function(){return F.exports}();export{z as default};