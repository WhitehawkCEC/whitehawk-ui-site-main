import{M as c}from"./MembersTable.b61c29aa.js";import{c1 as i,n as u}from"./index.774779f3.js";import{u as m}from"./useCompanyAccess.d7900fbc.js";import"./UserGravatarDisplay.3d340a85.js";import"./AppTanStackTable.2809ab19.js";import"./createOnChangeFn.ff3c4275.js";import"./chevron-up.736f4142.js";import"./magnifying-glass.b7cbe8fe.js";import"./TransitionExpand.3d593e31.js";import"./PermissionsBadge.aed8d985.js";import"./createSimpleTable.8f2aff80.js";const r={};r.setup=(e,s)=>{const t=i("id"),n=m.list(t);return{id:t,access:n}};r.components=Object.assign({MembersTable:c},r.components);var p=function(){var e=this,s=e.$createElement,t=e._self._c||s;return t("BaseTablePageLayout",{scopedSlots:e._u([{key:"title",fn:function(){return[e._v("Members")]},proxy:!0},{key:"table",fn:function(){return[t("BaseVueQuery",{attrs:{query:e.access},scopedSlots:e._u([{key:"success",fn:function(n){var a=n.data;return[t("MembersTable",{attrs:{id:e.id,access:a,"has-permissions":!1}})]}}])})]},proxy:!0}])})},_=[];const o={};var l=u(r,p,_,!1,f,null,null,null);function f(e){for(let s in o)this[s]=o[s]}const j=function(){return l.exports}();export{j as default};