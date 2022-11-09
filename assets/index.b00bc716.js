import{F as v}from"./FormButton.c0304b88.js";import{bs as S,b$ as B,b_ as d,aZ as y,aA as h,c as p,bY as C,bZ as F,bU as g,aI as x,aF as k,n as w}from"./index.06ea6359.js";import{B as I}from"./BundleSetInput.68f45c00.js";import"./arrow-down-on-square.bf61cdc5.js";import"./trash.78f57a7a.js";import"./DynamicForm.5db6884a.js";const u={};u.setup=(t,o)=>{const e=B("id"),n=d.read(e),a=y();h(()=>n.data.value,s=>{s&&(a.value=s)},{immediate:!0});const i=p(()=>[C.list(),F.list(),g.list()]),r=p(()=>{const s=a.value;return Boolean(s&&s.name&&s.description&&s.industries.length>0)}),l=x(),f=d.update(e),c=k();async function _(){if(a.value){const s={bundleSet:{...a.value}},{response:b}=await f.mutateAsync(s);b&&(c.success("Successfully updated bundle set."),l.push("/admin/bundles/sets")),c.error("Something went wrong.")}}return{bundleSet:a,queries:i,isValidForm:r,updateSet:_}};u.components=Object.assign({BackButton:S,BundleSetInput:I,FormButton:v},u.components);var R=function(){var t=this,o=t.$createElement,e=t._self._c||o;return e("section",{staticClass:"space-y-6"},[e("BackButton",{attrs:{link:"/admin/bundles/sets"}}),e("BaseSimpleCard",{staticClass:"divide-y"},[e("BaseTypography",{staticClass:"p-4",attrs:{component:"h2",variant:"subtitle3"}},[t._v(" Update Bundle Set ")]),e("form",{staticClass:"divide-y",on:{submit:function(n){return n.preventDefault(),t.updateSet.apply(null,arguments)}}},[e("BaseVueQueries",{attrs:{queries:t.queries},scopedSlots:t._u([{key:"success",fn:function(n){var a=n[0],i=n[1],r=n[2];return[e("BundleSetInput",{attrs:{templates:a,companies:i,industries:r},model:{value:t.bundleSet,callback:function(l){t.bundleSet=l},expression:"bundleSet"}})]}}])}),e("FormButton",{attrs:{action:"update","is-valid-form":t.isValidForm}})],1)],1)],1)},q=[];const m={};var U=w(u,R,q,!1,j,null,null,null);function j(t){for(let o in m)this[o]=m[o]}const z=function(){return U.exports}();export{z as default};