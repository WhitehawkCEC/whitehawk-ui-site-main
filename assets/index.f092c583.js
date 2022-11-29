import{U as C}from"./UserAttributesInput.4b8b78d1.js";import{aT as y,aD as f,ag as B,aP as i,aQ as o,bt as $,c5 as S,b4 as U,az as Q,c as I,aK as q,ae as j,n as R,aj as _}from"./index.eee0bb19.js";import"./InternationalPhoneNumberInput.aa5860b9.js";import"./AddressClaimInput.c240166e.js";import"./DynamicForm.656a3bf3.js";const A={create(){const t=y();return f(e=>i.post(`${o}/marketplace/aws/saas`,e).then(a=>a.data),{onSuccess(e){t.invalidateQueries(["marketplace","aws","saas",e.customerId],{exact:!0})}})},read(t){return B(["marketplace","aws","saas",t.value],()=>i.get(`${o}/marketplace/aws/saas/${t.value}`).then(e=>e.data))},update(){const t=y();return f(e=>i.put(`${o}/marketplace/aws/saas`,e).then(a=>a.data),{onSuccess(e){t.invalidateQueries(["marketplace","aws","saas",e.customerId],{exact:!0})}})}},l={};l.setup=(t,e)=>{const a=`${j}/main-page-pics/line-waves-md.svg`,r=S("customerId"),n=A.read(r),s=n.data,m=U("quantity");Q(()=>r.value,async u=>{if(u){const{data:c}=await i.get(`${o}/marketplace/aws/saas/${u}`);s.value=c,m.value&&(s.value={...s.value,attributes:{...s.value.attributes,quantity:String(m.value)}})}},{immediate:!0});const w=I(()=>{var u,c,p,d,v,b;return!(((u=s.value.attributes)==null?void 0:u.name)!==void 0&&((c=s.value.attributes)==null?void 0:c.email)!==void 0&&((p=s.value.attributes)==null?void 0:p.company_name)!==void 0&&((d=s.value.attributes)==null?void 0:d.website_url)!==void 0&&((v=s.value.attributes)==null?void 0:v["custom:title"])!==void 0&&((b=s.value.attributes)==null?void 0:b.comments)!==void 0)}),x=q();async function k(){await i.put(`${o}/marketplace/aws/saas`,s.value),x.push("../success")}return{backgroundUrl:a,customerQuery:n,activate:w,submit:k}};l.components=Object.assign({BackButton:$,UserAttributesInput:C},l.components);var F=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("section",{staticClass:"flex min-h-screen flex-col justify-center bg-prime-navy bg-[length:517px] bg-bottom bg-repeat-x px-2 py-16 sm:px-6 lg:px-8",style:{backgroundImage:`url(${t.backgroundUrl})`}},[a("div",[a("BackButton",{attrs:{link:"/admin/users"}})],1),a("BaseTypography",{staticClass:"px-4 pb-10 text-center text-white lg:pb-16",attrs:{component:"h1",variant:"h3"}},[t._v(" WhiteHawk SaaS Fulfillment ")]),a("BaseSimpleCard",{staticClass:"mx-auto max-w-lg lg:max-w-none"},[a("form",{staticClass:"divide-y",on:{submit:function(r){return r.preventDefault(),t.submit.apply(null,arguments)}}},[a("BaseTypography",{staticClass:"p-4",attrs:{variant:"h6",component:"h2"}},[t._v(" Update User ")]),a("div",{staticClass:"p-4"},[a("span",{staticClass:"text-sm leading-5 text-gray-700"},[t._v(" You already have account with us. Please verify the contact information we have in our file. Whitehawk will reach out to you within 1 business day to coordinate collection of any needed information. ")])]),a("BaseVueQuery",{attrs:{query:t.customerQuery},scopedSlots:t._u([{key:"success",fn:function(r){var n=r.data;return[a("UserAttributesInput",{model:{value:n.attributes,callback:function(s){t.$set(n,"attributes",s)},expression:"data.attributes"}})]}}])}),a("div",{staticClass:"p-4"},[a("div",{staticClass:"md:inline-flex"},[a("BaseButton",{staticClass:"w-full md:w-auto",attrs:{disabled:t.activate,type:"submit","aria-label":"Submit Form"}},[t._v(" Submit ")])],1)])],1)])],1)},M=[];const g={};var h=R(l,F,M,!1,P,null,null,null);function P(t){for(let e in g)this[e]=g[e]}typeof _=="function"&&_(h);const H=function(){return h.exports}();export{H as default};
