import{C as u}from"./cog-8-tooth.1790889c.js";import{D as p}from"./document-chart-bar.32a60c42.js";import{K as m}from"./key.80cb24b1.js";import{S as d,C as f}from"./PortfolioNav.af44e2eb.js";import{bs as v,cS as _,bJ as x,c0 as r,c as g,n as C}from"./index.d7f0b820.js";import{u as y}from"./useAccountGroups.2f2def0e.js";const c={};c.setup=(s,t)=>{const e=r("id"),o=r("groupId"),a=y.read(e,o),l=g(()=>{const n=`/admin/companies/${encodeURIComponent(e.value)}/scorecards/portfolio/groups/${o.value}`;return[{to:`${n}`,name:"Scorecards",icon:p},{to:`${n}/license-batches`,name:"License Batches",icon:f},{to:`${n}/api-key`,name:"Update Token",icon:m},{to:`${n}/edit`,name:"Edit",icon:u}]});return{id:e,group:a,links:l}};c.components=Object.assign({BackButton:v,BaseVueQuery:_,GroupSvg:x,StepParentPageLinks:d},c.components);var S=function(){var s=this,t=s.$createElement,e=s._self._c||t;return e("div",{staticClass:"space-y-6"},[e("div",{staticClass:"flex flex-col space-y-4 xl:flex-row xl:justify-between xl:space-y-0"},[e("div",{staticClass:"flex flex-col space-y-4 sm:flex-row sm:items-center sm:space-y-0 sm:space-x-4"},[e("div",[e("BackButton",{attrs:{link:`/admin/companies/${s.id}/scorecards/portfolio/groups`}})],1),e("BaseVueQuery",{attrs:{query:s.group},scopedSlots:s._u([{key:"success",fn:function(o){var a=o.data;return[e("div",{staticClass:"flex items-center space-x-2"},[e("div",{staticClass:"rounded-full bg-indigo-600 p-2"},[e("GroupSvg",{staticClass:"h-6 w-6 text-white"})],1),e("div",{staticClass:"flex flex-col"},[e("h2",{staticClass:"font-display text-lg font-semibold capitalize"},[s._v(" "+s._s(a.name)+" ")]),e("BaseOverline",{staticClass:"uppercase"},[s._v(" "+s._s(a.id)+" ")])],1)])]}}])})],1),e("StepParentPageLinks",{attrs:{links:s.links}})],1),e("RouterView")],1)},k=[];const i={};var h=C(c,S,k,!1,B,null,null,null);function B(s){for(let t in i)this[t]=i[t]}const j=function(){return h.exports}();export{j as default};