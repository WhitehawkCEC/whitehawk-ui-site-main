import{c as x,aI as g,aS as p,n as h,ao as w,b$ as M,aF as $,r as m}from"./index.1e14903e.js";import{B as P}from"./BasicConfirmModal.e1849fa7.js";import{A as T,R as C}from"./RowSelectionInput.c2de008a.js";import{A,T as k}from"./AppTanStackTable.99f0b695.js";import{c as B}from"./createOnChangeFn.324b2abc.js";import{u as R}from"./createSimpleTable.e9e69dd6.js";import{u as v}from"./useManufacturerProducts.b10f6f92.js";import"./exclamation-triangle.54812a62.js";import"./BasicModal.6023b17d.js";import"./magnifying-glass.b7cbe8fe.js";import"./TransitionExpand.65a9daeb.js";import"./chevron-up.736f4142.js";const c={};c.props={id:{key:"id",required:!0,type:String},products:{key:"products",required:!0,type:Array}};c.setup=(e,s)=>{const t=e,r=s.emit,a=x(()=>t.products),l=g(),n=B(),d=[n.display({id:"select",header:({table:o})=>p(T,{props:{table:o}}),cell:({row:o})=>p(C,{props:{row:o}})}),n.accessor("id",{header:()=>"ID",enableColumnFilter:!1}),n.accessor("name",{header:()=>"Name",enableColumnFilter:!1}),n.accessor(o=>o.type.name,{id:"type",header:()=>"Type",enableColumnFilter:!1}),n.display({id:"actions",header:"Actions",cell:({row:o})=>p(k,{props:{actions:[{id:"view",action(){l.push(`/admin/manufacturers/${t.id}/products/${o.original.id}`)}},{id:"delete",action(){r("delete",o.original)}}]}})})];return{instance:R(a,d)}};c.components=Object.assign({AppTanStackTable:A},c.components);var F=function(){var e=this,s=e.$createElement,t=e._self._c||s;return t("AppTanStackTable",{attrs:{table:e.instance}})},I=[];const y={};var N=h(c,F,I,!1,V,null,null,null);function V(e){for(let s in y)this[s]=y[s]}const j=function(){return N.exports}(),i={};i.setup=(e,s)=>{const t=M("id"),r=v.list(t),a=$(),l=v.delete(t),n=m("");async function d(){n?(await l.mutateAsync(n.value),f(),a.success("Successfully deleted product.")):a.error("Something went wrong.")}const u=m(!1),o=m("");function S(_){n.value=_.id,o.value=_.name,u.value=!0}function f(){u.value=!1}return{id:t,productsQuery:r,deleteProduct:d,isModalVisible:u,productName:o,toggleModal:S,closeModal:f}};i.components=Object.assign({PlusSvg:w,ManufacturerProductsTable:j,BasicConfirmModal:P},i.components);var q=function(){var e=this,s=e.$createElement,t=e._self._c||s;return t("section",[t("BaseTablePageLayout",{scopedSlots:e._u([{key:"title",fn:function(){return[e._v("Products")]},proxy:!0},{key:"button",fn:function(){return[t("div",{staticClass:"flex space-x-4"},[t("BaseButton",{staticClass:"w-full space-x-2 md:w-auto",attrs:{to:`/admin/manufacturers/${e.id}/products/new`}},[t("PlusSvg",{staticClass:"h-auto w-4 xl:w-5"}),t("span",[e._v("Product")])],1)],1)]},proxy:!0},{key:"table",fn:function(){return[t("BaseVueQuery",{attrs:{query:e.productsQuery},scopedSlots:e._u([{key:"success",fn:function(r){var a=r.data;return[t("ManufacturerProductsTable",{attrs:{id:e.id,products:a},on:{delete:e.toggleModal}})]}}])})]},proxy:!0}])}),t("BasicConfirmModal",{directives:[{name:"show",rawName:"v-show",value:e.isModalVisible,expression:"isModalVisible"}],attrs:{name:e.productName},on:{delete:e.deleteProduct,close:e.closeModal}})],1)},E=[];const b={};var Q=h(i,q,E,!1,D,null,null,null);function D(e){for(let s in b)this[s]=b[s]}const ee=function(){return Q.exports}();export{ee as default};
