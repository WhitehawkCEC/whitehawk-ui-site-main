import{bU as x,aJ as F,aH as T,d as k,aT as $,a_ as l,n as h,bV as A,aq as M,bW as P}from"./index.765bdb5f.js";import{A as Q,T as j}from"./AppTanStackTable.f9746f35.js";import{u as B,c as V,i as u,r as I,h as O,g as D,f as E,e as H,d as N}from"./createOnChangeFn.c71a9a98.js";import"./magnifying-glass.b7cbe8fe.js";import"./TransitionExpand.6812981e.js";import"./chevron-up.736f4142.js";const s={};s.props={questionnaires:{key:"questionnaires",required:!0,type:Array}};s.setup=(e,n)=>{const t=e,{questionnaires:d}=x(t),r=F(),y=T(),S=k(()=>{var a;return(a=y.company)==null?void 0:a.id}),i=V(),w=[i.accessor("id.value",{header:()=>"Id",enableColumnFilter:!1}),i.accessor("name",{header:()=>"Name",enableColumnFilter:!1}),i.accessor("updatedAt.value",{header:()=>"Updated",cell:a=>C(a.getValue()),enableColumnFilter:!1}),i.display({id:"actions",header:"Actions",cell:({row:a})=>$(j,{props:{actions:[{id:"view",action(){var o;r.push(`/client/companies/${S.value}/journey/cyber-risk-profile/custom-questionnaire/${(o=a.original.id)==null?void 0:o.value}`)}},{id:"edit",action(){var o;r.push(`/admin/custom-questionnaires/${(o=a.original.id)==null?void 0:o.value}`)}}]}})})],C=function(a){return new Date(a).toDateString()},p=l([]),m=l({pageIndex:0,pageSize:10}),_=l(""),g=l({});return{instance:B({get data(){return d.value},columns:w,state:{get sorting(){return p.value},get pagination(){return m.value},get globalFilter(){return _.value},get rowSelection(){return g.value}},onSortingChange:u(p),onPaginationChange:u(m),onGlobalFilterChange:u(_),globalFilterFn:(a,o,R,q)=>{const f=I(a.getValue(o),R,{threshold:O.CONTAINS});return q(f),f.passed},onRowSelectionChange:u(g),getCoreRowModel:D(),getSortedRowModel:E(),getPaginationRowModel:H(),getFilteredRowModel:N()})}};s.components=Object.assign({AppTanStackTable:Q},s.components);var z=function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("AppTanStackTable",{attrs:{table:e.instance}})},L=[];const v={};var U=h(s,z,L,!1,G,null,null,null);function G(e){for(let n in v)this[n]=v[n]}const J=function(){return U.exports}(),c={};c.setup=(e,n)=>({questionnaires:P.list()});c.components=Object.assign({BaseTablePageLayout:A,PlusSvg:M,QuestionnairesTable:J},c.components);var W=function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("div",[t("BaseTablePageLayout",{scopedSlots:e._u([{key:"title",fn:function(){return[e._v("Questionnaires")]},proxy:!0},{key:"button",fn:function(){return[t("BaseButton",{staticClass:"w-full space-x-2 md:w-auto",attrs:{to:"/admin/custom-questionnaires/new"}},[t("PlusSvg",{staticClass:"h-auto w-4 xl:w-5"}),t("span",[e._v("Add Questionnaire")])],1)]},proxy:!0},{key:"table",fn:function(){return[t("BaseVueQuery",{attrs:{query:e.questionnaires},scopedSlots:e._u([{key:"success",fn:function(d){var r=d.data;return[t("QuestionnairesTable",{attrs:{questionnaires:r.questionnaire}})]}}])})]},proxy:!0}])})],1)},K=[];const b={};var X=h(c,W,K,!1,Y,null,null,null);function Y(e){for(let n in b)this[n]=b[n]}const re=function(){return X.exports}();export{re as default};
