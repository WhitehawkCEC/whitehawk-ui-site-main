import{ah as n,aT as o,aD as u,aP as t,aQ as s}from"./index.bf67f21b.js";const l={get(e){return n(["companies",e,"scorecards","template"],()=>t.get(`${s}/companies/${e.value}/scorecards/template`).then(a=>a.data))},set(e){const a=o();return u(r=>t.put(`${s}/companies/${e.value}/scorecards/template`,r).then(c=>c.data),{onSuccess(){a.invalidateQueries(["companies",e,"scorecards","template"],{exact:!0})}})}};export{l as u};