import{bu as f,d as r,cf as g,an as _,ab as u,cd as x,ce as V,n as C}from"./index.f84b221a.js";import{T as H}from"./ToolTip.d329760a.js";import{D as b}from"./DateRangeDisplay.6896c2f0.js";import{i as w}from"./index.c7f151c1.js";var z=function(){var a=this,t=a.$createElement,e=a._self._c||t;return e("svg",a._g({attrs:{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",fill:"currentColor","aria-hidden":"true"}},a.$listeners),[e("path",{attrs:{d:"M5.25 12a.75.75 0 0 1 .75-.75h.01a.75.75 0 0 1 .75.75v.01a.75.75 0 0 1-.75.75H6a.75.75 0 0 1-.75-.75V12zM6 13.25a.75.75 0 0 0-.75.75v.01c0 .414.336.75.75.75h.01a.75.75 0 0 0 .75-.75V14a.75.75 0 0 0-.75-.75H6zM7.25 12a.75.75 0 0 1 .75-.75h.01a.75.75 0 0 1 .75.75v.01a.75.75 0 0 1-.75.75H8a.75.75 0 0 1-.75-.75V12zM8 13.25a.75.75 0 0 0-.75.75v.01c0 .414.336.75.75.75h.01a.75.75 0 0 0 .75-.75V14a.75.75 0 0 0-.75-.75H8zM9.25 10a.75.75 0 0 1 .75-.75h.01a.75.75 0 0 1 .75.75v.01a.75.75 0 0 1-.75.75H10a.75.75 0 0 1-.75-.75V10zm.75 1.25a.75.75 0 0 0-.75.75v.01c0 .414.336.75.75.75h.01a.75.75 0 0 0 .75-.75V12a.75.75 0 0 0-.75-.75H10zM9.25 14a.75.75 0 0 1 .75-.75h.01a.75.75 0 0 1 .75.75v.01a.75.75 0 0 1-.75.75H10a.75.75 0 0 1-.75-.75V14zM12 9.25a.75.75 0 0 0-.75.75v.01c0 .414.336.75.75.75h.01a.75.75 0 0 0 .75-.75V10a.75.75 0 0 0-.75-.75H12zM11.25 12a.75.75 0 0 1 .75-.75h.01a.75.75 0 0 1 .75.75v.01a.75.75 0 0 1-.75.75H12a.75.75 0 0 1-.75-.75V12zm.75 1.25a.75.75 0 0 0-.75.75v.01c0 .414.336.75.75.75h.01a.75.75 0 0 0 .75-.75V14a.75.75 0 0 0-.75-.75H12zM13.25 10a.75.75 0 0 1 .75-.75h.01a.75.75 0 0 1 .75.75v.01a.75.75 0 0 1-.75.75H14a.75.75 0 0 1-.75-.75V10zm.75 1.25a.75.75 0 0 0-.75.75v.01c0 .414.336.75.75.75h.01a.75.75 0 0 0 .75-.75V12a.75.75 0 0 0-.75-.75H14z"}}),e("path",{attrs:{"fill-rule":"evenodd",d:"M5.75 2a.75.75 0 0 1 .75.75V4h7V2.75a.75.75 0 0 1 1.5 0V4h.25A2.75 2.75 0 0 1 18 6.75v8.5A2.75 2.75 0 0 1 15.25 18H4.75A2.75 2.75 0 0 1 2 15.25v-8.5A2.75 2.75 0 0 1 4.75 4H5V2.75A.75.75 0 0 1 5.75 2zm-1 5.5c-.69 0-1.25.56-1.25 1.25v6.5c0 .69.56 1.25 1.25 1.25h10.5c.69 0 1.25-.56 1.25-1.25v-6.5c0-.69-.56-1.25-1.25-1.25H4.75z","clip-rule":"evenodd"}})])};const S={render:z},i={};i.props={id:{key:"id",required:!0,type:String},subscriptionId:{key:"subscriptionId",required:!0,type:String},value:{key:"value",required:!0,type:null}};i.setup=(a,t)=>{const e=a,s=r(()=>e.value.product?e.value.product:g.SubscriptionProduct.create()),l=r(()=>{var o,c;return(c=(o=e.value.product)==null?void 0:o.id)==null?void 0:c.value}),v=_(),d=r(()=>!!(l.value&&v.value.path.endsWith(l.value))),h=new Date,n=r(()=>{if(s.value.validity&&s.value.validity.start&&s.value.validity.end)return{start:u(s.value.validity.start.value),end:u(s.value.validity.end.value)}}),y=r(()=>n.value?w(h,n.value):!1),m=r(()=>e.value.configOnlyType?x(e.value.configOnlyType):void 0);return{DateRange:V.DateRange,product:s,shouldSkip:d,isValid:y,displayValue:m}};i.components=Object.assign({BackButton:f,CalendarSvg:S,ToolTip:H,DateRangeDisplay:b},i.components);var M=function(){var a=this,t=a.$createElement,e=a._self._c||t;return e("div",{staticClass:"flex flex-col space-y-2 lg:flex-row lg:items-end lg:justify-between lg:space-y-0"},[e("div",{staticClass:"flex flex-col space-y-6 lg:flex-row lg:items-center lg:space-x-4 lg:space-y-0"},[e("BackButton",{attrs:{link:a.shouldSkip?`/admin/companies/${a.id}/subscriptions/${a.subscriptionId}`:void 0}}),e("div",{staticClass:"flex items-center space-x-2"},[a.displayValue?e("div",{staticClass:"shrink-0 rounded-full p-2",class:a.displayValue.bgColor},[e(a.displayValue.icon,{tag:"Component",staticClass:"h-auto w-6 text-white"})],1):a._e(),e("div",{staticClass:"flex flex-col"},[e("BaseTypography",{staticClass:"uppercase text-gray-500",attrs:{variant:"overline"}},[a._v(" Subscription Product ")]),e("BaseTypography",{attrs:{variant:"h5",component:"h2"}},[a._v(" "+a._s(a.product.name)+" ")])],1)])],1),e("span",{staticClass:"flex max-w-min shrink-0 items-center space-x-2"},[a.isValid?e("CalendarSvg",{staticClass:"w-5 text-indigo-600"}):e("ToolTip",{staticClass:"pt-2",attrs:{type:"warn"}},[a._v(" The subscription for this product has expired. Please contact a representative to resolve the issue. ")]),e("BaseTypography",{class:a.isValid?"text-gray-900":"text-red-600",attrs:{variant:"p2"}},[e("DateRangeDisplay",{attrs:{value:a.product.validity||a.DateRange.create()}})],1)],1)])},T=[];const p={};var k=C(i,M,T,!1,D,null,null,null);function D(a){for(let t in p)this[t]=p[t]}const A=function(){return k.exports}();export{A as S};
