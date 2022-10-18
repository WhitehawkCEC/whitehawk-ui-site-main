import{C as i}from"./CognitoUsersTable.3976e773.js";import{ag as c,bv as p,bw as l,bt as m,bu as _,bs as y,b$ as f,aI as v,n as d}from"./index.fc8bdabe.js";import{u as b}from"./useGroups.0aa93e17.js";import"./CognitoUserStatusDisplay.d7cb5fde.js";import"./UserGravatarDisplay.421fd658.js";import"./AppTanStackTable.c38ccd88.js";import"./createOnChangeFn.84545afb.js";import"./chevron-up.736f4142.js";import"./magnifying-glass.b7cbe8fe.js";import"./TransitionExpand.8e90e13f.js";import"./attributeListToMap.bea9f70d.js";import"./createSimpleTable.487aed71.js";const g={list(t){return c([m,"groups",t,"users"],async()=>await p(l(s=>_.listUsersInGroup({GroupName:t.value,NextToken:s}),"NextToken","Users")),{})}},r={};r.setup=(t,e)=>{const s=f("name"),a=b.delete(s),o=g.list(s),u=v();return{name:s,users:o,bulkActions:[{id:"delete",async action(){confirm(`Are you sure you want to delete ${s.value} group?`)&&(await a.mutateAsync(),u.push("/groups"))}}]}};r.components=Object.assign({BackButton:y,CognitoUsersTable:i},r.components);var k=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("section",{staticClass:"space-y-6"},[s("BackButton",{attrs:{link:"/admin/groups"}}),s("div",{staticClass:"flex flex-col"},[s("BaseTypography",{staticClass:"uppercase",attrs:{variant:"overline"}},[t._v(" Edit Group ")]),s("BaseTypography",{staticClass:"capitalize",attrs:{variant:"h5",component:"h2"}},[t._v(" "+t._s(t.name)+" ")])],1),s("BaseVueQuery",{attrs:{query:t.users},scopedSlots:t._u([{key:"success",fn:function(a){var o=a.data;return[s("CognitoUsersTable",{attrs:{users:o,"company-access":[],"bulk-actions":t.bulkActions}})]}}])})],1)},x=[];const n={};var h=d(r,k,x,!1,C,null,null,null);function C(t){for(let e in n)this[e]=n[e]}const E=function(){return h.exports}();export{E as default};