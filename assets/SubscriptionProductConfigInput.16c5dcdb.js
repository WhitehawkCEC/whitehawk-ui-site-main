import{aC as v,d as c,n as u,b0 as w,cD as g,ci as h}from"./index.01207726.js";import{A as S}from"./ApiKeyDescriptionDisplay.061d9ad6.js";import{A as T}from"./ApiKeyValidation.1153e8bf.js";var L=function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("svg",e._g({attrs:{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",fill:"currentColor","aria-hidden":"true"}},e.$listeners),[t("path",{attrs:{"fill-rule":"evenodd",d:"M4.25 5.5a.75.75 0 0 0-.75.75v8.5c0 .414.336.75.75.75h8.5a.75.75 0 0 0 .75-.75v-4a.75.75 0 0 1 1.5 0v4A2.25 2.25 0 0 1 12.75 17h-8.5A2.25 2.25 0 0 1 2 14.75v-8.5A2.25 2.25 0 0 1 4.25 4h5a.75.75 0 0 1 0 1.5h-5z","clip-rule":"evenodd"}}),t("path",{attrs:{"fill-rule":"evenodd",d:"M6.194 12.753a.75.75 0 0 0 1.06.053L16.5 4.44v2.81a.75.75 0 0 0 1.5 0v-4.5a.75.75 0 0 0-.75-.75h-4.5a.75.75 0 0 0 0 1.5h2.553l-9.056 8.194a.75.75 0 0 0-.053 1.06z","clip-rule":"evenodd"}})])};const A={render:L},y={};y.props={value:{key:"value",required:!1,type:null}};y.setup=(e,n)=>{const t=e,s=n.emit,i=v(t,s);return{apiKeyValue:c({get(){var a;return((a=t.value)==null?void 0:a.value)||""},set(a){i.value={value:a}}}),description:{label:"An API Token consists of:",items:["40 characters","Lowercase letters (a-z)","Numbers (0-9)"],example:"a9k1sdzwqr1bqmktj0xyzh1isp5leylpnkyj1kze"}}};y.components=Object.assign({ApiKeyDescriptionDisplay:S,ExternalLinkSvg:A},y.components);var j=function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("div",{staticClass:"flex flex-col space-y-4"},[t("ApiKeyDescriptionDisplay",{attrs:{value:e.description}}),t("BaseExternalLink",{staticClass:"space-x-2",attrs:{"display-type":"primary",href:"https://service.bitsighttech.com/app/spm/account/"}},[t("ExternalLinkSvg",{staticClass:"h-auto w-5 shrink-0"}),t("span",[e._v("Find my key")])],1),t("div",{staticClass:"flex flex-col sm:col-span-2"},[t("BaseInput",{staticClass:"w-full",model:{value:e.apiKeyValue,callback:function(s){e.apiKeyValue=s},expression:"apiKeyValue"}})],1)],1)},D=[];const R={};var z=u(y,j,D,!1,M,null,null,null);function M(e){for(let n in R)this[n]=R[n]}const P=function(){return z.exports}(),b={};b.props={value:{key:"value",required:!1,type:null}};b.setup=(e,n)=>{const t=e,s=n.emit;return{proxy:c({get(){var r;return(r=t.value)==null?void 0:r.value},set(r){s("input",r?{value:r}:void 0)}})}};var N=function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("BaseInput",{model:{value:e.proxy,callback:function(s){e.proxy=s},expression:"proxy"}})},O=[];const C={};var U=u(b,N,O,!1,F,null,null,null);function F(e){for(let n in C)this[n]=C[n]}const q=function(){return U.exports}(),_={};_.props={value:{key:"value",required:!1,type:null}};_.setup=(e,n)=>{const t=e,s=n.emit,i=v(t,s),r=c({get(){var a;return(a=t.value)==null?void 0:a.apiToken},set(a){a&&(i.value.apiToken=a)}}),p=c({get(){var a;return((a=t.value)==null?void 0:a.mappedEntityId.oneofKind)==="value"?t.value.mappedEntityId.value:void 0},set(a){i.value.mappedEntityId=a?{oneofKind:"value",value:a}:{oneofKind:void 0}}});return{proxy:i,apiToken:r,mappedEntityId:p}};_.components=Object.assign({ApiTokenInput:P,UuidInput:q},_.components);var Z=function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("div",{staticClass:"flex flex-col space-y-6"},[t("BaseLabel",[t("span",[e._v("API Token")]),t("ApiTokenInput",{staticClass:"w-full",model:{value:e.apiToken,callback:function(s){e.apiToken=s},expression:"apiToken"}})],1),t("BaseLabel",[t("span",{staticClass:"block"},[e._v("Mapped Entity ID")]),t("UuidInput",{staticClass:"w-full lg:max-w-sm",model:{value:e.mappedEntityId,callback:function(s){e.mappedEntityId=s},expression:"mappedEntityId"}})],1),t("BaseLabel",[t("span",{staticClass:"block"},[e._v("Domain")]),t("BaseInput",{staticClass:"w-full lg:max-w-sm",model:{value:e.proxy.domain,callback:function(s){e.$set(e.proxy,"domain",s)},expression:"proxy.domain"}})],1)],1)},Q=[];const $={};var V=u(_,Z,Q,!1,Y,null,null,null);function Y(e){for(let n in $)this[n]=$[n]}const H=function(){return V.exports}();var J=function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("svg",e._g({attrs:{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",fill:"currentColor","aria-hidden":"true"}},e.$listeners),[t("path",{attrs:{"fill-rule":"evenodd",d:"M19.916 4.626a.75.75 0 0 1 .208 1.04l-9 13.5a.75.75 0 0 1-1.154.114l-6-6a.75.75 0 0 1 1.06-1.06l5.353 5.353 8.493-12.739a.75.75 0 0 1 1.04-.208z","clip-rule":"evenodd"}})])};const G={render:J};var W=function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("svg",e._g({attrs:{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",fill:"currentColor","aria-hidden":"true"}},e.$listeners),[t("path",{attrs:{"fill-rule":"evenodd",d:"m6.72 5.66 11.62 11.62A8.25 8.25 0 0 0 6.72 5.66zm10.56 12.68L5.66 6.72a8.25 8.25 0 0 0 11.62 11.62zM5.105 5.106c3.807-3.808 9.98-3.808 13.788 0 3.808 3.807 3.808 9.98 0 13.788-3.807 3.808-9.98 3.808-13.788 0-3.808-3.807-3.808-9.98 0-13.788z","clip-rule":"evenodd"}})])};const X={render:W},f={};f.props={value:{key:"value",required:!1,type:null}};f.setup=(e,n)=>{const t=e,s=n.emit,i=v(t,s);return{apiKeyValue:c({get(){var a;return((a=t.value)==null?void 0:a.value)||""},set(a){i.value={value:a}}}),description:{label:"An API Key consists of:",items:["50 characters","Uppercase letters (A-Z)","Lowercase letters (a-z)","Numbers (0-9)"],example:"a9K1sDZwQR1BQmktj0xyzH1isP5LEYLpNkyj1kzeCnwoJMNfjZ"}}};f.components=Object.assign({ApiKeyDescriptionDisplay:S,ExternalLinkSvg:A,ApiKeyValidation:T,CheckSvg:G,NoSvg:X},f.components);var ee=function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("div",{staticClass:"flex flex-col space-y-4"},[t("ApiKeyDescriptionDisplay",{attrs:{value:e.description}}),t("BaseExternalLink",{staticClass:"space-x-2",attrs:{"display-type":"primary",href:"https://app.blackkitetech.com/UserProfile/Account?page=integration#apiKeyTab"}},[t("ExternalLinkSvg",{staticClass:"h-auto w-5 shrink-0"}),t("span",[e._v("Find my key")])],1),t("div",{staticClass:"flex items-center space-x-2"},[t("BaseInput",{staticClass:"w-full",model:{value:e.apiKeyValue,callback:function(s){e.apiKeyValue=s},expression:"apiKeyValue"}}),e.value?t("ApiKeyValidation",{attrs:{value:e.value.value},scopedSlots:e._u([{key:"valid",fn:function(){return[t("CheckSvg",{staticClass:"h-auto w-5 shrink-0 stroke-green-700 stroke-2 text-green-700"})]},proxy:!0},{key:"invalid",fn:function(){return[t("NoSvg",{staticClass:"stroke h-auto w-6 shrink-0 stroke-red-700 text-red-700"})]},proxy:!0}],null,!1,3046045045)}):e._e()],1)],1)},te=[];const K={};var ne=u(f,ee,te,!1,se,null,null,null);function se(e){for(let n in K)this[n]=K[n]}const ae=function(){return ne.exports}(),m={};m.props={value:{key:"value",required:!1,type:null}};m.setup=(e,n)=>{const t=e,s=n.emit,i=v(t,s),r=[{text:" ",value:g.ScanProfileType.UNSPECIFIED},{text:"Continuous 60-day",value:g.ScanProfileType.CONTINUOUS_60_DAY},{text:"Continuous Annual",value:g.ScanProfileType.CONTINUOUS_ANNUAL}];return{proxy:i,options:r}};m.components=Object.assign({SimpleSelect:w},m.components);var ie=function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("SimpleSelect",{staticClass:"w-full",attrs:{options:e.options},model:{value:e.proxy,callback:function(s){e.proxy=s},expression:"proxy"}})},le=[];const B={};var oe=u(m,ie,le,!1,re,null,null,null);function re(e){for(let n in B)this[n]=B[n]}const ce=function(){return oe.exports}(),k={};k.props={value:{key:"value",required:!1,type:null}};k.setup=(e,n)=>{const t=e,s=n.emit,i=v(t,s),r=c({get(){var o;return(o=t.value)==null?void 0:o.apiKey},set(o){o&&(i.value.apiKey=o)}}),p=c({get(){var o;return(o=t.value)==null?void 0:o.licenseType},set(o){o&&(i.value.licenseType=o)}}),a=c({get(){var o;return(o=t.value)==null?void 0:o.mappedEntityId},set(o){o&&(i.value.mappedEntityId=o)}});return{proxy:i,apiKey:r,licenseType:p,mappedEntityId:a}};k.components=Object.assign({ApiKeyInput:ae,ScanProfileTypeInput:ce},k.components);var pe=function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("div",{staticClass:"flex flex-col space-y-6"},[t("BaseLabel",[t("span",[e._v("API Key")]),t("ApiKeyInput",{staticClass:"w-full",model:{value:e.apiKey,callback:function(s){e.apiKey=s},expression:"apiKey"}})],1),t("BaseLabel",[t("span",[e._v("License Type")]),t("ScanProfileTypeInput",{staticClass:"w-full lg:max-w-xs",model:{value:e.licenseType,callback:function(s){e.licenseType=s},expression:"licenseType"}})],1),t("BaseLabel",[t("span",{staticClass:"block"},[e._v("Mapped Entity ID")]),t("BaseInput",{staticClass:"w-full lg:max-w-sm",model:{value:e.mappedEntityId,callback:function(s){e.mappedEntityId=s},expression:"mappedEntityId"}})],1),t("BaseLabel",[t("span",{staticClass:"block"},[e._v("Domain")]),t("BaseInput",{staticClass:"w-full lg:max-w-sm",model:{value:e.proxy.domain,callback:function(s){e.$set(e.proxy,"domain",s)},expression:"proxy.domain"}})],1)],1)},ue=[];const I={};var ve=u(k,pe,ue,!1,de,null,null,null);function de(e){for(let n in I)this[n]=I[n]}const ye=function(){return ve.exports}(),x={};x.props={value:{key:"value",required:!1,type:null}};x.setup=(e,n)=>{const t=e,s=n.emit,i=v(t,s),r=c({get(){var l;return(l=t.value)==null?void 0:l.value.oneofKind},set(l){if(l==="cyberRiskRatingBk")i.value={value:{oneofKind:"cyberRiskRatingBk",cyberRiskRatingBk:h.CyberRiskRatingBlackKiteConfig.create()}};else if(l==="cyberRiskRatingBs")i.value={value:{oneofKind:"cyberRiskRatingBs",cyberRiskRatingBs:h.CyberRiskRatingBitsightConfig.create()}};else throw new Error(`Unhandled case: ${l}`)}}),p=c({get(){var d;const l=(d=t.value)==null?void 0:d.value;if((l==null?void 0:l.oneofKind)==="cyberRiskRatingBk")return l.cyberRiskRatingBk},set(l){l?i.value={value:{oneofKind:"cyberRiskRatingBk",cyberRiskRatingBk:l}}:i.value={value:{oneofKind:void 0}}}}),a=c({get(){var d;const l=(d=t.value)==null?void 0:d.value;if((l==null?void 0:l.oneofKind)==="cyberRiskRatingBs")return l.cyberRiskRatingBs},set(l){l?i.value={value:{oneofKind:"cyberRiskRatingBs",cyberRiskRatingBs:l}}:i.value={value:{oneofKind:void 0}}}});return{type:r,blackKite:p,bitsight:a,typeOptions:[{text:"Cyber Risk Rating (Black Kite)",value:"cyberRiskRatingBk"},{text:"Cyber Risk Rating (BitSight)",value:"cyberRiskRatingBs"}]}};x.components=Object.assign({SimpleSelect:w,CyberRiskRatingBlackKiteConfigInput:ye,CyberRiskRatingBitsightConfigInput:H},x.components);var _e=function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("div",{staticClass:"space-y-6"},[t("BaseLabel",[t("span",[e._v("Type")]),t("SimpleSelect",{staticClass:"w-full lg:max-w-sm",attrs:{options:e.typeOptions},model:{value:e.type,callback:function(s){e.type=s},expression:"type"}})],1),e.type==="cyberRiskRatingBk"?[t("CyberRiskRatingBlackKiteConfigInput",{model:{value:e.blackKite,callback:function(s){e.blackKite=s},expression:"blackKite"}})]:e.type==="cyberRiskRatingBs"?[t("CyberRiskRatingBitsightConfigInput",{model:{value:e.bitsight,callback:function(s){e.bitsight=s},expression:"bitsight"}})]:e._e()],2)},fe=[];const E={};var me=u(x,_e,fe,!1,ke,null,null,null);function ke(e){for(let n in E)this[n]=E[n]}const he=function(){return me.exports}();export{he as S};
