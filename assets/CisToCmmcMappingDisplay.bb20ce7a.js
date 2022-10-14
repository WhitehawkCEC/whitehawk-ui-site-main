import{n as m,c}from"./index.0f72a133.js";const i={};i.props={level:{key:"level",required:!1,type:null}};i.setup=(t,n)=>({});var y=function(){var t=this,n=t.$createElement,e=t._self._c||n;return t.level?e("div",{staticClass:"flex items-center justify-center"},[t.level.category?[e("svg",{staticClass:"h-3 w-3 fill-current",class:{"text-green-400":t.level.category==="ADVANCED","text-yellow-300":t.level.category==="INTERMEDIATE","text-red-400":t.level.category==="BASIC"},attrs:{viewBox:"-4 -4 8 8"}},[e("circle",{attrs:{stroke:"1",r:"4"}})])]:[e("span",[t._v("-")])]],2):t._e()},b=[];const u={};var x=m(i,y,b,!1,f,null,null,null);function f(t){for(let n in u)this[n]=u[n]}const C=function(){return x.exports}(),h=[{number:1,description:"Inventory and Control of Hardware Assets"},{number:2,description:"Inventory and Control of Software Assets"},{number:3,description:"Continuous Vulnerability Management"},{number:4,description:"Controlled Use of Administrative Privileges"},{number:5,description:"Secure Configuration for HW & SW on Mobile Devices, Laptops, Workstations and Servers"},{number:6,description:"Maintenance, Monitoring and Analysis of Audit Logs"},{number:7,description:"Email and Web Browser Protections"},{number:8,description:"Malware Defenses"},{number:9,description:"Limitation and Control of Network Ports, Protocols, and Services"},{number:10,description:"Data Recovery Capabilities"},{number:11,description:"Secure Configuration for Network Devices, such as Firewalls, Routers and Switches"},{number:12,description:"Boundary Defense"},{number:13,description:"Data Protection"},{number:14,description:"Controlled Access Based on the Need to Know"},{number:15,description:"Wireless Access Control"},{number:16,description:"Account Monitoring and Control"},{number:17,description:"Implement a Security Awareness and Training Program"},{number:18,description:"Application Software Security"},{number:19,description:"Incident Response and Management"},{number:20,description:"Penetration Tests and Red Team Exercises"}],a={};a.props={value:{key:"value",required:!0,type:null}};a.setup=(t,n)=>{const r=[2,3,4,6,10,11,17,19,...[1,5,8,12,13,14,15,16]],s=[7,9,18,...r],o=[20,...s],d=t,_=c(()=>[{text:"Description",srOnly:!0},{text:"Number",srOnly:!0,borderRight:!0},{text:"L1",textCenter:!0},{text:"L2",textCenter:!0},{text:"L3",textCenter:!0},{text:"L4/L5",textCenter:!0}]),v=c(()=>["L1","L2","L3","L4"]),g=c(()=>o.map(l=>({cis:h[l-1],cmmc:d.value.mapping[`_${l}`]})));return{headers:_,levels:v,rows:g}};a.components=Object.assign({CmmcColoredBall:C},a.components);var w=function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("table",{staticClass:"w-full leading-4"},[e("colgroup",{attrs:{span:"2"}}),e("colgroup",{attrs:{span:"4"}}),e("thead",[t._m(0),e("tr",t._l(t.headers,function(r){return e("th",{key:r.text,staticClass:"border-b border-gray-300 bg-gray-200 px-4 py-2 text-sm font-medium tracking-wider text-gray-700",class:{"border-r":r.borderRight},attrs:{scope:"col"}},[e("span",{class:{"sr-only":r.srOnly,"text-left":!r.textCenter,"text-center":r.textCenter}},[t._v(" "+t._s(r.text)+" ")])])}),0)]),e("tbody",t._l(t.rows,function(r,s){return e("tr",{key:r.cis?r.cis.description:s,class:{"bg-gray-50":s%2===1}},[r.cis?e("th",{staticClass:"px-4 py-2 text-left text-sm font-normal text-gray-900",class:{"bg-gray-50":s%2===1},attrs:{scope:"row"}},[t._v(" "+t._s(r.cis.description)+" ")]):t._e(),r.cis?e("td",{staticClass:"border-r border-gray-200 px-4 py-2 text-right text-sm font-normal text-gray-900",class:{"bg-gray-50":s%2===1}},[t._v(" #"+t._s(r.cis.number)+" ")]):t._e(),t._l(t.levels,function(o){return e("td",{key:o},[r.cmmc&&r.cmmc[o]?e("div",[e("CmmcColoredBall",{attrs:{level:r.cmmc[o]}})],1):t._e()])})],2)}),0),e("tfoot",[e("tr",[t._m(1),t._l(t.value.totals,function(r,s){return e("td",{key:s,staticClass:"border-t border-gray-300 bg-gray-200 px-4 py-2 text-sm font-medium tracking-wider text-gray-700"},[e("span",{staticClass:"text-center"},[t._v(" "+t._s(r.numAdvanced)+"/"+t._s(r.numTotal)+" ")])])})],2)])])},A=[function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("tr",[e("th",{staticClass:"border-r border-gray-300 bg-gray-200 px-4 py-2 text-left text-sm font-medium uppercase tracking-wider text-gray-600",attrs:{scope:"colgroup",colspan:"2"}},[t._v(" CIS Controls ")]),e("th",{staticClass:"bg-gray-200 px-4 py-2 text-left text-sm font-medium uppercase tracking-wider text-gray-600",attrs:{scope:"colgroup",colspan:"4"}},[t._v(" CMMC Maturity Levels ")])])},function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("th",{staticClass:"border-t border-r border-gray-300 bg-gray-200",attrs:{scope:"row",colspan:"2"}},[e("span",{staticClass:"sr-only"},[t._v("Counts")])])}];const p={};var k=m(a,w,A,!1,M,null,null,null);function M(t){for(let n in p)this[n]=p[n]}const L=function(){return k.exports}();export{L as C,h as c};
