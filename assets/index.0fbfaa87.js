import{bU as _,n as i,bs as m,c9 as f,cU as d}from"./index.e627960d.js";import{A as v}from"./AppTanStackTable.9bda351a.js";import{c as y}from"./createOnChangeFn.7e56f0c4.js";import{u as g}from"./createSimpleTable.7ef16907.js";import"./magnifying-glass.b7cbe8fe.js";import"./chevron-up.736f4142.js";const s={};s.props={value:{key:"value",required:!0,type:Array}};s.setup=(e,t)=>{const n=e,{value:a}=_(n),r=y(),p=[r.group({id:"target",header:()=>"Target",columns:[r.accessor(c=>c.targetName,{id:"targetName",header:()=>"Name",enableColumnFilter:!1}),r.accessor(c=>c.targetType,{id:"targetType",header:()=>"Type",enableColumnFilter:!1})]})];return{instance:g(a,p)}};s.components=Object.assign({AppTanStackTable:v},s.components);var T=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("AppTanStackTable",{attrs:{table:e.instance}})},b=[];const u={};var k=i(s,T,b,!1,x,null,null,null);function x(e){for(let t in u)this[t]=u[t]}const S=function(){return k.exports}(),o={};o.setup=(e,t)=>{const n=f("id");return{targets:d.list(n)}};o.components=Object.assign({BackButton:m,SupplyWisdomTargetsTable:S},o.components);var h=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("BaseTablePageLayout",{scopedSlots:e._u([{key:"backButton",fn:function(){return[n("BackButton",{attrs:{link:".."}})]},proxy:!0},{key:"overline",fn:function(){return[e._v("Supply Wisdom")]},proxy:!0},{key:"title",fn:function(){return[e._v("Targets")]},proxy:!0},{key:"table",fn:function(){return[n("BaseVueQuery",{attrs:{query:e.targets},scopedSlots:e._u([{key:"success",fn:function(a){var r=a.data;return[n("SupplyWisdomTargetsTable",{attrs:{value:r}})]}}])})]},proxy:!0}])})},$=[];const l={};var B=i(o,h,$,!1,A,null,null,null);function A(e){for(let t in l)this[t]=l[t]}const E=function(){return B.exports}();export{E as default};
