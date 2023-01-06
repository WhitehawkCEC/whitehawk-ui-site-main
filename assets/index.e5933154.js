import{d as x,aS as u,n as S,an as g,c7 as w,aF as M,b as d}from"./index.a3119a0b.js";import{B as P}from"./BasicConfirmModal.ddbe2652.js";import{A as T,R as $}from"./RowSelectionInput.0c2d4f4d.js";import{A as C,T as A}from"./AppTanStackTable.fe49f065.js";import{c as k}from"./createOnChangeFn.8f7c5b22.js";import{u as B}from"./createSimpleTable.1c42ee1b.js";import{u as v}from"./useManufacturerProducts.c7a8912c.js";import"./BasicModal.8ab69907.js";import"./magnifying-glass.b7cbe8fe.js";import"./TransitionExpand.c4dabd8d.js";import"./chevron-up.736f4142.js";const l={};l.props={id:{key:"id",required:!0,type:String},products:{key:"products",required:!0,type:Array}};l.setup=(e,s)=>{const t=e,r=s.emit,a=x(()=>t.products),n=k(),c=[n.display({id:"select",header:({table:o})=>u(T,{props:{table:o}}),cell:({row:o})=>u($,{props:{row:o}})}),n.accessor("id",{header:()=>"ID",enableColumnFilter:!1}),n.accessor("name",{header:()=>"Name",enableColumnFilter:!1}),n.accessor(o=>o.type.name,{id:"type",header:()=>"Type",enableColumnFilter:!1}),n.display({id:"actions",header:"Actions",cell:({row:o})=>u(A,{props:{actions:[{id:"view",to:`/admin/manufacturers/${t.id}/products/${o.original.id}`},{id:"delete",action(){r("delete",o.original)}}]}})})];return{instance:B(a,c)}};l.components=Object.assign({AppTanStackTable:C},l.components);var F=function(){var e=this,s=e.$createElement,t=e._self._c||s;return t("AppTanStackTable",{attrs:{table:e.instance}})},R=[];const y={};var N=S(l,F,R,!1,V,null,null,null);function V(e){for(let s in y)this[s]=y[s]}const j=function(){return N.exports}(),i={};i.setup=(e,s)=>{const t=w("id"),r=v.list(t),a=M(),n=v.delete(t),c=d("");async function p(){c?(await n.mutateAsync(c.value),f(),a.success("Successfully deleted product.")):a.error("Something went wrong.")}const o=d(!1),m=d("");function h(_){c.value=_.id,m.value=_.name,o.value=!0}function f(){o.value=!1}return{id:t,productsQuery:r,deleteProduct:p,isModalVisible:o,productName:m,toggleModal:h,closeModal:f}};i.components=Object.assign({PlusSvg:g,ManufacturerProductsTable:j,BasicConfirmModal:P},i.components);var I=function(){var e=this,s=e.$createElement,t=e._self._c||s;return t("section",[t("BaseTablePageLayout",{scopedSlots:e._u([{key:"title",fn:function(){return[e._v("Products")]},proxy:!0},{key:"button",fn:function(){return[t("div",{staticClass:"flex space-x-4"},[t("BaseButton",{staticClass:"w-full space-x-2 md:w-auto",attrs:{to:`/admin/manufacturers/${e.id}/products/new`}},[t("PlusSvg",{staticClass:"h-auto w-4 xl:w-5"}),t("span",[e._v("Product")])],1)],1)]},proxy:!0},{key:"table",fn:function(){return[t("BaseVueQuery",{attrs:{query:e.productsQuery},scopedSlots:e._u([{key:"success",fn:function(r){var a=r.data;return[t("ManufacturerProductsTable",{attrs:{id:e.id,products:a},on:{delete:e.toggleModal}})]}}])})]},proxy:!0}])}),t("BasicConfirmModal",{directives:[{name:"show",rawName:"v-show",value:e.isModalVisible,expression:"isModalVisible"}],attrs:{name:e.productName},on:{delete:e.deleteProduct,close:e.closeModal}})],1)},q=[];const b={};var E=S(i,I,q,!1,Q,null,null,null);function Q(e){for(let s in b)this[s]=b[s]}const Y=function(){return E.exports}();export{Y as default};