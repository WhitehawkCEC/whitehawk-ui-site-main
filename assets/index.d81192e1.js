const b={allRenderFn:!1,cmpDidLoad:!0,cmpDidUnload:!1,cmpDidUpdate:!0,cmpDidRender:!0,cmpWillLoad:!0,cmpWillUpdate:!0,cmpWillRender:!0,connectedCallback:!0,disconnectedCallback:!0,element:!0,event:!0,hasRenderFn:!0,lifecycle:!0,hostListener:!0,hostListenerTargetWindow:!0,hostListenerTargetDocument:!0,hostListenerTargetBody:!0,hostListenerTargetParent:!1,hostListenerTarget:!0,member:!0,method:!0,mode:!0,observeAttribute:!0,prop:!0,propMutable:!0,reflect:!0,scoped:!0,shadowDom:!0,slot:!0,cssAnnotations:!0,state:!0,style:!0,svg:!0,updatable:!0,vdomAttribute:!0,vdomXlink:!0,vdomClass:!0,vdomFunctional:!0,vdomKey:!0,vdomListener:!0,vdomRef:!0,vdomPropOrAttr:!0,vdomRender:!0,vdomStyle:!0,vdomText:!0,watchCallback:!0,taskQueue:!0,hotModuleReplacement:!1,isDebug:!1,isDev:!1,isTesting:!1,hydrateServerSide:!1,hydrateClientSide:!1,lifecycleDOMEvents:!1,lazyLoad:!1,profile:!1,slotRelocation:!0,appendChildSlotFix:!1,cloneNodeFix:!1,hydratedAttribute:!1,hydratedClass:!0,safari10:!1,scriptDataOpts:!1,scopedSlotTextContentFix:!1,shadowDomShim:!1,slotChildNodesFix:!1,invisiblePrehydration:!0,propBoolean:!0,propNumber:!0,propString:!0,cssVarShim:!1,constructableCSS:!0,cmpShouldUpdate:!0,devTools:!1,dynamicImportShim:!1,shadowDelegatesFocus:!0,initializeNextTick:!1,asyncLoading:!1,asyncQueue:!1,transformTagName:!1,attachStyles:!0};let k,pe,U,$e=!1,P=!1,J=!1,y=!1,V=null,q=!1;const E=typeof window<"u"?window:{};b.cssVarShim&&E.CSS;const x=E.document||{head:{}};E.HTMLElement||class{};const $={$flags$:0,$resourcesUrl$:"",jmp:e=>e(),raf:e=>requestAnimationFrame(e),ael:(e,t,s,a)=>e.addEventListener(t,s,a),rel:(e,t,s,a)=>e.removeEventListener(t,s,a),ce:(e,t)=>new CustomEvent(e,t)},Y=b.shadowDomShim&&b.shadowDom?(()=>(x.head.attachShadow+"").indexOf("[native")>-1)():!0,Ae=(()=>{let e=!1;try{x.addEventListener("e",null,Object.defineProperty({},"passive",{get(){e=!0}}))}catch{}return e})(),Ne=e=>Promise.resolve(e),Oe=b.constructableCSS?(()=>{try{return new CSSStyleSheet,typeof new CSSStyleSheet().replaceSync=="function"}catch{}return!1})():!1,ge=(e,t,s,a)=>{s&&s.map(([o,i,n])=>{const r=Ye(e,o),l=Pe(t,n),u=Re(o);$.ael(r,i,l,u),(t.$rmListeners$=t.$rmListeners$||[]).push(()=>$.rel(r,i,l,u))})},Pe=(e,t)=>s=>{try{b.lazyLoad||e.$hostElement$[t](s)}catch(a){I(a)}},Ye=(e,t)=>t&4?x:t&8?E:t&16?x.body:e,Re=e=>Ae?{passive:(e&1)!==0,capture:(e&2)!==0}:(e&2)!==0,ee="http://www.w3.org/1999/xlink",S=(e,t="")=>()=>{},te=new WeakMap,Be=(e,t,s)=>{let a=j.get(e);Oe&&s?(a=a||new CSSStyleSheet,typeof a=="string"?a=t:a.replaceSync(t)):a=t,j.set(e,a)},je=(e,t,s,a)=>{let o=me(t,s);const i=j.get(o);if(e=e.nodeType===11?e:x,i)if(typeof i=="string"){e=e.head||e;let n=te.get(e),r;n||te.set(e,n=new Set),n.has(o)||(r=x.createElement("style"),r.innerHTML=i,e.insertBefore(r,e.querySelector("link")),n&&n.add(o))}else e.adoptedStyleSheets.includes(i)||(e.adoptedStyleSheets=[...e.adoptedStyleSheets,i]);return o},He=e=>{const t=e.$cmpMeta$,s=e.$hostElement$,a=t.$flags$,o=S("attachStyles",t.$tagName$),i=je(Y&&s.shadowRoot?s.shadowRoot:s.getRootNode(),t,e.$modeName$);a&10&&(s["s-sc"]=i,s.classList.add(i+"-h"),a&2&&s.classList.add(i+"-s")),o()},me=(e,t)=>"sc-"+(t&&e.$flags$&32?e.$tagName$+"-"+t:e.$tagName$),Ue=e=>yt.map(t=>t(e)).find(t=>!!t),se={},Ke="http://www.w3.org/2000/svg",We="http://www.w3.org/1999/xhtml",qe=e=>e!=null,Z=e=>(e=typeof e,e==="object"||e==="function"),d=(e,t,...s)=>{let a=null,o=null,i=null,n=!1,r=!1;const l=[],u=c=>{for(let f=0;f<c.length;f++)a=c[f],Array.isArray(a)?u(a):a!=null&&typeof a!="boolean"&&((n=typeof e!="function"&&!Z(a))&&(a=String(a)),n&&r?l[l.length-1].$text$+=a:l.push(n?R(null,a):a),r=n)};if(u(s),t){t.key&&(o=t.key),t.name&&(i=t.name);{const c=t.className||t.class;c&&(t.class=typeof c!="object"?c:Object.keys(c).filter(f=>c[f]).join(" "))}}if(typeof e=="function")return e(t===null?{}:t,l,Ge);const h=R(e,null);return h.$attrs$=t,l.length>0&&(h.$children$=l),h.$key$=o,h.$name$=i,h},R=(e,t)=>{const s={$flags$:0,$tag$:e,$text$:t,$elm$:null,$children$:null};return s.$attrs$=null,s.$key$=null,s.$name$=null,s},ye={},Xe=e=>e&&e.$tag$===ye,Ge={forEach:(e,t)=>e.map(ae).forEach(t),map:(e,t)=>e.map(ae).map(t).map(Je)},ae=e=>({vattrs:e.$attrs$,vchildren:e.$children$,vkey:e.$key$,vname:e.$name$,vtag:e.$tag$,vtext:e.$text$}),Je=e=>{if(typeof e.vtag=="function"){const s=Object.assign({},e.vattrs);return e.vkey&&(s.key=e.vkey),e.vname&&(s.name=e.vname),d(e.vtag,s,...e.vchildren||[])}const t=R(e.vtag,e.vtext);return t.$attrs$=e.vattrs,t.$children$=e.vchildren,t.$key$=e.vkey,t.$name$=e.vname,t},oe=(e,t,s,a,o,i)=>{if(s!==a){let n=le(e,t),r=t.toLowerCase();if(t==="class"){const l=e.classList,u=ie(s),h=ie(a);l.remove(...u.filter(c=>c&&!h.includes(c))),l.add(...h.filter(c=>c&&!u.includes(c)))}else if(t==="style"){for(const l in s)(!a||a[l]==null)&&(l.includes("-")?e.style.removeProperty(l):e.style[l]="");for(const l in a)(!s||a[l]!==s[l])&&(l.includes("-")?e.style.setProperty(l,a[l]):e.style[l]=a[l])}else if(t!=="key")if(t==="ref")a&&a(e);else if(!e.__lookupSetter__(t)&&t[0]==="o"&&t[1]==="n")t[2]==="-"?t=t.slice(3):le(E,r)?t=r.slice(2):t=r[2]+t.slice(3),s&&$.rel(e,t,s,!1),a&&$.ael(e,t,a,!1);else{const l=Z(a);if((n||l&&a!==null)&&!o)try{if(e.tagName.includes("-"))e[t]=a;else{const h=a==null?"":a;t==="list"?n=!1:(s==null||e[t]!=h)&&(e[t]=h)}}catch{}let u=!1;r!==(r=r.replace(/^xlink\:?/,""))&&(t=r,u=!0),a==null||a===!1?(a!==!1||e.getAttribute(t)==="")&&(u?e.removeAttributeNS(ee,t):e.removeAttribute(t)):(!n||i&4||o)&&!l&&(a=a===!0?"":a,u?e.setAttributeNS(ee,t,a):e.setAttribute(t,a))}}},Ze=/\s/,ie=e=>e?e.split(Ze):[],be=(e,t,s,a)=>{const o=t.$elm$.nodeType===11&&t.$elm$.host?t.$elm$.host:t.$elm$,i=e&&e.$attrs$||se,n=t.$attrs$||se;for(a in i)a in n||oe(o,a,i[a],void 0,s,t.$flags$);for(a in n)oe(o,a,i[a],n[a],s,t.$flags$)},B=(e,t,s,a)=>{const o=t.$children$[s];let i=0,n,r,l;if($e||(J=!0,o.$tag$==="slot"&&(k&&a.classList.add(k+"-s"),o.$flags$|=o.$children$?2:1)),o.$text$!==null)n=o.$elm$=x.createTextNode(o.$text$);else if(o.$flags$&1)n=o.$elm$=x.createTextNode("");else{if(y||(y=o.$tag$==="svg"),n=o.$elm$=x.createElementNS(y?Ke:We,o.$flags$&2?"slot-fb":o.$tag$),y&&o.$tag$==="foreignObject"&&(y=!1),be(null,o,y),qe(k)&&n["s-si"]!==k&&n.classList.add(n["s-si"]=k),o.$children$)for(i=0;i<o.$children$.length;++i)r=B(e,o,i,n),r&&n.appendChild(r);o.$tag$==="svg"?y=!1:n.tagName==="foreignObject"&&(y=!0)}return n["s-hn"]=U,o.$flags$&3&&(n["s-sr"]=!0,n["s-cr"]=pe,n["s-sn"]=o.$name$||"",l=e&&e.$children$&&e.$children$[s],l&&l.$tag$===o.$tag$&&e.$elm$&&C(e.$elm$,!1)),n},C=(e,t)=>{$.$flags$|=1;const s=e.childNodes;for(let a=s.length-1;a>=0;a--){const o=s[a];o["s-hn"]!==U&&o["s-ol"]&&(xe(o).insertBefore(o,Q(o)),o["s-ol"].remove(),o["s-ol"]=void 0,J=!0),t&&C(o,t)}$.$flags$&=-2},ve=(e,t,s,a,o,i)=>{let n=e["s-cr"]&&e["s-cr"].parentNode||e,r;for(n.shadowRoot&&n.tagName===U&&(n=n.shadowRoot);o<=i;++o)a[o]&&(r=B(null,s,o,e),r&&(a[o].$elm$=r,n.insertBefore(r,Q(t))))},_e=(e,t,s,a,o)=>{for(;t<=s;++t)(a=e[t])&&(o=a.$elm$,Se(a),P=!0,o["s-ol"]?o["s-ol"].remove():C(o,!0),o.remove())},Qe=(e,t,s,a)=>{let o=0,i=0,n=0,r=0,l=t.length-1,u=t[0],h=t[l],c=a.length-1,f=a[0],p=a[c],m,g;for(;o<=l&&i<=c;)if(u==null)u=t[++o];else if(h==null)h=t[--l];else if(f==null)f=a[++i];else if(p==null)p=a[--c];else if(z(u,f))T(u,f),u=t[++o],f=a[++i];else if(z(h,p))T(h,p),h=t[--l],p=a[--c];else if(z(u,p))(u.$tag$==="slot"||p.$tag$==="slot")&&C(u.$elm$.parentNode,!1),T(u,p),e.insertBefore(u.$elm$,h.$elm$.nextSibling),u=t[++o],p=a[--c];else if(z(h,f))(u.$tag$==="slot"||p.$tag$==="slot")&&C(h.$elm$.parentNode,!1),T(h,f),e.insertBefore(h.$elm$,u.$elm$),h=t[--l],f=a[++i];else{for(n=-1,r=o;r<=l;++r)if(t[r]&&t[r].$key$!==null&&t[r].$key$===f.$key$){n=r;break}n>=0?(g=t[n],g.$tag$!==f.$tag$?m=B(t&&t[i],s,n,e):(T(g,f),t[n]=void 0,m=g.$elm$),f=a[++i]):(m=B(t&&t[i],s,i,e),f=a[++i]),m&&xe(u.$elm$).insertBefore(m,Q(u.$elm$))}o>l?ve(e,a[c+1]==null?null:a[c+1].$elm$,s,a,i,c):i>c&&_e(t,o,l)},z=(e,t)=>e.$tag$===t.$tag$?e.$tag$==="slot"?e.$name$===t.$name$:e.$key$===t.$key$:!1,Q=e=>e&&e["s-ol"]||e,xe=e=>(e["s-ol"]?e["s-ol"]:e).parentNode,T=(e,t)=>{const s=t.$elm$=e.$elm$,a=e.$children$,o=t.$children$,i=t.$tag$,n=t.$text$;let r;n===null?(y=i==="svg"?!0:i==="foreignObject"?!1:y,i==="slot"||be(e,t,y),a!==null&&o!==null?Qe(s,a,t,o):o!==null?(e.$text$!==null&&(s.textContent=""),ve(s,null,t,o,0,o.length-1)):a!==null&&_e(a,0,a.length-1),y&&i==="svg"&&(y=!1)):(r=s["s-cr"])?r.parentNode.textContent=n:e.$text$!==n&&(s.data=n)},we=e=>{const t=e.childNodes;let s,a,o,i,n,r;for(a=0,o=t.length;a<o;a++)if(s=t[a],s.nodeType===1){if(s["s-sr"]){for(n=s["s-sn"],s.hidden=!1,i=0;i<o;i++)if(r=t[i].nodeType,t[i]["s-hn"]!==s["s-hn"]||n!==""){if(r===1&&n===t[i].getAttribute("slot")){s.hidden=!0;break}}else if(r===1||r===3&&t[i].textContent.trim()!==""){s.hidden=!0;break}}we(s)}},_=[],De=e=>{let t,s,a,o,i,n,r=0;const l=e.childNodes,u=l.length;for(;r<u;r++){if(t=l[r],t["s-sr"]&&(s=t["s-cr"])&&s.parentNode)for(a=s.parentNode.childNodes,o=t["s-sn"],n=a.length-1;n>=0;n--)s=a[n],!s["s-cn"]&&!s["s-nr"]&&s["s-hn"]!==t["s-hn"]&&(ne(s,o)?(i=_.find(h=>h.$nodeToRelocate$===s),P=!0,s["s-sn"]=s["s-sn"]||o,i?i.$slotRefNode$=t:_.push({$slotRefNode$:t,$nodeToRelocate$:s}),s["s-sr"]&&_.map(h=>{ne(h.$nodeToRelocate$,s["s-sn"])&&(i=_.find(c=>c.$nodeToRelocate$===s),i&&!h.$slotRefNode$&&(h.$slotRefNode$=i.$slotRefNode$))})):_.some(h=>h.$nodeToRelocate$===s)||_.push({$nodeToRelocate$:s}));t.nodeType===1&&De(t)}},ne=(e,t)=>e.nodeType===1?e.getAttribute("slot")===null&&t===""||e.getAttribute("slot")===t:e["s-sn"]===t?!0:t==="",Se=e=>{e.$attrs$&&e.$attrs$.ref&&e.$attrs$.ref(null),e.$children$&&e.$children$.map(Se)},Ve=(e,t)=>{const s=e.$hostElement$,a=e.$cmpMeta$,o=e.$vnode$||R(null,null),i=Xe(t)?t:d(null,null,t);U=s.tagName,a.$attrsToReflect$&&(i.$attrs$=i.$attrs$||{},a.$attrsToReflect$.map(([n,r])=>i.$attrs$[r]=s[n])),i.$tag$=null,i.$flags$|=4,e.$vnode$=i,i.$elm$=o.$elm$=s.shadowRoot||s,k=s["s-sc"],pe=s["s-cr"],$e=Y&&(a.$flags$&1)!==0,P=!1,T(o,i);{if($.$flags$|=1,J){De(i.$elm$);let n,r,l,u,h,c,f=0;for(;f<_.length;f++)n=_[f],r=n.$nodeToRelocate$,r["s-ol"]||(l=x.createTextNode(""),l["s-nr"]=r,r.parentNode.insertBefore(r["s-ol"]=l,r));for(f=0;f<_.length;f++)if(n=_[f],r=n.$nodeToRelocate$,n.$slotRefNode$){for(u=n.$slotRefNode$.parentNode,h=n.$slotRefNode$.nextSibling,l=r["s-ol"];l=l.previousSibling;)if(c=l["s-nr"],c&&c["s-sn"]===r["s-sn"]&&u===c.parentNode&&(c=c.nextSibling,!c||!c["s-nr"])){h=c;break}(!h&&u!==r.parentNode||r.nextSibling!==h)&&r!==h&&(!r["s-hn"]&&r["s-ol"]&&(r["s-hn"]=r["s-ol"].parentNode.nodeName),u.insertBefore(r,h))}else r.nodeType===1&&(r.hidden=!0)}P&&we(i.$elm$),$.$flags$&=-2,_.length=0}},et=e=>e,L=(e,t,s)=>{const a=et(e);return{emit:o=>tt(a,t,{bubbles:!!(s&4),composed:!!(s&2),cancelable:!!(s&1),detail:o})}},tt=(e,t,s)=>{const a=$.ce(t,s);return e.dispatchEvent(a),a},st=(e,t)=>{},ke=(e,t)=>(e.$flags$|=16,st(e,e.$ancestorComponent$),_t(()=>at(e,t))),at=(e,t)=>{const s=e.$hostElement$,a=S("scheduleUpdate",e.$cmpMeta$.$tagName$),o=s;let i;return t?i=M(o,"componentWillLoad"):i=M(o,"componentWillUpdate"),i=re(i,()=>M(o,"componentWillRender")),a(),re(i,()=>ot(e,o,t))},ot=async(e,t,s)=>{const a=e.$hostElement$,o=S("update",e.$cmpMeta$.$tagName$);a["s-rc"],s&&He(e);const i=S("render",e.$cmpMeta$.$tagName$);it(e,t,a),i(),o(),nt(e)},it=(e,t,s)=>{try{V=t,t=t.render&&t.render(),e.$flags$&=-17,e.$flags$|=2,(b.hasRenderFn||b.reflect)&&(b.vdomRender||b.reflect)&&(b.hydrateServerSide||Ve(e,t))}catch(r){I(r,e.$hostElement$)}return V=null,null},nt=e=>{const t=e.$cmpMeta$.$tagName$,s=e.$hostElement$,a=S("postUpdate",t),o=s;e.$ancestorComponent$,M(o,"componentDidRender"),e.$flags$&64?(M(o,"componentDidUpdate"),a()):(e.$flags$|=64,M(o,"componentDidLoad"),a())},M=(e,t,s)=>{if(e&&e[t])try{return e[t](s)}catch(a){I(a)}},re=(e,t)=>e&&e.then?e.then(t):t(),rt=(e,t)=>e!=null&&!Z(e)?t&4?e==="false"?!1:e===""||!!e:t&2?parseFloat(e):t&1?String(e):e:e,lt=(e,t)=>K(e).$instanceValues$.get(t),dt=(e,t,s,a)=>{const o=K(e),i=e,n=o.$instanceValues$.get(t),r=o.$flags$,l=i;s=rt(s,a.$members$[t][0]);const u=Number.isNaN(n)&&Number.isNaN(s);if(s!==n&&!u){o.$instanceValues$.set(t,s);{if(a.$watchers$&&r&128){const c=a.$watchers$[t];c&&c.map(f=>{try{l[f](s,n,t)}catch(p){I(p,i)}})}if((r&18)===2){if(l.componentShouldUpdate&&l.componentShouldUpdate(s,n,t)===!1)return;ke(o,!1)}}}},ct=(e,t,s)=>{if(t.$members$){e.watchers&&(t.$watchers$=e.watchers);const a=Object.entries(t.$members$),o=e.prototype;a.map(([i,[n]])=>{(n&31||n&32)&&Object.defineProperty(o,i,{get(){return lt(this,i)},set(r){dt(this,i,r,t)},configurable:!0,enumerable:!0})});{const i=new Map;o.attributeChangedCallback=function(n,r,l){$.jmp(()=>{const u=i.get(n);if(this.hasOwnProperty(u))l=this[u],delete this[u];else if(o.hasOwnProperty(u)&&typeof this[u]=="number"&&this[u]==l)return;this[u]=l===null&&typeof this[u]=="boolean"?!1:l})},e.observedAttributes=a.filter(([n,r])=>r[0]&15).map(([n,r])=>{const l=r[1]||n;return i.set(l,n),r[0]&512&&t.$attrsToReflect$.push([n,l]),l})}}return e},ut=async(e,t,s,a,o)=>{if((t.$flags$&32)===0&&(o=e.constructor,t.$flags$|=32,customElements.whenDefined(s.$tagName$).then(()=>t.$flags$|=128),o.style)){let n=o.style;typeof n!="string"&&(n=n[t.$modeName$=Ue(e)]);const r=me(s,t.$modeName$);if(!j.has(r)){const l=S("registerStyles",s.$tagName$);Be(r,n,!!(s.$flags$&1)),l()}}t.$ancestorComponent$,(()=>ke(t,!0))()},ht=e=>{},ft=e=>{if(($.$flags$&1)===0){const t=K(e),s=t.$cmpMeta$,a=S("connectedCallback",s.$tagName$);t.$flags$&1?(ge(e,t,s.$listeners$),ht(t.$lazyInstance$)):(t.$flags$|=1,s.$flags$&12&&pt(e),s.$members$&&Object.entries(s.$members$).map(([o,[i]])=>{if(i&31&&e.hasOwnProperty(o)){const n=e[o];delete e[o],e[o]=n}}),ut(e,t,s)),a()}},pt=e=>{const t=e["s-cr"]=x.createComment("");t["s-cn"]=!0,e.insertBefore(t,e.firstChild)},$t=e=>{if(($.$flags$&1)===0){const t=K(e);t.$rmListeners$&&(t.$rmListeners$.map(s=>s()),t.$rmListeners$=void 0)}},gt=(e,t)=>{const s={$flags$:t[0],$tagName$:t[1]};s.$members$=t[2],s.$listeners$=t[3],s.$watchers$=e.$watchers$,s.$attrsToReflect$=[],!Y&&s.$flags$&1&&(s.$flags$|=8);const a=e.prototype.connectedCallback,o=e.prototype.disconnectedCallback;return Object.assign(e.prototype,{__registerHost(){mt(this,s)},connectedCallback(){ft(this),a&&a.call(this)},disconnectedCallback(){$t(this),o&&o.call(this)},__attachShadow(){Y?this.attachShadow({mode:"open",delegatesFocus:!!(s.$flags$&16)}):this.shadowRoot=this}}),e.is=s.$tagName$,ct(e,s)},Pt=e=>$.$resourcesUrl$=e,Yt=e=>Object.assign($,e),Te=new WeakMap,K=e=>Te.get(e),mt=(e,t)=>{const s={$flags$:0,$hostElement$:e,$cmpMeta$:t,$instanceValues$:new Map};return ge(e,s,t.$listeners$),Te.set(e,s)},le=(e,t)=>t in e,I=(e,t)=>(0,console.error)(e,t);b.isTesting;const j=new Map,yt=[],de=[],Me=[],bt=(e,t)=>s=>{e.push(s),q||(q=!0,t&&$.$flags$&4?vt(X):$.raf(X))},ce=e=>{for(let t=0;t<e.length;t++)try{e[t](performance.now())}catch(s){I(s)}e.length=0},X=()=>{ce(de),ce(Me),(q=de.length>0)&&$.raf(X)},vt=e=>Ne().then(e),_t=bt(Me,!0);b.isDev,b.isTesting;const xt=/^(\d{4})-(\d{2})-(\d{2})$/;var F;(function(e){e[e.Sunday=0]="Sunday",e[e.Monday=1]="Monday",e[e.Tuesday=2]="Tuesday",e[e.Wednesday=3]="Wednesday",e[e.Thursday=4]="Thursday",e[e.Friday=5]="Friday",e[e.Saturday=6]="Saturday"})(F||(F={}));function Fe(e,t,s){var a=parseInt(s,10),o=parseInt(t,10),i=parseInt(e,10);if(Number.isInteger(i)&&Number.isInteger(o)&&Number.isInteger(a)&&o>0&&o<=12&&a>0&&a<=31&&i>0)return new Date(i,o-1,a)}function w(e){if(!e)return;const t=e.match(xt);if(t)return Fe(t[1],t[2],t[3])}function Le(e){if(!e)return"";var t=e.getDate().toString(10),s=(e.getMonth()+1).toString(10),a=e.getFullYear().toString(10);return e.getDate()<10&&(t=`0${t}`),e.getMonth()<9&&(s=`0${s}`),`${a}-${s}-${t}`}function H(e,t){return e==null||t==null?!1:Ce(e,t)&&e.getDate()===t.getDate()}function Ce(e,t){return e==null||t==null?!1:e.getFullYear()===t.getFullYear()&&e.getMonth()===t.getMonth()}function Ee(e,t){var s=new Date(e);return s.setDate(s.getDate()+t),s}function Ie(e,t=F.Monday){var s=new Date(e),a=s.getDay(),o=(a<t?7:0)+a-t;return s.setDate(s.getDate()-o),s}function ze(e,t=F.Monday){var s=new Date(e),a=s.getDay(),o=(a<t?-7:0)+6-(a-t);return s.setDate(s.getDate()+o),s}function A(e){return new Date(e.getFullYear(),e.getMonth(),1)}function N(e){return new Date(e.getFullYear(),e.getMonth()+1,0)}function ue(e,t){const s=new Date(e);return s.setMonth(t),s}function he(e,t){const s=new Date(e);return s.setFullYear(t),s}function G(e,t,s){return O(e,t,s)===e}function O(e,t,s){const a=e.getTime();return t&&t instanceof Date&&a<t.getTime()?t:s&&s instanceof Date&&a>s.getTime()?s:e}function wt(e,t){const s=[];let a=e;for(;!H(a,t);)s.push(a),a=Ee(a,1);return s.push(a),s}function Dt(e,t=F.Monday){const s=Ie(A(e),t),a=ze(N(e),t);return wt(s,a)}function D(){return Math.random().toString(16).slice(-4)}function W(e){return`${e}-${D()}${D()}-${D()}-${D()}-${D()}-${D()}${D()}${D()}`}const St=({onClick:e,dateFormatter:t,localization:s,name:a,formattedValue:o,valueAsDate:i,value:n,identifier:r,disabled:l,required:u,role:h,buttonRef:c,inputRef:f,onInput:p,onBlur:m,onFocus:g})=>d("div",{class:"duet-date__input-wrapper"},d("input",{class:"duet-date__input",value:o,placeholder:s.placeholder,id:r,disabled:l,role:h,required:u?!0:void 0,"aria-autocomplete":"none",onInput:p,onFocus:g,onBlur:m,autoComplete:"off",ref:f}),d("input",{type:"hidden",name:a,value:n}),d("button",{class:"duet-date__toggle",onClick:e,disabled:l,ref:c,type:"button"},d("span",{class:"duet-date__toggle-icon"},d("svg",{"aria-hidden":"true",height:"24",viewBox:"0 0 21 21",width:"24",xmlns:"http://www.w3.org/2000/svg"},d("g",{fill:"none","fill-rule":"evenodd",transform:"translate(2 2)"},d("path",{d:"m2.5.5h12c1.1045695 0 2 .8954305 2 2v12c0 1.1045695-.8954305 2-2 2h-12c-1.1045695 0-2-.8954305-2-2v-12c0-1.1045695.8954305-2 2-2z",stroke:"currentColor","stroke-linecap":"round","stroke-linejoin":"round"}),d("path",{d:"m.5 4.5h16",stroke:"currentColor","stroke-linecap":"round","stroke-linejoin":"round"}),d("g",{fill:"currentColor"},d("circle",{cx:"8.5",cy:"8.5",r:"1"}),d("circle",{cx:"4.5",cy:"8.5",r:"1"}),d("circle",{cx:"12.5",cy:"8.5",r:"1"}),d("circle",{cx:"8.5",cy:"12.5",r:"1"}),d("circle",{cx:"4.5",cy:"12.5",r:"1"}),d("circle",{cx:"12.5",cy:"12.5",r:"1"}))))),d("span",{class:"duet-date__vhidden"},s.buttonLabel,i&&d("span",null,", ",s.selectedDateMessage," ",t.format(i))))),kt=({focusedDay:e,today:t,day:s,onDaySelect:a,onKeyboardNavigation:o,focusedDayRef:i,disabled:n,inRange:r,isSelected:l,dateFormatter:u})=>{const h=H(s,t),c=Ce(s,e),f=H(s,e),p=!r;function m(g){a(g,s)}return d("button",{class:{"duet-date__day":!0,"is-outside":p,"is-today":h,"is-month":c,"is-disabled":n},tabIndex:f?0:-1,onClick:m,onKeyDown:o,"aria-disabled":n?"true":void 0,disabled:p,type:"button","aria-pressed":l?"true":"false",ref:g=>{f&&g&&i&&i(g)}},d("span",{"aria-hidden":"true"},s.getDate()),d("span",{class:"duet-date__vhidden"},u.format(s)))};function Tt(e,t){const s=[];for(let a=0;a<e.length;a+=t)s.push(e.slice(a,a+t));return s}function Mt(e,t,s){return e.map((a,o)=>{const i=(o+t)%e.length;return s(e[i])})}const Ft=({selectedDate:e,focusedDate:t,labelledById:s,localization:a,firstDayOfWeek:o,min:i,max:n,dateFormatter:r,isDateDisabled:l,onDateSelect:u,onKeyboardNavigation:h,focusedDayRef:c})=>{const f=new Date,p=Dt(t,o);return d("table",{class:"duet-date__table","aria-labelledby":s},d("thead",null,d("tr",null,Mt(a.dayNames,o,m=>d("th",{class:"duet-date__table-header",scope:"col"},d("span",{"aria-hidden":"true"},m.substr(0,2)),d("span",{class:"duet-date__vhidden"},m))))),d("tbody",null,Tt(p,7).map(m=>d("tr",{class:"duet-date__row"},m.map(g=>d("td",{class:"duet-date__cell"},d(kt,{day:g,today:f,focusedDay:t,isSelected:H(g,e),disabled:l(g),inRange:G(g,i,n),onDaySelect:u,dateFormatter:r,onKeyboardNavigation:h,focusedDayRef:c})))))))},Lt={buttonLabel:"Choose date",placeholder:"YYYY-MM-DD",selectedDateMessage:"Selected date is",prevMonthLabel:"Previous month",nextMonthLabel:"Next month",monthSelectLabel:"Month",yearSelectLabel:"Year",closeLabel:"Close window",calendarHeading:"Choose a date",dayNames:["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"],monthNames:["January","February","March","April","May","June","July","August","September","October","November","December"],monthNamesShort:["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],locale:"en-GB"},Ct={parse:w,format:Le},Et='.duet-date *,.duet-date *::before,.duet-date *::after{box-sizing:border-box;margin:0;width:auto}.duet-date{box-sizing:border-box;color:var(--duet-color-text);display:block;font-family:var(--duet-font);margin:0;position:relative;text-align:left;width:100%}.duet-date__input{-webkit-appearance:none;appearance:none;background:var(--duet-color-surface);border:1px solid var(--duet-color-border, var(--duet-color-text));border-radius:var(--duet-radius);color:var(--duet-color-text);float:none;font-family:var(--duet-font);font-size:100%;line-height:normal;padding:14px 60px 14px 14px;width:100%}.duet-date__input:focus{border-color:var(--duet-color-primary);box-shadow:0 0 0 1px var(--duet-color-primary);outline:0}.duet-date__input::-webkit-input-placeholder{color:var(--duet-color-placeholder);opacity:1}.duet-date__input:-moz-placeholder{color:var(--duet-color-placeholder);opacity:1}.duet-date__input:-ms-input-placeholder{color:var(--duet-color-placeholder)}.duet-date__input-wrapper{position:relative;width:100%}.duet-date__toggle{-moz-appearance:none;-webkit-appearance:none;-webkit-user-select:none;align-items:center;appearance:none;background:var(--duet-color-button);border:0;border-radius:0;border-bottom-right-radius:var(--duet-radius);border-top-right-radius:var(--duet-radius);box-shadow:inset 1px 0 0 rgba(0, 0, 0, 0.1);color:var(--duet-color-text);cursor:pointer;display:flex;height:calc(100% - 2px);justify-content:center;padding:0;position:absolute;right:1px;top:1px;user-select:none;width:48px;z-index:2}.duet-date__toggle:focus{box-shadow:0 0 0 2px var(--duet-color-primary);outline:0}.duet-date__toggle-icon{display:flex;flex-basis:100%;justify-content:center;align-items:center}.duet-date__dialog{display:flex;left:0;min-width:320px;opacity:0;position:absolute;top:100%;transform:scale(0.96) translateZ(0) translateY(-20px);transform-origin:top right;transition:transform 300ms ease, opacity 300ms ease, visibility 300ms ease;visibility:hidden;width:100%;will-change:transform, opacity, visibility;z-index:var(--duet-z-index)}@media (max-width: 35.9375em){.duet-date__dialog{background:var(--duet-color-overlay);bottom:0;position:fixed;right:0;top:0;transform:translateZ(0);transform-origin:bottom center}}.duet-date__dialog.is-left{left:auto;right:0;width:auto}.duet-date__dialog.is-active{opacity:1;transform:scale(1.0001) translateZ(0) translateY(0);visibility:visible}.duet-date__dialog-content{background:var(--duet-color-surface);border:1px solid rgba(0, 0, 0, 0.1);border-radius:var(--duet-radius);box-shadow:0 4px 10px 0 rgba(0, 0, 0, 0.1);margin-left:auto;margin-top:8px;max-width:310px;min-width:290px;padding:16px 16px 20px;position:relative;transform:none;width:100%;z-index:var(--duet-z-index)}@media (max-width: 35.9375em){.duet-date__dialog-content{border:0;border-radius:0;border-top-left-radius:var(--duet-radius);border-top-right-radius:var(--duet-radius);bottom:0;left:0;margin:0;max-width:none;min-height:26em;opacity:0;padding:0 8% 20px;position:absolute;transform:translateZ(0) translateY(100%);transition:transform 400ms ease, opacity 400ms ease, visibility 400ms ease;visibility:hidden;will-change:transform, opacity, visibility}.is-active .duet-date__dialog-content{opacity:1;transform:translateZ(0) translateY(0);visibility:visible}}.duet-date__table{border-collapse:collapse;border-spacing:0;color:var(--duet-color-text);font-size:1rem;font-weight:var(--duet-font-normal);line-height:1.25;text-align:center;width:100%}.duet-date__table-header{font-size:0.75rem;font-weight:var(--duet-font-bold);letter-spacing:1px;line-height:1.25;padding-bottom:8px;text-decoration:none;text-transform:uppercase}.duet-date__cell{text-align:center}.duet-date__day{-moz-appearance:none;-webkit-appearance:none;appearance:none;background:transparent;border:0;border-radius:50%;color:var(--duet-color-text);cursor:pointer;display:inline-block;font-family:var(--duet-font);font-size:0.875rem;font-variant-numeric:tabular-nums;font-weight:var(--duet-font-normal);height:36px;line-height:1.25;padding:0 0 1px;position:relative;text-align:center;vertical-align:middle;width:36px;z-index:1}.duet-date__day.is-today{box-shadow:0 0 0 1px var(--duet-color-primary);position:relative;z-index:200}.duet-date__day:hover::before,.duet-date__day.is-today::before{background:var(--duet-color-primary);border-radius:50%;bottom:0;content:"";left:0;opacity:0.06;position:absolute;right:0;top:0}.duet-date__day[aria-pressed=true],.duet-date__day:focus{background:var(--duet-color-primary);box-shadow:none;color:var(--duet-color-text-active);outline:0}.duet-date__day:active{background:var(--duet-color-primary);box-shadow:0 0 5px var(--duet-color-primary);color:var(--duet-color-text-active);z-index:200}.duet-date__day:focus{box-shadow:0 0 5px var(--duet-color-primary);z-index:200}.duet-date__day:not(.is-month){box-shadow:none}.duet-date__day:not(.is-month),.duet-date__day[aria-disabled=true]{background:transparent;color:var(--duet-color-text);cursor:default;opacity:0.5}.duet-date__day[aria-disabled=true].is-today{box-shadow:0 0 0 1px var(--duet-color-primary)}.duet-date__day[aria-disabled=true].is-today:focus{box-shadow:0 0 5px var(--duet-color-primary);background:var(--duet-color-primary);color:var(--duet-color-text-active)}.duet-date__day[aria-disabled=true]:not(.is-today)::before{display:none}.duet-date__day.is-outside{background:var(--duet-color-button);box-shadow:none;color:var(--duet-color-text);cursor:default;opacity:0.6;pointer-events:none}.duet-date__day.is-outside::before{display:none}.duet-date__header{align-items:center;display:flex;justify-content:space-between;margin-bottom:16px;width:100%}.duet-date__nav{white-space:nowrap}.duet-date__prev,.duet-date__next{-moz-appearance:none;-webkit-appearance:none;align-items:center;appearance:none;background:var(--duet-color-button);border:0;border-radius:50%;color:var(--duet-color-text);cursor:pointer;display:inline-flex;height:32px;justify-content:center;margin-left:8px;padding:0;transition:background-color 300ms ease;width:32px}@media (max-width: 35.9375em){.duet-date__prev,.duet-date__next{height:40px;width:40px}}.duet-date__prev:focus,.duet-date__next:focus{box-shadow:0 0 0 2px var(--duet-color-primary);outline:0}.duet-date__prev:active:focus,.duet-date__next:active:focus{box-shadow:none}.duet-date__prev:disabled,.duet-date__next:disabled{cursor:default;opacity:0.5}.duet-date__prev svg,.duet-date__next svg{margin:0 auto}.duet-date__select{display:inline-flex;margin-top:4px;position:relative}.duet-date__select span{margin-right:4px}.duet-date__select select{cursor:pointer;font-size:1rem;height:100%;left:0;opacity:0;position:absolute;top:0;width:100%;z-index:2}.duet-date__select select:focus+.duet-date__select-label{box-shadow:0 0 0 2px var(--duet-color-primary)}.duet-date__select-label{align-items:center;border-radius:var(--duet-radius);color:var(--duet-color-text);display:flex;font-size:1.25rem;font-weight:var(--duet-font-bold);line-height:1.25;padding:0 4px 0 8px;pointer-events:none;position:relative;width:100%;z-index:1}.duet-date__select-label svg{width:16px;height:16px}.duet-date__mobile{align-items:center;border-bottom:1px solid rgba(0, 0, 0, 0.12);display:flex;justify-content:space-between;margin-bottom:20px;margin-left:-10%;overflow:hidden;padding:12px 20px;position:relative;text-overflow:ellipsis;white-space:nowrap;width:120%}@media (min-width: 36em){.duet-date__mobile{border:0;margin:0;overflow:visible;padding:0;position:absolute;right:-8px;top:-8px;width:auto}}.duet-date__mobile-heading{display:inline-block;font-weight:var(--duet-font-bold);max-width:84%;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}@media (min-width: 36em){.duet-date__mobile-heading{display:none}}.duet-date__close{-webkit-appearance:none;align-items:center;appearance:none;background:var(--duet-color-button);border:0;border-radius:50%;color:var(--duet-color-text);cursor:pointer;display:flex;height:24px;justify-content:center;padding:0;width:24px}@media (min-width: 36em){.duet-date__close{opacity:0}}.duet-date__close:focus{box-shadow:0 0 0 2px var(--duet-color-primary);outline:none}@media (min-width: 36em){.duet-date__close:focus{opacity:1}}.duet-date__close svg{margin:0 auto}.duet-date__vhidden{border:0;clip:rect(1px, 1px, 1px, 1px);height:1px;overflow:hidden;padding:0;position:absolute;top:0;width:1px}';function It(e,t){for(var s=[],a=e;a<=t;a++)s.push(a);return s}const v={TAB:9,ESC:27,SPACE:32,PAGE_UP:33,PAGE_DOWN:34,END:35,HOME:36,LEFT:37,UP:38,RIGHT:39,DOWN:40};function zt(e,t){const s=e.value,a=e.selectionStart,o=s.slice(0,a),i=s.slice(a,s.length),n=o.replace(t,""),r=i.replace(t,""),l=n+r,u=n.length;return e.value=l,e.selectionStart=e.selectionEnd=u,l}const At=/[^0-9\.\/\-]+/g,fe=300,Nt=class extends HTMLElement{constructor(){super(),this.__registerHost(),this.duetChange=L(this,"duetChange",7),this.duetBlur=L(this,"duetBlur",7),this.duetFocus=L(this,"duetFocus",7),this.duetOpen=L(this,"duetOpen",7),this.duetClose=L(this,"duetClose",7),this.monthSelectId=W("DuetDateMonth"),this.yearSelectId=W("DuetDateYear"),this.dialogLabelId=W("DuetDateLabel"),this.initialTouchX=null,this.initialTouchY=null,this.activeFocus=!1,this.focusedDay=new Date,this.open=!1,this.name="date",this.identifier="",this.disabled=!1,this.direction="right",this.required=!1,this.value="",this.min="",this.max="",this.firstDayOfWeek=F.Monday,this.localization=Lt,this.dateAdapter=Ct,this.isDateDisabled=()=>!1,this.enableActiveFocus=()=>{this.activeFocus=!0},this.disableActiveFocus=()=>{this.activeFocus=!1},this.toggleOpen=e=>{e.preventDefault(),this.open?this.hide(!1):this.show()},this.handleEscKey=e=>{e.keyCode===v.ESC&&this.hide()},this.handleBlur=e=>{e.stopPropagation(),this.duetBlur.emit({component:"duet-date-picker"})},this.handleFocus=e=>{e.stopPropagation(),this.duetFocus.emit({component:"duet-date-picker"})},this.handleTouchStart=e=>{const t=e.changedTouches[0];this.initialTouchX=t.pageX,this.initialTouchY=t.pageY},this.handleTouchMove=e=>{e.preventDefault()},this.handleTouchEnd=e=>{const t=e.changedTouches[0],s=t.pageX-this.initialTouchX,a=t.pageY-this.initialTouchY,o=70,i=Math.abs(s)>=o&&Math.abs(a)<=o,n=Math.abs(a)>=o&&Math.abs(s)<=o&&a>0;i?this.addMonths(s<0?1:-1):n&&(this.hide(!1),e.preventDefault()),this.initialTouchY=null,this.initialTouchX=null},this.handleNextMonthClick=e=>{e.preventDefault(),this.addMonths(1)},this.handlePreviousMonthClick=e=>{e.preventDefault(),this.addMonths(-1)},this.handleFirstFocusableKeydown=e=>{e.keyCode===v.TAB&&e.shiftKey&&(this.focusedDayNode.focus(),e.preventDefault())},this.handleKeyboardNavigation=e=>{if(e.keyCode===v.TAB&&!e.shiftKey){e.preventDefault(),this.firstFocusableElement.focus();return}var t=!0;switch(e.keyCode){case v.RIGHT:this.addDays(1);break;case v.LEFT:this.addDays(-1);break;case v.DOWN:this.addDays(7);break;case v.UP:this.addDays(-7);break;case v.PAGE_UP:e.shiftKey?this.addYears(-1):this.addMonths(-1);break;case v.PAGE_DOWN:e.shiftKey?this.addYears(1):this.addMonths(1);break;case v.HOME:this.startOfWeek();break;case v.END:this.endOfWeek();break;default:t=!1}t&&(e.preventDefault(),this.enableActiveFocus())},this.handleDaySelect=(e,t)=>{const s=G(t,w(this.min),w(this.max)),a=!this.isDateDisabled(t);s&&a?(this.setValue(t),this.hide()):this.setFocusedDay(t)},this.handleMonthSelect=e=>{this.setMonth(parseInt(e.target.value,10))},this.handleYearSelect=e=>{this.setYear(parseInt(e.target.value,10))},this.handleInputChange=()=>{const e=this.datePickerInput;zt(e,At);const t=this.dateAdapter.parse(e.value,Fe);(t||e.value==="")&&this.setValue(t)},this.processFocusedDayNode=e=>{this.focusedDayNode=e,this.activeFocus&&this.open&&setTimeout(()=>e.focus(),0)}}connectedCallback(){this.createDateFormatters()}createDateFormatters(){this.dateFormatShort=new Intl.DateTimeFormat(this.localization.locale,{day:"numeric",month:"long"}),this.dateFormatLong=new Intl.DateTimeFormat(this.localization.locale,{day:"numeric",month:"long",year:"numeric"})}handleDocumentClick(e){if(!this.open)return;e.composedPath().every(s=>s!==this.dialogWrapperNode&&s!==this.datePickerButton)&&this.hide(!1)}async setFocus(){return this.datePickerInput.focus()}async show(){this.open=!0,this.duetOpen.emit({component:"duet-date-picker"}),this.setFocusedDay(w(this.value)||new Date),clearTimeout(this.focusTimeoutId),this.focusTimeoutId=setTimeout(()=>this.monthSelectNode.focus(),fe)}async hide(e=!0){this.open=!1,this.duetClose.emit({component:"duet-date-picker"}),clearTimeout(this.focusTimeoutId),e&&setTimeout(()=>this.datePickerButton.focus(),fe+200)}addDays(e){this.setFocusedDay(Ee(this.focusedDay,e))}addMonths(e){this.setMonth(this.focusedDay.getMonth()+e)}addYears(e){this.setYear(this.focusedDay.getFullYear()+e)}startOfWeek(){this.setFocusedDay(Ie(this.focusedDay,this.firstDayOfWeek))}endOfWeek(){this.setFocusedDay(ze(this.focusedDay,this.firstDayOfWeek))}setMonth(e){const t=ue(A(this.focusedDay),e),s=N(t),a=ue(this.focusedDay,e);this.setFocusedDay(O(a,t,s))}setYear(e){const t=he(A(this.focusedDay),e),s=N(t),a=he(this.focusedDay,e);this.setFocusedDay(O(a,t,s))}setFocusedDay(e){this.focusedDay=O(e,w(this.min),w(this.max))}setValue(e){this.value=Le(e),this.duetChange.emit({component:"duet-date-picker",value:this.value,valueAsDate:e})}render(){const e=w(this.value),t=e&&this.dateAdapter.format(e),s=(e||this.focusedDay).getFullYear(),a=this.focusedDay.getMonth(),o=this.focusedDay.getFullYear(),i=w(this.min),n=w(this.max),r=i!=null&&i.getMonth()===a&&i.getFullYear()===o,l=n!=null&&n.getMonth()===a&&n.getFullYear()===o,u=i?i.getFullYear():s-10,h=n?n.getFullYear():s+10;return d(ye,null,d("div",{class:"duet-date"},d(St,{dateFormatter:this.dateFormatLong,value:this.value,valueAsDate:e,formattedValue:t,onInput:this.handleInputChange,onBlur:this.handleBlur,onFocus:this.handleFocus,onClick:this.toggleOpen,name:this.name,disabled:this.disabled,role:this.role,required:this.required,identifier:this.identifier,localization:this.localization,buttonRef:c=>this.datePickerButton=c,inputRef:c=>this.datePickerInput=c}),d("div",{class:{"duet-date__dialog":!0,"is-left":this.direction==="left","is-active":this.open},role:"dialog","aria-modal":"true","aria-hidden":this.open?"false":"true","aria-labelledby":this.dialogLabelId,onTouchMove:this.handleTouchMove,onTouchStart:this.handleTouchStart,onTouchEnd:this.handleTouchEnd},d("div",{class:"duet-date__dialog-content",onKeyDown:this.handleEscKey,ref:c=>this.dialogWrapperNode=c},d("div",{class:"duet-date__mobile",onFocusin:this.disableActiveFocus},d("label",{class:"duet-date__mobile-heading"},this.localization.calendarHeading),d("button",{class:"duet-date__close",ref:c=>this.firstFocusableElement=c,onKeyDown:this.handleFirstFocusableKeydown,onClick:()=>this.hide(),type:"button"},d("svg",{"aria-hidden":"true",fill:"currentColor",xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 24 24"},d("path",{d:"M0 0h24v24H0V0z",fill:"none"}),d("path",{d:"M18.3 5.71c-.39-.39-1.02-.39-1.41 0L12 10.59 7.11 5.7c-.39-.39-1.02-.39-1.41 0-.39.39-.39 1.02 0 1.41L10.59 12 5.7 16.89c-.39.39-.39 1.02 0 1.41.39.39 1.02.39 1.41 0L12 13.41l4.89 4.89c.39.39 1.02.39 1.41 0 .39-.39.39-1.02 0-1.41L13.41 12l4.89-4.89c.38-.38.38-1.02 0-1.4z"})),d("span",{class:"duet-date__vhidden"},this.localization.closeLabel))),d("div",{class:"duet-date__header",onFocusin:this.disableActiveFocus},d("div",null,d("h2",{id:this.dialogLabelId,class:"duet-date__vhidden","aria-live":"polite","aria-atomic":"true"},this.localization.monthNames[a]," ",this.focusedDay.getFullYear()),d("label",{htmlFor:this.monthSelectId,class:"duet-date__vhidden"},this.localization.monthSelectLabel),d("div",{class:"duet-date__select"},d("select",{id:this.monthSelectId,class:"duet-date__select--month",ref:c=>this.monthSelectNode=c,onChange:this.handleMonthSelect},this.localization.monthNames.map((c,f)=>d("option",{key:c,value:f,selected:f===a,disabled:!G(new Date(o,f,1),i?A(i):null,n?N(n):null)},c))),d("div",{class:"duet-date__select-label","aria-hidden":"true"},d("span",null,this.localization.monthNamesShort[a]),d("svg",{fill:"currentColor",xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 24 24"},d("path",{d:"M8.12 9.29L12 13.17l3.88-3.88c.39-.39 1.02-.39 1.41 0 .39.39.39 1.02 0 1.41l-4.59 4.59c-.39.39-1.02.39-1.41 0L6.7 10.7c-.39-.39-.39-1.02 0-1.41.39-.38 1.03-.39 1.42 0z"})))),d("label",{htmlFor:this.yearSelectId,class:"duet-date__vhidden"},this.localization.yearSelectLabel),d("div",{class:"duet-date__select"},d("select",{id:this.yearSelectId,class:"duet-date__select--year",onChange:this.handleYearSelect},It(u,h).map(c=>d("option",{key:c,selected:c===o},c))),d("div",{class:"duet-date__select-label","aria-hidden":"true"},d("span",null,this.focusedDay.getFullYear()),d("svg",{fill:"currentColor",xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 24 24"},d("path",{d:"M8.12 9.29L12 13.17l3.88-3.88c.39-.39 1.02-.39 1.41 0 .39.39.39 1.02 0 1.41l-4.59 4.59c-.39.39-1.02.39-1.41 0L6.7 10.7c-.39-.39-.39-1.02 0-1.41.39-.38 1.03-.39 1.42 0z"}))))),d("div",{class:"duet-date__nav"},d("button",{class:"duet-date__prev",onClick:this.handlePreviousMonthClick,disabled:r,type:"button"},d("svg",{"aria-hidden":"true",fill:"currentColor",xmlns:"http://www.w3.org/2000/svg",width:"21",height:"21",viewBox:"0 0 24 24"},d("path",{d:"M14.71 15.88L10.83 12l3.88-3.88c.39-.39.39-1.02 0-1.41-.39-.39-1.02-.39-1.41 0L8.71 11.3c-.39.39-.39 1.02 0 1.41l4.59 4.59c.39.39 1.02.39 1.41 0 .38-.39.39-1.03 0-1.42z"})),d("span",{class:"duet-date__vhidden"},this.localization.prevMonthLabel)),d("button",{class:"duet-date__next",onClick:this.handleNextMonthClick,disabled:l,type:"button"},d("svg",{"aria-hidden":"true",fill:"currentColor",xmlns:"http://www.w3.org/2000/svg",width:"21",height:"21",viewBox:"0 0 24 24"},d("path",{d:"M9.29 15.88L13.17 12 9.29 8.12c-.39-.39-.39-1.02 0-1.41.39-.39 1.02-.39 1.41 0l4.59 4.59c.39.39.39 1.02 0 1.41L10.7 17.3c-.39.39-1.02.39-1.41 0-.38-.39-.39-1.03 0-1.42z"})),d("span",{class:"duet-date__vhidden"},this.localization.nextMonthLabel)))),d(Ft,{dateFormatter:this.dateFormatShort,selectedDate:e,focusedDate:this.focusedDay,onDateSelect:this.handleDaySelect,onKeyboardNavigation:this.handleKeyboardNavigation,labelledById:this.dialogLabelId,localization:this.localization,firstDayOfWeek:this.firstDayOfWeek,focusedDayRef:this.processFocusedDayNode,min:i,max:n,isDateDisabled:this.isDateDisabled})))))}get element(){return this}static get watchers(){return{localization:["createDateFormatters"]}}static get style(){return Et}},Ot=gt(Nt,[0,"duet-date-picker",{name:[1],identifier:[1],disabled:[516],role:[1],direction:[1],required:[4],value:[1537],min:[1],max:[1],firstDayOfWeek:[2,"first-day-of-week"],localization:[16],dateAdapter:[16],isDateDisabled:[16],activeFocus:[32],focusedDay:[32],open:[32]},[[6,"click","handleDocumentClick"]]]),Rt=e=>{typeof customElements<"u"&&[Ot].forEach(t=>{customElements.get(t.is)||customElements.define(t.is,t,e)})};export{Ot as DuetDatePicker,Rt as defineCustomElements,Pt as setAssetPath,Yt as setPlatformOptions};
