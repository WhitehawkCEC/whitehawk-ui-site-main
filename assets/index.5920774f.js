import{c as b,aS as m,n as v,an as T,c3 as d,aF as g}from"./index.d0befb50.js";import{A as S,T as h}from"./AppTanStackTable.ca34eb6c.js";import{I as x}from"./IsoDateTimeDisplay.bbff0088.js";import{c as A}from"./createOnChangeFn.a792e913.js";import{u as B}from"./createSimpleTable.4c02c4c8.js";import{a as $}from"./convert-bundle-type.1bae7cfc.js";import"./magnifying-glass.b7cbe8fe.js";import"./TransitionExpand.32f5b016.js";import"./chevron-up.736f4142.js";const c={};c.props={value:{key:"value",required:!0,type:Array}};c.setup=(e,t)=>{const n=e,r=t.emit,l=b(()=>n.value),a=A(),u=[a.accessor("name",{header:()=>"Name",enableColumnFilter:!1}),a.accessor("bundleType",{header:()=>"Type",cell:s=>$(s.getValue()),enableColumnFilter:!1}),a.accessor("description",{header:()=>"Description",enableColumnFilter:!1}),a.accessor(s=>{var o;return(o=s.meta)==null?void 0:o.updatedAt},{id:"updatedAt",header:()=>"Last Updated",cell:s=>m(x,{props:{value:s.getValue(),format:"date"}}),enableColumnFilter:!1}),a.display({id:"actions",header:"Actions",cell:({row:s})=>{var o;return m(h,{props:{actions:[{id:"edit",to:`/admin/bundles/templates/${(o=s.original.id)==null?void 0:o.value}`},{id:"delete",action(){if(s.original&&s.original.id){const y=s.original.id.value;r("delete",y)}}}]}})}})];return{instance:B(l,u)}};c.components=Object.assign({AppTanStackTable:S},c.components);var C=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("AppTanStackTable",{attrs:{table:e.instance}})},k=[];const f={};var F=v(c,C,k,!1,j,null,null,null);function j(e){for(let t in f)this[t]=f[t]}const w=function(){return F.exports}(),i={};i.setup=(e,t)=>{const n=d.list(),r=d.delete(),l=g(),a="Are you sure you want to delete this template? It could be used in one or more bundle sets.";async function u(p){if(confirm(a)){const s={id:{value:p}},{response:o}=await r.mutateAsync(s);o&&l.success("Successfully delete bundle template."),l.error("Something went wrong.")}}return{bundlesQuery:n,deleteTemplate:u}};i.components=Object.assign({PlusSvg:T,BundleTemplatesTable:w},i.components);var D=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("BaseTablePageLayout",{scopedSlots:e._u([{key:"title",fn:function(){return[e._v("Bundle Templates")]},proxy:!0},{key:"button",fn:function(){return[n("BaseButton",{staticClass:"space-x-1",attrs:{to:"/admin/bundles/templates/new"}},[n("PlusSvg",{staticClass:"w-5"}),n("span",[e._v("Bundle Template")])],1)]},proxy:!0},{key:"table",fn:function(){return[n("BaseVueQuery",{attrs:{query:e.bundlesQuery},scopedSlots:e._u([{key:"success",fn:function(r){var l=r.data;return[n("BundleTemplatesTable",{attrs:{value:l},on:{delete:e.deleteTemplate}})]}}])})]},proxy:!0}])})},V=[];const _={};var E=v(i,D,V,!1,I,null,null,null);function I(e){for(let t in _)this[t]=_[t]}const z=function(){return E.exports}();export{z as default};
