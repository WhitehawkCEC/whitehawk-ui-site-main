import{aT as y,aD as d,ah as h,aP as o,aQ as i}from"./index.4961dd46.js";import{k as l,c as f}from"./keys.a991f76e.js";const S={create(){const a=y();return d(e=>o.post(`${i}/journey/maturity/todo`,e).then(r=>r.data),{onSuccess(){a.invalidateQueries(["journey","maturity","todo"],{exact:!0})}})},update(){const a=y();return d(e=>o.post(`${i}/journey/maturity/todo/update`,e).then(r=>r.data),{onSuccess(){a.invalidateQueries(["journey","maturity","todo","update"],{exact:!0})}})},delete(){const a=y();return d(e=>o.post(`${i}/journey/maturity/todo/delete`,e).then(r=>r.data),{onSuccess(){a.invalidateQueries(["journey","maturity","todo","delete"],{exact:!0})}})},list(a){return h(["journey","maturity","todo",a],()=>o.get(`${i}/journey/maturity/todo/${a.value}`).then(e=>e.data))}};function p(a){return function(e,r,n){for(var s=-1,t=Object(e),u=n(e),c=u.length;c--;){var v=u[a?c:++s];if(r(t[v],v,t)===!1)break}return e}}var b=p,m=b,F=m(),$=F,_=$,j=l;function B(a,e){return a&&_(a,e,j)}var k=B,x=f;function Q(a,e){return function(r,n){if(r==null)return r;if(!x(r))return a(r,n);for(var s=r.length,t=e?s:-1,u=Object(r);(e?t--:++t<s)&&n(u[t],t,u)!==!1;);return r}}var w=Q,E=k,O=w,g=O(E),A=g;export{A as _,S as u};
