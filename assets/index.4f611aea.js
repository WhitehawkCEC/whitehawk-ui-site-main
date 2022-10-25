import{B as F}from"./BasicConfirmModal.e5cabc25.js";import{A as I,T as D}from"./AppTanStackTable.716c407f.js";import{I as R}from"./IsoDateTimeDisplay.d1bb4f43.js";import{c as V}from"./createOnChangeFn.0db18275.js";import{bR as j,aI as E,aS as $,n as S,bQ as h,c as p,aF as W,r as x}from"./index.5601926e.js";import{u as Q}from"./createSimpleTable.73cc7d1f.js";import"./exclamation-triangle.54812a62.js";import"./BasicModal.ba464544.js";import"./magnifying-glass.b7cbe8fe.js";import"./TransitionExpand.22dffc10.js";import"./chevron-up.736f4142.js";const f={};f.props={categories:{key:"categories",required:!0,type:Array}};f.setup=(e,s)=>{const a=e,{categories:g}=j(a),y=s.emit,C=E(),o=V(),v=[o.accessor(n=>{var r;return(r=n.id)==null?void 0:r.value},{id:"id",header:()=>"ID",enableColumnFilter:!1}),o.accessor("name",{header:()=>"Name",enableColumnFilter:!1}),o.accessor(n=>{var r;return(r=n.meta)==null?void 0:r.updatedAt},{id:"updatedAt",header:()=>"Last Updated",cell:n=>$(R,{props:{value:n.getValue(),format:"date"}}),enableColumnFilter:!1}),o.accessor("description",{header:()=>"Description",enableColumnFilter:!1}),o.display({id:"actions",header:"Actions",cell:({row:n})=>$(D,{props:{actions:[{id:"edit",action(){var r;C.push(`/admin/products/categories/${(r=n.original.id)==null?void 0:r.value}`)}},{id:"delete",action(){y("delete",n.original)}}]}})})];return{instance:Q(g,v)}};f.components=Object.assign({AppTanStackTable:I},f.components);var q=function(){var e=this,s=e.$createElement,a=e._self._c||s;return a("AppTanStackTable",{attrs:{table:e.instance}})},H=[];const M={};var L=S(f,q,H,!1,O,null,null,null);function O(e){for(let s in M)this[s]=M[s]}const z=function(){return L.exports}(),_={};_.setup=(e,s)=>{const a=h.list(),g=p(()=>a.data.value?a.data.value.sort((t,c)=>t.name.localeCompare(c.name)):[]),y=W(),C=h.delete(),o=x(),v=x();function T(t){var c;o.value={category:{...t}},v.value=(c=t==null?void 0:t.id)==null?void 0:c.value,b.value=!0}const n=p(()=>h.listIsolatedBundlesAndProducts(v.value)),r=p(()=>{var u,d,m,l;const t=(m=(d=(u=n.value)==null?void 0:u.data)==null?void 0:d.value)==null?void 0:m.bundleTemplates;return(l=t==null?void 0:t.map(i=>i==null?void 0:i.name))==null?void 0:l.sort((i,k)=>i.localeCompare(k))}),w=p(()=>{var u,d,m;const t=(m=(d=(u=n.value)==null?void 0:u.data)==null?void 0:d.value)==null?void 0:m.products;return t==null?void 0:t.map(l=>l==null?void 0:l.name).sort((l,i)=>l.localeCompare(i))}),A=p(()=>{var t,c;return(c=(t=o==null?void 0:o.value)==null?void 0:t.category)==null?void 0:c.name});async function B(){if(o.value)await C.mutateAsync(o.value),P(),y.success(`Category ${A.value}successfully deleted`);else throw new Error("Invalid request.")}const b=x(!1);function P(){b.value=!1}return{categories:g,setPayload:T,bundlesWithoutCategory:r,productsWithoutCategory:w,categoryName:A,deleteCategory:B,isModalVisible:b,closeModal:P}};_.components=Object.assign({ProductCategoriesTable:z,BasicConfirmModal:F},_.components);var U=function(){var e=this,s=e.$createElement,a=e._self._c||s;return a("section",[a("BaseTablePageLayout",{scopedSlots:e._u([{key:"title",fn:function(){return[e._v("Product Categories")]},proxy:!0},{key:"button",fn:function(){return[a("BaseButton",{staticClass:"space-x-1",attrs:{to:"/admin/products/categories/new"}},[a("PlusSvg",{staticClass:"mr-1 w-5 xl:w-5"}),e._v(" Category ")],1)]},proxy:!0},{key:"table",fn:function(){return[a("ProductCategoriesTable",{attrs:{categories:e.categories},on:{delete:e.setPayload}})]},proxy:!0}])}),a("BasicConfirmModal",{directives:[{name:"show",rawName:"v-show",value:e.isModalVisible,expression:"isModalVisible"}],attrs:{name:e.categoryName,"bundles-template":e.bundlesWithoutCategory,products:e.productsWithoutCategory},on:{click:e.deleteCategory,close:e.closeModal}})],1)},G=[];const N={};var J=S(_,U,G,!1,K,null,null,null);function K(e){for(let s in N)this[s]=N[s]}const le=function(){return J.exports}();export{le as default};