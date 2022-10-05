import{aC as m,n as l,bG as _,b$ as f,aJ as d,r as v}from"./index.2f8dadb3.js";import{B as y}from"./BackButton.01c40626.js";import{D as x}from"./DynamicForm.ae78fcbe.js";import{u as h}from"./useAccountGroups.9b5c8dcc.js";import"./chevron-left.0808b01b.js";const n={};n.props={value:{key:"value",required:!1,type:null}};n.setup=(t,s)=>{const e=t,o=s.emit;return{proxy:m(e,o),schema:[{name:"id",label:"Id",component:{is:"BaseInput",attrs:{required:!0}}},{name:"name",label:"Name",component:{is:"BaseInput",attrs:{required:!0}}}]}};n.components=Object.assign({DynamicForm:x},n.components);var C=function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("DynamicForm",{attrs:{schema:t.schema},model:{value:t.proxy,callback:function(o){t.proxy=o},expression:"proxy"}})},g=[];const u={};var $=l(n,C,g,!1,b,null,null,null);function b(t){for(let s in u)this[s]=u[s]}const B=function(){return $.exports}(),r={};r.setup=(t,s)=>{const e=f("id"),o=d(),a=v(),c=h.create(e);async function p(){a.value&&(await c.mutateAsync(a.value),o.push(`/admin/companies/${e.value}/scorecards/portfolio/groups`))}return{id:e,group:a,createGroup:p}};r.components=Object.assign({BackButton:y,PortfolioGroupInput:B,UsersSvg:_},r.components);var G=function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("section",{staticClass:"space-y-4"},[e("BackButton",{attrs:{link:`/admin/companies/${t.id}/scorecards/portfolio/groups`}}),e("BaseSimpleCard",{staticClass:"divide-y"},[e("h2",{staticClass:"p-4 font-display text-lg font-semibold"},[t._v("Add New Group")]),e("form",{staticClass:"divide-y",on:{submit:function(o){return o.preventDefault(),t.createGroup.apply(null,arguments)}}},[e("PortfolioGroupInput",{model:{value:t.group,callback:function(o){t.group=o},expression:"group"}}),e("div",{staticClass:"p-4"},[e("div",{staticClass:"md:inline-flex"},[e("BaseButton",{staticClass:"w-full space-x-2 md:w-auto",attrs:{"display-type":"info"}},[e("UsersSvg",{staticClass:"h-auto w-4 xl:w-5"}),e("span",[t._v("Create Group")])],1)],1)])],1)])],1)},k=[];const i={};var w=l(r,G,k,!1,D,null,null,null);function D(t){for(let s in i)this[s]=i[s]}const R=function(){return w.exports}();export{R as default};