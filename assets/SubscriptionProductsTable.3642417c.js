import{an as m,bF as _,r as M,n as f,ca as H,c as u,cb as Y,cc as W,a9 as S,cd as U,aS as C}from"./index.d7f0b820.js";import{D as G}from"./DateRangeDisplay.7b0bb498.js";import{A as J}from"./AppVDateRangePicker.0b794e2a.js";import{t as v}from"./index.aa95d31d.js";import{i as z}from"./index.58c90f69.js";import{I as T}from"./IsoDateTimeDisplay.c6fb6301.js";import{c as K,d as Q}from"./index.cd2cd91f.js";import{A as X,T as Z}from"./AppTanStackTable.ad049fff.js";import{c as tt}from"./createOnChangeFn.d51f0fe8.js";import{u as et}from"./createSimpleTable.69515b2e.js";function at(t,a){m(2,arguments);var e=v(t);if(isNaN(Number(e)))return NaN;var r=e.getTime(),s;a==null?s=[]:typeof a.forEach=="function"?s=a:s=Array.prototype.slice.call(a);var n,o;return s.forEach(function(d,i){var c=v(d);if(isNaN(Number(c))){n=NaN,o=NaN;return}var l=Math.abs(r-c.getTime());(n==null||l<Number(o))&&(n=i,o=l)}),n}function P(t,a){var e;m(1,arguments);var r=t||{},s=v(r.start),n=v(r.end),o=n.getTime();if(!(s.getTime()<=o))throw new RangeError("Invalid interval");var d=[],i=s;i.setHours(0,0,0,0);var c=Number((e=a==null?void 0:a.step)!==null&&e!==void 0?e:1);if(c<1||isNaN(c))throw new RangeError("`options.step` must be a number greater than 1");for(;i.getTime()<=o;)d.push(v(i)),i.setDate(i.getDate()+c),i.setHours(0,0,0,0);return d}function st(t){m(1,arguments);var a=t||{},e=v(a.start),r=v(a.end),s=r.getTime(),n=[];if(!(e.getTime()<=s))throw new RangeError("Invalid interval");var o=e;for(o.setHours(0,0,0,0),o.setDate(1);o.getTime()<=s;)n.push(v(o)),o.setMonth(o.getMonth()+1);return n}function rt(t){m(1,arguments);var a=v(t),e=a.getFullYear(),r=a.getMonth(),s=new Date(0);return s.setFullYear(e,r+1,0),s.setHours(0,0,0,0),s.getDate()}function nt(t,a){m(2,arguments);var e=v(t),r=_(a),s=e.getFullYear(),n=e.getDate(),o=new Date(0);o.setFullYear(s,r,15),o.setHours(0,0,0,0);var d=rt(o);return e.setMonth(r,Math.min(n,d)),e}function w(t){return typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?w=function(e){return typeof e}:w=function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},w(t)}function E(t,a){if(m(2,arguments),w(a)!=="object"||a===null)throw new RangeError("values parameter must be an object");var e=v(t);return isNaN(e.getTime())?new Date(NaN):(a.year!=null&&e.setFullYear(a.year),a.month!=null&&(e=nt(e,a.month)),a.date!=null&&e.setDate(_(a.date)),a.hours!=null&&e.setHours(_(a.hours)),a.minutes!=null&&e.setMinutes(_(a.minutes)),a.seconds!=null&&e.setSeconds(_(a.seconds)),a.milliseconds!=null&&e.setMilliseconds(_(a.milliseconds)),e)}var ot=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("svg",t._g({attrs:{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24","stroke-width":"1.5",stroke:"currentColor","aria-hidden":"true"}},t.$listeners),[e("path",{attrs:{"stroke-linecap":"round","stroke-linejoin":"round",d:"M12 6.75a.75.75 0 1 1 0-1.5.75.75 0 0 1 0 1.5zm0 6a.75.75 0 1 1 0-1.5.75.75 0 0 1 0 1.5zm0 6a.75.75 0 1 1 0-1.5.75.75 0 0 1 0 1.5z"}})])};const it={render:ot},k={};k.setup=(t,a)=>{const e=M(!1),r=M(!1);function s(){r.value=!0}function n(){r.value||(e.value=!0)}function o(){r.value||(e.value=!1)}function d(){e.value=!e.value,r.value=!1}return{open:e,touchend:s,show:n,hide:o,click:d}};k.components=Object.assign({EllipsisSvg:it},k.components);var lt=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"flex flex-shrink-0 items-center space-x-3"},[e("div",{on:{mouseenter:t.show,mouseleave:t.hide}},[e("BaseIcon",{attrs:{type:"button",color:"light",size:"small"},on:{touchend:t.touchend,focus:t.show,blur:t.hide,click:t.click}},[e("EllipsisSvg",{staticClass:"h-auto w-6"})],1),e("BaseFlyoutMenu",{model:{value:t.open,callback:function(r){t.open=r},expression:"open"}},[e("ul",{staticClass:"relative grid bg-white"},[t._t("default")],2)])],1)])},ct=[];const B={};var ut=f(k,lt,ct,!1,dt,null,null,null);function dt(t){for(let a in B)this[a]=B[a]}const pt=function(){return ut.exports}(),g={};g.props={id:{key:"id",required:!0,type:String},subscriptionId:{key:"subscriptionId",required:!0,type:String},product:{key:"product",required:!0,type:null}};g.setup=(t,a)=>{const e=t,{removePinned:r}=H();async function s(){const o=e.product;o.product&&o.product.id&&await r(o.product.id.value)}const n=u(()=>Y(e.id,e.subscriptionId,e.product));return{removeFromPinned:s,displayProduct:n}};g.components=Object.assign({DateRangeDisplay:G,SimpleFlyoutMenu:pt},g.components);var vt=function(){var t=this,a=t.$createElement,e=t._self._c||a;return t.displayProduct?e("div",{staticClass:"relative col-span-1 flex rounded-xl shadow-sm"},[e("div",{class:[t.displayProduct.bgColor,"flex w-16 flex-shrink-0 items-center justify-center rounded-l-xl p-4"]},[e(t.displayProduct.icon,{tag:"Component",staticClass:"h-auto w-8 text-white"})],1),e("div",{staticClass:"flex flex-1 items-center justify-between truncate rounded-r-xl border-r border-b border-t bg-white p-4"},[e("div",{staticClass:"flex-1 truncate"},[t.displayProduct.productType?e("BaseTypography",{staticClass:"truncate uppercase text-gray-500",attrs:{variant:"overline",component:"p"}},[t._v(" "+t._s(t.displayProduct.productType)+" ")]):t._e(),e("BaseTypography",{staticClass:"truncate",attrs:{variant:"p1",component:"h4"}},[t._v(" "+t._s(t.displayProduct.name)+" ")]),t.displayProduct.validity?e("BaseTypography",{staticClass:"truncate text-gray-500",attrs:{variant:"p2",component:"p"}},[e("DateRangeDisplay",{attrs:{value:t.displayProduct.validity}})],1):t._e()],1),e("SimpleFlyoutMenu",[e("li",[e("BaseLink",{staticClass:"w-full p-3 hover:bg-indigo-100 focus:bg-indigo-100",attrs:{"display-type":"gray",to:t.displayProduct.link}},[t._v(" View ")])],1),e("li",[e("button",{staticClass:"-mb-px w-full transform p-3 font-body text-base font-medium leading-6 text-gray-500 antialiased transition duration-200 ease-in-out hover:-translate-y-px hover:bg-indigo-100 hover:text-prime-indigo focus:bg-indigo-100 focus:text-prime-indigo focus:outline-none disabled:cursor-not-allowed disabled:opacity-50",on:{click:t.removeFromPinned}},[t._v(" Remove from pinned ")])])])],1)]):t._e()},ft=[];const F={};var _t=f(g,vt,ft,!1,mt,null,null,null);function mt(t){for(let a in F)this[a]=F[a]}const yt=function(){return _t.exports}(),h={};h.props={companyId:{key:"companyId",required:!0,type:String},subId:{key:"subId",required:!0,type:String},products:{key:"products",required:!0,type:Array}};h.setup=(t,a)=>{const e=t,r=u(()=>e.companyId),s=u(()=>e.subId),n=H(),o=u(()=>n.pinnedProductIds),d=u(()=>{const i=[];return e.products.filter(l=>{var p,y;return((y=(p=l.product)==null?void 0:p.id)==null?void 0:y.value)&&o.value.includes(l.product.id.value)?i.push(l):W.SubscriptionProductWithConfigType.create()}),i.sort((l,p)=>l.product&&p.product?l.product.name.localeCompare(p.product.name):-1)||[]});return{id:r,subscriptionId:s,pinnedProducts:d}};h.components=Object.assign({SubscriptionProductCard:yt},h.components);var gt=function(){var t=this,a=t.$createElement,e=t._self._c||a;return t.pinnedProducts.length>0?e("div",{staticClass:"space-y-2"},[e("BaseTypography",{staticClass:"uppercase text-gray-600",attrs:{variant:"overline"}},[t._v(" Pinned Products ")]),e("ul",{staticClass:"grid grid-cols-1 gap-4 sm:gap-6 lg:grid-cols-2 2xl:grid-cols-3"},t._l(t.pinnedProducts,function(r,s){return e("li",{key:s},[e("SubscriptionProductCard",{attrs:{id:t.id,"subscription-id":t.subscriptionId,product:r}})],1)}),0)],1):t._e()},ht=[];const N={};var xt=f(h,gt,ht,!1,bt,null,null,null);function bt(t){for(let a in N)this[a]=N[a]}const le=function(){return xt.exports}();var Dt=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("svg",t._g({attrs:{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",fill:"currentColor","aria-hidden":"true"}},t.$listeners),[e("path",{attrs:{"fill-rule":"evenodd",d:"M16.72 7.72a.75.75 0 0 1 1.06 0l3.75 3.75a.75.75 0 0 1 0 1.06l-3.75 3.75a.75.75 0 1 1-1.06-1.06l2.47-2.47H3a.75.75 0 0 1 0-1.5h16.19l-2.47-2.47a.75.75 0 0 1 0-1.06z","clip-rule":"evenodd"}})])};const $t={render:Dt},x={};x.props={value:{key:"value",required:!0,type:null}};x.setup=(t,a)=>{const e=t,r=new Date,s=u(()=>{const{start:c,end:l}=e.value;if(c&&l)return{start:c.value,end:l.value}}),n=u(()=>{if(s.value)return{start:S(s.value.start),end:S(s.value.end)}}),o=u(()=>n.value?{start:n.value.start.toLocaleDateString(),end:n.value.end.toLocaleDateString()}:void 0),d=u(()=>n.value?st(n.value).length-1:0),i=u(()=>n.value?z(r,n.value):!1);return{dateRange:s,interval:n,formattedDateRange:o,totalMonths:d,isInRange:i}};x.components=Object.assign({ArrowSvg:$t,AppVDateRangePicker:J},x.components);var Ct=function(){var t=this,a=t.$createElement,e=t._self._c||a;return t.dateRange?e("BaseSimpleCard",{staticClass:"space-y-6 p-4 sm:p-6"},[e("div",{staticClass:"space-y-2 sm:grid sm:items-center sm:gap-4 sm:space-y-0 lg:grid-cols-11 lg:gap-0 lg:gap-y-6"},[e("div",{staticClass:"lg:col-span-5"},[e("BaseLabel",[e("span",[t._v("Start Date")]),t.formattedDateRange?e("BaseInput",{staticClass:"w-full",attrs:{readonly:""},model:{value:t.formattedDateRange.start,callback:function(r){t.$set(t.formattedDateRange,"start",r)},expression:"formattedDateRange.start"}}):t._e()],1)],1),e("ArrowSvg",{staticClass:"hidden w-5 shrink-0 text-gray-500 lg:col-span-1 lg:flex lg:place-self-center lg:pt-4"}),e("div",{staticClass:"lg:col-span-5"},[e("BaseLabel",[e("span",[t._v("End Date")]),t.formattedDateRange?e("BaseInput",{staticClass:"w-full",attrs:{readonly:""},model:{value:t.formattedDateRange.end,callback:function(r){t.$set(t.formattedDateRange,"end",r)},expression:"formattedDateRange.end"}}):t._e()],1)],1)],1),t.dateRange?e("div",[e("ClientOnly",[e("AppVDateRangePicker",{staticClass:"pointer-events-none",attrs:{"model-value":t.interval,step:t.totalMonths,"is-range":"","is-expanded":"",color:t.isInRange?"blue":"red","min-date":t.dateRange.start,"max-date":t.dateRange.end}})],1)],1):t._e()]):t._e()},wt=[];const j={};var St=f(x,Ct,wt,!1,kt,null,null,null);function kt(t){for(let a in j)this[a]=j[a]}const Tt=function(){return St.exports}(),I={};I.props={currentDay:{key:"currentDay",required:!0,type:Number},totalDays:{key:"totalDays",required:!0,type:Number}};I.setup=(t,a)=>{const e=t,r=u(()=>e.currentDay!==-1?20-e.currentDay/e.totalDays*20:0),s=u(()=>`gradient-${Math.random()}`);return{fill:r,gradientId:s}};var It=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("svg",{attrs:{viewBox:"0 0 100 70",preserveAspectRatio:"none"}},[e("defs",[e("linearGradient",{attrs:{id:`${t.gradientId}`,x1:"0%",y1:"0%",x2:"100%",y2:"0%"}},[e("stop",{attrs:{offset:"0%","stop-color":"#22c55e"}}),e("stop",{attrs:{offset:"50%","stop-color":"#eab308"}}),e("stop",{attrs:{offset:"100%","stop-color":"#ef4444"}})],1),e("mask",{attrs:{id:"mask",maskUnits:"userSpaceOnUse"}},[e("path",{staticClass:"fill-transparent stroke-current stroke-[20] text-white",attrs:{d:"M10,20 a40,40,0,0,0,80,0","stroke-dasharray":"9, .8"}})])],1),e("path",{staticClass:"fill-transparent stroke-current stroke-[20] text-gray-200",attrs:{d:"M10,20 a40,40,0,0,0,80,0","stroke-dasharray":"9, .8"}}),e("path",{staticClass:"filling fill-transparent stroke-[20]",style:`--fill: ${t.fill}`,attrs:{mask:"url(#mask)",d:"M10,20 a40,40,0,0,0,80,0",stroke:`url(#${t.gradientId})`,"stroke-dasharray":"20","stroke-dashoffset":"20",pathLength:"20"}})])},Rt=[];const A={};var Mt=f(I,It,Rt,!1,Pt,"c86ee660",null,null);function Pt(t){for(let a in A)this[a]=A[a]}const Et=function(){return Mt.exports}(),b={};b.props={status:{key:"status",required:!0,type:null}};b.setup=(t,a)=>{const e=t,r=E(new Date,{hours:0,minutes:0,seconds:0,milliseconds:0}),s=u(()=>{if(e.status&&e.status.validity&&e.status.validity.start&&e.status.validity.end){const l=v(S(e.status.validity.start.value)),p=E(l,{hours:0,minutes:0,seconds:0,milliseconds:0});return{start:K(r,p)===0?r:l,end:v(S(e.status.validity.end.value))}}}),n=u(()=>{if(s.value&&z(r,s.value)){const l=P(s.value),p=at(r,l);return p!==void 0&&p===0?p+1:p}}),o=u(()=>s.value?P(s.value).length:-1),d=u(()=>n.value?o.value-n.value:-1),i=u(()=>s.value?Q(r,s.value.end):-1),c=u(()=>{if(n.value){const l=n.value/o.value*100;return l>=66?"text-red-500":l>=33?"text-yellow-500":"text-green-500"}return"text-red-500"});return{currentDayIndex:n,totalDays:o,daysLeft:d,daysOver:i,textColor:c}};b.components=Object.assign({ElapsedTimeSvg:Et,IsoDateTimeDisplay:T},b.components);var Bt=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("BaseSimpleCard",{staticClass:"flex flex-col items-center justify-center space-y-4 bg-gradient-to-tl from-blue-100 via-white to-white p-4 sm:p-6"},[e("div",{staticClass:"relative flex flex-col items-center justify-center"},[e("div",{staticClass:"relative z-10 w-52 lg:w-56"},[e("ElapsedTimeSvg",{attrs:{"current-day":t.currentDayIndex||-1,"total-days":t.totalDays}})],1),e("div",{staticClass:"absolute top-0 z-10 flex flex-col items-center"},[e("BaseTypography",{staticClass:"text-gray-500",attrs:{variant:"p1"}},[t._v(" "+t._s(t.daysLeft>0?"Ends in":"Subscription Ended")+" ")]),e("BaseTypography",{class:t.textColor,attrs:{variant:"h2"}},[t._v(" "+t._s(t.daysLeft>0?t.daysLeft:t.daysOver)+" ")]),e("BaseTypography",{staticClass:"text-gray-500",attrs:{variant:"p1"}},[t._v(" "+t._s(t.daysLeft>0?"Days":"Days Ago")+" ")])],1)]),t.status.validity&&t.status.validity.end?e("div",{staticClass:"flex flex-col text-center"},[e("BaseTypography",{staticClass:"text-blue-500",attrs:{variant:"overline"}},[t._v(" Subscription Renewal: ")]),e("BaseTypography",{staticClass:"text-blue-500",attrs:{variant:"overline"}},[e("IsoDateTimeDisplay",{attrs:{value:t.status.validity.end,format:"date"}})],1)],1):t._e(),t.daysLeft<=30?e("div",[e("BaseButton",{attrs:{type:"button"}},[t._v("Request Subscription")])],1):t._e()])},Ft=[];const O={};var Nt=f(b,Bt,Ft,!1,jt,null,null,null);function jt(t){for(let a in O)this[a]=O[a]}const At=function(){return Nt.exports}(),D={};D.props={status:{key:"status",required:!0,type:null}};D.setup=(t,a)=>({});D.components=Object.assign({SubscriptionValidityCta:At,SubscriptionCalendarDisplay:Tt},D.components);var Ot=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("section",{staticClass:"grid gap-6 xl:grid-cols-3"},[e("SubscriptionValidityCta",{attrs:{status:t.status}}),t.status.validity?e("SubscriptionCalendarDisplay",{staticClass:"xl:col-span-2",attrs:{value:t.status.validity}}):t._e()],1)},qt=[];const q={};var Vt=f(D,Ot,qt,!1,Lt,null,null,null);function Lt(t){for(let a in q)this[a]=q[a]}const ce=function(){return Vt.exports}(),R={};R.props={value:{key:"value",required:!1,type:null}};R.setup=(t,a)=>{const e=t;return{displayValue:u(()=>{var s;return e.value?(s=U(e.value))==null?void 0:s.textColor:"hidden"})}};var Ht=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("svg",{staticClass:"h-3 w-3 rounded-full fill-current",class:t.displayValue,attrs:{viewBox:"-3 -3 6 6"}},[e("circle",{attrs:{r:"3"}})])},zt=[];const V={};var Yt=f(R,Ht,zt,!1,Wt,null,null,null);function Wt(t){for(let a in V)this[a]=V[a]}const Ut=function(){return Yt.exports}(),$={};$.props={value:{key:"value",required:!0,type:Array},mappedActions:{key:"mappedActions",required:!0,type:Map}};$.setup=(t,a)=>{const e=t,r=u(()=>e.value),s=u(()=>e.mappedActions),n=tt(),o=[n.accessor(i=>i.configOnlyType,{id:"partner",header:"Partner",cell:i=>C(Ut,{props:{value:i.getValue()}}),enableColumnFilter:!1}),n.accessor(i=>{var c;return(c=i.product)==null?void 0:c.name},{id:"name",header:()=>"Name",enableColumnFilter:!1}),n.accessor(i=>{var c,l;return(l=(c=i.product)==null?void 0:c.validity)==null?void 0:l.start},{id:"startDate",header:()=>"Start Date",cell:i=>C(T,{props:{value:i.getValue(),format:"date"}}),enableColumnFilter:!1}),n.accessor(i=>{var c,l;return(l=(c=i.product)==null?void 0:c.validity)==null?void 0:l.end},{id:"endDate",header:()=>"End Date",cell:i=>C(T,{props:{value:i.getValue(),format:"date"}}),enableColumnFilter:!1}),n.display({id:"actions",header:"Actions",cell:({row:i})=>{var c,l,p,y;return C(Z,{props:{actions:(l=(c=i.original.product)==null?void 0:c.id)!=null&&l.value?s.value.get((y=(p=i.original.product)==null?void 0:p.id)==null?void 0:y.value):[]}})}})];return{instance:et(r,o)}};$.components=Object.assign({AppTanStackTable:X},$.components);var Gt=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("AppTanStackTable",{attrs:{table:t.instance}})},Jt=[];const L={};var Kt=f($,Gt,Jt,!1,Qt,null,null,null);function Qt(t){for(let a in L)this[a]=L[a]}const ue=function(){return Kt.exports}();export{le as P,ce as S,ue as a};