import{c as u,n as _}from"./index.3fa58822.js";const n={};n.props={value:{key:"value",required:!0,type:null}};n.setup=(t,l)=>{const e=u(()=>["CMMC Category","Level 1","Level 2","Level 3"]);function r(s){return s>=4?"text-green-400":s>=1?"text-yellow-300":"text-red-400"}function o(s){return["L1","L2","L3"].map(a=>s[a]||{averageStarLevel:null})}return{headers:e,color:r,normalizeLevels:o}};var v=function(){var t=this,l=t.$createElement,e=t._self._c||l;return e("BaseSimpleCard",{staticClass:"overflow-x-auto border"},[e("table",{staticClass:"w-full"},[e("thead",[e("tr",t._l(t.headers,function(r){return e("th",{key:r,staticClass:"border-b border-r px-4 py-2 text-center first:text-left last:border-r-0",attrs:{scope:"colgroup"}},[e("BaseTypography",{staticClass:"text-gray-800",attrs:{variant:"subtitle2"}},[t._v(" "+t._s(r)+" ")])],1)}),0)]),e("tbody",t._l(t.value,function(r,o,s){return e("tr",{key:r.displayValue,staticClass:"odd:bg-gray-50"},[e("th",{staticClass:"px-4 py-2 text-left",class:{"bg-gray-50":s%2===0},attrs:{scope:"row"}},[e("BaseTypography",{staticClass:"text-gray-600",attrs:{variant:"p2"}},[t._v(" "+t._s(r.displayValue)+" ")])],1),t._l(t.normalizeLevels(r.levels),function(a,i){return e("td",{key:i},[e("div",{staticClass:"flex items-center justify-center"},[a?[a.averageStarLevel===null?[e("span",{staticClass:"sr-only"},[t._v(" "+t._s(a.averageStarLevel)+" ")]),e("span",[t._v("-")])]:[e("span",{staticClass:"sr-only"},[t._v(" "+t._s(a.averageStarLevel)+" ")]),e("svg",{staticClass:"h-3 w-3 fill-current",class:t.color(a.averageStarLevel),attrs:{viewBox:"-4 -4 8 8"}},[e("circle",{attrs:{stroke:"1",r:"4"}})])]]:t._e()],2)])})],2)}),0)])])},p=[];const c={};var f=_(n,v,p,!1,y,null,null,null);function y(t){for(let l in c)this[l]=c[l]}const C=function(){return f.exports}();export{C};
