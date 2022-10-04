import{M as V,L as N}from"./map-pin.f9355bd7.js";import{S as W}from"./SiteMainBanner.a9720711.js";import{b0 as D,az as T,d as m,n as S,ae as z,al as L,r as y,bj as K,aS as Q,ai as G,aj as J,bk as X,aH as Y,an as Z,aJ as ee,aR as te,ak as ae,ag as se,am as B}from"./index.038aef42.js";import{c as ne}from"./FormValidation.907ef868.js";import{u as re,a as ie}from"./useClientIp.c5558143.js";import{a as oe}from"./axios-data.4f011e1c.js";import{N as ce}from"./namespace.d5e90c67.js";const h={};h.props={value:{key:"value",required:!0,type:null}};h.setup=(t,a)=>{const e=t,s=a.emit,o=T(e,s),u=["Career","Investing","Other","Partnership","Product Request","Report an Issue","Request Account","Services and Solutions"],l=m(()=>[...u.map(n=>({text:n,value:n}))]);return{checkEmail:ne,proxy:o,subjectOptions:l}};h.components=Object.assign({SimpleSelect:D},h.components);var le=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"p-6"},[e("div",{staticClass:"space-y-4"},[e("BaseLabel",{staticClass:"flex flex-col space-y-1"},[e("span",{staticClass:"block text-sm font-medium leading-5"},[t._v(" Subject "),e("span",{staticClass:"text-red-500"},[t._v("*")])]),e("SimpleSelect",{staticClass:"w-full",attrs:{required:"true","aria-required":"true",options:t.subjectOptions},model:{value:t.proxy.subject,callback:function(s){t.$set(t.proxy,"subject",s)},expression:"proxy.subject"}})],1),e("BaseLabel",{staticClass:"flex flex-col space-y-1"},[e("span",{staticClass:"block text-sm font-medium leading-5"},[t._v(" Full Name "),e("span",{staticClass:"text-red-500"},[t._v("*")])]),e("BaseInput",{attrs:{type:"text",required:"","aria-required":"true"},model:{value:t.proxy.name,callback:function(s){t.$set(t.proxy,"name",s)},expression:"proxy.name"}})],1),e("BaseLabel",{staticClass:"flex flex-col space-y-1"},[e("span",{staticClass:"block text-sm font-medium leading-5"},[t._v(" Email "),e("span",{staticClass:"text-red-500"},[t._v("*")])]),e("BaseInputWithValidation",{attrs:{type:"email",required:"","aria-required":"true",validator:t.checkEmail},model:{value:t.proxy.email,callback:function(s){t.$set(t.proxy,"email",s)},expression:"proxy.email"}})],1),e("BaseLabel",{staticClass:"flex flex-col space-y-1"},[e("span",{staticClass:"block text-sm font-medium leading-5"},[t._v("Company")]),e("BaseInput",{attrs:{type:"text"},model:{value:t.proxy.company,callback:function(s){t.$set(t.proxy,"company",s)},expression:"proxy.company"}})],1),e("BaseLabel",{staticClass:"flex flex-col space-y-1"},[e("span",{staticClass:"block text-sm font-medium leading-5"},[t._v(" Message "),e("span",{staticClass:"text-red-500"},[t._v("*")])]),e("BaseTextarea",{attrs:{required:"",rows:"3","aria-multiline":"true","aria-required":"true"},model:{value:t.proxy.message,callback:function(s){t.$set(t.proxy,"message",s)},expression:"proxy.message"}})],1)],1)])},ue=[];const R={};var pe=S(h,le,ue,!1,de,null,null,null);function de(t){for(let a in R)this[a]=R[a]}const me=function(){return pe.exports}(),_={};_.setup=(t,a)=>({helpOptions:[{title:"Schedule a Consultation",link:"/scheduler",alt:"Schedule Consultation",description:"Book a time to consult with one of our cybersecurity experts."},{title:"Learn About Our Services and Solutions",link:"/marketplace/products",alt:"Marketplace Products",description:"Get connected to products that match your cybersecurity needs."},{title:"Find Career Opportunities at WhiteHawk",link:"/careers",alt:"Careers",description:"Join the WhiteHawk team."}]});_.components=Object.assign({ChevronRightSvg:z},_.components);var fe=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("ul",{staticClass:"divide-y p-4 sm:px-8 md:py-20 md:pl-4"},[e("div",{staticClass:"space-y-2 py-4"},[e("BaseH3",{staticClass:"text-prime-navy"},[t._v("How Can We Help?")]),e("BaseP1",{staticClass:"text-gray-700"},[t._v(" Please select a topic below related to your inquiry. If you don't find what you need, fill out our contact form. ")])],1),t._l(t.helpOptions,function(s){return e("li",{key:s.alt,staticClass:"flex flex-col space-y-2 py-4"},[e("BaseSubtitle3",{staticClass:"text-prime-navy"},[t._v(" "+t._s(s.title)+" ")]),e("BaseLink",{staticClass:"flex flex-row items-center justify-between",attrs:{to:s.link,"display-type":"gray","aria-label":s.alt}},[t._v(" "+t._s(s.description)+" "),e("ChevronRightSvg",{staticClass:"h-6 w-6 shrink-0"})],1)],1)})],2)},ve=[];const $={};var ye=S(_,fe,ve,!1,he,null,null,null);function he(t){for(let a in $)this[a]=$[a]}const xe=function(){return ye.exports}();function w(){return w=Object.assign?Object.assign.bind():function(t){for(var a=1;a<arguments.length;a++){var e=arguments[a];for(var s in e)Object.prototype.hasOwnProperty.call(e,s)&&(t[s]=e[s])}return t},w.apply(this,arguments)}var ge=function(){var a=!1,e=[],s=function(){if(!a){a=!0;for(var n=0,p=e.length;n<p;n++)e[n]()}},o=function(n){if(!a){e.push(n);return}n()},u={resolved:function(){return a},resolve:s,promise:{then:o}};return u},A=Object.prototype.hasOwnProperty;function _e(){var t=ge();return{notify:function(){t.resolve()},wait:function(){return t.promise},render:function(e,s,o){this.wait().then(function(){o(window.grecaptcha.render(e,s))})},reset:function(e){typeof e>"u"||(this.assertLoaded(),this.wait().then(function(){return window.grecaptcha.reset(e)}))},execute:function(e){typeof e>"u"||(this.assertLoaded(),this.wait().then(function(){return window.grecaptcha.execute(e)}))},checkRecaptchaLoad:function(){A.call(window,"grecaptcha")&&A.call(window.grecaptcha,"render")&&this.notify()},assertLoaded:function(){if(!t.resolved())throw new Error("ReCAPTCHA has not been loaded")}}}var v=_e();typeof window<"u"&&(window.vueRecaptchaApiLoaded=v.notify);var Ce=L({name:"VueRecaptcha",props:{sitekey:{type:String,required:!0},theme:{type:String},badge:{type:String},type:{type:String},size:{type:String},tabindex:{type:String},loadRecaptchaScript:{type:Boolean,default:!0},recaptchaScriptId:{type:String,default:"__RECAPTCHA_SCRIPT"},recaptchaHost:{type:String,default:"www.google.com"},language:{type:String,default:""}},emits:["render","verify","expired","error"],setup:function(a,e){var s=e.slots,o=e.emit,u=y(null),l=y(null),n=function(d){o("verify",d)},p=function(){o("expired")},i=function(){o("error")};return K(function(){if(v.checkRecaptchaLoad(),a.loadRecaptchaScript&&!document.getElementById(a.recaptchaScriptId)){var c=document.createElement("script");c.id=a.recaptchaScriptId,c.src="https://"+a.recaptchaHost+"/recaptcha/api.js?onload=vueRecaptchaApiLoaded&render=explicit&hl="+a.language,c.async=!0,c.defer=!0,document.head.appendChild(c)}var d=w({},a,{callback:n,"expired-callback":p,"error-callback":i}),x=u.value,b=s.default?x.children[0]:x;v.render(b,d,function(g){l.value=g,o("render",g)})}),{root:u,widgetId:l,reset:function(){v.reset(l.value)},execute:function(){v.execute(l.value)}}},render:function(){var a=this.$slots.default,e;return typeof a=="function"?e=a():e=a,Q("div",{ref:"root"},e)}});const be={list(){return G([ce,"page-contact-us-seo"],oe(`${J}/contact-us`))}},we="6LcPweIUAAAAAA-wS631tQNxbN0nvmvWCX0YNeeO",C=L({layout:"siteMain",head:{}});C.setup=(t,a)=>{const e=`${se}/main-page-pics/line-waves-sm-dark.svg`,s=X(),o=Y(),u=m(()=>s.user),l=m(()=>o.company),n=Z(),p=y(),i=m({get(){var r,f,j;return p.value?p.value:{subject:n.value.query.subject||"",name:n.value.query.name||((r=u.value)==null?void 0:r.name),email:n.value.query.email||((f=u.value)==null?void 0:f.email),company:n.value.query.company||((j=l.value)==null?void 0:j.name),message:n.value.query.textBody||""}},set(r){p.value=r}}),c=m(()=>i.value.email&&i.value.name&&i.value.subject&&i.value.message),d=y(),x=re.get(),b=m(()=>x.data.value),g=ee(),q=te(),I=ie.create();async function M(){var f;const r={name:i.value.name,senderEmail:i.value.email,senderCompany:i.value.company||"",senderIp:b.value||"",subject:i.value.subject||"",textBody:i.value.message||"",recipientEmail:await F(i.value.subject),proxySender:"whdevops@whitehawk.com"};await I.mutateAsync(r),n.value.query.productRequest&&q.removeAll(),(f=d.value)==null||f.reset(),g.push("/contact-us/thank-you")}const k=y(!1);function H(r){r&&(k.value=!0)}function P(){var r;(r=d.value)==null||r.reset()}function F(r){switch(r){case"Career":return"recruiting@whitehawk.com";case"Investing":return"Investors@whitehawk.com";case"Partnership":return"vendormgmt@whitehawk.com";default:return"consultingservices@whitehawk.com"}}const U=be.list();return ae(m(()=>{var r;return(r=U.data.value)==null?void 0:r.seo})),{siteKey:we,backgroundUrl:e,contact:i,isValidForm:c,recaptcha:d,onSubmit:M,isHuman:k,onSuccess:H,onExpired:P}};C.components=Object.assign({SiteMainBanner:W,ContactUsForm:me,VueRecaptcha:Ce,Mail:V,LocationMarker:N,HelpOptionsDisplay:xe},C.components);var Se=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("main",{staticClass:"flex flex-col justify-center bg-gray-100 bg-[length:517px] bg-bottom bg-repeat-x",style:{backgroundImage:`url(${t.backgroundUrl})`}},[e("SiteMainBanner"),e("section",{staticClass:"container mx-auto mb-20"},[e("div",{staticClass:"flex flex-col md:grid md:grid-cols-2 lg:gap-4"},[e("form",{staticClass:"p-4 sm:px-8 sm:pt-8 md:pr-4",on:{submit:function(s){return s.preventDefault(),t.onSubmit.apply(null,arguments)}}},[e("BaseSimpleCard",{staticClass:"divide-y overflow-hidden"},[e("ContactUsForm",{model:{value:t.contact,callback:function(s){t.contact=s},expression:"contact"}}),e("div",{staticClass:"flex flex-col space-y-6 p-6"},[e("div",{staticClass:"flex justify-start sm:justify-center"},[e("VueRecaptcha",{ref:"recaptcha",attrs:{sitekey:t.siteKey},on:{expired:t.onExpired,verify:t.onSuccess}})],1),e("div",{staticClass:"md:inline-flex md:justify-center"},[e("BaseButton",{staticClass:"w-full space-x-2 md:w-auto",attrs:{disabled:!t.isHuman&&!t.isValidForm,"aria-label":"Submit Message","display-type":"info"}},[e("Mail",{staticClass:"h-auto w-4 xl:w-5"}),e("span",[t._v("Send Message")])],1)],1)]),e("div",{staticClass:"flex flex-col space-y-2 p-4"},[e("BaseH6",[t._v("Contact Information")]),e("div",{staticClass:"flex items-start space-x-4"},[e("LocationMarker",{staticClass:"h-4 w-4 shrink-0 text-prime-indigo"}),e("BaseSubtitle2",{staticClass:"text-gray-500"},[t._v(" 515 King Street, Suite 450, Alexandria, VA 22314 ")])],1),e("div",{staticClass:"flex items-center space-x-4"},[e("Mail",{staticClass:"h-4 w-4 shrink-0 text-prime-indigo"}),e("BaseSubtitle2",{staticClass:"text-gray-500"},[t._v(" info@whitehawk.com ")])],1)],1)],1)],1),e("HelpOptionsDisplay")],1)])],1)},ke=[];const E={};var O=S(C,Se,ke,!1,je,null,null,null);function je(t){for(let a in E)this[a]=E[a]}typeof B=="function"&&B(O);const qe=function(){return O.exports}();export{qe as default};