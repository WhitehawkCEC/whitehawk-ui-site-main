import{U}from"./arrow-down-on-square.bf61cdc5.js";import{T as R}from"./trash.78f57a7a.js";import{ag as T,aP as E,aQ as O,aB as M,n as m,ay as H,c0 as W,r as x,bH as p,aA as C,aI as z,aF as G,cs as h,aG as L,c as l,aH as N}from"./index.0f72a133.js";import{C as J,u as K}from"./CompanyInput.b0e170a6.js";import{c as V}from"./cloneDeep.e7fefc2f.js";import"./DynamicForm.29a1072f.js";import"./AddressClaimInput.37164d72.js";import"./index.2ade721a.js";import"./FormValidation.907ef868.js";import"./_Uint8Array.aff23e05.js";import"./keys.9ed30e7b.js";import"./_baseAssignValue.c34fdc17.js";import"./_copyArray.56331c81.js";const X={list(){return T(["company-features"],()=>E.get(`${O}/company-features`).then(e=>e.data))}},y={};y.props={value:{key:"value",required:!1,type:Array},options:{key:"options",required:!0,type:Array}};y.setup=(e,a)=>{const t=e,s=a.emit;return{proxy:M(t,s)}};var Y=function(){var e=this,a=e.$createElement,t=e._self._c||a;return t("section",{staticClass:"grid gap-4 lg:grid-cols-2 xl:grid-cols-3"},e._l(e.options,function(s){return t("BaseLabel",{key:s.id,staticClass:"flex items-center space-x-1"},[t("BaseInput",{attrs:{type:"checkbox",value:s,disabled:!0},model:{value:e.proxy,callback:function(n){e.proxy=n},expression:"proxy"}}),t("span",[e._v(e._s(s.display))])],1)}),1)},Z=[];const S={};var ee=m(y,Y,Z,!1,te,null,null,null);function te(e){for(let a in S)this[a]=S[a]}const se=function(){return ee.exports}(),i={};i.props={value:{key:"value",required:!1,type:null},options:{key:"options",required:!0,type:Array}};i.setup=(e,a)=>{const t=e,s=a.emit;return{proxy:H(t,s)}};i.components=Object.assign({FeaturesInput:se},i.components);var ae=function(){var e=this,a=e.$createElement,t=e._self._c||a;return t("FeaturesInput",{staticClass:"p-4",attrs:{options:e.options},model:{value:e.proxy.features,callback:function(s){e.$set(e.proxy,"features",s)},expression:"proxy.features"}})},ne=[];const F={};var oe=m(i,ae,ne,!1,re,null,null,null);function re(e){for(let a in F)this[a]=F[a]}const ie=function(){return oe.exports}(),u={};u.setup=(e,a)=>{const t=W("id"),s=x(),n=p.read(t),r=K.list();C(()=>n.data.value,o=>{o&&(s.value=V(o))},{immediate:!0});const g=z(),d=G(),$=p.update(t);async function k(){s.value&&(await $.mutateAsync(s.value),d.success("Saved"))}const B=p.delete(t);async function A(){await B.mutateAsync(),g.push("/companies")}const c=x(),w=X.list(),P=h.read(t),Q=L(),v=l(()=>Q.company);C(()=>P.data.value,o=>{o&&v.value&&(c.value={company:v.value,features:o.features})},{immediate:!0});const I=h.update(t);async function j(){c.value&&(await I.mutateAsync(c.value),d.success("Saved"))}const f=N(),q=l(()=>f.isAdmin),D=l(()=>{var _;return((_=f.email)==null?void 0:_.split("@")[1])=="whitehawk.com"&&q.value});return{company:s,industriesQuery:r,updateCompany:k,deleteCompany:A,companyFeatures:c,featuresQuery:w,saveFeatures:j,isWhitehawkAdmin:D,enableFeaturePermission:!1}};u.components=Object.assign({CompanyInput:J,SaveSvg:U,TrashSvg:R,CompanyFeaturesPermissionInput:ie},u.components);var ce=function(){var e=this,a=e.$createElement,t=e._self._c||a;return t("section",{staticClass:"space-y-6"},[t("ClientOnly",[t("BaseSimpleCard",{staticClass:"divide-y"},[t("BaseTypography",{staticClass:"p-4",attrs:{component:"h3",variant:"subtitle3"}},[e._v(" Attributes ")]),t("form",{staticClass:"flex flex-col divide-y",on:{submit:function(s){return s.preventDefault(),e.updateCompany.apply(null,arguments)}}},[t("BaseVueQuery",{attrs:{query:e.industriesQuery},scopedSlots:e._u([{key:"success",fn:function(s){var n=s.data;return[t("CompanyInput",{attrs:{industries:n,"is-readonly":!0},model:{value:e.company,callback:function(r){e.company=r},expression:"company"}})]}}])}),t("div",{staticClass:"flex flex-col space-y-2 p-4 md:flex-row md:items-center md:space-x-2 md:space-y-0"},[t("BaseButton",{staticClass:"space-x-2"},[t("SaveSvg",{staticClass:"w-5"}),t("span",[e._v("Save")])],1),e.isWhitehawkAdmin?t("BaseButton",{staticClass:"space-x-2",attrs:{type:"button",action:"secondary","display-type":"danger"},on:{click:e.deleteCompany}},[t("TrashSvg",{staticClass:"w-5"}),t("span",[e._v("Delete")])],1):e._e()],1)],1)],1),t("BaseSimpleCard",{staticClass:"divide-y"},[t("BaseTypography",{staticClass:"p-4",attrs:{component:"h2",variant:"subtitle3"}},[e._v(" Edit Permissions ")]),t("form",{staticClass:"divide-y",on:{submit:function(s){return s.preventDefault(),e.saveFeatures.apply(null,arguments)}}},[t("BaseVueQuery",{attrs:{query:e.featuresQuery},scopedSlots:e._u([{key:"success",fn:function(s){var n=s.data;return[t("CompanyFeaturesPermissionInput",{attrs:{options:n},model:{value:e.companyFeatures,callback:function(r){e.companyFeatures=r},expression:"companyFeatures"}})]}}])}),e.enableFeaturePermission?t("div",{staticClass:"p-4"},[t("BaseButton",{staticClass:"space-x-2"},[t("SaveSvg",{staticClass:"w-5"}),t("span",[e._v("Save")])],1)],1):e._e()],1)],1)],1)],1)},ue=[];const b={};var pe=m(u,ce,ue,!1,le,null,null,null);function le(e){for(let a in b)this[a]=b[a]}const ke=function(){return pe.exports}();export{ke as default};
