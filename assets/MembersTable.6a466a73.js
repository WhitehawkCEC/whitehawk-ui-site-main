import{U as _}from"./UserGravatarDisplay.aa2abb3e.js";import{A as v,T as b}from"./AppTanStackTable.781950fc.js";import{P as h}from"./PermissionsBadge.b4fcab9b.js";import{c as y}from"./createOnChangeFn.59e837a0.js";import{bR as g,c,aI as T,aS as i,n as k}from"./index.3cac3a76.js";import{u as A}from"./createSimpleTable.269105f3.js";const r={};r.props={id:{key:"id",required:!0,type:String},access:{key:"access",required:!0,type:Array},hasPermissions:{key:"hasPermissions",required:!1,type:Boolean,default:!0}};r.setup=(s,a)=>{const n=s,{id:m,access:t,hasPermissions:l}=g(n),p=c(()=>t.value.length>0&&!l.value?t.value.filter(e=>e.user.email?!e.user.email.includes("whitehawk"):e.user.email):t.value),d=T(),o=y(),f=c(()=>[o.accessor(e=>e.user,{id:"member",header:()=>"Member",cell:e=>i(_,{props:{value:e.getValue().email,username:e.getValue().id}}),enableColumnFilter:!1}),o.accessor(e=>e.permission,{id:"permission",header:()=>"Permission",cell:e=>i(h,{props:{value:e.getValue()}}),enableColumnFilter:!1}),o.display({id:"actions",header:"Actions",cell:({row:e})=>i(b,{props:{actions:[{id:"edit",action(){d.push(`/admin/companies/${m.value}/members/${e.original.user.id}`)}}]}})})].filter(e=>l.value?e:e.id!=="actions"));return{instance:A(p,f)}};r.components=Object.assign({AppTanStackTable:v},r.components);var P=function(){var s=this,a=s.$createElement,n=s._self._c||a;return n("AppTanStackTable",{attrs:{table:s.instance}})},S=[];const u={};var x=k(r,P,S,!1,C,null,null,null);function C(s){for(let a in u)this[a]=u[a]}const j=function(){return x.exports}();export{j as M};