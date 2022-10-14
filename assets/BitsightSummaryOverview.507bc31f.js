import{n as l,bs as g,cp as u,bn as _,c as x}from"./index.0f72a133.js";import{B as d}from"./BitsightLevelBadge.7db075a6.js";import{B as v}from"./BitsightProgressBar.b3f7ec03.js";import{a as m}from"./ratingScoreDescription.3b48b1ea.js";const p={};p.setup=(t,s)=>({bitsightBadges:[{label:"Basic",range:"250-640",color:"bg-red-100 text-red-800"},{label:"Intermediate",range:"640-740",color:"bg-yellow-100 text-yellow-800"},{label:"Advanced",range:"740-900",color:"bg-green-100 text-green-800"}]});var y=function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"grid gap-4 sm:grid-cols-3 xl:grid-cols-1"},t._l(t.bitsightBadges,function(a){return e("div",{key:a.label,staticClass:"flex flex-col items-center"},[e("span",{staticClass:"inline-flex items-center rounded px-2",class:a.color},[e("BaseTypography",{staticClass:"uppercase",attrs:{variant:"subtitle2"}},[t._v(" "+t._s(a.label)+" ")])],1),e("BaseTypography",{staticClass:"text-gray-600",attrs:{variant:"p1"}},[t._v(" "+t._s(a.range)+" ")])],1)}),0)},f=[];const n={};var h=l(p,y,f,!1,B,null,null,null);function B(t){for(let s in n)this[s]=n[s]}const b=function(){return h.exports}(),r={};r.props={score:{key:"score",required:!0,type:Number},date:{key:"date",required:!0,type:String}};r.setup=(t,s)=>({});r.components=Object.assign({BitsightProgressBar:v,BitsightLevelBadge:d,DateIsoStringDisplay:g,DotsSquare:u},r.components);var C=function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"relative mx-auto flex max-w-xs flex-col items-center justify-center overflow-hidden rounded-xl bg-gradient-to-br from-blue-100 via-white to-white px-4 py-8 shadow-md sm:max-w-sm sm:rounded-3xl xl:max-w-none xl:p-12"},[e("div",{staticClass:"relative z-10 w-44 sm:w-56"},[e("BitsightProgressBar",{attrs:{"cyber-score":t.score,max:900}})],1),e("div",{staticClass:"absolute z-10 flex flex-col items-center space-y-2"},[e("BaseTypography",{attrs:{variant:"h2"}},[t._v(t._s(t.score))]),e("BitsightLevelBadge",{attrs:{value:t.score}}),t.date?e("div",{staticClass:"flex flex-col text-center"},[e("BaseTypography",{staticClass:"text-gray-500",attrs:{variant:"overline"}},[t._v(" Last updated: ")]),e("BaseTypography",{staticClass:"text-gray-500",attrs:{variant:"overline"}},[e("DateIsoStringDisplay",{attrs:{value:t.date,format:"date"}})],1)],1):t._e()],1),e("div",{staticClass:"absolute top-full left-full -translate-y-1/3 -translate-x-1/3 rotate-45 transform xl:-translate-y-1/2"},[e("DotsSquare",{attrs:{color:"blue"}})],1)])},S=[];const o={};var w=l(r,C,S,!1,$,null,null,null);function $(t){for(let s in o)this[s]=o[s]}const D=function(){return w.exports}(),i={};i.props={rating:{key:"rating",required:!0,type:null},company:{key:"company",required:!0,type:String}};i.setup=(t,s)=>{const e=t;return{ratingScoreDescription:x(()=>m(e.company,e.rating.bitsightScore))}};i.components=Object.assign({BitsightScoreDisplay:D,WaveForm:_,BitsightBadgeDisplay:b},i.components);var j=function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"relative flex flex-col items-center justify-center xl:grid xl:grid-cols-12"},[e("div",{staticClass:"z-10 -mb-36 xl:col-span-4 xl:col-start-1 xl:row-start-1 xl:mb-0"},[e("div",{staticClass:"px-6 md:px-8 lg:px-4 xl:pl-0"},[e("BitsightScoreDisplay",{attrs:{score:t.rating.bitsightScore,date:t.rating.updatedAt}})],1)]),e("div",{staticClass:"absolute top-36 w-full opacity-25 sm:top-40 xl:hidden"},[e("WaveForm")],1),e("BaseSimpleCard",{staticClass:"pt-32 xl:col-span-10 xl:col-start-3 xl:row-start-1 xl:h-fit xl:p-0"},[e("div",{staticClass:"grid items-center gap-6 px-6 py-10 sm:p-8 lg:grid-cols-10 xl:gap-0 xl:p-6"},[e("div",{staticClass:"grid gap-5 text-center lg:col-span-10 xl:col-span-6 xl:col-start-3 xl:text-left"},[e("BaseTypography",{staticClass:"text-prime-navy",attrs:{component:"h2",variant:"h5"}},[t._v(" Cyber Risk Rating ")]),e("BaseTypography",{staticClass:"text-gray-600",attrs:{component:"p",variant:"p1"}},[t._v(" The Cyber Risk Rating measures a company\u2019s relative security effectiveness. "+t._s(t.ratingScoreDescription)+" ")])],1),e("div",{staticClass:"flex justify-center lg:col-span-10 xl:col-span-2"},[e("BitsightBadgeDisplay")],1)])])],1)},T=[];const c={};var k=l(i,j,T,!1,R,null,null,null);function R(t){for(let s in c)this[s]=c[s]}const I=function(){return k.exports}();export{I as B};
