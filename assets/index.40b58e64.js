import{U as D}from"./arrow-down-on-square.bf61cdc5.js";import{F as w}from"./FileInput.524e0e1e.js";import{c as f,aE as h,n as g,aP as M,c7 as b,r as U,ay as B,aJ as F}from"./index.f9aabd94.js";import{u as m}from"./useManufacturerFiles.1bfdcf07.js";import{M as A}from"./ManufacturerInput.97945e2c.js";import{I as j}from"./ImageInput.b4f537fe.js";import{u as x}from"./useManufacturers.eb739659.js";import"./document-plus.04e3d5d0.js";import"./DynamicForm.af1fe49d.js";import"./cloneDeep.eb1a72db.js";import"./_Uint8Array.d5aa7bee.js";import"./keys.3575accf.js";import"./_baseAssignValue.156d95dd.js";import"./_copyArray.56331c81.js";import"./FormValidation.fcce8505.js";import"./BasicModal.c564ea4e.js";const _={};_.props={manufacturerId:{key:"manufacturerId",required:!0,type:String}};_.setup=(e,a)=>{const t=e,s=f(()=>t.manufacturerId),u=m.read(s,"datasheet"),o=f({get(){if(u.data.value)return`${s.value}-datasheet.pdf`},set(r){if(r)return`${s.value}-${r}`}}),c=h(),i=m.update(s,"datasheet");async function l(r){const d=new FormData;o.value=`${r.name}${r.type}`,d.append("data",r,o.value),(await i.mutateAsync(d)).status===204&&c.success("Successfully udpated datasheet.")}const p=m.delete(s,"datasheet");async function n(){window.confirm("Are you sure you want to delete this datasheet?")&&await p.mutateAsync()==="Deleted file."&&(c.success("Successfully deleted datasheet."),o.value="")}return{selectedDatasheet:o,updateDatasheet:l,deleteDatasheet:n}};_.components=Object.assign({FileInput:w},_.components);var R=function(){var e=this,a=e.$createElement,t=e._self._c||a;return t("BaseSimpleCard",{staticClass:"divide-y"},[t("BaseTypography",{staticClass:"p-4",attrs:{variant:"subtitle3",component:"h3"}},[e._v(" Datasheet ")]),t("FileInput",{attrs:{"existing-file":e.selectedDatasheet,"btn-text":"Change Datasheet",accept:".pdf"},on:{"update-file":e.updateDatasheet,"remove-file":e.deleteDatasheet}})],1)},L=[];const I={};var E=g(_,R,L,!1,k,null,null,null);function k(e){for(let a in I)this[a]=I[a]}const O=function(){return E.exports}(),v={};v.props={manufacturerId:{key:"manufacturerId",required:!0,type:String}};v.setup=(e,a)=>{const t=e,s=f(()=>t.manufacturerId),u=f(()=>`${M}/manufacturers/${encodeURIComponent(s.value)}/files/image`),o=h(),c=m.update(s,"image");async function i(n,r){const d=new FormData;d.append("data",n),(await c.mutateAsync(d)).status===204&&(r(),o.success("Successfully updated logo."))}const l=m.delete(s,"image");async function p(n){confirm("Are you sure you want to delete this image?")&&await l.mutateAsync()==="Deleted file."&&(n(),o.success("Logo deleted."))}return{imageUrl:u,updateImage:i,deleteImage:p}};v.components=Object.assign({ImageInput:j},v.components);var T=function(){var e=this,a=e.$createElement,t=e._self._c||a;return t("BaseSimpleCard",{staticClass:"divide-y"},[t("BaseTypography",{staticClass:"p-4",attrs:{variant:"subtitle3",component:"h3"}},[e._v(" Logo ")]),t("ImageInput",{attrs:{url:e.imageUrl,"btn-text":"Change Logo"},on:{"update-image":e.updateImage,"remove-image":e.deleteImage}})],1)},q=[];const $={};var N=g(v,T,q,!1,P,null,null,null);function P(e){for(let a in $)this[a]=$[a]}const z=function(){return N.exports}(),y={};y.setup=(e,a)=>{const t=b("id"),s=x.read(t),u=U(),o=f(()=>{var n;return(n=u.value)==null?void 0:n.name});B(()=>s.data.value,n=>{n&&(u.value=n)},{immediate:!0});const c=F(),i=h(),l=x.update(t);async function p(){u.value&&await l.mutateAsync(u.value)&&i.success(`Successfully updated ${o.value} manufacturer.`),c.push("/admin/manufacturers")}return{id:t,manufacturer:u,updateManufacturer:p}};y.components=Object.assign({ManufacturerLogoInput:z,ManufacturerDatasheetInput:O,ManufacturerInput:A,SaveSvg:D},y.components);var J=function(){var e=this,a=e.$createElement,t=e._self._c||a;return t("main",{staticClass:"flex flex-col space-y-8"},[t("div",{staticClass:"space-y-8 xl:grid xl:grid-cols-2 xl:gap-x-8 xl:space-y-0"},[t("ManufacturerLogoInput",{attrs:{"manufacturer-id":e.id}}),t("ManufacturerDatasheetInput",{attrs:{"manufacturer-id":e.id}})],1),t("BaseSimpleCard",{staticClass:"divide-y"},[t("BaseTypography",{staticClass:"p-4",attrs:{variant:"subtitle3",component:"h3"}},[e._v(" Attributes ")]),t("form",{staticClass:"divide-y",on:{submit:function(s){return s.preventDefault(),e.updateManufacturer.apply(null,arguments)}}},[t("ManufacturerInput",{attrs:{"is-id-readonly":!0},model:{value:e.manufacturer,callback:function(s){e.manufacturer=s},expression:"manufacturer"}}),t("div",{staticClass:"flex flex-col space-y-2 p-4 md:flex-row md:space-y-0 md:space-x-2"},[t("BaseButton",{staticClass:"w-full space-x-2 md:w-auto"},[t("SaveSvg",{staticClass:"h-auto w-4 xl:w-5"}),t("span",[e._v("Update")])],1)],1)],1)],1)],1)},Q=[];const C={};var G=g(y,J,Q,!1,H,null,null,null);function H(e){for(let a in C)this[a]=C[a]}const le=function(){return G.exports}();export{le as default};