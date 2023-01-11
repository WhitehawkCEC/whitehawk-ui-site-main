import{aJ as p,aK as _,n as c,cF as v,d as y}from"./index.061c5268.js";const r={};r.setup=(t,n)=>({router:_()});r.components=Object.assign({ChevronLeftSvg:p},r.components);var f=function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",[e("BaseButton",{attrs:{shape:"rectangle","display-type":"light",size:"even"},on:{click:function(l){return t.router.go(-1)}}},[e("ChevronLeftSvg",{staticClass:"-ml-1 h-auto w-5"}),e("span",[t._v("Back")])],1)],1)},d=[];const a={};var m=c(r,f,d,!1,g,null,null,null);function g(t){for(let n in a)this[n]=a[n]}const o=function(){return m.exports}(),s={};s.props={link:{key:"link",required:!1,type:String},entityId:{key:"entityId",required:!0,type:String},value:{key:"value",required:!0,type:Array}};s.setup=(t,n)=>{const e=t;return{entity:y(()=>e.value.find(u=>u.CompanyId.toString()===e.entityId))}};s.components=Object.assign({BackButton:o,HistoryBackButton:o,BarChartSvg:v},s.components);var h=function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",{staticClass:"flex flex-col space-y-6 lg:flex-row lg:items-center lg:space-x-4 lg:space-y-0"},[t.link?e("BackButton",{attrs:{link:t.link}}):e("HistoryBackButton"),t.entity?e("div",{staticClass:"flex items-center space-x-2"},[e("div",{staticClass:"shrink-0 rounded-full bg-prime-teal p-2"},[e("BarChartSvg",{staticClass:"h-auto w-6 text-white"})],1),e("div",{staticClass:"flex flex-col -space-y-1"},[e("BaseTypography",{staticClass:"uppercase text-gray-500",attrs:{variant:"overline"}},[t._v(" Subscription Supplier ")]),e("BaseTypography",{attrs:{variant:"h5",component:"h2"}},[t._v(" "+t._s(t.entity.CompanyName)+" ")])],1)]):t._e()],1)},x=[];const i={};var k=c(s,h,x,!1,B,null,null,null);function B(t){for(let n in i)this[n]=i[n]}const S=function(){return k.exports}();export{S as E};
