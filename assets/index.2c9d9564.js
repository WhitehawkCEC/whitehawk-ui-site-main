import{am as x,X as C,bG as r,r as u,c as p,g as l,h as o,I as g,G as k,n as h}from"./index.d7842beb.js";import{A as w}from"./ApiKeyValidation.6ecc40d3.js";const n={};n.setup=(t,a)=>{const s=r("id"),e=r("groupId"),i=u(""),c=u(null),v=p(()=>({id:{accountId:s.value,groupId:e.value},data:i.value})),m=p(()=>l.get(`${o}/accounts/${s.value}/groups/${e.value}/black-kite/api-key`)),f=g(),y=k();async function _(){c.value=await l.put(`${o}/accounts/${s.value}/groups/${e.value}/black-kite/api-key`,v.value),y.success("Api Key updated"),l.get(`${o}/accounts/${s.value}/groups/${e.value}/black-kite/api-key`),f.push(`/admin/companies/${s.value}/scorecards/portfolio/groups/${e.value}`)}return{apiKeyValue:i,apiKeyUpdate:c,apiKey:m,update:_}};n.components=Object.assign({ApiKeyValidation:w,CheckSvg:x,XSvg:C},n.components);var b=function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("section",{staticClass:"space-y-6"},[s("BasePromise",{attrs:{promise:t.apiKey},scopedSlots:t._u([{key:"success",fn:function(e){var i=e.result.data;return[s("BaseSimpleCard",{staticClass:"divide-y"},[s("div",{staticClass:"flex flex-col p-4 sm:flex-row sm:items-center sm:justify-between"},[s("h2",{staticClass:"font-display text-lg font-semibold"},[t._v("Current Token")]),s("div",[s("ApiKeyValidation",{attrs:{value:i.data},scopedSlots:t._u([{key:"valid",fn:function(){return[s("div",{staticClass:"inline-flex items-center space-x-2 rounded-md bg-green-600 px-2"},[s("CheckSvg",{staticClass:"h-4 w-4 text-white"}),s("span",{staticClass:"text-sm font-medium uppercase text-white"},[t._v(" Valid Token ")])],1)]},proxy:!0},{key:"invalid",fn:function(){return[s("div",{staticClass:"inline-flex items-center space-x-2 rounded-md bg-red-600 px-2"},[s("XSvg",{staticClass:"h-4 w-4 text-white"}),s("span",{staticClass:"text-sm font-medium uppercase text-white"},[t._v(" Invalid Token ")])],1)]},proxy:!0}],null,!0)})],1)]),s("div",{staticClass:"flex p-4"},[s("span",{staticClass:"overflow-y-auto rounded-md border bg-gray-200 px-4 py-2 text-gray-700 shadow-inner"},[t._v(" "+t._s(i.data)+" ")])])])]}}])}),s("BaseSimpleCard",{staticClass:"divide-y"},[s("h2",{staticClass:"p-4 font-display text-lg font-semibold"},[t._v("Update Group Token")]),s("div",{staticClass:"space-y-2 p-4 text-xs text-gray-700"},[s("p",[s("span",[t._v("A Token (API Key) consists of:")])]),s("ul",{staticClass:"ml-4 list-disc"},[s("li",[t._v("50 characters")]),s("li",[t._v("Uppercase Letters (A-Z)")]),s("li",[t._v("Lowercase Letters (a-z)")]),s("li",[t._v("Numbers (0-9)")])]),s("p",{staticClass:"overflow-y-auto"},[s("span",[t._v("E.G.")]),s("span",{staticClass:"font-mono"},[t._v(" a9K1sDZwQR1BQmktj0xyzH1isP5LEYLpNkyj1kzeCnwoJMNfjZ ")])])]),s("form",{staticClass:"divide-y",on:{submit:function(e){return e.preventDefault(),t.update.apply(null,arguments)}}},[s("div",{staticClass:"p-4"},[s("BaseLabel",{staticClass:"grid grid-cols-1 gap-1 sm:grid-cols-3 sm:items-center sm:gap-4"},[s("span",{staticClass:"block text-sm font-medium leading-5 text-gray-700"},[t._v(" Token ")]),s("div",{staticClass:"flex flex-col sm:col-span-2"},[s("BaseInput",{staticClass:"w-full",model:{value:t.apiKeyValue,callback:function(e){t.apiKeyValue=e},expression:"apiKeyValue"}})],1)])],1),s("div",{staticClass:"p-4"},[s("div",{staticClass:"lg:inline-flex"},[s("BaseButton",{staticClass:"w-full space-x-2 lg:w-auto",attrs:{"display-type":"info"}},[t._v(" Update Token ")])],1)])]),t.apiKeyUpdate?s("BasePromise",{staticClass:"sr-only",attrs:{promise:t.apiKeyUpdate},scopedSlots:t._u([{key:"success",fn:function(){return[s("span",{staticClass:"p-4"},[t._v("Changed successfully")])]},proxy:!0}],null,!1,2892460225)}):t._e()],1)],1)},K=[];const d={};var $=h(n,b,K,!1,S,null,null,null);function S(t){for(let a in d)this[a]=d[a]}const A=function(){return $.exports}();export{A as default};
