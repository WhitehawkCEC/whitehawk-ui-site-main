import{bs as y,br as _,c1 as c,c as f,n as v}from"./index.9aeab7fb.js";import{B as b,u as p,a as k}from"./BlackKiteEntitiesTable.879e583e.js";import{u as B}from"./useBlackKiteEntities.11c99c15.js";import"./AppTanStackTable.b82f486e.js";import"./createOnChangeFn.3ccfd969.js";import"./chevron-up.736f4142.js";import"./magnifying-glass.b7cbe8fe.js";import"./TransitionExpand.489681d6.js";import"./GradeLetterDisplay.c8479be4.js";import"./createSimpleTable.0dfae302.js";const n={};n.setup=(t,s)=>{const e=c("id"),a=c("subscriptionId"),i=p.get(e),r=p.set(e),o=B.list(e),u=k.list(e),d=f(()=>r.isLoading.value||o.isLoading.value||u.isLoading.value);async function m(){await r.mutateAsync()}return{id:e,subscriptionId:a,syncStatus:i,entities:o,summaries:u,isLoading:d,createSync:m}};n.components=Object.assign({BackButton:y,DateIsoStringDisplay:_,BlackKiteEntitiesTable:b},n.components);var g=function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("BaseTablePageLayout",{scopedSlots:t._u([{key:"backButton",fn:function(){return[e("BackButton",{attrs:{link:`/admin/companies/${t.id}/subscriptions/${t.subscriptionId}/suppliers`}})]},proxy:!0},{key:"overline",fn:function(){return[e("BaseVueQuery",{attrs:{query:t.syncStatus},scopedSlots:t._u([{key:"success",fn:function(a){var i=a.data;return[e("BaseTypography",{staticClass:"uppercase text-gray-500",attrs:{variant:"overline"}},[t._v(" Last Synced: "),e("DateIsoStringDisplay",{attrs:{value:i.meta.updatedAt}})],1)]}}])})]},proxy:!0},{key:"title",fn:function(){return[t._v("Black Kite Entities")]},proxy:!0},{key:"button",fn:function(){return[e("div",{staticClass:"space-y-1"},[e("BaseButton",{attrs:{shape:"rectangle",type:"button",disabled:t.isLoading},on:{click:t.createSync}},[t._v(" Update ")])],1)]},proxy:!0},{key:"table",fn:function(){return[e("BlackKiteEntitiesTable",{attrs:{id:t.id,"sub-id":t.subscriptionId,entities:t.entities.data.value||[],summaries:t.summaries.data.value||[]}})]},proxy:!0}])})},S=[];const l={};var x=v(n,g,S,!1,L,null,null,null);function L(t){for(let s in l)this[s]=l[s]}const A=function(){return x.exports}();export{A as default};
