import{r as f,c as o,aI as B,n as v,cz as d,aA as R,aF as D,bX as T}from"./index.7b120442.js";import{u as C}from"./useUsers.78a16b32.js";import{U as j}from"./arrow-down-on-square.bf61cdc5.js";import{e as E}from"./attributeValue.ea53a720.js";const _={};_.props={username:{key:"username",required:!0,type:String},email:{key:"email",required:!0,type:String}};_.setup=(e,t)=>{const s=e,n=f(!1),i=C.delete(o(()=>s.username)),r=B();async function m(){await i.mutateAsync(),r.push("/admin/users")}return{confirm:n,submit:m}};var F=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("form",{staticClass:"divide-y",on:{submit:function(n){return n.preventDefault(),e.submit.apply(null,arguments)}}},[s("BaseLabel",{staticClass:"flex flex-col space-x-2 p-4 lg:flex-row lg:justify-between"},[s("div",{staticClass:"flex items-center space-x-2"},[s("BaseInput",{attrs:{type:"checkbox"},model:{value:e.confirm,callback:function(n){e.confirm=n},expression:"confirm"}}),s("span",[e._v("I am certain that I want to disable:")])],1),s("a",{staticClass:"truncate indent-4 font-bold italic",attrs:{href:`mailto:${e.email}`}},[e._v(" "+e._s(e.email)+" ")])]),s("div",{staticClass:"p-4"},[s("div",{staticClass:"md:inline-flex"},[s("BaseButton",{staticClass:"w-full md:w-auto",attrs:{"display-type":"danger",disabled:!e.confirm}},[e._v(" Disable ")])],1)])],1)},N=[];const x={};var I=v(_,F,N,!1,q,null,null,null);function q(e){for(let t in x)this[t]=x[t]}const z=function(){return I.exports}(),u={};u.props={username:{key:"username",required:!0,type:String}};u.setup=(e,t)=>{const s=e,n=["user-access-general","user-access-industry","user-access-rating","user-access-maturity","cyber-journey-black-kite"],i=f([]),r=f(""),m=[...n,"admin","analyst","cognito-admin"],k={whitehawkAdmin:{label:"WhiteHawk Administrator"},whitehawkAnalyst:{label:"WhiteHawk Analyst"},client:{label:"Client User"}},y=d.list(o(()=>s.username)),p=o(()=>(y.data.value||[]).map(l=>l.GroupName).filter(l=>l!==void 0)),h=o(()=>{switch(r.value){case"whitehawkAdmin":return["admin","cognito-admin"];case"whitehawkAnalyst":return["analyst","cognito-admin"];case"client":return i.value;default:throw new Error(r.value)}}),S=o(()=>h.value.filter(a=>!p.value.includes(a))),$=o(()=>p.value.filter(a=>!h.value.includes(a)).filter(a=>m.includes(a)));R(p,a=>{i.value=a.filter(l=>n.includes(l)),a.includes("admin")?r.value="whitehawkAdmin":a.includes("analyst")?r.value="whitehawkAnalyst":r.value="client"},{immediate:!0});const G=d.create(o(()=>s.username)),A=d.delete(o(()=>s.username)),g=D();async function U(){try{for(const a of S.value)await G.mutateAsync({Username:s.username,GroupName:a});for(const a of $.value)await A.mutateAsync({Username:s.username,GroupName:a});g.success("Saved groups")}catch(a){g.error(`Failed to save groups: ${a}`,a)}}return{userRoleType:r,roleTypes:k,userGroups:y,save:U}};u.components=Object.assign({SaveSvg:j},u.components);var M=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",[s("BaseVueQuery",{attrs:{query:e.userGroups},scopedSlots:e._u([{key:"success",fn:function(){return[s("form",{staticClass:"divide-y",on:{submit:function(n){return n.preventDefault(),e.save.apply(null,arguments)}}},[s("div",{staticClass:"space-y-2 p-4"},e._l(e.roleTypes,function(n,i){return s("BaseLabel",{key:i,staticClass:"flex items-center space-x-2"},[s("BaseInput",{attrs:{type:"radio",value:i},model:{value:e.userRoleType,callback:function(r){e.userRoleType=r},expression:"userRoleType"}}),s("span",{staticClass:"capitalize"},[e._v(e._s(n.label))])],1)}),1),s("div",{staticClass:"p-4"},[s("div",{staticClass:"md:inline-flex"},[s("BaseButton",{staticClass:"w-full space-x-2 md:w-auto",attrs:{"display-type":"info"}},[s("SaveSvg",{staticClass:"h-5 w-5"}),s("span",[e._v("Save")])],1)],1)])])]},proxy:!0}])})],1)},H=[];const b={};var L=v(u,M,H,!1,O,null,null,null);function O(e){for(let t in b)this[t]=b[t]}const W=function(){return L.exports}(),c={};c.setup=(e,t)=>{const s=T("username"),n=C.read(s),i=o(()=>n.data.value?E(n.data.value,"email"):null);return{username:s,email:i}};c.components=Object.assign({UserGroupsEdit:W,DisableUserForm:z},c.components);var P=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("section",{staticClass:"space-y-8"},[s("BaseSimpleCard",{staticClass:"divide-y"},[s("h2",{staticClass:"p-4 font-display text-lg font-semibold"},[e._v("Edit Groups")]),s("UserGroupsEdit",{attrs:{username:e.username}})],1),s("BaseSimpleCard",{staticClass:"divide-y"},[s("h2",{staticClass:"p-4 font-display text-lg font-semibold"},[e._v("Disable User")]),e.email?s("DisableUserForm",{attrs:{username:e.username,email:e.email}}):e._e()],1)],1)},Q=[];const w={};var X=v(c,P,Q,!1,J,null,null,null);function J(e){for(let t in w)this[t]=w[t]}const ee=function(){return X.exports}();export{ee as default};
