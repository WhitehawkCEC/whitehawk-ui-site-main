import{C as i}from"./CognitoUsersTable.e29e52d8.js";import{B as c}from"./BackButton.f022f255.js";import{ai as p,bu as l,bv as m,bs as _,bt as f,b_ as y,aJ as v,n as d}from"./index.181068a8.js";import{u as b}from"./useGroups.6ba93d22.js";import"./CognitoUserStatusDisplay.41014aa1.js";import"./UserGravatarDisplay.52719fd7.js";import"./AppTanStackTable.4f5e0374.js";import"./createOnChangeFn.651ed8c5.js";import"./chevron-up.736f4142.js";import"./magnifying-glass.b7cbe8fe.js";import"./chevron-left.0808b01b.js";import"./TransitionExpand.09b447a3.js";import"./attributeListToMap.bea9f70d.js";import"./createSimpleTable.5b663c51.js";const g={list(t){return p([_,"groups",t,"users"],async()=>await l(m(s=>f.listUsersInGroup({GroupName:t.value,NextToken:s}),"NextToken","Users")),{})}},r={};r.setup=(t,e)=>{const s=y("name"),o=b.delete(s),a=g.list(s),u=v();return{name:s,users:a,bulkActions:[{id:"delete",async action(){confirm(`Are you sure you want to delete ${s.value} group?`)&&(await o.mutateAsync(),u.push("/groups"))}}]}};r.components=Object.assign({BackButton:c,CognitoUsersTable:i},r.components);var k=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("section",{staticClass:"space-y-6"},[s("BackButton",{attrs:{link:"/admin/groups"}}),s("div",{staticClass:"flex flex-col"},[s("BaseTypography",{staticClass:"uppercase",attrs:{variant:"overline"}},[t._v(" Edit Group ")]),s("BaseTypography",{staticClass:"capitalize",attrs:{variant:"h5",component:"h2"}},[t._v(" "+t._s(t.name)+" ")])],1),s("BaseVueQuery",{attrs:{query:t.users},scopedSlots:t._u([{key:"success",fn:function(o){var a=o.data;return[s("CognitoUsersTable",{attrs:{users:a,"company-access":[],"bulk-actions":t.bulkActions}})]}}])})],1)},x=[];const n={};var h=d(r,k,x,!1,B,null,null,null);function B(t){for(let e in n)this[e]=n[e]}const D=function(){return h.exports}();export{D as default};