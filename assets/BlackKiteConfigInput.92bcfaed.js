import{A as c}from"./ApiKeyInput.f26d7b2a.js";import{aC as l,d as u,n as y}from"./index.24a65e47.js";const a={};a.props={value:{key:"value",required:!1,type:null}};a.setup=(e,t)=>{const o=e,i=t.emit,s=l(o,i);return{apiKey:u({get(){var r;const n=(r=o.value)==null?void 0:r.apiKeyMaybe;if((n==null?void 0:n.oneofKind)==="apiKey")return n.apiKey},set(n){n?s.value={apiKeyMaybe:{oneofKind:"apiKey",apiKey:n}}:s.value={apiKeyMaybe:{oneofKind:void 0}}}})}};a.components=Object.assign({ApiKeyInput:c},a.components);var f=function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("div",{staticClass:"flex flex-col space-y-4"},[o("ApiKeyInput",{model:{value:e.apiKey,callback:function(i){e.apiKey=i},expression:"apiKey"}})],1)},K=[];const p={};var v=y(a,f,K,!1,_,null,null,null);function _(e){for(let t in p)this[t]=p[t]}const b=function(){return v.exports}();export{b as B};
