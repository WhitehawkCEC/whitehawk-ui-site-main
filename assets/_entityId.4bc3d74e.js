import{E as l}from"./EntityIdHeader.ba4652d9.js";import{c7 as r,d as _,n as d}from"./index.0c8230bc.js";import{u as p}from"./useBlackKiteEntities.78b61661.js";const s={};s.setup=(t,n)=>{const e=r("id"),i=r("subscriptionId"),o=r("entityId"),c=p.list(e),u=_(()=>`/client/companies/${e.value}/subscriptions/${i.value}/suppliers`);return{entityId:o,entityList:c,link:u}};s.components=Object.assign({EntityIdHeader:l},s.components);var m=function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("section",{staticClass:"space-y-6"},[e("BaseVueQuery",{attrs:{query:t.entityList},scopedSlots:t._u([{key:"success",fn:function(i){var o=i.data;return[e("EntityIdHeader",{attrs:{link:t.link,"entity-id":t.entityId,value:o}})]}}])}),e("RouterView")],1)},y=[];const a={};var f=d(s,m,y,!1,v,null,null,null);function v(t){for(let n in a)this[n]=a[n]}const b=function(){return f.exports}();export{b as default};
