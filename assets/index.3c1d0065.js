import{F as u}from"./FileInput.c97f506a.js";import{bs as p,L as d,bV as _,aF as f,n as m}from"./index.0a711a28.js";import"./document-plus.04e3d5d0.js";const a={};a.setup=(e,n)=>{const t=_.create(),s=f();function i(r){r.arrayBuffer().then(async c=>{try{await t.mutateAsync({file:{content:new Uint8Array(c)}}),s.success("Questionnaire uploaded successfully")}catch(l){s.error("Failed to upload questionnaire",l)}})}return{fileUpload:t,uploadFile:i}};a.components=Object.assign({BackButton:p,FileInput:u,LoadingSpinner:d},a.components);var v=function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("section",{staticClass:"space-y-6"},[t("BackButton"),t("BaseSimpleCard",{staticClass:"divide-y"},[t("BaseTypography",{staticClass:"p-4",attrs:{component:"h2",variant:"subtitle3"}},[e._v(" Upload Questionnaire ")]),t("FileInput",{attrs:{"btn-text":"Upload",accept:".xlsx, .xls"},on:{"update-file":e.uploadFile}}),e.fileUpload.isLoading.value?t("div",{staticClass:"flex space-x-1"},[t("LoadingSpinner"),e._v(" \xA0 Uploading... ")],1):e._e()],1)],1)},x=[];const o={};var y=m(a,v,x,!1,F,null,null,null);function F(e){for(let n in o)this[n]=o[n]}const g=function(){return y.exports}();export{g as default};
