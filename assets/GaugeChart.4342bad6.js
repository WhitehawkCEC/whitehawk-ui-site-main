import{d as a,aQ as s,n as u}from"./index.2f8dadb3.js";const n={};n.props={cyberScore:{key:"cyberScore",required:!0,type:Number}};n.setup=(e,r)=>{const t=e,o=a(()=>new URLSearchParams({needleRotationInDegrees:String(t.cyberScore*180)}));return{url:a(()=>`${s}/generated-images/gauge-chart?${o.value}`)}};var l=function(){var e=this,r=e.$createElement,t=e._self._c||r;return t("img",{attrs:{src:e.url,alt:`Cyber Score: ${e.cyberScore}`}})},_=[];const c={};var i=u(n,l,_,!1,m,null,null,null);function m(e){for(let r in c)this[r]=c[r]}const d=function(){return i.exports}();export{d as G};