import{E as B}from"./exclamation-triangle.54812a62.js";import{T as M}from"./trash.78f57a7a.js";import{d as f,aK as $,aU as p,n as g,aq as k,c2 as A,cH as R,r as m,aH as E}from"./index.ad2ff904.js";import{B as I}from"./BasicModal.38d6400a.js";import{A as N,R as j}from"./RowSelectionInput.5b32eef0.js";import{A as q,T as F}from"./AppTanStackTable.a9750958.js";import{c as V}from"./createOnChangeFn.9f62ccbf.js";import{u as H}from"./createSimpleTable.e78f974d.js";import{u as y}from"./useManufacturerProducts.5a407548.js";import"./magnifying-glass.b7cbe8fe.js";import"./TransitionExpand.5b598212.js";import"./chevron-up.736f4142.js";const l={};l.props={id:{key:"id",required:!0,type:String},products:{key:"products",required:!0,type:Array}};l.setup=(t,s)=>{const e=t,r=s.emit,n=f(()=>e.products),c=$(),a=V(),u=[a.display({id:"select",header:({table:o})=>p(N,{props:{table:o}}),cell:({row:o})=>p(j,{props:{row:o}})}),a.accessor("id",{header:()=>"Id",enableColumnFilter:!0}),a.accessor("name",{header:()=>"Name",enableColumnFilter:!1}),a.accessor(o=>o.type.name,{id:"type",header:()=>"Type",enableColumnFilter:!1}),a.display({id:"actions",header:"Actions",cell:({row:o})=>p(F,{props:{actions:[{id:"view",action(){c.push(`/admin/manufacturers/${e.id}/products/${o.original.id}`)}},{id:"delete",action(){r("delete",o.original)}}]}})})];return{instance:H(n,u)}};l.components=Object.assign({AppTanStackTable:q},l.components);var D=function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("AppTanStackTable",{attrs:{table:t.instance}})},O=[];const x={};var Q=g(l,D,O,!1,W,null,null,null);function W(t){for(let s in x)this[s]=x[s]}const z=function(){return Q.exports}(),d={};d.setup=(t,s)=>{const e=A("id"),r=y.list(e),n=R.get(e),c=m(),a=m(),u=m(!1),_=f(()=>{var i;return(i=n==null?void 0:n.data)==null?void 0:i.value});function o(i){const{id:T,name:P}=i;c.value=T,a.value=P,u.value=!0}const b=y.delete(e,c),w=E(),S=f(()=>a.value?a.value:"");async function C(){if(c)await b.mutateAsync(),v(),w.success(`Successfully deleted ${S.value} product.`);else throw new Error("Invalid request.")}function v(){u.value=!1}return{id:e,productsQuery:r,productName:a,isModalVisible:u,totalProducts:_,setPayload:o,deleteProduct:C,closeModal:v}};d.components=Object.assign({PlusSvg:k,ManufacturerProductsTable:z,BasicModal:I,WarningSvg:B,TrashSvg:M},d.components);var K=function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("section",[t._v(" "+t._s(t.productName)+" "),e("BaseTablePageLayout",{scopedSlots:t._u([{key:"title",fn:function(){return[t._v("Products")]},proxy:!0},{key:"button",fn:function(){return[e("div",{staticClass:"flex space-x-4"},[e("BaseButton",{staticClass:"w-full space-x-2 md:w-auto",attrs:{to:`/admin/manufacturers/${t.id}/products/new`}},[e("PlusSvg",{staticClass:"h-auto w-4 xl:w-5"}),e("span",[t._v("Product")])],1)],1)]},proxy:!0},{key:"table",fn:function(){return[e("BaseVueQuery",{attrs:{query:t.productsQuery},scopedSlots:t._u([{key:"success",fn:function(r){var n=r.data;return[e("ManufacturerProductsTable",{attrs:{id:t.id,products:n},on:{delete:t.setPayload}})]}}])})]},proxy:!0}])}),e("BasicModal",{directives:[{name:"show",rawName:"v-show",value:t.isModalVisible,expression:"isModalVisible"}],on:{close:t.closeModal},scopedSlots:t._u([{key:"body",fn:function(){return[e("div",{staticClass:"flex flex-col items-center justify-center space-y-8 px-5"},[e("BaseIcon",{staticClass:"mx-auto max-w-min lg:mx-0 lg:max-w-none",attrs:{color:"danger",shape:"round"}},[e("WarningSvg",{staticClass:"h-auto w-5"})],1),e("BaseTypography",{staticClass:"text-gray-500",attrs:{component:"h2",variant:"subtitle3"}},[t._v(" Are you sure you want to delete "),e("span",{staticClass:"text-red-500"},[t._v(t._s(t.productName))]),t._v(" product? "),t.totalProducts===1?e("BaseTypography",{staticClass:"text-gray-500",attrs:{component:"h2",variant:"subtitle3"}},[e("span",{staticClass:"text-red-500"},[t._v(t._s(t.id))]),t._v(" manufacturer will be without single product. ")]):t._e()],1),e("div",{staticClass:"py-4"},[e("BaseButton",{attrs:{"display-type":"danger",action:"secondary"},on:{click:t.deleteProduct}},[e("TrashSvg",{staticClass:"h-auto w-4 xl:w-5"}),e("span",[t._v("Delete")])],1)],1)],1)]},proxy:!0}])})],1)},L=[];const h={};var U=g(d,K,L,!1,G,null,null,null);function G(t){for(let s in h)this[s]=h[s]}const ut=function(){return U.exports}();export{ut as default};