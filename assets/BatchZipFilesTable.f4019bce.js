import{aT as b,aD as h,ag as _,aP as c,aQ as r,c as y,aK as v,aS as p,bs as g,n as F}from"./index.575adb5e.js";import{A as T,T as $}from"./AppTanStackTable.95f4ee53.js";import{c as A}from"./createOnChangeFn.b853c32f.js";import{F as C}from"./FileSaver.min.3e2416ce.js";import{u as S}from"./createSimpleTable.ab814bb9.js";const V={create(e){const t=b();return h(s=>c.post(`${r}/companies/${e.value}/batch/scorecards`,s).then(i=>i.data),{onSuccess(){t.invalidateQueries(["companies",e,"batch","scorecards"],{exact:!0})}})},list(e){return _(["companies",e,"batch","scorecards"],()=>c.get(`${r}/companies/${e.value}/batch/scorecards`).then(t=>t.data))}},n={};n.props={zipFiles:{key:"zipFiles",required:!0,type:Array}};n.setup=(e,t)=>{const s=e,i=y(()=>s.zipFiles),o=A(),m=v(),d=[o.accessor("zipFileName",{header:()=>"File Name",enableColumnFilter:!1}),o.accessor("supplierScorecardInfos",{header:()=>"Total Reports",cell:a=>a.getValue.length,enableColumnFilter:!1}),o.accessor(a=>a.createdAt,{id:"createdAt",header:()=>"Created At",cell:a=>p(g,{props:{value:a.getValue(),format:"date"}}),enableColumnFilter:!1}),o.display({id:"actions",header:"Actions",cell:({row:a})=>p($,{props:{actions:[{id:"download",async action(){const l=encodeURIComponent(a.original.id),f=await c(`${r}/companies/${a.original.companyId}/batch/file/zip/${l}`,{responseType:"blob"});C.exports.saveAs(f.data,a.original.zipFileName+".zip")}},{id:"delete",async action(){const l=encodeURIComponent(a.original.id);confirm("Do you really want to delete this ZIP file?")&&(await c.post(`${r}/companies/${a.original.companyId}/batch/file/zip/${l}`),m.go)}}]}})})];return{instance:S(i,d)}};n.components=Object.assign({AppTanStackTable:T},n.components);var z=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("AppTanStackTable",{attrs:{table:e.instance}})},I=[];const u={};var x=F(n,z,I,!1,R,null,null,null);function R(e){for(let t in u)this[t]=u[t]}const Z=function(){return x.exports}();export{Z as B,V as u};