import{A as v}from"./AppTanStackTable.cd6197a2.js";import{c as d}from"./createOnChangeFn.10d3a00c.js";import{f as l,g as i,h as p,a6 as y,n as f,bG as b,c as h}from"./index.d7842beb.js";import{u as $}from"./createSimpleTable.fdde5950.js";import{u as x}from"./useCyberOneApiToken.a3c69352.js";import"./magnifying-glass.b7cbe8fe.js";import"./chevron-left.0808b01b.js";import"./TransitionExpand.011f84e2.js";import"./chevron-up.736f4142.js";const C={read(e,t,s){return l(["companies",e,"cyber-one","assets",t],()=>i.get(`${p}/companies/${e.value}/cyber-one/assets/${t.value}`).then(a=>a.data),{enabled:s})},list(e,t){return l(["companies",e,"cyber-one","assets"],()=>i.get(`${p}/companies/${e.value}/cyber-one/assets`).then(s=>s.data),{enabled:t})}},r={};r.props={value:{key:"value",required:!0,type:Array}};r.setup=(e,t)=>{const s=e,{value:a}=y(s),n=d(),u=[n.accessor("id",{header:()=>"ID",enableColumnFilter:!1}),n.accessor("name",{header:()=>"Name",enableColumnFilter:!1}),n.accessor("referenceId",{header:()=>"Reference ID",enableColumnFilter:!1}),n.accessor("domain",{header:()=>"Domain",enableColumnFilter:!1})];return{instance:$(a,u)}};r.components=Object.assign({AppTanStackTable:v},r.components);var T=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("AppTanStackTable",{attrs:{table:e.instance}})},k=[];const m={};var A=f(r,T,k,!1,S,null,null,null);function S(e){for(let t in m)this[t]=m[t]}const g=function(){return A.exports}(),o={};o.setup=(e,t)=>{const s=b("id"),a=x.read(s),n=h(()=>{var c;return!!((c=a.data.value)!=null&&c.apiKey)});return{assets:C.list(s,n)}};o.components=Object.assign({CyberOneAssetsTable:g},o.components);var F=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("BaseTablePageLayout",{scopedSlots:e._u([{key:"overline",fn:function(){return[e._v("VRM Dashboard")]},proxy:!0},{key:"title",fn:function(){return[e._v("Assets")]},proxy:!0},{key:"table",fn:function(){return[s("BaseVueQuery",{attrs:{query:e.assets},scopedSlots:e._u([{key:"success",fn:function(a){var n=a.data;return[s("CyberOneAssetsTable",{attrs:{value:n||[]}})]}}])})]},proxy:!0}])})},O=[];const _={};var R=f(o,F,O,!1,j,null,null,null);function j(e){for(let t in _)this[t]=_[t]}const P=function(){return R.exports}();export{P as default};
