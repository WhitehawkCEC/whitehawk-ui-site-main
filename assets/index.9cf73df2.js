import{d as b,aJ as S,aT as m,n as y,aq as g,c0 as _,aG as h}from"./index.765bdb5f.js";import{A as T,T as x}from"./AppTanStackTable.f9746f35.js";import{I as A}from"./IsoDateTimeDisplay.8cf91596.js";import{c as B}from"./createOnChangeFn.c71a9a98.js";import{u as $}from"./createSimpleTable.aee8a25f.js";import"./magnifying-glass.b7cbe8fe.js";import"./TransitionExpand.6812981e.js";import"./chevron-up.736f4142.js";const c={};c.props={value:{key:"value",required:!0,type:Array}};c.setup=(e,t)=>{const n=e,l=t.emit,o=b(()=>n.value),i=S(),r=B(),d=[r.accessor("name",{header:()=>"Name",enableColumnFilter:!1}),r.accessor("description",{header:()=>"Description",enableColumnFilter:!1}),r.accessor(s=>{var a;return(a=s.meta)==null?void 0:a.updatedAt},{id:"updatedAt",header:()=>"Last Updated",cell:s=>m(A,{props:{value:s.getValue(),format:"date"}}),enableColumnFilter:!1}),r.display({id:"actions",header:"Actions",cell:({row:s})=>m(x,{props:{actions:[{id:"edit",action(){var a;i.push(`/admin/bundles/sets/${(a=s.original.id)==null?void 0:a.value}`)}},{id:"delete",action(){if(s.original&&s.original.id){const a=s.original.id.value;l("delete",a)}}}]}})})];return{instance:$(o,d)}};c.components=Object.assign({AppTanStackTable:T},c.components);var k=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("AppTanStackTable",{attrs:{table:e.instance}})},C=[];const f={};var F=y(c,k,C,!1,j,null,null,null);function j(e){for(let t in f)this[t]=f[t]}const D=function(){return F.exports}(),u={};u.setup=(e,t)=>{const n=_.list(),l=_.delete(),o=h();async function i(r){const d={id:{value:r}},{response:p}=await l.mutateAsync(d);p&&o.success("Successfully delete bundle set."),o.error("Something went wrong.")}return{bundlesQuery:n,deleteSet:i}};u.components=Object.assign({PlusSvg:g,BundleSetsTable:D},u.components);var q=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("BaseTablePageLayout",{scopedSlots:e._u([{key:"title",fn:function(){return[e._v("Bundle Sets")]},proxy:!0},{key:"button",fn:function(){return[n("BaseButton",{staticClass:"space-x-1",attrs:{to:"/admin/bundles/sets/new"}},[n("PlusSvg",{staticClass:"w-5"}),n("span",[e._v("Bundle Set")])],1)]},proxy:!0},{key:"table",fn:function(){return[n("BaseVueQuery",{attrs:{query:e.bundlesQuery},scopedSlots:e._u([{key:"success",fn:function(l){var o=l.data;return[n("BundleSetsTable",{attrs:{value:o},on:{delete:e.deleteSet}})]}}])})]},proxy:!0}])})},w=[];const v={};var E=y(u,q,w,!1,P,null,null,null);function P(e){for(let t in v)this[t]=v[t]}const O=function(){return E.exports}();export{O as default};
