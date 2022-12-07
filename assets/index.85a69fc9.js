import{aT as S,aD as $,ag as j,aP as h,aQ as x,bs as q,aO as I,n as M,c as g,aK as N,aF as A,aS as F,bV as R,an as E,r as C}from"./index.51cd6e30.js";import{B as O}from"./BasicConfirmModal.8b14222c.js";import{A as L,T as z}from"./AppTanStackTable.7b2dbe87.js";import{c as H}from"./createOnChangeFn.58bfa49a.js";import{u as U}from"./useProducts.10283bdd.js";import{u as X}from"./createSimpleTable.0d891743.js";import{u as w}from"./useManufacturers.0b2a59c0.js";import"./BasicModal.f061aa35.js";import"./magnifying-glass.b7cbe8fe.js";import"./TransitionExpand.744b8447.js";import"./chevron-up.736f4142.js";const T={create(){const e=S();return $(a=>h.post(`${x}/featured-manufacturers`,a).then(t=>t.data),{onSuccess(){e.invalidateQueries(["manufacturers"],{exact:!0})}})},delete(){const e=S();return $(a=>h.delete(`${x}/featured-manufacturers/${a}`).then(t=>t.data),{onSuccess(){e.invalidateQueries(["manufacturers"],{exact:!0})}})},list(){return j(["featured-manufacturers"],()=>h.get(`${x}/featured-manufacturers`).then(e=>e.data))}},l={};l.props={value:{key:"value",required:!1,type:String},remove:{key:"remove",required:!0,type:Function}};l.setup=(e,a)=>({});l.components=Object.assign({DateIsoStringDisplay:q,XSvg:I},l.components);var K=function(){var e=this,a=e.$createElement,t=e._self._c||a;return e.value?t("div",{staticClass:"flex items-center space-x-1"},[t("DateIsoStringDisplay",{staticClass:"inline-flex items-center rounded bg-indigo-100 px-2 py-0.5 text-xs font-medium uppercase leading-4 tracking-widest text-indigo-800",attrs:{value:e.value,format:"date"}}),t("BaseIcon",{attrs:{color:"danger",size:"small",action:"secondary"},on:{click:e.remove}},[t("XSvg",{staticClass:"w-3"})],1)],1):e._e()},G=[];const k={};var J=M(l,K,G,!1,W,null,null,null);function W(e){for(let a in k)this[a]=k[a]}const Y=function(){return J.exports}(),d={};d.props={manufacturers:{key:"manufacturers",required:!0,type:Array}};d.setup=(e,a)=>{const t=e,r=a.emit,o=g(()=>t.manufacturers.map(s=>{const{id:n,name:y,url:Q,featured:V}=s;return{id:n,name:y,url:Q,featured:V,productCount:c(n)}}));function c(s){const n=[];return i.value.map(y=>{y.manufacturer.id===s&&n.push(y)}),n.length}const f=U.list(),i=g(()=>f.data.value||[]),m=N(),p=A(),_=T.create(),v=T.delete(),u=H(),P=[u.accessor("id",{header:()=>"ID",enableColumnFilter:!1}),u.accessor("name",{header:()=>"Name",enableColumnFilter:!1}),u.accessor("url",{header:()=>"URL",enableColumnFilter:!1}),u.accessor(s=>s.featured,{id:"featured",header:()=>"Featured",cell:s=>F(Y,{props:{value:s.getValue(),async remove(){await v.mutateAsync(s.row.original.id)&&p.success("Featured removed successfully.")}}}),enableColumnFilter:!1}),u.accessor(s=>s.productCount,{id:"productCount",header:()=>"Product Count",enableColumnFilter:!1}),u.display({id:"actions",header:"Actions",cell:({row:s})=>F(z,{props:{actions:[{id:"view",action(){m.push(`/admin/manufacturers/${s.original.id}/products`)}},{id:"edit",action(){m.push(`/admin/manufacturers/${s.original.id}`)}},{id:"delete",action(){r("delete",s.original)},isDisabled:g(()=>s.original.productCount>0)},{id:"setFeatured",async action(){await _.mutateAsync({id:s.original.id,name:s.original.name})&&p.success("Successfully featured manufacturer.")},isDisabled:g(()=>s.original.featured!==void 0)}]}})})];return{instance:X(o,P)}};d.components=Object.assign({AppTanStackTable:L},d.components);var Z=function(){var e=this,a=e.$createElement,t=e._self._c||a;return t("AppTanStackTable",{attrs:{table:e.instance}})},ee=[];const D={};var te=M(d,Z,ee,!1,ae,null,null,null);function ae(e){for(let a in D)this[a]=D[a]}const se=function(){return te.exports}(),b={};b.setup=(e,a)=>{const t=w.list(),r=A(),o=w.delete(),c=C(""),f=C(""),i=C(!1);function m(v){c.value=v.id,f.value=v.name,i.value=!0}async function p(){c?(await o.mutateAsync(c.value),_(),r.success("Successfully deleted manufacturer.")):r.error("Something went wrong.")}function _(){i.value=!1}return{manufacturers:t,manufacturerName:f,isModalVisible:i,toggleModal:m,deleteManufacturer:p,closeModal:_}};b.components=Object.assign({BaseTablePageLayout:R,PlusSvg:E,ManufacturersTable:se,BasicConfirmModal:O},b.components);var ne=function(){var e=this,a=e.$createElement,t=e._self._c||a;return t("section",[t("BaseTablePageLayout",{scopedSlots:e._u([{key:"title",fn:function(){return[e._v("Manufacturers")]},proxy:!0},{key:"button",fn:function(){return[t("BaseButton",{staticClass:"w-full space-x-2 md:w-auto",attrs:{to:"/admin/manufacturers/new"}},[t("PlusSvg",{staticClass:"h-auto w-4 xl:w-5"}),t("span",[e._v("Manufacturer")])],1)]},proxy:!0},{key:"table",fn:function(){return[t("BaseVueQuery",{attrs:{query:e.manufacturers},scopedSlots:e._u([{key:"success",fn:function(r){var o=r.data;return[t("ManufacturersTable",{attrs:{manufacturers:o},on:{delete:e.toggleModal}})]}}])})]},proxy:!0}])}),t("BasicConfirmModal",{directives:[{name:"show",rawName:"v-show",value:e.isModalVisible,expression:"isModalVisible"}],attrs:{name:e.manufacturerName},on:{delete:e.deleteManufacturer,close:e.closeModal}})],1)},re=[];const B={};var ue=M(b,ne,re,!1,oe,null,null,null);function oe(e){for(let a in B)this[a]=B[a]}const he=function(){return ue.exports}();export{he as default};
