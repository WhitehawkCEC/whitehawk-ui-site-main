import{bT as h,aS as C,n as b,an as S,bX as _,aF as T,r as d}from"./index.d0befb50.js";import{B as I}from"./BasicConfirmModal.66f98b84.js";import{A as $,T as M}from"./AppTanStackTable.ca34eb6c.js";import{c as w}from"./createOnChangeFn.a792e913.js";import{u as g}from"./createSimpleTable.4c02c4c8.js";import"./BasicModal.fdc96946.js";import"./magnifying-glass.b7cbe8fe.js";import"./TransitionExpand.32f5b016.js";import"./chevron-up.736f4142.js";const i={};i.props={value:{key:"value",required:!0,type:Array}};i.setup=(e,s)=>{const t=e,r=s.emit,{value:n}=h(t),a=w(),u=[a.accessor("id",{header:()=>"ID",enableColumnFilter:!1}),a.accessor("name",{header:()=>"Name",enableColumnFilter:!1}),a.display({id:"actions",header:"Actions",cell:({row:l})=>{var o;return C(M,{props:{actions:[{id:"edit",to:`/admin/industries/${(o=l.original.id)==null?void 0:o.value}`},{id:"delete",action(){r("delete",l.original)}}]}})}})];return{instance:g(n,u)}};i.components=Object.assign({AppTanStackTable:$},i.components);var k=function(){var e=this,s=e.$createElement,t=e._self._c||s;return t("AppTanStackTable",{attrs:{table:e.instance}})},A=[];const v={};var B=b(i,k,A,!1,F,null,null,null);function F(e){for(let s in v)this[s]=v[s]}const N=function(){return B.exports}(),c={};c.setup=(e,s)=>{const t=_.list(),r=T(),n=d(),a=d();function u(f){n.value={id:f.id};const{name:x}=f;a.value=x,o.value=!0}const m=_.delete();async function l(){if(n.value)await m.mutateAsync(n.value),r.success(`Industry ${a.value}successfully deleted`);else throw new Error("Invalid request.");p()}const o=d(!1);function p(){o.value=!1}return{industriesQuery:t,industryName:a,setPayload:u,deleteIndustry:l,isModalVisible:o,closeModal:p}};c.components=Object.assign({PlusSvg:S,CompanyIndustriesTable:N,BasicConfirmModal:I},c.components);var P=function(){var e=this,s=e.$createElement,t=e._self._c||s;return t("section",[t("BaseTablePageLayout",{scopedSlots:e._u([{key:"title",fn:function(){return[e._v("Company Industries")]},proxy:!0},{key:"button",fn:function(){return[t("BaseButton",{staticClass:"space-x-1",attrs:{to:"/admin/industries/new"}},[t("PlusSvg",{staticClass:"mr-1 w-5 xl:w-5"}),t("span",[e._v("Industry")])],1)]},proxy:!0},{key:"table",fn:function(){return[t("BaseVueQuery",{attrs:{query:e.industriesQuery},scopedSlots:e._u([{key:"success",fn:function(r){var n=r.data;return[t("CompanyIndustriesTable",{attrs:{value:n},on:{delete:e.setPayload}})]}}])})]},proxy:!0}])}),t("BasicConfirmModal",{directives:[{name:"show",rawName:"v-show",value:e.isModalVisible,expression:"isModalVisible"}],attrs:{name:e.industryName},on:{delete:e.deleteIndustry,close:e.closeModal}})],1)},V=[];const y={};var j=b(c,P,V,!1,E,null,null,null);function E(e){for(let s in y)this[s]=y[s]}const G=function(){return j.exports}();export{G as default};
