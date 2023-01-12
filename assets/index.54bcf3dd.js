import{af as $,bU as B,d as n,b as U,aQ as _,aP as D,n as y,at as k,au as I,aJ as j,ca as R,ag as L,ak as x}from"./index.1543f442.js";import{D as F}from"./arrow-down-tray.5bfa5b2e.js";import{B as E}from"./BasicModal.eb4a590c.js";import{F as T}from"./FileSaver.min.0888b041.js";import{u as z}from"./useManufacturerFiles.c3ab4a01.js";import{u as M}from"./product-comparison.3f1b1655.js";import{P as A}from"./ProductComparisonSelectionIndicator.11b269ac.js";import{u as O}from"./useManufacturers.d09ada1a.js";import{u as V}from"./useProducts.e4cec7f0.js";const m={};m.props={id:{key:"id",required:!0,type:String},manufacturer:{key:"manufacturer",required:!0,type:null}};m.setup=(t,a)=>{const e=t,{id:s}=B(e),c=n(()=>encodeURIComponent(s.value)),o=U(!1),p=n(()=>`${_}/manufacturers/${encodeURIComponent(s.value)}/files/image`),l=n(()=>`${_}/manufacturers/${encodeURIComponent(s.value)}/files/datasheet`),r=z.read(s,"datasheet"),u=n(()=>!!r.data.value);async function v(){const d=await D(`${_}/manufacturers/${c.value}/files/datasheet`,{responseType:"blob"});T.exports.saveAs(d.data,e.manufacturer.id+".pdf")}function h(){o.value=!0}function i(){o.value=!1}return{isModalVisible:o,imageUrl:p,datasheetUrl:l,hasDatasheet:u,downloadFile:v,showModal:h,closeModal:i}};m.components=Object.assign({LazyImg:$,BasicModal:E,DownloadSvg:F},m.components);var q=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("section",{staticClass:"space-y-8 py-8"},[e("BaseTypography",{staticClass:"text-prime-darkest",attrs:{variant:"h3",component:"h1"}},[t._v(" "+t._s(t.manufacturer.name)+" ")]),e("LazyImg",{staticClass:"h-48 max-w-lg object-contain",attrs:{src:t.imageUrl,alt:t.manufacturer.name,options:{w:900,il:!0},"options-placeholder":{w:48}}}),t.manufacturer.description?e("div",{staticClass:"space-y-2"},[e("BaseTypography",{staticClass:"text-prime-darkest",attrs:{variant:"h6",component:"h2"}},[t._v(" Description ")]),e("BaseTypography",{staticClass:"text-gray-500",attrs:{variant:"p1",component:"p"}},[t._v(" "+t._s(t.manufacturer.description)+" ")])],1):t._e(),t.hasDatasheet&&t.datasheetUrl?e("div",[e("div",{staticClass:"hidden lg:flex lg:flex-col lg:items-start"},[e("div",{staticClass:"flex-1"},[e("BasicModal",{directives:[{name:"show",rawName:"v-show",value:t.isModalVisible,expression:"isModalVisible"}],on:{close:t.closeModal},scopedSlots:t._u([{key:"body",fn:function(){return[e("iframe",{staticClass:"h-screen w-full",attrs:{src:t.datasheetUrl}})]},proxy:!0}],null,!1,131673750)})],1),e("BaseButton",{attrs:{type:"button","display-type":"info"},on:{click:t.showModal}},[t._v(" View Datasheet ")])],1),e("div",{staticClass:"md:inline-flex lg:hidden"},[e("BaseButton",{staticClass:"w-full space-x-2 md:w-auto",attrs:{type:"button","display-type":"info"},on:{click:t.downloadFile}},[e("DownloadSvg",{staticClass:"h-auto w-4"}),e("span",[t._v("Download Datasheet")])],1)],1)]):t._e()],1)},Q=[];const C={};var N=y(m,q,Q,!1,H,null,null,null);function H(t){for(let a in C)this[a]=C[a]}const J=function(){return N.exports}(),G=k(async()=>{const{Carousel:t}=await I(()=>import("./vue-carousel.min.054bbb89.js").then(a=>a.v),["assets/vue-carousel.min.054bbb89.js","assets/index.1543f442.js","assets/index.5c2a7124.css"]);return t}),K=k(async()=>{const{Slide:t}=await I(()=>import("./vue-carousel.min.054bbb89.js").then(a=>a.v),["assets/vue-carousel.min.054bbb89.js","assets/index.1543f442.js","assets/index.5c2a7124.css"]);return t}),f={};f.props={id:{key:"id",required:!0,type:String},products:{key:"products",required:!0,type:Array}};f.setup=(t,a)=>{const e=t,s=n(()=>e.products.filter(r=>r.manufacturer.id===e.id)||[]),c=M(),o=n({get(){return c.productIds},set(r){if(r)return c.set(r)}});function p(r){return`${_}/products/${r}/image`}function l(r){var u;return((u=o.value)==null?void 0:u.length)===4&&o.value.includes(r)}return{filteredProducts:s,selected:o,productImageUrl:p,isDisabled:l}};f.components=Object.assign({Carousel:G,Slide:K,LazyImg:$},f.components);var W=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("section",{staticClass:"text-center"},[e("BaseH4",{staticClass:"mb-4 text-prime-navy"},[t._v("Products")]),e("div",{staticClass:"px-8"},[e("Carousel",{attrs:{"per-page-custom":[[0,1],[768,2],[1024,4]],"pagination-enabled":!1,"navigation-enabled":!0,"navigation-click-target-size":12}},t._l(t.filteredProducts,function(s){return e("Slide",{key:s.id,staticClass:"space-y-2 p-4"},[e("RouterLink",{staticClass:"flex h-48 transform flex-col items-center justify-center rounded-lg bg-white p-8 shadow hover:scale-105 hover:shadow-lg focus:ring focus:ring-indigo-200",attrs:{to:`/marketplace/products/${s.id}`}},[e("LazyImg",{staticClass:"max-h-20 w-full object-contain object-center",attrs:{src:t.productImageUrl(s.id),alt:s.name,options:{w:560,il:!0},"options-placeholder":{w:48}}}),e("BaseSubtitle3",{staticClass:"my-auto text-prime-indigo"},[t._v(" "+t._s(s.name)+" ")])],1),e("div",{staticClass:"flex items-center justify-center"},[e("label",{staticClass:"mb-12"},[e("BaseInput",{attrs:{type:"checkbox",disabled:t.isDisabled(s.id),value:`${s.id}`},model:{value:t.selected,callback:function(c){t.selected=c},expression:"selected"}}),e("BaseTypography",{staticClass:"uppercase text-gray-500",attrs:{component:"span",variant:"overline"}},[t._v(" Compare ")])],1)])],1)}),1)],1)],1)},X=[];const b={};var Y=y(f,W,X,!1,Z,null,null,null);function Z(t){for(let a in b)this[a]=b[a]}const tt=function(){return Y.exports}(),g={};g.setup=(t,a)=>{const e=`${L}/main-page-pics/line-waves-sm-light.svg`,s=R("id"),c=O.read(s),o=n(()=>c.data.value),p=V.list(),l=n(()=>p.data.value),r=n(()=>l.value?l.value.filter(i=>i.manufacturer.id===s.value):[]),u=M(),v=n({get(){return u.productIds},set(i){u.set(i)}}),h=n(()=>{if(!l.value)return[];const i=[];for(const d of l.value)v.value.includes(d.id)&&i.push(d);return i.sort((d,S)=>d.name.localeCompare(S.name)),i});return{backgroundUrl:e,id:s,manufacturer:o,manufacturerProducts:r,selected:v,selectedProducts:h}};g.components=Object.assign({ChevronLeftSvg:j,ManufacturerInformation:J,ManufacturerProductCarousel:tt,ProductComparisonSelectionIndicator:A},g.components);var et=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("section",{staticClass:"flex bg-white bg-[length:517px] bg-bottom bg-repeat-x",style:{backgroundImage:`url(${t.backgroundUrl})`}},[e("div",{staticClass:"flex w-0 flex-1 flex-col"},[e("main",{staticClass:"flex-1 pb-6 focus:outline-none md:pb-6"},[e("div",{staticClass:"mx-auto max-w-7xl border-b border-gray-200 px-4 sm:px-6 md:px-8"},[e("div",{staticClass:"pt-4"},[e("BaseLink",{staticClass:"group inline-flex items-center rounded-lg px-2 py-2 hover:bg-indigo-100 focus:bg-indigo-100",attrs:{to:"/marketplace/products","display-type":"gray"}},[e("ChevronLeftSvg",{staticClass:"h-5 w-5 text-gray-500 group-hover:text-prime-indigo group-focus:text-prime-indigo"}),e("span",[t._v("Marketplace")])],1)],1),e("div",{staticClass:"py-8"},[t.manufacturer?e("ManufacturerInformation",{attrs:{id:t.id,manufacturer:t.manufacturer}}):t._e()],1)]),e("div",{staticClass:"mx-auto max-w-7xl px-4 sm:px-6 md:px-8"},[e("div",{staticClass:"py-8"},[e("ManufacturerProductCarousel",{attrs:{id:t.id,products:t.manufacturerProducts}}),e("div",{directives:[{name:"show",rawName:"v-show",value:t.selected.length>0,expression:"selected.length > 0"}]},[e("ProductComparisonSelectionIndicator",{attrs:{products:t.selectedProducts}})],1)],1)])])])])},at=[];const w={};var P=y(g,et,at,!1,st,null,null,null);function st(t){for(let a in w)this[a]=w[a]}typeof x=="function"&&x(P);const mt=function(){return P.exports}();export{mt as default};