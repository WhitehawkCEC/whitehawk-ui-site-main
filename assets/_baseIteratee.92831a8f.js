import{i as M,f as A}from"./_Uint8Array.ad8b755a.js";import{_ as b}from"./_baseIsEqual.768b0e54.js";import{n as E,g as T,i as c,f as O,a as R,k as K,o as w,p as D,q as G}from"./keys.642785d0.js";import{_ as L}from"./_arrayMap.dcea68f3.js";var N=E,x=T,F="[object Symbol]";function q(r){return typeof r=="symbol"||x(r)&&N(r)==F}var h=q,z=c,H=h,U=/\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,k=/^\w*$/;function X(r,n){if(z(r))return!1;var e=typeof r;return e=="number"||e=="symbol"||e=="boolean"||r==null||H(r)?!0:k.test(r)||!U.test(r)||n!=null&&r in Object(n)}var _=X,d=M,Y="Expected a function";function m(r,n){if(typeof r!="function"||n!=null&&typeof n!="function")throw new TypeError(Y);var e=function(){var t=arguments,a=n?n.apply(this,t):t[0],i=e.cache;if(i.has(a))return i.get(a);var s=r.apply(this,t);return e.cache=i.set(a,s)||i,s};return e.cache=new(m.Cache||d),e}m.Cache=d;var Z=m,B=Z,J=500;function Q(r){var n=B(r,function(t){return e.size===J&&e.clear(),t}),e=n.cache;return n}var W=Q,V=W,j=/[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,rr=/\\(\\)?/g,nr=V(function(r){var n=[];return r.charCodeAt(0)===46&&n.push(""),r.replace(j,function(e,t,a,i){n.push(a?i.replace(rr,"$1"):t||e)}),n}),er=nr,y,$;function tr(){if($)return y;$=1;var r=O,n=L,e=c,t=h,a=1/0,i=r?r.prototype:void 0,s=i?i.toString:void 0;function o(f){if(typeof f=="string")return f;if(e(f))return n(f,o)+"";if(t(f))return s?s.call(f):"";var u=f+"";return u=="0"&&1/f==-a?"-0":u}return y=o,y}var ar=tr();function ir(r){return r==null?"":ar(r)}var sr=ir,fr=c,or=_,ur=er,cr=sr;function pr(r,n){return fr(r)?r:or(r,n)?[r]:ur(cr(r))}var P=pr,yr=h,hr=1/0;function _r(r){if(typeof r=="string"||yr(r))return r;var n=r+"";return n=="0"&&1/r==-hr?"-0":n}var p=_r,mr=P,lr=p;function gr(r,n){n=mr(n,r);for(var e=0,t=n.length;r!=null&&e<t;)r=r[lr(n[e++])];return e&&e==t?r:void 0}var S=gr,vr=A,$r=b,br=1,dr=2;function Pr(r,n,e,t){var a=e.length,i=a,s=!t;if(r==null)return!i;for(r=Object(r);a--;){var o=e[a];if(s&&o[2]?o[1]!==r[o[0]]:!(o[0]in r))return!1}for(;++a<i;){o=e[a];var f=o[0],u=r[f],l=o[1];if(s&&o[2]){if(u===void 0&&!(f in r))return!1}else{var g=new vr;if(t)var v=t(u,l,f,r,n,g);if(!(v===void 0?$r(l,u,br|dr,t,g):v))return!1}}return!0}var Sr=Pr,Ir=R;function Cr(r){return r===r&&!Ir(r)}var I=Cr,Mr=I,Ar=K;function Er(r){for(var n=Ar(r),e=n.length;e--;){var t=n[e],a=r[t];n[e]=[t,a,Mr(a)]}return n}var Tr=Er;function Or(r,n){return function(e){return e==null?!1:e[r]===n&&(n!==void 0||r in Object(e))}}var C=Or,Rr=Sr,Kr=Tr,wr=C;function Dr(r){var n=Kr(r);return n.length==1&&n[0][2]?wr(n[0][0],n[0][1]):function(e){return e===r||Rr(e,r,n)}}var Gr=Dr,Lr=S;function Nr(r,n,e){var t=r==null?void 0:Lr(r,n);return t===void 0?e:t}var xr=Nr;function Fr(r,n){return r!=null&&n in Object(r)}var qr=Fr,zr=P,Hr=w,Ur=c,kr=D,Xr=G,Yr=p;function Zr(r,n,e){n=zr(n,r);for(var t=-1,a=n.length,i=!1;++t<a;){var s=Yr(n[t]);if(!(i=r!=null&&e(r,s)))break;r=r[s]}return i||++t!=a?i:(a=r==null?0:r.length,!!a&&Xr(a)&&kr(s,a)&&(Ur(r)||Hr(r)))}var Br=Zr,Jr=qr,Qr=Br;function Wr(r,n){return r!=null&&Qr(r,n,Jr)}var Vr=Wr,jr=b,rn=xr,nn=Vr,en=_,tn=I,an=C,sn=p,fn=1,on=2;function un(r,n){return en(r)&&tn(n)?an(sn(r),n):function(e){var t=rn(e,r);return t===void 0&&t===n?nn(e,r):jr(n,t,fn|on)}}var cn=un;function pn(r){return r}var yn=pn;function hn(r){return function(n){return n==null?void 0:n[r]}}var _n=hn,mn=S;function ln(r){return function(n){return mn(n,r)}}var gn=ln,vn=_n,$n=gn,bn=_,dn=p;function Pn(r){return bn(r)?vn(dn(r)):$n(r)}var Sn=Pn,In=Gr,Cn=cn,Mn=yn,An=c,En=Sn;function Tn(r){return typeof r=="function"?r:r==null?Mn:typeof r=="object"?An(r)?Cn(r[0],r[1]):In(r):En(r)}var Dn=Tn;export{S as _,yn as a,Dn as b,Br as c,er as d,p as e,P as f,xr as g,h as i,tr as r,sr as t};
