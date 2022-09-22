import{S as E}from"./arrow-down-on-square.6f2806b6.js";import{D as O}from"./trash.687d612e.js";import{f as G,g as U,h as W,W as K,n as m,_ as L,bK as z,c as l,bG as J,r as C,a1 as y,w as h,I as N,G as V,cu as S,K as H,J as X}from"./index.d7842beb.js";import{C as Y,u as Z}from"./CompanyInput.67bf3198.js";import{c as ee}from"./cloneDeep.c3441124.js";import{u as te}from"./useCompanyAccess.506ec449.js";import"./DynamicForm.461a2b0a.js";import"./AddressClaimInput.9242ca62.js";import"./index.997ac16c.js";import"./FormValidation.535989ec.js";import"./_Uint8Array.8f5f45b0.js";import"./keys.0e0ce0f5.js";import"./_baseAssignValue.44a5670e.js";import"./_copyArray.56331c81.js";const se={list(){return G(["company-features"],()=>U.get(`${W}/company-features`).then(e=>e.data))}},d={};d.props={value:{key:"value",required:!1,type:Array},options:{key:"options",required:!0,type:Array}};d.setup=(e,a)=>{const t=e,s=a.emit;return{proxy:K(t,s)}};var ae=function(){var e=this,a=e.$createElement,t=e._self._c||a;return t("section",{staticClass:"grid gap-4 lg:grid-cols-2 xl:grid-cols-3"},e._l(e.options,function(s){return t("BaseLabel",{key:s.id,staticClass:"flex items-center space-x-1"},[t("BaseInput",{attrs:{type:"checkbox",value:s,disabled:!0},model:{value:e.proxy,callback:function(n){e.proxy=n},expression:"proxy"}}),t("span",[e._v(e._s(s.display))])],1)}),1)},ne=[];const b={};var re=m(d,ae,ne,!1,oe,null,null,null);function oe(e){for(let a in b)this[a]=b[a]}const ie=function(){return re.exports}(),i={};i.props={value:{key:"value",required:!1,type:null},options:{key:"options",required:!0,type:Array}};i.setup=(e,a)=>{const t=e,s=a.emit;return{proxy:L(t,s)}};i.components=Object.assign({FeaturesInput:ie},i.components);var ce=function(){var e=this,a=e.$createElement,t=e._self._c||a;return t("FeaturesInput",{staticClass:"p-4",attrs:{options:e.options},model:{value:e.proxy.features,callback:function(s){e.$set(e.proxy,"features",s)},expression:"proxy.features"}})},ue=[];const g={};var le=m(i,ce,ue,!1,pe,null,null,null);function pe(e){for(let a in g)this[a]=g[a]}const me=function(){return le.exports}(),c={};c.props={id:{key:"id",required:!0,type:String},access:{key:"access",required:!0,type:Array}};c.setup=(e,a)=>{const t=e;return{companyId:l(()=>t.id)}};c.components=Object.assign({GravatarImg:z},c.components);var ye=function(){var e=this,a=e.$createElement,t=e._self._c||a;return t("BaseSimpleCard",{staticClass:"divide-y"},[t("div",{staticClass:"flex items-center space-x-1 p-4"},[t("BaseTypography",{attrs:{component:"h3",variant:"subtitle3"}},[e._v(" Members ")]),t("BaseTypography",{staticClass:"text-gray-500",attrs:{variant:"overline"}},[e._v(" ("+e._s(e.access.length)+") ")])],1),t("ul",{staticClass:"flex -space-x-2 overflow-y-auto p-4"},e._l(e.access,function(s){return t("li",{key:s.user.id,staticClass:"flex-shrink-0"},[t("BaseLink",{attrs:{to:`/admin/companies/${e.companyId}/members/${s.user.id}`}},[t("GravatarImg",{staticClass:"shadow-solid inline-block h-10 w-10 rounded-full",attrs:{email:s.user.email,alt:`Avatar for ${s.user.email}`}})],1)],1)}),0)])},de=[];const $={};var ve=m(c,ye,de,!1,_e,null,null,null);function _e(e){for(let a in $)this[a]=$[a]}const fe=function(){return ve.exports}(),p={};p.setup=(e,a)=>{const t=J("id"),s=C(),n=y.read(t),o=Z.list();h(()=>n.data.value,r=>{r&&(s.value=ee(r))},{immediate:!0});const F=N(),v=V(),B=y.update(t);async function A(){await B.mutateAsync({id:t.value,payload:s.value}),v.success("Saved")}const w=y.delete(t);async function I(){await w.mutateAsync(),F.push("/companies")}const u=C(),Q=se.list(),D=S.read(t),q=H(),_=l(()=>q.company);h(()=>D.data.value,r=>{r&&_.value&&(u.value={company:_.value,features:r.features})},{immediate:!0});const P=S.update(t);async function j(){u.value&&(await P.mutateAsync(u.value),v.success("Saved"))}const f=X(),M=l(()=>f.isAdmin),R=l(()=>{var x;return((x=f.email)==null?void 0:x.split("@")[1])=="whitehawk.com"&&M.value}),T=te.list(t);return{id:t,company:s,industriesQuery:o,updateCompany:A,deleteCompany:I,companyFeatures:u,featuresQuery:Q,saveFeatures:j,isWhitehawkAdmin:R,companyAccessQuery:T,enableFeaturePermission:!1}};p.components=Object.assign({CompanyInput:Y,SaveSvg:E,TrashSvg:O,CompanyFeaturesPermissionInput:me,MembersDisplay:fe},p.components);var xe=function(){var e=this,a=e.$createElement,t=e._self._c||a;return t("section",{staticClass:"space-y-6"},[t("ClientOnly",[t("BaseSimpleCard",{staticClass:"divide-y"},[t("BaseTypography",{staticClass:"p-4",attrs:{component:"h3",variant:"subtitle3"}},[e._v(" Attributes ")]),t("form",{staticClass:"flex flex-col divide-y",on:{submit:function(s){return s.preventDefault(),e.updateCompany.apply(null,arguments)}}},[t("BaseVueQuery",{attrs:{query:e.industriesQuery},scopedSlots:e._u([{key:"success",fn:function(s){var n=s.data;return[t("CompanyInput",{attrs:{industries:n,"is-readonly":!0},model:{value:e.company,callback:function(o){e.company=o},expression:"company"}})]}}])}),t("div",{staticClass:"flex flex-col space-y-2 p-4 md:flex-row md:items-center md:space-x-2 md:space-y-0"},[t("BaseButton",{staticClass:"space-x-2"},[t("SaveSvg",{staticClass:"w-5"}),t("span",[e._v("Save")])],1),e.isWhitehawkAdmin?t("BaseButton",{staticClass:"space-x-2",attrs:{type:"button",action:"secondary","display-type":"danger"},on:{click:e.deleteCompany}},[t("TrashSvg",{staticClass:"w-5"}),t("span",[e._v("Delete")])],1):e._e()],1)],1)],1),t("BaseSimpleCard",{staticClass:"divide-y"},[t("BaseTypography",{staticClass:"p-4",attrs:{component:"h2",variant:"subtitle3"}},[e._v(" Edit Permissions ")]),t("form",{staticClass:"divide-y",on:{submit:function(s){return s.preventDefault(),e.saveFeatures.apply(null,arguments)}}},[t("BaseVueQuery",{attrs:{query:e.featuresQuery},scopedSlots:e._u([{key:"success",fn:function(s){var n=s.data;return[t("CompanyFeaturesPermissionInput",{attrs:{options:n},model:{value:e.companyFeatures,callback:function(o){e.companyFeatures=o},expression:"companyFeatures"}})]}}])}),e.enableFeaturePermission?t("div",{staticClass:"p-4"},[t("BaseButton",{staticClass:"space-x-2"},[t("SaveSvg",{staticClass:"w-5"}),t("span",[e._v("Save")])],1)],1):e._e()],1)],1),t("BaseVueQuery",{attrs:{query:e.companyAccessQuery},scopedSlots:e._u([{key:"success",fn:function(s){var n=s.data;return[t("MembersDisplay",{attrs:{id:e.id,access:n}})]}}])})],1)],1)},Ce=[];const k={};var he=m(p,xe,Ce,!1,Se,null,null,null);function Se(e){for(let a in k)this[a]=k[a]}const Re=function(){return he.exports}();export{Re as default};
