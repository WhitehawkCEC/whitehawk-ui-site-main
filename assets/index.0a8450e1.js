import{ai as L,aR as h,aS as B,aV as D,aF as E,d as f,aK as U,aU as r,bu as F,n as T,bv as G,c2 as K}from"./index.ad2ff904.js";import{A as q,T as j}from"./AppTanStackTable.a9750958.js";import{G as c}from"./GradeLetterDisplay.eb702f06.js";import{c as I}from"./createOnChangeFn.9f62ccbf.js";import{u as P}from"./createSimpleTable.e78f974d.js";import{u as Q}from"./useBlackKiteEntities.56086fba.js";import"./magnifying-glass.b7cbe8fe.js";import"./TransitionExpand.5b598212.js";import"./chevron-up.736f4142.js";const w={list(e){return L(["companies",e,"black-kite","report-summaries"],()=>h.get(`${B}/companies/${e.value}/black-kite/report-summaries`).then(s=>s.data))}},$={create(e){const s=D();return E(()=>h.post(`${B}/companies/${e.value}/black-kite/sync`).then(t=>t.data),{onSuccess(){s.invalidateQueries(["companies",e,"black-kite","sync"],{exact:!0})}})},read(e){return L(["companies",e,"black-kite","sync"],()=>h.get(`${B}/companies/${e.value}/black-kite/sync`).then(s=>s.data))}},u={};u.props={id:{key:"id",required:!0,type:String},entities:{key:"entities",required:!0,type:Array},summaries:{key:"summaries",required:!0,type:Array}};u.setup=(e,s)=>{const t=e,o=f(()=>t.id),i=f(()=>{const a=[];return t.entities.map(k=>{var y;const{CompanyId:g,DomainName:p,CompanyName:b}=k,d=(y=t.summaries.find(S=>S.data.DomainValue===p))==null?void 0:y.data;d&&a.push({id:g,name:b,domain:p,summary:d})}),a}),l=f(()=>i.value.map(a=>{const{id:k,name:g,domain:p,summary:b}=a,{GradeLetter:d,Reputation:y,Privacy:S,Resiliency:A,Safeguard:R,LastUpdatedAt:V}=b;return{id:k,name:g,domain:p,summary:d,reputation:y.GradeLetter,privacy:S.GradeLetter,resiliency:A.GradeLetter,safeguard:R.GradeLetter,lastUpdated:V}})),m=U(),n=I(),v=[n.accessor("name",{header:()=>"Name",enableColumnFilter:!1}),n.accessor("domain",{header:()=>"Domain",enableColumnFilter:!1}),n.accessor("summary",{header:()=>"Summary",cell:a=>r(c,{props:{grade:a.getValue()}}),enableColumnFilter:!1}),n.accessor("reputation",{header:()=>"Reputation",cell:a=>r(c,{props:{grade:a.getValue()}}),enableColumnFilter:!1}),n.accessor("privacy",{header:()=>"Privacy",cell:a=>r(c,{props:{grade:a.getValue()}}),enableColumnFilter:!1}),n.accessor("resiliency",{header:()=>"Resiliency",cell:a=>r(c,{props:{grade:a.getValue()}}),enableColumnFilter:!1}),n.accessor("safeguard",{header:()=>"Safeguard",cell:a=>r(c,{props:{grade:a.getValue()}}),enableColumnFilter:!1}),n.accessor("lastUpdated",{header:()=>"LastUpdated",cell:a=>r(F,{props:{value:a.getValue(),format:"date"}}),enableColumnFilter:!1}),n.display({id:"actions",header:"Actions",cell:({row:a})=>r(j,{props:{actions:[{id:"view",action(){m.push(`/admin/companies/${o.value}/cyber-risk-rating/rating-service-2/entities/${a.original.id}`)}}]}})})];return{instance:P(l,v)}};u.components=Object.assign({AppTanStackTable:q},u.components);var M=function(){var e=this,s=e.$createElement,t=e._self._c||s;return t("AppTanStackTable",{attrs:{table:e.instance}})},N=[];const C={};var H=T(u,M,N,!1,O,null,null,null);function O(e){for(let s in C)this[s]=C[s]}const z=function(){return H.exports}(),_={};_.setup=(e,s)=>{const t=K("id"),o=$.read(t),i=$.create(t),l=Q.list(t),m=w.list(t),n=f(()=>i.isLoading.value||l.isLoading.value||m.isLoading.value);async function v(){await i.mutateAsync()}return{id:t,syncStatus:o,entities:l,summaries:m,isLoading:n,runSync:v}};_.components=Object.assign({BackButton:G,DateIsoStringDisplay:F,BlackKiteEntitiesTable:z},_.components);var J=function(){var e=this,s=e.$createElement,t=e._self._c||s;return t("BaseTablePageLayout",{scopedSlots:e._u([{key:"backButton",fn:function(){return[t("BackButton",{attrs:{link:`/admin/companies/${e.id}/cyber-risk-rating`}})]},proxy:!0},{key:"overline",fn:function(){return[t("BaseVueQuery",{attrs:{query:e.syncStatus},scopedSlots:e._u([{key:"success",fn:function(o){var i=o.data;return[t("BaseTypography",{staticClass:"uppercase text-gray-500",attrs:{variant:"overline"}},[e._v(" Last Updated: "),t("DateIsoStringDisplay",{attrs:{value:i.meta.updatedAt}})],1)]}}])})]},proxy:!0},{key:"title",fn:function(){return[e._v("Black Kite Entities")]},proxy:!0},{key:"button",fn:function(){return[t("div",{staticClass:"space-y-1"},[t("BaseButton",{attrs:{shape:"rectangle",type:"button",disabled:e.isLoading},on:{click:e.runSync}},[e._v(" Update ")])],1)]},proxy:!0},{key:"table",fn:function(){return[t("BlackKiteEntitiesTable",{attrs:{id:e.id,entities:e.entities.data.value||[],summaries:e.summaries.data.value||[]}})]},proxy:!0}])})},W=[];const x={};var X=T(_,J,W,!1,Y,null,null,null);function Y(e){for(let s in x)this[s]=x[s]}const ue=function(){return X.exports}();export{ue as default};