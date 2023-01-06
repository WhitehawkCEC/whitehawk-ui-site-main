import{d as _,aK as b,aS as l,br as h,aP as r,aQ as c,n as y}from"./index.736e53a5.js";import{A as F,T as g}from"./AppTanStackTable.36789334.js";import{c as v}from"./createOnChangeFn.b8e29ae4.js";import{F as A}from"./FileSaver.min.b6491b74.js";import{u as T}from"./createSimpleTable.0f9109bc.js";const n={};n.props={zipFiles:{key:"zipFiles",required:!0,type:Array}};n.setup=(a,t)=>{const s=a,m=_(()=>s.zipFiles),o=v(),d=b(),u=[o.accessor("zipFileName",{header:()=>"File Name",enableColumnFilter:!1}),o.accessor("supplierScorecardInfos",{header:()=>"Total Reports",cell:e=>e.getValue().length,enableColumnFilter:!1}),o.accessor(e=>e.createdAt,{id:"createdAt",header:()=>"Created At",cell:e=>l(h,{props:{value:e.getValue(),format:"date"}}),enableColumnFilter:!1}),o.display({id:"actions",header:"Actions",cell:({row:e})=>l(g,{props:{actions:[{id:"download",async action(){const i=encodeURIComponent(e.original.id),f=await r(`${c}/companies/${e.original.companyId}/batch/file/zip/${i}`,{responseType:"blob"});A.exports.saveAs(f.data,e.original.zipFileName+".zip")}},{id:"delete",async action(){const i=encodeURIComponent(e.original.id);confirm("Do you really want to delete this ZIP file?")&&(await r.post(`${c}/companies/${e.original.companyId}/batch/file/zip/${i}`),d.go)}}]}})})];return{instance:T(m,u)}};n.components=Object.assign({AppTanStackTable:F},n.components);var z=function(){var a=this,t=a.$createElement,s=a._self._c||t;return s("AppTanStackTable",{attrs:{table:a.instance}})},I=[];const p={};var C=y(n,z,I,!1,S,null,null,null);function S(a){for(let t in p)this[t]=p[t]}const N=function(){return C.exports}();export{N as B};