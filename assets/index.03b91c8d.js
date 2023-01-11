import{d as b,aS as _,n as p,bU as h,an as k,c9 as x}from"./index.e627960d.js";import{A as L}from"./AppTanStackTable.9bda351a.js";import{I as d}from"./IsoDateTimeDisplay.ba6927d3.js";import{c as T}from"./createOnChangeFn.7e56f0c4.js";import{u as $}from"./createSimpleTable.7ef16907.js";import{m,u as S}from"./useLicensingPacks.81947073.js";import"./magnifying-glass.b7cbe8fe.js";import"./chevron-up.736f4142.js";function C(e){switch(e){case m.LicenseType.ANNUAL:return"Annual";case m.LicenseType.ONE_TIME:return"One Time";default:return"N/A"}}const l={};l.props={value:{key:"value",required:!0,type:Array}};l.setup=(e,t)=>{const a=e,o=b(()=>a.value),c=T(),g=[c.accessor(s=>{var n,r;return(r=(n=s.data)==null?void 0:n.validity)==null?void 0:r.start},{id:"startDate",header:()=>"Start Date",cell:s=>_(d,{props:{value:s.getValue()}}),enableColumnFilter:!1}),c.accessor(s=>{var n,r;return(r=(n=s.data)==null?void 0:n.validity)==null?void 0:r.end},{id:"endDate",header:()=>"End Date",cell:s=>_(d,{props:{value:s.getValue()}}),enableColumnFilter:!1}),c.accessor(s=>{var n;return(n=s.data)==null?void 0:n.type},{id:"licenseType",header:()=>"License Type",cell:s=>C(s.getValue()),enableColumnFilter:!1}),c.group({id:"usage",header:()=>"License Usage",columns:[c.accessor(s=>{var n,r;return(r=(n=s.data)==null?void 0:n.usage)==null?void 0:r.quantity},{id:"total",header:()=>"Total",enableColumnFilter:!1}),c.accessor(s=>{var n,r;return(r=(n=s.data)==null?void 0:n.usage)==null?void 0:r.available},{id:"available",header:()=>"Available",enableColumnFilter:!1}),c.accessor(s=>{var n,r;return(r=(n=s.data)==null?void 0:n.usage)==null?void 0:r.used},{id:"used",header:()=>"Used",enableColumnFilter:!1})]})];return{instance:$(o,g)}};l.components=Object.assign({AppTanStackTable:L},l.components);var I=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("AppTanStackTable",{attrs:{table:e.instance}})},A=[];const f={};var F=p(l,I,A,!1,P,null,null,null);function P(e){for(let t in f)this[t]=f[t]}const D=function(){return F.exports}(),i={};i.props={licensingId:{key:"licensingId",required:!0,type:String}};i.setup=(e,t)=>{const o=h(e);return{packsList:S.list(o.licensingId)}};i.components=Object.assign({LicensePackOrdersTable:D},i.components);var E=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("section",[a("BaseVueQuery",{attrs:{query:e.packsList},scopedSlots:e._u([{key:"success",fn:function(o){var c=o.data;return[a("LicensePackOrdersTable",{attrs:{value:c}})]}}])})],1)},O=[];const v={};var j=p(i,E,O,!1,w,null,null,null);function w(e){for(let t in v)this[t]=v[t]}const R=function(){return j.exports}(),u={};u.setup=(e,t)=>({productId:x("productId")});u.components=Object.assign({PlusSvg:k,LicensingDisplay:R},u.components);var V=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("BaseTablePageLayout",{scopedSlots:e._u([{key:"title",fn:function(){return[e._v("License Packs")]},proxy:!0},{key:"button",fn:function(){return[a("BaseButton",{staticClass:"space-x-2",attrs:{to:"./new",append:""}},[a("PlusSvg",{staticClass:"h-auto w-4 xl:w-5"}),a("span",[e._v("License Pack")])],1)]},proxy:!0},{key:"table",fn:function(){return[a("LicensingDisplay",{attrs:{"licensing-id":e.productId}})]},proxy:!0}])})},q=[];const y={};var B=p(u,V,q,!1,M,null,null,null);function M(e){for(let t in y)this[t]=y[t]}const X=function(){return B.exports}();export{X as default};
