import{ag as s,aT as o,aD as c,aP as a,aQ as u}from"./index.1e14903e.js";const p={read(t){return s(["products",t],()=>a.get(`${u}/products/${t.value}`).then(e=>e.data))},update(t){const e=o();return c(r=>a.put(`${u}/products/${t.value}`,r).then(n=>n.data),{onSuccess(){e.invalidateQueries(["products",t],{exact:!0})}})},list(){return s(["products"],()=>a.get(`${u}/products`).then(t=>t.data))}};export{p as u};