import{c,n as o}from"./index.d7842beb.js";const n={};n.props={current:{key:"current",required:!0,type:Number},max:{key:"max",required:!0,type:Number}};n.setup=(e,r)=>{const t=e;return{percentage:c(()=>t.current*100/(t.max-1))}};var a=function(){var e=this,r=e.$createElement,t=e._self._c||r;return t("div",[t("div",{staticClass:"h-full bg-prime-green transition-all duration-500",style:`width:${e.percentage}%`})])},u=[];const s={};var i=o(n,a,u,!1,l,null,null,null);function l(e){for(let r in s)this[r]=s[r]}const m=function(){return i.exports}();export{m as P};
