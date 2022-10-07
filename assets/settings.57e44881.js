import{P as m}from"./ParentPageWithTabbedMenuItems.77675cae.js";import{n as l,bu as d,c1 as v,bH as y,d as f}from"./index.b66123a0.js";const i={};i.props={value:{key:"value",required:!0,type:String}};i.setup=(e,n)=>({});var g=function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("dl",[t("dt",{staticClass:"sr-only"},[e._v("Industry")]),t("dd",{staticClass:"inline-block self-start rounded-full bg-prime-teal px-3 py-1 text-xs font-semibold uppercase tracking-wide text-teal-800"},[e._v(" "+e._s(e.value)+" ")])])},x=[];const u={};var $=l(i,g,x,!1,h,null,null,null);function h(e){for(let n in u)this[n]=u[n]}const b=function(){return $.exports}(),s={};s.props={company:{key:"company",required:!0,type:null}};s.setup=(e,n)=>({});s.components=Object.assign({BackButton:d,IndustryBadge:b},s.components);var k=function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("div",{staticClass:"flex flex-col space-y-2 lg:flex-row lg:items-center lg:justify-between lg:space-y-0"},[t("div",{staticClass:"flex flex-col space-y-2 lg:flex-row lg:items-center lg:space-y-0 lg:space-x-4"},[t("BackButton"),t("div",[t("BaseTypography",{attrs:{component:"h2",variant:"h5"}},[e._v(" "+e._s(e.company.name)+" ")]),t("BaseTypography",{staticClass:"truncate uppercase text-gray-500",attrs:{variant:"overline"}},[e._v(" "+e._s(e.company.domain)+" ")])],1)],1),e.company.industry?t("IndustryBadge",{attrs:{value:e.company.industry.name}}):e._e()],1)},B=[];const _={};var C=l(s,k,B,!1,I,null,null,null);function I(e){for(let n in _)this[n]=_[n]}const P=function(){return C.exports}(),a={};a.setup=(e,n)=>{const t=v("id"),r=y.read(t),o=f(()=>{const c=`/admin/companies/${encodeURIComponent(t.value)}/settings`;return[{to:`${c}`,name:"Settings"},{to:`${c}/black-kite`,name:"Black Kite"},{to:`${c}/bitsight`,name:"Bitsight"}]});return{companyRead:r,links:o}};a.components=Object.assign({ParentPageWithTabbedMenuItems:m,CompanyIdHeader:P},a.components);var R=function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("ParentPageWithTabbedMenuItems",{attrs:{value:e.links}},[t("BaseVueQuery",{attrs:{query:e.companyRead},scopedSlots:e._u([{key:"success",fn:function(r){var o=r.data;return[t("CompanyIdHeader",{attrs:{company:o}})]}}])})],1)},j=[];const p={};var S=l(a,R,j,!1,M,null,null,null);function M(e){for(let n in p)this[n]=p[n]}const q=function(){return S.exports}();export{q as default};
