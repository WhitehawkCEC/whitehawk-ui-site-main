import{ae as p,ac as u,ad as h,a$ as g,ak as v,af as o,aq as d,bf as m,bg as y,n as f,al as n}from"./index.7b120442.js";var x=function(){var e=this,s=e.$createElement,t=e._self._c||s;return t("svg",e._g({attrs:{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",fill:"currentColor","aria-hidden":"true"}},e.$listeners),[t("path",{attrs:{d:"M3.75 3a.75.75 0 0 0-.75.75v.5c0 .414.336.75.75.75H4c6.075 0 11 4.925 11 11v.25c0 .414.336.75.75.75h.5a.75.75 0 0 0 .75-.75V16C17 8.82 11.18 3 4 3h-.25z"}}),t("path",{attrs:{d:"M3 8.75A.75.75 0 0 1 3.75 8H4a8 8 0 0 1 8 8v.25a.75.75 0 0 1-.75.75h-.5a.75.75 0 0 1-.75-.75V16a6 6 0 0 0-6-6h-.25A.75.75 0 0 1 3 9.25v-.5zM7 15a2 2 0 1 1-4 0 2 2 0 0 1 4 0z"}})])};const b={render:x},i=v({layout:"siteMain"});i.setup=(e,s)=>{const t=`${o}/main-page-pics/line-waves-crop.svg`,a=`${o}/main-page-pics/nature.jpg`;return{backgroundUrl:t,coverImage:a,links:[{title:"Marketplace",description:"Find products and services that fit your cybersecurity needs",icon:d,route:"/marketplace/products"},{title:"News & Insights",description:"Read our latest cybersecurity insights",icon:b,route:"/blog"},{title:"Enterprise Solutions",description:"Defend your company and supply chain against evolving threats",icon:m,route:"/enterprise"},{title:"Small & Midsize Business Solutions",description:"Don't have a CIO or CISO? We will help you protect your business",icon:y,route:"/small-midsize"}]}};i.components=Object.assign({LazyImg:p,WhitehawkLogo:u,ChevronRightSvg:h,ArrowRightSvg:g},i.components);var w=function(){var e=this,s=e.$createElement,t=e._self._c||s;return t("main",{staticClass:"relative flex min-h-fit w-full flex-col items-center justify-center"},[t("div",{staticClass:"absolute inset-0"},[e.coverImage?t("LazyImg",{staticClass:"h-full w-full object-cover",attrs:{src:e.coverImage,alt:"Nature",options:{w:2e3,il:!0},"options-placeholder":{w:100}}}):e._e(),t("div",{staticClass:"absolute inset-0 z-0 h-full w-full bg-prime-navy bg-[length:517px] bg-bottom bg-repeat-x opacity-70",style:{backgroundImage:`url(${e.backgroundUrl})`}})],1),t("div",{staticClass:"relative max-w-2xl space-y-12 px-4 py-20 sm:py-32 sm:px-6 lg:py-40 lg:px-8"},[t("div",{staticClass:"flex flex-col space-y-4 text-center text-white"},[t("BaseLink",{attrs:{"aria-label":"Link to main page",to:{path:"/"}}},[t("WhitehawkLogo",{staticClass:"mx-auto h-auto w-32 sm:w-48",attrs:{color:"white"}})],1),t("BaseTypography",{attrs:{component:"h1",variant:"h1"}},[e._v("Thank you!")]),t("BaseTypography",{attrs:{variant:"subtitle1"}},[e._v(" Someone will reach out regarding your inquiry in the next 1-2 business days. ")])],1),t("div",{staticClass:"flex flex-col items-center justify-center space-y-6"},[t("BaseTypography",{staticClass:"uppercase text-white",attrs:{component:"h2",variant:"subtitle3"}},[e._v(" Popular pages ")]),t("ul",{staticClass:"min-w-full divide-y divide-white border-t border-b border-white",attrs:{role:"list"}},e._l(e.links,function(a,r){return t("li",{key:r},[t("BaseLink",{staticClass:"group flex w-full items-center justify-between py-6",attrs:{to:a.route}},[t("div",{staticClass:"flex space-x-4"},[t("span",{staticClass:"flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-blue-500 group-hover:bg-blue-400"},[t(a.icon,{tag:"Component",staticClass:"h-6 w-6 text-white",attrs:{"aria-hidden":"true"}})],1),t("div",{staticClass:"flex flex-col"},[t("BaseTypography",{staticClass:"group-hover:text-blue-400",attrs:{component:"h3",variant:"subtitle3"}},[e._v(" "+e._s(a.title)+" ")]),t("BaseTypography",{staticClass:"text-white group-hover:text-blue-200",attrs:{component:"p",variant:"p1"}},[e._v(" "+e._s(a.description)+" ")])],1)]),t("ChevronRightSvg",{staticClass:"h-5 w-5 shrink-0 text-white group-hover:text-blue-400",attrs:{"aria-hidden":"true"}})],1)],1)}),0),t("BaseButton",{staticClass:"space-x-1",attrs:{to:"/","display-type":"light",shape:"rectangle"}},[t("BaseTypography",{staticClass:"uppercase",attrs:{variant:"overline"}},[e._v(" Or go back home ")]),t("ArrowRightSvg",{staticClass:"h-4 w-4"})],1)],1)])])},_=[];const l={};var c=f(i,w,_,!1,C,null,null,null);function C(e){for(let s in l)this[s]=l[s]}typeof n=="function"&&n(c);const S=function(){return c.exports}();export{S as default};
