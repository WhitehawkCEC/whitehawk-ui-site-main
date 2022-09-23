import{C as L}from"./chevron-left.0808b01b.js";import{ah as D,ai as y,an as F,bn as I,bX as R,aY as j,aA as z,cw as H,c as p,c0 as M,bY as N,bZ as q,b_ as A,b$ as O,cx as P,ae as E,ak as W,af as Y,aa as G,n as Q,al as x}from"./index.7b120442.js";import{N as X}from"./namespace.d5e90c67.js";import{a as Z}from"./axios-data.2bb98588.js";const J={read(t){return D([X,"blog-posts",t],Z(`${y}/blog-posts/${t.value}`))},list(t){return F.get(`${y}/blog-posts`,{params:{_sort:"published_at:desc",_limit:t},paramsSerializer:o=>I.stringify(o)}).then(o=>o.data)}},u=W({layout:"siteMain",head:{}});u.setup=(t,o)=>{const e=`${Y}/main-page-pics/line-waves-sm-light.svg`,r=R("slug"),s=J.read(r).data,f=j("");z(()=>{var a;return(a=s.value)==null?void 0:a.body},async a=>{a&&(f.value=await H(a))},{immediate:!0});const k=p(()=>`${M}blog/${encodeURIComponent(r.value)}`),S=p(()=>[{name:"twitter",component:N},{name:"linkedin",component:q},{name:"facebook",component:A},{name:"email",component:O}]),d="https://wh-intg-cms-content-607e88cd3e3f8369.s3.amazonaws.com/Whitehawk_Default_Blog_9fb3669d16.jpg",T=p(()=>{var a,n,i,l,m,c;return(a=s.value)!=null&&a.image&&(((i=(n=s.value.image.formats)==null?void 0:n.medium)==null?void 0:i.url)||((m=(l=s.value.image.formats)==null?void 0:l.small)==null?void 0:m.url)||((c=s.value.image.formats)==null?void 0:c.thumbnail.url))||d}),$="WhiteHawk Logo",U=p(()=>{var a;return(a=s.value)!=null&&a.image?s.value.image.alternativeText||s.value.title:$});function B(a){return G(a).toLocaleDateString()}return P(()=>{var n,i,l,m,c,v,_,b,h;const a=s.value;return a?{title:a.title,meta:[{name:"og:title",content:a.title},{name:"description",content:a.list_description},{name:"og:description",content:a.list_description},{name:"og:image",content:((l=(i=(n=a.image)==null?void 0:n.formats)==null?void 0:i.medium)==null?void 0:l.url)||((v=(c=(m=a.image)==null?void 0:m.formats)==null?void 0:c.small)==null?void 0:v.url)||((h=(b=(_=a.image)==null?void 0:_.formats)==null?void 0:b.thumbnail)==null?void 0:h.url)||d}]}:{}}),{backgroundUrl:e,post:s,bodyAsHtml:f,blogUrl:k,social:S,imageUrl:T,altText:U,formatDate:B}};u.components=Object.assign({ChevronLeftSvg:L,LazyImg:E},u.components);var K=function(){var t=this,o=t.$createElement,e=t._self._c||o;return e("main",{staticClass:"flex flex-col justify-center bg-[length:517px] bg-bottom bg-repeat-x py-12 sm:px-6 lg:px-0",style:{backgroundImage:`url(${t.backgroundUrl})`}},[t.post?e("section",{staticClass:"container mx-auto mt-4 mb-8 flex max-w-prose flex-col space-y-6 px-4"},[e("BaseLink",{staticClass:"flex items-center",attrs:{"display-type":"primary-prime",to:"/blog"}},[e("ChevronLeftSvg",{staticClass:"h-5 w-5"}),e("BaseTypography",{attrs:{variant:"subtitle3",component:"span"}},[t._v(" News & Insights ")])],1),e("div",{staticClass:"space-y-3 px-2"},[t.post.published_at?e("time",{attrs:{datetime:t.post.published_at}},[e("BaseTypography",{staticClass:"uppercase text-gray-500",attrs:{variant:"overline",component:"span"}},[t._v(" "+t._s(t.formatDate(t.post.published_at))+" ")])],1):t._e(),e("BaseTypography",{staticClass:"text-prime-navy",attrs:{variant:"h3",component:"h1"}},[t._v(" "+t._s(t.post.title)+" ")]),e("BaseTypography",{staticClass:"text-gray-500",attrs:{variant:"p2",component:"p"}},[e("strong",[t._v(" "+t._s(`${t.post.author.firstname} ${t.post.author.lastname}`)+" ")])]),e("ClientOnly",[e("div",{staticClass:"flex justify-end"},t._l(t.social,function(r){var g=r.name,s=r.component;return e("ShareNetwork",{key:g,staticClass:"px-1",attrs:{network:g,url:t.blogUrl,title:t.post.title,description:t.post.list_description?t.post.list_description:""}},[e(s,{tag:"Component",staticClass:"h-6 w-6 cursor-pointer text-gray-600"})],1)}),1)]),e("div",[e("LazyImg",{staticClass:"my-8 w-full rounded-lg",attrs:{src:t.imageUrl,alt:t.altText,"options-placeholder":{w:48},options:{w:768,il:!0}}})],1),e("div",{staticClass:"prose",domProps:{innerHTML:t._s(t.bodyAsHtml)}})],1)],1):t._e()])},V=[];const w={};var C=Q(u,K,V,!1,tt,null,null,null);function tt(t){for(let o in w)this[o]=w[o]}typeof x=="function"&&x(C);const nt=function(){return C.exports}();export{nt as default};
