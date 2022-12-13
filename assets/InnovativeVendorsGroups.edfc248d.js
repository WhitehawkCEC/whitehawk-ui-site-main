import{at as u,au as c,ae as m,n as f}from"./index.cd8ce4e0.js";import{_ as h}from"./_copyArray.56331c81.js";import{_ as d}from"./_arrayMap.dcea68f3.js";import{k as y,i as g}from"./keys.5a58c32b.js";const x=u(async()=>{const{Carousel:e}=await c(()=>import("./vue-carousel.min.add2acba.js").then(a=>a.v),["assets/vue-carousel.min.add2acba.js","assets/index.cd8ce4e0.js","assets/index.1b9a05e5.css"]);return e}),C=u(async()=>{const{Slide:e}=await c(()=>import("./vue-carousel.min.add2acba.js").then(a=>a.v),["assets/vue-carousel.min.add2acba.js","assets/index.cd8ce4e0.js","assets/index.1b9a05e5.css"]);return e}),n={};n.props={vendors:{key:"vendors",required:!0,type:Array}};n.setup=(e,a)=>({});n.components=Object.assign({Carousel:x,Slide:C,LazyImg:m},n.components);var S=function(){var e=this,a=e.$createElement,t=e._self._c||a;return t("ClientOnly",[t("Carousel",{attrs:{"per-page-custom":[[0,1],[768,2],[1024,4]],"pagination-enabled":!1,"navigation-enabled":!0}},e._l(e.vendors,function(s){return t("Slide",{key:s.id,staticClass:"space-y-3 p-4"},[s.id==="undergraduateDegree"||s.id==="graduateDegree"?t("BaseExternalLink",{staticClass:"w-full",attrs:{href:s.to}},[t("BaseSimpleCard",{staticClass:"flex h-36 w-full transform items-center justify-center p-4 hover:scale-105 hover:shadow-lg focus:ring focus:ring-indigo-300"},[t("LazyImg",{staticClass:"max-h-20 w-full object-contain object-center",attrs:{src:s.image,alt:s.alt,options:{w:560,il:!0},"options-placeholder":{w:48}}})],1)],1):t("RouterLink",{attrs:{to:s.to}},[t("BaseSimpleCard",{staticClass:"flex h-36 transform items-center justify-center p-4 hover:scale-105 hover:shadow-lg focus:ring focus:ring-indigo-300"},[t("LazyImg",{staticClass:"max-h-20 w-full object-contain object-center",attrs:{src:s.image,alt:s.alt,options:{w:560,il:!0},"options-placeholder":{w:48}}})],1)],1),t("div",{staticClass:"flex flex-col text-center"},[s.note?t("BaseTypography",{staticClass:"uppercase text-gray-500",attrs:{component:"span",variant:"overline"}},[e._v(" "+e._s(s.note)+" ")]):e._e(),t("BaseTypography",{staticClass:"text-prime-indigo",attrs:{component:"h3",variant:"h6"}},[e._v(" "+e._s(s.name)+" ")])],1)],1)}),1)],1)},b=[];const i={};var $=f(n,S,b,!1,w,null,null,null);function w(e){for(let a in i)this[a]=i[a]}const I=function(){return $.exports}();var V=Math.floor,k=Math.random;function A(e,a){return e+V(k()*(a-e+1))}var R=A,j=R;function B(e,a){var t=-1,s=e.length,p=s-1;for(a=a===void 0?s:a;++t<a;){var o=j(t,p),v=e[o];e[o]=e[t],e[t]=v}return e.length=a,e}var _=B,E=h,L=_;function M(e){return L(E(e))}var T=M,O=d;function D(e,a){return O(a,function(t){return e[t]})}var F=D,P=F,q=y;function G(e){return e==null?[]:P(e,q(e))}var z=G,H=_,J=z;function K(e){return H(J(e))}var N=K,Q=T,U=N,W=g;function X(e){var a=W(e)?Q:U;return a(e)}var Y=X;const r={};r.props={groups:{key:"groups",required:!0,type:Array}};r.setup=(e,a)=>{function t(s){return s.length>4?Y(s):s}return{shuffleVendors:t}};r.components=Object.assign({InnovativeVendorsCarousel:I},r.components);var Z=function(){var e=this,a=e.$createElement,t=e._self._c||a;return t("section",{staticClass:"divide-y divide-gray-300"},e._l(e.groups,function(s){return t("div",{key:s.id,staticClass:"p-8 sm:px-16"},[t("div",{staticClass:"mt-8 flex flex-col space-y-2 text-center"},[t("BaseTypography",{staticClass:"text-prime-navy",attrs:{component:"h2",variant:"h5"}},[e._v(" "+e._s(s.name)+" ")]),t("BaseTypography",{staticClass:"text-gray-500",attrs:{component:"span",variant:"subtitle3"}},[e._v(" "+e._s(s.subtitle)+" ")])],1),t("div",{staticClass:"mx-auto max-w-7xl px-4 py-8 sm:px-6 md:px-8"},[t("InnovativeVendorsCarousel",{attrs:{vendors:e.shuffleVendors(s.vendors)}})],1)])}),0)},ee=[];const l={};var te=f(r,Z,ee,!1,ae,null,null,null);function ae(e){for(let a in l)this[a]=l[a]}const ie=function(){return te.exports}();export{ie as I};
