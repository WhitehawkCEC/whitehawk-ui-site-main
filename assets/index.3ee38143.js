import{B as u}from"./BasicModal.80a70cae.js";import{b as i,ag as o,n as f}from"./index.87a2880c.js";const n={};n.setup=(e,a)=>{const t=i(!1),s=i(),r=[{name:"BitSight Technologies",text:"Terms and Conditions",href:`${o}/Partners-tc-doc/BitSight_terms_and_conditions.pdf`},{name:"CyberOne",text:"Terms and Conditions",href:`${o}/Partners-tc-doc/CyberOne_terms_and_conditions.pdf`},{name:"Interos",text:"Terms and Conditions",href:`${o}/Partners-tc-doc/Interos_terms_and_conditions.pdf`}];function c(h){s.value=h,t.value=!0}function d(){t.value=!1}return{isModalVisible:t,selected:s,terms:r,showModal:c,closeModal:d}};n.components=Object.assign({BasicModal:u},n.components);var m=function(){var e=this,a=e.$createElement,t=e._self._c||a;return t("main",{staticClass:"space-y-2"},[t("h1",{staticClass:"mt-6 text-center font-display text-lg font-extrabold uppercase"},[e._v(" Please read partner terms and conditions of use carefully before using this site ")]),t("p",{staticClass:"mt-6 text-base text-gray-800"},[e._v(" Customer acknowledges with the purchase of WhiteHawk\u2019s 360\xB0 Cyber Risk Framework that Whitehawk utilizes certain third-party software products to provide its services. Customer agrees that by accepting the services provided by Whitehawk, Customer shall comply with, and be bound by, all of the terms and conditions applicable to Whitehawk\u2019s use of such third-party software products, all of which are available for review below: ")]),t("div",{staticClass:"mt-8 mb-6 border-2 border-black p-2 text-center text-lg text-blue-500 shadow-lg"},[t("BasicModal",{directives:[{name:"show",rawName:"v-show",value:e.isModalVisible,expression:"isModalVisible"}],on:{close:e.closeModal},scopedSlots:e._u([{key:"body",fn:function(){return[e.selected?t("div",{staticClass:"flex h-full w-full flex-col space-y-2"},[t("h2",{staticClass:"mb-2 text-xl"},[e._v(e._s(e.selected.name))]),t("object",{staticClass:"flex-1",attrs:{type:"application/pdf",data:`${e.selected.href}`}})]):e._e()]},proxy:!0}])}),t("ul",e._l(e.terms,function(s){return t("li",{key:s.name},[t("span",[t("Button",{staticClass:"hover:text-prime-teal",on:{click:function(r){return e.showModal(s)}}},[e._v(" "+e._s(s.name)+" ")])],1)])}),0)],1),t("p",{staticClass:"text-base"},[e._v(" In the event that Customer breaches any such terms and conditions, Customer agrees that it shall indemnify and hold Whitehawk harmless from and against any claims, losses or expenses (including reasonable attorneys\u2019 fees) arising out of such breach. ")])])},p=[];const l={};var _=f(n,m,p,!1,b,null,null,null);function b(e){for(let a in l)this[a]=l[a]}const y=function(){return _.exports}();export{y as default};