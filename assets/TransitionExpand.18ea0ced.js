import{aN as u,n as _}from"./index.cb90a26d.js";const n={};n.setup=(e,i)=>{function s(t){const o=getComputedStyle(t).width;t.style.width=o,t.style.position="absolute",t.style.visibility="hidden",t.style.height="auto",requestAnimationFrame(()=>{const c=getComputedStyle(t).height;t.style.width="",t.style.position="",t.style.visibility="",t.style.height="0",getComputedStyle(t).height,requestAnimationFrame(()=>{t.style.height=c})})}function r(t){t.style.height="auto"}function h(t){const o=getComputedStyle(t).height;t.style.height=o,getComputedStyle(t).height,requestAnimationFrame(()=>{t.style.height="0"})}return{enter:s,afterEnter:r,leave:h}};n.components=Object.assign({SimpleTransition:u},n.components);var l=function(){var e=this,i=e.$createElement,s=e._self._c||i;return s("SimpleTransition",{attrs:{"active-class":"transition-height duration-500 ease-in-out overflow-hidden","enter-leave-to-class":"h-0 opacity-0"},on:{enter:e.enter,"after-enter":e.afterEnter,leave:e.leave}},[e._t("default")],2)},p=[];const a={};var y=_(n,l,p,!1,d,"6b6a83e8",null,null);function d(e){for(let i in a)this[i]=a[i]}const v=function(){return y.exports}();export{v as T};