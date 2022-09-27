import{ai as p,aP as d,aQ as _,n as l,aC as y,d as f,bN as v,b0 as b}from"./index.f5fd5acd.js";import{D as h}from"./DynamicForm.de01508f.js";import{A as x}from"./AddressClaimInput.3719287a.js";import{d as I}from"./index.df251787.js";import{b as B}from"./FormValidation.907ef868.js";const z={list(){return p(["industries"],()=>d.get(`${_}/industries`).then(e=>e.data))}},C=[{name:"bitsightId",label:"Bitsight company id",component:{is:"BaseInput"}},{name:"bitsightAccessCompanyId",label:"Bitsight access company id",component:{is:"BaseInput"}}],D=I(C);let g,A;const r={};var k=l(D,g,A,!1,q,null,null,null);function q(e){for(let t in r)this[t]=r[t]}const F=function(){return k.exports}(),n={};n.props={value:{key:"value",required:!1,type:null,default:void 0},industries:{key:"industries",required:!1,type:Array,default:()=>[]},isReadonly:{key:"isReadonly",required:!1,type:Boolean,default:!1}};n.setup=(e,t)=>{const s=e,a=t.emit,c=y(s,a),u=f(()=>[{name:"id",label:"ID",component:{is:v,attrs:{required:!0,readonly:s.isReadonly,validator:B}}},{name:"name",label:"Display Name",component:{is:"BaseInput",attrs:{class:"max-w-xs",placeholder:"My Company",required:!0}}},{name:"domain",label:"Domain",component:{is:"BaseInput",attrs:{class:"max-w-xs",type:"url",placeholder:"https://company-site.com"}}},{name:"industry",label:"Industry",component:{is:b,attrs:{class:"max-w-sm",options:[{text:"",value:null},...s.industries.map(({id:m,name:o})=>({text:o,value:{id:m,name:o}}))]}}},{name:"attributes",label:"Attributes",component:{is:F}},{name:"address",label:"Address",component:{is:x}}]);return{proxy:c,schema:u}};n.components=Object.assign({DynamicForm:h},n.components);var R=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("DynamicForm",{attrs:{schema:e.schema},model:{value:e.proxy,callback:function(a){e.proxy=a},expression:"proxy"}})},S=[];const i={};var $=l(n,R,S,!1,j,null,null,null);function j(e){for(let t in i)this[t]=i[t]}const E=function(){return $.exports}();export{E as C,z as u};
