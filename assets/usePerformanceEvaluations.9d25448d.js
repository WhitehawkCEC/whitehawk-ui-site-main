import{ag as n,c as s,aP as r,aQ as t}from"./index.cb90a26d.js";const c={list(a,e){return n(["companies",a,"bitsight","companies",e,"performance-evaluation"],()=>r.get(`${t}/companies/${a.value}/bitsight/companies/${e.value}/performance-evaluation`).then(o=>o.data),{enabled:s(()=>e.value!==void 0&&a.value!==void 0)})}};export{c as u};