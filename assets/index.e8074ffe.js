import{br as W,n as R,b$ as A,cL as M,c,cG as $,cM as h,cI as B,cJ as T,cK as G}from"./index.fc55cc4e.js";import{S as j}from"./SyncInfoDescriptionList.b61290fe.js";const u={};u.props={syncStatus:{key:"syncStatus",required:!0,type:null}};u.setup=(t,s)=>({});u.components=Object.assign({SyncInfoDescriptionList:j,DateIsoStringDisplay:W},u.components);var E=function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("BaseSimpleCard",{staticClass:"grid gap-4 p-4 lg:grid-cols-2"},[e("SyncInfoDescriptionList",{scopedSlots:t._u([{key:"title",fn:function(){return[t._v("Mapped Target:")]},proxy:!0},{key:"data",fn:function(){return[t._v(" "+t._s(t.syncStatus.target?t.syncStatus.target:"-")+" ")]},proxy:!0}])}),e("SyncInfoDescriptionList",{scopedSlots:t._u([{key:"title",fn:function(){return[t._v("Mapped Asset:")]},proxy:!0},{key:"data",fn:function(){return[t._v(" "+t._s(t.syncStatus.asset?t.syncStatus.asset:"-")+" ")]},proxy:!0}])}),e("SyncInfoDescriptionList",{scopedSlots:t._u([{key:"title",fn:function(){return[t._v("Most Recent Supply Wisdom Sync:")]},proxy:!0},{key:"data",fn:function(){return[t.syncStatus.supplyWisdomSync?e("DateIsoStringDisplay",{attrs:{value:t.syncStatus.supplyWisdomSync,format:"date"}}):[t._v("-")]]},proxy:!0}])}),e("SyncInfoDescriptionList",{scopedSlots:t._u([{key:"title",fn:function(){return[t._v("Assets Synced:")]},proxy:!0},{key:"data",fn:function(){return[t._v(" "+t._s(t.syncStatus.supplyWisdomReports?t.syncStatus.supplyWisdomReports:"-")+" ")]},proxy:!0}])}),e("SyncInfoDescriptionList",{scopedSlots:t._u([{key:"title",fn:function(){return[t._v("Most Recent CyberOne Sync:")]},proxy:!0},{key:"data",fn:function(){return[t.syncStatus.cyberOneSync?e("DateIsoStringDisplay",{attrs:{value:t.syncStatus.cyberOneSync,format:"date"}}):[t._v("-")]]},proxy:!0}])}),e("SyncInfoDescriptionList",{scopedSlots:t._u([{key:"title",fn:function(){return[t._v("Assets Synced:")]},proxy:!0},{key:"data",fn:function(){return[t._v(" "+t._s(t.syncStatus.cyberOneReports?t.syncStatus.cyberOneReports:"-")+" ")]},proxy:!0}])}),e("SyncInfoDescriptionList",{scopedSlots:t._u([{key:"title",fn:function(){return[t._v("Most Recent VRM Dashboard Sync:")]},proxy:!0},{key:"data",fn:function(){return[t.syncStatus.mostRecentSync?e("DateIsoStringDisplay",{attrs:{value:t.syncStatus.mostRecentSync,format:"date"}}):[t._v("-")]]},proxy:!0}])}),e("SyncInfoDescriptionList",{scopedSlots:t._u([{key:"title",fn:function(){return[t._v("Reports Synced:")]},proxy:!0},{key:"data",fn:function(){return[t._v(" "+t._s(t.syncStatus.syncedReports?t.syncStatus.syncedReports:"-")+" ")]},proxy:!0}])})],1)},P=[];const g={};var F=R(u,E,P,!1,N,null,null,null);function N(t){for(let s in g)this[s]=g[s]}const Y=function(){return F.exports}(),y={};y.setup=(t,s)=>{const e=A("id"),D=M.get(e),I=c(()=>{var n;return(n=D.data.value)==null?void 0:n.targetName}),k=$.get(e),b=c(()=>{var n;return(n=k.data.value)==null?void 0:n.mappedAssetId}),O=h.get(e),i=c(()=>O.data.value),L=B.get(e),p=c(()=>L.data.value),l=T.list(e),C=c(()=>l.data.value?l.data.value.sort((n,o)=>{let r="",a="";return n.lastSynced&&n.lastSynced.value&&o.lastSynced&&o.lastSynced.value&&(r=n.lastSynced.value,a=o.lastSynced.value),r.localeCompare(a)}):[]),S=c(()=>C.value.find(n=>n.syncType===G.SyncType.SUPPLY_WISDOM_TO_CYBER_ONE));return{syncStatus:c(()=>{var n,o,r,a,d,_,f,v,m;return{target:I.value,asset:b.value,supplyWisdomSync:(o=(n=i.value)==null?void 0:n.lastSynced)==null?void 0:o.value,supplyWisdomReports:(r=i.value)==null?void 0:r.reportsSynced,cyberOneSync:(d=(a=p.value)==null?void 0:a.lastSynced)==null?void 0:d.value,cyberOneReports:(_=p.value)==null?void 0:_.reportsSynced,mostRecentSync:(v=(f=S.value)==null?void 0:f.lastSynced)==null?void 0:v.value,syncedReports:(m=S.value)==null?void 0:m.numSynced}})}};y.components=Object.assign({BusinessRatingSyncStatusDisplay:Y},y.components);var q=function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("BaseTablePageLayout",{scopedSlots:t._u([{key:"title",fn:function(){return[t._v("Business Rating Sync")]},proxy:!0},{key:"table",fn:function(){return[e("BusinessRatingSyncStatusDisplay",{attrs:{"sync-status":t.syncStatus}})]},proxy:!0}])})},z=[];const x={};var J=R(y,q,z,!1,K,null,null,null);function K(t){for(let s in x)this[s]=x[s]}const H=function(){return J.exports}();export{H as default};
