"use strict";(self.webpackChunkclient=self.webpackChunkclient||[]).push([[420],{9348:(e,s,a)=>{a.d(s,{c:()=>g});a(9060);var l=a(496),n=a(12),r=a(3928),c=a(9652),t=a(7640),o=a(8372),i=a(1560),d=a(2496);const m=()=>{const[e,s]=(0,t.k)(),a=(0,i.i6)();return(0,d.jsx)("div",{children:(0,d.jsxs)("form",{className:"search-form d-flex",role:"search",onSubmit:async l=>{l.preventDefault();try{const{data:l}=await o.c.get("/api/v1/product/search/".concat(e.keyword));s({...e,results:l}),a("/search")}catch(n){console.log(n)}},children:[(0,d.jsx)("input",{className:"form-control me-2",type:"search",placeholder:"Search","aria-label":"Search",value:e.keyword,onChange:a=>s({...e,keyword:a.target.value})}),(0,d.jsx)("button",{className:"btn btn-outline-success",type:"submit",children:"Search"})]})})};var h=a(6068),u=a(2020),x=a(6952);const v=()=>{var e,s;const[a,l]=(0,r.S)(),[t]=(0,u.G)(),o=(0,h.c)();return(0,d.jsx)(d.Fragment,{children:(0,d.jsx)("nav",{className:"navbar navbar-expand-lg bg-body-tertiary fixed-top",children:(0,d.jsxs)("div",{className:"container-fluid",children:[(0,d.jsx)("button",{className:"navbar-toggler",type:"button","data-bs-toggle":"collapse","data-bs-target":"#navbarSupportedContent","aria-controls":"navbarSupportedContent","aria-expanded":"false","aria-label":"Toggle navigation",children:(0,d.jsx)("span",{className:"navbar-toggler-icon"})}),(0,d.jsxs)("div",{className:"collapse navbar-collapse",id:"navbarSupportedContent",children:[(0,d.jsx)(n.cH,{className:"navbar-brand",to:"/",children:"\ud83d\uded2Ecommerce App"}),(0,d.jsxs)("ul",{className:"navbar-nav ms-auto mb-2 mb-lg-0",children:[(0,d.jsx)(m,{}),(0,d.jsx)("li",{className:"nav-item ms-2",children:(0,d.jsx)(n.Af,{className:"nav-link",to:"/",children:"Home"})}),(0,d.jsxs)("li",{className:"nav-item dropdown",children:[(0,d.jsx)(n.cH,{className:"nav-link dropdown-toggle",to:"/categories",role:"button","data-bs-toggle":"dropdown","aria-expanded":"false",children:"Categories"}),(0,d.jsxs)("ul",{className:"dropdown-menu",children:[(0,d.jsx)("li",{children:(0,d.jsx)(n.cH,{className:"dropdown-item",to:"/categories",children:"All Categories"})}),null===o||void 0===o?void 0:o.map((e=>(0,d.jsx)("li",{children:(0,d.jsx)(n.cH,{className:"dropdown-item",to:"/category/".concat(e.slug),children:e.name})},e._id)))]})]}),a.user?(0,d.jsx)(d.Fragment,{children:(0,d.jsxs)("li",{className:"nav-item dropdown",children:[(0,d.jsx)(n.Af,{className:"nav-link dropdown-toggle",role:"button","data-bs-toggle":"dropdown",to:"#","aria-expanded":"false",children:null===a||void 0===a||null===(e=a.user)||void 0===e?void 0:e.name}),(0,d.jsxs)("ul",{className:"dropdown-menu",children:[(0,d.jsx)("li",{children:(0,d.jsx)(n.Af,{className:"dropdown-item",to:"/dashboard/".concat(1===(null===a||void 0===a||null===(s=a.user)||void 0===s?void 0:s.role)?"admin":"user"),children:"Dashboard"})}),(0,d.jsx)("li",{children:(0,d.jsx)(n.Af,{onClick:()=>{l({...a,user:null,token:""}),localStorage.removeItem("auth"),c.cp.success("Logout successfully")},className:"dropdown-item",to:"/login",children:"Logout"})})]})]})}):(0,d.jsxs)(d.Fragment,{children:[(0,d.jsx)("li",{className:"nav-item",children:(0,d.jsx)(n.Af,{className:"nav-link",to:"/register",children:"Register"})}),(0,d.jsx)("li",{className:"nav-item",children:(0,d.jsx)(n.Af,{className:"nav-link",to:"/login",children:"Login"})})]}),(0,d.jsx)("li",{className:"nav-item mt-2",children:(0,d.jsx)(x.c,{count:null===t||void 0===t?void 0:t.length,showZero:!0,children:(0,d.jsx)(n.Af,{className:"nav-link",to:"/cart",children:"Cart"})})})]})]})]})})})},j=()=>(0,d.jsxs)("div",{className:"footer",children:[(0,d.jsx)("h1",{className:"text-center",children:"All Right Reserved \xa9 KaranM"}),(0,d.jsxs)("p",{className:"text-center mt-3",children:[(0,d.jsx)(n.cH,{to:"/about",children:"About"}),(0,d.jsx)(n.cH,{to:"/contact",children:"Contact"}),(0,d.jsx)(n.cH,{to:"/policy",children:"Private Policy"})]})]}),p=e=>{let{children:s,title:a,description:n,keywords:r,author:t}=e;return(0,d.jsxs)("div",{children:[(0,d.jsxs)(l.S,{children:[(0,d.jsx)("meta",{charSet:"utf-8"}),(0,d.jsx)("meta",{name:"description",content:n}),(0,d.jsx)("meta",{name:"keywords",content:r}),(0,d.jsx)("meta",{name:"author",content:t}),(0,d.jsx)("title",{children:a})]}),(0,d.jsx)(v,{}),(0,d.jsxs)("main",{style:{minHeight:"70vh"},children:[(0,d.jsx)(c.ox,{}),s]}),(0,d.jsx)(j,{})]})};p.defaultProps={title:"Ecommerce app",description:"mern stack project",keywords:"mern,react,node,mongodb,express",author:"karanm_"};const g=p},6280:(e,s,a)=>{a.d(s,{c:()=>r});a(9060);var l=a(12),n=a(2496);const r=()=>(0,n.jsx)(n.Fragment,{children:(0,n.jsx)("div",{className:"text-center",children:(0,n.jsxs)("div",{className:"list-group",children:[(0,n.jsx)("h4",{children:"Dashboard"}),(0,n.jsx)(l.Af,{to:"/dashboard/user/profile",className:"list-group-item list-group-item-action",children:"Profile"}),(0,n.jsx)(l.Af,{to:"/dashboard/user/orders",className:"list-group-item list-group-item-action",children:"Orders"})]})})})},6068:(e,s,a)=>{a.d(s,{c:()=>r});var l=a(9060),n=a(8372);function r(){const[e,s]=(0,l.useState)([]);return(0,l.useEffect)((()=>{(async()=>{try{const{data:e}=await n.c.get("/api/v1/category/get-category");s(null===e||void 0===e?void 0:e.category)}catch(e){console.log(e)}})()}),[]),e}},6420:(e,s,a)=>{a.r(s),a.d(s,{default:()=>t});a(9060);var l=a(9348),n=a(6280),r=a(3928),c=a(2496);const t=()=>{var e,s,a;const[t]=(0,r.S)();return(0,c.jsx)(l.c,{title:"Dashboard - Ecommerce App",children:(0,c.jsx)("div",{className:"container-fluid p-3 mr-3 my-5",children:(0,c.jsxs)("div",{className:"row",children:[(0,c.jsx)("div",{className:"col-md-3",children:(0,c.jsx)(n.c,{})}),(0,c.jsx)("div",{className:"col-md-9",children:(0,c.jsxs)("div",{className:"card w-75 p-3",children:[(0,c.jsx)("h3",{children:null===t||void 0===t||null===(e=t.user)||void 0===e?void 0:e.name}),(0,c.jsx)("h3",{children:null===t||void 0===t||null===(s=t.user)||void 0===s?void 0:s.email}),(0,c.jsx)("h3",{children:null===t||void 0===t||null===(a=t.user)||void 0===a?void 0:a.address})]})})]})})})}}}]);
//# sourceMappingURL=420.27c55d04.chunk.js.map