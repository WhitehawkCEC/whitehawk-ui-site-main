import{S as w}from"./SubscriptionSuppliersTable.b84bdf1a.js";import{c8 as m,cg as T,d as i,al as h,ch as a,n as P}from"./index.4d0c918d.js";import{P as $}from"./index.b9dfe5fc.js";import"./AppTanStackTable.ab71ed06.js";import"./createOnChangeFn.fc80a571.js";import"./chevron-up.736f4142.js";import"./magnifying-glass.b7cbe8fe.js";import"./TransitionExpand.f165387d.js";import"./createSimpleTable.bd6185a4.js";const u={};u.setup=(t,n)=>{const r=m("id"),c=m("subscriptionId"),v=T.list(r,c),p=i(()=>v.data.value||[]),f=h(),b=i(()=>!!f.value.path.includes("peraton-test")),S=i(()=>$.value),y=i(()=>p.value.map(s=>{const e=S.value.find(o=>{var l,d;return((l=o.supplier)==null?void 0:l.name)===((d=s.supplier)==null?void 0:d.name)});return e?{...s,products:[...s.products,...e.products]}:s}));function I(s){const e=s==null?void 0:s.integration,o=`/admin/companies/${r.value}/subscriptions/${c.value}/integrations`;switch(e==null?void 0:e.type){case a.IntegrationType.BITSIGHT:return{id:"view",to:`${o}/1/companies/${e==null?void 0:e.id}/cyber-risk`};case a.IntegrationType.BLACK_KITE:return{id:"view",to:`${o}/2/entities/${e==null?void 0:e.id}/cyber-risk`};case a.IntegrationType.SUPPLY_WISDOM:return{id:"download",action(){},isDisabled:i(()=>!0)};case a.IntegrationType.PERATON:return{id:"view",to:`${o}/5/companies/${e==null?void 0:e.id}/risk-analytics`};default:throw new Error("Integration type is undefined.")}}return{overviews:p,shouldShowPeraton:b,merged:y,buildAction:I}};u.components=Object.assign({SubscriptionSuppliersTable:w},u.components);var x=function(){var t=this,n=t.$createElement,r=t._self._c||n;return r("BaseTablePageLayout",{scopedSlots:t._u([{key:"title",fn:function(){return[t._v("Subscription Suppliers")]},proxy:!0},{key:"table",fn:function(){return[r("SubscriptionSuppliersTable",{attrs:{value:t.shouldShowPeraton?t.merged:t.overviews,"build-action":t.buildAction}})]},proxy:!0}])})},E=[];const _={};var R=P(u,x,E,!1,A,null,null,null);function A(t){for(let n in _)this[n]=_[n]}const M=function(){return R.exports}();export{M as default};