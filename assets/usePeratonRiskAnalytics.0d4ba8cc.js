import{c as a}from"./index.89daa9e1.js";import{R as i}from"./index.3f69bf94.js";const u={read(r,o){if(!r.value)throw new Error("Missing ID.");return a(()=>{const e=i.value.find(t=>t.company.id.value===o.value);if(e)return e})},list(r){if(!r.value)throw new Error("Missing ID.");return a(()=>i.value)}};export{u};