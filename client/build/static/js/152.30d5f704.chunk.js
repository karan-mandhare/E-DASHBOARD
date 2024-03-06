"use strict";(self.webpackChunkclient=self.webpackChunkclient||[]).push([[152],{9348:(e,a,s)=>{s.d(a,{c:()=>g});s(9060);var l=s(496),t=s(12),n=s(3928),r=s(9652),c=s(7640),o=s(8372),i=s(1560),d=s(2496);const m=()=>{const[e,a]=(0,c.k)(),s=(0,i.i6)();return(0,d.jsx)("div",{children:(0,d.jsxs)("form",{className:"search-form d-flex",role:"search",onSubmit:async l=>{l.preventDefault();try{const{data:l}=await o.c.get("/api/v1/product/search/".concat(e.keyword));a({...e,results:l}),s("/search")}catch(t){console.log(t)}},children:[(0,d.jsx)("input",{className:"form-control me-2",type:"search",placeholder:"Search","aria-label":"Search",value:e.keyword,onChange:s=>a({...e,keyword:s.target.value})}),(0,d.jsx)("button",{className:"btn btn-outline-success",type:"submit",children:"Search"})]})})};var u=s(6068),h=s(2020),x=s(6952);const p=()=>{var e,a;const[s,l]=(0,n.S)(),[c]=(0,h.G)(),o=(0,u.c)();return(0,d.jsx)(d.Fragment,{children:(0,d.jsx)("nav",{className:"navbar navbar-expand-lg bg-body-tertiary fixed-top",children:(0,d.jsxs)("div",{className:"container-fluid",children:[(0,d.jsx)("button",{className:"navbar-toggler",type:"button","data-bs-toggle":"collapse","data-bs-target":"#navbarSupportedContent","aria-controls":"navbarSupportedContent","aria-expanded":"false","aria-label":"Toggle navigation",children:(0,d.jsx)("span",{className:"navbar-toggler-icon"})}),(0,d.jsxs)("div",{className:"collapse navbar-collapse",id:"navbarSupportedContent",children:[(0,d.jsx)(t.cH,{className:"navbar-brand",to:"/",children:"\ud83d\uded2Ecommerce App"}),(0,d.jsxs)("ul",{className:"navbar-nav ms-auto mb-2 mb-lg-0",children:[(0,d.jsx)(m,{}),(0,d.jsx)("li",{className:"nav-item ms-2",children:(0,d.jsx)(t.Af,{className:"nav-link",to:"/",children:"Home"})}),(0,d.jsxs)("li",{className:"nav-item dropdown",children:[(0,d.jsx)(t.cH,{className:"nav-link dropdown-toggle",to:"/categories",role:"button","data-bs-toggle":"dropdown","aria-expanded":"false",children:"Categories"}),(0,d.jsxs)("ul",{className:"dropdown-menu",children:[(0,d.jsx)("li",{children:(0,d.jsx)(t.cH,{className:"dropdown-item",to:"/categories",children:"All Categories"})}),null===o||void 0===o?void 0:o.map((e=>(0,d.jsx)("li",{children:(0,d.jsx)(t.cH,{className:"dropdown-item",to:"/category/".concat(e.slug),children:e.name})},e._id)))]})]}),s.user?(0,d.jsx)(d.Fragment,{children:(0,d.jsxs)("li",{className:"nav-item dropdown",children:[(0,d.jsx)(t.Af,{className:"nav-link dropdown-toggle",role:"button","data-bs-toggle":"dropdown",to:"#","aria-expanded":"false",children:null===s||void 0===s||null===(e=s.user)||void 0===e?void 0:e.name}),(0,d.jsxs)("ul",{className:"dropdown-menu",children:[(0,d.jsx)("li",{children:(0,d.jsx)(t.Af,{className:"dropdown-item",to:"/dashboard/".concat(1===(null===s||void 0===s||null===(a=s.user)||void 0===a?void 0:a.role)?"admin":"user"),children:"Dashboard"})}),(0,d.jsx)("li",{children:(0,d.jsx)(t.Af,{onClick:()=>{l({...s,user:null,token:""}),localStorage.removeItem("auth"),r.cp.success("Logout successfully")},className:"dropdown-item",to:"/login",children:"Logout"})})]})]})}):(0,d.jsxs)(d.Fragment,{children:[(0,d.jsx)("li",{className:"nav-item",children:(0,d.jsx)(t.Af,{className:"nav-link",to:"/register",children:"Register"})}),(0,d.jsx)("li",{className:"nav-item",children:(0,d.jsx)(t.Af,{className:"nav-link",to:"/login",children:"Login"})})]}),(0,d.jsx)("li",{className:"nav-item mt-2",children:(0,d.jsx)(x.c,{count:null===c||void 0===c?void 0:c.length,showZero:!0,children:(0,d.jsx)(t.Af,{className:"nav-link",to:"/cart",children:"Cart"})})})]})]})]})})})},j=()=>(0,d.jsxs)("div",{className:"footer",children:[(0,d.jsx)("h1",{className:"text-center",children:"All Right Reserved \xa9 KaranM"}),(0,d.jsxs)("p",{className:"text-center mt-3",children:[(0,d.jsx)(t.cH,{to:"/about",children:"About"}),(0,d.jsx)(t.cH,{to:"/contact",children:"Contact"}),(0,d.jsx)(t.cH,{to:"/policy",children:"Private Policy"})]})]}),v=e=>{let{children:a,title:s,description:t,keywords:n,author:c}=e;return(0,d.jsxs)("div",{children:[(0,d.jsxs)(l.S,{children:[(0,d.jsx)("meta",{charSet:"utf-8"}),(0,d.jsx)("meta",{name:"description",content:t}),(0,d.jsx)("meta",{name:"keywords",content:n}),(0,d.jsx)("meta",{name:"author",content:c}),(0,d.jsx)("title",{children:s})]}),(0,d.jsx)(p,{}),(0,d.jsxs)("main",{style:{minHeight:"70vh"},children:[(0,d.jsx)(r.ox,{}),a]}),(0,d.jsx)(j,{})]})};v.defaultProps={title:"Ecommerce app",description:"mern stack project",keywords:"mern,react,node,mongodb,express",author:"karanm_"};const g=v},6068:(e,a,s)=>{s.d(a,{c:()=>n});var l=s(9060),t=s(8372);function n(){const[e,a]=(0,l.useState)([]);return(0,l.useEffect)((()=>{(async()=>{try{const{data:e}=await t.c.get("/api/v1/category/get-category");a(null===e||void 0===e?void 0:e.category)}catch(e){console.log(e)}})()}),[]),e}},1152:(e,a,s)=>{s.r(a),s.d(a,{default:()=>i});var l=s(9060),t=s(9348),n=s(9652),r=s(8372),c=s(1560),o=(s(3488),s(2496));const i=()=>{const[e,a]=(0,l.useState)(""),[s,i]=(0,l.useState)(""),[d,m]=(0,l.useState)(""),[u,h]=(0,l.useState)(""),[x,p]=(0,l.useState)(""),[j,v]=(0,l.useState)(""),g=(0,c.i6)();return(0,o.jsx)(t.c,{title:"Register - Ecommerce App",children:(0,o.jsx)("div",{className:"form-container",children:(0,o.jsxs)("form",{onSubmit:async a=>{a.preventDefault();try{const a=await r.c.post("/api/v1/auth/register",{name:e,email:s,password:d,phone:u,address:x,answer:j});a&&a.data.success?(n.cp.success(a.data&&a.data.message),g("/login")):n.cp.error(a.data.message)}catch(l){console.log(l),n.cp.error("Something went wrong!")}},children:[(0,o.jsx)("h4",{className:"title",children:"REGISTER FORM"}),(0,o.jsxs)("div",{className:"mb-3",children:[(0,o.jsx)("label",{htmlFor:"exampleInputName",className:"form-label",children:"Name"}),(0,o.jsx)("input",{type:"text",className:"form-control",id:"exampleInputName",value:e,onChange:e=>a(e.target.value),required:!0})]}),(0,o.jsxs)("div",{className:"mb-3",children:[(0,o.jsx)("label",{htmlFor:"exampleInputEmail1",className:"form-label",children:"Email"}),(0,o.jsx)("input",{type:"email",className:"form-control",id:"exampleInputEmail1",value:s,onChange:e=>i(e.target.value),required:!0})]}),(0,o.jsxs)("div",{className:"mb-3",children:[(0,o.jsx)("label",{htmlFor:"exampleInputPassword1",className:"form-label",children:"Password"}),(0,o.jsx)("input",{type:"password",className:"form-control",id:"exampleInputPassword1",value:d,onChange:e=>m(e.target.value),required:!0})]}),(0,o.jsxs)("div",{className:"mb-3",children:[(0,o.jsx)("label",{htmlFor:"exampleInputPhone",className:"form-label",children:"Phone"}),(0,o.jsx)("input",{type:"text",className:"form-control",id:"exampleInputPhone",value:u,onChange:e=>h(e.target.value),required:!0})]}),(0,o.jsxs)("div",{className:"mb-3",children:[(0,o.jsx)("label",{htmlFor:"exampleInputAddress",className:"form-label",children:"Address"}),(0,o.jsx)("input",{type:"text",className:"form-control",id:"exampleInputAddress",value:x,onChange:e=>p(e.target.value),required:!0})]}),(0,o.jsxs)("div",{className:"mb-3",children:[(0,o.jsx)("label",{htmlFor:"exampleInputAnswer",className:"form-label",children:"What is your best friend name ?"}),(0,o.jsx)("input",{type:"text",className:"form-control",id:"exampleInputAnswer",value:j,onChange:e=>v(e.target.value),required:!0})]}),(0,o.jsx)("button",{type:"submit",className:"btn btn-primary",children:"Register"})]})})})}},3488:()=>{}}]);
//# sourceMappingURL=152.30d5f704.chunk.js.map