import{S as c,u as l,a as d,c as m}from"./index.38f1c523.js";import{b_ as u,d as _,n as y}from"./index.c5897af8.js";import"./AppTanStackTable.c1ec335a.js";import"./createOnChangeFn.6c41eff7.js";import"./chevron-up.736f4142.js";import"./magnifying-glass.b7cbe8fe.js";import"./chevron-left.0808b01b.js";import"./TransitionExpand.03f4f6e9.js";import"./createSimpleTable.b82dc20a.js";const a={};a.setup=(e,s)=>{const t=u("id"),r=u("targetId"),n=l.read(t,r),o=d.read(t),p=_(()=>o.data.value?m(o.data.value.target.targetType):void 0);return{assets:n,displayName:p}};a.components=Object.assign({SupplyWisdomAssetsTable:c},a.components);var f=function(){var e=this,s=e.$createElement,t=e._self._c||s;return t("BaseTablePageLayout",{scopedSlots:e._u([{key:"overline",fn:function(){return[e._v("Rating Service 1")]},proxy:!0},{key:"title",fn:function(){return[e._v(" "+e._s(e.displayName?e.displayName.subType:void 0)+" Assets ")]},proxy:!0},{key:"table",fn:function(){return[t("BaseVueQuery",{attrs:{query:e.assets},scopedSlots:e._u([{key:"success",fn:function(r){var n=r.data;return[t("SupplyWisdomAssetsTable",{attrs:{value:n}})]}}])})]},proxy:!0}])})},v=[];const i={};var g=y(a,f,v,!1,S,null,null,null);function S(e){for(let s in i)this[s]=i[s]}const j=function(){return g.exports}();export{j as default};