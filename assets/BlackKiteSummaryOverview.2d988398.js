import{a as b,b as S,c as k}from"./BlackKiteProgressBar.eb622ed6.js";import{n as d,b as $,aB as B,r as D,c as _,br as w,co as T,bn as K}from"./index.86537675.js";import{T as j}from"./TransitionExpand.092b2cee.js";import{G as R}from"./GradeLetterDisplay.5e904b1c.js";import{a as q}from"./ratingScoreDescription.dc21462c.js";const i={};i.props={compliance:{key:"compliance",required:!0,type:Array}};i.setup=(t,r)=>({});i.components=Object.assign({BlackKiteDonut:b},i.components);var A=function(){var t=this,r=t.$createElement,e=t._self._c||r;return t.compliance?e("section",{staticClass:"grid lg:grid-cols-2 2xl:grid-cols-4"},t._l(t.compliance,function(s){return e("div",{key:s.StandardCode,staticClass:"flex justify-center"},[e("BlackKiteDonut",{attrs:{value:s}})],1)}),0):t._e()},F=[];const f={};var E=d(i,A,F,!1,M,null,null,null);function M(t){for(let r in f)this[r]=f[r]}const O=function(){return E.exports}(),l={};l.props={value:{key:"value",required:!0,type:Boolean},padding:{key:"padding",required:!1,type:[String,Array]}};l.setup=(t,r)=>{const e=t,s=r.emit;return{proxy:B(e,s)}};l.components=Object.assign({TransitionExpand:j,ToggleButton:$},l.components);var G=function(){var t=this,r=t.$createElement,e=t._self._c||r;return e("section",[e("div",[t._t("partialContent"),e("TransitionExpand",[t.proxy?e("div",[t._t("transitionContent")],2):t._e()])],2),e("div",{class:t.padding},[e("BaseLabel",{staticClass:"inline-flex cursor-pointer rounded-md border border-gray-300 py-1 pl-3 pr-2 hover:border-indigo-600 hover:bg-indigo-200 hover:text-indigo-600",attrs:{"aria-label":"Toggle Visibility"}},[t._t("buttonText"),e("ToggleButton",{class:t.proxy?"rotate-180 transform transition-transform duration-100":"",attrs:{"aria-label":t.proxy?"toggle on":"toggle off"},model:{value:t.proxy,callback:function(s){t.proxy=s},expression:"proxy"}})],2)],1)])},I=[];const v={};var L=d(l,G,I,!1,P,null,null,null);function P(t){for(let r in v)this[r]=v[r]}const z=function(){return L.exports}(),c={};c.props={compliance:{key:"compliance",required:!0,type:Array}};c.setup=(t,r)=>{const e=["CIS CSC-20","CMMC","NIST 800-53","NIST 800-171"],s=t,m=D(!1),C=_(()=>{const o=[];for(const a of s.compliance){const{StandardCode:n}=a;e.includes(n)&&o.push(a)}return o.sort((a,n)=>a.StandardCode.trim().localeCompare(n.StandardCode.trim()))}),h=_(()=>{const o=[];for(const a of s.compliance){const{StandardCode:n}=a;e.includes(n)||o.push(a)}return o.sort((a,n)=>a.StandardCode.trim().localeCompare(n.StandardCode.trim()))});return{showAll:m,defaultCompliance:C,toTransition:h}};c.components=Object.assign({PartialDisplayCollapsibleSection:z,BlackKiteReportCompliance:O},c.components);var N=function(){var t=this,r=t.$createElement,e=t._self._c||r;return e("PartialDisplayCollapsibleSection",{scopedSlots:t._u([{key:"partialContent",fn:function(){return[e("BlackKiteReportCompliance",{attrs:{compliance:t.defaultCompliance}})]},proxy:!0},{key:"transitionContent",fn:function(){return[e("BlackKiteReportCompliance",{attrs:{compliance:t.toTransition}})]},proxy:!0},{key:"buttonText",fn:function(){return[t._v(" "+t._s(t.showAll?"View Less":"View All")+" ")]},proxy:!0}]),model:{value:t.showAll,callback:function(s){t.showAll=s},expression:"showAll"}})},V=[];const y={};var W=d(c,N,V,!1,H,null,null,null);function H(t){for(let r in y)this[r]=y[r]}const lt=function(){return W.exports}(),p={};p.props={score:{key:"score",required:!0,type:Number},date:{key:"date",required:!0,type:String}};p.setup=(t,r)=>({});p.components=Object.assign({BlackKiteProgressBar:S,GradeLetterDisplay:R,DateIsoStringDisplay:w,DotsSquare:T},p.components);var J=function(){var t=this,r=t.$createElement,e=t._self._c||r;return e("div",{staticClass:"relative mx-auto flex max-w-xs flex-col items-center justify-center overflow-hidden rounded-xl bg-gradient-to-br from-blue-100 via-white to-white px-4 py-8 shadow-md sm:max-w-sm sm:rounded-3xl xl:max-w-none xl:p-12"},[e("div",{staticClass:"relative z-10 w-44 sm:w-56"},[e("BlackKiteProgressBar",{attrs:{score:t.score,"max-score":100}})],1),e("div",{staticClass:"absolute z-10 flex flex-col items-center space-y-2"},[e("BaseTypography",{attrs:{variant:"h2"}},[t._v(t._s(t.score))]),e("GradeLetterDisplay",{attrs:{grade:t.score}}),t.date?e("div",{staticClass:"flex flex-col text-center"},[e("BaseTypography",{staticClass:"text-gray-500",attrs:{variant:"overline"}},[t._v(" Last updated: ")]),e("BaseTypography",{staticClass:"text-gray-500",attrs:{variant:"overline"}},[e("DateIsoStringDisplay",{attrs:{value:t.date,format:"date"}})],1)],1):t._e()],1),e("div",{staticClass:"absolute top-full left-full -translate-y-1/3 -translate-x-1/3 rotate-45 transform xl:-translate-y-1/2"},[e("DotsSquare",{attrs:{color:"blue"}})],1)])},Q=[];const x={};var U=d(p,J,Q,!1,X,null,null,null);function X(t){for(let r in x)this[r]=x[r]}const Y=function(){return U.exports}(),u={};u.props={score:{key:"score",required:!0,type:Number},date:{key:"date",required:!0,type:String},description:{key:"description",required:!1,type:String}};u.setup=(t,r)=>{const e=t;return{ratingScoreDescription:_(()=>e.description?e.description:q(e.score))}};u.components=Object.assign({BlackKiteScoreDisplay:Y,WaveForm:K,BlackKiteGradeDescriptions:k},u.components);var Z=function(){var t=this,r=t.$createElement,e=t._self._c||r;return e("div",{staticClass:"relative flex flex-col items-center justify-center xl:grid xl:grid-cols-12"},[e("div",{staticClass:"z-10 -mb-36 xl:col-span-4 xl:col-start-1 xl:row-start-1 xl:mb-0"},[e("div",{staticClass:"px-6 md:px-8 lg:px-4 xl:pl-0"},[e("BlackKiteScoreDisplay",{attrs:{score:t.score,date:t.date}})],1)]),e("div",{staticClass:"absolute top-36 w-full opacity-25 sm:top-40 xl:hidden"},[e("WaveForm")],1),e("BaseSimpleCard",{staticClass:"pt-32 xl:col-span-10 xl:col-start-3 xl:row-start-1 xl:h-fit xl:p-0"},[e("div",{staticClass:"grid items-center gap-6 px-6 py-10 sm:p-8 lg:grid-cols-10 lg:gap-0 xl:p-6"},[e("div",{staticClass:"grid gap-5 text-center lg:col-span-8 lg:text-left xl:col-span-6 xl:col-start-3"},[e("BaseTypography",{staticClass:"text-prime-navy",attrs:{component:"h3",variant:"h5"}},[t._v(" Cyber Risk Rating ")]),e("BaseTypography",{staticClass:"text-gray-600",attrs:{component:"p",variant:"p1"}},[t._v(" The Cyber Risk Rating measures a company\u2019s relative security effectiveness. "+t._s(t.ratingScoreDescription)+" ")])],1),e("div",{staticClass:"flex justify-center lg:col-span-2"},[e("BlackKiteGradeDescriptions")],1)])])],1)},tt=[];const g={};var et=d(u,Z,tt,!1,rt,null,null,null);function rt(t){for(let r in g)this[r]=g[r]}const ct=function(){return et.exports}();export{ct as B,lt as a};
