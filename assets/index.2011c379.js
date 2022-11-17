import{c as d,aI as q,aF as h,bX as _,aS as l,n as f,bT as x,ao as T}from"./index.c482d186.js";import{A as S,T as g}from"./AppTanStackTable.f00976de.js";import{I as A}from"./IsoDateTimeDisplay.a6a2901e.js";import{c as $}from"./createOnChangeFn.f4290673.js";import{u as C}from"./createSimpleTable.1033fa7a.js";import"./magnifying-glass.b7cbe8fe.js";import"./TransitionExpand.5f84b417.js";import"./chevron-up.736f4142.js";const o={};o.props={questionnaires:{key:"questionnaires",required:!0,type:Array}};o.setup=(e,t)=>{const n=e,u=d(()=>n.questionnaires),i=$(),c=q(),v=h(),y=_.delete(),b=[i.accessor("name",{header:()=>"Name",enableColumnFilter:!1}),i.accessor("industry",{header:()=>"Industry",enableColumnFilter:!1}),i.accessor(s=>s.updatedAt,{id:"updatedAt",header:()=>"Updated At",cell:s=>l(A,{props:{value:s.getValue(),format:"date"}}),enableColumnFilter:!1}),i.display({id:"actions",header:"Actions",cell:({row:s})=>l(g,{props:{actions:[{id:"edit",action(){var a;c.push(`/admin/custom-questionnaires/${(a=s.original.id)==null?void 0:a.value}`)}},{id:"download",action(){var a;c.push(`/admin/custom-questionnaires/${(a=s.original.id)==null?void 0:a.value}`)}},{id:"delete",async action(){await y.mutateAsync({questionnaireId:s.original.id}),v.success("Successfully deleted custom questionnaire.")}}]}})})];return{instance:C(u,b)}};o.components=Object.assign({AppTanStackTable:S},o.components);var k=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("AppTanStackTable",{attrs:{table:e.instance}})},w=[];const p={};var F=f(o,k,w,!1,I,null,null,null);function I(e){for(let t in p)this[t]=p[t]}const Q=function(){return F.exports}(),r={};r.setup=(e,t)=>{const n=_.list();return{questionnaires:d(()=>n.data.value||[])}};r.components=Object.assign({BaseTablePageLayout:x,PlusSvg:T,QuestionnairesTable:Q},r.components);var j=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("BaseTablePageLayout",{scopedSlots:e._u([{key:"title",fn:function(){return[e._v("Questionnaires")]},proxy:!0},{key:"button",fn:function(){return[n("BaseButton",{staticClass:"w-full space-x-2 md:w-auto",attrs:{to:"new",append:""}},[n("PlusSvg",{staticClass:"h-auto w-4 xl:w-5"}),n("span",[e._v("Questionnaire")])],1)]},proxy:!0},{key:"table",fn:function(){return[n("QuestionnairesTable",{attrs:{questionnaires:e.questionnaires}})]},proxy:!0}])})},B=[];const m={};var P=f(r,j,B,!1,D,null,null,null);function D(e){for(let t in m)this[t]=m[t]}const U=function(){return P.exports}();export{U as default};