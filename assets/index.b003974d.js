import{T as g}from"./trash.78f57a7a.js";import{bs as B,am as h,c7 as r,r as x,c as i,aE as S,aJ as b,n as P}from"./index.f9aabd94.js";import{P as I}from"./PageContentInput.4234eed5.js";import{u as k}from"./useFilesDirectory.eab99241.js";import"./document-plus.04e3d5d0.js";const o={};o.setup=(e,n)=>{const t=r("id"),s=x(),u=i(()=>Boolean(s.value)),p=r("folder"),d=k.update(p),f=S();async function m(){const a=new FormData;s.value&&a.append("file",s.value),await d.mutateAsync(a),f.success("Successfully updated document."),_.push("/admin/file-upload")}function v(a){const c=a.currentTarget;c.files&&c.files[0]&&(s.value=c.files[0])}const _=b(),C=i({get(){if(t.value)return`${t.value}`},set(a){if(a)return`${a}`}});function y(){s.value=void 0}return{contentInput:s,isValidForm:u,updateContent:m,selectContent:v,selectedDatasheet:C,clear:y}};o.components=Object.assign({BackButton:B,PageContentInput:I,PlusSvg:h,TrashSvg:g},o.components);var D=function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("section",{staticClass:"space-y-8"},[t("BackButton",{attrs:{link:"/admin/file-upload"}}),t("form",[t("BaseSimpleCard",[t("BaseTypography",{staticClass:"p-4",attrs:{component:"h2",variant:"subtitle3"}},[e._v(" Page Content ")]),t("form",{staticClass:"divide-y",attrs:{enctype:"multipart/form-data"},on:{submit:function(s){return s.preventDefault(),e.updateContent.apply(null,arguments)}}},[t("PageContentInput",{staticClass:"mt-4 border-t",attrs:{"existing-file":e.selectedDatasheet},on:{"select-file":function(s){return e.selectContent(s)}},model:{value:e.contentInput,callback:function(s){e.contentInput=s},expression:"contentInput"}}),t("div",{staticClass:"space-y-4 p-4 md:space-y-0 md:space-x-2"},[t("BaseButton",{staticClass:"space-x-1",attrs:{disabled:!e.isValidForm}},[t("PlusSvg",{staticClass:"w-5"}),t("span",[e._v("Content")])],1),t("BaseButton",{staticClass:"space-x-1",attrs:{action:"secondary","display-type":"danger"},on:{click:e.clear}},[t("TrashSvg",{staticClass:"w-5"}),t("span",[e._v("Clear")])],1)],1)],1)],1)],1)],1)},F=[];const l={};var T=P(o,D,F,!1,w,null,null,null);function w(e){for(let n in l)this[n]=l[n]}const A=function(){return T.exports}();export{A as default};