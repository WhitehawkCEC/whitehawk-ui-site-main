import{F as _}from"./FormButton.192c0a5d.js";import{B as S}from"./BackButton.50018161.js";import{B}from"./BundleSetInput.b651f745.js";import{bG as y,bF as d,v as h,w as C,c as p,bC as g,bD as F,bE as x,I as k,G as w,n as I}from"./index.d7842beb.js";import"./arrow-down-on-square.6f2806b6.js";import"./trash.687d612e.js";import"./chevron-left.0808b01b.js";import"./DynamicForm.461a2b0a.js";import"./ToolTip.d2b8febb.js";import"./exclamation-triangle.54812a62.js";import"./ObjectDisplay.8a6a6aaa.js";const u={};u.setup=(t,o)=>{const e=y("id"),n=d.read(e),a=h();C(()=>n.data.value,s=>{s&&(a.value=s)},{immediate:!0});const i=p(()=>[g.list(),F.list(),x.list()]),r=p(()=>{const s=a.value;return Boolean(s&&s.name&&s.description&&s.industries.length>0&&s.bundleTemplates.length===3)}),l=k(),f=d.update(e),c=w();async function v(){if(a.value){const s={bundleSet:{...a.value}},{response:b}=await f.mutateAsync(s);b&&(c.success("Successfully updated bundle set."),l.push("/admin/bundles/sets")),c.error("Something went wrong.")}}return{bundleSet:a,queries:i,isValidForm:r,updateSet:v}};u.components=Object.assign({BackButton:S,BundleSetInput:B,FormButton:_},u.components);var R=function(){var t=this,o=t.$createElement,e=t._self._c||o;return e("section",{staticClass:"space-y-6"},[e("BackButton",{attrs:{link:"/admin/bundles/sets"}}),e("BaseSimpleCard",{staticClass:"divide-y"},[e("BaseTypography",{staticClass:"p-4",attrs:{component:"h2",variant:"subtitle3"}},[t._v(" Update Bundle Set ")]),e("form",{staticClass:"divide-y",on:{submit:function(n){return n.preventDefault(),t.updateSet.apply(null,arguments)}}},[e("BaseVueQueries",{attrs:{queries:t.queries},scopedSlots:t._u([{key:"success",fn:function(n){var a=n[0],i=n[1],r=n[2];return[e("BundleSetInput",{attrs:{templates:a,companies:i,industries:r},model:{value:t.bundleSet,callback:function(l){t.bundleSet=l},expression:"bundleSet"}})]}}])}),e("FormButton",{attrs:{action:"update","is-valid-form":t.isValidForm}})],1)],1)],1)},q=[];const m={};var T=I(u,R,q,!1,j,null,null,null);function j(t){for(let o in m)this[o]=m[o]}const P=function(){return T.exports}();export{P as default};
