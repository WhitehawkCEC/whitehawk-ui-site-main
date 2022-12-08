import{aE as T,c as m,aR as c,br as d,a9 as F,aO as _,aP as g,n as A,am as L,c7 as y,dk as k,dc as w}from"./index.f9aabd94.js";import{A as D,T as P}from"./AppTanStackTable.5da2a33c.js";import{S as B}from"./StatusBadge.083662d1.js";import{c as I}from"./createOnChangeFn.826f72eb.js";import{F as O}from"./FileSaver.min.cb9cac21.js";import{u as V}from"./createSimpleTable.a2a2ef51.js";import{A as E}from"./AggregateLicenseDisplay.c928d230.js";import{u as U}from"./useAccountGroupScorecardOrders.1c88a34a.js";import"./magnifying-glass.b7cbe8fe.js";import"./TransitionExpand.b5ac7a01.js";import"./chevron-up.736f4142.js";const n={};n.props={scorecards:{key:"scorecards",required:!0,type:Array}};n.setup=(a,r)=>{const t=a,l=T(),i=m(()=>t.scorecards.filter(e=>e.status.state!=="Archived")),s=I(),p=[s.accessor(e=>e.licenseType,{id:"licenseType",header:()=>"License Type",enableColumnFilter:!1}),s.accessor(e=>e.id,{id:"id",header:()=>"Scorecard ID",enableColumnFilter:!1}),s.group({id:"company",header:()=>"Company",columns:[s.accessor(e=>e.company.name,{id:"name",header:()=>"Name",enableColumnFilter:!1}),s.accessor(e=>e.company.domain,{id:"domain",header:()=>"Domain",enableColumnFilter:!1})]}),s.accessor(e=>e.status.state,{id:"state",header:()=>"State",cell:e=>c(B,{props:{value:e.getValue()}}),enableColumnFilter:!1}),s.accessor(e=>e.log.receivedAt,{id:"createdAt",header:()=>"Created At",cell:e=>c(d,{props:{value:e.getValue(),format:"date"}}),enableColumnFilter:!1}),s.accessor(e=>e.log.updatedAt,{id:"updatedAt",header:()=>"Updated At",cell:e=>c(d,{props:{value:e.getValue(),format:"date"}}),enableColumnFilter:!1}),s.accessor(e=>e.log.expiresAt,{id:"expiresAt",header:()=>"Expires At",cell:e=>c(d,{props:{value:e.getValue(),format:"date"}}),enableColumnFilter:!1}),s.display({id:"actions",header:"Actions",cell:({row:e})=>c(P,{props:{actions:[{id:"download",async action(){const{id:o,company:{name:b},log:{receivedAt:h}}=e.original,x=F(h).toLocaleString(),C=await _.get(`${g}/scorecards/${o}/pdf`,{responseType:"blob"}),$=`${b} Scorecard ${x} ${o}.pdf`;O.exports.saveAs(C.data,$)}},{id:"archive",async action(){const{id:o}=e.original;await _.put(`${g}/scorecard-orders/${o}/status`,{state:"Archived",date:new Date().toISOString()}),l.success("Archived Scorecard Successfully")}}]}})})];return{instance:V(i,p)}};n.components=Object.assign({AppTanStackTable:D},n.components);var j=function(){var a=this,r=a.$createElement,t=a._self._c||r;return t("AppTanStackTable",{attrs:{table:a.instance}})},R=[];const v={};var N=A(n,j,R,!1,q,null,null,null);function q(a){for(let r in v)this[r]=v[r]}const G=function(){return N.exports}(),u={};u.setup=(a,r)=>{const t=y("id"),l=y("groupId"),i=k.get(t,l),s=m(()=>{var e,o;return((o=(e=i.data.value)==null?void 0:e.value)==null?void 0:o.groupLicenses)||w.AggregateLicenseUsage.create()}),p=U.list(t,l),f=m(()=>p.data.value||[]);return{summary:i,aggregateLicenseUsage:s,scorecards:f}};u.components=Object.assign({AggregateLicenseDisplay:E,PlusSvg:L,PortfolioScorecardsTable:G},u.components);var H=function(){var a=this,r=a.$createElement,t=a._self._c||r;return t("section",{staticClass:"space-y-6"},[t("BaseVueQuery",{attrs:{query:a.summary},scopedSlots:a._u([{key:"success",fn:function(){return[t("AggregateLicenseDisplay",{attrs:{"license-usage":a.aggregateLicenseUsage}})]},proxy:!0}])}),t("BaseTablePageLayout",{scopedSlots:a._u([{key:"title",fn:function(){return[a._v("Scorecards")]},proxy:!0},{key:"button",fn:function(){return[t("BaseButton",{staticClass:"space-x-2",attrs:{to:"new",type:"button",append:""}},[t("PlusSvg",{staticClass:"h-auto w-4 xl:w-5"}),t("span",[a._v("Scorecard")])],1)]},proxy:!0},{key:"table",fn:function(){return[t("PortfolioScorecardsTable",{attrs:{scorecards:a.scorecards}})]},proxy:!0}])})],1)},M=[];const S={};var z=A(u,H,M,!1,Q,null,null,null);function Q(a){for(let r in S)this[r]=S[r]}const oe=function(){return z.exports}();export{oe as default};