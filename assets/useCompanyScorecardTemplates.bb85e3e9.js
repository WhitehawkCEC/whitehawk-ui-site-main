import{af as n,aS as o,aC as u,aO as t,aP as s}from"./index.f9aabd94.js";const l={get(e){return n(["companies",e,"scorecards","template"],()=>t.get(`${s}/companies/${e.value}/scorecards/template`).then(a=>a.data))},set(e){const a=o();return u(r=>t.put(`${s}/companies/${e.value}/scorecards/template`,r).then(c=>c.data),{onSuccess(){a.invalidateQueries(["companies",e,"scorecards","template"],{exact:!0})}})}};export{l as u};