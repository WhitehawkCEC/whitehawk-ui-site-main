import{ce as r,d as a,n as i}from"./index.a3119a0b.js";function c(e){switch(e){case r.SubscriptionState.ACTIVE:return"Active";case r.SubscriptionState.INACTIVE:return"Inactive";case r.SubscriptionState.ARCHIVED:return"Archived";default:return"N/A"}}const s={};s.props={state:{key:"state",required:!0,type:null}};s.setup=(e,l)=>{const t=e,o=a(()=>{switch(t.state){case 1:return{innerBall:"fill-green-600",outerBall:"fill-green-500",background:"bg-green-100",text:"text-green-900",outline:"border-green-200",stroke:"stroke-green-300"};case 2:return{innerBall:"fill-yellow-600",outerBall:"fill-yellow-500",background:"bg-yellow-100",text:"text-yellow-900",outline:"border-yellow-200",stroke:"stroke-yellow-300"};case 3:return{innerBall:"fill-red-600",outerBall:"fill-red-500",background:"bg-red-100",text:"text-red-900",outline:"border-red-200",stroke:"stroke-red-300"};default:return{innerBall:"fill-gray-600",outerBall:"fill-gray-500",background:"bg-gray-100",text:"text-gray-900",outline:"border-gray-200",stroke:"stroke-gray-300"}}});return{toStringState:c,colors:o}};var u=function(){var e=this,l=e.$createElement,t=e._self._c||l;return t("div",{staticClass:"group inline-flex max-w-min shrink-0 items-center space-x-2 rounded-full border px-3 py-1 shadow",class:[e.colors.background,e.colors.outline]},[t("BaseTypography",{staticClass:"uppercase",class:e.colors.text,attrs:{variant:"overline"}},[e._v(" "+e._s(e.toStringState(e.state))+" ")]),t("svg",{staticClass:"relative h-3 w-3 rounded-full",attrs:{viewBox:"-9 -9 18 18"}},[t("circle",{staticClass:"fill-transparent",class:e.colors.stroke,attrs:{r:"8"}}),t("circle",{staticClass:"absolute inline-flex h-full w-full opacity-75 group-hover:animate-ping",class:e.colors.outerBall,attrs:{r:"6"}}),t("circle",{class:e.colors.innerBall,attrs:{r:"6"}})])],1)},p=[];const n={};var d=i(s,u,p,!1,g,null,null,null);function g(e){for(let l in n)this[l]=n[l]}const b=function(){return d.exports}();function y(e){switch(e){case r.SubscriptionType.INDIVIDUAL:return"Individual";case r.SubscriptionType.PORTFOLIO:return"Portfolio";case r.SubscriptionType.RESELLER:return"Reseller";default:return"N/A"}}export{b as S,y as t};