import{aS as n,aD as u,ah as o,aO as r,aP as c}from"./index.7b120442.js";const l={create(e){const a=n();return u(s=>r.post(`${c}/companies/${e.value}/scorecards-v2`,s).then(t=>t.data),{onSuccess(s){a.invalidateQueries(["companies",e,"scorecards-v2"],{exact:!0}),a.invalidateQueries(["companies",e,"scorecards-v2",s.id],{exact:!0})}})},read(e,a){return o(["companies",e,"scorecards-v2",a],()=>r.get(`${c}/companies/${e.value}/scorecards-v2/${a.value}`).then(s=>s.data))},update(e,a){const s=n();return u(t=>r.put(`${c}/companies/${e.value}/scorecards-v2/${a.value}`,t).then(i=>i.data),{onSuccess(){s.invalidateQueries(["companies",e,"scorecards-v2",a],{exact:!0})}})},delete(e,a){const s=n();return u(()=>r.delete(`${c}/companies/${e.value}scorecards-v2/${a.value}`).then(t=>t.data),{onSuccess(){s.invalidateQueries(["companies",e,"scorecards-v2",a],{exact:!0})}})},list(e){return o(["companies",e,"scorecards-v2"],()=>r.get(`${c}/companies/${e.value}/scorecards-v2`).then(a=>a.data))}};export{l as u};
