import{E as o}from"./arrow-top-right-on-square.b063d2af.js";import{A as c}from"./ApiKeyValidation.66cf1ead.js";import{A as p}from"./ApiKeyDescriptionDisplay.c5089053.js";import{aD as u,d as v,n as d}from"./index.ad2ff904.js";var m=function(){var e=this,r=e.$createElement,t=e._self._c||r;return t("svg",e._g({attrs:{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",fill:"currentColor","aria-hidden":"true"}},e.$listeners),[t("path",{attrs:{"fill-rule":"evenodd",d:"M19.916 4.626a.75.75 0 0 1 .208 1.04l-9 13.5a.75.75 0 0 1-1.154.114l-6-6a.75.75 0 0 1 1.06-1.06l5.353 5.353 8.493-12.739a.75.75 0 0 1 1.04-.208z","clip-rule":"evenodd"}})])};const f={render:m};var _=function(){var e=this,r=e.$createElement,t=e._self._c||r;return t("svg",e._g({attrs:{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",fill:"currentColor","aria-hidden":"true"}},e.$listeners),[t("path",{attrs:{"fill-rule":"evenodd",d:"m6.72 5.66 11.62 11.62A8.25 8.25 0 0 0 6.72 5.66zm10.56 12.68L5.66 6.72a8.25 8.25 0 0 0 11.62 11.62zM5.105 5.106c3.807-3.808 9.98-3.808 13.788 0 3.808 3.807 3.808 9.98 0 13.788-3.807 3.808-9.98 3.808-13.788 0-3.808-3.807-3.808-9.98 0-13.788z","clip-rule":"evenodd"}})])};const y={render:_},a={};a.props={value:{key:"value",required:!1,type:null}};a.setup=(e,r)=>{const t=e,n=r.emit,l=u(t,n);return{apiKeyValue:v({get(){var s;return((s=t.value)==null?void 0:s.value)||""},set(s){l.value={value:s}}}),description:{label:"The Black Kite API Key consists of:",items:["50 characters","Uppercase letters (A-Z)","Lowercase letters (a-z)","Numbers (0-9)"],example:"a9K1sDZwQR1BQmktj0xyzH1isP5LEYLpNkyj1kzeCnwoJMNfjZ"}}};a.components=Object.assign({ApiKeyDescriptionDisplay:p,ExternalLinkSvg:o,ApiKeyValidation:c,CheckSvg:f,NoSvg:y},a.components);var h=function(){var e=this,r=e.$createElement,t=e._self._c||r;return t("div",{staticClass:"flex flex-col space-y-4"},[t("ApiKeyDescriptionDisplay",{attrs:{value:e.description}}),t("BaseExternalLink",{staticClass:"space-x-2",attrs:{"display-type":"primary",href:"https://app.blackkitetech.com/UserProfile/Account?page=integration#apiKeyTab"}},[t("ExternalLinkSvg",{staticClass:"h-auto w-5 shrink-0"}),t("span",[e._v("Find my key")])],1),t("div",{staticClass:"flex items-center space-x-2"},[t("BaseInput",{staticClass:"w-full",model:{value:e.apiKeyValue,callback:function(n){e.apiKeyValue=n},expression:"apiKeyValue"}}),e.value?t("ApiKeyValidation",{attrs:{value:e.value.value},scopedSlots:e._u([{key:"valid",fn:function(){return[t("CheckSvg",{staticClass:"h-auto w-5 shrink-0 stroke-green-700 stroke-2 text-green-700"})]},proxy:!0},{key:"invalid",fn:function(){return[t("NoSvg",{staticClass:"stroke h-auto w-6 shrink-0 stroke-red-700 text-red-700"})]},proxy:!0}],null,!1,3046045045)}):e._e()],1)],1)},x=[];const i={};var k=d(a,h,x,!1,g,null,null,null);function g(e){for(let r in i)this[r]=i[r]}const S=function(){return k.exports}();export{S as A};