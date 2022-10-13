import{aV as b,aF as h,ai as _,aR as c,aS as r,d as y,aK as v,aU as p,bu as F,n as g}from"./index.ad2ff904.js";import{A as $,T as A}from"./AppTanStackTable.a9750958.js";import{c as C}from"./createOnChangeFn.9f62ccbf.js";import{F as S}from"./FileSaver.min.bff023fc.js";import{u as T}from"./createSimpleTable.e78f974d.js";const Q={create(e){const t=b();return h(s=>c.post(`${r}/companies/${e.value}/batch/scorecards`,s).then(i=>i.data),{onSuccess(){t.invalidateQueries(["companies",e,"batch","scorecards"],{exact:!0})}})},list(e){return _(["companies",e,"batch","scorecards"],()=>c.get(`${r}/companies/${e.value}/batch/scorecards`).then(t=>t.data))}},n={};n.props={zipFiles:{key:"zipFiles",required:!0,type:Array}};n.setup=(e,t)=>{const s=e,i=y(()=>s.zipFiles),o=C(),m=v(),d=[o.accessor("zipFileName",{header:()=>"File Name",enableColumnFilter:!1}),o.accessor("supplierScorecardInfos",{header:()=>"Total Reports",cell:a=>a.getValue.length,enableColumnFilter:!1}),o.accessor(a=>a.createdAt,{id:"createdAt",header:()=>"Created At",cell:a=>p(F,{props:{value:a.getValue(),format:"date"}}),enableColumnFilter:!1}),o.display({id:"actions",header:"Actions",cell:({row:a})=>p(A,{props:{actions:[{id:"download",async action(){const l=encodeURIComponent(a.original.id),f=await c(`${r}/companies/${a.original.companyId}/batch/file/zip/${l}`,{responseType:"blob"});S.exports.saveAs(f.data,a.original.zipFileName+".zip")}},{id:"delete",async action(){const l=encodeURIComponent(a.original.id);confirm("Do you really want to delete this ZIP file?")&&(await c.post(`${r}/companies/${a.original.companyId}/batch/file/zip/${l}`),m.go)}}]}})})];return{instance:T(i,d)}};n.components=Object.assign({AppTanStackTable:$},n.components);var z=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("AppTanStackTable",{attrs:{table:e.instance}})},I=[];const u={};var x=g(n,z,I,!1,R,null,null,null);function R(e){for(let t in u)this[t]=u[t]}const Z=function(){return x.exports}();export{Z as B,Q as u};