import{F as u}from"./FileInput.a195c2aa.js";import{L as p,bT as d,aG as f,n as _}from"./index.e7f697eb.js";import{B as m}from"./BackButton.8f96cce7.js";import"./document-plus.04e3d5d0.js";import"./chevron-left.0808b01b.js";const a={};a.setup=(e,n)=>{const t=d.upload(),s=f();function o(r){r.arrayBuffer().then(async l=>{try{await t.mutateAsync({file:{content:new Uint8Array(l)}}),s.success("Questionnaire uploaded successfully")}catch(c){s.error("Failed to upload questionnaire",c)}})}return{fileUpload:t,uploadFile:o}};a.components=Object.assign({BackButton:m,FileInput:u,LoadingSpinner:p},a.components);var v=function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("section",{staticClass:"space-y-6"},[t("BackButton",{attrs:{link:"/admin/custom-questionnaires"}}),t("BaseSimpleCard",{staticClass:"divide-y"},[t("BaseTypography",{staticClass:"p-4",attrs:{component:"h2",variant:"subtitle3"}},[e._v(" Create Questionnaire ")]),t("FileInput",{attrs:{"existing-file":"Upload a questionnaire","btn-text":"Upload",accept:".xlsx, .xls"},on:{"update-file":e.uploadFile}}),e.fileUpload.isLoading.value?t("div",{staticClass:"flex flex-row"},[t("LoadingSpinner"),e._v(" \xA0 Uploading... ")],1):e._e()],1)],1)},x=[];const i={};var y=_(a,v,x,!1,B,null,null,null);function B(e){for(let n in i)this[n]=i[n]}const S=function(){return y.exports}();export{S as default};