import{M as c}from"./MembersTable.e7f3828e.js";import{b_ as i,n as u}from"./index.038aef42.js";import{u as m}from"./useCompanyAccess.1f70eaf5.js";import"./UserGravatarDisplay.9a041276.js";import"./AppTanStackTable.c3455e24.js";import"./createOnChangeFn.dff7d6fb.js";import"./chevron-up.736f4142.js";import"./magnifying-glass.b7cbe8fe.js";import"./chevron-left.0808b01b.js";import"./TransitionExpand.d1a08f1e.js";import"./PermissionsBadge.8e93bffd.js";import"./createSimpleTable.2493876c.js";const r={};r.setup=(e,s)=>{const t=i("id"),o=m.list(t);return{id:t,access:o}};r.components=Object.assign({MembersTable:c},r.components);var p=function(){var e=this,s=e.$createElement,t=e._self._c||s;return t("BaseTablePageLayout",{scopedSlots:e._u([{key:"title",fn:function(){return[e._v("Members")]},proxy:!0},{key:"table",fn:function(){return[t("BaseVueQuery",{attrs:{query:e.access},scopedSlots:e._u([{key:"success",fn:function(o){var a=o.data;return[t("MembersTable",{attrs:{id:e.id,access:a,"has-permissions":!1}})]}}])})]},proxy:!0}])})},_=[];const n={};var l=u(r,p,_,!1,f,null,null,null);function f(e){for(let s in n)this[s]=n[s]}const B=function(){return l.exports}();export{B as default};