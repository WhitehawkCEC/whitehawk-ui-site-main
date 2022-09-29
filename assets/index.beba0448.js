import{F as _}from"./FormButton.facea14e.js";import{B as y}from"./BackButton.8f9dff6b.js";import{B as v}from"./BundleTemplateInput.3a5b3383.js";import{b_ as b,bW as i,aZ as B,aB as T,bQ as g,d as h,aJ as C,aG as x,n as Q}from"./index.dc4d52c0.js";import"./arrow-down-on-square.bf61cdc5.js";import"./trash.78f57a7a.js";import"./chevron-left.0808b01b.js";import"./DynamicForm.a5daca9b.js";const r={};r.setup=(e,o)=>{const t=b("id"),n=i.read(t),s=B();T(()=>n.data.value,a=>{a&&(s.value=a)},{immediate:!0});const u=g.list(),p=h(()=>{const a=s.value;return Boolean(a&&a.name&&a.description&&a.bundleType&&a.productCategories.length>0)}),m=C(),d=i.update(t),l=x();async function f(){if(s.value){const{response:a}=await d.mutateAsync(s.value);a&&(l.success("Successfully updated bundle template."),m.push("/admin/bundles/templates")),l.error("Something went wrong.")}}return{bundleTemplateQuery:n,bundleTemplate:s,categoriesQuery:u,isValidForm:p,updateTemplate:f}};r.components=Object.assign({BackButton:y,BundleTemplateInput:v,FormButton:_},r.components);var S=function(){var e=this,o=e.$createElement,t=e._self._c||o;return t("section",{staticClass:"space-y-4"},[t("BackButton",{attrs:{link:"/admin/bundles/templates"}}),t("BaseSimpleCard",{staticClass:"divide-y"},[t("BaseTypography",{staticClass:"p-4",attrs:{component:"h2",variant:"subtitle3"}},[e._v(" Update Bundle Template ")]),t("form",{staticClass:"divide-y",on:{submit:function(n){return n.preventDefault(),e.updateTemplate.apply(null,arguments)}}},[t("BaseVueQuery",{attrs:{query:e.bundleTemplateQuery},scopedSlots:e._u([{key:"success",fn:function(){return[t("BaseVueQuery",{attrs:{query:e.categoriesQuery},scopedSlots:e._u([{key:"success",fn:function(n){var s=n.data;return[t("BundleTemplateInput",{attrs:{categories:s},model:{value:e.bundleTemplate,callback:function(u){e.bundleTemplate=u},expression:"bundleTemplate"}})]}}])})]},proxy:!0}])}),t("FormButton",{attrs:{action:"update","is-valid-form":e.isValidForm}})],1)],1)],1)},k=[];const c={};var F=Q(r,S,k,!1,w,null,null,null);function w(e){for(let o in c)this[o]=c[o]}const A=function(){return F.exports}();export{A as default};