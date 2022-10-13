import{U as D}from"./arrow-down-on-square.bf61cdc5.js";import{T as $}from"./trash.78f57a7a.js";import{F as M}from"./FileInput.1a71edc2.js";import{d as _,aH as g,n as x,aS as b,c2 as B,r as A,aC as F,aK as U}from"./index.ad2ff904.js";import{u as m}from"./useManufacturerFiles.73365ae9.js";import{M as j}from"./ManufacturerInput.17ffe34c.js";import{I as R}from"./ImageInput.82e17999.js";import{u as h}from"./useManufacturers.343062f0.js";import"./document-plus.04e3d5d0.js";import"./DynamicForm.50aff3fb.js";import"./cloneDeep.ebc2cb16.js";import"./_Uint8Array.2d00e5af.js";import"./keys.3ad8f78f.js";import"./_baseAssignValue.0fa47170.js";import"./_copyArray.56331c81.js";import"./FormValidation.907ef868.js";import"./BasicModal.38d6400a.js";const f={};f.props={manufacturerId:{key:"manufacturerId",required:!0,type:String}};f.setup=(e,a)=>{const t=e,s=_(()=>t.manufacturerId),u=m.read(s,"datasheet"),r=_({get(){if(u.data.value)return`${s.value}-datasheet.pdf`},set(n){if(n)return`${s.value}-${n}`}}),c=g(),i=m.update(s,"datasheet");async function l(n){const d=new FormData;r.value=`${n.name}${n.type}`,d.append("data",n,r.value),(await i.mutateAsync(d)).status===204&&c.success("Successfully udpated datasheet.")}const p=m.delete(s,"datasheet");async function o(){window.confirm("Are you sure you want to delete this datasheet?")&&await p.mutateAsync()==="Deleted file."&&(c.success("Successfully deleted datasheet."),r.value="")}return{selectedDatasheet:r,updateDatasheet:l,deleteDatasheet:o}};f.components=Object.assign({FileInput:M},f.components);var T=function(){var e=this,a=e.$createElement,t=e._self._c||a;return t("BaseSimpleCard",{staticClass:"divide-y"},[t("BaseTypography",{staticClass:"p-4",attrs:{variant:"subtitle3",component:"h3"}},[e._v(" Datasheet ")]),t("FileInput",{attrs:{"existing-file":e.selectedDatasheet,"btn-text":"Change Datasheet",accept:".pdf"},on:{"update-file":e.updateDatasheet,"remove-file":e.deleteDatasheet}})],1)},L=[];const I={};var k=x(f,T,L,!1,E,null,null,null);function E(e){for(let a in I)this[a]=I[a]}const O=function(){return k.exports}(),v={};v.props={manufacturerId:{key:"manufacturerId",required:!0,type:String}};v.setup=(e,a)=>{const t=e,s=_(()=>t.manufacturerId),u=_(()=>`${b}/manufacturers/${encodeURIComponent(s.value)}/files/image`),r=g(),c=m.update(s,"image");async function i(o,n){const d=new FormData;d.append("data",o),(await c.mutateAsync(d)).status===204&&(n(),r.success("Successfully updated logo."))}const l=m.delete(s,"image");async function p(o){confirm("Are you sure you want to delete this image?")&&await l.mutateAsync()==="Deleted file."&&(o(),r.success("Logo deleted."))}return{imageUrl:u,updateImage:i,deleteImage:p}};v.components=Object.assign({ImageInput:R},v.components);var q=function(){var e=this,a=e.$createElement,t=e._self._c||a;return t("BaseSimpleCard",{staticClass:"divide-y"},[t("BaseTypography",{staticClass:"p-4",attrs:{variant:"subtitle3",component:"h3"}},[e._v(" Logo ")]),t("ImageInput",{attrs:{url:e.imageUrl,"btn-text":"Change Logo"},on:{"update-image":e.updateImage,"remove-image":e.deleteImage}})],1)},z=[];const S={};var H=x(v,q,z,!1,K,null,null,null);function K(e){for(let a in S)this[a]=S[a]}const N=function(){return H.exports}(),y={};y.setup=(e,a)=>{const t=B("id"),s=h.read(t),u=A();F(()=>s.data.value,n=>{n&&(u.value=n)},{immediate:!0});const r=U(),c=g(),i=h.update(t);async function l(){u.value&&await i.mutateAsync(u.value)&&c.success("Successfully updated manufacturer.")}const p=h.delete(t);async function o(){confirm("Are you sure you want to delete this manufacturer? This action deletes all products associated with this manufacturer.")&&(await p.mutateAsync(),c.success("Successfully deleted manufacturer."),r.push("/admin/manufacturers"))}return{id:t,manufacturer:u,updateManufacturer:l,deleteManufacturer:o}};y.components=Object.assign({ManufacturerLogoInput:N,ManufacturerDatasheetInput:O,ManufacturerInput:j,SaveSvg:D,DeleteSvg:$},y.components);var P=function(){var e=this,a=e.$createElement,t=e._self._c||a;return t("main",{staticClass:"flex flex-col space-y-8"},[t("div",{staticClass:"space-y-8 xl:grid xl:grid-cols-2 xl:gap-x-8 xl:space-y-0"},[t("ManufacturerLogoInput",{attrs:{"manufacturer-id":e.id}}),t("ManufacturerDatasheetInput",{attrs:{"manufacturer-id":e.id}})],1),t("BaseSimpleCard",{staticClass:"divide-y"},[t("BaseTypography",{staticClass:"p-4",attrs:{variant:"subtitle3",component:"h3"}},[e._v(" Attributes ")]),t("form",{staticClass:"divide-y",on:{submit:function(s){return s.preventDefault(),e.updateManufacturer.apply(null,arguments)}}},[t("ManufacturerInput",{attrs:{"is-id-readonly":!0},model:{value:e.manufacturer,callback:function(s){e.manufacturer=s},expression:"manufacturer"}}),t("div",{staticClass:"flex flex-col space-y-2 p-4 md:flex-row md:space-y-0 md:space-x-2"},[t("BaseButton",{staticClass:"w-full space-x-2 md:w-auto"},[t("SaveSvg",{staticClass:"h-auto w-4 xl:w-5"}),t("span",[e._v("Save")])],1),t("BaseButton",{staticClass:"w-full space-x-2 md:w-auto",attrs:{"display-type":"danger",action:"secondary"},on:{click:function(s){return s.preventDefault(),e.deleteManufacturer.apply(null,arguments)}}},[t("DeleteSvg",{staticClass:"h-auto w-4 xl:w-5"}),t("span",[e._v("Delete")])],1)],1)],1)],1)],1)},Q=[];const w={};var G=x(y,P,Q,!1,J,null,null,null);function J(e){for(let a in w)this[a]=w[a]}const de=function(){return G.exports}();export{de as default};