import{C as c}from"./CognitoUsersTable.f0adc45f.js";import{ah as i,bv as p,bw as l,bt as m,bu as _,bs as y,ca as f,aK as v,n as d}from"./index.9ff333f2.js";import{u as b}from"./useGroups.20353cf3.js";import"./CognitoUserStatusDisplay.0da098af.js";import"./UserGravatarDisplay.e4b160c2.js";import"./AppTanStackTable.75310dba.js";import"./createOnChangeFn.79354cb4.js";import"./chevron-up.736f4142.js";import"./magnifying-glass.b7cbe8fe.js";import"./attributeListToMap.bea9f70d.js";import"./createSimpleTable.81983274.js";const g={list(t){return i([m,"groups",t,"users"],async()=>await p(l(s=>_.listUsersInGroup({GroupName:t.value,NextToken:s}),"NextToken","Users")),{})}},a={};a.setup=(t,e)=>{const s=f("name"),r=b.delete(s),o=g.list(s),u=v();return{name:s,users:o,bulkActions:[{id:"delete",async action(){confirm(`Are you sure you want to delete ${s.value} group?`)&&(await r.mutateAsync(),u.push("/groups"))}}]}};a.components=Object.assign({BackButton:y,CognitoUsersTable:c},a.components);var k=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("section",{staticClass:"space-y-6"},[s("BackButton",{attrs:{link:"/admin/groups"}}),s("div",{staticClass:"flex flex-col"},[s("BaseTypography",{staticClass:"uppercase text-gray-500",attrs:{variant:"overline"}},[t._v(" Edit Group ")]),s("BaseTypography",{staticClass:"capitalize",attrs:{variant:"h5",component:"h2"}},[t._v(" "+t._s(t.name)+" ")])],1),s("BaseVueQuery",{attrs:{query:t.users},scopedSlots:t._u([{key:"success",fn:function(r){var o=r.data;return[s("CognitoUsersTable",{attrs:{users:o,"company-access":[],"bulk-actions":t.bulkActions}})]}}])})],1)},x=[];const n={};var h=d(a,k,x,!1,C,null,null,null);function C(t){for(let e in n)this[e]=n[e]}const E=function(){return h.exports}();export{E as default};