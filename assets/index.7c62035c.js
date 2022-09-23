import{A as _,T as d}from"./AppTanStackTable.e1a870b9.js";import{c as f}from"./createOnChangeFn.af5d9675.js";import{c as v,aI as h,aR as y,n as p}from"./index.7b120442.js";import{u as b}from"./createSimpleTable.00cd422c.js";import{u as g}from"./useGroups.8e00e490.js";import"./magnifying-glass.b7cbe8fe.js";import"./chevron-left.0808b01b.js";import"./TransitionExpand.c6a1c219.js";import"./chevron-up.736f4142.js";const o={};o.props={value:{key:"value",required:!0,type:Array}};o.setup=(e,t)=>{const n=e,a=v(()=>n.value),c=h(),i=f(),m=[i.accessor(s=>s.GroupName,{id:"name",header:()=>"Name",enableColumnFilter:!1}),i.accessor(s=>s.Description,{id:"description",header:()=>"Description",enableColumnFilter:!1}),i.display({id:"actions",header:"Actions",cell:({row:s})=>y(d,{props:{actions:[{id:"edit",action(){c.push(`/admin/groups/${s.original.GroupName}`)}}]}})})];return{instance:b(a,m)}};o.components=Object.assign({AppTanStackTable:_},o.components);var T=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("AppTanStackTable",{attrs:{table:e.instance}})},$=[];const u={};var x=p(o,T,$,!1,C,null,null,null);function C(e){for(let t in u)this[t]=u[t]}const A=function(){return x.exports}(),r={};r.setup=(e,t)=>({groups:g.list()});r.components=Object.assign({CognitoGroupsTable:A},r.components);var G=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("main",{staticClass:"space-y-4"},[n("BaseTypography",{attrs:{component:"h2",variant:"h5"}},[e._v("Groups")]),n("BaseVueQuery",{attrs:{query:e.groups},scopedSlots:e._u([{key:"success",fn:function(a){var c=a.data;return[n("CognitoGroupsTable",{attrs:{value:c}})]}}])})],1)},S=[];const l={};var j=p(r,G,S,!1,k,null,null,null);function k(e){for(let t in l)this[t]=l[t]}const V=function(){return j.exports}();export{V as default};
