import{n as o}from"./index.d7842beb.js";var u=function(){var e=this,s=e.$createElement,t=e._self._c||s;return t("span",{staticClass:"flex flex-col items-center p-4 text-sm font-medium text-gray-700"},[t("span",{staticClass:"font-display text-xl font-bold text-prime-indigo sm:text-2xl"},[e._t("number")],2),t("BaseOverline",{staticClass:"uppercase"},[e._t("title")],2)],1)},_=[];const p={},a={};var d=o(p,u,_,!1,f,null,null,null);function f(e){for(let s in a)this[s]=a[s]}const v=function(){return d.exports}(),l={};l.props={licenseUsage:{key:"licenseUsage",required:!0,type:null}};l.setup=(e,s)=>({});l.components=Object.assign({LicenseUsageDisplay:v},l.components);var m=function(){var e=this,s=e.$createElement,t=e._self._c||s;return t("div",{staticClass:"grid gap-6 lg:grid-cols-2"},[t("BaseSimpleCard",{staticClass:"divide-y"},[t("h2",{staticClass:"p-4 font-display font-semibold sm:text-lg"},[e._v(" One Time Licenses ")]),t("ul",{staticClass:"grid grid-cols-3 divide-x sm:divide-x-0"},e._l(Object.entries(e.licenseUsage.oneTime||{}),function(n){var i=n[0],r=n[1];return t("li",{key:i,staticClass:"flex justify-center"},[t("LicenseUsageDisplay",{scopedSlots:e._u([{key:"number",fn:function(){return[e._v(" "+e._s(r)+" ")]},proxy:!0},{key:"title",fn:function(){return[e._v(e._s(i))]},proxy:!0}],null,!0)})],1)}),0)]),t("BaseSimpleCard",{staticClass:"divide-y"},[t("h2",{staticClass:"p-4 font-display font-semibold sm:text-lg"},[e._v("Annual Licenses")]),t("ul",{staticClass:"grid grid-cols-3 divide-x sm:divide-x-0"},e._l(Object.entries(e.licenseUsage.annual||{}),function(n){var i=n[0],r=n[1];return t("li",{key:i,staticClass:"flex justify-center"},[t("LicenseUsageDisplay",{scopedSlots:e._u([{key:"number",fn:function(){return[e._v(" "+e._s(r)+" ")]},proxy:!0},{key:"title",fn:function(){return[e._v(e._s(i))]},proxy:!0}],null,!0)})],1)}),0)])],1)},y=[];const c={};var x=o(l,m,y,!1,g,null,null,null);function g(e){for(let s in c)this[s]=c[s]}const b=function(){return x.exports}();export{b as A};
