import{br as L,n as R,b$ as A,cF as E,c,cG as $,cH as M,cI as h,cJ as B,cK as G}from"./index.fc55cc4e.js";import{S as T}from"./SyncInfoDescriptionList.b61290fe.js";const u={};u.props={syncStatus:{key:"syncStatus",required:!0,type:null}};u.setup=(t,s)=>({});u.components=Object.assign({SyncInfoDescriptionList:T,DateIsoStringDisplay:L},u.components);var j=function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("BaseSimpleCard",{staticClass:"grid gap-4 p-4 lg:grid-cols-2"},[e("SyncInfoDescriptionList",{scopedSlots:t._u([{key:"title",fn:function(){return[t._v("Mapped Ecosystem:")]},proxy:!0},{key:"data",fn:function(){return[t._v(" "+t._s(t.syncStatus.ecosystem?t.syncStatus.ecosystem:"-")+" ")]},proxy:!0}])}),e("SyncInfoDescriptionList",{scopedSlots:t._u([{key:"title",fn:function(){return[t._v("Mapped Asset:")]},proxy:!0},{key:"data",fn:function(){return[t._v(" "+t._s(t.syncStatus.asset?t.syncStatus.asset:"-")+" ")]},proxy:!0}])}),e("SyncInfoDescriptionList",{scopedSlots:t._u([{key:"title",fn:function(){return[t._v("Most Recent Black Kite Sync:")]},proxy:!0},{key:"data",fn:function(){return[t.syncStatus.blackKiteSync?e("DateIsoStringDisplay",{attrs:{value:t.syncStatus.blackKiteSync,format:"date"}}):[t._v("-")]]},proxy:!0}])}),e("SyncInfoDescriptionList",{scopedSlots:t._u([{key:"title",fn:function(){return[t._v("Entities Synced:")]},proxy:!0},{key:"data",fn:function(){return[t._v(" "+t._s(t.syncStatus.blackKiteReports?t.syncStatus.blackKiteReports:"-")+" ")]},proxy:!0}])}),e("SyncInfoDescriptionList",{scopedSlots:t._u([{key:"title",fn:function(){return[t._v("Most Recent CyberOne Sync:")]},proxy:!0},{key:"data",fn:function(){return[t.syncStatus.cyberOneSync?e("DateIsoStringDisplay",{attrs:{value:t.syncStatus.cyberOneSync,format:"date"}}):[t._v("-")]]},proxy:!0}])}),e("SyncInfoDescriptionList",{scopedSlots:t._u([{key:"title",fn:function(){return[t._v("Assets Synced:")]},proxy:!0},{key:"data",fn:function(){return[t._v(" "+t._s(t.syncStatus.cyberOneReports?t.syncStatus.cyberOneReports:"-")+" ")]},proxy:!0}])}),e("SyncInfoDescriptionList",{scopedSlots:t._u([{key:"title",fn:function(){return[t._v("Most Recent VRM Dashboard Sync:")]},proxy:!0},{key:"data",fn:function(){return[t.syncStatus.mostRecentSync?e("DateIsoStringDisplay",{attrs:{value:t.syncStatus.mostRecentSync,format:"date"}}):[t._v("-")]]},proxy:!0}])}),e("SyncInfoDescriptionList",{scopedSlots:t._u([{key:"title",fn:function(){return[t._v("Reports Synced:")]},proxy:!0},{key:"data",fn:function(){return[t._v(" "+t._s(t.syncStatus.syncedReports?t.syncStatus.syncedReports:"-")+" ")]},proxy:!0}])})],1)},F=[];const k={};var P=R(u,j,F,!1,q,null,null,null);function q(t){for(let s in k)this[s]=k[s]}const z=function(){return P.exports}(),y={};y.setup=(t,s)=>{const e=A("id"),g=E.get(e),x=c(()=>{var n;return(n=g.data.value)==null?void 0:n.mappedEcosystemId}),D=$.get(e),I=c(()=>{var n;return(n=D.data.value)==null?void 0:n.mappedAssetId}),C=M.get(e),i=c(()=>C.data.value),O=h.get(e),l=c(()=>O.data.value),p=B.list(e),K=c(()=>p.data.value?p.data.value.sort((n,a)=>{let r="",o="";return n.lastSynced&&n.lastSynced.value&&a.lastSynced&&a.lastSynced.value&&(r=n.lastSynced.value,o=a.lastSynced.value),r.localeCompare(o)}):[]),S=c(()=>K.value.find(n=>n.syncType===G.SyncType.BLACK_KITE_TO_CYBER_ONE));return{syncStatus:c(()=>{var n,a,r,o,_,f,d,v,m;return{ecosystem:x.value,asset:I.value,blackKiteSync:(a=(n=i.value)==null?void 0:n.lastSynced)==null?void 0:a.value,blackKiteReports:(r=i.value)==null?void 0:r.reportsSynced,cyberOneSync:(_=(o=l.value)==null?void 0:o.lastSynced)==null?void 0:_.value,cyberOneReports:(f=l.value)==null?void 0:f.reportsSynced,mostRecentSync:(v=(d=S.value)==null?void 0:d.lastSynced)==null?void 0:v.value,syncedReports:(m=S.value)==null?void 0:m.numSynced}})}};y.components=Object.assign({CyberRiskRatingSyncStatusDisplay:z},y.components);var H=function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("BaseTablePageLayout",{scopedSlots:t._u([{key:"title",fn:function(){return[t._v("Cyber Risk Rating Sync")]},proxy:!0},{key:"table",fn:function(){return[e("CyberRiskRatingSyncStatusDisplay",{attrs:{"sync-status":t.syncStatus}})]},proxy:!0}])})},J=[];const b={};var N=R(y,H,J,!1,V,null,null,null);function V(t){for(let s in b)this[s]=b[s]}const U=function(){return N.exports}();export{U as default};
