import{ag as S,aP as b,aQ as g,aT as L,aD as V,c as m,aI as D,aS as n,br as G,n as R}from"./index.9aeab7fb.js";import{A as q,T as x}from"./AppTanStackTable.b82f486e.js";import{G as i}from"./GradeLetterDisplay.c8479be4.js";import{c as B}from"./createOnChangeFn.3ccfd969.js";import{u as U}from"./createSimpleTable.0dfae302.js";const O={list(a){return S(["companies",a,"black-kite","report-summaries"],()=>b.get(`${g}/companies/${a.value}/black-kite/report-summaries`).then(t=>t.data))}},J={set(a){const t=L();return V(()=>b.post(`${g}/companies/${a.value}/black-kite/sync`).then(r=>r.data),{onSuccess(){t.invalidateQueries(["companies",a,"black-kite","sync"],{exact:!0})}})},get(a){return S(["companies",a,"black-kite","sync"],()=>b.get(`${g}/companies/${a.value}/black-kite/sync`).then(t=>t.data))}},o={};o.props={id:{key:"id",required:!0,type:String},subId:{key:"subId",required:!1,type:String},entities:{key:"entities",required:!0,type:Array},summaries:{key:"summaries",required:!0,type:Array}};o.setup=(a,t)=>{const r=a,v=m(()=>r.id),k=m(()=>r.subId),C=m(()=>{const e=[];return r.entities.map(p=>{var u;const{CompanyId:d,DomainName:l,CompanyName:y}=p,c=(u=r.summaries.find(f=>f.data.DomainValue===l))==null?void 0:u.data;c&&e.push({id:d,name:y,domain:l,summary:c})}),e}),$=m(()=>C.value.map(e=>{const{id:p,name:d,domain:l,summary:y}=e,{GradeLetter:c,Reputation:u,Privacy:f,Resiliency:T,Safeguard:A,LastUpdatedAt:I}=y;return{id:p,name:d,domain:l,summary:c,reputation:u.GradeLetter,privacy:f.GradeLetter,resiliency:T.GradeLetter,safeguard:A.GradeLetter,lastUpdated:I}})),_=D(),s=B(),F=[s.accessor("name",{header:()=>"Name",enableColumnFilter:!1}),s.accessor("domain",{header:()=>"Domain",enableColumnFilter:!1}),s.accessor("summary",{header:()=>"Summary",cell:e=>n(i,{props:{grade:e.getValue()}}),enableColumnFilter:!1}),s.accessor("reputation",{header:()=>"Reputation",cell:e=>n(i,{props:{grade:e.getValue()}}),enableColumnFilter:!1}),s.accessor("privacy",{header:()=>"Privacy",cell:e=>n(i,{props:{grade:e.getValue()}}),enableColumnFilter:!1}),s.accessor("resiliency",{header:()=>"Resiliency",cell:e=>n(i,{props:{grade:e.getValue()}}),enableColumnFilter:!1}),s.accessor("safeguard",{header:()=>"Safeguard",cell:e=>n(i,{props:{grade:e.getValue()}}),enableColumnFilter:!1}),s.accessor("lastUpdated",{header:()=>"LastUpdated",cell:e=>n(G,{props:{value:e.getValue(),format:"date"}}),enableColumnFilter:!1}),s.display({id:"actions",header:"Actions",cell:({row:e})=>n(x,{props:{actions:[{id:"view",action(){k.value?_.push(`/admin/companies/${v.value}/subscriptions/${k.value}/integrations/2/entities/${e.original.id}`):_.push(`/admin/companies/${v.value}/cyber-risk-rating/rating-service-2/entities/${e.original.id}`)}}]}})})];return{instance:U($,F)}};o.components=Object.assign({AppTanStackTable:q},o.components);var E=function(){var a=this,t=a.$createElement,r=a._self._c||t;return r("AppTanStackTable",{attrs:{table:a.instance}})},Q=[];const h={};var K=R(o,E,Q,!1,N,null,null,null);function N(a){for(let t in h)this[t]=h[t]}const W=function(){return K.exports}();export{W as B,O as a,J as u};
