import{F as _}from"./FormButton.e500c984.js";import{bt as b,r as y,c1 as B,c as r,c2 as C,c3 as h,bX as g,bm as F,aK as x,c4 as k,aF as q,n as w}from"./index.575adb5e.js";import{B as I}from"./BundleSetInput.fae3cf86.js";import"./arrow-down-on-square.bf61cdc5.js";import"./trash.78f57a7a.js";import"./DynamicForm.31c94f4e.js";const u={};u.setup=(t,a)=>{const e=y(B.BundleSet.create()),s=r(()=>[C.list(),h.list(),g.list()]),i=F(),o=r(()=>i.mainCompany),c=r(()=>{if(o.value)return{id:{value:o.value.id},name:o.value.name,industry:void 0}}),l=r(()=>{const n=e.value;return Boolean(n&&n.name&&n.description&&n.industries.length>0)}),p=x(),v=k.create(),m=q();async function f(){if(e.value){const n={bundleSet:{...e.value,createdByCompany:c.value}},{response:S}=await v.mutateAsync(n);S.bundleSet&&(m.success("Successfully created bundle set."),p.push("/admin/bundles/sets")),m.error("Something went wrong.")}}return{bundleSet:e,queries:s,isValidForm:l,createSet:f}};u.components=Object.assign({BackButton:b,BundleSetInput:I,FormButton:_},u.components);var V=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("section",{staticClass:"space-y-4"},[e("BackButton",{attrs:{link:"/admin/bundles/sets"}}),e("BaseSimpleCard",{staticClass:"divide-y"},[e("BaseTypography",{staticClass:"p-4",attrs:{component:"h2",variant:"subtitle3"}},[t._v(" Create Bundle Set ")]),e("form",{staticClass:"divide-y",on:{submit:function(s){return s.preventDefault(),t.createSet.apply(null,arguments)}}},[e("BaseVueQueries",{attrs:{queries:t.queries},scopedSlots:t._u([{key:"success",fn:function(s){var i=s[0],o=s[1],c=s[2];return[e("BundleSetInput",{attrs:{templates:i,companies:o,industries:c},model:{value:t.bundleSet,callback:function(l){t.bundleSet=l},expression:"bundleSet"}})]}}])}),e("FormButton",{attrs:{action:"create","is-valid-form":t.isValidForm}})],1)],1)],1)},j=[];const d={};var A=w(u,V,j,!1,R,null,null,null);function R(t){for(let a in d)this[a]=d[a]}const N=function(){return A.exports}();export{N as default};