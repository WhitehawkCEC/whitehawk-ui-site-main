import{A as _}from"./AppTanStackTable.d3d162ec.js";import{c as m}from"./createOnChangeFn.500fca05.js";import{bR as f,n as l,b$ as d}from"./index.5f000719.js";import{u as v}from"./createSimpleTable.27989bbf.js";import{u as y}from"./useSupplyWisdomAssets.92b645cb.js";import"./magnifying-glass.b7cbe8fe.js";import"./TransitionExpand.8466d011.js";import"./chevron-up.736f4142.js";const r={};r.props={value:{key:"value",required:!0,type:Array}};r.setup=(e,t)=>{const s=e,{value:a}=f(s),n=m(),p=[n.accessor("id",{header:()=>"ID",enableColumnFilter:!1}),n.accessor("name",{header:()=>"Name"}),n.accessor(c=>c.target.targetName,{id:"targetName",header:()=>"Target"}),n.accessor(c=>c.target.targetType,{id:"targetType",header:()=>"Type"}),n.accessor("webSiteUrl",{header:()=>"Domain"})];return{instance:v(a,p)}};r.components=Object.assign({AppTanStackTable:_},r.components);var b=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("AppTanStackTable",{attrs:{table:e.instance}})},g=[];const u={};var S=l(r,b,g,!1,T,null,null,null);function T(e){for(let t in u)this[t]=u[t]}const h=function(){return S.exports}(),o={};o.setup=(e,t)=>{const s=d("id");return{assets:y.list(s)}};o.components=Object.assign({SupplyWisdomAssetsTable:h},o.components);var x=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("BaseTablePageLayout",{scopedSlots:e._u([{key:"overline",fn:function(){return[e._v("Rating Service 1")]},proxy:!0},{key:"title",fn:function(){return[e._v("Business Rating Assets")]},proxy:!0},{key:"table",fn:function(){return[s("BaseVueQuery",{attrs:{query:e.assets},scopedSlots:e._u([{key:"success",fn:function(a){var n=a.data;return[s("SupplyWisdomAssetsTable",{attrs:{value:n}})]}}])})]},proxy:!0}])})},$=[];const i={};var A=l(o,x,$,!1,k,null,null,null);function k(e){for(let t in i)this[t]=i[t]}const E=function(){return A.exports}();export{E as default};
