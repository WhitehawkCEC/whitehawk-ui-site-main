import{U as D}from"./arrow-down-on-square.bf61cdc5.js";import{F as w}from"./FileInput.f1a2beed.js";import{c as f,aF as h,n as g,aQ as M,c0 as b,r as F,aA as U,aI as A}from"./index.d7f0b820.js";import{u as m}from"./useManufacturerFiles.cf01a606.js";import{M as B}from"./ManufacturerInput.de9203ce.js";import{I as j}from"./ImageInput.908582c7.js";import{u as x}from"./useManufacturers.015f6686.js";import"./document-plus.04e3d5d0.js";import"./DynamicForm.dadca65c.js";import"./cloneDeep.48b01909.js";import"./_Uint8Array.e28bbd07.js";import"./keys.dcd78d2f.js";import"./_baseAssignValue.6e4ae3ed.js";import"./_copyArray.56331c81.js";import"./FormValidation.fcce8505.js";import"./BasicModal.bb3bc14c.js";const _={};_.props={manufacturerId:{key:"manufacturerId",required:!0,type:String}};_.setup=(e,a)=>{const t=e,s=f(()=>t.manufacturerId),u=m.read(s,"datasheet"),o=f({get(){if(u.data.value)return`${s.value}-datasheet.pdf`},set(r){if(r)return`${s.value}-${r}`}}),c=h(),i=m.update(s,"datasheet");async function l(r){const d=new FormData;o.value=`${r.name}${r.type}`,d.append("data",r,o.value),(await i.mutateAsync(d)).status===204&&c.success("Successfully udpated datasheet.")}const p=m.delete(s,"datasheet");async function n(){window.confirm("Are you sure you want to delete this datasheet?")&&await p.mutateAsync()==="Deleted file."&&(c.success("Successfully deleted datasheet."),o.value="")}return{selectedDatasheet:o,updateDatasheet:l,deleteDatasheet:n}};_.components=Object.assign({FileInput:w},_.components);var R=function(){var e=this,a=e.$createElement,t=e._self._c||a;return t("BaseSimpleCard",{staticClass:"divide-y"},[t("BaseTypography",{staticClass:"p-4",attrs:{variant:"subtitle3",component:"h3"}},[e._v(" Datasheet ")]),t("FileInput",{attrs:{"existing-file":e.selectedDatasheet,"btn-text":"Change Datasheet",accept:".pdf"},on:{"update-file":e.updateDatasheet,"remove-file":e.deleteDatasheet}})],1)},L=[];const I={};var k=g(_,R,L,!1,E,null,null,null);function E(e){for(let a in I)this[a]=I[a]}const O=function(){return k.exports}(),v={};v.props={manufacturerId:{key:"manufacturerId",required:!0,type:String}};v.setup=(e,a)=>{const t=e,s=f(()=>t.manufacturerId),u=f(()=>`${M}/manufacturers/${encodeURIComponent(s.value)}/files/image`),o=h(),c=m.update(s,"image");async function i(n,r){const d=new FormData;d.append("data",n),(await c.mutateAsync(d)).status===204&&(r(),o.success("Successfully updated logo."))}const l=m.delete(s,"image");async function p(n){confirm("Are you sure you want to delete this image?")&&await l.mutateAsync()==="Deleted file."&&(n(),o.success("Logo deleted."))}return{imageUrl:u,updateImage:i,deleteImage:p}};v.components=Object.assign({ImageInput:j},v.components);var T=function(){var e=this,a=e.$createElement,t=e._self._c||a;return t("BaseSimpleCard",{staticClass:"divide-y"},[t("BaseTypography",{staticClass:"p-4",attrs:{variant:"subtitle3",component:"h3"}},[e._v(" Logo ")]),t("ImageInput",{attrs:{url:e.imageUrl,"btn-text":"Change Logo"},on:{"update-image":e.updateImage,"remove-image":e.deleteImage}})],1)},q=[];const $={};var N=g(v,T,q,!1,Q,null,null,null);function Q(e){for(let a in $)this[a]=$[a]}const z=function(){return N.exports}(),y={};y.setup=(e,a)=>{const t=b("id"),s=x.read(t),u=F(),o=f(()=>{var n;return(n=u.value)==null?void 0:n.name});U(()=>s.data.value,n=>{n&&(u.value=n)},{immediate:!0});const c=A(),i=h(),l=x.update(t);async function p(){u.value&&await l.mutateAsync(u.value)&&i.success(`Successfully updated ${o.value} manufacturer.`),c.push("/admin/manufacturers")}return{id:t,manufacturer:u,updateManufacturer:p}};y.components=Object.assign({ManufacturerLogoInput:z,ManufacturerDatasheetInput:O,ManufacturerInput:B,SaveSvg:D},y.components);var P=function(){var e=this,a=e.$createElement,t=e._self._c||a;return t("main",{staticClass:"flex flex-col space-y-8"},[t("div",{staticClass:"space-y-8 xl:grid xl:grid-cols-2 xl:gap-x-8 xl:space-y-0"},[t("ManufacturerLogoInput",{attrs:{"manufacturer-id":e.id}}),t("ManufacturerDatasheetInput",{attrs:{"manufacturer-id":e.id}})],1),t("BaseSimpleCard",{staticClass:"divide-y"},[t("BaseTypography",{staticClass:"p-4",attrs:{variant:"subtitle3",component:"h3"}},[e._v(" Attributes ")]),t("form",{staticClass:"divide-y",on:{submit:function(s){return s.preventDefault(),e.updateManufacturer.apply(null,arguments)}}},[t("ManufacturerInput",{attrs:{"is-id-readonly":!0},model:{value:e.manufacturer,callback:function(s){e.manufacturer=s},expression:"manufacturer"}}),t("div",{staticClass:"flex flex-col space-y-2 p-4 md:flex-row md:space-y-0 md:space-x-2"},[t("BaseButton",{staticClass:"w-full space-x-2 md:w-auto"},[t("SaveSvg",{staticClass:"h-auto w-4 xl:w-5"}),t("span",[e._v("Update")])],1)],1)],1)],1)],1)},G=[];const C={};var H=g(y,P,G,!1,J,null,null,null);function J(e){for(let a in C)this[a]=C[a]}const le=function(){return H.exports}();export{le as default};