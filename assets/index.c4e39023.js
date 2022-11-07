import{F}from"./FormButton.55dd7c06.js";import{D as A}from"./DynamicForm.4440eb91.js";import{aB as b,n as m,b0 as B,c_ as r,b$ as _,r as f,aA as y,d4 as x,aF as D}from"./index.496d7921.js";import{u as S}from"./useAccountGroups.fbb165b6.js";import"./arrow-down-on-square.bf61cdc5.js";import"./trash.78f57a7a.js";const u={};u.props={value:{key:"value",required:!1,type:null}};u.setup=(t,s)=>{const e=t,a=s.emit;return{proxy:b(e,a),schema:[{name:"name",label:"Name",component:{is:"BaseInput",attrs:{required:!0}}}]}};u.components=Object.assign({DynamicForm:A},u.components);var P=function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("DynamicForm",{attrs:{schema:t.schema},model:{value:t.proxy,callback:function(a){t.proxy=a},expression:"proxy"}})},k=[];const g={};var j=m(u,P,k,!1,U,null,null,null);function U(t){for(let s in g)this[s]=g[s]}const R=function(){return j.exports}(),c={};c.props={value:{key:"value",required:!0,type:null}};c.setup=(t,s)=>{const e=t,a=s.emit,o=b(e,a),i=[{text:"",value:r.GroupState.UNSPECIFIED},{text:"Pending",value:r.GroupState.PENDING},{text:"Active",value:r.GroupState.ACTIVE},{text:"Inactive",value:r.GroupState.INACTIVE},{text:"Archived",value:r.GroupState.ARCHIVED}];return{proxy:o,options:i}};c.components=Object.assign({SimpleSelect:B},c.components);var T=function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("BaseLabel",{staticClass:"grid gap-1 p-4 sm:grid-cols-3 sm:items-center sm:gap-4"},[e("span",{staticClass:"block text-sm font-medium leading-5 text-gray-700"},[t._v(" Status ")]),e("div",{staticClass:"flex sm:col-span-2"},[e("SimpleSelect",{staticClass:"w-full",attrs:{options:t.options},model:{value:t.proxy,callback:function(a){t.proxy=a},expression:"proxy"}})],1)])},q=[];const h={};var M=m(c,T,q,!1,O,null,null,null);function O(t){for(let s in h)this[s]=h[s]}const z=function(){return M.exports}(),l={};l.setup=(t,s)=>{const e=_("id"),a=_("groupId"),o=f(),i=S.read(e,a);y(i.data,n=>{n&&(o.value={name:n.name})},{immediate:!0});const p=f(r.GroupState.UNSPECIFIED),G=x.get(e,a);y(G.data,n=>{const v=n==null?void 0:n.value;v&&(p.value=v)},{immediate:!0});const $=x.update(e,a),d=D();async function I(){p.value&&await $.mutateAsync({value:p.value}),d.success("Status successfully updated.")}const N=S.update(e,a);async function E(){o.value&&await N.mutateAsync(o.value),d.success("Group name successfully updated.")}return{groupName:o,state:p,updateStatus:I,updateName:E}};l.components=Object.assign({PortfolioGroupEdit:R,FormButton:F,GroupStateInput:z},l.components);var H=function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("section",{staticClass:"space-y-6"},[e("BaseSimpleCard",{staticClass:"divide-y"},[e("BaseTypography",{staticClass:"p-4",attrs:{variant:"subtitle3",component:"h2"}},[t._v(" Update Group Name ")]),e("form",{staticClass:"divide-y",on:{submit:function(a){return a.preventDefault(),t.updateName.apply(null,arguments)}}},[e("PortfolioGroupEdit",{model:{value:t.groupName,callback:function(a){t.groupName=a},expression:"groupName"}}),e("FormButton",{attrs:{action:"update"}})],1)],1),e("BaseSimpleCard",{staticClass:"divide-y"},[e("BaseTypography",{staticClass:"p-4",attrs:{variant:"subtitle3",component:"h2"}},[t._v(" Update Group Status ")]),e("form",{staticClass:"divide-y",on:{submit:function(a){return a.preventDefault(),t.updateStatus.apply(null,arguments)}}},[e("GroupStateInput",{model:{value:t.state,callback:function(a){t.state=a},expression:"state"}}),e("FormButton",{attrs:{action:"update"}})],1)],1)],1)},L=[];const C={};var J=m(l,H,L,!1,K,null,null,null);function K(t){for(let s in C)this[s]=C[s]}const V=function(){return J.exports}();export{V as default};
