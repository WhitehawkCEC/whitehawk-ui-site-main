import{T as p}from"./trash.78f57a7a.js";import{bs as f,ao as d,r as v,aI as _,aF as C,c as y,n as x}from"./index.88f35843.js";import{M as B}from"./ManufacturerInput.167ec637.js";import{u as g}from"./useManufacturers.34910ad3.js";import"./DynamicForm.a0931955.js";import"./cloneDeep.d4d3ec29.js";import"./_Uint8Array.5b73b4d8.js";import"./keys.1d1071d6.js";import"./_baseAssignValue.40fb0cde.js";import"./_copyArray.56331c81.js";import"./FormValidation.fcce8505.js";const n={};n.setup=(a,s)=>{const t=v(),r=_(),c=C(),u=g.create();async function i(){if(t.value){const e=await u.mutateAsync(t.value);e&&e.id?(c.success("Successfully created manufacturer."),r.push(`/admin/manufacturers/${e.id}`)):c.error("Something went wrong.")}}const l=y(()=>{const e=t.value;return Boolean(e&&e.id&&e.name&&e.url&&e.description)});function m(){t.value={id:"",name:"",url:"",description:""}}return{manufacturer:t,createManufacturer:i,isValidForm:l,clear:m}};n.components=Object.assign({BackButton:f,ManufacturerInput:B,PlusSvg:d,TrashSvg:p},n.components);var h=function(){var a=this,s=a.$createElement,t=a._self._c||s;return t("section",{staticClass:"space-y-6"},[t("BackButton",{attrs:{link:"/admin/manufacturers"}}),t("BaseSimpleCard",{staticClass:"divide-y"},[t("BaseTypography",{staticClass:"p-4",attrs:{variant:"subtitle3",component:"h2"}},[a._v(" Create Manufacturer ")]),t("form",{staticClass:"divide-y",on:{submit:function(r){return r.preventDefault(),a.createManufacturer.apply(null,arguments)}}},[t("ManufacturerInput",{model:{value:a.manufacturer,callback:function(r){a.manufacturer=r},expression:"manufacturer"}}),t("div",{staticClass:"flex p-4"},[t("div",{staticClass:"pr-2 file:md:inline-flex"},[t("BaseButton",{staticClass:"w-full space-x-2 md:w-auto",attrs:{disabled:!a.isValidForm}},[t("PlusSvg",{staticClass:"h-auto w-4 xl:w-5"}),t("span",[a._v("Create")])],1)],1),t("BaseButton",{staticClass:"space-x-1",attrs:{action:"secondary","display-type":"danger"},on:{click:a.clear}},[t("TrashSvg",{staticClass:"w-5"}),t("span",[a._v("Clear")])],1)],1)],1)],1)],1)},S=[];const o={};var w=x(n,h,S,!1,M,null,null,null);function M(a){for(let s in o)this[s]=o[s]}const A=function(){return w.exports}();export{A as default};
