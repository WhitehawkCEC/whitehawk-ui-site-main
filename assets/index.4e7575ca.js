import{T as y}from"./trash.78f57a7a.js";import{bs as _,ao as f,r as C,bU as x,aF as B,aI as I,bV as b,c as g,n as h}from"./index.774779f3.js";import{I as S}from"./IndustryInput.a4c1abfd.js";import"./DynamicForm.e2456b76.js";import"./SlugInput.f7cc56fd.js";import"./FormValidation.fcce8505.js";const r={};r.setup=(t,n)=>{const s=C(x.Industry.create()),a=B(),i=I(),u=b.create(),l=g(()=>{const e=s.value;return Boolean(e&&e.name&&e.id)});async function d(){var e;if(s.value){const m={industry:{...s==null?void 0:s.value}};try{await u.mutateAsync(m),a.success(`New industry ${(e=s.value)==null?void 0:e.name} added sucessfully`),i.push("/admin/companies/industries")}catch(o){const{message:v}=o;a.error(v,o)}}}function p(){s.value={name:"",id:{value:""}}}return{industry:s,isValidForm:l,createIndustry:d,clear:p}};r.components=Object.assign({BackButton:_,IndustryInput:S,PlusSvg:f,TrashSvg:y},r.components);var w=function(){var t=this,n=t.$createElement,s=t._self._c||n;return s("section",{staticClass:"space-y-6"},[s("BackButton"),s("BaseSimpleCard",{staticClass:"divide-y"},[s("BaseTypography",{staticClass:"p-4",attrs:{component:"h2",variant:"subtitle3"}},[t._v(" Create Industry ")]),s("form",{staticClass:"divide-y",on:{submit:function(a){return a.preventDefault(),t.createIndustry.apply(null,arguments)}}},[s("IndustryInput",{model:{value:t.industry,callback:function(a){t.industry=a},expression:"industry"}}),s("div",{staticClass:"flex space-x-4 p-4"},[s("BaseButton",{staticClass:"space-x-2",attrs:{disabled:!t.isValidForm}},[s("PlusSvg",{staticClass:"h-auto w-4 xl:w-5"}),s("span",[t._v("Create")])],1),s("BaseButton",{staticClass:"space-x-1",attrs:{action:"secondary","display-type":"danger"},on:{click:t.clear}},[s("TrashSvg",{staticClass:"w-5"}),s("span",[t._v("Clear")])],1)],1)],1)],1)],1)},k=[];const c={};var F=h(r,w,k,!1,T,null,null,null);function T(t){for(let n in c)this[n]=c[n]}const z=function(){return F.exports}();export{z as default};