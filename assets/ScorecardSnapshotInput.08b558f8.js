import{cD as B,aB as w,n as o,aq as j,aO as T,d6 as b,ax as m,b as $,bn as I}from"./index.9ff333f2.js";import{G as q,B as L}from"./GaugeChart.16eaf6c2.js";import{T as S}from"./TabbedPanel.08d457b4.js";const i={};i.props={value:{key:"value",required:!0,type:Number}};i.setup=(t,s)=>{const e=t,a=s.emit;return{proxy:w(e,a)}};i.components=Object.assign({DotsSquare:B,GaugeChart:q},i.components);var R=function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"flex flex-col overflow-hidden rounded-xl bg-gradient-to-br from-blue-100 via-white to-white shadow-md"},[e("div",{staticClass:"relative mx-auto flex max-w-xs flex-col items-center justify-center px-8 py-12 sm:max-w-sm sm:rounded-3xl xl:max-w-none xl:px-12 xl:py-16"},[e("div",{staticClass:"absolute top-full left-full -translate-y-1/3 -translate-x-1/3 rotate-45 transform xl:-translate-y-1/2"},[e("DotsSquare",{attrs:{color:"blue"}})],1),e("div",{staticClass:"relative w-40 xs:w-52 sm:w-64"},[e("GaugeChart",{attrs:{"cyber-score":t.proxy}})],1)]),e("div",{staticClass:"p-4"},[t._t("button")],2)])},A=[];const d={};var P=o(i,R,A,!1,M,null,null,null);function M(t){for(let s in d)this[s]=d[s]}const D=function(){return P.exports}(),p={};p.props={value:{key:"value",required:!1,type:Array}};p.setup=(t,s)=>({});p.components=Object.assign({CheckSvg:j,XSvg:T},p.components);var F=function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("ul",{staticClass:"flex flex-col space-y-2"},t._l(t.value,function(a,n){return e("li",{key:n,staticClass:"flex-shrink-1"},[e("BaseLabel",{staticClass:"flex items-center space-x-2"},[e("div",{staticClass:"flex-shrink-0 rounded-full bg-gray-100 shadow-inner"},[a.itemComplete?e("CheckSvg",{staticClass:"h-4 w-4 text-green-500"}):e("XSvg",{staticClass:"h-4 w-4 text-red-500"})],1),e("span",{staticClass:"text-body w-full overflow-x-auto"},[t._v(" "+t._s(a.todoText)+" ")])])],1)}),0)},O=[];const x={};var E=o(p,F,O,!1,G,null,null,null);function G(t){for(let s in x)this[s]=x[s]}const k=function(){return E.exports}(),u={};u.props={value:{key:"value",required:!0,type:null}};u.setup=(t,s)=>{const e=t,a=s.emit,n=m(e,a),r=["critical","next","pending"],l=$(r[0]);return{proxy:n,categories:r,category:l}};u.components=Object.assign({BaseSimpleCard:b,TabbedPanel:S,TodoList:k},u.components);var z=function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"flex flex-col space-y-2"},[e("BaseTypography",{staticClass:"text-prime-navy",attrs:{variant:"h6",component:"h3"}},[t._v(" Action Plan ")]),e("BaseSimpleCard",{staticClass:"xl:min-h-[23.5rem]"},[e("TabbedPanel",{attrs:{tabs:t.categories},scopedSlots:t._u([{key:"content",fn:function(){return[e("TodoList",{attrs:{value:t.proxy.data[t.category]}})]},proxy:!0}]),model:{value:t.category,callback:function(a){t.category=a},expression:"category"}})],1)],1)},N=[];const f={};var W=o(u,z,N,!1,X,null,null,null);function X(t){for(let s in f)this[s]=f[s]}const Q=function(){return W.exports}(),_={};_.props={value:{key:"value",required:!0,type:null}};_.setup=(t,s)=>{const e=t,a=s.emit,n=m(e,a),r=["basic","foundational","organizational"],l=$(r[0]);return{proxy:n,categories:r,category:l}};_.components=Object.assign({TabbedPanel:S,TodoList:k},_.components);var Z=function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"flex flex-col space-y-2"},[e("BaseTypography",{staticClass:"text-prime-navy",attrs:{variant:"h6",component:"h3"}},[t._v(" Maturity Level Assessment ")]),e("BaseSimpleCard",{staticClass:"xl:min-h-[23.5rem]"},[e("TabbedPanel",{staticClass:"overflow-x-auto",attrs:{tabs:t.categories},scopedSlots:t._u([{key:"content",fn:function(){return[e("TodoList",{attrs:{value:t.proxy.data[t.category]}})]},proxy:!0}]),model:{value:t.category,callback:function(a){t.category=a},expression:"category"}})],1)],1)},H=[];const g={};var J=o(_,Z,H,!1,K,null,null,null);function K(t){for(let s in g)this[s]=g[s]}const U=function(){return J.exports}(),v={};v.props={value:{key:"value",required:!0,type:null}};v.setup=(t,s)=>{const e=t,a=s.emit;return{proxy:m(e,a)}};v.components=Object.assign({WaveForm:I,GaugeChartDisplay:D},v.components);var V=function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"relative flex flex-col items-center justify-center"},[e("div",{staticClass:"absolute top-36 w-full opacity-25 sm:top-40"},[e("WaveForm")],1),e("div",{staticClass:"relative -mb-36"},[e("div",{staticClass:"px-6 md:px-8 lg:px-4"},[e("GaugeChartDisplay",{model:{value:t.proxy.cyberScore,callback:function(a){t.$set(t.proxy,"cyberScore",a)},expression:"proxy.cyberScore"}})],1)]),e("BaseSimpleCard",{staticClass:"pt-36"},[e("div",{staticClass:"grid items-center gap-6 px-6 py-10 sm:p-8"},[e("div",{staticClass:"grid gap-5"},[e("BaseTypography",{staticClass:"text-prime-navy",attrs:{variant:"h6",component:"h3"}},[t._v(" Cyber Risk Indicator ")]),e("div",{staticClass:"flex flex-col space-y-4"},t._l(t.proxy.text,function(a,n){return e("BaseTypography",{key:n,staticClass:"leading-7 text-gray-500",attrs:{variant:"p1",component:"p"}},[t._v(" "+t._s(a)+" ")])}),1),e("BaseLabel",[t._v(" Note "),e("BaseTextarea",{staticClass:"w-full",attrs:{rows:"3"},model:{value:t.proxy.note,callback:function(a){t.$set(t.proxy,"note",a)},expression:"proxy.note"}})],1)],1)])])],1)},Y=[];const h={};var tt=o(v,V,Y,!1,et,null,null,null);function et(t){for(let s in h)this[s]=h[s]}const st=function(){return tt.exports}(),y={};y.props={id:{key:"id",required:!0,type:String},value:{key:"value",required:!0,type:null}};y.setup=(t,s)=>{const e=t,a=s.emit,n=m(e,a);function r(c){return c.split("_").join(" ")}function l(c){return/[`!@#$%^&*()_+\-=[\]{};':"\\|,.<>/?~]/.test(c)?c.replace(/[^a-zA-Z0-9 ]/g,""):c}return{proxy:n,formatLabel:r,formatResponse:l}};y.components=Object.assign({RiskIndicatorInput:st,BaseSimpleCard:b,MaturityLevelAssessmentInput:U,ActionPlanInput:Q,BundleSolutionDisplay:L},y.components);var at=function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("fieldset",{staticClass:"flex flex-col space-y-10"},[e("legend",{staticClass:"sr-only"},[t._v("Snapshot Scorecard")]),e("RiskIndicatorInput",{model:{value:t.proxy.riskIndicator,callback:function(a){t.$set(t.proxy,"riskIndicator",a)},expression:"proxy.riskIndicator"}}),e("div",{staticClass:"space-y-2"},[e("BaseTypography",{staticClass:"text-prime-navy",attrs:{variant:"h6",component:"h3"}},[t._v(" Questionnaire Response ")]),e("BaseSimpleCard",{staticClass:"p-4 sm:px-6 sm:py-5"},[t.proxy.questionnaireResponse?e("div",{staticClass:"grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5"},t._l(t.proxy.questionnaireResponse.answers,function(a){return e("dl",{key:a.questionId},[e("dt",[e("BaseTypography",{staticClass:"uppercase text-gray-500",attrs:{variant:"overline"}},[t._v(" "+t._s(t.formatLabel(a.questionId))+" ")])],1),e("dd",[e("BaseTypography",{attrs:{variant:"p1",component:"p"}},[t._v(" "+t._s(t.formatResponse(a.value.toLocaleString()))+" ")])],1)])}),0):t._e()])],1),e("section",{staticClass:"grid grid-cols-1 gap-10 xl:grid-cols-2"},[e("MaturityLevelAssessmentInput",{model:{value:t.proxy.maturityLevelAssessment,callback:function(a){t.$set(t.proxy,"maturityLevelAssessment",a)},expression:"proxy.maturityLevelAssessment"}}),e("ActionPlanInput",{model:{value:t.proxy.actionPlan,callback:function(a){t.$set(t.proxy,"actionPlan",a)},expression:"proxy.actionPlan"}})],1),e("BundleSolutionDisplay",{attrs:{id:t.id,bundle:t.proxy.bundles}})],1)},nt=[];const C={};var rt=o(y,at,nt,!1,ot,null,null,null);function ot(t){for(let s in C)this[s]=C[s]}const ut=function(){return rt.exports}();export{D as G,ut as S};