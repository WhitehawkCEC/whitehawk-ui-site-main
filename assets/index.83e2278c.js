import{R as x}from"./arrow-path.24b87f73.js";import{c,aS as R,n as I,L as F,aF as D,cF as K,cG as T,cH as B,cI as L,cJ as j,b$ as q,cK as w,cL as V,cM as N}from"./index.3616ba05.js";import{A as G}from"./AppTanStackTable.7ee74ea6.js";import{S as h,V as M,a as H}from"./SyncStatusDisplay.71e18555.js";import{c as P}from"./createOnChangeFn.6d08e765.js";import{u as Y}from"./createSimpleTable.de7e03f9.js";import"./magnifying-glass.b7cbe8fe.js";import"./TransitionExpand.f02c6326.js";import"./check-circle.48e4a9f5.js";import"./chevron-up.736f4142.js";const b={};b.props={value:{key:"value",required:!0,type:Array}};b.setup=(e,a)=>{const t=e,p=c(()=>t.value),i=P(),u=[i.accessor("toBeSynced",{header:()=>"To Be Synced",cell:o=>R(h,{props:{value:o.getValue()}}),enableColumnFilter:!1}),i.group({id:"supplier",header:()=>"Supplier",columns:[i.accessor(o=>o.supplier.name,{id:"name",header:()=>"Name",enableColumnFilter:!1}),i.accessor(o=>o.supplier.name,{id:"domain",header:()=>"Domain",enableColumnFilter:!1})]}),i.accessor("syncedFromBlackKite",{header:()=>"Synced From Black Kite?",cell:o=>R(h,{props:{value:o.getValue()}}),enableColumnFilter:!1}),i.accessor("syncedFromCyberOne",{header:()=>"Synced From CyberOne?",cell:o=>R(h,{props:{value:o.getValue()}}),enableColumnFilter:!1})];return{instance:Y(p,u)}};b.components=Object.assign({AppTanStackTable:G},b.components);var z=function(){var e=this,a=e.$createElement,t=e._self._c||a;return t("AppTanStackTable",{attrs:{table:e.instance}})},J=[];const $={};var U=I(b,z,J,!1,Q,null,null,null);function Q(e){for(let a in $)this[a]=$[a]}const W=function(){return U.exports}(),g={};g.props={accountId:{key:"accountId",required:!0,type:String},vrmSync:{key:"vrmSync",required:!0,type:null},assets:{key:"assets",required:!0,type:Array},entities:{key:"entities",required:!0,type:Array}};g.setup=(e,a)=>{const t=e,p=c(()=>t.accountId),i=c(()=>t.entities.map(({domain:n})=>n)),u=c(()=>t.assets.map(({domain:n})=>n)),m=c(()=>t.assets.map(({referenceId:n,name:l,domain:s})=>{var r;return{blackKiteId:(r=t.entities.find(y=>y.domain===s))==null?void 0:r.id,cyberOneId:n,name:l,domain:s}})),o=c(()=>m.value.map(n=>({supplier:n,syncedFromBlackKite:n.domain?i.value.includes(n.domain):void 0,syncedFromCyberOne:n.domain?u.value.includes(n.domain):void 0,toBeSynced:n.domain?i.value.includes(n.domain)&&u.value.includes(n.domain):void 0}))),_=c(()=>{const n=[];return o.value.forEach(l=>{if(l.toBeSynced){const{blackKiteId:s,cyberOneId:r}=l.supplier;s&&n.push({target:{oneofKind:"cyberOneAssetId",cyberOneAssetId:r},source:{oneofKind:"blackKiteEntityId",blackKiteEntityId:s}})}}),n}),v=D(),S=K.create(p);async function d(){const n={syncType:T.SyncType.BLACK_KITE_TO_CYBER_ONE,entries:_.value},l=await S.mutateAsync(n);if(l){const s=l.response.syncId;v.success(`Sync ID: ${s}`)}}return{rows:o,mappings:_,syncCreate:S,createSync:d}};g.components=Object.assign({VrmSyncStatusDisplay:M,LoadingSpinner:F,SyncSvg:x,CyberRiskRatingSyncTable:W},g.components);var X=function(){var e=this,a=e.$createElement,t=e._self._c||a;return t("section",{staticClass:"space-y-6"},[t("div",{staticClass:"flex flex-col space-y-4 md:flex-row md:items-center md:justify-between md:space-y-0"},[t("VrmSyncStatusDisplay",{attrs:{header:"Cyber Risk Rating Sync",sync:e.vrmSync}}),t("BaseButton",{staticClass:"space-x-1",attrs:{disabled:e.mappings.length===0,shape:"rectangle"},on:{click:e.createSync}},[e.syncCreate.isLoading.value?t("LoadingSpinner"):t("SyncSvg",{staticClass:"w-4 xl:w-5"}),t("span",[e._v("Sync")])],1)],1),t("CyberRiskRatingSyncTable",{attrs:{value:e.rows}})],1)},Z=[];const E={};var ee=I(g,X,Z,!1,te,null,null,null);function te(e){for(let a in E)this[a]=E[a]}const se=function(){return ee.exports}(),C={};C.props={accountId:{key:"accountId",required:!0,type:String},syncType:{key:"syncType",required:!0,type:null},mappedEcosystem:{key:"mappedEcosystem",required:!1,type:Number}};C.setup=(e,a)=>{const t=e,p=c(()=>t.accountId),i=B.get(p),u=c(()=>i.data.value),m=L.get(p),o=c(()=>{var d;return(d=m.data.value)==null?void 0:d.mappedAssetId}),_=j.get(p),v=c(()=>_.data.value);return{syncStatus:c(()=>{var d,n,l,s,r,y,f;return{source:{mappedSource:(d=t.mappedEcosystem)==null?void 0:d.toString(),syncDate:(l=(n=u.value)==null?void 0:n.lastSynced)==null?void 0:l.value,syncedReports:(s=u.value)==null?void 0:s.reportsSynced},target:{mappedTarget:o.value,syncDate:(y=(r=v.value)==null?void 0:r.lastSynced)==null?void 0:y.value,syncedReports:(f=v.value)==null?void 0:f.reportsSynced}}})}};C.components=Object.assign({SyncStatusDisplay:H},C.components);var ne=function(){var e=this,a=e.$createElement,t=e._self._c||a;return t("SyncStatusDisplay",{attrs:{"sync-status":e.syncStatus,"sync-type":e.syncType}})},ae=[];const A={};var ce=I(C,ne,ae,!1,oe,null,null,null);function oe(e){for(let a in A)this[a]=A[a]}const re=function(){return ce.exports}(),k={};k.setup=(e,a)=>{const t=q("id"),p=w.get(t),i=c(()=>{var s;return(s=p.data.value)==null?void 0:s.mappedEcosystemId}),u=K.list(t),m=c(()=>u.data.value?u.data.value.sort((s,r)=>{let y="",f="";return s.lastSynced&&s.lastSynced.value&&r.lastSynced&&r.lastSynced.value&&(y=s.lastSynced.value,f=r.lastSynced.value),y.localeCompare(f)}):[]),o=c(()=>m.value.find(s=>s.syncType===T.SyncType.BLACK_KITE_TO_CYBER_ONE)),_=V.list(t),v=c(()=>_.data.value||[]),S=N.list(t),d=c(()=>S.data.value||[]),n=c(()=>{var s,r,y;return{syncDate:(r=(s=o.value)==null?void 0:s.lastSynced)==null?void 0:r.value,syncedReports:(y=o.value)==null?void 0:y.numSynced}}),l=c(()=>{var s;return((s=o.value)==null?void 0:s.syncType)||T.SyncType.UNSPECIFIED});return{id:t,mappedEcosystem:i,entities:v,assets:d,sync:n,syncType:l}};k.components=Object.assign({CyberRiskRatingSyncStatusDisplay:re,CyberRiskRatingSyncDisplay:se},k.components);var ie=function(){var e=this,a=e.$createElement,t=e._self._c||a;return t("main",{staticClass:"space-y-6"},[t("CyberRiskRatingSyncStatusDisplay",{attrs:{"account-id":e.id,"sync-type":e.syncType,"mapped-ecosystem":e.mappedEcosystem}}),t("CyberRiskRatingSyncDisplay",{attrs:{"account-id":e.id,"vrm-sync":e.sync,entities:e.entities,assets:e.assets}})],1)},le=[];const O={};var ue=I(k,ie,le,!1,ye,null,null,null);function ye(e){for(let a in O)this[a]=O[a]}const ke=function(){return ue.exports}();export{ke as default};
