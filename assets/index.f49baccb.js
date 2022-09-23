import{U as $}from"./arrow-down-on-square.bf61cdc5.js";import{T as C}from"./trash.78f57a7a.js";import{F as M}from"./FileInput.6f3bbd67.js";import{c as _,aF as g,n as x,aP as b,bX as A,r as B,aA as F,aI as U}from"./index.7b120442.js";import{u as m}from"./useManufacturerFiles.10439bef.js";import{M as j}from"./ManufacturerInput.1b2524bc.js";import{I as R}from"./ImageInput.b1db128f.js";import{u as h}from"./useManufacturers.3fd06670.js";import"./document-plus.04e3d5d0.js";import"./DynamicForm.54ce95a5.js";import"./cloneDeep.0dfa2aba.js";import"./_Uint8Array.d085b95b.js";import"./keys.2f8ae524.js";import"./_baseAssignValue.c3f5b51f.js";import"./_copyArray.56331c81.js";import"./FormValidation.907ef868.js";import"./BasicModal.e545a91e.js";const f={};f.props={manufacturerId:{key:"manufacturerId",required:!0,type:String}};f.setup=(e,a)=>{const t=e,s=_(()=>t.manufacturerId),u=m.read(s,"datasheet"),r=_({get(){if(u.data.value)return`${s.value}-datasheet.pdf`},set(n){if(n)return`${s.value}-${n}`}}),c=g(),i=m.update(s,"datasheet");async function l(n){const d=new FormData;r.value=`${n.name}${n.type}`,d.append("data",n,r.value),(await i.mutateAsync(d)).status===204&&c.success("Successfully udpated datasheet.")}const p=m.delete(s,"datasheet");async function o(){window.confirm("Are you sure you want to delete this datasheet?")&&await p.mutateAsync()==="Deleted file."&&(c.success("Successfully deleted datasheet."),r.value="")}return{selectedDatasheet:r,updateDatasheet:l,deleteDatasheet:o}};f.components=Object.assign({FileInput:M},f.components);var T=function(){var e=this,a=e.$createElement,t=e._self._c||a;return t("BaseSimpleCard",{staticClass:"divide-y"},[t("BaseTypography",{staticClass:"p-4",attrs:{variant:"subtitle3",component:"h3"}},[e._v(" Datasheet ")]),t("FileInput",{attrs:{"existing-file":e.selectedDatasheet,"btn-text":"Change Datasheet",accept:".pdf"},on:{"update-file":e.updateDatasheet,"remove-file":e.deleteDatasheet}})],1)},L=[];const I={};var k=x(f,T,L,!1,E,null,null,null);function E(e){for(let a in I)this[a]=I[a]}const O=function(){return k.exports}(),v={};v.props={manufacturerId:{key:"manufacturerId",required:!0,type:String}};v.setup=(e,a)=>{const t=e,s=_(()=>t.manufacturerId),u=_(()=>`${b}/manufacturers/${encodeURIComponent(s.value)}/files/image`),r=g(),c=m.update(s,"image");async function i(o,n){const d=new FormData;d.append("data",o),(await c.mutateAsync(d)).status===204&&(n(),r.success("Successfully updated logo."))}const l=m.delete(s,"image");async function p(o){confirm("Are you sure you want to delete this image?")&&await l.mutateAsync()==="Deleted file."&&(o(),r.success("Logo deleted."))}return{imageUrl:u,updateImage:i,deleteImage:p}};v.components=Object.assign({ImageInput:R},v.components);var q=function(){var e=this,a=e.$createElement,t=e._self._c||a;return t("BaseSimpleCard",{staticClass:"divide-y"},[t("BaseTypography",{staticClass:"p-4",attrs:{variant:"subtitle3",component:"h3"}},[e._v(" Logo ")]),t("ImageInput",{attrs:{url:e.imageUrl,"btn-text":"Change Logo"},on:{"update-image":e.updateImage,"remove-image":e.deleteImage}})],1)},P=[];const S={};var z=x(v,q,P,!1,N,null,null,null);function N(e){for(let a in S)this[a]=S[a]}const Q=function(){return z.exports}(),y={};y.setup=(e,a)=>{const t=A("id"),s=h.read(t),u=B();F(()=>s.data.value,n=>{n&&(u.value=n)},{immediate:!0});const r=U(),c=g(),i=h.update(t);async function l(){u.value&&await i.mutateAsync(u.value)&&c.success("Successfully updated manufacturer.")}const p=h.delete(t);async function o(){confirm("Are you sure you want to delete this manufacturer? This action deletes all products associated with this manufacturer.")&&(await p.mutateAsync(),c.success("Successfully deleted manufacturer."),r.push("/admin/manufacturers"))}return{id:t,manufacturer:u,updateManufacturer:l,deleteManufacturer:o}};y.components=Object.assign({ManufacturerLogoInput:Q,ManufacturerDatasheetInput:O,ManufacturerInput:j,SaveSvg:$,DeleteSvg:C},y.components);var X=function(){var e=this,a=e.$createElement,t=e._self._c||a;return t("main",{staticClass:"flex flex-col space-y-8"},[t("div",{staticClass:"space-y-8 xl:grid xl:grid-cols-2 xl:gap-x-8 xl:space-y-0"},[t("ManufacturerLogoInput",{attrs:{"manufacturer-id":e.id}}),t("ManufacturerDatasheetInput",{attrs:{"manufacturer-id":e.id}})],1),t("BaseSimpleCard",{staticClass:"divide-y"},[t("BaseTypography",{staticClass:"p-4",attrs:{variant:"subtitle3",component:"h3"}},[e._v(" Attributes ")]),t("form",{staticClass:"divide-y",on:{submit:function(s){return s.preventDefault(),e.updateManufacturer.apply(null,arguments)}}},[t("ManufacturerInput",{attrs:{"is-id-readonly":!0},model:{value:e.manufacturer,callback:function(s){e.manufacturer=s},expression:"manufacturer"}}),t("div",{staticClass:"flex flex-col space-y-2 p-4 md:flex-row md:space-y-0 md:space-x-2"},[t("BaseButton",{staticClass:"w-full space-x-2 md:w-auto"},[t("SaveSvg",{staticClass:"h-auto w-4 xl:w-5"}),t("span",[e._v("Save")])],1),t("BaseButton",{staticClass:"w-full space-x-2 md:w-auto",attrs:{"display-type":"danger",action:"secondary"},on:{click:function(s){return s.preventDefault(),e.deleteManufacturer.apply(null,arguments)}}},[t("DeleteSvg",{staticClass:"h-auto w-4 xl:w-5"}),t("span",[e._v("Delete")])],1)],1)],1)],1)],1)},G=[];const w={};var H=x(y,X,G,!1,J,null,null,null);function J(e){for(let a in w)this[a]=w[a]}const de=function(){return H.exports}();export{de as default};
