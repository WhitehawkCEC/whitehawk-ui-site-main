import{B as b}from"./BackButton.f022f255.js";import{A as I,T as k}from"./AppTanStackTable.4f5e0374.js";import{S as h}from"./StarLevelDisplay.e32e2071.js";import{c as S}from"./createOnChangeFn.651ed8c5.js";import{d as x,aS as d,n as _,b_ as m}from"./index.181068a8.js";import{u as g}from"./createSimpleTable.5b663c51.js";import{g as T,s as $}from"./sortBy.463b1e00.js";import{K as w}from"./KnownStandardCodes.dc74bde0.js";import"./chevron-left.0808b01b.js";import"./magnifying-glass.b7cbe8fe.js";import"./TransitionExpand.09b447a3.js";import"./keys.bb0e7749.js";import"./chevron-up.736f4142.js";import"./_baseAssignValue.6692fc7d.js";import"./_Uint8Array.9230702b.js";import"./_baseEach.1bf2ea51.js";import"./_baseIteratee.6f915e4c.js";import"./_baseIsEqual.19bbfcc8.js";import"./_arrayMap.dcea68f3.js";import"./_baseRest.2569ed31.js";import"./_baseOrderBy.b23ebc70.js";const c={};c.props={id:{key:"id",required:!0,type:String},frameworkId:{key:"frameworkId",required:!0,type:String},controlId:{key:"controlId",required:!0,type:String},controls:{key:"controls",required:!0,type:Array}};c.setup=(e,o)=>{const t=e,n=x(()=>t.controls.map(s=>{const{ItemCode:p,StarLevel:v,Confidence:y,ItemDescription:C}=s;return{itemCode:p,starLevel:v,confidence:`${y.toFixed(0)}%`,description:C}})),r=S(),a=[r.accessor("itemCode",{header:()=>"Control Code",enableColumnFilter:!1}),r.accessor("description",{header:()=>"Description",enableColumnFilter:!1}),r.accessor("starLevel",{header:()=>"Star Level",cell:s=>d(h,{props:{value:s.getValue()}}),enableColumnFilter:!1}),r.accessor("confidence",{header:()=>"Confidence",enableColumnFilter:!1}),r.display({id:"actions",header:"Actions",cell:()=>d(k,{props:{actions:[{id:"add",action(){}}]}})})];return{instance:g(n,a)}};c.components=Object.assign({AppTanStackTable:I},c.components);var j=function(){var e=this,o=e.$createElement,t=e._self._c||o;return t("AppTanStackTable",{attrs:{table:e.instance}})},A=[];const u={};var B=_(c,j,A,!1,F,null,null,null);function F(e){for(let o in u)this[o]=u[o]}const L=function(){return B.exports}(),D={read(e,o){const t=w.find(n=>n.frameworkId===e.value);if(t){const n=t.data,r=T(n.Controls,"AreaName"),a=E(r),i=O(o.value);return a[i]}}};function O(e){return e.split("-").join(" ").toLocaleUpperCase()}function E(e){const o=new Map;for(const[t,n]of Object.entries(e)){const r=t.toLocaleUpperCase();o.set(r,n)}return Object.fromEntries(o)}const l={};l.setup=(e,o)=>{const t=m("id"),n=m("frameworkId"),r=m("controlId"),a=D.read(n,r),i=$(a,"ItemCode");function s(p){return p.split("-").join(" ")}return{id:t,frameworkId:n,controlId:r,controls:a,sorted:i,formatId:s}};l.components=Object.assign({BackButton:b,ComplianceControlsTable:L},l.components);var R=function(){var e=this,o=e.$createElement,t=e._self._c||o;return e.controls?t("div",{staticClass:"flex flex-col space-y-8"},[t("div",{staticClass:"flex items-center space-x-4"},[t("BackButton",{attrs:{link:`/client/companies/${e.id}/journey/cyber-maturity-roadmap/${e.frameworkId}`}}),t("BaseTypography",{staticClass:"capitalize",attrs:{component:"h2",variant:"h5"}},[e._v(" "+e._s(e.formatId(e.controlId))+" ")])],1),t("div",{staticClass:"space-y-2"},[t("BaseTypography",{staticClass:"text-gray-500",attrs:{component:"p",variant:"p1"}},[e._v(" Confidence percentages are based on the number of previously saved data points available. ")]),t("ComplianceControlsTable",{attrs:{id:e.id,"framework-id":e.frameworkId,"control-id":e.controlId,controls:e.sorted}})],1)]):e._e()},q=[];const f={};var K=_(l,R,q,!1,N,null,null,null);function N(e){for(let o in f)this[o]=f[o]}const ie=function(){return K.exports}();export{ie as default};