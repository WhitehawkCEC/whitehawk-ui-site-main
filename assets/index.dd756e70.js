import{ah as A,aO as k,aP as h,aS as V,aD as E,c as S,aI as G,aR as r,bp as B,n as F,bX as U}from"./index.7b120442.js";import{A as q,T as K}from"./AppTanStackTable.e1a870b9.js";import{G as o}from"./GradeLetterDisplay.fab23065.js";import{c as j}from"./createOnChangeFn.af5d9675.js";import{u as I}from"./createSimpleTable.00cd422c.js";import{u as P}from"./useBlackKiteEntities.a693c821.js";import"./magnifying-glass.b7cbe8fe.js";import"./chevron-left.0808b01b.js";import"./TransitionExpand.c6a1c219.js";import"./chevron-up.736f4142.js";const Q={list(e){return A(["companies",e,"black-kite","report-summaries"],()=>k.get(`${h}/companies/${e.value}/black-kite/report-summaries`).then(s=>s.data))}},$={create(e){const s=V();return E(()=>k.post(`${h}/companies/${e.value}/black-kite/sync`).then(a=>a.data),{onSuccess(){s.invalidateQueries(["companies",e,"black-kite","sync"],{exact:!0})}})},read(e){return A(["companies",e,"black-kite","sync"],()=>k.get(`${h}/companies/${e.value}/black-kite/sync`).then(s=>s.data))}},l={};l.props={id:{key:"id",required:!0,type:String},entities:{key:"entities",required:!0,type:Array},summaries:{key:"summaries",required:!0,type:Array}};l.setup=(e,s)=>{const a=e,c=S(()=>{const t=[];return a.entities.map(_=>{var d;const{CompanyId:f,DomainName:m,CompanyName:b}=_,p=(d=a.summaries.find(g=>g.data.DomainValue===m))==null?void 0:d.data;p&&t.push({id:f,name:b,domain:m,summary:p})}),t}),i=S(()=>c.value.map(t=>{const{id:_,name:f,domain:m,summary:b}=t,{GradeLetter:p,Reputation:d,Privacy:g,Resiliency:R,Safeguard:T,LastUpdatedAt:D}=b;return{id:_,name:f,domain:m,summary:p,reputation:d.GradeLetter,privacy:g.GradeLetter,resiliency:R.GradeLetter,safeguard:T.GradeLetter,lastUpdated:D}})),u=G(),n=j(),v=[n.accessor("name",{header:()=>"Name",enableColumnFilter:!1}),n.accessor("domain",{header:()=>"Domain",enableColumnFilter:!1}),n.accessor("summary",{header:()=>"Summary",cell:t=>r(o,{props:{value:t.getValue()}}),enableColumnFilter:!1}),n.accessor("reputation",{header:()=>"Reputation",cell:t=>r(o,{props:{value:t.getValue()}}),enableColumnFilter:!1}),n.accessor("privacy",{header:()=>"Privacy",cell:t=>r(o,{props:{value:t.getValue()}}),enableColumnFilter:!1}),n.accessor("resiliency",{header:()=>"Resiliency",cell:t=>r(o,{props:{value:t.getValue()}}),enableColumnFilter:!1}),n.accessor("safeguard",{header:()=>"Safeguard",cell:t=>r(o,{props:{value:t.getValue()}}),enableColumnFilter:!1}),n.accessor("lastUpdated",{header:()=>"LastUpdated",cell:t=>r(B,{props:{value:t.getValue(),format:"date"}}),enableColumnFilter:!1}),n.display({id:"actions",header:"Actions",cell:({row:t})=>r(K,{props:{actions:[{id:"view",action(){u.push(`/admin/companies/${a.id}/rating-service-2/entities/${t.original.id}`)}}]}})})];return{instance:I(i,v)}};l.components=Object.assign({AppTanStackTable:q},l.components);var w=function(){var e=this,s=e.$createElement,a=e._self._c||s;return a("AppTanStackTable",{attrs:{table:e.instance}})},M=[];const L={};var N=F(l,w,M,!1,O,null,null,null);function O(e){for(let s in L)this[s]=L[s]}const H=function(){return N.exports}(),y={};y.setup=(e,s)=>{const a=U("id"),c=$.read(a),i=$.create(a),u=P.list(a),n=Q.list(a),v=S(()=>i.isLoading.value||u.isLoading.value||n.isLoading.value);async function C(){await i.mutateAsync()}return{id:a,syncStatus:c,entities:u,summaries:n,isLoading:v,runSync:C}};y.components=Object.assign({DateIsoStringDisplay:B,BlackKiteEntityTable:H},y.components);var z=function(){var e=this,s=e.$createElement,a=e._self._c||s;return a("main",{staticClass:"flex flex-col space-y-6"},[a("div",{staticClass:"space-y-1"},[a("BaseButton",{attrs:{shape:"rectangle",type:"button",disabled:e.isLoading},on:{click:e.runSync}},[e._v(" Update ")]),a("BaseVueQuery",{attrs:{query:e.syncStatus},scopedSlots:e._u([{key:"success",fn:function(c){var i=c.data;return[a("BaseTypography",{staticClass:"uppercase text-gray-500",attrs:{variant:"overline"}},[e._v(" Last Updated: "),a("DateIsoStringDisplay",{attrs:{value:i.meta.updatedAt}})],1)]}}])})],1),a("BlackKiteEntityTable",{attrs:{id:e.id,entities:e.entities.data.value||[],summaries:e.summaries.data.value||[]}})],1)},X=[];const x={};var J=F(y,z,X,!1,W,null,null,null);function W(e){for(let s in x)this[s]=x[s]}const oe=function(){return J.exports}();export{oe as default};
