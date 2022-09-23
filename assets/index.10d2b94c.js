import{C as y}from"./chevron-left.0808b01b.js";import{am as _,r,aI as C,aA as b,ac as w,aJ as k,ad as L,ak as B,af as q,aK as E,n as R,al as p}from"./index.7b120442.js";import{c as S}from"./FormValidation.907ef868.js";const n=B({layout:"basic"});n.setup=(e,s)=>{var u;const t=`${q}/main-page-pics/line-waves-md.svg`,a=_(),l=r(((u=a.value.query.email)==null?void 0:u.toString())||""),o=r(!1),c=r(),m=r(),g=C();b(l,i=>{const h=a.value.path,x=i?{email:i}:void 0;g.push({path:h,query:x})});async function v(){o.value=!0;try{c.value=await E.forgotPassword(l.value.toLocaleLowerCase("us"))}catch(i){m.value=i}finally{o.value=!1}}return{checkEmail:S,backgroundUrl:t,email:l,response:c,error:m,submit:v}};n.components=Object.assign({WhitehawkLogo:w,GenericError:k,ChevronLeftSvg:y,ChevronRightSvg:L},n.components);var j=function(){var e=this,s=e.$createElement,t=e._self._c||s;return t("main",{staticClass:"flex min-h-screen flex-col justify-center bg-prime-navy bg-[length:517px] bg-bottom bg-repeat-x py-12 sm:px-6 lg:px-8",style:{backgroundImage:`url(${e.backgroundUrl})`}},[t("div",{staticClass:"container mx-auto flex flex-col space-y-4"},[t("BaseLink",{attrs:{"aria-label":"Link to main page",to:{path:"/"}}},[t("WhitehawkLogo",{staticClass:"mx-auto h-auto w-48 fill-current",attrs:{color:"white"}})],1),t("h1",{staticClass:"text-center font-display text-3xl font-medium leading-9 tracking-tight text-white antialiased sm:text-5xl sm:leading-10"},[e._v(" Client Portal ")]),t("BaseP1",{staticClass:"text-center text-white"},[e._v("Reset your password")])],1),t("div",{staticClass:"mt-8 sm:mx-auto sm:w-full sm:max-w-md"},[t("div",{staticClass:"space-y-8 rounded-lg bg-white px-10 py-8 shadow"},[e.error?t("GenericError",{attrs:{error:e.error}}):e._e(),t("form",{staticClass:"space-y-8",on:{submit:function(a){return a.preventDefault(),e.submit.apply(null,arguments)}}},[t("BaseLabel",{staticClass:"flex flex-col space-y-1"},[t("span",{staticClass:"block text-sm font-medium leading-5"},[e._v(" Email "),t("span",{staticClass:"text-red-500"},[e._v("*")])]),t("BaseInputWithValidation",{attrs:{type:"email",name:"email",required:"","aria-required":"true",validator:e.checkEmail},model:{value:e.email,callback:function(a){e.email=a},expression:"email"}})],1),t("BaseButton",{staticClass:"w-full",attrs:{shape:"rectangle",size:"large","display-type":"info",disabled:!e.email}},[e._v(" Request reset code ")])],1),e.response?[t("span",{staticClass:"my-2 text-sm text-gray-500"},[e._v(" An email has been sent to: "+e._s(e.response.CodeDeliveryDetails.Destination)+" ")])]:e._e(),t("div",{staticClass:"flex justify-between"},[t("BaseLink",{staticClass:"group inline-flex items-center",attrs:{"display-type":"primary-prime",to:{path:"/login",query:{email:e.email}}}},[t("ChevronLeftSvg",{staticClass:"h-5 w-5 text-prime-indigo"}),t("span",[e._v("Login")])],1),t("BaseLink",{staticClass:"group inline-flex items-center",attrs:{"display-type":"primary-prime",to:{path:"/password-reset/code",query:{email:e.email}}}},[t("span",[e._v("Enter Code")]),t("ChevronRightSvg",{staticClass:"h-5 w-5 text-prime-indigo"})],1)],1)],2)])])},D=[];const d={};var f=R(n,j,D,!1,A,null,null,null);function A(e){for(let s in d)this[s]=d[s]}typeof p=="function"&&p(f);const W=function(){return f.exports}();export{W as default};
