import{S as w}from"./SubscriptionSuppliersTable.ed4074e4.js";import{c7 as m,cf as T,d as i,al as P,cg as a,n as h}from"./index.a3119a0b.js";import{P as $}from"./index.b1ea8c05.js";import"./AppTanStackTable.fe49f065.js";import"./createOnChangeFn.8f7c5b22.js";import"./chevron-up.736f4142.js";import"./magnifying-glass.b7cbe8fe.js";import"./TransitionExpand.c4dabd8d.js";import"./createSimpleTable.1c42ee1b.js";const u={};u.setup=(t,n)=>{const r=m("id"),c=m("subscriptionId"),v=T.list(r,c),p=i(()=>v.data.value||[]),f=P(),b=i(()=>!!f.value.path.includes("peraton-test")),S=i(()=>$.value),y=i(()=>p.value.map(s=>{const e=S.value.find(o=>{var l,d;return((l=o.supplier)==null?void 0:l.name)===((d=s.supplier)==null?void 0:d.name)});return e?{...s,products:[...s.products,...e.products]}:s}));function I(s){const e=s==null?void 0:s.integration,o=`/admin/companies/${r.value}/subscriptions/${c.value}/integrations`;switch(e==null?void 0:e.type){case a.IntegrationType.BITSIGHT:return{id:"view",to:`${o}/1/companies/${e==null?void 0:e.id}/cyber-risk`};case a.IntegrationType.BLACK_KITE:return{id:"view",to:`${o}/2/entities/${e==null?void 0:e.id}/cyber-risk`};case a.IntegrationType.SUPPLY_WISDOM:return{id:"download",action(){},isDisabled:i(()=>!0)};case a.IntegrationType.PERATON:return{id:"view",to:`${o}/5/companies/${e==null?void 0:e.id}/risk-analytics`};default:throw new Error("Integration type is undefined.")}}return{overviews:p,shouldShowPeraton:b,merged:y,buildAction:I}};u.components=Object.assign({SubscriptionSuppliersTable:w},u.components);var x=function(){var t=this,n=t.$createElement,r=t._self._c||n;return r("BaseTablePageLayout",{scopedSlots:t._u([{key:"title",fn:function(){return[t._v("Subscription Suppliers")]},proxy:!0},{key:"table",fn:function(){return[r("SubscriptionSuppliersTable",{attrs:{value:t.shouldShowPeraton?t.merged:t.overviews,"build-action":t.buildAction}})]},proxy:!0}])})},E=[];const _={};var R=h(u,x,E,!1,A,null,null,null);function A(t){for(let n in _)this[n]=_[n]}const M=function(){return R.exports}();export{M as default};
