import{S as I}from"./SubscriptionSuppliersTable.017360e3.js";import{ca as m,ci as w,d as i,cj as a,n as P}from"./index.b0bcf7b8.js";import{P as T}from"./index.62a3aacf.js";import"./AppTanStackTable.cd9aeee9.js";import"./createOnChangeFn.f8dcdac4.js";import"./chevron-up.736f4142.js";import"./magnifying-glass.b7cbe8fe.js";import"./arrow-down-tray.793d581e.js";import"./createSimpleTable.5fe7daf8.js";const c={};c.setup=(t,r)=>{const s=m("id"),u=m("subscriptionId"),v=w.list(s,u),p=i(()=>v.data.value||[]),f=i(()=>s.value==="peraton-test"),b=i(()=>T.value),y=i(()=>p.value.map(n=>{const e=b.value.find(o=>{var l,d;return((l=o.supplier)==null?void 0:l.name)===((d=n.supplier)==null?void 0:d.name)});return e?{...n,products:[...n.products,...e.products]}:n}));function S(n){const e=n==null?void 0:n.integration,o=`/admin/companies/${s.value}/subscriptions/${u.value}/integrations`;switch(e==null?void 0:e.type){case a.IntegrationType.BITSIGHT:return{id:"view",to:`${o}/1/companies/${e==null?void 0:e.id}/cyber-risk`};case a.IntegrationType.BLACK_KITE:return{id:"view",to:`${o}/2/entities/${e==null?void 0:e.id}/cyber-risk`};case a.IntegrationType.SUPPLY_WISDOM:return{id:"download",action(){},isDisabled:i(()=>!0)};case a.IntegrationType.PERATON:return{id:"view",to:`${o}/5/companies/${e==null?void 0:e.id}/risk-analytics`};default:throw new Error("Integration type is undefined.")}}return{overviews:p,shouldShowPeraton:f,merged:y,buildAction:S}};c.components=Object.assign({SubscriptionSuppliersTable:I},c.components);var h=function(){var t=this,r=t.$createElement,s=t._self._c||r;return s("BaseTablePageLayout",{scopedSlots:t._u([{key:"title",fn:function(){return[t._v("Portfolio Suppliers")]},proxy:!0},{key:"table",fn:function(){return[s("SubscriptionSuppliersTable",{attrs:{value:t.shouldShowPeraton?t.merged:t.overviews,"build-action":t.buildAction}})]},proxy:!0}])})},$=[];const _={};var x=P(c,h,$,!1,E,null,null,null);function E(t){for(let r in _)this[r]=_[r]}const D=function(){return x.exports}();export{D as default};
