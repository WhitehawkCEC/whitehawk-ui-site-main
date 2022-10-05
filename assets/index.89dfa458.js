import{d as m,n as B,bS as E,aJ as F,aS as D,aq as I,bR as h,aG as N,r as T}from"./index.2f8dadb3.js";import{B as q}from"./BasicModal.69d50fca.js";import{E as R}from"./exclamation-triangle.54812a62.js";import{A as V,T as O}from"./AppTanStackTable.65b4fe56.js";import{I as H}from"./IsoDateTimeDisplay.55e5b47e.js";import{c as L}from"./createOnChangeFn.b706955f.js";import{u as Q}from"./createSimpleTable.60dbeec9.js";import"./magnifying-glass.b7cbe8fe.js";import"./chevron-left.0808b01b.js";import"./TransitionExpand.04ab59f6.js";import"./chevron-up.736f4142.js";const v={};v.props={bundlesTemplate:{key:"bundlesTemplate",required:!1,type:Array},products:{key:"products",required:!1,type:Array},categoryToBeDeleted:{key:"categoryToBeDeleted",required:!1,type:String}};v.setup=(e,a)=>{const t=e;return{toggleText:m(()=>{var n,p;return!!(((n=t==null?void 0:t.bundlesTemplate)==null?void 0:n.length)||((p=t==null?void 0:t.products)==null?void 0:p.length))})}};v.components=Object.assign({WarningSvg:R},v.components);var z=function(){var e=this,a=e.$createElement,t=e._self._c||a;return e.categoryToBeDeleted?t("div",{staticClass:"flex flex-col items-center justify-center space-y-8 px-5"},[t("BaseIcon",{staticClass:"mx-auto max-w-min lg:mx-0 lg:max-w-none",attrs:{color:"danger",shape:"round"}},[t("WarningSvg",{staticClass:"h-auto w-5"})],1),t("BaseTypography",{staticClass:"text-gray-500",attrs:{component:"h2",variant:"subtitle3"}},[e._v(" Are you sure you want to delete "),t("span",{staticClass:"text-red-500"},[e._v(e._s(e.categoryToBeDeleted))]),e._v(" category? "),e.toggleText?t("span",[e._v(" These bundle templates and products will be without category. ")]):e._e()]),e.toggleText?t("div",{staticClass:"grid grid-cols-1 sm:grid-cols-2 sm:gap-16"},[t("ul",{staticClass:"mx-auto"},[t("BaseTypography",{attrs:{component:"h2",variant:"subtitle3"}},[t("BaseTypography",{staticClass:"text-gray-00 pb-2 text-center",attrs:{component:"h2",variant:"subtitle3"}},[e._v(" Bundle Templates: ")]),e._l(e.bundlesTemplate,function(i,n){return t("li",{key:n,staticClass:"flex justify-center space-x-2 border border-gray-300 p-1"},[t("BaseTypography",{staticClass:"text-gray-500",attrs:{component:"span",variant:"p1"}},[e._v(" "+e._s(i)+" ")])],1)})],2)],1),t("ul",{staticClass:"mx-auto"},[t("BaseTypography",{attrs:{component:"h2",variant:"subtitle3"}},[t("BaseTypography",{staticClass:"pb-2 text-center",attrs:{component:"h2",variant:"subtitle3"}},[e._v(" Products: ")]),e._l(e.products,function(i,n){return t("li",{key:n,staticClass:"flex justify-center space-x-2 border border-gray-300 p-1"},[t("BaseTypography",{staticClass:"text-gray-500",attrs:{component:"span",variant:"p1"}},[e._v(" "+e._s(i)+" ")])],1)})],2)],1)]):e._e()],1):e._e()},G=[];const P={};var J=B(v,z,G,!1,U,null,null,null);function U(e){for(let a in P)this[a]=P[a]}const K=function(){return J.exports}(),f={};f.props={categories:{key:"categories",required:!0,type:Array}};f.setup=(e,a)=>{const t=e,{categories:i}=E(t),n=a.emit,p=F(),o=L(),x=[o.accessor(r=>{var l;return(l=r.id)==null?void 0:l.value},{id:"id",header:()=>"ID",enableColumnFilter:!1}),o.accessor("name",{header:()=>"Name",enableColumnFilter:!1}),o.accessor(r=>{var l;return(l=r.meta)==null?void 0:l.updatedAt},{id:"updatedAt",header:()=>"Last Updated",cell:r=>D(H,{props:{value:r.getValue(),format:"date"}}),enableColumnFilter:!1}),o.accessor("description",{header:()=>"Description",enableColumnFilter:!1}),o.display({id:"actions",header:"Actions",cell:({row:r})=>D(O,{props:{actions:[{id:"edit",action(){var l;p.push(`/admin/products/categories/${(l=r.original.id)==null?void 0:l.value}`)}},{id:"delete",action(){n("delete",r.original)}}]}})})];return{instance:Q(i,x)}};f.components=Object.assign({AppTanStackTable:V},f.components);var X=function(){var e=this,a=e.$createElement,t=e._self._c||a;return t("AppTanStackTable",{attrs:{table:e.instance}})},Y=[];const k={};var Z=B(f,X,Y,!1,ee,null,null,null);function ee(e){for(let a in k)this[a]=k[a]}const te=function(){return Z.exports}(),C={};C.setup=(e,a)=>{const t=h.list(),i=m(()=>t.data.value?t.data.value.sort((s,c)=>s.name.localeCompare(c.name)):[]),n=N(),p=h.delete(),o=T(),x=T();function S(s){var c;o.value={category:{...s}},x.value=(c=s==null?void 0:s.id)==null?void 0:c.value,b.value=!0}const r=m(()=>h.listIsolatedBundlesAndProducts(x.value)),l=m(()=>{var y,g,_,u;const s=(_=(g=(y=r.value)==null?void 0:y.data)==null?void 0:g.value)==null?void 0:_.bundleTemplates;return(u=s==null?void 0:s.map(d=>d==null?void 0:d.name))==null?void 0:u.sort((d,W)=>d.localeCompare(W))}),M=m(()=>{var y,g,_;const s=(_=(g=(y=r.value)==null?void 0:y.data)==null?void 0:g.value)==null?void 0:_.products;return s==null?void 0:s.map(u=>u==null?void 0:u.name).sort((u,d)=>u.localeCompare(d))}),$=m(()=>{var s,c;return(c=(s=o==null?void 0:o.value)==null?void 0:s.category)==null?void 0:c.name});async function j(){if(o.value)await p.mutateAsync(o.value),w(),n.success(`Category ${$.value}successfully deleted`);else throw new Error("Invalid request.")}const b=T(!1);function w(){b.value=!1}return{categories:i,setPayload:S,bundlesWithoutCategory:l,productsWithoutCategory:M,categoryToBeDeleted:$,deleteCategory:j,isModalVisible:b,closeModal:w}};C.components=Object.assign({PlusSvg:I,ProductCategoriesTable:te,BasicModal:q,ProductCategeoriesDeletionMessage:K},C.components);var ae=function(){var e=this,a=e.$createElement,t=e._self._c||a;return t("section",[t("BaseTablePageLayout",{scopedSlots:e._u([{key:"title",fn:function(){return[e._v("Product Categories")]},proxy:!0},{key:"button",fn:function(){return[t("BaseButton",{staticClass:"space-x-1",attrs:{to:"/admin/products/categories/new"}},[t("PlusSvg",{staticClass:"mr-1 w-5 xl:w-5"}),e._v(" Category ")],1)]},proxy:!0},{key:"table",fn:function(){return[t("ProductCategoriesTable",{attrs:{categories:e.categories},on:{delete:e.setPayload}})]},proxy:!0}])},[e._v(" productsWithoutCategory"+e._s(e.productsWithoutCategory)+" ")]),t("BasicModal",{directives:[{name:"show",rawName:"v-show",value:e.isModalVisible,expression:"isModalVisible"}],on:{close:e.closeModal},scopedSlots:e._u([{key:"body",fn:function(){return[t("div",{staticClass:"flex flex-col space-y-4"},[t("ProductCategeoriesDeletionMessage",{attrs:{"bundles-template":e.bundlesWithoutCategory,products:e.productsWithoutCategory,"category-to-be-deleted":e.categoryToBeDeleted}}),t("div",{staticClass:"flex justify-center py-6"},[t("BaseButton",{attrs:{"display-type":"danger",action:"secondary"},on:{click:e.deleteCategory}},[e._v(" Delete Category ")])],1)],1)]},proxy:!0}])})],1)},se=[];const A={};var oe=B(C,ae,se,!1,re,null,null,null);function re(e){for(let a in A)this[a]=A[a]}const ve=function(){return oe.exports}();export{ve as default};