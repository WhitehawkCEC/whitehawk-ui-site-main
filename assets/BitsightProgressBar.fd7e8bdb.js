import{c as s,n as l}from"./index.d7842beb.js";const o={};o.props={cyberScore:{key:"cyberScore",required:!0,type:Number},max:{key:"max",required:!0,type:Number}};o.setup=(t,r)=>{const e=t,a=s(()=>200-e.cyberScore/e.max*200),i=s(()=>`gradient-${Math.random()}`),c=s(()=>e.cyberScore>=740?"#10b981":e.cyberScore>=640?"#fde68a":"#ef4444");return{fill:a,gradientId:i,displayColor:c}};var d=function(){var t=this,r=t.$createElement,e=t._self._c||r;return e("svg",{attrs:{viewBox:"0 0 90 80",preserveAspectRatio:"none"}},[e("defs",[e("linearGradient",{attrs:{id:`${t.gradientId}`,x1:"15%",y1:"100%",x2:"80%",y2:"100%"}},[e("stop",{attrs:{offset:"0%","stop-color":`${t.displayColor}`}}),e("stop",{attrs:{offset:"100%","stop-color":`${t.displayColor}`}})],1)],1),e("path",{staticClass:"stroke-current text-gray-200 shadow-inner",attrs:{d:"M20,75 a40,40,0,1,1,50,0",fill:"none","stroke-linecap":"round","stroke-width":"3"}}),e("path",{staticClass:"filling transition duration-300",style:`--fill: ${t.fill}`,attrs:{d:"M20,75 a40,40,0,1,1,50,0",fill:"none",stroke:`url(#${t.gradientId})`,"stroke-dasharray":"200","stroke-dashoffset":"200","stroke-linecap":"round","stroke-width":"3"}})])},u=[];const n={};var p=l(o,d,u,!1,_,"5c1d6338",null,null);function _(t){for(let r in n)this[r]=n[r]}const y=function(){return p.exports}();export{y as B};
