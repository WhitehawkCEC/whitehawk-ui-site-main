import{E as T}from"./exclamation-triangle.54812a62.js";import{bO as w,aI as S,aR as g,n as h,ap as B,bN as v,c as y,aF as A,r as x}from"./index.3915a005.js";import{B as M}from"./BasicModal.5dcbf505.js";import{A as P,T as $}from"./AppTanStackTable.4ba75ca5.js";import{I as k}from"./IsoDateTimeDisplay.b912a4d0.js";import{c as D}from"./createOnChangeFn.2bc06e57.js";import{u as F}from"./createSimpleTable.1f774027.js";import"./magnifying-glass.b7cbe8fe.js";import"./chevron-left.0808b01b.js";import"./TransitionExpand.42889ebe.js";import"./chevron-up.736f4142.js";const c={};c.props={categories:{key:"categories",required:!0,type:Array}};c.setup=(e,a)=>{const t=e,{categories:u}=w(t),p=a.emit,d=S(),s=D(),m=[s.accessor(n=>{var o;return(o=n.id)==null?void 0:o.value},{id:"id",header:()=>"ID",enableColumnFilter:!1}),s.accessor("name",{header:()=>"Name",enableColumnFilter:!1}),s.accessor(n=>{var o;return(o=n.meta)==null?void 0:o.updatedAt},{id:"updatedAt",header:()=>"Last Updated",cell:n=>g(k,{props:{value:n.getValue(),format:"date"}}),enableColumnFilter:!1}),s.accessor("description",{header:()=>"Description",enableColumnFilter:!1}),s.display({id:"actions",header:"Actions",cell:({row:n})=>g($,{props:{actions:[{id:"edit",action(){var o;d.push(`/admin/products/categories/${(o=n.original.id)==null?void 0:o.value}`)}},{id:"delete",action(){p("delete",n.original)}}]}})})];return{instance:F(u,m)}};c.components=Object.assign({AppTanStackTable:P},c.components);var E=function(){var e=this,a=e.$createElement,t=e._self._c||a;return t("AppTanStackTable",{attrs:{table:e.instance}})},I=[];const b={};var j=h(c,E,I,!1,R,null,null,null);function R(e){for(let a in b)this[a]=b[a]}const V=function(){return j.exports}(),i={};i.setup=(e,a)=>{const t=v.list(),u=y(()=>t.data.value?t.data.value.sort((r,l)=>r.name.localeCompare(l.name)):[]),p=A(),d=v.delete(),s=x();function m(r){s.value={category:{...r}},o.value=!0}const f=y(()=>{var r,l;return(l=(r=s==null?void 0:s.value)==null?void 0:r.category)==null?void 0:l.name});async function n(){if(s.value)await d.mutateAsync(s.value),_(),p.success("Category successfully deleted");else throw new Error("Invalid request.")}const o=x(!1);function _(){o.value=!1}return{categories:u,setPayload:m,categoryToBeDeleted:f,deleteCategory:n,isModalVisible:o,closeModal:_}};i.components=Object.assign({PlusSvg:B,ProductCategoriesTable:V,BasicModal:M,WarningSvg:T},i.components);var N=function(){var e=this,a=e.$createElement,t=e._self._c||a;return t("section",[t("BaseTablePageLayout",{scopedSlots:e._u([{key:"title",fn:function(){return[e._v("Product Categories")]},proxy:!0},{key:"button",fn:function(){return[t("BaseButton",{staticClass:"space-x-1",attrs:{to:"/admin/products/categories/new"}},[t("PlusSvg",{staticClass:"mr-1 w-5 xl:w-5"}),e._v(" Category ")],1)]},proxy:!0},{key:"table",fn:function(){return[t("ProductCategoriesTable",{attrs:{categories:e.categories},on:{delete:e.setPayload}})]},proxy:!0}])}),t("BasicModal",{directives:[{name:"show",rawName:"v-show",value:e.isModalVisible,expression:"isModalVisible"}],on:{close:e.closeModal},scopedSlots:e._u([{key:"body",fn:function(){return[t("div",{staticClass:"flex flex-col items-center justify-center space-y-8 px-5 pb-6"},[t("div",{staticClass:"flex flex-col space-y-4 lg:flex-row lg:items-center lg:space-x-4 lg:space-y-0"},[t("BaseIcon",{staticClass:"mx-auto max-w-min lg:mx-0 lg:max-w-none",attrs:{color:"danger",shape:"square"}},[t("WarningSvg",{staticClass:"h-auto w-5"})],1),t("BaseTypography",{attrs:{component:"p",variant:"subtitle1"}},[e._v(" Are you sure you want to delete "),t("span",{staticClass:"text-red-500"},[e._v(e._s(e.categoryToBeDeleted))]),e._v(" category? ")])],1),t("BaseButton",{attrs:{"display-type":"danger",action:"secondary"},on:{click:e.deleteCategory}},[e._v(" Delete ")])],1)]},proxy:!0}])})],1)},q=[];const C={};var O=h(i,N,q,!1,H,null,null,null);function H(e){for(let a in C)this[a]=C[a]}const ee=function(){return O.exports}();export{ee as default};
