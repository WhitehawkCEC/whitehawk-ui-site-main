import{bs as v,an as y,c7 as p,cF as b,d as l,n as x}from"./index.6187e1e1.js";import{G as g}from"./GroupSummaryTable.be5113fa.js";import"./AppTanStackTable.d237c2ea.js";import"./createOnChangeFn.0d3528a6.js";import"./chevron-up.736f4142.js";import"./magnifying-glass.b7cbe8fe.js";import"./TransitionExpand.2a5c61c8.js";import"./IsoDateTimeDisplay.32ef519f.js";import"./createSimpleTable.30b61882.js";const s={};s.setup=(t,r)=>{const n=p("id"),d=p("subscriptionId"),a=b.get(n),_=l(()=>{var o,e;return((e=(o=a.data.value)==null?void 0:o.data)==null?void 0:e.groups)||[]}),f=l(()=>{var e,u,c,i;const o=(u=(e=a.data.value)==null?void 0:e.data)==null?void 0:u.totalLicenses;return(((c=o==null?void 0:o.annual)==null?void 0:c.quantity)||0)>0&&(((i=o==null?void 0:o.oneTime)==null?void 0:i.quantity)||0)>0});return{id:n,subscriptionId:d,groups:_,canCreateGroup:f}};s.components=Object.assign({BackButton:v,PlusSvg:y,GroupSummaryTable:g},s.components);var k=function(){var t=this,r=t.$createElement,n=t._self._c||r;return n("BaseTablePageLayout",{scopedSlots:t._u([{key:"backButton",fn:function(){return[n("BackButton",{attrs:{link:"../in-depth"}})]},proxy:!0},{key:"title",fn:function(){return[t._v("Groups")]},proxy:!0},{key:"button",fn:function(){return[n("BaseButton",{staticClass:"space-x-2",attrs:{type:"button",disabled:!t.canCreateGroup,to:"./new",append:""}},[n("PlusSvg",{staticClass:"h-auto w-4 xl:w-5"}),n("span",[t._v("New Group")])],1)]},proxy:!0},{key:"table",fn:function(){return[n("GroupSummaryTable",{attrs:{"account-id":t.id,"sub-id":t.subscriptionId,groups:t.groups}})]},proxy:!0}])})},B=[];const m={};var G=x(s,k,B,!1,S,null,null,null);function S(t){for(let r in m)this[r]=m[r]}const L=function(){return G.exports}();export{L as default};
