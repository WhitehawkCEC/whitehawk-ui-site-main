import{aC as y,d as o,n as d,b0 as h,cE as C,cj as $}from"./index.65869293.js";import{A as T}from"./ApiKeyDescriptionDisplay.fce5a78d.js";import{u as j}from"./useBitsightCompanies.dfd69d5a.js";import{A as z}from"./ApiKeyValidation.b8a586f0.js";import{u as D}from"./useBlackKiteEntities.acb7f1b4.js";var M=function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("svg",e._g({attrs:{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",fill:"currentColor","aria-hidden":"true"}},e.$listeners),[t("path",{attrs:{"fill-rule":"evenodd",d:"M4.25 5.5a.75.75 0 0 0-.75.75v8.5c0 .414.336.75.75.75h8.5a.75.75 0 0 0 .75-.75v-4a.75.75 0 0 1 1.5 0v4A2.25 2.25 0 0 1 12.75 17h-8.5A2.25 2.25 0 0 1 2 14.75v-8.5A2.25 2.25 0 0 1 4.25 4h5a.75.75 0 0 1 0 1.5h-5z","clip-rule":"evenodd"}}),t("path",{attrs:{"fill-rule":"evenodd",d:"M6.194 12.753a.75.75 0 0 0 1.06.053L16.5 4.44v2.81a.75.75 0 0 0 1.5 0v-4.5a.75.75 0 0 0-.75-.75h-4.5a.75.75 0 0 0 0 1.5h2.553l-9.056 8.194a.75.75 0 0 0-.053 1.06z","clip-rule":"evenodd"}})])};const L={render:M},m={};m.props={value:{key:"value",required:!1,type:null}};m.setup=(e,n)=>{const t=e,s=n.emit,l=y(t,s);return{apiKeyValue:o({get(){var a;return((a=t.value)==null?void 0:a.value)||""},set(a){l.value={value:a}}}),description:{label:"An API Token consists of:",items:["40 characters","Lowercase letters (a-z)","Numbers (0-9)"],example:"a9k1sdzwqr1bqmktj0xyzh1isp5leylpnkyj1kze"}}};m.components=Object.assign({ApiKeyDescriptionDisplay:T,ExternalLinkSvg:L},m.components);var O=function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("div",{staticClass:"flex flex-col space-y-4"},[t("ApiKeyDescriptionDisplay",{attrs:{value:e.description}}),t("BaseExternalLink",{staticClass:"space-x-2",attrs:{"display-type":"primary",href:"https://service.bitsighttech.com/app/spm/account/"}},[t("ExternalLinkSvg",{staticClass:"h-auto w-5 shrink-0"}),t("span",[e._v("Find my key")])],1),t("div",{staticClass:"flex flex-col sm:col-span-2"},[t("BaseInput",{staticClass:"w-full",model:{value:e.apiKeyValue,callback:function(s){e.apiKeyValue=s},expression:"apiKeyValue"}})],1)],1)},P=[];const K={};var q=d(m,O,P,!1,N,null,null,null);function N(e){for(let n in K)this[n]=K[n]}const U=function(){return q.exports}(),f={};f.props={value:{key:"value",required:!1,type:null},id:{key:"id",required:!0,type:String}};f.setup=(e,n)=>{const t=e,s=n.emit,l=o({get(){var c;return(c=t.value)==null?void 0:c.value},set(c){s("input",c?{value:c}:void 0)}}),p=o(()=>t.id),u=j.list(p),a=o(()=>u.data.value?u.data.value.map(c=>({text:c.data.shortname,value:c.data.guid})).sort((c,i)=>c.text.localeCompare(i.text)):[]);return{proxy:l,companies:a}};f.components=Object.assign({SimpleSelect:h},f.components);var F=function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("SimpleSelect",{attrs:{options:e.companies},model:{value:e.proxy,callback:function(s){e.proxy=s},expression:"proxy"}})},Q=[];const B={};var Z=d(f,F,Q,!1,V,null,null,null);function V(e){for(let n in B)this[n]=B[n]}const Y=function(){return Z.exports}(),_={};_.props={id:{key:"id",required:!0,type:String},value:{key:"value",required:!1,type:null}};_.setup=(e,n)=>{const t=e,s=n.emit,l=y(t,s),p=o({get(){var a;return(a=t.value)==null?void 0:a.apiToken},set(a){a&&(l.value.apiToken=a)}}),u=o({get(){var a;return((a=t.value)==null?void 0:a.mappedEntityId.oneofKind)==="value"?t.value.mappedEntityId.value:void 0},set(a){l.value.mappedEntityId=a?{oneofKind:"value",value:a}:{oneofKind:void 0}}});return{proxy:l,apiToken:p,mappedEntityId:u}};_.components=Object.assign({ApiTokenInput:U,UuidInput:Y},_.components);var H=function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("div",{staticClass:"flex flex-col space-y-6"},[t("BaseLabel",[t("span",[e._v("API Token")]),t("ApiTokenInput",{staticClass:"w-full",model:{value:e.apiToken,callback:function(s){e.apiToken=s},expression:"apiToken"}})],1),t("BaseLabel",[t("span",{staticClass:"block"},[e._v("Mapped Entity ID")]),t("UuidInput",{staticClass:"w-full lg:max-w-sm",attrs:{id:e.id},model:{value:e.mappedEntityId,callback:function(s){e.mappedEntityId=s},expression:"mappedEntityId"}})],1),t("BaseLabel",[t("span",{staticClass:"block"},[e._v("Domain")]),t("BaseInput",{staticClass:"w-full lg:max-w-sm",model:{value:e.proxy.domain,callback:function(s){e.$set(e.proxy,"domain",s)},expression:"proxy.domain"}})],1)],1)},J=[];const I={};var G=d(_,H,J,!1,W,null,null,null);function W(e){for(let n in I)this[n]=I[n]}const X=function(){return G.exports}();var ee=function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("svg",e._g({attrs:{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",fill:"currentColor","aria-hidden":"true"}},e.$listeners),[t("path",{attrs:{"fill-rule":"evenodd",d:"M19.916 4.626a.75.75 0 0 1 .208 1.04l-9 13.5a.75.75 0 0 1-1.154.114l-6-6a.75.75 0 0 1 1.06-1.06l5.353 5.353 8.493-12.739a.75.75 0 0 1 1.04-.208z","clip-rule":"evenodd"}})])};const te={render:ee};var ne=function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("svg",e._g({attrs:{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",fill:"currentColor","aria-hidden":"true"}},e.$listeners),[t("path",{attrs:{"fill-rule":"evenodd",d:"m6.72 5.66 11.62 11.62A8.25 8.25 0 0 0 6.72 5.66zm10.56 12.68L5.66 6.72a8.25 8.25 0 0 0 11.62 11.62zM5.105 5.106c3.807-3.808 9.98-3.808 13.788 0 3.808 3.807 3.808 9.98 0 13.788-3.807 3.808-9.98 3.808-13.788 0-3.808-3.807-3.808-9.98 0-13.788z","clip-rule":"evenodd"}})])};const se={render:ne},k={};k.props={value:{key:"value",required:!1,type:null}};k.setup=(e,n)=>{const t=e,s=n.emit,l=y(t,s);return{apiKeyValue:o({get(){var a;return((a=t.value)==null?void 0:a.value)||""},set(a){l.value={value:a}}}),description:{label:"An API Key consists of:",items:["50 characters","Uppercase letters (A-Z)","Lowercase letters (a-z)","Numbers (0-9)"],example:"a9K1sDZwQR1BQmktj0xyzH1isP5LEYLpNkyj1kzeCnwoJMNfjZ"}}};k.components=Object.assign({ApiKeyDescriptionDisplay:T,ExternalLinkSvg:L,ApiKeyValidation:z,CheckSvg:te,NoSvg:se},k.components);var ae=function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("div",{staticClass:"flex flex-col space-y-4"},[t("ApiKeyDescriptionDisplay",{attrs:{value:e.description}}),t("BaseExternalLink",{staticClass:"space-x-2",attrs:{"display-type":"primary",href:"https://app.blackkitetech.com/UserProfile/Account?page=integration#apiKeyTab"}},[t("ExternalLinkSvg",{staticClass:"h-auto w-5 shrink-0"}),t("span",[e._v("Find my key")])],1),t("div",{staticClass:"flex items-center space-x-2"},[t("BaseInput",{staticClass:"w-full",model:{value:e.apiKeyValue,callback:function(s){e.apiKeyValue=s},expression:"apiKeyValue"}}),e.value?t("ApiKeyValidation",{attrs:{value:e.value.value},scopedSlots:e._u([{key:"valid",fn:function(){return[t("CheckSvg",{staticClass:"h-auto w-5 shrink-0 stroke-green-700 stroke-2 text-green-700"})]},proxy:!0},{key:"invalid",fn:function(){return[t("NoSvg",{staticClass:"stroke h-auto w-6 shrink-0 stroke-red-700 text-red-700"})]},proxy:!0}],null,!1,3046045045)}):e._e()],1)],1)},ie=[];const S={};var le=d(k,ae,ie,!1,re,null,null,null);function re(e){for(let n in S)this[n]=S[n]}const oe=function(){return le.exports}(),x={};x.props={value:{key:"value",required:!1,type:null}};x.setup=(e,n)=>{const t=e,s=n.emit,l=y(t,s),p=[{text:" ",value:C.ScanProfileType.UNSPECIFIED},{text:"Continuous 60-day",value:C.ScanProfileType.CONTINUOUS_60_DAY},{text:"Continuous Annual",value:C.ScanProfileType.CONTINUOUS_ANNUAL}];return{proxy:l,options:p}};x.components=Object.assign({SimpleSelect:h},x.components);var ce=function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("SimpleSelect",{staticClass:"w-full",attrs:{options:e.options},model:{value:e.proxy,callback:function(s){e.proxy=s},expression:"proxy"}})},pe=[];const E={};var ue=d(x,ce,pe,!1,ve,null,null,null);function ve(e){for(let n in E)this[n]=E[n]}const de=function(){return ue.exports}(),g={};g.props={id:{key:"id",required:!0,type:String},value:{key:"value",required:!1,type:null}};g.setup=(e,n)=>{const t=e,s=n.emit,l=y(t,s),p=o(()=>t.id),u=o({get(){var r;return(r=t.value)==null?void 0:r.apiKey},set(r){r&&(l.value.apiKey=r)}}),a=o({get(){var r;return(r=t.value)==null?void 0:r.licenseType},set(r){r&&(l.value.licenseType=r)}}),c=D.list(p),i=o(()=>c.data.value?c.data.value.map(({CompanyId:r,CompanyName:R})=>({text:R,value:r})).sort((r,R)=>r.text.localeCompare(R.text)):[]),v=o({get(){var r;return(r=t.value)==null?void 0:r.mappedEntityId},set(r){r&&(l.value.mappedEntityId=r)}});return{proxy:l,apiKey:u,licenseType:a,entities:i,mappedEntityId:v}};g.components=Object.assign({ApiKeyInput:oe,ScanProfileTypeInput:de,SimpleSelect:h},g.components);var ye=function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("div",{staticClass:"flex flex-col space-y-6"},[t("BaseLabel",[t("span",[e._v("API Key")]),t("ApiKeyInput",{staticClass:"w-full",model:{value:e.apiKey,callback:function(s){e.apiKey=s},expression:"apiKey"}})],1),t("BaseLabel",[t("span",[e._v("License Type")]),t("ScanProfileTypeInput",{staticClass:"w-full lg:max-w-xs",model:{value:e.licenseType,callback:function(s){e.licenseType=s},expression:"licenseType"}})],1),t("BaseLabel",[t("span",{staticClass:"block"},[e._v("Mapped Entity ID")]),t("SimpleSelect",{staticClass:"w-full lg:max-w-sm",attrs:{options:e.entities},model:{value:e.mappedEntityId,callback:function(s){e.mappedEntityId=s},expression:"mappedEntityId"}})],1),t("BaseLabel",[t("span",{staticClass:"block"},[e._v("Domain")]),t("BaseInput",{staticClass:"w-full lg:max-w-sm",model:{value:e.proxy.domain,callback:function(s){e.$set(e.proxy,"domain",s)},expression:"proxy.domain"}})],1)],1)},me=[];const w={};var fe=d(g,ye,me,!1,_e,null,null,null);function _e(e){for(let n in w)this[n]=w[n]}const ke=function(){return fe.exports}(),b={};b.props={id:{key:"id",required:!0,type:String},value:{key:"value",required:!1,type:null}};b.setup=(e,n)=>{const t=e,s=n.emit,l=y(t,s),p=o({get(){var i;return(i=t.value)==null?void 0:i.value.oneofKind},set(i){if(i==="cyberRiskRatingBk")l.value={value:{oneofKind:"cyberRiskRatingBk",cyberRiskRatingBk:$.CyberRiskRatingBlackKiteConfig.create()}};else if(i==="cyberRiskRatingBs")l.value={value:{oneofKind:"cyberRiskRatingBs",cyberRiskRatingBs:$.CyberRiskRatingBitsightConfig.create()}};else throw new Error(`Unhandled case: ${i}`)}}),u=o({get(){var v;const i=(v=t.value)==null?void 0:v.value;if((i==null?void 0:i.oneofKind)==="cyberRiskRatingBk")return i.cyberRiskRatingBk},set(i){i?l.value={value:{oneofKind:"cyberRiskRatingBk",cyberRiskRatingBk:i}}:l.value={value:{oneofKind:void 0}}}}),a=o({get(){var v;const i=(v=t.value)==null?void 0:v.value;if((i==null?void 0:i.oneofKind)==="cyberRiskRatingBs")return i.cyberRiskRatingBs},set(i){i?l.value={value:{oneofKind:"cyberRiskRatingBs",cyberRiskRatingBs:i}}:l.value={value:{oneofKind:void 0}}}});return{type:p,blackKite:u,bitsight:a,typeOptions:[{text:"Cyber Risk Rating (Black Kite)",value:"cyberRiskRatingBk"},{text:"Cyber Risk Rating (BitSight)",value:"cyberRiskRatingBs"}]}};b.components=Object.assign({SimpleSelect:h,CyberRiskRatingBlackKiteConfigInput:ke,CyberRiskRatingBitsightConfigInput:X},b.components);var xe=function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("div",{staticClass:"space-y-6"},[t("BaseLabel",[t("span",[e._v("Type")]),t("SimpleSelect",{staticClass:"w-full lg:max-w-sm",attrs:{options:e.typeOptions},model:{value:e.type,callback:function(s){e.type=s},expression:"type"}})],1),e.type==="cyberRiskRatingBk"?[t("CyberRiskRatingBlackKiteConfigInput",{attrs:{id:e.id},model:{value:e.blackKite,callback:function(s){e.blackKite=s},expression:"blackKite"}})]:e.type==="cyberRiskRatingBs"?[t("CyberRiskRatingBitsightConfigInput",{attrs:{id:e.id},model:{value:e.bitsight,callback:function(s){e.bitsight=s},expression:"bitsight"}})]:e._e()],2)},ge=[];const A={};var be=d(b,xe,ge,!1,he,null,null,null);function he(e){for(let n in A)this[n]=A[n]}const Ie=function(){return be.exports}();export{Ie as S};
