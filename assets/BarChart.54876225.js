import{aS as c,aC as d,af as k,aO as i,aP as l,r as x,aZ as $,c as p,bk as D,a$ as S,bJ as q,aX as w,n as B}from"./index.f9aabd94.js";import{C as f,B as O,d as P,e as Q,f as M,c as A,p as R}from"./chart.f4078cab.js";const T={create(){const e=c();return d(a=>i.post(`${l}/journey/maturity/todo`,a).then(t=>t.data),{onSuccess(){e.invalidateQueries(["journey","maturity","todo"],{exact:!0})}})},update(){const e=c();return d(a=>i.post(`${l}/journey/maturity/todo/update`,a).then(t=>t.data),{onSuccess(){e.invalidateQueries(["journey","maturity","todo","update"],{exact:!0})}})},delete(){const e=c();return d(a=>i.post(`${l}/journey/maturity/todo/delete`,a).then(t=>t.data),{onSuccess(){e.invalidateQueries(["journey","maturity","todo","delete"],{exact:!0})}})},list(e){return k(["journey","maturity","todo",e],()=>i.get(`${l}/journey/maturity/todo/${e.value}`).then(a=>a.data))}};f.register(O,P,Q,M,A,R);const y=w({inheritAttrs:!1});y.props={value:{key:"value",required:!0,type:Object},width:{key:"width",required:!1,type:Number},height:{key:"height",required:!1,type:Number},options:{key:"options",required:!0,type:Object}};y.setup=(e,a)=>{const t=e,g=a.emit,u=x(),m=$(),C=p(()=>({width:t.width?`${t.width}px`:"100%",height:t.height?`${t.height}px`:"100%"}));function v(r){let n=0;for(const s of r)s.itemComplete&&n++;return n}const b=p(()=>{const r=Object.values(t.value),n=r.map(o=>o?v(o):0),s=r.map(o=>o?o.length-v(o):0);return{labels:_(Object.keys(t.value)),datasets:[{label:"Goals Completed",backgroundColor:"#14275D",borderWidth:1,borderColor:"#14275D",data:n,categoryPercentage:.5,barPercentage:1},{label:"Goals Remaining",backgroundColor:"#86D2DD",borderWidth:1,borderColor:"#86D2DD",data:s,categoryPercentage:.5,barPercentage:1}]}});function _(r){var s;const n=[];for(const o of r)n.push(((s=o[0])==null?void 0:s.toLocaleUpperCase())+o.slice(1));return n}const j=p(()=>({layout:{padding:2},responsive:!0,scales:{xAxes:{stacked:!0},yAxes:{stacked:!0,ticks:{precision:0}}},animation:{onComplete:()=>{u.value&&g("animation-complete",u.value)}},...t.options}));return D(()=>{S(()=>{const r=u.value;!r||(m.value=new f(r,{type:"bar",data:b.value,options:j.value}))})}),q(()=>{var r;(r=m.value)==null||r.destroy()}),{canvas:u,parentStyle:C}};var U=function(){var e=this,a=e.$createElement,t=e._self._c||a;return t("div",{staticClass:"relative",style:e.parentStyle},[t("canvas",e._b({ref:"canvas"},"canvas",e.$attrs,!1))])},z=[];const h={};var E=B(y,U,z,!1,G,null,null,null);function G(e){for(let a in h)this[a]=h[a]}const W=function(){return E.exports}();export{W as B,T as u};