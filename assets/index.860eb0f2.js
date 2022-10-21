import{aI as C,c as b,aS as F,n as T,ao as S,bK as h,aF as $,r as v}from"./index.1e14903e.js";import{B as A}from"./BasicConfirmModal.e1849fa7.js";import{A as M,T as P}from"./AppTanStackTable.99f0b695.js";import{I as k}from"./IsoDateTimeDisplay.449df1a9.js";import{c as B}from"./createOnChangeFn.324b2abc.js";import{u as I}from"./createSimpleTable.e9e69dd6.js";import"./exclamation-triangle.54812a62.js";import"./BasicModal.6023b17d.js";import"./magnifying-glass.b7cbe8fe.js";import"./TransitionExpand.65a9daeb.js";import"./chevron-up.736f4142.js";const c={};c.props={features:{key:"features",required:!0,type:Array}};c.setup=(e,a)=>{const s=e,p=a.emit,m=C(),f=b(()=>s.features),n=B(),_=[n.accessor(t=>{var o;return(o=t.id)==null?void 0:o.value},{id:"id",header:()=>"ID",enableColumnFilter:!1}),n.accessor("name",{id:"name",header:()=>"Feature",enableColumnFilter:!1}),n.accessor(t=>{var o;return(o=t.meta)==null?void 0:o.updatedAt},{id:"updatedAt",header:()=>"Last Updated",cell:t=>F(k,{props:{value:t.getValue(),format:"date"}}),enableColumnFilter:!1}),n.accessor("description",{id:"description",header:()=>"Description",enableColumnFilter:!1}),n.display({id:"actions",header:"Actions",cell:({row:t})=>F(P,{props:{actions:[{id:"edit",action(){var o;m.push(`/admin/products/features/${(o=t.original.id)==null?void 0:o.value}`)}},{id:"delete",action(){if(t.original&&t.original.id){const o=t.original.id.value,i=t.original.name,u=t.original.description;p("delete",{id:{value:o},name:i,description:u})}}}]}})})];return{instance:I(f,_)}};c.components=Object.assign({AppTanStackTable:M},c.components);var w=function(){var e=this,a=e.$createElement,s=e._self._c||a;return s("AppTanStackTable",{attrs:{table:e.instance}})},D=[];const x={};var V=T(c,w,D,!1,j,null,null,null);function j(e){for(let a in x)this[a]=x[a]}const E=function(){return V.exports}(),d={};d.setup=(e,a)=>{const s=h.list(),p=b(()=>{var r;return((r=s.data.value)==null?void 0:r.productFeatures)||[]}),m=$(),f=h.delete(),n=v(),_=v();function y(r){var l;n.value={productFeature:{...r}},_.value=(l=r==null?void 0:r.id)==null?void 0:l.value,i.value=!0}const t=b(()=>{var r,l;return(l=(r=n==null?void 0:n.value)==null?void 0:r.productFeature)==null?void 0:l.name});async function o(){if(n.value)await f.mutateAsync(n.value),u(),m.success(`Feature ${t.value}successfully deleted`);else throw new Error("Invalid request.")}const i=v(!1);function u(){i.value=!1}return{features:p,setPayload:y,featureName:t,deleteFeature:o,isModalVisible:i,closeModal:u}};d.components=Object.assign({PlusSvg:S,ProductFeaturesTable:E,BasicConfirmModal:A},d.components);var N=function(){var e=this,a=e.$createElement,s=e._self._c||a;return s("section",[s("BaseTablePageLayout",{scopedSlots:e._u([{key:"title",fn:function(){return[e._v("Product Features")]},proxy:!0},{key:"button",fn:function(){return[s("BaseButton",{staticClass:"space-x-1",attrs:{to:"/admin/products/features/new"}},[s("PlusSvg",{staticClass:"mr-1 w-5 xl:w-5"}),e._v(" Feature ")],1)]},proxy:!0},{key:"table",fn:function(){return[s("ProductFeaturesTable",{attrs:{features:e.features},on:{delete:e.setPayload}})]},proxy:!0}])}),s("BasicConfirmModal",{directives:[{name:"show",rawName:"v-show",value:e.isModalVisible,expression:"isModalVisible"}],attrs:{name:e.featureName},on:{delete:e.deleteFeature,close:e.closeModal}})],1)},R=[];const g={};var q=T(d,N,R,!1,H,null,null,null);function H(e){for(let a in g)this[a]=g[a]}const Z=function(){return q.exports}();export{Z as default};
