import{aT as o,aD as n,ag as u,aP as s,aQ as t}from"./index.ffd5f45d.js";const p={create(a){const e=o();return n(c=>s.post(`${t}/companies/${a.value}/batch/scorecards`,c).then(r=>r.data),{onSuccess(){e.invalidateQueries(["companies",a,"batch","scorecards"],{exact:!0})}})},list(a){return u(["companies",a,"batch","scorecards"],()=>s.get(`${t}/companies/${a.value}/batch/scorecards`).then(e=>e.data))}};export{p as u};
