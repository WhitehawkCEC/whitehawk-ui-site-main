import{bt as F,cC as O,n as d,r as I,a_ as E,c as l,bl as H,b0 as W,bK as N,aY as V,cy as Y,bs as L,bo as G,c8 as C}from"./index.16267a9b.js";import"./chartjs-adapter-date-fns.esm.71c55821.js";import{C as M,B as z,d as K,b as U,P as J,S as Q,p as X}from"./chart.c54a61e9.js";import{T as Z}from"./ToolTip.033b9681.js";import{t as tt}from"./index.ebbce841.js";import{u as R}from"./usePeratonRiskAnalytics.973c94e0.js";import"./index.013816f4.js";import"./index.cd720c1a.js";import"./index.647a185b.js";import"./index.7a54c9f6.js";import"./index.87e44ac4.js";import"./index.fd2d9fcf.js";import"./index.6542356d.js";import"./index.cc35797d.js";import"./index.435bbf12.js";import"./index.728cac74.js";const _={};_.props={link:{key:"link",required:!0,type:String},company:{key:"company",required:!0,type:null}};_.setup=(t,a)=>({});_.components=Object.assign({BackButton:F,BarChartSvg:O},_.components);var et=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"flex flex-col space-y-6 lg:flex-row lg:items-center lg:space-x-4 lg:space-y-0"},[e("BackButton",{attrs:{link:t.link}}),e("div",{staticClass:"flex items-center space-x-2"},[e("div",{staticClass:"shrink-0 rounded-full p-2 bg-gray-700"},[e("BarChartSvg",{staticClass:"h-auto w-6 text-white"})],1),e("div",{staticClass:"flex flex-col -space-y-1"},[e("BaseTypography",{staticClass:"uppercase text-gray-500",attrs:{variant:"overline"}},[t._v(" Subscription Supplier ")]),e("BaseTypography",{attrs:{variant:"h5",component:"h2"}},[t._v(" "+t._s(t.company.name)+" ")])],1)])],1)},at=[];const w={};var st=d(_,et,at,!1,rt,null,null,null);function rt(t){for(let a in w)this[a]=w[a]}const nt=function(){return st.exports}();M.register(z,K,U,J,Q,X);const $=V({inheritAttrs:!1});$.props={bar:{key:"bar",required:!0,type:Array},plotPoint:{key:"plotPoint",required:!0,type:Object},width:{key:"width",required:!1,type:Number},height:{key:"height",required:!1,type:Number},options:{key:"options",required:!0,type:Object}};$.setup=(t,a)=>{const e=t,s=a.emit,i=I(),u=E(),y=l(()=>({width:e.width?`${e.width}px`:"100%",height:e.height?`${e.height}px`:"100%"})),c=l(()=>({datasets:[{type:"bar",label:"Total Companies",data:e.bar,order:2},{type:"scatter",label:"My Company Risk",data:[e.plotPoint],order:1}]})),k=l(()=>({datasets:{bar:{borderWidth:0,borderRadius:8,barPercentage:1,categoryPercentage:1,backgroundColor:["rgba(191, 219, 254, 1)","rgba(147, 197, 253, 1)","rgba(96, 165, 250, 1)","rgba(59, 130, 246, 1)","rgba(37, 99, 235, 1)","rgba(29, 78, 216, 1)","rgba(30, 64, 175, 1)","rgba(30, 58, 138, 1)","rgba(25, 42, 110, 1)","rgba(20, 39, 93, 1)"],hoverBackgroundColor:["rgba(239, 246, 255, 0.95)","rgba(191, 219, 254, 0.95)","rgba(147, 197, 253, 0.95)","rgba(96, 165, 250, 0.95)","rgba(59, 130, 246, 0.95)","rgba(37, 99, 235, 0.95)","rgba(29, 78, 216, 0.95)","rgba(30, 64, 175, 0.95)","rgba(30, 58, 138, 0.95)","rgba(30, 58, 138, 0.95)","rgba(25, 42, 110, 0.95)"]},scatter:{pointStyle:"crossRot",pointRadius:7,borderWidth:3,borderCapStyle:"round",borderColor:"rgba(134, 210, 221,1)",backgroundColor:"rgba(134, 210, 221,1)",pointHitRadius:7,pointHoverRadius:8,hoverBorderWidth:3}},scales:{xAxis:{type:"linear",min:0,max:1,offset:!1,grid:{offset:!1},ticks:{stepSize:.1},title:{display:!0,text:"Risk"}},yAxis:{min:0,max:Math.max(...e.bar.map(({y:r})=>r))+1,title:{display:!0,text:"Companies"},ticks:{precision:0}}},plugins:{legend:{display:!1},tooltip:{xAlign:"center",yAlign:"center",backgroundColor:"white",borderColor:"#d1d5db",borderWidth:1,titleColor:"#111827",bodyColor:"#6b7280",cornerRadius:10,padding:10,boxHeight:12,boxWidth:12,boxPadding:4,callbacks:{title:r=>{var m,v;if(!r.length)return"";const o=((m=r[0])==null?void 0:m.parsed.x)||0;if(((v=r[0])==null?void 0:v.dataset.type)==="scatter")return"My Company";const n=o?o-.05:0,p=o?o+.0499:0;return`Risk Range: ${n.toFixed(4)} - ${p.toFixed(4)}`},label:r=>{const o=r.dataIndex,n=r.dataset.data[o];return r.dataset.type==="scatter"?`Risk: ${n==null?void 0:n.x.toFixed(4)}`:`${r.dataset.label}: ${n==null?void 0:n.y}`||""}}}},animation:{onComplete:()=>{i.value&&s("animation-complete",i.value)}},...e.options}));return H(()=>{W(()=>{const r=i.value;!r||(u.value=new M(r,{type:"bar",data:c.value,options:k.value,plugins:[{id:"customCanvasBackgroundColor",beforeDraw:o=>{const{ctx:n}=o;n.save(),n.globalCompositeOperation="destination-over";const p=n.createLinearGradient(0,0,o.width,o.height);p.addColorStop(0,"rgba(191, 219, 254, 0.15)"),p.addColorStop(.5,"rgba(96, 165, 250, 0.15)"),p.addColorStop(1,"rgba(37, 99, 235, 0.15)");const m=o.width*e.plotPoint.x-42;n.fillStyle=p,n.fillRect(42,12,m,o.height-62),n.restore()}}]}))})}),N(()=>{var r;(r=u.value)==null||r.destroy()}),{canvas:i,parentStyle:y}};var ot=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"relative min-w-[338px]",style:t.parentStyle},[e("canvas",t._b({ref:"canvas",attrs:{role:"img","aria-label":"Ratings Over Time chart"}},"canvas",t.$attrs,!1))])},it=[];const B={};var lt=d($,ot,it,!1,ct,null,null,null);function ct(t){for(let a in B)this[a]=B[a]}const pt=function(){return lt.exports}(),f={};f.props={value:{key:"value",required:!0,type:Array}};f.setup=(t,a)=>({toCurrency:tt});f.components=Object.assign({ToolTip:Z},f.components);var ut=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("dl",{staticClass:"grid gap-2"},t._l(t.value,function(s,i){return e("div",{key:s.id.value,staticClass:"grid gap-2 items-start lg:grid-cols-3 lg:items-end"},[e("dt",{staticClass:"flex flex-row items-center space-x-2 lg:col-span-1"},[s.description?e("ToolTip",[t._v(t._s(s.description))]):t._e(),e("BaseTypography",{staticClass:"text-gray-600",attrs:{variant:"p1"}},[t._v(" "+t._s(s.name)+" ")])],1),e("dd",{staticClass:"flex flex-row justify-between items-center ml-2 lg:flex-col lg:items-center"},[e("BaseTypography",{staticClass:"text-gray-500",class:i!==0?"lg:hidden":"",attrs:{variant:"p2"}},[t._v(" Company Value: ")]),e("div",[e("BaseTypography",{staticClass:"text-gray-700",attrs:{variant:"p1"}},[s.name!=="Total Debt"?[t._v(" "+t._s(s.score)+" ")]:[t._v(" "+t._s(t.toCurrency(s.score))+" ")]],2)],1)],1),e("dd",{staticClass:"flex flex-row justify-between items-center ml-2 lg:flex-col lg:items-center"},[e("BaseTypography",{staticClass:"text-gray-500",class:i!==0?"lg:hidden":"",attrs:{variant:"p2"}},[t._v(" Portfolio Mean: ")]),e("div",[e("BaseTypography",{staticClass:"text-gray-700",attrs:{variant:"p1"}},[s.name!=="Total Debt"?[t._v(" "+t._s(s.average)+" ")]:[t._v(" "+t._s(t.toCurrency(s.average))+" ")]],2)],1)],1)])}),0)},dt=[];const P={};var mt=d(f,ut,dt,!1,vt,null,null,null);function vt(t){for(let a in P)this[a]=P[a]}const yt=function(){return mt.exports}(),S={};S.props={score:{key:"score",required:!0,type:Number},maxScore:{key:"maxScore",required:!0,type:Number}};S.setup=(t,a)=>{const e=t,s=l(()=>200-e.score/e.maxScore*200),i=l(()=>`gradient-${Math.random()}`),u=l(()=>e.score>=.91?"#10b981":e.score>=.81?"#3b83f6":e.score>=.71?"#fde68a":e.score>=.61?"#ed8936":"#ef4444");return{fill:s,gradientId:i,displayColor:u}};var _t=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("svg",{attrs:{viewBox:"0 0 90 80",preserveAspectRatio:"none"}},[e("defs",[e("linearGradient",{attrs:{id:`${t.gradientId}`,x1:"15%",y1:"100%",x2:"80%",y2:"100%"}},[e("stop",{attrs:{offset:"0%","stop-color":`${t.displayColor}`}}),e("stop",{attrs:{offset:"100%","stop-color":`${t.displayColor}`}})],1)],1),e("path",{staticClass:"stroke-current text-gray-200 shadow-inner",attrs:{d:"M20,75 a40,40,0,1,1,50,0",fill:"none","stroke-linecap":"round","stroke-width":"3"}}),e("path",{staticClass:"filling transition duration-300",style:`--fill: ${t.fill}`,attrs:{d:"M20,75 a40,40,0,1,1,50,0",fill:"none",stroke:`url(#${t.gradientId})`,"stroke-dasharray":"200","stroke-dashoffset":"200","stroke-linecap":"round","stroke-width":"3"}})])},ft=[];const A={};var gt=d(S,_t,ft,!1,xt,"149e2882",null,null);function xt(t){for(let a in A)this[a]=A[a]}const ht=function(){return gt.exports}(),g={};g.props={score:{key:"score",required:!0,type:Number},date:{key:"date",required:!0,type:String}};g.setup=(t,a)=>({});g.components=Object.assign({DotsSquare:Y,PeratonArcProgressBar:ht,DateIsoStringDisplay:L},g.components);var bt=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"relative mx-auto flex max-w-xs flex-col items-center justify-center overflow-hidden rounded-xl bg-gradient-to-br from-blue-100 via-white to-white px-4 py-8 shadow-md sm:max-w-sm sm:rounded-3xl xl:max-w-none xl:p-12"},[e("div",{staticClass:"absolute top-full left-full -translate-y-1/3 -translate-x-1/3 rotate-45 transform xl:-translate-y-1/2"},[e("DotsSquare",{attrs:{color:"blue"}})],1),e("div",{staticClass:"relative w-44 sm:w-56"},[e("PeratonArcProgressBar",{attrs:{score:t.score,"max-score":1}})],1),e("div",{staticClass:"absolute flex flex-col items-center space-y-2"},[e("BaseTypography",{attrs:{variant:"h2"}},[t._v(t._s(t.score.toFixed(4)))]),t.date?e("div",{staticClass:"flex flex-col text-center space-y-1"},[e("BaseTypography",{staticClass:"text-gray-500",attrs:{variant:"overline"}},[t._v(" Last updated: ")]),e("BaseTypography",{staticClass:"text-gray-500",attrs:{variant:"overline"}},[e("DateIsoStringDisplay",{attrs:{value:t.date,format:"date"}})],1)],1):t._e()],1)])},kt=[];const T={};var Ct=d(g,bt,kt,!1,$t,null,null,null);function $t(t){for(let a in T)this[a]=T[a]}const St=function(){return Ct.exports}();function Rt(t){return t>=.91?"Your company falls into the 91-100 range meaning its relative security effectiveness is high, having a strong security performance and low risk.":t>=.81?"Your company falls into the 81-90 range meaning its relative security effectiveness is high, having a strong security performance and low risk.":t>=.71?"Your company falls into the 71-80 range meaning its relative security effectiveness is fair, having an average security performance and medium risk.":t>=.61?"Your company falls into the 61-70 range meaning its relative security effectiveness is fair, having an average security performance and medium risk.":"Your company falls into the 0 - 60 range meaning its relative security effectiveness is moderate to low, having a weak security performance and high risk."}const x={};x.props={score:{key:"score",required:!0,type:Number},date:{key:"date",required:!0,type:String}};x.setup=(t,a)=>{const e=t;return{ratingScoreDescription:l(()=>Rt(e.score))}};x.components=Object.assign({WaveForm:G,PeratonScoreDisplay:St},x.components);var wt=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"relative flex flex-col items-center justify-center xl:grid xl:grid-cols-12"},[e("div",{staticClass:"absolute top-36 w-full opacity-25 sm:top-40 xl:hidden"},[e("WaveForm")],1),e("div",{staticClass:"relative -mb-36 xl:col-span-4 xl:col-start-1 xl:row-start-1 xl:mb-0"},[e("div",{staticClass:"px-6 md:px-8 lg:px-4 xl:pl-0"},[e("PeratonScoreDisplay",{attrs:{score:t.score,date:t.date}})],1)]),e("BaseSimpleCard",{staticClass:"pt-32 xl:col-span-10 xl:col-start-3 xl:row-start-1 xl:h-fit xl:p-0"},[e("div",{staticClass:"grid items-center gap-6 px-6 py-10 sm:p-8 xl:grid-cols-10 xl:gap-0 xl:p-6"},[e("div",{staticClass:"grid gap-5 text-center xl:text-left xl:col-span-8 xl:col-start-3"},[e("BaseTypography",{staticClass:"text-prime-navy",attrs:{component:"h3",variant:"h5"}},[t._v(" Risk Analytics ")]),e("BaseTypography",{staticClass:"text-gray-600",attrs:{component:"p",variant:"p1"}},[t._v(" Risk Analytics are a measure of your company\u2019s relative security effectiveness. "+t._s(t.ratingScoreDescription)+" ")])],1)])])],1)},Bt=[];const j={};var Pt=d(x,wt,Bt,!1,At,null,null,null);function At(t){for(let a in j)this[a]=j[a]}const Tt=function(){return Pt.exports}(),h={};h.props={value:{key:"value",required:!0,type:null},riskAnalytics:{key:"riskAnalytics",required:!0,type:Array}};h.setup=(t,a)=>{const e=t,s=[{min:0,max:.0999},{min:.1,max:.1999},{min:.2,max:.2999},{min:.3,max:.3999},{min:.4,max:.4999},{min:.5,max:.5999},{min:.6,max:.6999},{min:.7,max:.7999},{min:.8,max:.8999},{min:.9,max:.9999},{min:1,max:1.0999}],i=l(()=>{const c=new Map,k=e.riskAnalytics.map(r=>r.populationRisk.overallRisk);for(const r of s){const{min:o,max:n}=r,p=o,m=[];for(const v of k)v>=o&&v<=n&&m.push(v);c.has(p)||c.set(p,m.length)}return c}),u=l(()=>[...s.map(({min:c})=>({x:c+.05,y:i.value.get(c)||0}))]),y=l(()=>({x:e.value.populationRisk.overallRisk,y:.5}));return{bar:u,plotPoint:y}};h.components=Object.assign({PeratonSummaryOverview:Tt,PeratonRiskScoreHistogram:pt,PeratonRiskVectorsDisplay:yt},h.components);var jt=function(){var t=this,a=t.$createElement,e=t._self._c||a;return t.value?e("section",{staticClass:"space-y-10"},[e("PeratonSummaryOverview",{attrs:{score:t.value.populationRisk.overallRisk,date:t.value.meta.updatedAt?t.value.meta.updatedAt.value:""}}),e("div",{staticClass:"space-y-2"},[e("BaseTypography",{staticClass:"text-prime-navy",attrs:{component:"h3",variant:"h6"}},[t._v(" Risk Histogram ")]),e("BaseTypography",{staticClass:"text-gray-500",attrs:{variant:"p2"}},[t._v(" Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ")]),e("BaseSimpleCard",{staticClass:"p-4 sm:px-6 sm:py-5 overflow-x-auto"},[e("PeratonRiskScoreHistogram",{attrs:{bar:t.bar,"plot-point":t.plotPoint,height:384,options:{maintainAspectRatio:!1,devicePixelRatio:1}}})],1)],1),e("div",{staticClass:"space-y-2"},[e("BaseTypography",{staticClass:"text-prime-navy",attrs:{component:"h3",variant:"h6"}},[t._v(" Risk Vector Analysis ")]),e("BaseTypography",{staticClass:"text-gray-500",attrs:{variant:"p2"}},[t._v(" Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ")]),e("BaseSimpleCard",{staticClass:"p-4 sm:px-6 sm:py-5"},[e("PeratonRiskVectorsDisplay",{attrs:{value:t.value.populationRisk.riskVectors}})],1)],1)],1):t._e()},qt=[];const q={};var Dt=d(h,jt,qt,!1,Mt,null,null,null);function Mt(t){for(let a in q)this[a]=q[a]}const Ft=function(){return Dt.exports}(),b={};b.setup=(t,a)=>{const e=C("id"),s=C("subscriptionId"),i=C("companyId"),u=R.list(e),y=R.read(e,i),c=l(()=>`/admin/companies/${e.value}/subscriptions/${s.value}/suppliers`);return{riskAnalytics:u,riskAnalysis:y,link:c}};b.components=Object.assign({CompanyIdHeader:nt,PeratonRiskAnalyticsDisplay:Ft},b.components);var Ot=function(){var t=this,a=t.$createElement,e=t._self._c||a;return t.riskAnalysis?e("section",{staticClass:"space-y-6"},[e("CompanyIdHeader",{attrs:{company:t.riskAnalysis.company,link:t.link}}),e("PeratonRiskAnalyticsDisplay",{attrs:{value:t.riskAnalysis,"risk-analytics":t.riskAnalytics}})],1):t._e()},It=[];const D={};var Et=d(b,Ot,It,!1,Ht,null,null,null);function Ht(t){for(let a in D)this[a]=D[a]}const se=function(){return Et.exports}();export{se as default};
