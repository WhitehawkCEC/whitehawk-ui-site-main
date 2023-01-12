import{d as u,aS as m,br as y,n as v,bs as S,an as B,ca as _,dw as g}from"./index.b0bcf7b8.js";import{A as k,T as x}from"./AppTanStackTable.cd9aeee9.js";import{c as $}from"./createOnChangeFn.f8dcdac4.js";import{u as I}from"./createSimpleTable.5fe7daf8.js";import{e as A,f as T}from"./index.731bd571.js";import{u as C}from"./useBatchScorecardsZip.329c755d.js";import"./magnifying-glass.b7cbe8fe.js";import"./arrow-down-tray.793d581e.js";import"./chevron-up.736f4142.js";const i={};i.props={id:{key:"id",required:!0,type:String},subId:{key:"subId",required:!0,type:String},batches:{key:"batches",required:!0,type:Array}};i.setup=(t,n)=>{const s=t,c=u(()=>s.id),o=u(()=>s.subId),p=u(()=>s.batches),r=$(),h=[r.accessor(e=>{var a;return(a=e==null?void 0:e.id)==null?void 0:a.value},{id:"id",header:()=>"Batch Id",enableColumnFilter:!1}),r.accessor(e=>{var a;return(a=e==null?void 0:e.status)==null?void 0:a.state},{id:"state",header:()=>"State",cell:e=>A(e.getValue()),enableColumnFilter:!1}),r.accessor(e=>{var a;return(a=e==null?void 0:e.status)==null?void 0:a.quarter},{id:"quarter",header:()=>"Quarter",cell:e=>T(e==null?void 0:e.getValue()),enableColumnFilter:!1}),r.accessor(e=>{var a;return(a=e==null?void 0:e.status)==null?void 0:a.year},{id:"year",header:()=>"Year",enableColumnFilter:!1}),r.accessor(e=>{var a,d;return(d=(a=e.meta)==null?void 0:a.updatedAt)==null?void 0:d.value},{id:"updatedAt",header:()=>"Updated At",cell:e=>m(y,{props:{value:e.getValue(),format:"date"}}),enableColumnFilter:!1}),r.display({id:"actions",header:"Actions",cell:({row:e})=>{var a;return m(x,{props:{actions:[{id:"view",to:`/admin/companies/${c.value}/subscriptions/${o.value}/integrations/2/scorecards/batch/${(a=e.original.id)==null?void 0:a.value}`}]}})}})];return{instance:I(p,h)}};i.components=Object.assign({AppTanStackTable:k},i.components);var q=function(){var t=this,n=t.$createElement,s=t._self._c||n;return s("AppTanStackTable",{attrs:{table:t.instance}})},F=[];const f={};var V=v(i,q,F,!1,j,null,null,null);function j(t){for(let n in f)this[n]=f[n]}const P=function(){return V.exports}(),l={};l.setup=(t,n)=>{const s=_("id"),c=_("subscriptionId"),o=g.list(s,c),p=u(()=>o.data.value||[]),r=[C.list(s)];return{id:s,subscriptionId:c,batches:p,queries:r}};l.components=Object.assign({BackButton:S,PlusSvg:B,BatchScorecardsV3Table:P},l.components);var z=function(){var t=this,n=t.$createElement,s=t._self._c||n;return s("BaseTablePageLayout",{scopedSlots:t._u([{key:"backButton",fn:function(){return[s("BackButton",{attrs:{link:`/admin/companies/${t.id}/subscriptions/${t.subscriptionId}/integrations`}})]},proxy:!0},{key:"overline",fn:function(){return[t._v("Black Kite")]},proxy:!0},{key:"title",fn:function(){return[t._v("Batch Scorecards")]},proxy:!0},{key:"button",fn:function(){return[s("BaseButton",{staticClass:"space-x-1",attrs:{to:"./new",append:""}},[s("PlusSvg",{staticClass:"-ml-1 w-5"}),s("span",[t._v("Batch")])],1)]},proxy:!0},{key:"table",fn:function(){return[s("BaseVueQueries",{attrs:{queries:t.queries},scopedSlots:t._u([{key:"success",fn:function(c){var o=c[0];return[s("BatchScorecardsV3Table",{attrs:{id:t.id,"sub-id":t.subscriptionId,batches:t.batches,"zip-files":o}})]}}])})]},proxy:!0}])})},E=[];const b={};var Q=v(l,z,E,!1,R,null,null,null);function R(t){for(let n in b)this[n]=b[n]}const J=function(){return Q.exports}();export{J as default};
