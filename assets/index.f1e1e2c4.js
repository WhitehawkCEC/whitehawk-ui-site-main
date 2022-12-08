import{c as S,aR as d,br as T,n as v,am as b,aE as x,aO as $,aP as g}from"./index.f9aabd94.js";import{A as h,T as k}from"./AppTanStackTable.5da2a33c.js";import{c as w}from"./createOnChangeFn.826f72eb.js";import{u as A}from"./createSimpleTable.a2a2ef51.js";import{F as C}from"./FileSaver.min.cb9cac21.js";import{u as f}from"./useScorecardTemplates.7b3eb886.js";import"./magnifying-glass.b7cbe8fe.js";import"./TransitionExpand.b5ac7a01.js";import"./chevron-up.736f4142.js";const i={};i.props={templates:{key:"templates",required:!0,type:Array}};i.setup=(e,t)=>{const a=e,n=t.emit,r=S(()=>a.templates);function u(s){return s.split("/")[1]}const c=w(),o=[c.accessor("key",{header:()=>"Name",cell:s=>u(s.getValue()),enableColumnFilter:!1}),c.accessor("lastUpdated",{header:()=>"Last Updated",cell:s=>d(T,{props:{value:s.getValue(),format:"date"}}),enableColumnFilter:!1}),c.display({id:"actions",header:"Actions",cell:({row:s})=>d(k,{props:{actions:[{id:"download",action(){const l=s.original.key.split("/")[1];l&&n("download",l)}},{id:"archive",action(){const l=s.original.key.split("/")[1];l&&n("delete",l)}}]}})})];return{instance:A(r,o)}};i.components=Object.assign({AppTanStackTable:h},i.components);var F=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("AppTanStackTable",{attrs:{table:e.instance}})},B=[];const _={};var j=v(i,F,B,!1,E,null,null,null);function E(e){for(let t in _)this[t]=_[t]}const P=function(){return j.exports}(),p={};p.setup=(e,t)=>{const a=f.list();async function n(o){const m=await $(`${g}/scorecards/templates/${encodeURIComponent(o)}`,{responseType:"blob"});C.exports.saveAs(m.data,`${o}`)}const r=f.delete(),u=x();async function c(o){await r.mutateAsync(o)&&u.success("Successfully deleted scorecard template.")}return{templates:a,downloadScorecardTemplate:n,deleteScorecardTemplate:c}};p.components=Object.assign({PlusSvg:b,ScorecardTemplatesTable:P},p.components);var R=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("BaseTablePageLayout",{scopedSlots:e._u([{key:"title",fn:function(){return[e._v("Scorecard Templates")]},proxy:!0},{key:"button",fn:function(){return[a("BaseButton",{staticClass:"space-x-1",attrs:{to:"/admin/templates/new"}},[a("PlusSvg",{staticClass:"w-5"}),a("span",[e._v("Scorecard Template")])],1)]},proxy:!0},{key:"table",fn:function(){return[a("BaseVueQuery",{attrs:{query:e.templates},scopedSlots:e._u([{key:"success",fn:function(n){var r=n.data;return[a("ScorecardTemplatesTable",{attrs:{templates:r},on:{delete:e.deleteScorecardTemplate,download:e.downloadScorecardTemplate}})]}}])})]},proxy:!0}])})},U=[];const y={};var V=v(p,R,U,!1,D,null,null,null);function D(e){for(let t in y)this[t]=y[t]}const Q=function(){return V.exports}();export{Q as default};