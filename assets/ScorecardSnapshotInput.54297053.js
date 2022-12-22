import{aq as h,aO as k,n as p,c_ as g,ax as d,b as C}from"./index.0c8230bc.js";import{G as S,B as I}from"./GaugeChart.bda90ba6.js";import{T as b}from"./TabbedPanel.6e67d6fd.js";const r={};r.props={value:{key:"value",required:!1,type:Array}};r.setup=(t,s)=>({});r.components=Object.assign({CheckSvg:h,XSvg:k},r.components);var j=function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("ul",{staticClass:"flex flex-col space-y-2 px-4 pt-2 pb-4"},t._l(t.value,function(n,a){return e("li",{key:a,staticClass:"flex-shrink-1"},[e("BaseLabel",{staticClass:"flex items-center space-x-2"},[e("div",{staticClass:"flex-shrink-0 rounded-full bg-gray-100 shadow-inner"},[n.itemComplete?e("CheckSvg",{staticClass:"h-4 w-4 text-green-500"}):e("XSvg",{staticClass:"h-4 w-4 text-red-500"})],1),e("span",{staticClass:"text-body w-full overflow-x-auto"},[t._v(" "+t._s(n.todoText)+" ")])])],1)}),0)},B=[];const v={};var L=p(r,j,B,!1,q,null,null,null);function q(t){for(let s in v)this[s]=v[s]}const $=function(){return L.exports}(),l={};l.props={value:{key:"value",required:!0,type:null}};l.setup=(t,s)=>{const e=t,n=s.emit,a=d(e,n),o=["critical","next","pending"],_=C(o[0]);return{proxy:a,categories:o,category:_}};l.components=Object.assign({BaseSimpleCard:g,TabbedPanel:b,TodoList:$},l.components);var R=function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("BaseSimpleCard",{staticClass:"divide-y"},[e("h3",{staticClass:"p-4 font-display text-lg font-semibold"},[t._v("Action Plan")]),e("TabbedPanel",{attrs:{tabs:t.categories},scopedSlots:t._u([{key:"content",fn:function(){return[e("TodoList",{attrs:{value:t.proxy.data[t.category]}})]},proxy:!0}]),model:{value:t.category,callback:function(n){t.category=n},expression:"category"}})],1)},A=[];const y={};var P=p(l,R,A,!1,T,null,null,null);function T(t){for(let s in y)this[s]=y[s]}const w=function(){return P.exports}(),c={};c.props={value:{key:"value",required:!0,type:null}};c.setup=(t,s)=>{const e=t,n=s.emit,a=d(e,n),o=["basic","foundational","organizational"],_=C(o[0]);return{proxy:a,categories:o,category:_}};c.components=Object.assign({TabbedPanel:b,TodoList:$},c.components);var M=function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("BaseSimpleCard",{staticClass:"divide-y"},[e("h3",{staticClass:"p-4 font-display text-lg font-semibold"},[t._v(" Maturity Level Assessment ")]),e("TabbedPanel",{staticClass:"overflow-x-auto",attrs:{tabs:t.categories},scopedSlots:t._u([{key:"content",fn:function(){return[e("TodoList",{attrs:{value:t.proxy.data[t.category]}})]},proxy:!0}]),model:{value:t.category,callback:function(n){t.category=n},expression:"category"}})],1)},O=[];const f={};var E=p(c,M,O,!1,F,null,null,null);function F(t){for(let s in f)this[s]=f[s]}const G=function(){return E.exports}(),i={};i.props={value:{key:"value",required:!0,type:null}};i.setup=(t,s)=>{const e=t,n=s.emit;return{proxy:d(e,n)}};i.components=Object.assign({GaugeChart:S},i.components);var z=function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("BaseSimpleCard",[e("fieldset",{staticClass:"divide-y"},[e("legend",[e("h3",{staticClass:"p-4 font-display text-lg font-semibold"},[t._v(" Cyber Risk Indicator ")])]),e("div",{staticClass:"flex flex-col divide-y"},[e("div",{staticClass:"flex justify-center p-4 lg:justify-start"},[e("BaseLabel",[e("span",{staticClass:"sr-only"},[t._v("Image")]),e("GaugeChart",{staticClass:"w-64",attrs:{"cyber-score":t.proxy.cyberScore}})],1)],1),e("BaseLabel",{staticClass:"flex flex-col px-6 py-4"},[e("span",{staticClass:"sr-only"},[t._v("Text")]),e("div",{staticClass:"flex flex-col space-y-4 font-body leading-7 text-gray-500"},t._l(t.proxy.text,function(n,a){return e("p",{key:a},[t._v(" "+t._s(n)+" ")])}),0)])],1),e("div",{staticClass:"p-4"},[e("BaseLabel",{staticClass:"grid gap-2 lg:grid-cols-3 lg:items-center"},[e("span",{staticClass:"block text-sm font-medium leading-5 text-gray-700 lg:col-span-1"},[t._v(" Note ")]),e("BaseTextarea",{staticClass:"lg:col-span-2",attrs:{rows:"3"},model:{value:t.proxy.note,callback:function(n){t.$set(t.proxy,"note",n)},expression:"proxy.note"}})],1)],1)])])},D=[];const x={};var X=p(i,z,D,!1,N,null,null,null);function N(t){for(let s in x)this[s]=x[s]}const Q=function(){return X.exports}(),u={};u.props={id:{key:"id",required:!0,type:String},value:{key:"value",required:!0,type:null}};u.setup=(t,s)=>{const e=t,n=s.emit;return{proxy:d(e,n)}};u.components=Object.assign({BaseSimpleCard:g,RiskIndicatorInput:Q,MaturityLevelAssessmentInput:G,ActionPlanInput:w,BundleSolutionDisplay:I},u.components);var H=function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("fieldset",{staticClass:"flex flex-col space-y-4"},[e("legend",{staticClass:"sr-only"},[t._v("Scorecard")]),e("BaseSimpleCard",[e("fieldset",{staticClass:"divide-y"},[e("legend",[e("h3",{staticClass:"p-4 font-display text-lg font-semibold"},[t._v(" Questionnaire Response ")])]),e("div",{staticClass:"p-4"},[t.proxy.questionnaireResponse?e("dl",{staticClass:"grid gap-4 sm:grid-cols-2"},t._l(t.proxy.questionnaireResponse.answers,function(n){return e("div",{key:n.questionId,staticClass:"grid"},[e("dt",{staticClass:"text-xs tracking-wide text-gray-500"},[t._v(" "+t._s(n.questionId)+" ")]),e("dd",[t._v(t._s(n.value))])])}),0):t._e()])])]),e("RiskIndicatorInput",{model:{value:t.proxy.riskIndicator,callback:function(n){t.$set(t.proxy,"riskIndicator",n)},expression:"proxy.riskIndicator"}}),e("section",{staticClass:"grid grid-cols-1 gap-4 xl:grid-cols-2"},[e("MaturityLevelAssessmentInput",{model:{value:t.proxy.maturityLevelAssessment,callback:function(n){t.$set(t.proxy,"maturityLevelAssessment",n)},expression:"proxy.maturityLevelAssessment"}}),e("ActionPlanInput",{model:{value:t.proxy.actionPlan,callback:function(n){t.$set(t.proxy,"actionPlan",n)},expression:"proxy.actionPlan"}})],1),e("BundleSolutionDisplay",{attrs:{id:t.id,bundle:t.proxy.bundles}})],1)},J=[];const m={};var K=p(u,H,J,!1,U,null,null,null);function U(t){for(let s in m)this[s]=m[s]}const Z=function(){return K.exports}();export{Z as S};
