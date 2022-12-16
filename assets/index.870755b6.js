import{F as S}from"./FormButton.ebf62bc8.js";import{bt as b,c8 as B,c6 as l,a_ as y,az as h,c as d,bT as g,bY as C,aK as F,aF as x,n as k}from"./index.89daa9e1.js";import{B as w}from"./BundleSetInput.d04060fe.js";import"./arrow-down-on-square.bf61cdc5.js";import"./trash.78f57a7a.js";import"./DynamicForm.e48fdeba.js";import"./ToolTip.dfc717fb.js";import"./ObjectDisplay.4a43a5a6.js";const u={};u.setup=(e,o)=>{const t=B("id"),a=l.read(t),n=y();h(()=>a.data.value,s=>{s&&(n.value=s)},{immediate:!0});const r=d(()=>[g.list(),C.list()]),i=d(()=>{const s=n.value;return Boolean(s&&s.name&&s.description&&s.industries.length>0&&s.bundleSource&&s.bundleTiers.length>0)}),m=F(),f=l.update(t),c=x();async function _(){if(n.value){const s={bundleSet:{...n.value}},{response:v}=await f.mutateAsync(s);v?(c.success("Successfully updated bundle set."),m.push("/admin/bundles/sets")):c.error("Something went wrong.")}}return{bundleSet:n,queries:r,isValidForm:i,updateSet:_}};u.components=Object.assign({BackButton:b,BundleSetInput:w,FormButton:S},u.components);var R=function(){var e=this,o=e.$createElement,t=e._self._c||o;return t("section",{staticClass:"space-y-6"},[t("BackButton"),t("BaseSimpleCard",{staticClass:"divide-y"},[t("BaseTypography",{staticClass:"p-4",attrs:{component:"h2",variant:"subtitle3"}},[e._v(" Update Bundle Set ")]),t("form",{staticClass:"divide-y",on:{submit:function(a){return a.preventDefault(),e.updateSet.apply(null,arguments)}}},[t("BaseVueQueries",{attrs:{queries:e.queries},scopedSlots:e._u([{key:"success",fn:function(a){var n=a[0],r=a[1];return[t("BundleSetInput",{attrs:{categories:n,industries:r},model:{value:e.bundleSet,callback:function(i){e.bundleSet=i},expression:"bundleSet"}})]}}])}),t("FormButton",{attrs:{action:"update","is-valid-form":e.isValidForm}})],1)],1)],1)},q=[];const p={};var I=k(u,R,q,!1,T,null,null,null);function T(e){for(let o in p)this[o]=p[o]}const E=function(){return I.exports}();export{E as default};