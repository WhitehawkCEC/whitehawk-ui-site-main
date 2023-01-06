import{ah as I,aP as h,aQ as C,aT as R,aD as G,d as u,aS as r,br as A,n as F,bs as q,c7 as B}from"./index.287ffa76.js";import{A as K,T as U}from"./AppTanStackTable.0809bb59.js";import{G as c}from"./GradeLetterDisplay.fd21a8a6.js";import{c as j}from"./createOnChangeFn.ca5c94da.js";import{u as P}from"./createSimpleTable.a547f0b2.js";import{u as Q}from"./useBlackKiteEntities.4607f465.js";import"./magnifying-glass.b7cbe8fe.js";import"./TransitionExpand.fb18b57b.js";import"./chevron-up.736f4142.js";const w={list(e){return I(["companies",e,"black-kite","report-summaries"],()=>h.get(`${C}/companies/${e.value}/black-kite/report-summaries`).then(s=>s.data))}},$={set(e){const s=R();return G(()=>h.post(`${C}/companies/${e.value}/black-kite/sync`).then(t=>t.data),{onSuccess(){s.invalidateQueries(["companies",e,"black-kite","sync"],{exact:!0})}})},get(e){return I(["companies",e,"black-kite","sync"],()=>h.get(`${C}/companies/${e.value}/black-kite/sync`).then(s=>s.data))}},l={};l.props={id:{key:"id",required:!0,type:String},subId:{key:"subId",required:!1,type:String},entities:{key:"entities",required:!0,type:Array},summaries:{key:"summaries",required:!0,type:Array}};l.setup=(e,s)=>{const t=e,i=u(()=>t.id),o=u(()=>t.subId),p=u(()=>{const a=[];return t.entities.map(b=>{var f;const{CompanyId:g,DomainName:d,CompanyName:k}=b,y=(f=t.summaries.find(S=>S.data.DomainValue===d))==null?void 0:f.data;y&&a.push({id:g,name:k,domain:d,summary:y})}),a}),m=u(()=>p.value.map(a=>{const{id:b,name:g,domain:d,summary:k}=a,{GradeLetter:y,Reputation:f,Privacy:S,Resiliency:D,Safeguard:V,LastUpdatedAt:E}=k;return{id:b,name:g,domain:d,summary:y,reputation:f.GradeLetter,privacy:S.GradeLetter,resiliency:D.GradeLetter,safeguard:V.GradeLetter,lastUpdated:E}})),n=j(),v=[n.accessor("name",{header:()=>"Name",enableColumnFilter:!1}),n.accessor("domain",{header:()=>"Domain",enableColumnFilter:!1}),n.accessor("summary",{header:()=>"Summary",cell:a=>r(c,{props:{grade:a.getValue()}}),enableColumnFilter:!1}),n.accessor("reputation",{header:()=>"Reputation",cell:a=>r(c,{props:{grade:a.getValue()}}),enableColumnFilter:!1}),n.accessor("privacy",{header:()=>"Privacy",cell:a=>r(c,{props:{grade:a.getValue()}}),enableColumnFilter:!1}),n.accessor("resiliency",{header:()=>"Resiliency",cell:a=>r(c,{props:{grade:a.getValue()}}),enableColumnFilter:!1}),n.accessor("safeguard",{header:()=>"Safeguard",cell:a=>r(c,{props:{grade:a.getValue()}}),enableColumnFilter:!1}),n.accessor("lastUpdated",{header:()=>"LastUpdated",cell:a=>r(A,{props:{value:a.getValue(),format:"date"}}),enableColumnFilter:!1}),n.display({id:"actions",header:"Actions",cell:({row:a})=>r(U,{props:{actions:[{id:"view",to:`/admin/companies/${i.value}/subscriptions/${o.value}/integrations/2/entities/${a.original.id}/cyber-risk`}]}})})];return{instance:P(m,v)}};l.components=Object.assign({AppTanStackTable:K},l.components);var M=function(){var e=this,s=e.$createElement,t=e._self._c||s;return t("AppTanStackTable",{attrs:{table:e.instance}})},N=[];const L={};var H=F(l,M,N,!1,O,null,null,null);function O(e){for(let s in L)this[s]=L[s]}const z=function(){return H.exports}(),_={};_.setup=(e,s)=>{const t=B("id"),i=B("subscriptionId"),o=$.get(t),p=$.set(t),m=Q.list(t),n=w.list(t),v=u(()=>p.isLoading.value||m.isLoading.value||n.isLoading.value);async function x(){await p.mutateAsync()}return{id:t,subscriptionId:i,syncStatus:o,entities:m,summaries:n,isLoading:v,createSync:x}};_.components=Object.assign({BackButton:q,DateIsoStringDisplay:A,BlackKiteEntitiesTable:z},_.components);var J=function(){var e=this,s=e.$createElement,t=e._self._c||s;return t("BaseTablePageLayout",{scopedSlots:e._u([{key:"backButton",fn:function(){return[t("BackButton",{attrs:{link:".."}})]},proxy:!0},{key:"overline",fn:function(){return[e._v("Black Kite")]},proxy:!0},{key:"title",fn:function(){return[e._v("Entities")]},proxy:!0},{key:"button",fn:function(){return[t("div",{staticClass:"flex flex-col items-end justify-end"},[t("div",{staticClass:"space-y-1"},[t("BaseButton",{attrs:{shape:"rectangle",type:"button",disabled:e.isLoading},on:{click:e.createSync}},[e._v(" Update ")])],1),t("BaseVueQuery",{attrs:{query:e.syncStatus},scopedSlots:e._u([{key:"success",fn:function(i){var o=i.data;return[t("BaseTypography",{staticClass:"uppercase text-gray-500",attrs:{variant:"overline"}},[e._v(" Last Synced: "),t("DateIsoStringDisplay",{attrs:{value:o.meta.updatedAt}})],1)]}}])})],1)]},proxy:!0},{key:"table",fn:function(){return[t("BlackKiteEntitiesTable",{attrs:{id:e.id,"sub-id":e.subscriptionId,entities:e.entities.data.value||[],summaries:e.summaries.data.value||[]}})]},proxy:!0}])})},W=[];const T={};var X=F(_,J,W,!1,Y,null,null,null);function Y(e){for(let s in T)this[s]=T[s]}const ce=function(){return X.exports}();export{ce as default};
