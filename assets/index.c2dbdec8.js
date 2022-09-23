import{S as Ct}from"./magnifying-glass.b7cbe8fe.js";import{n as U,ae as St,bp as Et,c as w,am as It,aY as L,an as V,ai as G,aj as $t,b1 as Y,aA as At,aN as kt,ak as Lt,af as Ot,al as rt}from"./index.7b120442.js";import{S as Tt}from"./SiteMainBanner.438860cd.js";import{S as Rt,P as Nt}from"./SideBar.be97295c.js";import{T as jt}from"./ToggleButton.39a3df41.js";import"./chevron-left.0808b01b.js";var Bt=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"inline-flex items-center rounded border border-solid border-gray-300 bg-gray-100 px-2 py-1 text-gray-500 hover:bg-prime-indigo hover:text-white focus:bg-prime-indigo focus:text-white"},[s("BaseSubtitle2",[t._t("default")],2)],1)},Pt=[];const Ft={},it={};var Dt=U(Ft,Bt,Pt,!1,zt,null,null,null);function zt(t){for(let e in it)this[e]=it[e]}const Kt=function(){return Dt.exports}(),P={};P.props={post:{key:"post",required:!0,type:null}};P.setup=(t,e)=>{const s="https://wh-intg-cms-content-607e88cd3e3f8369.s3.amazonaws.com/Whitehawk_Default_Blog_9fb3669d16.jpg",n="WhiteHawk Logo",r=t,i=w(()=>{var l,u,p;return r.post.image&&Object.keys(r.post.image).length>0?((u=(l=r.post.image.formats)==null?void 0:l.small)==null?void 0:u.url)||((p=r.post.image.formats)==null?void 0:p.thumbnail.url):s}),a=w(()=>{var l,u;return(l=r.post.image)!=null&&l.alternativeText?((u=r.post.image)==null?void 0:u.alternativeText)||r.post.title:n});function o(l){return{query:{category:l}}}function c(){window.scrollTo(0,0)}function h(l){return l?!(Object.keys(l).length<=0):!1}return{imageUrl:i,altText:a,categoryPath:o,scrollToTop:c,checkNullOrEmpty:h}};P.components=Object.assign({LazyImg:St,DateIsoStringDisplay:Et,Chip:Kt},P.components);var Wt=function(){var t=this,e=t.$createElement,s=t._self._c||e;return t.post?s("div",{staticClass:"relative overflow-hidden rounded-lg bg-white shadow lg:flex lg:justify-between"},[t.imageUrl?s("div",{staticClass:"flex h-64 w-full lg:w-3/5 xl:w-1/3"},[s("LazyImg",{staticClass:"z-0 h-full w-full object-cover lg:absolute xl:relative",attrs:{src:t.imageUrl,alt:t.altText,options:{w:500},"options-placeholder":{w:48}}})],1):t._e(),s("div",{staticClass:"z-10 flex flex-col bg-white p-4 md:bg-opacity-95 lg:w-2/3 lg:opacity-100"},[t.post.published_at?s("BaseTypography",{staticClass:"uppercase text-gray-500",attrs:{component:"span",variant:"overline"}},[s("DateIsoStringDisplay",{attrs:{value:t.post.published_at,format:"date"}})],1):t._e(),s("BaseLink",{attrs:{to:`/blog/${t.post.slug}`,"display-type":"primary-prime"}},[s("BaseTypography",{attrs:{component:"h2",variant:"h6"}},[t._v(" "+t._s(t.post.title)+" ")])],1),t.checkNullOrEmpty(t.post.author)?s("BaseTypography",{staticClass:"font-bold text-gray-500",attrs:{variant:"p2",component:"p"}},[t._v(" "+t._s(t.post.author.firstname+" "+t.post.author.lastname)+" ")]):t._e(),t.post.list_description?s("BaseTypography",{staticClass:"my-3 text-gray-500",attrs:{variant:"p2",component:"p"}},[t._v(" "+t._s(t.post.list_description)+" ")]):t._e(),t.post.categories?s("div",{staticClass:"space-y-1"},t._l(t.post.categories,function(n){return s("NuxtLink",{key:n.id,staticClass:"mr-1 inline-flex",attrs:{to:t.categoryPath(n.id)},nativeOn:{click:function(r){return t.scrollToTop.apply(null,arguments)}}},[s("Chip",{attrs:{"category-id":n.id}},[t._v(" "+t._s(n.name)+" ")])],1)}),1):t._e()],1)]):t._e()},Ut=[];const at={};var Ht=U(P,Wt,Ut,!1,Vt,null,null,null);function Vt(t){for(let e in at)this[e]=at[e]}const Gt=function(){return Ht.exports}(),F={};F.props={posts:{key:"posts",required:!0,type:Array}};F.setup=(t,e)=>({});F.components=Object.assign({BlogCard:Gt},F.components);var Yt=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"flex flex-col space-y-8"},t._l(t.posts,function(n){return s("BlogCard",{key:n.slug,attrs:{post:n}})}),1)},Xt=[];const ot={};var Qt=U(F,Yt,Xt,!1,Jt,null,null,null);function Jt(t){for(let e in ot)this[e]=ot[e]}const Zt=function(){return Qt.exports}();function $(t){return Array.isArray?Array.isArray(t):mt(t)==="[object Array]"}const qt=1/0;function te(t){if(typeof t=="string")return t;let e=t+"";return e=="0"&&1/t==-qt?"-0":e}function ee(t){return t==null?"":te(t)}function E(t){return typeof t=="string"}function gt(t){return typeof t=="number"}function se(t){return t===!0||t===!1||ne(t)&&mt(t)=="[object Boolean]"}function dt(t){return typeof t=="object"}function ne(t){return dt(t)&&t!==null}function v(t){return t!=null}function X(t){return!t.trim().length}function mt(t){return t==null?t===void 0?"[object Undefined]":"[object Null]":Object.prototype.toString.call(t)}const re="Incorrect 'index' type",ie=t=>`Invalid value for key ${t}`,ae=t=>`Pattern length exceeds max of ${t}.`,oe=t=>`Missing ${t} property in key`,ce=t=>`Property 'weight' in key '${t}' must be a positive integer`,ct=Object.prototype.hasOwnProperty;class le{constructor(e){this._keys=[],this._keyMap={};let s=0;e.forEach(n=>{let r=_t(n);s+=r.weight,this._keys.push(r),this._keyMap[r.id]=r,s+=r.weight}),this._keys.forEach(n=>{n.weight/=s})}get(e){return this._keyMap[e]}keys(){return this._keys}toJSON(){return JSON.stringify(this._keys)}}function _t(t){let e=null,s=null,n=null,r=1,i=null;if(E(t)||$(t))n=t,e=lt(t),s=Q(t);else{if(!ct.call(t,"name"))throw new Error(oe("name"));const a=t.name;if(n=a,ct.call(t,"weight")&&(r=t.weight,r<=0))throw new Error(ce(a));e=lt(a),s=Q(a),i=t.getFn}return{path:e,id:s,weight:r,src:n,getFn:i}}function lt(t){return $(t)?t:t.split(".")}function Q(t){return $(t)?t.join("."):t}function he(t,e){let s=[],n=!1;const r=(i,a,o)=>{if(!!v(i))if(!a[o])s.push(i);else{let c=a[o];const h=i[c];if(!v(h))return;if(o===a.length-1&&(E(h)||gt(h)||se(h)))s.push(ee(h));else if($(h)){n=!0;for(let l=0,u=h.length;l<u;l+=1)r(h[l],a,o+1)}else a.length&&r(h,a,o+1)}};return r(t,E(e)?e.split("."):e,0),n?s:s[0]}const ue={includeMatches:!1,findAllMatches:!1,minMatchCharLength:1},fe={isCaseSensitive:!1,includeScore:!1,keys:[],shouldSort:!0,sortFn:(t,e)=>t.score===e.score?t.idx<e.idx?-1:1:t.score<e.score?-1:1},pe={location:0,threshold:.6,distance:100},ge={useExtendedSearch:!1,getFn:he,ignoreLocation:!1,ignoreFieldNorm:!1,fieldNormWeight:1};var f={...fe,...ue,...pe,...ge};const de=/[^ ]+/g;function me(t=1,e=3){const s=new Map,n=Math.pow(10,e);return{get(r){const i=r.match(de).length;if(s.has(i))return s.get(i);const a=1/Math.pow(i,.5*t),o=parseFloat(Math.round(a*n)/n);return s.set(i,o),o},clear(){s.clear()}}}class st{constructor({getFn:e=f.getFn,fieldNormWeight:s=f.fieldNormWeight}={}){this.norm=me(s,3),this.getFn=e,this.isCreated=!1,this.setIndexRecords()}setSources(e=[]){this.docs=e}setIndexRecords(e=[]){this.records=e}setKeys(e=[]){this.keys=e,this._keysMap={},e.forEach((s,n)=>{this._keysMap[s.id]=n})}create(){this.isCreated||!this.docs.length||(this.isCreated=!0,E(this.docs[0])?this.docs.forEach((e,s)=>{this._addString(e,s)}):this.docs.forEach((e,s)=>{this._addObject(e,s)}),this.norm.clear())}add(e){const s=this.size();E(e)?this._addString(e,s):this._addObject(e,s)}removeAt(e){this.records.splice(e,1);for(let s=e,n=this.size();s<n;s+=1)this.records[s].i-=1}getValueForItemAtKeyId(e,s){return e[this._keysMap[s]]}size(){return this.records.length}_addString(e,s){if(!v(e)||X(e))return;let n={v:e,i:s,n:this.norm.get(e)};this.records.push(n)}_addObject(e,s){let n={i:s,$:{}};this.keys.forEach((r,i)=>{let a=r.getFn?r.getFn(e):this.getFn(e,r.path);if(!!v(a)){if($(a)){let o=[];const c=[{nestedArrIndex:-1,value:a}];for(;c.length;){const{nestedArrIndex:h,value:l}=c.pop();if(!!v(l))if(E(l)&&!X(l)){let u={v:l,i:h,n:this.norm.get(l)};o.push(u)}else $(l)&&l.forEach((u,p)=>{c.push({nestedArrIndex:p,value:u})})}n.$[i]=o}else if(E(a)&&!X(a)){let o={v:a,n:this.norm.get(a)};n.$[i]=o}}}),this.records.push(n)}toJSON(){return{keys:this.keys,records:this.records}}}function yt(t,e,{getFn:s=f.getFn,fieldNormWeight:n=f.fieldNormWeight}={}){const r=new st({getFn:s,fieldNormWeight:n});return r.setKeys(t.map(_t)),r.setSources(e),r.create(),r}function _e(t,{getFn:e=f.getFn,fieldNormWeight:s=f.fieldNormWeight}={}){const{keys:n,records:r}=t,i=new st({getFn:e,fieldNormWeight:s});return i.setKeys(n),i.setIndexRecords(r),i}function z(t,{errors:e=0,currentLocation:s=0,expectedLocation:n=0,distance:r=f.distance,ignoreLocation:i=f.ignoreLocation}={}){const a=e/t.length;if(i)return a;const o=Math.abs(n-s);return r?a+o/r:o?1:a}function ye(t=[],e=f.minMatchCharLength){let s=[],n=-1,r=-1,i=0;for(let a=t.length;i<a;i+=1){let o=t[i];o&&n===-1?n=i:!o&&n!==-1&&(r=i-1,r-n+1>=e&&s.push([n,r]),n=-1)}return t[i-1]&&i-n>=e&&s.push([n,i-1]),s}const O=32;function ve(t,e,s,{location:n=f.location,distance:r=f.distance,threshold:i=f.threshold,findAllMatches:a=f.findAllMatches,minMatchCharLength:o=f.minMatchCharLength,includeMatches:c=f.includeMatches,ignoreLocation:h=f.ignoreLocation}={}){if(e.length>O)throw new Error(ae(O));const l=e.length,u=t.length,p=Math.max(0,Math.min(n,u));let g=i,m=p;const _=o>1||c,C=_?Array(u):[];let x;for(;(x=t.indexOf(e,m))>-1;){let y=z(e,{currentLocation:x,expectedLocation:p,distance:r,ignoreLocation:h});if(g=Math.min(y,g),m=x+l,_){let d=0;for(;d<l;)C[x+d]=1,d+=1}}m=-1;let S=[],I=1,T=l+u;const H=1<<l-1;for(let y=0;y<l;y+=1){let d=0,M=T;for(;d<M;)z(e,{errors:y,currentLocation:p+M,expectedLocation:p,distance:r,ignoreLocation:h})<=g?d=M:T=M,M=Math.floor((T-d)/2+d);T=M;let A=Math.max(1,p-M+1),B=a?u:Math.min(p+M,u)+l,N=Array(B+2);N[B+1]=(1<<y)-1;for(let b=B;b>=A;b-=1){let D=b-1,nt=s[t.charAt(D)];if(_&&(C[D]=+!!nt),N[b]=(N[b+1]<<1|1)&nt,y&&(N[b]|=(S[b+1]|S[b])<<1|1|S[b+1]),N[b]&H&&(I=z(e,{errors:y,currentLocation:D,expectedLocation:p,distance:r,ignoreLocation:h}),I<=g)){if(g=I,m=D,m<=p)break;A=Math.max(1,2*p-m)}}if(z(e,{errors:y+1,currentLocation:p,expectedLocation:p,distance:r,ignoreLocation:h})>g)break;S=N}const R={isMatch:m>=0,score:Math.max(.001,I)};if(_){const y=ye(C,o);y.length?c&&(R.indices=y):R.isMatch=!1}return R}function xe(t){let e={};for(let s=0,n=t.length;s<n;s+=1){const r=t.charAt(s);e[r]=(e[r]||0)|1<<n-s-1}return e}class vt{constructor(e,{location:s=f.location,threshold:n=f.threshold,distance:r=f.distance,includeMatches:i=f.includeMatches,findAllMatches:a=f.findAllMatches,minMatchCharLength:o=f.minMatchCharLength,isCaseSensitive:c=f.isCaseSensitive,ignoreLocation:h=f.ignoreLocation}={}){if(this.options={location:s,threshold:n,distance:r,includeMatches:i,findAllMatches:a,minMatchCharLength:o,isCaseSensitive:c,ignoreLocation:h},this.pattern=c?e:e.toLowerCase(),this.chunks=[],!this.pattern.length)return;const l=(p,g)=>{this.chunks.push({pattern:p,alphabet:xe(p),startIndex:g})},u=this.pattern.length;if(u>O){let p=0;const g=u%O,m=u-g;for(;p<m;)l(this.pattern.substr(p,O),p),p+=O;if(g){const _=u-O;l(this.pattern.substr(_),_)}}else l(this.pattern,0)}searchIn(e){const{isCaseSensitive:s,includeMatches:n}=this.options;if(s||(e=e.toLowerCase()),this.pattern===e){let m={isMatch:!0,score:0};return n&&(m.indices=[[0,e.length-1]]),m}const{location:r,distance:i,threshold:a,findAllMatches:o,minMatchCharLength:c,ignoreLocation:h}=this.options;let l=[],u=0,p=!1;this.chunks.forEach(({pattern:m,alphabet:_,startIndex:C})=>{const{isMatch:x,score:S,indices:I}=ve(e,m,_,{location:r+C,distance:i,threshold:a,findAllMatches:o,minMatchCharLength:c,includeMatches:n,ignoreLocation:h});x&&(p=!0),u+=S,x&&I&&(l=[...l,...I])});let g={isMatch:p,score:p?u/this.chunks.length:1};return p&&n&&(g.indices=l),g}}class k{constructor(e){this.pattern=e}static isMultiMatch(e){return ht(e,this.multiRegex)}static isSingleMatch(e){return ht(e,this.singleRegex)}search(){}}function ht(t,e){const s=t.match(e);return s?s[1]:null}class Me extends k{constructor(e){super(e)}static get type(){return"exact"}static get multiRegex(){return/^="(.*)"$/}static get singleRegex(){return/^=(.*)$/}search(e){const s=e===this.pattern;return{isMatch:s,score:s?0:1,indices:[0,this.pattern.length-1]}}}class be extends k{constructor(e){super(e)}static get type(){return"inverse-exact"}static get multiRegex(){return/^!"(.*)"$/}static get singleRegex(){return/^!(.*)$/}search(e){const n=e.indexOf(this.pattern)===-1;return{isMatch:n,score:n?0:1,indices:[0,e.length-1]}}}class we extends k{constructor(e){super(e)}static get type(){return"prefix-exact"}static get multiRegex(){return/^\^"(.*)"$/}static get singleRegex(){return/^\^(.*)$/}search(e){const s=e.startsWith(this.pattern);return{isMatch:s,score:s?0:1,indices:[0,this.pattern.length-1]}}}class Ce extends k{constructor(e){super(e)}static get type(){return"inverse-prefix-exact"}static get multiRegex(){return/^!\^"(.*)"$/}static get singleRegex(){return/^!\^(.*)$/}search(e){const s=!e.startsWith(this.pattern);return{isMatch:s,score:s?0:1,indices:[0,e.length-1]}}}class Se extends k{constructor(e){super(e)}static get type(){return"suffix-exact"}static get multiRegex(){return/^"(.*)"\$$/}static get singleRegex(){return/^(.*)\$$/}search(e){const s=e.endsWith(this.pattern);return{isMatch:s,score:s?0:1,indices:[e.length-this.pattern.length,e.length-1]}}}class Ee extends k{constructor(e){super(e)}static get type(){return"inverse-suffix-exact"}static get multiRegex(){return/^!"(.*)"\$$/}static get singleRegex(){return/^!(.*)\$$/}search(e){const s=!e.endsWith(this.pattern);return{isMatch:s,score:s?0:1,indices:[0,e.length-1]}}}class xt extends k{constructor(e,{location:s=f.location,threshold:n=f.threshold,distance:r=f.distance,includeMatches:i=f.includeMatches,findAllMatches:a=f.findAllMatches,minMatchCharLength:o=f.minMatchCharLength,isCaseSensitive:c=f.isCaseSensitive,ignoreLocation:h=f.ignoreLocation}={}){super(e),this._bitapSearch=new vt(e,{location:s,threshold:n,distance:r,includeMatches:i,findAllMatches:a,minMatchCharLength:o,isCaseSensitive:c,ignoreLocation:h})}static get type(){return"fuzzy"}static get multiRegex(){return/^"(.*)"$/}static get singleRegex(){return/^(.*)$/}search(e){return this._bitapSearch.searchIn(e)}}class Mt extends k{constructor(e){super(e)}static get type(){return"include"}static get multiRegex(){return/^'"(.*)"$/}static get singleRegex(){return/^'(.*)$/}search(e){let s=0,n;const r=[],i=this.pattern.length;for(;(n=e.indexOf(this.pattern,s))>-1;)s=n+i,r.push([n,s-1]);const a=!!r.length;return{isMatch:a,score:a?0:1,indices:r}}}const J=[Me,Mt,we,Ce,Ee,Se,be,xt],ut=J.length,Ie=/ +(?=(?:[^\"]*\"[^\"]*\")*[^\"]*$)/,$e="|";function Ae(t,e={}){return t.split($e).map(s=>{let n=s.trim().split(Ie).filter(i=>i&&!!i.trim()),r=[];for(let i=0,a=n.length;i<a;i+=1){const o=n[i];let c=!1,h=-1;for(;!c&&++h<ut;){const l=J[h];let u=l.isMultiMatch(o);u&&(r.push(new l(u,e)),c=!0)}if(!c)for(h=-1;++h<ut;){const l=J[h];let u=l.isSingleMatch(o);if(u){r.push(new l(u,e));break}}}return r})}const ke=new Set([xt.type,Mt.type]);class Le{constructor(e,{isCaseSensitive:s=f.isCaseSensitive,includeMatches:n=f.includeMatches,minMatchCharLength:r=f.minMatchCharLength,ignoreLocation:i=f.ignoreLocation,findAllMatches:a=f.findAllMatches,location:o=f.location,threshold:c=f.threshold,distance:h=f.distance}={}){this.query=null,this.options={isCaseSensitive:s,includeMatches:n,minMatchCharLength:r,findAllMatches:a,ignoreLocation:i,location:o,threshold:c,distance:h},this.pattern=s?e:e.toLowerCase(),this.query=Ae(this.pattern,this.options)}static condition(e,s){return s.useExtendedSearch}searchIn(e){const s=this.query;if(!s)return{isMatch:!1,score:1};const{includeMatches:n,isCaseSensitive:r}=this.options;e=r?e:e.toLowerCase();let i=0,a=[],o=0;for(let c=0,h=s.length;c<h;c+=1){const l=s[c];a.length=0,i=0;for(let u=0,p=l.length;u<p;u+=1){const g=l[u],{isMatch:m,indices:_,score:C}=g.search(e);if(m){if(i+=1,o+=C,n){const x=g.constructor.type;ke.has(x)?a=[...a,..._]:a.push(_)}}else{o=0,i=0,a.length=0;break}}if(i){let u={isMatch:!0,score:o/i};return n&&(u.indices=a),u}}return{isMatch:!1,score:1}}}const Z=[];function Oe(...t){Z.push(...t)}function q(t,e){for(let s=0,n=Z.length;s<n;s+=1){let r=Z[s];if(r.condition(t,e))return new r(t,e)}return new vt(t,e)}const K={AND:"$and",OR:"$or"},tt={PATH:"$path",PATTERN:"$val"},et=t=>!!(t[K.AND]||t[K.OR]),Te=t=>!!t[tt.PATH],Re=t=>!$(t)&&dt(t)&&!et(t),ft=t=>({[K.AND]:Object.keys(t).map(e=>({[e]:t[e]}))});function bt(t,e,{auto:s=!0}={}){const n=r=>{let i=Object.keys(r);const a=Te(r);if(!a&&i.length>1&&!et(r))return n(ft(r));if(Re(r)){const c=a?r[tt.PATH]:i[0],h=a?r[tt.PATTERN]:r[c];if(!E(h))throw new Error(ie(c));const l={keyId:Q(c),pattern:h};return s&&(l.searcher=q(h,e)),l}let o={children:[],operator:i[0]};return i.forEach(c=>{const h=r[c];$(h)&&h.forEach(l=>{o.children.push(n(l))})}),o};return et(t)||(t=ft(t)),n(t)}function Ne(t,{ignoreFieldNorm:e=f.ignoreFieldNorm}){t.forEach(s=>{let n=1;s.matches.forEach(({key:r,norm:i,score:a})=>{const o=r?r.weight:null;n*=Math.pow(a===0&&o?Number.EPSILON:a,(o||1)*(e?1:i))}),s.score=n})}function je(t,e){const s=t.matches;e.matches=[],v(s)&&s.forEach(n=>{if(!v(n.indices)||!n.indices.length)return;const{indices:r,value:i}=n;let a={indices:r,value:i};n.key&&(a.key=n.key.src),n.idx>-1&&(a.refIndex=n.idx),e.matches.push(a)})}function Be(t,e){e.score=t.score}function Pe(t,e,{includeMatches:s=f.includeMatches,includeScore:n=f.includeScore}={}){const r=[];return s&&r.push(je),n&&r.push(Be),t.map(i=>{const{idx:a}=i,o={item:e[a],refIndex:a};return r.length&&r.forEach(c=>{c(i,o)}),o})}class j{constructor(e,s={},n){this.options={...f,...s},this.options.useExtendedSearch,this._keyStore=new le(this.options.keys),this.setCollection(e,n)}setCollection(e,s){if(this._docs=e,s&&!(s instanceof st))throw new Error(re);this._myIndex=s||yt(this.options.keys,this._docs,{getFn:this.options.getFn,fieldNormWeight:this.options.fieldNormWeight})}add(e){!v(e)||(this._docs.push(e),this._myIndex.add(e))}remove(e=()=>!1){const s=[];for(let n=0,r=this._docs.length;n<r;n+=1){const i=this._docs[n];e(i,n)&&(this.removeAt(n),n-=1,r-=1,s.push(i))}return s}removeAt(e){this._docs.splice(e,1),this._myIndex.removeAt(e)}getIndex(){return this._myIndex}search(e,{limit:s=-1}={}){const{includeMatches:n,includeScore:r,shouldSort:i,sortFn:a,ignoreFieldNorm:o}=this.options;let c=E(e)?E(this._docs[0])?this._searchStringList(e):this._searchObjectList(e):this._searchLogical(e);return Ne(c,{ignoreFieldNorm:o}),i&&c.sort(a),gt(s)&&s>-1&&(c=c.slice(0,s)),Pe(c,this._docs,{includeMatches:n,includeScore:r})}_searchStringList(e){const s=q(e,this.options),{records:n}=this._myIndex,r=[];return n.forEach(({v:i,i:a,n:o})=>{if(!v(i))return;const{isMatch:c,score:h,indices:l}=s.searchIn(i);c&&r.push({item:i,idx:a,matches:[{score:h,value:i,norm:o,indices:l}]})}),r}_searchLogical(e){const s=bt(e,this.options),n=(o,c,h)=>{if(!o.children){const{keyId:u,searcher:p}=o,g=this._findMatches({key:this._keyStore.get(u),value:this._myIndex.getValueForItemAtKeyId(c,u),searcher:p});return g&&g.length?[{idx:h,item:c,matches:g}]:[]}const l=[];for(let u=0,p=o.children.length;u<p;u+=1){const g=o.children[u],m=n(g,c,h);if(m.length)l.push(...m);else if(o.operator===K.AND)return[]}return l},r=this._myIndex.records,i={},a=[];return r.forEach(({$:o,i:c})=>{if(v(o)){let h=n(s,o,c);h.length&&(i[c]||(i[c]={idx:c,item:o,matches:[]},a.push(i[c])),h.forEach(({matches:l})=>{i[c].matches.push(...l)}))}}),a}_searchObjectList(e){const s=q(e,this.options),{keys:n,records:r}=this._myIndex,i=[];return r.forEach(({$:a,i:o})=>{if(!v(a))return;let c=[];n.forEach((h,l)=>{c.push(...this._findMatches({key:h,value:a[l],searcher:s}))}),c.length&&i.push({idx:o,item:a,matches:c})}),i}_findMatches({key:e,value:s,searcher:n}){if(!v(s))return[];let r=[];if($(s))s.forEach(({v:i,i:a,n:o})=>{if(!v(i))return;const{isMatch:c,score:h,indices:l}=n.searchIn(i);c&&r.push({score:h,key:e,value:i,idx:a,norm:o,indices:l})});else{const{v:i,n:a}=s,{isMatch:o,score:c,indices:h}=n.searchIn(i);o&&r.push({score:c,key:e,value:i,norm:a,indices:h})}return r}}j.version="6.6.2";j.createIndex=yt;j.parseIndex=_e;j.config=f;j.parseQuery=bt;Oe(Le);const W=Lt({layout:"siteMain",head:{}});W.setup=(t,e)=>{const s=It(),n={keys:["title","list_description","author.firstname","author.lastname"]},r=L();V.get(`${G}/news-and-insights`).then(d=>r.value=d.data),$t(w(()=>{var d;return(d=r.value)==null?void 0:d.seo}));const i=L([]),a=L();V.get(`${G}/blog-posts`,{params:{_sort:"published_at:desc",_limit:-1}}).then(d=>{a.value=new j(d.data,n),i.value=d.data});const o=L([]);V.get(`${G}/categories`,{params:{_sort:"name:asc",_limit:-1}}).then(d=>o.value=d.data);const c=L(5),h=L(!1),l=L(!1),u=5,p=`${Ot}/main-page-pics/line-waves-sm-dark.svg`,g=Y("search"),m=w(()=>R.value.length),_=Y("page"),C=Y("category"),x=w(()=>_.value?+_.value:1),S=w(()=>C.value?+C.value:void 0),I=w(()=>l.value?o.value:o.value.slice(0,u)),T=w(()=>g.value||S.value),H=w(()=>{const d=[];return S.value&&d.push(M=>M.categories.some(A=>A.id===S.value)),d}),R=w(()=>(g.value&&a.value?a.value.search(String(g.value)).map(A=>A.item):i.value).filter(A=>H.value.every(B=>B(A)))),y=w(()=>{const d=(x.value-1)*c.value;return R.value.slice(d,d+c.value)});return At(()=>s.value,()=>{h.value=!1}),{posts:i,categories:o,perPage:c,isOpen:h,showAllCategories:l,categoryLimit:u,backgroundUrl:p,search:g,total:m,currentPage:x,categoriesToShow:I,anyFilters:T,currentPagePosts:y}};W.components=Object.assign({SideBar:Rt,XSvg:kt,SearchSvg:Ct,ToggleButton:jt,SiteMainBanner:Tt,BlogCardGroup:Zt,Pagination:Nt},W.components);var Fe=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("section",{staticClass:"flex bg-gray-100 bg-[length:517px] bg-bottom bg-repeat-x",style:{backgroundImage:`url(${t.backgroundUrl})`}},[s("SideBar",{model:{value:t.isOpen,callback:function(n){t.isOpen=n},expression:"isOpen"}},[s("div",{staticClass:"flex items-center space-x-8"},[s("BaseTypography",{staticClass:"text-prime-navy",attrs:{variant:"h6",component:"span"}},[t._v(" Search ")]),s("ClientOnly",[t.anyFilters?s("NuxtLink",{staticClass:"flex items-center space-x-1",attrs:{to:{query:null}}},[s("span",{staticClass:"text-xs text-gray-700"},[t._v("Clear filters")]),s("XSvg",{staticClass:"h-4 w-4 text-gray-700"})],1):t._e()],1)],1),s("BaseLabel",{staticClass:"mt-4"},[s("BaseTypography",{staticClass:"uppercase text-gray-700",attrs:{variant:"overline",component:"span"}},[t._v(" Search by Keywords: ")]),s("div",{staticClass:"relative w-full max-w-sm"},[s("div",{staticClass:"absolute inset-y-0 left-0 pt-2 pl-3"},[s("SearchSvg",{staticClass:"h-6 w-6 text-gray-400"})],1),s("BaseInput",{staticClass:"w-full pl-10 pr-4",model:{value:t.search,callback:function(n){t.search=n},expression:"search"}})],1)],1),s("ul",{staticClass:"mt-6 space-y-2"},[s("BaseTypography",{staticClass:"py-2 text-prime-navy",attrs:{variant:"h6",component:"span"}},[t._v(" Browse Categories ")]),t._l(t.categoriesToShow,function(n){return s("li",{key:n.id},[s("BaseLink",{staticClass:"flex justify-between",attrs:{"aria-label":"Categories",role:"Link",to:{query:Object.assign({},t.$route.query,{category:n.id,page:void 0})},"display-type":"secondary"}},[s("span",[t._v(t._s(n.name))])])],1)})],2),t.categories.length>t.categoryLimit?s("div",{staticClass:"p-2"},[s("BaseLabel",{staticClass:"flex cursor-pointer",attrs:{"aria-label":"Toggle"}},[t._v(" "+t._s(t.showAllCategories?"View Less":"View All")+" "),s("ToggleButton",{class:t.showAllCategories?"-rotate-180 transform transition-transform duration-300":"transform transition-transform duration-300",attrs:{"aria-label":"Toggle Categories"},model:{value:t.showAllCategories,callback:function(n){t.showAllCategories=n},expression:"showAllCategories"}})],1)],1):t._e()],1),s("div",{staticClass:"flex min-w-0 flex-1 flex-col"},[s("main",{staticClass:"z-0 flex-1 pb-6 focus:outline-none",attrs:{tabindex:"0"}},[s("SiteMainBanner"),s("div",{staticClass:"sticky top-16 z-30 ml-6 -mt-12 pt-6 md:hidden"},[s("button",{staticClass:"inline-flex h-12 w-12 items-center justify-center rounded-full border bg-white text-gray-500 shadow-lg transition duration-150 ease-in-out hover:text-gray-900 focus:bg-gray-300 focus:shadow-inner focus:outline-none",attrs:{"aria-label":"Open sidebar",type:"button"},on:{click:function(n){t.isOpen=!t.isOpen}}},[s("SearchSvg",{staticClass:"h-6 w-6 text-prime-navy"})],1)]),s("div",{staticClass:"mx-auto mb-8 max-w-6xl px-4 sm:px-6 md:px-8"},[s("div",{staticClass:"py-8"},[s("ClientOnly",[s("BlogCardGroup",{attrs:{posts:t.currentPagePosts}})],1)],1),s("div",{staticClass:"flex justify-center"},[s("ClientOnly",[s("Pagination",{staticClass:"flex-1",attrs:{total:t.total,"per-page":t.perPage,"current-page":t.currentPage}})],1)],1)])],1)]),s("div",{staticClass:"hidden"},t._l(t.posts,function(n){return s("NuxtLink",{key:n.slug,attrs:{to:`/blog/${n.slug}`,prefetch:!1}},[t._v(" "+t._s(n.slug)+" ")])}),1)],1)},De=[];const pt={};var wt=U(W,Fe,De,!1,ze,null,null,null);function ze(t){for(let e in pt)this[e]=pt[e]}typeof rt=="function"&&rt(wt);const Xe=function(){return wt.exports}();export{Xe as default};
