import{C as u,bH as i,c as l,bB as m,n as p}from"./index.b3e93f33.js";import{B as _}from"./BackButton.9c037adf.js";import{u as f}from"./useManufacturers.aa824109.js";import"./chevron-left.0808b01b.js";const n={};n.setup=(e,s)=>{const t=i("id"),r=f.read(t),a=l(()=>{const o=`/admin/manufacturers/${encodeURIComponent(t.value)}/`;return[{to:`${o}products`,name:"Products"},{to:`${o}`,name:"Settings"}]});return m().set(a),{manufacturer:r}};n.components=Object.assign({BackButton:_,CogSvg:u},n.components);var d=function(){var e=this,s=e.$createElement,t=e._self._c||s;return t("section",{staticClass:"space-y-6"},[t("div",{staticClass:"flex flex-col items-start space-y-6 sm:flex-row sm:items-center sm:space-x-8 sm:space-y-0"},[t("BackButton"),t("section",{staticClass:"flex items-center space-x-3"},[t("div",{staticClass:"rounded-full bg-blue-500 p-2"},[t("CogSvg",{staticClass:"w-6 text-white"})],1),t("BaseVueQuery",{attrs:{query:e.manufacturer},scopedSlots:e._u([{key:"success",fn:function(r){var a=r.data;return[t("div",{staticClass:"flex flex-col"},[t("BaseTypography",{attrs:{variant:"h5",component:"h2"}},[e._v(" "+e._s(a.name)+" ")]),t("BaseTypography",{staticClass:"uppercase text-gray-500",attrs:{variant:"overline"}},[e._v(" "+e._s(a.url)+" ")])],1)]}}])})],1)],1),t("NuxtChild")],1)},v=[];const c={};var x=p(n,d,v,!1,C,null,null,null);function C(e){for(let s in c)this[s]=c[s]}const S=function(){return x.exports}();export{S as default};
