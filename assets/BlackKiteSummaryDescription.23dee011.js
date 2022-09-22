import{G as u}from"./GradeLetterDisplay.b466f938.js";import{n as c,$ as d,c as m}from"./index.70a21152.js";import{B as y,a as _}from"./BlackKiteProgressBar.972998f1.js";import{b as g}from"./ratingScoreDescription.3b48b1ea.js";const s={};s.props={grade:{key:"grade",required:!0,type:null},modules:{key:"modules",required:!0,type:Array},title:{key:"title",required:!0,type:String}};s.setup=(e,r)=>({});s.components=Object.assign({GradeLetterDisplay:u},s.components);var v=function(){var e=this,r=e.$createElement,t=e._self._c||r;return t("div",{staticClass:"p-4"},[t("div",{staticClass:"flex items-center justify-between pb-2 lg:justify-start lg:space-x-4"},[t("BaseTypography",{attrs:{variant:"p1"}},[e._v(" "+e._s(e.title)+" ")]),t("GradeLetterDisplay",{attrs:{grade:e.grade}})],1),t("div",{staticClass:"grid gap-x-6 gap-y-2 lg:grid-cols-2 lg:gap-x-20 xl:grid-cols-3 2xl:grid-cols-5 2xl:gap-0"},e._l(e.modules,function(n){return t("div",{key:n.Name,staticClass:"flex items-center justify-between 2xl:justify-start 2xl:space-x-4"},[t("BaseTypography",{staticClass:"text-gray-500",attrs:{variant:"p2"}},[e._v(" "+e._s(n.Name)+": ")]),t("GradeLetterDisplay",{attrs:{grade:n.GradeLetter}})],1)}),0)])},f=[];const o={};var x=c(s,v,f,!1,S,null,null,null);function S(e){for(let r in o)this[r]=o[r]}const k=function(){return x.exports}(),a={};a.props={summary:{key:"summary",required:!0,type:null}};a.setup=(e,r)=>({});a.components=Object.assign({BlackKiteSummarySection:k},a.components);var B=function(){var e=this,r=e.$createElement,t=e._self._c||r;return t("section",{staticClass:"divide-y"},[t("BlackKiteSummarySection",{attrs:{grade:e.summary.Reputation.GradeLetter,modules:e.summary.Reputation.Modules,title:"Reputation"}}),t("BlackKiteSummarySection",{attrs:{grade:e.summary.Privacy.GradeLetter,modules:e.summary.Privacy.Modules,title:"Privacy"}}),t("BlackKiteSummarySection",{attrs:{grade:e.summary.Resiliency.GradeLetter,modules:e.summary.Resiliency.Modules,title:"Resiliency"}}),t("BlackKiteSummarySection",{attrs:{grade:e.summary.Safeguard.GradeLetter,modules:e.summary.Safeguard.Modules,title:"Safeguard"}})],1)},h=[];const l={};var C=c(a,B,h,!1,$,null,null,null);function $(e){for(let r in l)this[r]=l[r]}const q=function(){return C.exports}(),i={};i.props={score:{key:"score",required:!0,type:Number},date:{key:"date",required:!0,type:String},description:{key:"description",required:!1,type:String}};i.setup=(e,r)=>{const t=e;return{ratingScoreDescription:m(()=>g(t.score))}};i.components=Object.assign({BlackKiteProgressBar:y,GradeLetterDisplay:u,DateIsoStringDisplay:d,BlackKiteGradeDescriptions:_},i.components);var D=function(){var e=this,r=e.$createElement,t=e._self._c||r;return t("div",{staticClass:"flex flex-col justify-center space-y-4 p-8 lg:flex-row lg:justify-around lg:space-x-6 lg:space-y-0 xl:space-x-12"},[t("div",{staticClass:"flex flex-col items-center justify-center"},[t("div",{staticClass:"relative w-56"},[t("BlackKiteProgressBar",{attrs:{score:e.score,"max-score":100}})],1),t("div",{staticClass:"absolute flex flex-col items-center space-y-2"},[t("span",{staticClass:"text-5xl font-bold tracking-wide"},[e._v(" "+e._s(e.score)+" ")]),t("GradeLetterDisplay",{attrs:{grade:e.score}}),e.date?t("div",{staticClass:"flex flex-col items-center justify-center text-gray-500"},[t("BaseTypography",{attrs:{variant:"overline"}},[e._v("Last updated:")]),t("BaseTypography",{attrs:{variant:"overline"}},[t("DateIsoStringDisplay",{attrs:{value:e.date,format:"date"}})],1)],1):e._e()],1)]),t("div",{staticClass:"grid gap-4 text-center lg:grid-cols-3 lg:text-left xl:grid-cols-4 xl:items-center xl:gap-0"},[t("div",{staticClass:"grid gap-5 lg:col-span-2 xl:col-span-3"},[t("BaseTypography",{staticClass:"text-prime-navy",attrs:{component:"h2",variant:"h5"}},[e._v(" Cyber Risk Rating ")]),t("div",{staticClass:"grid gap-2 text-gray-600"},[t("BaseTypography",{attrs:{component:"p",variant:"p1"}},[e._v(" The Cyber Risk Rating measures a company\u2019s relative security effectiveness. ")]),e.description?[t("BaseTypography",{attrs:{component:"p",variant:"p1"}},[e._v(" "+e._s(e.description)+" ")])]:[t("BaseTypography",{attrs:{component:"p",variant:"p1"}},[e._v(" "+e._s(e.ratingScoreDescription)+" ")])]],2)],1),t("BlackKiteGradeDescriptions")],1)])},j=[];const p={};var R=c(i,D,j,!1,b,null,null,null);function b(e){for(let r in p)this[r]=p[r]}const M=function(){return R.exports}();export{M as B,q as a};
