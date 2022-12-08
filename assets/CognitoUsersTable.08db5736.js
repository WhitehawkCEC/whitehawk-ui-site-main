import{ap as E,aN as j,n as v,c as u,b5 as q,bl as D,aG as I,aR as p}from"./index.f9aabd94.js";import{C as M}from"./CognitoUserStatusDisplay.3c9bb527.js";import{U as R}from"./UserGravatarDisplay.f633f77e.js";import{A as V,T as w}from"./AppTanStackTable.5da2a33c.js";import{c as B}from"./createOnChangeFn.826f72eb.js";import{a as L}from"./attributeListToMap.bea9f70d.js";import{u as G}from"./createSimpleTable.a2a2ef51.js";const m={};m.props={value:{key:"value",required:!0,type:Boolean}};m.setup=(s,t)=>({});m.components=Object.assign({CheckSvg:E,XSvg:j},m.components);var H=function(){var s=this,t=s.$createElement,n=s._self._c||t;return n("div",{staticClass:"pointer-events-none inline-flex shrink-0 rounded-full bg-gray-100 shadow-inner"},[s.value?[n("CheckSvg",{staticClass:"h-auto w-5 text-teal-500"})]:[n("XSvg",{staticClass:"h-auto w-5 text-red-500"})]],2)},N=[];const b={};var O=v(m,H,N,!1,X,null,null,null);function X(s){for(let t in b)this[t]=b[t]}const z=function(){return O.exports}(),f={};f.props={value:{key:"value",required:!0,type:Array}};f.setup=(s,t)=>({});var J=function(){var s=this,t=s.$createElement,n=s._self._c||t;return n("ul",{staticClass:"flex max-w-xs flex-wrap space-x-1"},s._l(s.value,function(o,d){return n("li",{key:o.id},[n("BaseLink",{attrs:{to:o.link}},[n("BaseTypography",{attrs:{variant:"p2"}},[s._v(" "+s._s(d+1!==s.value.length?o.name+",":o.name)+" ")])],1)],1)}),0)},K=[];const y={};var P=v(f,J,K,!1,Q,null,null,null);function Q(s){for(let t in y)this[t]=y[t]}const W=function(){return P.exports}(),_={};_.props={users:{key:"users",required:!0,type:Array},companyAccess:{key:"companyAccess",required:!1,type:Array},bulkActions:{key:"bulkActions",required:!1,type:Array}};_.setup=(s,t)=>{const n=s,o=u(()=>{const e=new Map;if(n.companyAccess)for(const{company:a,user:r}of n.companyAccess){const i=r.id,c=e.get(i);c?c.push(a):e.set(i,[a])}for(const a of e.values())a.sort((r,i)=>r.name.localeCompare(i.name));return e}),d=u(()=>n.users.map(({Username:e,Enabled:a,UserStatus:r,Attributes:i})=>{const c=L(i||[]),U=c.sub,T=o.value.get(U)||[],F=g(T);return{username:e||"",enabled:a||!1,userStatus:r,attributes:c,companies:F}}));function g(e){return e.map(a=>({...a,link:`/admin/companies/${encodeURIComponent(a.id)}/`}))}const C=q(),S=D(),k=u(()=>{var e;return(e=S.user)==null?void 0:e.id}),x=I(),A=u(()=>x.id),l=B(),$=[l.accessor(e=>e.attributes.email,{id:"email",header:()=>"Email",cell:e=>p(R,{props:{value:e.getValue()}}),enableColumnFilter:!1}),l.accessor(e=>e.attributes.name,{id:"name",header:()=>"Name",enableColumnFilter:!1}),l.accessor("userStatus",{header:()=>"Status",cell:e=>p(M,{props:{value:e.getValue()}}),enableColumnFilter:!1}),l.accessor("companies",{header:()=>"Companies",cell:e=>p(W,{props:{value:e.getValue()}}),enableColumnFilter:!1}),l.accessor("enabled",{header:()=>"Enabled",cell:e=>p(z,{props:{value:e.getValue()}}),enableColumnFilter:!1}),l.display({id:"actions",header:"Actions",cell:({row:e})=>p(w,{props:{actions:[{id:"edit",to:`/admin/users/${e.original.username}`},{id:"impersonate",action(){const a=e.original,r={username:a.username,id:a.attributes.sub,email:a.attributes.email,name:a.attributes.name,phone:a.attributes.phone_number};C.set(r)},isDisabled:u(()=>e.original.attributes.sub===A.value||e.original.attributes.sub===k.value)}]}})})];return{instance:G(d,$)}};_.components=Object.assign({AppTanStackTable:V},_.components);var Y=function(){var s=this,t=s.$createElement,n=s._self._c||t;return n("AppTanStackTable",{attrs:{table:s.instance,"table-actions":s.bulkActions}})},Z=[];const h={};var ee=v(_,Y,Z,!1,se,null,null,null);function se(s){for(let t in h)this[t]=h[t]}const ue=function(){return ee.exports}();export{ue as C};