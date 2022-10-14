import{A as y}from"./AppTanStackTable.d3d162ec.js";import{c as v}from"./createOnChangeFn.500fca05.js";import{aT as b,aD as d,ag as i,aP as o,aQ as c,bR as $,n as f,b$ as h,c as k}from"./index.5f000719.js";import{u as x}from"./createSimpleTable.27989bbf.js";import"./magnifying-glass.b7cbe8fe.js";import"./TransitionExpand.8466d011.js";import"./chevron-up.736f4142.js";const C={create(e){const n=b();return d(t=>o.post(`${c}/companies/${e.value}/cyber-one-key`,t).then(s=>s.data),{onSuccess(){n.invalidateQueries(["companies",e,"cyber-one","api-token"],{exact:!0})}})},read(e){return i(["companies",e,"cyber-one","api-token"],()=>o.get(`${c}/companies/${e.value}/cyber-one-key`).then(n=>n.data))}},T={read(e,n,t){return i(["companies",e,"cyber-one","assets",n],()=>o.get(`${c}/companies/${e.value}/cyber-one/assets/${n.value}`).then(s=>s.data),{enabled:t})},list(e,n){return i(["companies",e,"cyber-one","assets"],()=>o.get(`${c}/companies/${e.value}/cyber-one/assets`).then(t=>t.data),{enabled:n})}},r={};r.props={value:{key:"value",required:!0,type:Array}};r.setup=(e,n)=>{const t=e,{value:s}=$(t),a=v(),p=[a.accessor("id",{header:()=>"ID",enableColumnFilter:!1}),a.accessor("name",{header:()=>"Name",enableColumnFilter:!1}),a.accessor("referenceId",{header:()=>"Reference ID",enableColumnFilter:!1}),a.accessor("domain",{header:()=>"Domain",enableColumnFilter:!1})];return{instance:x(s,p)}};r.components=Object.assign({AppTanStackTable:y},r.components);var A=function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("AppTanStackTable",{attrs:{table:e.instance}})},S=[];const m={};var g=f(r,A,S,!1,R,null,null,null);function R(e){for(let n in m)this[n]=m[n]}const F=function(){return g.exports}(),u={};u.setup=(e,n)=>{const t=h("id"),s=C.read(t),a=k(()=>{var l;return!!((l=s.data.value)!=null&&l.apiKey)});return{assets:T.list(t,a)}};u.components=Object.assign({CyberOneAssetsTable:F},u.components);var O=function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("BaseTablePageLayout",{scopedSlots:e._u([{key:"overline",fn:function(){return[e._v("VRM Dashboard")]},proxy:!0},{key:"title",fn:function(){return[e._v("Assets")]},proxy:!0},{key:"table",fn:function(){return[t("BaseVueQuery",{attrs:{query:e.assets},scopedSlots:e._u([{key:"success",fn:function(s){var a=s.data;return[t("CyberOneAssetsTable",{attrs:{value:a||[]}})]}}])})]},proxy:!0}])})},Q=[];const _={};var D=f(u,O,Q,!1,j,null,null,null);function j(e){for(let n in _)this[n]=_[n]}const I=function(){return D.exports}();export{I as default};
