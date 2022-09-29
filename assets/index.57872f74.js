import{aq as l,r as m,aJ as f,aG as p,n as _}from"./index.dc4d52c0.js";import{B as v}from"./BackButton.8f9dff6b.js";import{M as d}from"./ManufacturerInput.237cc06a.js";import{u as C}from"./useManufacturers.10ce211c.js";import"./chevron-left.0808b01b.js";import"./DynamicForm.a5daca9b.js";import"./cloneDeep.9ecb7168.js";import"./_Uint8Array.f368eb87.js";import"./keys.f1078032.js";import"./_baseAssignValue.1aba1bc1.js";import"./_copyArray.56331c81.js";import"./FormValidation.907ef868.js";const s={};s.setup=(a,e)=>{const t=m(),r=f(),u=p(),o=C.create();async function i(){if(t.value){const n=await o.mutateAsync(t.value);n&&n.id?(u.success("Successfully created manufacturer."),r.push(`/admin/manufacturers/${n.id}`)):u.error("Something went wrong.")}}return{manufacturer:t,createManufacturer:i}};s.components=Object.assign({BackButton:v,ManufacturerInput:d,PlusSvg:l},s.components);var y=function(){var a=this,e=a.$createElement,t=a._self._c||e;return t("section",{staticClass:"space-y-6"},[t("BackButton",{attrs:{link:"/admin/manufacturers"}}),t("BaseSimpleCard",{staticClass:"divide-y"},[t("BaseTypography",{staticClass:"p-4",attrs:{variant:"subtitle3",component:"h2"}},[a._v(" Create Manufacturer ")]),t("form",{staticClass:"divide-y",on:{submit:function(r){return r.preventDefault(),a.createManufacturer.apply(null,arguments)}}},[t("ManufacturerInput",{model:{value:a.manufacturer,callback:function(r){a.manufacturer=r},expression:"manufacturer"}}),t("div",{staticClass:"p-4"},[t("BaseButton",{staticClass:"w-full space-x-2 md:w-auto"},[t("PlusSvg",{staticClass:"h-auto w-4 xl:w-5"}),t("span",[a._v("Create Manufacturer")])],1)],1)],1)],1)],1)},B=[];const c={};var M=_(s,y,B,!1,h,null,null,null);function h(a){for(let e in c)this[e]=c[e]}const z=function(){return M.exports}();export{z as default};