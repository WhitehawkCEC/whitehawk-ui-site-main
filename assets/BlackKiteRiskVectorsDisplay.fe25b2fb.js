import{T as i}from"./ToolTip.0675e052.js";import{G as c}from"./GradeLetterDisplay.c05eba68.js";import{ay as l,n as p}from"./index.4c25b472.js";const o={};o.props={value:{key:"value",required:!0,type:null}};o.setup=(t,s)=>{const e=t,r=s.emit;return{proxy:l(e,r)}};o.components=Object.assign({ToolTip:i,GradeLetterDisplay:c},o.components);var _=function(){var t=this,s=t.$createElement,e=t._self._c||s;return t.proxy?e("dl",{staticClass:"grid gap-2 xl:col-span-1"},t._l(t.proxy,function(r,n){return e("div",{key:n,staticClass:"flex flex-row items-center justify-between"},[e("dt",{staticClass:"flex flex-row items-center space-x-2"},[r.description?e("ToolTip",[t._v(t._s(r.description))]):t._e(),e("BaseTypography",{staticClass:"text-gray-600",attrs:{variant:"p1"}},[t._v(" "+t._s(n)+" ")])],1),e("dd",[e("GradeLetterDisplay",{attrs:{grade:r.gradeLetter}})],1)])}),0):t._e()},u=[];const a={};var m=p(o,_,u,!1,d,null,null,null);function d(t){for(let s in a)this[s]=a[s]}const v=function(){return m.exports}();export{v as B};
