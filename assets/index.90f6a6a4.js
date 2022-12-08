import{K as v}from"./key.80cb24b1.js";import{F as f}from"./FormEmbeddedButton.0f4c6b70.js";import{af as _,aS as y,aC as k,aO as c,aP as u,c7 as g,r as h,ay as b,aE as x,n as C}from"./index.f9aabd94.js";import"./arrow-down-on-square.bf61cdc5.js";const l={read(t){return _(["companies",t,"bitsight","token"],()=>c.get(`${u}/companies/${t.value}/bitsight/token`).then(a=>a.data))},update(t){const a=y();return k(e=>c.put(`${u}/companies/${t.value}/bitsight/token`,e).then(s=>s.data),{onSuccess(){a.invalidateQueries(["companies",t,"bitsight","token"],{exact:!0})}})}},r={};r.setup=(t,a)=>{const e=g("id"),s=l.read(e),n=h();b(()=>s.data.value,o=>{o&&(n.value=o.data)},{immediate:!0});const i=x(),d=l.update(e);async function m(){if(n.value){const o={data:n.value};await d.mutateAsync(o)?i.success("Successfully udpated API token."):i.error("Something went wrong.")}}return{token:n,updateToken:m}};r.components=Object.assign({KeySvg:v,FormEmbeddedButton:f},r.components);var S=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"space-y-8"},[t.token?e("div",{staticClass:"rounded-lg border-gray-300 bg-gray-200 px-2 py-4 shadow-inner sm:py-2"},[e("dl",{staticClass:"flex items-center space-x-2 overflow-x-auto whitespace-nowrap text-gray-500"},[e("KeySvg",{staticClass:"h-5 w-5 text-gray-500"}),e("dt",[t._v("Current Token:")]),e("dd",[t._v(t._s(t.token))])],1)]):t._e(),e("BaseSimpleCard",{staticClass:"divide-y"},[e("BaseTypography",{staticClass:"block p-4",attrs:{variant:"subtitle3"}},[t._v(" Update Token ")]),e("form",{staticClass:"p-4",on:{submit:function(s){return s.preventDefault(),t.updateToken.apply(null,arguments)}}},[e("FormEmbeddedButton",{model:{value:t.token,callback:function(s){t.token=s},expression:"token"}})],1)],1)],1)},w=[];const p={};var B=C(r,S,w,!1,T,null,null,null);function T(t){for(let a in p)this[a]=p[a]}const K=function(){return B.exports}();export{K as default};