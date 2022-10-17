import{c as b,aS as d,n as p,bR as h,ao as k,c0 as _}from"./index.36ccbbe7.js";import{A as x}from"./AppTanStackTable.f18a9bc4.js";import{I as m}from"./IsoDateTimeDisplay.577dbaf1.js";import{c as S}from"./createOnChangeFn.c19ea13e.js";import{u as $}from"./createSimpleTable.039a42e6.js";import{u as L,a as T}from"./useAccountSubscriptionLicensingId.57430ccb.js";import"./magnifying-glass.b7cbe8fe.js";import"./TransitionExpand.6f7fb991.js";import"./chevron-up.736f4142.js";const i={};i.props={value:{key:"value",required:!0,type:Array}};i.setup=(e,t)=>{const s=e,o=b(()=>s.value),r=S(),g=[r.accessor(a=>{var n,c;return(c=(n=a.data)==null?void 0:n.validity)==null?void 0:c.start},{id:"startDate",header:()=>"Start Date",cell:a=>d(m,{props:{value:a.getValue()}}),enableColumnFilter:!1}),r.accessor(a=>{var n,c;return(c=(n=a.data)==null?void 0:n.validity)==null?void 0:c.end},{id:"endDate",header:()=>"End Date",cell:a=>d(m,{props:{value:a.getValue()}}),enableColumnFilter:!1}),r.accessor(a=>{var n;return(n=a.data)==null?void 0:n.type},{id:"licenseType",header:()=>"License Type",enableColumnFilter:!1}),r.group({id:"usage",header:()=>"License Usage",columns:[r.accessor(a=>{var n,c;return(c=(n=a.data)==null?void 0:n.usage)==null?void 0:c.quantity},{id:"total",header:()=>"Total",enableColumnFilter:!1}),r.accessor(a=>{var n,c;return(c=(n=a.data)==null?void 0:n.usage)==null?void 0:c.available},{id:"available",header:()=>"Available",enableColumnFilter:!1}),r.accessor(a=>{var n,c;return(c=(n=a.data)==null?void 0:n.usage)==null?void 0:c.used},{id:"used",header:()=>"Used",enableColumnFilter:!1})]})];return{instance:$(o,g)}};i.components=Object.assign({AppTanStackTable:x},i.components);var I=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("AppTanStackTable",{attrs:{table:e.instance}})},C=[];const f={};var F=p(i,I,C,!1,P,null,null,null);function P(e){for(let t in f)this[t]=f[t]}const D=function(){return F.exports}(),l={};l.props={licensingId:{key:"licensingId",required:!0,type:String}};l.setup=(e,t)=>{const o=h(e);return{packsList:L.list(o.licensingId)}};l.components=Object.assign({LicensePackOrdersTable:D},l.components);var j=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("section",[s("BaseVueQuery",{attrs:{query:e.packsList},scopedSlots:e._u([{key:"success",fn:function(o){var r=o.data;return[s("LicensePackOrdersTable",{attrs:{value:r}})]}}])})],1)},A=[];const v={};var R=p(l,j,A,!1,q,null,null,null);function q(e){for(let t in v)this[t]=v[t]}const B=function(){return R.exports}(),u={};u.setup=(e,t)=>{const s=_("id"),o=_("subscriptionId");return{licensingId:T.get(s,o)}};u.components=Object.assign({PlusSvg:k,LicensingDisplay:B},u.components);var E=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("BaseTablePageLayout",{scopedSlots:e._u([{key:"title",fn:function(){return[e._v("License Packs")]},proxy:!0},{key:"button",fn:function(){return[s("BaseButton",{staticClass:"space-x-2",attrs:{to:"./new",append:""}},[s("PlusSvg",{staticClass:"h-auto w-4 xl:w-5"}),s("span",[e._v("License Pack")])],1)]},proxy:!0},{key:"table",fn:function(){return[s("BaseVueQuery",{attrs:{query:e.licensingId},scopedSlots:e._u([{key:"success",fn:function(o){var r=o.data;return[s("LicensingDisplay",{attrs:{"licensing-id":r.id?r.id.value:""}})]}}])})]},proxy:!0}])})},O=[];const y={};var V=p(u,E,O,!1,w,null,null,null);function w(e){for(let t in y)this[t]=y[t]}const X=function(){return V.exports}();export{X as default};
