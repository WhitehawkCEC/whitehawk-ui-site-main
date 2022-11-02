import{R as j}from"./arrow-path.24b87f73.js";import{c as a,aS as $,n as h,L as q,aF as M,cF as k,cG as T,cO as N,cI as P,cJ as U,b$ as V,cP as Y,cQ as G,cM as H}from"./index.23b0c02a.js";import{A as J}from"./AppTanStackTable.4fe41727.js";import{S as x,V as K,t as D,p as I,c as z,a as Q,b as X}from"./SyncStatusDisplay.5e3f65ae.js";import{c as Z}from"./createOnChangeFn.4a4fc79e.js";import{u as ee}from"./createSimpleTable.35cba9a9.js";import{l as se}from"./lodash.6d42a090.js";import"./magnifying-glass.b7cbe8fe.js";import"./TransitionExpand.c3314536.js";import"./check-circle.48e4a9f5.js";import"./chevron-up.736f4142.js";const b={};b.props={value:{key:"value",required:!0,type:Array}};b.setup=(e,n)=>{const s=e,p=a(()=>s.value),l=Z(),d=[l.accessor("toBeSynced",{header:()=>"To Be Synced",cell:c=>$(x,{props:{value:c.getValue()}}),enableColumnFilter:!1}),l.group({id:"supplier",header:()=>"Supplier",columns:[l.accessor(c=>c.supplier.name,{id:"name",header:()=>"Name",enableColumnFilter:!1}),l.accessor(c=>c.supplier.domain,{id:"domain",header:()=>"Domain",enableColumnFilter:!1})]}),l.accessor("syncedFromSupplyWisdom",{header:()=>"Synced From Supply Wisdom?",cell:c=>$(x,{props:{value:c.getValue()}}),enableColumnFilter:!1}),l.accessor("syncedFromCyberOne",{header:()=>"Synced From CyberOne?",cell:c=>$(x,{props:{value:c.getValue()}}),enableColumnFilter:!1})];return{instance:ee(p,d)}};b.components=Object.assign({AppTanStackTable:J},b.components);var te=function(){var e=this,n=e.$createElement,s=e._self._c||n;return s("AppTanStackTable",{attrs:{table:e.instance}})},ne=[];const F={};var ae=h(b,te,ne,!1,ce,null,null,null);function ce(e){for(let n in F)this[n]=F[n]}const oe=function(){return ae.exports}(),C={};C.props={accountId:{key:"accountId",required:!0,type:String},assets:{key:"assets",required:!0,type:Array},supplyWisdomAssets:{key:"supplyWisdomAssets",required:!0,type:Array},mostRecent:{key:"mostRecent",required:!0,type:null}};C.setup=(e,n)=>{const s=e,p=a(()=>s.accountId),l=a(()=>{const t=s.supplyWisdomAssets.filter(r=>r.webSiteUrl).filter(r=>r.target);return D(t,z)}),d=a(()=>l.value.map(t=>I(t.webSiteUrl))),S=a(()=>l.value.map(t=>({id:t.id,name:t.name,domain:I(t.webSiteUrl)}))),c=a(()=>{const t=s.assets.filter(r=>r.domain);return D(t,Q)}),f=a(()=>c.value.map(t=>I(t.domain))),_=a(()=>c.value.map(t=>({id:t.referenceId,name:t.name,domain:I(t.domain)}))),A=a(()=>se.exports.uniqBy([..._.value,...S.value],"domain")),i=a(()=>A.value.map(t=>{var g,B;const{name:r,domain:y}=t;return{supplier:{cyberOneId:(g=_.value.find(R=>R.domain===y))==null?void 0:g.id,supplyWisdomId:(B=S.value.find(R=>R.domain===y))==null?void 0:B.id,name:r,domain:y},syncedFromCyberOne:f.value.includes(t.domain),syncedFromSupplyWisdom:d.value.includes(t.domain),toBeSynced:f.value.includes(t.domain)&&d.value.includes(t.domain)}}).sort((t,r)=>Number(r.toBeSynced)-Number(t.toBeSynced))),o=a(()=>{const t=[];return i.value.forEach(r=>{if(r.toBeSynced){const{supplyWisdomId:y,cyberOneId:g}=r.supplier;y&&g&&t.push({target:{oneofKind:"cyberOneAssetId",cyberOneAssetId:g},source:{oneofKind:"supplyWisdomAssetId",supplyWisdomAssetId:y}})}}),t}),u=M(),m=k.create(p);async function v(){var y;const t={syncType:T.SyncType.SUPPLY_WISDOM_TO_CYBER_ONE,entries:o.value},r=await m.mutateAsync(t);r&&u.success(`Successfully synced. Sync ID: ${(y=r.response.syncId)==null?void 0:y.value}`)}return{rows:i,mappings:o,syncCreate:m,createSync:v}};C.components=Object.assign({VrmSyncStatusDisplay:K,LoadingSpinner:q,SyncSvg:j,BusinessRatingSyncTable:oe},C.components);var re=function(){var e=this,n=e.$createElement,s=e._self._c||n;return s("section",{staticClass:"space-y-6"},[s("div",{staticClass:"flex flex-col space-y-4 md:flex-row md:items-center md:justify-between md:space-y-0"},[s("VrmSyncStatusDisplay",{attrs:{header:"Business Rating Sync","sync-job":e.mostRecent}}),s("BaseButton",{staticClass:"space-x-1",attrs:{disabled:e.mappings.length===0,shape:"rectangle"},on:{click:e.createSync}},[e.syncCreate.isLoading.value?s("LoadingSpinner"):s("SyncSvg",{staticClass:"w-4 xl:w-5"}),s("span",[e._v("Sync")])],1)],1),s("BusinessRatingSyncTable",{attrs:{value:e.rows}})],1)},le=[];const L={};var ie=h(C,re,le,!1,ue,null,null,null);function ue(e){for(let n in L)this[n]=L[n]}const pe=function(){return ie.exports}(),O={};O.props={accountId:{key:"accountId",required:!0,type:String},syncType:{key:"syncType",required:!0,type:null},mappedTarget:{key:"mappedTarget",required:!1,type:String}};O.setup=(e,n)=>{const s=e,p=a(()=>s.accountId),l=N.get(p),d=a(()=>l.data.value),S=P.get(p),c=a(()=>{var i;return(i=S.data.value)==null?void 0:i.mappedAssetId}),f=U.get(p),_=a(()=>f.data.value);return{syncStatus:a(()=>{var i,o,u,m,v,t;return{source:{mappedSource:s.mappedTarget,syncDate:(o=(i=d.value)==null?void 0:i.lastSynced)==null?void 0:o.value,syncedReports:(u=d.value)==null?void 0:u.reportsSynced},target:{mappedTarget:c.value,syncDate:(v=(m=_.value)==null?void 0:m.lastSynced)==null?void 0:v.value,syncedReports:(t=_.value)==null?void 0:t.reportsSynced}}})}};O.components=Object.assign({SyncStatusDisplay:X},O.components);var de=function(){var e=this,n=e.$createElement,s=e._self._c||n;return s("SyncStatusDisplay",{attrs:{"sync-status":e.syncStatus,"sync-type":e.syncType}})},ye=[];const w={};var me=h(O,de,ye,!1,Se,null,null,null);function Se(e){for(let n in w)this[n]=w[n]}const _e=function(){return me.exports}(),W={};W.setup=(e,n)=>{const s=V("id"),p=Y.get(s),l=a(()=>{var o;return(o=p.data.value)==null?void 0:o.mappedTargetName.toLocaleLowerCase()}),d=G.list(s),S=a(()=>d.data.value||[]),c=H.list(s),f=a(()=>c.data.value||[]),_=k.list(s),A=a(()=>{var o;return((o=_.data.value)==null?void 0:o.filter(u=>u.syncType===T.SyncType.SUPPLY_WISDOM_TO_CYBER_ONE))||[]}),i=a(()=>A.value.sort((o,u)=>{let m="",v="";return o.lastSynced&&o.lastSynced.value&&u.lastSynced&&u.lastSynced.value&&(m=o.lastSynced.value,v=u.lastSynced.value),m.localeCompare(v)})[0]||T.SyncJob.create());return{SyncType:T.SyncType,id:s,mappedTarget:l,supplyWisdomAssets:S,assets:f,mostRecent:i}};W.components=Object.assign({BusinessRatingSyncStatusDisplay:_e,BusinessRatingSyncDisplay:pe},W.components);var ve=function(){var e=this,n=e.$createElement,s=e._self._c||n;return s("main",{staticClass:"space-y-6"},[s("BusinessRatingSyncStatusDisplay",{attrs:{"account-id":e.id,"sync-type":e.SyncType.SUPPLY_WISDOM_TO_CYBER_ONE,"mapped-target":e.mappedTarget}}),s("BusinessRatingSyncDisplay",{attrs:{"account-id":e.id,"supply-wisdom-assets":e.supplyWisdomAssets,assets:e.assets,"most-recent":e.mostRecent}})],1)},fe=[];const E={};var ge=h(W,ve,fe,!1,be,null,null,null);function be(e){for(let n in E)this[n]=E[n]}const De=function(){return ge.exports}();export{De as default};
