import{U as B}from"./arrow-down-on-square.bf61cdc5.js";import{T as k}from"./trash.78f57a7a.js";import{ay as b,n as i,aB as S,b0 as U,bs as w,b$ as _,r as A,aA as D,aI as R,aF as E}from"./index.81c86bc2.js";import{D as j}from"./DynamicForm.152cd2b0.js";import{u}from"./useCompanyAccess.09f56318.js";const p={};p.props={value:{key:"value",required:!0,type:null}};p.setup=(e,s)=>{const t=e,a=s.emit;return{proxy:b(t,a),fields:[{label:"ID",name:"id"},{label:"Name",name:"name"}]}};var F=function(){var e=this,s=e.$createElement,t=e._self._c||s;return t("div",{staticClass:"space-y-4"},e._l(e.fields,function(a){return t("BaseLabel",{key:a.label,staticClass:"grid gap-1 pt-4 sm:pt-0"},[t("span",{staticClass:"block text-xs font-medium leading-5 text-gray-700"},[e._v(" "+e._s(a.label)+" ")]),t("BaseInput",{staticClass:"w-full text-sm font-medium leading-5 text-gray-700",attrs:{"aria-readonly":"true",readonly:""},model:{value:e.proxy[a.name],callback:function(n){e.$set(e.proxy,a.name,n)},expression:"proxy[field.name]"}})],1)}),1)},M=[];const v={};var q=i(p,F,M,!1,P,null,null,null);function P(e){for(let s in v)this[s]=v[s]}const T=function(){return q.exports}(),m={};m.props={value:{key:"value",required:!0,type:null}};m.setup=(e,s)=>{const t=e,a=s.emit;return{proxy:b(t,a),fields:[{label:"ID",name:"id"},{label:"Email",name:"email"}]}};var N=function(){var e=this,s=e.$createElement,t=e._self._c||s;return t("div",{staticClass:"space-y-4"},e._l(e.fields,function(a){return t("BaseLabel",{key:a.label,staticClass:"grid gap-1 pt-4 sm:pt-0"},[t("span",{staticClass:"block text-xs font-medium leading-5 text-gray-700"},[e._v(" "+e._s(a.label)+" ")]),t("BaseInput",{staticClass:"w-full text-sm font-medium leading-5 text-gray-700",attrs:{"aria-readonly":"true",readonly:""},model:{value:e.proxy[a.name],callback:function(n){e.$set(e.proxy,a.name,n)},expression:"proxy[field.name]"}})],1)}),1)},O=[];const y={};var L=i(m,N,O,!1,W,null,null,null);function W(e){for(let s in y)this[s]=y[s]}const z=function(){return L.exports}(),r={};r.props={value:{key:"value",required:!1,type:null}};r.setup=(e,s)=>{const t=e,a=s.emit,n=S(t,a),c=[{name:"user",label:"User",component:{is:z}},{name:"company",label:"Company",component:{is:T}},{name:"permission",label:"Permission",component:{is:U,attrs:{required:!0,options:[{text:"",value:void 0},...[{text:"Read",value:"READ"},{text:"Write",value:"WRITE"},{text:"Admin",value:"ADMIN"}]]}}}];return{proxy:n,schema:c}};r.components=Object.assign({DynamicForm:j},r.components);var Q=function(){var e=this,s=e.$createElement,t=e._self._c||s;return t("DynamicForm",{attrs:{schema:e.schema},model:{value:e.proxy,callback:function(a){e.proxy=a},expression:"proxy"}})},G=[];const f={};var H=i(r,Q,G,!1,J,null,null,null);function J(e){for(let s in f)this[s]=f[s]}const K=function(){return H.exports}(),l={};l.setup=(e,s)=>{const t=_("id"),a=_("userId"),n=u.read(t,a),o=A();D(()=>n.data.value,d=>{d&&(o.value=d)},{immediate:!0});const c=R(),$=E(),C=u.update(t,a);async function h(){if(o.value)await C.mutateAsync(o.value),$.success("Saved"),c.push(`/admin/companies/${encodeURIComponent(t.value)}/members`);else throw new Error("Invalid request.")}const g=u.delete();async function I(){await g.mutateAsync({id:t.value,userId:a.value}),c.push(`/admin/companies/${encodeURIComponent(t.value)}/members`)}return{access:o,save:h,deleteMe:I}};l.components=Object.assign({BackButton:w,UserCompanyAccessInput:K,UpdateSvg:B,TrashSvg:k},l.components);var X=function(){var e=this,s=e.$createElement,t=e._self._c||s;return t("div",{staticClass:"space-y-6"},[t("BackButton"),t("BaseSimpleCard",{staticClass:"divide-y"},[t("BaseTypography",{staticClass:"p-4",attrs:{variant:"subtitle3",component:"h2"}},[e._v(" Update Permission ")]),t("form",{staticClass:"divide-y",on:{submit:function(a){return a.preventDefault(),e.save.apply(null,arguments)}}},[t("UserCompanyAccessInput",{model:{value:e.access,callback:function(a){e.access=a},expression:"access"}}),t("div",{staticClass:"flex flex-col space-y-2 p-4 md:flex-row md:space-x-2 md:space-y-0"},[t("BaseButton",{staticClass:"space-x-2"},[t("UpdateSvg",{staticClass:"w-4 xl:w-5"}),t("span",[e._v("Update")])],1),t("BaseButton",{staticClass:"space-x-2",attrs:{type:"button",action:"secondary","display-type":"danger"},on:{click:e.deleteMe}},[t("TrashSvg",{staticClass:"w-4 xl:w-5"}),t("span",[e._v("Delete")])],1)],1)],1)],1)],1)},Y=[];const x={};var Z=i(l,X,Y,!1,V,null,null,null);function V(e){for(let s in x)this[s]=x[s]}const oe=function(){return Z.exports}();export{oe as default};