import{M as c}from"./MembersTable.a36531d2.js";import{b$ as i,n as u}from"./index.2f8dadb3.js";import{u as m}from"./useCompanyAccess.4fddd287.js";import"./UserGravatarDisplay.67cc6ae7.js";import"./AppTanStackTable.65b4fe56.js";import"./createOnChangeFn.b706955f.js";import"./chevron-up.736f4142.js";import"./magnifying-glass.b7cbe8fe.js";import"./chevron-left.0808b01b.js";import"./TransitionExpand.04ab59f6.js";import"./PermissionsBadge.7cd5b788.js";import"./createSimpleTable.60dbeec9.js";const r={};r.setup=(e,s)=>{const t=i("id"),o=m.list(t);return{id:t,access:o}};r.components=Object.assign({MembersTable:c},r.components);var p=function(){var e=this,s=e.$createElement,t=e._self._c||s;return t("BaseTablePageLayout",{scopedSlots:e._u([{key:"title",fn:function(){return[e._v("Members")]},proxy:!0},{key:"table",fn:function(){return[t("BaseVueQuery",{attrs:{query:e.access},scopedSlots:e._u([{key:"success",fn:function(o){var a=o.data;return[t("MembersTable",{attrs:{id:e.id,access:a,"has-permissions":!1}})]}}])})]},proxy:!0}])})},_=[];const n={};var l=u(r,p,_,!1,f,null,null,null);function f(e){for(let s in n)this[s]=n[s]}const B=function(){return l.exports}();export{B as default};