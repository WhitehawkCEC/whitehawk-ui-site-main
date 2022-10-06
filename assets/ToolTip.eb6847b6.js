import{E as he}from"./exclamation-triangle.54812a62.js";import{d as Et,r as At,bK as me,aB as ge,n as ye}from"./index.44abb428.js";var we=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("svg",t._g({attrs:{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",fill:"currentColor","aria-hidden":"true"}},t.$listeners),[r("path",{attrs:{"fill-rule":"evenodd",d:"M19 10.5a8.5 8.5 0 1 1-17 0 8.5 8.5 0 0 1 17 0zM8.25 9.75A.75.75 0 0 1 9 9h.253a1.75 1.75 0 0 1 1.709 2.13l-.46 2.066a.25.25 0 0 0 .245.304H11a.75.75 0 0 1 0 1.5h-.253a1.75 1.75 0 0 1-1.709-2.13l.46-2.066a.25.25 0 0 0-.245-.304H9a.75.75 0 0 1-.75-.75zM10 7a1 1 0 1 0 0-2 1 1 0 0 0 0 2z","clip-rule":"evenodd"}})])};const be={render:we};var D="top",T="bottom",S="right",j="left",Ct="auto",ft=[D,T,S,j],J="start",it="end",xe="clippingParents",te="viewport",nt="popper",Oe="reference",qt=ft.reduce(function(t,e){return t.concat([e+"-"+J,e+"-"+it])},[]),ee=[].concat(ft,[Ct]).reduce(function(t,e){return t.concat([e,e+"-"+J,e+"-"+it])},[]),Ee="beforeRead",Ae="read",Pe="afterRead",$e="beforeMain",Ce="main",Re="afterMain",De="beforeWrite",je="write",Be="afterWrite",ke=[Ee,Ae,Pe,$e,Ce,Re,De,je,Be];function V(t){return t?(t.nodeName||"").toLowerCase():null}function M(t){if(t==null)return window;if(t.toString()!=="[object Window]"){var e=t.ownerDocument;return e&&e.defaultView||window}return t}function G(t){var e=M(t).Element;return t instanceof e||t instanceof Element}function k(t){var e=M(t).HTMLElement;return t instanceof e||t instanceof HTMLElement}function Rt(t){if(typeof ShadowRoot>"u")return!1;var e=M(t).ShadowRoot;return t instanceof e||t instanceof ShadowRoot}function Te(t){var e=t.state;Object.keys(e.elements).forEach(function(r){var n=e.styles[r]||{},a=e.attributes[r]||{},o=e.elements[r];!k(o)||!V(o)||(Object.assign(o.style,n),Object.keys(a).forEach(function(c){var s=a[c];s===!1?o.removeAttribute(c):o.setAttribute(c,s===!0?"":s)}))})}function Se(t){var e=t.state,r={popper:{position:e.options.strategy,left:"0",top:"0",margin:"0"},arrow:{position:"absolute"},reference:{}};return Object.assign(e.elements.popper.style,r.popper),e.styles=r,e.elements.arrow&&Object.assign(e.elements.arrow.style,r.arrow),function(){Object.keys(e.elements).forEach(function(n){var a=e.elements[n],o=e.attributes[n]||{},c=Object.keys(e.styles.hasOwnProperty(n)?e.styles[n]:r[n]),s=c.reduce(function(i,p){return i[p]="",i},{});!k(a)||!V(a)||(Object.assign(a.style,s),Object.keys(o).forEach(function(i){a.removeAttribute(i)}))})}}const Me={name:"applyStyles",enabled:!0,phase:"write",fn:Te,effect:Se,requires:["computeStyles"]};function H(t){return t.split("-")[0]}var U=Math.max,gt=Math.min,Q=Math.round;function Pt(){var t=navigator.userAgentData;return t!=null&&t.brands?t.brands.map(function(e){return e.brand+"/"+e.version}).join(" "):navigator.userAgent}function re(){return!/^((?!chrome|android).)*safari/i.test(Pt())}function Z(t,e,r){e===void 0&&(e=!1),r===void 0&&(r=!1);var n=t.getBoundingClientRect(),a=1,o=1;e&&k(t)&&(a=t.offsetWidth>0&&Q(n.width)/t.offsetWidth||1,o=t.offsetHeight>0&&Q(n.height)/t.offsetHeight||1);var c=G(t)?M(t):window,s=c.visualViewport,i=!re()&&r,p=(n.left+(i&&s?s.offsetLeft:0))/a,f=(n.top+(i&&s?s.offsetTop:0))/o,v=n.width/a,y=n.height/o;return{width:v,height:y,top:f,right:p+v,bottom:f+y,left:p,x:p,y:f}}function Dt(t){var e=Z(t),r=t.offsetWidth,n=t.offsetHeight;return Math.abs(e.width-r)<=1&&(r=e.width),Math.abs(e.height-n)<=1&&(n=e.height),{x:t.offsetLeft,y:t.offsetTop,width:r,height:n}}function ne(t,e){var r=e.getRootNode&&e.getRootNode();if(t.contains(e))return!0;if(r&&Rt(r)){var n=e;do{if(n&&t.isSameNode(n))return!0;n=n.parentNode||n.host}while(n)}return!1}function N(t){return M(t).getComputedStyle(t)}function Le(t){return["table","td","th"].indexOf(V(t))>=0}function I(t){return((G(t)?t.ownerDocument:t.document)||window.document).documentElement}function yt(t){return V(t)==="html"?t:t.assignedSlot||t.parentNode||(Rt(t)?t.host:null)||I(t)}function zt(t){return!k(t)||N(t).position==="fixed"?null:t.offsetParent}function We(t){var e=/firefox/i.test(Pt()),r=/Trident/i.test(Pt());if(r&&k(t)){var n=N(t);if(n.position==="fixed")return null}var a=yt(t);for(Rt(a)&&(a=a.host);k(a)&&["html","body"].indexOf(V(a))<0;){var o=N(a);if(o.transform!=="none"||o.perspective!=="none"||o.contain==="paint"||["transform","perspective"].indexOf(o.willChange)!==-1||e&&o.willChange==="filter"||e&&o.filter&&o.filter!=="none")return a;a=a.parentNode}return null}function ct(t){for(var e=M(t),r=zt(t);r&&Le(r)&&N(r).position==="static";)r=zt(r);return r&&(V(r)==="html"||V(r)==="body"&&N(r).position==="static")?e:r||We(t)||e}function jt(t){return["top","bottom"].indexOf(t)>=0?"x":"y"}function at(t,e,r){return U(t,gt(e,r))}function He(t,e,r){var n=at(t,e,r);return n>r?r:n}function ae(){return{top:0,right:0,bottom:0,left:0}}function oe(t){return Object.assign({},ae(),t)}function ie(t,e){return e.reduce(function(r,n){return r[n]=t,r},{})}var Ve=function(e,r){return e=typeof e=="function"?e(Object.assign({},r.rects,{placement:r.placement})):e,oe(typeof e!="number"?e:ie(e,ft))};function Ne(t){var e,r=t.state,n=t.name,a=t.options,o=r.elements.arrow,c=r.modifiersData.popperOffsets,s=H(r.placement),i=jt(s),p=[j,S].indexOf(s)>=0,f=p?"height":"width";if(!(!o||!c)){var v=Ve(a.padding,r),y=Dt(o),u=i==="y"?D:j,b=i==="y"?T:S,h=r.rects.reference[f]+r.rects.reference[i]-c[i]-r.rects.popper[f],d=c[i]-r.rects.reference[i],w=ct(o),O=w?i==="y"?w.clientHeight||0:w.clientWidth||0:0,E=h/2-d/2,l=v[u],m=O-y[f]-v[b],g=O/2-y[f]/2+E,x=at(l,g,m),$=i;r.modifiersData[n]=(e={},e[$]=x,e.centerOffset=x-g,e)}}function Fe(t){var e=t.state,r=t.options,n=r.element,a=n===void 0?"[data-popper-arrow]":n;a!=null&&(typeof a=="string"&&(a=e.elements.popper.querySelector(a),!a)||!ne(e.elements.popper,a)||(e.elements.arrow=a))}const Ie={name:"arrow",enabled:!0,phase:"main",fn:Ne,effect:Fe,requires:["popperOffsets"],requiresIfExists:["preventOverflow"]};function tt(t){return t.split("-")[1]}var _e={top:"auto",right:"auto",bottom:"auto",left:"auto"};function qe(t){var e=t.x,r=t.y,n=window,a=n.devicePixelRatio||1;return{x:Q(e*a)/a||0,y:Q(r*a)/a||0}}function Xt(t){var e,r=t.popper,n=t.popperRect,a=t.placement,o=t.variation,c=t.offsets,s=t.position,i=t.gpuAcceleration,p=t.adaptive,f=t.roundOffsets,v=t.isFixed,y=c.x,u=y===void 0?0:y,b=c.y,h=b===void 0?0:b,d=typeof f=="function"?f({x:u,y:h}):{x:u,y:h};u=d.x,h=d.y;var w=c.hasOwnProperty("x"),O=c.hasOwnProperty("y"),E=j,l=D,m=window;if(p){var g=ct(r),x="clientHeight",$="clientWidth";if(g===M(r)&&(g=I(r),N(g).position!=="static"&&s==="absolute"&&(x="scrollHeight",$="scrollWidth")),g=g,a===D||(a===j||a===S)&&o===it){l=T;var P=v&&g===m&&m.visualViewport?m.visualViewport.height:g[x];h-=P-n.height,h*=i?1:-1}if(a===j||(a===D||a===T)&&o===it){E=S;var A=v&&g===m&&m.visualViewport?m.visualViewport.width:g[$];u-=A-n.width,u*=i?1:-1}}var C=Object.assign({position:s},p&&_e),L=f===!0?qe({x:u,y:h}):{x:u,y:h};if(u=L.x,h=L.y,i){var R;return Object.assign({},C,(R={},R[l]=O?"0":"",R[E]=w?"0":"",R.transform=(m.devicePixelRatio||1)<=1?"translate("+u+"px, "+h+"px)":"translate3d("+u+"px, "+h+"px, 0)",R))}return Object.assign({},C,(e={},e[l]=O?h+"px":"",e[E]=w?u+"px":"",e.transform="",e))}function ze(t){var e=t.state,r=t.options,n=r.gpuAcceleration,a=n===void 0?!0:n,o=r.adaptive,c=o===void 0?!0:o,s=r.roundOffsets,i=s===void 0?!0:s,p={placement:H(e.placement),variation:tt(e.placement),popper:e.elements.popper,popperRect:e.rects.popper,gpuAcceleration:a,isFixed:e.options.strategy==="fixed"};e.modifiersData.popperOffsets!=null&&(e.styles.popper=Object.assign({},e.styles.popper,Xt(Object.assign({},p,{offsets:e.modifiersData.popperOffsets,position:e.options.strategy,adaptive:c,roundOffsets:i})))),e.modifiersData.arrow!=null&&(e.styles.arrow=Object.assign({},e.styles.arrow,Xt(Object.assign({},p,{offsets:e.modifiersData.arrow,position:"absolute",adaptive:!1,roundOffsets:i})))),e.attributes.popper=Object.assign({},e.attributes.popper,{"data-popper-placement":e.placement})}const Xe={name:"computeStyles",enabled:!0,phase:"beforeWrite",fn:ze,data:{}};var ht={passive:!0};function Ye(t){var e=t.state,r=t.instance,n=t.options,a=n.scroll,o=a===void 0?!0:a,c=n.resize,s=c===void 0?!0:c,i=M(e.elements.popper),p=[].concat(e.scrollParents.reference,e.scrollParents.popper);return o&&p.forEach(function(f){f.addEventListener("scroll",r.update,ht)}),s&&i.addEventListener("resize",r.update,ht),function(){o&&p.forEach(function(f){f.removeEventListener("scroll",r.update,ht)}),s&&i.removeEventListener("resize",r.update,ht)}}const Ue={name:"eventListeners",enabled:!0,phase:"write",fn:function(){},effect:Ye,data:{}};var Ge={left:"right",right:"left",bottom:"top",top:"bottom"};function mt(t){return t.replace(/left|right|bottom|top/g,function(e){return Ge[e]})}var Ke={start:"end",end:"start"};function Yt(t){return t.replace(/start|end/g,function(e){return Ke[e]})}function Bt(t){var e=M(t),r=e.pageXOffset,n=e.pageYOffset;return{scrollLeft:r,scrollTop:n}}function kt(t){return Z(I(t)).left+Bt(t).scrollLeft}function Je(t,e){var r=M(t),n=I(t),a=r.visualViewport,o=n.clientWidth,c=n.clientHeight,s=0,i=0;if(a){o=a.width,c=a.height;var p=re();(p||!p&&e==="fixed")&&(s=a.offsetLeft,i=a.offsetTop)}return{width:o,height:c,x:s+kt(t),y:i}}function Qe(t){var e,r=I(t),n=Bt(t),a=(e=t.ownerDocument)==null?void 0:e.body,o=U(r.scrollWidth,r.clientWidth,a?a.scrollWidth:0,a?a.clientWidth:0),c=U(r.scrollHeight,r.clientHeight,a?a.scrollHeight:0,a?a.clientHeight:0),s=-n.scrollLeft+kt(t),i=-n.scrollTop;return N(a||r).direction==="rtl"&&(s+=U(r.clientWidth,a?a.clientWidth:0)-o),{width:o,height:c,x:s,y:i}}function Tt(t){var e=N(t),r=e.overflow,n=e.overflowX,a=e.overflowY;return/auto|scroll|overlay|hidden/.test(r+a+n)}function se(t){return["html","body","#document"].indexOf(V(t))>=0?t.ownerDocument.body:k(t)&&Tt(t)?t:se(yt(t))}function ot(t,e){var r;e===void 0&&(e=[]);var n=se(t),a=n===((r=t.ownerDocument)==null?void 0:r.body),o=M(n),c=a?[o].concat(o.visualViewport||[],Tt(n)?n:[]):n,s=e.concat(c);return a?s:s.concat(ot(yt(c)))}function $t(t){return Object.assign({},t,{left:t.x,top:t.y,right:t.x+t.width,bottom:t.y+t.height})}function Ze(t,e){var r=Z(t,!1,e==="fixed");return r.top=r.top+t.clientTop,r.left=r.left+t.clientLeft,r.bottom=r.top+t.clientHeight,r.right=r.left+t.clientWidth,r.width=t.clientWidth,r.height=t.clientHeight,r.x=r.left,r.y=r.top,r}function Ut(t,e,r){return e===te?$t(Je(t,r)):G(e)?Ze(e,r):$t(Qe(I(t)))}function tr(t){var e=ot(yt(t)),r=["absolute","fixed"].indexOf(N(t).position)>=0,n=r&&k(t)?ct(t):t;return G(n)?e.filter(function(a){return G(a)&&ne(a,n)&&V(a)!=="body"}):[]}function er(t,e,r,n){var a=e==="clippingParents"?tr(t):[].concat(e),o=[].concat(a,[r]),c=o[0],s=o.reduce(function(i,p){var f=Ut(t,p,n);return i.top=U(f.top,i.top),i.right=gt(f.right,i.right),i.bottom=gt(f.bottom,i.bottom),i.left=U(f.left,i.left),i},Ut(t,c,n));return s.width=s.right-s.left,s.height=s.bottom-s.top,s.x=s.left,s.y=s.top,s}function fe(t){var e=t.reference,r=t.element,n=t.placement,a=n?H(n):null,o=n?tt(n):null,c=e.x+e.width/2-r.width/2,s=e.y+e.height/2-r.height/2,i;switch(a){case D:i={x:c,y:e.y-r.height};break;case T:i={x:c,y:e.y+e.height};break;case S:i={x:e.x+e.width,y:s};break;case j:i={x:e.x-r.width,y:s};break;default:i={x:e.x,y:e.y}}var p=a?jt(a):null;if(p!=null){var f=p==="y"?"height":"width";switch(o){case J:i[p]=i[p]-(e[f]/2-r[f]/2);break;case it:i[p]=i[p]+(e[f]/2-r[f]/2);break}}return i}function st(t,e){e===void 0&&(e={});var r=e,n=r.placement,a=n===void 0?t.placement:n,o=r.strategy,c=o===void 0?t.strategy:o,s=r.boundary,i=s===void 0?xe:s,p=r.rootBoundary,f=p===void 0?te:p,v=r.elementContext,y=v===void 0?nt:v,u=r.altBoundary,b=u===void 0?!1:u,h=r.padding,d=h===void 0?0:h,w=oe(typeof d!="number"?d:ie(d,ft)),O=y===nt?Oe:nt,E=t.rects.popper,l=t.elements[b?O:y],m=er(G(l)?l:l.contextElement||I(t.elements.popper),i,f,c),g=Z(t.elements.reference),x=fe({reference:g,element:E,strategy:"absolute",placement:a}),$=$t(Object.assign({},E,x)),P=y===nt?$:g,A={top:m.top-P.top+w.top,bottom:P.bottom-m.bottom+w.bottom,left:m.left-P.left+w.left,right:P.right-m.right+w.right},C=t.modifiersData.offset;if(y===nt&&C){var L=C[a];Object.keys(A).forEach(function(R){var _=[S,T].indexOf(R)>=0?1:-1,q=[D,T].indexOf(R)>=0?"y":"x";A[R]+=L[q]*_})}return A}function rr(t,e){e===void 0&&(e={});var r=e,n=r.placement,a=r.boundary,o=r.rootBoundary,c=r.padding,s=r.flipVariations,i=r.allowedAutoPlacements,p=i===void 0?ee:i,f=tt(n),v=f?s?qt:qt.filter(function(b){return tt(b)===f}):ft,y=v.filter(function(b){return p.indexOf(b)>=0});y.length===0&&(y=v);var u=y.reduce(function(b,h){return b[h]=st(t,{placement:h,boundary:a,rootBoundary:o,padding:c})[H(h)],b},{});return Object.keys(u).sort(function(b,h){return u[b]-u[h]})}function nr(t){if(H(t)===Ct)return[];var e=mt(t);return[Yt(t),e,Yt(e)]}function ar(t){var e=t.state,r=t.options,n=t.name;if(!e.modifiersData[n]._skip){for(var a=r.mainAxis,o=a===void 0?!0:a,c=r.altAxis,s=c===void 0?!0:c,i=r.fallbackPlacements,p=r.padding,f=r.boundary,v=r.rootBoundary,y=r.altBoundary,u=r.flipVariations,b=u===void 0?!0:u,h=r.allowedAutoPlacements,d=e.options.placement,w=H(d),O=w===d,E=i||(O||!b?[mt(d)]:nr(d)),l=[d].concat(E).reduce(function(K,F){return K.concat(H(F)===Ct?rr(e,{placement:F,boundary:f,rootBoundary:v,padding:p,flipVariations:b,allowedAutoPlacements:h}):F)},[]),m=e.rects.reference,g=e.rects.popper,x=new Map,$=!0,P=l[0],A=0;A<l.length;A++){var C=l[A],L=H(C),R=tt(C)===J,_=[D,T].indexOf(L)>=0,q=_?"width":"height",B=st(e,{placement:C,boundary:f,rootBoundary:v,altBoundary:y,padding:p}),W=_?R?S:j:R?T:D;m[q]>g[q]&&(W=mt(W));var pt=mt(W),z=[];if(o&&z.push(B[L]<=0),s&&z.push(B[W]<=0,B[pt]<=0),z.every(function(K){return K})){P=C,$=!1;break}x.set(C,z)}if($)for(var ut=b?3:1,wt=function(F){var rt=l.find(function(vt){var X=x.get(vt);if(X)return X.slice(0,F).every(function(bt){return bt})});if(rt)return P=rt,"break"},et=ut;et>0;et--){var lt=wt(et);if(lt==="break")break}e.placement!==P&&(e.modifiersData[n]._skip=!0,e.placement=P,e.reset=!0)}}const or={name:"flip",enabled:!0,phase:"main",fn:ar,requiresIfExists:["offset"],data:{_skip:!1}};function Gt(t,e,r){return r===void 0&&(r={x:0,y:0}),{top:t.top-e.height-r.y,right:t.right-e.width+r.x,bottom:t.bottom-e.height+r.y,left:t.left-e.width-r.x}}function Kt(t){return[D,S,T,j].some(function(e){return t[e]>=0})}function ir(t){var e=t.state,r=t.name,n=e.rects.reference,a=e.rects.popper,o=e.modifiersData.preventOverflow,c=st(e,{elementContext:"reference"}),s=st(e,{altBoundary:!0}),i=Gt(c,n),p=Gt(s,a,o),f=Kt(i),v=Kt(p);e.modifiersData[r]={referenceClippingOffsets:i,popperEscapeOffsets:p,isReferenceHidden:f,hasPopperEscaped:v},e.attributes.popper=Object.assign({},e.attributes.popper,{"data-popper-reference-hidden":f,"data-popper-escaped":v})}const sr={name:"hide",enabled:!0,phase:"main",requiresIfExists:["preventOverflow"],fn:ir};function fr(t,e,r){var n=H(t),a=[j,D].indexOf(n)>=0?-1:1,o=typeof r=="function"?r(Object.assign({},e,{placement:t})):r,c=o[0],s=o[1];return c=c||0,s=(s||0)*a,[j,S].indexOf(n)>=0?{x:s,y:c}:{x:c,y:s}}function cr(t){var e=t.state,r=t.options,n=t.name,a=r.offset,o=a===void 0?[0,0]:a,c=ee.reduce(function(f,v){return f[v]=fr(v,e.rects,o),f},{}),s=c[e.placement],i=s.x,p=s.y;e.modifiersData.popperOffsets!=null&&(e.modifiersData.popperOffsets.x+=i,e.modifiersData.popperOffsets.y+=p),e.modifiersData[n]=c}const pr={name:"offset",enabled:!0,phase:"main",requires:["popperOffsets"],fn:cr};function ur(t){var e=t.state,r=t.name;e.modifiersData[r]=fe({reference:e.rects.reference,element:e.rects.popper,strategy:"absolute",placement:e.placement})}const lr={name:"popperOffsets",enabled:!0,phase:"read",fn:ur,data:{}};function vr(t){return t==="x"?"y":"x"}function dr(t){var e=t.state,r=t.options,n=t.name,a=r.mainAxis,o=a===void 0?!0:a,c=r.altAxis,s=c===void 0?!1:c,i=r.boundary,p=r.rootBoundary,f=r.altBoundary,v=r.padding,y=r.tether,u=y===void 0?!0:y,b=r.tetherOffset,h=b===void 0?0:b,d=st(e,{boundary:i,rootBoundary:p,padding:v,altBoundary:f}),w=H(e.placement),O=tt(e.placement),E=!O,l=jt(w),m=vr(l),g=e.modifiersData.popperOffsets,x=e.rects.reference,$=e.rects.popper,P=typeof h=="function"?h(Object.assign({},e.rects,{placement:e.placement})):h,A=typeof P=="number"?{mainAxis:P,altAxis:P}:Object.assign({mainAxis:0,altAxis:0},P),C=e.modifiersData.offset?e.modifiersData.offset[e.placement]:null,L={x:0,y:0};if(!!g){if(o){var R,_=l==="y"?D:j,q=l==="y"?T:S,B=l==="y"?"height":"width",W=g[l],pt=W+d[_],z=W-d[q],ut=u?-$[B]/2:0,wt=O===J?x[B]:$[B],et=O===J?-$[B]:-x[B],lt=e.elements.arrow,K=u&&lt?Dt(lt):{width:0,height:0},F=e.modifiersData["arrow#persistent"]?e.modifiersData["arrow#persistent"].padding:ae(),rt=F[_],vt=F[q],X=at(0,x[B],K[B]),bt=E?x[B]/2-ut-X-rt-A.mainAxis:wt-X-rt-A.mainAxis,ce=E?-x[B]/2+ut+X+vt+A.mainAxis:et+X+vt+A.mainAxis,xt=e.elements.arrow&&ct(e.elements.arrow),pe=xt?l==="y"?xt.clientTop||0:xt.clientLeft||0:0,Mt=(R=C==null?void 0:C[l])!=null?R:0,ue=W+bt-Mt-pe,le=W+ce-Mt,Lt=at(u?gt(pt,ue):pt,W,u?U(z,le):z);g[l]=Lt,L[l]=Lt-W}if(s){var Wt,ve=l==="x"?D:j,de=l==="x"?T:S,Y=g[m],dt=m==="y"?"height":"width",Ht=Y+d[ve],Vt=Y-d[de],Ot=[D,j].indexOf(w)!==-1,Nt=(Wt=C==null?void 0:C[m])!=null?Wt:0,Ft=Ot?Ht:Y-x[dt]-$[dt]-Nt+A.altAxis,It=Ot?Y+x[dt]+$[dt]-Nt-A.altAxis:Vt,_t=u&&Ot?He(Ft,Y,It):at(u?Ft:Ht,Y,u?It:Vt);g[m]=_t,L[m]=_t-Y}e.modifiersData[n]=L}}const hr={name:"preventOverflow",enabled:!0,phase:"main",fn:dr,requiresIfExists:["offset"]};function mr(t){return{scrollLeft:t.scrollLeft,scrollTop:t.scrollTop}}function gr(t){return t===M(t)||!k(t)?Bt(t):mr(t)}function yr(t){var e=t.getBoundingClientRect(),r=Q(e.width)/t.offsetWidth||1,n=Q(e.height)/t.offsetHeight||1;return r!==1||n!==1}function wr(t,e,r){r===void 0&&(r=!1);var n=k(e),a=k(e)&&yr(e),o=I(e),c=Z(t,a,r),s={scrollLeft:0,scrollTop:0},i={x:0,y:0};return(n||!n&&!r)&&((V(e)!=="body"||Tt(o))&&(s=gr(e)),k(e)?(i=Z(e,!0),i.x+=e.clientLeft,i.y+=e.clientTop):o&&(i.x=kt(o))),{x:c.left+s.scrollLeft-i.x,y:c.top+s.scrollTop-i.y,width:c.width,height:c.height}}function br(t){var e=new Map,r=new Set,n=[];t.forEach(function(o){e.set(o.name,o)});function a(o){r.add(o.name);var c=[].concat(o.requires||[],o.requiresIfExists||[]);c.forEach(function(s){if(!r.has(s)){var i=e.get(s);i&&a(i)}}),n.push(o)}return t.forEach(function(o){r.has(o.name)||a(o)}),n}function xr(t){var e=br(t);return ke.reduce(function(r,n){return r.concat(e.filter(function(a){return a.phase===n}))},[])}function Or(t){var e;return function(){return e||(e=new Promise(function(r){Promise.resolve().then(function(){e=void 0,r(t())})})),e}}function Er(t){var e=t.reduce(function(r,n){var a=r[n.name];return r[n.name]=a?Object.assign({},a,n,{options:Object.assign({},a.options,n.options),data:Object.assign({},a.data,n.data)}):n,r},{});return Object.keys(e).map(function(r){return e[r]})}var Jt={placement:"bottom",modifiers:[],strategy:"absolute"};function Qt(){for(var t=arguments.length,e=new Array(t),r=0;r<t;r++)e[r]=arguments[r];return!e.some(function(n){return!(n&&typeof n.getBoundingClientRect=="function")})}function Ar(t){t===void 0&&(t={});var e=t,r=e.defaultModifiers,n=r===void 0?[]:r,a=e.defaultOptions,o=a===void 0?Jt:a;return function(s,i,p){p===void 0&&(p=o);var f={placement:"bottom",orderedModifiers:[],options:Object.assign({},Jt,o),modifiersData:{},elements:{reference:s,popper:i},attributes:{},styles:{}},v=[],y=!1,u={state:f,setOptions:function(w){var O=typeof w=="function"?w(f.options):w;h(),f.options=Object.assign({},o,f.options,O),f.scrollParents={reference:G(s)?ot(s):s.contextElement?ot(s.contextElement):[],popper:ot(i)};var E=xr(Er([].concat(n,f.options.modifiers)));return f.orderedModifiers=E.filter(function(l){return l.enabled}),b(),u.update()},forceUpdate:function(){if(!y){var w=f.elements,O=w.reference,E=w.popper;if(!!Qt(O,E)){f.rects={reference:wr(O,ct(E),f.options.strategy==="fixed"),popper:Dt(E)},f.reset=!1,f.placement=f.options.placement,f.orderedModifiers.forEach(function(A){return f.modifiersData[A.name]=Object.assign({},A.data)});for(var l=0;l<f.orderedModifiers.length;l++){if(f.reset===!0){f.reset=!1,l=-1;continue}var m=f.orderedModifiers[l],g=m.fn,x=m.options,$=x===void 0?{}:x,P=m.name;typeof g=="function"&&(f=g({state:f,options:$,name:P,instance:u})||f)}}}},update:Or(function(){return new Promise(function(d){u.forceUpdate(),d(f)})}),destroy:function(){h(),y=!0}};if(!Qt(s,i))return u;u.setOptions(p).then(function(d){!y&&p.onFirstUpdate&&p.onFirstUpdate(d)});function b(){f.orderedModifiers.forEach(function(d){var w=d.name,O=d.options,E=O===void 0?{}:O,l=d.effect;if(typeof l=="function"){var m=l({state:f,name:w,instance:u,options:E}),g=function(){};v.push(m||g)}})}function h(){v.forEach(function(d){return d()}),v=[]}return u}}var Pr=[Ue,lr,Xe,Me,pr,or,hr,Ie,sr],$r=Ar({defaultModifiers:Pr});const St={};St.props={type:{key:"type",required:!1,type:null,default:"info"}};St.setup=(t,e)=>{const r=t,n=Et(()=>r.type==="info"?be:he),a=Et(()=>r.type==="info"?"text-indigo-500":"text-red-500"),o=At(!1),c=At(),s=At(),i=Et(()=>{const p=c.value,f=s.value;if(!(!p||!f))return $r(p,f,{placement:"right",modifiers:[{name:"offset",options:{offset:[30,10]}}]})});return me(()=>{var p;(p=i.value)==null||p.destroy()}),ge(o,async p=>{const f=i.value;f&&(f.setOptions(v=>({...v,modifiers:[...v.modifiers||[],{name:"eventListeners",enabled:p}]})),p&&await f.update())}),{dynamicIcon:n,dynamicClass:a,show:o,btnRef:c,tooltipRef:s}};var Cr=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",[r("button",{ref:"btnRef",staticClass:"transition duration-150 focus:outline-none focus:ring",class:t.type==="info"?"rounded-full ring-blue-300":"rounded-sm ring-red-300",attrs:{type:"button"},on:{focus:function(n){t.show=!0},blur:function(n){t.show=!1},mouseenter:function(n){t.show=!0},mouseleave:function(n){t.show=!1},click:function(n){t.show=!t.show}}},[r(t.dynamicIcon,{tag:"Component",staticClass:"h-5 w-5",class:t.dynamicClass})],1),r("div",{ref:"tooltipRef",staticClass:"z-50 w-52 rounded border border-gray-50 bg-white text-left text-sm leading-normal md:w-96",class:{block:t.show,hidden:!t.show}},[r("div",{staticClass:"rounded-md p-3 shadow-md"},[t._t("default")],2)])])},Rr=[];const Zt={};var Dr=ye(St,Cr,Rr,!1,jr,null,null,null);function jr(t){for(let e in Zt)this[e]=Zt[e]}const Tr=function(){return Dr.exports}();export{Tr as T};
