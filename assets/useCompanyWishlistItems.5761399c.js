import{aT as u,aD as l,aP as i,aQ as a,ah as r}from"./index.1543f442.js";const m={update(e){const s=u();return l(t=>i.put(`${a}/companies/${e.value}/wish-list-items`,t).then(n=>n.data),{onSuccess(){s.invalidateQueries(["companies",e,"wish-list-items"],{exact:!0})}})},delete(e){const s=u();return l(t=>i.delete(`${a}/companies/${e.value}/wish-list-items/${t}`).then(n=>n.data),{onSuccess(){s.invalidateQueries(["companies",e,"wish-list-items"],{exact:!0})}})},deleteAll(e){const s=u();return l(()=>i.delete(`${a}/companies/${e.value}/wish-list-items`).then(t=>t.data),{onSuccess(){s.invalidateQueries(["companies",e,"wish-list-items"],{exact:!0})}})},list(e){return r(["companies",e,"wish-list-items"],()=>i.get(`${a}/companies/${e.value}/wish-list-items`).then(s=>s.data))}};export{m as u};