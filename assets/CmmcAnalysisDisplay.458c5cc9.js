import{c as i,n as v}from"./index.d7842beb.js";const l={};l.props={value:{key:"value",required:!0,type:null}};l.setup=(t,n)=>{const e=i(()=>[{text:"CMMC Category",borderRight:!0},{text:"Level 1",textCenter:!0,borderRight:!0},{text:"Level 2",textCenter:!0,borderRight:!0},{text:"Level 3",textCenter:!0,borderRight:!0},{text:"Level 4",textCenter:!0,borderRight:!0},{text:"Level 5",textCenter:!0}]);function r(s){return s>=4?"text-green-400":s>=1?"text-yellow-300":"text-red-400"}function o(s){return["L1","L2","L3","L4","L5"].map(a=>s[a]||{averageStarLevel:null})}return{headers:e,color:r,normalizeLevels:o}};var _=function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",{staticClass:"p-4"},[e("div",{staticClass:"overflow-x-auto rounded-lg border"},[e("table",{staticClass:"w-full leading-4"},[e("thead",[e("tr",t._l(t.headers,function(r){return e("th",{key:r.text,staticClass:"border-b border-gray-300 bg-gray-200 px-4 py-2 text-sm font-medium tracking-wider text-gray-700",class:{"border-r":r.borderRight,"text-left":!r.textCenter,"text-center":r.textCenter},attrs:{scope:"colgroup"}},[e("span",[t._v(" "+t._s(r.text)+" ")])])}),0)]),e("tbody",t._l(t.value,function(r,o,s){return e("tr",{key:r.displayValue,class:{"bg-gray-100":s%2===1}},[e("th",{staticClass:"px-4 py-2 text-left text-sm font-normal text-gray-900",class:{"bg-gray-100":s%2===1},attrs:{scope:"row"}},[t._v(" "+t._s(r.displayValue)+" ")]),t._l(t.normalizeLevels(r.levels),function(a,c){return e("td",{key:c},[e("div",{staticClass:"flex items-center justify-center"},[a?[a.averageStarLevel===null?[e("span",{staticClass:"sr-only"},[t._v(" "+t._s(a.averageStarLevel)+" ")]),e("span",[t._v("-")])]:[e("span",{staticClass:"sr-only"},[t._v(" "+t._s(a.averageStarLevel)+" ")]),e("svg",{staticClass:"h-3 w-3 fill-current",class:t.color(a.averageStarLevel),attrs:{viewBox:"-4 -4 8 8"}},[e("circle",{attrs:{stroke:"1",r:"4"}})])]]:t._e()],2)])})],2)}),0)])])])},x=[];const u={};var p=v(l,_,x,!1,d,null,null,null);function d(t){for(let n in u)this[n]=u[n]}const f=function(){return p.exports}();export{f as C};
