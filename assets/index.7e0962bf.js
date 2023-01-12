import{r as R,bG as G,d as v,ab as j,aS as k,br as H,a_ as g,n as O,bs as N,bH as B,bi as P,bI as z}from"./index.1543f442.js";import{S as W}from"./StatisticDisplayCard.88ce03f4.js";import{C as Q}from"./CognitoUserStatusDisplay.b91aeb39.js";import{A as J}from"./AppTanStackTable.666e7cbc.js";import{u as K,c as X,i as f,r as Y,h as Z,g as ee,a as te,f as ae,e as se,d as ne,b as re}from"./createOnChangeFn.4b472854.js";import{a as oe}from"./attributeListToMap.bea9f70d.js";import{a as ie}from"./index.80630a53.js";import{t as w}from"./index.3e2e76eb.js";import{m as L}from"./multiSet.dcd15b85.js";import{u as U}from"./useAllCompanyAccess.b9c66e57.js";import{u as le}from"./useUsers.b99a3af0.js";import"./magnifying-glass.b7cbe8fe.js";import"./chevron-up.736f4142.js";function q(e,n){R(2,arguments);var a=w(e),l=w(n);return a.getTime()>l.getTime()}function I(e,n){R(2,arguments);var a=w(e),l=w(n);return a.getTime()<l.getTime()}function S(e,n){R(2,arguments);var a=G(n);return ie(e,-a)}const b=new Date,ce=[{text:"Within Last 30 Days",isValid(e){const n=S(b,30);return q(e,n)}},{text:"Within Last 60 Days",isValid(e){const n=S(b,60),a=S(b,30);return q(e,n)&&I(e,a)}},{text:"Longer than 90 Days",isValid(e){const n=S(b,90);return I(e,n)}}],_={};_.props={companies:{key:"companies",required:!0,type:Array},users:{key:"users",required:!0,type:Array},access:{key:"access",required:!0,type:Array}};_.setup=(e,n)=>{const a=e,l=v(()=>{const t=Array();return a.users.map(({UserStatus:s,Attributes:o})=>{const r=oe(o||[]);t.push({userStatus:s||"",attributes:r})}),t.sort((s,o)=>{var r,i,d,h;return((i=(r=s.attributes)==null?void 0:r.email)!=null?i:"").localeCompare((h=(d=o.attributes)==null?void 0:d.email)!=null?h:"")})}),m=v(()=>{const t=new Map;for(const{company:s,user:o}of a.access){const r=o.id,i=t.get(r);i?i.push(s):t.set(r,[s])}for(const s of t.values())s.sort((o,r)=>o.name.localeCompare(r.name));return t}),y=v(()=>l.value.map(({userStatus:t,attributes:s})=>{var D;const o=s.sub||"",r=s.name||"",i=s.email||"",d=s["dev:custom:last_login"]||"",h=((D=m.value.get(o))==null?void 0:D.map(({name:T})=>T))||[],F=ce.find(T=>T.isValid(j(d)));return{id:o,name:r,status:t||"",email:i,lastLogin:d,companies:h,dateGroup:F==null?void 0:F.text}}).sort((t,s)=>t.name.localeCompare(s.name))),c=X(),p=[c.accessor("name",{header:()=>"Name",cell:t=>t.getValue()}),c.accessor("status",{header:()=>"Status",cell:t=>k(Q,{props:{value:t.getValue()}})}),c.accessor("email",{header:()=>"Email",cell:t=>t.getValue()}),c.accessor("lastLogin",{header:()=>"Last Login",cell:t=>k(H,{props:{value:t.getValue()}}),filterFn(t,s,o){return t.original.dateGroup===o}}),c.accessor("companies",{header:()=>"Companies",cell:t=>t.getValue().join(", "),filterFn:"arrIncludes"})],u=g([]),C=g({pageIndex:0,pageSize:10}),A=g(""),M=g([]),V=g({});return{instance:K({get data(){return y.value},columns:p,state:{get sorting(){return u.value},get pagination(){return C.value},get globalFilter(){return A.value},get columnFilters(){return M.value},get rowSelection(){return V.value}},onSortingChange:f(u),onPaginationChange:f(C),onColumnFiltersChange:f(M),onGlobalFilterChange:f(A),globalFilterFn:(t,s,o,r)=>{const i=Y(t.getValue(s),o,{threshold:Z.CONTAINS});return r(i),i.passed},onRowSelectionChange:f(V),getCoreRowModel:ee(),getFacetedRowModel:te(),getSortedRowModel:ae(),getFacetedUniqueValues(t,s){const o=re();return s==="lastLogin"?()=>{const r=t.getColumn(s).getFacetedRowModel();return L(r.flatRows.flatMap(i=>i.original.dateGroup?[i.original.dateGroup]:[]))}:s==="companies"?()=>{const r=t.getColumn(s).getFacetedRowModel();return L(r.flatRows.flatMap(i=>i.original.companies?i.original.companies:[]))}:o(t,s)},getPaginationRowModel:se(),getFilteredRowModel:ne()})}};_.components=Object.assign({AppTanStackTable:J},_.components);var ue=function(){var e=this,n=e.$createElement,a=e._self._c||n;return a("AppTanStackTable",{attrs:{table:e.instance}})},me=[];const $={};var pe=O(_,ue,me,!1,de,null,null,null);function de(e){for(let n in $)this[n]=$[n]}const ge=function(){return pe.exports}(),x={};x.setup=(e,n)=>{const a={title:"Total Companies",component:P},l={title:"Total Users",component:z},m=[le.list(),U.list(),B.list()],y=v(()=>{const p=B.list().data.value;return p?p.filter(u=>u.status==="ACTIVE"):[]}),c=v(()=>U.list().data.value.filter(p=>{var u;return(u=y.value)==null?void 0:u.find(C=>p.company.id===C.id)}));return{companySummary:a,usersSummary:l,queries:m,activeCompanies:y,activeCompanyAccess:c}};x.components=Object.assign({BackButton:N,StatisticDisplayCard:W,AdminCannedUsersTable:ge},x.components);var fe=function(){var e=this,n=e.$createElement,a=e._self._c||n;return a("section",{staticClass:"space-y-8"},[a("div",{staticClass:"flex flex-col space-y-4 sm:flex-row sm:items-center sm:space-x-4 sm:space-y-2"},[a("BackButton",{attrs:{link:".."}}),a("div",{staticClass:"flex flex-col -space-y-1"},[a("BaseTypography",{staticClass:"uppercase text-gray-600",attrs:{variant:"overline"}},[e._v(" Canned Report ")]),a("BaseTypography",{attrs:{component:"h2",variant:"h5"}},[e._v("Users")])],1)],1),a("BaseVueQueries",{attrs:{queries:e.queries},scopedSlots:e._u([{key:"success",fn:function(l){var m=l[0];return[a("div",{staticClass:"space-y-6"},[a("div",{staticClass:"grid gap-6 lg:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4"},[a("StatisticDisplayCard",{attrs:{value:e.companySummary,number:e.activeCompanies.length}}),a("StatisticDisplayCard",{attrs:{value:e.usersSummary,number:m.length}})],1),a("AdminCannedUsersTable",{attrs:{users:m,access:e.activeCompanyAccess,companies:e.activeCompanies}})],1)]}}])})],1)},ve=[];const E={};var _e=O(x,fe,ve,!1,ye,null,null,null);function ye(e){for(let n in E)this[n]=E[n]}const Be=function(){return _e.exports}();export{Be as default};