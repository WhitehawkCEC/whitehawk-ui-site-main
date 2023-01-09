import{n as _,c as k,b as w,d as g,aF as I,aS as m,bs as j,c8 as y}from"./index.e5c5258b.js";import{A as B,T as A}from"./AppTanStackTable.fca2d5e1.js";import{T as D}from"./ToolTip.ed53b4b7.js";import{T as F}from"./TransitionExpand.4b744411.js";import{S as O}from"./StarLevelDisplay.1e8a96d9.js";import{c as E}from"./createOnChangeFn.28a542d8.js";import{u as L,g as R,s as M}from"./sortBy.a8b121e6.js";import{u as N}from"./createSimpleTable.54ee86c4.js";import{K as q}from"./KnownStandardCodes.dc74bde0.js";import"./magnifying-glass.b7cbe8fe.js";import"./keys.fac39b34.js";import"./chevron-up.736f4142.js";import"./_baseAssignValue.46cfc7d1.js";import"./_Uint8Array.ac1d1af4.js";import"./_baseIteratee.fee4b2a2.js";import"./_baseIsEqual.f1b394e9.js";import"./_arrayMap.dcea68f3.js";const l={};l.props={value:{key:"value",required:!0,type:String}};l.setup=(e,t)=>({});l.components=Object.assign({ToolTip:D},l.components);var K=function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("div",{staticClass:"flex items-center space-x-2"},[o("BaseTypography",{staticClass:"text-gray-500 group-hover:text-blue-500",attrs:{variant:"p2",component:"p"}},[e._v(" "+e._s(e.value)+" ")]),o("ToolTip",[e._v(" Confidence percentages are based on the number of previously saved data points available. ")])],1)},V=[];const C={};var z=_(l,K,V,!1,G,null,null,null);function G(e){for(let t in C)this[t]=C[t]}const H=function(){return z.exports}(),p={};p.props={value:{key:"value",required:!0,type:String}};p.setup=(e,t)=>({isShowing:w(!1)});p.components=Object.assign({TransitionExpand:F,ToggleButton:k},p.components);var P=function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("div",{staticClass:"flex max-w-3xl items-end justify-between space-x-2"},[o("TransitionExpand",[o("BaseTypography",{staticClass:"max-w-xs text-gray-500 group-hover:text-blue-500",class:e.isShowing?"max-h-[220rem]":"max-h-6 truncate",attrs:{variant:"p2",component:"p"}},[e._v(" "+e._s(e.value)+" ")])],1),o("ToggleButton",{class:e.isShowing?"rotate-180 transform transition duration-500":"",attrs:{"aria-label":"Toggle description"},model:{value:e.isShowing,callback:function(n){e.isShowing=n},expression:"isShowing"}})],1)},U=[];const b={};var W=_(p,P,U,!1,J,null,null,null);function J(e){for(let t in b)this[t]=b[t]}const Q=function(){return W.exports}(),u={};u.props={id:{key:"id",required:!0,type:String},controls:{key:"controls",required:!0,type:Array}};u.setup=(e,t)=>{const o=e,n=g(()=>o.id),s=g(()=>o.controls.map(r=>{const{ItemCode:v,StarLevel:x,Confidence:T,ItemDescription:$}=r;return{itemCode:v,starLevel:x,confidence:`${T.toFixed(0)}%`,description:$}})),c=I(),i=L.create(),a=E(),f=[a.accessor("itemCode",{header:()=>"Control Code",enableColumnFilter:!1}),a.accessor("description",{header:()=>"Description",cell:r=>m(Q,{props:{value:r.getValue()}}),enableColumnFilter:!1}),a.accessor("starLevel",{header:()=>"Star Level",cell:r=>m(O,{props:{value:r.getValue()}}),enableColumnFilter:!1}),a.accessor("confidence",{header:()=>"Confidence",cell:r=>m(H,{props:{value:r.getValue()}}),enableColumnFilter:!1}),a.display({id:"actions",header:"Actions",cell:({row:r})=>m(A,{props:{actions:[{id:"add",async action(){const v={companyId:n.value,category:"pending",todoText:r.original.description,itemComplete:!1,order:0,readOnly:!1,createdAt:new Date().toISOString()};await i.mutateAsync(v)&&c.success("Successfully added to action plan.")}}]}})})];return{instance:N(s,f)}};u.components=Object.assign({AppTanStackTable:B},u.components);var X=function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("AppTanStackTable",{attrs:{table:e.instance}})},Y=[];const h={};var Z=_(u,X,Y,!1,ee,null,null,null);function ee(e){for(let t in h)this[t]=h[t]}const te=function(){return Z.exports}(),oe={read(e,t){const o=q.find(n=>n.frameworkId===e.value);if(o){const n=o.data,s=R(n.Controls,"AreaName"),c=re(s),i=ne(t.value);return c[i]}}};function ne(e){return e.split("-").join(" ").toLocaleUpperCase()}function re(e){const t=new Map;for(const[o,n]of Object.entries(e)){const s=o.toLocaleUpperCase();t.set(s,n)}return Object.fromEntries(t)}const d={};d.setup=(e,t)=>{const o=y("id"),n=y("frameworkId"),s=y("controlId"),c=oe.read(n,s),i=g(()=>c?M(c,"ItemCode"):[]);function a(f){return f.split("-").join(" ")}return{id:o,frameworkId:n,controlId:s,sorted:i,formatId:a}};d.components=Object.assign({BackButton:j,ComplianceControlsTable:te},d.components);var se=function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("BaseTablePageLayout",{scopedSlots:e._u([{key:"backButton",fn:function(){return[o("BackButton",{attrs:{link:".."}})]},proxy:!0},{key:"overline",fn:function(){return[e._v(" "+e._s(e.frameworkId)+" ")]},proxy:!0},{key:"title",fn:function(){return[o("span",{staticClass:"capitalize"},[e._v(e._s(e.formatId(e.controlId)))])]},proxy:!0},{key:"table",fn:function(){return[o("ComplianceControlsTable",{attrs:{id:e.id,"framework-id":e.frameworkId,"control-id":e.controlId,controls:e.sorted}})]},proxy:!0}])})},ae=[];const S={};var ce=_(d,se,ae,!1,ie,null,null,null);function ie(e){for(let t in S)this[t]=S[t]}const we=function(){return ce.exports}();export{we as default};
