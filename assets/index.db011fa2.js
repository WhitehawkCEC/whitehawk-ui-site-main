import{S as _}from"./SyncInfoDescriptionList.81caf314.js";import{n as u,c0 as l,cI as f,cH as y}from"./index.ed68c768.js";const s={};s.props={supplyWisdomConfig:{key:"supplyWisdomConfig",required:!0,type:null},cyberOneConfig:{key:"cyberOneConfig",required:!0,type:null}};s.setup=(n,e)=>({});s.components=Object.assign({SyncInfoDescriptionList:_},s.components);var d=function(){var n=this,e=n.$createElement,t=n._self._c||e;return t("BaseSimpleCard",{staticClass:"grid gap-4 p-4 lg:grid-cols-2"},[t("SyncInfoDescriptionList",{scopedSlots:n._u([{key:"title",fn:function(){return[n._v("Mapped Target:")]},proxy:!0},{key:"data",fn:function(){return[n._v(" "+n._s(n.supplyWisdomConfig.targetName?n.supplyWisdomConfig.targetName:"-")+" ")]},proxy:!0}])}),t("SyncInfoDescriptionList",{scopedSlots:n._u([{key:"title",fn:function(){return[n._v("Mapped Account:")]},proxy:!0},{key:"data",fn:function(){return[n._v(" "+n._s(n.cyberOneConfig.accountId?n.cyberOneConfig.accountId:"-")+" ")]},proxy:!0}])})],1)},g=[];const i={};var m=u(s,d,g,!1,v,null,null,null);function v(n){for(let e in i)this[e]=i[e]}const C=function(){return m.exports}(),o={};o.setup=(n,e)=>{const t=l("id");return{queries:[f.get(t),y.get(t)]}};o.components=Object.assign({BusinessRatingSyncInfoDisplay:C},o.components);var S=function(){var n=this,e=n.$createElement,t=n._self._c||e;return t("BaseTablePageLayout",{scopedSlots:n._u([{key:"title",fn:function(){return[n._v("Business Rating Sync")]},proxy:!0},{key:"table",fn:function(){return[t("BaseVueQueries",{attrs:{queries:n.queries},scopedSlots:n._u([{key:"success",fn:function(r){var a=r[0],p=r[1];return[t("BusinessRatingSyncInfoDisplay",{attrs:{"supply-wisdom-config":a,"cyber-one-config":p}})]}}])})]},proxy:!0}])})},x=[];const c={};var b=u(o,S,x,!1,I,null,null,null);function I(n){for(let e in c)this[e]=c[e]}const O=function(){return b.exports}();export{O as default};
